import fs from "fs/promises";
import path from "path";
import { redirect } from "next/navigation";
import { administradorAutenticado } from "@/lib/admin-auth";
import AdminAcoesSubmissao from "@/components/AdminAcoesSubmissao";

interface Submissao {
  id: string;
  estado: string;
  dataSubmissao: string;
  tipo: string;
  titulo: string;
  autor: string;
  instituicao: string;
  email: string;
  orcid: string;
  area: string;
  provincia: string;
  ano: string;
  palavrasChave: string[];
  resumo: string;
  documento: {
    nomeOriginal: string;
    nomeGuardado: string;
    tamanho: number;
    tipo: string;
  };
}

async function obterSubmissoes(): Promise<Submissao[]> {
  const pastaBase = path.join(
    process.cwd(),
    "data",
    "submissoes"
  );

  try {
    const pastas = await fs.readdir(
      pastaBase,
      { withFileTypes: true }
    );

    const resultados: Submissao[] = [];

    for (const pasta of pastas) {
      if (!pasta.isDirectory()) continue;

      const caminhoJson = path.join(
        pastaBase,
        pasta.name,
        "submissao.json"
      );

      try {
        const conteudo = await fs.readFile(
          caminhoJson,
          "utf-8"
        );

        const submissao =
          JSON.parse(conteudo) as Submissao;

        resultados.push(submissao);
      } catch {
        continue;
      }
    }

    resultados.sort(
      (a, b) =>
        new Date(b.dataSubmissao).getTime() -
        new Date(a.dataSubmissao).getTime()
    );

    return resultados;
  } catch {
    return [];
  }
}

function formatarData(data: string) {
  return new Intl.DateTimeFormat(
    "pt-PT",
    {
      dateStyle: "medium",
      timeStyle: "short",
    }
  ).format(new Date(data));
}

function formatarTipo(tipo: string) {
  const tipos: Record<string, string> = {
    artigo: "Artigo científico",
    tese: "Tese",
    dissertacao: "Dissertação",
    monografia: "Monografia",
    relatorio: "Relatório técnico",
    outro: "Outro",
  };

  return tipos[tipo] || tipo;
}

export default async function AdminSubmissoesPage() {
  const autenticado =
    await administradorAutenticado();

  if (!autenticado) {
    redirect("/login");
  }

  const submissoes =
    await obterSubmissoes();

  const total = submissoes.length;

  const emAnalise =
    submissoes.filter(
      (item) =>
        item.estado === "Em análise"
    ).length;

  const aprovadas =
    submissoes.filter(
      (item) =>
        item.estado === "Aprovada"
    ).length;

  const rejeitadas =
    submissoes.filter(
      (item) =>
        item.estado === "Rejeitada"
    ).length;

  return (
    <main className="admin-submissoes-page">

      <section className="admin-submissoes-header">
        <div>

          <span className="admin-kicker">
            ADMINISTRAÇÃO
          </span>

          <h1>
            Submissões do Repositório
          </h1>

          <p>
            Analise os trabalhos enviados
            para o Repositório AGROINOVA ANGOLA.
          </p>

        </div>
      </section>

      <section className="admin-indicadores">

        <div className="admin-indicador">
          <span>Total</span>
          <strong>{total}</strong>
        </div>

        <div className="admin-indicador">
          <span>Em análise</span>
          <strong>{emAnalise}</strong>
        </div>

        <div className="admin-indicador">
          <span>Aprovadas</span>
          <strong>{aprovadas}</strong>
        </div>

        <div className="admin-indicador">
          <span>Rejeitadas</span>
          <strong>{rejeitadas}</strong>
        </div>

      </section>

      <section className="admin-lista">

        <div className="admin-lista-header">

          <div>

            <span className="admin-label">
              REPOSITÓRIO
            </span>

            <h2>
              Trabalhos submetidos
            </h2>

          </div>

        </div>

        {submissoes.length === 0 ? (

          <div className="admin-vazio">

            <h3>
              Ainda não existem submissões.
            </h3>

            <p>
              Quando um autor enviar um
              trabalho, ele aparecerá aqui
              para análise.
            </p>

          </div>

        ) : (

          <div className="admin-tabela">

            {submissoes.map(
              (submissao) => (

                <article
                  key={submissao.id}
                  className="admin-card"
                >

                  <div className="admin-card-topo">

                    <span className="admin-id">
                      {submissao.id}
                    </span>

                    <span
                      className={`admin-estado ${
                        submissao.estado ===
                        "Em análise"
                          ? "estado-analise"
                          : submissao.estado ===
                            "Aprovada"
                          ? "estado-aprovada"
                          : "estado-rejeitada"
                      }`}
                    >
                      {submissao.estado}
                    </span>

                  </div>

                  <h3>
                    {submissao.titulo}
                  </h3>

                  <div className="admin-detalhes">

                    <div>
                      <span>Autor</span>

                      <strong>
                        {submissao.autor}
                      </strong>
                    </div>

                    <div>
                      <span>Tipo</span>

                      <strong>
                        {formatarTipo(
                          submissao.tipo
                        )}
                      </strong>
                    </div>

                    <div>
                      <span>Área</span>

                      <strong>
                        {submissao.area}
                      </strong>
                    </div>

                    <div>
                      <span>Província</span>

                      <strong>
                        {submissao.provincia ||
                          "Não indicada"}
                      </strong>
                    </div>

                    <div>
                      <span>Ano</span>

                      <strong>
                        {submissao.ano}
                      </strong>
                    </div>

                    <div>
                      <span>Submetido em</span>

                      <strong>
                        {formatarData(
                          submissao.dataSubmissao
                        )}
                      </strong>
                    </div>

                  </div>

                  <div className="admin-resumo">

                    <span>
                      RESUMO
                    </span>

                    <p>
                      {submissao.resumo}
                    </p>

                  </div>

                  <div className="admin-documento">

                    <div>

                      <span>
                        DOCUMENTO
                      </span>

                      <strong>
                        {
                          submissao.documento
                            .nomeOriginal
                        }
                      </strong>

                    </div>

                    <span>
                      PDF
                    </span>

                  </div>

                  <AdminAcoesSubmissao
                    id={submissao.id}
                    estado={submissao.estado}
                  />

                </article>

              )
            )}

          </div>

        )}

      </section>

    </main>
  );
}