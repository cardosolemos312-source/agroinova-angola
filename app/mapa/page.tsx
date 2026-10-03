import MapaAgricola from "../../components/MapaAgricola";

export default function MapaPage() {
  return (
    <main>

      <section className="page-hero">
        <div className="container">

          <span className="hero-tag">
            MAPA AGRÍCOLA DE ANGOLA
          </span>

          <h1>
            Mapa Agrícola
          </h1>

          <p>
            Explore o território agrícola de Angola e,
            progressivamente, tenha acesso a informação
            sobre produção, solos, clima, água,
            investigação e tecnologias.
          </p>

        </div>
      </section>

      <section className="mapa-section">
        <div className="container">

          <div className="section-heading">

            <span>
              INFORMAÇÃO TERRITORIAL
            </span>

            <h2>
              Explore Angola
            </h2>

            <p>
              Selecione uma província no mapa para
              consultar futuramente os seus principais
              indicadores agropecuários.
            </p>

          </div>

          <MapaAgricola />

        </div>
      </section>

    </main>
  );
}