"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

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

type Variedade = {
  nome: string;
  estatuto: string;
  descricao: string;
  maturacao: string;
  caracteristicas: string[];
  observacao: string;
  imagem: Imagem;
};

const provincias: Provincia[] = [
  {
    nome: "Bengo",
    regiao: "Norte",
    observacao:
      "A produção deve ser ajustada ao regime de chuvas, drenagem e disponibilidade de água. Não há base para atribuir uma produtividade provincial sem fonte específica.",
  },
  {
    nome: "Benguela",
    regiao: "Centro-Oeste",
    observacao:
      "Há produção agrícola comercial e familiar e procura de soja documentada no mercado provincial. Sistemas irrigados podem alterar a janela de produção.",
  },
  {
    nome: "Bié",
    regiao: "Planalto Central",
    observacao:
      "As condições de altitude, temperatura e precipitação tornam importante a escolha do ciclo e do material genético.",
  },
  {
    nome: "Cabinda",
    regiao: "Norte",
    observacao:
      "A elevada humidade exige especial atenção à drenagem, sanidade foliar e momento da colheita.",
  },
  {
    nome: "Cuando",
    regiao: "Sudeste",
    observacao:
      "A disponibilidade hídrica e a duração da estação chuvosa devem orientar a instalação da cultura.",
  },
  {
    nome: "Cubango",
    regiao: "Sudeste",
    observacao:
      "A escolha da cultivar deve considerar o comprimento da estação agrícola e o período necessário para maturação.",
  },
  {
    nome: "Cuanza Norte",
    regiao: "Norte-Centro",
    observacao:
      "A cultura pode integrar sistemas de diversificação agrícola. A recomendação deve partir da condição concreta do solo e da época.",
  },
  {
    nome: "Cuanza Sul",
    regiao: "Centro",
    observacao:
      "A soja pode integrar sistemas comerciais e de rotação, mas não devem ser extrapolados resultados de outras regiões.",
  },
  {
    nome: "Cunene",
    regiao: "Sul",
    observacao:
      "A disponibilidade de água é uma variável crítica. O cultivo em sequeiro depende da distribuição efectiva das chuvas.",
  },
  {
    nome: "Huambo",
    regiao: "Planalto Central",
    observacao:
      "É uma das áreas com documentação específica sobre expansão da soja e investigação agronómica, incluindo projectos ligados ao agronegócio.",
  },
  {
    nome: "Huíla",
    regiao: "Sul",
    observacao:
      "Altitude, temperatura, regime pluviométrico e características do solo devem ser considerados na escolha da cultivar.",
  },
  {
    nome: "Icolo e Bengo",
    regiao: "Norte",
    observacao:
      "É uma província da actual configuração administrativa. Dados históricos anteriores à reforma territorial não devem ser redistribuídos automaticamente.",
  },
  {
    nome: "Luanda",
    regiao: "Litoral",
    observacao:
      "A produção depende sobretudo da disponibilidade de terra, água e sistemas de regadio. Não confundir aptidão potencial com produção efectivamente registada.",
  },
  {
    nome: "Lunda Norte",
    regiao: "Leste",
    observacao:
      "A recomendação deve considerar solos locais, regime hídrico e adaptação varietal.",
  },
  {
    nome: "Lunda Sul",
    regiao: "Leste",
    observacao:
      "É importante avaliar a adaptação da cultivar ao ambiente local antes da expansão comercial.",
  },
  {
    nome: "Malanje",
    regiao: "Norte-Centro",
    observacao:
      "A disponibilidade de terras agrícolas e condições agroclimáticas tornam importante a avaliação de cultivares e sistemas de rotação.",
  },
  {
    nome: "Moxico",
    regiao: "Leste",
    observacao:
      "A duração da estação chuvosa e as condições do solo devem orientar a escolha de ciclo e época de sementeira.",
  },
  {
    nome: "Moxico Leste",
    regiao: "Leste",
    observacao:
      "Dados históricos anteriores à actual divisão administrativa devem continuar associados à unidade territorial original.",
  },
  {
    nome: "Namibe",
    regiao: "Sudoeste",
    observacao:
      "O cultivo depende de disponibilidade segura de água; em ambiente árido, o regadio assume importância especial.",
  },
  {
    nome: "Uíge",
    regiao: "Norte",
    observacao:
      "A soja pode ser avaliada em sistemas de diversificação, mas a escolha do material deve considerar a elevada variabilidade ambiental.",
  },
  {
    nome: "Zaire",
    regiao: "Norte",
    observacao:
      "Drenagem, precipitação e sanidade devem ser consideradas na escolha do talhão e da cultivar.",
  },
];

const imagens: Record<string, Imagem> = {
  hero: {
    src: "https://www.retema.es/sites/default/files/2023-02/pdac_angola_plantacion_soja_1.jpg",
    href: "https://www.retema.es/actualidad/el-programa-de-desarrollo-que-desarrolla-incatema-en-angola-suma-casi-1000-solicitudes",
    alt: "Plantação de soja em Angola",
    legenda:
      "Plantação de soja em Angola, mostrando a cultura em fase vegetativa.",
    fonte: "RETE MA / PDAC Angola",
  },

  campoAngola: {
    src: "https://www.retema.es/sites/default/files/2023-02/pdac_angola_plantacion_soja_1.jpg",
    href: "https://www.retema.es/actualidad/el-programa-de-desarrollo-que-desarrolla-incatema-en-angola-suma-casi-1000-solicitudes",
    alt: "Soja cultivada em solo vermelho em Angola",
    legenda:
      "Campo de soja documentado em Angola durante uma actividade ligada ao desenvolvimento agrícola.",
    fonte: "RETE MA / PDAC",
  },

  graos: {
    src: "https://agroanuncios.ao/oc-content/uploads/14/2315.jpg",
    href: "https://agroanuncios.ao/produtos_1/produtos-do-campo_1/compro-soja-16-ton_i1403",
    alt: "Grãos de soja em Angola",
    legenda:
      "Grãos de soja apresentados num anúncio comercial de compra de soja para Benguela.",
    fonte: "AgroAnúncios Angola",
  },

  vagens: {
    src: "https://equityaxis.net/storage/2742/conversions/soybeans-featured.jpg",
    href: "https://equityaxis.net/post/19149/2026/6/zim-accounts-for-54-of-its-soybean-need-up-from-19-in-2015-highest-yield-post-land-reform",
    alt: "Vagens de soja em campo",
    legenda:
      "Vagens de soja em plantas em fase reprodutiva. Fotografia africana utilizada para explicar a morfologia da cultura.",
    fonte: "Equity Axis",
  },

  raizNodulos: {
    src: "https://agroacesso.com.br/storage/images/product/lg/BIOLOGICOS/Produto_Rizokop-TSI.png",
    href: "https://agroacesso.com.br/produtos/rizokop-tsi-bradyrhizobium-japonicum-cepas-5079-e-5080",
    alt: "Raízes de soja com nódulos",
    legenda:
      "Sistema radicular de soja com nódulos associados à fixação biológica de azoto.",
    fonte: "AgroAcesso",
  },

  colheitaAfrica: {
    src: "https://d1jyxxz9imt9yb.cloudfront.net/medialib/2703/image/s1300x1300/LC202204_TFCACOMACO_168_354632_reduced.jpg",
    href: "https://www.ifaw.org/nl/journal/klimaatslimme-landbouw-malawi-zambia",
    alt: "Colheita manual de soja em África",
    legenda:
      "Colheita manual de soja num sistema de agricultura familiar em África.",
    fonte: "IFAW / GIZ",
  },
};

const variedades: Variedade[] = [
  {
    nome: "SC Safari",
    estatuto: "Variedade comercial da Seed Co",
    descricao:
      "Material de soja apresentado pela Seed Co Angola entre as variedades destinadas às condições de produção da empresa no mercado angolano.",
    maturacao:
      "A página angolana não apresenta nesta ficha um número único de dias de maturação para a variedade.",
    caracteristicas: [
      "Variedade comercial de soja",
      "Apresentada pela Seed Co Angola",
      "Incluída no grupo de variedades descritas como estáveis entre ambientes",
      "Sensível ao fotoperíodo, como a soja em geral",
    ],
    observacao:
      "A presença no catálogo da empresa não significa que seja a melhor opção para todas as províncias. A escolha deve considerar zona agroecológica, ciclo e disponibilidade de semente.",
    imagem: imagens.campoAngola,
  },
  {
    nome: "SC Samba",
    estatuto: "Variedade comercial da Seed Co",
    descricao:
      "Variedade de soja comercializada/documentada pela Seed Co para os mercados africanos e incluída pela Seed Co Angola na sua orientação de produção.",
    maturacao:
      "O período exacto depende da região e do material comercial disponível; consultar a ficha oficial da semente.",
    caracteristicas: [
      "Boa estabilidade agronómica",
      "Utilizada em programas comerciais de soja",
      "Indicada pela Seed Co para diferentes ambientes",
      "Pode integrar rotação com milho",
    ],
    observacao:
      "Não apresentar o potencial comercial anunciado pela empresa como rendimento garantido do produtor.",
    imagem: imagens.campoAngola,
  },
  {
    nome: "SC Semeki",
    estatuto: "Variedade comercial da Seed Co",
    descricao:
      "Material incluído pela Seed Co Angola entre as variedades de soja apresentadas para diferentes ambientes de produção.",
    maturacao:
      "Consultar ficha de semente e recomendação local antes da compra.",
    caracteristicas: [
      "Variedade de soja",
      "Disponível na oferta da Seed Co Angola",
      "Orientada para produção em diferentes ambientes",
      "Adequada para sistemas comerciais de produção",
    ],
    observacao:
      "A adaptação efectiva deve ser verificada no ambiente de produção e com assistência técnica.",
    imagem: imagens.graos,
  },
  {
    nome: "SC Sepa",
    estatuto: "Variedade comercial da Seed Co",
    descricao:
      "Variedade de soja incluída pela Seed Co Angola na sua gama. A empresa descreve Sepa como uma variedade precoce em materiais técnicos do grupo.",
    maturacao:
      "Classificada pela Seed Co como precoce em documentação agronómica do grupo.",
    caracteristicas: [
      "Maturação precoce em documentação da Seed Co",
      "Boa adaptação a diferentes ambientes",
      "Pode ser utilizada em rotação soja/trigo em contextos onde essa recomendação seja aplicável",
      "Adaptada a cultivo em linhas mais estreitas segundo documentação do grupo",
    ],
    observacao:
      "Características agronómicas da Seed Co não devem ser interpretadas como garantia de rendimento em qualquer província angolana.",
    imagem: imagens.vagens,
  },
  {
    nome: "SC Squire",
    estatuto: "Variedade comercial da Seed Co",
    descricao:
      "Variedade de soja apresentada pela Seed Co Angola entre os materiais considerados estáveis em diferentes ambientes.",
    maturacao:
      "A duração do ciclo depende do ambiente; consultar ficha técnica actual da semente.",
    caracteristicas: [
      "Crescimento indeterminado em documentação agronómica da Seed Co",
      "Boa adaptação a determinados ambientes africanos",
      "Material comercial de soja",
      "Exige escolha correcta da época",
    ],
    observacao:
      "O desempenho depende de ambiente, fertilidade, população, sanidade e qualidade da semente.",
    imagem: imagens.campoAngola,
  },
  {
    nome: "Davis",
    estatuto: "Material histórico documentado para Angola",
    descricao:
      "Davis aparece em documentação técnica histórica sobre cultivo de soja em Angola.",
    maturacao:
      "Não apresentar como recomendação actual sem confirmação de disponibilidade e registo.",
    caracteristicas: [
      "Registo histórico",
      "Não é apresentado aqui como variedade comercial actual",
      "Útil para investigação histórica da introdução da soja em Angola",
    ],
    observacao:
      "Foi mantida apenas como referência histórica. A AGROINOVA não recomenda a sua aquisição sem fonte actual de sementes.",
    imagem: imagens.graos,
  },
  {
    nome: "Improved Pelican",
    estatuto: "Material histórico documentado para Angola",
    descricao:
      "Improved Pelican é referido em documentação técnica histórica sobre as variedades utilizadas em Angola.",
    maturacao:
      "Sem recomendação actual nesta página.",
    caracteristicas: [
      "Referência histórica",
      "Não confundir com variedades actualmente comercializadas",
      "Importante para documentação da evolução da cultura",
    ],
    observacao:
      "A presença na literatura histórica não significa disponibilidade actual no mercado angolano.",
    imagem: imagens.graos,
  },
  {
    nome: "IAC 70-25",
    estatuto: "Material histórico documentado",
    descricao:
      "IAC 70-25 aparece em documentação histórica sobre soja em Angola.",
    maturacao:
      "Sem recomendação actual nesta página.",
    caracteristicas: [
      "Material histórico",
      "Registado em documentação sobre produção de soja",
      "Não apresentado como semente actualmente recomendada",
    ],
    observacao:
      "Para uma recomendação actual é necessário verificar registo, disponibilidade e adaptação.",
    imagem: imagens.graos,
  },
];

const etapas = [
  {
    titulo: "1. Escolha do terreno",
    texto:
      "Seleccionar área com boa drenagem, sem encharcamento prolongado, com acesso à água quando necessário e histórico fitossanitário conhecido.",
  },
  {
    titulo: "2. Análise do solo",
    texto:
      "Avaliar pH, matéria orgânica, fósforo, potássio, acidez e outros indicadores necessários. A fertilização não deve ser definida apenas pela aparência do terreno.",
  },
  {
    titulo: "3. Escolha da variedade",
    texto:
      "Relacionar ciclo, hábito de crescimento, sensibilidade ao fotoperíodo, resistência a doenças, disponibilidade de semente e ambiente de produção.",
  },
  {
    titulo: "4. Preparação do terreno",
    texto:
      "Criar condições para bom contacto semente-solo, evitar compactação excessiva e preservar a estrutura e humidade do solo.",
  },
  {
    titulo: "5. Sementeira",
    texto:
      "Semear quando a humidade do solo for adequada e a época permitir que as fases reprodutiva e de maturação ocorram em condições favoráveis.",
  },
  {
    titulo: "6. Inoculação",
    texto:
      "Quando indicada, a inoculação deve utilizar inoculante compatível com soja e seguir as instruções do fabricante. Evitar exposição prolongada da semente tratada ao sol.",
  },
  {
    titulo: "7. Controlo de infestantes",
    texto:
      "Manter a cultura livre de competição principalmente no período inicial. O método deve considerar espécie de infestante, estádio e sistema de produção.",
  },
  {
    titulo: "8. Nutrição e água",
    texto:
      "Monitorizar desenvolvimento vegetativo, floração, formação de vagens e enchimento dos grãos. Défices durante fases críticas podem afectar o rendimento.",
  },
  {
    titulo: "9. Sanidade",
    texto:
      "Inspeccionar regularmente folhas, caules, raízes e vagens. Identificar correctamente a causa antes de seleccionar medidas de controlo.",
  },
  {
    titulo: "10. Colheita",
    texto:
      "Colher quando a cultura atingir maturidade fisiológica/comercial adequada, reduzindo o risco de debulha natural e perdas no campo.",
  },
];

const pragas = [
  {
    nome: "Lagartas desfolhadoras",
    dano:
      "Consomem folhas e podem reduzir a área fotossintética, especialmente quando o ataque ocorre em elevada intensidade.",
    manejo:
      "Monitorizar a lavoura e avaliar a intensidade do ataque antes de intervir.",
  },
  {
    nome: "Percevejos",
    dano:
      "Podem perfurar vagens e grãos em formação, afectando rendimento e qualidade.",
    manejo:
      "Aumentar a monitorização durante a formação e enchimento das vagens.",
  },
  {
    nome: "Afídeos",
    dano:
      "Sugam seiva e algumas espécies podem participar na transmissão de vírus.",
    manejo:
      "Favorecer monitorização e controlo integrado, preservando inimigos naturais.",
  },
  {
    nome: "Ácaros",
    dano:
      "Podem provocar pontuações, bronzeamento ou perda de vigor em condições favoráveis ao seu desenvolvimento.",
    manejo:
      "Verificar o verso das folhas e diferenciar sintomas de deficiência nutricional ou doença.",
  },
  {
    nome: "Gafanhotos",
    dano:
      "Podem causar desfolha, principalmente em zonas com elevada pressão de insectos.",
    manejo:
      "Monitorizar bordaduras e focos antes que a população se espalhe.",
  },
  {
    nome: "Pragas de armazenamento",
    dano:
      "Podem atacar os grãos após a colheita e comprometer qualidade comercial e germinação.",
    manejo:
      "Secar adequadamente, limpar o lote e utilizar armazenamento apropriado.",
  },
];

const doencas = [
  {
    nome: "Ferrugem da soja",
    sinais:
      "Pequenas lesões nas folhas que podem evoluir para pústulas e queda prematura de folhas.",
    manejo:
      "Monitorização frequente, cultivar adequada e intervenção baseada no risco e recomendação técnica.",
  },
  {
    nome: "Mancha olho-de-rã",
    sinais:
      "Lesões foliares circulares que podem apresentar centro mais claro e bordo definido.",
    manejo:
      "Semente de qualidade, rotação, monitorização e utilização de materiais com resistência quando disponíveis.",
  },
  {
    nome: "Mancha parda",
    sinais:
      "Lesões nas folhas que podem aumentar sob condições favoráveis de humidade.",
    manejo:
      "Reduzir condições favoráveis através de práticas culturais e utilizar material de qualidade.",
  },
  {
    nome: "Antracnose",
    sinais:
      "Pode afectar caules, folhas, vagens e sementes, sobretudo em ambientes favoráveis à doença.",
    manejo:
      "Semente sadia, rotação, higiene e acompanhamento fitossanitário.",
  },
  {
    nome: "Podridão radicular",
    sinais:
      "Falhas no estabelecimento, redução do vigor e deterioração do sistema radicular.",
    manejo:
      "Boa drenagem, qualidade da semente e prevenção de compactação/encharcamento.",
  },
  {
    nome: "Doenças bacterianas",
    sinais:
      "Podem provocar manchas e lesões em folhas e outros órgãos da planta.",
    manejo:
      "Utilizar semente de qualidade e evitar disseminação através de operações em culturas molhadas.",
  },
];

const referencias = [
  {
    titulo: "A Cultura da Soja no Alavancar do Agronegócio em Angola",
    instituicao: "PDAC Angola",
    ano: "2024",
    detalhe:
      "Artigo técnico sobre a importância, expansão, limitações tecnológicas e potencial económico da soja em Angola.",
    href: "https://pdac.ao/17529/",
  },
  {
    titulo: "Relatório da Campanha Agrícola 2019/2020",
    instituicao: "MINAGRIF / República de Angola",
    ano: "2019–2020",
    detalhe:
      "Apresenta produção, produtividade e distribuição por sector para soja e outras leguminosas/oleaginosas.",
    href: "https://rvaaatlas.sadc.int/media/352be47c-048c-40cc-8567-74d40ec147aa/5b3a7c6a-7572-4f3a-be0d-406bd7356e27/RCA%202019-2020-FINAL.pdf",
  },
  {
    titulo: "RAPP 2019–2020 — Explorações Agropecuárias e Aquícolas Empresariais",
    instituicao: "Instituto Nacional de Estatística",
    ano: "2019–2020",
    detalhe:
      "Regista 11.544 hectares de soja nas explorações empresariais abrangidas pelo recenseamento.",
    href: "https://www.fao.org/fileadmin/templates/ess/ess_test_folder/World_Census_Agriculture/WCA_2020/WCA_2020_new_doc/ANG_REP4_POR_2019_2020.pdf",
  },
  {
    titulo: "Seed Co Angola — Field Crops",
    instituicao: "Seed Co Angola",
    ano: "Actualização do site",
    detalhe:
      "Fonte para variedades comerciais apresentadas em Angola e orientações gerais de instalação e produção de soja.",
    href: "https://seedcogroup.com/angola/fieldcrops/pt/",
  },
  {
    titulo: "Características das variedades de soja Seed Co",
    instituicao: "Seed Co",
    ano: "Manual agronómico",
    detalhe:
      "Documento técnico com características de variedades, hábito de crescimento, altura e outras características agronómicas.",
    href: "https://seedcogroup.com/wp-content/uploads/2022/11/Agronomy-Manual.pdf",
  },
  {
    titulo:
      "Regulamento Técnico de Produção e Certificação de Sementes de Leguminosas/Oleaginosas ou Fibrosas",
    instituicao: "Ministério da Agricultura de Angola",
    ano: "2017",
    detalhe:
      "Estabelece normas técnicas para produção e certificação de sementes, incluindo soja.",
    href: "https://lex.ao/docs/ministerio-da-agricultura/2017/decreto-executivo-n-o-574-17-de-04-de-outubro/",
  },
  {
    titulo: "Normas sobre biossegurança relativa à gestão de sementes geneticamente modificadas",
    instituicao: "República de Angola",
    ano: "2026",
    detalhe:
      "Decreto Presidencial n.º 81/26, com normas para investigação, ensaios confinados, cultivo, fiscalização e coexistência de sementes geneticamente modificadas.",
    href: "https://lex.ao/docs/presidente-da-republica/2026/decreto-presidencial-n-o-81-26-de-29-de-abril/",
  },
];

function Foto({ imagem }: { imagem: Imagem }) {
  return (
    <figure className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
      <a
        href={imagem.href}
        target="_blank"
        rel="noreferrer"
        className="block overflow-hidden bg-stone-100"
      >
        <img
          src={imagem.src}
          alt={imagem.alt}
          loading="lazy"
          className="h-64 w-full object-cover transition duration-500 hover:scale-105"
        />
      </a>

      <figcaption className="p-4">
        <p className="text-sm leading-6 text-stone-700">
          {imagem.legenda}
        </p>

        <p className="mt-2 text-xs font-bold uppercase tracking-wide text-emerald-700">
          Fonte: {imagem.fonte}
        </p>
      </figcaption>
    </figure>
  );
}

export default function SojaPage() {
  const [provincia, setProvincia] = useState("Angola");
  const [pesquisa, setPesquisa] = useState("");

  const provinciaActual = useMemo(
    () => provincias.find((item) => item.nome === provincia),
    [provincia],
  );

  const variedadesFiltradas = useMemo(() => {
    const termo = pesquisa.trim().toLowerCase();

    if (!termo) return variedades;

    return variedades.filter((item) => {
      return (
        item.nome.toLowerCase().includes(termo) ||
        item.estatuto.toLowerCase().includes(termo) ||
        item.descricao.toLowerCase().includes(termo)
      );
    });
  }, [pesquisa]);

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      {/* HERO */}
      <section className="relative isolate min-h-[650px] overflow-hidden bg-stone-950">
        <img
          src={imagens.hero.src}
          alt={imagens.hero.alt}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/25" />

        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-end px-5 pb-16 pt-28 sm:px-8 lg:px-10">
          <div className="max-w-5xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-300">
              AGROINOVA ANGOLA · Agricultura
            </p>

            <h1 className="mt-4 text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
              Soja em Angola
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-stone-100 sm:text-xl">
              Guia nacional sobre variedades, sementes, solos, inoculação,
              instalação, nutrição, controlo de infestantes, pragas, doenças,
              colheita e pós-colheita da soja.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#variedades"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-500"
              >
                Variedades
              </a>

              <a
                href="#inoculacao"
                className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                Inoculação
              </a>

              <a
                href="#manejo"
                className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                Manejo
              </a>
            </div>

            <a
              href={imagens.hero.href}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block text-xs font-bold uppercase tracking-wider text-stone-300 underline underline-offset-4"
            >
              Ver fonte da fotografia
            </a>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-5 py-4 text-sm text-stone-600 sm:px-8 lg:px-10">
          <Link href="/" className="hover:text-emerald-700">
            Início
          </Link>

          <span>/</span>

          <Link href="/agricultura" className="hover:text-emerald-700">
            Agricultura
          </Link>

          <span>/</span>

          <span className="font-bold text-stone-900">Soja</span>
        </div>
      </div>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
              Glycine max (L.) Merr.
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Uma oleaginosa estratégica para Angola
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-stone-700">
              <p>
                A soja é uma leguminosa de elevado interesse para Angola por
                combinar produção de óleo e proteína vegetal e por poder
                integrar cadeias como alimentação animal, agroindústria e
                produção de sementes.
              </p>

              <p>
                O PDAC descreveu a expansão da cultura no país e apontou
                limitações relacionadas com o nível tecnológico e domínio dos
                processos de produção. A expansão sustentável exige, portanto,
                conhecimento agronómico, sementes de qualidade, assistência
                técnica e mercados.
              </p>

              <p>
                A cultura não deve ser tratada da mesma forma em todas as
                províncias. O ciclo, a época de sementeira, a cultivar, a
                fertilidade, a água e o fotoperíodo precisam ser considerados.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-emerald-950 p-8 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
              Nome científico
            </p>

            <p className="mt-3 text-3xl font-black italic">
              Glycine max (L.) Merr.
            </p>

            <div className="mt-8 border-t border-white/20 pt-6">
              <p className="text-sm font-bold text-emerald-300">
                Família
              </p>

              <p className="mt-2 text-lg font-semibold">
                Fabaceae
              </p>

              <p className="mt-5 text-sm leading-7 text-emerald-50">
                A soja é uma leguminosa capaz de estabelecer simbiose com
                bactérias fixadoras de azoto, formando nódulos nas raízes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DADOS */}
      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
              Dados oficiais históricos
            </p>

            <h2 className="mt-3 text-3xl font-black">
              O que os dados oficiais mostram
            </h2>

            <p className="mt-5 leading-8 text-stone-600">
              Os números abaixo pertencem a períodos estatísticos específicos.
              Não devem ser apresentados como produção actual de 2026.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <article className="rounded-3xl border border-stone-200 bg-stone-50 p-7">
              <p className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Área empresarial · RAPP
              </p>

              <p className="mt-3 text-4xl font-black">
                11 544 ha
              </p>

              <p className="mt-3 text-sm leading-7 text-stone-600">
                Área total de soja nas explorações empresariais abrangidas
                pelo RAPP 2019–2020.
              </p>
            </article>

            <article className="rounded-3xl border border-stone-200 bg-stone-50 p-7">
              <p className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Produção · Campanha 2019/20
              </p>

              <p className="mt-3 text-4xl font-black">
                37 961 t
              </p>

              <p className="mt-3 text-sm leading-7 text-stone-600">
                Resultado nacional apresentado no relatório da campanha
                agrícola 2019/2020.
              </p>
            </article>

            <article className="rounded-3xl border border-stone-200 bg-stone-50 p-7">
              <p className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Produtividade · Campanha
              </p>

              <p className="mt-3 text-4xl font-black">
                1 064 kg/ha
              </p>

              <p className="mt-3 text-sm leading-7 text-stone-600">
                Produtividade nacional apresentada no relatório da campanha
                agrícola 2019/2020.
              </p>
            </article>
          </div>

          <div className="mt-6 rounded-3xl bg-amber-50 p-6 text-sm leading-7 text-amber-950">
            <strong>Importante:</strong> estes valores não são redistribuídos
            pelas actuais 21 províncias. O RAPP pertence a uma configuração
            territorial anterior e deve ser conservado com a unidade,
            período e metodologia originais.
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="mb-9 max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
            Imagens reais
          </p>

          <h2 className="mt-3 text-3xl font-black">
            A soja do campo ao grão
          </h2>

          <p className="mt-4 leading-7 text-stone-600">
            As imagens são ligadas às suas fontes. Quando uma fotografia é
            apenas representativa da espécie e não identifica uma cultivar,
            isso é indicado.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Foto imagem={imagens.campoAngola} />
          <Foto imagem={imagens.graos} />
          <Foto imagem={imagens.vagens} />
          <Foto imagem={imagens.raizNodulos} />
          <Foto imagem={imagens.colheitaAfrica} />
        </div>
      </section>

      {/* VARIEDADES */}
      <section
        id="variedades"
        className="bg-stone-950 py-16 text-white"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
                Genética e sementes
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Variedades documentadas para Angola e referências históricas
              </h2>

              <p className="mt-5 max-w-4xl leading-8 text-stone-300">
                A lista combina materiais comerciais actualmente apresentados
                pela Seed Co Angola com materiais históricos encontrados em
                documentação técnica sobre a soja em Angola. O estatuto é
                indicado para evitar confundir uma variedade comercial actual
                com uma referência histórica.
              </p>
            </div>

            <div>
              <label
                htmlFor="pesquisa-soja"
                className="mb-2 block text-sm font-bold text-stone-200"
              >
                Pesquisar variedade
              </label>

              <input
                id="pesquisa-soja"
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
                placeholder="Ex.: Safari, Samba, Davis..."
                className="w-full rounded-2xl border border-stone-700 bg-stone-800 px-4 py-3 text-white outline-none placeholder:text-stone-500 focus:border-emerald-400"
              />
            </div>
          </div>

          <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {variedadesFiltradas.map((variedade) => (
              <article
                key={variedade.nome}
                className="overflow-hidden rounded-3xl border border-stone-700 bg-stone-900"
              >
                <a
                  href={variedade.imagem.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block overflow-hidden bg-stone-800"
                >
                  <img
                    src={variedade.imagem.src}
                    alt={variedade.imagem.alt}
                    loading="lazy"
                    className="h-60 w-full object-cover transition duration-500 hover:scale-105"
                  />
                </a>

                <div className="p-6">
                  <span className="inline-flex rounded-full bg-emerald-950 px-3 py-1 text-xs font-bold text-emerald-300">
                    {variedade.estatuto}
                  </span>

                  <h3 className="mt-4 text-2xl font-black">
                    {variedade.nome}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-stone-300">
                    {variedade.descricao}
                  </p>

                  <div className="mt-5 border-t border-stone-700 pt-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                      Maturação
                    </p>

                    <p className="mt-2 text-sm leading-6 text-stone-300">
                      {variedade.maturacao}
                    </p>
                  </div>

                  <div className="mt-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                      Características documentadas
                    </p>

                    <ul className="mt-3 space-y-2">
                      {variedade.caracteristicas.map((item) => (
                        <li
                          key={item}
                          className="rounded-xl bg-stone-800 px-4 py-3 text-sm leading-6 text-stone-300"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 rounded-2xl bg-amber-950/40 p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-amber-300">
                      Nota AGROINOVA
                    </p>

                    <p className="mt-2 text-sm leading-6 text-stone-300">
                      {variedade.observacao}
                    </p>
                  </div>

                  <a
                    href={variedade.imagem.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-block text-xs font-bold uppercase tracking-wider text-emerald-300 underline underline-offset-4"
                  >
                    Abrir fonte da imagem
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROVÍNCIAS */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
              Cobertura nacional
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Soja nas 21 províncias
            </h2>

            <p className="mt-5 leading-8 text-stone-600">
              Seleccione uma província para consultar a orientação de contexto
              utilizada pela AGROINOVA. A ausência de uma produtividade
              provincial não será preenchida com estimativas inventadas.
            </p>

            <select
              value={provincia}
              onChange={(e) => setProvincia(e.target.value)}
              className="mt-7 w-full rounded-2xl border border-stone-300 bg-white px-4 py-4 font-semibold outline-none focus:border-emerald-600"
            >
              <option value="Angola">
                Angola — visão nacional
              </option>

              {provincias.map((item) => (
                <option key={item.nome} value={item.nome}>
                  {item.nome}
                </option>
              ))}
            </select>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            {provincia === "Angola" ? (
              <>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                  Visão nacional
                </p>

                <h3 className="mt-3 text-3xl font-black">
                  Angola
                </h3>

                <p className="mt-5 leading-8 text-stone-700">
                  A soja possui potencial para diversificação do agronegócio,
                  mas o desempenho depende da combinação entre material
                  genético, época, solo, inoculação, nutrição, controlo de
                  infestantes, sanidade e mercado.
                </p>
              </>
            ) : (
              <>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                  {provinciaActual?.regiao}
                </p>

                <h3 className="mt-3 text-3xl font-black">
                  {provinciaActual?.nome}
                </h3>

                <p className="mt-5 leading-8 text-stone-700">
                  {provinciaActual?.observacao}
                </p>

                <div className="mt-6 rounded-2xl bg-amber-50 p-5 text-sm leading-7 text-amber-950">
                  Esta ficha não substitui um diagnóstico agroclimático e
                  pedológico do terreno. Os resultados de uma província não
                  devem ser transferidos automaticamente para outra.
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* SOLOS */}
      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
              Solo
            </p>

            <h2 className="mt-3 text-3xl font-black">
              A soja exige atenção à química e à estrutura do solo
            </h2>

            <p className="mt-5 leading-8 text-stone-600">
              A recomendação exacta depende da análise do terreno. De modo
              geral, a cultura beneficia de solos bem drenados e de fertilidade
              adequada, com especial atenção ao pH, fósforo, potássio, cálcio,
              enxofre e micronutrientes.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                titulo: "Drenagem",
                texto:
                  "Evitar encharcamento prolongado. O excesso de água reduz oxigenação radicular e favorece problemas de raiz.",
              },
              {
                titulo: "pH",
                texto:
                  "O valor adequado depende do solo e da recomendação local. A cor do solo não é suficiente para decidir a correcção.",
              },
              {
                titulo: "Fósforo",
                texto:
                  "É importante para o estabelecimento e desenvolvimento radicular. A dose deve partir da análise do solo.",
              },
              {
                titulo: "Potássio",
                texto:
                  "Participa em funções fisiológicas e no equilíbrio hídrico. A necessidade depende da fertilidade inicial e do objectivo produtivo.",
              },
            ].map((item) => (
              <article
                key={item.titulo}
                className="rounded-3xl border border-stone-200 bg-stone-50 p-6"
              >
                <h3 className="text-xl font-black">
                  {item.titulo}
                </h3>

                <p className="mt-3 text-sm leading-7 text-stone-600">
                  {item.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEMENTE */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Foto imagem={imagens.graos} />

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
              Semente
            </p>

            <h2 className="mt-3 text-3xl font-black">
              A produtividade começa antes da sementeira
            </h2>

            <p className="mt-5 leading-8 text-stone-700">
              A soja deve ser estabelecida com semente de qualidade conhecida,
              adequada à cultivar escolhida e conservada correctamente. O
              produtor deve verificar origem, lote, germinação, pureza,
              sanidade e condições de armazenamento.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Identidade varietal",
                "Boa germinação",
                "Pureza física",
                "Sanidade",
                "Vigor",
                "Armazenamento correcto",
                "Lote identificado",
                "Origem conhecida",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-stone-200 bg-white px-5 py-4 text-sm font-bold"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-3xl bg-emerald-50 p-6">
              <p className="font-black text-emerald-950">
                Regulamentação angolana
              </p>

              <p className="mt-2 text-sm leading-7 text-emerald-900">
                Angola possui regulamentação técnica específica para produção e
                certificação de sementes de leguminosas e oleaginosas,
                incluindo a soja.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INOCULAÇÃO */}
      <section
        id="inoculacao"
        className="bg-emerald-950 py-16 text-white"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
                Biologia do solo
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Inoculação e Bradyrhizobium
              </h2>

              <p className="mt-5 leading-8 text-emerald-50">
                A soja estabelece simbiose com bactérias capazes de fixar
                azoto atmosférico nos nódulos das raízes. Por isso, a
                inoculação pode ser uma componente importante do sistema de
                produção quando o solo ou o histórico da área não garantem
                uma população eficiente e compatível de bactérias.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Usar inoculante específico para soja.",
                  "Verificar validade e condições de conservação.",
                  "Seguir a dose indicada pelo fabricante.",
                  "Proteger a semente inoculada de calor e radiação solar intensa.",
                  "Evitar misturas incompatíveis.",
                  "Verificar formação de nódulos após emergência.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white/10 p-4 text-sm leading-6 text-emerald-50 ring-1 ring-white/10"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img
                src={imagens.raizNodulos.src}
                alt={imagens.raizNodulos.alt}
                className="w-full rounded-3xl object-cover"
              />

              <a
                href={imagens.raizNodulos.href}
                target="_blank"
                rel="noreferrer"
                className="mt-3 block text-xs font-bold uppercase tracking-wider text-emerald-300 underline underline-offset-4"
              >
                Fonte da fotografia
              </a>
            </div>
          </div>

          <div className="mt-12 rounded-3xl bg-white/10 p-7 ring-1 ring-white/10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
              Atenção
            </p>

            <p className="mt-3 max-w-5xl leading-8 text-emerald-50">
              Inocular não significa automaticamente produzir mais. O
              resultado depende da qualidade do inoculante, compatibilidade,
              viabilidade das bactérias, solo, cultivar, ambiente e manejo.
              Uma recomendação comercial deve ser baseada na ficha do produto
              e na assistência técnica.
            </p>
          </div>
        </div>
      </section>

      {/* MANEJO */}
      <section id="manejo" className="bg-stone-100 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
              Manejo da cultura
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Do preparo do terreno à colheita
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {etapas.map((etapa) => (
              <article
                key={etapa.titulo}
                className="rounded-3xl border border-stone-200 bg-white p-7"
              >
                <h3 className="text-xl font-black text-emerald-950">
                  {etapa.titulo}
                </h3>

                <p className="mt-3 leading-7 text-stone-600">
                  {etapa.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ESPAÇAMENTO */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-stone-950 p-8 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
              População e espaçamento
            </p>

            <h2 className="mt-3 text-3xl font-black">
              O espaçamento deve acompanhar a cultivar
            </h2>

            <p className="mt-5 leading-8 text-stone-300">
              A Seed Co descreve algumas das suas variedades como adequadas a
              cultivo em linhas mais estreitas. Porém, isso não significa que
              exista um único espaçamento nacional obrigatório.
            </p>

            <p className="mt-5 leading-8 text-stone-300">
              O compasso deve considerar hábito de crescimento, ciclo,
              fertilidade, água, mecanização e objectivo produtivo.
            </p>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-8">
            <h3 className="text-2xl font-black">
              Antes de definir o compasso
            </h3>

            <div className="mt-6 space-y-3">
              {[
                "Confirmar a cultivar.",
                "Verificar recomendação do fornecedor da semente.",
                "Definir população final pretendida.",
                "Considerar o equipamento disponível.",
                "Avaliar fertilidade e disponibilidade de água.",
                "Considerar se a produção é mecanizada.",
                "Registar o espaçamento utilizado no ensaio ou talhão.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-stone-100 px-5 py-4 text-sm font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOTOPERÍODO */}
      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
                Época de sementeira
              </p>

              <h2 className="mt-3 text-3xl font-black">
                A soja responde ao fotoperíodo
              </h2>

              <p className="mt-5 leading-8 text-stone-700">
                A soja é sensível à duração do dia. Por isso, uma variedade
                pode apresentar comportamento diferente quando transferida
                para outro ambiente. A época de sementeira deve permitir que
                o desenvolvimento vegetativo e reprodutivo ocorra dentro das
                condições adequadas para o material escolhido.
              </p>

              <div className="mt-7 rounded-3xl bg-emerald-50 p-6">
                <p className="font-black text-emerald-950">
                  Orientação Seed Co Angola
                </p>

                <p className="mt-2 text-sm leading-7 text-emerald-900">
                  A Seed Co orienta a sementeira quando o solo estiver húmido
                  e as chuvas estabilizadas, indicando geralmente meados de
                  Novembro a meados de Dezembro no contexto apresentado pela
                  empresa.
                </p>

                <p className="mt-3 text-xs leading-6 text-emerald-800">
                  Esta é uma orientação da empresa, não um calendário oficial
                  único para as 21 províncias.
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-stone-900 p-8 text-white">
              <h3 className="text-2xl font-black">
                O calendário deve responder a:
              </h3>

              <div className="mt-6 space-y-3">
                {[
                  "Início e distribuição das chuvas",
                  "Duração do ciclo da cultivar",
                  "Fotoperíodo",
                  "Temperatura",
                  "Disponibilidade de água",
                  "Momento desejado para a colheita",
                  "Risco de chuvas na maturação",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white/10 px-5 py-4 text-sm font-semibold"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRAGAS */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
            Protecção integrada
          </p>

          <h2 className="mt-3 text-3xl font-black">
            Principais grupos de pragas
          </h2>

          <p className="mt-4 leading-7 text-stone-600">
            A identificação deve preceder o controlo. O mesmo dano visual pode
            resultar de insectos, doenças, deficiência nutricional ou stress
            hídrico.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {pragas.map((praga) => (
            <article
              key={praga.nome}
              className="rounded-3xl border border-stone-200 bg-white p-7"
            >
              <h3 className="text-xl font-black">
                {praga.nome}
              </h3>

              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-rose-700">
                Dano
              </p>

              <p className="mt-2 text-sm leading-7 text-stone-600">
                {praga.dano}
              </p>

              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-emerald-700">
                Manejo
              </p>

              <p className="mt-2 text-sm leading-7 text-stone-600">
                {praga.manejo}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* DOENÇAS */}
      <section className="border-y border-stone-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-700">
              Sanidade
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Doenças da soja
            </h2>

            <p className="mt-4 leading-7 text-stone-600">
              O ambiente, a cultivar, a semente e a rotação influenciam o
              risco. A página não apresenta aplicação de pesticida como
              solução automática.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {doencas.map((doenca) => (
              <article
                key={doenca.nome}
                className="rounded-3xl bg-stone-50 p-7"
              >
                <h3 className="text-xl font-black">
                  {doenca.nome}
                </h3>

                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-rose-700">
                  Sinais
                </p>

                <p className="mt-2 text-sm leading-7 text-stone-600">
                  {doenca.sinais}
                </p>

                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Prevenção e manejo
                </p>

                <p className="mt-2 text-sm leading-7 text-stone-600">
                  {doenca.manejo}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ROTAÇÃO */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] bg-emerald-50 p-8 sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-800">
            Sistema de produção
          </p>

          <h2 className="mt-3 text-3xl font-black text-emerald-950">
            Soja e rotação de culturas
          </h2>

          <p className="mt-5 max-w-5xl leading-8 text-emerald-950">
            A soja pode integrar rotações com cereais, incluindo milho. A
            rotação ajuda a diversificar sistemas e pode contribuir para a
            gestão de alguns problemas fitossanitários. A sua utilização deve
            ser planeada considerando mercado, fertilidade, disponibilidade de
            sementes e logística.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-5">
              <p className="font-black">Soja → milho</p>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                Rotação amplamente utilizada em sistemas de produção de
                cereais e oleaginosas.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5">
              <p className="font-black">Soja → outra cultura</p>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                Pode ser escolhida para diversificar o sistema, dependendo do
                mercado e das condições do solo.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5">
              <p className="font-black">Evitar monocultura contínua</p>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                A sucessão repetida da mesma cultura pode aumentar pressão de
                determinadas pragas e doenças.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COLHEITA */}
      <section className="bg-stone-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
                Colheita
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Evitar perdas na maturação
              </h2>

              <p className="mt-5 leading-8 text-stone-300">
                Uma das perdas importantes da soja ocorre quando as vagens
                maduras se abrem e deixam cair os grãos antes da colheita.
                Por isso, o acompanhamento da maturação e a sincronização da
                colheita são essenciais.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "Monitorizar a mudança de cor das folhas e vagens.",
                  "Avaliar a humidade do grão antes da colheita.",
                  "Evitar atrasos excessivos depois da maturidade.",
                  "Regular correctamente a máquina quando houver mecanização.",
                  "Minimizar perdas no transporte.",
                  "Separar e limpar o lote após a colheita.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white/10 px-5 py-4 text-sm font-semibold"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <Foto imagem={imagens.colheitaAfrica} />
          </div>
        </div>
      </section>

      {/* PÓS-COLHEITA */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <Foto imagem={imagens.graos} />

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
              Pós-colheita
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Qualidade do grão e armazenamento
            </h2>

            <p className="mt-5 leading-8 text-stone-700">
              O grão deve ser limpo, seco e protegido de humidade, insectos,
              roedores e contaminação. Para semente, os cuidados devem ser
              ainda mais rigorosos porque a viabilidade e o vigor precisam ser
              preservados.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Secagem adequada",
                "Limpeza do lote",
                "Protecção contra insectos",
                "Boa ventilação",
                "Recipientes apropriados",
                "Separação de lotes",
                "Rastreabilidade",
                "Inspecção periódica",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-stone-200 bg-white px-5 py-4 text-sm font-bold"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MERCADO */}
      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
              Cadeia de valor
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Da produção à agroindústria
            </h2>

            <p className="mt-5 leading-8 text-stone-600">
              A importância da soja em Angola ultrapassa o campo. A cultura
              pode fornecer matéria-prima para óleo, farelo e outras cadeias
              agroindustriais, além de contribuir para a alimentação animal.
              Por isso, a decisão de plantar deve considerar também mercado,
              armazenamento, transporte e comprador.
            </p>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-4">
            {[
              "Semente",
              "Produção",
              "Beneficiamento",
              "Agroindústria",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-stone-200 bg-stone-50 p-7"
              >
                <h3 className="text-xl font-black">
                  {item}
                </h3>

                <p className="mt-3 text-sm leading-7 text-stone-600">
                  Etapa da cadeia que exige qualidade, logística e informação
                  adequada.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTIGAÇÃO */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
            Investigação e inovação
          </p>

          <h2 className="mt-3 text-3xl font-black">
            O que a investigação precisa responder
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Quais variedades apresentam melhor adaptação por zona agroecológica?",
              "Quais estirpes de Bradyrhizobium funcionam melhor nos diferentes solos?",
              "Qual população de plantas maximiza rendimento sem aumentar risco de acamamento?",
              "Quais são as melhores épocas de sementeira por região?",
              "Quais materiais apresentam maior tolerância à seca?",
              "Como reduzir perdas de colheita e pós-colheita?",
              "Como produzir semente certificada em maior escala?",
              "Como integrar soja e milho em rotações economicamente viáveis?",
              "Como ligar produtores às cadeias de processamento?",
            ].map((pergunta) => (
              <div
                key={pergunta}
                className="rounded-2xl bg-stone-50 p-5 text-sm leading-7 text-stone-700"
              >
                {pergunta}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REFERÊNCIAS */}
      <section className="border-t border-stone-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
              Fontes
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Referências técnicas e institucionais
            </h2>
          </div>

          <div className="mt-9 space-y-4">
            {referencias.map((ref, index) => (
              <a
                key={ref.titulo}
                href={ref.href}
                target="_blank"
                rel="noreferrer"
                className="group grid gap-4 rounded-3xl border border-stone-200 p-6 transition hover:border-emerald-500 hover:bg-emerald-50 md:grid-cols-[60px_1fr]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-950 text-sm font-black text-white group-hover:bg-emerald-700">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3 className="font-black text-stone-900">
                    {ref.titulo}
                  </h3>

                  <p className="mt-1 text-sm font-bold text-emerald-700">
                    {ref.instituicao} · {ref.ano}
                  </p>

                  <p className="mt-2 text-sm leading-7 text-stone-600">
                    {ref.detalhe}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRIDADE */}
      <section className="bg-amber-50">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
          <div className="rounded-3xl border border-amber-200 bg-white p-7">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-amber-800">
              Integridade científica
            </p>

            <div className="mt-5 space-y-4 leading-8 text-stone-700">
              <p>
                Uma variedade comercial não é automaticamente uma variedade
                recomendada para todas as províncias de Angola.
              </p>

              <p>
                Um rendimento potencial anunciado por uma empresa de sementes
                não é um rendimento garantido no campo.
              </p>

              <p>
                Dados históricos permanecem associados ao período e à
                configuração territorial em que foram recolhidos.
              </p>

              <p>
                Fotografias de soja são utilizadas para ilustrar a cultura
                quando não existe uma imagem validada especificamente para
                determinada cultivar. A AGROINOVA não utiliza uma fotografia
                genérica para afirmar identidade genética.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="border-t border-stone-800 bg-stone-950 py-12 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-stone-500">
            Continuar a explorar
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link
              href="/agricultura/feijao"
              className="rounded-3xl border border-stone-800 bg-stone-900 p-6 transition hover:border-emerald-500"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Cultura anterior
              </p>

              <p className="mt-2 text-2xl font-black">
                Feijão
              </p>
            </Link>

            <Link
              href="/agricultura"
              className="rounded-3xl border border-stone-800 bg-stone-900 p-6 transition hover:border-emerald-500"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Voltar
              </p>

              <p className="mt-2 text-2xl font-black">
                Agricultura
              </p>
            </Link>

            <Link
              href="/agricultura/batata-doce"
              className="rounded-3xl border border-emerald-700 bg-emerald-950 p-6 transition hover:bg-emerald-900"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Próxima cultura
              </p>

              <p className="mt-2 text-2xl font-black">
                Batata-doce
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}