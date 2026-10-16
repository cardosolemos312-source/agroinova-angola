
import { NextResponse } from "next/server";
import { obterSupabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const supabase = obterSupabaseAdmin();

    const { data, error } = await supabase
      .from("agroinova_tecnicos")
      .select(
        "id, nome, titulo_profissional, formacao_academica, especialidade, instituicao, provincia, biografia, fotografia_url, estado, destaque",
      )
      .eq("estado", "publicado")
      .order("criado_em", { ascending: false });

    if (error) {
      console.error("Erro ao consultar investigadores:", error.message);

      return NextResponse.json(
        {
          sucesso: false,
          erro: "Não foi possível carregar os investigadores.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        sucesso: true,
        tecnicos: data ?? [],
      },
      {
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      },
    );
  } catch (erro) {
    console.error("Erro na API pública de investigadores:", erro);

    return NextResponse.json(
      {
        sucesso: false,
        erro: "Ocorreu um erro ao carregar os investigadores.",
      },
      { status: 500 },
    );
  }
}
