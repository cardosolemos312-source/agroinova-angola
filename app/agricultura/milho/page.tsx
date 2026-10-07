"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Provincia = {
  nome: string;
  regiao: string;
  sistema: string;
  solo: string;
  clima: string;
  foco: string;
  observacao: string;
};

type Imagem = {
  src: string;
  href: string;
  alt: string;
  legenda: string;
  fonte: string;
};

const provincias: Provincia[] = [
  {
    nome: "Bengo",
    regiao: "Norte",
    sistema: "Agricultura familiar e produção diversificada",
    solo: "Preferir solos bem drenados e com fertilidade suficiente, evitando zonas permanentemente encharcadas.",
    clima:
      "O calendário deve acompanhar a distribuição local das chuvas e a disponibilidade de água.",
    foco:
      "Maneio da água, fertilidade do solo, controlo de infestantes e escolha de materiais adaptados.",
    observacao:
      "A recomendação concreta de variedade deve considerar a disponibilidade legal de semente e os resultados de ensaios locais.",
  },

  {
    nome: "Benguela",
    regiao: "Centro",
    sistema: "Agricultura familiar, comercial e sistemas com apoio de irrigação",
    solo: "Em áreas secas, a conservação da humidade e a fertilidade do solo são determinantes.",
    clima:
      "A irregularidade da precipitação aumenta a importância do calendário de plantio e da tolerância ao défice hídrico.",
    foco:
      "Eficiência no uso da água, sementes adaptadas, fertilidade e conservação do solo.",
    observacao:
      "Há experiências documentadas de produção de milho em Ganda, demonstrando a importância da assistência técnica e do acesso a insumos.",
  },

  {
    nome: "Bié",
    regiao: "Centro",
    sistema: "Agricultura familiar e produção de cereais",
    solo: "Solos de boa drenagem e com matéria orgânica favorecem o desenvolvimento radicular.",
    clima:
      "O calendário agrícola depende fortemente da época chuvosa e da ocorrência de períodos secos durante o ciclo.",
    foco:
      "Sementes adaptadas, fertilidade, controlo de infestantes e conservação pós-colheita.",
    observacao:
      "Estudos do CIMMYT identificaram no Bié materiais como Vermelho, ZM521, SAM3 e Amarelo em áreas pesquisadas.",
  },

  {
    nome: "Cabinda",
    regiao: "Norte",
    sistema: "Agricultura familiar e sistemas diversificados",
    solo: "É importante assegurar drenagem adequada e evitar compactação.",
    clima:
      "A maior disponibilidade de humidade pode favorecer o crescimento, mas também exige atenção a doenças foliares.",
    foco:
      "Drenagem, rotação de culturas, sanidade e escolha de materiais adaptados.",
    observacao:
      "Não se deve transferir automaticamente resultados de outras províncias para Cabinda sem validação local.",
  },

  {
    nome: "Cuando",
    regiao: "Leste",
    sistema: "Agricultura familiar",
    solo: "A avaliação local da fertilidade e da capacidade de retenção de água é importante.",
    clima:
      "O calendário deve considerar a duração efectiva da estação chuvosa.",
    foco:
      "Semente de qualidade, conservação da humidade e fertilidade do solo.",
    observacao:
      "Dados históricos de antigas configurações administrativas não devem ser redistribuídos automaticamente pelas actuais províncias.",
  },

  {
    nome: "Cubango",
    regiao: "Leste",
    sistema: "Agricultura familiar",
    solo: "Necessita de avaliação da fertilidade, matéria orgânica e drenagem.",
    clima:
      "A gestão do risco de períodos secos é relevante para sistemas de sequeiro.",
    foco:
      "Adaptação ao clima, sementes e conservação do solo.",
    observacao:
      "Recomendações específicas devem ser validadas através de ensaios e assistência técnica local.",
  },

  {
    nome: "Cuanza Norte",
    regiao: "Norte",
    sistema: "Agricultura familiar e sistemas diversificados",
    solo: "Solos bem drenados e com boa estrutura favorecem a cultura.",
    clima:
      "A precipitação e a humidade exigem atenção ao momento de plantio e à pressão de doenças.",
    foco:
      "Maneio do solo, rotação, sanidade e qualidade da semente.",
    observacao:
      "Estudos históricos do CIMMYT encontraram limitações de acesso a informação e semente melhorada em áreas pesquisadas.",
  },

  {
    nome: "Cuanza Sul",
    regiao: "Centro",
    sistema: "Agricultura familiar, comercial e produção de sementes",
    solo: "A fertilidade e a drenagem devem ser avaliadas antes do plantio.",
    clima:
      "A variabilidade das chuvas torna interessante trabalhar com materiais de ciclo e adaptação adequados ao local.",
    foco:
      "Produção de semente, materiais tolerantes à seca e manejo da fertilidade.",
    observacao:
      "Há documentação do CIMMYT/IIA sobre ensaios, produção de sementes e materiais como ZM309, ZM521 e ZM523 no Cuanza Sul.",
  },

  {
    nome: "Cunene",
    regiao: "Sul",
    sistema:
      "Agricultura familiar e sistemas sujeitos a elevada variabilidade hídrica",
    solo: "A conservação da água e da matéria orgânica é particularmente importante.",
    clima:
      "O risco de défice hídrico deve ser considerado no calendário e na escolha do material genético.",
    foco:
      "Tolerância à seca, conservação da humidade e segurança da semente.",
    observacao:
      "A escolha de variedade deve ser baseada em materiais realmente disponíveis e recomendados para a zona.",
  },

  {
    nome: "Huambo",
    regiao: "Centro",
    sistema: "Agricultura familiar, comercial e investigação",
    solo: "Solos de boa estrutura e drenagem, com correcção da fertilidade quando necessária.",
    clima:
      "O Planalto Central apresenta condições históricas favoráveis à produção de milho, mas o calendário depende das chuvas.",
    foco:
      "Sementes melhoradas, fertilidade, rotação de culturas, sanidade e investigação.",
    observacao:
      "A estação experimental do IIA em Chianga foi utilizada em ensaios de milho e há documentação sobre agricultores e materiais avaliados na região.",
  },

  {
    nome: "Huíla",
    regiao: "Sul",
    sistema: "Agricultura familiar e produção comercial",
    solo: "É essencial avaliar fertilidade, matéria orgânica, pH e drenagem antes da recomendação de fertilizantes.",
    clima:
      "A gestão do risco de períodos secos é relevante para sistemas de sequeiro.",
    foco:
      "Materiais adaptados, eficiência no uso da água e fertilidade do solo.",
    observacao:
      "Existem experiências documentadas de produção de milho e iniciativas ligadas à cadeia de sementes na província.",
  },

  {
    nome: "Icolo e Bengo",
    regiao: "Norte",
    sistema: "Agricultura familiar, periurbana e comercial",
    solo: "A escolha do terreno deve considerar drenagem, fertilidade e pressão de uso do solo.",
    clima:
      "A irregularidade da água pode exigir estratégias de conservação e irrigação onde economicamente viável.",
    foco:
      "Eficiência hídrica, fertilidade e integração com mercados próximos.",
    observacao:
      "Não devem ser atribuídos dados históricos de Luanda ou de outra unidade à actual província sem fonte específica.",
  },

  {
    nome: "Luanda",
    regiao: "Norte",
    sistema: "Agricultura periurbana e comercial",
    solo: "A análise do solo e da qualidade da água é especialmente importante em áreas periurbanas.",
    clima:
      "A disponibilidade de água é um factor crítico para sistemas agrícolas.",
    foco:
      "Irrigação, segurança da água, qualidade do solo e produção orientada ao mercado.",
    observacao:
      "A página não atribui valores de produção provincial sem quadro oficial específico.",
  },

  {
    nome: "Lunda Norte",
    regiao: "Leste",
    sistema: "Agricultura familiar",
    solo: "Avaliar drenagem, matéria orgânica e disponibilidade de nutrientes.",
    clima:
      "A maior humidade exige atenção ao manejo e à sanidade da cultura.",
    foco:
      "Semente de qualidade, sanidade e conservação do solo.",
    observacao:
      "Estudos históricos identificaram limitações no acesso a sementes melhoradas em algumas áreas pesquisadas.",
  },

  {
    nome: "Lunda Sul",
    regiao: "Leste",
    sistema: "Agricultura familiar",
    solo: "Preferir áreas bem drenadas e evitar compactação.",
    clima:
      "A gestão do excesso de água e das doenças deve acompanhar o calendário local.",
    foco:
      "Drenagem, fertilidade, rotação e sanidade.",
    observacao:
      "As recomendações devem ser confirmadas por ensaios locais e assistência técnica.",
  },

  {
    nome: "Malanje",
    regiao: "Norte",
    sistema: "Agricultura familiar e comercial",
    solo: "A conservação da estrutura e a reposição de nutrientes são importantes.",
    clima:
      "A distribuição das chuvas deve orientar o momento de plantio.",
    foco:
      "Semente melhorada, fertilidade, controlo de infestantes e conservação pós-colheita.",
    observacao:
      "Estudos históricos do CIMMYT identificaram dificuldades de acesso a sementes tolerantes à seca em áreas pesquisadas da região.",
  },

  {
    nome: "Moxico",
    regiao: "Leste",
    sistema: "Agricultura familiar",
    solo: "Avaliar fertilidade, matéria orgânica e drenagem.",
    clima:
      "A cultura deve ser instalada dentro de uma janela agrícola adequada à precipitação local.",
    foco:
      "Sementes adaptadas, fertilidade e conservação da humidade.",
    observacao:
      "Não devem ser transferidos dados de antigas configurações territoriais para a actual província sem documentação oficial.",
  },

  {
    nome: "Moxico Leste",
    regiao: "Leste",
    sistema: "Agricultura familiar",
    solo: "Recomenda-se diagnóstico local do solo antes de estabelecer um programa de fertilização.",
    clima:
      "O calendário deve ser definido a partir da precipitação efectiva da zona.",
    foco:
      "Adaptação local, qualidade da semente e conservação dos recursos naturais.",
    observacao:
      "Por ser uma configuração provincial actual, os dados históricos devem ser tratados com cuidado e não redistribuídos sem base estatística.",
  },

  {
    nome: "Namibe",
    regiao: "Sul",
    sistema: "Produção dependente de disponibilidade hídrica",
    solo: "A água, salinidade, fertilidade e drenagem devem ser avaliadas antes da produção.",
    clima:
      "A limitação hídrica torna a gestão da água central para a produção.",
    foco:
      "Irrigação eficiente, escolha de materiais e fertilidade.",
    observacao:
      "A produção de milho deve ser avaliada de acordo com a disponibilidade real de água e o sistema produtivo.",
  },

  {
    nome: "Uíge",
    regiao: "Norte",
    sistema: "Agricultura familiar e sistemas diversificados",
    solo: "A conservação da matéria orgânica e da estrutura do solo é importante.",
    clima:
      "A humidade elevada pode aumentar a pressão de algumas doenças e dificultar a secagem.",
    foco:
      "Sanidade, drenagem, rotação e pós-colheita.",
    observacao:
      "As recomendações devem considerar a realidade local e a disponibilidade de sementes.",
  },

  {
    nome: "Zaire",
    regiao: "Norte",
    sistema: "Agricultura familiar e produção diversificada",
    solo: "Preferir solos com boa drenagem e capacidade adequada de retenção de água.",
    clima:
      "O calendário deve acompanhar as chuvas locais.",
    foco:
      "Manejo do solo, sementes, sanidade e pós-colheita.",
    observacao:
      "Não são apresentados números provinciais sem confirmação em fonte estatística oficial.",
  },
];

const imagens: Imagem[] = [
  {
    src: "https://www.worldbank.org/content/dam/photos/780x439/2024/mar/ag-agriculture-1.jpg",
    href: "https://www.worldbank.org/pt/news/feature/2024/03/28/prioritizing-afe-angolan-agriculture-to-unlock-economic-diversification",
    alt: "Agricultora angolana segurando espigas de milho após a colheita",
    legenda:
      "Produção e colheita de milho em Angola, documentadas pelo Banco Mundial.",
    fonte: "Banco Mundial, 2024",
  },
  {
    src: "https://www.undp.org/sites/g/files/zskgke326/files/2025-03/3-solarkitchen_cacula.jpg.jpg",
    href: "https://www.undp.org/angola/stories/women-right-energy-sustainable-development",
    alt: "Agricultora trabalhando numa lavoura de milho em Cacula, Huíla",
    legenda:
      "Agricultora em campo de milho em Cacula, província da Huíla.",
    fonte: "PNUD Angola, 2025",
  },
  {
    src: "https://static.africa-press.net/angola/sites/65/2022/06/img-62977e289d6c0.jpg",
    href: "https://www.africa-press.net/angola/all-news/municipality-of-caala-predicts-harvest-of-900-thousand-tons",
    alt: "Agricultores junto a grande quantidade de espigas de milho em Caála",
    legenda:
      "Colheita de milho documentada no município da Caála, província do Huambo.",
    fonte: "Africa-Press Angola, 2022",
  },
  {
    src: "https://valoreconomico.co.ao/uploads/images/2019/10/huila-lanca-milho-hibrido-1570719451.jpg",
    href: "https://valoreconomico.co.ao/artigo/huila-lanca-milho-hibrido",
    alt: "Agricultoras trabalhando numa plantação de milho na Huíla",
    legenda:
      "Trabalho de campo numa cultura de milho na província da Huíla.",
    fonte: "Valor Económico Angola, 2019",
  },
];

const materiais = [
  {
    nome: "ZM521",
    tipo: "OPV",
    caracteristicas:
      "Material de ciclo relativamente precoce, grão branco, associado à tolerância à seca e eficiência no uso de azoto.",
    observacao:
      "O catálogo do CIMMYT descreve o material para ambientes da África Austral. A disponibilidade comercial em Angola deve ser confirmada localmente.",
  },
  {
    nome: "ZM309",
    tipo: "OPV",
    caracteristicas:
      "Material documentado em Angola e associado a ciclo mais precoce em experiências relatadas por agricultores.",
    observacao:
      "A agricultora Dominga Ngueve, perto da Chianga, relatou preferência pelo ZM309 devido à precocidade.",
  },
  {
    nome: "ZM523",
    tipo: "OPV",
    caracteristicas:
      "Material documentado em programas de produção de sementes no Cuanza Sul.",
    observacao:
      "A documentação do CIMMYT descreveu produção de semente básica por uma cooperativa e produção em propriedades de sementes.",
  },
  {
    nome: "SAM3",
    tipo: "Material documentado em estudos",
    caracteristicas:
      "Material identificado em levantamentos históricos de adopção de milho tolerante à seca.",
    observacao:
      "Não deve ser apresentado como recomendação comercial actual sem confirmação de registo e disponibilidade.",
  },
  {
    nome: "Catete",
    tipo: "Variedade local/documentada",
    caracteristicas:
      "Material tradicionalmente identificado em levantamentos sobre milho em Angola.",
    observacao:
      "A presença histórica em estudos não significa disponibilidade comercial actual.",
  },
  {
    nome: "Branco Redondo",
    tipo: "Variedade local/documentada",
    caracteristicas:
      "Material local amplamente documentado em estudos históricos de sistemas de produção de milho.",
    observacao:
      "Os dados de estudos antigos servem para caracterização histórica, não para indicar participação actual.",
  },
  {
    nome: "Amarelo",
    tipo: "Material local/documentado",
    caracteristicas:
      "Material identificado em levantamentos de variedades cultivadas em Angola.",
    observacao:
      "A recomendação agronómica deve ser baseada em ensaios e disponibilidade local.",
  },
  {
    nome: "Vermelho",
    tipo: "Material documentado",
    caracteristicas:
      "Material identificado em levantamentos realizados no Bié e Huambo.",
    observacao:
      "O seu registo em estudos não substitui uma recomendação oficial actual.",
  },
];

const etapas = [
  {
    titulo: "1. Diagnóstico da área",
    texto:
      "Antes da sementeira, avaliar o solo, drenagem, histórico da área, disponibilidade de água, infestantes e culturas anteriores.",
  },
  {
    titulo: "2. Preparação do solo",
    texto:
      "A preparação deve procurar uma boa cama de sementeira sem provocar degradação desnecessária. Em terrenos declivosos, a conservação do solo deve ser considerada.",
  },
  {
    titulo: "3. Escolha da semente",
    texto:
      "Usar semente de qualidade, de origem conhecida e adequada à zona agroecológica. A variedade deve corresponder ao objectivo do produtor e ao risco climático.",
  },
  {
    titulo: "4. Sementeira",
    texto:
      "A data deve acompanhar o início efectivo das chuvas ou a disponibilidade de irrigação. A população de plantas deve respeitar a recomendação específica do material utilizado.",
  },
  {
    titulo: "5. Fertilidade",
    texto:
      "A fertilização deve partir, sempre que possível, de diagnóstico do solo. O azoto é importante para o milho, mas a estratégia deve considerar também fósforo, potássio e outros nutrientes quando necessários.",
  },
  {
    titulo: "6. Controlo de infestantes",
    texto:
      "O período inicial de crescimento é particularmente importante. O produtor deve evitar que as infestantes concorram com as plantas jovens por água, luz e nutrientes.",
  },
  {
    titulo: "7. Sanidade",
    texto:
      "A lavoura deve ser observada regularmente para detectar pragas, doenças, sintomas nutricionais e danos causados por condições climáticas.",
  },
  {
    titulo: "8. Colheita",
    texto:
      "A colheita deve considerar a maturidade fisiológica, o destino do produto e a possibilidade de secagem adequada para reduzir perdas.",
  },
  {
    titulo: "9. Pós-colheita",
    texto:
      "A secagem, selecção, armazenamento e controlo de pragas são fundamentais para preservar a qualidade do grão e reduzir perdas.",
  },
];

const autores = [
  {
    nome: "Instituto de Investigação Agronómica — IIA",
    ideia:
      "A investigação agronómica nacional é fundamental para testar materiais em condições angolanas, avaliar adaptação e apoiar sistemas de produção e sementes.",
  },
  {
    nome: "CIMMYT",
    ideia:
      "O trabalho em Angola documentou a necessidade de materiais localmente adaptados, tolerantes à seca e com resistência a problemas fitossanitários.",
  },
  {
    nome: "Peter Setimela",
    ideia:
      "Destacou a importância dos sistemas de sementes e da transição de variedades locais para materiais melhorados adaptados às condições dos produtores.",
  },
  {
    nome: "Cosmos Magorokosho",
    ideia:
      "Chamou atenção para os problemas que podem ocorrer quando materiais introduzidos não estão adequadamente adaptados às doenças e condições locais.",
  },
  {
    nome: "Tsedeke Abate",
    ideia:
      "O trabalho associado ao milho tolerante à seca procura reduzir o risco causado pela irregularidade das chuvas e aumentar a resiliência dos produtores.",
  },
  {
    nome: "Dibanzilua Nginamau",
    ideia:
      "A documentação do CIMMYT apresenta o seu papel no apoio técnico à produção de sementes de milho por organizações de produtores em Angola.",
  },
  {
    nome: "INE",
    ideia:
      "O ICAPP fornece a base estatística oficial para acompanhar áreas, produção por cultura e informação das explorações agro-pecuárias.",
  },
];

const pragas = [
  {
    titulo: "Lagartas e insectos desfolhadores",
    texto:
      "Podem reduzir a área foliar e afectar o desenvolvimento das plantas. A identificação correcta da praga deve preceder qualquer tratamento.",
  },
  {
    titulo: "Brocas do colmo",
    texto:
      "Podem provocar galerias no colmo, enfraquecimento das plantas e perdas. O acompanhamento da lavoura é importante.",
  },
  {
    titulo: "Percevejos e outros sugadores",
    texto:
      "Alguns insectos podem causar danos directos ou indirectos. O diagnóstico deve considerar sintomas, fase da cultura e nível de infestação.",
  },
  {
    titulo: "Striga",
    texto:
      "A planta parasita pode afectar seriamente o milho em determinadas condições. A rotação, a fertilidade e o uso de materiais tolerantes podem fazer parte de estratégias integradas.",
  },
];

const doencas = [
  {
    titulo: "Mancha cinzenta das folhas",
    texto:
      "É uma doença foliar relevante em determinadas regiões produtoras. A escolha de materiais com resistência/tolerância e o maneio da cultura são componentes importantes.",
  },
  {
    titulo: "Mosaico/risca do milho",
    texto:
      "Doenças virais podem causar sintomas importantes. O diagnóstico deve ser realizado considerando os sintomas e os vectores envolvidos.",
  },
  {
    titulo: "Helmintosporiose",
    texto:
      "Doenças foliares podem reduzir a área fotossintética. A escolha varietal e o acompanhamento da lavoura são importantes.",
  },
  {
    titulo: "Podridões da espiga",
    texto:
      "Podem ser favorecidas por condições de humidade, danos de insectos e colheita inadequada. A secagem e o armazenamento correctos ajudam a reduzir perdas.",
  },
];

export default function MilhoPage() {
  const [provinciaSelecionada, setProvinciaSelecionada] =
    useState("Huambo");

  const provincia = useMemo(
    () =>
      provincias.find((item) => item.nome === provinciaSelecionada) ??
      provincias[0],
    [provinciaSelecionada]
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <img
          src={imagens[0].src}
          alt={imagens[0].alt}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />

        <div className="absolute inset-0 bg-slate-950/70" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-green-300">
              AGROINOVA ANGOLA · AGRICULTURA
            </p>

            <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Milho
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
              Conhecimento técnico sobre a cultura do milho em Angola:
              produção, solos, sementes, variedades, maneio, sanidade,
              colheita, pós-colheita e experiências documentadas no país.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#provincias"
                className="rounded-xl bg-green-500 px-5 py-3 font-bold text-white transition hover:bg-green-400"
              >
                Ver por província
              </a>

              <a
                href="#sementes"
                className="rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                Sementes e variedades
              </a>

              <a
                href="#fontes"
                className="rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                Fontes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-5 py-4 text-sm sm:px-8 lg:px-10">
          <Link
            href="/agricultura"
            className="font-medium text-green-700 hover:underline"
          >
            Agricultura
          </Link>
          <span className="text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Milho</span>
        </div>
      </div>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Visão agronómica
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              O milho na agricultura angolana
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                O milho ocupa uma posição central nos sistemas agrícolas
                angolanos. Estudos do CIMMYT identificaram o milho como uma
                cultura de grande importância para os pequenos produtores,
                especialmente em províncias do centro do país.
              </p>

              <p>
                A produção, entretanto, não depende apenas do potencial
                climático. A qualidade da semente, fertilidade do solo,
                disponibilidade de água, controlo de infestantes, sanidade,
                assistência técnica e condições de comercialização interferem
                directamente no resultado da lavoura.
              </p>

              <p>
                Para o AGROINOVA ANGOLA, a informação sobre milho deve ser
                apresentada em dois níveis: conhecimento técnico para apoiar
                produtores e técnicos e dados estatísticos oficiais para
                acompanhar a realidade produtiva de cada território.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-green-100 bg-green-50 p-7">
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Dados oficiais
            </p>

            <h3 className="mt-3 text-2xl font-black text-slate-950">
              ICAPP 2024/2025
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              O INE informa que o ICAPP 2024/2025 contém informação sobre áreas
              semeadas e colhidas por cultura e produção obtida por cultura em
              cada província.
            </p>

            <a
              href="https://ine.gov.ao/publicacoes/detalhes/NTM0NzU%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-xl bg-green-700 px-5 py-3 font-bold text-white hover:bg-green-800"
            >
              Consultar publicação do INE
            </a>

            <p className="mt-4 text-xs leading-5 text-slate-500">
              A página não inventa números de produção. Os valores devem ser
              ligados ao quadro oficial correspondente quando integrados ao
              módulo estatístico do AGROINOVA.
            </p>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="border-y bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Milho em Angola
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950">
              Fotografias e experiências reais
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              As imagens abaixo são fotografias publicadas por instituições ou
              meios que documentaram actividades agrícolas em Angola. Clique
              numa imagem para abrir a página de origem.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {imagens.map((imagem) => (
              <a
                key={imagem.src}
                href={imagem.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={imagem.src}
                    alt={imagem.alt}
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-slate-950">
                    {imagem.legenda}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Fonte: {imagem.fonte}
                  </p>

                  <p className="mt-4 text-sm font-bold text-green-700">
                    Abrir fonte da imagem →
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SOLO */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              01 · Solo
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950">
              Que solo é adequado ao milho?
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-slate-600">
              <p>
                O milho desenvolve melhor o sistema radicular quando encontra
                condições adequadas de estrutura, disponibilidade de água,
                oxigénio e nutrientes.
              </p>

              <p>
                Por isso, antes de aplicar fertilizantes, é recomendável
                conhecer as características do terreno. A análise do solo pode
                ajudar a orientar decisões relacionadas com acidez, matéria
                orgânica e nutrientes.
              </p>

              <p>
                Em áreas com risco de erosão, a preparação do terreno deve
                procurar conservar o solo. Em áreas com drenagem deficiente, o
                problema de excesso de água deve ser corrigido antes de esperar
                elevados rendimentos.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {[
              [
                "Boa drenagem",
                "Evitar encharcamento prolongado durante as fases sensíveis da cultura.",
              ],
              [
                "Fertilidade",
                "Avaliar nutrientes e matéria orgânica antes de definir um programa de adubação.",
              ],
              [
                "Estrutura",
                "Um solo fisicamente adequado favorece o desenvolvimento das raízes.",
              ],
              [
                "Conservação",
                "Reduzir erosão e perda de matéria orgânica através de práticas apropriadas ao terreno.",
              ],
            ].map(([titulo, texto]) => (
              <div
                key={titulo}
                className="rounded-2xl border bg-white p-6 shadow-sm"
              >
                <h3 className="font-black text-slate-950">{titulo}</h3>
                <p className="mt-2 leading-7 text-slate-600">{texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEMENTES */}
      <section id="sementes" className="border-y bg-slate-100">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              02 · Genética e sementes
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              Sementes e variedades documentadas
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Angola possui uma história documentada de utilização de variedades
              locais e introdução de materiais melhorados. O trabalho do CIMMYT
              com o IIA procurou testar materiais adaptados às condições
              angolanas, incluindo materiais tolerantes à seca.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {materiais.map((material) => (
              <article
                key={material.nome}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-black text-slate-950">
                    {material.nome}
                  </h3>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">
                    {material.tipo}
                  </span>
                </div>

                <p className="mt-4 leading-7 text-slate-600">
                  {material.caracteristicas}
                </p>

                <div className="mt-5 border-t pt-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    Nota AGROINOVA
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {material.observacao}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6">
            <h3 className="font-black text-amber-950">
              Atenção à interpretação das variedades
            </h3>

            <p className="mt-2 leading-7 text-amber-900">
              Algumas variedades acima aparecem em estudos e documentação
              histórica. Isso não significa que todas estejam actualmente
              registadas, comercialmente disponíveis ou recomendadas para todas
              as províncias. Antes da aquisição, o produtor deve confirmar a
              origem da semente, o enquadramento legal e a recomendação técnica
              para a sua zona.
            </p>
          </div>
        </div>
      </section>

      {/* PROVÍNCIAS */}
      <section id="provincias" className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-widest text-green-700">
            03 · Agricultura por território
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
            Milho por província
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            A mesma cultura não deve receber exactamente a mesma recomendação
            em todas as províncias. A decisão deve considerar clima, solo,
            disponibilidade de água, sementes, mercado e sistema de produção.
          </p>
        </div>

        <div className="mt-8">
          <label
            htmlFor="provincia"
            className="mb-2 block text-sm font-bold text-slate-700"
          >
            Seleccione uma província
          </label>

          <select
            id="provincia"
            value={provinciaSelecionada}
            onChange={(event) =>
              setProvinciaSelecionada(event.target.value)
            }
            className="w-full max-w-xl rounded-xl border border-slate-300 bg-white px-4 py-3 font-semibold text-slate-800 outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-100"
          >
            {provincias.map((item) => (
              <option key={item.nome} value={item.nome}>
                {item.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b bg-slate-950 px-6 py-7 sm:px-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-300">
              Província seleccionada
            </p>

            <h3 className="mt-2 text-3xl font-black text-white">
              {provincia.nome}
            </h3>

            <p className="mt-2 text-slate-300">
              Região agrícola de referência: {provincia.regiao}
            </p>
          </div>

          <div className="grid gap-0 md:grid-cols-2">
            <div className="border-b p-6 md:border-r">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Sistema
              </p>
              <p className="mt-2 leading-7 text-slate-700">
                {provincia.sistema}
              </p>
            </div>

            <div className="border-b p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Solo
              </p>
              <p className="mt-2 leading-7 text-slate-700">
                {provincia.solo}
              </p>
            </div>

            <div className="border-b p-6 md:border-r">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Clima e água
              </p>
              <p className="mt-2 leading-7 text-slate-700">
                {provincia.clima}
              </p>
            </div>

            <div className="border-b p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Prioridades técnicas
              </p>
              <p className="mt-2 leading-7 text-slate-700">
                {provincia.foco}
              </p>
            </div>

            <div className="p-6 md:col-span-2">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Nota de integridade dos dados
              </p>

              <p className="mt-2 leading-7 text-slate-700">
                {provincia.observacao}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MANEIO */}
      <section className="border-y bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              04 · Maneio
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              Principais etapas da produção
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              O resultado final da cultura é consequência de várias decisões
              tomadas ao longo do ciclo. O produtor deve adaptar cada etapa ao
              ambiente e ao material utilizado.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {etapas.map((etapa) => (
              <article
                key={etapa.titulo}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:border-green-300 hover:bg-green-50"
              >
                <h3 className="text-lg font-black text-slate-950">
                  {etapa.titulo}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {etapa.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRAGAS */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-red-700">
              05 · Protecção fitossanitária
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950">
              Pragas que merecem acompanhamento
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              A presença de um insecto não significa automaticamente que seja
              necessário aplicar um produto. A identificação correcta, a fase
              da cultura, a intensidade do ataque e as condições ambientais
              devem orientar a decisão.
            </p>

            <div className="mt-7 space-y-4">
              {pragas.map((item) => (
                <article
                  key={item.titulo}
                  className="rounded-2xl border border-red-100 bg-red-50 p-5"
                >
                  <h3 className="font-black text-slate-950">
                    {item.titulo}
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    {item.texto}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-orange-700">
              Doenças
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950">
              Principais problemas sanitários
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              A escolha de materiais adaptados é uma das ferramentas
              importantes de prevenção. A documentação sobre Angola mostra que
              doenças como mancha cinzenta, vírus da risca do milho e
              helmintosporiose estiveram entre os problemas considerados na
              introdução de materiais melhorados.
            </p>

            <div className="mt-7 space-y-4">
              {doencas.map((item) => (
                <article
                  key={item.titulo}
                  className="rounded-2xl border border-orange-100 bg-orange-50 p-5"
                >
                  <h3 className="font-black text-slate-950">
                    {item.titulo}
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    {item.texto}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIAS */}
      <section className="border-y bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-widest text-green-300">
              06 · Experiências documentadas
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              O que já foi documentado em Angola?
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <p className="text-sm font-bold text-green-300">HUAMBO</p>

              <h3 className="mt-3 text-2xl font-black">
                Chianga e a investigação do milho
              </h3>

              <p className="mt-4 leading-8 text-slate-300">
                O CIMMYT documentou trabalhos conjuntos com o IIA na estação
                experimental de Chianga, incluindo ensaios em estação e
                avaliações em propriedades de agricultores.
              </p>

              <p className="mt-4 leading-8 text-slate-300">
                A documentação também apresenta a agricultora Dominga Ngueve,
                que testava materiais de milho na região e destacou a
                precocidade do ZM309 como uma característica útil.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <p className="text-sm font-bold text-green-300">
                CUANZA SUL
              </p>

              <h3 className="mt-3 text-2xl font-black">
                Produção de sementes
              </h3>

              <p className="mt-4 leading-8 text-slate-300">
                O CIMMYT documentou propriedades de produção de sementes em
                Cuanza Sul e a participação de organizações produtoras em
                actividades relacionadas com materiais melhorados.
              </p>

              <p className="mt-4 leading-8 text-slate-300">
                Entre os materiais citados estão ZM309, ZM521 e ZM523, com
                apoio técnico do IIA no processo descrito na documentação.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <p className="text-sm font-bold text-green-300">
                HUÍLA
              </p>

              <h3 className="mt-3 text-2xl font-black">
                Mulheres produtoras e milho
              </h3>

              <p className="mt-4 leading-8 text-slate-300">
                O PNUD Angola documentou mulheres produtoras em Cacula, na
                província da Huíla, trabalhando com milho e outras culturas.
              </p>

              <p className="mt-4 leading-8 text-slate-300">
                A documentação chama atenção para questões como energia,
                água, processamento e condições de comercialização que
                influenciam a actividade agrícola.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <p className="text-sm font-bold text-green-300">
                HUAMBO · CAÁLA
              </p>

              <h3 className="mt-3 text-2xl font-black">
                Colheita e organização produtiva
              </h3>

              <p className="mt-4 leading-8 text-slate-300">
                A documentação disponível sobre a Caála apresenta uma
                experiência de colheita de milho com agricultores locais,
                relacionada com iniciativas de apoio à produção e formação.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* AUTORES */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-widest text-green-700">
            07 · Investigação
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
            Autores e instituições: ideias que ajudam a compreender o milho
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            A plataforma não deve apenas apresentar nomes. Cada referência
            precisa estar ligada à contribuição que pode ser útil para
            produtores, técnicos, estudantes e investigadores.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {autores.map((autor) => (
            <article
              key={autor.nome}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-black text-slate-950">
                {autor.nome}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {autor.ideia}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* SEMENTE / ACESSO */}
      <section className="border-y bg-green-950">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-green-300">
                Sistema de sementes
              </p>

              <h2 className="mt-3 text-3xl font-black text-white">
                A variedade só funciona se a semente chegar ao produtor
              </h2>

              <p className="mt-5 leading-8 text-green-100/80">
                Um dos problemas identificados pelo estudo de adopção do milho
                tolerante à seca em Angola foi o acesso à semente. O estudo
                encontrou falta de acesso como uma barreira importante entre os
                agregados pesquisados.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7">
              <h3 className="text-xl font-black text-slate-950">
                O que o AGROINOVA deve acompanhar
              </h3>

              <ul className="mt-5 space-y-3 text-slate-600">
                <li className="border-b pb-3">
                  Registo e disponibilidade de variedades.
                </li>

                <li className="border-b pb-3">
                  Produtores e multiplicadores de sementes legalmente
                  identificados.
                </li>

                <li className="border-b pb-3">
                  Ensaios de adaptação por zona agroecológica.
                </li>

                <li className="border-b pb-3">
                  Características agronómicas e sanitárias de cada material.
                </li>

                <li>
                  Disponibilidade real antes de apresentar uma variedade como
                  opção ao produtor.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section id="fontes" className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-widest text-green-700">
            08 · Referências
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-950">
            Fontes utilizadas
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            As referências abaixo foram utilizadas para separar informação
            estatística oficial, investigação agronómica e experiências
            documentadas.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <a
            href="https://ine.gov.ao/publicacoes/detalhes/NTM0NzU%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border bg-white p-6 transition hover:border-green-400 hover:shadow-md"
          >
            <h3 className="font-black text-slate-950">
              INE — Principais Resultados do ICAPP 2024/2025
            </h3>

            <p className="mt-2 leading-7 text-slate-600">
              Publicação oficial com informação sobre agricultura, áreas
              semeadas e colhidas e produção por cultura e província.
            </p>

            <p className="mt-3 font-bold text-green-700">
              Abrir fonte oficial →
            </p>
          </a>

          <a
            href="https://ine.gov.ao/publicacoes/detalhes/NTM0Nzg%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border bg-white p-6 transition hover:border-green-400 hover:shadow-md"
          >
            <h3 className="font-black text-slate-950">
              INE — Perfil Agro-Pecuário e Pescas em Angola ICAPP 2024/2025
            </h3>

            <p className="mt-2 leading-7 text-slate-600">
              Perfil oficial da agricultura, pecuária e pescas de Angola.
            </p>

            <p className="mt-3 font-bold text-green-700">
              Abrir fonte oficial →
            </p>
          </a>

          <a
            href="https://www.cimmyt.org/news/angola-shifting-from-landraces-to-improved-maize-varieties/"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border bg-white p-6 transition hover:border-green-400 hover:shadow-md"
          >
            <h3 className="font-black text-slate-950">
              CIMMYT — Angola: shifting from landraces to improved maize
              varieties
            </h3>

            <p className="mt-2 leading-7 text-slate-600">
              Documentação sobre a colaboração entre CIMMYT e IIA, ensaios,
              sementes e materiais de milho em Angola.
            </p>

            <p className="mt-3 font-bold text-green-700">
              Abrir investigação →
            </p>
          </a>

          <a
            href="https://repository.cimmyt.org/entities/publication/7253847b-f418-4755-bf32-a80998409da4"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border bg-white p-6 transition hover:border-green-400 hover:shadow-md"
          >
            <h3 className="font-black text-slate-950">
              CIMMYT — DT Maize Adoption Monitoring Survey: Angola
            </h3>

            <p className="mt-2 leading-7 text-slate-600">
              Estudo sobre adopção de milho tolerante à seca, variedades
              identificadas, preferências dos produtores e barreiras de acesso
              à semente.
            </p>

            <p className="mt-3 font-bold text-green-700">
              Abrir relatório →
            </p>
          </a>

          <a
            href="https://maizecatalog.cimmyt.org/tech/ZM521"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border bg-white p-6 transition hover:border-green-400 hover:shadow-md"
          >
            <h3 className="font-black text-slate-950">
              CIMMYT Maize Product Catalog — ZM521
            </h3>

            <p className="mt-2 leading-7 text-slate-600">
              Ficha técnica do material ZM521, incluindo características
              agronómicas, ciclo, tolerância a stress e adaptação.
            </p>

            <p className="mt-3 font-bold text-green-700">
              Abrir ficha técnica →
            </p>
          </a>
        </div>
      </section>

      {/* NOTA DE INTEGRIDADE */}
      <section className="bg-amber-50">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
          <div className="rounded-3xl border border-amber-200 bg-white p-7">
            <h2 className="text-xl font-black text-amber-950">
              Nota de integridade científica e estatística
            </h2>

            <div className="mt-4 space-y-3 leading-7 text-slate-700">
              <p>
                Esta página distingue informação técnica, estudos históricos e
                estatísticas oficiais. Uma variedade encontrada num estudo
                antigo não é automaticamente uma variedade recomendada ou
                comercialmente disponível em 2026.
              </p>

              <p>
                Da mesma forma, dados históricos baseados em antigas
                configurações territoriais de Angola não devem ser
                redistribuídos artificialmente pelas actuais províncias.
              </p>

              <p>
                Os números oficiais de produção deverão ser ligados
                directamente às tabelas do INE no módulo de dados do
                AGROINOVA ANGOLA, mantendo fonte, período, unidade e nível
                territorial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="border-t bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <Link
            href="/agricultura"
            className="rounded-xl border border-slate-300 px-5 py-3 text-center font-bold text-slate-700 transition hover:border-green-500 hover:text-green-700"
          >
            ← Voltar para Agricultura
          </Link>

          <Link
            href="/agricultura/mandioca"
            className="rounded-xl bg-green-700 px-5 py-3 text-center font-bold text-white transition hover:bg-green-800"
          >
            Próxima cultura: Mandioca →
          </Link>
        </div>
      </section>
    </main>
  );
}