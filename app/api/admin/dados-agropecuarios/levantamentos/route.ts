
import { NextResponse } from "next/server";
import { administradorAutenticado } from "@/lib/admin-auth";
import { obterSupabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type DadosLevantamento = {
  id?: string;
  campanha_id?: string;
  provincia_id?: string;
  cultura_id?: string;
  periodo_inicio?: string | null;
  periodo_fim?: string | null;
  estado?: string;
  descricao?: string | null;
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

function validarDados(body: DadosLevantamento) {
  const campanha_id = texto(body.campanha_id);
  const provincia_id = texto(body.provincia_id);
  const cultura_id = texto(body.cultura_id);
  const periodo_inicio = texto(body.periodo_inicio);
  const periodo_fim = texto(body.periodo_fim);
  const estado = texto(body.estado) || "planeado";
  const descricao = texto(body.descricao);

  if (!uuidValido(campanha_id)) {
    return {
      sucesso: false as const,
      erro: "Selecciona uma campanha válida.",
    };
  }

  if (!uuidValido(provincia_id)) {
    return {
      sucesso: false as const,
      erro: "Selecciona uma província válida.",
    };
  }

  if (!uuidValido(cultura_id)) {
    return {
      sucesso: false as const,
      erro: "Selecciona uma cultura válida.",
    };
  }

  for (const [nome, data] of [
    ["período inicial", periodo_inicio],
    ["período final", periodo_fim],
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

  if (!estado || estado.length > 40) {
    return {
      sucesso: false as const,
      erro: "O estado é obrigatório e deve ter até 40 caracteres.",
    };
  }

  if (descricao.length > 5000) {
    return {
      sucesso: false as const,
      erro: "A descrição não pode exceder 5000 caracteres.",
    };
  }

  return {
    sucesso: true as const,
    dados: {
      campanha_id,
      provincia_id,
      cultura_id,
      periodo_inicio: periodo_inicio || null,
      periodo_fim: periodo_fim || null,
      estado,
      descricao: descricao || null,
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
      .from("agro_levantamentos_provinciais")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Erro ao listar levantamentos:", error.message);
      return erroJson("Não foi possível carregar os levantamentos.", 500);
    }

    return NextResponse.json({
      sucesso: true,
      levantamentos: data ?? [],
    });
  } catch (error) {
    console.error("Erro na API de levantamentos:", error);
    return erroJson("Não foi possível carregar os levantamentos.", 500);
  }
}

export async function POST(request: Request) {
  try {
    if (!(await verificarAdministrador())) {
      return erroJson("Sessão administrativa inválida.", 401);
    }

    const body = (await request.json()) as DadosLevantamento;
    const validacao = validarDados(body);

    if (!validacao.sucesso) {
      return erroJson(validacao.erro, 400);
    }

    const supabase = obterSupabaseAdmin();

    const { data: duplicado, error: erroDuplicado } = await supabase
      .from("agro_levantamentos_provinciais")
      .select("id")
      .eq("campanha_id", validacao.dados.campanha_id)
      .eq("provincia_id", validacao.dados.provincia_id)
      .eq("cultura_id", validacao.dados.cultura_id)
      .maybeSingle();

    if (erroDuplicado) {
      console.error("Erro ao verificar levantamento existente:", erroDuplicado.message);
      return erroJson("Não foi possível verificar os levantamentos existentes.", 500);
    }

    if (duplicado) {
      return erroJson(
        "Já existe um levantamento para esta campanha, província e cultura.",
        409
      );
    }

    const { data, error } = await supabase
      .from("agro_levantamentos_provinciais")
      .insert(validacao.dados)
      .select("*")
      .single();

    if (error) {
      console.error("Erro ao criar levantamento:", error.message);

      if (error.code === "23505") {
        return erroJson(
          "Já existe um levantamento para esta campanha, província e cultura.",
          409
        );
      }

      if (error.code === "23503") {
        return erroJson(
          "Uma das referências seleccionadas (campanha, província ou cultura) não existe.",
          400
        );
      }

      return erroJson("Não foi possível guardar o levantamento.", 500);
    }

    return NextResponse.json(
      { sucesso: true, levantamento: data },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro ao criar levantamento:", error);
    return erroJson("Não foi possível processar o levantamento.", 400);
  }
}

export async function PATCH(request: Request) {
  try {
    if (!(await verificarAdministrador())) {
      return erroJson("Sessão administrativa inválida.", 401);
    }

    const body = (await request.json()) as DadosLevantamento;
    const id = texto(body.id);

    if (!uuidValido(id)) {
      return erroJson("O identificador do levantamento é inválido.", 400);
    }

    const validacao = validarDados(body);

    if (!validacao.sucesso) {
      return erroJson(validacao.erro, 400);
    }

    const supabase = obterSupabaseAdmin();

    const { data: existente, error: erroLeitura } = await supabase
      .from("agro_levantamentos_provinciais")
      .select("id")
      .eq("id", id)
      .maybeSingle();

    if (erroLeitura) {
      console.error("Erro ao procurar levantamento:", erroLeitura.message);
      return erroJson("Não foi possível procurar o levantamento.", 500);
    }

    if (!existente) {
      return erroJson("Levantamento não encontrado.", 404);
    }

    const { data: duplicado, error: erroDuplicado } = await supabase
      .from("agro_levantamentos_provinciais")
      .select("id")
      .eq("campanha_id", validacao.dados.campanha_id)
      .eq("provincia_id", validacao.dados.provincia_id)
      .eq("cultura_id", validacao.dados.cultura_id)
      .neq("id", id)
      .maybeSingle();

    if (erroDuplicado) {
      console.error("Erro ao verificar levantamento duplicado:", erroDuplicado.message);
      return erroJson("Não foi possível verificar os levantamentos existentes.", 500);
    }

    if (duplicado) {
      return erroJson(
        "Já existe outro levantamento para esta campanha, província e cultura.",
        409
      );
    }

    const { data, error } = await supabase
      .from("agro_levantamentos_provinciais")
      .update({
        ...validacao.dados,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select("*")
      .single();

    if (error) {
      console.error("Erro ao actualizar levantamento:", error.message);

      if (error.code === "23505") {
        return erroJson(
          "Já existe outro levantamento para esta campanha, província e cultura.",
          409
        );
      }

      if (error.code === "23503") {
        return erroJson(
          "Uma das referências seleccionadas (campanha, província ou cultura) não existe.",
          400
        );
      }

      return erroJson("Não foi possível actualizar o levantamento.", 500);
    }

    return NextResponse.json({
      sucesso: true,
      levantamento: data,
    });
  } catch (error) {
    console.error("Erro ao actualizar levantamento:", error);
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
      return erroJson("O identificador do levantamento é inválido.", 400);
    }

    const supabase = obterSupabaseAdmin();

    const { data: existente, error: erroLeitura } = await supabase
      .from("agro_levantamentos_provinciais")
      .select("id")
      .eq("id", id)
      .maybeSingle();

    if (erroLeitura) {
      console.error("Erro ao procurar levantamento:", erroLeitura.message);
      return erroJson("Não foi possível procurar o levantamento.", 500);
    }

    if (!existente) {
      return erroJson("Levantamento não encontrado.", 404);
    }

    const { count, error: erroObservacoes } = await supabase
      .from("agro_observacoes")
      .select("id", { count: "exact", head: true })
      .eq("levantamento_id", id);

    if (erroObservacoes) {
      console.error("Erro ao verificar observações associadas:", erroObservacoes.message);
      return erroJson("Não foi possível verificar as observações associadas.", 500);
    }

    if ((count ?? 0) > 0) {
      return erroJson(
        "Este levantamento possui observações associadas. Retire ou reassocie essas observações antes de o eliminar.",
        409
      );
    }

    const { data, error } = await supabase
      .from("agro_levantamentos_provinciais")
      .delete()
      .eq("id", id)
      .select("id")
      .maybeSingle();

    if (error) {
      console.error("Erro ao eliminar levantamento:", error.message);
      return erroJson("Não foi possível eliminar o levantamento.", 500);
    }

    if (!data) {
      return erroJson("Levantamento não encontrado.", 404);
    }

    return NextResponse.json({
      sucesso: true,
      mensagem: "Levantamento eliminado com sucesso.",
    });
  } catch (error) {
    console.error("Erro ao eliminar levantamento:", error);
    return erroJson("Não foi possível processar a eliminação.", 500);
  }
}
