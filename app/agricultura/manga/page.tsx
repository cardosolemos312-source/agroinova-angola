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
      "Província com produção comercial documentada de manga. Em 2025, o Governo Provincial informou que o Bengo já exportava manga, além de banana, café, pitaia, abacate e mamão.",
  },
  {
    nome: "Benguela",
    regiao: "Centro-Oeste",
    evidencia:
      "A província aparece entre as principais áreas produtoras de frutas na estatística nacional de 2021/2022, incluindo manga.",
  },
  {
    nome: "Bié",
    regiao: "Centro",
    evidencia:
      "A manga pode integrar sistemas frutícolas diversificados. O AGROINOVA não apresenta aqui um valor provincial de produção sem fonte específica.",
  },
  {
    nome: "Cabinda",
    regiao: "Norte",
    evidencia:
      "Cabinda aparece entre as províncias essencialmente produtoras de frutas na informação nacional de 2021/2022.",
  },
  {
    nome: "Cuando",
    regiao: "Sudeste",
    evidencia:
      "Não foi encontrado, para esta página, um valor recente específico de produção de manga separado para a actual província do Cuando.",
  },
  {
    nome: "Cubango",
    regiao: "Sudeste",
    evidencia:
      "Não foi encontrado, para esta página, um valor recente específico de produção de manga separado para a actual província do Cubango.",
  },
  {
    nome: "Cuanza Norte",
    regiao: "Norte",
    evidencia:
      "A fruticultura está presente na província, mas esta página não atribui uma produção de manga específica sem fonte provincial compatível.",
  },
  {
    nome: "Cuanza Sul",
    regiao: "Centro-Oeste",
    evidencia:
      "O Cuanza Sul está entre as províncias destacadas na produção nacional de frutas de 2021/2022.",
  },
  {
    nome: "Cunene",
    regiao: "Sul",
    evidencia:
      "A produção de manga depende fortemente da disponibilidade de água e das condições locais. Não é apresentado valor provincial inventado.",
  },
  {
    nome: "Huambo",
    regiao: "Centro",
    evidencia:
      "A manga pode integrar sistemas de fruticultura diversificados. A plataforma não atribui números sem fonte provincial específica.",
  },
  {
    nome: "Huíla",
    regiao: "Sul",
    evidencia:
      "Existem explorações frutícolas na província. O desempenho da mangueira depende de temperatura, altitude, água e escolha do material vegetal.",
  },
  {
    nome: "Icolo e Bengo",
    regiao: "Norte",
    evidencia:
      "É considerada na actual divisão administrativa. Não foram redistribuídos automaticamente dados históricos de outras unidades para esta província.",
  },
  {
    nome: "Luanda",
    regiao: "Norte",
    evidencia:
      "Existe consumo e comercialização de manga na província. A página não transforma dados de mercado em dados de produção.",
  },
  {
    nome: "Lunda Norte",
    regiao: "Leste",
    evidencia:
      "A cultura pode integrar sistemas frutícolas locais, mas não há aqui um valor provincial recente apresentado como oficial.",
  },
  {
    nome: "Lunda Sul",
    regiao: "Leste",
    evidencia:
      "A manga pode ser integrada na diversificação frutícola. Não são apresentados números sem confirmação documental.",
  },
  {
    nome: "Malanje",
    regiao: "Norte",
    evidencia:
      "A província possui condições para diversificação agrícola e frutícola. O AGROINOVA evita atribuir uma produção de manga não documentada.",
  },
  {
    nome: "Moxico",
    regiao: "Leste",
    evidencia:
      "A cultura pode integrar sistemas agrícolas diversificados, mas não é apresentado um número provincial sem fonte compatível.",
  },
  {
    nome: "Moxico Leste",
    regiao: "Leste",
    evidencia:
      "Não é apresentada uma série específica de manga para a actual província.",
  },
  {
    nome: "Namibe",
    regiao: "Sul",
    evidencia:
      "A produção comercial depende de irrigação e escolha adequada do local devido ao ambiente mais seco da província.",
  },
  {
    nome: "Uíge",
    regiao: "Norte",
    evidencia:
      "O Uíge aparece entre as províncias essencialmente produtoras de frutas no balanço nacional de 2021/2022.",
  },
  {
    nome: "Zaire",
    regiao: "Norte",
    evidencia:
      "A província apresenta condições para fruticultura tropical, mas não é apresentado nesta página um valor específico de manga sem fonte provincial.",
  },
];

const imagens: Imagem[] = [
  {
    src: "https://c2a.portais.gov.ao/uploads/MOS_c5f83001fa.jpg",
    href: "https://www.minagrif.gov.ao/",
    alt: "Mangas recém-colhidas em Angola",
    legenda:
      "Mangas recém-colhidas acondicionadas em caixa durante actividade ligada à produção e sanidade vegetal.",
    fonte: "Ministério da Agricultura e Florestas de Angola",
  },
  {
    src: "https://paiaki.com/storage/files/ao/20542/thumb-830x480-46a0311a24df21069c0376c373df47d3.jpg",
    href: "https://paiaki.com/formidavel-e-vasta-quinta-de-18-hectares-na-provincia-da-huila-municipio-do-lubango.-20542",
    alt: "Mangueiras numa exploração agrícola no Lubango",
    legenda:
      "Mangueiras instaladas em linhas numa exploração agrícola no Lubango, Huíla.",
    fonte: "Paiaki",
  },
  {
    src: "https://www.gettyimages.com/",
    href: "https://www.gettyimages.com/",
    alt: "Plantação de manga em Caxito, Bengo",
    legenda:
      "Plantação comercial de manga associada a uma exploração agrícola em Caxito, Bengo.",
    fonte: "Getty Images / Rodger Bosch",
  },
  {
    src: "https://agroanuncios.ao/oc-content/uploads/12/2139.jpg",
    href: "https://agroanuncios.ao/produtos_1/produtos-do-campo_1/vendo-caixa-de-manga_i1249",
    alt: "Mangas acondicionadas para comercialização em Angola",
    legenda:
      "Mangas acondicionadas em caixas para comercialização no mercado angolano.",
    fonte: "AgroAnúncios Angola",
  },
];

const fontes = [
  {
    titulo: "Governo de Angola — Produção agrícola 2021/2022",
    descricao:
      "Fonte utilizada para o dado nacional de 266.890 toneladas de manga e enquadramento das principais províncias produtoras de frutas.",
    url: "https://scm.gov.ao/web/noticias/angola-com-produ%C3%A7%C3%A3o-de-tr%C3%AAs-milh%C3%B5es-de-toneladas-de-cereais",
  },
  {
    titulo: "Governo Provincial do Bengo — Campanha Agrícola 2025/2026",
    descricao:
      "Informação recente sobre a produção frutícola do Bengo e a exportação de manga.",
    url: "https://bengo.gov.ao/web/noticias/bengo%3A-municipio-do-nambuangongo-acolheu-abertura-oficial-do-ano-agricola-20252026",
  },
  {
    titulo: "Governo Provincial do Bengo — Novagrolíder",
    descricao:
      "Visita oficial à Fazenda Novagrolíder em Caxito, onde são produzidas manga, banana, pitaia e papaia e existem viveiros de manga e citrinos.",
    url: "https://bengo.gov.ao/web/noticias/marco-mulher-mulheres-visitam-a-fazenda-novagrolider-no-bengo",
  },
  {
    titulo: "MINAGRIF — Certificação fitossanitária electrónica",
    descricao:
      "Informação sobre certificação fitossanitária e oportunidade de exportação de frutas angolanas, incluindo manga.",
    url: "https://minagrif.gov.ao/web/noticias/minagrif-lancou-o-processo-de-certificacao-fitossanitaria-electronica",
  },
  {
    titulo: "FAO AGRIS — Relações hídricas da mangueira",
    descricao:
      "Revisão científica sobre necessidades de água, raízes, floração e irrigação da mangueira.",
    url: "https://agris.fao.org/search/en/providers/122535/records/65dfdd524c5aef494fe60950",
  },
  {
    titulo: "FAO — Post-harvest Compendium: Mango",
    descricao:
      "Referência técnica para instalação, preparação, formação, poda e manejo pós-colheita.",
    url: "https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_Mango.pdf",
  },
  {
    titulo: "FAO AGRIS — Manejo de água e poda",
    descricao:
      "Estudo sobre poda, irrigação e eficiência de uso da água em pomares de manga.",
    url: "https://agris.fao.org/search/en/providers/122413/records/687a8246c90365bbc104636e",
  },
  {
    titulo: "FAO AGRIS — Manga em região semiárida",
    descricao:
      "Investigação internacional sobre irrigação deficitária controlada em manga Kent.",
    url: "https://agris.fao.org/search/en/providers/122419/records/6a96cbe539c6c869cfbc9309",
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

export default function MangaPage() {
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
      `${item.nome} ${item.regiao} ${item.evidencia}`
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
              Manga
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-emerald-50 md:text-xl">
              Guia técnico e académico sobre{" "}
              <em>Mangifera indica</em>, com enfoque na realidade agrícola de
              Angola: clima, solo, água, material de plantação, implantação do
              pomar, formação, poda, nutrição, floração, frutificação,
              sanidade, colheita, pós-colheita, comercialização e investigação.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <Tag>Mangifera indica</Tag>
              <Tag>Fruteiras</Tag>
              <Tag>Pomar</Tag>
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
            ["Nutrição", "nutricao"],
            ["Floração", "floracao"],
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
              className="whitespace-nowrap rounded-full px-4 py-2 font-semibold text-emerald-800 transition hover:bg-emerald-100"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <section id="visao-geral" className="scroll-mt-24">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card titulo="Importância agrícola">
              <p>
                A manga é uma das frutas tropicais de maior importância em
                Angola e integra tanto sistemas familiares como explorações
                empresariais.
              </p>

              <p>
                Na campanha agrícola 2021/2022, o Governo reportou{" "}
                <strong>266.890 toneladas de manga</strong> produzidas no país.
              </p>

              <p>
                Esse número deve ser interpretado como produção da campanha
                indicada, e não como produção actual de 2026.
              </p>
            </Card>

            <Card titulo="Cadeia de valor">
              <p>
                A cadeia da manga começa no viveiro e termina no consumidor.
                Entre esses pontos existem produção, colheita, selecção,
                acondicionamento, transporte, comercialização e, quando existe
                capacidade, processamento.
              </p>

              <p>
                A qualidade do fruto pode ser perdida muito antes da venda se
                houver colheita inadequada, danos mecânicos ou transporte sem
                protecção.
              </p>
            </Card>

            <Card titulo="Potencial de exportação">
              <p>
                O Bengo informa actualmente que já exporta manga, juntamente
                com banana, café, pitaia, abacate e mamão.
              </p>

              <p>
                Para exportação, produção elevada não é suficiente: é necessário
                cumprir requisitos de qualidade, rastreabilidade e sanidade
                vegetal.
              </p>
            </Card>
          </div>
        </section>

        <section className="mt-14">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              Campo e cadeia de valor
            </p>

            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              Manga em contextos agrícolas angolanos
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
              Conhecer a planta antes de manejar o pomar
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card titulo="Nome científico">
              <p>
                A espécie cultivada comercialmente é{" "}
                <strong>Mangifera indica L.</strong>, pertencente à família
                Anacardiaceae.
              </p>

              <p>
                Existem numerosas cultivares e tipos locais, com diferenças em
                tamanho, forma, cor, fibra, sabor, época de maturação e
                comportamento produtivo.
              </p>
            </Card>

            <Card titulo="Sistema radicular">
              <p>
                A mangueira desenvolve um sistema radicular capaz de explorar
                camadas profundas do solo quando as condições físicas permitem.
              </p>

              <p>
                Compactação, encharcamento e limitações químicas podem reduzir
                essa exploração.
              </p>
            </Card>

            <Card titulo="Tronco e copa">
              <p>
                É uma árvore perene que pode desenvolver copa volumosa.
              </p>

              <p>
                A arquitectura da copa influencia entrada de luz, ventilação,
                aplicação de tratamentos, colheita e produtividade.
              </p>
            </Card>

            <Card titulo="Folhas">
              <p>
                As folhas são órgãos fundamentais para a fotossíntese e para o
                suporte do crescimento e enchimento dos frutos.
              </p>

              <p>
                Uma poda excessiva pode reduzir a capacidade produtiva da
                planta.
              </p>
            </Card>

            <Card titulo="Inflorescências">
              <p>
                A mangueira forma panículas florais que podem conter grande
                número de flores.
              </p>

              <p>
                Apenas uma pequena fracção das flores normalmente chega à
                maturação como fruto.
              </p>
            </Card>

            <Card titulo="Fruto">
              <p>
                O fruto apresenta grande diversidade de tamanho, formato, cor,
                textura, aroma e teor de fibra.
              </p>

              <p>
                A escolha da cultivar deve considerar tanto o ambiente como o
                mercado de destino.
              </p>
            </Card>
          </div>
        </section>

        <section id="clima" className="mt-14 scroll-mt-24">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              02 • Clima
            </p>

            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              Temperatura, chuva e estação seca
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card titulo="Temperatura">
              <p>
                A mangueira é uma espécie tropical e subtropical e responde
                fortemente à temperatura durante crescimento, floração e
                frutificação.
              </p>

              <p>
                Uma referência internacional recente indica condições
                favoráveis de desenvolvimento em regiões com temperaturas
                médias anuais aproximadamente entre 22 e 27 °C. Esse intervalo
                é uma referência agroclimática geral, não uma recomendação
                específica para cada província angolana.
              </p>
            </Card>

            <Card titulo="Período seco">
              <p>
                Em ambientes tropicais, um período relativamente seco pode
                favorecer a indução floral, desde que não resulte em stress
                excessivo ou danos à planta.
              </p>

              <p>
                O comportamento da floração varia com clima, cultivar, idade da
                planta e manejo.
              </p>
            </Card>

            <Card titulo="Chuva">
              <p>
                Chuvas durante a floração podem afectar polinização, sanidade
                floral e pegamento, dependendo da intensidade e duração.
              </p>

              <p>
                Chuvas fortes próximas da colheita também podem aumentar riscos
                de doenças e comprometer a qualidade dos frutos.
              </p>
            </Card>

            <Card titulo="Vento">
              <p>
                Ventos fortes podem causar quebra de ramos, queda de frutos e
                danos mecânicos.
              </p>

              <p>
                A implantação do pomar deve considerar exposição, topografia e
                protecção contra ventos dominantes.
              </p>
            </Card>
          </div>

          <div className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-900 p-7 text-emerald-50">
            <h3 className="text-xl font-bold text-white">
              Não existe uma receita climática única para Angola
            </h3>

            <p className="mt-3 leading-8">
              Bengo, Uíge, Cabinda, Benguela, Cuanza Sul, Huíla e outras
              províncias apresentam ambientes distintos. A escolha da área deve
              cruzar temperatura, precipitação, duração da estação seca,
              altitude, solo e disponibilidade de água.
            </p>
          </div>
        </section>

        <section id="solo" className="mt-14 scroll-mt-24">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              03 • Solo
            </p>

            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              O solo determina parte do potencial do pomar
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card titulo="Profundidade">
              <p>
                Solos profundos permitem melhor exploração radicular e maior
                volume de solo disponível para água e nutrientes.
              </p>
            </Card>

            <Card titulo="Drenagem">
              <p>
                A mangueira não deve ser instalada em zonas com encharcamento
                persistente.
              </p>

              <p>
                A drenagem deve ser analisada antes da instalação do pomar.
              </p>
            </Card>

            <Card titulo="Estrutura">
              <p>
                Estrutura favorável, boa porosidade e ausência de camadas
                compactadas contribuem para o desenvolvimento radicular.
              </p>
            </Card>

            <Card titulo="Matéria orgânica">
              <p>
                A matéria orgânica contribui para a estrutura e actividade
                biológica do solo e pode melhorar a retenção de água.
              </p>
            </Card>

            <Card titulo="Fertilidade">
              <p>
                A fertilização deve ser baseada em análise do solo e, quando
                possível, análise foliar.
              </p>

              <p>
                Não é recomendável transformar doses genéricas encontradas na
                internet em recomendações automáticas para Angola.
              </p>
            </Card>

            <Card titulo="Erosão">
              <p>
                Pomares instalados em terrenos inclinados devem incorporar
                medidas de conservação do solo e da água.
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
              Viveiro, muda e instalação do pomar
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card titulo="Material vegetal">
              <p>
                Para uma plantação comercial, o material vegetal deve ser
                identificado e sanitariamente adequado.
              </p>

              <p>
                Plantas enxertadas permitem maior uniformidade e podem entrar em
                produção mais cedo que plantas obtidas de semente, dependendo
                das condições.
              </p>
            </Card>

            <Card titulo="Sementes">
              <p>
                Plantas provenientes de sementes não devem ser tratadas como
                geneticamente equivalentes a uma cultivar comercial específica.
              </p>

              <p>
                A variabilidade das plantas de semente é importante quando o
                objectivo é conservar diversidade genética, mas pode ser
                indesejável para um pomar comercial uniforme.
              </p>
            </Card>

            <Card titulo="Viveiro">
              <p>
                O viveiro deve fornecer plantas vigorosas, bem formadas e livres
                de sintomas de doenças e pragas.
              </p>

              <p>
                A identificação da origem do material é importante para
                rastreabilidade.
              </p>
            </Card>

            <Card titulo="Cova e plantação">
              <p>
                A preparação da cova deve permitir bom estabelecimento das
                raízes.
              </p>

              <p>
                A união de enxertia, quando existente, deve permanecer acima do
                nível do solo. A referência FAO recomenda plantar a muda
                aproximadamente à mesma profundidade em que estava no viveiro.
              </p>
            </Card>

            <Card titulo="Espaçamento">
              <p>
                O espaçamento depende do vigor da cultivar, sistema de condução,
                fertilidade, disponibilidade de água, mecanização e objectivo
                produtivo.
              </p>

              <p>
                Sistemas intensivos e tradicionais não devem ser tratados com o
                mesmo espaçamento.
              </p>
            </Card>

            <Card titulo="Época de plantação">
              <p>
                Em sistemas dependentes de chuva, a instalação no início de uma
                estação chuvosa bem estabelecida pode facilitar o pegamento.
              </p>

              <p>
                Com irrigação controlada, existe maior flexibilidade, desde que
                a água e as condições do solo sejam adequadas.
              </p>
            </Card>
          </div>
        </section>

        <section id="nutricao" className="mt-14 scroll-mt-24">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              05 • Nutrição
            </p>

            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              Fertilidade não significa simplesmente aplicar mais adubo
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card titulo="Diagnóstico">
              <p>
                O primeiro passo é conhecer o solo: pH, matéria orgânica,
                nutrientes disponíveis, textura e possíveis limitações.
              </p>
            </Card>

            <Card titulo="Nitrogénio">
              <p>
                O nitrogénio participa no crescimento vegetativo, mas excesso
                pode favorecer crescimento demasiado vigoroso e desequilíbrios
                entre vegetação e produção.
              </p>
            </Card>

            <Card titulo="Potássio">
              <p>
                O potássio é importante para vários processos fisiológicos,
                incluindo transporte de assimilados, equilíbrio hídrico e
                qualidade dos frutos.
              </p>
            </Card>

            <Card titulo="Fósforo">
              <p>
                O fósforo participa no metabolismo energético e desenvolvimento
                radicular. A necessidade deve ser determinada pelo diagnóstico
                do solo.
              </p>
            </Card>

            <Card titulo="Micronutrientes">
              <p>
                Deficiências de micronutrientes podem afectar crescimento,
                floração e qualidade. Diagnóstico visual isolado pode conduzir a
                erros.
              </p>
            </Card>

            <Card titulo="Matéria orgânica">
              <p>
                Composto e matéria orgânica bem estabilizada podem integrar o
                sistema de fertilidade, sobretudo em solos com baixa matéria
                orgânica.
              </p>
            </Card>
          </div>
        </section>

        <section id="floracao" className="mt-14 scroll-mt-24">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              06 • Floração e frutificação
            </p>

            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              Uma fase decisiva para o rendimento
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card titulo="Indução floral">
              <p>
                A floração da mangueira responde às condições ambientais,
                incluindo temperatura e disponibilidade de água.
              </p>

              <p>
                Em ambientes tropicais, períodos de stress hídrico podem
                participar da indução floral, mas stress excessivo pode
                prejudicar a planta.
              </p>
            </Card>

            <Card titulo="Polinização">
              <p>
                A formação do fruto depende da floração, polinização,
                fecundação e condições ambientais.
              </p>

              <p>
                Temperatura, chuva, vento e actividade de polinizadores podem
                interferir no processo.
              </p>
            </Card>

            <Card titulo="Queda natural de frutos">
              <p>
                É normal que grande quantidade de flores e pequenos frutos não
                chegue à maturação.
              </p>

              <p>
                A avaliação de produtividade deve considerar o comportamento
                fisiológico da cultura.
              </p>
            </Card>

            <Card titulo="Carga da árvore">
              <p>
                Árvores com excesso de frutos podem apresentar frutos menores e
                maior desgaste fisiológico.
              </p>

              <p>
                A gestão da carga depende da cultivar, vigor, disponibilidade de
                água, nutrição e objectivo comercial.
              </p>
            </Card>
          </div>
        </section>

        <section id="sanidade" className="mt-14 scroll-mt-24">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              07 • Sanidade vegetal
            </p>

            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              Monitorização antes do tratamento
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card titulo="Mosca-da-fruta">
              <p>
                As moscas-das-frutas podem provocar perdas directas ao
                depositarem ovos nos frutos, permitindo desenvolvimento das
                larvas e favorecendo deterioração.
              </p>

              <p>
                Monitorização, higiene do pomar, recolha de frutos afectados e
                estratégias de controlo integrado devem fazer parte do manejo.
              </p>
            </Card>

            <Card titulo="Antracnose">
              <p>
                Doenças fúngicas como antracnose podem afectar flores, folhas e
                frutos, sobretudo sob condições ambientais favoráveis.
              </p>

              <p>
                A gestão da copa e redução de fontes de inóculo são componentes
                importantes do manejo integrado.
              </p>
            </Card>

            <Card titulo="Oídio">
              <p>
                O oídio pode afectar estruturas florais e tecidos jovens.
              </p>

              <p>
                A identificação correcta da doença é necessária antes da escolha
                de qualquer fungicida.
              </p>
            </Card>

            <Card titulo="Cochonilhas e insectos sugadores">
              <p>
                Insectos sugadores podem afectar folhas, ramos e frutos e podem
                produzir secreções que favorecem fumagina.
              </p>

              <p>
                A presença de inimigos naturais deve ser considerada antes de
                intervenções químicas.
              </p>
            </Card>

            <Card titulo="Ácaros">
              <p>
                Ácaros podem causar alterações na folhagem e afectar tecidos
                jovens em condições favoráveis.
              </p>

              <p>
                O diagnóstico deve distinguir danos de ácaros de sintomas
                nutricionais ou de outras causas.
              </p>
            </Card>

            <Card titulo="Manejo integrado">
              <p>
                O programa sanitário deve combinar monitorização, higiene,
                material vegetal saudável, conservação de inimigos naturais e
                utilização criteriosa de produtos fitossanitários quando
                necessários.
              </p>
            </Card>
          </div>

          <div className="mt-6 rounded-3xl border border-amber-200 bg-amber-50 p-6">
            <h3 className="font-bold text-amber-900">
              Para exportação, a sanidade é também uma questão comercial
            </h3>

            <p className="mt-2 text-sm leading-7 text-amber-950">
              Angola lançou em 2025 um processo de certificação fitossanitária
              electrónica. O sistema procura melhorar eficiência e segurança no
              comércio internacional de produtos vegetais. Para a manga
              destinada à exportação, a produção deve ser acompanhada por
              requisitos fitossanitários e de rastreabilidade.
            </p>
          </div>
        </section>

        <section id="colheita" className="mt-14 scroll-mt-24">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              08 • Colheita e pós-colheita
            </p>

            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              A qualidade começa antes do corte
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card titulo="Maturidade">
              <p>
                A manga deve ser colhida de acordo com o destino comercial e o
                estádio fisiológico adequado.
              </p>

              <p>
                Colheita demasiado precoce prejudica sabor e qualidade; colheita
                demasiado tardia aumenta risco de perdas e danos.
              </p>
            </Card>

            <Card titulo="Corte">
              <p>
                A colheita deve evitar queda livre dos frutos e contacto
                desnecessário com o solo.
              </p>
            </Card>

            <Card titulo="Danos mecânicos">
              <p>
                Pancadas, cortes e compressão aceleram deterioração e podem
                favorecer podridões.
              </p>
            </Card>

            <Card titulo="Selecção">
              <p>
                Frutos danificados, doentes ou fora do padrão comercial devem
                ser separados.
              </p>
            </Card>

            <Card titulo="Acondicionamento">
              <p>
                Caixas adequadas reduzem pressão e abrasão durante transporte.
              </p>
            </Card>

            <Card titulo="Transporte">
              <p>
                Distância, temperatura, ventilação e tempo de transporte devem
                ser considerados na definição do sistema pós-colheita.
              </p>
            </Card>
          </div>
        </section>

        <section id="angola" className="mt-14 scroll-mt-24">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              09 • Manga em Angola
            </p>

            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              Dados, produção comercial e oportunidades
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <Card titulo="Produção nacional 2021/2022">
              <p className="text-4xl font-black text-emerald-700">
                266 890 t
              </p>

              <p>
                Produção de manga reportada no balanço da campanha agrícola
                2021/2022.
              </p>

              <p className="text-xs text-slate-500">
                Dado histórico de campanha. Não representa automaticamente a
                produção de 2026.
              </p>
            </Card>

            <Card titulo="Principais zonas frutícolas">
              <p>
                O balanço nacional indicou Benguela, Cuanza Sul, Uíge, Bengo e
                Cabinda entre as províncias onde se concentrava essencialmente
                a produção de frutas considerada naquele período.
              </p>
            </Card>

            <Card titulo="Bengo actualmente">
              <p>
                Em 2025/2026, o Governo Provincial do Bengo informou que a
                província já exportava manga, demonstrando a existência de uma
                cadeia com orientação para mercados além do consumo local.
              </p>
            </Card>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Card titulo="Novagrolíder — Caxito">
              <p>
                Uma visita oficial realizada em Março de 2025 à Fazenda
                Novagrolíder, em Caxito, documentou produção de manga e
                existência de viveiros de manga e citrinos.
              </p>

              <p>
                A fazenda integra uma cadeia empresarial de frutas tropicais e
                serve como exemplo de produção comercial, mas não deve ser
                confundida com uma representação de todos os produtores
                angolanos.
              </p>
            </Card>

            <Card titulo="Bengo e diversificação">
              <p>
                O Governo Provincial do Bengo tem destacado a banana, manga,
                abacate, mamão, café e outras culturas dentro da estratégia de
                diversificação agrícola.
              </p>

              <p>
                A manga pode participar dessa diversificação através de
                produção fresca, comercialização organizada e processamento.
              </p>
            </Card>
          </div>
        </section>

        <section id="provincias" className="mt-14 scroll-mt-24">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              10 • Distribuição territorial
            </p>

            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              Manga nas 21 províncias
            </h2>

            <p className="mt-3 max-w-4xl text-slate-600">
              Esta ferramenta não transforma ausência de estatística provincial
              em zero. Quando não existe uma fonte compatível, o AGROINOVA
              assinala a lacuna.
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
                placeholder="Ex.: Bengo, Uíge, Huíla..."
                className="mt-2 w-full rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
              />

              <div className="mt-4 max-h-[520px] space-y-2 overflow-y-auto pr-1">
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
                    <span className="block font-semibold">{item.nome}</span>

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

        <section id="investigacao" className="mt-14 scroll-mt-24">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              11 • Investigação
            </p>

            <h2 className="mt-2 text-3xl font-black text-emerald-950">
              Perguntas que Angola ainda precisa responder
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card titulo="Genética">
              <p>
                Quais cultivares apresentam melhor adaptação às diferentes
                zonas agroecológicas de Angola?
              </p>
            </Card>

            <Card titulo="Material vegetal">
              <p>
                Qual é o desempenho comparativo de mudas enxertadas, plantas de
                semente e outros materiais utilizados pelos produtores?
              </p>
            </Card>

            <Card titulo="Água">
              <p>
                Quais estratégias de irrigação permitem produzir manga com
                maior eficiência no uso da água nas zonas semiáridas?
              </p>
            </Card>

            <Card titulo="Floração">
              <p>
                Como temperatura, precipitação e disponibilidade de água
                influenciam a floração das principais cultivares cultivadas em
                Angola?
              </p>
            </Card>

            <Card titulo="Sanidade">
              <p>
                Qual é a distribuição das principais pragas e doenças da manga
                nas diferentes zonas produtoras?
              </p>
            </Card>

            <Card titulo="Moscas-das-frutas">
              <p>
                Qual é a distribuição espacial das espécies de moscas-das-frutas
                associadas à manga em Angola e quais métodos de controlo
                apresentam melhor relação custo-benefício?
              </p>
            </Card>

            <Card titulo="Pós-colheita">
              <p>
                Onde se concentram as perdas entre colheita, transporte,
                mercado grossista, venda informal e consumidor?
              </p>
            </Card>

            <Card titulo="Exportação">
              <p>
                Quais são os principais obstáculos para pequenos e médios
                produtores entrarem em cadeias formais de exportação?
              </p>
            </Card>

            <Card titulo="Processamento">
              <p>
                Que oportunidades existem para polpa, sumos, fruta desidratada,
                compotas e outros produtos derivados da manga?
              </p>
            </Card>
          </div>
        </section>

        <section className="mt-14">
          <div className="rounded-3xl bg-emerald-950 p-8 text-white">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-300">
              Ficha de observação de campo
            </p>

            <h2 className="mt-3 text-3xl font-black">
              O que um técnico deve observar num pomar de manga
            </h2>

            <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Origem e identificação das plantas",
                "Estado sanitário do viveiro",
                "Profundidade e drenagem do solo",
                "Cobertura e conservação do solo",
                "Disponibilidade de água",
                "Sistema de irrigação",
                "Arquitectura da copa",
                "Estado das folhas",
                "Floração",
                "Pegamento dos frutos",
                "Carga por árvore",
                "Presença de pragas",
                "Sintomas de doenças",
                "Maturidade dos frutos",
                "Danos durante colheita",
                "Condições de armazenamento",
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

        <section className="mt-14">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card titulo="Manga fresca">
              <p>
                A utilização como fruta fresca continua a ser o principal
                destino em muitos sistemas.
              </p>

              <p>
                A qualidade comercial depende de calibre, aparência, firmeza,
                sabor, ausência de danos e estádio adequado de maturação.
              </p>
            </Card>

            <Card titulo="Processamento">
              <p>
                Manga pode ser utilizada para produção de polpa, sumos,
                compotas, purés, fruta seca e outros derivados.
              </p>

              <p>
                O processamento pode reduzir perdas de frutos que não atendem a
                determinados padrões visuais, desde que apresentem qualidade
                sanitária adequada.
              </p>
            </Card>
          </div>
        </section>

        <section id="fontes" className="mt-14 scroll-mt-24">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              12 • Fontes
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
                O valor de 266.890 toneladas corresponde à campanha agrícola
                2021/2022 e não deve ser apresentado como produção actual de
                2026.
              </p>

              <p>
                A informação provincial é tratada com cautela. Quando uma fonte
                nacional identifica um conjunto de províncias como principais
                áreas produtoras, isso não significa que exista uma produção
                igual ou determinada para cada uma delas.
              </p>

              <p>
                O AGROINOVA não inventa produtividade, área, número de
                produtores ou rendimento provincial quando a fonte consultada
                não apresenta esses valores.
              </p>

              <p>
                Os resultados internacionais de investigação apresentados nesta
                página são referências técnicas. Não devem ser confundidos com
                ensaios realizados em Angola.
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
                href="/agricultura/banana"
                className="rounded-2xl border border-emerald-200 bg-white p-5 font-bold text-emerald-900 transition hover:bg-emerald-100"
              >
                ← Banana
              </Link>

              <Link
                href="/agricultura"
                className="rounded-2xl border border-emerald-200 bg-white p-5 text-center font-bold text-emerald-900 transition hover:bg-emerald-100"
              >
                Todas as culturas
              </Link>

              <Link
                href="/agricultura/abacaxi"
                className="rounded-2xl border border-emerald-200 bg-white p-5 text-right font-bold text-emerald-900 transition hover:bg-emerald-100"
              >
                Próxima cultura: Abacaxi →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}