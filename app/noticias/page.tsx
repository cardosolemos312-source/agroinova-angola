
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

type Noticia = {
  id: string;
  category: string;
  title: string;
  summary: string;
  content?: string;
  date: string;
  timestamp: number;
  source: string;
  location: string;
  image: string;
  url: string;
};

type Resposta = {
  sucesso?: boolean;
  total?: number;
  noticias?: Noticia[];
  mensagem?: string;
  erroPublicacoesProprias?: string;
};

const categorias = [
  "Todas",
  "Agricultura",
  "Pecuária",
  "Florestas",
  "Pesca",
  "Investigação",
  "Tecnologia",
  "Clima",
];

function urlValida(valor: string): boolean {
  try {
    const url = new URL(valor);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}


function dataLegivel(noticia: Noticia): string {
  const dataOriginal = noticia.date?.trim();

  // Tenta primeiro utilizar a data original.
  if (dataOriginal) {
    // Reconhece datas ISO, como 2026-10-15 ou
    // 2026-10-15T10:30:00Z.
    const dataISO = dataOriginal.match(
      /^(\d{4})-(\d{2})-(\d{2})(?:$|T|\s)/
    );

    if (dataISO) {
      const ano = Number(dataISO[1]);
      const mes = Number(dataISO[2]);
      const dia = Number(dataISO[3]);

      const data = new Date(ano, mes - 1, dia);

      if (
        ano >= 2000 &&
        ano <= 2100 &&
        data.getFullYear() === ano &&
        data.getMonth() === mes - 1 &&
        data.getDate() === dia
      ) {
        return new Intl.DateTimeFormat("pt-PT", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }).format(data);
      }
    }

    // Reconhece datas em formato DD/MM/AAAA.
    const dataPT = dataOriginal.match(
      /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/
    );

    if (dataPT) {
      const dia = Number(dataPT[1]);
      const mes = Number(dataPT[2]);
      const ano = Number(dataPT[3]);

      const data = new Date(ano, mes - 1, dia);

      if (
        ano >= 2000 &&
        ano <= 2100 &&
        data.getFullYear() === ano &&
        data.getMonth() === mes - 1 &&
        data.getDate() === dia
      ) {
        return new Intl.DateTimeFormat("pt-PT", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }).format(data);
      }
    }
  }

  // Só utiliza o timestamp se estiver num intervalo plausível.
  const timestamp = Number(noticia.timestamp);

  if (Number.isFinite(timestamp) && timestamp > 0) {
    // Aceita segundos ou milissegundos.
    const milissegundos =
      timestamp < 100000000000 ? timestamp * 1000 : timestamp;

    const data = new Date(milissegundos);
    const ano = data.getFullYear();

    if (
      !Number.isNaN(data.getTime()) &&
      ano >= 2000 &&
      ano <= 2100
    ) {
      return new Intl.DateTimeFormat("pt-PT", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }).format(data);
    }
  }

  return "Data não disponível";
}

export default function NoticiasPage() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [aCarregar, setACarregar] = useState(true);
  const [erro, setErro] = useState("");
  const [pesquisa, setPesquisa] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [slide, setSlide] = useState(0);
  const [noticiaAberta, setNoticiaAberta] = useState<Noticia | null>(null);

  const carregarNoticias = useCallback(async () => {
    setACarregar(true);
    setErro("");

    try {
      const resposta = await fetch("/api/noticias", {
        cache: "no-store",
      });

      if (!resposta.ok) {
        throw new Error(`Não foi possível carregar as notícias (${resposta.status}).`);
      }

      const dados = (await resposta.json()) as Resposta;

      const lista = (dados.noticias ?? []).map((item: any) => ({
        ...item,
        id: String(item.id ?? item.slug ?? ""),
        category: item.category ?? item.categoria ?? "Geral",
        title: item.title ?? item.titulo ?? "Notícia sem título",
        summary: item.summary ?? item.resumo ?? item.excerpt ?? "",
        content:
          item.content ??
          item.conteudo ??
          item.corpo ??
          item.texto ??
          item.body ??
          "",
        date: item.date ?? item.data ?? item.created_at ?? "",
        timestamp: Number(item.timestamp ?? 0),
        source: item.source ?? item.fonte ?? "AGROINOVA ANGOLA",
        location: item.location ?? item.localizacao ?? "",
        image:
          item.image ??
          item.imagem ??
          item.image_url ??
          item.imagem_url ??
          item.fotografia ??
          "",
        url: item.url ?? item.link ?? "",
      }));

      setNoticias(lista);
      setErro(dados.erroPublicacoesProprias ?? "");
    } catch (e) {
      setErro(
        e instanceof Error
          ? e.message
          : "Não foi possível carregar as notícias. Tenta novamente."
      );
    } finally {
      setACarregar(false);
    }
  }, []);

  useEffect(() => {
    void carregarNoticias();
  }, [carregarNoticias]);

  const destaques = useMemo(() => {
    return noticias.slice(0, 5);
  }, [noticias]);

  useEffect(() => {
    if (destaques.length < 2) return;

    const timer = window.setInterval(() => {
      setSlide((atual) => (atual + 1) % destaques.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [destaques.length]);

  useEffect(() => {
    setSlide(0);
  }, [destaques.length]);

  useEffect(() => {
    if (!noticiaAberta) return;

    const fecharComEscape = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") setNoticiaAberta(null);
    };

    window.addEventListener("keydown", fecharComEscape);
    return () => window.removeEventListener("keydown", fecharComEscape);
  }, [noticiaAberta]);

  const filtradas = useMemo(() => {
    const termo = pesquisa.trim().toLocaleLowerCase("pt-PT");

    return noticias.filter((n) => {
      const correspondeCategoria =
        categoria === "Todas" ||
        n.category.toLocaleLowerCase("pt-PT") ===
          categoria.toLocaleLowerCase("pt-PT");

      const texto = [
        n.title,
        n.summary,
        n.content,
        n.category,
        n.source,
        n.location,
      ]
        .join(" ")
        .toLocaleLowerCase("pt-PT");

      return correspondeCategoria && texto.includes(termo);
    });
  }, [noticias, categoria, pesquisa]);

  const destaque = destaques[slide];

  return (
    <main className="min-h-screen bg-[#f5f7f6] text-[#17221b]">
      <style jsx global>{`
        .noticias-card {
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .noticias-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 38px rgba(20,83,45,.12);
        }
        .noticias-card img {
          transition: transform .5s ease;
        }
        .noticias-card:hover img {
          transform: scale(1.045);
        }
        .noticias-imagem {
          background: linear-gradient(135deg,#d9f5df,#eff8e9,#b8e5c4);
        }
        .noticias-hero {
          background: #103c26;
        }
        .noticias-hero-img {
          animation: noticias-entrada .6s ease;
        }
        @keyframes noticias-entrada {
          from { opacity: .45; transform: scale(1.025); }
          to { opacity: 1; transform: scale(1); }
        }
        .noticias-modal {
          animation: noticias-modal-entrada .2s ease-out;
        }
        @keyframes noticias-modal-entrada {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Cabeçalho editorial */}
      <div className="bg-[#123d27] px-5 py-3 text-center text-xs font-bold uppercase tracking-[.16em] text-green-100">
        Conhecimento, tecnologia e inovação ao serviço do campo angolano
      </div>

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 md:px-10">
          <a href="/noticias" className="flex items-center gap-3 no-underline">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-green-700 to-green-900 text-2xl font-black text-white shadow-lg">
              A
            </div>
            <div>
              <div className="text-lg font-black tracking-tight text-green-900 md:text-xl">
                AGROINOVA ANGOLA
              </div>
              <div className="mt-1 text-[9px] font-bold tracking-[.16em] text-slate-500">
                PORTAL DE NOTÍCIAS AGROPECUÁRIAS
              </div>
            </div>
          </a>

          <a
            href="/"
            className="rounded-xl border border-green-800 px-4 py-2.5 text-sm font-bold text-green-800 transition hover:bg-green-50"
          >
            Página inicial
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 pb-8 pt-10 md:px-10 md:pt-14">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-[.2em] text-green-700">
              Informação e actualidade
            </div>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-[#17221b] md:text-5xl">
              Notícias do campo<span className="text-green-600">.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
              Acompanhe as iniciativas, descobertas, políticas e tecnologias
              que contribuem para o desenvolvimento agropecuário de Angola.
            </p>
          </div>

          <button
            type="button"
            onClick={() => void carregarNoticias()}
            disabled={aCarregar}
            className="rounded-xl bg-green-800 px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-green-900 disabled:opacity-60"
          >
            {aCarregar ? "A carregar..." : "↻ Actualizar notícias"}
          </button>
        </div>

        {/* Carrossel de notícias reais */}
        {destaque && (
          <section className="noticias-hero relative isolate min-h-[390px] overflow-hidden rounded-[26px] shadow-xl md:min-h-[440px]">
            {destaque.image && (
              <img
                key={`${destaque.id}-${destaque.image}`}
                src={destaque.image}
                alt={destaque.title}
                className="noticias-hero-img absolute inset-0 h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-r from-[#092b19]/95 via-[#092b19]/75 to-[#092b19]/20" />

            <div className="relative flex min-h-[390px] max-w-3xl flex-col items-start justify-center px-6 py-12 text-white md:min-h-[440px] md:px-12">
              <div className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[.15em] text-green-100 backdrop-blur">
                Em destaque · {destaque.category}
              </div>

              <h2 className="mt-6 max-w-2xl text-3xl font-black leading-tight tracking-tight md:text-5xl">
                {destaque.title}
              </h2>

              {destaque.summary && (
                <p className="mt-5 line-clamp-3 max-w-xl text-sm leading-7 text-green-50 md:text-base">
                  {destaque.summary}
                </p>
              )}

              <div className="mt-5 flex flex-wrap gap-3 text-xs text-green-100">
                <span>{dataLegivel(destaque)}</span>
                {destaque.location && <span>· {destaque.location}</span>}
              </div>

              <button
                type="button"
                onClick={() => setNoticiaAberta(destaque)}
                className="mt-7 rounded-xl bg-green-400 px-6 py-3.5 text-sm font-extrabold text-green-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-green-300"
              >
                Ler notícia completa →
              </button>
            </div>

            {destaques.length > 1 && (
              <div className="absolute bottom-5 right-6 flex gap-2 md:bottom-7 md:right-8">
                {destaques.map((n, i) => (
  <button
    key={`${n.id}-${i}`}
                    type="button"
                    aria-label={`Ver notícia em destaque ${i + 1}`}
                    aria-pressed={slide === i}
                    onClick={() => setSlide(i)}
                    className={`h-2.5 rounded-full transition-all ${
                      slide === i ? "w-8 bg-green-400" : "w-2.5 bg-white/60"
                    }`}
                  />
                ))}
              </div>
            )}
          </section>
        )}

        {!aCarregar && noticias.length === 0 && !erro && (
          <div className="rounded-3xl border border-green-100 bg-white p-7 text-sm leading-7 text-slate-600 shadow-sm">
            <strong className="block text-lg text-slate-900">
              As próximas notícias começam aqui.
            </strong>
            <p className="mt-2">
              Quando a API disponibilizar publicações, as notícias e as
              respectivas imagens aparecerão automaticamente nesta página.
            </p>
          </div>
        )}
      </section>

      {/* Pesquisa, filtros e cartões */}
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-5 md:px-10">
        <div className="mb-7 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-[.18em] text-green-700">
              Fique informado
            </div>
            <h2 className="mt-2 text-2xl font-black tracking-tight md:text-3xl">
              Últimas publicações
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              {filtradas.length} publicação(ões) encontrada(s)
            </p>
          </div>

          <input
            type="search"
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
            placeholder="Pesquisar título, tema ou fonte..."
            aria-label="Pesquisar notícias"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-green-600 focus:ring-4 focus:ring-green-100 md:max-w-sm"
          />
        </div>

        <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
          {categorias.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategoria(c)}
              aria-pressed={categoria === c}
              className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-bold transition ${
                categoria === c
                  ? "border-green-800 bg-green-800 text-white shadow-md"
                  : "border-slate-200 bg-white text-slate-600 hover:border-green-500 hover:text-green-800"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {erro && (
          <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
            {erro}
          </div>
        )}

        {aCarregar ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="animate-pulse overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <div className="h-52 bg-slate-200" />
                <div className="space-y-3 p-5">
                  <div className="h-3 w-1/3 rounded bg-slate-200" />
                  <div className="h-5 w-full rounded bg-slate-200" />
                  <div className="h-4 w-4/5 rounded bg-slate-100" />
                </div>
              </div>
            ))}
          </div>
        ) : filtradas.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-white px-6 py-14 text-center">
            <h3 className="text-xl font-extrabold">
              {noticias.length === 0
                ? "Ainda não há notícias disponíveis"
                : "Nenhuma notícia encontrada"}
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-slate-500">
              {noticias.length === 0
                ? "As notícias publicadas e disponibilizadas pela API aparecerão aqui."
                : "Experimenta outra pesquisa ou selecciona uma categoria diferente."}
            </p>
            {noticias.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  setPesquisa("");
                  setCategoria("Todas");
                }}
                className="mt-5 rounded-xl bg-green-800 px-5 py-3 text-sm font-bold text-white"
              >
                Limpar filtros
              </button>
            )}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {filtradas.map((noticia, index) => (
    <article
      key={`${noticia.id}-${index}`}
      className="noticias-card flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm"
    >
                <button
                  type="button"
                  onClick={() => setNoticiaAberta(noticia)}
                  aria-label={`Ler ${noticia.title}`}
                  className="noticias-imagem relative block aspect-[16/10] w-full overflow-hidden text-left"
                >
                  {noticia.image ? (
                    <img
                      src={noticia.image}
                      alt={noticia.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  ) : (
                    <div className="flex h-full items-end bg-gradient-to-br from-green-100 via-emerald-50 to-lime-100 p-5">
                      <span className="text-xs font-black uppercase tracking-widest text-green-800">
                        AGROINOVA ANGOLA
                      </span>
                    </div>
                  )}
                  <span className="absolute bottom-3 left-3 rounded-lg bg-white/95 px-3 py-1.5 text-[10px] font-extrabold uppercase text-green-800 shadow-sm">
                    {noticia.category}
                  </span>
                </button>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
                    <time>{dataLegivel(noticia)}</time>
                    {noticia.source === "AGROINOVA ANGOLA" && (
                      <span className="rounded-full bg-blue-50 px-2.5 py-1 font-bold text-blue-800">
                        Publicação própria
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 text-lg font-extrabold leading-6 tracking-tight">
                    {noticia.title}
                  </h3>

                  {noticia.summary && (
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                      {noticia.summary}
                    </p>
                  )}

                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-4 mt-5">
                    <span className="min-w-0 truncate text-xs font-semibold text-slate-500">
                      {noticia.source}
                    </span>

                    <button
                      type="button"
                      onClick={() => setNoticiaAberta(noticia)}
                      className="shrink-0 rounded-lg bg-green-800 px-4 py-2.5 text-xs font-extrabold text-white transition hover:bg-green-900"
                    >
                      Ler notícia →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <footer className="bg-[#123d27] px-5 py-9 text-white md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <div className="font-black tracking-wide">AGROINOVA ANGOLA</div>
            <p className="mt-2 text-xs leading-6 text-green-100">
              Conhecimento, tecnologia e inovação ao serviço do campo angolano.
            </p>
          </div>
          <a href="/" className="text-sm font-bold text-green-200 hover:text-white">
            Voltar à página inicial →
          </a>
        </div>
      </footer>

      {/* Leitura integral em janela modal */}
      {noticiaAberta && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-950/70 p-0 backdrop-blur-sm sm:items-center sm:p-5"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setNoticiaAberta(null);
          }}
        >
          <article
            role="dialog"
            aria-modal="true"
            aria-labelledby="noticia-titulo"
            className="noticias-modal max-h-[94vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white/95 px-5 py-4 backdrop-blur">
              <span className="text-xs font-extrabold uppercase tracking-widest text-green-800">
                {noticiaAberta.category} · AGROINOVA ANGOLA
              </span>
              <button
                type="button"
                onClick={() => setNoticiaAberta(null)}
                aria-label="Fechar notícia"
                className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-xl font-bold text-slate-700 hover:bg-green-100 hover:text-green-900"
              >
                ×
              </button>
            </div>

            {noticiaAberta.image && (
              <div className="max-h-[380px] overflow-hidden bg-green-50">
                <img
                  src={noticiaAberta.image}
                  alt={noticiaAberta.title}
                  className="max-h-[380px] w-full object-cover"
                />
              </div>
            )}

            <div className="p-6 sm:p-10">
              <div className="text-xs font-semibold text-slate-500">
                {dataLegivel(noticiaAberta)}
                {noticiaAberta.location && ` · ${noticiaAberta.location}`}
              </div>

              <h2
                id="noticia-titulo"
                className="mt-4 text-2xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl"
              >
                {noticiaAberta.title}
              </h2>

              <div className="mt-4 h-1 w-16 rounded-full bg-green-600" />

              {noticiaAberta.summary && (
                <p className="mt-6 border-l-4 border-green-600 bg-green-50 p-4 text-base font-semibold leading-7 text-green-950">
                  {noticiaAberta.summary}
                </p>
              )}

              {noticiaAberta.content ? (
                <div className="mt-7 whitespace-pre-line text-[15px] leading-8 text-slate-700">
                  {noticiaAberta.content}
                </div>
              ) : (
                <div className="mt-7 rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-600">
                  O conteúdo integral não foi disponibilizado pela API para
                  esta publicação. Podes consultar a fonte original, se existir,
                  ou verificar se o administrador guardou o texto completo.
                </div>
              )}

              <div className="mt-8 border-t border-slate-200 pt-5">
                <div className="text-xs text-slate-500">
                  Fonte: <strong>{noticiaAberta.source}</strong>
                </div>

                {noticiaAberta.url && urlValida(noticiaAberta.url) && (
                  <a
                    href={noticiaAberta.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center rounded-xl bg-green-800 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-green-900"
                  >
                    Consultar fonte original ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        </div>
      )}
    </main>
  );
}
