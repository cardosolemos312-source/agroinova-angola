"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Provincia = {
  nome: string;
  regiao: string;
  observacao: string;
};

type Material = {
  nome: string;
  categoria: string;
  origem: string;
  evidencia: string;
  observacao: string;
};

const provincias: Provincia[] = [
  {
    nome: "Bengo",
    regiao: "Norte",
    observacao:
      "A aptidão deve ser avaliada localmente considerando chuva, temperatura, solo e disponibilidade de água.",
  },
  {
    nome: "Benguela",
    regiao: "Centro-Oeste",
    observacao:
      "A produção depende fortemente do ambiente local e, em zonas mais secas, da disponibilidade de água.",
  },
  {
    nome: "Bié",
    regiao: "Centro",
    observacao:
      "Província com tradição agrícola e presença documentada de produção de leguminosas.",
  },
  {
    nome: "Cabinda",
    regiao: "Norte",
    observacao:
      "O excesso de humidade deve ser considerado na escolha da área e no manejo fitossanitário.",
  },
  {
    nome: "Cuando",
    regiao: "Leste",
    observacao:
      "A recomendação de materiais deve ser baseada em ensaios locais e disponibilidade de semente.",
  },
  {
    nome: "Cubango",
    regiao: "Leste",
    observacao:
      "A seleção da época deve considerar o regime de chuvas e o período necessário para maturação.",
  },
  {
    nome: "Cuanza Norte",
    regiao: "Norte",
    observacao:
      "Devem ser considerados drenagem, fertilidade e distribuição das chuvas.",
  },
  {
    nome: "Cuanza Sul",
    regiao: "Centro-Oeste",
    observacao:
      "A escolha da cultivar deve considerar o ambiente específico da exploração.",
  },
  {
    nome: "Cunene",
    regiao: "Sul",
    observacao:
      "Em ambientes secos, o planeamento hídrico é determinante para a cultura.",
  },
  {
    nome: "Huambo",
    regiao: "Centro",
    observacao:
      "Existe investigação recente sobre feijão comum e disponibilidade de sementes no Huambo.",
  },
  {
    nome: "Huíla",
    regiao: "Sul",
    observacao:
      "Altitude, temperatura, época de cultivo e disponibilidade de água devem orientar o sistema.",
  },
  {
    nome: "Icolo e Bengo",
    regiao: "Norte",
    observacao:
      "A recomendação deve ser feita por ambiente de produção e não apenas pela localização administrativa.",
  },
  {
    nome: "Luanda",
    regiao: "Norte",
    observacao:
      "A produção comercial depende sobretudo de disponibilidade de água, solo adequado e manejo intensivo.",
  },
  {
    nome: "Lunda Norte",
    regiao: "Leste",
    observacao:
      "A drenagem e o controlo de doenças favorecem ambientes com maior humidade.",
  },
  {
    nome: "Lunda Sul",
    regiao: "Leste",
    observacao:
      "Devem ser considerados regime pluviométrico, fertilidade e conservação do solo.",
  },
  {
    nome: "Malanje",
    regiao: "Norte",
    observacao:
      "A seleção de materiais deve ser confirmada por ensaios e disponibilidade de sementes adaptadas.",
  },
  {
    nome: "Moxico",
    regiao: "Leste",
    observacao:
      "O calendário agrícola deve acompanhar o início e o fim das chuvas.",
  },
  {
    nome: "Moxico Leste",
    regiao: "Leste",
    observacao:
      "A recomendação varietal deverá ser apoiada por investigação e ensaios locais.",
  },
  {
    nome: "Namibe",
    regiao: "Sul",
    observacao:
      "A disponibilidade de água é uma das principais condicionantes para produção agrícola.",
  },
  {
    nome: "Uíge",
    regiao: "Norte",
    observacao:
      "Devem ser priorizados solos bem drenados e práticas de prevenção de doenças.",
  },
  {
    nome: "Zaire",
    regiao: "Norte",
    observacao:
      "A humidade e a drenagem devem ser consideradas no planeamento da cultura.",
  },
];

const materiais: Material[] = [
  {
    nome: "Catarina",
    categoria: "Material documentado em Angola",
    origem: "Angola; também estudada experimentalmente no Huambo",
    evidencia:
      "Foi avaliada em Chicala-Choloanga, Huambo, num estudo publicado em 2026.",
    observacao:
      "Não deve ser apresentada como recomendação nacional automática; o desempenho depende do ambiente e do sistema de produção.",
  },
  {
    nome: "Manteiga",
    categoria: "Material documentado em Angola",
    origem: "Angola",
    evidencia:
      "É mencionada em fontes angolanas e foi comparada com Catarina no ensaio realizado em Chicala-Choloanga.",
    observacao:
      "O nome comercial ou local não substitui a identificação genética e a certificação da semente.",
  },
  {
    nome: "Catarino",
    categoria: "Material registado em inquéritos nacionais",
    origem: "Angola",
    evidencia:
      "O catálogo do INE/IDREA regista ocorrências de feijão Catarino.",
    observacao:
      "A ocorrência no inquérito não significa, por si só, que seja uma variedade oficialmente recomendada.",
  },
  {
    nome: "Ervilha",
    categoria: "Material de germoplasma",
    origem: "Huambo, Angola",
    evidencia:
      "Foi documentado como landrace num painel de germoplasma de feijão-comum.",
    observacao:
      "É um material de interesse para conservação e investigação; não deve ser confundido com a espécie ervilha.",
  },
  {
    nome: "Cebo",
    categoria: "Material de germoplasma",
    origem: "Cela, Angola",
    evidencia:
      "Foi documentado como material local de Phaseolus vulgaris.",
    observacao:
      "A informação disponível sustenta a conservação e caracterização, mas não uma recomendação agronómica nacional.",
  },
  {
    nome: "Mantega Blanca",
    categoria: "Material de germoplasma",
    origem: "Kibala, Angola",
    evidencia:
      "Foi documentado como landrace num painel de germoplasma.",
    observacao:
      "Necessita de caracterização agronómica e genética adicional antes de qualquer recomendação ampla.",
  },
  {
    nome: "Canario",
    categoria: "Material de germoplasma",
    origem: "Huambo, Angola",
    evidencia:
      "Foi documentado como landrace de Phaseolus vulgaris proveniente do Huambo.",
    observacao:
      "O registo é relevante para conservação da diversidade genética do feijão em Angola.",
  },
];

const imagens = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/40/Freshly_harvested_legumes_in_Bi%C3%A9_province.jpg",
    alt: "Feijão colhido na província do Bié, Angola",
    legenda:
      "Leguminosas recém-colhidas numa escola agrícola da província do Bié.",
    fonte: "Wikimedia Commons — fotografia realizada no Bié, Angola, 2021.",
    href: "https://commons.wikimedia.org/wiki/File:Freshly_harvested_legumes_in_Bi%C3%A9_province.jpg",
  },
  {
    src: "https://cdn.prod.website-files.com/5a8e71e3c7881c000130ff13/5ea29a20a6d93b5ea20ccf58_PHOTO-2019-03-27-14-55-23.jpg",
    alt: "Campo de feijão no Bailundo",
    legenda:
      "Campo de produção de feijão no município do Bailundo, província do Huambo.",
    fonte: "ADRA Angola — Cooperativa Sementes do Planalto.",
    href: "https://www.adra-angola.org/artigos/cooperativa-sementes-do-planalto-no-municipio-do-bailundo-aposta-na-producao-do-feijao",
  },
  {
    src: "https://www.opais.ao/wp-content/uploads/2024/05/camponeses-3.webp",
    alt: "Feijão armazenado em sacos",
    legenda:
      "Grãos de feijão preparados para comercialização e armazenamento.",
    fonte: "O País — reportagem sobre a cadeia de comercialização do feijão em Angola.",
    href: "https://www.opais.ao/economia/camponeses-querem-envolvimento-da-carrinho-agri-para-evitar-saida-de-feijao-de-angola/",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Phaseolus%20vulgaris%20-%201001.jpg?width=1600",
    alt: "Vagens de Phaseolus vulgaris",
    legenda:
      "Vagens de Phaseolus vulgaris em fase de desenvolvimento.",
    fonte: "Wikimedia Commons.",
    href: "https://commons.wikimedia.org/wiki/File:Phaseolus_vulgaris_-_1001.jpg",
  },
];

const fases = [
  {
    fase: "01",
    titulo: "Selecção da área",
    texto:
      "Escolher uma área com boa drenagem, sem encharcamento prolongado e com histórico fitossanitário conhecido. A análise do solo é recomendável antes da instalação.",
  },
  {
    fase: "02",
    titulo: "Preparação do solo",
    texto:
      "Realizar mobilização compatível com o sistema de produção, controlar plantas infestantes e preservar a estrutura e a matéria orgânica do solo.",
  },
  {
    fase: "03",
    titulo: "Semente",
    texto:
      "Utilizar semente identificada, limpa, com boa germinação e origem conhecida. Para produção comercial, deve-se dar preferência a semente de qualidade e legalmente comercializada.",
  },
  {
    fase: "04",
    titulo: "Sementeira",
    texto:
      "A população de plantas deve ser definida de acordo com porte, hábito de crescimento, fertilidade do solo, disponibilidade hídrica e objetivo de produção.",
  },
  {
    fase: "05",
    titulo: "Nutrição",
    texto:
      "A adubação deve ser baseada, sempre que possível, na análise do solo. Fósforo, potássio, cálcio, magnésio e micronutrientes podem ser importantes conforme a fertilidade.",
  },
  {
    fase: "06",
    titulo: "Manejo de infestantes",
    texto:
      "O feijoeiro apresenta elevada sensibilidade à competição durante as fases iniciais. O controlo precoce reduz a competição por água, luz e nutrientes.",
  },
  {
    fase: "07",
    titulo: "Monitorização",
    texto:
      "Inspecionar regularmente folhas, caules, raízes, flores e vagens para detectar pragas, sintomas de doenças, deficiência nutricional ou stress hídrico.",
  },
  {
    fase: "08",
    titulo: "Colheita",
    texto:
      "Para feijão seco, a colheita deve ocorrer quando a maior parte das vagens estiver madura e os grãos tiverem atingido a maturidade fisiológica apropriada.",
  },
];

const pragas = [
  {
    nome: "Gorgulho do feijão",
    nomeCientifico: "Acanthoscelides obtectus",
    dano:
      "Ataca principalmente os grãos armazenados, formando galerias e reduzindo a qualidade comercial e a capacidade germinativa.",
    manejo:
      "Secagem adequada, limpeza dos armazéns, armazenamento protegido e monitorização dos lotes são componentes importantes do manejo.",
  },
  {
    nome: "Mosca-minadora",
    nomeCientifico: "Liriomyza spp.",
    dano:
      "As larvas formam galerias no tecido foliar, reduzindo a área fotossintética quando a infestação é elevada.",
    manejo:
      "Monitorização das folhas, conservação de inimigos naturais e utilização criteriosa de medidas de controlo quando economicamente justificadas.",
  },
  {
    nome: "Pulgões",
    nomeCientifico: "Aphididae",
    dano:
      "Sugam a seiva e podem provocar deformações, redução do vigor e transmissão de alguns vírus.",
    manejo:
      "Monitorizar colónias, observar inimigos naturais e evitar aplicações indiscriminadas de insecticidas.",
  },
  {
    nome: "Ácaros",
    nomeCientifico: "Tetranychidae",
    dano:
      "Podem provocar pontuações, bronzeamento e perda de vigor das folhas, sobretudo em condições quentes e secas.",
    manejo:
      "Monitorizar a face inferior das folhas e evitar condições de stress hídrico sempre que possível.",
  },
];

const doencas = [
  {
    nome: "Antracnose",
    agente: "Colletotrichum lindemuthianum",
    sintomas:
      "Lesões escuras em nervuras, pecíolos, caules e vagens. Pode causar perdas graves quando ocorre em condições favoráveis.",
    prevencao:
      "Utilizar semente sadia, reduzir a disseminação de restos contaminados e escolher materiais com resistência quando disponíveis e comprovados para o ambiente.",
  },
  {
    nome: "Ferrugem",
    agente: "Uromyces appendiculatus",
    sintomas:
      "Pequenas pústulas, geralmente de coloração castanha, nas folhas e outros órgãos verdes.",
    prevencao:
      "Monitorização do campo, manejo integrado e utilização de materiais resistentes quando essa característica estiver documentada.",
  },
  {
    nome: "Podridões radiculares",
    agente: "Complexo de patógenos do solo",
    sintomas:
      "Redução do vigor, escurecimento das raízes, falhas no estabelecimento e murcha.",
    prevencao:
      "Rotação de culturas, drenagem adequada, semente de qualidade e redução do stress da cultura.",
  },
  {
    nome: "Viroses",
    agente: "Diversos vírus",
    sintomas:
      "Mosaicos, cloroses, deformações foliares e redução do crescimento.",
    prevencao:
      "Utilizar semente de qualidade, controlar vectores quando necessário e eliminar plantas severamente afectadas conforme orientação técnica.",
  },
];

const fontes = [
  {
    titulo:
      "MINAGRIF / PDAC — Workshop Técnico sobre Produção de Batata e Feijão Comum",
    descricao:
      "Regista a realização, em Junho de 2026, de um workshop no Huambo sobre feijão comum, novas variedades melhoradas, tecnologias de produção e disponibilidade de semente de qualidade.",
    href: "https://pdac.ao/pdac-apoia-workshop-tecnico-sobre-producao-de-batata-e-feijao-comum-no-huambo/",
  },
  {
    titulo:
      "Revista Científica da Universidade José Eduardo dos Santos — Catarina e Manteiga",
    descricao:
      "Estudo de 2026 realizado em Mbave, Chicala-Choloanga, Huambo, avaliando Catarina e Manteiga sob diferentes tratamentos, incluindo Rhizobium HCC23.",
    href: "https://www.reciujes.com/index.php/reciujes/article/view/299",
  },
  {
    titulo: "INE / IDREA — Registos de culturas em Angola",
    descricao:
      "Os dados do INE/IDREA apresentam diferentes denominações de feijão utilizadas nos agregados inquiridos, incluindo Catarina, Catarino, Manteiga e outras designações locais.",
    href: "https://andine.ine.gov.ao/nada/index.php/catalog/6/variable/F18/V1017?name=S15B01__3",
  },
  {
    titulo:
      "Germoplasma de feijão amarelo — materiais provenientes de Angola",
    descricao:
      "Estudo que documenta materiais de Phaseolus vulgaris provenientes de Huambo, Cela e Kibala, entre outros materiais utilizados em investigação genética.",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6266362/",
  },
  {
    titulo:
      "FAO AGRIS — Práticas agronómicas para aumento do rendimento do feijão",
    descricao:
      "Revisão sistemática sobre fertilização, irrigação, densidade, rizóbios, doenças, pragas e manejo da cultura.",
    href: "https://agris.fao.org/search/en/providers/122535/records/65df7d010f3e94b9e5d9164a",
  },
];

export default function FeijaoPage() {
  const [provincia, setProvincia] = useState("Huambo");
  const [pesquisa, setPesquisa] = useState("");

  const materiaisFiltrados = useMemo(() => {
    const termo = pesquisa.trim().toLowerCase();

    if (!termo) return materiais;

    return materiais.filter((item) =>
      `${item.nome} ${item.categoria} ${item.origem} ${item.evidencia}`
        .toLowerCase()
        .includes(termo)
    );
  }, [pesquisa]);

  const provinciaAtual =
    provincias.find((item) => item.nome === provincia) ?? provincias[0];

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="relative overflow-hidden bg-emerald-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              AGROINOVA ANGOLA · AGRICULTURA
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Feijão-comum
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-emerald-50 sm:text-xl">
              Conhecimento técnico sobre Phaseolus vulgaris L., com atenção
              para materiais documentados em Angola, qualidade da semente,
              fertilidade do solo, fixação biológica de nitrogénio, manejo,
              fitossanidade, colheita e conservação.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-emerald-700 bg-emerald-900/60 px-4 py-2 text-sm">
                Phaseolus vulgaris L.
              </span>
              <span className="rounded-full border border-emerald-700 bg-emerald-900/60 px-4 py-2 text-sm">
                Leguminosa
              </span>
              <span className="rounded-full border border-emerald-700 bg-emerald-900/60 px-4 py-2 text-sm">
                Segurança alimentar
              </span>
              <span className="rounded-full border border-emerald-700 bg-emerald-900/60 px-4 py-2 text-sm">
                Investigação em Angola
              </span>
            </div>
          </div>
        </div>
      </section>

      <nav className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-6 py-4 lg:px-8">
          <Link
            href="/agricultura"
            className="text-sm font-medium text-emerald-700 hover:text-emerald-900"
          >
            Agricultura
          </Link>

          <span className="text-stone-400">/</span>

          <span className="text-sm text-stone-600">Feijão</span>

          <Link
            href="/agricultura/milho"
            className="ml-auto text-sm text-stone-600 hover:text-emerald-700"
          >
            Milho
          </Link>

          <Link
            href="/agricultura/soja"
            className="text-sm text-stone-600 hover:text-emerald-700"
          >
            Soja
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              01 · Visão geral
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Uma cultura estratégica para a agricultura angolana
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-stone-700">
              <p>
                O feijão-comum pertence à espécie{" "}
                <em>Phaseolus vulgaris</em> L. e é uma das principais
                leguminosas de grão utilizadas na alimentação humana. O grão
                fornece proteína, carboidratos, fibras, minerais e vitaminas,
                além de possuir importância económica para agricultores
                familiares e comerciais.
              </p>

              <p>
                Em Angola, a cultura possui importância particular em zonas
                produtoras do centro do país. Uma comunicação do Governo
                Provincial do Huambo, publicada em 2026, destaca a relevância
                do feijão para segurança alimentar, nutrição e geração de
                rendimento rural, mencionando materiais como Manteiga,
                Catarina, Calopato, Dondé Yombwa e Catiolo.
              </p>

              <p>
                A AGROINOVA ANGOLA diferencia, nesta página, três categorias:
                materiais documentados na produção ou nos inquéritos
                nacionais, materiais de germoplasma e variedades melhoradas
                cuja recomendação depende de ensaios e certificação. Esta
                distinção evita transformar qualquer nome local encontrado em
                uma recomendação nacional.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
            <a
              href={imagens[0].href}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imagens[0].src}
                alt={imagens[0].alt}
                className="h-80 w-full object-cover"
              />
            </a>

            <div className="p-5">
              <p className="font-semibold text-stone-900">
                Feijão em Angola
              </p>

              <p className="mt-2 text-sm leading-6 text-stone-600">
                {imagens[0].legenda}
              </p>

              <a
                href={imagens[0].href}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm font-medium text-emerald-700 hover:underline"
              >
                Ver fotografia e fonte →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            02 · Caracterização agronómica
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Botânica e fisiologia da cultura
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
              <h3 className="font-bold">Família</h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                Fabaceae, família que inclui diversas leguminosas agrícolas.
              </p>
            </article>

            <article className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
              <h3 className="font-bold">Espécie</h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                <em>Phaseolus vulgaris</em> L.
              </p>
            </article>

            <article className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
              <h3 className="font-bold">Produto principal</h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                Grão seco para alimentação, comercialização e conservação de
                semente.
              </p>
            </article>

            <article className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
              <h3 className="font-bold">Crescimento</h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                Existem diferentes hábitos de crescimento, desde plantas
                determinadas até materiais de crescimento mais indeterminado.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              03 · Materiais e variedades
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Materiais documentados em Angola
            </h2>

            <p className="mt-3 max-w-3xl text-stone-600">
              A base abaixo reúne materiais que aparecem em fontes angolanas
              ou em estudos de germoplasma. A presença de um nome na base não
              significa que o material esteja oficialmente recomendado para
              todas as províncias.
            </p>
          </div>

          <input
            value={pesquisa}
            onChange={(event) => setPesquisa(event.target.value)}
            placeholder="Pesquisar material..."
            className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm outline-none ring-emerald-600 focus:ring-2 md:max-w-xs"
          />
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-stone-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left text-sm">
              <thead className="bg-stone-100 text-stone-700">
                <tr>
                  <th className="px-5 py-4 font-semibold">Material</th>
                  <th className="px-5 py-4 font-semibold">Categoria</th>
                  <th className="px-5 py-4 font-semibold">Origem</th>
                  <th className="px-5 py-4 font-semibold">Evidência</th>
                  <th className="px-5 py-4 font-semibold">Nota técnica</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-stone-200">
                {materiaisFiltrados.map((item) => (
                  <tr key={item.nome} className="align-top">
                    <td className="px-5 py-5 font-bold text-emerald-800">
                      {item.nome}
                    </td>
                    <td className="px-5 py-5 text-stone-700">
                      {item.categoria}
                    </td>
                    <td className="px-5 py-5 text-stone-700">
                      {item.origem}
                    </td>
                    <td className="px-5 py-5 text-stone-700">
                      {item.evidencia}
                    </td>
                    <td className="px-5 py-5 text-stone-600">
                      {item.observacao}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-900">
          <strong>Nota de integridade científica:</strong> nomes como
          Catarina, Manteiga e Catarino são documentados em fontes angolanas,
          mas a AGROINOVA não os apresenta automaticamente como cultivares
          oficialmente recomendadas para todas as 21 províncias. A
          recomendação deve considerar resultados de ensaios, ambiente,
          semente disponível e enquadramento oficial.
        </div>
      </section>

      <section className="bg-stone-100 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            04 · Solos
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Escolha e preparação do solo
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <article className="rounded-2xl border border-stone-200 bg-white p-7">
              <h3 className="text-xl font-bold">Drenagem</h3>
              <p className="mt-4 leading-7 text-stone-600">
                O feijoeiro é sensível ao excesso de água. Solos bem drenados
                favorecem o desenvolvimento radicular e reduzem problemas
                associados a patógenos do solo.
              </p>
            </article>

            <article className="rounded-2xl border border-stone-200 bg-white p-7">
              <h3 className="text-xl font-bold">Fertilidade</h3>
              <p className="mt-4 leading-7 text-stone-600">
                A análise do solo deve orientar a correcção da acidez e o
                fornecimento de fósforo, potássio e outros nutrientes. A
                necessidade de azoto deve ser analisada em conjunto com a
                capacidade de fixação biológica.
              </p>
            </article>

            <article className="rounded-2xl border border-stone-200 bg-white p-7">
              <h3 className="text-xl font-bold">Matéria orgânica</h3>
              <p className="mt-4 leading-7 text-stone-600">
                A manutenção da matéria orgânica ajuda a melhorar estrutura,
                retenção de água e actividade biológica do solo, devendo ser
                integrada com rotação e conservação do solo.
              </p>
            </article>
          </div>

          <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-7">
            <h3 className="text-xl font-bold text-emerald-950">
              Não existe um único “solo do feijão” para Angola
            </h3>

            <p className="mt-3 max-w-4xl leading-7 text-emerald-900">
              A aptidão depende das propriedades físicas e químicas do solo,
              clima, relevo, disponibilidade de água, histórico da área e
              material genético. Por isso, a AGROINOVA deve evitar afirmar que
              uma província inteira possui um determinado solo adequado sem
              base cartográfica ou análise específica.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
          05 · Semente
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Qualidade da semente
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            [
              "Pureza",
              "A semente deve apresentar boa pureza física e reduzida presença de sementes de outras espécies.",
            ],
            [
              "Germinação",
              "Lotes com elevada capacidade germinativa favorecem estabelecimento uniforme.",
            ],
            [
              "Sanidade",
              "Sementes contaminadas podem introduzir agentes patogénicos na área de produção.",
            ],
            [
              "Identidade",
              "O produtor deve conhecer a cultivar ou material, origem do lote e finalidade de utilização.",
            ],
          ].map(([titulo, texto]) => (
            <article
              key={titulo}
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
            >
              <h3 className="font-bold">{titulo}</h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                {texto}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-stone-200 bg-stone-50 p-7">
          <h3 className="text-xl font-bold">
            Certificação e comercialização
          </h3>

          <p className="mt-3 max-w-4xl leading-7 text-stone-700">
            Para produção comercial, a utilização de semente de qualidade deve
            estar associada às normas nacionais aplicáveis à produção e
            comercialização de sementes. O objectivo é garantir identidade,
            qualidade física, germinação e sanidade compatíveis com a categoria
            da semente.
          </p>
        </div>
      </section>

      <section className="bg-emerald-950 py-12 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-300">
            06 · Fixação biológica de nitrogénio
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Rhizobium e inoculação
          </h2>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <p className="leading-8 text-emerald-50">
                O feijoeiro pode estabelecer associação simbiótica com bactérias
                do grupo dos rizóbios, formando nódulos nas raízes onde ocorre
                fixação biológica de nitrogénio. A eficiência desta associação
                depende do genótipo, da estirpe bacteriana, do solo, do fósforo,
                da acidez, da disponibilidade de água e de outros factores.
              </p>

              <p className="mt-5 leading-8 text-emerald-50">
                Em Angola, esta área está a receber investigação. Um estudo
                publicado em 2026 avaliou as variedades Catarina e Manteiga em
                Mbave, Chicala-Choloanga, utilizando a estirpe HCC23 de
                Rhizobium. A investigação encontrou maior nodulação em Catarina
                sob inoculação com HCC23, mas os resultados devem ser
                interpretados como resultados experimentais locais, e não como
                uma recomendação universal para Angola.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-800 bg-emerald-900 p-7">
              <h3 className="text-xl font-bold">Boas práticas</h3>

              <ul className="mt-5 space-y-4 text-sm leading-7 text-emerald-50">
                <li>
                  Avaliar a necessidade de inoculação em função do histórico da
                  área.
                </li>
                <li>
                  Utilizar inoculante compatível com a cultura e com estirpe
                  comprovadamente eficiente.
                </li>
                <li>
                  Evitar exposição do inoculante a calor excessivo e radiação
                  solar directa.
                </li>
                <li>
                  Respeitar as instruções técnicas do produto utilizado.
                </li>
                <li>
                  Avaliar a nodulação e o desenvolvimento da cultura após a
                  emergência.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
          07 · Manejo
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Sistema de produção
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {fases.map((item) => (
            <article
              key={item.fase}
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
            >
              <div className="flex gap-5">
                <div className="shrink-0 text-3xl font-bold text-emerald-700">
                  {item.fase}
                </div>

                <div>
                  <h3 className="text-lg font-bold">{item.titulo}</h3>
                  <p className="mt-3 leading-7 text-stone-600">
                    {item.texto}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            08 · Pragas
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Principais grupos a monitorizar
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {pragas.map((praga) => (
              <article
                key={praga.nome}
                className="rounded-2xl border border-stone-200 bg-stone-50 p-7"
              >
                <h3 className="text-xl font-bold">{praga.nome}</h3>

                <p className="mt-1 text-sm italic text-emerald-700">
                  {praga.nomeCientifico}
                </p>

                <div className="mt-5">
                  <p className="text-sm font-semibold uppercase tracking-wide text-stone-500">
                    Danos
                  </p>

                  <p className="mt-2 leading-7 text-stone-700">
                    {praga.dano}
                  </p>
                </div>

                <div className="mt-5">
                  <p className="text-sm font-semibold uppercase tracking-wide text-stone-500">
                    Manejo
                  </p>

                  <p className="mt-2 leading-7 text-stone-700">
                    {praga.manejo}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            09 · Doenças
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Fitossanidade do feijoeiro
          </h2>

          <div className="mt-8 overflow-hidden rounded-2xl border border-stone-200 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[850px] text-left">
                <thead className="bg-stone-900 text-white">
                  <tr>
                    <th className="px-5 py-4">Doença</th>
                    <th className="px-5 py-4">Agente</th>
                    <th className="px-5 py-4">Sintomas</th>
                    <th className="px-5 py-4">Prevenção e manejo</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-stone-200">
                  {doencas.map((doenca) => (
                    <tr key={doenca.nome} className="align-top">
                      <td className="px-5 py-5 font-bold">
                        {doenca.nome}
                      </td>

                      <td className="px-5 py-5 text-sm italic text-stone-600">
                        {doenca.agente}
                      </td>

                      <td className="px-5 py-5 text-sm leading-6 text-stone-700">
                        {doenca.sintomas}
                      </td>

                      <td className="px-5 py-5 text-sm leading-6 text-stone-700">
                        {doenca.prevencao}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              10 · Colheita
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Colheita e pós-colheita
            </h2>

            <div className="mt-6 space-y-5 text-stone-700">
              <p className="leading-7">
                Para feijão destinado a grão seco, a colheita deve considerar
                a maturação das vagens e o teor de humidade dos grãos. A
                colheita demasiado precoce aumenta o custo e pode resultar em
                grãos imaturos; demasiado tardia pode aumentar perdas por
                debulha natural, chuva ou ataque de pragas.
              </p>

              <p className="leading-7">
                Depois da colheita, o feijão deve ser limpo, seco e armazenado
                em condições que reduzam humidade, infestação por insectos e
                contaminação. O controlo do gorgulho é especialmente importante
                na conservação de grãos.
              </p>

              <p className="leading-7">
                O armazenamento deve proteger o produto da humidade e permitir
                monitorização periódica. Grãos destinados a semente exigem
                cuidados adicionais para preservar germinação e identidade do
                lote.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-bold">
              Indicadores para avaliar um lote
            </h3>

            <div className="mt-6 space-y-4">
              {[
                "Humidade adequada para armazenamento",
                "Ausência de insectos vivos",
                "Baixa presença de grãos partidos",
                "Ausência de sinais visíveis de fungos",
                "Cor e aspecto compatíveis com o material",
                "Boa qualidade física",
                "Identificação da origem do lote",
              ].map((item) => (
                <div
                  key={item}
                  className="border-b border-stone-100 pb-4 text-sm text-stone-700 last:border-0"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-300">
            11 · Galeria
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Feijão e agricultura angolana
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {imagens.map((imagem) => (
              <article
                key={imagem.src}
                className="overflow-hidden rounded-2xl border border-stone-700 bg-stone-800"
              >
                <a
                  href={imagem.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={imagem.src}
                    alt={imagem.alt}
                    className="h-72 w-full object-cover transition duration-300 hover:scale-[1.02]"
                  />
                </a>

                <div className="p-5">
                  <p className="font-semibold">{imagem.legenda}</p>

                  <p className="mt-2 text-sm leading-6 text-stone-300">
                    {imagem.fonte}
                  </p>

                  <a
                    href={imagem.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-sm font-medium text-emerald-300 hover:underline"
                  >
                    Abrir fonte da fotografia →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
          12 · Consulta por província
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Informação territorial
        </h2>

        <div className="mt-8 grid gap-8 lg:grid-cols-[320px_1fr]">
          <div>
            <label
              htmlFor="provincia"
              className="text-sm font-semibold text-stone-700"
            >
              Seleccionar província
            </label>

            <select
              id="provincia"
              value={provincia}
              onChange={(event) => setProvincia(event.target.value)}
              className="mt-2 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-600"
            >
              {provincias.map((item) => (
                <option key={item.nome} value={item.nome}>
                  {item.nome}
                </option>
              ))}
            </select>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-7">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              {provinciaAtual.regiao}
            </p>

            <h3 className="mt-2 text-2xl font-bold text-emerald-950">
              Feijão em {provinciaAtual.nome}
            </h3>

            <p className="mt-4 max-w-3xl leading-7 text-emerald-900">
              {provinciaAtual.observacao}
            </p>

            <p className="mt-4 text-sm leading-6 text-emerald-800">
              Esta ferramenta não classifica automaticamente a província como
              “apta” ou “não apta”. A aptidão agrícola precisa de informação
              edafoclimática e agronómica suficientemente detalhada.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            13 · Investigação
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            O que a investigação angolana está a estudar
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-bold">
                Variedades melhoradas
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                O workshop realizado pelo IIA e PDAC no Huambo em 2026 destacou
                novas variedades melhoradas e tecnologias de produção do
                feijão comum.
              </p>
            </article>

            <article className="rounded-2xl border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-bold">
                Fixação biológica
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                O estudo realizado em Chicala-Choloanga demonstra o interesse
                científico em estirpes de Rhizobium adaptadas ou avaliadas em
                condições locais.
              </p>
            </article>

            <article className="rounded-2xl border border-stone-200 bg-stone-50 p-7">
              <h3 className="text-xl font-bold">
                Semente de qualidade
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                A disponibilidade e distribuição de semente de qualidade são
                questões centrais para elevar a produtividade e a
                competitividade da cadeia do feijão.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
          14 · Fontes
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Fontes técnicas e científicas
        </h2>

        <div className="mt-8 space-y-4">
          {fontes.map((fonte) => (
            <a
              key={fonte.titulo}
              href={fonte.href}
              target="_blank"
              rel="noreferrer"
              className="block rounded-2xl border border-stone-200 bg-white p-6 transition hover:border-emerald-400 hover:shadow-sm"
            >
              <h3 className="font-bold text-emerald-800">
                {fonte.titulo}
              </h3>

              <p className="mt-2 max-w-4xl text-sm leading-7 text-stone-600">
                {fonte.descricao}
              </p>

              <span className="mt-3 inline-block text-sm font-medium text-emerald-700">
                Abrir fonte →
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-stone-500">
                Navegação da agricultura
              </p>

              <p className="mt-1 font-bold">
                Continuar a biblioteca de culturas da AGROINOVA ANGOLA
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/agricultura"
                className="rounded-xl border border-stone-300 bg-white px-5 py-3 text-sm font-semibold hover:border-emerald-500"
              >
                Todas as culturas
              </Link>

              <Link
                href="/agricultura/soja"
                className="rounded-xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-800"
              >
                Próxima: Soja
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-950 text-emerald-100">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm leading-7 lg:px-8">
          <strong className="text-white">Nota de integridade da AGROINOVA:</strong>{" "}
          os conteúdos apresentados distinguem informação oficial, resultados
          de investigação, materiais de germoplasma e referências agronómicas
          internacionais. Dados experimentais obtidos numa província ou país
          não são automaticamente transformados em recomendações para todo o
          território angolano.
        </div>
      </section>
    </main>
  );
}