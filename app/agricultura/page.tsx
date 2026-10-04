import Link from "next/link";

interface Cultura {
  slug: string;
  nome: string;
  nomeCientifico: string;
  grupo: string;
  descricao: string;
  temas: string[];
}

const culturas: Cultura[] = [
  {
    slug: "milho",
    nome: "Milho",
    nomeCientifico: "Zea mays L.",
    grupo: "Cereais",
    descricao:
      "Informação técnica sobre produção, escolha de sementes, instalação da cultura, nutrição, maneio, sanidade, colheita e pós-colheita.",
    temas: [
      "Produção",
      "Sementes",
      "Nutrição",
      "Pragas e doenças",
    ],
  },
  {
    slug: "mandioca",
    nome: "Mandioca",
    nomeCientifico: "Manihot esculenta Crantz",
    grupo: "Raízes e tubérculos",
    descricao:
      "Orientações técnicas sobre material de plantio, instalação, nutrição, água, doenças, pragas, colheita e aproveitamento.",
    temas: [
      "Produção",
      "Material de plantio",
      "Sanidade",
      "Pós-colheita",
    ],
  },
  {
    slug: "feijao",
    nome: "Feijão",
    nomeCientifico: "Phaseolus vulgaris L.",
    grupo: "Leguminosas",
    descricao:
      "Conhecimento técnico sobre implantação, cultivares, fertilidade do solo, maneio, sanidade, colheita e conservação.",
    temas: [
      "Cultivo",
      "Cultivares",
      "Fertilização",
      "Sanidade",
    ],
  },
  {
    slug: "soja",
    nome: "Soja",
    nomeCientifico: "Glycine max (L.) Merr.",
    grupo: "Oleaginosas",
    descricao:
      "Informação técnica sobre implantação da cultura, variedades, nutrição, inoculação, maneio, sanidade e colheita.",
    temas: [
      "Produção",
      "Variedades",
      "Nutrição",
      "Maneio",
    ],
  },
  {
    slug: "arroz",
    nome: "Arroz",
    nomeCientifico: "Oryza sativa L.",
    grupo: "Cereais",
    descricao:
      "Orientações sobre produção de arroz, preparação do terreno, sementes, água, fertilização, sanidade e colheita.",
    temas: [
      "Produção",
      "Irrigação",
      "Sementes",
      "Colheita",
    ],
  },
  {
    slug: "cafe",
    nome: "Café",
    nomeCientifico: "Coffea spp.",
    grupo: "Culturas permanentes",
    descricao:
      "Conhecimento técnico sobre implantação, variedades, sombra, nutrição, poda, sanidade, colheita e processamento.",
    temas: [
      "Implantação",
      "Maneio",
      "Sanidade",
      "Processamento",
    ],
  },
  {
    slug: "batata-doce",
    nome: "Batata-doce",
    nomeCientifico: "Ipomoea batatas (L.) Lam.",
    grupo: "Raízes e tubérculos",
    descricao:
      "Informação sobre material de plantio, preparação do terreno, instalação, nutrição, sanidade e colheita.",
    temas: [
      "Produção",
      "Plantio",
      "Sanidade",
      "Colheita",
    ],
  },
  {
    slug: "amendoim",
    nome: "Amendoim",
    nomeCientifico: "Arachis hypogaea L.",
    grupo: "Oleaginosas",
    descricao:
      "Orientações sobre implantação, variedades, fertilidade, maneio da cultura, sanidade e colheita.",
    temas: [
      "Produção",
      "Variedades",
      "Fertilização",
      "Colheita",
    ],
  },
];

const grupos = [
  "Todas",
  "Cereais",
  "Leguminosas",
  "Oleaginosas",
  "Raízes e tubérculos",
  "Culturas permanentes",
];

const manuais = [
  {
    titulo: "Maize Hybrid Seed Production Manual",
    autores:
      "John F. MacRobert; Peter Setimela; James Gethi; Mosisa Worku Regasa",
    instituicao: "CIMMYT",
    ano: "2014",
    cultura: "Milho",
  },
  {
    titulo: "Save and Grow: Cassava",
    autores: "Reinhardt Howeler; NeBambi Lutaladio; Graeme Thomas",
    instituicao: "FAO",
    ano: "2013",
    cultura: "Mandioca",
  },
  {
    titulo:
      "Produção informal de semente de feijão comum com qualidade",
    autores: "Agostinho Dirceu Didonet",
    instituicao: "Embrapa",
    ano: "2013",
    cultura: "Feijão",
  },
];

const autores = [
  {
    nome: "John F. MacRobert",
    funcao: "Investigador / especialista em produção de sementes",
    instituicao: "CIMMYT",
    foto: "/images/agricultura/autores/john-macrobert.jpg",
  },
  {
    nome: "Peter Setimela",
    funcao: "Investigador / especialista em sementes",
    instituicao: "CIMMYT",
    foto: "/images/agricultura/autores/peter-setimela.jpg",
  },
  {
    nome: "Reinhardt Howeler",
    funcao: "Investigador / especialista em mandioca e solos",
    instituicao: "CIAT / FAO",
    foto: "/images/agricultura/autores/reinhardt-howeler.jpg",
  },
  {
    nome: "Agostinho Dirceu Didonet",
    funcao: "Investigador em produção de sementes",
    instituicao: "Embrapa",
    foto: "/images/agricultura/autores/agostinho-didonet.jpg",
  },
];

export default function AgriculturaPage() {
  return (
    <main className="agricultura-page">

      {/* HERO */}

      <section className="agricultura-hero">
        <div className="agricultura-container">

          <div className="agricultura-hero-content">

            <span className="agricultura-kicker">
              CENTRO DE CONHECIMENTO AGRÍCOLA
            </span>

            <h1>
              Agricultura
            </h1>

            <p>
              Informação técnica, manuais e conhecimento científico
              para apoiar a produção agrícola em Angola.
            </p>

            <div className="agricultura-hero-meta">
              <span>Produção agrícola</span>
              <span>Orientações técnicas</span>
              <span>Manuais</span>
              <span>Referências científicas</span>
            </div>

          </div>

        </div>
      </section>


      {/* PESQUISA */}

      <section className="agricultura-pesquisa">
        <div className="agricultura-container">

          <div className="agricultura-pesquisa-box">

            <div>
              <span className="agricultura-label">
                BASE DE CONHECIMENTO
              </span>

              <h2>
                Encontre uma cultura agrícola
              </h2>

              <p>
                Pesquise por cultura, grupo agrícola ou tema técnico.
              </p>
            </div>

            <div className="agricultura-search">

              <input
                type="search"
                placeholder="Pesquisar milho, mandioca, feijão, soja..."
                aria-label="Pesquisar cultura agrícola"
              />

              <button type="button">
                Pesquisar
              </button>

            </div>

          </div>

        </div>
      </section>


      {/* CULTURAS */}

      <section className="agricultura-culturas">
        <div className="agricultura-container">

          <div className="agricultura-section-heading">

            <div>
              <span className="agricultura-label">
                CULTURAS AGRÍCOLAS
              </span>

              <h2>
                Biblioteca técnica de culturas
              </h2>

              <p>
                Seleccione uma cultura para consultar a sua ficha
                técnica, orientações de produção, referências e
                materiais de apoio.
              </p>
            </div>

            <span className="agricultura-count">
              {culturas.length} culturas
            </span>

          </div>


          <div className="agricultura-filtros">

            {grupos.map((grupo, index) => (
              <button
                key={grupo}
                type="button"
                className={
                  index === 0
                    ? "agricultura-filtro active"
                    : "agricultura-filtro"
                }
              >
                {grupo}
              </button>
            ))}

          </div>


          <div className="agricultura-culturas-grid">

            {culturas.map((cultura) => (
              <article
                key={cultura.slug}
                className="agricultura-cultura-card"
              >

                <div className="agricultura-cultura-top">

                  <span className="agricultura-cultura-grupo">
                    {cultura.grupo}
                  </span>

                  <span className="agricultura-cultura-numero">
                    CULTURA
                  </span>

                </div>

                <h3>
                  {cultura.nome}
                </h3>

                <p className="agricultura-nome-cientifico">
                  {cultura.nomeCientifico}
                </p>

                <p className="agricultura-cultura-descricao">
                  {cultura.descricao}
                </p>

                <div className="agricultura-cultura-tags">

                  {cultura.temas.map((tema) => (
                    <span key={tema}>
                      {tema}
                    </span>
                  ))}

                </div>

                <Link
                  href={`/agricultura/${cultura.slug}`}
                  className="agricultura-cultura-link"
                >
                  Consultar cultura
                  <span>→</span>
                </Link>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* MANUAIS */}

      <section className="agricultura-manuais">
        <div className="agricultura-container">

          <div className="agricultura-section-heading">

            <div>
              <span className="agricultura-label">
                BIBLIOTECA TÉCNICA
              </span>

              <h2>
                Manuais e documentos de referência
              </h2>

              <p>
                Materiais técnicos publicados por instituições
                científicas e organismos especializados.
              </p>
            </div>

            <Link
              href="/biblioteca"
              className="agricultura-link-geral"
            >
              Ver biblioteca →
            </Link>

          </div>


          <div className="agricultura-manuais-grid">

            {manuais.map((manual) => (
              <article
                key={manual.titulo}
                className="agricultura-manual-card"
              >

                <div className="agricultura-manual-tipo">
                  MANUAL TÉCNICO
                </div>

                <h3>
                  {manual.titulo}
                </h3>

                <p>
                  <strong>Autores:</strong>{" "}
                  {manual.autores}
                </p>

                <div className="agricultura-manual-meta">
                  <span>{manual.instituicao}</span>
                  <span>{manual.ano}</span>
                  <span>{manual.cultura}</span>
                </div>

                <Link
                  href="/biblioteca"
                  className="agricultura-manual-link"
                >
                  Consultar documento →
                </Link>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* AUTORES */}

      <section className="agricultura-autores">
        <div className="agricultura-container">

          <div className="agricultura-section-heading">

            <div>
              <span className="agricultura-label">
                CONTRIBUIÇÕES CIENTÍFICAS
              </span>

              <h2>
                Investigadores e especialistas
              </h2>

              <p>
                Pessoas cujos trabalhos e publicações contribuem
                para o conhecimento técnico disponibilizado nesta
                plataforma.
              </p>
            </div>

          </div>


          <div className="agricultura-autores-grid">

            {autores.map((autor) => (
              <article
                key={autor.nome}
                className="agricultura-autor-card"
              >

                <div className="agricultura-autor-foto">

                  <img
                    src={autor.foto}
                    alt={`Fotografia de ${autor.nome}`}
                  />

                </div>

                <div className="agricultura-autor-info">

                  <span>
                    {autor.instituicao}
                  </span>

                  <h3>
                    {autor.nome}
                  </h3>

                  <p>
                    {autor.funcao}
                  </p>

                  <button type="button">
                    Ver contribuições
                  </button>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* ÁREAS TÉCNICAS */}

      <section className="agricultura-areas">
        <div className="agricultura-container">

          <div className="agricultura-section-heading centered">

            <div>
              <span className="agricultura-label">
                ORIENTAÇÕES TÉCNICAS
              </span>

              <h2>
                Conhecimento organizado por tema
              </h2>

              <p>
                Consulte conteúdos técnicos que atravessam
                diferentes culturas agrícolas.
              </p>
            </div>

          </div>


          <div className="agricultura-areas-grid">

            <Link href="/agricultura" className="agricultura-area-card">
              <strong>Preparação do solo</strong>
              <span>
                Planeamento, mobilização e conservação.
              </span>
            </Link>

            <Link href="/agricultura" className="agricultura-area-card">
              <strong>Sementes e variedades</strong>
              <span>
                Qualidade, escolha e utilização de sementes.
              </span>
            </Link>

            <Link href="/agricultura" className="agricultura-area-card">
              <strong>Nutrição vegetal</strong>
              <span>
                Fertilidade, adubação e nutrição das culturas.
              </span>
            </Link>

            <Link href="/agricultura" className="agricultura-area-card">
              <strong>Pragas e doenças</strong>
              <span>
                Identificação, prevenção e maneio integrado.
              </span>
            </Link>

            <Link href="/agricultura" className="agricultura-area-card">
              <strong>Água e irrigação</strong>
              <span>
                Gestão da água e eficiência no uso.
              </span>
            </Link>

            <Link href="/agricultura" className="agricultura-area-card">
              <strong>Colheita e pós-colheita</strong>
              <span>
                Redução de perdas, conservação e qualidade.
              </span>
            </Link>

          </div>

        </div>
      </section>


      {/* FINAL */}

      <section className="agricultura-final">
        <div className="agricultura-container">

          <div>
            <span className="agricultura-label">
              AGROINOVA ANGOLA
            </span>

            <h2>
              Conhecimento técnico ao serviço
              da agricultura angolana.
            </h2>

            <p>
              Uma base nacional de conhecimento que aproxima
              produtores, técnicos, investigadores, estudantes
              e instituições do conhecimento agrícola.
            </p>
          </div>

          <Link
            href="/biblioteca"
            className="agricultura-final-link"
          >
            Explorar biblioteca técnica →
          </Link>

        </div>
      </section>

    </main>
  );
}