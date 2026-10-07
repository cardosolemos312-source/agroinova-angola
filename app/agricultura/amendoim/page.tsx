"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";

type Provincia = {
  nome: string;
  destaque: string;
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
    destaque: "Expressão histórica relevante",
    observacao:
      "O RAPP 2019/2020 registou participação importante das explorações familiares na cultura da ginguba.",
  },
  {
    nome: "Benguela",
    destaque: "Produção familiar",
    observacao:
      "A cultura aparece entre as oleaginosas praticadas pelas explorações agrícolas familiares.",
  },
  {
    nome: "Bié",
    destaque: "Produção familiar",
    observacao:
      "A ginguba integra o conjunto de culturas de sequeiro praticadas no território provincial.",
  },
  {
    nome: "Cabinda",
    destaque: "Elevada adopção no RAPP",
    observacao:
      "O RAPP 2019/2020 registou elevada proporção de EAPF que praticavam ginguba.",
  },
  {
    nome: "Cuando",
    destaque: "Referência territorial actual",
    observacao:
      "Os dados históricos do RAPP referem-se à configuração territorial anterior.",
  },
  {
    nome: "Cubango",
    destaque: "Referência territorial actual",
    observacao:
      "Não se deve redistribuir automaticamente valores históricos do antigo Cuando Cubango.",
  },
  {
    nome: "Cuanza Norte",
    destaque: "Uma das áreas de maior expressão",
    observacao:
      "O RAPP 2019/2020 identificou forte presença da ginguba entre as explorações familiares.",
  },
  {
    nome: "Cuanza Sul",
    destaque: "Importância produtiva",
    observacao:
      "Documentos nacionais anteriores destacam o Cuanza Sul na cadeia de valor do amendoim.",
  },
  {
    nome: "Cunene",
    destaque: "Produção em sistemas de sequeiro",
    observacao:
      "A cultura está presente, embora com menor proporção de EAPF no RAPP em comparação com várias províncias do norte.",
  },
  {
    nome: "Huambo",
    destaque: "Cultura de diversificação",
    observacao:
      "A ginguba integra os sistemas agrícolas familiares da região central.",
  },
  {
    nome: "Huíla",
    destaque: "Produção familiar e experiências recentes",
    observacao:
      "Há experiências recentes de melhoria do manejo de culturas alimentares e oleaginosas.",
  },
  {
    nome: "Icolo e Bengo",
    destaque: "Província da configuração actual",
    observacao:
      "Não existe equivalência automática com os dados da antiga província de Luanda.",
  },
  {
    nome: "Luanda",
    destaque: "Registo histórico",
    observacao:
      "Os dados históricos devem ser lidos segundo a divisão administrativa utilizada na fonte original.",
  },
  {
    nome: "Lunda Norte",
    destaque: "Presença significativa",
    observacao:
      "O RAPP 2019/2020 registou participação das explorações familiares na produção de ginguba.",
  },
  {
    nome: "Lunda Sul",
    destaque: "Produção familiar",
    observacao:
      "A cultura aparece entre as oleaginosas cultivadas pelas famílias agrícolas.",
  },
  {
    nome: "Malanje",
    destaque: "Cultura de diversificação",
    observacao:
      "A ginguba integra os sistemas de produção agrícola familiar da região norte-central.",
  },
  {
    nome: "Moxico",
    destaque: "Produção familiar",
    observacao:
      "A cultura está presente nos sistemas agrícolas da província.",
  },
  {
    nome: "Moxico Leste",
    destaque: "Nova configuração provincial",
    observacao:
      "Os dados históricos anteriores não devem ser repartidos automaticamente entre Moxico e Moxico Leste.",
  },
  {
    nome: "Namibe",
    destaque: "Produção em ambientes mais secos",
    observacao:
      "O cultivo requer atenção especial ao calendário hídrico e à escolha do solo.",
  },
  {
    nome: "Uíge",
    destaque: "Uma das maiores expressões",
    observacao:
      "O RAPP 2019/2020 identificou o Uíge entre as províncias com maior protagonismo na cultura.",
  },
  {
    nome: "Zaire",
    destaque: "Maior expressão no RAPP",
    observacao:
      "O RAPP 2019/2020 registou o Zaire como uma das províncias de maior protagonismo da ginguba.",
  },
];

const imagens: Imagem[] = [
  {
    src: "https://www.wvi.org/sites/default/files/inline-images/Northern%20Angola.jpg",
    href: "https://www.wvi.org/stories/global-hunger-crisis/transformative-impact-school-meals-northern-angola",
    alt: "Ginguba sendo seleccionada numa comunidade do norte de Angola",
    legenda:
      "Selecção e manuseamento de ginguba numa experiência comunitária no norte de Angola.",
    fonte: "World Vision International — Northern Angola",
  },
  {
    src: "https://assets.website-files.com/64877880cd79ee4fea4032cf/64ae1d210bf39682b9ca22e7_menina-com-mucua.jpg",
    href: "https://fbs.ao/",
    alt: "Colheita de amendoim em ambiente rural angolano",
    legenda:
      "Imagem de colheita de amendoim utilizada para representar a actividade agrícola rural angolana.",
    fonte: "Fundação Bornito de Sousa",
  },
  {
    src: "https://www.icrisat.org/assets/template/images/icrisat-tanzania-overview.jpg",
    href: "https://www.icrisat.org/regions/eastern-and-southern-africa/overview",
    alt: "Agricultora africana segurando plantas de amendoim recém-colhidas",
    legenda:
      "Colheita de amendoim num sistema de pequena produção da África Oriental.",
    fonte: "ICRISAT — Eastern and Southern Africa",
  },
  {
    src: "https://www.myagro.org/wp-content/uploads/2023/04/khady-29-2048x1365.jpg",
    href: "https://www.myagro.org/media-post/how-myagros-layaway-model-transformed-a-senegalese-farming-familys-livelihood/",
    alt: "Agricultora africana durante a colheita de amendoim",
    legenda:
      "Colheita manual de amendoim num sistema de agricultura familiar da África Ocidental.",
    fonte: "myAgro — Senegal",
  },
  {
    src: "https://www.fao.org/images/foodlosswastelibraries/background/farmer-betrice-barnet-harvesting-groundnuts-in-a-field.jpg?sfvrsn=aaa8fab_1",
    href: "https://www.fao.org/platform-food-loss-waste/resources/publications/grains-and-pulses/2/en",
    alt: "Selecção de amendoim após a colheita",
    legenda:
      "Selecção e preparação do amendoim após a colheita, etapa importante para reduzir perdas.",
    fonte: "FAO — Food Loss and Waste",
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
      className={`rounded-3xl border border-green-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg ${className}`}
    >
      <h3 className="mb-4 text-lg font-bold text-green-900">{title}</h3>
      <div className="text-sm leading-7 text-slate-700">{children}</div>
    </article>
  );
}

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
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-green-700">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black tracking-tight text-green-950 md:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-base leading-7 text-slate-600">{text}</p>
    </div>
  );
}

export default function AmendoimPage() {
  const [provinciaSelecionada, setProvinciaSelecionada] = useState("Zaire");
  const [pesquisa, setPesquisa] = useState("");

  const provincia = useMemo(
    () =>
      provincias.find((item) => item.nome === provinciaSelecionada) ??
      provincias[0],
    [provinciaSelecionada]
  );

  const provinciasFiltradas = useMemo(() => {
    const termo = pesquisa.trim().toLowerCase();

    if (!termo) return provincias;

    return provincias.filter((item) =>
      `${item.nome} ${item.destaque} ${item.observacao}`
        .toLowerCase()
        .includes(termo)
    );
  }, [pesquisa]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-green-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage: `url("${imagens[0].src}")`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-green-950 via-green-950/90 to-green-900/60" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="max-w-4xl">
            <Link
              href="/agricultura"
              className="text-sm font-semibold text-green-200 hover:text-white"
            >
              AGROINOVA ANGOLA • Agricultura
            </Link>

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-green-300">
              Leguminosa e oleaginosa
            </p>

            <h1 className="mt-3 text-5xl font-black tracking-tight text-white md:text-7xl">
              Amendoim
            </h1>

            <p className="mt-2 text-xl font-semibold text-green-100 md:text-2xl">
              Ginguba • Arachis hypogaea L.
            </p>

            <p className="mt-7 max-w-3xl text-base leading-8 text-green-50 md:text-lg">
              Guia técnico e académico sobre a cultura do amendoim em Angola,
              abrangendo botânica, ambiente, solo, sementes, estabelecimento,
              nutrição, água, sanidade, colheita, pós-colheita, aflatoxinas,
              utilização, cadeia de valor e investigação.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#agronomia"
                className="rounded-full bg-white px-5 py-3 text-sm font-bold text-green-900 transition hover:bg-green-50"
              >
                Explorar agronomia
              </a>

              <a
                href="#angola"
                className="rounded-full border border-green-300/50 bg-green-900/40 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-800"
              >
                Amendoim em Angola
              </a>

              <a
                href="#investigacao"
                className="rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Investigação
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NAV */}
      <nav className="sticky top-0 z-30 border-b border-green-100 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-5 overflow-x-auto px-5 py-3 text-sm font-semibold text-green-900 md:px-8">
          <a href="#visao-geral" className="whitespace-nowrap hover:text-green-600">
            Visão geral
          </a>
          <a href="#agronomia" className="whitespace-nowrap hover:text-green-600">
            Agronomia
          </a>
          <a href="#solo" className="whitespace-nowrap hover:text-green-600">
            Solo
          </a>
          <a href="#semente" className="whitespace-nowrap hover:text-green-600">
            Semente
          </a>
          <a href="#manejo" className="whitespace-nowrap hover:text-green-600">
            Manejo
          </a>
          <a href="#sanidade" className="whitespace-nowrap hover:text-green-600">
            Sanidade
          </a>
          <a href="#colheita" className="whitespace-nowrap hover:text-green-600">
            Colheita
          </a>
          <a href="#angola" className="whitespace-nowrap hover:text-green-600">
            Angola
          </a>
          <a
            href="#investigacao"
            className="whitespace-nowrap hover:text-green-600"
          >
            Investigação
          </a>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        {/* VISÃO GERAL */}
        <section id="visao-geral" className="scroll-mt-24">
          <SectionTitle
            eyebrow="01 • Visão geral"
            title="Uma cultura alimentar, oleaginosa e de interesse comercial"
            text="O amendoim pertence à família Fabaceae e apresenta uma particularidade agronómica importante: depois da fecundação, os ginóforos crescem em direcção ao solo e introduzem as vagens no substrato, onde os grãos se desenvolvem."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <Card title="Nome científico">
              <p className="font-bold text-green-900">Arachis hypogaea L.</p>
              <p className="mt-2">
                Leguminosa cultivada principalmente pelos seus grãos, que
                apresentam elevado interesse alimentar e oleaginoso.
              </p>
            </Card>

            <Card title="Sistema radicular">
              <p>
                A planta desenvolve uma raiz principal e raízes laterais.
                Nódulos associados a bactérias simbióticas podem contribuir
                para a fixação biológica de azoto.
              </p>
            </Card>

            <Card title="Fruto agrícola">
              <p>
                A vagem desenvolve-se no solo. Por isso, a estrutura, a
                drenagem e a facilidade de penetração do solo são importantes
                para a formação e a colheita das vagens.
              </p>
            </Card>

            <Card title="Principais utilizações">
              <p>
                Consumo directo, torragem, pasta de ginguba, óleo, farinha,
                alimentos processados e aproveitamento das partes vegetativas
                como alimento animal.
              </p>
            </Card>
          </div>
        </section>

        {/* IMAGENS */}
        <section className="mt-16">
          <SectionTitle
            eyebrow="02 • Campo"
            title="A cultura vista no campo"
            text="As imagens abaixo privilegiam situações reais de produção e pós-colheita em Angola e África. Cada fotografia abre a página de origem."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {imagens.map((imagem) => (
              <a
                key={imagem.src}
                href={imagem.href}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-3xl border border-green-100 bg-white shadow-sm"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={imagem.src}
                    alt={imagem.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <p className="text-sm font-semibold leading-6 text-slate-800">
                    {imagem.legenda}
                  </p>

                  <p className="mt-3 text-xs font-medium text-green-700">
                    Fonte: {imagem.fonte}
                  </p>

                  <p className="mt-2 text-xs font-bold text-green-900">
                    Abrir fonte original →
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* AGRONOMIA */}
        <section id="agronomia" className="mt-20 scroll-mt-24">
          <SectionTitle
            eyebrow="03 • Agronomia"
            title="Como a planta cresce"
            text="A produtividade resulta da combinação entre material genético, ambiente, população de plantas, fertilidade, água, controlo de infestantes e sanidade."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            <Card title="Germinação e emergência">
              <p>
                A semente absorve água, inicia o metabolismo e emite a
                radícula. O estabelecimento uniforme é fundamental para formar
                uma população equilibrada.
              </p>
              <p className="mt-3">
                Sementes danificadas, mal conservadas ou com baixa qualidade
                fisiológica podem reduzir a emergência e favorecer falhas no
                campo.
              </p>
            </Card>

            <Card title="Crescimento vegetativo">
              <p>
                A cultura forma folhas, ramos e sistema radicular. Durante
                esta fase, a competição com infestantes deve ser reduzida,
                porque a cultura jovem possui capacidade limitada de competir
                por água, luz e nutrientes.
              </p>
            </Card>

            <Card title="Floração e formação das vagens">
              <p>
                Após a fecundação, o ginóforo desenvolve-se e dirige-se para o
                solo. A vagem forma-se abaixo da superfície.
              </p>
              <p className="mt-3">
                Esta característica diferencia o manejo do amendoim de muitas
                outras leguminosas cultivadas para grão.
              </p>
            </Card>
          </div>

          <div className="mt-6 rounded-3xl border border-green-200 bg-green-50 p-7">
            <h3 className="text-xl font-black text-green-950">
              Ponto agronómico importante
            </h3>
            <p className="mt-3 max-w-4xl leading-8 text-green-950/80">
              A cultura precisa de um solo que permita a penetração dos
              ginóforos e a expansão das vagens. Solos muito pesados,
              compactados ou sujeitos a encharcamento podem dificultar a
              formação e a colheita.
            </p>
          </div>
        </section>

        {/* CLIMA */}
        <section className="mt-16">
          <SectionTitle
            eyebrow="04 • Ambiente"
            title="Clima, água e calendário"
            text="O amendoim é adaptado a ambientes tropicais e subtropicais e é frequentemente cultivado em sequeiro em Angola."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <Card title="Temperatura">
              <p>
                A cultura desenvolve-se melhor em condições quentes. Referências
                agronómicas para Angola indicam preferência por temperaturas
                médias superiores a 21 °C, com faixa favorável próxima de
                22–24 °C para o desenvolvimento.
              </p>
            </Card>

            <Card title="Distribuição da chuva">
              <p>
                Não basta apenas a quantidade total de chuva. A distribuição
                durante estabelecimento, floração e enchimento das vagens é
                determinante.
              </p>
              <p className="mt-3">
                Uma colheita coincidente com períodos secos favorece a secagem
                das vagens e reduz problemas de deterioração.
              </p>
            </Card>

            <Card title="Excesso de humidade">
              <p>
                Períodos prolongados de chuva podem aumentar problemas
                fitossanitários e dificultar a colheita e secagem.
              </p>
            </Card>

            <Card title="Défice hídrico">
              <p>
                A cultura apresenta alguma tolerância à seca, mas défices
                severos durante fases críticas podem reduzir floração,
                formação de vagens e enchimento dos grãos.
              </p>
            </Card>
          </div>
        </section>

        {/* SOLO */}
        <section id="solo" className="mt-20 scroll-mt-24">
          <SectionTitle
            eyebrow="05 • Solo"
            title="O solo é decisivo para a formação das vagens"
            text="A literatura agronómica sobre Angola destaca a preferência por solos mais leves, bem drenados e de textura que permita a penetração dos ginóforos."
          />

          <div className="grid gap-5 md:grid-cols-3">
            <Card title="Textura">
              <p>
                Solos de textura mais grosseira ou grosseira/média são
                geralmente favoráveis, porque permitem melhor penetração e
                desenvolvimento das vagens.
              </p>
            </Card>

            <Card title="Drenagem">
              <p>
                O terreno deve permitir a saída do excesso de água. O
                encharcamento prolongado prejudica as raízes e pode favorecer
                doenças.
              </p>
            </Card>

            <Card title="Estrutura">
              <p>
                Evitar compactação excessiva. Um leito de plantio bem preparado
                facilita emergência, desenvolvimento radicular e formação das
                vagens.
              </p>
            </Card>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <Card title="Preparação do terreno">
              <ul className="space-y-3">
                <li>
                  • Eliminar ou reduzir a compactação superficial quando
                  existente.
                </li>
                <li>
                  • Corrigir problemas de drenagem antes da instalação da
                  cultura.
                </li>
                <li>
                  • Nivelar adequadamente o terreno quando o sistema de
                  produção exigir.
                </li>
                <li>
                  • Evitar mobilização excessiva que aumente erosão e perda de
                  matéria orgânica.
                </li>
              </ul>
            </Card>

            <Card title="Análise do solo">
              <p>
                Antes de recomendar adubações específicas, o produtor deve
                conhecer as características do seu solo. A recomendação de
                fertilizantes deve ser baseada, sempre que possível, em análise
                laboratorial e orientação técnica local.
              </p>
            </Card>
          </div>
        </section>

        {/* SEMENTE */}
        <section id="semente" className="mt-20 scroll-mt-24">
          <SectionTitle
            eyebrow="06 • Sementes"
            title="Semente de qualidade é parte do rendimento"
            text="A escolha e conservação da semente influenciam directamente o estabelecimento da cultura."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            <Card title="Qualidade física">
              <p>
                Seleccionar sementes limpas, inteiras, uniformes e sem sinais
                evidentes de dano mecânico, insectos ou deterioração.
              </p>
            </Card>

            <Card title="Qualidade fisiológica">
              <p>
                Sementes com boa capacidade de germinação favorecem emergência
                uniforme e reduzem falhas na população.
              </p>
            </Card>

            <Card title="Sanidade">
              <p>
                A semente pode transportar agentes patogénicos. O tratamento
                deve ser feito somente de acordo com recomendações técnicas e
                produtos legalmente autorizados.
              </p>
            </Card>
          </div>

          <div className="mt-6 rounded-3xl border border-amber-200 bg-amber-50 p-7">
            <h3 className="text-xl font-black text-amber-950">
              Não confundir variedade investigada com recomendação nacional
            </h3>
            <p className="mt-3 leading-8 text-amber-950/80">
              ICRISAT documenta numerosas variedades e linhas de melhoramento
              para África, incluindo materiais precoces, tolerantes à seca e
              resistentes a doenças. Isso não significa que todas estejam
              oficialmente recomendadas ou libertadas para produção comercial
              em Angola. A disponibilização de semente deve ser verificada
              junto das instituições nacionais competentes.
            </p>
          </div>
        </section>

        {/* COMPASSOS */}
        <section className="mt-16">
          <SectionTitle
            eyebrow="07 • Implantação"
            title="Sementeira, população e compasso"
            text="A organização espacial das plantas influencia competição, arejamento, cobertura do solo, controlo de infestantes e facilidade de colheita."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <Card title="Sementeira organizada">
              <p>
                Uma experiência recente da ADRA nos Gambos documentou a
                utilização de sementeira com compassos na cultura da ginguba,
                com o objectivo de melhorar a organização do campo e a
                produtividade.
              </p>
            </Card>

            <Card title="Por que evitar excesso de sementes no covacho?">
              <p>
                Uma população excessivamente concentrada pode aumentar
                competição entre plantas, dificultar operações e criar
                condições microclimáticas favoráveis a determinados problemas
                sanitários.
              </p>
            </Card>
          </div>

          <div className="mt-6 rounded-3xl bg-green-900 p-7 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-300">
              Experiência angolana recente
            </p>
            <h3 className="mt-2 text-2xl font-black">
              Gambos • Chiange • Tunda II
            </h3>
            <p className="mt-3 max-w-4xl leading-8 text-green-50">
              Em Fevereiro de 2026, a Cooperativa Tumaneipo Emone realizou uma
              sementeira de amendoim com compassos no município dos Gambos,
              acompanhada por práticas destinadas a melhorar o estabelecimento
              e a qualidade da produção.
            </p>
            <a
              href="https://adra-angola.org/materias/ler-noticia/MzQ3"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block font-bold text-white underline decoration-green-300 underline-offset-4"
            >
              Consultar experiência da ADRA →
            </a>
          </div>
        </section>

        {/* MANEJO */}
        <section id="manejo" className="mt-20 scroll-mt-24">
          <SectionTitle
            eyebrow="08 • Manejo"
            title="Da emergência ao enchimento das vagens"
            text="O manejo deve acompanhar as fases de desenvolvimento da cultura, em vez de depender apenas de intervenções isoladas."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <Card title="Infestantes">
              <p>
                O período inicial é particularmente importante. A competição
                por luz, água e nutrientes pode reduzir o crescimento da
                cultura.
              </p>
            </Card>

            <Card title="Água">
              <p>
                Monitorizar a humidade do solo e evitar tanto défice severo
                quanto excesso de água.
              </p>
            </Card>

            <Card title="Nutrição">
              <p>
                A fertilidade deve ser avaliada com base no solo, histórico da
                parcela e produtividade pretendida.
              </p>
            </Card>

            <Card title="Monitorização">
              <p>
                Visitar regularmente a lavra para identificar pragas, sintomas
                foliares, falhas de emergência, problemas de solo e sinais de
                maturação.
              </p>
            </Card>
          </div>
        </section>

        {/* SANIDADE */}
        <section id="sanidade" className="mt-20 scroll-mt-24">
          <SectionTitle
            eyebrow="09 • Sanidade"
            title="Pragas, doenças e aflatoxinas"
            text="A sanidade do amendoim não termina no campo. A qualidade durante secagem e armazenamento é igualmente importante."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <Card title="Roseta do amendoim">
              <p>
                É uma doença viral de grande importância na África
                subsaariana. A transmissão ocorre por afídeos e as plantas
                afectadas podem apresentar nanismo, alterações da coloração e
                forte redução do rendimento.
              </p>
            </Card>

            <Card title="Manchas foliares">
              <p>
                Doenças foliares, incluindo manchas precoces e tardias, podem
                reduzir área foliar funcional e produtividade.
              </p>
            </Card>

            <Card title="Ferrugem">
              <p>
                A ferrugem é uma das doenças foliares descritas na literatura
                regional de produção de amendoim.
              </p>
            </Card>

            <Card title="Podridões">
              <p>
                Podridões de vagens e outros problemas associados ao solo podem
                comprometer a qualidade do produto durante o desenvolvimento e
                depois da colheita.
              </p>
            </Card>

            <Card title="Afídeos">
              <p>
                Além dos danos directos, determinados afídeos são importantes
                porque participam na transmissão de doenças virais como a
                roseta.
              </p>
            </Card>

            <Card title="Contaminação por aflatoxinas">
              <p>
                A aflatoxina é um problema de segurança alimentar associado à
                deterioração por fungos e às condições inadequadas de colheita,
                secagem e armazenamento.
              </p>
            </Card>
          </div>

          <div className="mt-7 rounded-3xl border border-red-100 bg-red-50 p-7">
            <h3 className="text-xl font-black text-red-950">
              Regra essencial de pós-colheita
            </h3>
            <p className="mt-3 max-w-4xl leading-8 text-red-950/80">
              O produtor deve evitar armazenar amendoim húmido ou com vagens
              danificadas. A secagem adequada e a selecção de material
              deteriorado são componentes fundamentais da gestão da qualidade.
            </p>
          </div>
        </section>

        {/* COLHEITA */}
        <section id="colheita" className="mt-20 scroll-mt-24">
          <SectionTitle
            eyebrow="10 • Colheita"
            title="Colher no momento certo"
            text="A determinação da maturidade deve combinar observação da cultura, características das vagens e condições do campo."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <Card title="Antes da colheita">
              <p>
                Verificar maturidade, estado das plantas, condições de humidade
                do solo e previsão de chuva.
              </p>
            </Card>

            <Card title="Arranque">
              <p>
                Como as vagens se encontram subterrâneas, a colheita exige
                arrancar ou levantar as plantas de modo a retirar as vagens
                sem perdas excessivas.
              </p>
            </Card>

            <Card title="Secagem">
              <p>
                A secagem deve ser suficientemente eficiente para reduzir a
                humidade e diminuir riscos de deterioração durante a
                armazenagem.
              </p>
            </Card>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <Card title="Evitar perdas">
              <ul className="space-y-3">
                <li>• Evitar deixar vagens maduras demasiado tempo no campo.</li>
                <li>
                  • Reduzir perdas mecânicas durante o arranque e transporte.
                </li>
                <li>• Não misturar produto deteriorado com produto saudável.</li>
                <li>
                  • Manter o produto protegido da chuva depois de arrancado.
                </li>
              </ul>
            </Card>

            <Card title="Qualidade comercial">
              <p>
                O produto destinado ao consumo ou transformação deve apresentar
                baixo nível de impurezas, boa secagem, grãos íntegros e ausência
                de sinais de bolor ou deterioração.
              </p>
            </Card>
          </div>
        </section>

        {/* PÓS COLHEITA */}
        <section className="mt-16">
          <SectionTitle
            eyebrow="11 • Pós-colheita"
            title="Qualidade começa no campo e termina no armazenamento"
            text="A cadeia do amendoim inclui operações que determinam segurança alimentar, valor comercial e perdas."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <Card title="Secagem">
              <p>
                Reduzir adequadamente a humidade antes do armazenamento.
              </p>
            </Card>

            <Card title="Limpeza">
              <p>
                Retirar terra, restos vegetais, pedras e outros materiais
                estranhos.
              </p>
            </Card>

            <Card title="Selecção">
              <p>
                Separar grãos e vagens danificados, mofados ou com qualidade
                inadequada.
              </p>
            </Card>

            <Card title="Armazenamento">
              <p>
                Manter o produto em local seco, limpo, protegido de pragas e
                com boa circulação de ar.
              </p>
            </Card>
          </div>
        </section>

        {/* UTILIZAÇÃO */}
        <section className="mt-20">
          <SectionTitle
            eyebrow="12 • Utilização"
            title="Mais do que uma cultura de grão"
            text="A cadeia do amendoim permite diferentes destinos alimentares, comerciais e pecuários."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <Card title="Alimentação">
              <p>
                Consumo cru, cozido ou torrado, conforme práticas alimentares
                locais e preparação adequada.
              </p>
            </Card>

            <Card title="Pasta de ginguba">
              <p>
                O processamento do grão permite produzir pasta de amendoim para
                consumo doméstico e comercial.
              </p>
            </Card>

            <Card title="Óleo">
              <p>
                O elevado teor lipídico torna o amendoim matéria-prima para
                extracção de óleo.
              </p>
            </Card>

            <Card title="Alimentação animal">
              <p>
                Partes da planta e subprodutos podem ter utilização na
                alimentação animal, dependendo da qualidade e do processamento.
              </p>
            </Card>
          </div>
        </section>

        {/* ANGOLA */}
        <section id="angola" className="mt-20 scroll-mt-24">
          <SectionTitle
            eyebrow="13 • Angola"
            title="O amendoim nos sistemas agrícolas angolanos"
            text="Os dados nacionais mostram que a ginguba possui uma distribuição ampla e importância particular em várias regiões."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            <Card title="RAPP 2019/2020">
              <p className="text-3xl font-black text-green-900">≈ 24%</p>
              <p className="mt-2">
                das explorações agrícolas familiares que praticavam agricultura
                adoptavam a cultura da ginguba.
              </p>
            </Card>

            <Card title="Maior protagonismo">
              <p>
                O relatório destaca especialmente <strong>Zaire</strong>,{" "}
                <strong>Uíge</strong> e <strong>Cuanza Norte</strong>.
              </p>
            </Card>

            <Card title="Distribuição">
              <p>
                A cultura aparece em diferentes zonas agroecológicas, desde o
                norte húmido até áreas mais secas, exigindo adaptação do
                calendário e do manejo.
              </p>
            </Card>
          </div>

          <div className="mt-7 rounded-3xl border border-green-200 bg-white p-7 shadow-sm">
            <p className="text-sm leading-8 text-slate-700">
              Um estudo nacional da cadeia de valor baseado em dados do
              MINAGRIF para 2017–2018 indicou, historicamente, cerca de{" "}
              <strong>337 971 ha semeados</strong>,{" "}
              <strong>318 843 ha colhidos</strong> e{" "}
              <strong>212 089 toneladas produzidas</strong>, com produtividade
              média indicada de 665 kg/ha. Estes valores são históricos e não
              devem ser apresentados como indicadores actuais da produção
              nacional.
            </p>
          </div>

          <div className="mt-7 rounded-3xl bg-green-950 p-8 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-300">
              Integridade dos dados
            </p>
            <h3 className="mt-3 text-2xl font-black">
              Histórico não é igual a indicador actual
            </h3>
            <p className="mt-3 max-w-4xl leading-8 text-green-50">
              O AGROINOVA separa os dados históricos dos indicadores recentes.
              Não usamos valores antigos de produção para preencher
              artificialmente o período 2024/2025.
            </p>
          </div>
        </section>

        {/* EXPERIÊNCIAS */}
        <section className="mt-20">
          <SectionTitle
            eyebrow="14 • Experiências recentes"
            title="O que está a acontecer no terreno"
            text="Experiências locais ajudam a identificar técnicas que podem ser estudadas, comparadas e eventualmente ampliadas."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-green-100 bg-white p-7 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">
                Gambos • Huíla • 2026
              </p>
              <h3 className="mt-2 text-2xl font-black text-green-950">
                Sementeira com compassos
              </h3>
              <p className="mt-4 leading-8 text-slate-700">
                A Cooperativa Tumaneipo Emone realizou uma actividade de
                sementeira de ginguba com compassos no Chiange, Tunda II. A
                iniciativa procurou melhorar a organização da lavra e a
                qualidade da produção.
              </p>
              <a
                href="https://adra-angola.org/materias/ler-noticia/MzQ3"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block font-bold text-green-800 underline underline-offset-4"
              >
                Ver documentação da ADRA →
              </a>
            </article>

            <article className="rounded-3xl border border-green-100 bg-white p-7 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">
                Cabinda • Norte de Angola
              </p>
              <h3 className="mt-2 text-2xl font-black text-green-950">
                Produção e processamento comunitário
              </h3>
              <p className="mt-4 leading-8 text-slate-700">
                A World Vision documentou uma experiência no norte de Angola em
                que grupos comunitários receberam equipamentos de
                agroprocessamento, incluindo equipamentos relacionados com
                sementes de ginguba. A experiência também descreve produção
                agrícola diversificada e comercialização local.
              </p>
              <a
                href="https://www.wvi.org/stories/global-hunger-crisis/transformative-impact-school-meals-northern-angola"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block font-bold text-green-800 underline underline-offset-4"
              >
                Ver experiência da World Vision →
              </a>
            </article>
          </div>
        </section>

        {/* PROVÍNCIAS */}
        <section className="mt-20">
          <SectionTitle
            eyebrow="15 • Cobertura nacional"
            title="Explore o amendoim por província"
            text="O selector abaixo é uma camada de conhecimento territorial. Não substitui mapas oficiais de solos, clima ou produtividade."
          />

          <div className="grid gap-7 lg:grid-cols-[360px_1fr]">
            <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm">
              <label
                htmlFor="pesquisa-provincia"
                className="text-sm font-bold text-green-950"
              >
                Pesquisar província
              </label>

              <input
                id="pesquisa-provincia"
                type="search"
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
                placeholder="Ex.: Uíge, Huíla..."
                className="mt-3 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
              />

              <div className="mt-5 max-h-[420px] space-y-2 overflow-y-auto pr-1">
                {provinciasFiltradas.map((item) => (
                  <button
                    key={item.nome}
                    type="button"
                    onClick={() => setProvinciaSelecionada(item.nome)}
                    className={`w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                      provinciaSelecionada === item.nome
                        ? "bg-green-900 text-white"
                        : "bg-green-50 text-green-950 hover:bg-green-100"
                    }`}
                  >
                    {item.nome}
                  </button>
                ))}

                {provinciasFiltradas.length === 0 && (
                  <p className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-500">
                    Nenhuma província encontrada.
                  </p>
                )}
              </div>
            </div>

            <div className="rounded-3xl bg-green-950 p-8 text-white md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-300">
                Província seleccionada
              </p>

              <h3 className="mt-3 text-4xl font-black">
                {provincia.nome}
              </h3>

              <p className="mt-4 inline-flex rounded-full bg-green-800 px-4 py-2 text-sm font-bold text-green-100">
                {provincia.destaque}
              </p>

              <p className="mt-7 max-w-2xl text-base leading-8 text-green-50">
                {provincia.observacao}
              </p>

              <div className="mt-8 border-t border-green-800 pt-6">
                <p className="text-sm leading-7 text-green-200">
                  Os dados territoriais históricos devem ser interpretados
                  segundo a configuração administrativa e metodologia da fonte
                  original. O AGROINOVA não redistribui automaticamente valores
                  antigos para as 21 províncias actuais.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INVESTIGAÇÃO */}
        <section id="investigacao" className="mt-20 scroll-mt-24">
          <SectionTitle
            eyebrow="16 • Investigação"
            title="Perguntas que merecem investigação em Angola"
            text="O portal deve servir também como ponto de partida para estudantes, técnicos, investigadores e instituições."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <Card title="Genética">
              <p>
                Quais materiais de amendoim apresentam melhor adaptação às
                diferentes zonas agroecológicas de Angola?
              </p>
            </Card>

            <Card title="Sementes">
              <p>
                Como funcionam os sistemas locais de produção, conservação e
                troca de sementes de ginguba?
              </p>
            </Card>

            <Card title="Solos">
              <p>
                Que combinações de textura, fertilidade e manejo produzem melhor
                desempenho por região?
              </p>
            </Card>

            <Card title="Seca">
              <p>
                Quais genótipos apresentam maior estabilidade em anos de chuva
                irregular?
              </p>
            </Card>

            <Card title="Sanidade">
              <p>
                Qual é a distribuição real das principais doenças do amendoim
                nas diferentes regiões de Angola?
              </p>
            </Card>

            <Card title="Aflatoxinas">
              <p>
                Como reduzir o risco de contaminação desde a lavra até ao
                armazenamento e processamento?
              </p>
            </Card>
          </div>

          <div className="mt-7 rounded-3xl border border-blue-100 bg-blue-50 p-7">
            <h3 className="text-xl font-black text-blue-950">
              Referência africana para melhoramento
            </h3>
            <p className="mt-3 max-w-4xl leading-8 text-blue-950/80">
              O ICRISAT trabalha há décadas com programas nacionais africanos
              para desenvolver materiais com precocidade, tolerância à seca,
              resistência a doenças e melhor desempenho. Esses resultados são
              úteis para investigação comparativa, mas não devem ser
              transformados automaticamente em recomendações varietais para
              Angola.
            </p>
          </div>
        </section>

        {/* VARIEDADES DE REFERÊNCIA */}
        <section className="mt-20">
          <SectionTitle
            eyebrow="17 • Genética"
            title="Materiais africanos de referência"
            text="Os exemplos seguintes aparecem na literatura de melhoramento do amendoim em África. São apresentados como referências científicas, não como lista oficial de variedades recomendadas em Angola."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <Card title="ICGV 12991">
              <p>
                Associada a precocidade e tolerância à seca em diferentes
                programas africanos.
              </p>
            </Card>

            <Card title="JL 24">
              <p>
                Material amplamente estudado em África, associado a precocidade,
                tolerância à seca e elevado teor de óleo.
              </p>
            </Card>

            <Card title="ICGV-SM 90704">
              <p>
                Material de maturação intermédia e estudado para resistência à
                roseta.
              </p>
            </Card>

            <Card title="ICGV 98412">
              <p>
                Material estudado para produção e características de grão de
                interesse alimentar.
              </p>
            </Card>
          </div>
        </section>

        {/* CADEIA DE VALOR */}
        <section className="mt-20">
          <SectionTitle
            eyebrow="18 • Cadeia de valor"
            title="Da semente ao mercado"
            text="A produção de amendoim envolve muito mais do que produzir vagens: sementes, produção, secagem, selecção, armazenamento, transformação e comercialização fazem parte do sistema."
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
            {[
              "Semente",
              "Produção",
              "Colheita",
              "Secagem",
              "Armazenamento",
              "Mercado",
            ].map((etapa, index) => (
              <div
                key={etapa}
                className="rounded-3xl border border-green-100 bg-white p-5 text-center shadow-sm"
              >
                <p className="text-xs font-bold text-green-600">
                  ETAPA {index + 1}
                </p>
                <p className="mt-2 font-black text-green-950">{etapa}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <Card title="Mercado alimentar">
              <p>
                O grão pode ser comercializado para consumo doméstico,
                retalho, restauração e transformação.
              </p>
            </Card>

            <Card title="Transformação">
              <p>
                Pasta, óleo, farinha e outros produtos ampliam as possibilidades
                de agregação de valor.
              </p>
            </Card>

            <Card title="Economia rural">
              <p>
                A cultura pode combinar segurança alimentar, diversificação de
                rendimento e integração com sistemas de produção familiar.
              </p>
            </Card>
          </div>
        </section>

        {/* FONTES */}
        <section className="mt-20">
          <SectionTitle
            eyebrow="19 • Fontes"
            title="Referências técnicas utilizadas"
            text="A página distingue fontes angolanas de referências agronómicas internacionais."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <Card title="Angola">
              <ul className="space-y-3">
                <li>
                  • INE/FAO — RAPP 2019/2020: produção de oleaginosas pelas
                  explorações familiares.
                </li>
                <li>
                  • Estudo de Desenvolvimento Sustentável da Agricultura —
                  cadeia de valor do amendoim.
                </li>
                <li>
                  • ADRA Angola — experiência de sementeira com compassos nos
                  Gambos, 2026.
                </li>
                <li>
                  • World Vision International — experiência de agricultura e
                  processamento comunitário no norte de Angola.
                </li>
              </ul>
            </Card>

            <Card title="África e investigação">
              <ul className="space-y-3">
                <li>
                  • ICRISAT — Groundnut research and genetic improvement.
                </li>
                <li>
                  • ICRISAT — Groundnut Diseases and their Control.
                </li>
                <li>
                  • ICRISAT — melhoramento para resistência à seca e doenças.
                </li>
                <li>
                  • FAO — perdas e qualidade pós-colheita de grãos e
                  leguminosas.
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* INTEGRIDADE */}
        <section className="mt-20">
          <div className="rounded-[2rem] border border-green-200 bg-green-50 p-8 md:p-10">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-green-700">
              AGROINOVA ANGOLA • Integridade científica
            </p>

            <h2 className="mt-3 text-3xl font-black text-green-950">
              Informação técnica sem transformar hipótese em facto
            </h2>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <p className="leading-8 text-green-950/80">
                Dados históricos são apresentados como históricos. Experiências
                locais são identificadas como experiências locais. Resultados
                internacionais são utilizados como referência científica.
              </p>

              <p className="leading-8 text-green-950/80">
                Uma variedade estudada ou libertada noutro país não é
                automaticamente uma variedade recomendada para Angola. A
                recomendação varietal nacional deve ser sustentada por
                instituições e ensaios apropriados.
              </p>
            </div>
          </div>
        </section>

        {/* NAVEGAÇÃO */}
        <section className="mt-16 border-t border-green-100 pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <Link
              href="/agricultura/arroz"
              className="rounded-2xl border border-green-200 bg-white px-5 py-4 font-bold text-green-900 transition hover:bg-green-50"
            >
              ← Arroz
            </Link>

            <Link
              href="/agricultura"
              className="rounded-2xl bg-green-900 px-5 py-4 text-center font-bold text-white transition hover:bg-green-800"
            >
              Todas as culturas
            </Link>

            <Link
              href="/agricultura/batata-rena"
              className="rounded-2xl border border-green-200 bg-white px-5 py-4 text-right font-bold text-green-900 transition hover:bg-green-50"
            >
              Próxima cultura: Batata-rena →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}