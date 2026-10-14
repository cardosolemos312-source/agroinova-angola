
"use client";

import Link from "next/link";
import { useState } from "react";

const temas = [
  {
    titulo: "Seleção das matrizes",
    resumo: "Escolha aves saudáveis e com boas características produtivas.",
    detalhe:
      "Seleciona reprodutores ativos, sem deformações aparentes, com plumagem adequada e histórico produtivo conhecido. Evita utilizar aves doentes, debilitadas ou com defeitos físicos. A idade e a condição corporal devem ser consideradas no plano de reprodução.",
    icon: "01",
  },
  {
    titulo: "Identificação dos sexos",
    resumo: "Distingue machos e fêmeas antes de formar os grupos reprodutores.",
    detalhe:
      "A identificação depende da linhagem, da idade e das características da plumagem. Em algumas variedades, a coloração do peito ajuda a distinguir os sexos; noutras, pode ser necessária observação especializada. Confirma a identificação antes de registar os grupos.",
    icon: "02",
  },
  {
    titulo: "Formação dos grupos",
    resumo: "Organiza os reprodutores para reduzir conflitos e melhorar o maneio.",
    detalhe:
      "Forma grupos compatíveis, com espaço suficiente, acesso uniforme à água e à alimentação e possibilidade de observação diária. A proporção entre machos e fêmeas deve considerar a linhagem, o sistema de criação e os resultados observados. Evita alterações frequentes dos grupos.",
    icon: "03",
  },
  {
    titulo: "Recolha dos ovos",
    resumo: "Recolhe e manuseia os ovos férteis com cuidado.",
    detalhe:
      "Recolhe os ovos regularmente, com mãos limpas, e evita choques, fissuras e contaminação. Separa os ovos partidos, muito sujos ou deformados. Identifica os lotes com a data de recolha e o grupo de origem sempre que possível.",
    icon: "04",
  },
  {
    titulo: "Conservação dos ovos",
    resumo: "Mantém os ovos destinados à incubação em condições adequadas.",
    detalhe:
      "Utiliza um local limpo, estável e protegido do sol direto, de odores, humidade excessiva e variações bruscas de temperatura. Evita períodos de armazenamento desnecessariamente longos. Segue as recomendações técnicas específicas da linhagem e da incubadora.",
    icon: "05",
  },
  {
    titulo: "Incubação artificial",
    resumo: "Controla os parâmetros do equipamento durante a incubação.",
    detalhe:
      "Antes de iniciar, limpa e verifica a incubadora, confirma a leitura dos sensores e testa o funcionamento. Segue as instruções do fabricante para temperatura, humidade, ventilação e viragem dos ovos. Evita abrir o equipamento repetidamente e regista as ocorrências.",
    icon: "06",
  },
  {
    titulo: "Nascimento e primeiros cuidados",
    resumo: "Prepara um ambiente protegido para as crias recém-nascidas.",
    detalhe:
      "Prepara antecipadamente uma criadeira limpa, seca e sem correntes de ar. Disponibiliza calor adequado, água segura em bebedouros que reduzam o risco de afogamento e alimento inicial apropriado. Observa a distribuição das crias e ajusta o ambiente de acordo com o seu comportamento.",
    icon: "07",
  },
  {
    titulo: "Registo dos resultados",
    resumo: "Avalia a fertilidade, a eclosão e a sobrevivência das crias.",
    detalhe:
      "Regista os ovos colocados na incubadora, os ovos inférteis identificados, os nascimentos, as crias viáveis e as perdas. Calcula os indicadores sempre com denominadores definidos. Estes registos ajudam a identificar problemas de maneio, conservação, incubação ou qualidade dos reprodutores.",
    icon: "08",
  },
];

const tarefas = [
  "Selecionar e identificar os reprodutores",
  "Verificar o estado sanitário das aves",
  "Confirmar a disponibilidade de água e alimento",
  "Observar o comportamento dos grupos",
  "Recolher e separar os ovos danificados",
  "Identificar os lotes por data e origem",
  "Verificar a limpeza e o funcionamento da incubadora",
  "Registar os ovos incubados e os nascimentos",
  "Preparar a criadeira antes da eclosão",
  "Acompanhar a sobrevivência das crias",
];

export default function ReproducaoCodornizesPage() {
  const [temaAberto, setTemaAberto] = useState<
    (typeof temas)[number] | null
  >(null);

  const [concluidas, setConcluidas] = useState<string[]>([]);

  function alternarTarefa(tarefa: string) {
    setConcluidas((atuais) =>
      atuais.includes(tarefa)
        ? atuais.filter((item) => item !== tarefa)
        : [...atuais, tarefa]
    );
  }

  const progresso = Math.round(
    (concluidas.length / tarefas.length) * 100
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-800 to-emerald-600 px-5 py-14 text-white sm:px-8 lg:py-20">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-36 right-1/4 h-96 w-96 rounded-full border border-white/10" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide">
              AGROINOVA ANGOLA · PECUÁRIA
            </p>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Reprodução de Codornizes
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-green-50 sm:text-lg">
              Orientações para selecionar reprodutores, organizar grupos,
              conservar ovos, acompanhar a incubação e cuidar das crias,
              com registos que ajudam a melhorar os resultados da exploração.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#orientacoes"
                className="rounded-xl bg-white px-6 py-3 font-bold text-green-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-green-50"
              >
                Consultar orientações
              </a>

              <a
                href="#controlo"
                className="rounded-xl border border-white/40 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white/20"
              >
                Lista de controlo
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-sm sm:p-8">
            <svg
              viewBox="0 0 520 360"
              role="img"
              aria-label="Ilustração técnica de ovos, incubadora e crias de codorniz"
              className="mx-auto w-full max-w-xl"
            >
              <defs>
                <linearGradient id="incubadora" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#f0fdf4" />
                  <stop offset="100%" stopColor="#bbf7d0" />
                </linearGradient>
              </defs>

              <ellipse cx="260" cy="320" rx="205" ry="20" fill="#052e16" opacity=".25" />

              <rect
                x="105"
                y="88"
                width="310"
                height="205"
                rx="24"
                fill="url(#incubadora)"
                stroke="#dcfce7"
                strokeWidth="4"
              />

              <rect
                x="127"
                y="109"
                width="266"
                height="135"
                rx="15"
                fill="#14532d"
              />

              <rect
                x="145"
                y="126"
                width="230"
                height="99"
                rx="12"
                fill="#dcfce7"
              />

              {[
                [183, 158],
                [222, 158],
                [261, 158],
                [300, 158],
                [339, 158],
                [202, 195],
                [241, 195],
                [280, 195],
                [319, 195],
              ].map(([x, y], index) => (
                <g key={index}>
                  <ellipse
                    cx={x}
                    cy={y}
                    rx="13"
                    ry="17"
                    fill="#fef3c7"
                    stroke="#d6a85c"
                    strokeWidth="1.5"
                  />
                  <ellipse
                    cx={x - 3}
                    cy={y - 5}
                    rx="3"
                    ry="5"
                    fill="#fff"
                    opacity=".8"
                  />
                </g>
              ))}

              <rect
                x="221"
                y="257"
                width="78"
                height="20"
                rx="6"
                fill="#166534"
              />
              <circle cx="239" cy="267" r="4" fill="#86efac" />
              <circle cx="253" cy="267" r="4" fill="#facc15" />
              <rect x="268" y="263" width="20" height="7" rx="3" fill="#dcfce7" />

              <g transform="translate(50 205)">
                <ellipse cx="30" cy="68" rx="31" ry="8" fill="#052e16" opacity=".2" />
                <ellipse cx="30" cy="43" rx="25" ry="28" fill="#d6a85c" />
                <circle cx="29" cy="19" r="20" fill="#f2cf83" />
                <circle cx="22" cy="15" r="3" fill="#1f2937" />
                <circle cx="36" cy="15" r="3" fill="#1f2937" />
                <path d="M25 23 L31 23 L28 29 Z" fill="#ea580c" />
                <path d="M13 35 Q-1 24 5 48 Q13 54 22 47" fill="#b77932" />
                <path d="M18 67 L15 77 M40 67 L43 77" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" />
              </g>

              <g transform="translate(389 207)">
                <ellipse cx="30" cy="67" rx="31" ry="8" fill="#052e16" opacity=".2" />
                <ellipse cx="30" cy="43" rx="25" ry="28" fill="#d6a85c" />
                <circle cx="29" cy="19" r="20" fill="#f2cf83" />
                <circle cx="22" cy="15" r="3" fill="#1f2937" />
                <circle cx="36" cy="15" r="3" fill="#1f2937" />
                <path d="M25 23 L31 23 L28 29 Z" fill="#ea580c" />
                <path d="M46 38 Q62 27 57 48 Q49 55 40 47" fill="#b77932" />
                <path d="M18 67 L15 77 M40 67 L43 77" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" />
              </g>

              <path d="M140 65 Q260 28 380 65" fill="none" stroke="#bbf7d0" strokeWidth="2" strokeDasharray="5 7" />
              <circle cx="140" cy="65" r="5" fill="#fef3c7" />
              <circle cx="380" cy="65" r="5" fill="#fef3c7" />
            </svg>

            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl bg-white/10 p-3">
                <p className="text-sm text-green-100">Etapa 1</p>
                <p className="mt-1 font-bold">Matrizes</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-3">
                <p className="text-sm text-green-100">Etapa 2</p>
                <p className="mt-1 font-bold">Incubação</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-3">
                <p className="text-sm text-green-100">Etapa 3</p>
                <p className="mt-1 font-bold">Crias</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              numero: "01",
              titulo: "Planeamento",
              texto: "Define os grupos reprodutores e prepara os equipamentos.",
            },
            {
              numero: "02",
              titulo: "Acompanhamento",
              texto: "Observa os ovos, a incubação e o comportamento das crias.",
            },
            {
              numero: "03",
              titulo: "Avaliação",
              texto: "Regista os resultados para melhorar os lotes seguintes.",
            },
          ].map((item) => (
            <article
              key={item.numero}
              className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 font-extrabold text-green-800">
                {item.numero}
              </span>
              <h2 className="mt-4 text-xl font-bold text-green-950">
                {item.titulo}
              </h2>
              <p className="mt-2 leading-7 text-slate-600">{item.texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="orientacoes" className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
            Guia técnico
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Etapas da reprodução
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            Seleciona cada tema para consultar as recomendações e os cuidados
            essenciais em cada etapa do processo reprodutivo.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {temas.map((tema) => (
            <button
              type="button"
              key={tema.titulo}
              onClick={() => setTemaAberto(tema)}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 font-extrabold text-green-800 transition group-hover:bg-green-700 group-hover:text-white">
                {tema.icon}
              </span>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {tema.titulo}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                {tema.resumo}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 font-bold text-green-700">
                Consultar
                <span aria-hidden="true">→</span>
              </span>
            </button>
          ))}
        </div>
      </section>

      <section id="controlo" className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Ferramenta de apoio
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
              Lista de controlo reprodutivo
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Assinala as tarefas concluídas durante o maneio. A lista ajuda
              a acompanhar o trabalho desta sessão.
            </p>

            <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-green-600 to-emerald-400 transition-all duration-300"
                style={{ width: `${progresso}%` }}
              />
            </div>

            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="text-slate-500">Progresso das tarefas</span>
              <span className="font-bold text-green-800">
                {concluidas.length}/{tarefas.length} · {progresso}%
              </span>
            </div>

            <div className="mt-6 space-y-3">
              {tarefas.map((tarefa) => (
                <label
                  key={tarefa}
                  className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-100 p-3 transition hover:bg-green-50"
                >
                  <input
                    type="checkbox"
                    checked={concluidas.includes(tarefa)}
                    onChange={() => alternarTarefa(tarefa)}
                    className="mt-1 h-4 w-4 accent-green-700"
                  />
                  <span
                    className={
                      concluidas.includes(tarefa)
                        ? "text-sm leading-6 text-slate-400 line-through"
                        : "text-sm leading-6 text-slate-700"
                    }
                  >
                    {tarefa}
                  </span>
                </label>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setConcluidas([])}
              className="mt-5 rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              Repor lista
            </button>
          </div>

          <aside className="rounded-3xl bg-gradient-to-br from-green-950 to-green-800 p-7 text-white shadow-xl sm:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-2xl">
              i
            </div>
            <h2 className="mt-5 text-2xl font-extrabold">
              Boas práticas de maneio
            </h2>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-green-50">
              <li className="border-b border-white/15 pb-4">
                <strong className="text-white">Higiene:</strong> mantém
                equipamentos, recipientes e instalações limpos.
              </li>
              <li className="border-b border-white/15 pb-4">
                <strong className="text-white">Bem-estar:</strong> evita
                sobrelotação, stress e mudanças bruscas no ambiente.
              </li>
              <li className="border-b border-white/15 pb-4">
                <strong className="text-white">Precisão:</strong> verifica os
                sensores e segue as instruções da incubadora.
              </li>
              <li>
                <strong className="text-white">Acompanhamento:</strong> procura
                apoio veterinário ou zootécnico quando surgirem problemas
                persistentes.
              </li>
            </ul>
            <p className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-4 text-sm leading-6 text-green-50">
              Os parâmetros de incubação variam conforme a linhagem e o
              equipamento. Consulta o manual da incubadora e as orientações
              técnicas aplicáveis à tua exploração.
            </p>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-14 sm:px-8">
        <div className="flex flex-col justify-between gap-5 rounded-3xl border border-green-100 bg-green-50 p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Percurso de aprendizagem
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-green-950">
              Continua as orientações sobre codornizes
            </h2>
            <p className="mt-2 leading-7 text-slate-600">
              Depois da reprodução, consulta os aspetos económicos e comerciais
              da produção de codornizes.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/pecuaria/codornizes/orientacoes/sanidade"
              className="rounded-xl border border-green-200 bg-white px-5 py-3 text-center font-bold text-green-900 transition hover:bg-green-100"
            >
              ← Sanidade
            </Link>
            <Link
              href="/pecuaria/codornizes/orientacoes/mercado"
              className="rounded-xl bg-green-700 px-5 py-3 text-center font-bold text-white shadow-md transition hover:bg-green-800"
            >
              Seguinte: Mercado →
            </Link>
          </div>
        </div>
      </section>

      {temaAberto && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
          onClick={() => setTemaAberto(null)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-modal-reproducao"
            onClick={(event) => event.stopPropagation()}
            className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
          >
            <div className="bg-gradient-to-r from-green-950 to-green-700 p-6 text-white sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-green-100">
                    Guia de reprodução
                  </p>
                  <h2
                    id="titulo-modal-reproducao"
                    className="mt-2 text-2xl font-extrabold sm:text-3xl"
                  >
                    {temaAberto.titulo}
                  </h2>
                </div>
                <button
                  type="button"
                  aria-label="Fechar janela"
                  onClick={() => setTemaAberto(null)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-xl transition hover:bg-white/25"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-base leading-8 text-slate-700">
                {temaAberto.detalhe}
              </p>

              <div className="mt-6 rounded-2xl border border-green-100 bg-green-50 p-5">
                <h3 className="font-bold text-green-950">
                  Aplicação na exploração
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Regista as observações e compara os resultados entre lotes.
                  Quando houver mortalidade elevada, baixa eclosão ou sinais de
                  doença, investiga as possíveis causas com apoio técnico.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setTemaAberto(null)}
                className="mt-6 w-full rounded-xl bg-green-700 px-5 py-3 font-bold text-white transition hover:bg-green-800"
              >
                Concluir consulta
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
