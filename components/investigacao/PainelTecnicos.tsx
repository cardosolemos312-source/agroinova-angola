
"use client";

import { useCallback, useEffect, useState } from "react";

type Tecnico = {
  id?: string | number;
  nome?: string;
  nome_completo?: string;
  formacao?: string;
  especialidade?: string;
  provincia?: string;
  instituicao?: string;
  biografia?: string;
  foto_url?: string;
  fotografia_url?: string;
  email?: string;
  telefone?: string;
  livro_titulo?: string;
  livro_descricao?: string;
  livro_capa_url?: string;
  livro_pdf_url?: string;
};

const texto = (valor?: string) => valor?.trim() || "";

function enderecoSeguro(url?: string) {
  const valor = texto(url);

  if (!valor) return "";

  try {
    const endereco = new URL(valor);
    if (endereco.protocol === "https:" || endereco.protocol === "http:") {
      return endereco.href;
    }
  } catch {
    return "";
  }

  return "";
}

export default function PainelTecnicos() {
  const [tecnicos, setTecnicos] = useState<Tecnico[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  const carregarTecnicos = useCallback(async () => {
    setCarregando(true);
    setErro("");

    try {
      const resposta = await fetch("/api/admin/tecnicos", {
        method: "GET",
        cache: "no-store",
      });

      const conteudo = await resposta.text();

      let resultado: unknown;

      try {
        resultado = conteudo ? JSON.parse(conteudo) : {};
      } catch {
        throw new Error(
          "O servidor devolveu uma resposta inválida. Verifique a API e a configuração da publicação."
        );
      }

      if (!resposta.ok) {
        const mensagem =
          typeof resultado === "object" &&
          resultado !== null &&
          "error" in resultado &&
          typeof resultado.error === "string"
            ? resultado.error
            : "Não foi possível carregar os técnicos.";

        throw new Error(mensagem);
      }

      let lista: Tecnico[] = [];

      if (Array.isArray(resultado)) {
        lista = resultado as Tecnico[];
      } else if (typeof resultado === "object" && resultado !== null) {
        const objeto = resultado as {
          tecnicos?: Tecnico[];
          data?: Tecnico[];
        };

        if (Array.isArray(objeto.tecnicos)) {
          lista = objeto.tecnicos;
        } else if (Array.isArray(objeto.data)) {
          lista = objeto.data;
        }
      }

      setTecnicos(lista);
    } catch (erroConsulta) {
      setErro(
        erroConsulta instanceof Error
          ? erroConsulta.message
          : "Ocorreu um erro ao carregar os técnicos."
      );
    } finally {
      setCarregando(false);
    }
  }, []);

  useEffect(() => {
    void carregarTecnicos();
  }, [carregarTecnicos]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 via-white to-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 overflow-hidden rounded-3xl bg-gradient-to-r from-green-950 via-green-800 to-green-700 p-7 text-white shadow-xl sm:p-10">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-green-200">
            AGROINOVA ANGOLA
          </p>

          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Técnicos, investigadores e publicações
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-green-50 sm:text-base">
            Conheça os especialistas e consulte os seus livros, documentos
            técnicos e publicações científicas disponibilizados na plataforma.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3">
              <span className="block text-2xl font-extrabold">
                {tecnicos.length}
              </span>
              <span className="text-sm text-green-100">
                Especialistas registados
              </span>
            </div>

            <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3">
              <span className="block text-2xl font-extrabold">
                {tecnicos.filter((t) => enderecoSeguro(t.livro_pdf_url)).length}
              </span>
              <span className="text-sm text-green-100">
                PDFs disponíveis
              </span>
            </div>

            <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3">
              <span className="block text-2xl font-extrabold">
                {
                  tecnicos.filter((t) =>
                    enderecoSeguro(t.livro_capa_url)
                  ).length
                }
              </span>
              <span className="text-sm text-green-100">
                Capas disponíveis
              </span>
            </div>
          </div>
        </header>

        <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Directório de especialistas
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Consulte o perfil e as publicações de cada técnico.
            </p>
          </div>

          <button
            type="button"
            onClick={() => void carregarTecnicos()}
            disabled={carregando}
            className="rounded-xl border border-green-800 bg-white px-5 py-3 text-sm font-bold text-green-900 shadow-sm transition hover:bg-green-50 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {carregando ? "A carregar..." : "Actualizar lista"}
          </button>
        </div>

        {carregando && (
          <div className="rounded-2xl border border-green-100 bg-white p-10 text-center shadow-sm">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-green-100 border-t-green-700" />
            <p className="mt-4 font-semibold text-gray-700">
              A carregar os especialistas e as publicações...
            </p>
          </div>
        )}

        {!carregando && erro && (
          <div
            role="alert"
            className="rounded-2xl border border-red-200 bg-red-50 p-6"
          >
            <h3 className="font-bold text-red-900">
              Não foi possível carregar os dados
            </h3>
            <p className="mt-2 text-sm leading-6 text-red-800">{erro}</p>
            <p className="mt-2 text-sm text-red-800">
              Se o problema acontecer apenas no site publicado, confirme a
              configuração da API e as variáveis de ambiente na Vercel.
            </p>
            <button
              type="button"
              onClick={() => void carregarTecnicos()}
              className="mt-4 rounded-lg bg-red-800 px-4 py-2 font-bold text-white hover:bg-red-900"
            >
              Tentar novamente
            </button>
          </div>
        )}

        {!carregando && !erro && tecnicos.length === 0 && (
          <div className="rounded-2xl border border-dashed border-green-300 bg-white p-10 text-center">
            <h3 className="text-xl font-bold text-gray-900">
              Ainda não existem técnicos para apresentar
            </h3>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Quando os registos estiverem disponíveis na base de dados, serão
              apresentados aqui.
            </p>
          </div>
        )}

        {!carregando && !erro && tecnicos.length > 0 && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {tecnicos.map((tecnico, indice) => {
              const nome =
                texto(tecnico.nome_completo) ||
                texto(tecnico.nome) ||
                "Especialista AGROINOVA";

              const foto = enderecoSeguro(
                tecnico.foto_url || tecnico.fotografia_url
              );

              const capa = enderecoSeguro(tecnico.livro_capa_url);
              const pdf = enderecoSeguro(tecnico.livro_pdf_url);

              const temPublicacao = Boolean(
                texto(tecnico.livro_titulo) ||
                  texto(tecnico.livro_descricao) ||
                  capa ||
                  pdf
              );

              return (
                <article
                  key={tecnico.id ?? `${nome}-${indice}`}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="h-2 bg-gradient-to-r from-green-900 via-green-600 to-lime-400" />

                  <div className="p-5">
                    <div className="flex items-start gap-4">
                      {foto ? (
                        <img
                          src={foto}
                          alt={`Fotografia de ${nome}`}
                          className="h-20 w-20 shrink-0 rounded-2xl border border-gray-200 bg-gray-50 object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-green-100 bg-green-50 text-2xl font-extrabold text-green-800">
                          {nome.charAt(0).toUpperCase()}
                        </div>
                      )}

                      <div className="min-w-0 flex-1">
                        <h3 className="break-words text-lg font-extrabold text-gray-900">
                          {nome}
                        </h3>

                        {tecnico.especialidade && (
                          <p className="mt-1 text-sm font-semibold text-green-800">
                            {tecnico.especialidade}
                          </p>
                        )}

                        {tecnico.formacao && (
                          <p className="mt-1 text-sm text-gray-600">
                            {tecnico.formacao}
                          </p>
                        )}
                      </div>
                    </div>

                    {(tecnico.instituicao ||
                      tecnico.provincia ||
                      tecnico.email ||
                      tecnico.telefone) && (
                      <div className="mt-5 space-y-2 border-t border-gray-100 pt-4 text-sm text-gray-600">
                        {tecnico.instituicao && (
                          <p>
                            <span className="font-bold text-gray-800">
                              Instituição:
                            </span>{" "}
                            {tecnico.instituicao}
                          </p>
                        )}

                        {tecnico.provincia && (
                          <p>
                            <span className="font-bold text-gray-800">
                              Província:
                            </span>{" "}
                            {tecnico.provincia}
                          </p>
                        )}

                        {tecnico.email && (
                          <p className="break-all">
                            <span className="font-bold text-gray-800">
                              E-mail:
                            </span>{" "}
                            {tecnico.email}
                          </p>
                        )}

                        {tecnico.telefone && (
                          <p>
                            <span className="font-bold text-gray-800">
                              Telefone:
                            </span>{" "}
                            {tecnico.telefone}
                          </p>
                        )}
                      </div>
                    )}

                    {tecnico.biografia && (
                      <p className="mt-4 whitespace-pre-line text-sm leading-6 text-gray-600">
                        {tecnico.biografia}
                      </p>
                    )}
                  </div>

                  {temPublicacao && (
                    <section className="border-t border-green-100 bg-gradient-to-b from-green-50/80 to-white px-5 py-5">
                      <div className="mb-4">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-green-800">
                          Publicações
                        </span>
                        <h4 className="mt-1 text-lg font-extrabold text-green-950">
                          {texto(tecnico.livro_titulo) ||
                            "Livro ou documento técnico"}
                        </h4>
                      </div>

                      <div className="flex flex-col gap-4 sm:flex-row">
                        <div className="mx-auto w-36 shrink-0 sm:mx-0">
                          {capa ? (
                            <a
                              href={capa}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Ver capa em tamanho completo"
                              className="block"
                            >
                              <img
                                src={capa}
                                alt={`Capa de ${texto(tecnico.livro_titulo) || "publicação"}`}
                                className="h-48 w-36 rounded-xl border border-gray-200 bg-white object-cover shadow-lg transition duration-300 group-hover:shadow-xl"
                                loading="lazy"
                              />
                            </a>
                          ) : (
                            <div className="flex h-48 w-36 flex-col items-center justify-center rounded-xl border-2 border-dashed border-green-200 bg-white p-3 text-center">
                              <span className="text-sm font-bold text-green-900">
                                Capa não disponível
                              </span>
                              <span className="mt-2 text-xs leading-5 text-gray-500">
                                A imagem da publicação não foi encontrada.
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="min-w-0 flex-1">
                          {tecnico.livro_descricao && (
                            <p className="whitespace-pre-line text-sm leading-6 text-gray-600">
                              {tecnico.livro_descricao}
                            </p>
                          )}

                          {pdf ? (
                            <div className="mt-4 flex flex-col gap-2">
                              <a
                                href={pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-green-800 px-4 py-3 text-center text-sm font-bold text-white shadow-sm transition hover:bg-green-900"
                              >
                                Abrir PDF
                              </a>

                              <a
                                href={pdf}
                                download
                                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-green-800 bg-white px-4 py-3 text-center text-sm font-bold text-green-900 transition hover:bg-green-100"
                              >
                                Descarregar PDF
                              </a>
                            </div>
                          ) : (
                            <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm leading-5 text-amber-900">
                              O endereço do PDF não está disponível para esta
                              publicação.
                            </p>
                          )}
                        </div>
                      </div>
                    </section>
                  )}

                  {!temPublicacao && (
                    <div className="border-t border-gray-100 px-5 py-4">
                      <p className="text-sm text-gray-500">
                        Ainda não foi associada nenhuma publicação a este
                        especialista.
                      </p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}

        <footer className="mt-10 border-t border-gray-200 py-5 text-center text-xs leading-5 text-gray-500">
          AGROINOVA ANGOLA — Conhecimento, Tecnologia e Inovação ao Serviço do
          Campo Angolano.
        </footer>
      </div>
    </main>
  );
}
