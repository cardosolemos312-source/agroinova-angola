
"use client";

import { useEffect, useMemo, useState } from "react";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  useMap,
} from "react-leaflet";
import type { Feature, FeatureCollection } from "geojson";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

type Props = {
  nome: string;
  slug: string;
};

type GeoData = FeatureCollection;

function normalizar(
  valor: string | number | null | undefined
): string {
  return String(valor ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

function AjustarMapa({ dados }: { dados: GeoData }) {
  const mapa = useMap();

  useEffect(() => {
    const camada = L.geoJSON(dados as never);
    const limites = camada.getBounds();

    if (limites.isValid()) {
      mapa.fitBounds(limites, {
        padding: [18, 18],
        maxZoom: 9,
        animate: false,
      });
    }
  }, [dados, mapa]);

  return null;
}

export default function MapaProvinciaClient({
  nome,
  slug,
}: Props) {
  const [geoData, setGeoData] = useState<GeoData | null>(null);
  const [erro, setErro] = useState("");

  useEffect(() => {
    let ativo = true;

    async function carregarMapa() {
      try {
        const resposta = await fetch("/Angola_Provincias.geojson");

        if (!resposta.ok) {
          throw new Error(
            `Não foi possível carregar o GeoJSON (${resposta.status}).`
          );
        }

        const dados = (await resposta.json()) as GeoData;

        if (
          !dados ||
          !Array.isArray(dados.features)
        ) {
          throw new Error("O ficheiro GeoJSON não tem uma lista de features válida.");
        }

        if (ativo) {
          setGeoData(dados);
          setErro("");
        }
      } catch (error) {
        if (ativo) {
          setErro(
            error instanceof Error
              ? error.message
              : "Não foi possível carregar o mapa provincial."
          );
        }
      }
    }

    void carregarMapa();

    return () => {
      ativo = false;
    };
  }, []);

  const provinciaSelecionada = useMemo(() => {
    if (!geoData) return null;

    const procurados = new Set([
      normalizar(nome),
      normalizar(slug),
    ]);

    const features = geoData.features.filter(
      (feature: Feature) => {
        const propriedades = feature.properties ?? {};

        const nomesPossiveis = [
          propriedades.PROVINCIA,
          propriedades.provincia,
          propriedades.Provincia,
          propriedades.NAME_1,
          propriedades.NAME,
          propriedades.name,
          propriedades.NOME,
          propriedades.nome,
        ];

        return nomesPossiveis.some((valor) => {
          if (
            typeof valor !== "string" &&
            typeof valor !== "number"
          ) {
            return false;
          }

          return procurados.has(normalizar(valor));
        });
      }
    );

    if (features.length === 0) return null;

    return {
      type: "FeatureCollection" as const,
      features,
    };
  }, [geoData, nome, slug]);

  if (erro) {
    return (
      <div style={estilos.aviso}>
        <h3 style={estilos.tituloAviso}>
          Mapa indisponível
        </h3>

        <p style={estilos.texto}>
          {erro}
        </p>

        <p style={{ ...estilos.texto, marginTop: 8 }}>
          Confirma se o ficheiro
          {" "}public/Angola_Provincias.geojson{" "}
          existe e contém dados geográficos válidos.
        </p>
      </div>
    );
  }

  if (!geoData) {
    return (
      <div style={estilos.carregamento}>
        <div style={estilos.pontoVerde} />

        <p style={estilos.texto}>
          A carregar o mapa de {nome}...
        </p>
      </div>
    );
  }

  if (!provinciaSelecionada) {
    return (
      <div style={estilos.aviso}>
        <h3 style={estilos.tituloAviso}>
          Não foi possível localizar {nome}
        </h3>

        <p style={estilos.texto}>
          O ficheiro foi carregado, mas nenhuma das suas
          propriedades geográficas corresponde ao nome
          da província ou ao identificador da página.
        </p>

        <p style={{ ...estilos.texto, marginTop: 8 }}>
          Província recebida: {nome}. Identificador: {slug}.
        </p>
      </div>
    );
  }

  return (
    <section style={estilos.seccao}>
      <div style={estilos.cabecalho}>
        <div style={estilos.identidade}>
          <div style={estilos.marcador}>
            <svg
              viewBox="0 0 24 24"
              width="25"
              height="25"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 6.5 8.5 3l7 3.5L21 3v14.5L15.5 21l-7-3.5L3 21z" />
              <path d="M8.5 3v14.5M15.5 6.5V21" />
            </svg>
          </div>

          <div>
            <span style={estilos.sobretitulo}>
              AGROINOVA ANGOLA
            </span>

            <h2 style={estilos.titulo}>{nome}</h2>

            <p style={estilos.subtitulo}>
              Território, recursos e potencial produtivo
            </p>
          </div>
        </div>

        <div style={estilos.estado}>
          <span style={estilos.estadoPonto} />
          Mapa carregado
        </div>
      </div>

      <div style={estilos.resumo}>
        <div style={estilos.resumoIcone}>
          <svg
            viewBox="0 0 24 24"
            width="21"
            height="21"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" />
            <circle cx="12" cy="9" r="2.3" />
          </svg>
        </div>

        <div style={{ flex: 1 }}>
          <strong style={estilos.resumoTitulo}>
            Explorar {nome}
          </strong>

          <p style={estilos.resumoTexto}>
            Consulta os limites geográficos da província.
            A distribuição municipal da produção agrícola
            e pecuária exige cartografia municipal e dados
            estatísticos verificáveis.
          </p>
        </div>
      </div>

      <div style={estilos.cartaoMapa}>
        <div style={estilos.topoMapa}>
          <div>
            <h3 style={estilos.tituloMapa}>
              Localização geográfica
            </h3>

            <p style={estilos.textoMapa}>
              Limites provinciais sobre o mapa de Angola
            </p>
          </div>

          <span style={estilos.etiquetaMapa}>
            OpenStreetMap
          </span>
        </div>

        <div style={estilos.mapa}>
          <MapContainer
            key={slug}
            center={[-12.5, 17.5]}
            zoom={6}
            style={{
              width: "100%",
              height: "100%",
              background: "#edf5ee",
            }}
            scrollWheelZoom
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <GeoJSON
              key={slug}
              data={provinciaSelecionada as never}
              style={{
                color: "#496747",
                weight: 2.5,
                opacity: 1,
                fillColor: "#91ad78",
                fillOpacity: 0.45,
              }}
            />

            <AjustarMapa dados={provinciaSelecionada} />
          </MapContainer>
        </div>

        <div style={estilos.legenda}>
          <span style={estilos.amostraLimite} />
          <span>Limite da província</span>

          <span style={estilos.amostraInterior} />
          <span>Área provincial</span>
        </div>
      </div>

      <div style={estilos.nota}>
        <span style={estilos.notaBarra} />

        <p style={estilos.notaTexto}>
          <strong>Nota:</strong> este mapa representa
          os limites presentes no ficheiro geográfico
          da plataforma. Não representa, por si só,
          a distribuição municipal da produção agrícola
          ou pecuária.
        </p>
      </div>
    </section>
  );
}

const estilos: Record<string, React.CSSProperties> = {
  seccao: {
    width: "100%",
    maxWidth: 1100,
    margin: "22px auto 30px",
    color: "#263326",
  },

  cabecalho: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 16,
    padding: "20px 22px",
    background: "linear-gradient(125deg, #e8efdf 0%, #ffffff 80%)",
    border: "1px solid #d4dfca",
    borderRadius: 16,
    marginBottom: 16,
  },

  identidade: {
    display: "flex",
    alignItems: "center",
    gap: 14,
  },

  marcador: {
    width: 52,
    height: 52,
    flexShrink: 0,
    borderRadius: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#496747",
    color: "#ffffff",
    boxShadow: "0 5px 12px rgba(73, 103, 71, 0.18)",
  },

  sobretitulo: {
    display: "block",
    color: "#496747",
    fontSize: 10,
    fontWeight: 800,
    letterSpacing: 1.5,
    marginBottom: 4,
  },

  titulo: {
    fontSize: 25,
    lineHeight: 1.2,
    margin: 0,
    fontWeight: 800,
    color: "#354d34",
  },

  subtitulo: {
    margin: "5px 0 0",
    color: "#687566",
    fontSize: 13,
  },

  estado: {
    display: "inline-flex",
    alignItems: "center",
    gap: 7,
    border: "1px solid #cbd9c0",
    background: "#ffffff",
    color: "#496747",
    borderRadius: 999,
    padding: "8px 12px",
    fontSize: 11,
    fontWeight: 700,
  },

  estadoPonto: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: "#718d5e",
  },

  resumo: {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
    padding: "16px 18px",
    borderRadius: 13,
    border: "1px solid #e0e5d9",
    background: "#ffffff",
    marginBottom: 16,
  },

  resumoIcone: {
    width: 40,
    height: 40,
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 11,
    background: "#edf2e7",
    color: "#496747",
  },

  resumoTitulo: {
    display: "block",
    color: "#354d34",
    fontSize: 14,
    marginBottom: 4,
  },

  resumoTexto: {
    margin: 0,
    color: "#687566",
    fontSize: 12,
    lineHeight: 1.7,
  },

  cartaoMapa: {
    overflow: "hidden",
    borderRadius: 16,
    border: "1px solid #dce3d6",
    background: "#ffffff",
    boxShadow: "0 5px 18px rgba(53, 77, 52, 0.07)",
  },

  topoMapa: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 10,
    padding: "15px 18px",
    borderBottom: "1px solid #e5eadd",
  },

  tituloMapa: {
    margin: 0,
    fontSize: 15,
    color: "#354d34",
    fontWeight: 800,
  },

  textoMapa: {
    margin: "4px 0 0",
    fontSize: 11,
    color: "#687566",
  },

  etiquetaMapa: {
    background: "#edf2e7",
    color: "#496747",
    border: "1px solid #dce5d3",
    borderRadius: 7,
    padding: "6px 9px",
    fontSize: 10,
    fontWeight: 700,
  },

  mapa: {
    width: "100%",
    height: 340,
    overflow: "hidden",
    background: "#edf5ee",
  },

  legenda: {
    display: "flex",
    alignItems: "center",
    gap: 7,
    flexWrap: "wrap",
    padding: "11px 17px",
    color: "#687566",
    fontSize: 11,
    borderTop: "1px solid #e5eadd",
  },

  amostraLimite: {
    width: 18,
    height: 3,
    borderRadius: 2,
    background: "#496747",
  },

  amostraInterior: {
    width: 12,
    height: 12,
    borderRadius: 3,
    background: "#91ad78",
    border: "1px solid #718d5e",
    marginLeft: 10,
  },

  nota: {
    display: "flex",
    gap: 11,
    alignItems: "stretch",
    marginTop: 13,
    padding: "12px 14px",
    borderRadius: 10,
    background: "#f7f7f1",
    border: "1px solid #e0e5d9",
  },

  notaBarra: {
    width: 3,
    flexShrink: 0,
    borderRadius: 4,
    background: "#718d5e",
  },

  notaTexto: {
    margin: 0,
    color: "#687566",
    fontSize: 11,
    lineHeight: 1.7,
  },

  carregamento: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: 20,
    borderRadius: 12,
    background: "#edf2e7",
    border: "1px solid #dce5d3",
  },

  pontoVerde: {
    width: 9,
    height: 9,
    borderRadius: "50%",
    background: "#718d5e",
  },

  aviso: {
    padding: 20,
    margin: "20px 0",
    borderRadius: 12,
    background: "#f8f4e9",
    border: "1px solid #e5d8b8",
  },

  tituloAviso: {
    color: "#765c32",
    fontSize: 16,
    margin: "0 0 8px",
  },

  texto: {
    margin: 0,
    color: "#687566",
    fontSize: 13,
    lineHeight: 1.7,
  },
};