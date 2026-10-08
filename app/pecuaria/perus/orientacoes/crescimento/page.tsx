import Link from "next/link";

const imagens = {
  hero:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Turkey%20poults.jpg?width=1800",
  crescimento:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Turkeys%20in%20a%20barn.jpg?width=1600",
  adulto:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Turkey%20farm.jpg?width=1600",
  alimentacao:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Turkey%20feeding.jpg?width=1600",
  manejo:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Turkey%20farm%20-%20panoramio.jpg?width=1600",
};

const fases = [
  {
    numero: "01",
    titulo: "Fase inicial",
    descricao:
      "Os primeiros dias e semanas exigem atenção especial à temperatura, acesso à água, alimentação, cama, higiene e capacidade de localizar rapidamente alimento e bebedouros.",
    pontos: [
      "Ambiente protegido e sem correntes de ar prejudiciais",
      "Água limpa permanentemente disponível",
      "Ração adequada à fase de desenvolvimento",
      "Observação frequente do comportamento",
    ],
  },
  {
    numero: "02",
    titulo: "Fase de crescimento",
    descricao:
      "Com o desenvolvimento corporal, aumenta a importância do espaço disponível, da qualidade da alimentação, da ventilação e da uniformidade do lote.",
    pontos: [
      "Monitorizar o desenvolvimento corporal",
      "Evitar competição excessiva por alimento e água",
      "Manter cama seca",
      "Reduzir situações de stress",
    ],
  },
  {
    numero: "03",
    titulo: "Fase de acabamento",
    descricao:
      "Nesta fase o produtor acompanha a evolução do peso e da conformação corporal, ajustando o manejo às características do lote e ao objetivo produtivo.",
    pontos: [
      "Acompanhar peso e uniformidade",
      "Manter disponibilidade de água",
      "Evitar mudanças bruscas de manejo",
      "Preparar o lote para o destino comercial",
    ],
  },
];

const indicadores = [
  {
    titulo: "Peso corporal",
    texto:
      "O peso é um dos indicadores mais úteis para acompanhar o desenvolvimento. Deve ser interpretado juntamente com idade, genética, alimentação e condições de criação.",
  },
  {
    titulo: "Uniformidade",
    texto:
      "Um lote com aves de tamanhos muito diferentes merece investigação. A desigualdade pode estar relacionada com acesso ao alimento, água, doenças, competição ou manejo.",
  },
  {
    titulo: "Consumo de água",
    texto:
      "A água participa diretamente de praticamente todas as funções fisiológicas. Redução repentina do consumo pode ser um sinal de alteração ambiental, sanitária ou de acesso.",
  },
  {
    titulo: "Comportamento",
    texto:
      "A observação diária permite identificar alterações antes que sejam evidentes nos pesos. Aves ativas, distribuídas e com acesso normal aos recursos são importantes indicadores de manejo.",
  },
];

const problemas = [
  {
    titulo: "Crescimento lento",
    causas:
      "Pode estar relacionado com alimentação inadequada, consumo insuficiente, problemas sanitários, stress térmico, água de má qualidade ou competição dentro do lote.",
  },
  {
    titulo: "Lote muito desigual",
    causas:
      "Pode surgir quando algumas aves têm maior acesso ao alimento ou à água, quando existem diferenças de saúde ou quando as condições ambientais não são uniformes.",
  },
  {
    titulo: "Queda de consumo",
    causas:
      "Mudanças ambientais, água contaminada, alimento deteriorado, stress, problemas de equipamento ou doença podem alterar o consumo.",
  },
  {
    titulo: "Aves pequenas e debilitadas",
    causas:
      "A situação exige observação individual e investigação das condições sanitárias e nutricionais. Não se deve assumir uma causa única sem avaliação adequada.",
  },
];

const erros = [
  "Avaliar o crescimento apenas pelo tamanho visual das aves.",
  "Não pesar uma amostra do lote durante o ciclo.",
  "Ignorar diferenças grandes entre aves.",
  "Permitir competição excessiva nos comedouros.",
  "Ter poucos pontos de acesso à água.",
  "Usar água de qualidade desconhecida.",
  "Alterar a alimentação bruscamente.",
  "Manter cama húmida durante longos períodos.",
  "Ignorar sinais de doença porque algumas aves continuam a comer.",
  "Não registar idade, peso e observações do lote.",
];

export default function PerusCrescimentoPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={imagens.hero}
            alt="Perus jovens em crescimento"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/65" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">
              AGROINOVA ANGOLA • Pecuária • Perus
            </p>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Crescimento dos Perus
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
              Guia técnico para acompanhar o desenvolvimento dos perus desde a
              fase inicial até ao acabamento, considerando alimentação, água,
              ambiente, espaço, saúde, peso corporal e uniformidade do lote.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20">
                Desenvolvimento corporal
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20">
                Manejo do lote
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20">
                Monitorização
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
              Por que acompanhar o crescimento?
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Crescer não significa apenas ganhar peso
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              O desenvolvimento de um peru depende da interação entre genética,
              alimentação, água, ambiente, saúde, espaço e qualidade do manejo.
              Por isso, observar somente o tamanho das aves pode esconder
              problemas que estão a surgir dentro do lote.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Um bom programa de acompanhamento procura perceber se as aves
              estão a desenvolver-se de forma relativamente uniforme e se
              possuem condições adequadas para expressar o seu potencial
              produtivo.
            </p>

            <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
              <p className="font-bold text-emerald-900">
                Princípio fundamental
              </p>
              <p className="mt-2 leading-7 text-emerald-800">
                Peso, comportamento, consumo, aparência corporal e condições do
                ambiente devem ser analisados em conjunto.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
            <img
              src={imagens.crescimento}
              alt="Perus em instalação de criação"
              className="h-[420px] w-full object-cover"
            />
            <div className="p-5">
              <p className="text-sm font-semibold text-slate-500">
                Observação do lote
              </p>
              <p className="mt-1 font-bold text-slate-900">
                O comportamento das aves fornece informações importantes sobre
                o estado do ambiente e do manejo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FASES */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Desenvolvimento
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              Principais fases do crescimento
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              As necessidades dos perus mudam à medida que o animal cresce.
              Portanto, o manejo deve acompanhar essas mudanças.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {fases.map((fase) => (
              <article
                key={fase.numero}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-700 text-lg font-black text-white">
                  {fase.numero}
                </div>

                <h3 className="mt-6 text-2xl font-black text-slate-900">
                  {fase.titulo}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {fase.descricao}
                </p>

                <ul className="mt-6 space-y-3">
                  {fase.pontos.map((ponto) => (
                    <li
                      key={ponto}
                      className="flex gap-3 text-sm leading-6 text-slate-700"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                      <span>{ponto}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AMBIENTE */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200">
            <img
              src={imagens.manejo}
              alt="Criação de perus em ambiente de produção"
              className="h-[440px] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Ambiente e crescimento
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              O ambiente pode acelerar ou limitar o desenvolvimento
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Temperatura, ventilação, humidade da cama, densidade, qualidade
              da água e acesso aos equipamentos influenciam o conforto das aves
              e, consequentemente, o seu desempenho.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                [
                  "Ventilação",
                  "Ajuda a controlar calor, humidade e qualidade do ar.",
                ],
                [
                  "Espaço",
                  "Reduz competição e facilita a movimentação das aves.",
                ],
                [
                  "Cama",
                  "Deve permanecer o mais seca e limpa possível.",
                ],
                [
                  "Água",
                  "Deve estar disponível e apresentar qualidade adequada.",
                ],
              ].map(([titulo, texto]) => (
                <div
                  key={titulo}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <h3 className="font-bold text-slate-900">{titulo}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ALIMENTAÇÃO */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
                Nutrição
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Crescimento começa com alimentação adequada
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                A dieta deve acompanhar a fase de desenvolvimento e ser
                formulada de acordo com as necessidades nutricionais dos
                animais. Não existe uma única ração adequada para todas as
                fases.
              </p>

              <p className="mt-4 leading-8 text-slate-300">
                Além da composição da ração, importa verificar armazenamento,
                frescura, acesso aos comedouros e possíveis sinais de rejeição
                ou redução do consumo.
              </p>

              <Link
                href="/pecuaria/perus/orientacoes/alimentacao"
                className="mt-7 inline-flex rounded-xl bg-emerald-600 px-5 py-3 font-bold text-white transition hover:bg-emerald-500"
              >
                Ver orientação sobre alimentação
              </Link>
            </div>

            <div className="overflow-hidden rounded-3xl ring-1 ring-white/10">
              <img
                src={imagens.alimentacao}
                alt="Alimentação de perus"
                className="h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INDICADORES */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
            Monitorização
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
            Quatro indicadores que o produtor deve acompanhar
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {indicadores.map((item, index) => (
            <article
              key={item.titulo}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 font-black text-emerald-700">
                  {String(index + 1).padStart(2, "0")}
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
      </section>

      {/* PESAGEM */}
      <section className="bg-emerald-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
                Registos de produção
              </p>

              <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
                Pesar é transformar observação em informação
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                A pesagem periódica de uma amostra representativa do lote ajuda
                a identificar tendências de crescimento que podem não ser
                percebidas apenas visualmente.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                O importante é manter um método consistente: mesma rotina,
                registo da idade, identificação do lote e comparação com
                referências adequadas à genética e ao sistema de produção.
              </p>

              <div className="mt-8 rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
                <h3 className="font-black text-slate-900">
                  Registo mínimo recomendado
                </h3>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    "Data da observação",
                    "Idade aproximada",
                    "Número do lote",
                    "Número de aves avaliadas",
                    "Peso observado",
                    "Observações de manejo",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-emerald-100">
              <h3 className="text-2xl font-black text-slate-900">
                Não procure apenas o maior peru
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Um lote equilibrado e saudável pode ser mais interessante para
                a produção do que um pequeno número de aves muito desenvolvidas
                acompanhado de muitas aves atrasadas.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Observar a distribuição dos tamanhos",
                  "Investigar aves muito abaixo do padrão do lote",
                  "Relacionar peso com idade",
                  "Verificar alimentação e acesso à água",
                  "Avaliar condições sanitárias",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 p-4"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
                    <span className="font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
            Diagnóstico de manejo
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
            Quando o crescimento não está a acontecer como esperado
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Um problema de crescimento normalmente merece uma análise do
            conjunto das condições de produção, em vez de uma explicação
            isolada.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {problemas.map((problema) => (
            <article
              key={problema.titulo}
              className="rounded-3xl border border-amber-200 bg-amber-50 p-7"
            >
              <h3 className="text-xl font-black text-slate-900">
                {problema.titulo}
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                {problema.causas}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ANGOLA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2rem] bg-slate-900 p-8 text-white sm:p-10 lg:p-12">
            <div className="max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
                Realidade angolana
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Crescimento dos perus exige adaptação ao sistema de produção
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                Em Angola existem diferentes condições climáticas, sistemas de
                criação e níveis de acesso a insumos. Uma estratégia adequada
                numa exploração intensiva pode não ser apropriada para uma
                criação familiar ou semi-intensiva.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/10">
                  <h3 className="font-black">Clima</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Calor e humidade podem aumentar o desafio de manter o
                    conforto das aves.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/10">
                  <h3 className="font-black">Água</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    A disponibilidade e qualidade da água são fundamentais para
                    manter o consumo e o desempenho.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/10">
                  <h3 className="font-black">Manejo</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    O produtor deve adaptar equipamentos, espaço e rotina ao
                    tamanho real do lote.
                  </p>
                </div>
              </div>
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
              10 erros que podem comprometer o crescimento
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Muitos problemas de desenvolvimento começam com falhas simples
              de rotina. O acompanhamento diário ajuda a corrigi-las cedo.
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
              Checklist do produtor
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900">
              O que verificar durante o acompanhamento?
            </h2>

            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {[
                "As aves estão ativas e distribuídas normalmente?",
                "Existe água limpa disponível em quantidade adequada?",
                "O alimento está disponível e em boas condições?",
                "Há diferenças muito grandes de tamanho?",
                "A cama apresenta excesso de humidade?",
                "A ventilação está adequada?",
                "Existem aves isoladas ou com comportamento anormal?",
                "O peso está a ser acompanhado?",
                "Existem registos das observações?",
                "Alguma alteração recente de manejo pode explicar o problema?",
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
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
                Orientações sobre perus
              </p>

              <h2 className="mt-2 text-3xl font-black text-slate-900">
                Continue a explorar
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
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
              href="/pecuaria/perus/orientacoes/reproducao"
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-50"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Próxima
              </span>
              <h3 className="mt-2 font-black text-slate-900">
                Reprodução
              </h3>
            </Link>

            <Link
              href="/pecuaria/perus/orientacoes/mercado"
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-50"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Próxima
              </span>
              <h3 className="mt-2 font-black text-slate-900">Mercado</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* NOTA TÉCNICA */}
      <section className="bg-slate-950 py-10 text-slate-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm leading-7">
            <strong className="text-white">Nota técnica:</strong> os resultados
            de crescimento variam conforme genética, sexo, idade, sistema de
            produção, alimentação, ambiente e condições sanitárias. Valores de
            desempenho devem ser comparados com referências apropriadas ao
            material genético e ao sistema utilizado. Alterações importantes de
            comportamento, consumo, mortalidade ou crescimento devem ser
            investigadas com apoio de um profissional habilitado.
          </p>
        </div>
      </section>
    </main>
  );
}