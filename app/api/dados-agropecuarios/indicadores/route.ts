import { NextResponse } from "next/server";
import { obterSupabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const supabase = obterSupabaseAdmin();

    // Indicadores publicados: preservar todos os campos da administração.
    const { data: indicadores, error: erroIndicadores } = await supabase
      .from("agro_indicadores")
      .select("*")
      .eq("estado", "publicado")
      .order("nome", { ascending: true });

    if (erroIndicadores) {
      console.error(
        "Erro ao carregar indicadores públicos:",
        erroIndicadores.message
      );

      return NextResponse.json(
        {
          sucesso: false,
          erro: "Não foi possível carregar os indicadores.",
        },
        { status: 500 }
      );
    }

    if (!indicadores || indicadores.length === 0) {
      return NextResponse.json({
        sucesso: true,
        indicadores: [],
      });
    }

    const ids = indicadores.map((indicador) => indicador.id);

    // Observações publicadas: preservar todos os campos registados.
    const { data: observacoes, error: erroObservacoes } = await supabase
      .from("agro_observacoes")
      .select("*")
      .in("indicador_id", ids)
      .eq("estado", "publicado")
      .order("periodo_fim", { ascending: false, nullsFirst: false })
      .order("data_referencia", { ascending: false, nullsFirst: false })
      .order("periodo_inicio", { ascending: false, nullsFirst: false });

    if (erroObservacoes) {
      console.error(
        "Erro ao carregar observações públicas:",
        erroObservacoes.message
      );

      return NextResponse.json(
        {
          sucesso: false,
          erro: "Não foi possível carregar os valores estatísticos.",
        },
        { status: 500 }
      );
    }

    // Imagens associadas exclusivamente aos indicadores publicados.
    const { data: imagens, error: erroImagens } = await supabase
      .from("agro_indicadores_imagens")
      .select("*")
      .in("indicador_id", ids)
      .order("ordem", { ascending: true })
      .order("criado_em", { ascending: false });

    if (erroImagens) {
      console.error(
        "Erro ao carregar imagens dos indicadores:",
        erroImagens.message
      );
    }

    const datasetIds = Array.from(
      new Set(
        [
          ...indicadores.map((indicador) => indicador.dataset_id),
          ...(observacoes ?? []).map((observacao) => observacao.dataset_id),
        ].filter(
          (id): id is string => typeof id === "string" && id.length > 0
        )
      )
    );

    let fontesAssociadas: {
      dataset_id: string;
      citacao: string | null;
      fonte: {
        id: string;
        titulo: string;
        entidade: string | null;
        tipo: string | null;
        autor: string | null;
        ano: number | null;
        url: string | null;
      }[];
    }[] = [];

    if (datasetIds.length > 0) {
      const { data: relacoesFontes, error: erroFontes } = await supabase
        .from("agro_datasets_fontes")
        .select(`
          dataset_id,
          citacao,
          fonte:agro_fontes (
            id,
            titulo,
            entidade,
            tipo,
            autor,
            ano,
            url
          )
        `)
        .in("dataset_id", datasetIds);

      if (erroFontes) {
        console.error(
          "Erro ao carregar fontes dos conjuntos de dados:",
          erroFontes.message
        );
      } else {
        fontesAssociadas = (relacoesFontes ?? []) as typeof fontesAssociadas;
      }
    }

    const resultado = indicadores.map((indicador) => {
      const observacoesIndicador = (observacoes ?? []).filter(
        (observacao) => observacao.indicador_id === indicador.id
      );

      const fontesIndicador = fontesAssociadas
        .filter(
          (relacao) => relacao.dataset_id === indicador.dataset_id
        )
        .map((relacao) => ({
          citacao: relacao.citacao,
          fonte: relacao.fonte,
        }));

      const observacoesComFontes = observacoesIndicador.map(
        (observacao) => {
          const datasetObservacao =
            observacao.dataset_id ?? indicador.dataset_id;

          const fontesObservacao = fontesAssociadas
            .filter(
              (relacao) => relacao.dataset_id === datasetObservacao
            )
            .map((relacao) => ({
              citacao: relacao.citacao,
              fonte: relacao.fonte,
            }));

          return {
            ...observacao,
            fontes: fontesObservacao,
          };
        }
      );

      const imagensIndicador = (imagens ?? []).filter(
        (imagem) => imagem.indicador_id === indicador.id
      );

      return {
        ...indicador,
        fontes: fontesIndicador,
        observacoes: observacoesComFontes,
        imagens: imagensIndicador,
      };
    });

    return NextResponse.json({
      sucesso: true,
      indicadores: resultado,
    });
  } catch (error) {
    console.error(
      "Erro na API pública de dados agropecuários:",
      error
    );

    return NextResponse.json(
      {
        sucesso: false,
        erro: "Ocorreu um erro ao consultar os dados.",
      },
      { status: 500 }
    );
  }
}