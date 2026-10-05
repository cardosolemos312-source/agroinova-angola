"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { dadosPesca } from "@/data/pesca/dados";

interface Especie {
  id: string;
  nome: string;
  nomeCientifico: string;
  grupo: string;
  ambiente: string;
  descricao: string;
  importancia: string;
  aquicultura: boolean;
  dadoId: string;
  fonteDescricao: string;
}

const especies: Especie[] = [
  {
    id: "cacusso",
    nome: "Cacusso",
    nomeCientifico:
      "Nome comum aplicado a diferentes tilápias; Oreochromis niloticus é uma das espécies identificadas em fontes sobre Angola.",
    grupo: "Ciclídeos",
    ambiente: "Águas continentais",
    descricao:
      "Designação comum utilizada em Angola para tilápias de água doce. A identificação científica deve ser feita de acordo com a fonte e a população analisada.",
    importancia:
      "Tem importância na pesca continental e na aquicultura, estando associado ao consumo e à produção de pescado de água doce.",
    aquicultura: true,
    dadoId: "cacusso",
    fonteDescricao:
      "Fontes FAO e documentação angolana sobre pesca e aquicultura.",
  },
  {
    id: "bagre",
    nome: "Bagre",
    nomeCientifico:
      "Clarias sp. / Arius spp. — a identificação depende do ambiente e da fonte.",
    grupo: "Bagres",
    ambiente: "Águas continentais",
    descricao:
      "Nome comum utilizado para diferentes peixes do grupo dos bagres. A designação pode abranger espécies distintas.",
    importancia:
      "É um dos grupos de peixes associados à pesca continental angolana e também possui relevância para a aquicultura.",
    aquicultura: true,
    dadoId: "bagre",
    fonteDescricao:
      "Legislação e documentação técnica sobre os recursos biológicos aquáticos de Angola.",
  },
  {
    id: "sardinha",
    nome: "Sardinha",
    nomeCientifico:
      "O nome comum pode referir diferentes espécies de pequenos pelágicos; a identificação depende da fonte.",
    grupo: "Pequenos pelágicos",
    ambiente: "Águas marítimas",
    descricao:
      "Designação comercial e popular utilizada para peixes pelágicos de pequena dimensão capturados nas águas marítimas.",
    importancia:
      "Integra espécies de importância alimentar e comercial na actividade pesqueira marítima.",
    aquicultura: false,
    dadoId: "sardinha",
    fonteDescricao:
      "Fontes FAO sobre as espécies marinhas comerciais de Angola.",
  },
  {
    id: "cachucho",
    nome: "Cachucho",
    nomeCientifico:
      "Identificação científica deve ser apresentada de acordo com a espécie registada na fonte estatística.",
    grupo: "Peixes marinhos",
    ambiente: "Águas marítimas",
    descricao:
      "Peixe marinho registado entre as principais espécies de produção pesqueira de Angola.",
    importancia:
      "Apresenta importância para a produção e comercialização de pescado marinho.",
    aquicultura: false,
    dadoId: "cachucho",
    fonteDescricao:
      "Instituto Nacional de Estatística — ICAPP 2024/2025.",
  },
  {
    id: "carapau",
    nome: "Carapau",
    nomeCientifico:
      "Trachurus trecae e Trachurus capensis são espécies conhecidas como carapau nas águas de Angola.",
    grupo: "Carangídeos",
    ambiente: "Águas marítimas",
    descricao:
      "Peixe pelágico de grande importância na pesca marítima angolana. O nome carapau pode abranger mais de uma espécie.",
    importancia:
      "É um dos recursos pesqueiros de maior importância económica e alimentar em Angola.",
    aquicultura: false,
    dadoId: "carapau",
    fonteDescricao:
      "FAO e legislação angolana sobre a actividade pesqueira.",
  },
  {
    id: "corvina",
    nome: "Corvina",
    nomeCientifico:
      "O nome comum corvina pode corresponder a diferentes espécies; a identificação deve seguir a fonte utilizada.",
    grupo: "Peixes marinhos",
    ambiente: "Águas marítimas",
    descricao:
      "Nome comum utilizado para espécies de peixes marinhos registadas na actividade pesqueira angolana.",
    importancia:
      "É um recurso de interesse alimentar e comercial na pesca marítima.",
    aquicultura: false,
    dadoId: "corvina",
    fonteDescricao:
      "Instituto Nacional de Estatística — ICAPP 2024/2025 e legislação pesqueira.",
  },
];

export default function EspeciesPescaPage() {
  const [pesquisa, setPesquisa] = useState("");
  const [ambiente, setAmbiente] = useState("Todos");
  const [grupo, setGrupo] = useState("Todos");
  const [somenteAquicultura, setSomenteAquicultura] =
    useState(false);

  const resultados = useMemo(() => {
    const termo = pesquisa.trim().toLowerCase();

    return especies.filter((especie) => {
      const correspondePesquisa =
        !termo ||
        especie.nome.toLowerCase().includes(termo) ||
        especie.nomeCientifico.toLowerCase().includes(termo) ||
        especie.grupo.toLowerCase().includes(termo) ||
        especie.ambiente.toLowerCase().includes(termo) ||
        especie.descricao.toLowerCase().includes(termo);

      const correspondeAmbiente =
        ambiente === "Todos" ||
        especie.ambiente === ambiente;

      const correspondeGrupo =
        grupo === "Todos" ||
        especie.grupo === grupo;

      const correspondeAquicultura =
        !somenteAquicultura ||
        especie.aquicultura;

      return (
        correspondePesquisa &&
        correspondeAmbiente &&
        correspondeGrupo &&
        correspondeAquicultura
      );
    });
  }, [
    pesquisa,
    ambiente,
    grupo,
    somenteAquicultura,
  ]);

  const ambientes = [
    "Todos",
    ...Array.from(
      new Set(especies.map((item) => item.ambiente))
    ),
  ];

  const grupos = [
    "Todos",
    ...Array.from(
      new Set(especies.map((item) => item.grupo))
    ),
  ];

  function limparFiltros() {
    setPesquisa("");
    setAmbiente("Todos");
    setGrupo("Todos");
    setSomenteAquicultura(false);
  }

  function obterDado(especie: Especie) {
    return dadosPesca.find(
      (item) => item.id === especie.dadoId
    );
  }

  function formatarNumero(valor: number) {
    return new Intl.NumberFormat("pt-PT").format(valor);
  }

  function copiarInformacao(especie: Especie) {
    const dado = obterDado(especie);

    const texto = [
      `Espécie: ${especie.nome}`,
      `Nome científico: ${especie.nomeCientifico}`,
      `Grupo: ${especie.grupo}`,
      `Ambiente: ${especie.ambiente}`,
      `Descrição: ${especie.descricao}`,
      `Importância: ${especie.importancia}`,
      dado
        ? `Produção registada: ${formatarNumero(
            dado.valor
          )} ${dado.unidade} (${dado.ano})`
        : "",
      "",
      `Fonte: ${
        dado?.instituicao ??
        especie.fonteDescricao
      }`,
      dado?.documento ?? "",
      dado?.referencia ?? "",
    ]
      .filter(Boolean)
      .join("\n");

    navigator.clipboard.writeText(texto);
  }

  function copiarAPA(especie: Especie) {
    const dado = obterDado(especie);

    if (dado?.referencia) {
      navigator.clipboard.writeText(
        dado.referencia
      );
      return;
    }

    navigator.clipboard.writeText(
      especie.fonteDescricao
    );
  }

  return (
    <main className="pesca-especies-page">

      {/* HERO */}
      <section className="pesca-especies-hero">
        <div className="pesca-container">

          <div className="pesca-breadcrumb">
            <Link href="/pesca">
              Pesca
            </Link>

            <span>›</span>

            <strong>Espécies</strong>
          </div>

          <span className="pesca-kicker">
            AGROINOVA ANGOLA · RECURSOS AQUÁTICOS
          </span>

          <h1>
            Espécies de Peixes de Angola
          </h1>

          <p>
            Base de conhecimento sobre espécies e grupos
            de peixes associados à pesca continental,
            pesca marítima e aquicultura em Angola.
          </p>

          <div className="pesca-especies-pesquisa">

            <span>⌕</span>

            <input
              type="search"
              value={pesquisa}
              onChange={(e) =>
                setPesquisa(e.target.value)
              }
              placeholder="Pesquisar por peixe, grupo ou nome científico..."
            />

            {pesquisa && (
              <button
                type="button"
                onClick={() => setPesquisa("")}
              >
                ×
              </button>
            )}

          </div>

        </div>
      </section>

      {/* RESUMO */}
      <section className="pesca-especies-resumo">
        <div className="pesca-container">

          <div className="pesca-especies-resumo-grid">

            <div>
              <strong>
                {especies.length}
              </strong>

              <span>
                espécies/grupos catalogados
              </span>
            </div>

            <div>
              <strong>
                {
                  especies.filter(
                    (item) =>
                      item.ambiente ===
                      "Águas marítimas"
                  ).length
                }
              </strong>

              <span>
                associados às águas marítimas
              </span>
            </div>

            <div>
              <strong>
                {
                  especies.filter(
                    (item) =>
                      item.ambiente ===
                      "Águas continentais"
                  ).length
                }
              </strong>

              <span>
                associados às águas continentais
              </span>
            </div>

            <div>
              <strong>
                {
                  especies.filter(
                    (item) => item.aquicultura
                  ).length
                }
              </strong>

              <span>
                com relevância para aquicultura
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* FILTROS */}
      <section className="pesca-especies-base">
        <div className="pesca-container">

          <div className="pesca-section-heading">

            <div>
              <span className="pesca-label">
                BASE DE CONHECIMENTO
              </span>

              <h2>
                Explorar espécies
              </h2>
            </div>

            <span className="pesca-resultados-count">
              {resultados.length} resultado
              {resultados.length === 1
                ? ""
                : "s"}
            </span>

          </div>

          <div className="pesca-especies-filtros">

            <div>
              <label htmlFor="pesquisa-especies">
                Pesquisa
              </label>

              <input
                id="pesquisa-especies"
                type="search"
                value={pesquisa}
                onChange={(e) =>
                  setPesquisa(e.target.value)
                }
                placeholder="Ex.: carapau"
              />
            </div>

            <div>
              <label htmlFor="ambiente-especies">
                Ambiente
              </label>

              <select
                id="ambiente-especies"
                value={ambiente}
                onChange={(e) =>
                  setAmbiente(e.target.value)
                }
              >
                {ambientes.map((item) => (
                  <option key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="grupo-especies">
                Grupo
              </label>

              <select
                id="grupo-especies"
                value={grupo}
                onChange={(e) =>
                  setGrupo(e.target.value)
                }
              >
                {grupos.map((item) => (
                  <option key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <label className="pesca-checkbox">
              <input
                type="checkbox"
                checked={somenteAquicultura}
                onChange={(e) =>
                  setSomenteAquicultura(
                    e.target.checked
                  )
                }
              />

              <span>
                Apenas aquicultura
              </span>
            </label>

            <button
              type="button"
              onClick={limparFiltros}
              className="pesca-especies-limpar"
            >
              Limpar
            </button>

          </div>

          {/* CARTÕES */}
          <div className="pesca-especies-grid">

            {resultados.map((especie) => {
              const dado = obterDado(especie);

              return (
                <article
                  className="pesca-especie-card-grande"
                  key={especie.id}
                >

                  <div className="pesca-especie-card-topo">

                    <div className="pesca-especie-icone">
                      🐟
                    </div>

                    <div>

                      <span>
                        {especie.grupo}
                      </span>

                      <h3>
                        {especie.nome}
                      </h3>

                    </div>

                  </div>

                  <div className="pesca-especie-identificacao">

                    <span>
                      IDENTIFICAÇÃO
                    </span>

                    <p>
                      <em>
                        {especie.nomeCientifico}
                      </em>
                    </p>

                  </div>

                  <div className="pesca-especie-meta">

                    <span>
                      🌊 {especie.ambiente}
                    </span>

                    {especie.aquicultura && (
                      <span>
                        🧪 Aquicultura
                      </span>
                    )}

                  </div>

                  <p className="pesca-especie-descricao">
                    {especie.descricao}
                  </p>

                  <div className="pesca-especie-importancia">

                    <strong>
                      Importância
                    </strong>

                    <p>
                      {especie.importancia}
                    </p>

                  </div>

                  {dado && (
                    <div className="pesca-especie-dado">

                      <div>
                        <span>
                          PRODUÇÃO REGISTADA
                        </span>

                        <strong>
                          {formatarNumero(
                            dado.valor
                          )}
                        </strong>

                        <small>
                          {dado.unidade} ·{" "}
                          {dado.ano}
                        </small>
                      </div>

                    </div>
                  )}

                  <div className="pesca-especie-fonte">

                    <span>
                      FONTE
                    </span>

                    <strong>
                      {dado?.instituicao ??
                        especie.fonteDescricao}
                    </strong>

                    {dado?.documento && (
                      <p>
                        {dado.documento}
                      </p>
                    )}

                  </div>

                  <div className="pesca-especie-acoes">

                    <button
                      type="button"
                      onClick={() =>
                        copiarInformacao(
                          especie
                        )
                      }
                    >
                      📋 Copiar informação
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        copiarAPA(especie)
                      }
                    >
                      📚 APA 7
                    </button>

                  </div>

                </article>
              );
            })}

          </div>

          {resultados.length === 0 && (
            <div className="pesca-especies-vazio">

              <strong>
                Nenhuma espécie encontrada.
              </strong>

              <p>
                Altere os filtros ou faça uma nova
                pesquisa.
              </p>

              <button
                type="button"
                onClick={limparFiltros}
              >
                Limpar filtros
              </button>

            </div>
          )}

        </div>
      </section>

      {/* NOTA CIENTÍFICA */}
      <section className="pesca-especies-nota">
        <div className="pesca-container">

          <div className="pesca-especies-nota-box">

            <span className="pesca-label">
              RIGOR CIENTÍFICO
            </span>

            <h2>
              Nome comum não é necessariamente
              nome científico
            </h2>

            <p>
              Na pesca angolana, uma mesma designação
              popular pode ser utilizada para diferentes
              espécies. Por isso, a AGROINOVA não
              transforma automaticamente nomes populares
              em nomes científicos.
            </p>

            <p>
              Quando uma fonte oficial, científica ou
              técnica identifica a espécie, essa
              identificação é apresentada juntamente
              com a respectiva fonte.
            </p>

            <div className="pesca-especies-nota-links">

              <a
                href="https://www.fao.org/4/s0650p/s0650p00.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Guia FAO de espécies de Angola →
              </a>

              <a
                href="https://www.fao.org/fishery/docs/CDrom/aquaculture/I1129m/file/es/es_niletilapia.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ficha FAO — Oreochromis niloticus →
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* INVESTIGAÇÃO */}
      <section className="pesca-especies-academia">
        <div className="pesca-container">

          <span className="pesca-label">
            INVESTIGAÇÃO
          </span>

          <h2>
            Uma base para estudantes e investigadores
          </h2>

          <p>
            Esta área foi concebida para que o estudante
            possa encontrar informação organizada,
            consultar a fonte original, utilizar dados
            estatísticos e copiar referências para o seu
            trabalho académico.
          </p>

          <div className="pesca-especies-academia-links">

            <Link href="/biblioteca">
              📚 Biblioteca
            </Link>

            <Link href="/dados">
              📊 Dados estatísticos
            </Link>

            <Link href="/investigacao">
              🔬 Investigação
            </Link>

            <Link href="/pesca">
              🎣 Pesca
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}