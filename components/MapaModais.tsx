
"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import type { FeatureCollection } from "geojson";
import "leaflet/dist/leaflet.css";

type Provincia = {
  slug: string;
  nome: string;
  dadosICAPP2024_2025: boolean;
  observacao?: string;
};

type Indicador = {
  titulo: string;
  valor: string;
  unidade: string;
  periodo: string;
  fonte: string;
  descricao: string;
};

type Props = {
  aberto: boolean;
  fechar: () => void;
  tipo: "provincias" | "municipios" | "areas" | "sobre";
  provincia?: Provincia | null;
  tema?: string;
};

const VERDE = "#166534";
const VERDE_ESCURO = "#052e25";

const temas = [
  "Agricultura",
  "Pecuária",
  "Florestas",
  "Pesca",
  "Solos",
  "Água",
  "Infraestruturas",
  "Investigação",
];

const indicadores: Indicador[] = [
  {
    titulo: "Área cultivada",
    valor: "A confirmar na fonte",
    unidade: "ha",
    periodo: "Período da fonte original",
    fonte: "INE / MINAGRIF / ICAPP, conforme o indicador",
    descricao:
      "Área efetivamente cultivada. Deve ser distinguida da superfície agrícola total e da área potencialmente apta para agricultura.",
  },
  {
    titulo: "Área não cultivada",
    valor: "A confirmar na fonte",
    unidade: "ha",
    periodo: "Período da fonte original",
    fonte: "Estatística agrícola oficial necessária",
    descricao:
      "Não deve ser calculada subtraindo áreas de fontes ou períodos diferentes. A área não cultivada só será calculada quando existir uma área total comparável e uma área cultivada correspondente.",
  },
  {
    titulo: "Produção agrícola",
    valor: "A confirmar na fonte",
    unidade: "toneladas ou unidade publicada",
    periodo: "Período da fonte original",
    fonte: "INE / MINAGRIF",
    descricao:
      "Produção por cultura, campanha agrícola e área administrativa efetivamente coberta pelo levantamento.",
  },
  {
    titulo: "Efetivo pecuário",
    valor: "A confirmar na fonte",
    unidade: "cabeças ou unidade publicada",
    periodo: "Período da fonte original",
    fonte: "Estatística pecuária oficial",
    descricao:
      "Efetivo por espécie animal, sem misturar cabeças, produção de carne, leite ou ovos.",
  },
  {
    titulo: "Recursos florestais",
    valor: "A confirmar na fonte",
    unidade: "ha ou unidade publicada",
    periodo: "Período da fonte original",
    fonte: "MINAGRIF / INE / inventário florestal",
    descricao:
      "Cobertura florestal, áreas plantadas e conservação devem ser apresentados separadamente.",
  },
  {
    titulo: "Pesca e aquicultura",
    valor: "A confirmar na fonte",
    unidade: "toneladas ou unidade publicada",
    periodo: "Período da fonte original",
    fonte: "Estatística oficial das pescas",
    descricao:
      "Os dados devem distinguir pesca marítima, pesca continental e aquicultura, quando a fonte apresentar essa separação.",
  },
];

function AjustarMapa({ dados }: { dados: FeatureCollection | null }) {
  const mapa = useMap();

  useEffect(() => {
    if (!dados?.features?.length) return;

    // O mapa nacional só é enquadrado quando existe cartografia disponível.
    import("leaflet").then(({ default: L }) => {
      const camada = L.geoJSON(dados as never);
      const limites = camada.getBounds();

      if (limites.isValid()) {
        mapa.fitBounds(limites, { padding: [15, 15] });
      }
    });
  }, [dados, mapa]);

  return null;
}

export default function MapaModais({
  aberto,
  fechar,
  tipo,
  provincia,
  tema = "Agricultura",
}: Props) {
  const [geojson, setGeojson] = useState<FeatureCollection | null>(null);
  const [erroMapa, setErroMapa] = useState("");
  const [temaModal, setTemaModal] = useState(tema);
  const [pesquisa, setPesquisa] = useState("");
  const [municipioSelecionado, setMunicipioSelecionado] = useState("");

  useEffect(() => {
    if (!aberto || tipo !== "provincias") return;

    let cancelado = false;

    fetch("/Angola_Provincias.geojson")
      .then((r) => {
        if (!r.ok) throw new Error("Falha ao carregar os limites provinciais.");
        return r.json();
      })
      .then((d: FeatureCollection) => {
        if (!cancelado) setGeojson(d);
      })
      .catch(() => {
        if (!cancelado) {
          setErroMapa("Não foi possível carregar a cartografia provincial.");
        }
      });

    return () => {
      cancelado = true;
    };
  }, [aberto, tipo]);

  useEffect(() => {
    if (!aberto) return;

    function tecla(evento: KeyboardEvent) {
      if (evento.key === "Escape") fechar();
    }

    window.addEventListener("keydown", tecla);
    return () => window.removeEventListener("keydown", tecla);
  }, [aberto, fechar]);

  if (!aberto) return null;

  const titulo =
    tipo === "provincias"
      ? "Províncias de Angola"
      : tipo === "municipios"
        ? `Municípios — ${provincia?.nome ?? "Província"}`
        : tipo === "areas"
          ? `Indicadores e áreas — ${provincia?.nome ?? "Angola"}`
          : "AGROINOVA ANGOLA";

  const indicadoresFiltrados = indicadores.filter((item) =>
    `${item.titulo} ${item.descricao}`.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <div
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) fechar();
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        background: "rgba(2, 20, 16, .78)",
        backdropFilter: "blur(5px)",
        display: "grid",
        placeItems: "center",
        padding: 18,
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="mapa-modal-titulo"
        style={{
          width: "min(1180px, 100%)",
          maxHeight: "92vh",
          overflow: "auto",
          borderRadius: 18,
          background: "#fff",
          color: "#17221b",
          boxShadow: "0 25px 80px #0006",
        }}
      >
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            padding: "18px 22px",
            color: "#fff",
            background: `linear-gradient(115deg, ${VERDE_ESCURO}, ${VERDE})`,
            position: "sticky",
            top: 0,
            zIndex: 5,
          }}
        >
          <div>
            <div style={{ fontSize: 10, letterSpacing: 2, color: "#bbf7d0" }}>
              AGROINOVA ANGOLA · OBSERVATÓRIO TERRITORIAL
            </div>
            <h2 id="mapa-modal-titulo" style={{ margin: "5px 0 0", fontSize: 23 }}>
              {titulo}
            </h2>
          </div>

          <button
            type="button"
            onClick={fechar}
            aria-label="Fechar janela"
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              border: "1px solid #ffffff60",
              background: "#ffffff15",
              color: "#fff",
              fontSize: 23,
              cursor: "pointer",
            }}
          >
            ×
          </button>
        </header>

        <div style={{ padding: 22 }}>
          {tipo === "provincias" && (
            <>
              <p style={{ color: "#64748b", lineHeight: 1.7, marginTop: 0 }}>
                Explore as divisões provinciais de Angola. Selecione uma província
                para consultar os indicadores territoriais associados. Os limites
                municipais exigem uma camada cartográfica municipal própria.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0, 1.6fr) minmax(250px, .8fr)",
                  gap: 18,
                }}
              >
                <div
                  style={{
                    minHeight: 460,
                    overflow: "hidden",
                    borderRadius: 12,
                    background: "#0b3b2c",
                  }}
                >
                  {erroMapa ? (
                    <p style={{ padding: 20, color: "#fff" }}>{erroMapa}</p>
                  ) : geojson ? (
                    <MapContainer
                      center={[-12.5, 17.5]}
                      zoom={5}
                      scrollWheelZoom
                      style={{ width: "100%", height: 460 }}
                    >
                      <TileLayer
                        attribution="Tiles © Esri"
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                      />
                      <AjustarMapa dados={geojson} />
                      <GeoJSON
                        data={geojson}
                        style={() => ({
                          color: "#fff",
                          weight: 2,
                          fillColor: "#15803d",
                          fillOpacity: 0.2,
                        })}
                      />
                    </MapContainer>
                  ) : (
                    <div style={{ color: "#fff", padding: 24 }}>
                      A carregar o mapa provincial...
                    </div>
                  )}
                </div>

                <div>
                  <h3 style={{ marginTop: 0 }}>Consultar uma província</h3>
                  <input
                    value={pesquisa}
                    onChange={(e) => setPesquisa(e.target.value)}
                    placeholder="Pesquisar província..."
                    style={{
                      width: "100%",
                      padding: 12,
                      border: "1px solid #cbd5e1",
                      borderRadius: 8,
                      marginBottom: 12,
                    }}
                  />

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                      gap: 7,
                      maxHeight: 360,
                      overflowY: "auto",
                    }}
                  >
                    {provincia && (
                      <button
                        type="button"
                        onClick={() => setPesquisa(provincia.nome)}
                        style={botaoProvincia}
                      >
                        {provincia.nome}
                      </button>
                    )}
                    {[
                      "Bengo", "Benguela", "Bié", "Cabinda", "Cuando",
                      "Cuanza Norte", "Cuanza Sul", "Cubango", "Cunene",
                      "Huambo", "Huíla", "Icolo e Bengo", "Luanda",
                      "Lunda Norte", "Lunda Sul", "Malanje", "Moxico",
                      "Moxico Leste", "Namibe", "Uíge", "Zaire",
                    ]
                      .filter((nome) => nome.toLowerCase().includes(pesquisa.toLowerCase()))
                      .map((nome) => (
                        <button
                          key={nome}
                          type="button"
                          onClick={() => setPesquisa(nome)}
                          style={botaoProvincia}
                        >
                          {nome}
                        </button>
                      ))}
                  </div>

                  <div style={caixaInformacao}>
                    <strong>Nota sobre os dados</strong>
                    <p style={{ fontSize: 12, lineHeight: 1.7, marginBottom: 0 }}>
                      Os indicadores históricos devem conservar a divisão
                      administrativa, a unidade e o período da fonte original.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}

          {tipo === "municipios" && (
            <>
              <p style={{ color: "#64748b", lineHeight: 1.7, marginTop: 0 }}>
                O mapa municipal deverá permitir selecionar cada município,
                comparar o seu potencial e consultar a produção por atividade.
                Para desenhar os limites reais, é necessário carregar um ficheiro
                GeoJSON dos municípios — o ficheiro provincial atual não contém
                esses limites.
              </p>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
                gap: 12,
              }}>
                {temas.map((nome) => (
                  <button
                    key={nome}
                    type="button"
                    onClick={() => setTemaModal(nome)}
                    style={{
                      padding: 17,
                      borderRadius: 12,
                      border: temaModal === nome
                        ? "2px solid #16a34a"
                        : "1px solid #dbe5dd",
                      background: temaModal === nome ? "#f0fdf4" : "#fff",
                      textAlign: "left",
                      cursor: "pointer",
                    }}
                  >
                    <strong>{nome}</strong>
                    <p style={{
                      marginBottom: 0,
                      color: "#64748b",
                      fontSize: 12,
                      lineHeight: 1.6,
                    }}>
                      Consultar potencial, produção e limitações quando existirem
                      dados municipais verificáveis.
                    </p>
                  </button>
                ))}
              </div>

              <div style={caixaInformacao}>
                <strong>Camada selecionada: {temaModal}</strong>
                <p style={{ fontSize: 12, lineHeight: 1.7, marginBottom: 0 }}>
                  Os dados municipais serão apresentados por município, com
                  unidade, período e fonte. Não será atribuído automaticamente
                  a um município um total que a fonte só publique para a província.
                </p>
              </div>

              <label style={{ display: "block", marginTop: 18, fontWeight: 700 }}>
                Município selecionado
              </label>
              <input
                value={municipioSelecionado}
                onChange={(e) => setMunicipioSelecionado(e.target.value)}
                placeholder="Nome do município, quando a lista oficial estiver ligada..."
                style={{
                  width: "100%",
                  padding: 12,
                  border: "1px solid #cbd5e1",
                  borderRadius: 8,
                  marginTop: 7,
                }}
              />
              <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.7 }}>
                Este campo permite identificar o município a consultar; não
                representa uma lista municipal oficial nem confirma a existência
                de estatísticas para o município digitado.
              </p>
            </>
          )}

          {tipo === "areas" && (
            <>
              <p style={{ color: "#64748b", lineHeight: 1.7, marginTop: 0 }}>
                Painel técnico de áreas e produção para {provincia?.nome ?? "Angola"}.
                Filtre os indicadores e consulte o significado de cada medida.
              </p>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: 12,
                marginBottom: 18,
              }}>
                {[
                  ["Área cultivada", "ha"],
                  ["Área não cultivada", "ha"],
                  ["Produção agrícola", "t"],
                  ["Produtividade", "t/ha"],
                ].map(([nome, unidade]) => (
                  <div key={nome} style={{
                    border: "1px solid #dbe5dd",
                    borderRadius: 12,
                    padding: 15,
                    background: "#f8fafc",
                  }}>
                    <div style={{ color: "#64748b", fontSize: 12 }}>{nome}</div>
                    <div style={{ fontSize: 19, fontWeight: 800, color: VERDE, marginTop: 7 }}>
                      A validar
                    </div>
                    <small style={{ color: "#64748b" }}>Unidade: {unidade}</small>
                  </div>
                ))}
              </div>

              <input
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
                placeholder="Pesquisar indicador..."
                style={{
                  width: "100%",
                  padding: 12,
                  border: "1px solid #cbd5e1",
                  borderRadius: 8,
                  marginBottom: 12,
                }}
              />

              <div style={{ display: "grid", gap: 10 }}>
                {indicadoresFiltrados.map((item) => (
                  <article key={item.titulo} style={{
                    padding: 16,
                    border: "1px solid #e2e8f0",
                    borderRadius: 11,
                  }}>
                    <h3 style={{ margin: "0 0 8px", color: VERDE_ESCURO }}>
                      {item.titulo}
                    </h3>
                    <div style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 7,
                      marginBottom: 9,
                    }}>
                      <span style={etiqueta}>{item.valor}</span>
                      <span style={etiqueta}>Unidade: {item.unidade}</span>
                      <span style={etiqueta}>{item.periodo}</span>
                    </div>
                    <p style={{
                      color: "#475569",
                      fontSize: 13,
                      lineHeight: 1.7,
                      margin: "0 0 8px",
                    }}>
                      {item.descricao}
                    </p>
                    <small style={{ color: "#64748b" }}>
                      Fonte necessária: {item.fonte}
                    </small>
                  </article>
                ))}
              </div>

              <div style={caixaInformacao}>
                <strong>Como calcular a área restante?</strong>
                <p style={{ fontSize: 12, lineHeight: 1.7, marginBottom: 0 }}>
                  Quando a fonte disponibilizar a área agrícola total e a área
                  cultivada para a mesma região e período, a área não cultivada
                  poderá ser calculada por: área total comparável menos área
                  cultivada. Área potencialmente apta não é sinónimo de área
                  disponível nem de área ainda não cultivada.
                </p>
              </div>
            </>
          )}

          {tipo === "sobre" && (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 18,
            }}>
              <div style={{
                padding: 26,
                borderRadius: 15,
                background: `linear-gradient(145deg, ${VERDE_ESCURO}, ${VERDE})`,
                color: "#fff",
              }}>
                <div style={{ color: "#bbf7d0", letterSpacing: 2, fontSize: 11 }}>
                  CONHECIMENTO · TECNOLOGIA · INOVAÇÃO
                </div>
                <h3 style={{ fontSize: 28, lineHeight: 1.2 }}>
                  Uma nova forma de conhecer o campo angolano.
                </h3>
                <p style={{ lineHeight: 1.8, color: "#e2fbe9" }}>
                  A AGROINOVA ANGOLA liga conhecimento científico, informação
                  territorial e inovação para apoiar quem produz, investiga,
                  planeia e decide sobre o futuro da agricultura.
                </p>
              </div>

              <div style={{ display: "grid", gap: 12 }}>
                <article style={cartaoSobre}>
                  <h3 style={tituloSobre}>A nossa missão</h3>
                  <p style={textoSobre}>
                    Organizar e tornar acessível o conhecimento agropecuário
                    angolano, aproximando dados, investigação, produtores,
                    técnicos, instituições e decisores públicos.
                  </p>
                </article>

                <article style={cartaoSobre}>
                  <h3 style={tituloSobre}>A nossa visão</h3>
                  <p style={textoSobre}>
                    Contribuir para um setor agropecuário mais produtivo,
                    resiliente, sustentável e apoiado em evidências, valorizando
                    a diversidade das províncias e dos sistemas de produção.
                  </p>
                </article>

                <article style={cartaoSobre}>
                  <h3 style={tituloSobre}>O que nos orienta</h3>
                  <p style={textoSobre}>
                    Rigor nos dados, transparência das fontes, valorização do
                    conhecimento local, inovação útil e respeito pelas
                    diferenças ambientais e económicas de Angola.
                  </p>
                </article>
              </div>

              <div style={{
                gridColumn: "1 / -1",
                padding: 20,
                border: "1px solid #dbe5dd",
                borderRadius: 12,
                background: "#f8fafc",
              }}>
                <h3 style={{ color: VERDE_ESCURO, marginTop: 0 }}>
                  Conhecimento ao serviço do campo angolano
                </h3>
                <p style={{ color: "#475569", lineHeight: 1.8 }}>
                  O mapa é uma porta de entrada para explorar agricultura,
                  pecuária, florestas, solos, pesca, recursos hídricos,
                  infraestruturas e investigação. A plataforma deve distinguir
                  estatísticas oficiais, informação técnica, estimativas e
                  recomendações, indicando sempre as fontes e os períodos.
                </p>
                <strong style={{ color: VERDE }}>
                  Conhecimento, Tecnologia e Inovação ao Serviço do Campo Angolano.
                </strong>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

const botaoProvincia: React.CSSProperties = {
  border: "1px solid #dbe5dd",
  borderRadius: 8,
  padding: 10,
  background: "#f8fafc",
  color: "#14532d",
  fontWeight: 700,
  textAlign: "left",
  cursor: "pointer",
};

const caixaInformacao: React.CSSProperties = {
  marginTop: 16,
  padding: 14,
  borderRadius: 10,
  border: "1px solid #bbf7d0",
  background: "#f0fdf4",
  color: "#14532d",
};

const etiqueta: React.CSSProperties = {
  padding: "5px 8px",
  borderRadius: 6,
  background: "#f1f5f9",
  color: "#475569",
  fontSize: 11,
};

const cartaoSobre: React.CSSProperties = {
  padding: 18,
  border: "1px solid #e2e8f0",
  borderRadius: 12,
  background: "#fff",
};

const tituloSobre: React.CSSProperties = {
  margin: "0 0 8px",
  color: "#14532d",
};

const textoSobre: React.CSSProperties = {
  margin: 0,
  color: "#475569",
  lineHeight: 1.75,
  fontSize: 13,
};
