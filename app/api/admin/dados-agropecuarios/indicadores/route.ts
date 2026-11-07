
import { NextResponse } from "next/server";
import { administradorAutenticado } from "@/lib/admin-auth";
import { obterSupabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TABELA = "agro_indicadores";

const NATUREZAS = [
  "estatistica_oficial",
  "investigacao",
  "observacao_campo",
  "estimativa",
  "administrativa",
] as const;

const ESTADOS = ["rascunho", "publicado", "arquivado"] as const;

type Natureza = (typeof NATUREZAS)[number];
type Estado = (typeof ESTADOS)[number];

type DadosIndicador = {
  dataset_id: string | null;
  codigo: string | null;
  nome: string;
  descricao: string | null;
  categoria: string;
  subcategoria: string | null;
  unidade: string;
  formula: string | null;
  periodicidade: string | null;
  natureza: Natureza;
  estado: Estado;
  actualizado_em: string;
};

function erroJson(mensagem: string, status = 400) {
  return NextResponse.json(
    { sucesso: false, erro: mensagem },
    { status }
  );
}

async function verificarAdministrador() {
  return await administradorAutenticado();
}

function texto(
  valor: unknown,
  limite: number,
  campo: string,
  obrigatorio = false
): string | null {
  if (valor === undefined || valor === null) {
    if (obrigatorio) {
      throw new Error(`O campo ${campo} é obrigatório.`);
    }
    return null;
  }

  if (typeof valor !== "string") {
    throw new Error(`O campo ${campo} deve ser texto.`);
  }

  const resultado = valor.trim();

  if (obrigatorio && !resultado) {
    throw new Error(`O campo ${campo} é obrigatório.`);
  }

  if (resultado.length > limite) {
    throw new Error(
      `O campo ${campo} não pode ultrapassar ${limite} caracteres.`
    );
  }

  return resultado || null;
}

function validarDados(entrada: unknown): DadosIndicador {
  if (
    !entrada ||
    typeof entrada !== "object" ||
    Array.isArray(entrada)
  ) {
    throw new Error("Os dados enviados são inválidos.");
  }

  const dados = entrada as Record<string, unknown>;

  const nome = texto(dados.nome, 200, "nome", true);
  const categoria = texto(dados.categoria, 100, "categoria", true);
  const unidade = texto(dados.unidade, 50, "unidade", true);

  const codigo = texto(dados.codigo, 80, "código");
  const descricao = texto(dados.descricao, 3000, "descrição");
  const subcategoria = texto(
    dados.subcategoria,
    100,
    "subcategoria"
  );
  const formula = texto(dados.formula, 1000, "fórmula");
  const periodicidade = texto(
    dados.periodicidade,
    100,
    "periodicidade"
  );

  const datasetId = texto(
    dados.dataset_id,
    36,
    "dataset_id"
  );

  if (
    datasetId &&
    !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      datasetId
    )
  ) {
    throw new Error("O identificador do conjunto de dados é inválido.");
  }

  const natureza =
    dados.natureza === undefined || dados.natureza === ""
      ? "estatistica_oficial"
      : dados.natureza;

  if (
    typeof natureza !== "string" ||
    !NATUREZAS.includes(natureza as Natureza)
  ) {
    throw new Error("A natureza do indicador é inválida.");
  }

  const estado =
    dados.estado === undefined || dados.estado === ""
      ? "rascunho"
      : dados.estado;

  if (
    typeof estado !== "string" ||
    !ESTADOS.includes(estado as Estado)
  ) {
    throw new Error("O estado do indicador é inválido.");
  }

  return {
    dataset_id: datasetId,
    codigo,
    nome: nome!,
    descricao,
    categoria: categoria!,
    subcategoria,
    unidade: unidade!,
    formula,
    periodicidade,
    natureza: natureza as Natureza,
    estado: estado as Estado,
    actualizado_em: new Date().toISOString(),
  };
}

function tratarErroSupabase(erro: {
  code?: string;
  message?: string;
}) {
  if (erro.code === "23505") {
    return erroJson(
      "Já existe um indicador com esse código.",
      409
    );
  }

  if (erro.code === "23503") {
    return erroJson(
      "O conjunto de dados indicado não existe.",
      400
    );
  }

  console.error("Erro na API de indicadores:", erro);

  return erroJson(
    "Não foi possível concluir a operação na base de dados.",
    500
  );
}

export async function GET() {
  try {
    if (!(await verificarAdministrador())) {
      return erroJson("Sessão administrativa inválida.", 401);
    }

    const supabase = obterSupabaseAdmin();

    const { data, error } = await supabase
      .from(TABELA)
      .select("*")
      .order("criado_em", { ascending: false });

    if (error) {
      return tratarErroSupabase(error);
    }

    return NextResponse.json({
      sucesso: true,
      indicadores: data ?? [],
    });
  } catch (erro) {
    console.error("Erro ao consultar indicadores:", erro);

    return erroJson(
      "Não foi possível consultar os indicadores.",
      500
    );
  }
}

export async function POST(request: Request) {
  try {
    if (!(await verificarAdministrador())) {
      return erroJson("Sessão administrativa inválida.", 401);
    }

    const entrada = await request.json();
    const dados = validarDados(entrada);

    const supabase = obterSupabaseAdmin();

    const { data, error } = await supabase
      .from(TABELA)
      .insert(dados)
      .select("*")
      .single();

    if (error) {
      return tratarErroSupabase(error);
    }

    return NextResponse.json(
      {
        sucesso: true,
        indicador: data,
      },
      { status: 201 }
    );
  } catch (erro) {
    if (erro instanceof Error) {
      if (
        erro.message.includes("obrigatório") ||
        erro.message.includes("caracteres") ||
        erro.message.includes("inválido") ||
        erro.message.includes("deve ser texto")
      ) {
        return erroJson(erro.message, 400);
      }
    }

    console.error("Erro ao criar indicador:", erro);

    return erroJson(
      "Não foi possível criar o indicador.",
      500
    );
  }
}

export async function PATCH(request: Request) {
  try {
    if (!(await verificarAdministrador())) {
      return erroJson("Sessão administrativa inválida.", 401);
    }

    const entrada = await request.json();

    if (
      !entrada ||
      typeof entrada !== "object" ||
      Array.isArray(entrada)
    ) {
      return erroJson("Os dados enviados são inválidos.");
    }

    const id = (entrada as Record<string, unknown>).id;

    if (
      typeof id !== "string" ||
      !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
        id
      )
    ) {
      return erroJson("O identificador do indicador é inválido.");
    }

    const dados = validarDados(entrada);
    const supabase = obterSupabaseAdmin();

    const { data: existente, error: erroConsulta } = await supabase
      .from(TABELA)
      .select("id")
      .eq("id", id)
      .maybeSingle();

    if (erroConsulta) {
      return tratarErroSupabase(erroConsulta);
    }

    if (!existente) {
      return erroJson("Indicador não encontrado.", 404);
    }

    const { data, error } = await supabase
      .from(TABELA)
      .update(dados)
      .eq("id", id)
      .select("*")
      .single();

    if (error) {
      return tratarErroSupabase(error);
    }

    return NextResponse.json({
      sucesso: true,
      indicador: data,
    });
  } catch (erro) {
    if (erro instanceof Error) {
      if (
        erro.message.includes("obrigatório") ||
        erro.message.includes("caracteres") ||
        erro.message.includes("inválido") ||
        erro.message.includes("deve ser texto")
      ) {
        return erroJson(erro.message, 400);
      }
    }

    console.error("Erro ao actualizar indicador:", erro);

    return erroJson(
      "Não foi possível actualizar o indicador.",
      500
    );
  }
}
