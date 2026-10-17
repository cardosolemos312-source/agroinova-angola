import { NextResponse } from "next/server";
import { obterSupabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const supabase = obterSupabaseAdmin();

    const [eventosResultado, instituicoesResultado] = await Promise.all([
      supabase
        .from("agroinova_agroacademia_eventos")
        .select(
          "id, titulo, tipo, area, modalidade, duracao, nivel, resumo, conteudo, imagem, estado, destaque, data_evento, local_evento, entidade_organizadora"
        )
        .eq("estado", "publicado")
        .order("destaque", { ascending: false })
        .order("data_evento", {
          ascending: true,
          nullsFirst: false,
        }),

      supabase
        .from("agroinova_agroacademia_instituicoes")
        .select(
          "id, nome, sigla, provincia, tipo, foco, url, imagem, estado"
        )
        .eq("estado", "publicado")
        .order("nome", { ascending: true }),
    ]);

    if (eventosResultado.error || instituicoesResultado.error) {
      console.error("Erro ao consultar a AgroAcademia:", {
        eventos: eventosResultado.error?.message,
        instituicoes: instituicoesResultado.error?.message,
      });

      return NextResponse.json(
        { erro: "Não foi possível carregar os dados da AgroAcademia." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        eventos: eventosResultado.data ?? [],
        instituicoes: instituicoesResultado.data ?? [],
      },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (erro) {
    console.error("Erro na API pública da AgroAcademia:", erro);

    return NextResponse.json(
      { erro: "Ocorreu um erro ao carregar a AgroAcademia." },
      { status: 500 }
    );
  }
}