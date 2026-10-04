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

import { dadosPecuaria } from "../data/oficial/pecuaria/dados";

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

export default function GraficosDadosPecuaria() {
  const efectivo = dadosPecuaria.efectivoAnimal;

  const dadosEfectivo = Object.entries(efectivo).map(
    ([, especie]) => ({
      nome: especie.nome,
      total: especie.total,
      familiar: especie.familiar ?? 0,
      empresarial: especie.empresarial ?? 0,
    })
  );

  const dadosFamiliarEmpresarial = [
    {
      nome: "Familiar",
      valor: dadosEfectivo.reduce(
        (total, item) => total + item.familiar,
        0
      ),
    },
    {
      nome: "Empresarial",
      valor: dadosEfectivo.reduce(
        (total, item) => total + item.empresarial,
        0
      ),
    },
  ];

  return (
    <section className="pecuaria-graficos">

      <div className="pecuaria-graficos-header">
        <span>DADOS DO ICAPP 2024/2025</span>

        <h2>Efectivo animal em Angola</h2>

        <p>
          Os gráficos apresentam o efectivo animal
          registado pelo INE no ICAPP 2024/2025,
          distinguindo os valores das explorações
          familiares e empresariais.
        </p>
      </div>

      <div className="pecuaria-graficos-grid">

        {/* EFECTIVO TOTAL */}
        <div className="pecuaria-grafico-card">

          <div className="pecuaria-grafico-topo">
            <span>EFECTIVO TOTAL</span>

            <h3>
              Animais por espécie
            </h3>
          </div>

          <div className="pecuaria-grafico">

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
                  tick={{ fontSize: 11 }}
                />

                <YAxis
                  tick={{ fontSize: 11 }}
                />

                <Tooltip
                  formatter={(value) =>
                    Number(value).toLocaleString("pt-PT")
                  }
                />

                <Bar
                  dataKey="total"
                  name="Efectivo total"
                  fill="#15803d"
                  radius={[5, 5, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>

          </div>

          <p className="pecuaria-grafico-fonte">
            Fonte: INE — ICAPP 2024/2025, Quadro 14.
          </p>

        </div>

        {/* FAMILIAR VS EMPRESARIAL */}
        <div className="pecuaria-grafico-card">

          <div className="pecuaria-grafico-topo">
            <span>ESTRUTURA DO EFECTIVO</span>

            <h3>
              Familiar vs empresarial
            </h3>
          </div>

          <div className="pecuaria-grafico pecuaria-grafico-pie">

            <ResponsiveContainer
              width="100%"
              height={380}
            >
              <PieChart>

                <Pie
                  data={dadosFamiliarEmpresarial}
                  dataKey="valor"
                  nameKey="nome"
                  cx="50%"
                  cy="48%"
                  outerRadius={125}
                  label={({ name, percent }) =>
                    `${name} ${(
                      Number(percent) * 100
                    ).toFixed(1)}%`
                  }
                >

                  {dadosFamiliarEmpresarial.map(
                    (_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={CORES[index]}
                      />
                    )
                  )}

                </Pie>

                <Tooltip
                  formatter={(value) =>
                    Number(value).toLocaleString("pt-PT")
                  }
                />

                <Legend />

              </PieChart>
            </ResponsiveContainer>

          </div>

          <p className="pecuaria-grafico-fonte">
            Fonte: INE — ICAPP 2024/2025, Quadro 14.
          </p>

        </div>

        {/* FAMILIAR POR ESPÉCIE */}
        <div className="pecuaria-grafico-card">

          <div className="pecuaria-grafico-topo">
            <span>EXPLORAÇÕES FAMILIARES</span>

            <h3>
              Efectivo familiar por espécie
            </h3>
          </div>

          <div className="pecuaria-grafico">

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
                  tick={{ fontSize: 11 }}
                />

                <YAxis
                  tick={{ fontSize: 11 }}
                />

                <Tooltip
                  formatter={(value) =>
                    Number(value).toLocaleString("pt-PT")
                  }
                />

                <Bar
                  dataKey="familiar"
                  name="Familiar"
                  fill="#65a30d"
                  radius={[5, 5, 0, 0]}
                />

              </BarChart>
            </ResponsiveContainer>

          </div>

          <p className="pecuaria-grafico-fonte">
            Fonte: INE — ICAPP 2024/2025, Quadro 14.
          </p>

        </div>

        {/* EMPRESARIAL POR ESPÉCIE */}
        <div className="pecuaria-grafico-card">

          <div className="pecuaria-grafico-topo">
            <span>EXPLORAÇÕES EMPRESARIAIS</span>

            <h3>
              Efectivo empresarial por espécie
            </h3>
          </div>

          <div className="pecuaria-grafico">

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
                  tick={{ fontSize: 11 }}
                />

                <YAxis
                  tick={{ fontSize: 11 }}
                />

                <Tooltip
                  formatter={(value) =>
                    Number(value).toLocaleString("pt-PT")
                  }
                />

                <Bar
                  dataKey="empresarial"
                  name="Empresarial"
                  fill="#ca8a04"
                  radius={[5, 5, 0, 0]}
                />

              </BarChart>
            </ResponsiveContainer>

          </div>

          <p className="pecuaria-grafico-fonte">
            Fonte: INE — ICAPP 2024/2025, Quadro 14.
          </p>

        </div>

      </div>

    </section>
  );
}