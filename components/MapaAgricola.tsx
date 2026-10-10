
"use client";

import "leaflet/dist/leaflet.css";
import MapaModais from "./MapaModais";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  GeoJSON,
  MapContainer,
  TileLayer,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import type { Feature, FeatureCollection, Geometry } from "geojson";

import { provinciasAngola } from "../data/provincias-angola";

type Tema = {
  nome: string;
  sigla: string;
  descricao: string;
  cor: string;
};

type TipoModal =
  | "provincias"
  | "municipios"
  | "areas"
  | "pesca"
  | "sobre";

type Provincia = {
  slug: string;
  nome: string;
  dadosICAPP2024_2025: boolean;
  observacao?: string;
};

type FeatureAngola = Feature<Geometry, Record<string, unknown>>;

const TEMAS: Tema[] = [
  {
    nome: "Agricultura",
    sigla: "AG",
    descricao: "Culturas e produção agrícola",
    cor: "#22c55e",
  },
  {
    nome: "Pecuária",
    sigla: "PE",
    descricao: "Criação e produção animal",
    cor: "#f59e0b",
  },
  {
    nome: "Florestas",
    sigla: "FL",
    descricao: "Florestas e conservação",
    cor: "#16a34a",
  },
  {
    nome: "Solos",
    sigla: "SO",
    descricao: "Solos e aptidão agrícola",
    cor: "#a16207",
  },
  {
    nome: "Pesca",
    sigla: "PS",
    descricao: "Pesca e aquicultura",
    cor: "#0284c7",
  },
  {
    nome: "Água",
    sigla: "AGU",
    descricao: "Recursos hídricos",
    cor: "#38bdf8",
  },
  {
    nome: "Investigação",
    sigla: "IN",
    descricao: "Tecnologia e investigação",
    cor: "#a78bfa",
  },
];

function normalizar(valor: string) {
  return valor
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function nomeFeature(feature: FeatureAngola) {
  const propriedades = feature.properties ?? {};

  const chaves = [
    "name",
    "NAME",
    "name_pt",
    "NAME_1",
    "NAME_1_PT",
    "provincia",
    "Provincia",
    "PROVINCIA",
    "province",
    "PROVINCE",
    "ADM1_PT",
    "shapeName",
    "admin1Name",
  ];

  for (const chave of chaves) {
    const valor = propriedades[chave];

    if (typeof valor === "string" && valor.trim()) {
      return valor.trim();
    }
  }

  return "";
}

function localizarProvincia(nome: string): Provincia | undefined {
  const chave = normalizar(nome);

  const equivalencias: Record<string, string> = {
    bie: "bie",
    uije: "uige",
    uige: "uige",
    huila: "huila",
    huambo: "huambo",
    "kvanza-norte": "cuanza-norte",
    "kvanza-sul": "cuanza-sul",
    "cuando-cubango": "cuando",
    "moxico-east": "moxico-leste",
  };

  const slug = equivalencias[chave] ?? chave;

  return provinciasAngola.find((p) => {
    const provincia = p as Provincia;

    return (
      provincia.slug === slug ||
      normalizar(provincia.nome) === chave
    );
  }) as Provincia | undefined;
}

function AjustarMapa({
  dados,
}: {
  dados: FeatureCollection | null;
}) {
  const mapa = useMap();

  useEffect(() => {
    if (!dados) return;

    try {
      const camada = L.geoJSON(dados as never);
      const limites = camada.getBounds();

      if (limites.isValid()) {
        mapa.fitBounds(limites, {
          padding: [12, 12],
          maxZoom: 7,
        });
      } else {
        mapa.setView([-12.5, 17.5], 5);
      }
    } catch {
      mapa.setView([-12.5, 17.5], 5);
    }
  }, [dados, mapa]);

  return null;
}

export default function MapaAgricola() {
  const router = useRouter();

  const [dados, setDados] = useState<FeatureCollection | null>(null);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(true);
  const [temaAtivo, setTemaAtivo] = useState("Agricultura");
  const [pesquisa, setPesquisa] = useState("");
  const [selecionada, setSelecionada] = useState<Provincia | null>(null);
  const [mostrarTodas, setMostrarTodas] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);
  const [tipoModal, setTipoModal] = useState<TipoModal>("provincias");

  const abrirModal = useCallback((tipo: TipoModal) => {
    setTipoModal(tipo);
    setModalAberto(true);
  }, []);

  const abrirModalTema = useCallback(
    (nomeTema: string) => {
      setTemaAtivo(nomeTema);
      abrirModal(nomeTema === "Pesca" ? "pesca" : "areas");
    },
    [abrirModal],
  );

  useEffect(() => {
    let ativo = true;

    async function carregar() {
      try {
        const resposta = await fetch("/Angola_Provincias.geojson");

        if (!resposta.ok) {
          throw new Error(
            "Não foi possível carregar o mapa de Angola.",
          );
        }

        const geojson = (await resposta.json()) as FeatureCollection;

        if (!geojson.features?.length) {
          throw new Error(
            "O GeoJSON não contém limites provinciais.",
          );
        }

        if (ativo) {
          setDados(geojson);
          setErro("");
        }
      } catch (e) {
        if (ativo) {
          setErro(
            e instanceof Error
              ? e.message
              : "Erro ao carregar o mapa.",
          );
        }
      } finally {
        if (ativo) {
          setCarregando(false);
        }
      }
    }

    void carregar();

    return () => {
      ativo = false;
    };
  }, []);

  const tema = TEMAS.find((t) => t.nome === temaAtivo) ?? TEMAS[0];

  const resultadosPesquisa = useMemo(() => {
    const termo = normalizar(pesquisa);

    if (!termo) return [];

    return provinciasAngola.filter((p) =>
      normalizar(p.nome).includes(termo),
    );
  }, [pesquisa]);

  const selecionar = useCallback((p: Provincia) => {
    setSelecionada(p);
  }, []);

  const estilo = useCallback(
    (feature?: Feature) => {
      const provincia = feature
        ? localizarProvincia(
            nomeFeature(feature as FeatureAngola),
          )
        : undefined;

      const ativa = provincia?.slug === selecionada?.slug;

      return {
        color: ativa ? "#facc15" : "#ffffff",
        weight: ativa ? 4 : 1.8,
        opacity: 1,
        fillColor: ativa ? "#22c55e" : "#15803d",
        fillOpacity: ativa ? 0.48 : 0.2,
      };
    },
    [selecionada],
  );

  const eventos = useCallback(
    (feature: Feature, camada: L.Layer) => {
      const nome = nomeFeature(feature as FeatureAngola);
      const provincia = localizarProvincia(nome);

      camada.bindTooltip(provincia?.nome ?? nome, {
        sticky: true,
        className: "agro-tooltip",
      });

      if (provincia) {
        camada.on("click", () => selecionar(provincia));

        camada.on("mouseover", () => {
          if (camada instanceof L.Path) {
            camada.setStyle({
              color: "#facc15",
              weight: 3,
              fillOpacity: 0.48,
            });

            camada.bringToFront();
          }
        });

        camada.on("mouseout", () => {
          if (camada instanceof L.Path) {
            camada.setStyle(estilo(feature));
          }
        });
      }
    },
    [estilo, selecionar],
  );

  const abrirPaginaProvincia = () => {
    if (selecionada) {
      router.push(`/mapa/${selecionada.slug}`);
    }
  };

  const indicadores = [
    {
      sigla: "AG",
      titulo: "Produção agrícola",
      tema: "Agricultura",
    },
    {
      sigla: "PE",
      titulo: "Efetivo pecuário",
      tema: "Pecuária",
    },
    {
      sigla: "FL",
      titulo: "Florestas e conservação",
      tema: "Florestas",
    },
    {
      sigla: "PS",
      titulo: "Pesca e aquicultura",
      tema: "Pesca",
    },
    {
      sigla: "AGU",
      titulo: "Recursos hídricos",
      tema: "Água",
    },
    {
      sigla: "SO",
      titulo: "Solos e aptidão",
      tema: "Solos",
    },
  ];

  return (
    <main className="agro-dashboard">
      <style jsx global>{`
        .agro-dashboard {
          min-height: 100vh;
          background: #f5f8f6;
          color: #17221b;
          font-family: Arial, Helvetica, sans-serif;
        }

        .agro-dashboard * {
          box-sizing: border-box;
        }

        .agro-topo {
          min-height: 68px;
          padding: 10px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          background: linear-gradient(105deg, #062e25, #031d19);
          color: white;
          border-bottom: 1px solid #ffffff24;
        }

        .agro-marca {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 23px;
          font-weight: 900;
          letter-spacing: 0.3px;
        }

        .agro-folha {
          width: 42px;
          height: 34px;
          display: grid;
          place-items: center;
          color: #d1fae5;
          background: linear-gradient(135deg, #86efac, #15803d);
          border-radius: 100% 0 100% 0;
          transform: skew(-8deg);
        }

        .agro-menu {
          display: flex;
          align-items: center;
          gap: 7px;
          flex-wrap: wrap;
        }

        .agro-menu button {
          border: 0;
          background: transparent;
          color: #e2e8f0;
          padding: 13px 15px;
          border-radius: 10px;
          font-size: 13px;
          cursor: pointer;
        }

        .agro-menu button.ativo {
          color: #bbf7d0;
          background: #14532d;
          box-shadow: inset 0 -3px #22c55e;
        }

        .agro-corpo {
          display: grid;
          grid-template-columns: 280px minmax(0, 1fr) 390px;
          min-height: calc(100vh - 68px);
        }

        .agro-esquerda {
          background: linear-gradient(180deg, #062a25, #031d1b);
          color: white;
          padding: 22px 25px;
          border-right: 1px solid #31534b;
        }

        .agro-esquerda h3 {
          margin: 0 0 7px;
          font-size: 16px;
        }

        .agro-subtexto {
          color: #b8cbc5;
          font-size: 12px;
          line-height: 1.6;
          margin: 0 0 15px;
        }

        .agro-temas {
          display: grid;
          gap: 6px;
        }

        .agro-tema {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 9px 10px;
          border: 1px solid #36574f;
          border-radius: 9px;
          background: #ffffff08;
          color: #f8fafc;
          text-align: left;
          font-size: 13px;
          cursor: pointer;
        }

        .agro-tema:hover {
          background: #ffffff13;
        }

        .agro-tema.ativo {
          background: linear-gradient(100deg, #15803d, #166534);
          border-color: #4ade80;
          font-weight: 800;
        }

        .agro-tema-sigla {
          width: 31px;
          height: 31px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border-radius: 50%;
          border: 1px solid #5e8a79;
          font-size: 9px;
          font-weight: 900;
        }

        .agro-pesquisa {
          width: 100%;
          padding: 12px;
          border: 1px solid #72958a;
          border-radius: 8px;
          background: #062b27;
          color: white;
          outline-color: #4ade80;
          font-size: 12px;
        }

        .agro-pesquisa::placeholder {
          color: #a8beb6;
        }

        .agro-resultados {
          display: grid;
          gap: 4px;
          margin-top: 7px;
          max-height: 180px;
          overflow-y: auto;
        }

        .agro-resultados button {
          padding: 8px 10px;
          text-align: left;
          border: 1px solid #31574d;
          border-radius: 6px;
          background: #0b382e;
          color: white;
          cursor: pointer;
        }

        .agro-resultados small {
          padding: 8px;
          color: #e2e8f0;
        }

        .agro-legenda {
          display: grid;
          gap: 12px;
          font-size: 12px;
          color: #f1f5f9;
        }

        .agro-legenda-item {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .agro-legenda-cor {
          width: 15px;
          height: 15px;
          border-radius: 4px;
          border: 1px solid #ffffff80;
        }

        .agro-ajuda {
          margin-top: 25px;
          padding: 13px;
          border: 1px solid #5d8b7e;
          border-radius: 10px;
          color: #e2f3eb;
          font-size: 12px;
          line-height: 1.65;
          background: #ffffff08;
        }

        .agro-centro {
          min-width: 0;
          display: flex;
          flex-direction: column;
          background: #0a3026;
        }

        .agro-mapa {
          min-height: 550px;
          height: calc(100vh - 215px);
          max-height: 900px;
          position: relative;
          overflow: hidden;
        }

        .agro-mapa .leaflet-container {
          width: 100%;
          height: 100%;
          background: #0b3b2c;
          font-family: Arial, sans-serif;
        }

        .agro-mapa .leaflet-control-zoom a {
          color: #14532d;
        }

        .agro-tooltip {
          border: 1px solid #bbf7d0;
          border-radius: 7px;
          color: #14532d;
          font-weight: 800;
        }

        .agro-mapa-cabecalho {
          position: absolute;
          z-index: 500;
          top: 15px;
          right: 15px;
          padding: 13px;
          width: 190px;
          border: 1px solid #e2e8f0;
          border-radius: 11px;
          background: #ffffffed;
          box-shadow: 0 5px 18px #00000020;
          font-size: 12px;
        }

        .agro-cartoes {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 8px;
          padding: 12px;
          background: #fff;
          border-top: 1px solid #dbe5dd;
        }

        .agro-cartao {
          min-width: 0;
          padding: 12px 9px;
          border: 1px solid #e2e8f0;
          border-radius: 9px;
          background: #fff;
          text-align: left;
          cursor: pointer;
          transition: 0.15s ease;
        }

        .agro-cartao:hover {
          border-color: #86b99a;
          background: #f0fdf4;
          transform: translateY(-1px);
        }

        .agro-cartao.ativo {
          border-color: #16a34a;
          box-shadow: inset 0 0 0 1px #16a34a;
          background: #f0fdf4;
        }

        .agro-cartao-sigla {
          display: block;
          margin-bottom: 9px;
          font-size: 12px;
          font-weight: 900;
        }

        .agro-cartao strong {
          display: block;
          font-size: 12px;
          margin-bottom: 5px;
        }

        .agro-cartao small {
          display: block;
          color: #64748b;
          font-size: 10px;
          line-height: 1.5;
        }

        .agro-direita {
          min-width: 0;
          background: #fff;
          padding: 22px 19px;
          border-left: 1px solid #dbe5dd;
          overflow-y: auto;
        }

        .agro-voltar {
          border: 0;
          padding: 0;
          background: transparent;
          color: #475569;
          font-size: 12px;
          cursor: pointer;
          margin-bottom: 15px;
        }

        .agro-titulo-provincia {
          margin: 0;
          font-size: 26px;
          color: #102c23;
        }

        .agro-etiqueta {
          display: inline-block;
          margin-left: 8px;
          padding: 5px 8px;
          border-radius: 6px;
          background: #dcfce7;
          color: #166534;
          font-size: 10px;
          font-weight: 800;
          vertical-align: middle;
        }

        .agro-foto {
          margin-top: 15px;
          min-height: 135px;
          border-radius: 8px;
          overflow: hidden;
          background: linear-gradient(
            145deg,
            #164e35,
            #4d7c43 45%,
            #c1b77b 75%,
            #e2e8c9
          );
          display: flex;
          align-items: end;
          padding: 14px;
          color: white;
          font-weight: 800;
          text-shadow: 0 2px 8px #000;
        }

        .agro-resumo-temas {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          margin: 14px 0;
          padding-bottom: 14px;
          border-bottom: 1px solid #e2e8f0;
        }

        .agro-resumo-tema {
          border: 0;
          border-right: 1px solid #e2e8f0;
          background: white;
          text-align: center;
          padding: 7px 2px;
          cursor: pointer;
          color: #334155;
          font-size: 10px;
        }

        .agro-resumo-tema:last-child {
          border-right: 0;
        }

        .agro-resumo-tema b {
          display: block;
          margin-bottom: 7px;
          font-size: 11px;
        }

        .agro-separador {
          margin: 17px 0;
          padding-top: 15px;
          border-top: 1px solid #e2e8f0;
        }

        .agro-separador h4 {
          margin: 0 0 11px;
          font-size: 13px;
        }

        .agro-indicador {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          padding: 11px 0;
          border: 0;
          border-bottom: 1px solid #edf2f7;
          background: white;
          text-align: left;
          color: #334155;
          font-size: 12px;
          cursor: pointer;
        }

        .agro-indicador span:last-child {
          color: #166534;
          font-size: 11px;
          white-space: nowrap;
        }

        .agro-fonte {
          padding: 14px;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          background: #f8fafc;
          font-size: 11px;
          line-height: 1.7;
          color: #475569;
        }

        @media (max-width: 1250px) {
          .agro-corpo {
            grid-template-columns: 235px minmax(0, 1fr);
          }

          .agro-direita {
            grid-column: 1 / -1;
            border-left: 0;
            border-top: 1px solid #dbe5dd;
          }

          .agro-esquerda {
            padding: 18px;
          }
        }

        @media (max-width: 720px) {
          .agro-topo {
            padding: 13px;
            align-items: flex-start;
            flex-direction: column;
          }

          .agro-marca {
            font-size: 20px;
          }

          .agro-corpo {
            display: flex;
            flex-direction: column;
          }

          .agro-esquerda,
          .agro-centro,
          .agro-direita {
            width: 100%;
          }

          .agro-esquerda {
            order: 2;
          }

          .agro-centro {
            order: 1;
          }

          .agro-direita {
            order: 3;
          }

          .agro-mapa {
            min-height: 430px;
            height: 65vh;
          }

          .agro-cartoes {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .agro-menu {
            gap: 2px;
          }

          .agro-menu button {
            padding: 9px;
          }
        }
      `}</style>

      <header className="agro-topo">
        <div className="agro-marca">
          <span className="agro-folha">A</span>

          <span>
            AGROINOVA
            <small
              style={{
                display: "block",
                fontSize: 11,
                letterSpacing: 4,
                textAlign: "center",
              }}
            >
              ANGOLA
            </small>
          </span>
        </div>

        <nav className="agro-menu" aria-label="Navegação principal">
          <button type="button" onClick={() => router.push("/")}>
            Início
          </button>

          <button type="button" className="ativo">
            Mapa Agrícola
          </button>

          
<button
  type="button"
  onClick={() => abrirModal("provincias")}
>
  Províncias
</button>
          <button type="button" onClick={() => router.push("/dados")}>
            Dados
          </button>

          <button
            type="button"
            onClick={() => abrirModal("sobre")}
          >
            Sobre
          </button>
        </nav>

        <div
          style={{
            fontSize: 11,
            fontStyle: "italic",
            lineHeight: 1.4,
          }}
        >
          Mais produção.
          <br />
          Mais alimentos.
          <br />
          Uma Angola melhor.
        </div>
      </header>

      <div className="agro-corpo">
        <aside className="agro-esquerda">
          <h3>Camadas Temáticas</h3>

          <p className="agro-subtexto">
            Selecione o que deseja consultar:
          </p>

          <div className="agro-temas">
            {TEMAS.map((item) => (
              <button
                type="button"
                key={item.nome}
                className={`agro-tema ${
                  temaAtivo === item.nome ? "ativo" : ""
                }`}
                onClick={() => setTemaAtivo(item.nome)}
              >
                <span
                  className="agro-tema-sigla"
                  style={{ color: item.cor }}
                >
                  {item.sigla}
                </span>

                {item.nome}
              </button>
            ))}
          </div>

          <div style={{ marginTop: 27 }}>
            <h3>Procurar</h3>

            <input
              className="agro-pesquisa"
              value={pesquisa}
              onChange={(e) => setPesquisa(e.target.value)}
              placeholder="Pesquisar província..."
              aria-label="Pesquisar província"
            />

            {pesquisa.trim() && (
              <div className="agro-resultados">
                {resultadosPesquisa.map((p) => (
                  <button
                    type="button"
                    key={p.slug}
                    onClick={() => {
                      selecionar(p as Provincia);
                      setPesquisa("");
                    }}
                  >
                    {p.nome}
                  </button>
                ))}

                {resultadosPesquisa.length === 0 && (
                  <small>Nenhuma província encontrada.</small>
                )}
              </div>
            )}
          </div>

          <div style={{ marginTop: 25 }}>
            <h3>Legenda</h3>

            <div className="agro-legenda">
              {TEMAS.map((item) => (
                <div className="agro-legenda-item" key={item.nome}>
                  <span
                    className="agro-legenda-cor"
                    style={{ background: item.cor }}
                  />
                  {item.nome}
                </div>
              ))}

              <div className="agro-legenda-item">
                <span
                  className="agro-legenda-cor"
                  style={{ background: "#15803d" }}
                />
                Limites provinciais
              </div>
            </div>
          </div>

          <div className="agro-ajuda">
            Clique numa província no mapa para consultar a informação
            territorial, os indicadores e as fontes disponíveis.
          </div>
        </aside>

        <section className="agro-centro">
          <div className="agro-mapa">
            {carregando && (
              <div
                style={{
                  position: "absolute",
                  zIndex: 1000,
                  inset: 0,
                  display: "grid",
                  placeItems: "center",
                  background: "#063b2b",
                  color: "white",
                  fontWeight: 800,
                }}
              >
                A carregar o mapa de Angola...
              </div>
            )}

            {erro && (
              <div
                role="alert"
                style={{
                  position: "absolute",
                  zIndex: 1000,
                  inset: 0,
                  padding: 25,
                  background: "#fff",
                  color: "#991b1b",
                }}
              >
                <strong>Erro ao carregar o mapa</strong>
                <p>{erro}</p>
                Confirme se existe public/Angola_Provincias.geojson.
              </div>
            )}

            {dados && !erro && (
              <MapContainer
                center={[-12.5, 17.5]}
                zoom={5}
                minZoom={4}
                maxZoom={12}
                scrollWheelZoom
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  attribution='Tiles &copy; Esri — Sources: Esri, Maxar, Earthstar Geographics'
                  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                />

                <AjustarMapa dados={dados} />

                <GeoJSON
                  key={`${temaAtivo}-${selecionada?.slug ?? "todas"}`}
                  data={dados}
                  style={estilo}
                  onEachFeature={eventos}
                />
              </MapContainer>
            )}

            <div className="agro-mapa-cabecalho">
              <label
                htmlFor="ver-por"
                style={{ display: "block", marginBottom: 8 }}
              >
                Ver por:
              </label>

              <select
                id="ver-por"
                value={temaAtivo}
                onChange={(e) => setTemaAtivo(e.target.value)}
                style={{
                  width: "100%",
                  padding: 9,
                  border: "1px solid #cbd5e1",
                  borderRadius: 7,
                  background: "white",
                }}
              >
                {TEMAS.map((item) => (
                  <option key={item.nome} value={item.nome}>
                    {item.nome}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={() => setMostrarTodas((v) => !v)}
                style={{
                  width: "100%",
                  marginTop: 8,
                  padding: 9,
                  border: "1px solid #cbd5e1",
                  borderRadius: 7,
                  background: "white",
                  color: "#14532d",
                  cursor: "pointer",
                }}
              >
                {mostrarTodas ? "Ocultar lista" : "Mostrar províncias"}
              </button>

              {mostrarTodas && (
                <div
                  style={{
                    marginTop: 8,
                    maxHeight: 180,
                    overflowY: "auto",
                  }}
                >
                  {provinciasAngola.map((p) => (
                    <button
                      key={p.slug}
                      type="button"
                      onClick={() => selecionar(p as Provincia)}
                      style={{
                        width: "100%",
                        padding: 7,
                        border: 0,
                        borderBottom: "1px solid #e2e8f0",
                        background: "white",
                        textAlign: "left",
                        cursor: "pointer",
                      }}
                    >
                      {p.nome}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="agro-cartoes">
            {TEMAS.slice(0, 6).map((item) => (
              <button
                type="button"
                key={item.nome}
                className={`agro-cartao ${
                  temaAtivo === item.nome ? "ativo" : ""
                }`}
                onClick={() => setTemaAtivo(item.nome)}
              >
                <span
                  className="agro-cartao-sigla"
                  style={{ color: item.cor }}
                >
                  {item.sigla}
                </span>

                <strong>{item.nome}</strong>
                <small>{item.descricao}</small>
              </button>
            ))}
          </div>
        </section>

        <aside className="agro-direita">
          <button
            type="button"
            className="agro-voltar"
            onClick={() => setSelecionada(null)}
          >
            ← &nbsp; Voltar ao mapa
          </button>

          <div>
            <h2 className="agro-titulo-provincia">
              {selecionada?.nome ?? "Angola"}

              <span className="agro-etiqueta">
                {selecionada
                  ? selecionada.dadosICAPP2024_2025
                    ? "Consultar dados"
                    : "Validar território"
                  : "Mapa nacional"}
              </span>
            </h2>

            <p
              style={{
                color: "#64748b",
                fontSize: 12,
                marginTop: 7,
              }}
            >
              {selecionada
                ? `Área temática: ${tema.nome}`
                : "Plataforma Nacional de Investigação, Conhecimento e Inovação Agropecuária"}
            </p>
          </div>

          <div className="agro-foto">
            <span>
              {selecionada?.nome ?? "Angola"} — {tema.nome}
            </span>
          </div>

          <div className="agro-resumo-temas">
            {TEMAS.slice(0, 4).map((item) => (
              <button
                type="button"
                key={item.nome}
                className="agro-resumo-tema"
                onClick={() => abrirModalTema(item.nome)}
              >
                <b style={{ color: item.cor }}>{item.sigla}</b>
                {item.nome}
              </button>
            ))}
          </div>

          <div className="agro-separador">
            <h4>Informação territorial</h4>

            <p
              style={{
                fontSize: 12,
                lineHeight: 1.7,
                color: "#64748b",
              }}
            >
              {selecionada
                ? `Está selecionada a província ${selecionada.nome}. Consulte os indicadores publicados e confirme o período, a unidade e a fonte antes de utilizar os valores.`
                : "Selecione uma província no mapa para abrir a respetiva informação."}
            </p>

            {selecionada?.observacao && (
              <p
                style={{
                  padding: 11,
                  background: "#fffbeb",
                  color: "#92400e",
                  borderRadius: 8,
                  fontSize: 11,
                  lineHeight: 1.7,
                }}
              >
                {selecionada.observacao}
              </p>
            )}

            {selecionada && (
              <>
                <button
type="button"
onClick={() => router.push("/provincias")}
style={{
width: "100%",
marginTop: 8,
padding: 12,
border: 0,
borderRadius: 8,
background: "#166534",
color: "white",
fontWeight: 800,
cursor: "pointer",
}}

>

Abrir página das províncias → </button>


                <button
                  type="button"
                  onClick={() => abrirModal("municipios")}
                  style={{
                    width: "100%",
                    marginTop: 8,
                    padding: 12,
                    border: "1px solid #166534",
                    borderRadius: 8,
                    background: "#f0fdf4",
                    color: "#166534",
                    fontWeight: 800,
                    cursor: "pointer",
                  }}
                >
                  Ver municípios e potencial produtivo →
                </button>
              </>
            )}
          </div>

          <div className="agro-separador">
            <h4>Indicadores principais</h4>

            {indicadores.map((item) => (
              <button
                type="button"
                className="agro-indicador"
                key={item.sigla}
                onClick={() => abrirModalTema(item.tema)}
              >
                <span>
                  <b
                    style={{
                      color: TEMAS.find(
                        (t) => t.nome === item.tema,
                      )?.cor,
                    }}
                  >
                    {item.sigla}
                  </b>
                  &nbsp; {item.titulo}
                </span>

                <span>Ver área →</span>
              </button>
            ))}
          </div>

          <div className="agro-fonte">
            <strong>Informação e fontes</strong>

            <p>
              Base cartográfica: Angola_Provincias.geojson.
              <br />
              Camada de satélite: Esri World Imagery.
            </p>

            <p>
              ICAPP 2024/2025: os dados devem ser consultados na fonte
              original. Não se atribuem valores de outras províncias
              ou períodos sem validação.
            </p>

            <p>
              Tema atual: <strong>{tema.nome}</strong>.
            </p>
          </div>
        </aside>
      </div>

      <MapaModais
        aberto={modalAberto}
        fechar={() => setModalAberto(false)}
        tipo={tipoModal}
        provincia={selecionada?.nome}
        tema={temaAtivo}
      />
    </main>
  );
}