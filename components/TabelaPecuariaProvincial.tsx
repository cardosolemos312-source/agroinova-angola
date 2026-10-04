"use client";

import { useMemo, useState } from "react";
import { dadosPecuaria } from "../data/oficial/pecuaria/dados";

type Indicador =
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

const indicadores: {
  chave: Indicador;
  nome: string;
}[] = [
  {
    chave: "exploracoesComAnimais",
    nome: "Explorações com animais",
  },
  {
    chave: "bovinos",
    nome: "Bovinos",
  },
  {
    chave: "suinos",
    nome: "Suínos",
  },
  {
    chave: "ovinos",
    nome: "Ovinos",
  },
  {
    chave: "caprinos",
    nome: "Caprinos",
  },
  {
    chave: "aves",
    nome: "Aves",
  },
  {
    chave: "asininos",
    nome: "Asininos",
  },
  {
    chave: "muares",
    nome: "Muares",
  },
  {
    chave: "equinos",
    nome: "Equinos",
  },
  {
    chave: "bufalinos",
    nome: "Bufalinos",
  },
];

function formatarNumero(
  valor: number | null | undefined
) {
  if (valor === null || valor === undefined) {
    return "ND";
  }

  return new Intl.NumberFormat("pt-AO").format(valor);
}

export default function TabelaPecuariaProvincial() {
  const [indicador, setIndicador] =
    useState<Indicador>("exploracoesComAnimais");

  const [ordem, setOrdem] =
    useState<"maior" | "menor">("maior");

  const dadosOrdenados = useMemo(() => {
    return [...dadosPecuaria.provincias].sort(
      (a, b) => {
        const valorA = a[indicador] ?? -1;
        const valorB = b[indicador] ?? -1;

        if (ordem === "maior") {
          return valorB - valorA;
        }

        return valorA - valorB;
      }
    );
  }, [indicador, ordem]);

  const ranking = dadosOrdenados.filter(
    (provincia) =>
      provincia[indicador] !== null &&
      provincia[indicador] !== undefined
  );

  const primeiro = ranking[0];

  const nomeIndicador =
    indicadores.find(
      (item) => item.chave === indicador
    )?.nome ?? "";

  return (
    <section className="pecuaria-provincial">

      {/* ==================================================
          CABEÇALHO
          ================================================== */}

      <div className="pecuaria-section-heading">

        <span>
          DISTRIBUIÇÃO PROVINCIAL
        </span>

        <h2>
          Pecuária por província
        </h2>

        <p>
          Distribuição das explorações e do efectivo
          animal segundo as unidades territoriais
          apresentadas pelo ICAPP 2024/2025.
        </p>

      </div>


      {/* ==================================================
          CONTROLOS
          ================================================== */}

      <div className="pecuaria-ranking-controles">

        <div className="pecuaria-ranking-controle">

          <label htmlFor="indicador-pecuario">
            Indicador
          </label>

          <select
            id="indicador-pecuario"
            value={indicador}
            onChange={(event) =>
              setIndicador(
                event.target.value as Indicador
              )
            }
          >

            {indicadores.map((item) => (
              <option
                key={item.chave}
                value={item.chave}
              >
                {item.nome}
              </option>
            ))}

          </select>

        </div>


        <div className="pecuaria-ranking-controle">

          <label htmlFor="ordem-pecuaria">
            Ordenação
          </label>

          <select
            id="ordem-pecuaria"
            value={ordem}
            onChange={(event) =>
              setOrdem(
                event.target.value as
                  | "maior"
                  | "menor"
              )
            }
          >

            <option value="maior">
              Maior para menor
            </option>

            <option value="menor">
              Menor para maior
            </option>

          </select>

        </div>

      </div>


      {/* ==================================================
          DESTAQUE DO PRIMEIRO
          ================================================== */}

      {primeiro && (

        <div className="pecuaria-ranking-destaque">

          <div>

            <span>
              1.º LUGAR
            </span>

            <strong>
              {primeiro.provincia}
            </strong>

            <small>
              {nomeIndicador}
            </small>

          </div>

          <strong>
            {formatarNumero(
              primeiro[indicador]
            )}
          </strong>

        </div>

      )}


      {/* ==================================================
          RANKING
          ================================================== */}

      <div className="pecuaria-ranking-lista">

        <div className="pecuaria-ranking-titulo">

          <span>
            RANKING
          </span>

          <strong>
            {nomeIndicador}
          </strong>

        </div>


        {dadosOrdenados.map(
          (provincia, index) => {

            const valor =
              provincia[indicador];

            const percentual =
              primeiro &&
              primeiro[indicador] &&
              valor !== null &&
              valor !== undefined
                ? (valor /
                    primeiro[indicador]) *
                  100
                : 0;

            return (
              <div
                className="pecuaria-ranking-item"
                key={provincia.provincia}
              >

                <div className="pecuaria-ranking-posicao">
                  {index + 1}
                </div>


                <div className="pecuaria-ranking-info">

                  <div className="pecuaria-ranking-nome">

                    <strong>
                      {provincia.provincia}
                    </strong>

                    <span>
                      {formatarNumero(valor)}
                    </span>

                  </div>


                  <div className="pecuaria-ranking-barra">

                    <div
                      style={{
                        width: `${percentual}%`,
                      }}
                    />

                  </div>

                </div>

              </div>
            );
          }
        )}

      </div>


      {/* ==================================================
          TABELA
          ================================================== */}

      <div className="pecuaria-tabela-wrapper">

        <div className="pecuaria-tabela-cabecalho">

          <div>

            <span>
              QUADRO PROVINCIAL
            </span>

            <h3>
              Indicadores de pecuária
            </h3>

          </div>

          <small>
            Fonte: INE — ICAPP 2024/2025,
            Quadro 13.
          </small>

        </div>


        <div className="pecuaria-tabela-scroll">

          <table className="pecuaria-tabela">

            <thead>

              <tr>

                <th>
                  Província
                </th>

                <th>
                  Explorações
                </th>

                <th>
                  Bovinos
                </th>

                <th>
                  Suínos
                </th>

                <th>
                  Ovinos
                </th>

                <th>
                  Caprinos
                </th>

                <th>
                  Aves
                </th>

                <th>
                  Asininos
                </th>

                <th>
                  Muares
                </th>

                <th>
                  Equinos
                </th>

                <th>
                  Bufalinos
                </th>

              </tr>

            </thead>


            <tbody>

              {dadosPecuaria.provincias.map(
                (provincia) => (

                  <tr
                    key={provincia.provincia}
                  >

                    <td>
                      <strong>
                        {provincia.provincia}
                      </strong>
                    </td>

                    <td>
                      {formatarNumero(
                        provincia.exploracoesComAnimais
                      )}
                    </td>

                    <td>
                      {formatarNumero(
                        provincia.bovinos
                      )}
                    </td>

                    <td>
                      {formatarNumero(
                        provincia.suinos
                      )}
                    </td>

                    <td>
                      {formatarNumero(
                        provincia.ovinos
                      )}
                    </td>

                    <td>
                      {formatarNumero(
                        provincia.caprinos
                      )}
                    </td>

                    <td>
                      {formatarNumero(
                        provincia.aves
                      )}
                    </td>

                    <td>
                      {formatarNumero(
                        provincia.asininos
                      )}
                    </td>

                    <td>
                      {formatarNumero(
                        provincia.muares
                      )}
                    </td>

                    <td>
                      {formatarNumero(
                        provincia.equinos
                      )}
                    </td>

                    <td>
                      {formatarNumero(
                        provincia.bufalinos
                      )}
                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      </div>


      {/* ==================================================
          NOTA
          ================================================== */}

      <div className="pecuaria-tabela-nota">

        <strong>
          Nota:
        </strong>

        <span>
          Os valores apresentados são os publicados
          pelo INE. A indicação "ND" corresponde a
          valor não disponível na fonte. As espécies
          não devem ser somadas para obter o número
          de explorações, porque uma mesma exploração
          pode criar mais de uma espécie.
        </span>

      </div>

    </section>
  );
}