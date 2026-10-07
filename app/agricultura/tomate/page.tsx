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
      "A produção deve ser avaliada segundo disponibilidade de água, fertilidade, drenagem, pressão de pragas e proximidade dos mercados.",
  },
  {
    nome: "Benguela",
    regiao: "Centro-Oeste",
    observacao:
      "Província de grande importância para a horticultura. O Dombe Grande e a Baía Farta apresentam forte ligação com a produção e transformação de tomate.",
  },
  {
    nome: "Bié",
    regiao: "Centro",
    observacao:
      "A cultura pode integrar sistemas hortícolas e agrícolas diversificados, dependendo das condições locais de solo, água e mercado.",
  },
  {
    nome: "Cabinda",
    regiao: "Norte",
    observacao:
      "A humidade elevada exige atenção especial à drenagem, ventilação, doenças foliares e escolha da época de produção.",
  },
  {
    nome: "Cuando",
    regiao: "Leste",
    observacao:
      "A aptidão deve ser determinada por avaliação local de solo, água, clima e logística.",
  },
  {
    nome: "Cubango",
    regiao: "Leste",
    observacao:
      "Pode integrar sistemas hortícolas diversificados onde exista água para irrigação e solos bem drenados.",
  },
  {
    nome: "Cuanza Norte",
    regiao: "Norte",
    observacao:
      "A horticultura pode beneficiar de sistemas de produção próximos dos mercados e de melhor gestão de água e sanidade.",
  },
  {
    nome: "Cuanza Sul",
    regiao: "Centro-Oeste",
    observacao:
      "A província apresenta actividade agrícola diversificada; o tomate pode ser integrado em sistemas hortícolas com manejo adequado.",
  },
  {
    nome: "Cunene",
    regiao: "Sul",
    observacao:
      "A disponibilidade de água é um factor determinante para produção comercial regular.",
  },
  {
    nome: "Huambo",
    regiao: "Centro",
    observacao:
      "O tomate pode integrar sistemas hortícolas da província, com forte importância da escolha da época e do manejo fitossanitário.",
  },
  {
    nome: "Huíla",
    regiao: "Sul",
    observacao:
      "O Perímetro Irrigado da Matala inclui o tomate entre as culturas estudadas para desenvolvimento agrícola.",
  },
  {
    nome: "Icolo e Bengo",
    regiao: "Norte",
    observacao:
      "A proximidade de grandes mercados cria oportunidade para horticultura comercial, desde que haja água, solo adequado e cadeia de frio/escoamento.",
  },
  {
    nome: "Luanda",
    regiao: "Litoral",
    observacao:
      "A proximidade do principal mercado consumidor aumenta a importância económica da horticultura periurbana e comercial.",
  },
  {
    nome: "Lunda Norte",
    regiao: "Leste",
    observacao:
      "A produção deve considerar drenagem, fertilidade, pressão de doenças e acesso a sementes e insumos.",
  },
  {
    nome: "Lunda Sul",
    regiao: "Leste",
    observacao:
      "O potencial deve ser validado por ensaios locais e avaliação das condições de solo e água.",
  },
  {
    nome: "Malanje",
    regiao: "Norte",
    observacao:
      "Pode integrar sistemas de horticultura comercial e familiar, com atenção especial à sanidade vegetal.",
  },
  {
    nome: "Moxico",
    regiao: "Leste",
    observacao:
      "A cultura pode ser integrada em sistemas diversificados quando houver irrigação e condições de comercialização.",
  },
  {
    nome: "Moxico Leste",
    regiao: "Leste",
    observacao:
      "A produção hortícola pode ser desenvolvida em áreas com água e logística adequadas.",
  },
  {
    nome: "Namibe",
    regiao: "Sul",
    observacao:
      "É uma das regiões mais relevantes para o tomate comercial, com produção documentada e estudos específicos sobre as explorações produtoras.",
  },
  {
    nome: "Uíge",
    regiao: "Norte",
    observacao:
      "O tomate pode integrar a horticultura regional, desde que a drenagem e o manejo de doenças sejam adequadamente controlados.",
  },
  {
    nome: "Zaire",
    regiao: "Norte",
    observacao:
      "A produção deve ser avaliada segundo as condições locais de solo, água, clima e acesso ao mercado.",
  },
];

const imagens = [
  {
    src: "https://www.opais.ao/wp-content/uploads/2024/05/1f9a9253.webp",
    alt: "Colheita e acondicionamento de tomate no Namibe",
    titulo: "Tomate produzido no Namibe",
    descricao:
      "Imagem de trabalhadores a seleccionar e acondicionar tomate para transporte. O Namibe possui produção comercial de tomate documentada.",
    fonte: "O País",
    href: "https://www.opais.ao/economia/namibe-produz-60-do-tomate-consumido-no-pais/",
    angola: true,
  },
  {
    src: "https://cdn.prod.website-files.com/5a8e71e3c7881c000130ff13/68baa6c61250f125f10b56ef_WhatsApp%20Image%202025-09-01%20at%2022.25.04.jpeg",
    alt: "Produtores a colher tomate em Ganda, Benguela",
    titulo: "Colheita em Ganda, Benguela",
    descricao:
      "Membros de uma cooperativa agrícola durante a colheita de tomate no município da Ganda.",
    fonte: "ADRA Angola",
    href: "https://www.adra-angola.org/artigos/benguela-cooperativa-tuvanja-kovasso-colhe-mais-de-500-caixas-de-tomate-no-municipio-da-ganda",
    angola: true,
  },
  {
    src: "https://kiami-back.economiaefinancas.ao/cms/Infrastructure/Files/Repositorio/Imagens/6234797_imagem.jpeg",
    alt: "Tomate produzido e preparado para transporte no Namibe",
    titulo: "Produção e comercialização no Namibe",
    descricao:
      "Tomate acondicionado em caixas durante a operação de colheita e comercialização.",
    fonte: "Jornal de Economia & Finanças",
    href: "https://www.economiaefinancas.ao/noticias/180/agroneg%C3%B3cio/623291/produ%C3%A7%C3%A3o-de-tomate-no-namibe-cimenta-posi%C3%A7%C3%A3o-de-maior-abastecedor-no-mercado",
    angola: true,
  },
  {
    src: "https://www.giranoticias.com/_midias/jpg/2025/02/01/quiminha_ii-378450.jpeg",
    alt: "Produção de tomate no Complexo Agro-Industrial da Quiminha",
    titulo: "Horticultura comercial na Quiminha",
    descricao:
      "Imagem associada à produção hortícola no Complexo Agro-Industrial da Quiminha.",
    fonte: "Gira Notícias",
    href: "https://www.giranoticias.com/economia/2025/02/22055-falta-de-agua-dificulta-producao-agricola-no-complexo-da-quiminha.html",
    angola: true,
  },
];

function Card({ title, children }: CardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-3 text-lg font-bold text-slate-950">{title}</h3>

      <div className="text-sm leading-7 text-slate-700">
        {children}
      </div>
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

export default function TomatePage() {
  const [provinciaSelecionada, setProvinciaSelecionada] =
    useState("Todas");

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
      <section className="relative overflow-hidden bg-green-950">
        <img
          src={imagens[0].src}
          alt="Produção de tomate no Namibe"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-green-950 via-green-950/90 to-green-900/50" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-green-300">
              AGROINOVA ANGOLA • Agricultura
            </p>

            <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
              Tomate
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-green-50 md:text-xl">
              Guia técnico e agroindustrial sobre{" "}
              <em>Solanum lycopersicum L.</em>, desde a produção de mudas,
              transplantação e irrigação até à colheita, comercialização e
              transformação industrial em Angola.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#visao-geral"
                className="rounded-full bg-white px-5 py-3 text-sm font-bold text-green-900 transition hover:bg-green-100"
              >
                Explorar conteúdo
              </a>

              <a
                href="#angola"
                className="rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                Tomate em Angola
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4 text-sm text-slate-500 lg:px-8">
          <Link
            href="/agricultura"
            className="font-semibold hover:text-green-700"
          >
            Agricultura
          </Link>

          <span className="mx-2">/</span>

          <span>Tomate</span>
        </div>
      </div>

      {/* MENU */}
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

          <a href="#viveiro" className="whitespace-nowrap hover:text-green-700">
            Viveiro
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

      {/* VISÃO GERAL */}
      <section
        id="visao-geral"
        className="mx-auto max-w-7xl px-6 py-16 lg:px-8"
      >
        <SectionTitle
          eyebrow="01 • Visão geral"
          title="Uma das hortícolas mais importantes de Angola"
          description="O tomate possui importância simultaneamente alimentar, comercial e industrial. A cadeia nacional envolve agricultores familiares, explorações empresariais, transportadores, comerciantes e unidades de transformação."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card title="2022/23">
            <strong className="text-3xl text-green-800">
              765.787 t
            </strong>

            <p className="mt-2">
              Produção de tomate indicada para a campanha agrícola 2022/23.
            </p>
          </Card>

          <Card title="Hortícolas">
            <strong className="text-3xl text-green-800">
              2,20 milhões t
            </strong>

            <p className="mt-2">
              Produção total da fileira hortícola em 2022/23, segundo dados
              divulgados pelo MINAGRIF.
            </p>
          </Card>

          <Card title="Namibe">
            <strong className="text-3xl text-green-800">
              Região produtora
            </strong>

            <p className="mt-2">
              Existem estudos específicos sobre explorações produtoras de
              tomate na província.
            </p>
          </Card>

          <Card title="Dombe Grande">
            <strong className="text-3xl text-green-800">
              Agroindústria
            </strong>

            <p className="mt-2">
              Em 2026 foi inaugurada uma unidade de processamento de tomate.
            </p>
          </Card>
        </div>

        <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-6">
          <h3 className="font-bold text-green-950">
            O número de 765.787 toneladas é histórico, não uma estimativa de
            2026
          </h3>

          <p className="mt-2 text-sm leading-7 text-green-900">
            A AGROINOVA mantém a separação entre séries estatísticas e
            acontecimentos recentes. A produção de 765.787 toneladas refere-se
            à campanha 2022/23 divulgada pelo MINAGRIF/CIAM. Não será
            apresentada como produção actual de 2026.
          </p>
        </div>
      </section>

      {/* BOTÂNICA */}
      <section id="botanica" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="02 • Botânica"
            title="Conhecer a planta antes de manejar a cultura"
            description="O tomate é uma cultura altamente influenciada pela genética, temperatura, disponibilidade de água, nutrição e sanidade."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card title="Nome científico">
              <p>
                <em>Solanum lycopersicum L.</em>
              </p>

              <p className="mt-3">
                Pertence à família Solanaceae, juntamente com culturas como
                pimento, beringela e batata.
              </p>
            </Card>

            <Card title="Raiz">
              <p>
                O sistema radicular pode desenvolver-se de forma ampla quando
                não existem limitações físicas ou químicas no solo.
              </p>
            </Card>

            <Card title="Caule">
              <p>
                O caule apresenta crescimento que varia conforme o tipo
                genético. Há materiais de crescimento determinado e
                indeterminado.
              </p>
            </Card>

            <Card title="Folhas">
              <p>
                As folhas são fundamentais para interceptação de luz e
                produção de fotoassimilados.
              </p>
            </Card>

            <Card title="Flores">
              <p>
                O tomate apresenta flores hermafroditas e pode realizar
                autopolinização, embora condições ambientais influenciem o
                pegamento.
              </p>
            </Card>

            <Card title="Fruto">
              <p>
                O fruto apresenta grande diversidade de formato, tamanho,
                cor, firmeza e composição, dependendo da genética e do sistema
                de produção.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CLIMA */}
      <section id="clima" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="03 • Clima"
          title="Temperatura e humidade determinam muito do resultado"
          description="O tomate é sensível a extremos térmicos e a condições que favorecem doenças. O ambiente deve ser considerado antes de escolher a época de produção."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card title="Temperatura">
            <p>
              Temperaturas excessivamente elevadas ou baixas podem prejudicar
              floração, polinização, pegamento e desenvolvimento do fruto.
            </p>
          </Card>

          <Card title="Radiação solar">
            <p>
              A luz é essencial para fotossíntese e produção de fotoassimilados.
              Contudo, excesso de calor associado a radiação intensa pode
              aumentar problemas fisiológicos.
            </p>
          </Card>

          <Card title="Humidade">
            <p>
              Humidade elevada e folhas molhadas durante períodos prolongados
              aumentam o risco de diversas doenças.
            </p>
          </Card>

          <Card title="Ventilação">
            <p>
              Boa circulação de ar é especialmente importante em sistemas
              protegidos e em áreas com elevada humidade.
            </p>
          </Card>
        </div>

        <div className="mt-8 rounded-2xl bg-green-950 p-7 text-white">
          <h3 className="text-xl font-bold">
            Não existe uma única época de tomate para Angola
          </h3>

          <p className="mt-3 text-sm leading-7 text-green-100">
            Namibe, Benguela, Huíla, Huambo, Luanda e outras regiões possuem
            condições diferentes. A época deve ser definida considerando
            temperatura, chuva, irrigação, altitude, pressão de doenças e
            destino comercial.
          </p>
        </div>
      </section>

      {/* SOLO */}
      <section id="solo" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="04 • Solo"
            title="Solo bem drenado e correctamente fertilizado"
            description="O tomate responde fortemente às condições da zona radicular. Antes de aplicar fertilizantes, a análise do solo deve orientar as decisões."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card title="Drenagem">
              <p>
                O encharcamento prolongado reduz a oxigenação radicular e pode
                favorecer doenças.
              </p>
            </Card>

            <Card title="Estrutura">
              <p>
                Solos fisicamente favoráveis permitem melhor desenvolvimento
                das raízes e infiltração da água.
              </p>
            </Card>

            <Card title="Matéria orgânica">
              <p>
                A matéria orgânica contribui para estrutura, retenção de água
                e actividade biológica do solo.
              </p>
            </Card>

            <Card title="pH">
              <p>
                O pH deve ser determinado por análise. Correcções devem ser
                calculadas a partir do diagnóstico e não aplicadas de forma
                indiscriminada.
              </p>
            </Card>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="font-bold text-slate-950">
              Atenção à salinidade em sistemas irrigados
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-700">
              Em regiões de horticultura irrigada, a qualidade da água e a
              acumulação de sais no solo devem ser monitorizadas. A irrigação
              sem drenagem adequada pode criar problemas progressivos para o
              sistema radicular.
            </p>
          </div>
        </div>
      </section>

      {/* VIVEIRO */}
      <section id="viveiro" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="05 • Viveiro"
          title="Uma boa lavoura começa com uma boa muda"
          description="A produção de mudas uniformes reduz falhas de estabelecimento e facilita o manejo posterior."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card title="Semente">
            <p>
              Utilizar sementes de origem conhecida, com identidade varietal e
              qualidade adequadas ao objectivo de produção.
            </p>
          </Card>

          <Card title="Substrato">
            <p>
              Deve permitir boa drenagem, retenção equilibrada de água e
              desenvolvimento radicular.
            </p>
          </Card>

          <Card title="Água">
            <p>
              A irrigação das mudas deve ser regular sem criar saturação
              permanente do substrato.
            </p>
          </Card>

          <Card title="Sanidade">
            <p>
              O viveiro deve ser protegido contra contaminação, insectos
              vectores e doenças transmitidas por sementes ou substratos.
            </p>
          </Card>

          <Card title="Aclimatação">
            <p>
              Antes do transplante, as mudas precisam ser preparadas
              progressivamente para as condições do campo.
            </p>
          </Card>

          <Card title="Uniformidade">
            <p>
              Mudas muito desuniformes podem originar diferenças de crescimento
              e maturação dentro do mesmo talhão.
            </p>
          </Card>

          <Card title="Transplante">
            <p>
              Evitar danos excessivos às raízes e realizar a operação quando
              as condições ambientais forem favoráveis.
            </p>
          </Card>

          <Card title="Rastreabilidade">
            <p>
              Registar lote de sementes, data de sementeira, viveiro, cultivar
              e destino das mudas.
            </p>
          </Card>
        </div>
      </section>

      {/* GALERIA */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="06 • Campo angolano"
            title="Tomate produzido em Angola"
            description="Nesta galeria priorizamos imagens reais de produção, colheita e comercialização em Angola."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
                    alt={imagem.alt}
                    className="h-64 w-full object-cover transition duration-300 hover:scale-[1.02]"
                  />
                </a>

                <div className="p-5">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">
                    Angola
                  </span>

                  <h3 className="mt-3 font-bold text-slate-950">
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
                    Abrir fonte original →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PLANTIO */}
      <section id="plantio" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="07 • Implantação"
          title="Transplantação e estabelecimento"
          description="O tomate comercial exige uniformidade desde o início do ciclo."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card title="Preparar o terreno">
            <p>
              Corrigir problemas de compactação, drenagem e fertilidade antes
              da instalação da cultura.
            </p>
          </Card>

          <Card title="Camalhões">
            <p>
              Em determinados solos e sistemas irrigados, camalhões ou canteiros
              podem melhorar drenagem e organização da irrigação.
            </p>
          </Card>

          <Card title="Transplantar">
            <p>
              Realizar o transplante procurando minimizar stress hídrico e
              danos ao sistema radicular.
            </p>
          </Card>

          <Card title="Irrigar">
            <p>
              Garantir água suficiente para o estabelecimento sem provocar
              saturação prolongada.
            </p>
          </Card>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card title="Espaçamento">
            <p>
              O espaçamento depende do hábito de crescimento, variedade ou
              híbrido, sistema de tutoramento, fertilidade e equipamento.
            </p>

            <p className="mt-3">
              Por isso, a AGROINOVA não apresenta um único espaçamento como
              recomendação universal para todas as regiões de Angola.
            </p>
          </Card>

          <Card title="Tomate determinado e indeterminado">
            <p>
              Materiais determinados apresentam crescimento mais concentrado,
              enquanto os indeterminados continuam a emitir crescimento
              vegetativo e reprodutivo por períodos mais longos.
            </p>

            <p className="mt-3">
              Esta diferença afecta tutoramento, poda, densidade e calendário
              de colheita.
            </p>
          </Card>
        </div>
      </section>

      {/* MANEJO */}
      <section id="manejo" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="08 • Manejo"
            title="Água, nutrição, tutoramento e poda"
            description="O manejo deve ser ajustado à cultivar, ambiente, sistema de produção e destino comercial."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card title="Irrigação">
              <p>
                A irrigação deve manter a zona radicular com disponibilidade
                adequada de água sem provocar encharcamento.
              </p>
            </Card>

            <Card title="Gotejamento">
              <p>
                O gotejamento permite aplicar água directamente na zona
                radicular e pode facilitar a fertirrigação.
              </p>
            </Card>

            <Card title="Fertirrigação">
              <p>
                Pode ser utilizada em sistemas irrigados para fornecer
                nutrientes de forma parcelada, desde que exista diagnóstico e
                controlo da qualidade da água.
              </p>
            </Card>

            <Card title="Azoto">
              <p>
                É importante para crescimento vegetativo, mas excesso pode
                produzir vegetação excessiva e desequilíbrio em relação à
                produção de frutos.
              </p>
            </Card>

            <Card title="Fósforo">
              <p>
                Participa de processos energéticos e do desenvolvimento
                radicular e reprodutivo.
              </p>
            </Card>

            <Card title="Potássio">
              <p>
                Tem papel importante na regulação hídrica e na qualidade dos
                frutos.
              </p>
            </Card>

            <Card title="Cálcio">
              <p>
                O fornecimento adequado de cálcio e a estabilidade hídrica são
                importantes para reduzir problemas fisiológicos dos frutos.
              </p>
            </Card>

            <Card title="Tutoramento">
              <p>
                Em sistemas de tomate tutorado, a condução facilita a
                organização das plantas, circulação de ar e operações de
                colheita.
              </p>
            </Card>

            <Card title="Poda">
              <p>
                A poda deve ser definida de acordo com o tipo de crescimento,
                sistema de condução e objectivo comercial.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ÁGUA EM ANGOLA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="09 • Irrigação em Angola"
          title="O Vale do Cavaco é um caso importante de investigação"
          description="A investigação angolana já estudou as necessidades hídricas do tomate em condições concretas de produção."
        />

        <div className="rounded-3xl bg-green-950 p-8 text-white">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-300">
            Benguela • Vale do Cavaco
          </p>

          <h3 className="mt-3 text-2xl font-black">
            Irrigação por gotejamento com energia fotovoltaica
          </h3>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-green-100">
            Um estudo realizado no Vale do Cavaco investigou os requerimentos
            hídricos do tomate utilizando irrigação por gotejamento alimentada
            por energia fotovoltaica. O estudo estimou evapotranspiração de
            cultura de 2,4 mm/dia na fase inicial, 5,6 mm/dia na fase
            intermédia e 3,5 mm/dia na fase final, com 432,4 mm acumulados no
            ciclo avaliado.
          </p>

          <p className="mt-4 max-w-4xl text-xs leading-6 text-green-200">
            Estes valores pertencem ao estudo específico realizado no Vale do
            Cavaco e não devem ser transformados numa necessidade hídrica
            universal para todo o território angolano.
          </p>
        </div>
      </section>

      {/* SANIDADE */}
      <section id="sanidade" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="10 • Sanidade"
            title="Pragas e doenças podem comprometer grande parte da produção"
            description="A prevenção, monitorização e diagnóstico correcto devem preceder qualquer aplicação de pesticidas."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card title="Mosca-branca">
              <p>
                Pode causar danos directos e é importante também pela
                transmissão de determinados vírus.
              </p>
            </Card>

            <Card title="Tripes">
              <p>
                Podem causar danos em folhas e frutos e participar na
                transmissão de viroses.
              </p>
            </Card>

            <Card title="Mineiros">
              <p>
                Larvas que fazem galerias nas folhas podem reduzir a área
                fotossintética.
              </p>
            </Card>

            <Card title="Lagartas">
              <p>
                Algumas espécies atacam folhas e frutos. A monitorização é
                essencial para decidir medidas de controlo.
              </p>
            </Card>

            <Card title="Ácaros">
              <p>
                Podem aumentar rapidamente em determinadas condições de
                temperatura e baixa humidade.
              </p>
            </Card>

            <Card title="Nemátodes">
              <p>
                Nemátodes das galhas podem comprometer o sistema radicular e
                reduzir o vigor das plantas.
              </p>
            </Card>

            <Card title="Murcha bacteriana">
              <p>
                Doenças vasculares podem ser particularmente graves em áreas
                com condições ambientais favoráveis.
              </p>
            </Card>

            <Card title="Tombamento de mudas">
              <p>
                Problemas no viveiro podem provocar morte de plântulas e
                grandes perdas antes do transplante.
              </p>
            </Card>

            <Card title="Doenças foliares">
              <p>
                Humidade elevada, molhamento foliar e má ventilação podem
                favorecer vários agentes patogénicos.
              </p>
            </Card>

            <Card title="Viroses">
              <p>
                A presença de insectos vectores torna a prevenção especialmente
                importante. Plantas suspeitas devem ser identificadas e
                manejadas de acordo com orientação técnica.
              </p>
            </Card>

            <Card title="Podridões dos frutos">
              <p>
                Podem estar associadas a agentes patogénicos, danos mecânicos,
                excesso de humidade ou condições inadequadas de armazenamento.
              </p>
            </Card>

            <Card title="Diagnóstico">
              <p>
                Uma folha amarelada ou um fruto deformado não identifica,
                sozinho, a causa. Diagnóstico correcto evita tratamentos
                desnecessários.
              </p>
            </Card>
          </div>

          <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-6">
            <h3 className="font-bold text-red-950">
              Experiência específica do Namibe
            </h3>

            <p className="mt-2 text-sm leading-7 text-red-900">
              Um estudo realizado em oito explorações produtoras de tomate no
              Namibe caracterizou sistemas de produção e identificou problemas
              relacionados com disponibilidade de meios, irrigação,
              produtividade, comercialização e manejo de pragas. O trabalho
              reportou rendimento médio de 15,67 t/ha nas explorações
              avaliadas.
            </p>

            <p className="mt-3 text-xs leading-6 text-red-800">
              O valor é histórico e corresponde às explorações estudadas,
              não constituindo rendimento médio actual de toda a província.
            </p>
          </div>
        </div>
      </section>

      {/* FISIOLOGIA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="11 • Fisiologia"
          title="Floração, pegamento e desenvolvimento do fruto"
          description="Grande parte da produtividade final é definida durante a fase reprodutiva."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card title="Floração">
            <p>
              A formação e abertura das flores depende das condições ambientais
              e do estado nutricional da planta.
            </p>
          </Card>

          <Card title="Pegamento">
            <p>
              Temperaturas extremas, défice hídrico e desequilíbrios nutricionais
              podem reduzir o pegamento dos frutos.
            </p>
          </Card>

          <Card title="Enchimento">
            <p>
              Água, folhas activas e disponibilidade nutricional são essenciais
              para o crescimento do fruto.
            </p>
          </Card>

          <Card title="Maturação">
            <p>
              A mudança de cor é acompanhada por alterações de textura,
              composição e qualidade comercial.
            </p>
          </Card>
        </div>
      </section>

      {/* COLHEITA */}
      <section id="colheita" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="12 • Colheita"
            title="Colher no ponto certo para o destino certo"
            description="O tomate destinado ao mercado fresco tem necessidades diferentes do tomate destinado à indústria."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card title="Mercado fresco">
              <p>
                A firmeza, aparência, tamanho, cor e ausência de danos são
                factores fundamentais.
              </p>
            </Card>

            <Card title="Indústria">
              <p>
                O produtor deve considerar características valorizadas pela
                transformação, incluindo matéria-prima uniforme e adequada ao
                processo.
              </p>
            </Card>

            <Card title="Colheita manual">
              <p>
                É importante reduzir quedas, esmagamentos e ferimentos que
                aceleram deterioração.
              </p>
            </Card>

            <Card title="Transporte">
              <p>
                A embalagem deve proteger os frutos e reduzir pressão mecânica
                durante transporte e armazenamento.
              </p>
            </Card>
          </div>

          <div className="mt-8 rounded-2xl bg-slate-900 p-7 text-white">
            <h3 className="text-xl font-bold">
              Pós-colheita é parte da produtividade
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-300">
              Um produtor pode obter uma boa produção no campo e ainda perder
              parte significativa do valor se o tomate sofrer danos durante
              colheita, embalagem, transporte ou comercialização.
            </p>
          </div>
        </div>
      </section>

      {/* ANGOLA */}
      <section id="angola" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="13 • Tomate em Angola"
          title="Uma cadeia que está a aproximar campo e indústria"
          description="O tomate é um dos melhores exemplos para estudar a ligação entre produção agrícola, irrigação, mercado, financiamento e agroindústria em Angola."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Namibe">
            <p>
              O Namibe possui produção comercial de tomate documentada e
              abastece mercados importantes. Estudos realizados na província
              também analisaram as explorações produtoras e os seus problemas
              de manejo e comercialização.
            </p>
          </Card>

          <Card title="Benguela">
            <p>
              Benguela apresenta forte actividade de horticultura. No Vale do
              Cavaco foram realizados estudos sobre irrigação do tomate e, em
              Ganda, existem experiências recentes de cooperativas produtoras.
            </p>
          </Card>

          <Card title="Dombe Grande">
            <p>
              Dombe Grande tornou-se um caso estratégico para a cadeia do
              tomate. Em 7 de Fevereiro de 2026 foi inaugurada uma fábrica de
              processamento de tomate no município.
            </p>
          </Card>

          <Card title="FADA e produtores">
            <p>
              Em Agosto de 2026, o FADA informou que 27 produtores estavam
              abrangidos por financiamento para sementes, fertilizantes,
              irrigação e outros meios. As primeiras 30 toneladas já tinham
              sido entregues à unidade de transformação.
            </p>
          </Card>

          <Card title="Matala — Huíla">
            <p>
              Estudos sobre o Perímetro Irrigado da Matala identificaram o
              tomate entre as culturas relevantes para o desenvolvimento
              agrícola da área.
            </p>
          </Card>

          <Card title="Luanda e Quiminha">
            <p>
              A produção hortícola próxima de grandes centros consumidores
              possui vantagem logística, mas depende fortemente da
              disponibilidade e gestão da água.
            </p>
          </Card>
        </div>

        <div className="mt-10 rounded-3xl border border-green-200 bg-green-50 p-8">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-700">
            Dombe Grande • Benguela
          </p>

          <h3 className="mt-2 text-2xl font-black text-green-950">
            Um novo elo entre produção e transformação
          </h3>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-green-900">
            A fábrica inaugurada em 2026 tem capacidade inicial informada de
            até 120 toneladas de tomate por dia. Em Agosto de 2026, o FADA
            registou as primeiras 30 toneladas entregues por agricultores
            financiados à unidade de transformação.
          </p>

          <p className="mt-4 text-xs leading-6 text-green-800">
            Estes números pertencem ao empreendimento e aos produtores
            apoiados no Dombe Grande. Não representam produção nacional.
          </p>
        </div>
      </section>

      {/* CADEIA DE VALOR */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="14 • Cadeia de valor"
            title="Tomate fresco, polpa e produtos transformados"
            description="A transformação pode reduzir perdas e criar mercados mais estáveis, mas exige matéria-prima regular e compradores."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            <Card title="Produção">
              <p>
                Sementes, mudas, solo, água, fertilização e protecção.
              </p>
            </Card>

            <Card title="Colheita">
              <p>
                Colheita organizada e redução de danos mecânicos.
              </p>
            </Card>

            <Card title="Recepção">
              <p>
                Pesagem, selecção, lavagem e classificação.
              </p>
            </Card>

            <Card title="Processamento">
              <p>
                Trituração, tratamento térmico, separação e concentração.
              </p>
            </Card>

            <Card title="Mercado">
              <p>
                Polpa, tomate tamisado, produtos embalados e mercado fresco.
              </p>
            </Card>
          </div>

          <div className="mt-8 rounded-3xl bg-green-950 p-8 text-white">
            <h3 className="text-2xl font-black">
              Dombe Grande como laboratório agroindustrial
            </h3>

            <p className="mt-4 max-w-4xl text-sm leading-7 text-green-100">
              A experiência de Dombe Grande mostra que financiamento agrícola,
              produção, unidade industrial e mercado precisam funcionar de
              forma articulada. Produzir mais sem capacidade de absorção pode
              gerar perdas; ter uma fábrica sem matéria-prima regular também
              compromete a sustentabilidade industrial.
            </p>
          </div>
        </div>
      </section>

      {/* PROVÍNCIAS */}
      <section
        id="provincias"
        className="border-y border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="15 • Angola por província"
            title="Mapa de conhecimento do tomate"
            description="A presença da província nesta ferramenta não significa que exista uma estatística específica de produção. O objectivo é organizar conhecimento territorial."
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
                Pesquisar província
              </label>

              <input
                id="pesquisa"
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
                placeholder="Ex.: Namibe, Benguela, Huíla..."
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
                <div className="flex items-center justify-between gap-3">
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
              Nenhuma província encontrada.
            </div>
          )}
        </div>
      </section>

      {/* INVESTIGAÇÃO */}
      <section id="investigacao" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="16 • Investigação"
          title="Perguntas que a investigação agrícola angolana pode responder"
          description="A página não deve terminar na recomendação técnica. Deve também servir como ponto de partida para estudantes, técnicos e investigadores."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card title="Genética">
            <p>
              Quais cultivares apresentam melhor desempenho nas diferentes
              zonas agroecológicas de Angola?
            </p>
          </Card>

          <Card title="Irrigação">
            <p>
              Como optimizar a água para tomate em diferentes sistemas
              irrigados?
            </p>
          </Card>

          <Card title="Sanidade">
            <p>
              Quais pragas e doenças provocam as maiores perdas em cada
              região?
            </p>
          </Card>

          <Card title="Namibe">
            <p>
              Como aumentar a produtividade e melhorar a comercialização das
              explorações produtoras?
            </p>
          </Card>

          <Card title="Benguela">
            <p>
              Como integrar produção familiar, cooperativas e indústria no
              corredor do tomate?
            </p>
          </Card>

          <Card title="Pós-colheita">
            <p>
              Quais tecnologias reduzem perdas entre o campo e o consumidor?
            </p>
          </Card>

          <Card title="Indústria">
            <p>
              Qual quantidade e qualidade de matéria-prima são necessárias
              para garantir funcionamento regular das fábricas?
            </p>
          </Card>

          <Card title="Mercado">
            <p>
              Como melhorar contratos entre agricultores, comerciantes e
              unidades de transformação?
            </p>
          </Card>

          <Card title="Água">
            <p>
              Qual é a relação entre eficiência de irrigação, produtividade e
              rentabilidade nos diferentes perímetros irrigados?
            </p>
          </Card>
        </div>
      </section>

      {/* FICHA DE CAMPO */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="17 • Ficha de campo"
            title="Dados que devem ser registados"
            description="Uma futura base nacional de conhecimento sobre tomate precisa de dados de campo comparáveis."
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card title="Localização">
              <p>
                Província, município, comuna, coordenadas e altitude.
              </p>
            </Card>

            <Card title="Área">
              <p>
                Área plantada, área colhida e área perdida.
              </p>
            </Card>

            <Card title="Cultivar">
              <p>
                Nome da variedade ou híbrido, fornecedor e lote de sementes.
              </p>
            </Card>

            <Card title="Viveiro">
              <p>
                Data de sementeira, substrato, emergência e idade da muda.
              </p>
            </Card>

            <Card title="Solo">
              <p>
                pH, textura, matéria orgânica e nutrientes analisados.
              </p>
            </Card>

            <Card title="Irrigação">
              <p>
                Fonte de água, método, frequência e volume aplicado.
              </p>
            </Card>

            <Card title="Fertilização">
              <p>
                Produto, dose, data e forma de aplicação.
              </p>
            </Card>

            <Card title="Sanidade">
              <p>
                Pragas, doenças, intensidade e medidas de controlo.
              </p>
            </Card>

            <Card title="Produção">
              <p>
                Peso total, área colhida e produtividade.
              </p>
            </Card>

            <Card title="Qualidade">
              <p>
                Tamanho, firmeza, cor, danos e outros parâmetros comerciais.
              </p>
            </Card>

            <Card title="Pós-colheita">
              <p>
                Tipo de embalagem, transporte, perdas e tempo até ao mercado.
              </p>
            </Card>

            <Card title="Venda">
              <p>
                Comprador, preço, destino e forma de comercialização.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="18 • Fontes"
          title="Fontes angolanas e científicas"
          description="A página separa estatísticas, experiências locais, investigação e informação técnica."
        />

        <div className="space-y-4">
          <a
            href="https://www.ciam.gov.ao/ao/noticia/2776"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-green-300 hover:bg-green-50"
          >
            <strong className="text-slate-950">
              CIAM — Produção agrícola 2022/23
            </strong>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Fonte de informação sobre a produção nacional de hortícolas,
              incluindo 765.787 toneladas de tomate.
            </p>
          </a>

          <a
            href="https://www.ine.gov.ao/publicacoes/detalhes/NDY0MDE%3D"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-green-300 hover:bg-green-50"
          >
            <strong className="text-slate-950">
              INE / MINAGRIF — Anuário Estatístico da Agricultura
            </strong>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Publicação estatística oficial com dados das campanhas agrícolas
              2022/23 e 2023/24.
            </p>
          </a>

          <a
            href="https://www.fada.gov.ao/financiamento-fada-impulsiona-producao-de-tomate-no-dombe-grande/"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-green-300 hover:bg-green-50"
          >
            <strong className="text-slate-950">
              FADA — Produção de tomate no Dombe Grande
            </strong>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Informação de Agosto de 2026 sobre produtores financiados,
              primeiras entregas à indústria e integração da cadeia de valor.
            </p>
          </a>

          <a
            href="https://mindcom.gov.ao/web/noticias/ministro-da-industria-e-comercio-inaugura-fabrica-de-processamento-de-tomate-no-dombe-grande"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-green-300 hover:bg-green-50"
          >
            <strong className="text-slate-950">
              Ministério da Indústria e Comércio — Fábrica Dombe
            </strong>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Informação oficial sobre a inauguração da fábrica de processamento
              de tomate no Dombe Grande em Fevereiro de 2026.
            </p>
          </a>

          <a
            href="https://agris.fao.org/search/es/records/690e047693f6501193f9456c"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-green-300 hover:bg-green-50"
          >
            <strong className="text-slate-950">
              FAO AGRIS — Explorações produtoras de tomate no Namibe
            </strong>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Estudo sobre oito explorações produtoras de tomate na província
              do Namibe e os seus problemas de produção e manejo de pragas.
            </p>
          </a>

          <a
            href="https://agris.fao.org/search/en/providers/122436/records/67599264c7a957febdfcb72d"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-green-300 hover:bg-green-50"
          >
            <strong className="text-slate-950">
              FAO AGRIS — Necessidades hídricas do tomate em Cavaco
            </strong>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Investigação realizada no Vale do Cavaco, Benguela, sobre
              evapotranspiração e irrigação por gotejamento.
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
              Experiência recente de produção e colheita de tomate em Ganda,
              Benguela.
            </p>
          </a>

          <a
            href="https://agrariacad.com/2025/09/08/impacto-da-ausencia-de-industria-de-processamento-de-tomate-na-baia-farta-provincia-de-benguela-angola/"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-green-300 hover:bg-green-50"
          >
            <strong className="text-slate-950">
              Revista Agrária Acadêmica — Baía Farta
            </strong>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Estudo sobre os impactos económicos, sociais e produtivos da
              transformação de tomate em Dombe Grande e Equimina.
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

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm leading-7 text-slate-300">
                765.787 toneladas corresponde à campanha 2022/23 e não será
                apresentada como produção actual de 2026.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm leading-7 text-slate-300">
                Os 30 toneladas entregues em 2026 correspondem aos produtores
                apoiados no Dombe Grande e não à produção nacional.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm leading-7 text-slate-300">
                Os dados do estudo do Namibe são históricos e correspondem às
                explorações avaliadas, não a toda a província.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm leading-7 text-slate-300">
                Os valores de irrigação de Cavaco pertencem àquele estudo
                específico e não são transformados em recomendação nacional.
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
              href="/agricultura/girassol"
              className="text-slate-600 hover:text-green-700"
            >
              Girassol
            </Link>

            <Link
              href="/agricultura/algodao"
              className="text-slate-600 hover:text-green-700"
            >
              Algodão
            </Link>

            <Link
              href="/agricultura/soja"
              className="text-slate-600 hover:text-green-700"
            >
              Soja
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