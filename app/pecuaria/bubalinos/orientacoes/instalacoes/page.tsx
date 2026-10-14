
"use client";

import { useState } from "react";
import Link from "next/link";

const imagens = {
  abrigo:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Buffalo_shed-V.JPG",
  maneio:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Water_Buffalo3.jpg",
  sombra:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Kaziranga_water_buffalo.jpg",
  exterior:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Muddy_Water_buffalo_%28Bubalus_bubalis%29_grazing_in_a_green_landscape_with_blue_sky_in_Don_Det_Laos.jpg",
};

const verificacoes = [
  "O abrigo protege os animais da chuva e do sol intenso.",
  "Existe ventilação adequada e espaço para os animais descansarem.",
  "O piso permite o escoamento da água e não é excessivamente escorregadio.",
  "Os bebedouros permitem acesso regular a água limpa.",
  "Os comedouros podem ser limpos e mantidos em boas condições.",
  "As cercas e os portões estão firmes e sem pontas perigosas.",
  "O estrume e os resíduos são removidos regularmente.",
  "Existe sombra e uma área exterior segura para os animais.",
  "Os animais podem circular sem congestionamento excessivo.",
  "Existe um plano de limpeza e manutenção das instalações.",
];

const secoes = [
  {
    numero: "01",
    titulo: "Abrigos e áreas de descanso",
    resumo: "Proteção, conforto e organização do espaço.",
    conteudo:
      "As instalações devem proporcionar proteção contra chuva, exposição solar intensa e condições meteorológicas desfavoráveis. A construção deve permitir a circulação de ar, facilitar a limpeza e oferecer espaço suficiente para que os animais se deitem, se levantem e se movimentem sem dificuldade.",
    pontos: [
      "Privilegiar coberturas resistentes e de fácil manutenção.",
      "Garantir ventilação sem criar situações de desconforto.",
      "Disponibilizar uma área de descanso limpa e seca.",
      "Evitar sobrelotação e competição excessiva pelo espaço.",
    ],
  },
  {
    numero: "02",
    titulo: "Comedouros e bebedouros",
    resumo: "Acesso à água e à alimentação em boas condições.",
    conteudo:
      "Os pontos de alimentação e abeberamento devem estar localizados em áreas acessíveis e que permitam a limpeza frequente. A disposição dos equipamentos deve reduzir a contaminação da água, o desperdício de alimento e a competição entre animais.",
    pontos: [
      "Usar recipientes resistentes, estáveis e fáceis de higienizar.",
      "Verificar diariamente a disponibilidade e a qualidade da água.",
      "Remover restos de alimento deteriorado.",
      "Corrigir fugas e evitar a formação de lama persistente.",
    ],
  },
  {
    numero: "03",
    titulo: "Sombra, drenagem e higiene",
    resumo: "Gestão da humidade, do calor e dos resíduos.",
    conteudo:
      "A drenagem é importante para reduzir a acumulação de água contaminada e a deterioração do piso. Os búfalos-de-água podem utilizar água ou lama para arrefecimento, mas as áreas disponibilizadas devem ser geridas de modo a limitar riscos sanitários e acidentes.",
    pontos: [
      "Dar preferência a terrenos com drenagem adequada.",
      "Manter limpas as zonas de alimentação e descanso.",
      "Evitar poças de água estagnada junto dos equipamentos.",
      "Gerir áreas de banho ou lama com avaliação sanitária e ambiental.",
    ],
  },
  {
    numero: "04",
    titulo: "Cercas, portões e contenção",
    resumo: "Segurança durante a circulação e o maneio.",
    conteudo:
      "As cercas devem ser adequadas ao porte, ao comportamento e ao número dos animais. Os corredores e portões precisam de permitir uma movimentação organizada, sem cantos perigosos, objetos cortantes ou pontos onde os animais possam ficar presos.",
    pontos: [
      "Inspecionar regularmente postes, ligações e portões.",
      "Eliminar pregos expostos e materiais cortantes.",
      "Criar percursos de circulação simples e desobstruídos.",
      "Evitar métodos de contenção que provoquem sofrimento desnecessário.",
    ],
  },
];

export default function InstalacoesBubalinosPage() {
  const [aberto, setAberto] = useState<number | null>(0);
  const [marcados, setMarcados] = useState<boolean[]>(
    verificacoes.map(() => false)
  );
  const [mostrarResumo, setMostrarResumo] = useState(false);

  const total = marcados.filter(Boolean).length;
  const percentagem = Math.round((total / verificacoes.length) * 100);

  return (
    <main className="min-h-screen bg-[#f5f7f4] text-[#17221b]">
      {/* HERO */}
      <section className="relative isolate flex min-h-[520px] items-center overflow-hidden bg-[#123d28]">
        <img
          src={imagens.abrigo}
          alt="Abrigo rural para búfalos, fotografia ilustrativa"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          fetchPriority="high"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#082d1c]/95 via-[#123d28]/80 to-[#123d28]/25" />

        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
          <div className="max-w-3xl text-white">
            <Link
              href="/pecuaria/bubalinos"
              className="mb-8 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold transition hover:bg-white/20"
            >
              ← Voltar aos Bubalinos
            </Link>

            <p className="text-sm font-bold uppercase tracking-[0.23em] text-green-200">
              AGROINOVA ANGOLA · Produção animal
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Instalações dos Bubalinos
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
              Orientações para planear abrigos, áreas de descanso,
              equipamentos de alimentação, drenagem, cercas e espaços
              exteriores que promovam a segurança e o bem-estar dos animais.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#orientacoes"
                className="rounded-xl bg-white px-6 py-3 font-bold text-green-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-green-50"
              >
                Consultar orientações
              </a>

              <a
                href="#avaliacao"
                className="rounded-xl border border-white/40 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white/20"
              >
                Avaliar instalações
              </a>
            </div>

            <p className="mt-5 text-xs leading-5 text-white/75">
              Fotografia ilustrativa de instalações rurais. Não representa
              uma exploração identificada em Angola.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        {/* INTRODUÇÃO */}
        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              numero: "01",
              titulo: "Abrigo",
              texto: "Proteção e espaço de descanso.",
            },
            {
              numero: "02",
              titulo: "Alimentação",
              texto: "Comedouros acessíveis e higienizados.",
            },
            {
              numero: "03",
              titulo: "Ambiente",
              texto: "Sombra, drenagem e limpeza.",
            },
            {
              numero: "04",
              titulo: "Segurança",
              texto: "Cercas e circulação adequadas.",
            },
          ].map((item) => (
            <article
              key={item.numero}
              className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-sm font-extrabold tracking-widest text-green-700">
                {item.numero}
              </p>
              <h2 className="mt-3 text-lg font-bold">{item.titulo}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.texto}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-16 grid items-center gap-9 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Planeamento da exploração
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
              Instalações adaptadas aos animais e às condições locais
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              As instalações dos búfalos devem ser concebidas em função do
              número e da categoria dos animais, do clima, da disponibilidade
              de água, do tipo de solo e dos recursos da exploração. Uma
              instalação funcional não precisa de ser excessivamente
              complexa: deve ser segura, durável, fácil de limpar e adequada
              às tarefas diárias.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Nas explorações angolanas, a escolha dos materiais e a
              organização do espaço devem considerar as condições locais,
              incluindo a intensidade das chuvas, o calor, a drenagem e a
              disponibilidade de materiais de construção.
            </p>

            <div className="mt-6 rounded-2xl border-l-4 border-green-600 bg-green-50 p-5">
              <h3 className="font-bold text-green-900">
                Princípio de construção
              </h3>
              <p className="mt-2 text-sm leading-7 text-green-900/85">
                A instalação deve facilitar o maneio e a higiene sem
                comprometer a liberdade de movimento, o conforto e a
                segurança dos animais.
              </p>
            </div>
          </div>

          <figure className="overflow-hidden rounded-3xl bg-white shadow-xl">
            <img
              src={imagens.maneio}
              alt="Búfalo-de-água utilizado no trabalho agrícola, em fotografia rural"
              loading="lazy"
              className="h-[330px] w-full object-cover sm:h-[420px]"
            />
            <figcaption className="p-5 text-sm leading-6 text-slate-600">
              Os espaços de maneio devem permitir a circulação dos animais e
              o trabalho dos tratadores com o mínimo de risco.
              <a
                href="https://commons.wikimedia.org/wiki/File:Water_Buffalo3.jpg"
                target="_blank"
                rel="noreferrer"
                className="ml-1 font-semibold text-green-800 underline"
              >
                Fonte da fotografia
              </a>
            </figcaption>
          </figure>
        </section>

        {/* ORIENTAÇÕES COM IMAGENS DIFERENTES */}
        <section id="orientacoes" className="mt-16 scroll-mt-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Guia técnico
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Componentes das instalações
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Cada componente desempenha uma função específica. Consulta as
              recomendações e aplica-as de acordo com a realidade da
              exploração.
            </p>
          </div>

          <div className="mt-9 grid gap-6 md:grid-cols-2">
            {secoes.map((secao, index) => {
              const imagensSecao = [
                imagens.abrigo,
                imagens.maneio,
                imagens.sombra,
                imagens.exterior,
              ];

              const alts = [
                "Abrigo rural para búfalos",
                "Búfalo utilizado em atividade agrícola",
                "Búfalo-de-água numa área aquática",
                "Búfalo-de-água num ambiente rural verde",
              ];

              const fontes = [
                "https://commons.wikimedia.org/wiki/File:Buffalo_shed-V.JPG",
                "https://commons.wikimedia.org/wiki/File:Water_Buffalo3.jpg",
                "https://commons.wikimedia.org/wiki/File:Kaziranga_water_buffalo.jpg",
                "https://commons.wikimedia.org/wiki/File:Muddy_Water_buffalo_(Bubalus_bubalis)_grazing_in_a_green_landscape_with_blue_sky_in_Don_Det_Laos.jpg",
              ];

              return (
                <article
                  key={secao.numero}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative">
                    <img
                      src={imagensSecao[index]}
                      alt={alts[index]}
                      loading="lazy"
                      className="h-64 w-full object-cover"
                    />

                    <span className="absolute left-4 top-4 rounded-lg bg-green-800 px-3 py-2 text-sm font-extrabold text-white shadow">
                      {secao.numero}
                    </span>
                  </div>

                  <div className="p-6 sm:p-7">
                    <p className="text-sm font-semibold text-green-700">
                      {secao.resumo}
                    </p>

                    <h3 className="mt-2 text-2xl font-extrabold">
                      {secao.titulo}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {secao.conteudo}
                    </p>

                    <h4 className="mt-5 font-bold text-slate-900">
                      Recomendações práticas
                    </h4>

                    <ul className="mt-3 space-y-3">
                      {secao.pontos.map((ponto) => (
                        <li
                          key={ponto}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green-600" />
                          <span>{ponto}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={fontes[index]}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex text-sm font-bold text-green-800 underline underline-offset-4"
                    >
                      Consultar origem da imagem ↗
                    </a>

                    {index === 1 && (
                      <p className="mt-3 text-xs leading-5 text-slate-500">
                        A fotografia ilustra um búfalo em contexto agrícola;
                        não é uma fotografia específica de um comedouro ou
                        bebedouro.
                      </p>
                    )}

                    {index === 2 && (
                      <p className="mt-3 text-xs leading-5 text-slate-500">
                        A imagem ilustra o contacto dos búfalos com a água.
                        A gestão da área de abeberamento deve ser planeada
                        separadamente.
                      </p>
                    )}

                    {index === 3 && (
                      <p className="mt-3 text-xs leading-5 text-slate-500">
                        Fotografia de búfalo-de-água em paisagem rural; não
                        representa especificamente uma instalação cercada.
                      </p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* MANUTENÇÃO */}
        <section className="mt-16 overflow-hidden rounded-3xl bg-[#123d28] text-white">
          <div className="grid lg:grid-cols-2">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-sm font-bold uppercase tracking-widest text-green-200">
                Rotina de manutenção
              </p>

              <h2 className="mt-3 text-3xl font-extrabold">
                A higiene começa nas tarefas diárias
              </h2>

              <p className="mt-5 leading-8 text-white/85">
                Uma instalação bem construída necessita de manutenção
                regular. A inspeção de pisos, cercas, bebedouros, comedouros
                e coberturas ajuda a identificar problemas antes que
                provoquem lesões, contaminação ou dificuldades de maneio.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Diariamente: observar os animais, a água e a limpeza.",
                  "Regularmente: inspecionar cercas, portões e pisos.",
                  "Após chuvas intensas: verificar a drenagem e as zonas alagadas.",
                  "Periodicamente: reparar estruturas e rever o plano de manutenção.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/15 bg-white/10 p-4 text-sm leading-6 text-white/90"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="min-h-[340px]">
              <img
                src={imagens.sombra}
                alt="Búfalo-de-água numa área aquática, ilustrando a importância da gestão do ambiente"
                loading="lazy"
                className="h-full min-h-[340px] w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* CHECKLIST INTERATIVA */}
        <section id="avaliacao" className="mt-16 scroll-mt-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-green-700">
                Ferramenta prática
              </p>

              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Avaliação das instalações
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Usa esta lista para verificar as condições existentes na
                exploração. Assinala apenas os pontos que já foram
                confirmados.
              </p>

              <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-slate-600">
                    Pontos verificados
                  </span>
                  <span className="text-2xl font-extrabold text-green-800">
                    {total}/{verificacoes.length}
                  </span>
                </div>

                <div
                  className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100"
                  role="progressbar"
                  aria-valuenow={percentagem}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Progresso da avaliação das instalações"
                >
                  <div
                    className="h-full rounded-full bg-green-600 transition-all duration-300"
                    style={{ width: `${percentagem}%` }}
                  />
                </div>

                <p className="mt-3 text-sm text-slate-500">
                  {percentagem}% da lista verificada.
                </p>

                <button
                  type="button"
                  onClick={() => setMostrarResumo(!mostrarResumo)}
                  className="mt-5 w-full rounded-xl bg-green-800 px-5 py-3 font-bold text-white transition hover:bg-green-900"
                >
                  {mostrarResumo ? "Ocultar resumo" : "Ver resumo"}
                </button>

                {mostrarResumo && (
                  <div className="mt-4 rounded-xl bg-green-50 p-4 text-sm leading-7 text-green-900">
                    {total === verificacoes.length
                      ? "Todos os pontos da lista foram assinalados. Recomenda-se confirmar regularmente se as condições continuam adequadas."
                      : `Faltam verificar ${verificacoes.length - total} ponto(s). Usa a lista para identificar necessidades de manutenção e melhoria.`}
                    <p className="mt-2 text-xs text-green-800/80">
                      Esta ferramenta é orientativa e não substitui uma
                      inspeção técnica ou veterinária.
                    </p>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => {
                    setMarcados(verificacoes.map(() => false));
                    setMostrarResumo(false);
                  }}
                  className="mt-4 text-sm font-semibold text-green-800 underline"
                >
                  Reiniciar avaliação
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
              <div className="space-y-3">
                {verificacoes.map((item, index) => (
                  <label
                    key={item}
                    className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-100 p-4 transition hover:border-green-200 hover:bg-green-50"
                  >
                    <input
                      type="checkbox"
                      checked={marcados[index]}
                      onChange={(event) =>
                        setMarcados((anterior) =>
                          anterior.map((valor, i) =>
                            i === index ? event.target.checked : valor
                          )
                        )
                      }
                      className="mt-1 h-5 w-5 shrink-0 accent-green-700"
                    />

                    <span
                      className={`text-sm leading-7 ${
                        marcados[index]
                          ? "text-slate-400 line-through"
                          : "text-slate-700"
                      }`}
                    >
                      {item}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FONTES */}
        <section className="mt-16">
          <p className="text-sm font-bold uppercase tracking-widest text-green-700">
            Leitura complementar
          </p>

          <h2 className="mt-3 text-3xl font-extrabold">
            Fontes para aprofundamento
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            Para projetar ou melhorar instalações pecuárias, consulta
            referências técnicas sobre alojamento, higiene, ambiente e
            bem-estar. As soluções devem ser adaptadas às condições locais.
          </p>

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <a
              href="https://www.fao.org/animal-production/en/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-green-300 hover:shadow-md"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-green-700">
                FAO
              </p>
              <h3 className="mt-3 text-lg font-bold">
                Produção e saúde animal
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Recursos técnicos para apoiar sistemas de produção animal e
                o desenvolvimento sustentável das explorações.
              </p>
              <span className="mt-4 inline-block text-sm font-bold text-green-800">
                Consultar recursos ↗
              </span>
            </a>

            <a
              href="https://www.woah.org/en/what-we-do/animal-health-and-welfare/animal-welfare/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-green-300 hover:shadow-md"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-green-700">
                WOAH
              </p>
              <h3 className="mt-3 text-lg font-bold">
                Bem-estar animal
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Princípios e materiais de referência para promover o
                bem-estar dos animais e melhorar as práticas de maneio.
              </p>
              <span className="mt-4 inline-block text-sm font-bold text-green-800">
                Consultar recursos ↗
              </span>
            </a>
          </div>
        </section>

        {/* RODAPÉ */}
        <footer className="mt-16 border-t border-slate-200 py-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
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
              className="inline-flex w-fit rounded-xl border border-green-800 px-5 py-3 text-sm font-bold text-green-900 transition hover:bg-green-50"
            >
              Voltar aos Bubalinos
            </Link>
          </div>

          <p className="mt-5 text-xs leading-6 text-slate-500">
            As fotografias são ilustrativas e provenientes do Wikimedia
            Commons. Consulta as páginas originais para confirmar autoria,
            licença e condições de reutilização. As imagens não representam
            necessariamente explorações de Angola.
          </p>
        </footer>
      </div>
    </main>
  );
}
