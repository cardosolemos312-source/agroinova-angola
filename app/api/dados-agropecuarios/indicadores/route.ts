
import { NextResponse } from "next/server";
import { obterSupabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const supabase = obterSupabaseAdmin();

    // 0. Levantamentos provinciais registados, independentemente
    // da existência de observações estatísticas publicadas.
    const { data: levantamentosPublicos, error: erroLevantamentosPublicos } =
      await supabase
        .from("agro_levantamentos_provinciais")
        .select(`
          id,
          campanha_id,
          provincia_id,
          cultura_id,
          periodo_inicio,
          periodo_fim,
          estado,
          descricao,
          campanha:agro_campanhas(id,codigo,nome),
          provincia:agro_provincias(id,nome),
          cultura:agro_culturas(id,nome)
        `)
        .order("created_at", { ascending: false });

    if (erroLevantamentosPublicos) {
      console.error(
        "Erro ao carregar levantamentos provinciais:",
        erroLevantamentosPublicos.message
      );

      return NextResponse.json(
        {
          sucesso: false,
          erro: "Não foi possível carregar os levantamentos provinciais.",
        },
        { status: 500 }
      );
    }
    // 1. Indicadores publicados.
    const { data: indicadores, error: erroIndicadores } = await supabase
      .from("agro_indicadores")
      .select("*")
      .eq("estado", "publicado")
      .order("nome", { ascending: true });

    if (erroIndicadores) {
      console.error("Erro ao carregar indicadores:", erroIndicadores.message);

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
        levantamentos: levantamentosPublicos ?? [],
      });
    }

    const ids = indicadores.map((indicador) => indicador.id);

    // 2. Observações publicadas.
    const { data: observacoes, error: erroObservacoes } = await supabase
      .from("agro_observacoes")
      .select("*")
      .in("indicador_id", ids)
      .eq("estado", "publicado")
      .order("periodo_fim", { ascending: false, nullsFirst: false })
      .order("data_referencia", { ascending: false, nullsFirst: false })
      .order("periodo_inicio", { ascending: false, nullsFirst: false });

    if (erroObservacoes) {
      console.error("Erro ao carregar observações:", erroObservacoes.message);

      return NextResponse.json(
        {
          sucesso: false,
          erro: "Não foi possível carregar os valores estatísticos.",
        },
        { status: 500 }
      );
    }

    // 3. Levantamentos provinciais associados às observações publicadas.
    const levantamentoIds = Array.from(
      new Set(
        (observacoes ?? [])
          .map((observacao) => observacao.levantamento_id)
          .filter((id): id is string => typeof id === "string" && id.length > 0)
      )
    );

    const levantamentosPorId = new Map();

    if (levantamentoIds.length > 0) {
      const { data: levantamentos, error: erroLevantamentos } = await supabase
        .from("agro_levantamentos_provinciais")
        .select(`
          id,
          campanha_id,
          provincia_id,
          cultura_id,
          periodo_inicio,
          periodo_fim,
          estado,
          descricao,
          campanha:agro_campanhas(id,codigo,nome),
          provincia:agro_provincias(id,nome),
          cultura:agro_culturas(id,nome)
        `)
        .in("id", levantamentoIds);

      if (erroLevantamentos) {
        console.error("Erro ao carregar levantamentos provinciais:", erroLevantamentos.message);
      } else {
        for (const levantamento of levantamentos ?? []) {
          levantamentosPorId.set(levantamento.id, levantamento);
        }
      }
    }

       // 4. Campanhas e culturas associadas directamente às observações.
    const campanhaIds = Array.from(
      new Set(
        (observacoes ?? [])
          .map((observacao) => observacao.campanha_id)
          .filter((id): id is string => typeof id === "string" && id.length > 0)
      )
    );

    const culturaIds = Array.from(
      new Set(
        (observacoes ?? [])
          .map((observacao) => observacao.cultura_id)
          .filter((id): id is string => typeof id === "string" && id.length > 0)
      )
    );

    const campanhasPorId = new Map();
    const culturasPorId = new Map();

    if (campanhaIds.length > 0) {
      const { data: campanhas, error: erroCampanhas } = await supabase
        .from("agro_campanhas")
        .select("id, codigo, nome")
        .in("id", campanhaIds);

      if (erroCampanhas) {
        console.error("Erro ao carregar campanhas:", erroCampanhas.message);
      } else {
        for (const campanha of campanhas ?? []) {
          campanhasPorId.set(campanha.id, campanha);
        }
      }
    }

    if (culturaIds.length > 0) {
      const { data: culturas, error: erroCulturas } = await supabase
        .from("agro_culturas")
        .select("id, nome")
        .in("id", culturaIds);

      if (erroCulturas) {
        console.error("Erro ao carregar culturas:", erroCulturas.message);
      } else {
        for (const cultura of culturas ?? []) {
          culturasPorId.set(cultura.id, cultura);
        }
      }
    }
    // 4. Imagens dos indicadores.
    const { data: imagens, error: erroImagens } = await supabase
      .from("agro_indicadores_imagens")
      .select("*")
      .in("indicador_id", ids)
      .order("ordem", { ascending: true })
      .order("criado_em", { ascending: false });

    if (erroImagens) {
      console.error("Erro ao carregar imagens:", erroImagens.message);
    }

    // 5. Identificar todos os conjuntos de dados associados.
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

    // 6. Carregar os metadados dos conjuntos de dados.
    const datasetsPorId = new Map();

    if (datasetIds.length > 0) {
      const { data: datasets, error: erroDatasets } = await supabase
        .from("agro_datasets")
        .select("id, titulo, descricao, categoria, subcategoria, periodo_inicio, periodo_fim, escala, natureza, estado")
        .in("id", datasetIds);

      if (erroDatasets) {
        console.error(
          "Erro ao carregar conjuntos de dados:",
          erroDatasets.message
        );
      } else {
        for (const dataset of datasets ?? []) {
          datasetsPorId.set(dataset.id, dataset);
        }
      }
    }

    // 7. Carregar as fontes bibliográficas associadas.
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
          "Erro ao carregar fontes bibliográficas:",
          erroFontes.message
        );
      } else {
        fontesAssociadas = (relacoesFontes ?? []) as typeof fontesAssociadas;
      }
    }

    // 8. Organizar os dados de cada indicador.
    const resultado = indicadores.map((indicador) => {
      const datasetIndicador = indicador.dataset_id
        ? datasetsPorId.get(indicador.dataset_id) ?? null
        : null;

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

      // 8. Associar fontes e conjuntos de dados às observações.
      const observacoesComFontes = observacoesIndicador.map(
        (observacao) => {
          const datasetObservacaoId =
            observacao.dataset_id ?? indicador.dataset_id;

          const datasetObservacao = datasetObservacaoId
            ? datasetsPorId.get(datasetObservacaoId) ?? null
            : null;

          const fontesObservacao = fontesAssociadas
            .filter(
              (relacao) => relacao.dataset_id === datasetObservacaoId
            )
            .map((relacao) => ({
              citacao: relacao.citacao,
              fonte: relacao.fonte,
            }));

                    const levantamento = observacao.levantamento_id
            ? levantamentosPorId.get(observacao.levantamento_id) ?? null
            : null;

          return {
            ...observacao,
            levantamento,
            campanha: observacao.campanha_id
              ? campanhasPorId.get(observacao.campanha_id) ?? levantamento?.campanha ?? null
              : levantamento?.campanha ?? null,
            cultura: observacao.cultura_id
              ? culturasPorId.get(observacao.cultura_id) ?? levantamento?.cultura ?? null
              : levantamento?.cultura ?? null,
            dataset: datasetObservacao,
            fontes: fontesObservacao,
          };
        }
      );

      // 9. Imagens associadas ao indicador.
      const imagensIndicador = (imagens ?? []).filter(
        (imagem) => imagem.indicador_id === indicador.id
      );

      return {
        ...indicador,
        dataset: datasetIndicador,
        fontes: fontesIndicador,
        observacoes: observacoesComFontes,
        imagens: imagensIndicador,
      };
    });

    return NextResponse.json({
      sucesso: true,
      indicadores: resultado,
      levantamentos: levantamentosPublicos ?? [],
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
