"use client";

import { useState } from "react";

interface AdminAcoesSubmissaoProps {
  id: string;
  estado: string;
}

interface ResultadoAPI {
  sucesso?: boolean;
  erro?: string;
  mensagem?: string;
  estado?: string;
}

async function lerResposta(
  resposta: Response
): Promise<ResultadoAPI> {
  const texto = await resposta.text();

  if (!texto.trim()) {
    throw new Error(
      `A API devolveu uma resposta vazia (HTTP ${resposta.status}).`
    );
  }

  let resultado: ResultadoAPI;

  try {
    resultado = JSON.parse(texto) as ResultadoAPI;
  } catch {
    throw new Error(
      `A API devolveu uma resposta inválida (HTTP ${resposta.status}).`
    );
  }

  if (!resposta.ok) {
    throw new Error(
      resultado.erro ||
        resultado.mensagem ||
        `O pedido falhou (HTTP ${resposta.status}).`
    );
  }

  return resultado;
}

export default function AdminAcoesSubmissao({
  id,
  estado,
}: AdminAcoesSubmissaoProps) {
  const [estadoAtual, setEstadoAtual] = useState(estado);
  const [processando, setProcessando] = useState(false);
  const [erro, setErro] = useState("");
  const [mensagem, setMensagem] = useState("");

  const url = `/api/admin/submissoes/${encodeURIComponent(id)}`;

  async function atualizarEstado(
    novoEstado: "Aprovada" | "Rejeitada"
  ) {
    if (processando) return;

    const confirmado = window.confirm(
      novoEstado === "Aprovada"
        ? "Tem a certeza de que pretende aprovar esta submissão?"
        : "Tem a certeza de que pretende rejeitar esta submissão?"
    );

    if (!confirmado) return;

    setProcessando(true);
    setErro("");
    setMensagem("");

    try {
      const resposta = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ estado: novoEstado }),
        cache: "no-store",
      });

      const resultado = await lerResposta(resposta);

      setEstadoAtual(resultado.estado || novoEstado);
      setMensagem(
        resultado.mensagem || "Estado actualizado com sucesso."
      );

      window.location.reload();
    } catch (error) {
      setErro(
        error instanceof Error
          ? error.message
          : "Erro ao actualizar a submissão."
      );
    } finally {
      setProcessando(false);
    }
  }

  async function eliminarSubmissao() {
    if (processando) return;

    const confirmado = window.confirm(
      `Pretende eliminar definitivamente a submissão ${id}?\n\n` +
        "Esta operação não pode ser desfeita."
    );

    if (!confirmado) return;

    setProcessando(true);
    setErro("");
    setMensagem("");

    try {
      const resposta = await fetch(url, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
        },
        cache: "no-store",
      });

      const resultado = await lerResposta(resposta);

      setMensagem(
        resultado.mensagem || "Submissão eliminada com sucesso."
      );

      window.location.reload();
    } catch (error) {
      setErro(
        error instanceof Error
          ? error.message
          : "Erro ao eliminar a submissão."
      );
    } finally {
      setProcessando(false);
    }
  }

  const estiloBotao = (desativado: boolean) => ({
    cursor: desativado ? "not-allowed" : "pointer",
    pointerEvents: "auto" as const,
    opacity: desativado ? 0.6 : 1,
  });

  return (
    <div className="admin-acoes">
      <button
        type="button"
        disabled
        title="A consulta do documento ainda não está disponível."
        style={estiloBotao(true)}
      >
        Ver documento
      </button>

      <button
        type="button"
        onClick={() => atualizarEstado("Aprovada")}
        disabled={processando || estadoAtual === "Aprovada"}
        aria-busy={processando}
        style={estiloBotao(
          processando || estadoAtual === "Aprovada"
        )}
      >
        {processando ? "A processar..." : "Aprovar"}
      </button>

      <button
        type="button"
        onClick={() => atualizarEstado("Rejeitada")}
        disabled={processando || estadoAtual === "Rejeitada"}
        aria-busy={processando}
        style={estiloBotao(
          processando || estadoAtual === "Rejeitada"
        )}
      >
        {processando ? "A processar..." : "Rejeitar"}
      </button>

      <button
        type="button"
        onClick={eliminarSubmissao}
        disabled={processando}
        aria-busy={processando}
        title={
          processando
            ? "A aguardar a resposta do servidor."
            : "Eliminar definitivamente esta submissão."
        }
        style={estiloBotao(processando)}
      >
        {processando ? "A processar..." : "Eliminar"}
      </button>

      {erro && (
        <p className="admin-acao-erro" role="alert">
          {erro}
        </p>
      )}

      {mensagem && (
        <p role="status">
          {mensagem}
        </p>
      )}
    </div>
  );
}