
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

type Produto = {
  id: string;
  nome: string;
  descricao: string;
  categoria: string;
  preco: number | null;
  negociavel: boolean;
  quantidade: number;
  unidade: string;
  provincia: string;
  municipio: string;
  imagem: string;
  imagens: string[];
  dataPublicacao: string;
};

export default function DetalheProdutoPage() {
  const params = useParams<{ id: string }>();
  const id = params.id;

  const [produto, setProduto] = useState<Produto | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    if (!id) return;

    const controlador = new AbortController();

    async function carregarProduto() {
      try {
        setCarregando(true);
        setErro("");

        const resposta = await fetch(
          `/api/mercado/produtos?id=${encodeURIComponent(id)}`,
          {
            cache: "no-store",
            signal: controlador.signal,
          },
        );

        const resultado = await resposta.json();

        if (!resposta.ok) {
          throw new Error(resultado.erro || "Não foi possível carregar o produto.");
        }

        const encontrado = resultado.produtos?.[0] ?? null;

        if (!encontrado) {
          setErro("Este anúncio não existe ou ainda não foi aprovado.");
          setProduto(null);
          return;
        }

        setProduto(encontrado);
      } catch (erroDesconhecido) {
        if (controlador.signal.aborted) return;

        setErro(
          erroDesconhecido instanceof Error
            ? erroDesconhecido.message
            : "Ocorreu um erro ao carregar o anúncio.",
        );
      } finally {
        if (!controlador.signal.aborted) {
          setCarregando(false);
        }
      }
    }

    carregarProduto();

    return () => controlador.abort();
  }, [id]);

  const formatarPreco = (preco: number | null, unidade: string) => {
    if (preco === null) return "Preço sob consulta";

    return `${preco.toLocaleString("pt-PT")} Kz / ${unidade}`;
  };

  return (
    <main className="min-h-screen bg-[#f5f7f6] px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/mercado"
          className="mb-6 inline-flex items-center gap-2 font-semibold text-green-800 hover:text-green-600"
        >
          ← Voltar ao Mercado
        </Link>

        {carregando ? (
          <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
            A carregar anúncio...
          </div>
        ) : erro ? (
          <div className="rounded-2xl border border-amber-200 bg-white p-8 shadow-sm">
            <h1 className="text-xl font-bold text-gray-900">
              Anúncio indisponível
            </h1>
            <p className="mt-3 text-gray-600">{erro}</p>
            <Link
              href="/mercado"
              className="mt-6 inline-flex rounded-xl bg-green-800 px-5 py-3 font-semibold text-white hover:bg-green-700"
            >
              Consultar outros produtos
            </Link>
          </div>
        ) : produto ? (
          <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
            {produto.imagem ? (
              <div className="bg-gray-100">
                {/* A imagem é fornecida pelo anúncio aprovado. */}
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="max-h-[520px] w-full object-contain"
                />
              </div>
            ) : (
              <div className="flex min-h-64 items-center justify-center bg-green-50 text-green-800">
                Imagem não disponibilizada
              </div>
            )}

            <div className="grid gap-8 p-6 md:grid-cols-[1fr_280px] md:p-10">
              <div>
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800">
                  {produto.categoria}
                </span>

                <h1 className="mt-4 text-3xl font-bold text-gray-900">
                  {produto.nome}
                </h1>

                <p className="mt-5 whitespace-pre-wrap leading-7 text-gray-600">
                  {produto.descricao}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-gray-50 p-4">
                    <p className="text-sm text-gray-500">Província</p>
                    <p className="mt-1 font-semibold text-gray-900">
                      {produto.provincia}
                    </p>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-4">
                    <p className="text-sm text-gray-500">Município</p>
                    <p className="mt-1 font-semibold text-gray-900">
                      {produto.municipio || "Não indicado"}
                    </p>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-4">
                    <p className="text-sm text-gray-500">Quantidade anunciada</p>
                    <p className="mt-1 font-semibold text-gray-900">
                      {produto.quantidade.toLocaleString("pt-PT")}{" "}
                      {produto.unidade}
                    </p>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-4">
                    <p className="text-sm text-gray-500">Preço</p>
                    <p className="mt-1 font-semibold text-green-800">
                      {formatarPreco(produto.preco, produto.unidade)}
                    </p>
                    {produto.negociavel && (
                      <p className="mt-1 text-sm text-gray-600">
                        Preço negociável
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <aside className="h-fit rounded-2xl border border-gray-200 p-5">
                <h2 className="text-lg font-bold text-gray-900">
                  Interessado neste produto?
                </h2>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  O contacto direto com o vendedor será disponibilizado quando
                  o perfil do vendedor estiver integrado.
                </p>
                <Link
                  href="/mercado/publicar"
                  className="mt-5 block rounded-xl border border-green-800 px-4 py-3 text-center font-semibold text-green-800 hover:bg-green-50"
                >
                  Como anunciar um produto
                </Link>
              </aside>
            </div>
          </article>
        ) : null}
      </div>
    </main>
  );
}
