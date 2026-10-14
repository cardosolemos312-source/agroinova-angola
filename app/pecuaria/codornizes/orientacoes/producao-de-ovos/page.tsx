
"use client";

import Link from "next/link";
import { useState } from "react";

const secoes = [
  {
    numero: "01",
    titulo: "Preparação das poedeiras",
    resumo: "Transição para a fase de postura e adaptação.",
    conteudo: [
      "A produção de ovos depende da idade, da linhagem, da nutrição, da saúde e das condições ambientais das codornizes. Antes de iniciar a fase produtiva, confirme se as aves apresentam desenvolvimento adequado e se o alojamento está preparado.",
      "A transição para a postura deve ser acompanhada com uma alimentação apropriada à fase produtiva, água limpa permanente e condições estáveis de iluminação e temperatura.",
      "Evite mudanças bruscas de alojamento, alimentação ou rotina. Observe diariamente o comportamento das aves e procure assistência técnica perante sinais persistentes de stress ou doença.",
      "A idade de início da postura varia com a linhagem e o sistema de criação. Utilize as orientações do fornecedor e do técnico responsável para planear o início da produção.",
    ],
  },
  {
    numero: "02",
    titulo: "Iluminação e ambiente",
    resumo: "Regularidade da luz, ventilação e conforto.",
    conteudo: [
      "O programa de iluminação influencia a actividade reprodutiva das codornizes. A duração e a intensidade da luz devem ser ajustadas à idade, à linhagem e ao objectivo produtivo.",
      "Mantenha horários consistentes e evite alterações bruscas. Um temporizador pode ajudar a cumprir o programa definido para a exploração.",
      "A iluminação, por si só, não garante uma boa postura. É necessário assegurar alimentação equilibrada, água disponível, alojamento adequado, higiene e controlo sanitário.",
      "O calor excessivo, a má ventilação, o ruído constante e a elevada densidade de aves podem comprometer o bem-estar e afectar o desempenho produtivo.",
    ],
  },
  {
    numero: "03",
    titulo: "Alimentação das poedeiras",
    resumo: "Nutrientes essenciais à produção e à casca.",
    conteudo: [
      "As poedeiras necessitam de uma dieta formulada para a produção de ovos. A ração deve fornecer energia, proteína, aminoácidos, vitaminas e minerais em proporções adequadas.",
      "O cálcio e o fósforo são importantes para a formação e manutenção da estrutura óssea e para a qualidade da casca. A sua proporção e disponibilidade devem ser consideradas na formulação da dieta.",
      "Disponibilize água limpa continuamente. A redução do acesso à água ou a deterioração da ração podem afectar rapidamente a produção.",
      "Não adicione cálcio, vitaminas, medicamentos ou outros produtos sem avaliar as necessidades reais e sem orientação técnica. Uma suplementação inadequada também pode causar problemas.",
    ],
  },
  {
    numero: "04",
    titulo: "Recolha dos ovos",
    resumo: "Frequência, cuidado e prevenção de quebras.",
    conteudo: [
      "Estabeleça uma rotina regular de recolha, ajustada ao número de aves, ao sistema de alojamento e ao volume de produção. Recolhas frequentes ajudam a reduzir quebras, sujidade e danos nos ovos.",
      "Manuseie os ovos com cuidado e utilize tabuleiros ou recipientes limpos, secos e próprios para o efeito. Evite movimentos bruscos e a acumulação de ovos em recipientes demasiado cheios.",
      "Separe os ovos partidos, com fissuras ou visivelmente contaminados. Não misture produtos impróprios para comercialização com ovos íntegros destinados à venda.",
      "Mantenha uma rotina higiénica durante a recolha e lave as mãos antes de manusear os ovos. Os recipientes devem ser limpos e protegidos contra poeiras e pragas.",
    ],
  },
  {
    numero: "05",
    titulo: "Selecção e conservação",
    resumo: "Qualidade, higiene e armazenamento.",
    conteudo: [
      "Depois da recolha, inspeccione os ovos e separe os que apresentam fissuras, quebras ou contaminação evidente. Registe os lotes e as datas de recolha para facilitar a rastreabilidade.",
      "Armazene os ovos num espaço limpo, protegido da luz solar directa, de odores fortes, de pragas e de variações térmicas excessivas. Evite a exposição prolongada ao calor.",
      "Defina condições de conservação de acordo com as exigências sanitárias aplicáveis, a orientação técnica e o tempo previsto até à venda ou ao consumo.",
      "Não atribua um prazo de validade sem fundamento. O período de conservação depende das condições de produção, higiene, temperatura, embalagem e requisitos legais aplicáveis.",
    ],
  },
  {
    numero: "06",
    titulo: "Registo da postura",
    resumo: "Contagem diária e acompanhamento do lote.",
    conteudo: [
      "Registe diariamente o número de aves presentes, os ovos recolhidos, os ovos partidos ou rejeitados, a quantidade de ração utilizada e qualquer ocorrência sanitária relevante.",
      "O registo permite acompanhar a evolução da postura e identificar alterações que possam estar relacionadas com alimentação, ambiente, idade ou saúde das aves.",
      "Compare os resultados entre dias e semanas, tendo em conta as mudanças no tamanho do lote. Uma queda de produção deve ser investigada em vez de ser atribuída automaticamente a uma única causa.",
      "Guarde os registos de forma organizada, em papel ou numa folha de cálculo, e utilize-os para planear compras, recolhas, armazenamento e entregas.",
    ],
  },
  {
    numero: "07",
    titulo: "Problemas de produção",
    resumo: "Identificação de alterações e resposta adequada.",
    conteudo: [
      "Uma diminuição na quantidade de ovos pode estar associada a stress térmico, alterações na iluminação, alimentação inadequada, falhas de água, idade das aves ou problemas de saúde.",
      "O aumento de ovos partidos ou de cascas frágeis exige a avaliação do maneio, da dieta, dos equipamentos e das condições das aves. A origem do problema deve ser identificada antes de alterar a alimentação.",
      "Observe também o comportamento, o consumo, a mortalidade e o aspecto geral do lote. Alterações simultâneas em vários indicadores justificam atenção redobrada.",
      "Perante mortalidade anormal, sinais graves ou suspeita de doença transmissível, procure assistência veterinária. Não administre medicamentos por iniciativa própria.",
    ],
  },
  {
    numero: "08",
    titulo: "Planeamento da venda",
    resumo: "Apresentação, embalagem e organização dos lotes.",
    conteudo: [
      "Identifique os potenciais compradores antes de aumentar a produção. Restaurantes, mercados, comerciantes e consumidores podem ter exigências diferentes quanto à quantidade, embalagem e frequência de entrega.",
      "Planeie as recolhas, a selecção, a embalagem e o transporte para preservar a integridade dos ovos. Utilize embalagens adequadas e mantenha os produtos protegidos durante a distribuição.",
      "Registe as quantidades vendidas, os preços, os custos de embalagem, o transporte, as perdas e os pagamentos recebidos. Estes dados ajudam a avaliar a margem económica da actividade.",
      "Confirme os requisitos sanitários, de rotulagem, conservação e comercialização aplicáveis em Angola junto das entidades competentes antes de colocar o produto no mercado.",
    ],
  },
];

const verificacoes = [
  "Aves com desenvolvimento e condição adequados",
  "Ração própria para poedeiras disponível",
  "Água limpa e permanente",
  "Iluminação regular e apropriada",
  "Ventilação e temperatura acompanhadas",
  "Recolha regular dos ovos organizada",
  "Ovos partidos e impróprios separados",
  "Recipientes e área de armazenamento limpos",
  "Quantidade de ovos registada diariamente",
  "Compradores e condições de venda identificados",
];

export default function ProducaoOvosCodornizesPage() {
  const [modal, setModal] = useState<string | null>(null);
  const [marcados, setMarcados] = useState<string[]>([]);

  const secao = secoes.find((item) => item.numero === modal);

  function alternar(item: string) {
    setMarcados((actual) =>
      actual.includes(item)
        ? actual.filter((valor) => valor !== item)
        : [...actual, item]
    );
  }

  const progresso =
    (marcados.length / verificacoes.length) * 100;

  return (
    <main className="min-h-screen bg-[#f3f7f2] text-[#17221b]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#123d26] via-[#166534] to-[#27864a] px-5 py-14 text-white sm:px-8 lg:px-12 lg:py-20">
        <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-white/5" />
        <div className="absolute -bottom-28 left-1/3 h-80 w-80 rounded-full bg-lime-300/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Link
              href="/pecuaria/codornizes/orientacoes/alimentacao"
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10"
            >
              <span aria-hidden="true">←</span>
              Orientação anterior: Alimentação
            </Link>

            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-lime-300 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-green-950">
                Orientação técnica 03
              </span>
              <span className="text-sm text-green-100">
                Produção animal
              </span>
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Produção de ovos de codornizes
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-green-50 sm:text-lg">
              Aprenda a preparar as poedeiras, acompanhar a postura, recolher e
              conservar os ovos e organizar os registos para uma produção
              higiénica, consistente e comercialmente sustentável.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#conteudos"
                className="rounded-xl bg-white px-6 py-3 font-bold text-green-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-green-50"
              >
                Explorar conteúdos
              </a>
              <a
                href="#verificacao"
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
                  aria-label="Ilustração esquemática de ovos de codorniz e tabuleiro de recolha"
                  className="w-full"
                >
                  <rect
                    x="12"
                    y="12"
                    width="336"
                    height="226"
                    rx="18"
                    fill="#eaf5e8"
                  />
                  <ellipse
                    cx="180"
                    cy="206"
                    rx="120"
                    ry="13"
                    fill="#c8dec1"
                  />
                  <rect
                    x="58"
                    y="145"
                    width="244"
                    height="49"
                    rx="9"
                    fill="#c38b50"
                    stroke="#80552f"
                    strokeWidth="4"
                  />
                  <path
                    d="M76 157 H284 M76 170 H284 M76 183 H284"
                    stroke="#8c6038"
                    strokeWidth="2"
                  />
                  {[
                    [91, 119, -8],
                    [133, 112, 7],
                    [176, 119, -4],
                    [219, 112, 6],
                    [262, 119, -7],
                  ].map(([x, y, r], i) => (
                    <g
                      key={i}
                      transform={`translate(${x} ${y}) rotate(${r})`}
                    >
                      <ellipse
                        cx="0"
                        cy="0"
                        rx="15"
                        ry="21"
                        fill="#fffdf2"
                        stroke="#b9a982"
                        strokeWidth="2"
                      />
                      <ellipse
                        cx="-4"
                        cy="-5"
                        rx="2.5"
                        ry="3"
                        fill="#b18a55"
                      />
                      <ellipse
                        cx="5"
                        cy="4"
                        rx="2"
                        ry="2.5"
                        fill="#b18a55"
                      />
                      <circle cx="2" cy="-10" r="1.8" fill="#b18a55" />
                    </g>
                  ))}
                  <path
                    d="M54 199 H306"
                    stroke="#7ca775"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle cx="65" cy="65" r="13" fill="#d9eacb" />
                  <path
                    d="M65 45 V36 M65 94 V85 M45 65 H36 M94 65 H85 M51 51 L44 44 M79 79 L86 86 M79 51 L86 44 M51 79 L44 86"
                    stroke="#6d9c5d"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M257 54 Q281 38 305 54"
                    fill="none"
                    stroke="#6d9c5d"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M268 66 Q281 54 294 66"
                    fill="none"
                    stroke="#6d9c5d"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="mt-3 text-center text-sm font-semibold">
                  Recolha cuidadosa e conservação dos ovos
                </p>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl bg-white/10 p-3">
                  <span className="block text-2xl">01</span>
                  <span className="mt-1 block text-xs text-green-50">
                    Postura
                  </span>
                </div>
                <div className="rounded-xl bg-white/10 p-3">
                  <span className="block text-2xl">02</span>
                  <span className="mt-1 block text-xs text-green-50">
                    Qualidade
                  </span>
                </div>
                <div className="rounded-xl bg-white/10 p-3">
                  <span className="block text-2xl">03</span>
                  <span className="mt-1 block text-xs text-green-50">
                    Registos
                  </span>
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
              titulo: "Maneio das poedeiras",
              texto: "Acompanhe a alimentação, o ambiente e o bem-estar.",
            },
            {
              titulo: "Recolha higiénica",
              texto: "Reduza quebras, sujidade e contaminação.",
            },
            {
              titulo: "Qualidade dos ovos",
              texto: "Inspeccione, seleccione e conserve correctamente.",
            },
            {
              titulo: "Registos de produção",
              texto: "Utilize dados diários para acompanhar os resultados.",
            },
          ].map((item, i) => (
            <article
              key={item.titulo}
              className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 font-black text-green-800">
                0{i + 1}
              </span>
              <h2 className="mt-4 text-lg font-extrabold">{item.titulo}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.texto}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="conteudos"
        className="mx-auto max-w-7xl px-5 pb-12 sm:px-8 lg:px-12"
      >
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-green-700">
            Manual prático
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            Etapas da produção de ovos
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Seleccione cada tema para consultar recomendações sobre a postura,
            a recolha, a conservação e o acompanhamento da produção.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {secoes.map((item) => (
            <button
              key={item.numero}
              type="button"
              onClick={() => setModal(item.numero)}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-green-700/25">
                  {item.numero}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-xl text-green-800 transition group-hover:bg-green-700 group-hover:text-white">
                  ↗
                </span>
              </div>
              <h3 className="mt-5 text-xl font-extrabold">{item.titulo}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                {item.resumo}
              </p>
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
              Qualidade e higiene
            </p>
            <h2 className="mt-3 text-2xl font-black">
              Proteja os ovos desde a recolha
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              A qualidade comercial depende do estado da casca, da higiene
              durante o manuseamento, das condições de conservação e da
              organização dos lotes. Uma rotina consistente reduz perdas e
              facilita a identificação de problemas.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Os ovos partidos, com fissuras ou visivelmente contaminados devem
              ser separados dos ovos íntegros. A comercialização deve respeitar
              as regras sanitárias aplicáveis.
            </p>
          </article>

          <article className="rounded-3xl bg-green-900 p-7 text-white shadow-lg sm:p-9">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-lime-300">
              Gestão da exploração
            </p>
            <h2 className="mt-3 text-2xl font-black">
              Transforme a produção em dados
            </h2>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-green-50">
              <li className="flex gap-3">
                <span className="text-lime-300">✓</span>
                <span>Conte e registe os ovos recolhidos todos os dias.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lime-300">✓</span>
                <span>Registe ovos partidos, rejeitados e perdas.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lime-300">✓</span>
                <span>Acompanhe o consumo de ração e água.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lime-300">✓</span>
                <span>Compare a produção com os custos e as vendas.</span>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section
        id="verificacao"
        className="mx-auto max-w-7xl px-5 pb-14 sm:px-8 lg:px-12"
      >
        <div className="overflow-hidden rounded-3xl border border-green-100 bg-white shadow-sm">
          <div className="bg-green-50 p-7 sm:p-9">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-green-700">
              Controlo diário
            </p>
            <h2 className="mt-2 text-3xl font-black">
              Lista de verificação da postura
            </h2>
            <p className="mt-3 text-slate-600">
              Assinale os procedimentos já cumpridos na exploração.
            </p>
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-green-200">
              <div
                className="h-full rounded-full bg-green-700 transition-all duration-300"
                style={{ width: `${progresso}%` }}
              />
            </div>
            <p className="mt-2 text-sm font-bold text-green-900">
              {marcados.length} de {verificacoes.length} itens verificados
            </p>
          </div>

          <div className="grid gap-3 p-6 sm:grid-cols-2 sm:p-9">
            {verificacoes.map((item) => (
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
            <h2 className="mt-2 text-2xl font-black">
              Sanidade das codornizes
            </h2>
            <p className="mt-2 text-slate-600">
              Prevenção, biossegurança, observação diária e cuidados sanitários.
            </p>
          </div>
          <Link
            href="/pecuaria/codornizes/orientacoes/sanidade"
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
            aria-labelledby="titulo-modal-ovos"
            onClick={(event) => event.stopPropagation()}
            className="max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
          >
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-green-100 bg-white p-6 sm:p-8">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-green-700">
                  Orientação técnica {secao.numero}
                </p>
                <h2
                  id="titulo-modal-ovos"
                  className="mt-2 text-2xl font-black sm:text-3xl"
                >
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
                <h3 className="font-extrabold text-green-900">
                  Aplicação prática
                </h3>
                <p className="mt-2 leading-7 text-green-950">
                  Registe os resultados, mantenha os procedimentos de higiene
                  e investigue alterações na postura. Sempre que necessário,
                  procure orientação de um técnico de produção animal ou médico
                  veterinário.
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
