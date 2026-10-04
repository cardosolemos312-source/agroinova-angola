"use client";

import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [entrando, setEntrando] = useState(false);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setEntrando(true);
    setErro("");

    try {
      const resposta = await fetch(
        "/api/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            senha,
          }),
        }
      );

      const resultado = await resposta.json();

      if (!resposta.ok) {
        throw new Error(
          resultado?.erro ||
            "Não foi possível iniciar sessão."
        );
      }

      window.location.href =
        "/admin/submissoes";

    } catch (error) {
      setErro(
        error instanceof Error
          ? error.message
          : "Ocorreu um erro ao iniciar sessão."
      );
    } finally {
      setEntrando(false);
    }
  }

  return (
    <main className="admin-login-page">

      <section className="admin-login-box">

        <div className="admin-login-header">

          <span className="admin-login-kicker">
            AGROINOVA ANGOLA
          </span>

          <h1>
            Área administrativa
          </h1>

          <p>
            Acesso reservado à administração
            do Repositório AGROINOVA.
          </p>

        </div>

        {erro && (
          <div className="admin-login-erro">
            {erro}
          </div>
        )}

        <form
          className="admin-login-form"
          onSubmit={handleSubmit}
        >

          <div className="admin-login-field">

            <label htmlFor="email">
              E-mail
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              placeholder="Administrador"
              required
              autoComplete="username"
            />

          </div>

          <div className="admin-login-field">

            <label htmlFor="senha">
              Palavra-passe
            </label>

            <input
              id="senha"
              type="password"
              value={senha}
              onChange={(event) =>
                setSenha(event.target.value)
              }
              placeholder="Introduza a palavra-passe"
              required
              autoComplete="current-password"
            />

          </div>

          <button
            type="submit"
            disabled={entrando}
          >
            {entrando
              ? "A entrar..."
              : "Entrar"}
          </button>

        </form>

        <div className="admin-login-aviso">
          Acesso restrito. Esta área destina-se
          exclusivamente à administração da plataforma.
        </div>

      </section>

    </main>
  );
}