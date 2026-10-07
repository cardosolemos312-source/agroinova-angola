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
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Goat%20kids.jpg?width=1600",
    href: "https://commons.wikimedia.org/wiki/File:Goat_kids.jpg",
    alt: "Cabritos jovens em criação",
    legenda:
      "Cabritos jovens durante a fase inicial de crescimento. A qualidade do maneio nesta fase influencia a sobrevivência e o desempenho posterior.",
    fonte: "Wikimedia Commons",
  },

  nascimento: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Goat%20with%20kids.jpg?width=1400",
    href: "https://commons.wikimedia.org/",
    alt: "Cabra com crias",
    legenda:
      "A relação entre a cabra e as crias é particularmente importante durante as primeiras horas e dias de vida.",
    fonte: "Wikimedia Commons",
  },

  alimentacao: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Goat%20kids%20feeding.jpg?width=1400",
    href: "https://commons.wikimedia.org/",
    alt: "Cabritos em alimentação",
    legenda:
      "A introdução progressiva de alimentos sólidos ajuda o desenvolvimento do aparelho digestivo dos cabritos.",
    fonte: "Wikimedia Commons",
  },

  pastagem: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Goats%20grazing.jpg?width=1400",
    href: "https://commons.wikimedia.org/",
    alt: "Caprinos em pastoreio",
    legenda:
      "O acesso controlado a pastagens e vegetação disponível constitui uma componente importante da alimentação dos caprinos.",
    fonte: "Wikimedia Commons",
  },

  abrigo: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Goat%20shelter.jpg?width=1400",
    href: "https://commons.wikimedia.org/",
    alt: "Abrigo para caprinos",
    legenda:
      "Abrigos secos, ventilados e protegidos da chuva e do vento contribuem para reduzir problemas sanitários nos animais jovens.",
    fonte: "Wikimedia Commons",
  },

  crescimento: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Young%20goats.jpg?width=1400",
    href: "https://commons.wikimedia.org/",
    alt: "Cabritos jovens em crescimento",
    legenda:
      "O acompanhamento do crescimento permite identificar precocemente problemas relacionados com alimentação, parasitas ou doenças.",
    fonte: "Wikimedia Commons",
  },
};

function ImagemTecnica({
  imagem,
  destaque = false,
}: {
  imagem: Imagem;
  destaque?: boolean;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ${
        destaque ? "" : ""
      }`}
    >
      <a href={imagem.href} target="_blank" rel="noreferrer">
        <img
          src={imagem.src}
          alt={imagem.alt}
          className="h-auto max-h-[520px] w-full object-cover transition duration-300 hover:scale-[1.01]"
        />
      </a>

      <figcaption className="p-4">
        <p className="text-sm leading-6 text-slate-700">{imagem.legenda}</p>

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
    titulo: "Sobrevivência neonatal",
    texto:
      "As primeiras horas de vida constituem uma fase crítica. O cabrito deve ser observado desde o nascimento, receber cuidados de higiene e ter acesso adequado ao colostro.",
  },
  {
    titulo: "Alimentação adequada",
    texto:
      "A alimentação deve acompanhar o desenvolvimento do animal. O leite é fundamental no início, mas a introdução progressiva de alimentos sólidos prepara o aparelho digestivo para a fase posterior.",
  },
  {
    titulo: "Ambiente protegido",
    texto:
      "Cabritos recém-nascidos são particularmente vulneráveis ao frio, à chuva, à humidade, à sujidade e às correntes de ar. O local de permanência deve ser seco e higiénico.",
  },
  {
    titulo: "Prevenção sanitária",
    texto:
      "A prevenção deve combinar higiene, observação diária, alimentação adequada, controlo de parasitas e acompanhamento veterinário sempre que necessário.",
  },
  {
    titulo: "Registos",
    texto:
      "Identificar os animais e registar nascimento, mãe, sexo, crescimento, tratamentos e ocorrências facilita a seleção dos melhores reprodutores e a gestão do efetivo.",
  },
];

const sinaisAlerta = [
  "Cabrito que não consegue levantar-se ou apresenta fraqueza acentuada.",
  "Ausência ou dificuldade em mamar.",
  "Separação persistente da mãe sem explicação aparente.",
  "Diarreia, especialmente quando acompanhada de fraqueza ou desidratação.",
  "Dificuldade respiratória, tosse persistente ou corrimento nasal anormal.",
  "Abdómen excessivamente distendido.",
  "Ferida, inflamação ou secreção na região do umbigo.",
  "Temperatura corporal anormal, tremores ou sinais de hipotermia.",
  "Perda de peso ou ausência de crescimento.",
  "Mortalidade repetida de cabritos na exploração.",
];

const erros = [
  "Deixar o cabrito recém-nascido sem confirmação de ingestão de colostro.",
  "Manter cabritos em locais húmidos, enlameados ou com acumulação de fezes.",
  "Misturar animais muito jovens com animais de diferentes idades sem controlo sanitário.",
  "Introduzir alimentos sólidos de forma brusca.",
  "Fornecer água ou alimentos contaminados.",
  "Ignorar diarreias ou outros sinais clínicos porque o animal ainda parece ativo.",
  "Utilizar medicamentos sem diagnóstico ou orientação veterinária.",
  "Não identificar os cabritos e não manter registos.",
  "Permitir que animais doentes permaneçam junto de animais saudáveis.",
  "Não acompanhar o crescimento individual dos animais.",
];

export default function CabritosPage() {
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
              Maneio de Cabritos
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Cuidados desde o nascimento até ao desmame, com atenção à
              alimentação, higiene, sanidade, crescimento, alojamento e
              adaptação às condições de criação em Angola.
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
            href="/pecuaria/caprinos/orientacoes/pastoreio"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-green-600 hover:text-green-700"
          >
            Pastoreio
          </Link>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              Importância da fase jovem
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Os primeiros meses determinam grande parte do futuro do animal
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
              <p>
                O período compreendido entre o nascimento e o desmame é uma das
                fases mais sensíveis da criação de caprinos. Nesta etapa, o
                cabrito passa de uma condição de elevada dependência materna
                para uma maior autonomia alimentar e sanitária.
              </p>

              <p>
                Problemas de alimentação, falta de higiene, exposição à chuva
                ou ao frio, parasitoses e doenças infecciosas podem provocar
                mortalidade ou comprometer o crescimento. Por isso, o maneio
                dos cabritos deve ser encarado como uma estratégia de prevenção
                e não apenas como uma resposta quando surge uma doença.
              </p>

              <p>
                Em sistemas familiares e de pequena escala, práticas simples
                como observar diariamente os animais, garantir abrigo seco,
                assegurar a ingestão de colostro, manter água limpa e separar
                animais doentes podem produzir diferenças importantes nos
                resultados da exploração.
              </p>
            </div>
          </div>

          <ImagemTecnica imagem={imagens.nascimento} destaque />
        </div>
      </section>

      {/* PRINCÍPIOS */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              Princípios fundamentais
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Cinco bases para um bom maneio dos cabritos
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {principios.map((item, index) => (
              <article
                key={item.titulo}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <p className="text-sm font-semibold text-green-700">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-3 text-xl font-bold text-slate-900">
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

      {/* NASCIMENTO */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <ImagemTecnica imagem={imagens.nascimento} />

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              01 · Nascimento
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Cuidados imediatamente após o parto
            </h2>

            <div className="mt-6 space-y-5 text-slate-700">
              <p className="leading-8">
                O nascimento deve ocorrer, sempre que possível, num local
                limpo, seco e protegido. A observação da mãe e da cria permite
                identificar rapidamente dificuldades de parto, rejeição da
                cria ou incapacidade do cabrito para se levantar e mamar.
              </p>

              <p className="leading-8">
                O cabrito deve ser observado para confirmar que respira
                normalmente e que consegue procurar a mãe. A limpeza natural
                das vias respiratórias e a secagem do corpo são importantes,
                principalmente em ambientes frios ou húmidos.
              </p>

              <p className="leading-8">
                Quando existe assistência humana, deve ser realizada com
                higiene. As mãos e os materiais utilizados no parto devem estar
                limpos para reduzir a possibilidade de introdução de agentes
                infecciosos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COLOSTRO */}
      <section className="bg-green-50 py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            02 · Colostro
          </p>

          <h2 className="mt-2 max-w-4xl text-3xl font-bold text-slate-900">
            O colostro é uma das principais prioridades nas primeiras horas de
            vida
          </h2>

          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Fonte de imunidade
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                O colostro fornece anticorpos e outros componentes importantes
                para a proteção inicial do cabrito, numa fase em que o sistema
                imunitário ainda está em desenvolvimento.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Fonte de energia
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                Além da função imunológica, o colostro contribui para fornecer
                energia ao recém-nascido, ajudando-o a enfrentar as primeiras
                horas de vida.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Confirmar a ingestão
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                Não basta colocar a cria junto da mãe. É importante observar se
                o cabrito realmente conseguiu mamar e se a mãe apresenta
                condições para amamentá-lo.
              </p>
            </article>
          </div>

          <div className="mt-8 rounded-2xl border border-green-200 bg-white p-6">
            <h3 className="text-xl font-bold text-slate-900">
              Quando o cabrito não consegue mamar
            </h3>

            <p className="mt-3 leading-8 text-slate-700">
              Um cabrito fraco, com reflexo de sucção reduzido ou incapaz de
              alcançar a teta necessita de atenção imediata. A assistência
              deve ser feita de forma higiénica e, quando necessário, com
              orientação de um técnico ou médico veterinário. A alimentação
              forçada de forma inadequada pode provocar aspiração do leite para
              os pulmões.
            </p>
          </div>
        </div>
      </section>

      {/* UMBIGO */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            03 · Umbigo e higiene
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            A higiene do umbigo reduz riscos de infeção
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
            <p>
              O umbigo constitui uma possível porta de entrada para agentes
              infecciosos. Por essa razão, o local onde ocorre o parto deve
              permanecer limpo e seco e os cuidados com o cordão umbilical
              devem seguir as recomendações veterinárias adotadas na região.
            </p>

            <p>
              O produtor deve observar diariamente a região umbilical nos
              primeiros dias. Inchaço, calor, dor, secreção, mau cheiro ou
              aumento anormal do volume devem ser considerados sinais de
              alerta.
            </p>

            <p>
              A prevenção é particularmente importante em sistemas onde muitos
              animais utilizam o mesmo espaço. Cama húmida, acumulação de
              fezes, lama e água contaminada aumentam o risco sanitário.
            </p>
          </div>
        </div>
      </section>

      {/* ABRIGO */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
                04 · Ambiente
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Abrigo seco, limpo e protegido
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-700">
                <p>
                  Os cabritos recém-nascidos apresentam maior sensibilidade às
                  condições ambientais do que os animais adultos. A exposição
                  prolongada à chuva, vento e humidade pode contribuir para
                  hipotermia e aumentar a vulnerabilidade a doenças.
                </p>

                <p>
                  O abrigo deve proteger sem criar um ambiente fechado,
                  abafado e com elevada concentração de gases ou humidade.
                  Ventilação adequada é necessária, mas deve ser evitada a
                  exposição direta a correntes de ar sobre os animais jovens.
                </p>

                <p>
                  Em Angola, as condições variam significativamente entre as
                  diferentes regiões. O desenho do abrigo deve considerar o
                  clima local, a época das chuvas, disponibilidade de materiais
                  e sistema de produção.
                </p>
              </div>
            </div>

            <ImagemTecnica imagem={imagens.abrigo} />
          </div>
        </div>
      </section>

      {/* ALEITAMENTO */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
          05 · Aleitamento
        </p>

        <h2 className="mt-2 text-3xl font-bold text-slate-900">
          Aleitamento natural e aleitamento artificial
        </h2>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">
              Aleitamento natural
            </h3>

            <p className="mt-4 leading-8 text-slate-700">
              No sistema natural, o cabrito permanece com a mãe ou tem acesso
              controlado ao leite materno. É importante observar a produção de
              leite da cabra, o comportamento da cria e o crescimento dos
              animais.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Quando existem várias crias, deve-se prestar atenção especial às
              crias mais pequenas ou fracas, que podem ter dificuldade em
              competir pelo acesso à teta.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">
              Aleitamento artificial
            </h3>

            <p className="mt-4 leading-8 text-slate-700">
              O aleitamento artificial pode ser utilizado quando a mãe morreu,
              não produz leite suficiente, rejeita a cria ou quando o sistema
              de produção exige separação. Requer maior controlo de higiene,
              preparação e conservação do leite ou substituto utilizado.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Utensílios mal lavados, leite contaminado ou mudanças bruscas na
              alimentação podem favorecer problemas digestivos.
            </p>
          </article>
        </div>
      </section>

      {/* ALIMENTAÇÃO SÓLIDA */}
      <section className="bg-slate-100 py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <ImagemTecnica imagem={imagens.alimentacao} />

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
                06 · Alimentação inicial
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Introdução progressiva de água e alimentos sólidos
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-700">
                <p>
                  À medida que o aparelho digestivo se desenvolve, o cabrito
                  deve começar a explorar alimentos sólidos de boa qualidade.
                  Esta transição deve ocorrer progressivamente e não significa
                  uma substituição imediata do leite.
                </p>

                <p>
                  Alimentos fibrosos, forragens de boa qualidade e suplementos
                  adequados à fase de crescimento podem contribuir para o
                  desenvolvimento do sistema digestivo. A qualidade e
                  segurança dos alimentos devem ser prioritárias.
                </p>

                <p>
                  A água limpa deve estar disponível de acordo com o sistema de
                  criação e a fase de desenvolvimento. Recipientes sujos ou
                  localizados junto de fezes podem transformar a água numa
                  fonte de contaminação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREEP FEEDING */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            07 · Alimentação dos jovens
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Alimentação inicial exclusiva para cabritos
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-slate-700">
            <p>
              Em sistemas mais intensivos pode ser utilizada uma área de
              alimentação onde apenas os cabritos tenham acesso ao alimento.
              Esta prática é conhecida internacionalmente como <em>creep
              feeding</em>.
            </p>

            <p>
              O objetivo é permitir que os animais jovens consumam alimento
              complementar sem depender exclusivamente da competição com
              animais adultos.
            </p>

            <p>
              O alimento deve ser fresco, seguro e adequado à idade. A
              introdução deve ser gradual, acompanhando a resposta dos animais.
              Sobras húmidas, alimentos mofados ou recipientes contaminados
              devem ser evitados.
            </p>
          </div>
        </div>
      </section>

      {/* CRESCIMENTO */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
                08 · Crescimento
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Acompanhar o crescimento ajuda a detectar problemas cedo
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-700">
                <p>
                  O crescimento deve ser acompanhado de acordo com os recursos
                  disponíveis na exploração. O produtor pode utilizar pesagem,
                  avaliação do estado corporal e observação sistemática do
                  desenvolvimento.
                </p>

                <p>
                  Quando existe acesso a uma balança, o registo periódico do
                  peso fornece informação mais objetiva. Quando não existe,
                  medidas simples e observações padronizadas podem ajudar a
                  identificar animais que estejam a crescer menos que os seus
                  companheiros.
                </p>

                <p>
                  Crescimento insuficiente pode estar associado a problemas de
                  alimentação, parasitas, doenças, competição pelo alimento,
                  problemas maternos ou condições ambientais inadequadas.
                </p>
              </div>
            </div>

            <ImagemTecnica imagem={imagens.crescimento} />
          </div>
        </div>
      </section>

      {/* IDENTIFICAÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
          09 · Identificação e registos
        </p>

        <h2 className="mt-2 text-3xl font-bold text-slate-900">
          Cada cabrito deve fazer parte da história produtiva da exploração
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            [
              "Nascimento",
              "Registar a data aproximada ou exata do nascimento e a mãe.",
            ],
            [
              "Identificação",
              "Utilizar um sistema de identificação adequado ao tamanho e ao sistema de produção.",
            ],
            [
              "Crescimento",
              "Registar pesos ou outras avaliações de desenvolvimento quando possível.",
            ],
            [
              "Sanidade",
              "Registar tratamentos, doenças, mortalidade e outras ocorrências.",
            ],
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

      {/* SANIDADE */}
      <section className="bg-red-50 py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-red-700">
            10 · Sanidade
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Diarreia e outros problemas devem ser tratados rapidamente
          </h2>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-red-200 bg-white p-7">
              <h3 className="text-xl font-bold text-slate-900">
                Diarreia
              </h3>

              <p className="mt-4 leading-8 text-slate-700">
                A diarreia é uma das alterações mais importantes a observar em
                animais jovens. Pode estar relacionada com agentes infecciosos,
                parasitas, alimentação inadequada, mudanças bruscas na dieta,
                higiene deficiente ou outras causas.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                O principal risco imediato é a desidratação. Um cabrito com
                diarreia, fraqueza, olhos encovados, dificuldade em manter-se
                de pé ou incapacidade de mamar necessita de avaliação rápida.
              </p>
            </div>

            <div className="rounded-2xl border border-red-200 bg-white p-7">
              <h3 className="text-xl font-bold text-slate-900">
                Não tratar apenas o sintoma
              </h3>

              <p className="mt-4 leading-8 text-slate-700">
                O uso indiscriminado de antibióticos, antiparasitários ou
                outros medicamentos pode mascarar problemas e contribuir para
                resistência antimicrobiana ou tratamentos inadequados.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                Quando há mortalidade, doença recorrente ou vários animais
                afetados, deve-se procurar apoio veterinário para investigar a
                causa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SINAIS DE ALERTA */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
          11 · Observação diária
        </p>

        <h2 className="mt-2 text-3xl font-bold text-slate-900">
          Sinais que exigem atenção
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {sinaisAlerta.map((sinal) => (
            <div
              key={sinal}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="leading-7 text-slate-700">{sinal}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DESMAME */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            12 · Desmame
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            O desmame deve ser baseado na preparação do animal
          </h2>

          <div className="mt-6 max-w-4xl space-y-5 leading-8 text-slate-700">
            <p>
              O desmame não deve ser encarado apenas como uma data fixa.
              Depende do sistema de produção, disponibilidade de alimento,
              desenvolvimento do cabrito, condição corporal e capacidade de
              consumir alimentos sólidos.
            </p>

            <p>
              A transição deve ser preparada antecipadamente. Cabritos que
              ainda dependem fortemente do leite ou que apresentam crescimento
              insuficiente podem sofrer mais com uma interrupção brusca.
            </p>

            <p>
              A avaliação do grupo antes do desmame permite identificar animais
              que precisam de atenção individual.
            </p>
          </div>
        </div>
      </section>

      {/* PASTAGEM */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <ImagemTecnica imagem={imagens.pastagem} />

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              13 · Adaptação ao pastoreio
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              A entrada dos jovens no pastoreio deve ser gradual
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-slate-700">
              <p>
                A exposição progressiva às pastagens permite que os animais
                jovens se adaptem às condições do ambiente e desenvolvam os
                hábitos alimentares próprios da espécie.
              </p>

              <p>
                O acesso deve considerar a qualidade da vegetação, disponibilidade
                de água, sombra, condições climáticas e risco de exposição a
                parasitas.
              </p>

              <p>
                Em sistemas com forte pressão parasitária, o maneio das
                pastagens e a estratégia de controlo de parasitas devem ser
                planeados conjuntamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SISTEMAS DE PRODUÇÃO */}
      <section className="bg-slate-100 py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            14 · Sistemas de produção
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            O maneio deve acompanhar o tipo de exploração
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-7">
              <h3 className="text-xl font-bold text-slate-900">
                Sistema familiar
              </h3>

              <p className="mt-4 leading-8 text-slate-700">
                Deve privilegiar práticas simples, de baixo custo e elevado
                impacto: higiene, observação, proteção contra chuva, acesso ao
                colostro, água limpa e alimentação disponível localmente.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-7">
              <h3 className="text-xl font-bold text-slate-900">
                Sistema semi-intensivo
              </h3>

              <p className="mt-4 leading-8 text-slate-700">
                Permite combinar pastoreio com suplementação e maior controlo
                dos animais jovens. Os registos e o acompanhamento do
                crescimento tornam-se particularmente úteis.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-7">
              <h3 className="text-xl font-bold text-slate-900">
                Sistema intensivo
              </h3>

              <p className="mt-4 leading-8 text-slate-700">
                Exige maior controlo de higiene, alimentação, instalações,
                ventilação, densidade animal, registos e biossegurança. Quanto
                maior a concentração de animais, maior a importância da
                prevenção.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CONTEXTO ANGOLA */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            15 · Contexto angolano
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Maneio de cabritos nas diferentes realidades de Angola
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-slate-700">
            <p>
              A criação de caprinos em Angola ocorre em contextos produtivos
              muito diferentes, desde pequenas explorações familiares até
              sistemas com maior especialização. Por isso, as recomendações
              devem ser adaptadas aos recursos disponíveis, clima, disponibilidade
              de pastagem, acesso à água, assistência veterinária e finalidade
              produtiva.
            </p>

            <p>
              Nas regiões com períodos de seca mais marcados, a preparação
              antecipada de alimentos e a conservação de forragens podem
              ajudar a reduzir a pressão sobre as matrizes e os cabritos. Nas
              zonas com elevada precipitação, a drenagem, o abrigo e a higiene
              tornam-se especialmente importantes.
            </p>

            <p>
              O conhecimento local dos criadores deve ser integrado com
              orientação técnica. A combinação entre experiência do produtor,
              observação sistemática e assistência veterinária pode melhorar a
              adaptação das práticas às condições reais de cada comunidade.
            </p>
          </div>
        </div>
      </section>

      {/* ERROS */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-red-700">
            16 · Erros frequentes
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Práticas que podem aumentar o risco de perdas
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {erros.map((erro) => (
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
            Verificação rápida do cabrito
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Mamou adequadamente?",
              "Está ativo e consegue levantar-se?",
              "O umbigo apresenta aspecto normal?",
              "Está protegido da chuva e da humidade?",
              "Tem acesso a água limpa quando apropriado?",
              "Está a iniciar o consumo de alimentos sólidos?",
              "Apresenta fezes normais?",
              "Está a crescer adequadamente?",
              "Está identificado e registado?",
              "Foi observado individualmente hoje?",
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
            As orientações apresentadas nesta página têm finalidade educativa e
            técnica. A identificação de doenças, escolha de medicamentos,
            definição de protocolos de vacinação, tratamento de animais
            debilitados e decisões relacionadas com antibióticos ou
            antiparasitários devem ser realizadas com apoio de médico
            veterinário ou técnico habilitado, considerando a realidade
            epidemiológica local.
          </p>

          <p className="mt-4 leading-8 text-slate-700">
            Não existe uma única estratégia de maneio adequada para todas as
            explorações. O sistema deve ser ajustado ao ambiente, raça,
            disponibilidade alimentar, objetivo produtivo, tamanho do efetivo e
            capacidade de gestão do produtor.
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
            Materiais técnicos sobre produção de pequenos ruminantes,
            alimentação, sanidade e sistemas de produção pecuária.
          </p>

          <p>
            Merck Veterinary Manual. Conteúdos técnicos sobre saúde, doenças,
            reprodução, nutrição e maneio de pequenos ruminantes.
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
            Organização Mundial da Saúde Animal (WOAH). Materiais técnicos
            relacionados com saúde animal, prevenção de doenças e uso
            responsável de medicamentos veterinários.
          </p>

          <p>
            Instituto de Investigação Veterinária de Angola e serviços
            veterinários nacionais: recomendações e orientações aplicáveis
            conforme a situação epidemiológica e regulamentar vigente.
          </p>
        </div>
      </section>

      {/* RODAPÉ DA PÁGINA */}
      <section className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Próxima orientação
            </h2>

            <p className="mt-1 text-sm text-slate-600">
              Continue com o maneio das pastagens e o pastoreio de caprinos.
            </p>
          </div>

          <Link
            href="/pecuaria/caprinos/orientacoes/pastoreio"
            className="inline-flex rounded-xl bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
          >
            Pastoreio
          </Link>
        </div>
      </section>
    </main>
  );
}