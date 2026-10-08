"use client";

import Link from "next/link";

const fases = [
  {
    titulo: "Cria e recria",
    texto:
      "Período determinante para formar uma futura poedeira saudável, uniforme e preparada para iniciar a produção. O maneio deve considerar temperatura, água, alimentação, iluminação, densidade e prevenção sanitária.",
  },
  {
    titulo: "Pré-postura",
    texto:
      "Fase de preparação do organismo para a produção de ovos. A transição alimentar e o programa de iluminação devem ser conduzidos de forma gradual e de acordo com a idade e o desenvolvimento das aves.",
  },
  {
    titulo: "Início da postura",
    texto:
      "O início da produção exige acompanhamento rigoroso do consumo de ração, água, peso corporal, uniformidade do lote, produção diária e qualidade da casca.",
  },
  {
    titulo: "Pico de produção",
    texto:
      "Durante o pico, a exploração precisa garantir elevado nível de consumo de nutrientes, água suficiente, ambiente adequado e controlo sanitário para preservar a produção e a qualidade dos ovos.",
  },
  {
    titulo: "Persistência de postura",
    texto:
      "Depois do pico, o objetivo passa a ser manter uma produção economicamente eficiente durante o maior período possível, controlando queda de produção, peso do ovo, qualidade da casca e condição corporal.",
  },
];

const indicadores = [
  "Percentagem de postura",
  "Número de ovos por ave alojada",
  "Consumo diário de ração",
  "Consumo de água",
  "Conversão alimentar por dúzia ou massa de ovos",
  "Peso médio do ovo",
  "Mortalidade",
  "Peso corporal das aves",
  "Uniformidade do lote",
  "Percentagem de ovos partidos ou sujos",
];

export default function PoedeirasPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage:
              "url('/imagens/galinhas/lucala.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/55" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
              Galinhas · Orientações técnicas
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Poedeiras
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
              Produção de ovos, maneio do lote, alimentação, água, iluminação,
              instalações, sanidade, biossegurança, qualidade dos ovos e
              acompanhamento dos principais indicadores produtivos.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/pecuaria/galinhas/orientacoes"
                className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                Voltar às orientações
              </Link>

              <Link
                href="/pecuaria/galinhas"
                className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
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
            Poedeiras
          </span>
        </div>
      </div>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              Produção de ovos
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              O que são poedeiras?
            </h2>

            <div className="mt-6 space-y-5 text-justify leading-8 text-slate-700">
              <p>
                As galinhas poedeiras são aves selecionadas e manejadas
                principalmente para produção de ovos destinados ao consumo ou,
                dependendo do sistema, à reprodução. A eficiência do sistema
                depende da interação entre genética, alimentação, ambiente,
                sanidade, iluminação, qualidade da água e gestão do lote.
              </p>

              <p>
                Uma exploração de poedeiras não deve avaliar o desempenho apenas
                pela quantidade total de ovos produzidos. É necessário
                relacionar a produção com o número de aves alojadas, consumo de
                ração, mortalidade, peso corporal, qualidade dos ovos e custos
                de produção.
              </p>

              <p>
                O maneio começa muito antes da primeira postura. A qualidade da
                recria influencia diretamente a uniformidade do lote e a
                capacidade das aves atingirem o peso e o desenvolvimento
                adequados para iniciar a produção.
              </p>

              <p>
                Em Angola, a produção de ovos apresenta importância tanto para
                pequenos produtores como para explorações comerciais. O
                desenvolvimento do setor exige melhoria contínua da alimentação,
                genética, sanidade, assistência técnica, instalações e
                organização da cadeia de comercialização.
              </p>
            </div>
          </div>

          <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
            <h3 className="text-xl font-bold text-slate-900">
              Objetivos do maneio
            </h3>

            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
              <p>
                <strong>1. Uniformidade:</strong> desenvolver um lote
                homogéneo.
              </p>

              <p>
                <strong>2. Saúde:</strong> reduzir doenças e mortalidade.
              </p>

              <p>
                <strong>3. Produção:</strong> obter elevada produção de ovos.
              </p>

              <p>
                <strong>4. Qualidade:</strong> preservar casca, tamanho e
                características comerciais.
              </p>

              <p>
                <strong>5. Economia:</strong> produzir com utilização eficiente
                de ração, água, mão de obra e instalações.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* IMAGEM */}
      <section className="border-y bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <img
              src="/imagens/galinhas/africa-press.jpg"
              alt="Produção de ovos em Angola"
              className="h-[420px] w-full object-cover"
            />

            <div className="p-6">
              <p className="text-sm leading-6 text-slate-600">
                Produção avícola e comercialização de ovos em Angola.
              </p>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Fonte da imagem: Club-K Angola.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FASES */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            Maneio por fases
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            O ciclo produtivo da poedeira
          </h2>

          <p className="mt-5 text-justify leading-8 text-slate-700">
            O acompanhamento técnico deve considerar as diferentes fases da
            vida produtiva da ave. Cada fase possui necessidades específicas de
            alimentação, ambiente, iluminação, espaço, água e controlo
            sanitário.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {fases.map((fase, index) => (
            <article
              key={fase.titulo}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <p className="text-sm font-semibold text-green-700">
                Fase {index + 1}
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-900">
                {fase.titulo}
              </h3>

              <p className="mt-4 text-justify text-sm leading-7 text-slate-600">
                {fase.texto}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ALIMENTAÇÃO */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-green-400">
                Nutrição
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white">
                Alimentação das poedeiras
              </h2>

              <div className="mt-6 space-y-5 text-justify leading-8 text-slate-300">
                <p>
                  A alimentação é um dos principais componentes do custo de
                  produção de ovos. Uma formulação inadequada pode comprometer
                  crescimento, produção, peso do ovo, qualidade da casca e
                  persistência de postura.
                </p>

                <p>
                  Durante a postura, a dieta deve fornecer energia, proteína,
                  aminoácidos, minerais e vitaminas em quantidades adequadas.
                  O cálcio e o fósforo assumem especial importância devido à
                  formação contínua da casca do ovo.
                </p>

                <p>
                  A alimentação deve ser ajustada à fase produtiva e ao consumo
                  real do lote. Não existe uma única ração universal que seja
                  adequada para todas as idades e condições de produção.
                </p>

                <p>
                  A qualidade das matérias-primas também é fundamental. Milho,
                  farelo de soja, fontes minerais e outros ingredientes devem
                  apresentar qualidade compatível com a formulação utilizada.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <h3 className="text-xl font-bold text-white">
                Pontos que devem ser acompanhados
              </h3>

              <div className="mt-6 space-y-4">
                {[
                  "Consumo de ração por ave",
                  "Qualidade das matérias-primas",
                  "Energia metabolizável",
                  "Proteína e aminoácidos",
                  "Cálcio e fósforo",
                  "Vitaminas e microminerais",
                  "Tamanho das partículas",
                  "Conservação da ração",
                  "Contaminação por fungos e micotoxinas",
                  "Disponibilidade permanente de água",
                ].map((item) => (
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

      {/* ÁGUA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              Água
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Água de qualidade é essencial
            </h2>

            <div className="mt-6 space-y-5 text-justify leading-8 text-slate-700">
              <p>
                A água participa diretamente de praticamente todas as funções
                fisiológicas da ave. Uma redução significativa no consumo de
                água pode refletir rapidamente no consumo de ração e na
                produção de ovos.
              </p>

              <p>
                Os bebedouros devem ser adequados ao sistema de produção,
                mantidos limpos e regulados corretamente. A água deve ser
                protegida de contaminação por fezes, ração, poeira, produtos
                químicos e outros contaminantes.
              </p>

              <p>
                Em condições de calor, o consumo de água aumenta. Por isso, a
                exploração deve garantir disponibilidade contínua e reduzir o
                aquecimento excessivo da água nos sistemas de abastecimento.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
            <h3 className="text-xl font-bold text-slate-900">
              Controlo diário
            </h3>

            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
              <li>Verificar se todos os bebedouros funcionam.</li>
              <li>Observar possíveis fugas.</li>
              <li>Controlar limpeza dos equipamentos.</li>
              <li>Acompanhar o consumo de água.</li>
              <li>Evitar água excessivamente quente.</li>
              <li>Realizar análises quando houver suspeita de contaminação.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ILUMINAÇÃO */}
      <section className="border-y bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              Iluminação
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Programa de iluminação
            </h2>

            <div className="mt-6 space-y-5 text-justify leading-8 text-slate-700">
              <p>
                A luz influencia o desenvolvimento e o comportamento
                reprodutivo das aves. Na produção comercial, os programas de
                iluminação são utilizados para controlar o desenvolvimento e
                estimular a entrada e manutenção da postura.
              </p>

              <p>
                Alterações bruscas no fotoperíodo podem provocar respostas
                indesejáveis. Por isso, o programa deve ser planejado de acordo
                com a idade, genética, sistema de alojamento e objetivos da
                exploração.
              </p>

              <p>
                A distribuição da luz também deve ser uniforme. Áreas muito
                escuras ou muito iluminadas podem alterar o comportamento das
                aves e favorecer problemas de manejo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INSTALAÇÕES */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              Instalações
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Ambiente adequado para o lote
            </h2>

            <div className="mt-6 space-y-5 text-justify leading-8 text-slate-700">
              <p>
                As instalações devem proteger as aves contra condições
                ambientais extremas, facilitar a limpeza e desinfeção e
                permitir que os trabalhadores realizem corretamente as
                operações de maneio.
              </p>

              <p>
                Ventilação adequada é fundamental para remover calor, humidade,
                poeiras e gases acumulados dentro do aviário. A ventilação
                insuficiente pode aumentar o risco de problemas respiratórios
                e comprometer o conforto das aves.
              </p>

              <p>
                A densidade deve ser definida de acordo com o sistema de
                alojamento, equipamento, ambiente e capacidade de ventilação.
                Colocar aves em excesso aumenta a competição por recursos e
                dificulta o controlo ambiental.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
            <h3 className="text-xl font-bold text-slate-900">
              Componentes importantes
            </h3>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Ventilação",
                "Iluminação",
                "Comedouros",
                "Bebedouros",
                "Ninhos",
                "Cama",
                "Drenagem",
                "Armazenamento de ração",
                "Área de classificação",
                "Armazenamento de ovos",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-lg bg-white px-4 py-3 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUALIDADE DOS OVOS */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-400">
              Qualidade
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
              Qualidade dos ovos
            </h2>

            <div className="mt-6 space-y-5 text-justify leading-8 text-slate-300">
              <p>
                A qualidade do ovo começa na exploração. Nutrição, idade da
                galinha, genética, sanidade, ambiente, higiene dos ninhos e
                condições de recolha influenciam as características do produto
                final.
              </p>

              <p>
                Entre os problemas que podem ocorrer encontram-se ovos partidos,
                trincados, sujos, deformados ou com alterações na qualidade da
                casca. O acompanhamento destes defeitos permite identificar
                problemas de maneio e reduzir perdas económicas.
              </p>

              <p>
                A recolha frequente, o manuseamento cuidadoso e o armazenamento
                em condições adequadas são componentes importantes da gestão da
                qualidade.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Casca",
              "Peso do ovo",
              "Limpeza",
              "Integridade",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="font-bold text-white">{item}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Indicador importante para avaliação do desempenho e da
                  qualidade comercial dos ovos.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SANIDADE */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            Sanidade e biossegurança
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Prevenir é mais importante do que reagir
          </h2>

          <div className="mt-6 space-y-5 text-justify leading-8 text-slate-700">
            <p>
              A produção de ovos depende de aves saudáveis. Doenças infecciosas,
              parasitárias ou problemas metabólicos podem provocar mortalidade,
              redução da postura, piora da qualidade dos ovos e aumento dos
              custos.
            </p>

            <p>
              O programa sanitário deve ser elaborado com acompanhamento de
              profissionais veterinários e considerar as condições
              epidemiológicas da região, o sistema de produção, o histórico da
              exploração e as recomendações oficiais.
            </p>

            <p>
              A biossegurança inclui controlo da entrada de pessoas, veículos,
              equipamentos e animais, limpeza e desinfeção, controlo de
              roedores e insetos, gestão adequada de cadáveres e separação
              entre lotes.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/pecuaria/galinhas/orientacoes/sanidade"
              className="inline-flex rounded-lg bg-green-700 px-5 py-3 font-semibold text-white hover:bg-green-800"
            >
              Ver orientação sobre sanidade
            </Link>
          </div>
        </div>
      </section>

      {/* INDICADORES */}
      <section className="border-y bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            Gestão da exploração
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Indicadores que o produtor deve acompanhar
          </h2>

          <p className="mt-5 max-w-4xl text-justify leading-8 text-slate-700">
            Registos diários e semanais permitem identificar alterações antes
            que se transformem em perdas significativas. A comparação entre
            produção, consumo e mortalidade é fundamental para avaliar a
            eficiência do lote.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {indicadores.map((indicador) => (
              <div
                key={indicador}
                className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-700"
              >
                {indicador}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REALIDADE ANGOLANA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              Realidade angolana
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Oportunidades e desafios
            </h2>

            <div className="mt-6 space-y-5 text-justify leading-8 text-slate-700">
              <p>
                A expansão da produção de ovos em Angola depende de vários
                elementos da cadeia. A disponibilidade de ração de qualidade,
                pintos, assistência técnica, equipamentos e serviços
                veterinários é determinante para melhorar a produtividade.
              </p>

              <p>
                Também existem oportunidades relacionadas com a produção local
                de matérias-primas para alimentação animal, desenvolvimento de
                unidades de transformação, melhoria da cadeia de frio e
                organização dos canais de comercialização.
              </p>

              <p>
                Para o produtor, a decisão de investir deve considerar mercado,
                custo dos insumos, capacidade de abastecimento, disponibilidade
                de água, energia, mão de obra qualificada e condições sanitárias
                da região.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
            <h3 className="text-xl font-bold text-slate-900">
              Pontos críticos
            </h3>

            <div className="mt-6 space-y-4">
              {[
                "Custo da alimentação",
                "Disponibilidade de pintos",
                "Qualidade genética",
                "Assistência veterinária",
                "Disponibilidade de água",
                "Energia e equipamentos",
                "Biossegurança",
                "Mercado consumidor",
                "Transporte e conservação",
                "Gestão económica",
              ].map((item) => (
                <div
                  key={item}
                  className="border-b border-slate-200 pb-3 text-sm font-medium text-slate-700 last:border-0"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="border-t bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            Referências institucionais
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Fontes para estudo
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
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
                Estatísticas oficiais de Angola, incluindo informação sobre
                produção agropecuária.
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
                desenvolvimento do setor.
              </p>

              <p className="mt-5 text-sm font-semibold text-green-700">
                Consultar fonte
              </p>
            </a>

            <a
              href="https://www.fao.org/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-green-600"
            >
              <h3 className="font-bold text-slate-900">
                FAO
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Referências técnicas internacionais sobre produção animal,
                alimentação, sanidade e segurança alimentar.
              </p>

              <p className="mt-5 text-sm font-semibold text-green-700">
                Consultar fonte
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO FINAL */}
      <section className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Continuar nas orientações de galinhas
              </h2>

              <p className="mt-1 text-sm text-slate-600">
                Consulte outros conteúdos técnicos da avicultura.
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
                href="/pecuaria/galinhas/orientacoes"
                className="rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white hover:bg-green-800"
              >
                Orientações técnicas
              </Link>

              <Link
                href="/pecuaria/galinhas"
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Visão geral
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}