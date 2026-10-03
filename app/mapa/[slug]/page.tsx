import { dadosAgricolas } from "../../../data/oficial/agricultura/dados";

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

  const chave = decodeURIComponent(slug)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

  /*
   * Verificação dos dados carregados
   */
  console.log("================================");
  console.log("PROVÍNCIA SOLICITADA:", slug);
  console.log("CHAVE NORMALIZADA:", chave);
  console.log(
    "CHAVES DISPONÍVEIS:",
    Object.keys(dadosAgricolas)
  );
  console.log(
    "DADO DE HUAMBO:",
    dadosAgricolas["huambo"]
  );
  console.log("================================");

  const dados = dadosAgricolas[chave];

  if (!dados) {
    return (
      <main className="provincia-section">
        <div className="container">

          <h1>Província não encontrada</h1>

          <p>
            Não existem dados provinciais disponíveis
            para esta província na fonte oficial integrada.
          </p>

          <p>
            Chave recebida: <strong>{chave}</strong>
          </p>

          <p>
            Chaves disponíveis:
          </p>

          <pre>
            {Object.keys(dadosAgricolas).join(", ")}
          </pre>

        </div>
      </main>
    );
  }

  return (
    <main className="provincia-section">

      <div className="container">

        <div className="provincia-info">

          <span className="hero-badge">
            DADOS OFICIAIS
          </span>

          <h1>{dados.provincia}</h1>

          <p>
            Indicadores agrícolas oficiais segundo o
            ICAPP {dados.periodo}.
          </p>

        </div>

        <div className="indicadores-grid">

          <div className="provincia-card">
            <h3>Explorações produtoras</h3>

            <strong>
              {formatarNumero(
                dados.exploracoesProdutoras
              )}
            </strong>

            <p>Explorações</p>
          </div>

          <div className="provincia-card">
            <h3>Explorações familiares</h3>

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
            <h3>Explorações empresariais</h3>

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
            <h3>Área plantada total</h3>

            <strong>
              {formatarNumero(
                dados.areaPlantadaTotal
              )}
            </strong>

            <p>hectares</p>
          </div>

        </div>

        <div className="indicadores-grid">

          <div className="provincia-card">
            <h3>Culturas temporárias</h3>

            <strong>
              {formatarNumero(
                dados.areaCulturasTemporarias
              )}
            </strong>

            <p>hectares</p>
          </div>

          <div className="provincia-card">
            <h3>Culturas permanentes</h3>

            <strong>
              {formatarNumero(
                dados.areaCulturasPermanentes
              )}
            </strong>

            <p>hectares</p>
          </div>

        </div>

        <div className="provincia-info">

          <h2>Fonte dos dados</h2>

          <p>
            <strong>Instituição:</strong> Instituto
            Nacional de Estatística (INE)
          </p>

          <p>
            <strong>Fonte:</strong> {dados.fonte}
          </p>

          <p>
            <strong>Período:</strong> {dados.periodo}
          </p>

        </div>

      </div>

    </main>
  );
}