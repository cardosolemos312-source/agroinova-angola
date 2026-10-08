"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const imagens = {
  hero:
    "https://agroanuncios.ao/oc-content/uploads/15/2498.jpg",
  campo:
    "https://pbs.twimg.com/media/HCat5hdWsAArVdd.jpg",
  cordeiro:
    "https://cdn.24.co.za/files/Cms/General/d/10883/11d158b92eea4df8be203290f4868619.jpg",
  abrigo:
    "https://cax-wp-farmers-prod-uploads.s3.amazonaws.com/app/uploads/2022/05/Lambing-pens-ewe-and-lamb.jpg",
  africa:
    "https://buellsport-naukluft.com/wp-content/uploads/2021/10/21-10-02-lamb-twins-ewe-box-bsp-smph-21-09-web-800-x-558.jpg",
};

type Indicador = {
  nome: string;
  explicacao: string;
};

const indicadores: Indicador[] = [
  {
    nome: "Taxa de gestação",
    explicacao:
      "Proporção de fêmeas expostas à reprodução que ficam gestantes. Deve ser interpretada em conjunto com a época de monta, condição corporal, idade, fertilidade dos carneiros e problemas sanitários.",
  },
  {
    nome: "Taxa de parto",
    explicacao:
      "Percentagem de fêmeas que efetivamente chegam ao parto relativamente ao grupo colocado em reprodução.",
  },
  {
    nome: "Prolificidade",
    explicacao:
      "Número médio de cordeiros nascidos por ovelha parida. Deve ser analisada de acordo com genética, nutrição, idade e sistema de produção.",
  },
  {
    nome: "Taxa de aborto",
    explicacao:
      "Percentagem de gestações que terminam em aborto. Valores anormais exigem investigação sanitária, nutricional e de maneio.",
  },
  {
    nome: "Mortalidade de cordeiros",
    explicacao:
      "Indicador fundamental para avaliar o resultado reprodutivo real. Não basta produzir muitos cordeiros; é necessário fazê-los sobreviver até ao desmame.",
  },
  {
    nome: "Taxa de desmame",
    explicacao:
      "Mostra quantos cordeiros chegam ao desmame em relação às fêmeas colocadas em reprodução ou às ovelhas que pariram, conforme a metodologia utilizada.",
  },
];

const problemas = [
  {
    id: "cio",
    titulo: "Ausência ou dificuldade de detecção do cio",
    resumo:
      "Ovelhas podem estar em anestro ou apresentar sinais de cio pouco evidentes.",
    detalhe:
      "A observação do comportamento, a presença do carneiro, a época do ano, a condição corporal, a lactação e a alimentação influenciam a expressão reprodutiva. Não se deve assumir infertilidade apenas porque uma ovelha não foi observada em cio.",
  },
  {
    id: "aborto",
    titulo: "Abortos",
    resumo:
      "Podem ter origem infecciosa, nutricional, tóxica ou estar associados a problemas de maneio.",
    detalhe:
      "Um aumento inesperado de abortos deve ser tratado como ocorrência sanitária. Fetos, placentas e materiais de aborto devem ser manipulados com precaução e a investigação deve envolver um médico veterinário e, quando necessário, laboratório.",
  },
  {
    id: "infertilidade",
    titulo: "Infertilidade ou baixa taxa de concepção",
    resumo:
      "Pode estar relacionada com fêmeas, carneiros, nutrição, doenças ou calendário reprodutivo.",
    detalhe:
      "É importante analisar os dois sexos. Um carneiro com alterações testiculares, baixa libido ou baixa qualidade seminal pode comprometer uma grande parte do grupo reprodutor.",
  },
  {
    id: "distocia",
    titulo: "Parto difícil",
    resumo:
      "A distocia pode colocar em risco a ovelha e o cordeiro.",
    detalhe:
      "Pode estar associada à posição do feto, tamanho do cordeiro, conformação materna, idade, condição corporal e outros fatores. Quando existe dificuldade de parto, deve-se procurar assistência veterinária ou de um técnico devidamente capacitado.",
  },
  {
    id: "retencao",
    titulo: "Problemas pós-parto",
    resumo:
      "Retenção de placenta, infeções e alterações da glândula mamária podem comprometer a mãe e o cordeiro.",
    detalhe:
      "A observação da ovelha após o parto é tão importante quanto a preparação para a monta. O produtor deve registar alterações e procurar assistência quando houver sinais de doença.",
  },
];

export default function ReproducaoOvinosPage() {
  const [problemaAtivo, setProblemaAtivo] = useState("cio");

  const problemaSelecionado = useMemo(
    () =>
      problemas.find((item) => item.id === problemaAtivo) ?? problemas[0],
    [problemaAtivo]
  );

  return (
    <main className="min-h-screen bg-[#f4f7f2] text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${imagens.hero})`,
          }}
        />

        <div className="absolute inset-0 bg-[#102d20]/80" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-28">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-lime-200">
              AGROINOVA ANGOLA • PECUÁRIA • OVINOS
            </p>

            <h1 className="max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
              Reprodução de ovinos
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/90 md:text-xl">
              Guia técnico e académico sobre maneio reprodutivo de ovinos,
              seleção de reprodutores, condição corporal, cio, monta,
              gestação, parto, saúde reprodutiva, cordeiros e avaliação dos
              resultados das explorações em Angola.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
                Ovelhas
              </span>

              <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
                Carneiros
              </span>

              <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
                Gestação
              </span>

              <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
                Parto
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-6 py-4 text-sm md:px-10 lg:px-12">
          <Link
            href="/pecuaria"
            className="font-medium text-emerald-800 hover:underline"
          >
            Pecuária
          </Link>

          <span className="text-slate-400">/</span>

          <Link
            href="/pecuaria/ovinos/orientacoes"
            className="font-medium text-emerald-800 hover:underline"
          >
            Ovinos
          </Link>

          <span className="text-slate-400">/</span>

          <span className="text-slate-600">Reprodução</span>
        </div>
      </div>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
              Maneio reprodutivo
            </p>

            <h2 className="text-3xl font-black text-slate-900 md:text-4xl">
              Reprodução não é apenas colocar o carneiro com as ovelhas
            </h2>

            <div className="mt-6 space-y-5 text-[16px] leading-8 text-slate-700">
              <p className="text-justify">
                A eficiência reprodutiva de um rebanho ovino resulta da
                combinação entre genética, nutrição, sanidade, condição
                corporal, qualidade dos reprodutores, ambiente e organização
                do calendário produtivo. Uma exploração pode possuir animais
                geneticamente interessantes e, ainda assim, apresentar baixa
                produção de cordeiros se as fêmeas entrarem na reprodução em
                condição inadequada ou se os carneiros não forem avaliados.
              </p>

              <p className="text-justify">
                O objetivo do maneio reprodutivo é aumentar a probabilidade de
                produzir cordeiros saudáveis no período pretendido, mantendo
                simultaneamente a saúde e o bem-estar das ovelhas e dos
                carneiros. Por isso, a reprodução deve ser planeada antes da
                entrada dos machos no grupo de fêmeas.
              </p>

              <p className="text-justify">
                Em sistemas familiares e extensivos, especialmente onde a
                disponibilidade de alimento varia entre a época chuvosa e a
                época seca, o calendário reprodutivo precisa ser adaptado às
                condições locais. A decisão correta não é necessariamente
                utilizar o mesmo sistema em todas as províncias de Angola.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-[#103b28] p-7 text-white shadow-xl">
            <p className="text-sm font-bold uppercase tracking-widest text-lime-200">
              Princípio fundamental
            </p>

            <p className="mt-5 text-2xl font-bold leading-9">
              Uma boa reprodução começa antes da monta.
            </p>

            <div className="mt-7 space-y-4 border-t border-white/20 pt-6 text-sm leading-7 text-white/80">
              <p>
                A preparação envolve alimentação, condição corporal, seleção,
                sanidade, identificação dos animais e planeamento.
              </p>

              <p>
                O resultado deve ser medido pelo número e qualidade dos
                cordeiros produzidos e não apenas pelo número de coberturas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CICLO DE PRODUÇÃO */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
              Planeamento
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              O ciclo reprodutivo deve ser pensado como um sistema
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "01",
                "Preparação",
                "Avaliação das ovelhas e carneiros, condição corporal, sanidade e alimentação.",
              ],
              [
                "02",
                "Monta",
                "Definição do grupo reprodutor, observação das fêmeas e acompanhamento dos carneiros.",
              ],
              [
                "03",
                "Gestação",
                "Acompanhamento nutricional, sanitário e identificação das fêmeas gestantes.",
              ],
              [
                "04",
                "Parto e pós-parto",
                "Preparação das instalações, assistência quando necessária e proteção do cordeiro.",
              ],
            ].map(([numero, titulo, texto]) => (
              <article
                key={numero}
                className="rounded-3xl border border-slate-200 bg-[#f8faf7] p-6"
              >
                <div className="text-4xl font-black text-emerald-800">
                  {numero}
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {titulo}
                </h3>

                <p className="mt-3 text-justify text-sm leading-7 text-slate-600">
                  {texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGEM + SELEÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl bg-slate-200 shadow-lg">
            <img
              src={imagens.campo}
              alt="Ovelha e cordeiro em sistema de criação"
              className="h-[420px] w-full object-cover"
            />

            <div className="bg-white px-5 py-4 text-sm leading-6 text-slate-600">
              Exemplo visual de uma ovelha com cordeiro em sistema de criação.
              A imagem é uma referência visual e não representa
              necessariamente uma exploração angolana.
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
              Seleção
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              Escolha das ovelhas e dos carneiros
            </h2>

            <div className="mt-6 space-y-5 text-[16px] leading-8 text-slate-700">
              <p className="text-justify">
                A seleção dos animais reprodutores deve considerar mais do que
                o tamanho corporal. O produtor deve observar saúde, estrutura,
                aprumos, aparelho reprodutor, histórico produtivo, capacidade
                materna, crescimento dos descendentes e adaptação ao ambiente.
              </p>

              <p className="text-justify">
                Nas ovelhas, devem ser valorizadas fêmeas saudáveis, com boa
                capacidade de alimentação e crescimento, aparelho mamário
                funcional, histórico reprodutivo conhecido e ausência de
                problemas recorrentes de parto ou criação dos cordeiros.
              </p>

              <p className="text-justify">
                Nos carneiros, a avaliação deve ser particularmente cuidadosa,
                porque um único macho pode influenciar geneticamente uma parte
                considerável do rebanho. A avaliação clínica dos testículos,
                aparelho reprodutor, aprumos, condição corporal e comportamento
                sexual é importante antes da época de reprodução.
              </p>

              <p className="text-justify">
                A avaliação especializada pode incluir exame do sémen quando
                houver necessidade, especialmente quando existem problemas de
                fertilidade ou dúvidas sobre a capacidade reprodutiva do
                macho.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONDIÇÃO CORPORAL */}
      <section className="bg-[#103b28] py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-lime-200">
              Nutrição e reprodução
            </p>

            <h2 className="mt-2 text-3xl font-black md:text-4xl">
              A condição corporal é uma ferramenta de decisão
            </h2>

            <p className="mt-6 text-justify text-[16px] leading-8 text-white/85">
              Ovelhas demasiado magras podem apresentar menor desempenho
              reprodutivo, enquanto animais excessivamente gordos também podem
              ter problemas de eficiência. O objetivo é trabalhar com animais
              em condição adequada para a fase produtiva, e não simplesmente
              procurar o maior peso possível.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
              <h3 className="text-xl font-bold">Muito magras</h3>

              <p className="mt-3 text-justify text-sm leading-7 text-white/75">
                Podem apresentar menor capacidade reprodutiva e menor
                disponibilidade de reservas para suportar gestação e lactação.
              </p>
            </div>

            <div className="rounded-3xl bg-lime-100 p-6 text-slate-900">
              <h3 className="text-xl font-bold">Condição adequada</h3>

              <p className="mt-3 text-justify text-sm leading-7 text-slate-700">
                Permite iniciar a reprodução com reservas corporais compatíveis
                com as exigências da monta, gestação e início da lactação.
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
              <h3 className="text-xl font-bold">Excessivamente gordas</h3>

              <p className="mt-3 text-justify text-sm leading-7 text-white/75">
                O excesso de gordura não deve ser confundido com boa condição
                produtiva. O equilíbrio nutricional é mais importante.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/15 bg-black/10 p-6">
            <p className="text-justify text-sm leading-7 text-white/75">
              A alimentação de preparação, frequentemente chamada de
              “flushing”, pode ser utilizada em determinadas situações para
              melhorar a condição corporal das ovelhas antes e durante a monta.
              A sua necessidade depende da condição inicial dos animais,
              disponibilidade de pastagem e sistema de produção; não deve ser
              aplicada automaticamente a todo o rebanho.
            </p>
          </div>
        </div>
      </section>

      {/* CIO */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
              Fisiologia
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              Cio e ciclo reprodutivo
            </h2>

            <p className="mt-5 text-justify text-[16px] leading-8 text-slate-600">
              O cio corresponde ao período em que a fêmea apresenta
              receptividade sexual. A manifestação pode variar conforme a
              raça, estação, condição corporal, presença do macho, idade,
              lactação e condições ambientais.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">
              O que observar no campo?
            </h3>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Maior interesse pelo carneiro.",
                "Tentativa de permanecer próxima do macho.",
                "Comportamento diferente do habitual.",
                "Aceitação da monta.",
                "Agitação ou alterações na interação com outras ovelhas.",
                "Sinais físicos que devem ser avaliados juntamente com o comportamento.",
              ].map((texto) => (
                <div
                  key={texto}
                  className="rounded-2xl bg-[#f3f7f0] p-5 text-sm leading-7 text-slate-700"
                >
                  {texto}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border-l-4 border-emerald-700 bg-emerald-50 p-5">
              <p className="text-justify text-sm leading-7 text-emerald-950">
                Em rebanhos extensivos, a observação do cio pode ser difícil.
                Por isso, o maneio deve ser organizado de forma a facilitar a
                identificação das fêmeas, acompanhar o comportamento e manter
                registos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CARNEIRO */}
      <section className="bg-[#edf3eb] py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
              Macho reprodutor
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              O carneiro merece uma avaliação própria
            </h2>

            <p className="mt-5 text-justify text-[16px] leading-8 text-slate-700">
              Não é correto avaliar a reprodução apenas pelas características
              das ovelhas. O carneiro precisa apresentar boa saúde geral,
              condição corporal adequada, aprumos funcionais, capacidade de
              deslocação e aparelho reprodutor sem alterações evidentes.
              Testículos, epidídimos e estruturas associadas devem ser
              avaliados por profissional habilitado quando houver suspeita de
              alteração.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Saúde geral",
                "Ausência de sinais clínicos que comprometam a capacidade reprodutiva.",
              ],
              [
                "Testículos",
                "Tamanho, consistência e ausência de alterações devem ser avaliados.",
              ],
              [
                "Aprumos",
                "O macho precisa deslocar-se e realizar a monta sem limitação importante.",
              ],
              [
                "Libido",
                "O comportamento sexual é parte importante da avaliação do reprodutor.",
              ],
            ].map(([titulo, texto]) => (
              <article
                key={titulo}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {titulo}
                </h3>

                <p className="mt-3 text-justify text-sm leading-7 text-slate-600">
                  {texto}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-white p-7 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">
              Uma questão importante: Brucella ovis
            </h3>

            <p className="mt-4 max-w-5xl text-justify text-sm leading-7 text-slate-700">
              A epididimite ovina associada a <em>Brucella ovis</em> pode
              provocar lesões genitais e redução da fertilidade nos carneiros,
              além de problemas reprodutivos nas ovelhas. Quando existe
              suspeita de doença reprodutiva, é importante procurar avaliação
              veterinária e investigação diagnóstica.
            </p>

            <p className="mt-4 max-w-5xl text-justify text-sm leading-7 text-slate-700">
              Portanto, um carneiro com alterações testiculares não deve ser
              simplesmente colocado na reprodução. Deve ser avaliado e,
              quando indicado, submetido a investigação diagnóstica.
            </p>
          </div>
        </div>
      </section>

      {/* MONTA */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
            Sistemas de reprodução
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900">
            Monta natural, monta controlada e tecnologias reprodutivas
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <article className="rounded-3xl border border-slate-200 bg-white p-7">
            <h3 className="text-xl font-bold text-slate-900">
              Monta natural
            </h3>

            <p className="mt-4 text-justify text-sm leading-7 text-slate-600">
              É o sistema mais simples e comum em muitos sistemas de criação.
              O carneiro é colocado com as fêmeas durante um período definido.
              Mesmo sendo simples, deve haver identificação dos animais,
              registo do período de exposição e acompanhamento da condição do
              reprodutor.
            </p>
          </article>

          <article className="rounded-3xl border border-emerald-200 bg-emerald-50 p-7">
            <h3 className="text-xl font-bold text-slate-900">
              Monta controlada
            </h3>

            <p className="mt-4 text-justify text-sm leading-7 text-slate-700">
              Permite organizar melhor os grupos de reprodução e conhecer o
              período aproximado das coberturas. É especialmente útil para
              produtores que pretendem melhorar os registos e selecionar
              descendentes de determinados reprodutores.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-7">
            <h3 className="text-xl font-bold text-slate-900">
              Inseminação artificial
            </h3>

            <p className="mt-4 text-justify text-sm leading-7 text-slate-600">
              Pode ser utilizada em programas de melhoramento genético, mas
              exige infraestrutura, conhecimento técnico, preparação das
              fêmeas e acompanhamento especializado. Não deve ser apresentada
              como substituição automática da monta natural nas explorações
              familiares.
            </p>
          </article>
        </div>
      </section>

      {/* GESTAÇÃO */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
                Gestação
              </p>

              <h2 className="mt-2 text-3xl font-black text-slate-900">
                Depois da monta começa outra fase crítica
              </h2>

              <div className="mt-6 space-y-5 text-justify text-[16px] leading-8 text-slate-700">
                <p>
                  A ovelha gestante precisa de alimentação adequada, acesso
                  permanente a água limpa, controlo sanitário e redução de
                  fatores de stress. As exigências nutricionais aumentam à
                  medida que a gestação avança, sobretudo devido ao crescimento
                  dos fetos e à preparação da glândula mamária.
                </p>

                <p>
                  A identificação das fêmeas gestantes permite organizar melhor
                  o rebanho. Quando disponível, a ultrassonografia pode ser
                  utilizada por profissional capacitado para diagnóstico e
                  acompanhamento da gestação.
                </p>

                <p>
                  A fase final da gestação merece atenção especial porque
                  problemas nutricionais ou sanitários podem repercutir na
                  sobrevivência dos cordeiros e na produção de leite da mãe.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src={imagens.africa}
                alt="Ovelha com cordeiros em ambiente de criação"
                className="h-[430px] w-full object-cover"
              />

              <div className="bg-slate-900 p-5 text-sm leading-6 text-white/80">
                Referência visual de sistema de criação de ovinos em ambiente
                africano. A imagem não deve ser interpretada como fotografia
                específica de Angola.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABORTOS */}
      <section className="bg-[#102d20] py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-lime-200">
              Saúde reprodutiva
            </p>

            <h2 className="mt-2 text-3xl font-black md:text-4xl">
              Aborto não deve ser tratado como um acontecimento normal
            </h2>

            <p className="mt-6 text-justify text-[16px] leading-8 text-white/80">
              Quando várias ovelhas abortam num período relativamente curto,
              existe motivo para investigação. Doenças infecciosas, problemas
              nutricionais, intoxicações, stress e outras causas podem estar
              envolvidas. A brucelose é uma das doenças que pode causar aborto
              e falhas reprodutivas em ovinos.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <div className="rounded-3xl bg-white/10 p-6">
                <h3 className="font-bold">Registar</h3>

                <p className="mt-3 text-sm leading-7 text-white/70">
                  Identificar a ovelha, data aproximada, fase da gestação e
                  sinais observados.
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-6">
                <h3 className="font-bold">Proteger</h3>

                <p className="mt-3 text-sm leading-7 text-white/70">
                  Utilizar medidas de higiene e proteção ao manipular fetos,
                  placenta e secreções.
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-6">
                <h3 className="font-bold">Investigar</h3>

                <p className="mt-3 text-sm leading-7 text-white/70">
                  Procurar assistência veterinária e diagnóstico laboratorial
                  quando indicado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTO */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
              Parto
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              Preparação para o nascimento dos cordeiros
            </h2>

            <div className="mt-6 space-y-5 text-justify text-[16px] leading-8 text-slate-700">
              <p>
                O local destinado às fêmeas próximas do parto deve estar limpo,
                seco, protegido das condições climáticas adversas e organizado
                para permitir observação. O objetivo não é criar um ambiente
                excessivamente sofisticado, mas reduzir riscos evitáveis.
              </p>

              <p>
                A ovelha deve ser observada sem manipulação desnecessária. O
                comportamento muda à medida que o parto se aproxima, e o
                produtor deve conhecer os sinais normais e saber quando a
                situação exige assistência.
              </p>

              <p>
                Partos difíceis podem resultar em perda do cordeiro e lesões
                para a mãe. Quando existe progressão inadequada do parto ou
                dúvida sobre a posição fetal, a assistência de um profissional
                capacitado é indicada.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
            <img
              src={imagens.abrigo}
              alt="Ovelha e cordeiro numa área de parto"
              className="h-[390px] w-full object-cover"
            />

            <div className="p-5">
              <h3 className="font-bold text-slate-900">
                Ambiente de parto
              </h3>

              <p className="mt-2 text-justify text-sm leading-7 text-slate-600">
                Uma área seca, limpa e protegida facilita a observação da mãe e
                do cordeiro e ajuda a reduzir riscos ambientais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORDEIRO / COLOSTRO */}
      <section className="bg-[#edf3eb] py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
              <img
                src={imagens.cordeiro}
                alt="Ovelha com cordeiro recém-nascido"
                className="h-[430px] w-full object-cover"
              />

              <div className="p-5 text-sm leading-6 text-slate-600">
                Relação mãe-cordeiro durante o período inicial de vida.
              </div>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
                Primeiras horas
              </p>

              <h2 className="mt-2 text-3xl font-black text-slate-900">
                O sucesso reprodutivo termina no nascimento?
              </h2>

              <div className="mt-6 space-y-5 text-justify text-[16px] leading-8 text-slate-700">
                <p>
                  Não. Uma exploração pode apresentar boa taxa de gestação e
                  ainda perder grande parte do resultado económico devido à
                  mortalidade neonatal. Por isso, a reprodução deve ser
                  acompanhada até ao desmame.
                </p>

                <p>
                  O cordeiro recém-nascido precisa de atenção especial à
                  ingestão adequada de colostro, temperatura corporal,
                  capacidade de mamar, higiene do umbigo, comportamento e
                  proteção contra condições ambientais adversas.
                </p>

                <p>
                  O acompanhamento da mãe também é essencial. Deve-se observar
                  o úbere, produção de leite, comportamento materno e sinais de
                  doença ou dor.
                </p>
              </div>

              <div className="mt-7 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="font-bold text-slate-900">
                  Pergunta importante para o produtor
                </h3>

                <p className="mt-3 text-justify text-sm leading-7 text-slate-600">
                  Quantos cordeiros nasceram e quantos chegaram efetivamente
                  ao desmame? Esta diferença mostra por que a reprodução deve
                  ser avaliada como um processo completo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMAS REPRODUTIVOS */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
            Diagnóstico de problemas
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900">
            Quando a reprodução não apresenta o resultado esperado
          </h2>

          <p className="mt-5 text-justify text-slate-600">
            Em vez de procurar uma única causa, o produtor deve analisar
            simultaneamente alimentação, saúde, qualidade dos reprodutores,
            calendário, ambiente e registos.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="space-y-3">
            {problemas.map((problema) => (
              <button
                key={problema.id}
                type="button"
                onClick={() => setProblemaAtivo(problema.id)}
                className={`w-full rounded-2xl border p-5 text-left transition ${
                  problemaAtivo === problema.id
                    ? "border-emerald-700 bg-emerald-900 text-white shadow-lg"
                    : "border-slate-200 bg-white hover:border-emerald-300"
                }`}
              >
                <div className="font-bold">{problema.titulo}</div>

                <div
                  className={`mt-2 text-sm leading-6 ${
                    problemaAtivo === problema.id
                      ? "text-white/75"
                      : "text-slate-500"
                  }`}
                >
                  {problema.resumo}
                </div>
              </button>
            ))}
          </div>

          <div className="rounded-3xl bg-[#f0f5ed] p-8">
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
              Análise
            </p>

            <h3 className="mt-3 text-2xl font-black text-slate-900">
              {problemaSelecionado.titulo}
            </h3>

            <p className="mt-5 text-justify text-[16px] leading-8 text-slate-700">
              {problemaSelecionado.detalhe}
            </p>

            <div className="mt-7 rounded-2xl border-l-4 border-emerald-700 bg-white p-5">
              <p className="text-sm font-bold text-slate-900">
                Regra de investigação
              </p>

              <p className="mt-2 text-justify text-sm leading-7 text-slate-600">
                Um problema reprodutivo repetido merece investigação e não
                apenas tratamento empírico. Registos e diagnóstico aumentam a
                possibilidade de encontrar a causa verdadeira.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SANIDADE REPRODUTIVA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
              Reprodução e sanidade
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              Doenças podem aparecer primeiro como um problema reprodutivo
            </h2>

            <p className="mt-6 text-justify text-[16px] leading-8 text-slate-700">
              Abortos, nascimento de cordeiros fracos, infertilidade, baixa
              taxa de concepção e alterações nos carneiros podem ser sinais de
              problemas sanitários. A brucelose é um exemplo importante porque
              pode provocar aborto e falhas reprodutivas em ovinos.
            </p>

            <p className="mt-5 text-justify text-[16px] leading-8 text-slate-700">
              A língua azul também pode causar alterações clínicas em ovinos e,
              em determinadas situações, aborto. A transmissão está associada
              principalmente a insetos vetores, o que torna o ambiente e a
              vigilância epidemiológica importantes.
            </p>
          </div>
        </div>
      </section>

      {/* ANGOLA */}
      <section className="bg-[#102d20] py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-lime-200">
              Realidade angolana
            </p>

            <h2 className="mt-2 text-3xl font-black md:text-4xl">
              Reprodução de ovinos em Angola
            </h2>

            <div className="mt-6 space-y-5 text-justify text-[16px] leading-8 text-white/80">
              <p>
                Angola possui sistemas de produção muito diferentes entre as
                regiões. O sul apresenta condições de maior aridez e forte
                dependência da disponibilidade de pastagem e água, enquanto
                outras regiões apresentam maior disponibilidade de vegetação
                durante determinados períodos do ano.
              </p>

              <p>
                Os dados do RAPP 2019/2020 mostraram uma presença importante de
                ovinos em várias províncias. Esses dados são históricos e não
                devem ser apresentados como se fossem uma fotografia de 2026.
              </p>

              <p>
                O INE realizou posteriormente o ICAPP e publicou resultados
                referentes às campanhas 2023/2024 e 2024/2025. O novo sistema
                foi criado para melhorar a atualização das estatísticas
                agropecuárias nacionais.
              </p>

              <p>
                Na produção de carne, o INE registou 261 toneladas de carne
                ovina no primeiro semestre de 2025, praticamente estável em
                relação às 262 toneladas do primeiro semestre de 2024. Este
                indicador demonstra a dimensão da produção formal de carne
                ovina, mas não representa sozinho o tamanho do efetivo ovino
                nacional.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl bg-white/10 p-7">
              <p className="text-sm text-lime-200">Sul de Angola</p>

              <h3 className="mt-2 text-xl font-bold">
                Água e disponibilidade forrageira
              </h3>

              <p className="mt-3 text-justify text-sm leading-7 text-white/70">
                A seca e a variabilidade das pastagens podem influenciar
                diretamente a condição corporal e, consequentemente, a
                reprodução.
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-7">
              <p className="text-sm text-lime-200">Centro</p>

              <h3 className="mt-2 text-xl font-bold">
                Alimentação e calendário
              </h3>

              <p className="mt-3 text-justify text-sm leading-7 text-white/70">
                A disponibilidade sazonal de pastagens deve ser relacionada
                com o momento da monta, gestação e parto.
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-7">
              <p className="text-sm text-lime-200">Todo o país</p>

              <h3 className="mt-2 text-xl font-bold">
                Registos produtivos
              </h3>

              <p className="mt-3 text-justify text-sm leading-7 text-white/70">
                A identificação individual ou por lote permite transformar a
                exploração numa fonte de informação para decisões futuras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REGISTOS */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
              Gestão
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              O produtor deve registar a reprodução
            </h2>

            <p className="mt-5 text-justify text-[16px] leading-8 text-slate-700">
              Sem registos, torna-se difícil saber quais ovelhas produzem
              regularmente, quais apresentam problemas, quais carneiros geram
              melhores descendentes e onde estão as perdas. Mesmo numa
              exploração pequena, um caderno ou sistema digital simples pode
              melhorar muito a tomada de decisão.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-2 border-b border-slate-200 bg-[#edf3eb]">
              <div className="p-5 font-bold">Registo</div>
              <div className="p-5 font-bold">Informação</div>
            </div>

            {[
              ["Animal", "Número ou identificação"],
              ["Monta", "Data e carneiro utilizado"],
              ["Gestação", "Diagnóstico quando disponível"],
              ["Parto", "Data e ocorrência"],
              ["Cordeiros", "Número nascido e sobreviventes"],
              ["Desmame", "Data e número desmamado"],
            ].map(([a, b]) => (
              <div
                key={a}
                className="grid grid-cols-2 border-b border-slate-100 last:border-0"
              >
                <div className="p-5 text-sm font-semibold text-slate-800">
                  {a}
                </div>

                <div className="p-5 text-sm text-slate-600">{b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDICADORES */}
      <section className="bg-[#f0f5ed] py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
              Indicadores
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              Como medir o desempenho reprodutivo
            </h2>

            <p className="mt-5 text-justify text-slate-600">
              Estes indicadores ajudam estudantes, técnicos, investigadores e
              produtores a transformar observações do rebanho em informação
              útil.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="hidden grid-cols-[0.4fr_0.8fr] bg-[#103b28] text-white md:grid">
              <div className="p-5 font-bold">Indicador</div>
              <div className="p-5 font-bold">Interpretação</div>
            </div>

            {indicadores.map((item) => (
              <div
                key={item.nome}
                className="grid border-b border-slate-100 last:border-0 md:grid-cols-[0.4fr_0.8fr]"
              >
                <div className="p-5 font-bold text-slate-900">
                  {item.nome}
                </div>

                <div className="p-5 text-justify text-sm leading-7 text-slate-600">
                  {item.explicacao}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTIGAÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="rounded-[2rem] bg-[#103b28] p-8 text-white md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-lime-200">
            Investigação em Angola
          </p>

          <h2 className="mt-2 max-w-4xl text-3xl font-black md:text-4xl">
            O que ainda precisamos estudar sobre a reprodução de ovinos?
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Caracterização das raças e tipos genéticos existentes em Angola.",
              "Época de reprodução dos ovinos nas diferentes regiões do país.",
              "Relação entre seca, condição corporal e fertilidade.",
              "Taxas de aborto e principais causas sanitárias.",
              "Desempenho reprodutivo dos carneiros utilizados pelos produtores.",
              "Mortalidade neonatal e fatores associados.",
              "Efeito da alimentação na prolificidade.",
              "Melhoramento genético adaptado às condições angolanas.",
              "Utilização de registos produtivos em explorações familiares.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white/10 p-5 text-sm leading-7 text-white/80"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-12">
          <h2 className="text-2xl font-black text-slate-900">
            Fontes técnicas e institucionais
          </h2>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <a
              href="https://www.ine.gov.ao/publicacoes/detalhes/NTM0NzU="
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-emerald-600 hover:bg-emerald-50"
            >
              <strong className="text-slate-900">
                INE — ICAPP 2024/2025
              </strong>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Resultados oficiais do Inquérito Contínuo Agro-Pecuário e
                Pescas de Angola.
              </p>
            </a>

            <a
              href="https://www.fao.org/4/x6542e/X6542E05.htm"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-emerald-600 hover:bg-emerald-50"
            >
              <strong className="text-slate-900">
                FAO — Intensive sheep production
              </strong>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Referência técnica sobre maneio do rebanho reprodutor,
                condição corporal e preparação dos carneiros e ovelhas.
              </p>
            </a>

            <a
              href="https://www.woah.org/en/disease/brucellosis/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-emerald-600 hover:bg-emerald-50"
            >
              <strong className="text-slate-900">
                WOAH — Brucellosis
              </strong>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Informação veterinária sobre brucelose, aborto e problemas
                reprodutivos.
              </p>
            </a>

            <a
              href="https://www.woah.org/en/disease/ovine-epididymitis-brucella-ovis/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-emerald-600 hover:bg-emerald-50"
            >
              <strong className="text-slate-900">
                WOAH — Brucella ovis
              </strong>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Referência sobre epididimite ovina e redução da fertilidade dos
                carneiros.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="bg-[#f4f7f2]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
          <Link
            href="/pecuaria/ovinos/orientacoes/sanidade"
            className="rounded-2xl border border-slate-300 bg-white px-6 py-4 font-semibold text-slate-800 transition hover:border-emerald-700 hover:text-emerald-800"
          >
            ← Tema anterior: Sanidade
          </Link>

          <Link
            href="/pecuaria/ovinos/orientacoes/cordeiros"
            className="rounded-2xl bg-emerald-800 px-6 py-4 font-semibold text-white transition hover:bg-emerald-900"
          >
            Próximo tema: Cordeiros →
          </Link>
        </div>
      </section>
    </main>
  );
}