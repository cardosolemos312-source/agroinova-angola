
"use client";

import Link from "next/link";
import { useState } from "react";

type Tema = {
  numero: string;
  titulo: string;
  resumo: string;
  imagem: string;
  alt: string;
  conteudo: string[];
  cuidados: string[];
};

const temas: Tema[] = [
  {
    numero: "01",
    titulo: "Matrizes e garanhões",
    resumo: "Seleção dos reprodutores e avaliação das condições de saúde.",
    imagem: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1200&q=85",
    alt: "Cavalo numa exploração rural",
    conteudo: [
      "A escolha de éguas e garanhões deve considerar a saúde geral, a conformação física, o temperamento, a idade e o histórico reprodutivo. A seleção também deve ter em conta a finalidade da criação e as características que se pretende preservar.",
      "Antes de iniciar um programa de reprodução, é recomendável uma avaliação veterinária dos animais. O exame pode identificar problemas de saúde ou condições que diminuam a probabilidade de uma reprodução bem-sucedida.",
      "Os animais selecionados devem apresentar condições corporais adequadas e receber alimentação, água e maneio compatíveis com as suas necessidades."
    ],
    cuidados: [
      "Solicitar avaliação veterinária dos reprodutores.",
      "Manter registos de identificação, idade e origem.",
      "Evitar cruzamentos entre animais com parentesco próximo.",
      "Não utilizar animais doentes ou sem avaliação adequada."
    ]
  },
  {
    numero: "02",
    titulo: "Ciclo reprodutivo da égua",
    resumo: "Compreender o cio e acompanhar o momento adequado para a reprodução.",
    imagem: "https://images.unsplash.com/photo-1534307679932-2e5b1a1f9f8b?auto=format&fit=crop&w=1200&q=85",
    alt: "Equino em ambiente natural",
    conteudo: [
      "A égua apresenta atividade reprodutiva influenciada pela estação do ano, pela duração da luz do dia, pela condição corporal e pelo estado de saúde. Em geral, os ciclos são mais frequentes durante os períodos de dias longos.",
      "Durante o cio, podem surgir alterações comportamentais, como maior recetividade ao garanhão, elevação da cauda e alterações na micção. Estes sinais variam entre animais e não substituem a avaliação profissional.",
      "A observação regular e, quando necessário, o acompanhamento veterinário ajudam a determinar o momento apropriado para a reprodução."
    ],
    cuidados: [
      "Observar e registar alterações comportamentais.",
      "Evitar decisões baseadas num único sinal de cio.",
      "Recorrer a um veterinário para confirmar o momento reprodutivo.",
      "Registar as datas relevantes do ciclo."
    ]
  },
  {
    numero: "03",
    titulo: "Cobrição e inseminação",
    resumo: "Planeamento seguro da reprodução natural ou assistida.",
    imagem: "https://images.unsplash.com/photo-1529551739587-e242c564f727?auto=format&fit=crop&w=1200&q=85",
    alt: "Cavalo numa área de maneio",
    conteudo: [
      "A reprodução pode ocorrer por cobrição natural ou através de inseminação artificial, conforme os recursos disponíveis, os objetivos da criação e a avaliação veterinária.",
      "Na cobrição natural, o maneio deve reduzir o risco de acidentes para os animais e para as pessoas. A compatibilidade dos reprodutores, as instalações e a supervisão são fatores importantes.",
      "A inseminação artificial requer conhecimentos técnicos, controlo sanitário e manipulação adequada do material reprodutivo. Deve ser realizada por profissionais habilitados, seguindo os procedimentos veterinários aplicáveis."
    ],
    cuidados: [
      "Planear a reprodução com acompanhamento técnico.",
      "Utilizar instalações seguras e adequadas.",
      "Verificar a saúde reprodutiva dos animais.",
      "Registar os cruzamentos e as datas de reprodução."
    ]
  },
  {
    numero: "04",
    titulo: "Gestação da égua",
    resumo: "Acompanhamento da gestação, alimentação e bem-estar materno.",
    imagem: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=85",
    alt: "Paisagem rural com vegetação",
    conteudo: [
      "A gestação da égua dura, em média, cerca de 11 meses, embora a duração possa variar. A confirmação e o acompanhamento devem ser realizados por um médico veterinário.",
      "Durante a gestação, a égua necessita de alimentação equilibrada, água limpa, movimento adequado e um ambiente com baixo risco de acidentes. As necessidades nutricionais mudam ao longo do período gestacional.",
      "A vigilância veterinária permite acompanhar a condição da égua e orientar a prevenção sanitária. Alterações importantes no apetite, no comportamento ou no estado físico devem ser comunicadas ao profissional responsável."
    ],
    cuidados: [
      "Organizar acompanhamento veterinário periódico.",
      "Ajustar a alimentação às necessidades da égua.",
      "Disponibilizar água limpa continuamente.",
      "Evitar mudanças bruscas de alimentação e maneio."
    ]
  },
  {
    numero: "05",
    titulo: "Parto e cuidados com o poldro",
    resumo: "Preparar um espaço seguro e acompanhar os primeiros momentos de vida.",
    imagem: "https://images.unsplash.com/photo-1489924034176-2e678c29d4c6?auto=format&fit=crop&w=1200&q=85",
    alt: "Equino em contexto rural",
    conteudo: [
      "A preparação para o parto deve incluir um espaço limpo, seco, tranquilo e suficientemente amplo para a égua se deitar e levantar com segurança. O local deve permitir observação sem perturbações desnecessárias.",
      "Após o nascimento, o poldro deve ser observado para verificar a respiração, a capacidade de se levantar e a procura da mama. O colostro é fundamental nas primeiras horas de vida porque fornece anticorpos importantes.",
      "Dificuldades no parto, hemorragias, fraqueza acentuada ou incapacidade de mamar exigem assistência veterinária urgente. Não se deve tentar resolver complicações obstétricas sem formação adequada."
    ],
    cuidados: [
      "Preparar antecipadamente o local do parto.",
      "Confirmar que o poldro consegue mamar cedo.",
      "Solicitar assistência urgente perante sinais de complicação.",
      "Organizar a avaliação inicial da égua e do poldro."
    ]
  },
  {
    numero: "06",
    titulo: "Registos e seleção dos poldros",
    resumo: "Acompanhar a origem, o desenvolvimento e a saúde dos animais jovens.",
    imagem: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=85",
    alt: "Ambiente natural de uma exploração rural",
    conteudo: [
      "Os registos reprodutivos permitem acompanhar os cruzamentos, as datas de cobrição, os partos e a descendência. Esta informação facilita a organização da exploração e a tomada de decisões futuras.",
      "A identificação do poldro deve ser associada à informação da mãe e, quando conhecida, do pai. O registo também pode incluir peso, observações de saúde e intervenções veterinárias.",
      "A seleção dos animais jovens deve considerar saúde, desenvolvimento, comportamento e objetivos de criação. Não é aconselhável tomar decisões apenas com base na aparência ou num único indicador."
    ],
    cuidados: [
      "Manter registos individuais atualizados.",
      "Identificar corretamente a mãe e o poldro.",
      "Acompanhar crescimento e desenvolvimento.",
      "Guardar o histórico sanitário e reprodutivo."
    ]
  }
];

export default function ReproducaoEquinosPage() {
  const [selecionado, setSelecionado] = useState<Tema | null>(null);

  return (
    <main className="min-h-screen bg-[#f0fdf4] text-[#17221b]">
      <section className="relative overflow-hidden bg-gradient-to-r from-[#14532d] via-[#166534] to-[#15803d] px-5 py-16 text-white md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-green-100">
              Pecuária · Equinos · Orientações
            </p>
            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              Reprodução de equinos
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-green-50 md:text-lg">
              Orientações sobre seleção de reprodutores, ciclo reprodutivo,
              gestação, parto e acompanhamento dos poldros, com foco no
              bem-estar animal e na organização da criação em Angola.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#temas"
                className="rounded-xl bg-white px-6 py-3 font-bold text-green-900 shadow-lg transition hover:-translate-y-1"
              >
                Explorar orientações
              </a>
              <Link
                href="/pecuaria/equinos"
                className="rounded-xl border border-white/50 px-6 py-3 font-bold text-white transition hover:bg-white/10"
              >
                Voltar aos equinos
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src={temas[0].imagem}
              alt={temas[0].alt}
              className="h-[280px] w-full rounded-[2rem] border border-white/20 object-cover shadow-2xl md:h-[390px]"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-black/55 p-4 text-white backdrop-blur-sm">
              <p className="font-bold">Reprodução responsável</p>
              <p className="mt-1 text-sm text-white/90">
                Planeamento, saúde e acompanhamento técnico.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Seleção", "Escolher reprodutores saudáveis."],
            ["Planeamento", "Registar ciclos e cruzamentos."],
            ["Acompanhamento", "Monitorizar a gestação com apoio técnico."],
            ["Bem-estar", "Proteger a égua e o poldro."],
          ].map(([titulo, descricao]) => (
            <article
              key={titulo}
              className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-lg font-extrabold text-green-900">{titulo}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{descricao}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="temas" className="mx-auto max-w-7xl px-5 pb-16 md:px-10">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-widest text-green-700">
            Guia prático
          </p>
          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
            Etapas da reprodução
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            Seleciona um tema para consultar a explicação e os cuidados
            recomendados.
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {temas.map((tema) => (
            <article
              key={tema.numero}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden bg-green-100">
                <img
                  src={tema.imagem}
                  alt={tema.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-xl bg-green-800 px-3 py-2 text-sm font-extrabold text-white shadow">
                  {tema.numero}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-extrabold text-green-950">
                  {tema.titulo}
                </h3>
                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
                  {tema.resumo}
                </p>
                <button
                  type="button"
                  onClick={() => setSelecionado(tema)}
                  className="mt-5 w-full rounded-xl bg-green-800 px-5 py-3 font-bold text-white transition hover:bg-green-900 focus:outline-none focus:ring-4 focus:ring-green-200"
                >
                  Consultar orientação
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-12 md:px-10">
        <div className="mx-auto max-w-5xl rounded-3xl border border-green-100 bg-green-50 p-7 md:p-10">
          <h2 className="text-2xl font-extrabold text-green-950">
            A reprodução exige acompanhamento técnico
          </h2>
          <p className="mt-4 leading-8 text-slate-700">
            A reprodução equina envolve riscos para a égua, o garanhão e o
            poldro. As decisões relativas a cobrição, inseminação, gestação,
            parto e cuidados neonatais devem ser adaptadas ao animal e contar
            com acompanhamento de um médico veterinário. Este conteúdo é
            informativo e não substitui uma avaliação clínica.
          </p>
        </div>
      </section>

      {selecionado && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm"
          onClick={() => setSelecionado(null)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-modal-reproducao"
            onClick={(event) => event.stopPropagation()}
            className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
          >
            <div className="relative h-56 sm:h-72">
              <img
                src={selecionado.imagem}
                alt={selecionado.alt}
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelecionado(null)}
                aria-label="Fechar janela"
                className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-bold text-green-950 shadow-lg hover:bg-green-100"
              >
                ×
              </button>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-6 pb-5 pt-12">
                <p className="text-sm font-bold uppercase tracking-widest text-green-200">
                  Orientação {selecionado.numero}
                </p>
                <h2
                  id="titulo-modal-reproducao"
                  className="mt-1 text-2xl font-extrabold text-white sm:text-3xl"
                >
                  {selecionado.titulo}
                </h2>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="mb-5 leading-7 text-slate-600">{selecionado.resumo}</p>
              <div className="space-y-4">
                {selecionado.conteudo.map((paragrafo, index) => (
                  <p key={index} className="text-justify leading-8 text-slate-700">
                    {paragrafo}
                  </p>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-green-100 bg-green-50 p-5 sm:p-6">
                <h3 className="text-lg font-extrabold text-green-950">
                  Cuidados essenciais
                </h3>
                <ul className="mt-4 space-y-3">
                  {selecionado.cuidados.map((cuidado, index) => (
                    <li key={index} className="flex gap-3 text-sm leading-6 text-slate-700">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green-700" />
                      <span>{cuidado}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => setSelecionado(null)}
                className="mt-7 w-full rounded-xl bg-green-800 px-5 py-3 font-bold text-white transition hover:bg-green-900"
              >
                Fechar orientação
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
