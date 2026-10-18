
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Grupo =
  | "Todas"
  | "Cereais"
  | "Raízes e tubérculos"
  | "Leguminosas"
  | "Hortícolas"
  | "Fruteiras"
  | "Culturas industriais";

type Cultura = {
  slug: string;
  nome: string;
  grupo: Exclude<Grupo, "Todas">;
  descricao: string;
  solo: string;
  ciclo: string;
  importancia: string;
  tags: string[];
  destaque?: boolean;
  modal?: boolean;
};

const grupos: Grupo[] = [
  "Todas",
  "Cereais",
  "Raízes e tubérculos",
  "Leguminosas",
  "Hortícolas",
  "Fruteiras",
  "Culturas industriais",
];

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

const culturas: Cultura[] = [
  {
    slug: "milho",
    nome: "Milho",
    grupo: "Cereais",
    descricao:
      "Cereal fundamental para a alimentação humana, a produção de rações e a diversificação dos sistemas agrícolas angolanos.",
    solo:
      "Prefere solos profundos, férteis e bem drenados. A preparação do terreno e a fertilidade devem ser ajustadas às condições locais.",
    ciclo:
      "Depende da variedade, da temperatura, da época de sementeira e da disponibilidade de água.",
    importancia:
      "Contribui para a segurança alimentar, o rendimento das famílias agrícolas e o abastecimento dos mercados.",
    tags: ["cereal", "alimentação", "produção vegetal"],
  },
  {
    slug: "mandioca",
    nome: "Mandioca",
    grupo: "Raízes e tubérculos",
    descricao:
      "Cultura alimentar importante pela capacidade de adaptação a diferentes condições de cultivo e pela utilização das suas raízes e folhas.",
    solo:
      "Desenvolve-se melhor em solos soltos, profundos e bem drenados, evitando terrenos sujeitos a encharcamento.",
    ciclo:
      "Varia com a variedade, as condições ambientais e o destino da produção.",
    importancia:
      "Contribui para a alimentação, o processamento agroalimentar e a diversificação dos rendimentos rurais.",
    tags: ["raiz", "segurança alimentar", "processamento"],
  },
  {
    slug: "feijao",
    nome: "Feijão",
    grupo: "Leguminosas",
    descricao:
      "Leguminosa alimentar que fornece proteína vegetal e pode integrar sistemas de rotação e consociação de culturas.",
    solo:
      "Prefere solos bem drenados, com estrutura adequada e fertilidade equilibrada.",
    ciclo:
      "Depende da espécie, da variedade e das condições de produção.",
    importancia:
      "É importante para a alimentação, a comercialização e a diversificação dos sistemas agrícolas.",
    tags: ["leguminosa", "proteína", "rotação"],
  },
  {
    slug: "batata-doce",
    nome: "Batata-doce",
    grupo: "Raízes e tubérculos",
    descricao:
      "Cultura de raízes tuberosas utilizada na alimentação humana e em diferentes sistemas de produção familiar.",
    solo:
      "Prefere solos leves ou de textura média, profundos e bem drenados.",
    ciclo:
      "Varia conforme o material de plantação, a variedade e o ambiente de cultivo.",
    importancia:
      "Contribui para a diversidade alimentar e o abastecimento dos mercados locais.",
    tags: ["tubérculo", "alimentação", "agricultura familiar"],
  },
  {
    slug: "batata",
    nome: "Batata",
    grupo: "Raízes e tubérculos",
    descricao:
      "Cultura alimentar que requer atenção à qualidade do material de plantação, à água e à sanidade das plantas.",
    solo:
      "Prefere solos bem drenados, friáveis e com boa disponibilidade de matéria orgânica.",
    ciclo:
      "Depende da variedade, da altitude, da temperatura e do maneio da cultura.",
    importancia:
      "Tem interesse alimentar e comercial, podendo abastecer mercados e unidades de restauração.",
    tags: ["tubérculo", "mercado", "maneio"],
  },
  {
    slug: "tomate",
    nome: "Tomate",
    grupo: "Hortícolas",
    descricao:
      "Hortícola de elevado interesse alimentar e comercial, utilizado fresco e em diferentes formas de processamento.",
    solo:
      "Prefere solos férteis, bem drenados e com boa capacidade de retenção de água sem encharcamento.",
    ciclo:
      "Depende da variedade, do sistema de produção e das condições climáticas.",
    importancia:
      "É relevante para o abastecimento alimentar, o rendimento dos produtores e o comércio hortícola.",
    tags: ["hortícola", "mercado", "produção vegetal"],
  },
  {
    slug: "cebola",
    nome: "Cebola",
    grupo: "Hortícolas",
    descricao:
      "Hortícola utilizada como alimento e condimento, com procura regular nos mercados.",
    solo:
      "Prefere solos soltos, férteis e bem drenados, com estrutura adequada ao desenvolvimento dos bolbos.",
    ciclo:
      "Varia segundo a variedade, o clima e as práticas de cultivo.",
    importancia:
      "Contribui para a diversificação da produção e para o abastecimento dos mercados.",
    tags: ["hortícola", "bolbo", "comercialização"],
  },
  {
    slug: "repolho",
    nome: "Repolho",
    grupo: "Hortícolas",
    descricao:
      "Hortícola alimentar de cabeça compacta, importante para o consumo fresco e a comercialização.",
    solo:
      "Solos férteis, profundos e bem drenados, com matéria orgânica e pH adequado. A fertilidade deve ser avaliada antes da aplicação de correctivos.",
    ciclo:
      "Variável conforme a variedade, a temperatura e as condições de cultivo.",
    importancia:
      "Contribui para a alimentação humana, o abastecimento dos mercados e a diversificação da produção hortícola.",
    destaque: true,
    tags: ["hortícola", "repolho", "produção vegetal", "mercado"],
  },
  {
    slug: "cenoura",
    nome: "Cenoura",
    grupo: "Hortícolas",
    descricao:
      "Hortícola de raiz com interesse nutricional e comercial, adequada a sistemas de produção com bom controlo da água e do solo.",
    solo:
      "Prefere solos profundos, soltos, sem pedras e bem drenados, para permitir o desenvolvimento regular das raízes.",
    ciclo:
      "Varia com a variedade, a temperatura e as condições de produção.",
    importancia:
      "Contribui para a diversificação alimentar e para a oferta de produtos hortícolas.",
    tags: ["hortícola", "raiz", "nutrição"],
  },
  {
    slug: "alface",
    nome: "Alface",
    grupo: "Hortícolas",
    descricao:
      "Hortícola de ciclo geralmente curto, comercializada sobretudo para consumo fresco.",
    solo:
      "Prefere solos férteis, com boa drenagem e humidade adequada ao desenvolvimento das folhas.",
    ciclo:
      "Depende da variedade, da temperatura e do sistema de produção.",
    importancia:
      "Pode permitir ciclos de produção curtos e abastecimento frequente dos mercados.",
    tags: ["hortícola", "folhosa", "consumo fresco"],
  },
  {
    slug: "banana",
    nome: "Banana",
    grupo: "Fruteiras",
    descricao:
      "Fruteira tropical de interesse alimentar e comercial, que requer disponibilidade de água e condições adequadas de cultivo.",
    solo:
      "Prefere solos profundos, férteis e bem drenados, com matéria orgânica e disponibilidade de água.",
    ciclo:
      "O tempo até à colheita depende da variedade, do material de plantação e das condições ambientais.",
    importancia:
      "Contribui para a alimentação, a geração de rendimento e a oferta de fruta nos mercados.",
    tags: ["fruteira", "fruta", "comercialização"],
  },
  {
    slug: "cafe",
    nome: "Café",
    grupo: "Culturas industriais",
    descricao:
      "Cultura de interesse económico e histórico em Angola, com potencial para produção, transformação e valorização comercial.",
    solo:
      "As necessidades variam entre espécies e variedades. É importante avaliar drenagem, fertilidade, altitude e condições climáticas.",
    ciclo:
      "É uma cultura perene; a entrada em produção depende do material vegetal e do sistema de cultivo.",
    importancia:
      "Pode contribuir para o rendimento dos produtores, a transformação agroindustrial e a valorização da produção nacional.",
    tags: ["café", "cultura industrial", "agroindústria"],
  },
  {
    slug: "amendoim",
    nome: "Amendoim",
    grupo: "Leguminosas",
    descricao:
      "Leguminosa utilizada na alimentação e no processamento, com interesse em sistemas agrícolas familiares.",
    solo:
      "Prefere solos leves, bem drenados e sem compactação excessiva.",
    ciclo:
      "Varia com a variedade, a época de sementeira e as condições ambientais.",
    importancia:
      "Contribui para a alimentação, o comércio e a diversificação da produção agrícola.",
    tags: ["leguminosa", "óleo", "alimentação"],
  },
  {
    slug: "sorgo",
    nome: "Sorgo",
    grupo: "Cereais",
    descricao:
      "Cereal de interesse para ambientes onde a disponibilidade de água é um factor limitante. A escolha da variedade deve considerar a duração da estação chuvosa e o destino da produção.",
    solo:
      "Adapta-se a diferentes tipos de solo, desde que exista drenagem adequada. A correcção da fertilidade deve basear-se, sempre que possível, numa análise do solo.",
    ciclo:
      "O ciclo varia com a variedade e as condições ambientais. Existem materiais de ciclo mais curto e outros de ciclo mais longo.",
    importancia:
      "Pode ser utilizado na alimentação humana, na alimentação animal e na diversificação dos sistemas de produção. A sua tolerância relativa à seca não dispensa o maneio adequado.",
    modal: true,
    tags: ["cereal", "seca", "alimentação animal", "produção vegetal"],
  },
];

export default function AgriculturaPage() {
  const [grupoAtivo, setGrupoAtivo] = useState<Grupo>("Todas");
  const [busca, setBusca] = useState("");
  const [provinciaSelecionada, setProvinciaSelecionada] = useState("Huambo");
  const [culturaModal, setCulturaModal] = useState<Cultura | null>(null);

  const culturasFiltradas = useMemo(() => {
    const termo = busca.trim().toLocaleLowerCase("pt-PT");

    return culturas.filter((cultura) => {
      const correspondeGrupo =
        grupoAtivo === "Todas" || cultura.grupo === grupoAtivo;

      const textoPesquisa = [
        cultura.nome,
        cultura.grupo,
        cultura.descricao,
        cultura.importancia,
        ...cultura.tags,
      ]
        .join(" ")
        .toLocaleLowerCase("pt-PT");

      return correspondeGrupo && (!termo || textoPesquisa.includes(termo));
    });
  }, [grupoAtivo, busca]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-emerald-950 via-green-800 to-emerald-600">
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-lime-300 blur-3xl" />
          <div className="absolute -bottom-32 left-10 h-80 w-80 rounded-full bg-emerald-300 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:px-10">
          <div>
            <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-50">
              AGROINOVA ANGOLA · Conhecimento agrícola
            </span>

            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Agricultura de Angola: conhecimento para produzir melhor
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-emerald-50 sm:text-lg">
              Explore culturas agrícolas, consulte informações técnicas e
              descubra conteúdos de apoio à produção vegetal, adaptados à
              diversidade dos sistemas agrícolas angolanos.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#catalogo-culturas"
                className="rounded-xl bg-white px-6 py-3.5 text-sm font-extrabold text-emerald-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-50"
              >
                Explorar culturas
              </a>

              <Link
                href="/investigacao"
                className="rounded-xl border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-white/20"
              >
                Investigação agrícola
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl border border-white/20 bg-white/10 p-5 text-white shadow-xl backdrop-blur-sm sm:p-6">
              <p className="text-sm font-semibold text-emerald-100">
                Catálogo
              </p>
              <p className="mt-3 text-4xl font-black">{culturas.length}</p>
              <p className="mt-2 text-sm text-emerald-50">
                culturas agrícolas
              </p>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-5 text-white shadow-xl backdrop-blur-sm sm:p-6">
              <p className="text-sm font-semibold text-emerald-100">
                Organização
              </p>
              <p className="mt-3 text-4xl font-black">6</p>
              <p className="mt-2 text-sm text-emerald-50">
                grupos de culturas
              </p>
            </div>

            <div className="col-span-2 rounded-3xl border border-white/20 bg-white/10 p-5 text-white shadow-xl backdrop-blur-sm sm:p-6">
              <p className="text-sm font-semibold text-emerald-100">
                Objectivo
              </p>
              <p className="mt-2 text-xl font-extrabold sm:text-2xl">
                Conhecimento, tecnologia e inovação ao serviço do campo
                angolano.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        <div className="grid gap-4 rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm sm:grid-cols-2 sm:p-6">
          <div>
            <label
              htmlFor="provincia-agricultura"
              className="mb-2 block text-sm font-extrabold text-slate-800"
            >
              Província de interesse
            </label>

            <select
              id="provincia-agricultura"
              value={provinciaSelecionada}
              onChange={(event) => setProvinciaSelecionada(event.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            >
              {provincias.map((provincia) => (
                <option key={provincia} value={provincia}>
                  {provincia}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-end">
            <div className="w-full rounded-xl bg-emerald-50 px-4 py-3">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Área seleccionada
              </p>
              <p className="mt-1 text-lg font-black text-emerald-950">
                {provinciaSelecionada}
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-600">
                A selecção identifica a província de interesse. Não representa
                uma recomendação agronómica específica para a região.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="catalogo-culturas"
        className="mx-auto max-w-7xl scroll-mt-6 px-5 pb-16 sm:px-8 lg:px-10"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-emerald-700">
              Biblioteca agrícola
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Catálogo de culturas
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Pesquise culturas, filtre por grupo e consulte informação
              introdutória sobre as respectivas condições de produção.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-white px-5 py-3 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Resultados
            </p>
            <p className="mt-1 text-2xl font-black text-emerald-800">
              {culturasFiltradas.length}
              <span className="ml-2 text-sm font-semibold text-slate-500">
                culturas
              </span>
            </p>
          </div>
        </div>

        <div className="mt-7 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <label
            htmlFor="pesquisa-culturas"
            className="mb-2 block text-sm font-extrabold text-slate-800"
          >
            Pesquisar cultura
          </label>

          <input
            id="pesquisa-culturas"
            type="search"
            value={busca}
            onChange={(event) => setBusca(event.target.value)}
            placeholder="Ex.: milho, repolho, cereal, hortícola..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
          />

          <div className="mt-4 flex flex-wrap gap-2">
            {grupos.map((grupo) => {
              const activo = grupoAtivo === grupo;

              return (
                <button
                  key={grupo}
                  type="button"
                  onClick={() => setGrupoAtivo(grupo)}
                  className={`rounded-full border px-4 py-2.5 text-sm font-bold transition ${
                    activo
                      ? "border-emerald-700 bg-emerald-700 text-white shadow-md"
                      : "border-slate-200 bg-white text-slate-600 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-900"
                  }`}
                >
                  {grupo}
                </button>
              );
            })}
          </div>
        </div>

        {culturasFiltradas.length > 0 ? (
          <div className="mt-7 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {culturasFiltradas.map((cultura) => (
              <article
                key={cultura.slug}
                className={`group flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  cultura.destaque
                    ? "border-emerald-500 ring-2 ring-emerald-100"
                    : "border-slate-200 hover:border-emerald-300"
                }`}
              >
                <div className="h-2 bg-gradient-to-r from-emerald-700 to-green-400" />

                {cultura.destaque && (
                  <div className="border-b border-emerald-100 bg-emerald-50 px-5 py-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                      Cultura em destaque
                    </span>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-extrabold text-emerald-800">
                      {cultura.grupo}
                    </span>

                    <span className="text-xs font-semibold text-slate-400">
                      AGROINOVA
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-black text-slate-950 transition group-hover:text-emerald-800">
                    {cultura.nome}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                    {cultura.descricao}
                  </p>

                  <div className="mt-5 rounded-xl bg-slate-50 p-4">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                      Importância agrícola
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      {cultura.importancia}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {cultura.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {cultura.modal ? (
                    <button
                      type="button"
                      onClick={() => setCulturaModal(cultura)}
                      className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-4 py-3 text-sm font-extrabold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-200"
                    >
                      Consultar informação
                      <span className="ml-2">+</span>
                    </button>
                  ) : (
                    <Link
                      href={`/agricultura/${cultura.slug}`}
                      className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-emerald-700 px-4 py-3 text-sm font-extrabold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-emerald-900 focus:outline-none focus:ring-4 focus:ring-emerald-200"
                    >
                      Ver ficha técnica
                      <span className="ml-2">→</span>
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-7 rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
            <h3 className="text-xl font-black text-slate-800">
              Nenhuma cultura encontrada
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Altera o termo de pesquisa ou selecciona outro grupo de culturas.
            </p>
            <button
              type="button"
              onClick={() => {
                setBusca("");
                setGrupoAtivo("Todas");
              }}
              className="mt-5 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-emerald-900"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </section>

      <section className="border-y border-emerald-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-3 lg:px-10">
          <div>
            <div className="mb-4 h-1.5 w-14 rounded-full bg-emerald-600" />
            <h2 className="text-xl font-black text-slate-950">
              Produção vegetal
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Informação de apoio sobre culturas, práticas agrícolas, solo,
              água e gestão da produção.
            </p>
          </div>

          <div>
            <div className="mb-4 h-1.5 w-14 rounded-full bg-lime-500" />
            <h2 className="text-xl font-black text-slate-950">
              Conhecimento técnico
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A tomada de decisão deve considerar o contexto local, a variedade,
              as condições climáticas e a orientação técnica disponível.
            </p>
          </div>

          <div>
            <div className="mb-4 h-1.5 w-14 rounded-full bg-teal-500" />
            <h2 className="text-xl font-black text-slate-950">
              Investigação e inovação
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A investigação agropecuária contribui para melhorar as práticas,
              a produtividade e a sustentabilidade dos sistemas agrícolas.
            </p>
            <Link
              href="/investigacao"
              className="mt-4 inline-flex font-extrabold text-emerald-800 hover:text-emerald-950"
            >
              Explorar investigação →
            </Link>
          </div>
        </div>
      </section>

      {culturaModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
          onClick={() => setCulturaModal(null)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-modal-cultura"
            onClick={(event) => event.stopPropagation()}
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
          >
            <header className="bg-gradient-to-r from-emerald-950 via-green-800 to-emerald-600 p-6 text-white sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-100">
                    AGROINOVA ANGOLA · Agricultura
                  </p>
                  <h2
                    id="titulo-modal-cultura"
                    className="mt-3 text-3xl font-black sm:text-4xl"
                  >
                    {culturaModal.nome}
                  </h2>
                  <p className="mt-2 text-emerald-50">
                    {culturaModal.grupo}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setCulturaModal(null)}
                  aria-label="Fechar modal"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-2xl text-white transition hover:bg-white/30"
                >
                  ×
                </button>
              </div>
            </header>

            <div className="space-y-5 p-6 sm:p-8">
              <div>
                <h3 className="text-lg font-black text-slate-950">
                  Caracterização da cultura
                </h3>
                <p className="mt-2 leading-7 text-slate-700">
                  {culturaModal.descricao}
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                <h3 className="font-extrabold text-emerald-950">
                  Condições de solo
                </h3>
                <p className="mt-2 leading-7 text-slate-700">
                  {culturaModal.solo}
                </p>
              </div>

              <div className="rounded-2xl border border-sky-100 bg-sky-50 p-5">
                <h3 className="font-extrabold text-sky-950">
                  Ciclo de produção
                </h3>
                <p className="mt-2 leading-7 text-slate-700">
                  {culturaModal.ciclo}
                </p>
              </div>

              <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
                <h3 className="font-extrabold text-amber-950">
                  Importância agrícola
                </h3>
                <p className="mt-2 leading-7 text-slate-700">
                  {culturaModal.importancia}
                </p>
              </div>

              <div>
                <h3 className="font-extrabold text-slate-900">
                  Temas relacionados
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {culturaModal.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-emerald-200 bg-white px-3 py-1.5 text-sm font-semibold text-emerald-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-sm leading-6 text-slate-500">
                A escolha da variedade, a época de sementeira, a fertilização
                e as restantes práticas devem ser ajustadas às condições locais
                e, sempre que possível, acompanhadas por um técnico agrícola.
                A informação apresentada é introdutória e não substitui uma
                recomendação técnica baseada na análise do terreno.
              </p>

              <button
                type="button"
                onClick={() => setCulturaModal(null)}
                className="w-full rounded-xl bg-emerald-700 px-5 py-3.5 font-extrabold text-white transition hover:bg-emerald-900 focus:outline-none focus:ring-4 focus:ring-emerald-200"
              >
                Fechar informação
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
