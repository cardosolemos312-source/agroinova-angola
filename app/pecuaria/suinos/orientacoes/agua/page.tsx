
import Link from "next/link";

type Imagem = {
  src: string;
  href: string;
  alt: string;
  legenda: string;
  fonte: string;
};

const imagens: Imagem[] = [
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Piglets_drinking.jpg?width=1600",
    href: "https://commons.wikimedia.org/wiki/File:Piglets_drinking.jpg",
    alt: "Suínos utilizando sistema de fornecimento de água",
    legenda:
      "O acesso permanente à água é um dos componentes fundamentais do maneio de suínos.",
    fonte: "Wikimedia Commons",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Pig_farm.jpg?width=1600",
    href: "https://commons.wikimedia.org/",
    alt: "Instalações para criação de suínos",
    legenda:
      "As instalações devem permitir que os animais tenham acesso adequado à água e facilitar a limpeza dos equipamentos.",
    fonte: "Wikimedia Commons",
  },
];

const categorias = [
  {
    titulo: "Leitões",
    texto:
      "Os leitões devem ter acesso à água limpa e de boa qualidade desde cedo. A disponibilidade deve ser observada principalmente durante a transição alimentar e após o desmame, quando aumenta a importância do consumo de água para acompanhar a utilização de alimentos sólidos.",
  },
  {
    titulo: "Suínos em crescimento e acabamento",
    texto:
      "À medida que os animais crescem, aumentam as necessidades de água. O produtor deve observar se todos os animais conseguem chegar aos bebedouros sem competição excessiva e verificar diariamente o funcionamento dos equipamentos.",
  },
  {
    titulo: "Porcas gestantes",
    texto:
      "As porcas gestantes precisam de acesso regular à água. A disponibilidade inadequada pode afectar o consumo de alimento, o comportamento e o bem-estar. O sistema deve ser dimensionado de acordo com o número de animais e o tipo de instalação.",
  },
  {
    titulo: "Porcas em lactação",
    texto:
      "Durante a lactação, a necessidade de água é particularmente importante devido à produção de leite. A falta de água pode reduzir o consumo de alimento e comprometer a capacidade da porca de sustentar adequadamente a ninhada.",
  },
  {
    titulo: "Reprodutores",
    texto:
      "Os machos reprodutores também devem dispor de água limpa e acessível. A observação do consumo e do comportamento ajuda a identificar problemas relacionados com o equipamento ou com a qualidade da água.",
  },
];

const problemas = [
  {
    titulo: "Bebedouro sem funcionamento",
    texto:
      "Um bebedouro obstruído, com baixa pressão ou com outro problema mecânico pode impedir o acesso à água mesmo quando existe água disponível na exploração.",
  },
  {
    titulo: "Água contaminada",
    texto:
      "A presença de matéria orgânica, fezes, sedimentos ou outros contaminantes pode reduzir a qualidade da água e aumentar os riscos sanitários.",
  },
  {
    titulo: "Poucos pontos de fornecimento",
    texto:
      "Quando existem poucos bebedouros para muitos animais, podem ocorrer competição e dificuldade de acesso, principalmente em grupos numerosos.",
  },
  {
    titulo: "Temperaturas elevadas",
    texto:
      "Em períodos de calor, o consumo de água pode aumentar. As instalações devem permitir acesso contínuo à água e reduzir condições que provoquem aquecimento excessivo do sistema.",
  },
];

export default function AguaSuinosPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <img
            src={imagens[0].src}
            alt={imagens[0].alt}
            className="h-full w-full object-cover opacity-45"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-4xl text-white">
            <Link
              href="/pecuaria"
              className="mb-6 inline-block text-sm font-medium text-slate-200 hover:text-white"
            >
              ← Voltar para Pecuária
            </Link>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">
              Suínos · Orientações técnicas
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Água na criação de suínos
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              A água é um dos recursos mais importantes para a manutenção da
              saúde, do bem-estar, do consumo de alimento e do desempenho
              produtivo dos suínos. O fornecimento deve ser contínuo, acessível
              e acompanhado quanto à qualidade e ao funcionamento dos
              equipamentos.
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              Por que a água é fundamental?
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Água não é apenas um complemento da alimentação
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              A água participa de várias funções fisiológicas do organismo dos
              suínos. Está relacionada com a regulação da temperatura corporal,
              digestão, circulação, excreção e outras funções metabólicas.
              Também influencia o consumo de alimento e o desempenho dos
              animais.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Por esta razão, uma exploração pode possuir uma alimentação
              adequada e ainda assim apresentar problemas de produção se o
              sistema de fornecimento de água estiver mal dimensionado,
              contaminado ou com funcionamento irregular.
            </p>

            <div className="mt-6 border-l-4 border-sky-600 bg-white p-5 shadow-sm">
              <p className="font-semibold text-slate-900">
                Princípio fundamental
              </p>
              <p className="mt-2 leading-7 text-slate-600">
                O produtor deve verificar diariamente se os animais conseguem
                encontrar e utilizar facilmente os pontos de fornecimento de
                água.
              </p>
            </div>
          </div>

          <figure className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <a
              href={imagens[0].href}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imagens[0].src}
                alt={imagens[0].alt}
                className="h-[420px] w-full object-cover"
              />
            </a>

            <figcaption className="p-4 text-sm leading-6 text-slate-600">
              {imagens[0].legenda}
              <span className="mt-1 block text-xs text-slate-500">
                Fonte: {imagens[0].fonte}
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* QUALIDADE */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              Qualidade da água
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              A água deve ser limpa e apropriada para consumo animal
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              A aparência da água não é suficiente para determinar a sua
              qualidade. Uma água visualmente limpa pode apresentar problemas
              microbiológicos ou químicos. Por isso, sempre que houver
              suspeita de contaminação ou problemas recorrentes no efectivo,
              recomenda-se avaliação da fonte e, quando possível, análise
              laboratorial.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {[
                "Evitar fontes próximas de locais de acumulação de resíduos.",
                "Proteger poços, reservatórios e outras fontes contra contaminação.",
                "Limpar regularmente bebedouros e reservatórios.",
                "Evitar acumulação de lodo, algas e matéria orgânica.",
                "Observar alterações de cor, cheiro ou sabor.",
                "Investigar problemas sanitários associados ao consumo de água.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-5"
                >
                  <p className="leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="bg-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-700">
            Necessidades por categoria
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            O maneio da água deve acompanhar a fase de produção
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-700">
            A necessidade de água não é igual em todos os animais. Idade,
            peso, temperatura ambiente, alimentação, estado fisiológico e
            sistema de produção influenciam o consumo.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categorias.map((categoria) => (
              <article
                key={categoria.titulo}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {categoria.titulo}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {categoria.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BEBEDOUROS */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <figure className="order-2 overflow-hidden rounded-2xl bg-white shadow-lg lg:order-1">
            <a
              href={imagens[1].href}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imagens[1].src}
                alt={imagens[1].alt}
                className="h-[420px] w-full object-cover"
              />
            </a>

            <figcaption className="p-4 text-sm leading-6 text-slate-600">
              {imagens[1].legenda}
              <span className="mt-1 block text-xs text-slate-500">
                Fonte: {imagens[1].fonte}
              </span>
            </figcaption>
          </figure>

          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              Equipamentos
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Bebedouros e acesso à água
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              O sistema de fornecimento deve ser adequado ao tipo de
              instalação e ao tamanho do efectivo. Bebedouros mal posicionados,
              com altura inadequada, baixa vazão ou sujeitos a obstruções podem
              limitar o consumo.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Verificar diariamente se existe fluxo de água.",
                "Manter os bebedouros limpos.",
                "Evitar vazamentos que mantenham o piso permanentemente húmido.",
                "Posicionar os equipamentos de modo a permitir acesso aos animais.",
                "Observar se animais menores conseguem utilizar o sistema.",
                "Controlar o funcionamento depois de intervenções ou reparações.",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-600" />
                  <p className="leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CALOR */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-sky-200">
              Maneio em períodos quentes
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Água e conforto térmico
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Os suínos são particularmente sensíveis ao stress térmico. Em
              condições de temperatura elevada, a disponibilidade de água
              torna-se ainda mais importante. O produtor deve observar o
              comportamento dos animais, o consumo de água e as condições de
              ventilação das instalações.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Em explorações localizadas em regiões de Angola onde as
              temperaturas podem atingir valores elevados, é importante
              combinar o fornecimento adequado de água com sombra, ventilação,
              redução de fontes de calor e organização adequada das instalações.
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-700">
            Problemas frequentes
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            O que deve ser observado na exploração?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {problemas.map((problema) => (
              <article
                key={problema.titulo}
                className="rounded-2xl border border-slate-200 p-6"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {problema.titulo}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {problema.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ANGOLA */}
      <section className="bg-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-sky-700">
              Contexto angolano
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Gestão da água nas explorações de suínos em Angola
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Nas explorações familiares e comerciais em Angola, o sistema de
              água pode variar desde fontes locais e reservatórios até sistemas
              com distribuição por tubagem. Independentemente da escala, o
              princípio permanece o mesmo: os animais precisam de acesso
              regular a água adequada e os equipamentos devem ser mantidos em
              condições de funcionamento.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Em locais onde o abastecimento é irregular, o produtor deve
              avaliar a capacidade de armazenamento e estabelecer procedimentos
              para evitar interrupções. Reservatórios devem ser protegidos e
              mantidos limpos, evitando que animais, poeira, resíduos ou outros
              contaminantes tenham acesso à água armazenada.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              A disponibilidade de água também deve ser considerada no
              planeamento de novas instalações. Antes de aumentar o número de
              animais, é importante verificar se a fonte e o sistema de
              distribuição conseguem acompanhar a procura.
            </p>
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-700">
            Checklist do produtor
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Verificação diária da água
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Existe água disponível nos pontos de fornecimento?",
              "Os bebedouros estão a funcionar correctamente?",
              "A água apresenta aspecto normal?",
              "Os reservatórios estão protegidos contra contaminação?",
              "Os bebedouros estão limpos?",
              "Existem vazamentos ou zonas excessivamente húmidas?",
              "Todos os grupos de animais conseguem chegar à água?",
              "O consumo mudou repentinamente?",
              "Há animais que demonstram dificuldade para beber?",
              "O sistema possui capacidade suficiente para o efectivo?",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALERTA */}
      <section className="mx-auto max-w-7xl px-6 pb-14 lg:px-8">
        <div className="border-l-4 border-amber-500 bg-amber-50 p-6">
          <h2 className="text-xl font-bold text-slate-900">
            Quando procurar assistência técnica?
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Alterações persistentes no consumo de água, aumento da mortalidade,
            diarreia, sinais de desidratação, alterações importantes no
            comportamento ou suspeita de contaminação da fonte devem ser
            investigados. Problemas sanitários não devem ser tratados apenas
            através da alteração da água sem identificar a causa.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            Sempre que houver suspeita de doença ou contaminação, recomenda-se
            procurar assistência de um médico veterinário ou outro profissional
            habilitado.
          </p>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <Link
            href="/pecuaria/suinos/orientacoes/sanidade"
            className="rounded-xl border border-slate-300 px-5 py-3 text-center font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            ← Sanidade dos Suínos
          </Link>

          <Link
            href="/pecuaria"
            className="rounded-xl bg-slate-900 px-5 py-3 text-center font-semibold text-white transition hover:bg-slate-800"
          >
            Voltar para Pecuária
          </Link>
        </div>
      </section>
    </main>
  );
}
