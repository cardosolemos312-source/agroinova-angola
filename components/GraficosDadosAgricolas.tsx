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

function formatarNumero(valor: number) {
  return new Intl.NumberFormat("pt-PT").format(
    valor
  );
}

const dadosBase = Object.values(
  dadosAgricolas
);

/* =========================================
   ÁREA PLANTADA
========================================= */

const dadosArea = [...dadosBase]
  .sort(
    (a, b) =>
      b.areaPlantadaTotal -
      a.areaPlantadaTotal
  )
  .slice(0, 10)
  .map((dados) => ({
    provincia: dados.provincia,
    area: dados.areaPlantadaTotal,
  }));

/* =========================================
   EXPLORAÇÕES
========================================= */

const dadosExploracoes = [...dadosBase]
  .sort(
    (a, b) =>
      b.exploracoesProdutoras -
      a.exploracoesProdutoras
  )
  .slice(0, 10)
  .map((dados) => ({
    provincia: dados.provincia,
    exploracoes:
      dados.exploracoesProdutoras,
  }));

/* =========================================
   ESTRUTURA DAS EXPLORAÇÕES
========================================= */

const totalFamiliares =
  dadosBase.reduce(
    (total, dados) =>
      total +
      dados.exploracoesFamiliares,
    0
  );

const totalEmpresariais =
  dadosBase.reduce(
    (total, dados) =>
      total +
      dados.exploracoesEmpresariais,
    0
  );

const dadosEstrutura = [
  {
    nome: "Familiares",
    valor: totalFamiliares,
  },
  {
    nome: "Empresariais",
    valor: totalEmpresariais,
  },
];

/* =========================================
   TEMPORÁRIAS VS PERMANENTES
========================================= */

const dadosCulturas = [...dadosBase]
  .sort(
    (a, b) =>
      b.areaPlantadaTotal -
      a.areaPlantadaTotal
  )
  .slice(0, 10)
  .map((dados) => ({
    provincia: dados.provincia,
    temporarias:
      dados.areaCulturasTemporarias,
    permanentes:
      dados.areaCulturasPermanentes,
  }));

/* =========================================
   CORES DO GRÁFICO
========================================= */

const coresEstrutura = [
  "#166534",
  "#86efac",
];

export default function GraficosDadosAgricolas() {
  return (
    <section className="dados-graficos">

      {/* =====================================
          CABEÇALHO
      ====================================== */}

      <div className="dados-graficos-header">

        <div>

          <span>
            VISUALIZAÇÃO
          </span>

          <h3>
            Indicadores em gráficos
          </h3>

          <p>
            Representação visual dos dados
            provinciais disponíveis no
            ICAPP 2024/2025.
          </p>

        </div>

      </div>


      {/* =====================================
          GRÁFICO 1
      ====================================== */}

      <div className="dados-graficos-grid">

        <div className="dados-grafico-card">

          <div className="dados-grafico-topo">

            <div>

              <span>
                ÁREA PLANTADA
              </span>

              <h4>
                Principais províncias
              </h4>

            </div>

          </div>

          <div className="dados-grafico">

            <ResponsiveContainer
              width="100%"
              height={330}
            >

              <BarChart
                data={dadosArea}
                layout="vertical"
                margin={{
                  top: 5,
                  right: 20,
                  left: 10,
                  bottom: 5,
                }}
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={false}
                />

                <XAxis
                  type="number"
                  tickFormatter={
                    (valor) =>
                      formatarNumero(valor)
                  }
                />

                <YAxis
                  dataKey="provincia"
                  type="category"
                  width={95}
                  tick={{
                    fontSize: 11,
                  }}
                />

                <Tooltip
                  formatter={(
                    valor
                  ) => [
                    `${formatarNumero(
                      Number(valor)
                    )} ha`,
                    "Área plantada",
                  ]}
                />

                <Bar
                  dataKey="area"
                  fill="#166534"
                  radius={[
                    0,
                    6,
                    6,
                    0,
                  ]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

          <p className="dados-grafico-fonte">
            Fonte: INE — ICAPP 2024/2025
          </p>

        </div>


        {/* =====================================
            GRÁFICO 2
        ====================================== */}

        <div className="dados-grafico-card">

          <div className="dados-grafico-topo">

            <div>

              <span>
                EXPLORAÇÕES
              </span>

              <h4>
                Maiores concentrações
              </h4>

            </div>

          </div>

          <div className="dados-grafico">

            <ResponsiveContainer
              width="100%"
              height={330}
            >

              <BarChart
                data={dadosExploracoes}
                layout="vertical"
                margin={{
                  top: 5,
                  right: 20,
                  left: 10,
                  bottom: 5,
                }}
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={false}
                />

                <XAxis
                  type="number"
                  tickFormatter={
                    (valor) =>
                      formatarNumero(valor)
                  }
                />

                <YAxis
                  dataKey="provincia"
                  type="category"
                  width={95}
                  tick={{
                    fontSize: 11,
                  }}
                />

                <Tooltip
                  formatter={(
                    valor
                  ) => [
                    formatarNumero(
                      Number(valor)
                    ),
                    "Explorações",
                  ]}
                />

                <Bar
                  dataKey="exploracoes"
                  fill="#22c55e"
                  radius={[
                    0,
                    6,
                    6,
                    0,
                  ]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

          <p className="dados-grafico-fonte">
            Fonte: INE — ICAPP 2024/2025
          </p>

        </div>


        {/* =====================================
            GRÁFICO 3
        ====================================== */}

        <div className="dados-grafico-card">

          <div className="dados-grafico-topo">

            <div>

              <span>
                ESTRUTURA
              </span>

              <h4>
                Familiares e empresariais
              </h4>

            </div>

          </div>

          <div className="dados-grafico dados-grafico-pie">

            <ResponsiveContainer
              width="100%"
              height={330}
            >

              <PieChart>

                <Pie
                  data={dadosEstrutura}
                  dataKey="valor"
                  nameKey="nome"
                  cx="50%"
                  cy="48%"
                  outerRadius={105}
                  innerRadius={55}
                  paddingAngle={3}
                >

                  {dadosEstrutura.map(
                    (item, index) => (
                      <Cell
                        key={
                          item.nome
                        }
                        fill={
                          coresEstrutura[
                            index
                          ]
                        }
                      />
                    )
                  )}

                </Pie>

                <Tooltip
                  formatter={(
                    valor
                  ) => [
                    formatarNumero(
                      Number(valor)
                    ),
                    "Explorações",
                  ]}
                />

                <Legend />

              </PieChart>

            </ResponsiveContainer>

          </div>

          <p className="dados-grafico-fonte">
            Total das províncias com dados disponíveis
          </p>

        </div>


        {/* =====================================
            GRÁFICO 4
        ====================================== */}

        <div className="dados-grafico-card">

          <div className="dados-grafico-topo">

            <div>

              <span>
                ÁREA POR TIPO DE CULTURA
              </span>

              <h4>
                Temporárias vs. permanentes
              </h4>

            </div>

          </div>

          <div className="dados-grafico">

            <ResponsiveContainer
              width="100%"
              height={330}
            >

              <BarChart
                data={dadosCulturas}
                margin={{
                  top: 10,
                  right: 10,
                  left: 10,
                  bottom: 55,
                }}
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                />

                <XAxis
                  dataKey="provincia"
                  angle={-35}
                  textAnchor="end"
                  interval={0}
                  tick={{
                    fontSize: 10,
                  }}
                />

                <YAxis
                  tickFormatter={
                    (valor) =>
                      formatarNumero(
                        valor
                      )
                  }
                />

                <Tooltip
                  formatter={(
                    valor
                  ) => [
                    `${formatarNumero(
                      Number(valor)
                    )} ha`,
                    "",
                  ]}
                />

                <Legend />

                <Bar
                  dataKey="temporarias"
                  name="Temporárias"
                  fill="#166534"
                  radius={[
                    5,
                    5,
                    0,
                    0,
                  ]}
                />

                <Bar
                  dataKey="permanentes"
                  name="Permanentes"
                  fill="#86efac"
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
            Fonte: INE — ICAPP 2024/2025
          </p>

        </div>

      </div>

    </section>
  );
}