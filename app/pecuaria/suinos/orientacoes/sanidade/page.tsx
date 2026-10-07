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
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Pig_farm_of_GTSEZ.jpg?width=1600",
    href: "https://commons.wikimedia.org/wiki/File:Pig_farm_of_GTSEZ.jpg",
    alt: "Exploração de suínos",
    legenda:
      "Exploração de suínos utilizada como referência visual para a organização sanitária de uma unidade de produção.",
    fonte:
      "Wikimedia Commons — Golden Triangle Special Economic Zone — CC BY-SA 4.0.",
  },

  clinica: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Vet_Students_Clinical_Pig_2006-08.jpg?width=1600",
    href: "https://commons.wikimedia.org/wiki/File:Vet_Students_Clinical_Pig_2006-08.jpg",
    alt: "Avaliação clínica de um suíno por estudantes de veterinária",
    legenda:
      "Avaliação clínica de um suíno durante uma atividade de formação veterinária.",
    fonte:
      "Wikimedia Commons — Tim1965 — domínio público.",
  },

  tanzania: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Pig_looking_up.jpg?width=1600",
    href: "https://commons.wikimedia.org/wiki/File:Pig_looking_up.jpg",
    alt: "Suíno em recinto de uma exploração na Tanzânia",
    legenda:
      "Suíno observado num recinto de uma exploração localizada na região de Manyara, Tanzânia.",
    fonte:
      "Wikimedia Commons — AmyAbroad — licença Creative Commons indicada na página.",
  },

  babati: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Pig_farm_in_Babati.jpg?width=1600",
    href: "https://commons.wikimedia.org/wiki/File:Pig_farm_in_Babati.jpg",
    alt: "Suíno numa exploração em Babati, Tanzânia",
    legenda:
      "Exemplo de instalação de criação de suínos em contexto africano.",
    fonte:
      "Wikimedia Commons — AmyAbroad — CC BY-SA 4.0.",
  },
};

const sinaisAlerta = [
  {
    titulo: "Alteração do comportamento",
    texto:
      "Um suíno que se afasta do grupo, permanece deitado durante períodos anormais, apresenta apatia ou deixa de responder normalmente ao ambiente deve ser observado com atenção. A alteração comportamental pode ser um dos primeiros sinais de doença, dor, stress térmico ou problema relacionado com alimentação e água.",
  },
  {
    titulo: "Perda de apetite",
    texto:
      "A redução ou interrupção do consumo de alimento deve ser registada e investigada. É necessário verificar simultaneamente a disponibilidade de água, qualidade da ração, funcionamento dos bebedouros, temperatura do ambiente, alterações recentes no lote e presença de outros sinais clínicos.",
  },
  {
    titulo: "Febre ou temperatura corporal anormal",
    texto:
      "A temperatura corporal elevada ou outras alterações fisiológicas podem acompanhar processos infecciosos. A confirmação não deve ser feita apenas pela observação visual; quando necessário, a avaliação deve ser realizada com método adequado e orientação veterinária.",
  },
  {
    titulo: "Tosse e dificuldade respiratória",
    texto:
      "Tosse, espirros persistentes, secreção nasal, respiração acelerada ou dificuldade respiratória podem indicar problemas respiratórios. Ventilação inadequada, poeiras, gases irritantes, elevada densidade animal e agentes infecciosos podem estar envolvidos.",
  },
  {
    titulo: "Diarreia",
    texto:
      "Diarreia em leitões ou adultos pode estar associada a alterações alimentares, qualidade da água, parasitas, agentes bacterianos ou virais e problemas de higiene. A idade dos animais e a evolução do quadro são informações importantes para o diagnóstico.",
  },
  {
    titulo: "Morte súbita ou aumento inesperado de mortalidade",
    texto:
      "Mortalidade inesperada deve ser tratada como situação sanitária prioritária. Em doenças de declaração obrigatória, incluindo a Peste Suína Africana, é fundamental impedir movimentos desnecessários de animais, pessoas, equipamentos e produtos até receber orientação das autoridades veterinárias.",
  },
];

const doencas = [
  {
    grupo: "Doenças de elevada importância sanitária",
    nome: "Peste Suína Africana",
    descricao:
      "A Peste Suína Africana é uma doença viral altamente contagiosa que afeta suínos domésticos e selvagens. Pode causar perdas extremamente elevadas e possui importância económica e sanitária internacional. A WOAH informa que a mortalidade pode atingir níveis muito elevados, podendo chegar a 100% em determinadas formas da doença.",
    prevencao:
      "A prevenção depende principalmente de biossegurança rigorosa, controlo de movimentos, vigilância, higiene, controlo de visitantes, equipamentos e materiais potencialmente contaminados e comunicação rápida de suspeitas.",
    alerta:
      "Não utilizar medicamentos ou vacinas por iniciativa própria como tentativa de controlar uma suspeita de PSA. A situação deve ser comunicada e investigada segundo os procedimentos veterinários aplicáveis.",
  },
  {
    grupo: "Doenças infecciosas",
    nome: "Peste Suína Clássica",
    descricao:
      "A Peste Suína Clássica é uma doença viral contagiosa dos suínos domésticos e selvagens. A sua prevenção e controlo dependem de vigilância, biossegurança, controlo de movimentos e, em determinadas situações epidemiológicas, programas de vacinação estabelecidos pelas autoridades competentes.",
    prevencao:
      "A utilização de vacinação, quando indicada, deve fazer parte de um programa sanitário tecnicamente definido e não de aplicações aleatórias.",
    alerta:
      "Os sinais clínicos podem ser semelhantes aos de outras doenças. A diferenciação exige avaliação veterinária e, quando necessário, diagnóstico laboratorial.",
  },
  {
    grupo: "Problemas respiratórios",
    nome: "Síndromes respiratórias",
    descricao:
      "Problemas respiratórios em suínos podem resultar da combinação de agentes infecciosos, ambiente inadequado, poeiras, gases irritantes, ventilação insuficiente, elevada densidade animal e stress.",
    prevencao:
      "Manter boa ventilação sem criar correntes de ar prejudiciais, reduzir poeiras, controlar humidade, evitar sobrelotação, separar animais doentes e manter as instalações limpas.",
    alerta:
      "Tosse persistente, respiração difícil, secreções nasais ou aumento de animais afetados exigem avaliação técnica.",
  },
  {
    grupo: "Problemas digestivos",
    nome: "Diarreias e enteropatias",
    descricao:
      "As alterações digestivas são particularmente relevantes em leitões. Podem estar associadas à qualidade da alimentação, água, higiene, mudanças bruscas de dieta, agentes infecciosos e parasitas.",
    prevencao:
      "Garantir água limpa, alimentação adequada à idade, armazenamento correto dos alimentos, higiene dos comedouros e bebedouros e limpeza sistemática das instalações.",
    alerta:
      "Diarreia persistente, desidratação, sangue nas fezes, perda rápida de condição corporal ou mortalidade exigem intervenção veterinária.",
  },
  {
    grupo: "Parasitoses",
    nome: "Parasitas internos e externos",
    descricao:
      "Parasitas podem prejudicar crescimento, conversão alimentar, condição corporal e bem-estar. O risco depende do sistema de criação, higiene, contacto com o solo, introdução de animais e condições ambientais.",
    prevencao:
      "O controlo deve basear-se em diagnóstico, higiene, manejo adequado e utilização racional de antiparasitários sob orientação profissional.",
    alerta:
      "Não é recomendável aplicar repetidamente o mesmo antiparasitário sem avaliação. O uso inadequado pode reduzir a eficácia dos tratamentos e dificultar o controlo.",
  },
];

const categorias = [
  {
    titulo: "Leitões",
    texto:
      "Os leitões exigem atenção especial devido à maior vulnerabilidade a problemas digestivos, infecciosos, ambientais e de manejo. A maternidade deve proporcionar higiene, proteção contra correntes de ar, conforto térmico adequado e acesso rápido ao colostro e à alimentação apropriada.",
  },
  {
    titulo: "Desmamados",
    texto:
      "O desmame representa uma fase de forte mudança fisiológica e de manejo. A mistura de animais, mudanças alimentares, transporte e condições ambientais inadequadas podem aumentar o stress e favorecer problemas sanitários.",
  },
  {
    titulo: "Crescimento e engorda",
    texto:
      "Nesta fase, a sanidade está diretamente relacionada com alimentação, água, ventilação, densidade, higiene e observação diária. O acompanhamento permite identificar precocemente animais que apresentam redução do desempenho.",
  },
  {
    titulo: "Porcas gestantes",
    texto:
      "As porcas gestantes devem ser acompanhadas quanto à condição corporal, ingestão de água e alimento, locomoção, comportamento e sinais clínicos. O manejo deve evitar stress desnecessário e manter condições higiénicas adequadas.",
  },
  {
    titulo: "Porcas em lactação",
    texto:
      "Durante a lactação aumenta a exigência fisiológica da porca. O consumo adequado de água e alimento, a higiene da maternidade e a observação da porca e dos leitões são fundamentais para reduzir problemas produtivos e sanitários.",
  },
  {
    titulo: "Reprodutores",
    texto:
      "Os machos reprodutores devem ser observados quanto à condição corporal, locomoção, lesões, comportamento sexual e sinais clínicos. A introdução de um novo reprodutor deve ser precedida por medidas sanitárias apropriadas.",
  },
];

const biosseguranca = [
  "Controlar a entrada de pessoas na exploração.",
  "Evitar visitas desnecessárias às áreas onde estão os animais.",
  "Manter registos de visitantes, movimentações e introdução de novos animais.",
  "Separar animais recém-chegados antes da integração no efetivo, de acordo com orientação veterinária.",
  "Disponibilizar equipamentos e calçado destinados exclusivamente à exploração sempre que possível.",
  "Limpar e desinfetar equipamentos que tenham contacto com diferentes grupos de animais.",
  "Evitar a partilha de equipamentos entre explorações sem limpeza e desinfeção apropriadas.",
  "Controlar roedores, insetos e outros possíveis vetores.",
  "Impedir o contacto dos suínos domésticos com animais de origem desconhecida.",
  "Evitar alimentar suínos com restos de alimentos de origem desconhecida ou não tratados.",
  "Manter cadáveres, resíduos e materiais contaminados fora do contacto com os animais.",
  "Comunicar rapidamente sinais suspeitos às autoridades veterinárias.",
];

const rotinaDiaria = [
  "Observar todos os lotes antes da distribuição da alimentação.",
  "Identificar animais isolados, apáticos ou com comportamento diferente.",
  "Verificar se todos os bebedouros funcionam corretamente.",
  "Observar consumo de água e alimento.",
  "Verificar fezes, urina, tosse, secreções e alterações de pele.",
  "Observar animais com dificuldade de locomoção.",
  "Verificar mortalidade e retirar cadáveres de acordo com orientação sanitária.",
  "Avaliar limpeza, humidade, ventilação e presença de odores fortes.",
  "Registar qualquer alteração importante.",
];

const erros = [
  "Comprar animais sem conhecer a sua origem sanitária.",
  "Introduzir animais novos diretamente no lote principal.",
  "Permitir circulação descontrolada de visitantes.",
  "Partilhar botas, pás, baldes, seringas ou outros equipamentos entre explorações.",
  "Deixar água ou alimentos expostos à contaminação.",
  "Manter fezes acumuladas durante períodos prolongados.",
  "Misturar animais de idades e origens diferentes sem estratégia sanitária.",
  "Tratar todos os animais sem diagnóstico ou indicação técnica.",
  "Aplicar antibióticos como substituto de higiene e biossegurança.",
  "Utilizar vacinas sem verificar se estão autorizadas, corretamente conservadas e indicadas.",
  "Comprar medicamentos veterinários de procedência duvidosa.",
  "Não registar tratamentos realizados.",
  "Não comunicar mortalidade anormal.",
];

const registos = [
  "Data da ocorrência",
  "Identificação ou lote dos animais afetados",
  "Número de animais doentes",
  "Número de animais mortos",
  "Sinais observados",
  "Alimentação fornecida",
  "Fonte de água",
  "Tratamentos realizados",
  "Medicamento utilizado",
  "Dose e duração prescritas pelo profissional",
  "Vacina utilizada, quando aplicável",
  "Data da vacinação",
  "Lote e validade do produto",
  "Origem dos animais introduzidos",
  "Data de entrada na exploração",
  "Resultado de exames laboratoriais, quando realizados",
  "Observações do médico veterinário ou técnico",
];

function ImagemTecnica({ imagem }: { imagem: Imagem }) {
  return (
    <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <a
        href={imagem.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        title="Abrir imagem e fonte original"
      >
        <img
          src={imagem.src}
          alt={imagem.alt}
          className="h-72 w-full object-cover transition duration-300 hover:scale-[1.02]"
          loading="lazy"
        />
      </a>

      <figcaption className="space-y-1 p-4">
        <p className="text-sm font-medium text-slate-700">{imagem.legenda}</p>
        <p className="text-xs leading-5 text-slate-500">{imagem.fonte}</p>
        <a
          href={imagem.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block pt-1 text-xs font-semibold text-green-700 hover:underline"
        >
          Ver imagem original e informações da licença
        </a>
      </figcaption>
    </figure>
  );
}

function TituloSecao({
  numero,
  titulo,
  subtitulo,
}: {
  numero: string;
  titulo: string;
  subtitulo?: string;
}) {
  return (
    <div className="mb-8">
      <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-green-700">
        {numero}
      </p>

      <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
        {titulo}
      </h2>

      {subtitulo && (
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
          {subtitulo}
        </p>
      )}
    </div>
  );
}

export default function SanidadeSuinosPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* CABEÇALHO */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-green-700">
              Início
            </Link>

            <span>/</span>

            <Link href="/pecuaria" className="hover:text-green-700">
              Pecuária
            </Link>

            <span>/</span>

            <Link
              href="/pecuaria/suinos/orientacoes"
              className="hover:text-green-700"
            >
              Suínos
            </Link>

            <span>/</span>

            <strong className="text-slate-800">Sanidade</strong>
          </nav>
        </div>
      </section>

      {/* HERO */}
      <section className="bg-gradient-to-b from-green-50 to-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-16">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              AGROINOVA ANGOLA · SUÍNOS
            </p>

            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Sanidade de Suínos
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Princípios de prevenção, vigilância, biossegurança, identificação
              de sinais clínicos, higiene e organização sanitária aplicáveis às
              explorações de suínos, com atenção às condições de produção em
              Angola.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
                <p className="text-2xl font-bold text-green-800">01</p>
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  Prevenção
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Reduzir os riscos antes do aparecimento da doença.
                </p>
              </div>

              <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
                <p className="text-2xl font-bold text-green-800">02</p>
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  Vigilância
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Observar diariamente os animais e instalações.
                </p>
              </div>

              <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
                <p className="text-2xl font-bold text-green-800">03</p>
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  Resposta
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Isolar, investigar e comunicar situações suspeitas.
                </p>
              </div>
            </div>
          </div>

          <ImagemTecnica imagem={imagens.hero} />
        </div>
      </section>

      {/* AVISO TÉCNICO */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-lg font-bold text-amber-950">
            Nota técnica importante
          </h2>

          <p className="mt-3 text-sm leading-7 text-amber-900">
            Esta página tem finalidade educativa e de orientação técnica. Não
            substitui o diagnóstico realizado por médico veterinário nem os
            procedimentos oficiais das autoridades veterinárias. Medicamentos,
            antibióticos, antiparasitários e vacinas não devem ser utilizados
            de forma indiscriminada.
          </p>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <TituloSecao
          numero="01"
          titulo="Sanidade não começa no medicamento"
          subtitulo="Uma exploração sanitariamente organizada procura impedir a entrada e a disseminação de agentes de doença antes de depender de tratamentos."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-5 text-[16px] leading-8 text-slate-700">
            <p>
              A sanidade de uma exploração suinícola constitui um sistema de
              medidas destinadas a preservar a saúde dos animais, reduzir a
              ocorrência de doenças, proteger o desempenho produtivo e limitar
              os riscos de transmissão entre animais, pessoas, explorações e
              diferentes locais de produção.
            </p>

            <p>
              Por essa razão, a sanidade não deve ser entendida apenas como a
              administração de medicamentos quando um animal adoece. Ela começa
              na escolha dos animais, continua na instalação, na qualidade da
              água, na alimentação, na limpeza, na ventilação, na gestão dos
              resíduos, na entrada de pessoas e equipamentos e no
              acompanhamento diário dos animais.
            </p>

            <p>
              Esta abordagem é particularmente importante para doenças de
              grande impacto, como a Peste Suína Africana. A FAO e a WOAH
              destacam a prevenção, biossegurança, vigilância, higiene e
              controlo dos movimentos como componentes fundamentais do controlo
              da doença.
            </p>
          </div>

          <ImagemTecnica imagem={imagens.clinica} />
        </div>
      </section>

      {/* CONTEXTO ANGOLA */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <TituloSecao
            numero="02"
            titulo="Sanidade no contexto angolano"
            subtitulo="A estratégia sanitária deve considerar o sistema de produção, a disponibilidade de serviços veterinários, o clima, a água, os materiais disponíveis e a circulação de animais."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Pequenas explorações familiares
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Em sistemas familiares, muitas medidas sanitárias eficazes não
                dependem de equipamentos sofisticados. Separar animais novos,
                manter água limpa, evitar acumulação de fezes, limpar
                instalações, limitar visitantes e observar diariamente os
                animais podem reduzir significativamente oportunidades de
                transmissão.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Explorações periurbanas
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Em zonas próximas de áreas urbanas, a movimentação de pessoas,
                animais, veículos, alimentos e equipamentos deve ser
                cuidadosamente considerada. A proximidade entre explorações
                aumenta a importância do controlo de visitantes, da limpeza e
                da gestão de resíduos.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Regiões quentes
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                O stress térmico pode prejudicar o consumo, o comportamento, a
                reprodução e o bem-estar. Instalações com ventilação adequada,
                sombra, água disponível e boa gestão da densidade animal
                contribuem para reduzir problemas associados ao calor.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Regiões de maior altitude
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Em regiões mais frescas, sobretudo durante períodos de
                temperaturas baixas, é necessário proteger especialmente os
                leitões contra correntes de ar e condições ambientais
                desfavoráveis. A ventilação continua necessária, mas deve ser
                compatível com o conforto dos animais.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ROTINA */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <TituloSecao
          numero="03"
          titulo="Observação sanitária diária"
          subtitulo="A deteção precoce depende de uma rotina de observação sistemática."
        />

        <div className="grid gap-3 md:grid-cols-2">
          {rotinaDiaria.map((item, index) => (
            <div
              key={item}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-800">
                {String(index + 1).padStart(2, "0")}
              </div>

              <p className="leading-7 text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SINAIS */}
      <section className="bg-green-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <TituloSecao
            numero="04"
            titulo="Sinais clínicos que exigem atenção"
            subtitulo="O objetivo da observação não é fazer um diagnóstico definitivo, mas reconhecer alterações que justificam investigação."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {sinaisAlerta.map((item, index) => (
              <article
                key={item.titulo}
                className="rounded-3xl border border-white/15 bg-white/10 p-6"
              >
                <p className="text-sm font-bold text-green-300">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-2 text-xl font-bold">{item.titulo}</h3>

                <p className="mt-3 leading-7 text-green-50/90">
                  {item.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DOENÇAS */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <TituloSecao
          numero="05"
          titulo="Principais grupos de problemas sanitários"
          subtitulo="A classificação abaixo é educativa. Sinais semelhantes podem aparecer em doenças diferentes e a confirmação pode exigir exame clínico e diagnóstico laboratorial."
        />

        <div className="space-y-6">
          {doencas.map((doenca, index) => (
            <article
              key={doenca.nome}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="grid lg:grid-cols-[240px_1fr]">
                <div className="bg-green-50 p-6">
                  <p className="text-sm font-bold uppercase tracking-wide text-green-700">
                    {doenca.grupo}
                  </p>

                  <p className="mt-5 text-4xl font-bold text-green-900">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {doenca.nome}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    {doenca.descricao}
                  </p>

                  <div className="mt-6 grid gap-5 md:grid-cols-2">
                    <div className="rounded-2xl bg-slate-50 p-5">
                      <h4 className="font-bold text-slate-900">
                        Prevenção e manejo
                      </h4>

                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {doenca.prevencao}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-red-50 p-5">
                      <h4 className="font-bold text-red-900">
                        Quando aumentar a vigilância
                      </h4>

                      <p className="mt-2 text-sm leading-7 text-red-800">
                        {doenca.alerta}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PSA */}
      <section className="bg-red-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <TituloSecao
            numero="06"
            titulo="Peste Suína Africana: atenção especial"
            subtitulo="A PSA merece uma abordagem própria devido ao seu potencial de disseminação e impacto sobre a produção suinícola."
          />

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-red-200 bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-bold text-red-950">
                Porque é uma doença de grande importância?
              </h3>

              <p className="mt-5 leading-8 text-slate-700">
                A Peste Suína Africana é causada por um vírus que afeta
                suínos domésticos e selvagens. Não é uma doença de transmissão
                para seres humanos, mas pode provocar perdas muito graves na
                produção suinícola.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                A transmissão pode ocorrer através de animais infectados,
                produtos contaminados e materiais que transportam o agente,
                incluindo equipamentos, roupas, calçado e veículos.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                Por isso, a prevenção precisa envolver toda a cadeia de
                movimentação e não apenas os animais dentro da pocilga.
              </p>
            </div>

            <div className="rounded-3xl border border-red-200 bg-red-950 p-7 text-white">
              <h3 className="text-2xl font-bold">
                O que fazer perante uma suspeita?
              </h3>

              <ol className="mt-6 space-y-4">
                <li className="flex gap-4">
                  <span className="font-bold text-red-300">01</span>
                  <p>
                    Suspender movimentos desnecessários de animais, pessoas e
                    equipamentos.
                  </p>
                </li>

                <li className="flex gap-4">
                  <span className="font-bold text-red-300">02</span>
                  <p>
                    Evitar vender, transportar ou transferir animais
                    potencialmente afetados.
                  </p>
                </li>

                <li className="flex gap-4">
                  <span className="font-bold text-red-300">03</span>
                  <p>
                    Isolar a situação tanto quanto as condições da exploração
                    permitirem.
                  </p>
                </li>

                <li className="flex gap-4">
                  <span className="font-bold text-red-300">04</span>
                  <p>
                    Contactar o médico veterinário e/ou os serviços veterinários
                    competentes.
                  </p>
                </li>

                <li className="flex gap-4">
                  <span className="font-bold text-red-300">05</span>
                  <p>
                    Seguir as instruções oficiais para investigação,
                    diagnóstico, movimentação e eliminação segura de resíduos
                    ou cadáveres.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* BIOSSEGURANÇA */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <TituloSecao
          numero="07"
          titulo="Biossegurança da exploração"
          subtitulo="A biossegurança procura reduzir as oportunidades de entrada e disseminação de agentes infecciosos."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {biosseguranca.map((item, index) => (
            <article
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-sm font-bold text-green-700">
                {String(index + 1).padStart(2, "0")}
              </p>

              <p className="mt-2 leading-7 text-slate-700">{item}</p>
            </article>
          ))}
        </div>
      </section>

      {/* IMAGEM + BIOSSEGURANÇA */}
      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
          <ImagemTecnica imagem={imagens.tanzania} />

          <div className="flex flex-col justify-center">
            <TituloSecao
              numero="08"
              titulo="O ambiente também faz parte da sanidade"
              subtitulo="Instalações limpas e adequadamente organizadas facilitam a observação dos animais e reduzem oportunidades de transmissão."
            />

            <div className="space-y-4 text-slate-700">
              <p className="leading-8">
                A sanidade está diretamente relacionada com a qualidade das
                instalações. Uma pocilga húmida, com fezes acumuladas,
                ventilação insuficiente, água contaminada ou elevada densidade
                animal cria condições que podem favorecer problemas sanitários.
              </p>

              <p className="leading-8">
                A limpeza deve ser organizada por rotina e não apenas realizada
                quando aparece uma doença. Os materiais utilizados na limpeza
                também devem ser geridos para evitar transportar contaminação
                de um grupo de animais para outro.
              </p>

              <p className="leading-8">
                A gestão das instalações deve ainda considerar o destino dos
                dejetos e águas residuais, evitando a contaminação de fontes de
                água e áreas onde circulam pessoas ou animais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LIMPEZA */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <TituloSecao
          numero="09"
          titulo="Limpeza e desinfeção"
          subtitulo="Limpar e desinfetar não são exatamente a mesma operação."
        />

        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">
              Remoção da sujidade
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Primeiro devem ser removidos fezes, restos de ração, cama,
              matéria orgânica e outros resíduos. A matéria orgânica pode
              reduzir a eficácia de determinados desinfetantes.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">
              Lavagem
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Superfícies, equipamentos, comedouros e bebedouros devem ser
              higienizados de acordo com o sistema utilizado na exploração e
              com produtos apropriados.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">
              Desinfeção
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              A desinfeção deve ser realizada com produto adequado, na
              concentração e tempo de contacto recomendados pelo fabricante e
              pelo responsável técnico.
            </p>
          </article>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl">
          <ImagemTecnica imagem={imagens.babati} />
        </div>
      </section>

      {/* VACINAÇÃO */}
      <section className="bg-green-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <TituloSecao
            numero="10"
            titulo="Vacinação e prevenção imunológica"
            subtitulo="A vacinação deve fazer parte de um programa sanitário tecnicamente fundamentado."
          />

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-5 text-slate-700">
              <p className="leading-8">
                Não existe um calendário universal que possa ser aplicado
                automaticamente a todas as explorações. O programa sanitário
                deve considerar a situação epidemiológica, idade e categoria
                dos animais, doenças presentes ou de risco, produtos
                autorizados, histórico da exploração e orientação veterinária.
              </p>

              <p className="leading-8">
                A conservação das vacinas também é fundamental. Produtos
                imunológicos podem perder eficácia quando são armazenados de
                forma inadequada. Por isso, a cadeia de conservação indicada
                pelo fabricante deve ser respeitada.
              </p>

              <p className="leading-8">
                Também é importante manter registos de data, lote, validade,
                animais vacinados e produto utilizado.
              </p>
            </div>

            <div className="rounded-3xl border border-green-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Antes de utilizar uma vacina
              </h3>

              <ul className="mt-5 space-y-3 text-slate-700">
                <li>Verificar se o produto é autorizado para a finalidade.</li>
                <li>Verificar validade e integridade da embalagem.</li>
                <li>Confirmar as condições de conservação.</li>
                <li>Confirmar a espécie e categoria animal.</li>
                <li>Seguir a orientação veterinária.</li>
                <li>Registar a aplicação.</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-red-200 bg-red-50 p-6">
            <h3 className="font-bold text-red-950">
              Atenção especial à Peste Suína Africana
            </h3>

            <p className="mt-3 leading-7 text-red-900">
              Não se deve assumir que uma vacina disponível no mercado é
              automaticamente adequada para uma exploração ou país. A WOAH
              reforça que vacinas contra PSA devem cumprir requisitos de
              segurança, eficácia e avaliação regulatória, e que a vacinação
              não substitui biossegurança, vigilância e controlo de movimentos.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <TituloSecao
          numero="11"
          titulo="Sanidade por categoria animal"
          subtitulo="As prioridades sanitárias mudam conforme a idade, função produtiva e fase fisiológica."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categorias.map((categoria, index) => (
            <article
              key={categoria.titulo}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <p className="text-sm font-bold text-green-700">
                {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-900">
                {categoria.titulo}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {categoria.texto}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* USO DE MEDICAMENTOS */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <TituloSecao
            numero="12"
            titulo="Uso responsável de medicamentos"
            subtitulo="O tratamento deve ser consequência de uma avaliação sanitária, não uma substituição da prevenção."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <h3 className="text-xl font-bold">Diagnóstico</h3>

              <p className="mt-4 leading-7 text-slate-300">
                Sempre que possível, a causa do problema deve ser investigada
                antes de escolher o tratamento.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <h3 className="text-xl font-bold">Orientação profissional</h3>

              <p className="mt-4 leading-7 text-slate-300">
                Medicamentos veterinários devem ser utilizados de acordo com
                indicação profissional e instruções do produto.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <h3 className="text-xl font-bold">Registo</h3>

              <p className="mt-4 leading-7 text-slate-300">
                Tratamentos devem ser registados para permitir acompanhamento,
                avaliação de resultados e rastreabilidade.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ERROS */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <TituloSecao
          numero="13"
          titulo="Erros sanitários frequentes"
          subtitulo="Muitos problemas sanitários resultam da combinação de pequenas falhas de manejo."
        />

        <div className="grid gap-3 md:grid-cols-2">
          {erros.map((erro, index) => (
            <div
              key={erro}
              className="flex gap-4 rounded-2xl border border-red-100 bg-red-50 p-5"
            >
              <span className="shrink-0 font-bold text-red-700">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="leading-7 text-red-950">{erro}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REGISTOS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <TituloSecao
            numero="14"
            titulo="Registo sanitário da exploração"
            subtitulo="Uma exploração organizada precisa de memória sanitária."
          />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {registos.map((registo, index) => (
              <div
                key={registo}
                className="rounded-2xl border border-slate-200 bg-white p-4"
              >
                <p className="text-xs font-bold text-green-700">
                  REGISTO {String(index + 1).padStart(2, "0")}
                </p>

                <p className="mt-1 text-sm font-medium text-slate-700">
                  {registo}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <TituloSecao
          numero="15"
          titulo="Checklist sanitário"
          subtitulo="Lista rápida para utilização durante a visita à exploração."
        />

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          {[
            "Água limpa e disponível.",
            "Bebedouros funcionais.",
            "Comedouros limpos.",
            "Instalações sem acumulação excessiva de fezes.",
            "Boa ventilação.",
            "Sem excesso de humidade.",
            "Sem sinais evidentes de animais doentes.",
            "Animais novos devidamente controlados.",
            "Sem circulação desnecessária de visitantes.",
            "Equipamentos limpos.",
            "Cadáveres tratados de acordo com orientação sanitária.",
            "Registos sanitários atualizados.",
            "Medicamentos armazenados corretamente.",
            "Vacinas armazenadas de acordo com as instruções.",
            "Suspeitas sanitárias comunicadas rapidamente.",
          ].map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-4 border-b border-slate-100 p-5 last:border-b-0"
            >
              <div className="h-5 w-5 shrink-0 rounded border-2 border-green-700" />

              <span className="text-sm font-medium text-slate-700">
                {String(index + 1).padStart(2, "0")}. {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* PRINCÍPIO */}
      <section className="bg-green-800 text-white">
        <div className="mx-auto max-w-5xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-200">
            Princípio fundamental
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Uma boa exploração sanitária procura evitar a doença antes de
            precisar tratá-la.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-green-50">
            Instalações adequadas, água segura, alimentação correta, higiene,
            biossegurança, observação diária, vacinação quando indicada,
            diagnóstico e acompanhamento veterinário formam um sistema
            integrado de proteção do efetivo.
          </p>
        </div>
      </section>

      {/* FONTES */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <TituloSecao
          numero="16"
          titulo="Fontes técnicas e bibliográficas"
          subtitulo="Referências utilizadas para orientar o conteúdo desta página."
        />

        <div className="space-y-4">
          <a
            href="https://www.woah.org/en/disease/african-swine-fever/"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-green-300 hover:shadow-md"
          >
            <p className="font-bold text-slate-900">
              World Organisation for Animal Health — African swine fever
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Informação técnica sobre Peste Suína Africana, prevenção,
              biossegurança, vigilância e medidas de controlo.
            </p>

            <span className="mt-3 inline-block text-sm font-semibold text-green-700">
              Consultar fonte oficial
            </span>
          </a>

          <a
            href="https://www.fao.org/animal-health/animal-diseases/african-swine-fever/en"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-green-300 hover:shadow-md"
          >
            <p className="font-bold text-slate-900">
              FAO — African Swine Fever
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Recursos técnicos da Organização das Nações Unidas para a
              Alimentação e Agricultura sobre prevenção, deteção e controlo da
              PSA.
            </p>

            <span className="mt-3 inline-block text-sm font-semibold text-green-700">
              Consultar fonte oficial
            </span>
          </a>

          <a
            href="https://www.woah.org/en/disease/classical-swine-fever/"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-green-300 hover:shadow-md"
          >
            <p className="font-bold text-slate-900">
              World Organisation for Animal Health — Classical swine fever
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Informação sobre Peste Suína Clássica, prevenção, vigilância,
              vacinação e controlo sanitário.
            </p>

            <span className="mt-3 inline-block text-sm font-semibold text-green-700">
              Consultar fonte oficial
            </span>
          </a>

          <a
            href="https://www.woah.org/en/document/guidelines-for-african-swine-fever-vaccines-2026/"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-green-300 hover:shadow-md"
          >
            <p className="font-bold text-slate-900">
              WOAH — Guidelines for African swine fever vaccines: field
              evaluation and post-vaccination monitoring
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Diretrizes de 2026 sobre avaliação de vacinas contra PSA e
              monitorização pós-vacinação.
            </p>

            <span className="mt-3 inline-block text-sm font-semibold text-green-700">
              Consultar fonte oficial
            </span>
          </a>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <Link
            href="/pecuaria/suinos/orientacoes/instalacoes"
            className="rounded-2xl border border-slate-200 bg-white px-6 py-4 text-center font-semibold text-slate-700 transition hover:border-green-300 hover:text-green-700"
          >
            ← Instalações
          </Link>

          <Link
            href="/pecuaria/suinos/orientacoes"
            className="rounded-2xl bg-green-700 px-6 py-4 text-center font-semibold text-white transition hover:bg-green-800"
          >
            Voltar às orientações de suínos
          </Link>

          <Link
            href="/pecuaria/suinos/orientacoes/reproducao"
            className="rounded-2xl border border-slate-200 bg-white px-6 py-4 text-center font-semibold text-slate-700 transition hover:border-green-300 hover:text-green-700"
          >
            Reprodução →
          </Link>
        </div>
      </section>
    </main>
  );
}