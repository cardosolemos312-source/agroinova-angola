"use client";

import { useMemo, useState } from "react";

import {
  dadosAgricolas,
} from "../data/oficial/agricultura/dados";

import {
  dadosPecuaria,
} from "../data/oficial/pecuaria/dados";

import {
  provinciasAngola,
} from "../data/provincias-angola";

import GraficosDados from "./GraficosDados";

type Categoria =
  | "agricultura"
  | "pecuaria";

type IndicadorAgricultura =
  | "exploracoesProdutoras"
  | "exploracoesFamiliares"
  | "exploracoesEmpresariais"
  | "areaPlantadaTotal"
  | "areaCulturasTemporarias"
  | "areaCulturasPermanentes";

type IndicadorPecuaria =
  | "exploracoesComAnimais"
  | "bovinos"
  | "suinos"
  | "ovinos"
  | "caprinos"
  | "aves"
  | "asininos"
  | "muares"
  | "equinos"
  | "bufalinos";

function formatarNumero(
  valor: number | null | undefined
) {
  if (
    valor === null ||
    valor === undefined
  ) {
    return "ND";
  }

  return new Intl.NumberFormat(
    "pt-AO"
  ).format(valor);
}

function formatarArea(
  valor: number | null | undefined
) {
  if (
    valor === null ||
    valor === undefined
  ) {
    return "ND";
  }

  return `${formatarNumero(valor)} ha`;
}

export default function PainelDados() {

  /*
   * =====================================================
   * ESTADO
   * =====================================================
   */

  const [categoria, setCategoria] =
    useState<Categoria>("agricultura");

  const [
    provinciaSelecionada,
    setProvinciaSelecionada,
  ] = useState("todas");

  const [
    indicadorAgricultura,
    setIndicadorAgricultura,
  ] =
    useState<IndicadorAgricultura>(
      "exploracoesProdutoras"
    );

  const [
    indicadorPecuaria,
    setIndicadorPecuaria,
  ] =
    useState<IndicadorPecuaria>(
      "exploracoesComAnimais"
    );

  const [pesquisa, setPesquisa] =
    useState("");

  /*
   * =====================================================
   * PROVÍNCIAS
   * =====================================================
   */

  const provincias = useMemo(() => {
    return provinciasAngola
      .map((provincia) => ({
        slug: provincia.slug,
        nome: provincia.nome,
      }))
      .sort((a, b) =>
        a.nome.localeCompare(
          b.nome,
          "pt"
        )
      );
  }, []);

  /*
   * =====================================================
   * INDICADORES DE AGRICULTURA
   * =====================================================
   */

  const indicadoresAgricultura = [
    {
      chave:
        "exploracoesProdutoras" as const,
      nome: "Explorações produtoras",
      unidade: "explorações",
    },

    {
      chave:
        "exploracoesFamiliares" as const,
      nome: "Explorações familiares",
      unidade: "explorações",
    },

    {
      chave:
        "exploracoesEmpresariais" as const,
      nome: "Explorações empresariais",
      unidade: "explorações",
    },

    {
      chave:
        "areaPlantadaTotal" as const,
      nome: "Área plantada total",
      unidade: "ha",
    },

    {
      chave:
        "areaCulturasTemporarias" as const,
      nome: "Culturas temporárias",
      unidade: "ha",
    },

    {
      chave:
        "areaCulturasPermanentes" as const,
      nome: "Culturas permanentes",
      unidade: "ha",
    },
  ];

  /*
   * =====================================================
   * INDICADORES DE PECUÁRIA
   * =====================================================
   */

  const indicadoresPecuaria = [
    {
      chave:
        "exploracoesComAnimais" as const,
      nome: "Explorações com animais",
      unidade: "explorações",
    },

    {
      chave: "bovinos" as const,
      nome: "Bovinos",
      unidade: "animais",
    },

    {
      chave: "suinos" as const,
      nome: "Suínos",
      unidade: "animais",
    },

    {
      chave: "ovinos" as const,
      nome: "Ovinos",
      unidade: "animais",
    },

    {
      chave: "caprinos" as const,
      nome: "Caprinos",
      unidade: "animais",
    },

    {
      chave: "aves" as const,
      nome: "Aves",
      unidade: "animais",
    },

    {
      chave: "asininos" as const,
      nome: "Asininos",
      unidade: "animais",
    },

    {
      chave: "muares" as const,
      nome: "Muares",
      unidade: "animais",
    },

    {
      chave: "equinos" as const,
      nome: "Equinos",
      unidade: "animais",
    },

    {
      chave: "bufalinos" as const,
      nome: "Bufalinos",
      unidade: "animais",
    },
  ];

  /*
   * =====================================================
   * DADOS AGRÍCOLAS PROVINCIAIS
   * =====================================================
   */

  const dadosAgricolasProvinciais =
    useMemo(() => {
      return provincias.map((provincia) => {

        const dados =
          dadosAgricolas[
            provincia.slug
          ];

        return {
          ...provincia,
          dados,
          temDados: Boolean(dados),
        };
      });
    }, [provincias]);

  /*
   * =====================================================
   * DADOS PECUÁRIOS PROVINCIAIS
   * =====================================================
   */

  const dadosPecuariosProvinciais =
    useMemo(() => {

      return provincias.map((provincia) => {

        const dados =
          dadosPecuaria.provincias.find(
            (item) => {

              const nomeFonte =
                item.provincia
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(
                    /[\u0300-\u036f]/g,
                    ""
                  );

              const nomeProvincia =
                provincia.nome
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(
                    /[\u0300-\u036f]/g,
                    ""
                  );

              return (
                nomeFonte ===
                nomeProvincia
              );
            }
          );

        return {
          ...provincia,
          dados,
          temDados: Boolean(dados),
        };
      });

    }, [provincias]);

  /*
   * =====================================================
   * CONJUNTO ACTUAL
   * =====================================================
   */

  const dadosActuais =
    categoria === "agricultura"
      ? dadosAgricolasProvinciais
      : dadosPecuariosProvinciais;

  /*
   * =====================================================
   * INDICADOR ACTUAL
   * =====================================================
   */

  const indicadorActual =
    categoria === "agricultura"
      ? indicadorAgricultura
      : indicadorPecuaria;

  /*
   * =====================================================
   * NOME DO INDICADOR
   * =====================================================
   */

  const nomeIndicador =
    categoria === "agricultura"
      ? indicadoresAgricultura.find(
          (item) =>
            item.chave ===
            indicadorAgricultura
        )?.nome
      : indicadoresPecuaria.find(
          (item) =>
            item.chave ===
            indicadorPecuaria
        )?.nome;

  /*
   * =====================================================
   * UNIDADE DO INDICADOR
   * =====================================================
   */

  const unidadeIndicador =
    categoria === "agricultura"
      ? indicadoresAgricultura.find(
          (item) =>
            item.chave ===
            indicadorAgricultura
        )?.unidade
      : indicadoresPecuaria.find(
          (item) =>
            item.chave ===
            indicadorPecuaria
        )?.unidade;

  /*
   * =====================================================
   * FILTRO
   * =====================================================
   */

  const dadosFiltrados =
    useMemo(() => {

      const termo =
        pesquisa
          .trim()
          .toLowerCase();

      return dadosActuais.filter(
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
      dadosActuais,
      provinciaSelecionada,
      pesquisa,
    ]);

  /*
   * =====================================================
   * OBTER VALOR
   * =====================================================
   */

  function obterValor(
    provincia: (typeof dadosActuais)[number]
  ): number | null | undefined {

    if (!provincia.dados) {
      return null;
    }

    /*
     * AGRICULTURA
     */

    if (categoria === "agricultura") {

      const dados =
        provincia.dados as
          | typeof dadosAgricolas[string]
          | undefined;

      if (!dados) {
        return null;
      }

      return dados[
        indicadorAgricultura
      ] as number | null | undefined;
    }

    /*
     * PECUÁRIA
     */

    const dados =
      provincia.dados as
        | (typeof dadosPecuaria.provincias)[number]
        | undefined;

    if (!dados) {
      return null;
    }

    return dados[
      indicadorPecuaria
    ] as number | null | undefined;
  }

  /*
   * =====================================================
   * RANKING
   * =====================================================
   */

  const ranking =
    useMemo(() => {

      return [...dadosActuais]
        .filter(
          (item) => {

            const valor =
              obterValor(item);

            return (
              valor !== null &&
              valor !== undefined
            );
          }
        )
        .sort(
          (a, b) => {

            const valorA =
              Number(
                obterValor(a)
              );

            const valorB =
              Number(
                obterValor(b)
              );

            return (
              valorB - valorA
            );
          }
        );

    }, [
      dadosActuais,
      indicadorActual,
      categoria,
    ]);

  const primeiro =
    ranking[0];

  /*
   * =====================================================
   * RESUMO
   * =====================================================
   */

  const totalRegistos =
    dadosActuais.filter(
      (item) =>
        item.temDados
    ).length;

  const totalProvincias =
    provincias.length;

  /*
   * =====================================================
   * RENDER
   * =====================================================
   */

  return (
    <div className="dados-dashboard">

      {/* =================================================
          CABEÇALHO
      ================================================= */}

      <div className="dados-dashboard-header">

        <div>

          <span className="section-label">
            CENTRO NACIONAL DE DADOS
          </span>

          <h2>
            Dados agropecuários de Angola
          </h2>

          <p>
            Consulte dados oficiais de
            agricultura e pecuária,
            filtre por província e indicador
            e compare os resultados
            disponíveis.
          </p>

        </div>

        <div className="dados-source-badge">
          INE · ICAPP 2024/2025
        </div>

      </div>


      {/* =================================================
          CATEGORIAS
      ================================================= */}

      <div className="dados-categorias">

        <button
          type="button"
          className={
            categoria === "agricultura"
              ? "dados-categoria ativa"
              : "dados-categoria"
          }
          onClick={() => {

            setCategoria(
              "agricultura"
            );

            setProvinciaSelecionada(
              "todas"
            );

            setPesquisa("");

          }}
        >

          <span className="dados-categoria-icone">
            🌾
          </span>

          <span>

            <strong>
              Agricultura
            </strong>

            <small>
              Produção vegetal e áreas
            </small>

          </span>

        </button>


        <button
          type="button"
          className={
            categoria === "pecuaria"
              ? "dados-categoria ativa"
              : "dados-categoria"
          }
          onClick={() => {

            setCategoria(
              "pecuaria"
            );

            setProvinciaSelecionada(
              "todas"
            );

            setPesquisa("");

          }}
        >

          <span className="dados-categoria-icone">
            🐄
          </span>

          <span>

            <strong>
              Pecuária
            </strong>

            <small>
              Efectivo e explorações
            </small>

          </span>

        </button>

      </div>


      {/* =================================================
          FILTROS
      ================================================= */}

      <div className="dados-filtros">

        <div className="dados-filtro">

          <label>
            Província
          </label>

          <select
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
                  key={
                    provincia.slug
                  }
                  value={
                    provincia.slug
                  }
                >
                  {provincia.nome}
                </option>

              )
            )}

          </select>

        </div>


        <div className="dados-filtro">

          <label>
            Indicador
          </label>

          <select
            value={
              indicadorActual
            }
            onChange={(evento) => {

              if (
                categoria ===
                "agricultura"
              ) {

                setIndicadorAgricultura(
                  evento.target
                    .value as
                    IndicadorAgricultura
                );

              } else {

                setIndicadorPecuaria(
                  evento.target
                    .value as
                    IndicadorPecuaria
                );

              }

            }}
          >

            {categoria ===
            "agricultura"

              ? indicadoresAgricultura.map(
                  (item) => (

                    <option
                      key={
                        item.chave
                      }
                      value={
                        item.chave
                      }
                    >
                      {item.nome}
                    </option>

                  )
                )

              : indicadoresPecuaria.map(
                  (item) => (

                    <option
                      key={
                        item.chave
                      }
                      value={
                        item.chave
                      }
                    >
                      {item.nome}
                    </option>

                  )
                )}

          </select>

        </div>


        <div className="dados-filtro">

          <label>
            Pesquisar
          </label>

          <input
            type="text"
            placeholder="Pesquisar província..."
            value={
              pesquisa
            }
            onChange={(evento) =>
              setPesquisa(
                evento.target.value
              )
            }
          />

        </div>

      </div>


      {/* =================================================
          KPIs
      ================================================= */}

      <div className="dados-kpis">

        <div className="dados-kpi">

          <span className="dados-kpi-icon">
            🇦🇴
          </span>

          <div>

            <small>
              CATEGORIA
            </small>

            <strong>
              {categoria ===
              "agricultura"
                ? "Agricultura"
                : "Pecuária"}
            </strong>

            <p>
              dados seleccionados
            </p>

          </div>

        </div>


        <div className="dados-kpi">

          <span className="dados-kpi-icon">
            📊
          </span>

          <div>

            <small>
              INDICADOR
            </small>

            <strong>
              {nomeIndicador}
            </strong>

            <p>
              {unidadeIndicador}
            </p>

          </div>

        </div>


        <div className="dados-kpi">

          <span className="dados-kpi-icon">
            📍
          </span>

          <div>

            <small>
              PROVÍNCIAS COM DADOS
            </small>

            <strong>
              {totalRegistos}/
              {totalProvincias}
            </strong>

            <p>
              nesta fonte
            </p>

          </div>

        </div>


        <div className="dados-kpi">

          <span className="dados-kpi-icon">
            📅
          </span>

          <div>

            <small>
              PERÍODO
            </small>

            <strong>
              2024/2025
            </strong>

            <p>
              ICAPP · INE
            </p>

          </div>

        </div>

      </div>


      {/* =================================================
          DESTAQUE
      ================================================= */}

      {primeiro && (

        <div className="dados-ranking-destaque">

          <div>

            <span>
              MAIOR VALOR DISPONÍVEL
            </span>

            <strong>
              {primeiro.nome}
            </strong>

            <small>
              {nomeIndicador}
            </small>

          </div>

          <strong>

            {categoria ===
              "agricultura" &&
            indicadorActual !==
              "exploracoesProdutoras" &&
            indicadorActual !==
              "exploracoesFamiliares" &&
            indicadorActual !==
              "exploracoesEmpresariais"

              ? formatarArea(
                  obterValor(
                    primeiro
                  )
                )

              : formatarNumero(
                  obterValor(
                    primeiro
                  )
                )}

          </strong>

        </div>

      )}


      {/* =================================================
          RANKING
      ================================================= */}

      <section className="dados-ranking">

        <div className="dados-section-title">

          <div>

            <span>
              COMPARAÇÃO
            </span>

            <h3>
              {nomeIndicador}
            </h3>

          </div>

          <small>
            {unidadeIndicador}
          </small>

        </div>


        <div className="ranking-list">

          {ranking.map(
            (item, index) => {

              const valor =
                obterValor(item);

              const maiorValor =
                obterValor(
                  ranking[0]
                ) ?? 1;

              const largura =
                Number(
                  maiorValor
                ) > 0

                  ? (
                      Number(
                        valor
                      ) /
                      Number(
                        maiorValor
                      )
                    ) *
                    100

                  : 0;

              return (

                <div
                  className="ranking-item"
                  key={
                    item.slug
                  }
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

                        {categoria ===
                          "agricultura" &&
                        indicadorActual !==
                          "exploracoesProdutoras" &&
                        indicadorActual !==
                          "exploracoesFamiliares" &&
                        indicadorActual !==
                          "exploracoesEmpresariais"

                          ? formatarArea(
                              valor
                            )

                          : formatarNumero(
                              valor
                            )}

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


      {/* =================================================
          TABELA
      ================================================= */}

      <section className="dados-tabela-section">

        <div className="dados-section-title">

          <div>

            <span>
              DADOS PROVINCIAIS
            </span>

            <h3>
              {nomeIndicador}
            </h3>

          </div>

          <strong className="dados-contador">
            {dadosFiltrados.length}
            {" "}
            resultado(s)
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
                  {nomeIndicador}
                </th>

                <th>
                  Fonte
                </th>

                <th>
                  Período
                </th>

              </tr>

            </thead>


            <tbody>

              {dadosFiltrados.map(
                (item) => {

                  const valor =
                    obterValor(item);

                  return (

                    <tr
                      key={
                        item.slug
                      }
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

                        {categoria ===
                          "agricultura" &&
                        indicadorActual !==
                          "exploracoesProdutoras" &&
                        indicadorActual !==
                          "exploracoesFamiliares" &&
                        indicadorActual !==
                          "exploracoesEmpresariais"

                          ? formatarArea(
                              valor
                            )

                          : formatarNumero(
                              valor
                            )}

                      </td>


                      <td>
                        INE
                      </td>


                      <td>
                        ICAPP 2024/2025
                      </td>

                    </tr>

                  );

                }
              )}


              {dadosFiltrados.length ===
                0 && (

                <tr>

                  <td
                    colSpan={5}
                    className="dados-sem-resultados"
                  >
                    Nenhum resultado encontrado.
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </section>


      {/* =================================================
          GRÁFICOS
      ================================================= */}

      <GraficosDados
        categoria={categoria}
      />


      {/* =================================================
          TRANSPARÊNCIA
      ================================================= */}

      <div className="dados-aviso-territorial">

        <strong>
          Transparência dos dados
        </strong>


        {categoria ===
        "agricultura" ? (

          <>

            <p>
              Os dados agrícolas
              apresentados correspondem
              aos indicadores disponíveis
              no ICAPP 2024/2025.
            </p>

            <p>
              A fonte utiliza uma
              configuração territorial
              que não corresponde
              integralmente à actual
              divisão administrativa
              de Angola.
            </p>

            <p>
              A AGROINOVA ANGOLA não
              redistribui, estima ou
              inventa valores para
              províncias sem dados
              directamente comparáveis.
            </p>

          </>

        ) : (

          <>

            <p>
              Os dados pecuários
              apresentados correspondem
              aos indicadores disponíveis
              no ICAPP 2024/2025 do INE.
            </p>

            <p>
              A fonte apresenta
              explorações com animais
              e diferentes espécies
              pecuárias por unidade
              territorial.
            </p>

            <p>
              O valor "ND" significa
              que o dado não está
              disponível na fonte.
            </p>

            <p>
              Uma exploração pode criar
              mais de uma espécie animal.
              Por isso, os valores das
              espécies não devem ser
              somados para obter o número
              de explorações.
            </p>

          </>

        )}

      </div>


      {/* =================================================
          FONTE
      ================================================= */}

      <section className="dados-fonte">

        <div>

          <span>
            FONTE OFICIAL
          </span>

          <h3>
            Instituto Nacional de Estatística
          </h3>

          <p>
            Inquérito Contínuo
            Agro-Pecuário e Pescas
            — ICAPP 2024/2025.
          </p>

          <p>
            A AGROINOVA ANGOLA apresenta
            os dados mantendo a indicação
            da fonte, período e nível
            territorial.
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