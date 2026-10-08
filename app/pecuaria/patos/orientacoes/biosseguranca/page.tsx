"use client";

import Link from "next/link";
import { useState } from "react";

const riscos = [
  {
    titulo: "Entrada de novas aves",
    texto:
      "A introdução de patos provenientes de outra exploração pode levar agentes infecciosos para o lote. Sempre que possível, a origem, o estado sanitário e o histórico dos animais devem ser conhecidos antes da entrada.",
  },
  {
    titulo: "Pessoas",
    texto:
      "Visitantes, trabalhadores, técnicos e comerciantes podem transportar agentes infecciosos através de calçado, roupa, mãos, equipamentos e veículos contaminados.",
  },
  {
    titulo: "Equipamentos",
    texto:
      "Baldes, caixas, redes, ferramentas, comedouros e bebedouros utilizados em diferentes lotes podem transferir contaminação quando não são devidamente limpos.",
  },
  {
    titulo: "Aves selvagens",
    texto:
      "Aves selvagens podem entrar em contacto com os patos, água, alimento ou instalações. O contacto deve ser reduzido sempre que possível.",
  },
  {
    titulo: "Roedores e outros animais",
    texto:
      "Ratos, camundongos, cães, gatos e outros animais podem contaminar alimento, água, instalações e equipamentos.",
  },
  {
    titulo: "Água contaminada",
    texto:
      "Água de qualidade desconhecida ou armazenada de forma inadequada pode tornar-se uma importante fonte de contaminação.",
  },
];

const rotina = [
  "Controlar quem entra na área dos patos.",
  "Evitar visitas desnecessárias aos alojamentos.",
  "Manter equipamentos limpos.",
  "Impedir contacto desnecessário com aves selvagens.",
  "Controlar roedores e outros animais.",
  "Proteger alimento e água contra contaminação.",
  "Separar animais novos antes de misturá-los ao lote.",
  "Retirar imediatamente animais mortos.",
  "Limpar e desinfetar instalações entre lotes.",
  "Manter registos das entradas, saídas, doenças e mortalidade.",
];

const resposta = [
  {
    titulo: "1. Isolar",
    texto:
      "Quando houver animais com sinais clínicos suspeitos, reduzir o contacto com os restantes animais e evitar movimentações desnecessárias.",
  },
  {
    titulo: "2. Observar",
    texto:
      "Verificar quantos animais apresentam alterações e registar sinais, mortalidade, consumo de água e alimento e alterações comportamentais.",
  },
  {
    titulo: "3. Comunicar",
    texto:
      "Procurar orientação de um médico veterinário ou dos serviços veterinários competentes, especialmente quando houver mortalidade elevada ou disseminação rápida.",
  },
  {
    titulo: "4. Não automedicar",
    texto:
      "Não utilizar antibióticos ou outros medicamentos por tentativa. O tratamento inadequado pode mascarar sinais, favorecer resistência antimicrobiana e atrasar o diagnóstico.",
  },
];

export default function BiossegurancaPatosPage() {
  const [aberto, setAberto] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">
              Pecuária • Patos • Orientações técnicas
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
              Biossegurança
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-emerald-50 md:text-xl">
              Princípios e práticas para reduzir a entrada, circulação e
              disseminação de agentes infecciosos numa criação de patos.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Prevenir",
                "Controlar entradas",
                "Higienizar",
                "Responder rapidamente",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-emerald-400/20 bg-white/10 p-4 text-center font-bold text-white backdrop-blur"
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
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              Conceito
            </p>

            <h2 className="mt-3 text-3xl font-black">
              O que é biossegurança?
            </h2>

            <div className="mt-6 space-y-5 text-justify leading-8 text-slate-700">
              <p>
                Biossegurança é o conjunto de medidas utilizadas para diminuir
                o risco de introdução e disseminação de doenças numa
                exploração. Não depende de uma única ação. Funciona através da
                combinação de higiene, controlo de movimentações, isolamento,
                limpeza, desinfeção, controlo de pragas e vigilância.
              </p>

              <p>
                Numa criação de patos, a biossegurança deve começar antes de os
                animais apresentarem sinais de doença. Esperar pela ocorrência
                de mortalidade para começar a controlar os riscos é uma
                estratégia tardia.
              </p>

              <p>
                A qualidade da biossegurança também depende da rotina. Uma
                exploração pode possuir boas instalações, mas continuar
                vulnerável se as pessoas entrarem sem controlo, se os
                equipamentos forem partilhados sem higienização ou se animais
                novos forem introduzidos diretamente no lote.
              </p>
            </div>
          </article>

          <aside className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 shadow-[0_18px_50px_rgba(16,185,129,0.12)]">
            <h2 className="text-2xl font-black text-emerald-950">
              Princípio central
            </h2>

            <p className="mt-5 text-justify leading-8 text-emerald-950/80">
              Quanto menos oportunidades um agente infeccioso tiver para entrar
              e circular na exploração, menor será o risco sanitário.
            </p>

            <div className="mt-7 rounded-2xl bg-white p-5">
              <p className="font-black text-emerald-800">
                Entrada → contacto → transmissão
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                A biossegurança procura interromper esta cadeia.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* PRINCIPAIS RISCOS */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              Avaliação de risco
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Onde a doença pode entrar?
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Antes de estabelecer medidas de biossegurança, o produtor deve
              identificar as principais vias de entrada e transmissão existentes
              na sua própria exploração.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {riscos.map((risco) => (
              <article
                key={risco.titulo}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-[0_16px_45px_rgba(15,23,42,0.07)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(15,23,42,0.12)]"
              >
                <h3 className="text-xl font-black">{risco.titulo}</h3>

                <p className="mt-4 text-justify leading-8 text-slate-600">
                  {risco.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FLUXO DE ENTRADA */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-300">
              Controlo de acesso
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Quem entra na exploração?
            </h2>

            <p className="mt-5 text-justify leading-8 text-slate-300">
              A movimentação de pessoas e materiais deve ser tratada como parte
              do risco sanitário. Quanto maior o número de contactos entre
              explorações, maior a necessidade de controlo.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                titulo: "Produtor e trabalhadores",
                texto:
                  "Devem conhecer as regras internas e evitar deslocações desnecessárias entre lotes.",
              },
              {
                titulo: "Visitantes",
                texto:
                  "O acesso deve ser limitado ao necessário e acompanhado quando apropriado.",
              },
              {
                titulo: "Veículos e equipamentos",
                texto:
                  "Devem ser avaliados quanto ao risco de transportar matéria orgânica e agentes infecciosos.",
              },
            ].map((item) => (
              <div
                key={item.titulo}
                className="rounded-3xl border border-white/10 bg-white/5 p-7"
              >
                <h3 className="text-xl font-black">{item.titulo}</h3>

                <p className="mt-4 text-justify leading-8 text-slate-300">
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOVOS ANIMAIS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] border border-amber-200 bg-amber-50 p-8 shadow-[0_20px_60px_rgba(120,53,15,0.09)] md:p-10">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
            Entrada de animais
          </p>

          <h2 className="mt-3 text-3xl font-black text-amber-950">
            Animais novos não devem ser misturados imediatamente
          </h2>

          <div className="mt-6 space-y-5 text-justify leading-8 text-amber-950/80">
            <p>
              Animais recém-adquiridos podem parecer saudáveis e ainda assim
              estar no período de incubação de uma doença ou transportar agentes
              infecciosos. Por isso, a introdução deve ser planeada.
            </p>

            <p>
              Sempre que a estrutura da exploração permitir, os animais novos
              devem permanecer separados dos lotes existentes durante um
              período definido pelo responsável sanitário, com observação
              clínica e procedimentos apropriados.
            </p>

            <p>
              O princípio é simples: primeiro avaliar, depois integrar. A
              duração e os procedimentos de quarentena devem ser definidos de
              acordo com o risco sanitário, origem dos animais e orientação
              veterinária.
            </p>
          </div>
        </div>
      </section>

      {/* LIMPEZA E DESINFEÇÃO */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
              <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
                Higiene
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Limpeza vem antes da desinfeção
              </h2>

              <p className="mt-5 text-justify leading-8 text-slate-600">
                A matéria orgânica acumulada em instalações, equipamentos e
                superfícies pode reduzir a eficácia dos procedimentos de
                desinfeção. Por isso, a limpeza deve remover primeiro sujidade,
                fezes, restos de alimento e outros resíduos.
              </p>

              <div className="mt-7 rounded-2xl bg-slate-100 p-6">
                <p className="font-black text-slate-900">
                  Sequência básica
                </p>

                <p className="mt-3 font-semibold leading-8 text-emerald-800">
                  Retirar resíduos → limpar → enxaguar quando necessário →
                  aplicar desinfetante conforme orientação do produto →
                  respeitar o tempo de contacto → secar quando aplicável.
                </p>
              </div>
            </article>

            <article className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
                Atenção
              </p>

              <h2 className="mt-3 text-3xl font-black text-emerald-950">
                Não misturar produtos químicos
              </h2>

              <p className="mt-5 text-justify leading-8 text-slate-700">
                Produtos de limpeza e desinfeção devem ser utilizados de acordo
                com o rótulo e as instruções do fabricante. Não se deve combinar
                produtos químicos sem indicação técnica, porque isso pode gerar
                reações perigosas ou reduzir a eficácia do procedimento.
              </p>

              <p className="mt-5 text-justify leading-8 text-slate-700">
                O responsável deve também considerar a segurança das pessoas,
                dos animais, dos alimentos e da água durante a utilização dos
                produtos.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ÁGUA E ALIMENTO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            Água e alimentação
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Proteger aquilo que os patos consomem
          </h2>

          <p className="mt-5 text-justify leading-8 text-slate-600">
            Água e alimento podem tornar-se vias de contaminação quando ficam
            expostos a fezes, roedores, aves selvagens, sujidade ou outros
            agentes. A biossegurança deve, por isso, incluir o armazenamento e
            distribuição destes recursos.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-black">Alimento</h3>

            <ul className="mt-6 space-y-4 text-slate-700">
              {[
                "Guardar em local protegido da chuva e humidade.",
                "Impedir acesso de roedores e outras pragas.",
                "Evitar contacto direto do alimento com o chão.",
                "Retirar alimento deteriorado ou contaminado.",
                "Manter recipientes de alimentação limpos.",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-slate-100 bg-slate-50 p-4 leading-7"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 shadow-sm">
            <h3 className="text-2xl font-black text-emerald-950">Água</h3>

            <ul className="mt-6 space-y-4 text-slate-700">
              {[
                "Proteger a fonte contra contaminação.",
                "Limpar regularmente os recipientes.",
                "Evitar acumulação de matéria orgânica.",
                "Inspecionar tubagens e reservatórios.",
                "Investigar alterações de cor, odor ou qualidade.",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-emerald-100 bg-white p-4 leading-7"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* PRAGAS */}
      <section className="bg-slate-100 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              Controlo de pragas
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Roedores, insetos e outros animais
            </h2>

            <p className="mt-5 text-justify leading-8 text-slate-600">
              O controlo de pragas deve começar pela prevenção. Uma exploração
              com alimento espalhado, lixo acumulado, água parada e estruturas
              com muitos esconderijos apresenta maior dificuldade para controlar
              animais indesejados.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Eliminar fontes de alimento acessíveis.",
              "Manter resíduos sob controlo.",
              "Reparar buracos e pontos de entrada.",
              "Monitorizar sinais de roedores.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="font-semibold leading-7 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MORTALIDADE */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] border border-red-200 bg-red-50 p-8 md:p-10">
          <p className="text-sm font-bold uppercase tracking-widest text-red-700">
            Mortalidade
          </p>

          <h2 className="mt-3 text-3xl font-black text-red-950">
            O que fazer quando aparece um animal morto?
          </h2>

          <div className="mt-6 space-y-5 text-justify leading-8 text-red-950/80">
            <p>
              A mortalidade deve ser registada e investigada. Não se deve
              simplesmente retirar o cadáver e continuar a rotina sem verificar
              se existem outros animais afetados.
            </p>

            <p>
              O cadáver deve ser manipulado de forma segura e eliminado de
              acordo com as orientações veterinárias e as regras aplicáveis na
              região. A disposição inadequada pode aumentar o risco de
              contaminação da exploração e do ambiente.
            </p>

            <p>
              Quando ocorre mortalidade acima do esperado ou quando vários
              animais apresentam sinais semelhantes, deve-se procurar
              assistência veterinária rapidamente.
            </p>
          </div>
        </div>
      </section>

      {/* RESPOSTA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              Resposta a suspeitas
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Quando existe suspeita de doença
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {resposta.map((item) => (
              <article
                key={item.titulo}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm"
              >
                <h3 className="text-xl font-black">{item.titulo}</h3>

                <p className="mt-4 text-justify leading-8 text-slate-600">
                  {item.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ROTINA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-8 md:p-10">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            Checklist
          </p>

          <h2 className="mt-3 text-3xl font-black text-emerald-950">
            Rotina de biossegurança
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {rotina.map((item, index) => {
              const ativo = aberto === item;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setAberto(ativo ? null : item)}
                  className="rounded-2xl border border-emerald-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-800 text-sm font-black text-white">
                      {index + 1}
                    </span>

                    <div>
                      <p className="font-bold leading-7 text-slate-800">
                        {item}
                      </p>

                      {ativo && (
                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          Esta medida deve fazer parte da rotina documentada da
                          exploração e ser verificada pelo responsável.
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ANGOLA */}
      <section className="bg-emerald-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-emerald-300">
                Aplicação em Angola
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Biossegurança também é gestão da exploração
              </h2>

              <p className="mt-5 text-justify leading-8 text-emerald-50/80">
                Em sistemas familiares e comerciais, as medidas devem ser
                adaptadas à realidade da exploração. O princípio não é criar
                procedimentos impossíveis de cumprir, mas identificar os
                principais riscos e estabelecer rotinas que possam ser
                mantidas diariamente.
              </p>

              <p className="mt-5 text-justify leading-8 text-emerald-50/80">
                O controlo da água, alimentação, circulação de pessoas,
                aquisição de animais, limpeza, mortalidade e contacto com
                outras aves é particularmente importante quando diferentes
                explorações estão próximas umas das outras.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-700 bg-emerald-900/60 p-8">
              <h3 className="text-2xl font-black">
                Para o estudante de produção animal
              </h3>

              <p className="mt-5 text-justify leading-8 text-emerald-50/80">
                Uma boa avaliação sanitária não deve perguntar apenas
                “qual doença o animal tem?”. Deve também perguntar:
                “como o agente pode ter entrado?”, “como pode estar a circular?”
                e “qual medida pode interromper essa transmissão?”.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXERCÍCIO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_22px_60px_rgba(15,23,42,0.09)] md:p-10">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            Exercício prático
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Avaliação de risco de uma exploração de patos
          </h2>

          <p className="mt-5 max-w-4xl text-justify leading-8 text-slate-600">
            Um estudante visita uma exploração onde os patos partilham
            equipamentos com outra criação, a água é armazenada num reservatório
            aberto, existem aves selvagens próximas dos comedouros e não há
            registo das entradas de novos animais.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Identifique pelo menos quatro riscos de biossegurança.",
              "Classifique cada risco como entrada, transmissão ou ambos.",
              "Proponha uma medida preventiva para cada risco.",
              "Indique quais medidas devem ser implementadas primeiro.",
            ].map((pergunta, index) => (
              <div
                key={pergunta}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <p className="font-bold text-slate-800">
                  {index + 1}. {pergunta}
                </p>
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <Link
            href="/pecuaria/patos/orientacoes/maneio"
            className="rounded-2xl border border-slate-300 bg-white px-6 py-4 text-center font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-700"
          >
            Voltar: Maneio
          </Link>

          <Link
            href="/pecuaria/patos/orientacoes/agua"
            className="rounded-2xl bg-emerald-800 px-6 py-4 text-center font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-900"
          >
            Próxima: Água
          </Link>
        </div>
      </section>
    </main>
  );
}