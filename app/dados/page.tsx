import PainelDados from "../../components/PainelDados";

export default function DadosPage() {
  return (
    <main className="dados-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="dados-hero">

        <div className="container">

          <div className="dados-hero-content">

            <div className="dados-hero-text">

              <span className="dados-hero-kicker">
                AGROINOVA ANGOLA · DADOS
              </span>

              <h1>
                Dados agropecuários
                <br />
                de Angola
              </h1>

              <p>
                Consulte, filtre e compare
                informação oficial sobre a
                agricultura e a pecuária
                de Angola.
              </p>

            </div>


            <div className="dados-hero-status">

              <div className="dados-status-icon">
                ✓
              </div>

              <div>

                <span>
                  FONTE PRINCIPAL
                </span>

                <strong>
                  INE · ICAPP 2024/2025
                </strong>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PAINEL CENTRAL DE DADOS
      ===================================================== */}

      <section
        id="painel"
        className="dados-painel"
      >

        <div className="container">

          <PainelDados />

        </div>

      </section>


      {/* =====================================================
          TRANSPARÊNCIA
      ===================================================== */}

      <section className="dados-transparencia">

        <div className="container">

          <div className="dados-transparencia-inner">

            <div className="dados-transparencia-icon">
              i
            </div>

            <div>

              <strong>
                Transparência dos dados
              </strong>

              <p>
                A AGROINOVA ANGOLA organiza
                e apresenta dados provenientes
                de fontes oficiais, mantendo
                a indicação da fonte, período
                e unidade territorial.
              </p>

            </div>

            <a
              href="/mapa"
              className="dados-transparencia-link"
            >
              Explorar mapa →
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}