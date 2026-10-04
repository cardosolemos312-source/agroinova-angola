
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  MapContainer,
  TileLayer,
  GeoJSON,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import {
  provinciasAngola,
} from "../data/provincias-angola";

export default function MapaAgricola() {
  const [provincias, setProvincias] =
    useState<any>(null);

  const [erro, setErro] =
    useState(false);

  const router = useRouter();

  /*
   * =========================================
   * CARREGAR GEOJSON
   * =========================================
   */

  useEffect(() => {
    async function carregarMapa() {
      try {
        setErro(false);

        const resposta = await fetch(
          "/Angola_Provincias.geojson"
        );

        if (!resposta.ok) {
          throw new Error(
            "Não foi possível carregar o mapa."
          );
        }

        const data =
          await resposta.json();

        if (
          !data.features ||
          data.features.length === 0
        ) {
          throw new Error(
            "O GeoJSON não contém províncias."
          );
        }

        console.log(
          "MAPA CARREGADO:",
          data.features.length,
          "províncias"
        );

        setProvincias(data);

      } catch (error) {
        console.error(
          "ERRO AO CARREGAR O MAPA:",
          error
        );

        setErro(true);
      }
    }

    carregarMapa();
  }, []);

  /*
   * =========================================
   * OBTER NOME DA PROVÍNCIA
   * =========================================
   */

  function obterNomeProvincia(
    feature: any
  ): string {
    const propriedades =
      feature?.properties || {};

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

    return String(
      nomeEncontrado ||
        "Província"
    ).trim();
  }

  /*
   * =========================================
   * CRIAR SLUG
   * =========================================
   */

  function criarSlug(
    nome: string
  ): string {
    return nome
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-");
  }

  /*
   * =========================================
   * ENCONTRAR PROVÍNCIA
   * =========================================
   */

  function encontrarProvincia(
    nome: string
  ) {
    const slug =
      criarSlug(nome);

    return provinciasAngola.find(
      (provincia) =>
        provincia.slug === slug
    );
  }

  /*
   * =========================================
   * ESTILO NORMAL DA PROVÍNCIA
   * =========================================
   */

  function estiloProvincia(
    feature?: any
  ) {
    if (!feature) {
      return {
        color: "#166534",
        weight: 2,
        fillColor: "#86efac",
        fillOpacity: 0.55,
      };
    }

    const nome =
      obterNomeProvincia(feature);

    const provincia =
      encontrarProvincia(nome);

    /*
     * Existem dados oficiais comparáveis
     * no ICAPP 2024/2025.
     */
    if (
      provincia?.dadosICAPP2024_2025
    ) {
      return {
        color: "#166534",
        weight: 2,
        fillColor: "#4ade80",
        fillOpacity: 0.60,
      };
    }

    /*
     * Província existe, mas a fonte
     * não possui dados directamente
     * comparáveis para a actual divisão.
     */
    return {
      color: "#64748b",
      weight: 2,
      fillColor: "#cbd5e1",
      fillOpacity: 0.70,
    };
  }

  /*
   * =========================================
   * ESTILO AO PASSAR O CURSOR
   * =========================================
   */

  function quandoPassar(
    event: any
  ) {
    const feature =
      event.target.feature;

    const nome =
      obterNomeProvincia(feature);

    const provincia =
      encontrarProvincia(nome);

    /*
     * Mantemos cores diferentes
     * de acordo com a disponibilidade
     * dos dados.
     */
    if (
      provincia?.dadosICAPP2024_2025
    ) {
      event.target.setStyle({
        weight: 4,
        color: "#14532d",
        fillColor: "#22c55e",
        fillOpacity: 0.90,
      });
    } else {
      event.target.setStyle({
        weight: 4,
        color: "#334155",
        fillColor: "#94a3b8",
        fillOpacity: 0.90,
      });
    }

    if (
      event.target.bringToFront
    ) {
      event.target.bringToFront();
    }
  }

  /*
   * =========================================
   * SAIR DO CURSOR
   * =========================================
   */

  function quandoSair(
    event: any
  ) {
    event.target.setStyle(
      estiloProvincia(
        event.target.feature
      )
    );
  }

  /*
   * =========================================
   * CLIQUE
   * =========================================
   */

  function quandoClicar(
    event: any
  ) {
    const feature =
      event.target.feature;

    const nome =
      obterNomeProvincia(feature);

    const provincia =
      encontrarProvincia(nome);

    if (!provincia) {
      console.warn(
        "Província não reconhecida:",
        nome
      );

      return;
    }

    console.log(
      "PROVÍNCIA SELECIONADA:",
      provincia.nome
    );

    console.log(
      "SLUG:",
      provincia.slug
    );

    router.push(
      `/mapa/${provincia.slug}`
    );
  }

  /*
   * =========================================
   * CONFIGURAÇÃO DE CADA PROVÍNCIA
   * =========================================
   */

  function cadaProvincia(
    feature: any,
    layer: any
  ) {
    const nome =
      obterNomeProvincia(feature);

    const provincia =
      encontrarProvincia(nome);

    let estadoDados =
      "Dados provinciais não disponíveis";

    if (
      provincia?.dadosICAPP2024_2025
    ) {
      estadoDados =
        "Dados oficiais disponíveis";
    }

    /*
     * Tooltip com nome + estado dos dados.
     */
    layer.bindTooltip(
      `
        <div class="mapa-tooltip">

          <strong>
            ${nome}
          </strong>

          <span class="${
            provincia?.dadosICAPP2024_2025
              ? "mapa-status-disponivel"
              : "mapa-status-indisponivel"
          }">
            ${estadoDados}
          </span>

        </div>
      `,
      {
        permanent: true,
        direction: "center",
        className:
          "nome-provincia",
      }
    );

    /*
     * Eventos.
     */
    layer.on({
      mouseover:
        quandoPassar,

      mouseout:
        quandoSair,

      click:
        quandoClicar,
    });

    /*
     * Verificação no console.
     */
    if (!provincia) {
      console.warn(
        "GeoJSON contém uma província não encontrada na lista oficial:",
        nome
      );
    }
  }

  /*
   * =========================================
   * CARREGAMENTO
   * =========================================
   */

  if (!provincias && !erro) {
    return (
      <div className="mapa-container">

        <div className="mapa-loading">
          A carregar o mapa de Angola...
        </div>

      </div>
    );
  }

  /*
   * =========================================
   * ERRO
   * =========================================
   */

  if (erro) {
    return (
      <div className="mapa-container">

        <div className="mapa-loading">
          Não foi possível carregar o mapa
          de Angola.
        </div>

      </div>
    );
  }

  /*
   * =========================================
   * MAPA
   * =========================================
   */

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

        <GeoJSON
          data={provincias}
          style={estiloProvincia}
          onEachFeature={
            cadaProvincia
          }
        />

      </MapContainer>


      {/* =====================================
          LEGENDA
      ====================================== */}

      <div className="mapa-legenda">

        <div className="mapa-legenda-titulo">
          Disponibilidade dos dados
        </div>

        <div className="mapa-legenda-item">

          <span className="mapa-legenda-cor disponivel" />

          <span>
            Dados oficiais disponíveis
          </span>

        </div>

        <div className="mapa-legenda-item">

          <span className="mapa-legenda-cor indisponivel" />

          <span>
            Dados não disponíveis nesta fonte
          </span>

        </div>

      </div>

    </div>
  );
}
