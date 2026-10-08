"use client";

import Link from "next/link";
import { useState } from "react";

type ImageCardProps = {
  src: string;
  titulo: string;
  descricao: string;
  fonte: string;
};

function ImageCard({
  src,
  titulo,
  descricao,
  fonte,
}: ImageCardProps) {
  const [imagemDisponivel, setImagemDisponivel] = useState(true);

  return (
    <article className="overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_65px_rgba(0,0,0,0.15)]">
      <div className="relative h-64 w-full overflow-hidden bg-slate-100">
        {imagemDisponivel ? (
          <img
            src={src}
            alt={titulo}
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
            loading="lazy"
            onError={() => setImagemDisponivel(false)}
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-emerald-50 to-slate-100 px-6 text-center">
            <div>
              <p className="font-bold text-emerald-800">
                Imagem ainda não disponível
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Coloque a fotografia em:
              </p>

              <p className="mt-2 break-all text-xs text-slate-400">
                {src}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900">
          {titulo}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          {descricao}
        </p>

        <p className="mt-4 border-t border-slate-100 pt-4 text-xs font-medium text-slate-500">
          Fonte: {fonte}
        </p>
      </div>
    </article>
  );
}

export default function InstalacoesPatosPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.13),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-4xl">

            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-emerald-200">
              AGROINOVA ANGOLA · PECUÁRIA
            </p>

            <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
              Instalações para Patos
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-emerald-50 md:text-xl">
              Planeamento, construção e organização das instalações destinadas
              à criação de patos, considerando ventilação, proteção, higiene,
              disponibilidade de água, conforto térmico, manejo e segurança
              sanitária.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/pecuaria/patos/orientacoes/agua"
                className="rounded-2xl bg-white px-6 py-3 font-bold text-emerald-900 shadow-xl transition hover:-translate-y-0.5"
              >
                Ver Água
              </Link>

              <Link
                href="/pecuaria/patos/orientacoes/biosseguranca"
                className="rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                Ver Biossegurança
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">

          <div>

            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              01 · Fundamentos
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
              A instalação não é apenas um abrigo
            </h2>

            <div className="mt-6 space-y-5 text-justify text-base leading-8 text-slate-600">

              <p>
                Uma instalação para patos deve criar condições que permitam aos
                animais manter o comportamento normal, alimentar-se, beber,
                descansar, crescer e reproduzir-se sem exposição excessiva a
                calor, humidade, lama, gases, predadores ou agentes infecciosos.
              </p>

              <p>
                Em sistemas pequenos, o abrigo pode ser relativamente simples,
                utilizando materiais disponíveis localmente. Porém, simplicidade
                não significa ausência de critérios técnicos. A localização,
                drenagem, ventilação, orientação do edifício, piso, cobertura,
                acesso à água e facilidade de limpeza influenciam diretamente o
                desempenho do lote.
              </p>

              <p>
                A qualidade do ambiente físico influencia diretamente o
                conforto, a saúde, o crescimento e o desempenho produtivo das
                aves. Por isso, a instalação deve ser planeada em conjunto com
                o sistema de alimentação, água, higiene e biossegurança.
              </p>

            </div>
          </div>

          <aside className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-[0_18px_50px_rgba(0,0,0,0.08)]">

            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              Princípio técnico
            </p>

            <h3 className="mt-3 text-2xl font-black text-slate-900">
              Instalação boa = ambiente controlado
            </h3>

            <div className="mt-6 space-y-4">

              {[
                "Proteção contra chuva e sol excessivo",
                "Ventilação sem correntes de ar prejudiciais",
                "Piso seco e fácil de limpar",
                "Água limpa e facilmente acessível",
                "Proteção contra predadores",
                "Redução da humidade e dos gases",
                "Facilidade de observação dos animais",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-900"
                >
                  {item}
                </div>
              ))}

            </div>
          </aside>

        </div>
      </section>

      {/* IMAGENS */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">

        <div className="mb-10">

          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            02 · Referência visual
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900">
            Organização da instalação
          </h2>

          <p className="mt-4 max-w-3xl text-justify leading-8 text-slate-600">
            As imagens desta secção são carregadas localmente pelo projeto.
            As fotografias devem ser verificadas antes de serem incorporadas
            ao portal, mantendo a identificação da respetiva fonte.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <ImageCard
            src="/imagens/patos/instalacoes/abrigo.jpg"
            titulo="Abrigo para patos"
            descricao="O abrigo deve proteger os animais das condições climáticas adversas e permitir limpeza, inspeção e manejo."
            fonte="Imagem local AGROINOVA ANGOLA"
          />

          <ImageCard
            src="/imagens/patos/instalacoes/ventilacao.jpg"
            titulo="Ventilação"
            descricao="A circulação adequada do ar ajuda a remover calor, humidade, poeira e gases acumulados no interior da instalação."
            fonte="Imagem local AGROINOVA ANGOLA"
          />

          <ImageCard
            src="/imagens/patos/instalacoes/bebedouros.jpg"
            titulo="Zona de água"
            descricao="Os bebedouros devem permitir acesso suficiente à água e ser organizados de forma a reduzir derramamentos e excesso de humidade."
            fonte="Imagem local AGROINOVA ANGOLA"
          />

        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            03 · Localização
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
            Escolha correta do terreno
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                titulo: "Terreno elevado",
                texto:
                  "Preferir áreas ligeiramente elevadas ou com boa drenagem. Evitar locais onde a água fique acumulada depois das chuvas.",
              },
              {
                titulo: "Drenagem",
                texto:
                  "A água derramada pelos patos pode aumentar rapidamente a humidade. O terreno deve permitir escoamento sem formar lama permanente.",
              },
              {
                titulo: "Acesso",
                texto:
                  "A instalação deve permitir entrada de pessoas, transporte de alimento, recolha de ovos, limpeza e retirada de resíduos.",
              },
              {
                titulo: "Distância de riscos",
                texto:
                  "Evitar proximidade excessiva com lixeiras, águas contaminadas, instalações com elevado risco sanitário e locais de concentração de animais selvagens.",
              },
              {
                titulo: "Segurança",
                texto:
                  "A instalação deve impedir a entrada de cães, gatos, roedores, serpentes e outros predadores.",
              },
              {
                titulo: "Expansão",
                texto:
                  "Quando possível, reservar espaço para aumentar o efetivo sem comprometer a ventilação ou a densidade animal.",
              },
            ].map((item) => (
              <article
                key={item.titulo}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-[0_12px_35px_rgba(0,0,0,0.06)]"
              >

                <h3 className="text-xl font-black text-slate-900">
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

      {/* ESTRUTURA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
          04 · Estrutura física
        </p>

        <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
          Componentes de uma boa instalação
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          {[
            {
              titulo: "Cobertura",
              texto:
                "Deve proteger contra chuva e radiação solar. Chapas metálicas podem aquecer bastante; em regiões quentes é importante considerar isolamento ou soluções construtivas que reduzam a carga térmica.",
            },
            {
              titulo: "Paredes",
              texto:
                "Devem proporcionar proteção sem bloquear completamente a circulação natural do ar. Em sistemas tropicais, áreas superiores protegidas por rede podem favorecer a ventilação.",
            },
            {
              titulo: "Piso",
              texto:
                "Deve ser resistente, não abrasivo, seguro para os pés e relativamente fácil de limpar. Pisos permanentemente molhados aumentam problemas de higiene e conforto.",
            },
            {
              titulo: "Cama",
              texto:
                "Materiais secos e absorventes podem ser utilizados em sistemas de cama. A cama molhada deve ser retirada ou corrigida rapidamente, principalmente nas zonas próximas dos bebedouros.",
            },
            {
              titulo: "Portas",
              texto:
                "Devem permitir entrada e saída controlada dos animais e facilitar o trabalho do tratador. Também devem contribuir para impedir a entrada de predadores.",
            },
            {
              titulo: "Rede de proteção",
              texto:
                "A malha deve impedir a entrada de predadores e reduzir o contacto com aves selvagens. Deve ser resistente e mantida em bom estado.",
            },
          ].map((item) => (
            <article
              key={item.titulo}
              className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-[0_16px_45px_rgba(0,0,0,0.08)]"
            >

              <h3 className="text-xl font-black text-emerald-900">
                {item.titulo}
              </h3>

              <p className="mt-4 text-justify leading-8 text-slate-600">
                {item.texto}
              </p>

            </article>
          ))}

        </div>
      </section>

      {/* VENTILAÇÃO */}
      <section className="bg-emerald-950 text-white">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <p className="text-sm font-bold uppercase tracking-widest text-emerald-300">
            05 · Ventilação
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Ventilação: um dos pontos mais importantes
          </h2>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">

            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur">

              <h3 className="text-2xl font-black">
                O que a ventilação deve fazer
              </h3>

              <div className="mt-6 space-y-4 text-emerald-50">

                <p>
                  Renovar o oxigénio disponível no ambiente.
                </p>

                <p>
                  Remover calor produzido pelos animais.
                </p>

                <p>
                  Reduzir a acumulação de humidade.
                </p>

                <p>
                  Ajudar a remover poeira e gases provenientes das fezes.
                </p>

                <p>
                  Melhorar o conforto térmico.
                </p>

              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur">

              <h3 className="text-2xl font-black">
                Atenção ao clima quente
              </h3>

              <p className="mt-5 text-justify leading-8 text-emerald-50">
                Em condições de calor, o problema não é apenas a temperatura.
                A humidade elevada também pode dificultar a dissipação de calor.
                Por isso, instalações para patos em Angola devem favorecer
                circulação de ar, sombra e disponibilidade permanente de água.
              </p>

              <p className="mt-5 text-justify leading-8 text-emerald-50">
                A ventilação adequada ajuda a remover calor, humidade, poeira e
                gases acumulados no interior das instalações. Este princípio é
                especialmente importante em sistemas de criação onde existe
                elevada utilização de água.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ÁGUA E BEBEDOUROS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
          06 · Água dentro da instalação
        </p>

        <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
          Bebedouros e controlo da humidade
        </h2>

        <p className="mt-6 max-w-4xl text-justify leading-8 text-slate-600">
          Patos utilizam muita água e podem aumentar rapidamente a humidade
          dentro da instalação. Por isso, o sistema de água precisa ser
          planeado juntamente com o piso, drenagem e ventilação. A utilização
          de água deve ser acompanhada pela manutenção de uma área seca de
          descanso.
        </p>

        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[760px] border-collapse text-left">

              <thead>
                <tr className="bg-emerald-900 text-white">
                  <th className="p-5">
                    Componente
                  </th>

                  <th className="p-5">
                    Problema possível
                  </th>

                  <th className="p-5">
                    Boa prática
                  </th>
                </tr>
              </thead>

              <tbody>

                {[
                  [
                    "Bebedouro",
                    "Derramamento",
                    "Regular altura, fluxo e posição.",
                  ],
                  [
                    "Piso",
                    "Lama e humidade",
                    "Garantir drenagem e retirar material molhado.",
                  ],
                  [
                    "Cama",
                    "Fermentação e mau cheiro",
                    "Substituir partes húmidas regularmente.",
                  ],
                  [
                    "Parede próxima",
                    "Humidade permanente",
                    "Evitar que a água fique em contacto com a estrutura.",
                  ],
                  [
                    "Drenagem",
                    "Água parada",
                    "Criar escoamento para local seguro.",
                  ],
                ].map((row) => (
                  <tr
                    key={row[0]}
                    className="border-t border-slate-200"
                  >

                    <td className="p-5 font-bold text-slate-900">
                      {row[0]}
                    </td>

                    <td className="p-5 text-slate-600">
                      {row[1]}
                    </td>

                    <td className="p-5 text-slate-600">
                      {row[2]}
                    </td>

                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DENSIDADE */}
      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            07 · Espaço
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
            Densidade e área disponível
          </h2>

          <p className="mt-6 max-w-4xl text-justify leading-8 text-slate-600">
            Não existe uma única densidade que possa ser aplicada
            indiscriminadamente a todos os sistemas de criação. A necessidade
            de espaço depende da idade, tamanho, finalidade, sistema de
            alojamento, temperatura, ventilação, piso e qualidade do manejo.
            A densidade deve ser analisada juntamente com as condições
            ambientais e o comportamento dos animais.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-7">
              <h3 className="text-xl font-black text-emerald-900">
                Patinhos
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Necessitam de ambiente protegido, acesso fácil à água e
                alimento e controlo da temperatura.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-7">
              <h3 className="text-xl font-black text-emerald-900">
                Crescimento
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                À medida que os animais crescem, a área disponível por ave deve
                aumentar para evitar sobrelotação.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-7">
              <h3 className="text-xl font-black text-emerald-900">
                Reprodutores
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Reprodutores precisam de espaço adequado para movimentação,
                comportamento social, alimentação e reprodução.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PATINHOS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
          08 · Patinhos
        </p>

        <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
          Instalação para patinhos
        </h2>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

            <h3 className="text-2xl font-black text-slate-900">
              O que deve existir
            </h3>

            <div className="mt-6 space-y-4">

              {[
                "Fonte de calor controlada",
                "Proteção contra correntes de ar",
                "Ventilação adequada",
                "Comedouros de fácil acesso",
                "Bebedouros adequados ao tamanho dos patinhos",
                "Piso seco",
                "Cama limpa",
                "Proteção contra esmagamento e predadores",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-700"
                >
                  {item}
                </div>
              ))}

            </div>
          </div>

          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8">

            <h3 className="text-2xl font-black text-emerald-950">
              Observar o comportamento
            </h3>

            <p className="mt-5 text-justify leading-8 text-slate-700">
              O comportamento dos patinhos é uma ferramenta prática para
              avaliar o ambiente. Agrupamento excessivo pode indicar frio ou
              desconforto, enquanto afastamento excessivo da fonte de calor,
              respiração acelerada e procura intensa por água podem indicar
              stress térmico ou outro problema ambiental.
            </p>

            <p className="mt-5 text-justify leading-8 text-slate-700">
              A observação deve ser acompanhada por medição da temperatura e
              avaliação do consumo de água e alimento, e não utilizada como
              único método de diagnóstico.
            </p>

          </div>

        </div>
      </section>

      {/* NINHOS */}
      <section className="bg-slate-900 text-white">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <p className="text-sm font-bold uppercase tracking-widest text-emerald-300">
            09 · Reprodução
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Ninhos para patos de postura
          </h2>

          <p className="mt-6 max-w-4xl text-justify leading-8 text-slate-300">
            Quando a finalidade é produção de ovos férteis ou ovos para
            consumo, os ninhos devem estar localizados em zonas protegidas,
            relativamente tranquilas e com material limpo. Os ninhos devem
            permanecer secos para reduzir contaminação dos ovos.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <h3 className="text-xl font-black">
                Localização
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Zona protegida do trânsito intenso dos animais e das áreas
                constantemente molhadas.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <h3 className="text-xl font-black">
                Material
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Deve ser seco, limpo e substituído quando estiver húmido ou
                contaminado.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <h3 className="text-xl font-black">
                Recolha
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                A recolha frequente reduz o risco de ovos sujos, partidos ou
                contaminados.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ÁREA EXTERNA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
          10 · Área externa
        </p>

        <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
          Parque ou área de circulação
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

            <h3 className="text-2xl font-black text-slate-900">
              Benefícios
            </h3>

            <p className="mt-4 text-justify leading-8 text-slate-600">
              Uma área externa bem planeada pode permitir movimento, exploração
              do ambiente e utilização de recursos naturais. Entretanto, o
              acesso externo não elimina a necessidade de abrigo, alimentação
              equilibrada, água limpa, controlo sanitário e proteção contra
              predadores.
            </p>

          </article>

          <article className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8">

            <h3 className="text-2xl font-black text-emerald-950">
              Atenção à água superficial
            </h3>

            <p className="mt-4 text-justify leading-8 text-slate-700">
              Lagoas, rios e outros corpos de água podem aumentar o risco de
              contaminação e contacto com aves selvagens. Quando forem
              utilizados, devem fazer parte de um plano de biossegurança e
              gestão sanitária.
            </p>

          </article>

        </div>
      </section>

      {/* HIGIENE */}
      <section className="bg-emerald-50">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            11 · Higiene
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
            Instalação fácil de limpar
          </h2>

          <p className="mt-6 max-w-4xl text-justify leading-8 text-slate-700">
            Uma instalação bonita mas difícil de limpar pode tornar-se um
            problema sanitário. O projeto deve permitir remover fezes, cama
            húmida, restos de alimento e água acumulada. A construção e o
            manejo devem ser pensados de modo a reduzir a acumulação de
            resíduos, humidade e contaminantes.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {[
              "Piso com boa drenagem",
              "Bebedouros acessíveis",
              "Cama substituível",
              "Acesso para limpeza",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-emerald-100 bg-white p-6 text-center font-bold text-emerald-900 shadow-sm"
              >
                {item}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ANGOLA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
          12 · Aplicação em Angola
        </p>

        <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
          Como adaptar as instalações às condições angolanas
        </h2>

        <div className="mt-8 space-y-6 text-justify leading-8 text-slate-600">

          <p>
            Em Angola, o modelo de instalação deve ser adaptado à região, ao
            sistema de produção, aos materiais disponíveis e ao clima local.
            Uma instalação para uma pequena exploração familiar não precisa
            necessariamente da mesma estrutura de uma unidade comercial.
          </p>

          <p>
            Em zonas quentes, a prioridade deve incluir sombra, ventilação,
            acesso permanente à água e controlo da humidade. Em períodos de
            chuva, a drenagem torna-se particularmente importante para evitar
            lama e acumulação de água junto ao abrigo.
          </p>

          <p>
            Materiais locais podem ser utilizados desde que sejam resistentes,
            seguros para os animais e compatíveis com a higiene. A economia na
            construção não deve resultar em pisos perigosos, estruturas
            instáveis ou falta de proteção contra predadores.
          </p>

        </div>

        <div className="mt-10 rounded-3xl border border-emerald-200 bg-emerald-900 p-8 text-white shadow-2xl">

          <h3 className="text-2xl font-black">
            Regra prática para o produtor
          </h3>

          <p className="mt-4 max-w-4xl text-justify leading-8 text-emerald-50">
            Antes de construir, observe o terreno durante um período de chuva
            e durante os períodos mais quentes do dia. Identifique onde a água
            acumula, de onde vem o vento, onde existe sombra e quais pontos
            podem facilitar a entrada de predadores. O desenho da instalação
            deve responder a esses problemas antes da compra dos materiais.
          </p>

        </div>
      </section>

      {/* CHECKLIST */}
      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            13 · Checklist técnico
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
            Antes de colocar os patos na instalação
          </h2>

          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 shadow-xl">

            <div className="overflow-x-auto">

              <table className="w-full min-w-[700px] border-collapse">

                <thead>
                  <tr className="bg-slate-900 text-left text-white">

                    <th className="p-5">
                      Verificação
                    </th>

                    <th className="p-5">
                      Estado esperado
                    </th>

                  </tr>
                </thead>

                <tbody>

                  {[
                    [
                      "Piso",
                      "Seco, seguro e sem superfícies cortantes",
                    ],
                    [
                      "Cobertura",
                      "Sem infiltrações e com proteção contra sol",
                    ],
                    [
                      "Ventilação",
                      "Ar renovado sem correntes excessivamente fortes",
                    ],
                    [
                      "Bebedouros",
                      "Limpos e funcionando corretamente",
                    ],
                    [
                      "Comedouros",
                      "Limpos e acessíveis",
                    ],
                    [
                      "Drenagem",
                      "Sem água parada junto ao abrigo",
                    ],
                    [
                      "Rede",
                      "Sem buracos ou pontos de entrada",
                    ],
                    [
                      "Predadores",
                      "Instalação protegida",
                    ],
                    [
                      "Cama",
                      "Seca e limpa",
                    ],
                    [
                      "Limpeza",
                      "Instalação preparada para higienização",
                    ],
                  ].map((row) => (
                    <tr
                      key={row[0]}
                      className="border-t border-slate-200"
                    >

                      <td className="p-5 font-bold text-slate-900">
                        {row[0]}
                      </td>

                      <td className="p-5 text-slate-600">
                        {row[1]}
                      </td>

                    </tr>
                  ))}

                </tbody>
              </table>

            </div>
          </div>
        </div>
      </section>

      {/* EXERCÍCIO */}
      <section className="bg-slate-100">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="rounded-[2rem] border border-emerald-200 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.10)] md:p-12">

            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              Exercício para estudantes
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900">
              Dimensionamento e diagnóstico da instalação
            </h2>

            <p className="mt-5 max-w-4xl text-justify leading-8 text-slate-600">
              Imagine uma pequena exploração que pretende criar patos para
              produção de carne. O terreno apresenta acumulação de água durante
              as chuvas, os bebedouros ficam dentro da zona de cama e a
              instalação possui poucas aberturas laterais.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">

              {[
                "Identifique pelo menos cinco problemas da instalação.",
                "Explique como cada problema pode afetar os animais.",
                "Proponha melhorias de baixo custo.",
                "Indique como melhorar a ventilação.",
                "Explique como reduzir a humidade.",
                "Defina quais indicadores devem ser acompanhados diariamente.",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >

                  <span className="font-black text-emerald-700">
                    {index + 1}.
                  </span>{" "}

                  <span className="text-slate-700">
                    {item}
                  </span>

                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

        <h2 className="text-2xl font-black text-slate-900">
          Fontes técnicas
        </h2>

        <div className="mt-6 space-y-3 text-sm leading-7 text-slate-600">

          <p>
            Cornell University College of Veterinary Medicine — Duck Research
            Laboratory. Duck Housing and Management.
          </p>

          <p>
            Food and Agriculture Organization of the United Nations (FAO) —
            Management and housing.
          </p>

          <p>
            FAO — Rural structures in the tropics: animal housing and duck
            housing.
          </p>

          <p>
            FAO TECA — Duck keeping in the tropics.
          </p>

        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="border-t border-slate-200 bg-white">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 sm:flex-row sm:justify-between lg:px-8">

          <Link
            href="/pecuaria/patos/orientacoes/maneio"
            className="rounded-2xl border border-slate-200 px-6 py-3 text-center font-bold text-slate-700 transition hover:bg-slate-50"
          >
            ← Maneio
          </Link>

          <Link
            href="/pecuaria/patos/orientacoes/biosseguranca"
            className="rounded-2xl bg-emerald-800 px-6 py-3 text-center font-bold text-white shadow-lg transition hover:bg-emerald-900"
          >
            Biossegurança →
          </Link>

        </div>
      </section>

    </main>
  );
}"use client";

import Link from "next/link";
import { useState } from "react";

type ImageCardProps = {
  src: string;
  titulo: string;
  descricao: string;
  fonte: string;
};

function ImageCard({
  src,
  titulo,
  descricao,
  fonte,
}: ImageCardProps) {
  const [imagemDisponivel, setImagemDisponivel] = useState(true);

  return (
    <article className="overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_65px_rgba(0,0,0,0.15)]">
      <div className="relative h-64 w-full overflow-hidden bg-slate-100">
        {imagemDisponivel ? (
          <img
            src={src}
            alt={titulo}
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
            loading="lazy"
            onError={() => setImagemDisponivel(false)}
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-emerald-50 to-slate-100 px-6 text-center">
            <div>
              <p className="font-bold text-emerald-800">
                Imagem ainda não disponível
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Coloque a fotografia em:
              </p>

              <p className="mt-2 break-all text-xs text-slate-400">
                {src}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900">
          {titulo}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          {descricao}
        </p>

        <p className="mt-4 border-t border-slate-100 pt-4 text-xs font-medium text-slate-500">
          Fonte: {fonte}
        </p>
      </div>
    </article>
  );
}

export default function InstalacoesPatosPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.13),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-4xl">

            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-emerald-200">
              AGROINOVA ANGOLA · PECUÁRIA
            </p>

            <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
              Instalações para Patos
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-emerald-50 md:text-xl">
              Planeamento, construção e organização das instalações destinadas
              à criação de patos, considerando ventilação, proteção, higiene,
              disponibilidade de água, conforto térmico, manejo e segurança
              sanitária.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/pecuaria/patos/orientacoes/agua"
                className="rounded-2xl bg-white px-6 py-3 font-bold text-emerald-900 shadow-xl transition hover:-translate-y-0.5"
              >
                Ver Água
              </Link>

              <Link
                href="/pecuaria/patos/orientacoes/biosseguranca"
                className="rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                Ver Biossegurança
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">

          <div>

            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              01 · Fundamentos
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
              A instalação não é apenas um abrigo
            </h2>

            <div className="mt-6 space-y-5 text-justify text-base leading-8 text-slate-600">

              <p>
                Uma instalação para patos deve criar condições que permitam aos
                animais manter o comportamento normal, alimentar-se, beber,
                descansar, crescer e reproduzir-se sem exposição excessiva a
                calor, humidade, lama, gases, predadores ou agentes infecciosos.
              </p>

              <p>
                Em sistemas pequenos, o abrigo pode ser relativamente simples,
                utilizando materiais disponíveis localmente. Porém, simplicidade
                não significa ausência de critérios técnicos. A localização,
                drenagem, ventilação, orientação do edifício, piso, cobertura,
                acesso à água e facilidade de limpeza influenciam diretamente o
                desempenho do lote.
              </p>

              <p>
                A qualidade do ambiente físico influencia diretamente o
                conforto, a saúde, o crescimento e o desempenho produtivo das
                aves. Por isso, a instalação deve ser planeada em conjunto com
                o sistema de alimentação, água, higiene e biossegurança.
              </p>

            </div>
          </div>

          <aside className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-[0_18px_50px_rgba(0,0,0,0.08)]">

            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              Princípio técnico
            </p>

            <h3 className="mt-3 text-2xl font-black text-slate-900">
              Instalação boa = ambiente controlado
            </h3>

            <div className="mt-6 space-y-4">

              {[
                "Proteção contra chuva e sol excessivo",
                "Ventilação sem correntes de ar prejudiciais",
                "Piso seco e fácil de limpar",
                "Água limpa e facilmente acessível",
                "Proteção contra predadores",
                "Redução da humidade e dos gases",
                "Facilidade de observação dos animais",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-900"
                >
                  {item}
                </div>
              ))}

            </div>
          </aside>

        </div>
      </section>

      {/* IMAGENS */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">

        <div className="mb-10">

          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            02 · Referência visual
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900">
            Organização da instalação
          </h2>

          <p className="mt-4 max-w-3xl text-justify leading-8 text-slate-600">
            As imagens desta secção são carregadas localmente pelo projeto.
            As fotografias devem ser verificadas antes de serem incorporadas
            ao portal, mantendo a identificação da respetiva fonte.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <ImageCard
            src="/imagens/patos/instalacoes/abrigo.jpg"
            titulo="Abrigo para patos"
            descricao="O abrigo deve proteger os animais das condições climáticas adversas e permitir limpeza, inspeção e manejo."
            fonte="Imagem local AGROINOVA ANGOLA"
          />

          <ImageCard
            src="/imagens/patos/instalacoes/ventilacao.jpg"
            titulo="Ventilação"
            descricao="A circulação adequada do ar ajuda a remover calor, humidade, poeira e gases acumulados no interior da instalação."
            fonte="Imagem local AGROINOVA ANGOLA"
          />

          <ImageCard
            src="/imagens/patos/instalacoes/bebedouros.jpg"
            titulo="Zona de água"
            descricao="Os bebedouros devem permitir acesso suficiente à água e ser organizados de forma a reduzir derramamentos e excesso de humidade."
            fonte="Imagem local AGROINOVA ANGOLA"
          />

        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            03 · Localização
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
            Escolha correta do terreno
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                titulo: "Terreno elevado",
                texto:
                  "Preferir áreas ligeiramente elevadas ou com boa drenagem. Evitar locais onde a água fique acumulada depois das chuvas.",
              },
              {
                titulo: "Drenagem",
                texto:
                  "A água derramada pelos patos pode aumentar rapidamente a humidade. O terreno deve permitir escoamento sem formar lama permanente.",
              },
              {
                titulo: "Acesso",
                texto:
                  "A instalação deve permitir entrada de pessoas, transporte de alimento, recolha de ovos, limpeza e retirada de resíduos.",
              },
              {
                titulo: "Distância de riscos",
                texto:
                  "Evitar proximidade excessiva com lixeiras, águas contaminadas, instalações com elevado risco sanitário e locais de concentração de animais selvagens.",
              },
              {
                titulo: "Segurança",
                texto:
                  "A instalação deve impedir a entrada de cães, gatos, roedores, serpentes e outros predadores.",
              },
              {
                titulo: "Expansão",
                texto:
                  "Quando possível, reservar espaço para aumentar o efetivo sem comprometer a ventilação ou a densidade animal.",
              },
            ].map((item) => (
              <article
                key={item.titulo}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-[0_12px_35px_rgba(0,0,0,0.06)]"
              >

                <h3 className="text-xl font-black text-slate-900">
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

      {/* ESTRUTURA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
          04 · Estrutura física
        </p>

        <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
          Componentes de uma boa instalação
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          {[
            {
              titulo: "Cobertura",
              texto:
                "Deve proteger contra chuva e radiação solar. Chapas metálicas podem aquecer bastante; em regiões quentes é importante considerar isolamento ou soluções construtivas que reduzam a carga térmica.",
            },
            {
              titulo: "Paredes",
              texto:
                "Devem proporcionar proteção sem bloquear completamente a circulação natural do ar. Em sistemas tropicais, áreas superiores protegidas por rede podem favorecer a ventilação.",
            },
            {
              titulo: "Piso",
              texto:
                "Deve ser resistente, não abrasivo, seguro para os pés e relativamente fácil de limpar. Pisos permanentemente molhados aumentam problemas de higiene e conforto.",
            },
            {
              titulo: "Cama",
              texto:
                "Materiais secos e absorventes podem ser utilizados em sistemas de cama. A cama molhada deve ser retirada ou corrigida rapidamente, principalmente nas zonas próximas dos bebedouros.",
            },
            {
              titulo: "Portas",
              texto:
                "Devem permitir entrada e saída controlada dos animais e facilitar o trabalho do tratador. Também devem contribuir para impedir a entrada de predadores.",
            },
            {
              titulo: "Rede de proteção",
              texto:
                "A malha deve impedir a entrada de predadores e reduzir o contacto com aves selvagens. Deve ser resistente e mantida em bom estado.",
            },
          ].map((item) => (
            <article
              key={item.titulo}
              className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-[0_16px_45px_rgba(0,0,0,0.08)]"
            >

              <h3 className="text-xl font-black text-emerald-900">
                {item.titulo}
              </h3>

              <p className="mt-4 text-justify leading-8 text-slate-600">
                {item.texto}
              </p>

            </article>
          ))}

        </div>
      </section>

      {/* VENTILAÇÃO */}
      <section className="bg-emerald-950 text-white">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <p className="text-sm font-bold uppercase tracking-widest text-emerald-300">
            05 · Ventilação
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Ventilação: um dos pontos mais importantes
          </h2>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">

            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur">

              <h3 className="text-2xl font-black">
                O que a ventilação deve fazer
              </h3>

              <div className="mt-6 space-y-4 text-emerald-50">

                <p>
                  Renovar o oxigénio disponível no ambiente.
                </p>

                <p>
                  Remover calor produzido pelos animais.
                </p>

                <p>
                  Reduzir a acumulação de humidade.
                </p>

                <p>
                  Ajudar a remover poeira e gases provenientes das fezes.
                </p>

                <p>
                  Melhorar o conforto térmico.
                </p>

              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur">

              <h3 className="text-2xl font-black">
                Atenção ao clima quente
              </h3>

              <p className="mt-5 text-justify leading-8 text-emerald-50">
                Em condições de calor, o problema não é apenas a temperatura.
                A humidade elevada também pode dificultar a dissipação de calor.
                Por isso, instalações para patos em Angola devem favorecer
                circulação de ar, sombra e disponibilidade permanente de água.
              </p>

              <p className="mt-5 text-justify leading-8 text-emerald-50">
                A ventilação adequada ajuda a remover calor, humidade, poeira e
                gases acumulados no interior das instalações. Este princípio é
                especialmente importante em sistemas de criação onde existe
                elevada utilização de água.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ÁGUA E BEBEDOUROS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
          06 · Água dentro da instalação
        </p>

        <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
          Bebedouros e controlo da humidade
        </h2>

        <p className="mt-6 max-w-4xl text-justify leading-8 text-slate-600">
          Patos utilizam muita água e podem aumentar rapidamente a humidade
          dentro da instalação. Por isso, o sistema de água precisa ser
          planeado juntamente com o piso, drenagem e ventilação. A utilização
          de água deve ser acompanhada pela manutenção de uma área seca de
          descanso.
        </p>

        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[760px] border-collapse text-left">

              <thead>
                <tr className="bg-emerald-900 text-white">
                  <th className="p-5">
                    Componente
                  </th>

                  <th className="p-5">
                    Problema possível
                  </th>

                  <th className="p-5">
                    Boa prática
                  </th>
                </tr>
              </thead>

              <tbody>

                {[
                  [
                    "Bebedouro",
                    "Derramamento",
                    "Regular altura, fluxo e posição.",
                  ],
                  [
                    "Piso",
                    "Lama e humidade",
                    "Garantir drenagem e retirar material molhado.",
                  ],
                  [
                    "Cama",
                    "Fermentação e mau cheiro",
                    "Substituir partes húmidas regularmente.",
                  ],
                  [
                    "Parede próxima",
                    "Humidade permanente",
                    "Evitar que a água fique em contacto com a estrutura.",
                  ],
                  [
                    "Drenagem",
                    "Água parada",
                    "Criar escoamento para local seguro.",
                  ],
                ].map((row) => (
                  <tr
                    key={row[0]}
                    className="border-t border-slate-200"
                  >

                    <td className="p-5 font-bold text-slate-900">
                      {row[0]}
                    </td>

                    <td className="p-5 text-slate-600">
                      {row[1]}
                    </td>

                    <td className="p-5 text-slate-600">
                      {row[2]}
                    </td>

                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DENSIDADE */}
      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            07 · Espaço
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
            Densidade e área disponível
          </h2>

          <p className="mt-6 max-w-4xl text-justify leading-8 text-slate-600">
            Não existe uma única densidade que possa ser aplicada
            indiscriminadamente a todos os sistemas de criação. A necessidade
            de espaço depende da idade, tamanho, finalidade, sistema de
            alojamento, temperatura, ventilação, piso e qualidade do manejo.
            A densidade deve ser analisada juntamente com as condições
            ambientais e o comportamento dos animais.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-7">
              <h3 className="text-xl font-black text-emerald-900">
                Patinhos
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Necessitam de ambiente protegido, acesso fácil à água e
                alimento e controlo da temperatura.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-7">
              <h3 className="text-xl font-black text-emerald-900">
                Crescimento
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                À medida que os animais crescem, a área disponível por ave deve
                aumentar para evitar sobrelotação.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-7">
              <h3 className="text-xl font-black text-emerald-900">
                Reprodutores
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Reprodutores precisam de espaço adequado para movimentação,
                comportamento social, alimentação e reprodução.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PATINHOS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
          08 · Patinhos
        </p>

        <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
          Instalação para patinhos
        </h2>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

            <h3 className="text-2xl font-black text-slate-900">
              O que deve existir
            </h3>

            <div className="mt-6 space-y-4">

              {[
                "Fonte de calor controlada",
                "Proteção contra correntes de ar",
                "Ventilação adequada",
                "Comedouros de fácil acesso",
                "Bebedouros adequados ao tamanho dos patinhos",
                "Piso seco",
                "Cama limpa",
                "Proteção contra esmagamento e predadores",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-700"
                >
                  {item}
                </div>
              ))}

            </div>
          </div>

          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8">

            <h3 className="text-2xl font-black text-emerald-950">
              Observar o comportamento
            </h3>

            <p className="mt-5 text-justify leading-8 text-slate-700">
              O comportamento dos patinhos é uma ferramenta prática para
              avaliar o ambiente. Agrupamento excessivo pode indicar frio ou
              desconforto, enquanto afastamento excessivo da fonte de calor,
              respiração acelerada e procura intensa por água podem indicar
              stress térmico ou outro problema ambiental.
            </p>

            <p className="mt-5 text-justify leading-8 text-slate-700">
              A observação deve ser acompanhada por medição da temperatura e
              avaliação do consumo de água e alimento, e não utilizada como
              único método de diagnóstico.
            </p>

          </div>

        </div>
      </section>

      {/* NINHOS */}
      <section className="bg-slate-900 text-white">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <p className="text-sm font-bold uppercase tracking-widest text-emerald-300">
            09 · Reprodução
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Ninhos para patos de postura
          </h2>

          <p className="mt-6 max-w-4xl text-justify leading-8 text-slate-300">
            Quando a finalidade é produção de ovos férteis ou ovos para
            consumo, os ninhos devem estar localizados em zonas protegidas,
            relativamente tranquilas e com material limpo. Os ninhos devem
            permanecer secos para reduzir contaminação dos ovos.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <h3 className="text-xl font-black">
                Localização
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Zona protegida do trânsito intenso dos animais e das áreas
                constantemente molhadas.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <h3 className="text-xl font-black">
                Material
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Deve ser seco, limpo e substituído quando estiver húmido ou
                contaminado.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <h3 className="text-xl font-black">
                Recolha
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                A recolha frequente reduz o risco de ovos sujos, partidos ou
                contaminados.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ÁREA EXTERNA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
          10 · Área externa
        </p>

        <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
          Parque ou área de circulação
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

            <h3 className="text-2xl font-black text-slate-900">
              Benefícios
            </h3>

            <p className="mt-4 text-justify leading-8 text-slate-600">
              Uma área externa bem planeada pode permitir movimento, exploração
              do ambiente e utilização de recursos naturais. Entretanto, o
              acesso externo não elimina a necessidade de abrigo, alimentação
              equilibrada, água limpa, controlo sanitário e proteção contra
              predadores.
            </p>

          </article>

          <article className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8">

            <h3 className="text-2xl font-black text-emerald-950">
              Atenção à água superficial
            </h3>

            <p className="mt-4 text-justify leading-8 text-slate-700">
              Lagoas, rios e outros corpos de água podem aumentar o risco de
              contaminação e contacto com aves selvagens. Quando forem
              utilizados, devem fazer parte de um plano de biossegurança e
              gestão sanitária.
            </p>

          </article>

        </div>
      </section>

      {/* HIGIENE */}
      <section className="bg-emerald-50">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            11 · Higiene
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
            Instalação fácil de limpar
          </h2>

          <p className="mt-6 max-w-4xl text-justify leading-8 text-slate-700">
            Uma instalação bonita mas difícil de limpar pode tornar-se um
            problema sanitário. O projeto deve permitir remover fezes, cama
            húmida, restos de alimento e água acumulada. A construção e o
            manejo devem ser pensados de modo a reduzir a acumulação de
            resíduos, humidade e contaminantes.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {[
              "Piso com boa drenagem",
              "Bebedouros acessíveis",
              "Cama substituível",
              "Acesso para limpeza",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-emerald-100 bg-white p-6 text-center font-bold text-emerald-900 shadow-sm"
              >
                {item}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ANGOLA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
          12 · Aplicação em Angola
        </p>

        <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
          Como adaptar as instalações às condições angolanas
        </h2>

        <div className="mt-8 space-y-6 text-justify leading-8 text-slate-600">

          <p>
            Em Angola, o modelo de instalação deve ser adaptado à região, ao
            sistema de produção, aos materiais disponíveis e ao clima local.
            Uma instalação para uma pequena exploração familiar não precisa
            necessariamente da mesma estrutura de uma unidade comercial.
          </p>

          <p>
            Em zonas quentes, a prioridade deve incluir sombra, ventilação,
            acesso permanente à água e controlo da humidade. Em períodos de
            chuva, a drenagem torna-se particularmente importante para evitar
            lama e acumulação de água junto ao abrigo.
          </p>

          <p>
            Materiais locais podem ser utilizados desde que sejam resistentes,
            seguros para os animais e compatíveis com a higiene. A economia na
            construção não deve resultar em pisos perigosos, estruturas
            instáveis ou falta de proteção contra predadores.
          </p>

        </div>

        <div className="mt-10 rounded-3xl border border-emerald-200 bg-emerald-900 p-8 text-white shadow-2xl">

          <h3 className="text-2xl font-black">
            Regra prática para o produtor
          </h3>

          <p className="mt-4 max-w-4xl text-justify leading-8 text-emerald-50">
            Antes de construir, observe o terreno durante um período de chuva
            e durante os períodos mais quentes do dia. Identifique onde a água
            acumula, de onde vem o vento, onde existe sombra e quais pontos
            podem facilitar a entrada de predadores. O desenho da instalação
            deve responder a esses problemas antes da compra dos materiais.
          </p>

        </div>
      </section>

      {/* CHECKLIST */}
      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            13 · Checklist técnico
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
            Antes de colocar os patos na instalação
          </h2>

          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 shadow-xl">

            <div className="overflow-x-auto">

              <table className="w-full min-w-[700px] border-collapse">

                <thead>
                  <tr className="bg-slate-900 text-left text-white">

                    <th className="p-5">
                      Verificação
                    </th>

                    <th className="p-5">
                      Estado esperado
                    </th>

                  </tr>
                </thead>

                <tbody>

                  {[
                    [
                      "Piso",
                      "Seco, seguro e sem superfícies cortantes",
                    ],
                    [
                      "Cobertura",
                      "Sem infiltrações e com proteção contra sol",
                    ],
                    [
                      "Ventilação",
                      "Ar renovado sem correntes excessivamente fortes",
                    ],
                    [
                      "Bebedouros",
                      "Limpos e funcionando corretamente",
                    ],
                    [
                      "Comedouros",
                      "Limpos e acessíveis",
                    ],
                    [
                      "Drenagem",
                      "Sem água parada junto ao abrigo",
                    ],
                    [
                      "Rede",
                      "Sem buracos ou pontos de entrada",
                    ],
                    [
                      "Predadores",
                      "Instalação protegida",
                    ],
                    [
                      "Cama",
                      "Seca e limpa",
                    ],
                    [
                      "Limpeza",
                      "Instalação preparada para higienização",
                    ],
                  ].map((row) => (
                    <tr
                      key={row[0]}
                      className="border-t border-slate-200"
                    >

                      <td className="p-5 font-bold text-slate-900">
                        {row[0]}
                      </td>

                      <td className="p-5 text-slate-600">
                        {row[1]}
                      </td>

                    </tr>
                  ))}

                </tbody>
              </table>

            </div>
          </div>
        </div>
      </section>

      {/* EXERCÍCIO */}
      <section className="bg-slate-100">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="rounded-[2rem] border border-emerald-200 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.10)] md:p-12">

            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              Exercício para estudantes
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900">
              Dimensionamento e diagnóstico da instalação
            </h2>

            <p className="mt-5 max-w-4xl text-justify leading-8 text-slate-600">
              Imagine uma pequena exploração que pretende criar patos para
              produção de carne. O terreno apresenta acumulação de água durante
              as chuvas, os bebedouros ficam dentro da zona de cama e a
              instalação possui poucas aberturas laterais.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">

              {[
                "Identifique pelo menos cinco problemas da instalação.",
                "Explique como cada problema pode afetar os animais.",
                "Proponha melhorias de baixo custo.",
                "Indique como melhorar a ventilação.",
                "Explique como reduzir a humidade.",
                "Defina quais indicadores devem ser acompanhados diariamente.",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >

                  <span className="font-black text-emerald-700">
                    {index + 1}.
                  </span>{" "}

                  <span className="text-slate-700">
                    {item}
                  </span>

                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

        <h2 className="text-2xl font-black text-slate-900">
          Fontes técnicas
        </h2>

        <div className="mt-6 space-y-3 text-sm leading-7 text-slate-600">

          <p>
            Cornell University College of Veterinary Medicine — Duck Research
            Laboratory. Duck Housing and Management.
          </p>

          <p>
            Food and Agriculture Organization of the United Nations (FAO) —
            Management and housing.
          </p>

          <p>
            FAO — Rural structures in the tropics: animal housing and duck
            housing.
          </p>

          <p>
            FAO TECA — Duck keeping in the tropics.
          </p>

        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="border-t border-slate-200 bg-white">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 sm:flex-row sm:justify-between lg:px-8">

          <Link
            href="/pecuaria/patos/orientacoes/maneio"
            className="rounded-2xl border border-slate-200 px-6 py-3 text-center font-bold text-slate-700 transition hover:bg-slate-50"
          >
            ← Maneio
          </Link>

          <Link
            href="/pecuaria/patos/orientacoes/biosseguranca"
            className="rounded-2xl bg-emerald-800 px-6 py-3 text-center font-bold text-white shadow-lg transition hover:bg-emerald-900"
          >
            Biossegurança →
          </Link>

        </div>
      </section>

    </main>
  );
}