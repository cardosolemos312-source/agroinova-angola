import { NextResponse } from "next/server";
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

function texto(valor: unknown): string {
  return typeof valor === "string" ? valor.trim() : "";
}

function dadosCampanha(dados: Record<string, unknown>) {
  return {
    codigo: texto(dados.codigo),
    nome: texto(dados.nome),
    periodo_inicio: texto(dados.periodo_inicio) || null,
    periodo_fim: texto(dados.periodo_fim) || null,
    estado: texto(dados.estado),
    descricao: texto(dados.descricao) || null,
  };
}

export async function GET() {
  try {
    if (!(await administradorAutenticado())) {
      return erroJson("Sessão administrativa inválida.", 401);
    }

    const supabase = obterSupabaseAdmin();

    const [
      campanhas,
      culturas,
      provincias,
      municipios,
      comunas,
      levantamentos,
    ] = await Promise.all([
      supabase
        .from("agro_campanhas")
        .select("id,codigo,nome,periodo_inicio,periodo_fim,estado,descricao")
        .order("nome"),
      supabase
        .from("agro_culturas")
        .select("id,codigo,nome,grupo,estado")
        .order("nome"),
      supabase
        .from("agro_provincias")
        .select("id,codigo,nome,estado")
        .order("nome"),
      supabase
        .from("agro_municipios")
        .select("id,provincia_id,nome,codigo,estado,tipo_estrutura")
        .order("nome"),
      supabase
        .from("agro_comunas")
        .select("id,municipio_id,nome,codigo,estado")
        .order("nome"),
      supabase
        .from("agro_levantamentos_provinciais")
        .select("id,campanha_id,provincia_id,cultura_id,periodo_inicio,periodo_fim,estado,descricao")
        .order("created_at", { ascending: false }),
    ]);

    const erros = [
      campanhas.error,
      culturas.error,
      provincias.error,
      municipios.error,
      comunas.error,
      levantamentos.error,
    ];

    if (erros.some(Boolean)) {
      console.error("Erro ao consultar referências agropecuárias:", erros);
      return erroJson("Não foi possível carregar os dados de referência.", 500);
    }

    return NextResponse.json({
      sucesso: true,
      campanhas: campanhas.data ?? [],
      culturas: culturas.data ?? [],
      provincias: provincias.data ?? [],
      municipios: municipios.data ?? [],
      comunas: comunas.data ?? [],
      levantamentos: levantamentos.data ?? [],
    });
  } catch (erro) {
    console.error("Erro na API de referências agropecuárias:", erro);
    return erroJson("Não foi possível consultar os dados de referência.", 500);
  }
}

export async function POST(request: Request) {
  try {
    if (!(await administradorAutenticado())) {
      return erroJson("Sessão administrativa inválida.", 401);
    }

    const dados = await request.json() as Record<string, unknown>;
    const campanha = dadosCampanha(dados);

    if (!campanha.codigo || !campanha.nome || !campanha.estado) {
      return erroJson("Código, nome e estado são obrigatórios.");
    }

    const supabase = obterSupabaseAdmin();

    const { data, error } = await supabase
      .from("agro_campanhas")
      .insert(campanha)
      .select("*")
      .single();

    if (error) {
      console.error("Erro ao criar campanha:", error);
      return erroJson("Não foi possível criar a campanha. Verifique se o código já existe.", 400);
    }

    return NextResponse.json({ sucesso: true, campanha: data }, { status: 201 });
  } catch (erro) {
    console.error("Erro ao criar campanha:", erro);
    return erroJson("Não foi possível processar o registo da campanha.", 500);
  }
}

export async function PATCH(request: Request) {
  try {
    if (!(await administradorAutenticado())) {
      return erroJson("Sessão administrativa inválida.", 401);
    }

    const dados = await request.json() as Record<string, unknown>;
    const id = texto(dados.id);

    if (!id) {
      return erroJson("Identificador da campanha não informado.");
    }

    const actualizacao: Record<string, unknown> = {};

    for (const campo of [
      "codigo",
      "nome",
      "periodo_inicio",
      "periodo_fim",
      "estado",
      "descricao",
    ]) {
      if (Object.prototype.hasOwnProperty.call(dados, campo)) {
        const valor = dados[campo];

        actualizacao[campo] =
          campo === "periodo_inicio" || campo === "periodo_fim" || campo === "descricao"
            ? texto(valor) || null
            : texto(valor);
      }
    }

    if (Object.keys(actualizacao).length === 0) {
      return erroJson("Nenhum campo foi enviado para actualização.");
    }

    if (
      ("codigo" in actualizacao && !actualizacao.codigo) ||
      ("nome" in actualizacao && !actualizacao.nome) ||
      ("estado" in actualizacao && !actualizacao.estado)
    ) {
      return erroJson("Código, nome e estado não podem ficar vazios.");
    }

    const supabase = obterSupabaseAdmin();

    const { data, error } = await supabase
      .from("agro_campanhas")
      .update(actualizacao)
      .eq("id", id)
      .select("*")
      .maybeSingle();

    if (error) {
      console.error("Erro ao actualizar campanha:", error);
      return erroJson("Não foi possível actualizar a campanha.", 400);
    }

    if (!data) {
      return erroJson("Campanha não encontrada.", 404);
    }

    return NextResponse.json({ sucesso: true, campanha: data });
  } catch (erro) {
    console.error("Erro ao actualizar campanha:", erro);
    return erroJson("Não foi possível processar a actualização.", 500);
  }
}

export async function DELETE(request: Request) {
  try {
    if (!(await administradorAutenticado())) {
      return erroJson("Sessão administrativa inválida.", 401);
    }

    const dados = await request.json() as Record<string, unknown>;
    const id = texto(dados.id);

    if (!id) {
      return erroJson("Identificador da campanha não informado.");
    }

    const supabase = obterSupabaseAdmin();

    const { error: erroEliminarObservacoes } = await supabase
      .from("agro_observacoes")
      .delete()
      .eq("campanha_id", id);

    if (erroEliminarObservacoes) {
      console.error("Erro ao eliminar observacoes da campanha:", erroEliminarObservacoes);
      return erroJson(
        `Nao foi possivel eliminar as observacoes associadas: ${erroEliminarObservacoes.message}`,
        400
      );
    }

    const { error: erroEliminarLevantamentos } = await supabase
      .from("agro_levantamentos_provinciais")
      .delete()
      .eq("campanha_id", id);

    if (erroEliminarLevantamentos) {
      console.error("Erro ao eliminar levantamentos da campanha:", erroEliminarLevantamentos);
      return erroJson(
        `Nao foi possivel eliminar os levantamentos associados: ${erroEliminarLevantamentos.message}`,
        400
      );
    }
    const { data, error } = await supabase
      .from("agro_campanhas")
      .delete()
      .eq("id", id)
      .select("id")
      .maybeSingle();

    if (error) {
      console.error("Erro ao eliminar campanha:", error);
      return erroJson(
        `Não foi possível eliminar a campanha: ${error.message}`,
        400
      );
    }

    if (!data) {
      return erroJson("Campanha não encontrada.", 404);
    }

    return NextResponse.json({
      sucesso: true,
      mensagem: "Campanha eliminada.",
    });
  } catch (erro) {
    console.error("Erro ao eliminar campanha:", erro);
    return erroJson("Não foi possível processar a eliminação.", 500);
  }
}