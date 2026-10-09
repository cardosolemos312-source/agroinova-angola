import { NextResponse } from "next/server";

type Mensagem = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const messages: Mensagem[] = Array.isArray(body?.messages)
      ? body.messages.filter(
          (message: unknown): message is Mensagem =>
            typeof message === "object" &&
            message !== null &&
            "role" in message &&
            "content" in message &&
            ((message as { role?: unknown }).role === "user" ||
              (message as { role?: unknown }).role === "assistant") &&
            typeof (message as { content?: unknown }).content === "string",
        )
      : [];

    if (messages.length === 0) {
      return NextResponse.json(
        {
          error: "Nenhuma mensagem válida foi enviada.",
        },
        { status: 400 },
      );
    }

    const apiKey = process.env.XAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "A chave XAI_API_KEY não está configurada no ambiente do servidor.",
        },
        { status: 500 },
      );
    }

    const mensagensGrok = [
      {
        role: "system",
        content: `
És o AGROIA, o assistente inteligente da AGROINOVA ANGOLA.

A AGROINOVA ANGOLA é uma Plataforma Nacional de Investigação, Conhecimento e Inovação Agropecuária de Angola.

Responde sempre em português.

Dá prioridade aos seguintes assuntos:

- Agricultura
- Pecuária
- Pesca
- Floresta
- Solos
- Clima
- Irrigação
- Culturas agrícolas
- Produção animal
- Sanidade animal
- Tecnologias agrícolas
- Investigação agropecuária
- Dados agropecuários
- Desenvolvimento rural
- Angola

As respostas devem ser claras, técnicas quando necessário e fáceis de compreender.

Quando a pergunta estiver relacionada com Angola, considera a realidade agropecuária angolana.

Não inventes estatísticas, nomes de instituições, resultados científicos, fontes ou dados.

Não apresentes uma informação como dado oficial de Angola sem uma fonte oficial.

Quando não tiveres certeza de uma informação, deixa isso claro.

Quando a pergunta envolver uma decisão técnica de alto risco, recomenda confirmar a informação com um técnico, investigador ou instituição competente.

O teu objetivo é ajudar produtores, técnicos, estudantes, investigadores, empresas e instituições a encontrar e compreender conhecimento agropecuário.

Responde diretamente à pergunta do utilizador.
        `.trim(),
      },
      ...messages.slice(-12),
    ];

    const resposta = await fetch(
      "https://api.x.ai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "grok-4.7",
          messages: mensagensGrok,
          stream: false,
          temperature: 0.3,
        }),
      },
    );

    const textoResposta = await resposta.text();

    let dados: any;

    try {
      dados = JSON.parse(textoResposta);
    } catch {
      console.error(
        "Resposta não JSON recebida da API do Grok:",
        textoResposta,
      );

      return NextResponse.json(
        {
          error:
            "A API do Grok devolveu uma resposta inválida.",
        },
        { status: 502 },
      );
    }

    if (!resposta.ok) {
      console.error(
        "Erro da API do Grok:",
        dados,
      );

      return NextResponse.json(
        {
          error:
            dados?.error?.message ||
            dados?.message ||
            "O Grok não conseguiu responder neste momento.",
        },
        { status: resposta.status },
      );
    }

    const answer =
      dados?.choices?.[0]?.message?.content;

    if (
      typeof answer !== "string" ||
      !answer.trim()
    ) {
      console.error(
        "Resposta do Grok sem conteúdo:",
        dados,
      );

      return NextResponse.json(
        {
          error:
            "O Grok respondeu, mas não foi possível obter o texto da resposta.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      answer: answer.trim(),
    });
  } catch (error) {
    console.error(
      "Erro interno no AGROIA:",
      error,
    );

    return NextResponse.json(
      {
        error:
          "O AGROIA encontrou um problema ao comunicar com o Grok.",
      },
      { status: 500 },
    );
  }
}