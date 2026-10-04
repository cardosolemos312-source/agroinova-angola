import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import Link from "next/link";

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

interface PaginaRepositorioProps {
  params: Promise<{
    id: string;
  }>;
}

async function obterSubmissao(
  id: string
): Promise<Submissao | null> {
  const pastaBase = path.join(
    process.cwd(),
    "data",
    "submissoes"
  );

  const caminhoJson = path.join(
    pastaBase,
    id,
    "submissao.json"
  );

  try {
    const conteudo = await fs.readFile(
      caminhoJson,
      "utf-8"
    );

    return JSON.parse(conteudo) as Submissao;
  } catch {
    return null;
  }
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

export default async function PaginaRepositorio({
  params,
}: PaginaRepositorioProps) {
  const { id } = await params;

  const submissao = await obterSubmissao(id);

  if (!submissao) {
    notFound();
  }

  /*
   * Regra de segurança:
   * apenas trabalhos aprovados podem ser
   * apresentados publicamente.
   */
  if (submissao.estado !== "Aprovada") {
    notFound();
  }

  const urlDocumento = `/api/repositorio/${submissao.id}/documento`;

  return (
    <main className="repositorio-detalhe-page">

      {/* HERO */}
      <section className="repositorio-detalhe-hero">
        <div className="repositorio-detalhe-container">

          <Link
            href="/biblioteca"
            className="repositorio-voltar"
          >
            ← Voltar à Biblioteca
          </Link>

          <span className="repositorio-kicker">
            REPOSITÓRIO AGROINOVA
          </span>

          <div className="repositorio-tipo">
            {formatarTipo(submissao.tipo)}
          </div>

          <h1>
            {submissao.titulo}
          </h1>

          <p className="repositorio-autor">
            {submissao.autor}
          </p>

          {submissao.instituicao && (
            <p className="repositorio-instituicao">
              {submissao.instituicao}
            </p>
          )}

        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="repositorio-detalhe-conteudo">
        <div className="repositorio-detalhe-grid">

          {/* PRINCIPAL */}
          <article className="repositorio-detalhe-principal">

            <div className="repositorio-bloco">

              <span className="repositorio-label">
                RESUMO
              </span>

              <h2>
                Resumo
              </h2>

              <p className="repositorio-resumo">
                {submissao.resumo}
              </p>

            </div>

            {submissao.palavrasChave.length > 0 && (
              <div className="repositorio-bloco">

                <span className="repositorio-label">
                  DESCRITORES
                </span>

                <h2>
                  Palavras-chave
                </h2>

                <div className="repositorio-tags">
                  {submissao.palavrasChave.map(
                    (palavra) => (
                      <span key={palavra}>
                        {palavra}
                      </span>
                    )
                  )}
                </div>

              </div>
            )}

            {/* DOCUMENTO */}
            <div className="repositorio-documento">

              <div>
                <span className="repositorio-label">
                  DOCUMENTO
                </span>

                <h2>
                  Documento completo
                </h2>

                <p>
                  {submissao.documento.nomeOriginal}
                </p>
              </div>

              <div className="repositorio-documento-acoes">

                <a
                  href={urlDocumento}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repositorio-btn-principal"
                >
                  Ler documento
                </a>

                <a
                  href={urlDocumento}
                  download
                  className="repositorio-btn-secundario"
                >
                  Descarregar PDF
                </a>

              </div>

            </div>

          </article>

          {/* INFORMAÇÕES */}
          <aside className="repositorio-detalhe-aside">

            <div className="repositorio-ficha">

              <span className="repositorio-label">
                INFORMAÇÕES
              </span>

              <h2>
                Dados do trabalho
              </h2>

              <dl>

                <div>
                  <dt>Tipo</dt>
                  <dd>
                    {formatarTipo(submissao.tipo)}
                  </dd>
                </div>

                <div>
                  <dt>Autor</dt>
                  <dd>
                    {submissao.autor}
                  </dd>
                </div>

                {submissao.instituicao && (
                  <div>
                    <dt>Instituição</dt>
                    <dd>
                      {submissao.instituicao}
                    </dd>
                  </div>
                )}

                <div>
                  <dt>Área</dt>
                  <dd>
                    {submissao.area}
                  </dd>
                </div>

                {submissao.provincia && (
                  <div>
                    <dt>Província</dt>
                    <dd>
                      {submissao.provincia}
                    </dd>
                  </div>
                )}

                <div>
                  <dt>Ano</dt>
                  <dd>
                    {submissao.ano}
                  </dd>
                </div>

                <div>
                  <dt>Identificador</dt>
                  <dd>
                    {submissao.id}
                  </dd>
                </div>

              </dl>

            </div>

            <div className="repositorio-nota">

              <strong>
                Documento aprovado
              </strong>

              <p>
                Este trabalho foi analisado e
                aprovado pela administração do
                Repositório AGROINOVA ANGOLA.
              </p>

            </div>

          </aside>

        </div>
      </section>

    </main>
  );
}