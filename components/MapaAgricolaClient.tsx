"use client";

import dynamic from "next/dynamic";

const MapaAgricola = dynamic(
  () => import("./MapaAgricola"),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          minHeight: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "16px",
          background: "#f3f4f6",
        }}
      >
        A carregar o mapa de Angola...
      </div>
    ),
  }
);

export default function MapaAgricolaClient() {
  return <MapaAgricola />;
}