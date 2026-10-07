import Link from "next/link";

type RacaCaprina = {
  nome: string;
  origem: string;
  aptidao: string;
  estatuto: string;
  descricao: string;
  caracteristicas: string[];
  adaptacao: string;
  recomendacao: string;
  imagem: string;
  imagemHref: string;
  imagemAlt: string;
  fonteImagem: string;
};

const racas: RacaCaprina[] = [
  {
    nome: "Caprino anão de Angola",
    origem: "Angola",
    aptidao: "Criação familiar e produção de carne",
    estatuto:
      "Recurso genético caprino associado a Angola e à África Austral",
    descricao:
      "O caprino anão de Angola é identificado na literatura sobre recursos genéticos de pequenos ruminantes da África Austral como uma população caprina associada a Angola. Animais de pequeno porte podem apresentar vantagens importantes em sistemas de criação de baixa disponibilidade de recursos, sobretudo quando combinam rusticidade, capacidade de aproveitamento de vegetação disponível e adaptação às condições ambientais locais.",
    caracteristicas: [
      "Pequeno porte em comparação com raças comerciais de grande estrutura corporal.",
      "Importância como recurso genético adaptado às condições locais.",
      "Pode ser encontrado associado a sistemas de criação de pequena escala.",
      "O desempenho depende fortemente da alimentação, sanidade e maneio.",
      "A caracterização genética e produtiva deve preceder programas de melhoramento.",
    ],
    adaptacao:
      "Para Angola, a conservação e avaliação dos caprinos locais é importante porque animais adaptados às condições ambientais podem constituir uma base útil para sistemas familiares e para programas de melhoramento. Não se deve assumir que uma raça exótica produzirá automaticamente melhor em qualquer ambiente.",
    recomendacao:
      "Antes de substituir animais locais por raças especializadas, o produtor deve avaliar disponibilidade de alimentação, água, assistência veterinária, mercado e capacidade de maneio.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Goats_in_a_kraal.jpg?width=1600",
    imagemHref:
      "https://commons.wikimedia.org/wiki/File:Goats_in_a_kraal.jpg",
    imagemAlt:
      "Caprinos mantidos em instalação rural na África Austral",
    fonteImagem:
      "Wikimedia Commons — imagem ilustrativa de caprinos em África Austral",
  },

  {
    nome: "Boer",
    origem: "África do Sul",
    aptidao: "Produção de carne",
    estatuto:
      "Raça comercial de carne desenvolvida na África Austral",
    descricao:
      "A Boer é uma das principais raças caprinas de carne desenvolvidas na África do Sul. A seleção da raça esteve associada à melhoria das características de produção de carne e ao desempenho em ambientes de pastoreio. A raça tornou-se importante em programas comerciais e também foi utilizada em cruzamentos para melhorar características de crescimento e produção de carne.",
    caracteristicas: [
      "Estrutura corporal relativamente grande.",
      "Aptidão especializada para produção de carne.",
      "Corpo geralmente branco com cabeça castanha ou avermelhada.",
      "Orelhas longas e pendentes.",
      "Boa capacidade de crescimento quando recebe alimentação e maneio adequados.",
    ],
    adaptacao:
      "A origem sul-africana torna a Boer particularmente relevante para estudar sistemas de produção em ambientes africanos. Entretanto, desempenho em Angola dependerá da disponibilidade de alimento, qualidade das instalações, controlo sanitário e adaptação dos animais ao sistema local.",
    recomendacao:
      "A introdução de Boer deve ser acompanhada por critérios de seleção e registos de desempenho. O cruzamento com populações locais deve ter um objetivo definido e não deve resultar na perda indiscriminada de recursos genéticos adaptados.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Boer_goat444.jpg?width=1600",
    imagemHref:
      "https://commons.wikimedia.org/wiki/File:Boer_goat444.jpg",
    imagemAlt:
      "Cabra Boer, raça caprina de carne originária da África do Sul",
    fonteImagem:
      "Wikimedia Commons — Boer goat444.jpg",
  },

  {
    nome: "Kalahari Red",
    origem: "África Austral, com desenvolvimento na África do Sul",
    aptidao: "Produção de carne",
    estatuto:
      "Raça comercial de carne desenvolvida na África Austral",
    descricao:
      "A Kalahari Red é uma raça caprina de carne reconhecida pela pelagem predominantemente vermelha e pelo desenvolvimento de animais adaptados a ambientes quentes e extensivos. A raça faz parte do conjunto de caprinos comerciais de carne desenvolvidos na África do Sul.",
    caracteristicas: [
      "Pelagem predominantemente vermelha ou castanho-avermelhada.",
      "Boa estrutura corporal para produção de carne.",
      "Aptidão para sistemas de produção de carne.",
      "Capacidade de utilização de vegetação em sistemas extensivos.",
      "Interesse para programas de seleção e cruzamento orientados para carne.",
    ],
    adaptacao:
      "A Kalahari Red apresenta interesse para ambientes quentes da África Austral, mas a introdução em Angola deve ser avaliada considerando clima, disponibilidade de alimento, parasitas, água, instalações e capacidade de assistência veterinária.",
    recomendacao:
      "É mais adequado avaliar pequenos grupos e acompanhar indicadores de crescimento, fertilidade, sobrevivência dos cabritos e resistência às condições locais antes de expandir a utilização da raça.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Kalahari_Red.jpg?width=1600",
    imagemHref:
      "https://commons.wikimedia.org/wiki/File:Kalahari_Red.jpg",
    imagemAlt:
      "Caprino Kalahari Red",
    fonteImagem:
      "Wikimedia Commons — Kalahari Red.jpg",
  },

  {
    nome: "Savanna",
    origem: "África do Sul",
    aptidao: "Produção de carne",
    estatuto:
      "Raça comercial de carne desenvolvida na África Austral",
    descricao:
      "A Savanna é uma raça caprina de carne desenvolvida na África do Sul. É normalmente associada a animais de pelagem branca e a sistemas de produção em ambientes de pastoreio. A raça integra, juntamente com Boer e Kalahari Red, o grupo das principais raças comerciais de carne desenvolvidas na África Austral.",
    caracteristicas: [
      "Pelagem predominantemente branca.",
      "Boa conformação corporal para produção de carne.",
      "Utilização em sistemas de pastoreio.",
      "Seleção para características produtivas e reprodutivas.",
      "Interesse em programas de melhoramento de caprinos de carne.",
    ],
    adaptacao:
      "A experiência da África do Sul é relevante para Angola, mas não substitui a avaliação local. O desempenho deve ser observado nas condições reais da exploração e comparado com animais locais.",
    recomendacao:
      "A utilização da Savanna deve estar associada a um objetivo produtivo claro, principalmente quando utilizada em cruzamentos. Registos de crescimento, reprodução, mortalidade e necessidades alimentares ajudam a avaliar se a genética está realmente a melhorar o sistema.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Two_Savanna_goats_standing_near_a_water_trough.jpg?width=1600",
    imagemHref:
      "https://commons.wikimedia.org/wiki/File:Two_Savanna_goats_standing_near_a_water_trough.jpg",
    imagemAlt:
      "Caprinos da raça Savanna na África do Sul",
    fonteImagem:
      "Wikimedia Commons — Two Savanna goats standing near a water trough",
  },
];

const principiosSelecao = [
  {
    titulo: "Adaptação ao ambiente",
    texto:
      "Um animal produtivo precisa também conseguir sobreviver e reproduzir-se nas condições existentes. Temperatura, disponibilidade de pastagem, água, parasitas e qualidade das instalações devem entrar na decisão genética.",
  },
  {
    titulo: "Objetivo da exploração",
    texto:
      "A escolha genética deve começar pela definição do objetivo: carne, leite, reprodução, venda de reprodutores, criação familiar ou sistema misto.",
  },
  {
    titulo: "Saúde",
    texto:
      "Não se deve selecionar reprodutores apenas pelo tamanho. Animais com problemas sanitários recorrentes ou histórico reprodutivo deficiente não devem ser utilizados como referência genética.",
  },
  {
    titulo: "Registos",
    texto:
      "Peso, crescimento, partos, tamanho das ninhadas, mortalidade, tratamentos e origem dos animais são informações importantes para melhorar a seleção ao longo das gerações.",
  },
  {
    titulo: "Preservação genética",
    texto:
      "Populações locais adaptadas possuem valor produtivo e científico. A introdução de genética especializada deve ser feita de maneira planeada para evitar perda desnecessária de diversidade genética.",
  },
  {
    titulo: "Cruzamentos planejados",
    texto:
      "Um cruzamento só deve ser realizado quando existe um objetivo definido e capacidade para acompanhar os resultados. Cruzar animais sem registos pode dificultar a avaliação do desempenho das gerações seguintes.",
  },
];

const indicadores = [
  "Peso e crescimento dos cabritos.",
  "Idade ao primeiro parto.",
  "Número de cabritos por parto.",
  "Intervalo entre partos.",
  "Mortalidade de cabritos.",
  "Mortalidade de animais adultos.",
  "Problemas sanitários recorrentes.",
  "Consumo e disponibilidade de alimentos.",
  "Condição corporal dos reprodutores.",
  "Preço de venda e aceitação pelo mercado.",
];

export default function RacasCaprinosPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <img
            src={racas[1].imagem}
            alt={racas[1].imagemAlt}
            className="h-full w-full object-cover opacity-45"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <Link
            href="/pecuaria"
            className="mb-8 inline-block text-sm font-medium text-slate-200 transition hover:text-white"
          >
            ← Voltar para Pecuária
          </Link>

          <div className="max-w-4xl text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">
              Caprinos · Orientações técnicas
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Raças e genética de caprinos
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Conhecer a origem, aptidão, adaptação e características dos
              diferentes grupos genéticos é fundamental para escolher animais
              adequados ao sistema de produção. Em Angola, a seleção deve
              considerar tanto os recursos genéticos locais como as raças
              especializadas utilizadas na África Austral.
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-700">
              Genética e produção
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              A melhor raça depende do sistema de produção
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Não existe uma raça universalmente melhor para todas as
              explorações. O desempenho de um animal resulta da interação entre
              genética, alimentação, ambiente, sanidade, reprodução e maneio.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Uma raça de elevado potencial produtivo pode apresentar bons
              resultados quando recebe alimentação suficiente, controlo
              sanitário e condições adequadas. Porém, num sistema de baixos
              recursos, animais locais adaptados podem apresentar vantagens de
              sobrevivência e reprodução.
            </p>

            <div className="mt-6 border-l-4 border-amber-600 bg-white p-5 shadow-sm">
              <p className="font-semibold text-slate-900">
                Princípio para o produtor
              </p>

              <p className="mt-2 leading-7 text-slate-600">
                Antes de comprar uma raça, avalie se a exploração consegue
                fornecer as condições necessárias para que essa genética
                expresse o seu potencial.
              </p>
            </div>
          </div>

          <figure className="overflow-hidden rounded-2xl bg-white shadow-xl">
            <a
              href={racas[1].imagemHref}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={racas[1].imagem}
                alt={racas[1].imagemAlt}
                className="h-[430px] w-full object-cover"
              />
            </a>

            <figcaption className="p-4 text-sm leading-6 text-slate-600">
              Raça Boer, desenvolvida na África do Sul e especializada para
              produção de carne.
              <span className="mt-1 block text-xs text-slate-500">
                Fonte da imagem: {racas[1].fonteImagem}
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ANGOLA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-700">
              Angola
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Recursos genéticos caprinos de Angola
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              A literatura sobre a África Austral identifica o caprino anão de
              Angola como um recurso genético associado ao país. Também existem
              referências históricas a populações autóctones angolanas,
              incluindo Gentia, Cateta e Muhanda.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              É importante, porém, distinguir entre uma população ou tipo local
              e uma raça formalmente caracterizada. A falta de caracterização
              genética e produtiva detalhada limita conclusões sobre diferenças
              de desempenho entre essas populações.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Para Angola, isto significa que programas de melhoramento devem
              valorizar a caracterização dos animais existentes antes de
              promover substituições generalizadas por raças exóticas.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-bold text-slate-900">
                Adaptação local
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Animais locais podem possuir características úteis para
                sobrevivência, reprodução e aproveitamento dos recursos
                disponíveis.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-bold text-slate-900">
                Caracterização
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                A identificação correta de populações locais é importante para
                conservação e melhoramento.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-bold text-slate-900">
                Melhoramento
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                A seleção deve combinar produtividade, reprodução, saúde e
                adaptação ao ambiente.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* LISTA DE RAÇAS */}
      <section className="bg-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-700">
              Principais grupos
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Raças e recursos genéticos de interesse
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              A seleção abaixo combina um recurso genético associado a Angola
              com raças comerciais importantes da África Austral.
            </p>
          </div>

          <div className="mt-12 space-y-10">
            {racas.map((raca, index) => (
              <article
                key={raca.nome}
                className="overflow-hidden rounded-3xl bg-white shadow-sm"
              >
                <div className="grid lg:grid-cols-2">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <a
                      href={raca.imagemHref}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={raca.imagem}
                        alt={raca.imagemAlt}
                        className="h-full min-h-[380px] w-full object-cover transition duration-300 hover:scale-[1.02]"
                      />
                    </a>
                  </div>

                  <div
                    className={`p-8 lg:p-10 ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                        {raca.origem}
                      </span>

                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                        {raca.aptidao}
                      </span>
                    </div>

                    <h3 className="mt-5 text-3xl font-bold text-slate-900">
                      {raca.nome}
                    </h3>

                    <p className="mt-5 leading-8 text-slate-700">
                      {raca.descricao}
                    </p>

                    <h4 className="mt-7 text-lg font-bold text-slate-900">
                      Características de interesse
                    </h4>

                    <ul className="mt-4 space-y-3">
                      {raca.caracteristicas.map((caracteristica) => (
                        <li
                          key={caracteristica}
                          className="flex gap-3 leading-7 text-slate-600"
                        >
                          <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-amber-600" />
                          <span>{caracteristica}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 rounded-xl bg-slate-50 p-5">
                      <h4 className="font-bold text-slate-900">
                        Adaptação e utilização
                      </h4>

                      <p className="mt-2 leading-7 text-slate-600">
                        {raca.adaptacao}
                      </p>
                    </div>

                    <div className="mt-5 rounded-xl border-l-4 border-amber-500 bg-amber-50 p-5">
                      <h4 className="font-bold text-slate-900">
                        Orientação técnica
                      </h4>

                      <p className="mt-2 leading-7 text-slate-700">
                        {raca.recomendacao}
                      </p>
                    </div>

                    <p className="mt-5 text-xs leading-5 text-slate-500">
                      Fonte da imagem: {raca.fonteImagem}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMO ESCOLHER */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-700">
            Escolha dos reprodutores
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Como escolher animais para reprodução?
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            A seleção de reprodutores deve ser feita com base em vários
            critérios. O maior animal nem sempre é o melhor reprodutor. É
            necessário considerar saúde, conformação, crescimento, fertilidade,
            origem, histórico produtivo e adaptação ao sistema.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {principiosSelecao.map((principio) => (
            <article
              key={principio.titulo}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {principio.titulo}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {principio.texto}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CRUZAMENTOS */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-200">
              Melhoramento genético
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Cruzamentos devem ter um objetivo
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              O cruzamento entre animais de diferentes origens pode ser uma
              ferramenta de melhoramento. Contudo, deve ser realizado com
              objetivos claros. Cruzamentos sem acompanhamento podem produzir
              animais que apresentam maior tamanho, mas que também exigem mais
              alimento, água e cuidados.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Num sistema familiar ou de baixos recursos, a produtividade
              adicional de uma raça especializada deve ser comparada com os
              custos adicionais necessários para manter os animais.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-6">
                <h3 className="font-bold">Objetivo</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Definir se o cruzamento procura melhorar carne, crescimento,
                  reprodução ou outra característica.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6">
                <h3 className="font-bold">Registos</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Comparar os resultados dos descendentes com os animais
                  anteriores.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6">
                <h3 className="font-bold">Adaptação</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Confirmar se os descendentes mantêm desempenho e capacidade
                  de adaptação ao ambiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDICADORES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-700">
              Registo produtivo
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              O produtor deve medir o desempenho
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              A seleção genética torna-se muito mais eficiente quando a
              exploração possui registos. Mesmo numa pequena criação, anotar
              nascimento, origem, partos, mortalidade e crescimento pode ajudar
              a identificar os animais que realmente apresentam melhor
              desempenho.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {indicadores.map((indicador) => (
              <div
                key={indicador}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm leading-6 text-slate-700">
                  {indicador}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REALIDADE ANGOLA */}
      <section className="bg-amber-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-800">
              Aplicação em Angola
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Genética deve acompanhar a realidade da exploração
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Nas diferentes regiões de Angola existem diferenças de clima,
              vegetação, disponibilidade de água, sistemas de produção,
              mercados e acesso a serviços veterinários. Por isso, a escolha de
              uma raça não deve ser feita apenas com base em fotografias,
              tamanho corporal ou reputação comercial.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Uma exploração familiar pode beneficiar de animais adaptados às
              condições locais, enquanto uma unidade comercial pode justificar
              a utilização de genética especializada quando dispõe de
              alimentação, instalações, sanidade e mercado capazes de sustentar
              o sistema.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              O objetivo do AGROINOVA ANGOLA é apresentar a informação de forma
              técnica para que o produtor, técnico, estudante ou investigador
              consiga comparar alternativas sem assumir que uma determinada
              raça é adequada para todas as condições.
            </p>
          </div>
        </div>
      </section>

      {/* ALERTA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="border-l-4 border-red-500 bg-red-50 p-7">
          <h2 className="text-xl font-bold text-slate-900">
            Atenção antes da compra de animais
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Não compre reprodutores apenas pela aparência. Antes da aquisição,
            procure informação sobre origem, idade, histórico sanitário,
            desempenho reprodutivo, alimentação recebida e adaptação ao sistema
            onde será introduzido.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            Animais destinados à reprodução devem ser avaliados por um
            profissional habilitado quando houver dúvidas sanitárias ou
            reprodutivas.
          </p>
        </div>
      </section>

      {/* FONTES */}
      <section className="border-t border-slate-200 bg-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Referências técnicas
          </h2>

          <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600">
            <p>
              Visser, C. (2019). A review on goats in southern Africa: An
              untapped genetic resource.{" "}
              <em>Small Ruminant Research, 176</em>, 11–16.
            </p>

            <p>
              Food and Agriculture Organization of the United Nations (FAO).
              Recursos genéticos de pequenos ruminantes e tipos caprinos
              africanos.
            </p>

            <p>
              Food and Agriculture Organization of the United Nations (FAO).
              <em>
                Small ruminant production and the small ruminant genetic
                resource in tropical Africa
              </em>
              .
            </p>

            <p>
              Para a identificação de grupos genéticos e sinónimos de raças,
              foram também consultadas bases de recursos genéticos de animais
              utilizadas na literatura sobre caprinos africanos.
            </p>
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <Link
            href="/pecuaria"
            className="rounded-xl border border-slate-300 px-6 py-3 text-center font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            ← Voltar para Pecuária
          </Link>

          <Link
            href="/pecuaria/caprinos/orientacoes/alimentacao"
            className="rounded-xl bg-slate-900 px-6 py-3 text-center font-semibold text-white transition hover:bg-slate-800"
          >
            Próximo: Alimentação →
          </Link>
        </div>
      </section>
    </main>
  );
}