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
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Goat%20grazing.jpg?width=1600",
    href: "https://commons.wikimedia.org/wiki/Category:Goats_grazing",
    alt: "Caprinos em alimentação e pastoreio",
    legenda:
      "O aproveitamento de pastagens, folhas e vegetação arbustiva é uma componente importante da alimentação de caprinos.",
    fonte: "Wikimedia Commons — imagem ilustrativa sobre caprinos em pastoreio.",
  },

  browse: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Goat%20eating.jpg?width=1200",
    href: "https://commons.wikimedia.org/wiki/Category:Goats_eating",
    alt: "Cabra consumindo vegetação",
    legenda:
      "Os caprinos apresentam elevada capacidade de seleção de folhas, ramos jovens e outras partes das plantas.",
    fonte: "Wikimedia Commons — imagem ilustrativa.",
  },

  pastagem: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Goats%20grazing.jpg?width=1200",
    href: "https://commons.wikimedia.org/wiki/Category:Goats_grazing",
    alt: "Caprinos em área de pastoreio",
    legenda:
      "A disponibilidade e qualidade da pastagem devem ser acompanhadas ao longo das estações do ano.",
    fonte: "Wikimedia Commons — imagem ilustrativa.",
  },

  forragem: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Goat%20feeding.jpg?width=1200",
    href: "https://commons.wikimedia.org/wiki/Category:Goat_feeding",
    alt: "Alimentação de caprinos",
    legenda:
      "Forragens cortadas podem complementar o pastoreio ou constituir a base de sistemas de alimentação controlada.",
    fonte: "Wikimedia Commons — imagem ilustrativa.",
  },

  seca: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Goat%20in%20dry%20land.jpg?width=1200",
    href: "https://commons.wikimedia.org/wiki/Category:Goats_in_Africa",
    alt: "Caprinos em ambiente seco",
    legenda:
      "Na estação seca, a disponibilidade e qualidade dos alimentos podem diminuir, exigindo maior atenção ao maneio alimentar.",
    fonte: "Wikimedia Commons — imagem ilustrativa.",
  },
};

const principios = [
  {
    titulo: "Seleção alimentar",
    texto:
      "Os caprinos possuem comportamento alimentar bastante seletivo. Em comparação com animais predominantemente pastadores, conseguem utilizar uma grande diversidade de folhas, rebentos, ervas, arbustos e outras partes vegetais. Esta característica deve ser aproveitada no desenho do sistema alimentar.",
  },
  {
    titulo: "Diversidade da dieta",
    texto:
      "Uma alimentação baseada numa única planta ou num único tipo de resíduo pode apresentar limitações nutricionais. Sempre que possível, é preferível combinar diferentes fontes de forragem e, quando necessário, utilizar suplementação energética, proteica e mineral.",
  },
  {
    titulo: "Qualidade antes da quantidade",
    texto:
      "A existência de grande quantidade de material vegetal não significa necessariamente que exista alimento de boa qualidade. Plantas muito maduras, secas ou fibrosas podem apresentar menor valor nutritivo. A avaliação deve considerar estado vegetativo, palatabilidade, disponibilidade de folhas e condição corporal dos animais.",
  },
  {
    titulo: "Água é parte da alimentação",
    texto:
      "O fornecimento de água limpa e acessível deve ser tratado como componente do maneio nutricional. A ingestão de água está relacionada com consumo de matéria seca, temperatura ambiental, produção de leite e condição fisiológica.",
  },
];

const recursosAlimentares = [
  {
    titulo: "Pastagens naturais",
    texto:
      "As pastagens naturais podem fornecer gramíneas, ervas e outras plantas utilizadas pelos caprinos. A sua qualidade varia com o solo, chuva, pressão de pastoreio e estádio de maturação das plantas.",
    uso: "Base alimentar em sistemas extensivos e familiares.",
  },
  {
    titulo: "Folhas e arbustos",
    texto:
      "Folhas de árvores e arbustos podem representar um recurso particularmente importante para caprinos. Em sistemas africanos, o chamado browse pode complementar a pastagem ou assumir maior importância quando a disponibilidade de gramíneas diminui.",
    uso: "Importante sobretudo na época seca e em sistemas com acesso à vegetação arbustiva.",
  },
  {
    titulo: "Forragem cortada",
    texto:
      "O sistema de corte e transporte permite fornecer aos animais plantas forrageiras recolhidas fora das instalações. É uma alternativa útil quando os animais não podem permanecer em pastoreio livre.",
    uso: "Sistemas familiares, semi-intensivos e intensivos.",
  },
  {
    titulo: "Feno",
    texto:
      "O feno permite conservar parte da produção de forragem para períodos de menor disponibilidade. Deve ser produzido com material vegetal de qualidade, adequadamente seco e armazenado protegido da humidade.",
    uso: "Reserva alimentar para a estação seca.",
  },
  {
    titulo: "Resíduos agrícolas",
    texto:
      "Palhas, folhas, cascas e outros subprodutos agrícolas podem ter utilidade alimentar, mas o seu valor nutritivo é variável. Alguns resíduos muito fibrosos não devem constituir, isoladamente, a dieta de animais em crescimento, gestação avançada ou elevada produção.",
    uso: "Complemento alimentar, sobretudo quando existe escassez de forragem.",
  },
  {
    titulo: "Concentrados",
    texto:
      "Milho, farelos, subprodutos agroindustriais e outras matérias-primas podem fornecer energia e proteína. O uso deve ser ajustado ao objetivo produtivo, evitando desperdícios e desequilíbrios nutricionais.",
    uso: "Animais em crescimento, reprodução, lactação ou sistemas comerciais.",
  },
];

const categorias = [
  {
    titulo: "Cabras gestantes",
    texto:
      "As necessidades nutricionais aumentam especialmente nas fases finais da gestação. A alimentação deve procurar manter boa condição corporal sem provocar excesso de gordura. A qualidade da dieta torna-se particularmente importante quando há desenvolvimento de mais de um feto.",
  },
  {
    titulo: "Cabras em lactação",
    texto:
      "A produção de leite aumenta a exigência por energia, proteína, minerais e água. Uma dieta de baixa qualidade pode resultar em perda excessiva de condição corporal e menor capacidade produtiva.",
  },
  {
    titulo: "Cabritos",
    texto:
      "Os cabritos dependem inicialmente do leite materno. À medida que o rúmen se desenvolve, devem ter acesso progressivo a alimentos sólidos de boa qualidade, água limpa e, quando necessário, uma suplementação adequada à fase de crescimento.",
  },
  {
    titulo: "Reprodutores",
    texto:
      "Os machos utilizados na reprodução devem manter condição corporal adequada. Tanto a subnutrição como o excesso de gordura podem prejudicar o desempenho do animal e a eficiência do sistema reprodutivo.",
  },
  {
    titulo: "Animais de manutenção",
    texto:
      "Animais adultos fora de períodos de elevada exigência podem utilizar principalmente pastagem, browse e forragens disponíveis. A suplementação deve ser orientada pela qualidade dos recursos e pela condição corporal.",
  },
];

const erros = [
  "Considerar que qualquer vegetação disponível possui o mesmo valor nutritivo.",
  "Deixar os animais dependerem exclusivamente de capim seco e muito maduro durante toda a estação seca.",
  "Fornecer grandes quantidades de concentrado sem adaptação gradual.",
  "Utilizar plantas desconhecidas sem avaliar a possibilidade de toxicidade.",
  "Fornecer resíduos agrícolas como único alimento durante períodos prolongados.",
  "Ignorar a condição corporal das cabras gestantes e lactantes.",
  "Não disponibilizar água limpa de forma regular.",
  "Não conservar forragem durante a época de abundância para utilização na época de escassez.",
  "Cortar vegetação de áreas contaminadas por produtos químicos, fezes ou águas residuais.",
  "Aumentar a carga animal sem considerar a capacidade de suporte da área de pastoreio.",
];

const sistemas = [
  {
    titulo: "Sistema familiar/extensivo",
    texto:
      "Normalmente depende mais de pastagens naturais, vegetação espontânea, folhas, arbustos e resíduos disponíveis na propriedade. A principal prioridade é melhorar o aproveitamento dos recursos locais sem provocar sobrepastoreio.",
    pontos: [
      "Aproveitar a diversidade vegetal existente.",
      "Reservar forragem para a época seca.",
      "Proteger fontes de água.",
      "Observar a condição corporal dos animais.",
      "Evitar dependência excessiva de alimentos comprados.",
    ],
  },
  {
    titulo: "Sistema semi-intensivo",
    texto:
      "Combina pastoreio com fornecimento controlado de forragens cortadas, feno, resíduos agrícolas e suplementos. Permite maior controlo do consumo e pode melhorar o desempenho produtivo.",
    pontos: [
      "Planeamento das áreas de pastoreio.",
      "Uso de forragem de corte.",
      "Suplementação direcionada.",
      "Separação de categorias produtivas.",
      "Registo de produção e condição corporal.",
    ],
  },
  {
    titulo: "Sistema comercial/intensivo",
    texto:
      "Exige maior controlo da formulação das dietas, qualidade das matérias-primas, disponibilidade de água, higiene dos comedouros e avaliação regular do desempenho dos animais.",
    pontos: [
      "Formulação de dietas equilibradas.",
      "Controlo das matérias-primas.",
      "Redução de desperdícios.",
      "Monitorização do ganho de peso ou produção de leite.",
      "Planeamento das reservas alimentares.",
    ],
  },
];

function ImagemTecnica({
  imagem,
  grande = false,
}: {
  imagem: Imagem;
  grande?: boolean;
}) {
  return (
    <figure className={`overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm ${grande ? "" : ""}`}>
      <a
        href={imagem.href}
        target="_blank"
        rel="noopener noreferrer"
        title="Ver fonte da imagem"
      >
        <img
          src={imagem.src}
          alt={imagem.alt}
          className={`w-full object-cover transition duration-500 hover:scale-[1.02] ${
            grande ? "h-[420px]" : "h-[260px]"
          }`}
        />
      </a>

      <figcaption className="px-5 py-4">
        <p className="text-sm leading-6 text-slate-700">{imagem.legenda}</p>
        <p className="mt-2 text-xs leading-5 text-slate-500">{imagem.fonte}</p>
      </figcaption>
    </figure>
  );
}

export default function AlimentacaoCaprinosPage() {
  return (
    <main className="min-h-screen bg-[#f7faf7] text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <img
            src={imagens.hero.src}
            alt={imagens.hero.alt}
            className="h-full w-full object-cover opacity-45"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <Link
              href="/pecuaria"
              className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur hover:bg-white/20"
            >
              ← Voltar para Pecuária
            </Link>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              AGROINOVA ANGOLA · CAPRINOS
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Alimentação de Caprinos
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
              Princípios de alimentação, utilização de pastagens, folhas,
              arbustos, forragens, resíduos agrícolas e suplementos,
              considerando as diferentes fases produtivas e as condições dos
              sistemas de criação em Angola.
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Fundamentos nutricionais
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Alimentar bem não significa apenas fornecer mais alimento
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
              <p>
                A alimentação é um dos principais fatores que determinam o
                crescimento, a reprodução, a produção de leite, a sobrevivência
                dos cabritos e a resistência dos animais aos desafios
                ambientais. No entanto, uma avaliação correta da alimentação
                deve considerar não apenas a quantidade de material disponível,
                mas também a sua qualidade nutricional, digestibilidade,
                disponibilidade sazonal e capacidade de consumo pelo animal.
              </p>

              <p>
                Os caprinos apresentam uma estratégia alimentar particularmente
                adaptada à utilização de vegetação diversificada. São animais
                seletivos e conseguem aproveitar folhas, rebentos, arbustos e
                outras partes das plantas que podem ser menos utilizadas por
                animais predominantemente pastadores.
              </p>

              <p>
                Esta característica é especialmente relevante em vários
                sistemas africanos, nos quais o acesso a vegetação arbustiva
                pode complementar as gramíneas. Por isso, o planeamento
                alimentar de uma exploração caprina deve considerar a
                totalidade dos recursos disponíveis e não apenas a pastagem
                herbácea.
              </p>

              <p>
                Em Angola, a estratégia deve ainda considerar a diversidade
                agroecológica do país. Uma solução alimentar adequada para uma
                zona húmida não deve ser automaticamente aplicada a uma zona
                semiárida. O produtor deve observar os recursos realmente
                disponíveis na sua região, a época do ano e o objetivo da
                criação.
              </p>
            </div>
          </div>

          <ImagemTecnica imagem={imagens.browse} />
        </div>
      </section>

      {/* PRINCÍPIOS */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Princípios
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Quatro princípios para o maneio alimentar
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {principios.map((item) => (
              <article
                key={item.titulo}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {item.titulo}
                </h3>

                <p className="mt-4 leading-7 text-slate-700">
                  {item.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PASTAGEM E BROWSE */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Pastagem e vegetação
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Pastagem, folhas e arbustos
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-slate-700">
              <p>
                Em sistemas extensivos e familiares, a vegetação natural pode
                representar uma parcela importante da dieta dos caprinos. A
                qualidade do recurso varia conforme a estação, precipitação,
                fertilidade do solo, pressão de pastoreio e estádio de
                desenvolvimento das plantas.
              </p>

              <p>
                Uma das vantagens dos caprinos é a capacidade de explorar
                diferentes estratos da vegetação. Folhas e rebentos de arbustos
                e árvores podem complementar gramíneas e ervas, especialmente
                quando estas apresentam menor qualidade durante a estação seca.
              </p>

              <p>
                Contudo, o facto de uma planta ser consumida pelos animais não
                significa que seja automaticamente segura ou nutricionalmente
                adequada em grandes quantidades. Plantas desconhecidas devem ser
                avaliadas antes de serem introduzidas deliberadamente na dieta.
              </p>
            </div>
          </div>

          <ImagemTecnica imagem={imagens.pastagem} />
        </div>
      </section>

      {/* RECURSOS */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
              Recursos alimentares
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              O que pode fazer parte da alimentação?
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              A dieta deve ser construída a partir dos recursos disponíveis,
              procurando combinar fontes de fibra, energia, proteína, minerais
              e água.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {recursosAlimentares.map((item) => (
              <article
                key={item.titulo}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-xl font-bold">{item.titulo}</h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {item.texto}
                </p>

                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="text-sm font-semibold text-emerald-300">
                    Aplicação
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {item.uso}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FORRAGENS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <ImagemTecnica imagem={imagens.forragem} />

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Forragens
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Forragem verde, feno e alimentação de corte
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-slate-700">
              <p>
                A produção de forragem para corte pode reduzir a dependência do
                pastoreio contínuo e permitir maior controlo sobre a quantidade
                e qualidade do alimento fornecido. O sistema é particularmente
                útil quando os animais precisam permanecer próximos das
                instalações.
              </p>

              <p>
                O feno constitui uma estratégia de conservação. A forragem deve
                ser colhida num estádio adequado, seca corretamente e armazenada
                em local protegido da chuva, humidade excessiva, solo e
                contaminação.
              </p>

              <p>
                Em regiões onde existe produção agrícola, a integração entre
                agricultura e caprinicultura pode criar oportunidades para
                utilizar determinados subprodutos e resíduos. Entretanto, a
                utilização deve considerar o valor nutritivo e as limitações de
                cada material.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ÉPOCA SECA */}
      <section className="border-y border-amber-200 bg-amber-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-700">
                Maneio na estação seca
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Preparar a alimentação antes da escassez
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-700">
                <p>
                  A estação seca é um dos períodos que mais exige planeamento
                  alimentar. À medida que a vegetação verde diminui, aumenta a
                  proporção de material seco e fibroso disponível no campo.
                </p>

                <p>
                  A estratégia não deve começar quando os animais já apresentam
                  perda acentuada de condição corporal. A conservação antecipada
                  de feno, a produção de forragens de corte e a organização de
                  fontes alternativas de alimentação podem reduzir o impacto da
                  escassez.
                </p>

                <p>
                  Em determinadas regiões africanas, folhas e arbustos
                  permanecem disponíveis quando as gramíneas já perderam parte
                  da sua qualidade. Este recurso pode ter grande importância,
                  mas deve ser utilizado de forma responsável e considerando a
                  segurança das espécies vegetais.
                </p>
              </div>
            </div>

            <ImagemTecnica imagem={imagens.seca} />
          </div>
        </div>
      </section>

      {/* SUPLEMENTAÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
            Suplementação
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Quando a alimentação disponível não cobre as necessidades
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            A suplementação deve corrigir uma limitação concreta da dieta e não
            substituir automaticamente a alimentação de base. Dependendo do
            sistema, pode ser necessário complementar energia, proteína,
            minerais ou simplesmente aumentar a disponibilidade de forragem de
            qualidade.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="grid bg-slate-100 text-sm font-bold text-slate-900 md:grid-cols-3">
            <div className="p-5">Tipo</div>
            <div className="p-5">Função principal</div>
            <div className="p-5">Cuidados</div>
          </div>

          <div className="divide-y divide-slate-200">
            <div className="grid md:grid-cols-3">
              <div className="p-5 font-semibold">Energia</div>
              <div className="p-5 text-slate-700">
                Apoiar crescimento, manutenção e produção.
              </div>
              <div className="p-5 text-slate-700">
                Evitar excesso e alterações bruscas da dieta.
              </div>
            </div>

            <div className="grid md:grid-cols-3">
              <div className="p-5 font-semibold">Proteína</div>
              <div className="p-5 text-slate-700">
                Apoiar crescimento, reprodução e produção de leite.
              </div>
              <div className="p-5 text-slate-700">
                Considerar a qualidade da forragem e possíveis fatores
                antinutricionais.
              </div>
            </div>

            <div className="grid md:grid-cols-3">
              <div className="p-5 font-semibold">Minerais</div>
              <div className="p-5 text-slate-700">
                Participar da formação óssea, metabolismo e reprodução.
              </div>
              <div className="p-5 text-slate-700">
                A suplementação deve ser adequada à dieta e à região.
              </div>
            </div>

            <div className="grid md:grid-cols-3">
              <div className="p-5 font-semibold">Vitaminas</div>
              <div className="p-5 text-slate-700">
                Apoiar funções metabólicas e fisiológicas.
              </div>
              <div className="p-5 text-slate-700">
                Necessidade depende da dieta, idade e estado fisiológico.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MINERAIS */}
      <section className="bg-emerald-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
                Minerais
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Minerais não devem ser esquecidos
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-emerald-50/80">
                <p>
                  Pastagens e forragens nem sempre fornecem todos os minerais
                  necessários em quantidade adequada. A necessidade pode variar
                  conforme o solo, as plantas utilizadas, a idade, gestação,
                  lactação e nível produtivo.
                </p>

                <p>
                  A suplementação mineral deve ser feita de forma responsável.
                  Produtos minerais comerciais devem ser utilizados segundo a
                  sua composição e orientação técnica, evitando a ideia de que
                  maior quantidade significa melhor resultado.
                </p>

                <p>
                  Em sistemas familiares, uma fonte mineral adequada e protegida
                  da humidade pode constituir uma ferramenta simples para
                  melhorar o maneio, desde que seja compatível com os restantes
                  componentes da dieta.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-bold">Atenção técnica</h3>

              <p className="mt-4 leading-7 text-emerald-50/80">
                Deficiências minerais não devem ser diagnosticadas apenas pela
                observação de um único sinal clínico. Problemas de crescimento,
                reprodução ou condição corporal podem ter várias causas. Quando
                existe suspeita de deficiência, deve-se procurar avaliação
                veterinária ou zootécnica e, quando possível, análise da dieta,
                forragem, água ou solo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ÁGUA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-blue-200 bg-blue-50 p-8 lg:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
            Água
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Água limpa e acessível faz parte do plano alimentar
          </h2>

          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            <div className="space-y-5 leading-8 text-slate-700">
              <p>
                A disponibilidade de água deve ser considerada juntamente com
                a alimentação. Animais que recebem forragem seca, que vivem em
                ambientes quentes ou que produzem leite podem apresentar maior
                necessidade de água.
              </p>

              <p>
                Os recipientes devem ser mantidos limpos e posicionados de forma
                a reduzir a contaminação por fezes, lama, restos de alimentos
                ou outros materiais.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-bold text-slate-900">
                Boas práticas
              </h3>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                <li>• Disponibilizar água de qualidade.</li>
                <li>• Limpar regularmente os bebedouros.</li>
                <li>• Evitar acumulação de fezes junto aos recipientes.</li>
                <li>• Proteger a fonte contra contaminação.</li>
                <li>• Observar o acesso dos animais mais jovens.</li>
                <li>• Verificar a disponibilidade durante períodos de calor.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FASES PRODUTIVAS */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Maneio por categoria
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              A dieta deve acompanhar a fase produtiva
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Não existe uma única dieta adequada para todos os caprinos de uma
              exploração. Animais em crescimento, gestação, lactação,
              reprodução e manutenção apresentam necessidades diferentes.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categorias.map((item) => (
              <article
                key={item.titulo}
                className="rounded-2xl border border-slate-200 p-7"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {item.titulo}
                </h3>

                <p className="mt-4 leading-7 text-slate-700">
                  {item.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CABRITOS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl bg-slate-900 p-8 text-white lg:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
            Alimentação dos cabritos
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            O início da vida determina grande parte do potencial produtivo
          </h2>

          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <div>
              <h3 className="font-bold text-white">Primeiros dias</h3>
              <p className="mt-3 leading-7 text-slate-300">
                A ingestão adequada de colostro nas primeiras horas de vida é
                fundamental para a proteção inicial do cabrito. A assistência
                deve ser particularmente cuidadosa quando existe rejeição,
                fraqueza ou dificuldade de sucção.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-white">Transição</h3>
              <p className="mt-3 leading-7 text-slate-300">
                À medida que o sistema digestivo se desenvolve, o cabrito deve
                ter acesso gradual a alimentos sólidos de boa qualidade e água
                limpa.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-white">Crescimento</h3>
              <p className="mt-3 leading-7 text-slate-300">
                A qualidade da alimentação durante o crescimento influencia o
                desenvolvimento corporal e pode afetar a idade e condição em que
                os animais entram na reprodução.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GESTAÇÃO E LACTAÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-pink-200 bg-pink-50 p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Cabras gestantes
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              A alimentação das cabras gestantes deve ser acompanhada ao longo
              da gestação. Na fase final, o crescimento fetal aumenta a
              importância de uma dieta de qualidade. A estratégia deve procurar
              evitar tanto a subnutrição como o excesso de condição corporal.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Quando existe disponibilidade limitada de forragem, as fêmeas
              gestantes devem receber atenção prioritária, especialmente quando
              apresentam múltiplos fetos ou condição corporal insuficiente.
            </p>
          </article>

          <article className="rounded-3xl border border-purple-200 bg-purple-50 p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Cabras em lactação
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              A lactação aumenta as necessidades nutricionais. Quando a dieta
              não acompanha a produção de leite, a fêmea pode mobilizar reservas
              corporais e perder condição.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              O fornecimento de forragem de boa qualidade, água suficiente e
              suplementação direcionada pode melhorar a capacidade de sustentar
              a produção e, simultaneamente, manter a saúde da matriz.
            </p>
          </article>
        </div>
      </section>

      {/* CONSERVAÇÃO */}
      <section className="bg-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Conservação de alimentos
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Produzir alimento quando existe abundância para utilizar quando
              existe escassez
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              O planeamento alimentar de uma exploração deve considerar o
              calendário agrícola e climático. A conservação de feno ou de
              outras forragens adequadas pode funcionar como uma reserva
              estratégica durante períodos em que a pastagem perde qualidade.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Escolher forragem de qualidade.",
              "Secar corretamente antes do armazenamento.",
              "Proteger contra chuva e humidade.",
              "Evitar contacto prolongado com o solo.",
            ].map((texto) => (
              <div
                key={texto}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <p className="font-semibold leading-7 text-slate-800">
                  {texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SISTEMAS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
            Sistemas de produção
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Alimentação conforme o tipo de exploração
          </h2>
        </div>

        <div className="mt-10 space-y-6">
          {sistemas.map((sistema) => (
            <article
              key={sistema.titulo}
              className="rounded-3xl border border-slate-200 bg-white p-8"
            >
              <h3 className="text-2xl font-bold text-slate-900">
                {sistema.titulo}
              </h3>

              <p className="mt-4 max-w-4xl leading-8 text-slate-700">
                {sistema.texto}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {sistema.pontos.map((ponto) => (
                  <div
                    key={ponto}
                    className="rounded-xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700"
                  >
                    {ponto}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ANGOLA */}
      <section className="bg-emerald-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Aplicação em Angola
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Construir o plano alimentar a partir dos recursos locais
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-slate-700">
              <p>
                Angola apresenta grande diversidade de condições ambientais e
                sistemas agrícolas. Por isso, não é tecnicamente adequado
                estabelecer uma única dieta nacional para caprinos.
              </p>

              <p>
                Em cada exploração deve ser feito um levantamento dos recursos
                disponíveis: áreas de pastagem, espécies vegetais utilizadas
                pelos animais, resíduos de culturas, possibilidade de produção
                de feno, disponibilidade de água, acesso a concentrados e
                capacidade financeira do produtor.
              </p>

              <p>
                A agricultura familiar pode beneficiar particularmente da
                integração entre culturas e criação de caprinos. Resíduos
                agrícolas selecionados podem contribuir para a alimentação,
                enquanto o estrume dos animais pode retornar ao sistema
                agrícola como fonte de matéria orgânica.
              </p>

              <p>
                Em regiões com maior período de seca, o planeamento deve começar
                durante a época de maior disponibilidade de forragem. A reserva
                alimentar não deve ser encarada como solução de emergência
                apenas quando os animais já perderam condição corporal.
              </p>

              <p>
                Para técnicos e estudantes, recomenda-se ainda registar as
                plantas utilizadas na alimentação, a época de disponibilidade,
                forma de fornecimento e resposta dos animais. Esses registos
                podem gerar informação útil para a investigação e para o
                desenvolvimento de recomendações adaptadas às diferentes
                regiões de Angola.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ERROS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-red-200 bg-red-50 p-8 lg:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-700">
            Erros frequentes
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Situações que podem comprometer a alimentação
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {erros.map((erro) => (
              <div
                key={erro}
                className="rounded-xl border border-red-100 bg-white p-4 text-sm leading-6 text-slate-700"
              >
                {erro}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTA TÉCNICA */}
      <section className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            Nota técnica
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            As recomendações desta página são orientações gerais de maneio
            alimentar. A formulação de dietas específicas deve considerar peso,
            idade, sexo, estado fisiológico, objetivo produtivo, qualidade dos
            alimentos, disponibilidade de água e condições sanitárias. Em
            situações de doença, perda acentuada de condição corporal,
            mortalidade ou suspeita de intoxicação, deve ser procurada
            assistência veterinária ou zootécnica.
          </p>

          <p className="mt-4 leading-8 text-slate-700">
            Particular atenção deve ser dada às plantas desconhecidas. Uma
            planta consumida espontaneamente pelos animais não deve ser
            automaticamente considerada segura para fornecimento em grandes
            quantidades ou como alimento exclusivo.
          </p>
        </div>
      </section>

      {/* REFERÊNCIAS */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Referências técnicas
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Fontes de apoio
            </h2>

            <div className="mt-8 space-y-5 text-sm leading-7 text-slate-600">
              <p>
                Food and Agriculture Organization of the United Nations (FAO).
                <strong>
                  {" "}
                  Small ruminant production and the small ruminant genetic
                  resource in tropical Africa.
                </strong>
              </p>

              <p>
                Food and Agriculture Organization of the United Nations (FAO).
                <strong>
                  {" "}
                  Animal nutrition and tropical forages.
                </strong>
              </p>

              <p>
                Food and Agriculture Organization of the United Nations (FAO).
                <strong>
                  {" "}
                  Strategies for dry season feeding of animals in Central and
                  Southern Africa.
                </strong>
              </p>

              <p>
                Food and Agriculture Organization of the United Nations (FAO).
                <strong>
                  {" "}
                  Integrating crops and livestock in West Africa.
                </strong>
              </p>

              <p>
                Food and Agriculture Organization of the United Nations (FAO).
                <strong>
                  {" "}
                  Goats — Livestock Systems.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="text-sm font-semibold text-emerald-300">
              CAPRINOS
            </p>

            <p className="mt-1 text-white">
              Continue a construir a biblioteca técnica de caprinicultura.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/pecuaria"
              className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Pecuária
            </Link>

            <Link
              href="/pecuaria/caprinos/orientacoes/racas"
              className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
            >
              Raças e genética
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}