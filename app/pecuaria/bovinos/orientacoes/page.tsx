import Link from "next/link";

type PerfilTipo =
  | "veterinario"
  | "tecnico"
  | "criador";

interface OrientacoesBovinosPageProps {
  searchParams: Promise<{
    provincia?: string;
    finalidade?: string;
  }>;
}

const perfis: {
  tipo: PerfilTipo;
  nome: string;
  profissao: string;
  local: string;
  foto: string;
  descricao: string;
  estado: string;
}[] = [
  {
    tipo: "veterinario",
    nome: "Perfil de veterinário",
    profissao: "Médico Veterinário",
    local: "Angola",
    foto: "",
    descricao:
      "Espaço reservado para a opinião de um médico veterinário verificado pela AGROINOVA.",
    estado: "Perfil a integrar",
  },
  {
    tipo: "tecnico",
    nome: "Perfil de técnico",
    profissao: "Técnico Pecuário",
    local: "Angola",
    foto: "",
    descricao:
      "Espaço reservado para a orientação de um técnico pecuário com experiência comprovada.",
    estado: "Perfil a integrar",
  },
  {
    tipo: "criador",
    nome: "Perfil de criador",
    profissao: "Criador de bovinos",
    local: "Angola",
    foto: "",
    descricao:
      "Espaço reservado para a experiência prática de um criador de bovinos.",
    estado: "Perfil a integrar",
  },
];

const temas = [
  {
    id: "racas",
    icone: "🧬",
    nome: "Raças",
    descricao:
      "Características, finalidade produtiva e critérios de escolha.",
  },
  {
    id: "alimentacao",
    icone: "🌱",
    nome: "Alimentação",
    descricao:
      "Pastagem, forragem, água e suplementação.",
  },
  {
    id: "instalacoes",
    icone: "🏠",
    nome: "Instalações",
    descricao:
      "Estruturas, higiene, conforto e maneio.",
  },
  {
    id: "sanidade",
    icone: "🩺",
    nome: "Sanidade",
    descricao:
      "Prevenção, vigilância e acompanhamento veterinário.",
  },
  {
    id: "reproducao",
    icone: "🔄",
    nome: "Reprodução",
    descricao:
      "Gestão reprodutiva e melhoramento do efectivo.",
  },
  {
    id: "agua",
    icone: "💧",
    nome: "Água",
    descricao:
      "Disponibilidade, qualidade e gestão da água.",
  },
];

export default async function OrientacoesBovinosPage({
  searchParams,
}: OrientacoesBovinosPageProps) {
  const params = await searchParams;

  const provincia =
    params.provincia || "Não seleccionada";

  const finalidade =
    params.finalidade || "Não seleccionada";

  return (
    <main className="orientacoes-bovinos-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="orientacoes-bovinos-hero">

        <div className="container">

          <Link
            href="/pecuaria"
            className="orientacoes-voltar"
          >
            ← Voltar à Pecuária
          </Link>

          <span className="orientacoes-kicker">
            AGROINOVA ANGOLA · ORIENTAÇÃO TÉCNICA
          </span>

          <h1>
            Orientação para
            <br />
            criação de bovinos
          </h1>

          <p>
            Consulte diferentes perspectivas antes
            de tomar uma decisão: conhecimento
            veterinário, experiência técnica,
            experiência dos criadores e orientação
            assistida por inteligência artificial.
          </p>

          <div className="orientacoes-selecao">

            <div>
              <span>LOCALIZAÇÃO</span>

              <strong>
                📍 {provincia}
              </strong>
            </div>

            <div>
              <span>FINALIDADE</span>

              <strong>
                🎯 {finalidade}
              </strong>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TEMAS
      ===================================================== */}

      <section className="orientacoes-temas">

        <div className="container">

          <div className="orientacoes-heading">

            <span>
              01 · ESCOLHA O TEMA
            </span>

            <h2>
              Sobre o que precisa de orientação?
            </h2>

            <p>
              Escolha uma área para consultar
              conhecimento especializado.
            </p>

          </div>


          <div className="orientacoes-temas-grid">

            {temas.map((tema) => (

              <Link
                key={tema.id}
                href={`/pecuaria/bovinos/orientacoes/${tema.id}?provincia=${encodeURIComponent(
                  provincia
                )}&finalidade=${encodeURIComponent(
                  finalidade
                )}`}
                className="orientacoes-tema-card"
              >

                <span className="orientacoes-tema-icon">
                  {tema.icone}
                </span>

                <h3>
                  {tema.nome}
                </h3>

                <p>
                  {tema.descricao}
                </p>

                <strong>
                  Consultar orientação →
                </strong>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          ESPECIALISTAS
      ===================================================== */}

      <section className="orientacoes-especialistas">

        <div className="container">

          <div className="orientacoes-heading">

            <span>
              02 · PESSOAS
            </span>

            <h2>
              O que dizem os especialistas?
            </h2>

            <p>
              A AGROINOVA pretende reunir diferentes
              perspectivas para ajudar o produtor a
              tomar decisões mais informadas.
            </p>

          </div>


          <div className="orientacoes-perfis-grid">

            {perfis.map((perfil) => (

              <article
                key={perfil.tipo}
                className="orientacoes-perfil"
              >

                <div className="orientacoes-foto">

                  {perfil.foto ? (
                    <img
                      src={perfil.foto}
                      alt={perfil.nome}
                    />
                  ) : (
                    <span>
                      {perfil.tipo === "veterinario"
                        ? "👨‍⚕️"
                        : perfil.tipo === "tecnico"
                          ? "👨‍🔧"
                          : "👨‍🌾"}
                    </span>
                  )}

                </div>


                <div className="orientacoes-perfil-conteudo">

                  <span className="orientacoes-perfil-tipo">
                    {perfil.tipo === "veterinario"
                      ? "VETERINÁRIO"
                      : perfil.tipo === "tecnico"
                        ? "TÉCNICO"
                        : "CRIADOR"}
                  </span>

                  <h3>
                    {perfil.nome}
                  </h3>

                  <strong>
                    {perfil.profissao}
                  </strong>

                  <small>
                    📍 {perfil.local}
                  </small>

                  <p>
                    {perfil.descricao}
                  </p>

                  <span className="orientacoes-perfil-estado">
                    {perfil.estado}
                  </span>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          AGROIA
      ===================================================== */}

      <section className="orientacoes-agroia">

        <div className="container">

          <div className="agroia-box">

            <div className="agroia-icon">
              🤖
            </div>

            <div className="agroia-conteudo">

              <span>
                03 · AGROIA
              </span>

              <h2>
                Quer também a orientação da IA?
              </h2>

              <p>
                A AGROIA poderá analisar a espécie,
                localização, finalidade e informação
                técnica disponível para apresentar
                uma orientação personalizada.
              </p>

              <div className="agroia-contexto">

                <div>
                  <span>ESPÉCIE</span>

                  <strong>
                    🐄 Bovinos
                  </strong>
                </div>

                <div>
                  <span>PROVÍNCIA</span>

                  <strong>
                    {provincia}
                  </strong>
                </div>

                <div>
                  <span>OBJECTIVO</span>

                  <strong>
                    {finalidade}
                  </strong>
                </div>

              </div>

              <button
                type="button"
                className="agroia-btn"
              >
                🤖 Pedir orientação à AGROIA
              </button>

              <small className="agroia-aviso">
                A orientação da IA é informativa.
                Questões clínicas e decisões
                veterinárias devem ser avaliadas
                por um profissional habilitado.
              </small>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FONTES
      ===================================================== */}

      <section className="orientacoes-fontes">

        <div className="container">

          <div className="orientacoes-heading">

            <span>
              04 · TRANSPARÊNCIA
            </span>

            <h2>
              Fontes e referências técnicas
            </h2>

            <p>
              As orientações da plataforma deverão
              indicar as fontes utilizadas, permitindo
              ao produtor consultar a informação original.
            </p>

          </div>


          <div className="orientacoes-fontes-box">

            <div>

              <span>
                📚
              </span>

              <div>

                <strong>
                  Fontes oficiais e técnicas
                </strong>

                <p>
                  A AGROINOVA dará prioridade a
                  instituições oficiais, literatura
                  técnica, investigação científica
                  e profissionais identificados.
                </p>

              </div>

            </div>

            <Link href="/biblioteca">
              Explorar Biblioteca →
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          APOIO
      ===================================================== */}

      <section className="orientacoes-apoio">

        <div className="container">

          <div>

            <span>
              PRECISA DE AJUDA?
            </span>

            <h2>
              Fale com um profissional
            </h2>

            <p>
              A AGROINOVA deverá futuramente permitir
              encontrar veterinários, técnicos, criadores
              experientes e serviços pecuários verificados.
            </p>

          </div>

          <Link href="/directorio">
            Explorar Directório →
          </Link>

        </div>

      </section>

    </main>
  );
}