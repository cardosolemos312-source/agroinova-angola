"use client";

import Link from "next/link";

const pilares = [
  {
    titulo: "Prevenção",
    texto:
      "A prevenção começa antes da entrada das aves. Instalações adequadas, limpeza, desinfeção, controlo de acesso, água segura, alimentação de qualidade e redução do contacto com potenciais fontes de infeção são fundamentais.",
  },
  {
    titulo: "Vigilância",
    texto:
      "O produtor deve observar diariamente o comportamento, consumo de ração e água, mortalidade, produção, fezes, condição corporal, respiração e aparência geral das aves.",
  },
  {
    titulo: "Diagnóstico",
    texto:
      "Quando existe suspeita de doença, o diagnóstico deve ser realizado com apoio veterinário e, quando necessário, através de exames laboratoriais. Tratar sem identificar a causa pode atrasar o controlo do problema.",
  },
  {
    titulo: "Biossegurança",
    texto:
      "A biossegurança procura impedir a entrada e a disseminação de agentes infecciosos na exploração, controlando pessoas, veículos, equipamentos, animais, água, ração e resíduos.",
  },
];

const sinais = [
  "Redução repentina do consumo de ração",
  "Redução do consumo de água",
  "Aumento da mortalidade",
  "Queda da produção de ovos",
  "Alteração da qualidade dos ovos",
  "Tosse ou espirros",
  "Dificuldade respiratória",
  "Corrimento nasal ou ocular",
  "Diarreia ou alterações das fezes",
  "Apatia",
  "Perda de peso",
  "Alterações na plumagem",
  "Caminhar anormal",
  "Redução do crescimento",
  "Aumento de aves isoladas do grupo",
];

const medidas = [
  "Controlar a entrada de pessoas",
  "Registar visitantes",
  "Limpar e desinfetar equipamentos",
  "Controlar roedores",
  "Controlar insetos",
  "Evitar contacto com aves de outras explorações",
  "Proteger a água",
  "Armazenar corretamente a ração",
  "Retirar cadáveres rapidamente",
  "Manter instalações limpas",
  "Separar lotes de idades diferentes",
  "Limpar e desinfetar entre lotes",
];

const vacinacao = [
  "O programa deve ser definido de acordo com a realidade sanitária da região.",
  "A vacinação não substitui a biossegurança.",
  "As vacinas devem ser armazenadas e utilizadas conforme as instruções do fabricante.",
  "A administração deve garantir que as aves recebem corretamente a vacina.",
  "Registos de vacinação devem ser mantidos.",
  "O acompanhamento veterinário é essencial para ajustar o programa.",
];

export default function SanidadePage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('/imagens/galinhas/cuanz a-sul.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/50" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
              Galinhas · Orientações técnicas
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Sanidade
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
              Prevenção de doenças, vigilância sanitária, vacinação,
              biossegurança, diagnóstico, higiene e resposta aos problemas
              sanitários nas explorações avícolas.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/pecuaria/galinhas/orientacoes"
                className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
              >
                Voltar às orientações
              </Link>

              <Link
                href="/pecuaria/galinhas"
                className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/20"
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
            Sanidade
          </span>
        </div>
      </div>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              Saúde das aves
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Sanidade começa antes da doença
            </h2>

            <div className="mt-6 space-y-5 text-justify leading-8 text-slate-700">
              <p>
                A sanidade avícola deve ser entendida como um conjunto de
                medidas destinadas a manter as aves saudáveis, prevenir
                doenças, identificar rapidamente alterações e limitar a
                propagação de agentes infecciosos.
              </p>

              <p>
                Uma exploração sanitariamente organizada não espera que apareça
                um surto para começar a agir. A limpeza, desinfeção,
                biossegurança, vacinação, qualidade da água, alimentação e
                controlo das condições ambientais fazem parte do trabalho
                diário.
              </p>

              <p>
                A observação das aves é igualmente importante. Pequenas
                alterações no comportamento ou no consumo podem surgir antes de
                sinais clínicos evidentes. Por isso, os registos de produção
                devem ser utilizados juntamente com a observação do lote.
              </p>

              <p>
                Qualquer suspeita de doença relevante deve ser avaliada por
                médico veterinário ou pelos serviços veterinários competentes.
                O diagnóstico correto é essencial para definir medidas de
                controlo.
              </p>
            </div>
          </div>

          <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
            <h3 className="text-xl font-bold text-slate-900">
              Quatro pilares
            </h3>

            <div className="mt-6 space-y-5 text-sm leading-7 text-slate-700">
              {pilares.map((pilar) => (
                <div key={pilar.titulo}>
                  <p className="font-bold text-slate-900">
                    {pilar.titulo}
                  </p>

                  <p className="mt-1">
                    {pilar.texto}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* IMAGEM */}
      <section className="border-y bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <img
              src="/imagens/galinhas/cuanz a-sul.jpg"
              alt="Produção avícola em Angola"
              className="h-[420px] w-full object-cover"
            />

            <div className="p-6">
              <p className="text-sm leading-6 text-slate-600">
                Exemplo de atividade avícola em Angola.
              </p>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Fonte da imagem: Euronews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VIGILÂNCIA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            Vigilância diária
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            O produtor deve conhecer o comportamento normal do lote
          </h2>

          <div className="mt-6 space-y-5 text-justify leading-8 text-slate-700">
            <p>
              A observação diária permite identificar alterações antes que o
              problema atinja grande parte das aves. O trabalhador deve
              conhecer o comportamento normal do lote para perceber rapidamente
              situações anormais.
            </p>

            <p>
              A primeira avaliação deve incluir consumo de alimento e água,
              atividade das aves, distribuição no aviário, aparência das
              fezes, mortalidade, produção e qualidade dos ovos, quando se
              trata de poedeiras.
            </p>

            <p>
              Alterações persistentes ou repentinas devem ser registadas e
              comunicadas ao responsável técnico.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sinais.map((sinal) => (
            <div
              key={sinal}
              className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-700 shadow-sm"
            >
              {sinal}
            </div>
          ))}
        </div>
      </section>

      {/* BIOSSEGURANÇA */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-green-400">
                Biossegurança
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white">
                Impedir a entrada e disseminação de doenças
              </h2>

              <div className="mt-6 space-y-5 text-justify leading-8 text-slate-300">
                <p>
                  A biossegurança é uma das principais ferramentas de prevenção
                  em qualquer exploração avícola. O objetivo é reduzir as
                  oportunidades de entrada de agentes infecciosos e impedir que
                  um agente introduzido se espalhe entre lotes.
                </p>

                <p>
                  Pessoas, veículos, equipamentos, aves de outras explorações,
                  roedores, insetos, água e alimentos podem participar na
                  transmissão de agentes patogénicos.
                </p>

                <p>
                  Quanto maior for a movimentação de pessoas e materiais entre
                  diferentes explorações, maior deve ser o rigor das medidas de
                  controlo.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <h3 className="text-xl font-bold text-white">
                Medidas fundamentais
              </h3>

              <div className="mt-6 space-y-3">
                {medidas.map((medida) => (
                  <div
                    key={medida}
                    className="border-b border-white/10 pb-3 text-sm text-slate-300 last:border-0"
                  >
                    {medida}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIMPEZA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              Higiene
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Limpeza e desinfeção
            </h2>

            <div className="mt-6 space-y-5 text-justify leading-8 text-slate-700">
              <p>
                A desinfeção só é eficaz quando existe limpeza adequada. Matéria
                orgânica, fezes, poeira e restos de ração podem reduzir a ação
                de muitos desinfetantes.
              </p>

              <p>
                O processo deve incluir remoção da matéria orgânica, lavagem,
                aplicação correta do produto aprovado e respeito pelo tempo de
                contacto recomendado.
              </p>

              <p>
                Entre lotes, equipamentos, comedouros, bebedouros, superfícies
                e áreas de trabalho devem ser limpos e desinfetados de acordo
                com o protocolo da exploração.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
            <h3 className="text-xl font-bold text-slate-900">
              Sequência básica
            </h3>

            <div className="mt-6 space-y-4">
              {[
                "Retirar as aves",
                "Remover cama e resíduos",
                "Limpar equipamentos",
                "Remover matéria orgânica",
                "Lavar as superfícies",
                "Aplicar desinfetante adequado",
                "Respeitar o tempo de contacto",
                "Deixar secar",
                "Preparar o aviário para o novo lote",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 border-b border-slate-200 pb-3 last:border-0"
                >
                  <span className="font-bold text-green-700">
                    {index + 1}
                  </span>

                  <span className="text-sm text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VACINAÇÃO */}
      <section className="border-y bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              Vacinação
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Programa vacinal deve ser técnico
            </h2>

            <div className="mt-6 space-y-5 text-justify leading-8 text-slate-700">
              <p>
                A vacinação é uma ferramenta importante no controlo de várias
                doenças aviárias, mas o programa não deve ser copiado
                automaticamente de uma exploração para outra.
              </p>

              <p>
                A definição do programa deve considerar a região, histórico
                sanitário, sistema de produção, idade das aves, finalidade do
                lote, circulação de agentes e recomendações dos serviços
                veterinários.
              </p>

              <p>
                Uma vacina administrada incorretamente pode não produzir a
                proteção esperada. Conservação, preparação, administração e
                registo são partes essenciais do processo.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {vacinacao.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOENÇAS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
          Doenças
        </p>

        <h2 className="mt-3 text-3xl font-bold text-slate-900">
          Principais grupos de problemas sanitários
        </h2>

        <p className="mt-5 max-w-4xl text-justify leading-8 text-slate-700">
          As doenças avícolas podem ter diferentes origens. A identificação da
          causa exige avaliação clínica, histórico da exploração e, quando
          necessário, exames complementares. Os sinais clínicos apresentados
          abaixo não constituem diagnóstico.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              titulo: "Doenças respiratórias",
              texto:
                "Podem provocar tosse, espirros, secreções, dificuldade respiratória e queda de desempenho.",
            },
            {
              titulo: "Doenças digestivas",
              texto:
                "Podem manifestar-se por alterações das fezes, perda de condição corporal e redução do consumo.",
            },
            {
              titulo: "Parasitoses",
              texto:
                "Podem afetar crescimento, condição corporal e desempenho, dependendo do agente e do sistema de criação.",
            },
            {
              titulo: "Problemas metabólicos",
              texto:
                "Podem estar relacionados com nutrição, ambiente, genética, crescimento ou produção.",
            },
          ].map((item) => (
            <article
              key={item.titulo}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {item.titulo}
              </h3>

              <p className="mt-4 text-justify text-sm leading-7 text-slate-600">
                {item.texto}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ANGOLA */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-400">
              Realidade angolana
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
              Sanidade na expansão da avicultura
            </h2>

            <div className="mt-6 space-y-5 text-justify leading-8 text-slate-300">
              <p>
                O crescimento da produção avícola em Angola aumenta a
                importância da vigilância sanitária. À medida que explorações
                familiares e comerciais aumentam a dimensão dos seus lotes,
                também cresce a necessidade de protocolos de biossegurança e
                acompanhamento técnico.
              </p>

              <p>
                A movimentação de aves, pessoas, equipamentos e produtos entre
                diferentes regiões deve ser acompanhada por medidas que reduzam
                o risco de disseminação de doenças.
              </p>

              <p>
                A organização sanitária da exploração deve estar integrada com
                os serviços veterinários e com os mecanismos oficiais de
                vigilância e notificação de doenças de declaração obrigatória.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EM CASO DE PROBLEMA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-red-200 bg-red-50 p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-red-700">
            Atenção
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            O que fazer perante suspeita de doença?
          </h2>

          <div className="mt-6 space-y-4 text-justify leading-8 text-slate-700">
            <p>
              Se houver aumento inesperado de mortalidade, sinais clínicos
              graves ou queda acentuada do desempenho, o produtor deve evitar
              movimentações desnecessárias das aves e procurar orientação
              veterinária.
            </p>

            <p>
              Não se deve administrar medicamentos de forma aleatória. O uso
              incorreto de antibióticos, por exemplo, pode dificultar o
              diagnóstico, favorecer resistência antimicrobiana e deixar
              resíduos nos produtos de origem animal.
            </p>

            <p>
              A suspeita de doenças de importância sanitária deve ser
              comunicada aos serviços veterinários competentes de acordo com os
              procedimentos oficiais aplicáveis.
            </p>
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="border-t bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            Referências
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Fontes institucionais
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <a
              href="https://www.fao.org/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-green-600"
            >
              <h3 className="font-bold text-slate-900">
                FAO
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Referências internacionais sobre produção animal, saúde
                animal, biossegurança e segurança alimentar.
              </p>

              <p className="mt-5 text-sm font-semibold text-green-700">
                Consultar fonte
              </p>
            </a>

            <a
              href="https://minagrif.gov.ao/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-green-600"
            >
              <h3 className="font-bold text-slate-900">
                Ministério da Agricultura e Florestas
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Informação institucional sobre agricultura, pecuária e
                desenvolvimento do setor agropecuário em Angola.
              </p>

              <p className="mt-5 text-sm font-semibold text-green-700">
                Consultar fonte
              </p>
            </a>

            <a
              href="https://www.woah.org/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-green-600"
            >
              <h3 className="font-bold text-slate-900">
                Organização Mundial de Saúde Animal
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Referência internacional para saúde animal, vigilância,
                prevenção e controlo de doenças.
              </p>

              <p className="mt-5 text-sm font-semibold text-green-700">
                Consultar fonte
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Continuar nas orientações
              </h2>

              <p className="mt-1 text-sm text-slate-600">
                Explore os restantes conteúdos técnicos.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/pecuaria/galinhas/orientacoes/corte"
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Frango de corte
              </Link>

              <Link
                href="/pecuaria/galinhas/orientacoes/poedeiras"
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Poedeiras
              </Link>

              <Link
                href="/pecuaria/galinhas/orientacoes/alimentacao"
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Alimentação
              </Link>

              <Link
                href="/pecuaria/galinhas/orientacoes"
                className="rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white hover:bg-green-800"
              >
                Orientações técnicas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}