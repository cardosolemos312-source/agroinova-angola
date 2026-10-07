"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";

type Provincia = {
  nome: string;
  regiao: string;
  nota: string;
};

type CardProps = {
  title: string;
  children: ReactNode;
};

const provincias: Provincia[] = [
  {
    nome: "Bengo",
    regiao: "Norte",
    nota: "O girassol pode integrar sistemas de oleaginosas onde existam solos adequados e calendário compatível.",
  },
  {
    nome: "Benguela",
    regiao: "Centro-Oeste",
    nota: "A cultura pode integrar sistemas de produção de grãos e oleaginosas, dependendo das condições locais de água e solo.",
  },
  {
    nome: "Bié",
    regiao: "Centro",
    nota: "Província com importante actividade agrícola e potencial para oleaginosas em áreas tecnicamente adequadas.",
  },
  {
    nome: "Cabinda",
    regiao: "Norte",
    nota: "A elevada humidade exige atenção especial à drenagem, doenças e escolha da época.",
  },
  {
    nome: "Cuando",
    regiao: "Leste",
    nota: "A aptidão deve ser determinada por avaliação local de clima, solo, água e material genético.",
  },
  {
    nome: "Cubango",
    regiao: "Leste",
    nota: "A cultura pode ser avaliada em sistemas diversificados, especialmente onde exista boa drenagem.",
  },
  {
    nome: "Cuanza Norte",
    regiao: "Norte",
    nota: "Girassol já aparece entre as culturas de interesse da agricultura regional.",
  },
  {
    nome: "Cuanza Sul",
    regiao: "Centro-Oeste",
    nota: "Pode integrar sistemas de rotação com cereais e outras oleaginosas.",
  },
  {
    nome: "Cunene",
    regiao: "Sul",
    nota: "A disponibilidade de água e a escolha correcta da época são factores decisivos.",
  },
  {
    nome: "Huambo",
    regiao: "Centro",
    nota: "Existe investigação específica de zoneamento agroecológico do girassol na província.",
  },
  {
    nome: "Huíla",
    regiao: "Sul",
    nota: "O girassol aparece entre as culturas agrícolas da província e pode integrar sistemas de oleaginosas.",
  },
  {
    nome: "Icolo e Bengo",
    regiao: "Norte",
    nota: "A produção deve ser avaliada principalmente em função de solo, água e proximidade dos mercados.",
  },
  {
    nome: "Luanda",
    regiao: "Litoral",
    nota: "O potencial está mais associado a explorações específicas do que à agricultura extensiva generalizada.",
  },
  {
    nome: "Lunda Norte",
    regiao: "Leste",
    nota: "É necessária avaliação local de drenagem, fertilidade e adaptação varietal.",
  },
  {
    nome: "Lunda Sul",
    regiao: "Leste",
    nota: "Pode ser considerada em sistemas diversificados após validação agronómica local.",
  },
  {
    nome: "Malanje",
    regiao: "Norte",
    nota: "O girassol é citado entre as culturas agrícolas da província e há projectos de capacitação para produtores.",
  },
  {
    nome: "Moxico",
    regiao: "Leste",
    nota: "O girassol aparece entre as culturas da agricultura regional.",
  },
  {
    nome: "Moxico Leste",
    regiao: "Leste",
    nota: "Há produção empresarial de girassol documentada na província.",
  },
  {
    nome: "Namibe",
    regiao: "Sul",
    nota: "A disponibilidade de água constitui um factor crítico devido às características climáticas da região.",
  },
  {
    nome: "Uíge",
    regiao: "Norte",
    nota: "A cultura pode ser integrada em sistemas agrícolas diversificados conforme o ambiente local.",
  },
  {
    nome: "Zaire",
    regiao: "Norte",
    nota: "A adaptação deve ser avaliada de acordo com solo, drenagem, época e material genético.",
  },
];

const imagens = [
  {
    src: "https://media.licdn.com/dms/image/v2/D4D22AQFfvknM9Pm18g/feedshare-shrink_800/feedshare-shrink_800/0/1729271792606?e=2147483647&t=nOnsQRMBqfc8VXpHB83MpGrAUZeUmpHvpxyoG2BUf7A&v=beta",
    alt: "Preparação mecanizada de terreno em Cacuso, Malanje",
    titulo: "Preparação do terreno em Cacuso, Malanje",
    descricao:
      "Imagem associada a actividade agrícola em Cacuso, Malanje, mostrando preparação mecanizada do terreno para produção agrícola.",
    fonte: "Kepya - Agronegócios",
    href: "https://www.linkedin.com/posts/kepya_kepya-agroneg%C3%B3cio-sementesdeenergia-activity-7253091604998045696-Np2O",
    angola: true,
  },
  {
    src: "https://www.fao.org/images/righttofoodlibraries/news-images/25009_4044_thumb.jpg",
    alt: "Mulher africana numa cultura de girassol",
    titulo: "Girassol em sistema agrícola africano",
    descricao:
      "Imagem técnica internacional utilizada para visualização da cultura. Não representa uma estatística ou experiência específica de Angola.",
    fonte: "FAO",
    href: "https://www.fao.org/right-to-food/news-and-events/news/news-detail/World-Food-Day-highlights-the-right-to-food-as-crucial-for-hunger-eradication/es",
    angola: false,
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/5e8f40bd051ccc090bb0f22b/1689697298050-7CK38083ISXUM9VUR3GF/image-asset.jpeg",
    alt: "Campo de girassol",
    titulo: "Campo de girassol",
    descricao:
      "Imagem técnica internacional para identificação visual da cultura e arquitectura do campo.",
    fonte: "RIDE International",
    href: "https://www.rideinternational.org/elephant-and-sunflower",
    angola: false,
  },
];

function Card({ title, children }: CardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-3 text-lg font-bold text-slate-950">{title}</h3>
      <div className="text-sm leading-7 text-slate-700">{children}</div>
    </article>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 max-w-4xl">
      <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-green-700">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-3 text-base leading-7 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}

export default function GirassolPage() {
  const [provinciaSelecionada, setProvinciaSelecionada] = useState("Todas");
  const [pesquisa, setPesquisa] = useState("");

  const provinciasFiltradas = useMemo(() => {
    const termo = pesquisa.trim().toLowerCase();

    return provincias.filter((provincia) => {
      const correspondeProvincia =
        provinciaSelecionada === "Todas" ||
        provincia.nome === provinciaSelecionada;

      const correspondePesquisa =
        !termo ||
        provincia.nome.toLowerCase().includes(termo) ||
        provincia.regiao.toLowerCase().includes(termo) ||
        provincia.nota.toLowerCase().includes(termo);

      return correspondeProvincia && correspondePesquisa;
    });
  }, [pesquisa, provinciaSelecionada]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-green-950">
        <img
          src={imagens[1].src}
          alt="Girassol"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-green-950 via-green-950/90 to-green-900/50" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-green-300">
              AGROINOVA ANGOLA • Agricultura
            </p>

            <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
              Girassol
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-green-50 md:text-xl">
              Guia técnico sobre <em>Helianthus annuus L.</em>, uma
              oleaginosa com interesse para produção de sementes, óleo,
              alimentação animal, rotação de culturas e desenvolvimento
              agroindustrial em Angola.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#visao-geral"
                className="rounded-full bg-white px-5 py-3 text-sm font-bold text-green-900 transition hover:bg-green-100"
              >
                Explorar conteúdo
              </a>

              <a
                href="#angola"
                className="rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                Girassol em Angola
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4 text-sm text-slate-500 lg:px-8">
          <Link
            href="/agricultura"
            className="font-semibold hover:text-green-700"
          >
            Agricultura
          </Link>

          <span className="mx-2">/</span>

          <span>Girassol</span>
        </div>
      </div>

      {/* NAVEGAÇÃO */}
      <div className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-3 text-sm font-semibold lg:px-8">
          <a href="#visao-geral" className="whitespace-nowrap hover:text-green-700">
            Visão geral
          </a>

          <a href="#botanica" className="whitespace-nowrap hover:text-green-700">
            Botânica
          </a>

          <a href="#clima" className="whitespace-nowrap hover:text-green-700">
            Clima
          </a>

          <a href="#solo" className="whitespace-nowrap hover:text-green-700">
            Solo
          </a>

          <a href="#sementes" className="whitespace-nowrap hover:text-green-700">
            Sementes
          </a>

          <a href="#plantio" className="whitespace-nowrap hover:text-green-700">
            Plantio
          </a>

          <a href="#manejo" className="whitespace-nowrap hover:text-green-700">
            Manejo
          </a>

          <a href="#sanidade" className="whitespace-nowrap hover:text-green-700">
            Sanidade
          </a>

          <a href="#colheita" className="whitespace-nowrap hover:text-green-700">
            Colheita
          </a>

          <a href="#angola" className="whitespace-nowrap hover:text-green-700">
            Angola
          </a>

          <a href="#provincias" className="whitespace-nowrap hover:text-green-700">
            Províncias
          </a>

          <a href="#investigacao" className="whitespace-nowrap hover:text-green-700">
            Investigação
          </a>
        </div>
      </div>

      {/* VISÃO GERAL */}
      <section
        id="visao-geral"
        className="mx-auto max-w-7xl px-6 py-16 lg:px-8"
      >
        <SectionTitle
          eyebrow="01 • Visão geral"
          title="Uma oleaginosa com espaço para crescer em Angola"
          description="O girassol pode fornecer matéria-prima para óleo alimentar, sementes para alimentação, subprodutos para alimentação animal e diversificação das rotações agrícolas."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card title="2022/23">
            <strong className="text-2xl text-green-800">
              5.733 t
            </strong>

            <p className="mt-2">
              Produção indicada na série de planeamento económico para o
              girassol em 2022/23.
            </p>
          </Card>

          <Card title="Área 2022/23">
            <strong className="text-2xl text-green-800">
              19.768 ha
            </strong>

            <p className="mt-2">
              Área indicada na mesma série de planeamento para a cultura.
            </p>
          </Card>

          <Card title="2023/24">
            <strong className="text-2xl text-green-800">
              5.533 t
            </strong>

            <p className="mt-2">
              Projecção apresentada para 2023/24 no PESOE 2024.
            </p>
          </Card>

          <Card title="Espécie">
            <strong className="text-2xl text-green-800">
              H. annuus
            </strong>

            <p className="mt-2">
              Nome científico: <em>Helianthus annuus L.</em>
            </p>
          </Card>
        </div>

        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <p className="text-sm leading-7 text-amber-950">
            <strong>Importante:</strong> os valores de 5.733 t e 5.533 t são
            apresentados aqui como dados da série de planeamento/projecção do
            PESOE 2024. Não devem ser apresentados no portal como produção
            nacional actual de 2026.
          </p>
        </div>
      </section>

      {/* BOTÂNICA */}
      <section id="botanica" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="02 • Botânica"
            title="A planta e os componentes de interesse"
            description="A arquitectura do girassol determina o aproveitamento da luz, a capacidade de suporte da planta e a formação do capítulo e das sementes."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card title="Nome científico">
              <p>
                <em>Helianthus annuus L.</em>
              </p>

              <p className="mt-2">
                É uma espécie da família Asteraceae e uma das principais
                oleaginosas cultivadas mundialmente.
              </p>
            </Card>

            <Card title="Sistema radicular">
              <p>
                O girassol desenvolve uma raiz principal forte, acompanhada de
                raízes laterais que exploram o perfil do solo.
              </p>

              <p className="mt-2">
                Essa característica contribui para a exploração de água em
                profundidade quando o solo permite desenvolvimento radicular.
              </p>
            </Card>

            <Card title="Caule">
              <p>
                O caule é erecto e pode atingir grande altura, dependendo do
                genótipo, disponibilidade de água, fertilidade e densidade.
              </p>
            </Card>

            <Card title="Folhas">
              <p>
                As folhas têm elevada importância para interceptação da
                radiação e produção de fotoassimilados durante o ciclo.
              </p>
            </Card>

            <Card title="Capítulo">
              <p>
                O que visualmente parece uma grande flor é, botanicamente, um
                capítulo composto por numerosas flores.
              </p>
            </Card>

            <Card title="Sementes">
              <p>
                As sementes podem apresentar diferentes proporções de óleo,
                proteína e outros componentes, de acordo com o material
                genético e condições de cultivo.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CLIMA */}
      <section id="clima" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="03 • Clima"
          title="Radiação solar, temperatura e água"
          description="O girassol possui boa capacidade de adaptação a diferentes ambientes, mas produtividade e teor de óleo dependem fortemente das condições durante o ciclo."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Radiação">
            <p>
              A elevada disponibilidade de radiação favorece a fotossíntese e
              o enchimento das sementes.
            </p>

            <p className="mt-3">
              Por isso, áreas com boa exposição solar são particularmente
              interessantes para a cultura.
            </p>
          </Card>

          <Card title="Temperatura">
            <p>
              Temperaturas elevadas podem ser toleradas durante parte do ciclo,
              mas extremos térmicos, sobretudo em fases sensíveis, podem
              afectar polinização, enchimento e rendimento.
            </p>
          </Card>

          <Card title="Água">
            <p>
              Embora seja considerada relativamente tolerante ao défice
              hídrico, tolerância não significa ausência de necessidade de
              água.
            </p>

            <p className="mt-3">
              Défices durante fases críticas podem reduzir o número e peso das
              sementes.
            </p>
          </Card>

          <Card title="Chuva e humidade">
            <p>
              Humidade excessiva e molhamento prolongado podem aumentar a
              pressão de doenças, sobretudo quando associados a má circulação
              de ar.
            </p>
          </Card>
        </div>

        <div className="mt-8 rounded-2xl bg-green-950 p-7 text-white">
          <h3 className="text-xl font-bold">
            A época de plantio deve ser regionalizada
          </h3>

          <p className="mt-3 text-sm leading-7 text-green-100">
            Não é correcto publicar uma única data de sementeira para todo o
            território angolano. O calendário deve considerar precipitação
            local, temperatura, duração do ciclo, disponibilidade de
            irrigação, solo e data pretendida de colheita.
          </p>
        </div>
      </section>

      {/* SOLO */}
      <section id="solo" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="04 • Solo"
            title="Profundidade, drenagem e reacção do solo"
            description="O girassol beneficia de solos que permitam exploração radicular e não apresentem encharcamento prolongado."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card title="Profundidade">
              <p>
                Solos profundos favorecem a exploração radicular e a utilização
                da água disponível no perfil.
              </p>
            </Card>

            <Card title="Drenagem">
              <p>
                Solos sujeitos a encharcamento prolongado podem limitar o
                desenvolvimento das raízes e aumentar riscos fitossanitários.
              </p>
            </Card>

            <Card title="Textura">
              <p>
                Texturas que permitam boa infiltração, retenção equilibrada de
                água e desenvolvimento radicular são preferíveis.
              </p>
            </Card>

            <Card title="pH">
              <p>
                A reacção do solo deve ser avaliada através de análise antes de
                decidir correcções com calcário.
              </p>
            </Card>
          </div>

          <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-6">
            <h3 className="font-bold text-green-950">
              Investigação importante no Huambo
            </h3>

            <p className="mt-2 text-sm leading-7 text-green-900">
              O trabalho de zoneamento agroecológico da UJES identificou uma
              situação particularmente interessante: a textura dos solos do
              Huambo apresenta condições favoráveis para o girassol, enquanto
              o pH predominante foi apontado como uma limitação em grande parte
              da província. Isto reforça a necessidade de análise de solo e
              correcção adequada, em vez de simplesmente classificar uma área
              como apta ou inapta.
            </p>
          </div>
        </div>
      </section>

      {/* SEMENTES */}
      <section id="sementes" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="05 • Sementes e genética"
          title="A escolha do material genético é decisiva"
          description="No girassol, ciclo, teor de óleo, resistência e adaptação ambiental devem fazer parte da decisão de escolha."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card title="Semente de qualidade">
            <p>
              A utilização de sementes de origem conhecida, com identidade e
              qualidade garantidas, reduz riscos de baixa emergência e
              desuniformidade.
            </p>
          </Card>

          <Card title="Híbridos e variedades">
            <p>
              O produtor deve distinguir materiais híbridos de variedades e
              considerar o sistema de produção para o qual cada material foi
              desenvolvido.
            </p>
          </Card>

          <Card title="Teor de óleo">
            <p>
              Para produção destinada à extracção de óleo, o teor e a
              composição do óleo são características de grande importância.
            </p>
          </Card>

          <Card title="Ciclo">
            <p>
              Materiais precoces podem ser interessantes para determinadas
              janelas de produção, mas a decisão deve considerar ambiente,
              água e objectivo comercial.
            </p>
          </Card>

          <Card title="Resistência">
            <p>
              A resistência genética a doenças e parasitas pode reduzir custos
              e dependência de tratamentos.
            </p>
          </Card>

          <Card title="Adaptação local">
            <p>
              O material deve ser validado nas condições agroecológicas onde
              será utilizado.
            </p>
          </Card>
        </div>

        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h3 className="font-bold text-amber-950">
            Germoplasma angolano em investigação
          </h3>

          <p className="mt-2 text-sm leading-7 text-amber-900">
            Um estudo publicado em 2026 avaliou oito acessos nacionais de
            girassol provenientes de Huíla, Huambo, Malanje e Benguela. Os
            acessos 2288, 2289 e 918 apresentaram elevada resposta produtiva à
            fertilização no ensaio realizado no Centro de Recursos
            Fitogenéticos, enquanto o acesso 2290 apresentou menor sensibilidade
            nutricional.
          </p>

          <p className="mt-3 text-sm leading-7 text-amber-900">
            Estes resultados são importantes para investigação e melhoramento,
            mas não significam automaticamente que esses acessos sejam
            cultivares comerciais recomendadas para todos os agricultores.
          </p>
        </div>
      </section>

      {/* GALERIA */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="06 • Imagens"
            title="Girassol e sistemas agrícolas"
            description="A AGROINOVA diferencia imagens de campo angolanas de imagens técnicas internacionais."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {imagens.map((imagem) => (
              <article
                key={imagem.src}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <a
                  href={imagem.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <img
                    src={imagem.src}
                    alt={imagem.alt}
                    className="h-64 w-full object-cover transition duration-300 hover:scale-[1.02]"
                  />
                </a>

                <div className="p-5">
                  <div className="mb-2">
                    {imagem.angola ? (
                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">
                        Angola
                      </span>
                    ) : (
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                        Referência técnica
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-slate-950">
                    {imagem.titulo}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {imagem.descricao}
                  </p>

                  <a
                    href={imagem.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-sm font-bold text-green-700 hover:text-green-900"
                  >
                    Abrir fonte original →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PLANTIO */}
      <section id="plantio" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="07 • Implantação"
          title="Preparação, sementeira e população de plantas"
          description="O estabelecimento uniforme é essencial para aproveitar o potencial produtivo do girassol."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card title="1. Escolher a área">
            <p>
              Seleccionar áreas com boa exposição solar, drenagem e solo
              compatível com a cultura.
            </p>
          </Card>

          <Card title="2. Analisar o solo">
            <p>
              Determinar pH e disponibilidade de nutrientes antes da
              fertilização.
            </p>
          </Card>

          <Card title="3. Preparar o terreno">
            <p>
              Procurar uma cama de semente adequada e evitar compactação
              excessiva.
            </p>
          </Card>

          <Card title="4. Semear uniformemente">
            <p>
              Regular a profundidade e distribuição das sementes para reduzir
              falhas e competição desigual.
            </p>
          </Card>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card title="Densidade">
            <p>
              A população ideal depende do híbrido ou variedade, disponibilidade
              de água, fertilidade, arquitectura da planta e objectivo de
              produção.
            </p>

            <p className="mt-3">
              Não deve ser copiado um número único de plantas por hectare sem
              considerar estes factores.
            </p>
          </Card>

          <Card title="Profundidade">
            <p>
              A semente deve ser colocada a profundidade compatível com a
              humidade do solo e textura, evitando tanto plantio superficial
              excessivo como profundidade que dificulte a emergência.
            </p>
          </Card>
        </div>
      </section>

      {/* MANEJO */}
      <section id="manejo" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="08 • Manejo"
            title="Nutrição, água, infestantes e rotação"
            description="A produtividade resulta da combinação entre genética, ambiente e manejo."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card title="Azoto">
              <p>
                O azoto promove crescimento vegetativo, mas aplicações
                excessivas podem provocar desequilíbrios e não significam
                automaticamente maior rendimento.
              </p>
            </Card>

            <Card title="Fósforo">
              <p>
                É importante para processos metabólicos e desenvolvimento
                inicial do sistema radicular.
              </p>
            </Card>

            <Card title="Potássio">
              <p>
                Participa da regulação hídrica e de diversos processos
                fisiológicos da planta.
              </p>
            </Card>

            <Card title="Boro">
              <p>
                O boro tem importância fisiológica no girassol. Entretanto,
                aplicações devem ser feitas apenas quando justificadas por
                diagnóstico e recomendação técnica.
              </p>
            </Card>

            <Card title="Água">
              <p>
                O défice hídrico durante fases críticas pode reduzir o número e
                peso das sementes.
              </p>
            </Card>

            <Card title="Infestantes">
              <p>
                O controlo precoce das infestantes reduz a competição por água,
                luz e nutrientes durante o estabelecimento.
              </p>
            </Card>

            <Card title="Rotação">
              <p>
                A rotação ajuda a quebrar ciclos de pragas e doenças e melhora
                a diversificação do sistema agrícola.
              </p>
            </Card>

            <Card title="Resíduos">
              <p>
                Restos culturais devem ser geridos de acordo com o sistema de
                produção e os riscos fitossanitários.
              </p>
            </Card>

            <Card title="Agricultura de conservação">
              <p>
                A integração com práticas de conservação do solo deve ser
                avaliada de acordo com o ambiente, equipamento e sistema
                agrícola local.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* SANIDADE */}
      <section id="sanidade" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="09 • Sanidade vegetal"
          title="Prevenção antes de tratamento"
          description="O girassol pode ser afectado por pragas, doenças e plantas parasitas. O manejo integrado deve combinar prevenção, monitorização e intervenção justificada."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card title="Míldio">
            <p>
              Doença favorecida por determinadas condições de humidade e
              temperatura. A utilização de material genético resistente é uma
              das ferramentas importantes de prevenção.
            </p>
          </Card>

          <Card title="Orobanche">
            <p>
              Plantas parasitas do género <em>Orobanche</em> podem representar
              um problema sério em algumas regiões produtoras de girassol.
            </p>

            <p className="mt-3">
              A prevenção deve incluir sementes certificadas, rotação e
              utilização de materiais com resistência quando disponíveis.
            </p>
          </Card>

          <Card title="Sclerotinia">
            <p>
              Pode causar problemas no caule e no capítulo, sobretudo sob
              condições ambientais favoráveis ao desenvolvimento do fungo.
            </p>
          </Card>

          <Card title="Ferrugem">
            <p>
              Pode afectar a superfície foliar e reduzir a capacidade
              fotossintética quando a pressão da doença é elevada.
            </p>
          </Card>

          <Card title="Lagartas">
            <p>
              Algumas lagartas podem atacar folhas, capítulos ou sementes.
              A decisão de tratamento deve ser baseada em monitorização.
            </p>
          </Card>

          <Card title="Pássaros">
            <p>
              Em determinadas regiões, aves podem provocar perdas directamente
              nas sementes maduras.
            </p>
          </Card>
        </div>

        <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-6">
          <h3 className="font-bold text-red-950">
            Manejo integrado de pragas e doenças
          </h3>

          <p className="mt-2 text-sm leading-7 text-red-900">
            Em 2024, o PDAC realizou formação sobre manejo integrado de pragas
            e doenças em Malanje e Cuanza Norte, incluindo o girassol entre as
            culturas abordadas. Isso reforça a importância de capacitação e
            diagnóstico local em vez de tratamentos automáticos.
          </p>
        </div>
      </section>

      {/* FLORESCIMENTO */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="10 • Desenvolvimento"
            title="Do botão floral ao enchimento da semente"
            description="As fases reprodutivas são determinantes para rendimento e teor de óleo."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card title="Botão floral">
              <p>
                O capítulo começa a diferenciar-se e a planta direcciona
                recursos para a fase reprodutiva.
              </p>
            </Card>

            <Card title="Floração">
              <p>
                A floração é uma fase crítica para polinização e formação
                posterior das sementes.
              </p>
            </Card>

            <Card title="Enchimento">
              <p>
                Água e nutrientes continuam importantes para o enchimento das
                sementes e acumulação de óleo.
              </p>
            </Card>

            <Card title="Maturação">
              <p>
                A secagem progressiva do capítulo e das sementes conduz à fase
                de colheita.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* COLHEITA */}
      <section id="colheita" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="11 • Colheita e pós-colheita"
          title="Preservar a qualidade das sementes"
          description="O rendimento económico depende também da qualidade da semente colhida e da eficiência do pós-colheita."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card title="Maturação">
            <p>
              A colheita deve ocorrer quando a cultura atingir maturidade
              adequada ao sistema de produção e equipamento disponível.
            </p>
          </Card>

          <Card title="Humidade">
            <p>
              O teor de humidade deve ser acompanhado para reduzir perdas,
              danos mecânicos e problemas de armazenamento.
            </p>
          </Card>

          <Card title="Limpeza">
            <p>
              Separar impurezas, sementes danificadas e materiais estranhos
              antes do armazenamento.
            </p>
          </Card>

          <Card title="Armazenamento">
            <p>
              Proteger contra humidade, pragas, aquecimento e deterioração da
              qualidade do óleo.
            </p>
          </Card>
        </div>

        <div className="mt-8 rounded-2xl bg-slate-900 p-7 text-white">
          <h3 className="text-xl font-bold">
            Para produção de óleo, qualidade importa
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-300">
            Não basta medir toneladas. A indústria precisa considerar teor de
            óleo, qualidade das sementes, impurezas, humidade, acidez e outros
            parâmetros definidos no processo de recepção e transformação.
          </p>
        </div>
      </section>

      {/* CADEIA DE VALOR */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="12 • Cadeia de valor"
            title="Do campo ao óleo alimentar"
            description="O girassol ganha importância económica quando produção, armazenamento, transporte e transformação industrial estão ligados."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            <Card title="Semente">
              <p>Material genético de qualidade e adaptado.</p>
            </Card>

            <Card title="Produção">
              <p>Solo, água, fertilização e protecção da cultura.</p>
            </Card>

            <Card title="Colheita">
              <p>Redução de perdas e preservação da qualidade.</p>
            </Card>

            <Card title="Transformação">
              <p>Extracção, refinação e embalagem de óleo.</p>
            </Card>

            <Card title="Mercado">
              <p>Ligação entre produtor, indústria, distribuidor e consumidor.</p>
            </Card>
          </div>

          <div className="mt-8 rounded-3xl bg-green-950 p-8 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-300">
              Agroindústria
            </p>

            <h3 className="mt-2 text-2xl font-black">
              O potencial do girassol não termina na semente
            </h3>

            <p className="mt-4 max-w-4xl text-sm leading-7 text-green-100">
              A expansão sustentável da cultura pode contribuir para reduzir
              dependência de matérias-primas importadas, desde que exista
              produtividade competitiva, logística, unidades de transformação,
              qualidade industrial e mercado estável.
            </p>
          </div>
        </div>
      </section>

      {/* ANGOLA */}
      <section id="angola" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="13 • Girassol em Angola"
          title="Da agricultura familiar à agroindústria"
          description="A cultura já está presente em diferentes sistemas agrícolas angolanos e começa a ganhar novas oportunidades de investigação e transformação."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Malanje">
            <p>
              O MOSAP3 identifica o girassol entre as culturas de Malanje.
              Além disso, o PDAC realizou em 2024 uma formação de manejo
              integrado de pragas e doenças que incluiu produtores e técnicos
              ligados à cultura.
            </p>
          </Card>

          <Card title="Huambo">
            <p>
              A UJES está envolvida em investigação de zoneamento agroecológico
              do girassol. O estudo considera clima, declive, exposição solar,
              pH, textura, água e outras variáveis.
            </p>
          </Card>

          <Card title="Moxico Leste">
            <p>
              A empresa Horta do Garcia informa produzir girassol no Moxico
              Leste, mostrando que a cultura já está presente também no leste
              do país em sistemas empresariais.
            </p>
          </Card>

          <Card title="Sanza Pombo — Uíge">
            <p>
              Em Maio de 2026, o MINAGRIF informou que uma fazenda em Sanza
              Pombo preparava mais 400 hectares para cultivo de girassol.
            </p>
          </Card>

          <Card title="Bié e corredor do Lobito">
            <p>
              Estudos de oportunidade agrícola identificam o Bié como uma
              região com condições favoráveis para oleaginosas, incluindo
              girassol, embora a aptidão de cada área deva ser validada no
              terreno.
            </p>
          </Card>

          <Card title="Huíla">
            <p>
              O girassol aparece entre as culturas agrícolas da província,
              podendo integrar sistemas de produção de cereais e oleaginosas.
            </p>
          </Card>
        </div>

        <div className="mt-10 rounded-3xl border border-green-200 bg-green-50 p-8">
          <h3 className="text-2xl font-black text-green-950">
            Oportunidade estratégica
          </h3>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-green-900">
            O girassol pode ser importante para Angola por três razões
            combinadas: diversificação agrícola, fornecimento de matéria-prima
            para óleo alimentar e possibilidade de integração em rotações com
            cereais e outras culturas.
          </p>
        </div>
      </section>

      {/* PROVÍNCIAS */}
      <section
        id="provincias"
        className="border-y border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="14 • Angola por província"
            title="Ferramenta territorial"
            description="A presença da província nesta lista não significa que exista uma estatística específica de produção. A ferramenta serve para organizar informação e futuras evidências."
          />

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="provincia"
                className="mb-2 block text-sm font-bold text-slate-800"
              >
                Seleccionar província
              </label>

              <select
                id="provincia"
                value={provinciaSelecionada}
                onChange={(e) => setProvinciaSelecionada(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
              >
                <option value="Todas">Todas as províncias</option>

                {provincias.map((provincia) => (
                  <option key={provincia.nome} value={provincia.nome}>
                    {provincia.nome}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="pesquisa"
                className="mb-2 block text-sm font-bold text-slate-800"
              >
                Pesquisar
              </label>

              <input
                id="pesquisa"
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
                placeholder="Ex.: Huambo, Malanje, oleaginosa..."
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {provinciasFiltradas.map((provincia) => (
              <article
                key={provincia.nome}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-green-300 hover:bg-green-50"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-bold text-slate-950">
                    {provincia.nome}
                  </h3>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">
                    {provincia.regiao}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {provincia.nota}
                </p>
              </article>
            ))}
          </div>

          {provinciasFiltradas.length === 0 && (
            <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-900">
              Nenhuma província encontrada.
            </div>
          )}
        </div>
      </section>

      {/* INVESTIGAÇÃO */}
      <section id="investigacao" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="15 • Investigação"
          title="Perguntas que Angola ainda precisa responder"
          description="A AGROINOVA pode transformar estas questões em temas de investigação, ensaios e bases de conhecimento."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card title="Zoneamento">
            <p>
              Quais municípios apresentam maior aptidão agroecológica para o
              girassol nas diferentes províncias?
            </p>
          </Card>

          <Card title="Genética">
            <p>
              Quais acessos nacionais apresentam melhor estabilidade produtiva
              entre diferentes ambientes?
            </p>
          </Card>

          <Card title="Teor de óleo">
            <p>
              Quais materiais apresentam maior teor e melhor qualidade de óleo
              sob condições angolanas?
            </p>
          </Card>

          <Card title="Fertilização">
            <p>
              Quais doses e combinações nutricionais são mais eficientes nos
              diferentes tipos de solo?
            </p>
          </Card>

          <Card title="Densidade">
            <p>
              Qual população de plantas maximiza rendimento e teor de óleo para
              cada grupo de ambiente e cultivar?
            </p>
          </Card>

          <Card title="Água">
            <p>
              Qual é o benefício económico da irrigação suplementar em
              diferentes regiões produtoras?
            </p>
          </Card>

          <Card title="Doenças">
            <p>
              Quais doenças apresentam maior importância económica nas
              diferentes zonas agroecológicas?
            </p>
          </Card>

          <Card title="Mercado">
            <p>
              Onde estão os principais compradores e unidades de transformação
              capazes de absorver a produção nacional?
            </p>
          </Card>

          <Card title="Óleo nacional">
            <p>
              Qual seria o impacto económico de integrar produtores,
              armazenagem, esmagamento, refinação e distribuição?
            </p>
          </Card>
        </div>
      </section>

      {/* FICHA DE CAMPO */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="16 • Ficha de campo"
            title="Informação que o técnico deve registar"
            description="Uma plataforma nacional precisa também de dados de campo estruturados."
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card title="Localização">
              <p>Província, município, comuna e coordenadas.</p>
            </Card>

            <Card title="Área">
              <p>Área plantada e área efectivamente colhida.</p>
            </Card>

            <Card title="Genética">
              <p>Variedade ou híbrido, fornecedor e lote.</p>
            </Card>

            <Card title="Solo">
              <p>pH, textura, matéria orgânica e nutrientes analisados.</p>
            </Card>

            <Card title="Data">
              <p>Sementeira, emergência, floração e maturação.</p>
            </Card>

            <Card title="Densidade">
              <p>Espaçamento e população final de plantas.</p>
            </Card>

            <Card title="Fertilização">
              <p>Produtos, doses, datas e método de aplicação.</p>
            </Card>

            <Card title="Água">
              <p>Sequeiro ou irrigado, fonte de água e operações realizadas.</p>
            </Card>

            <Card title="Sanidade">
              <p>Pragas, doenças, intensidade e medidas tomadas.</p>
            </Card>

            <Card title="Produção">
              <p>Peso total, área colhida e produtividade calculada.</p>
            </Card>

            <Card title="Qualidade">
              <p>Humidade, teor de óleo e outros parâmetros disponíveis.</p>
            </Card>

            <Card title="Comercialização">
              <p>Comprador, preço, transporte e destino da produção.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="17 • Fontes"
          title="Referências utilizadas"
          description="As fontes abaixo permitem aprofundar os dados e separar evidência angolana de referências agronómicas gerais."
        />

        <div className="space-y-4">
          <a
            href="https://www.ine.gov.ao/publicacoes/detalhes/NDY0MDE%3D"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-green-300 hover:bg-green-50"
          >
            <strong className="text-slate-950">
              INE — Anuário Estatístico da Agricultura
            </strong>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Publicação estatística do MINAGRIF disponibilizada pelo INE,
              incluindo campanhas agrícolas e produção vegetal.
            </p>
          </a>

          <a
            href="https://www.ujes.ao/magnifica-reitora-da-ujes-recebe-delegacao-da-anpg-para-avaliar-progresso-do-projecto-de-zoneamento-agroecologico"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-green-300 hover:bg-green-50"
          >
            <strong className="text-slate-950">
              UJES — Zoneamento agroecológico do girassol
            </strong>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Investigação em curso sobre aptidão do girassol no Huambo.
            </p>
          </a>

          <a
            href="https://pdac.ao/formacao-sobre-manejo-integrado-de-pragas-e-doencas-fortalece-agricultores-em-malanje/"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-green-300 hover:bg-green-50"
          >
            <strong className="text-slate-950">
              PDAC — Manejo integrado em Malanje e Cuanza Norte
            </strong>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Formação de produtores e técnicos incluindo o girassol entre as
              culturas abordadas.
            </p>
          </a>

          <a
            href="https://minagrif.gov.ao/web/noticias/gado-bovino-e-producao-de-arroz-nas-fazendas-sao-francisco-e-talisma-em-sanza-pombo-avanca-com-niveis-satisfatorios"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-green-300 hover:bg-green-50"
          >
            <strong className="text-slate-950">
              MINAGRIF — Sanza Pombo
            </strong>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Informação de 2026 sobre preparação de mais 400 hectares para
              cultivo de girassol.
            </p>
          </a>

          <a
            href="https://mosap3.ao/wp-content/uploads/2024/07/MOSAP3_ESMF_Pt.pdf"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-green-300 hover:bg-green-50"
          >
            <strong className="text-slate-950">
              MOSAP3 — Quadro de Gestão Ambiental e Social
            </strong>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Documento com caracterização agroecológica e económica das
              províncias abrangidas.
            </p>
          </a>

          <a
            href="https://pdac.ao/pgas-aprovados/"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-green-300 hover:bg-green-50"
          >
            <strong className="text-slate-950">
              PDAC — Planos de Gestão Ambiental e Social
            </strong>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Registo de projectos agrícolas, incluindo a Fazenda Girassol.
            </p>
          </a>

          <a
            href="https://www.adra-angola.org/artigos/membros-das-comunidades-de-malanje-recebem-novo-projecto-da-adra-para-impulsionar-o-fortalecimento-da-producao-de-leguminosas-e-oleaginosas"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-green-300 hover:bg-green-50"
          >
            <strong className="text-slate-950">
              ADRA Angola — Leguminosas e oleaginosas
            </strong>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Projecto em Malanje que inclui girassol entre as oleaginosas
              trabalhadas com agricultores familiares.
            </p>
          </a>

          <a
            href="https://www.iac.sp.gov.br/cultivares/inicio/resultados.php?pesquisa=Girassol"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-green-300 hover:bg-green-50"
          >
            <strong className="text-slate-950">
              Instituto Agronómico — Cultivares de girassol
            </strong>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Referência genética internacional utilizada para consulta de
              características varietais.
            </p>
          </a>
        </div>
      </section>

      {/* INTEGRIDADE */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <h2 className="text-2xl font-black text-white">
            Integridade dos dados AGROINOVA
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm leading-7 text-slate-300">
                Dados de planeamento ou projecção não serão apresentados como
                produção actual.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm leading-7 text-slate-300">
                Uma experiência localizada, como os 400 hectares em preparação
                em Sanza Pombo, não será transformada em área nacional.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm leading-7 text-slate-300">
                A investigação de zoneamento no Huambo será apresentada como
                investigação, não como mapa definitivo de aptidão para toda
                Angola.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm leading-7 text-slate-300">
                Referências internacionais são utilizadas para princípios
                agronómicos, enquanto evidências angolanas são identificadas
                separadamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="font-black text-green-800">
              AGROINOVA ANGOLA
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Conhecimento, Tecnologia e Inovação ao Serviço do Campo Angolano.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm font-semibold">
            <Link
              href="/agricultura"
              className="text-slate-600 hover:text-green-700"
            >
              Agricultura
            </Link>

            <Link
              href="/agricultura/algodao"
              className="text-slate-600 hover:text-green-700"
            >
              Algodão
            </Link>

            <Link
              href="/agricultura/soja"
              className="text-slate-600 hover:text-green-700"
            >
              Soja
            </Link>

            <Link
              href="/agricultura/amendoim"
              className="text-slate-600 hover:text-green-700"
            >
              Amendoim
            </Link>

            <Link
              href="/dados"
              className="text-slate-600 hover:text-green-700"
            >
              Dados
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}