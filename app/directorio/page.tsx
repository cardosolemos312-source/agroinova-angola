 "use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Categoria =
  | "Todas"
  | "Instituições públicas"
  | "Investigação e ensino"
  | "Produtores e cooperativas"
  | "Empresas e fornecedores"
  | "Especialistas e assistência técnica";

type Recurso = {
  nome: string;
  categoria: Exclude<Categoria, "Todas">;
  descricao: string;
  area: string;
  provincia: string;
  url: string;
  imagem: string;
  imagemAlt: string;
  fonte: string;
};

const provincias = [
  "Todas as províncias",
  "Bengo",
  "Benguela",
  "Bié",
  "Cabinda",
  "Cuando",
  "Cuanza Norte",
  "Cuanza Sul",
  "Cubango",
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

const categorias: {
  nome: Exclude<Categoria, "Todas">;
  descricao: string;
  imagem: string;
  imagemAlt: string;
}[] = [
  {
    nome: "Instituições públicas",
    descricao: "Ministérios, institutos e serviços públicos do sector.",
    imagem:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
    imagemAlt: "Edifício de escritórios, imagem ilustrativa",
  },
  {
    nome: "Investigação e ensino",
    descricao: "Universidades, centros de investigação e formação.",
    imagem:
      "https://images.unsplash.com/photo-1581093458791-9d42e3c2b2c7?auto=format&fit=crop&w=1000&q=85",
    imagemAlt: "Investigação técnica em laboratório, imagem ilustrativa",
  },
  {
    nome: "Produtores e cooperativas",
    descricao: "Agricultores, criadores, pescadores e organizações de produtores.",
    imagem:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85",
    imagemAlt: "Campo agrícola, imagem ilustrativa",
  },
  {
    nome: "Empresas e fornecedores",
    descricao: "Sementes, equipamentos, irrigação, insumos e transformação.",
    imagem:
      "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1000&q=85",
    imagemAlt: "Actividade agrícola, imagem ilustrativa",
  },
  {
    nome: "Especialistas e assistência técnica",
    descricao: "Agrónomos, veterinários, técnicos e consultores.",
    imagem:
      "https://images.unsplash.com/photo-1592982537447-6f2a6a0a2a4a?auto=format&fit=crop&w=1000&q=85",
    imagemAlt: "Trabalho técnico numa exploração agrícola, imagem ilustrativa",
  },
];

const recursosInstitucionais: Recurso[] = [
  {
    nome: "Ministério da Agricultura e Florestas",
    categoria: "Instituições públicas",
    descricao:
      "Portal institucional para consultar informações, notícias e serviços relacionados com a política agrícola e florestal.",
    area: "Agricultura e florestas",
    provincia: "Luanda",
    url: "https://minagrif.gov.ao/",
    imagem:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85",
    imagemAlt: "Campo agrícola, imagem ilustrativa e não uma fotografia da instituição",
    fonte: "Portal institucional do MINAGRIF",
  },
  {
    nome: "Instituto Nacional de Estatística",
    categoria: "Instituições públicas",
    descricao:
      "Fonte institucional para procurar publicações, indicadores e operações estatísticas oficiais de Angola.",
    area: "Estatística e dados",
    provincia: "Luanda",
    url: "https://www.ine.gov.ao/",
    imagem:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=85",
    imagemAlt: "Visualização de dados, imagem ilustrativa",
    fonte: "Portal institucional do INE",
  },
  {
    nome: "Portal Oficial do Governo de Angola",
    categoria: "Instituições públicas",
    descricao:
      "Directório de referência para localizar informação pública, serviços governamentais e portais oficiais.",
    area: "Informação pública",
    provincia: "Todas as províncias",
    url: "https://governo.gov.ao/",
    imagem:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",
    imagemAlt: "Edifícios institucionais, imagem ilustrativa",
    fonte: "Portal Oficial do Governo de Angola",
  },
];

const areas = [
  "Agricultura",
  "Pecuária",
  "Pesca e aquicultura",
  "Florestas e madeira",
  "Sementes e viveiros",
  "Irrigação e água",
  "Máquinas e equipamentos",
  "Solos e fertilizantes",
  "Transformação agroalimentar",
  "Investigação e formação",
  "Comercialização e logística",
  "Assistência veterinária",
];

function Icone({
  nome,
  tamanho = 22,
}: {
  nome: string;
  tamanho?: number;
}) {
  const props = {
    width: tamanho,
    height: tamanho,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  if (nome === "search") {
    return (
      <svg {...props}>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </svg>
    );
  }
  if (nome === "map") {
    return (
      <svg {...props}>
        <path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3z" />
        <path d="M9 3v15M15 6v15" />
      </svg>
    );
  }
  if (nome === "users") {
    return (
      <svg {...props}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="4" />
        <path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }
  if (nome === "external") {
    return (
      <svg {...props}>
        <path d="M14 3h7v7M10 14 21 3" />
        <path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6" />
      </svg>
    );
  }
  if (nome === "filter") {
    return (
      <svg {...props}>
        <path d="M4 7h16M7 12h10M10 17h4" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <path d="M12 3 2.5 20h19L12 3Z" />
      <path d="M12 9v4M12 17h.01" />
    </svg>
  );
}

export default function DirectorioPage() {
  const [pesquisa, setPesquisa] = useState("");
  const [categoria, setCategoria] = useState<Categoria>("Todas");
  const [provincia, setProvincia] = useState("Todas as províncias");
  const [area, setArea] = useState("Todas as áreas");
  const [mostrarFiltros, setMostrarFiltros] = useState(false);

  const resultados = useMemo(() => {
    const termo = pesquisa.trim().toLocaleLowerCase("pt-PT");
    return recursosInstitucionais.filter((recurso) => {
      const correspondePesquisa =
        !termo ||
        [
          recurso.nome,
          recurso.descricao,
          recurso.area,
          recurso.categoria,
          recurso.provincia,
        ]
          .join(" ")
          .toLocaleLowerCase("pt-PT")
          .includes(termo);

      const correspondeCategoria =
        categoria === "Todas" || recurso.categoria === categoria;

      const correspondeProvincia =
        provincia === "Todas as províncias" ||
        recurso.provincia === provincia ||
        recurso.provincia === "Todas as províncias";

      const correspondeArea =
        area === "Todas as áreas" ||
        recurso.area.toLocaleLowerCase("pt-PT").includes(area.toLocaleLowerCase("pt-PT")) ||
        recurso.descricao.toLocaleLowerCase("pt-PT").includes(area.toLocaleLowerCase("pt-PT"));

      return (
        correspondePesquisa &&
        correspondeCategoria &&
        correspondeProvincia &&
        correspondeArea
      );
    });
  }, [pesquisa, categoria, provincia, area]);

  function limparFiltros() {
    setPesquisa("");
    setCategoria("Todas");
    setProvincia("Todas as províncias");
    setArea("Todas as áreas");
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-emerald-950 text-white">
        <div className="absolute inset-0 -z-20">
          <Image
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=90"
            alt="Paisagem agrícola, fotografia ilustrativa"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
            unoptimized
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-950 via-emerald-950/90 to-emerald-900/55" />

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-emerald-50">
            <Icone nome="users" tamanho={18} />
            Rede agropecuária nacional
          </div>
          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Directório Agropecuário Nacional
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-emerald-50 sm:text-xl">
            Encontre instituições, produtores, cooperativas, empresas,
            especialistas e serviços que contribuem para o desenvolvimento da
            agricultura e da economia rural de Angola.
          </p>

          <form
            className="mt-9 flex max-w-4xl flex-col gap-3 rounded-2xl bg-white p-3 shadow-2xl sm:flex-row"
            onSubmit={(evento) => {
              evento.preventDefault();
              document
                .getElementById("resultados-directorio")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
              <span className="text-emerald-800">
                <Icone nome="search" tamanho={23} />
              </span>
              <input
                type="search"
                value={pesquisa}
                onChange={(evento) => setPesquisa(evento.target.value)}
                placeholder="Pesquisar instituição, serviço ou actividade..."
                aria-label="Pesquisar no directório"
                className="min-w-0 flex-1 border-0 bg-transparent py-3 text-base text-slate-900 outline-none placeholder:text-slate-500 focus:ring-0"
              />
            </div>
            <button
              type="submit"
              className="rounded-xl bg-emerald-700 px-7 py-3 font-bold text-white transition hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-300"
            >
              Pesquisar
            </button>
          </form>

          <p className="mt-4 max-w-3xl text-sm text-emerald-100">
            Directório em desenvolvimento. Os registos institucionais abaixo
            remetem para os respectivos portais oficiais; a plataforma não
            apresenta perfis fictícios de empresas ou produtores.
          </p>
        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
              Explorar por categoria
            </p>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
              O que procura no sector?
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-600">
            Escolha uma categoria para filtrar o directório. As fotografias
            desta secção são ilustrativas e não identificam uma entidade
            específica em Angola.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categorias.map((item) => {
            const selecionada = categoria === item.nome;
            return (
              <button
                key={item.nome}
                type="button"
                onClick={() => {
                  setCategoria(selecionada ? "Todas" : item.nome);
                  document
                    .getElementById("resultados-directorio")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                aria-pressed={selecionada}
                className={`group overflow-hidden rounded-2xl border bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                  selecionada
                    ? "border-emerald-700 ring-2 ring-emerald-200"
                    : "border-slate-200"
                }`}
              >
                <div className="relative h-36 overflow-hidden bg-emerald-100">
                  <Image
                    src={item.imagem}
                    alt={item.imagemAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 20vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pb-2 pt-8">
                    <span className="text-xs font-medium text-white">
                      Imagem ilustrativa
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold leading-snug text-slate-900">
                    {item.nome}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.descricao}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-emerald-800">
                    {selecionada ? "Filtro seleccionado" : "Explorar categoria"}
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* FILTROS E RESULTADOS */}
      <section
        id="resultados-directorio"
        className="scroll-mt-6 border-y border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
                Pesquisa nacional
              </p>
              <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                Registos e referências
              </h2>
              <p className="mt-2 max-w-2xl text-slate-600">
                Filtre os registos disponíveis por província, área de actividade
                e categoria.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setMostrarFiltros(!mostrarFiltros)}
              aria-expanded={mostrarFiltros}
              className="inline-flex items-center justify-center gap-2 self-start rounded-xl border border-slate-300 px-4 py-3 font-semibold text-slate-800 transition hover:bg-slate-50 md:self-auto"
            >
              <Icone nome="filter" tamanho={19} />
              {mostrarFiltros ? "Ocultar filtros" : "Mostrar filtros"}
            </button>
          </div>

          {mostrarFiltros && (
            <div className="mt-6 grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:grid-cols-2 lg:grid-cols-4">
              <label className="block text-sm font-semibold text-slate-700">
                Categoria
                <select
                  value={categoria}
                  onChange={(evento) =>
                    setCategoria(evento.target.value as Categoria)
                  }
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-3 font-normal outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
                >
                  <option>Todas</option>
                  {categorias.map((item) => (
                    <option key={item.nome}>{item.nome}</option>
                  ))}
                </select>
              </label>

              <label className="block text-sm font-semibold text-slate-700">
                Província
                <select
                  value={provincia}
                  onChange={(evento) => setProvincia(evento.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-3 font-normal outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
                >
                  {provincias.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>

              <label className="block text-sm font-semibold text-slate-700">
                Área de actividade
                <select
                  value={area}
                  onChange={(evento) => setArea(evento.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-3 font-normal outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
                >
                  <option>Todas as áreas</option>
                  {areas.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>

              <div className="flex items-end">
                <button
                  type="button"
                  onClick={limparFiltros}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  Limpar filtros
                </button>
              </div>
            </div>
          )}

          <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <p className="text-sm text-slate-600">
              <span className="font-bold text-slate-900">
                {resultados.length}
              </span>{" "}
              {resultados.length === 1
                ? "registo de referência"
                : "registos de referência"}{" "}
              apresentados
            </p>
            <button
              type="button"
              onClick={limparFiltros}
              className="text-sm font-semibold text-emerald-800 underline decoration-emerald-300 underline-offset-4 hover:text-emerald-950"
            >
              Repor pesquisa
            </button>
          </div>

          {resultados.length > 0 ? (
            <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {resultados.map((recurso) => (
                <article
                  key={recurso.nome}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
                >
                  <div className="relative h-48 bg-slate-100">
                    <Image
                      src={recurso.imagem}
                      alt={recurso.imagemAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover"
                      unoptimized
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-emerald-900 shadow">
                      Referência institucional
                    </span>
                    <span className="absolute bottom-2 right-2 rounded bg-black/60 px-2 py-1 text-[11px] text-white">
                      Fotografia ilustrativa
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">
                      {recurso.categoria}
                    </p>
                    <h3 className="mt-2 text-xl font-extrabold leading-snug">
                      {recurso.nome}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {recurso.descricao}
                    </p>
                    <div className="mt-4 space-y-2 text-sm text-slate-600">
                      <p>
                        <span className="font-semibold text-slate-800">
                          Área:
                        </span>{" "}
                        {recurso.area}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-800">
                          Localização de referência:
                        </span>{" "}
                        {recurso.provincia}
                      </p>
                    </div>
                    <div className="mt-5 border-t border-slate-100 pt-4">
                      <p className="mb-3 text-xs text-slate-500">
                        Fonte: {recurso.fonte}
                      </p>
                      <a
                        href={recurso.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-800 px-4 py-3 text-sm font-bold text-white transition hover:bg-emerald-900 focus:outline-none focus:ring-4 focus:ring-emerald-200"
                      >
                        Visitar portal oficial
                        <Icone nome="external" tamanho={17} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
                <Icone nome="search" tamanho={27} />
              </div>
              <h3 className="mt-4 text-xl font-bold">
                Não foram encontrados registos
              </h3>
              <p className="mx-auto mt-2 max-w-xl leading-7 text-slate-600">
                Experimente outra palavra ou retire alguns filtros. O directório
                será ampliado à medida que forem confirmados novos registos de
                instituições, empresas, cooperativas, produtores e especialistas.
              </p>
              <button
                type="button"
                onClick={limparFiltros}
                className="mt-5 rounded-xl bg-emerald-800 px-5 py-3 font-bold text-white transition hover:bg-emerald-900"
              >
                Limpar pesquisa
              </button>
            </div>
          )}
        </div>
      </section>

      {/* REGISTO DE ENTIDADES */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-3xl bg-emerald-900 text-white shadow-xl">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-200">
                Construir em conjunto
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                A sua entidade faz parte do sector agropecuário?
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-emerald-50">
                O Directório pretende reunir informação útil sobre instituições,
                explorações, cooperativas, fornecedores, investigadores e
                profissionais de todo o país. Os registos deverão ser revistos
                antes de serem publicados.
              </p>
              <div className="mt-7 inline-flex items-center rounded-xl border border-white/30 bg-white/10 px-5 py-3.5 font-semibold text-white">
                Formulário de inscrição a implementar
              </div>
              <p className="mt-3 text-xs leading-5 text-emerald-200">
                A inscrição online deverá ser activada depois de configurados
                o formulário, o contacto oficial e o processo de validação dos
                registos.
              </p>
            </div>
            <div className="relative hidden min-h-80 lg:block">
              <Image
                src="https://images.unsplash.com/photo-1499529112087-3cb3b73cede6?auto=format&fit=crop&w=1200&q=85"
                alt="Plantas cultivadas num campo, imagem ilustrativa"
                fill
                sizes="40vw"
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-bold">Fontes institucionais de referência</h2>
              <p className="mt-1 text-sm text-slate-600">
                Confirme a informação directamente nos portais oficiais.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://governo.gov.ao/angola/provincias"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Províncias de Angola <Icone nome="external" tamanho={15} />
              </a>
              <a
                href="https://minagrif.gov.ao/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                MINAGRIF <Icone nome="external" tamanho={15} />
              </a>
              <a
                href="https://www.ine.gov.ao/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                INE <Icone nome="external" tamanho={15} />
              </a>
            </div>
          </div>
          <p className="mt-5 text-xs leading-5 text-slate-500">
            Nota: as fotografias são ilustrativas, obtidas por URL externo, e
            não devem ser interpretadas como imagens documentais de Angola ou
            das entidades referenciadas. Os registos do directório são
            intencionalmente limitados a referências institucionais cujos
            portais podem ser consultados directamente.
          </p>
        </div>
      </section>
    </main>
  );
}
