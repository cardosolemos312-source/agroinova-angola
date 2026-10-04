"use client";

import { useMemo, useState } from "react";

type Finalidade =
  | "leite"
  | "carne"
  | "dupla"
  | "reproducao";

type Provincia =
  | "Todas"
  | "Bengo"
  | "Benguela"
  | "Bié"
  | "Cabinda"
  | "Cuando"
  | "Cuanza Norte"
  | "Cuanza Sul"
  | "Cubango"
  | "Cunene"
  | "Huambo"
  | "Huíla"
  | "Icolo e Bengo"
  | "Luanda"
  | "Lunda Norte"
  | "Lunda Sul"
  | "Malanje"
  | "Moxico"
  | "Moxico Leste"
  | "Namibe"
  | "Uíge"
  | "Zaire";

const provincias: Provincia[] = [
  "Todas",
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

const finalidades: {
  id: Finalidade;
  nome: string;
  descricao: string;
  icone: string;
}[] = [
  {
    id: "leite",
    nome: "Leite",
    descricao:
      "Priorizar produção leiteira.",
    icone: "🥛",
  },
  {
    id: "carne",
    nome: "Carne",
    descricao:
      "Priorizar produção de carne.",
    icone: "🥩",
  },
  {
    id: "dupla",
    nome: "Dupla aptidão",
    descricao:
      "Combinar leite e carne.",
    icone: "🥛🥩",
  },
  {
    id: "reproducao",
    nome: "Reprodução",
    descricao:
      "Melhoramento e reprodução.",
    icone: "🐄",
  },
];

const orientacoes = [
  {
    id: "raca",
    icone: "🧬",
    titulo: "Escolha da raça",
    texto:
      "A escolha deve considerar finalidade produtiva, adaptação às condições locais, alimentação disponível, maneio e capacidade de investimento.",
  },
  {
    id: "alimentacao",
    icone: "🌱",
    titulo: "Alimentação",
    texto:
      "Avalie a disponibilidade de pastagens, forragens, suplementos e água antes de definir o sistema de criação.",
  },
  {
    id: "instalacoes",
    icone: "🏠",
    titulo: "Instalações",
    texto:
      "As instalações devem proteger os animais, facilitar o maneio, permitir higiene adequada e responder às condições ambientais.",
  },
  {
    id: "sanidade",
    icone: "🩺",
    titulo: "Sanidade",
    texto:
      "A prevenção de doenças e o acompanhamento por profissionais veterinários são componentes essenciais da exploração.",
  },
  {
    id: "reproducao",
    icone: "🔄",
    titulo: "Reprodução",
    texto:
      "O planeamento reprodutivo deve considerar condição corporal, idade, genética, sanidade e objectivos da exploração.",
  },
  {
    id: "agua",
    icone: "💧",
    titulo: "Água",
    texto:
      "A disponibilidade permanente de água de qualidade é um dos elementos fundamentais para a criação de bovinos.",
  },
];

const perfisRegionais: Record<
  Exclude<Provincia, "Todas">,
  {
    titulo: string;
    descricao: string;
    pontos: string[];
  }
> = {
  Bengo: {
    titulo: "Avaliação regional",
    descricao:
      "A orientação deverá considerar as condições específicas da exploração e a disponibilidade local de pastagem e água.",
    pontos: [
      "Avaliar disponibilidade de água.",
      "Avaliar disponibilidade de forragem.",
      "Definir sistema de maneio.",
    ],
  },

  Benguela: {
    titulo: "Avaliação regional",
    descricao:
      "A escolha do sistema deve considerar as condições ambientais locais, disponibilidade de água e recursos alimentares.",
    pontos: [
      "Priorizar gestão eficiente da água.",
      "Avaliar disponibilidade de alimento.",
      "Considerar o sistema de produção.",
    ],
  },

  Bié: {
    titulo: "Avaliação regional",
    descricao:
      "A escolha dos animais deve ser relacionada com a disponibilidade de recursos e o objectivo produtivo da exploração.",
    pontos: [
      "Avaliar pastagens.",
      "Planear alimentação complementar.",
      "Definir objectivo produtivo.",
    ],
  },

  Cabinda: {
    titulo: "Avaliação regional",
    descricao:
      "A orientação deve considerar as condições locais da exploração e a disponibilidade de recursos alimentares e hídricos.",
    pontos: [
      "Avaliar alimentação disponível.",
      "Garantir água adequada.",
      "Planear instalações e maneio.",
    ],
  },

  Cuando: {
    titulo: "Avaliação regional",
    descricao:
      "Para esta unidade territorial actual, a orientação deve ser construída com dados técnicos específicos antes de recomendar uma raça.",
    pontos: [
      "Avaliar condições da exploração.",
      "Confirmar disponibilidade de água.",
      "Consultar apoio técnico local.",
    ],
  },

  "Cuanza Norte": {
    titulo: "Avaliação regional",
    descricao:
      "A orientação deve partir das características concretas da exploração e dos recursos disponíveis.",
    pontos: [
      "Avaliar alimentação.",
      "Planear instalações.",
      "Definir objectivo produtivo.",
    ],
  },

  "Cuanza Sul": {
    titulo: "Avaliação regional",
    descricao:
      "O sistema de criação deve ser adaptado às condições locais e aos recursos disponíveis na exploração.",
    pontos: [
      "Avaliar água.",
      "Avaliar alimentação.",
      "Definir sistema de maneio.",
    ],
  },

  Cubango: {
    titulo: "Avaliação regional",
    descricao:
      "A recomendação de raça deverá ser feita depois de avaliar as condições concretas da exploração.",
    pontos: [
      "Avaliar recursos alimentares.",
      "Avaliar água.",
      "Consultar assistência técnica.",
    ],
  },

  Cunene: {
    titulo: "Avaliação regional",
    descricao:
      "A gestão dos recursos hídricos e alimentares deve ter atenção especial no planeamento da exploração.",
    pontos: [
      "Planear fontes de água.",
      "Planear alimentação.",
      "Avaliar sistema de maneio.",
    ],
  },

  Huambo: {
    titulo: "Huambo",
    descricao:
      "Para uma exploração no Huambo, a escolha da raça não deve ser feita apenas pelo nome da raça. É necessário avaliar finalidade, alimentação, água, instalações, maneio e adaptação às condições locais.",
    pontos: [
      "Definir primeiro leite, carne ou dupla aptidão.",
      "Avaliar pastagem e disponibilidade de forragem.",
      "Garantir água e instalações adequadas.",
    ],
  },

  Huíla: {
    titulo: "Avaliação regional",
    descricao:
      "A escolha do sistema deve considerar as condições locais, a disponibilidade de água, alimentação e o objectivo da exploração.",
    pontos: [
      "Avaliar água.",
      "Avaliar alimentação.",
      "Definir finalidade produtiva.",
    ],
  },

  "Icolo e Bengo": {
    titulo: "Avaliação regional",
    descricao:
      "A recomendação deverá considerar a exploração concreta e a disponibilidade local de recursos.",
    pontos: [
      "Avaliar disponibilidade de água.",
      "Avaliar alimentação.",
      "Planear instalações.",
    ],
  },

  Luanda: {
    titulo: "Avaliação regional",
    descricao:
      "Em sistemas próximos de zonas urbanas, o planeamento deve considerar espaço disponível, alimentação, água, sanidade e acesso ao mercado.",
    pontos: [
      "Avaliar espaço disponível.",
      "Planear alimentação.",
      "Garantir acompanhamento veterinário.",
    ],
  },

  "Lunda Norte": {
    titulo: "Avaliação regional",
    descricao:
      "A escolha do sistema deve ser ajustada aos recursos existentes na exploração.",
    pontos: [
      "Avaliar alimentação.",
      "Avaliar água.",
      "Definir sistema de criação.",
    ],
  },

  "Lunda Sul": {
    titulo: "Avaliação regional",
    descricao:
      "A orientação deve considerar recursos locais e o objectivo produtivo antes da escolha dos animais.",
    pontos: [
      "Avaliar pastagens.",
      "Avaliar água.",
      "Planear sanidade.",
    ],
  },

  Malanje: {
    titulo: "Avaliação regional",
    descricao:
      "A escolha da raça deve considerar os recursos alimentares, a água e o sistema de produção pretendido.",
    pontos: [
      "Avaliar alimentação.",
      "Avaliar instalações.",
      "Definir finalidade.",
    ],
  },

  Moxico: {
    titulo: "Avaliação regional",
    descricao:
      "A orientação deve considerar as condições concretas da exploração e os recursos disponíveis.",
    pontos: [
      "Avaliar água.",
      "Avaliar alimentação.",
      "Planear maneio.",
    ],
  },

  "Moxico Leste": {
    titulo: "Avaliação regional",
    descricao:
      "É necessário reunir informação técnica específica antes de apresentar uma recomendação de raça.",
    pontos: [
      "Avaliar condições locais.",
      "Avaliar alimentação.",
      "Consultar assistência técnica.",
    ],
  },

  Namibe: {
    titulo: "Avaliação regional",
    descricao:
      "A disponibilidade de água e alimento deve ser um dos primeiros elementos avaliados no planeamento.",
    pontos: [
      "Planear água.",
      "Avaliar alimentação.",
      "Definir sistema de produção.",
    ],
  },

  Uíge: {
    titulo: "Avaliação regional",
    descricao:
      "A orientação deve relacionar a finalidade produtiva com os recursos disponíveis na exploração.",
    pontos: [
      "Avaliar alimentação.",
      "Avaliar água.",
      "Planear sanidade.",
    ],
  },

  Zaire: {
    titulo: "Avaliação regional",
    descricao:
      "A escolha do sistema deverá considerar condições locais e capacidade de maneio da exploração.",
    pontos: [
      "Avaliar alimentação.",
      "Garantir água.",
      "Planear instalações.",
    ],
  },
};

export default function PainelBovinos() {
  const [provincia, setProvincia] =
    useState<Provincia>("Huambo");

  const [finalidade, setFinalidade] =
    useState<Finalidade>("leite");

  const perfil = useMemo(() => {
    if (provincia === "Todas") {
      return null;
    }

    return perfisRegionais[provincia];
  }, [provincia]);

  const finalidadeAtual = finalidades.find(
    (item) => item.id === finalidade
  );

  return (
    <section className="painel-bovinos">

      <div className="painel-bovinos-header">

        <div>
          <span className="painel-bovinos-kicker">
            PAINEL DOS BOVINOS
          </span>

          <h2>
            Encontre uma orientação
            adequada à sua exploração
          </h2>

          <p>
            Seleccione a província e o objectivo
            produtivo. A plataforma apresentará
            critérios técnicos para orientar a
            tomada de decisão.
          </p>
        </div>

        <div className="painel-bovinos-badge">
          <span>ESPÉCIE</span>
          <strong>🐄 Bovinos</strong>
        </div>

      </div>


      <div className="painel-bovinos-filtros">

        <div className="painel-bovinos-filtro">

          <span>01 · LOCALIZAÇÃO</span>

          <label htmlFor="provincia-bovinos">
            Província
          </label>

          <select
            id="provincia-bovinos"
            value={provincia}
            onChange={(evento) =>
              setProvincia(
                evento.target.value as Provincia
              )
            }
          >
            {provincias.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item === "Todas"
                  ? "Seleccionar província"
                  : item}
              </option>
            ))}
          </select>

        </div>


        <div className="painel-bovinos-filtro">

          <span>02 · FINALIDADE</span>

          <label>
            Objectivo da exploração
          </label>

          <div className="painel-bovinos-finalidades">

            {finalidades.map((item) => (
              <button
                key={item.id}
                type="button"
                className={
                  finalidade === item.id
                    ? "painel-bovinos-finalidade ativa"
                    : "painel-bovinos-finalidade"
                }
                onClick={() =>
                  setFinalidade(item.id)
                }
              >
                <span>{item.icone}</span>

                <strong>
                  {item.nome}
                </strong>
              </button>
            ))}

          </div>

        </div>

      </div>


      {/* RESULTADO REGIONAL */}

      <div className="painel-bovinos-resultado">

        <div className="painel-bovinos-resultado-topo">

          <div>
            <span>
              RESULTADO DA SELECÇÃO
            </span>

            <h3>
              {provincia === "Todas"
                ? "Seleccione uma província"
                : perfil?.titulo}
            </h3>
          </div>

          {finalidadeAtual && (
            <div className="painel-bovinos-objectivo">
              {finalidadeAtual.icone}{" "}
              {finalidadeAtual.nome}
            </div>
          )}

        </div>


        {provincia === "Todas" ? (

          <div className="painel-bovinos-sem-provincia">

            <span>📍</span>

            <div>
              <strong>
                Comece por seleccionar uma província.
              </strong>

              <p>
                A orientação regional será apresentada
                depois de escolher a localização da
                exploração.
              </p>
            </div>

          </div>

        ) : (

          <>

            <div className="painel-bovinos-descricao">

              <p>
                {perfil?.descricao}
              </p>

            </div>


            <div className="painel-bovinos-pontos">

              {perfil?.pontos.map(
                (ponto, index) => (

                  <div
                    key={ponto}
                    className="painel-bovinos-ponto"
                  >

                    <span>
                      {index + 1}
                    </span>

                    <p>
                      {ponto}
                    </p>

                  </div>

                )
              )}

            </div>

          </>

        )}

      </div>


      {/* ORIENTAÇÕES */}

      <div className="painel-bovinos-orientacoes">

        <div className="painel-bovinos-subtitulo">

          <span>
            GUIA DE PRODUÇÃO
          </span>

          <h3>
            O que deve analisar antes de começar
          </h3>

          <p>
            Estes são os principais elementos que
            deverão entrar na avaliação de uma
            exploração bovina.
          </p>

        </div>


        <div className="painel-bovinos-orientacoes-grid">

          {orientacoes.map((item) => (

            <article
              key={item.id}
              className="painel-bovinos-orientacao-card"
            >

              <div className="painel-bovinos-orientacao-icon">
                {item.icone}
              </div>

              <h4>
                {item.titulo}
              </h4>

              <p>
                {item.texto}
              </p>

              <button type="button">
                Consultar guia →
              </button>

            </article>

          ))}

        </div>

      </div>


      {/* ALERTA DE RAÇAS */}

      <div className="painel-bovinos-raças">

        <div className="painel-bovinos-raças-icon">
          🧬
        </div>

        <div>

          <span>
            PRÓXIMO PASSO
          </span>

          <h3>
            Comparar raças bovinas
          </h3>

          <p>
            Estamos a preparar uma ferramenta para
            comparar raças por finalidade, exigências
            de maneio, produção e adequação às
            condições da exploração.
          </p>

        </div>

        <button type="button">
          Comparar raças
        </button>

      </div>

    </section>
  );
}