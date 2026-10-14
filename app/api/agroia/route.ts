import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 30;

const OLLAMA_URL = "http://127.0.0.1:11434/api/generate";
const OLLAMA_MODEL = "qwen2.5:0.5b";
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
    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { sucesso: false, erro: "Pedido inválido. Actualiza a página e tenta novamente." },
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
        { sucesso: false, erro: "Descreve o problema para iniciar a análise." },
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
        { sucesso: false, erro: "Resume a descrição em até 1000 caracteres." },
        { status: 400 }
      );
    }

    const prompt = `
És a AGROINOVA IA, assistente agrícola de Angola.

Responde em português de Angola. Sê breve, directo e prudente.

Cultura: ${cultura}
Província: ${provincia}
Município: ${municipio}
Actividade: ${atividade}
Problema: ${descricao}

REGRAS:
- Responde apenas sobre o problema apresentado.
- Usa no máximo 70 palavras.
- Indica até 2 causas plausíveis, sem confirmar diagnósticos.
- Recomenda até 2 medidas seguras e relevantes.
- Nunca inventes doenças, dados ou tratamentos.
- Não recomendes detergentes, produtos de limpeza ou materiais inadequados para plantas.
- Se não conseguires determinar a causa, diz o que deve ser observado.
- Não incluas introduções nem repitas a pergunta.

FORMATO:
**Possível causa:** hipótese ou incerteza.

**O que fazer:** medidas seguras.

**Para confirmar:** uma pergunta essencial, se necessária.
`;

    console.log("AGROIA: a iniciar consulta.");
    console.log("AGROIA: modelo =", OLLAMA_MODEL);

    timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

    const response = await fetch(OLLAMA_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: OLLAMA_MODEL,
        prompt,
        stream: false,
        keep_alive: "10m",
        options: {
          temperature: 0.1,
          num_predict: 120,
          num_ctx: 1024,
          repeat_penalty: 1.15,
          repeat_last_n: 32,
        },
      }),
      signal: controller.signal,
      cache: "no-store",
    });

    if (!response.ok) {
      const detalhe = await response.text();
      console.error("AGROIA Ollama:", response.status, detalhe.slice(0, 500));

      return NextResponse.json(
        {
          sucesso: false,
          erro: "O Ollama não conseguiu responder. Confirma se está activo e se o modelo está instalado.",
        },
        { status: 502 }
      );
    }

    const resultado = await response.json();
    const resposta = removerRepeticoes(textoSeguro(resultado.response));

    if (!resposta) {
      return NextResponse.json(
        { sucesso: false, erro: "A IA não devolveu uma resposta. Tenta novamente." },
        { status: 502 }
      );
    }

    console.log("AGROIA: resposta recebida.");

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
          : "Não foi possível contactar o Ollama. Confirma se está activo em http://127.0.0.1:11434.",
      },
      { status: expirou ? 504 : 503 }
    );
  } finally {
    if (timeout) clearTimeout(timeout);
  }
}