"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  MapContainer,
  TileLayer,
  GeoJSON,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

export default function MapaAgricola() {
  const [provincias, setProvincias] = useState<any>(null);

  const router = useRouter();

  useEffect(() => {
    fetch("/Angola_Provincias.geojson")
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "Não foi possível carregar o GeoJSON."
          );
        }

        return res.json();
      })
      .then((data) => {
        console.log("================================");
        console.log("GEOJSON CARREGADO");
        console.log(data);

        if (
          data.features &&
          data.features.length > 0
        ) {
          console.log(
            "================================"
          );

          console.log(
            "PROPRIEDADES DA PRIMEIRA PROVÍNCIA:"
          );

          console.log(
            data.features[0].properties
          );

          console.log(
            "================================"
          );
        }

        setProvincias(data);
      })
      .catch((error) => {
        console.error(
          "ERRO AO CARREGAR O MAPA:",
          error
        );
      });
  }, []);

  /*
   * Obtém o nome da província a partir
   * das propriedades do GeoJSON.
   */
  function obterNomeProvincia(feature: any) {
    const propriedades =
      feature?.properties || {};

    console.log(
      "================================"
    );

    console.log(
      "PROPRIEDADES DA PROVÍNCIA:"
    );

    console.log(propriedades);

    /*
     * Tentamos diferentes campos possíveis
     * encontrados em ficheiros GeoJSON.
     */
    const possiveisNomes = [
      propriedades.PROVINCIA,
      propriedades.Provincia,
      propriedades.provincia,
      propriedades.PROVINCE,
      propriedades.Province,
      propriedades.province,
      propriedades.NAME_1,
      propriedades.NAME_2,
      propriedades.NAME,
      propriedades.name,
      propriedades.NOME,
      propriedades.NOME_PROV,
      propriedades.NOME_PROVINCIA,
      propriedades.NOMEPROV,
      propriedades.admin1Name,
    ];

    const nomeEncontrado =
      possiveisNomes.find(
        (nome) =>
          typeof nome === "string" &&
          nome.trim() !== ""
      );

    console.log(
      "NOME ENCONTRADO:",
      nomeEncontrado
    );

    console.log(
      "================================"
    );

    return String(
      nomeEncontrado || "Província"
    );
  }

  /*
   * Converte o nome da província
   * para o formato usado nas URLs.
   *
   * Exemplo:
   * Huambo → huambo
   * Huíla → huila
   * Cuanza Norte → cuanza-norte
   */
  function criarSlug(nome: string) {
    return nome
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-");
  }

  /*
   * Estilo normal da província.
   */
  function estiloProvincia() {
    return {
      color: "#166534",
      weight: 2,
      fillColor: "#86efac",
      fillOpacity: 0.55,
    };
  }

  /*
   * Quando o cursor passa sobre a província.
   */
  function quandoPassar(event: any) {
    event.target.setStyle({
      weight: 4,
      color: "#14532d",
      fillColor: "#4ade80",
      fillOpacity: 0.85,
    });
  }

  /*
   * Quando o cursor sai da província.
   */
  function quandoSair(event: any) {
    event.target.setStyle(
      estiloProvincia()
    );
  }

  /*
   * Quando o utilizador clica na província.
   */
  function quandoClicar(event: any) {
    console.log(
      "================================"
    );

    console.log(
      "CLIQUE DETECTADO!"
    );

    const feature =
      event.target.feature;

    console.log(
      "FEATURE CLICADA:",
      feature
    );

    const nome =
      obterNomeProvincia(feature);

    console.log(
      "NOME DA PROVÍNCIA:",
      nome
    );

    const slug =
      criarSlug(nome);

    console.log(
      "SLUG GERADO:",
      slug
    );

    console.log(
      "ENDEREÇO:",
      `/mapa/${slug}`
    );

    console.log(
      "================================"
    );

    router.push(
      `/mapa/${slug}`
    );
  }

  /*
   * Configuração de cada província
   * quando o GeoJSON é carregado.
   */
  function cadaProvincia(
    feature: any,
    layer: any
  ) {
    console.log(
      "================================"
    );

    console.log(
      "NOVA PROVÍNCIA CARREGADA"
    );

    console.log(
      "PROPRIEDADES:"
    );

    console.log(
      feature?.properties
    );

    const nome =
      obterNomeProvincia(feature);

    console.log(
      "NOME MOSTRADO NO MAPA:",
      nome
    );

    console.log(
      "================================"
    );

    /*
     * Nome da província no mapa.
     */
    layer.bindTooltip(nome, {
      permanent: true,
      direction: "center",
      className: "nome-provincia",
    });

    /*
     * Eventos do mapa.
     */
    layer.on({
      mouseover: quandoPassar,
      mouseout: quandoSair,
      click: quandoClicar,
    });
  }

  return (
    <div className="mapa-container">

      <MapContainer
        center={[-11.2, 17.8]}
        zoom={5}
        scrollWheelZoom={true}
        className="mapa"
      >

        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {provincias && (
          <GeoJSON
            data={provincias}
            style={estiloProvincia}
            onEachFeature={cadaProvincia}
          />
        )}

      </MapContainer>

    </div>
  );
}