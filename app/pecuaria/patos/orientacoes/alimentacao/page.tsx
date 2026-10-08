
"use client";

import Link from "next/link";

type ImagemProps = {
  src: string;
  alt: string;
  titulo: string;
  legenda: string;
  fonte: string;
  href: string;
};

function Imagem({ src, alt, titulo, legenda, fonte, href }: ImagemProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_65px_rgba(15,23,42,0.18)]"
    >
      <div className="relative h-64 overflow-hidden bg-slate-100">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-slate-900">{titulo}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{legenda}</p>
        <p className="mt-3 text-xs font-medium text-green-700">
          Fonte da imagem: {fonte}
        </p>
      </div>
    </a>
  );
}

const imagens = [
  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Pekin_Ducks.jpg",
    alt: "Patos Pekin",
    titulo: "Pekin",
    legenda:
      "Tipo de pato amplamente associado à produção de carne. A seleção genética e o maneio alimentar devem estar alinhados com o objetivo produtivo.",
    fonte: "Wikimedia Commons — Katie Chodil, CC BY 2.0",
    href: "https://commons.wikimedia.org/wiki/File:Pekin_Ducks.jpg",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Khaki_Campbell_Duck.jpg",
    alt: "Pato Khaki Campbell",
    titulo: "Khaki Campbell",
    legenda:
      "Raça conhecida pelo potencial para produção de ovos. O desempenho depende da qualidade genética, alimentação, água, sanidade e condições ambientais.",
    fonte: "Wikimedia Commons — Partonez, CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Khaki_Campbell_Duck.jpg",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Muscovy_ducks.jpg",
    alt: "Patos Muscovy",
    titulo: "Muscovy",
    legenda:
      "Pato doméstico pertencente à espécie Cairina moschata. É particularmente importante considerar a sua finalidade produtiva e o sistema de criação.",
    fonte: "Wikimedia Commons — Sufangxi, CC0",
    href: "https://commons.wikimedia.org/wiki/File:Muscovy-ducks.jpg",
  },
];

export default function AlimentacaoPatosPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(74,222,128,0.20),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-5 flex flex-wrap items-center gap-2 text-sm text-green-200">
              <Link href="/pecuaria" className="hover:text-white">
                Pecuária
              </Link>
              <span>/</span>
              <Link
                href="/pecuaria/patos"
                className="hover:text-white"
              >
                Patos
              </Link>
              <span>/</span>
              <span>Orientações técnicas</span>
              <span>/</span>
              <span>Alimentação</span>
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-300">
              AGROINOVA ANGOLA · AVICULTURA
            </p>

            <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
              Alimentação de Patos
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50 md:text-xl">
              Nutrição, raças, genética, água, matérias-primas, fases de
              crescimento e estratégias de alimentação para sistemas de criação
              de patos em Angola.
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.08)] md:p-10">
            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Fundamentos
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950">
              A alimentação começa pela finalidade da criação
            </h2>

            <div className="mt-6 space-y-5 text-justify text-[16px] leading-8 text-slate-700">
              <p>
                A alimentação dos patos não deve ser definida apenas pela
                disponibilidade de milho ou de outros ingredientes. O programa
                alimentar deve considerar a idade, o peso corporal, a raça ou
                linhagem, a finalidade produtiva, o sistema de criação, a
                qualidade da água e as condições ambientais.
              </p>

              <p>
                Um pato destinado à produção de carne apresenta necessidades
                diferentes de uma fêmea selecionada para produção de ovos. Por
                isso, utilizar a mesma ração durante todo o ciclo pode provocar
                desperdício de nutrientes, crescimento inadequado, excesso de
                gordura ou queda de desempenho.
              </p>

              <p>
                Em Angola, a formulação deve ainda considerar a disponibilidade
                local de matérias-primas, os custos dos ingredientes, a
                qualidade sanitária dos alimentos e a necessidade de reduzir
                perdas. Milho, farelo de soja e outros ingredientes podem ser
                utilizados, mas a dieta deve ser equilibrada e não simplesmente
                baseada em um único cereal.
              </p>
            </div>
          </article>

          <aside className="rounded-3xl border border-green-200 bg-gradient-to-br from-green-50 to-white p-8 shadow-[0_20px_50px_rgba(22,101,52,0.10)]">
            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Regra técnica
            </p>

            <h2 className="mt-3 text-2xl font-black text-slate-950">
              Ração equilibrada + água de qualidade
            </h2>

            <p className="mt-5 text-justify leading-8 text-slate-700">
              Uma dieta adequada perde grande parte do seu valor quando os
              patos não têm acesso contínuo a água limpa. A água participa da
              digestão, termorregulação, metabolismo e consumo de alimento.
            </p>

            <div className="mt-7 rounded-2xl border border-green-200 bg-white p-5">
              <p className="text-sm font-semibold text-slate-500">
                O produtor deve controlar
              </p>

              <p className="mt-2 text-lg font-bold leading-7 text-green-900">
                alimento, água, consumo, crescimento, condição corporal e
                mortalidade.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* RAÇAS */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Raças e genética
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
              A raça influencia o programa alimentar
            </h2>

            <p className="mt-5 text-justify leading-8 text-slate-600">
              A genética determina, em parte, o potencial de crescimento,
              produção de ovos, conversão alimentar, conformação corporal e
              adaptação ao sistema de produção. Por isso, raça e alimentação
              devem ser analisadas conjuntamente.
            </p>
          </div>

          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {imagens.map((imagem) => (
              <Imagem key={imagem.titulo} {...imagem} />
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-[0_14px_35px_rgba(15,23,42,0.08)]">
              <h3 className="text-xl font-black text-slate-950">Pekin</h3>
              <p className="mt-3 text-justify leading-7 text-slate-600">
                É frequentemente utilizada para produção de carne. A
                alimentação deve acompanhar o crescimento rápido e o objetivo
                de obtenção de uma carcaça de qualidade.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-[0_14px_35px_rgba(15,23,42,0.08)]">
              <h3 className="text-xl font-black text-slate-950">
                Khaki Campbell
              </h3>
              <p className="mt-3 text-justify leading-7 text-slate-600">
                É conhecida pelo potencial de produção de ovos. A alimentação
                deve fornecer energia, proteína, aminoácidos, minerais e
                vitaminas compatíveis com a produção e manutenção corporal.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-[0_14px_35px_rgba(15,23,42,0.08)]">
              <h3 className="text-xl font-black text-slate-950">Muscovy</h3>
              <p className="mt-3 text-justify leading-7 text-slate-600">
                O Muscovy, ou pato-mudo, possui características produtivas
                próprias. O maneio alimentar deve considerar idade, sexo,
                finalidade e sistema de produção.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NUTRIENTES */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wider text-green-700">
            Nutrição
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
            Nutrientes essenciais para o pato
          </h2>

          <p className="mt-5 text-justify leading-8 text-slate-600">
            O objetivo de uma dieta equilibrada é fornecer os nutrientes
            necessários para manutenção, crescimento, reprodução e produção,
            evitando tanto deficiências como excesso de nutrientes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            [
              "Energia",
              "Necessária para manutenção, crescimento, movimento e produção. O excesso energético pode favorecer deposição excessiva de gordura.",
            ],
            [
              "Proteína",
              "Fundamental para formação e renovação dos tecidos. A quantidade deve estar associada à fase de produção e à qualidade dos aminoácidos.",
            ],
            [
              "Aminoácidos",
              "Lisina, metionina e outros aminoácidos são importantes para crescimento, formação muscular, penas e produção de ovos.",
            ],
            [
              "Minerais",
              "Cálcio, fósforo, sódio e outros minerais participam da formação óssea, metabolismo e, nas poedeiras, da formação da casca.",
            ],
            [
              "Vitaminas",
              "Participam de processos metabólicos, crescimento, reprodução e funcionamento adequado do organismo.",
            ],
            [
              "Fibra",
              "Deve estar em níveis compatíveis com a capacidade digestiva e a finalidade da dieta. O excesso pode reduzir a densidade energética.",
            ],
          ].map(([titulo, texto]) => (
            <article
              key={titulo}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.13)]"
            >
              <h3 className="text-xl font-black text-slate-950">{titulo}</h3>
              <p className="mt-4 text-justify leading-7 text-slate-600">
                {texto}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* FASES */}
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-green-300">
              Maneio por fases
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              A dieta deve acompanhar o desenvolvimento
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                titulo: "Patinhos jovens",
                texto:
                  "Nesta fase, a prioridade é garantir nutrientes suficientes para crescimento, formação óssea, desenvolvimento muscular e formação adequada da plumagem. A ração deve ser de boa qualidade e facilmente consumida.",
              },
              {
                titulo: "Crescimento",
                texto:
                  "A dieta deve acompanhar o aumento do peso corporal sem provocar deposição excessiva de gordura. O consumo deve ser acompanhado juntamente com o crescimento.",
              },
              {
                titulo: "Engorda / acabamento",
                texto:
                  "Em sistemas de produção de carne, a alimentação deve procurar eficiência produtiva e qualidade da carcaça. Alterações bruscas na dieta devem ser evitadas.",
              },
              {
                titulo: "Poedeiras e reprodução",
                texto:
                  "As fêmeas em produção necessitam de uma dieta compatível com a produção de ovos, incluindo adequado fornecimento de cálcio, fósforo, aminoácidos, energia, vitaminas e água.",
              },
            ].map((fase) => (
              <article
                key={fase.titulo}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.25)] backdrop-blur"
              >
                <h3 className="text-2xl font-black text-green-300">
                  {fase.titulo}
                </h3>

                <p className="mt-4 text-justify leading-8 text-slate-300">
                  {fase.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INGREDIENTES */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Matérias-primas
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950">
              Ingredientes que podem entrar na formulação
            </h2>

            <p className="mt-5 text-justify leading-8 text-slate-600">
              A utilização de ingredientes locais pode ajudar a reduzir custos,
              mas qualquer substituição deve considerar o valor nutritivo,
              qualidade, segurança e composição final da dieta.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Milho", "Principal fonte energética em muitas formulações."],
              [
                "Farelo de soja",
                "Fonte importante de proteína e aminoácidos.",
              ],
              [
                "Farelo de trigo",
                "Pode contribuir com fibra e nutrientes, dependendo da formulação.",
              ],
              [
                "Óleo ou gordura",
                "Fonte concentrada de energia quando tecnicamente indicada.",
              ],
              [
                "Calcário",
                "Fonte de cálcio, particularmente importante em dietas de postura.",
              ],
              [
                "Fosfato",
                "Fonte de fósforo e cálcio conforme a formulação.",
              ],
              [
                "Premix",
                "Fornece vitaminas, minerais e outros micronutrientes conforme a formulação comercial.",
              ],
              [
                "Sal",
                "Fonte de sódio e cloro, devendo ser utilizado em quantidade controlada.",
              ],
            ].map(([titulo, texto]) => (
              <div
                key={titulo}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.07)]"
              >
                <h3 className="font-black text-slate-950">{titulo}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÁGUA */}
      <section className="bg-green-900 py-16">
        <div className="mx-auto max-w-5xl px-6 text-white lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-green-300">
            Água
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Água limpa é parte da alimentação
          </h2>

          <div className="mt-7 space-y-5 text-justify text-lg leading-8 text-green-50">
            <p>
              O fornecimento de água deve ser contínuo e adequado ao número de
              aves. Os bebedouros precisam ser mantidos limpos e protegidos
              contra fezes, cama, lama e restos de alimento.
            </p>

            <p>
              A qualidade microbiológica e físico-química da água deve ser
              considerada no programa sanitário da exploração. Água contaminada
              pode aumentar problemas digestivos e reduzir o desempenho das
              aves.
            </p>

            <p>
              Em períodos de temperaturas elevadas, a disponibilidade de água
              torna-se ainda mais importante, porque o consumo pode aumentar e
              a ave depende da água para ajudar na regulação da temperatura
              corporal.
            </p>
          </div>
        </div>
      </section>

      {/* ANGOLA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] border border-green-200 bg-gradient-to-br from-green-50 via-white to-slate-50 p-8 shadow-[0_24px_60px_rgba(22,101,52,0.10)] md:p-12">
          <p className="text-sm font-bold uppercase tracking-wider text-green-700">
            Realidade angolana
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
            Alimentação de patos em sistemas de pequena e média escala
          </h2>

          <div className="mt-7 grid gap-8 lg:grid-cols-2">
            <div className="space-y-5 text-justify leading-8 text-slate-700">
              <p>
                A criação de patos pode ser integrada em sistemas familiares,
                periurbanos e empresariais, desde que exista disponibilidade de
                alimento, água, instalações adequadas e acompanhamento
                sanitário.
              </p>

              <p>
                A utilização de ingredientes produzidos localmente pode ser
                vantajosa, mas não significa que o produtor possa fornecer
                apenas milho, restos de cozinha ou outros alimentos sem
                equilíbrio nutricional.
              </p>

              <p>
                A escolha da raça também deve considerar o mercado. Uma
                exploração direcionada para carne necessita de animais e
                alimentação adequados para crescimento e rendimento de
                carcaça, enquanto uma exploração de ovos deve priorizar
                linhagens e dietas compatíveis com postura.
              </p>
            </div>

            <div className="rounded-3xl border border-green-200 bg-white p-7 shadow-[0_15px_40px_rgba(15,23,42,0.07)]">
              <h3 className="text-xl font-black text-slate-950">
                Exemplo de referência em Angola
              </h3>

              <p className="mt-4 text-justify leading-7 text-slate-600">
                A Quinta do Pinhão, localizada em Quimuala, município de
                Ambriz, província do Bengo, apresenta criação de patos para
                consumo e criação, mostrando que esta atividade já integra
                iniciativas produtivas no país.
              </p>

              <a
                href="https://quintadopinhao.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-xl bg-green-800 px-5 py-3 font-bold text-white transition hover:bg-green-700"
              >
                Ver referência em Angola
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ERROS */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-red-700">
              Atenção
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950">
              Erros alimentares que devem ser evitados
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              "Fornecer apenas milho como alimentação principal.",
              "Trocar a ração bruscamente.",
              "Utilizar ingredientes mofados ou deteriorados.",
              "Manter alimento exposto à humidade e roedores.",
              "Não controlar o consumo de água.",
              "Utilizar a mesma dieta para patinhos, adultos e poedeiras.",
              "Ignorar diferenças entre raças e objetivos produtivos.",
              "Não acompanhar peso, crescimento, produção e condição corporal.",
            ].map((erro) => (
              <div
                key={erro}
                className="rounded-2xl border border-red-100 bg-red-50 p-5 font-medium text-slate-700 shadow-[0_10px_25px_rgba(127,29,29,0.05)]"
              >
                {erro}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-[0_25px_65px_rgba(15,23,42,0.25)] md:p-12">
          <p className="text-sm font-bold uppercase tracking-wider text-green-300">
            Checklist do produtor
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Antes de alterar a alimentação
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Qual é a raça ou linhagem?",
              "A finalidade é carne, ovos ou reprodução?",
              "Qual é a idade dos animais?",
              "Qual é o peso médio?",
              "Existe água limpa disponível continuamente?",
              "Os ingredientes estão secos e em boas condições?",
              "A dieta fornece proteína, energia, minerais e vitaminas adequados?",
              "O consumo e o crescimento estão sendo registados?",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="border-t border-slate-200 bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-black text-slate-950">
            Fontes e referências de imagens
          </h2>

          <div className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
            <p>
              Wikimedia Commons — Pekin Ducks, Katie Chodil, licença CC BY 2.0.
            </p>

            <p>
              Wikimedia Commons — Khaki Campbell Duck, Partonez, licença CC
              BY-SA 4.0.
            </p>

            <p>
              Wikimedia Commons — Muscovy-ducks, Sufangxi, licença CC0.
            </p>

            <p>
              Referência produtiva em Angola — Quinta do Pinhão, Ambriz,
              província do Bengo.
            </p>
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="bg-white py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <Link
            href="/pecuaria/patos"
            className="rounded-xl border border-slate-300 px-6 py-3 text-center font-bold text-slate-700 transition hover:bg-slate-100"
          >
            Voltar aos Patos
          </Link>

          <Link
            href="/pecuaria/patos/orientacoes/instalacoes"
            className="rounded-xl bg-green-800 px-6 py-3 text-center font-bold text-white transition hover:bg-green-700"
          >
            Próxima orientação: Instalações
          </Link>
        </div>
      </section>

    </main>
  );
}