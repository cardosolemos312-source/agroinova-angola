import Link from "next/link";

const imagens = {
  hero:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Turkey%20farm%20-%20panoramio.jpg?width=1800",

  lote:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Turkeys%20in%20a%20barn.jpg?width=1600",

  observacao:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Turkey%20poults%20%2854004639769%29.jpg?width=1600",

  higiene:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Poultry%20farm.jpg?width=1600",

  ambiente:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Turkey%20farm.jpg?width=1600",
};

const pilares = [
  {
    numero: "01",
    titulo: "Prevenir",
    texto:
      "A prevenção começa antes da entrada das aves. Instalações limpas, água segura, alimentação adequada e controlo de visitantes reduzem riscos.",
  },
  {
    numero: "02",
    titulo: "Observar",
    texto:
      "O comportamento do lote pode mudar antes de aparecer uma mortalidade elevada. Observar diariamente é uma das ferramentas mais importantes.",
  },
  {
    numero: "03",
    titulo: "Detectar",
    texto:
      "Alterações de consumo, fezes, respiração, mobilidade, postura corporal ou aparência devem ser investigadas rapidamente.",
  },
  {
    numero: "04",
    titulo: "Agir",
    texto:
      "Quando existe suspeita de doença, o produtor deve reduzir a disseminação, separar animais afectados quando apropriado e procurar orientação veterinária.",
  },
];

const sinais = [
  {
    titulo: "Redução do consumo",
    texto:
      "Uma queda inesperada no consumo de água ou alimento pode indicar alterações ambientais, nutricionais ou sanitárias.",
  },
  {
    titulo: "Aves isoladas",
    texto:
      "Uma ave que se afasta repetidamente do grupo merece atenção, especialmente quando apresenta outros sinais.",
  },
  {
    titulo: "Dificuldade respiratória",
    texto:
      "Respiração anormal, espirros, secreções ou esforço respiratório devem ser investigados.",
  },
  {
    titulo: "Alteração das fezes",
    texto:
      "Mudanças persistentes na aparência ou consistência das fezes podem indicar problemas que exigem investigação.",
  },
  {
    titulo: "Alterações neuromusculares",
    texto:
      "Dificuldade de caminhar, fraqueza, tremores ou alterações de coordenação são sinais que não devem ser ignorados.",
  },
  {
    titulo: "Aumento da mortalidade",
    texto:
      "Mortalidade acima do padrão esperado ou mortes agrupadas num curto período exigem avaliação imediata.",
  },
];

const rotina = [
  {
    horario: "MANHÃ",
    tarefas: [
      "Observar comportamento do lote.",
      "Verificar água e bebedouros.",
      "Verificar alimento.",
      "Observar aves isoladas.",
      "Verificar mortalidade.",
    ],
  },
  {
    horario: "DURANTE O DIA",
    tarefas: [
      "Observar temperatura e ventilação.",
      "Verificar zonas húmidas.",
      "Observar consumo.",
      "Controlar entrada de pessoas.",
      "Verificar funcionamento dos equipamentos.",
    ],
  },
  {
    horario: "FINAL DO DIA",
    tarefas: [
      "Reavaliar comportamento.",
      "Confirmar disponibilidade de água.",
      "Verificar alimentação.",
      "Registar ocorrências.",
      "Preparar correcções para o dia seguinte.",
    ],
  },
];

const biosseguranca = [
  {
    titulo: "Pessoas",
    texto:
      "Limitar visitantes e estabelecer procedimentos de entrada. Pessoas podem transportar agentes entre diferentes instalações.",
  },
  {
    titulo: "Equipamentos",
    texto:
      "Evitar transportar equipamentos sujos entre lotes. Sempre que possível, limpar e desinfectar antes da utilização.",
  },
  {
    titulo: "Água",
    texto:
      "Manter bebedouros limpos e proteger a fonte de água contra contaminação.",
  },
  {
    titulo: "Ração",
    texto:
      "Armazenar alimento protegido de humidade, roedores, aves silvestres e outras fontes de contaminação.",
  },
  {
    titulo: "Animais",
    texto:
      "Evitar contacto desnecessário com outras aves domésticas ou silvestres.",
  },
  {
    titulo: "Mortalidade",
    texto:
      "Remover aves mortas rapidamente e adoptar um método seguro de eliminação conforme orientação local.",
  },
];

const erros = [
  "Esperar que uma doença desapareça sem investigar a causa.",
  "Introduzir aves novas sem qualquer controlo sanitário.",
  "Permitir entrada de visitantes sem medidas de biossegurança.",
  "Usar os mesmos equipamentos em diferentes lotes sem higienização.",
  "Ignorar redução de consumo de água ou alimento.",
  "Manter aves claramente doentes misturadas com o lote sem avaliação.",
  "Deixar cadáveres dentro ou junto à instalação.",
  "Manter bebedouros sujos.",
  "Permitir que a cama permaneça excessivamente húmida.",
  "Administrar medicamentos por conta própria sem diagnóstico ou orientação profissional.",
];

const checklist = [
  "O lote está activo e distribuído normalmente?",
  "As aves estão a comer normalmente?",
  "O consumo de água parece normal?",
  "Existem aves isoladas?",
  "Existem sinais respiratórios?",
  "Existem alterações persistentes nas fezes?",
  "Existem aves com dificuldade de locomoção?",
  "A mortalidade está dentro do padrão habitual?",
  "Os bebedouros estão limpos?",
  "Os comedouros estão limpos?",
  "A cama está seca?",
  "A ventilação está adequada?",
  "Existe controlo de visitantes?",
  "Os equipamentos estão limpos?",
];

export default function SanidadePerusPage() {
  return (
    <main className="min-h-screen bg-[#f5f7f2] text-slate-800">
      {/* HERO */}
      <section className="relative min-h-[650px] overflow-hidden">
        <img
          src={imagens.hero}
          alt="Criação de perus"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/20" />

        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="max-w-4xl text-white">
            <Link
              href="/pecuaria/perus"
              className="mb-8 inline-flex rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold backdrop-blur hover:bg-white/20"
            >
              ← Voltar para Perus
            </Link>

            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-lime-300">
              AGROINOVA ANGOLA • PECUÁRIA
            </p>

            <h1 className="text-5xl font-black leading-[0.98] tracking-tight md:text-7xl">
              Sanidade
              <span className="block text-lime-300">de Perus</span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-100 md:text-xl">
              Prevenir, observar e agir: um guia para reconhecer sinais de
              alerta, melhorar a biossegurança e construir uma rotina sanitária
              mais segura na criação de perus.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <span className="rounded-full bg-lime-400 px-4 py-2 text-sm font-black text-slate-950">
                Saúde do lote
              </span>

              <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                Biossegurança
              </span>

              <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                Prevenção
              </span>

              <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                Observação
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_.7fr]">
          <article className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
              O princípio mais importante
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              Sanidade não começa quando aparece uma doença.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Uma criação sanitariamente organizada trabalha para impedir que
              problemas apareçam, identificar alterações cedo e limitar a
              disseminação quando existe suspeita.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              O produtor não precisa ser médico veterinário para observar um
              lote. Mas precisa saber reconhecer mudanças e compreender quando
              uma situação exige avaliação profissional.
            </p>

            <div className="mt-8 rounded-2xl border-l-4 border-lime-500 bg-lime-50 p-6">
              <p className="font-black text-slate-950">
                O melhor momento para detectar um problema é antes que todo o
                lote apresente sinais.
              </p>

              <p className="mt-2 leading-7 text-slate-700">
                Por isso, comportamento, consumo, água, fezes, mortalidade e
                ambiente devem fazer parte da observação diária.
              </p>
            </div>
          </article>

          <div className="overflow-hidden rounded-[2rem] bg-slate-950 shadow-xl">
            <img
              src={imagens.observacao}
              alt="Perus jovens em observação"
              className="h-full min-h-[430px] w-full object-cover"
            />

            <div className="p-6 text-white">
              <p className="text-sm font-black uppercase tracking-widest text-lime-300">
                Observe o lote
              </p>

              <p className="mt-2 leading-7 text-slate-300">
                O comportamento colectivo e individual fornece informações
                importantes sobre o estado das aves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-lime-300">
              Método AGROINOVA
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Quatro passos para uma rotina sanitária inteligente.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {pilares.map((item) => (
              <article
                key={item.numero}
                className="rounded-[2rem] bg-white/10 p-6 ring-1 ring-white/10"
              >
                <span className="text-4xl font-black text-lime-300">
                  {item.numero}
                </span>

                <h3 className="mt-4 text-xl font-black">{item.titulo}</h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SINAIS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
            Sinais de alerta
          </p>

          <h2 className="mt-3 text-4xl font-black text-slate-950 md:text-5xl">
            O peru não fala. O comportamento fala por ele.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Nenhum destes sinais, isoladamente, permite determinar uma doença
            específica. Eles são sinais para observar, registar e investigar.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sinais.map((item, index) => (
            <article
              key={item.titulo}
              className="group rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 font-black text-amber-800">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  observar
                </span>
              </div>

              <h3 className="mt-6 text-xl font-black text-slate-950">
                {item.titulo}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {item.texto}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* OBSERVAÇÃO */}
      <section className="bg-emerald-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-lime-300">
                Diagnóstico começa pela observação
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Aprenda a comparar o peru de hoje com o peru de ontem.
              </h2>

              <p className="mt-6 text-lg leading-8 text-emerald-100">
                Uma das ferramentas mais simples para o pequeno produtor é
                conhecer o comportamento normal do seu lote. Alterações tornam
                mais fácil identificar problemas.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "As aves estão activas?",
                  "Estão distribuídas normalmente?",
                  "Procuram alimento?",
                  "Bebem normalmente?",
                  "Respondem ao movimento do produtor?",
                  "Existem indivíduos separados?",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10"
                  >
                    <span className="mr-3 font-black text-lime-300">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src={imagens.lote}
                alt="Lote de perus numa instalação"
                className="h-[560px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BIOSSEGURANÇA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
            Biossegurança
          </p>

          <h2 className="mt-3 text-4xl font-black text-slate-950 md:text-5xl">
            A doença pode chegar onde a higiene deixa entrar.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Biossegurança é o conjunto de medidas destinadas a reduzir a
            introdução e a disseminação de agentes infecciosos na exploração.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {biosseguranca.map((item) => (
            <article
              key={item.titulo}
              className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-200"
            >
              <h3 className="text-xl font-black text-slate-950">
                {item.titulo}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.texto}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* HIGIENE */}
      <section className="bg-amber-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] shadow-xl">
              <img
                src={imagens.higiene}
                alt="Instalação de produção avícola"
                className="h-[520px] w-full object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-amber-700">
                Higiene
              </p>

              <h2 className="mt-3 text-4xl font-black text-amber-950 md:text-5xl">
                Limpeza não é apenas estética.
              </h2>

              <p className="mt-5 text-lg leading-8 text-amber-900/80">
                Uma instalação limpa facilita o controlo do ambiente e reduz
                fontes de contaminação. Mas limpeza e desinfecção não são
                exactamente a mesma coisa: a matéria orgânica deve ser removida
                adequadamente antes de uma desinfecção eficaz.
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  "Remover resíduos e matéria orgânica.",
                  "Limpar equipamentos e superfícies.",
                  "Controlar humidade e zonas sujas.",
                  "Desinfectar conforme orientação técnica.",
                  "Respeitar o tempo e as condições de utilização dos produtos.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-amber-200"
                  >
                    <span className="mr-3 font-black text-amber-700">✓</span>
                    <span className="text-sm font-medium text-amber-950">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROTINA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
            Rotina sanitária
          </p>

          <h2 className="mt-3 text-4xl font-black text-slate-950 md:text-5xl">
            Uma rotina simples pode evitar grandes problemas.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            A melhor rotina é aquela que o produtor consegue realmente cumprir
            todos os dias.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {rotina.map((bloco) => (
            <article
              key={bloco.horario}
              className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-200"
            >
              <p className="text-sm font-black tracking-[0.2em] text-emerald-700">
                {bloco.horario}
              </p>

              <div className="mt-6 space-y-3">
                {bloco.tarefas.map((tarefa) => (
                  <div
                    key={tarefa}
                    className="rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-700"
                  >
                    <span className="mr-2 font-black text-lime-600">✓</span>
                    {tarefa}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* QUANDO PROCURAR AJUDA */}
      <section className="bg-red-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-red-300">
                Atenção
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Quando o produtor deve procurar ajuda veterinária?
              </h2>

              <p className="mt-6 text-lg leading-8 text-red-100">
                O produtor deve procurar avaliação profissional quando existem
                sinais persistentes, mortalidade anormal, doença que se
                espalha rapidamente ou alterações que não consegue explicar.
              </p>
            </div>

            <div className="space-y-3">
              {[
                "Mortalidade inesperada ou crescente.",
                "Várias aves com sinais semelhantes.",
                "Dificuldade respiratória significativa.",
                "Alterações neurológicas.",
                "Queda acentuada de consumo.",
                "Suspeita de doença contagiosa.",
                "Problemas persistentes apesar das correcções de manejo.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/10"
                >
                  <span className="mr-3 font-black text-red-300">!</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-red-400/30 bg-red-400/10 p-6">
            <p className="font-bold text-red-100">
              Importante:
            </p>

            <p className="mt-2 text-sm leading-7 text-red-100">
              Não administrar antibióticos, antiparasitários ou outros
              medicamentos de forma indiscriminada. O tratamento depende do
              problema, diagnóstico, produto autorizado, dose e orientação
              profissional. O uso inadequado também pode criar problemas de
              resistência antimicrobiana.
            </p>
          </div>
        </div>
      </section>

      {/* ERROS */}
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-lime-300">
            Evite
          </p>

          <h2 className="mt-3 max-w-3xl text-4xl font-black md:text-5xl">
            10 erros sanitários que podem colocar o lote em risco
          </h2>

          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {erros.map((erro, index) => (
              <div
                key={erro}
                className="flex gap-4 rounded-2xl bg-white/10 p-5 ring-1 ring-white/10"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime-300 font-black text-slate-950">
                  {index + 1}
                </span>

                <p className="leading-7 text-slate-200">{erro}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[2.5rem] bg-white p-8 shadow-xl ring-1 ring-slate-200 md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
            Ferramenta AGROINOVA
          </p>

          <h2 className="mt-3 text-4xl font-black text-slate-950 md:text-5xl">
            Checklist sanitário do lote
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Use esta lista como instrumento de observação. Ela não substitui
            diagnóstico veterinário.
          </p>

          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {checklist.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-black text-emerald-800">
                  {index + 1}
                </span>

                <span className="font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
          Próximas orientações
        </p>

        <h2 className="mt-2 text-3xl font-black text-slate-950">
          Continue a explorar a criação de perus
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <Link
            href="/pecuaria/perus/orientacoes/alimentacao"
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-sm text-emerald-700">01</p>
            <p className="mt-2 font-black">Alimentação</p>
          </Link>

          <Link
            href="/pecuaria/perus/orientacoes/instalacoes"
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-sm text-emerald-700">02</p>
            <p className="mt-2 font-black">Instalações</p>
          </Link>

          <Link
            href="/pecuaria/perus/orientacoes/sanidade"
            className="rounded-2xl bg-emerald-900 p-6 text-white shadow-lg"
          >
            <p className="text-sm text-emerald-300">03</p>
            <p className="mt-2 font-black">Sanidade</p>
          </Link>

          <Link
            href="/pecuaria/perus/orientacoes/crescimento"
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-sm text-emerald-700">04</p>
            <p className="mt-2 font-black">Crescimento</p>
          </Link>

          <Link
            href="/pecuaria/perus/orientacoes/reproducao"
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-sm text-emerald-700">05</p>
            <p className="mt-2 font-black">Reprodução</p>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <p className="text-sm font-black uppercase tracking-wider text-slate-500">
            AGROINOVA ANGOLA • Sanidade de Perus
          </p>

          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-500">
            Conteúdo educativo. Sinais clínicos podem ter diferentes causas.
            Diagnóstico, vacinação, tratamento e utilização de medicamentos
            devem ser definidos de acordo com a situação sanitária e orientação
            de médico veterinário ou autoridade competente.
          </p>
        </div>
      </footer>
    </main>
  );
}