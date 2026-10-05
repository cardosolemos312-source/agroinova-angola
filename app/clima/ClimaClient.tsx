"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useMemo, useState } from "react";

import {
  fontesClima,
  indicadoresClimaNacional,
  provinciasClima,
  variaveisClimaticas,
} from "@/data/clima/dados";

/* =========================================================
   MAPA CLIMÁTICO
   O Leaflet só é carregado no navegador.
   ========================================================= */

const MapaClima = dynamic(
  () => import("./MapaClima"),
  {
    ssr: false,

    loading: () => (
      <div className="clima-mapa-loading">
        <div className="clima-mapa-loading-icon">
          🌧️
        </div>

        <strong>
          A carregar mapa climático...
        </strong>

        <span>
          Preparando a visualização espacial de Angola
        </span>
      </div>
    ),
  }
);

export default function ClimaClient() {
  const [pesquisa, setPesquisa] = useState("");

  const [
    provinciaSelecionada,
    setProvinciaSelecionada,
  ] = useState<string | null>(null);

  /* =======================================================
     FILTRO DE PROVÍNCIAS
     ======================================================= */

  const provinciasFiltradas = useMemo(() => {
    const termo = pesquisa
      .trim()
      .toLowerCase();

    if (!termo) {
      return provinciasClima;
    }

    return provinciasClima.filter(
      (item) =>
        item.provincia
          .toLowerCase()
          .includes(termo)
    );
  }, [pesquisa]);

  /* =======================================================
     PROVÍNCIA SELECIONADA
     ======================================================= */

  const provincia = provinciaSelecionada
    ? provinciasClima.find(
        (item) =>
          item.provincia ===
          provinciaSelecionada
      )
    : null;

  /* =======================================================
     SELECIONAR PROVÍNCIA
     ======================================================= */

  function selecionarProvincia(
    nome: string
  ) {
    setProvinciaSelecionada(nome);

    if (
      typeof window !==
      "undefined"
    ) {
      window.setTimeout(() => {
        document
          .getElementById(
            "ficha-provincia"
          )
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 150);
    }
  }

  return (
    <main className="clima-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="clima-hero">
        <div className="clima-container clima-hero-grid">

          <div className="clima-hero-content">

            <span className="clima-eyebrow">
              AGROINOVA ANGOLA • CLIMA
            </span>

            <h1>
              Clima e Variabilidade
              <br />
              Climática de Angola
            </h1>

            <p>
              Informação climática organizada
              para apoiar a agricultura,
              investigação, planeamento
              territorial e tomada de decisão
              em Angola.
            </p>

            <div className="clima-hero-actions">

              <a
                href="#mapa-precipitacao"
                className="clima-btn clima-btn-primary"
              >
                🌧️ Ver precipitação
              </a>

              <a
                href="#provincias"
                className="clima-btn clima-btn-secondary"
              >
                Explorar províncias
              </a>

            </div>

          </div>

          <div className="clima-hero-card">

            <div className="clima-hero-card-icon">
              🌦️
            </div>

            <span>
              Base climática
            </span>

            <strong>
              Angola
            </strong>

            <p>
              21 províncias • dados históricos,
              reanálises e projeções
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          MAPA DE PRECIPITAÇÃO
          ===================================================== */}

      <section
        id="mapa-precipitacao"
        className="clima-section clima-section-mapa"
      >

        <div className="clima-container">

          <div className="clima-section-heading">

            <div>

              <span className="clima-section-kicker">
                MONITORIZAÇÃO CLIMÁTICA
              </span>

              <h2>
                Precipitação em Angola
              </h2>

            </div>

            <p>
              Visualização espacial da
              precipitação para apoiar a análise
              climática e agrícola.
            </p>

          </div>


          <MapaClima
            modo="mensal"
            mes={
              new Date().getMonth() + 1
            }
            ano={
              new Date().getFullYear()
            }
            onProvinciaSelecionada={(
              nome
            ) => {
              selecionarProvincia(
                nome
              );
            }}
          />

        </div>

      </section>


      {/* =====================================================
          VARIÁVEIS CLIMÁTICAS
          ===================================================== */}

      <section className="clima-section">

        <div className="clima-container">

          <div className="clima-section-heading">

            <div>

              <span className="clima-section-kicker">
                VISÃO GERAL
              </span>

              <h2>
                Variáveis climáticas
              </h2>

            </div>

            <p>
              Indicadores disponíveis para
              integração com as bases climáticas
              utilizadas pelo AGROINOVA ANGOLA.
            </p>

          </div>


          <div className="clima-indicadores-grid">

            {variaveisClimaticas.map(
              (variavel) => (

                <article
                  key={variavel.id}
                  className="clima-indicador-card"
                >

                  <div className="clima-indicador-icon">
                    {obterIconeVariavel(
                      variavel.id
                    )}
                  </div>

                  <div>

                    <h3>
                      {variavel.nome}
                    </h3>

                    <span>
                      {variavel.unidade}
                    </span>

                    <p>
                      {variavel.descricao}
                    </p>

                  </div>

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          FONTES
          ===================================================== */}

      <section
        id="fontes"
        className="clima-section clima-section-soft"
      >

        <div className="clima-container">

          <div className="clima-section-heading">

            <div>

              <span className="clima-section-kicker">
                FONTES
              </span>

              <h2>
                De onde vêm os dados?
              </h2>

            </div>

            <p>
              O AGROINOVA identifica a instituição,
              conjunto de dados, período e escala
              utilizados.
            </p>

          </div>


          <div className="clima-fontes-grid">

            {fontesClima.map(
              (fonte) => (

                <article
                  key={fonte.id}
                  className="clima-fonte-card"
                >

                  <div className="clima-fonte-top">

                    <span className="clima-fonte-tipo">
                      {fonte.tipo}
                    </span>

                    <span className="clima-fonte-ano">
                      {fonte.periodo ??
                        "Período variável"}
                    </span>

                  </div>


                  <h3>
                    {fonte.nome}
                  </h3>


                  <p>
                    {fonte.descricao}
                  </p>


                  <div className="clima-fonte-meta">

                    <span>

                      <strong>
                        Instituição:
                      </strong>{" "}

                      {fonte.instituicao}

                    </span>


                    {fonte.resolucao && (

                      <span>

                        <strong>
                          Resolução:
                        </strong>{" "}

                        {fonte.resolucao}

                      </span>

                    )}


                    {fonte.escala && (

                      <span>

                        <strong>
                          Escala:
                        </strong>{" "}

                        {fonte.escala}

                      </span>

                    )}

                  </div>


                  <a
                    href={fonte.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clima-link"
                  >
                    Consultar fonte →
                  </a>

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          INDICADORES NACIONAIS
          ===================================================== */}

      <section className="clima-section">

        <div className="clima-container">

          <div className="clima-section-heading">

            <div>

              <span className="clima-section-kicker">
                DADOS
              </span>

              <h2>
                Indicadores climáticos
              </h2>

            </div>

            <p>
              Indicadores preparados para receber
              valores calculados a partir das bases
              climáticas oficiais e científicas.
            </p>

          </div>


          <div className="clima-dados-grid">

            {indicadoresClimaNacional.map(
              (indicador) => (

                <article
                  key={indicador.id}
                  className="clima-dado-card"
                >

                  <span className="clima-dado-label">
                    {indicador.nome}
                  </span>


                  <strong className="clima-dado-valor">

                    {indicador.valorTexto ??
                      "Não determinado"}

                  </strong>


                  <span className="clima-dado-unidade">
                    {indicador.unidade}
                  </span>


                  <div className="clima-dado-meta">

                    <span>
                      Período:{" "}
                      {indicador.periodo}
                    </span>

                    <span>
                      Escala:{" "}
                      {indicador.escala}
                    </span>

                    <span>
                      Tipo:{" "}
                      {indicador.tipoDado}
                    </span>

                  </div>


                  <p>
                    {indicador.nota}
                  </p>

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          PROVÍNCIAS
          ===================================================== */}

      <section
        id="provincias"
        className="clima-section clima-section-soft"
      >

        <div className="clima-container">

          <div className="clima-section-heading">

            <div>

              <span className="clima-section-kicker">
                EXPLORADOR
              </span>

              <h2>
                Clima por província
              </h2>

            </div>

            <p>
              Selecione uma província para
              consultar a sua ficha climática.
            </p>

          </div>


          <div className="clima-explorador">

            <div className="clima-pesquisa">

              <span>
                ⌕
              </span>

              <input
                type="search"
                value={pesquisa}
                onChange={(event) =>
                  setPesquisa(
                    event.target.value
                  )
                }
                placeholder="Pesquisar província..."
                aria-label="Pesquisar província"
              />

            </div>


            <div className="clima-resultados">

              <span>
                {provinciasFiltradas.length}{" "}
                províncias
              </span>

            </div>

          </div>


          <div className="clima-provincias-grid">

            {provinciasFiltradas.map(
              (item) => (

                <button
                  key={item.id}
                  type="button"
                  className={`clima-provincia-card ${
                    provinciaSelecionada ===
                    item.provincia
                      ? "ativo"
                      : ""
                  }`}
                  onClick={() =>
                    selecionarProvincia(
                      item.provincia
                    )
                  }
                >

                  <span className="clima-provincia-icon">
                    ☁️
                  </span>


                  <span className="clima-provincia-info">

                    <strong>
                      {item.provincia}
                    </strong>

                    <small>
                      Consultar ficha climática
                    </small>

                  </span>


                  <span className="clima-provincia-arrow">
                    →
                  </span>

                </button>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          FICHA PROVINCIAL
          ===================================================== */}

      {provincia && (

        <section
          id="ficha-provincia"
          className="clima-section"
        >

          <div className="clima-container">

            <div className="clima-ficha">

              <div className="clima-ficha-header">

                <div>

                  <span className="clima-section-kicker">
                    FICHA CLIMÁTICA
                  </span>

                  <h2>
                    {provincia.provincia}
                  </h2>

                </div>


                <button
                  type="button"
                  className="clima-fechar"
                  onClick={() =>
                    setProvinciaSelecionada(
                      null
                    )
                  }
                >
                  Fechar
                </button>

              </div>


              <div className="clima-ficha-grid">

                <article className="clima-ficha-main">

                  <h3>
                    Caracterização
                  </h3>


                  <p>
                    {provincia.descricao}
                  </p>


                  <p>
                    {
                      provincia
                        .caracterizacao
                        .descricao
                    }
                  </p>


                  {provincia
                    .caracterizacao
                    .implicacoesAgricolas && (

                    <div className="clima-nota-agricola">

                      <strong>
                        Agricultura
                      </strong>

                      <p>
                        {
                          provincia
                            .caracterizacao
                            .implicacoesAgricolas
                        }
                      </p>

                    </div>

                  )}

                </article>


                <aside className="clima-ficha-aside">

                  <div>

                    <span>
                      Escala principal
                    </span>

                    <strong>
                      {
                        provincia
                          .escalaPrincipal ??
                        "Subnacional"
                      }
                    </strong>

                  </div>


                  <div>

                    <span>
                      Confiança
                    </span>

                    <strong>
                      {
                        provincia
                          .nivelConfianca ??
                        "Não determinado"
                      }
                    </strong>

                  </div>


                  <div>

                    <span>
                      Fontes
                    </span>

                    <strong>
                      {
                        provincia
                          .fontes
                          ?.length ?? 0
                      }
                    </strong>

                  </div>

                </aside>

              </div>


              {provincia
                .caracterizacao
                .observacoes && (

                <div className="clima-observacoes">

                  <strong>
                    Observação metodológica
                  </strong>

                  <p>
                    {
                      provincia
                        .caracterizacao
                        .observacoes
                    }
                  </p>

                </div>

              )}

            </div>

          </div>

        </section>

      )}


      {/* =====================================================
          AGRICULTURA
          ===================================================== */}

      <section className="clima-section">

        <div className="clima-container">

          <div className="clima-agricultura">

            <div>

              <span className="clima-section-kicker">
                CLIMA + AGRICULTURA
              </span>

              <h2>
                O clima como informação para
                o campo angolano
              </h2>

              <p>
                A análise climática deve ser
                combinada com solos, água,
                culturas, altitude, relevo e
                sistemas de produção.
              </p>

            </div>


            <div className="clima-agricultura-items">

              <div>

                <span>
                  01
                </span>

                <strong>
                  Calendário agrícola
                </strong>

                <p>
                  Apoio à interpretação da
                  época de início e fim das
                  chuvas.
                </p>

              </div>


              <div>

                <span>
                  02
                </span>

                <strong>
                  Gestão da água
                </strong>

                <p>
                  Informação climática para
                  apoiar decisões de rega e
                  conservação da água.
                </p>

              </div>


              <div>

                <span>
                  03
                </span>

                <strong>
                  Risco climático
                </strong>

                <p>
                  Monitorização de extremos
                  e variabilidade climática.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROJEÇÕES
          ===================================================== */}

      <section
        className="clima-section clima-section-soft"
      >

        <div className="clima-container">

          <div className="clima-projecoes">

            <div>

              <span className="clima-section-kicker">
                FUTURO
              </span>

              <h2>
                Projeções climáticas
              </h2>

              <p>
                O AGROINOVA poderá apresentar
                projeções CMIP6 para diferentes
                cenários e períodos futuros.
              </p>

            </div>


            <div className="clima-projecao-badge">

              <strong>
                CMIP6
              </strong>

              <span>
                Dados de projeção
              </span>

              <small>
                Não representam previsões
                determinísticas.
              </small>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FONTES FINAIS
          ===================================================== */}

      <section
        id="fontes-finais"
        className="clima-section clima-section-final"
      >

        <div className="clima-container">

          <div className="clima-final-card">

            <span className="clima-section-kicker">
              AGROINOVA ANGOLA
            </span>

            <h2>
              Dados climáticos com origem
              identificada
            </h2>

            <p>
              O objetivo é disponibilizar
              informação climática útil para
              agricultores, técnicos,
              investigadores, estudantes e
              decisores, mantendo sempre a
              identificação da fonte, período,
              unidade e escala do dado.
            </p>


            <div className="clima-final-links">

              <Link href="/solos">
                ← Consultar Solos
              </Link>

              <Link href="/dados">
                Consultar Dados →
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}


/* =========================================================
   ÍCONES DAS VARIÁVEIS CLIMÁTICAS
   ========================================================= */

function obterIconeVariavel(
  id: string
) {
  switch (id) {

    case "pr":
      return "🌧️";

    case "tas":
      return "🌡️";

    case "tasmax":
      return "☀️";

    case "tasmin":
      return "❄️";

    case "rx1day":
      return "🌧️";

    case "rx5day":
      return "⛈️";

    case "txx":
      return "🔥";

    case "tnn":
      return "🥶";

    case "tr":
      return "🌙";

    case "fd":
      return "❄️";

    default:
      return "🌦️";
  }
}