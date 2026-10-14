
"use client";

import Link from "next/link";

const temas = [
  {
    numero: "01",
    titulo: "Alimentação",
    resumo: "Forragens, pastagens, palha e alimentação adaptada às necessidades dos asininos.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Donkey%20in%20field.jpg",
    rota: "/pecuaria/asininos/orientacoes/alimentacao",
  },
  {
    numero: "02",
    titulo: "Água",
    resumo: "Acesso diário a água limpa, hidratação e cuidados com os recipientes.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Donkey%20drinking%20water.jpg",
    rota: "/pecuaria/asininos/orientacoes/agua",
  },
  {
    numero: "03",
    titulo: "Cascos",
    resumo: "Inspeção, limpeza e manutenção dos cascos para prevenir lesões e dificuldades de locomoção.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Donkey%20standing.jpg",
    rota: "/pecuaria/asininos/orientacoes/cascos",
  },
  {
    numero: "04",
    titulo: "Sanidade",
    resumo: "Observação diária, prevenção de doenças e acompanhamento veterinário.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Donkey%20portrait.jpg",
    rota: "/pecuaria/asininos/orientacoes/sanidade",
  },
  {
    numero: "05",
    titulo: "Instalações",
    resumo: "Abrigos secos, sombra, ventilação e espaço seguro para descanso.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Donkeys%20in%20a%20field.jpg",
    rota: "/pecuaria/asininos/orientacoes/instalacoes",
  },
  {
    numero: "06",
    titulo: "Reprodução",
    resumo: "Cuidados com fêmeas, machos reprodutores, gestação e crias.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Donkey%20foal.jpg",
    rota: "/pecuaria/asininos/orientacoes/reproducao",
  },
];

export default function AsininosPage() {
  return (
    <main className="min-h-screen bg-[#f4f8f3] text-slate-800">
      <section className="relative isolate overflow-hidden bg-[#123d29] text-white">
        <img
          src="https://commons.wikimedia.org/wiki/Special:FilePath/Donkeys%20in%20a%20field.jpg"
          alt="Asininos numa pastagem rural"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#092719]/95 via-[#123d29]/80 to-[#123d29]/30" />

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <Link
              href="/pecuaria"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-green-100 transition hover:text-white"
            >
              <span aria-hidden="true">←</span> Pecuária
            </Link>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-green-300">
              Produção animal • Espécies pecuárias
            </p>

            <h1 className="max-w-2xl text-4xl font-black leading-tight md:text-6xl">
              Criação e bem-estar dos asininos
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-green-50 md:text-lg">
              Conhecimentos práticos sobre alimentação, água, saúde,
              instalações e reprodução de burros e jumentos, valorizando o
              maneio responsável e as condições reais da produção rural.
            </p>

            <a
              href="#orientacoes"
              className="mt-8 inline-flex rounded-xl bg-green-400 px-6 py-3.5 font-bold text-green-950 shadow-lg transition hover:-translate-y-1 hover:bg-green-300"
            >
              Explorar orientações
              <span className="ml-3" aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-sm md:p-8">
            <p className="text-sm font-bold uppercase tracking-widest text-green-300">
              Maneio responsável
            </p>
            <h2 className="mt-3 text-2xl font-bold">
              Cuidados essenciais todos os dias
            </h2>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                ["01", "Alimentação equilibrada"],
                ["02", "Água limpa"],
                ["03", "Cascos cuidados"],
                ["04", "Saúde observada"],
              ].map(([numero, titulo]) => (
                <div
                  key={numero}
                  className="rounded-2xl border border-white/10 bg-black/15 p-4"
                >
                  <span className="text-sm font-bold text-green-300">
                    {numero}
                  </span>
                  <p className="mt-2 text-sm font-semibold leading-6">
                    {titulo}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
            Conhecimento aplicado ao campo
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#173d2b] md:text-4xl">
            Orientações para a criação de asininos
          </h2>
          <p className="mt-4 leading-8 text-slate-600">
            Consulte os principais temas de maneio. Cada área deve ajudar o
            criador a reconhecer necessidades, melhorar as condições de
            manutenção e identificar situações que exigem apoio técnico.
          </p>
        </div>

        <div
          id="orientacoes"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {temas.map((tema) => (
            <article
              key={tema.numero}
              className="group overflow-hidden rounded-3xl border border-green-900/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden bg-green-100">
                <img
                  src={tema.imagem}
                  alt={tema.titulo + " de asininos"}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-black text-green-800 shadow">
                  {tema.numero}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-extrabold text-[#173d2b]">
                  {tema.titulo}
                </h3>
                <p className="mt-3 min-h-20 text-sm leading-7 text-slate-600">
                  {tema.resumo}
                </p>
                <Link
                  href={tema.rota}
                  className="mt-5 inline-flex items-center gap-2 font-bold text-green-800 transition hover:text-green-600"
                >
                  Consultar orientação
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-8 overflow-hidden rounded-3xl bg-[#173d2b] p-7 text-white md:grid-cols-[1.2fr_0.8fr] md:items-center md:p-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-300">
              Atenção ao bem-estar animal
            </p>
            <h2 className="mt-3 text-2xl font-black md:text-3xl">
              Observar diariamente é prevenir problemas
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-green-50/90">
              Alterações no apetite, feridas, claudicação, fraqueza ou
              comportamento invulgar justificam avaliação cuidadosa. Em caso
              de doença ou lesão, procure assistência veterinária.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              "Observar o apetite",
              "Verificar os cascos",
              "Disponibilizar água",
              "Garantir abrigo",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm font-semibold leading-6"
              >
                <span className="mb-2 block text-xl text-green-300">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-green-900/10 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            AGROINOVA ANGOLA — Conhecimento, Tecnologia e Inovação ao Serviço
            do Campo Angolano.
          </p>
          <Link
            href="/pecuaria"
            className="font-bold text-green-800 hover:text-green-600"
          >
            Voltar à Pecuária →
          </Link>
        </div>
      </footer>
    </main>
  );
}
