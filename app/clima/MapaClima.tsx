"use client";

import {
  CircleMarker,
  GeoJSON,
  MapContainer,
  TileLayer,
  Tooltip,
  useMap,
} from "react-leaflet";

import type {
  Feature,
  FeatureCollection,
  Geometry,
} from "geojson";

import { useEffect, useMemo, useState } from "react";

import "leaflet/dist/leaflet.css";

type VariavelClima =
  | "precipitacao"
  | "temperatura"
  | "vento"
  | "humidade"
  | "pressao"
  | "radiacao"
  | "solo"
  | "vegetacao";

type ModoPrecipitacao =
  | "mensal"
  | "acumulada"
  | "anomalia";

type PropriedadesProvincia = {
  name?: string;
  NAME_1?: string;
  nome?: string;
  provincia?: string;
};

type MapaClimaProps = {
  modo?: ModoPrecipitacao;
  mes?: number;
  ano?: number;
  onProvinciaSelecionada?: (nome: string) => void;
};

const CENTRO_ANGOLA: [number, number] = [
  -11.2027,
  17.8739,
];

const LIMITES_ANGOLA: [
  [number, number],
  [number, number]
] = [
  [-18.5, 11.4],
  [-4.2, 24.1],
];

const PONTOS = [
  {
    nome: "Cabinda",
    lat: -5.56,
    lng: 12.19,
  },
  {
    nome: "Zaire",
    lat: -6.27,
    lng: 13.60,
  },
  {
    nome: "Uíge",
    lat: -7.62,
    lng: 15.05,
  },
  {
    nome: "Bengo",
    lat: -9.10,
    lng: 13.73,
  },
  {
    nome: "Luanda",
    lat: -8.84,
    lng: 13.23,
  },
  {
    nome: "Icolo e Bengo",
    lat: -9.00,
    lng: 13.90,
  },
  {
    nome: "Cuanza Norte",
    lat: -9.30,
    lng: 15.25,
  },
  {
    nome: "Cuanza Sul",
    lat: -10.10,
    lng: 15.45,
  },
  {
    nome: "Malanje",
    lat: -9.54,
    lng: 16.35,
  },
  {
    nome: "Lunda Norte",
    lat: -8.50,
    lng: 18.00,
  },
  {
    nome: "Lunda Sul",
    lat: -10.40,
    lng: 20.40,
  },
  {
    nome: "Moxico",
    lat: -11.80,
    lng: 20.75,
  },
  {
    nome: "Moxico Leste",
    lat: -12.70,
    lng: 22.30,
  },
  {
    nome: "Bié",
    lat: -12.40,
    lng: 17.30,
  },
  {
    nome: "Huambo",
    lat: -12.77,
    lng: 15.74,
  },
  {
    nome: "Benguela",
    lat: -12.58,
    lng: 13.40,
  },
  {
    nome: "Huíla",
    lat: -14.92,
    lng: 13.49,
  },
  {
    nome: "Namibe",
    lat: -15.20,
    lng: 12.15,
  },
  {
    nome: "Cuando",
    lat: -16.10,
    lng: 20.80,
  },
  {
    nome: "Cubango",
    lat: -16.35,
    lng: 18.95,
  },
  {
    nome: "Cunene",
    lat: -17.25,
    lng: 15.75,
  },
];

const VARIAVEIS: {
  id: VariavelClima;
  nome: string;
  icone: string;
  descricao: string;
}[] = [
  {
    id: "precipitacao",
    nome: "Precipitação",
    icone: "🌧️",
    descricao: "Precipitação total",
  },
  {
    id: "temperatura",
    nome: "Temperatura",
    icone: "🌡️",
    descricao: "Temperatura do ar a 2 m",
  },
  {
    id: "vento",
    nome: "Vento",
    icone: "💨",
    descricao: "Velocidade e direção",
  },
  {
    id: "humidade",
    nome: "Humidade",
    icone: "💧",
    descricao: "Humidade atmosférica",
  },
  {
    id: "pressao",
    nome: "Pressão",
    icone: "🧭",
    descricao: "Pressão atmosférica",
  },
  {
    id: "radiacao",
    nome: "Radiação",
    icone: "☀️",
    descricao: "Radiação solar",
  },
  {
    id: "solo",
    nome: "Água no solo",
    icone: "🌱",
    descricao: "Índice de água no solo",
  },
  {
    id: "vegetacao",
    nome: "Vegetação",
    icone: "🌿",
    descricao: "Saúde da vegetação",
  },
];

function AjustarMapa() {
  const map = useMap();

  useEffect(() => {
    map.fitBounds(LIMITES_ANGOLA, {
      padding: [20, 20],
    });
  }, [map]);

  return null;
}

function nomeProvincia(
  feature: Feature<
    Geometry,
    PropriedadesProvincia
  >
) {
  return (
    feature.properties?.name ??
    feature.properties?.NAME_1 ??
    feature.properties?.nome ??
    feature.properties?.provincia ??
    "Província"
  );
}

function estiloProvincia(
  feature: Feature<
    Geometry,
    PropriedadesProvincia
  >,
  selecionada: string | null
) {
  const nome = nomeProvincia(feature);

  const ativa =
    selecionada?.toLowerCase() ===
    nome.toLowerCase();

  return {
    color: ativa
      ? "#ffffff"
      : "#cbd5e1",

    weight: ativa ? 3 : 1,

    opacity: 1,

    fillColor: ativa
      ? "#166534"
      : "#e2e8f0",

    fillOpacity: ativa
      ? 0.48
      : 0.12,
  };
}

/*
 * IMPORTANTE:
 * Esta função NÃO é um componente React.
 *
 * Não usamos useEffect aqui porque esta função
 * é chamada pelo onEachFeature do Leaflet.
 */
function configurarProvincia(
  feature: Feature<
    Geometry,
    PropriedadesProvincia
  >,
  layer: L.Layer,
  selecionada: string | null,
  selecionar: (nome: string) => void
) {
  const nome = nomeProvincia(feature);

  const camada = layer as L.Path;

  camada.bindTooltip(
    `<strong>${nome}</strong><br/>Clique para consultar`,
    {
      sticky: true,
      direction: "top",
    }
  );

  camada.on({
    mouseover: () => {
      camada.setStyle({
        weight: 2,
        color: "#ffffff",
        fillOpacity: 0.32,
      });
    },

    mouseout: () => {
      camada.setStyle(
        estiloProvincia(
          feature,
          selecionada
        )
      );
    },

    click: () => {
      selecionar(nome);
    },
  });
}

function legendaPrecipitacao() {
  return [
    ["0–10 mm", "#eef2ff"],
    ["10–50 mm", "#dbeafe"],
    ["50–100 mm", "#93c5fd"],
    ["100–200 mm", "#60a5fa"],
    ["200–400 mm", "#2563eb"],
    ["400–800 mm", "#1d4ed8"],
    ["> 800 mm", "#172554"],
  ];
}

function legendaTemperatura() {
  return [
    ["< 15 °C", "#312e81"],
    ["15–20 °C", "#6366f1"],
    ["20–25 °C", "#facc15"],
    ["25–30 °C", "#f97316"],
    ["30–35 °C", "#dc2626"],
    ["> 35 °C", "#7f1d1d"],
  ];
}

function legendaVento() {
  return [
    ["0–10 km/h", "#e0f2fe"],
    ["10–20 km/h", "#7dd3fc"],
    ["20–40 km/h", "#38bdf8"],
    ["40–60 km/h", "#0284c7"],
    ["> 60 km/h", "#075985"],
  ];
}

function legendaGenerica() {
  return [
    ["Baixo", "#e2e8f0"],
    ["Moderado", "#93c5fd"],
    ["Elevado", "#3b82f6"],
    ["Muito elevado", "#1d4ed8"],
  ];
}

export default function MapaClima({
  modo = "mensal",
  mes = new Date().getMonth() + 1,
  ano = new Date().getFullYear(),
  onProvinciaSelecionada,
}: MapaClimaProps) {
  const [geojson, setGeojson] =
    useState<
      FeatureCollection<
        Geometry,
        PropriedadesProvincia
      > | null
    >(null);

  const [variavel, setVariavel] =
    useState<VariavelClima>(
      "precipitacao"
    );

  const [selecionada, setSelecionada] =
    useState<string | null>(null);

  const [carregando, setCarregando] =
    useState(true);

  const [erro, setErro] =
    useState(false);

  useEffect(() => {
    let ativo = true;

    async function carregarMapa() {
      try {
        setCarregando(true);
        setErro(false);

        const resposta = await fetch(
          "/Angola_Provincias.geojson",
          {
            cache: "no-store",
          }
        );

        if (!resposta.ok) {
          throw new Error(
            "Erro ao carregar mapa"
          );
        }

        const dados =
          (await resposta.json()) as FeatureCollection<
            Geometry,
            PropriedadesProvincia
          >;

        if (ativo) {
          setGeojson(dados);
          setCarregando(false);
        }
      } catch (error) {
        console.error(
          "Erro ao carregar mapa:",
          error
        );

        if (ativo) {
          setErro(true);
          setCarregando(false);
        }
      }
    }

    carregarMapa();

    return () => {
      ativo = false;
    };
  }, []);

  const informacaoVariavel =
    useMemo(() => {
      return VARIAVEIS.find(
        (item) =>
          item.id === variavel
      );
    }, [variavel]);

  const nomeMes =
    new Intl.DateTimeFormat(
      "pt-PT",
      {
        month: "long",
      }
    ).format(
      new Date(
        2024,
        mes - 1,
        1
      )
    );

  function selecionarProvincia(
    nome: string
  ) {
    setSelecionada(nome);

    onProvinciaSelecionada?.(
      nome
    );
  }

  function legenda() {
    if (
      variavel ===
      "temperatura"
    ) {
      return legendaTemperatura();
    }

    if (
      variavel === "vento"
    ) {
      return legendaVento();
    }

    if (
      variavel ===
      "precipitacao"
    ) {
      return legendaPrecipitacao();
    }

    return legendaGenerica();
  }

  return (
    <div
      style={{
        width: "100%",
        borderRadius: 18,
        overflow: "hidden",
        border:
          "1px solid #dbe4df",
        background:
          "#ffffff",
        boxShadow:
          "0 10px 30px rgba(15,23,42,0.08)",
      }}
    >
      {/* =====================================================
          CABEÇALHO
      ====================================================== */}

      <div
        style={{
          background:
            "linear-gradient(135deg,#14532d,#166534)",
          color: "#ffffff",
          padding:
            "18px 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems:
              "center",
            gap: 15,
            flexWrap:
              "wrap",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 800,
                letterSpacing:
                  "0.12em",
                textTransform:
                  "uppercase",
                opacity: 0.8,
              }}
            >
              AGROINOVA ANGOLA
            </div>

            <div
              style={{
                fontSize: 24,
                fontWeight: 900,
                lineHeight:
                  1.15,
                marginTop: 3,
              }}
            >
              Centro de
              Monitorização
              Climática
            </div>

            <div
              style={{
                fontSize: 13,
                opacity: 0.82,
                marginTop: 4,
              }}
            >
              Angola ·{" "}
              {nomeMes}{" "}
              {ano}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 8,
              flexWrap:
                "wrap",
            }}
          >
            <div
              style={{
                background:
                  "rgba(255,255,255,0.12)",
                border:
                  "1px solid rgba(255,255,255,0.18)",
                padding:
                  "7px 11px",
                borderRadius: 9,
                fontSize: 11,
              }}
            >
              ERA5 / ECMWF
            </div>

            <div
              style={{
                background:
                  "rgba(255,255,255,0.12)",
                border:
                  "1px solid rgba(255,255,255,0.18)",
                padding:
                  "7px 11px",
                borderRadius: 9,
                fontSize: 11,
              }}
            >
              0,25°
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          VARIÁVEIS
      ====================================================== */}

      <div
        style={{
          padding: 12,
          background:
            "#f8fafc",
          borderBottom:
            "1px solid #e2e8f0",
          display: "flex",
          gap: 7,
          overflowX:
            "auto",
        }}
      >
        {VARIAVEIS.map(
          (item) => {
            const ativa =
              variavel ===
              item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() =>
                  setVariavel(
                    item.id
                  )
                }
                style={{
                  flex:
                    "0 0 auto",
                  border: ativa
                    ? "1px solid #166534"
                    : "1px solid #e2e8f0",
                  background:
                    ativa
                      ? "#166534"
                      : "#ffffff",
                  color: ativa
                    ? "#ffffff"
                    : "#334155",
                  borderRadius: 10,
                  padding:
                    "8px 12px",
                  cursor:
                    "pointer",
                  fontSize: 12,
                  fontWeight: 700,
                  whiteSpace:
                    "nowrap",
                }}
              >
                {
                  item.icone
                }{" "}
                {
                  item.nome
                }
              </button>
            );
          }
        )}
      </div>

      {/* =====================================================
          MAPA
      ====================================================== */}

      <div
        style={{
          position:
            "relative",
          height: 450,
          background:
            "#dbeafe",
        }}
      >
        <MapContainer
          center={
            CENTRO_ANGOLA
          }
          zoom={5}
          minZoom={4}
          maxZoom={9}
          scrollWheelZoom={
            true
          }
          style={{
            width:
              "100%",
            height:
              "450px",
          }}
        >
          <TileLayer
            attribution="© OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <AjustarMapa />

          {geojson && (
            <GeoJSON
              data={geojson}
              style={(feature) =>
                feature
                  ? estiloProvincia(
                      feature,
                      selecionada
                    )
                  : {}
              }
              onEachFeature={(
                feature,
                layer
              ) => {
                configurarProvincia(
                  feature,
                  layer,
                  selecionada,
                  selecionarProvincia
                );
              }}
            />
          )}

          {PONTOS.map(
            (ponto) => (
              <CircleMarker
                key={
                  ponto.nome
                }
                center={[
                  ponto.lat,
                  ponto.lng,
                ]}
                radius={4}
                pathOptions={{
                  color:
                    "#ffffff",
                  fillColor:
                    "#166534",
                  fillOpacity:
                    0.8,
                  weight: 1,
                }}
              >
                <Tooltip>
                  <strong>
                    {
                      ponto.nome
                    }
                  </strong>

                  <br />

                  {
                    informacaoVariavel?.nome
                  }

                  <br />

                  <span
                    style={{
                      color:
                        "#b45309",
                    }}
                  >
                    Dado espacial
                    em integração
                  </span>
                </Tooltip>
              </CircleMarker>
            )
          )}
        </MapContainer>

        {/* ===================================================
            PAINEL DA VARIÁVEL
        ==================================================== */}

        <div
          style={{
            position:
              "absolute",
            zIndex: 1000,
            top: 14,
            left: 14,
            background:
              "rgba(255,255,255,0.96)",
            borderRadius: 13,
            padding:
              "12px 15px",
            minWidth: 240,
            boxShadow:
              "0 7px 20px rgba(15,23,42,0.16)",
          }}
        >
          <div
            style={{
              fontSize: 10,
              color:
                "#64748b",
              textTransform:
                "uppercase",
              fontWeight: 800,
              letterSpacing:
                "0.08em",
            }}
          >
            Camada meteorológica
          </div>

          <div
            style={{
              fontSize: 19,
              fontWeight: 900,
              color:
                "#17221b",
              marginTop: 2,
            }}
          >
            {
              informacaoVariavel?.icone
            }{" "}
            {
              informacaoVariavel?.nome
            }
          </div>

          <div
            style={{
              fontSize: 11,
              color:
                "#64748b",
              marginTop: 2,
            }}
          >
            {
              informacaoVariavel?.descricao
            }
          </div>
        </div>

        {/* ===================================================
            LEGENDA
        ==================================================== */}

        <div
          style={{
            position:
              "absolute",
            zIndex: 1000,
            right: 14,
            bottom: 14,
            background:
              "rgba(255,255,255,0.96)",
            borderRadius: 12,
            padding:
              "11px 13px",
            boxShadow:
              "0 7px 20px rgba(15,23,42,0.15)",
            minWidth: 145,
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 900,
              color:
                "#17221b",
              marginBottom: 7,
            }}
          >
            {variavel ===
            "temperatura"
              ? "Temperatura"
              : variavel ===
                  "vento"
                ? "Velocidade do vento"
                : variavel ===
                    "precipitacao"
                  ? "Precipitação"
                  : informacaoVariavel?.nome}
          </div>

          {legenda().map(
            ([nome, cor]) => (
              <div
                key={nome}
                style={{
                  display:
                    "flex",
                  alignItems:
                    "center",
                  gap: 7,
                  fontSize: 10,
                  color:
                    "#475569",
                  marginBottom: 4,
                }}
              >
                <span
                  style={{
                    width: 18,
                    height: 9,
                    borderRadius: 2,
                    background:
                      cor,
                    display:
                      "inline-block",
                  }}
                />

                {nome}
              </div>
            )
          )}
        </div>

        {/* ===================================================
            ESTADO
        ==================================================== */}

        <div
          style={{
            position:
              "absolute",
            zIndex: 1000,
            left: 14,
            bottom: 14,
            background:
              "rgba(255,255,255,0.96)",
            borderRadius: 10,
            padding:
              "8px 11px",
            fontSize: 10,
            color:
              "#64748b",
            boxShadow:
              "0 5px 15px rgba(15,23,42,0.12)",
          }}
        >
          <strong
            style={{
              color:
                "#166534",
            }}
          >
            ● Monitorização
          </strong>

          <br />

          Fonte de referência:
          INAMET / ERA5
        </div>

        {/* ===================================================
            CARREGAMENTO
        ==================================================== */}

        {carregando && (
          <div
            style={{
              position:
                "absolute",
              zIndex: 1200,
              inset: 0,
              display:
                "flex",
              alignItems:
                "center",
              justifyContent:
                "center",
              pointerEvents:
                "none",
            }}
          >
            <div
              style={{
                background:
                  "rgba(255,255,255,0.96)",
                padding:
                  "12px 18px",
                borderRadius: 10,
                fontSize: 13,
                fontWeight: 700,
                color:
                  "#475569",
              }}
            >
              A carregar mapa
              de Angola...
            </div>
          </div>
        )}

        {/* ===================================================
            ERRO
        ==================================================== */}

        {erro && (
          <div
            style={{
              position:
                "absolute",
              zIndex: 1200,
              top: 70,
              left: 20,
              right: 20,
              background:
                "#fff7ed",
              color:
                "#9a3412",
              padding:
                "12px 15px",
              borderRadius: 10,
              fontSize: 12,
            }}
          >
            Não foi possível
            carregar o mapa
            de Angola.
          </div>
        )}
      </div>

      {/* =====================================================
          INFORMAÇÕES
      ====================================================== */}

      <div
        style={{
          display:
            "grid",
          gridTemplateColumns:
            "repeat(4, minmax(0, 1fr))",
          borderTop:
            "1px solid #e2e8f0",
          background:
            "#ffffff",
        }}
      >
        {[
          {
            titulo:
              "Período",
            valor:
              `${nomeMes} ${ano}`,
          },
          {
            titulo:
              "Fonte",
            valor:
              "ERA5 / ECMWF",
          },
          {
            titulo:
              "Resolução",
            valor:
              "0,25°",
          },
          {
            titulo:
              "Estado",
            valor:
              "Integração em curso",
          },
        ].map(
          (item) => (
            <div
              key={
                item.titulo
              }
              style={{
                padding:
                  "11px 13px",
                borderRight:
                  "1px solid #e2e8f0",
              }}
            >
              <div
                style={{
                  fontSize: 9,
                  textTransform:
                    "uppercase",
                  color:
                    "#94a3b8",
                  fontWeight: 800,
                }}
              >
                {
                  item.titulo
                }
              </div>

              <div
                style={{
                  fontSize: 12,
                  color:
                    "#334155",
                  fontWeight: 700,
                  marginTop: 2,
                }}
              >
                {
                  item.valor
                }
              </div>
            </div>
          )
        )}
      </div>

      {/* =====================================================
          NOTA TÉCNICA
      ====================================================== */}

      <div
        style={{
          padding:
            "10px 15px",
          background:
            "#f8fafc",
          borderTop:
            "1px solid #e2e8f0",
          fontSize: 10,
          lineHeight: 1.5,
          color:
            "#64748b",
        }}
      >
        <strong
          style={{
            color:
              "#334155",
          }}
        >
          Nota técnica:
        </strong>{" "}
        O INAMET utiliza dados
        ERA5/ECMWF em diversos
        produtos agroclimáticos.
        O ERA5 possui resolução
        espacial de 0,25°.
        Os valores espaciais do
        AGROINOVA serão apresentados
        somente após a ligação à
        fonte de dados correspondente.
      </div>
    </div>
  );
}