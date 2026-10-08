"use client";

import Link from "next/link";
import { useState } from "react";

const imagens = {
  hero:
    "https://www.fao.org/4/s1250e/S1250E17.htm",
  campo:
    "https://www.fao.org/4/ah651e/AH651E13.htm",
  instalaÃ§Ãµes:
    "https://www.fao.org/4/x6542e/X6542E05.htm",
};

const zonas = [
  {
    titulo: "Ãrea de descanso",
    texto:
      "Local seco e protegido onde os animais possam deitar, descansar e ruminar sem permanecer em lama ou Ã¡gua acumulada.",
  },
  {
    titulo: "Ãrea de alimentaÃ§Ã£o",
    texto:
      "Comedouros ou estruturas que reduzam a contaminaÃ§Ã£o dos alimentos por fezes, urina e solo.",
  },
  {
    titulo: "Ãrea de Ã¡gua",
    texto:
      "Bebedouros colocados de forma a permitir acesso fÃ¡cil e limpeza frequente, evitando acumulaÃ§Ã£o de lama.",
  },
  {
    titulo: "Ãrea de manejo",
    texto:
      "EspaÃ§o para separar animais, realizar inspeÃ§Ãµes, tratamentos, pesagens, identificaÃ§Ã£o e outras operaÃ§Ãµes.",
  },
  {
    titulo: "Ãrea de maternidade",
    texto:
      "EspaÃ§o preparado para acompanhar ovelhas prÃ³ximas do parto e fortalecer a relaÃ§Ã£o entre mÃ£e e cordeiro.",
  },
  {
    titulo: "Ãrea de isolamento",
    texto:
      "Local separado para animais doentes, suspeitos ou que necessitem de observaÃ§Ã£o especÃ­fica.",
  },
];

const problemas = [
  {
    id: "lama",
    titulo: "Lama e humidade",
    texto:
      "O excesso de humidade deteriora o conforto, dificulta a limpeza e pode favorecer problemas de casco e contaminaÃ§Ã£o ambiental. A escolha de terreno bem drenado Ã© uma das decisÃµes mais importantes antes da construÃ§Ã£o.",
  },
  {
    id: "ventilacao",
    titulo: "MÃ¡ ventilaÃ§Ã£o",
    texto:
      "Um abrigo fechado nÃ£o significa necessariamente um abrigo melhor. A ventilaÃ§Ã£o precisa remover humidade, calor, odores e contaminantes sem criar correntes de ar prejudiciais diretamente sobre os animais.",
  },
  {
    id: "lotacao",
    titulo: "Excesso de animais",
    texto:
      "A elevada concentraÃ§Ã£o aumenta a competiÃ§Ã£o por alimento e Ã¡gua, dificulta a higiene e pode aumentar a pressÃ£o sanitÃ¡ria. A lotaÃ§Ã£o deve ser compatÃ­vel com o espaÃ§o disponÃ­vel, sistema de produÃ§Ã£o e capacidade de limpeza.",
  },
  {
    id: "sol",
    titulo: "ExposiÃ§Ã£o excessiva ao calor",
    texto:
      "Em regiÃµes quentes, a sombra e a ventilaÃ§Ã£o sÃ£o fundamentais. O telhado deve reduzir a carga tÃ©rmica e o desenho do abrigo deve permitir circulaÃ§Ã£o de ar.",
  },
  {
    id: "drenagem",
    titulo: "Drenagem inadequada",
    texto:
      "Ãgua de chuva, lavagem e urina nÃ£o devem permanecer acumuladas junto Ã s Ã¡reas de permanÃªncia. O terreno, piso e canais de drenagem devem trabalhar em conjunto.",
  },
];

const categorias = [
  {
    animal: "Ovelha adulta",
    referencia:
      "A necessidade de espaÃ§o depende do peso, sistema e nÃ­vel de confinamento.",
  },
  {
    animal: "Ovelha gestante",
    referencia:
      "Deve haver espaÃ§o suficiente para repouso e circulaÃ§Ã£o, evitando competiÃ§Ã£o excessiva.",
  },
  {
    animal: "Ovelha com cordeiro",
    referencia:
      "Necessita de espaÃ§o adicional para permitir movimentaÃ§Ã£o e interaÃ§Ã£o mÃ£e-cria.",
  },
  {
    animal: "Cordeiro",
    referencia:
      "O espaÃ§o deve permitir repouso, movimento e acesso seguro Ã  alimentaÃ§Ã£o e Ã¡gua.",
  },
  {
    animal: "Carneiro",
    referencia:
      "Ã‰ recomendÃ¡vel possuir uma Ã¡rea prÃ³pria que permita separaÃ§Ã£o e maneio reprodutivo.",
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
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://www.fao.org/4/s1250e/S1250E17.htm')",
          }}
        />

        <div className="absolute inset-0 bg-[#102d20]/75" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-200">
              AGROINOVA ANGOLA â€¢ PECUÃRIA â€¢ OVINOS
            </p>

            <h1 className="mt-4 text-4xl font-black leading-tight text-white md:text-6xl">
              Abrigo e instalaÃ§Ãµes para ovinos
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/90 md:text-xl">
              PrincÃ­pios tÃ©cnicos para localizaÃ§Ã£o, construÃ§Ã£o, ventilaÃ§Ã£o,
              drenagem, pisos, sombra, maternidade, alimentaÃ§Ã£o, Ã¡gua,
              isolamento, higiene e organizaÃ§Ã£o das instalaÃ§Ãµes ovinas
              adaptadas Ã s condiÃ§Ãµes de produÃ§Ã£o em Angola.
            </p>

            <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "LocalizaÃ§Ã£o",
                "VentilaÃ§Ã£o",
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
            PecuÃ¡ria
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

      {/* INTRODUÃ‡ÃƒO */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
              InstalaÃ§Ãµes
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl">
              Um bom abrigo nÃ£o precisa ser caro. Precisa ser bem pensado.
            </h2>

            <div className="mt-6 space-y-5 text-[16px] leading-8 text-slate-700">
              <p className="text-justify">
                As instalaÃ§Ãµes devem proteger os ovinos das condiÃ§Ãµes
                ambientais adversas e, ao mesmo tempo, facilitar o trabalho do
                produtor. Uma estrutura demasiado fechada pode acumular calor e
                humidade; uma estrutura demasiado aberta pode deixar os animais
                expostos Ã  chuva, vento ou predadores.
              </p>

              <p className="text-justify">
                A FAO destaca que a construÃ§Ã£o deve considerar o sistema de
                produÃ§Ã£o, o clima, a dimensÃ£o do rebanho, a alimentaÃ§Ã£o, a
                disponibilidade de Ã¡gua e as operaÃ§Ãµes de manejo. Em regiÃµes
                tropicais e semiÃ¡ridas, instalaÃ§Ãµes simples podem ser
                suficientes quando existe sombra adequada e proteÃ§Ã£o contra
                chuva e condiÃ§Ãµes ambientais adversas.
              </p>

              <p className="text-justify">
                Em Angola, isso Ã© especialmente importante porque os sistemas
                de criaÃ§Ã£o sÃ£o muito diferentes entre regiÃµes. Um abrigo
                concebido para uma zona hÃºmida nÃ£o precisa necessariamente da
                mesma configuraÃ§Ã£o de um abrigo numa regiÃ£o Ã¡rida do sul.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-[#103b28] p-7 text-white shadow-xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-lime-200">
              Ideia central
            </p>

            <p className="mt-5 text-2xl font-black leading-9">
              O objetivo nÃ£o Ã© construir um edifÃ­cio. Ã‰ criar um ambiente
              seguro para os animais.
            </p>

            <div className="mt-7 border-t border-white/20 pt-6 text-sm leading-7 text-white/75">
              Local seco, ventilaÃ§Ã£o adequada, sombra, Ã¡gua, alimentaÃ§Ã£o,
              higiene e facilidade de manejo sÃ£o mais importantes do que uma
              construÃ§Ã£o sofisticada.
            </div>
          </div>
        </div>
      </section>

      {/* LOCALIZAÃ‡ÃƒO */}
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
              Muitos problemas de instalaÃ§Ãµes comeÃ§am antes da construÃ§Ã£o. Um
              terreno baixo, com drenagem deficiente, pode transformar um
              abrigo aparentemente bem construÃ­do num ambiente hÃºmido e
              difÃ­cil de manter. A FAO recomenda terreno bem drenado e chama
              atenÃ§Ã£o para a pouca tolerÃ¢ncia de ovinos e caprinos a ambientes
              lamacentos.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Terreno elevado",
                "Reduz risco de acumulaÃ§Ã£o de Ã¡gua.",
              ],
              [
                "Boa drenagem",
                "Evita lama e Ã¡gua junto Ã s instalaÃ§Ãµes.",
              ],
              [
                "Acesso",
                "Facilita entrada de produtores, alimentaÃ§Ã£o e transporte.",
              ],
              [
                "Ãgua",
                "A fonte deve ser acessÃ­vel e de qualidade adequada.",
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
              O abrigo deve responder ao clima da regiÃ£o
            </h2>

            <p className="mt-6 text-justify text-[16px] leading-8 text-white/80">
              NÃ£o existe um modelo Ãºnico de instalaÃ§Ã£o ovina para Angola. O
              desenho deve responder Ã  temperatura, chuva, vento, humidade,
              disponibilidade de sombra e sistema de criaÃ§Ã£o.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <article className="rounded-3xl bg-white/10 p-7">
              <p className="text-sm text-lime-200">RegiÃµes mais Ã¡ridas</p>

              <h3 className="mt-2 text-xl font-bold">
                Sombra e circulaÃ§Ã£o de ar
              </h3>

              <p className="mt-3 text-justify text-sm leading-7 text-white/70">
                O abrigo deve reduzir a exposiÃ§Ã£o direta ao calor e permitir
                circulaÃ§Ã£o de ar, mantendo acesso a Ã¡gua e Ã¡reas de descanso.
              </p>
            </article>

            <article className="rounded-3xl bg-white/10 p-7">
              <p className="text-sm text-lime-200">RegiÃµes hÃºmidas</p>

              <h3 className="mt-2 text-xl font-bold">
                Drenagem e secagem
              </h3>

              <p className="mt-3 text-justify text-sm leading-7 text-white/70">
                Piso, cobertura e canais de drenagem tornam-se especialmente
                importantes para evitar lama e humidade persistente.
              </p>
            </article>

            <article className="rounded-3xl bg-white/10 p-7">
              <p className="text-sm text-lime-200">RegiÃµes de altitude</p>

              <h3 className="mt-2 text-xl font-bold">
                ProteÃ§Ã£o contra frio
              </h3>

              <p className="mt-3 text-justify text-sm leading-7 text-white/70">
                Deve-se equilibrar proteÃ§Ã£o contra vento e frio com ventilaÃ§Ã£o
                suficiente para evitar condensaÃ§Ã£o e ar de mÃ¡ qualidade.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* VENTILAÃ‡ÃƒO */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div className="rounded-3xl bg-[#edf3eb] p-8">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
              Ar
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              VentilaÃ§Ã£o nÃ£o significa vento diretamente sobre os animais
            </h2>

            <p className="mt-5 text-justify text-sm leading-7 text-slate-700">
              O objetivo da ventilaÃ§Ã£o Ã© renovar o ar, remover humidade, calor,
              odores e contaminantes. A FAO recomenda circulaÃ§Ã£o de ar acima
              da altura dos animais e soluÃ§Ãµes construtivas que favoreÃ§am a
              renovaÃ§Ã£o do ar.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              [
                "Entrada de ar",
                "Aberturas adequadas permitem entrada de ar fresco.",
              ],
              [
                "SaÃ­da de ar",
                "A parte superior deve permitir a saÃ­da do ar quente e hÃºmido.",
              ],
              [
                "Evitar correntes",
                "O fluxo nÃ£o deve atingir diretamente cordeiros ou animais vulnerÃ¡veis.",
              ],
              [
                "Cobertura",
                "O telhado deve proteger contra chuva e reduzir carga tÃ©rmica.",
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
              O piso influencia higiene, conforto e saÃºde
            </h2>

            <p className="mt-5 text-justify text-[16px] leading-8 text-slate-700">
              O piso deve ser firme, seguro, relativamente seco e compatÃ­vel
              com o sistema de produÃ§Ã£o. A FAO descreve diferentes opÃ§Ãµes,
              incluindo piso sÃ³lido e sistemas ripados, cada um com vantagens
              e limitaÃ§Ãµes.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-3 bg-[#103b28] text-sm font-bold text-white">
              <div className="p-5">Tipo</div>
              <div className="p-5">Vantagem</div>
              <div className="p-5">AtenÃ§Ã£o</div>
            </div>

            {[
              [
                "Terra compactada",
                "Baixo custo e fÃ¡cil execuÃ§Ã£o.",
                "Exige boa drenagem e manutenÃ§Ã£o.",
              ],
              [
                "Concreto",
                "FÃ¡cil limpeza e durabilidade.",
                "Pode ficar escorregadio ou desconfortÃ¡vel se mal executado.",
              ],
              [
                "Ripado",
                "Facilita separaÃ§Ã£o de fezes e reduz humidade.",
                "Exige dimensionamento correto para evitar lesÃµes.",
              ],
              [
                "Cama profunda",
                "Pode proporcionar conforto e isolamento.",
                "Exige reposiÃ§Ã£o e gestÃ£o adequada do material.",
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

      {/* ESPAÃ‡O */}
      <section className="bg-[#edf3eb] py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
              LotaÃ§Ã£o
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              EspaÃ§o suficiente reduz competiÃ§Ã£o e facilita o maneio
            </h2>

            <p className="mt-5 text-justify text-[16px] leading-8 text-slate-700">
              A necessidade de espaÃ§o varia com peso, categoria, sistema de
              produÃ§Ã£o e tempo de permanÃªncia. A FAO apresenta, por exemplo,
              referÃªncias de Ã¡rea coberta para diferentes categorias de ovinos,
              mas estas referÃªncias nÃ£o devem ser copiadas cegamente para
              qualquer exploraÃ§Ã£o angolana. Devem ser ajustadas ao sistema e Ã s
              condiÃ§Ãµes locais.
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
              Como referÃªncia tÃ©cnica internacional, a FAO apresenta valores
              aproximados de 0,8â€“1,4 mÂ² por animal adulto em determinadas
              condiÃ§Ãµes de produÃ§Ã£o intensiva, variando com o peso, e cerca de
              0,4â€“0,5 mÂ² para cordeiros em piso sÃ³lido. Estes valores sÃ£o
              referÃªncias de projeto e nÃ£o constituem uma norma angolana.
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
              A Ã¡rea de parto merece um espaÃ§o prÃ³prio
            </h2>

            <div className="mt-6 space-y-5 text-justify text-[16px] leading-8 text-slate-700">
              <p>
                A Ã¡rea de maternidade permite acompanhar a ovelha prÃ³xima do
                parto e facilitar a formaÃ§Ã£o do vÃ­nculo entre mÃ£e e cordeiro.
                TambÃ©m ajuda o produtor a observar a ingestÃ£o de colostro e o
                comportamento da cria.
              </p>

              <p>
                A FAO apresenta como referÃªncia individual para determinados
                sistemas de produÃ§Ã£o Ã¡reas de aproximadamente 1,5 a 2,5 mÂ²
                por baia de parto, dependendo do tamanho da ovelha e do nÃºmero
                esperado de cordeiros.
              </p>

              <p>
                Para Angola, o dimensionamento deve considerar o nÃºmero de
                partos simultÃ¢neos e o sistema de criaÃ§Ã£o. NÃ£o faz sentido
                construir dezenas de baias individuais numa pequena exploraÃ§Ã£o
                se a maior parte do ano elas permanecerÃ¡ inutilizada.
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
                "Observar a mÃ£e sem dificuldade.",
                "Disponibilizar Ã¡gua e alimento.",
                "Manter o piso seco.",
                "Realizar identificaÃ§Ã£o.",
                "Observar o comportamento do cordeiro.",
                "Limpar e desinfetar a Ã¡rea entre utilizaÃ§Ãµes.",
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
            OrganizaÃ§Ã£o
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

      {/* ALIMENTAÃ‡ÃƒO E ÃGUA */}
      <section className="bg-[#103b28] py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl bg-white/10 p-8">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-lime-200">
                AlimentaÃ§Ã£o
              </p>

              <h2 className="mt-2 text-2xl font-black">
                Comedouros devem proteger o alimento
              </h2>

              <p className="mt-5 text-justify text-sm leading-7 text-white/75">
                O alimento colocado diretamente no chÃ£o pode ser contaminado
                com fezes, urina e terra. Comedouros elevados ou estruturas
                adequadamente dimensionadas podem reduzir desperdÃ­cio e
                contaminaÃ§Ã£o. A FAO recomenda que equipamentos de alimentaÃ§Ã£o e
                Ã¡gua sejam posicionados de forma a reduzir sujidade.
              </p>
            </article>

            <article className="rounded-3xl bg-white/10 p-8">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-lime-200">
                Ãgua
              </p>

              <h2 className="mt-2 text-2xl font-black">
                O bebedouro faz parte da instalaÃ§Ã£o sanitÃ¡ria
              </h2>

              <p className="mt-5 text-justify text-sm leading-7 text-white/75">
                O acesso Ã  Ã¡gua deve ser fÃ¡cil e o sistema deve permitir
                limpeza. Bebedouros colocados em zonas permanentemente
                enlameadas podem transformar a Ã¡rea de Ã¡gua num ponto de
                contaminaÃ§Ã£o.
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
            O abrigo tambÃ©m deve facilitar o trabalho do produtor
          </h2>

          <p className="mt-5 text-justify text-[16px] leading-8 text-slate-700">
            Uma instalaÃ§Ã£o pode ser tecnicamente correta para os animais e,
            ainda assim, ser pouco funcional para quem trabalha nela. Portas,
            divisÃ³rias, corredores, Ã¡reas de contenÃ§Ã£o e acesso aos comedouros
            devem ser pensados para facilitar operaÃ§Ãµes de rotina. A FAO
            recomenda que as instalaÃ§Ãµes mantenham flexibilidade de subdivisÃ£o
            para diferentes operaÃ§Ãµes de maneio.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["SeparaÃ§Ã£o", "DivisÃ³rias mÃ³veis permitem formar grupos."],
            ["ContenÃ§Ã£o", "Facilita inspeÃ§Ã£o e tratamentos."],
            ["Pesagem", "Uma Ã¡rea de pesagem melhora o acompanhamento."],
            ["IdentificaÃ§Ã£o", "Permite organizar lotes e registos."],
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
              Limpeza nÃ£o Ã© apenas retirar estrume
            </h2>

            <p className="mt-5 text-justify text-[16px] leading-8 text-slate-700">
              A higiene das instalaÃ§Ãµes envolve retirada de matÃ©ria orgÃ¢nica,
              manutenÃ§Ã£o do piso seco, limpeza de comedouros e bebedouros,
              controlo de Ã¡guas residuais e organizaÃ§Ã£o das Ã¡reas de animais.
              A desinfeÃ§Ã£o, quando necessÃ¡ria, deve ser feita depois da limpeza,
              porque a matÃ©ria orgÃ¢nica pode reduzir a eficÃ¡cia de muitos
              desinfetantes.
            </p>
          </div>

          <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Retirar fezes e material sujo.",
                "Manter Ã¡reas de descanso secas.",
                "Limpar equipamentos de alimentaÃ§Ã£o.",
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
            DiagnÃ³stico das instalaÃ§Ãµes
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900">
            O que pode estar errado no abrigo?
          </h2>

          <p className="mt-5 text-justify text-slate-600">
            Observe a instalaÃ§Ã£o como um sistema. Muitas vezes o problema
            sanitÃ¡rio observado no animal comeÃ§a numa falha de ambiente.
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
              AvaliaÃ§Ã£o
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

      {/* BIOSSEGURANÃ‡A */}
      <section className="bg-[#102d20] py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-lime-200">
              BiosseguranÃ§a
            </p>

            <h2 className="mt-2 text-3xl font-black md:text-4xl">
              A instalaÃ§Ã£o deve ajudar a separar animais saudÃ¡veis e doentes
            </h2>

            <p className="mt-6 text-justify text-[16px] leading-8 text-white/80">
              Sempre que possÃ­vel, deve existir uma Ã¡rea destinada ao
              isolamento de animais doentes ou suspeitos. Isto facilita a
              observaÃ§Ã£o, reduz contacto desnecessÃ¡rio com o restante rebanho e
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
                Animais doentes nÃ£o devem permanecer misturados com o grupo
                quando o isolamento for indicado.
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-7">
              <h3 className="text-xl font-bold">Fluxo</h3>

              <p className="mt-3 text-justify text-sm leading-7 text-white/70">
                O desenho deve reduzir cruzamentos desnecessÃ¡rios entre Ã¡reas
                limpas e Ã¡reas contaminadas.
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
            Como pensar instalaÃ§Ãµes para diferentes regiÃµes de Angola
          </h2>

          <div className="mt-7 space-y-5 text-justify text-[16px] leading-8 text-slate-700">
            <p>
              O RAPP 2019/2020 registou 325.207 ovinos nas exploraÃ§Ãµes
              familiares a nÃ­vel nacional. Historicamente, Namibe apresentou
              86.344 ovinos, seguido de UÃ­ge com 35.692 e Cuanza Sul com
              35.118. Estes nÃºmeros sÃ£o dados histÃ³ricos e nÃ£o devem ser
              apresentados como efetivos atuais.
            </p>

            <p>
              A importÃ¢ncia dessas diferenÃ§as Ã© que o desenho das instalaÃ§Ãµes
              nÃ£o pode ser desligado do ambiente. Uma exploraÃ§Ã£o no Namibe
              enfrenta desafios diferentes de uma exploraÃ§Ã£o no UÃ­ge ou no
              Huambo.
            </p>

            <p>
              No sul, a instalaÃ§Ã£o deve dar grande atenÃ§Ã£o Ã  sombra, Ã¡gua,
              proteÃ§Ã£o contra calor e aproveitamento eficiente das pastagens.
              Em regiÃµes com maior precipitaÃ§Ã£o, a drenagem, secagem do piso e
              controlo da humidade ganham maior importÃ¢ncia.
            </p>

            <p>
              A construÃ§Ã£o pode utilizar materiais disponÃ­veis localmente,
              desde que sejam seguros, durÃ¡veis e adequados. A FAO tambÃ©m
              salienta que instalaÃ§Ãµes simples podem ser construÃ­das com
              materiais locais, desde que cumpram as funÃ§Ãµes necessÃ¡rias de
              proteÃ§Ã£o e maneio.
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
              "O terreno fica livre de Ã¡gua acumulada?",
              "Existe drenagem adequada?",
              "HÃ¡ sombra suficiente?",
              "A ventilaÃ§Ã£o funciona sem criar correntes prejudiciais?",
              "O telhado protege contra chuva?",
              "Existe espaÃ§o suficiente para os animais?",
              "Os comedouros podem ser limpos?",
              "Os bebedouros sÃ£o acessÃ­veis?",
              "Existe Ã¡rea para maternidade?",
              "Existe local para isolamento?",
              "As divisÃ³rias permitem separar lotes?",
              "A instalaÃ§Ã£o pode ser limpa com facilidade?",
              "Ã‰ possÃ­vel retirar o estrume?",
              "A instalaÃ§Ã£o facilita a observaÃ§Ã£o dos animais?",
              "Existe proteÃ§Ã£o contra predadores e furto?",
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

      {/* INVESTIGAÃ‡ÃƒO */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="rounded-[2rem] bg-[#103b28] p-8 text-white md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-lime-200">
            InvestigaÃ§Ã£o em Angola
          </p>

          <h2 className="mt-2 max-w-4xl text-3xl font-black md:text-4xl">
            InstalaÃ§Ãµes adaptadas Ã  realidade dos produtores angolanos
          </h2>

          <p className="mt-6 max-w-4xl text-justify text-white/75">
            Existe espaÃ§o para investigaÃ§Ã£o aplicada sobre modelos de abrigo
            de baixo custo, materiais locais, conforto tÃ©rmico, mortalidade de
            cordeiros, drenagem, higiene, aproveitamento de resÃ­duos e
            instalaÃ§Ãµes adequadas aos diferentes sistemas de produÃ§Ã£o ovina do
            paÃ­s.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Abrigos de baixo custo para sistemas familiares.",
              "Materiais locais de construÃ§Ã£o.",
              "SoluÃ§Ãµes para regiÃµes semiÃ¡ridas.",
              "GestÃ£o tÃ©rmica dos abrigos.",
              "Drenagem em zonas de elevada precipitaÃ§Ã£o.",
              "InstalaÃ§Ãµes para maternidade.",
              "Modelos de isolamento sanitÃ¡rio.",
              "Custo de construÃ§Ã£o por animal.",
              "Impacto das instalaÃ§Ãµes na mortalidade de cordeiros.",
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
            Fontes tÃ©cnicas
          </h2>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <a
              href="https://www.fao.org/4/s1250e/S1250E17.htm"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-emerald-700 hover:bg-emerald-50"
            >
              <strong className="text-slate-900">
                FAO â€” Sheep and goat housing
              </strong>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                ReferÃªncia sobre localizaÃ§Ã£o, drenagem, pisos, ventilaÃ§Ã£o,
                equipamentos e espaÃ§o para ovinos.
              </p>
            </a>

            <a
              href="https://www.fao.org/4/x6542e/X6542E05.htm"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-emerald-700 hover:bg-emerald-50"
            >
              <strong className="text-slate-900">
                FAO â€” Intensive sheep production
              </strong>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                ReferÃªncia sobre instalaÃ§Ãµes, maternidade, ventilaÃ§Ã£o, pisos,
                Ã¡reas de manejo e organizaÃ§Ã£o da exploraÃ§Ã£o.
              </p>
            </a>

            <a
              href="https://www.fao.org/4/ah651e/AH651E13.htm"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-emerald-700 hover:bg-emerald-50"
            >
              <strong className="text-slate-900">
                FAO â€” Hair sheep production
              </strong>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                ReferÃªncia prÃ¡tica sobre abrigos, sombra, drenagem, Ã¡gua,
                alimentaÃ§Ã£o e organizaÃ§Ã£o dos espaÃ§os.
              </p>
            </a>

            <a
              href="https://www.fao.org/fileadmin/templates/ess/ess_test_folder/World_Census_Agriculture/WCA_2020/WCA_2020_new_doc/ANG_REP3_POR_2019_2020.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-emerald-700 hover:bg-emerald-50"
            >
              <strong className="text-slate-900">
                FAO/INE â€” RAPP Angola 2019/2020
              </strong>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Dados histÃ³ricos sobre efetivos e distribuiÃ§Ã£o dos ovinos em
                Angola.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* NAVEGAÃ‡ÃƒO */}
      <section className="bg-[#f4f7f2]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
          <Link
            href="/pecuaria/ovinos/orientacoes/cordeiros"
            className="rounded-2xl border border-slate-300 bg-white px-6 py-4 font-semibold text-slate-800 transition hover:border-emerald-700 hover:text-emerald-800"
          >
            â† Tema anterior: Cordeiros
          </Link>

          <Link
            href="/pecuaria/ovinos/orientacoes"
            className="rounded-2xl bg-emerald-800 px-6 py-4 font-semibold text-white transition hover:bg-emerald-900"
          >
            Voltar para OrientaÃ§Ãµes de Ovinos
          </Link>
        </div>
      </section>
    </main>
  );
}
