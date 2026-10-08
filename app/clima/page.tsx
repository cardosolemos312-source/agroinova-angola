"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";

/* =========================================================
   CLIMA — AGROINOVA ANGOLA
   Página única:
   - mapa
   - regiões climáticas
   - precipitação
   - chuvas
   - temperaturas
   - províncias
   - agricultura
   - seca
   - previsão
   - cenários climáticos
   - modais
   ========================================================= */

type ModalTipo =
  | "precipitacao"
  | "temperatura"
  | "chuvas"
  | "regioes"
  | "agricultura"
  | "seca"
  | "previsao"
  | "cenarios"
  | "monitorizacao"
  | "provincia"
  | null;

type Provincia = {
  nome: string;
  regiao: string;
  descricao: string;
  agricultura: string;
  chuvas: string;
  risco: string;
};

type GeoFeature = {
  type: string;
  properties?: {
    name?: string;
    NAME_1?: string;
    nome?: string;
    provincia?: string;
  };
  geometry: unknown;
};

type GeoJSONData = {
  type: string;
  features: GeoFeature[];
};

/* =========================================================
   PROVÍNCIAS
   ========================================================= */

const PROVINCIAS: Provincia[] = [
  {
    nome: "Cabinda",
    regiao: "Norte litoral",
    descricao:
      "Cabinda apresenta condições climáticas tropicais húmidas, com influência marítima e elevada disponibilidade de humidade em comparação com as zonas mais áridas do sul do país.",
    agricultura:
      "A disponibilidade de humidade favorece sistemas agrícolas tropicais, mas o excesso de água, a erosão e a conservação do solo devem ser considerados no planeamento das culturas.",
    chuvas:
      "A precipitação é relativamente elevada, embora exista variação sazonal e períodos menos chuvosos.",
    risco:
      "Chuvas intensas, erosão, excesso de humidade e doenças favorecidas por condições húmidas.",
  },
  {
    nome: "Zaire",
    regiao: "Norte",
    descricao:
      "O Zaire integra a faixa climática tropical do norte de Angola, com influência atlântica e uma estação chuvosa bem marcada.",
    agricultura:
      "O regime de humidade permite sistemas agrícolas tropicais, devendo ser considerada a distribuição temporal das chuvas.",
    chuvas:
      "As chuvas concentram-se principalmente na estação húmida, com redução durante a estação seca.",
    risco:
      "Chuvas intensas, erosão e períodos de défice hídrico no período seco.",
  },
  {
    nome: "Uíge",
    regiao: "Norte",
    descricao:
      "O Uíge apresenta características tropicais húmidas, com precipitação sazonal importante para os sistemas agrícolas.",
    agricultura:
      "As condições de humidade são favoráveis a culturas alimentares e sistemas diversificados, desde que o solo e a drenagem sejam adequadamente manejados.",
    chuvas:
      "A estação chuvosa é fundamental para a agricultura de sequeiro.",
    risco:
      "Excesso de água localizado, erosão e irregularidade da distribuição das chuvas.",
  },
  {
    nome: "Bengo",
    regiao: "Norte litoral",
    descricao:
      "O Bengo apresenta forte influência da proximidade do Atlântico e uma transição entre condições mais húmidas do norte e condições mais secas do litoral central.",
    agricultura:
      "A agricultura depende fortemente da disponibilidade de água e da gestão da fertilidade e humidade dos solos.",
    chuvas:
      "As chuvas são sazonais e apresentam variabilidade dentro da província.",
    risco:
      "Secas sazonais, chuvas intensas e cheias em zonas vulneráveis.",
  },
  {
    nome: "Luanda",
    regiao: "Litoral",
    descricao:
      "Luanda possui clima predominantemente seco, fortemente influenciado pelo Oceano Atlântico e pela corrente fria de Benguela.",
    agricultura:
      "A produção agrícola depende significativamente da irrigação e da gestão eficiente da água.",
    chuvas:
      "A precipitação anual é baixa quando comparada com grande parte do interior norte e centro de Angola.",
    risco:
      "Défice hídrico, secas e elevada dependência de água para produção agrícola.",
  },
  {
    nome: "Icolo e Bengo",
    regiao: "Litoral centro",
    descricao:
      "Icolo e Bengo situa-se numa zona de transição climática próxima da área metropolitana de Luanda, com forte influência da proximidade do litoral.",
    agricultura:
      "A disponibilidade de água, irrigação e conservação dos solos são fatores importantes para a produção.",
    chuvas:
      "O regime de chuva é sazonal e relativamente limitado quando comparado com regiões mais húmidas do norte.",
    risco:
      "Défice hídrico, irregularidade das chuvas e episódios de chuva intensa.",
  },
  {
    nome: "Cuanza Norte",
    regiao: "Centro-norte",
    descricao:
      "O Cuanza Norte apresenta condições tropicais com maior disponibilidade de precipitação do que o litoral de Luanda.",
    agricultura:
      "O regime de chuvas permite agricultura de sequeiro diversificada, condicionada pela distribuição das chuvas e pelas características locais dos solos.",
    chuvas:
      "A precipitação concentra-se na estação chuvosa.",
    risco:
      "Erosão, chuvas intensas e períodos secos dentro da estação agrícola.",
  },
  {
    nome: "Cuanza Sul",
    regiao: "Centro-oeste",
    descricao:
      "O Cuanza Sul apresenta grande diversidade climática associada ao relevo, altitude e proximidade do oceano.",
    agricultura:
      "A diversidade ambiental permite diferentes sistemas agrícolas, mas exige adaptação das culturas ao regime hídrico local.",
    chuvas:
      "Existe marcada sazonalidade da precipitação.",
    risco:
      "Secas sazonais, erosão, chuvas intensas e cheias localizadas.",
  },
  {
    nome: "Malanje",
    regiao: "Centro-norte",
    descricao:
      "Malanje situa-se numa zona interior com condições mais húmidas que o litoral, apresentando uma estação chuvosa relevante para a agricultura.",
    agricultura:
      "As condições climáticas favorecem sistemas agrícolas de sequeiro e diversificação produtiva.",
    chuvas:
      "A época das chuvas é determinante para a produção agrícola.",
    risco:
      "Chuvas intensas, erosão e irregularidade intra-sazonal.",
  },
  {
    nome: "Lunda Norte",
    regiao: "Leste",
    descricao:
      "A Lunda Norte apresenta características tropicais continentais, com uma estação chuvosa importante.",
    agricultura:
      "A produção agrícola é fortemente dependente da regularidade das chuvas.",
    chuvas:
      "A estação húmida concentra grande parte da precipitação anual.",
    risco:
      "Chuvas intensas, erosão e períodos de défice hídrico.",
  },
  {
    nome: "Lunda Sul",
    regiao: "Leste",
    descricao:
      "A Lunda Sul apresenta clima tropical continental, com sazonalidade marcada da precipitação.",
    agricultura:
      "A agricultura de sequeiro depende do início oportuno e da continuidade das chuvas.",
    chuvas:
      "A precipitação apresenta forte concentração sazonal.",
    risco:
      "Irregularidade das chuvas, erosão e períodos secos.",
  },
  {
    nome: "Moxico",
    regiao: "Leste",
    descricao:
      "O Moxico apresenta condições climáticas tropicais continentais e forte sazonalidade entre o período chuvoso e o período seco.",
    agricultura:
      "A agricultura de sequeiro é particularmente dependente do comportamento da estação chuvosa.",
    chuvas:
      "A precipitação concentra-se na estação húmida.",
    risco:
      "Secas intra-sazonais, chuvas intensas e erosão.",
  },
  {
    nome: "Moxico Leste",
    regiao: "Leste",
    descricao:
      "Moxico Leste integra a faixa interior oriental de Angola, caracterizada por sazonalidade climática e influência continental.",
    agricultura:
      "O planeamento agrícola deve considerar a duração da estação chuvosa e a disponibilidade de água.",
    chuvas:
      "As chuvas são concentradas na estação húmida.",
    risco:
      "Irregularidade das chuvas, períodos secos e erosão.",
  },
  {
    nome: "Bié",
    regiao: "Planalto central",
    descricao:
      "O Bié integra o planalto central angolano, onde altitude e relevo contribuem para condições climáticas distintas das áreas costeiras.",
    agricultura:
      "O clima é importante para a produção de milho, feijão, hortícolas e outros sistemas agrícolas adaptados ao planalto.",
    chuvas:
      "A estação chuvosa tem papel central na agricultura de sequeiro.",
    risco:
      "Chuvas intensas, erosão, granizo localizado e irregularidade intra-sazonal.",
  },
  {
    nome: "Huambo",
    regiao: "Planalto central",
    descricao:
      "Huambo encontra-se no planalto central e apresenta marcada sazonalidade entre uma estação chuvosa e um período seco.",
    agricultura:
      "O regime climático sustenta importantes sistemas agrícolas de sequeiro, especialmente quando o início das chuvas ocorre de forma regular.",
    chuvas:
      "A precipitação concentra-se na estação chuvosa, sendo fundamental para a produção agrícola.",
    risco:
      "Irregularidade do início das chuvas, períodos secos, erosão e chuvas intensas.",
  },
  {
    nome: "Benguela",
    regiao: "Litoral centro",
    descricao:
      "Benguela apresenta grande contraste entre o litoral mais seco e áreas interiores influenciadas pelo relevo e altitude.",
    agricultura:
      "A produção agrícola varia de acordo com a disponibilidade de água, sendo a irrigação importante em áreas mais secas.",
    chuvas:
      "O litoral apresenta baixa precipitação, aumentando em direção ao interior.",
    risco:
      "Seca, défice hídrico e eventos de chuva intensa em períodos curtos.",
  },
  {
    nome: "Huíla",
    regiao: "Sul / planalto",
    descricao:
      "A Huíla apresenta elevada diversidade climática devido à altitude e ao relevo, com áreas mais húmidas no planalto e zonas mais secas em direção ao sul e oeste.",
    agricultura:
      "A diversidade térmica e hídrica permite diferentes sistemas de produção, mas exige gestão cuidadosa da água.",
    chuvas:
      "A precipitação é sazonal e apresenta diferenças significativas dentro da província.",
    risco:
      "Seca meteorológica, ondas de calor, irregularidade das chuvas e erosão.",
  },
  {
    nome: "Namibe",
    regiao: "Sudoeste litoral",
    descricao:
      "Namibe é uma das regiões mais áridas de Angola, fortemente influenciada pela corrente fria de Benguela e pela circulação atmosférica do sudoeste.",
    agricultura:
      "A produção agrícola depende fortemente da irrigação e da gestão rigorosa dos recursos hídricos.",
    chuvas:
      "A precipitação é muito reduzida no litoral, embora existam diferenças importantes no interior da província.",
    risco:
      "Seca, défice hídrico, ondas de calor e elevada pressão sobre os recursos de água.",
  },
  {
    nome: "Cuando",
    regiao: "Sudeste",
    descricao:
      "Cuando apresenta condições interiores com forte sazonalidade das chuvas e diferenças associadas ao relevo e à continentalidade.",
    agricultura:
      "A produção depende da duração e regularidade da estação chuvosa.",
    chuvas:
      "A precipitação concentra-se no período húmido.",
    risco:
      "Períodos secos, chuvas intensas e variabilidade interanual.",
  },
  {
    nome: "Cubango",
    regiao: "Sudeste",
    descricao:
      "Cubango apresenta clima interior com marcada sazonalidade, alternando entre uma estação chuvosa e um período seco.",
    agricultura:
      "A agricultura de sequeiro depende da regularidade das chuvas e da conservação da humidade do solo.",
    chuvas:
      "Grande parte da precipitação ocorre durante a estação húmida.",
    risco:
      "Secas intra-sazonais, incêndios, chuvas intensas e erosão.",
  },
  {
    nome: "Cunene",
    regiao: "Sul",
    descricao:
      "Cunene apresenta condições semiáridas a secas e elevada variabilidade da precipitação, sendo uma das áreas mais vulneráveis à seca em Angola.",
    agricultura:
      "A produção agrícola e pecuária depende fortemente da disponibilidade de água e da gestão dos períodos de défice hídrico.",
    chuvas:
      "A precipitação é sazonal e irregular, com elevada importância para a produção e para as pastagens.",
    risco:
      "Seca meteorológica, défice hídrico, ondas de calor e degradação das pastagens.",
  },
];

/* =========================================================
   REGIÕES CLIMÁTICAS
   ========================================================= */

const REGIOES = [
  {
    id: "norte",
    nome: "Norte",
    titulo: "Norte tropical e húmido",
    texto:
      "O norte de Angola apresenta condições geralmente mais húmidas do que o centro e o sul. A influência tropical e a maior disponibilidade de humidade atmosférica favorecem uma estação chuvosa importante para a agricultura.",
    provincias:
      "Cabinda, Zaire, Uíge, Bengo e áreas do norte de outras províncias.",
    agricultura:
      "Maior potencial para sistemas agrícolas tropicais e diversificados, dependendo dos solos, relevo, drenagem e disponibilidade local de água.",
  },
  {
    id: "centro",
    nome: "Centro",
    titulo: "Planalto e interior central",
    texto:
      "O centro de Angola apresenta forte influência da altitude. O planalto central possui condições térmicas diferentes do litoral e uma estação chuvosa essencial para a agricultura de sequeiro.",
    provincias:
      "Huambo, Bié, Benguela interior, Cuanza Sul, Malanje e áreas adjacentes.",
    agricultura:
      "Região de elevada importância agrícola, onde o calendário das chuvas, a conservação do solo e a escolha das culturas são determinantes.",
  },
  {
    id: "leste",
    nome: "Leste",
    titulo: "Interior oriental",
    texto:
      "O leste apresenta características continentais e uma marcada alternância entre estação chuvosa e estação seca. A precipitação tem grande importância para os sistemas agrícolas.",
    provincias:
      "Lunda Norte, Lunda Sul, Moxico, Moxico Leste e áreas orientais.",
    agricultura:
      "A agricultura de sequeiro depende da regularidade da precipitação e da capacidade do solo de conservar água.",
  },
  {
    id: "litoral",
    nome: "Litoral",
    titulo: "Litoral e influência da corrente de Benguela",
    texto:
      "A faixa costeira apresenta forte diversidade climática. O litoral centro e sul é mais seco, enquanto a influência marítima modifica temperatura, humidade e circulação atmosférica.",
    provincias:
      "Luanda, Icolo e Bengo, Benguela, Namibe e áreas costeiras.",
    agricultura:
      "A irrigação e a gestão eficiente da água tornam-se particularmente importantes nas áreas mais áridas.",
  },
  {
    id: "sul",
    nome: "Sul",
    titulo: "Sul semiárido e seco",
    texto:
      "O sul de Angola apresenta condições mais secas e elevada vulnerabilidade à variabilidade da precipitação. O risco de seca é particularmente relevante para agricultura e pecuária.",
    provincias:
      "Huíla, Cunene, Namibe, Cuando e Cubango.",
    agricultura:
      "É fundamental combinar culturas adaptadas, gestão da água, conservação do solo, sistemas pecuários resilientes e monitorização climática.",
  },
];

/* =========================================================
   PONTOS DE REFERÊNCIA DO MAPA
   Não são valores meteorológicos.
   Servem apenas para identificação espacial.
   ========================================================= */

const PONTOS: Record<
  string,
  [number, number]
> = {
  Cabinda: [-5.56, 12.19],
  Zaire: [-6.27, 13.6],
  Uíge: [-7.62, 15.05],
  Bengo: [-9.1, 13.73],
  Luanda: [-8.84, 13.23],
  "Icolo e Bengo": [-9.0, 13.9],
  "Cuanza Norte": [-9.3, 15.25],
  "Cuanza Sul": [-10.1, 15.45],
  Malanje: [-9.54, 16.35],
  "Lunda Norte": [-8.5, 18.0],
  "Lunda Sul": [-10.4, 20.4],
  Moxico: [-11.8, 20.75],
  "Moxico Leste": [-12.7, 22.3],
  Bié: [-12.4, 17.3],
  Huambo: [-12.77, 15.74],
  Benguela: [-12.58, 13.4],
  Huíla: [-14.92, 13.49],
  Namibe: [-15.2, 12.15],
  Cuando: [-16.1, 20.8],
  Cubango: [-16.35, 18.95],
  Cunene: [-17.25, 15.75],
};

/* =========================================================
   UTILITÁRIOS
   ========================================================= */

function normalizar(texto: string) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function obterNomeFeature(feature: GeoFeature) {
  return (
    feature.properties?.name ??
    feature.properties?.NAME_1 ??
    feature.properties?.nome ??
    feature.properties?.provincia ??
    "Província"
  );
}

/* =========================================================
   COMPONENTE
   ========================================================= */

export default function ClimaPage() {
  const [modal, setModal] =
    useState<ModalTipo>(null);

  const [provinciaSelecionada, setProvinciaSelecionada] =
    useState<Provincia | null>(null);

  const [pesquisa, setPesquisa] = useState("");

  const [regiaoSelecionada, setRegiaoSelecionada] =
    useState("todas");

  const [mapaVariavel, setMapaVariavel] =
    useState("precipitacao");

  const [geojson, setGeojson] =
    useState<GeoJSONData | null>(null);

  const [mapaErro, setMapaErro] =
    useState(false);

  const mapaRef = useRef<HTMLDivElement | null>(
    null
  );

  const mapaInstanciaRef = useRef<any>(null);

  const camadaGeoJSONRef = useRef<any>(null);

  /* =======================================================
     FILTRO DE PROVÍNCIAS
     ======================================================= */

  const provinciasFiltradas = useMemo(() => {
    const termo = normalizar(pesquisa);

    return PROVINCIAS.filter((item) => {
      const correspondePesquisa =
        !termo ||
        normalizar(item.nome).includes(termo) ||
        normalizar(item.regiao).includes(termo);

      const correspondeRegiao =
        regiaoSelecionada === "todas" ||
        normalizar(item.regiao).includes(
          normalizar(regiaoSelecionada)
        );

      return (
        correspondePesquisa &&
        correspondeRegiao
      );
    });
  }, [
    pesquisa,
    regiaoSelecionada,
  ]);

  /* =======================================================
     CARREGAR GEOJSON
     ======================================================= */

  useEffect(() => {
    let ativo = true;

    fetch("/Angola_Provincias.geojson", {
      cache: "no-store",
    })
      .then(async (resposta) => {
        if (!resposta.ok) {
          throw new Error(
            "Não foi possível carregar o GeoJSON."
          );
        }

        return (await resposta.json()) as GeoJSONData;
      })
      .then((dados) => {
        if (ativo) {
          setGeojson(dados);
        }
      })
      .catch((erro) => {
        console.error(
          "Erro ao carregar mapa climático:",
          erro
        );

        if (ativo) {
          setMapaErro(true);
        }
      });

    return () => {
      ativo = false;
    };
  }, []);

  /* =======================================================
     MAPA LEAFLET
     Tudo permanece neste arquivo.
     ======================================================= */

  useEffect(() => {
    if (!mapaRef.current) return;
    if (mapaInstanciaRef.current) return;

    let destruido = false;

    async function iniciarMapa() {
      try {
        const L = await import(
          "leaflet"
        );

        if (
          destruido ||
          !mapaRef.current
        ) {
          return;
        }

        const mapa = L.map(
          mapaRef.current,
          {
            center: [
              -11.2027,
              17.8739,
            ],
            zoom: 5,
            minZoom: 4,
            maxZoom: 9,
            scrollWheelZoom: true,
          }
        );

        mapaInstanciaRef.current = mapa;

        L.tileLayer(
          "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          {
            attribution:
              "© OpenStreetMap contributors",
          }
        ).addTo(mapa);

        const limites = L.latLngBounds(
          [-18.5, 11.4],
          [-4.2, 24.1]
        );

        mapa.fitBounds(limites, {
          padding: [
            20,
            20,
          ],
        });
      } catch (erro) {
        console.error(
          "Erro ao iniciar Leaflet:",
          erro
        );

        setMapaErro(true);
      }
    }

    iniciarMapa();

    return () => {
      destruido = true;

      if (
        mapaInstanciaRef.current
      ) {
        mapaInstanciaRef.current.remove();
        mapaInstanciaRef.current = null;
      }
    };
  }, []);

  /* =======================================================
     DESENHAR GEOJSON
     ======================================================= */

  useEffect(() => {
    if (
      !geojson ||
      !mapaInstanciaRef.current
    ) {
      return;
    }

    let cancelado = false;

    async function desenhar() {
      const L = await import(
        "leaflet"
      );

      if (cancelado) return;

      if (
        camadaGeoJSONRef.current
      ) {
        camadaGeoJSONRef.current.remove();
      }

      const camada = L.geoJSON(
        geojson as any,
        {
          style: (feature: any) => {
            const nome =
              obterNomeFeature(
                feature
              );

            const ativa =
              provinciaSelecionada &&
              normalizar(
                provinciaSelecionada.nome
              ) ===
                normalizar(
                  nome
                );

            return {
              color: ativa
                ? "#14532d"
                : "#ffffff",
              weight: ativa
                ? 3
                : 1,
              fillColor:
                obterCorMapa(
                  mapaVariavel
                ),
              fillOpacity:
                ativa
                  ? 0.55
                  : 0.22,
            };
          },

          onEachFeature: (
            feature: any,
            layer: any
          ) => {
            const nome =
              obterNomeFeature(
                feature
              );

            layer.bindTooltip(
              `<strong>${nome}</strong><br/>Selecionar província`,
              {
                sticky: true,
              }
            );

            layer.on({
              mouseover: () => {
                layer.setStyle({
                  weight: 2,
                  fillOpacity:
                    0.45,
                });
              },

              mouseout: () => {
                camada.resetStyle(
                  layer
                );
              },

              click: () => {
                const item =
                  PROVINCIAS.find(
                    (provincia) =>
                      normalizar(
                        provincia.nome
                      ) ===
                      normalizar(
                        nome
                      )
                  );

                if (item) {
                  setProvinciaSelecionada(
                    item
                  );

                  setModal(
                    "provincia"
                  );
                }
              },
            });
          },
        }
      );

      camada.addTo(
        mapaInstanciaRef.current
      );

      camadaGeoJSONRef.current =
        camada;
    }

    desenhar();

    return () => {
      cancelado = true;
    };
  }, [
    geojson,
    mapaVariavel,
    provinciaSelecionada,
  ]);

  /* =======================================================
     MARCADORES
     ======================================================= */

  useEffect(() => {
    if (
      !mapaInstanciaRef.current
    ) {
      return;
    }

    let cancelado = false;

    async function desenharPontos() {
      const L = await import(
        "leaflet"
      );

      if (cancelado) return;

      const grupo =
        L.layerGroup();

      Object.entries(
        PONTOS
      ).forEach(
        ([nome, coordenadas]) => {
          const marker =
            L.circleMarker(
              coordenadas,
              {
                radius: 4,
                color: "#ffffff",
                weight: 1,
                fillColor:
                  "#166534",
                fillOpacity:
                  0.9,
              }
            );

          marker.bindTooltip(
            `<strong>${nome}</strong><br/>Área de referência espacial`
          );

          marker.addTo(
            grupo
          );
        }
      );

      grupo.addTo(
        mapaInstanciaRef.current
      );

      return () => {
        grupo.remove();
      };
    }

    desenharPontos();

    return () => {
      cancelado = true;
    };
  }, []);

  /* =======================================================
     PROVÍNCIA
     ======================================================= */

  function abrirProvincia(
    provincia: Provincia
  ) {
    setProvinciaSelecionada(
      provincia
    );

    setModal(
      "provincia"
    );
  }

  /* =======================================================
     MODAL
     ======================================================= */

  function fecharModal() {
    setModal(null);
  }

  return (
    <main className="clima-page">
      {/* ===================================================
          HERO
      =================================================== */}

      <section className="clima-hero">
        <div className="clima-container clima-hero-grid">
          <div className="clima-hero-content">
            <span className="clima-eyebrow">
              AGROINOVA ANGOLA · CLIMA
            </span>

            <h1>
              Clima de Angola
            </h1>

            <p>
              Conhecimento climático para
              compreender a precipitação,
              temperatura, estações do ano,
              variabilidade, seca, eventos
              extremos e a relação entre clima
              e agricultura em Angola.
            </p>

            <div className="clima-hero-actions">
              <button
                type="button"
                className="clima-btn clima-btn-primary"
                onClick={() =>
                  document
                    .getElementById(
                      "mapa-climatico"
                    )
                    ?.scrollIntoView({
                      behavior:
                        "smooth",
                    })
                }
              >
                Explorar mapa climático
              </button>

              <button
                type="button"
                className="clima-btn clima-btn-secondary"
                onClick={() =>
                  setModal(
                    "previsao"
                  )
                }
              >
                Consultar previsão
              </button>
            </div>
          </div>

          <div className="clima-hero-panel">
            <span>
              SISTEMA CLIMÁTICO
            </span>

            <strong>
              Angola
            </strong>

            <p>
              Um território com forte
              diversidade climática entre o
              norte húmido, o planalto central,
              o leste continental e o sul mais
              seco.
            </p>

            <div className="clima-hero-panel-grid">
              <div>
                <strong>
                  21
                </strong>
                <span>
                  províncias
                </span>
              </div>

              <div>
                <strong>
                  5
                </strong>
                <span>
                  grandes áreas climáticas
                </span>
              </div>

              <div>
                <strong>
                  4
                </strong>
                <span>
                  estações/variáveis de análise
                </span>
              </div>

              <div>
                <strong>
                  INAMET
                </strong>
                <span>
                  referência meteorológica nacional
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          ACESSO RÁPIDO
      =================================================== */}

      <section className="clima-section clima-section-white">
        <div className="clima-container">
          <div className="clima-section-heading">
            <div>
              <span className="clima-section-kicker">
                EXPLORAR
              </span>

              <h2>
                Informação climática
              </h2>
            </div>

            <p>
              Selecione um tema para abrir a
              informação detalhada sem sair da
              página.
            </p>
          </div>

          <div className="clima-temas-grid">
            <TemaCard
              titulo="Precipitação"
              texto="Distribuição das chuvas, sazonalidade, anomalias e importância para a agricultura."
              onClick={() =>
                setModal(
                  "precipitacao"
                )
              }
            />

            <TemaCard
              titulo="Temperatura"
              texto="Temperatura média, máximas, mínimas, calor extremo e influência da altitude."
              onClick={() =>
                setModal(
                  "temperatura"
                )
              }
            />

            <TemaCard
              titulo="Regime de chuvas"
              texto="Como as estações chuvosa e seca se distribuem pelo território angolano."
              onClick={() =>
                setModal(
                  "chuvas"
                )
              }
            />

            <TemaCard
              titulo="Regiões climáticas"
              texto="Norte, centro, leste, litoral e sul analisados segundo as suas características."
              onClick={() =>
                setModal(
                  "regioes"
                )
              }
            />

            <TemaCard
              titulo="Clima e agricultura"
              texto="Calendário agrícola, água, culturas, solos, risco climático e produção."
              onClick={() =>
                setModal(
                  "agricultura"
                )
              }
            />

            <TemaCard
              titulo="Seca e extremos"
              texto="Seca meteorológica, ondas de calor, chuva intensa e outros riscos."
              onClick={() =>
                setModal(
                  "seca"
                )
              }
            />

            <TemaCard
              titulo="Previsão"
              texto="Acesso à vigilância e previsão meteorológica e agroclimática do INAMET."
              onClick={() =>
                setModal(
                  "previsao"
                )
              }
            />

            <TemaCard
              titulo="Cenários climáticos"
              texto="Projeções futuras de temperatura, precipitação, seca e evapotranspiração."
              onClick={() =>
                setModal(
                  "cenarios"
                )
              }
            />
          </div>
        </div>
      </section>

      {/* ===================================================
          MAPA
      =================================================== */}

      <section
        id="mapa-climatico"
        className="clima-section clima-section-soft"
      >
        <div className="clima-container">
          <div className="clima-section-heading">
            <div>
              <span className="clima-section-kicker">
                MAPA
              </span>

              <h2>
                Mapa climático de Angola
              </h2>
            </div>

            <p>
              O mapa apresenta a divisão
              provincial e permite abrir a ficha
              climática de cada província.
            </p>
          </div>

          <div className="clima-map-controls">
            <button
              type="button"
              className={
                mapaVariavel ===
                "precipitacao"
                  ? "ativo"
                  : ""
              }
              onClick={() =>
                setMapaVariavel(
                  "precipitacao"
                )
              }
            >
              Precipitação
            </button>

            <button
              type="button"
              className={
                mapaVariavel ===
                "temperatura"
                  ? "ativo"
                  : ""
              }
              onClick={() =>
                setMapaVariavel(
                  "temperatura"
                )
              }
            >
              Temperatura
            </button>

            <button
              type="button"
              className={
                mapaVariavel ===
                "risco"
                  ? "ativo"
                  : ""
              }
              onClick={() =>
                setMapaVariavel(
                  "risco"
                )
              }
            >
              Risco climático
            </button>
          </div>

          <div className="clima-map-wrapper">
            <div
              ref={mapaRef}
              className="clima-map"
            />

            {mapaErro && (
              <div className="clima-map-error">
                <strong>
                  Não foi possível carregar o
                  mapa.
                </strong>

                <p>
                  Confirme se o ficheiro
                  <code>
                    /public/Angola_Provincias.geojson
                  </code>{" "}
                  existe no projeto.
                </p>
              </div>
            )}

            <div className="clima-map-info">
              <span>
                MAPA GEOGRÁFICO
              </span>

              <strong>
                {nomeVariavelMapa(
                  mapaVariavel
                )}
              </strong>

              <p>
                A camada provincial é espacial.
                Os valores meteorológicos só
                devem ser interpretados quando
                associados a uma fonte e período
                definidos.
              </p>
            </div>
          </div>

          <div className="clima-map-nota">
            <strong>
              Nota de dados
            </strong>

            <p>
              O limite provincial apresentado
              não constitui, por si só, uma
              medição meteorológica. A integração
              de séries de precipitação,
              temperatura e outros indicadores
              deve preservar a fonte, período,
              unidade e escala espacial.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================
          REGIÕES
      =================================================== */}

      <section className="clima-section">
        <div className="clima-container">
          <div className="clima-section-heading">
            <div>
              <span className="clima-section-kicker">
                GEOGRAFIA CLIMÁTICA
              </span>

              <h2>
                Clima por grandes regiões
              </h2>
            </div>

            <p>
              Angola não possui um único clima.
              A precipitação, temperatura,
              altitude e influência oceânica
              criam diferentes ambientes climáticos.
            </p>
          </div>

          <div className="clima-regioes-grid">
            {REGIOES.map(
              (regiao) => (
                <article
                  key={regiao.id}
                  className="clima-regiao-card"
                >
                  <span>
                    {regiao.nome}
                  </span>

                  <h3>
                    {regiao.titulo}
                  </h3>

                  <p>
                    {regiao.texto}
                  </p>

                  <div>
                    <strong>
                      Províncias/áreas
                    </strong>

                    <p>
                      {regiao.provincias}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setModal(
                        "regioes"
                      );
                      setRegiaoSelecionada(
                        regiao.nome
                      );
                    }}
                  >
                    Ver análise
                  </button>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* ===================================================
          CHUVAS
      =================================================== */}

      <section className="clima-section clima-section-soft">
        <div className="clima-container">
          <div className="clima-feature">
            <div>
              <span className="clima-section-kicker">
                PRECIPITAÇÃO
              </span>

              <h2>
                O regime de chuvas é uma das
                principais chaves da agricultura
                angolana
              </h2>

              <p>
                A distribuição das chuvas em
                Angola é fortemente sazonal e
                varia de forma significativa entre
                regiões. No norte e em parte do
                centro existe maior disponibilidade
                de precipitação, enquanto o litoral
                sul e o extremo sul são muito mais
                secos.
              </p>

              <p>
                A análise agrícola não deve
                considerar apenas a quantidade
                total de chuva. É necessário
                observar também a data de início,
                duração da estação chuvosa,
                interrupções dentro da estação,
                intensidade dos eventos e número de
                dias secos consecutivos.
              </p>

              <button
                type="button"
                className="clima-btn clima-btn-dark"
                onClick={() =>
                  setModal(
                    "chuvas"
                  )
                }
              >
                Abrir conteúdo completo
              </button>
            </div>

            <div className="clima-feature-side">
              <div>
                <strong>
                  Início das chuvas
                </strong>

                <span>
                  Fundamental para decidir a
                  instalação de culturas de
                  sequeiro.
                </span>
              </div>

              <div>
                <strong>
                  Distribuição
                </strong>

                <span>
                  Uma estação chuvosa pode ter
                  períodos de interrupção.
                </span>
              </div>

              <div>
                <strong>
                  Intensidade
                </strong>

                <span>
                  Chuvas muito intensas podem
                  aumentar erosão e escoamento.
                </span>
              </div>

              <div>
                <strong>
                  Períodos secos
                </strong>

                <span>
                  Podem afetar culturas mesmo
                  dentro da estação chuvosa.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          PROVÍNCIAS
      =================================================== */}

      <section
        id="provincias"
        className="clima-section"
      >
        <div className="clima-container">
          <div className="clima-section-heading">
            <div>
              <span className="clima-section-kicker">
                PROVÍNCIAS
              </span>

              <h2>
                Clima por província
              </h2>
            </div>

            <p>
              Selecione uma província para abrir
              a ficha climática detalhada.
            </p>
          </div>

          <div className="clima-provincias-toolbar">
            <input
              type="search"
              value={pesquisa}
              onChange={(event) =>
                setPesquisa(
                  event.target.value
                )
              }
              placeholder="Pesquisar província..."
              aria-label="Pesquisar província"
            />

            <select
              value={
                regiaoSelecionada
              }
              onChange={(event) =>
                setRegiaoSelecionada(
                  event.target.value
                )
              }
              aria-label="Filtrar região"
            >
              <option value="todas">
                Todas as regiões
              </option>

              <option value="norte">
                Norte
              </option>

              <option value="centro">
                Centro
              </option>

              <option value="leste">
                Leste
              </option>

              <option value="litoral">
                Litoral
              </option>

              <option value="sul">
                Sul
              </option>
            </select>

            <span>
              {provinciasFiltradas.length}{" "}
              províncias
            </span>
          </div>

          <div className="clima-provincias-grid">
            {provinciasFiltradas.map(
              (provincia) => (
                <button
                  key={
                    provincia.nome
                  }
                  type="button"
                  className="clima-provincia-card"
                  onClick={() =>
                    abrirProvincia(
                      provincia
                    )
                  }
                >
                  <span>
                    {provincia.regiao}
                  </span>

                  <strong>
                    {provincia.nome}
                  </strong>

                  <small>
                    Abrir ficha climática
                  </small>
                </button>
              )
            )}
          </div>
        </div>
      </section>

      {/* ===================================================
          AGRICULTURA
      =================================================== */}

      <section className="clima-section clima-section-dark">
        <div className="clima-container">
          <div className="clima-agricultura-grid">
            <div>
              <span className="clima-section-kicker">
                CLIMA + AGRICULTURA
              </span>

              <h2>
                Produzir exige compreender o
                clima
              </h2>

              <p>
                O clima influencia diretamente a
                escolha das culturas, a época de
                sementeira, o desenvolvimento das
                plantas, a disponibilidade de água,
                a ocorrência de doenças e pragas,
                a produção pecuária e o risco de
                perdas.
              </p>

              <p>
                Por isso, a informação climática
                deve ser analisada juntamente com
                solos, relevo, água, sementes,
                tecnologia agrícola e calendário de
                produção.
              </p>

              <button
                type="button"
                className="clima-btn clima-btn-light"
                onClick={() =>
                  setModal(
                    "agricultura"
                  )
                }
              >
                Ver orientação agrícola
              </button>
            </div>

            <div className="clima-agricultura-lista">
              <div>
                <strong>
                  01
                </strong>

                <span>
                  Calendário agrícola
                </span>

                <p>
                  Relacionar o ciclo das culturas
                  com o comportamento esperado das
                  chuvas.
                </p>
              </div>

              <div>
                <strong>
                  02
                </strong>

                <span>
                  Gestão da água
                </span>

                <p>
                  Planejar irrigação, armazenamento
                  e conservação da água.
                </p>
              </div>

              <div>
                <strong>
                  03
                </strong>

                <span>
                  Escolha das culturas
                </span>

                <p>
                  Considerar temperatura,
                  precipitação, duração do ciclo e
                  risco climático.
                </p>
              </div>

              <div>
                <strong>
                  04
                </strong>

                <span>
                  Risco de perdas
                </span>

                <p>
                  Antecipar períodos secos, chuva
                  intensa e calor extremo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          MONITORIZAÇÃO
      =================================================== */}

      <section className="clima-section">
        <div className="clima-container">
          <div className="clima-section-heading">
            <div>
              <span className="clima-section-kicker">
                MONITORIZAÇÃO
              </span>

              <h2>
                Como acompanhar o clima?
              </h2>
            </div>

            <p>
              Diferentes indicadores permitem
              acompanhar não apenas a chuva, mas
              também os seus efeitos sobre o solo,
              vegetação e produção.
            </p>
          </div>

          <div className="clima-monitor-grid">
            <MonitorCard
              titulo="Precipitação"
              texto="Quantidade de chuva e comparação com valores de referência."
            />

            <MonitorCard
              titulo="Temperatura"
              texto="Temperatura média, máxima, mínima e ocorrência de extremos."
            />

            <MonitorCard
              titulo="Água no solo"
              texto="Indicador importante para avaliar disponibilidade hídrica para a vegetação."
            />

            <MonitorCard
              titulo="Saúde da vegetação"
              texto="Indicadores derivados de observação da vegetação ajudam a acompanhar impactos do clima."
            />

            <MonitorCard
              titulo="SPI"
              texto="Índices padronizados permitem analisar períodos de défice ou excesso de precipitação."
            />

            <MonitorCard
              titulo="Evapotranspiração"
              texto="Ajuda a compreender a perda de água do sistema solo-planta-atmosfera."
            />
          </div>

          <button
            type="button"
            className="clima-outline-btn"
            onClick={() =>
              setModal(
                "monitorizacao"
              )
            }
          >
            Ver metodologia de monitorização
          </button>
        </div>
      </section>

      {/* ===================================================
          SECA
      =================================================== */}

      <section className="clima-section clima-section-soft">
        <div className="clima-container">
          <div className="clima-risco-grid">
            <div>
              <span className="clima-section-kicker">
                RISCO CLIMÁTICO
              </span>

              <h2>
                Seca, calor e precipitação
                extrema
              </h2>

              <p>
                A vulnerabilidade climática de uma
                região não depende apenas do clima
                médio. Eventos extremos podem
                provocar perdas agrícolas,
                dificuldades para o abastecimento
                de água, degradação das pastagens e
                danos às infraestruturas.
              </p>

              <button
                type="button"
                className="clima-btn clima-btn-primary"
                onClick={() =>
                  setModal(
                    "seca"
                  )
                }
              >
                Explorar riscos
              </button>
            </div>

            <div className="clima-riscos">
              <div>
                <strong>
                  Seca meteorológica
                </strong>

                <span>
                  Défice de precipitação durante
                  determinado período.
                </span>
              </div>

              <div>
                <strong>
                  Chuva intensa
                </strong>

                <span>
                  Pode provocar erosão,
                  enxurradas, cheias e perdas de
                  solo.
                </span>
              </div>

              <div>
                <strong>
                  Calor extremo
                </strong>

                <span>
                  Pode aumentar o stress térmico
                  das plantas e dos animais.
                </span>
              </div>

              <div>
                <strong>
                  Variabilidade
                </strong>

                <span>
                  O comportamento da estação pode
                  mudar de um ano para outro.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          PREVISÃO
      =================================================== */}

      <section className="clima-section">
        <div className="clima-container">
          <div className="clima-previsao">
            <div>
              <span className="clima-section-kicker">
                PREVISÃO OFICIAL
              </span>

              <h2>
                Previsão meteorológica e
                agroclimática
              </h2>

              <p>
                A previsão meteorológica deve ser
                consultada em fontes oficiais e
                atualizadas. O AGROINOVA funciona
                como porta de entrada para o
                conhecimento climático e para as
                plataformas oficiais.
              </p>

              <button
                type="button"
                className="clima-btn clima-btn-primary"
                onClick={() =>
                  setModal(
                    "previsao"
                  )
                }
              >
                Ver previsão e fontes
              </button>
            </div>

            <div className="clima-previsao-box">
              <strong>
                INAMET
              </strong>

              <span>
                Vigilância e previsão
                agroclimática
              </span>

              <p>
                A plataforma oficial disponibiliza
                previsão diária até 15 dias e
                previsão mensal até 6 meses para as
                áreas abrangidas pelo sistema.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          CENÁRIOS
      =================================================== */}

      <section className="clima-section clima-section-soft">
        <div className="clima-container">
          <div className="clima-cenarios">
            <div>
              <span className="clima-section-kicker">
                CLIMA FUTURO
              </span>

              <h2>
                Cenários de mudança climática
              </h2>

              <p>
                Cenários climáticos não são
                previsões determinísticas. São
                ferramentas para analisar como
                temperatura, precipitação, seca e
                evapotranspiração podem evoluir em
                diferentes condições futuras.
              </p>

              <button
                type="button"
                className="clima-outline-btn"
                onClick={() =>
                  setModal(
                    "cenarios"
                  )
                }
              >
                Conhecer os cenários
              </button>
            </div>

            <div className="clima-cenario-indicadores">
              <span>
                TEMPERATURA
              </span>

              <span>
                PRECIPITAÇÃO
              </span>

              <span>
                SECAS
              </span>

              <span>
                EVAPOTRANSPIRAÇÃO
              </span>

              <span>
                DIAS MUITO QUENTES
              </span>

              <span>
                DIAS SECOS CONSECUTIVOS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          FONTES
      =================================================== */}

      <section className="clima-section">
        <div className="clima-container">
          <div className="clima-section-heading">
            <div>
              <span className="clima-section-kicker">
                FONTES
              </span>

              <h2>
                Fontes climáticas
              </h2>
            </div>

            <p>
              Informação climática deve ser
              rastreável e acompanhada pela sua
              origem.
            </p>
          </div>

          <div className="clima-fontes">
            <FonteCard
              nome="INAMET"
              descricao="Instituto Nacional de Meteorologia e Geofísica de Angola."
              url="https://inamet.gov.ao/"
            />

            <FonteCard
              nome="INAMET Agroclima"
              descricao="Plataforma de monitorização agroclimática."
              url="https://agroclima.inamet.gov.ao/"
            />

            <FonteCard
              nome="INAMET Agroprev"
              descricao="Plataforma de vigilância e previsão agroclimática."
              url="https://agroprev.inamet.gov.ao/pt/a-plataforma/"
            />

            <FonteCard
              nome="INAMET Clima Futuro"
              descricao="Plataforma de cenários climáticos para Angola."
              url="https://climafuturo.inamet.gov.ao/pt/"
            />
          </div>
        </div>
      </section>

      {/* ===================================================
          FINAL
      =================================================== */}

      <section className="clima-final">
        <div className="clima-container">
          <span className="clima-section-kicker">
            AGROINOVA ANGOLA
          </span>

          <h2>
            Conhecimento climático ao serviço
            do campo angolano
          </h2>

          <p>
            O clima deve ser analisado em
            conjunto com solos, água, culturas,
            pecuária, relevo, biodiversidade e
            sistemas de produção.
          </p>

          <div className="clima-final-links">
            <Link href="/solos">
              Solos
            </Link>

            <Link href="/dados">
              Dados agrícolas
            </Link>

            <Link href="/pecuaria">
              Pecuária
            </Link>

            <Link href="/pesca">
              Pesca
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================
          MODAIS
      =================================================== */}

      {modal && (
        <div
          className="clima-modal-overlay"
          role="presentation"
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              fecharModal();
            }
          }}
        >
          <div
            className="clima-modal"
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="clima-modal-close"
              onClick={
                fecharModal
              }
              aria-label="Fechar"
            >
              ×
            </button>

            {modal ===
              "precipitacao" && (
              <ModalPrecipitacao />
            )}

            {modal ===
              "temperatura" && (
              <ModalTemperatura />
            )}

            {modal ===
              "chuvas" && (
              <ModalChuvas />
            )}

            {modal ===
              "regioes" && (
              <ModalRegioes
                regiaoSelecionada={
                  regiaoSelecionada
                }
              />
            )}

            {modal ===
              "agricultura" && (
              <ModalAgricultura />
            )}

            {modal ===
              "seca" && (
              <ModalSeca />
            )}

            {modal ===
              "previsao" && (
              <ModalPrevisao />
            )}

            {modal ===
              "cenarios" && (
              <ModalCenarios />
            )}

            {modal ===
              "monitorizacao" && (
              <ModalMonitorizacao />
            )}

            {modal ===
              "provincia" &&
              provinciaSelecionada && (
                <ModalProvincia
                  provincia={
                    provinciaSelecionada
                  }
                />
              )}
          </div>
        </div>
      )}

      {/* ===================================================
          ESTILOS
      =================================================== */}

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #f7faf8;
        }

        .clima-page {
          min-height: 100vh;
          background: #ffffff;
          color: #17221b;
        }

        .clima-container {
          width: min(1240px, calc(100% - 36px));
          margin: 0 auto;
        }

        .clima-hero {
          background:
            radial-gradient(
              circle at 85% 20%,
              rgba(134, 239, 172, 0.16),
              transparent 30%
            ),
            linear-gradient(
              135deg,
              #082f1a,
              #14532d 55%,
              #166534
            );
          color: #ffffff;
          padding: 92px 0 82px;
        }

        .clima-hero-grid {
          display: grid;
          grid-template-columns:
            minmax(0, 1.4fr)
            minmax(320px, 0.8fr);
          gap: 60px;
          align-items: center;
        }

        .clima-eyebrow,
        .clima-section-kicker {
          display: inline-block;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .clima-eyebrow {
          color: #bbf7d0;
          margin-bottom: 18px;
        }

        .clima-hero h1 {
          margin: 0;
          font-size: clamp(44px, 6vw, 76px);
          line-height: 0.98;
          letter-spacing: -0.055em;
          max-width: 760px;
        }

        .clima-hero-content > p {
          max-width: 710px;
          margin: 26px 0 0;
          color: #dcfce7;
          font-size: 18px;
          line-height: 1.75;
        }

        .clima-hero-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 30px;
        }

        .clima-btn {
          border: 0;
          border-radius: 12px;
          padding: 13px 18px;
          font-weight: 800;
          cursor: pointer;
          font-size: 14px;
          transition:
            transform 0.2s ease,
            opacity 0.2s ease;
        }

        .clima-btn:hover {
          transform: translateY(-2px);
        }

        .clima-btn-primary {
          background: #166534;
          color: #ffffff;
        }

        .clima-hero .clima-btn-primary {
          background: #ffffff;
          color: #14532d;
        }

        .clima-btn-secondary {
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.24);
        }

        .clima-btn-dark {
          background: #14532d;
          color: #ffffff;
        }

        .clima-btn-light {
          background: #ffffff;
          color: #14532d;
        }

        .clima-hero-panel {
          border: 1px solid rgba(255, 255, 255, 0.16);
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          border-radius: 24px;
          padding: 28px;
        }

        .clima-hero-panel > span {
          color: #bbf7d0;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.14em;
        }

        .clima-hero-panel > strong {
          display: block;
          margin-top: 8px;
          font-size: 34px;
        }

        .clima-hero-panel > p {
          color: #dcfce7;
          line-height: 1.65;
        }

        .clima-hero-panel-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: rgba(255, 255, 255, 0.12);
          margin-top: 24px;
        }

        .clima-hero-panel-grid div {
          background: rgba(7, 48, 27, 0.7);
          padding: 16px;
        }

        .clima-hero-panel-grid strong {
          display: block;
          font-size: 21px;
        }

        .clima-hero-panel-grid span {
          display: block;
          margin-top: 4px;
          color: #bbf7d0;
          font-size: 11px;
          line-height: 1.4;
        }

        .clima-section {
          padding: 88px 0;
        }

        .clima-section-white {
          background: #ffffff;
        }

        .clima-section-soft {
          background: #f3f7f4;
        }

        .clima-section-dark {
          background: #0b2e1a;
          color: #ffffff;
        }

        .clima-section-heading {
          display: flex;
          justify-content: space-between;
          gap: 40px;
          align-items: end;
          margin-bottom: 38px;
        }

        .clima-section-heading h2 {
          margin: 8px 0 0;
          font-size: clamp(30px, 4vw, 48px);
          line-height: 1.05;
          letter-spacing: -0.04em;
        }

        .clima-section-heading > p {
          max-width: 500px;
          color: #64746b;
          line-height: 1.7;
          margin: 0;
        }

        .clima-section-kicker {
          color: #15803d;
        }

        .clima-temas-grid {
          display: grid;
          grid-template-columns:
            repeat(4, minmax(0, 1fr));
          gap: 15px;
        }

        .clima-tema-card {
          border: 1px solid #dce8df;
          background: #ffffff;
          border-radius: 17px;
          padding: 23px;
          text-align: left;
          min-height: 210px;
          cursor: pointer;
          transition:
            transform 0.2s ease,
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .clima-tema-card:hover {
          transform: translateY(-4px);
          border-color: #86b99a;
          box-shadow:
            0 16px 35px rgba(20, 83, 45, 0.1);
        }

        .clima-tema-card h3 {
          margin: 45px 0 10px;
          font-size: 20px;
        }

        .clima-tema-card p {
          color: #64746b;
          line-height: 1.65;
          font-size: 13px;
        }

        .clima-tema-card span:last-child {
          display: block;
          color: #15803d;
          font-size: 12px;
          font-weight: 800;
          margin-top: 18px;
        }

        .clima-map-controls {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 12px;
        }

        .clima-map-controls button {
          border: 1px solid #d5e1d9;
          background: #ffffff;
          color: #33473a;
          border-radius: 10px;
          padding: 10px 14px;
          font-weight: 700;
          cursor: pointer;
        }

        .clima-map-controls button.ativo {
          background: #166534;
          border-color: #166534;
          color: #ffffff;
        }

        .clima-map-wrapper {
          position: relative;
          height: 570px;
          border-radius: 22px;
          overflow: hidden;
          border: 1px solid #d9e4dd;
          background: #dbeafe;
          box-shadow:
            0 18px 50px rgba(15, 23, 42, 0.1);
        }

        .clima-map {
          width: 100%;
          height: 100%;
        }

        .clima-map-info {
          position: absolute;
          z-index: 500;
          top: 16px;
          left: 16px;
          width: 280px;
          background: rgba(255, 255, 255, 0.96);
          border-radius: 15px;
          padding: 16px;
          box-shadow:
            0 8px 25px rgba(15, 23, 42, 0.14);
        }

        .clima-map-info span {
          display: block;
          color: #15803d;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.12em;
        }

        .clima-map-info strong {
          display: block;
          margin-top: 5px;
          font-size: 18px;
        }

        .clima-map-info p {
          color: #64746b;
          font-size: 11px;
          line-height: 1.55;
          margin-bottom: 0;
        }

        .clima-map-error {
          position: absolute;
          z-index: 1000;
          top: 100px;
          left: 50%;
          transform: translateX(-50%);
          width: min(500px, calc(100% - 40px));
          background: #ffffff;
          border-radius: 15px;
          padding: 20px;
          box-shadow:
            0 10px 35px rgba(15, 23, 42, 0.18);
        }

        .clima-map-error p {
          color: #64746b;
          line-height: 1.6;
        }

        .clima-map-nota {
          margin-top: 14px;
          border-left: 4px solid #166534;
          padding: 12px 17px;
          background: #ffffff;
        }

        .clima-map-nota p {
          color: #64746b;
          font-size: 12px;
          line-height: 1.6;
          margin-bottom: 0;
        }

        .clima-regioes-grid {
          display: grid;
          grid-template-columns:
            repeat(5, minmax(0, 1fr));
          gap: 14px;
        }

        .clima-regiao-card {
          background: #ffffff;
          border: 1px solid #dce8df;
          border-radius: 18px;
          padding: 23px;
        }

        .clima-regiao-card > span {
          color: #15803d;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .clima-regiao-card h3 {
          font-size: 20px;
          margin: 13px 0;
        }

        .clima-regiao-card p {
          color: #64746b;
          font-size: 13px;
          line-height: 1.65;
        }

        .clima-regiao-card div {
          margin-top: 20px;
          padding-top: 15px;
          border-top: 1px solid #e4ece7;
        }

        .clima-regiao-card button {
          border: 0;
          background: transparent;
          color: #15803d;
          font-weight: 800;
          padding: 0;
          cursor: pointer;
        }

        .clima-feature {
          display: grid;
          grid-template-columns:
            minmax(0, 1.1fr)
            minmax(300px, 0.9fr);
          gap: 50px;
          align-items: center;
        }

        .clima-feature h2,
        .clima-agricultura-grid h2,
        .clima-risco-grid h2,
        .clima-previsao h2,
        .clima-cenarios h2 {
          font-size: clamp(31px, 4vw, 50px);
          line-height: 1.05;
          letter-spacing: -0.04em;
          margin: 10px 0 20px;
        }

        .clima-feature p,
        .clima-agricultura-grid p,
        .clima-risco-grid p,
        .clima-previsao p,
        .clima-cenarios p {
          color: #617067;
          line-height: 1.8;
        }

        .clima-feature-side {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .clima-feature-side div {
          background: #ffffff;
          border: 1px solid #dce8df;
          border-radius: 15px;
          padding: 20px;
        }

        .clima-feature-side strong,
        .clima-feature-side span {
          display: block;
        }

        .clima-feature-side strong {
          color: #14532d;
          margin-bottom: 7px;
        }

        .clima-feature-side span {
          color: #68766e;
          font-size: 12px;
          line-height: 1.55;
        }

        .clima-provincias-toolbar {
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            230px
            auto;
          gap: 10px;
          margin-bottom: 20px;
          align-items: center;
        }

        .clima-provincias-toolbar input,
        .clima-provincias-toolbar select {
          width: 100%;
          border: 1px solid #d6e2da;
          border-radius: 11px;
          padding: 13px 14px;
          background: #ffffff;
          color: #24362b;
          outline: none;
        }

        .clima-provincias-toolbar input:focus,
        .clima-provincias-toolbar select:focus {
          border-color: #15803d;
        }

        .clima-provincias-toolbar > span {
          color: #64746b;
          font-size: 13px;
          white-space: nowrap;
        }

        .clima-provincias-grid {
          display: grid;
          grid-template-columns:
            repeat(4, minmax(0, 1fr));
          gap: 12px;
        }

        .clima-provincia-card {
          text-align: left;
          border: 1px solid #dce8df;
          background: #ffffff;
          border-radius: 15px;
          padding: 20px;
          cursor: pointer;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .clima-provincia-card:hover {
          transform: translateY(-3px);
          box-shadow:
            0 12px 30px rgba(20, 83, 45, 0.08);
        }

        .clima-provincia-card span,
        .clima-provincia-card small {
          display: block;
        }

        .clima-provincia-card span {
          color: #15803d;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .clima-provincia-card strong {
          display: block;
          margin: 8px 0;
          font-size: 18px;
        }

        .clima-provincia-card small {
          color: #718078;
        }

        .clima-agricultura-grid {
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            minmax(300px, 0.9fr);
          gap: 60px;
        }

        .clima-section-dark .clima-section-kicker {
          color: #86efac;
        }

        .clima-section-dark p {
          color: #c7ddd0;
        }

        .clima-agricultura-lista {
          display: grid;
          gap: 1px;
          background: rgba(255, 255, 255, 0.12);
        }

        .clima-agricultura-lista div {
          background: #0e3b22;
          padding: 22px;
        }

        .clima-agricultura-lista strong {
          color: #86efac;
          font-size: 12px;
        }

        .clima-agricultura-lista span {
          display: block;
          font-weight: 800;
          font-size: 17px;
          margin-top: 5px;
        }

        .clima-agricultura-lista p {
          font-size: 12px;
          margin-bottom: 0;
        }

        .clima-monitor-grid {
          display: grid;
          grid-template-columns:
            repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .clima-monitor-card {
          border: 1px solid #dce8df;
          border-radius: 17px;
          padding: 23px;
          background: #ffffff;
        }

        .clima-monitor-card h3 {
          margin: 0 0 10px;
        }

        .clima-monitor-card p {
          color: #65746b;
          line-height: 1.65;
          font-size: 13px;
          margin-bottom: 0;
        }

        .clima-outline-btn {
          border: 1px solid #166534;
          background: #ffffff;
          color: #166534;
          border-radius: 11px;
          padding: 12px 16px;
          font-weight: 800;
          cursor: pointer;
          margin-top: 22px;
        }

        .clima-risco-grid {
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            minmax(300px, 0.9fr);
          gap: 60px;
          align-items: center;
        }

        .clima-riscos {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .clima-riscos div {
          background: #ffffff;
          border: 1px solid #dce8df;
          border-radius: 15px;
          padding: 20px;
        }

        .clima-riscos strong,
        .clima-riscos span {
          display: block;
        }

        .clima-riscos strong {
          color: #14532d;
        }

        .clima-riscos span {
          color: #68766e;
          font-size: 12px;
          line-height: 1.55;
          margin-top: 8px;
        }

        .clima-previsao {
          display: grid;
          grid-template-columns:
            minmax(0, 1.1fr)
            minmax(300px, 0.9fr);
          gap: 60px;
          align-items: center;
        }

        .clima-previsao-box {
          background: #eef7f0;
          border: 1px solid #cce2d2;
          border-radius: 22px;
          padding: 30px;
        }

        .clima-previsao-box strong {
          display: block;
          font-size: 28px;
          color: #14532d;
        }

        .clima-previsao-box span {
          color: #15803d;
          font-weight: 800;
        }

        .clima-previsao-box p {
          margin-bottom: 0;
          font-size: 13px;
        }

        .clima-cenarios {
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            minmax(300px, 0.8fr);
          gap: 60px;
          align-items: center;
        }

        .clima-cenario-indicadores {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .clima-cenario-indicadores span {
          padding: 12px 15px;
          border: 1px solid #cddfd2;
          background: #ffffff;
          border-radius: 10px;
          color: #14532d;
          font-size: 11px;
          font-weight: 900;
        }

        .clima-fontes {
          display: grid;
          grid-template-columns:
            repeat(4, minmax(0, 1fr));
          gap: 14px;
        }

        .clima-fonte {
          border: 1px solid #dce8df;
          border-radius: 17px;
          padding: 22px;
          background: #ffffff;
        }

        .clima-fonte h3 {
          margin: 0 0 10px;
        }

        .clima-fonte p {
          color: #64746b;
          font-size: 12px;
          line-height: 1.6;
        }

        .clima-fonte a {
          color: #15803d;
          font-size: 12px;
          font-weight: 800;
          text-decoration: none;
        }

        .clima-final {
          background: #082f1a;
          color: #ffffff;
          padding: 90px 0;
          text-align: center;
        }

        .clima-final .clima-section-kicker {
          color: #86efac;
        }

        .clima-final h2 {
          max-width: 780px;
          margin: 12px auto;
          font-size: clamp(32px, 5vw, 56px);
          line-height: 1.05;
          letter-spacing: -0.04em;
        }

        .clima-final p {
          max-width: 650px;
          margin: 20px auto;
          color: #cce2d2;
          line-height: 1.7;
        }

        .clima-final-links {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 9px;
          margin-top: 30px;
        }

        .clima-final-links a {
          color: #14532d;
          background: #ffffff;
          border-radius: 10px;
          padding: 11px 15px;
          text-decoration: none;
          font-weight: 800;
          font-size: 12px;
        }

        .clima-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 99999;
          background: rgba(3, 20, 11, 0.72);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 25px;
          overflow-y: auto;
        }

        .clima-modal {
          width: min(980px, 100%);
          max-height: calc(100vh - 50px);
          overflow-y: auto;
          background: #ffffff;
          border-radius: 23px;
          padding: 38px;
          position: relative;
          box-shadow:
            0 30px 100px rgba(0, 0, 0, 0.35);
        }

        .clima-modal-close {
          position: sticky;
          float: right;
          top: 0;
          width: 38px;
          height: 38px;
          border: 0;
          background: #edf4ef;
          color: #14532d;
          border-radius: 50%;
          font-size: 27px;
          cursor: pointer;
          z-index: 2;
        }

        .clima-modal h2 {
          max-width: 800px;
          font-size: clamp(30px, 4vw, 48px);
          line-height: 1.05;
          letter-spacing: -0.04em;
          margin: 0 0 20px;
        }

        .clima-modal h3 {
          color: #14532d;
          margin-top: 30px;
        }

        .clima-modal p,
        .clima-modal li {
          color: #5f6e65;
          line-height: 1.8;
        }

        .clima-modal ul {
          padding-left: 20px;
        }

        .clima-modal-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 25px;
        }

        .clima-modal-card {
          border: 1px solid #dce8df;
          border-radius: 14px;
          padding: 18px;
          background: #f8fbf9;
        }

        .clima-modal-card strong {
          color: #14532d;
        }

        .clima-modal-link {
          display: inline-block;
          margin-top: 20px;
          padding: 12px 16px;
          background: #166534;
          color: #ffffff;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 800;
          font-size: 13px;
        }

        .clima-provincia-modal-head {
          border-bottom: 1px solid #dce8df;
          padding-bottom: 20px;
          margin-bottom: 25px;
        }

        .clima-provincia-modal-head span {
          color: #15803d;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .clima-provincia-modal-head h2 {
          margin-top: 7px;
        }

        .clima-provincia-box {
          border-left: 4px solid #166534;
          background: #f3f8f4;
          padding: 18px;
          margin-top: 20px;
        }

        .clima-provincia-box strong {
          color: #14532d;
        }

        @media (max-width: 1100px) {
          .clima-temas-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .clima-regioes-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .clima-provincias-grid {
            grid-template-columns:
              repeat(3, minmax(0, 1fr));
          }

          .clima-fontes {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 800px) {
          .clima-hero {
            padding: 65px 0;
          }

          .clima-hero-grid,
          .clima-feature,
          .clima-agricultura-grid,
          .clima-risco-grid,
          .clima-previsao,
          .clima-cenarios {
            grid-template-columns: 1fr;
          }

          .clima-section {
            padding: 60px 0;
          }

          .clima-section-heading {
            display: block;
          }

          .clima-section-heading > p {
            margin-top: 15px;
          }

          .clima-provincias-toolbar {
            grid-template-columns: 1fr;
          }

          .clima-provincias-toolbar > span {
            white-space: normal;
          }

          .clima-provincias-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .clima-monitor-grid {
            grid-template-columns: 1fr 1fr;
          }

          .clima-map-wrapper {
            height: 480px;
          }

          .clima-map-info {
            width: 230px;
          }

          .clima-modal {
            padding: 25px 20px;
          }
        }

        @media (max-width: 560px) {
          .clima-container {
            width: min(
              100% - 24px,
              1240px
            );
          }

          .clima-temas-grid,
          .clima-regioes-grid,
          .clima-provincias-grid,
          .clima-monitor-grid,
          .clima-fontes,
          .clima-feature-side,
          .clima-riscos,
          .clima-modal-grid {
            grid-template-columns: 1fr;
          }

          .clima-hero-panel-grid {
            grid-template-columns: 1fr 1fr;
          }

          .clima-map-wrapper {
            height: 430px;
            border-radius: 15px;
          }

          .clima-map-info {
            position: absolute;
            top: 10px;
            left: 10px;
            width: 205px;
            padding: 11px;
          }

          .clima-map-info p {
            display: none;
          }

          .clima-hero h1 {
            font-size: 48px;
          }
        }
      `}</style>
    </main>
  );
}

/* =========================================================
   TEMA CARD
   ========================================================= */

function TemaCard({
  titulo,
  texto,
  onClick,
}: {
  titulo: string;
  texto: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className="clima-tema-card"
      onClick={onClick}
    >
      <span className="clima-section-kicker">
        CLIMA
      </span>

      <h3>
        {titulo}
      </h3>

      <p>
        {texto}
      </p>

      <span>
        Abrir informação
      </span>
    </button>
  );
}

/* =========================================================
   MONITOR CARD
   ========================================================= */

function MonitorCard({
  titulo,
  texto,
}: {
  titulo: string;
  texto: string;
}) {
  return (
    <article className="clima-monitor-card">
      <h3>
        {titulo}
      </h3>

      <p>
        {texto}
      </p>
    </article>
  );
}

/* =========================================================
   FONTE
   ========================================================= */

function FonteCard({
  nome,
  descricao,
  url,
}: {
  nome: string;
  descricao: string;
  url: string;
}) {
  return (
    <article className="clima-fonte">
      <h3>
        {nome}
      </h3>

      <p>
        {descricao}
      </p>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Consultar fonte oficial
      </a>
    </article>
  );
}

/* =========================================================
   MODAL — PRECIPITAÇÃO
   ========================================================= */

function ModalPrecipitacao() {
  return (
    <>
      <span className="clima-section-kicker">
        PRECIPITAÇÃO
      </span>

      <h2>
        Precipitação em Angola
      </h2>

      <p>
        A precipitação é uma das variáveis
        climáticas mais importantes para o
        território angolano, sobretudo porque
        grande parte da agricultura depende
        diretamente das chuvas.
      </p>

      <p>
        A quantidade total de chuva não explica
        sozinha o comportamento climático. Para
        a agricultura é igualmente importante
        saber quando começa a estação chuvosa,
        quanto tempo dura, como a chuva se
        distribui durante a estação e quantos
        períodos secos ocorrem entre eventos de
        precipitação.
      </p>

      <h3>
        O que deve ser analisado?
      </h3>

      <div className="clima-modal-grid">
        <div className="clima-modal-card">
          <strong>
            Precipitação acumulada
          </strong>

          <p>
            Soma da precipitação durante um
            período definido.
          </p>
        </div>

        <div className="clima-modal-card">
          <strong>
            Anomalia
          </strong>

          <p>
            Diferença entre o valor observado e
            um período climático de referência.
          </p>
        </div>

        <div className="clima-modal-card">
          <strong>
            Dias chuvosos
          </strong>

          <p>
            Número de dias em que a precipitação
            ultrapassa um determinado limiar.
          </p>
        </div>

        <div className="clima-modal-card">
          <strong>
            Dias secos consecutivos
          </strong>

          <p>
            Indicador particularmente importante
            para culturas de sequeiro.
          </p>
        </div>
      </div>

      <p>
        O INAMET utiliza, entre outros produtos,
        dados ERA5 para analisar precipitação e
        anomalias relativamente a períodos de
        referência. A plataforma agroclimática
        oficial apresenta, por exemplo,
        precipitação total e comparação com a
        normal climatológica.
      </p>
    </>
  );
}

/* =========================================================
   MODAL — TEMPERATURA
   ========================================================= */

function ModalTemperatura() {
  return (
    <>
      <span className="clima-section-kicker">
        TEMPERATURA
      </span>

      <h2>
        Temperatura e calor em Angola
      </h2>

      <p>
        A temperatura do ar varia em Angola de
        acordo com latitude, altitude, relevo,
        distância ao oceano e características da
        circulação atmosférica.
      </p>

      <p>
        As zonas de maior altitude, especialmente
        no planalto central e áreas elevadas do
        sul, apresentam condições térmicas
        diferentes das áreas baixas e costeiras.
      </p>

      <h3>
        Indicadores importantes
      </h3>

      <ul>
        <li>
          Temperatura média do ar.
        </li>

        <li>
          Temperatura máxima diária.
        </li>

        <li>
          Temperatura mínima diária.
        </li>

        <li>
          Número de dias muito quentes.
        </li>

        <li>
          Ondas de calor.
        </li>

        <li>
          Noites tropicais.
        </li>
      </ul>

      <p>
        Os cenários climáticos disponibilizados
        pelo INAMET incluem indicadores como
        temperatura média, máxima e mínima,
        número de dias muito quentes, noites
        tropicais e ondas de calor.
      </p>
    </>
  );
}

/* =========================================================
   MODAL — CHUVAS
   ========================================================= */

function ModalChuvas() {
  return (
    <>
      <span className="clima-section-kicker">
        ESTAÇÃO CHUVOSA
      </span>

      <h2>
        Chuvas e estação agrícola
      </h2>

      <p>
        Angola apresenta forte sazonalidade da
        precipitação. O comportamento da estação
        chuvosa varia entre regiões e é
        fundamental para definir o calendário
        agrícola.
      </p>

      <h3>
        Por que o início das chuvas importa?
      </h3>

      <p>
        Uma sementeira realizada antes de existir
        humidade suficiente no solo pode resultar
        em falhas de germinação. Por outro lado,
        atrasos ou interrupções prolongadas das
        chuvas podem afetar o estabelecimento e
        desenvolvimento das culturas.
      </p>

      <h3>
        A chuva não é apenas quantidade
      </h3>

      <p>
        Para uma análise agrícola é necessário
        considerar intensidade, frequência,
        duração, distribuição temporal, períodos
        secos e eventos extremos.
      </p>

      <p>
        Dados históricos do INAMET mostram forte
        sazonalidade da precipitação em Angola e
        importante variabilidade interanual dos
        valores mensais da estação chuvosa.
      </p>
    </>
  );
}

/* =========================================================
   MODAL — REGIÕES
   ========================================================= */

function ModalRegioes({
  regiaoSelecionada,
}: {
  regiaoSelecionada: string;
}) {
  const regiao =
    REGIOES.find(
      (item) =>
        item.nome ===
        regiaoSelecionada
    ) ??
    REGIOES[0];

  return (
    <>
      <span className="clima-section-kicker">
        REGIÕES CLIMÁTICAS
      </span>

      <h2>
        {regiao.titulo}
      </h2>

      <p>
        {regiao.texto}
      </p>

      <h3>
        Área de referência
      </h3>

      <p>
        {regiao.provincias}
      </p>

      <h3>
        Implicações agrícolas
      </h3>

      <p>
        {regiao.agricultura}
      </p>

      <h3>
        Importante
      </h3>

      <p>
        As divisões apresentadas são uma forma
        de organizar o conhecimento climático
        para o portal. Não substituem uma
        classificação climatológica detalhada
        baseada em séries de estações,
        reanálises e métodos estatísticos.
      </p>

      <div className="clima-modal-grid">
        {REGIOES.map(
          (item) => (
            <div
              className="clima-modal-card"
              key={item.id}
            >
              <strong>
                {item.nome}
              </strong>

              <p>
                {item.titulo}
              </p>
            </div>
          )
        )}
      </div>
    </>
  );
}

/* =========================================================
   MODAL — AGRICULTURA
   ========================================================= */

function ModalAgricultura() {
  return (
    <>
      <span className="clima-section-kicker">
        CLIMA + AGRICULTURA
      </span>

      <h2>
        Como o clima influencia a produção
        agrícola?
      </h2>

      <p>
        O clima determina parte importante das
        condições em que uma cultura consegue
        germinar, crescer, florescer e produzir.
        A decisão agrícola, contudo, deve
        combinar clima com solo, cultivar,
        disponibilidade de água, relevo,
        tecnologia e práticas de manejo.
      </p>

      <h3>
        Sementeira
      </h3>

      <p>
        A disponibilidade de humidade no solo
        depois do início das chuvas é um dos
        elementos relevantes para culturas de
        sequeiro.
      </p>

      <h3>
        Água
      </h3>

      <p>
        Em zonas secas, o conhecimento da
        precipitação e da evapotranspiração ajuda
        a melhorar o planeamento da irrigação e
        conservação de água.
      </p>

      <h3>
        Solos
      </h3>

      <p>
        A mesma quantidade de chuva pode produzir
        resultados muito diferentes dependendo da
        textura, profundidade, drenagem,
        matéria orgânica e capacidade de retenção
        de água do solo.
      </p>

      <h3>
        Pecuária
      </h3>

      <p>
        Temperatura, disponibilidade de água,
        pastagens e ocorrência de períodos secos
        influenciam diretamente os sistemas
        pecuários.
      </p>

      <h3>
        Planeamento
      </h3>

      <p>
        O melhor uso da informação climática é
        antecipar riscos, adaptar calendários e
        escolher estratégias de produção
        adequadas às condições locais.
      </p>
    </>
  );
}

/* =========================================================
   MODAL — SECA
   ========================================================= */

function ModalSeca() {
  return (
    <>
      <span className="clima-section-kicker">
        EXTREMOS CLIMÁTICOS
      </span>

      <h2>
        Seca, calor e chuva intensa
      </h2>

      <p>
        Eventos extremos podem ter impacto muito
        superior ao sugerido pelas médias
        climáticas. Para a agricultura, períodos
        secos durante uma fase crítica da cultura
        podem ser tão importantes quanto o total
        de chuva da estação.
      </p>

      <h3>
        Seca meteorológica
      </h3>

      <p>
        Está relacionada com défices de
        precipitação relativamente às condições
        normais ou de referência.
      </p>

      <h3>
        SPI
      </h3>

      <p>
        O Índice Padronizado de Precipitação
        permite analisar défices e excessos de
        precipitação em diferentes escalas
        temporais.
      </p>

      <h3>
        Chuva intensa
      </h3>

      <p>
        Eventos intensos podem provocar
        escoamento superficial, erosão, cheias e
        perdas de solo, mesmo quando a
        precipitação acumulada da estação não é
        necessariamente baixa.
      </p>

      <h3>
        Calor extremo
      </h3>

      <p>
        Temperaturas muito elevadas podem
        aumentar a evapotranspiração e o stress
        hídrico das culturas e animais.
      </p>

      <p>
        A plataforma de cenários climáticos do
        INAMET acompanha indicadores de dias muito
        quentes, ondas de calor, dias secos
        consecutivos e índices de seca SPI.
      </p>
    </>
  );
}

/* =========================================================
   MODAL — PREVISÃO
   ========================================================= */

function ModalPrevisao() {
  return (
    <>
      <span className="clima-section-kicker">
        PREVISÃO
      </span>

      <h2>
        Previsão meteorológica e agroclimática
      </h2>

      <p>
        A previsão meteorológica é diferente de
        uma climatologia. A previsão procura
        indicar condições esperadas para um
        período futuro, enquanto a climatologia
        descreve padrões e estatísticas de
        períodos mais longos.
      </p>

      <h3>
        INAMET Agroprev
      </h3>

      <p>
        A plataforma oficial de vigilância e
        previsão agroclimática apresenta previsão
        diária até 15 dias e previsão mensal até
        6 meses. Entre os indicadores utilizados
        estão temperatura máxima e mínima,
        humidade, precipitação, vento, pressão,
        água no solo, stress animal e SPI.
      </p>

 <h3>
  Área atualmente abrangida
</h3>

<p>
  A plataforma de monitorização agroclimática
  do projeto FRESAN está estruturada para
  Cunene, Huíla e Namibe. O AGROINOVA não deve
  transformar essa cobertura em valores para
  outras províncias sem uma fonte correspondente.
</p>

<p>
  A plataforma oficial de vigilância e previsão
  agroclimática apresenta previsão diária até
  15 dias e previsão mensal até 6 meses. Entre
  os indicadores utilizados estão temperatura
  máxima e mínima, humidade, precipitação, vento,
  pressão, água no solo, stress animal e SPI.
</p>

<a
  className="clima-modal-link"
  href="https://agroprev.inamet.gov.ao/pt/previsao-15-dias/"
  target="_blank"
  rel="noopener noreferrer"
>
  Abrir previsão oficial INAMET
</a>
    </>
  );
}
/* =========================================================
   MODAL — CENÁRIOS
   ========================================================= */

function ModalCenarios() {
  return (
    <>
      <span className="clima-section-kicker">
        CLIMA FUTURO
      </span>

      <h2>
        Cenários climáticos para Angola
      </h2>

      <p>
        Cenários climáticos ajudam a estudar
        possíveis alterações das condições
        climáticas futuras. Não devem ser
        apresentados como previsões exatas de
        determinado dia ou ano.
      </p>

      <h3>
        Temperatura
      </h3>

      <p>
        Podem ser analisadas médias de
        temperatura, temperaturas máximas e
        mínimas, dias muito quentes, noites
        tropicais e ondas de calor.
      </p>

      <h3>
        Precipitação
      </h3>

      <p>
        Os cenários podem analisar precipitação
        média acumulada, dias de chuva,
        precipitação intensa e períodos secos
        consecutivos.
      </p>

      <h3>
        Seca
      </h3>

      <p>
        Os indicadores incluem diferentes escalas
        do SPI e duração de episódios de seca.
      </p>

      <h3>
        Períodos futuros
      </h3>
<p>
  A plataforma de cenários climáticos do
  INAMET apresenta, entre outros, horizontes
  como 2041–2070 e 2071–2100, comparados
  com períodos de referência definidos pela
  metodologia.
</p>

      <a
        className="clima-modal-link"
        href="https://climafuturo.inamet.gov.ao/pt/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Abrir Clima Futuro INAMET
      </a>
    </>
  );
}

/* =========================================================
   MODAL — MONITORIZAÇÃO
   ========================================================= */

function ModalMonitorizacao() {
  return (
    <>
      <span className="clima-section-kicker">
        MONITORIZAÇÃO AGROCLIMÁTICA
      </span>

      <h2>
        Indicadores usados para acompanhar o
        clima
      </h2>

      <p>
        A monitorização moderna não depende de
        uma única variável. A precipitação pode
        ser combinada com temperatura, água no
        solo, vegetação e índices de seca para
        compreender melhor as condições agrícolas.
      </p>

      <div className="clima-modal-grid">
        <div className="clima-modal-card">
          <strong>
            ERA5
          </strong>

          <p>
            Reanálise meteorológica utilizada em
            produtos agroclimáticos do INAMET.
          </p>
        </div>

        <div className="clima-modal-card">
          <strong>
            Água no solo
          </strong>

          <p>
            Indicador da disponibilidade de água
            no perfil do solo.
          </p>
        </div>

        <div className="clima-modal-card">
          <strong>
            Vegetação
          </strong>

          <p>
            Indicadores de saúde da vegetação
            permitem observar impactos ambientais
            e climáticos.
          </p>
        </div>

        <div className="clima-modal-card">
          <strong>
            SPI
          </strong>

          <p>
            Índice utilizado para analisar
            anomalias de precipitação e seca.
          </p>
        </div>
      </div>

      <p>
        A plataforma oficial Agroclima do INAMET
        apresenta precipitação total baseada no
        ERA5, índice de água no solo e indicadores
        de saúde da vegetação para Cunene, Huíla
        e Namibe.
      </p>
    </>
  );
}

/* =========================================================
   MODAL — PROVÍNCIA
   ========================================================= */

function ModalProvincia({
  provincia,
}: {
  provincia: Provincia;
}) {
  return (
    <>
      <div className="clima-provincia-modal-head">
        <span>
          FICHA CLIMÁTICA PROVINCIAL
        </span>

        <h2>
          {provincia.nome}
        </h2>

        <p>
          {provincia.regiao}
        </p>
      </div>

      <h3>
        Caracterização climática
      </h3>

      <p>
        {provincia.descricao}
      </p>

      <div className="clima-provincia-box">
        <strong>
          Regime de chuvas
        </strong>

        <p>
          {provincia.chuvas}
        </p>
      </div>

      <div className="clima-provincia-box">
        <strong>
          Relação com a agricultura
        </strong>

        <p>
          {provincia.agricultura}
        </p>
      </div>

      <div className="clima-provincia-box">
        <strong>
          Principais riscos climáticos
        </strong>

        <p>
          {provincia.risco}
        </p>
      </div>

      <h3>
        Leitura correta dos dados
      </h3>

      <p>
        Esta ficha apresenta uma caracterização
        qualitativa. Valores de precipitação,
        temperatura ou outros indicadores
        provinciais devem ser apresentados
        separadamente, sempre acompanhados pela
        fonte, período, unidade e escala espacial.
      </p>
    </>
  );
}

/* =========================================================
   COR DO MAPA
   Atenção: é apenas visualização da camada.
   Não representa valores meteorológicos reais.
   ========================================================= */

function obterCorMapa(
  variavel: string
) {
  if (
    variavel ===
    "temperatura"
  ) {
    return "#f59e0b";
  }

  if (
    variavel ===
    "risco"
  ) {
    return "#b45309";
  }

  return "#3b82f6";
}

/* =========================================================
   NOME DA VARIÁVEL
   ========================================================= */

function nomeVariavelMapa(
  variavel: string
) {
  if (
    variavel ===
    "temperatura"
  ) {
    return "Temperatura";
  }

  if (
    variavel ===
    "risco"
  ) {
    return "Risco climático";
  }

  return "Precipitação";
}