
"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

const provincias = [
  "Bengo",
  "Benguela",
  "Bié",
  "Cabinda",
  "Cuando",
  "Cubango",
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

const tiposVendedor = [
  { value: "produtor", label: "Produtor agrícola" },
  { value: "fazenda", label: "Fazenda" },
  { value: "cooperativa", label: "Cooperativa" },
  { value: "empresa", label: "Empresa" },
] as const;

type TipoVendedor = (typeof tiposVendedor)[number]["value"];
type Modo = "entrar" | "registar";

type Utilizador = {
  id: string;
  email?: string;
  user_metadata?: Record<string, unknown>;
};

function tipoValido(valor: unknown): valor is TipoVendedor {
  return (
    typeof valor === "string" &&
    tiposVendedor.some((item) => item.value === valor)
  );
}

export default function EntrarMercadoPage() {
  const router = useRouter();

  const [modo, setModo] = useState<Modo>("entrar");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telefone, setTelefone] = useState("");
  const [tipo, setTipo] = useState<TipoVendedor>("produtor");
  const [provincia, setProvincia] = useState("Huambo");
  const [municipio, setMunicipio] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");
  const [aProcessar, setAProcessar] = useState(false);

  useEffect(() => {
    const parametros = new URLSearchParams(window.location.search);

    if (parametros.get("modo") === "registar") {
      setModo("registar");
    }
  }, []);

  function destinoAposAutenticacao(): string {
    const parametros = new URLSearchParams(window.location.search);
    const destino = parametros.get("redirect");

    if (
      destino &&
      destino.startsWith("/") &&
      !destino.startsWith("//")
    ) {
      return destino;
    }

    return "/mercado/perfil";
  }

  async function garantirPerfil(
    supabase: ReturnType<typeof createClient>,
    user: Utilizador,
  ): Promise<void> {
    const { data: existente, error: erroConsulta } = await supabase
      .from("mercado_vendedores")
      .select("id")
      .eq("user_id", user.id)
      .maybeSingle();

    if (erroConsulta) {
      console.error("Erro ao consultar perfil do vendedor:", {
        code: erroConsulta.code,
        message: erroConsulta.message,
        details: erroConsulta.details,
        hint: erroConsulta.hint,
      });

      throw new Error(
        `Não foi possível consultar o perfil (${erroConsulta.code}): ${erroConsulta.message}`,
      );
    }

    if (existente) {
      return;
    }

    const metadata = user.user_metadata ?? {};

    const nomeGuardado =
      typeof metadata.nome === "string" ? metadata.nome.trim() : "";

    const provinciaGuardada =
      typeof metadata.provincia === "string"
        ? metadata.provincia.trim()
        : "";

    if (!nomeGuardado || !provinciaGuardada) {
      throw new Error(
        "A conta existe, mas faltam dados do vendedor. Contacta o suporte ou completa o perfil.",
      );
    }

    const tipoGuardado: TipoVendedor = tipoValido(metadata.tipo)
      ? metadata.tipo
      : "produtor";

    const telefoneGuardado =
      typeof metadata.telefone === "string"
        ? metadata.telefone.trim() || null
        : null;

    const municipioGuardado =
      typeof metadata.municipio === "string"
        ? metadata.municipio.trim() || null
        : null;

    const { error: erroInsercao } = await supabase
      .from("mercado_vendedores")
      .insert({
        user_id: user.id,
        nome: nomeGuardado,
        tipo: tipoGuardado,
        telefone: telefoneGuardado,
        provincia: provinciaGuardada,
        municipio: municipioGuardado,
        estado: "ativo",
      });

    if (erroInsercao) {
      console.error("Erro ao criar perfil do vendedor:", {
        code: erroInsercao.code,
        message: erroInsercao.message,
        details: erroInsercao.details,
        hint: erroInsercao.hint,
      });

      throw new Error(
        `Falha ao criar perfil (${erroInsercao.code}): ${erroInsercao.message}`,
      );
    }
  }

  async function submeter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErro("");
    setMensagem("");
    setAProcessar(true);

    try {
      const supabase = createClient();

      if (modo === "registar") {
        if (!nome.trim() || !provincia) {
          throw new Error("Preenche o nome e a província.");
        }

        if (password.length < 8) {
          throw new Error(
            "A palavra-passe deve ter pelo menos 8 caracteres.",
          );
        }

        if (!tipoValido(tipo)) {
          throw new Error("Seleciona um tipo de vendedor válido.");
        }

        const { data, error: erroRegisto } =
          await supabase.auth.signUp({
            email: email.trim(),
            password,
            options: {
              data: {
                nome: nome.trim(),
                tipo,
                telefone: telefone.trim(),
                provincia,
                municipio: municipio.trim(),
              },
            },
          });

        if (erroRegisto) {
          console.error("Erro original do registo Supabase:", {
            code: erroRegisto.code,
            message: erroRegisto.message,
            status: erroRegisto.status,
          });

          throw new Error(
            `Falha no registo (${erroRegisto.code || erroRegisto.status}): ${erroRegisto.message}`,
          );
        }

        if (data.session && data.user) {
          await garantirPerfil(supabase, data.user);

          setMensagem(
            "Conta criada com sucesso. A abrir o teu perfil de gestão...",
          );

          router.push(destinoAposAutenticacao());
          router.refresh();
          return;
        }

        setMensagem(
          "Registo iniciado. Confirma o teu email. Depois, inicia sessão para aceder ao teu perfil de gestão.",
        );

        setModo("entrar");
        setPassword("");
      } else {
        const { data, error: erroLogin } =
          await supabase.auth.signInWithPassword({
            email: email.trim(),
            password,
          });

        if (erroLogin) {
          console.error("Erro original do Supabase:", {
            code: erroLogin.code,
            message: erroLogin.message,
            status: erroLogin.status,
          });

          throw new Error(
            `Falha na autenticação (${erroLogin.code ?? "desconhecido"}): ${erroLogin.message}`,
          );
        }

        if (!data.user) {
          throw new Error(
            "A autenticação não devolveu os dados da conta.",
          );
        }

        await garantirPerfil(supabase, data.user);

        setMensagem(
          "Sessão iniciada. A abrir o teu perfil de gestão...",
        );

        router.push(destinoAposAutenticacao());
        router.refresh();
        return;
      }
    } catch (e) {
      const mensagemErro =
        e instanceof Error
          ? e.message
          : "Ocorreu um erro inesperado. Tenta novamente.";

      console.error("Erro no acesso ao Mercado:", mensagemErro);
      setErro(mensagemErro);
    } finally {
      setAProcessar(false);
    }
  }

  function mudarModo(novoModo: Modo) {
    setModo(novoModo);
    setErro("");
    setMensagem("");
    setPassword("");
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12 text-gray-900">
      <div className="mx-auto max-w-xl">
        <Link
          href="/mercado"
          className="text-sm font-semibold text-green-800 hover:underline"
        >
          ← Voltar ao Mercado AGROINOVA
        </Link>

        <section className="mt-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-9">
          <p className="text-sm font-bold uppercase tracking-wider text-green-800">
            Mercado AGROINOVA
          </p>

          <h1 className="mt-3 text-3xl font-bold">
            {modo === "entrar"
              ? "Bem-vindo de volta"
              : "Criar conta de vendedor"}
          </h1>

          <p className="mt-3 leading-6 text-gray-600">
            Acede à plataforma para gerir o teu perfil e preparar
            os teus anúncios de produtos agrícolas e equipamentos.
          </p>

          <div className="mt-7 grid grid-cols-2 rounded-xl bg-gray-100 p-1">
            <button
              type="button"
              onClick={() => mudarModo("entrar")}
              className={`rounded-lg px-3 py-3 text-sm font-semibold ${
                modo === "entrar"
                  ? "bg-white text-green-900 shadow-sm"
                  : "text-gray-600"
              }`}
            >
              Iniciar sessão
            </button>

            <button
              type="button"
              onClick={() => mudarModo("registar")}
              className={`rounded-lg px-3 py-3 text-sm font-semibold ${
                modo === "registar"
                  ? "bg-white text-green-900 shadow-sm"
                  : "text-gray-600"
              }`}
            >
              Criar conta
            </button>
          </div>

          <form onSubmit={submeter} className="mt-7 space-y-5">
            {modo === "registar" && (
              <>
                <div>
                  <label
                    htmlFor="nome"
                    className="mb-2 block text-sm font-medium"
                  >
                    Nome do vendedor ou organização
                  </label>

                  <input
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                    maxLength={120}
                    autoComplete="name"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100"
                    placeholder="Nome completo ou nome da organização"
                  />
                </div>

                <div>
                  <label
                    htmlFor="tipo"
                    className="mb-2 block text-sm font-medium"
                  >
                    Tipo de vendedor
                  </label>

                  <select
                    id="tipo"
                    value={tipo}
                    onChange={(e) => {
                      const valor = e.target.value;

                      if (tipoValido(valor)) {
                        setTipo(valor);
                      }
                    }}
                    required
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3"
                  >
                    {tiposVendedor.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="telefone"
                    className="mb-2 block text-sm font-medium"
                  >
                    Telefone (opcional)
                  </label>

                  <input
                    id="telefone"
                    type="tel"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    maxLength={30}
                    autoComplete="tel"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3"
                    placeholder="+244 ..."
                  />
                </div>

                <div>
                  <label
                    htmlFor="provincia"
                    className="mb-2 block text-sm font-medium"
                  >
                    Província
                  </label>

                  <select
                    id="provincia"
                    value={provincia}
                    onChange={(e) => setProvincia(e.target.value)}
                    required
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3"
                  >
                    {provincias.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="municipio"
                    className="mb-2 block text-sm font-medium"
                  >
                    Município (opcional)
                  </label>

                  <input
                    id="municipio"
                    value={municipio}
                    onChange={(e) => setMunicipio(e.target.value)}
                    maxLength={100}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3"
                    placeholder="Nome do município"
                  />
                </div>
              </>
            )}

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100"
                placeholder="nome@exemplo.com"
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium"
                >
                  Palavra-passe
                </label>

                {modo === "entrar" && (
                  <Link
                    href="/mercado/recuperar"
                    className="text-sm font-semibold text-green-800 hover:text-green-950 hover:underline"
                  >
                    Esqueci-me da palavra-passe
                  </Link>
                )}
              </div>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                autoComplete={
                  modo === "entrar"
                    ? "current-password"
                    : "new-password"
                }
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100"
                placeholder="Mínimo de 8 caracteres"
              />
            </div>

            {erro && (
              <p
                role="alert"
                className="break-words rounded-xl bg-red-50 p-4 text-sm text-red-800"
              >
                {erro}
              </p>
            )}

            {mensagem && (
              <p
                role="status"
                className="break-words rounded-xl bg-green-50 p-4 text-sm text-green-900"
              >
                {mensagem}
              </p>
            )}

            <button
              type="submit"
              disabled={aProcessar}
              className="w-full rounded-xl bg-green-800 px-5 py-3.5 font-semibold text-white transition hover:bg-green-900 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {aProcessar
                ? "A processar..."
                : modo === "entrar"
                  ? "Iniciar sessão"
                  : "Criar conta de vendedor"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Ao criar uma conta, os teus anúncios não ficam automaticamente
            aprovados. A publicação depende das regras do Mercado.
          </p>
        </section>
      </div>
    </main>
  );
}
