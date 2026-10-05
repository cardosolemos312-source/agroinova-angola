/* =========================================================
   AGROINOVA ANGOLA
   BASE DE DADOS PEDOLÓGICA
   Solos de Angola

   PRINCÍPIOS DA BASE
   ---------------------------------------------------------
   1. Não são inventados valores provinciais.
   2. Dados de área de estudo não são apresentados como
      médias de toda a província.
   3. Dados regionais não são redistribuídos para províncias.
   4. Cada evidência deve indicar escala, ano e fonte.
   5. A actual divisão administrativa de 21 províncias
      é mantida, sem redistribuição artificial de dados
      históricos.
   ========================================================= */


/* =========================================================
   NÍVEIS DE CONFIANÇA
========================================================= */

export type NivelConfianca =
  | "municipal"
  | "cartografico"
  | "provincial"
  | "regional";


/* =========================================================
   ESCALAS
========================================================= */

export type EscalaDado =
  | "Província"
  | "Área de estudo"
  | "Região"
  | "Nacional";


/* =========================================================
   APTIDÃO AGRÍCOLA
========================================================= */

export type ClasseAptidao =
  | "Muito alta"
  | "Alta"
  | "Moderada"
  | "Baixa"
  | "Restrita"
  | "Não determinada";


/* =========================================================
   TEXTURA
========================================================= */

export type TipoTextura =
  | "Arenosa"
  | "Franco-arenosa"
  | "Franca"
  | "Franco-argilosa"
  | "Argilosa"
  | "Muito argilosa"
  | "Não determinada";


/* =========================================================
   PROPRIEDADES QUANTITATIVAS
========================================================= */

export interface PropriedadeSolo {
  valor?: number;
  minimo?: number;
  maximo?: number;
  unidade?: string;
  classe?: string;
}


/* =========================================================
   CARACTERÍSTICAS PEDOLÓGICAS
========================================================= */

export interface CaracteristicasSolo {
  textura?: string;
  drenagem?: string;
  capacidadeRetencaoAgua?: string;
  fertilidade?: string;
  erosao?: string;

  profundidade?: PropriedadeSolo;

  materiaOrganica?: PropriedadeSolo;

  ph?: PropriedadeSolo;
}


/* =========================================================
   INDICADORES CIENTÍFICOS
========================================================= */

export interface IndicadorSolo {
  id: string;
  nome: string;
  valor: string;
  unidade: string;
  nota?: string;
  fonte?: string;
}


/* =========================================================
   CULTURAS
========================================================= */

export interface CulturaPotencial {
  nome: string;
  nivel: ClasseAptidao;
  justificativa: string;
  fonte: string;
}


/* =========================================================
   EVIDÊNCIAS
========================================================= */

export interface EvidenciaSolo {
  id: string;
  escala: string;
  ano: string | number;
  titulo: string;
  descricao: string;
  referenciaAPA: string;
  url: string;
}


/* =========================================================
   DADOS MUNICIPAIS
========================================================= */

export interface SoloMunicipio {
  id: string;
  provincia: string;
  municipio: string;
  descricao: string;
}


/* =========================================================
   PROVÍNCIA
========================================================= */

export interface SoloProvincia {
  id: string;

  provincia: string;

  descricao: string;

  tiposSolo: string[];

  caracteristicas:
    | CaracteristicasSolo
    | string[];

  culturasPotencialmenteFavoraveis?:
    CulturaPotencial[];

  indicadores?: IndicadorSolo[];

  evidencias?: EvidenciaSolo[];

  observacoes?: string;

  fontePrincipal?: string;

  fonte?: string;

  instituicao?: string;

  documento?: string;

  ano?: string | number;

  escala?: EscalaDado | string;

  nivelConfianca?:
    | NivelConfianca
    | string;

  urlFonte?: string;
}


/* =========================================================
   FONTES
========================================================= */

export interface FonteSolo {
  id: string;

  tipo: string;

  titulo: string;

  descricao: string;

  instituicao: string;

  ano: string | number;

  url: string;
}


/* =========================================================
   FONTES PRINCIPAIS
========================================================= */

const URL_ESDAC =
  "https://esdac.jrc.ec.europa.eu/resource-type/national-soil-maps-eudasm";

const URL_HUAMBO_ESDAC =
  "https://esdac.jrc.ec.europa.eu/content/carta-geral-dos-solos-de-angola-ii-distrito-de-huambo";

const URL_QGAS =
  "https://c2a.portais.gov.ao/uploads/QGAS_TEST_Versao_Final_16092025_bbaa5985bf.pdf";

const URL_HUAMBO_JARTS =
  "https://www.jarts.info/index.php/jarts/article/download/202110274964/1049";

const URL_MALANJE =
  "https://c2a.portais.gov.ao/uploads/EIA_DEZEMBRO_2024_e1ebfaa047.pdf";

const URL_LUNDAS_2025 =
  "https://www.researchgate.net/publication/403873592_Carta_Geral_dos_Solos_de_Angola_10_Provincias_de_Lunda_Norte_Lunda_Sul_e_Moxico_Escala_11_000_000";

const URL_RAPP =
  "https://rvaaatlas.sadc.int/media/352be47c-048c-40cc-8567-74d40ec147aa/5b3a7c6a-7572-4f3a-be0d-406bd7356e27/RCA%202019-2020-FINAL.pdf";

const URL_SASSCAL_LUNDA =
  "https://data.sasscal.org/metadata/docs.php?action=download&doc_id=982&id=3051&view=doc_documents";

const URL_SOLOS_ANGOLA =
  "https://repositorio.ulisboa.pt/bitstreams/ec1629b9-e878-4f94-a228-9ba57ab13401/download";

const URL_SOLOS_FERRALITICOS =
  "https://scielo.pt/scielo.php?pid=S0871-018X2015000300014&script=sci_arttext";

const URL_ESTADO_AMBIENTE =
  "https://www.wipo.int/wipolex/en/text/490233";


/* =========================================================
   TIPOS DE SOLO DISPONÍVEIS
========================================================= */

export const tiposSoloDisponiveis: string[] = [
  "Arenossolos",
  "Ferralsolos",
  "Luvissolos",
  "Fluvissolos",
  "Gleissolos",
  "Solos litólicos",
  "Solos para-ferralíticos",
  "Cambissolos",
  "Lixissolos",
  "Leptossolos",
  "Vertissolos",
  "Regossolos",
  "Solos calcários",
  "Solos pouco evoluídos",

  "Ferralsolos Háplicos",
  "Luvisolos Crómicos",
  "Arenossolos Háplicos",
  "Ferralsolos Ródicos",
  "Leptossolos Líticos",
  "Regossolos Dístricos",

  "Ferralíticos",
  "Fersialíticos",
  "Litossolos",
  "Oxipsâmicos",
  "Paraferralíticos",
  "Psamo-Ferralíticos",
  "Psamo-hidromórficos",
  "Aluvionais Fluviais",
  "Psamorregossolos",
  "Oxissialíticos",
  "Oxipsamíticos",
  "Podzolizados Tropicais",
  "Fersialíticos Tropicais",
  "Fracamente Ferrálicos",
  "Psamoferrálicos",
  "Ortoglei",
  "Orgânicos Hidromórficos",

  "Outros solos cartografados",
];


/* =========================================================
   FONTES DOCUMENTAIS
========================================================= */

export const fontesSolos: FonteSolo[] = [
  {
    id: "esdac-national",

    tipo: "Base cartográfica",

    titulo:
      "National Soil Maps — Angola / EUDASM",

    descricao:
      "Recurso cartográfico nacional de solos disponibilizado pelo European Soil Data Centre, do Joint Research Centre da Comissão Europeia.",

    instituicao:
      "European Commission — Joint Research Centre / ESDAC",

    ano: "s.d.",

    url: URL_ESDAC,
  },

  {
    id: "lunda-2025",

    tipo: "Carta Geral dos Solos",

    titulo:
      "Carta Geral dos Solos de Angola. 10. Províncias de Lunda Norte, Lunda Sul e Moxico",

    descricao:
      "Publicação de 2025, à escala 1:1 000 000, dedicada às províncias de Lunda Norte, Lunda Sul e Moxico. A obra descreve território, metodologia, classificação, características morfológicas e analíticas de 107 unidades-solo e a composição de 114 unidades cartográficas.",

    instituicao:
      "Instituto Superior de Agronomia / ISAPress",

    ano: 2025,

    url: URL_LUNDAS_2025,
  },

  {
    id: "rapp-2019-2020",

    tipo: "Estatística agrícola",

    titulo:
      "Relatório dos Resultados das Explorações Agropecuárias, Piscatórias e Aquícolas — RAPP 2019/2020",

    descricao:
      "Fonte estatística para indicadores de explorações agrícolas e culturas por província.",

    instituicao:
      "Instituto Nacional de Estatística — INE",

    ano: "2019/2020",

    url: URL_RAPP,
  },

  {
    id: "lunda-sasscal",

    tipo: "Documento técnico",

    titulo:
      "Caracterização ambiental e pedológica da Lunda Norte",

    descricao:
      "Documento técnico que identifica sete classes de solos na Lunda Norte e apresenta características qualitativas dos principais grupos.",

    instituicao:
      "Universidade Metodista de Angola / SASSCAL",

    ano: "s.d.",

    url: URL_SASSCAL_LUNDA,
  },

  {
    id: "solos-angola-ulisboa",

    tipo: "Investigação científica",

    titulo:
      "Solos de Angola — caracterização e distribuição",

    descricao:
      "Investigação baseada na cartografia e estudos pedológicos de Angola, incluindo distribuição dos principais agrupamentos de solos.",

    instituicao:
      "Universidade de Lisboa",

    ano: "2017",

    url: URL_SOLOS_ANGOLA,
  },

  {
    id: "ferraliticos-angola",

    tipo: "Artigo científico",

    titulo:
      "Complexo de troca, classificação e gestão dos Solos Ferralíticos de Angola",

    descricao:
      "Estudo científico sobre características químicas, mineralógicas e capacidade de troca dos Solos Ferralíticos de Angola.",

    instituicao:
      "Revista de Ciências Agrárias / SCIELO",

    ano: 2015,

    url: URL_SOLOS_FERRALITICOS,
  },

  {
    id: "estado-ambiente-angola",

    tipo: "Relatório ambiental",

    titulo:
      "Relatório do Estado Geral do Ambiente em Angola",

    descricao:
      "Documento nacional de referência sobre distribuição geral dos principais grupos de solos de Angola.",

    instituicao:
      "República de Angola",

    ano: 2006,

    url: URL_ESTADO_AMBIENTE,
  },

  {
    id: "esdac-huambo",

    tipo: "Carta de solos",

    titulo:
      "Carta Geral dos Solos de Angola — II Distrito de Huambo",

    descricao:
      "Carta histórica de solos referente ao antigo II Distrito de Huambo.",

    instituicao:
      "European Soil Data Centre — ESDAC",

    ano: "1961",

    url: URL_HUAMBO_ESDAC,
  },

  {
    id: "qgas-test",

    tipo: "Documento oficial",

    titulo:
      "QGAS TEST — Versão Final",

    descricao:
      "Documento ambiental utilizado como fonte complementar para caracterização pedológica em áreas de Angola.",

    instituicao:
      "Governo de Angola",

    ano: 2025,

    url: URL_QGAS,
  },

  {
    id: "huambo-jarts",

    tipo: "Artigo científico",

    titulo:
      "Estudo científico sobre erosão e propriedades dos solos no Huambo",

    descricao:
      "Estudo científico com informação quantitativa sobre erosividade, erodibilidade, perda de solo e propriedades dos solos estudados no Huambo.",

    instituicao:
      "Journal of Agriculture and Rural Studies",

    ano: 2021,

    url: URL_HUAMBO_JARTS,
  },

  {
    id: "malanje-xa-muteba",

    tipo: "Estudo de Impacte Ambiental",

    titulo:
      "Estudo de Impacte Ambiental — Malanje-Xá-Muteba",

    descricao:
      "Estudo ambiental com caracterização pedológica da área de estudo localizada em Malanje.",

    instituicao:
      "Estudo de Impacte Ambiental",

    ano: 2024,

    url: URL_MALANJE,
  },
];


/* =========================================================
   PERFIL GERAL
========================================================= */

function perfilGeral(
  id: string,
  provincia: string,
  tiposSolo: string[],
  descricao: string
): SoloProvincia {
  return {
    id,

    provincia,

    descricao,

    tiposSolo,

    caracteristicas: {
      textura:
        "Informação quantitativa provincial ainda não integrada.",

      drenagem:
        "Informação provincial específica ainda não integrada.",

      capacidadeRetencaoAgua:
        "Informação quantitativa provincial ainda não integrada.",

      fertilidade:
        "Informação quantitativa provincial ainda não integrada.",

      erosao:
        "Informação quantitativa provincial ainda não integrada.",

      profundidade: {
        classe:
          "Não determinada",
      },

      materiaOrganica: {
        classe:
          "Não determinada",
      },

      ph: {
        classe:
          "Não determinado",
      },
    },

    culturasPotencialmenteFavoraveis: [],

    indicadores: [],

    evidencias: [
      {
        id: `${id}-esdac`,

        escala: "Nacional",

        ano: "s.d.",

        titulo:
          "National Soil Maps — Angola / EUDASM",

        descricao:
          "Fonte cartográfica nacional utilizada para enquadramento dos solos de Angola.",

        referenciaAPA:
          "European Commission — Joint Research Centre. (s.d.). National Soil Maps — Angola / EUDASM. European Soil Data Centre.",

        url: URL_ESDAC,
      },
    ],

    observacoes:
      "A informação apresentada corresponde à evidência disponível na escala indicada. O AGROINOVA não redistribui informação nacional ou regional para uma província quando a fonte original não apresenta essa desagregação.",

    fontePrincipal:
      "National Soil Maps — Angola / EUDASM",

    fonte:
      "European Soil Data Centre — ESDAC",

    instituicao:
      "European Commission — Joint Research Centre / ESDAC",

    documento:
      "National Soil Maps — Angola / EUDASM",

    ano: "s.d.",

    escala: "Nacional",

    nivelConfianca: "cartografico",

    urlFonte: URL_ESDAC,
  };
}


/* =========================================================
   PROVÍNCIAS
   21 PROVÍNCIAS DA ACTUAL DIVISÃO ADMINISTRATIVA
========================================================= */

export const provinciasSolos: SoloProvincia[] = [

  /* =======================================================
     BENGO
  ======================================================= */

  {
    ...perfilGeral(
      "bengo",
      "Bengo",
      [
        "Luvissolos",
        "Cambissolos",
        "Solos calcários",
        "Solos pouco evoluídos",
      ],
      "A documentação ambiental integrada identifica Luvissolos, Cambissolos, solos calcários e solos pouco evoluídos no enquadramento pedológico do Bengo."
    ),

    fontePrincipal:
      "QGAS TEST — Versão Final",

    fonte:
      "Governo de Angola",

    instituicao:
      "Governo de Angola",

    documento:
      "QGAS TEST — Versão Final",

    ano: 2025,

    escala: "Província",

    nivelConfianca: "provincial",

    urlFonte: URL_QGAS,

    evidencias: [
      {
        id: "bengo-qgas",

        escala: "Província",

        ano: 2025,

        titulo:
          "QGAS TEST — Versão Final",

        descricao:
          "Documento ambiental que apresenta informação pedológica para o Bengo.",

        referenciaAPA:
          "Governo de Angola. (2025). QGAS TEST — Versão Final.",

        url: URL_QGAS,
      },
    ],
  },


  /* =======================================================
     BENGUELA
  ======================================================= */

  perfilGeral(
    "benguela",
    "Benguela",
    [
      "Ferralsolos",
      "Arenossolos",
      "Outros solos cartografados",
    ],
    "Benguela possui diferentes unidades de solo na cartografia nacional. A base actual não apresenta percentagens provinciais sem uma fonte específica à mesma escala."
  ),


  /* =======================================================
     BIÉ
  ======================================================= */

  {
    ...perfilGeral(
      "bie",
      "Bié",
      [
        "Ferralsolos",
        "Arenossolos",
        "Outros solos cartografados",
      ],
      "O Bié possui documentação pedológica específica e integra a região de planaltos interiores de Angola. A composição quantitativa provincial deverá ser associada às respectivas cartas e perfis."
    ),

    escala: "Região",

    nivelConfianca: "regional",
  },


  /* =======================================================
     CABINDA
  ======================================================= */

  perfilGeral(
    "cabinda",
    "Cabinda",
    [
      "Ferralsolos",
      "Arenossolos",
      "Outros solos cartografados",
    ],
    "A caracterização pedológica de Cabinda é enquadrada pelas cartas nacionais e estudos históricos de solos de Angola. Não são apresentados valores quantitativos provinciais sem fonte específica."
  ),


  /* =======================================================
     CUANDO
  ======================================================= */

  perfilGeral(
    "cuando",
    "Cuando",
    [
      "Arenossolos",
      "Ferralsolos",
      "Outros solos cartografados",
    ],
    "O Cuando pertence à actual divisão administrativa. Os dados históricos da antiga província do Cuando Cubango não são redistribuídos automaticamente entre Cuando e Cubango."
  ),


  /* =======================================================
     CUANZA NORTE
  ======================================================= */

  perfilGeral(
    "cuanza-norte",
    "Cuanza Norte",
    [
      "Ferralsolos",
      "Luvissolos",
      "Solos para-ferralíticos",
      "Outros solos cartografados",
    ],
    "O Cuanza Norte possui unidades ferralíticas, para-ferralíticas e outras unidades representadas na cartografia geral de Angola. A composição quantitativa provincial não é estimada sem fonte específica."
  ),


  /* =======================================================
     CUANZA SUL
  ======================================================= */

  perfilGeral(
    "cuanza-sul",
    "Cuanza Sul",
    [
      "Ferralsolos",
      "Luvissolos",
      "Solos para-ferralíticos",
      "Outros solos cartografados",
    ],
    "A informação disponível permite o enquadramento regional do Cuanza Sul nas cartas nacionais de solos. Não são inferidas proporções provinciais."
  ),


  /* =======================================================
     CUNENE
  ======================================================= */

  perfilGeral(
    "cunene",
    "Cunene",
    [
      "Arenossolos",
      "Luvissolos",
      "Solos pouco evoluídos",
      "Outros solos cartografados",
    ],
    "A caracterização do Cunene é mantida na escala cartográfica das fontes disponíveis. Não são apresentados valores quantitativos provinciais sem documentação específica."
  ),


  /* =======================================================
     CUBANGO
  ======================================================= */

  perfilGeral(
    "cubango",
    "Cubango",
    [
      "Arenossolos",
      "Outros solos cartografados",
    ],
    "O Cubango pertence à actual divisão administrativa. Os dados históricos da antiga província do Cuando Cubango não são redistribuídos automaticamente entre Cuando e Cubango."
  ),


  /* =======================================================
     HUAMBO
  ======================================================= */

  {
    id: "huambo",

    provincia: "Huambo",

    descricao:
      "O Huambo possui documentação pedológica histórica e estudos científicos mais detalhados entre as fontes actualmente integradas. A Carta Geral dos Solos do antigo II Distrito de Huambo constitui uma referência cartográfica histórica, complementada por estudo científico com informação sobre propriedades dos solos e erosão.",

    tiposSolo: [
      "Ferralsolos",
      "Arenossolos",
      "Outros solos cartografados",
    ],

    caracteristicas: {
      textura:
        "Nos perfis estudados foram observadas texturas de franco-arenosa a franco-argilosa nos Ferralsolos e texturas mais grosseiras nos solos arenosos.",

      drenagem:
        "Variável conforme a unidade de solo, posição no relevo e características locais.",

      capacidadeRetencaoAgua:
        "Variável entre unidades. Solos de textura mais grosseira apresentam menor retenção de água utilizável.",

      fertilidade:
        "Os Ferralsolos angolanos apresentam limitações relacionadas com baixa capacidade de troca catiónica e baixa reserva mineral.",

      erosao:
        "Risco variável entre os perfis e posições do relevo estudados.",

      materiaOrganica: {
        minimo: 14,
        maximo: 81.5,
        unidade: "g/kg",
      },
    },

    indicadores: [
      {
        id: "huambo-r",

        nome:
          "Erosividade da chuva (R)",

        valor: "7463",

        unidade:
          "MJ·mm·ha⁻¹·h⁻¹·ano⁻¹",

        nota:
          "Valor reportado no estudo científico para a área de estudo.",

        fonte:
          "Meira et al. (2021)",
      },

      {
        id: "huambo-k-min",

        nome:
          "Erodibilidade do solo (K) — mínimo",

        valor: "0.021",

        unidade:
          "t·h·MJ⁻¹·mm⁻¹",

        nota:
          "Valor mínimo reportado no estudo.",

        fonte:
          "Meira et al. (2021)",
      },

      {
        id: "huambo-k-max",

        nome:
          "Erodibilidade do solo (K) — máximo",

        valor: "0.247",

        unidade:
          "t·h·MJ⁻¹·mm⁻¹",

        nota:
          "Valor máximo reportado no estudo.",

        fonte:
          "Meira et al. (2021)",
      },

      {
        id: "huambo-nep",

        nome:
          "Perda de solo estimada (NEP)",

        valor: "605",

        unidade:
          "t·ha⁻¹·ano⁻¹",

        nota:
          "Valor reportado para a área de estudo.",

        fonte:
          "Meira et al. (2021)",
      },
    ],

    evidencias: [
      {
        id: "huambo-carta",

        escala: "Província",

        ano: "1961",

        titulo:
          "Carta Geral dos Solos de Angola — II Distrito de Huambo",

        descricao:
          "Carta histórica de solos utilizada como referência cartográfica.",

        referenciaAPA:
          "European Soil Data Centre. (1961). Carta Geral dos Solos de Angola — II Distrito de Huambo.",

        url: URL_HUAMBO_ESDAC,
      },

      {
        id: "huambo-estudo",

        escala: "Área de estudo",

        ano: 2021,

        titulo:
          "Estudo científico sobre erosão e propriedades dos solos no Huambo",

        descricao:
          "Estudo científico com perfis e indicadores quantitativos relacionados com erosividade, erodibilidade e perda de solo.",

        referenciaAPA:
          "Meira et al. (2021). Estudo científico sobre erosão e propriedades dos solos no Huambo. Journal of Agriculture and Rural Studies.",

        url: URL_HUAMBO_JARTS,
      },
    ],

    observacoes:
      "Os indicadores quantitativos apresentados para o Huambo correspondem à área de estudo do trabalho científico e não devem ser interpretados automaticamente como médias de toda a província.",

    fontePrincipal:
      "Carta Geral dos Solos de Angola — II Distrito de Huambo",

    fonte:
      "ESDAC / estudo científico",

    instituicao:
      "European Soil Data Centre / Journal of Agriculture and Rural Studies",

    documento:
      "Carta Geral dos Solos de Angola — II Distrito de Huambo; estudo científico sobre erosão no Huambo",

    ano:
      "1961 / 2021",

    escala:
      "Área de estudo",

    nivelConfianca:
      "cartografico",

    urlFonte:
      URL_HUAMBO_ESDAC,
  },


  /* =======================================================
     HUÍLA
  ======================================================= */

  {
    ...perfilGeral(
      "huila",
      "Huíla",
      [
        "Ferralsolos",
        "Arenossolos",
        "Leptossolos",
        "Cambissolos",
        "Vertissolos",
      ],
      "A documentação ambiental integrada identifica diferentes grupos de solos na Huíla, incluindo Ferralsolos, Arenossolos, Leptossolos, Cambissolos e Vertissolos."
    ),

    fontePrincipal:
      "QGAS TEST — Versão Final",

    fonte:
      "Governo de Angola",

    instituicao:
      "Governo de Angola",

    documento:
      "QGAS TEST — Versão Final",

    ano: 2025,

    escala:
      "Província",

    nivelConfianca:
      "provincial",

    urlFonte:
      URL_QGAS,
  },


  /* =======================================================
     ICOLO E BENGO
  ======================================================= */

  perfilGeral(
    "icolo-e-bengo",
    "Icolo e Bengo",
    [
      "Luvissolos",
      "Cambissolos",
      "Solos pouco evoluídos",
      "Outros solos cartografados",
    ],
    "Icolo e Bengo pertence à actual divisão administrativa. A base não transfere automaticamente informação histórica de Luanda ou Bengo para esta nova província."
  ),


  /* =======================================================
     LUANDA
  ======================================================= */

  perfilGeral(
    "luanda",
    "Luanda",
    [
      "Solos pouco evoluídos",
      "Solos calcários",
      "Arenossolos",
      "Outros solos cartografados",
    ],
    "Luanda apresenta elevada heterogeneidade ambiental e forte influência da ocupação urbana. A caracterização detalhada exige cartografia pedológica de maior resolução."
  ),


  /* =======================================================
     LUNDA NORTE
  ======================================================= */

  {
    id: "lunda-norte",

    provincia: "Lunda Norte",

    descricao:
      "A Lunda Norte possui uma das bases documentais pedológicas mais relevantes do leste de Angola. A literatura identifica sete classes de solos — Ferralíticos, Fersialíticos, Litossolos, Oxipsâmicos, Paraferralíticos, Psamo-Ferralíticos e Psamo-hidromórficos. A Carta Geral dos Solos de Angola dedicada às províncias de Lunda Norte, Lunda Sul e Moxico foi publicada em 2025 à escala 1:1 000 000 e descreve 107 unidades-solo e 114 unidades cartográficas para esse conjunto territorial.",

    tiposSolo: [
      "Ferralíticos",
      "Fersialíticos",
      "Litossolos",
      "Oxipsâmicos",
      "Paraferralíticos",
      "Psamo-Ferralíticos",
      "Psamo-hidromórficos",
      "Arenossolos",
      "Ferralsolos",
      "Aluvionais Fluviais",
      "Psamorregossolos",
      "Oxissialíticos",
      "Oxipsamíticos",
      "Podzolizados Tropicais",
      "Fersialíticos Tropicais",
      "Fracamente Ferrálicos",
      "Psamoferrálicos",
      "Ortoglei",
      "Orgânicos Hidromórficos",
    ],

    caracteristicas: {
      textura:
        "Existe forte presença de solos de textura grosseira associados aos Arenossolos e aos solos psamíticos. Os solos Ferralíticos apresentam texturas mais finas ou médias/finas, dependendo da unidade.",

      drenagem:
        "A drenagem varia conforme a unidade pedológica, posição no relevo e condições hidromórficas. Os solos hidromórficos correspondem a situações de excesso de água.",

      capacidadeRetencaoAgua:
        "Os Arenossolos apresentam baixa capacidade de retenção de água devido à textura grosseira. Nos Fersialíticos a capacidade de retenção é descrita como média, enquanto os demais grupos variam de acordo com as propriedades da unidade.",

      fertilidade:
        "Os solos Ferralíticos são caracterizados por forte lixiviação das bases, baixa reserva mineral e limitações relacionadas com a capacidade de troca. Os Fersialíticos apresentam grau de saturação em bases superior a 50% e melhores características físico-químicas relativamente aos Ferralíticos.",

      erosao:
        "A erosão constitui uma preocupação documentada no leste de Angola. Na Lunda Norte existem ainda impactos associados à mineração de diamantes, incluindo transporte de sedimentos para cursos de água.",

      materiaOrganica: {
        classe:
          "Baixa nos solos Ferralíticos segundo a caracterização qualitativa disponível.",
      },

      ph: {
        classe:
          "Tendência ácida em solos Ferralíticos; não é atribuído um único valor provincial de pH.",
      },
    },

    culturasPotencialmenteFavoraveis: [
      {
        nome: "Mandioca",

        nivel: "Alta",

        justificativa:
          "O RAPP 2019/2020 registou 72.213 explorações da Lunda Norte com produção de mandioca, correspondendo a 99,9% no quadro de raízes e tubérculos apresentado para a província.",

        fonte:
          "INE — RAPP 2019/2020",
      },

      {
        nome: "Batata-doce",

        nivel: "Moderada",

        justificativa:
          "O RAPP 2019/2020 registou 29.370 explorações com batata-doce na Lunda Norte.",

        fonte:
          "INE — RAPP 2019/2020",
      },

      {
        nome: "Milho",

        nivel: "Moderada",

        justificativa:
          "O RAPP 2019/2020 registou 253 explorações empresariais com milho na Lunda Norte.",

        fonte:
          "INE — RAPP 2019/2020",
      },

      {
        nome: "Arroz",

        nivel: "Moderada",

        justificativa:
          "O RAPP 2019/2020 registou 18 explorações empresariais com arroz na Lunda Norte.",

        fonte:
          "INE — RAPP 2019/2020",
      },

      {
        nome: "Amendoim",

        nivel: "Não determinada",

        justificativa:
          "Cultura documentada nas fontes agrícolas da região, mas a base não possui actualmente avaliação quantitativa provincial de aptidão específica para atribuir uma classe agronómica.",

        fonte:
          "Documentação agrícola regional / RAPP",
      },
    ],

    indicadores: [
      {
        id: "lunda-norte-mandioca",

        nome:
          "Explorações com mandioca",

        valor:
          "72 213",

        unidade:
          "explorações",

        nota:
          "Valor do RAPP 2019/2020 para a Lunda Norte.",

        fonte:
          "INE — RAPP 2019/2020",
      },

      {
        id: "lunda-norte-batata-doce",

        nome:
          "Explorações com batata-doce",

        valor:
          "29 370",

        unidade:
          "explorações",

        nota:
          "Valor do RAPP 2019/2020.",

        fonte:
          "INE — RAPP 2019/2020",
      },

      {
        id: "lunda-norte-batata-rena",

        nome:
          "Explorações com batata-rena",

        valor:
          "180",

        unidade:
          "explorações",

        nota:
          "Valor do RAPP 2019/2020.",

        fonte:
          "INE — RAPP 2019/2020",
      },

      {
        id: "lunda-norte-inhame",

        nome:
          "Explorações com inhame",

        valor:
          "1 581",

        unidade:
          "explorações",

        nota:
          "Valor do RAPP 2019/2020.",

        fonte:
          "INE — RAPP 2019/2020",
      },

      {
        id: "lunda-norte-mandioca-empresarial",

        nome:
          "Explorações empresariais com mandioca",

        valor:
          "404",

        unidade:
          "explorações",

        fonte:
          "INE — RAPP 2019/2020",
      },

      {
        id: "lunda-norte-batata-doce-empresarial",

        nome:
          "Explorações empresariais com batata-doce",

        valor:
          "201",

        unidade:
          "explorações",

        fonte:
          "INE — RAPP 2019/2020",
      },

      {
        id: "lunda-norte-milho-empresarial",

        nome:
          "Explorações empresariais com milho",

        valor:
          "253",

        unidade:
          "explorações",

        fonte:
          "INE — RAPP 2019/2020",
      },

      {
        id: "lunda-norte-arroz-empresarial",

        nome:
          "Explorações empresariais com arroz",

        valor:
          "18",

        unidade:
          "explorações",

        fonte:
          "INE — RAPP 2019/2020",
      },
    ],

    evidencias: [
      {
        id: "lunda-norte-carta-2025",

        escala:
          "Região",

        ano:
          2025,

        titulo:
          "Carta Geral dos Solos de Angola. 10. Províncias de Lunda Norte, Lunda Sul e Moxico",

        descricao:
          "Carta pedológica à escala 1:1 000 000. A publicação descreve 107 unidades-solo e 114 unidades cartográficas para Lunda Norte, Lunda Sul e Moxico.",

        referenciaAPA:
          "Ricardo, R. P., Madeira, M., Arsénio, P. M. R., et al. (2025). Carta Geral dos Solos de Angola. 10. Províncias de Lunda Norte, Lunda Sul e Moxico. ISAPress.",

        url:
          URL_LUNDAS_2025,
      },

      {
        id: "lunda-norte-classes",

        escala:
          "Província",

        ano:
          "s.d.",

        titulo:
          "Caracterização pedológica da Lunda Norte",

        descricao:
          "Documento técnico que identifica sete classes de solos na Lunda Norte: Ferralíticos, Fersialíticos, Litossolos, Oxipsâmicos, Paraferralíticos, Psamo-Ferralíticos e Psamo-hidromórficos.",

        referenciaAPA:
          "Universidade Metodista de Angola. (s.d.). Caracterização ambiental e pedológica da Lunda Norte.",

        url:
          URL_SASSCAL_LUNDA,
      },

      {
        id: "lunda-norte-arenossolos",

        escala:
          "Regional",

        ano:
          2017,

        titulo:
          "Solos de Angola — distribuição dos principais agrupamentos",

        descricao:
          "Estudo que identifica a forte expressão dos Arenossolos na Lunda Norte e descreve a sua textura grosseira, baixa capacidade de troca catiónica, baixa retenção de água e reduzidos teores de nutrientes.",

        referenciaAPA:
          "Neto, J. (2017). Estudos dos solos de Angola. Universidade de Lisboa.",

        url:
          URL_SOLOS_ANGOLA,
      },

      {
        id: "lunda-norte-ambiente",

        escala:
          "Nacional / regional",

        ano:
          2006,

        titulo:
          "Relatório do Estado Geral do Ambiente em Angola",

        descricao:
          "Documento nacional que descreve a distribuição dos solos psamíticos, ferralíticos e para-ferralíticos nas Lundas.",

        referenciaAPA:
          "República de Angola. (2006). Relatório do Estado Geral do Ambiente em Angola.",

        url:
          URL_ESTADO_AMBIENTE,
      },

      {
        id: "lunda-norte-rapp",

        escala:
          "Província",

        ano:
          "2019/2020",

        titulo:
          "RAPP 2019/2020 — culturas da Lunda Norte",

        descricao:
          "Fonte estatística para explorações agrícolas por cultura na Lunda Norte.",

        referenciaAPA:
          "Instituto Nacional de Estatística. (2022). Relatório dos Resultados das Explorações Agropecuárias, Piscatórias e Aquícolas — RAPP 2019/2020.",

        url:
          URL_RAPP,
      },
    ],

    observacoes:
      "A Lunda Norte dispõe de documentação pedológica específica e regional. A Carta Geral dos Solos de Angola de 2025 cobre conjuntamente Lunda Norte, Lunda Sul e Moxico à escala 1:1 000 000; por isso, a sua informação não deve ser transformada automaticamente em percentagens exclusivas da Lunda Norte. Os indicadores agrícolas do RAPP são mantidos com o ano original. Valores laboratoriais de pH, matéria orgânica, profundidade, textura quantitativa e capacidade de troca devem ser associados ao perfil ou unidade pedológica correspondente.",

    fontePrincipal:
      "Carta Geral dos Solos de Angola. 10. Províncias de Lunda Norte, Lunda Sul e Moxico",

    fonte:
      "Instituto Superior de Agronomia / ISAPress",

    instituicao:
      "Instituto Superior de Agronomia / Universidade de Lisboa",

    documento:
      "Carta Geral dos Solos de Angola — Lunda Norte, Lunda Sul e Moxico",

    ano:
      2025,

    escala:
      "Região",

    nivelConfianca:
      "cartografico",

    urlFonte:
      URL_LUNDAS_2025,
  },


  /* =======================================================
     LUNDA SUL
  ======================================================= */

  {
    ...perfilGeral(
      "lunda-sul",
      "Lunda Sul",
      [
        "Arenossolos",
        "Ferralsolos",
        "Ferralíticos",
        "Fersialíticos",
        "Psamo-Ferralíticos",
        "Outros solos cartografados",
      ],
      "A Lunda Sul está abrangida pela Carta Geral dos Solos de Angola de 2025 dedicada às províncias de Lunda Norte, Lunda Sul e Moxico. A literatura sobre Angola identifica forte expressão dos Arenossolos e presença de Ferralsolos nas Lundas."
    ),

    fontePrincipal:
      "Carta Geral dos Solos de Angola. 10. Províncias de Lunda Norte, Lunda Sul e Moxico",

    fonte:
      "Instituto Superior de Agronomia / ISAPress",

    instituicao:
      "Instituto Superior de Agronomia / Universidade de Lisboa",

    documento:
      "Carta Geral dos Solos de Angola — Lunda Norte, Lunda Sul e Moxico",

    ano:
      2025,

    escala:
      "Região",

    nivelConfianca:
      "cartografico",

    urlFonte:
      URL_LUNDAS_2025,

    evidencias: [
      {
        id: "lunda-sul-2025",

        escala:
          "Região",

        ano:
          2025,

        titulo:
          "Carta Geral dos Solos de Angola — Lunda Norte, Lunda Sul e Moxico",

        descricao:
          "Carta pedológica à escala 1:1 000 000 que cobre as três províncias.",

        referenciaAPA:
          "Ricardo, R. P., Madeira, M., Arsénio, P. M. R., et al. (2025). Carta Geral dos Solos de Angola. 10. Províncias de Lunda Norte, Lunda Sul e Moxico. ISAPress.",

        url:
          URL_LUNDAS_2025,
      },
    ],

    observacoes:
      "A informação da carta de 2025 é regional para as três províncias e não deve ser convertida em percentagens específicas da Lunda Sul sem consulta da composição cartográfica detalhada.",
  },


  /* =======================================================
     MALANJE
  ======================================================= */

  {
    id: "malanje",

    provincia: "Malanje",

    descricao:
      "Na área de estudo do Estudo de Impacte Ambiental Malanje-Xá-Muteba foram identificadas seis classes de solo. Os valores abaixo pertencem exclusivamente à área de estudo e não representam a composição de toda a província de Malanje.",

    tiposSolo: [
      "Ferralsolos Háplicos",
      "Luvisolos Crómicos",
      "Arenossolos Háplicos",
      "Ferralsolos Ródicos",
      "Leptossolos Líticos",
      "Regossolos Dístricos",
    ],

    caracteristicas: {
      textura:
        "Não determinada de forma agregada para toda a província.",

      drenagem:
        "Não determinada de forma agregada para toda a província.",

      capacidadeRetencaoAgua:
        "Não determinada para a totalidade da província.",

      fertilidade:
        "Não determinada para a totalidade da província.",

      erosao:
        "Não determinada para a totalidade da província.",
    },

    indicadores: [
      {
        id: "malanje-ferralsolos-haplicos",

        nome:
          "Ferralsolos Háplicos",

        valor: "37",

        unidade: "%",

        nota:
          "Percentagem registada na área de estudo do EIA Malanje-Xá-Muteba.",

        fonte:
          "EIA Malanje-Xá-Muteba (2024)",
      },

      {
        id: "malanje-luvisolos-cromicos",

        nome:
          "Luvisolos Crómicos",

        valor: "35",

        unidade: "%",

        nota:
          "Percentagem registada na área de estudo.",

        fonte:
          "EIA Malanje-Xá-Muteba (2024)",
      },

      {
        id: "malanje-arenossolos-haplicos",

        nome:
          "Arenossolos Háplicos",

        valor: "10",

        unidade: "%",

        nota:
          "Percentagem registada na área de estudo.",

        fonte:
          "EIA Malanje-Xá-Muteba (2024)",
      },

      {
        id: "malanje-ferralsolos-rodicos",

        nome:
          "Ferralsolos Ródicos",

        valor: "9",

        unidade: "%",

        nota:
          "Percentagem registada na área de estudo.",

        fonte:
          "EIA Malanje-Xá-Muteba (2024)",
      },

      {
        id: "malanje-leptossolos-liticos",

        nome:
          "Leptossolos Líticos",

        valor: "5",

        unidade: "%",

        nota:
          "Percentagem registada na área de estudo.",

        fonte:
          "EIA Malanje-Xá-Muteba (2024)",
      },

      {
        id: "malanje-regossolos-districos",

        nome:
          "Regossolos Dístricos",

        valor: "4",

        unidade: "%",

        nota:
          "Percentagem registada na área de estudo.",

        fonte:
          "EIA Malanje-Xá-Muteba (2024)",
      },
    ],

    evidencias: [
      {
        id: "malanje-eia",

        escala:
          "Área de estudo",

        ano:
          2024,

        titulo:
          "Estudo de Impacte Ambiental — Malanje-Xá-Muteba",

        descricao:
          "Estudo que apresenta a distribuição de classes de solo dentro da área de estudo.",

        referenciaAPA:
          "Estudo de Impacte Ambiental. (2024). EIA Malanje-Xá-Muteba.",

        url:
          URL_MALANJE,
      },
    ],

    observacoes:
      "Os valores de 37%, 35%, 10%, 9%, 5% e 4% referem-se exclusivamente à área de estudo do EIA Malanje-Xá-Muteba. Não representam a composição de toda a província de Malanje.",

    fontePrincipal:
      "Estudo de Impacte Ambiental — Malanje-Xá-Muteba",

    fonte:
      "Estudo de Impacte Ambiental",

    instituicao:
      "Estudo de Impacte Ambiental",

    documento:
      "EIA Malanje-Xá-Muteba",

    ano:
      2024,

    escala:
      "Área de estudo",

    nivelConfianca:
      "provincial",

    urlFonte:
      URL_MALANJE,
  },


  /* =======================================================
     MOXICO
  ======================================================= */

  {
    ...perfilGeral(
      "moxico",
      "Moxico",
      [
        "Arenossolos",
        "Ferralsolos",
        "Ferralíticos",
        "Psamo-Ferralíticos",
        "Outros solos cartografados",
      ],
      "O Moxico está abrangido pela Carta Geral dos Solos de Angola de 2025 dedicada a Lunda Norte, Lunda Sul e Moxico. A literatura nacional identifica forte expressão dos Arenossolos no leste de Angola."
    ),

    fontePrincipal:
      "Carta Geral dos Solos de Angola. 10. Províncias de Lunda Norte, Lunda Sul e Moxico",

    fonte:
      "Instituto Superior de Agronomia / ISAPress",

    instituicao:
      "Instituto Superior de Agronomia / Universidade de Lisboa",

    documento:
      "Carta Geral dos Solos de Angola — Lunda Norte, Lunda Sul e Moxico",

    ano:
      2025,

    escala:
      "Região",

    nivelConfianca:
      "cartografico",

    urlFonte:
      URL_LUNDAS_2025,

    observacoes:
      "Os dados históricos da antiga configuração territorial não são transferidos automaticamente para Moxico Leste.",
  },


  /* =======================================================
     MOXICO LESTE
  ======================================================= */

  perfilGeral(
    "moxico-leste",
    "Moxico Leste",
    [
      "Arenossolos",
      "Outros solos cartografados",
    ],
    "Moxico Leste é uma província da actual divisão administrativa. A base não redistribui dados históricos do antigo Moxico para esta nova unidade sem documentação específica."
  ),


  /* =======================================================
     NAMIBE
  ======================================================= */

  perfilGeral(
    "namibe",
    "Namibe",
    [
      "Arenossolos",
      "Solos pouco evoluídos",
      "Solos calcários",
      "Outros solos cartografados",
    ],
    "A caracterização do Namibe é apresentada de acordo com a cartografia geral disponível. A forte variação ambiental exige fontes de maior resolução para caracterização detalhada."
  ),


  /* =======================================================
     UÍGE
  ======================================================= */

  {
    ...perfilGeral(
      "uige",
      "Uíge",
      [
        "Ferralsolos",
        "Solos para-ferralíticos",
        "Fersialíticos",
        "Outros solos cartografados",
      ],
      "A documentação ambiental integrada identifica Ferralsolos e solos para-ferralíticos no Uíge, enquanto a literatura pedológica nacional também enquadra a província entre as áreas com presença de solos Ferralíticos e Fersialíticos."
    ),

    fontePrincipal:
      "QGAS TEST — Versão Final",

    fonte:
      "Governo de Angola",

    instituicao:
      "Governo de Angola",

    documento:
      "QGAS TEST — Versão Final",

    ano:
      2025,

    escala:
      "Província",

    nivelConfianca:
      "provincial",

    urlFonte:
      URL_QGAS,
  },


  /* =======================================================
     ZAIRE
  ======================================================= */

  perfilGeral(
    "zaire",
    "Zaire",
    [
      "Ferralsolos",
      "Luvissolos",
      "Fersialíticos",
      "Solos para-ferralíticos",
      "Solos pouco evoluídos",
      "Outros solos cartografados",
    ],
    "A informação do Zaire é enquadrada pelas cartas nacionais e regionais de solos. A literatura de solos de Angola identifica presença de Ferralsolos, Fersialíticos e Para-ferralíticos na região."
  ),
];


/* =========================================================
   DADOS MUNICIPAIS
========================================================= */

/*
 * Esta tabela permanece vazia enquanto não houver uma
 * fonte municipal suficientemente verificável.
 *
 * Quando forem integrados estudos municipais, cada registo
 * deverá indicar claramente a província, município, fonte
 * e escala da informação.
 */

export const dadosSolosMunicipios:
  SoloMunicipio[] = [];


/* =========================================================
   FUNÇÕES AUXILIARES
========================================================= */

export function normalizarSolo(
  valor: string
) {
  return valor
    .normalize("NFD")
    .replace(
      /[\u0300-\u036f]/g,
      ""
    )
    .toLowerCase()
    .trim();
}


export function obterProvinciaSolo(
  provincia: string
) {
  const nome =
    normalizarSolo(provincia);

  return provinciasSolos.find(
    (item) =>
      normalizarSolo(
        item.provincia
      ) === nome
  );
}


export function obterMunicipiosPorProvincia(
  provincia: string
) {
  const nome =
    normalizarSolo(provincia);

  return dadosSolosMunicipios.filter(
    (item) =>
      normalizarSolo(
        item.provincia
      ) === nome
  );
}


export function pesquisarSolos(
  pesquisa: string
) {
  const termo =
    normalizarSolo(pesquisa);

  if (!termo) {
    return provinciasSolos;
  }

  return provinciasSolos.filter(
    (provincia) =>
      normalizarSolo(
        provincia.provincia
      ).includes(termo) ||
      provincia.tiposSolo.some(
        (tipo) =>
          normalizarSolo(
            tipo
          ).includes(termo)
      ) ||
      provincia.descricao
        .toLowerCase()
        .includes(termo)
  );
}


/* =========================================================
   EXPORT DEFAULT
========================================================= */

const dadosSolos = {
  provincias: provinciasSolos,

  municipios:
    dadosSolosMunicipios,

  tipos:
    tiposSoloDisponiveis,

  fontes:
    fontesSolos,
};

export default dadosSolos;