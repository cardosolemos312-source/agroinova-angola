import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

const MAX_FILE_SIZE = 20 * 1024 * 1024;

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const tipo = String(formData.get("tipo") || "").trim();
    const titulo = String(formData.get("titulo") || "").trim();
    const autor = String(formData.get("autor") || "").trim();

    const instituicao = String(
      formData.get("instituicao") || ""
    ).trim();

    const email = String(
      formData.get("email") || ""
    ).trim();

    const orcid = String(
      formData.get("orcid") || ""
    ).trim();

    const area = String(
      formData.get("area") || ""
    ).trim();

    const provincia = String(
      formData.get("provincia") || ""
    ).trim();

    const ano = String(
      formData.get("ano") || ""
    ).trim();

    const palavrasChave = String(
      formData.get("palavras-chave") || ""
    ).trim();

    const resumo = String(
      formData.get("resumo") || ""
    ).trim();

    const declaracao = formData.get("declaracao");

    const ficheiro = formData.get("ficheiro");

    /* =========================
       VALIDAÇÃO
    ========================= */

    if (!tipo) {
      return NextResponse.json(
        {
          erro: "Seleccione o tipo de trabalho.",
        },
        { status: 400 }
      );
    }

    if (!titulo) {
      return NextResponse.json(
        {
          erro: "Informe o título do trabalho.",
        },
        { status: 400 }
      );
    }

    if (!autor) {
      return NextResponse.json(
        {
          erro: "Informe o autor principal.",
        },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json(
        {
          erro: "Informe o e-mail.",
        },
        { status: 400 }
      );
    }

    if (!area) {
      return NextResponse.json(
        {
          erro: "Seleccione a área do conhecimento.",
        },
        { status: 400 }
      );
    }

    if (!ano) {
      return NextResponse.json(
        {
          erro: "Informe o ano de publicação.",
        },
        { status: 400 }
      );
    }

    if (!resumo) {
      return NextResponse.json(
        {
          erro: "Informe o resumo do trabalho.",
        },
        { status: 400 }
      );
    }

    if (!declaracao) {
      return NextResponse.json(
        {
          erro:
            "É necessário aceitar a declaração de responsabilidade.",
        },
        { status: 400 }
      );
    }

    /* =========================
       VALIDAR FICHEIRO
    ========================= */

    if (!(ficheiro instanceof File)) {
      return NextResponse.json(
        {
          erro: "Seleccione o documento PDF.",
        },
        { status: 400 }
      );
    }

    if (ficheiro.size === 0) {
      return NextResponse.json(
        {
          erro: "O ficheiro seleccionado está vazio.",
        },
        { status: 400 }
      );
    }

    if (ficheiro.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        {
          erro:
            "O ficheiro é demasiado grande. O tamanho máximo é 20 MB.",
        },
        { status: 400 }
      );
    }

    const nomeOriginal = ficheiro.name;

    const extensao = path
      .extname(nomeOriginal)
      .toLowerCase();

    if (extensao !== ".pdf") {
      return NextResponse.json(
        {
          erro: "Apenas documentos PDF são aceites.",
        },
        { status: 400 }
      );
    }

    /* =========================
       GERAR ID DA SUBMISSÃO
    ========================= */

    const id = `AGRI-${new Date().getFullYear()}-${crypto
      .randomBytes(4)
      .toString("hex")
      .toUpperCase()}`;

    /* =========================
       CRIAR PASTA
    ========================= */

    const pastaBase = path.join(
      process.cwd(),
      "data",
      "submissoes"
    );

    const pastaSubmissao = path.join(
      pastaBase,
      id
    );

    await fs.mkdir(
      pastaSubmissao,
      {
        recursive: true,
      }
    );

    /* =========================
       GUARDAR PDF
    ========================= */

    const nomePdf = "documento.pdf";

    const caminhoPdf = path.join(
      pastaSubmissao,
      nomePdf
    );

    const bytes = await ficheiro.arrayBuffer();

    await fs.writeFile(
      caminhoPdf,
      Buffer.from(bytes)
    );

    /* =========================
       CRIAR REGISTO
    ========================= */

    const submissao = {
      id,

      estado: "Em análise",

      dataSubmissao:
        new Date().toISOString(),

      tipo,

      titulo,

      autor,

      instituicao,

      email,

      orcid,

      area,

      provincia,

      ano,

      palavrasChave:
        palavrasChave
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),

      resumo,

      documento: {
        nomeOriginal,

        nomeGuardado:
          nomePdf,

        tamanho:
          ficheiro.size,

        tipo:
          ficheiro.type ||
          "application/pdf",
      },
    };

    /* =========================
       GUARDAR JSON
    ========================= */

    const caminhoJson = path.join(
      pastaSubmissao,
      "submissao.json"
    );

    await fs.writeFile(
      caminhoJson,
      JSON.stringify(
        submissao,
        null,
        2
      ),
      "utf-8"
    );

    /* =========================
       RESPOSTA
    ========================= */

    return NextResponse.json(
      {
        sucesso: true,

        id,

        estado: "Em análise",

        mensagem:
          "A submissão foi recebida com sucesso.",
      },
      {
        status: 201,
      }
    );

  } catch (error) {

    console.error(
      "Erro ao processar submissão:",
      error
    );

    return NextResponse.json(
      {
        erro:
          "Ocorreu um erro interno ao processar a submissão.",
      },
      {
        status: 500,
      }
    );
  }
}