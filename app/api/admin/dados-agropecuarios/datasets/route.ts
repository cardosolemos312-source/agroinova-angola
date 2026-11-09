import { NextRequest, NextResponse } from "next/server";
import { administradorAutenticado } from "@/lib/admin-auth";
import { obterSupabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function erroJson(mensagem: string, status = 400) {
  return NextResponse.json(
    { sucesso: false, erro: mensagem },
    { status }
  );
}

function textoValido(valor: unknown, maximo: number) {
  if (typeof valor !== "string") return null;

  const texto = valor.trim();

  if (!texto || texto.length > maximo) return null;

  return texto;
}

function dataValida(valor: unknown): boolean {
  if (valor === null || valor === undefined || valor === "") {
    return true;
  }

  if (typeof valor !== "string") return false;

  if (!/^\d{4}-\d{2}-\d{2}$/.test(valor)) return false;

  const data = new Date(`${valor}T00:00:00.000Z`);

  return (
    !Number.isNaN(data.getTime()) &&
    data.toISOString().slice(0, 10) === valor
  );
}

const naturezasPermitidas = [
  "estatistica_oficial",
  "investigacao",
  "observacao_campo",
  "estimativa",
  "administrativa",
];

const estadosPermitidos = [
  "rascunho",
  "publicado",
  "arquivado",
];

const escalasPermitidas = [
  "nacional",
  "provincial",
  "municipal",
  "comunal",
  "local",
];

export async function GET() {
  try {
    if (!(await administradorAutenticado())) {
      return erroJson("Sessão administrativa inválida.", 401);
    }

    const supabase = obterSupabaseAdmin();

    const { data, error } = await supabase
      .from("agro_datasets")
      .select("*")
      .order("criado_em", { ascending: false });

    if (error) {
      console.error("Erro ao consultar datasets:", error.message);
      return erroJson("Não foi possível carregar os conjuntos de dados.", 500);
    }

    return NextResponse.json({
      sucesso: true,
      datasets: data ?? [],
    });
  } catch (error) {
    console.error("Erro na API administrativa de datasets:", error);
    return erroJson("Ocorreu um erro ao consultar os conjuntos de dados.", 500);
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!(await administradorAutenticado())) {
      return erroJson("Sessão administrativa inválida.", 401);
    }

    const corpo = await request.json();

    if (!corpo || typeof corpo !== "object" || Array.isArray(corpo)) {
      return erroJson("Os dados enviados são inválidos.");
    }

    const titulo = textoValido(corpo.titulo, 250);
    const categoria = textoValido(corpo.categoria, 100);

    const descricao =
      corpo.descricao == null || corpo.descricao === ""
        ? null
        : textoValido(corpo.descricao, 5000);

    const subcategoria =
      corpo.subcategoria == null || corpo.subcategoria === ""
        ? null
        : textoValido(corpo.subcategoria, 150);

    const responsavel =
      corpo.responsavel == null || corpo.responsavel === ""
        ? null
        : textoValido(corpo.responsavel, 250);

    const escala = corpo.escala ?? "nacional";
    const natureza = corpo.natureza ?? "estatistica_oficial";
    const estado = corpo.estado ?? "rascunho";

    if (!titulo || !categoria) {
      return erroJson("O título e a categoria são obrigatórios.");
    }

    if (
      (corpo.descricao != null && corpo.descricao !== "" && !descricao) ||
      (corpo.subcategoria != null && corpo.subcategoria !== "" && !subcategoria) ||
      (corpo.responsavel != null && corpo.responsavel !== "" && !responsavel)
    ) {
      return erroJson("Um ou mais campos de texto são inválidos ou demasiado longos.");
    }

    if (!escalasPermitidas.includes(escala)) {
      return erroJson("A escala geográfica indicada é inválida.");
    }

    if (!naturezasPermitidas.includes(natureza)) {
      return erroJson("A natureza do conjunto de dados é inválida.");
    }

    if (!estadosPermitidos.includes(estado)) {
      return erroJson("O estado indicado é inválido.");
    }

    if (
      !dataValida(corpo.periodo_inicio) ||
      !dataValida(corpo.periodo_fim)
    ) {
      return erroJson("As datas do período são inválidas.");
    }

    if (
      corpo.periodo_inicio &&
      corpo.periodo_fim &&
      corpo.periodo_inicio > corpo.periodo_fim
    ) {
      return erroJson("O início do período não pode ser posterior ao fim.");
    }

    const supabase = obterSupabaseAdmin();

    const { data, error } = await supabase
      .from("agro_datasets")
      .insert({
        titulo,
        descricao,
        categoria,
        subcategoria,
        periodo_inicio: corpo.periodo_inicio || null,
        periodo_fim: corpo.periodo_fim || null,
        escala,
        natureza,
        estado,
        responsavel,
      })
      .select("*")
      .single();

    if (error) {
      console.error("Erro ao criar dataset:", error.message);
      return erroJson("Não foi possível criar o conjunto de dados.", 500);
    }

    return NextResponse.json(
      {
        sucesso: true,
        mensagem: "Conjunto de dados criado com sucesso.",
        dataset: data,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro ao criar conjunto de dados:", error);
    return erroJson("Ocorreu um erro ao criar o conjunto de dados.", 500);
  }
}

export async function PATCH(request: NextRequest) {
  try {
    if (!(await administradorAutenticado())) {
      return erroJson("Sessão administrativa inválida.", 401);
    }

    const corpo = await request.json();

    if (!corpo || typeof corpo !== "object" || Array.isArray(corpo)) {
      return erroJson("Os dados enviados são inválidos.");
    }

    const { id } = corpo;

    if (
      typeof id !== "string" ||
      !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id)
    ) {
      return erroJson("O identificador do conjunto de dados é inválido.");
    }

    const actualizacao: Record<string, unknown> = {};

    if ("titulo" in corpo) {
      const valor = textoValido(corpo.titulo, 250);
      if (!valor) return erroJson("O título é obrigatório e deve ser válido.");
      actualizacao.titulo = valor;
    }

    if ("descricao" in corpo) {
      if (corpo.descricao === null || corpo.descricao === "") {
        actualizacao.descricao = null;
      } else {
        const valor = textoValido(corpo.descricao, 5000);
        if (!valor) return erroJson("A descrição é inválida.");
        actualizacao.descricao = valor;
      }
    }

    if ("categoria" in corpo) {
      const valor = textoValido(corpo.categoria, 100);
      if (!valor) return erroJson("A categoria é obrigatória.");
      actualizacao.categoria = valor;
    }

    if ("subcategoria" in corpo) {
      if (corpo.subcategoria === null || corpo.subcategoria === "") {
        actualizacao.subcategoria = null;
      } else {
        const valor = textoValido(corpo.subcategoria, 150);
        if (!valor) return erroJson("A subcategoria é inválida.");
        actualizacao.subcategoria = valor;
      }
    }

    if ("responsavel" in corpo) {
      if (corpo.responsavel === null || corpo.responsavel === "") {
        actualizacao.responsavel = null;
      } else {
        const valor = textoValido(corpo.responsavel, 250);
        if (!valor) return erroJson("O responsável é inválido.");
        actualizacao.responsavel = valor;
      }
    }

    if ("escala" in corpo) {
      if (!escalasPermitidas.includes(corpo.escala)) {
        return erroJson("A escala geográfica indicada é inválida.");
      }
      actualizacao.escala = corpo.escala;
    }

    if ("natureza" in corpo) {
      if (!naturezasPermitidas.includes(corpo.natureza)) {
        return erroJson("A natureza indicada é inválida.");
      }
      actualizacao.natureza = corpo.natureza;
    }

    if ("estado" in corpo) {
      if (!estadosPermitidos.includes(corpo.estado)) {
        return erroJson("O estado indicado é inválido.");
      }
      actualizacao.estado = corpo.estado;
    }

    for (const campo of ["periodo_inicio", "periodo_fim"]) {
      if (campo in corpo) {
        if (!dataValida(corpo[campo])) {
          return erroJson(`O campo ${campo} contém uma data inválida.`);
        }
        actualizacao[campo] = corpo[campo] || null;
      }
    }

    if (Object.keys(actualizacao).length === 0) {
      return erroJson("Não foram enviados campos para actualizar.");
    }

    const supabase = obterSupabaseAdmin();

    const { data: existente, error: erroExistente } = await supabase
      .from("agro_datasets")
      .select("id,periodo_inicio,periodo_fim")
      .eq("id", id)
      .maybeSingle();

    if (erroExistente) {
      console.error("Erro ao verificar dataset:", erroExistente.message);
      return erroJson("Não foi possível verificar o conjunto de dados.", 500);
    }

    if (!existente) {
      return erroJson("Conjunto de dados não encontrado.", 404);
    }

    const inicio =
      "periodo_inicio" in actualizacao
        ? actualizacao.periodo_inicio
        : existente.periodo_inicio;

    const fim =
      "periodo_fim" in actualizacao
        ? actualizacao.periodo_fim
        : existente.periodo_fim;

    if (inicio && fim && String(inicio) > String(fim)) {
      return erroJson("O início do período não pode ser posterior ao fim.");
    }

    const { data, error } = await supabase
      .from("agro_datasets")
      .update(actualizacao)
      .eq("id", id)
      .select("*")
      .single();

    if (error) {
      console.error("Erro ao actualizar dataset:", error.message);
      return erroJson("Não foi possível actualizar o conjunto de dados.", 500);
    }

    return NextResponse.json({
      sucesso: true,
      mensagem: "Conjunto de dados actualizado com sucesso.",
      dataset: data,
    });
  } catch (error) {
    console.error("Erro ao actualizar conjunto de dados:", error);
    return erroJson("Ocorreu um erro ao actualizar o conjunto de dados.", 500);
  }
}

export async function DELETE(request: NextRequest) {
  try {
    if (!(await administradorAutenticado())) {
      return erroJson("Sessão administrativa inválida.", 401);
    }

    const corpo = await request.json();

    if (!corpo || typeof corpo.id !== "string") {
      return erroJson("Identificador do conjunto de dados inválido.");
    }

    const id = corpo.id.trim();

    if (
      !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)
    ) {
      return erroJson("Identificador do conjunto de dados inválido.");
    }

    const supabase = obterSupabaseAdmin();

    const { data: existente, error: erroExistente } = await supabase
      .from("agro_datasets")
      .select("id")
      .eq("id", id)
      .maybeSingle();

    if (erroExistente) {
      console.error("Erro ao verificar dataset:", erroExistente.message);
      return erroJson("Não foi possível verificar o conjunto de dados.", 500);
    }

    if (!existente) {
      return erroJson("Conjunto de dados não encontrado.", 404);
    }

    const { error } = await supabase
      .from("agro_datasets")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Erro ao eliminar dataset:", error.message);
      return erroJson("Não foi possível eliminar o conjunto de dados.", 500);
    }

    return NextResponse.json({
      sucesso: true,
      mensagem: "Conjunto de dados eliminado com sucesso.",
    });
  } catch (error) {
    console.error("Erro ao eliminar conjunto de dados:", error);
    return erroJson("Ocorreu um erro ao eliminar o conjunto de dados.", 500);
  }
}