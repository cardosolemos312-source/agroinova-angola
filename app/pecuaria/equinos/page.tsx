
"use client";

import Link from "next/link";

const temas = [
  {
    numero: "01",
    titulo: "Alimentação",
    slug: "alimentacao",
    resumo:
      "Conheça os princípios de alimentação dos equinos, a utilização de forragens, os concentrados e a importância de uma dieta equilibrada.",
    imagem:
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1200&q=85",
    alt: "Cavalo num ambiente de criação",
  },
  {
    numero: "02",
    titulo: "Água",
    slug: "agua",
    resumo:
      "Aprenda a garantir água limpa, acesso permanente à hidratação e condições adequadas para os cavalos.",
    imagem:
      "https://www.otterco-op.crs/wcm/connect/sites/3137cffc-33a5-4d7a-8b62-e13602538648/horse%2Bdrinking%2Bwater.jpg",
    alt: "Cavalo a beber água",
  },
  {
    numero: "03",
    titulo: "Cascos",
    slug: "cascos",
    resumo:
      "Descubra os cuidados de manutenção dos cascos, a observação diária e a prevenção de problemas locomotores.",
    imagem:
      "https://images.unsplash.com/photo-1534307678054-9d4b4e9a5e0f?auto=format&fit=crop&w=1200&q=85",
    alt: "Cavalo num ambiente exterior",
  },
  {
    numero: "04",
    titulo: "Sanidade",
    slug: "sanidade",
    resumo:
      "Saiba como observar o estado de saúde dos equinos, manter a higiene e procurar assistência veterinária.",
    imagem:
      "https://www.thebrooke.org/sites/default/files/Brooke%20News/farrier%20in%20Senegal.JPG",
    alt: "Cuidados humanos com um cavalo",
  },
  {
    numero: "05",
    titulo: "Reprodução",
    slug: "reproducao",
    resumo:
      "Conheça os cuidados com éguas e garanhões, a seleção dos reprodutores e o acompanhamento da gestação.",
    imagem:
      "https://theequinest.com/breeds/images/kwanhama-horse.webp",
    alt: "Cavalos da raça Kwanhama, associada a Angola",
  },
];

export default function EquinosPage() {
  return (
    <main className="min-h-screen bg-[#f5f7f6] text-[#17221b]">
      <section className="relative isolate min-h-[430px] overflow-hidden bg-[#123d28]">
        <img
          src="https://theequinest.com/breeds/images/kwanhama-horse.webp"
          alt="Cavalos Kwanhama num pasto"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#092b1b]/95 via-[#103b28]/75 to-[#103b28]/25" />

        <div className="mx-auto flex min-h-[430px] max-w-7xl items-center px-5 py-16 sm:px-8 lg:px-12">
          <div className="max-w-3xl text-white">
            <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide text-green-50 backdrop-blur">
              AGROINOVA ANGOLA · PECUÁRIA
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Criação e maneio de equinos
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-green-50 sm:text-lg">
              Informação técnica para apoiar os criadores na alimentação,
              hidratação, manutenção dos cascos, sanidade e reprodução dos
              cavalos, valorizando a realidade pecuária angolana.
            </p>

            <a
              href="#areas-tecnicas"
              className="mt-8 inline-flex items-center rounded-xl bg-white px-6 py-3.5 font-bold text-[#14532d] shadow-lg transition hover:-translate-y-1 hover:bg-green-50"
            >
              Explorar áreas técnicas
              <span className="ml-3" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              Conteúdo técnico
            </p>
            <p className="mt-2 text-xl font-bold">Maneio responsável</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Orientações para melhorar os cuidados diários com os animais.
            </p>
          </div>

          <div className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              Bem-estar animal
            </p>
            <p className="mt-2 text-xl font-bold">Prevenção e observação</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Atenção às necessidades dos equinos e aos sinais de alerta.
            </p>
          </div>

          <div className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              Contexto nacional
            </p>
            <p className="mt-2 text-xl font-bold">Pecuária em Angola</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Valorização dos sistemas de criação e dos recursos locais.
            </p>
          </div>
        </div>
      </section>

      <section
        id="areas-tecnicas"
        className="mx-auto max-w-7xl scroll-mt-8 px-5 pb-16 sm:px-8 lg:px-12"
      >
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              Guia de criação
            </p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              Áreas técnicas dos equinos
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Selecione uma área para consultar orientações práticas de
              maneio, cuidados e acompanhamento dos cavalos.
            </p>
          </div>

          <span className="w-fit rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-800">
            5 áreas técnicas
          </span>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {temas.map((tema) => (
            <article
              key={tema.slug}
              className="group overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <Link
                href={`/pecuaria/equinos/orientacoes/${tema.slug}`}
                className="block h-full"
              >
                <div className="relative h-60 overflow-hidden bg-green-100">
                  <img
                    src={tema.imagem}
                    alt={tema.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <span className="absolute left-5 top-5 rounded-lg bg-white/95 px-3 py-2 text-sm font-extrabold text-green-800 shadow">
                    {tema.numero}
                  </span>

                  <h3 className="absolute bottom-5 left-5 right-5 text-2xl font-extrabold text-white drop-shadow-md">
                    {tema.titulo}
                  </h3>
                </div>

                <div className="flex min-h-[220px] flex-col p-6">
                  <p className="flex-1 text-sm leading-7 text-slate-600">
                    {tema.resumo}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="font-bold text-green-800">
                      Consultar orientações
                    </span>

                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-xl font-bold text-green-800 transition group-hover:bg-green-700 group-hover:text-white"
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-green-100 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
          <div className="rounded-3xl bg-[#eaf5ed] p-7 sm:p-9">
            <h2 className="text-2xl font-extrabold text-[#14532d]">
              Cuidados adequados começam pela observação
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-700">
              A alimentação, a água, os cascos, a sanidade e a reprodução
              devem ser acompanhados de forma integrada. Perante sinais de
              doença, dor, dificuldade de locomoção ou complicações
              reprodutivas, procure um médico veterinário.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
