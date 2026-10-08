import Link from "next/link";

const imagens = {
  hero:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Turkey%20farm.jpg?width=1800",
  producao:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Turkeys%20in%20a%20barn.jpg?width=1600",
  comercializacao:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Roast%20turkey.jpg?width=1600",
  ovos:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Turkey%20eggs.jpg?width=1600",
  campo:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Turkey%20farm%20-%20panoramio.jpg?width=1600",
};

const oportunidades = [
  {
    numero: "01",
    titulo: "Venda de aves vivas",
    texto:
      "O produtor pode comercializar aves vivas diretamente a consumidores, comerciantes ou outros agentes da cadeia. O manejo, transporte e bem-estar devem ser considerados durante a operação.",
  },
  {
    numero: "02",
    titulo: "Venda de aves preparadas",
    texto:
      "Dependendo das condições legais, sanitárias e da infraestrutura disponível, pode existir oportunidade de comercialização de carcaças ou produto preparado para consumo.",
  },
  {
    numero: "03",
    titulo: "Ovos para reprodução",
    texto:
      "Um plantel reprodutivo bem organizado pode permitir a comercialização de ovos destinados à incubação, desde que exista procura e sejam cumpridos os requisitos sanitários aplicáveis.",
  },
  {
    numero: "04",
    titulo: "Animais para reprodução",
    texto:
      "A seleção de animais saudáveis e bem desenvolvidos pode criar uma oportunidade adicional de fornecimento de reprodutores a outras explorações.",
  },
];

const compradores = [
  "Famílias e consumidores individuais",
  "Restaurantes e estabelecimentos de alimentação",
  "Hotéis e unidades de hospedagem",
  "Comerciantes e revendedores",
  "Explorações pecuárias",
  "Produtores interessados em reprodução",
  "Eventos e serviços de alimentação",
  "Mercados locais e circuitos de comercialização",
];

const custos = [
  {
    titulo: "Aquisição dos animais",
    texto:
      "Inclui a compra dos perus ou dos ovos/animais destinados à formação do lote.",
  },
  {
    titulo: "Alimentação",
    texto:
      "Normalmente representa uma parcela importante dos custos e deve ser acompanhada por fase de produção.",
  },
  {
    titulo: "Instalações",
    texto:
      "Abrigos, cercas, equipamentos, comedouros, bebedouros e manutenção fazem parte do investimento.",
  },
  {
    titulo: "Sanidade",
    texto:
      "Prevenção, higiene, assistência técnica e outros custos sanitários devem entrar no planeamento.",
  },
  {
    titulo: "Mão de obra",
    texto:
      "Inclui alimentação, limpeza, observação, recolha, registos e outras atividades.",
  },
  {
    titulo: "Transporte",
    texto:
      "A distância até ao comprador e o tipo de produto vendido podem alterar significativamente o custo final.",
  },
];

const erros = [
  "Produzir sem identificar previamente possíveis compradores.",
  "Definir preço sem calcular os custos.",
  "Confundir faturação com lucro.",
  "Ignorar os custos de alimentação.",
  "Não considerar transporte e perdas.",
  "Vender animais sem planear o momento da comercialização.",
  "Não separar animais destinados à reprodução daqueles destinados ao consumo.",
  "Não manter registos de vendas.",
  "Aceitar encomendas superiores à capacidade real da exploração.",
  "Basear o preço apenas no que outro produtor está a cobrar.",
];

export default function PerusMercadoPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={imagens.hero}
            alt="Criação de perus"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">
              AGROINOVA ANGOLA • Pecuária • Perus
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Mercado de Perus
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
              Como transformar a criação de perus numa atividade organizada,
              identificando compradores, calculando custos, planeando a venda e
              criando oportunidades ao longo da cadeia de valor.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20">
                Comercialização
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20">
                Custos
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20">
                Clientes
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20">
                Planeamento
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Produzir para vender
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              O mercado deve entrar no planeamento antes da produção
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Criar perus sem conhecer o destino da produção pode aumentar o
              risco de vendas apressadas, preços desfavoráveis e custos que não
              são recuperados.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Uma exploração comercial deve começar por responder a perguntas
              simples: quem compra, quanto compra, quando compra, que tipo de
              animal procura e como pretende receber o produto.
            </p>

            <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
              <p className="font-black text-emerald-900">
                Regra de ouro
              </p>

              <p className="mt-2 leading-7 text-emerald-800">
                Antes de aumentar o número de aves, procure conhecer a procura
                real e a capacidade de comercialização da sua exploração.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
            <img
              src={imagens.producao}
              alt="Produção de perus"
              className="h-[430px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CADEIA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Cadeia de valor
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              Onde estão as oportunidades?
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              A criação de perus pode gerar diferentes produtos e serviços.
              Isso permite ao produtor escolher uma estratégia de acordo com a
              sua capacidade e com a procura existente.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {oportunidades.map((item) => (
              <article
                key={item.numero}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-700 font-black text-white">
                    {item.numero}
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-slate-900">
                      {item.titulo}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {item.texto}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200">
            <img
              src={imagens.comercializacao}
              alt="Peru preparado para consumo"
              className="h-[460px] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Clientes
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              Conheça o comprador antes de aumentar o lote
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              O comprador pode valorizar características diferentes. Alguns
              procuram aves vivas, outros podem procurar animais para consumo,
              reprodução ou fornecimento regular.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {compradores.map((comprador) => (
                <div
                  key={comprador}
                  className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700 shadow-sm"
                >
                  <span className="mr-2 text-emerald-700">✓</span>
                  {comprador}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PERGUNTAS AO COMPRADOR */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
              Inteligência comercial
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Antes de fechar uma venda, faça perguntas
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              Quanto melhor o produtor conhecer o comprador, menor será o
              risco de preparar uma produção que não corresponde à procura.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Que quantidade pretende comprar?",
              "Prefere aves vivas ou produto preparado?",
              "Qual é o tamanho ou peso pretendido?",
              "Com que frequência compra?",
              "Em que período precisa da produção?",
              "Quem assume o transporte?",
              "Onde será feita a entrega?",
              "Como será realizado o pagamento?",
              "Existem requisitos específicos do comprador?",
            ].map((pergunta, index) => (
              <div
                key={pergunta}
                className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/10"
              >
                <span className="text-sm font-black text-emerald-300">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-3 font-semibold leading-6 text-slate-100">
                  {pergunta}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
            Economia da exploração
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
            Calcule o custo antes de definir o preço
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Vender por um valor superior ao custo da ração não significa
            necessariamente obter lucro. O cálculo deve considerar os diversos
            custos envolvidos na produção.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {custos.map((item) => (
            <article
              key={item.titulo}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-black text-slate-900">
                {item.titulo}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {item.texto}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-emerald-200 bg-emerald-50 p-8">
          <h3 className="text-2xl font-black text-slate-900">
            Uma conta simples para começar
          </h3>

          <p className="mt-4 text-lg leading-8 text-slate-700">
            <strong>Custo total da produção</strong> = animais + alimentação +
            instalações/equipamentos + sanidade + mão de obra + transporte +
            outros custos.
          </p>

          <p className="mt-3 leading-7 text-slate-600">
            A partir daí, o produtor pode calcular o custo médio por ave e
            comparar esse valor com o preço efetivamente recebido na venda.
          </p>
        </div>
      </section>

      {/* PREÇO */}
      <section className="bg-emerald-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-emerald-100 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Formação do preço
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              Não existe um único preço válido para todos os mercados
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              O preço de uma ave pode variar conforme região, peso, idade,
              qualidade, época, forma de venda, distância do comprador,
              quantidade negociada e procura.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-6">
                <h3 className="font-black text-slate-900">
                  Custo
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Quanto foi necessário gastar para produzir?
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6">
                <h3 className="font-black text-slate-900">
                  Mercado
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Quanto os compradores estão dispostos a pagar?
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6">
                <h3 className="font-black text-slate-900">
                  Margem
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  O preço permite recuperar custos e remunerar a atividade?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVOS E REPRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200">
            <img
              src={imagens.ovos}
              alt="Ovos de peru"
              className="h-[420px] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Diversificação
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              O mercado não precisa terminar na venda da ave
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Dependendo do sistema de produção e da procura, uma exploração
              pode desenvolver diferentes linhas de negócio. Ovos para
              reprodução, animais jovens e reprodutores selecionados são
              exemplos de produtos que podem complementar a venda de aves para
              consumo.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Aves", "Produção destinada ao consumo."],
                ["Ovos", "Possível utilização reprodutiva."],
                ["Reprodutores", "Animais selecionados para outros produtores."],
              ].map(([titulo, texto]) => (
                <div
                  key={titulo}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <h3 className="font-black text-slate-900">{titulo}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALOR AGREGADO */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
                Valor acrescentado
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Quanto mais organizada a cadeia, maior a capacidade de criar
                valor
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                A transformação e apresentação do produto podem abrir novas
                oportunidades, mas exigem infraestrutura, higiene,
                conhecimento técnico e cumprimento das regras aplicáveis.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Apresentação adequada do produto",
                  "Embalagem apropriada quando aplicável",
                  "Identificação do produtor",
                  "Informação clara ao consumidor",
                  "Condições adequadas de conservação",
                  "Cumprimento dos requisitos sanitários",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-white/10 p-4 ring-1 ring-white/10"
                  >
                    <span className="font-semibold text-slate-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src={imagens.campo}
                alt="Produção de perus"
                className="h-[450px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ANGOLA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] bg-emerald-900 p-8 text-white sm:p-10 lg:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
            Mercado angolano
          </p>

          <h2 className="mt-3 max-w-4xl text-3xl font-black sm:text-4xl">
            A estratégia comercial deve partir da realidade de cada região
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-emerald-100">
            Angola possui diferentes mercados consumidores, distâncias,
            condições logísticas e sistemas de produção. Por isso, não é
            adequado assumir que o mesmo preço, canal de venda ou modelo de
            negócio funciona igualmente em todas as províncias.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/10">
              <h3 className="font-black">Mercado local</h3>
              <p className="mt-2 text-sm leading-6 text-emerald-100">
                Pode reduzir distâncias e facilitar relações diretas com
                consumidores.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/10">
              <h3 className="font-black">Mercado institucional</h3>
              <p className="mt-2 text-sm leading-6 text-emerald-100">
                Pode exigir maior regularidade, volume, qualidade e capacidade
                de fornecimento.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/10">
              <h3 className="font-black">Venda direta</h3>
              <p className="mt-2 text-sm leading-6 text-emerald-100">
                Pode aproximar produtor e consumidor, dependendo da organização
                e das regras aplicáveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REGISTO COMERCIAL */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Gestão
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900">
              Registe cada venda
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Um pequeno registo comercial permite perceber quais compradores
              são mais importantes, quais períodos apresentam maior procura e
              se a atividade está realmente a gerar resultado.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Data",
                "Cliente",
                "Quantidade",
                "Peso ou categoria",
                "Preço por unidade",
                "Valor total",
                "Forma de pagamento",
                "Transporte",
                "Observações",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ERROS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-700">
              Atenção
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              10 erros comerciais que o produtor deve evitar
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Uma boa produção pode perder rentabilidade quando a
              comercialização não é planeada.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {erros.map((erro, index) => (
              <div
                key={erro}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <span className="font-black text-red-600">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-sm leading-6 text-slate-700">{erro}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="bg-slate-100 py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Checklist comercial
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900">
              Antes de aumentar a produção
            </h2>

            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {[
                "Tenho compradores identificados?",
                "Conheço a quantidade que o mercado consegue absorver?",
                "Sei quanto custa produzir cada ave?",
                "Incluí alimentação no cálculo?",
                "Considerei transporte e perdas?",
                "Tenho capacidade para cumprir as encomendas?",
                "Sei qual produto o comprador procura?",
                "Tenho registos das vendas?",
                "Conheço os requisitos aplicáveis à comercialização?",
                "Tenho uma estratégia caso a venda principal não aconteça?",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="flex gap-3">
                    <span className="font-black text-emerald-700">✓</span>
                    <span className="text-sm font-medium leading-6 text-slate-700">
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="border-t border-slate-200 bg-white py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
            Orientações sobre perus
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900">
            Percorra todo o conhecimento técnico
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            <Link
              href="/pecuaria/perus/orientacoes/alimentacao"
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-50"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Orientação
              </span>
              <h3 className="mt-2 font-black text-slate-900">
                Alimentação
              </h3>
            </Link>

            <Link
              href="/pecuaria/perus/orientacoes/instalacoes"
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-50"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Orientação
              </span>
              <h3 className="mt-2 font-black text-slate-900">
                Instalações
              </h3>
            </Link>

            <Link
              href="/pecuaria/perus/orientacoes/sanidade"
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-50"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Orientação
              </span>
              <h3 className="mt-2 font-black text-slate-900">
                Sanidade
              </h3>
            </Link>

            <Link
              href="/pecuaria/perus/orientacoes/crescimento"
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-50"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Orientação
              </span>
              <h3 className="mt-2 font-black text-slate-900">
                Crescimento
              </h3>
            </Link>

            <Link
              href="/pecuaria/perus/orientacoes/reproducao"
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-50"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Orientação
              </span>
              <h3 className="mt-2 font-black text-slate-900">
                Reprodução
              </h3>
            </Link>

            <Link
              href="/pecuaria/perus"
              className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 transition hover:-translate-y-1 hover:border-emerald-300"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Perus
              </span>
              <h3 className="mt-2 font-black text-slate-900">
                Área principal
              </h3>
            </Link>
          </div>
        </div>
      </section>

      {/* NOTA */}
      <section className="bg-slate-950 py-9 text-slate-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm leading-7">
            <strong className="text-white">Nota técnica:</strong> preços,
            procura, custos e canais de comercialização variam segundo a
            localização, época, escala, sistema de produção, logística e
            condições do mercado. A AGROINOVA ANGOLA não apresenta nesta página
            preços fictícios. Para decisões comerciais, devem ser utilizados
            preços e informações de mercado verificáveis e atualizados.
          </p>
        </div>
      </section>
    </main>
  );
}