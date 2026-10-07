"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";

type Provincia = {
  nome: string;
  regiao: string;
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
    observacao:
      "A aptidão deve ser avaliada localmente com base em clima, solo, disponibilidade hídrica e material genético.",
  },
  {
    nome: "Benguela",
    regiao: "Centro-Oeste",
    observacao:
      "Há registos de investigação e demonstrações de sorgo no âmbito do APPSA.",
  },
  {
    nome: "Bié",
    regiao: "Centro",
    observacao:
      "O cultivo deve ser ajustado ao regime de chuvas, altitude, fertilidade e características do solo.",
  },
  {
    nome: "Cabinda",
    regiao: "Norte",
    observacao:
      "A humidade e a drenagem devem ser consideradas antes da escolha da área.",
  },
  {
    nome: "Cuando",
    regiao: "Leste/Sul",
    observacao:
      "A antiga base territorial Cuando Cubango não deve ser redistribuída automaticamente entre Cuando e Cubango.",
  },
  {
    nome: "Cubango",
    regiao: "Leste/Sul",
    observacao:
      "Existem referências históricas como Cuando Cubango; não se deve atribuir esses dados antigos directamente à actual província.",
  },
  {
    nome: "Cuanza Norte",
    regiao: "Norte",
    observacao:
      "A produção deve considerar sobretudo drenagem, fertilidade e adaptação da variedade.",
  },
  {
    nome: "Cuanza Sul",
    regiao: "Centro-Oeste",
    observacao:
      "O desempenho depende da zona agroecológica e da distribuição das chuvas.",
  },
  {
    nome: "Cunene",
    regiao: "Sul",
    observacao:
      "É uma das regiões onde a massambala possui importância histórica e alimentar.",
  },
  {
    nome: "Huambo",
    regiao: "Centro",
    observacao:
      "Foi uma das províncias abrangidas por ensaios e demonstrações de sorgo do APPSA.",
  },
  {
    nome: "Huíla",
    regiao: "Sul",
    observacao:
      "A massambala integra o conjunto de cereais importantes da agricultura da província.",
  },
  {
    nome: "Icolo e Bengo",
    regiao: "Norte",
    observacao:
      "Não se deve transferir automaticamente dados antigos de Luanda para a actual província.",
  },
  {
    nome: "Luanda",
    regiao: "Norte",
    observacao:
      "A produção comercial deve ser avaliada sobretudo em função da disponibilidade de terra e água.",
  },
  {
    nome: "Lunda Norte",
    regiao: "Leste",
    observacao:
      "A escolha da área deve considerar drenagem, fertilidade e regime local de precipitação.",
  },
  {
    nome: "Lunda Sul",
    regiao: "Leste",
    observacao:
      "É necessário validar localmente a adaptação dos materiais antes de recomendar variedades.",
  },
  {
    nome: "Malanje",
    regiao: "Norte/Centro",
    observacao:
      "A escolha da área deve considerar solos bem estruturados e evitar encharcamento prolongado.",
  },
  {
    nome: "Moxico",
    regiao: "Leste",
    observacao:
      "A produção depende da época chuvosa, fertilidade e adaptação dos materiais.",
  },
  {
    nome: "Moxico Leste",
    regiao: "Leste",
    observacao:
      "Não existem bases antigas equivalentes que permitam redistribuir automaticamente dados territoriais anteriores.",
  },
  {
    nome: "Namibe",
    regiao: "Sul",
    observacao:
      "Há registos históricos de produção de massambala e experiências agrícolas em zonas semiáridas.",
  },
  {
    nome: "Uíge",
    regiao: "Norte",
    observacao:
      "A drenagem e o controlo da humidade são particularmente importantes.",
  },
  {
    nome: "Zaire",
    regiao: "Norte",
    observacao:
      "A recomendação deve ser feita a partir de avaliação agroecológica local.",
  },
];

const imagens: Imagem[] = [
  {
    src: "https://c2a.portais.gov.ao/uploads/large_f20f7831_491a_4d29_8570_4a9e61abc2f5_6e32638cc6.jpeg",
    href: "https://cuando.gov.ao/web/noticias/massango-e-massambala-produtos-agricolas-em-destaque-no-dirico",
    alt: "Produtora agrícola junto a uma cultura de sorgo em Dirico",
    legenda:
      "Produção de cereais no município do Dirico, província do Cuando.",
    fonte: "Governo Provincial do Cuando",
  },
  {
    src: "https://ccardesa.org/sites/default/files/news-images/sorghum%203.jpeg",
    href: "https://ccardesa.org/three-communities-select-their-preferred-top-five-improved-sorghum-varieties-angola",
    alt: "Campo de sorgo utilizado numa actividade participativa de selecção de variedades em Angola",
    legenda:
      "Avaliação participativa de materiais de sorgo no âmbito do APPSA.",
    fonte: "CCARDESA / APPSA",
  },
  {
    src: "https://www.wvi.org/sites/default/files/2024-07/IMG_8478.JPG",
    href: "https://www.wvi.org/pt-pt/stories/angola/seca-no-sul-acende-alerta-sobre-o-aumento-de-inseguranca-alimentar-nas-comunidades",
    alt: "Agricultor numa área de cereais no sul de Angola",
    legenda:
      "Agricultura familiar no sul de Angola sob condições de seca.",
    fonte: "World Vision International",
  },
  {
    src: "https://worldbank.scene7.com/is/image/worldbankprod/breaking-cycle-poverty-01-780x439?hei=439&qlt=85%2C0&resMode=sharp&wid=780",
    href: "https://www.worldbank.org/pt/news/feature/2025/05/22/breaking-the-cycle-of-poverty-in-angola-through-cash-transfers-afe",
    alt: "Produtos agrícolas de Angola incluindo massambala",
    legenda:
      "Produtos agrícolas e processamento de cereais numa comunidade da Huíla.",
    fonte: "Banco Mundial",
  },
  {
    src: "https://www.verangola.net/va/images/cms-image-000040656.jpg",
    href: "https://www.verangola.net/va/en/022023/Environment/34408/Country-launches-massango-and-massambala-production.htm",
    alt: "Campo de sorgo em Angola",
    legenda:
      "Campo de cereal associado à produção de massango e massambala em Angola.",
    fonte: "VerAngola",
  },
];

const referencias = [
  {
    titulo: "Ficha Técnica 17 — Massambala",
    instituicao: "FRESAN / IDA / FAO",
    descricao:
      "Ficha técnica angolana sobre Sorghum bicolor, condições de crescimento, utilização e práticas agroecológicas.",
    href: "https://fresan-angola.org/wp-content/uploads/2024/11/FT_17_Massambala_V9a-2.pdf",
  },
  {
    titulo: "Strengthening the sorghum seed delivery systems in Lesotho and Angola",
    instituicao: "CCARDESA / APPSA / IIA",
    descricao:
      "Projecto de investigação sobre sistemas de sementes de sorgo, variedades locais e materiais melhorados.",
    href: "https://www.ccardesa.org/three-communities-select-their-preferred-top-five-improved-sorghum-varieties-angola",
  },
  {
    titulo: "All hands on deck — improved sorghum",
    instituicao: "CCARDESA / APPSA",
    descricao:
      "Informação sobre a investigação de sementes melhoradas e sistemas de sementes de sorgo em Angola.",
    href: "https://www.ccardesa.org/all-hands-deck-angola-and-lesotho-towards-ensuring-farmers-access-quality-seeds-improved-sorghum",
  },
  {
    titulo: "Cadeias de Valor — Cereais",
    instituicao: "FRESAN",
    descricao:
      "Documento com informação histórica sobre milho, massango e massambala no sul de Angola.",
    href: "https://fresan-angola.org/wp-content/uploads/2022/08/AP2-A-1.3.1-b-c-Relato%CC%81rio-Final_Cadeias-de-valor.pdf",
  },
  {
    titulo: "Características alimentares e nutricionais da massambala",
    instituicao: "Ministério da Saúde / FRESAN",
    descricao:
      "Boletim sobre o consumo e características nutricionais da massambala.",
    href: "https://fresan-angola.org/wp-content/uploads/2023/09/8o-boletim-_-massambala.pdf",
  },
  {
    titulo: "Sorghum bicolor — PROTA",
    instituicao: "PlantUse / PROTA",
    descricao:
      "Referência internacional para botânica, implantação, pragas, doenças e produção de sorgo.",
    href: "https://plantuse.plantnet.org/en/Sorghum_bicolor_%28PROTA%29",
  },
  {
    titulo: "Sorghum bicolor — PROSEA",
    instituicao: "PlantUse / PROSEA",
    descricao:
      "Informação agronómica internacional sobre clima, solos, população de plantas e implantação.",
    href: "https://plantuse.plantnet.org/en/Sorghum_bicolor_%28PROSEA%29",
  },
  {
    titulo: "Pests and diseases guide of sorghum",
    instituicao: "ICRISAT",
    descricao:
      "Guia técnico internacional para reconhecimento e gestão de pragas e doenças.",
    href: "https://oar.icrisat.org/13393/",
  },
];

function Card({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-sm ${className}`}
    >
      <h3 className="mb-3 text-xl font-bold text-slate-900">{title}</h3>
      <div className="text-sm leading-7 text-slate-700">{children}</div>
    </article>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-800 ring-1 ring-green-200">
      {children}
    </span>
  );
}

export default function MassambalaPage() {
  const [provincia, setProvincia] = useState("Cunene");
  const [busca, setBusca] = useState("");

  const provinciaSelecionada = useMemo(
    () => provincias.find((item) => item.nome === provincia) ?? provincias[0],
    [provincia]
  );

  const referenciasFiltradas = useMemo(() => {
    const termo = busca.trim().toLowerCase();

    if (!termo) return referencias;

    return referencias.filter(
      (item) =>
        item.titulo.toLowerCase().includes(termo) ||
        item.instituicao.toLowerCase().includes(termo) ||
        item.descricao.toLowerCase().includes(termo)
    );
  }, [busca]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-green-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage: `url("${imagens[0].src}")`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-green-950 via-green-950/90 to-green-900/50" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-green-100">
            <Link
              href="/agricultura"
              className="transition hover:text-white"
            >
              Agricultura
            </Link>

            <span>/</span>

            <span>Massambala</span>
          </div>

          <div className="max-w-4xl">
            <div className="mb-5 flex flex-wrap gap-2">
              <Tag>Sorghum bicolor</Tag>
              <Tag>Cereal de sequeiro</Tag>
              <Tag>África Austral</Tag>
              <Tag>AGROINOVA ANGOLA</Tag>
            </div>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
              Massambala
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-green-50 sm:text-xl">
              Guia técnico sobre a produção, utilização, conservação e
              investigação da massambala em Angola.
            </p>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-green-100">
              A massambala, ou sorgo, é uma cultura particularmente importante
              nas zonas quentes e secas do país. A página reúne informação
              agronómica, conhecimento local, investigação e referências
              técnicas, distinguindo claramente evidência angolana de
              recomendações internacionais.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#agronomia"
              className="rounded-xl bg-white px-5 py-3 font-bold text-green-900 transition hover:bg-green-50"
            >
              Explorar agronomia
            </a>

            <a
              href="#investigacao"
              className="rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-bold text-white backdrop-blur transition hover:bg-white/20"
            >
              Ver investigação
            </a>
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <nav className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-3 text-sm font-semibold sm:px-8 lg:px-10">
          <a
            href="#visao-geral"
            className="whitespace-nowrap rounded-lg px-3 py-2 hover:bg-green-50 hover:text-green-800"
          >
            Visão geral
          </a>

          <a
            href="#agronomia"
            className="whitespace-nowrap rounded-lg px-3 py-2 hover:bg-green-50 hover:text-green-800"
          >
            Agronomia
          </a>

          <a
            href="#sementes"
            className="whitespace-nowrap rounded-lg px-3 py-2 hover:bg-green-50 hover:text-green-800"
          >
            Sementes
          </a>

          <a
            href="#manejo"
            className="whitespace-nowrap rounded-lg px-3 py-2 hover:bg-green-50 hover:text-green-800"
          >
            Manejo
          </a>

          <a
            href="#sanidade"
            className="whitespace-nowrap rounded-lg px-3 py-2 hover:bg-green-50 hover:text-green-800"
          >
            Sanidade
          </a>

          <a
            href="#pos-colheita"
            className="whitespace-nowrap rounded-lg px-3 py-2 hover:bg-green-50 hover:text-green-800"
          >
            Pós-colheita
          </a>

          <a
            href="#angola"
            className="whitespace-nowrap rounded-lg px-3 py-2 hover:bg-green-50 hover:text-green-800"
          >
            Angola
          </a>

          <a
            href="#investigacao"
            className="whitespace-nowrap rounded-lg px-3 py-2 hover:bg-green-50 hover:text-green-800"
          >
            Investigação
          </a>

          <a
            href="#fontes"
            className="whitespace-nowrap rounded-lg px-3 py-2 hover:bg-green-50 hover:text-green-800"
          >
            Fontes
          </a>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        {/* VISÃO GERAL */}
        <section id="visao-geral" className="scroll-mt-24">
          <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                AGROINOVA ANGOLA • Agricultura
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Uma cultura estratégica para ambientes quentes e secos
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-700">
                A massambala pertence à espécie{" "}
                <em>Sorghum bicolor</em> e é um cereal de origem africana,
                cultivado em diferentes sistemas agrícolas tropicais e
                subtropicais. Em Angola, possui importância particularmente
                relevante nas regiões do sul e sudoeste, onde a irregularidade
                das chuvas aumenta o risco de culturas mais exigentes em água.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700">
                A resistência relativa ao défice hídrico não significa que a
                cultura dispense água. O desempenho depende da variedade, da
                época de sementeira, da fertilidade, da profundidade do solo,
                da distribuição das chuvas e da pressão de pragas e doenças.
              </p>
            </div>

            <Card title="Identificação">
              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-slate-900">
                    Nome comum:
                  </span>{" "}
                  Massambala / sorgo
                </div>

                <div>
                  <span className="font-semibold text-slate-900">
                    Nome científico:
                  </span>{" "}
                  <em>Sorghum bicolor</em>
                </div>

                <div>
                  <span className="font-semibold text-slate-900">
                    Família:
                  </span>{" "}
                  Poaceae
                </div>

                <div>
                  <span className="font-semibold text-slate-900">
                    Propagação:
                  </span>{" "}
                  principalmente por semente
                </div>

                <div>
                  <span className="font-semibold text-slate-900">
                    Principais usos:
                  </span>{" "}
                  alimentação humana, alimentação animal, forragem e
                  processamento.
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* IMAGENS */}
        <section className="mt-12">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Registo visual
            </p>

            <h2 className="mt-2 text-3xl font-black">
              Massambala em Angola
            </h2>

            <p className="mt-3 max-w-3xl text-slate-600">
              Fotografias seleccionadas de fontes que documentam agricultura,
              investigação ou utilização de cereais em Angola.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {imagens.slice(0, 4).map((imagem) => (
              <a
                key={imagem.src}
                href={imagem.href}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    src={imagem.src}
                    alt={imagem.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <p className="font-semibold text-slate-900">
                    {imagem.legenda}
                  </p>

                  <p className="mt-2 text-xs text-slate-500">
                    Fonte: {imagem.fonte}
                  </p>

                  <p className="mt-3 text-sm font-bold text-green-700">
                    Abrir fonte original →
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* AGRONOMIA */}
        <section id="agronomia" className="mt-16 scroll-mt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Agronomia
            </p>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Como a massambala cresce
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              O sorgo é uma gramínea anual cuja resposta agronómica é fortemente
              influenciada pela temperatura, disponibilidade de água e duração
              do ciclo. A cultura apresenta grande diversidade genética, desde
              materiais destinados principalmente ao grão até tipos utilizados
              como forragem ou para produção de biomassa.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card title="Temperatura">
              <p>
                A ficha técnica do FRESAN/IDA indica uma condição ideal de
                crescimento entre aproximadamente 33 e 34 °C para a
                massambala, além de tolerância a episódios de calor superiores
                a 40 °C.
              </p>

              <p className="mt-3">
                Estes valores devem ser interpretados como referência técnica
                para a cultura e não como uma temperatura fixa que garanta
                produtividade em qualquer ambiente.
              </p>
            </Card>

            <Card title="Água">
              <p>
                A massambala possui sistema radicular profundo e tolerância
                relativa a períodos de estiagem. A ficha técnica angolana
                considera 400–600 mm de precipitação durante o ciclo como
                suficiente em determinadas condições.
              </p>

              <p className="mt-3">
                Mais importante do que o total anual é a distribuição da água
                nas fases críticas do desenvolvimento.
              </p>
            </Card>

            <Card title="Solo">
              <p>
                A cultura pode adaptar-se a solos relativamente pobres, mas
                apresenta limitações em solos ácidos e mal drenados.
              </p>

              <p className="mt-3">
                A análise do solo é fundamental para definir correcções e
                fertilização. Não se deve transferir automaticamente uma dose
                de adubo de outro país para uma lavoura angolana.
              </p>
            </Card>

            <Card title="Raiz">
              <p>
                O sistema radicular profundo contribui para a exploração de
                água em camadas inferiores do perfil do solo e ajuda a explicar
                a adaptação do sorgo a ambientes sujeitos a períodos de seca.
              </p>
            </Card>

            <Card title="Ciclo">
              <p>
                A duração depende do genótipo, fotoperíodo, temperatura, água e
                época de sementeira. Por isso, materiais precoces podem ser
                particularmente importantes em zonas onde a estação chuvosa é
                curta ou irregular.
              </p>
            </Card>

            <Card title="Panícula e grão">
              <p>
                A inflorescência terminal produz os grãos. A cor do grão pode
                variar entre materiais, incluindo tonalidades claras, castanhas
                e avermelhadas. A escolha do material deve considerar o uso
                final e a preferência do produtor.
              </p>
            </Card>
          </div>
        </section>

        {/* SOLO E PREPARAÇÃO */}
        <section className="mt-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card title="Escolha da área">
              <ul className="space-y-3">
                <li>
                  • Priorizar áreas com drenagem adequada e sem acumulação
                  prolongada de água.
                </li>

                <li>
                  • Verificar profundidade efectiva do solo e presença de
                  camadas compactadas.
                </li>

                <li>
                  • Evitar áreas fortemente degradadas sem antes planear a
                  recuperação da fertilidade.
                </li>

                <li>
                  • Considerar a disponibilidade de água e o comportamento das
                  chuvas na zona.
                </li>

                <li>
                  • Avaliar histórico de infestação por plantas parasitas como
                  <em> Striga</em>.
                </li>
              </ul>
            </Card>

            <Card title="Preparação do terreno">
              <p>
                A preparação deve procurar uma cama de semente suficientemente
                uniforme para favorecer emergência regular. Em sistemas
                familiares, o grau de mobilização do solo deve ser compatível
                com os recursos disponíveis e com o risco de erosão.
              </p>

              <p className="mt-3">
                Em áreas sujeitas a erosão, a preparação deve preservar a
                estrutura do solo e evitar operações excessivas que deixem a
                superfície desprotegida.
              </p>

              <p className="mt-3">
                A palhada e os resíduos da cultura podem desempenhar papel
                importante na cobertura e reciclagem de nutrientes.
              </p>
            </Card>
          </div>
        </section>

        {/* SEMENTES */}
        <section id="sementes" className="mt-16 scroll-mt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Sementes e genética
            </p>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              A semente é uma das principais decisões da lavoura
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              A investigação APPSA em Angola procurou fortalecer os sistemas
              de sementes de sorgo, incluindo materiais melhorados e variedades
              locais. Em 2023, agricultores de Cuchi, Cuito Cuanavale e Menongue
              participaram numa selecção participativa de materiais, avaliando
              atributos como rendimento, adaptação, resistência a pragas e
              doenças e palatabilidade.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card title="O que procurar numa semente">
              <ul className="space-y-3">
                <li>• identidade varietal conhecida;</li>
                <li>• boa capacidade de germinação;</li>
                <li>• sementes limpas e sem danos evidentes;</li>
                <li>• ausência de sinais de fungos e insectos;</li>
                <li>• origem conhecida e rastreável;</li>
                <li>• material adequado ao ambiente e finalidade da produção.</li>
              </ul>
            </Card>

            <Card title="Variedades melhoradas">
              <p>
                Não será apresentada nesta página uma lista fictícia de
                variedades como se fossem oficialmente recomendadas para todas
                as províncias.
              </p>

              <p className="mt-3">
                O APPSA documentou a avaliação de 33 variedades precoces do
                ICRISAT e 3 materiais locais, com demonstrações em diferentes
                províncias angolanas. A escolha definitiva deve ser baseada em
                resultados locais, disponibilidade de semente e recomendação
                técnica.
              </p>
            </Card>

            <Card title="Produção de semente pelo agricultor">
              <p>
                Quando o produtor conserva a própria semente, deve seleccionar
                plantas saudáveis e representativas do material desejado,
                evitando misturas entre variedades e reduzindo a presença de
                plantas fora do tipo.
              </p>

              <p className="mt-3">
                A lavoura destinada à semente deve receber atenção especial
                durante o ciclo e na colheita.
              </p>
            </Card>

            <Card title="Separação varietal">
              <p>
                Misturar materiais com diferentes ciclos pode dificultar a
                colheita e a conservação. Para produção de semente, a
                uniformidade do lote é especialmente importante.
              </p>
            </Card>
          </div>
        </section>

        {/* PLANTIO */}
        <section className="mt-16">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card title="Época">
              <p>
                A sementeira deve acompanhar o início efectivo da estação de
                chuvas da zona, evitando semear demasiado cedo em solo seco ou
                demasiado tarde quando o período útil para completar o ciclo
                estiver reduzido.
              </p>
            </Card>

            <Card title="Profundidade">
              <p>
                Referências técnicas internacionais indicam profundidades
                relativamente superficiais para sementes de sorgo. Em solos
                húmidos e bem preparados, a profundidade deve permitir contacto
                suficiente com a humidade sem enterrar excessivamente a semente.
              </p>
            </Card>

            <Card title="Espaçamento">
              <p>
                O espaçamento depende da fertilidade, disponibilidade de água,
                arquitectura da variedade e objectivo de produção. Referências
                internacionais apresentam linhas mais próximas em condições
                favoráveis e espaçamentos maiores em ambientes secos.
              </p>
            </Card>
          </div>

          <div className="mt-6 rounded-3xl border border-amber-200 bg-amber-50 p-6">
            <h3 className="text-lg font-bold text-amber-950">
              Importante sobre doses e espaçamentos
            </h3>

            <p className="mt-2 text-sm leading-7 text-amber-900">
              Os valores de espaçamento e população apresentados nas fontes
              internacionais são referências agronómicas. Não devem ser
              tratados automaticamente como recomendação oficial única para
              todas as zonas de Angola. A decisão deve considerar o material
              genético, chuva, solo, fertilidade e sistema de produção.
            </p>
          </div>
        </section>

        {/* MANEJO */}
        <section id="manejo" className="mt-16 scroll-mt-24">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
            Manejo da cultura
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            Da emergência à formação da panícula
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card title="Emergência">
              <p>
                A emergência uniforme começa com semente de qualidade, boa
                preparação do solo, profundidade adequada e humidade suficiente
                no momento da sementeira.
              </p>
            </Card>

            <Card title="Desbaste">
              <p>
                Quando houver excesso de plantas por ponto, o desbaste pode ser
                necessário para reduzir competição. A população final deve
                corresponder ao sistema de produção.
              </p>
            </Card>

            <Card title="Infestantes">
              <p>
                O sorgo jovem pode competir mal com infestantes. O controlo
                precoce é importante para evitar que as plantas daninhas
                consumam água e nutrientes durante a fase de estabelecimento.
              </p>
            </Card>

            <Card title="Fertilização">
              <p>
                A fertilização deve começar pela análise do solo sempre que
                possível. Nitrogénio, fósforo e potássio devem ser considerados
                de acordo com a fertilidade e o objectivo produtivo.
              </p>

              <p className="mt-3">
                Doses estrangeiras não devem ser copiadas sem validação local.
              </p>
            </Card>

            <Card title="Matéria orgânica">
              <p>
                A incorporação ou manutenção de resíduos vegetais, compostos e
                outras fontes de matéria orgânica pode contribuir para a
                estrutura e retenção de água do solo.
              </p>
            </Card>

            <Card title="Consociação">
              <p>
                A ficha técnica do FRESAN destaca possibilidades de consórcio
                com feijão macunde e feijão guandu, além de sistemas com milho
                ou massango. A escolha deve considerar competição por água,
                arquitectura das culturas e finalidade da exploração.
              </p>
            </Card>
          </div>
        </section>

        {/* SANIDADE */}
        <section id="sanidade" className="mt-16 scroll-mt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Sanidade vegetal
            </p>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Pragas, doenças e plantas parasitas
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              A protecção da massambala deve privilegiar a prevenção, a
              monitorização e o manejo integrado. O tratamento químico não deve
              ser a primeira resposta automática: é necessário identificar
              correctamente o problema e verificar se existe limiar de
              intervenção e produto legalmente autorizado.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card title="Mosca do sorgo">
              <p>
                A mosca-do-sorgo pode atacar plântulas e perfilhos, provocando
                sintomas conhecidos como “coração morto”. O estabelecimento
                uniforme e a escolha adequada da época de sementeira ajudam a
                reduzir o risco.
              </p>
            </Card>

            <Card title="Brocas do colmo">
              <p>
                As brocas podem penetrar no colmo e comprometer o transporte de
                água e nutrientes. Os sintomas podem incluir perfurações,
                galerias e quebra de colmos.
              </p>
            </Card>

            <Card title="Pragas da panícula">
              <p>
                Insectos associados à panícula podem alimentar-se de grãos em
                formação. A monitorização deve aumentar durante a floração e
                enchimento do grão.
              </p>
            </Card>

            <Card title="Pássaros">
              <p>
                A alimentação de aves sobre as panículas pode provocar perdas
                significativas. A colheita atempada e métodos locais de
                afugentamento podem fazer parte da estratégia de controlo.
              </p>
            </Card>

            <Card title="Striga">
              <p>
                <em>Striga</em>, especialmente <em>Striga hermonthica</em>, é
                uma planta parasita importante em sistemas de sorgo africanos.
                A prevenção inclui rotação, controlo antes da produção de
                sementes e utilização de materiais com maior tolerância ou
                resistência quando disponíveis.
              </p>
            </Card>

            <Card title="Doenças">
              <p>
                O sorgo pode ser afectado por doenças foliares, antracnose,
                ferrugens, míldio, podridões e problemas de grão. A identificação
                correcta é essencial antes de qualquer tratamento.
              </p>
            </Card>
          </div>

          <div className="mt-6 rounded-3xl bg-green-900 p-7 text-green-50">
            <h3 className="text-xl font-bold text-white">
              Manejo integrado
            </h3>

            <p className="mt-3 max-w-4xl leading-8">
              Para uma exploração familiar ou empresarial, uma estratégia
              robusta combina semente de qualidade, escolha adequada da época,
              rotação de culturas, eliminação de plantas hospedeiras, controlo
              precoce das infestantes, monitorização regular e conservação
              correcta do grão.
            </p>
          </div>
        </section>

        {/* COLHEITA */}
        <section className="mt-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card title="Quando colher">
              <p>
                A colheita deve ocorrer quando os grãos atingem maturidade
                adequada e apresentam humidade compatível com o sistema de
                colheita e secagem disponível.
              </p>

              <p className="mt-3">
                Deixar a cultura excessivamente tempo no campo pode aumentar
                riscos de ataque de aves, deterioração da panícula e perdas.
              </p>
            </Card>

            <Card title="Colheita manual">
              <p>
                Em sistemas familiares, as panículas podem ser cortadas
                manualmente e transportadas para local de debulha. A separação
                de lotes é importante quando existem diferentes variedades ou
                destinos de utilização.
              </p>
            </Card>

            <Card title="Colheita mecanizada">
              <p>
                Em sistemas mecanizados, a escolha da variedade, uniformidade
                do campo, altura das plantas e momento da colheita influenciam
                o desempenho da operação.
              </p>
            </Card>

            <Card title="Secagem">
              <p>
                O grão deve ser suficientemente seco antes do armazenamento. A
                humidade elevada favorece fungos, deterioração e problemas de
                conservação.
              </p>
            </Card>
          </div>
        </section>

        {/* POS COLHEITA */}
        <section id="pos-colheita" className="mt-16 scroll-mt-24">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
            Pós-colheita
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            Conservar o que foi produzido
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card title="Limpeza">
              <p>
                Remover palha, impurezas, pedras, sementes danificadas e outros
                materiais estranhos antes do armazenamento.
              </p>
            </Card>

            <Card title="Secagem">
              <p>
                A secagem deve ser uniforme. O grão quente e húmido não deve
                ser imediatamente fechado em recipientes sem ventilação.
              </p>
            </Card>

            <Card title="Armazenamento">
              <p>
                Utilizar recipientes limpos, secos, protegidos de roedores,
                insectos, humidade e contacto directo com o chão.
              </p>
            </Card>

            <Card title="Monitorização">
              <p>
                Inspeccionar regularmente o lote para detectar insectos,
                aquecimento, odores anormais, bolores ou aumento de humidade.
              </p>
            </Card>
          </div>
        </section>

        {/* UTILIZAÇÕES */}
        <section className="mt-16">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card title="Alimentação humana">
              <p>
                A massambala pode ser consumida inteira ou transformada em
                farinha. Em Angola, a farinha pode entrar na preparação de
                funje, papas, broas e outras preparações alimentares.
              </p>
            </Card>

            <Card title="Alimentação animal">
              <p>
                O grão pode integrar formulações para animais, desde que sejam
                consideradas as características nutricionais do material, o
                processamento e as exigências da espécie.
              </p>
            </Card>

            <Card title="Forragem">
              <p>
                Alguns tipos de sorgo são utilizados para produção de biomassa
                e forragem. A escolha do material deve ser compatível com o
                sistema pecuário e com a finalidade da cultura.
              </p>
            </Card>
          </div>
        </section>

        {/* ANGOLA */}
        <section id="angola" className="mt-16 scroll-mt-24">
          <div className="rounded-[2rem] bg-green-950 p-7 text-white sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-300">
              Angola
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Onde a massambala assume maior importância?
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-green-50">
              Documentos do FRESAN indicam que a massambala está entre os
              cereais predominantes na Huíla e no Cunene, juntamente com o
              milho e o massango. O Namibe também apresenta produção em zonas
              onde a agricultura tem forte relação com as condições
              semiáridas.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                <h3 className="font-bold">Sul</h3>
                <p className="mt-2 text-sm leading-6 text-green-100">
                  Cunene, Huíla e Namibe apresentam forte relevância histórica
                  da cultura.
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                <h3 className="font-bold">Centro</h3>
                <p className="mt-2 text-sm leading-6 text-green-100">
                  Huambo e Benguela estiveram envolvidos em demonstrações e
                  investigação do APPSA.
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                <h3 className="font-bold">Leste/Sudeste</h3>
                <p className="mt-2 text-sm leading-6 text-green-100">
                  O antigo Cuando Cubango teve actividade de investigação e
                  selecção participativa de materiais de sorgo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DADOS HISTÓRICOS */}
        <section className="mt-12">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card title="Série histórica: Namibe">
              <p>
                O relatório de cadeias de valor do FRESAN apresenta, para
                2019/2020, cerca de 2.649 hectares semeados, 1.400 hectares
                colhidos e 335 toneladas de produção de massambala no Namibe.
              </p>

              <p className="mt-3 text-xs text-slate-500">
                Dado histórico da série 2018–2020; não representa produção
                actual.
              </p>
            </Card>

            <Card title="Série histórica: Huíla">
              <p>
                Para 2019/2020, o mesmo documento apresenta aproximadamente
                78.600 hectares semeados, 65.241 hectares colhidos e 19.061
                toneladas de massambala na Huíla.
              </p>

              <p className="mt-3 text-xs text-slate-500">
                Dado histórico da série 2018–2020; não deve ser confundido com
                os dados actuais do sistema estatístico nacional.
              </p>
            </Card>

            <Card title="Série histórica: Cunene">
              <p>
                Para 2019/2020, a série apresenta cerca de 35.631 hectares
                semeados, 20.595 hectares colhidos e 2.826 toneladas de
                massambala.
              </p>

              <p className="mt-3 text-xs text-slate-500">
                Dado histórico da série 2018–2020.
              </p>
            </Card>

            <Card title="Porque não usar estes valores como dados actuais?">
              <p>
                O AGROINOVA deve distinguir anos, metodologia e configuração
                territorial. O INE disponibiliza actualmente o Anuário
                Estatístico da Agricultura do MINAGRIF, que inclui dados das
                campanhas agrícolas mais recentes.
              </p>

              <p className="mt-3">
                Quando a base oficial actualizada estiver integrada no módulo
                de dados do portal, os valores deverão aparecer com fonte,
                período, unidade e nível territorial.
              </p>
            </Card>
          </div>
        </section>

        {/* PROVÍNCIAS */}
        <section className="mt-16">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Consulta territorial
            </p>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Massambala por província
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              Seleccione uma província para consultar a nota territorial do
              AGROINOVA. A ferramenta não inventa produtividade ou produção
              provincial quando a fonte disponível não apresenta esses dados.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <label
                htmlFor="provincia"
                className="text-sm font-bold text-slate-900"
              >
                Província
              </label>

              <select
                id="provincia"
                value={provincia}
                onChange={(event) => setProvincia(event.target.value)}
                className="mt-3 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
              >
                {provincias.map((item) => (
                  <option key={item.nome} value={item.nome}>
                    {item.nome}
                  </option>
                ))}
              </select>

              <div className="mt-5 flex flex-wrap gap-2">
                <Tag>{provinciaSelecionada.regiao}</Tag>
                <Tag>21 províncias</Tag>
              </div>
            </div>

            <Card title={provinciaSelecionada.nome}>
              <p>{provinciaSelecionada.observacao}</p>

              <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  Regra de integridade
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-700">
                  A ausência de uma estatística provincial específica não
                  significa ausência da cultura. Significa apenas que o
                  AGROINOVA não deve preencher a lacuna com estimativas não
                  verificadas.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* INVESTIGAÇÃO */}
        <section id="investigacao" className="mt-16 scroll-mt-24">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Investigação em Angola
            </p>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              APPSA, IIA e selecção participativa
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              Um dos aspectos mais relevantes para a agricultura angolana é
              que já existem experiências de investigação e avaliação
              participativa de materiais de sorgo dentro do país. O projecto
              APPSA “Strengthening Sorghum Seed Systems in Angola and Lesotho”
              foi conduzido com participação do Instituto de Investigação
              Agronómica, estruturas de extensão e instituições de ensino.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card title="Materiais avaliados">
              <p>
                Em 2023, agricultores de Cuchi, Cuito Cuanavale e Menongue
                avaliaram 33 variedades precoces provenientes do ICRISAT e 3
                variedades locais.
              </p>

              <p className="mt-3">
                Os critérios incluíram rendimento, adaptação, resistência a
                pragas e doenças e palatabilidade.
              </p>
            </Card>

            <Card title="Províncias abrangidas">
              <p>
                A actividade de investigação e demonstração foi realizada em
                diferentes ambientes, incluindo Huambo, Huíla, Benguela,
                Namibe e a antiga província do Cuando Cubango.
              </p>
            </Card>

            <Card title="O que o produtor avaliou">
              <ul className="space-y-3">
                <li>• rendimento;</li>
                <li>• adaptação às condições locais;</li>
                <li>• resistência a pragas;</li>
                <li>• resistência a doenças;</li>
                <li>• palatabilidade;</li>
                <li>• características valorizadas pela comunidade.</li>
              </ul>
            </Card>

            <Card title="O que isto significa para o AGROINOVA">
              <p>
                O portal pode apresentar estas experiências como evidência de
                investigação realizada em Angola, mas não deve transformar
                automaticamente os materiais testados numa lista nacional de
                variedades recomendadas.
              </p>
            </Card>
          </div>
        </section>

        {/* EXPERIÊNCIA DE VALOR */}
        <section className="mt-16">
          <div className="rounded-3xl border border-green-200 bg-green-50 p-7 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Da produção ao valor acrescentado
            </p>

            <h2 className="mt-2 text-3xl font-black">
              A massambala também precisa de cadeia de valor
            </h2>

            <p className="mt-4 max-w-4xl leading-8 text-slate-700">
              Uma cultura resistente à seca só gera maior impacto económico
              quando o produtor consegue conservar, transformar, transportar e
              vender o produto. Uma experiência documentada pelo Banco Mundial
              mostra uma cooperativa da Huíla que adquiriu uma moagem capaz de
              processar milho, soja e massambala, reduzindo a necessidade de
              deslocação das comunidades para moer os cereais.
            </p>

            <a
              href="https://www.worldbank.org/pt/news/feature/2025/05/22/breaking-the-cycle-of-poverty-in-angola-through-cash-transfers-afe"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block font-bold text-green-800 hover:underline"
            >
              Consultar o caso documentado pelo Banco Mundial →
            </a>
          </div>
        </section>

        {/* PESQUISA */}
        <section className="mt-16">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card title="Melhoramento genético">
              <p>
                A investigação pode procurar materiais precoces, tolerantes à
                seca, resistentes a pragas e doenças e adequados às preferências
                dos consumidores.
              </p>
            </Card>

            <Card title="Sistemas de sementes">
              <p>
                A disponibilidade de semente de qualidade é fundamental para
                transformar resultados de investigação em tecnologia realmente
                acessível aos agricultores.
              </p>
            </Card>

            <Card title="Nutrição e processamento">
              <p>
                O processamento da farinha, qualidade nutricional, conservação
                e desenvolvimento de alimentos à base de sorgo constituem
                áreas importantes para investigação e inovação.
              </p>
            </Card>
          </div>
        </section>

        {/* PESQUISA */}
        <section className="mt-16">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <h2 className="text-3xl font-black">
              Perguntas que a investigação angolana ainda pode responder
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Quais materiais apresentam melhor estabilidade de rendimento entre ambientes angolanos?",
                "Quais variedades combinam precocidade e qualidade alimentar?",
                "Como melhorar a produção de semente de qualidade em sistemas familiares?",
                "Quais estratégias reduzem perdas por aves e pragas?",
                "Quais práticas de fertilidade são mais eficientes em solos pobres?",
                "Como integrar massambala, leguminosas e pecuária?",
                "Quais métodos de armazenamento reduzem perdas pós-colheita?",
                "Quais produtos transformados podem aumentar o valor económico do grão?",
              ].map((pergunta) => (
                <div
                  key={pergunta}
                  className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700"
                >
                  {pergunta}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BUSCA FONTES */}
        <section id="fontes" className="mt-16 scroll-mt-24">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                Biblioteca técnica
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Fontes e documentos
              </h2>
            </div>

            <div className="w-full md:max-w-sm">
              <label
                htmlFor="busca-fontes"
                className="text-sm font-semibold text-slate-700"
              >
                Pesquisar fontes
              </label>

              <input
                id="busca-fontes"
                type="search"
                value={busca}
                onChange={(event) => setBusca(event.target.value)}
                placeholder="Ex.: APPSA, FRESAN, sementes..."
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {referenciasFiltradas.map((referencia) => (
              <a
                key={referencia.titulo}
                href={referencia.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-green-300 hover:shadow-md"
              >
                <p className="text-xs font-bold uppercase tracking-wide text-green-700">
                  {referencia.instituicao}
                </p>

                <h3 className="mt-2 text-lg font-bold text-slate-900 group-hover:text-green-800">
                  {referencia.titulo}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {referencia.descricao}
                </p>

                <p className="mt-4 text-sm font-bold text-green-700">
                  Abrir documento / fonte →
                </p>
              </a>
            ))}
          </div>

          {referenciasFiltradas.length === 0 && (
            <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600">
              Nenhuma fonte encontrada para a pesquisa.
            </div>
          )}
        </section>

        {/* INTEGRIDADE */}
        <section className="mt-16">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10">
            <h2 className="text-2xl font-black">
              Nota de integridade dos dados
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
              <p>
                O AGROINOVA ANGOLA distingue dados oficiais actuais, séries
                históricas, resultados experimentais, experiências locais e
                referências internacionais.
              </p>

              <p>
                Os dados históricos de produção apresentados nesta página
                referem-se a uma série anterior e não devem ser apresentados
                como produção nacional ou provincial actual.
              </p>

              <p>
                Os resultados de ensaios de variedades não significam, por si
                só, que uma variedade esteja oficialmente recomendada para
                todas as zonas agroecológicas de Angola.
              </p>

              <p>
                Recomendações de fertilização, espaçamento, fitossanidade e
                controlo químico devem ser ajustadas à variedade, solo,
                ambiente, sistema de produção e legislação aplicável.
              </p>
            </div>
          </div>
        </section>

        {/* NAVEGAÇÃO FINAL */}
        <section className="mt-16 border-t border-slate-200 pt-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/agricultura/massango"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-center font-bold text-slate-800 transition hover:border-green-400 hover:text-green-800"
            >
              ← Massango
            </Link>

            <Link
              href="/agricultura"
              className="rounded-xl bg-green-800 px-5 py-3 text-center font-bold text-white transition hover:bg-green-900"
            >
              Todas as culturas
            </Link>

            <Link
              href="/agricultura/arroz"
              className="rounded-xl border border-green-700 bg-green-50 px-5 py-3 text-center font-bold text-green-800 transition hover:bg-green-100"
            >
              Próxima cultura: Arroz →
            </Link>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="mt-16 bg-green-950 text-green-100">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-xl font-black text-white">
                AGROINOVA ANGOLA
              </p>

              <p className="mt-3 text-sm leading-6 text-green-200">
                Conhecimento, tecnologia e inovação ao serviço do campo
                angolano.
              </p>
            </div>

            <div>
              <p className="font-bold text-white">Massambala</p>

              <p className="mt-3 text-sm leading-6 text-green-200">
                Conteúdo técnico para produtores, estudantes, técnicos,
                investigadores e decisores.
              </p>
            </div>

            <div>
              <p className="font-bold text-white">Integridade</p>

              <p className="mt-3 text-sm leading-6 text-green-200">
                Dados devem ser apresentados com fonte, período, unidade e
                nível territorial sempre que aplicável.
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-xs text-green-300">
            AGROINOVA ANGOLA • Massambala •{" "}
            <em>Sorghum bicolor</em>
          </div>
        </div>
      </footer>
    </main>
  );
}