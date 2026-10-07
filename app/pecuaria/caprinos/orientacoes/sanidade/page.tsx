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
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Goat%20in%20Africa.jpg?width=1600",
    href: "https://commons.wikimedia.org/wiki/Category:Goats_in_Africa",
    alt: "Caprinos em sistema de criação africano",
    legenda:
      "A sanidade dos caprinos depende da prevenção, observação diária, alimentação adequada, higiene e intervenção técnica quando necessário.",
    fonte: "Wikimedia Commons — imagem ilustrativa.",
  },

  observacao: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Goat%20herd.jpg?width=1400",
    href: "https://commons.wikimedia.org/wiki/Category:Goats",
    alt: "Grupo de caprinos",
    legenda:
      "A observação diária do efetivo permite identificar alterações de comportamento, alimentação, locomoção e condição corporal.",
    fonte: "Wikimedia Commons — imagem ilustrativa.",
  },

  parasitas: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Goat%20grazing.jpg?width=1400",
    href: "https://commons.wikimedia.org/wiki/Category:Goats_grazing",
    alt: "Caprinos em pastoreio",
    legenda:
      "O sistema de pastoreio influencia a exposição dos animais a diferentes agentes parasitários e deve fazer parte do planeamento sanitário.",
    fonte: "Wikimedia Commons — imagem ilustrativa.",
  },

  cabritos: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Goat%20kids.jpg?width=1400",
    href: "https://commons.wikimedia.org/wiki/Category:Goat_kids",
    alt: "Cabritos",
    legenda:
      "Os cabritos exigem atenção especial devido à maior vulnerabilidade durante as primeiras fases de vida.",
    fonte: "Wikimedia Commons — imagem ilustrativa.",
  },

  casco: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Goat%20hoof.jpg?width=1200",
    href: "https://commons.wikimedia.org/wiki/Category:Goat_hooves",
    alt: "Casco de caprino",
    legenda:
      "O acompanhamento dos cascos é importante para prevenir problemas de locomoção e perdas de desempenho.",
    fonte: "Wikimedia Commons — imagem ilustrativa.",
  },
};

const pilares = [
  {
    titulo: "Observação diária",
    texto:
      "O produtor deve observar o comportamento, consumo de alimento, ingestão de água, locomoção, aparência das fezes, condição corporal e sinais anormais. Alterações precoces podem permitir intervenção antes de o problema se agravar.",
  },
  {
    titulo: "Higiene",
    texto:
      "Instalações limpas, secas e bem ventiladas ajudam a reduzir condições favoráveis à disseminação de agentes infecciosos e parasitários.",
  },
  {
    titulo: "Nutrição",
    texto:
      "Uma alimentação adequada é componente essencial da saúde. Subnutrição, especialmente em períodos críticos, pode reduzir a capacidade dos animais de enfrentar desafios sanitários.",
  },
  {
    titulo: "Biossegurança",
    texto:
      "A entrada de novos animais, equipamentos, pessoas e materiais pode representar risco sanitário. Separação, observação e medidas de higiene ajudam a reduzir a introdução de problemas no efetivo.",
  },
  {
    titulo: "Prevenção",
    texto:
      "O programa sanitário deve procurar prevenir doenças através de vacinação quando indicada, controlo de parasitas, higiene, quarentena e acompanhamento veterinário.",
  },
  {
    titulo: "Registos",
    texto:
      "Registar doenças, tratamentos, mortes, partos, vacinações e entradas de animais permite identificar padrões e melhorar as decisões de maneio.",
  },
];

const problemas = [
  {
    titulo: "Doenças parasitárias",
    texto:
      "Os parasitas internos e externos podem causar perda de condição corporal, anemia, diarreia, redução do crescimento e queda do desempenho produtivo. O risco varia conforme ambiente, sistema de criação e condições de pastoreio.",
    prevencao:
      "Monitorização, maneio de pastagens, higiene e utilização responsável de antiparasitários.",
  },
  {
    titulo: "Problemas gastrointestinais",
    texto:
      "Diarreia, distúrbios digestivos e perda de apetite podem ter várias causas, incluindo parasitas, alterações alimentares, infeções ou alimentos inadequados.",
    prevencao:
      "Alimentação equilibrada, mudanças graduais de dieta, água limpa e avaliação técnica dos animais afetados.",
  },
  {
    titulo: "Problemas respiratórios",
    texto:
      "Más condições de ventilação, excesso de humidade, poeira, sobrelotação e determinados agentes infecciosos podem contribuir para problemas respiratórios.",
    prevencao:
      "Boa ventilação, instalações secas, redução da sobrelotação e isolamento de animais doentes.",
  },
  {
    titulo: "Problemas dos cascos",
    texto:
      "Alterações nos cascos podem provocar dor, dificuldade de locomoção, menor acesso ao alimento e redução do desempenho reprodutivo.",
    prevencao:
      "Inspeção regular, higiene, condições adequadas do piso e intervenção técnica quando necessário.",
  },
  {
    titulo: "Doenças da reprodução",
    texto:
      "Abortos, infertilidade, mortalidade neonatal e repetição de problemas reprodutivos podem estar relacionados com nutrição, agentes infecciosos, maneio ou outras causas.",
    prevencao:
      "Registos reprodutivos, higiene, alimentação adequada e investigação veterinária de problemas repetidos.",
  },
  {
    titulo: "Problemas nutricionais",
    texto:
      "Deficiências ou desequilíbrios alimentares podem refletir-se em crescimento reduzido, perda de condição, alterações reprodutivas e menor produção.",
    prevencao:
      "Planeamento alimentar, observação da condição corporal e avaliação dos recursos disponíveis.",
  },
];

const categorias = [
  {
    titulo: "Cabritos",
    texto:
      "Os recém-nascidos necessitam de atenção especial. A ingestão adequada de colostro, higiene do local de parto, proteção contra frio e humidade e acompanhamento do crescimento são fundamentais.",
  },
  {
    titulo: "Fêmeas gestantes",
    texto:
      "As fêmeas devem ser acompanhadas durante a gestação, especialmente nas fases finais. Condição corporal inadequada, problemas nutricionais ou doenças podem afetar a mãe e as crias.",
  },
  {
    titulo: "Fêmeas em lactação",
    texto:
      "A lactação aumenta as necessidades nutricionais. É importante acompanhar consumo, condição corporal, produção de leite e comportamento das crias.",
  },
  {
    titulo: "Reprodutores",
    texto:
      "Os machos utilizados na reprodução devem apresentar boa condição corporal e ausência de sinais de doença. Problemas sanitários podem comprometer o desempenho reprodutivo.",
  },
  {
    titulo: "Animais recém-adquiridos",
    texto:
      "Animais provenientes de outras explorações devem ser tratados como grupo de maior risco até que a sua condição sanitária seja avaliada.",
  },
];

const biosseguranca = [
  "Separar animais recém-chegados do efetivo residente.",
  "Evitar introduzir animais sem informação sobre a sua origem sanitária.",
  "Limpar e desinfetar equipamentos compartilhados quando apropriado.",
  "Controlar o acesso de pessoas estranhas às instalações.",
  "Evitar contacto desnecessário com rebanhos de outras explorações.",
  "Manter instalações limpas e secas.",
  "Controlar corretamente cadáveres e resíduos biológicos.",
  "Registar entradas e saídas de animais.",
];

const sinais = [
  "Perda de apetite ou redução repentina do consumo.",
  "Isolamento persistente do restante efetivo.",
  "Dificuldade de locomoção.",
  "Diarreia persistente ou alteração importante das fezes.",
  "Tosse, corrimento nasal ou dificuldade respiratória.",
  "Perda rápida de condição corporal.",
  "Palidez das mucosas.",
  "Feridas, inchaços ou alterações da pele.",
  "Aborto ou repetição de problemas reprodutivos.",
  "Mortalidade sem causa conhecida.",
];

const erros = [
  "Tratar todos os animais sem diagnóstico ou avaliação adequada.",
  "Utilizar antiparasitários repetidamente sem estratégia de controlo.",
  "Introduzir animais novos diretamente no rebanho.",
  "Não observar os animais diariamente.",
  "Ignorar animais com perda de condição corporal.",
  "Manter instalações húmidas e sobrelotadas.",
  "Não limpar bebedouros e comedouros.",
  "Não procurar assistência veterinária diante de mortalidade anormal.",
  "Não respeitar as instruções dos medicamentos veterinários.",
  "Utilizar medicamentos destinados a outras espécies sem orientação profissional.",
  "Não manter registos de vacinação e tratamentos.",
  "Consumir ou comercializar produtos de origem animal sem respeitar os períodos de segurança dos medicamentos.",
];

function ImagemTecnica({ imagem }: { imagem: Imagem }) {
  return (
    <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <a
        href={imagem.href}
        target="_blank"
        rel="noopener noreferrer"
        title="Ver fonte da imagem"
      >
        <img
          src={imagem.src}
          alt={imagem.alt}
          className="h-[280px] w-full object-cover transition duration-500 hover:scale-[1.02]"
        />
      </a>

      <figcaption className="px-5 py-4">
        <p className="text-sm leading-6 text-slate-700">
          {imagem.legenda}
        </p>

        <p className="mt-2 text-xs leading-5 text-slate-500">
          {imagem.fonte}
        </p>
      </figcaption>
    </figure>
  );
}

export default function SanidadeCaprinosPage() {
  return (
    <main className="min-h-screen bg-[#f7faf7] text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <img
            src={imagens.hero.src}
            alt={imagens.hero.alt}
            className="h-full w-full object-cover opacity-40"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <Link
            href="/pecuaria"
            className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            ← Voltar para Pecuária
          </Link>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            AGROINOVA ANGOLA · CAPRINOS
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Sanidade de Caprinos
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
            Prevenção de doenças, biossegurança, observação do efetivo,
            controlo parasitário, higiene, cuidados com cabritos e princípios
            para um programa sanitário adaptado às condições de criação em
            Angola.
          </p>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Saúde do efetivo
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Sanidade começa antes do aparecimento da doença
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
              <p>
                A sanidade de uma exploração caprina não deve ser entendida
                apenas como o tratamento de animais doentes. Um programa
                sanitário eficiente procura reduzir os riscos antes que os
                problemas apareçam, através de alimentação adequada, higiene,
                instalações apropriadas, biossegurança e acompanhamento
                veterinário.
              </p>

              <p>
                A observação diária constitui uma das ferramentas mais simples
                e importantes. O produtor que conhece o comportamento normal
                dos seus animais consegue identificar mais rapidamente mudanças
                no consumo, locomoção, postura, condição corporal ou interação
                com o restante efetivo.
              </p>

              <p>
                Em sistemas familiares, onde muitas vezes os recursos
                financeiros são limitados, a prevenção assume importância ainda
                maior. Melhorar higiene, reduzir humidade, controlar a entrada
                de animais e garantir alimentação adequada pode evitar perdas
                significativas.
              </p>

              <p>
                Em sistemas comerciais, o programa sanitário deve ser mais
                sistemático, com registos, quarentena, calendário de vacinação
                quando indicado, monitorização de parasitas e acompanhamento
                profissional.
              </p>
            </div>
          </div>

          <ImagemTecnica imagem={imagens.observacao} />
        </div>
      </section>

      {/* PILARES */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Prevenção
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Os pilares de um programa sanitário
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pilares.map((item) => (
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

      {/* OBSERVAÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Observação diária
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Conhecer o comportamento normal é uma ferramenta sanitária
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-slate-700">
              <p>
                Um animal saudável normalmente apresenta comportamento
                compatível com a sua idade e condição fisiológica, alimenta-se,
                bebe água, movimenta-se e interage com o grupo.
              </p>

              <p>
                Alterações repentinas devem ser investigadas. Um animal que se
                isola, deixa de comer, apresenta dificuldade de locomoção ou
                permanece deitado durante períodos incomuns pode estar
                enfrentando um problema.
              </p>

              <p>
                A observação não substitui o diagnóstico veterinário. Ela serve
                para identificar precocemente animais que necessitam de
                avaliação.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8">
            <h3 className="text-xl font-bold text-slate-900">
              Durante a observação
            </h3>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Consumo de alimento",
                "Consumo de água",
                "Locomoção",
                "Condição corporal",
                "Comportamento",
                "Fezes",
                "Respiração",
                "Pele e pelos",
                "Olhos e nariz",
                "Casco",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-white px-4 py-3 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DOENÇAS / PROBLEMAS */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
              Principais desafios
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Problemas sanitários que exigem atenção
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              A ocorrência e importância dos problemas variam conforme região,
              clima, sistema de produção, maneio, presença de agentes
              infecciosos e condições ambientais. Por isso, a lista abaixo
              constitui uma orientação para observação e não um diagnóstico.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {problemas.map((problema) => (
              <article
                key={problema.titulo}
                className="rounded-2xl border border-white/10 bg-white/5 p-7"
              >
                <h3 className="text-xl font-bold">
                  {problema.titulo}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {problema.texto}
                </p>

                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="text-sm font-semibold text-emerald-300">
                    Prevenção
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {problema.prevencao}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PARASITAS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <ImagemTecnica imagem={imagens.parasitas} />

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Parasitas
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              O controlo parasitário deve ser estratégico
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-slate-700">
              <p>
                Parasitas internos e externos podem comprometer o desempenho dos
                caprinos. A intensidade do problema depende do ambiente,
                sistema de criação, condições de pastoreio, idade dos animais e
                capacidade de controlo da exploração.
              </p>

              <p>
                O uso indiscriminado e repetido de antiparasitários pode
                contribuir para a seleção de populações resistentes. Por isso,
                o tratamento deve ser integrado num programa sanitário e, sempre
                que possível, apoiado por avaliação profissional.
              </p>

              <p>
                O maneio de pastagens, redução de contaminação, observação da
                condição corporal e monitorização de sinais clínicos podem
                complementar o uso responsável de medicamentos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CASCOS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
                Cascos
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                A locomoção também é um indicador de saúde
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-700">
                <p>
                  Problemas nos cascos podem provocar dor e fazer com que o
                  animal reduza o deslocamento, alimentação e atividade
                  reprodutiva. A observação da marcha deve fazer parte do
                  acompanhamento do efetivo.
                </p>

                <p>
                  Instalações permanentemente húmidas e pisos inadequados podem
                  aumentar os desafios relacionados com os cascos.
                </p>

                <p>
                  O corte funcional dos cascos, quando necessário, deve ser
                  realizado corretamente. Técnicas inadequadas podem provocar
                  lesões.
                </p>
              </div>
            </div>

            <ImagemTecnica imagem={imagens.casco} />
          </div>
        </div>
      </section>

      {/* CABRITOS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <ImagemTecnica imagem={imagens.cabritos} />

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-700">
              Cabritos
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              A prevenção começa no nascimento
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-slate-700">
              <p>
                Os cabritos apresentam maior vulnerabilidade durante as
                primeiras fases de vida. O cuidado com a higiene do local de
                parto e a ingestão adequada de colostro são componentes
                fundamentais.
              </p>

              <p>
                A cria deve ser observada quanto à capacidade de mamar,
                temperatura corporal, comportamento e evolução do peso e
                condição corporal.
              </p>

              <p>
                Diarreia, fraqueza, dificuldade respiratória ou mortalidade
                entre cabritos exigem investigação da causa. Tratar apenas os
                sinais sem identificar o problema pode permitir a continuidade
                da causa no rebanho.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Maneio por categoria
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Diferentes animais exigem diferentes cuidados
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categorias.map((categoria) => (
              <article
                key={categoria.titulo}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {categoria.titulo}
                </h3>

                <p className="mt-4 leading-7 text-slate-700">
                  {categoria.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BIOSSEGURANÇA */}
      <section className="bg-emerald-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
              Biossegurança
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Evitar a entrada e disseminação de problemas
            </h2>

            <p className="mt-5 leading-8 text-emerald-50/80">
              A biossegurança é especialmente importante quando uma exploração
              compra animais, recebe animais para reprodução ou mantém contacto
              frequente com outras explorações.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {biosseguranca.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-sm leading-7 text-emerald-50/80">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VACINAÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-blue-200 bg-blue-50 p-8 lg:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
            Vacinação
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            O calendário deve ser definido segundo o risco local
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-slate-700">
            <p>
              A vacinação é uma ferramenta importante de prevenção de doenças
              quando existe indicação para a região e para o sistema de
              produção. Entretanto, não é tecnicamente correto apresentar um
              calendário universal para todas as explorações de Angola sem
              considerar os riscos epidemiológicos locais.
            </p>

            <p>
              O programa deve ser estabelecido com apoio dos serviços
              veterinários competentes, considerando as doenças de importância
              na região, histórico da exploração, idade dos animais, estado
              fisiológico e produtos disponíveis.
            </p>

            <p>
              As vacinas devem ser conservadas e administradas de acordo com as
              instruções do fabricante e as orientações dos serviços
              veterinários.
            </p>
          </div>
        </div>
      </section>

      {/* SINAIS DE ALERTA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-red-200 bg-red-50 p-8 lg:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-700">
            Sinais de alerta
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Quando o produtor deve procurar assistência
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-slate-700">
            Um único sinal nem sempre indica uma doença específica. Porém,
            alterações persistentes, graves ou que afetam vários animais devem
            ser investigadas.
          </p>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {sinais.map((sinal) => (
              <div
                key={sinal}
                className="rounded-xl border border-red-100 bg-white p-4 text-sm leading-6 text-slate-700"
              >
                {sinal}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEDICAMENTOS */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
              Medicamentos veterinários
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Tratamento exige responsabilidade
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-slate-300">
              <p>
                Medicamentos veterinários não devem ser utilizados de forma
                indiscriminada. A escolha do produto, dose, via de administração
                e duração do tratamento depende do problema, animal, produto e
                orientação profissional.
              </p>

              <p>
                É especialmente importante respeitar os períodos de carência
                definidos para carne, leite ou outros produtos de origem
                animal.
              </p>

              <p>
                O uso inadequado de antimicrobianos também pode contribuir para
                a resistência aos medicamentos, constituindo um problema de
                saúde animal e saúde pública.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SISTEMAS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
            Sistema de produção
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Sanidade no sistema familiar e comercial
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <article className="rounded-3xl border border-slate-200 bg-white p-8">
            <h3 className="text-xl font-bold">Sistema familiar</h3>

            <p className="mt-4 leading-7 text-slate-700">
              Deve priorizar observação diária, higiene, alimentação adequada,
              água limpa, controlo de entrada de animais e procura de apoio
              veterinário quando surgirem sinais de doença ou mortalidade.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-8">
            <h3 className="text-xl font-bold">Sistema semi-intensivo</h3>

            <p className="mt-4 leading-7 text-slate-700">
              Permite maior organização do programa sanitário, incluindo
              separação de categorias, quarentena, controlo das instalações,
              monitorização de parasitas e registos.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-8">
            <h3 className="text-xl font-bold">Sistema comercial</h3>

            <p className="mt-4 leading-7 text-slate-700">
              Exige um programa sanitário estruturado, protocolos de
              biossegurança, registos completos, monitorização dos indicadores
              produtivos e acompanhamento veterinário regular.
            </p>
          </article>
        </div>
      </section>

      {/* ANGOLA */}
      <section className="bg-emerald-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Contexto angolano
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Um programa sanitário deve considerar a realidade de cada região
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-slate-700">
              <p>
                Angola possui diferentes condições climáticas, sistemas de
                produção e formas de criação de pequenos ruminantes. Por isso,
                os riscos sanitários não devem ser considerados exatamente
                iguais em todas as regiões.
              </p>

              <p>
                O produtor e o técnico devem observar a época do ano, condições
                de pastoreio, disponibilidade de água, origem dos animais,
                histórico de doenças e características das instalações.
              </p>

              <p>
                Em explorações familiares, medidas de baixo custo podem produzir
                benefícios importantes: melhorar a higiene, manter os animais
                secos, separar animais doentes, controlar a entrada de novos
                animais e garantir alimentação adequada.
              </p>

              <p>
                Em explorações comerciais, deve-se avançar para sistemas de
                registo e monitorização mais estruturados, permitindo analisar
                mortalidade, crescimento, reprodução, tratamentos e principais
                problemas sanitários.
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
            Práticas que podem aumentar o risco sanitário
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

      {/* NOTA */}
      <section className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            Nota técnica
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            Esta página apresenta princípios gerais de prevenção e maneio
            sanitário. Não substitui diagnóstico, prescrição ou acompanhamento
            de médico veterinário. Em situações de doença grave, mortalidade
            inexplicada, suspeita de doença contagiosa, aborto em série ou
            sinais que afetam vários animais, deve ser procurada assistência
            veterinária.
          </p>

          <p className="mt-4 leading-8 text-slate-700">
            O uso de medicamentos deve respeitar a legislação aplicável, as
            instruções do produto e as orientações dos profissionais
            responsáveis pela saúde animal.
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
                Materiais técnicos sobre produção, saúde e maneio de pequenos
                ruminantes.
              </p>

              <p>
                World Organisation for Animal Health (WOAH). Materiais técnicos
                sobre saúde animal, prevenção de doenças e utilização
                responsável de medicamentos veterinários.
              </p>

              <p>
                International Livestock Research Institute (ILRI). Recursos
                técnicos sobre pequenos ruminantes, doenças, sistemas de
                produção e saúde animal em África.
              </p>

              <p>
                World Health Organization (WHO). Materiais técnicos sobre
                resistência antimicrobiana e uso responsável de antimicrobianos.
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
              Biblioteca técnica de caprinicultura — AGROINOVA ANGOLA.
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
              href="/pecuaria/caprinos/orientacoes/alimentacao"
              className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
            >
              Alimentação
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}