import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 30;

const GEMINI_MODEL = "gemini-3.1-flash-lite";
const TIMEOUT_MS = 25_000;
const MAX_DESCRICAO = 1000;

function textoSeguro(valor: unknown, padrao = ""): string {
  if (typeof valor !== "string") return padrao;
  return valor.trim();
}

function removerRepeticoes(texto: string): string {
  const linhas = texto.replace(/\r\n/g, "\n").split("\n");
  const resultado: string[] = [];

  for (const linha of linhas) {
    const atual = linha.trim();

    if (
      atual &&
      resultado.length > 0 &&
      resultado[resultado.length - 1].trim() === atual
    ) {
      continue;
    }

    resultado.push(linha);
  }

  return resultado.join("\n").trim();
}

export async function POST(request: NextRequest) {
  const controller = new AbortController();
  let timeout: ReturnType<typeof setTimeout> | undefined;

  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error("AGROIA: GEMINI_API_KEY não configurada.");

      return NextResponse.json(
        {
          sucesso: false,
          erro: "O serviço de inteligência artificial ainda não está configurado.",
        },
        { status: 503 }
      );
    }

    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          sucesso: false,
          erro: "Pedido inválido. Actualiza a página e tenta novamente.",
        },
        { status: 400 }
      );
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        { sucesso: false, erro: "Os dados enviados são inválidos." },
        { status: 400 }
      );
    }

    const dados = body as Record<string, unknown>;

    const descricao = textoSeguro(dados.descricao);
    const provincia = textoSeguro(dados.provincia, "Não informada");
    const municipio = textoSeguro(dados.municipio, "Não informado");
    const cultura = textoSeguro(dados.cultura, "Não informada");
    const atividade = textoSeguro(dados.atividade, "Não informada");
    const imagem = dados.imagem;

    if (!descricao && !imagem) {
      return NextResponse.json(
        {
          sucesso: false,
          erro: "Descreve o problema para iniciar a análise.",
        },
        { status: 400 }
      );
    }

    if (imagem) {
      return NextResponse.json(
        {
          sucesso: false,
          erro: "A análise de fotografias ainda não está disponível. Descreve os sintomas observados.",
        },
        { status: 400 }
      );
    }

    if (descricao.length > MAX_DESCRICAO) {
      return NextResponse.json(
        {
          sucesso: false,
          erro: "Resume a descrição em até 1000 caracteres.",
        },
        { status: 400 }
      );
    }

    const prompt = `
És o AGROIA, assistente técnico da AGROINOVA ANGOLA.

Responde em português de Angola. Sê claro, breve, directo e prudente.

Cultura: ${cultura}
Província: ${provincia}
Município: ${municipio}
Actividade: ${atividade}
Problema: ${descricao}

REGRAS:
- Responde sobre o assunto apresentado.
- Usa no máximo 120 palavras.
- Apresenta até 2 causas plausíveis, sem confirmar diagnósticos.
- Recomenda até 2 medidas seguras e relevantes.
- Não inventes doenças, dados, produtos ou tratamentos.
- Não recomendes detergentes ou produtos de limpeza para plantas.
- Considera as condições agrícolas de Angola quando forem relevantes.
- Se faltarem informações, indica o que deve ser observado.
- Não repitas a pergunta nem incluas introduções desnecessárias.

FORMATO:
**Possível causa:** hipótese ou incerteza.

**O que fazer:** medidas seguras.

**Para confirmar:** uma pergunta essencial, se necessária.
`;

    console.log("AGROIA: a iniciar consulta ao Gemini.");
    console.log("AGROIA: modelo =", GEMINI_MODEL);

    timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: prompt }],
            },
          ],
          generationConfig: {
            temperature: 0.2,
            maxOutputTokens: 400,
          },
        }),
        signal: controller.signal,
        cache: "no-store",
      }
    );

    const resultado: unknown = await response.json();

    if (!response.ok) {
      const erroGemini = resultado as {
        error?: { message?: string };
      };

      console.error(
        "AGROIA Gemini:",
        response.status,
        erroGemini.error?.message ?? "Erro sem detalhe"
      );

      if (response.status === 429) {
        return NextResponse.json(
          {
            sucesso: false,
            erro: "O serviço atingiu o limite de pedidos. Aguarda um pouco e tenta novamente.",
          },
          { status: 429 }
        );
      }

      if (response.status === 401 || response.status === 403) {
        return NextResponse.json(
          {
            sucesso: false,
            erro: "Não foi possível autenticar o serviço de inteligência artificial. Verifica a configuração da API.",
          },
          { status: 502 }
        );
      }

      return NextResponse.json(
        {
          sucesso: false,
          erro: "O serviço de inteligência artificial não conseguiu responder. Tenta novamente.",
        },
        { status: 502 }
      );
    }

    const dadosGemini = resultado as {
      candidates?: Array<{
        content?: {
          parts?: Array<{ text?: string }>;
        };
      }>;
    };

    const respostaBruta =
      dadosGemini.candidates?.[0]?.content?.parts
        ?.map((parte) => parte.text ?? "")
        .join("\n") ?? "";

    const resposta = removerRepeticoes(respostaBruta);

    if (!resposta) {
      return NextResponse.json(
        {
          sucesso: false,
          erro: "A IA não devolveu uma resposta. Tenta novamente.",
        },
        { status: 502 }
      );
    }

    console.log("AGROIA: resposta recebida do Gemini.");

    return NextResponse.json(
      { sucesso: true, resposta },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (error: unknown) {
    console.error("ERRO AGROIA:", error);

    const expirou =
      error instanceof Error &&
      (error.name === "AbortError" || error.name === "TimeoutError");

    return NextResponse.json(
      {
        sucesso: false,
        erro: expirou
          ? "A análise demorou demasiado. Tenta uma pergunta mais curta."
          : "Não foi possível contactar o serviço de inteligência artificial. Tenta novamente.",
      },
      { status: expirou ? 504 : 503 }
    );
  } finally {
    if (timeout) clearTimeout(timeout);
  }
}