"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type FonteAgua = {
  id: string;
  titulo: string;
  descricao: string;
  riscos: string[];
};

const fontes: FonteAgua[] = [
  {
    id: "rede",
    titulo: "Água da rede",
    descricao:
      "Quando disponível, pode ser uma fonte prática, mas deve continuar a ser monitorizada porque problemas na rede, armazenamento ou distribuição podem comprometer a qualidade.",
    riscos: [
      "Interrupções de fornecimento",
      "Contaminação no armazenamento",
      "Tubagens ou reservatórios sujos",
    ],
  },
  {
    id: "poco",
    titulo: "Água de poço",
    descricao:
      "Pode ser utilizada em determinadas explorações, desde que a qualidade seja conhecida e acompanhada. A aparência da água, por si só, não garante segurança.",
    riscos: [
      "Contaminação subterrânea",
      "Qualidade microbiológica inadequada",
      "Alterações de composição",
    ],
  },
  {
    id: "furo",
    titulo: "Água de furo",
    descricao:
      "É uma alternativa importante em muitas zonas rurais, mas a qualidade deve ser avaliada de acordo com a origem, profundidade, proteção da captação e características locais.",
    riscos: [
      "Contaminação da captação",
      "Minerais em concentrações inadequadas",
      "Problemas no sistema de armazenamento",
    ],
  },
  {
    id: "superficial",
    titulo: "Água superficial",
    descricao:
      "Rios, lagoas, represas e outras fontes superficiais apresentam maior exposição ao ambiente e exigem atenção especial quanto à contaminação.",
    riscos: [
      "Fezes de animais",
      "Sedimentos",
      "Microrganismos",
      "Resíduos químicos",
    ],
  },
];

const sinais = [
  "Alteração inesperada da cor",
  "Odor anormal",
  "Presença de partículas ou sedimentos",
  "Biofilme nos recipientes",
  "Acumulação de matéria orgânica",
  "Redução inesperada do consumo",
  "Entupimento frequente dos bebedouros",
  "Diarreia ou alterações nas fezes associadas ao lote",
];

const rotina = [
  "Verificar se existe água disponível para todo o lote.",
  "Observar a limpeza dos bebedouros.",
  "Verificar se há vazamentos.",
  "Eliminar acumulação de alimento e fezes junto aos pontos de água.",
  "Inspecionar reservatórios e tubagens.",
  "Verificar alterações visíveis na água.",
  "Registar problemas e intervenções.",
  "Solicitar análise quando houver suspeita de alteração da qualidade.",
];

const problemas = [
  {
    titulo: "Bebedouro sujo",
    causa:
      "Acumulação de matéria orgânica, restos de alimento, fezes ou biofilme.",
    resposta:
      "Retirar a água contaminada, limpar o equipamento e restabelecer o fornecimento de água em condições adequadas.",
  },
  {
    titulo: "Água com sedimentos",
    causa:
      "Pode estar relacionada com a fonte, reservatório, tubagem ou movimentação de partículas.",
    resposta:
      "Investigar a origem antes de simplesmente continuar a utilizar a água sem avaliação.",
  },
  {
    titulo: "Entupimento dos bebedouros",
    causa:
      "Partículas, biofilme, incrustações ou problemas no sistema de distribuição.",
    resposta:
      "Inspecionar o circuito e estabelecer uma rotina de limpeza e manutenção.",
  },
  {
    titulo: "Consumo reduzido",
    causa:
      "Pode estar relacionado com qualidade da água, temperatura, equipamento, acesso ou estado sanitário.",
    resposta:
      "Investigar água, ambiente, alimentação e saúde do lote antes de assumir uma única causa.",
  },
];

export default function AguaPatosPage() {
  const [fonteAtiva, setFonteAtiva] = useState("rede");

  const fonteSelecionada = useMemo(
    () => fontes.find((fonte) => fonte.id === fonteAtiva) ?? fontes[0],
    [fonteAtiva]
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <section className="overflow-hidden bg-gradient-to-br from-cyan-950 via-emerald-950 to-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              Pecuária • Patos • Orientações técnicas
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
              Água
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-cyan-50 md:text-xl">
              Qualidade, disponibilidade, armazenamento, distribuição,
              limpeza dos bebedouros e controlo da água utilizada na criação
              de patos.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Qualidade",
                "Disponibilidade",
                "Higiene",
                "Monitorização",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-cyan-300/20 bg-white/10 p-4 text-center font-bold text-white backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.09)]">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-700">
              Princípio fundamental
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Água limpa e disponível é parte essencial do maneio
            </h2>

            <div className="mt-6 space-y-5 text-justify leading-8 text-slate-700">
              <p>
                A água participa diretamente em funções fisiológicas essenciais
                e influencia o consumo de alimento, o crescimento, a produção,
                a termorregulação e o estado geral dos animais.
              </p>

              <p>
                Na exploração de patos, não basta perguntar se existe água.
                Também é necessário saber de onde vem, como é armazenada, como
                chega aos animais, se os equipamentos estão limpos e se a
                qualidade permanece adequada ao longo do tempo.
              </p>

              <p>
                Uma água aparentemente transparente pode apresentar problemas
                que não são identificados apenas pela observação. Por isso,
                quando houver suspeita ou quando a fonte apresentar risco, a
                avaliação da qualidade deve ser realizada através de métodos
                apropriados.
              </p>
            </div>
          </article>

          <aside className="rounded-3xl border border-cyan-200 bg-cyan-50 p-8 shadow-[0_18px_50px_rgba(8,145,178,0.12)]">
            <h2 className="text-2xl font-black text-cyan-950">
              Quatro perguntas
            </h2>

            <div className="mt-6 space-y-3">
              {[
                "A água está disponível?",
                "A fonte é protegida?",
                "Os equipamentos estão limpos?",
                "A qualidade é conhecida?",
              ].map((pergunta) => (
                <div
                  key={pergunta}
                  className="rounded-2xl border border-cyan-100 bg-white p-4 font-semibold text-slate-700"
                >
                  {pergunta}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* QUALIDADE */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-700">
              Qualidade da água
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              O que significa água de boa qualidade?
            </h2>

            <p className="mt-5 text-justify leading-8 text-slate-600">
              A avaliação da água para animais deve considerar características
              físicas, químicas e microbiológicas. A aparência é importante
              como indicador inicial, mas não substitui uma análise adequada
              quando existe risco ou dúvida.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
              <h3 className="text-xl font-black">Aspeto físico</h3>

              <p className="mt-4 text-justify leading-8 text-slate-600">
                Observar cor, partículas, sedimentos, turbidez e alterações
                visíveis.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
              <h3 className="text-xl font-black">Características químicas</h3>

              <p className="mt-4 text-justify leading-8 text-slate-600">
                Determinados minerais, sais e outros componentes podem
                influenciar a qualidade da água e devem ser avaliados conforme
                a origem e o contexto da exploração.
              </p>
            </article>

            <article className="rounded-3xl border border-cyan-200 bg-cyan-50 p-7 shadow-sm">
              <h3 className="text-xl font-black text-cyan-950">
                Qualidade microbiológica
              </h3>

              <p className="mt-4 text-justify leading-8 text-slate-600">
                A presença de microrganismos potencialmente problemáticos não
                pode ser determinada simplesmente olhando para a água. Quando
                necessário, deve ser realizada análise laboratorial.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-700">
            Fonte de água
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Nem todas as fontes apresentam o mesmo risco
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            A origem da água deve fazer parte da avaliação da exploração.
            Selecione uma fonte para consultar os principais pontos de atenção.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {fontes.map((fonte) => (
            <button
              key={fonte.id}
              type="button"
              onClick={() => setFonteAtiva(fonte.id)}
              className={`rounded-2xl border p-6 text-left transition ${
                fonteAtiva === fonte.id
                  ? "border-cyan-700 bg-cyan-950 text-white shadow-[0_18px_45px_rgba(8,47,73,0.25)] -translate-y-1"
                  : "border-slate-200 bg-white hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
              }`}
            >
              <h3 className="font-black">{fonte.titulo}</h3>

              <p
                className={`mt-3 text-sm leading-7 ${
                  fonteAtiva === fonte.id
                    ? "text-cyan-50"
                    : "text-slate-600"
                }`}
              >
                {fonte.descricao}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-cyan-200 bg-cyan-50 p-8">
          <h3 className="text-2xl font-black text-cyan-950">
            {fonteSelecionada.titulo}
          </h3>

          <p className="mt-4 max-w-4xl text-justify leading-8 text-slate-700">
            {fonteSelecionada.descricao}
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {fonteSelecionada.riscos.map((risco) => (
              <div
                key={risco}
                className="rounded-2xl border border-cyan-100 bg-white p-5 font-semibold text-slate-700"
              >
                {risco}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARMAZENAMENTO */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">
                Armazenamento
              </p>

              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                A água pode contaminar-se depois de sair da fonte
              </h2>

              <p className="mt-5 text-justify leading-8 text-slate-300">
                Um reservatório mal protegido pode introduzir contaminação numa
                água que inicialmente apresentava boa qualidade. Por isso,
                reservatórios, caixas, tubagens e pontos de distribuição fazem
                parte do sistema de água.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                "Manter reservatórios protegidos.",
                "Impedir entrada de animais e sujidade.",
                "Evitar acumulação de sedimentos.",
                "Inspecionar tampas e estruturas.",
                "Estabelecer rotina de manutenção.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="font-semibold text-slate-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BEBEDOUROS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-700">
            Bebedouros
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            O ponto de contacto entre a água e o pato
          </h2>

          <p className="mt-5 text-justify leading-8 text-slate-600">
            Mesmo quando a fonte e o reservatório apresentam boa qualidade,
            os bebedouros podem acumular matéria orgânica e tornar-se pontos
            importantes de contaminação.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              titulo: "Limpeza",
              texto:
                "Estabelecer uma rotina de limpeza compatível com o sistema de criação.",
            },
            {
              titulo: "Localização",
              texto:
                "Evitar colocação em zonas onde a contaminação por fezes ou cama seja excessiva.",
            },
            {
              titulo: "Vazamentos",
              texto:
                "Corrigir fugas que aumentem a humidade e prejudiquem a cama.",
            },
            {
              titulo: "Inspeção",
              texto:
                "Verificar diariamente se todos os pontos estão funcionais.",
            },
          ].map((item) => (
            <article
              key={item.titulo}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_16px_45px_rgba(15,23,42,0.08)] transition hover:-translate-y-1"
            >
              <h3 className="text-xl font-black">{item.titulo}</h3>

              <p className="mt-4 text-justify leading-8 text-slate-600">
                {item.texto}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CONSUMO */}
      <section className="bg-emerald-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-300">
              Consumo de água
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Observar o consumo ajuda a detectar alterações
            </h2>

            <p className="mt-5 text-justify leading-8 text-emerald-50/80">
              O consumo de água não deve ser interpretado através de um único
              valor universal. Ele varia conforme fatores como idade, tamanho
              dos animais, alimentação, temperatura ambiente, sistema de
              produção e condições de alojamento.
            </p>

            <p className="mt-5 text-justify leading-8 text-emerald-50/80">
              Por isso, é mais útil conhecer o padrão normal da própria
              exploração e investigar mudanças inesperadas. Uma alteração
              repentina pode estar relacionada com a água, o ambiente, a
              alimentação, o equipamento ou a saúde do lote.
            </p>
          </div>
        </div>
      </section>

      {/* SINAIS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-700">
              Inspeção
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Sinais que merecem investigação
            </h2>

            <div className="mt-7 space-y-3">
              {sinais.map((sinal) => (
                <div
                  key={sinal}
                  className="rounded-xl border border-slate-100 bg-slate-50 p-4 font-semibold leading-7 text-slate-700"
                >
                  {sinal}
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-amber-200 bg-amber-50 p-8">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
              Atenção
            </p>

            <h2 className="mt-3 text-3xl font-black text-amber-950">
              Não confundir correlação com causa
            </h2>

            <p className="mt-6 text-justify leading-8 text-slate-700">
              Se os patos apresentarem alterações depois de uma mudança na
              água, isso é uma razão para investigar a água, mas não significa
              automaticamente que ela seja a causa.
            </p>

            <p className="mt-5 text-justify leading-8 text-slate-700">
              O diagnóstico deve considerar simultaneamente alimentação,
              instalações, temperatura, manejo, biossegurança e estado
              sanitário dos animais.
            </p>
          </article>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-700">
              Problemas frequentes
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Diagnosticar antes de corrigir
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {problemas.map((problema) => (
              <article
                key={problema.titulo}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm"
              >
                <h3 className="text-xl font-black">{problema.titulo}</h3>

                <div className="mt-5 rounded-2xl bg-white p-5">
                  <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                    Possíveis causas
                  </p>

                  <p className="mt-2 leading-7 text-slate-700">
                    {problema.causa}
                  </p>
                </div>

                <div className="mt-4 rounded-2xl border border-cyan-100 bg-cyan-50 p-5">
                  <p className="text-sm font-bold uppercase tracking-wide text-cyan-700">
                    Abordagem
                  </p>

                  <p className="mt-2 leading-7 text-slate-700">
                    {problema.resposta}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ÁGUA E CALOR EM ANGOLA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-8 shadow-[0_20px_60px_rgba(16,185,129,0.10)] md:p-10">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            Condições de Angola
          </p>

          <h2 className="mt-3 text-3xl font-black text-emerald-950">
            Água e gestão do calor
          </h2>

          <div className="mt-6 space-y-5 text-justify leading-8 text-slate-700">
            <p>
              Em períodos de temperaturas elevadas, a gestão da água torna-se
              ainda mais importante. O produtor deve assegurar que os animais
              tenham acesso efetivo à água e que o sistema de distribuição
              continue funcional durante os períodos de maior procura.
            </p>

            <p>
              Reservatórios e tubagens expostos ao ambiente também devem ser
              avaliados quanto à proteção, limpeza e manutenção. O sistema deve
              ser dimensionado de acordo com a realidade da exploração e não
              apenas com a quantidade média de água disponível.
            </p>

            <p>
              Em zonas onde o abastecimento é irregular, é importante prever
              uma estratégia de reserva de água e estabelecer procedimentos
              para situações de interrupção.
            </p>
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">
              Checklist diário
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Controlo diário da água
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {rotina.map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-sm font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <p className="mt-3 leading-7 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXERCÍCIO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_22px_60px_rgba(15,23,42,0.09)] md:p-10">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-700">
            Exercício para estudantes
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Avaliação do sistema de água de uma exploração
          </h2>

          <p className="mt-5 max-w-4xl text-justify leading-8 text-slate-600">
            Uma exploração de patos utiliza água de um reservatório. O produtor
            relata que, em determinados dias, os animais bebem menos e que os
            bebedouros apresentam acumulação de matéria orgânica.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Quais componentes do sistema devem ser inspecionados?",
              "Que fatores podem explicar a redução do consumo?",
              "Que informações devem ser registadas?",
              "Quando seria recomendável solicitar análise da água?",
              "Que medidas imediatas podem reduzir o risco de contaminação?",
              "Como relacionar este problema com a biossegurança?",
            ].map((pergunta, index) => (
              <div
                key={pergunta}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <p className="font-bold leading-7 text-slate-800">
                  {index + 1}. {pergunta}
                </p>
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* NAVEGAÇÃO FINAL */}
      <section className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <Link
            href="/pecuaria/patos/orientacoes/biosseguranca"
            className="rounded-2xl border border-slate-300 bg-white px-6 py-4 text-center font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-700"
          >
            Voltar: Biossegurança
          </Link>

          <Link
            href="/pecuaria/patos"
            className="rounded-2xl bg-emerald-800 px-6 py-4 text-center font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-900"
          >
            Voltar para Patos
          </Link>
        </div>
      </section>
    </main>
  );
}