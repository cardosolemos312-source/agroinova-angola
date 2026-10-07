"use client";

import Link from "next/link";

type Imagem = {
  src: string;
  href: string;
  alt: string;
  legenda: string;
  fonte: string;
};

const imagens: Record<string, Imagem> = {
  hero: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Goats%20grazing.jpg?width=1600",
    href: "https://commons.wikimedia.org/",
    alt: "Caprinos em área de pastoreio",
    legenda:
      "O pastoreio permite aproveitar diferentes tipos de vegetação e constitui uma componente importante de muitos sistemas de criação de caprinos.",
    fonte: "Wikimedia Commons",
  },

  vegetacao: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Goats%20grazing%20in%20Africa.jpg?width=1400",
    href: "https://commons.wikimedia.org/",
    alt: "Caprinos em vegetação africana",
    legenda:
      "Os caprinos conseguem utilizar uma ampla diversidade de plantas, incluindo arbustos e vegetação que outros ruminantes aproveitam em menor grau.",
    fonte: "Wikimedia Commons",
  },

  pastor: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Goat%20herding.jpg?width=1400",
    href: "https://commons.wikimedia.org/",
    alt: "Maneio de caprinos em pastoreio",
    legenda:
      "O acompanhamento do efetivo durante o pastoreio permite controlar deslocamentos, acesso à água e utilização da vegetação.",
    fonte: "Wikimedia Commons",
  },

  agua: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Goats%20drinking%20water.jpg?width=1400",
    href: "https://commons.wikimedia.org/",
    alt: "Caprinos junto de água",
    legenda:
      "A disponibilidade de água limpa é fundamental para manter o consumo de alimento e o estado fisiológico dos animais.",
    fonte: "Wikimedia Commons",
  },

  arbustos: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Goat%20browsing.jpg?width=1400",
    href: "https://commons.wikimedia.org/",
    alt: "Caprinos aproveitando vegetação arbustiva",
    legenda:
      "O comportamento de seleção de folhas e ramos permite aos caprinos utilizar recursos arbustivos presentes nas áreas de pastoreio.",
    fonte: "Wikimedia Commons",
  },

  seca: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Goats%20in%20dry%20landscape.jpg?width=1400",
    href: "https://commons.wikimedia.org/",
    alt: "Caprinos em ambiente seco",
    legenda:
      "Durante a estação seca, o produtor precisa acompanhar a disponibilidade de forragem e antecipar estratégias de suplementação.",
    fonte: "Wikimedia Commons",
  },
};

function ImagemTecnica({ imagem }: { imagem: Imagem }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <a href={imagem.href} target="_blank" rel="noreferrer">
        <img
          src={imagem.src}
          alt={imagem.alt}
          className="h-auto max-h-[520px] w-full object-cover transition duration-300 hover:scale-[1.01]"
        />
      </a>

      <figcaption className="p-4">
        <p className="text-sm leading-6 text-slate-700">
          {imagem.legenda}
        </p>

        <p className="mt-2 text-xs text-slate-500">
          Fonte:{" "}
          <a
            href={imagem.href}
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-green-700"
          >
            {imagem.fonte}
          </a>
        </p>
      </figcaption>
    </figure>
  );
}

const principios = [
  {
    titulo: "Disponibilidade de forragem",
    texto:
      "O número de animais deve ser compatível com a quantidade e qualidade da vegetação disponível. Quando a pressão de pastoreio ultrapassa a capacidade de recuperação da área, ocorre degradação.",
  },
  {
    titulo: "Acesso à água",
    texto:
      "Os animais devem ter acesso regular a água de qualidade. A localização dos pontos de água também influencia a distribuição do pastoreio.",
  },
  {
    titulo: "Rotação",
    texto:
      "Quando as condições permitem, a divisão da área em parcelas pode ajudar a controlar o tempo de utilização e permitir períodos de recuperação da vegetação.",
  },
  {
    titulo: "Observação",
    texto:
      "O produtor deve observar tanto os animais como a pastagem. Mudanças na condição corporal, comportamento e cobertura vegetal fornecem informações importantes para ajustar o maneio.",
  },
];

const sinaisDePressao = [
  "Redução visível da cobertura vegetal.",
  "Animais a percorrer grandes distâncias à procura de alimento.",
  "Aumento do tempo gasto à procura de vegetação.",
  "Animais a consumir vegetação de qualidade cada vez mais baixa.",
  "Exposição excessiva do solo.",
  "Aparecimento ou aumento de áreas de erosão.",
  "Desaparecimento de espécies vegetais preferidas.",
  "Necessidade crescente de suplementação devido à redução da pastagem.",
];

const cuidadosSeca = [
  "Avaliar antecipadamente a disponibilidade de pastagem.",
  "Reservar áreas de vegetação para períodos críticos quando isso for possível.",
  "Conservar feno ou outros recursos forrageiros adequados.",
  "Avaliar a necessidade de suplementação.",
  "Garantir pontos de água funcionais.",
  "Evitar concentrar excessivamente os animais em áreas já degradadas.",
  "Dar atenção especial a cabras gestantes, lactantes e animais jovens.",
  "Planear a redução do efetivo quando os recursos disponíveis não forem suficientes.",
];

export default function PastoreioPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <img
            src={imagens.hero.src}
            alt={imagens.hero.alt}
            className="h-full w-full object-cover opacity-35"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-green-300">
              Caprinicultura · Orientações técnicas
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Pastoreio de Caprinos
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Princípios para utilização sustentável das pastagens, aproveitamento
              da vegetação arbustiva, gestão da água, prevenção do sobrepastoreio
              e adaptação às condições das diferentes regiões de Angola.
            </p>
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 py-4 lg:px-8">
          <Link
            href="/pecuaria"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-green-600 hover:text-green-700"
          >
            Pecuária
          </Link>

          <Link
            href="/pecuaria/caprinos/orientacoes/racas"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-green-600 hover:text-green-700"
          >
            Raças e genética
          </Link>

          <Link
            href="/pecuaria/caprinos/orientacoes/alimentacao"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-green-600 hover:text-green-700"
          >
            Alimentação
          </Link>

          <Link
            href="/pecuaria/caprinos/orientacoes/instalacoes"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-green-600 hover:text-green-700"
          >
            Instalações
          </Link>

          <Link
            href="/pecuaria/caprinos/orientacoes/sanidade"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-green-600 hover:text-green-700"
          >
            Sanidade
          </Link>

          <Link
            href="/pecuaria/caprinos/orientacoes/cabritos"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-green-600 hover:text-green-700"
          >
            Cabritos
          </Link>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              Importância do pastoreio
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              O pastoreio deve alimentar os animais sem destruir a capacidade
              produtiva da área
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
              <p>
                Os caprinos apresentam elevada capacidade de seleção alimentar.
                Conseguem aproveitar folhas, ramos, arbustos e diferentes
                componentes da vegetação, o que lhes permite utilizar ambientes
                onde outros animais podem encontrar maior dificuldade para
                obter alimento.
              </p>

              <p>
                Essa capacidade, entretanto, não significa que uma área de
                pastoreio tenha capacidade ilimitada. Quando o número de
                animais, o tempo de permanência ou a frequência de utilização
                ultrapassam a capacidade de recuperação da vegetação, ocorre
                degradação progressiva.
              </p>

              <p>
                Um bom sistema de pastoreio procura equilibrar três elementos:
                necessidades dos animais, disponibilidade de recursos e
                capacidade de recuperação da vegetação.
              </p>
            </div>
          </div>

          <ImagemTecnica imagem={imagens.vegetacao} />
        </div>
      </section>

      {/* PRINCÍPIOS */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            01 · Princípios
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Bases para um pastoreio bem manejado
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {principios.map((item) => (
              <article
                key={item.titulo}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {item.titulo}
                </h3>

                <p className="mt-3 leading-7 text-slate-700">
                  {item.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMPORTAMENTO ALIMENTAR */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <ImagemTecnica imagem={imagens.arbustos} />

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              02 · Comportamento alimentar
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Caprinos utilizam diferentes estratos da vegetação
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-slate-700">
              <p>
                Ao contrário de animais que dependem predominantemente de
                pastagens herbáceas, os caprinos conseguem utilizar uma
                proporção significativa de folhas, brotos e ramos de arbustos.
              </p>

              <p>
                Esta característica pode ser aproveitada em sistemas onde existe
                vegetação arbustiva adequada. Porém, plantas tóxicas ou
                potencialmente perigosas devem ser conhecidas e evitadas.
              </p>

              <p>
                A capacidade de selecionar determinados componentes da
                vegetação também significa que os animais podem consumir
                primeiro as plantas mais palatáveis. Se a pressão de pastoreio
                for elevada, essas espécies podem diminuir ao longo do tempo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PASTAGEM NATURAL */}
      <section className="bg-slate-100 py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            03 · Pastagem natural
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Avaliar a área antes de aumentar o número de animais
          </h2>

          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <article className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Cobertura vegetal
              </h3>

              <p className="mt-4 leading-8 text-slate-700">
                Observar a quantidade de vegetação disponível e a proporção de
                solo exposto ajuda a perceber se a área está a suportar a
                pressão de pastoreio.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Qualidade da vegetação
              </h3>

              <p className="mt-4 leading-8 text-slate-700">
                Não basta existir vegetação. É necessário considerar a
                disponibilidade de espécies palatáveis e o seu estado de
                desenvolvimento.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Recuperação
              </h3>

              <p className="mt-4 leading-8 text-slate-700">
                A vegetação precisa de tempo para recuperar depois da utilização.
                A duração desse período depende do clima, solo, espécies
                vegetais e intensidade do pastoreio.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CAPACIDADE DE CARGA */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            04 · Capacidade de suporte
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            O conceito de capacidade de suporte
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-slate-700">
            <p>
              A capacidade de suporte corresponde, de forma geral, à capacidade
              de uma determinada área fornecer recursos suficientes para manter
              os animais sem comprometer a recuperação dos recursos naturais.
            </p>

            <p>
              Não existe um número universal de caprinos por hectare que possa
              ser aplicado a todas as regiões de Angola. A capacidade depende
              de fatores como chuva, tipo de solo, produtividade da vegetação,
              estação do ano, composição florística e duração do período de
              utilização.
            </p>

            <p>
              Por isso, recomendações de lotação devem ser estabelecidas com
              base na realidade da área e, quando possível, em avaliações
              técnicas da disponibilidade de forragem.
            </p>
          </div>
        </div>
      </section>

      {/* ROTAÇÃO */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
                05 · Pastoreio rotacional
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Utilizar parcelas pode facilitar o controlo da vegetação
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-700">
                <p>
                  O pastoreio rotacional consiste em organizar a área em
                  parcelas ou unidades de utilização, permitindo que determinadas
                  áreas permaneçam em descanso enquanto outras são utilizadas.
                </p>

                <p>
                  O objetivo não é simplesmente movimentar os animais, mas
                  controlar a intensidade e a frequência do pastoreio de acordo
                  com a capacidade de recuperação da vegetação.
                </p>

                <p>
                  Em pequenas explorações, mesmo uma divisão simples da área
                  pode ajudar a proteger determinados locais durante períodos
                  críticos.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-xl font-bold text-slate-900">
                O que observar antes de mover os animais?
              </h3>

              <div className="mt-5 space-y-4">
                {[
                  "Estado da vegetação.",
                  "Grau de utilização da parcela.",
                  "Presença de áreas degradadas.",
                  "Disponibilidade de água.",
                  "Condição corporal dos animais.",
                  "Condições meteorológicas.",
                  "Risco de parasitas.",
                ].map((item) => (
                  <p
                    key={item}
                    className="border-b border-slate-200 pb-3 text-slate-700 last:border-0"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ÁGUA */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <ImagemTecnica imagem={imagens.agua} />

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              06 · Água
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              A água também faz parte do maneio do pastoreio
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-slate-700">
              <p>
                O consumo de água está relacionado com o clima, alimentação,
                condição fisiológica, tamanho do animal e atividade. Durante
                períodos quentes, a procura de água pode aumentar.
              </p>

              <p>
                Os pontos de água devem ser mantidos limpos e acessíveis.
                Acumulação de lama, fezes ou matéria orgânica pode reduzir a
                qualidade da água.
              </p>

              <p>
                A localização dos bebedouros influencia a distribuição dos
                animais. Quando possível, a gestão dos pontos de água deve
                evitar concentração excessiva do efetivo numa pequena área.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOBREPASTOREIO */}
      <section className="bg-red-50 py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-red-700">
            07 · Sobrepastoreio
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Como reconhecer sinais de pressão excessiva sobre a pastagem
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {sinaisDePressao.map((sinal) => (
              <div
                key={sinal}
                className="rounded-xl border border-red-200 bg-white p-5"
              >
                <p className="leading-7 text-slate-700">{sinal}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-red-200 bg-white p-7">
            <h3 className="text-xl font-bold text-slate-900">
              Por que o sobrepastoreio é um problema?
            </h3>

            <p className="mt-4 leading-8 text-slate-700">
              A pressão excessiva pode reduzir a cobertura vegetal, aumentar a
              exposição do solo, favorecer erosão e diminuir a disponibilidade
              futura de alimento. Com a degradação da área, o produtor pode
              ficar cada vez mais dependente de suplementação externa.
            </p>
          </div>
        </div>
      </section>

      {/* PARASITAS */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
          08 · Pastoreio e parasitas
        </p>

        <h2 className="mt-2 text-3xl font-bold text-slate-900">
          A gestão da pastagem também influencia o risco parasitário
        </h2>

        <div className="mt-6 max-w-4xl space-y-5 leading-8 text-slate-700">
          <p>
            Alguns parasitas dos pequenos ruminantes apresentam ciclos
            relacionados com o ambiente e podem aumentar a exposição dos
            animais quando existe elevada concentração de hospedeiros ou
            utilização repetida das mesmas áreas.
          </p>

          <p>
            O controlo não deve basear-se exclusivamente na administração
            repetida de antiparasitários. A estratégia deve integrar observação
            dos animais, avaliação veterinária, gestão do pastoreio e uso
            responsável dos medicamentos.
          </p>

          <p>
            A ocorrência de parasitoses varia entre regiões e épocas do ano.
            Por isso, o acompanhamento da realidade local é fundamental para
            definir medidas de controlo adequadas.
          </p>
        </div>
      </section>

      {/* SOMBRA E ABRIGO */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
                09 · Sombra e proteção
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                O animal precisa de proteção durante o pastoreio
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-700">
                <p>
                  Em regiões quentes, a disponibilidade de sombra pode ajudar a
                  reduzir o stress térmico. Árvores existentes, estruturas
                  simples ou áreas naturais protegidas podem desempenhar essa
                  função.
                </p>

                <p>
                  Durante chuvas intensas, os animais também precisam de locais
                  onde possam procurar proteção. Cabritos, animais debilitados,
                  gestantes e animais recém-paridos merecem atenção especial.
                </p>

                <p>
                  O objetivo deve ser proporcionar proteção sem comprometer a
                  ventilação e sem criar locais excessivamente húmidos.
                </p>
              </div>
            </div>

            <ImagemTecnica imagem={imagens.pastor} />
          </div>
        </div>
      </section>

      {/* ESTAÇÃO SECA */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <ImagemTecnica imagem={imagens.seca} />

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              10 · Estação seca
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              A preparação para a seca deve começar antes da escassez
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-slate-700">
              <p>
                Em muitas regiões de Angola, a disponibilidade de forragem
                varia fortemente ao longo do ano. Esperar até que a pastagem
                esteja completamente degradada pode tornar as medidas de
                emergência mais caras e menos eficazes.
              </p>

              <p>
                O produtor deve acompanhar a condição da vegetação e avaliar
                antecipadamente quais recursos poderão ser utilizados durante
                o período de menor disponibilidade alimentar.
              </p>

              <p>
                Feno, resíduos agrícolas aproveitáveis, forragens conservadas e
                outros alimentos adequados podem fazer parte da estratégia,
                desde que apresentem qualidade e segurança.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHECKLIST SECA */}
      <section className="bg-amber-50 py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-700">
            11 · Preparação para períodos críticos
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            O que preparar antes da escassez de alimento?
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {cuidadosSeca.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-amber-200 bg-white p-5"
              >
                <p className="leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTROLO DE VEGETAÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
          12 · Vegetação arbustiva
        </p>

        <h2 className="mt-2 text-3xl font-bold text-slate-900">
          Caprinos podem contribuir para o aproveitamento de áreas arbustivas
        </h2>

        <div className="mt-6 max-w-4xl space-y-5 leading-8 text-slate-700">
          <p>
            A capacidade dos caprinos de consumir folhas e ramos pode ser útil
            em áreas onde existe vegetação arbustiva abundante. Em determinados
            sistemas, o pastoreio pode contribuir para reduzir parte da
            biomassa de plantas selecionadas.
          </p>

          <p>
            Contudo, os caprinos não devem ser utilizados indiscriminadamente
            como ferramenta de controlo da vegetação. O resultado depende das
            espécies presentes, intensidade do pastoreio, época do ano e
            objetivos de gestão da área.
          </p>

          <p>
            Plantas tóxicas ou desconhecidas devem ser avaliadas antes de serem
            disponibilizadas aos animais.
          </p>
        </div>
      </section>

      {/* ANGOLA */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            13 · Contexto angolano
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Pastoreio adaptado às diferentes regiões de Angola
          </h2>

          <div className="mt-6 max-w-5xl space-y-5 leading-8 text-slate-700">
            <p>
              Angola apresenta grande diversidade climática, ambiental e
              produtiva. As condições de pastoreio no sul semiárido não são
              iguais às encontradas em regiões com maior disponibilidade de
              precipitação e vegetação.
            </p>

            <p>
              Por essa razão, um plano de pastoreio deve partir da observação
              da realidade local. O calendário de utilização das áreas, a
              necessidade de suplementação e a disponibilidade de água devem
              ser ajustados às condições específicas de cada exploração.
            </p>

            <p>
              Nas explorações familiares, o conhecimento tradicional sobre
              fontes de água, zonas de pastagem e comportamento dos animais
              constitui um recurso importante. Esse conhecimento pode ser
              complementado com técnicas de avaliação da vegetação, registos
              produtivos e assistência veterinária.
            </p>
          </div>
        </div>
      </section>

      {/* SISTEMAS */}
      <section className="bg-slate-100 py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            14 · Sistemas de pastoreio
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Estratégias conforme o tipo de exploração
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-7">
              <h3 className="text-xl font-bold text-slate-900">
                Sistema extensivo
              </h3>

              <p className="mt-4 leading-8 text-slate-700">
                Depende fortemente dos recursos naturais disponíveis. Exige
                acompanhamento da vegetação, disponibilidade de água e
                deslocação adequada do efetivo.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-7">
              <h3 className="text-xl font-bold text-slate-900">
                Sistema semi-intensivo
              </h3>

              <p className="mt-4 leading-8 text-slate-700">
                Combina pastoreio com suplementação e pode permitir maior
                controlo da utilização das áreas e do desempenho dos animais.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-7">
              <h3 className="text-xl font-bold text-slate-900">
                Sistema controlado
              </h3>

              <p className="mt-4 leading-8 text-slate-700">
                Utiliza parcelas ou áreas delimitadas, com maior controlo da
                lotação, períodos de utilização, descanso e suplementação.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* INDICADORES */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
          15 · Monitorização
        </p>

        <h2 className="mt-2 text-3xl font-bold text-slate-900">
          O produtor pode acompanhar alguns indicadores simples
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Vegetação", "Quantidade e qualidade da forragem disponível."],
            ["Animais", "Condição corporal e comportamento do efetivo."],
            ["Água", "Disponibilidade e qualidade dos pontos de água."],
            ["Solo", "Sinais de erosão e aumento de áreas descobertas."],
          ].map(([titulo, texto]) => (
            <article
              key={titulo}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-slate-900">{titulo}</h3>

              <p className="mt-3 leading-7 text-slate-700">{texto}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ERROS */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-red-700">
            16 · Erros frequentes
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Práticas que podem degradar a pastagem
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Manter animais em áreas degradadas durante demasiado tempo.",
              "Aumentar o efetivo sem avaliar a disponibilidade de alimento.",
              "Utilizar sempre a mesma parcela sem período adequado de recuperação.",
              "Ignorar a redução da vegetação durante a estação seca.",
              "Não controlar o acesso aos pontos de água.",
              "Concentrar os animais repetidamente no mesmo local.",
              "Não considerar a presença de plantas potencialmente tóxicas.",
              "Esperar pela falta total de alimento para iniciar a suplementação.",
            ].map((erro) => (
              <div
                key={erro}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <p className="leading-7 text-slate-700">{erro}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="rounded-3xl bg-slate-900 p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-300">
            Checklist de campo
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            Antes e durante o pastoreio
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Existe alimento suficiente para o efetivo?",
              "A vegetação apresenta sinais de recuperação?",
              "Há excesso de solo exposto?",
              "Os animais apresentam boa condição corporal?",
              "Existe água limpa disponível?",
              "Existem zonas de sombra ou proteção?",
              "Há sinais de erosão?",
              "Existem plantas potencialmente tóxicas?",
              "A área apresenta elevada concentração de fezes?",
              "É necessário mudar ou descansar a parcela?",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-700 bg-slate-800 p-4"
              >
                <p className="text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTA TÉCNICA */}
      <section className="bg-amber-50 py-14">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Nota técnica
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            O maneio de pastagens deve ser ajustado às condições ambientais e
            produtivas de cada exploração. Não se recomenda utilizar valores
            fixos de lotação ou períodos de descanso sem considerar a
            produtividade real da área.
          </p>

          <p className="mt-4 leading-8 text-slate-700">
            Sempre que possível, avaliações de campo devem ser realizadas por
            técnicos de produção animal, agrónomos, especialistas em pastagens
            ou outros profissionais habilitados.
          </p>
        </div>
      </section>

      {/* REFERÊNCIAS */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
          Referências técnicas
        </p>

        <h2 className="mt-2 text-3xl font-bold text-slate-900">
          Fontes para aprofundamento
        </h2>

        <div className="mt-8 space-y-4 text-sm leading-7 text-slate-700">
          <p>
            Food and Agriculture Organization of the United Nations (FAO).
            Materiais técnicos sobre pastagens, sistemas de produção de
            pequenos ruminantes, alimentação e gestão de recursos naturais.
          </p>

          <p>
            National Research Council. (2007).{" "}
            <em>
              Nutrient requirements of small ruminants: Sheep, goats, cervids,
              and new world camelids
            </em>
            . National Academies Press.
          </p>

          <p>
            Merck Veterinary Manual. Conteúdos técnicos relacionados com
            nutrição, parasitas, sanidade e maneio de pequenos ruminantes.
          </p>

          <p>
            Organização Mundial da Saúde Animal (WOAH). Materiais técnicos
            relacionados com saúde animal, prevenção de doenças e boas
            práticas de produção.
          </p>
        </div>
      </section>

      {/* FINAL */}
      <section className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Conjunto de orientações para caprinos
            </h2>

            <p className="mt-1 text-sm text-slate-600">
              Raças, alimentação, instalações, sanidade, cabritos e pastoreio.
            </p>
          </div>

          <Link
            href="/pecuaria"
            className="inline-flex rounded-xl bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
          >
            Voltar à Pecuária
          </Link>
        </div>
      </section>
    </main>
  );
}