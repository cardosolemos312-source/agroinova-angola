
"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { areasInvestigacao } from "@/data/investigacao/areas";

type AreaUI = {
  slug: string;
  titulo: string;
  resumo?: string;
  descricao?: string;
  introducao?: string;
  importancia?: string[];
  angola?: string[];
  linhasPesquisa?: string[];
  aplicacoes?: string[];
  perguntas?: string[];
  referencias?: {
    titulo: string;
    instituicao: string;
    ano?: string | number;
    url: string;
  }[];
};

type Especialista = {
  id: string;
  nome: string;
  cargo: string;
  area: string;
  descricao: string;
  imagem?: string;
  livroTitulo?: string;
  livroDescricao?: string;
  livroCapaUrl?: string;
  livroPdfUrl?: string;
};

type TecnicoAPI = {
  id?: string | number;
  nome?: string | null;
  titulo_profissional?: string | null;
  cargo?: string | null;
  formacao_academica?: string | null;
  especialidade?: string | null;
  area?: string | null;
  biografia?: string | null;
  descricao?: string | null;
  fotografia_url?: string | null;
  imagem_url?: string | null;
  foto_url?: string | null;
  estado?: string | null;
  livro_titulo?: string | null;
  livro_descricao?: string | null;
  livro_capa_url?: string | null;
  livro_pdf_url?: string | null;
};

type Modal =
  | { tipo: "especialista"; especialista: Especialista }
  | { tipo: "area"; area: AreaUI }
  | null;

const areas = areasInvestigacao as unknown as AreaUI[];

const imagemHero =
  "https://images.openai.com/static-rsc-4/FqYm9RX_Tu7uKZURnb3X0UaltRosHJUThMBWsBLYGWJC76IKFieay4Rjjvhy7pIn5pjW7A-Rd28zo4ukbfS5BPvkRNjn-rgGZg7mWXCOjaWOWWKz_btCnCWn_J-BauIS4Z5nPO7-6AAJsMamUE6TvIwpfqg33LVBJPZOxZWiN2NsAeFO58-qTI-V1JWEKSl6?purpose=fullsize";

const POR_PAGINA = 12;

function iniciais(nome: string) {
  return nome
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((parte) => parte.charAt(0).toUpperCase())
    .join("");
}

function lista(valor?: string[]) {
  return Array.isArray(valor) ? valor.filter(Boolean) : [];
}

export default function InvestigacaoPage() {
  const [especialistas, setEspecialistas] = useState<Especialista[]>([]);
  const [aCarregar, setACarregar] = useState(true);
  const [erroAPI, setErroAPI] = useState(false);

  const [pesquisaEspecialista, setPesquisaEspecialista] = useState("");
  const [pesquisaArea, setPesquisaArea] = useState("");
  const [pagina, setPagina] = useState(1);

  const [modal, setModal] = useState<Modal>(null);

  useEffect(() => {
    let activo = true;

    async function carregarEspecialistas() {
      try {
        setACarregar(true);
        setErroAPI(false);

        const resposta = await fetch("/api/tecnicos", {
          method: "GET",
          cache: "no-store",
        });

        if (!resposta.ok) {
          throw new Error(`Erro ${resposta.status}`);
        }

        const resultado: unknown = await resposta.json();

        let registos: TecnicoAPI[] = [];

        if (Array.isArray(resultado)) {
          registos = resultado as TecnicoAPI[];
        } else if (resultado && typeof resultado === "object") {
          const dados = resultado as {
            tecnicos?: TecnicoAPI[];
            data?: TecnicoAPI[];
          };

          registos = Array.isArray(dados.tecnicos)
            ? dados.tecnicos
            : Array.isArray(dados.data)
              ? dados.data
              : [];
        }

        if (!activo) return;

        const convertidos = registos
          .filter(
            (tecnico) =>
              tecnico.nome &&
              (!tecnico.estado || tecnico.estado === "publicado"),
          )
          .map((tecnico, index): Especialista => ({
            id: String(tecnico.id ?? `${tecnico.nome}-${index}`),
            nome: tecnico.nome || "Especialista",
            cargo:
              tecnico.titulo_profissional ||
              tecnico.cargo ||
              tecnico.formacao_academica ||
              "Especialista",
            area:
              tecnico.especialidade ||
              tecnico.area ||
              "Investigação agropecuária",
            descricao:
              tecnico.biografia ||
              tecnico.descricao ||
              "Perfil profissional na área agropecuária.",
            imagem:
              tecnico.fotografia_url ||
              tecnico.imagem_url ||
              tecnico.foto_url ||
              undefined,
            livroTitulo: tecnico.livro_titulo || undefined,
            livroDescricao: tecnico.livro_descricao || undefined,
            livroCapaUrl: tecnico.livro_capa_url || undefined,
            livroPdfUrl: tecnico.livro_pdf_url || undefined,
          }));

        setEspecialistas(convertidos);
      } catch (erro) {
        console.error("Erro ao carregar especialistas:", erro);

        if (activo) {
          setEspecialistas([]);
          setErroAPI(true);
        }
      } finally {
        if (activo) setACarregar(false);
      }
    }

    void carregarEspecialistas();

    return () => {
      activo = false;
    };
  }, []);

  const especialistasFiltrados = useMemo(() => {
    const termo = pesquisaEspecialista
      .trim()
      .toLocaleLowerCase("pt");

    if (!termo) return especialistas;

    return especialistas.filter((pessoa) =>
      [
        pessoa.nome,
        pessoa.cargo,
        pessoa.area,
        pessoa.descricao,
      ]
        .join(" ")
        .toLocaleLowerCase("pt")
        .includes(termo),
    );
  }, [especialistas, pesquisaEspecialista]);

  const totalPaginas = Math.max(
    1,
    Math.ceil(especialistasFiltrados.length / POR_PAGINA),
  );

  const especialistasPagina = useMemo(() => {
    const inicio = (pagina - 1) * POR_PAGINA;

    return especialistasFiltrados.slice(
      inicio,
      inicio + POR_PAGINA,
    );
  }, [especialistasFiltrados, pagina]);

  const areasFiltradas = useMemo(() => {
    const termo = pesquisaArea.trim().toLocaleLowerCase("pt");

    if (!termo) return areas;

    return areas.filter((area) =>
      [
        area.slug,
        area.titulo,
        area.resumo,
        area.descricao,
        area.introducao,
        ...lista(area.importancia),
        ...lista(area.angola),
        ...lista(area.linhasPesquisa),
        ...lista(area.aplicacoes),
      ]
        .filter(Boolean)
        .join(" ")
        .toLocaleLowerCase("pt")
        .includes(termo),
    );
  }, [pesquisaArea]);

  useEffect(() => {
    setPagina(1);
  }, [pesquisaEspecialista]);

  useEffect(() => {
    if (pagina > totalPaginas) setPagina(totalPaginas);
  }, [pagina, totalPaginas]);

  function mudarPagina(novaPagina: number) {
    setPagina(Math.max(1, Math.min(novaPagina, totalPaginas)));

    document
      .getElementById("especialistas")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main className="min-h-screen bg-[#f6f8f6] text-[#173326]">

      {/* HERO INSTITUCIONAL */}
      <section className="relative flex min-h-[540px] items-center overflow-hidden bg-green-950 text-white md:min-h-[620px]">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${imagemHero}")` }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#092c1d]/95 via-[#092c1d]/80 to-[#092c1d]/25" />

        <div className="relative mx-auto w-full max-w-[1440px] px-5 py-20 lg:px-12">

          <div className="max-w-3xl">

            <span className="inline-block rounded-full border border-green-300/40 bg-green-900/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-green-200">
              Ciência e conhecimento para Angola
            </span>

            <h1 className="mt-7 text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Investigação,
              <br />
              conhecimento e inovação
              <br />
              agropecuária.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-green-50/90 md:text-lg">
              Uma plataforma de conhecimento científico dedicada
              à investigação, à inovação tecnológica e ao
              desenvolvimento sustentável da agricultura e
              pecuária em Angola.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="#especialistas"
                className="rounded-xl bg-emerald-500 px-7 py-4 font-black text-green-950 transition hover:bg-emerald-400"
              >
                Rede de especialistas →
              </a>

              <a
                href="#areas"
                className="rounded-xl border border-white/60 px-7 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Áreas científicas
              </a>

            </div>

            <div className="mt-12 flex flex-wrap gap-10 border-t border-white/20 pt-7">

              <div>
                <p className="text-3xl font-black">
                  {areas.length}
                </p>
                <p className="mt-1 text-sm text-green-100">
                  Áreas científicas
                </p>
              </div>

              <div>
                <p className="text-3xl font-black">
                  {especialistas.length.toLocaleString("pt-PT")}
                </p>
                <p className="mt-1 text-sm text-green-100">
                  Especialistas publicados
                </p>
              </div>

              <div>
                <p className="text-3xl font-black">21</p>
                <p className="mt-1 text-sm text-green-100">
                  Províncias de Angola
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* REDE DE ESPECIALISTAS */}
      <section
        id="especialistas"
        className="scroll-mt-20 py-20"
      >
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">

          <div className="flex flex-wrap items-end justify-between gap-6">

            <div className="max-w-3xl">

              <p className="text-xs font-black uppercase tracking-[0.2em] text-green-700">
                Comunidade científica nacional
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                Rede de especialistas
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Investigadores, agrónomos, veterinários,
                técnicos e profissionais ligados ao
                desenvolvimento agropecuário de Angola.
              </p>

            </div>

            <div className="rounded-2xl border border-green-100 bg-white px-6 py-4 shadow-sm">

              <p className="text-3xl font-black text-green-900">
                {especialistas.length.toLocaleString("pt-PT")}
              </p>

              <p className="text-sm text-slate-500">
                Perfis publicados
              </p>

            </div>

          </div>

          {/* PESQUISA DE ESPECIALISTAS */}
          <div className="mt-9 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-7">

            <label
              htmlFor="pesquisa-especialista"
              className="mb-3 block text-sm font-bold text-green-950"
            >
              Encontrar um especialista
            </label>

            <div className="flex flex-col gap-3 md:flex-row">

              <div className="relative flex-1">

                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m16 16 4 4" />
                  </svg>
                </span>

                <input
                  id="pesquisa-especialista"
                  type="search"
                  value={pesquisaEspecialista}
                  onChange={(event) =>
                    setPesquisaEspecialista(event.target.value)
                  }
                  placeholder="Pesquisar por nome, formação ou especialidade..."
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 py-4 pl-12 pr-4 text-sm outline-none transition focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-green-700/10"
                />

              </div>

              {pesquisaEspecialista && (
                <button
                  type="button"
                  onClick={() => setPesquisaEspecialista("")}
                  className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50"
                >
                  Limpar pesquisa
                </button>
              )}

            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500">

              <p>
                {especialistasFiltrados.length.toLocaleString("pt-PT")} profissionais encontrados
              </p>

              <p>
                {POR_PAGINA} profissionais por página
              </p>

            </div>

          </div>

          {/* LISTAGEM */}
          <div className="mt-8">

            {aCarregar ? (

              <div className="rounded-2xl border border-slate-200 bg-white p-16 text-center">
                <div className="mx-auto h-9 w-9 animate-spin rounded-full border-4 border-green-100 border-t-green-800" />
                <p className="mt-5 font-bold text-green-950">
                  A carregar a rede científica...
                </p>
              </div>

            ) : erroAPI ? (

              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-8 text-center">
                <h3 className="font-black text-amber-950">
                  Não foi possível carregar os especialistas
                </h3>
                <p className="mt-2 text-sm text-amber-900">
                  Verifique a ligação ao serviço de técnicos e tente novamente.
                </p>
                <button
                  type="button"
                  onClick={() => window.location.reload()}
                  className="mt-5 rounded-xl bg-green-800 px-5 py-3 font-bold text-white"
                >
                  Tentar novamente
                </button>
              </div>

            ) : especialistasPagina.length > 0 ? (

              <>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                  {especialistasPagina.map((pessoa) => (

                    <article
                      key={pessoa.id}
                      className="group flex min-h-[290px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-green-300 hover:shadow-xl"
                    >

                      <div className="flex items-center gap-4 border-b border-slate-100 p-5">

                        {pessoa.imagem ? (

                          <img
                            src={pessoa.imagem}
                            alt={`Fotografia de ${pessoa.nome}`}
                            loading="lazy"
                            className="h-20 w-20 shrink-0 rounded-full border-2 border-green-100 object-cover"
                          />

                        ) : (

                          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-green-100 text-xl font-black text-green-900">
                            {iniciais(pessoa.nome)}
                          </div>

                        )}

                        <div className="min-w-0">

                          <h3 className="line-clamp-2 font-black leading-5 text-green-950">
                            {pessoa.nome}
                          </h3>

                          <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">
                            {pessoa.cargo}
                          </p>

                        </div>

                      </div>

                      <div className="flex flex-1 flex-col p-5">

                        <p className="text-xs font-bold uppercase tracking-wider text-green-700">
                          Especialidade
                        </p>

                        <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
                          {pessoa.area}
                        </p>

                        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                          {pessoa.descricao}
                        </p>

                        <div className="mt-auto pt-5">

                          {pessoa.livroCapaUrl || pessoa.livroPdfUrl ? (
                            <p className="mb-3 text-xs font-bold text-green-700">
                              Publicação científica disponível
                            </p>
                          ) : null}

                          <button
                            type="button"
                            onClick={() =>
                              setModal({
                                tipo: "especialista",
                                especialista: pessoa,
                              })
                            }
                            className="w-full rounded-xl bg-green-800 px-4 py-3 text-sm font-bold text-white transition hover:bg-green-950"
                          >
                            Consultar perfil →
                          </button>

                        </div>

                      </div>

                    </article>

                  ))}

                </div>

                {/* PAGINAÇÃO */}
                {totalPaginas > 1 && (

                  <div className="mt-10 flex flex-wrap items-center justify-center gap-2">

                    <button
                      type="button"
                      disabled={pagina === 1}
                      onClick={() => mudarPagina(pagina - 1)}
                      className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-green-50 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      ← Anterior
                    </button>

                    {Array.from(
                      { length: totalPaginas },
                      (_, index) => index + 1,
                    )
                      .filter((numero) => {
                        return (
                          numero === 1 ||
                          numero === totalPaginas ||
                          Math.abs(numero - pagina) <= 2
                        );
                      })
                      .map((numero, index, numeros) => (

                        <span key={numero} className="contents">

                          {index > 0 &&
                            numero - numeros[index - 1] > 1 && (
                              <span className="px-1 text-slate-400">
                                ...
                              </span>
                            )}

                          <button
                            type="button"
                            onClick={() => mudarPagina(numero)}
                            aria-current={
                              pagina === numero ? "page" : undefined
                            }
                            className={`h-11 min-w-11 rounded-xl px-3 text-sm font-black transition ${
                              pagina === numero
                                ? "bg-green-800 text-white"
                                : "border border-slate-300 bg-white text-slate-700 hover:bg-green-50"
                            }`}
                          >
                            {numero}
                          </button>

                        </span>

                      ))}

                    <button
                      type="button"
                      disabled={pagina === totalPaginas}
                      onClick={() => mudarPagina(pagina + 1)}
                      className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-green-50 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Seguinte →
                    </button>

                  </div>

                )}

                <p className="mt-5 text-center text-xs text-slate-500">
                  Página {pagina} de {totalPaginas} ·
                  Apresentando{" "}
                  {especialistasFiltrados.length > 0
                    ? (pagina - 1) * POR_PAGINA + 1
                    : 0}
                  {" "}a{" "}
                  {Math.min(
                    pagina * POR_PAGINA,
                    especialistasFiltrados.length,
                  )}
                  {" "}de{" "}
                  {especialistasFiltrados.length.toLocaleString("pt-PT")}
                  {" "}profissionais.
                </p>

              </>

            ) : (

              <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center">

                <h3 className="text-xl font-black text-green-950">
                  {especialistas.length === 0
                    ? "Rede científica em crescimento"
                    : "Nenhum especialista encontrado"}
                </h3>

                <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600">
                  {especialistas.length === 0
                    ? "Os profissionais serão apresentados nesta área depois de os seus perfis serem publicados pela administração da AGROINOVA."
                    : "Experimente pesquisar por outro nome ou especialidade."}
                </p>

              </div>

            )}

          </div>

        </div>
      </section>

      {/* ÁREAS CIENTÍFICAS */}
      <section
        id="areas"
        className="scroll-mt-20 border-y border-slate-200 bg-white py-20"
      >

        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">

          <div className="max-w-3xl">

            <p className="text-xs font-black uppercase tracking-[0.2em] text-green-700">
              Conhecimento aplicado
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
              Áreas de investigação
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Conheça os principais domínios científicos,
              as linhas de investigação e as suas aplicações
              nos sistemas agropecuários angolanos.
            </p>

          </div>

          <div className="mt-8">

            <input
              type="search"
              value={pesquisaArea}
              onChange={(event) => setPesquisaArea(event.target.value)}
              placeholder="Pesquisar uma área científica..."
              className="w-full rounded-xl border border-slate-300 bg-[#f8faf8] px-5 py-4 outline-none focus:border-green-700 focus:bg-white"
            />

          </div>

          <div className="mt-7 divide-y divide-slate-200 border-y border-slate-200">

            {areasFiltradas.map((area, index) => (

              <article
                key={area.slug}
                className="grid gap-4 py-6 md:grid-cols-[65px_1fr_auto] md:items-center"
              >

                <span className="text-2xl font-black text-green-200">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>

                  <h3 className="text-lg font-black text-green-950">
                    {area.titulo}
                  </h3>

                  <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                    {area.resumo ||
                      area.descricao ||
                      area.introducao ||
                      "Conhecimento científico aplicado ao desenvolvimento agropecuário."}
                  </p>

                </div>

                <div className="flex flex-wrap gap-2">

                  <button
                    type="button"
                    onClick={() =>
                      setModal({ tipo: "area", area })
                    }
                    className="rounded-lg border border-green-800 px-4 py-2.5 text-sm font-bold text-green-900 transition hover:bg-green-50"
                  >
                    Detalhes
                  </button>

                  <Link
                    href={`/investigacao/areas/${area.slug}`}
                    className="rounded-lg bg-green-800 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-green-950"
                  >
                    Artigo →
                  </Link>

                </div>

              </article>

            ))}

          </div>

          {areasFiltradas.length === 0 && (
            <p className="py-10 text-center text-slate-500">
              Não foram encontradas áreas científicas.
            </p>
          )}

        </div>
      </section>

      {/* AGENDA CIENTÍFICA */}
      <section className="bg-[#103c29] py-20 text-white">

        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">
                Investigação para o futuro
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
                Ciência orientada para os desafios de Angola.
              </h2>

              <p className="mt-5 leading-8 text-green-50/80">
                A investigação deve responder às necessidades
                dos produtores, contribuir para a segurança
                alimentar e desenvolver soluções adaptadas
                às diferentes condições agroecológicas do país.
              </p>

            </div>

            <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">

              {[
                {
                  titulo: "Segurança alimentar",
                  texto: "Produtividade, sementes, conservação e redução das perdas.",
                },
                {
                  titulo: "Alterações climáticas",
                  texto: "Adaptação à seca, gestão da água e resiliência agrícola.",
                },
                {
                  titulo: "Solos e fertilidade",
                  texto: "Conservação, nutrientes, matéria orgânica e recuperação dos solos.",
                },
                {
                  titulo: "Produção animal",
                  texto: "Nutrição, reprodução, melhoramento e sanidade animal.",
                },
                {
                  titulo: "Florestas e biodiversidade",
                  texto: "Conservação dos ecossistemas e sistemas agroflorestais.",
                },
                {
                  titulo: "Inovação tecnológica",
                  texto: "Digitalização, mecanização e novas tecnologias agropecuárias.",
                },
              ].map((item, index) => (

                <article
                  key={item.titulo}
                  className="border-b border-white/20 pb-5"
                >

                  <span className="text-xs font-black tracking-widest text-emerald-300">
                    TEMA {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-3 text-lg font-black">
                    {item.titulo}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-green-50/75">
                    {item.texto}
                  </p>

                </article>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* MODAIS */}
      {modal && (

        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/75 p-3 sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setModal(null);
            }
          }}
        >

          <section
            role="dialog"
            aria-modal="true"
            className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
          >

            <header className="flex items-start justify-between gap-4 bg-green-950 px-6 py-5 text-white">

              <div>

                <p className="text-xs font-bold uppercase tracking-widest text-green-300">
                  AGROINOVA ANGOLA
                </p>

                <h2 className="mt-2 text-xl font-black md:text-2xl">
                  {modal.tipo === "especialista"
                    ? modal.especialista.nome
                    : modal.area.titulo}
                </h2>

                {modal.tipo === "especialista" && (
                  <p className="mt-2 text-sm text-green-100">
                    {modal.especialista.cargo}
                  </p>
                )}

              </div>

              <button
                type="button"
                onClick={() => setModal(null)}
                className="rounded-lg border border-white/30 px-4 py-2 text-sm font-bold hover:bg-white/10"
              >
                Fechar
              </button>

            </header>

            <div className="overflow-y-auto p-6">

              {modal.tipo === "especialista" && (

                <div>

                  <div className="flex flex-col gap-5 sm:flex-row">

                    {modal.especialista.imagem ? (
                      <img
                        src={modal.especialista.imagem}
                        alt={modal.especialista.nome}
                        className="h-40 w-40 rounded-2xl object-cover"
                      />
                    ) : (
                      <div className="flex h-40 w-40 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-4xl font-black text-green-900">
                        {iniciais(modal.especialista.nome)}
                      </div>
                    )}

                    <div className="flex-1">

                      <p className="text-xs font-black uppercase tracking-wider text-green-700">
                        Especialidade
                      </p>

                      <h3 className="mt-2 text-xl font-black text-green-950">
                        {modal.especialista.area}
                      </h3>

                      <p className="mt-4 whitespace-pre-line text-sm leading-7 text-slate-700">
                        {modal.especialista.descricao}
                      </p>

                    </div>

                  </div>

                  {(modal.especialista.livroTitulo ||
                    modal.especialista.livroDescricao ||
                    modal.especialista.livroCapaUrl ||
                    modal.especialista.livroPdfUrl) && (

                    <section className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-5">

                      <p className="text-xs font-black uppercase tracking-wider text-green-700">
                        Publicação científica
                      </p>

                      <h3 className="mt-2 text-xl font-black text-green-950">
                        {modal.especialista.livroTitulo ||
                          "Publicação técnica"}
                      </h3>

                      <div className="mt-5 grid gap-5 sm:grid-cols-[170px_1fr]">

                        {modal.especialista.livroCapaUrl ? (

                          <img
                            src={modal.especialista.livroCapaUrl}
                            alt={`Capa de ${modal.especialista.livroTitulo || "publicação"}`}
                            className="max-h-64 w-full rounded-xl bg-white object-contain"
                          />

                        ) : (

                          <div className="flex min-h-40 items-center justify-center rounded-xl border border-dashed border-green-300 bg-white p-4 text-center text-sm text-green-800">
                            Capa não disponível
                          </div>

                        )}

                        <div>

                          <p className="whitespace-pre-line text-sm leading-7 text-slate-700">
                            {modal.especialista.livroDescricao ||
                              "Documento científico disponibilizado pelo profissional."}
                          </p>

                          {modal.especialista.livroPdfUrl && (

                            <div className="mt-5 flex flex-wrap gap-3">

                              <a
                                href={modal.especialista.livroPdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-xl bg-green-800 px-5 py-3 text-sm font-bold text-white hover:bg-green-950"
                              >
                                Abrir PDF
                              </a>

                              <a
                                href={modal.especialista.livroPdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                className="rounded-xl border border-green-800 px-5 py-3 text-sm font-bold text-green-900 hover:bg-white"
                              >
                                Descarregar
                              </a>

                            </div>

                          )}

                        </div>

                      </div>

                    </section>

                  )}

                </div>

              )}

              {modal.tipo === "area" && (

                <div className="space-y-7">

                  <div>

                    <h3 className="font-black text-green-950">
                      Enquadramento científico
                    </h3>

                    <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-700">
                      {modal.area.introducao ||
                        modal.area.resumo ||
                        modal.area.descricao ||
                        "Consulte o artigo completo para informação científica detalhada."}
                    </p>

                  </div>

                  {(
                    [
                      ["Importância científica", modal.area.importancia],
                      ["Contexto angolano", modal.area.angola],
                      ["Linhas de investigação", modal.area.linhasPesquisa],
                      ["Aplicações práticas", modal.area.aplicacoes],
                      ["Questões científicas", modal.area.perguntas],
                    ] as [string, string[] | undefined][]
                  ).map(([titulo, itens]) => {

                    const valores = lista(itens);

                    if (!valores.length) return null;

                    return (

                      <div key={titulo}>

                        <h3 className="font-black text-green-950">
                          {titulo}
                        </h3>

                        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                          {valores.map((item, index) => (
                            <li key={`${index}-${item}`}>
                              {item}
                            </li>
                          ))}
                        </ul>

                      </div>

                    );

                  })}

                  {!!modal.area.referencias?.length && (

                    <div>

                      <h3 className="font-black text-green-950">
                        Referências científicas
                      </h3>

                      <div className="mt-3 space-y-3">

                        {modal.area.referencias.map((ref, index) => (

                          <article
                            key={`${index}-${ref.titulo}`}
                            className="rounded-xl border border-slate-200 p-4"
                          >

                            <p className="font-bold text-green-950">
                              {ref.titulo}
                            </p>

                            <p className="mt-1 text-sm text-slate-600">
                              {ref.instituicao}
                              {ref.ano ? ` · ${ref.ano}` : ""}
                            </p>

                            {ref.url && (
                              <a
                                href={ref.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-block break-all text-sm font-bold text-green-800 underline"
                              >
                                Consultar fonte original →
                              </a>
                            )}

                          </article>

                        ))}

                      </div>

                    </div>

                  )}

                  <Link
                    href={`/investigacao/areas/${modal.area.slug}`}
                    className="inline-block rounded-xl bg-green-800 px-5 py-3 font-bold text-white hover:bg-green-950"
                  >
                    Abrir artigo completo →
                  </Link>

                </div>

              )}

            </div>

          </section>

        </div>

      )}

    </main>
  );
}
