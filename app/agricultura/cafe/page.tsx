"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";

type Provincia = {
  nome: string;
  regiao: string;
  aptidao: string;
  nota: string;
};

type Imagem = {
  src: string;
  titulo: string;
  legenda: string;
  fonte: string;
  urlFonte: string;
};

type CardProps = {
  titulo: string;
  children: ReactNode;
};

const provincias: Provincia[] = [
  {
    nome: "Bengo",
    regiao: "Norte",
    aptidao: "Histórica para café Robusta",
    nota: "Província incluída nas zonas cafeeiras históricas de Angola."
  },
  {
    nome: "Benguela",
    regiao: "Centro",
    aptidao: "Robusta e Arábica",
    nota: "Registos estatísticos do INE indicam produção dos dois tipos."
  },
  {
    nome: "Bié",
    regiao: "Centro",
    aptidao: "Arábica e Robusta",
    nota: "O Arábica aparece nos registos oficiais de produção da região Centro."
  },
  {
    nome: "Cabinda",
    regiao: "Norte",
    aptidao: "Robusta",
    nota: "Zona histórica de produção de café Robusta."
  },
  {
    nome: "Cuando",
    regiao: "Leste",
    aptidao: "Potencial a avaliar",
    nota: "A aptidão deve ser determinada por condições agroclimáticas locais e investigação."
  },
  {
    nome: "Cubango",
    regiao: "Leste",
    aptidao: "Potencial a avaliar",
    nota: "Necessita de avaliação agroclimática específica antes de recomendações comerciais."
  },
  {
    nome: "Cuanza Norte",
    regiao: "Norte",
    aptidao: "Robusta",
    nota: "Uma das principais províncias produtoras de café de Angola."
  },
  {
    nome: "Cuanza Sul",
    regiao: "Centro",
    aptidao: "Robusta e Arábica",
    nota: "Principal foco desta página, com destaque para Gabela/Amboim."
  },
  {
    nome: "Cunene",
    regiao: "Sul",
    aptidao: "Baixa prioridade",
    nota: "As condições semiáridas não correspondem às principais zonas cafeeiras históricas."
  },
  {
    nome: "Huambo",
    regiao: "Centro",
    aptidao: "Arábica e Robusta",
    nota: "Há registos de produção de Arábica."
  },
  {
    nome: "Huíla",
    regiao: "Sul",
    aptidao: "Arábica",
    nota: "Registos históricos e estatísticos indicam produção de Arábica."
  },
  {
    nome: "Icolo e Bengo",
    regiao: "Norte",
    aptidao: "A avaliar",
    nota: "Não deve ser atribuída produção sem fonte estatística específica."
  },
  {
    nome: "Luanda",
    regiao: "Norte",
    aptidao: "Baixa prioridade",
    nota: "Não é apresentada aqui como zona produtora sem dados específicos."
  },
  {
    nome: "Lunda Norte",
    regiao: "Leste",
    aptidao: "A avaliar",
    nota: "Potencial depende das condições agroclimáticas e de investigação local."
  },
  {
    nome: "Lunda Sul",
    regiao: "Leste",
    aptidao: "A avaliar",
    nota: "Não confundir potencial agrícola com produção oficial actual de café."
  },
  {
    nome: "Malanje",
    regiao: "Norte/Centro",
    aptidao: "Robusta e Arábica",
    nota: "Existem registos históricos de produção dos dois tipos."
  },
  {
    nome: "Moxico",
    regiao: "Leste",
    aptidao: "Arábica em registos históricos",
    nota: "A ocorrência não significa que toda a província seja actualmente indicada para café."
  },
  {
    nome: "Moxico Leste",
    regiao: "Leste",
    aptidao: "A avaliar",
    nota: "Necessita de zonamento e dados actualizados."
  },
  {
    nome: "Namibe",
    regiao: "Sul",
    aptidao: "Baixa prioridade",
    nota: "As condições climáticas são geralmente limitantes para café sem condições específicas."
  },
  {
    nome: "Uíge",
    regiao: "Norte",
    aptidao: "Robusta",
    nota: "Uma das grandes zonas históricas do café angolano."
  },
  {
    nome: "Zaire",
    regiao: "Norte",
    aptidao: "Robusta",
    nota: "Zona incluída na distribuição histórica da cafeicultura."
  }
];

const imagens: Imagem[] = [
  {
    src: "https://c2a.portais.gov.ao/uploads/Capa_2_dd58a58739.jpeg",
    titulo: "Viveiro de café na Gabela",
    legenda:
      "Viveiro visitado pelo Instituto Nacional do Café na Gabela, com jovens plantas de café em formação antes da implantação definitiva.",
    fonte: "MINAGRIF / INCA",
    urlFonte:
      "https://minagrif.gov.ao/web/noticias/inca-marca-presenca-na-gabela-em-apoio-ao-fortalecimento-da-cadeia-do-cafe"
  },
  {
    src: "https://www.cirad.fr/var/cirad/storage/images/_aliases/hero/8/0/5/2/192508-1-fre-FR/plantation%20villageoise%20de%20caf%C3%A9%20robusta%20r%C3%A9gion%20de%20Gab%C3%A9la.jpg",
    titulo: "Cafezal de Robusta na região da Gabela",
    legenda:
      "Plantação de café Robusta na região de Gabela, mostrando a integração entre cafeeiros e árvores de sombra.",
    fonte: "CIRAD",
    urlFonte:
      "https://www.cirad.fr/dans-le-monde/nos-directions-regionales/afrique-centrale/pays/angola"
  },
  {
    src: "https://fpif.org/wp-content/uploads/2016/09/farmer-in-gabela-kwanza-sul-province-angola-dries-coffee-in-a-field-after-harvest-725x435.jpg",
    titulo: "Secagem tradicional de café na Gabela",
    legenda:
      "Café colocado para secagem após a colheita na região da Gabela, Cuanza Sul.",
    fonte: "Foreign Policy In Focus",
    urlFonte:
      "https://fpif.org/seeds-corporate-power-vs-farmers-rights/farmer-in-gabela-kwanza-sul-province-angola-dries-coffee-in-a-field-after-harvest-725x435/"
  },
  {
    src: "https://www.opais.ao/wp-content/uploads/2023/10/DM_CAFE-7-scaled-1.webp",
    titulo: "Cafeeiro com frutos maduros",
    legenda:
      "Cafeeiros carregados de frutos vermelhos, representando a fase de maturação próxima da colheita.",
    fonte: "OPaís",
    urlFonte:
      "https://www.opais.ao/economia/governo-projecta-centro-de-pesquisa-de-cafe-na-gabela/"
  },
  {
    src: "https://c2a.portais.gov.ao/uploads/493138680_2190400314807728_6068181056531826598_n_cd55d6a0b2.jpg",
    titulo: "Processamento de café na Gabela",
    legenda:
      "Cerimónia de abertura de uma unidade de processamento de café na Gabela, dedicada ao descasque, torra e selecção.",
    fonte: "Governo do Cuanza Sul",
    urlFonte:
      "https://cuanzasul.gov.ao/web/noticias/cuanza-sul-reforca-capacidade-de-processamento-de-cafe"
  }
];

function Card({ titulo, children }: CardProps) {
  return (
    <article className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-xl font-bold text-emerald-900">{titulo}</h3>
      <div className="text-[15px] leading-7 text-slate-700">{children}</div>
    </article>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8 max-w-4xl">
      <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
        {title}
      </h2>

      <p className="mt-3 text-base leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
}

export default function CafePage() {
  const [provinciaSelecionada, setProvinciaSelecionada] =
    useState("Cuanza Sul");

  const [pesquisaProvincia, setPesquisaProvincia] = useState("");

  const [tipoCafe, setTipoCafe] = useState<"Todos" | "Robusta" | "Arábica">(
    "Todos"
  );

  const provinciasFiltradas = useMemo(() => {
    const termo = pesquisaProvincia.trim().toLowerCase();

    if (!termo) return provincias;

    return provincias.filter(
      (provincia) =>
        provincia.nome.toLowerCase().includes(termo) ||
        provincia.regiao.toLowerCase().includes(termo) ||
        provincia.aptidao.toLowerCase().includes(termo)
    );
  }, [pesquisaProvincia]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-emerald-950">
        <div className="absolute inset-0">
          <img
            src={imagens[1].src}
            alt="Plantação de café Robusta na região da Gabela"
            className="h-full w-full object-cover opacity-30"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-5xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">
              AGROINOVA ANGOLA • Agricultura
            </p>

            <h1 className="text-5xl font-black tracking-tight text-white md:text-7xl">
              Café
            </h1>

            <p className="mt-6 max-w-4xl text-xl leading-8 text-emerald-50 md:text-2xl">
              Guia técnico e académico da cafeicultura angolana, com destaque
              especial para a Gabela, Amboim e a província do Cuanza Sul.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                Coffea canephora
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                Coffea arabica
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                Gabela • Amboim
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                Cuanza Sul
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="sticky top-0 z-40 border-b border-emerald-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-3 text-sm md:px-10">
          <a href="#gabela" className="whitespace-nowrap font-semibold text-emerald-800">
            Gabela
          </a>
          <a href="#angola" className="whitespace-nowrap font-semibold text-emerald-800">
            Angola
          </a>
          <a href="#botanica" className="whitespace-nowrap font-semibold text-emerald-800">
            Botânica
          </a>
          <a href="#clima" className="whitespace-nowrap font-semibold text-emerald-800">
            Clima
          </a>
          <a href="#solo" className="whitespace-nowrap font-semibold text-emerald-800">
            Solo
          </a>
          <a href="#viveiro" className="whitespace-nowrap font-semibold text-emerald-800">
            Viveiro
          </a>
          <a href="#manejo" className="whitespace-nowrap font-semibold text-emerald-800">
            Manejo
          </a>
          <a href="#sanidade" className="whitespace-nowrap font-semibold text-emerald-800">
            Sanidade
          </a>
          <a href="#colheita" className="whitespace-nowrap font-semibold text-emerald-800">
            Colheita
          </a>
          <a href="#beneficio" className="whitespace-nowrap font-semibold text-emerald-800">
            Benefício
          </a>
          <a href="#investigacao" className="whitespace-nowrap font-semibold text-emerald-800">
            Investigação
          </a>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl bg-emerald-900 p-6 text-white">
            <p className="text-sm font-semibold text-emerald-200">
              Produção 2022/23
            </p>
            <p className="mt-2 text-4xl font-black">20 071 t</p>
            <p className="mt-2 text-sm leading-6 text-emerald-100">
              Soma nacional apresentada pelo INE para café em estado mabuba e
              comercial.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-emerald-100">
            <p className="text-sm font-semibold text-emerald-700">
              Café mabuba
            </p>
            <p className="mt-2 text-4xl font-black text-slate-950">
              13 842 t
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Produção nacional registada na campanha 2022/23.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-emerald-100">
            <p className="text-sm font-semibold text-emerald-700">
              Café comercial
            </p>
            <p className="mt-2 text-4xl font-black text-slate-950">
              6 229 t
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Produção nacional registada na campanha 2022/23.
            </p>
          </div>

          <div className="rounded-3xl bg-emerald-50 p-6 ring-1 ring-emerald-100">
            <p className="text-sm font-semibold text-emerald-800">
              Foco estratégico
            </p>
            <p className="mt-2 text-2xl font-black text-emerald-950">
              Gabela
            </p>
            <p className="mt-2 text-sm leading-6 text-emerald-900">
              Recuperação de fazendas, boas práticas, beneficiamento,
              agroflorestas e valorização da cadeia.
            </p>
          </div>
        </div>
      </section>

      <section
        id="gabela"
        className="mx-auto max-w-7xl px-6 py-14 md:px-10"
      >
        <SectionTitle
          eyebrow="Cuanza Sul"
          title="Gabela: uma referência da cafeicultura angolana"
          description="A Gabela não entra nesta página apenas como exemplo. Ela é tratada como um território central para compreender a história, a recuperação e a modernização da fileira do café em Angola."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <Card titulo="Amboim e o café">
            <p>
              A Gabela situa-se no município do Amboim, província do Cuanza
              Sul. A região possui uma longa tradição cafeeira e é reconhecida
              pela produção de café Robusta.
            </p>

            <p className="mt-4">
              Documentos de planeamento agrário de Angola identificam
              historicamente Amboim, Libolo, Quilenda, Conda, Cassongue, Ebo e
              Quibala entre as zonas de Robusta do Cuanza Sul.
            </p>
          </Card>

          <Card titulo="Recuperar o que já existia">
            <p>
              A recuperação das fazendas abandonadas é uma questão importante
              para a revitalização da cafeicultura. Em 2025, o INCA destacou
              precisamente a necessidade de recuperar e reactivar fazendas de
              café no Cuanza Sul.
            </p>

            <p className="mt-4">
              Isto significa que o desenvolvimento da fileira não depende
              apenas da abertura de novas áreas: também passa pela recuperação
              de cafezais existentes.
            </p>
          </Card>

          <Card titulo="Uma cadeia que está a ser reconstruída">
            <p>
              Em Junho de 2025 foi inaugurado na Gabela um Centro de Benefício
              do Café e foi realizada a Feira do Café da Gabela.
            </p>

            <p className="mt-4">
              A existência de estruturas de benefício, transformação e
              comercialização é fundamental para transformar a produção de
              cereja em produto com maior valor económico.
            </p>
          </Card>
        </div>

        <div className="mt-8 rounded-3xl border border-emerald-200 bg-emerald-50 p-7">
          <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
            Informação actual
          </p>

          <h3 className="mt-2 text-2xl font-black text-emerald-950">
            A Gabela está novamente no centro da agenda do café
          </h3>

          <p className="mt-4 max-w-5xl leading-7 text-emerald-950">
            Em 2025, o INCA participou na abertura da Feira do Café da Gabela,
            destacou a necessidade de boas práticas agrícolas e sistemas
            agroflorestais e visitou uma fazenda no município da Quilenda
            financiada pelo PDAC. No mesmo período foi inaugurado um Centro de
            Benefício do Café na cidade da Gabela.
          </p>
        </div>
      </section>

      <section
        id="angola"
        className="mx-auto max-w-7xl px-6 py-14 md:px-10"
      >
        <SectionTitle
          eyebrow="Café em Angola"
          title="Robusta e Arábica"
          description="Angola produz os dois principais tipos comerciais considerados nesta página. O Robusta tem peso claramente dominante na produção nacional."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <Card titulo="Café Robusta — Coffea canephora">
            <p>
              O Robusta é a base histórica da cafeicultura angolana. Os dados
              do INE para 2022/23 mostram que cerca de 90% da produção nacional
              de café mabuba correspondia ao tipo Robusta.
            </p>

            <ul className="mt-5 space-y-3">
              <li>
                <strong>Principais referências:</strong> Cuanza Sul, Uíge e
                Cuanza Norte.
              </li>
              <li>
                <strong>Importância:</strong> elevada adaptação às zonas
                quentes e húmidas onde a cafeicultura tradicional se
                desenvolveu.
              </li>
              <li>
                <strong>Gabela:</strong> a produção de Robusta possui forte
                identidade regional.
              </li>
            </ul>
          </Card>

          <Card titulo="Café Arábica — Coffea arabica">
            <p>
              O Arábica possui uma participação menor na produção nacional,
              mas é agronomicamente importante em zonas com condições de
              altitude e temperatura mais favoráveis.
            </p>

            <ul className="mt-5 space-y-3">
              <li>
                <strong>Registos:</strong> Cuanza Sul, Benguela, Bié, Huambo e
                Huíla aparecem nos dados do INE.
              </li>
              <li>
                <strong>Cuidado:</strong> não se deve recomendar Arábica para
                qualquer município apenas porque existe produção na província.
              </li>
              <li>
                <strong>Decisão técnica:</strong> deve considerar altitude,
                temperatura, precipitação, solo e balanço hídrico.
              </li>
            </ul>
          </Card>
        </div>

        <div className="mt-8 rounded-3xl bg-slate-900 p-7 text-white">
          <h3 className="text-2xl font-black">
            O que os dados do INE mostram?
          </h3>

          <p className="mt-4 max-w-5xl leading-7 text-slate-300">
            Para a campanha agrícola 2022/23, o INE estimou 13 842 toneladas
            de café em estado mabuba e 6 229 toneladas em estado comercial,
            totalizando 20 071 toneladas. O Cuanza Sul aparece como a
            principal concentração produtiva da região Centro.
          </p>

          <p className="mt-4 text-sm text-slate-400">
            Fonte estatística: INE, produção nacional de café, campanha
            2022/23.
          </p>
        </div>
      </section>

      <section
        id="botanica"
        className="mx-auto max-w-7xl px-6 py-14 md:px-10"
      >
        <SectionTitle
          eyebrow="Botânica"
          title="Conhecer a planta antes de manejar o cafezal"
          description="O café é uma cultura perene. A qualidade da implantação inicial condiciona a produtividade e a longevidade do cafezal."
        />

        <div className="grid gap-6 md:grid-cols-3">
          <Card titulo="Sistema radicular">
            <p>
              O cafeeiro possui um sistema radicular que explora diferentes
              camadas do solo. Solos compactados, encharcados ou com pouca
              profundidade podem limitar o desenvolvimento das raízes.
            </p>
          </Card>

          <Card titulo="Folhas">
            <p>
              As folhas são fundamentais para a fotossíntese e para a
              formação de reservas necessárias à produção. Desfolha intensa
              provocada por pragas, doenças ou manejo inadequado reduz o
              potencial produtivo.
            </p>
          </Card>

          <Card titulo="Fruto">
            <p>
              O fruto do cafeeiro é uma drupa, normalmente designada por
              cereja. Quando amadurece, apresenta coloração característica,
              frequentemente vermelha, dependendo do material genético.
            </p>
          </Card>
        </div>
      </section>

      <section
        id="clima"
        className="mx-auto max-w-7xl px-6 py-14 md:px-10"
      >
        <SectionTitle
          eyebrow="Agroclimatologia"
          title="Clima: não basta dizer que a Gabela é húmida"
          description="A recomendação de uma área para café deve combinar temperatura, precipitação, altitude, distribuição das chuvas e balanço hídrico."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <Card titulo="Gabela e condições locais">
            <p>
              A região da Gabela possui condições historicamente associadas à
              cafeicultura. Entretanto, dentro do próprio Cuanza Sul existem
              diferenças de altitude, exposição, precipitação e solos.
            </p>

            <p className="mt-4">
              Por isso, uma recomendação técnica para uma fazenda deve ser
              feita com dados do local e não apenas com o nome do município.
            </p>
          </Card>

          <Card titulo="Zonamento agroclimático">
            <p>
              Estudos de zonamento para Angola avaliaram temperatura,
              precipitação efectiva, precipitação total, balanço hídrico e
              défice hídrico para os municípios do país.
            </p>

            <p className="mt-4">
              A conclusão é importante: apenas uma pequena parcela do
              território apresenta condições classificadas como aptas,
              enquanto grandes áreas são marginais ou inaptas. Portanto,
              expansão do café deve ser baseada em zonamento e não apenas em
              disponibilidade de terra.
            </p>
          </Card>
        </div>
      </section>

      <section
        id="solo"
        className="mx-auto max-w-7xl px-6 py-14 md:px-10"
      >
        <SectionTitle
          eyebrow="Solo"
          title="Solo para café: profundidade, drenagem e matéria orgânica"
          description="A qualidade do solo influencia directamente o enraizamento, o crescimento vegetativo, a nutrição e a estabilidade produtiva do cafezal."
        />

        <div className="grid gap-6 md:grid-cols-3">
          <Card titulo="Drenagem">
            <p>
              O cafeeiro não deve ser instalado em locais sujeitos a
              encharcamento prolongado. O excesso de água reduz a oxigenação
              radicular e pode favorecer problemas sanitários.
            </p>
          </Card>

          <Card titulo="Estrutura">
            <p>
              Solos excessivamente compactados dificultam a penetração das
              raízes. A preparação da área deve procurar preservar a estrutura
              e reduzir a compactação causada por operações inadequadas.
            </p>
          </Card>

          <Card titulo="Fertilidade">
            <p>
              A adubação deve ser baseada, sempre que possível, em análise de
              solo. Não é tecnicamente correcto aplicar uma mesma dose de
              fertilizante a todos os cafezais.
            </p>
          </Card>
        </div>
      </section>

      <section
        id="viveiro"
        className="mx-auto max-w-7xl px-6 py-14 md:px-10"
      >
        <SectionTitle
          eyebrow="Propagação"
          title="Viveiro e produção de mudas"
          description="Uma lavoura produtiva começa com material de plantação saudável, uniforme e geneticamente identificado."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <Card titulo="O que deve ser controlado no viveiro">
            <ul className="space-y-3">
              <li>• origem e identidade do material genético;</li>
              <li>• qualidade das sementes ou material propagativo;</li>
              <li>• substrato adequado;</li>
              <li>• drenagem dos recipientes;</li>
              <li>• disponibilidade de água de boa qualidade;</li>
              <li>• controlo de pragas e doenças;</li>
              <li>• selecção de mudas vigorosas;</li>
              <li>• aclimatação antes da plantação definitiva.</li>
            </ul>
          </Card>

          <Card titulo="Gabela: estrutura real de viveiro">
            <p>
              A imagem utilizada no topo desta secção corresponde a um
              viveiro visitado pelo INCA na Gabela em 2025. As mudas estavam
              organizadas em sacos e protegidas por uma estrutura de sombra.
            </p>

            <p className="mt-4">
              Esta estrutura é importante para a produção de plantas jovens
              antes da transferência para o campo.
            </p>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          {imagens.slice(0, 4).map((imagem) => (
            <figure
              key={imagem.src}
              className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-emerald-100"
            >
              <a
                href={imagem.urlFonte}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={imagem.src}
                  alt={imagem.titulo}
                  className="h-72 w-full object-cover transition duration-500 hover:scale-105"
                />
              </a>

              <figcaption className="p-5">
                <h3 className="font-bold text-slate-950">
                  {imagem.titulo}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {imagem.legenda}
                </p>

                <a
                  href={imagem.urlFonte}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-bold text-emerald-700 hover:underline"
                >
                  Fonte: {imagem.fonte} →
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section
        id="manejo"
        className="mx-auto max-w-7xl px-6 py-14 md:px-10"
      >
        <SectionTitle
          eyebrow="Manejo"
          title="Implantação e condução do cafezal"
          description="A produtividade não depende de uma única prática. O cafezal deve ser conduzido como um sistema permanente."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card titulo="Preparação da área">
            <p>
              Antes da plantação devem ser avaliados relevo, drenagem,
              cobertura vegetal, acesso, disponibilidade de água, fertilidade
              do solo e necessidade de conservação.
            </p>
          </Card>

          <Card titulo="Espaçamento">
            <p>
              O espaçamento não deve ser copiado de uma fazenda para outra.
              Deve considerar variedade, porte da planta, fertilidade,
              mecanização, declive, sombra e sistema de condução.
            </p>
          </Card>

          <Card titulo="Sombra">
            <p>
              Sistemas agroflorestais podem ser importantes na cafeicultura.
              O INCA destacou em 2025 a promoção destes sistemas no âmbito da
              recuperação da cadeia cafeeira.
            </p>
          </Card>

          <Card titulo="Capina e cobertura">
            <p>
              A gestão das infestantes deve evitar competição excessiva sem
              deixar o solo completamente exposto à erosão. Cobertura vegetal
              e matéria orgânica podem contribuir para a conservação do solo.
            </p>
          </Card>

          <Card titulo="Poda">
            <p>
              A poda procura controlar a arquitectura da planta, renovar
              ramos produtivos e facilitar operações de colheita e sanidade.
              A intensidade deve ser adaptada à idade e ao estado do cafezal.
            </p>
          </Card>

          <Card titulo="Nutrição">
            <p>
              A fertilização deve partir da análise do solo e, quando
              possível, de informação sobre o estado nutricional das plantas.
              O objectivo é evitar tanto deficiência como aplicação excessiva.
            </p>
          </Card>
        </div>
      </section>

      <section
        id="sanidade"
        className="mx-auto max-w-7xl px-6 py-14 md:px-10"
      >
        <SectionTitle
          eyebrow="Protecção fitossanitária"
          title="Pragas e doenças do cafeeiro"
          description="A sanidade deve ser trabalhada com monitorização, prevenção e identificação correcta do problema antes da aplicação de qualquer produto."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <Card titulo="Broca-do-café">
            <p>
              A broca do café é uma das principais pragas da cultura em
              diferentes regiões produtoras do mundo. O ataque está relacionado
              principalmente com os frutos e pode comprometer rendimento e
              qualidade.
            </p>

            <p className="mt-4">
              A colheita cuidadosa e a eliminação de frutos remanescentes são
              componentes importantes da gestão sanitária.
            </p>
          </Card>

          <Card titulo="Ferrugem do cafeeiro">
            <p>
              A ferrugem pode provocar queda prematura das folhas e redução da
              capacidade fotossintética. O risco varia de acordo com material
              genético, clima, manejo e condições da plantação.
            </p>
          </Card>

          <Card titulo="Doenças radiculares">
            <p>
              Problemas radiculares podem estar associados a agentes
              patogénicos, drenagem deficiente, compactação e outros factores.
              O diagnóstico deve considerar planta, raiz e condições do solo.
            </p>
          </Card>

          <Card titulo="Manejo integrado">
            <p>
              O AGROINOVA deve privilegiar monitorização, higiene da lavoura,
              material saudável, equilíbrio nutricional, conservação do
              ambiente e uso responsável de produtos fitossanitários quando
              tecnicamente necessários.
            </p>
          </Card>
        </div>
      </section>

      <section
        id="colheita"
        className="mx-auto max-w-7xl px-6 py-14 md:px-10"
      >
        <SectionTitle
          eyebrow="Colheita"
          title="A qualidade começa no campo"
          description="A colheita é uma das fases mais importantes para determinar a qualidade final do café."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <Card titulo="Colheita selectiva">
            <p>
              Sempre que o sistema produtivo permitir, deve-se privilegiar a
              colheita de frutos maduros e reduzir a mistura de frutos verdes,
              excessivamente maduros e danificados.
            </p>
          </Card>

          <Card titulo="Café cereja">
            <p>
              O fruto recém-colhido é o ponto de partida para o processamento.
              A velocidade entre colheita e beneficiamento influencia o risco
              de fermentações indesejadas.
            </p>
          </Card>

          <Card titulo="Higiene">
            <p>
              Sacos, recipientes, superfícies de secagem e equipamentos devem
              estar limpos. O contacto com solo, combustíveis, animais ou
              materiais contaminantes deve ser evitado.
            </p>
          </Card>
        </div>
      </section>

      <section
        id="beneficio"
        className="mx-auto max-w-7xl px-6 py-14 md:px-10"
      >
        <SectionTitle
          eyebrow="Pós-colheita"
          title="Do bago vermelho ao café comercial"
          description="O beneficiamento é decisivo para transformar produção agrícola em produto comercial de maior valor."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card titulo="1. Recepção">
            <p>
              Receber, pesar, inspeccionar e separar lotes de acordo com
              origem e qualidade.
            </p>
          </Card>

          <Card titulo="2. Benefício">
            <p>
              Dependendo do sistema utilizado, o fruto pode seguir processos
              secos ou húmidos antes da obtenção do café em pergaminho ou
              café verde.
            </p>
          </Card>

          <Card titulo="3. Secagem">
            <p>
              A secagem deve reduzir a humidade de forma controlada e evitar
              contaminação, fermentação indesejada e re-humidificação.
            </p>
          </Card>

          <Card titulo="4. Classificação">
            <p>
              O grão pode ser classificado por tamanho, defeitos, humidade,
              origem e outros parâmetros de qualidade.
            </p>
          </Card>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-emerald-100">
          <a
            href={imagens[4].urlFonte}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={imagens[4].src}
              alt={imagens[4].titulo}
              className="h-80 w-full object-cover"
            />
          </a>

          <div className="p-6">
            <h3 className="text-2xl font-black text-slate-950">
              Beneficiamento e industrialização na Gabela
            </h3>

            <p className="mt-3 max-w-4xl leading-7 text-slate-600">
              O Governo do Cuanza Sul informou em 2025 sobre a entrada em
              funcionamento de uma fábrica na Gabela destinada ao descasque,
              torra e selecção do café. Segundo a informação oficial, o
              investimento foi superior a 950 milhões de kwanzas e teve
              financiamento do PDAC.
            </p>

            <a
              href={imagens[4].urlFonte}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-bold text-emerald-700 hover:underline"
            >
              Consultar fonte oficial →
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <SectionTitle
          eyebrow="Economia rural"
          title="O café não termina na fazenda"
          description="Uma fileira forte precisa conectar produtor, beneficiamento, classificação, torrefacção, embalagem, comercialização e exportação."
        />

        <div className="grid gap-6 md:grid-cols-3">
          <Card titulo="Produtor">
            <p>
              Produz cereja de qualidade, controla o cafezal e mantém registos
              sobre área, materiais plantados, produtividade e operações.
            </p>
          </Card>

          <Card titulo="Beneficiamento">
            <p>
              Converte a produção agrícola em café com características
              adequadas para classificação e comercialização.
            </p>
          </Card>

          <Card titulo="Indústria">
            <p>
              Torrefacção, moagem e embalagem permitem aumentar o valor
              acrescentado e fortalecer marcas nacionais.
            </p>
          </Card>

          <Card titulo="Mercado nacional">
            <p>
              A produção local pode abastecer torrefactores, comércio,
              restauração, hotéis e consumidores angolanos.
            </p>
          </Card>

          <Card titulo="Exportação">
            <p>
              A melhoria da qualidade, rastreabilidade e classificação abre
              oportunidades para mercados externos.
            </p>
          </Card>

          <Card titulo="Marca Gabela">
            <p>
              A origem Gabela/Amboim pode funcionar como elemento de
              diferenciação, desde que a qualidade e a rastreabilidade sejam
              tecnicamente comprovadas.
            </p>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="rounded-[2rem] bg-emerald-950 p-8 text-white md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
            Pessoas e território
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Mulheres produtoras também fazem parte da cadeia
          </h2>

          <p className="mt-5 max-w-5xl text-lg leading-8 text-emerald-50">
            Durante a missão do INCA à Gabela, em Junho de 2025, foram
            homenageadas 12 mulheres produtoras de café numa iniciativa da
            ANGONABEIRO e da Associação de Mulheres Empreendedoras do Amboim.
            A informação é relevante para o AGROINOVA porque mostra que a
            revitalização da cafeicultura também passa pela inclusão económica
            e pela organização dos produtores.
          </p>
        </div>
      </section>

      <section
        id="investigacao"
        className="mx-auto max-w-7xl px-6 py-14 md:px-10"
      >
        <SectionTitle
          eyebrow="Investigação"
          title="O que ainda precisamos investigar na Gabela?"
          description="Uma plataforma nacional de conhecimento não deve apenas apresentar respostas. Deve também identificar perguntas de investigação."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <Card titulo="Genética">
            <p>
              Quais materiais de Robusta apresentam melhor produtividade,
              qualidade de bebida, resistência a doenças e adaptação às
              diferentes altitudes e condições do Amboim?
            </p>
          </Card>

          <Card titulo="Solos">
            <p>
              Quais classes de solos predominam nas principais áreas
              cafeeiras? Como variam pH, matéria orgânica, fósforo, potássio,
              cálcio, magnésio e capacidade de retenção de água?
            </p>
          </Card>

          <Card titulo="Agrofloresta">
            <p>
              Quais espécies de sombra apresentam melhor compatibilidade com o
              café Robusta da Gabela sem competir excessivamente por água e
              nutrientes?
            </p>
          </Card>

          <Card titulo="Qualidade">
            <p>
              Quais perfis de bebida podem ser associados aos diferentes
              microambientes do Amboim e como podem ser utilizados para
              diferenciação comercial?
            </p>
          </Card>

          <Card titulo="Pós-colheita">
            <p>
              Quais métodos de benefício produzem melhor qualidade sensorial
              e melhor estabilidade do café produzido localmente?
            </p>
          </Card>

          <Card titulo="Economia">
            <p>
              Qual é o custo real de produção por hectare, por quilograma de
              café cereja e por quilograma de café comercial nos diferentes
              sistemas de produção?
            </p>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <SectionTitle
          eyebrow="Angola"
          title="Onde está o café?"
          description="A distribuição abaixo serve como painel de conhecimento. Não representa automaticamente produção actual nem aptidão agronómica de todos os municípios."
        />

        <div className="mb-6 flex flex-wrap gap-3">
          {["Todos", "Robusta", "Arábica"].map((tipo) => (
            <button
              key={tipo}
              type="button"
              onClick={() =>
                setTipoCafe(tipo as "Todos" | "Robusta" | "Arábica")
              }
              className={`rounded-full px-5 py-2 text-sm font-bold transition ${
                tipoCafe === tipo
                  ? "bg-emerald-800 text-white"
                  : "bg-white text-emerald-800 ring-1 ring-emerald-200 hover:bg-emerald-50"
              }`}
            >
              {tipo}
            </button>
          ))}
        </div>

        <div className="mb-6">
          <input
            value={pesquisaProvincia}
            onChange={(event) => setPesquisaProvincia(event.target.value)}
            placeholder="Pesquisar província..."
            className="w-full rounded-2xl border border-emerald-200 bg-white px-5 py-4 outline-none ring-emerald-500 transition focus:ring-2"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {provinciasFiltradas
            .filter((provincia) => {
              if (tipoCafe === "Todos") return true;
              return provincia.aptidao.includes(tipoCafe);
            })
            .map((provincia) => {
              const selecionada =
                provincia.nome === provinciaSelecionada;

              return (
                <button
                  key={provincia.nome}
                  type="button"
                  onClick={() => setProvinciaSelecionada(provincia.nome)}
                  className={`rounded-3xl border p-5 text-left transition ${
                    selecionada
                      ? "border-emerald-600 bg-emerald-50 shadow-sm"
                      : "border-slate-200 bg-white hover:border-emerald-300"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-black text-slate-950">
                      {provincia.nome}
                    </h3>

                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                      {provincia.regiao}
                    </span>
                  </div>

                  <p className="mt-3 text-sm font-bold text-emerald-800">
                    {provincia.aptidao}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {provincia.nota}
                  </p>
                </button>
              );
            })}
        </div>

        <div className="mt-8 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-emerald-100">
          <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">
            Província seleccionada
          </p>

          <h3 className="mt-2 text-3xl font-black text-slate-950">
            {provinciaSelecionada}
          </h3>

          <p className="mt-3 max-w-4xl leading-7 text-slate-600">
            Para esta província, o AGROINOVA deve distinguir claramente entre
            produção estatisticamente observada, ocorrência histórica,
            potencial agroclimático e recomendação técnica. Esses quatro
            conceitos não são equivalentes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <SectionTitle
          eyebrow="Ficha técnica"
          title="Checklist para avaliar uma nova área de café"
          description="Antes de instalar um cafezal, o técnico deve recolher informação suficiente para decidir se a área é realmente adequada."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Localização geográfica",
            "Altitude",
            "Temperatura",
            "Precipitação",
            "Distribuição das chuvas",
            "Balanço hídrico",
            "Declive",
            "Drenagem",
            "Profundidade do solo",
            "pH",
            "Matéria orgânica",
            "Fósforo",
            "Potássio",
            "Cálcio e magnésio",
            "Histórico da área",
            "Material genético",
            "Origem das mudas",
            "Disponibilidade de água",
            "Acesso à estrada",
            "Distância ao benefício",
            "Mão-de-obra",
            "Mercado",
            "Risco fitossanitário",
            "Sistema de sombra"
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white p-4 font-semibold text-slate-700 shadow-sm ring-1 ring-slate-100"
            >
              <span className="mr-3 text-emerald-700">✓</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="rounded-[2rem] border border-amber-200 bg-amber-50 p-8">
          <p className="text-sm font-bold uppercase tracking-wider text-amber-800">
            Nota de rigor científico
          </p>

          <h2 className="mt-3 text-2xl font-black text-amber-950">
            Dados históricos não devem ser apresentados como produção actual
          </h2>

          <p className="mt-4 max-w-5xl leading-7 text-amber-950">
            A cafeicultura angolana tem uma história muito anterior aos dados
            estatísticos actuais. Por isso, esta página separa deliberadamente
            informações históricas de dados recentes. Por exemplo, relatórios
            da FAO registaram que produtores da Gabela chegaram a produzir
            cerca de 2 000 toneladas em 1996, durante uma fase de recuperação
            da cafeicultura. Esse valor é histórico e não deve ser usado como
            produção actual da Gabela.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <SectionTitle
          eyebrow="Fontes"
          title="Fontes principais utilizadas"
          description="A página deve continuar a ser actualizada à medida que o INE, o INCA e o MINAGRIF disponibilizem novos dados."
        />

        <div className="grid gap-4 md:grid-cols-2">
          <a
            href="https://minagrif.gov.ao/web/noticias/inca-marca-presenca-na-gabela-em-apoio-ao-fortalecimento-da-cadeia-do-cafe"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-white p-5 font-semibold text-emerald-800 shadow-sm ring-1 ring-emerald-100 hover:bg-emerald-50"
          >
            MINAGRIF / INCA — fortalecimento da cadeia do café na Gabela →
          </a>

          <a
            href="https://cuanzasul.gov.ao/web/noticias/cuanza-sul-reforca-capacidade-de-processamento-de-cafe"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-white p-5 font-semibold text-emerald-800 shadow-sm ring-1 ring-emerald-100 hover:bg-emerald-50"
          >
            Governo do Cuanza Sul — capacidade de processamento →
          </a>

          <a
            href="https://www.ine.gov.ao/Arquivos/arquivosCarregados/Carregados/Publicacao_638527475260982716.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-white p-5 font-semibold text-emerald-800 shadow-sm ring-1 ring-emerald-100 hover:bg-emerald-50"
          >
            INE — Produção Nacional de Café →
          </a>

          <a
            href="https://faolex.fao.org/docs/pdf/ang147153.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-white p-5 font-semibold text-emerald-800 shadow-sm ring-1 ring-emerald-100 hover:bg-emerald-50"
          >
            Plano de Desenvolvimento de Médio Prazo do Sector Agrário →
          </a>

          <a
            href="https://agris.fao.org/search/es/records/674846b87625988a3719c45f"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-white p-5 font-semibold text-emerald-800 shadow-sm ring-1 ring-emerald-100 hover:bg-emerald-50"
          >
            AGRIS/FAO — Zoneamento agroclimático do café em Angola →
          </a>

          <a
            href="https://www.fao.org/4/W5359e/W5359e00.htm"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-white p-5 font-semibold text-emerald-800 shadow-sm ring-1 ring-emerald-100 hover:bg-emerald-50"
          >
            FAO/GIEWS — relatório histórico sobre Angola →
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-4 md:px-10">
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-400">
            AGROINOVA ANGOLA
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Café da Gabela para Angola e para o mundo
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
            O objectivo desta página não é apenas ensinar a plantar café.
            É documentar a cultura, preservar conhecimento, apresentar dados
            verificáveis, apoiar produtores e técnicos e mostrar como a
            investigação, o beneficiamento e a agroindústria podem contribuir
            para reconstruir uma das fileiras agrícolas históricas de Angola.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/agricultura"
              className="rounded-full bg-emerald-600 px-6 py-3 font-bold text-white hover:bg-emerald-500"
            >
              ← Agricultura
            </Link>

            <Link
              href="/agricultura/abacaxi"
              className="rounded-full border border-white/20 px-6 py-3 font-bold text-white hover:bg-white/10"
            >
              ← Abacaxi
            </Link>

            <Link
              href="/agricultura/manga"
              className="rounded-full border border-white/20 px-6 py-3 font-bold text-white hover:bg-white/10"
            >
              Manga →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}