import Link from "next/link";

interface SanidadePageProps {
  searchParams: Promise<{
    provincia?: string;
    finalidade?: string;
  }>;
}

const provincias = [
  "Bengo",
  "Benguela",
  "Bié",
  "Cabinda",
  "Cuando",
  "Cubango",
  "Cuanza Norte",
  "Cuanza Sul",
  "Cunene",
  "Huambo",
  "Huíla",
  "Icolo e Bengo",
  "Luanda",
  "Lunda Norte",
  "Lunda Sul",
  "Malanje",
  "Moxico",
  "Moxico Leste",
  "Namibe",
  "Uíge",
  "Zaire",
];

const finalidades = [
  "Produção de carne",
  "Produção de leite",
  "Produção mista",
  "Reprodução",
];

const pilares = [
  {
    titulo: "Observação diária",
    descricao:
      "Observar regularmente o comportamento, o apetite, a locomoção, a condição corporal, a respiração e outras alterações ajuda a identificar problemas antes que se agravem.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cattle_in_pasture.jpg?width=1200",
  },
  {
    titulo: "Biossegurança",
    descricao:
      "Medidas simples para reduzir a entrada e a disseminação de agentes infecciosos dentro da exploração são uma parte fundamental da prevenção sanitária.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cattle_farm.jpg?width=1200",
  },
  {
    titulo: "Vacinação",
    descricao:
      "A vacinação pode fazer parte de programas de prevenção, mas o calendário, os produtos, a idade dos animais e as condições de aplicação devem seguir o programa sanitário aplicável e orientação veterinária.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cattle_vaccination.jpg?width=1200",
  },
  {
    titulo: "Diagnóstico",
    descricao:
      "Quando existe suspeita de doença, o objetivo não deve ser apenas tratar sintomas. A avaliação profissional e, quando indicada, a confirmação diagnóstica ajudam a orientar medidas adequadas.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Veterinarian_examining_cow.jpg?width=1200",
  },
];

const observacao = [
  {
    titulo: "Comportamento",
    texto:
      "Um animal que normalmente acompanha o grupo e passa a permanecer isolado pode estar com algum problema. Mudanças persistentes no comportamento devem ser observadas.",
  },
  {
    titulo: "Apetite",
    texto:
      "Redução do consumo de pastagem, forragem ou ração pode ser um dos primeiros sinais de alteração do estado de saúde.",
  },
  {
    titulo: "Locomoção",
    texto:
      "Claudicação, dificuldade para levantar ou andar, apoio anormal dos membros e resistência ao movimento exigem atenção.",
  },
  {
    titulo: "Respiração",
    texto:
      "Respiração anormal, tosse, corrimento nasal ou esforço respiratório devem ser avaliados, principalmente quando aparecem em vários animais.",
  },
  {
    titulo: "Fezes",
    texto:
      "Alterações importantes na consistência, frequência ou aparência das fezes podem indicar problemas digestivos ou outras alterações que necessitam de avaliação.",
  },
  {
    titulo: "Condição corporal",
    texto:
      "Perda de peso ou deterioração progressiva da condição corporal pode estar relacionada com alimentação inadequada, parasitas, doença ou outros fatores.",
  },
];

const biosseguranca = [
  "Controlar a entrada de novos animais na exploração.",
  "Observar e avaliar animais recém-chegados antes de os misturar ao rebanho.",
  "Evitar o contacto desnecessário com animais de origem desconhecida.",
  "Manter instalações, equipamentos e áreas de manejo limpos.",
  "Limitar a entrada desnecessária de pessoas nas áreas dos animais.",
  "Controlar veículos e equipamentos que circulam entre explorações.",
  "Não partilhar equipamentos sem considerar os riscos sanitários.",
  "Separar animais doentes ou suspeitos.",
  "Manter registos dos movimentos dos animais.",
  "Procurar orientação veterinária quando houver suspeita de doença.",
];

const sinaisAlerta = [
  "Morte súbita de um ou mais animais.",
  "Vários animais doentes ao mesmo tempo.",
  "Febre ou alteração importante do estado geral.",
  "Dificuldade respiratória.",
  "Diarreia intensa ou persistente.",
  "Aborto ou aumento inesperado de problemas reprodutivos.",
  "Perda rápida de peso.",
  "Dificuldade grave para andar ou levantar.",
  "Sinais neurológicos ou comportamento anormal.",
  "Sangramentos ou outros sinais incomuns.",
];

const gruposRisco = [
  {
    titulo: "Bezerros",
    texto:
      "Animais jovens necessitam de atenção especial à higiene, alimentação, água, condições de alojamento e observação do estado geral. Alterações de comportamento ou consumo devem ser comunicadas rapidamente ao responsável pelo manejo.",
  },
  {
    titulo: "Vacas gestantes",
    texto:
      "O acompanhamento durante a gestação deve considerar alimentação, condição corporal, higiene, conforto e histórico reprodutivo. Alterações ou sinais relacionados com aborto ou parto anormal exigem avaliação profissional.",
  },
  {
    titulo: "Vacas em lactação",
    texto:
      "A produção de leite exige atenção à alimentação, água, higiene e saúde do úbere. Alterações no leite ou no úbere devem ser investigadas.",
  },
  {
    titulo: "Touros",
    texto:
      "Além do estado geral, devem ser observadas a locomoção, condição corporal e capacidade reprodutiva. Problemas nos membros podem comprometer a utilização do reprodutor.",
  },
];

const erros = [
  "Esperar que o animal fique gravemente doente para procurar assistência.",
  "Comprar animais sem avaliar a origem e o estado sanitário.",
  "Misturar imediatamente animais recém-chegados ao rebanho.",
  "Não manter registos sanitários.",
  "Usar medicamentos sem orientação profissional.",
  "Interromper tratamentos antes do período recomendado.",
  "Não respeitar períodos de carência de medicamentos veterinários.",
  "Manter animais doentes junto de animais aparentemente saudáveis.",
  "Desvalorizar mortes, abortos ou doenças repetidas.",
  "Utilizar o mesmo equipamento entre animais doentes e saudáveis sem higienização adequada.",
  "Não comunicar suspeitas de doenças de importância sanitária.",
  "Assumir que qualquer sintoma tem uma única causa.",
];

const checklist = [
  "O rebanho é observado diariamente?",
  "Existem registos individuais ou do lote?",
  "Os animais recém-chegados são avaliados?",
  "Existe uma área para isolamento?",
  "Os bebedouros permanecem limpos?",
  "As instalações são mantidas em condições higiénicas?",
  "Os equipamentos de manejo são limpos?",
  "As mortes são registadas e investigadas?",
  "Abortos e problemas reprodutivos são registados?",
  "Existe acompanhamento veterinário?",
  "O produtor conhece o programa sanitário aplicável à sua região?",
  "Os medicamentos são utilizados segundo orientação profissional?",
];

const fontes = [
  {
    titulo: "FAO — Biosecurity in terrestrial animal value chains",
    descricao:
      "Referência sobre biossegurança e gestão dos riscos biológicos nas cadeias pecuárias.",
    url: "https://www.fao.org/animal-health/areas-of-work/biosecurity/en",
  },
  {
    titulo: "WOAH — Bovine",
    descricao:
      "Informação sobre saúde bovina, prevenção, vigilância, biossegurança e controlo de doenças.",
    url: "https://www.woah.org/en/animal/bovine/",
  },
  {
    titulo: "WOAH — WAHIS",
    descricao:
      "Sistema mundial de informação sobre saúde animal e doenças reportadas oficialmente.",
    url: "https://wahis.woah.org/",
  },
];

export default async function SanidadePage({
  searchParams,
}: SanidadePageProps) {
  const params = await searchParams;

  const provincia = params.provincia || "";
  const finalidade = params.finalidade || "";

  const query = new URLSearchParams();

  if (provincia) {
    query.set("provincia", provincia);
  }

  if (finalidade) {
    query.set("finalidade", finalidade);
  }

  const queryString = query.toString();

  const linkTema = (tema: string) =>
    `/pecuaria/bovinos/orientacoes/${tema}${
      queryString ? `?${queryString}` : ""
    }`;

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO */}
      <section className="border-b bg-gradient-to-br from-green-950 via-green-900 to-green-800 text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="mb-6 text-sm text-green-100">
            <Link href="/" className="hover:text-white">
              Início
            </Link>{" "}
            /{" "}
            <Link href="/pecuaria" className="hover:text-white">
              Pecuária
            </Link>{" "}
            /{" "}
            <Link
              href={linkTema("")}
              className="hover:text-white"
            >
              Bovinos
            </Link>{" "}
            / Sanidade
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
                AGROINOVA ANGOLA · BOVINOS
              </span>

              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                Sanidade
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-green-50">
                Orientações para prevenção, observação, biossegurança,
                acompanhamento e resposta a problemas de saúde em bovinos.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                  Prevenção
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                  Biossegurança
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                  Vigilância
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                  Assistência veterinária
                </span>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl">
              <img
                src="https://commons.wikimedia.org/wiki/Special:FilePath/Veterinarian_examining_cow.jpg?width=1400"
                alt="Profissional de saúde animal examinando um bovino"
                className="h-[330px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FILTROS */}
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-6 md:px-8">
          <form method="GET" className="grid gap-4 md:grid-cols-[1fr_1fr_auto]">
            <div>
              <label
                htmlFor="provincia"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Província
              </label>

              <select
                id="provincia"
                name="provincia"
                defaultValue={provincia}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-green-700"
              >
                <option value="">Todas as províncias</option>

                {provincias.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="finalidade"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Finalidade da exploração
              </label>

              <select
                id="finalidade"
                name="finalidade"
                defaultValue={finalidade}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-green-700"
              >
                <option value="">Todas as finalidades</option>

                {finalidades.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full rounded-xl bg-green-800 px-6 py-3 font-semibold text-white transition hover:bg-green-900 md:w-auto"
              >
                Aplicar
              </button>
            </div>
          </form>

          {(provincia || finalidade) && (
            <div className="mt-4 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-900">
              <strong>Contexto selecionado:</strong>{" "}
              {provincia || "Todas as províncias"} ·{" "}
              {finalidade || "Todas as finalidades"}
            </div>
          )}
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-5 py-6 md:px-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href={linkTema("racas")}
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium hover:border-green-600 hover:text-green-800"
            >
              Raças
            </Link>

            <Link
              href={linkTema("alimentacao")}
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium hover:border-green-600 hover:text-green-800"
            >
              Alimentação
            </Link>

            <Link
              href={linkTema("instalacoes")}
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium hover:border-green-600 hover:text-green-800"
            >
              Instalações
            </Link>

            <Link
              href={linkTema("sanidade")}
              className="rounded-full border border-green-700 bg-green-50 px-4 py-2 text-sm font-semibold text-green-800"
            >
              Sanidade
            </Link>

            <Link
              href={linkTema("reproducao")}
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium hover:border-green-600 hover:text-green-800"
            >
              Reprodução
            </Link>

            <Link
              href={linkTema("agua")}
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium hover:border-green-600 hover:text-green-800"
            >
              Água
            </Link>
          </div>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-wider text-green-700">
            01 · Fundamentos
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Sanidade começa antes da doença aparecer
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            A gestão sanitária de uma exploração bovina não deve começar
            apenas quando aparece um animal doente. A prevenção envolve
            alimentação adequada, água segura, instalações apropriadas,
            higiene, observação diária, controlo de entradas e movimentos,
            vacinação quando indicada e acompanhamento por profissionais de
            saúde animal.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            A biossegurança é uma abordagem integrada para reduzir riscos
            biológicos e proteger a saúde dos animais, das pessoas e do
            ambiente. A FAO considera a biossegurança uma componente
            fundamental dos sistemas de produção animal.
          </p>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-900">
            <strong>Importante:</strong> esta página é uma ferramenta de
            informação e orientação. Não substitui diagnóstico veterinário,
            exames laboratoriais, prescrição ou um programa sanitário oficial.
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              02 · Prevenção
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Quatro pilares de uma boa gestão sanitária
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {pilares.map((item, index) => (
              <article
                key={item.titulo}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="grid md:grid-cols-[220px_1fr]">
                  <img
                    src={item.imagem}
                    alt={item.titulo}
                    className="h-56 w-full object-cover md:h-full"
                  />

                  <div className="p-6">
                    <div className="mb-3 text-sm font-bold text-green-700">
                      0{index + 1}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900">
                      {item.titulo}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {item.descricao}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OBSERVAÇÃO DIÁRIA */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wider text-green-700">
            03 · Observação diária
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Conhecer o comportamento normal do rebanho
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            O produtor ou tratador que acompanha os animais diariamente está
            numa posição privilegiada para perceber alterações. O objetivo não
            é fazer um diagnóstico sozinho, mas reconhecer sinais que merecem
            atenção.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {observacao.map((item, index) => (
            <article
              key={item.titulo}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 font-bold text-green-800">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                {item.titulo}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">{item.texto}</p>
            </article>
          ))}
        </div>
      </section>

      {/* BIOSSEGURANÇA */}
      <section className="bg-green-50 py-14">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-green-700">
                04 · Biossegurança
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Reduzir o risco de entrada e disseminação de doenças
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Uma exploração não deve ser considerada isoladamente. Animais,
                pessoas, veículos, equipamentos, alimentos e outros materiais
                podem participar da circulação de agentes infecciosos.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                Por isso, controlar entradas, separar animais suspeitos,
                manter higiene e registar movimentos são medidas importantes
                para reduzir riscos.
              </p>

              <p className="mt-4 text-sm leading-7 text-green-900">
                A FAO descreve a biossegurança como uma abordagem para analisar
                e gerir riscos à saúde e reduzir a propagação de ameaças
                sanitárias.
              </p>
            </div>

            <div className="rounded-3xl border border-green-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Medidas práticas
              </h3>

              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {biosseguranca.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-200 p-4"
                  >
                    <span className="mr-2 font-bold text-green-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm leading-6 text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOVOS ANIMAIS */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-wider text-green-700">
            05 · Entrada de animais
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Antes de introduzir um novo bovino no rebanho
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            A introdução de animais provenientes de outra exploração pode
            representar um risco sanitário. A origem, o histórico sanitário e
            as condições do animal devem ser considerados antes da mistura com
            o restante efetivo.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Identificar a origem.",
              "Conhecer o histórico disponível.",
              "Observar o estado geral.",
              "Avaliar com profissional quando necessário.",
              "Manter separado inicialmente quando indicado.",
              "Monitorizar sinais de doença.",
              "Registar a entrada.",
              "Só integrar ao rebanho quando for considerado seguro.",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="text-sm font-bold text-green-700">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5 text-sm leading-7 text-blue-900">
            A WOAH destaca o controlo da introdução de novos animais,
            isolamento, vigilância, identificação e controlo de movimentos como
            elementos importantes na prevenção e controlo de determinadas
            doenças bovinas.
          </div>
        </div>
      </section>

      {/* VACINAÇÃO */}
      <section className="bg-slate-950 py-14 text-white">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-green-300">
            06 · Vacinação
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Vacinação deve fazer parte de um programa sanitário
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
            As vacinas podem ser uma ferramenta importante de prevenção e
            controlo de doenças, mas não substituem biossegurança, vigilância,
            controlo de movimentos ou outras medidas sanitárias. A escolha das
            vacinas e do calendário deve considerar a situação epidemiológica e
            o programa sanitário aplicável.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-bold">Programa</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Seguir o programa sanitário definido pelas autoridades
                competentes e pelo profissional responsável.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-bold">Registo</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Registar animais vacinados, data, produto utilizado e outras
                informações relevantes.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-bold">Conservação</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                As vacinas devem ser armazenadas e utilizadas de acordo com as
                instruções do fabricante e as orientações dos serviços
                veterinários.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-amber-300/30 bg-amber-300/10 p-5 text-sm leading-7 text-amber-100">
            <strong>AGROINOVA ANGOLA:</strong> esta plataforma não deve
            apresentar um calendário nacional de vacinação como se fosse
            oficial sem uma fonte institucional que o confirme. O conteúdo
            deve ser atualizado quando houver orientação oficial aplicável.
          </div>
        </div>
      </section>

      {/* GRUPOS */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wider text-green-700">
            07 · Grupos do rebanho
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Nem todos os animais apresentam os mesmos riscos
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {gruposRisco.map((grupo) => (
            <article
              key={grupo.titulo}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {grupo.titulo}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {grupo.texto}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* SINAIS DE ALERTA */}
      <section className="bg-red-50 py-14">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-wider text-red-700">
              08 · Sinais de alerta
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Quando a situação exige atenção imediata?
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              Alguns acontecimentos podem indicar um problema individual ou
              coletivo. O produtor não deve tentar determinar sozinho a causa
              de situações graves; deve procurar assistência profissional e,
              quando aplicável, comunicar às autoridades veterinárias.
            </p>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {sinaisAlerta.map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-red-200 bg-white p-4"
              >
                <span className="mr-3 font-bold text-red-700">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-red-300 bg-red-100 p-5 text-sm leading-7 text-red-900">
            <strong>Não ignore mortalidade anormal ou doença em vários
            animais.</strong>{" "}
            Situações com potencial de disseminação devem ser avaliadas
            rapidamente por profissionais dos serviços veterinários. Sistemas
            oficiais como o WAHIS existem para acompanhar doenças de
            importância epidemiológica.
          </div>
        </div>
      </section>

      {/* MEDICAMENTOS */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              09 · Medicamentos
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Medicamentos veterinários exigem responsabilidade
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              O tratamento de um animal não deve ser baseado apenas na
              experiência ou na recomendação informal de outra pessoa. A causa
              do problema pode ser diferente e o medicamento adequado, a dose,
              a via de administração e a duração do tratamento dependem da
              situação.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              O uso inadequado de medicamentos também pode gerar riscos para os
              próprios animais, para os consumidores de produtos de origem
              animal e para a saúde pública.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
            <h3 className="text-xl font-bold text-slate-900">
              O produtor deve evitar
            </h3>

            <div className="mt-5 space-y-3">
              {[
                "Usar medicamentos sem orientação adequada.",
                "Alterar doses por conta própria.",
                "Misturar medicamentos sem indicação profissional.",
                "Utilizar produtos fora das condições recomendadas.",
                "Ignorar o período de carência.",
                "Usar sobras de tratamentos antigos sem avaliação.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ERROS */}
      <section className="bg-slate-950 py-14 text-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-green-300">
            10 · Erros frequentes
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Falhas que podem aumentar o risco sanitário
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {erros.map((erro, index) => (
              <div
                key={erro}
                className="rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <span className="mr-3 font-bold text-green-300">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-sm text-slate-200">{erro}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              11 · Checklist
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Avaliação sanitária básica da exploração
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Esta lista serve como ferramenta de observação e organização. Não
              substitui uma avaliação clínica ou um programa sanitário.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {checklist.map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <span className="mr-3 font-bold text-green-700">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTOS */}
      <section className="bg-green-50 py-14">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              12 · Registos sanitários
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              O que não é registado torna-se difícil de acompanhar
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Registos simples podem ajudar o produtor e o técnico a perceber
              padrões no rebanho. O sistema pode começar num caderno e,
              posteriormente, ser integrado numa ferramenta digital.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Identificação do animal",
              "Data de entrada",
              "Vacinações",
              "Tratamentos",
              "Doenças observadas",
              "Abortos e partos",
              "Mortes",
              "Movimentações",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-green-200 bg-white p-5 text-sm font-semibold text-green-900"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ASSISTÊNCIA */}
      <section className="bg-green-900 py-14 text-white">
        <div className="mx-auto max-w-5xl px-5 text-center md:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-green-200">
            13 · Assistência veterinária
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            A prevenção depende de acompanhamento profissional
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-green-50">
            O médico veterinário e os serviços de saúde animal têm papel
            fundamental na avaliação clínica, diagnóstico, prevenção,
            vacinação, tratamento, vigilância e orientação sanitária. O
            produtor deve procurar assistência sempre que observar sinais
            anormais, mortalidade, doença em vários animais ou situações que
            possam representar risco para o restante do rebanho.
          </p>
        </div>
      </section>

      {/* FONTES */}
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Fontes técnicas de referência
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {fontes.map((fonte) => (
            <a
              key={fonte.titulo}
              href={fonte.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-green-500 hover:shadow-md"
            >
              <h3 className="font-bold text-slate-900">{fonte.titulo}</h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {fonte.descricao}
              </p>

              <span className="mt-4 inline-block text-sm font-semibold text-green-700">
                Consultar fonte →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="border-t bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <Link
            href={linkTema("instalacoes")}
            className="font-semibold text-green-800 hover:text-green-950"
          >
            ← Voltar para Instalações
          </Link>

          <Link
            href={linkTema("reproducao")}
            className="rounded-xl bg-green-800 px-5 py-3 text-center font-semibold text-white hover:bg-green-900"
          >
            Próximo: Reprodução →
          </Link>
        </div>
      </section>
    </main>
  );
}