
import { NextRequest, NextResponse } from "next/server";
import { administradorAutenticado } from "@/lib/admin-auth";
import { obterSupabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type DadosRelacao = {
  dataset_id: string;
  fonte_id: string;
  citacao: string | null;
};

function erroJson(mensagem: string, status = 400) {
  return NextResponse.json({ erro: mensagem }, { status });
}

function uuidValido(valor: unknown): valor is string {
  return (
    typeof valor === "string" &&
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      valor
    )
  );
}

function validarDados(
  body: Record<string, unknown>
):
  | { valido: true; dados: DadosRelacao }
  | { valido: false; erro: string } {
  if (!uuidValido(body.dataset_id)) {
    return {
      valido: false,
      erro: "O identificador do conjunto de dados é inválido.",
    };
  }

  if (!uuidValido(body.fonte_id)) {
    return {
      valido: false,
      erro: "O identificador da fonte é inválido.",
    };
  }

  if (
    body.citacao !== undefined &&
    body.citacao !== null &&
    typeof body.citacao !== "string"
  ) {
    return {
      valido: false,
      erro: "A citação deve ser um texto válido.",
    };
  }

  const citacao =
    typeof body.citacao === "string"
      ? body.citacao.trim().slice(0, 10000) || null
      : null;

  return {
    valido: true,
    dados: {
      dataset_id: body.dataset_id,
      fonte_id: body.fonte_id,
      citacao,
    },
  };
}

// GET — consultar fontes associadas a conjuntos de dados
export async function GET(request: NextRequest) {
  try {
    if (!(await administradorAutenticado())) {
      return erroJson("Acesso não autorizado.", 401);
    }

    const datasetId = request.nextUrl.searchParams.get("dataset_id");
    const fonteId = request.nextUrl.searchParams.get("fonte_id");

    if (datasetId && !uuidValido(datasetId)) {
      return erroJson("O identificador do conjunto de dados é inválido.");
    }

    if (fonteId && !uuidValido(fonteId)) {
      return erroJson("O identificador da fonte é inválido.");
    }

    const supabase = obterSupabaseAdmin();

    let consulta = supabase
      .from("agro_datasets_fontes")
      .select(`
        dataset_id,
        fonte_id,
        citacao,
                dataset:agro_datasets (
          id,
          titulo,
          categoria,
          subcategoria,
          periodo_inicio,
          periodo_fim,
          escala
        ),
        fonte:agro_fontes (
          id,
          titulo,
          entidade,
          tipo,
          autor,
          ano,
          url
        )
      `);

    if (datasetId) {
      consulta = consulta.eq("dataset_id", datasetId);
    }

    if (fonteId) {
      consulta = consulta.eq("fonte_id", fonteId);
    }

    const { data, error } = await consulta;

    if (error) {
      console.error("Erro ao consultar fontes dos conjuntos de dados:", error);
      return erroJson(
        "Não foi possível carregar as fontes associadas.",
        500
      );
    }

    return NextResponse.json({ dados: data ?? [] });
  } catch (error) {
    console.error("Erro inesperado ao consultar relações:", error);
    return erroJson("Erro interno ao consultar as relações.", 500);
  }
}

// POST — associar uma fonte a um conjunto de dados
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
      .from("agro_datasets_fontes")
      .insert(validacao.dados)
      .select("dataset_id, fonte_id, citacao")
      .single();

    if (error) {
      console.error("Erro ao associar fonte ao conjunto de dados:", error);

      if (error.code === "23503") {
        return erroJson(
          "O conjunto de dados ou a fonte indicada não foi encontrado.",
          404
        );
      }

      if (error.code === "23505") {
        return erroJson(
          "Esta fonte já está associada ao conjunto de dados indicado.",
          409
        );
      }

      return erroJson("Não foi possível associar a fonte.", 500);
    }

    return NextResponse.json(
      {
        mensagem: "Fonte associada ao conjunto de dados com sucesso.",
        dados: data,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro inesperado ao associar fonte:", error);
    return erroJson("Erro interno ao associar a fonte.", 500);
  }
}

// PATCH — actualizar a citação da fonte
export async function PATCH(request: NextRequest) {
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
      .from("agro_datasets_fontes")
      .update({ citacao: validacao.dados.citacao })
      .eq("dataset_id", validacao.dados.dataset_id)
      .eq("fonte_id", validacao.dados.fonte_id)
      .select("dataset_id, fonte_id, citacao")
      .maybeSingle();

    if (error) {
      console.error("Erro ao actualizar citação:", error);
      return erroJson("Não foi possível actualizar a citação.", 500);
    }

    if (!data) {
      return erroJson(
        "A associação entre o conjunto de dados e a fonte não existe.",
        404
      );
    }

    return NextResponse.json({
      mensagem: "Citação actualizada com sucesso.",
      dados: data,
    });
  } catch (error) {
    console.error("Erro inesperado ao actualizar citação:", error);
    return erroJson("Erro interno ao actualizar a citação.", 500);
  }
}

// DELETE — remover a associação entre conjunto de dados e fonte
export async function DELETE(request: NextRequest) {
  try {
    if (!(await administradorAutenticado())) {
      return erroJson("Acesso não autorizado.", 401);
    }

    const body = await request.json();

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return erroJson("Os dados enviados são inválidos.");
    }

    const registo = body as Record<string, unknown>;

    if (
      !uuidValido(registo.dataset_id) ||
      !uuidValido(registo.fonte_id)
    ) {
      return erroJson(
        "Os identificadores do conjunto de dados e da fonte são obrigatórios e devem ser válidos."
      );
    }

    const supabase = obterSupabaseAdmin();

    const { data, error } = await supabase
      .from("agro_datasets_fontes")
      .delete()
      .eq("dataset_id", registo.dataset_id)
      .eq("fonte_id", registo.fonte_id)
      .select("dataset_id, fonte_id")
      .maybeSingle();

    if (error) {
      console.error("Erro ao remover associação:", error);
      return erroJson("Não foi possível remover a associação.", 500);
    }

    if (!data) {
      return erroJson("A associação indicada não foi encontrada.", 404);
    }

    return NextResponse.json({
      mensagem: "Fonte desassociada do conjunto de dados com sucesso.",
    });
  } catch (error) {
    console.error("Erro inesperado ao remover associação:", error);
    return erroJson("Erro interno ao remover a associação.", 500);
  }
}
