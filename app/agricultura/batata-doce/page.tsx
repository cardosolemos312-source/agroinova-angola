"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

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
  local: string;
};

const provincias: Provincia[] = [
  {
    nome: "Bengo",
    regiao: "Norte",
    observacao:
      "Avaliar disponibilidade de água, drenagem, fertilidade e acesso a material vegetativo de qualidade.",
  },
  {
    nome: "Benguela",
    regiao: "Centro-Oeste",
    observacao:
      "A disponibilidade de água e a escolha da época de plantio são determinantes, sobretudo nas zonas mais secas.",
  },
  {
    nome: "Bié",
    regiao: "Planalto",
    observacao:
      "As condições do planalto podem favorecer a cultura quando há boa preparação do solo e disponibilidade de material de plantio.",
  },
  {
    nome: "Cabinda",
    regiao: "Norte",
    observacao:
      "A elevada humidade exige atenção especial à drenagem e à sanidade das plantas.",
  },
  {
    nome: "Cuando",
    regiao: "Leste",
    observacao:
      "A seleção da época de plantio deve considerar a distribuição das chuvas e a disponibilidade local de material vegetativo.",
  },
  {
    nome: "Cubango",
    regiao: "Leste",
    observacao:
      "A cultura pode ser integrada em sistemas familiares, desde que sejam controladas limitações de água e fertilidade.",
  },
  {
    nome: "Cuanza Norte",
    regiao: "Norte",
    observacao:
      "A drenagem e o controlo de plantas espontâneas são importantes durante a instalação da cultura.",
  },
  {
    nome: "Cuanza Sul",
    regiao: "Centro-Oeste",
    observacao:
      "Existem experiências recentes de produção e comercialização que demonstram interesse dos produtores pela cultura.",
  },
  {
    nome: "Cunene",
    regiao: "Sul",
    observacao:
      "Em zonas sujeitas à seca, a disponibilidade de água e materiais tolerantes ao stress são fatores críticos.",
  },
  {
    nome: "Huambo",
    regiao: "Planalto",
    observacao:
      "Existe histórico documentado de trabalho com batata-doce, incluindo experiências com materiais de polpa alaranjada.",
  },
  {
    nome: "Huíla",
    regiao: "Sul",
    observacao:
      "Experiências recentes nos Gambos mostram a utilização da cultura em sistemas de produção adaptados à seca.",
  },
  {
    nome: "Icolo e Bengo",
    regiao: "Centro-Norte",
    observacao:
      "A produção deve considerar disponibilidade de água, mercado consumidor e qualidade do material vegetativo.",
  },
  {
    nome: "Luanda",
    regiao: "Centro-Norte",
    observacao:
      "A produção periurbana deve priorizar solos adequados, água segura e mercados próximos.",
  },
  {
    nome: "Lunda Norte",
    regiao: "Leste",
    observacao:
      "A seleção do terreno deve privilegiar solos bem drenados e boa disponibilidade de material de plantio.",
  },
  {
    nome: "Lunda Sul",
    regiao: "Leste",
    observacao:
      "É importante ajustar época de plantio e práticas de conservação de humidade às condições locais.",
  },
  {
    nome: "Malanje",
    regiao: "Norte",
    observacao:
      "A cultura pode ser integrada em sistemas familiares e em estratégias de diversificação agrícola.",
  },
  {
    nome: "Moxico",
    regiao: "Leste",
    observacao:
      "A escolha da área deve considerar drenagem, fertilidade e acesso a material vegetativo saudável.",
  },
  {
    nome: "Moxico Leste",
    regiao: "Leste",
    observacao:
      "Recomenda-se avaliação local de água, solo, época de plantio e disponibilidade de ramas.",
  },
  {
    nome: "Namibe",
    regiao: "Sul",
    observacao:
      "Experiências recentes demonstram produção de batata-doce em sistemas adaptados a condições de seca.",
  },
  {
    nome: "Uíge",
    regiao: "Norte",
    observacao:
      "A drenagem e a gestão da humidade são particularmente importantes devido às condições de maior precipitação.",
  },
  {
    nome: "Zaire",
    regiao: "Norte",
    observacao:
      "A escolha do terreno deve evitar zonas sujeitas a encharcamento prolongado.",
  },
];

const imagens: Imagem[] = [
  {
    src: "https://www.wvi.org/sites/default/files/inline-images/IMG_5300_1.JPG",
    href: "https://www.wvi.org/pt-pt/stories/angola/escola-de-campo-transformacao-para-sustentabilidade-e-seguranca-alimentar-em-tempos",
    alt: "Agricultora a colher batata-doce num campo em Angola",
    legenda:
      "Agricultora durante a colheita de batata-doce em campo de produção em Angola.",
    fonte: "World Vision International",
    local: "Angola",
  },
  {
    src: "https://www.wvi.org/sites/default/files/inline-images/IMG_5370.JPG",
    href: "https://www.wvi.org/stories/angola/field-school-transformation-sustainability-and-food-security-times-drought",
    alt: "Agricultores angolanos com batata-doce recém-colhida",
    legenda:
      "Produtores apresentam batata-doce recém-colhida durante uma experiência de campo.",
    fonte: "World Vision International",
    local: "Namibe, Angola",
  },
  {
    src: "https://www.wvi.org/sites/default/files/inline-images/IMG_5272_0.JPG",
    href: "https://www.wvi.org/stories/angola/field-school-transformation-sustainability-and-food-security-times-drought",
    alt: "Agricultor angolano a retirar batata-doce do solo",
    legenda:
      "Colheita manual de raízes de batata-doce diretamente no campo.",
    fonte: "World Vision International",
    local: "Namibe, Angola",
  },
  {
    src: "https://cdn.prod.website-files.com/5a8e71e3c7881c000130ff13/69a01b2bd9e47a6552726560_WhatsApp%20Image%202026-02-23%20at%2010.53.50%20%282%29.jpeg",
    href: "https://www.adra-angola.org/artigos/producao-de-batata-doce-fortalece-comunidades-nos-gambos",
    alt: "Plantação de batata-doce durante formação de agricultores em Angola",
    legenda:
      "Plantio de batata-doce acompanhado por técnicos durante formação agrícola.",
    fonte: "ADRA Angola",
    local: "Gambos, Huíla, Angola",
  },
  {
    src: "https://cdn.prod.website-files.com/5a8e71e3c7881c000130ff13/69a01b3938f00a154da302ad_WhatsApp%20Image%202026-02-23%20at%2010.53.50.jpeg",
    href: "https://www.adra-angola.org/artigos/producao-de-batata-doce-fortalece-comunidades-nos-gambos",
    alt: "Técnicos orientando agricultores no plantio de batata-doce",
    legenda:
      "Demonstração prática de preparação de linhas e plantio de ramas.",
    fonte: "ADRA Angola",
    local: "Gambos, Huíla, Angola",
  },
  {
    src: "https://www.makaangola.org/wp-content/uploads/2020/09/bata-doce.jpg",
    href: "https://www.makaangola.org/2020/09/pao-ou-batata-doce-a-producao-agro-alimentar-nacional/",
    alt: "Colheita de batata-doce num campo angolano",
    legenda:
      "Colheita de batata-doce em área agrícola de Angola.",
    fonte: "Maka Angola",
    local: "Angola",
  },
  {
    src: "https://media.licdn.com/dms/image/v2/D4D22AQHNAa4yRlAGPA/feedshare-shrink_800/B4DZbTipRYHsAg-/0/1747305816503?e=2147483647&t=ldeD8weqh7WcTmfkaBqKlBiDhmqr6UJCEc89nWA2OhE&v=beta",
    href: "https://www.linkedin.com/posts/mois%C3%A9s-kitumba-84a157242_angola-minagrif-cuanzasulwaku-activity-7328731786606231552-CPhz",
    alt: "Produtores angolanos apresentando produção de batata-doce",
    legenda:
      "Produtores reunidos durante uma atividade de produção e colheita.",
    fonte: "Moisés Kitumba / publicação sobre atividade agrícola",
    local: "Cuanza Sul, Angola",
  },
];

const secoes = [
  "Visão geral",
  "Botânica",
  "Clima",
  "Solo",
  "Material de plantio",
  "Preparação",
  "Plantio",
  "Manejo",
  "Pragas",
  "Doenças",
  "Colheita",
  "Pós-colheita",
  "Nutrição",
  "Processamento",
  "Angola",
  "Investigação",
];

export default function BatataDocePage() {
  const [provincia, setProvincia] = useState("Huambo");
  const [pesquisa, setPesquisa] = useState("");

  const provinciaAtual = provincias.find((p) => p.nome === provincia);

  const imagensFiltradas = useMemo(() => {
    const termo = pesquisa.toLowerCase().trim();

    if (!termo) return imagens;

    return imagens.filter(
      (imagem) =>
        imagem.local.toLowerCase().includes(termo) ||
        imagem.fonte.toLowerCase().includes(termo) ||
        imagem.legenda.toLowerCase().includes(termo),
    );
  }, [pesquisa]);

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO */}
      <section
        className="relative min-h-[620px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url("${imagens[1].src}")`,
        }}
      >
        <div className="absolute inset-0 bg-emerald-950/75" />

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="max-w-4xl text-white">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">
              AGROINOVA ANGOLA • Agricultura
            </p>

            <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              Batata-doce
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-emerald-50 sm:text-xl">
              Guia técnico e académico sobre{" "}
              <em>Ipomoea batatas</em>, com foco na produção,
              material vegetativo, manejo, sanidade, colheita,
              pós-colheita, nutrição, processamento e realidade
              agrícola de Angola.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Produção em Angola",
                "Material vegetativo",
                "Manejo",
                "Sanidade",
                "Nutrição",
                "Investigação",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-emerald-300/40 bg-emerald-900/60 px-4 py-2 text-sm font-semibold text-emerald-50"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#producao"
                className="rounded-xl bg-emerald-500 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-emerald-400"
              >
                Ver orientação técnica
              </a>

              <a
                href="#angola"
                className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                Realidade angolana
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="border-b border-emerald-100 bg-emerald-50">
        <div className="mx-auto max-w-7xl px-6 py-4 text-sm text-slate-600 lg:px-8">
          <Link
            href="/agricultura"
            className="font-semibold text-emerald-700 hover:underline"
          >
            Agricultura
          </Link>
          <span className="mx-2">/</span>
          <span>Batata-doce</span>
        </div>
      </div>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
              Cultura de raízes e tubérculos
            </p>

            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Uma cultura importante para a diversificação agrícola
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              A batata-doce é uma espécie de grande importância alimentar
              e económica em vários sistemas agrícolas tropicais. A parte
              normalmente consumida é uma raiz de reserva, e não um tubérculo
              verdadeiro. A cultura pode ser multiplicada por sementes,
              raízes ou ramas, mas a produção agrícola utiliza sobretudo
              material vegetativo.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Em Angola, a cultura deve ser analisada considerando diferentes
              zonas agroecológicas. A recomendação de uma técnica de produção
              não deve ser automaticamente transferida de uma província para
              outra. Água, solo, época de chuva, material de plantio,
              pressão de pragas, mercado e finalidade da produção devem ser
              considerados conjuntamente.
            </p>
          </div>

          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-7">
            <h3 className="text-xl font-black text-emerald-900">
              Ficha técnica
            </h3>

            <div className="mt-6 space-y-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">
                  Nome científico
                </p>
                <p className="mt-1 font-semibold text-slate-800">
                  Ipomoea batatas (L.) Lam.
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">
                  Família
                </p>
                <p className="mt-1 font-semibold text-slate-800">
                  Convolvulaceae
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">
                  Produto principal
                </p>
                <p className="mt-1 font-semibold text-slate-800">
                  Raízes de reserva
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">
                  Multiplicação agrícola
                </p>
                <p className="mt-1 font-semibold text-slate-800">
                  Principalmente por ramas
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">
                  Utilizações
                </p>
                <p className="mt-1 font-semibold text-slate-800">
                  Alimentação, processamento, folhas e alimentação animal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="sticky top-0 z-20 border-y border-emerald-100 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto max-w-7xl overflow-x-auto px-6 py-3 lg:px-8">
          <div className="flex min-w-max gap-2">
            {secoes.map((secao) => {
              const id = secao
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/\s+/g, "-");

              return (
                <a
                  key={secao}
                  href={`#${id}`}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-700"
                >
                  {secao}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMAGENS ANGOLA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
              Fotografia de campo
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              Batata-doce produzida em Angola
            </h2>

            <p className="mt-3 max-w-3xl text-slate-600">
              Esta galeria prioriza fotografias de produção agrícola em
              território angolano, em vez de imagens genéricas de outros
              países.
            </p>
          </div>

          <div className="w-full md:w-80">
            <input
              type="search"
              value={pesquisa}
              onChange={(e) => setPesquisa(e.target.value)}
              placeholder="Pesquisar local ou fonte..."
              className="w-full rounded-xl border border-emerald-200 bg-white px-4 py-3 outline-none ring-emerald-500 focus:ring-2"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {imagensFiltradas.map((imagem) => (
            <a
              key={imagem.src}
              href={imagem.href}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={imagem.src}
                  alt={imagem.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute left-4 top-4 rounded-full bg-emerald-700/90 px-3 py-1 text-xs font-bold text-white">
                  {imagem.local}
                </div>
              </div>

              <div className="p-5">
                <p className="font-bold leading-6 text-slate-900">
                  {imagem.legenda}
                </p>

                <p className="mt-3 text-sm text-emerald-700">
                  Fonte: {imagem.fonte}
                </p>

                <p className="mt-2 text-sm font-semibold text-slate-500">
                  Abrir fonte da fotografia →
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* BOTÂNICA */}
      <section
        id="botanica"
        className="scroll-mt-24 bg-slate-50 py-16"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
            01 • Botânica
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900">
            Características da planta
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                titulo: "Raiz de reserva",
                texto:
                  "A parte comercialmente consumida desenvolve-se como raiz de reserva engrossada. A forma, tamanho e cor variam de acordo com o genótipo e as condições ambientais.",
              },
              {
                titulo: "Ramas",
                texto:
                  "Os caules rastejantes produzem nós capazes de enraizar. As ramas constituem o principal material de multiplicação utilizado na produção comercial.",
              },
              {
                titulo: "Folhas",
                texto:
                  "A forma das folhas apresenta variação genética. As folhas também podem ter utilização alimentar em determinados sistemas de consumo.",
              },
              {
                titulo: "Diversidade",
                texto:
                  "Existe grande diversidade de formas, cores de pele e de polpa. Materiais de polpa alaranjada são particularmente relevantes para programas de nutrição devido ao conteúdo de provitamina A.",
              },
            ].map((card) => (
              <article
                key={card.titulo}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-black text-emerald-800">
                  {card.titulo}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {card.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLIMA */}
      <section
        id="clima"
        className="scroll-mt-24 mx-auto max-w-7xl px-6 py-16 lg:px-8"
      >
        <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
          02 • Ambiente
        </p>

        <h2 className="mt-2 text-3xl font-black text-slate-900">
          Clima e disponibilidade de água
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              titulo: "Temperatura",
              texto:
                "A batata-doce é uma cultura tropical e subtropical. O desempenho depende da temperatura, duração do ciclo e disponibilidade de água.",
            },
            {
              titulo: "Chuva",
              texto:
                "A distribuição das chuvas é tão importante quanto o volume total. Períodos de défice hídrico podem limitar o desenvolvimento, especialmente durante a formação das raízes.",
            },
            {
              titulo: "Seca",
              texto:
                "A cultura apresenta interesse para sistemas sujeitos a stress climático, mas tolerância relativa à seca não significa ausência de necessidade de água.",
            },
          ].map((card) => (
            <article
              key={card.titulo}
              className="rounded-3xl border border-emerald-100 bg-emerald-50 p-7"
            >
              <h3 className="text-xl font-black text-emerald-900">
                {card.titulo}
              </h3>

              <p className="mt-4 leading-7 text-slate-700">
                {card.texto}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* SOLO */}
      <section
        id="solo"
        className="scroll-mt-24 bg-emerald-950 py-16 text-white"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-300">
            03 • Solo
          </p>

          <h2 className="mt-2 text-3xl font-black">
            Escolha e preparação do terreno
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                titulo: "Drenagem",
                texto:
                  "Evitar áreas sujeitas a encharcamento prolongado. A água acumulada reduz a qualidade das raízes e favorece problemas sanitários.",
              },
              {
                titulo: "Profundidade",
                texto:
                  "Solos suficientemente profundos e fisicamente favoráveis facilitam o desenvolvimento das raízes de reserva.",
              },
              {
                titulo: "Estrutura",
                texto:
                  "Solos excessivamente compactados podem dificultar o engrossamento das raízes e a colheita.",
              },
              {
                titulo: "Fertilidade",
                texto:
                  "A fertilidade deve ser avaliada de acordo com análise de solo e histórico da área. Evitar recomendações de adubação sem diagnóstico.",
              },
            ].map((card) => (
              <article
                key={card.titulo}
                className="rounded-2xl border border-emerald-800 bg-emerald-900/50 p-6"
              >
                <h3 className="text-lg font-black text-emerald-300">
                  {card.titulo}
                </h3>

                <p className="mt-4 leading-7 text-emerald-50/90">
                  {card.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIAL DE PLANTIO */}
      <section
        id="material-de-plantio"
        className="scroll-mt-24 mx-auto max-w-7xl px-6 py-16 lg:px-8"
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
              04 • Material vegetativo
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              A qualidade das ramas começa antes do plantio
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              A batata-doce é normalmente multiplicada vegetativamente.
              Portanto, o estado sanitário das ramas influencia diretamente
              a instalação da cultura. Material proveniente de plantas
              debilitadas ou com sintomas de doenças pode transportar
              problemas para a nova área.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Selecionar ramas vigorosas e livres de sintomas evidentes.",
                "Evitar material proveniente de campos com elevada incidência de viroses.",
                "Manter material vegetativo protegido de danos e desidratação.",
                "Priorizar sistemas de multiplicação que permitam renovar o material.",
                "Identificar a origem do material utilizado pelo produtor.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-emerald-100 bg-emerald-50 p-4 font-semibold text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <a
            href={imagens[3].href}
            target="_blank"
            rel="noreferrer"
            className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm"
          >
            <img
              src={imagens[3].src}
              alt={imagens[3].alt}
              className="h-full min-h-[420px] w-full object-cover"
            />

            <div className="bg-white p-5">
              <p className="font-bold text-slate-900">
                {imagens[3].legenda}
              </p>

              <p className="mt-2 text-sm text-emerald-700">
                {imagens[3].fonte} • {imagens[3].local}
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* PREPARAÇÃO */}
      <section
        id="preparacao"
        className="scroll-mt-24 bg-slate-50 py-16"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
            05 • Preparação
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900">
            Preparação da área
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "1",
                "Diagnóstico",
                "Avaliar solo, declive, drenagem, histórico da área e disponibilidade de água.",
              ],
              [
                "2",
                "Limpeza",
                "Controlar a vegetação concorrente antes da instalação da cultura.",
              ],
              [
                "3",
                "Mobilização",
                "Preparar o solo de acordo com a condição física da área e o sistema de produção.",
              ],
              [
                "4",
                "Camalhões",
                "Quando tecnicamente apropriado, utilizar camalhões ou leiras para favorecer a formação e colheita das raízes.",
              ],
              [
                "5",
                "Matéria orgânica",
                "Utilizar fontes orgânicas bem processadas quando disponíveis e tecnicamente adequadas.",
              ],
              [
                "6",
                "Conservação",
                "Reduzir erosão e perda de humidade através de práticas adaptadas à área.",
              ],
            ].map(([numero, titulo, texto]) => (
              <article
                key={numero}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="text-4xl font-black text-emerald-600">
                  {numero}
                </div>

                <h3 className="mt-4 text-xl font-black text-slate-900">
                  {titulo}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUÇÃO */}
      <section
        id="plantio"
        className="scroll-mt-24 mx-auto max-w-7xl px-6 py-16 lg:px-8"
      >
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="overflow-hidden rounded-3xl">
            <a
              href={imagens[4].href}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imagens[4].src}
                alt={imagens[4].alt}
                className="h-full min-h-[500px] w-full object-cover transition hover:scale-[1.02]"
              />
            </a>
          </div>

          <div id="producao" className="scroll-mt-24">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
              06 • Produção
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              Plantio e estabelecimento
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              O plantio deve ser ajustado ao sistema de produção e às
              condições locais. Referências técnicas internacionais utilizam
              ramas com vários nós e diferentes combinações de espaçamento,
              mas esses valores não devem ser apresentados como uma
              recomendação oficial única para todas as províncias de Angola.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Utilizar ramas vigorosas.",
                "Garantir contacto adequado da rama com o solo.",
                "Evitar enterrar material excessivamente debilitado.",
                "Escolher a época de acordo com a disponibilidade de humidade.",
                "Controlar plantas espontâneas no estabelecimento.",
                "Monitorar falhas de emergência e fazer reposição quando necessário.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-emerald-100 bg-emerald-50 p-4 font-semibold text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="font-black text-amber-900">
                Nota sobre espaçamento
              </h3>

              <p className="mt-3 leading-7 text-amber-900/80">
                O AGROINOVA não apresenta um único espaçamento como regra
                nacional angolana sem evidência específica. O espaçamento
                deve considerar variedade, arquitetura da planta, fertilidade
                do solo, mecanização, disponibilidade de água e objetivo da
                produção.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MANEJO */}
      <section
        id="manejo"
        className="scroll-mt-24 bg-emerald-50 py-16"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
            07 • Manejo
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900">
            Manejo durante o ciclo
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                titulo: "Plantas espontâneas",
                texto:
                  "A competição inicial pode reduzir o estabelecimento. O controlo deve ser realizado de acordo com o sistema de produção.",
              },
              {
                titulo: "Água",
                texto:
                  "A cultura tolera determinadas condições de défice, mas a disponibilidade de água durante fases críticas influencia o rendimento.",
              },
              {
                titulo: "Nutrição",
                texto:
                  "A fertilização deve ser orientada por análise do solo e pelas necessidades da cultura, evitando aplicações indiscriminadas.",
              },
              {
                titulo: "Monitorização",
                texto:
                  "Visitas regulares permitem identificar pragas, sintomas de doenças, falhas de estabelecimento e problemas de desenvolvimento.",
              },
            ].map((card) => (
              <article
                key={card.titulo}
                className="rounded-2xl border border-emerald-100 bg-white p-6"
              >
                <h3 className="text-xl font-black text-emerald-800">
                  {card.titulo}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {card.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRAGAS */}
      <section
        id="pragas"
        className="scroll-mt-24 mx-auto max-w-7xl px-6 py-16 lg:px-8"
      >
        <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
          08 • Sanidade
        </p>

        <h2 className="mt-2 text-3xl font-black text-slate-900">
          Principais pragas a monitorar
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              titulo: "Gorgulho da batata-doce",
              cientifico: "Cylas spp.",
              texto:
                "Os adultos atacam partes aéreas e as larvas escavam galerias nas raízes. O problema pode ser particularmente severo quando as plantas sofrem stress hídrico.",
            },
            {
              titulo: "Nemátodes das galhas",
              cientifico: "Meloidogyne spp.",
              texto:
                "Podem provocar alterações no sistema radicular e reduzir o desenvolvimento e a qualidade das raízes.",
            },
            {
              titulo: "Mosca-branca",
              cientifico: "Bemisia tabaci",
              texto:
                "Além dos danos diretos, é importante pela sua relação com a transmissão de determinados vírus de plantas.",
            },
          ].map((card) => (
            <article
              key={card.titulo}
              className="rounded-3xl border border-red-100 bg-red-50 p-7"
            >
              <h3 className="text-xl font-black text-slate-900">
                {card.titulo}
              </h3>

              <p className="mt-2 font-mono text-sm text-red-700">
                {card.cientifico}
              </p>

              <p className="mt-5 leading-7 text-slate-700">
                {card.texto}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* DOENÇAS */}
      <section
        id="doencas"
        className="scroll-mt-24 bg-slate-950 py-16 text-white"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-400">
            09 • Doenças
          </p>

          <h2 className="mt-2 text-3xl font-black">
            Sanidade e doenças virais
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-slate-800 bg-slate-900 p-7">
              <h3 className="text-xl font-black text-emerald-300">
                Vírus
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                A batata-doce pode ser afetada por complexos virais. A
                doença conhecida como Sweet Potato Virus Disease (SPVD)
                está associada principalmente à interação entre Sweet potato
                feathery mottle virus e Sweet potato chlorotic stunt virus.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-800 bg-slate-900 p-7">
              <h3 className="text-xl font-black text-emerald-300">
                Prevenção
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                A prevenção começa com material de plantio saudável,
                renovação do material vegetativo, monitorização do campo e
                eliminação adequada de plantas severamente afetadas quando
                recomendado pelos serviços técnicos.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* COLHEITA */}
      <section
        id="colheita"
        className="scroll-mt-24 mx-auto max-w-7xl px-6 py-16 lg:px-8"
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
              10 • Colheita
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              Colheita das raízes
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              O momento da colheita depende da cultivar, objetivo da produção,
              condições ambientais e mercado. A colheita deve procurar reduzir
              cortes, perfurações e ferimentos nas raízes, porque danos físicos
              aceleram perdas durante a conservação.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Identificar a maturidade adequada para o objetivo comercial.",
                "Evitar danos mecânicos durante a retirada das raízes.",
                "Separar raízes danificadas das destinadas à comercialização.",
                "Evitar exposição desnecessária ao sol e ao calor.",
                "Transportar cuidadosamente para reduzir perdas.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-white p-4 font-semibold text-slate-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <a
            href={imagens[2].href}
            target="_blank"
            rel="noreferrer"
            className="overflow-hidden rounded-3xl"
          >
            <img
              src={imagens[2].src}
              alt={imagens[2].alt}
              className="h-full min-h-[430px] w-full object-cover transition hover:scale-[1.02]"
            />
          </a>
        </div>
      </section>

      {/* PÓS-COLHEITA */}
      <section
        id="pos-colheita"
        className="scroll-mt-24 bg-slate-50 py-16"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
            11 • Pós-colheita
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900">
            Redução de perdas pós-colheita
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                titulo: "Manuseamento",
                texto:
                  "Reduzir pancadas, cortes e abrasões durante a colheita, seleção e transporte.",
              },
              {
                titulo: "Seleção",
                texto:
                  "Separar raízes comercialmente adequadas das danificadas ou com sinais de deterioração.",
              },
              {
                titulo: "Destino",
                texto:
                  "A comercialização rápida, processamento ou utilização adequada podem ser importantes porque a raiz fresca é perecível.",
              },
            ].map((card) => (
              <article
                key={card.titulo}
                className="rounded-3xl border border-slate-200 bg-white p-7"
              >
                <h3 className="text-xl font-black text-emerald-800">
                  {card.titulo}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {card.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NUTRIÇÃO */}
      <section
        id="nutricao"
        className="scroll-mt-24 bg-emerald-700 py-16 text-white"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-200">
            12 • Nutrição
          </p>

          <h2 className="mt-2 text-3xl font-black">
            Importância nutricional
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                titulo: "Polpa alaranjada",
                texto:
                  "As variedades de polpa alaranjada podem apresentar elevados teores de carotenoides, incluindo provitamina A.",
              },
              {
                titulo: "Energia alimentar",
                texto:
                  "A raiz constitui uma importante fonte de energia alimentar e pode ser utilizada de diferentes formas.",
              },
              {
                titulo: "Diversificação",
                texto:
                  "A utilização da batata-doce em diferentes produtos pode contribuir para diversificar a dieta e criar oportunidades de processamento.",
              },
            ].map((card) => (
              <article
                key={card.titulo}
                className="rounded-3xl bg-emerald-800/70 p-7"
              >
                <h3 className="text-xl font-black text-white">
                  {card.titulo}
                </h3>

                <p className="mt-4 leading-7 text-emerald-50">
                  {card.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSAMENTO */}
      <section
        id="processamento"
        className="scroll-mt-24 mx-auto max-w-7xl px-6 py-16 lg:px-8"
      >
        <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
          13 • Valor acrescentado
        </p>

        <h2 className="mt-2 text-3xl font-black text-slate-900">
          Utilização e processamento
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Consumo fresco",
            "Farinha",
            "Pão e produtos de panificação",
            "Bebidas e preparações alimentares",
            "Doces e produtos transformados",
            "Folhas em sistemas alimentares específicos",
            "Alimentação animal",
            "Comercialização de raízes frescas",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6"
            >
              <h3 className="font-black text-emerald-900">{item}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Possibilidade a avaliar de acordo com variedade, qualidade,
                mercado e processamento disponível.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ANGOLA */}
      <section
        id="angola"
        className="scroll-mt-24 bg-slate-950 py-20 text-white"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-400">
              14 • Angola
            </p>

            <h2 className="mt-2 text-4xl font-black">
              A batata-doce na realidade agrícola angolana
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              O AGROINOVA deve apresentar a batata-doce como uma cultura
              nacional, sem reduzir a análise a uma única província.
              Entretanto, algumas experiências documentadas ajudam a
              demonstrar a diversidade dos sistemas produtivos angolanos.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-3xl border border-slate-800 bg-slate-900 p-7">
              <p className="text-sm font-bold text-emerald-400">
                HUAMBO
              </p>

              <h3 className="mt-3 text-2xl font-black">
                Ukuma
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                O CIP documentou uma experiência com batata-doce de polpa
                alaranjada em agricultores de Ukuma, incluindo utilização
                para pão, sumo e bolos. O material é histórico e deve ser
                apresentado como experiência documentada, não como dado
                atual de produção nacional.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-800 bg-slate-900 p-7">
              <p className="text-sm font-bold text-emerald-400">
                HUÍLA
              </p>

              <h3 className="mt-3 text-2xl font-black">
                Gambos
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Experiências recentes de organizações que trabalham com
                agricultores dos Gambos mostram atividades de formação,
                plantio, multiplicação de material e produção de batata-doce.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-800 bg-slate-900 p-7">
              <p className="text-sm font-bold text-emerald-400">
                NAMIBE
              </p>

              <h3 className="mt-3 text-2xl font-black">
                Sistemas adaptados à seca
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Registos de escolas de campo mostram agricultores do Namibe
                envolvidos na produção e colheita de batata-doce em sistemas
                orientados para condições de seca.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PROVÍNCIAS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
              Análise provincial
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              Selecionar província
            </h2>

            <select
              value={provincia}
              onChange={(e) => setProvincia(e.target.value)}
              className="mt-6 w-full rounded-xl border border-emerald-200 bg-white px-4 py-3 font-semibold outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {provincias.map((item) => (
                <option key={item.nome} value={item.nome}>
                  {item.nome}
                </option>
              ))}
            </select>
          </div>

          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8">
            <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
              Província selecionada
            </p>

            <h3 className="mt-2 text-3xl font-black text-emerald-950">
              {provinciaAtual?.nome}
            </h3>

            <p className="mt-2 font-semibold text-emerald-800">
              Região: {provinciaAtual?.regiao}
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              {provinciaAtual?.observacao}
            </p>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-white p-5">
              <p className="font-bold text-slate-900">
                Importante
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Esta seleção é uma orientação geral. O AGROINOVA não deve
                transformar uma experiência local numa recomendação nacional
                sem evidência experimental ou técnica específica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTIGAÇÃO */}
      <section
        id="investigacao"
        className="scroll-mt-24 bg-emerald-50 py-16"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
            15 • Investigação
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900">
            Linhas de investigação relevantes para Angola
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Caracterização de variedades locais.",
              "Seleção de materiais adaptados a diferentes zonas agroecológicas.",
              "Multiplicação e conservação de material vegetativo saudável.",
              "Tolerância a seca e stress térmico.",
              "Resistência a pragas e doenças.",
              "Batata-doce de polpa alaranjada e nutrição.",
              "Sistemas de produção para pequenos agricultores.",
              "Processamento e agregação de valor.",
              "Mercados e cadeias de comercialização.",
            ].map((item) => (
              <article
                key={item}
                className="rounded-2xl border border-emerald-100 bg-white p-6"
              >
                <h3 className="font-bold leading-7 text-slate-800">
                  {item}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
          Fontes e documentação
        </p>

        <h2 className="mt-2 text-3xl font-black text-slate-900">
          Referências para aprofundamento
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <a
            href="https://cipotato.org/sweetpotato/how-sweetpotato-grows/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-200 p-6 transition hover:border-emerald-400 hover:bg-emerald-50"
          >
            <h3 className="font-black text-slate-900">
              International Potato Center — How Sweetpotato Grows
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Botânica, crescimento, formação das raízes e características
              gerais da cultura.
            </p>
          </a>

          <a
            href="https://cipotato.org/sweetpotato/sweetpotato-facts-and-figures/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-200 p-6 transition hover:border-emerald-400 hover:bg-emerald-50"
          >
            <h3 className="font-black text-slate-900">
              CIP — Sweetpotato Facts and Figures
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Informações sobre taxonomia, produção, nutrição e diversidade.
            </p>
          </a>

          <a
            href="https://cipotato.org/sweetpotato/sweetpotato-pests-and-diseases/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-200 p-6 transition hover:border-emerald-400 hover:bg-emerald-50"
          >
            <h3 className="font-black text-slate-900">
              CIP — Sweetpotato Pests and Diseases
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Pragas, doenças e problemas sanitários importantes.
            </p>
          </a>

          <a
            href="https://cipotato.org/publication/orange-fleshed-sweetpotato-is-here-to-stay-in-angola/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-200 p-6 transition hover:border-emerald-400 hover:bg-emerald-50"
          >
            <h3 className="font-black text-slate-900">
              CIP — Orange Fleshed Sweetpotato in Angola
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Experiência documentada em Ukuma, Huambo, com batata-doce de
              polpa alaranjada.
            </p>
          </a>

          <a
            href="https://www.adra-angola.org/artigos/producao-de-batata-doce-fortalece-comunidades-nos-gambos"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-200 p-6 transition hover:border-emerald-400 hover:bg-emerald-50"
          >
            <h3 className="font-black text-slate-900">
              ADRA Angola — Produção de batata-doce nos Gambos
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Produção, formação e multiplicação de material de plantio em
              contexto angolano.
            </p>
          </a>

          <a
            href="https://www.wvi.org/stories/angola/field-school-transformation-sustainability-and-food-security-times-drought"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-200 p-6 transition hover:border-emerald-400 hover:bg-emerald-50"
          >
            <h3 className="font-black text-slate-900">
              World Vision — Field School em Angola
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Experiências de agricultores, produção e colheita em sistemas
              adaptados à seca.
            </p>
          </a>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="border-t border-emerald-100 bg-emerald-950 py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
              AGROINOVA ANGOLA
            </p>

            <p className="mt-2 text-white">
              Conhecimento, tecnologia e inovação ao serviço do campo
              angolano.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/agricultura/soja"
              className="rounded-xl border border-emerald-700 px-5 py-3 font-bold text-white transition hover:bg-emerald-900"
            >
              ← Soja
            </Link>

            <Link
              href="/agricultura/batata-rena"
              className="rounded-xl bg-emerald-500 px-5 py-3 font-bold text-white transition hover:bg-emerald-400"
            >
              Próxima: Batata-rena →
            </Link>

            <Link
              href="/agricultura"
              className="rounded-xl border border-emerald-700 px-5 py-3 font-bold text-white transition hover:bg-emerald-900"
            >
              Agricultura
            </Link>
          </div>
        </div>
      </section>

      {/* NOTA DE INTEGRIDADE */}
      <footer className="bg-slate-950 px-6 py-8 text-center text-sm leading-6 text-slate-400">
        <p>
          O AGROINOVA ANGOLA distingue evidência científica, experiências
          locais, referências internacionais e recomendações oficiais.
          Fotografias são apresentadas com identificação da fonte e do
          contexto disponível.
        </p>
      </footer>
    </main>
  );
}