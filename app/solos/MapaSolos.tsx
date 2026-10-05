"use client";

import { useEffect } from "react";

import {
  MapContainer,
  TileLayer,
  GeoJSON,
  useMap,
} from "react-leaflet";

import type {
  Feature,
  FeatureCollection,
  Geometry,
} from "geojson";

import "leaflet/dist/leaflet.css";

type Props = {
  geojson?: FeatureCollection;
  latitude: number;
  longitude: number;
  onSelecionarProvincia: (nome: string) => void;
};

function CentralizarMapa({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) {
  const map = useMap();

  useEffect(() => {
    map.setView(
      [latitude, longitude],
      6,
      {
        animate: true,
      }
    );
  }, [map, latitude, longitude]);

  return null;
}

function obterNomeProvincia(
  feature: Feature<Geometry>
): string {
  const propriedades = feature.properties || {};

  const candidatos = [
    propriedades.provincia,
    propriedades.Provincia,
    propriedades.PROVINCIA,
    propriedades.nome,
    propriedades.NOME,
    propriedades.name,
    propriedades.NAME,
    propriedades.NAME_1,
    propriedades.name_1,
    propriedades.admin1Name,
  ];

  const encontrado = candidatos.find(
    (valor) =>
      typeof valor === "string" &&
      valor.trim().length > 0
  );

  return encontrado
    ? String(encontrado).trim()
    : "";
}

function estiloProvincia(
  feature?: Feature<Geometry>
) {
  const nome = feature
    ? obterNomeProvincia(feature)
    : "";

  return {
    color: "#166534",
    weight: 1.5,
    fillColor: "#22c55e",
    fillOpacity: nome ? 0.2 : 0.1,
  };
}

export default function MapaSolos({
  geojson,
  latitude,
  longitude,
  onSelecionarProvincia,
}: Props) {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={5}
      scrollWheelZoom={true}
      style={{
        height: "540px",
        width: "100%",
      }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <CentralizarMapa
        latitude={latitude}
        longitude={longitude}
      />

      {geojson && (
        <GeoJSON
          data={geojson as FeatureCollection<Geometry>}
          style={estiloProvincia}
          onEachFeature={(feature, layer) => {
            const nome =
              obterNomeProvincia(feature);

            if (!nome) {
              return;
            }

            layer.bindTooltip(nome);

            layer.on({
              click: () => {
                onSelecionarProvincia(nome);
              },
            });
          }}
        />
      )}
    </MapContainer>
  );
}