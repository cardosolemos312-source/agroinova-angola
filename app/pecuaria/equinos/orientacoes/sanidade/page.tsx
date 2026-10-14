
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
    titulo: "Observação diária",
    resumo: "Reconhecer alterações no comportamento, apetite e estado geral.",
    imagem:
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1100&q=85",
    alt: "Cavalo observado durante os cuidados diários",
    conteudo: [
      "A observação diária permite identificar precocemente mudanças no estado geral dos equinos. O responsável deve conhecer o comportamento habitual de cada animal para reconhecer alterações relevantes.",
      "Observe o apetite, o consumo de água, a postura, a locomoção, a respiração, as fezes e a disposição para o exercício. Verifique também a presença de feridas, secreções ou inchaços.",
      "Uma alteração isolada não confirma uma doença. Registar o que foi observado, quando começou e como evoluiu ajuda o médico veterinário a avaliar a situação.",
    ],
    cuidados: [
      "Observar cada animal diariamente.",
      "Registar alterações de apetite e comportamento.",
      "Verificar a presença de feridas e secreções.",
      "Contactar o veterinário perante alterações persistentes.",
    ],
  },
  {
    numero: "02",
    titulo: "Vacinação",
    resumo: "Organizar a prevenção de doenças com orientação veterinária.",
    imagem:
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1100&q=85",
    alt: "Animal de criação num ambiente rural",
    conteudo: [
      "A vacinação deve ser planeada considerando as doenças presentes ou com risco de ocorrência na região, a idade, o historial clínico, a utilização do animal e as normas veterinárias aplicáveis.",
      "Não existe um calendário universal adequado a todos os cavalos. O médico veterinário deve estabelecer as vacinas necessárias e os respectivos intervalos, de acordo com o contexto epidemiológico e as recomendações oficiais.",
      "Conserve os produtos conforme as instruções do fabricante e registe a data, o produto utilizado, o lote e a próxima data prevista, quando aplicável.",
    ],
    cuidados: [
      "Solicitar um plano de vacinação individual.",
      "Manter os registos sanitários actualizados.",
      "Respeitar as condições de conservação das vacinas.",
      "Não vacinar animais doentes sem avaliação veterinária.",
    ],
  },
  {
    numero: "03",
    titulo: "Desparasitação",
    resumo: "Controlar parasitas de forma orientada e responsável.",
    imagem:
      "https://images.unsplash.com/photo-1534307673619-6b7b2e4e4f7a?auto=format&fit=crop&w=1100&q=85",
    alt: "Cavalo num espaço de criação",
    conteudo: [
      "Os parasitas internos podem afectar a saúde e o desempenho dos equinos. O controlo deve considerar a idade, as condições de maneio, o histórico de tratamentos e o risco de exposição.",
      "A utilização repetida de antiparasitários sem orientação pode favorecer a resistência dos parasitas. Quando disponível e indicado, a análise de fezes ajuda o veterinário a definir uma estratégia mais adequada.",
      "A limpeza das instalações, a gestão do estrume e o maneio das pastagens complementam as medidas de controlo sanitário.",
    ],
    cuidados: [
      "Pedir orientação veterinária para escolher o produto.",
      "Respeitar a dose indicada para o animal.",
      "Evitar repetir tratamentos sem um plano definido.",
      "Manter as instalações e pastagens bem geridas.",
    ],
  },
  {
    numero: "04",
    titulo: "Higiene e biossegurança",
    resumo: "Reduzir a transmissão de agentes infecciosos na exploração.",
    imagem:
      "https://images.unsplash.com/photo-1489924034176-2e678c29d4c6?auto=format&fit=crop&w=1100&q=85",
    alt: "Cavalos num ambiente exterior",
    conteudo: [
      "A higiene das instalações e dos equipamentos é uma parte essencial da prevenção sanitária. Cama limpa, água de qualidade, ventilação adequada e remoção regular do estrume contribuem para um ambiente mais seguro.",
      "Evite partilhar escovas, arreios e outros equipamentos entre animais sem limpeza adequada, sobretudo quando existe suspeita de doença contagiosa.",
      "Os animais recém-chegados devem ser avaliados e geridos segundo um plano de introdução definido com orientação veterinária. Se houver suspeita de doença transmissível, limite os contactos e procure assistência.",
    ],
    cuidados: [
      "Limpar regularmente boxes, bebedouros e comedouros.",
      "Disponibilizar água limpa.",
      "Higienizar equipamentos partilhados.",
      "Planear a introdução de novos animais.",
    ],
  },
  {
    numero: "05",
    titulo: "Feridas e cuidados básicos",
    resumo: "Identificar lesões e evitar intervenções que agravem o problema.",
    imagem:
      "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?auto=format&fit=crop&w=1100&q=85",
    alt: "Cavalo durante os cuidados de maneio",
    conteudo: [
      "As feridas podem resultar de quedas, contacto com objectos, equipamentos inadequados ou conflitos entre animais. A gravidade depende da localização, profundidade, extensão e possível contaminação.",
      "Perante uma lesão, mantenha o cavalo num local seguro e evite manipulações desnecessárias. Feridas profundas, hemorragias importantes, lesões perto de articulações ou olhos e objectos cravados exigem assistência veterinária urgente.",
      "Não aplique produtos químicos, medicamentos humanos ou tratamentos caseiros sem indicação profissional. O veterinário avaliará a limpeza, o tratamento e a necessidade de verificar a vacinação antitetânica.",
    ],
    cuidados: [
      "Avaliar a segurança do animal e do cuidador.",
      "Solicitar ajuda veterinária perante lesões graves.",
      "Não retirar objectos profundamente cravados.",
      "Registar a localização e a evolução da lesão.",
    ],
  },
  {
    numero: "06",
    titulo: "Sinais de emergência",
    resumo: "Reconhecer situações em que o atendimento não deve ser adiado.",
    imagem:
      "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?auto=format&fit=crop&w=1100&q=85",
    alt: "Cavalo acompanhado durante o maneio",
    conteudo: [
      "Algumas alterações exigem contacto veterinário imediato, incluindo dor abdominal intensa ou repetida, dificuldade respiratória, hemorragia significativa, incapacidade de se levantar, convulsões ou deterioração rápida do estado geral.",
      "A suspeita de doença contagiosa também requer precauções. Evite deslocar o animal ou partilhar equipamentos até receber instruções do médico veterinário ou dos serviços competentes.",
      "Ao pedir ajuda, informe a identificação do animal, os sinais observados, o momento de início, eventuais acidentes e os tratamentos já administrados. Não force a alimentação nem administre medicamentos sem orientação.",
    ],
    cuidados: [
      "Guardar os contactos do veterinário num local acessível.",
      "Descrever os sintomas com clareza.",
      "Evitar tratamentos improvisados.",
      "Cumprir as instruções de emergência recebidas.",
    ],
  },
];

export default function SanidadeEquinosPage() {
  const [temaSelecionado, setTemaSelecionado] = useState<Tema | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 via-white to-slate-50 text-slate-800">
      <section className="relative isolate overflow-hidden bg-green-950">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=2000&q=90"
            alt=""
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-950 via-green-950/85 to-green-900/40" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-green-300">
              AGROINOVA ANGOLA · PECUÁRIA
            </p>

            <h1 className="max-w-2xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Sanidade e prevenção de doenças nos equinos
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-green-50 sm:text-lg">
              Informação prática sobre vigilância sanitária, vacinação,
              desparasitação, higiene, feridas e reconhecimento de emergências.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#orientacoes"
                className="rounded-xl bg-green-400 px-6 py-3 font-bold text-green-950 shadow-lg transition hover:-translate-y-1 hover:bg-green-300"
              >
                Consultar orientações
              </a>

              <Link
                href="/pecuaria/equinos"
                className="rounded-xl border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white/10"
              >
                Voltar aos equinos
              </Link>
            </div>

            <div className="mt-9 grid max-w-lg grid-cols-3 gap-3">
              {[
                ["01", "Vigilância"],
                ["02", "Prevenção"],
                ["03", "Resposta rápida"],
              ].map(([numero, texto]) => (
                <div
                  key={numero}
                  className="rounded-xl border border-white/15 bg-white/10 p-3 backdrop-blur-sm"
                >
                  <p className="text-xl font-black text-green-300">{numero}</p>
                  <p className="mt-1 text-xs font-semibold text-white sm:text-sm">
                    {texto}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-green-400/20 blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1534307673619-6b7b2e4e4f7a?auto=format&fit=crop&w=1200&q=90"
              alt="Cavalo num ambiente de criação e acompanhamento"
              className="relative h-[300px] w-full rounded-3xl border border-white/20 object-cover shadow-2xl sm:h-[410px]"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-green-950/80 p-4 text-white backdrop-blur-md">
              <p className="font-bold">Prevenir é proteger o efectivo</p>
              <p className="mt-1 text-sm leading-6 text-green-100">
                A vigilância diária e o acompanhamento veterinário são
                fundamentais para a saúde dos equinos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              titulo: "Vigilância diária",
              texto:
                "Conhecer o comportamento habitual ajuda a detectar alterações.",
              numero: "01",
            },
            {
              titulo: "Prevenção sanitária",
              texto:
                "Planear vacinação, controlo de parasitas e higiene da exploração.",
              numero: "02",
            },
            {
              titulo: "Resposta atempada",
              texto:
                "Reconhecer sinais de alerta e procurar assistência profissional.",
              numero: "03",
            },
          ].map((item) => (
            <article
              key={item.numero}
              className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-lg font-black text-green-800">
                {item.numero}
              </span>
              <h2 className="mt-4 text-xl font-extrabold text-green-950">
                {item.titulo}
              </h2>
              <p className="mt-2 leading-7 text-slate-600">{item.texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="orientacoes" className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Manual prático
            </p>
            <h2 className="mt-2 text-3xl font-black text-green-950 sm:text-4xl">
              Orientações de sanidade
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Seleccione um tema para consultar as recomendações, os cuidados
              preventivos e os sinais de alerta.
            </p>
          </div>

          <span className="w-fit rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-800">
            {temas.length} temas disponíveis
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {temas.map((tema) => (
            <article
              key={tema.numero}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden bg-green-100">
                <img
                  src={tema.imagem}
                  alt={tema.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-lg bg-green-700 px-3 py-1.5 text-sm font-black text-white shadow">
                  {tema.numero}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-extrabold text-green-950">
                  {tema.titulo}
                </h3>
                <p className="mt-3 min-h-[72px] leading-6 text-slate-600">
                  {tema.resumo}
                </p>
                <button
                  type="button"
                  onClick={() => setTemaSelecionado(tema)}
                  className="mt-5 w-full rounded-xl bg-green-700 px-4 py-3 font-bold text-white transition hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-200"
                >
                  Consultar orientação
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-green-900 px-5 py-12 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-black sm:text-3xl">
              Saúde animal com acompanhamento profissional
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-green-100">
              As recomendações devem ser adaptadas à realidade de cada
              exploração e confirmadas com um médico veterinário.
            </p>
          </div>
          <Link
            href="/pecuaria/equinos/orientacoes/trabalho"
            className="shrink-0 rounded-xl bg-white px-6 py-3 text-center font-bold text-green-900 transition hover:bg-green-100"
          >
            Próximo tema: Trabalho
          </Link>
        </div>
      </section>

      {temaSelecionado && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm"
          onClick={() => setTemaSelecionado(null)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-modal-sanidade"
            onClick={(event) => event.stopPropagation()}
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
          >
            <div className="relative h-56 sm:h-72">
              <img
                src={temaSelecionado.imagem}
                alt={temaSelecionado.alt}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 via-green-950/20 to-transparent" />
              <button
                type="button"
                onClick={() => setTemaSelecionado(null)}
                aria-label="Fechar janela"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl font-bold text-green-950 shadow-lg transition hover:bg-green-100"
              >
                ×
              </button>
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-sm font-bold uppercase tracking-widest text-green-300">
                  Orientação {temaSelecionado.numero}
                </p>
                <h2
                  id="titulo-modal-sanidade"
                  className="mt-2 text-2xl font-black text-white sm:text-3xl"
                >
                  {temaSelecionado.titulo}
                </h2>
              </div>
            </div>

            <div className="space-y-7 p-6 sm:p-8">
              <div>
                <h3 className="mb-3 text-lg font-extrabold text-green-900">
                  Orientações técnicas
                </h3>
                <div className="space-y-4">
                  {temaSelecionado.conteudo.map((paragrafo, indice) => (
                    <p
                      key={indice}
                      className="text-justify leading-8 text-slate-700"
                    >
                      {paragrafo}
                    </p>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-green-100 bg-green-50 p-5">
                <h3 className="mb-4 text-lg font-extrabold text-green-950">
                  Lista de cuidados recomendados
                </h3>
                <ul className="space-y-3">
                  {temaSelecionado.cuidados.map((cuidado, indice) => (
                    <li key={indice} className="flex gap-3 leading-7 text-slate-700">
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-green-600" />
                      <span>{cuidado}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4">
                <p className="font-bold text-amber-950">Nota de segurança</p>
                <p className="mt-1 text-sm leading-6 text-amber-900">
                  Em caso de emergência, contacte um médico veterinário. Estas
                  informações são educativas e não substituem diagnóstico ou
                  tratamento profissional.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setTemaSelecionado(null)}
                className="w-full rounded-xl bg-green-800 px-5 py-3 font-bold text-white transition hover:bg-green-900"
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
