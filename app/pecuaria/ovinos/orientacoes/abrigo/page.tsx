"use client";

import Link from "next/link";
import { useState } from "react";

const imagens = {
  hero: "https://www.fao.org/4/s1250e/S1250E17.htm",
  campo: "https://www.fao.org/4/ah651e/AH651E13.htm",
  instalacoes: "https://www.fao.org/4/x6542e/X6542E05.htm",
};

const zonas = [
  {
    titulo: "Área de descanso",
    texto:
      "Local seco e protegido onde os animais possam deitar, descansar e ruminar sem permanecer em lama ou água acumulada.",
  },
  {
    titulo: "Área de alimentação",
    texto:
      "Comedouros ou estruturas que reduzam a contaminação dos alimentos por fezes, urina e solo.",
  },
  {
    titulo: "Área de água",
    texto:
      "Bebedouros colocados de forma a permitir acesso fácil e limpeza frequente, evitando acumulação de lama.",
  },
  {
    titulo: "Área de manejo",
    texto:
      "Espaço para separar animais, realizar inspeções, tratamentos, pesagens, identificação e outras operações.",
  },
  {
    titulo: "Área de maternidade",
    texto:
      "Espaço preparado para acompanhar ovelhas próximas do parto e fortalecer a relação entre mãe e cordeiro.",
  },
  {
    titulo: "Área de isolamento",
    texto:
      "Local separado para animais doentes, suspeitos ou que necessitem de observação específica.",
  },
];

const problemas = [
  {
    id: "lama",
    titulo: "Lama e humidade",
    texto:
      "O excesso de humidade deteriora o conforto, dificulta a limpeza e pode favorecer problemas de casco e contaminação ambiental. A escolha de terreno bem drenado é uma das decisões mais importantes antes da construção.",
  },
  {
    id: "ventilacao",
    titulo: "Má ventilação",
    texto:
      "Um abrigo fechado não significa necessariamente um abrigo melhor. A ventilação precisa remover humidade, calor, odores e contaminantes sem criar correntes de ar prejudiciais diretamente sobre os animais.",
  },
  {
    id: "lotacao",
    titulo: "Excesso de animais",
    texto:
      "A elevada concentração aumenta a competição por alimento e água, dificulta a higiene e pode aumentar a pressão sanitária. A lotação deve ser compatível com o espaço disponível, sistema de produção e capacidade de limpeza.",
  },
  {
    id: "sol",
    titulo: "Exposição excessiva ao calor",
    texto:
      "Em regiões quentes, a sombra e a ventilação são fundamentais. O telhado deve reduzir a carga térmica e o desenho do abrigo deve permitir circulação de ar.",
  },
  {
    id: "drenagem",
    titulo: "Drenagem inadequada",
    texto:
      "Água de chuva, lavagem e urina não devem permanecer acumuladas junto às áreas de permanência. O terreno, piso e canais de drenagem devem trabalhar em conjunto.",
  },
];

const categorias = [
  {
    animal: "Ovelha adulta",
    referencia:
      "A necessidade de espaço depende do peso, sistema e nível de confinamento.",
  },
  {
    animal: "Ovelha gestante",
    referencia:
      "Deve haver espaço suficiente para repouso e circulação, evitando competição excessiva.",
  },
  {
    animal: "Ovelha com cordeiro",
    referencia:
      "Necessita de espaço adicional para permitir movimentação e interação mãe-cria.",
  },
  {
    animal: "Cordeiro",
    referencia:
      "O espaço deve permitir repouso, movimento e acesso seguro à alimentação e água.",
  },
  {
    animal: "Carneiro",
    referencia:
      "É recomendável possuir uma área própria que permita separação e maneio reprodutivo.",
  },
];

export default function AbrigoOvinosPage() {
  const [problemaAtivo, setProblemaAtivo] = useState("lama");

  const problema =
    problemas.find((item) => item.id === problemaAtivo) ?? problemas[0];

  return (
    <main className="min-h-screen bg-[#f4f7f2] text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#102d20]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#163d2a] via-[#102d20] to-[#071a12]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-200">
              AGROINOVA ANGOLA · PECUÁRIA · OVINOS
            </p>

            <h1 className="mt-4 text-4xl font-black leading-tight text-white md:text-6xl">
              Abrigo e instalações para ovinos
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/90 md:text-xl">
              Princípios técnicos para localização, construção, ventilação,
              drenagem, pisos, sombra, maternidade, alimentação, água,
              isolamento, higiene e organização das instalações ovinas
              adaptadas às condições de produção em Angola.
            </p>

            <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Localização",
                "Ventilação",
                "Drenagem",
                "Maternidade",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-center text-sm font-semibold text-white backdrop-blur"
                >
                  {item}
                </div>
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
            className="font-semibold text-emerald-800 hover:underline"
          >
            Pecuária
          </Link>

          <span className="text-slate-400">/</span>

          <Link
            href="/pecuaria/ovinos/orientacoes"
            className="font-semibold text-emerald-800 hover:underline"
          >
            Ovinos
          </Link>

          <span className="text-slate-400">/</span>

          <span className="text-slate-600">Abrigo</span>
        </div>
      </div>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
              Instalações
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl">
              Um bom abrigo não precisa ser caro. Precisa ser bem pensado.
            </h2>

            <div className="mt-6 space-y-5 text-[16px] leading-8 text-slate-700">
              <p className="text-justify">
                As instalações devem proteger os ovinos das condições
                ambientais adversas e, ao mesmo tempo, facilitar o trabalho do
                produtor. Uma estrutura demasiado fechada pode acumular calor e
                humidade; uma estrutura demasiado aberta pode deixar os animais
                expostos à chuva, vento ou predadores.
              </p>

              <p className="text-justify">
                A FAO destaca que a construção deve considerar o sistema de
                produção, o clima, a dimensão do rebanho, a alimentação, a
                disponibilidade de água e as operações de manejo. Em regiões
                tropicais e semiáridas, instalações simples podem ser
                suficientes quando existe sombra adequada e proteção contra
                chuva e condições ambientais adversas.
              </p>

              <p className="text-justify">
                Em Angola, isso é especialmente importante porque os sistemas
                de criação são muito diferentes entre regiões. Um abrigo
                concebido para uma zona húmida não precisa necessariamente da
                mesma configuração de um abrigo numa região árida do sul.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-[#103b28] p-7 text-white shadow-xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-lime-200">
              Ideia central
            </p>

            <p className="mt-5 text-2xl font-black leading-9">
              O objetivo não é construir um edifício. É criar um ambiente
              seguro para os animais.
            </p>

            <div className="mt-7 border-t border-white/20 pt-6 text-sm leading-7 text-white/75">
              Local seco, ventilação adequada, sombra, água, alimentação,
              higiene e facilidade de manejo são mais importantes do que uma
              construção sofisticada.
            </div>
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
              Primeiro passo
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              Antes de escolher o material, escolha o local
            </h2>

            <p className="mt-5 text-justify text-[16px] leading-8 text-slate-700">
              Muitos problemas de instalações começam antes da construção. Um
              terreno baixo, com drenagem deficiente, pode transformar um
              abrigo aparentemente bem construído num ambiente húmido e
              difícil de manter. A FAO recomenda terreno bem drenado e chama
              atenção para a pouca tolerância de ovinos e caprinos a ambientes
              lamacentos.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Terreno elevado",
                "Reduz risco de acumulação de água.",
              ],
              [
                "Boa drenagem",
                "Evita lama e água junto às instalações.",
              ],
              [
                "Acesso",
                "Facilita entrada de produtores, alimentação e transporte.",
              ],
              [
                "Água",
                "A fonte deve ser acessível e de qualidade adequada.",
              ],
            ].map(([titulo, texto]) => (
              <article
                key={titulo}
                className="rounded-3xl border border-slate-200 bg-[#f8faf7] p-6"
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
        </div>
      </section>

      {/* CLIMA */}
      <section className="bg-[#103b28] py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-lime-200">
              Clima
            </p>

            <h2 className="mt-2 text-3xl font-black md:text-4xl">
              O abrigo deve responder ao clima da região
            </h2>

            <p className="mt-6 text-justify text-[16px] leading-8 text-white/80">
              Não existe um modelo único de instalação ovina para Angola. O
              desenho deve responder à temperatura, chuva, vento, humidade,
              disponibilidade de sombra e sistema de criação.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <article className="rounded-3xl bg-white/10 p-7">
              <p className="text-sm text-lime-200">Regiões mais áridas</p>

              <h3 className="mt-2 text-xl font-bold">
                Sombra e circulação de ar
              </h3>

              <p className="mt-3 text-justify text-sm leading-7 text-white/70">
                O abrigo deve reduzir a exposição direta ao calor e permitir
                circulação de ar, mantendo acesso a água e áreas de descanso.
              </p>
            </article>

            <article className="rounded-3xl bg-white/10 p-7">
              <p className="text-sm text-lime-200">Regiões húmidas</p>

              <h3 className="mt-2 text-xl font-bold">
                Drenagem e secagem
              </h3>

              <p className="mt-3 text-justify text-sm leading-7 text-white/70">
                Piso, cobertura e canais de drenagem tornam-se especialmente
                importantes para evitar lama e humidade persistente.
              </p>
            </article>

            <article className="rounded-3xl bg-white/10 p-7">
              <p className="text-sm text-lime-200">Regiões de altitude</p>

              <h3 className="mt-2 text-xl font-bold">
                Proteção contra frio
              </h3>

              <p className="mt-3 text-justify text-sm leading-7 text-white/70">
                Deve-se equilibrar proteção contra vento e frio com ventilação
                suficiente para evitar condensação e ar de má qualidade.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* VENTILAÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div className="rounded-3xl bg-[#edf3eb] p-8">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
              Ar
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              Ventilação não significa vento diretamente sobre os animais
            </h2>

            <p className="mt-5 text-justify text-sm leading-7 text-slate-700">
              O objetivo da ventilação é renovar o ar, remover humidade, calor,
              odores e contaminantes. A FAO recomenda circulação de ar acima
              da altura dos animais e soluções construtivas que favoreçam a
              renovação do ar.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              [
                "Entrada de ar",
                "Aberturas adequadas permitem entrada de ar fresco.",
              ],
              [
                "Saída de ar",
                "A parte superior deve permitir a saída do ar quente e húmido.",
              ],
              [
                "Evitar correntes",
                "O fluxo não deve atingir diretamente cordeiros ou animais vulneráveis.",
              ],
              [
                "Cobertura",
                "O telhado deve proteger contra chuva e reduzir carga térmica.",
              ],
            ].map(([titulo, texto]) => (
              <article
                key={titulo}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900">
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

      {/* PISO */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
              Piso
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              O piso influencia higiene, conforto e saúde
            </h2>

            <p className="mt-5 text-justify text-[16px] leading-8 text-slate-700">
              O piso deve ser firme, seguro, relativamente seco e compatível
              com o sistema de produção. A FAO descreve diferentes opções,
              incluindo piso sólido e sistemas ripados, cada um com vantagens
              e limitações.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-3 bg-[#103b28] text-sm font-bold text-white">
              <div className="p-5">Tipo</div>
              <div className="p-5">Vantagem</div>
              <div className="p-5">Atenção</div>
            </div>

            {[
              [
                "Terra compactada",
                "Baixo custo e fácil execução.",
                "Exige boa drenagem e manutenção.",
              ],
              [
                "Concreto",
                "Fácil limpeza e durabilidade.",
                "Pode ficar escorregadio ou desconfortável se mal executado.",
              ],
              [
                "Ripado",
                "Facilita separação de fezes e reduz humidade.",
                "Exige dimensionamento correto para evitar lesões.",
              ],
              [
                "Cama profunda",
                "Pode proporcionar conforto e isolamento.",
                "Exige reposição e gestão adequada do material.",
              ],
            ].map(([tipo, vantagem, atencao]) => (
              <div
                key={tipo}
                className="grid grid-cols-3 border-t border-slate-100"
              >
                <div className="p-5 font-semibold text-slate-900">
                  {tipo}
                </div>

                <div className="p-5 text-justify text-sm leading-7 text-slate-600">
                  {vantagem}
                </div>

                <div className="p-5 text-justify text-sm leading-7 text-slate-600">
                  {atencao}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESPAÇO */}
      <section className="bg-[#edf3eb] py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
              Lotação
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              Espaço suficiente reduz competição e facilita o maneio
            </h2>

            <p className="mt-5 text-justify text-[16px] leading-8 text-slate-700">
              A necessidade de espaço varia com peso, categoria, sistema de
              produção e tempo de permanência. A FAO apresenta, por exemplo,
              referências de área coberta para diferentes categorias de ovinos,
              mas estas referências não devem ser copiadas cegamente para
              qualquer exploração angolana. Devem ser ajustadas ao sistema e às
              condições locais.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {categorias.map((categoria) => (
              <article
                key={categoria.animal}
                className="rounded-3xl bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900">
                  {categoria.animal}
                </h3>

                <p className="mt-3 text-justify text-sm leading-7 text-slate-600">
                  {categoria.referencia}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-emerald-200 bg-white p-7">
            <p className="text-sm leading-7 text-slate-600">
              Como referência técnica internacional, a FAO apresenta valores
              aproximados de 0,8–1,4 m² por animal adulto em determinadas
              condições de produção intensiva, variando com o peso, e cerca de
              0,4–0,5 m² para cordeiros em piso sólido. Estes valores são
              referências de projeto e não constituem uma norma angolana.
            </p>
          </div>
        </div>
      </section>

      {/* MATERNIDADE */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
              Maternidade
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              A área de parto merece um espaço próprio
            </h2>

            <div className="mt-6 space-y-5 text-justify text-[16px] leading-8 text-slate-700">
              <p>
                A área de maternidade permite acompanhar a ovelha próxima do
                parto e facilitar a formação do vínculo entre mãe e cordeiro.
                Também ajuda o produtor a observar a ingestão de colostro e o
                comportamento da cria.
              </p>

              <p>
                A FAO apresenta como referência individual para determinados
                sistemas de produção áreas de aproximadamente 1,5 a 2,5 m²
                por baia de parto, dependendo do tamanho da ovelha e do número
                esperado de cordeiros.
              </p>

              <p>
                Para Angola, o dimensionamento deve considerar o número de
                partos simultâneos e o sistema de criação. Não faz sentido
                construir dezenas de baias individuais numa pequena exploração
                se a maior parte do ano elas permanecerá inutilizada.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-[#103b28] p-8 text-white">
            <h3 className="text-2xl font-black">
              Uma maternidade funcional deve permitir:
            </h3>

            <div className="mt-6 space-y-3">
              {[
                "Separar temporariamente a ovelha e o cordeiro.",
                "Observar a mãe sem dificuldade.",
                "Disponibilizar água e alimento.",
                "Manter o piso seco.",
                "Realizar identificação.",
                "Observar o comportamento do cordeiro.",
                "Limpar e desinfetar a área entre utilizações.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white/10 p-4 text-sm leading-7 text-white/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ZONAS */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
            Organização
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900">
            Um abrigo pode ser dividido em zonas de trabalho
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {zonas.map((zona) => (
              <article
                key={zona.titulo}
                className="rounded-3xl border border-slate-200 bg-[#f8faf7] p-7"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {zona.titulo}
                </h3>

                <p className="mt-3 text-justify text-sm leading-7 text-slate-600">
                  {zona.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ALIMENTAÇÃO E ÁGUA */}
      <section className="bg-[#103b28] py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl bg-white/10 p-8">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-lime-200">
                Alimentação
              </p>

              <h2 className="mt-2 text-2xl font-black">
                Comedouros devem proteger o alimento
              </h2>

              <p className="mt-5 text-justify text-sm leading-7 text-white/75">
                O alimento colocado diretamente no chão pode ser contaminado
                com fezes, urina e terra. Comedouros elevados ou estruturas
                adequadamente dimensionadas podem reduzir desperdício e
                contaminação. A FAO recomenda que equipamentos de alimentação e
                água sejam posicionados de forma a reduzir sujidade.
              </p>
            </article>

            <article className="rounded-3xl bg-white/10 p-8">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-lime-200">
                Água
              </p>

              <h2 className="mt-2 text-2xl font-black">
                O bebedouro faz parte da instalação sanitária
              </h2>

              <p className="mt-5 text-justify text-sm leading-7 text-white/75">
                O acesso à água deve ser fácil e o sistema deve permitir
                limpeza. Bebedouros colocados em zonas permanentemente
                enlameadas podem transformar a área de água num ponto de
                contaminação.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* MANEJO */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
            Manejo
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900">
            O abrigo também deve facilitar o trabalho do produtor
          </h2>

          <p className="mt-5 text-justify text-[16px] leading-8 text-slate-700">
            Uma instalação pode ser tecnicamente correta para os animais e,
            ainda assim, ser pouco funcional para quem trabalha nela. Portas,
            divisórias, corredores, áreas de contenção e acesso aos comedouros
            devem ser pensados para facilitar operações de rotina. A FAO
            recomenda que as instalações mantenham flexibilidade de subdivisão
            para diferentes operações de maneio.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Separação", "Divisórias móveis permitem formar grupos."],
            ["Contenção", "Facilita inspeção e tratamentos."],
            ["Pesagem", "Uma área de pesagem melhora o acompanhamento."],
            ["Identificação", "Permite organizar lotes e registos."],
          ].map(([titulo, texto]) => (
            <article
              key={titulo}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
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
      </section>

      {/* HIGIENE */}
      <section className="bg-[#edf3eb] py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
              Higiene
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              Limpeza não é apenas retirar estrume
            </h2>

            <p className="mt-5 text-justify text-[16px] leading-8 text-slate-700">
              A higiene das instalações envolve retirada de matéria orgânica,
              manutenção do piso seco, limpeza de comedouros e bebedouros,
              controlo de águas residuais e organização das áreas de animais.
              A desinfeção, quando necessária, deve ser feita depois da limpeza,
              porque a matéria orgânica pode reduzir a eficácia de muitos
              desinfetantes.
            </p>
          </div>

          <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Retirar fezes e material sujo.",
                "Manter áreas de descanso secas.",
                "Limpar equipamentos de alimentação.",
                "Higienizar bebedouros regularmente.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-[#f3f7f0] p-5 text-sm leading-7 text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMAS INTERATIVOS */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
            Diagnóstico das instalações
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900">
            O que pode estar errado no abrigo?
          </h2>

          <p className="mt-5 text-justify text-slate-600">
            Observe a instalação como um sistema. Muitas vezes o problema
            sanitário observado no animal começa numa falha de ambiente.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="space-y-3">
            {problemas.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setProblemaAtivo(item.id)}
                className={`w-full rounded-2xl border p-5 text-left transition ${
                  problemaAtivo === item.id
                    ? "border-emerald-800 bg-emerald-900 text-white shadow-lg"
                    : "border-slate-200 bg-white hover:border-emerald-400"
                }`}
              >
                <span className="font-bold">{item.titulo}</span>
              </button>
            ))}
          </div>

          <div className="rounded-3xl bg-[#f0f5ed] p-8">
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
              Avaliação
            </p>

            <h3 className="mt-3 text-2xl font-black text-slate-900">
              {problema.titulo}
            </h3>

            <p className="mt-5 text-justify text-[16px] leading-8 text-slate-700">
              {problema.texto}
            </p>
          </div>
        </div>
      </section>

      {/* BIOSSEGURANÇA */}
      <section className="bg-[#102d20] py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-lime-200">
              Biossegurança
            </p>

            <h2 className="mt-2 text-3xl font-black md:text-4xl">
              A instalação deve ajudar a separar animais saudáveis e doentes
            </h2>

            <p className="mt-6 text-justify text-[16px] leading-8 text-white/80">
              Sempre que possível, deve existir uma área destinada ao
              isolamento de animais doentes ou suspeitos. Isto facilita a
              observação, reduz contacto desnecessário com o restante rebanho e
              permite organizar melhor limpeza e tratamentos.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl bg-white/10 p-7">
              <h3 className="text-xl font-bold">Entrada</h3>

              <p className="mt-3 text-justify text-sm leading-7 text-white/70">
                Deve permitir controlar a entrada de pessoas, equipamentos e
                animais.
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-7">
              <h3 className="text-xl font-bold">Isolamento</h3>

              <p className="mt-3 text-justify text-sm leading-7 text-white/70">
                Animais doentes não devem permanecer misturados com o grupo
                quando o isolamento for indicado.
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-7">
              <h3 className="text-xl font-bold">Fluxo</h3>

              <p className="mt-3 text-justify text-sm leading-7 text-white/70">
                O desenho deve reduzir cruzamentos desnecessários entre áreas
                limpas e áreas contaminadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ANGOLA */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
            Realidade angolana
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900">
            Como pensar instalações para diferentes regiões de Angola
          </h2>

          <div className="mt-7 space-y-5 text-justify text-[16px] leading-8 text-slate-700">
            <p>
              O RAPP 2019/2020 registou 325.207 ovinos nas explorações
              familiares a nível nacional. Historicamente, Namibe apresentou
              86.344 ovinos, seguido de Uíge com 35.692 e Cuanza Sul com
              35.118. Estes números são dados históricos e não devem ser
              apresentados como efetivos atuais.
            </p>

            <p>
              A importância dessas diferenças é que o desenho das instalações
              não pode ser desligado do ambiente. Uma exploração no Namibe
              enfrenta desafios diferentes de uma exploração no Uíge ou no
              Huambo.
            </p>

            <p>
              No sul, a instalação deve dar grande atenção à sombra, água,
              proteção contra calor e aproveitamento eficiente das pastagens.
              Em regiões com maior precipitação, a drenagem, secagem do piso e
              controlo da humidade ganham maior importância.
            </p>

            <p>
              A construção pode utilizar materiais disponíveis localmente,
              desde que sejam seguros, duráveis e adequados. A FAO também
              salienta que instalações simples podem ser construídas com
              materiais locais, desde que cumpram as funções necessárias de
              proteção e maneio.
            </p>
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="bg-[#edf3eb] py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
              Checklist
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              Antes de construir ou reformar um abrigo
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "O terreno fica livre de água acumulada?",
              "Existe drenagem adequada?",
              "Há sombra suficiente?",
              "A ventilação funciona sem criar correntes prejudiciais?",
              "O telhado protege contra chuva?",
              "Existe espaço suficiente para os animais?",
              "Os comedouros podem ser limpos?",
              "Os bebedouros são acessíveis?",
              "Existe área para maternidade?",
              "Existe local para isolamento?",
              "As divisórias permitem separar lotes?",
              "A instalação pode ser limpa com facilidade?",
              "É possível retirar o estrume?",
              "A instalação facilita a observação dos animais?",
              "Existe proteção contra predadores e furto?",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700"
              >
                {item}
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
            Instalações adaptadas à realidade dos produtores angolanos
          </h2>

          <p className="mt-6 max-w-4xl text-justify text-white/75">
            Existe espaço para investigação aplicada sobre modelos de abrigo
            de baixo custo, materiais locais, conforto térmico, mortalidade de
            cordeiros, drenagem, higiene, aproveitamento de resíduos e
            instalações adequadas aos diferentes sistemas de produção ovina do
            país.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Abrigos de baixo custo para sistemas familiares.",
              "Materiais locais de construção.",
              "Soluções para regiões semiáridas.",
              "Gestão térmica dos abrigos.",
              "Drenagem em zonas de elevada precipitação.",
              "Instalações para maternidade.",
              "Modelos de isolamento sanitário.",
              "Custo de construção por animal.",
              "Impacto das instalações na mortalidade de cordeiros.",
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
            Fontes técnicas
          </h2>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <a
              href={imagens.hero}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-emerald-700 hover:bg-emerald-50"
            >
              <strong className="text-slate-900">
                FAO — Sheep and goat housing
              </strong>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Referência sobre localização, drenagem, pisos, ventilação,
                equipamentos e espaço para ovinos.
              </p>
            </a>

            <a
              href={imagens.instalacoes}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-emerald-700 hover:bg-emerald-50"
            >
              <strong className="text-slate-900">
                FAO — Intensive sheep production
              </strong>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Referência sobre instalações, maternidade, ventilação, pisos,
                áreas de manejo e organização da exploração.
              </p>
            </a>

            <a
              href={imagens.campo}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-emerald-700 hover:bg-emerald-50"
            >
              <strong className="text-slate-900">
                FAO — Hair sheep production
              </strong>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Referência prática sobre abrigos, sombra, drenagem, água,
                alimentação e organização dos espaços.
              </p>
            </a>

            <a
              href="https://www.fao.org/fileadmin/templates/ess/ess_test_folder/World_Census_Agriculture/WCA_2020/WCA_2020_new_doc/ANG_REP3_POR_2019_2020.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-emerald-700 hover:bg-emerald-50"
            >
              <strong className="text-slate-900">
                FAO/INE — RAPP Angola 2019/2020
              </strong>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Dados históricos sobre efetivos e distribuição dos ovinos em
                Angola.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="bg-[#f4f7f2]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
          <Link
            href="/pecuaria/ovinos/orientacoes/cordeiros"
            className="rounded-2xl border border-slate-300 bg-white px-6 py-4 font-semibold text-slate-800 transition hover:border-emerald-700 hover:text-emerald-800"
          >
            ← Tema anterior: Cordeiros
          </Link>

          <Link
            href="/pecuaria/ovinos/orientacoes"
            className="rounded-2xl bg-emerald-800 px-6 py-4 font-semibold text-white transition hover:bg-emerald-900"
          >
            Voltar para Orientações de Ovinos
          </Link>
        </div>
      </section>
    </main>
  );
}