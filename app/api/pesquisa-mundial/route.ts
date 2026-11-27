import { NextResponse } from "next/server";
import { obterSupabaseAdmin } from "@/lib/supabase/admin";

export const dynamic = "force-dynamic";

const TABELAS_CIENTIFICAS = [
  {
    tabela: "pesquisa_culturas_ecologia",
    campos: [
      "descricao_ecologica", "tipo_solo", "textura_solo", "drenagem",
      "necessidades_hidricas", "tolerancia_seca", "tolerancia_geada",
      "exigencias_luminosidade",
    ],
    titulo: "Informação ecológica",
    categoria: "Ecologia",
  },
  {
    tabela: "pesquisa_culturas_maneio",
    campos: [
      "preparacao_terreno", "seleccao_sementes", "tratamento_sementes",
      "propagacao", "metodo_plantio", "epoca_plantio",
      "fertilizacao_organica", "fertilizacao_mineral",
      "irrigacao", "controlo_infestantes", "rotacao_culturas",
      "recomendacoes_tecnicas", "calendario_agricola",
    ],
    titulo: "Informação técnica de maneio",
    categoria: "Maneio agrícola",
  },
  {
    tabela: "pesquisa_culturas_fitossanidade",
    campos: [
      "tipo_problema", "nome_problema", "nome_cientifico",
      "agente_causal", "descricao", "sintomas",
      "condicoes_favoraveis", "distribuicao_geografica",
      "prevencao", "controlo_cultural", "controlo_biologico",
      "controlo_genetico", "controlo_quimico", "maneio_integrado",
    ],
    titulo: "Informação fitossanitária",
    categoria: "Pragas e doenças",
  },
  {
    tabela: "pesquisa_culturas_colheita",
    campos: [
      "indicadores_maturacao", "tempo_ate_maturacao", "epoca_colheita",
      "metodos_colheita", "secagem", "conservacao",
      "armazenamento", "embalagem", "transporte",
      "perdas_pos_colheita", "transformacao",
    ],
    titulo: "Informação de colheita e pós-colheita",
    categoria: "Colheita",
  },
  {
    tabela: "pesquisa_culturas_composicao",
    campos: [
      "parte_analisada", "estado_produto", "metodo_analise",
      "compostos_bioactivos", "factores_antinutricionais",
      "propriedades_funcionais", "utilizacoes_alimentares",
      "utilizacoes_industriais",
    ],
    titulo: "Composição e utilização",
    categoria: "Composição nutricional",
  },
];

export async function GET(request: Request) {
  const termo = new URL(request.url).searchParams.get("termo")?.trim() || "";

  if (termo.length < 2) {
    return NextResponse.json({ resultados: [] });
  }

  if (termo.length > 100) {
    return NextResponse.json(
      { erro: "Termo demasiado longo." },
      { status: 400 }
    );
  }

  try {
    const supabase = obterSupabaseAdmin();
    const termoSeguro = termo.replace(/[,%()]/g, " ").trim();
    const padrao = `%${termoSeguro}%`;

    const { data: catalogo, error: erroCatalogo } = await supabase.rpc(
      "pesquisar_culturas_mundial",
      {
        p_termo: termo,
        p_limite: 10,
      }
    );

    if (erroCatalogo) {
      console.error("Erro na pesquisa mundial:", erroCatalogo);
    }

    const resultadosCatalogo = (catalogo || []).map((item: {
      cultura_id?: string;
      nome_cientifico?: string;
      nome_encontrado?: string;
      correspondencia?: string;
      categoria?: string;
      familia_botanica?: string;
      descricao?: string;
    }) => ({
      titulo: item.nome_encontrado || item.nome_cientifico || "",
      descricao: [
        item.nome_cientifico ? `Nome científico: ${item.nome_cientifico}` : "",
        item.familia_botanica ? `Família: ${item.familia_botanica}` : "",
        item.correspondencia ? `Correspondência: ${item.correspondencia}` : "",
        item.descricao || "",
      ].filter(Boolean).join(" · "),
      href: item.cultura_id
        ? `/agricultura/culturas/${item.cultura_id}`
        : "/agricultura",
      categoria: item.categoria || "Cultura mundial",
    })).filter((item: { titulo: string }) => item.titulo);

    // Pesquisa dos capítulos científicos.
    const { data: capitulos, error: erroCapitulos } = await supabase
      .from("pesquisa_culturas_conteudos")
      .select("id,cultura_id,categoria,titulo,conteudo,estado")
      .or(
        `titulo.ilike.${padrao},conteudo.ilike.${padrao},categoria.ilike.${padrao}`
      )
      .neq("estado", "rejeitado")
      .limit(30);

    if (erroCapitulos) {
      console.error("Erro nos conteúdos científicos:", erroCapitulos);
    }

    // Pesquisa nas tabelas técnicas especializadas.
    const pesquisasTecnicas = await Promise.all(
      TABELAS_CIENTIFICAS.map(async (config) => {
        const condicoes = config.campos
          .map((campo) => `${campo}.ilike.${padrao}`)
          .join(",");

        const { data, error } = await supabase
          .from(config.tabela)
          .select("*")
          .or(condicoes)
          .neq("estado", "rejeitado")
          .limit(15);

        if (error) {
          console.error(`Erro na pesquisa ${config.tabela}:`, error);
          return [];
        }

        return (data || []).map((registo: Record<string, unknown>) => {
          const camposEncontrados = config.campos
            .map((campo) => registo[campo])
            .filter((valor) => typeof valor === "string" && valor.trim());

          return {
            id: registo.id,
            cultura_id: registo.cultura_id,
            titulo: config.titulo,
            descricao: camposEncontrados.slice(0, 3).join(" · "),
            categoria: config.categoria,
            estado: registo.estado,
          };
        });
      })
    );

    const resultadosTecnicos = pesquisasTecnicas.flat();

    // Identifica a cultura associada a cada conteúdo científico.
    const idsCulturas = [
      ...(capitulos || []).map((item: { cultura_id: string }) => item.cultura_id),
      ...resultadosTecnicos.map((item) => item.cultura_id as string),
    ].filter(Boolean);

    const idsUnicos = [...new Set(idsCulturas)];

    const { data: culturas } = idsUnicos.length
      ? await supabase
          .from("pesquisa_culturas")
          .select("id,nome_cientifico,categoria")
          .in("id", idsUnicos)
      : { data: [] };

    const mapaCulturas = new Map(
      (culturas || []).map((cultura: {
        id: string;
        nome_cientifico: string;
        categoria: string;
      }) => [cultura.id, cultura])
    );

    const resultadosCapitulos = (capitulos || []).map((item: {
      id: string;
      cultura_id: string;
      categoria: string;
      titulo: string;
      conteudo: string;
      estado: string;
    }) => {
      const cultura = mapaCulturas.get(item.cultura_id);

      return {
        titulo: item.titulo,
        descricao: [
          cultura?.nome_cientifico || "",
          item.categoria || "Conteúdo científico",
          item.estado === "em_revisao"
            ? "Conteúdo científico em revisão"
            : item.estado,
        ].filter(Boolean).join(" · "),
        href: `/agricultura/culturas/${item.cultura_id}`,
        categoria: "Monografia científica",
      };
    });

    const resultadosTecnicosFormatados = resultadosTecnicos.map((item) => {
      const cultura = mapaCulturas.get(item.cultura_id as string);

      return {
        titulo: item.titulo,
        descricao: [
          cultura?.nome_cientifico || "",
          item.descricao,
          item.estado === "em_revisao"
            ? "Conteúdo científico em revisão"
            : item.estado,
        ].filter(Boolean).join(" · "),
        href: `/agricultura/culturas/${item.cultura_id}`,
        categoria: item.categoria,
      };
    });

    const resultados = [
      ...resultadosCatalogo,
      ...resultadosCapitulos,
      ...resultadosTecnicosFormatados,
    ];

    return NextResponse.json({
      resultados: resultados.filter(
        (item) => item.titulo && item.descricao
      ),
    });
  } catch (erro) {
    console.error("Pesquisa mundial:", erro);
    return NextResponse.json(
      { erro: "Serviço de pesquisa indisponível." },
      { status: 500 }
    );
  }
}