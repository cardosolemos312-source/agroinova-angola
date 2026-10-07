import Link from "next/link";

type RacaSuina = {
  id: string;
  nome: string;
  nomeAlternativo?: string;
  aptidao: string;
  descricao: string;
  pontos: string[];
  cuidados: string[];
  imagem: string;
  fonteImagem: string;
};

const racas: RacaSuina[] = [
  {
    id: "large-white",
    nome: "Large White",
    nomeAlternativo: "Yorkshire",
    aptidao: "Maternidade, reprodução e produção de carne",
    descricao:
      "A Large White, também conhecida como Yorkshire em vários sistemas de produção, é uma das raças suínas mais difundidas internacionalmente. É utilizada tanto em linhas maternas como em programas de cruzamento, principalmente devido à sua capacidade reprodutiva, crescimento, conformação corporal e adaptação a diferentes sistemas de produção quando existe bom maneio.",
    pontos: [
      "Boa capacidade reprodutiva e utilização frequente como linha materna.",
      "Boa capacidade de crescimento quando recebe alimentação equilibrada.",
      "Produção de carne com elevada proporção de tecido magro.",
      "Pode ser utilizada em sistemas comerciais e em cruzamentos.",
      "É importante controlar o stress térmico em regiões muito quentes.",
    ],
    cuidados: [
      "Disponibilizar água limpa permanentemente.",
      "Garantir sombra, ventilação e instalações que reduzam o calor.",
      "Manter um programa de vacinação e controlo sanitário adequado.",
      "Evitar pisos excessivamente escorregadios.",
      "Selecionar reprodutores provenientes de animais saudáveis e produtivos.",
    ],
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Large_White_pigs_%28Belagro-2021%29_1.jpg?width=1200",
    fonteImagem: "Wikimedia Commons",
  },

  {
    id: "landrace",
    nome: "Landrace",
    aptidao: "Produção de leitões, maternidade e cruzamento",
    descricao:
      "A Landrace é reconhecida pela sua utilização como raça materna e pela conformação corporal alongada. É frequentemente empregada em sistemas de cruzamento para aproveitar características reprodutivas e produtivas. Em Angola, a sua utilização deve considerar a disponibilidade de alimentação, água, instalações e capacidade de controlo do ambiente.",
    pontos: [
      "Boa utilização em sistemas de reprodução.",
      "Corpo comprido e boa conformação para produção de carne.",
      "Frequentemente utilizada em cruzamentos comerciais.",
      "Boa capacidade maternal quando corretamente selecionada.",
      "Pode apresentar bons resultados sob alimentação e maneio adequados.",
    ],
    cuidados: [
      "As porcas devem receber alimentação adequada durante gestação e lactação.",
      "A água deve estar disponível continuamente.",
      "É necessário proteger os animais contra calor excessivo.",
      "Instalações de maternidade devem permitir higiene e segurança dos leitões.",
      "A seleção deve considerar saúde, aprumos, tetos e desempenho reprodutivo.",
    ],
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Landrace_pig_%28Belagro-2021%29.jpg?width=1200",
    fonteImagem: "Wikimedia Commons",
  },

  {
    id: "duroc",
    nome: "Duroc",
    aptidao: "Produção de carne e cruzamentos",
    descricao:
      "A Duroc é uma raça de pelagem geralmente avermelhada, utilizada principalmente pela sua capacidade produtiva e como componente de cruzamentos destinados à produção de carne. A sua utilização deve ser acompanhada por alimentação adequada, controlo sanitário e seleção de animais adaptados às condições da exploração.",
    pontos: [
      "Boa aptidão para produção de carne.",
      "É frequentemente utilizada como componente paterno em cruzamentos.",
      "Pode apresentar bom crescimento em condições nutricionais adequadas.",
      "Contribui para características produtivas dos animais cruzados.",
      "Pode ser utilizada em sistemas de produção comercial.",
    ],
    cuidados: [
      "Controlar cuidadosamente a alimentação para evitar défices nutricionais.",
      "Garantir disponibilidade permanente de água.",
      "Selecionar animais com bons aprumos e estrutura corporal.",
      "Evitar exposição prolongada a temperaturas elevadas.",
      "Manter instalações secas, limpas e com boa ventilação.",
    ],
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/2017bigboar.jpg?width=1200",
    fonteImagem: "Wikimedia Commons",
  },

  {
    id: "pietrain",
    nome: "Piétrain",
    aptidao: "Produção de carne e cruzamentos especializados",
    descricao:
      "A Piétrain é conhecida pela sua conformação muscular e pela utilização em programas de melhoramento e cruzamento orientados para produção de carne. Por apresentar características produtivas específicas, a sua utilização deve ser acompanhada de seleção genética, alimentação adequada e avaliação das condições ambientais da exploração.",
    pontos: [
      "Elevada musculatura e boa conformação para produção de carne.",
      "Utilização frequente em cruzamentos comerciais.",
      "Pode contribuir para aumentar a proporção de carne magra.",
      "Requer avaliação cuidadosa antes da introdução num sistema de produção.",
      "O desempenho depende fortemente de genética, alimentação, ambiente e maneio.",
    ],
    cuidados: [
      "Evitar situações de stress durante transporte e maneio.",
      "Garantir ventilação adequada nas instalações.",
      "Manter água disponível permanentemente.",
      "Utilizar programas de alimentação compatíveis com o objetivo produtivo.",
      "A seleção deve considerar saúde, aprumos e desempenho dos animais.",
    ],
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Pourceas_Piitrin.jpg?width=1200",
    fonteImagem: "Wikimedia Commons",
  },

  {
    id: "hampshire",
    nome: "Hampshire",
    aptidao: "Produção de carne e cruzamentos",
    descricao:
      "A Hampshire apresenta normalmente pelagem preta com uma faixa branca característica na região dos ombros e parte anterior do corpo. É conhecida pela sua aptidão para produção de carne e pela utilização como componente de cruzamentos. O desempenho da raça depende das condições de alimentação, sanidade, instalações e ambiente.",
    pontos: [
      "Boa aptidão para produção de carne.",
      "Conformação corporal associada à produção de carne magra.",
      "Pode ser utilizada como componente paterno em cruzamentos.",
      "É reconhecida pela característica faixa branca sobre os ombros.",
      "Pode integrar sistemas comerciais quando existe bom maneio.",
    ],
    cuidados: [
      "Disponibilizar água de forma contínua.",
      "Garantir instalações com sombra e ventilação.",
      "Controlar a alimentação de acordo com a fase produtiva.",
      "Manter higiene adequada das instalações.",
      "Avaliar a adaptação dos animais às condições climáticas locais.",
    ],
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Hampshire_Pig_%2854409709986%29.jpg?width=1200",
    fonteImagem: "Wikimedia Commons",
  },
];

const criterios = [
  {
    titulo: "Finalidade da exploração",
    texto:
      "Antes de adquirir animais, o produtor deve definir se pretende produzir leitões, animais para engorda, reprodutores, carne para o mercado ou animais destinados a programas de cruzamento.",
  },
  {
    titulo: "Alimentação disponível",
    texto:
      "A raça não deve ser escolhida isoladamente da alimentação. O produtor precisa avaliar a disponibilidade de milho, farelos, fontes proteicas, minerais, vitaminas e outros ingredientes seguros.",
  },
  {
    titulo: "Água",
    texto:
      "A água é um dos recursos mais importantes da exploração. A quantidade e qualidade da água influenciam o consumo de alimento, crescimento, reprodução, lactação e bem-estar.",
  },
  {
    titulo: "Clima",
    texto:
      "O produtor deve considerar a temperatura, humidade, ventilação e disponibilidade de sombra. O calor excessivo pode reduzir o consumo de alimento e prejudicar o desempenho produtivo e reprodutivo.",
  },
  {
    titulo: "Instalações",
    texto:
      "A exploração precisa de instalações que permitam limpeza, drenagem, ventilação, proteção contra chuva e calor e separação adequada das diferentes categorias de animais.",
  },
  {
    titulo: "Sanidade",
    texto:
      "A compra de animais deve considerar o estado sanitário da origem, histórico da exploração, vacinação quando aplicável, quarentena e acompanhamento veterinário.",
  },
  {
    titulo: "Mercado",
    texto:
      "A escolha genética deve estar relacionada com aquilo que o mercado procura. Não é aconselhável investir numa raça apenas porque é conhecida internacionalmente sem avaliar a procura e os custos locais.",
  },
  {
    titulo: "Capacidade de maneio",
    texto:
      "Uma raça de elevado potencial produtivo pode não apresentar bons resultados se a exploração não tiver alimentação, água, instalações, higiene, controlo sanitário e mão de obra adequados.",
  },
];

const checklist = [
  "Definir o objetivo produtivo da exploração.",
  "Avaliar a disponibilidade de água durante todo o ano.",
  "Avaliar a qualidade e disponibilidade dos alimentos.",
  "Verificar as condições de sombra e ventilação.",
  "Preparar instalações antes da aquisição dos animais.",
  "Confirmar a origem dos animais.",
  "Observar o estado corporal e a condição sanitária.",
  "Avaliar aprumos e capacidade de locomoção.",
  "Observar a estrutura corporal dos futuros reprodutores.",
  "Evitar comprar animais apenas pelo preço.",
  "Manter registos individuais ou por lote.",
  "Solicitar acompanhamento técnico quando houver dúvidas.",
];

export default function RacasSuinosPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-gradient-to-br from-green-50 via-white to-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <Link
                href="/"
                className="transition hover:text-green-700"
              >
                Início
              </Link>

              <span>›</span>

              <Link
                href="/pecuaria"
                className="transition hover:text-green-700"
              >
                Pecuária
              </Link>

              <span>›</span>

              <Link
                href="/pecuaria/suinos/orientacoes"
                className="transition hover:text-green-700"
              >
                Suínos
              </Link>

              <span>›</span>

              <span className="font-medium text-slate-700">
                Raças
              </span>
            </div>

            <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-green-800">
              AGROINOVA ANGOLA · SUÍNOS
            </span>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              Raças suínas
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Conheça algumas das principais raças utilizadas na produção
              suína e os fatores que devem ser considerados antes da sua
              introdução numa exploração em Angola.
            </p>

            <div className="mt-7 rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
              <p className="text-sm leading-7 text-slate-600">
                A escolha da raça não deve ser feita apenas pela aparência do
                animal ou pelo seu potencial produtivo. É necessário avaliar
                alimentação, água, clima, instalações, sanidade, finalidade da
                exploração, mercado e capacidade de maneio.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-green-100 bg-white shadow-lg">
            <img
              src="https://commons.wikimedia.org/wiki/Special:FilePath/Large_White_pigs_%28Belagro-2021%29_1.jpg?width=1200"
              alt="Suínos da raça Large White"
              className="h-[360px] w-full object-cover"
            />

            <div className="border-t bg-white px-5 py-3">
              <p className="text-xs leading-5 text-slate-500">
                Imagem ilustrativa de suínos da raça Large White · Wikimedia
                Commons
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="max-w-4xl">
          <span className="text-sm font-bold uppercase tracking-widest text-green-700">
            Enquadramento técnico
          </span>

          <h2 className="mt-2 text-3xl font-black text-slate-900">
            A raça deve ser escolhida de acordo com o sistema de produção
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
            <p>
              Na produção suína, a genética é apenas um dos componentes
              responsáveis pelo desempenho dos animais. Mesmo uma raça com
              elevado potencial produtivo necessita de alimentação adequada,
              água de qualidade, instalações apropriadas, controlo sanitário e
              um sistema de maneio compatível com as suas necessidades.
            </p>

            <p>
              Em Angola, esta avaliação é particularmente importante porque as
              condições de produção podem variar muito entre regiões. Uma
              exploração familiar com poucos animais e recursos limitados
              apresenta necessidades diferentes de uma unidade comercial
              especializada em reprodução ou engorda.
            </p>

            <p>
              Por isso, a escolha de uma raça deve começar pela definição do
              objetivo da exploração. Depois devem ser analisados os recursos
              existentes, as condições ambientais, a disponibilidade de
              alimentos, a capacidade de assistência sanitária e as
              possibilidades de comercialização.
            </p>

            <p>
              As raças apresentadas nesta página são referências técnicas
              internacionais. A presença de uma raça nesta lista não significa
              que ela seja automaticamente a melhor opção para qualquer
              província ou exploração angolana. A adaptação deve ser avaliada
              localmente.
            </p>
          </div>
        </div>
      </section>

      {/* RAÇAS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-widest text-green-700">
              Principais referências
            </span>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              Raças suínas
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              As características abaixo devem ser interpretadas em conjunto
              com o sistema de alimentação, ambiente, sanidade, instalações e
              objetivo comercial da exploração.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {racas.map((raca) => (
              <article
                key={raca.id}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-72 overflow-hidden bg-slate-100">
                  <img
                    src={raca.imagem}
                    alt={`Raça suína ${raca.nome}`}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    loading="lazy"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-6 pt-20">
                    <p className="text-xs font-bold uppercase tracking-widest text-white">
                      Raça suína
                    </p>

                    <h3 className="mt-1 text-3xl font-black text-white">
                      {raca.nome}
                    </h3>

                    {raca.nomeAlternativo && (
                      <p className="text-sm font-medium text-white/85">
                        {raca.nomeAlternativo}
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-7">
                  <p className="text-sm font-bold uppercase tracking-wide text-green-700">
                    {raca.aptidao}
                  </p>

                  <p className="mt-4 leading-7 text-slate-600">
                    {raca.descricao}
                  </p>

                  <div className="mt-7">
                    <h4 className="text-lg font-bold text-slate-900">
                      Principais características
                    </h4>

                    <ul className="mt-4 space-y-3">
                      {raca.pontos.map((ponto) => (
                        <li
                          key={ponto}
                          className="flex gap-3 text-sm leading-6 text-slate-600"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green-600" />
                          <span>{ponto}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 rounded-2xl bg-green-50 p-5">
                    <h4 className="font-bold text-green-900">
                      Cuidados importantes
                    </h4>

                    <ul className="mt-3 space-y-2">
                      {raca.cuidados.map((cuidado) => (
                        <li
                          key={cuidado}
                          className="text-sm leading-6 text-green-900/80"
                        >
                          • {cuidado}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="mt-5 text-xs leading-5 text-slate-400">
                    Fonte da imagem: {raca.fonteImagem}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMO ESCOLHER */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-widest text-green-700">
            Decisão do produtor
          </span>

          <h2 className="mt-2 text-3xl font-black text-slate-900">
            Como escolher uma raça para a exploração
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            A decisão deve considerar o conjunto da exploração e não apenas o
            potencial genético descrito nos catálogos das raças.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {criterios.map((criterio, index) => (
            <article
              key={criterio.titulo}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-sm font-black text-green-800">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {criterio.titulo}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {criterio.texto}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* REALIDADE ANGOLANA */}
      <section className="border-y border-green-100 bg-green-50">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="max-w-4xl">
            <span className="text-sm font-bold uppercase tracking-widest text-green-700">
              Angola
            </span>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              Considerações para a realidade angolana
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
              <p>
                A introdução de raças especializadas numa exploração angolana
                deve ser acompanhada de uma avaliação das condições existentes.
                Não é suficiente adquirir animais geneticamente superiores se
                a exploração não tiver condições para expressar esse potencial.
              </p>

              <p>
                Em zonas com temperaturas elevadas, o controlo do calor deve
                receber atenção especial. Sombra, ventilação, disponibilidade
                permanente de água e redução do stress durante os períodos mais
                quentes são componentes importantes do maneio.
              </p>

              <p>
                A alimentação também merece atenção. O custo e a disponibilidade
                dos ingredientes podem variar significativamente. Por isso,
                qualquer programa alimentar deve ser formulado considerando os
                recursos efetivamente disponíveis na exploração e as
                necessidades nutricionais da categoria animal.
              </p>

              <p>
                Para pequenos produtores, pode ser mais importante utilizar
                animais adaptados às condições locais e melhorar progressivamente
                o maneio do que procurar imediatamente genética de elevado custo.
                Para explorações comerciais, programas de cruzamento podem ser
                avaliados com assistência técnica e registos de desempenho.
              </p>

              <p>
                A decisão final deve considerar também a disponibilidade de
                assistência veterinária, medicamentos e vacinas, instalações,
                transporte, acesso ao mercado e capacidade financeira do
                produtor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RAÇA PURA OU CRUZAMENTO */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-green-700">
              Genética
            </span>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              Raça pura ou cruzamento?
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                A utilização de animais de raça pura pode ser importante quando
                o objetivo é reprodução controlada, conservação de determinada
                genética ou produção de reprodutores.
              </p>

              <p>
                Já o cruzamento pode ser utilizado para combinar características
                de diferentes linhas genéticas. Em sistemas comerciais, por
                exemplo, podem ser combinadas características maternas e
                características relacionadas com crescimento e produção de
                carne.
              </p>

              <p>
                Contudo, um programa de cruzamento precisa ser planeado. O
                produtor deve conhecer a origem dos animais, manter registos dos
                acasalamentos e acompanhar os resultados dos descendentes.
              </p>

              <p>
                Em pequenas explorações, cruzamentos realizados sem registo
                podem dificultar a identificação da origem genética dos animais
                e impedir uma avaliação objetiva dos resultados.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
            <h3 className="text-xl font-black text-slate-900">
              Antes de comprar reprodutores
            </h3>

            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
              <li>
                <strong className="text-slate-900">
                  Origem:
                </strong>{" "}
                procure conhecer a exploração de origem e o histórico dos
                animais.
              </li>

              <li>
                <strong className="text-slate-900">
                  Saúde:
                </strong>{" "}
                não introduza animais aparentemente doentes no efetivo.
              </li>

              <li>
                <strong className="text-slate-900">
                  Aprumos:
                </strong>{" "}
                pernas e cascos devem ser observados porque problemas de
                locomoção podem comprometer a utilização reprodutiva.
              </li>

              <li>
                <strong className="text-slate-900">
                  Condição corporal:
                </strong>{" "}
                animais excessivamente magros ou excessivamente gordos exigem
                avaliação antes da utilização.
              </li>

              <li>
                <strong className="text-slate-900">
                  Registos:
                </strong>{" "}
                sempre que possível, devem ser conhecidos dados de nascimento,
                parentesco e desempenho.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* REPRODUTORES */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="max-w-4xl">
            <span className="text-sm font-bold uppercase tracking-widest text-green-300">
              Seleção
            </span>

            <h2 className="mt-2 text-3xl font-black">
              O melhor animal nem sempre é o maior
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-300">
              <p>
                Na seleção de reprodutores, o tamanho corporal deve ser apenas
                um dos critérios. Saúde, estrutura corporal, aprumos,
                conformação, capacidade reprodutiva, origem genética e
                desempenho dos parentes podem ser mais importantes para uma
                decisão sustentável.
              </p>

              <p>
                Um animal muito grande pode apresentar necessidades alimentares
                superiores e não necessariamente produzir melhores resultados
                numa exploração com alimentação limitada.
              </p>

              <p>
                O produtor deve procurar equilíbrio entre potencial genético e
                capacidade real da exploração. A genética deve trabalhar a favor
                do sistema de produção, e não obrigar o produtor a operar acima
                da sua capacidade financeira ou técnica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-widest text-green-700">
            Ferramenta prática
          </span>

          <h2 className="mt-2 text-3xl font-black text-slate-900">
            Checklist antes de adquirir animais
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Utilize esta lista como ponto de partida antes de introduzir novos
            animais na exploração.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {checklist.map((item, index) => (
            <div
              key={item}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-black text-green-800">
                {index + 1}
              </div>

              <p className="text-sm leading-7 text-slate-600">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* REGISTOS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="max-w-4xl">
            <span className="text-sm font-bold uppercase tracking-widest text-green-700">
              Gestão da exploração
            </span>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              Registos ajudam a escolher melhor
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                A exploração deve procurar registar informações básicas dos
                animais. Mesmo em sistemas pequenos, registos simples podem
                ajudar a identificar os animais que apresentam melhor
                crescimento, reprodução e resistência aos problemas sanitários.
              </p>

              <p>
                Entre os dados que podem ser registados estão a identificação do
                animal, origem, data de nascimento, raça ou cruzamento, sexo,
                partos, número de leitões nascidos, mortalidade, tratamentos
                sanitários, peso quando disponível e destino do animal.
              </p>

              <p>
                Com o tempo, esses dados permitem comparar animais e tomar
                decisões baseadas no desempenho real da exploração, em vez de
                depender apenas de informações comerciais ou da aparência dos
                animais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900">
            Fontes e referências para aprofundamento
          </h2>

          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
            <p>
              As imagens das raças utilizadas nesta página são provenientes do
              Wikimedia Commons, que disponibiliza coleções de imagens de
              diferentes raças suínas.
            </p>

            <p>
              A documentação técnica sobre raças suínas deve ser consultada em
              conjunto com orientações de produção, nutrição, sanidade,
              reprodução e bem-estar animal.
            </p>

            <div className="flex flex-wrap gap-3 pt-3">
              <a
                href="https://commons.wikimedia.org/wiki/Category:Pig_breeds"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-green-200 bg-green-50 px-4 py-2 font-semibold text-green-800 transition hover:bg-green-100"
              >
                Wikimedia Commons · Pig breeds
              </a>

              <a
                href="https://commons.wikimedia.org/wiki/List_of_domestic_pig_breeds"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Lista de raças suínas
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Orientações para suínos
            </p>

            <h2 className="mt-1 text-xl font-black text-slate-900">
              Continue a explorar a produção suína
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/pecuaria/suinos/orientacoes"
              className="rounded-xl bg-green-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-800"
            >
              Todas as orientações
            </Link>

            <Link
              href="/pecuaria/suinos/orientacoes/alimentacao"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
            >
              Alimentação
            </Link>

            <Link
              href="/pecuaria"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
            >
              Voltar à Pecuária
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}