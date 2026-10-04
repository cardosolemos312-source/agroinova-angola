"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

import {
  dadosAgricolas,
} from "../data/oficial/agricultura/dados";

import {
  dadosPecuaria,
} from "../data/oficial/pecuaria/dados";

type Categoria =
  | "agricultura"
  | "pecuaria";

interface GraficosDadosProps {
  categoria: Categoria;
}

const CORES = [
  "#15803d",
  "#65a30d",
  "#ca8a04",
  "#ea580c",
  "#0284c7",
  "#7c3aed",
  "#be123c",
  "#0f766e",
  "#475569",
];

function formatarNumero(
  valor: number | null | undefined
) {
  if (
    valor === null ||
    valor === undefined
  ) {
    return "ND";
  }

  return Number(valor).toLocaleString(
    "pt-PT"
  );
}

export default function GraficosDados({
  categoria,
}: GraficosDadosProps) {

  /*
   * =====================================================
   * AGRICULTURA
   * =====================================================
   */

  if (categoria === "agricultura") {

    const dadosAgricultura =
      Object.values(
        dadosAgricolas
      )
        .filter(
          (item) =>
            item !== null &&
            item !== undefined
        )
        .map((item) => ({
          nome: item.provincia,
          exploracoes:
            item.exploracoesProdutoras,
          familiares:
            item.exploracoesFamiliares,
          empresariais:
            item.exploracoesEmpresariais,
          areaTotal:
            item.areaPlantadaTotal,
          temporarias:
            item.areaCulturasTemporarias,
          permanentes:
            item.areaCulturasPermanentes,
        }));


    const dadosExploracoes =
      dadosAgricultura
        .sort(
          (a, b) =>
            b.exploracoes -
            a.exploracoes
        )
        .slice(0, 10);


    const dadosArea =
      [...dadosAgricultura]
        .sort(
          (a, b) =>
            b.areaTotal -
            a.areaTotal
        )
        .slice(0, 10);


    const dadosFamiliaresEmpresariais =
      [
        {
          nome: "Familiares",
          valor:
            dadosAgricultura.reduce(
              (total, item) =>
                total +
                item.familiares,
              0
            ),
        },

        {
          nome: "Empresariais",
          valor:
            dadosAgricultura.reduce(
              (total, item) =>
                total +
                item.empresariais,
              0
            ),
        },
      ];


    const dadosAreasCulturas =
      [
        {
          nome: "Temporárias",
          valor:
            dadosAgricultura.reduce(
              (total, item) =>
                total +
                item.temporarias,
              0
            ),
        },

        {
          nome: "Permanentes",
          valor:
            dadosAgricultura.reduce(
              (total, item) =>
                total +
                item.permanentes,
              0
            ),
        },
      ];


    return (
      <section className="dados-graficos">

        <div className="dados-graficos-header">

          <span>
            DADOS DA AGRICULTURA ·
            ICAPP 2024/2025
          </span>

          <h2>
            Agricultura em Angola
          </h2>

          <p>
            Visualização dos dados
            oficiais do INE sobre
            explorações agrícolas
            e áreas cultivadas,
            segundo a informação
            disponível no
            ICAPP 2024/2025.
          </p>

        </div>


        <div className="dados-graficos-grid">

          {/* =========================================
              EXPLORAÇÕES
          ========================================= */}

          <div className="dados-grafico-card">

            <div className="dados-grafico-topo">

              <span>
                EXPLORAÇÕES AGRÍCOLAS
              </span>

              <h3>
                Explorações produtoras
                por província
              </h3>

            </div>


            <div className="dados-grafico">

              <ResponsiveContainer
                width="100%"
                height={380}
              >

                <BarChart
                  data={
                    dadosExploracoes
                  }
                  margin={{
                    top: 15,
                    right: 20,
                    left: 10,
                    bottom: 65,
                  }}
                >

                  <CartesianGrid
                    strokeDasharray="3 3"
                  />

                  <XAxis
                    dataKey="nome"
                    angle={-35}
                    textAnchor="end"
                    interval={0}
                    height={80}
                    tick={{
                      fontSize: 11,
                    }}
                  />

                  <YAxis
                    tick={{
                      fontSize: 11,
                    }}
                  />

                  <Tooltip
                    formatter={(value) =>
                      formatarNumero(
                        Number(value)
                      )
                    }
                  />

                  <Bar
                    dataKey="exploracoes"
                    name="Explorações"
                    fill="#15803d"
                    radius={[
                      5,
                      5,
                      0,
                      0,
                    ]}
                  />

                </BarChart>

              </ResponsiveContainer>

            </div>


            <p className="dados-grafico-fonte">
              Fonte: INE — ICAPP
              2024/2025.
            </p>

          </div>


          {/* =========================================
              ÁREA PLANTADA
          ========================================= */}

          <div className="dados-grafico-card">

            <div className="dados-grafico-topo">

              <span>
                ÁREA CULTIVADA
              </span>

              <h3>
                Área plantada total
              </h3>

            </div>


            <div className="dados-grafico">

              <ResponsiveContainer
                width="100%"
                height={380}
              >

                <BarChart
                  data={dadosArea}
                  margin={{
                    top: 15,
                    right: 20,
                    left: 10,
                    bottom: 65,
                  }}
                >

                  <CartesianGrid
                    strokeDasharray="3 3"
                  />

                  <XAxis
                    dataKey="nome"
                    angle={-35}
                    textAnchor="end"
                    interval={0}
                    height={80}
                    tick={{
                      fontSize: 11,
                    }}
                  />

                  <YAxis
                    tick={{
                      fontSize: 11,
                    }}
                  />

                  <Tooltip
                    formatter={(value) =>
                      `${formatarNumero(
                        Number(value)
                      )} ha`
                    }
                  />

                  <Bar
                    dataKey="areaTotal"
                    name="Área total"
                    fill="#65a30d"
                    radius={[
                      5,
                      5,
                      0,
                      0,
                    ]}
                  />

                </BarChart>

              </ResponsiveContainer>

            </div>


            <p className="dados-grafico-fonte">
              Fonte: INE — ICAPP
              2024/2025.
            </p>

          </div>


          {/* =========================================
              FAMILIAR VS EMPRESARIAL
          ========================================= */}

          <div className="dados-grafico-card">

            <div className="dados-grafico-topo">

              <span>
                ESTRUTURA DAS EXPLORAÇÕES
              </span>

              <h3>
                Familiar vs empresarial
              </h3>

            </div>


            <div className="dados-grafico dados-grafico-pie">

              <ResponsiveContainer
                width="100%"
                height={380}
              >

                <PieChart>

                  <Pie
                    data={
                      dadosFamiliaresEmpresariais
                    }
                    dataKey="valor"
                    nameKey="nome"
                    cx="50%"
                    cy="48%"
                    outerRadius={125}
                    label={({
                      name,
                      percent,
                    }) =>
                      `${name} ${
                        (
                          Number(
                            percent
                          ) * 100
                        ).toFixed(1)
                      }%`
                    }
                  >

                    {
                      dadosFamiliaresEmpresariais.map(
                        (
                          _,
                          index
                        ) => (
                          <Cell
                            key={`agri-cell-${index}`}
                            fill={
                              CORES[
                                index
                              ]
                            }
                          />
                        )
                      )
                    }

                  </Pie>

                  <Tooltip
                    formatter={(value) =>
                      formatarNumero(
                        Number(value)
                      )
                    }
                  />

                  <Legend />

                </PieChart>

              </ResponsiveContainer>

            </div>


            <p className="dados-grafico-fonte">
              Fonte: INE — ICAPP
              2024/2025.
            </p>

          </div>


          {/* =========================================
              CULTURAS
          ========================================= */}

          <div className="dados-grafico-card">

            <div className="dados-grafico-topo">

              <span>
                ÁREA POR TIPO DE CULTURA
              </span>

              <h3>
                Temporárias vs permanentes
              </h3>

            </div>


            <div className="dados-grafico dados-grafico-pie">

              <ResponsiveContainer
                width="100%"
                height={380}
              >

                <PieChart>

                  <Pie
                    data={
                      dadosAreasCulturas
                    }
                    dataKey="valor"
                    nameKey="nome"
                    cx="50%"
                    cy="48%"
                    outerRadius={125}
                    label={({
                      name,
                      percent,
                    }) =>
                      `${name} ${
                        (
                          Number(
                            percent
                          ) * 100
                        ).toFixed(1)
                      }%`
                    }
                  >

                    {
                      dadosAreasCulturas.map(
                        (
                          _,
                          index
                        ) => (
                          <Cell
                            key={`area-cell-${index}`}
                            fill={
                              CORES[
                                index + 2
                              ]
                            }
                          />
                        )
                      )
                    }

                  </Pie>

                  <Tooltip
                    formatter={(value) =>
                      `${formatarNumero(
                        Number(value)
                      )} ha`
                    }
                  />

                  <Legend />

                </PieChart>

              </ResponsiveContainer>

            </div>


            <p className="dados-grafico-fonte">
              Fonte: INE — ICAPP
              2024/2025.
            </p>

          </div>

        </div>

      </section>
    );
  }


  /*
   * =====================================================
   * PECUÁRIA
   * =====================================================
   */

  const efectivo =
    dadosPecuaria.efectivoAnimal;


  const dadosEfectivo =
    Object.entries(
      efectivo
    ).map(
      ([, especie]) => ({
        nome: especie.nome,
        total: especie.total,
        familiar:
          especie.familiar ?? 0,
        empresarial:
          especie.empresarial ?? 0,
      })
    );


  const dadosFamiliarEmpresarial =
    [
      {
        nome: "Familiar",
        valor:
          dadosEfectivo.reduce(
            (total, item) =>
              total +
              item.familiar,
            0
          ),
      },

      {
        nome: "Empresarial",
        valor:
          dadosEfectivo.reduce(
            (total, item) =>
              total +
              item.empresarial,
            0
          ),
      },
    ];


  return (
    <section className="dados-graficos">

      <div className="dados-graficos-header">

        <span>
          DADOS DA PECUÁRIA ·
          ICAPP 2024/2025
        </span>

        <h2>
          Efectivo animal em Angola
        </h2>

        <p>
          Visualização dos dados
          oficiais do INE sobre
          o efectivo animal
          registado no ICAPP
          2024/2025, segundo
          espécie e tipo de
          exploração pecuária.
        </p>

      </div>


      <div className="dados-graficos-grid">

        {/* =========================================
            TOTAL
        ========================================= */}

        <div className="dados-grafico-card">

          <div className="dados-grafico-topo">

            <span>
              EFECTIVO TOTAL
            </span>

            <h3>
              Animais por espécie
            </h3>

          </div>


          <div className="dados-grafico">

            <ResponsiveContainer
              width="100%"
              height={380}
            >

              <BarChart
                data={dadosEfectivo}
                margin={{
                  top: 15,
                  right: 20,
                  left: 10,
                  bottom: 65,
                }}
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                />

                <XAxis
                  dataKey="nome"
                  angle={-35}
                  textAnchor="end"
                  interval={0}
                  height={80}
                  tick={{
                    fontSize: 11,
                  }}
                />

                <YAxis
                  tick={{
                    fontSize: 11,
                  }}
                />

                <Tooltip
                  formatter={(value) =>
                    formatarNumero(
                      Number(value)
                    )
                  }
                />

                <Bar
                  dataKey="total"
                  name="Efectivo total"
                  fill="#15803d"
                  radius={[
                    5,
                    5,
                    0,
                    0,
                  ]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>


          <p className="dados-grafico-fonte">
            Fonte: INE — ICAPP
            2024/2025, Quadro 14.
          </p>

        </div>


        {/* =========================================
            FAMILIAR VS EMPRESARIAL
        ========================================= */}

        <div className="dados-grafico-card">

          <div className="dados-grafico-topo">

            <span>
              ESTRUTURA DO EFECTIVO
            </span>

            <h3>
              Familiar vs empresarial
            </h3>

          </div>


          <div className="dados-grafico dados-grafico-pie">

            <ResponsiveContainer
              width="100%"
              height={380}
            >

              <PieChart>

                <Pie
                  data={
                    dadosFamiliarEmpresarial
                  }
                  dataKey="valor"
                  nameKey="nome"
                  cx="50%"
                  cy="48%"
                  outerRadius={125}
                  label={({
                    name,
                    percent,
                  }) =>
                    `${name} ${
                      (
                        Number(
                          percent
                        ) * 100
                      ).toFixed(1)
                    }%`
                  }
                >

                  {
                    dadosFamiliarEmpresarial.map(
                      (
                        _,
                        index
                      ) => (
                        <Cell
                          key={`pec-cell-${index}`}
                          fill={
                            CORES[
                              index
                            ]
                          }
                        />
                      )
                    )
                  }

                </Pie>

                <Tooltip
                  formatter={(value) =>
                    formatarNumero(
                      Number(value)
                    )
                  }
                />

                <Legend />

              </PieChart>

            </ResponsiveContainer>

          </div>


          <p className="dados-grafico-fonte">
            Fonte: INE — ICAPP
            2024/2025, Quadro 14.
          </p>

        </div>


        {/* =========================================
            FAMILIAR
        ========================================= */}

        <div className="dados-grafico-card">

          <div className="dados-grafico-topo">

            <span>
              EXPLORAÇÕES FAMILIARES
            </span>

            <h3>
              Efectivo familiar por espécie
            </h3>

          </div>


          <div className="dados-grafico">

            <ResponsiveContainer
              width="100%"
              height={380}
            >

              <BarChart
                data={dadosEfectivo}
                margin={{
                  top: 15,
                  right: 20,
                  left: 10,
                  bottom: 65,
                }}
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                />

                <XAxis
                  dataKey="nome"
                  angle={-35}
                  textAnchor="end"
                  interval={0}
                  height={80}
                  tick={{
                    fontSize: 11,
                  }}
                />

                <YAxis
                  tick={{
                    fontSize: 11,
                  }}
                />

                <Tooltip
                  formatter={(value) =>
                    formatarNumero(
                      Number(value)
                    )
                  }
                />

                <Bar
                  dataKey="familiar"
                  name="Familiar"
                  fill="#65a30d"
                  radius={[
                    5,
                    5,
                    0,
                    0,
                  ]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>


          <p className="dados-grafico-fonte">
            Fonte: INE — ICAPP
            2024/2025, Quadro 14.
          </p>

        </div>


        {/* =========================================
            EMPRESARIAL
        ========================================= */}

        <div className="dados-grafico-card">

          <div className="dados-grafico-topo">

            <span>
              EXPLORAÇÕES EMPRESARIAIS
            </span>

            <h3>
              Efectivo empresarial por espécie
            </h3>

          </div>


          <div className="dados-grafico">

            <ResponsiveContainer
              width="100%"
              height={380}
            >

              <BarChart
                data={dadosEfectivo}
                margin={{
                  top: 15,
                  right: 20,
                  left: 10,
                  bottom: 65,
                }}
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                />

                <XAxis
                  dataKey="nome"
                  angle={-35}
                  textAnchor="end"
                  interval={0}
                  height={80}
                  tick={{
                    fontSize: 11,
                  }}
                />

                <YAxis
                  tick={{
                    fontSize: 11,
                  }}
                />

                <Tooltip
                  formatter={(value) =>
                    formatarNumero(
                      Number(value)
                    )
                  }
                />

                <Bar
                  dataKey="empresarial"
                  name="Empresarial"
                  fill="#ca8a04"
                  radius={[
                    5,
                    5,
                    0,
                    0,
                  ]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>


          <p className="dados-grafico-fonte">
            Fonte: INE — ICAPP
            2024/2025, Quadro 14.
          </p>

        </div>

      </div>

    </section>
  );
}