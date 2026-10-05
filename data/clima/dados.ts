/* =========================================================
   CLIMA — AGROINOVA ANGOLA
   Base climática documentada e preparada para atualização

   PRINCÍPIOS:
   - Não inventar valores provinciais.
   - Cada dado deve indicar fonte, período, unidade e escala.
   - Dados históricos não devem ser confundidos com projeções.
   - Valores provenientes de modelos/reanálises devem ser
     identificados como tais.
   - A estrutura permite futura atualização automática via API.
   ========================================================= */

export type EscalaClimatica =
  | "Nacional"
  | "Subnacional"
  | "Província"
  | "Região"
  | "Grade espacial"
  | "Ponto/Estação";

export type NivelConfiancaClimatica =
  | "alto"
  | "moderado"
  | "limitado"
  | "não determinado";

export type TipoDadoClimatico =
  | "observado"
  | "reanálise"
  | "climatologia"
  | "tendência"
  | "projeção"
  | "classificação";

export type PeriodicidadeClimatica =
  | "mensal"
  | "sazonal"
  | "anual"
  | "climatológica";

export interface IndicadorClimatico {
  id: string;
  nome: string;

  valor?: number;
  valorTexto?: string;

  unidade: string;

  periodo: string;
  periodicidade?: PeriodicidadeClimatica;

  escala: EscalaClimatica;

  tipoDado: TipoDadoClimatico;

  fonte: string;
  instituicao?: string;

  conjuntoDados?: string;
  resolucao?: string;

  nota?: string;

  url?: string;
}

export interface CaracterizacaoClimatica {
  descricao: string;

  temperatura?: string;
  precipitacao?: string;

  sazonalidade?: string;
  estacaoChuvosa?: string;
  estacaoSeca?: string;

  humidade?: string;
  vento?: string;
  evapotranspiracao?: string;

  implicacoesAgricolas?: string;

  observacoes?: string;
}

export interface FonteClimatica {
  id: string;

  nome: string;
  tipo: string;

  instituicao: string;

  descricao: string;

  periodo?: string;

  resolucao?: string;

  escala?: string;

  atualizacao?: string;

  url: string;
}

export interface ProvinciaClima {
  id: string;
  provincia: string;

  descricao: string;

  caracterizacao: CaracterizacaoClimatica;

  indicadores?: IndicadorClimatico[];

  fontes?: string[];

  observacoes?: string;

  escalaPrincipal?: EscalaClimatica;

  nivelConfianca?: NivelConfiancaClimatica;

  ultimaAtualizacao?: string;
}

/* =========================================================
   FONTES PRINCIPAIS
   ========================================================= */

export const URL_CCKP =
  "https://climateknowledgeportal.worldbank.org/";

export const URL_CCKP_ANGOLA =
  "https://climateknowledgeportal.worldbank.org/country/angola";

export const URL_CCKP_DOWNLOAD =
  "https://climateknowledgeportal.worldbank.org/download-data";

export const URL_CCKP_METADATA =
  "https://climateknowledgeportal.worldbank.org/metadata";

export const URL_CCKP_API =
  "https://cckpapi.worldbank.org/cckp/v1/";

export const URL_CRU =
  "https://worldbank.github.io/climateknowledgeportal/docs/collections/cru-x0.5.html";

export const URL_ERA5 =
  "https://worldbank.github.io/climateknowledgeportal/docs/collections/era5-x0.25.html";

export const URL_CMIP6 =
  "https://datacatalog.worldbank.org/infrastructure-data/search/dataset/0042297/climate-change-knowledge-portal-projected-climate-data-cmip6-0-25-degree";

export const URL_FAO_AQUASTAT =
  "https://www.fao.org/aquastat/en/";

export const URL_FAO_CLIMA =
  "https://www.fao.org/aquastat/en/geospatial-information/climate-information/";

/* =========================================================
   FONTES DOCUMENTADAS
   ========================================================= */

export const fontesClima: FonteClimatica[] = [
  {
    id: "cckp-angola",
    nome: "Climate Change Knowledge Portal — Angola",
    tipo: "Portal climático",
    instituicao: "World Bank",
    descricao:
      "Portal de informação climática para Angola, incluindo climatologia histórica, ERA5, tendências, projeções climáticas e recursos específicos do país.",
    periodo: "Histórico e projeções",
    escala: "Nacional e subnacional",
    atualizacao: "Base atualizada pelo provedor",
    url: URL_CCKP_ANGOLA,
  },

  {
    id: "cru-ts",
    nome: "CRU TS",
    tipo: "Dados climáticos históricos",
    instituicao:
      "Climatic Research Unit — University of East Anglia / World Bank CCKP",
    descricao:
      "Série temporal climática em grade espacial com temperatura e precipitação derivadas de redes de estações meteorológicas e interpolação de anomalias mensais.",
    periodo:
      "1901–2023 no catálogo CCKP; climatologias incluindo 1991–2020",
    resolucao: "0,5° × 0,5°",
    escala: "Grade espacial e subnacional",
    atualizacao: "Atualização regular",
    url: URL_CRU,
  },

  {
    id: "era5",
    nome: "ERA5",
    tipo: "Reanálise climática",
    instituicao:
      "ECMWF / Copernicus Climate Change Service / World Bank CCKP",
    descricao:
      "Reanálise climática global com variáveis de temperatura, precipitação e indicadores de extremos, disponibilizada pelo CCKP em resolução de 0,25°.",
    periodo:
      "1950–2022 no conjunto documentado pelo CCKP",
    resolucao: "0,25° × 0,25°",
    escala: "Grade espacial e subnacional",
    atualizacao: "Atualização operacional do produto original",
    url: URL_ERA5,
  },

  {
    id: "cmip6",
    nome: "CMIP6",
    tipo: "Projeções climáticas",
    instituicao:
      "World Bank Climate Change Knowledge Portal",
    descricao:
      "Conjunto de projeções climáticas baseadas em modelos CMIP6, com diferentes cenários de emissões e períodos futuros.",
    periodo:
      "1950–2100; períodos de projeção em janelas de 20 anos",
    resolucao: "0,25° × 0,25°",
    escala: "Grade espacial e subnacional",
    atualizacao: "Conforme atualização da coleção",
    url: URL_CMIP6,
  },

  {
    id: "fao-aquastat-clima",
    nome: "AQUASTAT — Climate Information Tool",
    tipo: "Informação climática espacial",
    instituicao: "FAO",
    descricao:
      "Ferramenta espacial da FAO com médias climáticas de longo prazo para precipitação, temperatura, humidade relativa, insolação, vento e evapotranspiração de referência.",
    periodo: "1961–1990",
    resolucao: "10 minutos de arco",
    escala: "Grade espacial / ponto",
    atualizacao:
      "Produto climático histórico de referência",
    url: URL_FAO_CLIMA,
  },

  {
    id: "fao-aquastat",
    nome: "FAO AQUASTAT",
    tipo: "Base de dados de água e agricultura",
    instituicao: "FAO",
    descricao:
      "Sistema global de informação da FAO sobre recursos hídricos e gestão da água na agricultura, com dados por país e por ano.",
    periodo: "Desde 1960",
    escala: "Nacional",
    atualizacao: "Atualização periódica",
    url: URL_FAO_AQUASTAT,
  },
];

/* =========================================================
   VARIÁVEIS CLIMÁTICAS DISPONÍVEIS
   ========================================================= */

export const variaveisClimaticas = [
  {
    id: "pr",
    nome: "Precipitação",
    unidade: "mm",
    descricao:
      "Quantidade de precipitação acumulada no período.",
  },

  {
    id: "tas",
    nome: "Temperatura média",
    unidade: "°C",
    descricao:
      "Temperatura média do ar à superfície.",
  },

  {
    id: "tasmax",
    nome: "Temperatura máxima",
    unidade: "°C",
    descricao:
      "Temperatura máxima média do ar à superfície.",
  },

  {
    id: "tasmin",
    nome: "Temperatura mínima",
    unidade: "°C",
    descricao:
      "Temperatura mínima média do ar à superfície.",
  },

  {
    id: "rx1day",
    nome: "Precipitação máxima em 1 dia",
    unidade: "mm",
    descricao:
      "Indicador de precipitação máxima diária.",
  },

  {
    id: "rx5day",
    nome: "Precipitação máxima em 5 dias",
    unidade: "mm",
    descricao:
      "Precipitação máxima acumulada em cinco dias.",
  },

  {
    id: "txx",
    nome: "Máxima da temperatura máxima",
    unidade: "°C",
    descricao:
      "Valor máximo da temperatura máxima diária.",
  },

  {
    id: "tnn",
    nome: "Mínima da temperatura mínima",
    unidade: "°C",
    descricao:
      "Valor mínimo da temperatura mínima diária.",
  },

  {
    id: "tr",
    nome: "Noites tropicais",
    unidade: "dias",
    descricao:
      "Número de dias/noites com temperatura mínima superior a 20 °C, conforme definição do conjunto ERA5.",
  },

  {
    id: "fd",
    nome: "Dias de geada",
    unidade: "dias",
    descricao:
      "Número de dias com temperatura mínima inferior a 0 °C.",
  },
];

/* =========================================================
   PERÍODOS DE REFERÊNCIA
   ========================================================= */

export const periodosClimaticos = [
  {
    id: "1901-2023",
    nome: "Série histórica longa",
    inicio: 1901,
    fim: 2023,
    observacao:
      "Disponibilidade documentada no conjunto CRU utilizado pelo CCKP.",
  },

  {
    id: "1991-2020",
    nome: "Climatologia de referência",
    inicio: 1991,
    fim: 2020,
    observacao:
      "Período climatológico de referência disponibilizado pelo CCKP.",
  },

  {
    id: "1950-2022",
    nome: "Série ERA5",
    inicio: 1950,
    fim: 2022,
    observacao:
      "Período documentado para o produto ERA5 disponibilizado pelo CCKP.",
  },

  {
    id: "1961-1990",
    nome: "Climatologia FAO/AQUASTAT",
    inicio: 1961,
    fim: 1990,
    observacao:
      "Período histórico utilizado pelo Climate Information Tool da FAO.",
  },

  {
    id: "2020-2039",
    nome: "Projeção próxima",
    inicio: 2020,
    fim: 2039,
    observacao:
      "Janela de projeção CMIP6. Deve ser apresentada como projeção, não como observação.",
  },

  {
    id: "2040-2059",
    nome: "Projeção intermédia",
    inicio: 2040,
    fim: 2059,
    observacao:
      "Janela de projeção CMIP6.",
  },

  {
    id: "2060-2079",
    nome: "Projeção futura",
    inicio: 2060,
    fim: 2079,
    observacao:
      "Janela de projeção CMIP6.",
  },

  {
    id: "2080-2099",
    nome: "Projeção final do século",
    inicio: 2080,
    fim: 2099,
    observacao:
      "Janela de projeção CMIP6.",
  },
];

/* =========================================================
   PROVÍNCIAS DE ANGOLA
   ========================================================= */

export const provinciasAngolaClima: string[] = [
  "Bengo",
  "Benguela",
  "Bié",
  "Cabinda",
  "Cuando",
  "Cuanza Norte",
  "Cuanza Sul",
  "Cunene",
  "Cubango",
  "Huambo",
  "Huíla",
  "Icolo e Bengo",
  "Luanda",
  "Lunda Norte",
  "Lunda Sul",
  "Malanje",
  "Moxico",
  "Moxico Leste",
  "Namibe",
  "Uíge",
  "Zaire",
];

/* =========================================================
   CARACTERIZAÇÃO CLIMÁTICA
   =========================================================

   IMPORTANTE:
   Esta camada não inventa médias provinciais.

   As descrições abaixo são caracterizações gerais e não
   substituem valores calculados por estação, grade espacial
   ou agregação subnacional.
   ========================================================= */

const caracterizacaoGenerica = (
  provincia: string,
  descricao: string
): ProvinciaClima => ({
  id: provincia
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-"),

  provincia,

  descricao,

  caracterizacao: {
    descricao,

    observacoes:
      "Os valores numéricos provinciais devem ser obtidos a partir de bases climáticas com escala espacial compatível. Esta ficha não transforma médias nacionais ou regionais em médias provinciais.",

    implicacoesAgricolas:
      "A interpretação agrícola deve considerar precipitação, temperatura, duração da estação chuvosa, disponibilidade de água, solo e calendário das culturas.",
  },

  escalaPrincipal: "Subnacional",

  nivelConfianca: "moderado",

  fontes: [
    "cckp-angola",
    "cru-ts",
    "era5",
    "fao-aquastat-clima",
  ],
});

/* =========================================================
   PERFIS PROVINCIAIS
   ========================================================= */

export const provinciasClima: ProvinciaClima[] = [
  caracterizacaoGenerica(
    "Bengo",
    "Província do norte de Angola com influência tropical e forte variação espacial associada à proximidade do litoral e às áreas interiores."
  ),

  caracterizacaoGenerica(
    "Benguela",
    "Província do litoral centro-sul de Angola marcada pela influência marítima e por um gradiente climático entre a faixa costeira e as áreas interiores."
  ),

  caracterizacaoGenerica(
    "Bié",
    "Província do planalto central de Angola, onde altitude e sazonalidade das chuvas desempenham papel importante nas condições climáticas e agrícolas."
  ),

  caracterizacaoGenerica(
    "Cabinda",
    "Província localizada no extremo norte do território angolano, com clima tropical húmido e influência marítima."
  ),

  caracterizacaoGenerica(
    "Cuando",
    "Província do sudeste de Angola. Os dados climáticos atuais devem respeitar a configuração territorial vigente e não redistribuir automaticamente séries históricas da antiga província do Cuando Cubango."
  ),

  caracterizacaoGenerica(
    "Cuanza Norte",
    "Província do norte-interior de Angola com influência tropical e sazonalidade marcada das precipitações."
  ),

  caracterizacaoGenerica(
    "Cuanza Sul",
    "Província que apresenta forte variação climática entre áreas litorais e zonas interiores, associada à altitude e à distância do oceano."
  ),

  caracterizacaoGenerica(
    "Cunene",
    "Província do extremo sul de Angola, com condições mais secas e elevada variabilidade da precipitação, particularmente relevante para a produção agropecuária."
  ),

  caracterizacaoGenerica(
    "Cubango",
    "Província do sudeste de Angola. Não devem ser redistribuídos para Cubango valores históricos publicados conjuntamente para a antiga província do Cuando Cubango."
  ),

  caracterizacaoGenerica(
    "Huambo",
    "Província do planalto central, caracterizada por altitude elevada, temperaturas geralmente moderadas em relação às áreas baixas e marcada sazonalidade das chuvas."
  ),

  caracterizacaoGenerica(
    "Huíla",
    "Província do sudoeste-interior de Angola, com forte variação espacial relacionada à altitude, relevo e distância do oceano."
  ),

  caracterizacaoGenerica(
    "Icolo e Bengo",
    "Província criada na atual configuração administrativa. Séries históricas anteriores à alteração territorial devem ser utilizadas com cautela e sem redistribuição automática."
  ),

  caracterizacaoGenerica(
    "Luanda",
    "Província costeira de Angola, com influência marítima e condições mais secas do que muitas áreas do interior norte e centro."
  ),

  caracterizacaoGenerica(
    "Lunda Norte",
    "Província do nordeste de Angola com condições tropicais interiores e forte sazonalidade das chuvas. A caracterização climática deve considerar o relevo, cobertura vegetal e variação espacial da precipitação."
  ),

  caracterizacaoGenerica(
    "Lunda Sul",
    "Província do leste de Angola, com clima tropical interior e sazonalidade marcada da precipitação."
  ),

  caracterizacaoGenerica(
    "Malanje",
    "Província do norte-interior de Angola, com condições tropicais e variação espacial associada ao relevo e à posição geográfica."
  ),

  caracterizacaoGenerica(
    "Moxico",
    "Província do leste de Angola, caracterizada por clima tropical interior e sazonalidade acentuada das precipitações."
  ),

  caracterizacaoGenerica(
    "Moxico Leste",
    "Província resultante da atual configuração territorial. Séries históricas anteriores devem ser utilizadas sem redistribuição automática dos valores publicados para a antiga configuração territorial."
  ),

  caracterizacaoGenerica(
    "Namibe",
    "Província do sudoeste costeiro de Angola com forte influência oceânica e condições áridas a semiáridas em grande parte do território."
  ),

  caracterizacaoGenerica(
    "Uíge",
    "Província do norte de Angola com condições tropicais e maior disponibilidade de precipitação em comparação com as áreas costeiras mais secas."
  ),

  caracterizacaoGenerica(
    "Zaire",
    "Província do noroeste de Angola com influência tropical e marítima, apresentando variação climática entre zonas costeiras e interiores."
  ),
];

/* =========================================================
   INDICADORES NACIONAIS DE REFERÊNCIA
   =========================================================

   Estes indicadores NÃO são valores provinciais.

   Servem para a página nacional do Clima até que os dados
   subnacionais sejam calculados/importados pela API.
   ========================================================= */

export const indicadoresClimaNacional: IndicadorClimatico[] = [
  {
    id: "cru-temperatura-media-1991-2020",
    nome: "Temperatura média — climatologia CRU",
    unidade: "°C",
    periodo: "1991–2020",
    periodicidade: "climatológica",
    escala: "Nacional",
    tipoDado: "climatologia",
    fonte: "CRU TS / World Bank CCKP",
    instituicao:
      "Climatic Research Unit / World Bank",
    conjuntoDados: "cru-x0.5",
    resolucao: "0,5° × 0,5°",
    nota:
      "O valor numérico deve ser obtido através do produto espacial/API. Não é introduzido manualmente nesta base.",
    url: URL_CCKP_DOWNLOAD,
  },

  {
    id: "cru-precipitacao-1991-2020",
    nome: "Precipitação — climatologia CRU",
    unidade: "mm",
    periodo: "1991–2020",
    periodicidade: "climatológica",
    escala: "Nacional",
    tipoDado: "climatologia",
    fonte: "CRU TS / World Bank CCKP",
    instituicao:
      "Climatic Research Unit / World Bank",
    conjuntoDados: "cru-x0.5",
    resolucao: "0,5° × 0,5°",
    nota:
      "O valor nacional deve ser calculado/agregado a partir dos dados espaciais, não copiado de uma média regional.",
    url: URL_CCKP_DOWNLOAD,
  },

  {
    id: "era5-temperatura-media",
    nome: "Temperatura média — ERA5",
    unidade: "°C",
    periodo: "1991–2020",
    periodicidade: "climatológica",
    escala: "Nacional",
    tipoDado: "reanálise",
    fonte: "ERA5 / World Bank CCKP",
    instituicao:
      "ECMWF / Copernicus / World Bank",
    conjuntoDados: "era5-x0.25",
    resolucao: "0,25° × 0,25°",
    nota:
      "Produto de reanálise. Não deve ser apresentado como medição direta de uma estação meteorológica.",
    url: URL_ERA5,
  },

  {
    id: "era5-precipitacao",
    nome: "Precipitação — ERA5",
    unidade: "mm",
    periodo: "1991–2020",
    periodicidade: "climatológica",
    escala: "Nacional",
    tipoDado: "reanálise",
    fonte: "ERA5 / World Bank CCKP",
    instituicao:
      "ECMWF / Copernicus / World Bank",
    conjuntoDados: "era5-x0.25",
    resolucao: "0,25° × 0,25°",
    nota:
      "Para precipitação, recomenda-se comparação com mais de uma fonte devido às incertezas inerentes à estimativa deste parâmetro.",
    url: URL_ERA5,
  },
];

/* =========================================================
   CONFIGURAÇÃO DA API CCKP
   ========================================================= */

export interface ConfiguracaoApiClima {
  baseUrl: string;

  colecaoHistoricaCRU: string;
  colecaoERA5: string;
  colecaoCMIP6: string;

  variaveisHistoricas: string[];

  periodosHistoricos: string[];

  periodosProjecao: string[];
}

export const configuracaoApiClima: ConfiguracaoApiClima = {
  baseUrl: URL_CCKP_API,

  colecaoHistoricaCRU: "cru-x0.5",

  colecaoERA5: "era5-x0.25",

  colecaoCMIP6: "cmip6-x0.25",

  variaveisHistoricas: [
    "pr",
    "tas",
    "tasmax",
    "tasmin",
    "rx1day",
    "rx5day",
    "txx",
    "tnn",
    "tr",
    "fd",
  ],

  periodosHistoricos: [
    "1991-2020",
    "1995-2014",
    "1950-2022",
  ],

  periodosProjecao: [
    "2020-2039",
    "2040-2059",
    "2060-2079",
    "2080-2099",
  ],
};

/* =========================================================
   REGRAS DE QUALIDADE
   ========================================================= */

export const regrasQualidadeClima = [
  "Não transformar uma média nacional em valor provincial.",

  "Não transformar uma média regional em valor provincial.",

  "Não misturar observações, reanálises e projeções.",

  "Toda projeção deve ser identificada como projeção.",

  "Todo indicador deve apresentar unidade e período.",

  "Toda fonte deve possuir instituição identificada.",

  "Sempre que possível, apresentar a escala espacial do dado.",

  "Valores provenientes de diferentes conjuntos de dados devem ser identificados individualmente.",

  "Alterações territoriais devem ser consideradas antes de comparar séries históricas entre províncias.",

  "Quando não existir um valor provincial verificável, apresentar 'Não determinado' em vez de inventar um valor.",
];

/* =========================================================
   FUNÇÕES AUXILIARES
   ========================================================= */

export function normalizarNomeClima(
  valor: string
): string {
  return valor
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export function obterProvinciaClima(
  provincia: string
): ProvinciaClima | undefined {
  const alvo =
    normalizarNomeClima(provincia);

  return provinciasClima.find(
    (item) =>
      normalizarNomeClima(
        item.provincia
      ) === alvo
  );
}

export function pesquisarProvinciasClima(
  termo: string
): ProvinciaClima[] {
  const busca =
    normalizarNomeClima(termo);

  if (!busca) {
    return provinciasClima;
  }

  return provinciasClima.filter(
    (item) => {
      const nome =
        normalizarNomeClima(
          item.provincia
        );

      const descricao =
        normalizarNomeClima(
          item.descricao
        );

      return (
        nome.includes(busca) ||
        descricao.includes(busca)
      );
    }
  );
}

export function obterFonteClima(
  id: string
): FonteClimatica | undefined {
  return fontesClima.find(
    (fonte) => fonte.id === id
  );
}

export function obterIndicadorClima(
  id: string
): IndicadorClimatico | undefined {
  return [
    ...indicadoresClimaNacional,
    ...provinciasClima.flatMap(
      (provincia) =>
        provincia.indicadores ?? []
    ),
  ].find(
    (indicador) =>
      indicador.id === id
  );
}

/* =========================================================
   METADADOS DO MÓDULO
   ========================================================= */

export const metadadosClima = {
  nome: "Clima",

  titulo:
    "Clima e Variabilidade Climática de Angola",

  descricao:
    "Base de informação climática do AGROINOVA ANGOLA, organizada por fontes, períodos, escalas espaciais e tipos de dados.",

  pais: "Angola",

  provincias: 21,

  fontesPrincipais: [
    "World Bank Climate Change Knowledge Portal",
    "Climatic Research Unit",
    "ERA5 / ECMWF / Copernicus",
    "FAO AQUASTAT",
  ],

  dadosHistoricos:
    "CRU e ERA5",

  projecoes:
    "CMIP6",

  politicaDados:
    "O AGROINOVA ANGOLA não deve apresentar valores climáticos sem fonte, período, unidade e escala identificáveis.",

  atualizacaoAutomatica:
    "Preparada através da integração futura com APIs e fontes oficiais.",

  ultimaVerificacao:
    "2026-10-05",
};

/* =========================================================
   EXPORTAÇÃO PADRÃO
   ========================================================= */

const dadosClima = {
  fontesClima,
  variaveisClimaticas,
  periodosClimaticos,
  provinciasAngolaClima,
  provinciasClima,
  indicadoresClimaNacional,
  configuracaoApiClima,
  regrasQualidadeClima,
  metadadosClima,
};

export default dadosClima;