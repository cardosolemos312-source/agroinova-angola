import Link from "next/link";

const temas = [
  {
    id: "racas",
    titulo: "Raças",
    descricao:
      "Escolha genética, características produtivas, adaptação, reprodução e critérios para seleção de animais.",
    icon: "🐖",
  },
  {
    id: "alimentacao",
    titulo: "Alimentação",
    descricao:
      "Necessidades nutricionais, alimentos, ração, aproveitamento de recursos locais e manejo alimentar.",
    icon: "🌾",
  },
  {
    id: "instalacoes",
    titulo: "Instalações",
    descricao:
      "Construção, ventilação, sombra, higiene, conforto, maternidade e organização dos espaços.",
    icon: "🏠",
  },
  {
    id: "reproducao",
    titulo: "Reprodução",
    descricao:
      "Seleção de reprodutores, cobertura, gestação, parto, fertilidade e manejo reprodutivo.",
    icon: "🧬",
  },
  {
    id: "sanidade",
    titulo: "Sanidade",
    descricao:
      "Prevenção, biossegurança, observação dos animais, doenças e acompanhamento veterinário.",
    icon: "🩺",
  },
  {
    id: "maneio",
    titulo: "Maneio",
    descricao:
      "Manejo diário, identificação, limpeza, separação dos animais e registos da exploração.",
    icon: "👨🏾‍🌾",
  },
  {
    id: "agua",
    titulo: "Água",
    descricao:
      "Qualidade, disponibilidade, distribuição e cuidados com o abastecimento.",
    icon: "💧",
  },
  {
    id: "leitoes",
    titulo: "Leitões",
    descricao:
      "Cuidados desde o nascimento, colostro, alimentação inicial, crescimento e desmame.",
    icon: "🐷",
  },
  {
    id: "gestacao",
    titulo: "Gestação",
    descricao:
      "Cuidados com a fêmea gestante, alimentação, acompanhamento e preparação para o parto.",
    icon: "🤰🏾",
  },
  {
    id: "maternidade",
    titulo: "Maternidade",
    descricao:
      "Preparação da maternidade, parto, cuidados com a porca e proteção dos leitões.",
    icon: "🍼",
  },
  {
    id: "engorda",
    titulo: "Engorda",
    descricao:
      "Manejo dos animais destinados à produção de carne, alimentação e acompanhamento do crescimento.",
    icon: "📈",
  },
  {
    id: "biosseguranca",
    titulo: "Biossegurança",
    descricao:
      "Medidas para reduzir a entrada e disseminação de agentes infecciosos na exploração.",
    icon: "🛡️",
  },
];

const racas = [
  {
    nome: "Large White",
    descricao:
      "Raça suína amplamente utilizada internacionalmente, sobretudo em sistemas de reprodução e cruzamento. A seleção deve considerar o objetivo produtivo, a origem genética, a condição sanitária e as condições reais da exploração.",
  },
  {
    nome: "Landrace",
    descricao:
      "Raça utilizada internacionalmente em programas de produção e cruzamento. As fêmeas são frequentemente valorizadas pelas características maternas e reprodutivas.",
  },
  {
    nome: "Duroc",
    descricao:
      "Raça conhecida pela utilização na produção de carne e em programas de cruzamento. A sua utilização deve ser relacionada com o sistema de alimentação, maneio, clima e objetivo comercial.",
  },
  {
    nome: "Pietrain",
    descricao:
      "Raça reconhecida internacionalmente pelas características relacionadas com a composição da carcaça e produção de carne magra. A sua utilização deve ser avaliada de acordo com as condições da exploração.",
  },
];

export default function OrientacoesSuinosPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* CABEÇALHO */}
      <section className="border-b bg-gradient-to-br from-green-50 via-white to-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="mb-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-green-700">
              Início
            </Link>{" "}
            ›{" "}
            <Link href="/pecuaria" className="hover:text-green-700">
              Pecuária
            </Link>{" "}
            › Suínos
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-center">
            <div>
              <div className="mb-4 text-6xl">🐖</div>

              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-700">
                AGROINOVA ANGOLA · SUINOCULTURA
              </p>

              <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Orientações para criação de suínos
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Conteúdo técnico para apoiar produtores, criadores, técnicos,
                estudantes e investigadores na tomada de decisões relacionadas
                com a criação e produção de suínos em Angola.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm text-green-800">
                  🇦🇴 Realidade angolana
                </span>

                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
                  Conhecimento técnico
                </span>

                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
                  Produção familiar e comercial
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-green-700">
                PRINCÍPIO FUNDAMENTAL
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Não existe uma raça ou sistema de produção que seja
                automaticamente adequado para todas as explorações. A escolha
                deve considerar ambiente, alimentação, água, instalações,
                sanidade, capacidade de maneio e mercado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEMAS */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
            ORIENTAÇÕES TÉCNICAS
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Escolha uma área de orientação
          </h2>

          <p className="mt-3 max-w-3xl text-slate-600">
            Consulte informações organizadas por tema para compreender melhor
            as principais decisões envolvidas na produção de suínos.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {temas.map((tema) => (
            <Link
              key={tema.id}
              href={`/pecuaria/suinos/orientacoes/${tema.id}`}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-green-300 hover:shadow-lg"
            >
              <div className="text-4xl">{tema.icon}</div>

              <h3 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-green-700">
                {tema.titulo}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {tema.descricao}
              </p>

              <div className="mt-5 font-semibold text-green-700">
                Consultar →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
              SUINOCULTURA EM ANGOLA
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Uma atividade que exige integração entre genética, alimentação,
              sanidade e maneio
            </h2>

            <div className="mt-7 space-y-5 text-[16px] leading-8 text-slate-700">
              <p>
                A produção de suínos não depende de um único factor. O
                desempenho dos animais resulta da interação entre genética,
                alimentação, água, ambiente, instalações, sanidade, reprodução
                e qualidade do maneio realizado diariamente pelo produtor.
              </p>

              <p>
                Por essa razão, a escolha de animais com elevado potencial
                produtivo deve ser acompanhada por uma avaliação das condições
                existentes na exploração. Um animal geneticamente seleccionado
                para crescimento rápido pode não expressar esse potencial se
                estiver submetido a alimentação insuficiente, água limitada,
                temperaturas elevadas, instalações inadequadas ou problemas
                sanitários.
              </p>

              <p>
                Em Angola, esta análise torna-se particularmente importante
                porque existem diferentes condições agroecológicas e diferentes
                níveis de organização das explorações. Existem produtores
                familiares com recursos limitados, explorações semi-intensivas
                e unidades comerciais que utilizam sistemas mais especializados.
              </p>

              <p>
                O produtor deve, portanto, adaptar as decisões técnicas à
                realidade da sua exploração, sem assumir que uma prática
                utilizada num sistema intensivo será automaticamente adequada
                para uma exploração familiar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RAÇAS */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
            ORIENTAÇÃO · RAÇAS
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Escolha genética
          </h2>

          <p className="mt-3 max-w-4xl text-slate-600">
            A raça ou linhagem influencia características produtivas e
            reprodutivas, mas a escolha deve sempre considerar as condições
            concretas da exploração.
          </p>
        </div>

        <div className="space-y-7">
          <div className="rounded-3xl border border-green-100 bg-green-50 p-7">
            <h3 className="text-2xl font-bold text-slate-900">
              O que considerar antes de escolher uma raça
            </h3>

            <div className="mt-5 space-y-4 leading-8 text-slate-700">
              <p>
                Antes de adquirir animais destinados à reprodução ou produção
                de carne, o produtor deve definir claramente a finalidade da
                exploração. A produção pode estar orientada para carne,
                produção de leitões, reprodução ou comercialização de animais
                reprodutores.
              </p>

              <p>
                Também é necessário avaliar a disponibilidade de alimentos,
                água, instalações, mão de obra, assistência veterinária e
                mercado. Uma genética de elevado potencial produtivo exige
                condições capazes de permitir que esse potencial seja
                efectivamente aproveitado.
              </p>

              <p>
                O clima também deve ser considerado. Os suínos são sensíveis
                ao stress térmico e, em ambientes quentes, a ventilação,
                disponibilidade de água, sombra e características das
                instalações tornam-se componentes importantes do sistema de
                produção.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              Principais raças utilizadas internacionalmente
            </h3>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {racas.map((raca) => (
                <article
                  key={raca.nome}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h4 className="text-xl font-bold text-slate-900">
                    {raca.nome}
                  </h4>

                  <p className="mt-3 leading-7 text-slate-600">
                    {raca.descricao}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">
              Raça pura ou cruzamento?
            </h3>

            <div className="mt-5 space-y-4 leading-8 text-slate-700">
              <p>
                A decisão entre utilizar animais de raça pura ou animais
                cruzados depende do objectivo da exploração. A raça pura pode
                ser importante quando se pretende conservar e seleccionar
                características específicas, enquanto os cruzamentos podem
                procurar combinar características de diferentes populações.
              </p>

              <p>
                Os cruzamentos, contudo, devem ser planeados. O produtor deve
                conhecer a origem dos animais utilizados e manter registos dos
                cruzamentos realizados. Cruzamentos sem controlo dificultam a
                selecção dos melhores animais e tornam mais difícil avaliar o
                desempenho do efectivo.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-7">
            <h3 className="text-2xl font-bold text-slate-900">
              Adaptação às condições de Angola
            </h3>

            <div className="mt-5 space-y-4 leading-8 text-slate-700">
              <p>
                Não existe uma recomendação genética única para todas as
                regiões de Angola. As condições de produção variam entre as
                diferentes zonas agroecológicas e entre explorações familiares,
                semi-intensivas e comerciais.
              </p>

              <p>
                A disponibilidade de água, qualidade das instalações,
                temperatura, alimentação e acesso aos serviços veterinários
                podem alterar significativamente o desempenho dos animais.
              </p>

              <p>
                Por isso, a introdução de uma nova raça ou linhagem deve ser
                precedida por uma avaliação das condições da exploração. Onde
                existem limitações importantes de alimentação ou água, a
                prioridade deve ser garantir as condições básicas de produção
                antes de investir em genética de elevado potencial.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
            <h3 className="text-2xl font-bold text-slate-900">
              Como escolher um bom reprodutor
            </h3>

            <div className="mt-5 space-y-4 leading-8 text-slate-700">
              <p>
                A escolha do macho reprodutor deve considerar mais do que o
                tamanho corporal. O animal deve apresentar bom estado geral,
                ausência de sinais evidentes de doença, aprumos adequados e
                características reprodutivas normais.
              </p>

              <p>
                Sempre que possível, devem ser conhecidos os antecedentes
                produtivos e reprodutivos do animal. Registos sobre crescimento,
                origem, reprodução e problemas sanitários ajudam a reduzir o
                risco de introduzir animais inadequados no efectivo.
              </p>

              <p>
                A avaliação veterinária é especialmente importante quando se
                pretende introduzir animais de elevado valor genético ou
                provenientes de outra exploração.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">
              Como escolher uma boa fêmea reprodutora
            </h3>

            <div className="mt-5 space-y-4 leading-8 text-slate-700">
              <p>
                A fêmea destinada à reprodução deve ser seleccionada
                considerando a condição corporal, desenvolvimento, estrutura
                corporal, capacidade materna e histórico reprodutivo, quando
                disponível.
              </p>

              <p>
                Quando existem registos da família, informações sobre tamanho
                das ninhadas, sobrevivência dos leitões e capacidade de criação
                podem ajudar na selecção.
              </p>

              <p>
                Mesmo numa exploração familiar, é útil registar a identificação
                da fêmea, datas de cobertura, parto, número de leitões nascidos
                e número de leitões desmamados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="bg-green-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <h2 className="text-3xl font-bold">
            Checklist antes de comprar animais
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Definir a finalidade da exploração.",
              "Avaliar a disponibilidade de alimentação durante todo o ano.",
              "Confirmar a disponibilidade de água.",
              "Verificar se as instalações são adequadas.",
              "Avaliar as condições climáticas da exploração.",
              "Conhecer a origem dos animais.",
              "Avaliar o estado sanitário dos animais.",
              "Solicitar acompanhamento técnico quando necessário.",
              "Verificar a possibilidade de manter registos.",
              "Avaliar o mercado para o produto final.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/20 bg-white/10 p-4"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-xl font-bold text-slate-900">
            Fontes técnicas de referência
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            Para a caracterização das raças e dos recursos genéticos animais,
            o AGROINOVA deve privilegiar bases técnicas verificáveis, incluindo
            o sistema DAD-IS da Organização das Nações Unidas para a
            Alimentação e Agricultura (FAO).
          </p>

          <div className="mt-5 space-y-2 text-sm">
            <a
              href="https://www.fao.org/dad-is/data/breed-information/en"
              target="_blank"
              rel="noreferrer"
              className="block font-semibold text-green-700 hover:underline"
            >
              FAO — DAD-IS: Breed Information →
            </a>

            <a
              href="https://www.fao.org/dad-is/data/en/"
              target="_blank"
              rel="noreferrer"
              className="block font-semibold text-green-700 hover:underline"
            >
              FAO — DAD-IS: Animal Genetic Resources Data →
            </a>
          </div>
        </div>
      </section>

      {/* VOLTAR */}
      <section className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <Link
            href="/pecuaria"
            className="font-semibold text-green-700 hover:underline"
          >
            ← Voltar para Pecuária
          </Link>
        </div>
      </section>
    </main>
  );
}