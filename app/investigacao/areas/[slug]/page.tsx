import Link from "next/link";
import { notFound } from "next/navigation";

import {
  areasInvestigacao,
  obterAreaInvestigacao,
} from "@/data/investigacao/areas";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return areasInvestigacao.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const area = obterAreaInvestigacao(slug);

  if (!area) {
    return {
      title: "Área de investigação | AGROINOVA ANGOLA",
    };
  }

  return {
    title: `${area.titulo} | Centro de Investigação AGROINOVA`,
    description: area.resumo,
  };
}

export default async function AreaInvestigacaoPage({
  params,
}: Props) {
  const { slug } = await params;

  const area = obterAreaInvestigacao(slug);

  if (!area) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <section className="bg-green-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Link
            href="/investigacao"
            className="inline-flex items-center text-sm font-bold text-green-300 hover:text-white"
          >
            ← Centro de Investigação
          </Link>

          <div className="mt-8 flex flex-col gap-7 md:flex-row md:items-center">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-white/10 text-6xl">
              {area.icone}
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-green-300">
                Dossiê científico
              </p>

              <h1 className="mt-2 text-4xl font-black md:text-6xl">
                {area.titulo}
              </h1>

              <p className="mt-5 max-w-4xl text-lg leading-8 text-green-50">
                {area.resumo}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
          <article className="space-y-8">
            {/* INTRODUÇÃO */}
            <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">
              <p className="text-sm font-black uppercase tracking-[0.15em] text-green-700">
                Visão científica
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Introdução
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-700">
                {area.introducao}
              </p>
            </section>

            {/* IMPORTÂNCIA */}
            <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">
              <p className="text-sm font-black uppercase tracking-[0.15em] text-green-700">
                Fundamentos
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Por que esta área é importante?
              </h2>

              <div className="mt-7 space-y-5">
                {area.importancia.map((texto, index) => (
                  <div
                    key={texto}
                    className="flex gap-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-black text-green-800">
                      {index + 1}
                    </div>

                    <p className="leading-7 text-slate-700">
                      {texto}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* ANGOLA */}
            <section className="rounded-3xl border border-green-200 bg-green-50 p-7 md:p-10">
              <p className="text-sm font-black uppercase tracking-[0.15em] text-green-700">
                Investigação aplicada
              </p>

              <h2 className="mt-2 text-3xl font-black text-green-950">
                Por que investigar isto em Angola?
              </h2>

              <div className="mt-7 space-y-5">
                {area.angola.map((texto) => (
                  <p
                    key={texto}
                    className="leading-7 text-green-950/80"
                  >
                    {texto}
                  </p>
                ))}
              </div>
            </section>

            {/* LINHAS DE PESQUISA */}
            <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">
              <p className="text-sm font-black uppercase tracking-[0.15em] text-green-700">
                Agenda científica
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Linhas de investigação
              </h2>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {area.linhasPesquisa.map((linha) => (
                  <div
                    key={linha}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <span className="font-bold">
                      🔬 {linha}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* APLICAÇÕES */}
            <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">
              <p className="text-sm font-black uppercase tracking-[0.15em] text-green-700">
                Da ciência ao campo
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Aplicações práticas
              </h2>

              <div className="mt-7 grid gap-4 md:grid-cols-2">
                {area.aplicacoes.map((aplicacao) => (
                  <div
                    key={aplicacao}
                    className="rounded-2xl bg-green-50 p-5"
                  >
                    <div className="text-2xl">✓</div>

                    <p className="mt-2 font-bold text-green-900">
                      {aplicacao}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* PERGUNTAS */}
            <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">
              <p className="text-sm font-black uppercase tracking-[0.15em] text-green-700">
                Agenda de investigação
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Perguntas que ainda precisam de resposta
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Estas perguntas podem orientar teses, dissertações,
                projectos universitários, ensaios de campo e
                investigação institucional.
              </p>

              <div className="mt-7 space-y-3">
                {area.perguntas.map((pergunta, index) => (
                  <div
                    key={pergunta}
                    className="rounded-2xl border border-slate-200 p-5"
                  >
                    <span className="mr-3 font-black text-green-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="font-semibold">
                      {pergunta}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* REFERÊNCIAS */}
            <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">
              <p className="text-sm font-black uppercase tracking-[0.15em] text-green-700">
                Bibliografia e fontes
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Referências para aprofundamento
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                As referências abaixo são fontes técnicas e científicas
                utilizadas para estruturar este dossiê. A AGROINOVA
                não apresenta este conteúdo como publicação científica
                original.
              </p>

              <div className="mt-7 space-y-4">
                {area.referencias.map((referencia) => (
                  <a
                    key={referencia.url}
                    href={referencia.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-2xl border border-slate-200 p-5 transition hover:border-green-400 hover:bg-green-50"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-black text-slate-900">
                          {referencia.titulo}
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          {referencia.instituicao}
                          {referencia.ano
                            ? ` • ${referencia.ano}`
                            : ""}
                        </p>
                      </div>

                      <span className="text-green-700">
                        ↗
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </article>

          {/* LATERAL */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.15em] text-green-700">
                Nesta área
              </p>

              <nav className="mt-4 space-y-2">
                <a
                  href="#"
                  className="block rounded-xl bg-green-50 px-4 py-3 text-sm font-bold text-green-900"
                >
                  Visão científica
                </a>

                <a
                  href="#"
                  className="block rounded-xl px-4 py-3 text-sm font-semibold hover:bg-slate-50"
                >
                  Fundamentos
                </a>

                <a
                  href="#"
                  className="block rounded-xl px-4 py-3 text-sm font-semibold hover:bg-slate-50"
                >
                  Investigação em Angola
                </a>

                <a
                  href="#"
                  className="block rounded-xl px-4 py-3 text-sm font-semibold hover:bg-slate-50"
                >
                  Linhas de investigação
                </a>

                <a
                  href="#"
                  className="block rounded-xl px-4 py-3 text-sm font-semibold hover:bg-slate-50"
                >
                  Aplicações
                </a>

                <a
                  href="#"
                  className="block rounded-xl px-4 py-3 text-sm font-semibold hover:bg-slate-50"
                >
                  Perguntas de investigação
                </a>

                <a
                  href="#"
                  className="block rounded-xl px-4 py-3 text-sm font-semibold hover:bg-slate-50"
                >
                  Referências
                </a>
              </nav>

              <div className="mt-6 border-t border-slate-200 pt-6">
                <Link
                  href="/investigacao"
                  className="block rounded-xl bg-green-800 px-4 py-3 text-center text-sm font-bold text-white hover:bg-green-900"
                >
                  ← Voltar ao Centro
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}