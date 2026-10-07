"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Grupo =
  | "Todas"
  | "Cereais"
  | "Leguminosas"
  | "Oleaginosas"
  | "Raízes e tubérculos"
  | "Fruteiras"
  | "Culturas industriais"
  | "Culturas permanentes"
  | "Hortícolas";

type Cultura = {
  slug: string;
  nome: string;
  grupo: Exclude<Grupo, "Todas">;
  descricao: string;
  solo: string;
  ciclo: string;
  importancia: string;
  tags: string[];
};

type ProvinciaInfo = {
  nome: string;
  destaque: string;
  descricao: string;
  solos: string[];
  culturas: string[];
  observacao: string;
};

const grupos: Grupo[] = [
  "Todas",
  "Cereais",
  "Leguminosas",
  "Oleaginosas",
  "Raízes e tubérculos",
  "Fruteiras",
  "Culturas industriais",
  "Culturas permanentes",
  "Hortícolas",
];

const provincias: ProvinciaInfo[] = [
  {
    nome: "Bengo",
    destaque: "Agricultura diversificada",
    descricao:
      "A agricultura beneficia da proximidade dos principais mercados e de áreas com potencial para cereais, hortícolas, raízes, tubérculos e fruteiras.",
    solos: ["Solos aluviais", "Solos arenosos", "Solos de textura variável"],
    culturas: ["Milho", "Mandioca", "Feijão", "Banana", "Hortícolas"],
    observacao:
      "A escolha da cultura deve considerar disponibilidade de água, drenagem, fertilidade e proximidade do mercado.",
  },
  {
    nome: "Benguela",
    destaque: "Agricultura de sequeiro e irrigada",
    descricao:
      "A produção agrícola varia de acordo com a disponibilidade hídrica e as condições locais, existindo potencial para cereais, leguminosas, hortícolas e fruteiras.",
    solos: ["Solos arenosos", "Solos franco-arenosos", "Solos aluviais"],
    culturas: ["Milho", "Feijão", "Mandioca", "Batata-doce", "Hortícolas"],
    observacao:
      "Em zonas com maior disponibilidade de água, a irrigação amplia as possibilidades de produção.",
  },
  {
    nome: "Bié",
    destaque: "Cereais e leguminosas",
    descricao:
      "O planalto do Bié apresenta condições relevantes para sistemas de produção de cereais e leguminosas, entre outras culturas.",
    solos: ["Solos de planalto", "Solos argilo-arenosos", "Solos de textura média"],
    culturas: ["Milho", "Feijão", "Soja", "Batata-doce", "Mandioca"],
    observacao:
      "A fertilidade do solo, a conservação da matéria orgânica e a gestão da água são determinantes para a produtividade.",
  },
  {
    nome: "Cabinda",
    destaque: "Fruteiras, mandioca e culturas diversificadas",
    descricao:
      "O clima húmido favorece sistemas agrícolas diversificados, incluindo raízes, tubérculos, fruteiras e culturas alimentares.",
    solos: ["Solos argilosos", "Solos franco-argilosos", "Solos de elevada humidade"],
    culturas: ["Mandioca", "Banana", "Milho", "Feijão", "Fruteiras"],
    observacao:
      "A drenagem e a gestão da fertilidade devem ser consideradas em áreas com elevada precipitação.",
  },
  {
    nome: "Cuando",
    destaque: "Cereais, raízes e tubérculos",
    descricao:
      "A realidade agrícola do Cuando deve ser analisada considerando clima, solos, disponibilidade hídrica e sistemas tradicionais de produção.",
    solos: ["Solos arenosos", "Solos de textura média", "Solos sujeitos a variação hídrica"],
    culturas: ["Milho", "Mandioca", "Massango", "Massambala", "Feijão"],
    observacao:
      "Os dados históricos e estudos agrícolas devem ser distinguidos das estatísticas oficiais mais recentes antes de afirmar qual é a cultura líder.",
  },
  {
    nome: "Cubango",
    destaque: "Cereais e culturas alimentares",
    descricao:
      "A produção agrícola está associada a sistemas alimentares adaptados às condições locais e à disponibilidade de água.",
    solos: ["Solos arenosos", "Solos de textura média", "Solos de baixa fertilidade natural"],
    culturas: ["Milho", "Massango", "Massambala", "Mandioca", "Feijão"],
    observacao:
      "A conservação da humidade e o aumento da matéria orgânica podem ser importantes em determinados sistemas.",
  },
  {
    nome: "Cuanza Norte",
    destaque: "Mandioca, milho e diversificação",
    descricao:
      "A agricultura provincial apresenta potencial para sistemas diversificados de culturas alimentares e comerciais.",
    solos: ["Solos argilosos", "Solos franco-argilosos", "Solos de textura média"],
    culturas: ["Mandioca", "Milho", "Feijão", "Banana", "Café"],
    observacao:
      "O manejo da fertilidade deve considerar a cultura, a textura do solo e o histórico da parcela.",
  },
  {
    nome: "Cuanza Sul",
    destaque: "Agricultura diversificada",
    descricao:
      "A diversidade climática e edáfica permite diferentes sistemas de produção agrícola.",
    solos: ["Solos aluviais", "Solos argilo-arenosos", "Solos de textura média"],
    culturas: ["Milho", "Mandioca", "Feijão", "Banana", "Café"],
    observacao:
      "A seleção de variedades deve considerar o ambiente de produção e o objetivo comercial.",
  },
  {
    nome: "Cunene",
    destaque: "Sistemas adaptados à limitação hídrica",
    descricao:
      "A disponibilidade de água é um dos principais fatores para a agricultura no Cunene, tornando importante a seleção de culturas e variedades adaptadas.",
    solos: ["Solos arenosos", "Solos de textura ligeira", "Solos com baixa retenção de água"],
    culturas: ["Massango", "Massambala", "Milho", "Feijão", "Mandioca"],
    observacao:
      "A gestão da água e a escolha de culturas tolerantes ao stress hídrico são fundamentais.",
  },
  {
    nome: "Huambo",
    destaque: "Milho, feijão e batata",
    descricao:
      "O planalto do Huambo apresenta forte tradição agrícola e condições favoráveis para diferentes culturas alimentares.",
    solos: ["Solos de planalto", "Solos argilosos", "Solos franco-argilosos"],
    culturas: ["Milho", "Feijão", "Batata-rena", "Soja", "Batata-doce"],
    observacao:
      "A conservação do solo, rotação de culturas e manutenção da matéria orgânica são práticas relevantes.",
  },
  {
    nome: "Huíla",
    destaque: "Cereais, hortícolas e pecuária integrada",
    descricao:
      "A diversidade agroecológica permite sistemas agrícolas distintos, incluindo cereais, leguminosas e horticultura.",
    solos: ["Solos de planalto", "Solos franco-arenosos", "Solos argilo-arenosos"],
    culturas: ["Milho", "Feijão", "Batata-rena", "Trigo", "Hortícolas"],
    observacao:
      "A irrigação e a disponibilidade de água podem alterar significativamente as opções de cultivo.",
  },
  {
    nome: "Icolo e Bengo",
    destaque: "Hortícolas e produção próxima dos mercados",
    descricao:
      "A proximidade de grandes mercados cria oportunidades para horticultura, fruteiras e sistemas agrícolas intensivos onde existam condições de água.",
    solos: ["Solos aluviais", "Solos arenosos", "Solos de textura variável"],
    culturas: ["Tomate", "Cebola", "Milho", "Mandioca", "Banana"],
    observacao:
      "A disponibilidade de água, logística e acesso ao mercado são fatores particularmente importantes.",
  },
  {
    nome: "Luanda",
    destaque: "Horticultura e agricultura periurbana",
    descricao:
      "A agricultura periurbana apresenta oportunidades sobretudo para hortícolas e outras culturas de ciclo relativamente curto, dependendo da disponibilidade de água e do solo.",
    solos: ["Solos arenosos", "Solos aluviais", "Solos de textura variável"],
    culturas: ["Tomate", "Cebola", "Couve", "Alface", "Pimento"],
    observacao:
      "A qualidade da água de irrigação e a segurança alimentar devem ser consideradas na horticultura periurbana.",
  },
  {
    nome: "Lunda Norte",
    destaque: "Mandioca e culturas alimentares",
    descricao:
      "A agricultura familiar constitui uma componente importante dos sistemas de produção locais.",
    solos: ["Solos arenosos", "Solos argilosos", "Solos de textura média"],
    culturas: ["Mandioca", "Milho", "Feijão", "Amendoim", "Banana"],
    observacao:
      "O manejo da fertilidade e a prevenção da erosão são importantes para a sustentabilidade.",
  },
  {
    nome: "Lunda Sul",
    destaque: "Mandioca e diversificação",
    descricao:
      "As condições locais permitem sistemas agrícolas diversificados, com forte presença de culturas alimentares.",
    solos: ["Solos arenosos", "Solos argilosos", "Solos de textura média"],
    culturas: ["Mandioca", "Milho", "Feijão", "Amendoim", "Banana"],
    observacao:
      "A escolha da cultura deve ser feita a partir das características concretas da parcela.",
  },
  {
    nome: "Malanje",
    destaque: "Mandioca, milho e culturas alimentares",
    descricao:
      "Malanje possui tradição agrícola e potencial para diferentes culturas alimentares e comerciais.",
    solos: ["Solos argilosos", "Solos franco-argilosos", "Solos de textura média"],
    culturas: ["Mandioca", "Milho", "Feijão", "Amendoim", "Café"],
    observacao:
      "A fertilidade, drenagem e rotação de culturas devem orientar a escolha da cultura.",
  },
  {
    nome: "Moxico",
    destaque: "Cereais, raízes e culturas alimentares",
    descricao:
      "Os sistemas agrícolas devem ser analisados em função da grande diversidade territorial e das condições de solo e água.",
    solos: ["Solos arenosos", "Solos de textura média", "Solos sujeitos a variação hídrica"],
    culturas: ["Milho", "Mandioca", "Massango", "Massambala", "Feijão"],
    observacao:
      "A adaptação varietal e a conservação da humidade podem ter papel importante.",
  },
  {
    nome: "Moxico Leste",
    destaque: "Sistemas agrícolas adaptados",
    descricao:
      "A nova configuração administrativa exige que os dados agrícolas sejam apresentados separadamente quando existirem estatísticas oficiais específicas.",
    solos: ["Solos arenosos", "Solos de textura média", "Solos sujeitos a variação hídrica"],
    culturas: ["Milho", "Mandioca", "Massango", "Massambala", "Feijão"],
    observacao:
      "Não devem ser transferidos automaticamente dados antigos de Moxico para Moxico Leste.",
  },
  {
    nome: "Namibe",
    destaque: "Agricultura irrigada",
    descricao:
      "A limitação hídrica torna a disponibilidade de água um fator decisivo para a agricultura, sobretudo na horticultura e fruticultura irrigadas.",
    solos: ["Solos arenosos", "Solos aluviais", "Solos de textura ligeira"],
    culturas: ["Tomate", "Cebola", "Melancia", "Uva", "Hortícolas"],
    observacao:
      "A qualidade e disponibilidade da água devem ser avaliadas antes da instalação de sistemas irrigados.",
  },
  {
    nome: "Uíge",
    destaque: "Mandioca, café e culturas alimentares",
    descricao:
      "A agricultura apresenta potencial para raízes, cereais, leguminosas e culturas permanentes.",
    solos: ["Solos argilosos", "Solos franco-argilosos", "Solos de textura média"],
    culturas: ["Mandioca", "Milho", "Feijão", "Café", "Banana"],
    observacao:
      "A manutenção da matéria orgânica e o controlo da erosão são importantes para a sustentabilidade.",
  },
  {
    nome: "Zaire",
    destaque: "Mandioca, fruteiras e diversificação",
    descricao:
      "As condições climáticas permitem sistemas agrícolas diversificados, incluindo culturas alimentares e permanentes.",
    solos: ["Solos argilosos", "Solos aluviais", "Solos de textura média"],
    culturas: ["Mandioca", "Milho", "Banana", "Café", "Feijão"],
    observacao:
      "O sistema de cultivo deve ser ajustado às características locais da parcela.",
  },
];

const culturas: Cultura[] = [
  {
    slug: "milho",
    nome: "Milho",
    grupo: "Cereais",
    descricao:
      "Uma das culturas alimentares de maior importância nos sistemas agrícolas angolanos.",
    solo: "Solos bem drenados, de fertilidade média a elevada e com boa disponibilidade de nutrientes.",
    ciclo: "Variável conforme variedade e ambiente.",
    importancia: "Alimentação humana, alimentação animal e transformação agroindustrial.",
    tags: ["cereal", "segurança alimentar", "semente"],
  },
  {
    slug: "massango",
    nome: "Massango",
    grupo: "Cereais",
    descricao:
      "Cereal tradicional importante em sistemas agrícolas sujeitos a maior limitação hídrica.",
    solo: "Solos bem drenados e adaptados às condições locais de humidade.",
    ciclo: "Variável conforme variedade.",
    importancia: "Alimentação humana e segurança alimentar em zonas semiáridas.",
    tags: ["cereal", "seca", "adaptação"],
  },
  {
    slug: "massambala",
    nome: "Massambala",
    grupo: "Cereais",
    descricao:
      "Cereal tradicional utilizado em diferentes sistemas alimentares de Angola.",
    solo: "Solos bem drenados e adequados ao ambiente agroecológico local.",
    ciclo: "Variável.",
    importancia: "Alimentação humana e diversificação dos sistemas agrícolas.",
    tags: ["cereal", "resiliência", "alimentação"],
  },
  {
    slug: "sorgo",
    nome: "Sorgo",
    grupo: "Cereais",
    descricao:
      "Cereal de interesse para ambientes onde a disponibilidade de água é um fator limitante.",
    solo: "Solos bem drenados, com fertilidade adequada.",
    ciclo: "Variável.",
    importancia: "Alimentação humana, ração e diversificação agrícola.",
    tags: ["cereal", "seca", "ração"],
  },
  {
    slug: "arroz",
    nome: "Arroz",
    grupo: "Cereais",
    descricao:
      "Cultura importante para a segurança alimentar e com diferentes sistemas de produção conforme a disponibilidade de água.",
    solo: "Solos capazes de manter humidade adequada, dependendo do sistema de produção.",
    ciclo: "Variável conforme variedade.",
    importancia: "Alimentação humana e redução da dependência de importações.",
    tags: ["cereal", "água", "alimentação"],
  },
  {
    slug: "feijao",
    nome: "Feijão",
    grupo: "Leguminosas",
    descricao:
      "Leguminosa importante na alimentação e nos sistemas de produção familiar.",
    solo: "Solos bem drenados e com fertilidade equilibrada.",
    ciclo: "Relativamente curto, dependendo da variedade.",
    importancia: "Proteína vegetal e diversificação das rotações.",
    tags: ["leguminosa", "proteína", "rotação"],
  },
  {
    slug: "soja",
    nome: "Soja",
    grupo: "Oleaginosas",
    descricao:
      "Cultura de interesse para produção de óleo, proteína vegetal e alimentação animal.",
    solo: "Solos bem drenados e com boa disponibilidade de nutrientes.",
    ciclo: "Variável conforme cultivar e ambiente.",
    importancia: "Óleo, farelo, alimentação animal e agroindústria.",
    tags: ["oleaginosa", "proteína", "agroindústria"],
  },
  {
    slug: "amendoim",
    nome: "Amendoim",
    grupo: "Oleaginosas",
    descricao:
      "Oleaginosa alimentar adaptável a diferentes sistemas agrícolas.",
    solo: "Solos leves e bem drenados são geralmente favoráveis.",
    ciclo: "Variável conforme cultivar.",
    importancia: "Alimentação, óleo e geração de rendimento para produtores.",
    tags: ["oleaginosa", "alimentação", "óleo"],
  },
  {
    slug: "mandioca",
    nome: "Mandioca",
    grupo: "Raízes e tubérculos",
    descricao:
      "Cultura alimentar de grande importância e com capacidade de adaptação a diferentes condições.",
    solo: "Solos bem drenados, sem encharcamento prolongado.",
    ciclo: "Variável conforme variedade e finalidade.",
    importancia: "Segurança alimentar, transformação e comercialização.",
    tags: ["raiz", "segurança alimentar", "resiliência"],
  },
  {
    slug: "batata-doce",
    nome: "Batata-doce",
    grupo: "Raízes e tubérculos",
    descricao:
      "Cultura alimentar com importância para diversificação e segurança alimentar.",
    solo: "Solos soltos, bem drenados e sem compactação excessiva.",
    ciclo: "Variável.",
    importancia: "Alimentação humana e diversificação da produção.",
    tags: ["tubérculo", "alimentação", "diversificação"],
  },
  {
    slug: "batata-rena",
    nome: "Batata-rena",
    grupo: "Raízes e tubérculos",
    descricao:
      "Cultura relevante em zonas de maior altitude e ambientes adequados.",
    solo: "Solos bem drenados, profundos e com boa estrutura.",
    ciclo: "Variável conforme cultivar.",
    importancia: "Alimentação e comercialização.",
    tags: ["tubérculo", "planalto", "horticultura"],
  },
  {
    slug: "banana",
    nome: "Banana",
    grupo: "Fruteiras",
    descricao:
      "Fruteira tropical de interesse alimentar e comercial.",
    solo: "Solos profundos, férteis, bem drenados e com disponibilidade adequada de água.",
    ciclo: "Produção contínua após estabelecimento, dependendo do sistema.",
    importancia: "Alimentação, mercado fresco e transformação.",
    tags: ["fruta", "água", "mercado"],
  },
  {
    slug: "manga",
    nome: "Manga",
    grupo: "Fruteiras",
    descricao:
      "Fruteira tropical com potencial para mercados frescos e transformação.",
    solo: "Solos profundos e bem drenados.",
    ciclo: "Perene.",
    importancia: "Consumo fresco e agroprocessamento.",
    tags: ["fruta", "perene", "agroprocessamento"],
  },
  {
    slug: "abacaxi",
    nome: "Abacaxi",
    grupo: "Fruteiras",
    descricao:
      "Fruteira tropical com potencial alimentar e comercial.",
    solo: "Solos bem drenados e com boa estrutura.",
    ciclo: "Variável conforme cultivar e manejo.",
    importancia: "Mercado fresco e transformação.",
    tags: ["fruta", "agroprocessamento", "mercado"],
  },
  {
    slug: "cafe",
    nome: "Café",
    grupo: "Culturas permanentes",
    descricao:
      "Cultura permanente historicamente importante na agricultura angolana.",
    solo: "Solos profundos, bem drenados e com fertilidade adequada.",
    ciclo: "Perene.",
    importancia: "Exportação, mercado interno e agroindústria.",
    tags: ["café", "perene", "exportação"],
  },
  {
    slug: "algodao",
    nome: "Algodão",
    grupo: "Culturas industriais",
    descricao:
      "Cultura industrial de interesse para a cadeia têxtil e agroindustrial.",
    solo: "Solos bem drenados e adequados à cultura.",
    ciclo: "Anual.",
    importancia: "Fibra, óleo e indústria.",
    tags: ["industrial", "fibra", "agroindústria"],
  },
  {
    slug: "girassol",
    nome: "Girassol",
    grupo: "Oleaginosas",
    descricao:
      "Oleaginosa com potencial para produção de óleo e diversificação agrícola.",
    solo: "Solos bem drenados e com fertilidade equilibrada.",
    ciclo: "Anual.",
    importancia: "Produção de óleo e alimentação animal.",
    tags: ["oleaginosa", "óleo", "rotação"],
  },
  {
    slug: "tomate",
    nome: "Tomate",
    grupo: "Hortícolas",
    descricao:
      "Hortícola de elevada importância comercial, especialmente em sistemas irrigados.",
    solo: "Solos férteis, bem drenados e com boa disponibilidade de água.",
    ciclo: "Curto a médio, conforme cultivar.",
    importancia: "Mercado fresco e transformação.",
    tags: ["hortícola", "irrigação", "mercado"],
  },
  {
    slug: "cebola",
    nome: "Cebola",
    grupo: "Hortícolas",
    descricao:
      "Hortícola importante para consumo e comercialização.",
    solo: "Solos bem drenados e de boa estrutura.",
    ciclo: "Variável conforme cultivar.",
    importancia: "Mercado alimentar e conservação.",
    tags: ["hortícola", "mercado", "irrigação"],
  },
  {
    slug: "pimento",
    nome: "Pimento",
    grupo: "Hortícolas",
    descricao:
      "Hortícola adaptada a sistemas de produção intensivos quando existem condições adequadas.",
    solo: "Solos férteis, bem drenados e com disponibilidade hídrica.",
    ciclo: "Variável.",
    importancia: "Mercado fresco e transformação.",
    tags: ["hortícola", "irrigação", "mercado"],
  },
];

const biblioteca = [
  {
    titulo: "ICAPP 2024/2025 — Principais Resultados",
    entidade: "Instituto Nacional de Estatística (INE)",
    tipo: "Estatística oficial",
    descricao:
      "Dados oficiais sobre agricultura, produção, áreas cultivadas e explorações agropecuárias.",
  },
  {
    titulo: "Perfil Agro-Pecuário e Pescas em Angola — ICAPP 2024/2025",
    entidade: "Instituto Nacional de Estatística (INE)",
    tipo: "Perfil nacional",
    descricao:
      "Informação estatística de referência para compreender a realidade agropecuária nacional.",
  },
  {
    titulo: "Instituto de Investigação Agronómica",
    entidade: "IIA / Ministério da Agricultura",
    tipo: "Investigação",
    descricao:
      "Investigação, experimentação e desenvolvimento tecnológico aplicado à agricultura angolana.",
  },
  {
    titulo: "Melhoramento genético e sementes",
    entidade: "AGROINOVA ANGOLA",
    tipo: "Base técnica",
    descricao:
      "Área preparada para reunir variedades, sementes melhoradas, características agronómicas e recomendações verificadas.",
  },
  {
    titulo: "Solos e fertilidade",
    entidade: "AGROINOVA ANGOLA",
    tipo: "Conhecimento técnico",
    descricao:
      "Informação para relacionar propriedades do solo, cultura, fertilidade e práticas de manejo.",
  },
  {
    titulo: "Fitossanidade",
    entidade: "AGROINOVA ANGOLA",
    tipo: "Proteção vegetal",
    descricao:
      "Base para identificação de pragas, doenças, sintomas e medidas de prevenção e controlo.",
  },
];

function grupoCor(grupo: Grupo) {
  switch (grupo) {
    case "Cereais":
      return "bg-amber-50 text-amber-800 border-amber-200";
    case "Leguminosas":
      return "bg-emerald-50 text-emerald-800 border-emerald-200";
    case "Oleaginosas":
      return "bg-yellow-50 text-yellow-800 border-yellow-200";
    case "Raízes e tubérculos":
      return "bg-orange-50 text-orange-800 border-orange-200";
    case "Fruteiras":
      return "bg-pink-50 text-pink-800 border-pink-200";
    case "Culturas industriais":
      return "bg-purple-50 text-purple-800 border-purple-200";
    case "Culturas permanentes":
      return "bg-green-50 text-green-800 border-green-200";
    case "Hortícolas":
      return "bg-teal-50 text-teal-800 border-teal-200";
    default:
      return "bg-slate-100 text-slate-700 border-slate-200";
  }
}

export default function AgriculturaPage() {
  const [grupoAtivo, setGrupoAtivo] = useState<Grupo>("Todas");
  const [busca, setBusca] = useState("");
  const [provinciaSelecionada, setProvinciaSelecionada] =
    useState("Huambo");

  const provincia =
    provincias.find((item) => item.nome === provinciaSelecionada) ??
    provincias[0];

  const culturasFiltradas = useMemo(() => {
    const termo = busca.trim().toLowerCase();

    return culturas.filter((cultura) => {
      const correspondeGrupo =
        grupoAtivo === "Todas" || cultura.grupo === grupoAtivo;

      const correspondeBusca =
        termo.length === 0 ||
        cultura.nome.toLowerCase().includes(termo) ||
        cultura.grupo.toLowerCase().includes(termo) ||
        cultura.descricao.toLowerCase().includes(termo) ||
        cultura.tags.some((tag) => tag.toLowerCase().includes(termo));

      return correspondeGrupo && correspondeBusca;
    });
  }, [grupoAtivo, busca]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-green-900 to-emerald-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur">
              AGROINOVA ANGOLA · Agricultura
            </div>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Centro de Conhecimento Agrícola de Angola
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-emerald-50 sm:text-xl">
              Descubra culturas, solos, sementes, práticas agronómicas,
              informação provincial e conhecimento técnico para apoiar
              produtores, técnicos, investigadores e estudantes.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#culturas"
                className="rounded-xl bg-white px-6 py-3 text-center font-bold text-emerald-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-50"
              >
                Explorar culturas
              </a>

              <a
                href="#provincia"
                className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-center font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                Consultar por província
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PERGUNTAS PRINCIPAIS */}
      <section className="border-b bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {[
            "Qual cultura se adapta melhor à minha região?",
            "Que tipo de solo devo considerar?",
            "Que sementes ou variedades devo procurar?",
            "Que problemas fitossanitários devo conhecer?",
          ].map((pergunta) => (
            <div
              key={pergunta}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-emerald-300 hover:bg-emerald-50"
            >
              <p className="font-semibold leading-6 text-slate-800">
                {pergunta}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROVÍNCIA */}
      <section id="provincia" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                Agricultura por território
              </span>

              <h2 className="mt-2 text-3xl font-black text-slate-900">
                O que produzir na minha província?
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Selecione uma província para consultar uma orientação inicial.
                A recomendação agronómica final deve considerar a parcela, o
                solo, a água, o clima, a variedade e o sistema de produção.
              </p>

              <select
                value={provinciaSelecionada}
                onChange={(event) =>
                  setProvinciaSelecionada(event.target.value)
                }
                className="mt-6 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-semibold text-slate-800 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
              >
                {provincias.map((item) => (
                  <option key={item.nome} value={item.nome}>
                    {item.nome}
                  </option>
                ))}
              </select>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
                    Província selecionada
                  </p>
                  <h3 className="mt-1 text-3xl font-black text-slate-900">
                    {provincia.nome}
                  </h3>
                </div>

                <span className="w-fit rounded-full border border-emerald-200 bg-white px-3 py-1 text-sm font-bold text-emerald-800">
                  {provincia.destaque}
                </span>
              </div>

              <p className="mt-5 leading-7 text-slate-700">
                {provincia.descricao}
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <h4 className="font-bold text-slate-900">
                    Solos a considerar
                  </h4>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {provincia.solos.map((solo) => (
                      <span
                        key={solo}
                        className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
                      >
                        {solo}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900">
                    Culturas a investigar
                  </h4>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {provincia.culturas.map((cultura) => (
                      <button
                        key={cultura}
                        type="button"
                        onClick={() => {
                          setBusca(cultura);
                          setGrupoAtivo("Todas");
                          document
                            .getElementById("culturas")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="rounded-lg border border-emerald-200 bg-white px-3 py-2 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-700 hover:text-white"
                      >
                        {cultura}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-emerald-200 pt-5">
                <p className="text-sm leading-6 text-slate-600">
                  <strong className="text-slate-900">Nota técnica:</strong>{" "}
                  {provincia.observacao}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CULTURAS */}
      <section
        id="culturas"
        className="mx-auto max-w-7xl scroll-mt-24 px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-emerald-700">
              Base de conhecimento
            </span>

            <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">
              Explorar culturas agrícolas
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              Pesquise por cultura ou utilize os grupos para encontrar
              informação técnica.
            </p>
          </div>

          <div className="rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">
            {culturasFiltradas.length} cultura
            {culturasFiltradas.length === 1 ? "" : "s"} encontrada
            {culturasFiltradas.length === 1 ? "" : "s"}
          </div>
        </div>

        {/* PESQUISA */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <label
            htmlFor="pesquisa-cultura"
            className="mb-2 block text-sm font-bold text-slate-700"
          >
            Pesquisar cultura
          </label>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="pesquisa-cultura"
              type="search"
              value={busca}
              onChange={(event) => setBusca(event.target.value)}
              placeholder="Ex.: milho, mandioca, café, solo, irrigação..."
              className="min-w-0 flex-1 rounded-xl border border-slate-300 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
            />

            {busca && (
              <button
                type="button"
                onClick={() => setBusca("")}
                className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Limpar
              </button>
            )}
          </div>
        </div>

        {/* FILTROS */}
        <div className="mt-5 overflow-x-auto pb-2">
          <div className="flex min-w-max gap-2">
            {grupos.map((grupo) => {
              const ativo = grupoAtivo === grupo;

              return (
                <button
                  key={grupo}
                  type="button"
                  onClick={() => setGrupoAtivo(grupo)}
                  className={[
                    "rounded-full border px-4 py-2.5 text-sm font-bold transition",
                    ativo
                      ? "border-emerald-700 bg-emerald-700 text-white shadow-sm"
                      : "border-slate-300 bg-white text-slate-700 hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-800",
                  ].join(" ")}
                >
                  {grupo}
                </button>
              );
            })}
          </div>
        </div>

        {/* RESULTADOS */}
        {culturasFiltradas.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
            <h3 className="text-xl font-black text-slate-900">
              Nenhuma cultura encontrada
            </h3>
            <p className="mt-2 text-slate-600">
              Tente outra palavra ou altere o grupo selecionado.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {culturasFiltradas.map((cultura) => (
              <article
                key={cultura.slug}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl"
              >
                <div className="h-2 bg-gradient-to-r from-emerald-700 to-green-400" />

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-black text-slate-900">
                      {cultura.nome}
                    </h3>

                    <span
                      className={`rounded-full border px-2.5 py-1 text-xs font-bold ${grupoCor(
                        cultura.grupo
                      )}`}
                    >
                      {cultura.grupo}
                    </span>
                  </div>

                  <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">
                    {cultura.descricao}
                  </p>

                  <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Solo
                      </span>
                      <p className="mt-1 text-sm leading-5 text-slate-700">
                        {cultura.solo}
                      </p>
                    </div>

                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Importância
                      </span>
                      <p className="mt-1 text-sm leading-5 text-slate-700">
                        {cultura.importancia}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {cultura.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/agricultura/${cultura.slug}`}
                    className="mt-6 inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
                  >
                    Ver ficha técnica
                    <span className="ml-2 transition group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* SEMENTES / IIA */}
      <section className="border-y border-emerald-100 bg-emerald-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-emerald-300">
                Investigação e inovação
              </span>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Melhoramento de sementes e variedades
              </h2>

              <p className="mt-5 leading-8 text-emerald-50">
                O melhoramento genético procura desenvolver materiais vegetais
                com características agronómicas relevantes, como adaptação ao
                ambiente, produtividade, qualidade e tolerância ou resistência
                a determinados fatores de stress.
              </p>

              <div className="mt-7">
                <span className="inline-flex rounded-xl border border-emerald-400/30 bg-white/10 px-4 py-3 text-sm font-semibold text-emerald-100">
                  Instituto de Investigação Agronómica — IIA
                </span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [
                  "Adaptação",
                  "Materiais selecionados para diferentes condições ambientais.",
                ],
                [
                  "Produtividade",
                  "Potencial para melhorar o desempenho quando o manejo é adequado.",
                ],
                [
                  "Sanidade",
                  "Possibilidade de incorporar características relacionadas com resistência ou tolerância.",
                ],
                [
                  "Qualidade",
                  "Características adequadas à alimentação, indústria ou mercado.",
                ],
              ].map(([titulo, descricao]) => (
                <div
                  key={titulo}
                  className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur"
                >
                  <h3 className="font-black text-white">{titulo}</h3>
                  <p className="mt-2 text-sm leading-6 text-emerald-100">
                    {descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-amber-300/30 bg-amber-300/10 p-5">
            <p className="text-sm leading-6 text-amber-100">
              <strong className="text-white">Integridade dos dados:</strong>{" "}
              esta página não inventa nomes de variedades, stocks de sementes
              ou listas de fazendas que utilizam sementes melhoradas. Esses
              dados serão incorporados somente a partir de catálogos, boletins
              ou documentos verificáveis do IIA.
            </p>
          </div>
        </div>
      </section>

      {/* SOLOS */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-wider text-emerald-700">
            Solo e cultura
          </span>

          <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">
            Escolher a cultura começa pelo ambiente de produção
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            O tipo de solo é apenas uma parte da decisão. Textura, drenagem,
            profundidade, fertilidade, pH, matéria orgânica, disponibilidade de
            água, clima e histórico da parcela devem ser considerados em
            conjunto.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              titulo: "Solos bem drenados",
              texto:
                "Importantes para culturas sensíveis ao encharcamento e para desenvolvimento adequado das raízes.",
            },
            {
              titulo: "Solos argilosos",
              texto:
                "Podem apresentar boa capacidade de retenção de água e nutrientes, mas exigem atenção à drenagem e compactação.",
            },
            {
              titulo: "Solos arenosos",
              texto:
                "Apresentam maior drenagem e podem exigir atenção especial à água e à fertilidade.",
            },
            {
              titulo: "Solos aluviais",
              texto:
                "Podem apresentar elevado potencial agrícola, mas as características devem ser avaliadas localmente.",
            },
          ].map((item) => (
            <div
              key={item.titulo}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-black text-slate-900">
                {item.titulo}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.texto}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIÊNCIAS */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-wider text-emerald-400">
              Experiências de produção
            </span>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Onde existem experiências documentadas?
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              O AGROINOVA deverá reunir experiências de produtores,
              cooperativas, instituições de investigação e projetos agrícolas,
              sempre identificando a fonte e evitando transformar um caso
              individual em estatística provincial.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Exemplo documentado
              </span>

              <h3 className="mt-2 text-xl font-black">
                Experiências agrícolas em Menongue
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Existem registos públicos de organizações e cooperativas
                ligadas à produção e comercialização de cereais, raízes,
                tubérculos, leguminosas e outras atividades agrícolas.
              </p>

              <p className="mt-4 text-xs leading-5 text-slate-400">
                Fonte a apresentar no módulo documental com ligação para o
                registo original.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Próxima integração
              </span>

              <h3 className="mt-2 text-xl font-black">
                Mapa de experiências agrícolas
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                A plataforma poderá permitir consultar experiências por
                província, cultura, município, sistema de produção, instituição
                responsável e fonte documental.
              </p>

              <Link
                href="/mapa"
                className="mt-5 inline-flex rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-500"
              >
                Abrir mapa agrícola →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BIBLIOTECA */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-emerald-700">
              Biblioteca técnica
            </span>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              Conhecimento para estudar e produzir
            </h2>
          </div>

          <Link
            href="/biblioteca"
            className="font-bold text-emerald-700 hover:text-emerald-900"
          >
            Ver biblioteca completa →
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {biblioteca.map((item) => (
            <article
              key={item.titulo}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800">
                {item.tipo}
              </span>

              <h3 className="mt-4 text-lg font-black text-slate-900">
                {item.titulo}
              </h3>

              <p className="mt-2 text-sm font-semibold text-slate-500">
                {item.entidade}
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                {item.descricao}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* FONTES */}
      <section className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-slate-900">
            Fontes e integridade da informação
          </h2>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-slate-50 p-5">
              <p className="font-bold text-slate-900">INE</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Estatísticas oficiais do ICAPP para produção, áreas e
                explorações agrícolas.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-5">
              <p className="font-bold text-slate-900">IIA</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Investigação agronómica, experimentação e desenvolvimento
                tecnológico.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-5">
              <p className="font-bold text-slate-900">
                AGROINOVA ANGOLA
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Organização e integração de conhecimento agrícola com indicação
                clara da fonte e do período dos dados.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm leading-6 text-amber-900">
              <strong>Atenção:</strong> recomendações agrícolas apresentadas
              nesta página são orientações gerais. A recomendação final para
              uma parcela deve ser baseada em análise do solo, condições
              climáticas, disponibilidade de água, variedade, época de
              plantio, sistema de produção e acompanhamento técnico.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}