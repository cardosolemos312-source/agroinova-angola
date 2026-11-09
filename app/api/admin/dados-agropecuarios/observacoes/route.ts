
import { NextResponse } from "next/server";
import { administradorAutenticado } from "@/lib/admin-auth";
import { obterSupabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NATUREZAS = [
  "estatistica_oficial",
  "investigacao",
  "observacao_campo",
  "estimativa",
  "administrativa",
] as const;

const ESTADOS = [
  "rascunho",
  "validado",
  "publicado",
  "rejeitado",
] as const;

const ESCALAS = ["nacional", "provincial", "municipal", "comunal", "local"] as const;

type Natureza = (typeof NATUREZAS)[number];
type Estado = (typeof ESTADOS)[number];

type DadosObservacao = {
  id?: string;
  indicador_id?: string;
  dataset_id?: string | null;
  campanha_id?: string | null;
  levantamento_id?: string | null;
  cultura_id?: string | null;
  provincia_id?: string | null;
  municipio_id?: string | null;
  comuna_id?: string | null;
  escala?: string | null;
  provincia?: string | null;
  municipio?: string | null;
  comuna?: string | null;
  localidade?: string | null;
  entidade?: string | null;
  exploracao?: string | null;
  periodo_inicio?: string | null;
  periodo_fim?: string | null;
  data_referencia?: string | null;
  valor?: number;
  unidade?: string;
  tamanho_amostra?: number | null;
  margem_erro?: number | null;
  nivel_confianca?: number | null;
  metodologia?: string | null;
  natureza?: Natureza;
  estado?: Estado;
  observacoes?: string | null;
};

function erroJson(mensagem: string, status: number) {
  return NextResponse.json(
    { sucesso: false, erro: mensagem },
    { status }
  );
}

function texto(valor: unknown): string {
  return typeof valor === "string" ? valor.trim() : "";
}

function uuidValido(valor: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(valor);
}

function dataValida(valor: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(valor)) {
    return false;
  }

  const data = new Date(`${valor}T00:00:00.000Z`);

  return (
    !Number.isNaN(data.getTime()) &&
    data.toISOString().slice(0, 10) === valor
  );
}

function numeroOpcional(
  valor: unknown,
  nome: string
): { sucesso: true; valor: number | null } | {
  sucesso: false;
  erro: string;
} {
  if (valor === undefined || valor === null || valor === "") {
    return { sucesso: true, valor: null };
  }

  if (typeof valor !== "number" || !Number.isFinite(valor)) {
    return {
      sucesso: false,
      erro: `O campo ${nome} deve ser um número válido.`,
    };
  }

  return { sucesso: true, valor };
}

function validarDados(body: DadosObservacao) {
  const indicador_id = texto(body.indicador_id);
  const dataset_id = texto(body.dataset_id);
  const campanha_id = texto(body.campanha_id);
  const levantamento_id = texto(body.levantamento_id);
  const cultura_id = texto(body.cultura_id);
  const provincia_id = texto(body.provincia_id);
  const municipio_id = texto(body.municipio_id);
  const comuna_id = texto(body.comuna_id);
  const escala = texto(body.escala) || "nacional";
  const unidade = texto(body.unidade);
  const natureza = body.natureza ?? "estatistica_oficial";
  const estado = body.estado ?? "rascunho";

  const valor = numeroOpcional(body.valor, "valor");
  const tamanho_amostra = numeroOpcional(
    body.tamanho_amostra,
    "tamanho da amostra"
  );
  const margem_erro = numeroOpcional(
    body.margem_erro,
    "margem de erro"
  );
  const nivel_confianca = numeroOpcional(
    body.nivel_confianca,
    "nível de confiança"
  );

  if (!uuidValido(indicador_id)) {
    return {
      sucesso: false as const,
      erro: "Selecciona um indicador válido.",
    };
  }

  if (dataset_id && !uuidValido(dataset_id)) {
    return {
      sucesso: false as const,
      erro: "O identificador do conjunto de dados é inválido.",
    };
  }

  const referencias = [
    ["campanha", campanha_id],
    ["levantamento", levantamento_id],
    ["cultura", cultura_id],
    ["província", provincia_id],
    ["município", municipio_id],
    ["comuna", comuna_id],
  ] as const;

  for (const [nome, id] of referencias) {
    if (id && !uuidValido(id)) {
      return { sucesso: false as const, erro: `O identificador da ${nome} é inválido.` };
    }
  }

  if (
    levantamento_id &&
    (!campanha_id || !provincia_id || !cultura_id)
  ) {
    return {
      sucesso: false as const,
      erro: "Para associar um levantamento, selecciona também a campanha, a província e a cultura.",
    };
  }

  if (!(ESCALAS as readonly string[]).includes(escala)) {
    return { sucesso: false as const, erro: "A escala territorial é inválida." };
  }

  if (
    !unidade ||
    unidade.length > 50
  ) {
    return {
      sucesso: false as const,
      erro: "A unidade é obrigatória e deve ter até 50 caracteres.",
    };
  }

  if (!valor.sucesso) {
    return { sucesso: false as const, erro: valor.erro };
  }

  if (valor.valor === null) {
    return {
      sucesso: false as const,
      erro: "O valor estatístico é obrigatório.",
    };
  }

  if (!tamanho_amostra.sucesso) {
    return { sucesso: false as const, erro: tamanho_amostra.erro };
  }

  if (
    tamanho_amostra.valor !== null &&
    (
      !Number.isInteger(tamanho_amostra.valor) ||
      tamanho_amostra.valor < 0
    )
  ) {
    return {
      sucesso: false as const,
      erro: "O tamanho da amostra deve ser um inteiro igual ou superior a zero.",
    };
  }

  if (!margem_erro.sucesso) {
    return { sucesso: false as const, erro: margem_erro.erro };
  }

  if (margem_erro.valor !== null && margem_erro.valor < 0) {
    return {
      sucesso: false as const,
      erro: "A margem de erro não pode ser negativa.",
    };
  }

  if (!nivel_confianca.sucesso) {
    return { sucesso: false as const, erro: nivel_confianca.erro };
  }

  if (
    nivel_confianca.valor !== null &&
    (
      nivel_confianca.valor < 0 ||
      nivel_confianca.valor > 100
    )
  ) {
    return {
      sucesso: false as const,
      erro: "O nível de confiança deve estar entre 0 e 100.",
    };
  }

  if (
    !(NATUREZAS as readonly string[]).includes(natureza)
  ) {
    return {
      sucesso: false as const,
      erro: "A natureza da observação é inválida.",
    };
  }

  if (!(ESTADOS as readonly string[]).includes(estado)) {
    return {
      sucesso: false as const,
      erro: "O estado da observação é inválido.",
    };
  }

  const periodo_inicio = texto(body.periodo_inicio);
  const periodo_fim = texto(body.periodo_fim);
  const data_referencia = texto(body.data_referencia);

  for (const [nome, data] of [
    ["período inicial", periodo_inicio],
    ["período final", periodo_fim],
    ["data de referência", data_referencia],
  ]) {
    if (data && !dataValida(data)) {
      return {
        sucesso: false as const,
        erro: `A ${nome} deve ter uma data válida no formato AAAA-MM-DD.`,
      };
    }
  }

  if (
    periodo_inicio &&
    periodo_fim &&
    periodo_fim < periodo_inicio
  ) {
    return {
      sucesso: false as const,
      erro: "O período final não pode ser anterior ao período inicial.",
    };
  }

  const camposTexto = {
    provincia: texto(body.provincia),
    municipio: texto(body.municipio),
    comuna: texto(body.comuna),
    localidade: texto(body.localidade),
    entidade: texto(body.entidade),
    exploracao: texto(body.exploracao),
    metodologia: texto(body.metodologia),
    observacoes: texto(body.observacoes),
  };

  const limites: Record<string, number> = {
    provincia: 120,
    municipio: 120,
    comuna: 120,
    localidade: 180,
    entidade: 200,
    exploracao: 200,
    metodologia: 5000,
    observacoes: 5000,
  };

  for (const [campo, limite] of Object.entries(limites)) {
    if (camposTexto[campo as keyof typeof camposTexto].length > limite) {
      return {
        sucesso: false as const,
        erro: `O campo ${campo} excede o limite de ${limite} caracteres.`,
      };
    }
  }

  return {
    sucesso: true as const,
    dados: {
      indicador_id,
      dataset_id: dataset_id || null,
      campanha_id: campanha_id || null,
      levantamento_id: levantamento_id || null,
      cultura_id: cultura_id || null,
      provincia_id: provincia_id || null,
      municipio_id: municipio_id || null,
      comuna_id: comuna_id || null,
      escala,
      provincia: camposTexto.provincia || null,
      municipio: camposTexto.municipio || null,
      comuna: camposTexto.comuna || null,
      localidade: camposTexto.localidade || null,
      entidade: camposTexto.entidade || null,
      exploracao: camposTexto.exploracao || null,
      periodo_inicio: periodo_inicio || null,
      periodo_fim: periodo_fim || null,
      data_referencia: data_referencia || null,
      valor: valor.valor,
      unidade,
      tamanho_amostra: tamanho_amostra.valor,
      margem_erro: margem_erro.valor,
      nivel_confianca: nivel_confianca.valor,
      metodologia: camposTexto.metodologia || null,
      natureza,
      estado,
      observacoes: camposTexto.observacoes || null,
      actualizado_em: new Date().toISOString(),
    },
  };
}

async function verificarAdministrador() {
  return await administradorAutenticado();
}

export async function GET() {
  try {
    if (!(await verificarAdministrador())) {
      return erroJson("Sessão administrativa inválida.", 401);
    }

    const supabase = obterSupabaseAdmin();

    const { data, error } = await supabase
      .from("agro_observacoes")
      .select(`
        *,
        indicador:agro_indicadores (
          id,
          codigo,
          nome,
          unidade
        )
      `)
      .order("criado_em", { ascending: false });

    if (error) {
      console.error("Erro ao listar observações:", error.message);
      return erroJson("Não foi possível carregar as observações.", 500);
    }

    return NextResponse.json({
      sucesso: true,
      observacoes: data ?? [],
    });
  } catch (error) {
    console.error("Erro na API de observações:", error);
    return erroJson("Não foi possível carregar as observações.", 500);
  }
}

export async function POST(request: Request) {
  try {
    if (!(await verificarAdministrador())) {
      return erroJson("Sessão administrativa inválida.", 401);
    }

    const body = (await request.json()) as DadosObservacao;
    const validacao = validarDados(body);

    if (!validacao.sucesso) {
      return erroJson(validacao.erro, 400);
    }

    const supabase = obterSupabaseAdmin();

    const { data, error } = await supabase
      .from("agro_observacoes")
      .insert(validacao.dados)
      .select("*")
      .single();

    if (error) {
      console.error("Erro ao criar observação:", error.message);

      if (error.code === "23503") {
        return erroJson(
          "Uma referência seleccionada (indicador, dataset, campanha, cultura ou território) não existe ou não corresponde à hierarquia territorial.",
          400
        );
      }

      return erroJson("Não foi possível guardar a observação.", 500);
    }

    return NextResponse.json(
      { sucesso: true, observacao: data },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro ao criar observação:", error);
    return erroJson("Não foi possível processar a observação.", 400);
  }
}

export async function PATCH(request: Request) {
  try {
    if (!(await verificarAdministrador())) {
      return erroJson("Sessão administrativa inválida.", 401);
    }

    const body = (await request.json()) as DadosObservacao;
    const id = texto(body.id);

    if (!uuidValido(id)) {
      return erroJson("O identificador da observação é inválido.", 400);
    }

    const validacao = validarDados(body);

    if (!validacao.sucesso) {
      return erroJson(validacao.erro, 400);
    }

    const supabase = obterSupabaseAdmin();

    const { data: existente, error: erroLeitura } = await supabase
      .from("agro_observacoes")
      .select("id")
      .eq("id", id)
      .maybeSingle();

    if (erroLeitura) {
      console.error("Erro ao procurar observação:", erroLeitura.message);
      return erroJson("Não foi possível procurar a observação.", 500);
    }

    if (!existente) {
      return erroJson("Observação não encontrada.", 404);
    }

    const { data, error } = await supabase
      .from("agro_observacoes")
      .update(validacao.dados)
      .eq("id", id)
      .select("*")
      .single();

    if (error) {
      console.error("Erro ao actualizar observação:", error.message);

      if (error.code === "23503") {
        return erroJson(
          "Uma referência seleccionada (indicador, dataset, campanha, cultura ou território) não existe ou não corresponde à hierarquia territorial.",
          400
        );
      }

      return erroJson("Não foi possível actualizar a observação.", 500);
    }

    return NextResponse.json({
      sucesso: true,
      observacao: data,
    });
  } catch (error) {
    console.error("Erro ao actualizar observação:", error);
    return erroJson("Não foi possível processar a alteração.", 400);
  }
}


export async function DELETE(request: Request) {
  try {
    if (!(await verificarAdministrador())) {
      return erroJson("Sessão administrativa inválida.", 401);
    }

    const body = await request.json();
    const id = texto(body?.id);

    if (!uuidValido(id)) {
      return erroJson("O identificador da observação é inválido.", 400);
    }

    const supabase = obterSupabaseAdmin();

    const { data, error } = await supabase
      .from("agro_observacoes")
      .delete()
      .eq("id", id)
      .select("id")
      .maybeSingle();

    if (error) {
      console.error("Erro ao eliminar observação:", error.message);
      return erroJson("Não foi possível eliminar a observação.", 500);
    }

    if (!data) return erroJson("Observação não encontrada.", 404);

    return NextResponse.json({
      sucesso: true,
      mensagem: "Observação eliminada com sucesso.",
    });
  } catch (error) {
    console.error("Erro ao eliminar observação:", error);
    return erroJson("Não foi possível processar a eliminação.", 500);
  }
}