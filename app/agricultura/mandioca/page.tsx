
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Provincia = {
  nome: string;
  regiao: string;
  aptidao: string;
  solo: string;
  clima: string;
  sistema: string;
  observacao: string;
};

type Imagem = {
  src: string;
  href: string;
  alt: string;
  legenda: string;
  fonte: string;
};

type Genotipo = {
  nome: string;
  origem: string;
  provincia: string;
  estatuto: string;
  destaque?: boolean;
};

const provincias: Provincia[] = [
  {
    nome: "Bengo",
    regiao: "Norte",
    aptidao: "Boa aptidão em áreas com humidade adequada",
    solo: "Preferir solos profundos e bem drenados, evitando encharcamento prolongado.",
    clima: "Tropical, com estação chuvosa e estação seca.",
    sistema: "Agricultura familiar e sistemas mistos.",
    observacao:
      "A escolha da parcela deve considerar drenagem, disponibilidade de manivas e acesso ao mercado.",
  },
  {
    nome: "Benguela",
    regiao: "Centro-Oeste",
    aptidao: "Aptidão variável conforme disponibilidade de água",
    solo: "Preferir solos profundos e bem drenados.",
    clima: "Maior limitação hídrica em várias zonas.",
    sistema: "Sequeiro e irrigação onde disponível.",
    observacao:
      "Em áreas secas, a disponibilidade de água deve ser avaliada antes da expansão da área cultivada.",
  },
  {
    nome: "Bié",
    regiao: "Centro",
    aptidao: "Boa possibilidade em sistemas de agricultura familiar",
    solo: "Solos profundos e bem drenados são preferíveis.",
    clima: "Clima de altitude com período chuvoso marcado.",
    sistema: "Agricultura familiar e policultivos.",
    observacao:
      "A mandioca pode integrar sistemas diversificados, considerando o ciclo do material utilizado.",
  },
  {
    nome: "Cabinda",
    regiao: "Norte",
    aptidao: "Elevada importância potencial",
    solo: "Solos com boa drenagem e fertilidade adequada.",
    clima: "Quente e húmido.",
    sistema: "Agricultura familiar e sistemas alimentares diversificados.",
    observacao:
      "A elevada humidade exige atenção especial à drenagem e à sanidade.",
  },
  {
    nome: "Cuando",
    regiao: "Sudeste",
    aptidao: "Aptidão dependente do regime de chuvas",
    solo: "Preferir solos leves a médios e sem encharcamento.",
    clima: "Estacional, com períodos de chuva e seca.",
    sistema: "Agricultura familiar.",
    observacao:
      "A disponibilidade de material de plantio saudável é uma variável importante.",
  },
  {
    nome: "Cubango",
    regiao: "Sudeste",
    aptidao: "Aptidão localizada",
    solo: "Solos bem drenados.",
    clima: "Tropical sazonal.",
    sistema: "Agricultura familiar.",
    observacao:
      "O calendário deve ser adaptado ao início efectivo das chuvas.",
  },
  {
    nome: "Cuanza Norte",
    regiao: "Norte",
    aptidao: "Boa aptidão",
    solo: "Solos profundos, estruturados e bem drenados.",
    clima: "Tropical húmido a sub-húmido.",
    sistema: "Agricultura familiar e policultivos.",
    observacao:
      "A província aparece entre as origens de vários materiais de mandioca estudados em Angola.",
  },
  {
    nome: "Cuanza Sul",
    regiao: "Centro",
    aptidao: "Aptidão variável",
    solo: "Preferir parcelas com boa drenagem e profundidade.",
    clima: "Varia de zonas mais húmidas a áreas com maior limitação hídrica.",
    sistema: "Agricultura familiar e produção comercial localizada.",
    observacao:
      "O material de plantio deve ser seleccionado de acordo com finalidade e duração do ciclo.",
  },
  {
    nome: "Cunene",
    regiao: "Sul",
    aptidao: "Limitada pelo regime hídrico",
    solo: "Solos leves ou arenosos podem ser utilizados quando existe disponibilidade hídrica.",
    clima: "Seco e semiárido em grande parte da província.",
    sistema: "Produção familiar e sistemas apoiados por irrigação.",
    observacao:
      "A água é uma das principais variáveis para a expansão da cultura.",
  },
  {
    nome: "Huambo",
    regiao: "Centro",
    aptidao: "Aptidão localizada",
    solo: "Preferir solos profundos e bem drenados.",
    clima: "Clima de altitude com estação chuvosa marcada.",
    sistema: "Agricultura familiar e policultivos.",
    observacao:
      "Pode integrar sistemas diversificados com milho, feijão e outras culturas.",
  },
  {
    nome: "Huíla",
    regiao: "Sul",
    aptidao: "Variável segundo altitude, solo e água",
    solo: "Preferir solos profundos e bem drenados.",
    clima: "Muito variável entre zonas.",
    sistema: "Sequeiro e irrigação localizada.",
    observacao:
      "A limitação hídrica deve ser considerada no calendário e escolha da parcela.",
  },
  {
    nome: "Icolo e Bengo",
    regiao: "Norte",
    aptidao: "Aptidão localizada",
    solo: "Preferir solos com boa drenagem.",
    clima: "Tropical com forte influência da estação seca.",
    sistema: "Produção familiar e periurbana.",
    observacao:
      "A proximidade dos mercados pode favorecer a comercialização e transformação.",
  },
  {
    nome: "Luanda",
    regiao: "Norte",
    aptidao: "Limitada para produção extensiva",
    solo: "Variável; depende fortemente de água e condições locais.",
    clima: "Tropical seco.",
    sistema: "Produção periurbana e irrigada em áreas específicas.",
    observacao:
      "Maior interesse potencial em cadeias de transformação e abastecimento periurbano.",
  },
  {
    nome: "Lunda Norte",
    regiao: "Leste",
    aptidao: "Boa aptidão em áreas adequadas",
    solo: "Solos profundos e bem drenados.",
    clima: "Tropical húmido.",
    sistema: "Agricultura familiar.",
    observacao:
      "A mandioca integra sistemas alimentares e agrícolas da região.",
  },
  {
    nome: "Lunda Sul",
    regiao: "Leste",
    aptidao: "Boa aptidão em áreas adequadas",
    solo: "Solos bem drenados e de profundidade suficiente.",
    clima: "Tropical sazonal.",
    sistema: "Agricultura familiar e cooperativas.",
    observacao:
      "Existem experiências documentadas de apoio a cooperativas agrícolas.",
  },
  {
    nome: "Malanje",
    regiao: "Norte",
    aptidao: "Zona estratégica para investigação e produção",
    solo: "O estudo de diversidade genética foi realizado em solo classificado como Fersialítico.",
    clima: "Subtropical húmido no local experimental estudado.",
    sistema: "Agricultura familiar, comercial e investigação.",
    observacao:
      "Malanje possui importância científica especial devido aos estudos de diversidade genética e ao Centro Regional de Liderança da Mandioca.",
  },
  {
    nome: "Moxico",
    regiao: "Leste",
    aptidao: "Boa aptidão em áreas adequadas",
    solo: "Solos leves a médios, desde que bem drenados.",
    clima: "Tropical sazonal.",
    sistema: "Agricultura familiar.",
    observacao:
      "A mandioca pode integrar sistemas de produção diversificados.",
  },
  {
    nome: "Moxico Leste",
    regiao: "Leste",
    aptidao: "Aptidão a avaliar localmente",
    solo: "Avaliar profundidade, drenagem e fertilidade.",
    clima: "Tropical sazonal.",
    sistema: "Agricultura familiar.",
    observacao:
      "Não devem ser transferidos automaticamente dados históricos das antigas divisões administrativas.",
  },
  {
    nome: "Namibe",
    regiao: "Sul",
    aptidao: "Limitada sem disponibilidade de água",
    solo: "Produção condicionada às características locais e à irrigação.",
    clima: "Árido a semiárido.",
    sistema: "Irrigação localizada onde disponível.",
    observacao:
      "A água é um factor decisivo para a expansão da cultura.",
  },
  {
    nome: "Uíge",
    regiao: "Norte",
    aptidao: "Elevada importância agrícola",
    solo: "Solos profundos e bem drenados são preferíveis.",
    clima: "Tropical húmido.",
    sistema: "Agricultura familiar e policultivos.",
    observacao:
      "Vários materiais estudados em Angola tiveram origem no Uíge.",
  },
  {
    nome: "Zaire",
    regiao: "Norte",
    aptidao: "Boa aptidão em áreas adequadas",
    solo: "Solos bem drenados.",
    clima: "Tropical húmido.",
    sistema: "Agricultura familiar.",
    observacao:
      "A cultura integra sistemas alimentares da região norte.",
  },
];

const imagens: Imagem[] = [
  {
    src: "https://www.wfp.org/sites/default/files/images/WF1760776%201M6A8458-2.jpg",
    href: "https://www.wfp.org/countries/republic-angola",
    alt: "Mulher a colher mandioca em Angola",
    legenda: "Actividade agrícola relacionada com mandioca em Angola.",
    fonte: "World Food Programme — WFP",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/630f057030d65652c8339e01/d66e458d-41fe-4946-938f-acda84b6980f/Anita-Baumann-Photography-Women-agriculture_6.jpg",
    href: "https://www.anitabaumann.ch/women-in-the-economy-below-the-baobab-trees",
    alt: "Mulheres em actividade agrícola em Angola",
    legenda: "Mulheres em actividade agrícola numa comunidade angolana.",
    fonte: "Anita Baumann Photography",
  },
  {
    src: "https://valoreconomico.co.ao/uploads/images/2025/02/fada-financia-17-cooperativas-agricolas-na-lunda-sul-1739475756.jpg",
    href: "https://valoreconomico.co.ao/artigo/fada-financia-17-cooperativas-agricolas-na-lunda-sul",
    alt: "Actividade agrícola na Lunda Sul",
    legenda: "Actividade agrícola documentada na Lunda Sul.",
    fonte: "Valor Económico",
  },
  {
    src: "https://economiarural.ao/wp-content/uploads/2023/11/image-13.png",
    href: "https://economiarural.ao/uige-produz-anualmente-quatro-milhoes-de-toneladas-de-mandioca/",
    alt: "Mandioca colhida em Angola",
    legenda: "Mandioca e actividade produtiva no Uíge.",
    fonte: "Economia Rural",
  },
  {
    src: "https://cdn.prod.website-files.com/5a8e71e3c7881c000130ff13/67d21e06ea513c3de6398b28_WhatsApp%20Image%202025-03-12%20at%2014.50.45.jpeg",
    href: "https://www.adra-angola.org/artigos/oshauyo-floresce-impulsionamento-da-seguranca-alimentar-e-transformacao-da-comunidade-ao-decorrer-do-projecto-para-cunene",
    alt: "Produção agrícola comunitária no Cunene",
    legenda: "Experiência agrícola comunitária documentada no Cunene.",
    fonte: "ADRA Angola",
  },
];

/*
 * IMPORTANTE:
 * Estes são materiais/genótipos documentados em estudos realizados
 * em Angola. Não são apresentados como variedades comerciais
 * actualmente certificadas ou disponíveis no mercado.
 */
const genotipos: Genotipo[] = [
  {
    nome: "Tio Jojo",
    origem: "Ndalatando",
    provincia: "Cuanza Norte",
    estatuto: "Material promissor",
    destaque: true,
  },
  {
    nome: "Ngana Yuculu",
    origem: "Malanje",
    provincia: "Malanje",
    estatuto: "Material promissor",
    destaque: true,
  },
  {
    nome: "Kimbanda",
    origem: "Cuanza Norte",
    provincia: "Cuanza Norte",
    estatuto: "Material promissor",
    destaque: true,
  },
  {
    nome: "Vermute",
    origem: "Registo nacional",
    provincia: "Origem ampla",
    estatuto: "Material promissor",
    destaque: true,
  },
  {
    nome: "Jaca Vermelha",
    origem: "Ndalatando",
    provincia: "Cuanza Norte",
    estatuto: "Material promissor",
    destaque: true,
  },
  {
    nome: "Jaca Branca",
    origem: "Ndalatando",
    provincia: "Cuanza Norte",
    estatuto: "Material promissor",
    destaque: true,
  },
  {
    nome: "Waticamana",
    origem: "Kalandula — Luxilu de Cima",
    provincia: "Malanje",
    estatuto: "Genótipo avaliado",
  },
  {
    nome: "Maria dia Pedro",
    origem: "Kalandula — Luxilu de Cima",
    provincia: "Malanje",
    estatuto: "Genótipo avaliado",
  },
  {
    nome: "Hoto",
    origem: "Kalandula — Luxilu de Cima",
    provincia: "Malanje",
    estatuto: "Genótipo avaliado",
  },
  {
    nome: "Mata Capim",
    origem: "Kalandula — Luxilu de Cima",
    provincia: "Malanje",
    estatuto: "Genótipo avaliado",
  },
  {
    nome: "Kambaxi",
    origem: "Kalandula — Luxilu de Cima",
    provincia: "Malanje",
    estatuto: "Genótipo avaliado",
  },
  {
    nome: "Paco Vermelho",
    origem: "Quizenga",
    provincia: "Malanje",
    estatuto: "Genótipo avaliado",
  },
  {
    nome: "Verdinha",
    origem: "Quizenga",
    provincia: "Malanje",
    estatuto: "Genótipo avaliado",
  },
  {
    nome: "MukotouaNguadi (Pé de perdiz)",
    origem: "Aldeia Cambondo do Kuige",
    provincia: "Malanje",
    estatuto: "Genótipo avaliado",
  },
  {
    nome: "Paco Branco",
    origem: "Ndalatando",
    provincia: "Cuanza Norte",
    estatuto: "Genótipo avaliado",
  },
  {
    nome: "Munenga",
    origem: "Cuanza Norte",
    provincia: "Cuanza Norte",
    estatuto: "Genótipo avaliado",
  },
  {
    nome: "Suzi",
    origem: "Ndalatando",
    provincia: "Cuanza Norte",
    estatuto: "Genótipo avaliado",
  },
  {
    nome: "Kalazula",
    origem: "Ndalatando",
    provincia: "Cuanza Norte",
    estatuto: "Genótipo avaliado",
  },
  {
    nome: "Ngana Rico 1 (Uíge)",
    origem: "Dange-Kitexi — Quitoque",
    provincia: "Uíge",
    estatuto: "Genótipo avaliado",
  },
  {
    nome: "TMS3",
    origem: "Aldeia Kiongua",
    provincia: "Uíge",
    estatuto: "Genótipo avaliado",
  },
  {
    nome: "Mandioca Banana",
    origem: "Uíge",
    provincia: "Uíge",
    estatuto: "Genótipo avaliado",
  },
  {
    nome: "Rio Dange",
    origem: "Uíge",
    provincia: "Uíge",
    estatuto: "Genótipo avaliado",
  },
  {
    nome: "Cassandi",
    origem: "Uíge",
    provincia: "Uíge",
    estatuto: "Genótipo avaliado",
  },
  {
    nome: "Guita",
    origem: "Malanje",
    provincia: "Malanje",
    estatuto: "Genótipo avaliado",
  },
  {
    nome: "Chico dia kombe",
    origem: "Malanje",
    provincia: "Malanje",
    estatuto: "Genótipo avaliado",
  },
  {
    nome: "TMS 4025 (Precoce de Angola)",
    origem: "Malanje",
    provincia: "Malanje",
    estatuto: "Genótipo avaliado",
  },
  {
    nome: "Kalami",
    origem: "Malanje",
    provincia: "Malanje",
    estatuto: "Genótipo avaliado",
  },
  {
    nome: "Baco",
    origem: "Malanje",
    provincia: "Malanje",
    estatuto: "Genótipo avaliado",
  },
  {
    nome: "Katenda",
    origem: "Malanje",
    provincia: "Malanje",
    estatuto: "Genótipo avaliado",
  },
  {
    nome: "Malanje",
    origem: "Malanje",
    provincia: "Malanje",
    estatuto: "Genótipo avaliado",
  },
  {
    nome: "Ngana Rico 2 (Malanje)",
    origem: "Malanje",
    provincia: "Malanje",
    estatuto: "Genótipo avaliado",
  },
  {
    nome: "Kalawenda",
    origem: "Malanje",
    provincia: "Malanje",
    estatuto: "Genótipo avaliado",
  },
  {
    nome: "Gonçalo",
    origem: "Malanje",
    provincia: "Malanje",
    estatuto: "Genótipo avaliado",
  },
  {
    nome: "Mundele Paco",
    origem: "Malanje",
    provincia: "Malanje",
    estatuto: "Genótipo avaliado",
  },
  {
    nome: "Suingui",
    origem: "Malanje",
    provincia: "Malanje",
    estatuto: "Genótipo avaliado",
  },
  {
    nome: "Muringa",
    origem: "Malanje",
    provincia: "Malanje",
    estatuto: "Genótipo avaliado",
  },
  {
    nome: "Kinzela",
    origem: "Malanje",
    provincia: "Malanje",
    estatuto: "Genótipo avaliado",
  },
  {
    nome: "Mpelo",
    origem: "Uíge",
    provincia: "Uíge",
    estatuto: "Genótipo avaliado",
  },
  {
    nome: "Gueti",
    origem: "Malanje",
    provincia: "Malanje",
    estatuto: "Genótipo avaliado",
  },
  {
    nome: "Kapumba",
    origem: "Malanje",
    provincia: "Malanje",
    estatuto: "Genótipo avaliado",
  },
];

const pragas = [
  {
    nome: "Ácaros",
    sinal:
      "Alterações na aparência das folhas, redução do vigor e sintomas associados à alimentação do artrópode.",
    manejo:
      "Monitorizar regularmente e confirmar o organismo antes de escolher qualquer medida de controlo.",
  },
  {
    nome: "Cochonilhas e insectos sugadores",
    sinal:
      "Presença de insectos nas folhas ou ramos, enfraquecimento e deformação do crescimento.",
    manejo:
      "Identificar correctamente o organismo e priorizar manejo integrado.",
  },
  {
    nome: "Pragas do material de plantio",
    sinal:
      "Danos nos caules, manivas debilitadas ou baixa emergência.",
    manejo:
      "Utilizar material vigoroso e evitar transportar manivas de parcelas com sintomas suspeitos.",
  },
];

const doencas = [
  {
    nome: "Mosaicos da mandioca",
    descricao:
      "Doenças virais podem provocar mosaico, deformação foliar e redução do desenvolvimento das plantas.",
    prevencao:
      "Utilizar material de plantio saudável, vigiar a cultura e retirar plantas com sintomas conforme orientação técnica.",
  },
  {
    nome: "Bacteriose",
    descricao:
      "Doenças bacterianas podem provocar lesões e danos nos tecidos vegetais.",
    prevencao:
      "Utilizar material saudável e reduzir a movimentação de material suspeito entre parcelas.",
  },
  {
    nome: "Podridões radiculares",
    descricao:
      "Problemas radiculares podem estar relacionados com excesso de água, condições do solo e agentes patogénicos.",
    prevencao:
      "Preferir áreas com boa drenagem e acompanhar o desenvolvimento das raízes.",
  },
];

const etapas = [
  {
    titulo: "1. Escolha da parcela",
    texto:
      "Escolher uma área profunda, bem drenada e sem histórico sanitário problemático.",
  },
  {
    titulo: "2. Preparação do solo",
    texto:
      "Preparar o terreno conforme as condições locais, evitando compactação excessiva e degradação do solo.",
  },
  {
    titulo: "3. Selecção das manivas",
    texto:
      "Seleccionar caules provenientes de plantas vigorosas e sem sintomas de doenças.",
  },
  {
    titulo: "4. Plantação",
    texto:
      "Definir espaçamento, posição e profundidade da maniva de acordo com solo, variedade, água e sistema de produção.",
  },
  {
    titulo: "5. Controlo de infestantes",
    texto:
      "Controlar a competição das infestantes principalmente durante o estabelecimento da cultura.",
  },
  {
    titulo: "6. Monitorização",
    texto:
      "Observar folhas, caules, crescimento e sinais de pragas ou doenças.",
  },
  {
    titulo: "7. Colheita",
    texto:
      "O momento deve considerar a finalidade da produção e as características do material cultivado.",
  },
  {
    titulo: "8. Pós-colheita",
    texto:
      "Organizar rapidamente transporte, processamento, secagem ou comercialização.",
  },
];

const referencias = [
  {
    titulo: "AGRIS/FAO — Diversidade genética e selecção de genótipos de mandioca em Angola",
    descricao:
      "Registo técnico que documenta a avaliação de 40 genótipos em Malanje e identifica materiais promissores.",
    href: "https://agris.fao.org/search/es/records/674852007625988a371a478c",
  },
  {
    titulo: "Diversidade genética em variedades de mandioca nas condições agroecológicas de Malanje",
    descricao:
      "Estudo com 40 variedades, origem dos materiais, condições de Malanje, solo Fersialítico e espaçamento experimental de 90 × 90 cm.",
    href: "https://www.researchgate.net/publication/341988222_DIVERSIDADE_GENETICA_EM_VARIEDADES_DE_MANDIOCA_MANIHOT_ESCULENTA_CRANTZ_NAS_CONDICOES_AGROECOLOGICAS_DE_MALANJE",
  },
  {
    titulo: "Avaliação agronómica de genótipos de mandioca em Angola",
    descricao:
      "Estudo de genótipos provenientes do banco de germoplasma do IIA, realizado na Companhia de Alimentos de Malanje.",
    href: "https://ojs.brazilianjournals.com.br/ojs/index.php/BJAER/article/view/24023",
  },
  {
    titulo: "Embrapa — Espaçamento da mandioca",
    descricao:
      "Referência técnica geral sobre espaçamento em fileiras simples e duplas. Não constitui recomendação específica para Angola.",
    href: "https://www.atermaisdigital.cnptia.embrapa.br/web/mandioca/espacamento",
  },
  {
    titulo: "MINAGRIF — Centro Regional de Liderança da Mandioca",
    descricao:
      "Informação oficial sobre o Centro Regional de Liderança da Mandioca inaugurado em Malanje em 2025.",
    href: "https://minagrif.gov.ao/web/noticias/inaugurado-o-centro-regional-de-lideranca-da-mandioca-em-malanje",
  },
  {
    titulo: "INE — ICAPP 2024/2025",
    descricao:
      "Fonte estatística oficial para os dados agrícolas da campanha 2024/2025.",
    href: "https://www.ine.gov.ao/publicacoes/detalhes/NTM0NzU%3D",
  },
];

export default function MandiocaPage() {
  const [provinciaSelecionada, setProvinciaSelecionada] =
    useState("Malanje");

  const [pesquisaGenotipo, setPesquisaGenotipo] = useState("");

  const [mostrarTodos, setMostrarTodos] = useState(false);

  const provincia = useMemo(
    () =>
      provincias.find(
        (item) => item.nome === provinciaSelecionada
      ) ?? provincias[0],
    [provinciaSelecionada]
  );

  const genotiposFiltrados = useMemo(() => {
    const termo = pesquisaGenotipo.trim().toLowerCase();

    const resultado = genotipos.filter((item) => {
      if (!termo) return true;

      return (
        item.nome.toLowerCase().includes(termo) ||
        item.origem.toLowerCase().includes(termo) ||
        item.provincia.toLowerCase().includes(termo)
      );
    });

    return mostrarTodos
      ? resultado
      : resultado.slice(0, 12);
  }, [pesquisaGenotipo, mostrarTodos]);

  const promissores = genotipos.filter(
    (item) => item.destaque
  );

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-stone-950">
        <img
          src={imagens[0].src}
          alt={imagens[0].alt}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
          <div className="max-w-4xl">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">
              AGROINOVA ANGOLA · AGRICULTURA
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
              Mandioca em Angola
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-200 sm:text-xl">
              Informação técnica sobre variedades e genótipos
              documentados em Angola, solos, espaçamento, material de
              plantio, produção, sanidade, pós-colheita e investigação.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <Link
                href="/agricultura"
                className="rounded-xl bg-white px-5 py-3 font-bold text-stone-900 hover:bg-stone-200"
              >
                ← Voltar à Agricultura
              </Link>

              <a
                href="#genetica"
                className="rounded-xl border border-white/40 bg-black/20 px-5 py-3 font-bold text-white backdrop-blur hover:bg-white/10"
              >
                Ver genótipos
              </a>

              <a
                href="#espacamento"
                className="rounded-xl border border-white/40 bg-black/20 px-5 py-3 font-bold text-white backdrop-blur hover:bg-white/10"
              >
                Ver espaçamento
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-4 text-sm text-stone-500 sm:px-8 lg:px-12">

          <Link
            href="/agricultura"
            className="font-semibold hover:text-green-700"
          >
            Agricultura
          </Link>

          <span className="mx-2">/</span>

          <span className="font-semibold text-stone-900">
            Mandioca
          </span>

        </div>
      </div>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">

          <div>

            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Manihot esculenta Crantz
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Uma cultura estratégica para Angola
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-stone-700">

              <p>
                A mandioca é uma cultura de elevada importância nos
                sistemas agrícolas e alimentares de Angola. A sua
                capacidade de adaptação permite o cultivo em diferentes
                ambientes, mas a produtividade depende da combinação
                entre material genético, solo, água, sanidade e manejo.
              </p>

              <p>
                Em Angola já foram realizados estudos científicos de
                diversidade genética e avaliação agronómica de materiais
                de mandioca, particularmente em Malanje. Esses estudos
                permitem ir além de descrições genéricas e conhecer
                materiais que foram efectivamente avaliados em condições
                angolanas.
              </p>

              <p>
                Esta página distingue cuidadosamente três coisas:
                materiais estudados pela investigação, materiais
                considerados promissores e recomendações agronómicas
                gerais. Um genótipo estudado não deve ser automaticamente
                apresentado como variedade comercial certificada.
              </p>

            </div>
          </div>

          <div className="rounded-3xl border border-green-200 bg-green-50 p-7">

            <p className="text-sm font-bold uppercase tracking-widest text-green-800">
              Evidência científica
            </p>

            <h3 className="mt-3 text-3xl font-black">
              40 genótipos estudados em Malanje
            </h3>

            <p className="mt-4 leading-7 text-stone-700">
              Uma investigação avaliou 40 genótipos de mandioca em
              condições agroecológicas de Malanje, utilizando quatro
              repetições e espaçamento experimental de 90 × 90 cm.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">

              <div className="rounded-2xl bg-white p-4">
                <p className="text-3xl font-black text-green-800">
                  40
                </p>
                <p className="text-sm text-stone-500">
                  genótipos
                </p>
              </div>

              <div className="rounded-2xl bg-white p-4">
                <p className="text-3xl font-black text-green-800">
                  90 cm
                </p>
                <p className="text-sm text-stone-500">
                  entre plantas
                </p>
              </div>

              <div className="rounded-2xl bg-white p-4">
                <p className="text-3xl font-black text-green-800">
                  90 cm
                </p>
                <p className="text-sm text-stone-500">
                  entre linhas
                </p>
              </div>

              <div className="rounded-2xl bg-white p-4">
                <p className="text-3xl font-black text-green-800">
                  Malanje
                </p>
                <p className="text-sm text-stone-500">
                  local do ensaio
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="border-y border-stone-200 bg-white">

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">

          <p className="text-sm font-bold uppercase tracking-widest text-green-700">
            Fotografias reais
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            Mandioca e agricultura em Angola
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-600">
            As fotografias são provenientes de fontes externas e estão
            associadas às respectivas páginas de origem.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {imagens.map((imagem) => (

              <a
                key={imagem.src}
                href={imagem.href}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-3xl border border-stone-200 bg-stone-50 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="aspect-[4/3] overflow-hidden">

                  <img
                    src={imagem.src}
                    alt={imagem.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                </div>

                <div className="p-5">

                  <p className="font-bold leading-6">
                    {imagem.legenda}
                  </p>

                  <p className="mt-2 text-sm text-stone-500">
                    Fonte: {imagem.fonte}
                  </p>

                  <p className="mt-3 text-sm font-bold text-green-700">
                    Abrir fonte da fotografia →
                  </p>

                </div>

              </a>

            ))}

          </div>
        </div>
      </section>

      {/* SOLOS */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">

        <div className="grid gap-10 lg:grid-cols-2">

          <div>

            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Solo e ambiente
            </p>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Que solos são adequados?
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-stone-700">

              <p>
                A mandioca apresenta capacidade de adaptação a diferentes
                condições, mas o solo continua a ser determinante para o
                desenvolvimento das raízes e para a facilidade de colheita.
              </p>

              <p>
                Na investigação de diversidade genética realizada em
                Malanje, o solo do local experimental foi classificado
                como <strong>Fersialítico</strong>.
              </p>

              <p>
                Isso não significa que todas as variedades de mandioca
                devam ser cultivadas exclusivamente em solos Fersialíticos.
                Significa que os resultados daquele ensaio foram obtidos
                naquele ambiente específico.
              </p>

            </div>

          </div>

          <div className="grid gap-4">

            {[
              [
                "Solo profundo",
                "Favorece o desenvolvimento das raízes e facilita a colheita.",
              ],
              [
                "Boa drenagem",
                "Evita excesso de água e reduz condições favoráveis a problemas radiculares.",
              ],
              [
                "Boa estrutura",
                "Facilita o crescimento das raízes e a formação das raízes de reserva.",
              ],
              [
                "Fertilidade adequada",
                "A disponibilidade de nutrientes deve ser avaliada e gerida conforme a análise do solo.",
              ],
              [
                "Evitar encharcamento",
                "Áreas com água acumulada durante períodos prolongados exigem avaliação cuidadosa.",
              ],
            ].map(([titulo, texto]) => (

              <div
                key={titulo}
                className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
              >

                <h3 className="text-xl font-black">
                  {titulo}
                </h3>

                <p className="mt-2 leading-7 text-stone-600">
                  {texto}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* GENÉTICA */}
      <section
        id="genetica"
        className="bg-stone-950 text-white"
      >

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">

          <p className="text-sm font-bold uppercase tracking-widest text-amber-300">
            Genética da mandioca em Angola
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            Materiais realmente documentados
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-stone-300">
            A investigação realizada em Angola não avaliou apenas uma
            variedade. Foram estudados 40 genótipos, permitindo observar
            diferenças morfoagronómicas e diversidade genética entre os
            materiais.
          </p>

          {/* DESTAQUES */}
          <div className="mt-10">

            <h3 className="text-2xl font-black">
              Materiais considerados promissores
            </h3>

            <p className="mt-3 max-w-4xl leading-7 text-stone-400">
              Estes seis materiais aparecem na literatura científica como
              genótipos com potencial para contribuir para a diversificação
              da cultura da mandioca em Angola. Isto não significa que sejam
              actualmente variedades comerciais certificadas.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {promissores.map((item) => (

                <article
                  key={item.nome}
                  className="rounded-3xl border border-amber-300/30 bg-amber-300/10 p-6"
                >

                  <p className="text-xs font-bold uppercase tracking-widest text-amber-300">
                    Material promissor
                  </p>

                  <h4 className="mt-2 text-2xl font-black">
                    {item.nome}
                  </h4>

                  <p className="mt-4 text-sm leading-6 text-stone-300">
                    Origem documentada: {item.origem}
                  </p>

                  <p className="mt-1 text-sm text-stone-400">
                    Província: {item.provincia}
                  </p>

                </article>

              ))}

            </div>
          </div>

          {/* PESQUISA */}
          <div className="mt-14">

            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

              <div>

                <h3 className="text-2xl font-black">
                  Banco de materiais estudados
                </h3>

                <p className="mt-2 max-w-3xl text-stone-400">
                  Lista de materiais documentados na investigação de
                  diversidade genética em Angola.
                </p>

              </div>

              <div className="w-full md:w-80">

                <label
                  htmlFor="pesquisa-genotipo"
                  className="text-sm font-bold text-stone-300"
                >
                  Pesquisar material
                </label>

                <input
                  id="pesquisa-genotipo"
                  type="text"
                  value={pesquisaGenotipo}
                  onChange={(event) =>
                    setPesquisaGenotipo(event.target.value)
                  }
                  placeholder="Ex.: Tio Jojo, Uíge, Malanje..."
                  className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-stone-500 focus:border-amber-300"
                />

              </div>

            </div>

            <div className="mt-7 overflow-hidden rounded-3xl border border-white/10">

              <div className="hidden grid-cols-[1.2fr_1fr_1fr_1fr] gap-4 bg-white/10 px-5 py-4 text-sm font-bold text-stone-300 md:grid">
                <span>Genótipo</span>
                <span>Origem</span>
                <span>Província</span>
                <span>Estatuto</span>
              </div>

              {genotiposFiltrados.map((item) => (

                <div
                  key={item.nome}
                  className="grid gap-2 border-t border-white/10 px-5 py-5 md:grid-cols-[1.2fr_1fr_1fr_1fr] md:gap-4"
                >

                  <div>
                    <p className="font-black">
                      {item.nome}
                    </p>
                  </div>

                  <div className="text-sm text-stone-400">
                    <span className="md:hidden font-bold text-stone-300">
                      Origem:{" "}
                    </span>
                    {item.origem}
                  </div>

                  <div className="text-sm text-stone-400">
                    <span className="md:hidden font-bold text-stone-300">
                      Província:{" "}
                    </span>
                    {item.provincia}
                  </div>

                  <div className="text-sm font-semibold text-green-300">
                    {item.estatuto}
                  </div>

                </div>

              ))}

            </div>

            {genotipos.length > 12 && (
              <button
                type="button"
                onClick={() => setMostrarTodos((valor) => !valor)}
                className="mt-5 rounded-xl border border-white/20 px-5 py-3 font-bold text-white hover:bg-white/10"
              >
                {mostrarTodos
                  ? "Mostrar menos"
                  : `Mostrar todos os ${genotipos.length} materiais`}
              </button>
            )}

          </div>

          {/* NOTA CIENTÍFICA */}
          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-7">

            <h3 className="text-2xl font-black">
              Como interpretar estes nomes?
            </h3>

            <p className="mt-4 max-w-5xl leading-8 text-stone-300">
              Os nomes apresentados correspondem a materiais encontrados
              e avaliados na investigação científica. A página não afirma
              que todos estejam actualmente multiplicados, certificados,
              comercializados ou recomendados para plantio em qualquer
              província de Angola.
            </p>

            <p className="mt-4 max-w-5xl leading-8 text-stone-300">
              Para uma recomendação comercial actual, o produtor deve
              confirmar a disponibilidade, identidade genética, sanidade
              e recomendação junto das instituições competentes e dos
              programas de produção de sementes ou material de plantio.
            </p>

          </div>

        </div>
      </section>

      {/* ESPAÇAMENTO */}
      <section
        id="espacamento"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12"
      >

        <div className="max-w-4xl">

          <p className="text-sm font-bold uppercase tracking-widest text-green-700">
            Espaçamento de plantação
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            Quantos centímetros entre plantas e linhas?
          </h2>

          <p className="mt-5 text-lg leading-8 text-stone-700">
            Existem duas referências diferentes que devem ser separadas:
            o espaçamento utilizado no estudo realizado em Angola e as
            recomendações gerais de agronomia da mandioca.
          </p>

        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">

          {/* ANGOLA */}
          <div className="rounded-3xl border-2 border-green-200 bg-green-50 p-7">

            <p className="text-sm font-bold uppercase tracking-widest text-green-800">
              Evidência experimental em Angola
            </p>

            <h3 className="mt-3 text-3xl font-black">
              90 × 90 cm
            </h3>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl bg-white p-5">
                <p className="text-sm font-bold text-stone-500">
                  Entre linhas
                </p>

                <p className="mt-2 text-3xl font-black text-green-800">
                  90 cm
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5">
                <p className="text-sm font-bold text-stone-500">
                  Entre plantas
                </p>

                <p className="mt-2 text-3xl font-black text-green-800">
                  90 cm
                </p>
              </div>

            </div>

            <p className="mt-6 leading-8 text-stone-700">
              Este foi o espaçamento utilizado no ensaio de diversidade
              genética conduzido em Malanje com 40 genótipos.
            </p>

            <p className="mt-4 text-sm leading-6 text-stone-500">
              Fonte: estudo de diversidade genética de mandioca nas
              condições agroecológicas de Malanje.
            </p>

          </div>

          {/* GERAL */}
          <div className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm">

            <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Referência técnica geral
            </p>

            <h3 className="mt-3 text-3xl font-black">
              Fileiras simples
            </h3>

            <div className="mt-6 space-y-4">

              <div className="flex items-center justify-between rounded-2xl bg-stone-50 p-5">
                <span className="font-semibold">
                  Entre linhas
                </span>
                <strong className="text-xl">
                  90–120 cm
                </strong>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-stone-50 p-5">
                <span className="font-semibold">
                  Entre plantas
                </span>
                <strong className="text-xl">
                  60–100 cm
                </strong>
              </div>

            </div>

            <p className="mt-6 leading-7 text-stone-600">
              A Embrapa indica que o espaçamento deve considerar
              fertilidade do solo, variedade, disponibilidade de água e
              nutrientes, destino da produção, tratos culturais e tipo
              de colheita.
            </p>

            <p className="mt-4 text-sm leading-6 text-amber-800">
              Esta é uma referência técnica geral, não uma recomendação
              oficial específica para todas as regiões de Angola.
            </p>

          </div>

        </div>

        {/* DUPLA */}
        <div className="mt-6 rounded-3xl border border-stone-200 bg-white p-7">

          <h3 className="text-2xl font-black">
            Fileiras duplas — referência técnica geral
          </h3>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">

            <div className="rounded-2xl bg-stone-50 p-5">
              <p className="text-sm text-stone-500">
                Entre fileiras duplas
              </p>
              <p className="mt-2 text-2xl font-black">
                200–300 cm
              </p>
            </div>

            <div className="rounded-2xl bg-stone-50 p-5">
              <p className="text-sm text-stone-500">
                Entre plantas
              </p>
              <p className="mt-2 text-2xl font-black">
                60–80 cm
              </p>
            </div>

            <div className="rounded-2xl bg-stone-50 p-5">
              <p className="text-sm text-stone-500">
                Entre linhas da dupla
              </p>
              <p className="mt-2 text-2xl font-black">
                60–90 cm
              </p>
            </div>

          </div>

          <p className="mt-6 text-sm leading-7 text-stone-500">
            Fonte técnica geral: Embrapa Ater Mais Digital. A adopção
            deste sistema em Angola deve considerar as condições locais,
            mecanização e orientação agronómica.
          </p>

        </div>

      </section>

      {/* PROVÍNCIAS */}
      <section
        id="provincias"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12"
      >

        <div className="grid gap-10 lg:grid-cols-[320px_1fr]">

          <div>

            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Produção por território
            </p>

            <h2 className="mt-2 text-3xl font-black">
              Mandioca por província
            </h2>

            <p className="mt-4 leading-7 text-stone-600">
              Esta ferramenta apresenta uma orientação geral. Não
              substitui análise de solo, diagnóstico fitossanitário ou
              recomendação técnica local.
            </p>

            <label
              htmlFor="provincia"
              className="mt-7 block text-sm font-bold"
            >
              Seleccionar província
            </label>

            <select
              id="provincia"
              value={provinciaSelecionada}
              onChange={(event) =>
                setProvinciaSelecionada(event.target.value)
              }
              className="mt-2 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 font-semibold outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            >

              {provincias.map((item) => (
                <option
                  key={item.nome}
                  value={item.nome}
                >
                  {item.nome}
                </option>
              ))}

            </select>

          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm">

            <div className="flex flex-wrap items-start justify-between gap-4">

              <div>

                <p className="text-sm font-bold uppercase tracking-widest text-green-700">
                  {provincia.regiao}
                </p>

                <h3 className="mt-1 text-3xl font-black">
                  {provincia.nome}
                </h3>

              </div>

              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-800">
                {provincia.aptidao}
              </span>

            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">

              <div className="rounded-2xl bg-stone-50 p-5">
                <p className="text-sm font-bold uppercase tracking-wide text-stone-500">
                  Solo
                </p>
                <p className="mt-2 leading-7">
                  {provincia.solo}
                </p>
              </div>

              <div className="rounded-2xl bg-stone-50 p-5">
                <p className="text-sm font-bold uppercase tracking-wide text-stone-500">
                  Clima
                </p>
                <p className="mt-2 leading-7">
                  {provincia.clima}
                </p>
              </div>

              <div className="rounded-2xl bg-stone-50 p-5">
                <p className="text-sm font-bold uppercase tracking-wide text-stone-500">
                  Sistema
                </p>
                <p className="mt-2 leading-7">
                  {provincia.sistema}
                </p>
              </div>

              <div className="rounded-2xl bg-green-50 p-5">
                <p className="text-sm font-bold uppercase tracking-wide text-green-700">
                  Observação
                </p>
                <p className="mt-2 leading-7 text-stone-700">
                  {provincia.observacao}
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* GUIA DE PRODUÇÃO */}
      <section className="border-y border-stone-200 bg-white">

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">

          <p className="text-sm font-bold uppercase tracking-widest text-green-700">
            Guia técnico
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            Principais etapas da produção
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {etapas.map((etapa) => (

              <article
                key={etapa.titulo}
                className="rounded-3xl border border-stone-200 bg-stone-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >

                <h3 className="text-lg font-black">
                  {etapa.titulo}
                </h3>

                <p className="mt-3 leading-7 text-stone-600">
                  {etapa.texto}
                </p>

              </article>

            ))}

          </div>
        </div>
      </section>

      {/* MATERIAL DE PLANTIO */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">

        <div className="grid gap-10 lg:grid-cols-2">

          <div>

            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Material de plantio
            </p>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              A qualidade da maniva começa no campo
            </h2>

            <p className="mt-5 text-lg leading-8 text-stone-700">
              A mandioca é normalmente multiplicada vegetativamente por
              partes do caule. Isso faz com que a qualidade da planta-mãe
              e da maniva tenha grande importância para o estabelecimento
              da cultura.
            </p>

          </div>

          <div className="space-y-4">

            {[
              "Seleccionar plantas-mãe vigorosas.",
              "Evitar material com sintomas de doenças.",
              "Evitar caules danificados ou muito debilitados.",
              "Utilizar material adaptado ao ambiente de produção.",
              "Evitar transportar material de origem desconhecida sem avaliação.",
              "Manter rastreabilidade da origem das manivas sempre que possível.",
            ].map((texto) => (

              <div
                key={texto}
                className="rounded-2xl border border-green-200 bg-green-50 p-5 font-semibold leading-7"
              >
                {texto}
              </div>

            ))}

          </div>

        </div>
      </section>

      {/* PRAGAS */}
      <section className="bg-stone-100">

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">

          <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
            Sanidade
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            Pragas que merecem acompanhamento
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {pragas.map((praga) => (

              <article
                key={praga.nome}
                className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm"
              >

                <h3 className="text-xl font-black">
                  {praga.nome}
                </h3>

                <p className="mt-4 text-sm font-bold text-stone-500">
                  O que observar
                </p>

                <p className="mt-2 leading-7 text-stone-700">
                  {praga.sinal}
                </p>

                <p className="mt-4 text-sm font-bold text-green-700">
                  Manejo
                </p>

                <p className="mt-2 leading-7 text-stone-600">
                  {praga.manejo}
                </p>

              </article>

            ))}

          </div>
        </div>
      </section>

      {/* DOENÇAS */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">

        <p className="text-sm font-bold uppercase tracking-widest text-red-700">
          Doenças
        </p>

        <h2 className="mt-2 text-3xl font-black sm:text-4xl">
          Principais problemas sanitários
        </h2>

        <div className="mt-10 overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">

          {doencas.map((doenca, index) => (

            <div
              key={doenca.nome}
              className={`grid gap-4 p-6 md:grid-cols-[280px_1fr] ${
                index !== doencas.length - 1
                  ? "border-b border-stone-200"
                  : ""
              }`}
            >

              <h3 className="text-xl font-black">
                {doenca.nome}
              </h3>

              <div>

                <p className="leading-7 text-stone-700">
                  {doenca.descricao}
                </p>

                <p className="mt-3 leading-7 text-green-800">
                  <strong>Prevenção:</strong>{" "}
                  {doenca.prevencao}
                </p>

              </div>

            </div>

          ))}

        </div>
      </section>

      {/* INVESTIGAÇÃO */}
      <section className="bg-green-950 text-white">

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">

          <p className="text-sm font-bold uppercase tracking-widest text-green-300">
            Investigação em Angola
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            O que os estudos de Malanje mostram?
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">

            <article className="rounded-3xl border border-white/10 bg-white/5 p-7">

              <p className="text-sm font-bold text-green-300">
                DIVERSIDADE
              </p>

              <h3 className="mt-3 text-2xl font-black">
                Existe variabilidade genética
              </h3>

              <p className="mt-4 leading-8 text-stone-300">
                Os estudos encontraram diferenças morfoagronómicas entre
                os genótipos avaliados, o que demonstra a existência de
                diversidade útil para conservação, selecção e investigação.
              </p>

            </article>

            <article className="rounded-3xl border border-white/10 bg-white/5 p-7">

              <p className="text-sm font-bold text-green-300">
                MALANJE
              </p>

              <h3 className="mt-3 text-2xl font-black">
                Ambiente experimental
              </h3>

              <p className="mt-4 leading-8 text-stone-300">
                O ensaio ocorreu a aproximadamente 368 m de altitude,
                num local cujo solo foi classificado como Fersialítico.
                A precipitação média anual indicada no estudo foi de
                aproximadamente 1000–1200 mm.
              </p>

            </article>

            <article className="rounded-3xl border border-white/10 bg-white/5 p-7">

              <p className="text-sm font-bold text-green-300">
                SELECÇÃO
              </p>

              <h3 className="mt-3 text-2xl font-black">
                Materiais de interesse
              </h3>

              <p className="mt-4 leading-8 text-stone-300">
                Tio Jojo, Ngana Yuculu, Kimbanda, Vermute, Jaca Vermelha
                e Jaca Branca aparecem nos estudos como materiais com
                potencial para diversificação da mandioca em Angola.
              </p>

            </article>

          </div>

        </div>
      </section>

      {/* PROCESSAMENTO */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">

        <div className="grid gap-10 lg:grid-cols-2">

          <div>

            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Pós-colheita
            </p>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Da raiz ao produto
            </h2>

            <p className="mt-5 text-lg leading-8 text-stone-700">
              A mandioca fresca é altamente perecível depois da colheita.
              Por isso, a organização da cadeia de valor é fundamental.
            </p>

          </div>

          <div className="grid gap-4">

            {[
              "Mandioca fresca",
              "Farinha",
              "Fuba e outros produtos tradicionais",
              "Produtos transformados",
              "Folhas utilizadas na alimentação em determinadas tradições",
              "Subprodutos resultantes do processamento",
            ].map((produto) => (

              <div
                key={produto}
                className="rounded-2xl border border-stone-200 bg-stone-50 p-5 font-bold"
              >
                {produto}
              </div>

            ))}

          </div>

        </div>
      </section>

      {/* INSTITUIÇÕES */}
      <section className="border-y border-stone-200 bg-white">

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">

          <p className="text-sm font-bold uppercase tracking-widest text-green-700">
            Conhecimento científico
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            Instituições e investigadores
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            <div className="rounded-3xl border border-stone-200 p-6">

              <h3 className="text-xl font-black">
                Instituto de Investigação Agronómica — IIA
              </h3>

              <p className="mt-3 leading-7 text-stone-600">
                O IIA aparece como fonte de materiais de germoplasma
                utilizados nos estudos de diversidade genética de mandioca
                em Angola.
              </p>

            </div>

            <div className="rounded-3xl border border-stone-200 p-6">

              <h3 className="text-xl font-black">
                Rosalina Esperança da Silva Carlos
              </h3>

              <p className="mt-3 leading-7 text-stone-600">
                Investigadora e autora principal do estudo sobre avaliação
                agronómica de genótipos de mandioca em Angola.
              </p>

            </div>

            <div className="rounded-3xl border border-stone-200 p-6">

              <h3 className="text-xl font-black">
                Sandra Domingos João Afonso
              </h3>

              <p className="mt-3 leading-7 text-stone-600">
                Investigadora associada aos estudos de diversidade genética
                e avaliação agronómica de mandioca em Angola.
              </p>

            </div>

            <div className="rounded-3xl border border-stone-200 p-6">

              <h3 className="text-xl font-black">
                MINAGRIF
              </h3>

              <p className="mt-3 leading-7 text-stone-600">
                O Ministério da Agricultura e Florestas documentou a
                inauguração do Centro Regional de Liderança da Mandioca
                em Malanje em 2025.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* REFERÊNCIAS */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">

        <p className="text-sm font-bold uppercase tracking-widest text-green-700">
          Referências
        </p>

        <h2 className="mt-2 text-3xl font-black sm:text-4xl">
          Fontes utilizadas
        </h2>

        <div className="mt-10 space-y-4">

          {referencias.map((referencia) => (

            <a
              key={referencia.href}
              href={referencia.href}
              target="_blank"
              rel="noreferrer"
              className="block rounded-2xl border border-stone-200 bg-white p-6 transition hover:border-green-300 hover:shadow-md"
            >

              <h3 className="text-lg font-black">
                {referencia.titulo}
              </h3>

              <p className="mt-2 leading-7 text-stone-600">
                {referencia.descricao}
              </p>

              <p className="mt-3 font-bold text-green-700">
                Abrir fonte →
              </p>

            </a>

          ))}

        </div>
      </section>

      {/* INTEGRIDADE */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-12">

        <div className="rounded-3xl border border-amber-200 bg-amber-50 p-7">

          <h2 className="text-2xl font-black">
            Nota de integridade científica
          </h2>

          <div className="mt-4 max-w-5xl space-y-4 leading-8 text-stone-700">

            <p>
              Os nomes dos genótipos apresentados nesta página foram
              retirados de estudos científicos realizados em Angola.
              Não foram transformados artificialmente em variedades
              comerciais actuais.
            </p>

            <p>
              O solo Fersialítico e o espaçamento de 90 × 90 cm referem-se
              às condições experimentais documentadas em Malanje.
              Não devem ser apresentados como uma regra obrigatória para
              todas as províncias.
            </p>

            <p>
              As recomendações gerais de espaçamento provenientes de
              literatura técnica externa são identificadas separadamente
              e não são apresentadas como dados oficiais angolanos.
            </p>

            <p>
              Estatísticas de produção, área ou rendimento só devem ser
              apresentadas nesta plataforma quando estiverem ligadas a
              uma fonte oficial ou publicação técnica verificável.
            </p>

          </div>

        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="border-t border-stone-200 bg-stone-950 text-white">

        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">

          <Link
            href="/agricultura/milho"
            className="rounded-xl border border-white/20 px-5 py-3 text-center font-bold hover:bg-white/10"
          >
            ← Milho
          </Link>

          <Link
            href="/agricultura"
            className="rounded-xl bg-white px-5 py-3 text-center font-bold text-stone-900 hover:bg-stone-200"
          >
            Todas as culturas
          </Link>

          <Link
            href="/agricultura/feijao"
            className="rounded-xl border border-white/20 px-5 py-3 text-center font-bold hover:bg-white/10"
          >
            Feijão →
          </Link>

        </div>
      </section>

    </main>
  );
}

