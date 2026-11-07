
import { NextRequest, NextResponse } from "next/server";
import { administradorAutenticado } from "@/lib/admin-auth";
import { obterSupabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type DadosRelacao = {
  estudo_id: string;
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
  if (!uuidValido(body.estudo_id)) {
    return {
      valido: false,
      erro: "O identificador do estudo é inválido.",
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
      estudo_id: body.estudo_id,
      fonte_id: body.fonte_id,
      citacao,
    },
  };
}

// GET — consultar fontes associadas a um estudo
export async function GET(request: NextRequest) {
  try {
    if (!(await administradorAutenticado())) {
      return erroJson("Acesso não autorizado.", 401);
    }

    const estudoId = request.nextUrl.searchParams.get("estudo_id");
    const fonteId = request.nextUrl.searchParams.get("fonte_id");

    if (estudoId && !uuidValido(estudoId)) {
      return erroJson("O identificador do estudo é inválido.");
    }

    if (fonteId && !uuidValido(fonteId)) {
      return erroJson("O identificador da fonte é inválido.");
    }

    const supabase = obterSupabaseAdmin();

    let consulta = supabase
      .from("agro_estudos_fontes")
      .select(`
        estudo_id,
        fonte_id,
        citacao,
        estudo:agro_estudos (
          id,
          titulo,
          categoria,
          provincia
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

    if (estudoId) {
      consulta = consulta.eq("estudo_id", estudoId);
    }

    if (fonteId) {
      consulta = consulta.eq("fonte_id", fonteId);
    }

    const { data, error } = await consulta;

    if (error) {
      console.error("Erro ao consultar relações:", error);
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

// POST — associar uma fonte a um estudo
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
      .from("agro_estudos_fontes")
      .insert(validacao.dados)
      .select(`
        estudo_id,
        fonte_id,
        citacao
      `)
      .single();

    if (error) {
      console.error("Erro ao associar fonte:", error);

      if (error.code === "23503") {
        return erroJson(
          "O estudo ou a fonte indicada não foi encontrado.",
          404
        );
      }

      if (error.code === "23505") {
        return erroJson(
          "Esta fonte já está associada ao estudo indicado.",
          409
        );
      }

      return erroJson("Não foi possível associar a fonte.", 500);
    }

    return NextResponse.json(
      {
        mensagem: "Fonte associada ao estudo com sucesso.",
        dados: data,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro inesperado ao associar fonte:", error);
    return erroJson("Erro interno ao associar a fonte.", 500);
  }
}

// PATCH — actualizar a citação de uma associação
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

    const validacao = validarDados(registo);

    if (!validacao.valido) {
      return erroJson(validacao.erro);
    }

    const supabase = obterSupabaseAdmin();

    const { data, error } = await supabase
      .from("agro_estudos_fontes")
      .update({ citacao: validacao.dados.citacao })
      .eq("estudo_id", validacao.dados.estudo_id)
      .eq("fonte_id", validacao.dados.fonte_id)
      .select("estudo_id, fonte_id, citacao")
      .maybeSingle();

    if (error) {
      console.error("Erro ao actualizar citação:", error);
      return erroJson("Não foi possível actualizar a citação.", 500);
    }

    if (!data) {
      return erroJson("A associação entre o estudo e a fonte não existe.", 404);
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

// DELETE — remover a associação entre estudo e fonte
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

    if (!uuidValido(registo.estudo_id) || !uuidValido(registo.fonte_id)) {
      return erroJson(
        "Os identificadores do estudo e da fonte são obrigatórios e devem ser válidos."
      );
    }

    const supabase = obterSupabaseAdmin();

    const { data, error } = await supabase
      .from("agro_estudos_fontes")
      .delete()
      .eq("estudo_id", registo.estudo_id)
      .eq("fonte_id", registo.fonte_id)
      .select("estudo_id, fonte_id")
      .maybeSingle();

    if (error) {
      console.error("Erro ao remover associação:", error);
      return erroJson("Não foi possível remover a associação.", 500);
    }

    if (!data) {
      return erroJson("A associação indicada não foi encontrada.", 404);
    }

    return NextResponse.json({
      mensagem: "Fonte desassociada do estudo com sucesso.",
    });
  } catch (error) {
    console.error("Erro inesperado ao remover associação:", error);
    return erroJson("Erro interno ao remover a associação.", 500);
  }
}
