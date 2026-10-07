import Link from "next/link";

interface ReproducaoPageProps {
  searchParams: Promise<{ provincia?: string; finalidade?: string }>;
}

const provincias = [
  'Bengo',
  'Benguela',
  'Bié',
  'Cabinda',
  'Cuando',
  'Cubango',
  'Cuanza Norte',
  'Cuanza Sul',
  'Cunene',
  'Huambo',
  'Huíla',
  'Icolo e Bengo',
  'Luanda',
  'Lunda Norte',
  'Lunda Sul',
  'Malanje',
  'Moxico',
  'Moxico Leste',
  'Namibe',
  'Uíge',
  'Zaire'
];

const finalidades = [
  "Produção de carne",
  "Produção de leite",
  "Produção mista",
  "Reprodução",
];

const etapas = [
  {
    titulo: "Planeamento reprodutivo",
    imagem: "https://commons.wikimedia.org/wiki/Special:FilePath/Cattle_in_pasture.jpg?width=1200",
    texto:
      "A reprodução deve ser tratada como parte do planeamento da exploração. Antes da época de cobertura ou de inseminação, o produtor deve conhecer as fêmeas disponíveis, os reprodutores, a condição corporal, o histórico de partos e os problemas sanitários observados.",
    pontos: [
      "Definir o objetivo do rebanho: carne, leite, produção mista ou reposição.",
      "Identificar fêmeas aptas e separar animais com problemas reprodutivos.",
      "Avaliar os reprodutores antes da época de monta.",
      "Manter registos de cobrição, parto, aborto e nascimento.",
    ],
  },
  {
    titulo: "Deteção do cio",
    imagem: "https://commons.wikimedia.org/wiki/Special:FilePath/Cow_grazing.jpg?width=1200",
    texto:
      "A identificação correta do cio permite melhorar o momento da monta ou da inseminação. O comportamento deve ser observado regularmente, sobretudo em sistemas onde a reprodução depende da monta natural ou de inseminação artificial.",
    pontos: [
      "Observar comportamento de monta e aceitação da monta.",
      "Registar a data em que os sinais de cio foram observados.",
      "Evitar depender de uma única observação ocasional.",
      "Procurar assistência técnica quando houver repetição de cios sem gestação.",
    ],
  },
  {
    titulo: "Monta natural",
    imagem: "https://commons.wikimedia.org/wiki/Special:FilePath/Cattle_breeding.jpg?width=1200",
    texto:
      "Na monta natural, a qualidade do touro e a organização do lote influenciam diretamente o resultado. O reprodutor deve apresentar boa condição corporal, integridade dos órgãos reprodutivos, capacidade de monta e histórico favorável.",
    pontos: [
      "Evitar utilizar touros debilitados ou com lesões locomotoras.",
      "Controlar a origem e identificação dos reprodutores.",
      "Evitar consanguinidade através de registos de parentesco.",
      "Separar ou substituir reprodutores com baixo desempenho reprodutivo.",
    ],
  },
  {
    titulo: "Inseminação artificial",
    imagem: "https://commons.wikimedia.org/wiki/Special:FilePath/Artificial_insemination_in_cattle.jpg?width=1200",
    texto:
      "A inseminação artificial pode contribuir para o melhoramento genético e para o controlo reprodutivo, mas exige pessoal capacitado, conservação adequada do material reprodutivo, identificação das fêmeas e acompanhamento do momento adequado.",
    pontos: [
      "Utilizar serviço realizado por profissional capacitado.",
      "Registar a identificação da fêmea e do material utilizado.",
      "Respeitar as condições de conservação recomendadas.",
      "Confirmar posteriormente o resultado da inseminação.",
    ],
  },
];

const fatores = [
  {
    titulo: "Nutrição",
    texto:
      "A disponibilidade de energia, proteína, minerais e água influencia a condição corporal e o desempenho reprodutivo. Fêmeas demasiado magras ou submetidas a défices alimentares podem apresentar menor desempenho reprodutivo.",
  },
  {
    titulo: "Condição corporal",
    texto:
      "A avaliação da condição corporal ajuda a identificar animais que necessitam de melhoria nutricional ou acompanhamento antes da reprodução. A avaliação deve considerar o sistema de produção e orientação técnica.",
  },
  {
    titulo: "Sanidade",
    texto:
      "Doenças, parasitoses, problemas uterinos, abortos e outras alterações podem reduzir a eficiência reprodutiva. A prevenção sanitária e o diagnóstico veterinário são essenciais.",
  },
  {
    titulo: "Ambiente e clima",
    texto:
      "Calor, seca, disponibilidade de pastagem, água e qualidade do abrigo podem alterar o comportamento, a alimentação e a reprodução. O maneio deve ser adaptado às condições locais.",
  },
  {
    titulo: "Genética",
    texto:
      "A escolha de animais geneticamente adequados ao ambiente e ao objetivo da exploração é importante. A seleção deve considerar adaptação, fertilidade, produtividade e características desejadas.",
  },
];

const sinais = [
  "Ausência prolongada de cio em fêmeas adultas.",
  "Repetição de cios sem confirmação de gestação.",
  "Abortos repetidos no rebanho.",
  "Partos difíceis ou frequentes problemas no parto.",
  "Retenção de placenta ou sinais de doença após o parto.",
  "Bezerros fracos ou mortes neonatais recorrentes.",
  "Touros com dificuldade de locomoção ou de monta.",
  "Redução súbita da taxa de prenhez.",
  "Perda acentuada de condição corporal.",
  "Problemas reprodutivos que atingem vários animais do mesmo lote.",
];

const checklist = [
  "As fêmeas estão identificadas individualmente?",
  "Existe registo de nascimento, cobertura, parto e aborto?",
  "Os reprodutores são avaliados antes da época de monta?",
  "A alimentação atende às necessidades do sistema?",
  "Existe disponibilidade permanente de água adequada?",
  "As fêmeas com problemas reprodutivos são separadas e avaliadas?",
  "Existe controlo de doenças e parasitas?",
  "Há acompanhamento dos partos?",
  "Os bezerros recém-nascidos recebem cuidados adequados?",
  "A exploração evita cruzamentos entre animais aparentados?",
  "As intervenções reprodutivas são registadas?",
  "Existe contacto com técnico ou médico veterinário quando necessário?",
];

const fontes = [
  {
    nome: "FAO — Breeding",
    url: "https://www.fao.org/dairy-production-products/production/breeding/",
  },
  {
    nome: "FAO AGRIS — Reproduction and breeding management",
    url: "https://agris.fao.org/search/en/providers/123818/records/672370e4b605bda15e0b1f4f",
  },
];

export default async function ReproducaoPage({
  searchParams,
}: ReproducaoPageProps) {
  const params = await searchParams;
  const provincia = params.provincia || "";
  const finalidade = params.finalidade || "";

  const query = new URLSearchParams();
  if (provincia) query.set("provincia", provincia);
  if (finalidade) query.set("finalidade", finalidade);
  const qs = query.toString();

  const linkTema = (tema: string) =>
    `/pecuaria/bovinos/orientacoes/${tema}${qs ? `?${qs}` : ""}`;

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <section className="border-b bg-gradient-to-br from-green-50 via-white to-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
          <div className="mb-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-green-700">Início</Link>
            <span className="mx-2">›</span>
            <Link href="/pecuaria" className="hover:text-green-700">Pecuária</Link>
            <span className="mx-2">›</span>
            <Link href="/pecuaria/bovinos/orientacoes" className="hover:text-green-700">Bovinos</Link>
            <span className="mx-2">›</span>
            <strong className="text-slate-700">Reprodução</strong>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-green-700">
                AGROINOVA ANGOLA · BOVINOS
              </p>
              <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
                Reprodução
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Orientações para organizar a reprodução bovina, acompanhar as fêmeas,
                avaliar reprodutores, melhorar a deteção do cio e reduzir perdas
                reprodutivas de acordo com o sistema de produção e as condições locais.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-green-100 bg-white shadow-sm">
              <img
                src="https://commons.wikimedia.org/wiki/Special:FilePath/Cattle_in_pasture.jpg?width=1200"
                alt="Bovinos em pastagem"
                className="h-80 w-full object-cover"
              />
              <div className="border-t bg-white px-5 py-3">
                <p className="text-xs text-slate-500">
                  Imagem: bovinos em pastagem · Wikimedia Commons
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8">
        <form className="grid gap-4 rounded-3xl border bg-slate-50 p-5 md:grid-cols-3">
          <div>
            <label className="mb-2 block text-sm font-bold text-slate-700">Província</label>
            <select name="provincia" defaultValue={provincia} className="w-full rounded-xl border bg-white px-4 py-3">
              <option value="">Todas as províncias</option>
              {provincias.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold text-slate-700">Finalidade</label>
            <select name="finalidade" defaultValue={finalidade} className="w-full rounded-xl border bg-white px-4 py-3">
              <option value="">Todas as finalidades</option>
              {finalidades.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full rounded-xl bg-green-700 px-5 py-3 font-bold text-white hover:bg-green-800">
              Aplicar contexto
            </button>
          </div>
        </form>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            ["racas", "Raças"], ["alimentacao", "Alimentação"], ["instalacoes", "Instalações"],
            ["sanidade", "Sanidade"], ["reproducao", "Reprodução"], ["agua", "Água"]
          ].map(([id, label]) => (
            <Link key={id} href={linkTema(id)} className={`rounded-full border px-4 py-2 text-sm font-bold ${id === "reproducao" ? "border-green-700 bg-green-700 text-white" : "bg-white text-slate-700 hover:border-green-600 hover:text-green-700"}`}>
              {label}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-10 md:px-8">
        <div className="rounded-3xl border bg-white p-7 shadow-sm">
          <p className="text-lg leading-8 text-slate-700">
            A eficiência reprodutiva resulta da interação entre genética, nutrição,
            sanidade, ambiente e maneio. A FAO destaca que o desempenho reprodutivo
            depende do ambiente de produção, alimentação, adaptação genética e práticas
            de maneio adequadas.
          </p>
          {provincia && (
            <div className="mt-5 rounded-2xl bg-green-50 p-5">
              <p className="font-bold text-green-900">Contexto selecionado</p>
              <p className="mt-1 text-sm text-green-800">
                Província: <strong>{provincia}</strong>
                {finalidade ? <> · Finalidade: <strong>{finalidade}</strong></> : null}
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <h2 className="text-3xl font-black text-slate-900">Etapas fundamentais</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          A reprodução deve ser acompanhada como um processo contínuo, desde a preparação
          dos animais até ao parto e aos cuidados posteriores.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {etapas.map((item) => (
            <article key={item.titulo} className="overflow-hidden rounded-3xl border bg-white shadow-sm">
              <img src={item.imagem} alt={item.titulo} className="h-64 w-full object-cover" loading="lazy" />
              <div className="p-6">
                <h3 className="text-2xl font-black text-slate-900">{item.titulo}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.texto}</p>
                <ul className="mt-5 space-y-2">
                  {item.pontos.map((ponto) => (
                    <li key={ponto} className="border-l-2 border-green-600 pl-4 text-sm leading-6 text-slate-700">
                      {ponto}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black text-slate-900">Fatores que condicionam a reprodução</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {fatores.map((item) => (
              <article key={item.titulo} className="rounded-2xl border bg-white p-6">
                <h3 className="text-xl font-black text-green-800">{item.titulo}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900">Realidade angolana</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Em Angola, a estratégia reprodutiva precisa considerar diferenças entre
              sistemas familiares, extensivos, semi-intensivos e mais tecnificados.
              Nas zonas sujeitas a períodos de seca, a disponibilidade de pastagem e água
              pode alterar a condição corporal e o desempenho reprodutivo.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Por isso, não existe uma única recomendação válida para todas as explorações.
              O produtor deve relacionar época de reprodução, alimentação, disponibilidade
              de água, sanidade e objetivo produtivo.
            </p>
          </div>

          <div className="rounded-3xl border bg-green-50 p-7">
            <h2 className="text-2xl font-black text-green-950">Quando procurar assistência?</h2>
            <ul className="mt-5 space-y-3">
              {sinais.map((item) => (
                <li key={item} className="rounded-xl bg-white p-4 text-sm leading-6 text-slate-700 shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-3xl font-black text-slate-900">Checklist reprodutivo</h2>
          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {checklist.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-2xl border bg-white p-5">
                <span className="font-black text-green-700">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="rounded-3xl border bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900">Registos que a exploração deve manter</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              "Identificação dos animais",
              "Cobrições e inseminações",
              "Partos e nascimentos",
              "Abortos e problemas reprodutivos",
              "Tratamentos e intervenções",
              "Desempenho dos reprodutores",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-slate-50 p-5 font-bold text-slate-700">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12 md:px-8">
        <h2 className="text-2xl font-black text-slate-900">Fontes de referência</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {fontes.map((fonte) => (
            <a key={fonte.nome} href={fonte.url} target="_blank" rel="noreferrer" className="rounded-2xl border bg-white p-5 font-bold text-green-800 hover:border-green-600">
              {fonte.nome}
            </a>
          ))}
        </div>
      </section>

      <section className="border-t bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-5 md:px-8">
          <Link href={`/pecuaria/bovinos/orientacoes${qs ? `?${qs}` : ""}`} className="rounded-xl border px-5 py-3 font-bold hover:border-green-600 hover:text-green-700">
            ← Todas as orientações
          </Link>
          <Link href={linkTema("sanidade")} className="rounded-xl border px-5 py-3 font-bold hover:border-green-600 hover:text-green-700">
            Sanidade
          </Link>
          <Link href={linkTema("agua")} className="rounded-xl bg-green-700 px-5 py-3 font-bold text-white hover:bg-green-800">
            Água →
          </Link>
        </div>
      </section>
    </main>
  );
}
