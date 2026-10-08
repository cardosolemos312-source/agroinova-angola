"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Provincia = {
  nome: string;
  efetivo: number;
  observacao: string;
};

const provincias: Provincia[] = [
  {
    nome: "Namibe",
    efetivo: 86344,
    observacao:
      "Maior efectivo ovino registado no RAPP 2019/2020 entre as províncias então consideradas.",
  },
  {
    nome: "Uíge",
    efetivo: 35692,
    observacao:
      "Segundo maior efectivo ovino registado no levantamento estrutural.",
  },
  {
    nome: "Cuanza Sul",
    efetivo: 35118,
    observacao:
      "Terceiro maior efectivo ovino registado no RAPP 2019/2020.",
  },
  {
    nome: "Huíla",
    efetivo: 24793,
    observacao:
      "Importante actividade pecuária, com sistemas influenciados pela sazonalidade.",
  },
  {
    nome: "Cunene",
    efetivo: 23470,
    observacao:
      "Sistema pastoril sujeito à disponibilidade sazonal de água e pastagem.",
  },
  {
    nome: "Bié",
    efetivo: 20958,
    observacao:
      "Presença relevante de ovinos nas explorações familiares.",
  },
  {
    nome: "Malanje",
    efetivo: 16988,
    observacao:
      "Ovinos presentes em sistemas familiares e mistos.",
  },
  {
    nome: "Zaire",
    efetivo: 14490,
    observacao:
      "Efectivo registado no levantamento estrutural das explorações familiares.",
  },
  {
    nome: "Huambo",
    efetivo: 14348,
    observacao:
      "Presença de ovinos em sistemas familiares e agropecuários mistos.",
  },
  {
    nome: "Benguela",
    efetivo: 11975,
    observacao:
      "Actividade ovina influenciada pelas diferenças agroecológicas dentro da província.",
  },
  {
    nome: "Cabinda",
    efetivo: 11759,
    observacao:
      "Condições climáticas distintas das regiões semiáridas do sul.",
  },
  {
    nome: "Moxico",
    efetivo: 11131,
    observacao:
      "Sistemas com forte importância dos recursos naturais e pastoreio.",
  },
  {
    nome: "Lunda Norte",
    efetivo: 6703,
    observacao:
      "Efectivo registado no RAPP 2019/2020.",
  },
  {
    nome: "Lunda Sul",
    efetivo: 5861,
    observacao:
      "Efectivo registado no levantamento estrutural.",
  },
  {
    nome: "Luanda",
    efetivo: 1882,
    observacao:
      "Efectivo relativamente reduzido no levantamento familiar.",
  },
  {
    nome: "Cuanza Norte",
    efetivo: 1613,
    observacao:
      "Efectivo registado no RAPP.",
  },
  {
    nome: "Bengo",
    efetivo: 1043,
    observacao:
      "Dados referentes à configuração territorial existente no período do RAPP.",
  },
  {
    nome: "Cuando Cubango",
    efetivo: 1039,
    observacao:
      "Dado histórico anterior à actual configuração territorial das províncias.",
  },
];

const imagens = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Sheep_grazing.jpg",
    alt: "Ovinos em pastoreio",
    titulo: "Ovinos em pastoreio",
    fonte: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Sheep_grazing.jpg",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Sheep_grazing_in_field.jpg",
    alt: "Ovinos numa área de pastagem",
    titulo: "Utilização de pastagem",
    fonte: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Sheep_in_field.jpg",
    alt: "Grupo de ovinos em campo",
    titulo: "Grupo de ovinos em campo",
    fonte: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/",
  },
];

export default function PastoreioOvinosPage() {
  const [provinciaSelecionada, setProvinciaSelecionada] =
    useState("Todas");

  const [sistema, setSistema] = useState("Todos");

  const provinciasFiltradas = useMemo(() => {
    if (provinciaSelecionada === "Todas") {
      return provincias;
    }

    return provincias.filter(
      (provincia) => provincia.nome === provinciaSelecionada
    );
  }, [provinciaSelecionada]);

  return (
    <main className="min-h-screen bg-[#f3f6f1] text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#103b27] text-white">
        <div className="absolute inset-0">
          <img
            src={imagens[0].src}
            alt={imagens[0].alt}
            className="h-full w-full object-cover opacity-25"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#071f14]/95 via-[#103b27]/85 to-[#103b27]/55" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200">
            AGROINOVA ANGOLA • Pecuária • Ovinos
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Pastoreio de Ovinos
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-emerald-50 sm:text-xl">
            Guia técnico sobre utilização das pastagens, maneio dos animais,
            capacidade de suporte, rotação, sobrepastoreio, conservação do solo,
            disponibilidade de água e gestão do pastoreio nas diferentes
            realidades agroecológicas de Angola.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Pastagens",
              "Pastoreio rotacional",
              "Capacidade de suporte",
              "Água",
              "Época seca",
              "Conservação do solo",
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

          <span className="text-slate-600">Pastoreio</span>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              Fundamentos
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              O que significa fazer bom pastoreio?
            </h2>

            <div className="mt-6 space-y-5 text-justify text-[17px] leading-8 text-slate-700">
              <p>
                Pastoreio é a utilização controlada da vegetação disponível
                pelos animais. Não significa simplesmente colocar os ovinos
                numa área e deixá-los permanecer ali indefinidamente. Um bom
                sistema de pastoreio procura equilibrar as necessidades dos
                animais com a capacidade de recuperação das plantas e do solo.
              </p>

              <p>
                Quando o número de animais, o tempo de permanência ou a
                frequência de utilização ultrapassam a capacidade da área, pode
                ocorrer sobrepastoreio. As plantas são consumidas repetidamente
                antes de conseguirem recuperar, a cobertura vegetal diminui, o
                solo fica mais exposto e a produtividade futura da área pode
                cair.
              </p>

              <p>
                No sentido contrário, uma área muito pouco utilizada pode
                acumular material vegetal envelhecido e perder qualidade
                nutritiva. O objectivo do maneio é encontrar um equilíbrio
                entre utilização e recuperação.
              </p>

              <p>
                Em Angola, a gestão do pastoreio deve ser adaptada às condições
                locais. A disponibilidade de pastagem no Namibe ou no Cunene
                não é comparável à de regiões mais húmidas do norte. Mesmo
                dentro da mesma província, solos, relevo, precipitação e uso da
                terra podem produzir condições muito diferentes.
              </p>
            </div>
          </article>

          <aside className="rounded-3xl bg-[#123d29] p-8 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-200">
              Princípio central
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Pastagem não é um recurso infinito
            </h3>

            <p className="mt-5 text-justify leading-7 text-emerald-50">
              Toda área de pastagem possui uma determinada capacidade de
              produção. Essa capacidade muda conforme a chuva, o solo, a
              estação, as espécies vegetais e a intensidade de utilização.
            </p>

            <div className="mt-7 border-t border-white/15 pt-6">
              <p className="text-sm text-emerald-200">
                Boa gestão
              </p>

              <p className="mt-2 text-lg font-semibold">
                Animal + planta + solo + água + tempo.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* DADOS DE ANGOLA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              Dados nacionais
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              A dimensão da ovinicultura em Angola
            </h2>

            <p className="mt-5 text-justify text-lg leading-8 text-slate-600">
              O RAPP 2019/2020 identificou 325.207 ovinos nas explorações
              familiares. O levantamento é histórico, mas continua útil para
              compreender a distribuição territorial da actividade. Para
              indicadores mais recentes, o INE publicou o ICAPP 2024/2025 e
              indicadores de produção agropecuária de 2025.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <article className="rounded-3xl border border-emerald-100 bg-emerald-50 p-7">
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
                RAPP 2019/2020
              </p>

              <p className="mt-3 text-4xl font-bold text-slate-900">
                325.207
              </p>

              <p className="mt-2 text-slate-600">
                ovinos registados nas explorações familiares.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-600">
                Carne ovina
              </p>

              <p className="mt-3 text-4xl font-bold text-slate-900">
                261 t
              </p>

              <p className="mt-2 text-slate-600">
                produção no I semestre de 2025.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-600">
                Fonte recente
              </p>

              <p className="mt-3 text-2xl font-bold text-slate-900">
                ICAPP
              </p>

              <p className="mt-2 text-slate-600">
                Inquérito Contínuo Agro-Pecuário e Pescas 2024/2025.
              </p>
            </article>
          </div>

          <div className="mt-8 rounded-2xl border-l-4 border-amber-500 bg-amber-50 p-6">
            <h3 className="font-bold text-amber-950">
              Como interpretar estes dados
            </h3>

            <p className="mt-2 text-justify leading-7 text-amber-900">
              Os 325.207 ovinos são um dado estrutural do RAPP 2019/2020. Não
              representam automaticamente o efectivo nacional actual. O
              indicador de 261 toneladas corresponde à produção de carne ovina
              no primeiro semestre de 2025. São indicadores diferentes e devem
              permanecer identificados pelos respectivos períodos.
            </p>
          </div>
        </div>
      </section>

      {/* PROVÍNCIAS */}
      <section className="bg-[#edf3ed] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
                Distribuição territorial
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Províncias com maior efectivo ovino no RAPP
              </h2>

              <p className="mt-5 text-justify text-lg leading-8 text-slate-600">
                A distribuição abaixo utiliza os dados do RAPP 2019/2020 e,
                portanto, corresponde à configuração territorial daquele
                levantamento. Não foram redistribuídos valores antigos pelas
                novas províncias criadas posteriormente.
              </p>
            </div>

            <div className="w-full lg:w-64">
              <label
                htmlFor="provincia"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Filtrar província
              </label>

              <select
                id="provincia"
                value={provinciaSelecionada}
                onChange={(event) =>
                  setProvinciaSelecionada(event.target.value)
                }
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-emerald-700"
              >
                <option value="Todas">Todas</option>

                {provincias.map((provincia) => (
                  <option key={provincia.nome} value={provincia.nome}>
                    {provincia.nome}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {provinciasFiltradas.map((provincia) => (
              <article
                key={provincia.nome}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-slate-900">
                    {provincia.nome}
                  </h3>

                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
                    RAPP
                  </span>
                </div>

                <p className="mt-5 text-3xl font-bold text-emerald-800">
                  {provincia.efetivo.toLocaleString("pt-AO")}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  ovinos registados
                </p>

                <p className="mt-4 text-justify text-sm leading-6 text-slate-600">
                  {provincia.observacao}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE É PASTAGEM */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              Base alimentar
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              O que é uma pastagem?
            </h2>

            <div className="mt-6 space-y-4 text-justify leading-8 text-slate-700">
              <p>
                Pastagem é uma área onde existe vegetação disponível para
                consumo pelos animais. Pode ser constituída por vegetação
                natural, espécies introduzidas ou uma combinação de plantas
                utilizadas para alimentação animal.
              </p>

              <p>
                Uma pastagem de qualidade não é avaliada apenas pela quantidade
                de plantas. É necessário observar quais espécies estão
                presentes, o seu estado de crescimento, valor nutritivo,
                cobertura do solo, presença de plantas tóxicas e capacidade de
                recuperação.
              </p>

              <p>
                A pastagem também é parte do ecossistema. A sua gestão afecta
                infiltração de água, erosão, matéria orgânica e fertilidade do
                solo.
              </p>
            </div>
          </article>

          <article className="rounded-3xl bg-[#123d29] p-8 text-white shadow-sm lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-200">
              Gestão
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              O animal não deve ser o único elemento considerado
            </h2>

            <div className="mt-6 space-y-4 text-justify leading-8 text-emerald-50">
              <p>
                O produtor deve observar simultaneamente o animal, a planta e o
                solo. Se os animais estão a ganhar peso mas a vegetação está a
                desaparecer, existe um problema de sustentabilidade.
              </p>

              <p>
                Da mesma forma, uma pastagem visualmente abundante pode
                apresentar baixo valor nutricional se a vegetação estiver muito
                madura.
              </p>

              <p>
                O objectivo é manter uma área capaz de fornecer alimento hoje e
                continuar a produzir alimento nas próximas estações.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* SISTEMAS */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              Sistemas de pastoreio
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Diferentes formas de utilizar a pastagem
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                titulo: "Pastoreio contínuo",
                texto:
                  "Os animais permanecem durante períodos prolongados na mesma área. É simples de implementar, mas pode aumentar o risco de utilização excessiva de determinadas zonas, especialmente perto da água e das áreas de descanso.",
              },
              {
                titulo: "Pastoreio rotacional",
                texto:
                  "A área é dividida em parcelas ou unidades de utilização. Os animais passam de uma área para outra, permitindo períodos de descanso e recuperação da vegetação.",
              },
              {
                titulo: "Pastoreio diferido",
                texto:
                  "Uma determinada área é reservada durante parte do período de crescimento para acumular forragem que será utilizada posteriormente, especialmente em períodos de menor disponibilidade.",
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

          <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
            <p className="text-justify leading-7 text-slate-700">
              <strong>Importante:</strong> nenhum sistema é automaticamente
              melhor em todas as propriedades. O método deve ser escolhido de
              acordo com tamanho da exploração, disponibilidade de água,
              mão-de-obra, topografia, vegetação, número de animais e objectivo
              produtivo.
            </p>
          </div>
        </div>
      </section>

      {/* ROTAÇÃO */}
      <section className="bg-[#103b27] py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-200">
                Pastoreio rotacional
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Dar tempo para a pastagem recuperar
              </h2>
            </div>

            <div className="space-y-5 text-justify text-lg leading-8 text-emerald-50">
              <p>
                No pastoreio rotacional, o princípio fundamental é alternar
                períodos de utilização com períodos de descanso. A duração
                desses períodos não deve ser definida por um número fixo
                universal, porque depende da espécie vegetal, estação,
                precipitação, fertilidade do solo e intensidade de utilização.
              </p>

              <p>
                Durante o período de descanso, as plantas recuperam área foliar
                e armazenam reservas que permitem novo crescimento. Se o retorno
                dos animais ocorrer demasiado cedo, a planta pode ser novamente
                consumida antes de recuperar.
              </p>

              <p>
                Por isso, o produtor deve observar a vegetação em vez de seguir
                apenas um calendário rígido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAPACIDADE DE SUPORTE */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            Capacidade de suporte
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Quantos ovinos uma área consegue sustentar?
          </h2>

          <div className="mt-6 space-y-5 text-justify text-lg leading-8 text-slate-700">
            <p>
              Não existe um número universal de ovinos por hectare que possa
              ser aplicado a todas as propriedades de Angola. A capacidade de
              suporte depende da produção de matéria seca, composição da
              vegetação, chuva, solo, estação do ano e proporção da produção
              vegetal que pode ser consumida sem degradar a pastagem.
            </p>

            <p>
              Uma lotação que funciona durante a época chuvosa pode tornar-se
              excessiva durante a estação seca. Por isso, a lotação deve ser
              avaliada dinamicamente.
            </p>

            <p>
              Em sistemas com informação técnica disponível, a avaliação pode
              envolver estimativas de produção de matéria seca, disponibilidade
              de forragem e consumo esperado dos animais. Em sistemas
              familiares, observações simples e registos contínuos também podem
              melhorar significativamente a gestão.
            </p>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[850px] border-collapse text-left">
              <thead className="bg-[#123d29] text-white">
                <tr>
                  <th className="px-6 py-4">Indicador</th>
                  <th className="px-6 py-4">O que observar</th>
                  <th className="px-6 py-4">Sinal de alerta</th>
                </tr>
              </thead>

              <tbody>
                {[
                  [
                    "Cobertura vegetal",
                    "Quantidade de solo coberto",
                    "Aumento de áreas de solo exposto",
                  ],
                  [
                    "Altura da vegetação",
                    "Estado e recuperação das plantas",
                    "Consumo excessivo e baixa recuperação",
                  ],
                  [
                    "Condição dos animais",
                    "Peso e condição corporal",
                    "Perda de peso",
                  ],
                  [
                    "Distribuição do pastoreio",
                    "Uso uniforme da área",
                    "Concentração junto à água",
                  ],
                  [
                    "Erosão",
                    "Sulcos, ravinas e solo descoberto",
                    "Aumento da erosão",
                  ],
                  [
                    "Disponibilidade de água",
                    "Acesso e qualidade",
                    "Falta ou contaminação",
                  ],
                ].map(([indicador, observar, alerta]) => (
                  <tr
                    key={indicador}
                    className="border-b border-slate-200 last:border-0"
                  >
                    <td className="px-6 py-5 font-semibold text-slate-900">
                      {indicador}
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      {observar}
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      {alerta}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SOBREPASTOREIO */}
      <section className="bg-[#fff7ed] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-700">
                Principal risco
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Sobrepastoreio
              </h2>
            </div>

            <div className="space-y-5 text-justify text-lg leading-8 text-slate-700">
              <p>
                Sobrepastoreio ocorre quando a pressão de utilização da
                vegetação é superior à capacidade de recuperação da pastagem.
                Não depende apenas do número absoluto de animais. O tempo de
                permanência, frequência de retorno e quantidade de forragem
                disponível também são determinantes.
              </p>

              <p>
                Os primeiros sinais podem incluir redução da cobertura vegetal,
                aumento do solo descoberto, desaparecimento de espécies mais
                palatáveis, aparecimento de plantas menos desejáveis e
                concentração de animais em determinadas áreas.
              </p>

              <p>
                Quando o problema persiste, aumenta o risco de erosão e
                degradação do solo. A produtividade animal também pode cair
                porque os animais passam a encontrar menos alimento de boa
                qualidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ÁGUA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl bg-white p-8 shadow-sm lg:p-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
                Água e pastoreio
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                A localização da água influencia o uso da pastagem
              </h2>
            </div>

            <div className="space-y-5 text-justify leading-8 text-slate-700">
              <p>
                Os ovinos tendem a utilizar mais intensamente as áreas próximas
                aos pontos de água. Se o bebedouro estiver mal localizado, pode
                ocorrer concentração de animais, pisoteio, compactação do solo
                e acumulação de fezes.
              </p>

              <p>
                A localização dos pontos de água deve ser pensada em conjunto
                com a divisão das áreas de pastoreio. Em explorações maiores,
                vários pontos de abastecimento podem contribuir para uma
                distribuição mais uniforme dos animais.
              </p>

              <p>
                A água deve ser limpa, acessível e protegida contra
                contaminação. A qualidade da água faz parte da gestão sanitária
                e nutricional do efectivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ÉPOCAS */}
      <section className="bg-[#e8f0e9] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              Sazonalidade
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Pastoreio na época chuvosa e na época seca
            </h2>

            <p className="mt-5 text-justify text-lg leading-8 text-slate-600">
              Em grande parte dos sistemas dependentes de pastagem, a
              disponibilidade e qualidade da vegetação variam ao longo do ano.
              O produtor deve preparar o sistema para essa variação.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900">
                Época chuvosa
              </h3>

              <div className="mt-5 space-y-4 text-justify leading-7 text-slate-600">
                <p>
                  A disponibilidade de vegetação tende a aumentar quando as
                  condições de chuva são favoráveis. Isso pode melhorar a
                  quantidade de alimento disponível.
                </p>

                <p>
                  Contudo, maior disponibilidade não significa que o produtor
                  deva aumentar indefinidamente a lotação. É também uma fase
                  importante para recuperar áreas e produzir reservas
                  alimentares.
                </p>

                <p>
                  A humidade pode aumentar determinados riscos sanitários e
                  parasitários, tornando importante integrar pastoreio e
                  sanidade.
                </p>
              </div>
            </article>

            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900">
                Época seca
              </h3>

              <div className="mt-5 space-y-4 text-justify leading-7 text-slate-600">
                <p>
                  A quantidade e qualidade da vegetação podem diminuir
                  significativamente em determinadas regiões. O material
                  vegetal disponível também pode apresentar maior proporção de
                  fibra e menor qualidade nutricional.
                </p>

                <p>
                  A gestão deve considerar redução da pressão sobre as áreas,
                  utilização de reservas de feno, forragens conservadas e
                  suplementação quando necessária.
                </p>

                <p>
                  A disponibilidade de água torna-se ainda mais crítica em
                  regiões com temperaturas elevadas e menor precipitação.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CONSERVAÇÃO DO SOLO */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl bg-[#123d29] p-8 text-white lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-200">
                Solo
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Pastoreio também é conservação do solo
              </h2>

              <div className="mt-6 space-y-4 text-justify leading-8 text-emerald-50">
                <p>
                  A vegetação protege o solo contra o impacto directo da chuva
                  e reduz a velocidade do escoamento superficial. Quando a
                  cobertura vegetal desaparece, aumenta o risco de erosão.
                </p>

                <p>
                  O pisoteio intenso também pode provocar compactação em zonas
                  de elevada concentração de animais.
                </p>

                <p>
                  Uma boa gestão da pastagem é, portanto, simultaneamente uma
                  estratégia de produção pecuária e de conservação ambiental.
                </p>
              </div>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
                Indicadores
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Sinais de degradação
              </h2>

              <div className="mt-6 space-y-3">
                {[
                  "Solo descoberto em aumento",
                  "Formação de sulcos de erosão",
                  "Redução da cobertura vegetal",
                  "Desaparecimento de espécies palatáveis",
                  "Concentração excessiva junto à água",
                  "Compactação em zonas de passagem",
                  "Redução da produtividade da pastagem",
                  "Aumento da distância percorrida pelos animais para encontrar alimento",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-200 bg-white px-5 py-4"
                  >
                    <p className="text-sm font-medium text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* OVINOS E VEGETAÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            Comportamento alimentar
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Como os ovinos utilizam a vegetação?
          </h2>

          <div className="mt-6 space-y-5 text-justify text-lg leading-8 text-slate-700">
            <p>
              Os ovinos são animais selectivos e podem escolher determinadas
              plantas ou partes das plantas quando existe diversidade
              disponível. Esta selectividade altera a composição da pastagem
              ao longo do tempo.
            </p>

            <p>
              Se os animais retirarem repetidamente as espécies mais
              palatáveis, estas podem perder competitividade e outras espécies
              menos desejáveis podem aumentar.
            </p>

            <p>
              O produtor deve observar a composição da vegetação e não apenas
              a quantidade de matéria verde. Uma área aparentemente verde pode
              não fornecer a mesma qualidade nutricional durante todo o ano.
            </p>
          </div>
        </div>
      </section>

      {/* SISTEMA SILVO-PASTORIL */}
      <section className="bg-[#103b27] py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-200">
                Integração
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Pastoreio e árvores
              </h2>
            </div>

            <div className="space-y-5 text-justify text-lg leading-8 text-emerald-50">
              <p>
                Sistemas silvopastoris combinam árvores, arbustos, pastagens e
                animais. Dependendo da espécie e do sistema, as árvores podem
                fornecer sombra, contribuir para a protecção do solo e oferecer
                recursos alimentares.
              </p>

              <p>
                Em regiões quentes, a sombra pode ajudar os animais a reduzir a
                exposição directa ao calor. No entanto, a implantação de árvores
                deve ser compatível com as condições locais e não deve ser
                baseada apenas na introdução indiscriminada de espécies.
              </p>

              <p>
                Em Angola, a investigação sobre sistemas silvopastoris
                adaptados às diferentes regiões pode contribuir para aumentar a
                resiliência dos sistemas pecuários.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MANEIO PRÁTICO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            Maneio diário
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            O que o produtor deve observar no campo?
          </h2>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-left">
              <thead className="bg-[#123d29] text-white">
                <tr>
                  <th className="px-6 py-4">Elemento</th>
                  <th className="px-6 py-4">Pergunta</th>
                  <th className="px-6 py-4">Decisão possível</th>
                </tr>
              </thead>

              <tbody>
                {[
                  [
                    "Vegetação",
                    "Existe forragem suficiente?",
                    "Manter ou mudar a área de pastoreio.",
                  ],
                  [
                    "Solo",
                    "Há aumento de solo descoberto?",
                    "Reduzir pressão de pastoreio.",
                  ],
                  [
                    "Animais",
                    "A condição corporal está adequada?",
                    "Reavaliar alimentação e carga animal.",
                  ],
                  [
                    "Água",
                    "Os animais têm acesso permanente?",
                    "Corrigir abastecimento.",
                  ],
                  [
                    "Distribuição",
                    "Os animais concentram-se numa zona?",
                    "Rever localização dos recursos.",
                  ],
                  [
                    "Época",
                    "A disponibilidade está a diminuir?",
                    "Preparar reserva ou suplementação.",
                  ],
                ].map(([elemento, pergunta, decisao]) => (
                  <tr
                    key={elemento}
                    className="border-b border-slate-200 last:border-0"
                  >
                    <td className="px-6 py-5 font-semibold text-slate-900">
                      {elemento}
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      {pergunta}
                    </td>

                    <td className="px-6 py-5 text-slate-600">
                      {decisao}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* REALIDADE ANGOLA */}
      <section className="bg-[#edf3ed] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              Realidade angolana
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              O pastoreio não pode ser pensado da mesma forma em todo o país
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                titulo: "Namibe",
                texto:
                  "A elevada concentração histórica de ovinos torna importante estudar sistemas de pastoreio adaptados a condições de menor disponibilidade de água e vegetação. A gestão dos recursos e a prevenção da degradação são fundamentais.",
              },
              {
                titulo: "Cunene",
                texto:
                  "A disponibilidade de água e pastagem pode variar fortemente. O planeamento da mobilidade dos animais, pontos de água e reservas alimentares é particularmente relevante.",
              },
              {
                titulo: "Huíla",
                texto:
                  "A diversidade de sistemas pecuários permite estudar diferentes combinações de pastoreio, agricultura e suplementação.",
              },
              {
                titulo: "Uíge",
                texto:
                  "As condições de maior humidade e disponibilidade potencial de biomassa exigem atenção à qualidade da forragem, conservação, sanidade e gestão das áreas.",
              },
              {
                titulo: "Cuanza Sul",
                texto:
                  "A integração entre agricultura e pecuária pode permitir utilização de resíduos agrícolas e produção de forragem, reduzindo a pressão sobre pastagens naturais.",
              },
              {
                titulo: "Huambo e Bié",
                texto:
                  "A integração agricultura-pecuária pode contribuir para ciclos de nutrientes, aproveitamento de resíduos e diversificação da alimentação dos pequenos ruminantes.",
              },
            ].map((item) => (
              <article
                key={item.titulo}
                className="rounded-3xl bg-white p-7 shadow-sm"
              >
                <h3 className="text-2xl font-bold text-slate-900">
                  {item.titulo}
                </h3>

                <p className="mt-4 text-justify leading-8 text-slate-600">
                  {item.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGENS */}
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-300">
              Pastoreio
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Referência visual
            </h2>

            <p className="mt-5 text-justify text-lg leading-8 text-slate-300">
              As imagens desta secção servem para ilustrar diferentes formas
              de utilização de áreas de pastagem por ovinos. Sempre que uma
              imagem não for especificamente de Angola, isso deve ser
              considerado na interpretação visual.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {imagens.map((imagem) => (
              <article
                key={imagem.src}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
              >
                <a
                  href={imagem.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <img
                    src={imagem.src}
                    alt={imagem.alt}
                    className="h-64 w-full object-cover transition duration-300 hover:scale-[1.02]"
                  />
                </a>

                <div className="p-6">
                  <h3 className="text-xl font-bold">
                    {imagem.titulo}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Fonte: {imagem.fonte}
                  </p>

                  <a
                    href={imagem.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-sm font-semibold text-white underline decoration-emerald-400 underline-offset-4"
                  >
                    Consultar origem
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INDICADORES */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            Monitorização
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Indicadores que podem ser registados pelo produtor
          </h2>

          <p className="mt-5 text-justify text-lg leading-8 text-slate-600">
            Registar informação transforma observações diárias em dados úteis.
            Uma exploração pode começar com registos simples e evoluir para
            indicadores técnicos mais detalhados.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Número de animais por área",
            "Peso ou condição corporal",
            "Disponibilidade de água",
            "Estado da pastagem",
            "Áreas utilizadas",
            "Dias de utilização",
            "Dias de descanso",
            "Mortalidade",
            "Nascimentos",
            "Ganho de peso",
            "Custos de suplementação",
            "Períodos de escassez",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="font-medium text-slate-700">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INVESTIGAÇÃO */}
      <section className="bg-[#123d29] py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-200">
              Investigação em Angola
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              O que precisa de ser estudado?
            </h2>

            <p className="mt-5 text-justify text-lg leading-8 text-emerald-50">
              A expansão de sistemas ovinos sustentáveis exige conhecimento
              produzido nas próprias condições angolanas. Muitos parâmetros
              utilizados internacionalmente precisam de ser testados,
              adaptados ou regionalizados.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              "Mapeamento das principais áreas de pastoreio de ovinos.",
              "Produção de matéria seca das pastagens por região.",
              "Capacidade de suporte das diferentes formações vegetais.",
              "Efeito da época seca sobre o ganho de peso.",
              "Valor nutritivo das principais plantas consumidas.",
              "Impacto do pastoreio na degradação dos solos.",
              "Modelos de pastoreio adaptados ao Namibe e Cunene.",
              "Integração entre ovinos e culturas agrícolas.",
              "Produção de forragem para períodos de escassez.",
              "Sistemas silvopastoris adaptados a Angola.",
              "Mapeamento de fontes de água para sistemas pastoris.",
              "Avaliação económica do pastoreio rotacional.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-justify leading-7 text-emerald-50">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONCLUSÃO */}
      <section className="mx-auto max-w-5xl px-6 py-16 text-center lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
          AGROINOVA ANGOLA
        </p>

        <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          Pastorear é gerir um ecossistema produtivo
        </h2>

        <p className="mx-auto mt-6 max-w-4xl text-justify text-lg leading-8 text-slate-600">
          O bom pastoreio procura produzir animais saudáveis sem destruir a
          base natural que sustenta a produção. A gestão adequada da lotação,
          do tempo de utilização, dos períodos de descanso, da água e da
          vegetação permite melhorar a eficiência da exploração e reduzir o
          risco de degradação das pastagens. Em Angola, esta gestão deve ser
          adaptada às diferentes regiões e apoiada por dados locais.
        </p>
      </section>

      {/* FONTES */}
      <section className="border-t border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              Fontes
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Referências utilizadas
            </h2>

            <div className="mt-8 space-y-6 text-sm leading-7 text-slate-600">
              <div>
                <p className="font-bold text-slate-900">
                  Instituto Nacional de Estatística — Angola
                </p>

                <p className="mt-1">
                  RAPP 2019/2020 — dados estruturais das explorações
                  agropecuárias familiares, incluindo efectivos de ovinos por
                  província.
                </p>

                <a
                  href="https://www.ine.gov.ao/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-emerald-800 underline underline-offset-4"
                >
                  Instituto Nacional de Estatística
                </a>
              </div>

              <div>
                <p className="font-bold text-slate-900">
                  INE — ICAPP 2024/2025
                </p>

                <p className="mt-1">
                  Inquérito Contínuo Agro-Pecuário e Pescas, publicado em
                  2026, utilizado como referência estatística mais recente
                  para o sector.
                </p>

                <a
                  href="https://www.ine.gov.ao/publicacoes/detalhes/NTM0NzU="
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-emerald-800 underline underline-offset-4"
                >
                  Consultar publicação do INE
                </a>
              </div>

              <div>
                <p className="font-bold text-slate-900">
                  FAO — Pastoralism and rangeland management
                </p>

                <p className="mt-1">
                  Referências técnicas sobre pastoreio, utilização das
                  pastagens, gestão de recursos naturais e sistemas de
                  pequenos ruminantes.
                </p>

                <a
                  href="https://www.fao.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-emerald-800 underline underline-offset-4"
                >
                  Organização das Nações Unidas para a Alimentação e Agricultura
                </a>
              </div>

              <div>
                <p className="font-bold text-slate-900">
                  Imagens
                </p>

                <p className="mt-1">
                  Imagens utilizadas para ilustração técnica, com ligação para
                  as respectivas páginas de origem.
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
            href="/pecuaria/ovinos/orientacoes/alimentacao"
            className="rounded-xl border border-slate-300 px-5 py-3 text-center font-semibold text-slate-700 transition hover:border-emerald-700 hover:text-emerald-800"
          >
            Tema anterior: Alimentação
          </Link>

          <Link
            href="/pecuaria/ovinos/orientacoes"
            className="rounded-xl border border-emerald-700 px-5 py-3 text-center font-semibold text-emerald-800 transition hover:bg-emerald-50"
          >
            Todas as orientações
          </Link>

          <Link
            href="/pecuaria/ovinos/orientacoes/sanidade"
            className="rounded-xl bg-[#123d29] px-5 py-3 text-center font-semibold text-white transition hover:bg-[#0b2d1e]"
          >
            Próximo tema: Sanidade
          </Link>
        </div>
      </section>
    </main>
  );
}