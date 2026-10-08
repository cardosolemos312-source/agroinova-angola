import Link from "next/link";

const imagens = {
  hero:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Baby%20Turkeys.jpg?width=1800",

  manejo:
    "https://d1lg8auwtggj9x.cloudfront.net/images/Brooding_feed_paper_.width-820.png",

  sistema:
    "https://www.bigdutchman.com/fileadmin/content/egg-poultry/press/news/photos/2021/2021_04_13_Spanien_Putenstall/Putenhaltung-turkey-production-900-young-turkeys-Big-Dutchman_72.jpg",

  agua:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Turkey%20poults%20%2854004639769%29.jpg?width=1600",

  criacao:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Turkey%20rearing.jpg?width=1400",
};

const fases = [
  {
    fase: "01",
    titulo: "Arranque / primeiros dias",
    destaque: "A fase em que pequenos erros podem custar caro",
    texto:
      "O peru jovem precisa encontrar rapidamente alimento e água. O objetivo inicial não é simplesmente colocar ração no galpão, mas tornar alimento e água fáceis de localizar e consumir. A observação dos animais nas primeiras horas é fundamental.",
    pontos: [
      "Disponibilizar alimento fresco e de fácil acesso.",
      "Garantir água limpa e facilmente localizada.",
      "Evitar que aves mais fracas fiquem afastadas dos pontos de alimentação.",
      "Observar o comportamento do lote várias vezes ao dia.",
      "Verificar se os pintos estão realmente comendo e bebendo.",
    ],
  },
  {
    fase: "02",
    titulo: "Crescimento inicial",
    destaque: "Construir estrutura antes de procurar peso",
    texto:
      "Depois do arranque, o programa alimentar deve acompanhar o rápido desenvolvimento corporal. A qualidade da proteína, energia, minerais e vitaminas deve ser considerada em conjunto, e não como elementos isolados.",
    pontos: [
      "Usar ração adequada à fase.",
      "Evitar mudanças bruscas na alimentação.",
      "Controlar desperdício nos comedouros.",
      "Acompanhar uniformidade do lote.",
      "Manter água disponível permanentemente.",
    ],
  },
  {
    fase: "03",
    titulo: "Crescimento e desenvolvimento",
    destaque: "O lote começa a mostrar diferenças",
    texto:
      "À medida que os perus crescem, aumentam as necessidades de espaço e o consumo. Diferenças de tamanho podem aumentar quando algumas aves têm menor acesso à alimentação ou quando existe competição excessiva.",
    pontos: [
      "Ajustar equipamentos ao tamanho das aves.",
      "Garantir distribuição uniforme da ração.",
      "Monitorizar aves menores e dominadas.",
      "Manter cama seca e limpa.",
      "Controlar temperatura e ventilação.",
    ],
  },
  {
    fase: "04",
    titulo: "Acabamento",
    destaque: "Transformar alimentação em produto comercial",
    texto:
      "Na fase final, a eficiência alimentar passa a ter grande impacto económico. O produtor deve reduzir desperdícios e manter uma dieta compatível com a finalidade da criação.",
    pontos: [
      "Controlar perdas de ração.",
      "Manter comedouros corretamente regulados.",
      "Evitar ração húmida ou deteriorada.",
      "Observar consumo e comportamento.",
      "Registar o desempenho do lote.",
    ],
  },
];

const nutrientes = [
  {
    nome: "Proteína",
    funcao:
      "Participa na formação e renovação dos tecidos, incluindo músculos, órgãos, pele e penas.",
    alerta:
      "Uma dieta inadequada em proteína pode comprometer o crescimento e o desenvolvimento.",
  },
  {
    nome: "Energia",
    funcao:
      "Permite manutenção do organismo, atividade, crescimento e utilização dos nutrientes.",
    alerta:
      "O equilíbrio entre energia e proteína é mais importante do que olhar para apenas um componente.",
  },
  {
    nome: "Minerais",
    funcao:
      "Participam na formação óssea, equilíbrio fisiológico e diversas funções metabólicas.",
    alerta:
      "Desequilíbrios minerais podem comprometer desenvolvimento e estrutura corporal.",
  },
  {
    nome: "Vitaminas",
    funcao:
      "São necessárias em pequenas quantidades para diferentes processos metabólicos.",
    alerta:
      "Deficiências ou desequilíbrios podem afetar crescimento, resistência e desempenho.",
  },
  {
    nome: "Água",
    funcao:
      "É essencial para ingestão, digestão, circulação, regulação térmica e funcionamento do organismo.",
    alerta:
      "Falta de água rapidamente reduz o desempenho e pode agravar problemas em períodos de calor.",
  },
  {
    nome: "Fibra",
    funcao:
      "Contribui para o funcionamento adequado do aparelho digestivo quando fornecida em níveis apropriados.",
    alerta:
      "O excesso ou deficiência deve ser avaliado de acordo com a formulação da dieta.",
  },
];

const erros = [
  "Comprar ração apenas pelo preço, sem verificar a qualidade e a adequação à fase.",
  "Deixar a ração exposta à chuva, humidade ou calor excessivo.",
  "Permitir que o alimento fique contaminado por fezes, cama ou água.",
  "Colocar poucos comedouros para o tamanho do lote.",
  "Não observar se as aves menores conseguem chegar à ração.",
  "Fazer mudanças bruscas na alimentação.",
  "Ignorar o consumo de água.",
  "Usar ingredientes de qualidade duvidosa sem avaliação nutricional.",
  "Não controlar desperdício de ração.",
  "Não registar consumo e evolução do lote.",
];

const checklist = [
  "A água está limpa?",
  "Todos os perus conseguem chegar aos bebedouros?",
  "Existe alimento suficiente disponível?",
  "Os comedouros estão limpos?",
  "A ração está seca e sem sinais de deterioração?",
  "Existem aves muito menores que as restantes?",
  "Há competição excessiva nos comedouros?",
  "Existe desperdício significativo de ração?",
  "A cama permanece seca junto aos equipamentos?",
  "O lote está a apresentar comportamento normal?",
];

export default function AlimentacaoPerusPage() {
  return (
    <main className="min-h-screen bg-[#f5f7f2] text-slate-800">
      {/* HERO */}
      <section className="relative min-h-[620px] overflow-hidden">
        <img
          src={imagens.hero}
          alt="Perus jovens numa criação"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/20" />

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="max-w-4xl text-white">
            <Link
              href="/pecuaria/perus"
              className="mb-8 inline-flex rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold backdrop-blur transition hover:bg-white/20"
            >
              ← Voltar para Perus
            </Link>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-lime-300">
              AGROINOVA ANGOLA • PECUÁRIA
            </p>

            <h1 className="text-5xl font-black leading-[0.98] tracking-tight md:text-7xl">
              Alimentação
              <span className="block text-lime-300">de Perus</span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-100 md:text-xl">
              Como alimentar correctamente um peru desde os primeiros dias,
              reduzir desperdícios, melhorar o acesso à água e transformar uma
              boa alimentação em crescimento, saúde e eficiência produtiva.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <span className="rounded-full bg-lime-400 px-4 py-2 text-sm font-bold text-slate-950">
                Guia técnico
              </span>

              <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                Manejo prático
              </span>

              <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                Produção de carne
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_.65fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              O princípio fundamental
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              Não basta dar ração. É preciso fazer o peru conseguir comer.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              A alimentação de perus começa muito antes da formulação da ração.
              O produtor precisa pensar na qualidade do alimento, na forma como
              ele é apresentado, na localização dos comedouros, no acesso das
              aves, na água e nas condições ambientais do galpão.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Nos primeiros dias, uma ave pode ter ração disponível e, ainda
              assim, não conseguir iniciar correctamente a alimentação. Por
              isso, observar o comportamento do lote é tão importante quanto
              colocar alimento no comedouro.
            </p>

            <div className="mt-8 rounded-2xl border-l-4 border-lime-500 bg-lime-50 p-6">
              <p className="font-black text-slate-950">
                Ideia-chave para o produtor
              </p>

              <p className="mt-2 leading-7 text-slate-700">
                <strong>
                  Alimento disponível não significa alimento acessível.
                </strong>{" "}
                A distância, altura dos equipamentos, competição, iluminação,
                temperatura e qualidade da ração podem determinar se a ave
                realmente vai consumir o alimento.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-slate-900 shadow-xl">
            <img
              src={imagens.manejo}
              alt="Perus jovens junto de alimento e água"
              className="h-full min-h-[400px] w-full object-cover"
            />

            <div className="p-6 text-white">
              <p className="text-sm font-bold uppercase tracking-widest text-lime-300">
                Na prática
              </p>

              <p className="mt-2 leading-7 text-slate-200">
                Nos primeiros dias, aproximar alimento e água das aves facilita
                a aprendizagem e reduz a distância que elas precisam percorrer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ALERTA */}
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-5xl font-black text-lime-300">01</p>

              <h3 className="mt-3 text-xl font-bold">Alimento certo</h3>

              <p className="mt-3 leading-7 text-slate-300">
                A dieta deve acompanhar a fase de desenvolvimento e a
                finalidade da produção.
              </p>
            </div>

            <div>
              <p className="text-5xl font-black text-lime-300">02</p>

              <h3 className="mt-3 text-xl font-bold">Acesso correcto</h3>

              <p className="mt-3 leading-7 text-slate-300">
                Todas as aves devem ter oportunidade real de comer e beber.
              </p>
            </div>

            <div>
              <p className="text-5xl font-black text-lime-300">03</p>

              <h3 className="mt-3 text-xl font-bold">Observação diária</h3>

              <p className="mt-3 leading-7 text-slate-300">
                O comportamento do lote revela problemas antes que eles
                apareçam nos números de produção.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FASES */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
            Alimentação por fases
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            O que muda à medida que o peru cresce?
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            As necessidades do animal não permanecem iguais durante todo o
            ciclo. O programa alimentar deve acompanhar o desenvolvimento.
          </p>
        </div>

        <div className="mt-10 grid gap-5">
          {fases.map((fase) => (
            <article
              key={fase.fase}
              className="group rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg md:p-9"
            >
              <div className="grid gap-7 md:grid-cols-[100px_1fr]">
                <div>
                  <span className="text-5xl font-black text-lime-500">
                    {fase.fase}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-slate-950">
                    {fase.titulo}
                  </h3>

                  <p className="mt-2 font-bold text-emerald-700">
                    {fase.destaque}
                  </p>

                  <p className="mt-4 max-w-4xl leading-8 text-slate-600">
                    {fase.texto}
                  </p>

                  <div className="mt-6 grid gap-3 md:grid-cols-2">
                    {fase.pontos.map((ponto) => (
                      <div
                        key={ponto}
                        className="rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-700"
                      >
                        <span className="mr-2 font-black text-lime-600">
                          ✓
                        </span>

                        {ponto}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* NUTRIENTES */}
      <section className="bg-emerald-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-300">
              Por dentro da alimentação
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              O que existe por trás de uma boa ração?
            </h2>

            <p className="mt-5 text-lg leading-8 text-emerald-100">
              Uma alimentação equilibrada não depende de um único nutriente.
              Energia, proteína, minerais, vitaminas, água e outros componentes
              precisam estar correctamente combinados.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {nutrientes.map((item) => (
              <article
                key={item.nome}
                className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10 backdrop-blur"
              >
                <h3 className="text-xl font-black text-lime-300">
                  {item.nome}
                </h3>

                <p className="mt-4 leading-7 text-emerald-50">
                  {item.funcao}
                </p>

                <div className="mt-5 rounded-2xl bg-black/20 p-4">
                  <p className="text-sm leading-6 text-emerald-100">
                    <strong className="text-white">Atenção:</strong>{" "}
                    {item.alerta}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SISTEMA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-slate-200">
          <div className="grid lg:grid-cols-2">
            <div className="min-h-[450px]">
              <img
                src={imagens.sistema}
                alt="Sistema de alimentação e água numa instalação para perus"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
                Equipamento e manejo
              </p>

              <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
                O equipamento também faz parte da alimentação
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Um bom alimento perde parte do seu valor produtivo quando os
                equipamentos estão mal posicionados, mal regulados ou
                insuficientes para o tamanho do lote.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "Comedouros limpos e acessíveis.",
                  "Altura adequada ao tamanho das aves.",
                  "Distribuição uniforme pelo espaço.",
                  "Bebedouros em quantidade suficiente.",
                  "Manutenção regular dos equipamentos.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-xl bg-slate-50 p-4"
                  >
                    <span className="font-black text-emerald-600">✓</span>

                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ÁGUA */}
      <section className="bg-sky-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-300">
                Água
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Sem água, a boa ração não resolve o problema.
              </h2>

              <p className="mt-6 text-lg leading-8 text-sky-100">
                A água participa de praticamente todas as funções fundamentais
                do organismo. Por isso, disponibilidade, limpeza e qualidade
                devem fazer parte da rotina diária do produtor.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Disponibilidade contínua",
                  "Bebedouros limpos",
                  "Verificação diária",
                  "Prevenção de contaminação",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/10"
                  >
                    <p className="font-bold">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src={imagens.agua}
                alt="Perus jovens em criação"
                className="h-[500px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ARMAZENAMENTO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
              Armazenamento
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
              Uma ração boa pode tornar-se uma ração problemática.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              O armazenamento é parte do programa alimentar. Humidade, calor,
              sujidade, pragas e armazenamento prolongado podem comprometer a
              qualidade do alimento.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                {
                  titulo: "Local seco",
                  texto:
                    "Evitar contacto da ração com água e humidade.",
                },
                {
                  titulo: "Protecção contra pragas",
                  texto:
                    "Impedir acesso de roedores, insectos e outras fontes de contaminação.",
                },
                {
                  titulo: "Rotação",
                  texto:
                    "Organizar os sacos para utilizar primeiro os mais antigos.",
                },
                {
                  titulo: "Higiene",
                  texto:
                    "Manter o armazém limpo e evitar acumulação de resíduos.",
                },
              ].map((item) => (
                <div
                  key={item.titulo}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="font-black text-slate-950">
                    {item.titulo}
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    {item.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] bg-amber-50 p-7 ring-1 ring-amber-200">
            <p className="text-sm font-bold uppercase tracking-wider text-amber-800">
              Sinal de alerta
            </p>

            <h3 className="mt-3 text-2xl font-black text-amber-950">
              Não use automaticamente uma ração que apresente alterações.
            </h3>

            <p className="mt-4 leading-7 text-amber-900">
              Alterações de cheiro, aparência, humidade ou presença de bolor
              devem ser tratadas como sinais de possível deterioração.
            </p>

            <p className="mt-5 text-sm leading-6 text-amber-800">
              Em caso de dúvida sobre segurança do alimento, consulte um
              profissional de nutrição animal ou médico veterinário.
            </p>
          </aside>
        </div>
      </section>

      {/* ERROS */}
      <section className="bg-red-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-300">
              Atenção do produtor
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              10 erros que podem comprometer a alimentação
            </h2>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {erros.map((erro, index) => (
              <div
                key={erro}
                className="flex gap-4 rounded-2xl bg-white/10 p-5 ring-1 ring-white/10"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-400 font-black text-red-950">
                  {index + 1}
                </span>

                <p className="leading-7 text-red-50">{erro}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[2.5rem] bg-white p-8 shadow-xl ring-1 ring-slate-200 md:p-12">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
              Ferramenta do produtor
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-950 md:text-5xl">
              Checklist diário de alimentação
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Use esta lista durante a rotina de observação do lote. A ideia é
              transformar a alimentação em um processo controlado, e não numa
              tarefa feita automaticamente.
            </p>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {checklist.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-black text-emerald-800">
                  {index + 1}
                </span>

                <span className="font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANGOLA */}
      <section className="bg-gradient-to-br from-lime-950 via-emerald-950 to-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-300">
              Aplicação à realidade angolana
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              Alimentação eficiente começa com organização.
            </h2>

            <p className="mt-7 text-lg leading-8 text-emerald-100">
              Em sistemas pequenos e médios, o produtor pode melhorar bastante
              o desempenho sem depender necessariamente de equipamentos
              sofisticados. A prioridade deve ser garantir alimento adequado,
              água segura, limpeza, armazenamento correcto, observação das aves
              e registo do que acontece no lote.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
                <p className="text-3xl font-black text-lime-300">01</p>

                <h3 className="mt-3 font-black">Registar</h3>

                <p className="mt-2 text-sm leading-6 text-emerald-100">
                  Registe entrada de ração, consumo, mortalidade e evolução do
                  lote.
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
                <p className="text-3xl font-black text-lime-300">02</p>

                <h3 className="mt-3 font-black">Observar</h3>

                <p className="mt-2 text-sm leading-6 text-emerald-100">
                  Observe diariamente comportamento, uniformidade, consumo e
                  acesso à água.
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
                <p className="text-3xl font-black text-lime-300">03</p>

                <h3 className="mt-3 font-black">Corrigir</h3>

                <p className="mt-2 text-sm leading-6 text-emerald-100">
                  Pequenos problemas detectados cedo são mais fáceis de
                  corrigir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
            Continue a aprender
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-950">
            Orientações para criação de perus
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          <Link
            href="/pecuaria/perus/orientacoes/alimentacao"
            className="rounded-2xl bg-emerald-900 p-6 text-white shadow-lg transition hover:-translate-y-1"
          >
            <p className="text-sm text-emerald-300">01</p>
            <p className="mt-2 font-black">Alimentação</p>
          </Link>

          <Link
            href="/pecuaria/perus/orientacoes/instalacoes"
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-sm text-emerald-700">02</p>
            <p className="mt-2 font-black text-slate-950">Instalações</p>
          </Link>

          <Link
            href="/pecuaria/perus/orientacoes/sanidade"
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-sm text-emerald-700">03</p>
            <p className="mt-2 font-black text-slate-950">Sanidade</p>
          </Link>

          <Link
            href="/pecuaria/perus/orientacoes/crescimento"
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-sm text-emerald-700">04</p>
            <p className="mt-2 font-black text-slate-950">Crescimento</p>
          </Link>

          <Link
            href="/pecuaria/perus/orientacoes/reproducao"
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-sm text-emerald-700">05</p>
            <p className="mt-2 font-black text-slate-950">Reprodução</p>
          </Link>

          <Link
            href="/pecuaria/perus/orientacoes/mercado"
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-sm text-emerald-700">06</p>
            <p className="mt-2 font-black text-slate-950">Mercado</p>
          </Link>
        </div>
      </section>

      {/* FONTES */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
            AGROINOVA ANGOLA • Base técnica
          </p>

          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-500">
            Conteúdo educativo para apoio ao produtor. Recomendações
            nutricionais específicas devem considerar genética, idade, sistema
            de produção, disponibilidade de ingredientes, qualidade da água,
            clima e orientação de profissional qualificado.
          </p>

          <div className="mt-5 flex flex-wrap gap-3 text-xs text-slate-400">
            <span>Produção de perus</span>
            <span>•</span>
            <span>Nutrição animal</span>
            <span>•</span>
            <span>Manejo</span>
            <span>•</span>
            <span>Água e alimentação</span>
          </div>
        </div>
      </footer>
    </main>
  );
}