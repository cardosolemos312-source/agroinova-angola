"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { dadosPesca, fontesPesca } from "@/data/pesca/dados";

export default function PescaPage() {
  const [pesquisa, setPesquisa] = useState("");
  const [categoria, setCategoria] = useState("Todos");
  const [ambiente, setAmbiente] = useState("Todos");
  const [ano, setAno] = useState("Todos");
  const [fonte, setFonte] = useState("Todos");

  const resultados = useMemo(() => {
    const termo = pesquisa.trim().toLowerCase();

    return dadosPesca.filter((item) => {
      const correspondePesquisa =
        !termo ||
        item.indicador.toLowerCase().includes(termo) ||
        item.categoria.toLowerCase().includes(termo) ||
        item.ambiente?.toLowerCase().includes(termo) ||
        item.especie?.toLowerCase().includes(termo) ||
        item.instituicao.toLowerCase().includes(termo) ||
        item.documento.toLowerCase().includes(termo);

      const correspondeCategoria =
        categoria === "Todos" || item.categoria === categoria;

      const correspondeAmbiente =
        ambiente === "Todos" || item.ambiente === ambiente;

      const correspondeAno =
        ano === "Todos" || item.ano === ano;

      const correspondeFonte =
        fonte === "Todos" || item.fonte === fonte;

      return (
        correspondePesquisa &&
        correspondeCategoria &&
        correspondeAmbiente &&
        correspondeAno &&
        correspondeFonte
      );
    });
  }, [pesquisa, categoria, ambiente, ano, fonte]);

  const producaoTotal =
    dadosPesca.find(
      (item) => item.id === "producao-total"
    )?.valor ?? 0;

  const exploradores =
    dadosPesca.find(
      (item) => item.id === "exploradores-piscatorios"
    )?.valor ?? 0;

  const producaoComercializada =
    dadosPesca.find(
      (item) => item.id === "producao-comercializada"
    )?.valor ?? 0;

  const pescadoresMaritimos =
    dadosPesca.find(
      (item) => item.id === "pescadores-maritimos"
    )?.valor ?? 0;

  const categorias = [
    "Todos",
    ...Array.from(
      new Set(dadosPesca.map((item) => item.categoria))
    ),
  ];

  const ambientes = [
    "Todos",
    ...Array.from(
      new Set(
        dadosPesca
          .map((item) => item.ambiente)
          .filter(Boolean) as string[]
      )
    ),
  ];

  const anos = [
    "Todos",
    ...Array.from(
      new Set(dadosPesca.map((item) => item.ano))
    ),
  ];

  const fontes = [
    "Todos",
    ...Array.from(
      new Set(dadosPesca.map((item) => item.fonte))
    ),
  ];

  function limparFiltros() {
    setPesquisa("");
    setCategoria("Todos");
    setAmbiente("Todos");
    setAno("Todos");
    setFonte("Todos");
  }

  function formatarNumero(valor: number) {
    return new Intl.NumberFormat("pt-PT").format(valor);
  }

  function copiarReferencia(referencia: string) {
    navigator.clipboard.writeText(referencia);
  }

  return (
    <main className="pesca-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="pesca-hero">
        <div className="pesca-container">

          <span className="pesca-kicker">
            AGROINOVA ANGOLA · PESCA
          </span>

          <h1>
            Pesca e Recursos Aquáticos
          </h1>

          <p className="pesca-hero-text">
            Base de conhecimento, dados estatísticos e
            fontes documentais sobre a pesca e os recursos
            aquáticos de Angola.
          </p>

          <div className="pesca-pesquisa-principal">

            <span>⌕</span>

            <input
              type="search"
              value={pesquisa}
              onChange={(e) =>
                setPesquisa(e.target.value)
              }
              placeholder="Pesquisar pesca, espécies, produção, aquicultura..."
              aria-label="Pesquisar na base de conhecimento da pesca"
            />

            {pesquisa && (
              <button
                type="button"
                onClick={() => setPesquisa("")}
                aria-label="Limpar pesquisa"
              >
                ×
              </button>
            )}

          </div>

          <p className="pesca-pesquisa-ajuda">
            Pesquise por indicador, espécie, ambiente,
            categoria ou instituição.
          </p>

        </div>
      </section>


      {/* =====================================================
          INDICADORES
          ===================================================== */}

      <section className="pesca-indicadores">
        <div className="pesca-container">

          <div className="pesca-section-heading">

            <div>
              <span className="pesca-label">
                DADOS OFICIAIS
              </span>

              <h2>
                Panorama da pesca em Angola
              </h2>
            </div>

            <span className="pesca-status">
              ICAPP 2024/2025 · INE
            </span>

          </div>


          <div className="pesca-indicadores-grid">

            <div className="pesca-indicador destaque">

              <span>
                PRODUÇÃO
              </span>

              <strong>
                {formatarNumero(producaoTotal)}
              </strong>

              <p>
                toneladas de produção total
              </p>

            </div>


            <div className="pesca-indicador destaque">

              <span>
                ACTIVIDADE
              </span>

              <strong>
                {formatarNumero(exploradores)}
              </strong>

              <p>
                exploradores da actividade piscatória
              </p>

            </div>


            <div className="pesca-indicador">

              <span>
                COMERCIALIZAÇÃO
              </span>

              <strong>
                {formatarNumero(producaoComercializada)}
              </strong>

              <p>
                toneladas comercializadas
              </p>

            </div>


            <div className="pesca-indicador">

              <span>
                ÁGUAS MARÍTIMAS
              </span>

              <strong>
                {formatarNumero(pescadoresMaritimos)}
              </strong>

              <p>
                pescadores em águas marítimas
              </p>

            </div>

          </div>


          <div className="pesca-fonte-box">

            <strong>
              Fonte dos indicadores
            </strong>

            <span>
              Instituto Nacional de Estatística —
              Perfil Agro-Pecuário e Pescas em Angola
              (ICAPP 2024/2025).
            </span>

            <a
              href="https://www.ine.gov.ao/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar fonte oficial →
            </a>

          </div>

        </div>
      </section>


      {/* =====================================================
          ESPÉCIES
          ===================================================== */}

      <section className="pesca-especies-destaque">

        <div className="pesca-container">

          <div className="pesca-especies-destaque-conteudo">

            <div>

              <span className="pesca-label">
                BASE DE CONHECIMENTO
              </span>

              <h2>
                Explore as espécies de peixes de Angola
              </h2>

              <p>
                Consulte uma base organizada de espécies
                associadas à pesca marítima, pesca
                continental e aquicultura. Pesquise por
                nome, grupo ou ambiente e consulte os
                dados estatísticos e fontes disponíveis.
              </p>

            </div>

            <Link
              href="/pesca/especies"
              className="pesca-especies-destaque-botao"
            >
              Explorar espécies →
            </Link>

          </div>


          <div className="pesca-especies-mini-grid">

            <Link href="/pesca/especies">
              <span>🐟</span>
              <strong>Cacusso</strong>
              <small>
                Águas continentais
              </small>
            </Link>

            <Link href="/pesca/especies">
              <span>🐟</span>
              <strong>Bagre</strong>
              <small>
                Águas continentais
              </small>
            </Link>

            <Link href="/pesca/especies">
              <span>🐟</span>
              <strong>Sardinha</strong>
              <small>
                Águas marítimas
              </small>
            </Link>

            <Link href="/pesca/especies">
              <span>🐟</span>
              <strong>Carapau</strong>
              <small>
                Águas marítimas
              </small>
            </Link>

            <Link href="/pesca/especies">
              <span>🐟</span>
              <strong>Cachucho</strong>
              <small>
                Águas marítimas
              </small>
            </Link>

            <Link href="/pesca/especies">
              <span>🐟</span>
              <strong>Corvina</strong>
              <small>
                Águas marítimas
              </small>
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          PESQUISA E FILTROS
          ===================================================== */}

      <section className="pesca-base">

        <div className="pesca-container">

          <div className="pesca-section-heading">

            <div>

              <span className="pesca-label">
                BASE DE CONHECIMENTO
              </span>

              <h2>
                Pesquisar dados da pesca
              </h2>

            </div>

            <span className="pesca-resultados-count">
              {resultados.length} resultado
              {resultados.length === 1
                ? ""
                : "s"}
            </span>

          </div>


          <div className="pesca-filtros">

            <div className="pesca-filtro pesquisa-filtro">

              <label htmlFor="pesquisa">
                Pesquisar
              </label>

              <input
                id="pesquisa"
                type="search"
                value={pesquisa}
                onChange={(e) =>
                  setPesquisa(e.target.value)
                }
                placeholder="Ex.: cacusso, produção..."
              />

            </div>


            <div className="pesca-filtro">

              <label htmlFor="categoria">
                Categoria
              </label>

              <select
                id="categoria"
                value={categoria}
                onChange={(e) =>
                  setCategoria(e.target.value)
                }
              >
                {categorias.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>

            </div>


            <div className="pesca-filtro">

              <label htmlFor="ambiente">
                Ambiente
              </label>

              <select
                id="ambiente"
                value={ambiente}
                onChange={(e) =>
                  setAmbiente(e.target.value)
                }
              >
                {ambientes.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>

            </div>


            <div className="pesca-filtro">

              <label htmlFor="ano">
                Período
              </label>

              <select
                id="ano"
                value={ano}
                onChange={(e) =>
                  setAno(e.target.value)
                }
              >
                {anos.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>

            </div>


            <div className="pesca-filtro">

              <label htmlFor="fonte">
                Fonte
              </label>

              <select
                id="fonte"
                value={fonte}
                onChange={(e) =>
                  setFonte(e.target.value)
                }
              >
                {fontes.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>

            </div>


            <button
              type="button"
              className="pesca-limpar"
              onClick={limparFiltros}
            >
              Limpar filtros
            </button>

          </div>


          {/* RESULTADOS */}

          <div className="pesca-resultados">

            {resultados.length === 0 ? (

              <div className="pesca-sem-resultados">

                <strong>
                  Nenhum resultado encontrado.
                </strong>

                <p>
                  Tente alterar os termos da pesquisa
                  ou limpar os filtros.
                </p>

                <button
                  type="button"
                  onClick={limparFiltros}
                >
                  Limpar filtros
                </button>

              </div>

            ) : (

              resultados.map((item) => (

                <article
                  className="pesca-resultado"
                  key={item.id}
                >

                  <div className="pesca-resultado-topo">

                    <div>

                      <span className="pesca-resultado-categoria">
                        {item.categoria}
                      </span>

                      <h3>
                        {item.indicador}
                      </h3>

                    </div>


                    <div className="pesca-resultado-valor">

                      <strong>
                        {formatarNumero(item.valor)}
                      </strong>

                      <span>
                        {item.unidade}
                      </span>

                    </div>

                  </div>


                  <div className="pesca-resultado-meta">

                    <span>
                      <b>Período:</b>{" "}
                      {item.ano}
                    </span>

                    {item.ambiente && (
                      <span>
                        <b>Ambiente:</b>{" "}
                        {item.ambiente}
                      </span>
                    )}

                    {item.especie && (
                      <span>
                        <b>Espécie:</b>{" "}
                        {item.especie}
                      </span>
                    )}

                  </div>


                  <div className="pesca-resultado-fonte">

                    <div>

                      <span>
                        FONTE
                      </span>

                      <strong>
                        {item.instituicao}
                      </strong>

                      <p>
                        {item.documento}
                      </p>

                    </div>


                    <div className="pesca-resultado-acoes">

                      <button
                        type="button"
                        onClick={() =>
                          copiarReferencia(
                            item.referencia
                          )
                        }
                      >
                        📋 Copiar APA 7
                      </button>

                      <a
                        href={item.urlFonte}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Abrir fonte →
                      </a>

                    </div>

                  </div>

                </article>

              ))

            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          DOCUMENTOS
          ===================================================== */}

      <section className="pesca-documentos">

        <div className="pesca-container">

          <div className="pesca-section-heading">

            <div>

              <span className="pesca-label">
                FONTES DOCUMENTAIS
              </span>

              <h2>
                Documentos de referência
              </h2>

            </div>

          </div>


          <div className="pesca-documentos-grid">

            {fontesPesca.map((fonte) => (

              <article
                className="pesca-documento-card"
                key={fonte.id}
              >

                <span className="pesca-documento-tipo">
                  {fonte.tipo}
                </span>

                <h3>
                  {fonte.titulo}
                </h3>

                <p>
                  {fonte.descricao}
                </p>

                <div className="pesca-documento-meta">

                  <strong>
                    {fonte.instituicao}
                  </strong>

                  <span>
                    {fonte.ano}
                  </span>

                </div>

                <a
                  href={fonte.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultar documento →
                </a>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          RECURSOS ACADÉMICOS
          ===================================================== */}

      <section className="pesca-academia">

        <div className="pesca-container">

          <span className="pesca-label">
            PARA ESTUDANTES E INVESTIGADORES
          </span>

          <h2>
            Informação preparada para investigação
          </h2>

          <p>
            A AGROINOVA organiza dados e documentos com
            indicação da fonte, período, unidade e
            referência bibliográfica, facilitando a
            consulta para trabalhos académicos e
            investigação.
          </p>


          <div className="pesca-academia-links">

            <Link href="/biblioteca">
              📚 Biblioteca AGROINOVA
            </Link>

            <Link href="/investigacao">
              🔬 Investigação
            </Link>

            <Link href="/dados">
              📊 Dados
            </Link>

            <Link href="/pesca/especies">
              🐟 Espécies de peixes
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}