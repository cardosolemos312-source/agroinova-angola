
"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

type Modo = "pedir" | "definir";

export default function RecuperarPalavraPassePage() {
  const [modo, setModo] = useState<Modo>("pedir");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmarPassword, setConfirmarPassword] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");
  const [aProcessar, setAProcessar] = useState(false);
  const [sessaoValida, setSessaoValida] = useState(false);

  useEffect(() => {
    let ativo = true;

    async function verificarLigacao() {
      const parametros = new URLSearchParams(window.location.search);
      const hash = window.location.hash;

      const aDefinir =
        parametros.get("modo") === "definir" ||
        hash.includes("type=recovery");

      if (!aDefinir) return;

      if (ativo) {
        setModo("definir");
        setMensagem("");
        setErro("");
      }

      try {
        const supabase = createClient();

        const { data, error } = await supabase.auth.getSession();

        if (error) throw error;

        if (ativo) {
          setSessaoValida(Boolean(data.session));
          if (!data.session) {
            setErro(
              "A ligação de recuperação não está válida ou expirou. Solicita um novo e-mail.",
            );
          }
        }
      } catch {
        if (ativo) {
          setSessaoValida(false);
          setErro(
            "Não foi possível validar a ligação. Solicita um novo e-mail de recuperação.",
          );
        }
      }
    }

    void verificarLigacao();

    return () => {
      ativo = false;
    };
  }, []);

  async function submeterPedido(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErro("");
    setMensagem("");
    setAProcessar(true);

    try {
      const supabase = createClient();

      const { error } = await supabase.auth.resetPasswordForEmail(
        email.trim(),
        {
          redirectTo: `${window.location.origin}/mercado/recuperar?modo=definir`,
        },
      );

      if (error) throw error;

      setMensagem(
        "Se existir uma conta associada a este e-mail, receberás uma mensagem com as instruções de recuperação. Verifica também a pasta de spam.",
      );
    } catch (e) {
      setErro(
        e instanceof Error
          ? e.message
          : "Não foi possível enviar o pedido. Tenta novamente.",
      );
    } finally {
      setAProcessar(false);
    }
  }

  async function submeterNovaPassword(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();
    setErro("");
    setMensagem("");

    if (!sessaoValida) {
      setErro(
        "A ligação não é válida. Solicita um novo e-mail de recuperação.",
      );
      return;
    }

    if (password.length < 8) {
      setErro("A nova palavra-passe deve ter pelo menos 8 caracteres.");
      return;
    }

    if (password !== confirmarPassword) {
      setErro("As palavras-passe não coincidem.");
      return;
    }

    setAProcessar(true);

    try {
      const supabase = createClient();

      const { error } = await supabase.auth.updateUser({
        password,
      });

      if (error) throw error;

      setPassword("");
      setConfirmarPassword("");
      setMensagem(
        "Palavra-passe alterada com sucesso. Já podes iniciar sessão com a nova palavra-passe.",
      );
      setSessaoValida(false);
    } catch (e) {
      setErro(
        e instanceof Error
          ? e.message
          : "Não foi possível alterar a palavra-passe. Solicita uma nova ligação.",
      );
    } finally {
      setAProcessar(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12 text-gray-900">
      <div className="mx-auto max-w-lg">
        <Link
          href="/mercado"
          className="text-sm font-semibold text-green-800 hover:underline"
        >
          ← Voltar ao Mercado AGROINOVA
        </Link>

        <section className="mt-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-9">
          <p className="text-sm font-bold uppercase tracking-wider text-green-800">
            AGROINOVA ANGOLA
          </p>

          <div className="mt-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-800">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-7 w-7"
              aria-hidden="true"
            >
              <rect x="4" y="10" width="16" height="11" rx="2" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3" />
              <path d="M12 14v3" />
            </svg>
          </div>

          <h1 className="mt-5 text-3xl font-bold">
            {modo === "pedir"
              ? "Recuperar palavra-passe"
              : "Definir nova palavra-passe"}
          </h1>

          <p className="mt-3 leading-6 text-gray-600">
            {modo === "pedir"
              ? "Introduz o e-mail da tua conta de vendedor. Enviaremos as instruções para recuperares o acesso ao Mercado."
              : "Cria uma nova palavra-passe para voltares a aceder à tua conta de vendedor."}
          </p>

          {modo === "pedir" ? (
            <form onSubmit={submeterPedido} className="mt-7 space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold"
                >
                  E-mail da conta
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="exemplo@email.com"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
                />
              </div>

              <button
                type="submit"
                disabled={aProcessar}
                className="w-full rounded-xl bg-green-800 px-5 py-3 font-semibold text-white transition hover:bg-green-900 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {aProcessar ? "A enviar..." : "Enviar recuperação"}
              </button>
            </form>
          ) : (
            <form
              onSubmit={submeterNovaPassword}
              className="mt-7 space-y-5"
            >
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold"
                >
                  Nova palavra-passe
                </label>
                <input
                  id="password"
                  type="password"
                  autoComplete="new-password"
                  minLength={8}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Pelo menos 8 caracteres"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
                />
              </div>

              <div>
                <label
                  htmlFor="confirmarPassword"
                  className="mb-2 block text-sm font-semibold"
                >
                  Confirmar palavra-passe
                </label>
                <input
                  id="confirmarPassword"
                  type="password"
                  autoComplete="new-password"
                  minLength={8}
                  required
                  value={confirmarPassword}
                  onChange={(e) => setConfirmarPassword(e.target.value)}
                  placeholder="Repete a nova palavra-passe"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
                />
              </div>

              <button
                type="submit"
                disabled={aProcessar || !sessaoValida}
                className="w-full rounded-xl bg-green-800 px-5 py-3 font-semibold text-white transition hover:bg-green-900 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {aProcessar ? "A guardar..." : "Guardar nova palavra-passe"}
              </button>
            </form>
          )}

          {erro && (
            <div
              role="alert"
              className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800"
            >
              {erro}
            </div>
          )}

          {mensagem && (
            <div
              role="status"
              className="mt-5 rounded-xl border border-green-200 bg-green-50 p-4 text-sm leading-6 text-green-900"
            >
              {mensagem}
            </div>
          )}

          {modo === "definir" && mensagem && (
            <Link
              href="/mercado/entrar"
              className="mt-5 block w-full rounded-xl border border-green-800 px-5 py-3 text-center font-semibold text-green-900 hover:bg-green-50"
            >
              Ir para iniciar sessão
            </Link>
          )}

          <div className="mt-7 border-t border-gray-100 pt-5 text-center text-sm text-gray-600">
            Já te lembras da palavra-passe?{" "}
            <Link
              href="/mercado/entrar"
              className="font-semibold text-green-800 hover:underline"
            >
              Iniciar sessão
            </Link>
          </div>
        </section>

        <p className="mt-6 text-center text-xs leading-5 text-gray-500">
          A recuperação destina-se às contas de vendedor do Mercado AGROINOVA.
          Nunca partilhes a tua palavra-passe ou o link de recuperação.
        </p>
      </div>
    </main>
  );
}
