
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Produto = {
  id: string;
  nome: string;
  categoria: string;
  provincia: string;
  municipio: string;
  preco: number | null;
  unidade: string;
  imagem: string;
  descricao: string;
  negociavel?: boolean;
  demonstracao?: boolean;
};

const categorias = [
  "Todos",
  "Cereais",
  "Hortícolas",
  "Frutas",
  "Tubérculos",
  "Leguminosas",
  "Pecuária",
  "Sementes",
  "Equipamentos",
  "Outros",
];

const provincias = [
  "Todas",
  "Bengo",
  "Benguela",
  "Bié",
  "Cabinda",
  "Cuando",
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

const exemplos: Produto[] = [
  {
    id: "exemplo-milho",
    nome: "Milho em grão",
    categoria: "Cereais",
    provincia: "Huambo",
    municipio: "Huambo",
    preco: null,
    unidade: "kg",
    imagem:
      "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=900&q=85",
    descricao: "Exemplo ilustrativo de anúncio de milho em grão.",
    negociavel: true,
    demonstracao: true,
  },
  {
    id: "exemplo-tomate",
    nome: "Tomate fresco",
    categoria: "Hortícolas",
    provincia: "Benguela",
    municipio: "Benguela",
    preco: null,
    unidade: "kg",
    imagem:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=900&q=85",
    descricao: "Exemplo ilustrativo de anúncio de tomate fresco.",
    negociavel: true,
    demonstracao: true,
  },
  {
    id: "exemplo-batata",
    nome: "Batata rena",
    categoria: "Tubérculos",
    provincia: "Huíla",
    municipio: "Lubango",
    preco: null,
    unidade: "kg",
    imagem:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=85",
    descricao: "Exemplo ilustrativo de anúncio de batata.",
    negociavel: true,
    demonstracao: true,
  },
  {
    id: "exemplo-feijao",
    nome: "Feijão seco",
    categoria: "Leguminosas",
    provincia: "Bié",
    municipio: "Kuito",
    preco: null,
    unidade: "kg",
    imagem:
      "https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&w=900&q=85",
    descricao: "Exemplo ilustrativo de anúncio de feijão seco.",
    negociavel: true,
    demonstracao: true,
  },
  {
    id: "exemplo-banana",
    nome: "Banana",
    categoria: "Frutas",
    provincia: "Uíge",
    municipio: "Uíge",
    preco: null,
    unidade: "kg",
    imagem:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=900&q=85",
    descricao: "Exemplo ilustrativo de anúncio de banana.",
    negociavel: true,
    demonstracao: true,
  },
  {
    id: "exemplo-galinha",
    nome: "Aves de capoeira",
    categoria: "Pecuária",
    provincia: "Cuanza Sul",
    municipio: "Sumbe",
    preco: null,
    unidade: "unidade",
    imagem:
      "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=900&q=85",
    descricao: "Exemplo ilustrativo de anúncio de aves.",
    negociavel: true,
    demonstracao: true,
  },
];

function formatarPreco(preco: number | null, unidade: string) {
  if (preco === null) return "Preço sob consulta";

  return `${new Intl.NumberFormat("pt-PT", {
    maximumFractionDigits: 2,
  }).format(preco)} Kz / ${unidade}`;
}

export default function MercadoPage() {
  const [pesquisa, setPesquisa] = useState("");
  const [categoria, setCategoria] = useState("Todos");
  const [provincia, setProvincia] = useState("Todas");
  const [ordenacao, setOrdenacao] = useState("recentes");
  const [produtos, setProdutos] = useState<Produto[]>(exemplos);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  async function atualizarProdutos() {
    setCarregando(true);
    setErro("");

    try {
      const resposta = await fetch("/api/mercado/produtos", {
        cache: "no-store",
      });

      if (!resposta.ok) {
        throw new Error("Não foi possível consultar os anúncios.");
      }

      const dados: unknown = await resposta.json();

      const lista =
        Array.isArray(dados)
          ? dados
          : dados &&
              typeof dados === "object" &&
              "produtos" in dados &&
              Array.isArray((dados as { produtos: unknown }).produtos)
            ? (dados as { produtos: unknown[] }).produtos
            : null;

      if (!lista) {
        throw new Error("A resposta da API não tem o formato esperado.");
      }

      const validos = lista.filter(
        (item): item is Produto =>
          !!item &&
          typeof item === "object" &&
          "id" in item &&
          "nome" in item &&
          typeof item.id === "string" &&
          typeof item.nome === "string",
      );

      setProdutos(validos);
    } catch {
      setErro(
        "Não foi possível atualizar os anúncios. Os exemplos ilustrativos continuam disponíveis.",
      );
    } finally {
      setCarregando(false);
    }
  }

  const produtosFiltrados = useMemo(() => {
    const termo = pesquisa.trim().toLocaleLowerCase("pt-PT");

    const resultado = produtos.filter((produto) => {
      const correspondePesquisa =
        !termo ||
        [
          produto.nome,
          produto.categoria,
          produto.provincia,
          produto.municipio,
          produto.descricao,
        ]
          .filter(Boolean)
          .some((valor) =>
            valor.toLocaleLowerCase("pt-PT").includes(termo),
          );

      const correspondeCategoria =
        categoria === "Todos" || produto.categoria === categoria;

      const correspondeProvincia =
        provincia === "Todas" || produto.provincia === provincia;

      return (
        correspondePesquisa &&
        correspondeCategoria &&
        correspondeProvincia
      );
    });

    if (ordenacao === "menor-preco") {
      resultado.sort(
        (a, b) =>
          (a.preco ?? Number.POSITIVE_INFINITY) -
          (b.preco ?? Number.POSITIVE_INFINITY),
      );
    } else if (ordenacao === "maior-preco") {
      resultado.sort(
        (a, b) =>
          (b.preco ?? Number.NEGATIVE_INFINITY) -
          (a.preco ?? Number.NEGATIVE_INFINITY),
      );
    }

    return resultado;
  }, [produtos, pesquisa, categoria, provincia, ordenacao]);

  return (
    <main className="min-h-screen bg-[#f5f8f4] text-[#17221b]">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#103d27] via-[#166534] to-[#238444]">
        <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-lime-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
          <nav className="mb-10 flex flex-wrap items-center gap-2 text-sm text-green-100">
            <Link href="/" className="transition hover:text-white">
              Início
            </Link>
            <span>/</span>
            <span className="font-medium text-white">Mercado AGROINOVA</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-green-50">
                Mercado agropecuário de Angola
              </span>

              <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Do campo ao mercado.
                <span className="mt-2 block text-lime-300">
                  Mais oportunidades para produzir e vender.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-green-50 sm:text-lg">
                Um espaço para aproximar agricultores, cooperativas,
                fazendas, empresas e compradores de produtos agropecuários
                  em Angola.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/mercado/publicar"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-green-700 px-6 py-3 font-bold !text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-green-800" style={{ backgroundColor: "#166534", color: "#ffffff" }}
                >
                  Publicar produto
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Link>

                <a
                  href="#catalogo"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white/10"
                >
                  Explorar produtos
                </a>
                <Link
                  href="/mercado/entrar"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/50 px-6 py-3 font-bold text-white transition hover:bg-white/10"
                >
                  Entrar
                </Link>

                <Link
                  href="/mercado/entrar?modo=registar"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-green-300 px-6 py-3 font-bold text-green-950 transition hover:bg-green-200"
                >
                  Registar
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-green-50">
                <span>Produtores nacionais</span>
                <span>•</span>
                <span>Produtos agropecuários</span>
                <span>•</span>
                <span>Contacto direto</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-3 rounded-[2rem] bg-lime-300/15 blur-xl" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-sm">
                <img
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1100&q=85"
                  alt="Paisagem agrícola e campos de cultivo"
                  className="h-72 w-full rounded-2xl object-cover sm:h-96"
                />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/30 bg-white/95 p-4 shadow-xl">
                  <p className="text-xs font-bold uppercase tracking-wider text-green-700">
                    Produção nacional
                  </p>
                  <p className="mt-1 text-lg font-extrabold text-gray-900">
                    O teu produto pode chegar a novos compradores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto -mt-6 max-w-7xl px-5 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              titulo: "Produtos locais",
              texto: "Descobre ofertas de diferentes províncias.",
              numero: "01",
            },
            {
              titulo: "Venda direta",
              texto: "Facilita o contacto entre vendedores e compradores.",
              numero: "02",
            },
            {
              titulo: "Mais visibilidade",
              texto: "Dá maior alcance aos produtos do campo.",
              numero: "03",
            },
          ].map((item) => (
            <article
              key={item.numero}
              className="rounded-2xl border border-green-100 bg-white p-5 shadow-[0_8px_30px_rgba(20,83,45,0.07)]"
            >
              <span className="text-sm font-black tracking-widest text-green-700">
                {item.numero}
              </span>
              <h2 className="mt-3 text-lg font-extrabold">{item.titulo}</h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                {item.texto}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="catalogo"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 py-14 sm:px-8 sm:py-16"
      >
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-green-700">
              Vitrine agropecuária
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              Explorar produtos
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-gray-600">
              Pesquisa produtos, seleciona uma categoria ou filtra por
              província para encontrares o que procuras.
            </p>
          </div>

          <button
            type="button"
            onClick={atualizarProdutos}
            disabled={carregando}
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-green-200 bg-white px-5 py-3 text-sm font-bold text-green-800 transition hover:bg-green-50 disabled:cursor-wait disabled:opacity-60"
          >
            {carregando ? "A atualizar..." : "Atualizar anúncios"}
          </button>
        </div>

        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="grid gap-4 md:grid-cols-[1.5fr_1fr_1fr]">
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-gray-700">
                Pesquisar
              </span>
              <div className="flex h-12 items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-green-600 focus-within:ring-2 focus-within:ring-green-100">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5 shrink-0 text-gray-500"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m16 16 4 4" />
                </svg>
                <input
                  value={pesquisa}
                  onChange={(event) => setPesquisa(event.target.value)}
                  placeholder="Ex.: milho, tomate, sementes..."
                  className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                />
              </div>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-bold text-gray-700">
                Província
              </span>
              <select
                value={provincia}
                onChange={(event) => setProvincia(event.target.value)}
                className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
              >
                {provincias.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-bold text-gray-700">
                Ordenar por
              </span>
              <select
                value={ordenacao}
                onChange={(event) => setOrdenacao(event.target.value)}
                className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
              >
                <option value="recentes">Relevância / recentes</option>
                <option value="menor-preco">Menor preço</option>
                <option value="maior-preco">Maior preço</option>
              </select>
            </label>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {categorias.map((item) => {
              const selecionada = categoria === item;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategoria(item)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    selecionada
                      ? "border-green-700 bg-green-700 text-white shadow-sm"
                      : "border-gray-200 bg-white text-gray-700 hover:border-green-300 hover:bg-green-50 hover:text-green-800"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        {erro && (
          <p
            role="status"
            className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900"
          >
            {erro}
          </p>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-gray-600" aria-live="polite">
            <strong className="text-gray-900">
              {produtosFiltrados.length}
            </strong>{" "}
            {produtosFiltrados.length === 1
              ? "produto encontrado"
              : "produtos encontrados"}
          </p>

          {(pesquisa || categoria !== "Todos" || provincia !== "Todas") && (
            <button
              type="button"
              onClick={() => {
                setPesquisa("");
                setCategoria("Todos");
                setProvincia("Todas");
              }}
              className="text-sm font-bold text-green-800 underline decoration-green-300 underline-offset-4 hover:text-green-950"
            >
              Limpar filtros
            </button>
          )}
        </div>

        {produtosFiltrados.length > 0 ? (
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {produtosFiltrados.map((produto) => (
              <article
                key={produto.id}
                className="group overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-[0_16px_36px_rgba(20,83,45,0.12)]"
              >
                <div className="relative overflow-hidden bg-gray-100">
                  <img
                    src={produto.imagem || "/imagens/mercado/produto-placeholder.jpg"}
                    alt={produto.nome}
                    loading="lazy"
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                    onError={(event) => {
                      event.currentTarget.style.visibility = "hidden";
                    }}
                  />
                  <span className="absolute left-3 top-3 rounded-full border border-white/70 bg-white/95 px-3 py-1.5 text-xs font-bold text-green-800 shadow-sm">
                    {produto.categoria}
                  </span>
                  {produto.demonstracao && (
                    <span className="absolute bottom-3 left-3 rounded-lg bg-amber-100 px-3 py-1.5 text-xs font-bold text-amber-900">
                      Exemplo ilustrativo
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-extrabold leading-6 text-gray-900">
                      {produto.nome}
                    </h3>
                  </div>

                  <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-gray-600">
                    {produto.descricao}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-4 w-4 shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                    <span>
                      {produto.municipio
                        ? `${produto.municipio}, ${produto.provincia}`
                        : produto.provincia}
                    </span>
                  </div>

                  <div className="mt-5 border-t border-gray-100 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Preço
                    </p>
                    <p className="mt-1 text-lg font-black text-green-800">
                      {formatarPreco(produto.preco, produto.unidade)}
                    </p>
                    {produto.negociavel && (
                      <p className="mt-1 text-xs font-medium text-gray-500">
                        Preço negociável
                      </p>
                    )}
                  </div>

                  {produto.demonstracao ? (
                    <p className="mt-4 block w-full rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-center text-sm font-semibold text-amber-900">
                      Anúncio de demonstração
                    </p>
                  ) : (
                    <Link
                      href={`/mercado/produto/${encodeURIComponent(produto.id)}`}
                      className="mt-4 flex min-h-11 w-full items-center justify-center rounded-xl bg-green-700 px-4 py-3 text-sm font-bold text-white transition hover:bg-green-800"
                    >
                      Ver produto
                      <span className="ml-2" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-dashed border-gray-300 bg-white px-5 py-16 text-center">
            <h3 className="text-xl font-extrabold text-gray-900">
              Nenhum produto encontrado
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-600">
              Experimenta alterar a pesquisa ou selecionar outra categoria ou
              província.
            </p>
            <button
              type="button"
              onClick={() => {
                setPesquisa("");
                setCategoria("Todos");
                setProvincia("Todas");
              }}
              className="mt-5 rounded-xl bg-green-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-800"
            >
              Mostrar todos os produtos
            </button>
          </div>
        )}

        <div className="mt-12 rounded-3xl bg-gradient-to-r from-green-900 to-green-700 p-7 text-white shadow-lg sm:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-green-200">
                És produtor ou cooperativa?
              </p>
              <h2 className="mt-3 text-2xl font-black sm:text-3xl">
                Dá visibilidade à tua produção.
              </h2>
              <p className="mt-3 leading-7 text-green-50">
                Prepara os teus anúncios com fotografias, preços, quantidades
                e localização para chegares a potenciais compradores.
              </p>
            </div>
            <Link
              href="/mercado/publicar"
              className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl bg-green-700 px-6 py-3 font-bold !text-white transition hover:bg-green-800" style={{ backgroundColor: "#166534", color: "#ffffff" }}
            >
              Começar a publicar
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-green-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-sm text-gray-500 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>
            <strong className="text-green-800">AGROINOVA-ANGOLA</strong>
            {" "}— Conhecimento, Tecnologia e Inovação ao Serviço do Campo
            Angolano.
          </p>
          <Link
            href="/"
            className="font-semibold text-green-800 hover:text-green-950"
          >
            Voltar à página inicial
          </Link>
        </div>
      </footer>
    </main>
  );
}
