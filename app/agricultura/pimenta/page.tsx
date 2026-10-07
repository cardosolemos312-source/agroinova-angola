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
      "A pimenta pode integrar sistemas hortícolas próximos dos mercados, desde que exista água, drenagem adequada e material vegetal de qualidade.",
  },
  {
    nome: "Benguela",
    regiao: "Centro-Oeste",
    observacao:
      "A horticultura comercial e os sistemas irrigados criam oportunidades para produção de Capsicum destinada ao mercado fresco e transformação.",
  },
  {
    nome: "Bié",
    regiao: "Centro",
    observacao:
      "Pode integrar sistemas diversificados de horticultura, dependendo da época, disponibilidade de água, solo e acesso ao mercado.",
  },
  {
    nome: "Cabinda",
    regiao: "Norte",
    observacao:
      "A elevada humidade exige atenção à drenagem, ventilação, doenças foliares e escolha da época de cultivo.",
  },
  {
    nome: "Cuando",
    regiao: "Leste",
    observacao:
      "A produção deve ser validada localmente segundo água, solo, clima, sementes e canais de comercialização.",
  },
  {
    nome: "Cubango",
    regiao: "Leste",
    observacao:
      "Pode ser integrada em sistemas hortícolas onde exista disponibilidade de água e condições adequadas de comercialização.",
  },
  {
    nome: "Cuanza Norte",
    regiao: "Norte",
    observacao:
      "A cultura pode integrar horticultura familiar e comercial, com atenção especial à drenagem e sanidade.",
  },
  {
    nome: "Cuanza Sul",
    regiao: "Centro-Oeste",
    observacao:
      "A diversidade agrícola da província permite integrar pimenta em sistemas hortícolas adaptados às condições locais.",
  },
  {
    nome: "Cunene",
    regiao: "Sul",
    observacao:
      "A disponibilidade de água é um dos principais factores para produção regular de hortícolas.",
  },
  {
    nome: "Huambo",
    regiao: "Centro",
    observacao:
      "Pode integrar sistemas hortícolas diversificados, sendo importante ajustar época, material vegetal e manejo às condições locais.",
  },
  {
    nome: "Huíla",
    regiao: "Sul",
    observacao:
      "A horticultura irrigada permite produção comercial em determinadas zonas, desde que água, solo e sanidade sejam correctamente manejados.",
  },
  {
    nome: "Icolo e Bengo",
    regiao: "Norte",
    observacao:
      "A proximidade de grandes mercados favorece horticultura comercial e periurbana.",
  },
  {
    nome: "Luanda",
    regiao: "Litoral",
    observacao:
      "A proximidade do mercado consumidor cria oportunidades para hortícolas de ciclo relativamente curto.",
  },
  {
    nome: "Lunda Norte",
    regiao: "Leste",
    observacao:
      "A produção deve considerar drenagem, fertilidade, doenças e acesso a sementes e insumos.",
  },
  {
    nome: "Lunda Sul",
    regiao: "Leste",
    observacao:
      "A aptidão deve ser determinada por ensaios e avaliação local de solo, água e condições climáticas.",
  },
  {
    nome: "Malanje",
    regiao: "Norte",
    observacao:
      "Pode integrar sistemas hortícolas diversificados, incluindo produção para mercados urbanos.",
  },
  {
    nome: "Moxico",
    regiao: "Leste",
    observacao:
      "A cultura pode integrar horticultura diversificada quando houver água e canais de comercialização.",
  },
  {
    nome: "Moxico Leste",
    regiao: "Leste",
    observacao:
      "A produção deve ser estudada considerando disponibilidade de água, solos e logística.",
  },
  {
    nome: "Namibe",
    regiao: "Sul",
    observacao:
      "Os sistemas irrigados são essenciais para horticultura em ambiente árido e devem ser acompanhados de gestão rigorosa da água.",
  },
  {
    nome: "Uíge",
    regiao: "Norte",
    observacao:
      "A cultura pode integrar sistemas familiares e comerciais, com atenção às doenças favorecidas por humidade.",
  },
  {
    nome: "Zaire",
    regiao: "Norte",
    observacao:
      "Pode integrar sistemas hortícolas regionais, dependendo de solo, água, época e mercado.",
  },
];

const imagens = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Chili_peppers_in_a_market.jpg/1280px-Chili_peppers_in_a_market.jpg",
    alt: "Pimentas vermelhas comercializadas",
    titulo: "Pimenta no mercado",
    descricao:
      "Diversidade de frutos de Capsicum destinados ao consumo e comercialização.",
    fonte: "Wikimedia Commons",
    href: "https://commons.wikimedia.org/wiki/File:Chili_peppers_in_a_market.jpg",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Red_chili_peppers.jpg/1280px-Red_chili_peppers.jpg",
    alt: "Pimentas vermelhas maduras",
    titulo: "Frutos maduros",
    descricao:
      "Frutos maduros de pimenta, fase em que a cor e a composição mudam significativamente.",
    fonte: "Wikimedia Commons",
    href: "https://commons.wikimedia.org/wiki/File:Red_chili_peppers.jpg",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Chili_pepper_plant.jpg/1280px-Chili_pepper_plant.jpg",
    alt: "Planta de pimenta com frutos",
    titulo: "Planta de Capsicum",
    descricao:
      "Exemplo de planta de Capsicum em produção.",
    fonte: "Wikimedia Commons",
    href: "https://commons.wikimedia.org/wiki/File:Chili_pepper_plant.jpg",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Chilli_peppers.jpg/1280px-Chilli_peppers.jpg",
    alt: "Diversidade de pimentas",
    titulo: "Diversidade de frutos",
    descricao:
      "A diversidade dentro do género Capsicum inclui frutos com diferentes formas, cores, tamanhos e níveis de pungência.",
    fonte: "Wikimedia Commons",
    href: "https://commons.wikimedia.org/wiki/File:Chilli_peppers.jpg",
  },
];

function Card({ title, children }: CardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-3 text-lg font-bold text-slate-950">{title}</h3>
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

export default function PimentaPage() {
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
          alt="Pimentas para comercialização"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-green-950 via-green-950/90 to-green-900/50" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-green-300">
              AGROINOVA ANGOLA • Agricultura
            </p>

            <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
              Pimenta
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-green-50 md:text-xl">
              Guia técnico sobre o género <em>Capsicum</em>, abrangendo
              produção de mudas, implantação, irrigação, nutrição, sanidade,
              colheita, secagem, processamento e valorização da produção em
              Angola.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#visao-geral"
                className="rounded-full bg-white px-5 py-3 text-sm font-bold text-green-900 transition hover:bg-green-100"
              >
                Explorar conteúdo
              </a>

              <a
                href="#tipos"
                className="rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                Tipos de pimenta
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

          <span>Pimenta</span>
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

          <a href="#tipos" className="whitespace-nowrap hover:text-green-700">
            Tipos
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

          <a href="#processamento" className="whitespace-nowrap hover:text-green-700">
            Processamento
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
          title="Pimenta não é uma única cultura"
          description="O termo pimenta é utilizado para diferentes materiais do género Capsicum. A identificação correcta da espécie, cultivar ou tipo comercial é fundamental para orientar produção, pungência, colheita e destino."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card title="Género">
            <strong className="text-2xl text-green-800">
              Capsicum
            </strong>

            <p className="mt-2">
              Inclui diferentes espécies cultivadas para consumo fresco,
              secagem, condimentos e processamento.
            </p>
          </Card>

          <Card title="Mercado fresco">
            <p>
              Frutos verdes ou maduros podem ser comercializados segundo
              tamanho, cor, firmeza, formato e pungência.
            </p>
          </Card>

          <Card title="Pimenta seca">
            <p>
              A secagem aumenta a estabilidade do produto e permite
              armazenamento e comercialização para além da colheita.
            </p>
          </Card>

          <Card title="Processamento">
            <p>
              Pode originar molhos, pastas, condimentos, pó e outros produtos
              alimentares.
            </p>
          </Card>
        </div>

        <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-6">
          <h3 className="font-bold text-green-950">
            Não confundir pimenta com pimento
          </h3>

          <p className="mt-2 text-sm leading-7 text-green-900">
            Na linguagem comercial, diferentes frutos de Capsicum podem
            receber nomes locais distintos. A AGROINOVA recomenda registar
            sempre o nome científico e, quando possível, a cultivar ou tipo
            comercial, em vez de usar apenas o nome popular.
          </p>
        </div>
      </section>

      {/* BOTÂNICA */}
      <section id="botanica" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="02 • Botânica"
            title="Conhecer o Capsicum"
            description="As características da planta ajudam a definir espaçamento, tutoramento, colheita e destino comercial."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card title="Família">
              <p>
                As pimentas do género Capsicum pertencem à família Solanaceae.
              </p>
            </Card>

            <Card title="Raiz">
              <p>
                O sistema radicular precisa de solo sem compactação excessiva e
                de disponibilidade equilibrada de água e oxigénio.
              </p>
            </Card>

            <Card title="Caule">
              <p>
                O caule pode ramificar-se significativamente, dependendo do
                genótipo e do sistema de produção.
              </p>
            </Card>

            <Card title="Flores">
              <p>
                As flores são importantes para a formação dos frutos e são
                influenciadas por temperatura, água e estado nutricional.
              </p>
            </Card>

            <Card title="Fruto">
              <p>
                O fruto apresenta enorme diversidade de forma, tamanho, cor,
                espessura de parede e pungência.
              </p>
            </Card>

            <Card title="Capsaicina">
              <p>
                A capsaicina e compostos relacionados são responsáveis pela
                pungência característica de muitas pimentas.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* TIPOS */}
      <section id="tipos" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="03 • Tipos e genética"
          title="Identificar correctamente o material vegetal"
          description="A diversidade de Capsicum é grande. O produtor deve escolher o material em função do mercado e das condições de produção."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card title="Capsicum annuum">
            <p>
              Uma das espécies mais importantes do género. Inclui diversos
              tipos de pimentas e pimentos cultivados mundialmente.
            </p>
          </Card>

          <Card title="Capsicum frutescens">
            <p>
              Inclui tipos conhecidos por frutos pequenos e frequentemente
              bastante pungentes, embora as características dependam do
              material genético.
            </p>
          </Card>

          <Card title="Capsicum chinense">
            <p>
              Inclui vários tipos de elevada pungência e grande importância
              culinária em diferentes regiões tropicais.
            </p>
          </Card>

          <Card title="Capsicum baccatum">
            <p>
              Grupo com diversidade de frutos e ampla utilização em sistemas
              alimentares de diferentes regiões.
            </p>
          </Card>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card title="Malagueta">
            <p>
              O nome malagueta pode referir-se a diferentes materiais conforme
              o país e o mercado. Para uma base de dados nacional, o nome local
              deve ser associado à identificação botânica ou ao material
              genético sempre que possível.
            </p>
          </Card>

          <Card title="Pungência">
            <p>
              O nível de pungência não deve ser inferido apenas pelo formato
              ou pela cor. A composição genética e o estado de desenvolvimento
              influenciam a concentração de capsaicinoides.
            </p>
          </Card>
        </div>

        <div className="mt-8 rounded-2xl bg-green-950 p-7 text-white">
          <h3 className="text-xl font-bold">
            O que a AGROINOVA deve registar numa variedade?
          </h3>

          <p className="mt-3 text-sm leading-7 text-green-100">
            Nome local, espécie, cultivar ou código do material, origem da
            semente, formato do fruto, cor na maturação, comprimento, diâmetro,
            espessura da parede, ciclo, arquitectura da planta, resistência ou
            tolerância documentada e destino comercial.
          </p>
        </div>
      </section>

      {/* GALERIA */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="04 • Imagens"
            title="Diversidade visual dos frutos de Capsicum"
            description="As imagens servem para reconhecimento visual. A identificação de uma cultivar não deve ser feita apenas por fotografia."
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
                  <h3 className="font-bold text-slate-950">
                    {imagem.titulo}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {imagem.descricao}
                  </p>

                  <p className="mt-3 text-xs text-slate-500">
                    Fonte: {imagem.fonte}
                  </p>

                  <a
                    href={imagem.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-sm font-bold text-green-700 hover:text-green-900"
                  >
                    Abrir fonte →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLIMA */}
      <section id="clima" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="05 • Clima"
          title="Temperatura, água e humidade"
          description="O desempenho de Capsicum depende fortemente da interação entre genética e ambiente."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card title="Temperatura">
            <p>
              Temperaturas muito baixas podem atrasar crescimento e reprodução,
              enquanto temperaturas excessivamente elevadas podem prejudicar
              floração e pegamento.
            </p>
          </Card>

          <Card title="Humidade">
            <p>
              Humidade elevada e folhas molhadas por períodos prolongados podem
              favorecer doenças.
            </p>
          </Card>

          <Card title="Chuva">
            <p>
              Chuvas intensas podem aumentar erosão, lixiviação de nutrientes,
              encharcamento e pressão de doenças.
            </p>
          </Card>

          <Card title="Irrigação">
            <p>
              Em sistemas comerciais, a irrigação permite maior controlo da
              disponibilidade de água.
            </p>
          </Card>
        </div>
      </section>

      {/* SOLO */}
      <section id="solo" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="06 • Solo"
            title="A zona radicular precisa de equilíbrio"
            description="Antes da instalação, o produtor deve conhecer as características químicas e físicas do solo."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card title="Drenagem">
              <p>
                Solos sujeitos a encharcamento prolongado aumentam o risco de
                problemas radiculares.
              </p>
            </Card>

            <Card title="Estrutura">
              <p>
                Uma estrutura favorável facilita crescimento radicular,
                infiltração e aeração.
              </p>
            </Card>

            <Card title="Matéria orgânica">
              <p>
                Pode melhorar propriedades físicas, retenção de água e
                actividade biológica.
              </p>
            </Card>

            <Card title="Análise">
              <p>
                pH, nutrientes, salinidade e outros parâmetros devem ser
                determinados por análise antes da adubação de correcção.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* VIVEIRO */}
      <section id="viveiro" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="07 • Viveiro"
          title="Mudas uniformes são a base da lavoura"
          description="A qualidade do viveiro condiciona o estabelecimento, a uniformidade e a sanidade da cultura."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card title="Sementes">
            <p>
              Utilizar sementes de origem conhecida e adequadas ao mercado
              pretendido.
            </p>
          </Card>

          <Card title="Substrato">
            <p>
              Deve combinar retenção adequada de água, drenagem e condições
              favoráveis às raízes.
            </p>
          </Card>

          <Card title="Água">
            <p>
              Evitar tanto défice hídrico como saturação permanente.
            </p>
          </Card>

          <Card title="Sanidade">
            <p>
              O viveiro deve permanecer protegido contra insectos vectores,
              fungos e contaminação.
            </p>
          </Card>

          <Card title="Aclimatação">
            <p>
              As mudas devem ser preparadas progressivamente para as condições
              do campo.
            </p>
          </Card>

          <Card title="Transplante">
            <p>
              Evitar danos às raízes e reduzir o stress hídrico durante a
              operação.
            </p>
          </Card>

          <Card title="Uniformidade">
            <p>
              Mudas desuniformes dificultam o manejo e podem criar diferentes
              momentos de colheita.
            </p>
          </Card>

          <Card title="Registo">
            <p>
              Registar lote, cultivar, origem, data de sementeira e quantidade
              produzida.
            </p>
          </Card>
        </div>
      </section>

      {/* PLANTIO */}
      <section id="plantio" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="08 • Implantação"
            title="Do viveiro para o campo"
            description="O estabelecimento deve ser ajustado ao material genético e ao sistema de produção."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card title="Preparação">
              <p>
                Eliminar compactação excessiva, corrigir drenagem e preparar
                canteiros ou camalhões quando tecnicamente justificável.
              </p>
            </Card>

            <Card title="Transplante">
              <p>
                Fazer o transplante com raízes protegidas e água suficiente
                para reduzir o choque.
              </p>
            </Card>

            <Card title="Espaçamento">
              <p>
                Deve considerar arquitectura da planta, cultivar, sistema de
                condução, fertilidade e mecanização.
              </p>
            </Card>

            <Card title="Cobertura">
              <p>
                A cobertura do solo pode ajudar a conservar humidade e reduzir
                contacto de frutos com o solo, dependendo do sistema utilizado.
              </p>
            </Card>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card title="Produção em campo aberto">
              <p>
                É mais dependente da chuva, temperatura e pressão natural de
                pragas e doenças.
              </p>
            </Card>

            <Card title="Produção protegida">
              <p>
                Pode permitir maior controlo ambiental, mas exige gestão
                rigorosa de ventilação, irrigação, nutrição e sanidade.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* MANEJO */}
      <section id="manejo" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="09 • Manejo"
          title="Água, nutrição e condução"
          description="A produtividade deve ser construída através de decisões integradas, não de uma única prática."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card title="Irrigação">
            <p>
              Manter disponibilidade de água na zona radicular sem provocar
              saturação.
            </p>
          </Card>

          <Card title="Gotejamento">
            <p>
              Pode aumentar a eficiência da aplicação de água e facilitar
              fertirrigação.
            </p>
          </Card>

          <Card title="Azoto">
            <p>
              É necessário para crescimento, mas excesso pode provocar
              vegetação excessiva e desequilíbrio reprodutivo.
            </p>
          </Card>

          <Card title="Fósforo">
            <p>
              Participa no metabolismo energético e desenvolvimento radicular.
            </p>
          </Card>

          <Card title="Potássio">
            <p>
              Tem papel importante na regulação hídrica e qualidade dos frutos.
            </p>
          </Card>

          <Card title="Cálcio">
            <p>
              O equilíbrio hídrico e nutricional influencia a qualidade e
              integridade dos frutos.
            </p>
          </Card>

          <Card title="Tutoramento">
            <p>
              Pode ser utilizado para organizar plantas e facilitar operações,
              dependendo do tipo de material e sistema.
            </p>
          </Card>

          <Card title="Poda">
            <p>
              Deve ser aplicada apenas quando fizer parte do sistema de
              condução definido para o material cultivado.
            </p>
          </Card>

          <Card title="Monda">
            <p>
              A remoção selectiva de partes vegetativas ou frutos pode ser
              utilizada em determinados sistemas para regular arquitectura e
              produção.
            </p>
          </Card>
        </div>
      </section>

      {/* SANIDADE */}
      <section id="sanidade" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="10 • Sanidade"
            title="Pragas, doenças e viroses"
            description="O princípio central deve ser a prevenção e o Manejo Integrado de Pragas, com identificação correcta antes de qualquer tratamento."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card title="Pulgões">
              <p>
                Podem causar danos directos e actuar como vectores de vírus.
              </p>
            </Card>

            <Card title="Mosca-branca">
              <p>
                É importante tanto pelos danos directos como pela capacidade de
                transmitir determinadas viroses.
              </p>
            </Card>

            <Card title="Tripes">
              <p>
                Podem provocar danos em tecidos jovens e contribuir para
                transmissão de vírus.
              </p>
            </Card>

            <Card title="Ácaros">
              <p>
                Podem aumentar rapidamente em determinadas condições ambientais
                e provocar bronzeamento ou deformação de tecidos.
              </p>
            </Card>

            <Card title="Lagartas">
              <p>
                Algumas espécies atacam folhas, flores e frutos.
              </p>
            </Card>

            <Card title="Nemátodes">
              <p>
                Nemátodes das galhas podem causar lesões radiculares e reduzir
                o desenvolvimento das plantas.
              </p>
            </Card>

            <Card title="Antracnose">
              <p>
                Pode provocar lesões em frutos, especialmente em condições
                favoráveis à doença.
              </p>
            </Card>

            <Card title="Murchas">
              <p>
                Doenças vasculares podem ser graves e exigem diagnóstico e
                prevenção.
              </p>
            </Card>

            <Card title="Podridões">
              <p>
                Podem ocorrer em frutos devido a diferentes agentes e condições
                ambientais.
              </p>
            </Card>

            <Card title="Viroses">
              <p>
                Plantas afectadas por vírus podem apresentar mosaico,
                deformações, cloroses e redução de crescimento.
              </p>
            </Card>

            <Card title="Viveiro">
              <p>
                A prevenção deve começar no viveiro, controlando vectores e
                evitando material vegetal contaminado.
              </p>
            </Card>

            <Card title="Diagnóstico">
              <p>
                Sintomas semelhantes podem ter causas diferentes. Diagnóstico
                correcto é indispensável para escolher a medida de controlo.
              </p>
            </Card>
          </div>

          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 className="font-bold text-amber-950">
              Evitar pulverizações por rotina
            </h3>

            <p className="mt-2 text-sm leading-7 text-amber-900">
              A decisão de aplicar um produto deve considerar identificação da
              praga ou doença, nível de infestação, estádio da cultura,
              produto autorizado, dose do rótulo, intervalo de segurança e
              equipamento de protecção.
            </p>
          </div>
        </div>
      </section>

      {/* FLORAÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="11 • Floração e frutos"
          title="Da flor ao fruto"
          description="O rendimento comercial depende de uma sequência de processos fisiológicos que podem ser afectados pelo ambiente."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card title="Floração">
            <p>
              O desenvolvimento floral é sensível às condições térmicas e
              nutricionais.
            </p>
          </Card>

          <Card title="Polinização">
            <p>
              A actividade reprodutiva pode ser afectada por temperaturas
              extremas e outros factores ambientais.
            </p>
          </Card>

          <Card title="Pegamento">
            <p>
              O stress hídrico e térmico pode reduzir o número de frutos
              formados.
            </p>
          </Card>

          <Card title="Maturação">
            <p>
              A mudança de cor acompanha transformações na composição e
              qualidade do fruto.
            </p>
          </Card>
        </div>
      </section>

      {/* COLHEITA */}
      <section id="colheita" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="12 • Colheita"
            title="Colher de acordo com o destino"
            description="Pimenta fresca e pimenta destinada à secagem não devem necessariamente ser colhidas no mesmo ponto."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card title="Mercado fresco">
              <p>
                A aparência, cor, firmeza, tamanho e ausência de danos são
                importantes.
              </p>
            </Card>

            <Card title="Pimenta verde">
              <p>
                Alguns mercados utilizam frutos verdes, exigindo colheita antes
                da maturação completa.
              </p>
            </Card>

            <Card title="Pimenta madura">
              <p>
                A maturação pode aumentar intensidade de cor e modificar a
                composição do fruto.
              </p>
            </Card>

            <Card title="Secagem">
              <p>
                O produto destinado à secagem deve ser colhido com qualidade
                adequada e posteriormente submetido a processo higiénico e
                controlado.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* SECAGEM */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="13 • Pós-colheita"
          title="Secagem segura e armazenamento"
          description="A secagem é uma oportunidade para aumentar a vida útil, mas também pode introduzir contaminações se for mal conduzida."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card title="Selecção">
            <p>
              Retirar frutos deteriorados, contaminados ou excessivamente
              danificados.
            </p>
          </Card>

          <Card title="Higiene">
            <p>
              Superfícies, recipientes e equipamentos devem ser limpos e
              adequados para contacto com alimentos.
            </p>
          </Card>

          <Card title="Secagem">
            <p>
              A redução da humidade deve ocorrer de forma suficientemente
              controlada para reduzir deterioração e contaminação.
            </p>
          </Card>

          <Card title="Armazenamento">
            <p>
              O produto seco deve ser protegido de humidade, insectos, poeira
              e contaminação.
            </p>
          </Card>
        </div>

        <div className="mt-8 rounded-3xl bg-green-950 p-8 text-white">
          <h3 className="text-2xl font-black">
            Não secar directamente no solo
          </h3>

          <p className="mt-3 max-w-4xl text-sm leading-7 text-green-100">
            Para produção comercial destinada ao consumo, a secagem deve ser
            realizada sobre superfície apropriada e higiénica. A exposição
            directa no solo aumenta o risco de contaminação física e
            microbiológica.
          </p>
        </div>
      </section>

      {/* PROCESSAMENTO */}
      <section
        id="processamento"
        className="border-y border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="14 • Processamento"
            title="Da pimenta fresca ao produto de maior valor"
            description="A transformação pode ampliar mercados, mas exige controlo de qualidade, higiene e padronização."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card title="Pó">
              <p>
                Pimenta seca pode ser moída e comercializada como condimento.
              </p>
            </Card>

            <Card title="Molho">
              <p>
                Frutos podem ser processados em molhos com formulação e
                tratamento adequados.
              </p>
            </Card>

            <Card title="Pasta">
              <p>
                A transformação em pasta permite diferentes formulações e
                mercados.
              </p>
            </Card>

            <Card title="Misturas">
              <p>
                Pimenta seca e moída pode integrar temperos e outros produtos
                alimentares.
              </p>
            </Card>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card title="Qualidade da matéria-prima">
              <p>
                O processador precisa de matéria-prima uniforme, limpa, sem
                sinais de deterioração e com características adequadas ao
                produto final.
              </p>
            </Card>

            <Card title="Segurança alimentar">
              <p>
                Processamento de alimentos requer higiene, água adequada,
                equipamentos apropriados, controlo de contaminação e
                armazenamento correcto.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ANGOLA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="15 • Angola"
          title="Pimenta como cultura hortícola e oportunidade de valor"
          description="A cadeia da pimenta deve ser estudada não apenas pela produção no campo, mas também pelo mercado e pela transformação."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card title="Agricultura familiar">
            <p>
              Pode ser integrada em sistemas diversificados de pequena escala,
              especialmente para mercados locais.
            </p>
          </Card>

          <Card title="Horticultura comercial">
            <p>
              Sistemas irrigados permitem organizar produção para abastecer
              mercados com maior regularidade.
            </p>
          </Card>

          <Card title="Mercados urbanos">
            <p>
              Luanda e outros centros urbanos representam importantes destinos
              potenciais para produtos hortícolas.
            </p>
          </Card>

          <Card title="Secagem">
            <p>
              A secagem pode reduzir dependência de venda imediata do produto
              fresco.
            </p>
          </Card>

          <Card title="Processamento">
            <p>
              Molhos, pastas e condimentos podem aumentar o valor acrescentado
              da produção.
            </p>
          </Card>

          <Card title="Sementes">
            <p>
              O desenvolvimento de sistemas de sementes e materiais adaptados
              às condições angolanas é estratégico para a expansão sustentável.
            </p>
          </Card>
        </div>
      </section>

      {/* PROVÍNCIAS */}
      <section
        id="provincias"
        className="border-y border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="16 • Angola por província"
            title="Onde estudar a produção de pimenta?"
            description="A presença de uma província nesta lista não significa que exista estatística específica de produção. O objectivo é organizar conhecimento e orientar futuras pesquisas."
          />

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="provincia-pimenta"
                className="mb-2 block text-sm font-bold text-slate-800"
              >
                Seleccionar província
              </label>

              <select
                id="provincia-pimenta"
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
                htmlFor="pesquisa-pimenta"
                className="mb-2 block text-sm font-bold text-slate-800"
              >
                Pesquisar
              </label>

              <input
                id="pesquisa-pimenta"
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
                placeholder="Ex.: Huambo, Benguela, Namibe..."
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
          eyebrow="17 • Investigação"
          title="Perguntas para investigação em Angola"
          description="A AGROINOVA pode transformar esta página num ponto de partida para trabalhos de campo, dissertações e projectos agrícolas."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card title="Genética">
            <p>
              Quais tipos de Capsicum apresentam melhor adaptação às diferentes
              zonas agroecológicas de Angola?
            </p>
          </Card>

          <Card title="Pungência">
            <p>
              Como varia a pungência entre materiais locais e comerciais
              cultivados em Angola?
            </p>
          </Card>

          <Card title="Água">
            <p>
              Quais estratégias de irrigação maximizam produtividade e
              eficiência no uso da água?
            </p>
          </Card>

          <Card title="Sanidade">
            <p>
              Quais são as principais pragas e doenças por região produtora?
            </p>
          </Card>

          <Card title="Pós-colheita">
            <p>
              Quais métodos de secagem preservam melhor cor, aroma e qualidade
              do produto?
            </p>
          </Card>

          <Card title="Mercado">
            <p>
              Qual é a procura por pimenta fresca, seca, em pó e processada nos
              principais mercados angolanos?
            </p>
          </Card>

          <Card title="Sementes">
            <p>
              Como organizar sistemas de produção e distribuição de sementes
              de qualidade para agricultores familiares?
            </p>
          </Card>

          <Card title="Processamento">
            <p>
              Quais produtos transformados têm maior potencial comercial em
              Angola?
            </p>
          </Card>

          <Card title="Economia">
            <p>
              Qual é a margem líquida do produtor em diferentes sistemas de
              produção e canais de venda?
            </p>
          </Card>
        </div>
      </section>

      {/* FICHA DE CAMPO */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="18 • Ficha de campo"
            title="Dados que devem ser recolhidos"
            description="Uma futura base nacional de pimenta precisa de informação comparável entre regiões e sistemas de produção."
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card title="Localização">
              <p>
                Província, município, comuna, coordenadas e altitude.
              </p>
            </Card>

            <Card title="Material vegetal">
              <p>
                Espécie, cultivar ou tipo comercial, origem e lote.
              </p>
            </Card>

            <Card title="Área">
              <p>
                Área plantada, área colhida e área perdida.
              </p>
            </Card>

            <Card title="Solo">
              <p>
                pH, textura, matéria orgânica, nutrientes e salinidade.
              </p>
            </Card>

            <Card title="Irrigação">
              <p>
                Fonte de água, método, frequência e quantidade aplicada.
              </p>
            </Card>

            <Card title="Fertilização">
              <p>
                Produto, dose, data e forma de aplicação.
              </p>
            </Card>

            <Card title="Pragas">
              <p>
                Espécie identificada, intensidade e área afectada.
              </p>
            </Card>

            <Card title="Doenças">
              <p>
                Sintomas, diagnóstico e medidas adoptadas.
              </p>
            </Card>

            <Card title="Produção">
              <p>
                Peso total, número de colheitas e produtividade.
              </p>
            </Card>

            <Card title="Qualidade">
              <p>
                Cor, tamanho, firmeza, danos e pungência quando analisada.
              </p>
            </Card>

            <Card title="Secagem">
              <p>
                Método, duração, condições e humidade final quando medida.
              </p>
            </Card>

            <Card title="Comercialização">
              <p>
                Comprador, preço, quantidade e destino.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="19 • Fontes"
          title="Base técnica"
          description="A página deve crescer com fontes angolanas, investigação científica e dados de campo verificáveis."
        />

        <div className="space-y-4">
          <a
            href="https://www.fao.org/agris/"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-green-300 hover:bg-green-50"
          >
            <strong className="text-slate-950">
              FAO AGRIS
            </strong>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Base internacional para pesquisa de literatura agrícola,
              incluindo estudos sobre Capsicum, horticultura, pragas,
              irrigação e pós-colheita.
            </p>
          </a>

          <a
            href="https://www.fao.org/3/y4893e/y4893e00.htm"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-green-300 hover:bg-green-50"
          >
            <strong className="text-slate-950">
              FAO — Crop production
            </strong>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Referência geral para sistemas de produção e gestão agrícola.
            </p>
          </a>

          <a
            href="https://www.cabi.org/crop-protection/plantwise/"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-green-300 hover:bg-green-50"
          >
            <strong className="text-slate-950">
              CABI Plantwise
            </strong>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Material técnico para diagnóstico e manejo de pragas e doenças
              de culturas.
            </p>
          </a>

          <a
            href="https://www.atermaisdigital.cnptia.embrapa.br/web/pimentas"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-green-300 hover:bg-green-50"
          >
            <strong className="text-slate-950">
              Embrapa — Pimentas
            </strong>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Conteúdo técnico sobre cultivo, variedades, manejo e utilização
              de pimentas.
            </p>
          </a>

          <a
            href="https://www.cabi.org/isc/datasheet/18379"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-green-300 hover:bg-green-50"
          >
            <strong className="text-slate-950">
              CABI — Capsicum
            </strong>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Base de referência para espécies, distribuição, pragas e
              características do género.
            </p>
          </a>

          <a
            href="https://powo.science.kew.org/"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-green-300 hover:bg-green-50"
          >
            <strong className="text-slate-950">
              Kew — Plants of the World Online
            </strong>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Referência taxonómica para verificação de nomes científicos e
              classificação botânica.
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
                A presença de uma província na página não significa que exista
                uma estatística oficial específica de produção de pimenta.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm leading-7 text-slate-300">
                Não serão atribuídos volumes de produção às províncias sem
                fonte oficial ou estudo verificável.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm leading-7 text-slate-300">
                Nomes populares como pimenta e malagueta devem ser tratados com
                cuidado porque podem designar materiais diferentes.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm leading-7 text-slate-300">
                Recomendações técnicas gerais não serão apresentadas como
                recomendações oficiais específicas para Angola sem evidência
                local.
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
              href="/agricultura/tomate"
              className="text-slate-600 hover:text-green-700"
            >
              Tomate
            </Link>

            <Link
              href="/agricultura/cafe"
              className="text-slate-600 hover:text-green-700"
            >
              Café
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