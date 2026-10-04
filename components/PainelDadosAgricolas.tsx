"use client";

import { useMemo, useState } from "react";

import {
  dadosAgricolas,
} from "../data/oficial/agricultura/dados";

import {
  provinciasAngola,
} from "../data/provincias-angola";

import GraficosDadosAgricolas from "./GraficosDadosAgricolas";

interface ProvinciaPainel {
  slug: string;
  nome: string;
  temDados: boolean;
  observacao?: string;
  dados:
    | (typeof dadosAgricolas)[string]
    | undefined;
}

function formatarNumero(valor: number) {
  return new Intl.NumberFormat("pt-PT").format(
    valor
  );
}

function formatarArea(valor: number) {
  return `${formatarNumero(valor)} ha`;
}

function calcularPercentagem(
  parte: number,
  total: number
) {
  if (!total) {
    return 0;
  }

  return (parte / total) * 100;
}

export default function PainelDadosAgricolas() {
  const [
    provinciaSelecionada,
    setProvinciaSelecionada,
  ] = useState("todas");

  const [pesquisa, setPesquisa] =
    useState("");

  const [ordenacao, setOrdenacao] =
    useState<"area" | "exploracoes">(
      "area"
    );

  /* =========================================
     21 PROVÍNCIAS
  ========================================= */

  const provincias =
    useMemo<ProvinciaPainel[]>(
      () => {
        return provinciasAngola
          .map((provincia) => {
            const dados =
              provincia.dadosICAPP2024_2025
                ? dadosAgricolas[
                    provincia.slug
                  ]
                : undefined;

            return {
              slug: provincia.slug,
              nome: provincia.nome,
              temDados: Boolean(dados),
              observacao:
                provincia.observacao,
              dados,
            };
          })
          .sort((a, b) =>
            a.nome.localeCompare(
              b.nome,
              "pt"
            )
          );
      },
      []
    );

  /* =========================================
     PROVÍNCIAS COM DADOS
  ========================================= */

  const provinciasComDados =
    useMemo(
      () =>
        provincias.filter(
          (provincia) =>
            provincia.temDados &&
            provincia.dados
        ),
      [provincias]
    );

  /* =========================================
     PROVÍNCIAS SEM DADOS
  ========================================= */

  const provinciasSemDados =
    useMemo(
      () =>
        provincias.filter(
          (provincia) =>
            !provincia.temDados
        ),
      [provincias]
    );

  /* =========================================
     PESQUISA E FILTRO
  ========================================= */

  const dadosFiltrados =
    useMemo(() => {
      const termo = pesquisa
        .trim()
        .toLowerCase();

      return provincias.filter(
        (provincia) => {
          const correspondeProvincia =
            provinciaSelecionada ===
              "todas" ||
            provincia.slug ===
              provinciaSelecionada;

          const correspondePesquisa =
            !termo ||
            provincia.nome
              .toLowerCase()
              .includes(termo);

          return (
            correspondeProvincia &&
            correspondePesquisa
          );
        }
      );
    }, [
      provincias,
      pesquisa,
      provinciaSelecionada,
    ]);

  /* =========================================
     RESUMO DOS DADOS
  ========================================= */

  const resumo =
    useMemo(() => {
      return provinciasComDados.reduce(
        (total, item) => {
          if (!item.dados) {
            return total;
          }

          total.exploracoes +=
            item.dados
              .exploracoesProdutoras;

          total.familiares +=
            item.dados
              .exploracoesFamiliares;

          total.empresariais +=
            item.dados
              .exploracoesEmpresariais;

          total.area +=
            item.dados
              .areaPlantadaTotal;

          total.temporarias +=
            item.dados
              .areaCulturasTemporarias;

          total.permanentes +=
            item.dados
              .areaCulturasPermanentes;

          return total;
        },
        {
          exploracoes: 0,
          familiares: 0,
          empresariais: 0,
          area: 0,
          temporarias: 0,
          permanentes: 0,
        }
      );
    }, [
      provinciasComDados,
    ]);

  /* =========================================
     PROVÍNCIA SELECIONADA
  ========================================= */

  const provinciaDetalhada =
    provinciaSelecionada !== "todas"
      ? provincias.find(
          (provincia) =>
            provincia.slug ===
            provinciaSelecionada
        )
      : null;

  /* =========================================
     RANKING
  ========================================= */

  const ranking =
    useMemo(() => {
      return [...provinciasComDados].sort(
        (a, b) => {
          if (
            !a.dados ||
            !b.dados
          ) {
            return 0;
          }

          if (
            ordenacao === "area"
          ) {
            return (
              b.dados.areaPlantadaTotal -
              a.dados.areaPlantadaTotal
            );
          }

          return (
            b.dados
              .exploracoesProdutoras -
            a.dados
              .exploracoesProdutoras
          );
        }
      );
    }, [
      provinciasComDados,
      ordenacao,
    ]);

  /* =========================================
     PERCENTAGENS
  ========================================= */

  const percentualFamiliar =
    calcularPercentagem(
      resumo.familiares,
      resumo.exploracoes
    );

  const percentualEmpresarial =
    calcularPercentagem(
      resumo.empresariais,
      resumo.exploracoes
    );

  return (
    <div className="dados-dashboard">

      {/* =====================================
          CABEÇALHO
      ====================================== */}

      <div className="dados-dashboard-header">

        <div>

          <span className="section-label">
            DADOS OFICIAIS
          </span>

          <h2>
            Painel Agropecuário de Angola
          </h2>

          <p>
            Explore indicadores agrícolas por
            província, compare dados disponíveis
            e consulte a situação das 21
            províncias actuais.
          </p>

        </div>

        <div className="dados-source-badge">
          INE · ICAPP 2024/2025
        </div>

      </div>


      {/* =====================================
          AVISO TERRITORIAL
      ====================================== */}

      <div className="dados-aviso-territorial">

        <strong>
          Nota sobre a divisão territorial
        </strong>

        <p>
          O ICAPP 2024/2025 integrado nesta
          plataforma apresenta dados segundo
          uma configuração territorial anterior
          à actual divisão de 21 províncias.
          Por isso, a AGROINOVA ANGOLA não
          redistribui nem estima valores para
          novas províncias.
        </p>

        <p>
          Nesta fonte, existem dados directamente
          comparáveis para{" "}
          <strong>
            {provinciasComDados.length}
          </strong>{" "}
          das{" "}
          <strong>
            {provincias.length}
          </strong>{" "}
          províncias actuais.
        </p>

      </div>


      {/* =====================================
          INDICADORES
      ====================================== */}

      <div className="dados-kpis">

        <div className="dados-kpi">

          <span className="dados-kpi-icon">
            🇦🇴
          </span>

          <div>

            <small>
              PROVÍNCIAS
            </small>

            <strong>
              {provinciasComDados.length}/
              {provincias.length}
            </strong>

            <p>
              com dados comparáveis
            </p>

          </div>

        </div>


        <div className="dados-kpi">

          <span className="dados-kpi-icon">
            🌾
          </span>

          <div>

            <small>
              EXPLORAÇÕES
            </small>

            <strong>
              {formatarNumero(
                resumo.exploracoes
              )}
            </strong>

            <p>
              nas províncias com dados
            </p>

          </div>

        </div>


        <div className="dados-kpi">

          <span className="dados-kpi-icon">
            👨🏾‍🌾
          </span>

          <div>

            <small>
              FAMILIARES
            </small>

            <strong>
              {formatarNumero(
                resumo.familiares
              )}
            </strong>

            <p>
              {percentualFamiliar.toFixed(
                2
              )}% das explorações consideradas
            </p>

          </div>

        </div>


        <div className="dados-kpi">

          <span className="dados-kpi-icon">
            📐
          </span>

          <div>

            <small>
              ÁREA PLANTADA
            </small>

            <strong>
              {formatarNumero(
                resumo.area
              )}
            </strong>

            <p>
              hectares nas províncias com dados
            </p>

          </div>

        </div>

      </div>


      {/* =====================================
          RESUMO SECUNDÁRIO
      ====================================== */}

      <div className="dados-resumo-secundario">

        <div>

          <span>
            EXPLORAÇÕES EMPRESARIAIS
          </span>

          <strong>
            {formatarNumero(
              resumo.empresariais
            )}
          </strong>

          <small>
            {percentualEmpresarial.toFixed(
              2
            )}%
          </small>

        </div>


        <div>

          <span>
            CULTURAS TEMPORÁRIAS
          </span>

          <strong>
            {formatarArea(
              resumo.temporarias
            )}
          </strong>

        </div>


        <div>

          <span>
            CULTURAS PERMANENTES
          </span>

          <strong>
            {formatarArea(
              resumo.permanentes
            )}
          </strong>

        </div>


        <div>

          <span>
            SEM DADOS NESTA FONTE
          </span>

          <strong>
            {provinciasSemDados.length}
          </strong>

          <small>
            províncias
          </small>

        </div>

      </div>


      {/* =====================================
          GRÁFICOS
      ====================================== */}

      <GraficosDadosAgricolas />


      {/* =====================================
          FILTROS
      ====================================== */}

      <div className="dados-filtros">

        <div className="dados-filtro">

          <label htmlFor="provincia">
            Província
          </label>

          <select
            id="provincia"
            value={
              provinciaSelecionada
            }
            onChange={(evento) =>
              setProvinciaSelecionada(
                evento.target.value
              )
            }
          >

            <option value="todas">
              Todas as províncias
            </option>

            {provincias.map(
              (provincia) => (

                <option
                  key={provincia.slug}
                  value={provincia.slug}
                >
                  {provincia.nome}
                  {!provincia.temDados
                    ? " — sem dados"
                    : ""}
                </option>

              )
            )}

          </select>

        </div>


        <div className="dados-filtro">

          <label htmlFor="pesquisa">
            Pesquisar
          </label>

          <input
            id="pesquisa"
            type="text"
            placeholder="Pesquisar província..."
            value={pesquisa}
            onChange={(evento) =>
              setPesquisa(
                evento.target.value
              )
            }
          />

        </div>

      </div>


      {/* =====================================
          DETALHE DA PROVÍNCIA
      ====================================== */}

      {provinciaDetalhada && (

        <section className="dados-detalhe">

          <div className="dados-detalhe-topo">

            <div>

              <span>
                PROVÍNCIA SELECCIONADA
              </span>

              <h3>
                {provinciaDetalhada.nome}
              </h3>

              {provinciaDetalhada.temDados &&
              provinciaDetalhada.dados ? (

                <p>
                  Dados provinciais disponíveis
                  no ICAPP{" "}
                  {
                    provinciaDetalhada
                      .dados
                      .periodo
                  }.
                </p>

              ) : (

                <p>
                  Dados provinciais directamente
                  comparáveis não disponíveis
                  nesta fonte/período.
                </p>

              )}

            </div>


            <a
              href={`/mapa/${provinciaDetalhada.slug}`}
              className="dados-btn"
            >
              Ver província
            </a>

          </div>


          {provinciaDetalhada.temDados &&
          provinciaDetalhada.dados ? (

            <>

              <div className="dados-detalhe-grid">

                <div>

                  <small>
                    Explorações produtoras
                  </small>

                  <strong>
                    {formatarNumero(
                      provinciaDetalhada
                        .dados
                        .exploracoesProdutoras
                    )}
                  </strong>

                </div>


                <div>

                  <small>
                    Explorações familiares
                  </small>

                  <strong>
                    {formatarNumero(
                      provinciaDetalhada
                        .dados
                        .exploracoesFamiliares
                    )}
                  </strong>

                </div>


                <div>

                  <small>
                    Explorações empresariais
                  </small>

                  <strong>
                    {formatarNumero(
                      provinciaDetalhada
                        .dados
                        .exploracoesEmpresariais
                    )}
                  </strong>

                </div>


                <div>

                  <small>
                    Área plantada
                  </small>

                  <strong>
                    {formatarArea(
                      provinciaDetalhada
                        .dados
                        .areaPlantadaTotal
                    )}
                  </strong>

                </div>

              </div>


              <div className="dados-areas">

                <div>

                  <span>
                    Culturas temporárias
                  </span>

                  <strong>
                    {formatarArea(
                      provinciaDetalhada
                        .dados
                        .areaCulturasTemporarias
                    )}
                  </strong>

                </div>


                <div>

                  <span>
                    Culturas permanentes
                  </span>

                  <strong>
                    {formatarArea(
                      provinciaDetalhada
                        .dados
                        .areaCulturasPermanentes
                    )}
                  </strong>

                </div>

              </div>

            </>

          ) : (

            <div className="dados-sem-dados">

              <div className="dados-sem-dados-icon">
                ℹ️
              </div>

              <h3>
                Dados provinciais não disponíveis
              </h3>

              <p>
                A AGROINOVA ANGOLA reconhece{" "}
                <strong>
                  {provinciaDetalhada.nome}
                </strong>{" "}
                como uma província actual,
                mas não encontrou nesta fonte
                dados directamente comparáveis
                para esta configuração territorial.
              </p>

              {provinciaDetalhada.observacao && (

                <p>

                  <strong>
                    Nota:
                  </strong>{" "}

                  {provinciaDetalhada.observacao}

                </p>

              )}

              <p>
                Nenhum valor foi estimado,
                redistribuído ou inventado.
              </p>

            </div>

          )}

        </section>

      )}


      {/* =====================================
          RANKING
      ====================================== */}

      <section className="dados-ranking">

        <div className="dados-section-title">

          <div>

            <span>
              COMPARAÇÃO
            </span>

            <h3>
              Ranking das províncias
            </h3>

          </div>


          <select
            value={ordenacao}
            onChange={(evento) =>
              setOrdenacao(
                evento.target.value as
                  | "area"
                  | "exploracoes"
              )
            }
          >

            <option value="area">
              Área plantada
            </option>

            <option value="exploracoes">
              Explorações produtoras
            </option>

          </select>

        </div>


        <div className="ranking-list">

          {ranking.map(
            (item, index) => {

              if (!item.dados) {
                return null;
              }

              const valor =
                ordenacao === "area"
                  ? item.dados
                      .areaPlantadaTotal
                  : item.dados
                      .exploracoesProdutoras;

              const maiorValor =
                ranking[0]?.dados
                  ? ordenacao === "area"
                    ? ranking[0]
                        .dados
                        .areaPlantadaTotal
                    : ranking[0]
                        .dados
                        .exploracoesProdutoras
                  : 1;

              const largura =
                maiorValor > 0
                  ? (valor /
                      maiorValor) *
                    100
                  : 0;

              return (

                <div
                  className="ranking-item"
                  key={item.slug}
                >

                  <div className="ranking-position">
                    {index + 1}
                  </div>


                  <div className="ranking-content">

                    <div className="ranking-label">

                      <strong>
                        {item.nome}
                      </strong>

                      <span>
                        {formatarNumero(
                          valor
                        )}
                        {ordenacao === "area"
                          ? " ha"
                          : " explorações"}
                      </span>

                    </div>


                    <div className="ranking-bar">

                      <div
                        style={{
                          width:
                            `${largura}%`,
                        }}
                      />

                    </div>

                  </div>

                </div>

              );
            }
          )}

        </div>

      </section>


      {/* =====================================
          TABELA
      ====================================== */}

      <section className="dados-tabela-section">

        <div className="dados-section-title">

          <div>

            <span>
              21 PROVÍNCIAS
            </span>

            <h3>
              Situação dos dados por província
            </h3>

          </div>

          <strong className="dados-contador">
            {dadosFiltrados.length} resultado(s)
          </strong>

        </div>


        <div className="dados-tabela-wrapper">

          <table className="dados-tabela">

            <thead>

              <tr>

                <th>
                  Província
                </th>

                <th>
                  Estado
                </th>

                <th>
                  Explorações
                </th>

                <th>
                  Área plantada
                </th>

                <th>
                  Fonte
                </th>

                <th>
                  Ver
                </th>

              </tr>

            </thead>


            <tbody>

              {dadosFiltrados.map(
                (item) => (

                  <tr
                    key={item.slug}
                  >

                    <td>
                      <strong>
                        {item.nome}
                      </strong>
                    </td>


                    <td>

                      {item.temDados ? (

                        <span className="dados-estado disponivel">
                          Disponível
                        </span>

                      ) : (

                        <span className="dados-estado indisponivel">
                          Não disponível
                        </span>

                      )}

                    </td>


                    <td>

                      {item.dados
                        ? formatarNumero(
                            item.dados
                              .exploracoesProdutoras
                          )
                        : "—"}

                    </td>


                    <td>

                      {item.dados
                        ? formatarArea(
                            item.dados
                              .areaPlantadaTotal
                          )
                        : "—"}

                    </td>


                    <td>

                      {item.dados
                        ? `${item.dados.fonte} · ${item.dados.periodo}`
                        : "ICAPP 2024/2025"}

                    </td>


                    <td>

                      <a
                        href={`/mapa/${item.slug}`}
                        className="dados-link"
                      >
                        Abrir
                      </a>

                    </td>

                  </tr>

                )
              )}


              {dadosFiltrados.length === 0 && (

                <tr>

                  <td
                    colSpan={6}
                    className="dados-sem-resultados"
                  >
                    Nenhuma província encontrada.
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </section>


      {/* =====================================
          PROVÍNCIAS SEM DADOS
      ====================================== */}

      <section className="dados-sem-dados-lista">

        <div className="dados-section-title">

          <div>

            <span>
              TRANSPARÊNCIA
            </span>

            <h3>
              Províncias sem dados comparáveis
            </h3>

          </div>

        </div>


        <div className="dados-sem-dados-grid">

          {provinciasSemDados.map(
            (provincia) => (

              <div
                className="dados-sem-dados-mini"
                key={provincia.slug}
              >

                <strong>
                  {provincia.nome}
                </strong>

                <p>
                  Dados provinciais não disponíveis
                  nesta fonte/período.
                </p>

                <a
                  href={`/mapa/${provincia.slug}`}
                  className="dados-link"
                >
                  Consultar província
                </a>

              </div>

            )
          )}

        </div>

      </section>


      {/* =====================================
          FONTE
      ====================================== */}

      <section className="dados-fonte">

        <div>

          <span>
            FONTE OFICIAL
          </span>

          <h3>
            Instituto Nacional de Estatística
          </h3>

          <p>
            Inquérito Contínuo Agro-Pecuário e
            Pescas (ICAPP), campanha 2024/2025.
          </p>

          <p>
            A informação apresentada corresponde
            aos dados provinciais disponíveis na
            fonte integrada. A plataforma não
            calcula nem redistribui valores que
            não estejam publicados para a actual
            configuração territorial.
          </p>

        </div>


        <a
          href="https://www.ine.gov.ao/publicacoes/detalhes/NTM0NzU%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="dados-btn"
        >
          Consultar fonte do INE
        </a>

      </section>

    </div>
  );
}