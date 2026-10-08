"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Provincia = {
  nome: string;
  efetivo: number | null;
  destaque: string;
};

const provincias: Provincia[] = [
  {
    nome: "Namibe",
    efetivo: 86344,
    destaque: "Maior efectivo ovino identificado no RAPP 2019/2020.",
  },
  {
    nome: "Uíge",
    efetivo: 35692,
    destaque: "Segundo maior efectivo ovino identificado no RAPP 2019/2020.",
  },
  {
    nome: "Cuanza Sul",
    efetivo: 35118,
    destaque: "Terceiro maior efectivo ovino identificado no RAPP 2019/2020.",
  },
  {
    nome: "Bié",
    efetivo: 20958,
    destaque: "Importante efectivo ovino no levantamento estrutural.",
  },
  {
    nome: "Cunene",
    efetivo: 23470,
    destaque: "Sistema pecuário condicionado pela sazonalidade e disponibilidade de pastagem.",
  },
  {
    nome: "Huíla",
    efetivo: 24793,
    destaque: "Região com actividade pecuária diversificada.",
  },
  {
    nome: "Malanje",
    efetivo: 16988,
    destaque: "Presença de ovinos nas explorações familiares.",
  },
  {
    nome: "Huambo",
    efetivo: 14348,
    destaque: "Importância para sistemas familiares e mistos.",
  },
  {
    nome: "Zaire",
    efetivo: 14490,
    destaque: "Presença de ovinos nas explorações familiares.",
  },
  {
    nome: "Benguela",
    efetivo: 11975,
    destaque: "Sistema com influência das condições semiáridas em algumas áreas.",
  },
  {
    nome: "Cabinda",
    efetivo: 11759,
    destaque: "Sistema condicionado pelo clima húmido e disponibilidade de forragem.",
  },
  {
    nome: "Moxico",
    efetivo: 11131,
    destaque: "Importância do pastoreio e dos recursos naturais.",
  },
  {
    nome: "Lunda Norte",
    efetivo: 6703,
    destaque: "Efectivo estrutural identificado pelo RAPP.",
  },
  {
    nome: "Lunda Sul",
    efetivo: 5861,
    destaque: "Efectivo estrutural identificado pelo RAPP.",
  },
  {
    nome: "Cuanza Norte",
    efetivo: 1613,
    destaque: "Efectivo estrutural identificado pelo RAPP.",
  },
  {
    nome: "Luanda",
    efetivo: 1882,
    destaque: "Efectivo estrutural registado no levantamento familiar.",
  },
  {
    nome: "Cuando Cubango",
    efetivo: 1039,
    destaque: "Dados referentes à configuração territorial anterior à divisão administrativa de 2025.",
  },
  {
    nome: "Bengo",
    efetivo: 1043,
    destaque: "Efectivo estrutural registado no RAPP.",
  },
];

const imagens = [
  {
    src: "https://agroanuncios.ao/oc-content/uploads/15/2498.jpg",
    titulo: "Ovinos Dorper em Angola",
    descricao:
      "Imagem de um grupo de ovinos Dorper publicada numa exploração localizada em Luanda.",
    fonte: "AgroAnúncios Angola",
    url: "https://agroanuncios.ao/animais_5/caprinocultura_1/vendo-ovelhas_i1505",
  },
  {
    src: "https://agroanuncios.ao/oc-content/uploads/16/2770.jpg",
    titulo: "Ovinos Dorper",
    descricao:
      "Exemplo de animais da raça Dorper comercializados em Angola.",
    fonte: "AgroAnúncios Angola",
    url: "https://agroanuncios.ao/animais_5/caprinocultura_1/tres-ovinos-dorper-puros_i1657",
  },
  {
    src: "https://agroanuncios.ao/oc-content/uploads/14/2403.jpg",
    titulo: "Ovinos F1 de Dorper",
    descricao:
      "Grupo de ovinos anunciado em Luanda-Funda, mostrando um sistema de criação em recinto.",
    fonte: "AgroAnúncios Angola",
    url: "https://agroanuncios.ao/animais_5/outros/ovelha-f1-de-dorper_i1448",
  },
];

export default function AlimentacaoOvinosPage() {
  const [provinciaSelecionada, setProvinciaSelecionada] =
    useState("Todas");

  const provinciasFiltradas = useMemo(() => {
    if (provinciaSelecionada === "Todas") {
      return provincias;
    }

    return provincias.filter(
      (provincia) => provincia.nome === provinciaSelecionada
    );
  }, [provinciaSelecionada]);

  const totalRapp = 325207;

  const percentNamibe = ((86344 / totalRapp) * 100).toFixed(1);
  const percentUige = ((35692 / totalRapp) * 100).toFixed(1);
  const percentCuanzaSul = ((35118 / totalRapp) * 100).toFixed(1);

  return (
    <main className="min-h-screen bg-[#f3f6f1] text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#103b27] text-white">
        <div className="absolute inset-0">
          <img
            src={imagens[0].src}
            alt="Ovinos Dorper em Angola"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#082519]/95 via-[#103b27]/85 to-[#103b27]/55" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200">
              AGROINOVA ANGOLA • Pecuária • Ovinos
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Alimentação dos Ovinos
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-emerald-50 sm:text-xl">
              Guia técnico sobre alimentação, nutrição, pastagens, forragens,
              água, minerais, suplementação e gestão alimentar dos ovinos,
              adaptado às diferentes realidades agroecológicas de Angola.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
                Pastoreio
              </span>

              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
                Forragens
              </span>

              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
                Suplementação
              </span>

              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
                Água
              </span>

              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
                Realidade angolana
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-6 py-4 text-sm lg:px-8">
          <Link
            href="/pecuaria"
            className="font-medium text-emerald-800 hover:text-emerald-950"
          >
            Pecuária
          </Link>

          <span className="text-slate-400">/</span>

          <Link
            href="/pecuaria/ovinos/orientacoes"
            className="font-medium text-emerald-800 hover:text-emerald-950"
          >
            Ovinos
          </Link>

          <span className="text-slate-400">/</span>

          <span className="text-slate-600">Alimentação</span>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              Fundamentos
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Alimentar não é apenas dar comida
            </h2>

            <div className="mt-6 space-y-5 text-justify text-[17px] leading-8 text-slate-700">
              <p>
                A alimentação é um dos principais factores que determinam o
                crescimento, a reprodução, a resistência às doenças, a
                sobrevivência dos cordeiros e o rendimento económico de uma
                exploração ovina. Um animal pode ter acesso permanente a
                pastagem e, ainda assim, apresentar baixo desempenho se a
                quantidade ou a qualidade dos nutrientes disponíveis forem
                insuficientes.
              </p>

              <p>
                O ovino é um ruminante. O seu sistema digestivo permite
                aproveitar alimentos fibrosos que seriam pouco aproveitados por
                animais monogástricos. No rúmen, uma comunidade de
                microrganismos transforma parte da fibra vegetal em compostos
                que podem ser utilizados pelo animal como fonte de energia.
                Por isso, a alimentação dos ovinos deve ser pensada sobretudo
                em torno da qualidade e disponibilidade da forragem.
              </p>

              <p>
                Em Angola, esta questão assume uma importância particular
                porque existem grandes diferenças entre regiões. Uma exploração
                no Namibe enfrenta uma disponibilidade de água e vegetação
                diferente de uma exploração no Uíge. O mesmo acontece entre
                zonas do Cuanza Sul, Huíla, Cunene, Huambo, Bié ou Moxico.
                Consequentemente, não existe uma única dieta que possa ser
                apresentada como correcta para todos os sistemas de produção
                ovina do país.
              </p>

              <p>
                A estratégia alimentar deve considerar a idade, peso, estado
                corporal, sexo, gestação, lactação, crescimento, actividade
                reprodutiva, qualidade das pastagens, disponibilidade de água,
                estação do ano e objectivo produtivo. A FAO destaca que a
                quantidade e qualidade do alimento volumoso determinam grande
                parte da necessidade de suplementação dos pequenos ruminantes.
              </p>
            </div>
          </article>

          <aside className="rounded-3xl bg-[#123d29] p-7 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-200">
              Regra fundamental
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Primeiro avaliar a forragem
            </h3>

            <p className="mt-5 text-justify leading-7 text-emerald-50">
              Antes de aumentar concentrados ou suplementos, o produtor deve
              observar o que existe realmente no sistema: quantidade de
              pastagem, qualidade das plantas, estado corporal dos animais,
              disponibilidade de água e evolução do efectivo.
            </p>

            <div className="mt-7 border-t border-white/15 pt-6">
              <p className="text-sm text-emerald-200">Princípio técnico</p>

              <p className="mt-2 text-lg font-semibold">
                Volumoso de qualidade + água adequada + minerais + suplemento
                quando necessário.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* DADOS DE ANGOLA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              Ovinos em Angola
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              O que os dados nacionais mostram
            </h2>

            <p className="mt-5 text-justify text-lg leading-8 text-slate-600">
              Os dados devem ser interpretados de acordo com o ano e a fonte.
              O RAPP 2019/2020 registou 325.207 ovinos nas explorações
              agropecuárias familiares. O ICAPP 2024/2025 é actualmente uma
              fonte estatística mais recente para acompanhamento do sector,
              publicada pelo INE em Maio de 2026, mas o resumo público
              disponibilizado não apresenta no texto um novo quadro provincial
              detalhado de efectivos ovinos. Por isso, os números provinciais
              abaixo são apresentados explicitamente como dados do RAPP e não
              como uma estimativa de 2026.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-7">
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
                RAPP 2019/2020
              </p>

              <p className="mt-3 text-4xl font-bold text-slate-900">
                325.207
              </p>

              <p className="mt-2 text-slate-600">
                ovinos identificados nas explorações familiares.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-600">
                Produção nacional
              </p>

              <p className="mt-3 text-4xl font-bold text-slate-900">
                261 t
              </p>

              <p className="mt-2 text-slate-600">
                carne ovina produzida no I semestre de 2025.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-600">
                Variação
              </p>

              <p className="mt-3 text-4xl font-bold text-slate-900">
                -0,4%
              </p>

              <p className="mt-2 text-slate-600">
                comparação do I semestre de 2025 com o I semestre de 2024.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border-l-4 border-amber-500 bg-amber-50 p-6">
            <h3 className="font-bold text-amber-950">
              Nota importante sobre actualidade dos dados
            </h3>

            <p className="mt-2 text-justify leading-7 text-amber-900">
              O valor de 325.207 cabeças é um dado estrutural do RAPP
              2019/2020. Não deve ser apresentado no AGROINOVA como sendo o
              efectivo nacional de 2026. O valor de 261 toneladas é produção
              de carne ovina no primeiro semestre de 2025. São indicadores
              diferentes e não devem ser misturados.
            </p>
          </div>
        </div>
      </section>

      {/* PROVÍNCIAS */}
      <section className="bg-[#edf3ed] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
                Distribuição territorial
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Onde estavam concentrados os ovinos?
              </h2>

              <p className="mt-5 text-justify text-lg leading-8 text-slate-600">
                No RAPP 2019/2020, o Namibe apresentava o maior efectivo ovino
                entre as províncias então consideradas, seguido pelo Uíge e
                Cuanza Sul. Esta informação é particularmente importante para
                compreender que a produção ovina angolana ocorre em ambientes
                muito diferentes, desde áreas secas e semiáridas até regiões
                húmidas e de maior disponibilidade de biomassa.
              </p>
            </div>

            <div className="w-full lg:w-64">
              <label
                htmlFor="provincia"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Filtrar província
              </label>

              <select
                id="provincia"
                value={provinciaSelecionada}
                onChange={(event) =>
                  setProvinciaSelecionada(event.target.value)
                }
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-700"
              >
                <option value="Todas">Todas</option>

                {provincias.map((provincia) => (
                  <option key={provincia.nome} value={provincia.nome}>
                    {provincia.nome}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {provinciasFiltradas.map((provincia) => (
              <article
                key={provincia.nome}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-slate-900">
                    {provincia.nome}
                  </h3>

                  {provincia.efetivo !== null && (
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
                      RAPP
                    </span>
                  )}
                </div>

                <p className="mt-5 text-3xl font-bold text-emerald-800">
                  {provincia.efetivo !== null
                    ? provincia.efetivo.toLocaleString("pt-AO")
                    : "—"}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  cabeças identificadas
                </p>

                <p className="mt-4 text-justify text-sm leading-6 text-slate-600">
                  {provincia.destaque}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm leading-6 text-slate-600">
              <strong>Fonte:</strong> RAPP 2019/2020, INE. A configuração
              territorial utilizada no levantamento é anterior à criação das
              províncias de Cuando, Cubango, Icolo e Bengo e Moxico Leste.
              Portanto, os dados históricos não devem ser redistribuídos
              artificialmente pelas 21 províncias actuais.
            </p>
          </div>
        </div>
      </section>

      {/* TOP 3 */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-3xl bg-[#103b27] p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-200">
              1.º lugar no RAPP
            </p>

            <h3 className="mt-3 text-3xl font-bold">Namibe</h3>

            <p className="mt-4 text-4xl font-bold">86.344</p>

            <p className="mt-2 text-emerald-100">
              {percentNamibe}% do efectivo ovino familiar registado.
            </p>

            <p className="mt-5 text-justify leading-7 text-emerald-50">
              A elevada presença de ovinos no Namibe mostra a importância de
              sistemas capazes de utilizar recursos alimentares disponíveis em
              ambientes com limitações de água e de produção vegetal.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              2.º lugar no RAPP
            </p>

            <h3 className="mt-3 text-3xl font-bold text-slate-900">Uíge</h3>

            <p className="mt-4 text-4xl font-bold text-emerald-800">
              35.692
            </p>

            <p className="mt-2 text-slate-500">
              {percentUige}% do efectivo ovino familiar registado.
            </p>

            <p className="mt-5 text-justify leading-7 text-slate-600">
              A realidade do Uíge é diferente da do Namibe. A disponibilidade
              de vegetação, humidade, sistemas agrícolas e resíduos de
              culturas influencia a forma como os animais podem ser
              alimentados.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              3.º lugar no RAPP
            </p>

            <h3 className="mt-3 text-3xl font-bold text-slate-900">
              Cuanza Sul
            </h3>

            <p className="mt-4 text-4xl font-bold text-emerald-800">
              35.118
            </p>

            <p className="mt-2 text-slate-500">
              {percentCuanzaSul}% do efectivo ovino familiar registado.
            </p>

            <p className="mt-5 text-justify leading-7 text-slate-600">
              O Cuanza Sul combina diferentes ambientes agrícolas, permitindo
              estudar sistemas de alimentação baseados em pastagens, resíduos
              de culturas e suplementação estratégica.
            </p>
          </article>
        </div>
      </section>

      {/* IMAGENS */}
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-300">
              Realidade visual
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Ovinos criados em Angola
            </h2>

            <p className="mt-5 text-justify text-lg leading-8 text-slate-300">
              As imagens abaixo são exemplos reais publicados por uma
              plataforma agropecuária angolana. Não devem ser interpretadas
              como representação de todas as explorações do país, mas ajudam a
              aproximar o conteúdo técnico da realidade do mercado e da
              criação de ovinos em Angola.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {imagens.map((imagem) => (
              <article
                key={imagem.src}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
              >
                <a
                  href={imagem.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <img
                    src={imagem.src}
                    alt={imagem.titulo}
                    className="h-64 w-full object-cover transition duration-300 hover:scale-[1.02]"
                  />
                </a>

                <div className="p-6">
                  <h3 className="text-xl font-bold">{imagem.titulo}</h3>

                  <p className="mt-3 text-justify text-sm leading-6 text-slate-300">
                    {imagem.descricao}
                  </p>

                  <p className="mt-5 text-xs text-emerald-300">
                    Fonte: {imagem.fonte}
                  </p>

                  <a
                    href={imagem.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-sm font-semibold text-white underline decoration-emerald-400 underline-offset-4"
                  >
                    Ver publicação original
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NUTRIENTES */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            Nutrição
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            O que o ovino precisa obter da alimentação?
          </h2>

          <p className="mt-5 text-justify text-lg leading-8 text-slate-600">
            Uma alimentação adequada deve fornecer energia, proteína, fibra,
            minerais, vitaminas e água. A importância relativa de cada
            componente varia conforme a categoria animal e o momento produtivo.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              titulo: "Energia",
              texto:
                "Necessária para manutenção, movimento, crescimento, reprodução, gestação e produção de leite. A deficiência energética prolongada provoca perda de condição corporal e reduz o desempenho.",
            },
            {
              titulo: "Proteína",
              texto:
                "Participa da formação e renovação dos tecidos e é particularmente importante durante crescimento, gestação e lactação. A qualidade da forragem influencia fortemente a disponibilidade proteica.",
            },
            {
              titulo: "Fibra",
              texto:
                "A fibra é fundamental para o funcionamento do rúmen. Pastagens, feno e outros alimentos volumosos fornecem a estrutura fibrosa necessária à alimentação dos ruminantes.",
            },
            {
              titulo: "Minerais",
              texto:
                "Cálcio, fósforo, sódio, cloro e outros minerais participam da formação óssea, metabolismo, equilíbrio corporal e reprodução. A suplementação deve considerar a dieta e as condições locais.",
            },
            {
              titulo: "Vitaminas",
              texto:
                "Participam de processos metabólicos essenciais. A disponibilidade de forragem verde, conservação dos alimentos e condições do sistema influenciam o fornecimento de vitaminas.",
            },
            {
              titulo: "Água",
              texto:
                "É indispensável para digestão, circulação, termorregulação, metabolismo e produção. A qualidade e disponibilidade da água devem ser tratadas como parte do plano alimentar.",
            },
          ].map((item) => (
            <article
              key={item.titulo}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {item.titulo}
              </h3>

              <p className="mt-4 text-justify leading-7 text-slate-600">
                {item.texto}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* FORRAGEM */}
      <section className="bg-[#e8f0e9] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl bg-white p-8 shadow-sm lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
                Base da alimentação
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Pastagens e forragens
              </h2>

              <div className="mt-6 space-y-4 text-justify leading-8 text-slate-700">
                <p>
                  Em sistemas extensivos e semi-intensivos, a pastagem constitui
                  frequentemente a principal fonte de alimento. A quantidade
                  disponível, a composição botânica, o estado de maturidade das
                  plantas e a estação do ano determinam o valor nutritivo que
                  chega ao animal.
                </p>

                <p>
                  Plantas jovens geralmente apresentam maior qualidade
                  nutricional do que plantas muito maduras e fibrosas. Porém,
                  permitir que os animais consumam continuamente a pastagem sem
                  controlo pode provocar sobrepastoreio, degradação da cobertura
                  vegetal e redução da disponibilidade futura.
                </p>

                <p>
                  A conservação de excedentes em forma de feno ou, quando o
                  sistema e a tecnologia permitirem, silagem, pode reduzir a
                  dependência da pastagem durante períodos de escassez.
                </p>
              </div>
            </article>

            <article className="rounded-3xl bg-[#123d29] p-8 text-white shadow-sm lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-200">
                Recursos locais
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Resíduos agrícolas podem ter valor
              </h2>

              <div className="mt-6 space-y-4 text-justify leading-8 text-emerald-50">
                <p>
                  Em sistemas agrícolas familiares, resíduos de culturas podem
                  complementar a alimentação dos ovinos, desde que sejam
                  avaliados quanto à qualidade, segurança, contaminação por
                  fungos e adequação nutricional.
                </p>

                <p>
                  Restos de milho, sorgo, massango, massambala, feijão,
                  amendoim e outras culturas podem ter utilização alimentar
                  dependendo da parte da planta, do estado de conservação e do
                  seu valor nutricional.
                </p>

                <p>
                  O princípio é simples: um resíduo agrícola não deve ser
                  considerado automaticamente um alimento completo. Pode ser
                  volumoso, fonte de energia ou simplesmente material de baixo
                  valor nutritivo. A sua utilização deve ser acompanhada de uma
                  avaliação da dieta total.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SISTEMAS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            Sistemas de produção
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            A alimentação muda conforme o sistema
          </h2>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse text-left">
              <thead className="bg-[#123d29] text-white">
                <tr>
                  <th className="px-6 py-4 font-semibold">
                    Sistema
                  </th>
                  <th className="px-6 py-4 font-semibold">
                    Base alimentar
                  </th>
                  <th className="px-6 py-4 font-semibold">
                    Principal desafio
                  </th>
                  <th className="px-6 py-4 font-semibold">
                    Estratégia
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="px-6 py-5 font-semibold">
                    Extensivo
                  </td>
                  <td className="px-6 py-5">
                    Pastagem e vegetação disponível
                  </td>
                  <td className="px-6 py-5">
                    Variação sazonal
                  </td>
                  <td className="px-6 py-5">
                    Gestão do pastoreio e reserva alimentar
                  </td>
                </tr>

                <tr className="border-b border-slate-200 bg-slate-50">
                  <td className="px-6 py-5 font-semibold">
                    Semi-intensivo
                  </td>
                  <td className="px-6 py-5">
                    Pastagem + forragens + suplementos
                  </td>
                  <td className="px-6 py-5">
                    Equilibrar custo e produtividade
                  </td>
                  <td className="px-6 py-5">
                    Suplementação estratégica
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-5 font-semibold">
                    Intensivo
                  </td>
                  <td className="px-6 py-5">
                    Forragens conservadas + concentrados
                  </td>
                  <td className="px-6 py-5">
                    Formulação e custo da dieta
                  </td>
                  <td className="px-6 py-5">
                    Ração equilibrada e controlo do consumo
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FASES */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              Alimentação por categoria
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Nem todos os ovinos devem receber a mesma dieta
            </h2>

            <p className="mt-5 text-justify text-lg leading-8 text-slate-600">
              Uma das principais falhas em pequenos sistemas pecuários é
              alimentar todo o efectivo da mesma maneira. As necessidades
              nutricionais mudam ao longo da vida e do ciclo produtivo.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              {
                titulo: "Cordeiros",
                texto:
                  "Precisam de atenção especial ao colostro, leite, acesso progressivo a alimentos sólidos, água e crescimento. A alimentação inadequada nesta fase pode comprometer o desenvolvimento posterior.",
              },
              {
                titulo: "Ovelhas vazias",
                texto:
                  "O objectivo é manter condição corporal adequada sem desperdício de alimento. A dieta pode ser menos exigente do que durante final de gestação ou lactação.",
              },
              {
                titulo: "Ovelhas gestantes",
                texto:
                  "As necessidades aumentam à medida que a gestação avança, especialmente quando há mais de um feto. A condição corporal e a qualidade da dieta devem ser acompanhadas.",
              },
              {
                titulo: "Ovelhas em lactação",
                texto:
                  "A produção de leite exige energia, proteína, minerais e água. A falta de alimento pode reduzir a produção de leite e prejudicar o crescimento dos cordeiros.",
              },
              {
                titulo: "Carneiros",
                texto:
                  "Devem manter condição corporal adequada. Antes e durante a época reprodutiva, a alimentação deve ser ajustada ao trabalho reprodutivo e ao estado corporal.",
              },
              {
                titulo: "Animais em crescimento",
                texto:
                  "Necessitam de uma dieta capaz de sustentar deposição de tecido e desenvolvimento do esqueleto. A qualidade da proteína e da energia disponível é importante.",
              },
            ].map((item) => (
              <article
                key={item.titulo}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {item.titulo}
                </h3>

                <p className="mt-4 text-justify leading-7 text-slate-600">
                  {item.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GESTAÇÃO */}
      <section className="bg-[#123d29] py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-200">
                Ponto crítico
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Final da gestação exige atenção
              </h2>
            </div>

            <div className="space-y-5 text-justify leading-8 text-emerald-50">
              <p>
                À medida que a gestação avança, o crescimento fetal aumenta e o
                espaço abdominal disponível para ingestão pode diminuir. Isto
                torna importante oferecer alimento de qualidade e acompanhar a
                condição corporal.
              </p>

              <p>
                O problema não é simplesmente “dar mais ração”. A qualidade do
                volumoso, a energia, a proteína, os minerais e a disponibilidade
                de água devem ser considerados em conjunto.
              </p>

              <p>
                Ovelhas muito magras e ovelhas excessivamente gordas podem
                apresentar problemas produtivos e reprodutivos. O maneio
                nutricional deve procurar uma condição corporal adequada ao
                momento do ciclo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SUPLEMENTAÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            Suplementação
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Quando faz sentido suplementar?
          </h2>

          <p className="mt-5 text-justify text-lg leading-8 text-slate-600">
            Suplementar significa corrigir uma deficiência ou aumentar a
            disponibilidade de determinados nutrientes. Não significa
            simplesmente aumentar a quantidade de concentrado.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">
              Época seca
            </h3>

            <p className="mt-4 text-justify leading-7 text-slate-600">
              Quando a pastagem perde qualidade e quantidade, pode ser
              necessário utilizar feno, resíduos agrícolas seleccionados,
              forragens cultivadas ou suplementos adequados.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">
              Gestação avançada
            </h3>

            <p className="mt-4 text-justify leading-7 text-slate-600">
              O aumento das necessidades nutricionais pode justificar
              suplementação estratégica, sobretudo quando a base forrageira
              não consegue satisfazer as necessidades.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">
              Lactação
            </h3>

            <p className="mt-4 text-justify leading-7 text-slate-600">
              Ovelhas em lactação têm necessidades superiores às ovelhas
              secas, particularmente quando estão a alimentar dois ou mais
              cordeiros.
            </p>
          </article>
        </div>

        <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-6">
          <h3 className="font-bold text-red-950">
            Cuidado com a suplementação sem avaliação
          </h3>

          <p className="mt-2 text-justify leading-7 text-red-900">
            Quantidades elevadas de concentrados ou suplementos minerais não
            tornam automaticamente a dieta melhor. Uma alteração brusca da
            dieta pode afectar o funcionamento do rúmen. A formulação de dietas
            específicas deve considerar peso, categoria, alimento disponível e
            objectivo produtivo, preferencialmente com acompanhamento técnico.
          </p>
        </div>
      </section>

      {/* ÁGUA */}
      <section className="bg-[#e8f0e9] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
                Água
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                A água também é alimento
              </h2>
            </div>

            <div className="space-y-5 text-justify text-lg leading-8 text-slate-700">
              <p>
                A água participa praticamente de todos os processos fisiológicos
                do organismo. A disponibilidade necessária varia com o consumo
                de matéria seca, temperatura, composição da dieta, estado
                fisiológico e produção.
              </p>

              <p>
                Ovinos que recebem alimento seco ou que vivem em ambientes
                quentes podem aumentar a necessidade de água. Ovelhas em final
                de gestação e lactação também precisam de atenção especial.
              </p>

              <p>
                Bebedouros devem ser mantidos limpos e posicionados de forma a
                reduzir contaminação por fezes, lama e restos de alimento. Água
                disponível não significa necessariamente água adequada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MINERAIS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              Minerais
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Não ignorar os minerais
            </h2>

            <div className="mt-6 space-y-4 text-justify leading-8 text-slate-700">
              <p>
                Minerais participam da formação dos ossos, metabolismo,
                equilíbrio ácido-base, funcionamento muscular, reprodução e
                diversas reacções metabólicas.
              </p>

              <p>
                Cálcio e fósforo são especialmente importantes para o
                desenvolvimento ósseo, enquanto sódio e cloro estão relacionados
                com o equilíbrio electrolítico. Outros minerais também podem ser
                necessários, mas a suplementação deve ser baseada na dieta e nas
                condições locais.
              </p>

              <p>
                O excesso também pode ser prejudicial. Por isso, não é correcto
                recomendar indiscriminadamente grandes quantidades de minerais
                sem conhecer a composição do alimento e o produto utilizado.
              </p>
            </div>
          </article>

          <article className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              Angola
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              A dieta deve ser regionalizada
            </h2>

            <div className="mt-6 space-y-4 text-justify leading-8 text-slate-700">
              <p>
                Uma recomendação alimentar para o Namibe não deve ser
                automaticamente transferida para o Uíge. A composição da
                vegetação, precipitação, solos, disponibilidade de água e
                resíduos agrícolas é diferente.
              </p>

              <p>
                O AGROINOVA deve incentivar a investigação de composição
                bromatológica de pastagens e forragens utilizadas em Angola,
                incluindo matéria seca, proteína bruta, fibra, minerais e
                energia.
              </p>

              <p>
                Esta informação permitiria formular dietas mais económicas e
                adequadas às condições reais de cada região.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* O QUE DAR */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              Fontes alimentares
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Que alimentos podem entrar num sistema ovino?
            </h2>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse text-left">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-6 py-4">Grupo</th>
                    <th className="px-6 py-4">Exemplos</th>
                    <th className="px-6 py-4">Função</th>
                    <th className="px-6 py-4">Cuidados</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b">
                    <td className="px-6 py-5 font-semibold">
                      Pastagens
                    </td>
                    <td className="px-6 py-5">
                      Gramíneas, leguminosas e vegetação disponível
                    </td>
                    <td className="px-6 py-5">
                      Base volumosa da dieta
                    </td>
                    <td className="px-6 py-5">
                      Evitar sobrepastoreio e plantas tóxicas
                    </td>
                  </tr>

                  <tr className="border-b bg-slate-50">
                    <td className="px-6 py-5 font-semibold">
                      Feno
                    </td>
                    <td className="px-6 py-5">
                      Forragem seca correctamente conservada
                    </td>
                    <td className="px-6 py-5">
                      Reserva para períodos de escassez
                    </td>
                    <td className="px-6 py-5">
                      Evitar bolores e deterioração
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-6 py-5 font-semibold">
                      Resíduos agrícolas
                    </td>
                    <td className="px-6 py-5">
                      Restos de culturas seleccionados
                    </td>
                    <td className="px-6 py-5">
                      Aproveitamento de recursos locais
                    </td>
                    <td className="px-6 py-5">
                      Avaliar qualidade e conservação
                    </td>
                  </tr>

                  <tr className="border-b bg-slate-50">
                    <td className="px-6 py-5 font-semibold">
                      Concentrados
                    </td>
                    <td className="px-6 py-5">
                      Cereais e subprodutos adequados
                    </td>
                    <td className="px-6 py-5">
                      Aumentar densidade energética/proteica
                    </td>
                    <td className="px-6 py-5">
                      Introdução gradual e controlo da quantidade
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-5 font-semibold">
                      Minerais
                    </td>
                    <td className="px-6 py-5">
                      Misturas minerais adequadas
                    </td>
                    <td className="px-6 py-5">
                      Corrigir necessidades minerais
                    </td>
                    <td className="px-6 py-5">
                      Evitar excesso e produtos inadequados
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SINAIS DE PROBLEMA */}
      <section className="bg-[#103b27] py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-200">
              Vigilância alimentar
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Como saber se a alimentação está a funcionar?
            </h2>

            <p className="mt-5 text-justify text-lg leading-8 text-emerald-50">
              O produtor e o técnico devem observar os animais e não apenas o
              alimento. O resultado de uma dieta aparece no estado corporal,
              crescimento, reprodução, comportamento, condição da lã ou pelo,
              produção de leite e sobrevivência dos cordeiros.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Perda progressiva de peso",
              "Baixo crescimento dos cordeiros",
              "Redução da condição corporal",
              "Problemas reprodutivos",
              "Lactação insuficiente",
              "Apatia ou redução do consumo",
              "Pelagem ou lã sem boa condição",
              "Aumento da mortalidade dos jovens",
              "Dependência excessiva de suplementos",
            ].map((sinal) => (
              <div
                key={sinal}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p className="font-medium text-white">{sinal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GESTÃO DA ESTAÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            Estratégia para Angola
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Alimentar bem começa antes da época de escassez
          </h2>

          <div className="mt-6 space-y-5 text-justify text-lg leading-8 text-slate-700">
            <p>
              Em sistemas dependentes de pastagem, esperar que a forragem
              desapareça para procurar alimento pode tornar a suplementação
              muito mais cara. O planeamento deve começar enquanto existe
              disponibilidade.
            </p>

            <p>
              O produtor pode estimar o número de animais, observar a condição
              das pastagens, reservar áreas, produzir feno, seleccionar
              resíduos agrícolas aproveitáveis e preparar fontes de água.
            </p>

            <p>
              Este planeamento é particularmente importante em regiões
              sujeitas a períodos prolongados de seca. A FAO destaca que, em
              regiões tropicais, semiáridas e áridas, a quantidade e qualidade
              do alimento volumoso podem variar significativamente ao longo do
              ano.
            </p>
          </div>
        </div>
      </section>

      {/* REALIDADE REGIONAL */}
      <section className="bg-slate-100 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              Angola por zonas
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Diferentes províncias, diferentes estratégias alimentares
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900">
                Namibe e áreas semiáridas
              </h3>

              <p className="mt-4 text-justify leading-8 text-slate-600">
                O desafio central tende a estar relacionado com a disponibilidade
                de água, quantidade de vegetação e grande variabilidade
                sazonal. A gestão do pastoreio, utilização eficiente dos
                recursos disponíveis e criação de reservas alimentares são
                especialmente importantes.
              </p>
            </article>

            <article className="rounded-3xl bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900">
                Uíge e regiões húmidas
              </h3>

              <p className="mt-4 text-justify leading-8 text-slate-600">
                A maior disponibilidade potencial de biomassa não elimina os
                problemas nutricionais. A qualidade das plantas, excesso de
                humidade, conservação de forragens e controlo sanitário dos
                alimentos continuam a ser importantes.
              </p>
            </article>

            <article className="rounded-3xl bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900">
                Cuanza Sul
              </h3>

              <p className="mt-4 text-justify leading-8 text-slate-600">
                A integração entre agricultura e pecuária pode permitir o
                aproveitamento de resíduos agrícolas, pastagens e produção
                forrageira. O desafio é transformar recursos disponíveis em
                dietas nutricionalmente equilibradas.
              </p>
            </article>

            <article className="rounded-3xl bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900">
                Huíla, Cunene, Huambo e Bié
              </h3>

              <p className="mt-4 text-justify leading-8 text-slate-600">
                Estas regiões apresentam sistemas pecuários diversificados e
                condições agroecológicas distintas. O planeamento alimentar
                deve considerar pastagem, resíduos de culturas, água, época
                seca e categoria dos animais.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* DADOS PARA INVESTIGAÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8 lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            Investigação agropecuária
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            O que ainda precisamos investigar em Angola?
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Composição nutricional das principais pastagens utilizadas por ovinos.",
              "Disponibilidade sazonal de forragem por região agroecológica.",
              "Valor nutritivo dos resíduos de milho, massango, massambala, feijão e outras culturas.",
              "Necessidades minerais dos ovinos em diferentes regiões de Angola.",
              "Efeito da suplementação estratégica sobre crescimento e reprodução.",
              "Custo por quilograma de ganho de peso em diferentes sistemas.",
              "Produção e conservação de feno em sistemas familiares.",
              "Disponibilidade e qualidade da água utilizada pelos efectivos.",
              "Relação entre alimentação, condição corporal e resistência às doenças.",
              "Desempenho de diferentes genótipos ovinos nas condições angolanas.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-emerald-100 bg-white p-5"
              >
                <p className="text-justify leading-7 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUADRO DE MANEIO */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              Guia prático
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              O que o produtor deve verificar diariamente?
            </h2>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] border-collapse text-left">
                <thead className="bg-[#123d29] text-white">
                  <tr>
                    <th className="px-6 py-4">Observação</th>
                    <th className="px-6 py-4">Pergunta</th>
                    <th className="px-6 py-4">Acção</th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    [
                      "Pastagem",
                      "Existe quantidade suficiente?",
                      "Avaliar rotação e disponibilidade.",
                    ],
                    [
                      "Água",
                      "Está limpa e disponível?",
                      "Limpar bebedouros e verificar abastecimento.",
                    ],
                    [
                      "Consumo",
                      "Os animais estão a comer normalmente?",
                      "Investigar alterações.",
                    ],
                    [
                      "Condição corporal",
                      "Há animais a emagrecer?",
                      "Separar e avaliar a causa.",
                    ],
                    [
                      "Cordeiros",
                      "Estão a crescer normalmente?",
                      "Verificar leite, alimentação e saúde.",
                    ],
                    [
                      "Forragens",
                      "Há bolor ou deterioração?",
                      "Retirar alimento inadequado.",
                    ],
                  ].map(([observacao, pergunta, acao]) => (
                    <tr
                      key={observacao}
                      className="border-b border-slate-200 last:border-0"
                    >
                      <td className="px-6 py-5 font-semibold text-slate-900">
                        {observacao}
                      </td>

                      <td className="px-6 py-5 text-slate-600">
                        {pergunta}
                      </td>

                      <td className="px-6 py-5 text-slate-600">
                        {acao}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CONCLUSÃO */}
      <section className="bg-[#103b27] py-16 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
            AGROINOVA ANGOLA
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Alimentação é a base da produtividade ovina
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-justify text-lg leading-8 text-emerald-50">
            Uma exploração ovina produtiva não depende simplesmente da
            quantidade de alimento fornecida. Depende da qualidade da
            alimentação, da água, da gestão das pastagens, do equilíbrio entre
            energia e proteína, dos minerais, do estado fisiológico dos
            animais, da época do ano e da capacidade do produtor de antecipar
            os períodos de escassez. Em Angola, esta gestão precisa ser
            adaptada às condições locais e apoiada por dados científicos,
            assistência técnica e investigação nacional.
          </p>
        </div>
      </section>

      {/* FONTES */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            Fontes e referências
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Fontes utilizadas nesta página
          </h2>

          <div className="mt-8 space-y-5 text-sm leading-7 text-slate-600">
            <div>
              <p className="font-bold text-slate-900">
                Instituto Nacional de Estatística — INE
              </p>

              <p>
                Principais Resultados do Inquérito Contínuo Agro-Pecuário e
                Pescas — ICAPP 2024/2025, publicado em Maio de 2026.
              </p>

              <a
                href="https://www.ine.gov.ao/publicacoes/detalhes/NTM0NzU="
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-block text-emerald-800 underline underline-offset-4"
              >
                Consultar publicação do INE
              </a>
            </div>

            <div>
              <p className="font-bold text-slate-900">
                INE — RAPP 2019/2020
              </p>

              <p>
                Relatório dos Resultados das Explorações Agropecuárias,
                Piscatórias e Aquícolas Familiares — Volume III, incluindo
                efectivos e movimentos de ovinos por província.
              </p>

              <a
                href="https://www.fao.org/fileadmin/templates/ess/ess_test_folder/World_Census_Agriculture/WCA_2020/WCA_2020_new_doc/ANG_REP3_POR_2019_2020.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-block text-emerald-800 underline underline-offset-4"
              >
                Consultar relatório
              </a>
            </div>

            <div>
              <p className="font-bold text-slate-900">
                INE — Produção Agro-Pecuária 2025
              </p>

              <p>
                Boletim de Indicadores da Produção Agro-Pecuária e Florestal,
                I semestre de 2025. Regista 261 toneladas de carne ovina no
                primeiro semestre de 2025.
              </p>
            </div>

            <div>
              <p className="font-bold text-slate-900">
                FAO — Alimentação de ruminantes
              </p>

              <p>
                Materiais técnicos sobre nutrientes, volumosos, concentrados,
                suplementação, água e alimentação de pequenos ruminantes.
              </p>

              <a
                href="https://www.fao.org/4/t0690e/t0690e05.htm"
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-block text-emerald-800 underline underline-offset-4"
              >
                Consultar material técnico da FAO
              </a>
            </div>

            <div>
              <p className="font-bold text-slate-900">
                FAO — Small ruminant production
              </p>

              <p>
                Referências técnicas sobre ingestão de alimento, qualidade do
                volumoso, suplementação e necessidades durante o ciclo
                reprodutivo.
              </p>

              <a
                href="https://www.fao.org/4/ah221e/AH221E05.htm"
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-block text-emerald-800 underline underline-offset-4"
              >
                Consultar material técnico
              </a>
            </div>

            <div>
              <p className="font-bold text-slate-900">
                Imagens
              </p>

              <p>
                Imagens de ovinos comercializados/publicados em Angola:
                AgroAnúncios Angola. As fotografias são utilizadas como
                referência visual e estão associadas às respectivas
                publicações originais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO FINAL */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <Link
            href="/pecuaria/ovinos/orientacoes"
            className="rounded-xl border border-slate-300 px-5 py-3 text-center font-semibold text-slate-700 transition hover:border-emerald-700 hover:text-emerald-800"
          >
            Voltar às orientações de ovinos
          </Link>

          <Link
            href="/pecuaria/ovinos/orientacoes/pastoreio"
            className="rounded-xl bg-[#123d29] px-5 py-3 text-center font-semibold text-white transition hover:bg-[#0b2d1e]"
          >
            Próximo tema: Pastoreio
          </Link>
        </div>
      </section>
    </main>
  );
}