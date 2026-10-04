"use client";

import { useState } from "react";

interface AdminAcoesSubmissaoProps {
  id: string;
  estado: string;
}

export default function AdminAcoesSubmissao({
  id,
  estado,
}: AdminAcoesSubmissaoProps) {
  const [estadoAtual, setEstadoAtual] = useState(estado);
  const [processando, setProcessando] = useState(false);
  const [erro, setErro] = useState("");

  async function atualizarEstado(
    novoEstado: "Aprovada" | "Rejeitada"
  ) {
    const confirmacao = window.confirm(
      novoEstado === "Aprovada"
        ? "Tem a certeza de que pretende aprovar este trabalho?"
        : "Tem a certeza de que pretende rejeitar este trabalho?"
    );

    if (!confirmacao) {
      return;
    }

    setProcessando(true);
    setErro("");

    try {
      const resposta = await fetch(`/api/admin/submissoes/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          estado: novoEstado,
        }),
      });

      const resultado = await resposta.json();

      if (!resposta.ok) {
        throw new Error(
          resultado?.erro || "Não foi possível actualizar o estado."
        );
      }

      setEstadoAtual(novoEstado);

      // Actualiza a página para renovar os indicadores
      // e o estado apresentado no cartão.
      window.location.reload();
    } catch (error) {
      setErro(
        error instanceof Error
          ? error.message
          : "Ocorreu um erro ao actualizar a submissão."
      );

      setProcessando(false);
    }
  }

  return (
    <div className="admin-acoes">

      <button
        type="button"
        disabled
      >
        Ver documento
      </button>

      <button
        type="button"
        onClick={() => atualizarEstado("Aprovada")}
        disabled={
          processando ||
          estadoAtual === "Aprovada"
        }
      >
        {processando
          ? "A processar..."
          : "Aprovar"}
      </button>

      <button
        type="button"
        onClick={() => atualizarEstado("Rejeitada")}
        disabled={
          processando ||
          estadoAtual === "Rejeitada"
        }
      >
        {processando
          ? "A processar..."
          : "Rejeitar"}
      </button>

      {erro && (
        <span className="admin-acao-erro">
          {erro}
        </span>
      )}
    </div>
  );
}