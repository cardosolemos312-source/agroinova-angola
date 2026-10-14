
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const OLLAMA_URL = "http://127.0.0.1:11434/api/generate";
const OLLAMA_MODEL = "qwen2.5:0.5b";

const TIMEOUT_MS = 60_000;
const MAX_DESCRICAO = 3000;

function textoSeguro(valor: unknown, padrao = ""): string {
  if (typeof valor !== "string") {
    return padrao;
  }

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

function respostaErro(erro: string, status: number) {
  return NextResponse.json(
    { sucesso: false, erro },
    {
      status,
      headers: { "Cache-Control": "no-store" },
    }
  );
}

export async function POST(request: NextRequest) {
  const controller = new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, TIMEOUT_MS);

  try {
    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return respostaErro(
        "O pedido não é válido. Actualiza a página e tenta novamente.",
        400
      );
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return respostaErro("Os dados enviados são inválidos.", 400);
    }

    const dados = body as Record<string, unknown>;

    const descricao = textoSeguro(dados.descricao);
    const provincia = textoSeguro(dados.provincia, "Não informada");
    const municipio = textoSeguro(dados.municipio, "Não informado");
    const cultura = textoSeguro(dados.cultura, "Não informada");
    const atividade = textoSeguro(dados.atividade, "Não informada");
    const imagem = dados.imagem;

    if (!descricao && !imagem) {
      return respostaErro(
        "Descreve o problema agrícola para iniciar a análise.",
        400
      );
    }

    if (imagem) {
      return respostaErro(
        "A análise de fotografias ainda não está disponível. Descreve os sintomas observados.",
        400
      );
    }

    if (descricao.length > MAX_DESCRICAO) {
      return respostaErro(
        "A descrição é demasiado longa. Resume o problema em até 3000 caracteres.",
        400
      );
    }

    const prompt = `
És a AGROINOVA IA, assistente de apoio técnico agropecuário
orientado para Angola.

Responde em português claro, natural e profissional.
Dá prioridade à segurança do agricultor e à protecção das culturas.

DADOS DA CONSULTA
Província: ${provincia}
Município: ${municipio}
Cultura ou espécie: ${cultura}
Actividade: ${atividade}
Problema descrito: ${descricao}

REGRAS IMPORTANTES
- Distingue os factos relatados das hipóteses.
- Não inventes estatísticas, estudos, contactos ou dados locais.
- Não declares um diagnóstico confirmado sem provas suficientes.
- Apresenta no máximo três causas possíveis.
- Explica como o agricultor pode distinguir as causas através de observações.
- Dá medidas práticas, seguras e prioritárias.
- Não recomendes pesticidas, doses ou misturas sem fundamento técnico suficiente.
- Não repitas a mesma recomendação em várias secções.
- Se faltarem informações, indica o que deve ser observado.
- Não inventes instituições, fornecedores ou especialistas disponíveis na região.
- Usa frases curtas e evita explicações vagas.
- Não afirmes que consultaste fontes ou dados externos.
- Se não souberes, reconhece a incerteza.

ESTRUTURA DA RESPOSTA

## 1. O que foi observado
Resume os sintomas efectivamente descritos.

## 2. Possíveis causas
Indica até três hipóteses plausíveis e explica como podem ser verificadas.

## 3. O que fazer agora
Apresenta passos seguros e práticos, por ordem de prioridade.

## 4. O que deve ser verificado
Indica as observações ou informações que faltam.

## 5. Quando procurar um técnico
Explica os sinais de agravamento que justificam uma avaliação presencial.

## 6. Especialidade recomendada
Indica a especialidade técnica adequada, se for possível determiná-la.

Evita repetir a descrição do utilizador.
Não acrescentes uma conclusão genérica no final.
`;

    console.log("AGROIA: a iniciar consulta ao Ollama.");
    console.log("AGROIA: modelo =", OLLAMA_MODEL);

    const response = await fetch(OLLAMA_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: OLLAMA_MODEL,
        prompt,
        stream: false,
        keep_alive: "10m",
        options: {
          temperature: 0.2,
          num_predict: 450,
          num_ctx: 2048,
          repeat_penalty: 1.2,
          repeat_last_n: 96,
        },
      }),
      signal: controller.signal,
      cache: "no-store",
    });

    if (!response.ok) {
      const detalhe = await response.text();

      console.error(
        "AGROIA Ollama:",
        response.status,
        detalhe.slice(0, 500)
      );

      return respostaErro(
        "O Ollama não conseguiu processar o pedido. Confirma se está activo e se o modelo está instalado.",
        502
      );
    }

    const resultado: unknown = await response.json();

    if (!resultado || typeof resultado !== "object") {
      return respostaErro(
        "A IA devolveu uma resposta inválida. Tenta novamente.",
        502
      );
    }

    const dadosResultado = resultado as Record<string, unknown>;
    const respostaOriginal = textoSeguro(dadosResultado.response);
    const resposta = removerRepeticoes(respostaOriginal);

    if (!resposta) {
      return respostaErro(
        "A IA não devolveu uma resposta. Tenta novamente.",
        502
      );
    }

    if (dadosResultado.done === false) {
      console.warn("AGROIA: o modelo terminou sem concluir a geração.");
    }

    console.log("AGROIA: resposta recebida.");

    return NextResponse.json(
      {
        sucesso: true,
        resposta,
      },
      {
        headers: { "Cache-Control": "no-store" },
      }
    );
  } catch (error: unknown) {
    const expirou =
      error instanceof Error &&
      (error.name === "AbortError" || error.name === "TimeoutError");

    console.error(
      "AGROIA: erro na consulta.",
      error instanceof Error ? error.message : "Erro desconhecido"
    );

    if (expirou) {
      return respostaErro(
        "A análise demorou demasiado tempo. Tenta novamente. Se o problema continuar, será necessário utilizar um modelo mais rápido.",
        504
      );
    }

    return respostaErro(
      "Não foi possível contactar o Ollama. Confirma se está activo em http://127.0.0.1:11434.",
      503
    );
  } finally {
    clearTimeout(timeout);
  }
}
