import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

interface Submissao {
  id: string;
  estado: string;
  documento: {
    nomeOriginal: string;
    nomeGuardado: string;
    tamanho: number;
    tipo: string;
  };
}

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

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

    /*
     * Verifica se a submissão existe.
     */
    let submissao: Submissao;

    try {
      const conteudo = await fs.readFile(
        caminhoJson,
        "utf-8"
      );

      submissao = JSON.parse(
        conteudo
      ) as Submissao;
    } catch {
      return NextResponse.json(
        {
          erro: "Documento não encontrado.",
        },
        { status: 404 }
      );
    }

    /*
     * Apenas trabalhos aprovados
     * podem ser disponibilizados publicamente.
     */
    if (submissao.estado !== "Aprovada") {
      return NextResponse.json(
        {
          erro: "Este documento ainda não está disponível publicamente.",
        },
        { status: 403 }
      );
    }

    const caminhoPdf = path.join(
      pastaSubmissao,
      submissao.documento.nomeGuardado
    );

    /*
     * Lê o PDF.
     */
    const ficheiro = await fs.readFile(
      caminhoPdf
    );

    /*
     * Define o nome original para download.
     */
    const nomeOriginal =
      submissao.documento.nomeOriginal ||
      "documento.pdf";

    /*
     * Determina se o pedido pretende
     * descarregar ou apenas visualizar.
     */
    const url = new URL(request.url);
    const download =
      url.searchParams.get("download") === "1";

    return new NextResponse(ficheiro, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",

        "Content-Disposition": download
          ? `attachment; filename="${nomeOriginal}"`
          : `inline; filename="${nomeOriginal}"`,

        "Cache-Control":
          "public, max-age=3600",
      },
    });
  } catch (error) {
    console.error(
      "Erro ao disponibilizar documento:",
      error
    );

    return NextResponse.json(
      {
        erro:
          "Não foi possível disponibilizar o documento.",
      },
      { status: 500 }
    );
  }
}