"use client";

import { useMemo, useState } from "react";

type Propriedade = {
  nome: string;
  valor: string;
  unidade?: string;
  profundidade?: string;
  observacao?: string;
};

type Cultura = {
  nome: string;
  relacao: string;
  observacao: string;
};

type Solo = {
  id: string;
  nome: string;
  nomeTecnico: string;
  resumo: string;
  descricao: string;
  distribuicao: string;
  provincias: string[];
  propriedades: Propriedade[];
  culturas: Cultura[];
  agua: string;
  fertilidade: string;
  drenagem: string;
  limitacoes: string[];
  manejo: string[];
  imagem: string;
  imagemFonte: string;
  fontes: {
    titulo: string;
    url: string;
  }[];
};

const solos: Solo[] = [
  {
    id: "arenossolos",
    nome: "Arenossolos",
    nomeTecnico: "Arenosols",
    resumo:
      "Solos predominantemente arenosos, muito extensos em Angola e particularmente importantes na metade oriental do país.",
    descricao:
      "Os Arenossolos são solos dominados por materiais arenosos. No estudo baseado na base SOTER para a África Austral, foram identificados 150 perfis de solo em unidades SOTER de Angola e 60 desses perfis foram classificados como Arenossolos. A análise mostra que estes solos ocupam uma área muito extensa do território angolano.",
    distribuicao:
      "A literatura pedológica indica grandes extensões de Arenossolos na região central e oriental de Angola, associados sobretudo aos sistemas arenosos do Kalahari. A documentação cartográfica consultada também mostra a forte predominância de Arenossolos na metade oriental do país.",
    provincias: [
      "Cuando",
      "Cubango",
      "Moxico",
      "Moxico Leste",
      "Lunda Norte",
      "Lunda Sul",
      "Malanje",
    ],
    propriedades: [
      {
        nome: "Areia",
        valor: "93 ± 3",
        unidade: "%",
        profundidade: "0–10 cm",
        observacao:
          "Média dos 60 perfis de Arenossolos de Angola analisados no estudo SOTER.",
      },
      {
        nome: "Areia",
        valor: "93 ± 3",
        unidade: "%",
        profundidade: "10–20 cm",
        observacao:
          "Média dos perfis analisados.",
      },
      {
        nome: "Areia",
        valor: "93 ± 3",
        unidade: "%",
        profundidade: "20–30 cm",
        observacao:
          "Média dos perfis analisados.",
      },
      {
        nome: "Argila",
        valor: "5 ± 2",
        unidade: "%",
        profundidade: "0–10 cm",
        observacao:
          "Média dos 60 perfis de Arenossolos de Angola.",
      },
      {
        nome: "Argila",
        valor: "5 ± 2",
        unidade: "%",
        profundidade: "10–20 cm",
        observacao:
          "Média dos perfis analisados.",
      },
      {
        nome: "Argila",
        valor: "6 ± 3",
        unidade: "%",
        profundidade: "20–30 cm",
        observacao:
          "Média dos perfis analisados.",
      },
      {
        nome: "pH em água",
        valor: "5,8 ± 0,7",
        unidade: "pH",
        profundidade: "0–10 cm",
        observacao:
          "Relação solo:água 1:2,5; média dos 60 perfis.",
      },
      {
        nome: "pH em água",
        valor: "5,7 ± 0,8",
        unidade: "pH",
        profundidade: "10–20 cm",
        observacao:
          "Relação solo:água 1:2,5; média dos 60 perfis.",
      },
      {
        nome: "pH em água",
        valor: "5,7 ± 0,8",
        unidade: "pH",
        profundidade: "20–30 cm",
        observacao:
          "Relação solo:água 1:2,5; média dos 60 perfis.",
      },
      {
        nome: "Carbono orgânico",
        valor: "6,2 ± 4,2",
        unidade: "g/kg",
        profundidade: "0–10 cm",
        observacao:
          "Média dos 60 perfis de Arenossolos de Angola.",
      },
      {
        nome: "Carbono orgânico",
        valor: "4,4 ± 4,0",
        unidade: "g/kg",
        profundidade: "10–20 cm",
        observacao:
          "Média dos perfis analisados.",
      },
    ],
    culturas: [
      {
        nome: "Mandioca",
        relacao: "Cultura documentada",
        observacao:
          "A mandioca aparece documentada em sistemas agrícolas associados a ambientes arenosos do planalto do Kalahari.",
      },
      {
        nome: "Milheto",
        relacao: "Cultura documentada",
        observacao:
          "É uma cultura tradicionalmente associada a determinados ambientes arenosos do sul e leste da região do Kalahari.",
      },
      {
        nome: "Voandzeia",
        relacao: "Cultura documentada",
        observacao:
          "A cultura aparece documentada em sistemas agrícolas tradicionais associados a solos arenosos.",
      },
      {
        nome: "Milho",
        relacao: "Possível sob manejo adequado",
        observacao:
          "Não significa que todo Arenossolo seja adequado. Água, fertilidade, matéria orgânica e manejo devem ser avaliados localmente.",
      },
    ],
    agua:
      "A textura arenosa favorece infiltração rápida e reduz a capacidade de retenção de água em comparação com solos de textura mais fina. A FAO destaca a baixa capacidade de retenção de água como uma das principais limitações dos solos arenosos.",
    fertilidade:
      "A baixa quantidade de argila e a baixa capacidade de retenção de nutrientes podem limitar a fertilidade. A matéria orgânica tem papel importante na retenção de nutrientes e na estabilidade física.",
    drenagem:
      "A elevada proporção de areia favorece a infiltração de água. Contudo, o comportamento real de drenagem depende do perfil completo, relevo, lençol freático e camadas subsuperficiais.",
    limitacoes: [
      "Baixa capacidade de retenção de água.",
      "Baixa capacidade de retenção de alguns nutrientes.",
      "Risco de lixiviação de nutrientes.",
      "Baixo teor de argila.",
      "Baixo carbono orgânico em muitos perfis.",
      "Maior vulnerabilidade à degradação quando o solo permanece descoberto.",
    ],
    manejo: [
      "Manter cobertura vegetal sempre que possível.",
      "Reduzir períodos de solo completamente descoberto.",
      "Aplicar fertilizantes de forma fracionada quando tecnicamente recomendado.",
      "Aumentar a matéria orgânica através de práticas disponíveis e adequadas ao sistema.",
      "Controlar a erosão e o escoamento superficial.",
      "Adequar o calendário agrícola à disponibilidade de água.",
    ],
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Arenosol.JPG",
    imagemFonte:
      "Perfil de Arenosol — ISRIC World Soil Information / Wikimedia Commons.",
    fontes: [
      {
        titulo:
          "FAO — Management of tropical sandy soils for sustainable agriculture",
        url: "https://www.fao.org/4/ag125e/AG125E08.htm",
      },
      {
        titulo:
          "Springer — Soil, Water and Nutrients: Angola",
        url: "https://link.springer.com/chapter/10.1007/978-3-031-18923-4_6",
      },
    ],
  },

  {
    id: "ferralsolos",
    nome: "Ferralsolos",
    nomeTecnico: "Ferralsols",
    resumo:
      "Solos profundamente intemperizados, muito importantes nos planaltos ocidentais e centrais de Angola.",
    descricao:
      "Os Ferralsolos são solos fortemente intemperizados, associados a superfícies geomorfológicas antigas. A classificação da FAO relaciona este grupo com a forte decomposição de minerais primários e predominância de minerais secundários, incluindo caulinite e óxidos de ferro e alumínio.",
    distribuicao:
      "A literatura sobre os solos de Angola mostra Ferralsolos associados principalmente aos planaltos ocidentais e centrais. Um exemplo documentado encontra-se em Wako Kungo, na província do Cuanza Sul.",
    provincias: [
      "Huambo",
      "Bié",
      "Huíla",
      "Cuanza Sul",
      "Benguela",
      "Malanje",
    ],
    propriedades: [
      {
        nome: "Profundidade",
        valor: "Frequentemente profundos",
        observacao:
          "Característica geral do grupo Ferralsols na descrição FAO; não representa uma profundidade única para Angola.",
      },
      {
        nome: "Drenagem interna",
        valor: "Geralmente boa",
        observacao:
          "Característica geral do grupo; condições locais podem alterar o comportamento.",
      },
      {
        nome: "Mineralogia",
        valor: "Caulinite e óxidos",
        observacao:
          "Associada ao forte intemperismo característico dos Ferralsolos.",
      },
    ],
    culturas: [
      {
        nome: "Milho",
        relacao: "Cultura documentada",
        observacao:
          "A agricultura de milho é documentada nos planaltos centrais de Angola.",
      },
      {
        nome: "Feijão",
        relacao: "Cultura documentada",
        observacao:
          "É uma das culturas agrícolas importantes dos planaltos centrais.",
      },
      {
        nome: "Batata",
        relacao: "Cultura documentada",
        observacao:
          "A batata aparece entre as culturas agrícolas de destaque nos planaltos centrais.",
      },
      {
        nome: "Hortícolas",
        relacao: "Cultura documentada",
        observacao:
          "Hortícolas são produzidas nas áreas agrícolas dos planaltos centrais.",
      },
    ],
    agua:
      "A estrutura dos Ferralsolos pode permitir boa infiltração. A FAO descreve normalmente boa circulação de ar e água, embora a água possa ser rapidamente lixiviada para camadas profundas.",
    fertilidade:
      "A forte alteração e lixiviação podem resultar em baixa disponibilidade de determinadas bases e nutrientes. A avaliação de fertilidade deve ser feita por análise do solo.",
    drenagem:
      "Em condições típicas, apresentam boa drenagem interna. Contudo, horizontes endurecidos ou condições locais podem modificar o movimento da água.",
    limitacoes: [
      "Forte intemperismo.",
      "Lixiviação de bases e nutrientes.",
      "Baixa reserva mineral em determinadas áreas agrícolas.",
      "Baixo teor de matéria orgânica em algumas áreas documentadas.",
      "Possibilidade de formação de horizontes endurecidos ferruginosos em determinadas paisagens.",
    ],
    manejo: [
      "Manter cobertura vegetal.",
      "Reduzir erosão em terrenos inclinados.",
      "Usar análises de solo para definir correção e fertilização.",
      "Repor nutrientes removidos pelas culturas.",
      "Preservar matéria orgânica.",
      "Evitar degradação estrutural provocada por manejo inadequado.",
    ],
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Ferralsol.JPG",
    imagemFonte:
      "Perfil de Ferralsol — ISRIC World Soil Information / Wikimedia Commons.",
    fontes: [
      {
        titulo:
          "FAO — Ferralsols",
        url: "https://www.fao.org/4/x5867e/x5867e03.htm",
      },
      {
        titulo:
          "FAO AGRIS — Solos ferralíticos de Angola",
        url: "https://agris.fao.org/search/en/providers/125181/records/688799707fd4d06c32a95efc",
      },
    ],
  },

  {
    id: "luvisolos",
    nome: "Luvisolos",
    nomeTecnico: "Luvisols",
    resumo:
      "Solos com diferenciação do perfil associada à acumulação de argila em camadas subsuperficiais.",
    descricao:
      "Os Luvisolos apresentam um horizonte subsuperficial de acumulação de argila. O grupo inclui diferentes subtipos e propriedades, pelo que não se deve atribuir um único pH, fertilidade ou profundidade a todos os Luvisolos.",
    distribuicao:
      "O mapa dos principais grupos de solos de Angola identifica Luvisolos em diferentes áreas do país. No Bengo, uma documentação ambiental do Projeto TEST identifica Luvisolos como um dos grupos importantes.",
    provincias: [
      "Bengo",
      "Uíge",
      "Zaire",
      "Cuanza Norte",
      "Malanje",
    ],
    propriedades: [],
    culturas: [
      {
        nome: "Culturas agrícolas diversas",
        relacao: "Dependente do local",
        observacao:
          "A aptidão deve ser determinada através das propriedades específicas do perfil, relevo, água e fertilidade.",
      },
    ],
    agua:
      "A acumulação de argila subsuperficial pode modificar o movimento da água. O comportamento depende da textura dos horizontes e das condições de drenagem.",
    fertilidade:
      "Não é correto atribuir uma fertilidade única aos Luvisolos. A fertilidade depende das propriedades químicas e físicas específicas do perfil.",
    drenagem:
      "Pode variar de acordo com a posição na paisagem e a diferenciação textural entre horizontes.",
    limitacoes: [
      "Possível contraste textural entre horizontes.",
      "Risco de erosão em áreas inclinadas.",
      "Condições de drenagem variáveis.",
    ],
    manejo: [
      "Manter cobertura vegetal.",
      "Controlar erosão.",
      "Evitar mobilização excessiva em terrenos suscetíveis.",
      "Realizar análise do solo antes da recomendação de fertilização.",
    ],
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Soil_profile.jpg",
    imagemFonte:
      "Perfil de solo — Wikimedia Commons.",
    fontes: [
      {
        titulo:
          "World Bank / Governo de Angola — Projeto TEST",
        url: "https://documents1.worldbank.org/curated/en/099091825095530824/pdf/P179154-69f00b5e-be92-4442-bb62-ccc07c5d87b1.pdf",
      },
      {
        titulo:
          "FAO/UNESCO Soil Map of the World",
        url: "https://www.fao.org/soils-portal/data-hub/soil-maps-and-databases/faounesco-soil-map-of-the-world/en/",
      },
    ],
  },

  {
    id: "cambissolos",
    nome: "Cambissolos",
    nomeTecnico: "Cambisols",
    resumo:
      "Solos com desenvolvimento pedológico relativamente limitado e grande diversidade de propriedades.",
    descricao:
      "Cambissolos são solos que apresentam sinais de desenvolvimento pedológico, mas não cumprem necessariamente os critérios diagnósticos necessários para grupos mais desenvolvidos.",
    distribuicao:
      "São identificados no mapa dos principais solos de Angola e aparecem também na documentação do Bengo.",
    provincias: [
      "Bengo",
      "Cuanza Norte",
      "Cuanza Sul",
      "Uíge",
      "Zaire",
    ],
    propriedades: [],
    culturas: [
      {
        nome: "Agricultura diversificada",
        relacao: "Dependente do perfil",
        observacao:
          "Não existe uma lista universal de culturas para todos os Cambissolos.",
      },
    ],
    agua:
      "Muito variável. O comportamento depende do material de origem, textura, profundidade e relevo.",
    fertilidade:
      "Muito variável; deve ser avaliada por análise do solo.",
    drenagem:
      "Variável de acordo com posição topográfica e propriedades do perfil.",
    limitacoes: [
      "Grande variabilidade entre perfis.",
      "Erosão em terrenos inclinados.",
      "Profundidade variável.",
    ],
    manejo: [
      "Avaliar o perfil antes da recomendação agronómica.",
      "Manter cobertura.",
      "Controlar erosão.",
      "Adequar a mobilização ao tipo de terreno.",
    ],
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Soil_profile.jpg",
    imagemFonte:
      "Perfil de solo — Wikimedia Commons.",
    fontes: [
      {
        titulo:
          "World Bank / Governo de Angola — Projeto TEST",
        url: "https://documents1.worldbank.org/curated/en/099091825095530824/pdf/P179154-69f00b5e-be92-4442-bb62-ccc07c5d87b1.pdf",
      },
    ],
  },

  {
    id: "calcisolos",
    nome: "Calcisolos",
    nomeTecnico: "Calcisols",
    resumo:
      "Solos caracterizados por acumulação secundária de carbonatos de cálcio em determinadas condições.",
    descricao:
      "Os Calcisolos são reconhecidos pela presença de acumulação secundária de carbonatos de cálcio. A sua ocorrência depende do clima, material de origem e evolução do perfil.",
    distribuicao:
      "São identificados no mapa de solos de Angola e aparecem também entre os solos descritos para áreas do Bengo.",
    provincias: [
      "Bengo",
      "Namibe",
      "Cunene",
      "Cuando",
      "Cubango",
    ],
    propriedades: [],
    culturas: [
      {
        nome: "Culturas agrícolas adaptadas ao ambiente local",
        relacao: "Dependente do local",
        observacao:
          "A escolha da cultura depende de água, salinidade, profundidade, textura e propriedades químicas específicas.",
      },
    ],
    agua:
      "Muito variável segundo textura, clima e posição na paisagem.",
    fertilidade:
      "Não deve ser inferida somente pelo nome Calcisol.",
    drenagem:
      "Depende das características físicas e posição do perfil.",
    limitacoes: [
      "Possível acumulação de carbonatos.",
      "Condições de aridez em algumas áreas de ocorrência.",
      "Disponibilidade de água pode ser uma limitação.",
    ],
    manejo: [
      "Avaliar propriedades químicas antes da fertilização.",
      "Gerir cuidadosamente a água.",
      "Controlar erosão.",
    ],
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Soil_profile.jpg",
    imagemFonte:
      "Perfil de solo — Wikimedia Commons.",
    fontes: [
      {
        titulo:
          "FAO/UNESCO Soil Map of the World",
        url: "https://www.fao.org/soils-portal/data-hub/soil-maps-and-databases/faounesco-soil-map-of-the-world/en/",
      },
      {
        titulo:
          "World Bank / Governo de Angola — Projeto TEST",
        url: "https://documents1.worldbank.org/curated/en/099091825095530824/pdf/P179154-69f00b5e-be92-4442-bb62-ccc07c5d87b1.pdf",
      },
    ],
  },

  {
    id: "regossolos",
    nome: "Regossolos",
    nomeTecnico: "Regosols",
    resumo:
      "Solos pouco desenvolvidos, associados a materiais relativamente recentes ou pouco consolidados.",
    descricao:
      "Regossolos são solos pouco desenvolvidos que não apresentam determinados horizontes diagnósticos necessários para classificação em grupos mais evoluídos.",
    distribuicao:
      "Aparecem no mapa dos principais grupos de solos de Angola em diferentes ambientes.",
    provincias: [
      "Namibe",
      "Cunene",
      "Benguela",
      "Cuando",
      "Cubango",
    ],
    propriedades: [],
    culturas: [
      {
        nome: "Agricultura condicionada",
        relacao: "Dependente do local",
        observacao:
          "A aptidão depende de profundidade, textura, água, matéria orgânica e estabilidade do terreno.",
      },
    ],
    agua:
      "Muito variável conforme o material de origem e textura.",
    fertilidade:
      "Variável; necessita de avaliação local.",
    drenagem:
      "Variável.",
    limitacoes: [
      "Desenvolvimento pedológico limitado.",
      "Possível suscetibilidade à erosão.",
      "Profundidade variável.",
    ],
    manejo: [
      "Evitar exposição prolongada do solo.",
      "Controlar erosão.",
      "Adequar culturas às condições hídricas.",
    ],
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Soil_profile.jpg",
    imagemFonte:
      "Perfil de solo — Wikimedia Commons.",
    fontes: [
      {
        titulo:
          "FAO/UNESCO Soil Map of the World",
        url: "https://www.fao.org/soils-portal/data-hub/soil-maps-and-databases/faounesco-soil-map-of-the-world/en/",
      },
    ],
  },

  {
    id: "fluvisolos",
    nome: "Fluvisolos",
    nomeTecnico: "Fluvisols",
    resumo:
      "Solos associados a depósitos aluviais recentes de rios e áreas de sedimentação.",
    descricao:
      "Os Fluvisolos desenvolvem-se principalmente sobre materiais aluviais relativamente recentes. Podem apresentar grande variação de textura e propriedades ao longo de pequenas distâncias.",
    distribuicao:
      "A sua ocorrência está relacionada com vales fluviais, planícies de inundação e outras áreas onde ocorre deposição de sedimentos.",
    provincias: [
      "Bengo",
      "Cuanza Norte",
      "Cuanza Sul",
      "Malanje",
      "Zaire",
      "Uíge",
    ],
    propriedades: [],
    culturas: [
      {
        nome: "Culturas agrícolas de zonas aluviais",
        relacao: "Dependente do local",
        observacao:
          "A escolha depende do regime de inundação, drenagem, textura e fertilidade.",
      },
    ],
    agua:
      "A disponibilidade de água pode ser elevada em ambientes aluviais, mas o risco de inundação também pode ser significativo.",
    fertilidade:
      "Pode variar amplamente porque os sedimentos depositados pelos rios possuem diferentes origens.",
    drenagem:
      "Muito variável, desde áreas bem drenadas até ambientes sujeitos a saturação temporária.",
    limitacoes: [
      "Risco de inundação.",
      "Variação textural.",
      "Erosão das margens dos rios.",
    ],
    manejo: [
      "Considerar o regime de cheias.",
      "Proteger margens.",
      "Evitar cultivo em áreas de risco elevado de inundação.",
      "Avaliar o solo por local.",
    ],
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Soil_profile.jpg",
    imagemFonte:
      "Perfil de solo — Wikimedia Commons.",
    fontes: [
      {
        titulo:
          "FAO/UNESCO Soil Map of the World",
        url: "https://www.fao.org/soils-portal/data-hub/soil-maps-and-databases/faounesco-soil-map-of-the-world/en/",
      },
    ],
  },
];

const provincias = [
  {
    nome: "Bengo",
    solos: ["Luvisolos", "Cambissolos", "Calcisolos"],
    culturas: [
      "Agricultura diversificada",
      "Culturas adaptadas às condições locais",
    ],
    nota:
      "A documentação do Projeto TEST identifica Luvisolos e Cambissolos e refere também solos calcários e solos pouco evoluídos.",
  },
  {
    nome: "Huambo",
    solos: ["Ferralsolos"],
    culturas: ["Milho", "Feijão", "Batata", "Hortícolas"],
    nota:
      "A documentação consultada descreve os solos de Huambo como maioritariamente ferralíticos e relaciona a agricultura regional com milho, feijão, batata e hortícolas.",
  },
  {
    nome: "Bié",
    solos: ["Ferralsolos"],
    culturas: ["Milho", "Feijão", "Batata"],
    nota:
      "O Bié integra os planaltos centrais de elevado potencial agrícola; a caracterização detalhada do perfil deve ser feita por local.",
  },
  {
    nome: "Huíla",
    solos: ["Ferralsolos", "Arenossolos"],
    culturas: ["Milho", "Feijão", "Batata"],
    nota:
      "A província integra áreas do planalto e ambientes com diferentes materiais de origem; não se deve atribuir um único solo a toda a província.",
  },
  {
    nome: "Moxico",
    solos: ["Arenossolos"],
    culturas: ["Mandioca", "Milheto"],
    nota:
      "O leste de Angola apresenta extensas áreas arenosas associadas aos sistemas do Kalahari.",
  },
  {
    nome: "Lunda Norte",
    solos: ["Arenossolos"],
    culturas: ["Mandioca", "Milheto"],
    nota:
      "A distribuição provincial deve ser interpretada juntamente com a cartografia pedológica e não como uma classificação única de toda a província.",
  },
  {
    nome: "Lunda Sul",
    solos: ["Arenossolos"],
    culturas: ["Mandioca", "Milheto"],
    nota:
      "Áreas orientais de Angola são fortemente associadas a materiais arenosos do sistema Kalahari.",
  },
  {
    nome: "Malanje",
    solos: ["Arenossolos", "Ferralsolos", "Cambissolos"],
    culturas: ["Mandioca", "Milho", "Feijão"],
    nota:
      "Malanje integra regiões agrícolas importantes de Angola e apresenta diversidade de ambientes pedológicos.",
  },
];

const fontesGerais = [
  {
    titulo:
      "FAO — Management of tropical sandy soils for sustainable agriculture",
    descricao:
      "Dados SOTER e propriedades físicas e químicas de Arenossolos, incluindo 60 perfis de Angola.",
    url: "https://www.fao.org/4/ag125e/AG125E08.htm",
  },
  {
    titulo:
      "FAO/UNESCO — Soil Map of the World",
    descricao:
      "Cartografia internacional de referência para os grandes grupos de solos.",
    url: "https://www.fao.org/soils-portal/data-hub/soil-maps-and-databases/faounesco-soil-map-of-the-world/en/",
  },
  {
    titulo:
      "World Bank / Governo de Angola — Projeto TEST",
    descricao:
      "Documento ambiental com mapa dos principais grupos de solos de Angola e referências provinciais.",
    url: "https://documents1.worldbank.org/curated/en/099091825095530824/pdf/P179154-69f00b5e-be92-4442-bb62-ccc07c5d87b1.pdf",
  },
  {
    titulo:
      "FAO AGRIS — Solos ferralíticos de Angola",
    descricao:
      "Estudo baseado em 48 pedons representativos de solos ferralíticos angolanos.",
    url: "https://agris.fao.org/search/en/providers/125181/records/688799707fd4d06c32a95efc",
  },
  {
    titulo:
      "Springer — Soil, Water and Nutrients: Angola",
    descricao:
      "Síntese sobre a distribuição dos principais grupos de solos de Angola.",
    url: "https://link.springer.com/chapter/10.1007/978-3-031-18923-4_6",
  },
];

function normalizar(texto: string) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export default function SolosPage() {
  const [pesquisa, setPesquisa] = useState("");
  const [filtro, setFiltro] = useState("Todos");
  const [soloAberto, setSoloAberto] = useState("arenossolos");
  const [provinciaAberta, setProvinciaAberta] =
    useState<string | null>(null);

  const solosFiltrados = useMemo(() => {
    const termo = normalizar(pesquisa.trim());

    return solos.filter((solo) => {
      const correspondeTipo =
        filtro === "Todos" ||
        normalizar(solo.nome) === normalizar(filtro);

      if (!correspondeTipo) return false;

      if (!termo) return true;

      const conteudo = normalizar(
        [
          solo.nome,
          solo.nomeTecnico,
          solo.resumo,
          solo.descricao,
          solo.distribuicao,
          solo.provincias.join(" "),
          solo.culturas.map((c) => c.nome).join(" "),
        ].join(" ")
      );

      return conteudo.includes(termo);
    });
  }, [pesquisa, filtro]);

  function abrirSolo(id: string) {
    setSoloAberto(id);

    setTimeout(() => {
      document
        .getElementById(`solo-${id}`)
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 80);
  }

  function abrirProvincia(nome: string) {
    setProvinciaAberta(
      provinciaAberta === nome ? null : nome
    );
  }

  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* HERO */}
      <section className="relative overflow-hidden bg-green-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-green-900 to-green-800" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-5xl">

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-300">
              AGROINOVA ANGOLA · PEDOLOGIA
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-7xl">
              Solos de Angola
            </h1>

            <p className="mt-7 max-w-4xl text-lg leading-8 text-green-50 md:text-xl">
              Base de conhecimento sobre os principais solos de Angola,
              relacionando distribuição, propriedades, culturas, limitações,
              manejo e fontes científicas.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <p className="text-3xl font-bold">Angola</p>
                <p className="mt-1 text-sm text-green-100">
                  cobertura nacional
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <p className="text-3xl font-bold">
                  Perfis
                </p>
                <p className="mt-1 text-sm text-green-100">
                  dados quando documentados
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <p className="text-3xl font-bold">
                  Fontes
                </p>
                <p className="mt-1 text-sm text-green-100">
                  FAO, estudos e cartografia
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <nav className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-3 lg:px-8">

          {[
            ["visao-geral", "Visão geral"],
            ["explorar", "Explorar solos"],
            ["provincias", "Províncias"],
            ["fichas", "Fichas técnicas"],
            ["agricultura", "Agricultura"],
            ["fontes", "Fontes"],
          ].map(([id, texto]) => (
            <a
              key={id}
              href={`#${id}`}
              className="whitespace-nowrap rounded-full border border-green-100 px-4 py-2 text-sm font-semibold text-green-800 transition hover:bg-green-50"
            >
              {texto}
            </a>
          ))}

        </div>
      </nav>

      {/* VISÃO GERAL */}
      <section
        id="visao-geral"
        className="scroll-mt-24 border-b border-slate-200"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr]">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                Visão pedológica
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-5xl">
                O solo muda de lugar para lugar
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">

                <p>
                  Angola possui uma grande diversidade de solos. A geologia,
                  o clima, o relevo, os organismos, a vegetação, o material
                  de origem e o tempo de formação contribuem para essa
                  diversidade.
                </p>

                <p>
                  A literatura sobre Angola destaca dois grandes grupos pela
                  sua extensão: Arenossolos e Ferralsolos. Em conjunto,
                  representam mais de três quartos da cobertura pedológica
                  do país segundo a síntese consultada.
                </p>

                <p>
                  A cartografia também identifica Luvisolos, Cambissolos,
                  Calcisolos, Fluvisolos, Regossolos, Acrissolos, Nitisolos,
                  Lixissolos, Gleysolos e outros grupos.
                </p>

                <p className="font-semibold text-green-900">
                  Esta plataforma não transforma um valor obtido num perfil
                  de solo num valor universal para toda a província.
                </p>

              </div>

            </div>

            <div className="rounded-3xl border border-green-100 bg-green-50 p-8">

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
                Regra da AGROINOVA
              </p>

              <h3 className="mt-3 text-2xl font-bold text-green-950">
                Dados reais, com contexto
              </h3>

              <div className="mt-6 space-y-5">

                {[
                  "pH acompanhado da profundidade e método quando disponíveis.",
                  "Textura apresentada com percentagens e horizonte.",
                  "Culturas diferenciadas entre documentadas e recomendações.",
                  "Províncias apenas quando sustentadas por fonte.",
                  "Valores laboratoriais não são generalizados sem evidência.",
                ].map((texto) => (
                  <div
                    key={texto}
                    className="border-l-2 border-green-700 pl-4 text-sm leading-7 text-green-950"
                  >
                    {texto}
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* EXPLORAR */}
      <section
        id="explorar"
        className="scroll-mt-24 bg-slate-50"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="max-w-4xl">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Explorar
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-5xl">
              Encontre o solo que procura
            </h2>

          </div>

          {/* PESQUISA */}
          <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_auto]">

            <input
              value={pesquisa}
              onChange={(e) =>
                setPesquisa(e.target.value)
              }
              type="search"
              placeholder="Pesquisar por solo, província ou cultura..."
              className="rounded-xl border border-slate-300 bg-white px-5 py-4 outline-none transition focus:border-green-700 focus:ring-4 focus:ring-green-100"
            />

            <select
              value={filtro}
              onChange={(e) =>
                setFiltro(e.target.value)
              }
              className="rounded-xl border border-slate-300 bg-white px-5 py-4 font-semibold outline-none focus:border-green-700"
            >
              <option value="Todos">
                Todos os solos
              </option>

              {solos.map((solo) => (
                <option
                  key={solo.id}
                  value={solo.nome}
                >
                  {solo.nome}
                </option>
              ))}
            </select>

          </div>

          {/* CARDS */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {solosFiltrados.map((solo) => (

              <article
                key={solo.id}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="h-64 overflow-hidden bg-slate-100">

                  <img
                    src={solo.imagem}
                    alt={`Perfil de ${solo.nome}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                </div>

                <div className="p-7">

                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">
                    {solo.nomeTecnico}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-slate-950">
                    {solo.nome}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {solo.resumo}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      abrirSolo(solo.id)
                    }
                    className="mt-6 w-full rounded-xl bg-green-800 px-5 py-3 font-bold text-white transition hover:bg-green-950"
                  >
                    Ver ficha técnica
                  </button>

                </div>

              </article>

            ))}

          </div>

        </div>
      </section>

      {/* PROVÍNCIAS */}
      <section
        id="provincias"
        className="scroll-mt-24"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="max-w-4xl">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Território
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-5xl">
              Solos e agricultura por província
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Esta área apresenta apenas relações provinciais documentadas
              pelas fontes utilizadas. Uma província pode possuir vários
              grupos de solos.
            </p>

          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {provincias.map((provincia) => {

              const aberta =
                provinciaAberta === provincia.nome;

              return (
                <article
                  key={provincia.nome}
                  className={`rounded-2xl border bg-white transition ${
                    aberta
                      ? "border-green-700 shadow-lg"
                      : "border-slate-200 shadow-sm"
                  }`}
                >

                  <button
                    type="button"
                    onClick={() =>
                      abrirProvincia(
                        provincia.nome
                      )
                    }
                    className="w-full p-6 text-left"
                  >

                    <div className="flex items-center justify-between gap-4">

                      <h3 className="text-xl font-bold text-slate-950">
                        {provincia.nome}
                      </h3>

                      <span className="text-sm font-bold text-green-700">
                        {aberta ? "Fechar" : "Ver"}
                      </span>

                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">

                      {provincia.solos.map((solo) => (
                        <span
                          key={solo}
                          className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-800"
                        >
                          {solo}
                        </span>
                      ))}

                    </div>

                  </button>

                  {aberta && (

                    <div className="border-t border-slate-200 px-6 pb-6 pt-5">

                      <h4 className="font-bold text-slate-900">
                        Culturas documentadas
                      </h4>

                      <div className="mt-3 flex flex-wrap gap-2">

                        {provincia.culturas.map(
                          (cultura) => (
                            <span
                              key={cultura}
                              className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700"
                            >
                              {cultura}
                            </span>
                          )
                        )}

                      </div>

                      <p className="mt-5 text-sm leading-7 text-slate-600">
                        {provincia.nota}
                      </p>

                    </div>

                  )}

                </article>
              );
            })}

          </div>

        </div>
      </section>

      {/* FICHAS */}
      <section
        id="fichas"
        className="scroll-mt-24 bg-green-950"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="max-w-4xl text-white">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-300">
              Fichas técnicas
            </p>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Conheça cada solo
            </h2>

            <p className="mt-5 leading-8 text-green-100">
              Todas as fichas permanecem nesta mesma página. Ao clicar num
              cartão, a página desloca-se diretamente para a ficha.
            </p>

          </div>

          <div className="mt-14 space-y-12">

            {solos.map((solo) => (

              <article
                key={solo.id}
                id={`solo-${solo.id}`}
                className={`scroll-mt-28 overflow-hidden rounded-3xl bg-white text-slate-800 shadow-2xl ${
                  soloAberto === solo.id
                    ? "ring-4 ring-green-300"
                    : ""
                }`}
              >

                {/* CABEÇALHO */}
                <div className="grid lg:grid-cols-[.75fr_1.25fr]">

                  <div className="bg-slate-100">

                    <img
                      src={solo.imagem}
                      alt={`Perfil de ${solo.nome}`}
                      className="h-full min-h-[460px] w-full object-cover"
                      loading="lazy"
                    />

                    <div className="border-t border-slate-200 bg-white p-4">

                      <p className="text-xs leading-5 text-slate-500">
                        {solo.imagemFonte}
                      </p>

                    </div>

                  </div>

                  <div className="p-8 lg:p-10">

                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                      {solo.nomeTecnico}
                    </p>

                    <h3 className="mt-3 text-4xl font-bold text-slate-950">
                      {solo.nome}
                    </h3>

                    <p className="mt-5 text-lg leading-8 text-slate-600">
                      {solo.resumo}
                    </p>

                    <div className="mt-7 rounded-2xl bg-green-50 p-6">

                      <h4 className="font-bold text-green-950">
                        Descrição científica
                      </h4>

                      <p className="mt-3 leading-8 text-green-950">
                        {solo.descricao}
                      </p>

                    </div>

                  </div>

                </div>

                {/* DISTRIBUIÇÃO */}
                <div className="border-t border-slate-200 p-8 lg:p-10">

                  <div className="grid gap-10 lg:grid-cols-2">

                    <div>

                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">
                        Distribuição
                      </p>

                      <h4 className="mt-2 text-2xl font-bold text-slate-950">
                        Onde ocorre
                      </h4>

                      <p className="mt-4 leading-8 text-slate-600">
                        {solo.distribuicao}
                      </p>

                    </div>

                    <div>

                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">
                        Províncias relacionadas
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">

                        {solo.provincias.map(
                          (provincia) => (
                            <span
                              key={provincia}
                              className="rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-sm font-semibold text-green-900"
                            >
                              {provincia}
                            </span>
                          )
                        )}

                      </div>

                      <p className="mt-4 text-xs leading-6 text-slate-500">
                        A presença de um grupo na lista não significa que
                        toda a área da província possua esse solo.
                      </p>

                    </div>

                  </div>

                </div>

                {/* PROPRIEDADES */}
                <div className="border-t border-slate-200 bg-slate-50 p-8 lg:p-10">

                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">
                    Dados analíticos
                  </p>

                  <h4 className="mt-2 text-2xl font-bold text-slate-950">
                    Propriedades documentadas
                  </h4>

                  {solo.propriedades.length > 0 ? (

                    <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                      {solo.propriedades.map(
                        (propriedade, index) => (

                          <div
                            key={`${propriedade.nome}-${index}`}
                            className="rounded-2xl border border-slate-200 bg-white p-6"
                          >

                            <p className="text-sm font-semibold text-slate-500">
                              {propriedade.nome}
                            </p>

                            <p className="mt-2 text-3xl font-bold text-green-800">
                              {propriedade.valor}
                              {propriedade.unidade
                                ? ` ${propriedade.unidade}`
                                : ""}
                            </p>

                            {propriedade.profundidade && (
                              <p className="mt-2 text-sm font-semibold text-slate-700">
                                Horizonte:{" "}
                                {propriedade.profundidade}
                              </p>
                            )}

                            {propriedade.observacao && (
                              <p className="mt-3 text-xs leading-6 text-slate-500">
                                {propriedade.observacao}
                              </p>
                            )}

                          </div>

                        )
                      )}

                    </div>

                  ) : (

                    <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-6">

                      <p className="leading-7 text-slate-600">
                        Esta ficha não apresenta valores laboratoriais
                        quantitativos porque as fontes consultadas para
                        este grupo não fornecem, nesta base, um conjunto
                        provincial suficientemente específico para ser
                        apresentado como valor nacional.
                      </p>

                      <p className="mt-3 text-sm font-semibold text-green-800">
                        Isso é intencional: a AGROINOVA não inventa valores
                        para preencher campos.
                      </p>

                    </div>

                  )}

                </div>

                {/* CULTURAS */}
                <div
                  id="agricultura"
                  className="border-t border-slate-200 p-8 lg:p-10"
                >

                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">
                    Agricultura
                  </p>

                  <h4 className="mt-2 text-2xl font-bold text-slate-950">
                    Culturas e relação com o solo
                  </h4>

                  <div className="mt-7 grid gap-5 md:grid-cols-2">

                    {solo.culturas.map(
                      (cultura) => (

                        <article
                          key={cultura.nome}
                          className="rounded-2xl border border-slate-200 p-6"
                        >

                          <div className="flex flex-wrap items-center justify-between gap-3">

                            <h5 className="text-xl font-bold text-slate-950">
                              {cultura.nome}
                            </h5>

                            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-800">
                              {cultura.relacao}
                            </span>

                          </div>

                          <p className="mt-4 leading-7 text-slate-600">
                            {cultura.observacao}
                          </p>

                        </article>

                      )
                    )}

                  </div>

                </div>

                {/* ÁGUA / FERTILIDADE / DRENAGEM */}
                <div className="grid border-t border-slate-200 md:grid-cols-3">

                  <div className="p-8">

                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">
                      Água
                    </p>

                    <h4 className="mt-2 text-xl font-bold text-slate-950">
                      Comportamento hídrico
                    </h4>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {solo.agua}
                    </p>

                  </div>

                  <div className="border-t border-slate-200 p-8 md:border-l md:border-t-0">

                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">
                      Fertilidade
                    </p>

                    <h4 className="mt-2 text-xl font-bold text-slate-950">
                      Nutrientes
                    </h4>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {solo.fertilidade}
                    </p>

                  </div>

                  <div className="border-t border-slate-200 p-8 md:border-l md:border-t-0">

                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">
                      Drenagem
                    </p>

                    <h4 className="mt-2 text-xl font-bold text-slate-950">
                      Movimento da água
                    </h4>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {solo.drenagem}
                    </p>

                  </div>

                </div>

                {/* LIMITAÇÕES / MANEJO */}
                <div className="grid border-t border-slate-200 lg:grid-cols-2">

                  <div className="p-8 lg:p-10">

                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-700">
                      Limitações
                    </p>

                    <h4 className="mt-2 text-2xl font-bold text-slate-950">
                      O que deve ser observado
                    </h4>

                    <div className="mt-6 space-y-3">

                      {solo.limitacoes.map(
                        (item) => (

                          <div
                            key={item}
                            className="rounded-xl border border-red-100 bg-red-50 p-4 text-sm leading-6 text-red-950"
                          >
                            {item}
                          </div>

                        )
                      )}

                    </div>

                  </div>

                  <div className="border-t border-slate-200 bg-green-50 p-8 lg:border-l lg:border-t-0 lg:p-10">

                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">
                      Manejo
                    </p>

                    <h4 className="mt-2 text-2xl font-bold text-green-950">
                      Princípios de manejo
                    </h4>

                    <div className="mt-6 space-y-3">

                      {solo.manejo.map(
                        (item) => (

                          <div
                            key={item}
                            className="rounded-xl border border-green-100 bg-white p-4 text-sm leading-6 text-green-950"
                          >
                            {item}
                          </div>

                        )
                      )}

                    </div>

                  </div>

                </div>

                {/* FONTES DA FICHA */}
                <div className="border-t border-slate-200 bg-slate-950 p-8 text-white lg:p-10">

                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-300">
                    Referências da ficha
                  </p>

                  <div className="mt-5 grid gap-4 md:grid-cols-2">

                    {solo.fontes.map(
                      (fonte) => (

                        <a
                          key={fonte.url}
                          href={fonte.url}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                        >

                          <p className="font-bold text-white">
                            {fonte.titulo}
                          </p>

                          <p className="mt-2 break-all text-xs text-green-300">
                            {fonte.url}
                          </p>

                        </a>

                      )
                    )}

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>
      </section>

      {/* AGRICULTURA */}
      <section
        id="agricultura"
        className="scroll-mt-24"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="max-w-4xl">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Solo e culturas
            </p>

            <h2 className="mt-3 text-4xl font-bold text-slate-950">
              Que culturas podem ser produzidas?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              A resposta depende do solo, água, clima, relevo, variedade,
              época de plantio e manejo. Por isso, a AGROINOVA separa
              culturas documentadas de recomendações agronómicas.
            </p>

          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                nome: "Milho",
                solos: "Ferralsolos e outros ambientes agrícolas dos planaltos",
              },
              {
                nome: "Feijão",
                solos: "Ferralsolos e outros solos agrícolas dos planaltos",
              },
              {
                nome: "Mandioca",
                solos: "Ambientes arenosos documentados no leste e Kalahari",
              },
              {
                nome: "Batata",
                solos: "Agricultura documentada nos planaltos centrais",
              },
            ].map((item) => (

              <article
                key={item.nome}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >

                <h3 className="text-2xl font-bold text-green-800">
                  {item.nome}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.solos}
                </p>

              </article>

            ))}

          </div>

          <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-7">

            <h3 className="text-xl font-bold text-amber-950">
              Atenção
            </h3>

            <p className="mt-3 leading-7 text-amber-950">
              A presença de uma cultura nesta página não significa que ela
              seja recomendada para todos os solos do mesmo grupo. Uma
              recomendação agronómica deve considerar análise do solo,
              disponibilidade de água, clima, variedade e condições
              específicas da parcela.
            </p>

          </div>

        </div>
      </section>

      {/* FONTES */}
      <section
        id="fontes"
        className="scroll-mt-24 border-t border-slate-200 bg-slate-50"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="max-w-4xl">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Base documental
            </p>

            <h2 className="mt-3 text-4xl font-bold text-slate-950">
              Fontes utilizadas
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              A plataforma deve permitir que o visitante confirme a origem
              das informações. Por isso, cada ficha apresenta as fontes
              utilizadas para os seus dados.
            </p>

          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            {fontesGerais.map((fonte) => (

              <a
                key={fonte.url}
                href={fonte.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-green-700 hover:shadow-md"
              >

                <h3 className="text-xl font-bold text-slate-950">
                  {fonte.titulo}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {fonte.descricao}
                </p>

                <p className="mt-4 break-all text-xs font-semibold text-green-700">
                  {fonte.url}
                </p>

              </a>

            ))}

          </div>

        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-green-950 text-white">

        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="text-xl font-bold">
                AGROINOVA ANGOLA
              </p>

              <p className="mt-2 text-sm text-green-200">
                Plataforma Nacional de Investigação, Conhecimento e
                Inovação Agropecuária de Angola.
              </p>

            </div>

            <a
              href="#visao-geral"
              className="font-semibold text-green-200 hover:text-white"
            >
              Voltar ao início
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}