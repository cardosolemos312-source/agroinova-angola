import Link from "next/link";

const imagens = {
  hero:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Turkey%20male%20and%20female.jpg?width=1800",
  casal:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Turkey%20male.jpg?width=1600",
  ninho:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Turkey%20nest.jpg?width=1600",
  ovos:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Turkey%20eggs.jpg?width=1600",
  criacao:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Turkey%20farm.jpg?width=1600",
};

const pilares = [
  {
    numero: "01",
    titulo: "Seleção dos reprodutores",
    texto:
      "A escolha dos machos e fêmeas destinados à reprodução deve considerar saúde, desenvolvimento corporal, conformação, origem genética e características desejáveis para o sistema de produção.",
  },
  {
    numero: "02",
    titulo: "Condição corporal",
    texto:
      "Animais demasiado debilitados ou com problemas de saúde não devem ser considerados bons candidatos à reprodução. O estado corporal deve ser acompanhado ao longo do ciclo.",
  },
  {
    numero: "03",
    titulo: "Ambiente",
    texto:
      "Instalações adequadas, espaço, ventilação, higiene, água e alimentação contribuem para o bem-estar e para melhores condições reprodutivas.",
  },
  {
    numero: "04",
    titulo: "Registos",
    texto:
      "Identificar lotes, origem, idade, produção de ovos e observações permite selecionar melhor os animais e tomar decisões com base em informação.",
  },
];

const sinaisFemea = [
  "Comportamento compatível com a fase reprodutiva",
  "Boa condição corporal",
  "Atividade e comportamento normais",
  "Consumo regular de água e alimento",
  "Ausência de sinais evidentes de doença",
  "Boa capacidade de adaptação ao sistema de criação",
];

const sinaisMacho = [
  "Boa condição corporal",
  "Desenvolvimento adequado",
  "Boa mobilidade",
  "Ausência de alterações evidentes que comprometam a reprodução",
  "Comportamento ativo",
  "Histórico sanitário conhecido sempre que possível",
];

const problemas = [
  {
    titulo: "Baixa produção de ovos",
    texto:
      "Pode estar relacionada com idade, genética, alimentação, condição corporal, ambiente, stress ou problemas sanitários. A investigação deve considerar vários fatores.",
  },
  {
    titulo: "Ovos danificados",
    texto:
      "Pode ocorrer devido às condições dos ninhos, manejo, comportamento das aves, recolha inadequada ou problemas de armazenamento.",
  },
  {
    titulo: "Baixa fertilidade",
    texto:
      "Pode estar associada à qualidade dos reprodutores, proporção entre machos e fêmeas, condição corporal, idade, manejo ou fatores sanitários.",
  },
  {
    titulo: "Mortalidade de embriões",
    texto:
      "Quando ocorre durante a incubação, devem ser avaliadas a qualidade dos ovos, armazenamento, higiene e condições do processo de incubação.",
  },
];

const erros = [
  "Escolher reprodutores apenas pelo tamanho.",
  "Usar aves com problemas sanitários evidentes.",
  "Não manter registos dos reprodutores.",
  "Ignorar a condição corporal.",
  "Misturar animais sem observar compatibilidade e manejo.",
  "Deixar ninhos sujos ou inadequados.",
  "Manusear ovos sem higiene adequada.",
  "Armazenar ovos reprodutivos de forma inadequada.",
  "Ignorar problemas recorrentes de fertilidade.",
  "Não procurar orientação técnica quando existem perdas importantes.",
];

export default function PerusReproducaoPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={imagens.hero}
            alt="Perus adultos destinados à reprodução"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">
              AGROINOVA ANGOLA • Pecuária • Perus
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Reprodução de Perus
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
              Orientação sobre seleção de reprodutores, condição corporal,
              produção e manejo de ovos, fertilidade, incubação e formação de
              lotes destinados à reprodução.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20">
                Reprodutores
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20">
                Ovos
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20">
                Fertilidade
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20">
                Incubação
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Base da reprodução
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              Uma boa reprodução começa muito antes do ovo
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              A reprodução eficiente depende das condições acumuladas durante
              todo o ciclo de vida dos animais. Alimentação, crescimento,
              sanidade, ambiente e seleção dos reprodutores influenciam a
              qualidade do lote reprodutivo.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Por isso, o produtor não deve esperar pela época reprodutiva para
              começar a cuidar dos futuros reprodutores.
            </p>

            <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
              <p className="font-black text-emerald-900">
                Ideia central
              </p>
              <p className="mt-2 leading-7 text-emerald-800">
                Reprodutores saudáveis e bem manejados aumentam as condições
                para produzir ovos férteis e descendentes de qualidade.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
            <img
              src={imagens.criacao}
              alt="Perus adultos em sistema de criação"
              className="h-[430px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Manejo reprodutivo
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              Quatro pilares para uma reprodução organizada
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {pilares.map((item) => (
              <article
                key={item.numero}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-700 font-black text-white">
                    {item.numero}
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-slate-900">
                      {item.titulo}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {item.texto}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SELEÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200">
            <img
              src={imagens.casal}
              alt="Peru adulto utilizado como reprodutor"
              className="h-[470px] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Seleção
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              Como pensar na escolha dos reprodutores?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              A seleção deve procurar animais saudáveis, bem desenvolvidos e
              adequados ao objetivo do produtor. O tamanho isoladamente não
              deve ser utilizado como único critério.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Quando existe informação sobre origem, parentesco, desempenho ou
              histórico sanitário, esses dados podem ajudar a tomar decisões
              mais consistentes.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-black text-slate-900">
                  Para as fêmeas
                </h3>

                <ul className="mt-4 space-y-3">
                  {sinaisFemea.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-slate-600"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-black text-slate-900">
                  Para os machos
                </h3>

                <ul className="mt-4 space-y-3">
                  {sinaisMacho.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-slate-600"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONDIÇÃO CORPORAL */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
                Condição corporal
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Nem excesso nem deficiência: o equilíbrio importa
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                A condição corporal influencia a capacidade dos animais de
                enfrentar as exigências da reprodução. Animais debilitados,
                doentes ou submetidos a stress intenso devem ser avaliados antes
                de serem mantidos como reprodutores.
              </p>

              <p className="mt-4 leading-8 text-slate-300">
                O acompanhamento deve começar durante o crescimento e continuar
                na fase adulta, evitando alterações bruscas de alimentação ou
                manejo.
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-8 ring-1 ring-white/10">
              <h3 className="text-2xl font-black">
                Observe regularmente
              </h3>

              <div className="mt-6 space-y-3">
                {[
                  "Estado geral das aves",
                  "Condição corporal",
                  "Atividade e mobilidade",
                  "Consumo de água",
                  "Consumo de alimento",
                  "Alterações de comportamento",
                  "Sinais de doença",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVOS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200">
            <img
              src={imagens.ovos}
              alt="Ovos de peru destinados à reprodução"
              className="h-[420px] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Manejo dos ovos
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              O ovo fértil exige cuidado desde a recolha
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Quando os ovos são destinados à incubação, a higiene, a
              manipulação, o armazenamento e o transporte tornam-se partes
              importantes do processo.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                [
                  "Recolha",
                  "Recolher os ovos regularmente reduz o risco de sujidade, danos e perdas.",
                ],
                [
                  "Seleção",
                  "Separar ovos danificados ou inadequados para o objetivo reprodutivo.",
                ],
                [
                  "Higiene",
                  "Manusear com mãos e materiais limpos, evitando contaminações.",
                ],
                [
                  "Armazenamento",
                  "As condições devem ser controladas e adequadas ao período até à incubação.",
                ],
              ].map(([titulo, texto]) => (
                <div
                  key={titulo}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <h3 className="font-black text-slate-900">{titulo}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NINHOS */}
      <section className="bg-emerald-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
                Ninhos
              </p>

              <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
                O local de postura também faz parte do manejo reprodutivo
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Os ninhos devem proporcionar condições que favoreçam a postura
                e reduzam a possibilidade de ovos partidos, sujos ou
                contaminados.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "Manter os ninhos limpos.",
                  "Evitar materiais excessivamente húmidos.",
                  "Facilitar o acesso das fêmeas.",
                  "Proteger os ovos contra danos.",
                  "Inspecionar regularmente as condições do local.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-emerald-100 bg-white p-4"
                  >
                    <span className="font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
              <img
                src={imagens.ninho}
                alt="Ninho para aves"
                className="h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FERTILIDADE */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
            Fertilidade
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
            Quando a fertilidade está baixa, procure a causa
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Uma redução da fertilidade não deve ser atribuída automaticamente a
            um único animal. O problema pode estar relacionado com o conjunto
            do lote, condição dos reprodutores, idade, manejo, ambiente ou
            saúde.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {problemas.map((item) => (
            <article
              key={item.titulo}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-black text-slate-900">
                {item.titulo}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {item.texto}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* REGISTOS */}
      <section className="bg-slate-100 py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Registo reprodutivo
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900">
              Registar hoje ajuda a selecionar melhor amanhã
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Mesmo numa pequena exploração, registos simples podem melhorar
              muito a gestão do plantel.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Identificação do lote",
                "Origem dos reprodutores",
                "Idade aproximada",
                "Observações sanitárias",
                "Produção de ovos",
                "Ovos selecionados",
                "Ovos descartados",
                "Resultados de incubação",
                "Observações de manejo",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ANGOLA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2rem] bg-emerald-900 p-8 text-white sm:p-10 lg:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
              Reprodução em Angola
            </p>

            <h2 className="mt-3 max-w-4xl text-3xl font-black sm:text-4xl">
              O objetivo deve ser construir plantéis adaptados ao sistema de
              produção
            </h2>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-emerald-100">
              A produção de perus pode ocorrer em diferentes escalas e
              condições. Por isso, a seleção dos reprodutores deve considerar
              não apenas desempenho, mas também adaptação às condições reais da
              exploração.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/10">
                <h3 className="font-black">Adaptação</h3>
                <p className="mt-2 text-sm leading-6 text-emerald-100">
                  Animais adaptados ao ambiente e ao sistema de criação podem
                  facilitar o manejo.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/10">
                <h3 className="font-black">Sanidade</h3>
                <p className="mt-2 text-sm leading-6 text-emerald-100">
                  A prevenção sanitária deve acompanhar todas as fases do
                  plantel reprodutivo.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/10">
                <h3 className="font-black">Registos</h3>
                <p className="mt-2 text-sm leading-6 text-emerald-100">
                  Informação acumulada permite melhorar a seleção ao longo das
                  gerações.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ERROS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-700">
              Atenção
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              10 erros que podem prejudicar a reprodução
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              A reprodução exige consistência. Pequenas falhas repetidas podem
              resultar em perdas de ovos, fertilidade ou qualidade dos
              descendentes.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {erros.map((erro, index) => (
              <div
                key={erro}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <span className="font-black text-red-600">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-sm leading-6 text-slate-700">{erro}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
            Checklist
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Antes de iniciar um lote reprodutivo
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {[
              "Os reprodutores estão saudáveis?",
              "A condição corporal é adequada?",
              "Existe acesso permanente à água?",
              "A alimentação corresponde à fase produtiva?",
              "As instalações estão limpas e protegidas?",
              "Existem ninhos adequados?",
              "Os ovos serão recolhidos regularmente?",
              "Existe uma rotina para seleção dos ovos?",
              "Os registos do lote estão organizados?",
              "Existe apoio técnico para situações sanitárias ou reprodutivas complexas?",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10"
              >
                <div className="flex gap-3">
                  <span className="font-black text-emerald-300">✓</span>
                  <span className="text-sm leading-6 text-slate-200">
                    {item}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="border-t border-slate-200 bg-white py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
            Orientações sobre perus
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900">
            Continue a explorar
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            <Link
              href="/pecuaria/perus/orientacoes/alimentacao"
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-50"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Orientação
              </span>
              <h3 className="mt-2 font-black">Alimentação</h3>
            </Link>

            <Link
              href="/pecuaria/perus/orientacoes/instalacoes"
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-50"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Orientação
              </span>
              <h3 className="mt-2 font-black">Instalações</h3>
            </Link>

            <Link
              href="/pecuaria/perus/orientacoes/sanidade"
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-50"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Orientação
              </span>
              <h3 className="mt-2 font-black">Sanidade</h3>
            </Link>

            <Link
              href="/pecuaria/perus/orientacoes/crescimento"
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-50"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Orientação
              </span>
              <h3 className="mt-2 font-black">Crescimento</h3>
            </Link>

            <Link
              href="/pecuaria/perus/orientacoes/mercado"
              className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 transition hover:-translate-y-1 hover:border-emerald-300"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Próxima
              </span>
              <h3 className="mt-2 font-black text-slate-900">Mercado</h3>
            </Link>

            <Link
              href="/pecuaria/perus"
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-50"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Perus
              </span>
              <h3 className="mt-2 font-black">Área principal</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* NOTA */}
      <section className="bg-slate-100 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm leading-7 text-slate-600">
            <strong className="text-slate-900">Nota técnica:</strong> a
            reprodução varia conforme raça ou linhagem, idade, sistema de
            produção, ambiente, nutrição e condições sanitárias. Recomendações
            específicas de reprodução, incubação, vacinação ou tratamento
            devem ser ajustadas ao sistema utilizado e, quando necessário,
            acompanhadas por profissional habilitado.
          </p>
        </div>
      </section>
    </main>
  );
}