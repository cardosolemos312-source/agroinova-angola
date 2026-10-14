
"use client";

import Link from "next/link";
import { useState } from "react";

const imagemPrincipal =
  "https://commons.wikimedia.org/wiki/Special:FilePath/Donkey%20standing.jpg";

const temas = [
  {
    numero: "01",
    titulo: "Inspeção diária",
    resumo: "Observar os cascos e identificar alterações antes que se agravem.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Donkey%20in%20field.jpg",
    conteudo: [
      "Observe cada membro do animal enquanto está parado e durante a marcha. Procure diferenças entre os cascos, fissuras, pedras presas, sujidade acumulada, inchaço ou secreções.",
      "Levante cada membro apenas quando o asinino estiver habituado à manipulação e puder ser contido em segurança. Não se coloque diretamente atrás do animal nem force uma perna dolorosa.",
      "Registe alterações persistentes e compare-as com o estado habitual do animal. Uma mudança de comportamento ou de marcha pode ser o primeiro sinal de dor.",
    ],
  },
  {
    numero: "02",
    titulo: "Limpeza dos cascos",
    resumo: "Retirar lama, pedras e resíduos sem provocar ferimentos.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Donkey%20standing.jpg",
    conteudo: [
      "Utilize um limpador de cascos adequado e trabalhe com movimentos controlados. Retire cuidadosamente pedras, terra compactada e resíduos acumulados.",
      "Evite introduzir ferramentas com força nas zonas sensíveis da sola e da ranilha. Estas estruturas podem ser lesionadas por uma limpeza agressiva.",
      "Depois da limpeza, observe se existem odores anormais, humidade persistente, feridas ou zonas dolorosas. Se houver suspeita de infeção ou lesão profunda, solicite avaliação veterinária.",
    ],
  },
  {
    numero: "03",
    titulo: "Crescimento e desgaste",
    resumo: "Manter o equilíbrio entre crescimento natural, desgaste e correção profissional.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Donkey%20hooves.jpg",
    conteudo: [
      "Os cascos crescem continuamente. O desgaste natural varia com o terreno, a atividade, a alimentação e as condições em que o animal é mantido.",
      "Quando o desgaste não acompanha o crescimento, os cascos podem ficar excessivamente compridos, deformados ou desequilibrados. Isso pode alterar a distribuição do peso e dificultar a marcha.",
      "O corte deve ser realizado por um profissional competente, com ferramentas apropriadas e conhecimento dos asininos. Não corte profundamente a sola nem tente corrigir deformações graves sem avaliação especializada.",
    ],
  },
  {
    numero: "04",
    titulo: "Terreno e instalações",
    resumo: "Reduzir os riscos associados à lama, à humidade e às superfícies perigosas.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Donkeys%20in%20a%20field.jpg",
    conteudo: [
      "Mantenha a área de repouso limpa, com drenagem adequada e um espaço seco para o animal descansar. A acumulação de estrume e lama pode favorecer problemas nos cascos.",
      "Inspecione os caminhos e currais para identificar arames, pregos, pedras cortantes, buracos e superfícies escorregadias.",
      "Evite mudanças bruscas para terrenos muito duros ou pedregosos quando o animal não está adaptado. Proporcione movimento regular e condições de apoio adequadas.",
    ],
  },
  {
    numero: "05",
    titulo: "Alimentação e condição corporal",
    resumo: "Relacionar a saúde dos cascos com a nutrição e o estado geral do asinino.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Donkey%20grazing.jpg",
    conteudo: [
      "Uma alimentação equilibrada contribui para o crescimento normal do casco. Os asininos podem ganhar peso excessivo quando recebem demasiados alimentos energéticos ou pastagens muito ricas.",
      "A obesidade e algumas alterações metabólicas podem aumentar o risco de laminite, uma condição dolorosa que afeta as estruturas internas do casco.",
      "Evite administrar suplementos minerais ou biotina indiscriminadamente. A suplementação deve considerar a dieta completa e, quando necessário, a orientação de um médico veterinário ou nutricionista animal.",
    ],
  },
  {
    numero: "06",
    titulo: "Dor, claudicação e lesões",
    resumo: "Reconhecer quando uma alteração exige intervenção profissional.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Donkey%20portrait.jpg",
    conteudo: [
      "A claudicação pode manifestar-se por passos curtos, dificuldade em virar, apoio desigual dos membros, relutância em caminhar ou permanência prolongada deitado.",
      "Calor anormal, dor intensa, inchaço, feridas profundas, secreção ou mau cheiro persistente podem indicar um problema que exige avaliação.",
      "Se o asinino não conseguir apoiar um membro, apresentar dor intensa ou piorar rapidamente, procure assistência veterinária urgente. Não obrigue o animal a caminhar nem administre medicamentos humanos por iniciativa própria.",
    ],
  },
];

const sinaisAlerta = [
  "Claudicação ou recusa em caminhar",
  "Casco muito comprido ou deformado",
  "Fissuras profundas ou feridas",
  "Calor, inchaço ou dor acentuada",
  "Mau cheiro ou secreção persistente",
  "Dificuldade em apoiar um membro",
];

const verificacoes = [
  "Observar a marcha e a postura",
  "Inspecionar os quatro cascos",
  "Retirar pedras e sujidade com cuidado",
  "Verificar se o piso está seco e seguro",
  "Registar alterações e comunicar problemas",
];

export default function CascosAsininosPage() {
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
          src={imagemPrincipal}
          alt="Asinino em ambiente rural"
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
              Maneio • Saúde locomotora
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              Cascos dos Asininos
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-green-50 md:text-lg">
              Guia de inspeção, limpeza, manutenção e prevenção de lesões nos
              cascos de burros e jumentos, com recomendações práticas para
              criadores, tratadores e técnicos pecuários.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#cuidados"
                className="rounded-xl bg-green-400 px-6 py-3 font-bold text-green-950 transition hover:bg-green-300"
              >
                Consultar cuidados
              </a>
              <a
                href="#lista-diaria"
                className="rounded-xl border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white/10"
              >
                Lista de verificação
              </a>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              ["01", "Inspecionar"],
              ["02", "Limpar com cuidado"],
              ["03", "Procurar apoio técnico"],
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
            Conhecimento aplicado
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#173d2b]">
            Porque são importantes os cuidados com os cascos?
          </h2>
          <div className="mt-5 space-y-4 leading-8 text-slate-600">
            <p>
              Os cascos suportam o peso do asinino e participam na absorção
              das forças produzidas durante a marcha. A sua forma, integridade
              e equilíbrio influenciam o conforto e a capacidade de locomoção.
            </p>
            <p>
              A falta de inspeção e manutenção pode permitir o crescimento
              excessivo, a acumulação de materiais estranhos, o aparecimento
              de fissuras e o agravamento de lesões. O maneio deve ser
              adaptado a cada animal, ao terreno e às condições de alojamento.
            </p>
            <p>
              A observação regular não substitui a avaliação veterinária,
              mas permite reconhecer alterações precocemente e agir antes
              que problemas ligeiros se tornem mais graves.
            </p>
          </div>
        </div>

        <aside className="rounded-3xl border border-green-900/10 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-extrabold text-[#173d2b]">
            Princípios essenciais
          </h3>
          <ul className="mt-5 space-y-4">
            {[
              "Inspecionar os quatro cascos regularmente.",
              "Manter os espaços de repouso limpos e secos.",
              "Evitar cortes profundos ou improvisados.",
              "Procurar ajuda perante dor ou claudicação.",
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

      <section id="cuidados" className="mx-auto max-w-7xl px-6 pb-14">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
            Guia técnico
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#173d2b] md:text-4xl">
            Cuidados passo a passo
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            Selecione cada tema para consultar os procedimentos recomendados
            e os aspetos que exigem atenção durante o maneio dos asininos.
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
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-800">
              Reconhecimento precoce
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#173d2b]">
              Sinais de alerta nos cascos
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Não ignore alterações persistentes. A gravidade deve ser
              avaliada por um profissional, sobretudo quando existe dor
              intensa ou incapacidade de apoiar o membro.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {sinaisAlerta.map((sinal) => (
              <div
                key={sinal}
                className="rounded-2xl border border-amber-200 bg-white p-4 text-sm font-semibold leading-6 text-slate-700 shadow-sm"
              >
                <span className="mb-2 block text-xs font-black uppercase tracking-wider text-amber-700">
                  Atenção
                </span>
                {sinal}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="lista-diaria" className="mx-auto max-w-5xl px-6 py-14 md:py-16">
        <div className="rounded-3xl border border-green-900/10 bg-white p-6 shadow-sm md:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
            Ferramenta prática
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#173d2b]">
            Lista de verificação diária
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Assinale os procedimentos realizados durante a observação dos
            animais. A lista é um apoio ao maneio e não substitui um exame
            clínico.
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
            Recomendações para o criador
          </h2>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {[
              {
                titulo: "Prevenção",
                texto:
                  "Combine inspeção regular, limpeza cuidadosa e instalações seguras.",
              },
              {
                titulo: "Registo",
                texto:
                  "Anote alterações da marcha, tratamentos e datas de manutenção.",
              },
              {
                titulo: "Assistência técnica",
                texto:
                  "Recorra a profissionais competentes para corte, correções e problemas clínicos.",
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
              {" — recursos sobre saúde, bem-estar e maneio de asininos."}
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
              {" — conteúdos técnicos de medicina veterinária."}
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
              AGROINOVA ANGOLA — Conteúdo educativo. A avaliação e o tratamento
              de doenças ou lesões devem ser realizados por profissionais
              qualificados.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
