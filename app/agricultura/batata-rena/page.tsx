"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Provincia = {
  nome: string;
  registo: string;
  destaque?: boolean;
};

type Imagem = {
  src: string;
  href: string;
  alt: string;
  legenda: string;
  fonte: string;
};

const provincias: Provincia[] = [
  {
    nome: "Bengo",
    registo: "RAPP 2019–2020: 1,7% das EAPF agrícolas cultivavam batata-rena.",
  },
  {
    nome: "Benguela",
    registo: "RAPP 2019–2020: 3,6% das EAPF agrícolas cultivavam batata-rena.",
  },
  {
    nome: "Bié",
    registo:
      "RAPP 2019–2020: 12,9% das EAPF agrícolas cultivavam batata-rena.",
    destaque: true,
  },
  {
    nome: "Cabinda",
    registo: "RAPP 2019–2020: 0,7% das EAPF agrícolas cultivavam batata-rena.",
  },
  {
    nome: "Cuando",
    registo:
      "Sem valor provincial diretamente comparável na base histórica apresentada nesta página. Não redistribuir dados antigos.",
  },
  {
    nome: "Cubango",
    registo:
      "Sem valor provincial diretamente comparável na base histórica apresentada nesta página. Não redistribuir dados antigos.",
  },
  {
    nome: "Cuanza Norte",
    registo:
      "RAPP 2019–2020: 1,4% das EAPF agrícolas cultivavam batata-rena.",
  },
  {
    nome: "Cuanza Sul",
    registo:
      "RAPP 2019–2020: 7,1% das EAPF agrícolas cultivavam batata-rena.",
  },
  {
    nome: "Cunene",
    registo:
      "Sem valor de batata-rena apresentado no quadro provincial consultado.",
  },
  {
    nome: "Huambo",
    registo:
      "RAPP 2019–2020: 28,8% das EAPF agrícolas cultivavam batata-rena.",
    destaque: true,
  },
  {
    nome: "Huíla",
    registo:
      "RAPP 2019–2020: 5,0% das EAPF agrícolas cultivavam batata-rena.",
    destaque: true,
  },
  {
    nome: "Icolo e Bengo",
    registo:
      "Província da actual divisão administrativa. Não atribuir automaticamente o valor histórico de Luanda.",
  },
  {
    nome: "Luanda",
    registo:
      "RAPP 2019–2020: 0,9% das EAPF agrícolas cultivavam batata-rena.",
  },
  {
    nome: "Lunda Norte",
    registo:
      "RAPP 2019–2020: 2,2% das EAPF agrícolas cultivavam batata-rena.",
  },
  {
    nome: "Lunda Sul",
    registo:
      "RAPP 2019–2020: 5,4% das EAPF agrícolas cultivavam batata-rena.",
  },
  {
    nome: "Malanje",
    registo:
      "RAPP 2019–2020: 16,0% das EAPF agrícolas cultivavam batata-rena.",
    destaque: true,
  },
  {
    nome: "Moxico",
    registo:
      "RAPP 2019–2020: 5,9% das EAPF agrícolas cultivavam batata-rena.",
  },
  {
    nome: "Moxico Leste",
    registo:
      "Província da actual divisão administrativa. Não atribuir automaticamente o valor histórico de Moxico.",
  },
  {
    nome: "Namibe",
    registo:
      "RAPP 2019–2020: 0,9% das EAPF agrícolas cultivavam batata-rena.",
  },
  {
    nome: "Uíge",
    registo:
      "RAPP 2019–2020: 6,1% das EAPF agrícolas cultivavam batata-rena.",
  },
  {
    nome: "Zaire",
    registo:
      "RAPP 2019–2020: 0,7% das EAPF agrícolas cultivavam batata-rena.",
  },
];

const imagens: Imagem[] = [
  {
    src: "https://cdn.prod.website-files.com/5a8e71e3c7881c000130ff13/60a94730c1eb3a4c674ef949_PLANTA%C3%87%C3%83O.jpg",
    href: "https://www.adra-angola.org/artigos/quatro-a-seis-toneladas-de-batata-rena-serao-colhidas-em-agosto",
    alt: "Agricultoras durante a colheita de batata-rena na Caála, Huambo",
    legenda:
      "Agricultoras da Cooperativa Agropecuária Epinduko durante a colheita de batata-rena na Aldeia do Lungongo, município da Caála, Huambo.",
    fonte: "ADRA Angola",
  },
  {
    src: "https://pdac.ao/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-15-at-15.57.12.jpeg",
    href: "https://pdac.ao/jovem-agricultor-do-huambo-colhe-9-toneladas-de-batata-rena-na-janela-pdac-jovem/",
    alt: "Batata-rena ensacada após colheita no Huambo",
    legenda:
      "Tubérculos de batata-rena acondicionados em sacos após uma colheita apoiada pelo PDAC Jovem no Huambo.",
    fonte: "PDAC Angola",
  },
  {
    src: "https://pdac.ao/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-15-at-14.11.43.jpeg",
    href: "https://pdac.ao/jovem-agricultor-de-caconda-alcanca-colheita-da-batata-rena-de-8-32-toneladas-por-hectare/",
    alt: "Agricultor de Caconda segurando batatas-rena recém-colhidas",
    legenda:
      "Batata-rena recém-colhida em Caconda, província da Huíla, numa experiência documentada pelo PDAC Jovem.",
    fonte: "PDAC Angola",
  },
  {
    src: "https://cdn.prod.website-files.com/5a8e71e3c7881c000130ff13/5ff832223c7873a1f72cc83e_Planta%C3%A7%C3%A3o%20de%20batata%20no%20Huambo%20%28cooperativa%20Omuenho%20Ocaliye%29.jpg",
    href: "https://www.adra-angola.org/artigos/um-passo-para-acabar-com-a-fome-e-a-pobreza",
    alt: "Colheita de batata no Huambo",
    legenda:
      "Colheita de batata numa exploração da Cooperativa Omuenho Wocaliye, no Huambo.",
    fonte: "ADRA Angola",
  },
  {
    src: "https://pdac.ao/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-30-at-22.14.35-450x600.jpeg",
    href: "https://pdac.ao/a-cadeia-de-beneficiamento-da-batata-rena-pdac/",
    alt: "Batata-rena recém-colhida em cesto",
    legenda:
      "Tubérculos de batata-rena recém-colhidos, ainda com solo aderente à superfície.",
    fonte: "PDAC Angola",
  },
  {
    src: "https://media.potatopro.com/angola-potato-variety-testing-809.jpg",
    href: "https://www.potatopro.com/news/2016/dutch-company-support-commercial-angola-potato-production",
    alt: "Ensaio de variedades de batata em Matala, Huíla",
    legenda:
      "Ensaio de variedades de batata realizado em Matala, província da Huíla.",
    fonte: "PotatoPro",
  },
];

const fontes = [
  {
    titulo: "INE / RAPP 2019–2020",
    texto:
      "Recenseamento Agropecuário e Pescas. A batata-rena era cultivada por cerca de 9% das explorações agropecuárias familiares que praticavam produção agrícola, com forte expressão no Centro e Sul.",
    href: "https://www.fao.org/fileadmin/templates/ess/ess_test_folder/World_Census_Agriculture/WCA_2020/WCA_2020_new_doc/ANG_REP3_POR_2019_2020.pdf",
  },
  {
    titulo: "PDAC — Cadeia de beneficiamento da batata-rena",
    texto:
      "Documento técnico sobre produção, clima, cadeia de valor e experiências produtivas da batata-rena em Angola.",
    href: "https://pdac.ao/a-cadeia-de-beneficiamento-da-batata-rena-pdac/",
  },
  {
    titulo: "Investigação realizada no Huambo",
    texto:
      "Estudo experimental da cultivar Romano sobre espaçamento e calibre de tubérculos-semente em condições edafoclimáticas de Huambo.",
    href: "https://agris.fao.org/search/en/providers/122643/records/69036171b901ffe5ca65a7e9",
  },
  {
    titulo: "ADRA Angola",
    texto:
      "Experiências de produção e colheita de batata-rena por organizações de produtores em Angola.",
    href: "https://www.adra-angola.org/artigos/quatro-a-seis-toneladas-de-batata-rena-serao-colhidas-em-agosto",
  },
  {
    titulo: "PDAC Jovem",
    texto:
      "Experiências de jovens produtores de batata-rena no Huambo e na Huíla.",
    href: "https://pdac.ao/jovem-agricultor-do-huambo-colhe-9-toneladas-de-batata-rena-na-janela-pdac-jovem/",
  },
];

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mb-8 max-w-4xl">
      <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-green-700">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>

      <p className="mt-3 text-base leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <h3 className="text-lg font-extrabold text-slate-900">{title}</h3>
      <div className="mt-3 text-sm leading-7 text-slate-600">{children}</div>
    </article>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-800 ring-1 ring-green-100">
      {children}
    </span>
  );
}

export default function BatataRenaPage() {
  const [provincia, setProvincia] = useState("Huambo");
  const [busca, setBusca] = useState("");

  const provinciaSelecionada = useMemo(
    () => provincias.find((item) => item.nome === provincia),
    [provincia]
  );

  const imagensFiltradas = useMemo(() => {
    const termo = busca.trim().toLowerCase();

    if (!termo) {
      return imagens;
    }

    return imagens.filter((imagem) =>
      `${imagem.alt} ${imagem.legenda} ${imagem.fonte}`
        .toLowerCase()
        .includes(termo)
    );
  }, [busca]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-green-950">
        <img
          src={imagens[0].src}
          alt="Produção de batata-rena em Angola"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-green-950/75" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-950 via-green-950/80 to-green-900/45" />

        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-4xl">
            <div className="mb-6 flex flex-wrap gap-2">
              <Tag>AGROINOVA ANGOLA</Tag>
              <Tag>Raízes e tubérculos</Tag>
              <Tag>Solanum tuberosum L.</Tag>
            </div>

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-green-200">
              Agricultura • Conhecimento técnico
            </p>

            <h1 className="text-5xl font-black tracking-tight text-white md:text-7xl">
              Batata-rena
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50 md:text-xl">
              Guia técnico sobre a produção de batata-rena em Angola,
              integrando agronomia, material de plantação, manejo do solo,
              água, nutrição, sanidade, colheita, pós-colheita, mercado e
              investigação realizada em condições angolanas.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#agronomia"
                className="rounded-xl bg-green-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-500"
              >
                Explorar conteúdo técnico
              </a>

              <a
                href="#angola"
                className="rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                Ver dados de Angola
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-6 py-4 text-sm text-slate-500 md:px-10">
          <Link href="/agricultura" className="font-semibold hover:text-green-700">
            Agricultura
          </Link>
          <span>/</span>
          <span className="font-semibold text-green-700">Batata-rena</span>
        </div>
      </div>

      {/* RESUMO */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <InfoCard title="Identificação">
            <p>
              Nome científico:{" "}
              <strong className="text-slate-900">
                Solanum tuberosum L.
              </strong>
            </p>
            <p className="mt-2">
              Família botânica:{" "}
              <strong className="text-slate-900">Solanaceae</strong>.
            </p>
            <p className="mt-2">
              A parte comercial é um{" "}
              <strong className="text-slate-900">tubérculo</strong>,
              diferente da batata-doce, que é uma raiz de reserva.
            </p>
          </InfoCard>

          <InfoCard title="Importância em Angola">
            <p>
              O RAPP 2019–2020 indica que a batata-rena era praticada por
              cerca de 9% das explorações agropecuárias familiares que
              realizavam produção agrícola.
            </p>
            <p className="mt-3">
              O cultivo apresentava maior expressão no Centro e Sul,
              especialmente no Huambo e Bié.
            </p>
          </InfoCard>

          <InfoCard title="Foco do AGROINOVA">
            <p>
              A página combina dados oficiais, investigação científica,
              experiências produtivas documentadas e referências técnicas.
            </p>
            <p className="mt-3">
              Resultados de uma fazenda ou ensaio experimental não são
              apresentados como média nacional.
            </p>
          </InfoCard>
        </div>
      </section>

      {/* NAVEGAÇÃO INTERNA */}
      <div className="sticky top-0 z-30 border-y border-green-100 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-3 text-sm md:px-10">
          {[
            ["#agronomia", "Agronomia"],
            ["#semente", "Tubérculo-semente"],
            ["#manejo", "Manejo"],
            ["#sanidade", "Sanidade"],
            ["#colheita", "Colheita"],
            ["#angola", "Angola"],
            ["#investigacao", "Investigação"],
            ["#fontes", "Fontes"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="whitespace-nowrap rounded-lg px-3 py-2 font-semibold text-slate-600 hover:bg-green-50 hover:text-green-700"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* GALERIA */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <SectionTitle
          eyebrow="Produção real"
          title="Batata-rena cultivada em Angola"
          text="A plataforma privilegia imagens de explorações, agricultores, colheitas e ensaios documentados em Angola. Cada imagem abre a publicação ou fonte original."
        />

        <div className="mb-6 max-w-xl">
          <label
            htmlFor="busca-imagens"
            className="mb-2 block text-sm font-bold text-slate-700"
          >
            Procurar nas imagens
          </label>

          <input
            id="busca-imagens"
            value={busca}
            onChange={(event) => setBusca(event.target.value)}
            placeholder="Ex.: Huambo, Huíla, colheita..."
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {imagensFiltradas.map((imagem) => (
            <a
              key={imagem.src}
              href={imagem.href}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={imagem.src}
                  alt={imagem.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-green-700">
                  {imagem.fonte}
                </p>

                <p className="mt-2 text-sm font-semibold leading-6 text-slate-800">
                  {imagem.legenda}
                </p>

                <p className="mt-3 text-xs font-bold text-green-700">
                  Abrir fonte original →
                </p>
              </div>
            </a>
          ))}
        </div>

        {imagensFiltradas.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-500">
            Nenhuma imagem corresponde à pesquisa.
          </div>
        )}
      </section>

      {/* AGRONOMIA */}
      <section id="agronomia" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <SectionTitle
            eyebrow="Base agronómica"
            title="Como funciona a cultura"
            text="A batata-rena apresenta exigências diferentes das raízes e tubérculos tropicais. O rendimento comercial depende da combinação entre temperatura, qualidade do tubérculo-semente, estrutura do solo, água, nutrição e sanidade."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <InfoCard title="Crescimento vegetativo">
              <p>
                Depois da emergência, a planta desenvolve caules, folhas e
                sistema radicular. A área foliar é determinante para a
                produção de assimilados que posteriormente sustentam a
                formação e o enchimento dos tubérculos.
              </p>
            </InfoCard>

            <InfoCard title="Tuberização">
              <p>
                A tuberização é sensível às condições térmicas. Temperaturas
                elevadas, especialmente durante a noite, podem prejudicar a
                formação e o enchimento dos tubérculos.
              </p>
              <p className="mt-3">
                O PDAC refere uma faixa favorável de aproximadamente 15–20 °C
                para a produção e destaca a importância de temperaturas
                amenas.
              </p>
            </InfoCard>

            <InfoCard title="Ciclo">
              <p>
                A duração do ciclo não deve ser tratada como um número único
                para todo o território angolano. Ela varia segundo cultivar,
                temperatura, altitude, data de plantação, água, nutrição e
                objetivo da produção.
              </p>
            </InfoCard>

            <InfoCard title="Luz e fotoperíodo">
              <p>
                O fotoperíodo interage com a temperatura e com o material
                genético. Cultivares diferentes podem responder de forma
                diferente às condições de cada ambiente.
              </p>
            </InfoCard>

            <InfoCard title="Altitude e ambiente">
              <p>
                O planalto central oferece condições particularmente
                importantes para a cultura. O PDAC identifica Huambo, Bié e
                Huíla entre as áreas de produção bem-sucedida.
              </p>
            </InfoCard>

            <InfoCard title="Objetivo produtivo">
              <p>
                A escolha do material e do sistema de produção deve considerar
                se a finalidade é consumo fresco, comercialização, produção de
                tubérculo-semente ou abastecimento de mercados específicos.
              </p>
            </InfoCard>
          </div>
        </div>
      </section>

      {/* CLIMA E SOLO */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <SectionTitle
          eyebrow="Ambiente"
          title="Clima e solo"
          text="Não existe uma única combinação de clima e solo válida para todas as zonas produtoras de Angola. O diagnóstico local deve preceder a definição do calendário e do manejo."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <InfoCard title="Temperatura">
            <p>
              A batata-rena é uma cultura de clima relativamente fresco. O
              PDAC indica que temperaturas amenas favorecem a tuberização e
              refere que temperaturas noturnas superiores a 22 °C podem
              reduzir significativamente a produção de tubérculos.
            </p>

            <div className="mt-4 rounded-xl bg-green-50 p-4">
              <p className="font-bold text-green-900">
                Referência técnica
              </p>
              <p className="mt-1 text-green-800">
                15–20 °C é apresentada pelo PDAC como faixa associada a boas
                condições produtivas, não como regra universal para todas as
                cultivares e localidades.
              </p>
            </div>
          </InfoCard>

          <InfoCard title="Solo">
            <p>
              O solo deve permitir bom desenvolvimento radicular e formação
              dos tubérculos sem encharcamento prolongado. Estrutura,
              drenagem, fertilidade, matéria orgânica e reação do solo devem
              ser avaliadas antes da plantação.
            </p>

            <p className="mt-3">
              No ensaio realizado no Centro Experimental de Chianga, Huambo,
              foi utilizado um solo Ferralítico Vermelho Lixiviado, classificado
              como Acrisol dístrico e ródico.
            </p>
          </InfoCard>

          <InfoCard title="Acidez e fertilidade">
            <p>
              O estudo de Huambo descreveu limitações relacionadas com acidez,
              baixo teor de matéria orgânica e disponibilidade de nutrientes.
              Isso reforça a importância de análise do solo antes de definir
              doses de fertilizantes.
            </p>
          </InfoCard>

          <InfoCard title="Drenagem">
            <p>
              O excesso de água reduz a qualidade das raízes e favorece
              problemas sanitários. Em áreas sujeitas a acumulação de água,
              devem ser avaliados drenagem, camalhões e época de plantação.
            </p>
          </InfoCard>
        </div>
      </section>

      {/* SEMENTE */}
      <section id="semente" className="bg-green-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <SectionTitle
            eyebrow="Material de plantação"
            title="Tubérculo-semente"
            text="Na batata-rena, a qualidade do tubérculo-semente é uma das decisões mais importantes da lavoura. Material contaminado ou fisiologicamente inadequado pode comprometer todo o campo."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-extrabold">
                Sanidade
              </h3>
              <p className="mt-3 text-sm leading-7 text-green-50">
                Deve-se priorizar material de plantação saudável e com origem
                conhecida. Doenças transmitidas pelo tubérculo podem
                multiplicar-se entre campanhas.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-extrabold">
                Calibre
              </h3>
              <p className="mt-3 text-sm leading-7 text-green-50">
                O tamanho do tubérculo-semente influencia o número de olhos,
                reservas disponíveis e vigor inicial. A investigação em Huambo
                avaliou 28–35, 35–45 e 45–55 mm.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-extrabold">
                Brotação
              </h3>
              <p className="mt-3 text-sm leading-7 text-green-50">
                O estado fisiológico da semente influencia a emergência.
                Tubérculos excessivamente envelhecidos, danificados ou com
                brotação inadequada podem produzir estandes irregulares.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-extrabold">
                Corte do tubérculo
              </h3>
              <p className="mt-3 text-sm leading-7 text-green-50">
                O corte pode aumentar o número de unidades de plantação, mas
                exige muito cuidado com sanidade, tamanho dos fragmentos,
                número de olhos e cicatrização.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-extrabold">
                Multiplicação
              </h3>
              <p className="mt-3 text-sm leading-7 text-green-50">
                Para produção de semente, deve existir um sistema que preserve
                identidade varietal e qualidade sanitária. Não se deve assumir
                que toda batata comercial seja automaticamente adequada como
                tubérculo-semente.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-extrabold">
                Resultado em Huambo
              </h3>
              <p className="mt-3 text-sm leading-7 text-green-50">
                No estudo da cultivar Romano, o tratamento com tubérculos de
                35–45 mm associado a 90 × 30 cm apresentou rendimento médio
                de 16,4 t/ha.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PLANTIO */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <SectionTitle
          eyebrow="Implantação"
          title="Preparação do terreno e plantação"
          text="A preparação deve criar condições para desenvolvimento uniforme dos estolões e tubérculos, facilitar a aeração e permitir uma colheita com menores danos mecânicos."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <InfoCard title="1. Diagnóstico da área">
            <p>
              Avaliar textura, drenagem, compactação, fertilidade, histórico
              de doenças, disponibilidade de água e cultura anterior.
            </p>
          </InfoCard>

          <InfoCard title="2. Preparação do solo">
            <p>
              O solo deve ficar suficientemente destorroado para permitir
              plantação uniforme, mas sem pulverização excessiva que favoreça
              problemas estruturais e erosão.
            </p>
          </InfoCard>

          <InfoCard title="3. Sulcos ou camalhões">
            <p>
              A formação do terreno deve facilitar a cobertura dos tubérculos
              e permitir expansão adequada durante a tuberização.
            </p>
          </InfoCard>

          <InfoCard title="4. Profundidade">
            <p>
              A profundidade deve ser ajustada à textura, humidade e sistema
              de plantação. Tubérculos demasiado superficiais ficam mais
              expostos; demasiado profundos podem dificultar emergência e
              colheita.
            </p>
          </InfoCard>

          <InfoCard title="5. Espaçamento">
            <p>
              No ensaio de Huambo, utilizaram-se 90 cm entre linhas e 15, 20,
              25 ou 30 cm entre plantas.
            </p>

            <p className="mt-3 font-semibold text-green-800">
              Resultado experimental de referência: 90 × 30 cm + tubérculo
              semente de 35–45 mm → 16,4 t/ha em média no ensaio.
            </p>
          </InfoCard>

          <InfoCard title="6. Atenção à densidade">
            <p>
              Maior densidade pode aumentar o número de hastes por unidade de
              área, mas também altera competição por luz, água e nutrientes.
              A densidade deve ser escolhida de acordo com cultivar e objetivo
              produtivo.
            </p>
          </InfoCard>
        </div>
      </section>

      {/* MANEJO */}
      <section id="manejo" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <SectionTitle
            eyebrow="Manejo"
            title="Água, nutrição, amontoa e infestantes"
            text="O manejo deve ser acompanhado ao longo do ciclo. Uma lavoura que começa bem pode perder produtividade se sofrer défice hídrico, excesso de água, competição de infestantes ou desequilíbrio nutricional."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <InfoCard title="Irrigação">
              <p>
                A água deve ser fornecida de forma regular quando não houver
                precipitação suficiente, evitando tanto défice severo como
                encharcamento.
              </p>
            </InfoCard>

            <InfoCard title="Azoto">
              <p>
                O azoto estimula crescimento vegetativo, mas excesso pode
                prolongar a vegetação e prejudicar o equilíbrio entre parte
                aérea e formação de tubérculos.
              </p>
            </InfoCard>

            <InfoCard title="Fósforo e potássio">
              <p>
                A disponibilidade desses nutrientes deve ser determinada com
                base na análise do solo e na necessidade da cultura. Evitar
                recomendar doses fixas sem diagnóstico.
              </p>
            </InfoCard>

            <InfoCard title="Amontoa">
              <p>
                A amontoa ajuda a manter os tubérculos protegidos da luz e
                pode melhorar as condições de formação. Deve ser realizada
                sem danificar o sistema radicular.
              </p>
            </InfoCard>

            <InfoCard title="Infestantes">
              <p>
                A competição inicial é particularmente importante. O controlo
                deve considerar capina, amontoa e, quando tecnicamente
                justificado, herbicidas registados e utilizados conforme o
                rótulo.
              </p>
            </InfoCard>

            <InfoCard title="Cobertura do tubérculo">
              <p>
                Tubérculos expostos à luz podem desenvolver coloração verde e
                acumulação de glicoalcaloides. A cobertura adequada do solo é
                uma prática de qualidade e segurança alimentar.
              </p>
            </InfoCard>

            <InfoCard title="Monitorização">
              <p>
                O produtor deve observar semanalmente plantas, folhas,
                caules, solo, humidade, sinais de pragas e sintomas de
                doenças.
              </p>
            </InfoCard>

            <InfoCard title="Registo">
              <p>
                Registar data de plantação, cultivar, origem da semente,
                adubação, irrigação, tratamentos e colheita transforma a
                lavoura numa fonte de informação para a próxima campanha.
              </p>
            </InfoCard>
          </div>
        </div>
      </section>

      {/* SANIDADE */}
      <section id="sanidade" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <SectionTitle
          eyebrow="Proteção da cultura"
          title="Pragas e doenças"
          text="O diagnóstico deve preceder qualquer tratamento. Sintomas semelhantes podem ter causas diferentes e o uso indiscriminado de pesticidas pode gerar resistência, resíduos e custos desnecessários."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <InfoCard title="Traça da batata">
            <p>
              As larvas podem atacar folhas, caules e principalmente
              tubérculos, causando galerias e perdas comerciais.
            </p>
          </InfoCard>

          <InfoCard title="Pulgões">
            <p>
              Além dos danos directos, algumas espécies podem participar na
              transmissão de vírus. A monitorização da população é importante.
            </p>
          </InfoCard>

          <InfoCard title="Escaravelhos e outros insectos">
            <p>
              A identificação correcta do organismo é necessária antes de
              escolher qualquer método de controlo.
            </p>
          </InfoCard>

          <InfoCard title="Requeima">
            <p>
              Condições húmidas e temperaturas favoráveis podem favorecer
              doenças foliares. A prevenção começa com material saudável,
              ventilação do dossel e monitorização.
            </p>
          </InfoCard>

          <InfoCard title="Murchas bacterianas">
            <p>
              Problemas vasculares podem provocar murchidão e redução do
              desenvolvimento. Material de plantação e higiene da área são
              elementos fundamentais da prevenção.
            </p>
          </InfoCard>

          <InfoCard title="Viroses">
            <p>
              A utilização repetida de material vegetativo contaminado pode
              acumular vírus ao longo das gerações. Sistemas de produção de
              semente de qualidade são essenciais.
            </p>
          </InfoCard>

          <InfoCard title="Nemátodes">
            <p>
              Nemátodes podem afectar raízes e tubérculos. Rotação, material
              saudável e diagnóstico do solo ajudam a reduzir riscos.
            </p>
          </InfoCard>

          <InfoCard title="Podridões">
            <p>
              Ferimentos durante colheita, excesso de humidade e más condições
              de armazenamento aumentam o risco de podridões.
            </p>
          </InfoCard>

          <InfoCard title="Manejo integrado">
            <p>
              A estratégia recomendada é integrar prevenção, material saudável,
              rotação, monitorização, higiene, controlo cultural e, quando
              necessário, produtos fitossanitários autorizados.
            </p>
          </InfoCard>
        </div>
      </section>

      {/* COLHEITA */}
      <section id="colheita" className="bg-green-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <SectionTitle
            eyebrow="Pós-produção"
            title="Colheita, cura, classificação e armazenamento"
            text="A qualidade comercial não termina no campo. Tubérculos bem produzidos podem perder valor rapidamente se forem feridos, expostos à luz, armazenados em condições inadequadas ou misturados sem classificação."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <InfoCard title="Momento da colheita">
              <p>
                A decisão deve considerar maturidade, destino comercial,
                condição da parte aérea, tamanho dos tubérculos e necessidade
                de preservar material para semente.
              </p>
            </InfoCard>

            <InfoCard title="Redução de danos">
              <p>
                Evitar cortes, pancadas e perfurações. Ferimentos constituem
                portas de entrada para organismos causadores de podridão.
              </p>
            </InfoCard>

            <InfoCard title="Limpeza">
              <p>
                A remoção do excesso de solo deve ser feita de forma compatível
                com o destino do produto. Evitar lavagem seguida de
                armazenamento sem condições adequadas de secagem.
              </p>
            </InfoCard>

            <InfoCard title="Classificação">
              <p>
                Separar tubérculos por calibre, qualidade, danos e destino
                comercial melhora a organização da cadeia.
              </p>
            </InfoCard>

            <InfoCard title="Proteção da luz">
              <p>
                A batata destinada ao consumo deve permanecer protegida da
                luz. A exposição pode provocar esverdeamento e alterações
                indesejáveis.
              </p>
            </InfoCard>

            <InfoCard title="Armazenamento">
              <p>
                O local deve ser fresco, ventilado, limpo e protegido da luz,
                humidade excessiva, roedores e insectos.
              </p>
            </InfoCard>
          </div>
        </div>
      </section>

      {/* NUTRIÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <SectionTitle
          eyebrow="Alimentação"
          title="Valor nutricional e utilização"
          text="A batata-rena é uma importante fonte alimentar de energia e pode participar de diferentes cadeias de alimentação e transformação."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <InfoCard title="Amido">
            <p>
              O amido representa uma parte importante da matéria seca do
              tubérculo e explica grande parte da sua função energética na
              alimentação.
            </p>
          </InfoCard>

          <InfoCard title="Água">
            <p>
              A batata fresca possui elevado teor de água, razão pela qual
              necessita de cuidados especiais após a colheita.
            </p>
          </InfoCard>

          <InfoCard title="Proteína">
            <p>
              Embora não seja uma cultura destinada principalmente à produção
              de proteína, o tubérculo contém proteína e contribui para a
              dieta.
            </p>
          </InfoCard>

          <InfoCard title="Transformação">
            <p>
              Pode ser utilizada cozida, frita, assada e em diferentes
              preparações alimentares. A transformação também pode ampliar o
              mercado, desde que sejam respeitados requisitos de qualidade e
              segurança alimentar.
            </p>
          </InfoCard>
        </div>
      </section>

      {/* ANGOLA */}
      <section id="angola" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <SectionTitle
            eyebrow="Batata-rena em Angola"
            title="Onde a cultura tem maior expressão?"
            text="Os dados históricos do RAPP mostram uma forte presença da cultura no Centro e Sul. Os valores abaixo não devem ser confundidos com percentagens da área cultivada nem com produtividade."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl bg-green-900 p-7 text-white">
              <p className="text-sm font-bold uppercase tracking-widest text-green-200">
                Indicador nacional
              </p>

              <p className="mt-4 text-5xl font-black">≈ 9%</p>

              <p className="mt-3 text-sm leading-6 text-green-50">
                das EAPF que praticavam produção agrícola tinham batata-rena,
                segundo o RAPP 2019–2020.
              </p>
            </div>

            <div className="rounded-2xl border border-green-100 bg-green-50 p-7">
              <p className="text-sm font-bold uppercase tracking-widest text-green-700">
                Maior expressão
              </p>

              <p className="mt-4 text-3xl font-black text-slate-900">
                Huambo
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                O RAPP indica cerca de 28,8% das EAPF agrícolas da província
                com produção de batata-rena no período recenseado.
              </p>
            </div>

            <div className="rounded-2xl border border-green-100 bg-green-50 p-7">
              <p className="text-sm font-bold uppercase tracking-widest text-green-700">
                Outra zona importante
              </p>

              <p className="mt-4 text-3xl font-black text-slate-900">
                Bié
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                O RAPP indica cerca de 12,9% das EAPF agrícolas da província
                com produção de batata-rena.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <p className="font-extrabold text-amber-900">
              Atenção à leitura dos dados
            </p>

            <p className="mt-2 text-sm leading-7 text-amber-900/80">
              Estes valores são percentagens de explorações e não representam
              produtividade, toneladas produzidas ou hectares cultivados.
              Além disso, o RAPP corresponde à divisão territorial e ao período
              de 2019–2020. O AGROINOVA não redistribui automaticamente esses
              valores para a actual divisão de 21 províncias.
            </p>
          </div>
        </div>
      </section>

      {/* PROVÍNCIA */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <SectionTitle
          eyebrow="Exploração territorial"
          title="Consultar por província"
          text="Seleccione uma província para consultar a nota disponível nesta base. Quando a fonte histórica não permite correspondência segura com a actual divisão administrativa, o AGROINOVA mantém essa limitação explícita."
        />

        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          <div>
            <label
              htmlFor="provincia"
              className="mb-2 block text-sm font-bold text-slate-700"
            >
              Província
            </label>

            <select
              id="provincia"
              value={provincia}
              onChange={(event) => setProvincia(event.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
            >
              {provincias.map((item) => (
                <option key={item.nome} value={item.nome}>
                  {item.nome}
                </option>
              ))}
            </select>
          </div>

          {provinciaSelecionada && (
            <div
              className={`rounded-2xl border p-7 ${
                provinciaSelecionada.destaque
                  ? "border-green-200 bg-green-50"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-black text-slate-900">
                  {provinciaSelecionada.nome}
                </h3>

                {provinciaSelecionada.destaque && (
                  <Tag>Zona de forte expressão histórica</Tag>
                )}
              </div>

              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
                {provinciaSelecionada.registo}
              </p>

              <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-slate-400">
                Fonte de referência: RAPP 2019–2020 / INE
              </p>
            </div>
          )}
        </div>
      </section>

      {/* EXPERIÊNCIAS */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <SectionTitle
            eyebrow="Experiências documentadas"
            title="Resultados de produtores em Angola"
            text="Estes casos demonstram o potencial produtivo da cultura, mas não devem ser transformados em médias nacionais."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-bold text-green-300">Bailundo</p>
              <p className="mt-3 text-4xl font-black">33 t/ha</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Resultado reportado pela Fazenda Mitagro, em 1,5 ha, com
                aproximadamente 50,2 toneladas colhidas.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-bold text-green-300">Caconda</p>
              <p className="mt-3 text-4xl font-black">8,32 t/ha</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Resultado reportado pelo PDAC Jovem para uma experiência
                realizada em Caconda, Huíla.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-bold text-green-300">Caála</p>
              <p className="mt-3 text-4xl font-black">9 t</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Produção reportada por António Domingos numa área de 1 hectare
                no município da Caála.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-bold text-green-300">Huambo</p>
              <p className="mt-3 text-4xl font-black">16,4 t/ha</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Média do ensaio da cultivar Romano com tubérculo-semente
                35–45 mm e espaçamento 90 × 30 cm.
              </p>
            </article>
          </div>

          <div className="mt-8 rounded-2xl border border-green-800 bg-green-950 p-6">
            <p className="font-extrabold text-green-200">
              Como interpretar
            </p>

            <p className="mt-2 text-sm leading-7 text-green-50">
              Os resultados foram obtidos em locais, campanhas, materiais
              genéticos e sistemas de produção específicos. Eles servem para
              aprendizagem e comparação, mas não substituem ensaios locais nem
              estatísticas nacionais.
            </p>
          </div>
        </div>
      </section>

      {/* INVESTIGAÇÃO */}
      <section id="investigacao" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <SectionTitle
          eyebrow="Ciência aplicada"
          title="Investigação sobre batata-rena em Huambo"
          text="A página incorpora investigação realizada em condições angolanas, permitindo que o produtor e o estudante vejam como espaçamento e calibre do tubérculo-semente podem alterar o desempenho da cultura."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <InfoCard title="Ensaio da cultivar Romano">
            <p>
              O trabalho foi realizado no Centro Experimental de Chianga,
              Huambo, entre Outubro de 2011 e Janeiro de 2014.
            </p>

            <p className="mt-3">
              Foram avaliadas quatro distâncias entre plantas: 15, 20, 25 e
              30 cm, mantendo 90 cm entre linhas.
            </p>

            <p className="mt-3">
              Também foram estudados três calibres de tubérculo-semente:
              28–35 mm, 35–45 mm e 45–55 mm.
            </p>
          </InfoCard>

          <InfoCard title="Principais resultados">
            <p>
              O aumento da distância entre plantas e a utilização de
              tubérculos-semente maiores favoreceram o diâmetro do caule e a
              área foliar aos 75 dias após a plantação.
            </p>

            <p className="mt-3">
              Por outro lado, menor distância aumentou a altura e o número de
              caules por unidade de área.
            </p>

            <p className="mt-3 font-bold text-green-800">
              O rendimento médio de 16,4 t/ha foi obtido com 35–45 mm de
              tubérculo-semente e 90 × 30 cm.
            </p>
          </InfoCard>

          <InfoCard title="Condição edafoclimática do ensaio">
            <p>
              O experimento ocorreu sobre solo Ferralítico Vermelho Lixiviado,
              classificado como Acrisol dístrico e ródico.
            </p>

            <p className="mt-3">
              A temperatura média anual indicada no estudo variou entre
              aproximadamente 19 e 20 °C.
            </p>

            <p className="mt-3">
              Estes dados caracterizam o ambiente experimental e não devem ser
              generalizados para todas as áreas de produção de Angola.
            </p>
          </InfoCard>

          <InfoCard title="Outra investigação">
            <p>
              Também foram estudadas duas densidades de plantação com a
              cultivar Romano em Huambo, incluindo 0,75 × 0,30 m e
              0,90 × 0,30 m, utilizando tubérculos-semente de 35–45 mm.
            </p>

            <p className="mt-3">
              A existência de vários ensaios reforça a importância de estudar
              densidade e material de plantação de acordo com o ambiente.
            </p>
          </InfoCard>
        </div>
      </section>

      {/* CADEIA DE VALOR */}
      <section className="bg-green-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <SectionTitle
            eyebrow="Cadeia de valor"
            title="Da semente ao mercado"
            text="A produtividade é apenas uma parte do sistema. O valor económico depende também de qualidade, classificação, armazenamento, transporte, comercialização e disponibilidade de material de plantação."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <InfoCard title="Semente">
              <p>
                Material de plantação de qualidade constitui o primeiro elo da
                cadeia produtiva.
              </p>
            </InfoCard>

            <InfoCard title="Produção">
              <p>
                O produtor transforma terra, água, nutrientes, mão de obra e
                tecnologia em tubérculos comerciais.
              </p>
            </InfoCard>

            <InfoCard title="Pós-colheita">
              <p>
                Redução de danos e boa conservação diminuem perdas e mantêm
                qualidade comercial.
              </p>
            </InfoCard>

            <InfoCard title="Mercado">
              <p>
                Classificação por calibre e qualidade pode facilitar a
                comercialização e a definição de diferentes destinos.
              </p>
            </InfoCard>
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section id="fontes" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <SectionTitle
          eyebrow="Biblioteca técnica"
          title="Fontes utilizadas"
          text="O AGROINOVA distingue dados oficiais, investigação científica, documentos institucionais e experiências de produtores."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {fontes.map((fonte) => (
            <a
              key={fonte.titulo}
              href={fonte.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-green-300 hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-green-700">
                {fonte.titulo}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {fonte.texto}
              </p>

              <p className="mt-4 text-sm font-bold text-green-700">
                Consultar fonte original →
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* INTEGRIDADE */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-7">
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Integridade dos dados
            </p>

            <h2 className="mt-2 text-2xl font-black text-slate-900">
              O AGROINOVA não transforma experiências isoladas em estatísticas
              nacionais.
            </h2>

            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700">
              Dados do RAPP 2019–2020 são apresentados como dados históricos.
              Resultados de produtores apoiados pelo PDAC são apresentados como
              experiências documentadas. Resultados de ensaios científicos são
              apresentados como resultados experimentais. Quando uma fonte não
              permite correspondência segura com a actual divisão
              administrativa de Angola, o valor não é redistribuído.
            </p>
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="bg-green-950">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/agricultura/batata-doce"
              className="rounded-xl border border-white/20 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
            >
              ← Batata-doce
            </Link>

            <Link
              href="/agricultura"
              className="rounded-xl bg-green-600 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-green-500"
            >
              Todas as culturas
            </Link>

            <Link
              href="/agricultura/massango"
              className="rounded-xl border border-white/20 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
            >
              Próxima cultura: Massango →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}