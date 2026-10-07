"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";

type Provincia = {
  nome: string;
  regiao: string;
  dadosHistoricos?: {
    exploracoesFamiliares: number;
    percentagemExploracoes: number;
    areaHa: number;
  };
  observacao: string;
};

type Imagem = {
  src: string;
  href: string;
  alt: string;
  legenda: string;
  fonte: string;
};

type CardProps = {
  titulo: string;
  children: ReactNode;
};

const provincias: Provincia[] = [
  {
    nome: "Bengo",
    regiao: "Norte",
    dadosHistoricos: {
      exploracoesFamiliares: 27137,
      percentagemExploracoes: 57,
      areaHa: 14226,
    },
    observacao:
      "É uma das principais zonas históricas de bananeiras. A produção comercial também está documentada em Caxito e Dande.",
  },
  {
    nome: "Benguela",
    regiao: "Centro-Oeste",
    dadosHistoricos: {
      exploracoesFamiliares: 19184,
      percentagemExploracoes: 12.3,
      areaHa: 990,
    },
    observacao:
      "O RAPP 2019–2020 registou presença significativa da bananeira nas explorações familiares.",
  },
  {
    nome: "Bié",
    regiao: "Centro",
    dadosHistoricos: {
      exploracoesFamiliares: 42354,
      percentagemExploracoes: 17.7,
      areaHa: 4581,
    },
    observacao:
      "A bananeira aparece entre as fruteiras registadas pelo recenseamento agrícola.",
  },
  {
    nome: "Cabinda",
    regiao: "Norte",
    dadosHistoricos: {
      exploracoesFamiliares: 30119,
      percentagemExploracoes: 75.9,
      areaHa: 11785,
    },
    observacao:
      "A elevada presença histórica da bananeira está associada às condições húmidas da província.",
  },
  {
    nome: "Cuando",
    regiao: "Leste/Sudeste",
    observacao:
      "Não existe uma série RAPP 2019–2020 separada para a actual província do Cuando. O recenseamento utilizou a configuração territorial anterior.",
  },
  {
    nome: "Cubango",
    regiao: "Sudeste",
    observacao:
      "Não existe uma série RAPP 2019–2020 separada para a actual província do Cubango. Não se deve redistribuir automaticamente o antigo Cuando Cubango.",
  },
  {
    nome: "Cuanza Norte",
    regiao: "Norte",
    dadosHistoricos: {
      exploracoesFamiliares: 21490,
      percentagemExploracoes: 27,
      areaHa: 5458,
    },
    observacao:
      "A bananeira apresenta presença histórica relevante nas explorações familiares.",
  },
  {
    nome: "Cuanza Sul",
    regiao: "Centro-Oeste",
    dadosHistoricos: {
      exploracoesFamiliares: 91728,
      percentagemExploracoes: 34,
      areaHa: 13000,
    },
    observacao:
      "É uma das províncias com maior número histórico de explorações familiares com bananeiras.",
  },
  {
    nome: "Cunene",
    regiao: "Sul",
    dadosHistoricos: {
      exploracoesFamiliares: 513,
      percentagemExploracoes: 0.5,
      areaHa: 186,
    },
    observacao:
      "A presença histórica é menor e deve ser interpretada em conjunto com disponibilidade de água e condições locais.",
  },
  {
    nome: "Huambo",
    regiao: "Centro",
    dadosHistoricos: {
      exploracoesFamiliares: 48071,
      percentagemExploracoes: 15.4,
      areaHa: 6570,
    },
    observacao:
      "A cultura está documentada entre as principais fruteiras das explorações familiares.",
  },
  {
    nome: "Huíla",
    regiao: "Sul",
    dadosHistoricos: {
      exploracoesFamiliares: 11428,
      percentagemExploracoes: 3.4,
      areaHa: 2068,
    },
    observacao:
      "A produção exige atenção particular à água, altitude, temperatura e escolha de local.",
  },
  {
    nome: "Icolo e Bengo",
    regiao: "Norte",
    observacao:
      "É uma província da configuração territorial actual. Os dados do RAPP 2019–2020 não foram redistribuídos para esta unidade.",
  },
  {
    nome: "Luanda",
    regiao: "Norte",
    dadosHistoricos: {
      exploracoesFamiliares: 13804,
      percentagemExploracoes: 33.7,
      areaHa: 3321,
    },
    observacao:
      "O valor histórico refere-se à configuração territorial usada pelo RAPP 2019–2020.",
  },
  {
    nome: "Lunda Norte",
    regiao: "Leste",
    dadosHistoricos: {
      exploracoesFamiliares: 3768,
      percentagemExploracoes: 5.2,
      areaHa: 1124,
    },
    observacao:
      "A cultura aparece no recenseamento familiar, embora com menor expressão que nas principais zonas produtoras.",
  },
  {
    nome: "Lunda Sul",
    regiao: "Leste",
    dadosHistoricos: {
      exploracoesFamiliares: 2894,
      percentagemExploracoes: 8.6,
      areaHa: 309,
    },
    observacao:
      "Presença histórica documentada no RAPP.",
  },
  {
    nome: "Malanje",
    regiao: "Norte",
    dadosHistoricos: {
      exploracoesFamiliares: 9375,
      percentagemExploracoes: 5.9,
      areaHa: 1142,
    },
    observacao:
      "A cultura está documentada entre as fruteiras cultivadas pelas explorações familiares.",
  },
  {
    nome: "Moxico",
    regiao: "Leste",
    dadosHistoricos: {
      exploracoesFamiliares: 3515,
      percentagemExploracoes: 3.9,
      areaHa: 1349,
    },
    observacao:
      "Presença histórica documentada.",
  },
  {
    nome: "Moxico Leste",
    regiao: "Leste",
    observacao:
      "Não possui uma série separada no RAPP 2019–2020. Não foram criados valores por estimativa.",
  },
  {
    nome: "Namibe",
    regiao: "Sul",
    dadosHistoricos: {
      exploracoesFamiliares: 703,
      percentagemExploracoes: 3.7,
      areaHa: 121,
    },
    observacao:
      "A cultura aparece nas estatísticas históricas, mas a disponibilidade de água é um factor decisivo.",
  },
  {
    nome: "Uíge",
    regiao: "Norte",
    dadosHistoricos: {
      exploracoesFamiliares: 55310,
      percentagemExploracoes: 30.1,
      areaHa: 20854,
    },
    observacao:
      "É uma das principais áreas históricas de presença da bananeira.",
  },
  {
    nome: "Zaire",
    regiao: "Norte",
    dadosHistoricos: {
      exploracoesFamiliares: 17955,
      percentagemExploracoes: 33.3,
      areaHa: 2452,
    },
    observacao:
      "A bananeira apresenta presença histórica relevante nas explorações familiares.",
  },
];

const imagens: Imagem[] = [
  {
    src: "https://c2a.portais.gov.ao/uploads/MARCO_MULHER_01_75b8519543.jpg",
    href: "https://bengo.gov.ao/web/noticias/marco-mulher-mulheres-visitam-a-fazenda-novagrolider-no-bengo",
    alt: "Cacho de banana numa plantação em Caxito, Bengo",
    legenda:
      "Produção de banana acompanhada durante visita à Fazenda Novagrolíder, em Caxito.",
    fonte: "Governo Provincial do Bengo",
  },
  {
    src: "https://angolahoje.ao/storage/galleryImages/7/d2NuuthOtzbVHTetC4HL3iJglRHzsXbvwlaxLxbF.jpg",
    href: "https://angolahoje.ao/galeria-de-imagens/Gastronomia",
    alt: "Bananas verdes numa unidade de preparação em Angola",
    legenda:
      "Bananas verdes em processo de preparação e manuseamento numa unidade agroindustrial.",
    fonte: "Angola Hoje",
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0921/4699/1428/files/NOVAGROLIDER_3.png?v=1753395657",
    href: "https://villasegolfe.com/blogs/angola/novagrolider-inovacao-eficiencia-e-compromisso",
    alt: "Plantação comercial de banana da Novagrolíder em Angola",
    legenda:
      "Plantação comercial de banana com organização das linhas e infraestrutura de rega.",
    fonte: "Villas&Golfe / Novagrolíder",
  },
  {
    src: "https://www.fao.org/images/newsroomlibraries/import-library/bananas_daniel-hayduk_24772_120.jpg?sfvrsn=7dd6a642_10",
    href: "https://www.fao.org/newsroom/detail/Helping-farmers-and-buyers-build-mutually-beneficial-partnerships/en",
    alt: "Agricultor a verificar um cacho de banana",
    legenda:
      "Exemplo internacional de colheita e avaliação do cacho em campo.",
    fonte: "FAO",
  },
];

const fontes = [
  {
    titulo: "INE — RAPP 2019–2020",
    descricao:
      "Base histórica para explorações familiares e área cultivada com bananeiras por província.",
    url: "https://www.fao.org/fileadmin/templates/ess/ess_test_folder/World_Census_Agriculture/WCA_2020/WCA_2020_new_doc/ANG_REP3_POR_2019_2020.pdf",
  },
  {
    titulo: "Governo Provincial do Bengo — FEIBA 2025",
    descricao:
      "Informação recente sobre a cadeia produtiva da banana no Bengo e a Feira da Banana.",
    url: "https://bengo.gov.ao/web/noticias/aberta-decima-primeira-edicao-da-feira-da-banana-2025",
  },
  {
    titulo: "Governo Provincial do Bengo — Fazenda Novagrolíder",
    descricao:
      "Experiência de produção, colheita, preparação e distribuição de banana em Caxito.",
    url: "https://bengo.gov.ao/web/noticias/marco-mulher-mulheres-visitam-a-fazenda-novagrolider-no-bengo",
  },
  {
    titulo: "CIAM — Produção agrícola 2022/2023",
    descricao:
      "Dados divulgados sobre a produção nacional de frutas, incluindo banana.",
    url: "https://www.ciam.gov.ao/ao/noticia/2776",
  },
  {
    titulo: "FAO — Good Agricultural Practices",
    descricao:
      "Princípios técnicos para solo, água, produção, segurança alimentar e sustentabilidade.",
    url: "https://www.fao.org/world-banana-forum/projects/good-practices/good-agricultural-practices/en/",
  },
  {
    titulo: "FAO — Water footprint of the banana industry",
    descricao:
      "Gestão da água e sistemas de irrigação na cultura da banana.",
    url: "https://www.fao.org/world-banana-forum/projects/good-practices/water-footprint/en/",
  },
  {
    titulo: "FAO — Bananas",
    descricao:
      "Referência agronómica sobre implantação, espaçamento, manejo, fertilização e colheita.",
    url: "https://www.fao.org/4/t0308e/t0308e04.htm",
  },
  {
    titulo: "ProMusa — Black leaf streak",
    descricao:
      "Referência especializada sobre sigatoka-negra e manejo integrado.",
    url: "https://www.promusa.org/Black%2Bleaf%2Bstreak",
  },
  {
    titulo: "ProMusa — Fusarium wilt",
    descricao:
      "Referência especializada sobre murcha de Fusarium e biossegurança.",
    url: "https://www.promusa.org/Fusarium%20wilt",
  },
];

function Card({ titulo, children }: CardProps) {
  return (
    <article className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-xl font-bold text-emerald-900">{titulo}</h3>
      <div className="space-y-3 text-sm leading-7 text-slate-700">
        {children}
      </div>
    </article>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-100">
      {children}
    </span>
  );
}

export default function BananaPage() {
  const [provinciaSelecionada, setProvinciaSelecionada] =
    useState("Bengo");
  const [pesquisa, setPesquisa] = useState("");

  const provincia = provincias.find(
    (item) => item.nome === provinciaSelecionada
  );

  const provinciasFiltradas = useMemo(() => {
    const termo = pesquisa.trim().toLowerCase();

    if (!termo) return provincias;

    return provincias.filter((item) =>
      `${item.nome} ${item.regiao} ${item.observacao}`
        .toLowerCase()
        .includes(termo)
    );
  }, [pesquisa]);

  return (
    <main className="min-h-screen bg-emerald-50 text-slate-900">
      <section className="relative overflow-hidden bg-emerald-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage: `url("${imagens[0].src}")`,
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">
              AGROINOVA ANGOLA • Agricultura
            </p>

            <h1 className="text-5xl font-black tracking-tight text-white md:text-7xl">
              Banana
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-emerald-50 md:text-xl">
              Guia técnico e académico sobre a cultura da banana
              (<em>Musa</em> spp.), com enfoque na produção angolana,
              implantação, material de plantação, solos, água, nutrição,
              manejo, sanidade, colheita, pós-colheita, cadeia de valor e
              investigação.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <Tag>Musa spp.</Tag>
              <Tag>Fruteiras</Tag>
              <Tag>Produção familiar</Tag>
              <Tag>Produção empresarial</Tag>
              <Tag>Angola</Tag>
            </div>
          </div>
        </div>
      </section>

      <nav className="sticky top-0 z-30 border-b border-emerald-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-3 text-sm lg:px-8">
          {[
            ["Visão geral", "visao-geral"],
            ["Botânica", "botanica"],
            ["Clima", "clima"],
            ["Solo", "solo"],
            ["Plantação", "plantacao"],
            ["Manejo", "manejo"],
            ["Sanidade", "sanidade"],
            ["Colheita", "colheita"],
            ["Angola", "angola"],
            ["Províncias", "provincias"],
            ["Investigação", "investigacao"],
            ["Fontes", "fontes"],
          ].map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="whitespace-nowrap rounded-full px-4 py-2 font-semibold text-emerald-800 hover:bg-emerald-100"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <section id="visao-geral" className="scroll-mt-24">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card titulo="Importância em Angola">
              <p>
                A banana ocupa uma posição estratégica entre as fruteiras
                cultivadas em Angola. Dados oficiais divulgados para a campanha
                2022/2023 registaram 4.893.686 toneladas de banana.
              </p>
              <p>
                O mesmo conjunto de resultados indicou que a banana estava entre
                os produtos de maior peso dentro da fileira das frutas.
              </p>
              <p>
                Estes valores são apresentados como dados de campanha e não
                devem ser confundidos com produtividade média de cada produtor.
              </p>
            </Card>

            <Card titulo="Sistemas de produção">
              <p>
                A cultura pode aparecer em pequenas explorações familiares,
                quintais produtivos, sistemas mistos e plantações comerciais.
              </p>
              <p>
                O sistema adequado depende da finalidade: consumo familiar,
                mercado local, processamento, fornecimento a comerciantes ou
                padrões comerciais mais exigentes.
              </p>
            </Card>

            <Card titulo="Ponto técnico central">
              <p>
                A banana é uma cultura de elevada exigência em água e responde
                fortemente à qualidade do solo, drenagem, nutrição, densidade,
                material de plantação e manutenção das folhas.
              </p>
              <p>
                A gestão deve ser feita como um sistema integrado e não apenas
                como aplicação de fertilizante ou irrigação.
              </p>
            </Card>
          </div>
        </section>

        <section className="mt-14" aria-label="Imagens da cultura">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              Campo e cadeia de valor
            </p>
            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              Banana produzida e manuseada em contexto africano e angolano
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {imagens.map((imagem) => (
              <a
                key={imagem.src}
                href={imagem.href}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-sm"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={imagem.src}
                    alt={imagem.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <p className="font-semibold text-slate-800">
                    {imagem.legenda}
                  </p>
                  <p className="mt-2 text-xs text-slate-500">
                    Fonte: {imagem.fonte}
                  </p>
                  <p className="mt-2 text-xs font-semibold text-emerald-700">
                    Abrir fonte da imagem →
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="botanica" className="mt-14 scroll-mt-24">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              01 • Botânica
            </p>
            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              Estrutura e desenvolvimento da bananeira
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card titulo="Pseudocaule">
              <p>
                O chamado caule aéreo é, na realidade, um pseudocaule formado
                pela sobreposição das bainhas foliares.
              </p>
              <p>
                A estrutura apresenta grande área foliar e pode sofrer danos
                importantes com vento forte.
              </p>
            </Card>

            <Card titulo="Rizoma e raízes">
              <p>
                A estrutura subterrânea, frequentemente designada rizoma ou
                cormo, origina o sistema radicular e os rebentos.
              </p>
              <p>
                O sistema radicular é relativamente superficial, razão pela
                qual compactação, encharcamento e deficiência hídrica podem
                afectar rapidamente o crescimento.
              </p>
            </Card>

            <Card titulo="Folhas">
              <p>
                A manutenção de folhas funcionais é essencial para a formação
                e enchimento do cacho.
              </p>
              <p>
                A remoção racional de folhas doentes ou danificadas faz parte
                do manejo sanitário, mas a desfolha excessiva reduz a capacidade
                fotossintética.
              </p>
            </Card>

            <Card titulo="Flores e cacho">
              <p>
                A inflorescência desenvolve-se a partir do centro do
                pseudocaule e origina as mãos e os frutos que compõem o cacho.
              </p>
              <p>
                Cada pseudocaule produtivo normalmente origina um cacho e,
                depois da colheita, deve ser manejado para permitir a condução
                do rebento seleccionado.
              </p>
            </Card>

            <Card titulo="Rebentos">
              <p>
                Os rebentos são importantes para a continuidade da plantação.
                Porém, excesso de rebentos aumenta a competição por água,
                nutrientes e luz.
              </p>
              <p>
                A desbrota deve preservar uma população equilibrada e permitir
                a sucessão entre planta-mãe e rebento.
              </p>
            </Card>

            <Card titulo="Ciclo">
              <p>
                A duração até à colheita varia com cultivar, temperatura,
                disponibilidade de água, fertilidade, altitude e sistema de
                produção.
              </p>
              <p>
                Por isso, não se deve utilizar um único número de meses como
                regra universal para todas as regiões de Angola.
              </p>
            </Card>
          </div>
        </section>

        <section id="clima" className="mt-14 scroll-mt-24">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              02 • Ambiente
            </p>
            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              Clima, temperatura, vento e água
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card titulo="Temperatura">
              <p>
                A banana é uma cultura tropical e subtropical. Referências
                agronómicas internacionais colocam o crescimento óptimo próximo
                de 27 °C, com forte redução do crescimento sob temperaturas
                baixas.
              </p>
              <p>
                A resposta exacta depende do grupo genético e das condições de
                altitude. Por isso, a escolha do material deve considerar o
                ambiente de produção.
              </p>
            </Card>

            <Card titulo="Precipitação">
              <p>
                A cultura necessita de disponibilidade regular de água durante
                o ciclo. Distribuição irregular das chuvas pode exigir
                irrigação.
              </p>
              <p>
                A FAO destaca que a banana necessita de fornecimento frequente
                de água para manter produtividade e qualidade.
              </p>
            </Card>

            <Card titulo="Vento">
              <p>
                O vento forte pode rasgar folhas, provocar tombamento e
                comprometer a qualidade do cacho.
              </p>
              <p>
                Barreiras vegetais, escolha correcta do local e condução
                adequada podem reduzir o risco.
              </p>
            </Card>

            <Card titulo="Drenagem">
              <p>
                Água disponível não significa solo permanentemente encharcado.
                A zona radicular precisa de oxigénio.
              </p>
              <p>
                Áreas com drenagem deficiente devem ser avaliadas antes da
                instalação, sobretudo quando existe histórico de doenças
                radiculares ou murchas.
              </p>
            </Card>
          </div>

          <div className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-900 p-7 text-emerald-50">
            <h3 className="text-xl font-bold text-white">
              Regra prática para Angola
            </h3>
            <p className="mt-3 leading-8">
              Em regiões com estação seca marcada, a pergunta principal não é
              apenas "há chuva suficiente?", mas também "há uma fonte de água
              segura para manter o crescimento quando a precipitação falhar?".
              Isto é particularmente importante em sistemas comerciais.
            </p>
          </div>
        </section>

        <section id="solo" className="mt-14 scroll-mt-24">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              03 • Solo
            </p>
            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              Solo, fertilidade e preparação
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card titulo="Características desejáveis">
              <p>
                Solos profundos, estruturados, bem drenados e com boa capacidade
                de retenção de água são geralmente favoráveis à cultura.
              </p>
              <p>
                A análise do solo deve preceder decisões de correcção e
                fertilização.
              </p>
            </Card>

            <Card titulo="Matéria orgânica">
              <p>
                A incorporação de matéria orgânica bem estabilizada pode
                melhorar estrutura, actividade biológica e retenção de água.
              </p>
              <p>
                Restos vegetais podem ser aproveitados como cobertura, desde que
                o manejo sanitário seja adequado.
              </p>
            </Card>

            <Card titulo="Drenagem">
              <p>
                A drenagem é particularmente importante em solos pesados ou
                zonas baixas.
              </p>
              <p>
                O excesso de água pode limitar as raízes e favorecer problemas
                sanitários.
              </p>
            </Card>

            <Card titulo="pH">
              <p>
                A banana tolera uma faixa relativamente ampla de reacção do
                solo, mas o intervalo adequado depende da cultivar, textura,
                fertilidade e disponibilidade de nutrientes.
              </p>
              <p>
                Não se deve aplicar calcário ou outro correctivo sem análise
                quando se pretende uma recomendação técnica de exploração.
              </p>
            </Card>

            <Card titulo="Compactação">
              <p>
                Camadas compactadas dificultam a exploração do solo pelas raízes
                e podem prejudicar infiltração e drenagem.
              </p>
              <p>
                O diagnóstico físico deve orientar a preparação, evitando
                mobilização excessiva.
              </p>
            </Card>

            <Card titulo="Conservação">
              <p>
                Cobertura do solo, matéria orgânica, controlo de erosão e gestão
                da água fazem parte de uma estratégia de produtividade de longo
                prazo.
              </p>
            </Card>
          </div>
        </section>

        <section id="plantacao" className="mt-14 scroll-mt-24">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              04 • Implantação
            </p>
            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              Material de plantação e instalação do bananal
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card titulo="Mudas e rebentos">
              <p>
                O material vegetativo deve ser vigoroso, correctamente
                identificado e livre de sintomas de pragas e doenças.
              </p>
              <p>
                Rebentos seleccionados de plantas-mãe saudáveis podem ser
                utilizados em sistemas tradicionais.
              </p>
              <p>
                Em sistemas comerciais, mudas provenientes de cultura de
                tecidos oferecem vantagens de uniformidade e sanidade quando
                produzidas e manejadas correctamente.
              </p>
            </Card>

            <Card titulo="Selecção da área">
              <p>
                Antes da instalação deve-se avaliar acesso, água, drenagem,
                fertilidade, vento, histórico sanitário e facilidade de
                transporte.
              </p>
              <p>
                Uma área aparentemente fértil pode ser inadequada se apresentar
                encharcamento persistente ou histórico de patógenos de solo.
              </p>
            </Card>

            <Card titulo="Espaçamento">
              <p>
                O espaçamento depende do grupo genético, porte, fertilidade,
                disponibilidade de água, sistema de condução e objectivo
                produtivo.
              </p>
              <p>
                Referências FAO apresentam exemplos de sistemas entre 2 × 2 m e
                5 × 5 m, mostrando que não existe um único espaçamento
                universal.
              </p>
            </Card>

            <Card titulo="Plantação">
              <p>
                A preparação da cova deve permitir bom contacto entre raízes e
                solo e evitar bolsas de ar.
              </p>
              <p>
                O plantio no início de um período de chuva bem estabelecido pode
                favorecer o pegamento em sistemas sem irrigação.
              </p>
            </Card>
          </div>

          <div className="mt-6 rounded-3xl border border-amber-200 bg-amber-50 p-6">
            <h3 className="font-bold text-amber-900">
              Atenção sobre recomendações de espaçamento
            </h3>
            <p className="mt-2 text-sm leading-7 text-amber-950">
              Os valores internacionais apresentados nesta página são
              referências técnicas. Não devem ser transformados automaticamente
              numa recomendação oficial para todas as províncias de Angola.
              Para uma recomendação de exploração, devem ser considerados
              cultivar, solo, água, mecanização, finalidade e condições locais.
            </p>
          </div>
        </section>

        <section id="manejo" className="mt-14 scroll-mt-24">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              05 • Manejo
            </p>
            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              Água, nutrição, desbrota e cobertura do solo
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card titulo="Irrigação">
              <p>
                A banana possui elevada necessidade de água e responde à
                disponibilidade regular de humidade no solo.
              </p>
              <p>
                Sistemas de gota-a-gota, microaspersão e outros métodos podem
                ser utilizados conforme disponibilidade de água, topografia,
                investimento e escala da exploração.
              </p>
            </Card>

            <Card titulo="Nutrição">
              <p>
                O potássio é particularmente importante na cultura, mas o
                programa nutricional deve ser construído a partir de análise de
                solo, produtividade esperada e estado nutricional das plantas.
              </p>
              <p>
                Aplicações indiscriminadas de fertilizante aumentam custos e
                podem provocar desequilíbrios.
              </p>
            </Card>

            <Card titulo="Desbrota">
              <p>
                Deve-se controlar o número de rebentos para reduzir competição e
                manter uma sucessão produtiva organizada.
              </p>
              <p>
                O sistema mãe-filho-neto é uma referência útil para compreender
                a continuidade do bananal.
              </p>
            </Card>

            <Card titulo="Desfolha">
              <p>
                Folhas severamente doentes, quebradas ou em contacto prejudicial
                com o cacho podem ser removidas.
              </p>
              <p>
                A remoção deve ser selectiva, pois a retenção de folhas
                funcionais é importante para o enchimento dos frutos.
              </p>
            </Card>

            <Card titulo="Mulching">
              <p>
                Restos vegetais bem manejados podem ajudar a conservar humidade,
                reduzir erosão e devolver matéria orgânica ao solo.
              </p>
            </Card>

            <Card titulo="Controlo de infestantes">
              <p>
                A competição é especialmente importante durante a fase inicial
                de estabelecimento.
              </p>
              <p>
                Métodos mecânicos, cobertura do solo e culturas de cobertura
                podem integrar um programa de manejo.
              </p>
            </Card>
          </div>
        </section>

        <section id="sanidade" className="mt-14 scroll-mt-24">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              06 • Sanidade vegetal
            </p>
            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              Principais riscos sanitários
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card titulo="Sigatoka-negra">
              <p>
                A sigatoka-negra afecta a área foliar e pode reduzir o
                desempenho da planta quando não é manejada.
              </p>
              <p>
                A manutenção de folhas funcionais, monitorização, nutrição
                equilibrada e estratégias integradas fazem parte do controlo.
              </p>
            </Card>

            <Card titulo="Murcha de Fusarium">
              <p>
                A murcha de Fusarium é uma doença vascular particularmente
                importante devido à persistência do agente no solo.
              </p>
              <p>
                Em áreas afectadas, a prevenção da movimentação de solo e
                material vegetal é fundamental.
              </p>
            </Card>

            <Card titulo="Nemátodes">
              <p>
                Nemátodes podem causar danos no sistema radicular, reduzindo a
                absorção de água e nutrientes e aumentando a susceptibilidade ao
                tombamento.
              </p>
              <p>
                Material de plantação limpo e práticas de higiene são medidas
                importantes.
              </p>
            </Card>

            <Card titulo="Broca e gorgulho">
              <p>
                Insectos associados ao rizoma e pseudocaule podem enfraquecer as
                plantas e comprometer a produtividade.
              </p>
              <p>
                A identificação correcta da praga deve preceder qualquer
                tratamento.
              </p>
            </Card>

            <Card titulo="Viroses">
              <p>
                Vírus podem ser disseminados por material vegetativo e vectores.
                A utilização de material de plantação sanitariamente seguro é
                uma das medidas de prevenção.
              </p>
            </Card>

            <Card titulo="Biossegurança">
              <p>
                Ferramentas, botas, máquinas, água, solo e mudas podem
                transportar agentes patogénicos.
              </p>
              <p>
                A movimentação de material entre parcelas deve ser controlada,
                sobretudo quando existe suspeita de doenças de solo.
              </p>
            </Card>
          </div>

          <div className="mt-6 rounded-3xl border border-red-200 bg-red-50 p-6">
            <h3 className="font-bold text-red-900">
              Murcha de Fusarium: prevenção antes do problema
            </h3>
            <p className="mt-2 text-sm leading-7 text-red-950">
              A informação técnica da ProMusa destaca que fungicidas não
              eliminam a doença de Fusarium do solo. A prevenção da entrada e
              disseminação do patógeno, juntamente com material vegetal
              adequado e escolha de cultivares com resistência quando
              disponíveis, é fundamental.
            </p>
          </div>
        </section>

        <section id="colheita" className="mt-14 scroll-mt-24">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              07 • Colheita e pós-colheita
            </p>
            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              Da maturação ao mercado
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card titulo="Momento de corte">
              <p>
                O momento da colheita depende do destino do produto, distância
                até ao mercado, cultivar e grau de desenvolvimento do fruto.
              </p>
            </Card>

            <Card titulo="Manuseamento">
              <p>
                Impactos, quedas, cortes e pressão excessiva podem causar danos
                que só aparecem durante a maturação.
              </p>
              <p>
                O manuseamento deve ser suave desde o campo até à embalagem.
              </p>
            </Card>

            <Card titulo="Selecção">
              <p>
                Para mercados mais exigentes, frutos com danos mecânicos,
                podridões ou deformações devem ser separados.
              </p>
            </Card>

            <Card titulo="Lavagem e preparação">
              <p>
                Operações de limpeza e preparação devem utilizar água de
                qualidade adequada e superfícies higienizadas.
              </p>
            </Card>

            <Card titulo="Embalagem">
              <p>
                A embalagem deve proteger o fruto durante transporte,
                armazenamento e comercialização.
              </p>
            </Card>

            <Card titulo="Cadeia de frio">
              <p>
                A temperatura e o tempo entre colheita e consumo influenciam
                directamente a qualidade comercial e a vida útil.
              </p>
            </Card>
          </div>
        </section>

        <section id="angola" className="mt-14 scroll-mt-24">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              08 • Banana em Angola
            </p>
            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              Uma cultura com forte presença nacional
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <Card titulo="RAPP 2019–2020">
              <p className="text-3xl font-black text-emerald-700">
                399 877
              </p>
              <p>
                explorações familiares com bananeiras registadas no conjunto
                nacional.
              </p>
              <p className="text-xs text-slate-500">
                Dado histórico do RAPP 2019–2020.
              </p>
            </Card>

            <Card titulo="Área histórica">
              <p className="text-3xl font-black text-emerald-700">
                89 700 ha
              </p>
              <p>
                área total cultivada com bananeiras nas explorações familiares
                no RAPP 2019–2020.
              </p>
              <p className="text-xs text-slate-500">
                Não representa uma estimativa actual para 2026.
              </p>
            </Card>

            <Card titulo="Campanha 2022/2023">
              <p className="text-3xl font-black text-emerald-700">
                4 893 686 t
              </p>
              <p>
                produção de banana divulgada pelo Governo para a campanha
                2022/2023.
              </p>
              <p className="text-xs text-slate-500">
                Dado de campanha, não produtividade por produtor.
              </p>
            </Card>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Card titulo="Bengo: produção e cadeia de valor">
              <p>
                O Bengo possui uma posição particularmente importante na cadeia
                da banana. A FEIBA 2025 foi realizada no Panguila e reuniu mais
                de 250 expositores.
              </p>
              <p>
                O Governo Provincial informou na edição de 2025 que 63,2% da
                produção de banana do Bengo provinha de micro, pequenas e médias
                empresas e 36,8% de grandes empresas.
              </p>
              <p>
                O dado demonstra a coexistência de diferentes escalas de
                produção na mesma cadeia.
              </p>
            </Card>

            <Card titulo="Novagrolíder — Caxito">
              <p>
                Em Março de 2025, uma visita oficial à Fazenda Novagrolíder, em
                Caxito, permitiu observar actividades ligadas à produção,
                colheita e preparação da banana para distribuição no mercado
                interno e exportação.
              </p>
              <p>
                A experiência é útil para estudar a cadeia empresarial,
                embora não deva ser tratada como representativa de todos os
                produtores angolanos.
              </p>
            </Card>
          </div>
        </section>

        <section id="provincias" className="mt-14 scroll-mt-24">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              09 • Distribuição territorial
            </p>
            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              Banana nas províncias de Angola
            </h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              Selecciona uma província para consultar a informação histórica
              disponível e as observações técnicas. Onde não existem dados
              separados no RAPP, não fazemos estimativas artificiais.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
            <div className="rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm">
              <label
                htmlFor="pesquisa-provincia"
                className="text-sm font-bold text-emerald-900"
              >
                Pesquisar província
              </label>

              <input
                id="pesquisa-provincia"
                type="search"
                value={pesquisa}
                onChange={(event) => setPesquisa(event.target.value)}
                placeholder="Ex.: Bengo, Huambo, Uíge..."
                className="mt-2 w-full rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm outline-none ring-emerald-500 focus:ring-2"
              />

              <div className="mt-4 max-h-[520px] space-y-2 overflow-y-auto pr-1">
                {provinciasFiltradas.map((item) => (
                  <button
                    key={item.nome}
                    type="button"
                    onClick={() => setProvinciaSelecionada(item.nome)}
                    className={`w-full rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${
                      provinciaSelecionada === item.nome
                        ? "border-emerald-600 bg-emerald-700 text-white"
                        : "border-emerald-100 bg-white text-slate-700 hover:bg-emerald-50"
                    }`}
                  >
                    <span className="block">{item.nome}</span>
                    <span
                      className={`text-xs ${
                        provinciaSelecionada === item.nome
                          ? "text-emerald-100"
                          : "text-slate-500"
                      }`}
                    >
                      {item.regiao}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm">
              {provincia && (
                <>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest text-emerald-600">
                        Província seleccionada
                      </p>
                      <h3 className="mt-1 text-3xl font-black text-emerald-950">
                        {provincia.nome}
                      </h3>
                    </div>

                    <span className="rounded-full bg-emerald-100 px-4 py-2 text-xs font-bold text-emerald-800">
                      Região {provincia.regiao}
                    </span>
                  </div>

                  {provincia.dadosHistoricos ? (
                    <div className="mt-7 grid gap-4 md:grid-cols-3">
                      <div className="rounded-2xl bg-emerald-50 p-5">
                        <p className="text-xs font-bold uppercase text-emerald-700">
                          Explorações familiares
                        </p>
                        <p className="mt-2 text-2xl font-black text-emerald-950">
                          {provincia.dadosHistoricos.exploracoesFamiliares.toLocaleString(
                            "pt-PT"
                          )}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-emerald-50 p-5">
                        <p className="text-xs font-bold uppercase text-emerald-700">
                          % das explorações
                        </p>
                        <p className="mt-2 text-2xl font-black text-emerald-950">
                          {provincia.dadosHistoricos.percentagemExploracoes}%
                        </p>
                      </div>

                      <div className="rounded-2xl bg-emerald-50 p-5">
                        <p className="text-xs font-bold uppercase text-emerald-700">
                          Área histórica
                        </p>
                        <p className="mt-2 text-2xl font-black text-emerald-950">
                          {provincia.dadosHistoricos.areaHa.toLocaleString(
                            "pt-PT"
                          )}{" "}
                          ha
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                      <p className="font-bold text-amber-900">
                        Sem valor provincial separado no RAPP 2019–2020
                      </p>
                      <p className="mt-2 text-sm leading-7 text-amber-950">
                        O AGROINOVA não cria uma estimativa para preencher esta
                        lacuna. A ausência do valor não significa ausência da
                        cultura.
                      </p>
                    </div>
                  )}

                  <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                    <p className="text-sm font-bold text-slate-800">
                      Leitura técnica
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {provincia.observacao}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        <section id="investigacao" className="mt-14 scroll-mt-24">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              10 • Investigação
            </p>
            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              Perguntas para investigação agrícola em Angola
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card titulo="Genética">
              <p>
                Quais grupos genéticos apresentam melhor adaptação às diferentes
                zonas agroecológicas de Angola?
              </p>
            </Card>

            <Card titulo="Material de plantação">
              <p>
                Qual é o desempenho comparativo de rebentos seleccionados e
                mudas de cultura de tecidos em condições de pequenos produtores?
              </p>
            </Card>

            <Card titulo="Água">
              <p>
                Quais estratégias de irrigação permitem maior eficiência no uso
                da água em regiões com estação seca?
              </p>
            </Card>

            <Card titulo="Nutrição">
              <p>
                Quais combinações de matéria orgânica e fertilização mineral
                apresentam melhor eficiência económica?
              </p>
            </Card>

            <Card titulo="Sanidade">
              <p>
                Qual é a distribuição real de doenças e nemátodes da bananeira
                nas principais regiões produtoras?
              </p>
            </Card>

            <Card titulo="Pós-colheita">
              <p>
                Onde ocorrem as maiores perdas entre produtor, comerciante,
                transporte e consumidor?
              </p>
            </Card>

            <Card titulo="Cadeia de valor">
              <p>
                Como melhorar a ligação entre pequenos produtores, cooperativas,
                agroindústrias e mercados formais?
              </p>
            </Card>

            <Card titulo="Qualidade">
              <p>
                Quais parâmetros de qualidade devem ser usados para classificar
                banana destinada ao mercado interno e à exportação?
              </p>
            </Card>

            <Card titulo="Digitalização">
              <p>
                Como utilizar dados geográficos, imagens de satélite, sensores
                e inteligência artificial para monitorizar bananeiras em
                Angola?
              </p>
            </Card>
          </div>
        </section>

        <section className="mt-14">
          <div className="rounded-3xl bg-emerald-950 p-8 text-white">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-300">
              Para estudantes e técnicos
            </p>

            <h2 className="mt-3 text-3xl font-black">
              O que observar numa visita técnica a um bananal
            </h2>

            <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Origem e sanidade do material de plantação",
                "Drenagem e condição física do solo",
                "Disponibilidade e qualidade da água",
                "Número de rebentos por touceira",
                "Estado das folhas",
                "Sinais de pragas e doenças",
                "Uniformidade do bananal",
                "Qualidade dos cachos",
                "Método e momento de colheita",
                "Perdas durante transporte",
                "Destino comercial da produção",
                "Registo de custos e produtividade",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-emerald-800 bg-emerald-900/70 p-4 text-sm leading-6 text-emerald-50"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="fontes" className="mt-14 scroll-mt-24">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              11 • Fontes
            </p>
            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              Referências utilizadas
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {fontes.map((fonte) => (
              <a
                key={fonte.url}
                href={fonte.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md"
              >
                <h3 className="font-bold text-emerald-900">
                  {fonte.titulo}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {fonte.descricao}
                </p>

                <p className="mt-3 text-xs font-bold text-emerald-700">
                  Consultar fonte →
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="rounded-3xl border border-emerald-200 bg-white p-7">
            <h2 className="text-2xl font-black text-emerald-950">
              Integridade dos dados
            </h2>

            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
              <p>
                Os números históricos apresentados nesta página são
                identificados pelo respectivo período e fonte.
              </p>

              <p>
                O RAPP 2019–2020 foi realizado quando Angola tinha 18 províncias
                na configuração territorial usada pelo recenseamento. O
                AGROINOVA actualmente trabalha com 21 províncias e não
                redistribui automaticamente valores antigos pelas novas
                unidades administrativas.
              </p>

              <p>
                Os dados de produção nacional de 2022/2023 também são
                apresentados como dados de campanha. Não são utilizados para
                calcular produtividade provincial sem área e metodologia
                compatíveis.
              </p>

              <p>
                As recomendações agronómicas internacionais são identificadas
                como referências técnicas e não como recomendações oficiais do
                Ministério da Agricultura e Florestas de Angola.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-7">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              Navegação
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <Link
                href="/agricultura/amendoim"
                className="rounded-2xl border border-emerald-200 bg-white p-5 font-bold text-emerald-900 transition hover:bg-emerald-100"
              >
                ← Amendoim
              </Link>

              <Link
                href="/agricultura"
                className="rounded-2xl border border-emerald-200 bg-white p-5 text-center font-bold text-emerald-900 transition hover:bg-emerald-100"
              >
                Todas as culturas
              </Link>

              <Link
                href="/agricultura/manga"
                className="rounded-2xl border border-emerald-200 bg-white p-5 text-right font-bold text-emerald-900 transition hover:bg-emerald-100"
              >
                Próxima cultura: Manga →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}