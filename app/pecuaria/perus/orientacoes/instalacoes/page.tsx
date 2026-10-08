import Link from "next/link";

const imagens = {
  hero:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Turkey%20farm%20-%20panoramio.jpg?width=1800",

  galpao:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Turkey%20farm.jpg?width=1600",

  aves:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Turkeys%20in%20a%20barn.jpg?width=1600",

  cama:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Poultry%20litter.jpg?width=1600",

  exterior:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Turkey%20house.jpg?width=1600",
};

const principios = [
  {
    numero: "01",
    titulo: "Localização",
    texto:
      "O local deve permitir boa drenagem, acesso para pessoas e equipamentos e condições que facilitem a limpeza e o controlo sanitário.",
  },
  {
    numero: "02",
    titulo: "Ventilação",
    texto:
      "O ar deve circular adequadamente para remover humidade, calor, poeira e gases, evitando correntes de ar prejudiciais sobre as aves.",
  },
  {
    numero: "03",
    titulo: "Espaço",
    texto:
      "À medida que os perus crescem, aumentam as necessidades de espaço. A lotação deve permitir que as aves caminhem, comam, bebam e descansem.",
  },
  {
    numero: "04",
    titulo: "Protecção",
    texto:
      "A instalação precisa proteger as aves contra chuva, calor excessivo, predadores, animais estranhos e condições ambientais adversas.",
  },
];

const zonas = [
  {
    titulo: "Zona de alimentação",
    texto:
      "Os comedouros devem ficar distribuídos de forma a reduzir competição e permitir acesso ao lote. A posição deve facilitar limpeza, abastecimento e observação.",
  },
  {
    titulo: "Zona de água",
    texto:
      "Os bebedouros devem estar acessíveis, limpos e posicionados de modo a reduzir derramamentos e formação de zonas excessivamente húmidas.",
  },
  {
    titulo: "Zona de descanso",
    texto:
      "As aves precisam de uma área confortável, seca e protegida para descansar. Uma cama deteriorada aumenta os riscos sanitários.",
  },
  {
    titulo: "Zona de circulação",
    texto:
      "O produtor deve conseguir entrar, observar o lote, retirar aves doentes e realizar limpeza sem criar perturbação desnecessária.",
  },
];

const erros = [
  "Construir o galpão numa zona sujeita a alagamentos.",
  "Bloquear completamente a circulação natural do ar.",
  "Criar excesso de aves num espaço reduzido.",
  "Permitir entrada de pessoas sem controlo.",
  "Misturar aves de idades muito diferentes sem estratégia sanitária.",
  "Manter cama húmida durante vários dias.",
  "Deixar equipamentos de água provocar encharcamento.",
  "Criar cantos onde as aves se acumulam.",
  "Não proteger a instalação contra predadores.",
  "Ignorar a limpeza entre lotes.",
];

const checklist = [
  "O local tem boa drenagem?",
  "Existe protecção contra chuva?",
  "Existe ventilação suficiente?",
  "A temperatura é adequada para a idade das aves?",
  "A cama está seca?",
  "Os bebedouros não estão a provocar excesso de humidade?",
  "Os comedouros estão facilmente acessíveis?",
  "As aves conseguem circular sem grande competição?",
  "A instalação pode ser limpa e desinfectada?",
  "Existe controlo de entrada de pessoas e equipamentos?",
  "Existe protecção contra predadores?",
  "É possível separar uma ave doente rapidamente?",
];

export default function InstalacoesPerusPage() {
  return (
    <main className="min-h-screen bg-[#f5f7f2] text-slate-800">
      {/* HERO */}
      <section className="relative min-h-[630px] overflow-hidden">
        <img
          src={imagens.hero}
          alt="Instalação para criação de perus"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/65 to-slate-950/15" />

        <div className="relative mx-auto flex min-h-[630px] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="max-w-4xl text-white">
            <Link
              href="/pecuaria/perus"
              className="mb-8 inline-flex rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold backdrop-blur transition hover:bg-white/20"
            >
              ← Voltar para Perus
            </Link>

            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-lime-300">
              AGROINOVA ANGOLA • PECUÁRIA
            </p>

            <h1 className="text-5xl font-black leading-[0.98] tracking-tight md:text-7xl">
              Instalações
              <span className="block text-lime-300">para Perus</span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-100 md:text-xl">
              Como preparar um ambiente seguro, ventilado, limpo e funcional
              para que os perus cresçam com menor pressão ambiental e melhor
              controlo do manejo.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <span className="rounded-full bg-lime-400 px-4 py-2 text-sm font-black text-slate-950">
                Guia técnico
              </span>

              <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                Galpões
              </span>

              <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                Ambiente
              </span>

              <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                Biossegurança
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ABERTURA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_.75fr]">
          <article className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
              A instalação é parte da produção
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              Um bom galpão não é apenas um lugar para colocar os perus.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              A instalação influencia temperatura, ventilação, humidade,
              qualidade da cama, acesso à água e alimento, limpeza,
              biossegurança e facilidade de observação das aves.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Quando a estrutura é mal planeada, o produtor acaba por tentar
              corrigir problemas ambientais através de medidas isoladas. Uma
              instalação bem pensada reduz muitos desses problemas antes que
              apareçam.
            </p>

            <div className="mt-8 rounded-2xl border-l-4 border-lime-500 bg-lime-50 p-6">
              <p className="font-black text-slate-950">
                Pense na instalação como uma ferramenta de produção.
              </p>

              <p className="mt-2 leading-7 text-slate-700">
                O melhor desenho é aquele que permite alimentar, fornecer água,
                observar, limpar, separar animais e controlar o ambiente com o
                menor esforço possível.
              </p>
            </div>
          </article>

          <div className="overflow-hidden rounded-[2rem] bg-slate-950 shadow-xl">
            <img
              src={imagens.galpao}
              alt="Galpão utilizado para criação de aves"
              className="h-full min-h-[430px] w-full object-cover"
            />

            <div className="p-6 text-white">
              <p className="text-sm font-black uppercase tracking-widest text-lime-300">
                Arquitectura de produção
              </p>

              <p className="mt-2 leading-7 text-slate-300">
                O galpão deve facilitar o manejo diário e permitir que o
                produtor identifique rapidamente alterações no comportamento
                das aves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 PRINCÍPIOS */}
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-lime-300">
              Quatro fundamentos
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Antes de construir, pense nestes quatro pontos.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {principios.map((item) => (
              <article
                key={item.numero}
                className="rounded-[2rem] bg-white/10 p-7 ring-1 ring-white/10 backdrop-blur"
              >
                <span className="text-5xl font-black text-lime-300">
                  {item.numero}
                </span>

                <h3 className="mt-4 text-2xl font-black">
                  {item.titulo}
                </h3>

                <p className="mt-3 leading-8 text-slate-300">
                  {item.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] shadow-xl">
            <img
              src={imagens.exterior}
              alt="Estrutura exterior para criação de perus"
              className="h-[500px] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
              Escolha do local
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-950 md:text-5xl">
              O galpão começa no terreno.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Antes de pensar nas paredes e no telhado, é necessário analisar o
              terreno. Uma instalação construída num ponto inadequado pode
              apresentar problemas de água, acesso, higiene e ambiente durante
              todo o ciclo produtivo.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Preferir terrenos com boa drenagem.",
                "Evitar zonas de acumulação de água.",
                "Garantir acesso para transporte e abastecimento.",
                "Considerar exposição ao sol e aos ventos predominantes.",
                "Manter distância adequada de outras criações quando possível.",
                "Planear a circulação de pessoas e equipamentos.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
                >
                  <span className="font-black text-emerald-600">✓</span>
                  <span className="text-sm leading-6 text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ANGOLA */}
      <section className="bg-gradient-to-br from-emerald-950 via-green-950 to-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-lime-300">
              Angola
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              O clima deve entrar no projecto.
            </h2>

            <p className="mt-6 text-lg leading-8 text-emerald-100">
              Angola apresenta diferentes condições climáticas e produtivas.
              Uma instalação adequada para uma determinada região pode exigir
              adaptações quando utilizada noutra. Temperatura, humidade,
              precipitação, altitude e disponibilidade de materiais devem ser
              considerados no desenho.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
                <p className="text-3xl font-black text-lime-300">Calor</p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Priorizar ventilação, sombra e redução da carga térmica.
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
                <p className="text-3xl font-black text-lime-300">Chuva</p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Proteger a cama, entradas e áreas de circulação contra
                  infiltrações e alagamentos.
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
                <p className="text-3xl font-black text-lime-300">Altitude</p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Considerar as condições ambientais locais e adaptar o manejo
                  à realidade da região.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VENTILAÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-slate-200">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
                Ventilação
              </p>

              <h2 className="mt-3 text-4xl font-black text-slate-950">
                Ar fresco não significa corrente de ar sobre as aves.
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Ventilar significa renovar o ar e controlar humidade, calor,
                poeira e gases. O objectivo é criar um ambiente respirável sem
                expor os animais a correntes de ar inadequadas.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl bg-emerald-50 p-5">
                  <h3 className="font-black text-emerald-950">
                    Ventilação natural
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Pode utilizar aberturas, laterais e orientação do galpão
                    para favorecer circulação de ar.
                  </p>
                </div>

                <div className="rounded-2xl bg-amber-50 p-5">
                  <h3 className="font-black text-amber-950">
                    Problema comum
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Fechar completamente o galpão para proteger as aves pode
                    aumentar humidade e acumulação de gases.
                  </p>
                </div>
              </div>
            </div>

            <div className="min-h-[500px]">
              <img
                src={imagens.aves}
                alt="Perus em ambiente de criação"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CAMA */}
      <section className="bg-amber-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] shadow-xl">
              <img
                src={imagens.cama}
                alt="Cama utilizada em instalação avícola"
                className="h-[500px] w-full object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-amber-700">
                Cama
              </p>

              <h2 className="mt-3 text-4xl font-black text-amber-950 md:text-5xl">
                A cama é o chão onde a saúde começa.
              </h2>

              <p className="mt-5 text-lg leading-8 text-amber-900/80">
                Uma cama excessivamente húmida aumenta a pressão ambiental
                dentro da instalação. O produtor deve identificar rapidamente
                as zonas que recebem água dos bebedouros ou humidade das fezes.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Manter seca",
                  "Remover zonas deterioradas",
                  "Controlar derramamentos",
                  "Evitar acumulação excessiva",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-amber-200"
                  >
                    <p className="font-black text-amber-950">✓ {item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZONAS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
            Organização interna
          </p>

          <h2 className="mt-3 text-4xl font-black text-slate-950 md:text-5xl">
            Divida mentalmente o galpão em zonas de manejo.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Mesmo numa instalação simples, pensar em zonas ajuda a organizar o
            trabalho e detectar problemas mais rapidamente.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {zonas.map((zona, index) => (
            <article
              key={zona.titulo}
              className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-200"
            >
              <span className="text-sm font-black text-emerald-600">
                ZONA 0{index + 1}
              </span>

              <h3 className="mt-3 text-2xl font-black text-slate-950">
                {zona.titulo}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {zona.texto}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* BIOSSEGURANÇA */}
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-lime-300">
              Biossegurança
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Uma porta aberta pode ser uma porta aberta para problemas.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              A instalação deve ajudar a controlar o movimento de pessoas,
              animais, equipamentos e materiais. Quanto mais organizado for o
              fluxo, mais fácil será reduzir oportunidades de introdução e
              disseminação de agentes infecciosos.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              ["Pessoas", "Controlar entradas e circulação."],
              ["Equipamentos", "Limpar antes de utilizar."],
              ["Animais", "Evitar contacto desnecessário."],
              ["Materiais", "Manter limpos e protegidos."],
            ].map(([titulo, texto]) => (
              <div
                key={titulo}
                className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10"
              >
                <h3 className="font-black text-lime-300">{titulo}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ERROS */}
      <section className="bg-red-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-red-300">
              Não faça assim
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              10 erros de instalação que devem ser evitados
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
            <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
              Ferramenta do produtor
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-950 md:text-5xl">
              Checklist da instalação
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Faça esta verificação regularmente. Uma instalação pode começar
              correcta e deteriorar-se com o tempo.
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

      {/* NAVEGAÇÃO */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
            Continue a aprender
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-950">
            Orientações para criação de perus
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <Link
            href="/pecuaria/perus/orientacoes/alimentacao"
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-sm text-emerald-700">01</p>
            <p className="mt-2 font-black text-slate-950">Alimentação</p>
          </Link>

          <Link
            href="/pecuaria/perus/orientacoes/instalacoes"
            className="rounded-2xl bg-emerald-900 p-6 text-white shadow-lg"
          >
            <p className="text-sm text-emerald-300">02</p>
            <p className="mt-2 font-black">Instalações</p>
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
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <p className="text-sm font-black uppercase tracking-wider text-slate-500">
            AGROINOVA ANGOLA • Instalações para Perus
          </p>

          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-500">
            Conteúdo educativo. O dimensionamento definitivo de uma instalação
            deve considerar o sistema de produção, idade, genética, clima,
            número de aves, legislação aplicável e orientação técnica.
          </p>
        </div>
      </footer>
    </main>
  );
}