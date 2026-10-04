import Link from "next/link";

const secoes = [
  {
    numero: "01",
    titulo: "Identificação da cultura",
    descricao:
      "Classificação botânica, nome científico, características gerais e importância agronómica do milho.",
  },
  {
    numero: "02",
    titulo: "Importância agrícola",
    descricao:
      "Papel do milho na alimentação humana, alimentação animal, indústria e segurança alimentar.",
  },
  {
    numero: "03",
    titulo: "Características botânicas",
    descricao:
      "Morfologia da planta, sistema radicular, colmo, folhas, inflorescências e formação da espiga.",
  },
  {
    numero: "04",
    titulo: "Clima e ambiente",
    descricao:
      "Temperatura, precipitação, disponibilidade hídrica, radiação e factores ambientais.",
  },
  {
    numero: "05",
    titulo: "Solo",
    descricao:
      "Características físicas e químicas do solo, drenagem, fertilidade e preparação da área.",
  },
  {
    numero: "06",
    titulo: "Sementes e cultivares",
    descricao:
      "Qualidade da semente, escolha da cultivar, ciclo, adaptação e população de plantas.",
  },
  {
    numero: "07",
    titulo: "Sementeira",
    descricao:
      "Época, profundidade, espaçamento, população e cuidados durante a implantação da cultura.",
  },
  {
    numero: "08",
    titulo: "Nutrição e fertilização",
    descricao:
      "Exigências nutricionais, análise do solo, adubação e eficiência do uso de nutrientes.",
  },
  {
    numero: "09",
    titulo: "Maneio da cultura",
    descricao:
      "Controlo de plantas infestantes, conservação do solo e acompanhamento do desenvolvimento.",
  },
  {
    numero: "10",
    titulo: "Pragas",
    descricao:
      "Principais pragas, identificação dos danos, monitorização e princípios de manejo integrado.",
  },
  {
    numero: "11",
    titulo: "Doenças",
    descricao:
      "Principais doenças, sintomas, factores de risco e estratégias de prevenção e manejo.",
  },
  {
    numero: "12",
    titulo: "Água e irrigação",
    descricao:
      "Necessidades hídricas, períodos críticos e princípios de gestão da água.",
  },
  {
    numero: "13",
    titulo: "Colheita",
    descricao:
      "Indicadores de maturidade, momento adequado e métodos de colheita.",
  },
  {
    numero: "14",
    titulo: "Pós-colheita",
    descricao:
      "Secagem, limpeza, classificação, conservação e redução de perdas.",
  },
  {
    numero: "15",
    titulo: "Armazenamento",
    descricao:
      "Boas práticas para conservação do grão e controlo de humidade, pragas e deterioração.",
  },
  {
    numero: "16",
    titulo: "Utilização",
    descricao:
      "Alimentação humana, alimentação animal, transformação agroindustrial e outros usos.",
  },
];

const investigadores = [
  {
    nome: "Israel Alexandre Pereira Filho",
    funcao: "Investigador — Embrapa Milho e Sorgo",
    foto: "/images/agricultura/autores/israel-pereira-filho.jpg",
    contribuicao:
      "Investigação e publicação técnica relacionada com sistemas de produção e cultivares de milho.",
  },
  {
    nome: "Emerson Borghi",
    funcao: "Investigador — Embrapa Milho e Sorgo",
    foto: "/images/agricultura/autores/emerson-borghi.jpg",
    contribuicao:
      "Contribuições técnicas relacionadas com cultivares, sistemas de cultivo e produção de milho.",
  },
  {
    nome: "Crebio José Avila",
    funcao: "Investigador — Embrapa Agropecuária Oeste",
    foto: "/images/agricultura/autores/crebio-avila.jpg",
    contribuicao:
      "Estudos e materiais técnicos relacionados com manejo, pragas e problemas fitossanitários do milho.",
  },
  {
    nome: "Ricardo Augusto de Miranda",
    funcao: "Investigador — Embrapa Milho e Sorgo",
    foto: "/images/agricultura/autores/ricardo-miranda.jpg",
    contribuicao:
      "Contribuições em produtividade, rentabilidade e intensificação tecnológica da cultura.",
  },
];

const referencias = [
  {
    autor:
      "Pereira Filho, I. A., & Borghi, E.",
    ano: "2022",
    titulo: "Cultivares de milho para safra 2022/2023.",
    instituicao: "Embrapa Milho e Sorgo",
  },
  {
    autor:
      "Avila, C. J., Silva, I. F. da, Cavalheiro, B. M., Vieira, E. C. de S., & Silva, P. G.",
    ano: "2021",
    titulo: "Milho: manejo coerente.",
    instituicao: "Embrapa Agropecuária Oeste",
  },
  {
    autor:
      "Miranda, R. A. de, Borghi, E., Karam, D., et al.",
    ano: "2021",
    titulo:
      "Aumento de produtividade e rentabilidade de milho com intensificação tecnológica.",
    instituicao: "Embrapa Milho e Sorgo",
  },
  {
    autor:
      "Avila, C. J., Oliveira, C. M. de, Moreira, S. C. da S., Bianco, R., & Tamai, M. A.",
    ano: "2022",
    titulo:
      "Cigarrinha-do-milho: desafios ao manejo de enfezamentos e viroses na cultura do milho.",
    instituicao: "Embrapa Agropecuária Oeste",
  },
];

export default function MilhoPage() {
  return (
    <main className="pagina-milho">
      <section className="milho-hero">
        <div className="milho-container">
          <div className="milho-breadcrumb">
            <Link href="/agricultura">Agricultura</Link>
            <span>/</span>
            <span>Milho</span>
          </div>

          <div className="milho-hero-grid">
            <div>
              <p className="milho-kicker">DOSSIÊ TÉCNICO DE CULTURA</p>

              <h1>Milho</h1>

              <p className="milho-nome-cientifico">
                <em>Zea mays L.</em>
              </p>

              <p className="milho-hero-texto">
                Base técnica de conhecimento sobre a cultura do milho,
                reunindo fundamentos agronómicos, práticas de produção,
                sanidade vegetal, pós-colheita e referências científicas.
              </p>

              <div className="milho-meta">
                <div>
                  <strong>Cultura</strong>
                  <span>Cereal</span>
                </div>

                <div>
                  <strong>Finalidade</strong>
                  <span>Alimentar e agroindustrial</span>
                </div>

                <div>
                  <strong>Aplicação</strong>
                  <span>Produção agrícola</span>
                </div>
              </div>
            </div>

            <div className="milho-hero-documento">
              <div className="milho-documento-topo">
                <span>DOSSIÊ</span>
                <span>01</span>
              </div>

              <div className="milho-documento-corpo">
                <p>AGROINOVA ANGOLA</p>
                <strong>
                  Conhecimento técnico para a produção de milho
                </strong>
                <small>
                  Conteúdo organizado a partir de referências técnicas e
                  científicas verificáveis.
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="milho-introducao">
        <div className="milho-container">
          <div className="milho-introducao-grid">
            <div>
              <p className="milho-section-label">VISÃO GERAL</p>

              <h2>
                Uma cultura estratégica para a agricultura e para a cadeia
                agroalimentar
              </h2>
            </div>

            <div>
              <p>
                O milho ocupa uma posição importante nos sistemas agrícolas
                devido à sua utilização na alimentação humana, alimentação
                animal e transformação agroindustrial.
              </p>

              <p>
                Em Angola, o milho integra o grupo das principais culturas
                cerealíferas. Dados oficiais recentes do Ministério da
                Agricultura e Florestas mostram a relevância da cultura na
                produção nacional.
              </p>

              <p>
                Este dossiê organiza o conhecimento técnico por etapas do
                sistema produtivo, permitindo ao produtor, estudante, técnico,
                investigador e gestor rural consultar os principais temas
                relacionados com a cultura.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="milho-seccoes">
        <div className="milho-container">
          <div className="milho-titulo-seccao">
            <div>
              <p className="milho-section-label">CONTEÚDO TÉCNICO</p>
              <h2>Manual técnico da cultura</h2>
            </div>

            <p>
              Consulte os principais componentes do sistema de produção do
              milho.
            </p>
          </div>

          <div className="milho-seccoes-grid">
            {secoes.map((secao) => (
              <article className="milho-secao-card" key={secao.numero}>
                <div className="milho-secao-numero">{secao.numero}</div>

                <div>
                  <h3>{secao.titulo}</h3>
                  <p>{secao.descricao}</p>
                </div>

                <button type="button">Consultar conteúdo</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="milho-angola">
        <div className="milho-container">
          <div className="milho-angola-box">
            <div>
              <p className="milho-section-label">ENQUADRAMENTO NACIONAL</p>

              <h2>Milho na agricultura de Angola</h2>

              <p>
                A análise da cultura deve considerar as diferentes condições
                agroecológicas existentes no território angolano. Práticas de
                produção, época de sementeira, disponibilidade de água,
                fertilidade do solo e pressão de pragas podem variar
                significativamente entre regiões.
              </p>

              <p>
                Por isso, as recomendações apresentadas pelo AGROINOVA devem
                ser interpretadas em função das condições locais e, sempre que
                necessário, complementadas por diagnóstico técnico.
              </p>
            </div>

            <div className="milho-factos">
              <div>
                <strong>2022/23</strong>
                <span>Campanha agrícola abrangida pelo Anuário Estatístico</span>
              </div>

              <div>
                <strong>2023/24</strong>
                <span>Campanha agrícola abrangida pelo Anuário Estatístico</span>
              </div>

              <div>
                <strong>MINAGRIF</strong>
                <span>Fonte institucional de referência nacional</span>
              </div>

              <div>
                <strong>INE</strong>
                <span>Disponibilização de informação estatística</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="milho-investigadores">
        <div className="milho-container">
          <div className="milho-titulo-seccao">
            <div>
              <p className="milho-section-label">
                CONTRIBUIDORES E REFERÊNCIAS
              </p>

              <h2>Investigadores e especialistas</h2>
            </div>

            <p>
              Espaço destinado à identificação dos autores e especialistas
              associados às referências técnicas utilizadas.
            </p>
          </div>

          <div className="milho-investigadores-grid">
            {investigadores.map((investigador) => (
              <article
                className="milho-investigador-card"
                key={investigador.nome}
              >
                <div className="milho-foto-investigador">
                  <div>
                    <span>FOTOGRAFIA</span>
                    <small>A inserir</small>
                  </div>
                </div>

                <div className="milho-investigador-info">
                  <h3>{investigador.nome}</h3>

                  <p className="milho-investigador-funcao">
                    {investigador.funcao}
                  </p>

                  <p>{investigador.contribuicao}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="milho-nota-autores">
            <strong>Nota editorial</strong>

            <p>
              A presença destes investigadores nesta página não significa que
              sejam autores do conteúdo produzido pelo AGROINOVA ANGOLA. Os
              seus nomes são apresentados como autores ou colaboradores de
              referências técnicas utilizadas na construção da base de
              conhecimento.
            </p>
          </div>
        </div>
      </section>

      <section className="milho-referencias">
        <div className="milho-container">
          <div className="milho-titulo-seccao">
            <div>
              <p className="milho-section-label">
                BASE DOCUMENTAL
              </p>

              <h2>Referências técnicas</h2>
            </div>

            <p>
              Publicações utilizadas como base para o desenvolvimento do
              conteúdo técnico.
            </p>
          </div>

          <div className="milho-referencias-lista">
            {referencias.map((referencia, index) => (
              <article
                className="milho-referencia"
                key={`${referencia.titulo}-${index}`}
              >
                <div className="milho-referencia-ano">
                  {referencia.ano}
                </div>

                <div>
                  <h3>{referencia.titulo}</h3>

                  <p>{referencia.autor}</p>

                  <span>{referencia.instituicao}</span>
                </div>

                <button type="button">Ver referência</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="milho-rodape">
        <div className="milho-container">
          <div>
            <p className="milho-section-label">AGROINOVA ANGOLA</p>

            <h2>
              Conhecimento técnico organizado para apoiar decisões no campo.
            </h2>
          </div>

          <Link href="/agricultura">
            Voltar à biblioteca agrícola
          </Link>
        </div>
      </section>
    </main>
  );
}