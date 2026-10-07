
import Link from "next/link";

interface PaginaTemaProps {
  params: Promise<{ tema: string }>;
  searchParams: Promise<{
    provincia?: string;
    finalidade?: string;
  }>;
}

type Finalidade =
  | "Produção de carne"
  | "Produção de leite"
  | "Dupla aptidão"
  | "Reprodução";

type Categoria =
  | "Recurso genético angolano"
  | "Raça africana"
  | "Raça internacional";

interface Raca {
  id: string;
  nome: string;
  categoria: Categoria;
  origem: string;
  finalidades: Finalidade[];
  descricao: string;
  adaptacao: string;
  pontosFortes: string[];
  cuidados: string[];
  provincias: string[];
  evidencia: string;
  imagem: string;
}

const provincias = [
  "Bengo",
  "Benguela",
  "Bié",
  "Cabinda",
  "Cuando",
  "Cubango",
  "Cuanza Norte",
  "Cuanza Sul",
  "Cunene",
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

const finalidades: Finalidade[] = [
  "Produção de carne",
  "Produção de leite",
  "Dupla aptidão",
  "Reprodução",
];

/*
 * NOTA TÉCNICA
 *
 * Mucubal e Kwanhama são apresentados como denominações/biotipos
 * locais associados a populações bovinas Sanga, e não como raças
 * comerciais independentes.
 *
 * As imagens abaixo utilizam Wikimedia Commons.
 * Para uma versão definitiva do AGROINOVA ANGOLA, recomendamos
 * substituir posteriormente por imagens verificadas, licenciadas
 * e armazenadas localmente em /public/images/.
 */

const racas: Raca[] = [
  {
    id: "sanga",
    nome: "Sanga",
    categoria: "Recurso genético angolano",
    origem: "África Austral",
    finalidades: [
      "Produção de carne",
      "Dupla aptidão",
      "Reprodução",
    ],
    descricao:
      "Grupo de bovinos africanos de grande importância para sistemas de produção adaptados às condições locais. Estudos sobre bovinos nativos de Angola apontam relações genéticas com populações Sanga.",
    adaptacao:
      "A utilização deve considerar clima, disponibilidade de pastagem, água, sanidade, alimentação e sistema de criação.",
    pontosFortes: [
      "Adaptação a ambientes tropicais e subtropicais",
      "Importância dos recursos genéticos locais",
      "Interesse para conservação genética",
      "Potencial para sistemas de menor investimento",
    ],
    cuidados: [
      "Não assumir que todos os animais Sanga apresentam o mesmo desempenho",
      "Avaliar individualmente os animais",
      "Manter registos de reprodução e crescimento",
      "Evitar cruzamentos sem objetivo definido",
    ],
    provincias: [
      "Huambo",
      "Cunene",
      "Namibe",
      "Huíla",
    ],
    evidencia:
      "Estudos recentes sobre diversidade genética dos bovinos nativos de Angola.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Sanga%20cattle.jpg",
  },

  {
    id: "mucubal",
    nome: "Mucubal",
    categoria: "Recurso genético angolano",
    origem: "Namibe, Angola",
    finalidades: [
      "Produção de carne",
      "Reprodução",
    ],
    descricao:
      "Denominação associada a bovinos Sanga nativos encontrados no sudoeste de Angola. Estudos genéticos recentes incluíram amostras provenientes do Namibe.",
    adaptacao:
      "É importante como recurso genético associado às condições locais do sudoeste de Angola. A utilização deve respeitar as características da exploração e a conservação da diversidade genética.",
    pontosFortes: [
      "Origem associada ao território angolano",
      "Interesse para conservação genética",
      "Adaptação histórica às condições locais",
      "Relevância para sistemas de criação do sudoeste",
    ],
    cuidados: [
      "Não confundir denominação local com raça comercial padronizada",
      "Preservar animais geneticamente representativos",
      "Evitar seleção baseada apenas no tamanho",
      "Avaliar produtividade juntamente com adaptação",
    ],
    provincias: ["Namibe"],
    evidencia:
      "Amostras do Namibe foram incluídas em estudos de diversidade genética dos bovinos nativos de Angola.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cattle%20in%20Namibia.jpg",
  },

  {
    id: "kwanhama",
    nome: "Kwanhama",
    categoria: "Recurso genético angolano",
    origem: "Cunene, Angola",
    finalidades: [
      "Produção de carne",
      "Reprodução",
    ],
    descricao:
      "Denominação local associada a bovinos Sanga encontrados no Cunene. Estudos genéticos recentes analisaram amostras provenientes desta região.",
    adaptacao:
      "A sua importância está relacionada com a conservação de recursos genéticos adaptados às condições locais do sul de Angola.",
    pontosFortes: [
      "Recurso genético associado a Angola",
      "Interesse para conservação",
      "Adaptação histórica ao ambiente local",
      "Importância cultural e produtiva",
    ],
    cuidados: [
      "Evitar substituição indiscriminada por genética exótica",
      "Avaliar os animais individualmente",
      "Manter registos de origem",
      "Definir objetivo antes de iniciar cruzamentos",
    ],
    provincias: ["Cunene"],
    evidencia:
      "Estudos genéticos recentes analisaram populações bovinas do Cunene associadas ao tipo Kwanhama.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cattle%20in%20Angola.jpg",
  },

  {
    id: "brahman",
    nome: "Brahman",
    categoria: "Raça internacional",
    origem: "Estados Unidos / origem zebuína",
    finalidades: [
      "Produção de carne",
      "Reprodução",
    ],
    descricao:
      "Raça zebuína utilizada internacionalmente em sistemas de produção de carne e programas de cruzamento, especialmente em ambientes quentes.",
    adaptacao:
      "Pode ser considerada em sistemas tropicais, mas a escolha deve considerar alimentação, água, sanidade, manejo e finalidade da exploração.",
    pontosFortes: [
      "Tolerância a condições quentes",
      "Vocação para produção de carne",
      "Utilização em programas de cruzamento",
    ],
    cuidados: [
      "Garantir alimentação adequada",
      "Avaliar comportamento e manejo",
      "Selecionar reprodutores com critérios objetivos",
      "Avaliar adaptação antes da expansão do efectivo",
    ],
    provincias: [],
    evidencia:
      "Raça internacional de origem zebuína utilizada em sistemas tropicais.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Brahman%20cattle.jpg",
  },

  {
    id: "nelore",
    nome: "Nelore",
    categoria: "Raça internacional",
    origem: "Índia / seleção zebuína no Brasil",
    finalidades: [
      "Produção de carne",
      "Reprodução",
    ],
    descricao:
      "Raça zebuína amplamente utilizada na produção de carne em regiões tropicais.",
    adaptacao:
      "A introdução em Angola deve ser avaliada considerando ambiente, disponibilidade de alimentos, água, sanidade e objetivo da exploração.",
    pontosFortes: [
      "Vocação para produção de carne",
      "Utilização em ambientes tropicais",
      "Possibilidade de participação em programas de cruzamento",
    ],
    cuidados: [
      "Não confundir potencial genético com desempenho garantido",
      "Avaliar disponibilidade alimentar",
      "Controlar reprodução e sanidade",
      "Avaliar custos de aquisição e manutenção",
    ],
    provincias: [],
    evidencia:
      "Raça internacional de origem zebuína utilizada principalmente para produção de carne.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Nelore%20cattle.jpg",
  },

  {
    id: "angus",
    nome: "Angus",
    categoria: "Raça internacional",
    origem: "Escócia",
    finalidades: [
      "Produção de carne",
      "Reprodução",
    ],
    descricao:
      "Raça taurina conhecida pela produção de carne e pelas características de carcaça.",
    adaptacao:
      "Em regiões tropicais, a utilização exige avaliação das condições ambientais, disponibilidade de sombra, água, alimentação e manejo.",
    pontosFortes: [
      "Produção de carne",
      "Qualidade de carcaça",
      "Utilização em cruzamentos",
    ],
    cuidados: [
      "Avaliar tolerância ao calor",
      "Garantir alimentação suficiente",
      "Garantir água e sombra",
      "Selecionar sistema de criação adequado",
    ],
    provincias: [],
    evidencia:
      "Raça internacional. A adequação a uma província angolana deve ser avaliada localmente.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Angus%20cattle.jpg",
  },

  {
    id: "hereford",
    nome: "Hereford",
    categoria: "Raça internacional",
    origem: "Inglaterra",
    finalidades: [
      "Produção de carne",
      "Reprodução",
    ],
    descricao:
      "Raça bovina especializada na produção de carne e utilizada internacionalmente.",
    adaptacao:
      "A introdução em ambientes tropicais deve considerar calor, alimentação, água, sombra e sistema de criação.",
    pontosFortes: [
      "Produção de carne",
      "Bom potencial de crescimento",
      "Utilização em cruzamentos",
    ],
    cuidados: [
      "Avaliar adaptação climática",
      "Evitar introdução sem planeamento",
      "Garantir sombra e água",
      "Avaliar o sistema produtivo antes da aquisição",
    ],
    provincias: [],
    evidencia:
      "Raça internacional de carne; não existe aqui uma recomendação provincial específica.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Hereford%20cattle.jpg",
  },

  {
    id: "jersey",
    nome: "Jersey",
    categoria: "Raça internacional",
    origem: "Ilha de Jersey",
    finalidades: [
      "Produção de leite",
      "Reprodução",
    ],
    descricao:
      "Raça leiteira conhecida internacionalmente e utilizada em diferentes sistemas especializados de produção de leite.",
    adaptacao:
      "A utilização em Angola deve considerar clima, alimentação, água, assistência veterinária e mercado de leite.",
    pontosFortes: [
      "Vocação leiteira",
      "Interesse para sistemas especializados",
      "Experiência internacional em produção de leite",
    ],
    cuidados: [
      "Garantir alimentação equilibrada",
      "Disponibilizar água de qualidade",
      "Monitorar condição corporal",
      "Controlar stress térmico",
    ],
    provincias: [],
    evidencia:
      "Raça leiteira internacional. A recomendação provincial depende do sistema produtivo.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Jersey%20cattle.jpg",
  },

  {
    id: "holandesa",
    nome: "Holandesa",
    categoria: "Raça internacional",
    origem: "Europa",
    finalidades: [
      "Produção de leite",
      "Reprodução",
    ],
    descricao:
      "Uma das principais raças leiteiras utilizadas internacionalmente.",
    adaptacao:
      "Em Angola, sistemas com animais de elevada produção leiteira exigem alimentação adequada, água, sombra, ventilação e manejo cuidadoso.",
    pontosFortes: [
      "Elevado potencial leiteiro",
      "Ampla experiência internacional",
      "Utilização em sistemas especializados",
    ],
    cuidados: [
      "Maior exigência nutricional",
      "Atenção ao stress térmico",
      "Necessidade de manejo cuidadoso",
      "Monitorar condição corporal e produção",
    ],
    provincias: [],
    evidencia:
      "Raça leiteira internacional; não deve ser indicada para uma província sem avaliar o sistema.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Holstein%20cattle.jpg",
  },

  {
    id: "afrikaner",
    nome: "Afrikaner",
    categoria: "Raça africana",
    origem: "África Austral",
    finalidades: [
      "Produção de carne",
      "Reprodução",
    ],
    descricao:
      "Raça africana de carne associada a sistemas de produção da África Austral.",
    adaptacao:
      "A experiência com raças africanas pode ser relevante para ambientes quentes, mas a adequação à exploração deve ser avaliada.",
    pontosFortes: [
      "Origem africana",
      "Vocação para carne",
      "Interesse para sistemas tropicais",
    ],
    cuidados: [
      "Avaliar disponibilidade genética",
      "Verificar adaptação local",
      "Considerar exigências sanitárias",
      "Avaliar custos de introdução",
    ],
    provincias: [],
    evidencia:
      "Raça africana estudada em sistemas de produção da África Austral.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Afrikaner%20cattle.jpg",
  },

  {
    id: "nguni",
    nome: "Nguni",
    categoria: "Raça africana",
    origem: "África Austral",
    finalidades: [
      "Produção de carne",
      "Reprodução",
    ],
    descricao:
      "Raça Sanga da África Austral conhecida pela adaptação a sistemas de produção em ambientes quentes.",
    adaptacao:
      "Pode servir como referência para discutir adaptação de bovinos africanos, mas não deve ser automaticamente recomendada para qualquer província angolana.",
    pontosFortes: [
      "Adaptação a ambientes africanos",
      "Interesse para produção de carne",
      "Importância dos recursos genéticos Sanga",
    ],
    cuidados: [
      "Avaliar disponibilidade",
      "Avaliar ambiente local",
      "Avaliar sanidade",
      "Evitar recomendações automáticas",
    ],
    provincias: [],
    evidencia:
      "Raça Sanga africana utilizada como referência em estudos de adaptação.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Nguni%20cattle.jpg",
  },

  {
    id: "tuli",
    nome: "Tuli",
    categoria: "Raça africana",
    origem: "África Austral",
    finalidades: [
      "Produção de carne",
      "Reprodução",
    ],
    descricao:
      "Raça Sanga da África Austral utilizada principalmente para produção de carne.",
    adaptacao:
      "A literatura sobre bovinos Sanga mostra interesse destas populações em ambientes quentes e sistemas sujeitos a limitações de recursos.",
    pontosFortes: [
      "Origem africana",
      "Vocação para produção de carne",
      "Interesse para ambientes quentes",
    ],
    cuidados: [
      "Avaliar disponibilidade genética",
      "Verificar adaptação ao sistema",
      "Não substituir automaticamente recursos locais",
      "Avaliar custos de aquisição",
    ],
    provincias: [],
    evidencia:
      "Raça Sanga africana estudada em ambientes de produção com condições adversas.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Tuli%20cattle.jpg",
  },

  {
    id: "bonsmara",
    nome: "Bonsmara",
    categoria: "Raça africana",
    origem: "África do Sul",
    finalidades: [
      "Produção de carne",
      "Reprodução",
    ],
    descricao:
      "Raça desenvolvida na África do Sul para produção de carne em condições africanas.",
    adaptacao:
      "Pode ser referência para programas de melhoramento, mas qualquer introdução deve considerar adaptação, alimentação, sanidade e objetivo da exploração.",
    pontosFortes: [
      "Produção de carne",
      "Seleção em ambiente africano",
      "Potencial para cruzamentos",
    ],
    cuidados: [
      "Avaliar origem genética",
      "Avaliar ambiente",
      "Garantir manejo adequado",
      "Considerar disponibilidade de reprodutores",
    ],
    provincias: [],
    evidencia:
      "Raça africana desenvolvida para condições de produção da África Austral.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Bonsmara%20cattle.jpg",
  },

  {
    id: "boran",
    nome: "Boran",
    categoria: "Raça africana",
    origem: "África Oriental",
    finalidades: [
      "Produção de carne",
      "Reprodução",
    ],
    descricao:
      "Raça zebuína africana utilizada em sistemas de produção de carne.",
    adaptacao:
      "É relevante como referência de genética adaptada a condições africanas, mas não existe aqui uma recomendação provincial específica.",
    pontosFortes: [
      "Origem africana",
      "Produção de carne",
      "Interesse para programas de cruzamento",
    ],
    cuidados: [
      "Avaliar disponibilidade",
      "Avaliar sanidade",
      "Avaliar condições ambientais",
      "Definir objetivo de produção",
    ],
    provincias: [],
    evidencia:
      "Raça africana de referência em estudos de produção e adaptação.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Boran%20cattle.jpg",
  },

  {
    id: "charolais",
    nome: "Charolês",
    categoria: "Raça internacional",
    origem: "França",
    finalidades: [
      "Produção de carne",
      "Reprodução",
    ],
    descricao:
      "Raça especializada em produção de carne e utilizada em programas de cruzamento.",
    adaptacao:
      "Em Angola, a utilização deve ser analisada considerando alimentação, calor, manejo, disponibilidade de água e sistema de produção.",
    pontosFortes: [
      "Produção de carne",
      "Potencial de crescimento",
      "Utilização em cruzamentos",
    ],
    cuidados: [
      "Maior atenção à alimentação",
      "Avaliar adaptação ao calor",
      "Garantir água e sombra",
      "Planear os cruzamentos",
    ],
    provincias: [],
    evidencia:
      "Raça internacional de carne; não existe indicação provincial automática.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Charolais%20cattle.jpg",
  },
];

const temas: Record<
  string,
  {
    titulo: string;
    descricao: string;
    icone: string;
  }
> = {
  racas: {
    titulo: "Raças e biotipos bovinos",
    descricao:
      "Conheça diferentes recursos genéticos bovinos e saiba como avaliar a sua utilização nas diferentes realidades de Angola.",
    icone: "🐄",
  },

  alimentacao: {
    titulo: "Alimentação",
    descricao:
      "Orientações sobre alimentação, pastagem, forragens, suplementos e gestão dos recursos disponíveis.",
    icone: "🌱",
  },

  instalacoes: {
    titulo: "Instalações",
    descricao:
      "Princípios para instalações, sombra, ventilação, drenagem, cercas, comedouros e bebedouros.",
    icone: "🏠",
  },

  sanidade: {
    titulo: "Sanidade",
    descricao:
      "Prevenção, observação dos animais, higiene, biossegurança e acompanhamento veterinário.",
    icone: "🩺",
  },

  reproducao: {
    titulo: "Reprodução",
    descricao:
      "Seleção de reprodutores, condição corporal, reprodução, gestação, parto e cuidados com bezerros.",
    icone: "🐄",
  },

  agua: {
    titulo: "Água",
    descricao:
      "Orientações sobre disponibilidade, qualidade, armazenamento e distribuição de água.",
    icone: "💧",
  },
};

function normalizarTema(tema: string) {
  return tema.toLowerCase().trim();
}

function getRecomendacao(
  provincia: string,
  finalidade: Finalidade,
  raca: Raca
) {
  if (raca.id === "mucubal" && provincia === "Namibe") {
    return {
      nivel: "Evidência local",
      texto:
        "O Mucubal é apresentado nesta plataforma como denominação/biotipo local associado a bovinos Sanga do Namibe. Para produção de carne e reprodução, a conservação e avaliação dos recursos genéticos locais merece atenção.",
    };
  }

  if (raca.id === "kwanhama" && provincia === "Cunene") {
    return {
      nivel: "Evidência local",
      texto:
        "O Kwanhama é apresentado como denominação local associada a bovinos Sanga do Cunene. Para carne e reprodução, a plataforma destaca a importância de avaliar e conservar os recursos genéticos locais.",
    };
  }

  if (
    raca.id === "sanga" &&
    ["Huambo", "Huíla", "Cunene", "Namibe"].includes(provincia)
  ) {
    return {
      nivel: "Considerar",
      texto: `A presença de bovinos do tipo Sanga é relevante para esta região, mas a escolha para ${finalidade.toLowerCase()} deve considerar a origem dos animais, alimentação, água, sanidade, sistema de criação e objetivo da exploração.`,
    };
  }

  return {
    nivel: "Avaliação técnica necessária",
    texto: `Não existe, nesta base de orientação, evidência suficiente para declarar que ${raca.nome} é a raça recomendada para toda a província de ${provincia}. Para ${finalidade.toLowerCase()}, a decisão deve considerar ambiente, sistema produtivo, alimentação, água, sanidade, disponibilidade de animais e mercado.`,
  };
}

export default async function PaginaTema({
  params,
  searchParams,
}: PaginaTemaProps) {
  const { tema } = await params;
  const filtros = await searchParams;

  const temaId = normalizarTema(tema);

  const temaAtual = temas[temaId] ?? temas.racas;

  const provincia =
    filtros.provincia && provincias.includes(filtros.provincia)
      ? filtros.provincia
      : "Huambo";

  const finalidade =
    filtros.finalidade &&
    finalidades.includes(filtros.finalidade as Finalidade)
      ? (filtros.finalidade as Finalidade)
      : "Produção de leite";

  const racasFiltradas = racas.filter((raca) => {
    if (temaId !== "racas") return true;

    return raca.finalidades.includes(finalidade);
  });

  return (
    <main className="min-h-screen bg-white">
      {/* =========================================================
          BREADCRUMB
      ========================================================= */}
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-4 text-sm text-slate-500">
          <Link href="/" className="hover:text-green-700">
            Início
          </Link>{" "}
          ›{" "}
          <Link href="/pecuaria" className="hover:text-green-700">
            Pecuária
          </Link>{" "}
          ›{" "}
          <Link
            href="/pecuaria/bovinos/orientacoes"
            className="hover:text-green-700"
          >
            Bovinos
          </Link>{" "}
          ›{" "}
          <span className="font-medium text-slate-800">
            {temaAtual.titulo}
          </span>
        </div>
      </div>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="bg-gradient-to-br from-green-950 via-green-900 to-green-800 text-white">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="max-w-4xl">
            <div className="mb-4 text-5xl">{temaAtual.icone}</div>

            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-green-200">
              AGROINOVA ANGOLA · BOVINOS
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              {temaAtual.titulo}
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-green-50">
              {temaAtual.descricao}
            </p>

            <div className="mt-7 rounded-2xl border border-white/15 bg-white/10 p-5">
              <p className="font-semibold">
                🇦🇴 Orientação aplicada à realidade angolana
              </p>

              <p className="mt-2 text-sm leading-7 text-green-50">
                A escolha genética não deve ser feita apenas pela produtividade.
                O AGROINOVA considera finalidade, ambiente, alimentação, água,
                sanidade, sistema de produção e disponibilidade de recursos
                genéticos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FILTROS
          IMPORTANTE:
          Não usamos onChange nem window.
          O formulário envia os valores por GET.
      ========================================================= */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-7">
          <form
            method="GET"
            className="grid gap-5 md:grid-cols-[1fr_1fr_auto] md:items-end"
          >
            <div>
              <label
                htmlFor="provincia"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                📍 Província
              </label>

              <select
                id="provincia"
                name="provincia"
                defaultValue={provincia}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none focus:border-green-600"
              >
                {provincias.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="finalidade"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                🎯 Finalidade
              </label>

              <select
                id="finalidade"
                name="finalidade"
                defaultValue={finalidade}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none focus:border-green-600"
              >
                {finalidades.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="rounded-xl bg-green-700 px-6 py-3 font-bold text-white transition hover:bg-green-800"
            >
              🔎 Aplicar orientação
            </button>
          </form>
        </div>
      </section>

      {/* =========================================================
          NAVEGAÇÃO DOS TEMAS
      ========================================================= */}
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="flex flex-wrap gap-2">
            {Object.entries(temas).map(([id, item]) => (
              <Link
                key={id}
                href={`/pecuaria/bovinos/orientacoes/${id}?provincia=${encodeURIComponent(
                  provincia
                )}&finalidade=${encodeURIComponent(finalidade)}`}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  id === temaId
                    ? "border-green-700 bg-green-700 text-white"
                    : "border-slate-300 bg-white text-slate-700 hover:border-green-600 hover:text-green-700"
                }`}
              >
                {item.icone} {item.titulo}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTEÚDO
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        {temaId === "racas" ? (
          <>
            {/* INTRODUÇÃO */}
            <div className="mb-10 max-w-4xl">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-green-700">
                CONHECIMENTO AGROPECUÁRIO
              </p>

              <h2 className="text-3xl font-bold text-slate-900">
                Raças e biotipos para conhecer
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Esta área apresenta recursos genéticos bovinos relevantes para
                compreender diferentes opções de produção. Os recursos
                genéticos associados a Angola são apresentados separadamente
                das raças africanas e das raças internacionais.
              </p>
            </div>

            {/* AVISO */}
            <div className="mb-10 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="font-bold text-amber-900">
                ⚠️ Como interpretar as recomendações
              </h3>

              <p className="mt-2 text-sm leading-7 text-amber-900">
                Uma raça não é automaticamente “a melhor” para uma província.
                A recomendação deve considerar ambiente, sistema de produção,
                finalidade, alimentação, água, sanidade, mercado e genética
                disponível. Quando não existe evidência provincial suficiente,
                o AGROINOVA indica “avaliação técnica necessária” em vez de
                inventar uma recomendação.
              </p>
            </div>

            {/* =====================================================
                CATÁLOGO DE RAÇAS
            ===================================================== */}
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {racasFiltradas.map((raca) => {
                const recomendacao = getRecomendacao(
                  provincia,
                  finalidade,
                  raca
                );

                return (
                  <article
                    key={raca.id}
                    className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    {/* IMAGEM */}
                    <div className="relative h-56 overflow-hidden bg-slate-100">
                      <img
                        src={raca.imagem}
                        alt={`Bovinos ${raca.nome}`}
                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                        loading="lazy"
                      />

                      <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-green-800 shadow">
                        {raca.categoria}
                      </div>
                    </div>

                    {/* CONTEÚDO */}
                    <div className="p-6">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        {raca.origem}
                      </p>

                      <h3 className="mt-1 text-2xl font-bold text-slate-900">
                        {raca.nome}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {raca.descricao}
                      </p>

                      {/* CONTEXTO PROVINCIAL */}
                      <div className="mt-4 rounded-xl bg-green-50 p-4">
                        <p className="text-xs font-bold uppercase text-green-800">
                          📍 {provincia}
                        </p>

                        <p className="mt-1 text-sm font-semibold text-green-950">
                          {recomendacao.nivel}
                        </p>

                        <p className="mt-2 text-xs leading-5 text-green-900">
                          {recomendacao.texto}
                        </p>
                      </div>

                      {/* FINALIDADES */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {raca.finalidades.map((item) => (
                          <span
                            key={item}
                            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      {/* PONTOS FORTES */}
                      <div className="mt-6">
                        <h4 className="text-sm font-bold text-slate-900">
                          Pontos fortes
                        </h4>

                        <ul className="mt-2 space-y-1">
                          {raca.pontosFortes.map((item) => (
                            <li
                              key={item}
                              className="flex gap-2 text-xs leading-5 text-slate-600"
                            >
                              <span className="text-green-700">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CUIDADOS */}
                      <div className="mt-5">
                        <h4 className="text-sm font-bold text-slate-900">
                          Cuidados
                        </h4>

                        <ul className="mt-2 space-y-1">
                          {raca.cuidados.map((item) => (
                            <li
                              key={item}
                              className="flex gap-2 text-xs leading-5 text-slate-600"
                            >
                              <span className="text-amber-600">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* =====================================================
                RESULTADO DO FILTRO
            ===================================================== */}
            <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    RESULTADO DA CONSULTA
                  </p>

                  <p className="mt-1 text-lg font-bold text-slate-900">
                    {provincia} · {finalidade}
                  </p>
                </div>

                <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-800">
                  {racasFiltradas.length} opções apresentadas
                </div>
              </div>
            </div>

            {/* =====================================================
                ORIENTAÇÃO PROVINCIAL
            ===================================================== */}
            <div className="mt-14 rounded-3xl border border-green-200 bg-green-50 p-7">
              <p className="text-sm font-bold uppercase tracking-wide text-green-700">
                🇦🇴 ORIENTAÇÃO POR CONTEXTO
              </p>

              <h2 className="mt-2 text-3xl font-bold text-green-950">
                {provincia} · {finalidade}
              </h2>

              <p className="mt-4 max-w-4xl leading-8 text-green-900">
                Para esta combinação, a seleção genética deve começar pela
                realidade da exploração. Verifique disponibilidade de pastagem
                e forragem, água durante todo o ciclo produtivo, condições de
                sombra e abrigo, assistência veterinária, objetivo económico e
                capacidade de maneio.
              </p>

              <div className="mt-7 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-white p-5">
                  <div className="text-2xl">🌱</div>

                  <h3 className="mt-2 font-bold">Alimentação</h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    A genética escolhida deve ser compatível com a alimentação
                    que a exploração consegue fornecer durante o ano.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <div className="text-2xl">💧</div>

                  <h3 className="mt-2 font-bold">Água</h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Avalie disponibilidade, qualidade e distribuição da água
                    antes de aumentar o efectivo.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <div className="text-2xl">🩺</div>

                  <h3 className="mt-2 font-bold">Sanidade</h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    A escolha genética deve ser acompanhada por um plano
                    sanitário adequado à realidade da exploração.
                  </p>
                </div>
              </div>
            </div>

            {/* =====================================================
                COMO ESCOLHER
            ===================================================== */}
            <div className="mt-14">
              <p className="text-sm font-bold uppercase tracking-wide text-green-700">
                GUIA PRÁTICO
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Como escolher os animais
              </h2>

              <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {[
                  [
                    "01",
                    "Defina o objetivo",
                    "Determine se a exploração pretende produzir carne, leite, trabalhar com dupla aptidão ou melhorar a reprodução.",
                  ],
                  [
                    "02",
                    "Conheça a exploração",
                    "Avalie área disponível, alimentação, água, instalações, mão de obra e capacidade de investimento.",
                  ],
                  [
                    "03",
                    "Avalie o ambiente",
                    "Considere temperatura, estação seca, estação chuvosa, disponibilidade de pastagem e condições ambientais.",
                  ],
                  [
                    "04",
                    "Observe os animais",
                    "Avalie condição corporal, locomoção, comportamento, conformação e sinais visíveis de doença.",
                  ],
                  [
                    "05",
                    "Conheça a origem",
                    "Procure informação sobre origem, idade, identificação, histórico produtivo e histórico reprodutivo quando disponível.",
                  ],
                  [
                    "06",
                    "Procure assistência",
                    "Decisões de melhoramento, reprodução e sanidade devem ser acompanhadas por profissionais qualificados.",
                  ],
                ].map(([numero, titulo, texto]) => (
                  <div
                    key={numero}
                    className="rounded-2xl border border-slate-200 bg-white p-6"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-800">
                        {numero}
                      </span>

                      <h3 className="font-bold text-slate-900">
                        {titulo}
                      </h3>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-slate-600">
                      {texto}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* =====================================================
                O QUE OBSERVAR
            ===================================================== */}
            <div className="mt-14">
              <h2 className="text-3xl font-bold text-slate-900">
                O que observar num bovino
              </h2>

              <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                A avaliação do animal não deve depender apenas da raça ou da
                aparência. O produtor deve observar características
                relacionadas com saúde, adaptação, manejo e finalidade
                produtiva.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  "Condição corporal adequada ao sistema de produção",
                  "Boa capacidade de locomoção",
                  "Ausência de sinais evidentes de doença",
                  "Histórico reprodutivo conhecido quando disponível",
                  "Conformação compatível com a finalidade",
                  "Temperamento compatível com o sistema de manejo",
                  "Origem e identificação conhecidas",
                  "Adaptação às condições da exploração",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4"
                  >
                    <span className="text-green-700">✓</span>

                    <span className="text-sm text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* =====================================================
                COMPARAÇÃO
            ===================================================== */}
            <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-white">
              <div className="border-b bg-slate-50 p-6">
                <p className="text-sm font-bold uppercase tracking-wide text-green-700">
                  DECISÃO TÉCNICA
                </p>

                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                  Antes de escolher uma raça
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] text-left text-sm">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-5 py-4 font-bold text-slate-800">
                        Critério
                      </th>

                      <th className="px-5 py-4 font-bold text-slate-800">
                        Pergunta
                      </th>

                      <th className="px-5 py-4 font-bold text-slate-800">
                        Decisão
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {[
                      [
                        "Finalidade",
                        "O que quero produzir?",
                        "Carne, leite, dupla aptidão ou reprodução.",
                      ],
                      [
                        "Alimentação",
                        "O que consigo fornecer?",
                        "Pastagem, forragem e suplementação disponíveis.",
                      ],
                      [
                        "Água",
                        "Existe água durante todo o ciclo?",
                        "Disponibilidade e qualidade adequadas.",
                      ],
                      [
                        "Ambiente",
                        "O animal está adaptado?",
                        "Avaliar calor, seca, pastagem e sistema.",
                      ],
                      [
                        "Sanidade",
                        "Existe assistência?",
                        "Plano sanitário e acompanhamento.",
                      ],
                      [
                        "Mercado",
                        "Existe comprador?",
                        "Avaliar procura, preço e logística.",
                      ],
                    ].map(([criterio, pergunta, decisao]) => (
                      <tr
                        key={criterio}
                        className="border-t border-slate-200"
                      >
                        <td className="px-5 py-4 font-semibold text-slate-900">
                          {criterio}
                        </td>

                        <td className="px-5 py-4 text-slate-600">
                          {pergunta}
                        </td>

                        <td className="px-5 py-4 text-slate-600">
                          {decisao}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* =====================================================
                AGROIA
            ===================================================== */}
            <div className="mt-14 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 to-green-950 p-8 text-white">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-wider text-green-300">
                  INTELIGÊNCIA ARTIFICIAL
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  Quer analisar a sua exploração?
                </h2>

                <p className="mt-4 leading-7 text-slate-200">
                  Envie a situação da exploração para a AGROIA. A análise pode
                  considerar província, município, finalidade, espécie,
                  problema observado e outras informações fornecidas pelo
                  utilizador.
                </p>

                <Link
                  href="/tecnologias"
                  className="mt-6 inline-flex rounded-xl bg-white px-6 py-3 font-bold text-green-900 transition hover:bg-green-50"
                >
                  🤖 Abrir AGROIA
                </Link>
              </div>
            </div>

            {/* =====================================================
                FONTES
            ===================================================== */}
            <div className="mt-14 border-t pt-10">
              <p className="text-sm font-bold uppercase tracking-wide text-green-700">
                📚 FONTES TÉCNICAS
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                Base utilizada nesta orientação
              </h2>

              <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p>
                    <strong className="text-slate-900">
                      FAO / AGRIS.
                    </strong>{" "}
                    Estudos sobre diversidade genética dos bovinos nativos de
                    Angola, incluindo populações e amostras associadas ao
                    Namibe e Cunene.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p>
                    <strong className="text-slate-900">
                      Estudos de produção bovina no Huambo.
                    </strong>{" "}
                    Investigação sobre sistemas de produção e presença de
                    animais do tipo Sanga e animais cruzados.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p>
                    <strong className="text-slate-900">
                      Nota metodológica.
                    </strong>{" "}
                    Quando não existe evidência suficiente para atribuir uma
                    raça a uma determinada província, a plataforma não cria
                    uma recomendação artificial. O resultado é apresentado
                    como necessidade de avaliação técnica.
                  </p>
                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <p className="font-semibold text-amber-900">
                    ⚠️ Importante
                  </p>

                  <p className="mt-2 text-amber-900">
                    As orientações apresentadas no AGROINOVA ANGOLA são
                    informativas e não substituem a avaliação de um médico
                    veterinário, técnico pecuário ou outro profissional
                    habilitado.
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* =======================================================
             OUTROS TEMAS
          ======================================================= */
          <div className="rounded-3xl border border-green-200 bg-green-50 p-8">
            <p className="text-sm font-bold uppercase text-green-700">
              ORIENTAÇÃO TÉCNICA
            </p>

            <h2 className="mt-2 text-3xl font-bold text-green-950">
              {temaAtual.titulo}
            </h2>

            <p className="mt-4 max-w-3xl leading-8 text-green-900">
              {temaAtual.descricao}
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-5">
                <div className="text-2xl">🇦🇴</div>

                <h3 className="mt-2 font-bold text-slate-900">
                  Contexto angolano
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  O conteúdo desta área será organizado considerando os
                  diferentes sistemas de criação existentes em Angola.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5">
                <div className="text-2xl">📚</div>

                <h3 className="mt-2 font-bold text-slate-900">
                  Conhecimento técnico
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Serão apresentados princípios técnicos, boas práticas,
                  critérios de observação e pontos de atenção.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5">
                <div className="text-2xl">🩺</div>

                <h3 className="mt-2 font-bold text-slate-900">
                  Assistência técnica
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Problemas sanitários e decisões clínicas devem ser avaliados
                  por profissionais qualificados.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href={`/pecuaria/bovinos/orientacoes/racas?provincia=${encodeURIComponent(
                  provincia
                )}&finalidade=${encodeURIComponent(finalidade)}`}
                className="inline-flex rounded-xl bg-green-700 px-5 py-3 font-semibold text-white hover:bg-green-800"
              >
                🐄 Ver Raças e Biotipos
              </Link>
            </div>
          </div>
        )}
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="border-t bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <h3 className="font-bold text-slate-900">
            AGROINOVA ANGOLA
          </h3>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Plataforma Nacional de Investigação, Conhecimento e Inovação
            Agropecuária de Angola.
          </p>

          <p className="mt-2 text-sm font-medium text-green-700">
            Conhecimento, Tecnologia e Inovação ao Serviço do Campo Angolano.
          </p>
        </div>
      </footer>
    </main>
  );
}
