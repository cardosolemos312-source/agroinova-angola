"use client";

import Link from "next/link";
import { useState } from "react";

type Problema = {
  titulo: string;
  sinais: string;
  acao: string;
};

const problemas: Problema[] = [
  {
    titulo: "Pintos agrupados",
    sinais:
      "As aves ficam muito juntas, procuram uma fonte de calor e apresentam pouca movimentação.",
    acao:
      "Verificar temperatura, correntes de ar, qualidade da cama e distribuição das fontes de calor. O comportamento do lote deve ser observado continuamente, sobretudo nas primeiras horas após a chegada.",
  },
  {
    titulo: "Pintos afastados do aquecimento",
    sinais:
      "As aves evitam a fonte de calor, ficam nas zonas periféricas e podem apresentar respiração acelerada.",
    acao:
      "Verificar se existe excesso de calor. Reduzir a carga térmica e melhorar a circulação do ar sem criar correntes fortes diretamente sobre as aves.",
  },
  {
    titulo: "Cama húmida",
    sinais:
      "A cama apresenta zonas molhadas, formação de placas, cheiro forte ou aumento de sujidade nas aves.",
    acao:
      "Verificar fugas nos bebedouros, ventilação, humidade, densidade e qualidade da cama. Remover as zonas muito húmidas e corrigir a causa.",
  },
  {
    titulo: "Consumo de água alterado",
    sinais:
      "O consumo aumenta ou diminui de forma inesperada em relação ao comportamento habitual do lote.",
    acao:
      "Verificar qualidade da água, pressão dos bebedouros, temperatura, disponibilidade, obstruções e estado sanitário das aves.",
  },
  {
    titulo: "Mortalidade acima do esperado",
    sinais:
      "Aparecimento de várias aves mortas ou aumento progressivo da mortalidade diária.",
    acao:
      "Registar imediatamente o problema, separar aves doentes quando indicado, verificar água, ração, ambiente e biossegurança e contactar o responsável veterinário para investigação.",
  },
];

const imagens = [
  {
    src: "/imagens/galinhas/filomena.jpg",
    titulo: "Produção avícola em Angola",
    descricao:
      "Imagem de uma exploração avícola angolana utilizada para contextualizar a produção comercial.",
    fonte: "PlatinaLine — Fazenda Filomena",
    href: "https://platinaline.com/",
  },
  {
    src: "/imagens/galinhas/vinabar.jpg",
    titulo: "Exploração avícola",
    descricao:
      "Exemplo de actividade avícola empresarial em Angola e da importância da organização da produção.",
    fonte: "PDAC — Fazenda Vinabar",
    href: "https://pdac.ao/",
  },
  {
    src: "/imagens/galinhas/cuanza-sul.jpg",
    titulo: "Avicultura no Cuanza Sul",
    descricao:
      "Registo jornalístico de produção avícola em Angola.",
    fonte: "Euronews",
    href: "https://www.euronews.com/",
  },
];

export default function FrangoDeCortePage() {
  const [problemaAtivo, setProblemaAtivo] = useState(0);
  const [mostrarMais, setMostrarMais] = useState(false);

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-green-950/80" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-green-300">
              AGROINOVA ANGOLA · PECUÁRIA · GALINHAS
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              Frango de corte
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
              Orientação técnica para a produção de frangos destinados à
              produção de carne, desde a preparação do aviário e recepção dos
              pintos até ao crescimento, maneio, sanidade, biossegurança e
              preparação para comercialização.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/pecuaria/galinhas/orientacoes"
                className="rounded-lg bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                Voltar às orientações
              </Link>

              <Link
                href="/pecuaria/galinhas"
                className="rounded-lg border border-white/30 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Visão geral das galinhas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-4 text-sm text-slate-600 lg:px-8">
          <Link href="/pecuaria" className="hover:text-green-700">
            Pecuária
          </Link>

          <span className="mx-2">/</span>

          <Link
            href="/pecuaria/galinhas/orientacoes"
            className="hover:text-green-700"
          >
            Orientações técnicas
          </Link>

          <span className="mx-2">/</span>

          <span className="font-medium text-slate-900">
            Frango de corte
          </span>
        </div>
      </div>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
              Produção de carne
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              O que é a produção de frango de corte?
            </h2>

            <div className="mt-6 space-y-5 text-justify leading-8 text-slate-700">
              <p>
                Frango de corte é a ave criada especificamente para produção de
                carne. A eficiência do sistema depende da combinação entre
                genética, qualidade dos pintos, alimentação, água, ambiente,
                sanidade, biossegurança e capacidade de gestão do produtor.
              </p>

              <p>
                Uma exploração não deve ser avaliada apenas pelo peso final das
                aves. O produtor precisa acompanhar o consumo de ração, o
                consumo de água, a mortalidade, a uniformidade do lote, o
                crescimento, a conversão alimentar, a qualidade da cama e os
                custos de produção.
              </p>

              <p>
                Em Angola, esta actividade tem importância estratégica porque
                está directamente relacionada com a disponibilidade de proteína
                animal, a criação de emprego, a produção de milho e soja, a
                indústria de rações, o transporte, o abate, a conservação e a
                comercialização.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
            <h3 className="text-xl font-bold text-slate-900">
              A cadeia do frango
            </h3>

            <div className="mt-6 space-y-4">
              {[
                "Milho, soja e outros ingredientes",
                "Fabricação e armazenamento da ração",
                "Incubação e produção de pintos",
                "Criação e maneio do lote",
                "Sanidade e biossegurança",
                "Abate e processamento",
                "Conservação e cadeia de frio",
                "Distribuição e consumo",
              ].map((item, index) => (
                <div key={item} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-800">
                    {index + 1}
                  </span>

                  <p className="pt-1 text-sm leading-6 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ANGOLA */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
              Realidade angolana
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Por que o frango de corte é estratégico para Angola?
            </h2>

            <div className="mt-6 space-y-5 text-justify leading-8 text-slate-700">
              <p>
                A avicultura de corte ocupa uma posição importante na estratégia
                de redução da dependência externa de proteína animal. O sector
                também cria procura por milho, soja, rações, equipamentos,
                serviços veterinários, transporte, processamento e comércio.
              </p>

              <p>
                Segundo informação divulgada pelo Ministério da Indústria e
                Comércio, Angola importou em 2025 mais de{" "}
                <strong>227 mil toneladas de frango</strong>, com uma despesa
                superior a <strong>310 milhões de dólares</strong>. A mesma
                informação indica uma estimativa de{" "}
                <strong>
                  64.394 toneladas de produção nacional de carne de aves em
                  2025
                </strong>
                .
              </p>

              <p>
                Estes números mostram que aumentar a produção nacional não
                significa simplesmente construir mais aviários. É necessário
                desenvolver toda a cadeia: produção de milho e soja, fabrico de
                ração, pintos de qualidade, assistência veterinária, energia,
                água, equipamentos, abate, cadeia de frio e mercados.
              </p>

              <p>
                Tem sido também divulgada no sector uma estimativa de que cerca
                de 90% do frango consumido em Angola seja importado. Esta
                afirmação deve ser apresentada como uma{" "}
                <strong>estimativa do sector avícola</strong>, e não como um
                único indicador oficial definitivo, porque os valores variam
                conforme o período e a metodologia utilizada para comparar
                produção, importação e consumo.
              </p>

              <p>
                Para o AGROINOVA, a questão central é outra: compreender quais
                são os obstáculos técnicos e económicos que impedem a produção
                nacional de crescer de forma competitiva e sustentável.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <p className="text-3xl font-bold text-green-700">
                  227.855 t
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Frango e partes importados em 2025, segundo dados divulgados
                  pelo Governo.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <p className="text-3xl font-bold text-green-700">
                  US$ 310 M+
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Valor associado às importações de frango em 2025.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <p className="text-3xl font-bold text-green-700">
                  64.394 t
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Estimativa de produção nacional de carne de aves em 2025.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGENS */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
            Avicultura em Angola
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Exemplos da produção nacional
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            O desenvolvimento da avicultura angolana já envolve explorações
            familiares, médias empresas e unidades de maior escala. As imagens
            abaixo servem como referências visuais de actividades avícolas
            divulgadas por fontes angolanas.
          </p>
        </div>

        <div className="mt-8 grid gap-7 md:grid-cols-3">
          {imagens.map((imagem) => (
            <article
              key={imagem.src}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <a
                href={imagem.href}
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <img
                  src={imagem.src}
                  alt={imagem.titulo}
                  className="h-64 w-full object-cover transition duration-300 hover:scale-[1.02]"
                />
              </a>

              <div className="p-6">
                <h3 className="font-bold text-slate-900">
                  {imagem.titulo}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {imagem.descricao}
                </p>

                <a
                  href={imagem.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block text-sm font-semibold text-green-700 hover:underline"
                >
                  Fonte: {imagem.fonte}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SISTEMAS */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-300">
            Sistemas de produção
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Diferentes formas de criar frangos
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                titulo: "Produção familiar",
                texto:
                  "Sistema de menor escala, normalmente associado ao consumo familiar ou ao mercado local. Requer atenção especial à alimentação, água, mortalidade, sanidade e acesso a assistência técnica.",
              },
              {
                titulo: "Produção semi-intensiva",
                texto:
                  "Combina instalações, alimentação controlada e maior gestão do lote. Pode ser adequada para produtores que estão a passar de uma criação tradicional para uma actividade comercial.",
              },
              {
                titulo: "Produção intensiva",
                texto:
                  "Sistema de maior controlo sobre ambiente, alimentação, densidade, sanidade, biossegurança e indicadores produtivos. Exige maior investimento e capacidade de gestão.",
              },
            ].map((sistema) => (
              <article
                key={sistema.titulo}
                className="rounded-2xl border border-white/10 bg-white/5 p-7"
              >
                <h3 className="text-xl font-bold">{sistema.titulo}</h3>

                <p className="mt-4 text-justify leading-7 text-slate-300">
                  {sistema.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PINTOS */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
          Primeira etapa
        </p>

        <h2 className="mt-2 text-3xl font-bold text-slate-900">
          Recepção dos pintos
        </h2>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="space-y-5 text-justify leading-8 text-slate-700">
            <p>
              A qualidade dos pintos influencia todo o ciclo produtivo. Antes
              da chegada do lote, o aviário deve estar limpo, preparado,
              desinfectado e com os equipamentos verificados.
            </p>

            <p>
              Na recepção, o produtor deve observar actividade, uniformidade,
              hidratação, condição das pernas, aspecto do umbigo, plumagem e
              comportamento geral. Também é importante conhecer a origem do
              lote, o programa sanitário e as informações fornecidas pelo
              incubatório.
            </p>

            <p>
              O transporte deve ser organizado para reduzir stress, excesso de
              calor, frio, desidratação e mortalidade. Ao chegar, os pintos
              precisam encontrar água disponível e ambiente previamente
              preparado.
            </p>
          </div>

          <div className="rounded-2xl border border-green-100 bg-green-50 p-7">
            <h3 className="text-xl font-bold text-slate-900">
              Antes da chegada
            </h3>

            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
              <li>• Limpar e desinfectar o aviário.</li>
              <li>• Verificar bebedouros e comedouros.</li>
              <li>• Preparar a cama.</li>
              <li>• Confirmar o funcionamento da ventilação.</li>
              <li>• Preparar a área de aquecimento.</li>
              <li>• Confirmar água disponível.</li>
              <li>• Confirmar a ração inicial.</li>
              <li>• Rever o plano sanitário.</li>
              <li>• Registar a origem e quantidade dos pintos.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* AMBIENTE */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
            Ambiente
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Temperatura, ventilação e cama
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                titulo: "Temperatura",
                texto:
                  "Os pintos jovens têm capacidade limitada de regular a temperatura corporal. O ambiente deve ser preparado antes da chegada e ajustado através da observação do comportamento das aves e de medições ambientais.",
              },
              {
                titulo: "Ventilação",
                texto:
                  "A ventilação fornece oxigénio, remove calor, humidade, poeira e gases. Ventilar não significa criar correntes fortes de ar sobre as aves.",
              },
              {
                titulo: "Cama",
                texto:
                  "A cama deve permanecer seca e manejável. Humidade excessiva aumenta a formação de amónia, sujidade das aves e problemas relacionados com patas e qualidade do ambiente.",
              },
            ].map((item) => (
              <article
                key={item.titulo}
                className="rounded-2xl border border-slate-200 bg-white p-7"
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

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-7">
            <h3 className="text-xl font-bold text-slate-900">
              Observar o comportamento do lote
            </h3>

            <p className="mt-4 max-w-4xl text-justify leading-8 text-slate-700">
              O comportamento das aves é uma ferramenta prática de avaliação
              ambiental. Aves muito agrupadas podem indicar frio ou correntes
              de ar; aves excessivamente afastadas da fonte de calor podem
              indicar excesso de temperatura. Uma distribuição uniforme,
              actividade normal e acesso adequado a água e ração são sinais
              importantes para a avaliação do ambiente.
            </p>
          </div>
        </div>
      </section>

      {/* ALIMENTAÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
          Alimentação
        </p>

        <h2 className="mt-2 text-3xl font-bold text-slate-900">
          Ração e crescimento
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              titulo: "Fase inicial",
              texto:
                "A alimentação inicial deve fornecer nutrientes adequados ao rápido desenvolvimento dos pintos e permitir que o lote comece a crescer de forma uniforme.",
            },
            {
              titulo: "Crescimento",
              texto:
                "A formulação deve acompanhar a evolução das necessidades das aves, mantendo equilíbrio entre energia, proteína, aminoácidos, minerais e vitaminas.",
            },
            {
              titulo: "Acabamento",
              texto:
                "Na fase final, a alimentação deve sustentar o ganho de peso e a eficiência produtiva sem comprometer a qualidade da carne ou a saúde das aves.",
            },
          ].map((fase) => (
            <article
              key={fase.titulo}
              className="rounded-2xl border border-slate-200 p-7"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {fase.titulo}
              </h3>

              <p className="mt-4 text-justify leading-7 text-slate-600">
                {fase.texto}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-green-50 p-7">
          <h3 className="text-xl font-bold text-slate-900">
            O desafio do milho e da soja
          </h3>

          <p className="mt-4 max-w-5xl text-justify leading-8 text-slate-700">
            A alimentação é uma das questões centrais da competitividade da
            avicultura angolana. O milho e a soja são matérias-primas
            fundamentais para a produção de rações. Quando existe pouca oferta
            nacional, preços elevados, problemas logísticos ou dependência de
            importações, o custo final da produção avícola aumenta. Por isso,
            desenvolver a avicultura também significa fortalecer a produção
            nacional de grãos e a indústria de rações.
          </p>
        </div>
      </section>

      {/* ÁGUA */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
            Água
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Água limpa é parte da produção
          </h2>

          <div className="mt-7 max-w-5xl space-y-5 text-justify leading-8 text-slate-700">
            <p>
              A água não deve ser tratada apenas como um recurso disponível.
              Qualidade, quantidade, temperatura, higiene dos bebedouros e
              distribuição dentro do aviário influenciam directamente o
              consumo, a alimentação e o desempenho das aves.
            </p>

            <p>
              Bebedouros devem ser inspeccionados diariamente. Vazamentos
              aumentam a humidade da cama; obstruções podem impedir o acesso à
              água; biofilmes dentro das linhas podem comprometer a higiene do
              sistema.
            </p>

            <p>
              Sempre que houver alteração inesperada no consumo de água, é
              necessário investigar ambiente, equipamento, qualidade da água,
              alimentação e estado sanitário.
            </p>
          </div>
        </div>
      </section>

      {/* MANEIO DIÁRIO */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
          Maneio diário
        </p>

        <h2 className="mt-2 text-3xl font-bold text-slate-900">
          O que o produtor deve observar todos os dias?
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Comportamento das aves",
            "Consumo de água",
            "Consumo de ração",
            "Mortalidade",
            "Qualidade da cama",
            "Ventilação",
            "Temperatura",
            "Equipamentos",
            "Distribuição das aves",
            "Sinais clínicos",
            "Peso e crescimento",
            "Limpeza",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-slate-200 bg-white p-5 font-semibold text-slate-800"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* INDICADORES */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-300">
            Gestão produtiva
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Indicadores que devem ser registados
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                titulo: "Peso vivo",
                texto:
                  "Permite acompanhar o crescimento individual ou médio do lote.",
              },
              {
                titulo: "Mortalidade",
                texto:
                  "Ajuda a detectar problemas sanitários, ambientais ou de maneio.",
              },
              {
                titulo: "Conversão alimentar",
                texto:
                  "Relaciona o alimento utilizado com o ganho de peso obtido.",
              },
              {
                titulo: "Uniformidade",
                texto:
                  "Mostra se as aves apresentam desenvolvimento relativamente homogéneo.",
              },
            ].map((item) => (
              <article
                key={item.titulo}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="font-bold">{item.titulo}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.texto}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-green-900 bg-green-950/40 p-7">
            <p className="text-justify leading-8 text-slate-200">
              O produtor que não regista os dados perde a capacidade de
              comparar lotes, identificar problemas precocemente e calcular o
              verdadeiro custo de produção. O AGROINOVA deve ajudar a
              transformar estes registos em informação útil para a tomada de
              decisão.
            </p>
          </div>
        </div>
      </section>

      {/* SANIDADE */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
          Sanidade
        </p>

        <h2 className="mt-2 text-3xl font-bold text-slate-900">
          Prevenir é mais importante do que reagir
        </h2>

        <div className="mt-7 max-w-5xl space-y-5 text-justify leading-8 text-slate-700">
          <p>
            Problemas sanitários podem reduzir o crescimento, aumentar a
            mortalidade, elevar o consumo de medicamentos e provocar perdas
            económicas. A prevenção começa antes da chegada das aves.
          </p>

          <p>
            Entre os problemas que podem afectar lotes de frangos encontram-se
            doenças respiratórias, doenças digestivas, coccidiose, doenças
            imunossupressoras, infecções bacterianas e outras enfermidades.
            A ocorrência e importância de cada doença dependem da região,
            sistema de produção, vacinação, biossegurança, idade e condições
            ambientais.
          </p>

          <p>
            Não se deve escolher medicamentos apenas pela aparência dos sinais
            clínicos. Diagnóstico, orientação veterinária, registos e uso
            responsável de medicamentos são fundamentais.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            "Vacinação conforme programa sanitário",
            "Observação diária das aves",
            "Registo de mortalidade",
            "Controlo de visitantes",
            "Limpeza e desinfecção",
            "Água de qualidade",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-green-100 bg-green-50 p-5 font-semibold text-slate-800"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* BIOSSEGURANÇA */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
            Biossegurança
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Controlar a entrada e circulação de agentes
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                titulo: "Pessoas",
                texto:
                  "Controlar visitantes e trabalhadores, limitar acessos desnecessários e manter procedimentos de higiene.",
              },
              {
                titulo: "Equipamentos",
                texto:
                  "Evitar transportar equipamentos contaminados entre lotes sem limpeza e desinfecção adequadas.",
              },
              {
                titulo: "Aves",
                texto:
                  "Evitar introduzir aves de origem desconhecida no sistema produtivo.",
              },
              {
                titulo: "Roedores e insectos",
                texto:
                  "Implementar controlo sistemático porque podem transportar agentes e contaminar ração, água e instalações.",
              },
              {
                titulo: "Cadáveres",
                texto:
                  "As aves mortas devem ser retiradas rapidamente e eliminadas através de um método seguro e adequado à exploração.",
              },
              {
                titulo: "Lotes",
                texto:
                  "Sempre que possível, separar lotes e aplicar princípios de entrada e saída organizadas para reduzir a transmissão de agentes.",
              },
            ].map((item) => (
              <article
                key={item.titulo}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {item.titulo}
                </h3>

                <p className="mt-3 text-justify leading-7 text-slate-600">
                  {item.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CALOR */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="rounded-3xl border border-amber-200 bg-amber-50 p-8 lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
            Gestão do calor
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Stress térmico merece atenção especial
          </h2>

          <p className="mt-5 max-w-5xl text-justify leading-8 text-slate-700">
            Temperaturas elevadas podem reduzir o consumo de ração, alterar o
            consumo de água, aumentar a respiração e prejudicar o desempenho
            das aves. A prevenção depende da combinação entre ventilação,
            disponibilidade de água, densidade adequada, qualidade das
            instalações e observação contínua do lote. As medidas devem ser
            adaptadas às condições climáticas locais e ao tipo de aviário.
          </p>
        </div>
      </section>

      {/* PROBLEMAS INTERATIVOS */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-300">
            Observação no campo
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Quando alguma coisa parece estar errada
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-[320px_1fr]">
            <div className="space-y-2">
              {problemas.map((problema, index) => (
                <button
                  key={problema.titulo}
                  onClick={() => setProblemaAtivo(index)}
                  className={`w-full rounded-xl px-5 py-4 text-left font-semibold transition ${
                    problemaAtivo === index
                      ? "bg-green-600 text-white"
                      : "bg-white/5 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  {problema.titulo}
                </button>
              ))}
            </div>

            <article className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <h3 className="text-2xl font-bold">
                {problemas[problemaAtivo].titulo}
              </h3>

              <p className="mt-6 text-justify leading-8 text-slate-300">
                <strong className="text-white">O que observar:</strong>{" "}
                {problemas[problemaAtivo].sinais}
              </p>

              <p className="mt-5 text-justify leading-8 text-slate-300">
                <strong className="text-white">Primeira resposta:</strong>{" "}
                {problemas[problemaAtivo].acao}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ANGOLA E PRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
          Angola
        </p>

        <h2 className="mt-2 text-3xl font-bold text-slate-900">
          O futuro do frango nacional depende de uma cadeia integrada
        </h2>

        <div className="mt-7 max-w-5xl space-y-5 text-justify leading-8 text-slate-700">
          <p>
            A produção de frango não termina no aviário. Para reduzir a
            dependência das importações, Angola precisa de maior integração
            entre agricultura, indústria de rações, avicultura, serviços
            veterinários, financiamento, processamento e distribuição.
          </p>

          <p>
            A produção nacional de milho e soja tem importância estratégica
            porque estes produtos podem fornecer matérias-primas para a
            indústria de alimentação animal. Ao mesmo tempo, é necessário
            melhorar armazenamento, transporte, qualidade das matérias-primas
            e capacidade de formulação de rações.
          </p>

          <p>
            Outro desafio é a cadeia de frio. Produzir mais frango sem
            garantir abate adequado, conservação, transporte refrigerado e
            comercialização segura pode transferir o problema da produção
            para a fase pós-produção.
          </p>

          <p>
            Por isso, o desenvolvimento da avicultura deve ser analisado como
            uma cadeia de valor e não apenas como aumento do número de
            galinheiros.
          </p>
        </div>

        {mostrarMais && (
          <div className="mt-7 max-w-5xl space-y-5 rounded-2xl border border-slate-200 bg-slate-50 p-7 text-justify leading-8 text-slate-700">
            <p>
              Para pequenos produtores, a assistência técnica pode ser tão
              importante quanto o investimento físico. Um aviário bem
              construído não garante bons resultados se houver problemas
              persistentes de alimentação, água, mortalidade, registos ou
              biossegurança.
            </p>

            <p>
              Para empresas maiores, os principais desafios podem envolver
              escala, custo dos insumos, logística, energia, capacidade de
              processamento, acesso a financiamento e estabilidade da cadeia
              de abastecimento.
            </p>

            <p>
              Para investigadores e estudantes, a avicultura angolana oferece
              uma área ampla de investigação: eficiência alimentar, genética,
              matérias-primas locais, doenças, resistência antimicrobiana,
              climatização, sistemas de produção, economia rural e
              aproveitamento de subprodutos.
            </p>
          </div>
        )}

        <button
          onClick={() => setMostrarMais(!mostrarMais)}
          className="mt-7 rounded-lg bg-green-700 px-5 py-3 font-semibold text-white hover:bg-green-800"
        >
          {mostrarMais ? "Mostrar menos" : "Ver mais sobre os desafios"}
        </button>
      </section>

      {/* CHECKLIST */}
      <section className="bg-green-50">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
            Checklist
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Verificação diária do aviário
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "As aves estão activas?",
              "Existe mortalidade anormal?",
              "Todas as aves têm acesso à água?",
              "Os bebedouros estão a funcionar?",
              "Os comedouros estão disponíveis?",
              "A cama está seca?",
              "A ventilação está adequada?",
              "Existe cheiro forte de amónia?",
              "A temperatura está adequada?",
              "Há aves com sinais clínicos?",
              "A ração está em boas condições?",
              "Os registos foram actualizados?",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-green-100 bg-white p-5 text-sm font-semibold text-slate-800"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PESQUISA */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
          Investigação e inovação
        </p>

        <h2 className="mt-2 text-3xl font-bold text-slate-900">
          Temas que merecem investigação em Angola
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Produção de milho para alimentação animal",
            "Produção nacional de soja",
            "Formulação de rações com matérias-primas locais",
            "Desempenho de frangos em diferentes regiões climáticas",
            "Gestão do stress térmico",
            "Doenças e biossegurança",
            "Eficiência alimentar",
            "Sistemas familiares e semi-intensivos",
            "Custos de produção",
            "Cadeia de frio",
            "Abate e processamento",
            "Mercado nacional de carne de frango",
          ].map((tema) => (
            <article
              key={tema}
              className="rounded-xl border border-slate-200 p-6"
            >
              <h3 className="font-bold text-slate-900">{tema}</h3>
            </article>
          ))}
        </div>
      </section>

      {/* FONTES */}
      <section className="border-t bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Fontes e referências
          </h2>

          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
            <p>
              <strong>Ministério da Indústria e Comércio de Angola.</strong>{" "}
              Informação sobre a aposta nacional na avicultura e redução da
              importação de frango.
            </p>

            <p>
              <strong>Ministério da Agricultura e Florestas de Angola.</strong>{" "}
              Informação institucional sobre o desenvolvimento do sector
              avícola.
            </p>

            <p>
              <strong>Instituto Nacional de Estatística de Angola.</strong>{" "}
              Indicadores de produção agropecuária e pecuária.
            </p>

            <p>
              <strong>FAO.</strong> Materiais técnicos sobre produção,
              alimentação, saúde e gestão de aves.
            </p>

            <div className="flex flex-wrap gap-4 pt-3">
              <a
                href="https://mindcom.gov.ao/web/noticias/angola-aposta-na-avicultura-para-reduzir-importacao-de-frango"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-green-700 hover:underline"
              >
                Ministério da Indústria e Comércio
              </a>

              <a
                href="https://minagrif.gov.ao/web/noticias/fsdea-e-minagrif-debateram-sobre-o-desenvolvimento-do-sector-avicola"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-green-700 hover:underline"
              >
                MINAGRIF
              </a>

              <a
                href="https://www.ine.gov.ao/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-green-700 hover:underline"
              >
                INE Angola
              </a>

              <a
                href="https://www.fao.org/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-green-700 hover:underline"
              >
                FAO
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <Link
            href="/pecuaria/galinhas/orientacoes"
            className="rounded-lg border border-white/20 px-5 py-3 text-center font-semibold text-white hover:bg-white/10"
          >
            ← Todas as orientações
          </Link>

          <Link
            href="/pecuaria/galinhas/orientacoes/poedeiras"
            className="rounded-lg bg-green-600 px-5 py-3 text-center font-semibold text-white hover:bg-green-700"
          >
            Próximo: Poedeiras →
          </Link>
        </div>
      </section>
    </main>
  );
}