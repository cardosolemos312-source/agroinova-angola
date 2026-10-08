
"use client";

import Link from "next/link";
import { useState } from "react";

type Doenca = {
  nome: string;
  grupo: string;
  descricao: string;
  prevencao: string;
};

const doencas: Doenca[] = [
  {
    nome: "Enterotoxemia",
    grupo: "Bacteriana / toxémica",
    descricao:
      "Doença associada à proliferação de Clostridium perfringens e à produção de toxinas no intestino. Pode ocorrer especialmente quando há alterações bruscas da alimentação e elevada disponibilidade de nutrientes.",
    prevencao:
      "Maneio alimentar gradual, higiene, redução de mudanças bruscas na dieta e programa de vacinação definido pelo médico veterinário de acordo com o risco da exploração.",
  },
  {
    nome: "Pododermatite",
    grupo: "Afecção dos cascos",
    descricao:
      "Problemas infecciosos e inflamatórios dos cascos podem provocar claudicação, dor, dificuldade de locomoção e redução da ingestão de alimento.",
    prevencao:
      "Inspecção regular dos cascos, higiene, redução da humidade excessiva, isolamento dos animais afectados e tratamento orientado por profissional.",
  },
  {
    nome: "Pneumonias",
    grupo: "Respiratória",
    descricao:
      "Doenças respiratórias podem estar relacionadas com agentes infecciosos, ventilação deficiente, poeiras, humidade, alterações térmicas e condições de alojamento inadequadas.",
    prevencao:
      "Boa ventilação, redução da sobrelotação, higiene, redução de poeiras, isolamento de animais doentes e diagnóstico adequado.",
  },
  {
    nome: "Coccidiose",
    grupo: "Parasitária",
    descricao:
      "A coccidiose pode afectar sobretudo animais jovens, causando diarreia, perda de desempenho e, em situações graves, desidratação e mortalidade.",
    prevencao:
      "Higiene, redução da contaminação fecal, boa gestão dos alojamentos e diagnóstico quando houver sinais compatíveis.",
  },
  {
    nome: "Helmintoses",
    grupo: "Parasitária",
    descricao:
      "Vermes gastrointestinais podem provocar perda de peso, anemia, diarreia, fraqueza e redução da produtividade. A intensidade do problema depende do ambiente e do sistema de produção.",
    prevencao:
      "Monitorização do efectivo, avaliação de sinais clínicos e exames quando indicados. O uso indiscriminado de antiparasitários favorece resistência.",
  },
  {
    nome: "Ectoparasitoses",
    grupo: "Parasitas externos",
    descricao:
      "Piolhos, ácaros e outros ectoparasitas podem provocar prurido, lesões cutâneas, perda de lã e stress.",
    prevencao:
      "Inspecção da pele e lã, higiene, quarentena de animais introduzidos e tratamento orientado de acordo com o diagnóstico.",
  },
  {
    nome: "Brucelose",
    grupo: "Reprodutiva / bacteriana",
    descricao:
      "Infecções por Brucella podem causar problemas reprodutivos e aborto. A importância sanitária exige atenção especial e participação dos serviços veterinários.",
    prevencao:
      "Vigilância reprodutiva, aquisição responsável de animais, quarentena e diagnóstico oficial quando houver suspeita.",
  },
  {
    nome: "Língua Azul",
    grupo: "Viral / vectorial",
    descricao:
      "Doença viral transmitida por insectos do género Culicoides. Pode provocar febre, lesões e alterações da mucosa oral, edema e problemas locomotores.",
    prevencao:
      "Vigilância, controlo do risco vectorial e vacinação quando recomendada pelas autoridades veterinárias para a região.",
  },
];

const sinais = [
  "Perda repentina de apetite",
  "Febre ou temperatura corporal alterada",
  "Dificuldade respiratória",
  "Tosse ou corrimento nasal",
  "Diarreia persistente",
  "Abdómen distendido",
  "Perda rápida de peso",
  "Palidez das mucosas",
  "Anemia",
  "Claudicação",
  "Feridas ou lesões cutâneas",
  "Coceira intensa",
  "Aborto",
  "Infertilidade ou repetição de cio",
  "Mortalidade acima do habitual",
  "Alterações de comportamento",
];

const provincias = [
  {
    nome: "Namibe",
    foco:
      "A gestão sanitária deve considerar sistemas de criação adaptados a ambientes secos, disponibilidade de água, mobilidade dos animais e pressão parasitária variável.",
  },
  {
    nome: "Cunene",
    foco:
      "A disponibilidade sazonal de água e alimento pode influenciar a condição corporal e a resistência dos animais às doenças.",
  },
  {
    nome: "Huíla",
    foco:
      "A diversidade de sistemas pecuários cria diferentes desafios sanitários, desde pastoreio extensivo até explorações com maior confinamento.",
  },
  {
    nome: "Cuanza Sul",
    foco:
      "A integração entre agricultura e pecuária exige atenção à alimentação, higiene, parasitas e circulação de animais.",
  },
  {
    nome: "Huambo",
    foco:
      "Sistemas familiares e agropecuários mistos beneficiam de programas simples de vigilância, registo e prevenção.",
  },
  {
    nome: "Bié",
    foco:
      "A gestão sanitária deve acompanhar as condições de pastagem, água, movimentação e introdução de novos animais.",
  },
  {
    nome: "Uíge",
    foco:
      "As condições de maior humidade podem aumentar determinados riscos relacionados com parasitas, higiene e doenças podais.",
  },
];

export default function SanidadeOvinosPage() {
  const [grupoSelecionado, setGrupoSelecionado] = useState("Todos");

  const grupos = [
    "Todos",
    ...Array.from(new Set(doencas.map((doenca) => doenca.grupo))),
  ];

  const doencasFiltradas =
    grupoSelecionado === "Todos"
      ? doencas
      : doencas.filter((doenca) => doenca.grupo === grupoSelecionado);

  return (
    <main className="min-h-screen bg-[#f3f6f1] text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#103b27] text-white">
        <div className="absolute inset-0">
          <img
            src="https://www.porcosabayomi.com/assets/img/porco-cuidado.webp"
            alt="Manejo sanitário de animais numa exploração pecuária"
            className="h-full w-full object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#071f14]/95 via-[#103b27]/90 to-[#103b27]/60" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200">
            AGROINOVA ANGOLA • Pecuária • Ovinos
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Sanidade dos Ovinos
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-emerald-50 sm:text-xl">
            Prevenção, vigilância, biossegurança, parasitas, doenças
            infecciosas, vacinação, quarentena, diagnóstico, bem-estar e
            gestão sanitária dos efectivos ovinos em Angola.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Prevenção",
              "Doenças",
              "Parasitas",
              "Vacinação",
              "Biossegurança",
              "Diagnóstico",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-6 py-4 text-sm lg:px-8">
          <Link
            href="/pecuaria"
            className="font-medium text-emerald-800 hover:text-emerald-950"
          >
            Pecuária
          </Link>

          <span className="text-slate-400">/</span>

          <Link
            href="/pecuaria/ovinos/orientacoes"
            className="font-medium text-emerald-800 hover:text-emerald-950"
          >
            Ovinos
          </Link>

          <span className="text-slate-400">/</span>

          <span className="text-slate-600">Sanidade</span>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              Fundamentos
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              O que significa sanidade ovina?
            </h2>

            <div className="mt-6 space-y-5 text-justify text-[17px] leading-8 text-slate-700">
              <p>
                Sanidade ovina é o conjunto de medidas destinadas a prevenir,
                detectar, controlar e, quando possível, eliminar problemas que
                afectam a saúde dos animais e a produtividade da exploração.
                Não se resume ao tratamento de animais doentes.
              </p>

              <p>
                Uma exploração sanitariamente bem gerida procura reduzir a
                probabilidade de entrada de agentes infecciosos, identificar
                rapidamente animais afectados, controlar factores ambientais e
                nutricionais e manter registos que permitam compreender a
                evolução do efectivo.
              </p>

              <p>
                A saúde dos ovinos resulta da interacção entre o animal, os
                agentes causadores de doença e o ambiente. Alimentação
                deficiente, stress, elevada lotação, água contaminada,
                instalações inadequadas e falhas de biossegurança podem
                aumentar o risco de doença.
              </p>

              <p>
                Por isso, sanidade deve ser integrada com alimentação,
                pastoreio, reprodução, instalações, água, maneio e bem-estar.
              </p>
            </div>
          </article>

          <aside className="rounded-3xl bg-[#123d29] p-8 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-200">
              Regra fundamental
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Prevenir custa menos do que perder animais
            </h3>

            <p className="mt-5 text-justify leading-7 text-emerald-50">
              A prevenção reduz mortalidade, gastos com tratamentos, perdas de
              peso, problemas reprodutivos e interrupções da produção.
            </p>

            <div className="mt-7 border-t border-white/15 pt-6">
              <p className="text-sm text-emerald-200">
                Saúde do efectivo
              </p>

              <p className="mt-2 text-lg font-semibold">
                Observação + prevenção + diagnóstico + registo.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* TRIÂNGULO */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              Modelo epidemiológico
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Animal, agente e ambiente
            </h2>

            <p className="mt-5 text-justify text-lg leading-8 text-slate-600">
              A ocorrência de uma doença normalmente não depende apenas da
              presença de um agente. O risco resulta da relação entre o agente,
              a susceptibilidade do animal e as condições ambientais.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                titulo: "Animal",
                texto:
                  "Idade, genética, condição corporal, imunidade, estado reprodutivo, stress e nutrição influenciam a capacidade de resistir à doença.",
              },
              {
                titulo: "Agente",
                texto:
                  "Bactérias, vírus, parasitas, fungos e outros agentes podem causar doenças. A presença do agente não significa automaticamente que todos os animais desenvolverão doença.",
              },
              {
                titulo: "Ambiente",
                texto:
                  "Água, alimentação, humidade, temperatura, instalações, densidade animal, higiene e presença de vectores podem modificar o risco.",
              },
            ].map((item) => (
              <article
                key={item.titulo}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7"
              >
                <h3 className="text-2xl font-bold text-slate-900">
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

      {/* SINAIS CLÍNICOS */}
      <section className="bg-[#edf3ed] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
                Vigilância
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Aprender a reconhecer sinais de doença
              </h2>

              <p className="mt-5 text-justify text-lg leading-8 text-slate-600">
                O produtor ou tratador é frequentemente a primeira pessoa a
                perceber que um animal mudou de comportamento. Uma boa
                observação diária pode permitir intervenção precoce.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {sinais.map((sinal) => (
                <div
                  key={sinal}
                  className="rounded-xl border border-slate-200 bg-white px-5 py-4"
                >
                  <p className="font-medium text-slate-700">{sinal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OBSERVAÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl bg-white p-8 shadow-sm lg:p-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
                Rotina
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Como fazer uma observação sanitária diária?
              </h2>
            </div>

            <div className="space-y-5 text-justify leading-8 text-slate-700">
              <p>
                A observação deve começar pelo comportamento geral do efectivo.
                Animais que permanecem isolados, deixam de acompanhar o grupo,
                apresentam dificuldade de locomoção ou deixam de procurar
                alimento merecem atenção.
              </p>

              <p>
                Em seguida devem ser observados respiração, olhos, nariz,
                boca, pele, lã, fezes, postura, locomoção e condição corporal.
              </p>

              <p>
                As fêmeas devem receber atenção especial durante gestação e
                parto. Abortos, retenção de placenta, mortalidade neonatal e
                repetição de problemas reprodutivos devem ser registados.
              </p>

              <p>
                Qualquer suspeita de doença grave ou contagiosa deve ser
                comunicada ao médico veterinário ou aos serviços veterinários
                competentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DOENÇAS */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              Doenças e problemas sanitários
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Principais problemas que devem fazer parte da vigilância
            </h2>

            <p className="mt-5 text-justify text-lg leading-8 text-slate-600">
              A lista abaixo reúne problemas sanitários importantes na
              ovinicultura e serve como referência de estudo. A presença ou
              importância de cada doença deve ser confirmada para cada região
              por diagnóstico veterinário e dados epidemiológicos locais.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {grupos.map((grupo) => (
              <button
                key={grupo}
                type="button"
                onClick={() => setGrupoSelecionado(grupo)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  grupoSelecionado === grupo
                    ? "border-emerald-800 bg-[#123d29] text-white"
                    : "border-slate-300 bg-white text-slate-700 hover:border-emerald-700 hover:text-emerald-800"
                }`}
              >
                {grupo}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {doencasFiltradas.map((doenca) => (
              <article
                key={doenca.nome}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {doenca.nome}
                  </h3>

                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                    {doenca.grupo}
                  </span>
                </div>

                <p className="mt-5 text-justify leading-7 text-slate-600">
                  {doenca.descricao}
                </p>

                <div className="mt-5 rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                  <p className="text-sm font-bold text-emerald-900">
                    Prevenção e controlo
                  </p>

                  <p className="mt-2 text-justify text-sm leading-6 text-emerald-900">
                    {doenca.prevencao}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PARASITAS */}
      <section className="bg-[#103b27] py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-200">
              Parasitologia
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Parasitas: um dos grandes desafios da produção ovina
            </h2>

            <p className="mt-5 text-justify text-lg leading-8 text-emerald-50">
              Parasitas internos e externos podem reduzir o desempenho dos
              ovinos sem provocar sinais evidentes nas primeiras fases. Por
              isso, a vigilância deve combinar observação dos animais,
              avaliação da condição corporal e, quando necessário, exames
              laboratoriais.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                titulo: "Haemonchus",
                texto:
                  "Pode provocar anemia e perda de condição corporal, sendo particularmente importante em determinados sistemas de pequenos ruminantes.",
              },
              {
                titulo: "Trichostrongylus",
                texto:
                  "Nemátodes gastrointestinais que podem afectar o desempenho e provocar alterações digestivas.",
              },
              {
                titulo: "Coccídios",
                texto:
                  "Podem causar problemas principalmente em animais jovens, sobretudo em ambientes com elevada contaminação fecal.",
              },
              {
                titulo: "Ácaros e piolhos",
                texto:
                  "Parasitas externos associados a prurido, lesões cutâneas, stress e deterioração da lã.",
              },
            ].map((item) => (
              <article
                key={item.titulo}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-xl font-bold">{item.titulo}</h3>

                <p className="mt-4 text-justify text-sm leading-7 text-emerald-50">
                  {item.texto}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-amber-300/30 bg-amber-100/10 p-6">
            <p className="text-justify leading-7 text-amber-50">
              <strong>Resistência aos antiparasitários:</strong> utilizar
              vermífugos repetidamente sem diagnóstico e sem estratégia pode
              seleccionar parasitas resistentes. O controlo deve combinar
              maneio de pastagem, monitorização, diagnóstico e utilização
              responsável de medicamentos sob orientação veterinária.
            </p>
          </div>
        </div>
      </section>

      {/* VACINAÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              Imunização
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Vacinação
            </h2>

            <div className="mt-6 space-y-5 text-justify leading-8 text-slate-700">
              <p>
                A vacinação é uma ferramenta preventiva importante, mas não
                existe um calendário universal que possa ser aplicado
                indistintamente a todos os efectivos.
              </p>

              <p>
                O programa deve considerar doenças presentes ou de risco na
                região, idade dos animais, estado reprodutivo, histórico da
                exploração, disponibilidade das vacinas e orientações dos
                serviços veterinários.
              </p>

              <p>
                A vacinação deve ser realizada com produtos autorizados e
                armazenados correctamente, respeitando as instruções do
                fabricante e a orientação profissional.
              </p>
            </div>
          </article>

          <article className="rounded-3xl bg-[#edf3ed] p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-slate-900">
              Antes de vacinar
            </h3>

            <div className="mt-6 space-y-3">
              {[
                "Identificar a doença que se pretende prevenir.",
                "Avaliar o risco epidemiológico da exploração.",
                "Verificar a idade e condição dos animais.",
                "Confirmar conservação adequada da vacina.",
                "Registar lote, data e animais vacinados.",
                "Definir reforços de acordo com orientação veterinária.",
                "Observar os animais após a vacinação.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-white px-5 py-4 shadow-sm"
                >
                  <p className="text-sm leading-6 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* BIOSSEGURANÇA */}
      <section className="bg-[#edf3ed] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              Biossegurança
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Impedir a entrada e disseminação de doenças
            </h2>

            <p className="mt-5 text-justify text-lg leading-8 text-slate-600">
              Biossegurança é um conjunto de procedimentos destinados a reduzir
              o risco de entrada, estabelecimento e disseminação de agentes
              causadores de doença dentro da exploração.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                titulo: "Animais novos",
                texto:
                  "Evitar introduzir imediatamente animais recém-adquiridos no efectivo principal. Deve existir período de quarentena e avaliação sanitária.",
              },
              {
                titulo: "Visitantes",
                texto:
                  "Limitar entradas desnecessárias e estabelecer procedimentos de higiene para pessoas que circulam entre explorações.",
              },
              {
                titulo: "Equipamentos",
                texto:
                  "Equipamentos utilizados em diferentes grupos podem transportar material contaminado se não forem limpos adequadamente.",
              },
              {
                titulo: "Veículos",
                texto:
                  "Veículos que transportam animais, alimento ou equipamentos podem contribuir para a disseminação de agentes.",
              },
              {
                titulo: "Cadáveres",
                texto:
                  "Animais mortos devem ser tratados de forma segura e de acordo com a orientação veterinária e legislação aplicável.",
              },
              {
                titulo: "Roedores e insectos",
                texto:
                  "O controlo de pragas reduz riscos de contaminação e transmissão de determinados agentes.",
              },
            ].map((item) => (
              <article
                key={item.titulo}
                className="rounded-3xl bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-bold text-slate-900">
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

      {/* QUARENTENA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl bg-white p-8 shadow-sm lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
                Quarentena
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Animais recém-chegados
              </h2>
            </div>

            <div className="space-y-5 text-justify leading-8 text-slate-700">
              <p>
                A introdução de animais é uma das principais oportunidades
                para entrada de doenças numa exploração. Mesmo que o animal
                pareça saudável, pode estar incubando uma doença ou ser
                portador de determinado agente.
              </p>

              <p>
                Os animais novos devem ser mantidos separados do efectivo
                existente durante um período definido pelo médico veterinário,
                com observação clínica e, quando indicado, exames laboratoriais
                e medidas preventivas.
              </p>

              <p>
                O período de separação também permite avaliar alimentação,
                adaptação, condição corporal, presença de parasitas e estado
                geral.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORDEIROS */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              Animais jovens
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Sanidade dos cordeiros
            </h2>

            <p className="mt-5 text-justify text-lg leading-8 text-slate-600">
              Os primeiros dias de vida são críticos. Cordeiros apresentam
              maior vulnerabilidade à hipotermia, fome, infecções e problemas
              digestivos.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                titulo: "Colostro",
                texto:
                  "O acesso adequado ao colostro nas primeiras horas de vida é fundamental para a transferência de imunidade.",
              },
              {
                titulo: "Temperatura",
                texto:
                  "Cordeiros recém-nascidos precisam de protecção contra frio, chuva e condições ambientais desfavoráveis.",
              },
              {
                titulo: "Umbigo",
                texto:
                  "O cuidado adequado do cordão umbilical reduz o risco de infecção.",
              },
              {
                titulo: "Diarreia",
                texto:
                  "Diarreia em cordeiros deve ser investigada porque pode ter causas nutricionais, infecciosas ou parasitárias.",
              },
            ].map((item) => (
              <article
                key={item.titulo}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7"
              >
                <h3 className="text-xl font-bold text-slate-900">
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

      {/* REPRODUÇÃO */}
      <section className="bg-[#103b27] py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-200">
                Saúde reprodutiva
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Reprodução também é um indicador sanitário
              </h2>
            </div>

            <div className="space-y-5 text-justify text-lg leading-8 text-emerald-50">
              <p>
                Abortos, baixa taxa de concepção, mortalidade neonatal e
                repetição de problemas reprodutivos podem indicar doenças,
                deficiências nutricionais, problemas de maneio ou outros
                factores.
              </p>

              <p>
                O produtor deve manter registos das cobrições, partos, abortos,
                cordeiros nascidos e mortalidade. Estes dados ajudam o
                veterinário a identificar padrões.
              </p>

              <p>
                Quando ocorre uma sequência anormal de abortos ou mortalidade,
                não se deve assumir imediatamente uma causa. É necessário
                investigar e recolher informação adequada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ANTIBIÓTICOS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              Uso responsável
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Antibióticos não são uma solução para todas as doenças
            </h2>

            <div className="mt-6 space-y-5 text-justify leading-8 text-slate-700">
              <p>
                Antibióticos actuam contra determinadas bactérias. Não tratam
                directamente doenças virais nem substituem medidas de
                biossegurança, higiene, nutrição e diagnóstico.
              </p>

              <p>
                O uso inadequado pode favorecer resistência antimicrobiana,
                dificultando o tratamento futuro das infecções.
              </p>

              <p>
                Medicamentos veterinários devem ser utilizados de acordo com
                indicação profissional, respeitando dose, via de administração,
                duração e período de carência estabelecidos para o produto.
              </p>
            </div>
          </article>

          <article className="rounded-3xl bg-amber-50 p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-amber-950">
              Nunca fazer
            </h3>

            <div className="mt-6 space-y-3">
              {[
                "Usar antibióticos sem diagnóstico ou orientação.",
                "Utilizar sobras de medicamentos antigos.",
                "Interromper tratamentos por decisão própria.",
                "Usar medicamentos destinados a outra espécie sem orientação.",
                "Ignorar períodos de carência.",
                "Tratar todo o efectivo sem avaliar a causa.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-amber-200 bg-white px-5 py-4"
                >
                  <p className="text-sm leading-6 text-amber-950">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* ÁGUA E ALIMENTO */}
      <section className="bg-[#edf3ed] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              Factores sanitários
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Água e alimento também fazem parte da sanidade
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900">
                Água
              </h3>

              <div className="mt-5 space-y-4 text-justify leading-7 text-slate-600">
                <p>
                  Água contaminada pode contribuir para problemas digestivos e
                  outros riscos sanitários. Os bebedouros devem ser limpos e
                  protegidos contra fezes, lama e outras fontes de
                  contaminação.
                </p>

                <p>
                  A quantidade de água disponível também deve ser suficiente
                  para o número de animais e para as condições ambientais.
                </p>
              </div>
            </article>

            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900">
                Alimento
              </h3>

              <div className="mt-5 space-y-4 text-justify leading-7 text-slate-600">
                <p>
                  Alimentos deteriorados, contaminados ou introduzidos de forma
                  inadequada podem provocar problemas digestivos e metabólicos.
                </p>

                <p>
                  Mudanças bruscas na dieta devem ser evitadas. O alimento deve
                  ser armazenado de forma a reduzir humidade, fungos, acesso de
                  roedores e contaminação.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ANGOLA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              Angola
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              A sanidade deve ser adaptada às diferentes regiões do país
            </h2>

            <p className="mt-5 text-justify text-lg leading-8 text-slate-600">
              Angola apresenta diferenças importantes de clima, vegetação,
              disponibilidade de água, sistemas de criação e mobilidade dos
              animais. Por isso, os riscos sanitários não devem ser tratados
              como iguais em todas as províncias.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {provincias.map((provincia) => (
              <article
                key={provincia.nome}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {provincia.nome}
                </h3>

                <p className="mt-4 text-justify leading-7 text-slate-600">
                  {provincia.foco}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTOS */}
      <section className="bg-[#123d29] py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-200">
              Gestão sanitária
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Registos que toda exploração deveria manter
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Número total de animais",
              "Nascimentos",
              "Mortes",
              "Abortos",
              "Animais tratados",
              "Doenças diagnosticadas",
              "Vacinações",
              "Desparasitações",
              "Entrada de animais",
              "Saída de animais",
              "Peso ou condição corporal",
              "Resultados laboratoriais",
              "Medicamentos utilizados",
              "Períodos de carência",
              "Problemas de alimentação",
              "Problemas de água",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p className="font-medium text-emerald-50">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDICADORES */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            Indicadores
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Como avaliar a saúde de um efectivo?
          </h2>

          <p className="mt-5 text-justify text-lg leading-8 text-slate-600">
            A avaliação sanitária não deve depender apenas da observação de um
            animal. Indicadores do efectivo permitem identificar tendências e
            comparar períodos.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[850px] border-collapse text-left">
              <thead className="bg-[#123d29] text-white">
                <tr>
                  <th className="px-6 py-4">Indicador</th>
                  <th className="px-6 py-4">O que mostra</th>
                  <th className="px-6 py-4">Por que é importante</th>
                </tr>
              </thead>

              <tbody>
                {[
                  [
                    "Mortalidade",
                    "Número de animais mortos",
                    "Pode revelar problemas sanitários graves.",
                  ],
                  [
                    "Morbilidade",
                    "Número de animais afectados",
                    "Ajuda a medir a dimensão do problema.",
                  ],
                  [
                    "Mortalidade de cordeiros",
                    "Perdas entre animais jovens",
                    "Avalia reprodução, colostro, nutrição e sanidade.",
                  ],
                  [
                    "Abortos",
                    "Perdas gestacionais",
                    "Pode indicar problemas infecciosos ou de maneio.",
                  ],
                  [
                    "Tratamentos",
                    "Quantidade de intervenções",
                    "Ajuda a identificar problemas recorrentes.",
                  ],
                  [
                    "Condição corporal",
                    "Estado nutricional",
                    "Relaciona alimentação e saúde.",
                  ],
                ].map(([indicador, mostra, importancia]) => (
                  <tr
                    key={indicador}
                    className="border-b border-slate-200 last:border-0"
                  >
                    <td className="px-6 py-5 font-semibold text-slate-900">
                      {indicador}
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      {mostra}
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      {importancia}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DIAGNÓSTICO */}
      <section className="bg-[#edf3ed] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
                Diagnóstico
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Nem toda doença pode ser identificada apenas olhando para o
                animal
              </h2>
            </div>

            <div className="space-y-5 text-justify text-lg leading-8 text-slate-700">
              <p>
                Muitos sinais clínicos são comuns a diferentes doenças. Uma
                diarreia, por exemplo, pode ter origem parasitária, bacteriana,
                nutricional ou estar associada a outras condições.
              </p>

              <p>
                Da mesma forma, tosse pode ocorrer em diferentes doenças
                respiratórias. Por isso, tratamentos baseados apenas na
                aparência podem falhar.
              </p>

              <p>
                Quando o problema é importante ou recorrente, deve ser feita
                investigação veterinária. Dependendo da situação, podem ser
                utilizados exames de fezes, sangue, culturas, testes
                específicos, necropsia e outros métodos laboratoriais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGEM */}
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://quintadopinhao.com/fotos/leitoes-creche.jpg"
                alt="Maneio sanitário numa exploração pecuária"
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-300">
                Referência de maneio
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Higiene, observação e organização fazem parte da prevenção
              </h2>

              <p className="mt-6 text-justify text-lg leading-8 text-slate-300">
                A imagem é proveniente de uma exploração suinícola angolana e
                é utilizada aqui como referência visual de práticas de maneio
                pecuário. A espécie retratada é suína; a fotografia não deve
                ser interpretada como fotografia de ovinos nem como evidência
                de uma prática específica de ovinicultura.
              </p>

              <a
                href="https://quintadopinhao.com/"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block font-semibold text-white underline decoration-emerald-400 underline-offset-4"
              >
                Consultar fonte da imagem
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PESQUISA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            Investigação em Angola
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            O que ainda precisa de ser estudado?
          </h2>

          <p className="mt-5 text-justify text-lg leading-8 text-slate-600">
            A produção de conhecimento sanitário específico para os ovinos
            angolanos é fundamental para desenvolver programas preventivos
            adaptados às diferentes regiões.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            "Mapear os principais parasitas dos ovinos por região.",
            "Avaliar resistência aos antiparasitários.",
            "Caracterizar as principais causas de mortalidade de cordeiros.",
            "Estudar doenças respiratórias e digestivas.",
            "Avaliar problemas reprodutivos.",
            "Estudar qualidade da água utilizada pelos efectivos.",
            "Avaliar programas de vacinação adaptados às regiões.",
            "Mapear circulação de animais e riscos sanitários.",
            "Estudar sistemas de quarentena adequados às explorações familiares.",
            "Criar indicadores sanitários nacionais para ovinos.",
            "Fortalecer diagnóstico laboratorial.",
            "Criar sistemas digitais de vigilância pecuária.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-justify leading-7 text-slate-700">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ALERTA */}
      <section className="mx-auto max-w-5xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-red-200 bg-red-50 p-8">
          <h2 className="text-2xl font-bold text-red-950">
            Quando procurar assistência veterinária?
          </h2>

          <p className="mt-4 text-justify leading-8 text-red-900">
            Procure assistência profissional quando houver mortalidade
            inesperada, doença em vários animais, abortos repetidos, sinais
            neurológicos, dificuldade respiratória intensa, febre, suspeita de
            doença contagiosa ou qualquer situação que possa representar risco
            para o efectivo ou para outros animais da região. Não se deve
            transportar ou comercializar animais suspeitos de doença contagiosa
            sem orientação das autoridades veterinárias.
          </p>
        </div>
      </section>

      {/* FONTES */}
      <section className="border-t border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              Fontes e referências
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Referências para estudo
            </h2>

            <div className="mt-8 space-y-7 text-sm leading-7 text-slate-600">
              <div>
                <p className="font-bold text-slate-900">
                  Instituto Nacional de Estatística — Angola
                </p>

                <p className="mt-1">
                  RAPP 2019/2020 e ICAPP 2024/2025 para enquadramento
                  estatístico da actividade agropecuária.
                </p>

                <a
                  href="https://www.ine.gov.ao/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-emerald-800 underline underline-offset-4"
                >
                  Consultar INE Angola
                </a>
              </div>

              <div>
                <p className="font-bold text-slate-900">
                  FAO — Organização das Nações Unidas para a Alimentação e
                  Agricultura
                </p>

                <p className="mt-1">
                  Referências técnicas sobre pequenos ruminantes, sanidade,
                  parasitas, nutrição e produção animal.
                </p>

                <a
                  href="https://www.fao.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-emerald-800 underline underline-offset-4"
                >
                  Consultar FAO
                </a>
              </div>

              <div>
                <p className="font-bold text-slate-900">
                  WOAH — Organização Mundial da Saúde Animal
                </p>

                <p className="mt-1">
                  Referência internacional para vigilância, prevenção e
                  controlo de doenças animais e para normas de saúde animal.
                </p>

                <a
                  href="https://www.woah.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-emerald-800 underline underline-offset-4"
                >
                  Consultar WOAH
                </a>
              </div>

              <div>
                <p className="font-bold text-slate-900">
                  AGROINOVA ANGOLA
                </p>

                <p className="mt-1">
                  Conteúdo organizado para fins de conhecimento técnico,
                  formação, investigação e apoio à tomada de decisão no sector
                  agropecuário angolano.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <Link
            href="/pecuaria/ovinos/orientacoes/pastoreio"
            className="rounded-xl border border-slate-300 px-5 py-3 text-center font-semibold text-slate-700 transition hover:border-emerald-700 hover:text-emerald-800"
          >
            Tema anterior: Pastoreio
          </Link>

          <Link
            href="/pecuaria/ovinos/orientacoes"
            className="rounded-xl border border-emerald-700 px-5 py-3 text-center font-semibold text-emerald-800 transition hover:bg-emerald-50"
          >
            Todas as orientações
          </Link>

          <Link
            href="/pecuaria/ovinos/orientacoes/reproducao"
            className="rounded-xl bg-[#123d29] px-5 py-3 text-center font-semibold text-white transition hover:bg-[#0b2d1e]"
          >
            Próximo tema: Reprodução
          </Link>
        </div>
      </section>
    </main>
  );
}