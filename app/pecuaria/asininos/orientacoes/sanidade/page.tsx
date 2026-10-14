
"use client";

import Link from "next/link";
import { useState } from "react";

const temas = [
  {
    numero: "01",
    titulo: "Observação diária",
    resumo: "Reconhecer alterações no apetite, comportamento, postura e marcha.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Donkey%20portrait.jpg",
    conteudo: [
      "Observe o asinino diariamente, incluindo o apetite, o consumo de água, a quantidade e o aspeto das fezes, a urina, a postura e a disposição para caminhar. Conhecer o comportamento habitual facilita a identificação de alterações.",
      "Verifique se existem secreções nos olhos ou nas narinas, tosse, feridas, inchaços, claudicação ou alterações da pele e do pelo. Observe também se o animal se isola ou apresenta desconforto.",
      "Registe a data, os sinais observados e a evolução. Uma alteração persistente ou o agravamento rápido do estado geral exige avaliação por um médico veterinário.",
    ],
  },
  {
    numero: "02",
    titulo: "Higiene e biossegurança",
    resumo: "Reduzir a transmissão de agentes infecciosos entre animais e instalações.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Donkeys%20in%20a%20field.jpg",
    conteudo: [
      "Mantenha os abrigos ventilados, com áreas de repouso secas e sem acumulação excessiva de estrume. Limpe regularmente os comedouros e bebedouros, removendo restos de alimento e sujidade.",
      "Animais recém-adquiridos ou provenientes de explorações com problemas sanitários devem ser avaliados antes de serem integrados no grupo. O período e as medidas de isolamento devem seguir a orientação veterinária.",
      "Evite partilhar equipamentos contaminados entre animais sem limpeza adequada. Quando houver suspeita de doença transmissível, limite os contactos e procure aconselhamento veterinário.",
    ],
  },
  {
    numero: "03",
    titulo: "Vacinação",
    resumo: "Definir um plano de vacinação adequado aos riscos sanitários locais.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Donkey%20standing.jpg",
    conteudo: [
      "As vacinas necessárias dependem das doenças presentes na região, do histórico sanitário, da idade, da utilização do animal e das recomendações veterinárias aplicáveis.",
      "Solicite ao médico veterinário um plano individual ou para o grupo, com as vacinas indicadas, os intervalos de administração e os reforços necessários.",
      "Registe o nome da vacina, a data, o lote quando disponível e a próxima data prevista. Não administre vacinas sem confirmar a sua adequação, conservação e instruções de utilização.",
    ],
  },
  {
    numero: "04",
    titulo: "Parasitas internos e externos",
    resumo: "Controlar parasitas com base no risco, na observação e na orientação profissional.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Donkey%20grazing.jpg",
    conteudo: [
      "Os asininos podem ser afetados por parasitas gastrointestinais, piolhos, ácaros, carraças e outros organismos, dependendo do ambiente e das condições de maneio.",
      "A prevenção inclui higiene das instalações, gestão das pastagens, observação da pele e do pelo e acompanhamento da condição corporal. Conforme a situação, o veterinário poderá recomendar análises fecais e um plano de controlo parasitário.",
      "Evite desparasitar repetidamente sem orientação. A escolha do medicamento e da dose deve considerar o peso real, o princípio ativo, a segurança para asininos e o risco de resistência dos parasitas.",
    ],
  },
  {
    numero: "05",
    titulo: "Feridas e cuidados básicos",
    resumo: "Reconhecer lesões, proteger o animal e saber quando pedir assistência.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Donkey%20portrait.jpg",
    conteudo: [
      "Examine a pele, os membros e as zonas de contacto com equipamentos para identificar cortes, escoriações, inchaços e feridas causadas por arames, objetos ou contenção inadequada.",
      "Perante uma ferida superficial, mantenha o animal num local seguro e evite que a zona fique contaminada. Não aplique produtos irritantes, substâncias desconhecidas ou medicamentos destinados a outras espécies.",
      "Feridas profundas, hemorragias importantes, inchaço acentuado, secreção, dor intensa ou suspeita de corpo estranho exigem assistência veterinária. Não tente retirar objetos profundamente incrustados.",
    ],
  },
  {
    numero: "06",
    titulo: "Dentes, cascos e condição corporal",
    resumo: "Integrar a saúde oral, locomotora e nutricional na avaliação do animal.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Donkey%20standing.jpg",
    conteudo: [
      "Dificuldade em mastigar, alimento a cair da boca, perda de peso sem explicação ou mau hálito persistente podem justificar um exame dentário profissional.",
      "Os cascos devem ser observados regularmente quanto a crescimento excessivo, fissuras, feridas e alterações da marcha. A manutenção deve ser feita por pessoa competente, com avaliação veterinária quando houver dor ou lesão.",
      "Uma condição corporal demasiado baixa ou excessiva pode indicar problemas de alimentação ou saúde. Registe a evolução e procure orientação para ajustar a dieta e investigar alterações persistentes.",
    ],
  },
];

const sinaisUrgentes = [
  "Dificuldade respiratória",
  "Incapacidade de se levantar",
  "Dor abdominal intensa ou sinais de cólica",
  "Hemorragia abundante",
  "Convulsões ou perda de consciência",
  "Recusa persistente de alimento acompanhada de prostração",
];

const verificacoes = [
  "Observar apetite e consumo de água",
  "Verificar fezes e comportamento",
  "Observar olhos, narinas, pele e pelo",
  "Verificar marcha e estado dos cascos",
  "Confirmar limpeza de bebedouros e comedouros",
  "Registar sinais anormais e comunicar ao responsável",
];

export default function SanidadeAsininosPage() {
  const [temaAberto, setTemaAberto] = useState("01");
  const [verificados, setVerificados] = useState<string[]>([]);

  function alternarVerificacao(item: string) {
    setVerificados((anteriores) =>
      anteriores.includes(item)
        ? anteriores.filter((valor) => valor !== item)
        : [...anteriores, item]
    );
  }

  return (
    <main className="min-h-screen bg-[#f4f8f3] text-slate-800">
      <section className="relative isolate overflow-hidden bg-[#123d29] text-white">
        <img
          src="https://commons.wikimedia.org/wiki/Special:FilePath/Donkeys%20in%20a%20field.jpg"
          alt="Asininos num ambiente rural"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#092719]/95 via-[#123d29]/80 to-[#123d29]/35" />

        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          <Link
            href="/pecuaria/asininos"
            className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            ← Página principal dos asininos
          </Link>

          <div className="mt-12 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-green-300">
              Produção animal • Saúde e bem-estar
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              Sanidade dos Asininos
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-green-50 md:text-lg">
              Orientações para a observação diária, higiene, biossegurança,
              prevenção de doenças e reconhecimento de sinais que exigem
              assistência veterinária na criação de burros e jumentos.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#orientacoes"
                className="rounded-xl bg-green-400 px-6 py-3 font-bold text-green-950 transition hover:bg-green-300"
              >
                Explorar orientações
              </a>
              <a
                href="#verificacao"
                className="rounded-xl border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white/10"
              >
                Lista sanitária
              </a>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              ["01", "Observar"],
              ["02", "Prevenir"],
              ["03", "Procurar assistência"],
            ].map(([numero, titulo]) => (
              <div
                key={numero}
                className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm"
              >
                <span className="text-sm font-bold text-green-300">
                  {numero}
                </span>
                <p className="mt-2 font-bold">{titulo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-[1.2fr_0.8fr] md:py-16">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
            Maneio preventivo
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#173d2b]">
            A saúde começa na observação diária
          </h2>
          <div className="mt-5 space-y-4 text-justify leading-8 text-slate-600">
            <p>
              A sanidade dos asininos depende da combinação de alimentação
              adequada, água limpa, instalações seguras, higiene, controlo
              sanitário e acompanhamento profissional. A observação frequente
              ajuda a reconhecer alterações antes que se agravem.
            </p>
            <p>
              Como os asininos podem manifestar a dor de forma discreta,
              alterações subtis no comportamento, na postura, no apetite ou
              na interação com outros animais não devem ser ignoradas.
            </p>
            <p>
              Um programa sanitário eficaz deve considerar as condições
              locais de Angola, a circulação de doenças, o sistema de criação
              e os recursos disponíveis. Não existe um único calendário de
              vacinação ou tratamento adequado a todos os animais.
            </p>
          </div>
        </div>

        <aside className="rounded-3xl border border-green-900/10 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-extrabold text-[#173d2b]">
            Quatro pilares sanitários
          </h3>
          <ul className="mt-5 space-y-4">
            {[
              "Observação e registo dos sinais clínicos.",
              "Higiene e prevenção da transmissão de doenças.",
              "Plano sanitário orientado por médico veterinário.",
              "Intervenção rápida perante sinais de gravidade.",
            ].map((item) => (
              <li key={item} className="flex gap-3 leading-7 text-slate-600">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-black text-green-800">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section id="orientacoes" className="mx-auto max-w-7xl px-6 pb-14">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
            Guia técnico
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#173d2b] md:text-4xl">
            Cuidados sanitários essenciais
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            Selecione cada tema para consultar as recomendações de prevenção,
            observação e encaminhamento de problemas de saúde.
          </p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {temas.map((tema) => (
              <button
                key={tema.numero}
                type="button"
                onClick={() => setTemaAberto(tema.numero)}
                className={`w-full rounded-2xl border p-5 text-left transition ${
                  temaAberto === tema.numero
                    ? "border-green-700 bg-[#173d2b] text-white shadow-lg"
                    : "border-green-900/10 bg-white text-slate-800 hover:border-green-500 hover:shadow-sm"
                }`}
              >
                <span
                  className={`text-xs font-black ${
                    temaAberto === tema.numero
                      ? "text-green-300"
                      : "text-green-700"
                  }`}
                >
                  TEMA {tema.numero}
                </span>
                <span className="mt-1 block text-lg font-extrabold">
                  {tema.titulo}
                </span>
                <span
                  className={`mt-2 block text-sm leading-6 ${
                    temaAberto === tema.numero
                      ? "text-green-50/90"
                      : "text-slate-500"
                  }`}
                >
                  {tema.resumo}
                </span>
              </button>
            ))}
          </div>

          {temas
            .filter((tema) => tema.numero === temaAberto)
            .map((tema) => (
              <article
                key={tema.numero}
                className="overflow-hidden rounded-3xl border border-green-900/10 bg-white shadow-sm"
              >
                <div className="relative h-64 bg-green-100">
                  <img
                    src={tema.imagem}
                    alt={`Asininos: ${tema.titulo}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-green-900 shadow">
                    Orientação {tema.numero}
                  </span>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-black text-[#173d2b]">
                    {tema.titulo}
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    {tema.resumo}
                  </p>
                  <div className="mt-6 space-y-4">
                    {tema.conteudo.map((paragrafo, indice) => (
                      <p
                        key={indice}
                        className="text-justify leading-8 text-slate-600"
                      >
                        {paragrafo}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
        </div>
      </section>

      <section className="bg-[#e7f1e6] py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-800">
              Resposta rápida
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#173d2b]">
              Sinais que podem indicar uma emergência
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Perante sinais graves, contacte imediatamente um médico
              veterinário. Mantenha o animal num local seguro e tranquilo,
              sem o forçar a caminhar ou a ingerir alimentos ou medicamentos.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {sinaisUrgentes.map((sinal) => (
              <div
                key={sinal}
                className="rounded-2xl border border-red-200 bg-white p-4 text-sm font-semibold leading-6 text-slate-700 shadow-sm"
              >
                <span className="mb-2 block text-xs font-black uppercase tracking-wider text-red-700">
                  Sinal de alerta
                </span>
                {sinal}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="verificacao" className="mx-auto max-w-5xl px-6 py-14 md:py-16">
        <div className="rounded-3xl border border-green-900/10 bg-white p-6 shadow-sm md:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
            Ferramenta prática
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#173d2b]">
            Lista de verificação sanitária
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Utilize esta lista como apoio à observação diária. Assinalar
            todos os pontos não garante que o animal esteja saudável; sinais
            anormais devem ser avaliados adequadamente.
          </p>

          <div className="mt-6 h-2 overflow-hidden rounded-full bg-green-100">
            <div
              className="h-full rounded-full bg-green-600 transition-all"
              style={{
                width: `${(verificados.length / verificacoes.length) * 100}%`,
              }}
            />
          </div>

          <p className="mt-2 text-sm font-semibold text-green-800">
            {verificados.length} de {verificacoes.length} verificações concluídas
          </p>

          <div className="mt-5 space-y-3">
            {verificacoes.map((item) => (
              <label
                key={item}
                className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-4 transition hover:border-green-400"
              >
                <input
                  type="checkbox"
                  checked={verificados.includes(item)}
                  onChange={() => alternarVerificacao(item)}
                  className="mt-1 h-5 w-5 accent-green-700"
                />
                <span
                  className={`leading-7 ${
                    verificados.includes(item)
                      ? "font-medium text-green-800"
                      : "text-slate-700"
                  }`}
                >
                  {item}
                </span>
              </label>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setVerificados([])}
            className="mt-5 rounded-xl border border-green-800 px-5 py-3 font-bold text-green-800 transition hover:bg-green-50"
          >
            Repor lista
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <div className="rounded-3xl bg-[#173d2b] p-7 text-white md:p-10">
          <h2 className="text-2xl font-black md:text-3xl">
            Organização do programa sanitário
          </h2>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {[
              {
                titulo: "Registar",
                texto:
                  "Manter registos de observações, vacinas, tratamentos e consultas.",
              },
              {
                titulo: "Prevenir",
                texto:
                  "Adaptar a higiene, a alimentação e o maneio às condições da exploração.",
              },
              {
                titulo: "Acompanhar",
                texto:
                  "Trabalhar com profissionais veterinários para definir medidas adequadas.",
              },
            ].map((item) => (
              <div
                key={item.titulo}
                className="rounded-2xl border border-white/10 bg-white/10 p-5"
              >
                <h3 className="font-extrabold text-green-300">
                  {item.titulo}
                </h3>
                <p className="mt-3 text-sm leading-7 text-green-50/90">
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-green-900/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <h2 className="text-xl font-black text-[#173d2b]">
            Fontes para aprofundamento
          </h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
            <li>
              <a
                href="https://www.thedonkeysanctuary.org.uk/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-green-800 underline underline-offset-4"
              >
                The Donkey Sanctuary
              </a>
              {" — recursos sobre saúde, bem-estar e cuidados com asininos."}
            </li>
            <li>
              <a
                href="https://www.ivis.org/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-green-800 underline underline-offset-4"
              >
                International Veterinary Information Service (IVIS)
              </a>
              {" — conteúdos de medicina e saúde animal."}
            </li>
          </ul>

          <div className="mt-8 border-t border-slate-200 pt-6">
            <Link
              href="/pecuaria/asininos"
              className="inline-flex items-center gap-2 rounded-xl bg-green-800 px-5 py-3 font-bold text-white transition hover:bg-green-700"
            >
              ← Voltar à página dos asininos
            </Link>
            <p className="mt-5 text-xs leading-6 text-slate-500">
              AGROINOVA ANGOLA — Conteúdo educativo. A vacinação, o
              diagnóstico e os tratamentos devem ser orientados por um
              médico veterinário.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
