
"use client";

import { useState } from "react";
import Link from "next/link";

const imagemPrincipal =
  "https://photographers.lightrocket.com/media/image?c=b955762ab92d9836a12c748c2d2d7e35&src=thumbs%2F128";

const temas = [
  {
    numero: "01",
    titulo: "Escolha dos reprodutores",
    resumo:
      "Seleção de fêmeas e machos com boa condição corporal, saúde e características adequadas.",
    conteudo: [
      "Selecionar animais saudáveis, sem sinais de doença ou alterações que comprometam a reprodução.",
      "Avaliar a conformação corporal, os aprumos, a dentição e a capacidade de locomoção.",
      "Observar o histórico reprodutivo das fêmeas e a fertilidade conhecida dos machos.",
      "Evitar o acasalamento entre animais aparentados, sempre que seja possível conhecer a genealogia.",
    ],
  },
  {
    numero: "02",
    titulo: "Cio e acasalamento",
    resumo:
      "Reconhecimento do comportamento reprodutivo e acompanhamento do momento adequado para o acasalamento.",
    conteudo: [
      "Observar alterações de comportamento, interesse pelo macho e outros sinais de recetividade.",
      "Registar a data em que o cio foi identificado e a data do acasalamento.",
      "Evitar cobrições sem controlo sanitário ou quando existam lesões e sinais de doença.",
      "Solicitar acompanhamento veterinário quando o cio é irregular ou a fêmea não consegue emprenhar.",
    ],
  },
  {
    numero: "03",
    titulo: "Gestação da jumenta",
    resumo:
      "Acompanhamento da fêmea gestante, nutrição equilibrada e preparação para o parto.",
    conteudo: [
      "A gestação dos asininos dura geralmente cerca de 12 meses, podendo variar entre animais.",
      "Garantir água limpa, alimentação adequada e acesso a abrigo e sombra.",
      "Evitar mudanças bruscas na alimentação, esforço excessivo e situações de stress.",
      "Programar avaliações veterinárias e manter registos das datas e da evolução da gestação.",
    ],
  },
  {
    numero: "04",
    titulo: "Parto e primeiros cuidados",
    resumo:
      "Preparação de um ambiente limpo, tranquilo e seguro para a mãe e o recém-nascido.",
    conteudo: [
      "Preparar um local seco, limpo, protegido da chuva e com espaço suficiente para a fêmea.",
      "Observar o parto à distância, sem interferir desnecessariamente quando a evolução é normal.",
      "Confirmar que o poldro respira, consegue levantar-se e procura mamar.",
      "Garantir a ingestão precoce do colostro e procurar assistência veterinária se houver dificuldades.",
    ],
  },
  {
    numero: "05",
    titulo: "Cuidados com o poldro",
    resumo:
      "Vigilância do desenvolvimento, alimentação inicial e prevenção de doenças.",
    conteudo: [
      "Observar a amamentação, a atividade, a respiração e a eliminação de urina e fezes.",
      "Manter o ambiente limpo e seco e evitar a exposição a condições climáticas adversas.",
      "Solicitar avaliação veterinária para verificar a saúde inicial e estabelecer o plano sanitário.",
      "Acompanhar o crescimento e a adaptação gradual à alimentação complementar quando apropriado.",
    ],
  },
  {
    numero: "06",
    titulo: "Fertilidade e registos",
    resumo:
      "Organização dos dados reprodutivos para melhorar o maneio e a produtividade do efetivo.",
    conteudo: [
      "Registar identificação da fêmea e do macho, data do acasalamento e observações relevantes.",
      "Anotar diagnósticos de gestação, partos, complicações e desenvolvimento dos poldros.",
      "Investigar, com apoio veterinário, casos de infertilidade ou perdas gestacionais repetidas.",
      "Utilizar os registos para planear os acasalamentos e evitar a consanguinidade.",
    ],
  },
];

const sinaisAlerta = [
  "Corrimento anormal ou com mau cheiro.",
  "Perda de apetite, febre ou fraqueza acentuada.",
  "Dificuldade durante o parto ou ausência de progressão.",
  "Recusa persistente do poldro em mamar.",
  "Dor intensa, hemorragia ou deterioração súbita do estado geral.",
];

export default function ReproducaoAsininosPage() {
  const [temaAtivo, setTemaAtivo] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#f5f7f6] text-[#17221b]">
      <section className="relative isolate overflow-hidden bg-[#123c27]">
        <div className="absolute inset-0 -z-10">
          <img
            src={imagemPrincipal}
            alt="Asinino em ambiente rural"
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102e20]/95 via-[#123c27]/80 to-[#123c27]/35" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <Link
              href="/pecuaria/asininos"
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm text-white transition hover:bg-white/10"
            >
              <span aria-hidden="true">←</span>
              Voltar aos asininos
            </Link>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-green-300">
              AGROINOVA ANGOLA · PRODUÇÃO ANIMAL
            </p>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Reprodução dos asininos
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-green-50 sm:text-lg">
              Conhecimentos e boas práticas para a seleção dos reprodutores,
              acompanhamento da gestação, assistência ao parto e criação dos
              poldros em sistemas rurais angolanos.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#conteudos"
                className="rounded-xl bg-green-500 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-green-400"
              >
                Explorar conteúdos
              </a>
              <a
                href="#cuidados"
                className="rounded-xl border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white/10"
              >
                Cuidados essenciais
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-white shadow-2xl backdrop-blur-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-200">
              Objetivo do maneio
            </p>
            <h2 className="mt-3 text-2xl font-bold">
              Reprodução responsável e saudável
            </h2>
            <p className="mt-4 leading-7 text-green-50">
              Um programa reprodutivo eficaz combina observação diária,
              alimentação adequada, prevenção sanitária, registos fiáveis e
              assistência veterinária.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-black/15 p-4">
                <p className="text-2xl font-extrabold">≈ 12</p>
                <p className="mt-1 text-sm text-green-100">
                  meses de gestação, em geral
                </p>
              </div>
              <div className="rounded-2xl bg-black/15 p-4">
                <p className="text-2xl font-extrabold">24 h</p>
                <p className="mt-1 text-sm text-green-100">
                  vigilância reforçada no período do parto
                </p>
              </div>
            </div>
            <p className="mt-4 text-xs leading-5 text-green-100/80">
              Valores indicativos. A duração da gestação varia. A vigilância
              não substitui a avaliação veterinária individual.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-green-700">
            Maneio reprodutivo
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Do acasalamento ao nascimento
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            A reprodução dos asininos exige acompanhamento contínuo. Nas
            explorações familiares, a observação dos animais e o registo das
            ocorrências ajudam a identificar problemas cedo, planear os
            acasalamentos e proteger a saúde das fêmeas e das crias.
          </p>
        </div>

        <div
          id="conteudos"
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {temas.map((tema, index) => (
            <article
              key={tema.numero}
              className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-lg font-extrabold text-green-800">
                  {tema.numero}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  Maneio técnico
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold transition group-hover:text-green-800">
                {tema.titulo}
              </h3>
              <p className="mt-3 flex-1 leading-7 text-slate-600">
                {tema.resumo}
              </p>

              <button
                type="button"
                onClick={() =>
                  setTemaAtivo(temaAtivo === index ? null : index)
                }
                aria-expanded={temaAtivo === index}
                className="mt-6 flex w-full items-center justify-between rounded-xl bg-green-50 px-4 py-3 text-left font-bold text-green-800 transition hover:bg-green-100"
              >
                {temaAtivo === index ? "Fechar conteúdo" : "Consultar orientações"}
                <span aria-hidden="true">
                  {temaAtivo === index ? "−" : "+"}
                </span>
              </button>

              {temaAtivo === index && (
                <div className="mt-4 rounded-2xl border border-green-100 bg-[#f7fbf7] p-4">
                  <ul className="space-y-3">
                    {tema.conteudo.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-slate-700"
                      >
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="cuidados" className="bg-white py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Prevenção e bem-estar
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Quando procurar assistência veterinária?
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              A identificação precoce de alterações pode proteger a vida da
              jumenta e do poldro. Durante a gestação e o parto, não se deve
              administrar medicamentos nem realizar intervenções invasivas sem
              orientação profissional.
            </p>
          </div>

          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-amber-950">
              Sinais que exigem atenção
            </h3>
            <ul className="mt-5 space-y-4">
              {sinaisAlerta.map((sinal) => (
                <li key={sinal} className="flex gap-3 text-sm leading-6 text-amber-950">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-200 font-bold">
                    !
                  </span>
                  {sinal}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-amber-200 pt-4 text-sm leading-6 text-amber-900">
              Em caso de parto difícil, hemorragia ou deterioração súbita,
              contactar imediatamente um médico veterinário.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="rounded-3xl bg-[#123c27] p-7 text-white sm:p-10">
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            Registar para melhorar a reprodução
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-green-50">
            Cada exploração deve procurar manter fichas simples com a
            identificação dos animais, os acasalamentos, as gestações, os
            partos e a saúde das crias. Estes registos facilitam decisões mais
            seguras e um melhor acompanhamento do efetivo.
          </p>
          <div className="mt-7">
            <Link
              href="/pecuaria/asininos"
              className="inline-flex rounded-xl bg-white px-6 py-3 font-bold text-green-900 transition hover:bg-green-100"
            >
              Voltar à área dos asininos
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-[#f5f7f6] px-5 py-6 text-center text-sm leading-6 text-slate-500">
        AGROINOVA ANGOLA · Conhecimento, Tecnologia e Inovação ao Serviço do
        Campo Angolano.
        <br />
        Conteúdo de orientação geral. A avaliação clínica deve ser realizada
        por um profissional veterinário.
      </footer>
    </main>
  );
}
