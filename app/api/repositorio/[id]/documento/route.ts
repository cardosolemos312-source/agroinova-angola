
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

    // Valida o identificador para impedir acesso a outras pastas.
    if (!/^AGRI-[A-Za-z0-9-]+$/.test(id)) {
      return NextResponse.json(
        { erro: "Identificador de submissão inválido." },
        { status: 400 }
      );
    }

    const pastaBase = path.resolve(
      process.cwd(),
      "data",
      "submissoes"
    );

    const pastaSubmissao = path.resolve(pastaBase, id);

    // Confirma que a pasta está dentro do diretório de submissões.
    if (!pastaSubmissao.startsWith(pastaBase + path.sep)) {
      return NextResponse.json(
        { erro: "Caminho de submissão inválido." },
        { status: 400 }
      );
    }

    const caminhoJson = path.join(
      pastaSubmissao,
      "submissao.json"
    );

    let submissao: Submissao;

    try {
      const conteudo = await fs.readFile(
        caminhoJson,
        "utf-8"
      );

      submissao = JSON.parse(conteudo) as Submissao;
    } catch {
      return NextResponse.json(
        { erro: "Documento não encontrado." },
        { status: 404 }
      );
    }

    // Só disponibiliza documentos aprovados.
    if (submissao.estado !== "Aprovada") {
      return NextResponse.json(
        {
          erro:
            "Este documento ainda não está disponível publicamente.",
        },
        { status: 403 }
      );
    }

    if (
      !submissao.documento ||
      typeof submissao.documento.nomeGuardado !== "string" ||
      !submissao.documento.nomeGuardado.trim()
    ) {
      return NextResponse.json(
        { erro: "Os dados do documento são inválidos." },
        { status: 500 }
      );
    }

    // Impede que o nome do ficheiro permita sair da pasta.
    const nomeGuardado = path.basename(
      submissao.documento.nomeGuardado
    );

    if (nomeGuardado !== submissao.documento.nomeGuardado) {
      return NextResponse.json(
        { erro: "Nome de ficheiro inválido." },
        { status: 400 }
      );
    }

    const caminhoPdf = path.join(
      pastaSubmissao,
      nomeGuardado
    );

    let ficheiro: Buffer;

    try {
      ficheiro = await fs.readFile(caminhoPdf);
    } catch {
      return NextResponse.json(
        { erro: "O ficheiro PDF não foi encontrado." },
        { status: 404 }
      );
    }

    const nomeOriginal =
      path.basename(
        submissao.documento.nomeOriginal || "documento.pdf"
      ).replace(/[\r\n"]/g, "_") || "documento.pdf";

    const url = new URL(request.url);
    const download =
      url.searchParams.get("download") === "1";

    return new NextResponse(new Uint8Array(ficheiro), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `${
          download ? "attachment" : "inline"
        }; filename="${nomeOriginal}"`,
        "X-Content-Type-Options": "nosniff",
        "Cache-Control": "private, no-store",
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
