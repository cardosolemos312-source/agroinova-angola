"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";

type Provincia = {
  nome: string;
  regiao: string;
  situacao: string;
  nota: string;
};

type Imagem = {
  src: string;
  titulo: string;
  legenda: string;
  fonte: string;
  url: string;
};

type CardProps = {
  titulo: string;
  children: ReactNode;
};

const provincias: Provincia[] = [
  {
    nome: "Bengo",
    regiao: "Norte",
    situacao: "A avaliar",
    nota: "A página não atribui produção actual sem estatística específica."
  },
  {
    nome: "Benguela",
    regiao: "Centro",
    situacao: "Histórico industrial",
    nota: "Existiram projectos ligados à indústria têxtil e ao abastecimento de algodão."
  },
  {
    nome: "Bié",
    regiao: "Centro",
    situacao: "A avaliar",
    nota: "A aptidão deve ser determinada por clima, solo e disponibilidade de água."
  },
  {
    nome: "Cabinda",
    regiao: "Norte",
    situacao: "A avaliar",
    nota: "Não é apresentada produção actual sem fonte estatística específica."
  },
  {
    nome: "Cuando",
    regiao: "Leste",
    situacao: "A avaliar",
    nota: "Necessita de zonamento agroclimático e ensaios locais."
  },
  {
    nome: "Cubango",
    regiao: "Leste",
    situacao: "A avaliar",
    nota: "Necessita de avaliação local antes de uma recomendação comercial."
  },
  {
    nome: "Cuanza Norte",
    regiao: "Norte",
    situacao: "Interesse agrícola",
    nota: "A província integra a região Norte agrícola, mas não é atribuída produção actual nesta página."
  },
  {
    nome: "Cuanza Sul",
    regiao: "Centro",
    situacao: "A avaliar",
    nota: "Potencial deve ser analisado por município e condições agroclimáticas."
  },
  {
    nome: "Cunene",
    regiao: "Sul",
    situacao: "A avaliar",
    nota: "Disponibilidade de água é factor particularmente importante."
  },
  {
    nome: "Huambo",
    regiao: "Centro",
    situacao: "A avaliar",
    nota: "Não confundir agricultura diversificada com produção comercial de algodão."
  },
  {
    nome: "Huíla",
    regiao: "Sul",
    situacao: "A avaliar",
    nota: "Requer avaliação de temperatura, água e duração do ciclo."
  },
  {
    nome: "Icolo e Bengo",
    regiao: "Norte",
    situacao: "A avaliar",
    nota: "Sem atribuição de produção actual nesta página."
  },
  {
    nome: "Luanda",
    regiao: "Norte",
    situacao: "Baixa prioridade",
    nota: "Não é tratada como zona produtora de referência."
  },
  {
    nome: "Lunda Norte",
    regiao: "Leste",
    situacao: "A avaliar",
    nota: "Necessita de investigação agroclimática específica."
  },
  {
    nome: "Lunda Sul",
    regiao: "Leste",
    situacao: "A avaliar",
    nota: "Não atribuir produção sem dados oficiais."
  },
  {
    nome: "Malanje",
    regiao: "Norte",
    situacao: "Zona histórica principal",
    nota: "Baixa de Cassanje e outras áreas de Malanje têm forte importância histórica na produção de algodão."
  },
  {
    nome: "Moxico",
    regiao: "Leste",
    situacao: "A avaliar",
    nota: "Necessita de ensaios e zonamento antes de expansão."
  },
  {
    nome: "Moxico Leste",
    regiao: "Leste",
    situacao: "A avaliar",
    nota: "Necessita de dados agroclimáticos e ensaios locais."
  },
  {
    nome: "Namibe",
    regiao: "Sul",
    situacao: "Baixa prioridade",
    nota: "Disponibilidade de água constitui uma limitação importante."
  },
  {
    nome: "Uíge",
    regiao: "Norte",
    situacao: "A avaliar",
    nota: "O clima permite diversas culturas comerciais, mas não se deve atribuir algodão actual sem dados específicos."
  },
  {
    nome: "Zaire",
    regiao: "Norte",
    situacao: "A avaliar",
    nota: "Necessita de informação actualizada sobre produção e aptidão."
  }
];

const imagens: Imagem[] = [
  {
    src: "https://c2a.portais.gov.ao/uploads/299032522_430394602461825_6020001968205597026_n_13677220466310bed2eff79_aaf7a13d72.jpg",
    titulo: "Colheita de algodão na Baixa de Cassanje",
    legenda:
      "Famílias integradas no projecto de relançamento do algodão em Cunda-Dia-Baze, Malanje.",
    fonte: "Governo Provincial de Malanje",
    url:
      "https://malanje.gov.ao/web/noticias/regi%C3%A3o-da-baixa-de-cassanje-volta-a-produzir-algod%C3%A3o"
  },
  {
    src: "https://gdb.voanews.com/01630000-0aff-0242-1a7c-08da7fa5a6a0_tv_w1200_h630.jpg",
    titulo: "Algodão na Baixa de Cassanje",
    legenda:
      "Registo da retomada do cultivo de algodão por agricultores familiares em Cunda-Dia-Baze.",
    fonte: "VOA",
    url:
      "https://www.voaportugues.com/a/tr%C3%AAs-d%C3%A9cadas-depois-camponeses-da-baixa-de-cassanje-volta-a-cultivar-algod%C3%A3o-em-malanje/6703787.html"
  },
  {
    src: "https://gdb.voanews.com/af348dac-f657-437f-a42a-26e6677fc334_w1200_h630.png",
    titulo: "Campo de algodão em Malanje",
    legenda:
      "Campo de algodão associado à retomada da cultura na província de Malanje.",
    fonte: "VOA",
    url:
      "https://www.voaportugues.com/a/malange-retomada-producao-algodao/3515585.html"
  },
  {
    src: "https://www.negociosdeangola.com/wp-content/uploads/2022/08/algodao.jpg",
    titulo: "Produção de algodão em Malanje",
    legenda:
      "Plantas de algodão em campo durante a retomada da produção na Baixa de Cassanje.",
    fonte: "Negócios de Angola",
    url:
      "https://www.negociosdeangola.com/en/angolas-malanje-province-relaunches-cotton-production/"
  }
];

function Card({ titulo, children }: CardProps) {
  return (
    <article className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-xl font-bold text-emerald-950">
        {titulo}
      </h3>

      <div className="text-[15px] leading-7 text-slate-700">
        {children}
      </div>
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

export default function AlgodaoPage() {
  const [provinciaSelecionada, setProvinciaSelecionada] =
    useState("Malanje");

  const [pesquisa, setPesquisa] = useState("");

  const provinciasFiltradas = useMemo(() => {
    const termo = pesquisa.trim().toLowerCase();

    if (!termo) {
      return provincias;
    }

    return provincias.filter(
      (provincia) =>
        provincia.nome.toLowerCase().includes(termo) ||
        provincia.regiao.toLowerCase().includes(termo) ||
        provincia.situacao.toLowerCase().includes(termo)
    );
  }, [pesquisa]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* HERO */}

      <section className="relative overflow-hidden bg-emerald-950">
        <div className="absolute inset-0">
          <img
            src={imagens[0].src}
            alt="Colheita de algodão na Baixa de Cassanje"
            className="h-full w-full object-cover opacity-30"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-5xl">

            <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">
              AGROINOVA ANGOLA • Agricultura
            </p>

            <h1 className="mt-4 text-5xl font-black tracking-tight text-white md:text-7xl">
              Algodão
            </h1>

            <p className="mt-6 max-w-4xl text-xl leading-8 text-emerald-50 md:text-2xl">
              Guia técnico sobre a cultura do algodão em Angola, com destaque
              para a história e o relançamento da produção na Baixa de
              Cassanje, província de Malanje.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                Gossypium
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                Malanje
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                Baixa de Cassanje
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                Fibra • Semente • Têxtil
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO */}

      <div className="sticky top-0 z-40 border-b border-emerald-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-5 overflow-x-auto px-6 py-3 text-sm md:px-10">
          <a href="#angola" className="whitespace-nowrap font-bold text-emerald-800">
            Angola
          </a>

          <a href="#cassanje" className="whitespace-nowrap font-bold text-emerald-800">
            Cassanje
          </a>

          <a href="#botanica" className="whitespace-nowrap font-bold text-emerald-800">
            Botânica
          </a>

          <a href="#clima" className="whitespace-nowrap font-bold text-emerald-800">
            Clima
          </a>

          <a href="#solo" className="whitespace-nowrap font-bold text-emerald-800">
            Solo
          </a>

          <a href="#implantacao" className="whitespace-nowrap font-bold text-emerald-800">
            Implantação
          </a>

          <a href="#manejo" className="whitespace-nowrap font-bold text-emerald-800">
            Manejo
          </a>

          <a href="#pragas" className="whitespace-nowrap font-bold text-emerald-800">
            Pragas
          </a>

          <a href="#colheita" className="whitespace-nowrap font-bold text-emerald-800">
            Colheita
          </a>

          <a href="#cadeia" className="whitespace-nowrap font-bold text-emerald-800">
            Cadeia de valor
          </a>
        </div>
      </div>

      {/* INDICADORES */}

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="grid gap-5 md:grid-cols-4">

          <div className="rounded-3xl bg-emerald-900 p-6 text-white">
            <p className="text-sm font-semibold text-emerald-200">
              Produção histórica
            </p>

            <p className="mt-2 text-4xl font-black">
              45 000 t
            </p>

            <p className="mt-2 text-sm leading-6 text-emerald-100">
              Produção de algodão em caroço registada para Angola em 1968.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-emerald-100">
            <p className="text-sm font-semibold text-emerald-700">
              Participação de Malanje
            </p>

            <p className="mt-2 text-4xl font-black text-slate-950">
              ~44%
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Cerca de 44% da produção nacional de 1968 vinha da região de
              Malanje.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-emerald-100">
            <p className="text-sm font-semibold text-emerald-700">
              Relançamento
            </p>

            <p className="mt-2 text-4xl font-black text-slate-950">
              2022
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Retomada da produção em Cunda-Dia-Baze, Baixa de Cassanje.
            </p>
          </div>

          <div className="rounded-3xl bg-emerald-50 p-6 ring-1 ring-emerald-100">
            <p className="text-sm font-semibold text-emerald-800">
              Primeiro projecto
            </p>

            <p className="mt-2 text-4xl font-black text-emerald-950">
              50 ha
            </p>

            <p className="mt-2 text-sm leading-6 text-emerald-900">
              Área inicial cultivada no projecto de relançamento em 2022.
            </p>
          </div>

        </div>
      </section>

      {/* ANGOLA */}

      <section
        id="angola"
        className="mx-auto max-w-7xl px-6 py-14 md:px-10"
      >
        <SectionTitle
          eyebrow="Importância nacional"
          title="O algodão é parte da história agrícola e industrial de Angola"
          description="A cultura do algodão não deve ser tratada apenas como uma cultura de fibra. Ela conecta agricultura, descaroçamento, fiação, tecelagem, indústria de vestuário, comércio e emprego."
        />

        <div className="grid gap-6 md:grid-cols-3">

          <Card titulo="Uma cultura histórica">
            <p>
              O algodão ocupou uma posição importante na economia agrícola
              angolana durante o período colonial e deixou uma marca profunda
              na região da Baixa de Cassanje.
            </p>

            <p className="mt-4">
              Dados históricos das Nações Unidas indicam que a produção de
              algodão em caroço atingiu cerca de 45 mil toneladas em 1968.
            </p>
          </Card>

          <Card titulo="Malanje">
            <p>
              A região de Malanje tinha um peso particularmente elevado.
              Aproximadamente 44% da produção nacional de algodão em caroço
              registada em 1968 vinha da região de Malanje.
            </p>

            <p className="mt-4">
              Por isso, a recuperação do algodão na Baixa de Cassanje possui
              significado económico e histórico.
            </p>
          </Card>

          <Card titulo="Indústria têxtil">
            <p>
              A fibra de algodão é uma matéria-prima para a indústria têxtil.
              Uma cadeia nacional eficiente exige ligação entre produção,
              descaroçamento, fiação, tecelagem, confecção e mercado.
            </p>
          </Card>

        </div>
      </section>

      {/* CASSANJE */}

      <section
        id="cassanje"
        className="mx-auto max-w-7xl px-6 py-14 md:px-10"
      >
        <SectionTitle
          eyebrow="Baixa de Cassanje"
          title="O relançamento do algodão em Malanje"
          description="O AGROINOVA deve preservar a memória da cultura e, ao mesmo tempo, acompanhar os novos projectos que procuram reconstruir a fileira."
        />

        <div className="grid gap-6 lg:grid-cols-2">

          <Card titulo="O que aconteceu em 2022?">
            <p>
              Em Agosto de 2022 começou a primeira colheita do projecto de
              relançamento do algodão em Cunda-Dia-Baze, na Baixa de Cassanje.
            </p>

            <p className="mt-4">
              Segundo o CIAM, a actividade envolveu inicialmente 50 famílias
              e uma área de 50 hectares, com expectativa de produção de 100
              toneladas.
            </p>

            <p className="mt-4">
              A retomada ocorreu 37 anos depois da interrupção do cultivo
              naquela região.
            </p>
          </Card>

          <Card titulo="Agricultura familiar">
            <p>
              O projecto também procurou integrar agricultores familiares na
              cadeia produtiva.
            </p>

            <p className="mt-4">
              O Governo Provincial de Malanje informou que, numa fase
              seguinte, foram entregues títulos de concessão de terras às
              famílias integradas no projecto, com um hectare por família.
            </p>
          </Card>

        </div>

        <div className="mt-8 rounded-3xl bg-emerald-950 p-8 text-white">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
            Atenção aos dados
          </p>

          <h3 className="mt-3 text-3xl font-black">
            100 toneladas não são produção actual de Malanje
          </h3>

          <p className="mt-4 max-w-5xl leading-7 text-emerald-50">
            As 100 toneladas correspondem à expectativa do projecto inicial
            de 2022 em Cunda-Dia-Baze. O AGROINOVA não deve apresentar esse
            número como produção actual provincial. É um dado específico de
            um projecto e de uma campanha.
          </p>
        </div>
      </section>

      {/* IMAGENS */}

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <div className="grid gap-6 md:grid-cols-2">

          {imagens.map((imagem) => (
            <figure
              key={imagem.src}
              className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-emerald-100"
            >
              <a
                href={imagem.url}
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

                <h3 className="font-black text-slate-950">
                  {imagem.titulo}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {imagem.legenda}
                </p>

                <a
                  href={imagem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block font-bold text-emerald-700 hover:underline"
                >
                  Fonte: {imagem.fonte} →
                </a>

              </figcaption>
            </figure>
          ))}

        </div>
      </section>

      {/* BOTÂNICA */}

      <section
        id="botanica"
        className="mx-auto max-w-7xl px-6 py-14 md:px-10"
      >
        <SectionTitle
          eyebrow="Botânica"
          title="Conhecer a planta do algodão"
          description="O algodão pertence ao género Gossypium. A produção comercial envolve espécies e materiais genéticos diferentes, pelo que a identificação da cultivar deve ser feita a partir de material certificado."
        />

        <div className="grid gap-6 md:grid-cols-3">

          <Card titulo="Raiz">
            <p>
              O algodoeiro desenvolve uma raiz principal que pode explorar
              camadas profundas do solo quando as condições físicas permitem.
              Compactação e encharcamento limitam o desenvolvimento radicular.
            </p>
          </Card>

          <Card titulo="Parte aérea">
            <p>
              A planta desenvolve caule, ramos vegetativos e reprodutivos,
              folhas e estruturas florais. A arquitectura da planta influencia
              a entrada de luz e a facilidade de colheita.
            </p>
          </Card>

          <Card titulo="Capulho">
            <p>
              Após a floração desenvolve-se o capulho, ou cápsula do algodão.
              Quando maduro, abre-se e expõe a fibra que envolve as sementes.
            </p>
          </Card>

        </div>
      </section>

      {/* CLIMA */}

      <section
        id="clima"
        className="mx-auto max-w-7xl px-6 py-14 md:px-10"
      >
        <SectionTitle
          eyebrow="Agroclimatologia"
          title="Clima e duração da campanha"
          description="O algodão necessita de uma estação suficientemente quente para completar o seu ciclo. A programação da sementeira deve considerar o início efectivo das chuvas e o período disponível até à colheita."
        />

        <div className="grid gap-6 md:grid-cols-2">

          <Card titulo="Temperatura">
            <p>
              O algodão é uma cultura de clima quente. Temperaturas baixas
              durante germinação e desenvolvimento podem atrasar o ciclo,
              enquanto calor excessivo combinado com défice hídrico pode
              afectar crescimento, floração e formação das cápsulas.
            </p>
          </Card>

          <Card titulo="Chuva">
            <p>
              Em agricultura de sequeiro, a distribuição das chuvas é tão
              importante como o total acumulado.
            </p>

            <p className="mt-4">
              O produtor deve evitar que as fases críticas de floração e
              enchimento das cápsulas coincidam com períodos prolongados de
              défice hídrico.
            </p>
          </Card>

          <Card titulo="Irrigação">
            <p>
              Onde houver água disponível e viabilidade económica, a irrigação
              pode reduzir o risco climático. Contudo, o manejo deve evitar
              excesso de água e encharcamento.
            </p>
          </Card>

          <Card titulo="Planeamento">
            <p>
              A data de plantio deve ser definida a partir das condições
              locais e não através de uma data nacional única para todas as
              províncias.
            </p>
          </Card>

        </div>
      </section>

      {/* SOLO */}

      <section
        id="solo"
        className="mx-auto max-w-7xl px-6 py-14 md:px-10"
      >
        <SectionTitle
          eyebrow="Solo"
          title="O algodão precisa de solo bem estruturado"
          description="A escolha da área deve considerar drenagem, profundidade, estrutura, fertilidade e capacidade de retenção de água."
        />

        <div className="grid gap-6 md:grid-cols-3">

          <Card titulo="Drenagem">
            <p>
              Solos sujeitos a encharcamento prolongado devem ser evitados.
              O excesso de água prejudica o sistema radicular e aumenta riscos
              sanitários.
            </p>
          </Card>

          <Card titulo="Estrutura">
            <p>
              A compactação limita a exploração radicular. O tráfego de
              máquinas deve ser controlado para evitar formação de camadas
              compactadas.
            </p>
          </Card>

          <Card titulo="Análise">
            <p>
              A adubação deve ser definida preferencialmente a partir de
              análise de solo. Não é correcto aplicar uma dose única de
              fertilizante a todos os campos de algodão.
            </p>
          </Card>

        </div>
      </section>

      {/* IMPLANTAÇÃO */}

      <section
        id="implantacao"
        className="mx-auto max-w-7xl px-6 py-14 md:px-10"
      >
        <SectionTitle
          eyebrow="Instalação"
          title="Implantação do algodoeiro"
          description="A população de plantas e a uniformidade da emergência têm forte influência sobre o comportamento do campo."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          <Card titulo="Semente">
            <p>
              Deve-se utilizar semente de origem conhecida e qualidade
              adequada. Material não identificado aumenta o risco de
              desuniformidade e problemas sanitários.
            </p>
          </Card>

          <Card titulo="Preparação do terreno">
            <p>
              A preparação deve criar condições adequadas para germinação sem
              destruir desnecessariamente a estrutura do solo.
            </p>
          </Card>

          <Card titulo="Profundidade">
            <p>
              A profundidade de sementeira deve permitir contacto adequado
              entre semente e solo e emergência uniforme.
            </p>
          </Card>

          <Card titulo="Espaçamento">
            <p>
              O espaçamento deve ser definido de acordo com cultivar,
              fertilidade, mecanização, clima e sistema de produção.
            </p>
          </Card>

          <Card titulo="População">
            <p>
              Populações excessivamente elevadas podem aumentar competição,
              dificultar circulação de ar e complicar algumas operações.
            </p>
          </Card>

          <Card titulo="Emergência">
            <p>
              O campo deve ser observado desde os primeiros dias para
              identificar falhas de germinação, crostas, ataques de insectos e
              competição de infestantes.
            </p>
          </Card>

        </div>
      </section>

      {/* MANEJO */}

      <section
        id="manejo"
        className="mx-auto max-w-7xl px-6 py-14 md:px-10"
      >
        <SectionTitle
          eyebrow="Manejo"
          title="Condução da cultura durante o ciclo"
          description="O manejo deve acompanhar o algodoeiro desde a emergência até à abertura das cápsulas."
        />

        <div className="grid gap-6 md:grid-cols-2">

          <Card titulo="Infestantes">
            <p>
              As infestantes competem por água, nutrientes, luz e espaço.
              O controlo deve ser particularmente cuidadoso durante as fases
              iniciais do desenvolvimento.
            </p>
          </Card>

          <Card titulo="Nutrição">
            <p>
              O nitrogénio é importante para crescimento, mas aplicações
              excessivas podem estimular vegetação em detrimento do equilíbrio
              reprodutivo.
            </p>

            <p className="mt-4">
              Potássio e outros nutrientes também devem ser considerados de
              acordo com a análise do solo e a produtividade esperada.
            </p>
          </Card>

          <Card titulo="Água">
            <p>
              O défice hídrico durante fases críticas pode reduzir a formação
              e retenção de estruturas reprodutivas. Por outro lado, excesso
              de água pode prejudicar raízes e aumentar doenças.
            </p>
          </Card>

          <Card titulo="Monitorização">
            <p>
              O campo deve ser visitado regularmente. O produtor deve registar
              data de plantio, emergência, floração, aparecimento de pragas,
              tratamentos, chuva e início da abertura das cápsulas.
            </p>
          </Card>

        </div>
      </section>

      {/* PRAGAS */}

      <section
        id="pragas"
        className="mx-auto max-w-7xl px-6 py-14 md:px-10"
      >
        <SectionTitle
          eyebrow="Sanidade"
          title="Pragas e doenças do algodão"
          description="A protecção fitossanitária deve ser baseada em monitorização e identificação correcta, evitando pulverizações sem diagnóstico."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          <Card titulo="Lagartas">
            <p>
              Diversas espécies de lagartas podem atacar folhas, botões,
              flores e cápsulas. A identificação da espécie é importante
              porque o comportamento e a estratégia de controlo variam.
            </p>
          </Card>

          <Card titulo="Pulgões">
            <p>
              Pulgões podem colonizar tecidos jovens e interferir no
              desenvolvimento da planta. Também podem estar associados à
              transmissão de determinados vírus.
            </p>
          </Card>

          <Card titulo="Mosca-branca">
            <p>
              A mosca-branca pode causar danos directos e indirectos e
              favorecer problemas associados à fumagina através da produção
              de honeydew.
            </p>
          </Card>

          <Card titulo="Percevejos">
            <p>
              Percevejos podem atacar estruturas reprodutivas e cápsulas,
              afectando quantidade e qualidade da produção.
            </p>
          </Card>

          <Card titulo="Doenças">
            <p>
              Doenças bacterianas, fúngicas e virais podem ocorrer dependendo
              da cultivar, ambiente, semente e práticas agrícolas.
            </p>
          </Card>

          <Card titulo="Manejo integrado">
            <p>
              Rotação de culturas, semente saudável, eliminação de restos
              quando tecnicamente indicada, monitorização e uso criterioso de
              produtos fitossanitários fazem parte de uma estratégia integrada.
            </p>
          </Card>

        </div>
      </section>

      {/* FLORES */}

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <SectionTitle
          eyebrow="Desenvolvimento"
          title="Floração, fecundação e formação das cápsulas"
          description="A fase reprodutiva é determinante para o número de cápsulas e para o rendimento final."
        />

        <div className="grid gap-6 md:grid-cols-3">

          <Card titulo="Floração">
            <p>
              O aparecimento das primeiras flores indica a transição para uma
              fase em que a disponibilidade de água e nutrientes deve ser
              cuidadosamente acompanhada.
            </p>
          </Card>

          <Card titulo="Retenção">
            <p>
              Condições ambientais desfavoráveis podem aumentar a queda de
              botões e estruturas reprodutivas, reduzindo o potencial
              produtivo.
            </p>
          </Card>

          <Card titulo="Cápsulas">
            <p>
              Depois da fecundação forma-se a cápsula, onde se desenvolvem as
              sementes e a fibra. A abertura das cápsulas marca a aproximação
              da colheita.
            </p>
          </Card>

        </div>
      </section>

      {/* COLHEITA */}

      <section
        id="colheita"
        className="mx-auto max-w-7xl px-6 py-14 md:px-10"
      >
        <SectionTitle
          eyebrow="Colheita"
          title="Colher algodão não é simplesmente apanhar a fibra"
          description="A qualidade da fibra começa a ser definida no campo e pode ser perdida durante a colheita, transporte e armazenamento."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <Card titulo="Momento">
            <p>
              A colheita deve ocorrer quando as cápsulas estiverem abertas e a
              fibra suficientemente seca.
            </p>
          </Card>

          <Card titulo="Limpeza">
            <p>
              Materiais estranhos, folhas, terra, restos de cápsulas e outras
              impurezas devem ser minimizados.
            </p>
          </Card>

          <Card titulo="Transporte">
            <p>
              O algodão colhido deve ser protegido contra humidade e
              contaminação durante transporte e armazenamento.
            </p>
          </Card>

          <Card titulo="Armazenamento">
            <p>
              O local deve ser seco, limpo e protegido de água, animais,
              combustíveis e outros contaminantes.
            </p>
          </Card>

        </div>
      </section>

      {/* BENEFICIAMENTO */}

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <SectionTitle
          eyebrow="Pós-colheita"
          title="Do algodão em caroço à fibra"
          description="A produção agrícola é apenas uma etapa. O valor industrial surge depois do beneficiamento."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <Card titulo="Algodão em caroço">
            <p>
              É o produto colhido que contém fibra e sementes.
            </p>
          </Card>

          <Card titulo="Descaroçamento">
            <p>
              O descaroçamento separa a fibra das sementes e constitui uma
              etapa central da cadeia algodoeira.
            </p>
          </Card>

          <Card titulo="Fibra">
            <p>
              A fibra é a principal matéria-prima destinada à indústria
              têxtil.
            </p>
          </Card>

          <Card titulo="Semente">
            <p>
              A semente também possui valor económico e pode entrar em cadeias
              de aproveitamento industrial, dependendo das condições locais.
            </p>
          </Card>

        </div>
      </section>

      {/* CADEIA */}

      <section
        id="cadeia"
        className="mx-auto max-w-7xl px-6 py-14 md:px-10"
      >
        <SectionTitle
          eyebrow="Cadeia de valor"
          title="O algodão precisa de uma cadeia completa"
          description="Produzir algodão sem garantir beneficiamento e mercado reduz o valor económico da cultura."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

          {[
            "Semente",
            "Produção no campo",
            "Colheita",
            "Compra do algodão",
            "Transporte",
            "Descaroçamento",
            "Classificação",
            "Fiação",
            "Tecelagem",
            "Confecção",
            "Comercialização",
            "Exportação"
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white p-5 font-bold text-slate-700 shadow-sm ring-1 ring-slate-100"
            >
              <span className="mr-3 text-emerald-700">→</span>
              {item}
            </div>
          ))}

        </div>
      </section>

      {/* INVESTIGAÇÃO */}

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <SectionTitle
          eyebrow="Investigação"
          title="Perguntas que o AGROINOVA deve ajudar a responder"
          description="A reconstrução da cultura do algodão exige investigação aplicada às condições angolanas."
        />

        <div className="grid gap-6 md:grid-cols-2">

          <Card titulo="Genética">
            <p>
              Quais cultivares apresentam melhor produtividade, qualidade de
              fibra, adaptação climática e resistência a pragas e doenças nas
              principais zonas algodoeiras de Angola?
            </p>
          </Card>

          <Card titulo="Baixa de Cassanje">
            <p>
              Quais solos e microambientes da Baixa de Cassanje oferecem melhor
              desempenho para algodão de sequeiro?
            </p>
          </Card>

          <Card titulo="Sementes">
            <p>
              Como estabelecer um sistema nacional de produção e certificação
              de sementes de algodão adequado à expansão da cultura?
            </p>
          </Card>

          <Card titulo="Mecanização">
            <p>
              Quais operações podem ser mecanizadas economicamente nas
              explorações familiares e empresariais?
            </p>
          </Card>

          <Card titulo="Qualidade da fibra">
            <p>
              Como melhorar comprimento, resistência, micronaire, uniformidade
              e outras características importantes para a indústria?
            </p>
          </Card>

          <Card titulo="Indústria nacional">
            <p>
              Qual é a quantidade de algodão necessária para alimentar de forma
              regular uma cadeia nacional de fiação, tecelagem e confecção?
            </p>
          </Card>

        </div>
      </section>

      {/* PROVÍNCIAS */}

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">

        <SectionTitle
          eyebrow="Território"
          title="Algodão nas 21 províncias"
          description="O AGROINOVA não deve transformar uma zona histórica de produção numa recomendação nacional. Cada província precisa de dados próprios."
        />

        <div className="mb-6">
          <input
            value={pesquisa}
            onChange={(event) => setPesquisa(event.target.value)}
            placeholder="Pesquisar província..."
            className="w-full rounded-2xl border border-emerald-200 bg-white px-5 py-4 outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

          {provinciasFiltradas.map((provincia) => {
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
                <div className="flex items-start justify-between gap-3">

                  <h3 className="font-black text-slate-950">
                    {provincia.nome}
                  </h3>

                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                    {provincia.regiao}
                  </span>

                </div>

                <p className="mt-3 text-sm font-bold text-emerald-800">
                  {provincia.situacao}
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
            A selecção territorial não significa automaticamente que exista
            produção comercial actual. O AGROINOVA deve diferenciar sempre
            produção observada, produção histórica, aptidão potencial e
            recomendação técnica.
          </p>

        </div>
      </section>

      {/* FICHA DE CAMPO */}

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">

        <SectionTitle
          eyebrow="Ficha técnica"
          title="O que avaliar antes de plantar algodão?"
          description="Uma avaliação de campo deve reunir informação agronómica, económica e logística."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

          {[
            "Localização",
            "Altitude",
            "Precipitação",
            "Distribuição das chuvas",
            "Temperatura",
            "Duração da estação",
            "Tipo de solo",
            "Profundidade do solo",
            "Drenagem",
            "pH",
            "Matéria orgânica",
            "Fertilidade",
            "Fonte de água",
            "Origem da semente",
            "Cultivar",
            "Histórico de pragas",
            "Histórico de doenças",
            "Infestantes",
            "Mão-de-obra",
            "Mecanização",
            "Distância ao descaroçador",
            "Estrada",
            "Armazenamento",
            "Comprador"
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white p-4 font-semibold text-slate-700 shadow-sm ring-1 ring-slate-100"
            >
              <span className="mr-3 text-emerald-700">
                ✓
              </span>

              {item}
            </div>
          ))}

        </div>
      </section>

      {/* HISTÓRIA */}

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">

        <div className="rounded-[2rem] border border-amber-200 bg-amber-50 p-8 md:p-10">

          <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-800">
            História de Angola
          </p>

          <h2 className="mt-3 text-3xl font-black text-amber-950">
            Baixa de Cassanje: algodão, economia e memória histórica
          </h2>

          <p className="mt-5 max-w-5xl leading-8 text-amber-950">
            A história do algodão na Baixa de Cassanje não deve ser separada
            da história social de Angola. A região esteve fortemente ligada à
            produção algodoeira durante o período colonial e tornou-se palco
            de acontecimentos históricos ligados às condições de produção,
            trabalho e comercialização do algodão.
          </p>

          <p className="mt-5 max-w-5xl leading-8 text-amber-950">
            Esta dimensão histórica deve aparecer no AGROINOVA como
            conhecimento contextualizado. Não deve ser confundida com
            recomendações agronómicas nem com dados actuais de produção.
          </p>

        </div>
      </section>

      {/* FONTES */}

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">

        <SectionTitle
          eyebrow="Fontes"
          title="Fontes principais"
          description="A página deve ser actualizada quando surgirem novos dados oficiais sobre a recuperação da cadeia algodoeira."
        />

        <div className="grid gap-4 md:grid-cols-2">

          <a
            href="https://ciam.gov.ao/ao/noticia/1313"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-white p-5 font-bold text-emerald-800 shadow-sm ring-1 ring-emerald-100 hover:bg-emerald-50"
          >
            CIAM — primeira colheita de algodão em Cunda-Dia-Baze →
          </a>

          <a
            href="https://malanje.gov.ao/web/noticias/regi%C3%A3o-da-baixa-de-cassanje-volta-a-produzir-algod%C3%A3o"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-white p-5 font-bold text-emerald-800 shadow-sm ring-1 ring-emerald-100 hover:bg-emerald-50"
          >
            Governo Provincial de Malanje — Baixa de Cassanje →
          </a>

          <a
            href="https://www.voaportugues.com/a/tr%C3%AAs-d%C3%A9cadas-depois-camponeses-da-baixa-de-cassanje-volta-a-cultivar-algod%C3%A3o-em-malanje/6703787.html"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-white p-5 font-bold text-emerald-800 shadow-sm ring-1 ring-emerald-100 hover:bg-emerald-50"
          >
            VOA — retomada do cultivo na Baixa de Cassanje →
          </a>

          <a
            href="https://www.fao.org/4/x7253f/x7253f00.htm"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-white p-5 font-bold text-emerald-800 shadow-sm ring-1 ring-emerald-100 hover:bg-emerald-50"
          >
            FAO — informação histórica sobre agricultura de Angola →
          </a>

          <a
            href="https://digitallibrary.un.org/record/725774/files/A_7623_Rev-1%5EVol-II%5E-EN.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-white p-5 font-bold text-emerald-800 shadow-sm ring-1 ring-emerald-100 hover:bg-emerald-50"
          >
            Nações Unidas — produção histórica de algodão em Angola →
          </a>

          <a
            href="https://faolex.fao.org/docs/pdf/ang179971Plan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-white p-5 font-bold text-emerald-800 shadow-sm ring-1 ring-emerald-100 hover:bg-emerald-50"
          >
            Plano de Desenvolvimento Territorial — Malanje e algodão →
          </a>

        </div>
      </section>

      {/* INTEGRIDADE */}

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10">

        <div className="rounded-[2rem] bg-slate-950 p-8 text-white md:p-12">

          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-400">
            Integridade dos dados
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Histórico não é produção actual
          </h2>

          <p className="mt-5 max-w-5xl text-lg leading-8 text-slate-300">
            O AGROINOVA separa deliberadamente os dados históricos dos dados
            actuais. Os valores de 1968 e o projecto de 2022 em
            Cunda-Dia-Baze são apresentados como referências históricas ou de
            projecto. Não são usados para calcular uma produção nacional
            actual de algodão.
          </p>

          <p className="mt-5 max-w-5xl leading-8 text-slate-300">
            Quando o INE, MINAGRIF, IIA ou outras instituições oficiais
            disponibilizarem uma série estatística actualizada especificamente
            para o algodão, esses dados deverão substituir ou complementar
            esta camada histórica.
          </p>

        </div>
      </section>

      {/* FOOTER */}

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-6 md:px-10">

        <div className="rounded-[2rem] bg-emerald-950 p-8 md:p-12">

          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
            AGROINOVA ANGOLA
          </p>

          <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
            Algodão: do campo à indústria
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-emerald-50">
            Recuperar o algodão em Angola significa reconstruir uma cadeia:
            sementes, produtores, assistência técnica, produção, colheita,
            descaroçamento, fibra, indústria têxtil, mercado e exportação.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            <Link
              href="/agricultura"
              className="rounded-full bg-white px-6 py-3 font-bold text-emerald-900 hover:bg-emerald-50"
            >
              ← Agricultura
            </Link>

            <Link
              href="/agricultura/cafe"
              className="rounded-full border border-white/20 px-6 py-3 font-bold text-white hover:bg-white/10"
            >
              Café
            </Link>

            <Link
              href="/agricultura/manga"
              className="rounded-full border border-white/20 px-6 py-3 font-bold text-white hover:bg-white/10"
            >
              Manga
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}