
"use client";

import { useState } from "react";
import Link from "next/link";

const imagens = {
  capa: "https://commons.wikimedia.org/wiki/Special:FilePath/Water_buffaloes_resting_together_in_a_mud_wallow%2C_Collombey-Muraz%2C_Valais.jpg",
  conforto:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Bubalus_bubalis_%28water_buffalo%29_looking_at_the_viewer%2C_the_feet_in_a_pond%2C_in_Laos.jpg",
  pastagem:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Bubalus_bubalis_-_Water_buffalo_06.jpg",
  maeECria:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Domestic_Water_Buffaloes_%28Bubalus_bubalis%29_cow_and_calf_in_the_rain_..._%2852071540457%29.jpg",
};

const temas = [
  {
    numero: "01",
    titulo: "Conforto térmico",
    resumo: "Reduzir o desconforto provocado pelo calor.",
    imagem: imagens.conforto,
    alt: "Búfalo-asiático com as patas dentro de uma zona de água",
    pontos: [
      "Disponibilizar sombra natural ou abrigo ventilado.",
      "Garantir água limpa para beber ao longo do dia.",
      "Sempre que possível, disponibilizar uma zona segura para arrefecimento.",
      "Observar respiração acelerada, prostração e redução do consumo de alimento.",
    ],
  },
  {
    numero: "02",
    titulo: "Descanso e espaço",
    resumo:
      "Permitir que os animais se deitem, levantem e movimentem sem dificuldade.",
    imagem: imagens.capa,
    alt: "Grupo de búfalos-asiáticos a descansar numa zona de lama",
    pontos: [
      "Manter o piso estável, sem objetos cortantes ou superfícies escorregadias.",
      "Evitar sobrelotação nos abrigos e parques.",
      "Proporcionar uma área de repouso seca ou com drenagem adequada.",
      "Observar se os animais conseguem deitar-se e levantar-se normalmente.",
    ],
  },
  {
    numero: "03",
    titulo: "Alimentação e pastagem",
    resumo:
      "Assegurar acesso adequado à alimentação e evitar competição excessiva.",
    imagem: imagens.pastagem,
    alt: "Búfalo-asiático a pastar num espaço aberto",
    pontos: [
      "Disponibilizar forragem apropriada à idade e condição dos animais.",
      "Manter os comedouros limpos e em condições de utilização.",
      "Evitar disputas excessivas por alimento e água.",
      "Acompanhar a condição corporal e alterações no apetite.",
    ],
  },
  {
    numero: "04",
    titulo: "Proteção das crias",
    resumo:
      "Acompanhar as crias e reduzir os riscos nos primeiros dias de vida.",
    imagem: imagens.maeECria,
    alt: "Búfala adulta acompanhada pela sua cria",
    pontos: [
      "Confirmar que a cria consegue levantar-se e mamar.",
      "Garantir um ambiente limpo, seco e protegido das condições meteorológicas adversas.",
      "Observar o comportamento da mãe e a aceitação da cria.",
      "Solicitar assistência veterinária perante fraqueza, diarreia ou recusa persistente em mamar.",
    ],
  },
];

const verificacoes = [
  "Existe sombra ou abrigo adequado?",
  "A água de bebida está limpa e acessível?",
  "Os animais apresentam respiração e comportamento habituais?",
  "O piso permite caminhar, deitar e levantar sem dificuldade?",
  "Há alimento suficiente e sem competição excessiva?",
  "Existem feridas, claudicação ou sinais de doença?",
  "As crias conseguem mamar e movimentar-se?",
  "Os animais são conduzidos sem pancadas ou violência?",
];

export default function BemEstarBubalinosPage() {
  const [temaAberto, setTemaAberto] = useState<number | null>(0);
  const [verificacoesFeitas, setVerificacoesFeitas] = useState<boolean[]>(
    verificacoes.map(() => false)
  );

  const totalFeito = verificacoesFeitas.filter(Boolean).length;
  const progresso = Math.round(
    (totalFeito / verificacoes.length) * 100
  );

  return (
    <main className="min-h-screen bg-[#f4f8f4] text-[#17221b]">
      {/* CAPA */}
      <section className="relative isolate overflow-hidden bg-[#123d29] text-white">
        <div className="absolute inset-0 -z-20">
          <img
            src={imagens.capa}
            alt="Grupo de búfalos-asiáticos a repousar numa zona de lama"
            className="h-full w-full object-cover object-center opacity-35"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#092719]/95 via-[#123d29]/85 to-[#123d29]/35" />

        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div>
            <Link
              href="/pecuaria/bubalinos"
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10"
            >
              <span aria-hidden="true">←</span>
              Voltar aos Bubalinos
            </Link>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-green-300">
              AGROINOVA ANGOLA · PECUÁRIA
            </p>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Bem-estar dos Bubalinos
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
              Práticas de maneio que promovem conforto, saúde, segurança e
              condições adequadas para o comportamento natural do búfalo-asiático
              (<i>Bubalus bubalis</i>).
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#principios"
                className="rounded-xl bg-green-400 px-6 py-3 font-bold text-[#103b26] shadow-lg transition hover:bg-green-300"
              >
                Explorar recomendações
              </a>

              <a
                href="#verificacao"
                className="rounded-xl border border-white/35 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Lista de verificação
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
            <p className="text-sm font-bold uppercase tracking-widest text-green-300">
              Objetivo do maneio
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              Um animal saudável deve ter condições para expressar
              comportamentos naturais.
            </h2>

            <p className="mt-4 leading-7 text-white/80">
              O bem-estar não depende apenas da ausência de doença. Inclui
              conforto térmico, acesso à água e alimentação, possibilidade de
              descanso, instalações seguras e tratamento cuidadoso.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                ["Conforto", "Sombra e repouso"],
                ["Saúde", "Observação diária"],
                ["Segurança", "Pisos e instalações"],
                ["Maneio", "Calma e respeito"],
              ].map(([titulo, descricao]) => (
                <div
                  key={titulo}
                  className="rounded-2xl border border-white/10 bg-black/10 p-4"
                >
                  <p className="font-bold text-white">{titulo}</p>
                  <p className="mt-1 text-sm text-white/70">
                    {descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRINCÍPIOS FUNDAMENTAIS */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
              <span aria-hidden="true">01</span>
            </div>

            <h2 className="text-lg font-bold">Observar diariamente</h2>

            <p className="mt-2 leading-7 text-slate-600">
              Identificar cedo alterações de apetite, locomoção, respiração e
              comportamento.
            </p>
          </article>

          <article className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
              <span aria-hidden="true">02</span>
            </div>

            <h2 className="text-lg font-bold">Prevenir o stress</h2>

            <p className="mt-2 leading-7 text-slate-600">
              Evitar calor excessivo, ruído intenso, perseguição e contenção
              desnecessariamente prolongada.
            </p>
          </article>

          <article className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
              <span aria-hidden="true">03</span>
            </div>

            <h2 className="text-lg font-bold">Agir com segurança</h2>

            <p className="mt-2 leading-7 text-slate-600">
              Planear o maneio, manter as instalações em bom estado e recorrer
              a apoio veterinário quando necessário.
            </p>
          </article>
        </div>
      </section>

      {/* RECOMENDAÇÕES */}
      <section
        id="principios"
        className="mx-auto max-w-7xl px-5 py-10 sm:px-8"
      >
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-green-700">
            Recomendações técnicas
          </p>

          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Quatro pilares do bem-estar
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Seleciona cada tema para consultar os cuidados práticos. As medidas
            devem ser adaptadas ao clima, às instalações, à idade e à condição
            dos animais.
          </p>
        </div>

        <div className="space-y-5">
          {temas.map((tema, index) => {
            const aberto = temaAberto === index;

            return (
              <article
                key={tema.numero}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <button
                  type="button"
                  aria-expanded={aberto}
                  aria-controls={`conteudo-tema-${tema.numero}`}
                  onClick={() => setTemaAberto(aberto ? null : index)}
                  className="grid w-full gap-0 text-left md:grid-cols-[280px_1fr]"
                >
                  <div className="h-52 overflow-hidden md:h-full md:min-h-56">
                    <img
                      src={tema.imagem}
                      alt={tema.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4 p-6 sm:p-8">
                    <div>
                      <p className="text-sm font-bold tracking-widest text-green-700">
                        TEMA {tema.numero}
                      </p>

                      <h3 className="mt-2 text-2xl font-bold">
                        {tema.titulo}
                      </h3>

                      <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                        {tema.resumo}
                      </p>
                    </div>

                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-50 text-xl font-bold text-green-800 transition ${
                        aberto ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </div>
                </button>

                {aberto && (
                  <div
                    id={`conteudo-tema-${tema.numero}`}
                    className="border-t border-slate-100 px-6 py-6 sm:px-8 sm:py-7"
                  >
                    <h4 className="font-bold text-[#14532d]">
                      Cuidados recomendados
                    </h4>

                    <ul className="mt-4 grid gap-3 md:grid-cols-2">
                      {tema.pontos.map((ponto) => (
                        <li
                          key={ponto}
                          className="flex gap-3 leading-7 text-slate-700"
                        >
                          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-800">
                            ✓
                          </span>

                          <span>{ponto}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* SINAIS DE ALERTA */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-8 overflow-hidden rounded-3xl bg-[#123d29] text-white lg:grid-cols-2">
          <div className="p-7 sm:p-10 lg:p-12">
            <p className="text-sm font-bold uppercase tracking-widest text-green-300">
              Maneio responsável
            </p>

            <h2 className="mt-3 text-3xl font-extrabold">
              Como reconhecer sinais de alerta?
            </h2>

            <p className="mt-4 leading-7 text-white/80">
              Alterações persistentes devem ser investigadas. Não se deve
              concluir que um animal está saudável apenas porque permanece de
              pé ou continua integrado no grupo.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Recusa de alimento ou água.",
                "Respiração muito acelerada ou dificuldade respiratória.",
                "Claudicação, feridas ou dificuldade em levantar-se.",
                "Isolamento persistente ou comportamento invulgar.",
                "Diarreia, secreções anormais ou sinais de dor.",
              ].map((sinal) => (
                <li
                  key={sinal}
                  className="flex gap-3 leading-7 text-white/90"
                >
                  <span className="font-bold text-green-300">•</span>
                  {sinal}
                </li>
              ))}
            </ul>
          </div>

          <div className="min-h-72 lg:min-h-full">
            <img
              src={imagens.maeECria}
              alt="Búfala adulta e cria em ambiente exterior"
              loading="lazy"
              className="h-full min-h-72 w-full object-cover"
            />
          </div>
        </div>

        <p className="mt-5 text-sm leading-6 text-slate-500">
          Perante sinais graves, agravamento ou persistência dos sintomas,
          reduzir o stress, garantir a segurança e contactar um médico
          veterinário. Esta página é informativa e não substitui avaliação
          clínica.
        </p>
      </section>

      {/* LISTA DE VERIFICAÇÃO */}
      <section
        id="verificacao"
        className="mx-auto max-w-5xl px-5 py-12 sm:px-8"
      >
        <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm sm:p-9">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-green-700">
                Ferramenta prática
              </p>

              <h2 className="mt-2 text-3xl font-extrabold">
                Verificação diária do bem-estar
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Marca cada ponto depois de o verificar na exploração.
              </p>
            </div>

            <p className="text-lg font-extrabold text-green-800">
              {totalFeito}/{verificacoes.length}
            </p>
          </div>

          <div
            className="mt-6 h-3 overflow-hidden rounded-full bg-slate-100"
            role="progressbar"
            aria-label="Progresso da verificação"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progresso}
          >
            <div
              className="h-full rounded-full bg-green-600 transition-all duration-300"
              style={{ width: `${progresso}%` }}
            />
          </div>

          <p className="mt-2 text-sm text-slate-500">
            {progresso}% dos pontos verificados nesta sessão.
          </p>

          <div className="mt-6 space-y-3">
            {verificacoes.map((item, index) => (
              <label
                key={item}
                className={`flex cursor-pointer items-start gap-4 rounded-xl border p-4 transition ${
                  verificacoesFeitas[index]
                    ? "border-green-200 bg-green-50"
                    : "border-slate-200 hover:border-green-200"
                }`}
              >
                <input
                  type="checkbox"
                  checked={verificacoesFeitas[index]}
                  onChange={(event) => {
                    setVerificacoesFeitas((atual) =>
                      atual.map((valor, i) =>
                        i === index ? event.target.checked : valor
                      )
                    );
                  }}
                  className="mt-1 h-5 w-5 accent-green-700"
                />

                <span
                  className={
                    verificacoesFeitas[index]
                      ? "font-medium text-green-900"
                      : "text-slate-700"
                  }
                >
                  {item}
                </span>
              </label>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() =>
                setVerificacoesFeitas(verificacoes.map(() => false))
              }
              className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Limpar verificações
            </button>

            <button
              type="button"
              onClick={() =>
                setVerificacoesFeitas(verificacoes.map(() => true))
              }
              className="rounded-xl bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800"
            >
              Marcar todos
            </button>
          </div>

          <p className="mt-4 text-xs leading-5 text-slate-500">
            A lista funciona nesta página durante a sessão. Não guarda
            automaticamente os registos numa base de dados.
          </p>
        </div>
      </section>

      {/* FONTES */}
      <section className="mx-auto max-w-7xl px-5 pb-14 sm:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-9">
          <h2 className="text-2xl font-extrabold">
            Fontes e leitura técnica
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            A informação deve ser complementada com acompanhamento veterinário
            e adaptação às condições reais da exploração.
          </p>

          <ul className="mt-5 space-y-4">
            <li>
              <a
                href="https://www.fao.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-green-800 underline decoration-green-300 underline-offset-4 hover:text-green-600"
              >
                FAO — Organização das Nações Unidas para a Alimentação e a Agricultura
              </a>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                Recursos técnicos sobre produção animal, sistemas de criação e
                adaptação dos animais às condições ambientais.
              </p>
            </li>

            <li>
              <a
                href="https://www.woah.org/en/what-we-do/animal-health-and-welfare/animal-welfare/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-green-800 underline decoration-green-300 underline-offset-4 hover:text-green-600"
              >
                WOAH — Bem-estar animal
              </a>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                Referência internacional para princípios de bem-estar e
                tratamento responsável dos animais.
              </p>
            </li>

            <li>
              <a
                href="https://agris.fao.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-green-800 underline decoration-green-300 underline-offset-4 hover:text-green-600"
              >
                FAO AGRIS — Literatura científica agropecuária
              </a>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                Base para consultar estudos sobre comportamento, stress térmico
                e condições de criação de búfalos.
              </p>
            </li>
          </ul>

          <p className="mt-6 border-t border-slate-100 pt-5 text-xs leading-6 text-slate-500">
            Créditos fotográficos: Wikimedia Commons. As fotografias ilustram
            búfalos-asiáticos em ambientes fora de Angola; não representam
            necessariamente explorações pecuárias angolanas.
          </p>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="border-t border-green-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-extrabold text-green-900">
              AGROINOVA ANGOLA
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Conhecimento, Tecnologia e Inovação ao Serviço do Campo Angolano.
            </p>
          </div>

          <Link
            href="/pecuaria/bubalinos"
            className="font-semibold text-green-800 hover:text-green-600"
          >
            Voltar à área dos Bubalinos →
          </Link>
        </div>
      </footer>
    </main>
  );
}
