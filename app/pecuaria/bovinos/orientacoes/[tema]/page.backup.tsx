import Link from "next/link";

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
    titulo: "Escolha da raÃ§a",
    icone: "ðŸ§¬",

    descricao:
      "A escolha da raÃ§a deve considerar a finalidade da exploraÃ§Ã£o, as condiÃ§Ãµes locais, a alimentaÃ§Ã£o disponÃ­vel, o maneio e os recursos do produtor.",

    objetivo:
      "Escolher animais compatÃ­veis com o sistema de produÃ§Ã£o pretendido.",

    pontos: [
      "Definir primeiro se a exploraÃ§Ã£o serÃ¡ orientada para leite, carne, dupla aptidÃ£o ou reproduÃ§Ã£o.",
      "Avaliar a adaptaÃ§Ã£o dos animais Ã s condiÃ§Ãµes locais.",
      "Considerar a disponibilidade de alimentaÃ§Ã£o e Ã¡gua.",
      "Avaliar instalaÃ§Ãµes, maneio e capacidade de acompanhamento sanitÃ¡rio.",
      "Comparar produtividade potencial com os recursos disponÃ­veis na exploraÃ§Ã£o.",
    ],
  },

  alimentacao: {
    titulo: "AlimentaÃ§Ã£o",
    icone: "ðŸŒ±",

    descricao:
      "Uma alimentaÃ§Ã£o adequada Ã© fundamental para crescimento, produÃ§Ã£o, reproduÃ§Ã£o e manutenÃ§Ã£o da saÃºde dos bovinos.",

    objetivo:
      "Organizar uma alimentaÃ§Ã£o adequada Ã  categoria e finalidade dos animais.",

    pontos: [
      "Garantir disponibilidade regular de Ã¡gua limpa.",
      "Avaliar a qualidade das pastagens e forragens disponÃ­veis.",
      "Adequar a alimentaÃ§Ã£o Ã  idade e ao estado produtivo do animal.",
      "Considerar suplementaÃ§Ã£o quando a alimentaÃ§Ã£o disponÃ­vel nÃ£o for suficiente.",
      "Evitar alteraÃ§Ãµes bruscas na alimentaÃ§Ã£o sem acompanhamento tÃ©cnico.",
    ],
  },

  instalacoes: {
    titulo: "InstalaÃ§Ãµes",
    icone: "ðŸ ",

    descricao:
      "As instalaÃ§Ãµes devem facilitar o maneio, proteger os animais e permitir boas condiÃ§Ãµes de higiene, seguranÃ§a e conforto.",

    objetivo:
      "Criar condiÃ§Ãµes que facilitem o maneio e reduzam riscos para os animais.",

    pontos: [
      "Garantir espaÃ§o adequado para os animais.",
      "Manter as instalaÃ§Ãµes limpas e com boa drenagem.",
      "Disponibilizar Ã¡reas adequadas para alimentaÃ§Ã£o e abeberamento.",
      "Facilitar a observaÃ§Ã£o e o manejo dos animais.",
      "Verificar regularmente cercas, estruturas e equipamentos.",
    ],
  },

  sanidade: {
    titulo: "Sanidade",
    icone: "ðŸ©º",

    descricao:
      "A prevenÃ§Ã£o sanitÃ¡ria permite identificar problemas mais cedo e reduzir riscos para o efectivo.",

    objetivo:
      "Estabelecer uma rotina de prevenÃ§Ã£o e acompanhamento sanitÃ¡rio.",

    pontos: [
      "Observar diariamente o comportamento e o estado dos animais.",
      "Separar animais com sinais de doenÃ§a quando recomendado pelo profissional.",
      "Manter instalaÃ§Ãµes e equipamentos em boas condiÃ§Ãµes de higiene.",
      "Cumprir programas sanitÃ¡rios definidos pelas autoridades e profissionais competentes.",
      "Procurar assistÃªncia veterinÃ¡ria perante sinais clÃ­nicos ou situaÃ§Ãµes de emergÃªncia.",
    ],
  },

  reproducao: {
    titulo: "ReproduÃ§Ã£o",
    icone: "ðŸ”„",

    descricao:
      "A gestÃ£o reprodutiva influencia a renovaÃ§Ã£o do efectivo e a eficiÃªncia da exploraÃ§Ã£o.",

    objetivo:
      "Organizar a reproduÃ§Ã£o de acordo com os objetivos produtivos da exploraÃ§Ã£o.",

    pontos: [
      "Manter registos dos animais e dos acontecimentos reprodutivos.",
      "Avaliar a condiÃ§Ã£o corporal dos animais.",
      "Selecionar reprodutores de acordo com objetivos definidos.",
      "Acompanhar problemas reprodutivos com apoio tÃ©cnico.",
      "Evitar decisÃµes de reproduÃ§Ã£o baseadas apenas na aparÃªncia dos animais.",
    ],
  },

  agua: {
    titulo: "Ãgua",
    icone: "ðŸ’§",

    descricao:
      "A disponibilidade de Ã¡gua adequada Ã© um dos elementos fundamentais para a criaÃ§Ã£o de bovinos.",

    objetivo:
      "Garantir acesso regular a Ã¡gua adequada Ã s necessidades do efectivo.",

    pontos: [
      "Garantir acesso regular Ã  Ã¡gua.",
      "Manter os bebedouros limpos.",
      "Verificar frequentemente o funcionamento do sistema de abastecimento.",
      "Proteger as fontes de Ã¡gua contra contaminaÃ§Ã£o.",
      "Considerar as necessidades diferentes conforme idade, clima e produÃ§Ã£o.",
    ],
  },
};

function formatarFinalidade(finalidade: string) {
  const valores: Record<string, string> = {
    leite: "Leite",
    carne: "Carne",
    dupla: "Leite e carne",
    reproducao: "ReproduÃ§Ã£o",
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
    parametros.provincia || "NÃ£o seleccionada";

  const finalidade =
    parametros.finalidade || "NÃ£o seleccionada";

  /*
   * ==========================================================
   * TEMA NÃƒO ENCONTRADO
   * ==========================================================
   */

  if (!temaInfo) {
    return (
      <main className="tema-bovinos-page">

        <section className="tema-bovinos-erro">

          <div className="container">

            <span>
              404 Â· ORIENTAÃ‡ÃƒO NÃƒO ENCONTRADA
            </span>

            <h1>
              Este tema nÃ£o estÃ¡ disponÃ­vel.
            </h1>

            <p>
              A orientaÃ§Ã£o solicitada nÃ£o foi
              encontrada na plataforma.
            </p>

            <Link href="/pecuaria/bovinos/orientacoes">
              â† Ver todas as orientaÃ§Ãµes
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
            â† Todas as orientaÃ§Ãµes
          </Link>

          <span className="tema-bovinos-kicker">
            ðŸ„ BOVINOS Â· ORIENTAÃ‡ÃƒO TÃ‰CNICA
          </span>

          <div className="tema-bovinos-hero-grid">

            {/* =================================================
                INFORMAÃ‡ÃƒO DO TEMA
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
                  ðŸ“ {provincia}
                </strong>

                <small>
                  ProvÃ­ncia seleccionada
                </small>

              </div>

              <div>

                <strong>
                  ðŸŽ¯ {formatarFinalidade(finalidade)}
                </strong>

                <small>
                  Finalidade da exploraÃ§Ã£o
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
              OBJECTIVO DA ORIENTAÃ‡ÃƒO
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
              01 Â· CONHECIMENTO BASE
            </span>

            <h2>
              Pontos importantes
            </h2>

            <p>
              Estes pontos servem como orientaÃ§Ã£o
              geral. As recomendaÃ§Ãµes especÃ­ficas
              devem considerar as condiÃ§Ãµes da
              exploraÃ§Ã£o e avaliaÃ§Ã£o profissional.
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
              02 Â· EXPERIÃŠNCIA PROFISSIONAL
            </span>

            <h2>
              O que dizem os profissionais?
            </h2>

            <p>
              Nesta Ã¡rea serÃ£o apresentados
              profissionais identificados e
              verificados pela AGROINOVA.
            </p>

          </div>


          <div className="tema-bovinos-profissionais">

            {/* =================================================
                VETERINÃRIO
            ================================================= */}

            <article className="tema-bovinos-profissional">

              <div className="tema-bovinos-profissional-foto">
                ðŸ‘¨â€âš•ï¸
              </div>

              <div>

                <span>
                  VETERINÃRIO
                </span>

                <h3>
                  Especialista a integrar
                </h3>

                <strong>
                  MÃ©dico VeterinÃ¡rio
                </strong>

                <p>
                  A opiniÃ£o tÃ©cnica de um
                  profissional veterinÃ¡rio serÃ¡
                  apresentada aqui com identificaÃ§Ã£o,
                  especialidade, instituiÃ§Ã£o e fonte.
                </p>

                <small>
                  Perfil verificado pela AGROINOVA
                </small>

              </div>

            </article>


            {/* =================================================
                TÃ‰CNICO
            ================================================= */}

            <article className="tema-bovinos-profissional">

              <div className="tema-bovinos-profissional-foto">
                ðŸ‘¨â€ðŸ”§
              </div>

              <div>

                <span>
                  TÃ‰CNICO
                </span>

                <h3>
                  Especialista a integrar
                </h3>

                <strong>
                  TÃ©cnico PecuÃ¡rio
                </strong>

                <p>
                  Aqui serÃ¡ apresentada a
                  experiÃªncia de tÃ©cnicos que
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
                ðŸ‘¨â€ðŸŒ¾
              </div>

              <div>

                <span>
                  CRIADOR
                </span>

                <h3>
                  Criador a integrar
                </h3>

                <strong>
                  ExperiÃªncia prÃ¡tica
                </strong>

                <p>
                  SerÃ¡ apresentada a experiÃªncia
                  real de criadores, incluindo
                  localizaÃ§Ã£o, sistema de produÃ§Ã£o
                  e contexto da exploraÃ§Ã£o.
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
              ðŸ¤–
            </div>

            <div>

              <span>
                03 Â· AGROIA
              </span>

              <h2>
                OrientaÃ§Ã£o assistida por IA
              </h2>

              <p>
                A AGROIA poderÃ¡ cruzar o contexto
                indicado pelo produtor com conhecimento
                tÃ©cnico, fontes verificadas e dados
                disponÃ­veis na plataforma.
              </p>


              {/* =================================================
                  CONTEXTO DA AGROIA
              ================================================= */}

              <div className="tema-bovinos-agroia-contexto">

                <div>

                  <span>
                    ESPÃ‰CIE
                  </span>

                  <strong>
                    Bovinos
                  </strong>

                </div>

                <div>

                  <span>
                    PROVÃNCIA
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


              {/* =================================================
                  AVISO
              ================================================= */}

              <div className="tema-bovinos-agroia-aviso">

                <strong>
                  Importante
                </strong>

                <p>
                  A AGROIA fornece informaÃ§Ã£o
                  orientativa e nÃ£o substitui uma
                  avaliaÃ§Ã£o feita por um mÃ©dico
                  veterinÃ¡rio ou outro profissional
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
              04 Â· FONTES
            </span>

            <h2>
              InformaÃ§Ã£o com transparÃªncia
            </h2>

            <p>
              A AGROINOVA deverÃ¡ indicar a origem
              das informaÃ§Ãµes utilizadas em cada
              orientaÃ§Ã£o.
            </p>

          </div>


          <div className="tema-bovinos-fontes-grid">

            <div>

              <span>
                ðŸ“š
              </span>

              <strong>
                Fontes tÃ©cnicas
              </strong>

              <p>
                Literatura cientÃ­fica, manuais
                tÃ©cnicos e materiais de instituiÃ§Ãµes
                reconhecidas.
              </p>

            </div>


            <div>

              <span>
                ðŸ›ï¸
              </span>

              <strong>
                Fontes institucionais
              </strong>

              <p>
                InformaÃ§Ã£o proveniente de entidades
                oficiais e instituiÃ§Ãµes de investigaÃ§Ã£o.
              </p>

            </div>


            <div>

              <span>
                ðŸ‘¥
              </span>

              <strong>
                ExperiÃªncia de campo
              </strong>

              <p>
                ExperiÃªncias de tÃ©cnicos e criadores
                devidamente identificados.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          RODAPÃ‰ DA PÃGINA
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
            â† Escolher outro tema
          </Link>

          <Link href="/pecuaria">
            Voltar ao centro de PecuÃ¡ria â†’
          </Link>

        </div>

      </section>

    </main>
  );
}

