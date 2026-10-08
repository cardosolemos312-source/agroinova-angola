
"use client";

import Link from "next/link";

const etapas = [
  {
    titulo: "1. Seleção dos reprodutores",
    texto:
      "A reprodução começa com a escolha de machos e fêmeas saudáveis, ativos, bem conformados e sem sinais de doença. Não se deve utilizar como reprodutor um animal com defeitos físicos importantes, crescimento muito deficiente ou histórico sanitário problemático.",
  },
  {
    titulo: "2. Preparação do lote",
    texto:
      "Os reprodutores precisam de alimentação equilibrada, água limpa, instalações secas e ambiente com baixo stress. Uma condição corporal inadequada pode prejudicar a reprodução.",
  },
  {
    titulo: "3. Acasalamento",
    texto:
      "A proporção entre machos e fêmeas depende da raça, do sistema de criação e do comportamento reprodutivo dos animais. O excesso de machos pode aumentar agressões e lesões, enquanto poucos machos podem reduzir a fertilidade do lote.",
  },
  {
    titulo: "4. Postura",
    texto:
      "As fêmeas devem ter acesso a locais limpos e relativamente tranquilos para postura. A recolha frequente dos ovos reduz sujidade, quebras, perdas e exposição prolongada a temperaturas inadequadas.",
  },
  {
    titulo: "5. Seleção dos ovos",
    texto:
      "Para incubação, devem ser escolhidos ovos limpos, de tamanho e forma normais, sem rachaduras e provenientes de fêmeas saudáveis. Ovos excessivamente sujos ou danificados apresentam maior risco de contaminação.",
  },
  {
    titulo: "6. Incubação",
    texto:
      "Temperatura, humidade, ventilação e viragem dos ovos devem ser controladas de acordo com o método de incubação e a linhagem utilizada. O objetivo é criar condições estáveis para o desenvolvimento embrionário.",
  },
];

const reprodutores = [
  {
    titulo: "Saúde",
    texto:
      "Animais doentes ou debilitados não devem ser selecionados para reprodução. A condição sanitária do plantel influencia diretamente a produtividade e a qualidade dos descendentes.",
  },
  {
    titulo: "Conformação",
    texto:
      "Selecionar animais com boa estrutura corporal, pernas funcionais, locomoção normal, plumagem adequada e ausência de deformações que possam comprometer o desempenho.",
  },
  {
    titulo: "Desempenho",
    texto:
      "Quando existem registos, devem ser valorizados animais com bom crescimento, boa produção de ovos, fertilidade adequada e características desejáveis para o objetivo da exploração.",
  },
  {
    titulo: "Origem genética",
    texto:
      "Conhecer a origem dos animais ajuda a evitar cruzamentos descontrolados e permite selecionar características de interesse, como crescimento, produção de ovos ou adaptação ao sistema.",
  },
];

const ovos = [
  {
    titulo: "Ovo para incubação",
    texto:
      "Deve ser proveniente de uma fêmea saudável e de um lote com machos férteis. Ovos rachados, muito sujos, deformados ou com características anormais devem ser descartados.",
  },
  {
    titulo: "Recolha",
    texto:
      "A recolha deve ser frequente para reduzir contaminação, quebras e exposição prolongada ao ambiente. Os ovos destinados à incubação devem ser identificados e separados dos ovos para consumo.",
  },
  {
    titulo: "Armazenamento",
    texto:
      "Ovos destinados à incubação devem ser armazenados em condições adequadas e por tempo controlado. Quanto mais tempo permanecem armazenados, maior pode ser a redução da viabilidade embrionária.",
  },
  {
    titulo: "Higiene",
    texto:
      "A superfície do ovo possui uma proteção natural. Por isso, a limpeza deve ser feita de forma tecnicamente adequada e não através de procedimentos agressivos que possam facilitar a entrada de microrganismos.",
  },
];

const incubacao = [
  {
    titulo: "Temperatura",
    texto:
      "A temperatura é um dos fatores mais importantes da incubação artificial. Pequenas alterações durante períodos prolongados podem afetar o desenvolvimento embrionário e a taxa de eclosão.",
  },
  {
    titulo: "Humidade",
    texto:
      "A humidade influencia a perda de água do ovo e o desenvolvimento correto do embrião. Deve ser controlada de acordo com o equipamento e o método de incubação utilizado.",
  },
  {
    titulo: "Viragem",
    texto:
      "A viragem adequada ajuda o desenvolvimento embrionário e evita a aderência do embrião às estruturas internas do ovo. Em incubadoras automáticas, o mecanismo deve ser verificado regularmente.",
  },
  {
    titulo: "Ventilação",
    texto:
      "O embrião necessita de oxigénio e produz dióxido de carbono. A incubadora deve permitir renovação adequada do ar sem provocar oscilações ambientais excessivas.",
  },
  {
    titulo: "Higiene da incubadora",
    texto:
      "A incubadora deve ser limpa e desinfetada entre lotes segundo um procedimento adequado. Restos de casca, material orgânico e humidade favorecem a sobrevivência de microrganismos.",
  },
  {
    titulo: "Eclosão",
    texto:
      "Durante a fase final, deve-se evitar abrir repetidamente a incubadora. Alterações bruscas de temperatura e humidade podem prejudicar os ovos que estão próximos da eclosão.",
  },
];

const problemas = [
  {
    titulo: "Baixa fertilidade",
    causas:
      "Pode estar relacionada com machos insuficientes ou pouco férteis, excesso de machos, idade inadequada, condição corporal deficiente, problemas sanitários ou maneio reprodutivo inadequado.",
  },
  {
    titulo: "Muitos embriões mortos",
    causas:
      "Pode estar relacionado com armazenamento inadequado, problemas de temperatura, humidade, ventilação, contaminação dos ovos ou problemas sanitários dos reprodutores.",
  },
  {
    titulo: "Patinhos que não conseguem sair do ovo",
    causas:
      "Pode estar relacionado com condições inadequadas de incubação, especialmente problemas de humidade, temperatura ou perda de água durante o desenvolvimento.",
  },
  {
    titulo: "Mortalidade após a eclosão",
    causas:
      "Pode estar relacionada com condições inadequadas de aquecimento, alimentação, água, higiene, qualidade dos patinhos ou doenças.",
  },
];

export default function ReproducaoPatosPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(74,222,128,0.18),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-4xl">

            <div className="mb-5 flex flex-wrap gap-2 text-sm text-green-200">
              <Link href="/pecuaria" className="hover:text-white">
                Pecuária
              </Link>

              <span>/</span>

              <Link
                href="/pecuaria/patos"
                className="hover:text-white"
              >
                Patos
              </Link>

              <span>/</span>

              <span>Orientações técnicas</span>

              <span>/</span>

              <span>Reprodução</span>
            </div>

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-300">
              AGROINOVA ANGOLA · REPRODUÇÃO
            </p>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-white md:text-6xl">
              Reprodução de Patos
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50 md:text-xl">
              Seleção de reprodutores, acasalamento, postura, fertilidade,
              escolha dos ovos, incubação, eclosão e acompanhamento dos
              resultados reprodutivos.
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">

          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.09)] md:p-10">

            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Fundamento
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950">
              Reprodução não é apenas colocar macho e fêmea juntos
            </h2>

            <div className="mt-6 space-y-5 text-justify text-[16px] leading-8 text-slate-700">

              <p>
                Uma exploração de patos só consegue manter uma produção
                reprodutiva consistente quando existe controlo sobre a saúde,
                genética, alimentação, condição corporal, relação entre machos
                e fêmeas, qualidade dos ovos e condições de incubação.
              </p>

              <p>
                A fertilidade é apenas uma parte do processo. Depois de um ovo
                ser fertilizado, o embrião precisa de condições adequadas para
                sobreviver até à eclosão. Por isso, problemas de incubação
                podem reduzir significativamente o número de patinhos obtidos
                mesmo quando o lote apresenta boa fertilidade.
              </p>

              <p>
                Para estudantes e técnicos, é importante analisar a reprodução
                como uma cadeia: <strong>reprodutor → acasalamento → ovo →
                armazenamento → incubação → eclosão → patinho</strong>.
              </p>

            </div>
          </article>

          <aside className="rounded-3xl border border-green-200 bg-gradient-to-br from-green-50 to-white p-8 shadow-[0_20px_50px_rgba(22,101,52,0.10)]">

            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Indicadores
            </p>

            <h2 className="mt-3 text-2xl font-black text-slate-950">
              O que deve ser medido?
            </h2>

            <div className="mt-6 space-y-3">

              {[
                "Número de ovos recolhidos",
                "Número de ovos incubados",
                "Percentagem de ovos férteis",
                "Número de ovos eclodidos",
                "Percentagem de eclosão",
                "Número de patinhos viáveis",
                "Mortalidade dos patinhos",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-green-100 bg-white p-4 font-semibold text-green-900 shadow-sm"
                >
                  {item}
                </div>
              ))}

            </div>
          </aside>
        </div>
      </section>

      {/* SELEÇÃO */}
      <section className="bg-white py-16">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Genética e seleção
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
              Como selecionar bons reprodutores
            </h2>

            <p className="mt-5 text-justify leading-8 text-slate-600">
              O objetivo da seleção é aumentar a probabilidade de produzir
              descendentes saudáveis e adequados à finalidade da exploração.
              A seleção deve ser feita com base em saúde, conformação,
              desempenho e origem genética.
            </p>

          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {reprodutores.map((item) => (
              <article
                key={item.titulo}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
              >

                <h3 className="text-xl font-black text-slate-950">
                  {item.titulo}
                </h3>

                <p className="mt-4 text-justify leading-7 text-slate-600">
                  {item.texto}
                </p>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* ETAPAS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="max-w-3xl">

          <p className="text-sm font-bold uppercase tracking-wider text-green-700">
            Processo reprodutivo
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
            Da preparação do lote à eclosão
          </h2>

        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">

          {etapas.map((etapa) => (
            <article
              key={etapa.titulo}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(15,23,42,0.07)]"
            >

              <h3 className="text-2xl font-black text-green-800">
                {etapa.titulo}
              </h3>

              <p className="mt-4 text-justify leading-8 text-slate-600">
                {etapa.texto}
              </p>

            </article>
          ))}

        </div>
      </section>

      {/* ACASALAMENTO */}
      <section className="bg-slate-950 py-16 text-white">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <p className="text-sm font-bold uppercase tracking-wider text-green-300">
            Acasalamento
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            A relação entre machos e fêmeas precisa de ser controlada
          </h2>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">

            <div className="space-y-5 text-justify leading-8 text-slate-300">

              <p>
                Não existe uma única relação macho:fêmea que sirva para todas
                as raças e sistemas de produção. O comportamento sexual, a
                fertilidade, o tamanho corporal, o espaço disponível e o
                sistema de criação influenciam o resultado.
              </p>

              <p>
                Em sistemas de reprodução, o produtor deve observar tanto a
                fertilidade como possíveis agressões ou excesso de monta.
                Machos em excesso podem provocar lesões nas fêmeas e aumentar
                o stress do lote.
              </p>

              <p>
                Quando a fertilidade está abaixo do esperado, a primeira
                atitude não deve ser simplesmente aumentar o número de machos.
                É necessário investigar idade, saúde, condição corporal,
                comportamento, alimentação e condições de maneio.
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8">

              <h3 className="text-2xl font-black text-green-300">
                O que observar no lote
              </h3>

              <div className="mt-6 space-y-3">

                {[
                  "Machos ativos e saudáveis",
                  "Fêmeas sem lesões",
                  "Comportamento reprodutivo normal",
                  "Ausência de agressões excessivas",
                  "Boa condição corporal",
                  "Boa disponibilidade de água",
                  "Alimentação equilibrada",
                  "Registo dos resultados de fertilidade",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/[0.05] p-4 text-slate-200"
                  >
                    {item}
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OVOS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="max-w-3xl">

          <p className="text-sm font-bold uppercase tracking-wider text-green-700">
            Ovos para incubação
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
            A qualidade do ovo começa antes da incubadora
          </h2>

          <p className="mt-5 text-justify leading-8 text-slate-600">
            A incubação não corrige um ovo de má qualidade. O resultado começa
            com a saúde e alimentação da fêmea, fertilidade do macho, higiene
            do ninho, recolha, armazenamento e manipulação.
          </p>

        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {ovos.map((item) => (
            <article
              key={item.titulo}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
            >

              <h3 className="text-xl font-black text-slate-950">
                {item.titulo}
              </h3>

              <p className="mt-4 text-justify leading-7 text-slate-600">
                {item.texto}
              </p>

            </article>
          ))}

        </div>
      </section>

      {/* OVOS BONS / MAUS */}
      <section className="bg-green-900 py-16">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <h2 className="text-3xl font-black text-white md:text-4xl">
            Características de um bom ovo para incubação
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">

            <div className="rounded-3xl border border-green-400/20 bg-white/[0.08] p-8">

              <h3 className="text-xl font-black text-green-300">
                Preferir
              </h3>

              <ul className="mt-5 space-y-3 text-green-50">

                <li>• Ovo proveniente de reprodutores saudáveis.</li>
                <li>• Casca íntegra.</li>
                <li>• Forma normal.</li>
                <li>• Tamanho adequado à raça.</li>
                <li>• Sem contaminação excessiva.</li>
                <li>• Armazenamento correto.</li>

              </ul>

            </div>

            <div className="rounded-3xl border border-red-300/20 bg-red-950/20 p-8">

              <h3 className="text-xl font-black text-red-300">
                Evitar
              </h3>

              <ul className="mt-5 space-y-3 text-red-50">

                <li>• Ovos rachados.</li>
                <li>• Ovos muito deformados.</li>
                <li>• Ovos excessivamente sujos.</li>
                <li>• Ovos com casca anormal.</li>
                <li>• Ovos armazenados durante demasiado tempo.</li>
                <li>• Ovos de animais doentes.</li>

              </ul>

            </div>

          </div>
        </div>
      </section>

      {/* INCUBAÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="max-w-3xl">

          <p className="text-sm font-bold uppercase tracking-wider text-green-700">
            Incubação artificial
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
            Cinco fatores que determinam o sucesso
          </h2>

          <p className="mt-5 text-justify leading-8 text-slate-600">
            A incubação artificial exige controlo. Não é suficiente colocar os
            ovos dentro de uma máquina. Temperatura, humidade, ventilação,
            viragem e higiene precisam de ser acompanhadas durante o processo.
          </p>

        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {incubacao.map((item) => (
            <article
              key={item.titulo}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
            >

              <h3 className="text-xl font-black text-slate-950">
                {item.titulo}
              </h3>

              <p className="mt-4 text-justify leading-7 text-slate-600">
                {item.texto}
              </p>

            </article>
          ))}

        </div>

        <div className="mt-10 rounded-3xl border border-amber-200 bg-amber-50 p-8">

          <h3 className="text-2xl font-black text-amber-950">
            Importante sobre temperatura e humidade
          </h3>

          <p className="mt-4 text-justify leading-8 text-amber-900">
            Não é seguro colocar na página um único valor de temperatura ou
            humidade como se fosse universal para todas as incubadoras. O valor
            depende do tipo de incubadora, método utilizado, ventilação,
            calibração do equipamento e orientação técnica. O produtor deve
            seguir as especificações do fabricante e utilizar equipamentos
            calibrados.
          </p>

        </div>
      </section>

      {/* DESENVOLVIMENTO */}
      <section className="bg-white py-16">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <h2 className="text-3xl font-black text-slate-950 md:text-4xl">
            Acompanhar o desenvolvimento embrionário
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">

            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7">

              <h3 className="text-xl font-black">
                Ovoscopia
              </h3>

              <p className="mt-4 text-justify leading-7 text-slate-600">
                A observação do interior do ovo com luz apropriada pode ajudar
                a identificar desenvolvimento embrionário, ovos inférteis e
                embriões que deixaram de se desenvolver.
              </p>

            </article>

            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7">

              <h3 className="text-xl font-black">
                Registo
              </h3>

              <p className="mt-4 text-justify leading-7 text-slate-600">
                Registar a data de entrada dos ovos, quantidade, ovos
                descartados, fertilidade observada e eclosões permite avaliar
                a eficiência da incubação.
              </p>

            </article>

            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7">

              <h3 className="text-xl font-black">
                Análise
              </h3>

              <p className="mt-4 text-justify leading-7 text-slate-600">
                Quando a eclosão é baixa, os registos ajudam a determinar se o
                problema está nos reprodutores, nos ovos, no armazenamento ou
                no processo de incubação.
              </p>

            </article>

          </div>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section className="bg-slate-950 py-16 text-white">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <p className="text-sm font-bold uppercase tracking-wider text-green-300">
            Diagnóstico do processo
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Quando a reprodução apresenta problemas
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {problemas.map((problema) => (
              <article
                key={problema.titulo}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-8"
              >

                <h3 className="text-xl font-black text-green-300">
                  {problema.titulo}
                </h3>

                <p className="mt-4 text-justify leading-8 text-slate-300">
                  {problema.causas}
                </p>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* PATINHOS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="rounded-[2rem] border border-green-200 bg-gradient-to-br from-green-50 via-white to-slate-50 p-8 shadow-[0_24px_60px_rgba(22,101,52,0.10)] md:p-12">

          <p className="text-sm font-bold uppercase tracking-wider text-green-700">
            Depois da eclosão
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
            O nascimento é apenas o começo
          </h2>

          <div className="mt-7 grid gap-8 lg:grid-cols-2">

            <div className="space-y-5 text-justify leading-8 text-slate-700">

              <p>
                Os patinhos recém-eclodidos precisam de ambiente adequado,
                temperatura apropriada, água limpa e alimento adequado à fase
                inicial.
              </p>

              <p>
                A qualidade dos primeiros dias influencia o crescimento
                posterior. Patinhos que apresentam desidratação, frio,
                dificuldade de acesso à água ou alimentação inadequada podem
                apresentar perdas elevadas.
              </p>

              <p>
                Os patinhos também devem ser observados individualmente e como
                grupo. Animais fracos, lesionados ou com comportamento anormal
                devem ser identificados rapidamente.
              </p>

            </div>

            <div className="rounded-3xl bg-white p-7 shadow-[0_15px_40px_rgba(15,23,42,0.08)]">

              <h3 className="text-xl font-black text-slate-950">
                Registos desde o primeiro dia
              </h3>

              <div className="mt-5 space-y-3">

                {[
                  "Número de patinhos nascidos",
                  "Número de patinhos viáveis",
                  "Patinhos fracos",
                  "Mortalidade",
                  "Consumo de alimento",
                  "Consumo de água",
                  "Peso médio",
                  "Problemas sanitários",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-700"
                  >
                    {item}
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ANGOLA */}
      <section className="bg-green-900 py-16">

        <div className="mx-auto max-w-6xl px-6 lg:px-8 text-white">

          <p className="text-sm font-bold uppercase tracking-wider text-green-300">
            Aplicação em Angola
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Reprodução de patos em sistemas familiares e comerciais
          </h2>

          <div className="mt-8 space-y-5 text-justify text-lg leading-8 text-green-50">

            <p>
              Em Angola, a reprodução pode ser utilizada para reduzir a
              dependência de aquisição constante de animais e permitir ao
              produtor construir progressivamente o seu próprio plantel.
            </p>

            <p>
              Para pequenas explorações, o mais importante não é começar com
              equipamentos complexos. É começar com bons reprodutores, higiene,
              alimentação adequada, água segura, recolha correta dos ovos e
              registos.
            </p>

            <p>
              Em sistemas comerciais, os indicadores reprodutivos devem ser
              acompanhados regularmente para identificar perdas e calcular o
              custo real de produção de cada patinho.
            </p>

          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-[0_25px_65px_rgba(15,23,42,0.25)] md:p-12">

          <p className="text-sm font-bold uppercase tracking-wider text-green-300">
            Checklist técnico
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Antes de iniciar um lote de reprodução
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            {[
              "Os reprodutores estão saudáveis?",
              "A condição corporal é adequada?",
              "Existe registo da origem genética?",
              "A relação entre machos e fêmeas foi definida?",
              "Existe alimentação adequada para reprodução?",
              "Existe água limpa continuamente?",
              "Os ninhos estão limpos e protegidos?",
              "Os ovos são recolhidos regularmente?",
              "Existe local adequado para armazenamento dos ovos?",
              "A incubadora está limpa e funcional?",
              "Existe controlo de temperatura e humidade?",
              "Existe registo da fertilidade e eclosão?",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-slate-200"
              >
                {item}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="border-t border-slate-200 bg-slate-50 py-12">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <h2 className="text-2xl font-black text-slate-950">
            Fontes técnicas para estudo
          </h2>

          <div className="mt-6 space-y-3 text-sm leading-7 text-slate-600">

            <p>
              Cornell University College of Veterinary Medicine — Duck Research
              Laboratory.
            </p>

            <p>
              University of Kentucky / Poultry Extension — Duck production,
              incubation and flock management.
            </p>

            <p>
              FAO — materiais técnicos sobre produção avícola e sistemas de
              produção em diferentes regiões.
            </p>

          </div>

          <div className="mt-7 flex flex-wrap gap-3">

            <a
              href="https://www.vet.cornell.edu/animal-health-diagnostic-center/programs/duck-research-laboratory"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-800 px-5 py-3 font-bold text-white hover:bg-green-700"
            >
              Cornell — Duck Research Laboratory
            </a>

            <a
              href="https://poultry.extension.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-700 hover:bg-slate-100"
            >
              Poultry Extension
            </a>

          </div>

        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="bg-white py-12">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">

          <Link
            href="/pecuaria/patos/orientacoes/sanidade"
            className="rounded-xl border border-slate-300 px-6 py-3 text-center font-bold text-slate-700 transition hover:bg-slate-100"
          >
            Voltar para Sanidade
          </Link>

          <Link
            href="/pecuaria/patos/orientacoes/maneio"
            className="rounded-xl bg-green-800 px-6 py-3 text-center font-bold text-white transition hover:bg-green-700"
          >
            Próxima orientação: Maneio
          </Link>

        </div>

      </section>

    </main>
  );
}

