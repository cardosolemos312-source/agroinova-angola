
import { NextRequest, NextResponse } from "next/server";
import { administradorAutenticado } from "@/lib/admin-auth";
import { obterSupabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NATUREZAS = [
  "investigacao",
  "ensaio_campo",
  "estudo_caso",
  "relatorio_tecnico",
  "observacao",
] as const;

const ESTADOS = [
  "rascunho",
  "em_validacao",
  "publicado",
  "arquivado",
] as const;

type DadosEstudo = {
  titulo: string;
  resumo: string | null;
  objectivo: string | null;
  categoria: string;
  subcategoria: string | null;
  autores: string | null;
  instituicao: string | null;
  provincia: string | null;
  municipio: string | null;
  comuna: string | null;
  localidade: string | null;
  data_inicio: string | null;
  data_fim: string | null;
  metodologia: string | null;
  materiais_metodos: string | null;
  resultados: string | null;
  discussao: string | null;
  conclusoes: string | null;
  recomendacoes: string | null;
  limitacoes: string | null;
  palavras_chave: string[];
  documento_url: string | null;
  natureza: (typeof NATUREZAS)[number];
  estado: (typeof ESTADOS)[number];
  destaque: boolean;
  actualizado_em: string;
};

function erroJson(mensagem: string, status = 400) {
  return NextResponse.json({ erro: mensagem }, { status });
}

function texto(
  valor: unknown,
  limite = 10000
): string | null {
  if (valor === null || valor === undefined || valor === "") {
    return null;
  }

  if (typeof valor !== "string") {
    return null;
  }

  const resultado = valor.trim();

  return resultado ? resultado.slice(0, limite) : null;
}

function dataValida(valor: unknown): string | null | undefined {
  if (valor === null || valor === undefined || valor === "") {
    return null;
  }

  if (typeof valor !== "string") {
    return undefined;
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(valor)) {
    return undefined;
  }

  const data = new Date(`${valor}T00:00:00.000Z`);

  if (
    Number.isNaN(data.getTime()) ||
    data.toISOString().slice(0, 10) !== valor
  ) {
    return undefined;
  }

  return valor;
}

function validarDados(
  body: Record<string, unknown>
):
  | { valido: true; dados: DadosEstudo }
  | { valido: false; erro: string } {
  const titulo = texto(body.titulo, 500);
  const categoria = texto(body.categoria, 150);

  if (!titulo) {
    return { valido: false, erro: "O título do estudo é obrigatório." };
  }

  if (!categoria) {
    return { valido: false, erro: "A categoria do estudo é obrigatória." };
  }

  const natureza =
    body.natureza === undefined || body.natureza === ""
      ? "investigacao"
      : body.natureza;

  if (
    typeof natureza !== "string" ||
    !NATUREZAS.includes(natureza as (typeof NATUREZAS)[number])
  ) {
    return { valido: false, erro: "Natureza do estudo inválida." };
  }

  const estado =
    body.estado === undefined || body.estado === ""
      ? "rascunho"
      : body.estado;

  if (
    typeof estado !== "string" ||
    !ESTADOS.includes(estado as (typeof ESTADOS)[number])
  ) {
    return { valido: false, erro: "Estado do estudo inválido." };
  }

  const dataInicio = dataValida(body.data_inicio);
  const dataFim = dataValida(body.data_fim);

  if (dataInicio === undefined || dataFim === undefined) {
    return {
      valido: false,
      erro: "As datas devem estar no formato AAAA-MM-DD.",
    };
  }

  if (dataInicio && dataFim && dataFim < dataInicio) {
    return {
      valido: false,
      erro: "A data de conclusão não pode ser anterior à data de início.",
    };
  }

  let palavrasChave: string[] = [];

  if (body.palavras_chave !== undefined && body.palavras_chave !== null) {
    if (
      !Array.isArray(body.palavras_chave) ||
      !body.palavras_chave.every((item) => typeof item === "string")
    ) {
      return {
        valido: false,
        erro: "As palavras-chave devem ser enviadas numa lista de textos.",
      };
    }

    palavrasChave = body.palavras_chave
      .map((item) => item.trim())
      .filter(Boolean)
      .slice(0, 30);
  }

  if (
    body.destaque !== undefined &&
    typeof body.destaque !== "boolean"
  ) {
    return {
      valido: false,
      erro: "O campo destaque deve ser verdadeiro ou falso.",
    };
  }

  const documentoUrl = texto(body.documento_url, 2000);

  if (documentoUrl) {
    try {
      const url = new URL(documentoUrl);

      if (url.protocol !== "https:" && url.protocol !== "http:") {
        return {
          valido: false,
          erro: "O endereço do documento deve utilizar HTTP ou HTTPS.",
        };
      }
    } catch {
      return {
        valido: false,
        erro: "O endereço do documento não é válido.",
      };
    }
  }

  return {
    valido: true,
    dados: {
      titulo,
      resumo: texto(body.resumo),
      objectivo: texto(body.objectivo),
      categoria,
      subcategoria: texto(body.subcategoria, 150),
      autores: texto(body.autores, 2000),
      instituicao: texto(body.instituicao, 500),
      provincia: texto(body.provincia, 150),
      municipio: texto(body.municipio, 150),
      comuna: texto(body.comuna, 150),
      localidade: texto(body.localidade, 250),
      data_inicio: dataInicio,
      data_fim: dataFim,
      metodologia: texto(body.metodologia),
      materiais_metodos: texto(body.materiais_metodos),
      resultados: texto(body.resultados),
      discussao: texto(body.discussao),
      conclusoes: texto(body.conclusoes),
      recomendacoes: texto(body.recomendacoes),
      limitacoes: texto(body.limitacoes),
      palavras_chave: palavrasChave,
      documento_url: documentoUrl,
      natureza: natureza as (typeof NATUREZAS)[number],
      estado: estado as (typeof ESTADOS)[number],
      destaque: body.destaque === true,
      actualizado_em: new Date().toISOString(),
    },
  };
}

function uuidValido(valor: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    valor
  );
}

// GET — listar estudos
export async function GET() {
  try {
    if (!(await administradorAutenticado())) {
      return erroJson("Acesso não autorizado.", 401);
    }

    const supabase = obterSupabaseAdmin();

    const { data, error } = await supabase
      .from("agro_estudos")
      .select("*")
      .order("criado_em", { ascending: false });

    if (error) {
      console.error("Erro ao listar estudos:", error);
      return erroJson("Não foi possível carregar os estudos.", 500);
    }

    return NextResponse.json({ dados: data ?? [] });
  } catch (error) {
    console.error("Erro inesperado ao listar estudos:", error);
    return erroJson("Erro interno ao carregar os estudos.", 500);
  }
}

// POST — registar estudo
export async function POST(request: NextRequest) {
  try {
    if (!(await administradorAutenticado())) {
      return erroJson("Acesso não autorizado.", 401);
    }

    const body = await request.json();

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return erroJson("Os dados enviados são inválidos.");
    }

    const validacao = validarDados(body as Record<string, unknown>);

    if (!validacao.valido) {
      return erroJson(validacao.erro);
    }

    const supabase = obterSupabaseAdmin();

    const { data, error } = await supabase
      .from("agro_estudos")
      .insert(validacao.dados)
      .select("*")
      .single();

    if (error) {
      console.error("Erro ao criar estudo:", error);
      return erroJson("Não foi possível registar o estudo.", 500);
    }

    return NextResponse.json(
      { mensagem: "Estudo registado com sucesso.", dados: data },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro inesperado ao criar estudo:", error);
    return erroJson("Erro interno ao registar o estudo.", 500);
  }
}

// PATCH — actualizar estudo
export async function PATCH(request: NextRequest) {
  try {
    if (!(await administradorAutenticado())) {
      return erroJson("Acesso não autorizado.", 401);
    }

    const body = await request.json();

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return erroJson("Os dados enviados são inválidos.");
    }

    const registo = body as Record<string, unknown>;
    const id = registo.id;

    if (typeof id !== "string" || !uuidValido(id)) {
      return erroJson("O identificador do estudo é inválido.");
    }

    const validacao = validarDados(registo);

    if (!validacao.valido) {
      return erroJson(validacao.erro);
    }

    const supabase = obterSupabaseAdmin();

    const { data: existente, error: erroBusca } = await supabase
      .from("agro_estudos")
      .select("id")
      .eq("id", id)
      .maybeSingle();

    if (erroBusca) {
      console.error("Erro ao procurar estudo:", erroBusca);
      return erroJson("Não foi possível verificar o estudo.", 500);
    }

    if (!existente) {
      return erroJson("Estudo não encontrado.", 404);
    }

    const { data, error } = await supabase
      .from("agro_estudos")
      .update(validacao.dados)
      .eq("id", id)
      .select("*")
      .single();

    if (error) {
      console.error("Erro ao actualizar estudo:", error);
      return erroJson("Não foi possível actualizar o estudo.", 500);
    }

    return NextResponse.json({
      mensagem: "Estudo actualizado com sucesso.",
      dados: data,
    });
  } catch (error) {
    console.error("Erro inesperado ao actualizar estudo:", error);
    return erroJson("Erro interno ao actualizar o estudo.", 500);
  }
}
