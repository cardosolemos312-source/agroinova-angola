"use client";

import { useEffect, useMemo, useState } from "react";

import {
  GeoJSON,
  MapContainer,
  TileLayer,
} from "react-leaflet";

import type {
  Feature,
  FeatureCollection,
  Geometry,
} from "geojson";

import type {
  Path,
  PathOptions,
} from "leaflet";

import "leaflet/dist/leaflet.css";

type PropriedadesProvincia = {
  PROVINCIA?: string;
  name?: string;
  NAME_1?: string;
  nome?: string;
  provincia?: string;
};

type DadosProvincia = {
  nome: string;
  valor: number;
  unidade: string;
  percentual: number | null;
  periodo: string;
  data: string;
};

type MapaDadosProps = {
  dados: DadosProvincia[];
};

type GeoJSONAngola = FeatureCollection<
  Geometry,
  PropriedadesProvincia
>;

const CENTRO_ANGOLA: [number, number] = [
  -11.2027,
  17.8739,
];

function normalizarNome(nome: string) {
  return nome
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

function obterNomeProvincia(
  feature: Feature<Geometry, PropriedadesProvincia>
) {
  const propriedades = feature.properties;

  return (
    propriedades?.PROVINCIA ??
    propriedades?.name ??
    propriedades?.NAME_1 ??
    propriedades?.nome ??
    propriedades?.provincia ??
    "Província"
  );
}

function obterCor(percentual: number | null) {
  if (percentual === null) return "#e2e8f0";
  if (percentual <= 20) return "#bbf7d0";
  if (percentual <= 40) return "#86efac";
  if (percentual <= 60) return "#4ade80";
  if (percentual <= 80) return "#16a34a";
  return "#14532d";
}

export default function MapaDados({
  dados,
}: MapaDadosProps) {
  const [geojson, setGeojson] =
    useState<GeoJSONAngola | null>(null);

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
          { cache: "force-cache" }
        );

        if (!resposta.ok) {
          throw new Error("Nao foi possivel carregar o GeoJSON.");
        }

        const resultado =
          (await resposta.json()) as GeoJSONAngola;

        if (ativo) {
          setGeojson(resultado);
          setCarregando(false);
        }
      } catch (error) {
        console.error(
          "Erro ao carregar mapa estatistico:",
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

  const dadosPorProvincia = useMemo(() => {
    const mapa = new Map<string, DadosProvincia>();

    dados.forEach((item) => {
      mapa.set(normalizarNome(item.nome), item);
    });

    return mapa;
  }, [dados]);

  const dadoSelecionado = useMemo(() => {
    if (!selecionada) return null;
    return dadosPorProvincia.get(normalizarNome(selecionada)) ?? null;
  }, [selecionada, dadosPorProvincia]);

  function obterDado(nome: string) {
    return dadosPorProvincia.get(normalizarNome(nome)) ?? null;
  }
  function estiloProvincia(
    feature: Feature<Geometry, PropriedadesProvincia>
  ): PathOptions {
    const nome = obterNomeProvincia(feature);
    const dado = obterDado(nome);
    const ativa =
      normalizarNome(selecionada ?? "") === normalizarNome(nome);

    return {
      color: ativa ? "#064e3b" : "#ffffff",
      weight: ativa ? 3 : 1.2,
      opacity: 1,
      fillColor: obterCor(dado?.percentual ?? null),
      fillOpacity: ativa ? 1 : 0.88,
    };
  }
  function configurarProvincia(
    feature: Feature<Geometry, PropriedadesProvincia>,
    layer: Path
  ) {
    const nome = obterNomeProvincia(feature);
    const dado = obterDado(nome);

    const conteudo = dado
      ? `<strong>${nome}</strong><br/>${dado.valor.toLocaleString("pt-PT")} ${dado.unidade}<br/>Índice relativo: ${dado.percentual?.toLocaleString("pt-PT") ?? "—"}%`
      : `<strong>${nome}</strong><br/>Sem dados publicados`;

    layer.bindTooltip(conteudo, {
      sticky: true,
      direction: "top",
    });

    layer.on({
      mouseover: () => {
        layer.setStyle({
          weight: 3,
          color: "#064e3b",
          fillOpacity: 1,
        });
        layer.bringToFront();
      },
      mouseout: () => {
        layer.setStyle(estiloProvincia(feature));
      },
      click: () => {
        setSelecionada(nome);
      },
    });
  }
  if (carregando) {
    return (
      <div className="flex h-[420px] items-center justify-center rounded-2xl bg-slate-50 text-sm text-slate-500">
        A carregar o mapa das províncias de Angola...
      </div>
    );
  }

  if (erro || !geojson) {
    return (
      <div className="flex h-[300px] items-center justify-center rounded-2xl border border-red-100 bg-red-50 p-6 text-center text-sm text-red-700">
        Não foi possível carregar o mapa de Angola.
        Verifique se o ficheiro Angola_Provincias.geojson está disponível.
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="overflow-hidden rounded-2xl border border-slate-200">
        <MapContainer
          center={CENTRO_ANGOLA}
          zoom={5}
          minZoom={4}
          maxZoom={9}
          scrollWheelZoom={true}
          style={{
            width: "100%",
            height: "450px",
            background: "#f8fafc",
          }}
        >
          <TileLayer
            attribution="© OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <GeoJSON
            key={`${selecionada ?? "nenhuma"}-${dados.length}`}
            data={geojson}
            style={(feature) =>
              feature
                ? estiloProvincia(
                    feature as Feature<
                      Geometry,
                      PropriedadesProvincia
                    >
                  )
                : {}
            }
            onEachFeature={(feature, layer) => {
              configurarProvincia(
                feature as Feature<
                  Geometry,
                  PropriedadesProvincia
                >,
                layer as Path
              );
            }}
          />
        </MapContainer>
      </div>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-600">
        <span className="font-bold text-slate-700">
          Índice relativo ao maior valor:
        </span>
        {[
          { cor: "#e2e8f0", texto: "Sem dados" },
          { cor: "#bbf7d0", texto: "Até 20%" },
          { cor: "#86efac", texto: "21–40%" },
          { cor: "#4ade80", texto: "41–60%" },
          { cor: "#16a34a", texto: "61–80%" },
          { cor: "#14532d", texto: "81–100%" },
        ].map((item) => (
          <span key={item.texto} className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-sm" style={{ backgroundColor: item.cor }} />
            {item.texto}
          </span>
        ))}
      </div>
      {selecionada && (
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Província seleccionada
            </p>
            <h3 className="mt-1 text-xl font-black text-emerald-950">
              {selecionada}
            </h3>
            {dadoSelecionado ? (
              <>
                <p className="mt-1 text-sm font-bold text-emerald-900">
                  {dadoSelecionado.valor.toLocaleString("pt-PT")} {dadoSelecionado.unidade}
                </p>
                <p className="mt-1 text-sm text-emerald-800">
                  Índice relativo: {dadoSelecionado.percentual?.toLocaleString("pt-PT") ?? "—"}%
                </p>
                {dadoSelecionado.periodo && (
                  <p className="mt-1 text-xs text-emerald-700">
                    Período: {dadoSelecionado.periodo}
                  </p>
                )}
              </>
            ) : (
              <p className="mt-1 text-sm text-emerald-800">
                Ainda não existem dados publicados para esta província.
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={() => setSelecionada(null)}
            className="rounded-xl border border-emerald-200 bg-white px-4 py-2 text-sm font-bold text-emerald-800 transition hover:bg-emerald-100"
          >
            Limpar selecção
          </button>
        </div>
      )}
      <p className="text-xs leading-5 text-slate-500">
        Seleccione uma província no mapa para consultar o valor publicado e
        o respectivo índice percentual. As cores representam a relação com
        o maior valor observado para o indicador seleccionado, não a
        participação na produção nacional.      </p>
    </div>
  );
}