
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

type Vendedor = {
  nome: string;
  tipo: string;
  telefone: string;
  whatsapp: string;
  provincia: string;
  municipio: string;
  descricao: string;
};

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
  vendedor?: Vendedor | null;
  dataPublicacao: string;
};

function normalizarWhatsApp(numero: string): string {
  let digitos = numero.replace(/\D/g, "");

  if (numero.trim().startsWith("00")) {
    digitos = digitos.slice(2);
  }

  if (digitos.startsWith("244")) {
    return digitos;
  }

  if (digitos.length === 9 && digitos.startsWith("9")) {
    return `244${digitos}`;
  }

  if (digitos.startsWith("0") && digitos.length === 10) {
    return `244${digitos.slice(1)}`;
  }

  return digitos;
}

export default function DetalheProdutoPage() {
  const params = useParams<{ id: string }>();
  const id = params.id;

  const [produto, setProduto] = useState<Produto | null>(null);
  const [imagemSelecionada, setImagemSelecionada] = useState("");
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
          throw new Error(
            resultado.erro ||
              "Não foi possível carregar o produto.",
          );
        }

        const encontrado: Produto | null =
          resultado.produtos?.[0] ?? null;

        if (!encontrado) {
          setErro(
            "Este anúncio não existe ou ainda não foi aprovado.",
          );
          setProduto(null);
          return;
        }

        const listaImagens = Array.isArray(encontrado.imagens)
          ? encontrado.imagens.filter(
              (imagem): imagem is string =>
                typeof imagem === "string" && imagem.length > 0,
            )
          : [];

        if (listaImagens.length === 0 && encontrado.imagem) {
          listaImagens.push(encontrado.imagem);
        }

        setProduto({
          ...encontrado,
          imagens: listaImagens,
          vendedor: encontrado.vendedor ?? null,
        });

        setImagemSelecionada(listaImagens[0] || "");
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

  const formatarPreco = (
    preco: number | null,
    unidade: string,
  ) => {
    if (preco === null) return "Preço sob consulta";

    return `${preco.toLocaleString("pt-PT")} Kz / ${unidade}`;
  };

  const imagensProduto = produto
    ? Array.from(
        new Set(
          produto.imagens?.length
            ? produto.imagens
            : produto.imagem
              ? [produto.imagem]
              : [],
        ),
      ).slice(0, 5)
    : [];

  const vendedor = produto?.vendedor ?? null;

  const numeroWhatsApp = vendedor?.whatsapp
    ? normalizarWhatsApp(vendedor.whatsapp)
    : "";

  const mensagemWhatsApp = produto
    ? `Olá! Tenho interesse no produto "${produto.nome}" anunciado na AGROINOVA-ANGOLA. Gostaria de obter mais informações.`
    : "";

  const numeroTelefone = vendedor?.telefone
    ? vendedor.telefone.replace(/[^\d+]/g, "")
    : "";

  return (
    <main className="min-h-screen bg-[#f5f7f6] px-4 py-10">
      <div className="mx-auto max-w-6xl">
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
            <div className="grid gap-8 p-5 md:grid-cols-[1.1fr_1fr] md:p-8">
              <section>
                {imagemSelecionada ? (
                  <div className="flex min-h-72 items-center justify-center overflow-hidden rounded-2xl bg-gray-100 md:min-h-[430px]">
                    <img
                      src={imagemSelecionada}
                      alt={produto.nome}
                      className="max-h-[520px] w-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex min-h-72 items-center justify-center rounded-2xl bg-green-50 text-green-800">
                    Fotografias não disponibilizadas
                  </div>
                )}

                {imagensProduto.length > 0 && (
                  <div className="mt-4">
                    <p className="mb-3 text-sm font-semibold text-gray-700">
                      Fotografias do produto ({imagensProduto.length})
                    </p>

                    <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
                      {imagensProduto.map((imagem, indice) => (
                        <button
                          key={`${imagem}-${indice}`}
                          type="button"
                          onClick={() => setImagemSelecionada(imagem)}
                          aria-label={`Ver fotografia ${indice + 1}`}
                          aria-pressed={imagemSelecionada === imagem}
                          className={`overflow-hidden rounded-xl border-2 bg-gray-50 transition ${
                            imagemSelecionada === imagem
                              ? "border-green-700 ring-2 ring-green-100"
                              : "border-transparent hover:border-green-300"
                          }`}
                        >
                          <img
                            src={imagem}
                            alt={`${produto.nome} — fotografia ${indice + 1}`}
                            loading="lazy"
                            className="h-20 w-full object-cover sm:h-24"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </section>

              <section>
                <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800">
                  {produto.categoria}
                </span>

                <h1 className="mt-4 text-3xl font-bold text-gray-900">
                  {produto.nome}
                </h1>

                <p className="mt-4 text-2xl font-bold text-green-800">
                  {formatarPreco(produto.preco, produto.unidade)}
                </p>

                {produto.negociavel && (
                  <span className="mt-2 inline-flex rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-800">
                    Preço negociável
                  </span>
                )}

                <div className="mt-6 border-t border-gray-100 pt-5">
                  <h2 className="text-lg font-bold text-gray-900">
                    Descrição do produto
                  </h2>

                  <p className="mt-3 whitespace-pre-wrap leading-7 text-gray-600">
                    {produto.descricao}
                  </p>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
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

                  <div className="rounded-xl bg-gray-50 p-4 sm:col-span-2">
                    <p className="text-sm text-gray-500">
                      Quantidade anunciada
                    </p>
                    <p className="mt-1 font-semibold text-gray-900">
                      {produto.quantidade.toLocaleString("pt-PT")}{" "}
                      {produto.unidade}
                    </p>
                  </div>
                </div>

                <aside className="mt-6 rounded-2xl border border-green-100 bg-green-50/70 p-5">
                  <h2 className="text-lg font-bold text-gray-900">
                    Contactar o vendedor
                  </h2>

                  {vendedor ? (
                    <>
                      <div className="mt-4">
                        <p className="text-sm text-gray-500">
                          Empresa ou vendedor
                        </p>
                        <p className="mt-1 text-xl font-bold text-gray-900">
                          {vendedor.nome || "Vendedor do Mercado"}
                        </p>
                        {vendedor.tipo && (
                          <p className="mt-1 text-sm text-gray-600">
                            {vendedor.tipo}
                          </p>
                        )}
                      </div>

                      {(vendedor.municipio || vendedor.provincia) && (
                        <p className="mt-3 text-sm text-gray-600">
                          Localização:{" "}
                          {[vendedor.municipio, vendedor.provincia]
                            .filter(Boolean)
                            .join(", ")}
                        </p>
                      )}

                      {vendedor.descricao && (
                        <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-gray-600">
                          {vendedor.descricao}
                        </p>
                      )}

                      {numeroWhatsApp && (
                        <a
                          href={`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagemWhatsApp)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-5 flex w-full items-center justify-center rounded-xl bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800"
                        >
                          Contactar pelo WhatsApp
                        </a>
                      )}

                      {numeroTelefone && (
                        <a
                          href={`tel:${numeroTelefone}`}
                          className="mt-3 flex w-full items-center justify-center rounded-xl border border-green-800 px-5 py-3 font-semibold text-green-800 transition hover:bg-green-100"
                        >
                          Ligar ao vendedor
                        </a>
                      )}

                      {!numeroWhatsApp && !numeroTelefone && (
                        <p className="mt-4 text-sm text-gray-600">
                          O vendedor ainda não disponibilizou um contacto
                          telefónico público.
                        </p>
                      )}
                    </>
                  ) : (
                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      Os dados públicos do vendedor não estão disponíveis
                      para este anúncio. Podes consultar outros produtos
                      no Mercado.
                    </p>
                  )}

                  <Link
                    href="/mercado/publicar"
                    className="mt-5 inline-flex rounded-xl border border-green-800 px-4 py-3 text-center font-semibold text-green-800 hover:bg-green-100"
                  >
                    Anunciar um produto
                  </Link>
                </aside>
              </section>
            </div>
          </article>
        ) : null}
      </div>
    </main>
  );
}
