
"use client";

import { useState } from "react";
import Link from "next/link";

const temas = [
  {
    numero: "01",
    titulo: "Abrigo e conforto",
    resumo: "Proteção contra chuva, vento, calor excessivo e superfícies inadequadas.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Donkey.jpg",
    alt: "Asinino em ambiente natural",
    conteudo: [
      "Disponibilizar um abrigo ventilado, seco e suficientemente espaçoso.",
      "Garantir sombra durante os períodos de calor intenso.",
      "Manter o piso estável, seco e sem objetos cortantes.",
      "Permitir que os animais se deitem e levantem sem dificuldade.",
    ],
  },
  {
    numero: "02",
    titulo: "Água e alimentação",
    resumo: "Acesso regular a água limpa e alimentação adequada às necessidades do animal.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Donkey_in_Africa.jpg",
    alt: "Asinino em contexto rural",
    conteudo: [
      "Disponibilizar água limpa e verificar diariamente os recipientes.",
      "Basear a alimentação em forragens adequadas e fibras de boa qualidade.",
      "Evitar alterações bruscas da dieta e excesso de alimentos concentrados.",
      "Ajustar a alimentação à idade, condição corporal, trabalho e estado fisiológico.",
    ],
  },
  {
    numero: "03",
    titulo: "Comportamento e socialização",
    resumo: "Observar o comportamento natural e proporcionar condições de vida adequadas.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Donkey_with_foal.jpg",
    alt: "Asinino com cria",
    conteudo: [
      "Observar diariamente o apetite, a postura, a movimentação e as interações sociais.",
      "Permitir contacto social compatível com a segurança e a personalidade dos animais.",
      "Evitar gritos, perseguições e castigos físicos.",
      "Aproximar-se calmamente e habituar o animal ao contacto humano de forma gradual.",
    ],
  },
  {
    numero: "04",
    titulo: "Casco e locomoção",
    resumo: "Prevenção de lesões e manutenção da capacidade de caminhar.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Donkey_standing.jpg",
    alt: "Asinino em posição de repouso",
    conteudo: [
      "Inspecionar regularmente os cascos e procurar pedras, fissuras ou mau cheiro.",
      "Manter os locais de permanência limpos e evitar lama permanente.",
      "Solicitar avaliação de um profissional qualificado quando houver crescimento excessivo ou alterações.",
      "Procurar assistência veterinária se o animal apresentar claudicação ou dor.",
    ],
  },
  {
    numero: "05",
    titulo: "Maneio sem violência",
    resumo: "Contenção, condução e contacto humano que respeitam o animal.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Donkey_cart.jpg",
    alt: "Asinino num contexto de trabalho rural",
    conteudo: [
      "Utilizar equipamentos ajustados, sem apertar nem provocar feridas.",
      "Conduzir o animal com calma, evitando puxões violentos e movimentos bruscos.",
      "Não utilizar a dor ou o medo como método de treino.",
      "Interromper o maneio se houver sinais evidentes de sofrimento ou dificuldade respiratória.",
    ],
  },
  {
    numero: "06",
    titulo: "Descanso e carga de trabalho",
    resumo: "Equilíbrio entre esforço, repouso e capacidade física.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Donkey_pack_animal.jpg",
    alt: "Asinino utilizado como animal de carga",
    conteudo: [
      "Adequar a carga à condição corporal, idade, saúde e capacidade do animal.",
      "Garantir pausas, água e oportunidades de descanso.",
      "Distribuir a carga de forma equilibrada e verificar se o equipamento provoca lesões.",
      "Não exigir trabalho a animais debilitados, doentes ou com sinais de exaustão.",
    ],
  },
];

const sinais = [
  "Recusa persistente de alimento ou água.",
  "Feridas, inchaços ou lesões provocadas pelo equipamento.",
  "Claudicação, dificuldade em levantar-se ou caminhar.",
  "Respiração anormal, fraqueza ou sinais de dor.",
  "Isolamento invulgar ou alteração acentuada do comportamento.",
];

export default function BemEstarAsininosPage() {
  const [aberto, setAberto] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#f5f7f6] text-[#17221b]">
      <section className="relative isolate overflow-hidden bg-[#123c27]">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://commons.wikimedia.org/wiki/Special:FilePath/Donkey.jpg"
            alt="Asinino num ambiente rural"
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102e20]/95 via-[#123c27]/75 to-[#123c27]/35" />
        </div>

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <Link
            href="/pecuaria/asininos"
            className="inline-flex rounded-full border border-white/40 px-4 py-2 text-sm text-white transition hover:bg-white/10"
          >
            ← Voltar aos asininos
          </Link>

          <p className="mt-9 text-sm font-bold uppercase tracking-[0.22em] text-green-300">
            AGROINOVA ANGOLA · PRODUÇÃO ANIMAL
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-6xl">
            Bem-estar dos asininos
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-green-50 sm:text-lg">
            Orientações para melhorar as condições de vida dos jumentos e
            jumentas, respeitando as suas necessidades físicas,
            comportamentais e sanitárias nas explorações rurais de Angola.
          </p>

          <a
            href="#orientacoes"
            className="mt-8 inline-flex rounded-xl bg-green-500 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-green-400"
          >
            Explorar orientações
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-green-700">
            Cuidado responsável
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Um animal saudável começa com boas condições de vida
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            O bem-estar dos asininos depende de alimentação apropriada,
            disponibilidade de água, abrigo, descanso, saúde dos cascos,
            maneio tranquilo e acompanhamento sanitário. Estes cuidados são
            importantes tanto para animais de companhia como para aqueles
            utilizados no transporte e nas atividades agrícolas.
          </p>
        </div>

        <div
          id="orientacoes"
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {temas.map((tema, index) => (
            <article
              key={tema.numero}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden bg-green-100">
                <img
                  src={tema.imagem}
                  alt={tema.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-xl bg-white/95 px-3 py-2 text-sm font-extrabold text-green-900 shadow">
                  {tema.numero}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold">{tema.titulo}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {tema.resumo}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    setAberto(aberto === index ? null : index)
                  }
                  aria-expanded={aberto === index}
                  className="mt-5 flex w-full items-center justify-between rounded-xl bg-green-50 px-4 py-3 text-left font-bold text-green-900 transition hover:bg-green-100"
                >
                  {aberto === index ? "Fechar orientações" : "Consultar orientações"}
                  <span>{aberto === index ? "−" : "+"}</span>
                </button>

                {aberto === index && (
                  <ul className="mt-4 space-y-3 rounded-2xl border border-green-100 bg-[#f7fbf7] p-4">
                    {tema.conteudo.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-slate-700"
                      >
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Observação diária
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Reconhecer cedo os sinais de sofrimento
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Os asininos podem ocultar sinais de dor. Por isso, alterações
              discretas na alimentação, na postura e na interação merecem
              atenção. A observação diária ajuda a identificar problemas
              antes que se agravem.
            </p>
          </div>

          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-amber-950">
              Sinais de alerta
            </h3>
            <ul className="mt-5 space-y-4">
              {sinais.map((sinal) => (
                <li
                  key={sinal}
                  className="flex gap-3 text-sm leading-6 text-amber-950"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-200 font-bold">
                    !
                  </span>
                  <span>{sinal}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-amber-200 pt-4 text-sm leading-6 text-amber-900">
              Em caso de dor intensa, ferimentos graves, dificuldade
              respiratória ou incapacidade de se levantar, procurar
              assistência veterinária urgente.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="rounded-3xl bg-[#123c27] p-7 text-white sm:p-10">
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            Bem-estar é também produtividade sustentável
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-green-50">
            Um asinino bem alimentado, descansado e tratado com respeito tem
            melhores condições para manter a saúde e realizar as suas
            atividades. O cuidado responsável protege o animal e apoia os
            produtores e as famílias rurais.
          </p>
          <Link
            href="/pecuaria/asininos"
            className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 font-bold text-green-900 transition hover:bg-green-100"
          >
            Voltar à área dos asininos
          </Link>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-5 py-6 text-center text-sm text-slate-500">
        AGROINOVA ANGOLA · Conhecimento, Tecnologia e Inovação ao Serviço do Campo Angolano.
      </footer>
    </main>
  );
}
