import Link from "next/link";

interface PaginaTemaProps {
  params: Promise<{
    tema: string;
  }>;
}

interface TemaInfo {
  titulo: string;
  descricao: string;
  icone: string;
}

const temas: Record<string, TemaInfo> = {
  racas: {
    titulo: "Raças",
    descricao:
      "Conheça os principais aspectos a considerar na escolha e adaptação de raças bovinas.",
    icone: "🐄",
  },

  alimentacao: {
    titulo: "Alimentação",
    descricao:
      "Informações para organizar a alimentação dos bovinos de acordo com a categoria e finalidade.",
    icone: "🌾",
  },

  instalacoes: {
    titulo: "Instalações",
    descricao:
      "Orientações sobre instalações, higiene, segurança, conforto e maneio dos bovinos.",
    icone: "🏠",
  },

  sanidade: {
    titulo: "Sanidade",
    descricao:
      "Informações de apoio à prevenção, observação e acompanhamento sanitário dos bovinos.",
    icone: "🩺",
  },

  reproducao: {
    titulo: "Reprodução",
    descricao:
      "Orientações gerais sobre reprodução, selecção de reprodutores e acompanhamento do efectivo.",
    icone: "🧬",
  },

  agua: {
    titulo: "Água",
    descricao:
      "Informações sobre disponibilidade, acesso, higiene e qualidade da água para os animais.",
    icone: "💧",
  },
};

const provincias = [
  "Huambo",
  "Benguela",
  "Bié",
  "Huíla",
  "Cunene",
  "Malanje",
  "Uíge",
  "Zaire",
  "Cabinda",
  "Cuanza Sul",
  "Cuanza Norte",
  "Luanda",
];

const finalidades = [
  "Produção de leite",
  "Produção de carne",
  "Dupla aptidão",
  "Reprodução",
];

export default async function PaginaOrientacaoTema({
  params,
}: PaginaTemaProps) {
  const { tema } = await params;

  const temaNormalizado = tema.toLowerCase();

  const informacao = temas[temaNormalizado];

  if (!informacao) {
    return (
      <main className="pagina-orientacao">
        <div className="container">
          <div className="orientacao-nao-encontrada">
            <span className="orientacao-nao-encontrada-icon">
              ⚠️
            </span>

            <h1>Orientação não encontrada</h1>

            <p>
              O tema solicitado não está disponível na área
              de orientações para bovinos.
            </p>

            <Link
              href="/pecuaria/bovinos/orientacoes"
              className="btn-voltar-orientacoes"
            >
              ← Voltar para orientações
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pagina-orientacao">

      {/* =========================================
          CABEÇALHO DA PÁGINA
          ========================================= */}

      <section className="orientacao-hero">
        <div className="container">

          <div className="orientacao-breadcrumb">
            <Link href="/">
              Início
            </Link>

            <span>›</span>

            <Link href="/pecuaria">
              Pecuária
            </Link>

            <span>›</span>

            <Link href="/pecuaria/bovinos/orientacoes">
              Bovinos
            </Link>

            <span>›</span>

            <strong>
              {informacao.titulo}
            </strong>
          </div>

          <div className="orientacao-hero-content">

            <div className="orientacao-hero-icon">
              {informacao.icone}
            </div>

            <div>
              <span className="orientacao-eyebrow">
                AGROINOVA ANGOLA · BOVINOS
              </span>

              <h1>
                {informacao.titulo}
              </h1>

              <p>
                {informacao.descricao}
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================
          CONTEXTO DA ORIENTAÇÃO
          ========================================= */}

      <section className="orientacao-contexto-section">
        <div className="container">

          <div className="orientacao-contexto-card">

            <div className="orientacao-contexto-heading">

              <span>
                📍
              </span>

              <div>

                <strong>
                  Defina o contexto da exploração
                </strong>

                <p>
                  A orientação da AGROIA será apresentada
                  de acordo com a realidade seleccionada.
                </p>

              </div>

            </div>


            <div className="orientacao-seletores">

              <div className="orientacao-seletor">

                <label htmlFor="provincia">
                  Província
                </label>

                <select
                  id="provincia"
                  defaultValue="Huambo"
                >
                  {provincias.map((provincia) => (
                    <option
                      key={provincia}
                      value={provincia}
                    >
                      {provincia}
                    </option>
                  ))}
                </select>

              </div>


              <div className="orientacao-seletor">

                <label htmlFor="finalidade">
                  Finalidade
                </label>

                <select
                  id="finalidade"
                  defaultValue="Produção de leite"
                >
                  {finalidades.map((finalidade) => (
                    <option
                      key={finalidade}
                      value={finalidade}
                    >
                      {finalidade}
                    </option>
                  ))}
                </select>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================
          ORIENTAÇÃO GERAL
          ========================================= */}

      <section className="orientacao-conhecimento">
        <div className="container">

          <div className="orientacao-section-heading">

            <span>
              CONHECIMENTO AGROPECUÁRIO
            </span>

            <h2>
              Orientação sobre{" "}
              {informacao.titulo.toLowerCase()}
            </h2>

            <p>
              Informação de apoio para produtores,
              técnicos e profissionais do sector
              agropecuário.
            </p>

          </div>


          <div className="orientacao-info-grid">

            <article className="orientacao-info-card">

              <span>
                {informacao.icone}
              </span>

              <h3>
                {informacao.titulo}
              </h3>

              <p>
                {informacao.descricao}
              </p>

            </article>


            <article className="orientacao-info-card">

              <span>
                🇦🇴
              </span>

              <h3>
                Realidade angolana
              </h3>

              <p>
                A orientação deve considerar as
                condições da exploração e as
                características da região onde
                os animais são criados.
              </p>

            </article>


            <article className="orientacao-info-card">

              <span>
                👨‍🔬
              </span>

              <h3>
                Acompanhamento técnico
              </h3>

              <p>
                Decisões específicas devem ser
                acompanhadas por técnicos e
                profissionais habilitados.
              </p>

            </article>

          </div>

        </div>
      </section>


      {/* =========================================
          OPINIÕES DE PROFISSIONAIS
          ========================================= */}

      <section className="orientacao-profissionais">
        <div className="container">

          <div className="orientacao-section-heading">

            <span>
              EXPERIÊNCIA NO CAMPO
            </span>

            <h2>
              Opiniões e experiências
            </h2>

            <p>
              Conhecimento de profissionais e
              produtores que trabalham directamente
              com a actividade agropecuária.
            </p>

          </div>


          <div className="orientacao-profissionais-grid">

            <article className="perfil-orientacao-card">

              <div className="perfil-orientacao-avatar">
                👨‍🔬
              </div>

              <div>

                <span>
                  TÉCNICO
                </span>

                <h3>
                  Técnico agropecuário
                </h3>

                <p>
                  Espaço reservado para uma
                  orientação técnica verificada
                  pela plataforma.
                </p>

              </div>

            </article>


            <article className="perfil-orientacao-card">

              <div className="perfil-orientacao-avatar">
                👨‍⚕️
              </div>

              <div>

                <span>
                  MÉDICO VETERINÁRIO
                </span>

                <h3>
                  Profissional veterinário
                </h3>

                <p>
                  Espaço reservado para informação
                  veterinária validada.
                </p>

              </div>

            </article>


            <article className="perfil-orientacao-card">

              <div className="perfil-orientacao-avatar">
                👨‍🌾
              </div>

              <div>

                <span>
                  CRIADOR
                </span>

                <h3>
                  Experiência do produtor
                </h3>

                <p>
                  Espaço reservado para experiências
                  reais de criadores angolanos.
                </p>

              </div>

            </article>

          </div>

        </div>
      </section>


      {/* =========================================
          AGROIA
          ========================================= */}

      <section className="orientacao-agroia-section">
        <div className="container">

          <div className="orientacao-agroia-heading">

            <span>
              INTELIGÊNCIA ARTIFICIAL
            </span>

            <h2>
              Orientação personalizada com AGROIA
            </h2>

            <p>
              Consulte uma orientação de apoio
              considerando o contexto seleccionado.
            </p>

          </div>


          <div className="orientacao-agroia-card">

            <span className="orientacao-agroia-icon">
              🤖
            </span>

            <h3>
              AGROIA
            </h3>

            <p>
              A orientação personalizada com
              inteligência artificial será
              disponibilizada nesta área.
            </p>

            <p>
              Tema seleccionado:{" "}
              <strong>
                {informacao.titulo}
              </strong>
            </p>

            <p>
              Contexto inicial:{" "}
              <strong>
                Huambo · Produção de leite
              </strong>
            </p>

          </div>

        </div>
      </section>


      {/* =========================================
          NAVEGAÇÃO
          ========================================= */}

      <section className="orientacao-navegacao">
        <div className="container">

          <Link
            href="/pecuaria/bovinos/orientacoes"
            className="btn-voltar-orientacoes"
          >
            ← Ver todas as orientações
          </Link>

        </div>
      </section>

    </main>
  );
}