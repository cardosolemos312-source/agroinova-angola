"use client";

import Link from "next/link";
import { useState } from "react";

const imagens = {
  hero:
    "https://agroanuncios.ao/oc-content/uploads/15/2498.jpg",
  cordeiro:
    "https://cdn.24.co.za/files/Cms/General/d/10883/11d158b92eea4df8be203290f4868619.jpg",
  campo:
    "https://pbs.twimg.com/media/HCat5hdWsAArVdd.jpg",
  abrigo:
    "https://cax-wp-farmers-prod-uploads.s3.amazonaws.com/app/uploads/2022/05/Lambing-pens-ewe-and-lamb.jpg",
  africa:
    "https://buellsport-naukluft.com/wp-content/uploads/2021/10/21-10-02-lamb-twins-ewe-box-bsp-smph-21-09-web-800-x-558.jpg",
};

const fases = [
  {
    id: "nascimento",
    titulo: "Nascimento",
    resumo:
      "As primeiras horas de vida são determinantes para a sobrevivência do cordeiro.",
    detalhe:
      "Depois do nascimento, o cordeiro deve ser observado quanto à respiração, capacidade de permanecer em estação, procura da mama, comportamento e ligação com a mãe. O ambiente deve estar seco, limpo e protegido de frio, chuva, vento excessivo e outros fatores ambientais que possam aumentar a mortalidade neonatal.",
  },
  {
    id: "colostro",
    titulo: "Colostro",
    resumo:
      "A ingestão adequada de colostro é uma das prioridades das primeiras horas.",
    detalhe:
      "O colostro fornece energia e componentes importantes para a proteção imunológica do cordeiro. A capacidade de mamar deve ser observada individualmente. Cordeiros fracos, órfãos ou rejeitados exigem atenção imediata e orientação técnica para garantir alimentação adequada.",
  },
  {
    id: "umbigo",
    titulo: "Umbigo",
    resumo:
      "A higiene do umbigo ajuda a reduzir o risco de infeções neonatais.",
    detalhe:
      "O umbigo constitui uma possível porta de entrada para agentes infecciosos. A exploração deve manter o local de nascimento limpo e seguir um protocolo veterinário de higiene e desinfeção quando recomendado. Inchaço, secreção, dor ou alterações no comportamento devem motivar avaliação.",
  },
  {
    id: "crescimento",
    titulo: "Crescimento",
    resumo:
      "O desenvolvimento deve ser acompanhado desde as primeiras semanas.",
    detalhe:
      "O crescimento depende da genética, produção de leite da mãe, qualidade da alimentação, saúde, disponibilidade de água e condições ambientais. Pesagens periódicas ou outros métodos de acompanhamento permitem identificar precocemente cordeiros que estão a crescer abaixo do esperado.",
  },
  {
    id: "desmame",
    titulo: "Desmame",
    resumo:
      "O desmame deve ser planeado para reduzir stress e perdas de desempenho.",
    detalhe:
      "A preparação para o desmame começa antes da separação da mãe. O cordeiro precisa desenvolver capacidade de consumir alimentos sólidos e ter acesso adequado a água. A idade e o método de desmame devem considerar o sistema de produção, condição dos animais, alimentação disponível e objetivos da exploração.",
  },
];

const problemas = [
  {
    titulo: "Cordeiro não mama",
    texto:
      "Pode estar relacionado com fraqueza, hipotermia, dificuldade de encontrar a mama, rejeição materna, problemas no úbere ou doença. O cordeiro deve ser observado imediatamente e, quando necessário, avaliado por técnico ou médico veterinário.",
  },
  {
    titulo: "Diarreia",
    texto:
      "A diarreia neonatal pode provocar rapidamente perda de líquidos e eletrólitos. As causas são variadas e podem envolver agentes infecciosos, alimentação, higiene e condições ambientais. A investigação deve considerar idade, número de animais afetados, mortalidade e condições do ambiente.",
  },
  {
    titulo: "Cordeiro muito fraco",
    texto:
      "Fraqueza pode estar associada a falta de colostro, hipotermia, fome, infeção ou outros problemas. Não deve ser considerada apenas uma característica individual sem investigar as condições de nascimento e alimentação.",
  },
  {
    titulo: "Mortalidade elevada",
    texto:
      "Quando vários cordeiros morrem no mesmo período, o produtor deve procurar uma causa comum. Registos de nascimento, mortalidade, idade dos cordeiros e sinais clínicos são fundamentais para a investigação.",
  },
];

export default function CordeirosOvinosPage() {
  const [faseAtiva, setFaseAtiva] = useState("nascimento");

  const faseSelecionada =
    fases.find((fase) => fase.id === faseAtiva) ?? fases[0];

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

        <div className="absolute inset-0 bg-[#102d20]/82" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-28">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-lime-200">
              AGROINOVA ANGOLA • PECUÁRIA • OVINOS
            </p>

            <h1 className="text-4xl font-black leading-tight text-white md:text-6xl">
              Cordeiros
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/90 md:text-xl">
              Guia técnico e académico sobre nascimento, colostro, cuidados
              neonatais, alimentação, crescimento, sanidade, mortalidade,
              desmame e maneio dos cordeiros nos sistemas de produção ovina em
              Angola.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Nascimento",
                "Colostro",
                "Sanidade",
                "Crescimento",
                "Desmame",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur"
                >
                  {item}
                </span>
              ))}
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

          <span className="text-slate-600">Cordeiros</span>
        </div>
      </div>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
              Maneio de cordeiros
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl">
              A eficiência do rebanho também se mede pela sobrevivência dos
              cordeiros
            </h2>

            <div className="mt-6 space-y-5 text-[16px] leading-8 text-slate-700">
              <p className="text-justify">
                A produção de cordeiros é um dos principais resultados de uma
                exploração ovina. Entretanto, uma boa taxa de gestação ou um
                elevado número de partos não garante automaticamente bons
                resultados produtivos. O produtor precisa assegurar que os
                cordeiros nasçam em condições adequadas, recebam alimentação
                suficiente, permaneçam saudáveis e atinjam o desmame com bom
                desenvolvimento.
              </p>

              <p className="text-justify">
                O período neonatal é particularmente importante porque o
                cordeiro apresenta elevada vulnerabilidade às condições
                ambientais, à falta de alimento e às infeções. A qualidade do
                maneio realizado nas primeiras horas e nos primeiros dias pode
                influenciar significativamente a sobrevivência e o crescimento.
              </p>

              <p className="text-justify">
                Em Angola, o maneio precisa considerar a grande diversidade dos
                sistemas de criação. Explorações familiares, sistemas
                extensivos, semi-intensivos e unidades mais tecnificadas podem
                apresentar necessidades muito diferentes.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-[#103b28] p-7 text-white shadow-xl">
            <p className="text-sm font-bold uppercase tracking-widest text-lime-200">
              Princípio fundamental
            </p>

            <p className="mt-5 text-2xl font-bold leading-9">
              O cordeiro precisa sobreviver, crescer e chegar ao desmame.
            </p>

            <div className="mt-7 space-y-4 border-t border-white/20 pt-6 text-sm leading-7 text-white/80">
              <p>
                Nascimento, alimentação, sanidade, ambiente e acompanhamento
                devem ser considerados como partes do mesmo sistema.
              </p>

              <p>
                Cada morte neonatal representa uma perda produtiva e também
                pode indicar um problema de maneio que afeta outros animais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGEM PRINCIPAL */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-3xl bg-slate-200 shadow-xl">
              <img
                src={imagens.cordeiro}
                alt="Ovelha e cordeiro em sistema de criação"
                className="h-[440px] w-full object-cover"
              />

              <div className="bg-white px-5 py-4 text-sm leading-6 text-slate-600">
                Imagem utilizada como referência visual para o maneio
                mãe-cordeiro.
              </div>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
                Relação mãe-cordeiro
              </p>

              <h2 className="mt-2 text-3xl font-black text-slate-900">
                A mãe é parte central da sobrevivência do cordeiro
              </h2>

              <div className="mt-6 space-y-5 text-justify text-[16px] leading-8 text-slate-700">
                <p>
                  A produção de leite da ovelha, o comportamento materno e a
                  capacidade do cordeiro de encontrar e mamar na mama
                  influenciam diretamente o desenvolvimento inicial.
                </p>

                <p>
                  Depois do parto, a observação da interação entre mãe e
                  cordeiro permite identificar situações que necessitam de
                  intervenção. Uma ovelha pode apresentar dificuldade de
                  aceitar o cordeiro, problemas no úbere ou produção insuficiente
                  de leite.
                </p>

                <p>
                  A identificação precoce permite tomar decisões de maneio
                  antes que o problema resulte em perda de peso, desidratação
                  ou morte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIMEIRAS HORAS */}
      <section className="bg-[#103b28] py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-lime-200">
              Primeiras horas
            </p>

            <h2 className="mt-2 text-3xl font-black md:text-4xl">
              O que observar imediatamente após o nascimento?
            </h2>

            <p className="mt-6 text-justify text-[16px] leading-8 text-white/80">
              As primeiras horas são uma fase crítica. O produtor deve
              observar se o cordeiro respira normalmente, se consegue
              levantar-se, se procura a mama e se existe ligação adequada com
              a mãe. Também deve observar o ambiente onde o nascimento ocorreu.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Respiração",
                "Verificar se o cordeiro apresenta respiração normal e comportamento ativo.",
              ],
              [
                "Temperatura",
                "Evitar exposição prolongada ao frio, chuva, vento ou superfícies húmidas.",
              ],
              [
                "Mamada",
                "Confirmar que o cordeiro consegue encontrar e mamar na mãe.",
              ],
              [
                "Comportamento",
                "Observar capacidade de permanecer em estação e interagir com a mãe.",
              ],
            ].map(([titulo, texto]) => (
              <article
                key={titulo}
                className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10"
              >
                <h3 className="text-xl font-bold">{titulo}</h3>

                <p className="mt-3 text-justify text-sm leading-7 text-white/75">
                  {texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COLOSTRO */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
              Alimentação neonatal
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              Colostro: uma prioridade das primeiras horas
            </h2>

            <p className="mt-5 text-justify text-[16px] leading-8 text-slate-600">
              O colostro é a primeira secreção mamária produzida pela ovelha
              após o parto e possui elevada importância nutricional e
              imunológica. O cordeiro precisa receber colostro em quantidade
              adequada e em tempo adequado.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">
              Quando o produtor deve prestar atenção?
            </h3>

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {[
                "Cordeiro que não consegue mamar.",
                "Mãe que rejeita o cordeiro.",
                "Produção insuficiente de leite.",
                "Problemas no úbere.",
                "Cordeiro fraco ou excessivamente quieto.",
                "Parto difícil ou prolongado.",
                "Mãe sem comportamento materno adequado.",
                "Nascimento em ambiente frio, molhado ou inadequado.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-[#f1f6ef] p-5 text-sm leading-7 text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-2xl border-l-4 border-emerald-700 bg-emerald-50 p-5">
              <p className="text-justify text-sm leading-7 text-emerald-950">
                Quando o cordeiro não mama ou a mãe não consegue alimentá-lo
                adequadamente, deve-se procurar orientação de um médico
                veterinário ou técnico capacitado para definir a melhor
                estratégia de alimentação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FASES INTERATIVAS */}
      <section className="bg-[#edf3eb] py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
              Maneio por fase
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              A atenção muda à medida que o cordeiro cresce
            </h2>

            <p className="mt-5 text-justify text-slate-600">
              Cada fase apresenta riscos diferentes. O produtor deve adaptar o
              maneio ao sistema de produção, à idade e às condições ambientais.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="space-y-3">
              {fases.map((fase) => (
                <button
                  key={fase.id}
                  type="button"
                  onClick={() => setFaseAtiva(fase.id)}
                  className={`w-full rounded-2xl border p-5 text-left transition ${
                    faseAtiva === fase.id
                      ? "border-emerald-700 bg-emerald-900 text-white shadow-lg"
                      : "border-slate-200 bg-white hover:border-emerald-300"
                  }`}
                >
                  <div className="font-bold">{fase.titulo}</div>

                  <div
                    className={`mt-2 text-sm leading-6 ${
                      faseAtiva === fase.id
                        ? "text-white/75"
                        : "text-slate-500"
                    }`}
                  >
                    {fase.resumo}
                  </div>
                </button>
              ))}
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                Orientação técnica
              </p>

              <h3 className="mt-3 text-2xl font-black text-slate-900">
                {faseSelecionada.titulo}
              </h3>

              <p className="mt-5 text-justify text-[16px] leading-8 text-slate-700">
                {faseSelecionada.detalhe}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UMBIGO */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
              Higiene
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              O umbigo merece atenção
            </h2>

            <div className="mt-6 space-y-5 text-justify text-[16px] leading-8 text-slate-700">
              <p>
                O umbigo pode funcionar como porta de entrada para agentes
                infecciosos durante o período neonatal. Por isso, a higiene
                das instalações e o maneio adequado no nascimento são
                importantes.
              </p>

              <p>
                O produtor deve observar sinais como aumento de volume,
                secreção, dor, calor local ou alterações no comportamento do
                cordeiro.
              </p>

              <p>
                Protocolos de desinfeção devem seguir orientação veterinária e
                considerar os produtos disponíveis e aprovados para utilização
                no sistema de produção.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-[#103b28] p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold">
              Ambiente limpo é parte da prevenção
            </h3>

            <div className="mt-7 space-y-4">
              {[
                "Manter a área de parto limpa.",
                "Evitar acumulação de matéria orgânica.",
                "Reduzir humidade excessiva.",
                "Separar animais doentes quando indicado.",
                "Observar diariamente os cordeiros.",
              ].map((item) => (
                <div
                  key={item}
                  className="border-b border-white/10 pb-4 text-sm leading-7 text-white/80 last:border-0"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ALIMENTAÇÃO */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
              Crescimento
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              Alimentação depois das primeiras semanas
            </h2>

            <div className="mt-6 space-y-5 text-justify text-[16px] leading-8 text-slate-700">
              <p>
                À medida que o cordeiro cresce, o leite materno continua a ser
                importante, mas o desenvolvimento do sistema digestivo permite
                progressivamente o consumo de alimentos sólidos.
              </p>

              <p>
                O acesso a alimentos de boa qualidade e água limpa deve ser
                planeado de acordo com o sistema de produção. Em sistemas mais
                intensivos pode existir alimentação complementar específica
                para cordeiros, enquanto sistemas extensivos dependem mais
                fortemente da pastagem e da produção de leite das mães.
              </p>

              <p>
                A introdução de alimentos deve ser acompanhada para evitar
                mudanças bruscas que possam provocar problemas digestivos. A
                qualidade da alimentação é tão importante quanto a quantidade.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              [
                "Leite materno",
                "Principal fonte de alimentação durante a fase inicial e elemento central do crescimento do cordeiro.",
              ],
              [
                "Alimento sólido",
                "Deve ser introduzido progressivamente conforme o sistema de produção e os objetivos do produtor.",
              ],
              [
                "Água",
                "O acesso a água limpa e adequada torna-se cada vez mais importante à medida que aumenta o consumo de alimentos sólidos.",
              ],
            ].map(([titulo, texto]) => (
              <article
                key={titulo}
                className="rounded-3xl border border-slate-200 bg-[#f8faf7] p-7"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {titulo}
                </h3>

                <p className="mt-4 text-justify text-sm leading-7 text-slate-600">
                  {texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGEM AFRICA */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src={imagens.africa}
              alt="Ovelha com cordeiros"
              className="h-[430px] w-full object-cover"
            />

            <div className="bg-slate-900 p-5 text-sm leading-6 text-white/80">
              Referência visual de criação de ovinos em ambiente africano.
              Não representa necessariamente uma exploração angolana.
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
              Ambiente
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              O ambiente pode decidir entre sobrevivência e perda
            </h2>

            <div className="mt-6 space-y-5 text-justify text-[16px] leading-8 text-slate-700">
              <p>
                Cordeiros recém-nascidos apresentam elevada sensibilidade às
                condições ambientais. Chuva, vento, frio, lama, excesso de
                humidade e falta de abrigo podem aumentar o risco de doença e
                mortalidade.
              </p>

              <p>
                Nas regiões mais secas, como partes do sul de Angola, o
                produtor precisa equilibrar proteção contra condições
                ambientais com acesso a sombra, água e áreas adequadas de
                descanso.
              </p>

              <p>
                Em zonas com maior humidade, drenagem, higiene e qualidade do
                abrigo assumem importância especial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SANIDADE */}
      <section className="bg-[#102d20] py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-lime-200">
              Sanidade neonatal
            </p>

            <h2 className="mt-2 text-3xl font-black md:text-4xl">
              Doenças e problemas que podem comprometer os cordeiros
            </h2>

            <p className="mt-6 text-justify text-[16px] leading-8 text-white/80">
              Problemas respiratórios, diarreias, infeções umbilicais,
              parasitoses, desidratação, má nutrição e outras doenças podem
              comprometer o crescimento e a sobrevivência. O diagnóstico deve
              considerar idade, sinais clínicos, alimentação, ambiente,
              histórico do rebanho e número de animais afetados.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Diarreia",
                "Observar consistência das fezes, hidratação, idade e número de animais afetados.",
              ],
              [
                "Pneumonia",
                "Alterações respiratórias, tosse, secreções ou dificuldade respiratória exigem atenção.",
              ],
              [
                "Infeção umbilical",
                "Observar o umbigo e alterações sistémicas no cordeiro.",
              ],
              [
                "Parasitas",
                "O controlo deve basear-se no sistema de criação, risco e orientação técnica.",
              ],
            ].map(([titulo, texto]) => (
              <article
                key={titulo}
                className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10"
              >
                <h3 className="text-xl font-bold">{titulo}</h3>

                <p className="mt-3 text-justify text-sm leading-7 text-white/75">
                  {texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
            Vigilância
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900">
            Problemas que não devem ser ignorados
          </h2>

          <p className="mt-5 text-justify text-slate-600">
            A observação diária permite identificar problemas antes que se
            transformem em perdas importantes.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {problemas.map((problema) => (
            <article
              key={problema.titulo}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {problema.titulo}
              </h3>

              <p className="mt-4 text-justify text-sm leading-7 text-slate-600">
                {problema.texto}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* MORTALIDADE */}
      <section className="bg-[#edf3eb] py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
                Indicador de produção
              </p>

              <h2 className="mt-2 text-3xl font-black text-slate-900">
                Mortalidade de cordeiros
              </h2>

              <div className="mt-6 space-y-5 text-justify text-[16px] leading-8 text-slate-700">
                <p>
                  A mortalidade de cordeiros é um dos indicadores mais
                  importantes para avaliar a eficiência real de uma exploração
                  ovina. Uma taxa elevada pode indicar problemas na reprodução,
                  alimentação, instalações, sanidade ou maneio.
                </p>

                <p>
                  O produtor deve registar o número de cordeiros nascidos, o
                  número de mortos, a idade aproximada no momento da morte e os
                  sinais observados.
                </p>

                <p>
                  A análise por período permite identificar padrões. Por
                  exemplo, mortalidade concentrada nas primeiras horas pode
                  apontar para problemas diferentes daqueles observados em
                  cordeiros de várias semanas.
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900">
                Perguntas para investigação
              </h3>

              <div className="mt-7 space-y-4">
                {[
                  "Em que idade ocorre a maioria das mortes?",
                  "Os cordeiros receberam colostro adequadamente?",
                  "Existe relação com a época do ano?",
                  "As mortes estão concentradas numa determinada instalação?",
                  "As mães apresentam problemas de alimentação ou saúde?",
                  "Existem sinais de doença em outros animais?",
                ].map((pergunta) => (
                  <div
                    key={pergunta}
                    className="rounded-2xl bg-[#f0f5ed] p-5 text-sm leading-7 text-slate-700"
                  >
                    {pergunta}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESMAME */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
            Desmame
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900">
            O desmame deve ser uma decisão de maneio
          </h2>

          <div className="mt-6 space-y-5 text-justify text-[16px] leading-8 text-slate-700">
            <p>
              O desmame representa uma mudança importante para o cordeiro e
              para a mãe. A decisão deve considerar o desenvolvimento do
              cordeiro, alimentação disponível, condição corporal das ovelhas,
              sistema de produção e objetivos da exploração.
            </p>

            <p>
              Separar animais sem preparação alimentar adequada pode aumentar
              o stress e prejudicar o desempenho. Antes do desmame, os cordeiros
              devem estar habituados a consumir alimentos compatíveis com o
              sistema de produção.
            </p>

            <p>
              Depois da separação, o produtor deve continuar a acompanhar peso,
              comportamento, consumo de alimento, acesso à água e sinais de
              doença.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            [
              "Preparação",
              "Garantir que os cordeiros estão suficientemente desenvolvidos e adaptados ao consumo de alimentos sólidos.",
            ],
            [
              "Separação",
              "Reduzir mudanças desnecessárias e organizar o ambiente para facilitar o acompanhamento.",
            ],
            [
              "Pós-desmame",
              "Acompanhar crescimento, alimentação, água, sanidade e adaptação ao novo sistema.",
            ],
          ].map(([titulo, texto]) => (
            <article
              key={titulo}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900">{titulo}</h3>

              <p className="mt-4 text-justify text-sm leading-7 text-slate-600">
                {texto}
              </p>
            </article>
          ))}
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
              Cordeiros nos diferentes sistemas de Angola
            </h2>

            <div className="mt-6 space-y-5 text-justify text-[16px] leading-8 text-white/80">
              <p>
                O maneio dos cordeiros não pode ser separado das condições
                ambientais e económicas da região. A disponibilidade de
                pastagens, água, mão de obra, instalações e assistência
                veterinária varia entre as províncias.
              </p>

              <p>
                Os dados históricos do RAPP 2019/2020 indicaram um efetivo
                importante de ovinos em províncias como Namibe, Uíge e Cuanza
                Sul. Esses dados são históricos e devem ser utilizados como
                referência estrutural, não como uma fotografia atual de 2026.
              </p>

              <p>
                A publicação posterior do ICAPP representa um esforço do INE
                para atualizar continuamente as estatísticas agropecuárias.
                Quando os dados provinciais detalhados estiverem disponíveis,
                devem substituir referências históricas sempre que forem
                metodologicamente comparáveis.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              [
                "Namibe e sul",
                "A disponibilidade de água, sombra e alimento durante a época seca pode influenciar fortemente a condição das mães e a sobrevivência dos cordeiros.",
              ],
              [
                "Centro",
                "A gestão da pastagem e a disponibilidade sazonal de forragem devem ser relacionadas com o período de nascimento.",
              ],
              [
                "Norte e outras regiões",
                "Humidade, parasitas, higiene das instalações e disponibilidade de alimento podem apresentar desafios diferentes.",
              ],
            ].map(([titulo, texto]) => (
              <article
                key={titulo}
                className="rounded-3xl bg-white/10 p-7 ring-1 ring-white/10"
              >
                <h3 className="text-xl font-bold">{titulo}</h3>

                <p className="mt-4 text-justify text-sm leading-7 text-white/75">
                  {texto}
                </p>
              </article>
            ))}
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
              Registar cada cordeiro transforma a exploração numa fonte de
              informação
            </h2>

            <p className="mt-5 text-justify text-[16px] leading-8 text-slate-700">
              Mesmo numa exploração familiar, o produtor pode manter registos
              simples. A informação acumulada permite identificar as melhores
              mães, os períodos de maior mortalidade, os problemas sanitários e
              as condições que favorecem o crescimento.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-2 bg-[#103b28] text-white">
              <div className="p-5 font-bold">Registo</div>
              <div className="p-5 font-bold">Informação</div>
            </div>

            {[
              ["Identificação", "Mãe, lote ou identificação individual"],
              ["Nascimento", "Data e tipo de nascimento"],
              ["Peso", "Peso ao nascimento e acompanhamentos posteriores"],
              ["Colostro", "Observação da ingestão"],
              ["Saúde", "Tratamentos, doenças e ocorrências"],
              ["Mortalidade", "Data, idade e causa suspeita"],
              ["Desmame", "Data e peso quando disponível"],
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

      {/* INVESTIGAÇÃO */}
      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 lg:px-12">
        <div className="rounded-[2rem] bg-[#103b28] p-8 text-white md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-lime-200">
            Investigação em Angola
          </p>

          <h2 className="mt-2 max-w-4xl text-3xl font-black md:text-4xl">
            O que precisamos estudar sobre os cordeiros em Angola?
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Taxas de mortalidade neonatal nas diferentes regiões.",
              "Principais causas de morte de cordeiros.",
              "Qualidade e disponibilidade de colostro.",
              "Influência da alimentação materna sobre o crescimento.",
              "Desempenho de diferentes tipos genéticos.",
              "Relação entre seca e mortalidade neonatal.",
              "Principais doenças dos cordeiros em sistemas familiares.",
              "Efeito das instalações sobre sobrevivência.",
              "Peso ao nascimento e desempenho até ao desmame.",
              "Sistemas de alimentação complementar.",
              "Qualidade da água utilizada pelos rebanhos.",
              "Estratégias de redução de perdas em sistemas extensivos.",
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
                Informação oficial sobre o Inquérito Contínuo Agro-Pecuário e
                Pescas.
              </p>
            </a>

            <a
              href="https://www.fao.org/fileadmin/templates/ess/ess_test_folder/World_Census_Agriculture/WCA_2020/WCA_2020_new_doc/ANG_REP3_POR_2019_2020.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-emerald-600 hover:bg-emerald-50"
            >
              <strong className="text-slate-900">
                FAO / INE — RAPP 2019/2020
              </strong>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Referência histórica sobre a estrutura da produção
                agropecuária em Angola.
              </p>
            </a>

            <a
              href="https://www.fao.org/4/x6542e/X6542E05.htm"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-emerald-600 hover:bg-emerald-50"
            >
              <strong className="text-slate-900">
                FAO — Intensive Sheep Production
              </strong>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Referência técnica sobre produção e maneio de ovinos.
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
                Referência veterinária sobre brucelose e problemas
                reprodutivos.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="bg-[#f4f7f2]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
          <Link
            href="/pecuaria/ovinos/orientacoes/reproducao"
            className="rounded-2xl border border-slate-300 bg-white px-6 py-4 font-semibold text-slate-800 transition hover:border-emerald-700 hover:text-emerald-800"
          >
            ← Tema anterior: Reprodução
          </Link>

          <Link
            href="/pecuaria/ovinos/orientacoes/abrigo"
            className="rounded-2xl bg-emerald-800 px-6 py-4 font-semibold text-white transition hover:bg-emerald-900"
          >
            Próximo tema: Abrigo →
          </Link>
        </div>
      </section>
    </main>
  );
}