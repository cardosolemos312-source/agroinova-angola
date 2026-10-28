
"use client";

import { useCallback, useEffect, useState } from "react";

type Vendedor = {
  id: string;
  nome: string;
  telefone: string | null;
  whatsapp: string | null;
  provincia: string | null;
  municipio: string | null;
} | null;

type Produto = {
  id: string;
  vendedor_id: string;
  nome: string;
  descricao: string;
  categoria: string;
  preco: number | null;
  preco_negociavel: boolean;
  quantidade: number;
  unidade: string;
  provincia: string;
  municipio: string | null;
  imagens: string[];
  estado: string;
  motivo_rejeicao: string | null;
  created_at: string;
  vendedor: Vendedor;
};

type Resposta = {
  sucesso?: boolean;
  erro?: string;
  mensagem?: string;
  produtos?: Produto[];
  produto?: Produto;
};

const botaoBase: React.CSSProperties = {
  border: "1px solid #d1d5db",
  borderRadius: 9,
  padding: "9px 13px",
  fontWeight: 600,
  fontSize: 13,
  cursor: "pointer",
};

function formatarData(valor: string) {
  const data = new Date(valor);
  if (Number.isNaN(data.getTime())) return "Data indisponível";
  return data.toLocaleString("pt-PT");
}

function formatarPreco(valor: number | null) {
  if (valor === null || !Number.isFinite(valor)) {
    return "Preço não indicado";
  }

  return `${valor.toLocaleString("pt-PT")} Kz`;
}

function estadoLegivel(estado: string) {
  const estados: Record<string, string> = {
    pendente: "Pendente",
    aprovado: "Aprovado",
    rejeitado: "Rejeitado",
    arquivado: "Arquivado",
  };

  return estados[estado.toLowerCase()] || estado;
}

function estiloEstado(estado: string) {
  switch (estado.toLowerCase()) {
    case "aprovado":
      return "bg-green-50 text-green-800";
    case "rejeitado":
      return "bg-red-50 text-red-800";
    case "arquivado":
      return "bg-slate-100 text-slate-700";
    default:
      return "bg-amber-50 text-amber-800";
  }
}

export default function GestaoMercado() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [aProcessar, setAProcessar] = useState<string | null>(null);
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  const carregarProdutos = useCallback(async () => {
    setCarregando(true);
    setErro("");

    try {
      const resposta = await fetch("/api/admin/mercado/produtos", {
        method: "GET",
        cache: "no-store",
        credentials: "same-origin",
      });

      const dados = (await resposta.json()) as Resposta;

      if (!resposta.ok || dados.sucesso !== true) {
        throw new Error(
          dados.erro || "Não foi possível carregar os anúncios.",
        );
      }

      setProdutos(Array.isArray(dados.produtos) ? dados.produtos : []);
    } catch (error) {
      setErro(
        error instanceof Error
          ? error.message
          : "Ocorreu um erro ao carregar os anúncios.",
      );
    } finally {
      setCarregando(false);
    }
  }, []);

  useEffect(() => {
    void carregarProdutos();
  }, [carregarProdutos]);

  async function executarAcao(
    produto: Produto,
    acao: "aprovar" | "rejeitar" | "eliminar",
  ) {
    setErro("");
    setSucesso("");

    let motivo = "";

    if (acao === "aprovar" || acao === "rejeitar") {
      if (produto.estado.toLowerCase() !== "pendente") {
        setErro("Só podes aprovar ou rejeitar anúncios pendentes.");
        return;
      }
    }

    if (acao === "rejeitar") {
      const respostaMotivo = window.prompt(
        `Indica o motivo da rejeição do anúncio "${produto.nome}":`,
      );

      if (respostaMotivo === null) return;

      motivo = respostaMotivo.trim();

      if (!motivo) {
        setErro("Indica um motivo para rejeitar o anúncio.");
        return;
      }
    }

    if (acao === "eliminar") {
      const confirmado = window.confirm(
        `Tens a certeza de que pretendes eliminar o anúncio "${produto.nome}"? Esta ação não pode ser desfeita.`,
      );

      if (!confirmado) return;
    }

    setAProcessar(produto.id);

    try {
      const eliminar = acao === "eliminar";

      const resposta = await fetch("/api/admin/mercado/produtos", {
        method: eliminar ? "DELETE" : "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          eliminar
            ? { id: produto.id, confirmar: true }
            : {
                id: produto.id,
                acao,
                ...(acao === "rejeitar" ? { motivo } : {}),
              },
        ),
      });

      const dados = (await resposta.json()) as Resposta;

      if (!resposta.ok || dados.sucesso !== true) {
        throw new Error(
          dados.erro || "Não foi possível concluir a operação.",
        );
      }

      if (eliminar) {
        setProdutos((anteriores) =>
          anteriores.filter((item) => item.id !== produto.id),
        );
      } else {
        await carregarProdutos();
      }

      setSucesso(
        acao === "aprovar"
          ? `O anúncio "${produto.nome}" foi aprovado.`
          : acao === "rejeitar"
            ? `O anúncio "${produto.nome}" foi rejeitado.`
            : `O anúncio "${produto.nome}" foi eliminado.`,
      );
    } catch (error) {
      setErro(
        error instanceof Error
          ? error.message
          : "Ocorreu um erro ao executar a operação.",
      );
    } finally {
      setAProcessar(null);
    }
  }

  const pendentes = produtos.filter(
    (produto) => produto.estado.toLowerCase() === "pendente",
  ).length;

  const aprovados = produtos.filter(
    (produto) => produto.estado.toLowerCase() === "aprovado",
  ).length;

  return (
    <section className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Gestão do Mercado
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Consulta os anúncios, modera as novas submissões e elimina anúncios
            de qualquer estado.
          </p>
        </div>

        <button
          type="button"
          onClick={() => void carregarProdutos()}
          disabled={carregando}
          style={botaoBase}
          className="bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-50"
        >
          {carregando ? "A carregar..." : "Atualizar anúncios"}
        </button>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-sm text-slate-500">Total de anúncios listados</p>
          <p className="mt-1 text-3xl font-bold text-slate-900">
            {produtos.length}
          </p>
        </div>

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm text-amber-800">Pendentes de análise</p>
          <p className="mt-1 text-3xl font-bold text-amber-900">
            {pendentes}
          </p>
        </div>

        <div className="rounded-xl border border-green-200 bg-green-50 p-4">
          <p className="text-sm text-green-800">Anúncios aprovados</p>
          <p className="mt-1 text-3xl font-bold text-green-900">
            {aprovados}
          </p>
        </div>
      </div>

      {erro && (
        <div
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800"
        >
          {erro}
        </div>
      )}

      {sucesso && (
        <div
          role="status"
          className="rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-800"
        >
          {sucesso}
        </div>
      )}

      {carregando ? (
        <div className="rounded-xl border border-slate-200 bg-white p-8 text-center text-slate-500">
          A carregar anúncios do Mercado...
        </div>
      ) : erro && produtos.length === 0 ? (
        <div className="rounded-xl border border-slate-200 bg-white p-8 text-center text-slate-600">
          Não foi possível apresentar a lista. Verifica a ligação à API e tenta
          atualizar.
        </div>
      ) : produtos.length === 0 ? (
        <div className="rounded-xl border border-slate-200 bg-white p-8 text-center">
          <h3 className="font-semibold text-slate-800">
            Não existem anúncios para apresentar
          </h3>
          <p className="mt-2 text-sm text-slate-500">
            Os anúncios submetidos aparecerão aqui depois de carregados pela
            API administrativa.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {produtos.map((produto) => {
            const ocupado = aProcessar === produto.id;
            const pendente = produto.estado.toLowerCase() === "pendente";

            const imagem = produto.imagens?.find(
              (valor) =>
                typeof valor === "string" && valor.trim().length > 0,
            );

            return (
              <article
                key={produto.id}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="grid gap-4 p-4 md:grid-cols-[180px_1fr]">
                  <div className="overflow-hidden rounded-lg bg-slate-100">
                    {imagem ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={imagem}
                        alt={produto.nome}
                        className="h-44 w-full object-cover md:h-full"
                      />
                    ) : (
                      <div className="flex h-44 items-center justify-center text-sm text-slate-500 md:h-full">
                        Sem imagem
                      </div>
                    )}
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-green-700">
                          {produto.categoria}
                        </p>
                        <h3 className="mt-1 text-lg font-bold text-slate-900">
                          {produto.nome}
                        </h3>
                      </div>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${estiloEstado(
                          produto.estado,
                        )}`}
                      >
                        {estadoLegivel(produto.estado)}
                      </span>
                    </div>

                    <p className="mt-3 whitespace-pre-wrap break-words text-sm leading-6 text-slate-600">
                      {produto.descricao || "Sem descrição."}
                    </p>

                    {produto.motivo_rejeicao && (
                      <div className="mt-3 rounded-lg border border-red-100 bg-red-50 p-3 text-sm text-red-800">
                        <strong>Motivo da rejeição:</strong>{" "}
                        {produto.motivo_rejeicao}
                      </div>
                    )}

                    <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                      <div>
                        <span className="text-slate-500">Preço</span>
                        <p className="font-semibold text-slate-900">
                          {formatarPreco(produto.preco)}
                          {produto.preco_negociavel ? " · Negociável" : ""}
                        </p>
                      </div>

                      <div>
                        <span className="text-slate-500">Quantidade</span>
                        <p className="font-semibold text-slate-900">
                          {produto.quantidade} {produto.unidade}
                        </p>
                      </div>

                      <div>
                        <span className="text-slate-500">Localização</span>
                        <p className="font-semibold text-slate-900">
                          {[produto.municipio, produto.provincia]
                            .filter(Boolean)
                            .join(", ") || "Não indicada"}
                        </p>
                      </div>

                      <div>
                        <span className="text-slate-500">Submetido em</span>
                        <p className="font-semibold text-slate-900">
                          {formatarData(produto.created_at)}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 rounded-lg bg-slate-50 p-3 text-sm">
                      <p className="font-semibold text-slate-800">
                        Dados do vendedor
                      </p>
                      <p className="mt-1 text-slate-700">
                        {produto.vendedor?.nome || "Vendedor não encontrado"}
                      </p>
                      <p className="mt-1 text-slate-600">
                        Telefone: {produto.vendedor?.telefone || "Não indicado"}
                      </p>
                      <p className="text-slate-600">
                        WhatsApp: {produto.vendedor?.whatsapp || "Não indicado"}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {pendente && (
                        <>
                          <button
                            type="button"
                            style={botaoBase}
                            className="border-green-700 bg-green-700 text-white hover:bg-green-800 disabled:opacity-50"
                            disabled={ocupado}
                            onClick={() =>
                              void executarAcao(produto, "aprovar")
                            }
                          >
                            Aprovar anúncio
                          </button>

                          <button
                            type="button"
                            style={botaoBase}
                            className="border-amber-300 bg-amber-50 text-amber-900 hover:bg-amber-100 disabled:opacity-50"
                            disabled={ocupado}
                            onClick={() =>
                              void executarAcao(produto, "rejeitar")
                            }
                          >
                            Rejeitar
                          </button>
                        </>
                      )}

                      <button
                        type="button"
                        style={botaoBase}
                        className="border-red-200 bg-white text-red-700 hover:bg-red-50 disabled:opacity-50"
                        disabled={ocupado}
                        onClick={() => void executarAcao(produto, "eliminar")}
                      >
                        Eliminar anúncio
                      </button>

                      {ocupado && (
                        <span className="self-center text-xs text-slate-500">
                          A processar...
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
