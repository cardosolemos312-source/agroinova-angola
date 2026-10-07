"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";

type Provincia = {
  nome: string;
  regiao: string;
  observacao: string;
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
    regiao: "Norte",
    observacao:
      "A produção deve ser avaliada segundo disponibilidade de água, drenagem, solos e material genético adaptado.",
  },
  {
    nome: "Benguela",
    regiao: "Centro-Oeste",
    observacao:
      "A produção pode assumir sistemas irrigados ou de sequeiro conforme a zona agroecológica.",
  },
  {
    nome: "Bié",
    regiao: "Centro",
    observacao:
      "O IIA tem realizado ensaios de novas variedades de arroz no município de Catabola.",
  },
  {
    nome: "Cabinda",
    regiao: "Norte",
    observacao:
      "O regime de humidade exige atenção especial à drenagem e à sanidade das plantas.",
  },
  {
    nome: "Cuando",
    regiao: "Leste/Sul",
    observacao:
      "A antiga configuração territorial Cuando Cubango não deve ser redistribuída automaticamente entre Cuando e Cubango.",
  },
  {
    nome: "Cubango",
    regiao: "Leste/Sul",
    observacao:
      "Existem oportunidades de expansão da produção, mas dados antigos de Cuando Cubango não devem ser repartidos automaticamente.",
  },
  {
    nome: "Cuanza Norte",
    regiao: "Norte",
    observacao:
      "Existem experiências de adaptação de variedades em condições locais, incluindo ensaios na Estação Agrícola do Quilombo.",
  },
  {
    nome: "Cuanza Sul",
    regiao: "Centro-Oeste",
    observacao:
      "A escolha do sistema deve considerar água, relevo, drenagem e época das chuvas.",
  },
  {
    nome: "Cunene",
    regiao: "Sul",
    observacao:
      "A produção deve ser cuidadosamente relacionada com disponibilidade hídrica e infraestrutura de irrigação.",
  },
  {
    nome: "Huambo",
    regiao: "Centro",
    observacao:
      "O IIA desenvolveu ensaios de novas variedades no município do Ukuma.",
  },
  {
    nome: "Huíla",
    regiao: "Sul",
    observacao:
      "O arroz pode ser explorado onde exista água suficiente e condições adequadas de solo e drenagem.",
  },
  {
    nome: "Icolo e Bengo",
    regiao: "Norte",
    observacao:
      "Não devem ser transferidos automaticamente dados estatísticos antigos de Luanda para a actual província.",
  },
  {
    nome: "Luanda",
    regiao: "Norte",
    observacao:
      "A produção depende sobretudo da disponibilidade de terra, água e viabilidade económica.",
  },
  {
    nome: "Lunda Norte",
    regiao: "Leste",
    observacao:
      "O ambiente pode oferecer oportunidades, mas a seleção da variedade deve ser validada localmente.",
  },
  {
    nome: "Lunda Sul",
    regiao: "Leste",
    observacao:
      "A província participa actualmente de acções de capacitação relacionadas com produção de sementes de arroz.",
  },
  {
    nome: "Malanje",
    regiao: "Norte/Centro",
    observacao:
      "O município de Lukembo destaca-se em experiências de produção empresarial e fornecimento de arroz.",
  },
  {
    nome: "Moxico",
    regiao: "Leste",
    observacao:
      "Existe actualmente forte actividade de formação, produção, sementes e processamento de arroz.",
  },
  {
    nome: "Moxico Leste",
    regiao: "Leste",
    observacao:
      "A avaliação da cultura deve ser feita com dados da configuração territorial actual.",
  },
  {
    nome: "Namibe",
    regiao: "Sul",
    observacao:
      "A produção depende fortemente da disponibilidade e gestão eficiente da água.",
  },
  {
    nome: "Uíge",
    regiao: "Norte",
    observacao:
      "Existem experiências empresariais recentes de cultivo de arroz em Sanza Pombo.",
  },
  {
    nome: "Zaire",
    regiao: "Norte",
    observacao:
      "A escolha das áreas deve considerar solos, água, drenagem e regime de precipitação.",
  },
];

const imagens: Imagem[] = [
  {
    src: "https://c2a.portais.gov.ao/uploads/large_IIA_a84df200d6.jpg",
    href: "https://minagrif.gov.ao/web/noticias/iia-testa-novas-variedades-de-arroz-no-huambo-e-bie",
    alt: "Preparação de terreno para ensaio de arroz em Angola",
    legenda:
      "Preparação de terreno associada aos ensaios de novas variedades de arroz do IIA.",
    fonte: "MINAGRIF / IIA",
  },
  {
    src: "https://c2a.portais.gov.ao/uploads/large_Imagem_do_Whats_App_de_2025_08_21_a_s_11_50_39_32b2d527_8dc4d5f7da.jpg",
    href: "https://minagrif.gov.ao/web/noticias/formacao-de-tecnicos-em-sementes-de-arroz-no-moxico",
    alt: "Agricultores e técnicos numa actividade relacionada com arroz no Moxico",
    legenda:
      "Agricultores e técnicos envolvidos em actividades de desenvolvimento da produção de arroz no Moxico.",
    fonte: "MINAGRIF / PDPA-Leste / IIA / JICA",
  },
  {
    src: "https://c2a.portais.gov.ao/uploads/449769196_786599786982372_5317472990512441853_n_857852714668bab101c0c2_95998ad53d.jpg",
    href: "https://luanda.gov.ao/web/noticias/cooperativa-de-ex-militares-para-produ%C3%A7%C3%A3o-e-cultivo-de-arroz",
    alt: "Campo de arroz em Icolo e Bengo",
    legenda:
      "Visita técnica a uma área de produção de arroz em Angola.",
    fonte: "Governo Provincial de Luanda",
  },
  {
    src: "https://economiarural.ao/wp-content/uploads/2023/04/Arroz-cultura26-1.jpg",
    href: "https://economiarural.ao/angola-gasta-26-milhoes-de-dolares-por-mes-em-importacao-de-arroz/",
    alt: "Panículas de arroz prontas para colheita",
    legenda:
      "Panículas de arroz em fase de maturação e colheita.",
    fonte: "Economia Rural",
  },
  {
    src: "https://static.africa-press.net/angola/sites/65/2022/05/img-628b7a232d1de.jpg",
    href: "https://www.africa-press.net/angola/all-news/new-solutions-for-rice-cultivation-in-northern-regions",
    alt: "Panículas de arroz cultivadas no Cuanza-Norte",
    legenda:
      "Arroz em campo numa experiência de cultivo no norte de Angola.",
    fonte: "Africa-Press",
  },
  {
    src: "https://static.africa-press.net/angola/sites/65/2023/04/postQueueImg_1682238948.49.jpg",
    href: "https://www.africa-press.net/angola/all-news/marsiris-farm-starts-harvesting-four-thousand-tons-of-rice",
    alt: "Colheita mecanizada de arroz em Angola",
    legenda:
      "Colheita mecanizada de arroz numa exploração de grande escala em Angola.",
    fonte: "Africa-Press",
  },
];

const referencias = [
  {
    titulo: "IIA testa novas variedades de arroz no Huambo e Bié",
    instituicao: "MINAGRIF / IIA",
    descricao:
      "Ensaio de materiais provenientes do IRRI no Ukuma, Huambo, e Catabola, Bié.",
    href: "https://minagrif.gov.ao/web/noticias/iia-testa-novas-variedades-de-arroz-no-huambo-e-bie",
  },
  {
    titulo: "Formação de técnicos em sementes de arroz no Moxico",
    instituicao: "MINAGRIF / IIA / PDPA-Leste / JICA",
    descricao:
      "Formação realizada em 2025 sobre cultivo, sementes, pós-colheita, comercialização, irrigação e máquinas.",
    href: "https://minagrif.gov.ao/web/noticias/formacao-de-tecnicos-em-sementes-de-arroz-no-moxico",
  },
  {
    titulo: "FADA e Food Life impulsionam produção de arroz no Moxico",
    instituicao: "MINAGRIF / FADA",
    descricao:
      "Parceria para financiamento, assistência técnica, insumos, comercialização e processamento.",
    href: "https://minagrif.gov.ao/web/noticias/fada-e-food-life-assinam-parceria-estrategica-para-impulsionar-producao-de-arroz-no-moxico",
  },
  {
    titulo: "Novas soluções para o cultivo do arroz nas regiões do Norte",
    instituicao: "CIAM",
    descricao:
      "Experiência de adaptação de dez materiais de arroz na Estação Agrícola do Quilombo, Cuanza-Norte.",
    href: "https://www.ciam.gov.ao/ao/noticia/1041",
  },
  {
    titulo: "Província do Bié vai produzir arroz em grande escala",
    instituicao: "CIAM / Jornal de Angola",
    descricao:
      "Experiência do município do Andulo e expansão de sementes e mecanização.",
    href: "https://ciam.gov.ao/ao/noticia/3604",
  },
  {
    titulo: "Produção de arroz nas fazendas de Sanza Pombo",
    instituicao: "MINAGRIF",
    descricao:
      "Experiência empresarial recente de produção e armazenamento de arroz no Uíge.",
    href: "https://minagrif.gov.ao/web/noticias/gado-bovino-e-producao-de-arroz-nas-fazendas-sao-francisco-e-talisma-em-sanza-pombo-avanca-com-niveis-satisfatorios",
  },
  {
    titulo: "Cadeia de produção e processamento de arroz no Moxico",
    instituicao: "MINAGRIF / FADA / Food Life",
    descricao:
      "Projecto ligado à futura unidade de processamento de arroz em Camanongue.",
    href: "https://minagrif.gov.ao/web/noticias/fada-e-food-life-assinam-parceria-estrategica-para-impulsionar-producao-de-arroz-no-moxico",
  },
  {
    titulo: "Sistemas sustentáveis de produção de arroz",
    instituicao: "FAO",
    descricao:
      "Referência sobre arroz irrigado, arroz de terras baixas, arroz de sequeiro e diferentes sistemas água-solo.",
    href: "https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/scpi-home/managing-ecosystems/sustainable-rice-systems/rice-what/en/",
  },
  {
    titulo: "Como gerir o arroz de forma sustentável",
    instituicao: "FAO",
    descricao:
      "Informação técnica sobre água, nivelamento, sementeira directa, transplante, fertilidade e infestantes.",
    href: "https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/scpi-home/managing-ecosystems/sustainable-rice-systems/rice-how/en/",
  },
  {
    titulo: "Gestão eficiente da água em arroz",
    instituicao: "FAO / IRRI",
    descricao:
      "Informação sobre gestão de água e métodos como Alternate Wetting and Drying.",
    href: "https://www.fao.org/family-farming/detail/en/c/1618095/",
  },
];

function Card({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-sm ${className}`}
    >
      <h3 className="mb-3 text-xl font-bold text-slate-900">{title}</h3>
      <div className="text-sm leading-7 text-slate-700">{children}</div>
    </article>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-800 ring-1 ring-green-200">
      {children}
    </span>
  );
}

export default function ArrozPage() {
  const [provincia, setProvincia] = useState("Moxico");
  const [busca, setBusca] = useState("");

  const provinciaSelecionada = useMemo(
    () =>
      provincias.find((item) => item.nome === provincia) ?? provincias[0],
    [provincia]
  );

  const fontesFiltradas = useMemo(() => {
    const termo = busca.trim().toLowerCase();

    if (!termo) return referencias;

    return referencias.filter(
      (item) =>
        item.titulo.toLowerCase().includes(termo) ||
        item.instituicao.toLowerCase().includes(termo) ||
        item.descricao.toLowerCase().includes(termo)
    );
  }, [busca]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-green-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url("${imagens[4].src}")`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-green-950 via-green-950/90 to-green-900/40" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-green-100">
            <Link
              href="/agricultura"
              className="hover:text-white"
            >
              Agricultura
            </Link>

            <span>/</span>

            <span>Arroz</span>
          </div>

          <div className="max-w-5xl">
            <div className="mb-5 flex flex-wrap gap-2">
              <Tag>Oryza sativa</Tag>
              <Tag>Cereal</Tag>
              <Tag>Sequeiro</Tag>
              <Tag>Irrigado</Tag>
              <Tag>AGROINOVA ANGOLA</Tag>
            </div>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
              Arroz
            </h1>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-green-50 sm:text-xl">
              Guia técnico sobre produção, variedades, água, solos, sementes,
              manejo, sanidade, colheita, pós-colheita e investigação do arroz
              em Angola.
            </p>

            <p className="mt-5 max-w-4xl text-sm leading-7 text-green-100">
              O arroz possui sistemas de produção muito diferentes. O
              AGROINOVA distingue arroz irrigado, arroz de terras baixas e
              arroz de sequeiro, evitando apresentar uma única técnica como
              adequada para todo o território nacional.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#agronomia"
              className="rounded-xl bg-white px-5 py-3 font-bold text-green-900 transition hover:bg-green-50"
            >
              Explorar agronomia
            </a>

            <a
              href="#angola"
              className="rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-bold text-white backdrop-blur transition hover:bg-white/20"
            >
              Arroz em Angola
            </a>
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <nav className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-3 text-sm font-semibold sm:px-8 lg:px-10">
          {[
            ["#visao-geral", "Visão geral"],
            ["#agronomia", "Agronomia"],
            ["#sementes", "Sementes"],
            ["#agua", "Água"],
            ["#manejo", "Manejo"],
            ["#sanidade", "Sanidade"],
            ["#pos-colheita", "Pós-colheita"],
            ["#angola", "Angola"],
            ["#investigacao", "Investigação"],
            ["#fontes", "Fontes"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="whitespace-nowrap rounded-lg px-3 py-2 hover:bg-green-50 hover:text-green-800"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        {/* VISÃO GERAL */}
        <section id="visao-geral" className="scroll-mt-24">
          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                AGROINOVA ANGOLA • Agricultura
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Um cereal com forte importância para a segurança alimentar
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-700">
                O arroz pertence ao género <em>Oryza</em>, sendo{" "}
                <em>Oryza sativa</em> a espécie mais cultivada mundialmente.
                Em Angola, a cultura vem recebendo crescente atenção de
                produtores, investigadores, instituições públicas e empresas de
                transformação.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700">
                A produção pode ocorrer em diferentes ambientes. Há arroz
                cultivado em áreas irrigadas, em terras baixas dependentes da
                chuva e em sistemas de sequeiro. A escolha do sistema determina
                grande parte das práticas de preparação do solo, gestão da água
                e controlo de infestantes.
              </p>
            </div>

            <Card title="Identificação botânica">
              <div className="space-y-3">
                <div>
                  <strong>Nome comum:</strong> arroz
                </div>

                <div>
                  <strong>Espécie principal:</strong>{" "}
                  <em>Oryza sativa</em>
                </div>

                <div>
                  <strong>Família:</strong> Poaceae
                </div>

                <div>
                  <strong>Propagação:</strong> sementes
                </div>

                <div>
                  <strong>Produto:</strong> grão
                </div>

                <div>
                  <strong>Principais sistemas:</strong> irrigado, terras baixas
                  e sequeiro
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* GALERIA */}
        <section className="mt-12">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Registo visual
            </p>

            <h2 className="mt-2 text-3xl font-black">
              Produção de arroz em Angola
            </h2>

            <p className="mt-3 max-w-3xl text-slate-600">
              Fotografias provenientes de fontes que documentam ensaios,
              produção, investigação e actividades ligadas ao arroz em Angola.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {imagens.map((imagem) => (
              <a
                key={imagem.src}
                href={imagem.href}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={imagem.src}
                    alt={imagem.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <p className="font-semibold leading-6 text-slate-900">
                    {imagem.legenda}
                  </p>

                  <p className="mt-2 text-xs text-slate-500">
                    Fonte: {imagem.fonte}
                  </p>

                  <p className="mt-3 text-sm font-bold text-green-700">
                    Abrir fonte original →
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* AGRONOMIA */}
        <section id="agronomia" className="mt-16 scroll-mt-24">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
            Agronomia
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            Como o arroz responde ao ambiente
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-slate-700">
            O arroz não deve ser tratado como uma cultura exclusivamente de
            campos permanentemente inundados. A FAO diferencia sistemas
            irrigados de terras baixas, terras altas irrigadas, terras baixas
            de sequeiro e sistemas de águas profundas. A escolha do sistema
            deve corresponder ao solo, relevo, água disponível e variedade.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card title="Temperatura">
              <p>
                O arroz é uma cultura de clima quente. Temperaturas inadequadas
                durante a floração podem prejudicar a fecundação e o enchimento
                do grão.
              </p>

              <p className="mt-3">
                Por isso, a época de sementeira deve ser relacionada com o
                comportamento térmico e hídrico da região.
              </p>
            </Card>

            <Card title="Luminosidade">
              <p>
                A disponibilidade de radiação influencia a produção de
                biomassa e o enchimento do grão. A arquitectura da variedade e
                a duração do ciclo também interferem na resposta.
              </p>
            </Card>

            <Card title="Solo">
              <p>
                O arroz pode ser cultivado em diferentes classes de solo,
                desde que as condições físicas e químicas sejam compatíveis
                com o sistema escolhido.
              </p>

              <p className="mt-3">
                Em arroz irrigado, a capacidade de retenção de água e a
                possibilidade de controlar entrada e saída de água são
                particularmente importantes.
              </p>
            </Card>

            <Card title="Relevo">
              <p>
                Terrenos relativamente planos facilitam a construção de talhões
                e o controlo da água. Em áreas inclinadas, a erosão e a
                dificuldade de retenção da água tornam o manejo mais complexo.
              </p>
            </Card>

            <Card title="Raiz">
              <p>
                O sistema radicular precisa de oxigénio, água e nutrientes. Em
                campos inundados, a dinâmica do oxigénio no solo é diferente da
                observada em arroz de sequeiro.
              </p>
            </Card>

            <Card title="Ciclo">
              <p>
                A duração do ciclo depende da variedade e do ambiente. Materiais
                precoces podem ser importantes em zonas com estação chuvosa
                curta, enquanto materiais de ciclo diferente podem ser
                utilizados onde exista maior disponibilidade hídrica.
              </p>
            </Card>
          </div>
        </section>

        {/* SISTEMAS */}
        <section className="mt-16">
          <h2 className="text-3xl font-black">
            Sistemas de produção
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <Card title="Arroz irrigado">
              <p>
                Produzido em campos onde existe fornecimento controlado de
                água. Exige infraestrutura, canais ou sistemas de distribuição,
                drenagem e capacidade de controlar a entrada e saída da água.
              </p>

              <p className="mt-3">
                É importante evitar a ideia de que irrigação significa manter
                necessariamente uma lâmina permanente de água durante todo o
                ciclo.
              </p>
            </Card>

            <Card title="Arroz de terras baixas">
              <p>
                É cultivado em áreas baixas onde a chuva, escoamento superficial
                ou cursos de água podem fornecer parte significativa da água.
              </p>

              <p className="mt-3">
                O principal desafio é a variabilidade: excesso de água pode
                causar inundação e falta de água pode provocar défice hídrico.
              </p>
            </Card>

            <Card title="Arroz de sequeiro">
              <p>
                Depende predominantemente da precipitação e não de inundação
                controlada. A escolha da época e de materiais adaptados é
                fundamental.
              </p>

              <p className="mt-3">
                Este sistema não deve ser tratado como equivalente ao arroz
                irrigado em termos de espaçamento, fertilização e gestão da
                água.
              </p>
            </Card>
          </div>
        </section>

        {/* SOLO */}
        <section className="mt-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card title="Características desejáveis">
              <ul className="space-y-3">
                <li>
                  • boa capacidade de retenção de água para sistemas de terras
                  baixas;
                </li>

                <li>
                  • fertilidade suficiente ou possibilidade de correcção;
                </li>

                <li>
                  • baixa salinidade;
                </li>

                <li>
                  • ausência de compactação prejudicial ao desenvolvimento;
                </li>

                <li>
                  • capacidade de drenagem quando necessária;
                </li>

                <li>
                  • terreno relativamente regular para facilitar a gestão da
                  água.
                </li>
              </ul>
            </Card>

            <Card title="Análise do solo">
              <p>
                Antes da instalação de uma lavoura comercial, a análise do solo
                deve ser utilizada para orientar a correcção da acidez e a
                fertilização.
              </p>

              <p className="mt-3">
                Não é correcto aplicar uma dose fixa de ureia, fósforo ou
                potássio a todas as áreas de Angola. A necessidade depende da
                análise do solo, produtividade esperada, variedade, histórico
                da área e sistema de produção.
              </p>
            </Card>
          </div>
        </section>

        {/* SEMENTES */}
        <section id="sementes" className="mt-16 scroll-mt-24">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
            Sementes e variedades
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            A genética é uma das bases da expansão do arroz em Angola
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-slate-700">
            O IIA está a desenvolver ensaios com novas variedades provenientes
            do IRRI, em parceria com o IDA e no âmbito do KAFACI. No Ukuma,
            Huambo, foram instaladas variedades na Cooperativa Arrozal do
            Ukuma; em Catabola, Bié, foram semeadas 23 novas variedades e duas
            variedades locais como testemunhas.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card title="Materiais em investigação">
              <p>
                A investigação deve comparar materiais em diferentes ambientes
                e não apenas num único local.
              </p>

              <p className="mt-3">
                Características como ciclo, produtividade, tolerância a
                doenças, qualidade do grão, adaptação ao sistema de cultivo e
                preferência dos consumidores devem entrar na avaliação.
              </p>
            </Card>

            <Card title="Exemplos de materiais testados no Cuanza-Norte">
              <p>
                Uma experiência documentada pela CIAM avaliou materiais como
                Nerica-1, L-19, Wab-189, Lilewa-7, Nvuazi, IR12, N-255, 4.850,
                Fofifa e uma testemunha nacional.
              </p>

              <p className="mt-3">
                Estes nomes são apresentados como materiais documentados em
                ensaio, não como uma lista de variedades oficialmente
                recomendadas para todas as províncias.
              </p>
            </Card>

            <Card title="Semente certificada">
              <p>
                Para produção comercial, a origem da semente deve ser
                conhecida. A semente de qualidade contribui para uma emergência
                mais uniforme e facilita a gestão do campo.
              </p>
            </Card>

            <Card title="Semente produzida pelo agricultor">
              <p>
                Quando o agricultor conserva semente própria, deve seleccionar
                lotes saudáveis e uniformes, evitar misturas e controlar a
                humidade durante o armazenamento.
              </p>
            </Card>
          </div>
        </section>

        {/* ÁGUA */}
        <section id="agua" className="mt-16 scroll-mt-24">
          <div className="rounded-[2rem] bg-green-950 p-7 text-white sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-300">
              Água
            </p>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Irrigar não significa desperdiçar água
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-green-50">
              A FAO destaca que o arroz é altamente dependente da gestão da
              água, mas também que a inundação permanente não é obrigatória
              para obter boa produção. Estratégias de irrigação intermitente
              podem aumentar a eficiência do uso da água em determinados
              sistemas.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                <h3 className="font-bold">Entrada</h3>
                <p className="mt-2 text-sm leading-6 text-green-100">
                  A água deve chegar ao campo no momento adequado e de forma
                  suficientemente uniforme.
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                <h3 className="font-bold">Retenção</h3>
                <p className="mt-2 text-sm leading-6 text-green-100">
                  Talhões nivelados e diques bem construídos reduzem perdas.
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                <h3 className="font-bold">Drenagem</h3>
                <p className="mt-2 text-sm leading-6 text-green-100">
                  O excesso de água também precisa de uma via segura de saída.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MANEJO */}
        <section id="manejo" className="mt-16 scroll-mt-24">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
            Manejo
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            Da preparação do terreno à formação do grão
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card title="Nivelamento">
              <p>
                Em arroz de terras baixas e irrigado, o nivelamento contribui
                para uma distribuição mais uniforme da água e facilita o
                controlo de infestantes.
              </p>
            </Card>

            <Card title="Preparação">
              <p>
                A preparação deve produzir uma superfície adequada ao sistema
                de estabelecimento escolhido. O excesso de mobilização deve ser
                evitado quando aumenta erosão, consumo de água ou degradação
                estrutural.
              </p>
            </Card>

            <Card title="Sementeira directa">
              <p>
                Pode ser utilizada em determinados sistemas. Reduz algumas
                operações, mas exige maior atenção ao controlo de infestantes e
                à uniformidade da população.
              </p>
            </Card>

            <Card title="Transplante">
              <p>
                O transplante permite estabelecer mudas produzidas em viveiro e
                pode facilitar determinadas estratégias de manejo. Contudo,
                exige mais mão de obra e organização.
              </p>
            </Card>

            <Card title="Infestantes">
              <p>
                As infestantes competem com o arroz por água, luz e nutrientes.
                O controlo precoce é especialmente importante antes do
                fechamento do dossel.
              </p>
            </Card>

            <Card title="Fertilização">
              <p>
                A fertilização deve considerar análise do solo e estádio da
                cultura. O nitrogénio é importante, mas aplicações excessivas
                podem aumentar acamamento e problemas sanitários.
              </p>
            </Card>

            <Card title="Adubação orgânica">
              <p>
                Composto e matéria orgânica podem contribuir para a estrutura e
                fertilidade do solo. O efeito depende da qualidade do material
                e da quantidade aplicada.
              </p>
            </Card>

            <Card title="Rotação">
              <p>
                A rotação com leguminosas pode contribuir para diversificação do
                sistema e melhor utilização dos recursos. O desenho da rotação
                deve considerar doenças, infestantes e disponibilidade de água.
              </p>
            </Card>

            <Card title="Mecanização">
              <p>
                A mecanização da preparação, sementeira e colheita pode reduzir
                o tempo de operação, mas exige escala, acessibilidade dos
                campos, manutenção e capacidade técnica.
              </p>
            </Card>
          </div>
        </section>

        {/* SANIDADE */}
        <section id="sanidade" className="mt-16 scroll-mt-24">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
            Protecção da cultura
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            Pragas, doenças e infestantes
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-slate-700">
            A identificação correcta é mais importante do que aplicar
            imediatamente um pesticida. O manejo deve combinar prevenção,
            monitorização, material de plantio saudável, rotação e medidas
            culturais.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card title="Brocas do colmo">
              <p>
                Podem perfurar os colmos, provocar galerias e enfraquecer as
                plantas. A observação regular do campo ajuda a detectar ataques
                precocemente.
              </p>
            </Card>

            <Card title="Percevejos e insectos do grão">
              <p>
                Insectos que atacam a panícula e o grão podem reduzir qualidade
                e rendimento. A pressão tende a ser particularmente relevante
                nas fases reprodutivas.
              </p>
            </Card>

            <Card title="Gorgulhos e pragas de armazenamento">
              <p>
                O problema não termina na colheita. Grãos armazenados com
                humidade elevada ou instalações inadequadas podem sofrer perdas
                por insectos e fungos.
              </p>
            </Card>

            <Card title="Doenças foliares">
              <p>
                Doenças como brusone e outras doenças foliares podem reduzir a
                área fotossintética e afectar panículas e grãos.
              </p>
            </Card>

            <Card title="Brusone">
              <p>
                A brusone é uma doença importante do arroz. O risco pode ser
                influenciado por variedade, clima, fertilização e densidade da
                cultura.
              </p>
            </Card>

            <Card title="Infestantes">
              <p>
                Plantas daninhas podem ser especialmente problemáticas em arroz
                de sequeiro e em sementeira directa. O controlo integrado
                combina preparação, época de sementeira, densidade e práticas
                de controlo adequadas.
              </p>
            </Card>
          </div>
        </section>

        {/* COLHEITA */}
        <section className="mt-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card title="Maturação">
              <p>
                A colheita deve ser programada quando o grão atingir maturidade
                adequada e quando as condições permitirem reduzir perdas.
              </p>
            </Card>

            <Card title="Colheita manual">
              <p>
                Em pequenas explorações, a colheita manual pode envolver corte
                das panículas ou das plantas, formação de feixes, secagem e
                posterior debulha.
              </p>
            </Card>

            <Card title="Colheita mecanizada">
              <p>
                A mecanização reduz o tempo entre maturação e recolha. Contudo,
                a eficiência depende da uniformidade da cultura, condições do
                terreno, humidade do grão e capacidade da máquina.
              </p>
            </Card>

            <Card title="Redução de perdas">
              <p>
                Colheita tardia pode aumentar perdas por debulha natural, aves,
                chuva e acamamento. A decisão deve equilibrar maturidade e
                condições de operação.
              </p>
            </Card>
          </div>
        </section>

        {/* POS COLHEITA */}
        <section id="pos-colheita" className="mt-16 scroll-mt-24">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
            Pós-colheita
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            Secagem, armazenamento, descasque e qualidade
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card title="Secagem">
              <p>
                A secagem reduz a possibilidade de deterioração. O grão deve
                atingir humidade adequada antes do armazenamento prolongado.
              </p>
            </Card>

            <Card title="Limpeza">
              <p>
                A remoção de impurezas, palha, pedras e grãos danificados
                melhora a qualidade e reduz riscos durante o armazenamento e
                processamento.
              </p>
            </Card>

            <Card title="Descasque">
              <p>
                O descasque remove a casca externa. Equipamentos adequados
                ajudam a reduzir perdas e quebra excessiva do grão.
              </p>
            </Card>

            <Card title="Armazenamento">
              <p>
                O produto deve permanecer seco, protegido de insectos, roedores,
                humidade e contaminação.
              </p>
            </Card>
          </div>

          <div className="mt-8 rounded-3xl border border-green-200 bg-green-50 p-7">
            <h3 className="text-xl font-bold text-green-950">
              O processamento está a ganhar importância em Angola
            </h3>

            <p className="mt-3 max-w-4xl leading-8 text-slate-700">
              No Moxico, o FADA e a Food Life estabeleceram uma parceria para
              fortalecer a produção e transformação de arroz, incluindo uma
              futura unidade de processamento no Complexo Agroindustrial de
              Camanongue. A iniciativa também prevê apoio a cooperativas com
              financiamento, assistência técnica, sementes, fertilizantes,
              irrigação e comercialização.
            </p>
          </div>
        </section>

        {/* ANGOLA */}
        <section id="angola" className="mt-16 scroll-mt-24">
          <div className="rounded-[2rem] bg-green-950 p-7 text-white sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-300">
              Arroz em Angola
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Uma cadeia que está a expandir-se
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-green-50">
              Dados divulgados em 2025 indicaram produção nacional de
              <strong> 51.196 toneladas na campanha 2024/2025</strong>, contra
              38.454 toneladas em 2023/2024. A informação foi atribuída aos
              indicadores provisórios de produção agrícola do Ministério da
              Agricultura e Florestas.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                <p className="text-3xl font-black">51.196 t</p>
                <p className="mt-2 text-sm text-green-100">
                  Produção indicada para 2024/2025
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                <p className="text-3xl font-black">38.454 t</p>
                <p className="mt-2 text-sm text-green-100">
                  Produção indicada para 2023/2024
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                <p className="text-3xl font-black">+12.742 t</p>
                <p className="mt-2 text-sm text-green-100">
                  Variação indicada entre as duas campanhas
                </p>
              </div>
            </div>

            <p className="mt-6 text-xs leading-6 text-green-200">
              Fonte: indicadores provisórios do MINAGRIF divulgados pelo
              jornal OPAÍS em 12 de Agosto de 2025. Estes valores devem ser
              substituídos no módulo de dados do AGROINOVA quando a série
              estatística oficial consolidada estiver integrada.
            </p>
          </div>
        </section>

        {/* CENTROS E EXPERIÊNCIAS */}
        <section className="mt-16">
          <h2 className="text-3xl font-black">
            Experiências relevantes em Angola
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card title="Huambo">
              <p>
                No município do Ukuma, o IIA instalou novas variedades de arroz
                na Cooperativa Arrozal do Ukuma. A actividade inclui parceria
                com o IDA e participação de estudantes da Faculdade de Ciências
                Agrárias.
              </p>
            </Card>

            <Card title="Bié">
              <p>
                Em Catabola foram semeadas 23 novas variedades e duas variedades
                locais como testemunhas. Trata-se de uma experiência
                importante para avaliação da adaptação genética em condições
                locais.
              </p>
            </Card>

            <Card title="Cuanza-Norte">
              <p>
                A Estação Agrícola do Quilombo avaliou dez materiais de arroz,
                procurando alternativas para produção regular na região.
              </p>
            </Card>

            <Card title="Malanje">
              <p>
                O município do Lukembo possui experiências empresariais de
                produção de arroz em grande escala, incluindo produção de
                sementes.
              </p>
            </Card>

            <Card title="Moxico">
              <p>
                O PDPA-Leste desenvolve capacitação de técnicos em sementes,
                produção, pós-colheita, comercialização, irrigação e
                mecanização.
              </p>
            </Card>

            <Card title="Uíge">
              <p>
                Em Sanza Pombo existem explorações empresariais com produção de
                arroz e expansão da área cultivada.
              </p>
            </Card>
          </div>
        </section>

        {/* DADOS HISTÓRICOS */}
        <section className="mt-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card title="Referência histórica — 2019/2020">
              <p>
                O Relatório da Campanha Agrícola 2019/2020 apresenta uma
                produção nacional de arroz de <strong>10.567 toneladas</strong>,
                com produtividade indicada de 1.337 kg/ha.
              </p>

              <p className="mt-3 text-xs text-slate-500">
                Trata-se de uma série histórica e não deve ser usada como
                produção actual.
              </p>
            </Card>

            <Card title="Evolução recente">
              <p>
                A série recente divulgada em 2025 mostra uma diferença
                substancial em relação ao valor de 2019/2020. Isto reforça a
                necessidade de apresentar sempre o ano e a metodologia junto
                de qualquer indicador.
              </p>
            </Card>
          </div>
        </section>

        {/* PROVÍNCIAS */}
        <section className="mt-16">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
            Consulta territorial
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            Arroz por província
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-slate-700">
            O Governo indicou que a produção nacional envolve produtores
            espalhados pelas províncias. Isso não significa, contudo, que
            exista para cada província uma estatística recente, comparável e
            publicada com a mesma metodologia.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <label
                htmlFor="provincia"
                className="text-sm font-bold"
              >
                Seleccionar província
              </label>

              <select
                id="provincia"
                value={provincia}
                onChange={(event) => setProvincia(event.target.value)}
                className="mt-3 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
              >
                {provincias.map((item) => (
                  <option key={item.nome} value={item.nome}>
                    {item.nome}
                  </option>
                ))}
              </select>

              <div className="mt-5 flex flex-wrap gap-2">
                <Tag>{provinciaSelecionada.regiao}</Tag>
                <Tag>21 províncias</Tag>
              </div>
            </div>

            <Card title={provinciaSelecionada.nome}>
              <p>{provinciaSelecionada.observacao}</p>

              <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  Integridade territorial
                </p>

                <p className="mt-2 leading-6">
                  Quando não existe uma estatística provincial actual e
                  verificável, o AGROINOVA não cria uma estimativa para
                  preencher a lacuna.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* INVESTIGAÇÃO */}
        <section id="investigacao" className="mt-16 scroll-mt-24">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
            Investigação
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            O arroz como área de investigação agronómica
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card title="Adaptação varietal">
              <p>
                Comparar variedades em diferentes ambientes é fundamental para
                identificar materiais estáveis e adequados a sistemas de
                sequeiro ou irrigação.
              </p>
            </Card>

            <Card title="Sistemas de sementes">
              <p>
                A produção local de sementes de qualidade pode reduzir a
                dependência de materiais de origem incerta e melhorar a
                uniformidade das lavouras.
              </p>
            </Card>

            <Card title="Água">
              <p>
                A eficiência do uso da água é uma área prioritária, sobretudo
                onde a irrigação depende de infraestruturas com custos elevados.
              </p>
            </Card>

            <Card title="Solos">
              <p>
                Estudos de fertilidade, matéria orgânica, acidez, salinidade e
                dinâmica de nutrientes podem ajudar a definir recomendações
                específicas para cada zona.
              </p>
            </Card>

            <Card title="Mecanização">
              <p>
                Preparação, sementeira, transplante, colheita e descasque são
                áreas onde a mecanização pode reduzir custos e perdas quando
                existe escala suficiente.
              </p>
            </Card>

            <Card title="Pós-colheita">
              <p>
                Secagem, armazenamento, descasque, polimento, embalagem e
                transformação são fundamentais para aumentar o valor económico
                do arroz produzido nacionalmente.
              </p>
            </Card>
          </div>
        </section>

        {/* PERGUNTAS DE INVESTIGAÇÃO */}
        <section className="mt-16">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <h2 className="text-3xl font-black">
              Perguntas para investigação em Angola
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Quais variedades apresentam maior estabilidade entre Huambo, Bié, Malanje, Moxico e Cuanza-Norte?",
                "Quais materiais apresentam melhor desempenho em arroz de sequeiro?",
                "Quais variedades apresentam melhor qualidade de grão após processamento?",
                "Como reduzir o consumo de água nos perímetros irrigados?",
                "Qual é o melhor calendário de sementeira para cada zona agroecológica?",
                "Como reduzir perdas entre colheita, secagem e armazenamento?",
                "Como fortalecer os sistemas comunitários de produção de sementes?",
                "Como integrar arroz com leguminosas, pecuária e aquacultura?",
              ].map((pergunta) => (
                <div
                  key={pergunta}
                  className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700"
                >
                  {pergunta}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FONTES */}
        <section id="fontes" className="mt-16 scroll-mt-24">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                Biblioteca técnica
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Fontes e documentos
              </h2>
            </div>

            <div className="w-full md:max-w-sm">
              <label
                htmlFor="busca"
                className="text-sm font-semibold text-slate-700"
              >
                Pesquisar
              </label>

              <input
                id="busca"
                type="search"
                value={busca}
                onChange={(event) => setBusca(event.target.value)}
                placeholder="Ex.: sementes, Moxico, variedades..."
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {fontesFiltradas.map((fonte) => (
              <a
                key={fonte.titulo}
                href={fonte.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-green-300 hover:shadow-md"
              >
                <p className="text-xs font-bold uppercase tracking-wide text-green-700">
                  {fonte.instituicao}
                </p>

                <h3 className="mt-2 text-lg font-bold group-hover:text-green-800">
                  {fonte.titulo}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {fonte.descricao}
                </p>

                <p className="mt-4 text-sm font-bold text-green-700">
                  Abrir fonte →
                </p>
              </a>
            ))}
          </div>

          {fontesFiltradas.length === 0 && (
            <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600">
              Nenhuma fonte encontrada.
            </div>
          )}
        </section>

        {/* INTEGRIDADE */}
        <section className="mt-16">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10">
            <h2 className="text-2xl font-black">
              Nota de integridade dos dados
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
              <p>
                O AGROINOVA distingue dados estatísticos, resultados
                experimentais, experiências empresariais, experiências
                comunitárias e recomendações técnicas internacionais.
              </p>

              <p>
                O valor de 51.196 toneladas para 2024/2025 é apresentado como
                indicador provisório divulgado em 2025, e não como uma série
                estatística consolidada definitiva.
              </p>

              <p>
                Os materiais de arroz testados pelo IIA são apresentados como
                materiais de investigação. O facto de uma variedade ser
                experimentalmente promissora não significa que seja
                automaticamente recomendada para todas as províncias.
              </p>

              <p>
                Recomendações de fertilização, espaçamento, irrigação,
                herbicidas e fungicidas devem ser ajustadas ao ambiente, ao
                sistema de produção e às normas técnicas aplicáveis.
              </p>
            </div>
          </div>
        </section>

        {/* NAVEGAÇÃO */}
        <section className="mt-16 border-t border-slate-200 pt-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/agricultura/massambala"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-center font-bold transition hover:border-green-400 hover:text-green-800"
            >
              ← Massambala
            </Link>

            <Link
              href="/agricultura"
              className="rounded-xl bg-green-800 px-5 py-3 text-center font-bold text-white transition hover:bg-green-900"
            >
              Todas as culturas
            </Link>

            <Link
              href="/agricultura/amendoim"
              className="rounded-xl border border-green-700 bg-green-50 px-5 py-3 text-center font-bold text-green-800 transition hover:bg-green-100"
            >
              Próxima cultura: Amendoim →
            </Link>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="mt-16 bg-green-950 text-green-100">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-xl font-black text-white">
                AGROINOVA ANGOLA
              </p>

              <p className="mt-3 text-sm leading-6 text-green-200">
                Conhecimento, tecnologia e inovação ao serviço do campo
                angolano.
              </p>
            </div>

            <div>
              <p className="font-bold text-white">Arroz</p>

              <p className="mt-3 text-sm leading-6 text-green-200">
                Guia técnico para produtores, estudantes, técnicos,
                investigadores e decisores.
              </p>
            </div>

            <div>
              <p className="font-bold text-white">Integridade</p>

              <p className="mt-3 text-sm leading-6 text-green-200">
                Dados apresentados com fonte, período, unidade e nível
                territorial sempre que aplicável.
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-xs text-green-300">
            AGROINOVA ANGOLA • Arroz • <em>Oryza sativa</em>
          </div>
        </div>
      </footer>
    </main>
  );
}
