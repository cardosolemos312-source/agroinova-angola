import Link from "next/link";

interface AguaPageProps {
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

const pontosPrincipais = [
  {
    numero: "01",
    titulo: "Fonte de água",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cows_drinking_water_at_a_river.jpg?width=1400",
    legenda: "Bovinos a beber numa fonte de água superficial.",
    texto:
      "A primeira etapa de um sistema de abastecimento é conhecer a origem da água. A exploração pode utilizar furos, poços, nascentes, rios, represas, barragens, tanques ou outros sistemas de captação. A escolha da fonte deve considerar disponibilidade durante o ano, qualidade, facilidade de acesso, risco de contaminação, distância até aos animais e possibilidade de armazenamento.",
    pontos: [
      "Identificar todas as fontes utilizadas pela exploração.",
      "Registar quais fontes continuam disponíveis durante a estação seca.",
      "Proteger a captação contra fezes, resíduos, produtos químicos e outros contaminantes.",
      "Avaliar a necessidade de uma fonte alternativa.",
      "Evitar depender de uma única fonte quando uma falha possa comprometer todo o efetivo.",
    ],
  },
  {
    numero: "02",
    titulo: "Bebedouros",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cattle_water_trough.jpg?width=1400",
    legenda: "Bebedouro destinado ao fornecimento de água a bovinos.",
    texto:
      "O bebedouro é o ponto onde a água passa efetivamente a estar disponível para os animais. Um sistema aparentemente adequado pode falhar se o bebedouro estiver sujo, danificado, vazio, mal localizado ou se não houver capacidade suficiente para o número de animais.",
    pontos: [
      "Escolher estruturas resistentes e fáceis de limpar.",
      "Verificar diariamente se existe água disponível.",
      "Controlar boias, válvulas, bombas e tubagens.",
      "Evitar acumulação de lama junto ao bebedouro.",
      "Garantir acesso aos animais subordinados.",
      "Criar condições para limpeza periódica.",
    ],
  },
  {
    numero: "03",
    titulo: "Qualidade da água",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cattle_after_drinking_water.jpg?width=1400",
    legenda: "Bovinos após acesso à água.",
    texto:
      "Disponibilidade não significa necessariamente qualidade. Água com contaminação, sedimentos, matéria orgânica ou características inadequadas pode reduzir o consumo e representar um problema sanitário. Quando existe suspeita de contaminação, a avaliação da qualidade deve ser feita de acordo com orientação técnica e, quando apropriado, através de análise laboratorial.",
    pontos: [
      "Observar cor, cheiro e presença de materiais estranhos.",
      "Verificar se existem fezes ou matéria orgânica na fonte.",
      "Evitar acumulação de resíduos no bebedouro.",
      "Investigar alterações repentinas no consumo.",
      "Solicitar análise quando houver suspeita de contaminação.",
    ],
  },
  {
    numero: "04",
    titulo: "Água durante a seca",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Thirst_quenched.jpg?width=1400",
    legenda: "Bovinos junto de um ponto de abastecimento em período seco.",
    texto:
      "A estação seca deve ser considerada no planeamento anual da exploração. Em sistemas dependentes de pastagens e fontes naturais, a redução das chuvas pode aumentar a distância que os animais precisam percorrer para encontrar água. Em regiões com maior risco de seca, é importante antecipar a necessidade de armazenamento, reabilitação de fontes e criação de pontos adicionais.",
    pontos: [
      "Avaliar as fontes antes do início da estação seca.",
      "Verificar a capacidade dos reservatórios.",
      "Reparar bombas e tubagens antecipadamente.",
      "Planear fontes alternativas.",
      "Relacionar a disponibilidade de água com a gestão das pastagens.",
    ],
  },
];

const categoriasAnimais = [
  {
    titulo: "Bezerros",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Calf_drinking.jpg?width=1200",
    texto:
      "Os bezerros devem ter acesso adequado à água conforme o sistema de criação e o programa alimentar adotado. O acesso à água não substitui o leite ou o alimento adequado à fase, mas faz parte do maneio dos animais jovens. Bebedouros devem permanecer limpos e acessíveis.",
    cuidados: [
      "Evitar bebedouros contaminados.",
      "Observar consumo e comportamento.",
      "Separar água de locais onde se acumulem fezes.",
      "Verificar diariamente a disponibilidade.",
    ],
  },
  {
    titulo: "Novilhas e animais em crescimento",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cattle_on_their_to_drink_water.jpg?width=1200",
    texto:
      "Animais em crescimento necessitam de acesso regular à água para acompanhar o desenvolvimento e o consumo de alimentos. O sistema deve permitir que todos os animais tenham oportunidade de beber, evitando competição excessiva junto ao ponto de água.",
    cuidados: [
      "Garantir acesso contínuo.",
      "Distribuir pontos de água quando necessário.",
      "Evitar longas deslocações.",
      "Controlar o estado dos bebedouros.",
    ],
  },
  {
    titulo: "Vacas em lactação",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cows_drinking_from_a_trough_next_to_the_road_-_geograph.org.uk_-_846458.jpg?width=1200",
    texto:
      "A produção de leite aumenta a importância do acesso à água. Vacas em lactação devem ter água disponível de forma regular e em condições adequadas de higiene. A água deve ser considerada juntamente com alimentação, conforto, temperatura ambiente e maneio geral.",
    cuidados: [
      "Verificar várias vezes o sistema em períodos de calor.",
      "Manter os bebedouros limpos.",
      "Evitar interrupções no abastecimento.",
      "Observar alterações de consumo.",
    ],
  },
  {
    titulo: "Touros e animais reprodutores",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Sauerbier_Ranches%27_Rangeland_Keep_Remote_Cattle_Grazing_and_Watered_%2820190827-NRCS-LSC-0937%29.jpg?width=1200",
    texto:
      "Touros e outros animais destinados à reprodução também precisam de acesso adequado à água. Em sistemas extensivos, a localização dos pontos de água influencia o movimento dos animais e a utilização das áreas de pastagem.",
    cuidados: [
      "Garantir acesso sem competição excessiva.",
      "Inspecionar pontos de água em áreas de pastoreio.",
      "Evitar deslocações desnecessariamente longas.",
      "Preparar alternativas para falhas.",
    ],
  },
];

const tiposFontes = [
  {
    titulo: "Fuços e poços",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Water-Elevator_-_DPLA_-_63c775100dbf6fafec27bd2ba5f61b04_%28page_3%29.jpg?width=1000",
    texto:
      "Podem constituir fontes importantes em regiões onde a água subterrânea é acessível. A exploração deve conhecer a capacidade da fonte, a qualidade da água e o sistema utilizado para bombagem e distribuição.",
  },
  {
    titulo: "Rios e águas superficiais",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cows_drinking_water_at_a_river.jpg?width=1200",
    texto:
      "Águas superficiais podem estar mais expostas a contaminação. Quando utilizadas para animais, a proteção da captação e a avaliação do risco sanitário são particularmente importantes.",
  },
  {
    titulo: "Bebedouros artificiais",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cattle_water_trough.jpg?width=1200",
    texto:
      "Permitem controlar melhor o ponto de consumo e podem ser ligados a reservatórios, bombas ou sistemas de distribuição. A manutenção deve fazer parte da rotina da exploração.",
  },
  {
    titulo: "Sistemas solares",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Drought_Mitigation_-_Solar_Powered_Cattle_Watering_%2820150416-NRCS-LSC-0270%29.jpg?width=1200",
    texto:
      "Sistemas de bombagem alimentados por energia solar podem ser utilizados em determinados contextos para transportar água subterrânea até reservatórios e pontos de abeberamento. A viabilidade depende da fonte, profundidade, dimensionamento e manutenção.",
  },
];

const riscos = [
  {
    titulo: "Desidratação",
    texto:
      "A redução do acesso à água pode comprometer o bem-estar, o consumo de alimento e o desempenho produtivo. O risco aumenta quando existe calor, seca, deslocação prolongada ou falha do sistema de abastecimento.",
  },
  {
    titulo: "Contaminação da fonte",
    texto:
      "Fezes, resíduos, águas de escorrência, produtos químicos e matéria orgânica podem contaminar fontes e bebedouros. A proteção física e a inspeção regular são medidas importantes.",
  },
  {
    titulo: "Bebedouro vazio",
    texto:
      "Um sistema pode possuir água no reservatório e, mesmo assim, deixar os animais sem acesso devido a falhas de boias, válvulas, bombas ou tubagens.",
  },
  {
    titulo: "Excesso de lama",
    texto:
      "A concentração de animais junto de bebedouros pode degradar o solo, criar lama e dificultar a higiene. A drenagem e a escolha do local devem ser consideradas no planeamento.",
  },
  {
    titulo: "Distância excessiva",
    texto:
      "Em sistemas extensivos, distâncias elevadas até à água podem alterar o comportamento de pastoreio e aumentar o esforço dos animais. A distribuição dos pontos deve ser analisada de acordo com o sistema de produção.",
  },
  {
    titulo: "Falha durante a seca",
    texto:
      "Quando uma fonte seca ou a capacidade de armazenamento é insuficiente, toda a exploração pode ficar exposta. O plano de contingência deve ser preparado antes do problema ocorrer.",
  },
];

const sinaisAlerta = [
  "Animais concentrados durante muito tempo junto ao ponto de água.",
  "Bebedouro vazio ou com nível muito baixo.",
  "Animais que procuram água fora do local habitual.",
  "Água com cor ou cheiro anormal.",
  "Presença de fezes ou matéria orgânica no bebedouro.",
  "Bomba que funciona de forma irregular.",
  "Reservatório que não recupera o nível esperado.",
  "Tubagem com fugas.",
  "Animais que apresentam alterações de comportamento associadas ao acesso à água.",
  "Redução inesperada do consumo de água ou alimento.",
];

const rotinaDiaria = [
  "Confirmar se todos os pontos de água possuem água.",
  "Verificar se os bebedouros estão funcionais.",
  "Observar a limpeza da água.",
  "Inspecionar boias e válvulas.",
  "Verificar fugas nas tubagens.",
  "Observar a presença de lama excessiva.",
  "Confirmar se todos os grupos de animais têm acesso.",
  "Observar comportamento dos animais junto à água.",
  "Registar falhas de abastecimento.",
  "Comunicar problemas persistentes ao responsável técnico.",
];

const manutencao = [
  {
    titulo: "Limpeza",
    texto:
      "Remover regularmente sedimentos, algas, fezes, restos de ração e outros materiais acumulados.",
  },
  {
    titulo: "Tubagens",
    texto:
      "Inspecionar ligações, fugas, pressão e possíveis obstruções no sistema de distribuição.",
  },
  {
    titulo: "Bombas",
    texto:
      "Verificar funcionamento, alimentação elétrica ou solar e capacidade de reposição dos reservatórios.",
  },
  {
    titulo: "Reservatórios",
    texto:
      "Controlar o nível, vedação, limpeza e integridade estrutural.",
  },
  {
    titulo: "Área envolvente",
    texto:
      "Evitar erosão e excesso de lama através de drenagem e escolha adequada do local.",
  },
  {
    titulo: "Fonte",
    texto:
      "Manter a área de captação protegida e verificar alterações que possam comprometer a qualidade da água.",
  },
];

const secaAngola = [
  "Mapear fontes de água antes da estação seca.",
  "Calcular a capacidade de armazenamento disponível.",
  "Reabilitar bebedouros e reservatórios antes da escassez.",
  "Criar alternativas para falhas de bombas ou fontes.",
  "Avaliar a possibilidade de sistemas de bombagem solar onde sejam tecnicamente adequados.",
  "Relacionar a localização da água com as áreas de pastagem.",
  "Evitar que todo o efetivo dependa de um único ponto.",
  "Monitorizar fontes que historicamente reduzem o caudal durante a seca.",
];

const checklist = [
  "A exploração possui todas as fontes de água identificadas?",
  "Existe uma fonte principal e uma alternativa?",
  "Existe água suficiente durante a estação seca?",
  "Os reservatórios têm capacidade adequada ao sistema?",
  "Os bebedouros são suficientes para o efetivo?",
  "Os bebedouros são limpos regularmente?",
  "As fontes estão protegidas contra contaminação?",
  "As bombas e tubagens são inspecionadas?",
  "Existe sistema de drenagem junto aos bebedouros?",
  "Existe um plano para falhas de abastecimento?",
  "A qualidade da água é avaliada quando existe suspeita de contaminação?",
  "A exploração possui registos de problemas no sistema de água?",
];

const fontes = [
  {
    nome: "FAO — Restoring Agro-pastoral livelihoods in southern Angola",
    url: "https://www.fao.org/angola/news/detail/restoring-agro-pastoral-livelihoods-in-southern-angola--fao-boosts-resilience-with-water-in-vilulu-and-fimo/",
  },
  {
    nome: "FAO — Angola's Banda Chibia Dam",
    url: "https://www.fao.org/africa/news-stories/news-detail/angola-s-banda-chibia-dam--a-beacon-of-climate-resilience-and-agricultural-innovation/en",
  },
  {
    nome: "FAO — Investing in Water for Resilience",
    url: "https://www.fao.org/africa/news-stories/news-detail/investing-in-water-for-resilience--lessons-from-zimbabwe-and-angola/en",
  },
  {
    nome: "FAO — Water and livestock project in Angola",
    url: "https://www.fao.org/4/af319e/af319e00.pdf",
  },
  {
    nome: "Wikimedia Commons — Cattle water trough",
    url: "https://commons.wikimedia.org/wiki/File:Cattle_water_trough.jpg",
  },
  {
    nome: "Wikimedia Commons — Cattle drinking water at a river",
    url: "https://commons.wikimedia.org/wiki/File:Cows_drinking_water_at_a_river.jpg",
  },
];

export default async function AguaPage({
  searchParams,
}: AguaPageProps) {
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

  const qs = query.toString();

  const linkTema = (tema: string) =>
    `/pecuaria/bovinos/orientacoes/${tema}${qs ? `?${qs}` : ""}`;

  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="border-b bg-gradient-to-br from-cyan-50 via-white to-green-50">
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">

          <div className="mb-8 text-sm text-slate-500">
            <Link href="/" className="hover:text-green-700">
              Início
            </Link>

            <span className="mx-2">›</span>

            <Link href="/pecuaria" className="hover:text-green-700">
              Pecuária
            </Link>

            <span className="mx-2">›</span>

            <Link
              href="/pecuaria/bovinos/orientacoes"
              className="hover:text-green-700"
            >
              Bovinos
            </Link>

            <span className="mx-2">›</span>

            <strong className="text-slate-700">
              Água
            </strong>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">

            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-green-700">
                AGROINOVA ANGOLA · BOVINOS
              </p>

              <h1 className="text-5xl font-black tracking-tight text-slate-900 md:text-6xl">
                Água
              </h1>

              <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">
                Guia técnico para gestão da água na criação de bovinos:
                fontes, bebedouros, qualidade, armazenamento, manutenção,
                períodos de seca, acesso dos animais e organização do
                abastecimento.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-800">
                  💧 Abastecimento
                </span>

                <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-bold text-cyan-800">
                  Qualidade da água
                </span>

                <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-bold text-amber-800">
                  Estação seca
                </span>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-cyan-100 bg-white shadow-xl">
              <img
                src="https://commons.wikimedia.org/wiki/Special:FilePath/Cattle_water_trough.jpg?width=1600"
                alt="Bebedouro com água para bovinos"
                className="h-[360px] w-full object-cover"
              />

              <div className="border-t bg-white px-5 py-4">
                <p className="text-xs leading-5 text-slate-500">
                  Imagem: Cattle water trough · Wikimedia Commons ·
                  CC BY-SA 4.0
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          CONTEXTO
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8">

        <form className="grid gap-4 rounded-3xl border bg-slate-50 p-6 md:grid-cols-3">

          <div>
            <label className="mb-2 block text-sm font-bold text-slate-700">
              Província
            </label>

            <select
              name="provincia"
              defaultValue={provincia}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3"
            >
              <option value="">
                Todas as províncias
              </option>

              {provincias.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-slate-700">
              Finalidade
            </label>

            <select
              name="finalidade"
              defaultValue={finalidade}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3"
            >
              <option value="">
                Todas as finalidades
              </option>

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
              className="w-full rounded-xl bg-green-700 px-5 py-3 font-bold text-white transition hover:bg-green-800"
            >
              Aplicar contexto
            </button>
          </div>

        </form>

        <div className="mt-6 flex flex-wrap gap-2">

          {[
            ["racas", "Raças"],
            ["alimentacao", "Alimentação"],
            ["instalacoes", "Instalações"],
            ["sanidade", "Sanidade"],
            ["reproducao", "Reprodução"],
            ["agua", "Água"],
          ].map(([id, label]) => (
            <Link
              key={id}
              href={linkTema(id)}
              className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
                id === "agua"
                  ? "border-green-700 bg-green-700 text-white"
                  : "bg-white text-slate-700 hover:border-green-600 hover:text-green-700"
              }`}
            >
              {label}
            </Link>
          ))}

        </div>

      </section>

      {/* =========================================================
          INTRODUÇÃO
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 pb-12 md:px-8">

        <div className="grid gap-8 lg:grid-cols-[1.3fr_.7fr]">

          <article className="rounded-3xl border bg-white p-7 shadow-sm">

            <p className="text-lg leading-9 text-slate-700">
              A água deve ser tratada como um componente central do maneio
              pecuário e não apenas como um recurso complementar. Uma
              exploração pode possuir pastagem, instalações e animais em boas
              condições, mas continuar vulnerável se o sistema de
              abastecimento de água for irregular.
            </p>

            <p className="mt-5 text-lg leading-9 text-slate-700">
              O planeamento deve considerar a origem da água, a quantidade
              disponível, a qualidade, o transporte, o armazenamento, os
              pontos de consumo, a manutenção dos equipamentos e as
              alterações que ocorrem durante a estação seca.
            </p>

            <p className="mt-5 text-lg leading-9 text-slate-700">
              Em sistemas extensivos, o problema pode ser ainda mais complexo,
              porque a distribuição das fontes de água influencia a utilização
              das pastagens e o movimento dos animais.
            </p>

            {provincia && (
              <div className="mt-7 rounded-2xl border border-green-200 bg-green-50 p-5">

                <p className="font-black text-green-950">
                  Contexto selecionado
                </p>

                <p className="mt-2 text-sm leading-6 text-green-900">
                  Província:{" "}
                  <strong>{provincia}</strong>

                  {finalidade ? (
                    <>
                      {" · "}
                      Finalidade:{" "}
                      <strong>{finalidade}</strong>
                    </>
                  ) : null}
                </p>

              </div>
            )}

          </article>

          <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">

            <img
              src="https://commons.wikimedia.org/wiki/Special:FilePath/Cattle_on_their_to_drink_water.jpg?width=1400"
              alt="Bovinos a beber água"
              className="h-full min-h-[350px] w-full object-cover"
            />

            <div className="border-t p-5">
              <h3 className="font-black text-slate-900">
                Água e produção extensiva
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Em sistemas extensivos, os pontos de água devem ser
                considerados juntamente com pastagens, deslocação dos animais
                e condições climáticas.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          PONTOS PRINCIPAIS
      ========================================================= */}
      <section className="bg-slate-50 py-14">

        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <p className="text-sm font-bold uppercase tracking-widest text-green-700">
            Gestão do abastecimento
          </p>

          <h2 className="mt-2 text-4xl font-black text-slate-900">
            Os quatro pilares da água
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Uma gestão adequada começa pela fonte e termina no ponto em que o
            animal efetivamente bebe.
          </p>

          <div className="mt-10 grid gap-7 md:grid-cols-2">

            {pontosPrincipais.map((item) => (
              <article
                key={item.titulo}
                className="overflow-hidden rounded-3xl border bg-white shadow-sm"
              >

                <div className="relative">

                  <img
                    src={item.imagem}
                    alt={item.titulo}
                    className="h-72 w-full object-cover"
                    loading="lazy"
                  />

                  <div className="absolute left-5 top-5 rounded-full bg-black/70 px-4 py-2 text-sm font-black text-white">
                    {item.numero}
                  </div>

                </div>

                <div className="p-7">

                  <h3 className="text-2xl font-black text-slate-900">
                    {item.titulo}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    {item.texto}
                  </p>

                  <ul className="mt-6 space-y-3">

                    {item.pontos.map((ponto) => (
                      <li
                        key={ponto}
                        className="flex gap-3 text-sm leading-6 text-slate-700"
                      >
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green-600" />
                        <span>{ponto}</span>
                      </li>
                    ))}

                  </ul>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          ÁGUA POR CATEGORIA
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">

        <p className="text-sm font-bold uppercase tracking-widest text-cyan-700">
          Maneio por categoria
        </p>

        <h2 className="mt-2 text-4xl font-black text-slate-900">
          Nem todos os animais têm as mesmas necessidades de maneio
        </h2>

        <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">
          A gestão da água deve considerar idade, fase produtiva, sistema de
          produção, ambiente e organização do efetivo.
        </p>

        <div className="mt-10 grid gap-7 md:grid-cols-2">

          {categoriasAnimais.map((item) => (
            <article
              key={item.titulo}
              className="overflow-hidden rounded-3xl border bg-white shadow-sm"
            >

              <img
                src={item.imagem}
                alt={item.titulo}
                className="h-64 w-full object-cover"
                loading="lazy"
              />

              <div className="p-7">

                <h3 className="text-2xl font-black text-slate-900">
                  {item.titulo}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {item.texto}
                </p>

                <div className="mt-6 rounded-2xl bg-slate-50 p-5">

                  <p className="font-black text-slate-900">
                    Cuidados principais
                  </p>

                  <ul className="mt-3 space-y-2">

                    {item.cuidados.map((cuidado) => (
                      <li
                        key={cuidado}
                        className="text-sm leading-6 text-slate-700"
                      >
                        • {cuidado}
                      </li>
                    ))}

                  </ul>

                </div>

              </div>

            </article>
          ))}

        </div>

      </section>

      {/* =========================================================
          TIPOS DE FONTES
      ========================================================= */}
      <section className="bg-green-50 py-14">

        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <h2 className="text-4xl font-black text-slate-900">
            Tipos de fontes e sistemas de abastecimento
          </h2>

          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">
            A solução adequada depende das condições locais. Uma tecnologia
            que funciona numa exploração pode não ser adequada noutra.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {tiposFontes.map((item) => (
              <article
                key={item.titulo}
                className="overflow-hidden rounded-3xl border bg-white shadow-sm"
              >

                <img
                  src={item.imagem}
                  alt={item.titulo}
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />

                <div className="p-6">

                  <h3 className="text-xl font-black text-slate-900">
                    {item.titulo}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.texto}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          CONSUMO / PLANEAMENTO
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">

        <div className="grid gap-8 lg:grid-cols-2">

          <article className="rounded-3xl border bg-white p-8 shadow-sm">

            <h2 className="text-3xl font-black text-slate-900">
              Não utilizar um único número para toda a exploração
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              A necessidade de água varia conforme a categoria animal, o
              estado fisiológico, o tipo de alimentação, a temperatura
              ambiente, o sistema de produção e outros fatores. Por isso,
              qualquer planeamento deve ser feito de acordo com as condições
              reais da exploração.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Animais em lactação, animais submetidos a temperaturas elevadas
              e efetivos com elevado consumo de matéria seca podem apresentar
              necessidades diferentes de animais jovens ou de animais em
              condições ambientais menos exigentes.
            </p>

            <div className="mt-7 rounded-2xl bg-amber-50 p-5">

              <p className="font-black text-amber-950">
                Atenção
              </p>

              <p className="mt-2 text-sm leading-7 text-amber-900">
                Os valores de consumo apresentados em documentos técnicos não
                devem ser utilizados como uma medida universal para todas as
                explorações. O dimensionamento deve considerar o contexto
                produtivo e a orientação técnica.
              </p>

            </div>

          </article>

          <article className="overflow-hidden rounded-3xl border bg-white shadow-sm">

            <img
              src="https://commons.wikimedia.org/wiki/Special:FilePath/Field_with_cattle_drinking_trough_-_geograph.org.uk_-_4921149.jpg?width=1400"
              alt="Campo com ponto de água para bovinos"
              className="h-[430px] w-full object-cover"
            />

            <div className="p-6">

              <h3 className="text-xl font-black text-slate-900">
                Água no sistema de pastoreio
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                A localização dos pontos de água deve ser analisada juntamente
                com a área de pastagem, acessibilidade, drenagem e movimento
                dos animais.
              </p>

            </div>

          </article>

        </div>

      </section>

      {/* =========================================================
          QUALIDADE
      ========================================================= */}
      <section className="bg-slate-900 py-14 text-white">

        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">

            <div>

              <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">
                Qualidade
              </p>

              <h2 className="mt-3 text-4xl font-black">
                Água limpa é uma questão de maneio
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                A qualidade não depende apenas da origem. O percurso da água,
                os reservatórios, as tubagens e o próprio bebedouro podem
                introduzir contaminação.
              </p>

            </div>

            <div className="grid gap-4 md:grid-cols-2">

              {[
                "Fonte protegida",
                "Reservatório limpo",
                "Tubagens em boas condições",
                "Bebedouro higienizado",
                "Sem fezes na água",
                "Sem resíduos químicos",
                "Sem acumulação excessiva de algas",
                "Análise quando houver suspeita",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="font-bold">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          RISCOS
      ========================================================= */}
      <section className="bg-slate-50 py-14">

        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <h2 className="text-4xl font-black text-slate-900">
            Principais riscos
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Os problemas relacionados com água podem resultar de falhas
            simples de manutenção ou de limitações estruturais da exploração.
          </p>

          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {riscos.map((item, index) => (
              <article
                key={item.titulo}
                className="rounded-3xl border bg-white p-7"
              >

                <span className="text-sm font-black text-red-600">
                  RISCO {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-2 text-xl font-black text-slate-900">
                  {item.titulo}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.texto}
                </p>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          SINAIS DE ALERTA
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">

        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">

          <div>

            <p className="text-sm font-bold uppercase tracking-widest text-red-600">
              Observação diária
            </p>

            <h2 className="mt-2 text-4xl font-black text-slate-900">
              Sinais de alerta
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              A observação dos animais e do sistema de abastecimento permite
              identificar problemas antes que estes se transformem numa falha
              grave da exploração.
            </p>

          </div>

          <div className="grid gap-3 md:grid-cols-2">

            {sinaisAlerta.map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border bg-white p-5 shadow-sm"
              >

                <div className="flex gap-4">

                  <span className="font-black text-red-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm leading-6 text-slate-700">
                    {item}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          ROTINA
      ========================================================= */}
      <section className="bg-cyan-50 py-14">

        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <h2 className="text-4xl font-black text-slate-900">
            Rotina diária de controlo
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Uma rotina simples pode evitar interrupções prolongadas no
            abastecimento.
          </p>

          <div className="mt-9 grid gap-4 md:grid-cols-2">

            {rotinaDiaria.map((item, index) => (
              <div
                key={item}
                className="flex gap-5 rounded-2xl border bg-white p-5"
              >

                <span className="font-black text-cyan-700">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="leading-7 text-slate-700">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          MANUTENÇÃO
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">

        <h2 className="text-4xl font-black text-slate-900">
          Manutenção do sistema de água
        </h2>

        <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">
          A manutenção preventiva é normalmente mais segura do que esperar
          que o sistema falhe quando os animais já dependem dele.
        </p>

        <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {manutencao.map((item) => (
            <article
              key={item.titulo}
              className="rounded-3xl border bg-white p-7 shadow-sm"
            >

              <h3 className="text-xl font-black text-green-800">
                {item.titulo}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {item.texto}
              </p>

            </article>
          ))}

        </div>

      </section>

      {/* =========================================================
          ANGOLA
      ========================================================= */}
      <section className="bg-green-900 py-16 text-white">

        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">

            <div>

              <p className="text-sm font-bold uppercase tracking-widest text-green-300">
                Angola
              </p>

              <h2 className="mt-3 text-4xl font-black">
                Água, seca e pecuária no contexto angolano
              </h2>

              <p className="mt-5 leading-8 text-green-100">
                A gestão da água tem importância particular nas zonas
                agropecuárias sujeitas a períodos prolongados de seca. A FAO
                tem documentado intervenções recentes no sul de Angola para
                melhorar o acesso à água para produção agrícola e pecuária.
              </p>

              <p className="mt-5 leading-8 text-green-100">
                Em 2025, por exemplo, foram documentadas intervenções de
                construção e reabilitação de pequenas barragens em comunidades
                afetadas pela seca, com utilização da água para produção
                agrícola e pecuária.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {secaAngola.map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/10 p-5"
                >

                  <span className="text-sm font-black text-green-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-2 leading-7 text-green-50">
                    {item}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          IMAGEM / SISTEMA SOLAR
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">

        <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">

          <div className="grid lg:grid-cols-2">

            <img
              src="https://commons.wikimedia.org/wiki/Special:FilePath/20150416-NRCS-LSC-0249_%2816934790014%29.jpg?width=1600"
              alt="Sistema de bombagem de água para bovinos"
              className="h-full min-h-[400px] w-full object-cover"
            />

            <div className="p-8 md:p-10">

              <p className="text-sm font-bold uppercase tracking-widest text-green-700">
                Tecnologia e água
              </p>

              <h2 className="mt-3 text-3xl font-black text-slate-900">
                Bombagem e energia solar
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Em algumas explorações, a energia solar pode ser utilizada para
                alimentar sistemas de bombagem de água. A tecnologia pode ser
                interessante em locais com boa disponibilidade solar e onde a
                distância até à rede elétrica dificulta outras soluções.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                Entretanto, a instalação deve ser dimensionada de acordo com a
                fonte de água, profundidade, caudal necessário, altura de
                elevação, armazenamento, distância de distribuição e número
                de animais.
              </p>

              <div className="mt-7 rounded-2xl bg-green-50 p-5">

                <p className="font-black text-green-950">
                  Importante
                </p>

                <p className="mt-2 text-sm leading-7 text-green-900">
                  A existência de painéis solares não garante, por si só, um
                  sistema de abastecimento adequado. O conjunto completo deve
                  ser tecnicamente dimensionado.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          PLANEAMENTO SECO
      ========================================================= */}
      <section className="bg-amber-50 py-14">

        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
            Planeamento
          </p>

          <h2 className="mt-2 text-4xl font-black text-slate-900">
            Preparar a exploração antes da estação seca
          </h2>

          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">
            O melhor momento para descobrir uma falha grave no sistema não é
            quando a fonte já secou. A preparação deve ocorrer antes do
            período crítico.
          </p>

          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

            {secaAngola.map((item, index) => (
              <div
                key={item}
                className="rounded-3xl border border-amber-200 bg-white p-6"
              >

                <span className="text-2xl font-black text-amber-600">
                  {index + 1}
                </span>

                <p className="mt-3 font-bold leading-7 text-slate-700">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          CHECKLIST
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">

        <div className="rounded-3xl border bg-white p-7 shadow-sm md:p-10">

          <p className="text-sm font-bold uppercase tracking-widest text-green-700">
            Ferramenta de campo
          </p>

          <h2 className="mt-2 text-4xl font-black text-slate-900">
            Checklist do sistema de água
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            O produtor ou técnico pode utilizar esta lista durante uma visita
            à exploração para identificar pontos que precisam de melhoria.
          </p>

          <div className="mt-9 grid gap-3 md:grid-cols-2">

            {checklist.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border bg-slate-50 p-5"
              >

                <span className="font-black text-green-700">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-sm leading-7 text-slate-700">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          REGISTOS
      ========================================================= */}
      <section className="bg-slate-50 py-14">

        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <h2 className="text-4xl font-black text-slate-900">
            Registos recomendados
          </h2>

          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">
            Uma exploração tecnicamente organizada deve manter registos
            simples que permitam acompanhar problemas e intervenções.
          </p>

          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {[
              "Data da limpeza dos bebedouros",
              "Falhas de abastecimento",
              "Reparações realizadas",
              "Problemas observados na fonte",
              "Análises de qualidade da água",
              "Manutenção das bombas",
              "Nível dos reservatórios",
              "Observações durante a seca",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border bg-white p-6"
              >
                <p className="font-bold leading-7 text-slate-700">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          QUANDO CHAMAR TÉCNICO
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">

        <div className="rounded-3xl border border-red-100 bg-red-50 p-8">

          <h2 className="text-3xl font-black text-red-950">
            Quando procurar assistência técnica
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-red-900">
            Problemas persistentes de abastecimento ou qualidade da água
            devem ser investigados. A assistência técnica é especialmente
            importante quando existe suspeita de contaminação, doença,
            alterações importantes no comportamento dos animais ou falha
            estrutural do sistema.
          </p>

          <div className="mt-7 grid gap-3 md:grid-cols-2">

            {[
              "Suspeita de contaminação da água.",
              "Doença ou mortalidade associada a uma fonte de água.",
              "Falhas repetidas de bombas ou sistemas de distribuição.",
              "Redução persistente do acesso à água.",
              "Problemas graves de armazenamento.",
              "Necessidade de dimensionamento de novo sistema.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-red-100 bg-white p-5"
              >
                <p className="font-bold text-red-900">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          FONTES
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 pb-14 md:px-8">

        <h2 className="text-3xl font-black text-slate-900">
          Fontes de referência
        </h2>

        <p className="mt-3 max-w-4xl text-slate-600">
          A orientação desta página combina referências técnicas sobre água e
          produção pecuária com documentação recente sobre gestão da água e
          resiliência em Angola.
        </p>

        <div className="mt-7 grid gap-4 md:grid-cols-2">

          {fontes.map((fonte) => (
            <a
              key={fonte.nome}
              href={fonte.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border bg-white p-5 font-bold text-green-800 transition hover:border-green-600 hover:bg-green-50"
            >
              {fonte.nome}
            </a>
          ))}

        </div>

      </section>

      {/* =========================================================
          NAVEGAÇÃO
      ========================================================= */}
      <section className="border-t bg-white py-10">

        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-5 md:px-8">

          <Link
            href={`/pecuaria/bovinos/orientacoes${qs ? `?${qs}` : ""}`}
            className="rounded-xl border px-5 py-3 font-bold transition hover:border-green-600 hover:text-green-700"
          >
            ← Todas as orientações
          </Link>

          <Link
            href={linkTema("reproducao")}
            className="rounded-xl border px-5 py-3 font-bold transition hover:border-green-600 hover:text-green-700"
          >
            ← Reprodução
          </Link>

          <Link
            href={linkTema("sanidade")}
            className="rounded-xl bg-green-700 px-5 py-3 font-bold text-white transition hover:bg-green-800"
          >
            Sanidade →
          </Link>

        </div>

      </section>

    </main>
  );
}