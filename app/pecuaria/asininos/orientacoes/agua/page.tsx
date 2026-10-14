
"use client";

import Link from "next/link";
import { useState } from "react";

const imagemAgua =
  "https://commons.wikimedia.org/wiki/Special:FilePath/Donkey%20loaded%20with%20bottles%20of%20water.jpg";

const imagemSeca =
  "https://commons.wikimedia.org/wiki/Special:FilePath/Kenya%2C%20Kitui%20County.%20On%20a%20dry%20river%20bed%2C%20the%20donkey%20awaits%20to%20carry%20water%20jerricans.jpg";

const temas = [
  {
    numero: "01",
    titulo: "Disponibilidade de água",
    resumo:
      "Os asininos devem ter acesso regular a água potável, sem depender exclusivamente de fontes naturais ou de deslocações longas.",
    conteudo: [
      "Disponibilize água limpa em recipientes acessíveis e estáveis, adequados ao tamanho dos animais.",
      "Verifique regularmente se existe água suficiente para todos os asininos, sobretudo quando estão alojados em grupo.",
      "Reforce a vigilância nos dias quentes, durante o trabalho, na lactação e quando os animais consomem forragens secas.",
      "Não presuma que um asinino precisa de pouca água apenas porque tolera melhor alguns períodos de escassez."
    ],
  },
  {
    numero: "02",
    titulo: "Qualidade da água",
    resumo:
      "A água deve estar limpa, sem cheiro anormal, resíduos, fezes, algas excessivas ou sinais de contaminação.",
    conteudo: [
      "Observe a cor, o cheiro e a presença de partículas antes de disponibilizar a água.",
      "Proteja os pontos de abastecimento contra a entrada de estrume, terra, combustível, pesticidas e outros contaminantes.",
      "Se houver suspeita de contaminação, suspenda a utilização dessa fonte e disponibilize água segura.",
      "Quando a origem ou a qualidade forem duvidosas, procure orientação sobre análise da água."
    ],
  },
  {
    numero: "03",
    titulo: "Bebedouros e recipientes",
    resumo:
      "A higiene dos recipientes reduz a acumulação de matéria orgânica e ajuda a manter a água em boas condições.",
    conteudo: [
      "Retire folhas, restos de alimento, lama e outros materiais que caiam no bebedouro.",
      "Esvazie e lave os recipientes com a frequência necessária para evitar a formação de depósitos.",
      "Utilize métodos de limpeza apropriados e enxague bem quando forem usados produtos de limpeza.",
      "Coloque os recipientes numa superfície firme, de fácil acesso e que não provoque ferimentos."
    ],
  },
  {
    numero: "04",
    titulo: "Calor e época seca",
    resumo:
      "A gestão da água torna-se especialmente importante quando as temperaturas aumentam e as fontes diminuem.",
    conteudo: [
      "Planeie antecipadamente o abastecimento para períodos de seca e interrupções no fornecimento.",
      "Verifique os bebedouros mais vezes durante o calor e evite que fiquem vazios durante longos períodos.",
      "Disponibilize sombra e períodos de descanso, especialmente aos animais que realizam trabalho físico.",
      "Não obrigue os animais a percorrer distâncias excessivas para chegar à água."
    ],
  },
  {
    numero: "05",
    titulo: "Alimentação e hidratação",
    resumo:
      "O teor de humidade dos alimentos influencia a ingestão de água, mas não substitui a necessidade de água potável.",
    conteudo: [
      "Os animais alimentados sobretudo com feno, palha e outras forragens secas podem precisar de maior atenção ao abastecimento.",
      "A quantidade ingerida varia com o peso, a temperatura, a atividade, a alimentação e o estado fisiológico.",
      "Não limite a água com o objetivo de controlar a alimentação ou reduzir a produção de urina.",
      "Observe também o apetite, a produção de fezes e o comportamento habitual."
    ],
  },
  {
    numero: "06",
    titulo: "Crias, gestação e lactação",
    resumo:
      "Os animais jovens e as fêmeas em fases exigentes da reprodução precisam de vigilância adaptada à sua condição.",
    conteudo: [
      "Garanta que as crias conseguem alcançar água de forma segura, sem risco de queda ou afogamento.",
      "Acompanhe a ingestão de água das fêmeas gestantes e lactantes, considerando as necessidades individuais.",
      "Observe diariamente os animais que estejam doentes, debilitados ou em recuperação.",
      "Se uma cria deixar de mamar ou um animal recusar água, procure avaliação veterinária."
    ],
  },
  {
    numero: "07",
    titulo: "Transporte e trabalho",
    resumo:
      "O esforço físico e as deslocações podem aumentar a necessidade de vigilância da hidratação.",
    conteudo: [
      "Planeie pausas e acesso a água durante atividades prolongadas, de acordo com o esforço e as condições ambientais.",
      "Evite manter animais exaustos sob calor intenso sem descanso e acesso a água.",
      "Depois de um esforço significativo, observe o comportamento e o estado geral do animal.",
      "Em caso de fraqueza intensa, descoordenação ou colapso, solicite assistência veterinária urgente."
    ],
  },
  {
    numero: "08",
    titulo: "Observação e sinais de alerta",
    resumo:
      "Alterações no comportamento ou no consumo de água podem indicar um problema que merece atenção.",
    conteudo: [
      "Observe se o animal bebe menos do que é habitual ou demonstra dificuldade em alcançar o recipiente.",
      "Esteja atento a fraqueza, apatia, olhos encovados, gengivas secas ou pegajosas e redução da urina.",
      "Estes sinais, isoladamente, não confirmam desidratação; devem ser avaliados no contexto clínico.",
      "Se houver sinais importantes, agravamento rápido ou incapacidade de beber, contacte um veterinário sem demora."
    ],
  },
];

const tarefas = [
  "Confirmar que existe água disponível para todos os animais.",
  "Verificar a limpeza e o estado dos bebedouros.",
  "Observar se algum asinino está a beber menos do que o habitual.",
  "Confirmar que os recipientes estão estáveis e acessíveis.",
  "Reforçar o abastecimento em períodos de calor ou trabalho.",
  "Registar problemas observados e as medidas tomadas.",
];

export default function AguaAsininosPage() {
  const [temaAberto, setTemaAberto] = useState<number | null>(0);
  const [tarefasFeitas, setTarefasFeitas] = useState<string[]>([]);
  const [mostrarPlano, setMostrarPlano] = useState(false);

  const progresso = Math.round(
    (tarefasFeitas.length / tarefas.length) * 100
  );

  function alternarTarefa(tarefa: string) {
    setTarefasFeitas((atuais) =>
      atuais.includes(tarefa)
        ? atuais.filter((item) => item !== tarefa)
        : [...atuais, tarefa]
    );
  }

  return (
    <main className="min-h-screen bg-[#f4f8f3] text-slate-800">
      <section className="relative isolate overflow-hidden bg-[#123d29] text-white">
        <img
          src={imagemAgua}
          alt="Asininos utilizados no transporte de recipientes de água numa zona rural do Quénia"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#092719]/95 via-[#123d29]/80 to-[#123d29]/35" />

        <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
          <Link
            href="/pecuaria/asininos"
            className="inline-flex items-center gap-2 text-sm font-semibold text-green-100 transition hover:text-white"
          >
            <span aria-hidden="true">←</span>
            Voltar aos asininos
          </Link>

          <div className="grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-16">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-green-300">
                Maneio e bem-estar animal
              </p>

              <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                Água dos asininos
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-green-50 md:text-lg">
                Aprenda a garantir água limpa, abastecimento regular e
                condições adequadas de hidratação para burros e jumentos.
                Conheça os cuidados necessários na época seca, durante o
                trabalho e nas diferentes fases da vida.
              </p>

              <a
                href="#conteudos"
                className="mt-8 inline-flex items-center rounded-xl bg-green-400 px-6 py-3.5 font-bold text-green-950 shadow-lg transition hover:-translate-y-1 hover:bg-green-300"
              >
                Explorar os conteúdos
                <span className="ml-3" aria-hidden="true">↓</span>
              </a>
            </div>

            <div className="rounded-3xl border border-white/20 bg-black/25 p-6 shadow-2xl backdrop-blur-sm md:p-8">
              <p className="text-sm font-bold uppercase tracking-widest text-green-300">
                Regra fundamental
              </p>
              <h2 className="mt-3 text-2xl font-extrabold">
                Água limpa, acessível e disponível
              </h2>
              <p className="mt-4 leading-7 text-green-50">
                A tolerância dos asininos à escassez não significa que devam
                viver com acesso limitado à água. O abastecimento deve ser
                planeado e acompanhado diariamente.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  ["01", "Qualidade"],
                  ["02", "Disponibilidade"],
                  ["03", "Higiene"],
                  ["04", "Observação"],
                ].map(([numero, titulo]) => (
                  <div
                    key={numero}
                    className="rounded-2xl border border-white/10 bg-white/10 p-4"
                  >
                    <span className="text-sm font-black text-green-300">
                      {numero}
                    </span>
                    <p className="mt-1 font-semibold">{titulo}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-[1fr_0.85fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Conhecimento aplicado ao campo
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#173d2b] md:text-4xl">
              Porque é tão importante gerir bem a água?
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              A água participa na regulação da temperatura corporal, na
              digestão, na circulação e no funcionamento normal do organismo.
              A falta de água ou o consumo de água contaminada pode
              comprometer a saúde e o bem-estar dos asininos.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              A ingestão diária não é igual em todos os animais. Depende,
              entre outros fatores, do peso corporal, da temperatura
              ambiente, da atividade física, do teor de humidade da
              alimentação e da fase fisiológica. Por isso, a gestão deve
              considerar as condições de cada exploração.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-green-900/10 bg-white shadow-lg">
            <img
              src={imagemSeca}
              alt="Asinino numa zona rural seca do Quénia, ilustrando os desafios de acesso à água"
              loading="lazy"
              className="h-72 w-full object-cover md:h-80"
            />
            <div className="p-5">
              <p className="font-bold text-[#173d2b]">
                Atenção à época seca
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Antecipe a redução das fontes de água, mantenha um plano de
                abastecimento e verifique regularmente os pontos de consumo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Guia técnico
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#173d2b] md:text-4xl">
              Conteúdos e boas práticas
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Abra cada tema para consultar recomendações práticas que podem
              ser aplicadas na gestão diária da água na exploração.
            </p>
          </div>

          <div id="conteudos" className="grid gap-4 lg:grid-cols-2">
            {temas.map((tema, indice) => {
              const aberto = temaAberto === indice;

              return (
                <article
                  key={tema.numero}
                  className={`overflow-hidden rounded-2xl border transition ${
                    aberto
                      ? "border-green-700/30 bg-green-50 shadow-md"
                      : "border-slate-200 bg-white hover:border-green-700/30"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setTemaAberto(aberto ? null : indice)
                    }
                    aria-expanded={aberto}
                    className="flex w-full items-start gap-4 p-5 text-left md:p-6"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-800 text-sm font-black text-white">
                      {tema.numero}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-lg font-extrabold text-[#173d2b]">
                        {tema.titulo}
                      </span>
                      <span className="mt-2 block text-sm leading-7 text-slate-600">
                        {tema.resumo}
                      </span>
                    </span>

                    <span
                      className={`mt-1 text-xl font-bold text-green-800 transition ${
                        aberto ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    >
                      ⌄
                    </span>
                  </button>

                  {aberto && (
                    <div className="border-t border-green-900/10 px-5 pb-6 pt-4 md:px-6">
                      <h3 className="mb-3 font-bold text-green-900">
                        Recomendações práticas
                      </h3>
                      <ul className="space-y-3">
                        {tema.conteudo.map((item, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-sm leading-7 text-slate-700"
                          >
                            <span className="mt-1 font-black text-green-700">
                              ✓
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-[#173d2b] p-7 text-white md:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-300">
              Rotina de maneio
            </p>
            <h2 className="mt-3 text-2xl font-black md:text-3xl">
              Lista de verificação diária
            </h2>
            <p className="mt-3 leading-7 text-green-50/90">
              Marca as tarefas concluídas durante a inspeção dos animais e
              dos pontos de água.
            </p>

            <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-green-400 transition-all"
                style={{ width: `${progresso}%` }}
              />
            </div>
            <p className="mt-2 text-sm text-green-100">
              {tarefasFeitas.length} de {tarefas.length} tarefas concluídas
              ({progresso}%)
            </p>

            <div className="mt-5 space-y-3">
              {tarefas.map((tarefa) => (
                <label
                  key={tarefa}
                  className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10"
                >
                  <input
                    type="checkbox"
                    checked={tarefasFeitas.includes(tarefa)}
                    onChange={() => alternarTarefa(tarefa)}
                    className="mt-1 h-4 w-4 accent-green-400"
                  />
                  <span
                    className={`text-sm leading-6 ${
                      tarefasFeitas.includes(tarefa)
                        ? "text-green-200 line-through"
                        : "text-white"
                    }`}
                  >
                    {tarefa}
                  </span>
                </label>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setTarefasFeitas([])}
              className="mt-5 rounded-lg border border-white/30 px-4 py-2 text-sm font-bold transition hover:bg-white/10"
            >
              Limpar lista
            </button>
          </div>

          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-7 md:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-800">
              Saúde animal
            </p>
            <h2 className="mt-3 text-2xl font-black text-amber-950 md:text-3xl">
              Quando procurar ajuda veterinária?
            </h2>
            <p className="mt-4 leading-8 text-amber-950/80">
              A diminuição acentuada do consumo de água, a fraqueza, a apatia,
              os olhos encovados, a boca seca, a redução da urina ou a
              incapacidade de beber podem indicar um problema de saúde.
            </p>

            <div className="mt-5 space-y-3">
              {[
                "Recusa persistente de água",
                "Fraqueza intensa ou dificuldade em manter-se de pé",
                "Diarreia, vómitos não são típicos dos asininos, ou outros sinais graves",
                "Suspeita de água contaminada ou doença em vários animais",
              ].map((sinal) => (
                <div
                  key={sinal}
                  className="flex gap-3 rounded-xl border border-amber-200 bg-white/70 p-3"
                >
                  <span className="font-black text-amber-700">!</span>
                  <p className="text-sm leading-6 text-amber-950">{sinal}</p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm leading-7 text-amber-950/80">
              Não force água para a boca de um animal debilitado, pois pode
              ocorrer aspiração. Em situações graves, procure assistência
              veterinária urgente.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <div className="rounded-3xl border border-green-900/10 bg-white p-7 shadow-sm md:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
            Para aprofundar
          </p>
          <h2 className="mt-3 text-2xl font-black text-[#173d2b]">
            Fontes técnicas e leitura complementar
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Para recomendações mais aprofundadas sobre o fornecimento de água
            e o bem-estar dos asininos, consulta as seguintes referências.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <a
              href="https://food.ec.europa.eu/animals/animal-welfare/animal-welfare-practice/animal-welfare-during-transport_en"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-green-700 hover:bg-green-50"
            >
              <span className="font-bold text-green-900">
                Comissão Europeia
              </span>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Orientações de bem-estar animal e cuidados durante o
                transporte.
              </p>
              <span className="mt-3 inline-block text-sm font-bold text-green-800">
                Consultar fonte →
              </span>
            </a>

            <a
              href="https://www.thedonkeysanctuary.org.uk/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-green-700 hover:bg-green-50"
            >
              <span className="font-bold text-green-900">
                The Donkey Sanctuary
              </span>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Recursos sobre saúde, cuidados, alimentação e bem-estar
                dos asininos.
              </p>
              <span className="mt-3 inline-block text-sm font-bold text-green-800">
                Consultar fonte →
              </span>
            </a>
          </div>

          <p className="mt-6 text-xs leading-6 text-slate-500">
            Nota sobre as imagens: as fotografias utilizadas são de asininos
            em contexto rural no Quénia. São referências visuais ilustrativas,
            não fotografias apresentadas como sendo de Angola.
          </p>
        </div>
      </section>

      <footer className="border-t border-green-900/10 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            AGROINOVA ANGOLA — Conhecimento, Tecnologia e Inovação ao Serviço
            do Campo Angolano.
          </p>
          <Link
            href="/pecuaria/asininos"
            className="font-bold text-green-800 hover:text-green-600"
          >
            Voltar aos asininos →
          </Link>
        </div>
      </footer>
    </main>
  );
}
