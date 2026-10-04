import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { administradorAutenticado } from "@/lib/admin-auth";

interface Submissao {
  id: string;
  estado: string;
  dataSubmissao: string;
  tipo: string;
  titulo: string;
  autor: string;
  instituicao: string;
  email: string;
  orcid: string;
  area: string;
  provincia: string;
  ano: string;
  palavrasChave: string[];
  resumo: string;
  documento: {
    nomeOriginal: string;
    nomeGuardado: string;
    tamanho: number;
    tipo: string;
  };
}

export async function PATCH(
  request: Request,
  context: {
    params: Promise<{ id: string }>;
  }
) {
  try {
    const autenticado =
      await administradorAutenticado();

    if (!autenticado) {
      return NextResponse.json(
        {
          erro: "Não autorizado.",
        },
        { status: 401 }
      );
    }

    const { id } = await context.params;

    const body = await request.json();

    const estado = String(
      body.estado || ""
    ).trim();

    if (
      estado !== "Aprovada" &&
      estado !== "Rejeitada"
    ) {
      return NextResponse.json(
        {
          erro:
            "Estado de submissão inválido.",
        },
        { status: 400 }
      );
    }

    const pastaBase = path.join(
      process.cwd(),
      "data",
      "submissoes"
    );

    const pastaSubmissao = path.join(
      pastaBase,
      id
    );

    const caminhoJson = path.join(
      pastaSubmissao,
      "submissao.json"
    );

    try {
      await fs.access(caminhoJson);
    } catch {
      return NextResponse.json(
        {
          erro:
            "Submissão não encontrada.",
        },
        { status: 404 }
      );
    }

    const conteudo =
      await fs.readFile(
        caminhoJson,
        "utf-8"
      );

    const submissao =
      JSON.parse(conteudo) as Submissao;

    submissao.estado = estado;

    await fs.writeFile(
      caminhoJson,
      JSON.stringify(
        submissao,
        null,
        2
      ),
      "utf-8"
    );

    return NextResponse.json({
      sucesso: true,
      id,
      estado,
    });
  } catch (error) {
    console.error(
      "Erro ao actualizar submissão:",
      error
    );

    return NextResponse.json(
      {
        erro:
          "Não foi possível actualizar a submissão.",
      },
      { status: 500 }
    );
  }
}