"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";

type Provincia = {
  nome: string;
  regiao: string;
  evidencia: string;
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
    evidencia:
      "O Bengo possui actividade frutícola e explorações que trabalham com ananás. A presença da cultura é também registada em sistemas agrícolas diversificados. Não é atribuído aqui um valor provincial de produção sem série estatística específica.",
  },
  {
    nome: "Benguela",
    regiao: "Centro-Oeste",
    evidencia:
      "A província possui sistemas agrícolas diversificados e mercado frutícola. A produção provincial específica de ananás deve ser consultada nas estatísticas oficiais correspondentes ao período.",
  },
  {
    nome: "Bié",
    regiao: "Centro",
    evidencia:
      "O ananás pode integrar sistemas de diversificação agrícola do planalto. Não é apresentado um valor provincial não confirmado.",
  },
  {
    nome: "Cabinda",
    regiao: "Norte",
    evidencia:
      "As condições tropicais de Cabinda podem favorecer culturas frutícolas. A produção específica de ananás deve ser confirmada por levantamento estatístico provincial.",
  },
  {
    nome: "Cuando",
    regiao: "Sudeste",
    evidencia:
      "Não é apresentado um valor específico para a actual província do Cuando. Dados de antigas configurações administrativas não são redistribuídos artificialmente.",
  },
  {
    nome: "Cubango",
    regiao: "Sudeste",
    evidencia:
      "Não é apresentado um valor específico para a actual província do Cubango sem uma fonte estatística compatível.",
  },
  {
    nome: "Cuanza Norte",
    regiao: "Norte",
    evidencia:
      "A província possui condições para diversificação agrícola e fruticultura tropical. A dimensão específica da cultura do ananás requer dados provinciais confirmados.",
  },
  {
    nome: "Cuanza Sul",
    regiao: "Centro-Oeste",
    evidencia:
      "A província possui forte diversidade agroecológica e actividade agrícola. O ananás pode integrar sistemas frutícolas, mas não é atribuído um volume provincial sem fonte específica.",
  },
  {
    nome: "Cunene",
    regiao: "Sul",
    evidencia:
      "A produção de ananás exige atenção especial à disponibilidade de água, sobretudo nas zonas mais secas.",
  },
  {
    nome: "Huambo",
    regiao: "Centro",
    evidencia:
      "Existe documentação científica relacionada com processamento e fermentação de ananás produzido em Huambo, demonstrando interesse da cultura também na cadeia de valor agroindustrial.",
  },
  {
    nome: "Huíla",
    regiao: "Sul",
    evidencia:
      "O ananás pode integrar sistemas de fruticultura e diversificação agrícola. Irrigação, temperatura e características do solo devem ser avaliadas localmente.",
  },
  {
    nome: "Icolo e Bengo",
    regiao: "Norte",
    evidencia:
      "A actual província é considerada separadamente. Dados históricos de unidades administrativas anteriores não são redistribuídos automaticamente.",
  },
  {
    nome: "Luanda",
    regiao: "Norte",
    evidencia:
      "Existe produção documentada de ananás na zona de Viana/Kikuxi. Uma exploração agrícola localizada em Kikuxi apresenta uma área de aproximadamente 2 hectares com ananaseiros.",
  },
  {
    nome: "Lunda Norte",
    regiao: "Leste",
    evidencia:
      "O ananás pode integrar sistemas agrícolas diversificados, mas não é apresentado valor provincial sem fonte específica.",
  },
  {
    nome: "Lunda Sul",
    regiao: "Leste",
    evidencia:
      "Existem organizações agrícolas registadas que incluem ananás entre os produtos frutícolas. A produção provincial total não é aqui estimada.",
  },
  {
    nome: "Malanje",
    regiao: "Norte",
    evidencia:
      "A província apresenta grande diversidade agrícola e pode integrar o ananás na fruticultura. Não é apresentado valor específico sem fonte compatível.",
  },
  {
    nome: "Moxico",
    regiao: "Leste",
    evidencia:
      "A cultura pode participar da diversificação agrícola, mas não existe nesta ficha uma série provincial específica de produção.",
  },
  {
    nome: "Moxico Leste",
    regiao: "Leste",
    evidencia:
      "A actual província é considerada separadamente e não recebe automaticamente dados históricos do antigo território do Moxico.",
  },
  {
    nome: "Namibe",
    regiao: "Sul",
    evidencia:
      "A produção depende fortemente da disponibilidade de água e da escolha de áreas adequadas devido ao carácter semiárido de grande parte da província.",
  },
  {
    nome: "Uíge",
    regiao: "Norte",
    evidencia:
      "As condições tropicais da província são compatíveis com diversificação frutícola. A dimensão da produção de ananás deve ser confirmada por estatísticas específicas.",
  },
  {
    nome: "Zaire",
    regiao: "Norte",
    evidencia:
      "As condições climáticas permitem diversificação de culturas tropicais. Não é apresentado volume provincial sem fonte oficial específica.",
  },
];

const imagens: Imagem[] = [
  {
    src: "https://paiaki.com/storage/files/ao/12205/thumb-830x480-fcb69f24ea3a2009da854d91e81206f1.jpg",
    href: "https://paiaki.com/vende-se-esta-fazenda-no-kikuchi-luanda-12205",
    alt: "Plantação de ananás em Kikuxi, Luanda",
    legenda:
      "Plantação de ananás numa exploração agrícola localizada na zona de Kikuxi, Viana, Luanda.",
    fonte: "Paiaki Angola",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Pineapple_Vendors_Huambo_Quibala.jpg",
    href: "https://commons.wikimedia.org/wiki/File:Pineapple_Vendors_Huambo_Quibala.jpg",
    alt: "Venda de ananás na estrada Huambo-Quibala",
    legenda:
      "Comercialização de ananás por vendedores angolanos numa estrada entre Huambo e Quibala.",
    fonte: "Wikimedia Commons",
  },
  {
    src: "https://www.embrapa.br/bme_images/o/140881120o.jpg",
    href: "https://www.embrapa.br/en/busca-de-imagens/-/midia/3522028/brs-imperial",
    alt: "Campo de ananás da Embrapa",
    legenda:
      "Campo experimental/comercial de ananás utilizado como referência visual para sistemas de produção.",
    fonte: "Embrapa",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Pineapple_field.jpg/1200px-Pineapple_field.jpg",
    href: "https://commons.wikimedia.org/wiki/File:Pineapple_field.jpg",
    alt: "Campo de ananás",
    legenda:
      "Campo de ananás com plantas organizadas em linhas, demonstrando a arquitectura típica da cultura.",
    fonte: "Wikimedia Commons",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Ananas_comosus_plant.jpg/1280px-Ananas_comosus_plant.jpg",
    href: "https://commons.wikimedia.org/wiki/File:Pineapple_plant_(Ananas_comosus).jpg",
    alt: "Planta de Ananas comosus",
    legenda:
      "Planta de Ananas comosus fotografada numa comunidade agrícola africana.",
    fonte: "Wikimedia Commons / Wiki Loves Africa",
  },
];

const fontes = [
  {
    titulo: "INE — Anuário Estatístico da Agricultura",
    descricao:
      "Publicação oficial que reúne dados das campanhas agrícolas e produção vegetal de Angola.",
    url: "https://www.ine.gov.ao/publicacoes/detalhes/NDY0MDE%3D",
  },
  {
    titulo: "INE/MINAGRIF — Produção de frutas",
    descricao:
      "Dados oficiais utilizados nesta página para a produção nacional de ananás.",
    url: "https://www.ine.gov.ao/Arquivos/arquivosCarregados/Carregados/Publicacao_638734024815201396.pdf",
  },
  {
    titulo: "MINAGRIF — Fazenda Kanduma",
    descricao:
      "Experiência recente de produção comercial de ananás no Quissongo, com oito hectares de cultura.",
    url: "https://minagrif.gov.ao/web/noticias/ministro-constata-potencial-produtivo-da-fazenda-kanduma-no-municipio-do-quissongo",
  },
  {
    titulo: "FAO — Manual de produção de ananás",
    descricao:
      "Referência técnica sobre preparação do terreno, plantação, material vegetativo e manejo.",
    url: "https://www.fao.org/fileadmin/templates/organicexports/docs/Organic_sugarloaf_pineapple_manual.pdf",
  },
  {
    titulo: "FAO — Pós-colheita do ananás",
    descricao:
      "Referência sobre plantação, densidade, indução floral, ervas daninhas e operações pós-colheita.",
    url: "https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_Pineapple.pdf",
  },
  {
    titulo: "FAO AGRIS — Produção de pineapple",
    descricao:
      "Referência agronómica sobre solos, propagação, fertilização, pragas e doenças.",
    url: "https://agris.fao.org/search/en/providers/122427/records/6471c33a2a40512c710e2bfb",
  },
  {
    titulo: "FAO AGRIS — Boas práticas agrícolas",
    descricao:
      "Manual sobre produção, colheita, transporte, processamento, segurança e qualidade.",
    url: "https://agris.fao.org/search/en/providers/122516/records/664724f6e08d18652f242991",
  },
  {
    titulo: "FAO AGRIS — Vinho de ananás produzido em Huambo",
    descricao:
      "Investigação realizada com ananás de Huambo e leveduras nativas para produção de bebida fermentada.",
    url: "https://agris.fao.org/search/en/providers/122535/records/65df13524c5aef494fdf814f",
  },
  {
    titulo: "Wikimedia Commons — Ananas comosus",
    descricao:
      "Galeria botânica com plantas, campos, frutos, flores e materiais visuais da espécie.",
    url: "https://commons.wikimedia.org/wiki/Ananas_comosus",
  },
];

function Card({ titulo, children }: CardProps) {
  return (
    <article className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-xl font-bold text-emerald-950">{titulo}</h3>

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

export default function AbacaxiPage() {
  const [provinciaSelecionada, setProvinciaSelecionada] =
    useState("Luanda");

  const [pesquisa, setPesquisa] = useState("");

  const provincia = provincias.find(
    (item) => item.nome === provinciaSelecionada
  );

  const provinciasFiltradas = useMemo(() => {
    const termo = pesquisa.trim().toLowerCase();

    if (!termo) {
      return provincias;
    }

    return provincias.filter((item) =>
      `${item.nome} ${item.regiao} ${item.evidencia}`
        .toLowerCase()
        .includes(termo)
    );
  }, [pesquisa]);

  return (
    <main className="min-h-screen bg-emerald-50 text-slate-900">
      {/* HERO */}

      <section className="relative overflow-hidden bg-emerald-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage: `url("${imagens[0].src}")`,
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-5xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">
              AGROINOVA ANGOLA • Agricultura
            </p>

            <h1 className="text-5xl font-black tracking-tight text-white md:text-7xl">
              Abacaxi
            </h1>

            <p className="mt-6 max-w-5xl text-lg leading-8 text-emerald-50 md:text-xl">
              Guia técnico e académico sobre{" "}
              <em>Ananas comosus</em>, com enfoque na produção em Angola,
              incluindo botânica, clima, solo, material de plantação,
              preparação do terreno, espaçamento, nutrição, água, floração,
              pragas, doenças, colheita, pós-colheita, processamento,
              comercialização, experiências agrícolas e investigação.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <Tag>Ananas comosus</Tag>
              <Tag>Fruteiras</Tag>
              <Tag>Ananás</Tag>
              <Tag>Abacaxi</Tag>
              <Tag>Produção familiar</Tag>
              <Tag>Produção empresarial</Tag>
              <Tag>Angola</Tag>
            </div>
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO */}

      <nav className="sticky top-0 z-30 border-b border-emerald-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-3 text-sm lg:px-8">
          {[
            ["Visão geral", "visao-geral"],
            ["Botânica", "botanica"],
            ["Clima", "clima"],
            ["Solo", "solo"],
            ["Material", "material"],
            ["Plantação", "plantacao"],
            ["Manejo", "manejo"],
            ["Nutrição", "nutricao"],
            ["Floração", "floracao"],
            ["Pragas", "pragas"],
            ["Doenças", "doencas"],
            ["Colheita", "colheita"],
            ["Pós-colheita", "pos-colheita"],
            ["Processamento", "processamento"],
            ["Angola", "angola"],
            ["Províncias", "provincias"],
            ["Investigação", "investigacao"],
            ["Fontes", "fontes"],
          ].map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="whitespace-nowrap rounded-full px-4 py-2 font-semibold text-emerald-800 transition hover:bg-emerald-100"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* VISÃO GERAL */}

        <section id="visao-geral" className="scroll-mt-24">
          <div className="mb-7">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              01 • Visão geral
            </p>

            <h2 className="mt-2 text-3xl font-black text-emerald-950 md:text-4xl">
              Uma cultura frutícola importante para Angola
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <Card titulo="Identificação">
              <p>
                O abacaxi ou ananás cultivado pertence principalmente à espécie{" "}
                <strong>Ananas comosus</strong>, da família Bromeliaceae.
              </p>

              <p>
                É uma planta herbácea perene e não uma árvore. A parte
                comercial é o fruto composto desenvolvido a partir da
                inflorescência.
              </p>
            </Card>

            <Card titulo="Importância em Angola">
              <p>
                O ananás ocupa uma posição relevante dentro da fileira das
                frutas produzidas em Angola.
              </p>

              <p>
                Dados oficiais do INE/MINAGRIF registam{" "}
                <strong>574 155 toneladas</strong> em 2022/2023 e{" "}
                <strong>637 630 toneladas</strong> em 2023/2024.
              </p>

              <p className="text-xs text-slate-500">
                Valores nacionais de campanhas específicas. Não devem ser
                tratados como produção de 2026.
              </p>
            </Card>

            <Card titulo="Oportunidade económica">
              <p>
                A cultura permite trabalhar diferentes segmentos: consumo
                fresco, venda em mercados, fornecimento a retalhistas,
                processamento e transformação agroindustrial.
              </p>

              <p>
                A qualidade do material de plantação, a uniformidade do campo e
                o planeamento da colheita são fundamentais para a cadeia.
              </p>
            </Card>
          </div>
        </section>

        {/* IMAGENS */}

        <section className="mt-16">
          <div className="mb-7">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              Campo e realidade produtiva
            </p>

            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              Imagens reais de produção e comercialização
            </h2>

            <p className="mt-3 max-w-4xl text-slate-600">
              Sempre que possível, o AGROINOVA privilegia imagens de Angola.
              Quando não existe material visual angolano suficiente, são
              utilizadas imagens técnicas africanas ou institucionais,
              identificadas na respectiva legenda.
            </p>
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
                <div className="aspect-[16/9] overflow-hidden bg-emerald-100">
                  <img
                    src={imagem.src}
                    alt={imagem.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <p className="font-semibold leading-6 text-slate-800">
                    {imagem.legenda}
                  </p>

                  <p className="mt-2 text-xs text-slate-500">
                    Fonte: {imagem.fonte}
                  </p>

                  <p className="mt-3 text-xs font-bold text-emerald-700">
                    Abrir fonte original →
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* BOTÂNICA */}

        <section id="botanica" className="mt-16 scroll-mt-24">
          <div className="mb-7">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              02 • Botânica
            </p>

            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              Como é constituída a planta de ananás?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card titulo="Roseta">
              <p>
                As folhas do ananaseiro formam uma roseta compacta. Esta
                arquitectura é característica da espécie e permite à planta
                interceptar luz e acumular biomassa.
              </p>
            </Card>

            <Card titulo="Folhas">
              <p>
                As folhas são longas, rígidas e podem apresentar margens
                espinhosas dependendo do material genético.
              </p>

              <p>
                A área foliar influencia o crescimento e a capacidade da planta
                de acumular reservas antes da formação do fruto.
              </p>
            </Card>

            <Card titulo="Raízes">
              <p>
                O sistema radicular é relativamente superficial.
              </p>

              <p>
                Por isso, boa estrutura do solo, ausência de compactação e
                drenagem adequada são particularmente importantes.
              </p>
            </Card>

            <Card titulo="Caule">
              <p>
                O caule é curto e fica localizado na região central da planta.
              </p>

              <p>
                Ao longo do ciclo, desenvolvem-se estruturas vegetativas que
                podem ser utilizadas para propagação.
              </p>
            </Card>

            <Card titulo="Inflorescência">
              <p>
                A inflorescência é composta por muitas flores individuais que
                se desenvolvem numa estrutura compacta.
              </p>
            </Card>

            <Card titulo="Fruto composto">
              <p>
                O fruto comercial resulta da fusão dos tecidos associados às
                numerosas flores da inflorescência.
              </p>

              <p>
                O tamanho, forma, doçura, acidez e textura variam de acordo com
                cultivar, ambiente e manejo.
              </p>
            </Card>

            <Card titulo="Coroa">
              <p>
                A coroa é a estrutura vegetativa localizada no topo do fruto.
              </p>

              <p>
                Pode ser utilizada como material de propagação.
              </p>
            </Card>

            <Card titulo="Rebentos laterais">
              <p>
                A planta produz diferentes estruturas vegetativas, incluindo
                rebentos que podem ser seleccionados para novos plantios.
              </p>
            </Card>

            <Card titulo="Ciclo">
              <p>
                O ciclo depende da cultivar, ambiente, material de plantação,
                manejo e sistema produtivo.
              </p>

              <p>
                Por isso, não se deve apresentar um único número de meses como
                regra universal para Angola.
              </p>
            </Card>
          </div>
        </section>

        {/* CLIMA */}

        <section id="clima" className="mt-16 scroll-mt-24">
          <div className="mb-7">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              03 • Clima
            </p>

            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              Temperatura, chuva e ambiente
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card titulo="Temperatura">
              <p>
                O ananás é uma cultura tropical e desenvolve-se melhor sob
                temperaturas quentes e relativamente estáveis.
              </p>

              <p>
                Temperaturas extremas podem afectar crescimento, floração e
                qualidade do fruto.
              </p>
            </Card>

            <Card titulo="Luz">
              <p>
                A planta necessita de boa disponibilidade de luz para produzir
                biomassa.
              </p>

              <p>
                Sombreamento excessivo pode reduzir o crescimento e alterar a
                arquitectura das plantas.
              </p>
            </Card>

            <Card titulo="Chuva">
              <p>
                A distribuição da chuva é tão importante quanto o total
                acumulado.
              </p>

              <p>
                Períodos longos de défice hídrico podem limitar o crescimento,
                especialmente em solos com baixa capacidade de retenção.
              </p>
            </Card>

            <Card titulo="Excesso de água">
              <p>
                Solos permanentemente saturados podem prejudicar as raízes e
                favorecer podridões.
              </p>

              <p>
                A drenagem deve ser avaliada antes da implantação.
              </p>
            </Card>

            <Card titulo="Vento">
              <p>
                Ventos fortes podem provocar danos mecânicos nas folhas e
                dificultar determinadas operações culturais.
              </p>
            </Card>

            <Card titulo="Microclima">
              <p>
                Topografia, cobertura do solo, orientação das linhas e
                disponibilidade de água podem criar diferenças importantes
                dentro da mesma exploração.
              </p>
            </Card>
          </div>
        </section>

        {/* SOLO */}

        <section id="solo" className="mt-16 scroll-mt-24">
          <div className="mb-7">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              04 • Solo
            </p>

            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              O solo deve permitir crescimento radicular e boa drenagem
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card titulo="Drenagem">
              <p>
                Um dos pontos mais importantes é evitar encharcamento
                prolongado.
              </p>
            </Card>

            <Card titulo="Textura">
              <p>
                Solos leves a moderadamente pesados podem ser utilizados quando
                apresentam boa estrutura e drenagem.
              </p>
            </Card>

            <Card titulo="Matéria orgânica">
              <p>
                A matéria orgânica contribui para estrutura, retenção de água,
                actividade biológica e disponibilidade gradual de nutrientes.
              </p>
            </Card>

            <Card titulo="Acidez">
              <p>
                O ananás apresenta tolerância relativamente elevada à acidez
                comparativamente com várias culturas.
              </p>

              <p>
                Ainda assim, a decisão de corrigir o solo deve basear-se em
                análise e objectivo produtivo.
              </p>
            </Card>

            <Card titulo="Compactação">
              <p>
                Camadas compactadas podem dificultar a expansão das raízes e a
                circulação de água e ar.
              </p>
            </Card>

            <Card titulo="Conservação">
              <p>
                Em terrenos inclinados, cobertura vegetal e outras práticas de
                conservação ajudam a reduzir erosão.
              </p>
            </Card>
          </div>

          <div className="mt-7 rounded-3xl border border-emerald-200 bg-white p-7">
            <h3 className="text-xl font-bold text-emerald-950">
              Antes de plantar: analisar o terreno
            </h3>

            <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {[
                "pH",
                "Textura",
                "Drenagem",
                "Matéria orgânica",
                "Compactação",
                "Nutrientes",
                "Declive",
                "Disponibilidade de água",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-900"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MATERIAL */}

        <section id="material" className="mt-16 scroll-mt-24">
          <div className="mb-7">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              05 • Material de plantação
            </p>

            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              O produtor não começa no campo: começa na escolha da muda
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card titulo="Rebentos">
              <p>
                Rebentos provenientes da planta-mãe podem ser utilizados como
                material vegetativo.
              </p>

              <p>
                Deve-se seleccionar material vigoroso e proveniente de plantas
                com bom estado sanitário.
              </p>
            </Card>

            <Card titulo="Filhotes ou rebentos do caule">
              <p>
                Estruturas vegetativas desenvolvidas na planta podem apresentar
                características diferentes quanto ao vigor e velocidade de
                estabelecimento.
              </p>
            </Card>

            <Card titulo="Coroas">
              <p>
                A coroa do fruto também pode ser utilizada para propagação.
              </p>

              <p>
                Contudo, o desempenho pode ser diferente daquele de rebentos
                bem desenvolvidos.
              </p>
            </Card>

            <Card titulo="Uniformidade">
              <p>
                Para produção comercial, é importante trabalhar com material
                relativamente uniforme.
              </p>

              <p>
                Misturar plantas de tamanhos muito diferentes dificulta o
                manejo, a floração programada e a colheita.
              </p>
            </Card>

            <Card titulo="Sanidade">
              <p>
                Material vegetativo doente pode transportar problemas para uma
                nova área.
              </p>

              <p>
                A origem do material deve ser conhecida sempre que possível.
              </p>
            </Card>

            <Card titulo="Identificação">
              <p>
                Em sistemas de investigação ou produção empresarial, recomenda-se
                registar origem, lote, data de plantação e material genético.
              </p>
            </Card>
          </div>
        </section>

        {/* PLANTAÇÃO */}

        <section id="plantacao" className="mt-16 scroll-mt-24">
          <div className="mb-7">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              06 • Implantação do campo
            </p>

            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              Preparar, marcar e plantar
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card titulo="Preparação do terreno">
              <p>
                O terreno deve ser preparado de acordo com textura, compactação,
                drenagem e sistema de produção.
              </p>
            </Card>

            <Card titulo="Camalhões">
              <p>
                Em locais onde existe risco de excesso de água, camalhões ou
                canteiros elevados podem melhorar a drenagem.
              </p>
            </Card>

            <Card titulo="Marcação">
              <p>
                A marcação das linhas deve procurar manter uniformidade.
              </p>

              <p>
                Linhas bem definidas facilitam capina, fertilização,
                tratamentos e colheita.
              </p>
            </Card>

            <Card titulo="Espaçamento">
              <p>
                A FAO descreve sistemas comerciais de linhas duplas e densidades
                elevadas, mas o espaçamento deve ser ajustado ao material
                vegetal, cultivar, mecanização e objectivo produtivo.
              </p>
            </Card>

            <Card titulo="Plantação">
              <p>
                O material deve ser colocado com profundidade suficiente para
                ficar firme, mas sem enterrar excessivamente a região vegetativa
                que dará origem às novas folhas.
              </p>
            </Card>

            <Card titulo="Uniformidade">
              <p>
                Plantas de tamanho semelhante facilitam a condução do campo e
                permitem maior uniformidade do desenvolvimento.
              </p>
            </Card>
          </div>

          <div className="mt-7 rounded-3xl bg-emerald-900 p-7 text-emerald-50">
            <h3 className="text-xl font-bold text-white">
              Referência técnica internacional
            </h3>

            <p className="mt-3 leading-8">
              Um manual da FAO descreve plantação em terreno preparado ou em
              camalhões e recomenda evitar tanto solo encharcado como
              completamente seco no momento da implantação. O material deve
              ficar firme no solo e a região vegetativa deve permanecer acima
              da superfície.
            </p>
          </div>
        </section>

        {/* MANEJO */}

        <section id="manejo" className="mt-16 scroll-mt-24">
          <div className="mb-7">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              07 • Manejo da cultura
            </p>

            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              O campo precisa de acompanhamento durante todo o ciclo
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card titulo="Controlo de infestantes">
              <p>
                As plantas daninhas competem por água, luz e nutrientes.
              </p>

              <p>
                O controlo deve começar com boa preparação do terreno e
                continuar durante o ciclo.
              </p>
            </Card>

            <Card titulo="Cobertura do solo">
              <p>
                Resíduos vegetais e coberturas adequadas podem ajudar a reduzir
                evaporação, erosão e crescimento de infestantes.
              </p>
            </Card>

            <Card titulo="Irrigação">
              <p>
                Quando existe irrigação, deve-se procurar fornecer água de
                acordo com a fase de desenvolvimento, solo e condições
                climáticas.
              </p>
            </Card>

            <Card titulo="Drenagem">
              <p>
                A irrigação não deve transformar o campo num ambiente
                permanentemente saturado.
              </p>
            </Card>

            <Card titulo="Monitorização">
              <p>
                Visitas frequentes permitem detectar sintomas antes que atinjam
                grande parte do campo.
              </p>
            </Card>

            <Card titulo="Registo">
              <p>
                Registar datas de plantação, fertilização, tratamentos,
                precipitação, irrigação e ocorrências sanitárias ajuda na
                gestão técnica.
              </p>
            </Card>
          </div>
        </section>

        {/* NUTRIÇÃO */}

        <section id="nutricao" className="mt-16 scroll-mt-24">
          <div className="mb-7">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              08 • Nutrição
            </p>

            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              Fertilização deve acompanhar o diagnóstico
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card titulo="Análise do solo">
              <p>
                O programa de fertilização deve começar com informação sobre o
                solo.
              </p>
            </Card>

            <Card titulo="Nitrogénio">
              <p>
                É importante para o crescimento vegetativo e formação de
                biomassa.
              </p>

              <p>
                Excesso pode provocar crescimento desequilibrado e afectar
                qualidade.
              </p>
            </Card>

            <Card titulo="Potássio">
              <p>
                Participa na regulação hídrica e em processos relacionados com
                qualidade e metabolismo da planta.
              </p>
            </Card>

            <Card titulo="Fósforo">
              <p>
                Está envolvido em processos energéticos e desenvolvimento
                radicular.
              </p>
            </Card>

            <Card titulo="Micronutrientes">
              <p>
                Boro, zinco, ferro e outros elementos podem tornar-se limitantes
                dependendo das condições do solo.
              </p>
            </Card>

            <Card titulo="Adubação orgânica">
              <p>
                Materiais orgânicos bem compostados podem melhorar propriedades
                físicas e biológicas do solo.
              </p>
            </Card>
          </div>
        </section>

        {/* FLORAÇÃO */}

        <section id="floracao" className="mt-16 scroll-mt-24">
          <div className="mb-7">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              09 • Floração
            </p>

            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              Uma etapa decisiva para organizar a produção
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card titulo="Floração natural">
              <p>
                A floração depende do estado fisiológico da planta e das
                condições ambientais.
              </p>
            </Card>

            <Card titulo="Indução floral">
              <p>
                Em produção comercial, a indução floral pode ser utilizada para
                uniformizar e programar a produção.
              </p>

              <p>
                A aplicação de produtos indutores deve seguir orientação
                técnica, legislação e rótulo do produto autorizado.
              </p>
            </Card>

            <Card titulo="Peso e estado da planta">
              <p>
                A indução não deve ser tratada como uma operação isolada.
                Plantas precisam atingir desenvolvimento fisiológico adequado.
              </p>
            </Card>

            <Card titulo="Planeamento da colheita">
              <p>
                Quando a floração é mais uniforme, torna-se mais fácil planear
                mão-de-obra, transporte e comercialização.
              </p>
            </Card>
          </div>
        </section>

        {/* PRAGAS */}

        <section id="pragas" className="mt-16 scroll-mt-24">
          <div className="mb-7">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              10 • Pragas
            </p>

            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              Identificar antes de controlar
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card titulo="Cochonilha-farinhenta">
              <p>
                É uma das pragas associadas ao cultivo do ananás em várias
                regiões produtoras.
              </p>

              <p>
                Pode provocar enfraquecimento da planta e está relacionada com
                problemas de murcha associados à cultura.
              </p>
            </Card>

            <Card titulo="Nematodes">
              <p>
                Nematodes podem afectar as raízes e reduzir o vigor das plantas.
              </p>
            </Card>

            <Card titulo="Termitas">
              <p>
                Em determinados ambientes, termitas podem danificar estruturas
                vegetais, sobretudo quando as plantas estão sob stress.
              </p>
            </Card>

            <Card titulo="Roedores">
              <p>
                Roedores podem danificar frutos próximos da maturação e causar
                perdas económicas.
              </p>
            </Card>

            <Card titulo="Monitorização">
              <p>
                A presença de pragas deve ser acompanhada por observação
                sistemática do campo.
              </p>
            </Card>

            <Card titulo="Controlo integrado">
              <p>
                Medidas culturais, material saudável, higiene do campo,
                monitorização e utilização criteriosa de produtos fitossanitários
                devem fazer parte da estratégia.
              </p>
            </Card>
          </div>
        </section>

        {/* DOENÇAS */}

        <section id="doencas" className="mt-16 scroll-mt-24">
          <div className="mb-7">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              11 • Doenças
            </p>

            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              Sanidade começa no material de plantação
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card titulo="Podridão radicular">
              <p>
                Pode estar relacionada com agentes patogénicos e condições
                inadequadas de drenagem.
              </p>
            </Card>

            <Card titulo="Podridão do coração">
              <p>
                Doenças que afectam a região central podem provocar deterioração
                das folhas jovens e comprometer o crescimento.
              </p>
            </Card>

            <Card titulo="Murcha do ananás">
              <p>
                Problemas de murcha associados à cochonilha-farinhenta e vírus
                podem causar perdas importantes em determinados sistemas.
              </p>
            </Card>

            <Card titulo="Fusarium">
              <p>
                Espécies de Fusarium estão associadas a doenças do ananás em
                diferentes regiões produtoras.
              </p>
            </Card>

            <Card titulo="Drenagem">
              <p>
                Reduzir condições de excesso de água é uma das medidas
                preventivas mais importantes.
              </p>
            </Card>

            <Card titulo="Material saudável">
              <p>
                A utilização de material vegetativo de origem conhecida ajuda a
                reduzir o risco de introdução de problemas sanitários.
              </p>
            </Card>
          </div>
        </section>

        {/* COLHEITA */}

        <section id="colheita" className="mt-16 scroll-mt-24">
          <div className="mb-7">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              12 • Colheita
            </p>

            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              O momento da colheita influencia o destino comercial
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card titulo="Destino do fruto">
              <p>
                Frutos destinados ao consumo local podem ser colhidos em
                estádio diferente daqueles que serão transportados por longas
                distâncias.
              </p>
            </Card>

            <Card titulo="Maturidade">
              <p>
                A decisão deve considerar cultivar, cor, tamanho, firmeza,
                aroma e outros indicadores.
              </p>
            </Card>

            <Card titulo="Corte">
              <p>
                Deve-se evitar quedas e impactos que provoquem ferimentos.
              </p>
            </Card>

            <Card titulo="Selecção">
              <p>
                Frutos com podridões, cortes ou danos graves devem ser separados
                do lote comercial.
              </p>
            </Card>

            <Card titulo="Pesagem">
              <p>
                O peso individual é um indicador importante para classificação e
                negociação.
              </p>
            </Card>

            <Card titulo="Rastreabilidade">
              <p>
                Registar talhão, data de colheita e lote facilita o controlo de
                qualidade.
              </p>
            </Card>
          </div>
        </section>

        {/* PÓS-COLHEITA */}

        <section id="pos-colheita" className="mt-16 scroll-mt-24">
          <div className="mb-7">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              13 • Pós-colheita
            </p>

            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              Evitar que o fruto produzido no campo seja perdido depois
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card titulo="Manuseamento">
              <p>
                Pancadas e quedas podem provocar danos internos que só aparecem
                depois.
              </p>
            </Card>

            <Card titulo="Caixas">
              <p>
                Recipientes adequados reduzem compressão e abrasão.
              </p>
            </Card>

            <Card titulo="Higiene">
              <p>
                Equipamentos, superfícies e recipientes devem ser mantidos
                limpos.
              </p>
            </Card>

            <Card titulo="Transporte">
              <p>
                O transporte deve reduzir exposição ao calor, pressão e danos
                mecânicos.
              </p>
            </Card>

            <Card titulo="Classificação">
              <p>
                Separar frutos por calibre e qualidade pode melhorar a
                organização comercial.
              </p>
            </Card>

            <Card titulo="Mercado">
              <p>
                A distância entre campo e mercado deve influenciar a decisão do
                estádio de colheita e embalagem.
              </p>
            </Card>
          </div>
        </section>

        {/* PROCESSAMENTO */}

        <section id="processamento" className="mt-16 scroll-mt-24">
          <div className="mb-7">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              14 • Processamento
            </p>

            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              Do fruto fresco à agroindústria
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card titulo="Sumo">
              <p>
                O ananás pode ser processado em bebidas e sumos, criando
                alternativas ao mercado de fruta fresca.
              </p>
            </Card>

            <Card titulo="Polpa">
              <p>
                A polpa pode ser utilizada em bebidas, sobremesas, preparados
                alimentares e outros produtos.
              </p>
            </Card>

            <Card titulo="Fruta desidratada">
              <p>
                A desidratação reduz a actividade de água e pode aumentar a
                conservação quando realizada correctamente.
              </p>
            </Card>

            <Card titulo="Compotas">
              <p>
                Frutos podem ser transformados em produtos de maior duração,
                desde que sejam respeitados princípios de higiene e segurança
                alimentar.
              </p>
            </Card>

            <Card titulo="Fermentação">
              <p>
                Existe investigação científica realizada com ananás de Huambo
                para produção de vinho de fruta e caracterização de leveduras
                nativas.
              </p>
            </Card>

            <Card titulo="Resíduos">
              <p>
                Coroas, cascas e outros resíduos podem ser estudados para
                compostagem, aproveitamento de biomassa e outras utilizações.
              </p>
            </Card>
          </div>

          <div className="mt-7 rounded-3xl border border-emerald-200 bg-white p-7">
            <h3 className="text-2xl font-black text-emerald-950">
              Investigação já realizada em Huambo
            </h3>

            <p className="mt-4 text-sm leading-8 text-slate-700">
              Um estudo científico publicado no{" "}
              <em>International Journal of Food Microbiology</em> investigou a
              produção de vinho de ananás em Huambo durante duas campanhas,
              caracterizando compostos aromáticos e leveduras nativas. Foram
              isoladas oito estirpes nativas e três apresentaram potencial
              sensorial para fermentação. Isto demonstra que o ananás angolano
              não deve ser analisado apenas como fruta fresca: existe também
              potencial de investigação e transformação agroindustrial.
            </p>
          </div>
        </section>

        {/* ANGOLA */}

        <section id="angola" className="mt-16 scroll-mt-24">
          <div className="mb-7">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              15 • Angola
            </p>

            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              O que os dados oficiais mostram?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                2022/23
              </p>

              <p className="mt-3 text-4xl font-black text-emerald-950">
                574 155
              </p>

              <p className="mt-2 text-sm text-slate-600">
                toneladas de ananás
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                2023/24
              </p>

              <p className="mt-3 text-4xl font-black text-emerald-950">
                637 630
              </p>

              <p className="mt-2 text-sm text-slate-600">
                toneladas de ananás
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                Variação
              </p>

              <p className="mt-3 text-4xl font-black text-emerald-950">
                +11,1%
              </p>

              <p className="mt-2 text-sm text-slate-600">
                entre os dois valores nacionais
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                Fileira
              </p>

              <p className="mt-3 text-4xl font-black text-emerald-950">
                Frutas
              </p>

              <p className="mt-2 text-sm text-slate-600">
                cultura permanente/frutícola
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Card titulo="Como interpretar estes números">
              <p>
                Os valores representam produção nacional nas campanhas
                correspondentes e devem ser acompanhados pelo período e pela
                fonte.
              </p>

              <p>
                Não significa que 637 630 toneladas sejam uma previsão ou
                produção confirmada da campanha 2025/2026.
              </p>
            </Card>

            <Card titulo="A produção está a ganhar espaço comercial">
              <p>
                O desenvolvimento de projectos empresariais, sistemas de rega,
                processamento e cadeias de comercialização pode aumentar o
                potencial económico da cultura.
              </p>
            </Card>
          </div>

          <div className="mt-8">
            <Card titulo="Fazenda Kanduma — Quissongo">
              <p>
                Em 2026, o MINAGRIF documentou uma visita à Fazenda Kanduma, no
                município do Quissongo, onde foi apresentado um campo de ananás
                com <strong>8 hectares</strong>, dos quais{" "}
                <strong>3 hectares já estavam em produção</strong>.
              </p>

              <p>
                A exploração possui sistemas de bombagem, filtragem e
                distribuição de água, demonstrando a importância da gestão
                hídrica numa produção empresarial de frutas.
              </p>

              <p>
                O caso é particularmente relevante para o AGROINOVA porque
                permite ligar conhecimento agronómico a uma experiência real de
                produção em Angola.
              </p>
            </Card>
          </div>
        </section>

        {/* PROVÍNCIAS */}

        <section id="provincias" className="mt-16 scroll-mt-24">
          <div className="mb-7">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              16 • Distribuição territorial
            </p>

            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              Explorar as 21 províncias
            </h2>

            <p className="mt-3 max-w-4xl text-slate-600">
              A ferramenta não transforma ausência de dados em zero. Quando não
              existe uma estatística provincial específica, a plataforma indica
              a lacuna.
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
                placeholder="Ex.: Huambo, Luanda, Bengo..."
                className="mt-2 w-full rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
              />

              <div className="mt-4 max-h-[550px] space-y-2 overflow-y-auto pr-1">
                {provinciasFiltradas.map((item) => (
                  <button
                    key={item.nome}
                    type="button"
                    onClick={() => setProvinciaSelecionada(item.nome)}
                    className={`w-full rounded-2xl border px-4 py-3 text-left transition ${
                      provinciaSelecionada === item.nome
                        ? "border-emerald-600 bg-emerald-700 text-white"
                        : "border-emerald-100 bg-white text-slate-700 hover:bg-emerald-50"
                    }`}
                  >
                    <span className="block font-semibold">
                      {item.nome}
                    </span>

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
                      {provincia.regiao}
                    </span>
                  </div>

                  <div className="mt-7 rounded-3xl bg-emerald-50 p-6">
                    <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
                      Evidência disponível
                    </p>

                    <p className="mt-3 text-sm leading-8 text-slate-700">
                      {provincia.evidencia}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* INVESTIGAÇÃO */}

        <section id="investigacao" className="mt-16 scroll-mt-24">
          <div className="mb-7">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              17 • Investigação
            </p>

            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              Perguntas para a investigação agropecuária angolana
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card titulo="Genética">
              <p>
                Quais cultivares apresentam melhor adaptação às diferentes
                zonas agroecológicas de Angola?
              </p>
            </Card>

            <Card titulo="Material vegetativo">
              <p>
                Quais tipos de material de plantação apresentam melhor
                estabelecimento e produtividade nas condições angolanas?
              </p>
            </Card>

            <Card titulo="Densidade">
              <p>
                Qual densidade permite maior produção por hectare sem
                comprometer qualidade e manejo?
              </p>
            </Card>

            <Card titulo="Água">
              <p>
                Quais regimes de irrigação permitem produzir ananás com maior
                eficiência no uso da água?
              </p>
            </Card>

            <Card titulo="Nutrição">
              <p>
                Quais combinações de nutrientes são mais eficientes nos
                principais tipos de solo das regiões produtoras?
              </p>
            </Card>

            <Card titulo="Doenças">
              <p>
                Qual é a distribuição geográfica das principais doenças do
                ananás em Angola?
              </p>
            </Card>

            <Card titulo="Pragas">
              <p>
                Quais pragas provocam maiores perdas económicas nos diferentes
                sistemas produtivos?
              </p>
            </Card>

            <Card titulo="Pós-colheita">
              <p>
                Quanto ananás se perde entre o campo, transporte, mercados e
                consumidor?
              </p>
            </Card>

            <Card titulo="Processamento">
              <p>
                Quais produtos derivados podem criar maior valor acrescentado
                para produtores angolanos?
              </p>
            </Card>

            <Card titulo="Fermentação">
              <p>
                Que leveduras e microrganismos nativos de Angola podem ser
                utilizados para desenvolver produtos fermentados de qualidade?
              </p>
            </Card>

            <Card titulo="Exportação">
              <p>
                Quais requisitos fitossanitários, logísticos e de qualidade
                precisam ser cumpridos para aumentar a exportação de ananás?
              </p>
            </Card>

            <Card titulo="Agricultura familiar">
              <p>
                Como melhorar o acesso dos pequenos produtores a material
                vegetal de qualidade, irrigação, assistência técnica e mercado?
              </p>
            </Card>
          </div>
        </section>

        {/* FICHA DE CAMPO */}

        <section className="mt-16">
          <div className="rounded-3xl bg-emerald-950 p-8 text-white">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-300">
              Ficha técnica de campo
            </p>

            <h2 className="mt-3 text-3xl font-black">
              O que o técnico deve observar num campo de ananás
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-emerald-50">
              Esta lista pode ser utilizada numa visita técnica, aula prática,
              investigação ou diagnóstico inicial de uma exploração.
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Origem do material",
                "Idade do plantio",
                "Uniformidade",
                "Tipo de solo",
                "Drenagem",
                "Compactação",
                "pH",
                "Matéria orgânica",
                "Disponibilidade de água",
                "Sistema de irrigação",
                "Estado das folhas",
                "Pragas",
                "Doenças",
                "Infestantes",
                "Floração",
                "Tamanho dos frutos",
                "Maturidade",
                "Danos mecânicos",
                "Peso dos frutos",
                "Destino comercial",
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

        {/* FONTES */}

        <section id="fontes" className="mt-16 scroll-mt-24">
          <div className="mb-7">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              18 • Fontes
            </p>

            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              Fontes técnicas e oficiais
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

        {/* INTEGRIDADE */}

        <section className="mt-16">
          <div className="rounded-3xl border border-emerald-200 bg-white p-7">
            <h2 className="text-2xl font-black text-emerald-950">
              Integridade dos dados
            </h2>

            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
              <p>
                Os valores nacionais apresentados correspondem às campanhas
                agrícolas indicadas pelas fontes oficiais.
              </p>

              <p>
                O valor de 637 630 toneladas corresponde a 2023/2024 e não deve
                ser apresentado como produção da campanha 2025/2026.
              </p>

              <p>
                Dados de uma exploração empresarial, como a Fazenda Kanduma,
                são apresentados como experiência específica e não como
                representação de toda a província ou de Angola.
              </p>

              <p>
                Não foram inventados valores de produção, área ou produtividade
                para as 21 províncias.
              </p>

              <p>
                As recomendações agronómicas internacionais apresentadas devem
                ser adaptadas às condições agroecológicas locais e validadas
                por técnicos e investigação em Angola.
              </p>
            </div>
          </div>
        </section>

        {/* NAVEGAÇÃO FINAL */}

        <section className="mt-16">
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-7">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              Navegação
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <Link
                href="/agricultura/manga"
                className="rounded-2xl border border-emerald-200 bg-white p-5 font-bold text-emerald-900 transition hover:bg-emerald-100"
              >
                ← Manga
              </Link>

              <Link
                href="/agricultura"
                className="rounded-2xl border border-emerald-200 bg-white p-5 text-center font-bold text-emerald-900 transition hover:bg-emerald-100"
              >
                Todas as culturas
              </Link>

              <Link
                href="/agricultura/cafe"
                className="rounded-2xl border border-emerald-200 bg-white p-5 text-right font-bold text-emerald-900 transition hover:bg-emerald-100"
              >
                Próxima cultura: Café →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}