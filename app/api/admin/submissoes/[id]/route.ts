
import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";
import { administradorAutenticado } from "@/lib/admin-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ESTADOS_PERMITIDOS = ["Aprovada", "Rejeitada"] as const;

const CABECALHOS = {
  "Cache-Control": "no-store",
};

type ContextoRota = {
  params: Promise<{ id: string }>;
};

type RegistoSubmissao = Record<string, unknown>;

type ResultadoLeitura =
  | { sucesso: true; dados: RegistoSubmissao }
  | { sucesso: false; erro: string; status: number };

function respostaErro(erro: string, status: number) {
  return NextResponse.json(
    { sucesso: false, erro },
    { status, headers: CABECALHOS }
  );
}

function validarId(id: string): boolean {
  return /^AGRI-\d{4}-[A-F0-9]{8}$/i.test(id);
}

function obterCaminhos(id: string) {
  const pastaBase = path.resolve(
    process.cwd(),
    "data",
    "submissoes"
  );

  const pastaSubmissao = path.resolve(pastaBase, id);

  if (!pastaSubmissao.startsWith(pastaBase + path.sep)) {
    throw new Error("Caminho de submissão inválido.");
  }

  return {
    pastaSubmissao,
    caminhoJson: path.join(pastaSubmissao, "submissao.json"),
  };
}

async function lerSubmissao(
  caminhoJson: string,
  id: string
): Promise<ResultadoLeitura> {
  let conteudo: string;

  try {
    conteudo = await fs.readFile(caminhoJson, "utf8");
  } catch (error) {
    const codigo = (error as NodeJS.ErrnoException).code;

    if (codigo === "ENOENT") {
      return {
        sucesso: false,
        erro: "Submissão não encontrada.",
        status: 404,
      };
    }

    throw error;
  }

  let dados: unknown;

  try {
    dados = JSON.parse(conteudo);
  } catch {
    return {
      sucesso: false,
      erro: "O registo da submissão contém dados inválidos.",
      status: 500,
    };
  }

  if (
    !dados ||
    typeof dados !== "object" ||
    Array.isArray(dados) ||
    (dados as Record<string, unknown>).id !== id
  ) {
    return {
      sucesso: false,
      erro: "O identificador não corresponde ao registo.",
      status: 400,
    };
  }

  return {
    sucesso: true,
    dados: dados as RegistoSubmissao,
  };
}

async function autorizarAdministrador(
  context: ContextoRota
): Promise<
  | { sucesso: true; id: string }
  | { sucesso: false; erro: string; status: number }
> {
  if (!(await administradorAutenticado())) {
    return {
      sucesso: false,
      erro: "Não autorizado. Inicia sessão como administrador.",
      status: 401,
    };
  }

  const { id } = await context.params;

  if (!validarId(id)) {
    return {
      sucesso: false,
      erro: "Identificador de submissão inválido.",
      status: 400,
    };
  }

  return { sucesso: true, id };
}

/**
 * PATCH /api/admin/submissoes/[id]
 * Aprova ou rejeita uma submissão.
 */
export async function PATCH(
  request: NextRequest,
  context: ContextoRota
) {
  try {
    const autorizacao = await autorizarAdministrador(context);

    if (!autorizacao.sucesso) {
      return respostaErro(autorizacao.erro, autorizacao.status);
    }

    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return respostaErro("O corpo do pedido não contém JSON válido.", 400);
    }

    if (
      !body ||
      typeof body !== "object" ||
      Array.isArray(body)
    ) {
      return respostaErro("Os dados enviados são inválidos.", 400);
    }

    const estado = (body as Record<string, unknown>).estado;

    if (
      typeof estado !== "string" ||
      !ESTADOS_PERMITIDOS.includes(
        estado as (typeof ESTADOS_PERMITIDOS)[number]
      )
    ) {
      return respostaErro(
        "Estado inválido. Utiliza Aprovada ou Rejeitada.",
        400
      );
    }

    const { caminhoJson } = obterCaminhos(autorizacao.id);
    const leitura = await lerSubmissao(caminhoJson, autorizacao.id);

    if (!leitura.sucesso) {
      return respostaErro(leitura.erro, leitura.status);
    }

    const submissaoAtualizada = {
      ...leitura.dados,
      estado,
    };

    await fs.writeFile(
      caminhoJson,
      JSON.stringify(submissaoAtualizada, null, 2) + "\n",
      "utf8"
    );

    return NextResponse.json(
      {
        sucesso: true,
        mensagem:
          estado === "Aprovada"
            ? "Submissão aprovada com sucesso."
            : "Submissão rejeitada com sucesso.",
        estado,
      },
      { headers: CABECALHOS }
    );
  } catch (error) {
    console.error(
      "Erro ao actualizar submissão:",
      error instanceof Error ? error.message : "Erro desconhecido"
    );

    return respostaErro(
      "Não foi possível actualizar a submissão.",
      500
    );
  }
}

/**
 * DELETE /api/admin/submissoes/[id]
 * Elimina o registo e os ficheiros dessa submissão.
 */
export async function DELETE(
  _request: NextRequest,
  context: ContextoRota
) {
  try {
    const autorizacao = await autorizarAdministrador(context);

    if (!autorizacao.sucesso) {
      return respostaErro(autorizacao.erro, autorizacao.status);
    }

    const { pastaSubmissao, caminhoJson } = obterCaminhos(
      autorizacao.id
    );

    const leitura = await lerSubmissao(caminhoJson, autorizacao.id);

    if (!leitura.sucesso) {
      return respostaErro(leitura.erro, leitura.status);
    }

    await fs.rm(pastaSubmissao, {
      recursive: true,
      force: false,
    });

    return NextResponse.json(
      {
        sucesso: true,
        mensagem: "Submissão eliminada com sucesso.",
      },
      { headers: CABECALHOS }
    );
  } catch (error) {
    console.error(
      "Erro ao eliminar submissão:",
      error instanceof Error ? error.message : "Erro desconhecido"
    );

    return respostaErro(
      "Não foi possível eliminar a submissão.",
      500
    );
  }
}
