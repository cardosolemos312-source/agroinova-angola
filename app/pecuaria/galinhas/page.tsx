"use client";

import Link from "next/link";

const temas = [
  {
    titulo: "Frango de corte",
    descricao:
      "Produção de carne, receção de pintos, maneio, alimentação, água, ambiente, sanidade, biossegurança e indicadores produtivos.",
    href: "/pecuaria/galinhas/orientacoes/corte",
  },
  {
    titulo: "Poedeiras",
    descricao:
      "Produção de ovos, recria, entrada em postura, alimentação, iluminação, qualidade dos ovos, sanidade e gestão do lote.",
    href: "/pecuaria/galinhas/orientacoes/poedeiras",
  },
  {
    titulo: "Alimentação",
    descricao:
      "Necessidades nutricionais, fases de produção, qualidade das rações, matérias-primas e gestão do consumo.",
    href: "/pecuaria/galinhas/orientacoes/alimentacao",
  },
  {
    titulo: "Sanidade",
    descricao:
      "Prevenção de doenças, vacinação, vigilância clínica, biossegurança, diagnóstico e gestão sanitária.",
    href: "/pecuaria/galinhas/orientacoes/sanidade",
  },
  {
    titulo: "Instalações",
    descricao:
      "Localização, construção, ventilação, densidade, equipamentos, cama, temperatura e condições ambientais.",
    href: "/pecuaria/galinhas/orientacoes/instalacoes",
  },
  {
    titulo: "Biossegurança",
    descricao:
      "Medidas para reduzir a entrada e disseminação de agentes infecciosos nas explorações avícolas.",
    href: "/pecuaria/galinhas/orientacoes/biosseguranca",
  },
];

const fontes = [
  {
    nome: "Instituto Nacional de Estatística de Angola",
    descricao:
      "Informação estatística oficial sobre produção agropecuária e indicadores da atividade avícola.",
    href: "https://www.ine.gov.ao/",
  },
  {
    nome: "Ministério da Agricultura e Florestas",
    descricao:
      "Informação institucional e programas relacionados com o desenvolvimento da produção agropecuária em Angola.",
    href: "https://minagrif.gov.ao/",
  },
  {
    nome: "Ministério da Indústria e Comércio",
    descricao:
      "Informação sobre produção nacional, importação de carne de frango e desenvolvimento da avicultura.",
    href: "https://mindcom.gov.ao/",
  },
];

export default function GalinhasPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('/imagens/galinhas/filomena.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/50" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
              Pecuária · Avicultura
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              Galinhas
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
              Conhecimento técnico sobre a produção de galinhas em Angola,
              abrangendo produção de carne, produção de ovos, alimentação,
              instalações, sanidade, biossegurança e gestão das explorações.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/pecuaria/galinhas/orientacoes"
                className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                Orientações técnicas
              </Link>

              <Link
                href="/dados"
                className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Consultar dados
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

          <span className="font-medium text-slate-900">
            Galinhas
          </span>
        </div>
      </div>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              Visão geral
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Avicultura em Angola
            </h2>

            <div className="mt-6 space-y-5 text-justify text-base leading-8 text-slate-700">
              <p>
                A avicultura ocupa uma posição estratégica na produção de
                proteína animal em Angola. A atividade envolve sistemas de
                produção familiares, pequenos produtores, explorações
                comerciais e unidades de maior dimensão, com diferentes níveis
                de tecnificação e organização.
              </p>

              <p>
                A produção de frango e ovos depende de um conjunto de fatores
                interligados. Genética, qualidade dos pintos, alimentação,
                disponibilidade de água, ambiente, instalações, sanidade,
                biossegurança, mão de obra e gestão económica determinam o
                desempenho do lote.
              </p>

              <p>
                Por essa razão, a produção avícola não deve ser analisada
                apenas pelo número de aves existentes. É necessário acompanhar
                indicadores como mortalidade, consumo de ração, conversão
                alimentar, ganho de peso, uniformidade, produção de ovos,
                qualidade dos ovos, idade ao abate e custos de produção.
              </p>

              <p>
                No contexto angolano, o desenvolvimento da avicultura também
                está relacionado com a disponibilidade de milho, soja e outras
                matérias-primas utilizadas na alimentação animal, bem como com
                a capacidade de produção de pintos, acesso a equipamentos,
                assistência técnica, vacinação, medicamentos veterinários e
                organização da cadeia de comercialização.
              </p>
            </div>
          </div>

          <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
            <h3 className="text-xl font-bold text-slate-900">
              O que estudar nesta secção
            </h3>

            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
              <li>
                <strong>Produção:</strong> sistemas de criação e objetivos
                produtivos.
              </li>

              <li>
                <strong>Nutrição:</strong> alimentação adequada para cada fase.
              </li>

              <li>
                <strong>Ambiente:</strong> temperatura, ventilação e qualidade
                da cama.
              </li>

              <li>
                <strong>Sanidade:</strong> prevenção, vigilância e controlo de
                doenças.
              </li>

              <li>
                <strong>Biossegurança:</strong> redução dos riscos de entrada e
                disseminação de agentes infecciosos.
              </li>

              <li>
                <strong>Gestão:</strong> acompanhamento técnico e económico da
                exploração.
              </li>
            </ul>
          </aside>
        </div>
      </section>

      {/* CONTEXTO ANGOLA */}
      <section className="border-y bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              Contexto nacional
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              A importância estratégica da avicultura
            </h2>

            <div className="mt-6 space-y-5 text-justify leading-8 text-slate-700">
              <p>
                Dados divulgados por instituições públicas angolanas mostram
                que a produção avícola tem sido considerada uma área importante
                para o reforço da produção nacional de proteína animal e para a
                redução da dependência de importações.
              </p>

              <p>
                Segundo informação divulgada pelo Ministério da Indústria e
                Comércio, a produção nacional de carne de aves apresentou
                crescimento nos últimos anos. A mesma instituição indicou uma
                produção estimada de 64 394 toneladas de carne de aves em 2025,
                enquanto Angola continuou a importar volumes significativos de
                carne de frango.
              </p>

              <p>
                Estes dados mostram que existe espaço para expansão da cadeia
                avícola, mas também evidenciam desafios relacionados com custos
                de produção, alimentação animal, disponibilidade de insumos,
                capacidade técnica, organização da cadeia produtiva e acesso ao
                mercado.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-medium text-slate-500">
                Produção estimada
              </p>

              <p className="mt-2 text-3xl font-bold text-slate-900">
                64 394 t
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Carne de aves em 2025, segundo informação divulgada pelo
                Ministério da Indústria e Comércio.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-medium text-slate-500">
                Importações
              </p>

              <p className="mt-2 text-3xl font-bold text-slate-900">
                227 855 t
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Volume de frango importado em 2025, conforme informação
                divulgada pelo Ministério da Indústria e Comércio.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-medium text-slate-500">
                Período dos dados
              </p>

              <p className="mt-2 text-3xl font-bold text-slate-900">
                2025
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Os valores apresentados devem ser interpretados segundo a
                metodologia e a fonte institucional indicada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGEM */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <img
            src="/imagens/galinhas/vinabar.jpg"
            alt="Exploração avícola em Angola"
            className="h-[420px] w-full object-cover"
          />

          <div className="p-6">
            <p className="text-sm leading-6 text-slate-600">
              Exemplo de exploração avícola em Angola.
            </p>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              Fonte: PDAC — Programa de Desenvolvimento da Agricultura
              Comercial.
            </p>
          </div>
        </div>
      </section>

      {/* TEMAS */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-400">
              Conhecimento técnico
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
              Principais áreas de estudo
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Explore os conteúdos técnicos preparados para produtores,
              estudantes, técnicos, investigadores e profissionais ligados à
              produção avícola.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {temas.map((tema) => (
              <Link
                key={tema.titulo}
                href={tema.href}
                className="group rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:border-green-500/50 hover:bg-white/10"
              >
                <h3 className="text-xl font-bold text-white group-hover:text-green-400">
                  {tema.titulo}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {tema.descricao}
                </p>

                <p className="mt-6 text-sm font-semibold text-green-400">
                  Consultar orientação técnica
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CADEIA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              Cadeia produtiva
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Da produção ao consumidor
            </h2>

            <div className="mt-6 space-y-5 text-justify leading-8 text-slate-700">
              <p>
                Uma exploração avícola eficiente depende de uma cadeia de
                fornecimento organizada. A produção começa com genética e
                reprodução, passa pela produção e aquisição de pintos,
                alimentação, instalações, assistência técnica e sanidade, e
                termina com o processamento, comercialização e consumo.
              </p>

              <p>
                Problemas numa única etapa podem afetar todo o sistema. Uma
                ração de baixa qualidade, por exemplo, pode reduzir o crescimento
                das aves, aumentar a conversão alimentar e elevar o custo por
                quilograma produzido.
              </p>

              <p>
                Da mesma forma, falhas de biossegurança podem aumentar a
                mortalidade e provocar perdas económicas importantes. A gestão
                avícola deve, portanto, ser integrada e baseada em registos.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
            <h3 className="text-xl font-bold text-slate-900">
              Elementos essenciais
            </h3>

            <div className="mt-6 space-y-3">
              {[
                "Genética e qualidade dos pintos",
                "Alimentação e matérias-primas",
                "Água de qualidade",
                "Instalações e equipamentos",
                "Temperatura e ventilação",
                "Sanidade e vacinação",
                "Biossegurança",
                "Mão de obra e assistência técnica",
                "Registos produtivos",
                "Comercialização",
              ].map((item) => (
                <div
                  key={item}
                  className="border-b border-slate-200 pb-3 text-sm font-medium text-slate-700 last:border-0"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="border-t bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            Fontes institucionais
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Informação e dados
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {fontes.map((fonte) => (
              <a
                key={fonte.nome}
                href={fonte.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-green-600 hover:shadow-sm"
              >
                <h3 className="font-bold text-slate-900">
                  {fonte.nome}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {fonte.descricao}
                </p>

                <p className="mt-5 text-sm font-semibold text-green-700">
                  Visitar fonte oficial
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO FINAL */}
      <section className="border-t bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Continuar a estudar avicultura
            </h2>

            <p className="mt-1 text-sm text-slate-600">
              Consulte as orientações técnicas detalhadas.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/pecuaria/galinhas/orientacoes"
              className="rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white hover:bg-green-800"
            >
              Orientações técnicas
            </Link>

            <Link
              href="/pecuaria"
              className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Voltar à pecuária
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
