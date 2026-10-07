import Link from "next/link";

const fases = [
  {
    titulo: "Leitões",
    icon: "🐷",
    texto:
      "Os leitões apresentam crescimento rápido e possuem necessidades nutricionais elevadas em relação ao seu tamanho. Nas primeiras fases, a alimentação deve ser de elevada qualidade, de fácil digestão e fornecida em pequenas quantidades várias vezes ao dia. A introdução gradual de alimento sólido ajuda o leitão a adaptar-se antes do desmame.",
    pontos: [
      "Fornecer alimento próprio para leitões.",
      "Introduzir o alimento gradualmente antes do desmame.",
      "Evitar alimentos mofados, fermentados ou contaminados.",
      "Disponibilizar água limpa e fresca permanentemente.",
      "Observar diariamente o consumo e o desenvolvimento.",
    ],
  },
  {
    titulo: "Crescimento",
    icon: "🐖",
    texto:
      "Durante o crescimento, o objetivo é proporcionar desenvolvimento adequado do animal, formação muscular e boa conversão alimentar. A dieta deve fornecer energia, proteína, minerais e vitaminas em quantidades compatíveis com a idade e o peso do animal.",
    pontos: [
      "Ajustar a quantidade de alimento ao peso e à idade.",
      "Garantir fonte adequada de proteína.",
      "Evitar excesso de alimento que provoque desperdício.",
      "Manter os comedouros limpos.",
      "Controlar regularmente o peso e o desenvolvimento.",
    ],
  },
  {
    titulo: "Engorda",
    icon: "🥩",
    texto:
      "Na fase de engorda, a alimentação deve ser orientada para obter bom crescimento e uma carcaça adequada ao mercado. A quantidade e a composição da ração devem ser ajustadas à finalidade da exploração e ao sistema de produção utilizado.",
    pontos: [
      "Controlar o consumo diário.",
      "Evitar mudanças bruscas na dieta.",
      "Manter água disponível durante todo o dia.",
      "Reduzir perdas e desperdícios no comedouro.",
      "Avaliar o desempenho dos animais regularmente.",
    ],
  },
  {
    titulo: "Porcas gestantes",
    icon: "🐖",
    texto:
      "As porcas gestantes precisam de uma alimentação equilibrada que mantenha a condição corporal adequada sem provocar excesso de gordura. A alimentação deve acompanhar a fase de gestação e o estado corporal da porca.",
    pontos: [
      "Evitar tanto a subalimentação como o excesso.",
      "Acompanhar a condição corporal.",
      "Garantir minerais e vitaminas adequados.",
      "Manter acesso permanente à água.",
      "Observar alterações no consumo e no comportamento.",
    ],
  },
  {
    titulo: "Porcas em lactação",
    icon: "🍼",
    texto:
      "Durante a lactação, as necessidades nutricionais aumentam porque a porca precisa produzir leite para alimentar a ninhada. O consumo adequado de alimento e água é fundamental para manter a produção de leite e reduzir a perda excessiva de condição corporal.",
    pontos: [
      "Fornecer alimento de qualidade.",
      "Garantir água limpa em quantidade suficiente.",
      "Acompanhar o tamanho e desenvolvimento da ninhada.",
      "Observar a condição corporal da porca.",
      "Evitar restrições alimentares inadequadas.",
    ],
  },
  {
    titulo: "Reprodutores",
    icon: "🐗",
    texto:
      "Os machos utilizados na reprodução também necessitam de alimentação equilibrada. O excesso de gordura pode prejudicar o desempenho reprodutivo e a mobilidade, enquanto a alimentação insuficiente pode comprometer a condição corporal e a utilização do reprodutor.",
    pontos: [
      "Manter condição corporal adequada.",
      "Fornecer dieta equilibrada.",
      "Garantir água permanentemente.",
      "Evitar obesidade.",
      "Acompanhar o desempenho reprodutivo.",
    ],
  },
];

const principios = [
  {
    titulo: "Água",
    icon: "💧",
    texto:
      "A água é um dos elementos mais importantes da alimentação dos suínos. A falta de água pode reduzir o consumo de alimento, prejudicar o crescimento e afetar o desempenho dos animais. A água deve estar limpa, acessível e ser renovada sempre que necessário.",
  },
  {
    titulo: "Proteína",
    icon: "🌱",
    texto:
      "As proteínas fornecem aminoácidos necessários para crescimento, manutenção dos tecidos e produção. A quantidade e qualidade da proteína devem ser consideradas de acordo com a fase produtiva.",
  },
  {
    titulo: "Energia",
    icon: "⚡",
    texto:
      "A energia da dieta é utilizada para manutenção, crescimento, reprodução e produção de leite. Uma dieta desequilibrada pode provocar baixo crescimento ou excesso de deposição de gordura.",
  },
  {
    titulo: "Minerais e vitaminas",
    icon: "🧂",
    texto:
      "Minerais e vitaminas participam de várias funções do organismo, incluindo crescimento, formação óssea, reprodução e funcionamento do sistema imunitário. A suplementação deve ser orientada de acordo com a dieta utilizada.",
  },
];

const ingredientes = [
  {
    titulo: "Milho",
    texto:
      "É uma importante fonte de energia em muitas dietas para suínos. A quantidade utilizada deve ser definida dentro de uma formulação equilibrada.",
  },
  {
    titulo: "Farelo de soja",
    texto:
      "É uma fonte importante de proteína vegetal utilizada na alimentação de suínos. Deve ser utilizado de acordo com a formulação da dieta.",
  },
  {
    titulo: "Farelos e subprodutos",
    texto:
      "Alguns subprodutos agrícolas podem ser utilizados, mas a sua inclusão deve considerar composição nutricional, qualidade, conservação e possíveis fatores antinutricionais.",
  },
  {
    titulo: "Ingredientes locais",
    texto:
      "Em Angola, determinados ingredientes disponíveis localmente podem fazer parte das dietas, desde que a sua qualidade e composição sejam conhecidas e que a dieta final seja nutricionalmente equilibrada.",
  },
];

const erros = [
  "Fornecer alimento mofado ou deteriorado.",
  "Utilizar restos de cozinha sem controlo de qualidade e segurança.",
  "Mudar a alimentação de forma brusca.",
  "Não disponibilizar água suficiente.",
  "Comprar ingredientes apenas pelo preço, sem avaliar a qualidade.",
  "Guardar ração em locais húmidos.",
  "Deixar o alimento exposto à chuva.",
  "Não limpar regularmente os comedouros.",
  "Utilizar a mesma dieta para todas as fases produtivas.",
  "Não acompanhar o consumo dos animais.",
];

export default function AlimentacaoSuinosPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* CABEÇALHO */}
      <section className="border-b bg-gradient-to-b from-green-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="mb-5 text-sm text-slate-500">
            <Link href="/" className="hover:text-green-700">
              Início
            </Link>{" "}
            ›{" "}
            <Link href="/pecuaria" className="hover:text-green-700">
              Pecuária
            </Link>{" "}
            ›{" "}
            <Link
              href="/pecuaria/suinos/orientacoes"
              className="hover:text-green-700"
            >
              Suínos
            </Link>{" "}
            › Alimentação
          </div>

          <div className="max-w-4xl">
            <div className="mb-4 text-5xl">🐖</div>

            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-green-700">
              AGROINOVA ANGOLA · SUINICULTURA
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Alimentação de Suínos
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Orientação técnica sobre alimentação de suínos, desde os leitões
              até aos animais adultos, considerando crescimento, reprodução,
              engorda, disponibilidade de ingredientes, água, conservação dos
              alimentos e condições de produção encontradas em Angola.
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-slate-900">
              Por que a alimentação é fundamental?
            </h2>

            <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
              <p>
                A alimentação representa uma das principais componentes da
                produção de suínos. O alimento influencia diretamente o
                crescimento, a condição corporal, a reprodução, a produção de
                leite das porcas e a qualidade dos animais destinados ao
                mercado.
              </p>

              <p>
                Uma exploração pode possuir bons animais e instalações
                adequadas, mas apresentar resultados insatisfatórios quando a
                alimentação não corresponde às necessidades dos animais.
                Portanto, a alimentação deve ser tratada como parte de um
                sistema de produção e não apenas como fornecimento de qualquer
                alimento disponível.
              </p>

              <p>
                As necessidades nutricionais variam conforme a idade, peso,
                sexo, estado fisiológico, finalidade produtiva e condições de
                criação. Um leitão recém-desmamado, uma porca em lactação e um
                macho reprodutor não devem ser alimentados exatamente da mesma
                maneira.
              </p>

              <p>
                Para uma exploração comercial, a formulação das dietas deve,
                sempre que possível, contar com acompanhamento de um técnico
                de produção animal ou nutricionista, principalmente quando se
                pretende utilizar ingredientes alternativos ou produzir a
                própria ração.
              </p>
            </div>
          </div>

          <aside className="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 className="text-xl font-bold text-green-900">
              Regra fundamental
            </h3>

            <p className="mt-4 leading-7 text-green-900/80">
              Não existe uma única ração adequada para todos os suínos. A
              alimentação deve acompanhar a fase de produção e as necessidades
              do animal.
            </p>

            <div className="mt-6 rounded-xl bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">
                Antes de mudar a dieta:
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                avalie a idade, peso, finalidade, condição corporal, consumo,
                disponibilidade de água e qualidade dos ingredientes.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* FASES */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              Maneio alimentar
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Alimentação de acordo com a fase produtiva
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              O programa alimentar deve acompanhar o ciclo de vida e a função
              produtiva do animal.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {fases.map((fase) => (
              <article
                key={fase.titulo}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{fase.icon}</span>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {fase.titulo}
                  </h3>
                </div>

                <p className="mt-5 leading-7 text-slate-600">
                  {fase.texto}
                </p>

                <ul className="mt-5 space-y-3">
                  {fase.pontos.map((ponto) => (
                    <li
                      key={ponto}
                      className="flex gap-3 text-sm leading-6 text-slate-600"
                    >
                      <span className="mt-1 text-green-700">✓</span>
                      <span>{ponto}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCÍPIOS NUTRICIONAIS */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            Base da dieta
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Elementos fundamentais da alimentação
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {principios.map((principio) => (
            <article
              key={principio.titulo}
              className="rounded-2xl border border-slate-200 p-6"
            >
              <div className="text-4xl">{principio.icon}</div>

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                {principio.titulo}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {principio.texto}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* INGREDIENTES */}
      <section className="bg-green-50 py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              Matérias-primas
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Ingredientes utilizados na alimentação
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              A escolha dos ingredientes deve considerar valor nutricional,
              disponibilidade, preço, qualidade, conservação e segurança.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {ingredientes.map((ingrediente) => (
              <article
                key={ingrediente.titulo}
                className="rounded-2xl border border-green-100 bg-white p-7"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {ingrediente.titulo}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {ingrediente.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REALIDADE ANGOLANA */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              Angola
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Alimentação e realidade das explorações angolanas
            </h2>

            <div className="mt-6 space-y-4 leading-8 text-slate-600">
              <p>
                Nas explorações familiares e comerciais de Angola, a
                disponibilidade e o preço dos ingredientes podem variar
                significativamente ao longo do ano e entre diferentes regiões.
                Por isso, o produtor precisa conhecer os recursos disponíveis
                localmente sem comprometer o equilíbrio nutricional da dieta.
              </p>

              <p>
                A utilização de ingredientes produzidos na própria exploração
                pode reduzir custos em determinadas situações, mas não significa
                que qualquer ingrediente agrícola possa ser utilizado
                isoladamente como ração completa.
              </p>

              <p>
                Milho, farelos, fontes proteicas e outros ingredientes podem
                desempenhar funções diferentes na dieta. A substituição de um
                ingrediente por outro deve considerar o seu valor nutricional
                e a quantidade que pode ser incorporada na formulação.
              </p>

              <p>
                Em períodos de escassez ou aumento de preços, a decisão de
                substituir ingredientes deve ser feita com cuidado. Uma dieta
                aparentemente barata pode tornar-se cara quando provoca baixo
                crescimento, pior conversão alimentar, doenças nutricionais ou
                aumento do tempo necessário para atingir o peso de venda.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
            <h3 className="text-xl font-bold text-slate-900">
              Para o produtor angolano
            </h3>

            <ul className="mt-6 space-y-4">
              <li className="flex gap-3">
                <span className="text-green-700">✓</span>
                <span>
                  Conheça os ingredientes disponíveis na sua região.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-green-700">✓</span>
                <span>
                  Compare preço por unidade de peso e não apenas o preço do
                  saco.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-green-700">✓</span>
                <span>
                  Verifique a qualidade antes de introduzir um ingrediente.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-green-700">✓</span>
                <span>
                  Evite utilizar ingredientes contaminados ou deteriorados.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-green-700">✓</span>
                <span>
                  Procure assistência técnica para formular dietas.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-green-700">✓</span>
                <span>
                  Registe consumo e crescimento para avaliar o resultado.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ÁGUA */}
      <section className="bg-sky-50 py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="text-6xl">💧</div>

            <div className="lg:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-wider text-sky-700">
                Atenção especial
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Água não é um detalhe da alimentação
              </h2>

              <div className="mt-5 space-y-4 leading-8 text-slate-600">
                <p>
                  A disponibilidade de água influencia diretamente o consumo de
                  alimento e o desempenho dos suínos. Um animal pode reduzir o
                  consumo de ração quando não encontra água em quantidade
                  suficiente.
                </p>

                <p>
                  Os bebedouros devem ser mantidos limpos e funcionar
                  corretamente. Também é importante verificar regularmente se
                  existe água disponível durante os períodos mais quentes.
                </p>

                <p>
                  A qualidade da água deve ser considerada como parte do
                  programa sanitário da exploração. Água contaminada pode
                  contribuir para problemas digestivos e sanitários.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ERROS */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
            Evitar
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Erros frequentes na alimentação dos suínos
          </h2>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {erros.map((erro, index) => (
            <div
              key={erro}
              className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-sm font-bold text-red-600">
                {index + 1}
              </span>

              <p className="leading-7 text-slate-600">{erro}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ARMAZENAMENTO */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-slate-900">
            Armazenamento dos alimentos
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6">
              <h3 className="font-bold text-slate-900">
                Local seco
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Os alimentos devem ser armazenados num espaço seco, protegido
                da chuva e da humidade.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6">
              <h3 className="font-bold text-slate-900">
                Proteção contra pragas
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                O armazenamento deve reduzir o acesso de roedores, insetos e
                outros animais que possam contaminar ou destruir o alimento.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6">
              <h3 className="font-bold text-slate-900">
                Rotação dos alimentos
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Utilize primeiro os alimentos mais antigos, mantendo os
                produtos identificados e organizados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="rounded-3xl border border-green-100 bg-green-50 p-8 md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Checklist diário do produtor
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Existe água limpa disponível?",
              "Os bebedouros estão a funcionar?",
              "Os comedouros estão limpos?",
              "O alimento apresenta cheiro e aparência normais?",
              "Há alimento mofado ou húmido?",
              "Os animais estão a consumir normalmente?",
              "Existem animais que deixaram de comer?",
              "Há desperdício excessivo de ração?",
              "Os leitões apresentam crescimento adequado?",
              "As porcas apresentam condição corporal adequada?",
              "Os alimentos estão protegidos contra roedores?",
              "Existe registo do consumo e do desempenho?",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white p-4 text-sm text-slate-700"
              >
                ☐ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="border-t bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Fontes técnicas para aprofundamento
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            A orientação apresentada deve ser complementada por literatura
            técnica e acompanhamento profissional. Para formulações específicas
            de dietas, devem ser considerados os ingredientes realmente
            disponíveis e as necessidades nutricionais dos animais.
          </p>

          <div className="mt-6 space-y-3">
            <a
              href="https://www.fao.org/dad-is/data/breed-information/en"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border p-5 hover:border-green-400 hover:bg-green-50"
            >
              <strong className="text-green-800">
                FAO — DAD-IS: Breed Information
              </strong>
              <span className="mt-1 block text-sm text-slate-600">
                Base internacional de informação sobre recursos genéticos
                animais.
              </span>
            </a>

            <a
              href="https://www.fao.org/4/i2471e/i2471e00.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border p-5 hover:border-green-400 hover:bg-green-50"
            >
              <strong className="text-green-800">
                FAO — Good practices for biosecurity in the pig sector
              </strong>
              <span className="mt-1 block text-sm text-slate-600">
                Material técnico relacionado com produção e biossegurança na
                suinicultura.
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="border-t bg-slate-50 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 sm:flex-row">
          <Link
            href="/pecuaria/suinos/orientacoes/racas"
            className="rounded-xl bg-green-700 px-6 py-3 text-center font-semibold text-white hover:bg-green-800"
          >
            ← Raças de Suínos
          </Link>

          <Link
            href="/pecuaria/suinos/orientacoes"
            className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-center font-semibold text-slate-700 hover:bg-slate-100"
          >
            Todas as orientações
          </Link>

          <Link
            href="/pecuaria"
            className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-center font-semibold text-slate-700 hover:bg-slate-100"
          >
            Pecuária
          </Link>
        </div>
      </section>
    </main>
  );
}