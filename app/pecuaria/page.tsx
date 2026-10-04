
"use client";

import Link from "next/link";
import { useState } from "react";

type Especie =
  | "bovinos"
  | "suinos"
  | "caprinos"
  | "ovinos"
  | "aves"
  | "equinos"
  | "asininos"
  | "apicultura";

const especies: {
  id: Especie;
  nome: string;
  icone: string;
  descricao: string;
}[] = [
  {
    id: "bovinos",
    nome: "Bovinos",
    icone: "🐄",
    descricao:
      "Criação para produção de carne, leite e reprodução.",
  },
  {
    id: "suinos",
    nome: "Suínos",
    icone: "🐖",
    descricao:
      "Orientação para produção, alimentação e maneio de suínos.",
  },
  {
    id: "caprinos",
    nome: "Caprinos",
    icone: "🐐",
    descricao:
      "Informação sobre criação, alimentação e aproveitamento.",
  },
  {
    id: "ovinos",
    nome: "Ovinos",
    icone: "🐑",
    descricao:
      "Orientação para criação e produção de ovinos.",
  },
  {
    id: "aves",
    nome: "Aves",
    icone: "🐔",
    descricao:
      "Produção de frangos, galinhas poedeiras e outras aves.",
  },
  {
    id: "equinos",
    nome: "Equinos",
    icone: "🐎",
    descricao:
      "Informação sobre criação, maneio e saúde dos equinos.",
  },
  {
    id: "asininos",
    nome: "Asininos",
    icone: "🫏",
    descricao:
      "Orientação para criação e utilização de asininos.",
  },
  {
    id: "apicultura",
    nome: "Apicultura",
    icone: "🐝",
    descricao:
      "Criação de abelhas e produção de mel.",
  },
];

const provincias = [
  "Todas as províncias",
  "Bengo",
  "Benguela",
  "Bié",
  "Cabinda",
  "Cuando",
  "Cuanza Norte",
  "Cuanza Sul",
  "Cubango",
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

const finalidades = [
  {
    id: "leite",
    nome: "Produção de leite",
    icone: "🥛",
    descricao:
      "Orientação para sistemas destinados à produção de leite.",
  },
  {
    id: "carne",
    nome: "Produção de carne",
    icone: "🥩",
    descricao:
      "Orientação para sistemas destinados à produção de carne.",
  },
  {
    id: "dupla",
    nome: "Leite e carne",
    icone: "🥛🥩",
    descricao:
      "Sistemas de dupla aptidão.",
  },
  {
    id: "reproducao",
    nome: "Reprodução",
    icone: "🐄",
    descricao:
      "Informação sobre reprodução e melhoramento do efectivo.",
  },
];

export default function PecuariaPage() {
  const [especieSelecionada, setEspecieSelecionada] =
    useState<Especie>("bovinos");

  const [provincia, setProvincia] =
    useState("Todas as províncias");

  const [finalidade, setFinalidade] =
    useState("leite");

  const especieAtual = especies.find(
    (item) => item.id === especieSelecionada
  );

  const parametrosOrientacao =
    `?provincia=${encodeURIComponent(
      provincia
    )}&finalidade=${encodeURIComponent(
      finalidade
    )}`;

  const linkOrientacoes =
    `/pecuaria/bovinos/orientacoes${parametrosOrientacao}`;

  const linkOrientacao = (tema: string) =>
    `/pecuaria/bovinos/orientacoes/${tema}${parametrosOrientacao}`;

  return (
    <main className="pecuaria-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="pecuaria-hero">

        <div className="container">

          <span className="pecuaria-kicker">
            AGROINOVA ANGOLA · PECUÁRIA
          </span>

          <h1>
            Produza melhor.
            <br />
            Decida com conhecimento.
          </h1>

          <p>
            Um painel de orientação para produtores
            pecuários em Angola, com informação sobre
            espécies, raças, alimentação, maneio,
            sanidade, reprodução e apoio técnico.
          </p>

          <div className="pecuaria-hero-acoes">

            <Link
              href={linkOrientacoes}
              className="pecuaria-hero-btn principal"
            >
              Começar orientação
            </Link>

            <a
              href="#apoio"
              className="pecuaria-hero-btn secundario"
            >
              Solicitar apoio técnico
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          ESCOLHA DA ESPÉCIE
      ===================================================== */}

      <section className="pecuaria-especies-section">

        <div className="container">

          <div className="pecuaria-section-heading">

            <span>
              01 · ESCOLHA A ESPÉCIE
            </span>

            <h2>
              O que pretende criar?
            </h2>

            <p>
              Seleccione a espécie para consultar
              orientação específica de produção.
            </p>

          </div>

          <div className="pecuaria-especies-selector">

            {especies.map((especie) => (

              <button
                key={especie.id}
                type="button"
                className={
                  especieSelecionada === especie.id
                    ? "pecuaria-especie-selector ativa"
                    : "pecuaria-especie-selector"
                }
                onClick={() =>
                  setEspecieSelecionada(
                    especie.id
                  )
                }
              >

                <span className="pecuaria-selector-icon">
                  {especie.icone}
                </span>

                <strong>
                  {especie.nome}
                </strong>

                <small>
                  {especie.descricao}
                </small>

              </button>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PAINEL DE ORIENTAÇÃO
      ===================================================== */}

      <section
        id="painel"
        className="pecuaria-painel"
      >

        <div className="container">

          <div className="pecuaria-painel-header">

            <div>

              <span>
                02 · PAINEL DE ORIENTAÇÃO
              </span>

              <h2>
                {especieAtual?.icone}{" "}
                {especieAtual?.nome}
              </h2>

              <p>
                Personalize a orientação de acordo
                com a finalidade e a região onde
                pretende desenvolver a actividade.
              </p>

            </div>

            <div className="pecuaria-painel-status">

              <span>
                AGROINOVA
              </span>

              <strong>
                Orientação técnica
              </strong>

            </div>

          </div>


          {/* =================================================
              LOCALIZAÇÃO
          ================================================= */}

          <div className="pecuaria-configuracao">

            <div className="pecuaria-config-card">

              <span className="pecuaria-config-numero">
                01
              </span>

              <div>

                <span>
                  LOCALIZAÇÃO
                </span>

                <h3>
                  Onde pretende criar?
                </h3>

                <p>
                  A região influencia o sistema de
                  produção, disponibilidade de água,
                  alimentação e adaptação dos animais.
                </p>

                <select
                  value={provincia}
                  onChange={(evento) =>
                    setProvincia(
                      evento.target.value
                    )
                  }
                >

                  {provincias.map(
                    (nome) => (
                      <option
                        key={nome}
                        value={nome}
                      >
                        {nome}
                      </option>
                    )
                  )}

                </select>

              </div>

            </div>


            {/* =================================================
                FINALIDADE
            ================================================= */}

            <div className="pecuaria-config-card">

              <span className="pecuaria-config-numero">
                02
              </span>

              <div>

                <span>
                  OBJECTIVO
                </span>

                <h3>
                  O que pretende produzir?
                </h3>

                <p>
                  Escolha a finalidade principal
                  da sua exploração.
                </p>

                <div className="pecuaria-finalidades">

                  {finalidades.map(
                    (item) => (

                      <button
                        key={item.id}
                        type="button"
                        className={
                          finalidade === item.id
                            ? "pecuaria-finalidade ativa"
                            : "pecuaria-finalidade"
                        }
                        onClick={() =>
                          setFinalidade(
                            item.id
                          )
                        }
                      >

                        <span>
                          {item.icone}
                        </span>

                        <strong>
                          {item.nome}
                        </strong>

                      </button>

                    )
                  )}

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              RESULTADO
          ================================================= */}

          <div className="pecuaria-orientacao">

            <div className="pecuaria-orientacao-header">

              <div>

                <span>
                  ORIENTAÇÃO INICIAL
                </span>

                <h3>
                  O que deve considerar
                </h3>

              </div>

              <span className="pecuaria-orientacao-local">
                📍 {provincia}
              </span>

            </div>


            <div className="pecuaria-orientacao-grid">

              <article>

                <span>
                  🧬
                </span>

                <h4>
                  Raça
                </h4>

                <p>
                  Consulte características,
                  finalidade produtiva e
                  requisitos das diferentes
                  raças antes de escolher.
                </p>

                <Link
                  href={linkOrientacao("racas")}
                  className="pecuaria-orientacao-link"
                >
                  Ver raças →
                </Link>

              </article>


              <article>

                <span>
                  🌱
                </span>

                <h4>
                  Alimentação
                </h4>

                <p>
                  Avalie pastagens, forragens,
                  água e disponibilidade de
                  alimentos na região.
                </p>

                <Link
                  href={linkOrientacao("alimentacao")}
                  className="pecuaria-orientacao-link"
                >
                  Ver orientação →
                </Link>

              </article>


              <article>

                <span>
                  🏠
                </span>

                <h4>
                  Instalações
                </h4>

                <p>
                  As instalações devem considerar
                  clima, espécie, sistema de criação
                  e bem-estar animal.
                </p>

                <Link
                  href={linkOrientacao("instalacoes")}
                  className="pecuaria-orientacao-link"
                >
                  Ver orientação →
                </Link>

              </article>


              <article>

                <span>
                  🩺
                </span>

                <h4>
                  Sanidade
                </h4>

                <p>
                  A prevenção e o acompanhamento
                  veterinário são fundamentais para
                  a saúde do efectivo.
                </p>

                <Link
                  href={linkOrientacao("sanidade")}
                  className="pecuaria-orientacao-link"
                >
                  Ver cuidados →
                </Link>

              </article>


              <article>

                <span>
                  🔄
                </span>

                <h4>
                  Reprodução
                </h4>

                <p>
                  Conheça práticas de reprodução,
                  selecção e gestão do efectivo.
                </p>

                <Link
                  href={linkOrientacao("reproducao")}
                  className="pecuaria-orientacao-link"
                >
                  Ver orientação →
                </Link>

              </article>


              <article>

                <span>
                  💧
                </span>

                <h4>
                  Água
                </h4>

                <p>
                  Planeie uma fonte segura e
                  suficiente de água para os animais.
                </p>

                <Link
                  href={linkOrientacao("agua")}
                  className="pecuaria-orientacao-link"
                >
                  Ver orientação →
                </Link>

              </article>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          RAÇAS
      ===================================================== */}

      <section className="pecuaria-racas">

        <div className="container">

          <div className="pecuaria-section-heading">

            <span>
              03 · RAÇAS
            </span>

            <h2>
              Encontre a raça adequada
            </h2>

            <p>
              Compare características das raças
              de acordo com a finalidade produtiva
              e as condições de criação.
            </p>

          </div>


          <div className="pecuaria-racas-aviso">

            <span>
              💡
            </span>

            <div>

              <strong>
                A raça certa depende do sistema de produção.
              </strong>

              <p>
                A AGROINOVA não apresenta uma raça
                como universalmente "melhor". A orientação
                deverá considerar finalidade, clima,
                alimentação, maneio, disponibilidade
                de água e condições da exploração.
              </p>

            </div>

          </div>


          <div className="pecuaria-racas-grid">

            <article className="pecuaria-raca-card">

              <span>
                🥛 LEITE
              </span>

              <h3>
                Raças leiteiras
              </h3>

              <p>
                Compare raças destinadas à produção
                leiteira e conheça os seus requisitos
                de maneio.
              </p>

              <Link
                href={linkOrientacao("racas")}
                className="pecuaria-orientacao-link"
              >
                Explorar raças →
              </Link>

            </article>


            <article className="pecuaria-raca-card">

              <span>
                🥩 CARNE
              </span>

              <h3>
                Raças de corte
              </h3>

              <p>
                Conheça características das raças
                utilizadas para produção de carne.
              </p>

              <Link
                href={linkOrientacao("racas")}
                className="pecuaria-orientacao-link"
              >
                Explorar raças →
              </Link>

            </article>


            <article className="pecuaria-raca-card">

              <span>
                🥛🥩 DUPLA APTIDÃO
              </span>

              <h3>
                Leite e carne
              </h3>

              <p>
                Raças e sistemas destinados a
                combinar diferentes objectivos
                produtivos.
              </p>

              <Link
                href={linkOrientacao("racas")}
                className="pecuaria-orientacao-link"
              >
                Explorar raças →
              </Link>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          GUIA DE CRIAÇÃO
      ===================================================== */}

      <section className="pecuaria-guia">

        <div className="container">

          <div className="pecuaria-section-heading">

            <span>
              04 · GUIA DE CRIAÇÃO
            </span>

            <h2>
              Aprenda passo a passo
            </h2>

            <p>
              A futura biblioteca técnica da AGROINOVA
              reunirá orientações verificadas para
              diferentes sistemas de produção.
            </p>

          </div>


          <div className="pecuaria-guia-grid">

            <article>
              <strong>
                01
              </strong>

              <h3>
                Preparar a exploração
              </h3>

              <p>
                Planeamento, localização,
                instalações e recursos.
              </p>
            </article>


            <article>
              <strong>
                02
              </strong>

              <h3>
                Escolher os animais
              </h3>

              <p>
                Raça, finalidade, origem e
                características dos animais.
              </p>
            </article>


            <article>
              <strong>
                03
              </strong>

              <h3>
                Alimentar correctamente
              </h3>

              <p>
                Água, pastagem, forragem e
                suplementação adequada.
              </p>
            </article>


            <article>
              <strong>
                04
              </strong>

              <h3>
                Proteger a saúde
              </h3>

              <p>
                Prevenção, biossegurança,
                vacinação e acompanhamento.
              </p>
            </article>


            <article>
              <strong>
                05
              </strong>

              <h3>
                Gerir a reprodução
              </h3>

              <p>
                Reprodução, selecção e
                melhoramento do efectivo.
              </p>
            </article>


            <article>
              <strong>
                06
              </strong>

              <h3>
                Comercializar
              </h3>

              <p>
                Organização da produção,
                mercado e comercialização.
              </p>
            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          APOIO TÉCNICO
      ===================================================== */}

      <section
        id="apoio"
        className="pecuaria-apoio"
      >

        <div className="container">

          <div className="pecuaria-apoio-content">

            <div>

              <span>
                05 · APOIO AO PRODUTOR
              </span>

              <h2>
                Precisa de ajuda técnica?
              </h2>

              <p>
                A AGROINOVA poderá ligar produtores
                a profissionais, serviços veterinários,
                técnicos, instituições e fornecedores
                verificados.
              </p>

            </div>


            <div className="pecuaria-apoio-acoes">

              <button
                type="button"
                className="pecuaria-apoio-btn principal"
              >
                🩺 Solicitar apoio técnico
              </button>

              <button
                type="button"
                className="pecuaria-apoio-btn"
              >
                👨‍⚕️ Encontrar veterinário
              </button>

              <button
                type="button"
                className="pecuaria-apoio-btn"
              >
                🏪 Encontrar loja veterinária
              </button>

              <button
                type="button"
                className="pecuaria-apoio-btn"
              >
                👨‍🌾 Encontrar técnico
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DIRECTÓRIO
      ===================================================== */}

      <section className="pecuaria-directorio">

        <div className="container">

          <div className="pecuaria-section-heading">

            <span>
              06 · DIRECTÓRIO PECUÁRIO
            </span>

            <h2>
              Encontre serviços perto de si
            </h2>

            <p>
              Futuramente poderá pesquisar profissionais,
              clínicas, lojas, fornecedores e outros
              serviços ligados à actividade pecuária.
            </p>

          </div>


          <div className="pecuaria-directorio-grid">

            <article>

              <div>
                🩺
              </div>

              <h3>
                Veterinários
              </h3>

              <p>
                Profissionais e serviços veterinários
                verificados.
              </p>

              <button type="button">
                Procurar →
              </button>

            </article>


            <article>

              <div>
                🏪
              </div>

              <h3>
                Lojas veterinárias
              </h3>

              <p>
                Medicamentos, equipamentos,
                rações e outros produtos.
              </p>

              <button type="button">
                Procurar →
              </button>

            </article>


            <article>

              <div>
                🌾
              </div>

              <h3>
                Fornecedores
              </h3>

              <p>
                Rações, sementes, equipamentos
                e soluções para produtores.
              </p>

              <button type="button">
                Procurar →
              </button>

            </article>


            <article>

              <div>
                👨‍🌾
              </div>

              <h3>
                Técnicos
              </h3>

              <p>
                Técnicos e especialistas ligados
                à produção pecuária.
              </p>

              <button type="button">
                Procurar →
              </button>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          DADOS OFICIAIS
      ===================================================== */}

      <section className="pecuaria-dados-link">

        <div className="container">

          <div>

            <span>
              DADOS OFICIAIS
            </span>

            <h2>
              Quer consultar os números da pecuária?
            </h2>

            <p>
              Consulte indicadores, gráficos, rankings
              e tabelas provenientes de fontes oficiais
              no Centro Nacional de Dados da AGROINOVA.
            </p>

          </div>


          <Link
            href="/dados"
            className="pecuaria-dados-btn"
          >
            Explorar dados da Pecuária →
          </Link>

        </div>

      </section>


      {/* =====================================================
          AVISO
      ===================================================== */}

      <section className="pecuaria-aviso">

        <div className="container">

          <strong>
            Informação importante
          </strong>

          <p>
            As orientações disponibilizadas pela
            AGROINOVA ANGOLA têm finalidade informativa
            e educativa. Questões de diagnóstico,
            tratamento, vacinação, medicamentos,
            reprodução ou outras intervenções clínicas
            devem ser avaliadas por profissionais
            habilitados.
          </p>

        </div>

      </section>

    </main>
  );
}