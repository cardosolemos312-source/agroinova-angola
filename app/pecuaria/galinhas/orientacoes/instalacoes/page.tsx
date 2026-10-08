"use client";

import Link from "next/link";

const principios = [
  {
    titulo: "Localização",
    texto:
      "O aviário deve ser instalado num local que permita boa drenagem, acesso controlado, disponibilidade de água e facilidade para entrada de insumos e saída dos produtos.",
  },
  {
    titulo: "Orientação do aviário",
    texto:
      "A orientação e o desenho do edifício devem considerar a circulação natural do ar, exposição solar, chuvas predominantes e condições climáticas locais.",
  },
  {
    titulo: "Ventilação",
    texto:
      "A ventilação remove calor, humidade, poeira e gases, contribuindo para a qualidade do ar e para o conforto das aves.",
  },
  {
    titulo: "Densidade",
    texto:
      "A quantidade de aves deve ser compatível com a área disponível, sistema de criação, capacidade de ventilação, equipamentos e condições ambientais.",
  },
  {
    titulo: "Higiene",
    texto:
      "As superfícies e equipamentos devem permitir limpeza, lavagem e desinfecção eficazes entre lotes e durante o período de produção.",
  },
  {
    titulo: "Biossegurança",
    texto:
      "O desenho da exploração deve facilitar o controlo de pessoas, veículos, equipamentos, animais, resíduos e materiais que possam introduzir agentes infecciosos.",
  },
];

const zonas = [
  {
    titulo: "Área de recepção",
    texto:
      "Espaço destinado à chegada de pintainhas, materiais e insumos, permitindo controlo e organização antes da entrada nas áreas produtivas.",
  },
  {
    titulo: "Aviário",
    texto:
      "Área principal onde permanecem as aves. Deve proporcionar condições adequadas de temperatura, ventilação, iluminação, alimentação e água.",
  },
  {
    titulo: "Armazenamento de ração",
    texto:
      "Deve proteger a ração contra humidade, chuva, roedores, insectos e contaminação por produtos químicos.",
  },
  {
    titulo: "Armazenamento de ovos",
    texto:
      "Nas explorações de poedeiras, deve existir uma área adequada para classificação, armazenamento temporário e expedição dos ovos.",
  },
  {
    titulo: "Área de resíduos",
    texto:
      "Deve permitir a gestão adequada de cama, estrume, aves mortas, embalagens e outros resíduos sem comprometer a biossegurança.",
  },
  {
    titulo: "Área de lavagem",
    texto:
      "A existência de uma área organizada para lavagem e higienização facilita a limpeza dos equipamentos e reduz a circulação de contaminantes.",
  },
];

const problemas = [
  {
    problema: "Calor excessivo",
    causa:
      "Ventilação insuficiente, elevada densidade, cobertura inadequada ou falta de sombra.",
    consequência:
      "Stress térmico, redução do consumo de ração, alterações produtivas e aumento do risco de mortalidade.",
  },
  {
    problema: "Humidade elevada",
    causa:
      "Ventilação inadequada, fugas de água, bebedouros mal regulados ou problemas de drenagem.",
    consequência:
      "Cama húmida, aumento de amónia, problemas respiratórios e maior pressão sanitária.",
  },
  {
    problema: "Amónia",
    causa:
      "Acumulação de matéria orgânica e cama húmida associada a ventilação inadequada.",
    consequência:
      "Irritação das vias respiratórias e dos olhos, deterioração da qualidade do ar e pior desempenho.",
  },
  {
    problema: "Entrada descontrolada de pessoas",
    causa:
      "Ausência de barreiras sanitárias e de procedimentos de acesso.",
    consequência:
      "Maior risco de introdução de agentes infecciosos na exploração.",
  },
];

const equipamentos = [
  "Bebedouros adequados à idade e ao sistema de produção.",
  "Comedouros com distribuição uniforme da ração.",
  "Sistema de ventilação compatível com a capacidade do aviário.",
  "Fontes de iluminação correctamente distribuídas.",
  "Equipamentos para controlo de temperatura e humidade.",
  "Depósitos de água protegidos.",
  "Linhas de água de fácil limpeza.",
  "Equipamentos de desinfecção.",
  "Recipientes apropriados para resíduos.",
  "Equipamentos de protecção individual para trabalhadores.",
];

export default function InstalacoesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <img
            src="/imagens/galinhas/vinabar.jpg"
            alt="Instalação avícola em Angola"
            className="h-full w-full object-cover opacity-35"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-300">
              Orientações técnicas · Avicultura
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Instalações
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
              Princípios para planear, construir, equipar, utilizar e manter
              instalações avícolas adequadas às condições de produção de
              galinhas em Angola.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/pecuaria/galinhas/orientacoes"
                className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-green-50"
              >
                Orientações técnicas
              </Link>

              <Link
                href="/pecuaria/galinhas/orientacoes/sanidade"
                className="rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Sanidade
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
            Instalações
          </span>
        </div>
      </div>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-green-700">
              Infraestrutura avícola
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              O aviário deve ser pensado como parte do sistema produtivo
            </h2>

            <div className="mt-6 space-y-5 text-justify text-base leading-8 text-slate-700">
              <p>
                Uma instalação avícola não é apenas um edifício onde as aves
                permanecem. É uma estrutura de produção que precisa controlar
                factores ambientais, facilitar o maneio, proteger os animais,
                permitir higiene e reduzir os riscos sanitários.
              </p>

              <p>
                Um aviário tecnicamente inadequado pode transformar problemas
                ambientais em problemas produtivos. Temperatura elevada,
                humidade, ventilação insuficiente, excesso de densidade,
                iluminação irregular e dificuldade de limpeza podem afectar o
                desempenho das aves.
              </p>

              <p>
                Em Angola, o projecto das instalações deve considerar as
                diferenças climáticas entre as regiões. Uma solução adequada
                para uma exploração no planalto pode não apresentar o mesmo
                desempenho numa região mais quente e húmida.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border bg-slate-100">
            <img
              src="/imagens/galinhas/santo-antonio.jpg"
              alt="Exploração avícola em Angola"
              className="h-[420px] w-full object-cover"
            />

            <div className="border-t bg-white p-5">
              <p className="text-sm font-semibold text-slate-900">
                Instalação avícola
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                A estrutura deve ser adaptada ao sistema de produção, à
                capacidade do lote e às condições ambientais locais.
              </p>

              <p className="mt-3 text-xs text-slate-500">
                Fonte da imagem: Fazenda Filomena / Platina Line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCÍPIOS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-green-700">
              Planeamento
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Princípios fundamentais
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Antes da construção ou adaptação de um aviário, devem ser
              analisados os seguintes factores.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {principios.map((item) => (
              <article
                key={item.titulo}
                className="rounded-2xl border bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900">
                  {item.titulo}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-green-700">
            Localização
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Escolha do local para a exploração
          </h2>

          <p className="mt-5 text-justify leading-8 text-slate-700">
            A escolha do terreno influencia directamente os custos de
            construção, drenagem, abastecimento de água, circulação de
            veículos, gestão de resíduos e biossegurança. A exploração deve
            ficar afastada de fontes evidentes de contaminação e de situações
            que dificultem o controlo sanitário.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Terreno com boa drenagem.",
            "Acesso controlável.",
            "Disponibilidade de água.",
            "Possibilidade de fornecimento de energia.",
            "Acesso para veículos.",
            "Boa gestão das águas pluviais.",
            "Distância adequada de fontes de contaminação.",
            "Possibilidade de expansão futura.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border bg-white p-5 text-sm leading-6 text-slate-700"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ESTRUTURA */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-green-300">
              Estrutura
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Principais componentes de uma exploração
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              A organização das áreas deve reduzir cruzamentos desnecessários
              entre pessoas, materiais, animais, resíduos e produtos.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {zonas.map((item) => (
              <article
                key={item.titulo}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-bold">
                  {item.titulo}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VENTILAÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-green-700">
              Ambiente interno
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Ventilação: controlar calor, humidade e qualidade do ar
            </h2>

            <div className="mt-6 space-y-5 text-justify leading-8 text-slate-700">
              <p>
                A ventilação é uma das funções mais importantes de um aviário.
                O sistema deve permitir renovação de ar sem criar condições
                prejudiciais às aves.
              </p>

              <p>
                Em períodos quentes, a movimentação do ar contribui para a
                dissipação do calor. Em períodos frios, o sistema deve ser
                regulado para evitar correntes de ar prejudiciais e,
                simultaneamente, controlar a humidade.
              </p>

              <p>
                A ventilação também contribui para reduzir a concentração de
                gases provenientes da decomposição da matéria orgânica, entre
                eles a amónia.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border bg-slate-50 p-8">
            <h3 className="text-xl font-bold text-slate-900">
              O que deve ser observado?
            </h3>

            <div className="mt-6 space-y-4">
              {[
                "Movimento do ar ao nível das aves.",
                "Temperatura dentro do aviário.",
                "Humidade relativa.",
                "Condição da cama.",
                "Presença de odores fortes.",
                "Concentração de poeira.",
                "Comportamento das aves.",
                "Funcionamento dos ventiladores, quando existentes.",
              ].map((item) => (
                <div
                  key={item}
                  className="border-b pb-4 text-sm leading-6 text-slate-700 last:border-b-0"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CALOR */}
      <section className="bg-green-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-green-700">
              Clima
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Instalações para regiões quentes
            </h2>

            <p className="mt-5 text-justify leading-8 text-slate-700">
              O calor é um dos principais factores que devem ser considerados
              no desenho de instalações avícolas em regiões tropicais. A
              construção deve favorecer sombra, circulação de ar e redução da
              carga térmica sobre o edifício.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                titulo: "Cobertura",
                texto:
                  "Materiais e soluções construtivas que reduzam a transferência excessiva de calor.",
              },
              {
                titulo: "Sombreamento",
                texto:
                  "Reduzir a incidência solar directa sobre áreas críticas do aviário.",
              },
              {
                titulo: "Ventilação",
                texto:
                  "Facilitar a entrada e saída de ar de acordo com o sistema utilizado.",
              },
              {
                titulo: "Água",
                texto:
                  "Proteger depósitos e linhas de água contra aquecimento excessivo.",
              },
            ].map((item) => (
              <article
                key={item.titulo}
                className="rounded-2xl border border-green-100 bg-white p-6"
              >
                <h3 className="font-bold text-slate-900">
                  {item.titulo}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ÁGUA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-2xl border">
            <img
              src="/imagens/galinhas/africa-press.jpg"
              alt="Produção avícola em Angola"
              className="h-full min-h-[380px] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-green-700">
              Abastecimento
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Sistema de água
            </h2>

            <div className="mt-6 space-y-5 text-justify leading-8 text-slate-700">
              <p>
                A água deve chegar às aves em quantidade suficiente e com
                qualidade adequada. O sistema deve ser dimensionado para
                atender ao lote mesmo durante períodos de maior consumo.
              </p>

              <p>
                Os depósitos devem estar protegidos contra contaminação e as
                linhas devem permitir limpeza periódica. Vazamentos devem ser
                corrigidos rapidamente para evitar humidade excessiva na cama.
              </p>

              <p>
                A temperatura ambiental influencia o consumo de água. Por isso,
                a disponibilidade deve ser acompanhada com maior atenção
                durante períodos de calor.
              </p>
            </div>

            <div className="mt-8 rounded-xl border bg-slate-50 p-6">
              <h3 className="font-bold text-slate-900">
                Atenção especial
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Uma alteração inesperada no consumo de água pode ser um
                indicador precoce de alteração ambiental, falha do sistema ou
                problema sanitário.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ALIMENTAÇÃO */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Equipamentos de alimentação
          </h2>

          <p className="mt-5 max-w-3xl text-justify leading-8 text-slate-700">
            O sistema de alimentação deve permitir que as aves tenham acesso
            adequado à ração e que o produtor consiga controlar o consumo,
            reduzir desperdícios e manter a higiene dos equipamentos.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Distribuição uniforme dos comedouros.",
              "Altura adequada ao tamanho das aves.",
              "Facilidade de limpeza.",
              "Protecção contra humidade.",
              "Redução do desperdício.",
              "Acesso equilibrado ao alimento.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border bg-white p-5 text-sm text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ILUMINAÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-green-700">
            Iluminação
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Distribuição da luz dentro do aviário
          </h2>

          <p className="mt-5 text-justify leading-8 text-slate-700">
            A iluminação deve ser suficientemente uniforme para evitar áreas
            excessivamente escuras ou demasiado intensas. O sistema deve
            permitir controlo do fotoperíodo conforme o programa definido para
            o lote.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border">
          <div className="grid md:grid-cols-3">
            {[
              {
                titulo: "Uniformidade",
                texto:
                  "Evitar grandes diferenças de intensidade luminosa dentro do aviário.",
              },
              {
                titulo: "Controlo",
                texto:
                  "Permitir ajustar o período de iluminação conforme a fase produtiva.",
              },
              {
                titulo: "Segurança",
                texto:
                  "Instalações eléctricas devem ser protegidas contra humidade, poeira e danos.",
              },
            ].map((item) => (
              <div
                key={item.titulo}
                className="border-b p-7 md:border-b-0 md:border-r last:border-r-0"
              >
                <h3 className="font-bold text-slate-900">
                  {item.titulo}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DENSIDADE */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold">
            Densidade e espaço disponível
          </h2>

          <p className="mt-5 max-w-4xl text-justify leading-8 text-slate-300">
            A densidade deve ser determinada considerando o sistema de criação,
            a idade e tamanho das aves, o clima, a ventilação, o equipamento
            disponível e os objectivos de produção. Não existe uma única
            densidade que possa ser aplicada indistintamente a todas as
            explorações.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              "Mais aves por área aumentam a carga térmica.",
              "Excesso de densidade dificulta acesso uniforme a água e alimento.",
              "A densidade deve ser compatível com a capacidade real do aviário.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm leading-7 text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPAMENTOS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">
          Equipamentos essenciais
        </h2>

        <p className="mt-5 max-w-3xl leading-8 text-slate-700">
          A instalação deve ser equipada de acordo com a dimensão da
          exploração, sistema de produção e capacidade técnica do produtor.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {equipamentos.map((item) => (
            <div
              key={item}
              className="rounded-xl border bg-white p-5 text-sm leading-7 text-slate-700"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEMAS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-green-700">
              Diagnóstico
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Problemas frequentes nas instalações
            </h2>
          </div>

          <div className="mt-10 overflow-x-auto rounded-2xl border bg-white">
            <table className="w-full min-w-[850px] border-collapse text-left text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border-b px-5 py-4 font-semibold">
                    Problema
                  </th>
                  <th className="border-b px-5 py-4 font-semibold">
                    Possíveis causas
                  </th>
                  <th className="border-b px-5 py-4 font-semibold">
                    Consequências
                  </th>
                </tr>
              </thead>

              <tbody>
                {problemas.map((item) => (
                  <tr
                    key={item.problema}
                    className="odd:bg-white even:bg-slate-50"
                  >
                    <td className="border-b px-5 py-4 font-semibold text-slate-900">
                      {item.problema}
                    </td>

                    <td className="border-b px-5 py-4 text-slate-600">
                      {item.causa}
                    </td>

                    <td className="border-b px-5 py-4 text-slate-600">
                      {item.consequência}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MANUTENÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-green-700">
              Manutenção
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Uma instalação precisa de manutenção contínua
            </h2>

            <p className="mt-5 text-justify leading-8 text-slate-700">
              A manutenção deve fazer parte da rotina da exploração. Pequenas
              falhas em telhados, paredes, redes, portas, ventiladores,
              bebedouros ou sistemas eléctricos podem transformar-se em
              problemas produtivos e sanitários.
            </p>
          </div>

          <div className="rounded-2xl border bg-slate-50 p-7">
            <h3 className="text-xl font-bold text-slate-900">
              Verificação periódica
            </h3>

            <div className="mt-5 space-y-3">
              {[
                "Telhado e cobertura.",
                "Paredes e portas.",
                "Redes e barreiras contra animais.",
                "Bebedouros e linhas de água.",
                "Comedouros.",
                "Instalações eléctricas.",
                "Ventiladores.",
                "Drenagem.",
                "Depósitos de água.",
                "Equipamentos de emergência.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-lg bg-white px-4 py-3 text-sm text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ANGOLA */}
      <section className="bg-green-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-green-300">
              Realidade angolana
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Construir para as condições reais da exploração
            </h2>

            <div className="mt-7 space-y-5 text-justify leading-8 text-green-50">
              <p>
                Em Angola existem explorações com diferentes níveis de
                tecnificação, desde sistemas familiares e de pequena escala
                até unidades empresariais com maior grau de mecanização. As
                instalações devem, por isso, ser dimensionadas de acordo com a
                capacidade económica e técnica do produtor.
              </p>

              <p>
                Uma instalação simples não significa necessariamente uma
                instalação inadequada. Um aviário de pequena escala pode
                apresentar bons resultados quando possui boa ventilação,
                higiene, disponibilidade de água, alimentação adequada,
                controlo de acesso e gestão sanitária.
              </p>

              <p>
                O desafio está em evitar soluções de construção que ignorem o
                clima, a disponibilidade de água, a manutenção dos
                equipamentos e a capacidade do produtor de operar correctamente
                o sistema.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-green-700">
            Checklist técnico
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Antes de colocar um lote no aviário
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            A seguinte lista pode ser utilizada como verificação preliminar
            antes da entrada das aves.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            "A instalação foi limpa?",
            "Foi realizada a desinfecção?",
            "O sistema de água está funcional?",
            "Os bebedouros estão limpos?",
            "Os comedouros estão preparados?",
            "O sistema de iluminação funciona?",
            "A ventilação está funcional?",
            "Existem falhas no telhado ou paredes?",
            "A área está protegida contra entrada de animais?",
            "Os equipamentos estão em condições de uso?",
            "Existe água disponível?",
            "Existe ração armazenada correctamente?",
            "A área de resíduos está organizada?",
            "Existe controlo de acesso?",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border bg-white p-5 text-sm font-medium text-slate-700"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* INVESTIGAÇÃO */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Temas para estudantes e investigadores
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Avaliação das condições térmicas dos aviários em diferentes províncias.",
              "Efeito da ventilação sobre o desempenho das galinhas.",
              "Avaliação da qualidade da água em explorações avícolas.",
              "Comparação entre instalações tradicionais e tecnificadas.",
              "Gestão de resíduos e cama de aviários.",
              "Impacto do stress térmico na produção de ovos.",
              "Biossegurança das instalações avícolas.",
              "Eficiência energética das explorações avícolas.",
              "Adequação das instalações à produção familiar.",
            ].map((item) => (
              <article
                key={item}
                className="rounded-xl border bg-white p-5 text-sm leading-7 text-slate-700"
              >
                {item}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">
          Fontes técnicas
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <a
            href="https://www.fao.org/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border p-6 hover:border-green-600"
          >
            <h3 className="font-bold text-slate-900">FAO</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Referências internacionais sobre produção animal, avicultura,
              biossegurança e boas práticas.
            </p>
          </a>

          <a
            href="https://www.ine.gov.ao/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border p-6 hover:border-green-600"
          >
            <h3 className="font-bold text-slate-900">
              Instituto Nacional de Estatística
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Dados oficiais sobre agricultura, pecuária e produção
              agropecuária em Angola.
            </p>
          </a>

          <a
            href="https://minagrif.gov.ao/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border p-6 hover:border-green-600"
          >
            <h3 className="font-bold text-slate-900">
              MINAGRIF
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Informação institucional e sectorial sobre agricultura e
              pecuária em Angola.
            </p>
          </a>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900">
            Continuar nas orientações de avicultura
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/pecuaria/galinhas/orientacoes/corte"
              className="rounded-lg border px-5 py-3 text-sm font-semibold hover:border-green-600 hover:text-green-700"
            >
              Frango de corte
            </Link>

            <Link
              href="/pecuaria/galinhas/orientacoes/poedeiras"
              className="rounded-lg border px-5 py-3 text-sm font-semibold hover:border-green-600 hover:text-green-700"
            >
              Poedeiras
            </Link>

            <Link
              href="/pecuaria/galinhas/orientacoes/alimentacao"
              className="rounded-lg border px-5 py-3 text-sm font-semibold hover:border-green-600 hover:text-green-700"
            >
              Alimentação
            </Link>

            <Link
              href="/pecuaria/galinhas/orientacoes/sanidade"
              className="rounded-lg border px-5 py-3 text-sm font-semibold hover:border-green-600 hover:text-green-700"
            >
              Sanidade
            </Link>

            <Link
              href="/pecuaria/galinhas/orientacoes"
              className="rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white hover:bg-green-800"
            >
              Todas as orientações
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}