"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useMemo, useState } from "react";

import type {
  FeatureCollection,
} from "geojson";

import {
  provinciasSolos,
  dadosSolosMunicipios,
  tiposSoloDisponiveis,
  fontesSolos,
} from "@/data/solos/dados";

import { dadosAgricolas } from "@/data/oficial/agricultura/dados";
import { dadosPecuaria } from "@/data/oficial/pecuaria/dados";
import { dadosPesca } from "@/data/pesca/dados";

/* =========================================================
   MAPA — CLIENT ONLY
========================================================= */

const MapaSolos = dynamic(
  () => import("./MapaSolos"),
  {
    ssr: false,
    loading: () => (
      <div className="solos-map-loading">
        A carregar o mapa dos solos...
      </div>
    ),
  }
);

/* =========================================================
   TIPOS
========================================================= */

type Props = {
  geojson?: FeatureCollection;
};

type ProvinciaCentro = {
  provincia: string;
  latitude: number;
  longitude: number;
};

type DadoAgricola = {
  provincia: string;
  fonte?: string;
  periodo?: string;
  exploracoesProdutoras?: number;
  exploracoesFamiliares?: number;
  exploracoesEmpresariais?: number;
  percentualFamiliares?: number;
  percentualEmpresariais?: number;
  areaCulturasTemporarias?: number;
  areaCulturasPermanentes?: number;
  areaPlantadaTotal?: number;
};

type DadoPecuario = {
  provincia: string;
  exploracoesComAnimais?: number | null;
  bovinos?: number | null;
  suinos?: number | null;
  ovinos?: number | null;
  caprinos?: number | null;
  aves?: number | null;
  asininos?: number | null;
  muares?: number | null;
  equinos?: number | null;
  bufalinos?: number | null;
};

type PropriedadeFormatavel = {
  valor?: number;
  minimo?: number;
  maximo?: number;
  unidade?: string;
  classe?: string;
};

/* =========================================================
   CENTROS DAS 21 PROVÍNCIAS
========================================================= */

const centrosProvincias: ProvinciaCentro[] = [
  {
    provincia: "Bengo",
    latitude: -9.05,
    longitude: 13.75,
  },
  {
    provincia: "Benguela",
    latitude: -12.58,
    longitude: 13.41,
  },
  {
    provincia: "Bié",
    latitude: -12.38,
    longitude: 17.35,
  },
  {
    provincia: "Cabinda",
    latitude: -5.56,
    longitude: 12.19,
  },
  {
    provincia: "Cuando",
    latitude: -15.15,
    longitude: 20.5,
  },
  {
    provincia: "Cuanza Norte",
    latitude: -9.3,
    longitude: 15.3,
  },
  {
    provincia: "Cuanza Sul",
    latitude: -10.9,
    longitude: 14.9,
  },
  {
    provincia: "Cunene",
    latitude: -16.35,
    longitude: 15.75,
  },
  {
    provincia: "Cubango",
    latitude: -16,
    longitude: 20.5,
  },
  {
    provincia: "Huambo",
    latitude: -12.77,
    longitude: 15.73,
  },
  {
    provincia: "Huíla",
    latitude: -14.92,
    longitude: 13.5,
  },
  {
    provincia: "Icolo e Bengo",
    latitude: -9.25,
    longitude: 13.6,
  },
  {
    provincia: "Luanda",
    latitude: -8.84,
    longitude: 13.23,
  },
  {
    provincia: "Lunda Norte",
    latitude: -8.5,
    longitude: 20.75,
  },
  {
    provincia: "Lunda Sul",
    latitude: -10.5,
    longitude: 20.4,
  },
  {
    provincia: "Malanje",
    latitude: -9.54,
    longitude: 16.34,
  },
  {
    provincia: "Moxico",
    latitude: -11.2,
    longitude: 23,
  },
  {
    provincia: "Moxico Leste",
    latitude: -13.5,
    longitude: 23.5,
  },
  {
    provincia: "Namibe",
    latitude: -15.2,
    longitude: 12.15,
  },
  {
    provincia: "Uíge",
    latitude: -7.62,
    longitude: 15.05,
  },
  {
    provincia: "Zaire",
    latitude: -6.27,
    longitude: 13.43,
  },
];

/* =========================================================
   PROVÍNCIAS
========================================================= */

const provinciasAngola =
  centrosProvincias.map(
    (item) => item.provincia
  );

/* =========================================================
   NORMALIZAÇÃO
========================================================= */

function normalizarNome(
  valor: string
) {
  return valor
    .normalize("NFD")
    .replace(
      /[\u0300-\u036f]/g,
      ""
    )
    .toLowerCase()
    .replace(/\s+/g, "-")
    .trim();
}

/* =========================================================
   FORMATAÇÃO
========================================================= */

function formatarNumero(
  valor: number | null | undefined
) {
  if (
    valor === null ||
    valor === undefined
  ) {
    return "ND";
  }

  return new Intl.NumberFormat(
    "pt-AO"
  ).format(valor);
}

function formatarArea(
  valor: number | null | undefined
) {
  if (
    valor === null ||
    valor === undefined
  ) {
    return "ND";
  }

  return `${formatarNumero(
    valor
  )} ha`;
}

function formatarPercentual(
  valor: number | null | undefined
) {
  if (
    valor === null ||
    valor === undefined
  ) {
    return "ND";
  }

  return `${valor.toLocaleString(
    "pt-AO",
    {
      maximumFractionDigits: 2,
    }
  )}%`;
}

/* =========================================================
   COMPARAÇÃO
========================================================= */

function mesmaProvincia(
  a?: string,
  b?: string
) {
  if (!a || !b) {
    return false;
  }

  return (
    normalizarNome(a) ===
    normalizarNome(b)
  );
}

/* =========================================================
   FORMATAR PROPRIEDADE DO SOLO
========================================================= */

function formatarPropriedade(
  propriedade:
    | PropriedadeFormatavel
    | string
    | null
    | undefined
) {
  if (
    propriedade === null ||
    propriedade === undefined
  ) {
    return "Não determinada";
  }

  if (
    typeof propriedade ===
    "string"
  ) {
    return propriedade;
  }

  if (
    propriedade.minimo !==
      undefined &&
    propriedade.maximo !==
      undefined
  ) {
    return `${propriedade.minimo}–${propriedade.maximo}${
      propriedade.unidade
        ? ` ${propriedade.unidade}`
        : ""
    }`;
  }

  if (
    propriedade.valor !==
    undefined
  ) {
    return `${propriedade.valor}${
      propriedade.unidade
        ? ` ${propriedade.unidade}`
        : ""
    }`;
  }

  return (
    propriedade.classe ||
    "Não determinada"
  );
}

/* =========================================================
   COMPONENTE
========================================================= */

export default function SolosClient({
  geojson,
}: Props) {
  const [pesquisa, setPesquisa] =
    useState("");

  const [tipoSolo, setTipoSolo] =
    useState("");

  const [
    provinciaSelecionada,
    setProvinciaSelecionada,
  ] = useState("");

  /* =======================================================
     PROVÍNCIA ACTUAL
  ======================================================= */

  const provinciaAtual = useMemo(() => {
    if (!provinciaSelecionada) {
      return null;
    }

    return (
      provinciasSolos.find(
        (item) =>
          mesmaProvincia(
            item.provincia,
            provinciaSelecionada
          )
      ) || null
    );
  }, [
    provinciaSelecionada,
  ]);

  /* =======================================================
     AGRICULTURA
  ======================================================= */

  const agriculturaAtual =
    useMemo<DadoAgricola | null>(
      () => {
        if (!provinciaAtual) {
          return null;
        }

        const dados =
          dadosAgricolas as Record<
            string,
            DadoAgricola
          >;

        const encontrado =
          Object.values(
            dados
          ).find(
            (item) =>
              mesmaProvincia(
                item.provincia,
                provinciaAtual.provincia
              )
          );

        return encontrado || null;
      },
      [provinciaAtual]
    );

  /* =======================================================
     PECUÁRIA
  ======================================================= */

  const pecuariaAtual =
    useMemo<DadoPecuario | null>(
      () => {
        if (!provinciaAtual) {
          return null;
        }

        const lista =
          dadosPecuaria.provincias as unknown as DadoPecuario[];

        return (
          lista.find(
            (item) =>
              mesmaProvincia(
                item.provincia,
                provinciaAtual.provincia
              )
          ) || null
        );
      },
      [provinciaAtual]
    );

  /* =======================================================
     PESCA
  ======================================================= */

  const pescaAtual = useMemo(
    () => {
      if (!provinciaAtual) {
        return [];
      }

      return dadosPesca.filter(
        (item) =>
          item.provincia &&
          mesmaProvincia(
            item.provincia,
            provinciaAtual.provincia
          )
      );
    },
    [provinciaAtual]
  );

  /* =======================================================
     FILTRO
  ======================================================= */

  const provinciasFiltradas =
    useMemo(() => {
      return provinciasSolos.filter(
        (provincia) => {
          const correspondePesquisa =
            !pesquisa ||
            normalizarNome(
              provincia.provincia
            ).includes(
              normalizarNome(
                pesquisa
              )
            ) ||
            provincia.tiposSolo.some(
              (solo) =>
                normalizarNome(
                  solo
                ).includes(
                  normalizarNome(
                    pesquisa
                  )
                )
            );

          const correspondeSolo =
            !tipoSolo ||
            provincia.tiposSolo.some(
              (solo) =>
                normalizarNome(
                  solo
                ) ===
                normalizarNome(
                  tipoSolo
                )
            );

          return (
            correspondePesquisa &&
            correspondeSolo
          );
        }
      );
    }, [
      pesquisa,
      tipoSolo,
    ]);

  /* =======================================================
     CENTRO DO MAPA
  ======================================================= */

  const centroAtual = useMemo(
    () => {
      const encontrado =
        centrosProvincias.find(
          (item) =>
            mesmaProvincia(
              item.provincia,
              provinciaSelecionada
            )
        );

      return (
        encontrado || {
          provincia: "Angola",
          latitude: -11.2,
          longitude: 17.87,
        }
      );
    },
    [provinciaSelecionada]
  );

  /* =======================================================
     MUNICÍPIOS
  ======================================================= */

  const municipiosDaProvincia =
    useMemo(() => {
      if (!provinciaAtual) {
        return [];
      }

      return dadosSolosMunicipios.filter(
        (item) =>
          mesmaProvincia(
            item.provincia,
            provinciaAtual.provincia
          )
      );
    }, [
      provinciaAtual,
    ]);

  /* =======================================================
     SELECCIONAR PROVÍNCIA
  ======================================================= */

  function selecionarProvincia(
    nome: string
  ) {
    const encontrada =
      provinciasSolos.find(
        (item) =>
          mesmaProvincia(
            item.provincia,
            nome
          )
      );

    const nomeFinal =
      encontrada?.provincia ||
      nome;

    setProvinciaSelecionada(
      nomeFinal
    );

    window.setTimeout(() => {
      document
        .getElementById(
          "ficha-provincia"
        )
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 200);
  }

  /* =======================================================
     COPIAR FICHA
  ======================================================= */

  async function copiarFichaAcademica() {
    if (!provinciaAtual) {
      return;
    }

    const c =
      provinciaAtual.caracteristicas;

    const caracteristicas =
      Array.isArray(c)
        ? c
            .map(
              (item: string) =>
                `- ${item}`
            )
            .join("\n")
        : c
          ? [
              `Textura: ${
                c.textura ||
                "Não determinada"
              }`,
              `Drenagem: ${
                c.drenagem ||
                "Não determinada"
              }`,
              `Retenção de água: ${
                c.capacidadeRetencaoAgua ||
                "Não determinada"
              }`,
              `Fertilidade: ${
                c.fertilidade ||
                "Não determinada"
              }`,
              `Erosão: ${
                c.erosao ||
                "Não determinada"
              }`,
              `Profundidade: ${formatarPropriedade(
                c.profundidade
              )}`,
              `Matéria orgânica: ${formatarPropriedade(
                c.materiaOrganica
              )}`,
              `pH: ${formatarPropriedade(
                c.ph
              )}`,
            ].join("\n")
          : "Não determinadas.";

    const textoAgricultura =
      agriculturaAtual
        ? [
            `Explorações produtoras: ${formatarNumero(
              agriculturaAtual.exploracoesProdutoras
            )}`,
            `Explorações familiares: ${formatarNumero(
              agriculturaAtual.exploracoesFamiliares
            )}`,
            `Explorações empresariais: ${formatarNumero(
              agriculturaAtual.exploracoesEmpresariais
            )}`,
            `Área de culturas temporárias: ${formatarArea(
              agriculturaAtual.areaCulturasTemporarias
            )}`,
            `Área de culturas permanentes: ${formatarArea(
              agriculturaAtual.areaCulturasPermanentes
            )}`,
            `Área plantada total: ${formatarArea(
              agriculturaAtual.areaPlantadaTotal
            )}`,
          ].join("\n")
        : "Dados provinciais de agricultura não disponíveis.";

    const textoPecuaria =
      pecuariaAtual
        ? [
            `Explorações com animais: ${formatarNumero(
              pecuariaAtual.exploracoesComAnimais
            )}`,
            `Bovinos: ${formatarNumero(
              pecuariaAtual.bovinos
            )}`,
            `Suínos: ${formatarNumero(
              pecuariaAtual.suinos
            )}`,
            `Ovinos: ${formatarNumero(
              pecuariaAtual.ovinos
            )}`,
            `Caprinos: ${formatarNumero(
              pecuariaAtual.caprinos
            )}`,
            `Aves: ${formatarNumero(
              pecuariaAtual.aves
            )}`,
            `Asininos: ${formatarNumero(
              pecuariaAtual.asininos
            )}`,
            `Muares: ${formatarNumero(
              pecuariaAtual.muares
            )}`,
            `Equinos: ${formatarNumero(
              pecuariaAtual.equinos
            )}`,
            `Bufalinos: ${formatarNumero(
              pecuariaAtual.bufalinos
            )}`,
          ].join("\n")
        : "Dados provinciais de pecuária não disponíveis.";

    const textoPesca =
      pescaAtual.length > 0
        ? pescaAtual
            .map(
              (item) =>
                `- ${item.indicador}: ${formatarNumero(
                  item.valor
                )} ${item.unidade}`
            )
            .join("\n")
        : "Dados provinciais de pesca não disponíveis nas fontes integradas.";

    const texto = [
      "AGROINOVA ANGOLA — FICHA PROVINCIAL DE SOLOS",
      "",
      `Província: ${provinciaAtual.provincia}`,
      "",
      "SOLOS",
      provinciaAtual.descricao,
      "",
      "Tipos de solo:",
      provinciaAtual.tiposSolo.join(
        ", "
      ),
      "",
      "Características:",
      caracteristicas,
      "",
      "AGRICULTURA",
      textoAgricultura,
      "",
      "PECUÁRIA",
      textoPecuaria,
      "",
      "PESCA",
      textoPesca,
      "",
      "Fonte principal de solos:",
      provinciaAtual.fontePrincipal ||
        provinciaAtual.fonte ||
        "Não indicada.",
      "",
      "Instituição:",
      provinciaAtual.instituicao ||
        "Não indicada.",
      "",
      "Documento:",
      provinciaAtual.documento ||
        "Não indicado.",
      "",
      "Ano:",
      provinciaAtual.ano ||
        "Não indicado.",
      "",
      "Escala:",
      provinciaAtual.escala ||
        "Não indicada.",
      "",
      "Nível de confiança:",
      provinciaAtual.nivelConfianca ||
        "Não indicado.",
      "",
      "AGROINOVA ANGOLA",
    ].join("\n");

    try {
      await navigator.clipboard.writeText(
        texto
      );

      alert(
        "Ficha copiada com sucesso."
      );
    } catch {
      alert(
        "Não foi possível copiar automaticamente."
      );
    }
  }

  /* =======================================================
     CARACTERÍSTICAS PEDOLÓGICAS
  ======================================================= */

  const caracteristicas = useMemo(
    () => {
      if (!provinciaAtual) {
        return [];
      }

      const c =
        provinciaAtual.caracteristicas;

      if (
        c &&
        !Array.isArray(c)
      ) {
        return [
          {
            titulo: "Textura",
            valor:
              c.textura ||
              "Não determinada",
          },
          {
            titulo: "Drenagem",
            valor:
              c.drenagem ||
              "Não determinada",
          },
          {
            titulo:
              "Retenção de água",
            valor:
              c.capacidadeRetencaoAgua ||
              "Não determinada",
          },
          {
            titulo: "Fertilidade",
            valor:
              c.fertilidade ||
              "Não determinada",
          },
          {
            titulo: "Erosão",
            valor:
              c.erosao ||
              "Não determinada",
          },
          {
            titulo:
              "Profundidade",
            valor:
              formatarPropriedade(
                c.profundidade
              ),
          },
          {
            titulo:
              "Matéria orgânica",
            valor:
              formatarPropriedade(
                c.materiaOrganica
              ),
          },
          {
            titulo: "pH",
            valor:
              formatarPropriedade(
                c.ph
              ),
          },
        ];
      }

      if (Array.isArray(c)) {
        return c.map(
          (
            item: string,
            index: number
          ) => ({
            titulo: `Característica ${
              index + 1
            }`,
            valor: item,
          })
        );
      }

      return [];
    },
    [provinciaAtual]
  );

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <main className="solos-page">

      {/* =================================================
          HERO
      ================================================= */}

      <section className="solos-hero">

        <div className="solos-container">

          <div className="solos-hero-content">

            <span className="solos-eyebrow">
              AGROINOVA ANGOLA · BASE PEDOLÓGICA
            </span>

            <h1>
              Solos de Angola
            </h1>

            <p>
              Consulte informação pedológica,
              agrícola e agropecuária organizada
              por província, com indicação da
              escala, fonte e nível de confiança
              dos dados disponíveis.
            </p>

            <div className="solos-hero-actions">

              <a
                href="#explorador"
                className="solos-btn solos-btn-primary"
              >
                Explorar os solos
              </a>

              <Link
                href="/dados"
                className="solos-btn solos-btn-secondary"
              >
                Centro de dados
              </Link>

            </div>

          </div>

          <div className="solos-hero-resumo">

            <div className="solos-resumo-item">

              <strong>
                {provinciasAngola.length}
              </strong>

              <span>
                províncias actuais
              </span>

            </div>

            <div className="solos-resumo-item">

              <strong>
                {tiposSoloDisponiveis.length}
              </strong>

              <span>
                tipos de solo catalogados
              </span>

            </div>

            <div className="solos-resumo-item">

              <strong>
                {fontesSolos.length}
              </strong>

              <span>
                fontes integradas
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* =================================================
          EXPLORADOR
      ================================================= */}

      <section
        id="explorador"
        className="solos-explorador"
      >

        <div className="solos-container">

          <div className="solos-section-heading">

            <span>
              EXPLORADOR PEDOLÓGICO
            </span>

            <h2>
              Pesquise uma província
            </h2>

            <p>
              Seleccione uma província para abrir
              a ficha territorial completa.
            </p>

          </div>

          <div className="solos-filtros">

            <div className="solos-filtro">

              <label htmlFor="pesquisa-solos">
                Pesquisar
              </label>

              <input
                id="pesquisa-solos"
                type="text"
                value={pesquisa}
                onChange={(event) =>
                  setPesquisa(
                    event.target.value
                  )
                }
                placeholder="Huambo, Ferralsolos..."
              />

            </div>

            <div className="solos-filtro">

              <label htmlFor="tipo-solo">
                Tipo de solo
              </label>

              <select
                id="tipo-solo"
                value={tipoSolo}
                onChange={(event) =>
                  setTipoSolo(
                    event.target.value
                  )
                }
              >

                <option value="">
                  Todos os tipos
                </option>

                {tiposSoloDisponiveis.map(
                  (tipo) => (
                    <option
                      key={tipo}
                      value={tipo}
                    >
                      {tipo}
                    </option>
                  )
                )}

              </select>

            </div>

          </div>

          <div className="solos-resultados-top">

            <strong>
              {provinciasFiltradas.length}
            </strong>

            <span>
              províncias disponíveis
            </span>

          </div>

          <div className="solos-provincias-grid">

            {provinciasFiltradas.map(
              (provincia) => (
                <button
                  key={provincia.id}
                  type="button"
                  className={
                    mesmaProvincia(
                      provincia.provincia,
                      provinciaSelecionada
                    )
                      ? "solos-provincia-card active"
                      : "solos-provincia-card"
                  }
                  onClick={() =>
                    selecionarProvincia(
                      provincia.provincia
                    )
                  }
                >

                  <span className="solos-provincia-dot">
                    ●
                  </span>

                  <span>
                    PROVÍNCIA
                  </span>

                  <h3>
                    {provincia.provincia}
                  </h3>

                  <p>
                    {
                      provincia
                        .tiposSolo
                        .length
                    }{" "}
                    tipos de solo registados
                  </p>

                </button>
              )
            )}

          </div>

        </div>

      </section>

      {/* =================================================
          MAPA
      ================================================= */}

      <section className="solos-mapa-section">

        <div className="solos-container">

          <div className="solos-section-heading">

            <span>
              MAPA TERRITORIAL
            </span>

            <h2>
              Solos e território
            </h2>

            <p>
              Clique numa província no mapa para
              consultar a respectiva ficha.
            </p>

          </div>

          <div className="solos-mapa-card">

            <MapaSolos
              latitude={
                centroAtual.latitude
              }
              longitude={
                centroAtual.longitude
              }
              geojson={geojson}
              onSelecionarProvincia={
                selecionarProvincia
              }
            />

          </div>

        </div>

      </section>

      {/* =================================================
          FICHA
      ================================================= */}

      {provinciaAtual && (
        <section
          id="ficha-provincia"
          className="solos-ficha-section"
        >

          <div className="solos-container">

            <div className="solos-ficha-header">

              <div>

                <span className="solos-eyebrow">
                  FICHA TERRITORIAL
                </span>

                <h2>
                  {provinciaAtual.provincia}
                </h2>

                <p>
                  Perfil integrado de solos e
                  dados agropecuários disponíveis.
                </p>

              </div>

              <button
                type="button"
                className="solos-copy-btn"
                onClick={
                  copiarFichaAcademica
                }
              >
                Copiar ficha académica
              </button>

            </div>

            {/* METADADOS */}

            <div className="solos-meta-grid">

              <div>

                <span>
                  ESCALA
                </span>

                <strong>
                  {provinciaAtual.escala ||
                    "Província"}
                </strong>

              </div>

              <div>

                <span>
                  CONFIANÇA
                </span>

                <strong>
                  {provinciaAtual.nivelConfianca ||
                    "Não indicada"}
                </strong>

              </div>

              <div>

                <span>
                  INSTITUIÇÃO
                </span>

                <strong>
                  {provinciaAtual.instituicao ||
                    "Não indicada"}
                </strong>

              </div>

              <div>

                <span>
                  ANO
                </span>

                <strong>
                  {provinciaAtual.ano ||
                    "Não indicado"}
                </strong>

              </div>

            </div>

            {/* =================================================
                SOLOS
            ================================================= */}

            <div className="solos-ficha-card">

              <div className="solos-section-heading">

                <span>
                  01 · SOLOS
                </span>

                <h2>
                  Caracterização pedológica
                </h2>

              </div>

              <p className="solos-descricao">
                {provinciaAtual.descricao}
              </p>

              <div className="solos-tags">

                {provinciaAtual.tiposSolo.map(
                  (solo) => (
                    <span
                      key={solo}
                      className="solos-tag"
                    >
                      {solo}
                    </span>
                  )
                )}

              </div>

              <div className="solos-caracteristicas-grid">

                {caracteristicas.map(
                  (item) => (
                    <article
                      key={item.titulo}
                    >

                      <span>
                        {item.titulo}
                      </span>

                      <strong>
                        {item.valor}
                      </strong>

                    </article>
                  )
                )}

              </div>

            </div>

            {/* =================================================
                AGRICULTURA
            ================================================= */}

            <div className="solos-ficha-card">

              <div className="solos-section-heading">

                <span>
                  02 · AGRICULTURA
                </span>

                <h2>
                  Actividade agrícola
                </h2>

                <p>
                  Dados oficiais integrados a partir
                  da base de agricultura do AGROINOVA.
                </p>

              </div>

              {agriculturaAtual ? (
                <>

                  <div className="solos-dados-grid">

                    <article>

                      <span>
                        EXPLORAÇÕES PRODUTORAS
                      </span>

                      <strong>
                        {formatarNumero(
                          agriculturaAtual
                            .exploracoesProdutoras
                        )}
                      </strong>

                      <small>
                        explorações
                      </small>

                    </article>

                    <article>

                      <span>
                        EXPLORAÇÕES FAMILIARES
                      </span>

                      <strong>
                        {formatarNumero(
                          agriculturaAtual
                            .exploracoesFamiliares
                        )}
                      </strong>

                      <small>
                        {formatarPercentual(
                          agriculturaAtual
                            .percentualFamiliares
                        )}
                      </small>

                    </article>

                    <article>

                      <span>
                        EXPLORAÇÕES EMPRESARIAIS
                      </span>

                      <strong>
                        {formatarNumero(
                          agriculturaAtual
                            .exploracoesEmpresariais
                        )}
                      </strong>

                      <small>
                        {formatarPercentual(
                          agriculturaAtual
                            .percentualEmpresariais
                        )}
                      </small>

                    </article>

                    <article>

                      <span>
                        ÁREA PLANTADA TOTAL
                      </span>

                      <strong>
                        {formatarArea(
                          agriculturaAtual
                            .areaPlantadaTotal
                        )}
                      </strong>

                      <small>
                        hectares
                      </small>

                    </article>

                    <article>

                      <span>
                        CULTURAS TEMPORÁRIAS
                      </span>

                      <strong>
                        {formatarArea(
                          agriculturaAtual
                            .areaCulturasTemporarias
                        )}
                      </strong>

                      <small>
                        hectares
                      </small>

                    </article>

                    <article>

                      <span>
                        CULTURAS PERMANENTES
                      </span>

                      <strong>
                        {formatarArea(
                          agriculturaAtual
                            .areaCulturasPermanentes
                        )}
                      </strong>

                      <small>
                        hectares
                      </small>

                    </article>

                  </div>

                  <div className="solos-fonte-nota">

                    <strong>
                      Fonte
                    </strong>

                    <span>
                      {agriculturaAtual.fonte ||
                        "INE — ICAPP 2024/2025"}
                    </span>

                    <span>
                      Período:{" "}
                      {agriculturaAtual.periodo ||
                        "ICAPP 2024/2025"}
                    </span>

                  </div>

                </>
              ) : (

                <div className="solos-dado-indisponivel">

                  <strong>
                    Dados provinciais de agricultura
                    não disponíveis.
                  </strong>

                  <p>
                    A base actualmente integrada
                    não possui um registo correspondente
                    a esta unidade territorial.
                  </p>

                </div>

              )}

            </div>

            {/* =================================================
                PECUÁRIA
            ================================================= */}

            <div className="solos-ficha-card">

              <div className="solos-section-heading">

                <span>
                  03 · PECUÁRIA
                </span>

                <h2>
                  Actividade pecuária
                </h2>

              </div>

              {pecuariaAtual ? (
                <>

                  <div className="solos-dados-grid">

                    {[
                      [
                        "EXPLORAÇÕES COM ANIMAIS",
                        pecuariaAtual.exploracoesComAnimais,
                      ],
                      [
                        "BOVINOS",
                        pecuariaAtual.bovinos,
                      ],
                      [
                        "SUÍNOS",
                        pecuariaAtual.suinos,
                      ],
                      [
                        "OVINOS",
                        pecuariaAtual.ovinos,
                      ],
                      [
                        "CAPRINOS",
                        pecuariaAtual.caprinos,
                      ],
                      [
                        "AVES",
                        pecuariaAtual.aves,
                      ],
                      [
                        "ASININOS",
                        pecuariaAtual.asininos,
                      ],
                      [
                        "MUARES",
                        pecuariaAtual.muares,
                      ],
                      [
                        "EQUINOS",
                        pecuariaAtual.equinos,
                      ],
                      [
                        "BUFALINOS",
                        pecuariaAtual.bufalinos,
                      ],
                    ].map(
                      ([nome, valor]) => (
                        <article
                          key={String(nome)}
                        >

                          <span>
                            {nome}
                          </span>

                          <strong>
                            {formatarNumero(
                              valor as
                                | number
                                | null
                                | undefined
                            )}
                          </strong>

                          <small>
                            animais / explorações
                          </small>

                        </article>
                      )
                    )}

                  </div>

                  <div className="solos-fonte-nota">

                    <strong>
                      Fonte
                    </strong>

                    <span>
                      INE — ICAPP 2024/2025
                    </span>

                    <p>
                      Os dados do ICAPP utilizam
                      uma divisão territorial anterior
                      à actual divisão administrativa.
                      Valores de Cuando Cubango e
                      Moxico não são redistribuídos.
                    </p>

                  </div>

                </>
              ) : (

                <div className="solos-dado-indisponivel">

                  <strong>
                    Dados provinciais de pecuária
                    não disponíveis.
                  </strong>

                  <p>
                    Não existe um registo integrado
                    para esta província nesta base.
                  </p>

                </div>

              )}

            </div>

            {/* =================================================
                PESCA
            ================================================= */}

            <div className="solos-ficha-card">

              <div className="solos-section-heading">

                <span>
                  04 · PESCA
                </span>

                <h2>
                  Actividade piscatória
                </h2>

              </div>

              {pescaAtual.length > 0 ? (

                <div className="solos-dados-grid">

                  {pescaAtual.map(
                    (item) => (
                      <article
                        key={item.id}
                      >

                        <span>
                          {item.indicador}
                        </span>

                        <strong>
                          {formatarNumero(
                            item.valor
                          )}
                        </strong>

                        <small>
                          {item.unidade}
                        </small>

                      </article>
                    )
                  )}

                </div>

              ) : (

                <div className="solos-dado-indisponivel">

                  <strong>
                    Dados provinciais de pesca
                    não disponíveis nas fontes integradas.
                  </strong>

                  <p>
                    O AGROINOVA não atribui dados
                    nacionais de pesca a uma província
                    quando a fonte original não apresenta
                    essa desagregação.
                  </p>

                  <Link
                    href="/pesca"
                    className="solos-link"
                  >
                    Consultar dados nacionais de pesca →
                  </Link>

                </div>

              )}

            </div>

            {/* =================================================
                COBERTURA VEGETAL
            ================================================= */}

            <div className="solos-ficha-card">

              <div className="solos-section-heading">

                <span>
                  05 · COBERTURA VEGETAL
                </span>

                <h2>
                  Uso e cobertura do território
                </h2>

              </div>

              <div className="solos-dado-indisponivel">

                <strong>
                  Dados geoespaciais ainda não
                  integrados nesta ficha.
                </strong>

                <p>
                  Esta área será alimentada apenas
                  quando o AGROINOVA integrar uma fonte
                  geoespacial documentada para cobertura
                  vegetal, área florestal, vegetação
                  natural, áreas agrícolas e outras
                  classes de ocupação do solo.
                </p>

              </div>

            </div>

            {/* =================================================
                CULTURAS
            ================================================= */}

            <div className="solos-ficha-card">

              <div className="solos-section-heading">

                <span>
                  06 · CULTURAS
                </span>

                <h2>
                  Aptidão e potencial agrícola
                </h2>

                <p>
                  A aptidão de uma cultura só será
                  apresentada quando existir evidência
                  documental suficiente para a escala
                  correspondente.
                </p>

              </div>

              {provinciaAtual
                .culturasPotencialmenteFavoraveis
                ?.length ? (

                <div className="solos-culturas-grid">

                  {provinciaAtual
                    .culturasPotencialmenteFavoraveis
                    .map(
                      (cultura) => (
                        <article
                          key={
                            cultura.nome
                          }
                          className="solos-cultura-card"
                        >

                          <span>
                            CULTURA
                          </span>

                          <h3>
                            {cultura.nome}
                          </h3>

                          <strong>
                            {cultura.nivel}
                          </strong>

                          <p>
                            {
                              cultura.justificativa
                            }
                          </p>

                          <small>
                            Fonte:{" "}
                            {
                              cultura.fonte
                            }
                          </small>

                        </article>
                      )
                    )}

                </div>

              ) : (

                <div className="solos-dado-indisponivel">

                  <strong>
                    Aptidão específica de culturas
                    não determinada para esta ficha.
                  </strong>

                  <p>
                    Não serão atribuídas culturas
                    apenas com base no tipo de solo.
                    A determinação exige integração
                    de solo, clima, relevo, água,
                    limitações e evidência científica.
                  </p>

                </div>

              )}

            </div>

            {/* =================================================
                INDICADORES
            ================================================= */}

            <div className="solos-ficha-card">

              <div className="solos-section-heading">

                <span>
                  07 · CIÊNCIA DO SOLO
                </span>

                <h2>
                  Indicadores científicos
                </h2>

                <p>
                  Valores quantitativos provenientes
                  das evidências científicas integradas
                  na ficha.
                </p>

              </div>

              {Array.isArray(
                provinciaAtual.indicadores
              ) &&
              provinciaAtual
                .indicadores.length >
                0 ? (

                <div className="solos-indicadores-grid">

                  {provinciaAtual.indicadores.map(
                    (indicador) => (
                      <article
                        key={
                          indicador.id
                        }
                        className="solos-indicador-card"
                      >

                        <span>
                          {
                            indicador.nome
                          }
                        </span>

                        <strong>
                          {
                            indicador.valor
                          }
                        </strong>

                        <small>
                          {
                            indicador.unidade
                          }
                        </small>

                        {indicador.nota && (
                          <p>
                            {
                              indicador.nota
                            }
                          </p>
                        )}

                        <small>
                          Fonte:{" "}
                          {
                            indicador.fonte
                          }
                        </small>

                      </article>
                    )
                  )}

                </div>

              ) : (

                <div className="solos-dado-indisponivel">

                  <strong>
                    Indicadores científicos
                    específicos ainda não determinados
                    para esta ficha.
                  </strong>

                  <p>
                    A ausência de indicadores não
                    significa ausência de informação
                    sobre os solos; significa apenas
                    que não foi integrada evidência
                    quantitativa suficiente nesta escala.
                  </p>

                </div>

              )}

            </div>

            {/* =================================================
                MUNICÍPIOS
            ================================================= */}

            <div className="solos-ficha-card">

              <div className="solos-section-heading">

                <span>
                  08 · ESCALA LOCAL
                </span>

                <h2>
                  Informação municipal
                </h2>

              </div>

              {municipiosDaProvincia.length >
              0 ? (

                <div className="solos-municipios-grid">

                  {municipiosDaProvincia.map(
                    (municipio) => (
                      <article
                        key={
                          municipio.id
                        }
                        className="solos-municipio-card"
                      >

                        <span>
                          MUNICÍPIO
                        </span>

                        <h3>
                          {
                            municipio.municipio
                          }
                        </h3>

                        <p>
                          {
                            municipio.descricao
                          }
                        </p>

                      </article>
                    )
                  )}

                </div>

              ) : (

                <div className="solos-dado-indisponivel">

                  <strong>
                    Informação municipal ainda
                    não integrada.
                  </strong>

                  <p>
                    A base actual não possui
                    informação municipal suficientemente
                    documentada para esta província.
                  </p>

                </div>

              )}

            </div>

            {/* =================================================
                EVIDÊNCIAS
            ================================================= */}

            <div className="solos-ficha-card">

              <div className="solos-section-heading">

                <span>
                  09 · EVIDÊNCIA
                </span>

                <h2>
                  Documentação científica
                </h2>

              </div>

              {provinciaAtual.evidencias?.length ? (

                <div className="solos-evidencias-grid">

                  {provinciaAtual.evidencias.map(
                    (evidencia) => (
                      <article
                        key={
                          evidencia.id
                        }
                        className="solos-evidencia-card"
                      >

                        <div>

                          <span>
                            {
                              evidencia.escala
                            }
                          </span>

                          <span>
                            {
                              evidencia.ano
                            }
                          </span>

                        </div>

                        <h3>
                          {
                            evidencia.titulo
                          }
                        </h3>

                        <p>
                          {
                            evidencia.descricao
                          }
                        </p>

                        <strong>
                          Referência APA
                        </strong>

                        <p>
                          {
                            evidencia.referenciaAPA
                          }
                        </p>

                        <a
                          href={
                            evidencia.url
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Consultar documento →
                        </a>

                      </article>
                    )
                  )}

                </div>

              ) : (

                <div className="solos-dado-indisponivel">

                  <strong>
                    Nenhuma evidência adicional
                    específica registada.
                  </strong>

                  <p>
                    Consulte a fonte principal
                    indicada abaixo.
                  </p>

                </div>

              )}

            </div>

            {/* =================================================
                OBSERVAÇÕES
            ================================================= */}

            {provinciaAtual.observacoes && (
              <div className="solos-observacoes">

                <span>
                  OBSERVAÇÕES
                </span>

                <p>
                  {
                    provinciaAtual
                      .observacoes
                  }
                </p>

              </div>
            )}

            {/* =================================================
                FONTE PRINCIPAL
            ================================================= */}

            <div className="solos-fonte-principal">

              <div>

                <span>
                  INSTITUIÇÃO
                </span>

                <strong>
                  {
                    provinciaAtual
                      .instituicao ||
                    "Não indicada"
                  }
                </strong>

              </div>

              <div>

                <span>
                  DOCUMENTO
                </span>

                <strong>
                  {
                    provinciaAtual
                      .documento ||
                    "Não indicado"
                  }
                </strong>

              </div>

              <div>

                <span>
                  ANO
                </span>

                <strong>
                  {
                    provinciaAtual
                      .ano ||
                    "Não indicado"
                  }
                </strong>

              </div>

              <div>

                <span>
                  ESCALA
                </span>

                <strong>
                  {
                    provinciaAtual
                      .escala ||
                    "Não indicada"
                  }
                </strong>

              </div>

              <div>

                <span>
                  CONFIANÇA
                </span>

                <strong>
                  {
                    provinciaAtual
                      .nivelConfianca ||
                    "Não indicada"
                  }
                </strong>

              </div>

              <a
                href={
                  provinciaAtual.urlFonte
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar fonte →
              </a>

            </div>

          </div>

        </section>
      )}

      {/* =================================================
          FONTES GERAIS
      ================================================= */}

      <section className="solos-fontes-section">

        <div className="solos-container">

          <div className="solos-section-heading">

            <span>
              DOCUMENTAÇÃO
            </span>

            <h2>
              Fontes utilizadas pelo AGROINOVA
            </h2>

            <p>
              Fontes pedológicas e científicas
              utilizadas para construir a base
              de conhecimento sobre os solos de Angola.
            </p>

          </div>

          <div className="solos-fontes-grid">

            {fontesSolos.map(
              (fonte) => (
                <article
                  key={fonte.id}
                  className="solos-fonte-card"
                >

                  <span>
                    {fonte.tipo}
                  </span>

                  <h3>
                    {fonte.titulo}
                  </h3>

                  <p>
                    {fonte.descricao}
                  </p>

                  <small>
                    {fonte.instituicao} ·{" "}
                    {fonte.ano}
                  </small>

                  <a
                    href={fonte.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Consultar fonte →
                  </a>

                </article>
              )
            )}

          </div>

        </div>

      </section>

    </main>
  );
}