
"use client";

import Link from "next/link";
import { useState } from "react";

const secoes = [
  {
    numero: "01",
    titulo: "Necessidades nutricionais",
    resumo: "Proteínas, energia, minerais e vitaminas.",
    conteudo: [
      "As codornizes necessitam de uma alimentação equilibrada para assegurar o crescimento, a manutenção do organismo, a reprodução e a produção de ovos. As necessidades nutricionais variam conforme a idade, a linhagem, o peso, o ambiente e a finalidade da exploração.",
      "A proteína contribui para a formação dos tecidos e para a produção. A energia fornece combustível para as actividades do organismo. Os minerais e as vitaminas participam no desenvolvimento ósseo, no metabolismo, na imunidade e na formação da casca dos ovos.",
      "Não se deve utilizar a mesma formulação alimentar em todas as fases. A ração inicial, a de crescimento e a de postura devem corresponder às necessidades das aves em cada etapa, segundo a formulação de um nutricionista animal ou as recomendações técnicas do fabricante."
    ]
  },
  {
    numero: "02",
    titulo: "Alimentação por fase",
    resumo: "Adaptação da ração à idade e ao objectivo produtivo.",
    conteudo: [
      "Na fase inicial, as aves jovens necessitam de alimento apropriado ao seu tamanho e às exigências do crescimento. A granulometria deve permitir que as codornizes consumam a ração sem dificuldade.",
      "Durante o crescimento, a alimentação deve favorecer um desenvolvimento uniforme, evitando tanto a insuficiência nutricional como o fornecimento excessivo de nutrientes ou energia.",
      "Na fase de postura, utilize ração própria para codornizes poedeiras, com composição adequada à produção de ovos e ao fornecimento de cálcio e outros nutrientes necessários à formação da casca.",
      "As transições entre rações devem ser planeadas. Sempre que adequado, faça a mudança de forma gradual e acompanhe o consumo, as fezes, o crescimento e a produção."
    ]
  },
  {
    numero: "03",
    titulo: "Água de bebida",
    resumo: "Água limpa e acesso permanente.",
    conteudo: [
      "A água é indispensável à digestão, à regulação da temperatura corporal e à produção. Deve estar disponível continuamente e ser adequada ao consumo animal.",
      "Verifique diariamente se todos os bebedouros funcionam. Limpe os recipientes, remova resíduos e investigue qualquer redução inesperada no consumo.",
      "Em períodos quentes, o consumo de água pode aumentar. Garanta que o sistema tem capacidade suficiente e que a água não fica exposta a contaminação ou aquecimento excessivo.",
      "Não adicione medicamentos, desinfectantes ou outros produtos à água sem orientação técnica e sem respeitar as indicações específicas do produto."
    ]
  },
  {
    numero: "04",
    titulo: "Comedouros e distribuição",
    resumo: "Acesso ao alimento e redução de desperdícios.",
    conteudo: [
      "Distribua os comedouros de forma a permitir que as aves tenham acesso ao alimento sem competição excessiva. A quantidade e o tipo de equipamento dependem da idade, do sistema de alojamento e do número de animais.",
      "Ajuste a altura dos equipamentos à dimensão das codornizes. Comedouros mal posicionados podem provocar desperdício, contaminação e dificuldades de acesso.",
      "Evite encher os comedouros em excesso. Observe o comportamento das aves e verifique se a ração permanece limpa, seca e disponível.",
      "Limpe regularmente os equipamentos e retire alimento húmido, bolorento ou contaminado. Nunca misture ração deteriorada com alimento novo."
    ]
  },
  {
    numero: "05",
    titulo: "Armazenamento da ração",
    resumo: "Protecção contra humidade, calor e pragas.",
    conteudo: [
      "Armazene a ração num espaço limpo, seco, ventilado e protegido da luz solar directa, da chuva, de roedores e de insectos.",
      "Mantenha os sacos afastados do chão e das paredes, utilizando suportes apropriados. O local deve facilitar a limpeza e a inspecção dos produtos armazenados.",
      "Observe o prazo de validade, a integridade da embalagem, o cheiro, a cor e a presença de bolor ou insectos. Se houver sinais de deterioração, suspenda a utilização e procure orientação técnica.",
      "Organize os lotes de forma a utilizar primeiro os produtos recebidos há mais tempo, respeitando a validade e as condições indicadas pelo fabricante."
    ]
  },
  {
    numero: "06",
    titulo: "Ingredientes e alimentos alternativos",
    resumo: "Utilização responsável de matérias-primas locais.",
    conteudo: [
      "Milho, farelos, fontes proteicas e outros ingredientes podem integrar rações, desde que a formulação assegure as necessidades nutricionais das aves e a qualidade das matérias-primas.",
      "A disponibilidade local de ingredientes em Angola pode criar oportunidades para reduzir custos, mas a substituição de componentes não deve ser feita apenas com base no preço ou na aparência do alimento.",
      "Ingredientes alternativos precisam de avaliação quanto à composição, digestibilidade, segurança, contaminação e adequação à fase de criação. Algumas matérias-primas podem conter substâncias antinutricionais ou micotoxinas.",
      "Antes de alterar a fórmula, consulte um técnico de nutrição animal. Uma mistura desequilibrada pode reduzir o crescimento, a fertilidade, a postura e a qualidade dos ovos."
    ]
  },
  {
    numero: "07",
    titulo: "Consumo e desempenho",
    resumo: "Registos para avaliar a alimentação.",
    conteudo: [
      "Registe a quantidade de ração fornecida e a que sobra, o consumo de água, a mortalidade, o peso das aves e, nas poedeiras, a quantidade de ovos produzidos.",
      "Compare os registos ao longo do tempo e procure alterações súbitas. Uma diminuição no consumo pode estar associada a problemas ambientais, alterações da ração, falhas no abastecimento de água ou doenças.",
      "Não avalie a qualidade da alimentação apenas pelo volume consumido. Considere também a uniformidade do lote, o crescimento, a condição corporal, a qualidade dos ovos e os custos de produção.",
      "Quando os resultados se afastarem do esperado, verifique primeiro a água, a temperatura, a qualidade da ração e o funcionamento dos equipamentos. Solicite assistência técnica se o problema persistir."
    ]
  },
  {
    numero: "08",
    titulo: "Custos e planeamento",
    resumo: "Orçamento alimentar e controlo económico.",
    conteudo: [
      "A alimentação representa uma componente importante dos custos da produção de codornizes. O planeamento deve considerar o tamanho do lote, a fase produtiva, o preço da ração, a capacidade de armazenamento e a regularidade do fornecimento.",
      "Calcule o custo real com base na quantidade efectivamente consumida, e não apenas no número de sacos comprados. Registe as compras, as datas, os fornecedores e as perdas.",
      "Compare fornecedores considerando qualidade, composição, prazo de validade, transporte e consistência do produto. O alimento mais barato não é necessariamente o mais económico se provocar desperdício ou pior desempenho.",
      "Faça previsões de consumo e mantenha uma reserva operacional compatível com o espaço de armazenamento e a frequência de abastecimento."
    ]
  }
];

const lista = [
  "Ração adequada à idade e à finalidade produtiva",
  "Água limpa disponível continuamente",
  "Comedouros e bebedouros limpos e funcionais",
  "Ração armazenada em local seco e protegido",
  "Embalagens e prazos de validade verificados",
  "Registo de ração fornecida e consumida",
  "Observação diária do comportamento das aves",
  "Formulação alimentar validada tecnicamente",
  "Orçamento e stock de ração actualizados"
];

export default function AlimentacaoCodornizesPage() {
  const [modal, setModal] = useState<number | null>(null);
  const [marcados, setMarcados] = useState<string[]>([]);
  const secao = secoes.find((item) => item.numero === modal?.toString().padStart(2, "0"));

  function alternar(item: string) {
    setMarcados((actual) =>
      actual.includes(item)
        ? actual.filter((valor) => valor !== item)
        : [...actual, item]
    );
  }

  return (
    <main className="min-h-screen bg-[#f3f7f2] text-[#17221b]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#123d26] via-[#166534] to-[#27864a] px-5 py-14 text-white sm:px-8 lg:px-12 lg:py-20">
        <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-white/5" />
        <div className="absolute -bottom-28 left-1/3 h-80 w-80 rounded-full bg-lime-300/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Link
              href="/pecuaria/codornizes/orientacoes/instalacoes"
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10"
            >
              <span aria-hidden="true">←</span>
              Orientação anterior: Instalações
            </Link>

            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-lime-300 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-green-950">
                Orientação técnica 02
              </span>
              <span className="text-sm text-green-100">Nutrição animal</span>
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Alimentação das codornizes
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-green-50 sm:text-lg">
              Conheça os princípios da nutrição, a importância da água, a
              escolha da ração e as práticas de maneio que ajudam a melhorar a
              saúde e o desempenho produtivo das codornizes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#conteudos"
                className="rounded-xl bg-white px-6 py-3 font-bold text-green-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-green-50"
              >
                Explorar conteúdos
              </a>
              <a
                href="#lista"
                className="rounded-xl border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white/10"
              >
                Lista de verificação
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md">
            <div className="rounded-[2rem] border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-sm sm:p-7">
              <div className="rounded-2xl bg-[#eaf5e8] p-5 text-green-950">
                <svg
                  viewBox="0 0 360 250"
                  role="img"
                  aria-label="Ilustração de ração, comedouro e bebedouro para codornizes"
                  className="w-full"
                >
                  <rect x="12" y="12" width="336" height="226" rx="18" fill="#eaf5e8" />
                  <ellipse cx="180" cy="205" rx="120" ry="12" fill="#c6ddc0" />
                  <path d="M55 91 L180 34 L305 91" fill="#b1cfa9" stroke="#285c36" strokeWidth="5" strokeLinejoin="round" />
                  <path d="M76 91 V186 M284 91 V186" stroke="#285c36" strokeWidth="5" />
                  <path d="M60 186 H300" stroke="#285c36" strokeWidth="5" strokeLinecap="round" />
                  <path d="M104 130 Q180 165 256 130 L244 176 Q180 198 116 176 Z" fill="#d4a56c" stroke="#805a32" strokeWidth="4" />
                  {[
                    [128, 147], [145, 153], [162, 158], [180, 160],
                    [198, 158], [215, 153], [232, 147], [151, 169],
                    [174, 173], [198, 169]
                  ].map(([x, y], i) => (
                    <ellipse key={i} cx={x} cy={y} rx="5" ry="3.5" fill="#80552b" />
                  ))}
                  <path d="M270 106 V158 Q270 169 281 169 Q292 169 292 158 V106" fill="#8cc9eb" stroke="#356b8b" strokeWidth="4" />
                  <path d="M266 106 H296" stroke="#356b8b" strokeWidth="5" strokeLinecap="round" />
                  <path d="M270 139 H292" stroke="#d9f2ff" strokeWidth="3" />
                  <circle cx="85" cy="70" r="9" fill="#e1bd54" />
                  <circle cx="104" cy="78" r="7" fill="#e1bd54" />
                  <circle cx="72" cy="83" r="6" fill="#e1bd54" />
                  <path d="M54 211 H306" stroke="#7ca775" strokeWidth="3" strokeLinecap="round" />
                </svg>
                <p className="mt-3 text-center text-sm font-semibold">
                  Alimentação equilibrada e água limpa
                </p>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl bg-white/10 p-3">
                  <span className="block text-2xl">01</span>
                  <span className="mt-1 block text-xs text-green-50">Nutrição</span>
                </div>
                <div className="rounded-xl bg-white/10 p-3">
                  <span className="block text-2xl">02</span>
                  <span className="mt-1 block text-xs text-green-50">Água</span>
                </div>
                <div className="rounded-xl bg-white/10 p-3">
                  <span className="block text-2xl">03</span>
                  <span className="mt-1 block text-xs text-green-50">Custos</span>
                </div>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-green-100">
              Ilustração esquemática para fins educativos.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              titulo: "Equilíbrio nutricional",
              texto: "A ração deve corresponder à idade e à finalidade produtiva."
            },
            {
              titulo: "Água permanente",
              texto: "A disponibilidade e a qualidade da água são essenciais."
            },
            {
              titulo: "Conservação",
              texto: "Proteja o alimento da humidade, do bolor e das pragas."
            },
            {
              titulo: "Controlo de custos",
              texto: "Registe o consumo e acompanhe as despesas alimentares."
            }
          ].map((item, i) => (
            <article
              key={item.titulo}
              className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 font-black text-green-800">
                0{i + 1}
              </span>
              <h2 className="mt-4 text-lg font-extrabold">{item.titulo}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="conteudos" className="mx-auto max-w-7xl px-5 pb-12 sm:px-8 lg:px-12">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-green-700">
            Manual prático
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            O que deve saber sobre a alimentação
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Consulte cada tema para conhecer os cuidados essenciais desde a
            recepção das aves até à produção de ovos.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {secoes.map((item) => (
            <button
              key={item.numero}
              type="button"
              onClick={() => setModal(Number(item.numero))}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-green-700/25">{item.numero}</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-xl text-green-800 transition group-hover:bg-green-700 group-hover:text-white">
                  ↗
                </span>
              </div>
              <h3 className="mt-5 text-xl font-extrabold">{item.titulo}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{item.resumo}</p>
              <span className="mt-5 inline-flex items-center gap-2 font-bold text-green-800">
                Consultar orientação <span aria-hidden="true">→</span>
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12 sm:px-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl bg-white p-7 shadow-sm sm:p-9">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-green-700">
              Boa prática
            </p>
            <h2 className="mt-3 text-2xl font-black">
              Evite alterações alimentares sem avaliação
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              A substituição de ingredientes, a mistura de rações diferentes e
              a utilização de alimentos destinados a outras espécies podem
              desequilibrar a dieta. A formulação deve considerar a fase
              produtiva e as necessidades específicas das codornizes.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Em caso de queda de postura, crescimento irregular ou redução
              súbita do consumo, investigue a qualidade da água, o estado da
              ração, as condições ambientais e a saúde do lote.
            </p>
          </article>

          <article className="rounded-3xl bg-green-900 p-7 text-white shadow-lg sm:p-9">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-lime-300">
              Aplicação em Angola
            </p>
            <h2 className="mt-3 text-2xl font-black">
              Organize o abastecimento
            </h2>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-green-50">
              <li className="flex gap-3">
                <span className="text-lime-300">✓</span>
                <span>Identifique fornecedores regulares de ração e matérias-primas.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lime-300">✓</span>
                <span>Calcule o custo do transporte e as condições de armazenamento.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lime-300">✓</span>
                <span>Proteja os sacos da humidade e das temperaturas elevadas.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lime-300">✓</span>
                <span>Tenha uma alternativa de abastecimento para evitar interrupções.</span>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section id="lista" className="mx-auto max-w-7xl px-5 pb-14 sm:px-8 lg:px-12">
        <div className="overflow-hidden rounded-3xl border border-green-100 bg-white shadow-sm">
          <div className="bg-green-50 p-7 sm:p-9">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-green-700">
              Controlo diário
            </p>
            <h2 className="mt-2 text-3xl font-black">
              Lista de verificação alimentar
            </h2>
            <p className="mt-3 text-slate-600">
              Assinale os cuidados já cumpridos na exploração.
            </p>
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-green-200">
              <div
                className="h-full rounded-full bg-green-700 transition-all duration-300"
                style={{ width: `${(marcados.length / lista.length) * 100}%` }}
              />
            </div>
            <p className="mt-2 text-sm font-bold text-green-900">
              {marcados.length} de {lista.length} itens verificados
            </p>
          </div>

          <div className="grid gap-3 p-6 sm:grid-cols-2 sm:p-9">
            {lista.map((item) => (
              <label
                key={item}
                className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition ${
                  marcados.includes(item)
                    ? "border-green-300 bg-green-50"
                    : "border-slate-200 bg-white hover:border-green-200"
                }`}
              >
                <input
                  type="checkbox"
                  checked={marcados.includes(item)}
                  onChange={() => alternar(item)}
                  className="mt-1 h-4 w-4 accent-green-700"
                />
                <span className="text-sm leading-6">{item}</span>
              </label>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-green-100 bg-white px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-green-700">
              Próxima orientação
            </p>
            <h2 className="mt-2 text-2xl font-black">Produção de ovos</h2>
            <p className="mt-2 text-slate-600">
              Maneio das poedeiras, recolha, conservação e registos de produção.
            </p>
          </div>
          <Link
            href="/pecuaria/codornizes/orientacoes/producao-de-ovos"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-green-800 px-6 py-4 font-bold text-white shadow-md transition hover:bg-green-900"
          >
            Próxima página <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {secao && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
          onClick={() => setModal(null)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-modal-alimentacao"
            onClick={(event) => event.stopPropagation()}
            className="max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
          >
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-green-100 bg-white p-6 sm:p-8">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-green-700">
                  Orientação técnica {secao.numero}
                </p>
                <h2 id="titulo-modal-alimentacao" className="mt-2 text-2xl font-black sm:text-3xl">
                  {secao.titulo}
                </h2>
                <p className="mt-2 text-slate-500">{secao.resumo}</p>
              </div>
              <button
                type="button"
                onClick={() => setModal(null)}
                aria-label="Fechar orientação"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl transition hover:bg-green-100"
              >
                ×
              </button>
            </div>

            <div className="space-y-5 p-6 sm:p-8">
              {secao.conteudo.map((paragrafo, i) => (
                <p key={i} className="text-justify leading-8 text-slate-700">
                  {paragrafo}
                </p>
              ))}
              <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
                <h3 className="font-extrabold text-green-900">Aplicação prática</h3>
                <p className="mt-2 leading-7 text-green-950">
                  Registe o consumo, observe as aves e mantenha a água e a ração
                  em boas condições. Para formular ou alterar a dieta, procure
                  orientação de um técnico de nutrição animal.
                </p>
              </div>
            </div>

            <div className="flex justify-end border-t border-slate-100 p-5 sm:px-8">
              <button
                type="button"
                onClick={() => setModal(null)}
                className="rounded-xl bg-green-800 px-6 py-3 font-bold text-white transition hover:bg-green-900"
              >
                Concluir leitura
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
