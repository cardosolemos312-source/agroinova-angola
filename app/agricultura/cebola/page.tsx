"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";

type Provincia = {
  nome: string;
  regiao: string;
  observacao: string;
};

type CardProps = {
  title: string;
  children: ReactNode;
};

const provincias: Provincia[] = [
  {
    nome: "Bengo",
    regiao: "Norte",
    observacao:
      "Produção hortícola próxima dos principais mercados da faixa litoral e de Luanda.",
  },
  {
    nome: "Benguela",
    regiao: "Centro-Oeste",
    observacao:
      "Importante experiência de horticultura irrigada e produção comercial de cebola.",
  },
  {
    nome: "Bié",
    regiao: "Centro",
    observacao:
      "Potencial associado à agricultura de sequeiro e a sistemas hortícolas com disponibilidade de água.",
  },
  {
    nome: "Cabinda",
    regiao: "Norte",
    observacao:
      "Condições tropicais exigem atenção especial à drenagem, doenças e escolha do material de plantação.",
  },
  {
    nome: "Cuando",
    regiao: "Leste",
    observacao:
      "Potencial dependente da disponibilidade de água, fertilidade e organização da horticultura.",
  },
  {
    nome: "Cubango",
    regiao: "Leste",
    observacao:
      "A produção deve ser avaliada de acordo com a época, água disponível e condições locais.",
  },
  {
    nome: "Cuanza Norte",
    regiao: "Norte",
    observacao:
      "Pode integrar sistemas de horticultura diversificada em áreas com disponibilidade de água.",
  },
  {
    nome: "Cuanza Sul",
    regiao: "Centro-Oeste",
    observacao:
      "Província com forte vocação agropecuária e produção de hortícolas, incluindo cebola.",
  },
  {
    nome: "Cunene",
    regiao: "Sul",
    observacao:
      "Irrigação é particularmente importante em sistemas hortícolas devido à irregularidade das chuvas.",
  },
  {
    nome: "Huambo",
    regiao: "Centro",
    observacao:
      "Importante região agrícola, com potencial para horticultura nas áreas com água e solos adequados.",
  },
  {
    nome: "Huíla",
    regiao: "Sul",
    observacao:
      "Uma das regiões com experiências relevantes de produção comercial e irrigada de cebola.",
  },
  {
    nome: "Icolo e Bengo",
    regiao: "Norte",
    observacao:
      "Produção hortícola favorecida pela proximidade de grandes centros consumidores.",
  },
  {
    nome: "Luanda",
    regiao: "Litoral",
    observacao:
      "Produção hortícola periurbana e ligação directa a mercados consumidores.",
  },
  {
    nome: "Lunda Norte",
    regiao: "Leste",
    observacao:
      "Produção dependente das condições locais de solo, drenagem e disponibilidade de água.",
  },
  {
    nome: "Lunda Sul",
    regiao: "Leste",
    observacao:
      "Potencial hortícola condicionado pela escolha de áreas bem drenadas e acesso à água.",
  },
  {
    nome: "Malanje",
    regiao: "Norte",
    observacao:
      "Grande potencial agrícola; a horticultura deve ser ajustada ao regime de chuvas e aos mercados.",
  },
  {
    nome: "Moxico",
    regiao: "Leste",
    observacao:
      "Produção pode beneficiar de sistemas irrigados e de melhoria da logística de comercialização.",
  },
  {
    nome: "Moxico Leste",
    regiao: "Leste",
    observacao:
      "Necessita de avaliação local de solos, água, sementes e acesso aos mercados.",
  },
  {
    nome: "Namibe",
    regiao: "Sul",
    observacao:
      "A produção hortícola depende fortemente de irrigação e de gestão eficiente da água.",
  },
  {
    nome: "Uíge",
    regiao: "Norte",
    observacao:
      "A horticultura pode integrar sistemas agrícolas diversificados, desde que haja boa drenagem.",
  },
  {
    nome: "Zaire",
    regiao: "Norte",
    observacao:
      "Potencial para horticultura em áreas adequadas, com especial atenção à drenagem.",
  },
];

const imagens = [
  {
    src: "https://www.fao.org/images/faoraflibraries/default-album/angola_picture.jpg",
    titulo: "Colheita de cebola na Banda Chibia",
    descricao:
      "Produtoras rurais trabalham numa área de produção de cebola associada ao sistema de irrigação da Barragem da Banda Chibia.",
    fonte: "FAO",
    href: "https://www.fao.org/africa/news-stories/news-detail/angola-s-banda-chibia-dam--a-beacon-of-climate-resilience-and-agricultural-innovation/en",
  },
  {
    src: "https://cdn.prod.website-files.com/5a8e71e3c7881c000130ff13/68baa6d19cde106dc3e7ba1d_WhatsApp%20Image%202025-09-01%20at%2021.54.59.jpeg",
    titulo: "Produção de cebola em Benguela",
    descricao:
      "Membros da Cooperativa Tuvanja Kovasso apresentam cebolas colhidas em Akarangolo, município da Ganda.",
    fonte: "ADRA Angola",
    href: "https://www.adra-angola.org/artigos/benguela-cooperativa-tuvanja-kovasso-colhe-mais-de-500-caixas-de-tomate-no-municipio-da-ganda",
  },
  {
    src: "https://mpla.ao/wp-content/uploads/2024/10/destaque-19.jpg",
    titulo: "Mulheres rurais e produção de cebola",
    descricao:
      "Registo de uma actividade agrícola na comuna da Funda, Cacuaco, Luanda.",
    fonte: "MPLA",
    href: "https://mpla.ao/2024/10/18/destacado-o-contributo-da-mulher-rural-no-combate-a-fome-e-a-pobreza/",
  },
  {
    src: "https://agroanuncios.ao/oc-content/uploads/12/2149.jpg",
    titulo: "Cebola produzida em Benguela",
    descricao:
      "Lotes de cebola destinados à comercialização na província de Benguela.",
    fonte: "AgroAnúncios Angola",
    href: "https://agroanuncios.ao/produtos_1/produtos-do-campo_1/vendo-saco-de-cebola-40kg_i1259",
  },
];

function Card({ title, children }: CardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-3 text-lg font-bold text-slate-900">{title}</h3>
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

export default function CebolaPage() {
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
        provincia.observacao.toLowerCase().includes(termo);

      return correspondeProvincia && correspondePesquisa;
    });
  }, [pesquisa, provinciaSelecionada]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-green-900/20 bg-green-950">
        <img
          src={imagens[0].src}
          alt="Produção de cebola na Banda Chibia, Angola"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-green-950 via-green-950/90 to-green-900/55" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-green-300">
              AGROINOVA ANGOLA • Agricultura
            </p>

            <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
              Cebola
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-green-50 md:text-xl">
              Guia técnico sobre{" "}
              <em>Allium cepa</em>, com enfoque na produção,
              irrigação, solo, sementes, manejo, sanidade, colheita,
              conservação, comercialização e experiências agrícolas
              documentadas em Angola.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#visao-geral"
                className="rounded-full bg-white px-5 py-3 text-sm font-bold text-green-900 transition hover:bg-green-100"
              >
                Explorar conteúdo
              </a>

              <a
                href="#provincias"
                className="rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                Ver províncias
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4 text-sm text-slate-500 lg:px-8">
          <Link href="/agricultura" className="font-semibold hover:text-green-700">
            Agricultura
          </Link>
          <span className="mx-2">/</span>
          <span>Cebola</span>
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

      {/* INTRO */}
      <section id="visao-geral" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="01 • Visão geral"
          title="Uma hortícola estratégica para a agricultura angolana"
          description="A cebola é uma das principais hortícolas cultivadas e comercializadas em Angola. A cultura apresenta forte relação com sistemas irrigados, mercados urbanos, agricultura familiar e explorações empresariais."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card title="2022/23">
            <strong className="text-2xl text-green-800">444.545 t</strong>
            <p className="mt-2">
              Produção de cebola nas explorações agrícolas familiares,
              segundo o Anuário Estatístico da Agricultura.
            </p>
          </Card>

          <Card title="2023/24">
            <strong className="text-2xl text-green-800">471.022 t</strong>
            <p className="mt-2">
              Produção registada nas explorações agrícolas familiares no
              mesmo indicador estatístico.
            </p>
          </Card>

          <Card title="Cultura">
            <strong className="text-2xl text-green-800">Allium cepa</strong>
            <p className="mt-2">
              Espécie cultivada principalmente pela formação do bolbo,
              embora folhas verdes também sejam consumidas.
            </p>
          </Card>

          <Card title="Sistema">
            <strong className="text-2xl text-green-800">
              Irrigação
            </strong>
            <p className="mt-2">
              A disponibilidade regular de água é particularmente importante
              para produção de bolbos comerciais.
            </p>
          </Card>
        </div>

        <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-6">
          <p className="text-sm leading-7 text-green-950">
            <strong>Nota sobre os dados:</strong> os valores de 444.545 t e
            471.022 t referem-se ao indicador de produção das explorações
            agrícolas familiares apresentado no Anuário Estatístico da
            Agricultura. Não devem ser confundidos com estimativas de uma
            única província ou com produção exclusivamente irrigada.
          </p>
        </div>
      </section>

      {/* BOTÂNICA */}
      <section id="botanica" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="02 • Botânica"
            title="Conhecer a planta para manejar correctamente o cultivo"
            description="A cebola é uma espécie do género Allium, cultivada principalmente para produção de bolbos."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card title="Nome científico">
              <p>
                <em>Allium cepa L.</em>
              </p>
              <p className="mt-2">
                Pertence ao género <em>Allium</em>, grupo que também inclui
                alho, alho-francês e outras espécies de interesse alimentar.
              </p>
            </Card>

            <Card title="Sistema radicular">
              <p>
                O sistema radicular é relativamente superficial e exige
                disponibilidade adequada de água e nutrientes na camada
                explorada pelas raízes.
              </p>
              <p className="mt-2">
                Compactação e encharcamento prejudicam o desenvolvimento.
              </p>
            </Card>

            <Card title="Folhas">
              <p>
                As folhas são alongadas, estreitas e de forma tubular.
                Constituem a principal superfície fotossintética durante o
                enchimento do bolbo.
              </p>
            </Card>

            <Card title="Bolbo">
              <p>
                O bolbo resulta do engrossamento das bases foliares. As
                escamas sobrepostas acumulam reservas e formam a estrutura
                comercial da cultura.
              </p>
            </Card>

            <Card title="Formação do bolbo">
              <p>
                A resposta ao comprimento do dia é um dos factores
                fundamentais para a formação do bolbo.
              </p>
              <p className="mt-2">
                Por isso, a escolha de cultivares deve considerar a adaptação
                ao ambiente e à época de cultivo.
              </p>
            </Card>

            <Card title="Ciclo">
              <p>
                A duração varia de acordo com cultivar, temperatura,
                fotoperíodo, sistema de produção e época.
              </p>
              <p className="mt-2">
                A FAO apresenta, para sistemas gerais, ciclos de
                aproximadamente quatro a seis meses, embora isso não deva ser
                utilizado como calendário fixo para todas as condições
                angolanas.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CLIMA */}
      <section id="clima" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="03 • Clima"
          title="Temperatura, fotoperíodo e época de plantio"
          description="O ambiente determina a velocidade de crescimento, a formação do bolbo e a qualidade comercial."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Temperatura">
            <p>
              A cebola apresenta melhor desempenho quando as temperaturas
              durante as diferentes fases do ciclo são compatíveis com a
              cultivar utilizada.
            </p>
            <p className="mt-3">
              Temperaturas muito elevadas podem aumentar o stress hídrico,
              enquanto condições frias podem alterar o desenvolvimento e a
              formação do bolbo.
            </p>
          </Card>

          <Card title="Comprimento do dia">
            <p>
              A formação do bolbo está fortemente relacionada com o
              fotoperíodo.
            </p>
            <p className="mt-3">
              Existem materiais adaptados a diferentes comprimentos de dia.
              Portanto, não se deve seleccionar uma cultivar apenas pelo
              tamanho ou cor do bolbo.
            </p>
          </Card>

          <Card title="Chuva">
            <p>
              Chuvas excessivas durante períodos críticos aumentam os riscos
              de doenças foliares, problemas radiculares e podridões.
            </p>
            <p className="mt-3">
              Em sistemas de sequeiro, a época deve ser escolhida de acordo
              com o regime local de precipitação.
            </p>
          </Card>

          <Card title="Irrigação">
            <p>
              A cultura é sensível tanto à falta como ao excesso de água.
            </p>
            <p className="mt-3">
              A formação do bolbo é particularmente sensível ao défice hídrico.
              Sistemas de rega localizada podem melhorar a eficiência do uso
              da água quando correctamente dimensionados.
            </p>
          </Card>
        </div>

        <div className="mt-8 rounded-2xl bg-slate-900 p-6 text-white">
          <h3 className="text-lg font-bold">
            Princípio técnico para Angola
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-300">
            Não existe uma única época de plantio válida para todas as
            províncias. A decisão deve combinar temperatura, altitude,
            fotoperíodo, disponibilidade de água, cultivar, calendário do
            mercado e risco de doenças.
          </p>
        </div>
      </section>

      {/* SOLO */}
      <section id="solo" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="04 • Solo"
            title="Solo bem drenado é uma das bases da produtividade"
            description="A cultura necessita de condições físicas que permitam desenvolvimento radicular e expansão uniforme do bolbo."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card title="Textura">
              <p>
                Solos francos, franco-arenosos ou outras texturas que permitam
                boa drenagem são geralmente mais adequados.
              </p>
            </Card>

            <Card title="Drenagem">
              <p>
                Evitar áreas sujeitas a encharcamento prolongado. Excesso de
                água aumenta o risco de podridões.
              </p>
            </Card>

            <Card title="Estrutura">
              <p>
                O solo deve estar suficientemente solto para permitir expansão
                do bolbo sem deformações provocadas por compactação.
              </p>
            </Card>

            <Card title="Matéria orgânica">
              <p>
                A matéria orgânica melhora estrutura, retenção de água e
                actividade biológica, mas deve ser bem decomposta.
              </p>
            </Card>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card title="Análise de solo antes do plantio">
              <p>
                Antes da adubação, é recomendável conhecer pH, matéria
                orgânica e disponibilidade de nutrientes.
              </p>
              <p className="mt-3">
                O plano de fertilização deve ser baseado nos resultados da
                análise e na expectativa de produção.
              </p>
            </Card>

            <Card title="Canteiros elevados">
              <p>
                Em períodos chuvosos ou em terrenos com drenagem limitada,
                canteiros elevados podem ajudar a reduzir a permanência de
                água junto às raízes e aos bolbos.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* SEMENTES */}
      <section id="sementes" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="05 • Sementes e cultivares"
          title="O material de plantação precisa estar adaptado ao ambiente"
          description="A escolha genética é uma decisão técnica, não apenas uma escolha baseada na aparência do bolbo."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card title="Semente de qualidade">
            <p>
              Utilizar sementes de origem conhecida, com boa germinação,
              pureza adequada e sanidade.
            </p>
          </Card>

          <Card title="Cultivar">
            <p>
              A cultivar deve ser escolhida considerando fotoperíodo,
              temperatura, ciclo, tamanho e cor do bolbo, resistência a
              doenças e mercado.
            </p>
          </Card>

          <Card title="Sementeira">
            <p>
              A produção pode começar em viveiro ou directamente no campo,
              dependendo do sistema de produção e do material utilizado.
            </p>
          </Card>

          <Card title="Transplante">
            <p>
              Quando se utiliza viveiro, o transplante deve ser feito com
              plantas uniformes e bem desenvolvidas, evitando danos excessivos
              às raízes.
            </p>
          </Card>

          <Card title="Uniformidade">
            <p>
              Plantas muito diferentes em idade e vigor podem produzir bolbos
              de tamanhos desiguais, dificultando a classificação e
              comercialização.
            </p>
          </Card>

          <Card title="Registo do lote">
            <p>
              Para uma agricultura profissional, é importante registar
              fornecedor, cultivar, lote, data de sementeira, taxa de
              germinação e área plantada.
            </p>
          </Card>
        </div>

        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h3 className="font-bold text-amber-950">
            Nota AGROINOVA sobre variedades
          </h3>

          <p className="mt-2 text-sm leading-7 text-amber-900">
            Esta página não apresenta uma lista artificial de variedades como
            se fossem recomendações oficiais para Angola. A adaptação
            varietal deve ser confirmada por ensaios locais, IIA, SENSE,
            assistência técnica e fornecedores de sementes legalmente
            estabelecidos.
          </p>
        </div>
      </section>

      {/* PLANTIO */}
      <section id="plantio" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="06 • Implantação"
            title="Da preparação do terreno ao estabelecimento da cultura"
            description="A implantação uniforme facilita o manejo e aumenta a probabilidade de obter bolbos comerciais homogéneos."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card title="1. Escolha da área">
              <p>
                Seleccionar uma área bem drenada, com acesso seguro à água e
                adequada exposição solar.
              </p>
            </Card>

            <Card title="2. Preparação">
              <p>
                Preparar o solo até obter uma estrutura adequada ao
                desenvolvimento radicular e à expansão dos bolbos.
              </p>
            </Card>

            <Card title="3. Canteiros">
              <p>
                Em áreas irrigadas, os canteiros devem permitir distribuição
                uniforme de água e facilitar drenagem.
              </p>
            </Card>

            <Card title="4. Plantio">
              <p>
                O espaçamento deve ser definido de acordo com cultivar,
                sistema de produção, tamanho pretendido do bolbo e
                equipamento disponível.
              </p>
            </Card>
          </div>

          <div className="mt-8 rounded-2xl bg-green-950 p-7 text-white">
            <h3 className="text-xl font-bold">
              Espaçamento: evitar copiar uma medida sem considerar o sistema
            </h3>

            <p className="mt-3 text-sm leading-7 text-green-100">
              Referências técnicas gerais utilizam linhas próximas e plantas
              relativamente próximas para produção de bolbos. A FAO apresenta
              exemplos de linhas de 10–20 cm e plantas de 4–10 cm para
              sistemas gerais, mas esses valores não devem ser tratados como
              recomendação oficial única para todas as condições de Angola.
            </p>
          </div>
        </div>
      </section>

      {/* MANEJO */}
      <section id="manejo" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="07 • Manejo"
          title="Água, nutrientes, infestantes e uniformidade"
          description="A produção comercial exige acompanhamento frequente do campo."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card title="Irrigação">
            <p>
              A irrigação deve fornecer água suficiente sem criar saturação
              prolongada do solo.
            </p>
            <p className="mt-3">
              Défices durante estabelecimento e formação do bolbo podem
              reduzir produtividade e qualidade.
            </p>
          </Card>

          <Card title="Fertilidade">
            <p>
              A cultura responde à disponibilidade equilibrada de nutrientes.
              Excesso de azoto, sobretudo próximo da maturação, pode atrasar
              o processo de cura e aumentar problemas de conservação.
            </p>
          </Card>

          <Card title="Azoto">
            <p>
              O azoto é importante para o crescimento vegetativo, mas deve ser
              manejado de acordo com a fase da cultura e análise do solo.
            </p>
          </Card>

          <Card title="Fósforo">
            <p>
              Participa de processos ligados ao desenvolvimento radicular e
              metabolismo energético.
            </p>
          </Card>

          <Card title="Potássio">
            <p>
              Está associado à regulação hídrica, metabolismo e qualidade dos
              tecidos. A recomendação deve considerar análise de solo.
            </p>
          </Card>

          <Card title="Enxofre">
            <p>
              É particularmente relevante para espécies do género
              <em> Allium</em> e para processos relacionados com compostos
              característicos de aroma e sabor.
            </p>
          </Card>

          <Card title="Infestantes">
            <p>
              A cebola compete mal com infestantes durante parte importante
              do ciclo. O controlo precoce é essencial.
            </p>
          </Card>

          <Card title="Monitorização">
            <p>
              O produtor deve observar folhas, colo, bolbos, presença de
              insectos, manchas, murchidão e distribuição da água.
            </p>
          </Card>

          <Card title="Rotação">
            <p>
              Evitar repetir continuamente cebola e outras espécies de
              <em> Allium</em> no mesmo local ajuda a reduzir a pressão de
              determinados problemas fitossanitários.
            </p>
          </Card>
        </div>
      </section>

      {/* SANIDADE */}
      <section id="sanidade" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="08 • Sanidade vegetal"
            title="Pragas e doenças que exigem vigilância"
            description="A protecção da cultura deve começar pela prevenção e monitorização, antes de recorrer a tratamentos."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <Card title="Tripes">
              <p>
                Os tripes estão entre as pragas mais importantes da cebola.
                Alimentam-se das folhas e podem provocar aspecto prateado,
                deformações e redução da área fotossintética.
              </p>

              <p className="mt-3">
                A pressão pode aumentar em condições quentes e secas.
              </p>
            </Card>

            <Card title="Míldio">
              <p>
                O míldio pode desenvolver-se sob condições de elevada humidade
                e molhamento foliar.
              </p>

              <p className="mt-3">
                Boa circulação de ar, drenagem, sementes sadias e manejo
                adequado da irrigação ajudam a reduzir o risco.
              </p>
            </Card>

            <Card title="Botrytis">
              <p>
                Espécies de <em>Botrytis</em> podem afectar folhas e bolbos,
                incluindo problemas durante o armazenamento.
              </p>

              <p className="mt-3">
                Ferimentos e cura insuficiente aumentam o risco de podridões.
              </p>
            </Card>

            <Card title="Mancha púrpura">
              <p>
                A mancha púrpura pode causar lesões foliares que reduzem a
                capacidade fotossintética e podem afectar a formação do bolbo.
              </p>
            </Card>

            <Card title="Podridões">
              <p>
                Excesso de água, danos mecânicos, material infectado e
                armazenamento inadequado podem favorecer podridões.
              </p>
            </Card>

            <Card title="Manejo integrado">
              <p>
                Combinar sementes sadias, rotação, limpeza da área, controlo
                de infestantes, monitorização e irrigação adequada é mais
                seguro do que depender exclusivamente de pesticidas.
              </p>
            </Card>
          </div>

          <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-6">
            <h3 className="font-bold text-red-950">
              Atenção aos produtos fitossanitários
            </h3>

            <p className="mt-2 text-sm leading-7 text-red-900">
              Qualquer aplicação deve seguir o rótulo, dose autorizada,
              equipamento de protecção individual, intervalo de segurança e
              legislação aplicável em Angola. A AGROINOVA não deve transformar
              informação internacional sobre pragas numa prescrição automática
              de pesticidas para o produtor angolano.
            </p>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="09 • Campo angolano"
          title="Experiências reais de produção de cebola em Angola"
          description="As imagens abaixo são utilizadas para mostrar sistemas agrícolas e produtores reais documentados por diferentes instituições e meios angolanos."
        />

        <div className="grid gap-6 md:grid-cols-2">
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
                  alt={imagem.titulo}
                  className="h-72 w-full object-cover transition duration-300 hover:scale-[1.02]"
                />
              </a>

              <div className="p-5">
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
                  Consultar fonte: {imagem.fonte} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* COLHEITA */}
      <section id="colheita" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="10 • Colheita e pós-colheita"
            title="A produtividade não termina no campo"
            description="A qualidade comercial da cebola depende também da colheita, cura, classificação, embalagem e armazenamento."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card title="Maturação">
              <p>
                A aproximação da maturidade pode ser observada pela queda
                natural das folhas e pelo desenvolvimento do colo.
              </p>
            </Card>

            <Card title="Colheita">
              <p>
                Evitar golpes e cortes nos bolbos. Ferimentos criam portas de
                entrada para organismos causadores de podridão.
              </p>
            </Card>

            <Card title="Cura">
              <p>
                O processo de cura permite secar o colo e as camadas externas,
                aumentando a capacidade de conservação.
              </p>
            </Card>

            <Card title="Classificação">
              <p>
                Separar bolbos por tamanho, integridade, firmeza, aparência e
                destino comercial.
              </p>
            </Card>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card title="Secagem e cura">
              <p>
                Os bolbos devem ser mantidos em ambiente seco, ventilado e
                protegido de condições que favoreçam condensação ou
                deterioração.
              </p>

              <p className="mt-3">
                O manuseamento deve minimizar cortes, esmagamentos e quedas.
              </p>
            </Card>

            <Card title="Armazenamento">
              <p>
                A conservação depende da cultivar, do estado sanitário, da
                cura, da temperatura, da humidade e da circulação de ar.
              </p>

              <p className="mt-3">
                Bolbos lesionados ou mal curados devem ser separados.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ANGOLA */}
      <section id="angola" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="11 • Cebola em Angola"
          title="Produção, irrigação e ligação ao mercado"
          description="A experiência angolana mostra que a cebola está ligada tanto à agricultura familiar como a sistemas comerciais e irrigados."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Huíla — perímetro irrigado da Matala">
            <p>
              A Cooperativa CWAM, na Huíla, recebeu financiamento do FADA e
              projectou escoar mais de 126 toneladas de cebola, juntamente com
              outras culturas hortícolas.
            </p>

            <p className="mt-3">
              O caso mostra a importância da irrigação, financiamento,
              organização cooperativa e ligação ao mercado.
            </p>
          </Card>

          <Card title="Benguela — município da Ganda">
            <p>
              A Cooperativa Tuvanja Kovasso, em Akarangolo, Ganda, começou a
              diversificar a sua produção para incluir cebola, utilizando
              sementes e uma motobomba para irrigação.
            </p>

            <p className="mt-3">
              O caso também evidencia que transporte e acesso aos mercados
              continuam a ser factores importantes.
            </p>
          </Card>

          <Card title="Luanda — horticultura periurbana">
            <p>
              A cebola aparece entre os produtos agrícolas comercializados em
              iniciativas de promoção da produção local em Luanda.
            </p>

            <p className="mt-3">
              A proximidade de grandes mercados consumidores pode representar
              vantagem para produtores periurbanos.
            </p>
          </Card>

          <Card title="Banda Chibia — irrigação">
            <p>
              A FAO documenta produção de cebola na área beneficiada pela
              Barragem da Banda Chibia, no sul de Angola.
            </p>

            <p className="mt-3">
              O sistema demonstra como a disponibilidade de água pode permitir
              produção hortícola em áreas sujeitas a limitações climáticas.
            </p>
          </Card>
        </div>

        <div className="mt-10 rounded-3xl bg-green-950 p-8 text-white">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-300">
            Cadeia de valor
          </p>

          <h3 className="mt-2 text-2xl font-black">
            Produzir mais não é suficiente
          </h3>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-green-100">
            Uma cadeia de cebola competitiva precisa integrar sementes,
            irrigação, assistência técnica, fertilização racional, controlo
            fitossanitário, colheita cuidadosa, cura, armazenamento,
            transporte, classificação, comercialização e acesso a informação
            de mercado.
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
            eyebrow="12 • Angola por província"
            title="Onde a produção pode ser analisada"
            description="A existência de uma província nesta ferramenta não significa que exista uma estatística específica de produção de cebola para ela. O objectivo é organizar informação territorial sem inventar dados."
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
                placeholder="Ex.: Huíla, irrigação, Norte..."
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
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-bold text-slate-950">
                    {provincia.nome}
                  </h3>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">
                    {provincia.regiao}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {provincia.observacao}
                </p>
              </article>
            ))}
          </div>

          {provinciasFiltradas.length === 0 && (
            <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-900">
              Nenhuma província corresponde à pesquisa.
            </div>
          )}
        </div>
      </section>

      {/* FICHA DE CAMPO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="13 • Ficha de campo"
          title="O que o produtor ou técnico deve acompanhar"
          description="Uma página técnica deve ajudar também na observação prática do campo."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card title="Área">
            <p>Localização, área plantada e sistema de produção.</p>
          </Card>

          <Card title="Cultivar">
            <p>Nome, origem da semente, lote e ciclo informado.</p>
          </Card>

          <Card title="Data">
            <p>Sementeira, transplante, adubações e principais operações.</p>
          </Card>

          <Card title="Água">
            <p>Fonte, sistema de irrigação, frequência e observação do solo.</p>
          </Card>

          <Card title="Solo">
            <p>Textura, drenagem, análise e correcções realizadas.</p>
          </Card>

          <Card title="Sanidade">
            <p>Presença de tripes, manchas, podridões e outras anomalias.</p>
          </Card>

          <Card title="Produtividade">
            <p>Área colhida, peso total e produtividade calculada.</p>
          </Card>

          <Card title="Qualidade">
            <p>Tamanho, firmeza, cor, danos e percentagem comercial.</p>
          </Card>

          <Card title="Mercado">
            <p>Preço, comprador, destino, embalagem e custos de transporte.</p>
          </Card>
        </div>
      </section>

      {/* INVESTIGAÇÃO */}
      <section id="investigacao" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="14 • Investigação"
            title="Perguntas que a investigação agronómica em Angola pode responder"
            description="A AGROINOVA deve servir também como espaço para organizar perguntas de investigação e evidências."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <Card title="Cultivares">
              <p>
                Quais cultivares apresentam melhor adaptação aos diferentes
                ambientes agroecológicos de Angola?
              </p>
            </Card>

            <Card title="Fotoperíodo">
              <p>
                Como diferentes materiais respondem às condições de
                comprimento do dia nas principais regiões produtoras?
              </p>
            </Card>

            <Card title="Irrigação">
              <p>
                Quais sistemas de irrigação proporcionam melhor produtividade
                e eficiência no uso da água?
              </p>
            </Card>

            <Card title="Nutrição">
              <p>
                Quais recomendações de fertilização, baseadas em análise de
                solo, maximizam produtividade sem aumentar perdas?
              </p>
            </Card>

            <Card title="Sanidade">
              <p>
                Quais pragas e doenças têm maior importância económica nas
                diferentes regiões produtoras?
              </p>
            </Card>

            <Card title="Pós-colheita">
              <p>
                Quais métodos de cura e armazenamento reduzem as perdas
                pós-colheita nas condições climáticas angolanas?
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="15 • Fontes técnicas"
          title="Referências utilizadas"
          description="A página combina fontes oficiais angolanas com referências técnicas internacionais para a parte agronómica."
        />

        <div className="space-y-4">
          <a
            href="https://www.minagrif.gov.ao/web/documentos?type=Relat%C3%B3rios++Estat%C3%ADsticos"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-green-300 hover:bg-green-50"
          >
            <strong className="text-slate-950">
              MINAGRIF — Relatórios Estatísticos
            </strong>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Portal oficial dos documentos estatísticos do Ministério da
              Agricultura e Florestas.
            </p>
          </a>

          <a
            href="https://www.fao.org/africa/news-stories/news-detail/angola-s-banda-chibia-dam--a-beacon-of-climate-resilience-and-agricultural-innovation/en"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-green-300 hover:bg-green-50"
          >
            <strong className="text-slate-950">
              FAO — Barragem da Banda Chibia
            </strong>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Experiência de irrigação e produção de cebola no sul de Angola.
            </p>
          </a>

          <a
            href="https://www.fada.gov.ao/cooperativa-cwam-ja-colhe-frutos-do-financiamento-do-fada-na-provincia-da-huila/"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-green-300 hover:bg-green-50"
          >
            <strong className="text-slate-950">
              FADA — Cooperativa CWAM
            </strong>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Caso de produção de cebola no perímetro irrigado da Matala,
              Huíla.
            </p>
          </a>

          <a
            href="https://www.adra-angola.org/artigos/benguela-cooperativa-tuvanja-kovasso-colhe-mais-de-500-caixas-de-tomate-no-municipio-da-ganda"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-green-300 hover:bg-green-50"
          >
            <strong className="text-slate-950">
              ADRA Angola — Cooperativa Tuvanja Kovasso
            </strong>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Experiência de produção de cebola em Akarangolo, Ganda,
              Benguela.
            </p>
          </a>

          <a
            href="https://www.fao.org/family-farming/detail/en/c/1373084/"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-green-300 hover:bg-green-50"
          >
            <strong className="text-slate-950">
              FAO / Access Agriculture — Instalação de campo de cebola
            </strong>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Referência prática africana sobre preparação do terreno,
              canteiros, transplante e espaçamento.
            </p>
          </a>

          <a
            href="https://www.fao.org/4/a0218e/a0218e14.htm"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-green-300 hover:bg-green-50"
          >
            <strong className="text-slate-950">
              FAO — Food Factsheet: Onion
            </strong>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Botânica, propagação, espaçamento, manejo e problemas gerais da
              cultura.
            </p>
          </a>

          <a
            href="https://agris.fao.org/search/en/providers/125354/records/6765873a6a5a95f3405aca2c"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-green-300 hover:bg-green-50"
          >
            <strong className="text-slate-950">
              AGRIS/FAO — Relações hídricas e irrigação da cebola
            </strong>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Revisão científica sobre água, rendimento, qualidade e
              estratégias de irrigação.
            </p>
          </a>

          <a
            href="https://ipm.ucanr.edu/agriculture/onion-and-garlic/thrips/"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-green-300 hover:bg-green-50"
          >
            <strong className="text-slate-950">
              UC IPM — Tripes da cebola
            </strong>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Identificação, danos e princípios de manejo integrado de tripes.
            </p>
          </a>

          <a
            href="https://ipm.ucanr.edu/agriculture/onion-and-garlic/downy-mildew/"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-green-300 hover:bg-green-50"
          >
            <strong className="text-slate-950">
              UC IPM — Míldio da cebola
            </strong>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Condições favoráveis e medidas culturais para redução do risco.
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

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm leading-7 text-slate-300">
                Dados estatísticos nacionais devem manter a escala original da
                fonte. Um valor nacional não será transformado artificialmente
                em valor provincial.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm leading-7 text-slate-300">
                Experiências de Matala, Ganda, Chibia ou Luanda são apresentadas
                como experiências localizadas e não como representação de toda
                Angola.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm leading-7 text-slate-300">
                Recomendações agronómicas internacionais são identificadas como
                referências técnicas gerais e não como recomendações oficiais
                do IIA para todas as regiões de Angola.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm leading-7 text-slate-300">
                A plataforma deve actualizar os dados quando novas estatísticas
                oficiais forem publicadas.
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
              href="/agricultura/batata-rena"
              className="text-slate-600 hover:text-green-700"
            >
              Batata-rena
            </Link>

            <Link
              href="/agricultura/tomate"
              className="text-slate-600 hover:text-green-700"
            >
              Tomate
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