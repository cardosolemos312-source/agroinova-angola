import Link from "next/link";
import OrientacaoAgroIA from "../../../../../components/agroia/OrientacaoAgroIA";

interface TemaPageProps {
  params: Promise<{
    tema: string;
  }>;

  searchParams: Promise<{
    provincia?: string;
    finalidade?: string;
  }>;
}

interface TemaInfo {
  titulo: string;
  icone: string;
  descricao: string;
  objetivo: string;
  pontos: string[];
}

const temas: Record<string, TemaInfo> = {
  racas: {
    titulo: "Escolha da raça",
    icone: "🧬",

    descricao:
      "A escolha da raça deve considerar a finalidade da exploração, as condições locais, a alimentação disponível, o maneio e os recursos do produtor.",

    objetivo:
      "Escolher animais compatíveis com o sistema de produção pretendido.",

    pontos: [
      "Definir primeiro se a exploração será orientada para leite, carne, dupla aptidão ou reprodução.",
      "Avaliar a adaptação dos animais às condições locais.",
      "Considerar a disponibilidade de alimentação e água.",
      "Avaliar instalações, maneio e capacidade de acompanhamento sanitário.",
      "Comparar produtividade potencial com os recursos disponíveis na exploração.",
    ],
  },

  alimentacao: {
    titulo: "Alimentação",
    icone: "🌱",

    descricao:
      "Uma alimentação adequada é fundamental para crescimento, produção, reprodução e manutenção da saúde dos bovinos.",

    objetivo:
      "Organizar uma alimentação adequada à categoria e finalidade dos animais.",

    pontos: [
      "Garantir disponibilidade regular de água limpa.",
      "Avaliar a qualidade das pastagens e forragens disponíveis.",
      "Adequar a alimentação à idade e ao estado produtivo do animal.",
      "Considerar suplementação quando a alimentação disponível não for suficiente.",
      "Evitar alterações bruscas na alimentação sem acompanhamento técnico.",
    ],
  },

  instalacoes: {
    titulo: "Instalações",
    icone: "🏠",

    descricao:
      "As instalações devem facilitar o maneio, proteger os animais e permitir boas condições de higiene, segurança e conforto.",

    objetivo:
      "Criar condições que facilitem o maneio e reduzam riscos para os animais.",

    pontos: [
      "Garantir espaço adequado para os animais.",
      "Manter as instalações limpas e com boa drenagem.",
      "Disponibilizar áreas adequadas para alimentação e abeberamento.",
      "Facilitar a observação e o manejo dos animais.",
      "Verificar regularmente cercas, estruturas e equipamentos.",
    ],
  },

  sanidade: {
    titulo: "Sanidade",
    icone: "🩺",

    descricao:
      "A prevenção sanitária permite identificar problemas mais cedo e reduzir riscos para o efectivo.",

    objetivo:
      "Estabelecer uma rotina de prevenção e acompanhamento sanitário.",

    pontos: [
      "Observar diariamente o comportamento e o estado dos animais.",
      "Separar animais com sinais de doença quando recomendado pelo profissional.",
      "Manter instalações e equipamentos em boas condições de higiene.",
      "Cumprir programas sanitários definidos pelas autoridades e profissionais competentes.",
      "Procurar assistência veterinária perante sinais clínicos ou situações de emergência.",
    ],
  },

  reproducao: {
    titulo: "Reprodução",
    icone: "🔄",

    descricao:
      "A gestão reprodutiva influencia a renovação do efectivo e a eficiência da exploração.",

    objetivo:
      "Organizar a reprodução de acordo com os objetivos produtivos da exploração.",

    pontos: [
      "Manter registos dos animais e dos acontecimentos reprodutivos.",
      "Avaliar a condição corporal dos animais.",
      "Selecionar reprodutores de acordo com objetivos definidos.",
      "Acompanhar problemas reprodutivos com apoio técnico.",
      "Evitar decisões de reprodução baseadas apenas na aparência dos animais.",
    ],
  },

  agua: {
    titulo: "Água",
    icone: "💧",

    descricao:
      "A disponibilidade de água adequada é um dos elementos fundamentais para a criação de bovinos.",

    objetivo:
      "Garantir acesso regular a água adequada às necessidades do efectivo.",

    pontos: [
      "Garantir acesso regular à água.",
      "Manter os bebedouros limpos.",
      "Verificar frequentemente o funcionamento do sistema de abastecimento.",
      "Proteger as fontes de água contra contaminação.",
      "Considerar as necessidades diferentes conforme idade, clima e produção.",
    ],
  },
};

function formatarFinalidade(finalidade: string) {
  const valores: Record<string, string> = {
    leite: "Leite",
    carne: "Carne",
    dupla: "Leite e carne",
    reproducao: "Reprodução",
  };

  return valores[finalidade] || finalidade;
}

export default async function TemaBovinosPage({
  params,
  searchParams,
}: TemaPageProps) {
  const { tema } = await params;
  const parametros = await searchParams;

  const temaInfo = temas[tema];

  const provincia =
    parametros.provincia || "Não seleccionada";

  const finalidade =
    parametros.finalidade || "Não seleccionada";

  /*
   * ==========================================================
   * TEMA NÃO ENCONTRADO
   * ==========================================================
   */

  if (!temaInfo) {
    return (
      <main className="tema-bovinos-page">

        <section className="tema-bovinos-erro">

          <div className="container">

            <span>
              404 · ORIENTAÇÃO NÃO ENCONTRADA
            </span>

            <h1>
              Este tema não está disponível.
            </h1>

            <p>
              A orientação solicitada não foi
              encontrada na plataforma.
            </p>

            <Link href="/pecuaria/bovinos/orientacoes">
              ← Ver todas as orientações
            </Link>

          </div>

        </section>

      </main>
    );
  }

  return (
    <main className="tema-bovinos-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="tema-bovinos-hero">

        <div className="container">

          <Link
            href={`/pecuaria/bovinos/orientacoes?provincia=${encodeURIComponent(
              provincia
            )}&finalidade=${encodeURIComponent(
              parametros.finalidade || ""
            )}`}
            className="tema-bovinos-voltar"
          >
            ← Todas as orientações
          </Link>

          <span className="tema-bovinos-kicker">
            🐄 BOVINOS · ORIENTAÇÃO TÉCNICA
          </span>

          <div className="tema-bovinos-hero-grid">

            {/* =================================================
                INFORMAÇÃO DO TEMA
            ================================================= */}

            <div>

              <div className="tema-bovinos-icone">
                {temaInfo.icone}
              </div>

              <h1>
                {temaInfo.titulo}
              </h1>

              <p>
                {temaInfo.descricao}
              </p>

            </div>

            {/* =================================================
                CONTEXTO
            ================================================= */}

            <div className="tema-bovinos-contexto">

              <span>
                CONTEXTO DA CONSULTA
              </span>

              <div>

                <strong>
                  📍 {provincia}
                </strong>

                <small>
                  Província seleccionada
                </small>

              </div>

              <div>

                <strong>
                  🎯 {formatarFinalidade(finalidade)}
                </strong>

                <small>
                  Finalidade da exploração
                </small>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          OBJECTIVO
      ===================================================== */}

      <section className="tema-bovinos-objetivo">

        <div className="container">

          <div className="tema-bovinos-objetivo-box">

            <span>
              OBJECTIVO DA ORIENTAÇÃO
            </span>

            <h2>
              {temaInfo.objetivo}
            </h2>

          </div>

        </div>

      </section>


      {/* =====================================================
          PONTOS PRINCIPAIS
      ===================================================== */}

      <section className="tema-bovinos-pontos">

        <div className="container">

          <div className="tema-bovinos-heading">

            <span>
              01 · CONHECIMENTO BASE
            </span>

            <h2>
              Pontos importantes
            </h2>

            <p>
              Estes pontos servem como orientação
              geral. As recomendações específicas
              devem considerar as condições da
              exploração e avaliação profissional.
            </p>

          </div>

          <div className="tema-bovinos-pontos-grid">

            {temaInfo.pontos.map(
              (ponto, index) => (

                <article
                  key={ponto}
                  className="tema-bovinos-ponto"
                >

                  <span>
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <p>
                    {ponto}
                  </p>

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          ESPECIALISTAS
      ===================================================== */}

      <section className="tema-bovinos-especialistas">

        <div className="container">

          <div className="tema-bovinos-heading">

            <span>
              02 · EXPERIÊNCIA PROFISSIONAL
            </span>

            <h2>
              O que dizem os profissionais?
            </h2>

            <p>
              Nesta área serão apresentados
              profissionais identificados e
              verificados pela AGROINOVA.
            </p>

          </div>


          <div className="tema-bovinos-profissionais">

            {/* =================================================
                VETERINÁRIO
            ================================================= */}

            <article className="tema-bovinos-profissional">

              <div className="tema-bovinos-profissional-foto">
                👨‍⚕️
              </div>

              <div>

                <span>
                  VETERINÁRIO
                </span>

                <h3>
                  Especialista a integrar
                </h3>

                <strong>
                  Médico Veterinário
                </strong>

                <p>
                  A opinião técnica de um
                  profissional veterinário será
                  apresentada aqui com identificação,
                  especialidade, instituição e fonte.
                </p>

                <small>
                  Perfil verificado pela AGROINOVA
                </small>

              </div>

            </article>


            {/* =================================================
                TÉCNICO
            ================================================= */}

            <article className="tema-bovinos-profissional">

              <div className="tema-bovinos-profissional-foto">
                👨‍🔧
              </div>

              <div>

                <span>
                  TÉCNICO
                </span>

                <h3>
                  Especialista a integrar
                </h3>

                <strong>
                  Técnico Pecuário
                </strong>

                <p>
                  Aqui será apresentada a
                  experiência de técnicos que
                  trabalham directamente com
                  produtores.
                </p>

                <small>
                  Perfil verificado pela AGROINOVA
                </small>

              </div>

            </article>


            {/* =================================================
                CRIADOR
            ================================================= */}

            <article className="tema-bovinos-profissional">

              <div className="tema-bovinos-profissional-foto">
                👨‍🌾
              </div>

              <div>

                <span>
                  CRIADOR
                </span>

                <h3>
                  Criador a integrar
                </h3>

                <strong>
                  Experiência prática
                </strong>

                <p>
                  Será apresentada a experiência
                  real de criadores, incluindo
                  localização, sistema de produção
                  e contexto da exploração.
                </p>

                <small>
                  Perfil verificado pela AGROINOVA
                </small>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          AGROIA
      ===================================================== */}

      <section className="tema-bovinos-agroia">

        <div className="container">

          <div className="tema-bovinos-agroia-box">

            <div className="tema-bovinos-agroia-icon">
              🤖
            </div>

            <div>

              <span>
                03 · AGROIA
              </span>

              <h2>
                Orientação assistida por IA
              </h2>

              <p>
                A AGROIA poderá cruzar o contexto
                indicado pelo produtor com conhecimento
                técnico, fontes verificadas e dados
                disponíveis na plataforma.
              </p>


              {/* =================================================
                  CONTEXTO DA AGROIA
              ================================================= */}

              <div className="tema-bovinos-agroia-contexto">

                <div>

                  <span>
                    ESPÉCIE
                  </span>

                  <strong>
                    Bovinos
                  </strong>

                </div>

                <div>

                  <span>
                    PROVÍNCIA
                  </span>

                  <strong>
                    {provincia}
                  </strong>

                </div>

                <div>

                  <span>
                    FINALIDADE
                  </span>

                  <strong>
                    {formatarFinalidade(finalidade)}
                  </strong>

                </div>

                <div>

                  <span>
                    TEMA
                  </span>

                  <strong>
                    {temaInfo.titulo}
                  </strong>

                </div>

              </div>


              {/* =================================================
                  AGROIA INTERATIVA
              ================================================= */}

              <OrientacaoAgroIA
                especie="Bovinos"
                provincia={provincia}
                finalidade={formatarFinalidade(finalidade)}
                tema={tema}
              />


              {/* =================================================
                  AVISO
              ================================================= */}

              <div className="tema-bovinos-agroia-aviso">

                <strong>
                  Importante
                </strong>

                <p>
                  A AGROIA fornece informação
                  orientativa e não substitui uma
                  avaliação feita por um médico
                  veterinário ou outro profissional
                  habilitado.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FONTES
      ===================================================== */}

      <section className="tema-bovinos-fontes">

        <div className="container">

          <div className="tema-bovinos-heading">

            <span>
              04 · FONTES
            </span>

            <h2>
              Informação com transparência
            </h2>

            <p>
              A AGROINOVA deverá indicar a origem
              das informações utilizadas em cada
              orientação.
            </p>

          </div>


          <div className="tema-bovinos-fontes-grid">

            <div>

              <span>
                📚
              </span>

              <strong>
                Fontes técnicas
              </strong>

              <p>
                Literatura científica, manuais
                técnicos e materiais de instituições
                reconhecidas.
              </p>

            </div>


            <div>

              <span>
                🏛️
              </span>

              <strong>
                Fontes institucionais
              </strong>

              <p>
                Informação proveniente de entidades
                oficiais e instituições de investigação.
              </p>

            </div>


            <div>

              <span>
                👥
              </span>

              <strong>
                Experiência de campo
              </strong>

              <p>
                Experiências de técnicos e criadores
                devidamente identificados.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          RODAPÉ DA PÁGINA
      ===================================================== */}

      <section className="tema-bovinos-final">

        <div className="container">

          <Link
            href={`/pecuaria/bovinos/orientacoes?provincia=${encodeURIComponent(
              provincia
            )}&finalidade=${encodeURIComponent(
              parametros.finalidade || ""
            )}`}
          >
            ← Escolher outro tema
          </Link>

          <Link href="/pecuaria">
            Voltar ao centro de Pecuária →
          </Link>

        </div>

      </section>

    </main>
  );
}