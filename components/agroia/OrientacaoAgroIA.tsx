"use client";

import { useMemo, useState } from "react";

interface OrientacaoAgroIAProps {
  especie: string;
  provincia: string;
  finalidade: string;
  tema: string;
}

interface BaseOrientacao {
  titulo: string;
  resumo: string;
  recomendacoes: string[];
  cuidados: string[];
}

const orientacoes: Record<string, BaseOrientacao> = {
  racas: {
    titulo: "Escolha da raça",
    resumo:
      "A escolha deve partir do objectivo da exploração e das condições disponíveis para alimentação, água, instalações, maneio e acompanhamento sanitário.",
    recomendacoes: [
      "Defina primeiro se a prioridade é leite, carne, dupla aptidão ou reprodução.",
      "Avalie a capacidade de alimentação disponível durante todo o ano.",
      "Considere a adaptação dos animais às condições da exploração.",
      "Compare o potencial produtivo da raça com os recursos disponíveis.",
      "Procure orientação técnica antes de adquirir animais reprodutores.",
    ],
    cuidados: [
      "Não existe uma única raça universalmente melhor para todas as explorações.",
      "Uma raça de elevado potencial produtivo pode exigir maior capacidade de alimentação e maneio.",
    ],
  },

  alimentacao: {
    titulo: "Alimentação",
    resumo:
      "A alimentação deve ser organizada de acordo com a categoria dos animais, o estado produtivo e os alimentos realmente disponíveis na exploração.",
    recomendacoes: [
      "Garanta água adequada e disponível regularmente.",
      "Avalie a qualidade das pastagens e forragens.",
      "Separe as necessidades de animais jovens, adultos, vacas em produção e reprodutores.",
      "Faça alterações na dieta de forma gradual.",
      "Procure assistência técnica para formular suplementação quando necessária.",
    ],
    cuidados: [
      "Evite depender de um único alimento durante todo o ano.",
      "Problemas persistentes de consumo, emagrecimento ou produção devem ser avaliados por um profissional.",
    ],
  },

  instalacoes: {
    titulo: "Instalações",
    resumo:
      "As instalações devem facilitar o maneio, proteger os animais e permitir boas condições de higiene, segurança e conforto.",
    recomendacoes: [
      "Mantenha os espaços limpos e com boa drenagem.",
      "Facilite o acesso aos pontos de água e alimentação.",
      "Evite estruturas que possam causar ferimentos.",
      "Crie condições para separar animais quando necessário.",
      "Inspecione regularmente cercas, currais e equipamentos.",
    ],
    cuidados: [
      "As instalações devem ser adaptadas ao tamanho do efectivo.",
      "O produtor deve conseguir observar e manejar os animais com segurança.",
    ],
  },

  sanidade: {
    titulo: "Sanidade",
    resumo:
      "A prevenção e a observação diária são fundamentais para identificar alterações no efectivo e procurar assistência atempadamente.",
    recomendacoes: [
      "Observe diariamente o comportamento e o estado dos animais.",
      "Mantenha registos sanitários da exploração.",
      "Siga o programa sanitário recomendado pelos serviços veterinários.",
      "Mantenha instalações, equipamentos e áreas de alimentação em boas condições de higiene.",
      "Procure um médico veterinário perante sinais clínicos relevantes.",
    ],
    cuidados: [
      "A AGROIA não diagnostica doenças.",
      "Não substitua medicamentos, tratamentos ou procedimentos veterinários por uma resposta da IA.",
    ],
  },

  reproducao: {
    titulo: "Reprodução",
    resumo:
      "A gestão reprodutiva deve estar alinhada com os objectivos produtivos e com a capacidade de acompanhamento da exploração.",
    recomendacoes: [
      "Mantenha registos individuais dos animais.",
      "Defina critérios para escolha dos reprodutores.",
      "Acompanhe a condição corporal dos animais.",
      "Registe nascimentos e acontecimentos reprodutivos.",
      "Procure acompanhamento técnico quando surgirem problemas reprodutivos.",
    ],
    cuidados: [
      "Evite seleccionar reprodutores apenas pela aparência.",
      "Problemas de fertilidade exigem avaliação profissional.",
    ],
  },

  agua: {
    titulo: "Água",
    resumo:
      "A disponibilidade de água adequada é essencial para a manutenção, crescimento, reprodução e produção dos bovinos.",
    recomendacoes: [
      "Garanta acesso regular à água.",
      "Mantenha bebedouros limpos.",
      "Verifique regularmente o sistema de abastecimento.",
      "Proteja as fontes de água contra contaminação.",
      "Aumente a atenção à disponibilidade de água durante períodos de maior calor.",
    ],
    cuidados: [
      "A qualidade da água também deve ser considerada.",
      "Quedas inexplicadas no consumo de água ou alterações no comportamento devem ser investigadas.",
    ],
  },
};

function normalizarTema(tema: string) {
  const mapa: Record<string, string> = {
    racas: "racas",
    alimentacao: "alimentacao",
    instalacoes: "instalacoes",
    sanidade: "sanidade",
    reproducao: "reproducao",
    agua: "agua",
  };

  return mapa[tema] || "racas";
}

export default function OrientacaoAgroIA({
  especie,
  provincia,
  finalidade,
  tema,
}: OrientacaoAgroIAProps) {
  const [aberta, setAberta] = useState(false);

  const orientacao = useMemo(() => {
    return orientacoes[normalizarTema(tema)];
  }, [tema]);

  function gerarOrientacao() {
    setAberta(true);
  }

  return (
    <div className="agroia-interativa">

      <div className="agroia-interativa-topo">

        <div className="agroia-interativa-icon">
          🤖
        </div>

        <div>

          <span>
            AGROIA · ASSISTENTE AGROPECUÁRIO
          </span>

          <h3>
            Orientação personalizada
          </h3>

          <p>
            A orientação é construída a partir
            do contexto seleccionado.
          </p>

        </div>

      </div>


      <div className="agroia-interativa-contexto">

        <div>
          <span>ESPÉCIE</span>
          <strong>{especie}</strong>
        </div>

        <div>
          <span>PROVÍNCIA</span>
          <strong>{provincia}</strong>
        </div>

        <div>
          <span>FINALIDADE</span>
          <strong>{finalidade}</strong>
        </div>

        <div>
          <span>TEMA</span>
          <strong>{orientacao.titulo}</strong>
        </div>

      </div>


      {!aberta ? (

        <button
          type="button"
          className="agroia-interativa-btn"
          onClick={gerarOrientacao}
        >
          🤖 Gerar orientação
        </button>

      ) : (

        <div className="agroia-resposta">

          <div className="agroia-resposta-header">

            <span>
              🤖 AGROIA
            </span>

            <strong>
              Orientação gerada
            </strong>

          </div>


          <div className="agroia-resposta-resumo">

            <h4>
              {orientacao.titulo}
            </h4>

            <p>
              {orientacao.resumo}
            </p>

          </div>


          <div className="agroia-resposta-blocos">

            <div>

              <span>
                RECOMENDAÇÕES
              </span>

              <ul>

                {orientacao.recomendacoes.map(
                  (item) => (
                    <li key={item}>
                      {item}
                    </li>
                  )
                )}

              </ul>

            </div>


            <div>

              <span>
                CUIDADOS
              </span>

              <ul>

                {orientacao.cuidados.map(
                  (item) => (
                    <li key={item}>
                      {item}
                    </li>
                  )
                )}

              </ul>

            </div>

          </div>


          <div className="agroia-resposta-fonte">

            <strong>
              Como interpretar esta orientação
            </strong>

            <p>
              Esta resposta é uma orientação
              informativa baseada no conhecimento
              disponibilizado na plataforma. Para
              decisões específicas da exploração,
              procure um técnico ou médico
              veterinário habilitado.
            </p>

          </div>


          <button
            type="button"
            className="agroia-nova-btn"
            onClick={() => setAberta(false)}
          >
            ← Voltar
          </button>

        </div>

      )}

    </div>
  );
}