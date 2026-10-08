"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Fase = {
  id: string;
  titulo: string;
  objetivo: string;
  pontos: string[];
};

const fases: Fase[] = [
  {
    id: "patinhos",
    titulo: "Patinhos e fase inicial",
    objetivo:
      "Garantir sobrevivência, adaptação, acesso à água e alimento e desenvolvimento uniforme.",
    pontos: [
      "Observar os animais várias vezes durante o dia.",
      "Verificar se todos conseguem alcançar alimento e água.",
      "Evitar correntes de ar diretamente sobre os patinhos.",
      "Manter o piso seco e limpo.",
      "Separar animais fracos ou doentes para avaliação.",
      "Evitar misturar animais de idades muito diferentes.",
    ],
  },
  {
    id: "crescimento",
    titulo: "Crescimento",
    objetivo:
      "Manter crescimento uniforme, reduzir competição e preparar os animais para a finalidade produtiva.",
    pontos: [
      "Ajustar o espaço disponível ao tamanho e à idade do lote.",
      "Monitorizar consumo de alimento e água.",
      "Observar comportamento e uniformidade corporal.",
      "Manter instalações ventiladas sem criar correntes de ar excessivas.",
      "Controlar a humidade da cama e a acumulação de fezes.",
      "Registar mortalidade e animais retirados do lote.",
    ],
  },
  {
    id: "engorda",
    titulo: "Produção de carne",
    objetivo:
      "Maximizar crescimento saudável e eficiência alimentar sem comprometer o bem-estar.",
    pontos: [
      "Usar alimentação compatível com a fase produtiva.",
      "Evitar desperdício de ração.",
      "Garantir água limpa permanentemente disponível.",
      "Acompanhar peso e uniformidade do lote.",
      "Controlar o calor, principalmente nas épocas mais quentes.",
      "Planear o transporte e a comercialização antes da saída do lote.",
    ],
  },
  {
    id: "postura",
    titulo: "Produção de ovos",
    objetivo:
      "Manter as fêmeas em boas condições corporais e reduzir perdas de ovos.",
    pontos: [
      "Manter rotina regular de alimentação e água.",
      "Disponibilizar locais adequados para postura.",
      "Recolher os ovos regularmente.",
      "Separar ovos destinados à incubação dos ovos para consumo.",
      "Registar produção e alterações no número de ovos.",
      "Investigar rapidamente quedas anormais de postura.",
    ],
  },
  {
    id: "reprodutores",
    titulo: "Reprodutores",
    objetivo:
      "Preservar fertilidade, condição corporal e qualidade dos ovos destinados à reprodução.",
    pontos: [
      "Selecionar animais saudáveis e com boa conformação.",
      "Evitar utilizar reprodutores com problemas sanitários ou físicos.",
      "Monitorizar fertilidade dos ovos.",
      "Evitar excesso de machos ou competição excessiva.",
      "Controlar condição corporal.",
      "Manter registos individuais ou por lote quando possível.",
    ],
  },
];

const indicadores = [
  {
    titulo: "Mortalidade",
    formula: "Mortalidade (%) = número de mortes ÷ número inicial de aves × 100",
    explicacao:
      "Permite acompanhar perdas do lote. Um aumento inesperado exige investigação da alimentação, água, ambiente, manejo e sanidade.",
  },
  {
    titulo: "Conversão alimentar",
    formula:
      "Conversão alimentar = quantidade de alimento consumido ÷ ganho de peso",
    explicacao:
      "Ajuda a avaliar a eficiência da alimentação, sobretudo em sistemas destinados à produção de carne.",
  },
  {
    titulo: "Viabilidade",
    formula:
      "Viabilidade (%) = animais vivos no final ÷ animais alojados inicialmente × 100",
    explicacao:
      "Mostra a proporção do lote que permaneceu viva durante determinado período.",
  },
  {
    titulo: "Uniformidade",
    formula:
      "Avaliar a distribuição dos pesos e identificar animais muito abaixo ou acima da média.",
    explicacao:
      "Um lote muito desigual pode indicar competição por alimento, problemas sanitários, diferenças de idade ou falhas de manejo.",
  },
];

export default function ManeioPatosPage() {
  const [faseAtiva, setFaseAtiva] = useState("patinhos");

  const faseSelecionada = useMemo(
    () => fases.find((fase) => fase.id === faseAtiva) ?? fases[0],
    [faseAtiva]
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              Pecuária • Patos • Orientações técnicas
            </p>

            <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
              Maneio de Patos
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-emerald-50 md:text-xl">
              O maneio reúne as práticas diárias utilizadas para manter os
              patos saudáveis, reduzir perdas, melhorar o crescimento e
              organizar a produção de carne, ovos ou reprodutores.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-emerald-400/30 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
                Maneio diário
              </span>
              <span className="rounded-full border border-emerald-400/30 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
                Água e alimentação
              </span>
              <span className="rounded-full border border-emerald-400/30 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
                Ambiente
              </span>
              <span className="rounded-full border border-emerald-400/30 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
                Registos produtivos
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.10)]">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              O que significa manejar bem?
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Maneio não é apenas alimentar os animais
            </h2>

            <div className="mt-6 space-y-5 text-justify text-[16px] leading-8 text-slate-700">
              <p>
                O maneio de patos envolve um conjunto de decisões e tarefas
                realizadas diariamente na exploração. Inclui alimentação,
                fornecimento de água, limpeza, ventilação, controlo do ambiente,
                observação dos animais, organização dos lotes, prevenção de
                doenças, registo de informações e preparação para venda ou
                reprodução.
              </p>

              <p>
                Um produtor pode utilizar uma boa ração e, mesmo assim, obter
                resultados fracos se os patos não tiverem acesso adequado à
                água, se houver competição excessiva pelo alimento, se a cama
                permanecer húmida ou se o ambiente estiver demasiado quente.
              </p>

              <p>
                Por isso, o maneio deve ser entendido como um sistema. O
                resultado final depende da interação entre genética, nutrição,
                água, ambiente, instalações, biossegurança, sanidade e
                capacidade de observação do tratador.
              </p>
            </div>
          </article>

          <aside className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 shadow-[0_18px_50px_rgba(16,185,129,0.12)]">
            <h2 className="text-2xl font-black text-emerald-950">
              Regra fundamental
            </h2>

            <p className="mt-5 text-justify leading-8 text-emerald-950/80">
              O tratador deve conhecer o comportamento normal do lote. Quando
              se conhece o normal, torna-se muito mais fácil perceber alterações
              de consumo, atividade, fezes, postura, respiração ou mortalidade.
            </p>

            <div className="mt-7 rounded-2xl border border-emerald-200 bg-white p-5">
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                Observação diária
              </p>

              <p className="mt-2 font-semibold leading-7 text-slate-800">
                Observar primeiro, registar depois e intervir com base em
                evidências.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* ORGANIZAÇÃO POR FASE */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              Maneio por fase
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              O manejo muda conforme a finalidade e a idade
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Não existe uma única rotina válida para todos os patos. Patinhos,
              animais em crescimento, aves de engorda, poedeiras e reprodutores
              apresentam necessidades diferentes.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {fases.map((fase) => (
              <button
                key={fase.id}
                type="button"
                onClick={() => setFaseAtiva(fase.id)}
                className={`rounded-2xl border p-5 text-left transition-all duration-200 ${
                  faseAtiva === fase.id
                    ? "border-emerald-600 bg-emerald-900 text-white shadow-[0_18px_40px_rgba(6,78,59,0.28)] -translate-y-1"
                    : "border-slate-200 bg-slate-50 text-slate-800 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
                }`}
              >
                <h3 className="font-black">{fase.titulo}</h3>

                <p
                  className={`mt-3 text-sm leading-6 ${
                    faseAtiva === fase.id
                      ? "text-emerald-50"
                      : "text-slate-600"
                  }`}
                >
                  {fase.objetivo}
                </p>
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-emerald-200 bg-emerald-50 p-8 shadow-[0_18px_50px_rgba(16,185,129,0.10)]">
            <h3 className="text-2xl font-black text-emerald-950">
              {faseSelecionada.titulo}
            </h3>

            <p className="mt-3 leading-8 text-emerald-950/80">
              {faseSelecionada.objetivo}
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {faseSelecionada.pontos.map((ponto) => (
                <div
                  key={ponto}
                  className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm"
                >
                  <p className="font-medium leading-7 text-slate-700">
                    {ponto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROTINA DIÁRIA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            Rotina diária
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            O que o tratador deve verificar todos os dias?
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            A rotina deve ser organizada para que nenhum ponto essencial seja
            esquecido. A observação dos animais deve acontecer antes de realizar
            alterações importantes no sistema.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              titulo: "1. Observar o lote",
              texto:
                "Verificar atividade, distribuição dos animais, postura corporal, resposta à presença do tratador e existência de animais isolados.",
            },
            {
              titulo: "2. Verificar a água",
              texto:
                "Confirmar disponibilidade, limpeza dos recipientes e funcionamento dos bebedouros. A água deve ser tratada como um dos principais pontos de controlo.",
            },
            {
              titulo: "3. Verificar alimento",
              texto:
                "Observar consumo, desperdício, competição e estado do alimento. Ração húmida ou deteriorada deve ser retirada.",
            },
            {
              titulo: "4. Verificar instalações",
              texto:
                "Inspecionar piso, cama, cercas, portas, cobertura, drenagem e possíveis pontos de entrada de animais estranhos.",
            },
            {
              titulo: "5. Verificar fezes e cama",
              texto:
                "Alterações marcantes nas fezes e aumento da humidade da cama podem indicar problemas de água, alimentação, ambiente ou saúde.",
            },
            {
              titulo: "6. Registar alterações",
              texto:
                "Anotar mortes, animais doentes, consumo anormal, queda de postura, problemas de equipamentos e outras ocorrências.",
            },
          ].map((item) => (
            <article
              key={item.titulo}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_16px_45px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(15,23,42,0.13)]"
            >
              <h3 className="text-xl font-black text-slate-900">
                {item.titulo}
              </h3>

              <p className="mt-4 text-justify leading-8 text-slate-600">
                {item.texto}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ÁGUA */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-300">
              Água
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              A água faz parte do maneio, não é um detalhe
            </h2>

            <p className="mt-5 text-justify leading-8 text-slate-300">
              O fornecimento inadequado de água pode comprometer o consumo de
              alimento, o crescimento, a termorregulação e o desempenho do lote.
              Além da quantidade disponível, é necessário prestar atenção à
              qualidade e à higiene dos equipamentos.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Disponibilidade contínua",
              "Recipientes limpos",
              "Proteção contra contaminação",
              "Inspeção dos bebedouros",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <h3 className="font-black text-white">{item}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Deve fazer parte da inspeção diária da exploração.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALOR */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] border border-amber-200 bg-amber-50 p-8 shadow-[0_20px_60px_rgba(120,53,15,0.10)] md:p-10">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
            Condições de Angola
          </p>

          <h2 className="mt-3 text-3xl font-black text-amber-950">
            Calor, ventilação e disponibilidade de água
          </h2>

          <div className="mt-6 space-y-5 text-justify leading-8 text-amber-950/80">
            <p>
              Em diferentes regiões de Angola, as temperaturas elevadas podem
              tornar o controlo ambiental uma parte crítica do maneio. O
              produtor deve observar se os animais apresentam comportamento
              compatível com desconforto térmico, principalmente durante os
              períodos mais quentes do dia.
            </p>

            <p>
              A solução não deve ser simplesmente aumentar a ventilação sem
              considerar a idade dos animais. É necessário equilibrar circulação
              de ar, proteção contra chuva, exposição solar, humidade e
              disponibilidade de água.
            </p>

            <p>
              A exploração deve também possuir um plano para períodos de
              interrupção do abastecimento de água. A dependência de uma única
              fonte sem alternativa aumenta o risco operacional.
            </p>
          </div>
        </div>
      </section>

      {/* DENSIDADE */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h2 className="text-2xl font-black">
                Espaço e densidade do lote
              </h2>

              <p className="mt-5 text-justify leading-8 text-slate-600">
                A quantidade adequada de aves por unidade de área depende da
                idade, tamanho dos animais, sistema de criação, ventilação,
                qualidade da cama, clima, disponibilidade de equipamentos e
                finalidade produtiva.
              </p>

              <p className="mt-5 text-justify leading-8 text-slate-600">
                Por isso, não se deve aplicar automaticamente um único número
                de aves por metro quadrado a todas as explorações. O indicador
                mais importante é avaliar se o espaço disponível permite acesso
                adequado à água e alimento e mantém condições ambientais
                aceitáveis.
              </p>
            </article>

            <article className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 shadow-sm">
              <h2 className="text-2xl font-black text-emerald-950">
                Sinais de excesso de lotação
              </h2>

              <ul className="mt-5 space-y-4 text-slate-700">
                <li className="rounded-xl bg-white p-4">
                  Maior competição pelos equipamentos.
                </li>
                <li className="rounded-xl bg-white p-4">
                  Aumento da humidade da cama.
                </li>
                <li className="rounded-xl bg-white p-4">
                  Dificuldade de movimentação dos animais.
                </li>
                <li className="rounded-xl bg-white p-4">
                  Maior concentração de fezes em determinadas zonas.
                </li>
                <li className="rounded-xl bg-white p-4">
                  Piora da ventilação e da qualidade do ambiente.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* MANEIO E COMPORTAMENTO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            Comportamento
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            O comportamento é uma ferramenta de diagnóstico
          </h2>

          <p className="mt-5 text-justify leading-8 text-slate-600">
            Antes mesmo de qualquer exame laboratorial, a observação do
            comportamento pode alertar o produtor para uma alteração. O
            importante é comparar o comportamento atual com aquilo que é normal
            para aquele lote.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_55px_rgba(15,23,42,0.08)]">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="border-b border-slate-200 p-7 md:border-b-0 md:border-r">
              <h3 className="font-black text-emerald-800">Comportamento normal</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Alimentação, deslocação, descanso e interação com o ambiente de
                acordo com a fase produtiva.
              </p>
            </div>

            <div className="border-b border-slate-200 p-7 md:border-b-0 md:border-r">
              <h3 className="font-black text-amber-700">Sinal de alerta</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Isolamento, redução de atividade, alterações de consumo,
                dificuldade respiratória ou mudanças marcantes nas fezes.
              </p>
            </div>

            <div className="p-7">
              <h3 className="font-black text-red-700">Intervenção</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Confirmar o problema, separar animais suspeitos quando indicado,
                registar a ocorrência e procurar orientação veterinária.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MANUSEIO */}
      <section className="bg-emerald-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-300">
              Captura e transporte
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Manusear os patos sem causar stress desnecessário
            </h2>

            <p className="mt-5 text-justify leading-8 text-emerald-50/80">
              A captura deve ser planeada. Movimentos bruscos, perseguição
              excessiva e manipulação inadequada podem provocar stress,
              lesões e mortalidade. O trabalho deve ser realizado por pessoas
              treinadas e com equipamentos apropriados.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Preparar o percurso antes da captura.",
              "Reduzir movimentos bruscos.",
              "Evitar compressão excessiva dos animais.",
              "Transportar apenas animais em condições adequadas.",
            ].map((texto) => (
              <div
                key={texto}
                className="rounded-2xl border border-emerald-700 bg-emerald-900/60 p-6"
              >
                <p className="leading-7 text-emerald-50">{texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDICADORES */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            Gestão técnica
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            O que medir numa criação de patos?
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Uma exploração melhora quando transforma acontecimentos diários em
            informação. Os indicadores devem ser calculados com base nos
            registos reais da exploração.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {indicadores.map((indicador) => (
            <article
              key={indicador.titulo}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_16px_45px_rgba(15,23,42,0.08)]"
            >
              <h3 className="text-xl font-black">{indicador.titulo}</h3>

              <div className="mt-5 rounded-2xl bg-slate-900 p-5">
                <p className="font-mono text-sm leading-7 text-emerald-300">
                  {indicador.formula}
                </p>
              </div>

              <p className="mt-5 text-justify leading-8 text-slate-600">
                {indicador.explicacao}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* REGISTOS */}
      <section className="bg-slate-100 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-black">
                Ficha mínima de acompanhamento
              </h2>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[600px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="p-3 font-black">Registo</th>
                      <th className="p-3 font-black">Periodicidade</th>
                      <th className="p-3 font-black">Objetivo</th>
                    </tr>
                  </thead>

                  <tbody>
                    {[
                      ["Número de animais", "Entrada/saída", "Controlar o tamanho do lote"],
                      ["Mortes", "Diária", "Calcular mortalidade"],
                      ["Alimento", "Diária", "Controlar consumo"],
                      ["Água", "Diária", "Controlar disponibilidade"],
                      ["Peso", "Periódica", "Avaliar crescimento"],
                      ["Produção de ovos", "Diária", "Acompanhar postura"],
                      ["Tratamentos", "Quando ocorrer", "Histórico sanitário"],
                    ].map((linha) => (
                      <tr
                        key={linha[0]}
                        className="border-b border-slate-100"
                      >
                        <td className="p-3 font-semibold">{linha[0]}</td>
                        <td className="p-3 text-slate-600">{linha[1]}</td>
                        <td className="p-3 text-slate-600">{linha[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>

            <article className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8">
              <h2 className="text-2xl font-black text-emerald-950">
                Exemplo de exercício para estudantes
              </h2>

              <p className="mt-5 text-justify leading-8 text-slate-700">
                Imagine uma exploração que iniciou um lote com determinado
                número de patos. Durante o período de produção, o estudante
                recebe os registos de mortes, consumo de alimento, pesos e
                animais vendidos.
              </p>

              <p className="mt-5 text-justify leading-8 text-slate-700">
                O objetivo é calcular mortalidade, viabilidade, ganho de peso
                e conversão alimentar e, posteriormente, interpretar os
                resultados para identificar possíveis problemas de maneio.
              </p>

              <div className="mt-6 rounded-2xl border border-emerald-200 bg-white p-5">
                <p className="font-bold text-emerald-800">
                  Questão técnica
                </p>

                <p className="mt-2 leading-7 text-slate-700">
                  Se a conversão alimentar piorar enquanto o consumo de alimento
                  aumenta, quais fatores de maneio devem ser investigados antes
                  de concluir que o problema está exclusivamente na ração?
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] border border-emerald-200 bg-white p-8 shadow-[0_25px_70px_rgba(15,23,42,0.10)] md:p-10">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            Checklist do produtor
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Rotina rápida de verificação
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Os patos estão ativos?",
              "Existe água disponível?",
              "A água está limpa?",
              "O alimento está em boas condições?",
              "Existe desperdício excessivo?",
              "A cama está seca?",
              "Há animais isolados?",
              "Existe mortalidade anormal?",
              "A ventilação é adequada?",
              "Há sinais de stress térmico?",
              "As instalações estão seguras?",
              "Os acontecimentos foram registados?",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <p className="font-semibold leading-7 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <Link
            href="/pecuaria/patos/orientacoes/reproducao"
            className="rounded-2xl border border-slate-300 bg-white px-6 py-4 text-center font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-700"
          >
            Voltar: Reprodução
          </Link>

          <Link
            href="/pecuaria/patos/orientacoes/biosseguranca"
            className="rounded-2xl bg-emerald-800 px-6 py-4 text-center font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-900"
          >
            Próxima: Biossegurança
          </Link>
        </div>
      </section>
    </main>
  );
}