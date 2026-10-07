"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Provincia = {
  nome: string;
  valor: string;
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
    valor: "0,1%",
  },
  {
    nome: "Benguela",
    valor: "2,9%",
  },
  {
    nome: "Bié",
    valor: "1,0%",
  },
  {
    nome: "Cabinda",
    valor: "0,1%",
  },
  {
    nome: "Cuando",
    valor:
      "A base histórica utilizava a configuração territorial anterior e registava Cuando Cubango como unidade. Não redistribuir automaticamente esse valor.",
  },
  {
    nome: "Cubango",
    valor:
      "A base histórica utilizava a configuração territorial anterior e registava Cuando Cubango como unidade. Não redistribuir automaticamente esse valor.",
  },
  {
    nome: "Cuanza Norte",
    valor: "0,0%",
  },
  {
    nome: "Cuanza Sul",
    valor: "0,0%",
  },
  {
    nome: "Cunene",
    valor: "93,6%",
    destaque: true,
  },
  {
    nome: "Huambo",
    valor: "0,3%",
  },
  {
    nome: "Huíla",
    valor: "34,5%",
    destaque: true,
  },
  {
    nome: "Icolo e Bengo",
    valor:
      "A actual província não corresponde directamente à unidade territorial do RAPP 2019–2020. Não atribuir o valor histórico de Luanda.",
  },
  {
    nome: "Luanda",
    valor: "0,0%",
  },
  {
    nome: "Lunda Norte",
    valor: "0,0%",
  },
  {
    nome: "Lunda Sul",
    valor: "0,1%",
  },
  {
    nome: "Malanje",
    valor: "0,0%",
  },
  {
    nome: "Moxico",
    valor: "4,8%",
  },
  {
    nome: "Moxico Leste",
    valor:
      "A actual província resulta da nova divisão territorial. Não redistribuir automaticamente o valor histórico de Moxico.",
  },
  {
    nome: "Namibe",
    valor: "47,4%",
    destaque: true,
  },
  {
    nome: "Uíge",
    valor: "0,0%",
  },
  {
    nome: "Zaire",
    valor: "0,4%",
  },
];

const imagens: Imagem[] = [
  {
    src: "https://alda-luterana.org/content/images/2026/08/data-src-image-9c67f8ff-c487-472a-a88b-7943ba21338e.jpeg",
    href: "https://alda-luterana.org/da-escola-de-campo-a-colheita-tchiveyo-celebra-resultados-da-producao-de-massango/",
    alt: "Massango colhido em Tchiveyo, Cuvelai, Cunene",
    legenda:
      "Massango após a colheita realizada pela Escola de Campo Dom Mpepo, na aldeia de Tchiveyo, município de Cuvelai, Cunene, em 2026.",
    fonte: "ALDA Angola — Projecto CRC",
  },
  {
    src: "https://alda-luterana.org/content/images/2026/08/data-src-image-4d067c60-309d-4768-a9d6-864c186cc32a.jpeg",
    href: "https://alda-luterana.org/da-escola-de-campo-a-colheita-tchiveyo-celebra-resultados-da-producao-de-massango/",
    alt: "Espigas de massango após a colheita em Tchiveyo",
    legenda:
      "Espigas de massango reunidas após a colheita na comunidade de Tchiveyo, Cuvelai, Cunene.",
    fonte: "ALDA Angola — Projecto CRC",
  },
];

const fontes = [
  {
    titulo: "RAPP 2019–2020 — INE",
    texto:
      "Base estatística nacional utilizada para caracterizar a distribuição das explorações que praticavam o cultivo de massango por província.",
    href: "https://www.fao.org/fileadmin/templates/ess/ess_test_folder/World_Census_Agriculture/WCA_2020/WCA_2020_new_doc/ANG_REP3_POR_2019_2020.pdf",
  },
  {
    titulo: "Ficha Técnica 16 — Massango",
    texto:
      "Ficha técnica elaborada no âmbito do FRESAN/IDA com informações sobre utilização, condições de crescimento e práticas agroecológicas.",
    href: "https://fresan-angola.org/wp-content/uploads/2024/11/FT-16-Massango-V7-1.pdf",
  },
  {
    titulo: "FRESAN — sementes para a agricultura familiar",
    texto:
      "Documento sobre sistemas de sementes e produção de massango no sul de Angola, com destaque para o Cunene.",
    href: "https://fresan-angola.org/wp-content/uploads/2022/08/AP2-A.-1.2.2-a-Relato%CC%81rio-Final_SEMENTES-PARA-A-AGRICULTURA-FAMILIAR-INCLUINDO-AS-PR%C3%81TICAS.pdf",
  },
  {
    titulo: "ALDA Angola — Tchiveyo",
    texto:
      "Experiência de Escola de Campo e colheita de massango no Cuvelai, Cunene, em 2026.",
    href: "https://alda-luterana.org/da-escola-de-campo-a-colheita-tchiveyo-celebra-resultados-da-producao-de-massango/",
  },
  {
    titulo: "Governo Provincial do Namibe",
    texto:
      "Experiência agrícola da comuna da Lola, município da Bibala, com mais de 30 hectares de culturas incluindo massango.",
    href: "https://namibe.gov.ao/web/noticias/lola-em-rota-de-recuperar-titulo-de-celeiro-do-namibe",
  },
  {
    titulo: "ICRISAT — Pearl Millet",
    texto:
      "Referência internacional para melhoramento genético, produção e resiliência do pearl millet.",
    href: "https://www.icrisat.org/crops/pearl-millet/overview",
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

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <h3 className="text-lg font-extrabold text-slate-900">{title}</h3>

      <div className="mt-3 text-sm leading-7 text-slate-600">
        {children}
      </div>
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

export default function MassangoPage() {
  const [provincia, setProvincia] = useState("Cunene");
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
          alt="Massango produzido no Cunene"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-green-950/80" />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-950 via-green-950/85 to-green-900/45" />

        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-4xl">
            <div className="mb-6 flex flex-wrap gap-2">
              <Tag>AGROINOVA ANGOLA</Tag>
              <Tag>Cereais</Tag>
              <Tag>Pennisetum glaucum</Tag>
              <Tag>Resiliência climática</Tag>
            </div>

            <p className="text-sm font-bold uppercase tracking-[0.22em] text-green-200">
              Agricultura • Cereais
            </p>

            <h1 className="mt-3 text-5xl font-black tracking-tight text-white md:text-7xl">
              Massango
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50 md:text-xl">
              Guia técnico sobre o cultivo de massango em Angola, com foco em
              adaptação à seca, solos, sementes, estabelecimento da cultura,
              fertilidade, manejo, sanidade, colheita, conservação,
              alimentação e sistemas agrícolas das regiões secas.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#agronomia"
                className="rounded-xl bg-green-600 px-5 py-3 text-sm font-bold text-white hover:bg-green-500"
              >
                Explorar agronomia
              </a>

              <a
                href="#angola"
                className="rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur hover:bg-white/20"
              >
                Ver Massango em Angola
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-6 py-4 text-sm text-slate-500 md:px-10">
          <Link
            href="/agricultura"
            className="font-semibold hover:text-green-700"
          >
            Agricultura
          </Link>

          <span>/</span>

          <span className="font-semibold text-green-700">Massango</span>
        </div>
      </div>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card title="Identificação">
            <p>
              Nome científico:{" "}
              <strong className="text-slate-900">
                Pennisetum glaucum
              </strong>
              .
            </p>

            <p className="mt-2">
              Nome internacional: pearl millet.
            </p>

            <p className="mt-2">
              É um cereal anual da família Poaceae, cultivado sobretudo em
              ambientes quentes e secos.
            </p>
          </Card>

          <Card title="Importância para Angola">
            <p>
              O massango tem forte expressão agrícola no sul do país,
              particularmente no Cunene, Namibe, Huíla e na antiga unidade
              territorial Cuando Cubango.
            </p>

            <p className="mt-3">
              A sua importância está ligada à alimentação, segurança alimentar
              e capacidade de produção em ambientes onde outras culturas
              cerealíferas podem enfrentar maiores limitações.
            </p>
          </Card>

          <Card title="Resiliência">
            <p>
              A ficha técnica do FRESAN/IDA destaca resistência à seca,
              tolerância a condições de salinidade ligeira e adaptação a solos
              pobres.
            </p>

            <p className="mt-3">
              Isso não significa que o massango produza bem sem água,
              nutrientes ou manejo: significa que possui características
              fisiológicas que lhe permitem suportar condições adversas melhor
              que várias culturas.
            </p>
          </Card>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <div className="sticky top-0 z-30 border-y border-green-100 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-3 text-sm md:px-10">
          {[
            ["#agronomia", "Agronomia"],
            ["#solo", "Solo e água"],
            ["#semente", "Sementes"],
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

      {/* IMAGENS */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <SectionTitle
          eyebrow="Produção documentada"
          title="Massango real produzido em Angola"
          text="Nesta página usamos imagens de uma experiência recente de produção e colheita no município de Cuvelai, província do Cunene. As fotografias abrem a publicação original da instituição que documentou a actividade."
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
            placeholder="Ex.: Cunene, colheita, Tchiveyo..."
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {imagensFiltradas.map((imagem) => (
            <a
              key={imagem.src}
              href={imagem.href}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[16/9] overflow-hidden bg-slate-100">
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
      </section>

      {/* AGRONOMIA */}
      <section id="agronomia" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <SectionTitle
            eyebrow="Base agronómica"
            title="Como cresce o massango"
            text="O massango pertence ao grupo de cereais adaptados a ambientes quentes e semiáridos. A cultura combina crescimento relativamente rápido com um sistema radicular capaz de explorar água em profundidade."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card title="Sistema radicular">
              <p>
                A ficha técnica do FRESAN destaca a profundidade do sistema
                radicular como uma das características associadas à tolerância
                a períodos de estiagem.
              </p>
            </Card>

            <Card title="Crescimento">
              <p>
                A cultura desenvolve folhas longas e uma inflorescência em
                espiga compacta, onde se formam os grãos.
              </p>
            </Card>

            <Card title="Ciclo curto">
              <p>
                O ciclo depende da variedade, temperatura, disponibilidade de
                água, fertilidade e data de plantação. Não existe um único
                número de dias válido para todas as situações angolanas.
              </p>
            </Card>

            <Card title="Eficiência no uso da água">
              <p>
                O massango utiliza a água de forma eficiente em comparação
                com culturas menos adaptadas à seca. Ainda assim, défices
                severos durante fases críticas podem reduzir fortemente o
                rendimento.
              </p>
            </Card>

            <Card title="Calor">
              <p>
                A ficha técnica angolana indica uma temperatura ideal de
                crescimento entre 25 e 30 °C e capacidade de suportar episódios
                de calor superiores a 40 °C.
              </p>
            </Card>

            <Card title="Produção dupla">
              <p>
                O massango pode integrar sistemas em que se procura diversificar
                a produção cerealífera. O Governo também tem defendido a sua
                expansão em zonas produtoras de milho da Huíla.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* SOLO E ÁGUA */}
      <section id="solo" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <SectionTitle
          eyebrow="Ambiente"
          title="Solo, chuva e conservação da água"
          text="A resistência à seca não elimina a necessidade de um bom estabelecimento da cultura. O objectivo é aproveitar ao máximo a água disponível e reduzir perdas por escoamento, evaporação e competição."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card title="Solos">
            <p>
              O massango pode ser cultivado em solos pobres e arenosos, segundo
              referências técnicas internacionais e a ficha FRESAN/IDA.
            </p>

            <p className="mt-3">
              Porém, solos com melhor estrutura e fertilidade podem permitir
              maior produtividade quando a água não é limitante.
            </p>
          </Card>

          <Card title="Drenagem">
            <p>
              Embora seja tolerante à seca, o massango não deve ser confundido
              com uma cultura adaptada ao encharcamento permanente.
            </p>
          </Card>

          <Card title="Matéria orgânica">
            <p>
              A incorporação de matéria orgânica pode contribuir para melhorar
              estrutura, retenção de água e disponibilidade gradual de
              nutrientes.
            </p>
          </Card>

          <Card title="Conservação da água">
            <p>
              A ficha técnica recomenda práticas agroecológicas que aumentem a
              infiltração e aproveitem a água superficial, especialmente em
              zonas secas.
            </p>
          </Card>

          <Card title="Chimpacas e retenção">
            <p>
              Em determinadas zonas secas do sul, sistemas de retenção de água
              de escoamento podem apoiar culturas de ciclo curto. A aplicação
              deve respeitar as características específicas da área.
            </p>
          </Card>

          <Card title="Análise do solo">
            <p>
              A fertilização deve ser orientada por análise de solo sempre que
              possível. Não é tecnicamente seguro colocar uma dose universal
              de NPK para todas as províncias de Angola.
            </p>
          </Card>
        </div>
      </section>

      {/* SEMENTE */}
      <section id="semente" className="bg-green-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <SectionTitle
            eyebrow="Semente"
            title="Qualidade da semente é parte da produtividade"
            text="No sul de Angola, o sistema de sementes do massango possui forte componente familiar. A qualidade da semente, conservação e selecção entre campanhas são portanto elementos centrais."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-extrabold">Semente própria</h3>
              <p className="mt-3 text-sm leading-7 text-green-50">
                A conservação de parte da produção para a campanha seguinte é
                uma prática importante em sistemas familiares. Deve-se
                seleccionar material de plantas saudáveis e produtivas.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-extrabold">Selecção</h3>
              <p className="mt-3 text-sm leading-7 text-green-50">
                Espigas ou sementes provenientes de plantas com bom desempenho
                podem ser seleccionadas antes da armazenagem, evitando material
                danificado ou contaminado.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-extrabold">Conservação</h3>
              <p className="mt-3 text-sm leading-7 text-green-50">
                A humidade é uma das principais preocupações durante o
                armazenamento. O grão destinado à semente precisa de permanecer
                seco, protegido de pragas e correctamente identificado.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-extrabold">Variedades</h3>
              <p className="mt-3 text-sm leading-7 text-green-50">
                Não apresentamos aqui nomes comerciais como “variedades
                recomendadas para Angola” sem documentação suficiente.
                Materiais melhorados devem ser vinculados a uma fonte de
                melhoramento ou programa de sementes.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-extrabold">
                Cunene
              </h3>
              <p className="mt-3 text-sm leading-7 text-green-50">
                Um estudo do FRESAN indica que o sistema local inclui produção
                de semente pelas próprias famílias, mostrando a importância da
                conservação e qualidade do material utilizado.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-extrabold">
                Semente melhorada
              </h3>
              <p className="mt-3 text-sm leading-7 text-green-50">
                Programas de fomento podem introduzir sementes melhoradas e
                testadas. No Cunene, projectos apoiados pela FAO/FRESAN já
                distribuíram sementes de massango a famílias produtoras.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PLANTIO */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <SectionTitle
          eyebrow="Implantação"
          title="Preparação e plantação"
          text="No massango, o estabelecimento rápido e uniforme é particularmente importante em ambientes onde a janela de disponibilidade de água é curta."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card title="Escolha da época">
            <p>
              A data deve acompanhar o início efectivo das chuvas na zona
              produtora. Plantar demasiado cedo pode expor a semente a períodos
              secos; plantar tarde pode reduzir o tempo disponível antes da
              estiagem.
            </p>
          </Card>

          <Card title="Preparação do solo">
            <p>
              Deve-se procurar um leito de sementeira que permita contacto
              adequado entre semente e solo, evitando compactação excessiva.
            </p>
          </Card>

          <Card title="Sementeira">
            <p>
              A profundidade deve ser ajustada à textura e humidade do solo.
              Sementes pequenas não devem ser enterradas excessivamente.
            </p>
          </Card>

          <Card title="Emergência">
            <p>
              A uniformidade da emergência facilita o manejo de infestantes,
              reduz competição e melhora a sincronização da maturação.
            </p>
          </Card>

          <Card title="Densidade">
            <p>
              A densidade deve ser adaptada ao material genético, fertilidade,
              disponibilidade de água e objectivo da produção. Não existe uma
              única densidade universal para Angola.
            </p>
          </Card>

          <Card title="Consociação">
            <p>
              A ficha técnica do FRESAN apresenta consórcios como
              <strong> massango × feijão macunde</strong> e
              <strong> massango × feijão guandu</strong>, além de sistemas com
              abóbora.
            </p>
          </Card>
        </div>
      </section>

      {/* MANEJO */}
      <section id="manejo" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <SectionTitle
            eyebrow="Manejo"
            title="Fertilidade, infestantes e água"
            text="A capacidade de resistir à seca não significa que a cultura dispense nutrientes. O manejo deve procurar eficiência no uso dos recursos disponíveis."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card title="Azoto">
              <p>
                O azoto é importante para crescimento vegetativo e formação de
                biomassa, mas doses excessivas podem aumentar crescimento
                vegetativo sem necessariamente produzir maior rendimento.
              </p>
            </Card>

            <Card title="Fósforo">
              <p>
                O fósforo participa do desenvolvimento radicular e do
                metabolismo energético. A necessidade deve ser avaliada segundo
                análise do solo.
              </p>
            </Card>

            <Card title="Potássio">
              <p>
                O potássio participa do equilíbrio hídrico e de processos
                fisiológicos. A recomendação deve considerar fertilidade local
                e sistema produtivo.
              </p>
            </Card>

            <Card title="Matéria orgânica">
              <p>
                Em sistemas de baixa disponibilidade de insumos, a matéria
                orgânica pode contribuir para melhorar as propriedades físicas
                e biológicas do solo.
              </p>
            </Card>

            <Card title="Infestantes">
              <p>
                O controlo inicial é importante porque as plantas jovens podem
                competir com infestantes por água, luz e nutrientes.
              </p>
            </Card>

            <Card title="Capina">
              <p>
                A capina deve ser realizada antes que as infestantes estabeleçam
                forte competição. O número de operações depende da área,
                infestação e sistema de cultivo.
              </p>
            </Card>

            <Card title="Rotação">
              <p>
                A rotação com leguminosas pode contribuir para diversificação
                do sistema e melhoria da fertilidade, além de reduzir alguns
                problemas associados à repetição da mesma cultura.
              </p>
            </Card>

            <Card title="Agrofloresta">
              <p>
                A ficha técnica do FRESAN indica que o massango pode integrar
                sistemas agroflorestais e ser utilizado como cultura de
                arranque em áreas degradadas.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* SANIDADE */}
      <section id="sanidade" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <SectionTitle
          eyebrow="Protecção"
          title="Pragas, doenças, aves e plantas parasitas"
          text="O diagnóstico deve ser feito no campo. Nem todos os problemas descritos internacionalmente ocorrem com a mesma intensidade em Angola."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card title="Míldio do massango">
            <p>
              O míldio causado por <em>Sclerospora graminicola</em> é uma das
              doenças mais importantes do pearl millet em diferentes regiões
              produtoras.
            </p>
          </Card>

          <Card title="Carvão">
            <p>
              Doenças de carvão podem afectar a inflorescência e os grãos.
              Material de plantação saudável e selecção são componentes da
              prevenção.
            </p>
          </Card>

          <Card title="Ferrugem">
            <p>
              A ferrugem pode provocar lesões foliares e reduzir a capacidade
              fotossintética quando a infecção é severa.
            </p>
          </Card>

          <Card title="Ergot">
            <p>
              O ergot é uma doença importante do pearl millet em determinadas
              regiões. A prevenção deve considerar sanidade da semente e
              materiais adaptados.
            </p>
          </Card>

          <Card title="Striga">
            <p>
              <em>Striga hermonthica</em> é uma planta parasita particularmente
              problemática em partes da África. A gestão combina rotação,
              fertilidade, controlo de infestantes e materiais resistentes
              quando disponíveis.
            </p>
          </Card>

          <Card title="Brocas do caule">
            <p>
              Brocas podem danificar os caules e provocar redução de vigor ou
              quebra. O nível de importância depende da região.
            </p>
          </Card>

          <Card title="Lagartas da espiga">
            <p>
              Insectos que atacam a inflorescência podem afectar directamente
              a formação e qualidade dos grãos.
            </p>
          </Card>

          <Card title="Aves">
            <p>
              As aves podem causar perdas relevantes próximo da maturação.
              Vigilância, métodos de afugentamento e colheita no momento
              adequado são importantes.
            </p>
          </Card>

          <Card title="Lagarta-do-cartucho">
            <p>
              A presença de <em>Spodoptera frugiperda</em> deve ser monitorizada
              porque a praga também pode atacar cereais. A decisão de controlo
              deve basear-se na presença e intensidade do ataque.
            </p>
          </Card>
        </div>
      </section>

      {/* COLHEITA */}
      <section id="colheita" className="bg-green-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <SectionTitle
            eyebrow="Pós-produção"
            title="Colheita, secagem e conservação"
            text="No sul de Angola, onde o massango tem grande importância alimentar, conservar correctamente o grão é tão importante quanto produzi-lo."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card title="Maturidade">
              <p>
                A colheita deve ocorrer quando a panícula e os grãos atingem
                maturidade adequada ao destino da produção.
              </p>
            </Card>

            <Card title="Secagem">
              <p>
                O grão deve ser suficientemente seco antes do armazenamento.
                Humidade elevada favorece fungos, deterioração e perda de
                qualidade.
              </p>
            </Card>

            <Card title="Limpeza">
              <p>
                Retirar impurezas, restos vegetais, sementes de infestantes e
                materiais danificados melhora a conservação.
              </p>
            </Card>

            <Card title="Armazenamento">
              <p>
                O local deve permanecer seco, ventilado e protegido de
                insectos, roedores e humidade.
              </p>
            </Card>

            <Card title="Semente">
              <p>
                O lote destinado à próxima campanha deve ser separado do grão
                destinado ao consumo e identificado.
              </p>
            </Card>

            <Card title="Perdas pós-colheita">
              <p>
                Pragas de armazenamento, humidade e contaminação podem reduzir
                tanto quantidade como qualidade. O acompanhamento deve
                continuar depois da colheita.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ALIMENTAÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <SectionTitle
          eyebrow="Alimentação e utilização"
          title="O massango na alimentação e na pecuária"
          text="A ficha técnica do FRESAN/IDA apresenta múltiplas utilizações do massango, tornando-o uma cultura com importância simultaneamente alimentar, pecuária e ambiental."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card title="Farinha">
            <p>
              Os grãos podem ser transformados em farinha para preparação de
              alimentos tradicionais.
            </p>
          </Card>

          <Card title="Pirão e outros alimentos">
            <p>
              A farinha pode ser utilizada em pirão, bolos e outras
              preparações, de acordo com hábitos alimentares locais.
            </p>
          </Card>

          <Card title="Bebidas">
            <p>
              O cereal também é utilizado tradicionalmente na preparação de
              bebidas em diferentes comunidades.
            </p>
          </Card>

          <Card title="Alimentação animal">
            <p>
              O massango pode ser utilizado como grão, forragem ou em sistemas
              de alimentação animal.
            </p>
          </Card>

          <Card title="Forragem">
            <p>
              Determinados sistemas podem utilizar a biomassa para alimentação
              animal, desde que o manejo e o estádio de corte sejam adequados.
            </p>
          </Card>

          <Card title="Pastoreio">
            <p>
              A ficha técnica inclui o pastoreio directo entre os usos
              possíveis, dependendo do sistema produtivo.
            </p>
          </Card>

          <Card title="Recuperação do solo">
            <p>
              A cultura pode integrar estratégias de recuperação e cobertura,
              contribuindo para reciclagem de nutrientes e produção de
              biomassa.
            </p>
          </Card>

          <Card title="Segurança alimentar">
            <p>
              No Cunene, o massango possui importância directa na alimentação
              das famílias rurais e na resiliência diante da irregularidade
              das chuvas.
            </p>
          </Card>
        </div>
      </section>

      {/* ANGOLA */}
      <section id="angola" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <SectionTitle
            eyebrow="Dados de Angola"
            title="Onde o massango é mais praticado?"
            text="O RAPP 2019–2020 apresenta uma distribuição muito diferente da observada para outras culturas. O massango concentra-se fortemente nas zonas secas do sul."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-green-900 p-7 text-white">
              <p className="text-sm font-bold uppercase tracking-widest text-green-200">
                Cunene
              </p>

              <p className="mt-4 text-5xl font-black">93,6%</p>

              <p className="mt-3 text-sm leading-6 text-green-50">
                das EAPF agrícolas declaravam praticar o cultivo de massango
                no RAPP 2019–2020.
              </p>
            </div>

            <div className="rounded-2xl bg-green-800 p-7 text-white">
              <p className="text-sm font-bold uppercase tracking-widest text-green-200">
                Namibe
              </p>

              <p className="mt-4 text-5xl font-black">47,4%</p>

              <p className="mt-3 text-sm leading-6 text-green-50">
                das EAPF agrícolas declaravam praticar a cultura.
              </p>
            </div>

            <div className="rounded-2xl bg-green-700 p-7 text-white">
              <p className="text-sm font-bold uppercase tracking-widest text-green-100">
                Huíla
              </p>

              <p className="mt-4 text-5xl font-black">34,5%</p>

              <p className="mt-3 text-sm leading-6 text-green-50">
                das EAPF agrícolas declaravam cultivar massango.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Card title="Cuando Cubango na base histórica">
              <p>
                O RAPP 2019–2020 registou 48,1% das EAPF agrícolas com prática
                de cultivo de massango na antiga unidade provincial Cuando
                Cubango.
              </p>

              <p className="mt-3">
                Esse valor não deve ser dividido automaticamente entre as
                actuais províncias de Cuando e Cubango.
              </p>
            </Card>

            <Card title="Sul de Angola">
              <p>
                A concentração no sul está relacionada com a importância do
                cereal nos sistemas alimentares e agrícolas das zonas secas.
              </p>

              <p className="mt-3">
                Documentos técnicos também identificam massango e massambala
                como culturas adaptadas às regiões secas do Cunene e da Huíla.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* PROVÍNCIAS */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <SectionTitle
          eyebrow="Consulta territorial"
          title="Massango por província"
          text="Os valores abaixo são históricos e representam a proporção de EAPF agrícolas que praticavam o cultivo no RAPP 2019–2020. Não representam toneladas, hectares ou produtividade."
        />

        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          <div>
            <label
              htmlFor="provincia"
              className="mb-2 block text-sm font-bold text-slate-700"
            >
              Seleccionar província
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

              <p className="mt-5 text-4xl font-black text-green-800">
                {provinciaSelecionada.valor}
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Proporção histórica das EAPF agrícolas que praticavam o
                cultivo de massango no RAPP 2019–2020, quando existe
                correspondência directa.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* EXPERIÊNCIAS */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <SectionTitle
            eyebrow="Experiências angolanas"
            title="Massango em comunidades produtoras"
            text="A realidade produtiva do massango pode ser observada em diferentes contextos do sul de Angola."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-bold text-green-300">
                Tchiveyo — Cuvelai
              </p>

              <h3 className="mt-3 text-2xl font-black">
                Escola de Campo
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                Em 2026, a ECA Dom Mpepo realizou a colheita de massango
                depois de acompanhamento técnico e capacitação dos
                agricultores durante o ciclo.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-bold text-green-300">
                Lola — Bibala
              </p>

              <h3 className="mt-3 text-2xl font-black">
                Agricultura no Namibe
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                O Governo Provincial do Namibe documentou mais de 30 hectares
                cultivados na localidade de Tchitemo com massango, massambala,
                milho, abóbora, jinguba e feijão macunde.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-bold text-green-300">
                Cunene
              </p>

              <h3 className="mt-3 text-2xl font-black">
                Semente familiar
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                O FRESAN documentou a forte presença da produção de massango
                nos sistemas familiares do Cunene e a importância da própria
                família na produção e conservação de sementes.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* INVESTIGAÇÃO */}
      <section id="investigacao" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <SectionTitle
          eyebrow="Investigação e inovação"
          title="O futuro do massango em Angola"
          text="O melhoramento do massango deve combinar rendimento, adaptação ao clima, qualidade nutricional, resistência a pragas e doenças e adequação aos sistemas dos agricultores."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card title="Melhoramento genético">
            <p>
              Programas internacionais de melhoramento procuram materiais
              adaptados a diferentes agroecologias, incluindo resistência a
              doenças e tolerância a condições adversas.
            </p>
          </Card>

          <Card title="Biofortificação">
            <p>
              O ICRISAT destaca o desenvolvimento de materiais de massango com
              maior concentração de ferro e zinco, uma linha de investigação
              relevante para segurança alimentar.
            </p>
          </Card>

          <Card title="Resistência à seca">
            <p>
              O desenvolvimento de materiais mais eficientes no uso da água é
              estratégico para zonas sujeitas a variabilidade das chuvas.
            </p>
          </Card>

          <Card title="Resistência a doenças">
            <p>
              O míldio é uma das doenças prioritárias do melhoramento de
              massango em diferentes programas internacionais.
            </p>
          </Card>

          <Card title="Sistemas de sementes">
            <p>
              Para Angola, não basta desenvolver uma variedade: é necessário
              garantir multiplicação, conservação, distribuição, identidade
              varietal e acesso do agricultor.
            </p>
          </Card>

          <Card title="Conhecimento local">
            <p>
              Os sistemas tradicionais do Cunene constituem uma fonte
              importante de conhecimento sobre selecção, conservação e uso do
              cereal, que pode ser articulada com investigação científica.
            </p>
          </Card>
        </div>
      </section>

      {/* CALENDÁRIO */}
      <section className="bg-green-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <SectionTitle
            eyebrow="Planeamento"
            title="Ciclo produtivo no sul de Angola"
            text="O calendário exacto depende das chuvas locais. No sul, a época principal de cereais está associada ao período chuvoso, mas a data de sementeira deve acompanhar as condições reais de humidade."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <Card title="1. Pré-campanha">
              <p>
                Seleccionar sementes, preparar o terreno, reparar ferramentas
                e definir a área de cultivo.
              </p>
            </Card>

            <Card title="2. Início das chuvas">
              <p>
                Plantar quando existir humidade suficiente para garantir
                emergência e continuidade do estabelecimento.
              </p>
            </Card>

            <Card title="3. Desenvolvimento">
              <p>
                Controlar infestantes, acompanhar pragas, avaliar fertilidade
                e proteger a cultura durante períodos de défice hídrico.
              </p>
            </Card>

            <Card title="4. Maturação e colheita">
              <p>
                Proteger as panículas das aves, acompanhar maturidade e colher
                no momento adequado para reduzir perdas.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section id="fontes" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <SectionTitle
          eyebrow="Biblioteca"
          title="Fontes técnicas e institucionais"
          text="As recomendações internacionais abaixo servem como referência agronómica. Os dados sobre distribuição e experiências produtivas de Angola são mantidos separados."
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
              Dados históricos não são apresentados como estatísticas actuais.
            </h2>

            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700">
              Os valores provinciais desta página vêm do RAPP 2019–2020 e
              representam a proporção de EAPF agrícolas que declararam praticar
              a cultura. Não representam toneladas, hectares nem produtividade.
              Quando a actual divisão administrativa não permite uma
              correspondência segura com a base histórica, o AGROINOVA não
              redistribui o valor.
            </p>
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="bg-green-950">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/agricultura/batata-rena"
              className="rounded-xl border border-white/20 px-5 py-3 text-center text-sm font-bold text-white hover:bg-white/10"
            >
              ← Batata-rena
            </Link>

            <Link
              href="/agricultura"
              className="rounded-xl bg-green-600 px-5 py-3 text-center text-sm font-bold text-white hover:bg-green-500"
            >
              Todas as culturas
            </Link>

            <Link
              href="/agricultura/massambala"
              className="rounded-xl border border-white/20 px-5 py-3 text-center text-sm font-bold text-white hover:bg-white/10"
            >
              Próxima cultura: Massambala →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}