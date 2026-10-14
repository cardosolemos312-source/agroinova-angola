
const verde = "#166534";
const verdeEscuro = "#14532d";
const borda = "#dcebe1";

const secoes = [
  {
    titulo: "Condições de cultivo",
    itens: [
      ["Clima", "Prefere temperaturas amenas; o calor intenso pode prejudicar a formação das cabeças."],
      ["Temperatura", "Desenvolve-se melhor, em geral, entre 15 °C e 22 °C, conforme a variedade."],
      ["Luz", "Necessita de boa exposição solar."],
      ["Água", "Rega regular, evitando tanto a seca como o encharcamento."],
    ],
  },
  {
    titulo: "Solos e preparação",
    itens: [
      ["Tipo de solo", "Solo fértil, profundo, bem drenado e rico em matéria orgânica."],
      ["pH indicativo", "Cerca de 6,0–7,0; analisar o solo antes de corrigir a acidez."],
      ["Preparação", "Preparar o terreno, melhorar a estrutura e assegurar boa drenagem."],
      ["Rotação", "Evitar o cultivo sucessivo de repolho e outras crucíferas no mesmo terreno."],
    ],
  },
  {
    titulo: "Províncias e adaptação",
    itens: [
      ["Regiões de altitude", "As zonas mais frescas podem oferecer condições favoráveis."],
      ["Regiões quentes", "Avaliar variedades tolerantes ao calor e ajustar o calendário de plantio."],
      ["Escolha da área", "Considerar temperatura, água disponível, solo e acesso ao mercado."],
      ["Recomendação", "Confirmar as condições locais com os serviços de extensão agrária."],
    ],
  },
  {
    titulo: "Variedades",
    itens: [
      ["Repolho verde", "Muito utilizado para consumo fresco e venda nos mercados."],
      ["Ciclo", "Existem variedades precoces e tardias, com diferentes exigências."],
      ["Selecção", "Escolher sementes certificadas, adaptadas às condições locais."],
      ["Compra", "Verificar a origem, a validade e as instruções do fornecedor."],
    ],
  },
  {
    titulo: "Sementeira e transplante",
    itens: [
      ["Viveiro", "Utilizar substrato limpo, recipientes adequados e rega cuidadosa."],
      ["Mudas", "Transplantar quando estiverem vigorosas e suficientemente desenvolvidas."],
      ["Espaçamento", "Como referência inicial, avaliar 40–60 cm entre plantas e 60–75 cm entre linhas."],
      ["Instalação", "Regar após o transplante e proteger as mudas do stress inicial."],
    ],
  },
  {
    titulo: "Irrigação e fertilização",
    itens: [
      ["Irrigação", "Manter humidade regular, sobretudo durante a formação das cabeças."],
      ["Fertilização", "Basear as doses na análise do solo e nas necessidades da cultura."],
      ["Matéria orgânica", "Utilizar composto bem maturado e de origem segura."],
      ["Cuidados", "Evitar excesso de azoto e água parada junto às raízes."],
    ],
  },
  {
    titulo: "Pragas e doenças",
    itens: [
      ["Lagartas", "Inspeccionar folhas e controlar precocemente as lagartas das crucíferas."],
      ["Pulgões", "Monitorizar as colónias, sobretudo nas folhas jovens."],
      ["Hérnia das crucíferas", "Prevenir com rotação, drenagem e mudas sadias."],
      ["Podridões", "Reduzir o excesso de humidade e remover plantas afectadas."],
    ],
  },
  {
    titulo: "Colheita e conservação",
    itens: [
      ["Maturidade", "Colher quando as cabeças estiverem firmes e bem formadas."],
      ["Manuseamento", "Evitar cortes, pancadas e exposição prolongada ao sol."],
      ["Conservação", "Manter em local fresco, limpo e ventilado."],
      ["Transporte", "Usar embalagens limpas e evitar esmagamento."],
    ],
  },
  {
    titulo: "Comercialização",
    itens: [
      ["Mercados", "Avaliar feiras, mercados municipais, retalhistas e compradores institucionais."],
      ["Planeamento", "Programar a produção de acordo com a procura e a disponibilidade de água."],
      ["Custos", "Registar despesas com sementes, mão de obra, fertilizantes e transporte."],
      ["Rendimento", "Calcular a margem com base nos custos e nos preços efectivamente observados."],
    ],
  },
];

const informacoes = [
  { titulo: "Nome científico", valor: "Brassica oleracea var. capitata" },
  { titulo: "Família botânica", valor: "Brassicaceae" },
  { titulo: "Tipo de cultura", valor: "Hortícola alimentar" },
  { titulo: "Parte consumida", valor: "Folhas compactadas em cabeça" },
  { titulo: "Ciclo", valor: "Depende da variedade e das condições de cultivo" },
];

const fontes = [
  {
    nome: "FAO",
    descricao: "Recursos técnicos sobre horticultura e produção vegetal.",
    url: "https://www.fao.org/",
  },
  {
    nome: "INIA Angola",
    descricao: "Investigação agrária e informação técnica nacional.",
    url: "https://www.google.com/search?q=INIA+Angola+investiga%C3%A7%C3%A3o+agr%C3%A1ria",
  },
  {
    nome: "MINAGRIF",
    descricao: "Informação institucional e serviços de apoio à agricultura.",
    url: "https://minagrif.gov.ao/",
  },
];

export default function PaginaRepolho() {
  return (
    <main className="min-h-screen bg-[#f5f7f6] text-[#17221b]">
      <style>{`
        .repolho-container {
          width: min(1180px, calc(100% - 40px));
          margin-inline: auto;
        }
        .repolho-card {
          border: 1px solid ${borda};
          border-radius: 12px;
          background: #fff;
          padding: 22px;
          box-shadow: 0 3px 12px rgba(20, 83, 45, .035);
        }
        .repolho-card h3 {
          color: ${verdeEscuro};
          font-size: 17px;
          font-weight: 700;
          margin-bottom: 16px;
        }
        .repolho-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .repolho-card li {
          font-size: 14px;
          line-height: 1.7;
          color: #475569;
          margin-bottom: 12px;
          padding-left: 15px;
          position: relative;
        }
        .repolho-card li:before {
          content: "";
          position: absolute;
          left: 0;
          top: 9px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #22c55e;
        }
        .repolho-card li:last-child { margin-bottom: 0; }
        .repolho-card li strong {
          color: #24392b;
        }
        .repolho-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }
        @media (max-width: 850px) {
          .repolho-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 560px) {
          .repolho-container { width: calc(100% - 28px); }
          .repolho-grid { grid-template-columns: 1fr; }
          .repolho-card { padding: 18px; }
        }
      `}</style>

      {/* Cabeçalho da página */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(90deg, rgba(9,65,42,.96), rgba(9,65,42,.76), rgba(9,65,42,.15)), url('https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=1800&q=85') center 48%/cover",
        }}
      >
        <div className="repolho-container py-14 md:py-20">
          <div className="mb-5 flex items-center gap-2 text-sm text-green-100">
            <a href="/">Início</a>
            <span>›</span>
            <a href="/agricultura">Agricultura</a>
            <span>›</span>
            <span className="text-white">Repolho</span>
          </div>

          <div className="max-w-2xl text-white">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[.18em] text-green-200">
              Culturas hortícolas
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Repolho
            </h1>
            <p className="mt-4 text-lg font-medium md:text-xl">
              Produção sustentável para uma alimentação saudável
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-green-50 md:text-base">
              Conheça as condições de cultivo, as práticas de produção e os
              cuidados necessários para produzir repolho com qualidade,
              eficiência e adaptação às diferentes regiões de Angola.
            </p>
            <a
              href="#cultivo"
              className="mt-7 inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-green-900 transition hover:bg-green-50"
            >
              Explorar orientações técnicas
            </a>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <div className="repolho-container py-8 md:py-10">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="min-w-0">
            {/* Enquadramento */}
            <section className="mb-6 grid overflow-hidden rounded-xl border border-[#dcebe1] bg-white md:grid-cols-[1.15fr_.85fr]">
              <div className="p-6 md:p-8">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-700">
                  Enquadramento da cultura
                </p>
                <h2 className="mb-4 text-2xl font-bold text-[#14532d]">
                  Uma hortícola de valor alimentar e comercial
                </h2>
                <p className="text-sm leading-7 text-slate-600">
                  O repolho (<em>Brassica oleracea</em> var. <em>capitata</em>)
                  é uma hortícola da família Brassicaceae. As suas folhas
                  formam uma cabeça compacta e são consumidas cozidas, em
                  saladas e em diversas preparações culinárias.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  A cultura pode contribuir para a diversificação da produção
                  familiar e para o abastecimento dos mercados. O sucesso
                  depende da escolha da variedade, do clima, da água, do
                  maneio fitossanitário e do planeamento da comercialização.
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=900&q=80"
                alt="Produção de hortícolas"
                className="h-full min-h-64 w-full object-cover"
                loading="lazy"
              />
            </section>

            <div id="cultivo" className="mb-5 scroll-mt-6">
              <h2 className="text-2xl font-bold text-[#14532d]">
                Guia técnico de produção
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Consulte as principais etapas e adapte as práticas às
                condições do seu terreno.
              </p>
            </div>

            <div className="repolho-grid">
              {secoes.map((secao) => (
                <section className="repolho-card" key={secao.titulo}>
                  <h3>{secao.titulo}</h3>
                  <ul>
                    {secao.itens.map(([titulo, descricao]) => (
                      <li key={titulo}>
                        <strong>{titulo}: </strong>
                        {descricao}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            {/* Nota técnica */}
            <section className="mt-6 rounded-xl border border-green-200 bg-green-50 p-5">
              <h2 className="font-bold text-green-900">
                Nota técnica para produtores
              </h2>
              <p className="mt-2 text-sm leading-7 text-green-900/80">
                As temperaturas, os espaçamentos e as restantes orientações
                apresentados são referências gerais, não resultados de ensaios
                realizados em todas as províncias angolanas. Confirme as
                recomendações com um técnico agrícola, considerando a análise
                do solo, a variedade, a época de plantio e a disponibilidade
                de água.
              </p>
            </section>
          </div>

          {/* Coluna lateral */}
          <aside className="space-y-5">
            <section className="rounded-xl border border-[#dcebe1] bg-white p-5">
              <h2 className="mb-5 text-lg font-bold text-[#14532d]">
                Informações principais
              </h2>
              <dl className="space-y-4">
                {informacoes.map((item) => (
                  <div key={item.titulo}>
                    <dt className="text-sm font-semibold text-[#166534]">
                      {item.titulo}
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-slate-600">
                      {item.valor}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            <section className="rounded-xl border border-[#dcebe1] bg-white p-5">
              <h2 className="mb-4 text-lg font-bold text-[#14532d]">
                Galeria da cultura
              </h2>
              <div className="space-y-3">
                <img
                  src="https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=700&q=80"
                  alt="Hortícolas em cultivo"
                  className="h-40 w-full rounded-lg object-cover"
                  loading="lazy"
                />
                <img
                  src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=700&q=80"
                  alt="Legumes frescos para alimentação"
                  className="h-40 w-full rounded-lg object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-xs leading-5 text-slate-500">
                Imagens ilustrativas. Não representam necessariamente
                explorações agrícolas localizadas em Angola.
              </p>
            </section>

            <section className="rounded-xl bg-[#14532d] p-6 text-white">
              <h2 className="text-lg font-bold">Produzir com conhecimento</h2>
              <p className="mt-3 text-sm leading-6 text-green-50">
                A observação regular da cultura, a gestão da água e a prevenção
                de pragas ajudam a melhorar a qualidade da produção.
              </p>
              <a
                href="/agricultura"
                className="mt-5 inline-block rounded-lg bg-white px-4 py-3 text-sm font-semibold text-green-900 hover:bg-green-50"
              >
                Voltar à Agricultura
              </a>
            </section>
          </aside>
        </div>

        {/* Fontes */}
        <section className="mt-10 border-t border-[#dcebe1] pt-7">
          <h2 className="text-xl font-bold text-[#14532d]">
            Fontes e recursos técnicos
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Consulte instituições de referência para aprofundar as
            recomendações e validar a sua aplicação em Angola.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {fontes.map((fonte) => (
              <a
                key={fonte.nome}
                href={fonte.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-[#dcebe1] bg-white p-5 transition hover:border-green-600 hover:shadow-md"
              >
                <h3 className="font-bold text-green-800">{fonte.nome}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {fonte.descricao}
                </p>
                <span className="mt-3 inline-block text-sm font-semibold text-green-700">
                  Consultar recurso →
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
