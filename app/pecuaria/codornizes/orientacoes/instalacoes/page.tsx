
"use client";

import Link from "next/link";
import { useState } from "react";

const secoes = [
  {
    id: "instalacoes",
    numero: "01",
    titulo: "Escolha do local",
    resumo: "Localização, terreno e protecção da exploração.",
    conteudo: [
      "Escolha um terreno firme, drenado e sem acumulação de água. A instalação deve ficar afastada de fontes de contaminação, zonas de lixo, esgotos e locais com circulação frequente de animais estranhos à exploração.",
      "Sempre que possível, organize a exploração de modo a separar a recepção de aves, a criação, o armazenamento de alimentos e a gestão dos resíduos. Esta organização reduz a circulação desnecessária e facilita a higiene.",
      "Em Angola, considere a exposição ao sol, a intensidade das chuvas, os ventos predominantes e as condições locais de abastecimento de água e energia. O edifício deve proteger as aves tanto do calor excessivo como do frio e da humidade."
    ],
  },
  {
    id: "gaiolas",
    numero: "02",
    titulo: "Gaiolas e alojamento",
    resumo: "Estrutura, espaço disponível e segurança das aves.",
    conteudo: [
      "As gaiolas devem ser resistentes, estáveis, fáceis de limpar e construídas com materiais que não provoquem ferimentos. As superfícies e as extremidades da estrutura não devem apresentar pontas, arames soltos ou zonas cortantes.",
      "O espaço disponível deve permitir que as codornizes se movimentem, tenham acesso à água e à ração e expressem comportamentos normais. A densidade depende da idade, do peso das aves, do sistema de alojamento, da ventilação e das recomendações técnicas aplicáveis.",
      "Não existe uma dimensão única de gaiola adequada a todas as explorações. Antes de construir ou comprar equipamentos, confirme as medidas e a capacidade com um técnico de produção animal, tendo em conta o sistema de criação e o bem-estar das aves.",
      "Os tabuleiros de recolha de dejectos devem ser acessíveis para limpeza. Quando se utiliza um sistema de gaiolas, a estrutura deve permitir inspecionar as aves diariamente e retirar rapidamente qualquer animal doente ou ferido."
    ],
  },
  {
    id: "ambiente",
    numero: "03",
    titulo: "Ventilação e temperatura",
    resumo: "Renovação do ar e controlo do ambiente interno.",
    conteudo: [
      "A ventilação renova o ar e ajuda a remover o excesso de humidade, poeiras, odores e gases provenientes dos dejectos. Uma instalação fechada sem renovação de ar pode prejudicar a saúde e o desempenho das aves.",
      "Planeie entradas e saídas de ar sem criar correntes directas sobre as codornizes. A ventilação deve ser adaptada à dimensão do edifício, à quantidade de aves, à temperatura exterior e à fase de produção.",
      "Nas regiões quentes de Angola, privilegie a sombra, a cobertura com bom comportamento térmico e a circulação de ar. Evite a exposição prolongada ao sol directo e observe sinais de desconforto, como respiração acelerada, asas afastadas do corpo ou concentração anormal das aves.",
      "As aves jovens necessitam de condições térmicas diferentes das adultas. Utilize equipamento apropriado e acompanhe a temperatura ao nível das aves, ajustando gradualmente o ambiente conforme a idade e a resposta do lote."
    ],
  },
  {
    id: "iluminacao",
    numero: "04",
    titulo: "Iluminação",
    resumo: "Luz adequada para o crescimento e a postura.",
    conteudo: [
      "A iluminação deve ser distribuída de forma uniforme, evitando áreas excessivamente escuras e focos de luz demasiado intensos. A instalação eléctrica deve ser protegida contra humidade, poeiras e contacto acidental com as aves.",
      "Na produção de ovos, o programa de iluminação influencia a actividade reprodutiva. A duração e a intensidade da luz devem ser definidas de acordo com a idade, a linhagem, o objectivo produtivo e as orientações técnicas.",
      "Evite alterações bruscas no horário de iluminação. Utilize um temporizador quando necessário e assegure um período de repouso adequado, sem manter as aves permanentemente expostas à luz."
    ],
  },
  {
    id: "equipamentos",
    numero: "05",
    titulo: "Comedouros e bebedouros",
    resumo: "Acesso contínuo à ração e à água limpa.",
    conteudo: [
      "Disponibilize comedouros e bebedouros em quantidade e distribuição suficientes para reduzir a competição. Todas as aves devem conseguir alimentar-se e beber sem obstáculos.",
      "Os equipamentos devem ser adequados ao tamanho das codornizes e à fase de criação. A altura, a capacidade e a localização precisam de ser verificadas à medida que as aves crescem.",
      "A água deve estar limpa e disponível continuamente. Verifique diariamente fugas, obstruções, sujidade e funcionamento dos bebedouros. A água derramada deve ser controlada para evitar humidade excessiva na instalação.",
      "Armazene a ração num local seco, ventilado e protegido de roedores, insectos e outros animais. Utilize recipientes fechados e aplique o princípio de primeiro a entrar, primeiro a sair."
    ],
  },
  {
    id: "higiene",
    numero: "06",
    titulo: "Limpeza e desinfecção",
    resumo: "Rotina de higiene e prevenção de doenças.",
    conteudo: [
      "Retire regularmente os dejectos, as penas acumuladas, os restos de ração e outros resíduos. A frequência depende do sistema de alojamento, do número de aves e das condições ambientais.",
      "Antes de desinfectar, remova a matéria orgânica e lave as superfícies com um produto de limpeza apropriado. A desinfecção é mais eficaz quando a superfície está devidamente preparada.",
      "Utilize apenas desinfectantes adequados às instalações pecuárias, respeitando a diluição, o tempo de contacto e as instruções do fabricante. Nunca misture produtos químicos e mantenha as aves afastadas quando o rótulo ou o procedimento técnico assim o exigir.",
      "Sempre que possível, faça a limpeza completa entre lotes, deixe as instalações secar e inspeccione os equipamentos antes de introduzir novas aves."
    ],
  },
  {
    id: "biosseguranca",
    numero: "07",
    titulo: "Biossegurança",
    resumo: "Controlo de visitas, pragas e entrada de animais.",
    conteudo: [
      "Limite as visitas e registe a entrada de pessoas, equipamentos e animais. Sempre que necessário, utilize calçado e vestuário exclusivos da exploração e procedimentos de limpeza à entrada.",
      "Impeça a entrada de roedores, aves silvestres, cães, gatos e outros animais que possam transportar agentes contaminantes. Proteja os alimentos e elimine correctamente os resíduos.",
      "Observe diariamente o comportamento, o consumo de água e ração, a mortalidade e o aspecto das aves. Uma alteração súbita pode indicar um problema que exige avaliação.",
      "Em caso de mortalidade anormal ou suspeita de doença transmissível, isole a área afectada, evite movimentar aves e equipamentos e procure assistência veterinária. Não utilize medicamentos por iniciativa própria."
    ],
  },
  {
    id: "preparacao",
    numero: "08",
    titulo: "Preparação antes da chegada",
    resumo: "Verificações essenciais para receber o primeiro lote.",
    conteudo: [
      "Confirme que o edifício está limpo, seco, ventilado e protegido contra predadores e pragas. Verifique se as gaiolas e os equipamentos estão firmes e sem defeitos.",
      "Teste previamente o abastecimento de água, os bebedouros, os comedouros, a iluminação e os equipamentos de controlo térmico. Resolva as falhas antes da chegada das aves.",
      "Prepare a ração adequada à fase de criação, água potável, material de registo e contactos de assistência veterinária. Organize também um procedimento para recolha e gestão dos resíduos.",
      "Na recepção, siga as instruções do fornecedor e do técnico responsável. Observe as aves com frequência nos primeiros dias e confirme que encontram água, alimento e condições ambientais apropriadas."
    ],
  },
];

const verificacoes = [
  "Local seco, drenado e protegido",
  "Gaiolas estáveis e sem arestas cortantes",
  "Ventilação e controlo térmico funcionais",
  "Iluminação adequada à fase de criação",
  "Comedouros e bebedouros limpos",
  "Água e ração correctamente armazenadas",
  "Plano de limpeza e desinfecção definido",
  "Protecção contra roedores e animais estranhos",
  "Contactos de assistência veterinária disponíveis",
];

export default function InstalacoesCodornizesPage() {
  const [secaoAtiva, setSecaoAtiva] = useState<string | null>(null);
  const [verificados, setVerificados] = useState<string[]>([]);

  const secaoSelecionada = secoes.find((secao) => secao.id === secaoAtiva);

  function alternarVerificacao(item: string) {
    setVerificados((actual) =>
      actual.includes(item)
        ? actual.filter((valor) => valor !== item)
        : [...actual, item]
    );
  }

  return (
    <main className="min-h-screen bg-[#f3f7f2] text-[#17221b]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#123d26] via-[#166534] to-[#228447] px-5 py-14 text-white sm:px-8 lg:px-12 lg:py-20">
        <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-white/5" />
        <div className="absolute -bottom-28 right-1/4 h-80 w-80 rounded-full bg-lime-300/10 blur-2xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Link
              href="/pecuaria/codornizes"
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10"
            >
              <span aria-hidden="true">←</span>
              Voltar à criação de codornizes
            </Link>

            <div className="mb-5 flex items-center gap-3">
              <span className="rounded-full bg-lime-300 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-green-950">
                Orientação técnica 01
              </span>
              <span className="text-sm text-green-100">Produção animal</span>
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Instalações para a criação de codornizes
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-green-50 sm:text-lg">
              Aprenda a preparar um espaço seguro, higiénico e funcional para
              alojar codornizes, proteger a saúde das aves e criar condições
              para uma produção sustentável em Angola.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#conteudos"
                className="rounded-xl bg-white px-6 py-3 font-bold text-green-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-green-50"
              >
                Explorar conteúdos
              </a>
              <a
                href="#lista-verificacao"
                className="rounded-xl border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white/10"
              >
                Lista de verificação
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="rounded-[2rem] border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-sm sm:p-7">
              <div className="rounded-2xl bg-[#eaf5e8] p-5 text-green-950">
                <svg
                  viewBox="0 0 360 250"
                  role="img"
                  aria-label="Ilustração técnica de uma instalação para criação de codornizes"
                  className="w-full"
                >
                  <rect x="12" y="12" width="336" height="226" rx="18" fill="#eaf5e8" />
                  <path d="M38 91 L180 28 L322 91" fill="#a7c9a0" stroke="#285c36" strokeWidth="5" strokeLinejoin="round" />
                  <path d="M55 88 V207 H305 V88" fill="#f9fcf6" stroke="#285c36" strokeWidth="5" />
                  <path d="M45 118 H315 M45 155 H315 M45 192 H315" stroke="#a8bfa5" strokeWidth="2" strokeDasharray="5 5" />
                  <rect x="82" y="106" width="196" height="82" rx="4" fill="#d6e7d2" stroke="#285c36" strokeWidth="3" />
                  <path d="M82 133 H278 M82 160 H278 M115 106 V188 M148 106 V188 M181 106 V188 M214 106 V188 M247 106 V188" stroke="#5e8e60" strokeWidth="2" />
                  <path d="M74 193 H286" stroke="#285c36" strokeWidth="5" strokeLinecap="round" />
                  <path d="M92 199 V212 M268 199 V212" stroke="#285c36" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="125" cy="122" r="8" fill="#b98951" />
                  <ellipse cx="126" cy="132" rx="12" ry="8" fill="#b98951" />
                  <circle cx="173" cy="149" r="8" fill="#b98951" />
                  <ellipse cx="174" cy="159" rx="12" ry="8" fill="#b98951" />
                  <circle cx="231" cy="121" r="8" fill="#b98951" />
                  <ellipse cx="232" cy="131" rx="12" ry="8" fill="#b98951" />
                  <path d="M126 139 V145 M174 166 V172 M232 138 V144" stroke="#76502c" strokeWidth="2" />
                  <path d="M45 219 H315" stroke="#7ca775" strokeWidth="3" strokeLinecap="round" />
                  <path d="M26 77 H61 M299 77 H334" stroke="#5e8e60" strokeWidth="3" strokeLinecap="round" />
                  <path d="M32 67 L42 77 L32 87 M328 67 L318 77 L328 87" fill="none" stroke="#5e8e60" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="mt-3 text-center text-sm font-semibold">
                  Abrigo, ventilação, água e higiene
                </p>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl bg-white/10 p-3">
                  <span className="block text-2xl">01</span>
                  <span className="mt-1 block text-xs text-green-50">Alojamento</span>
                </div>
                <div className="rounded-xl bg-white/10 p-3">
                  <span className="block text-2xl">02</span>
                  <span className="mt-1 block text-xs text-green-50">Ambiente</span>
                </div>
                <div className="rounded-xl bg-white/10 p-3">
                  <span className="block text-2xl">03</span>
                  <span className="mt-1 block text-xs text-green-50">Biossegurança</span>
                </div>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-green-100">
              Esquema ilustrativo. O projecto deve ser adaptado à exploração.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              numero: "01",
              titulo: "Bem-estar animal",
              texto: "Espaço adequado, segurança e observação diária.",
            },
            {
              numero: "02",
              titulo: "Ambiente controlado",
              texto: "Ventilação, temperatura e iluminação ajustadas.",
            },
            {
              numero: "03",
              titulo: "Higiene contínua",
              texto: "Limpeza organizada e controlo dos resíduos.",
            },
            {
              numero: "04",
              titulo: "Prevenção",
              texto: "Barreiras sanitárias e controlo de pragas.",
            },
          ].map((item) => (
            <article
              key={item.numero}
              className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 font-black text-green-800">
                {item.numero}
              </span>
              <h2 className="mt-4 text-lg font-extrabold">{item.titulo}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.texto}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="conteudos" className="mx-auto max-w-7xl px-5 pb-12 sm:px-8 lg:px-12">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-green-700">
            Manual prático
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            Como preparar as instalações
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Seleccione um tema para consultar as recomendações e os cuidados
            necessários em cada etapa da preparação da exploração.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {secoes.map((secao) => (
            <button
              key={secao.id}
              type="button"
              onClick={() => setSecaoAtiva(secao.id)}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-green-700/25">
                  {secao.numero}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-xl text-green-800 transition group-hover:bg-green-700 group-hover:text-white">
                  ↗
                </span>
              </div>
              <h3 className="mt-5 text-xl font-extrabold">{secao.titulo}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                {secao.resumo}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 font-bold text-green-800">
                Consultar orientação <span aria-hidden="true">→</span>
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12 sm:px-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl bg-white p-7 shadow-sm sm:p-9">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-green-700">
              Atenção técnica
            </p>
            <h2 className="mt-3 text-2xl font-black">
              Não construa sem planear
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Antes de definir o número de gaiolas ou a capacidade do edifício,
              estime o tamanho do lote, a finalidade da produção, os custos de
              água e energia, a ventilação necessária e a capacidade diária de
              limpeza. Um dimensionamento inadequado pode aumentar a humidade,
              a competição pelo alimento e o risco sanitário.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              As dimensões e densidades devem ser confirmadas com orientação
              técnica apropriada à linhagem e à fase de criação. Esta página é
              material educativo e não substitui uma avaliação no local.
            </p>
          </article>

          <article className="rounded-3xl bg-green-900 p-7 text-white shadow-lg sm:p-9">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-lime-300">
              Adaptação ao contexto angolano
            </p>
            <h2 className="mt-3 text-2xl font-black">
              Prepare-se para o clima local
            </h2>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-green-50">
              <li className="flex gap-3">
                <span className="mt-0.5 text-lime-300">✓</span>
                <span>Use cobertura e sombra que reduzam o aquecimento do edifício.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-lime-300">✓</span>
                <span>Garanta drenagem adequada durante o período das chuvas.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-lime-300">✓</span>
                <span>Proteja o armazenamento da ração contra humidade e pragas.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-lime-300">✓</span>
                <span>Tenha um plano para interrupções de água e energia.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-lime-300">✓</span>
                <span>Ajuste as instalações às condições da província e ao sistema de criação.</span>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section
        id="lista-verificacao"
        className="mx-auto max-w-7xl px-5 pb-14 sm:px-8 lg:px-12"
      >
        <div className="overflow-hidden rounded-3xl border border-green-100 bg-white shadow-sm">
          <div className="bg-green-50 p-7 sm:p-9">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-green-700">
              Antes de receber as aves
            </p>
            <h2 className="mt-2 text-3xl font-black">
              Lista de verificação da instalação
            </h2>
            <p className="mt-3 text-slate-600">
              Marque os itens que já foram verificados na sua exploração.
            </p>
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-green-200">
              <div
                className="h-full rounded-full bg-green-700 transition-all duration-300"
                style={{
                  width: `${(verificados.length / verificacoes.length) * 100}%`,
                }}
              />
            </div>
            <p className="mt-2 text-sm font-bold text-green-900">
              {verificados.length} de {verificacoes.length} itens verificados
            </p>
          </div>

          <div className="grid gap-3 p-6 sm:grid-cols-2 sm:p-9">
            {verificacoes.map((item) => {
              const marcado = verificados.includes(item);

              return (
                <label
                  key={item}
                  className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition ${
                    marcado
                      ? "border-green-300 bg-green-50"
                      : "border-slate-200 bg-white hover:border-green-200"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={marcado}
                    onChange={() => alternarVerificacao(item)}
                    className="mt-1 h-4 w-4 accent-green-700"
                  />
                  <span className="text-sm leading-6">{item}</span>
                </label>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-green-100 bg-white px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-green-700">
              Próxima orientação
            </p>
            <h2 className="mt-2 text-2xl font-black">
              Alimentação das codornizes
            </h2>
            <p className="mt-2 text-slate-600">
              Ração, água, necessidades nutricionais e maneio alimentar.
            </p>
          </div>
          <Link
            href="/pecuaria/codornizes/orientacoes/alimentacao"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-green-800 px-6 py-4 font-bold text-white shadow-md transition hover:bg-green-900"
          >
            Próxima página <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {secaoSelecionada && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
          onClick={() => setSecaoAtiva(null)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-modal-instalacoes"
            onClick={(event) => event.stopPropagation()}
            className="max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
          >
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-green-100 bg-white p-6 sm:p-8">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-green-700">
                  Orientação técnica {secaoSelecionada.numero}
                </p>
                <h2
                  id="titulo-modal-instalacoes"
                  className="mt-2 text-2xl font-black sm:text-3xl"
                >
                  {secaoSelecionada.titulo}
                </h2>
                <p className="mt-2 text-slate-500">
                  {secaoSelecionada.resumo}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSecaoAtiva(null)}
                aria-label="Fechar orientação"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl transition hover:bg-green-100"
              >
                ×
              </button>
            </div>

            <div className="space-y-5 p-6 sm:p-8">
              {secaoSelecionada.conteudo.map((paragrafo, indice) => (
                <p
                  key={indice}
                  className="text-justify leading-8 text-slate-700"
                >
                  {paragrafo}
                </p>
              ))}

              <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
                <h3 className="font-extrabold text-green-900">
                  Aplicação prática
                </h3>
                <p className="mt-2 leading-7 text-green-950">
                  Registe as verificações realizadas, identifique os problemas
                  encontrados e corrija as falhas antes de aumentar o número de
                  aves. Sempre que necessário, solicite a avaliação de um
                  técnico de produção animal ou médico veterinário.
                </p>
              </div>
            </div>

            <div className="flex justify-end border-t border-slate-100 p-5 sm:px-8">
              <button
                type="button"
                onClick={() => setSecaoAtiva(null)}
                className="rounded-xl bg-green-800 px-6 py-3 font-bold text-white transition hover:bg-green-900"
              >
                Concluir leitura
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
