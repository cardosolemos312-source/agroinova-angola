import Link from "next/link";
import fs from "fs/promises";
import path from "path";

interface Documento {
  slug: string;
  titulo: string;
  tipo: string;
  autores: string;
  instituicao: string;
  ano: number;
  area: string;
  tema: string;
  origem: string;
  idioma: string;
  paginas?: string;
  descricao: string;
  url: string;
  destaque?: boolean;
}

interface SubmissaoRepositorio {
  id: string;
  estado: string;
  tipo: string;
  titulo: string;
  autor: string;
  instituicao: string;
  area: string;
  provincia: string;
  ano: string;
  palavrasChave: string[];
  resumo: string;
}

const documentos: Documento[] = [
  {
    slug: "producao-milho-variedade-agricultura-familiar",
    titulo:
      "Produção de milho variedade na agricultura familiar",
    tipo: "Cartilha técnica",
    autores:
      "José Carlos Cruz; Israel Alexandre Pereira Filho; Marco Aurélio Guerra Pimentel; e outros autores",
    instituicao: "Embrapa Milho e Sorgo",
    ano: 2014,
    area: "Agricultura",
    tema: "Milho",
    origem: "Brasil",
    idioma: "Português",
    paginas: "20 páginas",
    descricao:
      "Orientações para a produção de milho variedade na agricultura familiar, incluindo produção de grãos e produção própria de sementes.",
    url: "https://www.infoteca.cnptia.embrapa.br/infoteca/handle/doc/1098805",
    destaque: true,
  },

  {
    slug: "maize-hybrid-seed-production-manual",
    titulo:
      "Maize Hybrid Seed Production Manual",
    tipo: "Manual técnico",
    autores:
      "John F. MacRobert; Peter Setimela; James Gethi; Mosisa Worku Regasa",
    instituicao: "CIMMYT",
    ano: 2014,
    area: "Agricultura",
    tema: "Milho e sementes",
    origem: "Internacional",
    idioma: "Inglês",
    paginas: "26 páginas",
    descricao:
      "Manual técnico dedicado à produção de sementes híbridas de milho, incluindo produção de sementes, híbridos e melhoramento vegetal.",
    url: "https://knowledgecenter.cimmyt.org/bib/49061",
    destaque: true,
  },

  {
    slug: "fao-angola-relatorio-anual-2025",
    titulo:
      "FAO Angola Relatório Anual 2025",
    tipo: "Relatório",
    autores:
      "Organização das Nações Unidas para a Alimentação e a Agricultura",
    instituicao: "FAO Angola",
    ano: 2026,
    area: "Agricultura",
    tema: "Sistemas agroalimentares em Angola",
    origem: "Angola",
    idioma: "Português",
    descricao:
      "Relatório que apresenta as principais actividades e resultados da FAO em Angola durante 2025, incluindo intervenções relacionadas com a transformação dos sistemas agroalimentares.",
    url: "https://www.fao.org/angola/pt",
    destaque: true,
  },
];

const categorias = [
  {
    titulo: "Livros",
    descricao:
      "Livros e obras de referência relacionados com o sector agropecuário.",
    simbolo: "📚",
  },

  {
    titulo: "Artigos científicos",
    descricao:
      "Artigos científicos e publicações académicas.",
    simbolo: "📄",
  },

  {
    titulo: "Teses e dissertações",
    descricao:
      "Investigação académica produzida por estudantes e investigadores.",
    simbolo: "🎓",
  },

  {
    titulo: "Monografias",
    descricao:
      "Trabalhos académicos e estudos sobre temas agropecuários.",
    simbolo: "📑",
  },

  {
    titulo: "Manuais técnicos",
    descricao:
      "Guias e manuais destinados a técnicos, produtores e estudantes.",
    simbolo: "📘",
  },

  {
    titulo: "Relatórios",
    descricao:
      "Relatórios institucionais, técnicos e de investigação.",
    simbolo: "📋",
  },
];

const areas = [
  "Agricultura",
  "Pecuária",
  "Solos",
  "Irrigação",
  "Clima",
  "Mecanização",
  "Agroindústria",
  "Economia agrícola",
];

async function obterTrabalhosAprovados(): Promise<
  SubmissaoRepositorio[]
> {
  const pastaBase = path.join(
    process.cwd(),
    "data",
    "submissoes"
  );

  try {
    const pastas = await fs.readdir(
      pastaBase,
      {
        withFileTypes: true,
      }
    );

    const resultados: SubmissaoRepositorio[] = [];

    for (const pasta of pastas) {
      if (!pasta.isDirectory()) {
        continue;
      }

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
          JSON.parse(
            conteudo
          ) as SubmissaoRepositorio;

        /*
         * Apenas trabalhos aprovados
         * aparecem publicamente.
         */
        if (
          submissao.estado !==
          "Aprovada"
        ) {
          continue;
        }

        resultados.push(submissao);
      } catch {
        continue;
      }
    }

    /*
     * Trabalhos mais recentes primeiro.
     */
    resultados.sort(
      (a, b) =>
        Number(b.ano) -
        Number(a.ano)
    );

    return resultados;
  } catch {
    return [];
  }
}

function formatarTipoRepositorio(
  tipo: string
) {
  const tipos: Record<
    string,
    string
  > = {
    artigo:
      "Artigo científico",

    tese:
      "Tese",

    dissertacao:
      "Dissertação",

    monografia:
      "Monografia",

    relatorio:
      "Relatório técnico",

    outro:
      "Outro",
  };

  return (
    tipos[tipo] ||
    tipo
  );
}

export default async function BibliotecaPage() {
  const destaques =
    documentos.filter(
      (documento) =>
        documento.destaque
    );

  /*
   * Busca automaticamente os trabalhos
   * aprovados no Repositório AGROINOVA.
   */
  const trabalhosAprovados =
    await obterTrabalhosAprovados();

  return (
    <main className="biblioteca-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="biblioteca-hero">

        <div className="biblioteca-container biblioteca-hero-content">

          <span className="biblioteca-kicker">
            BIBLIOTECA AGROINOVA ANGOLA
          </span>

          <h1>
            Conhecimento técnico e científico
            para a agricultura.
          </h1>

          <p>
            Consulte manuais, livros, artigos,
            relatórios, teses, dissertações e
            outros documentos relacionados com
            a agricultura e o desenvolvimento
            agropecuário.
          </p>

          <div className="biblioteca-hero-meta">

            <span>
              Documentos técnicos
            </span>

            <span>
              Investigação científica
            </span>

            <span>
              Produção académica
            </span>

            <span>
              Conhecimento agropecuário
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          PESQUISA
      ===================================================== */}

      <section className="biblioteca-pesquisa">

        <div className="biblioteca-container">

          <div className="biblioteca-pesquisa-box">

            <div>

              <span className="biblioteca-label">
                BASE DE CONHECIMENTO
              </span>

              <h2>
                Encontre um documento
              </h2>

              <p>
                Pesquise por título, autor,
                instituição, cultura, área
                temática ou palavra-chave.
              </p>

            </div>

            <form className="biblioteca-search">

              <input
                type="text"
                placeholder="Pesquisar documentos..."
                aria-label="Pesquisar documentos"
              />

              <button type="submit">
                Pesquisar
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* =====================================================
          CATEGORIAS
      ===================================================== */}

      <section className="biblioteca-categorias">

        <div className="biblioteca-container">

          <div className="biblioteca-section-heading">

            <div>

              <span className="biblioteca-label">
                TIPOS DE DOCUMENTOS
              </span>

              <h2>
                Explore a biblioteca
              </h2>

              <p>
                Encontre diferentes tipos
                de conhecimento técnico,
                científico e académico.
              </p>

            </div>

          </div>


          <div className="biblioteca-categorias-grid">

            {categorias.map(
              (categoria) => (

                <Link
                  key={categoria.titulo}
                  href="/biblioteca"
                  className="biblioteca-categoria-card"
                >

                  <span className="biblioteca-categoria-icon">
                    {categoria.simbolo}
                  </span>

                  <h3>
                    {categoria.titulo}
                  </h3>

                  <p>
                    {categoria.descricao}
                  </p>

                  <span className="biblioteca-categoria-link">
                    Explorar →
                  </span>

                </Link>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          DOCUMENTOS EM DESTAQUE
      ===================================================== */}

      <section className="biblioteca-documentos">

        <div className="biblioteca-container">

          <div className="biblioteca-section-heading biblioteca-heading-row">

            <div>

              <span className="biblioteca-label">
                DOCUMENTOS VERIFICADOS
              </span>

              <h2>
                Materiais em destaque
              </h2>

              <p>
                Publicações provenientes de
                instituições e repositórios
                reconhecidos.
              </p>

            </div>

            <span className="biblioteca-count">
              {documentos.length} documentos
            </span>

          </div>


          <div className="biblioteca-documentos-grid">

            {destaques.map(
              (documento) => (

                <article
                  key={documento.slug}
                  className="biblioteca-documento-card"
                >

                  <div className="biblioteca-documento-top">

                    <span>
                      {documento.tipo}
                    </span>

                    <small>
                      {documento.ano}
                    </small>

                  </div>

                  <h3>
                    {documento.titulo}
                  </h3>

                  <p className="biblioteca-documento-instituicao">
                    {documento.instituicao}
                  </p>

                  <p className="biblioteca-documento-descricao">
                    {documento.descricao}
                  </p>

                  <div className="biblioteca-documento-tags">

                    <span>
                      {documento.area}
                    </span>

                    <span>
                      {documento.tema}
                    </span>

                    <span>
                      {documento.origem}
                    </span>

                  </div>

                  <div className="biblioteca-documento-footer">

                    <span>
                      {documento.idioma}
                    </span>

                    {documento.paginas && (
                      <span>
                        {documento.paginas}
                      </span>
                    )}

                  </div>

                  <a
                    href={documento.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="biblioteca-documento-link"
                  >
                    Consultar documento →
                  </a>

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          REPOSITÓRIO AGROINOVA
          TRABALHOS APROVADOS
      ===================================================== */}

      {trabalhosAprovados.length > 0 && (

        <section className="biblioteca-repositorio-aprovados">

          <div className="biblioteca-container">

            <div className="biblioteca-section-heading biblioteca-heading-row">

              <div>

                <span className="biblioteca-label">
                  REPOSITÓRIO AGROINOVA
                </span>

                <h2>
                  Trabalhos aprovados
                </h2>

                <p>
                  Trabalhos académicos,
                  científicos e técnicos
                  submetidos ao Repositório
                  AGROINOVA e aprovados pela
                  administração.
                </p>

              </div>

              <span className="biblioteca-count">

                {trabalhosAprovados.length}{" "}

                {trabalhosAprovados.length === 1
                  ? "trabalho"
                  : "trabalhos"}

              </span>

            </div>


            <div className="biblioteca-documentos-grid">

              {trabalhosAprovados.map(
                (trabalho) => (

                  <article
                    key={trabalho.id}
                    className="biblioteca-documento-card"
                  >

                    <div className="biblioteca-documento-top">

                      <span>
                        {formatarTipoRepositorio(
                          trabalho.tipo
                        )}
                      </span>

                      <small>
                        {trabalho.ano}
                      </small>

                    </div>


                    <h3>
                      {trabalho.titulo}
                    </h3>


                    <p className="biblioteca-documento-instituicao">

                      {trabalho.autor}

                    </p>


                    {trabalho.instituicao && (

                      <p className="biblioteca-documento-instituicao">

                        {trabalho.instituicao}

                      </p>

                    )}


                    <p className="biblioteca-documento-descricao">

                      {trabalho.resumo}

                    </p>


                    <div className="biblioteca-documento-tags">

                      <span>
                        {trabalho.area}
                      </span>

                      {trabalho.provincia && (

                        <span>
                          {trabalho.provincia}
                        </span>

                      )}

                      <span>
                        Angola
                      </span>

                    </div>


                    <div className="biblioteca-documento-footer">

                      <span>
                        Repositório AGROINOVA
                      </span>

                      <span>
                        Aprovado
                      </span>

                    </div>


                    <Link
                      href={`/biblioteca/repositorio/${trabalho.id}`}
                      className="biblioteca-documento-link"
                    >
                      Ver trabalho →
                    </Link>

                  </article>

                )
              )}

            </div>

          </div>

        </section>

      )}


      {/* =====================================================
          ÁREAS
      ===================================================== */}

      <section className="biblioteca-areas">

        <div className="biblioteca-container">

          <div className="biblioteca-section-heading centered">

            <span className="biblioteca-label">
              ÁREAS DO CONHECIMENTO
            </span>

            <h2>
              Explore por área
            </h2>

            <p>
              Organize o conhecimento
              agropecuário por áreas
              técnicas e científicas.
            </p>

          </div>


          <div className="biblioteca-areas-grid">

            {areas.map(
              (area) => (

                <Link
                  key={area}
                  href="/biblioteca"
                  className="biblioteca-area-card"
                >

                  <strong>
                    {area}
                  </strong>

                  <span>
                    Consultar documentos →
                  </span>

                </Link>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          ANGOLA
      ===================================================== */}

      <section className="biblioteca-angola">

        <div className="biblioteca-container biblioteca-angola-content">

          <div>

            <span className="biblioteca-label">
              CONHECIMENTO PRODUZIDO EM ANGOLA
            </span>

            <h2>
              Uma biblioteca cada vez mais
              ligada à realidade agropecuária
              angolana.
            </h2>

            <p>
              O AGROINOVA pretende reunir e
              dar visibilidade a documentos,
              estudos e trabalhos relacionados
              com agricultura, pecuária,
              ambiente e desenvolvimento
              rural em Angola.
            </p>

          </div>


          <Link
            href="/investigacao"
            className="biblioteca-angola-link"
          >
            Ver investigação →
          </Link>

        </div>

      </section>


      {/* =====================================================
          PUBLICAR
      ===================================================== */}

      <section className="biblioteca-repositorio">

        <div className="biblioteca-container">

          <div className="biblioteca-repositorio-box">

            <div>

              <span className="biblioteca-label">
                REPOSITÓRIO AGROINOVA
              </span>

              <h2>
                Tem um artigo, tese,
                dissertação ou monografia?
              </h2>

              <p>
                Investigadores, estudantes,
                técnicos e profissionais podem
                submeter os seus trabalhos para
                análise e publicação no
                Repositório AGROINOVA.
              </p>


              <div className="biblioteca-repositorio-lista">

                <span>
                  ✓ Artigos científicos
                </span>

                <span>
                  ✓ Teses e dissertações
                </span>

                <span>
                  ✓ Monografias
                </span>

                <span>
                  ✓ Relatórios técnicos
                </span>

              </div>

            </div>


            <Link
              href="/publicar"
              className="biblioteca-publicar-link"
            >
              Publicar trabalho →
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          INSTITUIÇÕES
      ===================================================== */}

      <section className="biblioteca-instituicoes">

        <div className="biblioteca-container">

          <div className="biblioteca-section-heading centered">

            <span className="biblioteca-label">
              FONTES DE CONHECIMENTO
            </span>

            <h2>
              Instituições e repositórios
            </h2>

            <p>
              A Biblioteca AGROINOVA valoriza
              documentos provenientes de
              fontes institucionais verificáveis.
            </p>

          </div>


          <div className="biblioteca-instituicoes-grid">

            <div>
              FAO
            </div>

            <div>
              Embrapa
            </div>

            <div>
              CIMMYT
            </div>

            <div>
              Instituições angolanas
            </div>

            <div>
              Universidades
            </div>

            <div>
              Centros de investigação
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL
      ===================================================== */}

      <section className="biblioteca-final">

        <div className="biblioteca-container biblioteca-final-content">

          <div>

            <span className="biblioteca-label">
              AGROINOVA ANGOLA
            </span>

            <h2>
              Conhecimento partilhado para
              fortalecer o campo angolano.
            </h2>

            <p>
              A Biblioteca é parte da
              plataforma nacional de
              investigação, conhecimento
              e inovação agropecuária
              de Angola.
            </p>

          </div>


          <Link
            href="/agricultura"
            className="biblioteca-final-link"
          >
            Explorar Agricultura →
          </Link>

        </div>

      </section>

    </main>
  );
}