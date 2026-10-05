export type ReferenciaInvestigacao = {
  titulo: string;
  instituicao: string;
  ano?: string;
  url: string;
};

export type AreaInvestigacao = {
  slug: string;
  titulo: string;
  icone: string;
  resumo: string;
  introducao: string;
  importancia: string[];
  angola: string[];
  linhasPesquisa: string[];
  aplicacoes: string[];
  perguntas: string[];
  referencias: ReferenciaInvestigacao[];
};

export const areasInvestigacao: AreaInvestigacao[] = [
  {
    slug: "producao-vegetal",
    titulo: "Produção vegetal",
    icone: "🌽",

    resumo:
      "A produção vegetal estuda os processos biológicos, agronómicos, ambientais e tecnológicos que determinam o estabelecimento, crescimento, produtividade, qualidade e sustentabilidade das culturas agrícolas.",

    introducao:
      "A produção vegetal constitui uma das bases científicas dos sistemas agropecuários. Não se limita à escolha de uma cultura ou à aplicação de fertilizantes: envolve a relação entre genótipo, solo, água, clima, práticas de manejo, sanidade vegetal, disponibilidade de sementes e condições socioeconómicas do produtor. Uma abordagem moderna procura compreender o sistema produtivo como um conjunto integrado, no qual decisões tomadas numa etapa podem afectar todo o ciclo da cultura.",

    importancia: [
      "A escolha de sementes e variedades adaptadas às condições agroecológicas é fundamental para o estabelecimento da cultura e para a estabilidade da produção.",
      "O manejo do solo deve considerar fertilidade, estrutura, matéria orgânica, disponibilidade de água e risco de erosão.",
      "A produtividade depende da combinação entre material genético, disponibilidade de nutrientes, água, radiação, temperatura, população de plantas e controlo de factores bióticos.",
      "A produção sustentável procura aumentar a eficiência do uso de terra, água, nutrientes e energia sem comprometer a capacidade produtiva futura.",
      "A investigação agronómica permite transformar experiências de campo em conhecimento testável e replicável."
    ],

    angola: [
      "Em Angola, a investigação sobre produção vegetal pode apoiar a melhoria de culturas alimentares e comerciais, incluindo milho, mandioca, feijão, arroz, batata, hortícolas, café e outras culturas adaptadas às diferentes zonas agroecológicas.",
      "As diferenças climáticas, edáficas e de disponibilidade hídrica entre as províncias tornam inadequada a utilização automática de uma recomendação agronómica nacional para todas as regiões.",
      "A investigação deve privilegiar ensaios locais, comparação de variedades, fertilidade dos solos, calendários de cultivo, sistemas de consociação, gestão da água e controlo de pragas e doenças.",
      "Uma linha estratégica para Angola é aproximar universidades, institutos de investigação, extensão rural e produtores para transformar resultados experimentais em recomendações utilizáveis no campo."
    ],

    linhasPesquisa: [
      "Melhoramento e avaliação de variedades",
      "Sementes e material de propagação",
      "Fertilização e nutrição vegetal",
      "Sistemas de cultivo",
      "Agricultura de conservação",
      "Manejo integrado de pragas",
      "Produtividade e rendimento",
      "Pós-colheita e perdas",
      "Agricultura de precisão",
      "Adaptação das culturas ao clima"
    ],

    aplicacoes: [
      "Recomendação de variedades adaptadas",
      "Planeamento de calendários agrícolas",
      "Ensaios de fertilização",
      "Redução de perdas pós-colheita",
      "Melhoria da produtividade",
      "Apoio à extensão agrícola",
      "Planeamento de sistemas de produção"
    ],

    perguntas: [
      "Quais variedades apresentam melhor adaptação às diferentes zonas agroecológicas de Angola?",
      "Como aumentar a produtividade sem aumentar proporcionalmente os custos de produção?",
      "Quais práticas conservam melhor a humidade do solo?",
      "Como reduzir perdas entre a colheita e o armazenamento?",
      "Que combinações de culturas são mais adequadas aos pequenos produtores?"
    ],

    referencias: [
      {
        titulo: "Seeds",
        instituicao: "FAO",
        url: "https://www.fao.org/seeds/en/"
      },
      {
        titulo: "Crop production",
        instituicao: "FAO",
        url: "https://www.fao.org/sustainable-agricultural-mechanization/guidelines-operations/crop-production/en/"
      },
      {
        titulo: "Plant Production and Protection",
        instituicao: "FAO",
        url: "https://www.fao.org/plant-production-protection/en/"
      }
    ]
  },

  {
    slug: "producao-animal",
    titulo: "Produção animal",
    icone: "🐄",

    resumo:
      "A produção animal integra genética, nutrição, reprodução, sanidade, bem-estar, ambiente, gestão dos efectivos e economia para desenvolver sistemas pecuários produtivos e sustentáveis.",

    introducao:
      "A produção animal moderna procura compreender o animal dentro do seu sistema de produção. Genética, alimentação, saúde, reprodução, ambiente e gestão estão interligados. Uma deficiência nutricional pode afectar crescimento e reprodução; uma doença pode reduzir produtividade e aumentar custos; e uma escolha genética inadequada pode reduzir a adaptação às condições locais. Por isso, a investigação pecuária deve combinar ciências veterinárias, zootécnicas, ambientais e económicas.",

    importancia: [
      "A genética influencia características produtivas, reprodutivas, resistência e adaptação dos animais.",
      "A alimentação é determinante para crescimento, produção de leite, carne, ovos e eficiência reprodutiva.",
      "A saúde animal possui relação directa com produtividade, segurança alimentar e rendimento das famílias produtoras.",
      "O bem-estar animal deve ser considerado na avaliação de sistemas pecuários sustentáveis.",
      "A investigação deve considerar também disponibilidade de pastagens, água, alimentos e condições climáticas."
    ],

    angola: [
      "Em Angola, a investigação pecuária pode contribuir para compreender a adaptação das diferentes espécies e raças às condições locais.",
      "Linhas de investigação relevantes incluem bovinos, suínos, caprinos, ovinos, aves, apicultura e outros sistemas de produção existentes no país.",
      "A investigação veterinária é igualmente importante para vigilância epidemiológica, prevenção de doenças e redução de perdas.",
      "A avaliação de alimentos disponíveis localmente pode ajudar a formular estratégias de alimentação economicamente acessíveis aos produtores."
    ],

    linhasPesquisa: [
      "Genética animal",
      "Nutrição e alimentação",
      "Pastagens",
      "Reprodução",
      "Sanidade animal",
      "Doenças infecciosas",
      "Bem-estar animal",
      "Produção leiteira",
      "Produção de carne",
      "Avicultura",
      "Sistemas familiares de produção"
    ],

    aplicacoes: [
      "Melhoramento dos efectivos",
      "Formulação de rações",
      "Prevenção de doenças",
      "Gestão reprodutiva",
      "Melhoria da produção leiteira",
      "Melhoria da produção de carne",
      "Planeamento de sistemas pecuários"
    ],

    perguntas: [
      "Quais raças apresentam melhor adaptação às condições angolanas?",
      "Quais alimentos locais podem contribuir para dietas equilibradas?",
      "Como reduzir mortalidade de animais jovens?",
      "Como melhorar índices reprodutivos?",
      "Como aumentar produtividade mantendo a sustentabilidade dos sistemas?"
    ],

    referencias: [
      {
        titulo: "Animal Production",
        instituicao: "FAO",
        url: "https://www.fao.org/animal-production/en/"
      },
      {
        titulo: "Animal Genetics",
        instituicao: "FAO",
        url: "https://www.fao.org/animal-genetics/en/"
      },
      {
        titulo: "Animal Production and Health Division",
        instituicao: "FAO",
        url: "https://www.fao.org/agriculture/animal-production-and-health/en/"
      }
    ]
  },

  {
    slug: "solos",
    titulo: "Solos",
    icone: "🧪",

    resumo:
      "A ciência do solo investiga propriedades físicas, químicas e biológicas, fertilidade, água, degradação, erosão e capacidade dos solos para sustentar diferentes usos.",

    introducao:
      "O solo é um componente fundamental dos sistemas agrícolas. A sua capacidade produtiva depende da interacção entre propriedades físicas, químicas e biológicas. Textura, estrutura, matéria orgânica, reacção do solo, capacidade de retenção de nutrientes, disponibilidade de água e actividade biológica são alguns dos factores que precisam de ser avaliados antes de estabelecer recomendações de manejo.",

    importancia: [
      "A fertilidade do solo depende da disponibilidade e dinâmica dos nutrientes.",
      "A matéria orgânica participa de processos físicos, químicos e biológicos importantes.",
      "A erosão remove principalmente a camada superficial do solo, podendo reduzir produtividade e funções ecológicas.",
      "A compactação pode limitar o crescimento radicular e a infiltração de água.",
      "Salinização, acidificação, perda de nutrientes e contaminação são problemas que devem ser avaliados de acordo com o local."
    ],

    angola: [
      "Angola apresenta grande diversidade de condições edáficas, climáticas e geomorfológicas, pelo que a investigação deve trabalhar com informação espacialmente explícita.",
      "Não é cientificamente correcto atribuir uma característica observada numa região a todas as províncias.",
      "A investigação de solos deve combinar levantamentos de campo, análises laboratoriais, cartografia e técnicas de geoprocessamento.",
      "Uma prioridade nacional é ampliar a disponibilidade de mapas, análises e recomendações de fertilidade adequadas a culturas e localidades específicas."
    ],

    linhasPesquisa: [
      "Fertilidade do solo",
      "Matéria orgânica",
      "Carbono do solo",
      "Erosão",
      "Degradação",
      "Acidez e calagem",
      "Salinidade",
      "Nutrição vegetal",
      "Cartografia pedológica",
      "Sensoriamento remoto aplicado aos solos"
    ],

    aplicacoes: [
      "Mapas de aptidão agrícola",
      "Recomendações de fertilização",
      "Conservação do solo",
      "Planeamento agrícola",
      "Monitorização da degradação",
      "Gestão da água no solo"
    ],

    perguntas: [
      "Quais são os principais factores limitantes dos solos agrícolas em cada zona?",
      "Como manter matéria orgânica em sistemas de pequena escala?",
      "Quais práticas reduzem erosão?",
      "Como melhorar eficiência de fertilizantes?",
      "Como monitorizar a degradação do solo ao longo do tempo?"
    ],

    referencias: [
      {
        titulo: "Global Soil Health",
        instituicao: "FAO Soils Portal",
        url: "https://www.fao.org/soils-portal/soil-degradation-restoration/global-soil-health-indicators-and-assessment/global-soil-health/en/"
      },
      {
        titulo: "Global Soil Health Indicators and Assessment",
        instituicao: "FAO Soils Portal",
        url: "https://www.fao.org/soils-portal/soil-degradation-restoration/global-soil-health-indicators-and-assessment/en/"
      },
      {
        titulo: "Key messages: Soil erosion",
        instituicao: "FAO",
        url: "https://www.fao.org/about/meetings/soil-erosion-symposium/key-messages/en/"
      }
    ]
  },

  {
    slug: "agua-e-irrigacao",
    titulo: "Água e irrigação",
    icone: "💧",

    resumo:
      "A investigação em água e irrigação procura melhorar a disponibilidade, distribuição, eficiência e sustentabilidade do uso da água na agricultura.",

    introducao:
      "A água é um dos principais factores que condicionam a produção agrícola. A investigação nesta área envolve hidrologia, irrigação, drenagem, conservação de água, qualidade da água, gestão de bacias hidrográficas e produtividade da água. Sistemas irrigados podem aumentar a estabilidade da produção, mas exigem planeamento para evitar desperdícios, degradação dos solos, salinização e conflitos pelo recurso.",

    importancia: [
      "A eficiência da irrigação depende do sistema utilizado, do solo, da cultura, do clima e da gestão.",
      "A quantidade de água aplicada deve estar relacionada com as necessidades da cultura e as condições ambientais.",
      "A qualidade da água pode afectar solo, plantas e sistemas de irrigação.",
      "A agricultura de sequeiro também necessita de investigação sobre conservação de água e humidade do solo.",
      "A gestão da água deve considerar a disponibilidade actual e os riscos associados à variabilidade climática."
    ],

    angola: [
      "Angola possui regiões com condições muito diferentes de disponibilidade hídrica, tornando importante o planeamento territorial da irrigação.",
      "Investigação aplicada deve avaliar fontes de água, eficiência dos sistemas, necessidades das culturas e custos energéticos.",
      "Tecnologias de captação de água, irrigação localizada e monitorização da humidade podem ser importantes em determinadas regiões.",
      "A investigação também deve estudar a relação entre irrigação, produtividade e conservação dos solos."
    ],

    linhasPesquisa: [
      "Irrigação localizada",
      "Gestão da água",
      "Balanço hídrico",
      "Drenagem",
      "Qualidade da água",
      "Captação de água",
      "Produtividade da água",
      "Agricultura de sequeiro",
      "Águas subterrâneas",
      "Sensores de humidade"
    ],

    aplicacoes: [
      "Dimensionamento de sistemas de irrigação",
      "Gestão de rega",
      "Redução do desperdício de água",
      "Aumento da produtividade da água",
      "Monitorização de humidade",
      "Planeamento de projectos agrícolas"
    ],

    perguntas: [
      "Quanta água uma determinada cultura necessita numa região?",
      "Qual sistema de irrigação apresenta melhor eficiência?",
      "Como reduzir perdas por evaporação e escoamento?",
      "Como utilizar dados climáticos para decidir quando irrigar?",
      "Como proteger solos irrigados contra salinização?"
    ],

    referencias: [
      {
        titulo: "Agricultural water management",
        instituicao: "FAO",
        url: "https://www.fao.org/land-water/water/agricultural-water-management/en/"
      },
      {
        titulo: "Irrigation management",
        instituicao: "FAO",
        url: "https://www.fao.org/land-water/water/agricultural-water-management/irrigation/1/en"
      },
      {
        titulo: "AQUASTAT",
        instituicao: "FAO",
        url: "https://www.fao.org/aquastat/en/"
      }
    ]
  },

  {
    slug: "clima",
    titulo: "Clima",
    icone: "🌦️",

    resumo:
      "A investigação climática aplicada à agricultura analisa temperatura, precipitação, evapotranspiração, extremos climáticos, variabilidade e alterações climáticas para apoiar decisões agrícolas.",

    introducao:
      "A agricultura está directamente exposta às condições meteorológicas. O momento da sementeira, a disponibilidade de água, a ocorrência de doenças, o risco de seca e o desenvolvimento das culturas dependem de variáveis atmosféricas. A investigação agroclimática transforma observações meteorológicas e dados climáticos em informação útil para planeamento e gestão agrícola.",

    importancia: [
      "A precipitação influencia directamente a agricultura de sequeiro.",
      "Temperatura e radiação condicionam desenvolvimento e produtividade das culturas.",
      "Secas e chuvas intensas podem provocar perdas agrícolas e económicas.",
      "Previsões e informação climática podem apoiar decisões sobre calendário agrícola.",
      "Projecções climáticas são úteis para estudar riscos futuros, mas não devem ser confundidas com observações."
    ],

    angola: [
      "Em Angola, a investigação agroclimática deve considerar a grande diversidade espacial das condições climáticas.",
      "Dados meteorológicos de estações e reanálises podem ser combinados, desde que as diferenças de natureza, resolução e período sejam claramente identificadas.",
      "A investigação pode apoiar sistemas de alerta precoce para seca, excesso de chuva, ondas de calor e outros riscos.",
      "A ligação entre clima e agricultura é especialmente importante para produtores dependentes da chuva."
    ],

    linhasPesquisa: [
      "Precipitação",
      "Temperatura",
      "Evapotranspiração",
      "Secas",
      "Chuvas extremas",
      "Calendários agrícolas",
      "Previsão sazonal",
      "Alterações climáticas",
      "Agrometeorologia",
      "Sistemas de alerta"
    ],

    aplicacoes: [
      "Calendários agrícolas",
      "Alertas de risco climático",
      "Planeamento de irrigação",
      "Selecção de culturas",
      "Gestão de risco",
      "Planeamento territorial"
    ],

    perguntas: [
      "Como varia a precipitação entre as diferentes regiões agrícolas?",
      "Como as alterações climáticas podem afectar culturas importantes?",
      "Quais índices permitem monitorizar seca agrícola?",
      "Como transformar previsão meteorológica em recomendação agrícola?",
      "Quais culturas apresentam maior vulnerabilidade a determinados extremos?"
    ],

    referencias: [
      {
        titulo: "Climate Change",
        instituicao: "FAO",
        url: "https://www.fao.org/climate-change/en/"
      },
      {
        titulo: "Understanding climate-smart agriculture",
        instituicao: "FAO",
        url: "https://www.fao.org/policy-support/policy-themes/climate-smart-agriculture/Understanding-climate-smart-agriculture-/en"
      },
      {
        titulo: "Climate Knowledge Portal",
        instituicao: "World Bank",
        url: "https://climateknowledgeportal.worldbank.org/country/angola"
      }
    ]
  },

  {
    slug: "recursos-geneticos",
    titulo: "Recursos genéticos",
    icone: "🧬",

    resumo:
      "Os recursos genéticos para alimentação e agricultura constituem a diversidade biológica utilizada para conservar, melhorar e adaptar plantas, animais e outros organismos de interesse agropecuário.",

    introducao:
      "A diversidade genética funciona como uma reserva de características biológicas. Variedades locais, cultivares, raças animais, parentes silvestres e outros recursos podem conter características relacionadas com produtividade, resistência a doenças, tolerância a condições ambientais e qualidade nutricional. A conservação destes recursos é, portanto, uma componente estratégica da segurança alimentar.",

    importancia: [
      "A diversidade genética permite desenvolver variedades e populações mais adaptadas.",
      "A conservação reduz o risco associado à perda de variedades locais.",
      "Recursos genéticos podem ser utilizados em programas de melhoramento.",
      "A caracterização genética e fenotípica ajuda a identificar materiais de interesse.",
      "O acesso e uso dos recursos genéticos devem respeitar os instrumentos internacionais aplicáveis."
    ],

    angola: [
      "A investigação angolana pode contribuir para documentar variedades locais, raças adaptadas e recursos biológicos utilizados pelas comunidades.",
      "A caracterização de germoplasma agrícola pode apoiar programas nacionais de melhoramento.",
      "É importante relacionar recursos genéticos com ambiente, práticas tradicionais, produtividade e resistência.",
      "A conservação ex situ deve ser complementada pela conservação in situ e pela manutenção do conhecimento associado às comunidades."
    ],

    linhasPesquisa: [
      "Germoplasma",
      "Bancos de sementes",
      "Variedades locais",
      "Melhoramento genético",
      "Caracterização molecular",
      "Biodiversidade agrícola",
      "Raças animais",
      "Conservação in situ",
      "Conservação ex situ",
      "Biotecnologia"
    ],

    aplicacoes: [
      "Programas de melhoramento",
      "Conservação de variedades locais",
      "Desenvolvimento de sementes",
      "Resiliência climática",
      "Segurança alimentar",
      "Protecção da biodiversidade agrícola"
    ],

    perguntas: [
      "Quais recursos genéticos agrícolas estão presentes em Angola?",
      "Quais variedades tradicionais apresentam características de interesse?",
      "Quais materiais são tolerantes à seca ou a doenças?",
      "Como conservar germoplasma agrícola a longo prazo?",
      "Como ligar bancos de germoplasma aos programas de melhoramento?"
    ],

    referencias: [
      {
        titulo: "Genetic Resources",
        instituicao: "FAO",
        url: "https://www.fao.org/genetic-resources/en"
      },
      {
        titulo: "Seeds and Plant Genetic Resources",
        instituicao: "FAO",
        url: "https://www.fao.org/agriculture/crops/core-themes/theme/seeds-pgr/en"
      },
      {
        titulo: "International Treaty on Plant Genetic Resources",
        instituicao: "FAO",
        url: "https://www.fao.org/plant-treaty/en/"
      }
    ]
  },

  {
    slug: "aquicultura",
    titulo: "Aquicultura",
    icone: "🐟",

    resumo:
      "A aquicultura investiga a produção controlada de organismos aquáticos, incluindo alimentação, reprodução, qualidade da água, sanidade, genética, sistemas de cultivo e sustentabilidade ambiental.",

    introducao:
      "A aquicultura tornou-se uma componente importante dos sistemas alimentares e das economias rurais e costeiras. A produção aquícola exige conhecimento sobre biologia das espécies, qualidade da água, alimentação, densidade de cultivo, reprodução, prevenção de doenças e gestão de resíduos. A investigação é essencial para adaptar sistemas às condições locais.",

    importancia: [
      "A qualidade da água influencia directamente sobrevivência, crescimento e saúde dos organismos cultivados.",
      "A alimentação representa uma componente crítica dos custos e do desempenho produtivo.",
      "A densidade de cultivo deve ser compatível com as condições do sistema.",
      "A prevenção de doenças é preferível à resposta tardia a surtos.",
      "A sustentabilidade exige avaliação económica e ambiental do sistema produtivo."
    ],

    angola: [
      "Angola apresenta oportunidades de investigação tanto em sistemas continentais como costeiros, dependendo das espécies e condições locais.",
      "A investigação pode avaliar espécies adequadas, alimentação disponível localmente, qualidade da água, reprodução e modelos de produção de pequena escala.",
      "Sistemas aquícolas devem ser avaliados quanto ao consumo de água, efluentes, alimentação e impactos ambientais.",
      "A integração entre aquicultura e agricultura pode constituir uma linha de investigação relevante em determinados contextos."
    ],

    linhasPesquisa: [
      "Nutrição aquícola",
      "Qualidade da água",
      "Reprodução",
      "Sanidade",
      "Genética",
      "Sistemas intensivos",
      "Sistemas extensivos",
      "Aquicultura familiar",
      "Alimentação alternativa",
      "Sustentabilidade"
    ],

    aplicacoes: [
      "Produção de pescado",
      "Segurança alimentar",
      "Diversificação de rendimento",
      "Sistemas integrados",
      "Gestão de viveiros",
      "Planeamento de unidades aquícolas"
    ],

    perguntas: [
      "Quais espécies apresentam melhor desempenho nas condições locais?",
      "Quais alimentos locais podem ser utilizados de forma segura?",
      "Como reduzir mortalidade em viveiros?",
      "Qual é a relação entre qualidade da água e produtividade?",
      "Quais modelos de aquicultura são economicamente viáveis para pequenos produtores?"
    ],

    referencias: [
      {
        titulo: "Guidelines for Sustainable Aquaculture",
        instituicao: "FAO",
        ano: "2025",
        url: "https://www.fao.org/guidelines-sustainable-aquaculture/"
      },
      {
        titulo: "State of World Fisheries and Aquaculture 2026",
        instituicao: "FAO",
        ano: "2026",
        url: "https://www.fao.org/publications/fao-flagship-publications/the-state-of-world-fisheries-and-aquaculture/en"
      }
    ]
  },

  {
    slug: "apicultura",
    titulo: "Apicultura",
    icone: "🐝",

    resumo:
      "A investigação em apicultura estuda as abelhas, gestão das colónias, produção de mel e cera, sanidade, alimentação, ambiente e o papel dos polinizadores nos sistemas agrícolas.",

    introducao:
      "A apicultura possui importância económica, ecológica e agrícola. Além do mel, as colónias produzem cera, própolis, pólen e outros produtos, enquanto as abelhas prestam serviços de polinização. A investigação moderna deve analisar simultaneamente produção, saúde das colónias, biodiversidade, disponibilidade floral, uso de pesticidas e qualidade dos produtos.",

    importancia: [
      "A polinização influencia a reprodução de numerosas espécies vegetais.",
      "A saúde das colónias afecta directamente a produção e a capacidade de prestação de serviços de polinização.",
      "A disponibilidade de plantas floríferas determina recursos alimentares para as abelhas.",
      "Práticas agrícolas que prejudicam polinizadores podem afectar ecossistemas e determinadas culturas.",
      "A qualidade do mel depende de factores ligados à origem floral, colheita, processamento, armazenamento e higiene."
    ],

    angola: [
      "A investigação sobre apicultura possui particular relevância em Angola devido à história e ao potencial do sector.",
      "A FAO documenta experiências e recomendações relacionadas com apicultura e polinizadores em Angola, incluindo referências a Huambo, Huíla e Benguela.",
      "Linhas prioritárias podem incluir sanidade das colónias, qualidade do mel, flora apícola, uso responsável de pesticidas e organização das cadeias de valor.",
      "A investigação deve também valorizar o conhecimento tradicional dos apicultores e a participação dos jovens."
    ],

    linhasPesquisa: [
      "Sanidade das abelhas",
      "Flora apícola",
      "Qualidade do mel",
      "Cera",
      "Polinização",
      "Manejo das colónias",
      "Apicultura sustentável",
      "Mercados",
      "Pesticidas e polinizadores",
      "Biodiversidade"
    ],

    aplicacoes: [
      "Melhoria da produção de mel",
      "Protecção de polinizadores",
      "Polinização agrícola",
      "Controlo de qualidade",
      "Formação de apicultores",
      "Desenvolvimento de cadeias de valor"
    ],

    perguntas: [
      "Quais são as principais plantas de interesse apícola em diferentes regiões de Angola?",
      "Quais problemas sanitários afectam as colónias?",
      "Como melhorar a qualidade e conservação do mel?",
      "Como reduzir riscos dos pesticidas para polinizadores?",
      "Quais modelos de negócio podem tornar a apicultura mais atractiva para jovens?"
    ],

    referencias: [
      {
        titulo: "Pollinator-friendly agricultural production in Angola",
        instituicao: "FAO",
        ano: "2024",
        url: "https://www.fao.org/pollination/resources/knowledge/knowledge-product-detail/pollinator-friendly-agricultural-production-in-angola--key-evidences--success-stories-and-recommendations/en"
      },
      {
        titulo: "Good beekeeping practices",
        instituicao: "FAO",
        ano: "2020",
        url: "https://www.fao.org/family-farming/detail/en/c/1755582/"
      },
      {
        titulo: "Good beekeeping practices for sustainable apiculture",
        instituicao: "FAO / Apimondia / CAAS / IZSLT",
        ano: "2021",
        url: "https://www.fao.org/family-farming/detail/en/c/1442505/"
      }
    ]
  },

  {
    slug: "cafe",
    titulo: "Café",
    icone: "☕",

    resumo:
      "A investigação do café abrange genética, sistemas de produção, nutrição, sanidade, colheita, processamento, qualidade, clima e mercado.",

    introducao:
      "O café é uma cultura em que qualidade final resulta de uma cadeia de decisões. Variedade, ambiente, práticas agronómicas, maturação dos frutos, colheita, processamento, secagem, armazenamento e transporte influenciam o produto final. A investigação deve portanto acompanhar toda a cadeia, desde o campo até à bebida.",

    importancia: [
      "A escolha da variedade influencia produtividade, adaptação e características de qualidade.",
      "Práticas agronómicas afectam vigor das plantas e rendimento.",
      "A colheita de frutos em diferentes estados de maturação pode alterar a qualidade.",
      "Processamento inadequado pode introduzir defeitos e perdas.",
      "Secagem e armazenamento são etapas críticas para preservar qualidade e segurança."
    ],

    angola: [
      "Angola possui tradição histórica na produção de café e mantém potencial para investigação e recuperação da fileira.",
      "A investigação pode concentrar-se em variedades, adaptação às condições locais, produtividade, doenças, processamento e qualidade.",
      "A localização de áreas de produção deve ser analisada juntamente com clima, solo, altitude e sistemas de cultivo.",
      "A investigação aplicada deve aproximar produtores, viveiros, técnicos, instituições científicas e indústria."
    ],

    linhasPesquisa: [
      "Robusta e Arábica",
      "Melhoramento genético",
      "Doenças do cafeeiro",
      "Nutrição",
      "Manejo de sombra",
      "Colheita",
      "Processamento",
      "Secagem",
      "Qualidade de bebida",
      "Cadeia de valor"
    ],

    aplicacoes: [
      "Selecção de variedades",
      "Melhoria de viveiros",
      "Manejo de lavouras",
      "Controlo de doenças",
      "Melhoria da qualidade",
      "Redução de perdas pós-colheita",
      "Valorização do café angolano"
    ],

    perguntas: [
      "Quais variedades estão melhor adaptadas às regiões produtoras?",
      "Como clima e solo influenciam produtividade e qualidade?",
      "Quais doenças representam maior risco?",
      "Como melhorar secagem e processamento?",
      "Como aumentar o valor do café produzido em Angola?"
    ],

    referencias: [
      {
        titulo: "Post Harvest Handling and Processing of Green Coffee in African Countries",
        instituicao: "FAO",
        url: "https://www.fao.org/4/x6939e/X6939e03.htm"
      },
      {
        titulo: "Coffee quality and processing",
        instituicao: "FAO",
        url: "https://www.fao.org/4/x6938e/x6938e08.htm"
      },
      {
        titulo: "Arabica coffee manual",
        instituicao: "FAO",
        url: "https://www.fao.org/4/ae939e/ae939e08.htm"
      },
      {
        titulo:
          "The Coffee Processing Method Had a More Pronounced Effect...",
        instituicao: "FAO AGRIS",
        ano: "2022",
        url: "https://agris.fao.org/search/en/providers/122436/records/67597e48c7a957febdf8fcc5"
      }
    ]
  },

  {
    slug: "florestas",
    titulo: "Florestas",
    icone: "🌳",

    resumo:
      "A investigação florestal estuda recursos florestais, biodiversidade, restauração, uso sustentável da terra e sistemas agroflorestais que integram árvores com culturas e/ou animais.",

    introducao:
      "As fronteiras entre agricultura, floresta e conservação são cada vez mais importantes para a investigação agropecuária. Sistemas agroflorestais podem integrar árvores, culturas e animais numa mesma paisagem, procurando combinar produção com conservação de recursos naturais. A escolha das espécies, disposição espacial, competição por água e nutrientes e objectivos económicos devem ser avaliados de acordo com cada contexto.",

    importancia: [
      "Árvores podem contribuir para conservação do solo e água em determinados sistemas.",
      "Sistemas agroflorestais podem diversificar produtos e fontes de rendimento.",
      "A vegetação arbórea pode fornecer frutos, madeira, forragem, sombra e outros produtos.",
      "A integração deve ser planeada porque árvores e culturas também podem competir por recursos.",
      "A restauração de paisagens agrícolas degradadas requer conhecimento ecológico e socioeconómico."
    ],

    angola: [
      "Em Angola, a investigação pode estudar sistemas agroflorestais adequados a diferentes zonas ecológicas.",
      "É importante identificar espécies úteis sem recomendar indiscriminadamente espécies que possam gerar impactos ecológicos ou económicos.",
      "A investigação deve avaliar sobrevivência, crescimento, competição, benefícios para o solo, rendimento e aceitação pelos agricultores.",
      "Sistemas silvopastoris e agrossilviculturais podem constituir linhas importantes de investigação aplicada."
    ],

    linhasPesquisa: [
      "Agroflorestas",
      "Silvopastoril",
      "Restauração",
      "Biodiversidade",
      "Carbono",
      "Produtos florestais",
      "Conservação do solo",
      "Gestão da paisagem",
      "Espécies nativas",
      "Sistemas integrados"
    ],

    aplicacoes: [
      "Restauração de áreas degradadas",
      "Diversificação de rendimento",
      "Conservação de recursos naturais",
      "Produção agroflorestal",
      "Sistemas silvopastoris",
      "Resiliência climática"
    ],

    perguntas: [
      "Quais espécies arbóreas são adequadas a cada sistema produtivo?",
      "Como árvores e culturas interagem em diferentes espaçamentos?",
      "Quais sistemas melhoram a conservação do solo?",
      "Quais produtos agroflorestais têm potencial económico?",
      "Como integrar restauração ambiental e produção agrícola?"
    ],

    referencias: [
      {
        titulo: "Agroforestry",
        instituicao: "FAO",
        url: "https://www.fao.org/agroforestry/en"
      },
      {
        titulo: "Overview of agroforestry",
        instituicao: "FAO",
        url: "https://www.fao.org/agroforestry/about-agroforestry/overview/"
      },
      {
        titulo: "Agroforestry Module",
        instituicao: "FAO",
        url: "https://www.fao.org/sustainable-forest-management-toolbox/modules/agroforestry/1/en"
      }
    ]
  },

  {
    slug: "sanidade",
    titulo: "Sanidade",
    icone: "🦠",

    resumo:
      "A investigação em sanidade agropecuária estuda pragas, doenças, agentes patogénicos, saúde animal e vegetal, vigilância, prevenção e estratégias integradas de controlo.",

    introducao:
      "A saúde das plantas e dos animais constitui uma condição essencial para a segurança alimentar e a produtividade. Pragas e doenças podem provocar perdas directas de produção, aumentar custos e afectar mercados. A investigação moderna privilegia diagnóstico, vigilância, prevenção e manejo integrado, procurando reduzir dependência de intervenções inadequadas e proteger organismos benéficos e ambiente.",

    importancia: [
      "O diagnóstico correcto é fundamental para seleccionar medidas de controlo adequadas.",
      "A vigilância permite detectar alterações antes que se transformem em surtos de grande dimensão.",
      "O manejo integrado combina diferentes métodos de prevenção e controlo.",
      "O uso inadequado de pesticidas pode afectar organismos benéficos e aumentar riscos de resistência.",
      "A saúde animal deve ser articulada com biossegurança, vigilância epidemiológica e abordagem One Health."
    ],

    angola: [
      "Angola necessita de investigação adaptada às suas culturas, sistemas pecuários, condições climáticas e cadeias de comercialização.",
      "A criação de bases de dados sobre pragas e doenças pode melhorar a vigilância territorial.",
      "A investigação universitária e institucional pode contribuir para identificação de agentes, métodos de diagnóstico e estratégias de prevenção.",
      "A informação deve chegar aos produtores através de extensão rural e ferramentas digitais."
    ],

    linhasPesquisa: [
      "Fitopatologia",
      "Entomologia agrícola",
      "Virologia vegetal",
      "Bacteriologia",
      "Parasitologia",
      "Epidemiologia",
      "Biossegurança",
      "Resistência a pesticidas",
      "Saúde animal",
      "One Health"
    ],

    aplicacoes: [
      "Diagnóstico",
      "Sistemas de alerta",
      "Vigilância epidemiológica",
      "Manejo integrado",
      "Redução de perdas",
      "Protecção de organismos benéficos"
    ],

    perguntas: [
      "Quais são as principais pragas e doenças das culturas em cada região?",
      "Como as mudanças climáticas alteram o risco fitossanitário?",
      "Quais métodos de controlo são mais eficientes e seguros?",
      "Como detectar surtos rapidamente?",
      "Como integrar saúde vegetal, animal, humana e ambiental?"
    ],

    referencias: [
      {
        titulo: "Plant health",
        instituicao: "FAO",
        url: "https://www.fao.org/one-health/areas-of-work/plant-health"
      },
      {
        titulo: "Animal Production and Health",
        instituicao: "FAO",
        url: "https://www.fao.org/agriculture/animal-production-and-health/en/"
      }
    ]
  },

  {
    slug: "agricultura-digital",
    titulo: "Agricultura digital",
    icone: "🤖",

    resumo:
      "A agricultura digital utiliza dados, sensores, satélites, inteligência artificial, sistemas de informação geográfica, conectividade e automação para melhorar decisões e eficiência dos sistemas agropecuários.",

    introducao:
      "A transformação digital está a alterar a forma como os agricultores, técnicos, investigadores e governos recolhem e utilizam informação. Sensores podem monitorizar condições do solo; satélites podem acompanhar vegetação; sistemas de informação geográfica permitem cruzar território e dados; inteligência artificial pode identificar padrões e apoiar previsões. Entretanto, tecnologia não substitui conhecimento agronómico e deve ser adaptada às condições reais de utilização.",

    importancia: [
      "Dados de qualidade são a base de sistemas digitais úteis.",
      "Sensoriamento remoto permite observar grandes áreas sem necessidade de visitar cada parcela.",
      "Inteligência artificial pode apoiar classificação, previsão e detecção de padrões.",
      "Conectividade e energia são factores determinantes para adopção de tecnologias digitais.",
      "Soluções devem considerar custos, competências digitais, manutenção e realidade dos pequenos produtores."
    ],

    angola: [
      "Angola possui oportunidade para desenvolver plataformas nacionais que integrem dados agrícolas, climáticos, pedológicos e territoriais.",
      "Sistemas digitais podem aproximar produtores, técnicos, universidades, investigação e administração pública.",
      "O AGROINOVA pode funcionar como uma camada de integração entre conhecimento científico, dados oficiais e ferramentas de decisão.",
      "A inteligência artificial deve utilizar fontes verificáveis e indicar claramente a origem dos dados utilizados."
    ],

    linhasPesquisa: [
      "Inteligência artificial",
      "Teledetecção",
      "Drones",
      "SIG",
      "Sensores IoT",
      "Agricultura de precisão",
      "Modelação agrícola",
      "Dados climáticos",
      "Plataformas digitais",
      "Sistemas de apoio à decisão"
    ],

    aplicacoes: [
      "Mapas agrícolas",
      "Monitorização de culturas",
      "Detecção de stress vegetal",
      "Gestão de irrigação",
      "Agricultura de precisão",
      "Alertas agrícolas",
      "Sistemas de recomendação"
    ],

    perguntas: [
      "Como aplicar IA a problemas agrícolas específicos de Angola?",
      "Quais dados são necessários para recomendações agrícolas confiáveis?",
      "Como utilizar imagens de satélite para monitorizar culturas?",
      "Como reduzir a exclusão digital dos pequenos produtores?",
      "Como garantir transparência e responsabilidade no uso de IA?"
    ],

    referencias: [
      {
        titulo: "Digital agriculture and AI innovation roadmap",
        instituicao: "FAO",
        ano: "2025",
        url: "https://www.fao.org/e-agriculture/documents-and-publications/digital-agriculture-and-ai-innovation-roadmap"
      },
      {
        titulo: "Smart Farming",
        instituicao: "FAO",
        ano: "2026",
        url: "https://www.fao.org/land-water/home/smart-farming---the-next-revolution-of-agrifood-systems/en/"
      },
      {
        titulo: "Leveraging automation and digitalization for precision agriculture",
        instituicao: "FAO",
        ano: "2022",
        url: "https://www.fao.org/agrifood-economics/publications/detail/en/c/1618844/"
      },
      {
        titulo: "Transforming agriculture with digital automation",
        instituicao: "FAO",
        ano: "2022",
        url: "https://www.fao.org/agrifood-economics/publications/detail/en/c/1613485/"
      }
    ]
  }
];

export function obterAreaInvestigacao(
  slug: string
): AreaInvestigacao | undefined {
  return areasInvestigacao.find(
    (area) => area.slug === slug
  );
}