
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

const imagens = {
  pastagem:
    "https://cdn.pixabay.com/photo/2017/07/25/18/53/horse-2536541_1280.jpg",
  feno:
    "https://cdn.pixabay.com/photo/2015/12/12/15/56/horse-1089668_1280.jpg",
  cavaloCampo:
    "https://cdn.pixabay.com/photo/2017/10/09/17/42/horse-feeding-2834212_1280.jpg",
  cavaloNatureza:
    "https://cdn.pixabay.com/photo/2018/05/09/09/20/horse-3384930_640.jpg",
  cavaloManeio:
    "https://cdn.pixabay.com/photo/2018/05/09/09/21/horse-3384932_640.jpg",
  cavaloSaude:
    "https://cdn.pixabay.com/photo/2020/02/08/10/51/horse-4829756_640.jpg",
};

const temas: Tema[] = [
  {
    numero: "01",
    titulo: "Forragens e pastagens",
    resumo: "A base de uma alimentação equilibrada.",
    imagem: imagens.pastagem,
    alt: "Cavalo numa pastagem, relacionado com o consumo de forragem",
    conteudo: [
      "Os equinos estão adaptados a consumir alimentos fibrosos ao longo do dia. A erva das pastagens e o feno de boa qualidade são componentes fundamentais da dieta, contribuindo para o funcionamento digestivo e para a manutenção da condição corporal.",
      "A disponibilidade de pastagem varia com a precipitação, o solo, a estação do ano e o maneio. Em períodos de escassez, pode ser necessário complementar a alimentação com feno ou outras forragens adequadas, considerando a sua qualidade e disponibilidade.",
      "A introdução de novas forragens deve ser gradual. Antes de fornecer um alimento, verifique se está livre de bolor, poeiras excessivas, contaminação e plantas potencialmente tóxicas.",
    ],
    cuidados: [
      "Disponibilizar forragem limpa e de qualidade.",
      "Inspecionar o pasto para identificar plantas tóxicas e resíduos.",
      "Armazenar o feno num espaço seco, ventilado e protegido.",
      "Ajustar a quantidade à condição corporal e às necessidades do animal.",
    ],
  },
  {
    numero: "02",
    titulo: "Concentrados e energia",
    resumo: "Complementar a dieta quando necessário.",
    imagem: imagens.feno,
    alt: "Cavalo junto a feno numa área de alimentação",
    conteudo: [
      "Os concentrados podem complementar a forragem quando esta não fornece, por si só, os nutrientes e a energia necessários. A sua utilização deve depender das características do cavalo, e não de uma regra igual para todos os animais.",
      "A idade, o peso, a condição corporal, o estado reprodutivo, a saúde e a intensidade do exercício influenciam as necessidades alimentares. Um cavalo com pouca atividade pode não necessitar de concentrados em quantidades significativas.",
      "A composição da ração e o tamanho das refeições devem ser definidos com apoio técnico. Alterações bruscas ou refeições excessivamente volumosas podem aumentar o risco de problemas digestivos.",
    ],
    cuidados: [
      "Introduzir novos alimentos gradualmente.",
      "Dividir a quantidade diária em refeições adequadas.",
      "Evitar fornecer grandes refeições de concentrado antes de exercício intenso.",
      "Proteger os alimentos da humidade, dos roedores e de contaminações.",
    ],
  },
  {
    numero: "03",
    titulo: "Condição corporal",
    resumo: "Avaliar o estado físico e acompanhar a evolução.",
    imagem: imagens.cavaloCampo,
    alt: "Cavalo observado num ambiente de campo",
    conteudo: [
      "A condição corporal permite avaliar as reservas de gordura do cavalo. A observação deve abranger o pescoço, as costelas, a região lombar, a garupa e outras zonas em que se pode acumular gordura.",
      "Um animal demasiado magro pode apresentar alimentação insuficiente, problemas dentários, parasitismo ou outras doenças. O excesso de peso também merece atenção, pois pode aumentar o risco de alterações metabólicas e problemas locomotores.",
      "O acompanhamento regular, com registos e observações consistentes, ajuda a identificar mudanças. Uma perda de peso inexplicada ou uma alteração persistente do apetite deve ser avaliada por um médico veterinário.",
    ],
    cuidados: [
      "Observar e registar regularmente a condição corporal.",
      "Ajustar a alimentação de forma progressiva.",
      "Verificar o estado dentário quando houver dificuldade em mastigar.",
      "Procurar assistência veterinária perante alterações inexplicadas.",
    ],
  },
  {
    numero: "04",
    titulo: "Minerais e vitaminas",
    resumo: "Equilibrar os nutrientes sem excessos.",
    imagem: imagens.cavaloNatureza,
    alt: "Cavalo num ambiente natural",
    conteudo: [
      "Os minerais e as vitaminas participam na formação dos ossos, no funcionamento muscular, no metabolismo e na manutenção dos tecidos. As necessidades variam conforme a idade, o crescimento, a reprodução, a atividade e a composição da dieta.",
      "A qualidade da forragem e a composição dos restantes alimentos determinam se existe necessidade de suplementação. Quando os recursos alimentares são limitados, é importante avaliar a dieta antes de escolher um suplemento.",
      "O fornecimento indiscriminado de produtos pode provocar desequilíbrios ou toxicidade. Os suplementos devem ser próprios para equinos e utilizados de acordo com as instruções e a orientação técnica.",
    ],
    cuidados: [
      "Avaliar a dieta antes de escolher suplementos.",
      "Utilizar produtos adequados à espécie e à fase de vida.",
      "Respeitar as doses recomendadas.",
      "Evitar combinar produtos com composição nutricional semelhante sem aconselhamento.",
    ],
  },
  {
    numero: "05",
    titulo: "Rotina das refeições",
    resumo: "Regularidade, higiene e observação diária.",
    imagem: imagens.cavaloManeio,
    alt: "Cavalo num ambiente de maneio",
    conteudo: [
      "Uma rotina alimentar consistente favorece o bem-estar dos equinos. Sempre que possível, a distribuição dos alimentos deve respeitar horários regulares e permitir o acesso frequente a forragem adequada.",
      "Os comedouros e recipientes devem permanecer limpos. Os alimentos precisam de ser protegidos da humidade, de pragas e de contaminações, e os restos deteriorados devem ser retirados.",
      "O consumo habitual deve ser conhecido por quem acompanha o animal. A recusa de alimento, a diminuição do consumo, a mastigação difícil ou as alterações das fezes podem indicar problemas que exigem atenção.",
    ],
    cuidados: [
      "Manter uma rotina alimentar consistente.",
      "Garantir água limpa e acessível permanentemente.",
      "Limpar os recipientes e retirar alimentos deteriorados.",
      "Observar o apetite, a mastigação e a produção de fezes.",
    ],
  },
  {
    numero: "06",
    titulo: "Alimentação e exercício",
    resumo: "Adaptar a dieta ao trabalho e ao descanso.",
    imagem: imagens.cavaloSaude,
    alt: "Cavalo num ambiente natural",
    conteudo: [
      "As necessidades alimentares variam com a atividade. Um cavalo em manutenção, um animal utilizado em trabalho rural e um equino submetido a exercício intenso podem necessitar de planos alimentares diferentes.",
      "A dieta deve fornecer energia e nutrientes suficientes sem favorecer o excesso de peso. A intensidade e a duração do exercício, as condições ambientais, a recuperação e a condição corporal devem ser consideradas em conjunto.",
      "O maneio das refeições antes e depois do exercício deve ser individualizado. Evite exercício intenso imediatamente após uma refeição volumosa e procure orientação profissional quando o animal realizar trabalho exigente.",
    ],
    cuidados: [
      "Adequar a dieta à carga de trabalho real.",
      "Evitar exercício intenso imediatamente após refeições volumosas.",
      "Garantir água, descanso e recuperação adequados.",
      "Reavaliar a alimentação quando mudar a atividade do animal.",
    ],
  },
];

export default function AlimentacaoEquinosPage() {
  const [temaAberto, setTemaAberto] = useState<string | null>(null);
  const [verificacao, setVerificacao] = useState<boolean[]>(
    Array(5).fill(false)
  );

  const verificacoes = [
    "Forragem limpa e adequada disponível.",
    "Água limpa e acessível.",
    "Apetite e consumo habituais.",
    "Comedouros e alimentos em boas condições.",
    "Condição corporal e comportamento observados.",
  ];

  const totalVerificado = verificacao.filter(Boolean).length;

  return (
    <main className="min-h-screen bg-[#f5f7f2] text-[#17221b]">
      {/* CABEÇALHO PRINCIPAL */}
      <section className="relative isolate flex min-h-[580px] items-center overflow-hidden bg-[#103b27] lg:min-h-[690px]">
        <img
          src={imagens.pastagem}
          alt="Cavalo numa pastagem"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          fetchPriority="high"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#092719]/95 via-[#103d29]/75 to-[#103d29]/15" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#092719]/65 via-transparent to-transparent" />

        <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <Link
              href="/pecuaria"
              className="inline-flex items-center gap-3 text-sm font-semibold text-white/85 transition hover:text-lime-300"
            >
              <span aria-hidden="true">←</span>
              Voltar à Pecuária
            </Link>

            <p className="mt-12 text-xs font-bold uppercase tracking-[0.28em] text-lime-300 sm:text-sm">
              AGROINOVA ANGOLA · EQUINOS
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Alimentação
              <br />
              <span className="text-lime-300">
                saudável e equilibrada
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
              Orientações práticas para melhorar a nutrição, o bem-estar e
              o maneio alimentar dos cavalos, considerando as necessidades
              de cada animal e os recursos disponíveis na exploração.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#orientacoes"
                className="inline-flex items-center justify-center rounded-full bg-lime-400 px-7 py-4 text-sm font-bold text-[#153b25] shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-lime-300"
              >
                Explorar orientações
                <span className="ml-3" aria-hidden="true">↓</span>
              </a>

              <Link
                href="/pecuaria/equinos/orientacoes/agua"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                Gestão da água
              </Link>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-1 gap-5 border-t border-white/25 pt-6 sm:grid-cols-3">
              <div>
                <p className="text-lg font-bold text-white">Nutrição</p>
                <p className="mt-1 text-sm text-white/70">Dieta equilibrada</p>
              </div>
              <div>
                <p className="text-lg font-bold text-white">Prevenção</p>
                <p className="mt-1 text-sm text-white/70">Cuidados diários</p>
              </div>
              <div>
                <p className="text-lg font-bold text-white">Bem-estar</p>
                <p className="mt-1 text-sm text-white/70">Maneio responsável</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:items-center md:gap-16 md:py-24 lg:px-12">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-green-800">
            Nutrição equina
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#183b27] sm:text-4xl">
            Alimentar bem é cuidar da saúde todos os dias.
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
            <p className="text-justify">
              A alimentação influencia a condição corporal, a saúde
              digestiva, a capacidade de trabalho e o bem-estar dos equinos.
              Uma dieta equilibrada deve considerar a idade, o peso, a
              atividade, a saúde e as características individuais do animal.
            </p>

            <p className="text-justify">
              Em Angola, a disponibilidade de pastagens e forragens pode
              variar de acordo com a região e a época do ano. O planeamento
              alimentar deve considerar os recursos locais, a conservação dos
              alimentos e a necessidade de água limpa.
            </p>
          </div>

          <div className="mt-8 rounded-r-2xl border-l-4 border-green-600 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-sm leading-7 text-slate-700">
              <strong className="text-green-900">
                Princípio fundamental:
              </strong>{" "}
              assegurar forragem de qualidade, água limpa e uma dieta
              adaptada ao estado de saúde e à atividade do cavalo.
            </p>
          </div>
        </div>

        <div className="relative pb-8">
          <div className="overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src={imagens.feno}
              alt="Cavalo junto a feno"
              loading="lazy"
              className="h-[340px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[450px]"
            />
          </div>

          <div className="absolute bottom-0 left-4 right-4 rounded-2xl border border-green-100 bg-white p-5 shadow-xl sm:left-8 sm:right-8 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-800">
              Atenção ao maneio
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Faça alterações alimentares gradualmente. Mudanças bruscas
              podem perturbar a digestão e aumentar o risco de problemas
              de saúde.
            </p>
          </div>
        </div>
      </section>

      {/* ORIENTAÇÕES */}
      <section id="orientacoes" className="scroll-mt-6 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-green-800">
                Guia prático
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#183b27] sm:text-4xl">
                Os pilares da alimentação equina
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Explore os temas para conhecer as boas práticas, reconhecer
                riscos e melhorar o acompanhamento alimentar dos cavalos.
              </p>
            </div>

            <p className="shrink-0 text-sm font-semibold text-green-800">
              6 orientações técnicas
            </p>
          </div>

          <div className="mt-14 space-y-16 lg:space-y-24">
            {temas.map((tema, index) => {
              const aberto = temaAberto === tema.numero;

              return (
                <article
                  key={tema.numero}
                  className="grid items-center gap-7 md:grid-cols-2 md:gap-12 lg:gap-16"
                >
                  <div
                    className={`group relative overflow-hidden rounded-[1.75rem] bg-[#e7eee5] ${
                      index % 2 === 1 ? "md:order-2" : ""
                    }`}
                  >
                    <img
                      src={tema.imagem}
                      alt={tema.alt}
                      loading="lazy"
                      className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[360px] lg:h-[410px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b291b]/60 via-transparent to-transparent" />
                    <span className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-[#103b27]/80 px-4 py-2 text-xs font-bold tracking-[0.16em] text-white backdrop-blur-sm">
                      ORIENTAÇÃO {tema.numero}
                    </span>
                  </div>

                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-bold tracking-[0.2em] text-green-700">
                        {tema.numero}
                      </span>
                      <span className="h-px w-12 bg-green-300" />
                      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                        Guia de maneio
                      </span>
                    </div>

                    <h3 className="mt-5 text-2xl font-bold leading-tight text-[#183b27] sm:text-3xl">
                      {tema.titulo}
                    </h3>

                    <p className="mt-3 text-base font-semibold text-green-800">
                      {tema.resumo}
                    </p>

                    <p className="mt-5 text-justify text-[15px] leading-8 text-slate-600">
                      {tema.conteudo[0]}
                    </p>

                    <button
                      type="button"
                      onClick={() =>
                        setTemaAberto(aberto ? null : tema.numero)
                      }
                      aria-expanded={aberto}
                      aria-controls={`conteudo-${tema.numero}`}
                      className="mt-6 inline-flex items-center gap-3 rounded-full border border-green-200 px-5 py-3 text-sm font-bold text-green-900 transition duration-300 hover:border-green-700 hover:bg-green-50"
                    >
                      {aberto ? "Ocultar orientações" : "Ler orientações completas"}
                      <span aria-hidden="true">{aberto ? "−" : "+"}</span>
                    </button>

                    {aberto && (
                      <div
                        id={`conteudo-${tema.numero}`}
                        className="mt-6 rounded-2xl border border-green-100 bg-[#f5f8f2] p-5 sm:p-6"
                      >
                        <h4 className="text-base font-bold text-green-950">
                          O que deve saber
                        </h4>

                        <div className="mt-4 space-y-4">
                          {tema.conteudo.map((paragrafo, i) => (
                            <p
                              key={i}
                              className="text-justify text-sm leading-7 text-slate-600"
                            >
                              {paragrafo}
                            </p>
                          ))}
                        </div>

                        <h4 className="mt-7 border-t border-green-200 pt-5 text-base font-bold text-green-950">
                          Cuidados recomendados
                        </h4>

                        <ul className="mt-4 space-y-3">
                          {tema.cuidados.map((cuidado) => (
                            <li
                              key={cuidado}
                              className="flex items-start gap-3 text-sm leading-7 text-slate-600"
                            >
                              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green-600" />
                              <span>{cuidado}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* LISTA DE VERIFICAÇÃO */}
      <section className="relative isolate overflow-hidden bg-[#123b27] py-16 sm:py-24">
        <img
          src={imagens.cavaloCampo}
          alt="Cavalo num ambiente rural"
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[#092719]/90" />

        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-[1fr_0.85fr] md:items-center lg:px-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-lime-300">
              Rotina do produtor
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl">
              Uma boa alimentação começa com observação e consistência.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/85">
              A observação diária permite reconhecer alterações no consumo,
              no comportamento e no estado geral do cavalo. Utilize esta
              lista como apoio ao acompanhamento da rotina.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white">
                  Verificação diária
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Assinale cada ponto depois de o verificar.
                </p>
              </div>
              <span className="text-sm font-bold text-lime-300">
                {totalVerificado}/{verificacoes.length}
              </span>
            </div>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/15">
              <div
                className="h-full rounded-full bg-lime-300 transition-all duration-300"
                style={{
                  width: `${(totalVerificado / verificacoes.length) * 100}%`,
                }}
              />
            </div>

            <div className="mt-6 space-y-4">
              {verificacoes.map((item, index) => (
                <label
                  key={item}
                  className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-black/10 p-3 transition hover:bg-white/10"
                >
                  <input
                    type="checkbox"
                    checked={verificacao[index]}
                    onChange={(event) => {
                      setVerificacao((atual) =>
                        atual.map((valor, i) =>
                          i === index ? event.target.checked : valor
                        )
                      );
                    }}
                    className="mt-1 h-4 w-4 shrink-0 accent-lime-400"
                  />
                  <span
                    className={`text-sm leading-6 ${
                      verificacao[index]
                        ? "text-lime-200"
                        : "text-white/90"
                    }`}
                  >
                    {item}
                  </span>
                </label>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setVerificacao(Array(5).fill(false))}
              className="mt-5 text-sm font-semibold text-white/75 underline decoration-white/30 underline-offset-4 transition hover:text-white"
            >
              Reiniciar verificação
            </button>

            {totalVerificado === verificacoes.length && (
              <p className="mt-4 rounded-xl bg-lime-300/15 p-3 text-sm leading-6 text-lime-100">
                Todos os pontos da lista foram assinalados. Continue a
                acompanhar o animal e registe qualquer alteração observada.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* OUTRAS ORIENTAÇÕES */}
      <section className="bg-[#f5f7f2] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-green-800">
              Continue a aprender
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#183b27] sm:text-4xl">
              Outros cuidados essenciais dos equinos
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-600">
              A nutrição deve ser acompanhada por uma gestão adequada da
              água e por cuidados regulares com os cascos.
            </p>
          </div>

          <div className="mt-9 grid gap-6 md:grid-cols-2">
            <Link
              href="/pecuaria/equinos/orientacoes/agua"
              className="group overflow-hidden rounded-[1.5rem] border border-green-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={imagens.cavaloNatureza}
                  alt="Cavalo num ambiente natural"
                  loading="lazy"
                  className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">
                  Hidratação e saúde
                </p>
                <h3 className="mt-3 text-xl font-bold text-[#183b27]">
                  Água dos equinos
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Qualidade da água, acesso aos bebedouros e cuidados
                  essenciais para a hidratação.
                </p>
                <span className="mt-5 inline-block text-sm font-bold text-green-800 group-hover:text-green-600">
                  Consultar orientação →
                </span>
              </div>
            </Link>

            <Link
              href="/pecuaria/equinos/orientacoes/cascos"
              className="group overflow-hidden rounded-[1.5rem] border border-green-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={imagens.cavaloSaude}
                  alt="Cavalo num ambiente de campo"
                  loading="lazy"
                  className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">
                  Saúde locomotora
                </p>
                <h3 className="mt-3 text-xl font-bold text-[#183b27]">
                  Cuidados com os cascos
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Inspeção, limpeza, manutenção e prevenção de lesões
                  nos cascos dos equinos.
                </p>
                <span className="mt-5 inline-block text-sm font-bold text-green-800 group-hover:text-green-600">
                  Consultar orientação →
                </span>
              </div>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/pecuaria"
              className="inline-flex items-center justify-center rounded-full bg-green-800 px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-green-700"
            >
              Voltar à Pecuária
            </Link>
          </div>
        </div>
      </section>

      {/* NOTA TÉCNICA */}
      <footer className="border-t border-green-100 bg-white px-5 py-7 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs leading-6 text-slate-500">
            Conteúdo de orientação geral para o maneio alimentar de equinos.
            As necessidades nutricionais devem ser avaliadas individualmente
            com apoio de um médico veterinário ou técnico qualificado.
            As fotografias são ilustrativas e não constituem prova de
            práticas realizadas em Angola.
          </p>
        </div>
      </footer>
    </main>
  );
}
