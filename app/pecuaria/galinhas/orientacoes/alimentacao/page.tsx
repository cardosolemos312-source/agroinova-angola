"use client";

import Link from "next/link";

const fases = [
  {
    titulo: "Pintos",
    descricao:
      "A alimentação inicial deve fornecer nutrientes suficientes para crescimento rápido e desenvolvimento adequado dos órgãos, sistema imunitário e estrutura óssea.",
  },
  {
    titulo: "Recria",
    descricao:
      "Nesta fase, o objetivo é desenvolver uma ave uniforme, com peso corporal adequado e boa estrutura para entrar posteriormente na produção ou reprodução.",
  },
  {
    titulo: "Pré-postura",
    descricao:
      "A alimentação deve preparar a ave para as alterações fisiológicas associadas ao início da postura, incluindo o desenvolvimento do aparelho reprodutor e maior necessidade de minerais.",
  },
  {
    titulo: "Poedeiras",
    descricao:
      "A dieta deve sustentar a produção de ovos, a manutenção corporal e a formação da casca, considerando o nível produtivo, idade e consumo das aves.",
  },
  {
    titulo: "Frango de corte",
    descricao:
      "A alimentação deve acompanhar o rápido crescimento das aves, com dietas adequadas às diferentes fases e atenção especial à conversão alimentar.",
  },
];

const nutrientes = [
  {
    titulo: "Energia",
    texto:
      "Fornece energia para manutenção, crescimento, atividade e produção. O nível energético da dieta influencia diretamente o consumo de ração.",
  },
  {
    titulo: "Proteína",
    texto:
      "Fornece aminoácidos necessários para formação dos tecidos, enzimas, hormonas, músculos, penas e produção de ovos.",
  },
  {
    titulo: "Aminoácidos",
    texto:
      "Lisina, metionina, treonina e outros aminoácidos são importantes para crescimento e produção. A qualidade da proteína depende do seu perfil de aminoácidos.",
  },
  {
    titulo: "Minerais",
    texto:
      "Cálcio, fósforo, sódio e outros minerais participam na formação óssea, equilíbrio fisiológico e, nas poedeiras, formação da casca do ovo.",
  },
  {
    titulo: "Vitaminas",
    texto:
      "Participam em funções metabólicas, crescimento, reprodução e manutenção da saúde das aves.",
  },
  {
    titulo: "Água",
    texto:
      "É um nutriente essencial e deve estar disponível continuamente, limpa e em quantidade suficiente.",
  },
];

const materiasPrimas = [
  "Milho",
  "Sorgo",
  "Massambala",
  "Massango",
  "Farelo de soja",
  "Farelos de cereais",
  "Óleo vegetal",
  "Calcário",
  "Fosfato",
  "Sal",
  "Premix vitamínico-mineral",
];

const controlo = [
  "Consumo de ração por ave",
  "Consumo de água",
  "Peso corporal",
  "Ganho de peso",
  "Uniformidade do lote",
  "Conversão alimentar",
  "Mortalidade",
  "Produção de ovos",
  "Peso dos ovos",
  "Qualidade da casca",
];

export default function AlimentacaoPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('/imagens/galinhas/filomena.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/50" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
              Galinhas · Orientações técnicas
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Alimentação
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
              Nutrição das galinhas por fase, matérias-primas, nutrientes,
              consumo de ração, água, formulação, armazenamento e controlo da
              eficiência alimentar.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/pecuaria/galinhas/orientacoes"
                className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
              >
                Voltar às orientações
              </Link>

              <Link
                href="/pecuaria/galinhas"
                className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/20"
              >
                Visão geral das galinhas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-4 text-sm text-slate-600 lg:px-8">
          <Link href="/pecuaria" className="hover:text-green-700">
            Pecuária
          </Link>

          <span className="mx-2">/</span>

          <Link
            href="/pecuaria/galinhas/orientacoes"
            className="hover:text-green-700"
          >
            Orientações técnicas
          </Link>

          <span className="mx-2">/</span>

          <span className="font-medium text-slate-900">
            Alimentação
          </span>
        </div>
      </div>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              Nutrição avícola
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              A alimentação como base da produção
            </h2>

            <div className="mt-6 space-y-5 text-justify leading-8 text-slate-700">
              <p>
                A alimentação representa uma das componentes mais importantes
                da produção avícola. A qualidade da dieta influencia o
                crescimento, a eficiência alimentar, a saúde, a produção de
                ovos, o ganho de peso e o resultado económico da exploração.
              </p>

              <p>
                Alimentar corretamente não significa simplesmente fornecer uma
                grande quantidade de ração. A dieta precisa fornecer os
                nutrientes necessários na proporção adequada para a idade,
                finalidade produtiva, genética, ambiente e nível de produção
                das aves.
              </p>

              <p>
                Uma formulação inadequada pode resultar em crescimento
                deficiente, pior conversão alimentar, problemas ósseos,
                redução da produção, baixa qualidade dos ovos ou aumento dos
                custos.
              </p>

              <p>
                Na realidade angolana, a alimentação merece atenção especial
                devido à disponibilidade, preço e qualidade das matérias-primas
                utilizadas na fabricação das rações. Milho e soja, por exemplo,
                são componentes importantes de muitas formulações avícolas.
              </p>
            </div>
          </div>

          <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
            <h3 className="text-xl font-bold text-slate-900">
              Princípios básicos
            </h3>

            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
              <p>
                <strong>Qualidade:</strong> utilizar matérias-primas adequadas
                e bem conservadas.
              </p>

              <p>
                <strong>Equilíbrio:</strong> fornecer nutrientes nas
                proporções necessárias.
              </p>

              <p>
                <strong>Fase:</strong> ajustar a dieta à idade e finalidade.
              </p>

              <p>
                <strong>Consumo:</strong> acompanhar a quantidade realmente
                ingerida.
              </p>

              <p>
                <strong>Água:</strong> garantir acesso contínuo a água de boa
                qualidade.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* FASES */}
      <section className="border-y bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            Alimentação por fase
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            A dieta muda conforme o objetivo produtivo
          </h2>

          <p className="mt-5 max-w-4xl text-justify leading-8 text-slate-700">
            As necessidades nutricionais das aves não permanecem constantes
            durante toda a vida. O programa alimentar deve acompanhar o
            desenvolvimento e a finalidade da produção.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {fases.map((fase, index) => (
              <article
                key={fase.titulo}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <p className="text-sm font-semibold text-green-700">
                  Fase {index + 1}
                </p>

                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  {fase.titulo}
                </h3>

                <p className="mt-4 text-justify text-sm leading-7 text-slate-600">
                  {fase.descricao}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NUTRIENTES */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            Nutrientes
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            O que a ave precisa receber?
          </h2>

          <p className="mt-5 text-justify leading-8 text-slate-700">
            Uma dieta avícola equilibrada fornece energia, proteína,
            aminoácidos, minerais, vitaminas e água. A quantidade e proporção
            destes componentes deve ser determinada de acordo com a fase e o
            objetivo produtivo.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {nutrientes.map((nutriente) => (
            <article
              key={nutriente.titulo}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {nutriente.titulo}
              </h3>

              <p className="mt-4 text-justify text-sm leading-7 text-slate-600">
                {nutriente.texto}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* MATÉRIAS-PRIMAS */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-green-400">
                Matérias-primas
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white">
                Ingredientes utilizados nas rações
              </h2>

              <div className="mt-6 space-y-5 text-justify leading-8 text-slate-300">
                <p>
                  As rações avícolas são normalmente constituídas por uma
                  combinação de matérias-primas energéticas, proteicas,
                  minerais, vitamínicas e outros componentes necessários para
                  equilibrar a dieta.
                </p>

                <p>
                  A escolha dos ingredientes deve considerar composição
                  nutricional, disponibilidade, preço, qualidade, conservação,
                  segurança e possíveis fatores antinutricionais.
                </p>

                <p>
                  Uma matéria-prima barata não é necessariamente a opção mais
                  económica. O seu valor deve ser avaliado considerando a
                  quantidade de nutrientes disponíveis, digestibilidade,
                  qualidade e impacto sobre o desempenho das aves.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <h3 className="text-xl font-bold text-white">
                Exemplos de matérias-primas
              </h3>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {materiasPrimas.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REALIDADE ANGOLA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              Realidade angolana
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Milho, soja e disponibilidade de matérias-primas
            </h2>

            <div className="mt-6 space-y-5 text-justify leading-8 text-slate-700">
              <p>
                A disponibilidade de matérias-primas nacionais é um dos
                elementos estratégicos para o desenvolvimento da avicultura
                angolana. O custo da alimentação influencia diretamente a
                competitividade das explorações.
              </p>

              <p>
                O milho possui importância particular como fonte energética,
                enquanto o farelo de soja constitui uma importante fonte de
                proteína em muitas formulações. Contudo, uma dieta não deve ser
                definida apenas pela disponibilidade destes ingredientes.
              </p>

              <p>
                O produtor deve trabalhar com formulações tecnicamente
                equilibradas e avaliar a qualidade dos ingredientes disponíveis
                na sua região.
              </p>

              <p>
                Em pequenas explorações, a utilização de subprodutos agrícolas
                pode parecer uma alternativa económica, mas qualquer inclusão
                deve ser tecnicamente avaliada para evitar défices nutricionais
                ou problemas de segurança alimentar.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
            <img
              src="/imagens/galinhas/vinabar.jpg"
              alt="Exploração avícola em Angola"
              className="h-full min-h-[420px] w-full object-cover"
            />

            <div className="bg-white p-5">
              <p className="text-xs leading-5 text-slate-500">
                Exemplo de exploração avícola em Angola. Fonte da imagem:
                Programa de Desenvolvimento da Agricultura Comercial (PDAC).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RAÇÃO */}
      <section className="border-y bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              Gestão da ração
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Armazenamento e conservação
            </h2>

            <div className="mt-6 space-y-5 text-justify leading-8 text-slate-700">
              <p>
                Uma ração corretamente formulada pode perder qualidade quando
                armazenada em condições inadequadas. Humidade, calor, insetos,
                roedores e contaminação por fungos podem comprometer o alimento.
              </p>

              <p>
                O armazém deve ser seco, ventilado, limpo e protegido contra
                entrada de animais. Os sacos devem permanecer afastados do chão
                e das paredes, permitindo circulação de ar e inspeção.
              </p>

              <p>
                Também é importante utilizar primeiro os lotes mais antigos,
                evitando armazenamento prolongado e reduzindo o risco de
                deterioração.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Local seco",
              "Boa ventilação",
              "Proteção contra roedores",
              "Proteção contra insetos",
              "Limpeza regular",
              "Rotação do stock",
              "Sacos afastados do chão",
              "Inspeção dos ingredientes",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-white p-5 text-sm font-medium text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÁGUA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            Água
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Alimentação sem água não funciona
          </h2>

          <div className="mt-6 space-y-5 text-justify leading-8 text-slate-700">
            <p>
              A água é um nutriente essencial para as aves e deve estar
              disponível continuamente. A redução do consumo de água pode
              resultar rapidamente em redução do consumo de ração e do
              desempenho produtivo.
            </p>

            <p>
              A qualidade microbiológica e físico-química da água também deve
              ser considerada. Bebedouros sujos, tubagens contaminadas e
              reservatórios mal protegidos podem introduzir riscos sanitários.
            </p>

            <p>
              O consumo de água aumenta em condições de temperatura elevada.
              Em regiões quentes de Angola, a gestão da água deve fazer parte do
              programa diário de controlo do lote.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/pecuaria/galinhas/orientacoes/agua"
              className="inline-flex rounded-lg bg-green-700 px-5 py-3 font-semibold text-white hover:bg-green-800"
            >
              Ver orientação sobre água
            </Link>
          </div>
        </div>
      </section>

      {/* CONSUMO */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-green-400">
                Monitorização
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white">
                O consumo de ração deve ser registado
              </h2>

              <div className="mt-6 space-y-5 text-justify leading-8 text-slate-300">
                <p>
                  O consumo de ração fornece informações importantes sobre o
                  estado do lote. Uma alteração repentina pode indicar
                  problemas de saúde, temperatura inadequada, qualidade da
                  ração, acesso insuficiente ao alimento ou alterações na água.
                </p>

                <p>
                  O consumo deve ser interpretado juntamente com outros
                  indicadores. Um aumento ou redução isolada não permite
                  determinar automaticamente a causa de um problema.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <h3 className="text-xl font-bold text-white">
                Registos recomendados
              </h3>

              <div className="mt-6 space-y-3">
                {controlo.map((item) => (
                  <div
                    key={item}
                    className="border-b border-white/10 pb-3 text-sm text-slate-300 last:border-0"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MICOTOXINAS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            Segurança da alimentação
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Atenção às micotoxinas e deterioração
          </h2>

          <div className="mt-6 space-y-5 text-justify leading-8 text-slate-700">
            <p>
              Cereais e outros ingredientes armazenados em condições de elevada
              humidade podem desenvolver fungos capazes de produzir
              micotoxinas. Estas substâncias podem prejudicar o desempenho e a
              saúde das aves.
            </p>

            <p>
              A prevenção começa antes da formulação da ração: é necessário
              adquirir matérias-primas de qualidade, reduzir a exposição à
              humidade e garantir boas condições de armazenamento.
            </p>

            <p>
              Quando houver suspeita de contaminação, a avaliação deve ser
              feita por profissionais e, quando disponível, através de análise
              laboratorial.
            </p>
          </div>
        </div>
      </section>

      {/* ERROS */}
      <section className="border-y bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            Erros frequentes
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Problemas que podem comprometer a alimentação
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Mudar a ração bruscamente",
              "Utilizar matérias-primas deterioradas",
              "Armazenar ração em local húmido",
              "Não controlar o consumo",
              "Ignorar a qualidade da água",
              "Não adaptar a dieta à fase",
              "Sobrecarregar os comedouros",
              "Permitir competição excessiva",
              "Não controlar roedores e insetos",
              "Comprar ingredientes apenas pelo preço",
              "Não registar perdas de ração",
              "Ignorar alterações no desempenho",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
          Referências
        </p>

        <h2 className="mt-3 text-3xl font-bold text-slate-900">
          Fontes institucionais e técnicas
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <a
            href="https://www.fao.org/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-green-600"
          >
            <h3 className="font-bold text-slate-900">FAO</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Organização das Nações Unidas para a Alimentação e Agricultura,
              com referências internacionais sobre produção animal e segurança
              alimentar.
            </p>

            <p className="mt-5 text-sm font-semibold text-green-700">
              Consultar fonte
            </p>
          </a>

          <a
            href="https://www.ine.gov.ao/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-green-600"
          >
            <h3 className="font-bold text-slate-900">
              Instituto Nacional de Estatística
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Fonte oficial de estatísticas de Angola, incluindo informação
              relacionada com a produção agropecuária.
            </p>

            <p className="mt-5 text-sm font-semibold text-green-700">
              Consultar fonte
            </p>
          </a>

          <a
            href="https://minagrif.gov.ao/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-green-600"
          >
            <h3 className="font-bold text-slate-900">
              Ministério da Agricultura e Florestas
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Informação institucional sobre agricultura, pecuária e
              desenvolvimento da produção nacional.
            </p>

            <p className="mt-5 text-sm font-semibold text-green-700">
              Consultar fonte
            </p>
          </a>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Continuar nas orientações
              </h2>

              <p className="mt-1 text-sm text-slate-600">
                Explore os restantes temas da avicultura.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/pecuaria/galinhas/orientacoes/corte"
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Frango de corte
              </Link>

              <Link
                href="/pecuaria/galinhas/orientacoes/poedeiras"
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Poedeiras
              </Link>

              <Link
                href="/pecuaria/galinhas/orientacoes"
                className="rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white hover:bg-green-800"
              >
                Orientações técnicas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}