"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type TipoInstituicao =
  | "Universidade"
  | "Investigação"
  | "Ensino médio";

type Natureza = "Pública" | "Privada";

type Universidade = {
  nome: string;
  sigla?: string;
  natureza: Natureza;
  provincia: string;
  agriculturaConfirmada: boolean;
  areas: string[];
  observacao?: string;
};

type InstitutoInvestigacao = {
  nome: string;
  sigla: string;
  areas: string[];
  destaque: string;
};

type EscolaAgraria = {
  nome: string;
  provincia: string;
  natureza: string;
  areas: string[];
  observacao: string;
};

type AreaInvestigacao = {
  slug: string;
  icon: string;
  titulo: string;
  descricao: string;
};

const universidades: Universidade[] = [
  {
    nome: "Universidade Agostinho Neto",
    sigla: "UAN",
    natureza: "Pública",
    provincia: "Luanda",
    agriculturaConfirmada: false,
    areas: [],
  },
  {
    nome: "Universidade de Luanda",
    sigla: "UniLuanda",
    natureza: "Pública",
    provincia: "Luanda",
    agriculturaConfirmada: false,
    areas: [],
  },
  {
    nome: "Universidade Katyavala Bwila",
    sigla: "UKB",
    natureza: "Pública",
    provincia: "Benguela",
    agriculturaConfirmada: false,
    areas: [],
  },
  {
    nome: "Universidade José Eduardo dos Santos",
    sigla: "UJES",
    natureza: "Pública",
    provincia: "Huambo",
    agriculturaConfirmada: false,
    areas: [],
    observacao:
      "Áreas agropecuárias em processo de catalogação documental pela AGROINOVA.",
  },
  {
    nome: "Universidade Cuíto Cuanavale",
    natureza: "Pública",
    provincia: "Cuando Cubango",
    agriculturaConfirmada: false,
    areas: [],
  },
  {
    nome: "Universidade Kimpa Vita",
    natureza: "Pública",
    provincia: "Uíge",
    agriculturaConfirmada: false,
    areas: [],
  },
  {
    nome: "Universidade Lueji A'Nkonde",
    natureza: "Pública",
    provincia: "Lunda Norte",
    agriculturaConfirmada: false,
    areas: [],
  },
  {
    nome: "Universidade Mandume ya Ndemufayo",
    sigla: "UMN",
    natureza: "Pública",
    provincia: "Huíla",
    agriculturaConfirmada: false,
    areas: [],
  },
  {
    nome: "Universidade 11 de Novembro",
    sigla: "UON",
    natureza: "Pública",
    provincia: "Cabinda",
    agriculturaConfirmada: false,
    areas: [],
  },
  {
    nome: "Universidade do Namibe",
    sigla: "UNINBE",
    natureza: "Pública",
    provincia: "Namibe",
    agriculturaConfirmada: true,
    areas: [
      "Ciências das Pescas",
      "Recursos naturais",
      "Ambiente",
      "Ciências naturais",
    ],
    observacao:
      "Possui formação e actividade académica relacionada com pescas, recursos naturais e ambiente.",
  },
  {
    nome: "Universidade Rainha Njinga a Mbande",
    sigla: "URNM",
    natureza: "Pública",
    provincia: "Malanje",
    agriculturaConfirmada: true,
    areas: [
      "Tecnologia agro-alimentar",
      "Gestão agrária",
      "Recursos vegetais",
      "Segurança alimentar",
      "Biotecnologia",
    ],
    observacao:
      "Possui actividade académica relacionada com tecnologia agro-alimentar, recursos vegetais e áreas agrárias.",
  },
  {
    nome: "Universidade Católica de Angola",
    sigla: "UCAN",
    natureza: "Privada",
    provincia: "Angola",
    agriculturaConfirmada: false,
    areas: [],
  },
  {
    nome: "Universidade Jean Piaget de Angola",
    natureza: "Privada",
    provincia: "Angola",
    agriculturaConfirmada: false,
    areas: [],
  },
  {
    nome: "Universidade Lusíada de Angola",
    natureza: "Privada",
    provincia: "Angola",
    agriculturaConfirmada: false,
    areas: [],
  },
  {
    nome: "Universidade Independente de Angola",
    natureza: "Privada",
    provincia: "Angola",
    agriculturaConfirmada: false,
    areas: [],
  },
  {
    nome: "Universidade Gregório Semedo",
    natureza: "Privada",
    provincia: "Angola",
    agriculturaConfirmada: false,
    areas: [],
  },
  {
    nome: "Universidade de Belas",
    natureza: "Privada",
    provincia: "Angola",
    agriculturaConfirmada: false,
    areas: [],
  },
  {
    nome: "Universidade Óscar Ribas",
    natureza: "Privada",
    provincia: "Angola",
    agriculturaConfirmada: false,
    areas: [],
  },
  {
    nome: "Universidade Privada de Angola",
    natureza: "Privada",
    provincia: "Angola",
    agriculturaConfirmada: false,
    areas: [],
  },
  {
    nome: "Universidade Técnica de Angola",
    natureza: "Privada",
    provincia: "Angola",
    agriculturaConfirmada: false,
    areas: [],
  },
  {
    nome: "Universidade Metodista de Angola",
    natureza: "Privada",
    provincia: "Angola",
    agriculturaConfirmada: true,
    areas: [
      "Gestão ambiental",
      "Recursos naturais",
      "Ambiente e sustentabilidade",
    ],
    observacao:
      "A instituição possui formação documentada relacionada com gestão ambiental e sustentabilidade.",
  },
  {
    nome: "Universidade Internacional do Cuanza",
    natureza: "Privada",
    provincia: "Bié",
    agriculturaConfirmada: false,
    areas: [],
  },
];

const institutosInvestigacao: InstitutoInvestigacao[] = [
  {
    nome: "Instituto de Investigação Agronómica",
    sigla: "IIA",
    areas: [
      "Agronomia",
      "Produção vegetal",
      "Solos",
      "Culturas agrícolas",
      "Investigação agrária",
    ],
    destaque:
      "Instituição nacional especializada em investigação agronómica.",
  },
  {
    nome: "Instituto de Investigação Veterinária",
    sigla: "IIV",
    areas: [
      "Saúde animal",
      "Veterinária",
      "Doenças animais",
      "Produção animal",
    ],
    destaque:
      "Investigação científica ligada à sanidade e produção animal.",
  },
  {
    nome: "Centro de Recursos Fitogenéticos",
    sigla: "CNRF",
    areas: [
      "Recursos genéticos",
      "Biodiversidade agrícola",
      "Sementes",
      "Conservação vegetal",
    ],
    destaque:
      "Conservação e investigação dos recursos fitogenéticos.",
  },
  {
    nome: "Instituto Nacional do Café",
    sigla: "INCA",
    areas: [
      "Cafeicultura",
      "Produção de café",
      "Tecnologia agrícola",
      "Cadeia de valor do café",
    ],
    destaque:
      "Instituição especializada no desenvolvimento da fileira do café.",
  },
  {
    nome: "Instituto Nacional de Cereais",
    sigla: "INCER",
    areas: [
      "Cereais",
      "Milho",
      "Trigo",
      "Produção e armazenamento",
    ],
    destaque:
      "Instituição ligada ao desenvolvimento da cadeia nacional dos cereais.",
  },
  {
    nome: "Instituto Nacional de Meteorologia e Geofísica",
    sigla: "INAMET",
    areas: [
      "Meteorologia",
      "Clima",
      "Agrometeorologia",
      "Precipitação",
      "Seca",
    ],
    destaque:
      "Informação meteorológica e climática essencial à produção agropecuária.",
  },
  {
    nome: "Instituto Nacional de Investigação Pesqueira e do Mar",
    sigla: "INIPM",
    areas: [
      "Pescas",
      "Recursos marinhos",
      "Ecossistemas aquáticos",
      "Investigação pesqueira",
    ],
    destaque:
      "Investigação ligada aos recursos pesqueiros e marinhos.",
  },
  {
    nome: "Instituto de Desenvolvimento da Pesca Artesanal e da Aquicultura",
    sigla: "IPA",
    areas: [
      "Aquicultura",
      "Pesca artesanal",
      "Produção aquícola",
      "Desenvolvimento comunitário",
    ],
    destaque:
      "Desenvolvimento da pesca artesanal e da produção aquícola.",
  },
];

const escolasAgrarias: EscolaAgraria[] = [
  {
    nome: "Instituto Médio Agrário de Missombo",
    provincia: "Cuando Cubango",
    natureza: "Ensino médio técnico",
    areas: [
      "Produção vegetal",
      "Produção animal",
      "Aquicultura",
      "Apicultura",
    ],
    observacao:
      "Instituição identificada em documentação pública de projectos de desenvolvimento agrícola.",
  },
  {
    nome: "Instituto Médio Agrário de Malanje",
    provincia: "Malanje",
    natureza: "Ensino médio técnico",
    areas: ["Formação agrária"],
    observacao:
      "Registo institucional incluído na fase de catalogação das escolas técnicas agrárias.",
  },
];

const areasInvestigacao: AreaInvestigacao[] = [
  {
    slug: "producao-vegetal",
    icon: "🌽",
    titulo: "Produção vegetal",
    descricao:
      "Culturas alimentares, sementes, produtividade, fertilização e sistemas agrícolas.",
  },
  {
    slug: "producao-animal",
    icon: "🐄",
    titulo: "Produção animal",
    descricao:
      "Pecuária, nutrição animal, reprodução, genética e sistemas de produção.",
  },
  {
    slug: "solos",
    icon: "🧪",
    titulo: "Solos",
    descricao:
      "Fertilidade, classificação, conservação, erosão e gestão sustentável.",
  },
  {
    slug: "agua-e-irrigacao",
    icon: "💧",
    titulo: "Água e irrigação",
    descricao:
      "Disponibilidade hídrica, irrigação, drenagem e eficiência no uso da água.",
  },
  {
    slug: "clima",
    icon: "🌦️",
    titulo: "Clima",
    descricao:
      "Agrometeorologia, precipitação, seca, temperatura e alterações climáticas.",
  },
  {
    slug: "recursos-geneticos",
    icon: "🧬",
    titulo: "Recursos genéticos",
    descricao:
      "Germoplasma, variedades, biodiversidade e melhoramento genético.",
  },
  {
    slug: "aquicultura",
    icon: "🐟",
    titulo: "Aquicultura",
    descricao:
      "Produção aquícola, recursos pesqueiros e sistemas de criação.",
  },
  {
    slug: "apicultura",
    icon: "🐝",
    titulo: "Apicultura",
    descricao:
      "Abelhas, produção de mel, polinização e cadeias de valor.",
  },
  {
    slug: "cafe",
    icon: "☕",
    titulo: "Café",
    descricao:
      "Produção, variedades, sanidade, processamento e cadeia de valor.",
  },
  {
    slug: "florestas",
    icon: "🌳",
    titulo: "Florestas",
    descricao:
      "Recursos florestais, biodiversidade, conservação e sistemas agroflorestais.",
  },
  {
    slug: "sanidade",
    icon: "🦠",
    titulo: "Sanidade",
    descricao:
      "Fitossanidade, saúde animal, pragas, doenças e controlo biológico.",
  },
  {
    slug: "agricultura-digital",
    icon: "🤖",
    titulo: "Agricultura digital",
    descricao:
      "Inteligência artificial, sensores, dados, drones e agricultura de precisão.",
  },
];

const provincias = [
  "Todas",
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

export default function InvestigacaoPage() {
  const [pesquisa, setPesquisa] = useState("");
  const [aba, setAba] =
    useState<TipoInstituicao>("Universidade");

  const [natureza, setNatureza] =
    useState<"Todas" | Natureza>("Todas");

  const [provincia, setProvincia] = useState("Todas");

  const [somenteAgro, setSomenteAgro] =
    useState(false);

  const universidadesFiltradas = useMemo(() => {
    const termo = pesquisa.trim().toLowerCase();

    return universidades.filter((universidade) => {
      const correspondePesquisa =
        !termo ||
        universidade.nome
          .toLowerCase()
          .includes(termo) ||
        universidade.sigla
          ?.toLowerCase()
          .includes(termo) ||
        universidade.provincia
          .toLowerCase()
          .includes(termo) ||
        universidade.areas.some((area) =>
          area.toLowerCase().includes(termo)
        );

      const correspondeNatureza =
        natureza === "Todas" ||
        universidade.natureza === natureza;

      const correspondeProvincia =
        provincia === "Todas" ||
        universidade.provincia === provincia;

      const correspondeAgro =
        !somenteAgro ||
        universidade.agriculturaConfirmada;

      return (
        correspondePesquisa &&
        correspondeNatureza &&
        correspondeProvincia &&
        correspondeAgro
      );
    });
  }, [
    pesquisa,
    natureza,
    provincia,
    somenteAgro,
  ]);

  const institutosFiltrados = useMemo(() => {
    const termo = pesquisa.trim().toLowerCase();

    return institutosInvestigacao.filter(
      (instituto) =>
        !termo ||
        instituto.nome
          .toLowerCase()
          .includes(termo) ||
        instituto.sigla
          .toLowerCase()
          .includes(termo) ||
        instituto.areas.some((area) =>
          area.toLowerCase().includes(termo)
        )
    );
  }, [pesquisa]);

  const escolasFiltradas = useMemo(() => {
    const termo = pesquisa.trim().toLowerCase();

    return escolasAgrarias.filter((escola) => {
      const correspondePesquisa =
        !termo ||
        escola.nome
          .toLowerCase()
          .includes(termo) ||
        escola.provincia
          .toLowerCase()
          .includes(termo) ||
        escola.areas.some((area) =>
          area.toLowerCase().includes(termo)
        );

      const correspondeProvincia =
        provincia === "Todas" ||
        escola.provincia === provincia;

      return (
        correspondePesquisa &&
        correspondeProvincia
      );
    });
  }, [pesquisa, provincia]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-green-950 text-white">

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-green-700/20 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">

          <div className="max-w-5xl">

            <div className="mb-5 inline-flex rounded-full border border-green-400/30 bg-green-900/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-green-200">
              Centro de Investigação AGROINOVA ANGOLA
            </div>

            <h1 className="max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              A rede do conhecimento
              <span className="block text-green-300">
                agropecuário de Angola.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50/90">
              Universidades, centros de investigação,
              institutos científicos, escolas agrárias,
              investigadores, publicações e conhecimento
              reunidos num único espaço para apoiar a
              transformação da agricultura angolana.
            </p>

            <div className="mt-9 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <strong className="block text-3xl">
                  21
                </strong>

                <span className="text-sm text-green-100">
                  Províncias
                </span>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <strong className="block text-3xl">
                  {universidades.length}
                </strong>

                <span className="text-sm text-green-100">
                  Universidades catalogadas
                </span>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <strong className="block text-3xl">
                  {institutosInvestigacao.length}
                </strong>

                <span className="text-sm text-green-100">
                  Instituições estratégicas
                </span>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <strong className="block text-3xl">
                  {areasInvestigacao.length}
                </strong>

                <span className="text-sm text-green-100">
                  Áreas científicas
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PESQUISA GLOBAL
      ===================================================== */}
      <section className="-mt-8 relative z-10">

        <div className="mx-auto max-w-6xl px-6">

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl">

            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-green-800">
              Pesquisar conhecimento
            </p>

            <div className="flex flex-col gap-3 lg:flex-row">

              <div className="relative flex-1">

                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">
                  🔎
                </span>

                <input
                  value={pesquisa}
                  onChange={(event) =>
                    setPesquisa(event.target.value)
                  }
                  type="search"
                  placeholder="Ex.: milho, solos, café, veterinária, universidade, Malanje..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 outline-none transition focus:border-green-600 focus:bg-white"
                />

              </div>

              <Link
                href="/biblioteca"
                className="flex items-center justify-center rounded-xl bg-green-700 px-7 py-4 font-bold text-white transition hover:bg-green-800"
              >
                Biblioteca científica
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ACESSOS RÁPIDOS
      ===================================================== */}
      <section className="py-16">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: "🏛️",
                titulo: "Instituições",
                texto:
                  "Descobrir universidades e centros científicos.",
              },
              {
                icon: "📚",
                titulo: "Publicações",
                texto:
                  "Artigos, relatórios, teses e dissertações.",
              },
              {
                icon: "🧑🏾‍🔬",
                titulo: "Investigadores",
                texto:
                  "Futura rede nacional de especialistas.",
              },
              {
                icon: "🗺️",
                titulo: "Investigação territorial",
                texto:
                  "Conhecimento organizado por província.",
              },
            ].map((item) => (
              <div
                key={item.titulo}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >

                <div className="text-3xl">
                  {item.icon}
                </div>

                <h3 className="mt-4 text-lg font-black">
                  {item.titulo}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.texto}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          ÁREAS DE INVESTIGAÇÃO
      ===================================================== */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-3xl">

            <span className="text-sm font-black uppercase tracking-[0.16em] text-green-700">
              Observatório científico
            </span>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              O que Angola investiga para transformar o campo?
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Explore as principais áreas de investigação
              agropecuária. Cada área possui uma página própria
              com conteúdo técnico e científico, linhas de
              investigação, aplicações para Angola e referências.
            </p>

          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {areasInvestigacao.map((area) => (

              <Link
                key={area.slug}
                href={`/investigacao/areas/${area.slug}`}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:bg-green-50 hover:shadow-xl"
              >

                <div className="flex items-center justify-between">

                  <div className="text-4xl">
                    {area.icon}
                  </div>

                  <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-green-700 shadow-sm">
                    ARTIGO
                  </span>

                </div>

                <h3 className="mt-5 text-lg font-black group-hover:text-green-800">
                  {area.titulo}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {area.descricao}
                </p>

                <div className="mt-5 flex items-center justify-between">

                  <span className="text-sm font-bold text-green-700">
                    Explorar área
                  </span>

                  <span className="text-lg text-green-700 transition group-hover:translate-x-1">
                    →
                  </span>

                </div>

              </Link>

            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          REDE NACIONAL
      ===================================================== */}
      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

            <div className="max-w-3xl">

              <span className="text-sm font-black uppercase tracking-[0.16em] text-green-700">
                Rede nacional
              </span>

              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Quem produz conhecimento agropecuário?
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Consulte universidades, instituições de
                investigação e escolas técnicas agrárias.
                As áreas científicas são apresentadas apenas
                quando existe informação documental suficiente.
              </p>

            </div>

            <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
              ✓ Dados confirmados são separados de áreas ainda
              em catalogação.
            </div>

          </div>

          {/* ABAS */}

          <div className="mt-10 flex flex-wrap gap-2">

            {(
              [
                "Universidade",
                "Investigação",
                "Ensino médio",
              ] as TipoInstituicao[]
            ).map((item) => (

              <button
                key={item}
                onClick={() => setAba(item)}
                className={`rounded-xl px-5 py-3 text-sm font-bold transition ${
                  aba === item
                    ? "bg-green-800 text-white shadow"
                    : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                }`}
              >

                {item === "Universidade" &&
                  "🎓 Universidades"}

                {item === "Investigação" &&
                  "🔬 Investigação"}

                {item === "Ensino médio" &&
                  "🌱 Ensino médio agrário"}

              </button>

            ))}

          </div>

          {/* FILTROS */}

          <div className="mt-5 grid gap-3 rounded-2xl border border-slate-200 bg-white p-5 md:grid-cols-3">

            <select
              value={provincia}
              onChange={(event) =>
                setProvincia(event.target.value)
              }
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-green-600"
            >

              {provincias.map((item) => (

                <option
                  key={item}
                  value={item}
                >
                  {item === "Todas"
                    ? "Todas as províncias"
                    : item}
                </option>

              ))}

            </select>

            {aba === "Universidade" && (
              <>

                <select
                  value={natureza}
                  onChange={(event) =>
                    setNatureza(
                      event.target.value as
                        | "Todas"
                        | Natureza
                    )
                  }
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-green-600"
                >

                  <option value="Todas">
                    Públicas e privadas
                  </option>

                  <option value="Pública">
                    Públicas
                  </option>

                  <option value="Privada">
                    Privadas
                  </option>

                </select>

                <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">

                  <input
                    checked={somenteAgro}
                    onChange={(event) =>
                      setSomenteAgro(
                        event.target.checked
                      )
                    }
                    type="checkbox"
                    className="h-4 w-4"
                  />

                  <span className="text-sm font-semibold">
                    Só áreas agro confirmadas
                  </span>

                </label>

              </>
            )}

          </div>

          {/* =================================================
              UNIVERSIDADES
          ================================================= */}

          {aba === "Universidade" && (

            <div className="mt-8">

              <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                <p className="text-sm text-slate-500">
                  {universidadesFiltradas.length} universidade(s)
                  encontrada(s)
                </p>

                <span className="text-xs font-semibold text-slate-400">
                  Fonte institucional: FUNDECIT / MESCTI
                </span>

              </div>

              {universidadesFiltradas.length === 0 ? (

                <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">

                  <div className="text-4xl">
                    🔎
                  </div>

                  <h3 className="mt-3 text-xl font-black">
                    Nenhuma instituição encontrada
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Tente alterar a pesquisa ou os filtros.
                  </p>

                </div>

              ) : (

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                  {universidadesFiltradas.map(
                    (universidade) => (

                      <article
                        key={universidade.nome}
                        className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                      >

                        <div
                          className={`h-2 ${
                            universidade.agriculturaConfirmada
                              ? "bg-green-600"
                              : "bg-slate-200"
                          }`}
                        />

                        <div className="p-6">

                          <div className="flex items-start justify-between gap-3">

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl">
                              🎓
                            </div>

                            <span
                              className={`rounded-full px-3 py-1 text-xs font-bold ${
                                universidade.natureza ===
                                "Pública"
                                  ? "bg-blue-50 text-blue-700"
                                  : "bg-violet-50 text-violet-700"
                              }`}
                            >
                              {universidade.natureza}
                            </span>

                          </div>

                          <h3 className="mt-5 text-xl font-black leading-snug">
                            {universidade.nome}
                          </h3>

                          <p className="mt-2 text-sm font-semibold text-slate-500">
                            📍 {universidade.provincia}
                            {universidade.sigla
                              ? ` • ${universidade.sigla}`
                              : ""}
                          </p>

                          {universidade.agriculturaConfirmada ? (
                            <>

                              <p className="mt-5 text-xs font-black uppercase tracking-wider text-green-700">
                                Áreas relacionadas
                              </p>

                              <div className="mt-3 flex flex-wrap gap-2">

                                {universidade.areas.map(
                                  (area) => (

                                    <button
                                      key={area}
                                      onClick={() =>
                                        setPesquisa(area)
                                      }
                                      className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-800 transition hover:bg-green-100"
                                    >
                                      {area}
                                    </button>

                                  )
                                )}

                              </div>

                            </>
                          ) : (

                            <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">

                              <p className="text-sm font-semibold text-slate-600">
                                🔎 Área agrícola em catalogação
                              </p>

                              <p className="mt-1 text-xs leading-5 text-slate-500">
                                A AGROINOVA ainda não associou
                                campos agrícolas sem fonte
                                documental verificada.
                              </p>

                            </div>

                          )}

                          {universidade.observacao && (

                            <p className="mt-4 text-xs leading-5 text-slate-500">
                              {universidade.observacao}
                            </p>

                          )}

                        </div>

                      </article>

                    )
                  )}

                </div>

              )}

            </div>

          )}

          {/* =================================================
              INSTITUTOS
          ================================================= */}

          {aba === "Investigação" && (

            <div className="mt-8">

              <div className="mb-5">
                <p className="text-sm text-slate-500">
                  {institutosFiltrados.length} instituição(ões)
                  encontrada(s)
                </p>
              </div>

              {institutosFiltrados.length === 0 ? (

                <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
                  <div className="text-4xl">
                    🔎
                  </div>

                  <h3 className="mt-3 text-xl font-black">
                    Nenhuma instituição encontrada
                  </h3>
                </div>

              ) : (

                <div className="grid gap-5 md:grid-cols-2">

                  {institutosFiltrados.map(
                    (instituto) => (

                      <article
                        key={instituto.sigla}
                        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-green-300 hover:shadow-lg"
                      >

                        <div className="flex gap-4">

                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-900 text-2xl text-white">
                            🔬
                          </div>

                          <div>

                            <span className="text-xs font-black uppercase tracking-wider text-green-700">
                              {instituto.sigla}
                            </span>

                            <h3 className="mt-1 text-xl font-black">
                              {instituto.nome}
                            </h3>

                          </div>

                        </div>

                        <p className="mt-5 text-sm leading-6 text-slate-600">
                          {instituto.destaque}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">

                          {instituto.areas.map(
                            (area) => (

                              <button
                                key={area}
                                onClick={() =>
                                  setPesquisa(area)
                                }
                                className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-800 hover:bg-green-100"
                              >
                                {area}
                              </button>

                            )
                          )}

                        </div>

                      </article>

                    )
                  )}

                </div>

              )}

            </div>

          )}

          {/* =================================================
              ENSINO MÉDIO
          ================================================= */}

          {aba === "Ensino médio" && (

            <>

              <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-6">

                <p className="text-xs font-black uppercase tracking-[0.15em] text-green-700">
                  Programa AGROINOVA
                </p>

                <h3 className="mt-2 text-2xl font-black text-green-950">
                  Da escola agrícola ao laboratório
                </h3>

                <p className="mt-3 max-w-3xl leading-7 text-green-900/80">
                  O objectivo é criar uma ponte entre estudantes
                  do ensino médio agrário, universidades,
                  investigadores, campos experimentais e
                  oportunidades de formação.
                </p>

              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2">

                {escolasFiltradas.map((escola) => (

                  <article
                    key={escola.nome}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >

                    <div className="flex items-start justify-between gap-4">

                      <div className="text-4xl">
                        🌱
                      </div>

                      <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-800">
                        Ensino técnico
                      </span>

                    </div>

                    <h3 className="mt-5 text-xl font-black">
                      {escola.nome}
                    </h3>

                    <p className="mt-2 text-sm font-semibold text-slate-500">
                      📍 {escola.provincia}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">

                      {escola.areas.map((area) => (

                        <button
                          key={area}
                          onClick={() =>
                            setPesquisa(area)
                          }
                          className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-800 hover:bg-green-100"
                        >
                          {area}
                        </button>

                      ))}

                    </div>

                    <p className="mt-5 text-xs leading-5 text-slate-500">
                      {escola.observacao}
                    </p>

                  </article>

                ))}

              </div>

              <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">

                <div className="text-4xl">
                  🏫
                </div>

                <h3 className="mt-3 text-xl font-black">
                  Catálogo nacional em expansão
                </h3>

                <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                  Os restantes institutos e escolas médias
                  agrárias serão incorporados à medida que
                  forem confirmados através de fontes oficiais
                  do sector da Educação e Agricultura.
                </p>

              </div>

            </>

          )}

        </div>
      </section>

      {/* =====================================================
          MAPA / VISÃO TERRITORIAL
      ===================================================== */}
      <section className="bg-green-950 py-20 text-white">

        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          <div>

            <span className="text-sm font-black uppercase tracking-[0.16em] text-green-300">
              Inteligência territorial
            </span>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Mapa Nacional da Investigação Agropecuária
            </h2>

            <p className="mt-5 leading-7 text-green-100">
              A próxima camada desta plataforma permitirá
              clicar numa província e descobrir universidades,
              escolas agrárias, instituições de investigação,
              projectos, especialistas, culturas estudadas e
              publicações produzidas naquele território.
            </p>

            <Link
              href="/mapa"
              className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 font-bold text-green-900 transition hover:bg-green-50"
            >
              Abrir mapa de Angola →
            </Link>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-7 backdrop-blur">

            <div className="grid gap-4 sm:grid-cols-2">

              {[
                ["🏛️", "Instituições", "Quem investiga?"],
                ["📍", "Território", "Onde investiga?"],
                ["🌱", "Temas", "O que investiga?"],
                ["📚", "Resultados", "O que foi publicado?"],
              ].map(
                ([icone, titulo, texto]) => (

                  <div
                    key={titulo}
                    className="rounded-2xl border border-white/10 bg-green-950/50 p-5"
                  >

                    <div className="text-3xl">
                      {icone}
                    </div>

                    <strong className="mt-3 block text-lg">
                      {titulo}
                    </strong>

                    <span className="mt-1 block text-sm text-green-200">
                      {texto}
                    </span>

                  </div>

                )
              )}

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          FLUXO DE CONHECIMENTO
      ===================================================== */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="text-sm font-black uppercase tracking-[0.16em] text-green-700">
              Ecossistema AGROINOVA
            </span>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Da investigação até ao produtor
            </h2>

          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-5">

            {[
              ["🔬", "Investigação", "Produção científica"],
              ["📚", "Conhecimento", "Organização e validação"],
              ["📊", "Dados", "Evidências e indicadores"],
              ["💡", "Tecnologia", "Soluções aplicáveis"],
              ["🚜", "Campo", "Uso pelo produtor"],
            ].map(
              ([icone, titulo, texto], index) => (

                <div
                  key={titulo}
                  className="relative rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center transition hover:-translate-y-1 hover:shadow-md"
                >

                  <div className="text-4xl">
                    {icone}
                  </div>

                  <div className="mt-4 text-xs font-black text-green-700">
                    0{index + 1}
                  </div>

                  <h3 className="mt-1 font-black">
                    {titulo}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    {texto}
                  </p>

                </div>

              )
            )}

          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECTOS E PRODUÇÃO CIENTÍFICA
      ===================================================== */}
      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 lg:grid-cols-2">

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

              <span className="text-sm font-black uppercase tracking-wider text-green-700">
                Projectos científicos
              </span>

              <h2 className="mt-3 text-3xl font-black">
                Projectos de investigação
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Esta área será destinada ao registo de projectos
                reais desenvolvidos por universidades, centros
                científicos, investigadores e parceiros nacionais.
              </p>

              <div className="mt-7 rounded-2xl bg-slate-50 p-5">

                <strong className="block">
                  Nenhum projecto fictício será apresentado.
                </strong>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Cada projecto deverá possuir instituição,
                  equipa, período, área científica, território
                  e fonte.
                </p>

              </div>

            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

              <span className="text-sm font-black uppercase tracking-wider text-green-700">
                Produção científica
              </span>

              <h2 className="mt-3 text-3xl font-black">
                Teses, artigos e relatórios
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                A investigação será ligada à Biblioteca AGROINOVA
                para permitir encontrar documentos por instituição,
                província, autor, cultura, área científica e ano.
              </p>

              <Link
                href="/biblioteca"
                className="mt-7 inline-flex rounded-xl bg-green-700 px-6 py-3 font-bold text-white transition hover:bg-green-800"
              >
                Explorar biblioteca →
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CTA FINAL
      ===================================================== */}
      <section className="bg-green-700 py-20 text-white">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <span className="text-sm font-black uppercase tracking-[0.18em] text-green-200">
            AGROINOVA ANGOLA
          </span>

          <h2 className="mt-4 text-3xl font-black md:text-5xl">
            Ciência angolana ao serviço do campo.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-green-50">
            Um ponto de encontro entre investigação,
            universidades, escolas agrícolas, instituições
            públicas, técnicos, estudantes e produtores.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <Link
              href="/biblioteca"
              className="rounded-xl bg-white px-6 py-3 font-bold text-green-800 hover:bg-green-50"
            >
              Biblioteca
            </Link>

            <Link
              href="/dados"
              className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-bold text-white hover:bg-white/20"
            >
              Dados agropecuários
            </Link>

            <Link
              href="/mapa"
              className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-bold text-white hover:bg-white/20"
            >
              Mapa de Angola
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}