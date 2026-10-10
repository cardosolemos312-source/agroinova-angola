
"use client";

import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  useMap,
} from "react-leaflet";
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

type TipoModal =
  | "provincias"
  | "municipios"
  | "areas"
  | "pesca"
  | "sobre";

type Props = {
  aberto: boolean;
  fechar: () => void;
  tipo: TipoModal;
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
      "Só deve ser calculada quando existir uma área total comparável e uma área cultivada correspondente, para a mesma região e período.",
  },
  {
    titulo: "Produção agrícola",
    valor: "A confirmar na fonte",
    unidade: "Toneladas ou unidade publicada",
    periodo: "Período da fonte original",
    fonte: "INE / MINAGRIF",
    descricao:
      "Produção por cultura, campanha agrícola e área administrativa efetivamente coberta pelo levantamento.",
  },
  {
    titulo: "Efetivo pecuário",
    valor: "A confirmar na fonte",
    unidade: "Cabeças ou unidade publicada",
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
    unidade: "Toneladas ou unidade publicada",
    periodo: "Período da fonte original",
    fonte: "Estatística oficial das pescas",
    descricao:
      "Os dados devem distinguir pesca marítima, pesca continental e aquicultura, quando a fonte apresentar essa separação.",
  },
];

const provinciasAngola = [
  "Bengo",
  "Benguela",
  "Bié",
  "Cabinda",
  "Cuando",
  "Cubango",
  "Cuanza Norte",
  "Cuanza Sul",
  "Cunene",
  "Huambo",
  "Huíla",
  "Icolo e Bengo",
  "Luanda",
  "Lunda Norte",
  "Lunda Sul",
  "Malanje",
  "Moxico",
  "Moxico Leste",
  "Namibe",
  "Uíge",
  "Zaire",
];

function AjustarMapa({
  dados,
}: {
  dados: FeatureCollection | null;
}) {
  const mapa = useMap();

  useEffect(() => {
    if (!dados?.features?.length) return;

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
  const [geojson, setGeojson] =
    useState<FeatureCollection | null>(null);
  const [erroMapa, setErroMapa] = useState("");
  const [temaModal, setTemaModal] = useState(tema);
  const [pesquisa, setPesquisa] = useState("");
  const [municipioSelecionado, setMunicipioSelecionado] =
    useState("");

  useEffect(() => {
    if (!aberto || tipo !== "provincias") return;

    let cancelado = false;

    fetch("/Angola_Provincias.geojson")
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error(
            "Falha ao carregar os limites provinciais."
          );
        }

        return resposta.json();
      })
      .then((dados: FeatureCollection) => {
        if (!cancelado) {
          setGeojson(dados);
          setErroMapa("");
        }
      })
      .catch(() => {
        if (!cancelado) {
          setErroMapa(
            "Não foi possível carregar a cartografia provincial."
          );
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

    return () => {
      window.removeEventListener("keydown", tecla);
    };
  }, [aberto, fechar]);

  useEffect(() => {
    setTemaModal(tema);
  }, [tema]);

  if (!aberto) return null;

  const titulo =
    tipo === "provincias"
      ? "Províncias de Angola"
      : tipo === "municipios"
        ? `Municípios — ${provincia?.nome ?? "Província"}`
        : tipo === "areas"
          ? `Indicadores e áreas — ${provincia?.nome ?? "Angola"}`
          : tipo === "pesca"
            ? "Pesca e aquicultura em Angola"
            : "AGROINOVA ANGOLA";

  const indicadoresFiltrados = indicadores.filter((item) =>
    `${item.titulo} ${item.descricao} ${item.fonte}`
      .toLowerCase()
      .includes(pesquisa.toLowerCase())
  );

  const provinciasFiltradas = provinciasAngola.filter((nome) =>
    nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <div
      role="presentation"
      onMouseDown={(evento) => {
        if (evento.target === evento.currentTarget) fechar();
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
            <div
              style={{
                fontSize: 10,
                letterSpacing: 2,
                color: "#bbf7d0",
              }}
            >
              AGROINOVA ANGOLA · OBSERVATÓRIO TERRITORIAL
            </div>

            <h2
              id="mapa-modal-titulo"
              style={{ margin: "5px 0 0", fontSize: 23 }}
            >
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
              <p style={textoIntro}>
                Explore as divisões provinciais de Angola.
                Consulte as províncias e os indicadores territoriais
                disponíveis. Os limites municipais exigem cartografia
                municipal própria.
              </p>

              <div style={grelhaMapa}>
                <div
                  style={{
                    minHeight: 460,
                    overflow: "hidden",
                    borderRadius: 12,
                    background: "#0b3b2c",
                  }}
                >
                  {erroMapa ? (
                    <p style={{ padding: 20, color: "#fff" }}>
                      {erroMapa}
                    </p>
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
                  <h3 style={{ marginTop: 0 }}>
                    Consultar uma província
                  </h3>

                  <input
                    value={pesquisa}
                    onChange={(evento) =>
                      setPesquisa(evento.target.value)
                    }
                    placeholder="Pesquisar província..."
                    style={estiloInput}
                  />

                  <div style={listaProvincias}>
                    {provinciasFiltradas.map((nome) => (
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
                    <p style={textoPequeno}>
                      Os indicadores históricos devem conservar a
                      divisão administrativa, a unidade e o período
                      da fonte original.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}

          {tipo === "municipios" && (
            <>
              <p style={textoIntro}>
                Consulte os temas relevantes para o desenvolvimento
                municipal. Os limites reais e os indicadores por
                município só devem ser apresentados quando existirem
                cartografia e dados verificáveis.
              </p>

              <div style={grelhaTemas}>
                {temas.map((nome) => (
                  <button
                    key={nome}
                    type="button"
                    onClick={() => setTemaModal(nome)}
                    style={{
                      ...botaoTema,
                      border:
                        temaModal === nome
                          ? "2px solid #16a34a"
                          : "1px solid #dbe5dd",
                      background:
                        temaModal === nome ? "#f0fdf4" : "#fff",
                    }}
                  >
                    <strong>{nome}</strong>
                    <p style={textoPequeno}>
                      Consultar potencial, produção e limitações
                      quando existirem dados verificáveis.
                    </p>
                  </button>
                ))}
              </div>

              <div style={caixaInformacao}>
                <strong>Camada selecionada: {temaModal}</strong>
                <p style={textoPequeno}>
                  Os dados municipais devem indicar unidade,
                  período e fonte. Não será atribuído a um município
                  um total que a fonte publique apenas para a província.
                </p>
              </div>

              <label
                htmlFor="municipio-selecionado"
                style={rotulo}
              >
                Município a consultar
              </label>

              <input
                id="municipio-selecionado"
                value={municipioSelecionado}
                onChange={(evento) =>
                  setMunicipioSelecionado(evento.target.value)
                }
                placeholder="Introduza o nome do município..."
                style={estiloInput}
              />

              <p style={textoPequeno}>
                O nome introduzido não confirma, por si só, a
                existência de estatísticas oficiais para o município.
              </p>
            </>
          )}

          {tipo === "areas" && (
            <>
              <p style={textoIntro}>
                Painel técnico de áreas e produção para{" "}
                {provincia?.nome ?? "Angola"}. Consulte os indicadores
                sem confundir áreas totais, cultivadas ou potencialmente
                aptas.
              </p>

              <div style={grelhaIndicadores}>
                {[
                  ["Área cultivada", "ha"],
                  ["Área não cultivada", "ha"],
                  ["Produção agrícola", "t"],
                  ["Produtividade", "t/ha"],
                ].map(([nome, unidade]) => (
                  <div key={nome} style={cartaoIndicador}>
                    <div style={textoSecundario}>{nome}</div>
                    <div
                      style={{
                        fontSize: 19,
                        fontWeight: 800,
                        color: VERDE,
                        marginTop: 7,
                      }}
                    >
                      A validar
                    </div>
                    <small style={textoSecundario}>
                      Unidade: {unidade}
                    </small>
                  </div>
                ))}
              </div>

              <input
                value={pesquisa}
                onChange={(evento) =>
                  setPesquisa(evento.target.value)
                }
                placeholder="Pesquisar indicador..."
                style={estiloInput}
              />

              <div style={{ display: "grid", gap: 10 }}>
                {indicadoresFiltrados.map((item) => (
                  <article key={item.titulo} style={cartaoArtigo}>
                    <h3
                      style={{
                        margin: "0 0 8px",
                        color: VERDE_ESCURO,
                      }}
                    >
                      {item.titulo}
                    </h3>

                    <div style={linhaEtiquetas}>
                      <span style={etiqueta}>{item.valor}</span>
                      <span style={etiqueta}>
                        Unidade: {item.unidade}
                      </span>
                      <span style={etiqueta}>{item.periodo}</span>
                    </div>

                    <p style={textoDescricao}>
                      {item.descricao}
                    </p>

                    <small style={textoSecundario}>
                      Fonte: {item.fonte}
                    </small>
                  </article>
                ))}
              </div>

              <div style={caixaInformacao}>
                <strong>Como calcular a área não cultivada?</strong>
                <p style={textoPequeno}>
                  Quando existirem dados comparáveis para a mesma
                  região e período, pode calcular-se a diferença
                  entre a área agrícola total e a área cultivada.
                  A área potencialmente apta não é sinónimo de área
                  disponível nem de área não cultivada.
                </p>
              </div>
            </>
          )}

          {tipo === "pesca" && (
            <>
              <p style={textoIntro}>
                A pesca e a aquicultura são importantes para a
                alimentação, o emprego e a economia angolana. A
                análise territorial deve distinguir a pesca marítima,
                a pesca continental e a produção aquícola.
              </p>

              <div style={grelhaIndicadores}>
                {[
                  {
                    titulo: "Pesca marítima",
                    descricao:
                      "Atividade desenvolvida ao longo da costa angolana.",
                  },
                  {
                    titulo: "Pesca continental",
                    descricao:
                      "Captura de recursos pesqueiros em rios, lagos e outras águas interiores.",
                  },
                  {
                    titulo: "Aquicultura",
                    descricao:
                      "Produção de organismos aquáticos em sistemas de criação.",
                  },
                ].map((item) => (
                  <article key={item.titulo} style={cartaoArtigo}>
                    <h3 style={tituloCartao}>{item.titulo}</h3>
                    <p style={textoDescricao}>{item.descricao}</p>
                    <span style={etiqueta}>
                      Estatísticas a validar na fonte oficial
                    </span>
                  </article>
                ))}
              </div>

              <div style={caixaInformacao}>
                <strong>Rigor estatístico</strong>
                <p style={textoPequeno}>
                  Não são apresentados totais de captura ou produção
                  sem fonte, período, unidade e cobertura geográfica
                  identificados.
                </p>
              </div>
            </>
          )}

          {tipo === "sobre" && (
            <div style={grelhaSobre}>
              <div style={cartaoSobrePrincipal}>
                <div
                  style={{
                    color: "#bbf7d0",
                    letterSpacing: 2,
                    fontSize: 11,
                  }}
                >
                  CONHECIMENTO · TECNOLOGIA · INOVAÇÃO
                </div>

                <h3
                  style={{
                    fontSize: 28,
                    lineHeight: 1.2,
                  }}
                >
                  Uma nova forma de conhecer o campo angolano.
                </h3>

                <p style={textoSobrePrincipal}>
                  A AGROINOVA ANGOLA liga conhecimento científico,
                  informação territorial e inovação para apoiar
                  quem produz, investiga, planeia e decide sobre
                  o futuro da agricultura.
                </p>
              </div>

              <div style={{ display: "grid", gap: 12 }}>
                <article style={cartaoSobre}>
                  <h3 style={tituloCartao}>A nossa missão</h3>
                  <p style={textoDescricao}>
                    Organizar e tornar acessível o conhecimento
                    agropecuário angolano, aproximando dados,
                    investigação, produtores, técnicos, instituições
                    e decisores públicos.
                  </p>
                </article>

                <article style={cartaoSobre}>
                  <h3 style={tituloCartao}>A nossa visão</h3>
                  <p style={textoDescricao}>
                    Contribuir para um setor agropecuário mais
                    produtivo, resiliente, sustentável e apoiado
                    em evidências.
                  </p>
                </article>

                <article style={cartaoSobre}>
                  <h3 style={tituloCartao}>O que nos orienta</h3>
                  <p style={textoDescricao}>
                    Rigor nos dados, transparência das fontes,
                    valorização do conhecimento local e inovação
                    útil para Angola.
                  </p>
                </article>
              </div>

              <div style={caixaInformacao}>
                <h3 style={{ marginTop: 0 }}>
                  Conhecimento ao serviço do campo angolano
                </h3>

                <p style={textoDescricao}>
                  O mapa é uma porta de entrada para explorar
                  agricultura, pecuária, florestas, solos, pesca,
                  recursos hídricos, infraestruturas e investigação.
                  A plataforma deve distinguir estatísticas oficiais,
                  informação técnica, estimativas e recomendações.
                </p>

                <strong>
                  Conhecimento, Tecnologia e Inovação ao Serviço
                  do Campo Angolano.
                </strong>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

const textoIntro: React.CSSProperties = {
  color: "#64748b",
  lineHeight: 1.7,
  marginTop: 0,
};

const grelhaMapa: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "minmax(0, 1.6fr) minmax(250px, .8fr)",
  gap: 18,
};

const listaProvincias: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: 7,
  maxHeight: 360,
  overflowY: "auto",
};

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

const grelhaTemas: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
  gap: 12,
};

const botaoTema: React.CSSProperties = {
  padding: 17,
  borderRadius: 12,
  textAlign: "left",
  cursor: "pointer",
  color: "#17221b",
};

const grelhaIndicadores: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: 12,
  marginBottom: 18,
};

const cartaoIndicador: React.CSSProperties = {
  border: "1px solid #dbe5dd",
  borderRadius: 12,
  padding: 15,
  background: "#f8fafc",
};

const cartaoArtigo: React.CSSProperties = {
  padding: 16,
  border: "1px solid #e2e8f0",
  borderRadius: 11,
  background: "#fff",
};

const linhaEtiquetas: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: 7,
  marginBottom: 9,
};

const etiqueta: React.CSSProperties = {
  display: "inline-block",
  padding: "5px 8px",
  borderRadius: 6,
  background: "#f1f5f9",
  color: "#475569",
  fontSize: 11,
};

const caixaInformacao: React.CSSProperties = {
  marginTop: 16,
  padding: 14,
  borderRadius: 10,
  border: "1px solid #bbf7d0",
  background: "#f0fdf4",
  color: "#14532d",
};

const textoPequeno: React.CSSProperties = {
  fontSize: 12,
  lineHeight: 1.7,
  marginBottom: 0,
};

const textoSecundario: React.CSSProperties = {
  color: "#64748b",
  fontSize: 12,
};

const textoDescricao: React.CSSProperties = {
  color: "#475569",
  fontSize: 13,
  lineHeight: 1.7,
};

const estiloInput: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  padding: 12,
  border: "1px solid #cbd5e1",
  borderRadius: 8,
  marginBottom: 12,
};

const rotulo: React.CSSProperties = {
  display: "block",
  marginTop: 18,
  marginBottom: 7,
  fontWeight: 700,
};

const grelhaSobre: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: 18,
};

const cartaoSobrePrincipal: React.CSSProperties = {
  padding: 26,
  borderRadius: 15,
  background: `linear-gradient(145deg, ${VERDE_ESCURO}, ${VERDE})`,
  color: "#fff",
};

const textoSobrePrincipal: React.CSSProperties = {
  lineHeight: 1.8,
  color: "#e2fbe9",
};

const cartaoSobre: React.CSSProperties = {
  padding: 18,
  border: "1px solid #e2e8f0",
  borderRadius: 12,
  background: "#fff",
};

const tituloCartao: React.CSSProperties = {
  margin: "0 0 8px",
  color: "#14532d",
};
