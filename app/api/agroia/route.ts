import OpenAI from "openai";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      console.error("AGROINOVA IA: OPENAI_API_KEY não configurada.");

      return NextResponse.json(
        {
          sucesso: false,
          erro: "A chave da OpenAI não está configurada no servidor.",
        },
        { status: 500 }
      );
    }

    const openai = new OpenAI({
      apiKey,
    });

    const body = await request.json();

    const {
      descricao,
      provincia,
      municipio,
      cultura,
      atividade,
      imagem,
    } = body;

    if (!descricao && !imagem) {
      return NextResponse.json(
        {
          sucesso: false,
          erro:
            "Envie uma descrição do problema ou uma fotografia para análise.",
        },
        { status: 400 }
      );
    }

    if (
      imagem &&
      typeof imagem === "string" &&
      imagem.length > 12_000_000
    ) {
      return NextResponse.json(
        {
          sucesso: false,
          erro: "A imagem é demasiado grande. Envie uma imagem até 12 MB.",
        },
        { status: 400 }
      );
    }

    const contexto = `
Você é a AGROINOVA IA, assistente técnico de agricultura especializado
nas condições agrícolas de Angola.

Ajude agricultores, técnicos, estudantes e gestores a compreender
problemas agrícolas reais e indique caminhos de solução.

LOCALIZAÇÃO:
Província: ${provincia || "Não informada"}
Município: ${municipio || "Não informado"}

ACTIVIDADE:
Cultura: ${cultura || "Não informada"}
Actividade: ${atividade || "Não informada"}

DESCRIÇÃO DO PROBLEMA:
${descricao || "O utilizador enviou apenas uma fotografia."}

REGRAS:

1. Não invente dados, empresas, lojas, fazendas, técnicos,
equipamentos, medicamentos ou produtos.

2. Não apresente um diagnóstico como certeza quando apenas existe
uma fotografia ou descrição.

3. Diferencie claramente observações, hipóteses e recomendações.

4. Considere as condições agrícolas de Angola.

5. Quando for necessária análise laboratorial ou avaliação presencial,
diga claramente.

6. Não recomende produtos comerciais específicos sem informação
suficiente.

7. Se existir risco para pessoas, animais, alimentos ou ambiente,
destaque esse risco.

8. Seja prático e compreensível para o agricultor.

9. Nunca invente técnicos ou fornecedores.

10. A indicação de fornecedores, equipamentos e serviços será feita
posteriormente pela base de dados da AGROINOVA.

RESPONDA EM PORTUGUÊS DE ANGOLA.

ESTRUTURA:

## 1. O que foi observado

## 2. Possíveis causas

## 3. O que fazer agora

## 4. O que deve ser verificado

## 5. Quando procurar um técnico

## 6. Especialidade recomendada
`;

    const content: Array<
      | {
          type: "input_text";
          text: string;
        }
      | {
          type: "input_image";
          image_url: string;
          detail: "auto";
        }
    > = [
      {
        type: "input_text",
        text: contexto,
      },
    ];

    if (imagem) {
      content.push({
        type: "input_image",
        image_url: imagem,
        detail: "auto",
      });
    }

    console.log("AGROINOVA IA: enviando pedido para OpenAI...");
    console.log("AGROINOVA IA: modelo = gpt-5.6");
    console.log("AGROINOVA IA: imagem =", Boolean(imagem));

    const response = await openai.responses.create({
      model: "gpt-5.6",
      input: [
        {
          role: "user",
          content,
        },
      ],
    });

    console.log("AGROINOVA IA: resposta recebida.");

    const resposta = response.output_text?.trim();

    if (!resposta) {
      console.error(
        "AGROINOVA IA: OpenAI respondeu sem texto.",
        response
      );

      return NextResponse.json(
        {
          sucesso: false,
          erro: "A IA respondeu sem conteúdo.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      sucesso: true,
      resposta,
    });
  } catch (error: unknown) {
    console.error("=================================");
    console.error("ERRO AGROINOVA IA");
    console.error("=================================");
    console.error(error);

    let mensagem =
      "Não foi possível realizar a análise.";

    if (error instanceof Error) {
      mensagem = error.message;
    }

    return NextResponse.json(
      {
        sucesso: false,
        erro: mensagem,
      },
      { status: 500 }
    );
  }
}