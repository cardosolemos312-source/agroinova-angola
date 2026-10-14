
"use client";

import Link from "next/link";
import { useState } from "react";

const imagemPrincipal =
  "https://images.squarespace-cdn.com/content/v1/68209619b54e7d449913dde6/175f9505-1082-4c68-a7b0-4e7074b43dd6/Donkey%2BBarn%2BIdeas";

const temas = [
  {
    numero: "01",
    titulo: "Abrigo e protecção climática",
    resumo: "Um espaço seco, ventilado e protegido do sol intenso, da chuva e do vento.",
    detalhe:
      "O abrigo deve permitir que todos os asininos se protejam ao mesmo tempo. Deve ter cobertura resistente, boa circulação de ar e uma entrada acessível. Em zonas quentes de Angola, a sombra e a ventilação são especialmente importantes.",
    cuidados: [
      "Disponibilizar sombra durante as horas de maior calor.",
      "Evitar espaços fechados, abafados ou com pouca ventilação.",
      "Verificar regularmente o estado do telhado e das estruturas.",
    ],
  },
  {
    numero: "02",
    titulo: "Piso, drenagem e cama",
    resumo: "Um chão firme, pouco escorregadio e sem acumulação de água.",
    detalhe:
      "Os pisos constantemente húmidos favorecem problemas nos cascos e dificultam o descanso. O terreno deve escoar a água, evitando lama persistente. Quando se utiliza cama, esta deve permanecer limpa e seca.",
    cuidados: [
      "Corrigir pontos onde a água fica acumulada.",
      "Retirar regularmente estrume e material molhado.",
      "Evitar pisos lisos, buracos e superfícies cortantes.",
    ],
  },
  {
    numero: "03",
    titulo: "Espaço e organização dos animais",
    resumo: "Áreas de descanso, alimentação e circulação sem excesso de lotação.",
    detalhe:
      "A dimensão das instalações deve considerar o tamanho, a idade, o estado de saúde e o número de animais. Os asininos precisam de espaço para se deitarem, levantarem e afastarem-se de outros indivíduos quando necessário.",
    cuidados: [
      "Evitar sobrelotação e competição excessiva.",
      "Organizar os grupos de forma compatível.",
      "Disponibilizar espaço para circulação e descanso.",
    ],
  },
  {
    numero: "04",
    titulo: "Cercas, portões e segurança",
    resumo: "Limites visíveis, resistentes e sem elementos que possam ferir os animais.",
    detalhe:
      "As cercas devem impedir fugas sem criar riscos de cortes, aprisionamento ou estrangulamento. Portões e fechos precisam de funcionar correctamente. Arames soltos, pregos expostos e materiais cortantes devem ser eliminados.",
    cuidados: [
      "Inspeccionar postes, portões, fechos e arames.",
      "Retirar objectos cortantes e materiais abandonados.",
      "Garantir que os animais não ficam presos nas estruturas.",
    ],
  },
  {
    numero: "05",
    titulo: "Comedouros e bebedouros",
    resumo: "Equipamentos acessíveis, estáveis e fáceis de limpar.",
    detalhe:
      "Os recipientes devem estar instalados numa posição segura e permitir o acesso dos animais sem disputas excessivas. A água deve permanecer limpa e disponível, com reposição regular e protecção contra contaminação por estrume, terra e restos de alimento.",
    cuidados: [
      "Lavar os recipientes com regularidade.",
      "Verificar diariamente o funcionamento dos bebedouros.",
      "Evitar recipientes com arestas ou peças soltas.",
    ],
  },
  {
    numero: "06",
    titulo: "Higiene e gestão do estrume",
    resumo: "Uma rotina de limpeza que reduza odores, insectos e contaminação.",
    detalhe:
      "A limpeza frequente ajuda a manter o ambiente saudável. O estrume deve ser removido e depositado numa área apropriada, afastada de fontes de água e de locais onde os alimentos são armazenados. Os utensílios de limpeza devem ser mantidos em condições adequadas.",
    cuidados: [
      "Estabelecer uma rotina diária de limpeza.",
      "Manter a área de alimentação livre de estrume.",
      "Controlar poças de água e locais de reprodução de insectos.",
    ],
  },
  {
    numero: "07",
    titulo: "Área de isolamento e cuidados especiais",
    resumo: "Um espaço separado para animais doentes, feridos ou recém-chegados.",
    detalhe:
      "Sempre que possível, deve existir uma área de isolamento com água, alimento, abrigo e condições de higiene próprios. Um animal com sinais de doença deve ser avaliado por um profissional veterinário. O isolamento não substitui o diagnóstico nem o tratamento.",
    cuidados: [
      "Separar os animais com sinais de doença contagiosa.",
      "Limpar os equipamentos usados na área de isolamento.",
      "Procurar assistência veterinária quando necessário.",
    ],
  },
];

const verificacoes = [
  "O abrigo está seguro, seco e ventilado.",
  "Existe sombra suficiente para os animais.",
  "O piso permite a drenagem da água.",
  "As cercas e os portões não apresentam riscos.",
  "A água está limpa e disponível.",
  "Os comedouros estão limpos e em bom estado.",
  "O estrume e os resíduos são removidos regularmente.",
  "Existe um plano para separar animais doentes ou feridos.",
];

export default function InstalacoesAsininosPage() {
  const [aberto, setAberto] = useState<number | null>(0);
  const [marcados, setMarcados] = useState<string[]>([]);

  const progresso = Math.round(
    (marcados.length / verificacoes.length) * 100
  );

  function alternarVerificacao(item: string) {
    setMarcados((actual) =>
      actual.includes(item)
        ? actual.filter((texto) => texto !== item)
        : [...actual, item]
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f7f6] text-[#17221b]">
      <section className="relative overflow-hidden bg-[#123e2a] text-white">
        <div className="absolute inset-0">
          <img
            src={imagemPrincipal}
            alt="Asininos abrigados numa instalação rural"
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102f22] via-[#123e2a]/90 to-[#123e2a]/35" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-16">
          <Link
            href="/pecuaria/asininos"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm text-white transition hover:bg-white/10"
          >
            <span aria-hidden="true">←</span>
            Voltar aos asininos
          </Link>

          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-green-200">
                AGROINOVA ANGOLA · PECUÁRIA
              </p>

              <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Instalações para a criação de asininos
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-green-50 sm:text-lg">
                Orientações para construir e organizar abrigos, cercas,
                áreas de descanso e espaços de alimentação seguros,
                adaptáveis às condições das explorações rurais angolanas.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#orientacoes"
                  className="rounded-xl bg-white px-5 py-3 font-bold text-[#14532d] transition hover:bg-green-50"
                >
                  Consultar orientações
                </a>
                <a
                  href="#verificacao"
                  className="rounded-xl border border-white/40 px-5 py-3 font-bold text-white transition hover:bg-white/10"
                >
                  Verificar instalações
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
              <p className="text-sm font-semibold text-green-200">
                PRINCÍPIO FUNDAMENTAL
              </p>
              <h2 className="mt-3 text-2xl font-bold">
                Instalações simples, seguras e funcionais
              </h2>
              <p className="mt-4 leading-7 text-green-50">
                Uma boa instalação não depende apenas do custo de construção.
                Depende também da drenagem, da sombra, da higiene, do espaço
                disponível e da facilidade de observar os animais diariamente.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/10 p-4">
                  <span className="text-2xl" aria-hidden="true">⌂</span>
                  <p className="mt-2 font-bold">Abrigo</p>
                  <p className="mt-1 text-sm text-green-100">
                    Protecção e conforto
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <span className="text-2xl" aria-hidden="true">✓</span>
                  <p className="mt-2 font-bold">Segurança</p>
                  <p className="mt-1 text-sm text-green-100">
                    Menos riscos de lesões
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-14">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-green-700">01 · PROTEGER</p>
            <h2 className="mt-2 text-xl font-bold">Sombra e abrigo</h2>
            <p className="mt-2 leading-7 text-slate-600">
              Reduzir a exposição ao calor, à chuva e às condições
              meteorológicas adversas.
            </p>
          </div>
          <div className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-green-700">02 · PREVENIR</p>
            <h2 className="mt-2 text-xl font-bold">Higiene e drenagem</h2>
            <p className="mt-2 leading-7 text-slate-600">
              Evitar lama persistente, acumulação de resíduos e contaminação
              da água.
            </p>
          </div>
          <div className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-green-700">03 · ORGANIZAR</p>
            <h2 className="mt-2 text-xl font-bold">Espaço e circulação</h2>
            <p className="mt-2 leading-7 text-slate-600">
              Facilitar o acesso à água, ao alimento, ao descanso e aos
              cuidados veterinários.
            </p>
          </div>
        </div>
      </section>

      <section
        id="orientacoes"
        className="mx-auto max-w-7xl scroll-mt-8 px-5 pb-12 sm:px-8 lg:pb-16"
      >
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-green-700">
            Manual prático
          </p>
          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            Como organizar as instalações
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Selecciona cada tema para consultar os cuidados recomendados.
            As soluções devem ser ajustadas ao clima, aos materiais
            disponíveis, ao número de animais e às condições da exploração.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
            <div className="border-b border-slate-100 bg-green-50 px-5 py-4">
              <h3 className="font-bold text-green-900">
                Temas de orientação
              </h3>
              <p className="mt-1 text-sm text-green-800">
                {temas.length} áreas de gestão das instalações
              </p>
            </div>

            <div className="divide-y divide-slate-100">
              {temas.map((tema, index) => (
                <button
                  key={tema.numero}
                  type="button"
                  onClick={() => setAberto(aberto === index ? null : index)}
                  className={`flex w-full items-center gap-4 p-5 text-left transition ${
                    aberto === index
                      ? "bg-green-50"
                      : "bg-white hover:bg-slate-50"
                  }`}
                  aria-expanded={aberto === index}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-black ${
                      aberto === index
                        ? "bg-green-800 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {tema.numero}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-bold text-slate-900">
                      {tema.titulo}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-slate-500">
                      {tema.resumo}
                    </span>
                  </span>
                  <span className="text-xl text-green-800" aria-hidden="true">
                    {aberto === index ? "−" : "+"}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            {aberto !== null && (
              <article className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-100 font-black text-green-800">
                    {temas[aberto].numero}
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-green-700">
                      Orientação técnica
                    </p>
                    <h3 className="mt-2 text-2xl font-black">
                      {temas[aberto].titulo}
                    </h3>
                  </div>
                </div>

                <p className="mt-6 leading-8 text-slate-600">
                  {temas[aberto].detalhe}
                </p>

                <h4 className="mt-7 font-bold text-slate-900">
                  Cuidados a implementar
                </h4>
                <ul className="mt-4 space-y-3">
                  {temas[aberto].cuidados.map((cuidado) => (
                    <li key={cuidado} className="flex gap-3 leading-7 text-slate-600">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-800">
                        ✓
                      </span>
                      <span>{cuidado}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 rounded-2xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">
                  <strong>Nota prática:</strong> adapta as medidas à realidade
                  local sem comprometer a segurança, a ventilação, a higiene
                  ou o bem-estar dos animais.
                </div>
              </article>
            )}

            <div className="rounded-3xl bg-[#173f2c] p-6 text-white sm:p-7">
              <p className="text-sm font-bold uppercase tracking-widest text-green-200">
                Gestão diária
              </p>
              <h3 className="mt-2 text-xl font-bold">
                Observar as instalações todos os dias
              </h3>
              <p className="mt-3 leading-7 text-green-50">
                Uma inspecção breve ajuda a identificar avarias, falta de água,
                zonas escorregadias e outros problemas antes que provoquem
                lesões ou prejudiquem os animais.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="verificacao"
        className="scroll-mt-8 border-y border-green-100 bg-white"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Ferramenta de campo
            </p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Lista de verificação
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Usa esta lista durante a inspecção do abrigo e das áreas de
              circulação. Marca cada ponto depois de o confirmares no local.
            </p>

            <div className="mt-7 rounded-3xl bg-green-50 p-6">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-green-800">
                    Progresso da inspecção
                  </p>
                  <p className="mt-1 text-3xl font-black text-green-950">
                    {marcados.length}/{verificacoes.length}
                  </p>
                </div>
                <p className="text-2xl font-black text-green-800">
                  {progresso}%
                </p>
              </div>

              <div
                className="mt-4 h-3 overflow-hidden rounded-full bg-green-200"
                role="progressbar"
                aria-label="Progresso da lista de verificação"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={progresso}
              >
                <div
                  className="h-full rounded-full bg-green-700 transition-all duration-300"
                  style={{ width: `${progresso}%` }}
                />
              </div>

              <button
                type="button"
                onClick={() => setMarcados([])}
                className="mt-5 rounded-lg border border-green-300 px-4 py-2 text-sm font-bold text-green-900 transition hover:bg-green-100"
              >
                Reiniciar lista
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="mb-5 flex items-center justify-between gap-4">
              <h3 className="text-lg font-bold">Inspecção das instalações</h3>
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">
                Lista interactiva
              </span>
            </div>

            <div className="space-y-3">
              {verificacoes.map((item) => {
                const seleccionado = marcados.includes(item);

                return (
                  <label
                    key={item}
                    className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition ${
                      seleccionado
                        ? "border-green-300 bg-green-50"
                        : "border-slate-200 hover:border-green-200 hover:bg-slate-50"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={seleccionado}
                      onChange={() => alternarVerificacao(item)}
                      className="mt-1 h-5 w-5 accent-green-700"
                    />
                    <span
                      className={`leading-7 ${
                        seleccionado
                          ? "font-medium text-green-950"
                          : "text-slate-700"
                      }`}
                    >
                      {item}
                    </span>
                  </label>
                );
              })}
            </div>

            {marcados.length === verificacoes.length && (
              <div className="mt-5 rounded-2xl bg-green-100 p-4 font-semibold leading-7 text-green-900">
                Todos os pontos da lista foram assinalados. Confirma
                presencialmente cada condição e regista as reparações
                necessárias.
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-black">Referências para aprofundamento</h2>
          <p className="mt-3 max-w-4xl leading-7 text-slate-600">
            Para aprofundar os cuidados e o alojamento de asininos, consulta
            materiais técnicos especializados e procura orientação dos
            serviços veterinários locais. As recomendações devem ser adaptadas
            às condições ambientais e aos recursos de cada exploração.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="https://www.thedonkeysanctuary.org.uk/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-green-200 px-4 py-3 font-semibold text-green-800 transition hover:bg-green-50"
            >
              The Donkey Sanctuary ↗
            </a>
            <a
              href="https://www.fao.org/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-green-200 px-4 py-3 font-semibold text-green-800 transition hover:bg-green-50"
            >
              FAO — Organização das Nações Unidas para a Alimentação e a Agricultura ↗
            </a>
          </div>
          <p className="mt-5 text-xs leading-6 text-slate-500">
            Conteúdo de orientação geral. A construção de instalações deve
            respeitar as condições locais, as normas aplicáveis e as
            recomendações de profissionais competentes.
          </p>
        </div>
      </section>

      <footer className="bg-[#123e2a] px-5 py-7 text-center text-sm text-green-100">
        AGROINOVA ANGOLA · Conhecimento, Tecnologia e Inovação ao Serviço do Campo Angolano.
      </footer>
    </main>
  );
}
