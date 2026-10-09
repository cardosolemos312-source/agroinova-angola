
"use client";

import { useMemo, useState } from "react";

type Secao =
  | "visao-geral"
  | "agricultura"
  | "pecuaria"
  | "avicultura"
  | "pescas"
  | "florestas"
  | "madeira"
  | "solos"
  | "clima"
  | "comercio"
  | "investigacao"
  | "perspectivas";

type Indicador = {
  titulo: string;
  valor: string;
  unidade: string;
  periodo: string;
  descricao: string;
  fonte: string;
  url: string;
  tipo: "oficial" | "governo" | "estimativa" | "proposta";
};

type Tema = {
  id: Secao;
  nome: string;
  resumo: string;
  imagem: string;
  introducao: string;
  problemas: string[];
  solucoes: string[];
  indicadores: string[];
  fonte: string;
  url: string;
};

const FONTES = {
  anuário: "https://www.ine.gov.ao/publicacoes/detalhes/NDY0MDE%3D",
  icapp: "https://www.ine.gov.ao/publicacoes/detalhes/NTM0NzU%3D",
  perfil: "https://www.ine.gov.ao/publicacoes/detalhes/NTM0Nzg%3D",
  governo:
    "https://governo.gov.ao/noticias/2843/economia/aumento-da-producao-nacional/importacao-de-carne-bovina-reduz-pela-metade-nos-ultimos-dois-anos",
  clima: "https://governo.gov.ao/angola/clima",
  floresta:
    "https://minagrif.gov.ao/web/noticias/campanha-florestal-2026-foi-aberta-no-uige",
  documentos:
    "https://minagrif.gov.ao/web/documentos?type=Relat%C3%B3rios++Estat%C3%ADsticos",
  portalINE: "https://www.ine.gov.ao/",
  FAO: "https://www.fao.org/angola/pt/",
  BancoMundial: "https://www.worldbank.org/en/country/angola",
  "4defevereiro": "https://4defevereiro.co.ao/",
  angola24horas:
    "https://angola24horas.com/sociedade/item/32862-agricultura-cresce-1-7-em-angola-e-pecuaria-recua-2-5-em-2024-ine",
};

const indicadores: Indicador[] = [
  {
    titulo: "Explorações produtoras",
    valor: "2 628 507",
    unidade: "explorações",
    periodo: "ICAPP 2024/2025",
    descricao:
      "Número de explorações produtoras apresentado na base estatística agrícola do projecto. Consultar a publicação para metodologia e cobertura.",
    fonte: "INE — ICAPP 2024/2025",
    url: FONTES.icapp,
    tipo: "oficial",
  },
  {
    titulo: "Explorações familiares",
    valor: "2 621 997",
    unidade: "explorações",
    periodo: "Base do projecto",
    descricao:
      "Indicador de explorações familiares usado na base oficial já integrada no projecto. Confirmar o quadro e o período antes de comparar com novas séries.",
    fonte: "Base oficial do projecto / INE",
    url: FONTES.icapp,
    tipo: "oficial",
  },
  {
    titulo: "Área semeada",
    valor: "6,17 milhões",
    unidade: "hectares",
    periodo: "Campanha 2023/2024",
    descricao:
      "O Anuário Estatístico da Agricultura de 2024 regista aproximadamente 6,17 milhões de hectares semeados.",
    fonte: "MINAGRIF / INE — Anuário 2024",
    url: FONTES.anuário,
    tipo: "oficial",
  },
  {
    titulo: "Produção vegetal",
    valor: "28 milhões",
    unidade: "toneladas",
    periodo: "Campanha 2023/2024",
    descricao:
      "Produção global de culturas vegetais referida no anuário. Não deve ser confundida com produção pecuária ou com os resultados de outras campanhas.",
    fonte: "MINAGRIF / INE — Anuário 2024",
    url: FONTES.anuário,
    tipo: "oficial",
  },
  {
    titulo: "Produção de carnes",
    valor: "333,2 mil",
    unidade: "toneladas",
    periodo: "Campanha 2023/2024",
    descricao:
      "O anuário reportou cerca de 333,2 mil toneladas de carnes, com predominância da carne caprina na composição apresentada.",
    fonte: "MINAGRIF / INE — Anuário 2024",
    url: FONTES.anuário,
    tipo: "oficial",
  },
  {
    titulo: "Produção de ovos",
    valor: "2,42 mil milhões",
    unidade: "unidades",
    periodo: "Campanha 2023/2024",
    descricao:
      "Produção de ovos reportada no anuário. Este indicador é diferente da produção de carne de aves.",
    fonte: "MINAGRIF / INE — Anuário 2024",
    url: FONTES.anuário,
    tipo: "oficial",
  },
  {
    titulo: "Produção de leite",
    valor: "5,51 milhões",
    unidade: "litros",
    periodo: "Campanha 2023/2024",
    descricao:
      "Produção de leite reportada no anuário de 2024. Não misturar este valor com outras séries de produção animal que usem períodos ou coberturas diferentes.",
    fonte: "MINAGRIF / INE — Anuário 2024",
    url: FONTES.anuário,
    tipo: "oficial",
  },
  {
    titulo: "Madeira em toro",
    valor: "238,69 mil",
    unidade: "m³",
    periodo: "Campanha 2023/2024",
    descricao:
      "Produção de madeira em toro reportada no anuário. Não representa a quota autorizada para campanhas posteriores.",
    fonte: "MINAGRIF / INE — Anuário 2024",
    url: FONTES.anuário,
    tipo: "oficial",
  },
  {
    titulo: "Madeira serrada",
    valor: "179,67 mil",
    unidade: "m³",
    periodo: "Campanha 2023/2024",
    descricao:
      "Produção de madeira serrada reportada no anuário. As exportações são um indicador separado.",
    fonte: "MINAGRIF / INE — Anuário 2024",
    url: FONTES.anuário,
    tipo: "oficial",
  },
  {
    titulo: "Produção nacional de aves",
    valor: "64 394",
    unidade: "toneladas",
    periodo: "2025",
    descricao:
      "Valor de produção nacional de aves divulgado pelo Governo. Trata-se de uma série diferente da produção da campanha 2023/2024.",
    fonte: "Portal Oficial do Governo",
    url: FONTES.governo,
    tipo: "governo",
  },
  {
    titulo: "Importação de carne bovina",
    valor: "8 220",
    unidade: "toneladas",
    periodo: "2025",
    descricao:
      "Volume de importações de carne bovina referido pelo Governo para 2025, comparado com 21 717 toneladas em 2023.",
    fonte: "Portal Oficial do Governo",
    url: FONTES.governo,
    tipo: "governo",
  },
  {
    titulo: "Importação de coxas de frango",
    valor: "142 544",
    unidade: "toneladas",
    periodo: "2025",
    descricao:
      "Valor divulgado pelo Governo para as importações de coxas de frango em 2025, face a 287 183 toneladas em 2022.",
    fonte: "Portal Oficial do Governo",
    url: FONTES.governo,
    tipo: "governo",
  },
];

const temas: Tema[] = [
  {
    id: "agricultura",
    nome: "Agricultura",
    resumo: "Culturas, rendimento, produção e segurança alimentar.",
    imagem:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
    introducao:
      "A agricultura angolana é fundamental para o abastecimento alimentar, o emprego rural e a diversificação económica. O painel deve acompanhar as culturas, a área semeada e colhida, a produtividade e as diferenças regionais.",
    problemas: [
      "Perdas entre a colheita e a chegada ao mercado.",
      "Acesso irregular a sementes, fertilizantes, equipamentos e crédito.",
      "Dependência da chuva em explorações sem irrigação.",
      "Dificuldade de acesso a informação técnica e mercados.",
    ],
    solucoes: [
      "Expandir a extensão rural e a assistência técnica.",
      "Melhorar o armazenamento, a transformação e o transporte.",
      "Promover sementes adaptadas às condições locais.",
      "Acompanhar a produtividade por cultura, província e campanha.",
    ],
    indicadores: [
      "Área semeada e área colhida.",
      "Produção por cultura e por província.",
      "Rendimento por hectare.",
      "Perdas pós-colheita e preços ao produtor.",
    ],
    fonte: "INE / MINAGRIF",
    url: FONTES.anuário,
  },
  {
    id: "pecuaria",
    nome: "Pecuária",
    resumo: "Carne, leite, pequenos ruminantes e sanidade animal.",
    imagem:
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1200&q=85",
    introducao:
      "A pecuária contribui para a alimentação, o rendimento das famílias e a economia rural. Os indicadores devem separar bovinos, caprinos, ovinos, suínos, aves, leite, ovos e mel.",
    problemas: [
      "Doenças animais e cobertura veterinária insuficiente em algumas áreas.",
      "Custos de alimentação, água, transporte e medicamentos.",
      "Fraca capacidade de abate, conservação e transformação em determinadas cadeias.",
      "Séries estatísticas com períodos e coberturas que nem sempre coincidem.",
    ],
    solucoes: [
      "Reforçar a vacinação e os serviços veterinários.",
      "Melhorar pastagens, água e alimentação animal.",
      "Apoiar matadouros, refrigeração e transformação local.",
      "Publicar dados separados por espécie e campanha.",
    ],
    indicadores: [
      "Produção de carne por espécie.",
      "Produção de leite e ovos.",
      "Efectivos pecuários e perdas por doença.",
      "Preços, custos de ração e importações.",
    ],
    fonte: "INE / MINAGRIF",
    url: FONTES.icapp,
  },
  {
    id: "avicultura",
    nome: "Avicultura e ovos",
    resumo: "Produção de frango, ovos, ração e importações.",
    imagem:
      "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1200&q=85",
    introducao:
      "A avicultura é uma cadeia estratégica porque liga a produção de milho e soja, o fabrico de ração, os incubatórios, as explorações, o abate, a distribuição e o consumo. O crescimento da produção deve ser analisado em conjunto com as importações.",
    problemas: [
      "Dependência de matérias-primas importadas para a ração.",
      "Custos de energia, água, transporte e conservação.",
      "Necessidade de biossegurança, vacinação e assistência veterinária.",
      "Falta de séries públicas comparáveis sobre capacidade instalada e utilização.",
    ],
    solucoes: [
      "Articular produtores de milho e soja com fábricas de ração.",
      "Apoiar incubatórios, pequenos e médios produtores e assistência técnica.",
      "Investir em energia fiável, refrigeração e logística.",
      "Comparar regularmente produção, importações, preços e consumo.",
    ],
    indicadores: [
      "Toneladas de carne de aves produzidas.",
      "Importações por produto e ano.",
      "Produção de ovos em unidades.",
      "Custo da ração por quilograma.",
    ],
    fonte: "INE / Governo de Angola",
    url: FONTES.governo,
  },
  {
    id: "pescas",
    nome: "Pescas e aquicultura",
    resumo: "Pesca marítima, continental, artesanal e aquicultura.",
    imagem:
      "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=1200&q=85",
    introducao:
      "O sector das pescas deve ser analisado a partir da produção, desembarques, conservação, comercialização e sustentabilidade dos recursos. A pesca artesanal, a pesca industrial e a aquicultura devem ter indicadores distintos.",
    problemas: [
      "Perdas de pescado por falta de gelo e conservação.",
      "Custos de combustível e transporte.",
      "Necessidade de fiscalização e gestão sustentável dos recursos.",
      "Dificuldades de distribuição do pescado para mercados interiores.",
    ],
    solucoes: [
      "Reforçar cadeias de frio nos pontos de desembarque.",
      "Apoiar cooperativas e infraestruturas de comercialização.",
      "Promover aquicultura com avaliação técnica e ambiental.",
      "Publicar séries de produção por modalidade e região.",
    ],
    indicadores: [
      "Produção pesqueira por modalidade.",
      "Desembarques e perdas pós-captura.",
      "Produção aquícola.",
      "Preços e capacidade de conservação.",
    ],
    fonte: "INE / Ministério das Pescas",
    url: FONTES.portalINE,
  },
  {
    id: "florestas",
    nome: "Florestas",
    resumo: "Maiombe, Miombo, conservação e reflorestação.",
    imagem:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85",
    introducao:
      "Angola possui formações florestais com funções ecológicas e económicas distintas. O Maiombe, em Cabinda, e as formações de Miombo são exemplos importantes. A gestão exige distinguir estimativas de cobertura, inventários, licenças e produção efectiva.",
    problemas: [
      "Pressão sobre os recursos florestais e risco de exploração não sustentável.",
      "Necessidade de melhorar inventários e fiscalização.",
      "Rastreabilidade limitada em algumas cadeias de madeira e carvão.",
      "Risco de confundir quotas autorizadas com produção realizada.",
    ],
    solucoes: [
      "Reforçar inventários, fiscalização e rastreabilidade.",
      "Apoiar viveiros, reflorestação e recuperação de áreas degradadas.",
      "Promover produtos florestais com valor acrescentado local.",
      "Publicar dados de licenças, produção e exportações em separado.",
    ],
    indicadores: [
      "Área florestal por tipo e metodologia.",
      "Licenças e volumes autorizados.",
      "Produção registada de madeira e carvão.",
      "Áreas recuperadas e plantadas.",
    ],
    fonte: "MINAGRIF / INE",
    url: FONTES.floresta,
  },
  {
    id: "madeira",
    nome: "Madeira e produtos florestais",
    resumo: "Produção, transformação, exportações e valor acrescentado.",
    imagem:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85",
    introducao:
      "A madeira em toro, a madeira serrada e as exportações representam etapas diferentes da cadeia. Uma política de transformação local deve considerar a origem legal, o emprego, a eficiência industrial e a sustentabilidade.",
    problemas: [
      "Diferença entre volume extraído, transformado e exportado.",
      "Necessidade de equipamentos e qualificação industrial.",
      "Pressão sobre florestas naturais.",
      "Falta de séries públicas regulares sobre valor acrescentado por produto.",
    ],
    solucoes: [
      "Aumentar a transformação nacional antes da exportação.",
      "Melhorar a legalidade e rastreabilidade da madeira.",
      "Promover eficiência e aproveitamento de resíduos.",
      "Monitorizar exportações por produto, destino e valor.",
    ],
    indicadores: [
      "Madeira em toro produzida.",
      "Madeira serrada produzida.",
      "Volume e valor das exportações.",
      "Emprego e transformação local.",
    ],
    fonte: "MINAGRIF / INE",
    url: FONTES.anuário,
  },
  {
    id: "solos",
    nome: "Solos e fertilidade",
    resumo: "Tipos de solo, conservação, culturas e gestão da água.",
    imagem:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=85",
    introducao:
      "O potencial agrícola depende da combinação entre solo, relevo, chuva, temperatura, água disponível e cultura escolhida. Não se deve recomendar fertilizantes ou declarar um solo adequado apenas pela província: é necessário conhecer o terreno e, idealmente, analisar o solo.",
    problemas: [
      "Erosão e perda da camada superficial em áreas vulneráveis.",
      "Degradação da fertilidade por práticas inadequadas.",
      "Drenagem deficiente ou escassez de água em locais específicos.",
      "Falta de resultados de análises locais acessíveis aos agricultores.",
    ],
    solucoes: [
      "Realizar análises de solo antes de recomendar correcções.",
      "Usar rotação de culturas, cobertura vegetal e matéria orgânica.",
      "Promover curvas de nível e controlo da erosão onde necessário.",
      "Relacionar mapas de solo com clima, água e culturas.",
    ],
    indicadores: [
      "pH e matéria orgânica por amostra.",
      "Textura, drenagem e risco de erosão.",
      "Disponibilidade de água.",
      "Produtividade por parcela e cultura.",
    ],
    fonte: "MINAGRIF / FAO",
    url: FONTES.FAO,
  },
  {
    id: "clima",
    nome: "Clima e água",
    resumo: "Estações, precipitação, seca, irrigação e riscos.",
    imagem:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
    introducao:
      "Angola apresenta uma estação seca e outra chuvosa, com diferenças entre o litoral, o planalto central e outras regiões. A corrente fria de Benguela influencia a aridez do litoral. A decisão agrícola deve considerar a localização e os dados meteorológicos disponíveis.",
    problemas: [
      "Variabilidade da chuva e períodos secos.",
      "Exposição das culturas à seca e a chuvas intensas.",
      "Dependência da chuva em zonas sem irrigação.",
      "Falta de acesso a previsões locais úteis para a decisão agrícola.",
    ],
    solucoes: [
      "Combinar previsões meteorológicas com calendários agrícolas.",
      "Investir em irrigação adequada e gestão eficiente da água.",
      "Promover culturas e variedades adaptadas às condições locais.",
      "Criar alertas de risco para agricultores e criadores.",
    ],
    indicadores: [
      "Precipitação por estação e localidade.",
      "Temperatura e duração dos períodos secos.",
      "Área irrigada e disponibilidade de água.",
      "Perdas agrícolas associadas a eventos extremos.",
    ],
    fonte: "Governo de Angola / FAO",
    url: FONTES.clima,
  },
  {
    id: "comercio",
    nome: "Comércio e importações",
    resumo: "Dependência externa, exportações e substituição competitiva.",
    imagem:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=85",
    introducao:
      "O comércio alimentar deve ser analisado produto a produto. A redução de importações pode resultar de maior produção nacional, alterações de preços, procura ou política comercial. É importante observar também os custos, a qualidade e a disponibilidade para o consumidor.",
    problemas: [
      "Dependência de produtos alimentares importados em certas cadeias.",
      "Exposição às variações dos preços internacionais e do câmbio.",
      "Custos logísticos e dificuldades de distribuição.",
      "Dados de importação e produção que podem usar unidades ou categorias diferentes.",
    ],
    solucoes: [
      "Identificar produtos com potencial competitivo de produção local.",
      "Melhorar a produtividade, a qualidade e a logística.",
      "Comparar valores e quantidades importadas por ano.",
      "Acompanhar preços ao produtor e ao consumidor.",
    ],
    indicadores: [
      "Quantidade e valor das importações.",
      "Quantidade e valor das exportações.",
      "Preços internacionais e nacionais.",
      "Produção nacional dos mesmos produtos.",
    ],
    fonte: "Governo / INE",
    url: FONTES.governo,
  },
  {
    id: "investigacao",
    nome: "Investigação e inovação",
    resumo: "Tecnologia, extensão rural, dados e conhecimento.",
    imagem:
      "https://images.unsplash.com/photo-1581093458791-9d42e3c0b1b5?auto=format&fit=crop&w=1200&q=85",
    introducao:
      "A inovação agrícola não se limita a equipamentos modernos. Inclui investigação aplicada, sementes, sanidade, mecanização adequada, conhecimento local, extensão rural e acesso a informação de qualidade.",
    problemas: [
      "Distância entre investigação, extensão e necessidades dos produtores.",
      "Necessidade de dados abertos e actualizados.",
      "Dificuldade de avaliar a adopção e os resultados das tecnologias.",
      "Falta de articulação entre instituições e cadeias de valor.",
    ],
    solucoes: [
      "Ligar centros de investigação, universidades e produtores.",
      "Publicar estudos, manuais e resultados de ensaios.",
      "Avaliar tecnologias em condições locais.",
      "Criar um repositório nacional de conhecimento agropecuário.",
    ],
    indicadores: [
      "Estudos e ensaios publicados.",
      "Tecnologias avaliadas em condições locais.",
      "Produtores alcançados pela extensão rural.",
      "Resultados económicos e ambientais das intervenções.",
    ],
    fonte: "FAO / INE / instituições de investigação",
    url: FONTES.FAO,
  },
  {
    id: "perspectivas",
    nome: "Perspectivas 2027–2036",
    resumo: "Cenários de desenvolvimento e indicadores a acompanhar.",
    imagem:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=85",
    introducao:
      "Os cenários são instrumentos de planeamento, não previsões estatísticas. A evolução dependerá do investimento, da produtividade, da água, da logística, do acesso ao financiamento, da investigação e das condições económicas.",
    problemas: [
      "Investimentos sem indicadores de resultados comparáveis.",
      "Ausência de séries completas para algumas cadeias de valor.",
      "Risco de estabelecer metas sem uma linha de base verificável.",
      "Vulnerabilidade a choques climáticos e de mercado.",
    ],
    solucoes: [
      "Definir uma linha de base para cada cadeia de valor.",
      "Publicar metas propostas com responsável, prazo e método de medição.",
      "Actualizar os resultados anualmente com fontes identificadas.",
      "Rever os cenários com base nos dados observados.",
    ],
    indicadores: [
      "Produtividade e produção nacional por produto.",
      "Importações e exportações em quantidade e valor.",
      "Perdas pós-colheita e custos de produção.",
      "Acesso à irrigação, assistência técnica e mercados.",
    ],
    fonte: "Análise estratégica AGROINOVA",
    url: FONTES.icapp,
  },
];

const atalhos = [
  { nome: "Agricultura", id: "agricultura" as Secao },
  { nome: "Pecuária", id: "pecuaria" as Secao },
  { nome: "Avicultura e ovos", id: "avicultura" as Secao },
  { nome: "Pescas", id: "pescas" as Secao },
  { nome: "Florestas", id: "florestas" as Secao },
  { nome: "Madeira", id: "madeira" as Secao },
  { nome: "Solos", id: "solos" as Secao },
  { nome: "Clima e água", id: "clima" as Secao },
  { nome: "Comércio", id: "comercio" as Secao },
  { nome: "Investigação", id: "investigacao" as Secao },
  { nome: "Cenários 2027–2036", id: "perspectivas" as Secao },
];

const formatar = (valor: string) => valor;

export default function DadosPage() {
  const [secao, setSecao] = useState<Secao>("visao-geral");
  const [pesquisa, setPesquisa] = useState("");
  const [modal, setModal] = useState<Indicador | Tema | null>(null);
  const [ano, setAno] = useState("Todos os períodos");

  const indicadoresFiltrados = useMemo(() => {
    const q = pesquisa.trim().toLocaleLowerCase("pt-PT");

    return indicadores.filter((item) => {
      const corresponde =
        !q ||
        [
          item.titulo,
          item.valor,
          item.periodo,
          item.descricao,
          item.fonte,
        ]
          .join(" ")
          .toLocaleLowerCase("pt-PT")
          .includes(q);

      const periodoCorresponde =
        ano === "Todos os períodos" ||
        item.periodo.toLocaleLowerCase("pt-PT").includes(ano.toLowerCase());

      return corresponde && periodoCorresponde;
    });
  }, [pesquisa, ano]);

  const temaAtual = temas.find((tema) => tema.id === secao);

  function abrirTema(id: Secao) {
    setSecao(id);
    setModal(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="min-h-screen bg-[#f4f7f3] text-slate-900">
      <style jsx global>{`
        .dados-scroll {
          scrollbar-width: thin;
        }
        .dados-card {
          transition:
            transform 180ms ease,
            box-shadow 180ms ease,
            border-color 180ms ease;
        }
        .dados-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 35px rgba(15, 50, 31, 0.1);
          border-color: #9dc4a6;
        }
        .dados-focus:focus-visible {
          outline: 3px solid #eab308;
          outline-offset: 3px;
        }
      `}</style>

      <header className="relative overflow-hidden bg-[#092f20] text-white">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=85"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#062819] via-[#0a3b27]/95 to-[#0a3b27]/65" />

        <div className="relative mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
          <div className="mb-7 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
            <span>AGROINOVA ANGOLA</span>
            <span className="text-emerald-500">/</span>
            <span>Observatório nacional</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm font-semibold text-emerald-200">
                Conhecimento, tecnologia e inovação ao serviço do campo angolano
              </p>
              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
                Dados que revelam o potencial produtivo de Angola.
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-emerald-50 md:text-lg">
                Um espaço para compreender a agricultura, a pecuária, as
                pescas, as florestas, os solos, o clima e o comércio alimentar.
                Consulte indicadores, conheça os desafios e acompanhe as
                oportunidades para a produção nacional.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => abrirTema("agricultura")}
                  className="dados-focus rounded-xl bg-white px-5 py-3 font-bold text-[#0b3826] hover:bg-emerald-50"
                >
                  Explorar os sectores
                </button>
                <button
                  onClick={() => abrirTema("perspectivas")}
                  className="dados-focus rounded-xl border border-white/40 px-5 py-3 font-bold text-white hover:bg-white/10"
                >
                  Cenários 2027–2036
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-black/20 p-6 backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                O que analisamos
              </p>
              <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-5">
                {[
                  ["Produção", "Culturas e criação animal"],
                  ["Recursos", "Solos, água e florestas"],
                  ["Mercados", "Importações e exportações"],
                  ["Futuro", "Riscos, soluções e cenários"],
                ].map(([titulo, texto]) => (
                  <div key={titulo} className="border-t border-white/20 pt-3">
                    <p className="font-bold">{titulo}</p>
                    <p className="mt-1 text-sm leading-6 text-emerald-50/80">
                      {texto}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="dados-scroll mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-3 md:px-8">
          <button
            onClick={() => setSecao("visao-geral")}
            className={`dados-focus shrink-0 rounded-lg px-4 py-2 text-sm font-semibold ${
              secao === "visao-geral"
                ? "bg-[#0d452d] text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            Visão geral
          </button>
          {atalhos.map((atalho) => (
            <button
              key={atalho.id}
              onClick={() => abrirTema(atalho.id)}
              className={`dados-focus shrink-0 rounded-lg px-4 py-2 text-sm font-semibold ${
                secao === atalho.id
                  ? "bg-[#0d452d] text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {atalho.nome}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        {temaAtual ? (
          <section>
            <button
              onClick={() => setSecao("visao-geral")}
              className="dados-focus mb-5 text-sm font-bold text-emerald-800 hover:underline"
            >
              ← Voltar à visão geral
            </button>

            <div className="grid overflow-hidden rounded-3xl bg-white shadow-sm lg:grid-cols-[1fr_0.8fr]">
              <div className="p-6 md:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                  Observatório sectorial
                </p>
                <h2 className="mt-3 text-3xl font-black md:text-4xl">
                  {temaAtual.nome}
                </h2>
                <p className="mt-4 leading-8 text-slate-600">
                  {temaAtual.introducao}
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={temaAtual.url}
                    target="_blank"
                    rel="noreferrer"
                    className="dados-focus rounded-xl bg-[#0d452d] px-5 py-3 text-sm font-bold text-white hover:bg-[#17613f]"
                  >
                    Consultar fonte
                  </a>
                  <button
                    onClick={() => setModal(temaAtual)}
                    className="dados-focus rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold hover:bg-slate-50"
                  >
                    Abrir análise completa
                  </button>
                </div>
              </div>
              <div className="min-h-64 bg-slate-200">
                <img
                  src={temaAtual.imagem}
                  alt={`Imagem ilustrativa: ${temaAtual.nome}`}
                  className="h-full min-h-64 w-full object-cover"
                />
              </div>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {[
                {
                  titulo: "Desafios a investigar",
                  itens: temaAtual.problemas,
                },
                {
                  titulo: "Soluções a desenvolver",
                  itens: temaAtual.solucoes,
                },
                {
                  titulo: "Indicadores a acompanhar",
                  itens: temaAtual.indicadores,
                },
              ].map((grupo) => (
                <article
                  key={grupo.titulo}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <h3 className="text-lg font-extrabold">{grupo.titulo}</h3>
                  <ul className="mt-4 space-y-3">
                    {grupo.itens.map((item) => (
                      <li
                        key={item}
                        className="border-l-2 border-emerald-600 pl-3 text-sm leading-6 text-slate-600"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <p className="mt-5 text-sm text-slate-500">
              Referência principal: {temaAtual.fonte}. Os desafios e soluções
              apresentados são linhas de análise; devem ser avaliados com dados
              específicos de cada região e cadeia produtiva.
            </p>
          </section>
        ) : (
          <>
            <section className="grid gap-5 lg:grid-cols-[1fr_0.7fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-800">
                  Panorama nacional
                </p>
                <h2 className="mt-2 text-3xl font-black md:text-4xl">
                  Angola em números
                </h2>
                <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                  Indicadores recolhidos de publicações oficiais e de
                  comunicados governamentais. Cada cartão identifica o período
                  e a fonte para facilitar a verificação.
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                <p className="text-sm font-extrabold text-emerald-950">
                  Nota sobre os dados
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-900">
                  Os números de 2023/2024 e de 2025 não representam a mesma
                  campanha. Não devem ser unidos numa única série sem
                  confirmar a definição, a cobertura e a metodologia.
                </p>
              </div>
            </section>

            <section className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {indicadores.slice(0, 8).map((item, i) => (
                <button
                  key={item.titulo}
                  onClick={() => setModal(item)}
                  className="dados-card dados-focus rounded-2xl border border-slate-200 bg-white p-5 text-left"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-semibold leading-6 text-slate-600">
                      {item.titulo}
                    </p>
                    <span className="text-xs font-bold text-emerald-700">
                      0{i + 1}
                    </span>
                  </div>
                  <p className="mt-4 text-3xl font-black tracking-tight text-[#0b452d]">
                    {item.valor}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">{item.unidade}</p>
                  <div className="mt-5 border-t border-slate-100 pt-3">
                    <p className="text-xs font-semibold text-slate-500">
                      {item.periodo}
                    </p>
                    <p className="mt-2 text-sm font-bold text-emerald-800">
                      Ver fonte e detalhes →
                    </p>
                  </div>
                </button>
              ))}
            </section>

            <section className="mt-12">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-800">
                    Conhecimento por sector
                  </p>
                  <h2 className="mt-2 text-3xl font-black">
                    Explore a produção nacional
                  </h2>
                  <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                    Cada área apresenta desafios, propostas de intervenção,
                    indicadores e ligações para fontes úteis.
                  </p>
                </div>
                <button
                  onClick={() => setSecao("visao-geral")}
                  className="dados-focus self-start rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold hover:bg-slate-50 md:self-auto"
                >
                  Ver todos os sectores
                </button>
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {temas
                  .filter((tema) => tema.id !== "perspectivas")
                  .map((tema) => (
                    <button
                      key={tema.id}
                      onClick={() => abrirTema(tema.id)}
                      className="dados-card dados-focus overflow-hidden rounded-2xl border border-slate-200 bg-white text-left"
                    >
                      <div className="relative h-48 overflow-hidden bg-slate-200">
                        <img
                          src={tema.imagem}
                          alt={`Imagem ilustrativa: ${tema.nome}`}
                          className="h-full w-full object-cover transition duration-300 hover:scale-105"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12">
                          <h3 className="text-xl font-extrabold text-white">
                            {tema.nome}
                          </h3>
                        </div>
                      </div>
                      <div className="p-5">
                        <p className="text-sm leading-6 text-slate-600">
                          {tema.resumo}
                        </p>
                        <p className="mt-4 text-sm font-bold text-emerald-800">
                          Explorar análise →
                        </p>
                      </div>
                    </button>
                  ))}
              </div>
            </section>

            <section className="mt-12 rounded-3xl bg-[#0b3826] p-6 text-white md:p-9">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                    Estratégia de desenvolvimento
                  </p>
                  <h2 className="mt-3 text-3xl font-black md:text-4xl">
                    Que Angola queremos produzir até 2036?
                  </h2>
                  <p className="mt-4 leading-7 text-emerald-50/85">
                    Os cenários seguintes são hipóteses de planeamento, não
                    previsões oficiais. Devem ser revistos à medida que novos
                    dados de produção, custos, comércio e clima forem
                    publicados.
                  </p>
                  <button
                    onClick={() => abrirTema("perspectivas")}
                    className="dados-focus mt-6 rounded-xl bg-white px-5 py-3 font-bold text-[#0b3826] hover:bg-emerald-50"
                  >
                    Abrir cenário estratégico
                  </button>
                </div>

                <div className="grid gap-3">
                  {[
                    {
                      titulo: "Cenário 1 — Continuidade",
                      texto:
                        "Melhorias graduais, com limitações persistentes de financiamento, infraestruturas e produtividade.",
                    },
                    {
                      titulo: "Cenário 2 — Aceleração produtiva",
                      texto:
                        "Mais assistência técnica, irrigação, armazenamento, sanidade animal e integração dos produtores nos mercados.",
                    },
                    {
                      titulo: "Cenário 3 — Transformação agroindustrial",
                      texto:
                        "Cadeias de valor mais integradas, transformação local, investigação aplicada e maior capacidade de abastecimento interno.",
                    },
                  ].map((cenario) => (
                    <article
                      key={cenario.titulo}
                      className="rounded-2xl border border-white/15 bg-white/5 p-5"
                    >
                      <h3 className="font-extrabold">{cenario.titulo}</h3>
                      <p className="mt-2 text-sm leading-6 text-emerald-50/80">
                        {cenario.texto}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-12">
              <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-800">
                    Biblioteca de dados
                  </p>
                  <h2 className="mt-2 text-3xl font-black">
                    Pesquisar indicadores
                  </h2>
                  <p className="mt-3 leading-7 text-slate-600">
                    Pesquise por cultura, sector, período, unidade ou fonte.
                    Abra cada resultado para consultar a descrição e a
                    publicação de referência.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <label
                    htmlFor="pesquisa-dados"
                    className="mb-2 block text-sm font-bold"
                  >
                    Procurar na base de indicadores
                  </label>
                  <input
                    id="pesquisa-dados"
                    value={pesquisa}
                    onChange={(e) => setPesquisa(e.target.value)}
                    placeholder="Ex.: ovos, madeira, importações, 2025..."
                    className="dados-focus w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-700"
                  />
                  <label
                    htmlFor="periodo-dados"
                    className="mb-2 mt-4 block text-sm font-bold"
                  >
                    Filtrar por período
                  </label>
                  <select
                    id="periodo-dados"
                    value={ano}
                    onChange={(e) => setAno(e.target.value)}
                    className="dados-focus w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-emerald-700"
                  >
                    <option>Todos os períodos</option>
                    <option>2023/2024</option>
                    <option>2024/2025</option>
                    <option>2025</option>
                  </select>
                  <p className="mt-3 text-xs text-slate-500">
                    {indicadoresFiltrados.length} indicador(es) encontrados.
                  </p>
                </div>
              </div>

              <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                {indicadoresFiltrados.length === 0 ? (
                  <div className="p-8 text-center text-slate-600">
                    Não foram encontrados indicadores para esta pesquisa.
                    Experimente outra palavra ou período.
                  </div>
                ) : (
                  <div className="divide-y divide-slate-100">
                    {indicadoresFiltrados.map((item) => (
                      <button
                        key={`${item.titulo}-${item.periodo}`}
                        onClick={() => setModal(item)}
                        className="dados-focus grid w-full gap-3 p-5 text-left hover:bg-emerald-50/60 md:grid-cols-[1.3fr_0.7fr_0.8fr_auto] md:items-center"
                      >
                        <div>
                          <p className="font-extrabold">{item.titulo}</p>
                          <p className="mt-1 text-sm text-slate-500">
                            {item.fonte}
                          </p>
                        </div>
                        <div>
                          <p className="font-bold text-[#0d452d]">
                            {formatar(item.valor)}
                          </p>
                          <p className="text-xs text-slate-500">
                            {item.unidade}
                          </p>
                        </div>
                        <p className="text-sm text-slate-600">{item.periodo}</p>
                        <span className="text-sm font-bold text-emerald-800">
                          Detalhes →
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </section>

            <section className="mt-12">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-800">
                Fontes e recursos
              </p>
              <h2 className="mt-2 text-3xl font-black">
                Informação útil para investigar Angola
              </h2>
              <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                Estas ligações permitem consultar publicações, indicadores,
                notícias e documentos. Sempre que possível, dê prioridade aos
                dados originais e aos documentos metodológicos.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {[
                  {
                    nome: "INE — Anuário da Agricultura 2024",
                    desc: "Campanhas 2022/2023 e 2023/2024, culturas, pecuária, florestas e comércio.",
                    url: FONTES.anuário,
                  },
                  {
                    nome: "INE — ICAPP 2024/2025",
                    desc: "Principais resultados de agricultura, pecuária, pescas e apicultura.",
                    url: FONTES.icapp,
                  },
                  {
                    nome: "INE — Perfil Agro-Pecuário e Pescas",
                    desc: "Indicadores e metodologia da operação estatística ICAPP.",
                    url: FONTES.perfil,
                  },
                  {
                    nome: "Governo de Angola",
                    desc: "Informação sobre produção nacional e evolução das importações.",
                    url: FONTES.governo,
                  },
                  {
                    nome: "MINAGRIF — Documentos estatísticos",
                    desc: "Anuários, boletins e relatórios do sector agrícola e florestal.",
                    url: FONTES.documentos,
                  },
                  {
                    nome: "MINAGRIF — Campanha Florestal 2026",
                    desc: "Quotas autorizadas, concessões e medidas florestais anunciadas para 2026.",
                    url: FONTES.floresta,
                  },
                  {
                    nome: "Governo — Clima de Angola",
                    desc: "Descrição das estações e das características climáticas do país.",
                    url: FONTES.clima,
                  },
                  {
                    nome: "FAO — Angola",
                    desc: "Recursos técnicos e informação sobre alimentação e agricultura.",
                    url: FONTES.FAO,
                  },
                  {
                    nome: "Banco Mundial — Angola",
                    desc: "Contexto económico, desenvolvimento e projectos nacionais.",
                    url: FONTES.BancoMundial,
                  },
                  {
                    nome: "Portal 4 de Fevereiro",
                    desc: "Notícias e conteúdos para acompanhamento de temas nacionais.",
                    url: FONTES["4defevereiro"],
                  },
                  {
                    nome: "Angola 24 Horas",
                    desc: "Notícia sobre a evolução da agricultura e pecuária em 2024.",
                    url: FONTES.angola24horas,
                  },
                ].map((fonte) => (
                  <a
                    key={fonte.nome}
                    href={fonte.url}
                    target="_blank"
                    rel="noreferrer"
                    className="dados-card dados-focus rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <h3 className="font-extrabold text-[#0d452d]">
                      {fonte.nome}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {fonte.desc}
                    </p>
                    <p className="mt-4 text-sm font-bold text-emerald-800">
                      Abrir publicação →
                    </p>
                  </a>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h2 className="text-lg font-extrabold text-amber-950">
                Nota de transparência estatística
              </h2>
              <p className="mt-2 text-sm leading-7 text-amber-950/85">
                Os valores apresentados são acompanhados do período e da fonte
                disponível. As estatísticas do anuário de 2024, os resultados
                do ICAPP 2024/2025 e os números governamentais de 2025 têm
                coberturas e metodologias que podem diferir. Antes de calcular
                taxas de crescimento, confirmar que os indicadores são
                comparáveis. As imagens são ilustrativas e não constituem
                evidência estatística de uma província ou exploração específica.
              </p>
            </section>
          </>
        )}
      </div>

      <footer className="mt-12 bg-[#082d20] text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-9 md:grid-cols-[1fr_auto] md:items-center md:px-8">
          <div>
            <p className="text-xl font-black">AGROINOVA ANGOLA</p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-emerald-100/80">
              Plataforma Nacional de Investigação, Conhecimento e Inovação
              Agropecuária de Angola.
            </p>
          </div>
          <p className="text-sm text-emerald-100/70">
            Dados, fontes e períodos identificados.
          </p>
        </div>
      </footer>

      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/65 p-4"
          onClick={() => setModal(null)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-label={"Detalhes de " + ("valor" in modal ? modal.titulo : modal.nome)}
            className="my-auto max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-800">
                  Informação detalhada
                </p>
                <h2 className="mt-2 text-2xl font-black md:text-3xl">
                  {"valor" in modal ? modal.titulo : modal.nome}
                </h2>
              </div>
              <button
                onClick={() => setModal(null)}
                aria-label="Fechar janela"
                className="dados-focus rounded-lg border border-slate-300 px-3 py-2 font-bold hover:bg-slate-100"
              >
                Fechar
              </button>
            </div>

            {"valor" in modal ? (
              <>
                <div className="mt-6 rounded-2xl bg-emerald-50 p-5">
                  <p className="text-3xl font-black text-[#0d452d]">
                    {modal.valor}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    {modal.unidade} · {modal.periodo}
                  </p>
                </div>
                <p className="mt-5 leading-7 text-slate-700">
                  {modal.descricao}
                </p>
                <div className="mt-5 border-t border-slate-200 pt-4">
                  <p className="text-sm font-bold">Fonte</p>
                  <p className="mt-1 text-sm text-slate-600">{modal.fonte}</p>
                  <a
                    href={modal.url}
                    target="_blank"
                    rel="noreferrer"
                    className="dados-focus mt-4 inline-block font-bold text-emerald-800 underline"
                  >
                    Consultar publicação original
                  </a>
                </div>
              </>
            ) : (
              <>
                <p className="mt-5 leading-7 text-slate-700">
                  {modal.introducao}
                </p>
                {[
                  { titulo: "Desafios", itens: modal.problemas },
                  { titulo: "Soluções propostas", itens: modal.solucoes },
                  {
                    titulo: "Indicadores a acompanhar",
                    itens: modal.indicadores,
                  },
                ].map((grupo) => (
                  <div key={grupo.titulo} className="mt-6">
                    <h3 className="font-extrabold">{grupo.titulo}</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">
                      {grupo.itens.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="mt-6 border-t border-slate-200 pt-4">
                  <p className="text-sm text-slate-500">
                    Fonte de referência: {modal.fonte}
                  </p>
                  <a
                    href={modal.url}
                    target="_blank"
                    rel="noreferrer"
                    className="dados-focus mt-3 inline-block font-bold text-emerald-800 underline"
                  >
                    Consultar fonte
                  </a>
                </div>
              </>
            )}
          </section>
        </div>
      )}
    </main>
  );
}