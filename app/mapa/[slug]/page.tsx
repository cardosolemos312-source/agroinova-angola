
import Link from "next/link";

import {
  dadosAgricolas,
} from "../../../data/oficial/agricultura/dados";

import {
  provinciasAngola,
} from "../../../data/provincias-angola";

interface ProvinciaPageProps {
  params: Promise<{
    slug: string;
  }>;
}

function formatarNumero(valor: number) {
  return new Intl.NumberFormat("pt-PT").format(valor);
}

export default async function ProvinciaPage({
  params,
}: ProvinciaPageProps) {
  const { slug } = await params;

  const provincia = provinciasAngola.find(
    (item) => item.slug === slug
  );

  /*
   * A URL não corresponde a nenhuma
   * das 21 províncias actuais.
   */
  if (!provincia) {
    return (
      <main className="provincia-section">

        <div className="container">

          <div className="provincia-info">

            <span className="hero-badge">
              MAPA AGRÍCOLA
            </span>

            <h1>
              Província não encontrada
            </h1>

            <p>
              A província solicitada não corresponde
              à lista das 21 províncias actuais
              utilizadas pela plataforma.
            </p>

            <div style={{ marginTop: "20px" }}>
              <Link
                href="/mapa"
                className="dados-btn"
              >
                Voltar ao mapa
              </Link>
            </div>

          </div>

        </div>

      </main>
    );
  }

  /*
   * Verifica se o ICAPP 2024/2025 possui
   * dados directamente associados à actual
   * configuração territorial.
   */
  const dados = provincia.dadosICAPP2024_2025
    ? dadosAgricolas[provincia.slug]
    : null;

  /*
   * A província existe, mas os dados desta
   * fonte não podem ser associados directamente.
   */
  if (!dados) {
    return (
      <main className="provincia-section">

        <div className="container">

          <div className="provincia-info">

            <span className="hero-badge">
              PROVÍNCIA
            </span>

            <h1>
              {provincia.nome}
            </h1>

            <p>
              Esta província faz parte da actual
              divisão administrativa de Angola.
            </p>

          </div>

          <div className="provincia-info-box">

            <span>
              ℹ️
            </span>

            <div>

              <h3>
                Dados provinciais não disponíveis
              </h3>

              <p>
                Não existem, no ICAPP 2024/2025,
                dados directamente comparáveis
                para <strong>{provincia.nome}</strong>
                segundo a actual divisão territorial.
              </p>

              {provincia.observacao && (
                <p style={{ marginTop: "12px" }}>
                  <strong>
                    Nota:
                  </strong>{" "}
                  {provincia.observacao}
                </p>
              )}

              <p style={{ marginTop: "12px" }}>
                A AGROINOVA ANGOLA não estima,
                divide ou redistribui os valores
                de uma antiga unidade territorial
                entre novas províncias.
              </p>

              <p style={{ marginTop: "12px" }}>
                Os dados serão apresentados quando
                existir uma fonte oficial adequada
                para esta configuração territorial.
              </p>

            </div>

          </div>

          <div
            style={{
              marginTop: "30px",
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >

            <Link
              href="/mapa"
              className="dados-btn"
            >
              Voltar ao mapa
            </Link>

            <Link
              href="/dados"
              className="dados-btn"
            >
              Ver painel de dados
            </Link>

          </div>

        </div>

      </main>
    );
  }

  /*
   * A partir daqui existem dados provinciais
   * directamente disponíveis no ICAPP 2024/2025.
   */
  return (
    <main className="provincia-section">

      <div className="container">

        <div className="provincia-info">

          <span className="hero-badge">
            DADOS OFICIAIS
          </span>

          <h1>
            {dados.provincia}
          </h1>

          <p>
            Indicadores agrícolas oficiais segundo
            o ICAPP {dados.periodo}.
          </p>

        </div>


        <div className="indicadores-grid">

          <div className="provincia-card">

            <h3>
              Explorações produtoras
            </h3>

            <strong>
              {formatarNumero(
                dados.exploracoesProdutoras
              )}
            </strong>

            <p>
              Explorações
            </p>

          </div>


          <div className="provincia-card">

            <h3>
              Explorações familiares
            </h3>

            <strong>
              {formatarNumero(
                dados.exploracoesFamiliares
              )}
            </strong>

            <p>
              {dados.percentualFamiliares.toFixed(2)}%
            </p>

          </div>


          <div className="provincia-card">

            <h3>
              Explorações empresariais
            </h3>

            <strong>
              {formatarNumero(
                dados.exploracoesEmpresariais
              )}
            </strong>

            <p>
              {dados.percentualEmpresariais.toFixed(2)}%
            </p>

          </div>


          <div className="provincia-card">

            <h3>
              Área plantada total
            </h3>

            <strong>
              {formatarNumero(
                dados.areaPlantadaTotal
              )}
            </strong>

            <p>
              hectares
            </p>

          </div>

        </div>


        <div className="indicadores-grid">

          <div className="provincia-card">

            <h3>
              Culturas temporárias
            </h3>

            <strong>
              {formatarNumero(
                dados.areaCulturasTemporarias
              )}
            </strong>

            <p>
              hectares
            </p>

          </div>


          <div className="provincia-card">

            <h3>
              Culturas permanentes
            </h3>

            <strong>
              {formatarNumero(
                dados.areaCulturasPermanentes
              )}
            </strong>

            <p>
              hectares
            </p>

          </div>

        </div>


        <div className="provincia-info">

          <h2>
            Fonte dos dados
          </h2>

          <p>
            <strong>
              Instituição:
            </strong>{" "}
            Instituto Nacional de Estatística (INE)
          </p>

          <p>
            <strong>
              Fonte:
            </strong>{" "}
            {dados.fonte}
          </p>

          <p>
            <strong>
              Período:
            </strong>{" "}
            {dados.periodo}
          </p>

        </div>


        <div
          style={{
            marginTop: "10px",
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >

          <Link
            href="/mapa"
            className="dados-btn"
          >
            Voltar ao mapa
          </Link>

          <Link
            href="/dados"
            className="dados-btn"
          >
            Ver painel de dados
          </Link>

        </div>

      </div>

    </main>
  );
}
