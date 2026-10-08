"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Tema = {
  id: string;
  titulo: string;
  descricao: string;
  href: string;
  categoria: "Produção" | "Maneio" | "Saúde";
};

type Imagem = {
  titulo: string;
  local: string;
  descricao: string;
  src: string;
  fonte: string;
  href: string;
};

const temas: Tema[] = [
  {
    id: "corte",
    titulo: "Frango de corte",
    descricao:
      "Produção de carne desde o pinto de um dia até ao abate, incluindo recepção, crescimento, alimentação, ambiência, sanidade, conversão alimentar, mortalidade e comercialização.",
    href: "/pecuaria/galinhas/orientacoes/corte",
    categoria: "Produção",
  },
  {
    id: "poedeiras",
    titulo: "Galinhas poedeiras",
    descricao:
      "Recria, entrada em postura, alimentação, iluminação, produção de ovos, qualidade da casca, recolha, classificação, armazenamento e gestão de lotes.",
    href: "/pecuaria/galinhas/orientacoes/poedeiras",
    categoria: "Produção",
  },
  {
    id: "alimentacao",
    titulo: "Alimentação",
    descricao:
      "Energia, proteína, aminoácidos, minerais, vitaminas, matérias-primas, formulação de ração, água, armazenamento e controlo da qualidade dos alimentos.",
    href: "/pecuaria/galinhas/orientacoes/alimentacao",
    categoria: "Maneio",
  },
  {
    id: "sanidade",
    titulo: "Sanidade",
    descricao:
      "Prevenção, vacinação, observação clínica, doenças respiratórias e digestivas, parasitas, mortalidade, diagnóstico e acompanhamento veterinário.",
    href: "/pecuaria/galinhas/orientacoes/sanidade",
    categoria: "Saúde",
  },
  {
    id: "instalacoes",
    titulo: "Instalações",
    descricao:
      "Planeamento do aviário, localização, orientação, ventilação, temperatura, iluminação, cama, equipamentos, água, energia, resíduos e manutenção.",
    href: "/pecuaria/galinhas/orientacoes/instalacoes",
    categoria: "Maneio",
  },
  {
    id: "biosseguranca",
    titulo: "Biossegurança",
    descricao:
      "Controlo da entrada de pessoas, veículos e equipamentos, limpeza, desinfecção, controlo de roedores e aves selvagens, quarentena e vazio sanitário.",
    href: "/pecuaria/galinhas/orientacoes/biosseguranca",
    categoria: "Saúde",
  },
];

const imagens: Imagem[] = [
  {
    titulo: "Fazenda Vinabar",
    local: "Cuanza Norte, Angola",
    descricao:
      "Exploração documentada pelo PDAC, representativa da produção comercial de ovos no contexto angolano. O caso permite observar a importância da organização do aviário, da gestão dos lotes, da alimentação e da comercialização.",
    src: "/imagens/galinhas/vinabar.jpg",
    fonte: "PDAC Angola",
    href: "https://pdac.ao/fazenda-vinabar-alcanca-marcos-extraordinarios-na-producao-de-ovos-em-dange-ia-menha/",
  },
  {
    titulo: "Exploração avícola em Angola",
    local: "Angola",
    descricao:
      "Imagem utilizada para contextualizar a produção avícola comercial e a necessidade de instalações, equipamentos, maneio e organização técnica adequados.",
    src: "/imagens/galinhas/africa-press.jpg",
    fonte: "Africa-Press Angola",
    href: "https://www.africa-press.net/angola/all-news/association-will-map-poultry-farmers-in-the-country",
  },
  {
    titulo: "Produção comercial de frango",
    local: "Angola",
    descricao:
      "Exploração comercial documentada no sector avícola angolano. A imagem ajuda a compreender a dimensão empresarial da actividade e a importância da organização da cadeia produtiva.",
    src: "/imagens/galinhas/santo-antonio.jpg",
    fonte: "Expansão",
    href: "https://expansao.co.ao/angola/interior/fazenda-santo-antonio-investe-12-milhoes-usd-na-producao-de-frango-101421.html",
  },
];

const sistemas = [
  {
    id: "familiar",
    titulo: "Sistema familiar",
    texto:
      "Caracteriza-se por efectivos menores, utilização predominante de mão-de-obra familiar e ligação importante ao consumo doméstico e ao mercado local. Pode contribuir para a segurança alimentar e para o rendimento das famílias, mas enfrenta limitações no acesso a pintos, ração, medicamentos, assistência veterinária, financiamento, equipamentos e mercados organizados.",
  },
  {
    id: "semi",
    titulo: "Sistema semi-intensivo",
    texto:
      "Combina instalações, alimentação controlada e diferentes níveis de acesso a áreas exteriores. Exige mais organização do que uma criação familiar simples e pode funcionar como etapa de transição para modelos comerciais. A produtividade depende fortemente da alimentação, água, higiene e controlo sanitário.",
  },
  {
    id: "intensivo",
    titulo: "Sistema intensivo",
    texto:
      "Trabalha com maior controlo de ambiente, alimentação, água, iluminação, sanidade, biossegurança, densidade e registos. É utilizado sobretudo em explorações comerciais especializadas e exige maior investimento, conhecimento técnico e capacidade de gestão.",
  },
];

const regioes = [
  {
    titulo: "Bengo",
    texto:
      "A proximidade de Luanda favorece o acesso a um dos maiores mercados consumidores do país. A província possui actividade empresarial e condições para estudar a ligação entre produção avícola, distribuição e mercado urbano.",
  },
  {
    titulo: "Cuanza Sul",
    texto:
      "A experiência da Aldeia Nova no Waku Cungo torna a província importante para estudar integração entre agricultura, produção de ração, pintos, aves, ovos e participação de produtores.",
  },
  {
    titulo: "Cuanza Norte",
    texto:
      "Existem exemplos documentados de explorações comerciais e de menor escala, permitindo estudar diferentes modelos de organização da produção de ovos e a participação de jovens produtores.",
  },
  {
    titulo: "Huambo",
    texto:
      "A actividade agrícola, a localização no planalto e a disponibilidade potencial de milho e outras matérias-primas tornam a província relevante para estudos de integração entre agricultura e avicultura.",
  },
  {
    titulo: "Huíla",
    texto:
      "O desenvolvimento da produção animal deve considerar disponibilidade de água, clima, alimentação, energia, logística, assistência técnica, custos de transporte e ligação aos mercados.",
  },
  {
    titulo: "Luanda",
    texto:
      "É um dos principais centros de consumo e comercialização do país. A elevada procura urbana influencia a localização das explorações, distribuição, preços, logística e escala das unidades produtoras.",
  },
];

const doencas = [
  {
    nome: "Doença de Newcastle",
    grupo: "Viral",
    importancia:
      "Pode provocar doença grave e mortalidade elevada em populações susceptíveis. A prevenção depende de biossegurança, vacinação de acordo com o programa veterinário aplicável e vigilância sanitária.",
  },
  {
    nome: "Bronquite infecciosa",
    grupo: "Viral",
    importancia:
      "Pode afectar o aparelho respiratório e, em poedeiras, interferir com a produção e qualidade dos ovos. O diagnóstico diferencial é importante porque sinais respiratórios podem resultar de diferentes agentes ou condições ambientais.",
  },
  {
    nome: "Coccidiose",
    grupo: "Parasitária",
    importancia:
      "Pode afectar especialmente aves criadas sobre cama quando existe elevada pressão de contaminação. O controlo envolve maneio da cama, higiene, densidade adequada e estratégia veterinária.",
  },
  {
    nome: "Salmoneloses",
    grupo: "Bacteriana",
    importancia:
      "Representam preocupação sanitária e de segurança dos alimentos. Água, ração, roedores, higiene, pessoas, equipamentos e controlo da entrada são pontos importantes de prevenção.",
  },
  {
    nome: "Doenças respiratórias",
    grupo: "Complexo respiratório",
    importancia:
      "Ventilação inadequada, poeiras, amoníaco, elevada densidade e agentes infecciosos podem actuar conjuntamente e agravar problemas respiratórios.",
  },
  {
    nome: "Parasitas externos",
    grupo: "Parasitária",
    importancia:
      "Ácaros, piolhos e outros ectoparasitas podem provocar irritação, anemia, stress e perda de desempenho. O controlo deve considerar instalações, higiene, equipamentos e acompanhamento veterinário.",
  },
];

const cadeia = [
  {
    titulo: "Milho",
    texto:
      "É uma das principais fontes energéticas utilizadas na formulação de rações. O preço, qualidade, disponibilidade, armazenamento e transporte influenciam directamente o custo de produção.",
  },
  {
    titulo: "Soja",
    texto:
      "É importante como fonte proteica e de aminoácidos. A disponibilidade de soja e seus derivados influencia a formulação, qualidade nutricional e preço das rações.",
  },
  {
    titulo: "Ração",
    texto:
      "A produção de uma ração adequada exige matérias-primas de qualidade, formulação nutricional, controlo laboratorial, armazenamento correcto e distribuição.",
  },
  {
    titulo: "Pintos",
    texto:
      "A qualidade genética e sanitária dos pintos de um dia, o transporte e as condições de recepção condicionam fortemente o início de cada lote.",
  },
  {
    titulo: "Genética",
    texto:
      "Linhas destinadas à produção de carne e linhas destinadas à postura apresentam características diferentes de crescimento, produção, conversão alimentar, idade produtiva e qualidade dos produtos.",
  },
  {
    titulo: "Assistência veterinária",
    texto:
      "Diagnóstico, vacinação, biossegurança, vigilância e acompanhamento técnico são fundamentais para reduzir perdas sanitárias e melhorar os resultados da exploração.",
  },
  {
    titulo: "Energia",
    texto:
      "Incubação, ventilação, iluminação, bombeamento de água, conservação, processamento e outras operações dependem de fornecimento energético adequado.",
  },
  {
    titulo: "Abate e processamento",
    texto:
      "A produção de frango só completa a cadeia quando existe capacidade adequada de abate, processamento, embalagem e conservação em condições higiénicas.",
  },
  {
    titulo: "Cadeia de frio",
    texto:
      "A carne de frango é perecível. A conservação adequada reduz perdas e ajuda a proteger a segurança dos alimentos durante armazenamento, transporte e comercialização.",
  },
  {
    titulo: "Transporte",
    texto:
      "Distâncias, estradas, combustível e condições de transporte influenciam o custo final da carne, ovos, ração e pintos.",
  },
  {
    titulo: "Financiamento",
    texto:
      "A actividade exige capital para instalações, equipamentos, pintos, ração, medicamentos, energia, mão-de-obra e renovação dos lotes.",
  },
  {
    titulo: "Mercado",
    texto:
      "O produtor precisa de canais de comercialização capazes de absorver a produção com preços que permitam recuperar os custos e manter a actividade.",
  },
];

const desafios = [
  "Produção nacional de milho e soja",
  "Disponibilidade de matérias-primas para ração",
  "Qualidade e preço das rações",
  "Produção e acesso a pintos de um dia",
  "Genética adaptada aos sistemas de produção",
  "Assistência veterinária",
  "Biossegurança nas pequenas explorações",
  "Qualidade da água",
  "Energia e conservação",
  "Abate e processamento",
  "Cadeia de frio",
  "Transporte e logística",
  "Financiamento",
  "Formação dos produtores",
  "Registos técnicos e económicos",
  "Estatísticas avícolas nacionais",
];

const investigacao = [
  "Mapeamento nacional das explorações avícolas.",
  "Custos reais de produção por sistema e província.",
  "Qualidade nutricional das matérias-primas produzidas em Angola.",
  "Qualidade microbiológica e físico-química da água dos aviários.",
  "Principais doenças e causas de mortalidade.",
  "Modelos de biossegurança adaptados aos pequenos produtores.",
  "Eficiência alimentar em diferentes condições climáticas.",
  "Qualidade e conservação dos ovos durante transporte e comercialização.",
  "Integração entre produção de milho, soja e avicultura.",
  "Impacto económico da avicultura familiar.",
  "Capacidade nacional de produção de ração.",
  "Capacidade nacional de produção de pintos.",
  "Abate, processamento e cadeia de frio.",
  "Dependência externa e substituição de importações.",
];

export default function GalinhasPage() {
  const [filtro, setFiltro] = useState("Todos");
  const [sistemaAtivo, setSistemaAtivo] = useState("intensivo");
  const [doencaAtiva, setDoencaAtiva] = useState("Doença de Newcastle");

  const temasFiltrados = useMemo(() => {
    if (filtro === "Todos") {
      return temas;
    }

    return temas.filter((tema) => tema.categoria === filtro);
  }, [filtro]);

  const sistemaSelecionado =
    sistemas.find((item) => item.id === sistemaAtivo) ?? sistemas[2];

  const doencaSelecionada =
    doencas.find((item) => item.nome === doencaAtiva) ?? doencas[0];

  return (
    <main className="min-h-screen bg-[#f5f7f2] text-slate-800">

      {/* HERO */}
      <section className="relative min-h-[700px] overflow-hidden bg-slate-950">
        <img
          src="/imagens/galinhas/vinabar.jpg"
          alt="Exploração avícola em Angola"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />

        <div className="relative mx-auto flex min-h-[700px] max-w-7xl items-end px-6 pb-20 pt-32 lg:px-8">
          <div className="max-w-5xl">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
              AGROINOVA ANGOLA • PECUÁRIA • AVICULTURA
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Galinhas
            </h1>

            <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-200 sm:text-xl">
              Produção de carne e ovos, alimentação, genética, pintos,
              instalações, sanidade, biossegurança, economia e cadeia de valor
              da avicultura em Angola.
            </p>

            <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300">
              Esta página funciona como porta de entrada para estudantes,
              produtores, técnicos, investigadores e gestores que precisam de
              compreender a avicultura angolana para além do aviário.
            </p>

            <div className="mt-9 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {["Frango", "Ovos", "Ração", "Sanidade"].map((item) => (
                <div
                  key={item}
                  className="border border-white/20 bg-black/30 px-5 py-4 backdrop-blur-sm"
                >
                  <p className="text-sm font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-emerald-700">
              Início
            </Link>

            <span>/</span>

            <Link href="/pecuaria" className="hover:text-emerald-700">
              Pecuária
            </Link>

            <span>/</span>

            <span className="font-medium text-slate-900">
              Galinhas
            </span>
          </nav>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr]">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Avicultura angolana
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                A galinha como componente estratégico da produção de alimentos
              </h2>

              <div className="mt-7 space-y-6 text-justify text-base leading-8 text-slate-700">

                <p>
                  A avicultura ocupa uma posição particular dentro da produção
                  animal porque permite obter dois alimentos de elevada procura:
                  carne de aves e ovos. Em Angola, a actividade apresenta
                  diferentes escalas, desde criações familiares até explorações
                  comerciais especializadas.
                </p>

                <p>
                  Contudo, analisar a avicultura apenas pelo número de galinhas
                  é insuficiente. O desempenho depende da genética, qualidade
                  dos pintos, alimentação, água, ambiente, instalações,
                  densidade, iluminação, sanidade, biossegurança, energia,
                  mão-de-obra, financiamento e mercado.
                </p>

                <p>
                  Existe ainda uma questão estratégica: a produção interna de
                  carne de frango não cobre toda a procura nacional. Angola
                  continua a recorrer às importações, criando oportunidades,
                  mas também desafios para produtores, fabricantes de ração,
                  agricultores, transportadores, processadores e distribuidores.
                </p>

                <p>
                  Por isso, esta área do AGROINOVA ANGOLA procura explicar a
                  cadeia completa: agricultura, matérias-primas, ração, pintos,
                  produção, sanidade, abate, conservação, distribuição,
                  consumo, investigação e políticas de desenvolvimento.
                </p>

              </div>
            </div>

            <div className="border border-emerald-100 bg-emerald-50 p-8">

              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
                Princípio técnico
              </p>

              <h3 className="mt-4 text-2xl font-bold leading-9 text-slate-900">
                A avicultura é uma cadeia, não apenas um aviário.
              </h3>

              <div className="mt-7 space-y-4 border-t border-emerald-200 pt-6 text-sm leading-7 text-slate-700">
                <p>Sem pintos não existe lote.</p>
                <p>Sem ração adequada não existe crescimento eficiente.</p>
                <p>Sem água e sanidade não existe produção sustentável.</p>
                <p>Sem mercado não existe rentabilidade.</p>
                <p>
                  Sem estatísticas não é possível planear correctamente o
                  sector.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* DADOS OFICIAIS */}
      <section className="bg-[#eaf2e8]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="max-w-5xl">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Angola • Dados oficiais
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Produção nacional de carne de aves e ovos
            </h2>

            <p className="mt-5 text-justify text-base leading-8 text-slate-700">
              O Instituto Nacional de Estatística registou, no primeiro
              semestre de 2025, uma produção nacional de 18.416 toneladas de
              carne de aves. No mesmo período, a produção de ovos atingiu
              1.133.547.436 unidades. Estes valores representam produção
              registada no período indicado e não devem ser confundidos com
              efectivo nacional de aves.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-medium text-slate-500">
                Carne de aves
              </p>

              <p className="mt-3 text-4xl font-bold text-slate-900">
                18.416
              </p>

              <p className="mt-2 text-sm text-slate-600">
                toneladas no I semestre de 2025
              </p>

              <p className="mt-6 border-t border-slate-100 pt-4 text-xs leading-6 text-slate-500">
                Fonte: INE — Boletim de Indicadores da Produção Agro-Pecuária e
                Florestal.
              </p>
            </div>

            <div className="border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-medium text-slate-500">
                Ovos produzidos
              </p>

              <p className="mt-3 text-4xl font-bold text-slate-900">
                1,133 mil milhões
              </p>

              <p className="mt-2 text-sm text-slate-600">
                unidades no I semestre de 2025
              </p>

              <p className="mt-6 border-t border-slate-100 pt-4 text-xs leading-6 text-slate-500">
                Valor oficial: 1.133.547.436 unidades.
              </p>
            </div>

            <div className="border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-medium text-slate-500">
                Crescimento dos ovos
              </p>

              <p className="mt-3 text-4xl font-bold text-emerald-700">
                +16,4%
              </p>

              <p className="mt-2 text-sm text-slate-600">
                variação no I semestre de 2025 face ao período homólogo
              </p>

              <p className="mt-6 border-t border-slate-100 pt-4 text-xs leading-6 text-slate-500">
                Comparação indicada pelo INE.
              </p>
            </div>

          </div>

          <div className="mt-8 border border-amber-200 bg-amber-50 p-7">

            <p className="font-semibold text-slate-900">
              Atenção à interpretação dos dados
            </p>

            <p className="mt-3 text-justify text-sm leading-7 text-slate-700">
              Produção não significa efectivo animal. Os dados acima indicam
              quantidades produzidas durante determinado período. Não devem ser
              utilizados isoladamente para calcular o número de galinhas
              existentes em cada província.
            </p>

          </div>

        </div>
      </section>

      {/* IMPORTAÇÕES */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="max-w-5xl">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Produção nacional • Importações
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              A dependência externa de carne de frango
            </h2>

            <p className="mt-7 text-justify text-lg leading-9 text-slate-300">
              A dependência das importações é uma das questões mais importantes
              para compreender a avicultura angolana. O problema não pode ser
              explicado apenas pela quantidade de aves existentes. Envolve
              ração, matérias-primas, genética, pintos, energia, financiamento,
              processamento, logística, cadeia de frio e capacidade de
              comercialização.
            </p>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            <div className="border border-white/10 bg-white/5 p-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                Cobertura interna
              </p>

              <p className="mt-3 text-4xl font-bold">
                18,2%
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Cobertura estimada das necessidades de frango pela produção
                interna em 2023, segundo apresentação governamental publicada
                em 2024.
              </p>
            </div>

            <div className="border border-white/10 bg-white/5 p-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                Importações
              </p>

              <p className="mt-3 text-4xl font-bold">
                227.855 t
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Frango e partes de frango importados em 2025, segundo dados da
                AGT apresentados pelo Ministério da Indústria e Comércio.
              </p>
            </div>

            <div className="border border-white/10 bg-white/5 p-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                Valor
              </p>

              <p className="mt-3 text-4xl font-bold">
                +310 M USD
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Valor associado às importações de frango em 2025, segundo os
                dados divulgados pelo sector público.
              </p>
            </div>

            <div className="border border-white/10 bg-white/5 p-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                Produção nacional
              </p>

              <p className="mt-3 text-4xl font-bold">
                64.394 t
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Estimativa anual de produção de carne de aves apresentada pelo
                Ministério da Indústria e Comércio para 2025.
              </p>
            </div>

          </div>

          <div className="mt-10 border border-amber-400/30 bg-amber-400/10 p-8">

            <p className="text-xl font-bold">
              Sobre a afirmação de que Angola importa “90% do frango”
            </p>

            <p className="mt-4 text-justify leading-8 text-slate-300">
              A afirmação de que Angola importa cerca de 90% do frango
              consumido aparece no debate público e foi atribuída recentemente
              à associação representativa do sector avícola. Entretanto, uma
              plataforma técnica como o AGROINOVA ANGOLA deve evitar apresentar
              essa percentagem como se fosse automaticamente equivalente a uma
              estatística oficial única.
            </p>

            <p className="mt-4 text-justify leading-8 text-slate-300">
              Existem diferentes indicadores: produção nacional, consumo,
              importações, cobertura das necessidades e períodos de referência.
              Uma apresentação governamental publicada em 2024 indicava
              cobertura interna de 18,2% das necessidades de frango em 2023.
              Em 2025, os dados apresentados pelo Ministério da Indústria e
              Comércio indicaram 227.855 toneladas de frango e partes
              importadas.
            </p>

            <p className="mt-5 border-t border-white/10 pt-5 text-sm leading-7 text-slate-400">
              Nota metodológica: o AGROINOVA ANGOLA deve indicar sempre a fonte,
              ano, unidade e metodologia antes de transformar diferentes
              indicadores numa percentagem única.
            </p>

          </div>

        </div>
      </section>

      {/* PORQUE IMPORTAMOS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="max-w-5xl">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Cadeia de valor
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Porque é que Angola ainda importa tanto frango?
            </h2>

            <p className="mt-6 text-justify text-lg leading-9 text-slate-700">
              A resposta não está simplesmente na quantidade de galinhas
              existentes. Para produzir frango de forma competitiva é
              necessário assegurar toda uma cadeia que começa na produção de
              matérias-primas e termina no consumidor.
            </p>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {cadeia.map((item) => (
              <article
                key={item.titulo}
                className="border border-slate-200 bg-slate-50 p-7"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {item.titulo}
                </h3>

                <p className="mt-4 text-justify text-sm leading-7 text-slate-600">
                  {item.texto}
                </p>
              </article>
            ))}

          </div>

        </div>
      </section>

      {/* ALDEIA NOVA */}
      <section className="bg-[#eef4ed]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">

            <div>

              <a
                href="https://expansao.co.ao/angola/detalhe/aldeia-nova-pressiona-acordo-de-conciliacao-apos-agt-bloquear-contas-60087.html"
                target="_blank"
                rel="noreferrer"
                className="block overflow-hidden"
              >
                <img
                  src="/imagens/galinhas/santo-antonio.jpg"
                  alt="Exploração comercial de aves em Angola"
                  className="h-[520px] w-full object-cover transition duration-300 hover:scale-[1.02]"
                />
              </a>

              <div className="border-x border-b border-slate-200 bg-white p-5">

                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                  Caso de estudo
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  A imagem é uma referência visual da avicultura comercial
                  angolana. O texto ao lado trata especificamente da experiência
                  histórica da Aldeia Nova.
                </p>

              </div>

            </div>

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Estudo de caso
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Aldeia Nova — Waku Cungo, Cuanza Sul
              </h2>

              <div className="mt-7 space-y-6 text-justify leading-8 text-slate-700">

                <p>
                  A Aldeia Nova constitui um caso relevante para estudar a
                  integração agropecuária em Angola. A experiência no Waku
                  Cungo envolveu agricultura, pecuária, produção de ração,
                  pintos e ovos.
                </p>

                <p>
                  Documentação histórica relativa à campanha 2017/2018 registou
                  uma produção de 80 milhões de ovos por ano, aproximadamente
                  24.000 pintos por semana, 18 mil toneladas de ração animal e
                  300.000 kg de carne.
                </p>

                <p>
                  Estes números são históricos e não devem ser apresentados como
                  produção actual da unidade sem confirmação de dados mais
                  recentes.
                </p>

                <p>
                  O caso é importante porque demonstra uma questão fundamental:
                  a produção avícola pode ser integrada com a agricultura. A
                  produção de milho e outras matérias-primas pode alimentar a
                  cadeia de ração, enquanto resíduos e subprodutos podem ser
                  aproveitados noutros sistemas quando tecnicamente tratados e
                  utilizados.
                </p>

              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                {[
                  ["80 milhões", "ovos/ano — dado histórico"],
                  ["24.000", "pintos/semana — dado histórico"],
                  ["18 mil t", "ração animal — dado histórico"],
                  ["300 mil kg", "carne — dado histórico"],
                ].map(([numero, descricao]) => (
                  <div
                    key={numero}
                    className="border border-slate-200 bg-white p-5"
                  >
                    <p className="text-2xl font-bold text-slate-900">
                      {numero}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {descricao}
                    </p>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CASOS DOCUMENTADOS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="max-w-5xl">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Casos documentados
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              A avicultura que existe no terreno angolano
            </h2>

            <p className="mt-6 text-justify text-lg leading-9 text-slate-700">
              Angola possui diferentes escalas de produção. Existem grandes
              explorações comerciais, unidades médias, pequenos produtores,
              jovens empreendedores e sistemas familiares. Os exemplos abaixo
              não constituem ranking nacional.
            </p>

          </div>

          <div className="mt-14 grid gap-7 lg:grid-cols-3">

            {imagens.map((imagem) => (
              <article
                key={imagem.titulo}
                className="overflow-hidden border border-slate-200 bg-white shadow-sm"
              >

                <a
                  href={imagem.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block overflow-hidden"
                >
                  <img
                    src={imagem.src}
                    alt={`${imagem.titulo} — ${imagem.local}`}
                    className="h-72 w-full object-cover transition duration-300 hover:scale-[1.04]"
                  />
                </a>

                <div className="p-6">

                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                    {imagem.local}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-slate-900">
                    {imagem.titulo}
                  </h3>

                  <p className="mt-3 text-justify text-sm leading-7 text-slate-600">
                    {imagem.descricao}
                  </p>

                  <a
                    href={imagem.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-block text-sm font-semibold text-emerald-700 hover:text-emerald-900"
                  >
                    Consultar fonte
                  </a>

                  <p className="mt-2 text-xs text-slate-400">
                    Fonte: {imagem.fonte}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* SISTEMAS */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="max-w-5xl">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Sistemas de produção
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Nem toda galinha é criada da mesma maneira
            </h2>

            <p className="mt-6 text-justify text-lg leading-9 text-slate-300">
              O sistema de produção determina necessidades de instalações,
              alimentação, mão-de-obra, equipamentos, biossegurança, sanidade,
              investimento e gestão.
            </p>

          </div>

          <div className="mt-12 grid gap-3 md:grid-cols-3">

            {sistemas.map((sistema) => (
              <button
                key={sistema.id}
                type="button"
                onClick={() => setSistemaAtivo(sistema.id)}
                className={`border p-6 text-left transition ${
                  sistemaAtivo === sistema.id
                    ? "border-emerald-400 bg-emerald-500/10"
                    : "border-white/10 bg-white/5 hover:border-white/30"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  Sistema
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  {sistema.titulo}
                </h3>
              </button>
            ))}

          </div>

          <div className="mt-5 border border-white/10 bg-white/5 p-8">

            <h3 className="text-2xl font-bold">
              {sistemaSelecionado.titulo}
            </h3>

            <p className="mt-4 max-w-5xl text-justify leading-8 text-slate-300">
              {sistemaSelecionado.texto}
            </p>

          </div>

        </div>
      </section>

      {/* PINTOS */}
      <section className="bg-[#eef4ed]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Primeira fase
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                O pinto de um dia determina muito do futuro do lote
              </h2>

              <div className="mt-7 space-y-5 text-justify leading-8 text-slate-700">

                <p>
                  O início do ciclo é uma fase de elevada sensibilidade. O
                  produtor deve conhecer a origem dos pintos, o estado sanitário,
                  a uniformidade, as condições de transporte e a preparação do
                  aviário.
                </p>

                <p>
                  Antes da chegada devem estar preparados água, alimentação,
                  cama, equipamentos, ventilação, iluminação e condições
                  ambientais adequadas ao sistema utilizado.
                </p>

                <p>
                  O objectivo não é apenas receber os pintos, mas garantir que
                  todos conseguem encontrar água e alimento, manter condições
                  térmicas adequadas e iniciar rapidamente o crescimento.
                </p>

              </div>

            </div>

            <div className="border border-slate-200 bg-white p-8">

              <h3 className="text-xl font-bold text-slate-900">
                Verificações na recepção
              </h3>

              <div className="mt-6 space-y-3">

                {[
                  "Origem e quantidade recebida",
                  "Condição geral e actividade",
                  "Acesso imediato à água",
                  "Acesso imediato à alimentação",
                  "Temperatura adequada",
                  "Cama seca e limpa",
                  "Ventilação adequada",
                  "Distribuição dos equipamentos",
                  "Registo da data de entrada",
                  "Registo do fornecedor",
                ].map((item) => (
                  <div
                    key={item}
                    className="border-l-2 border-emerald-600 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700"
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ALIMENTAÇÃO */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="max-w-5xl">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Nutrição
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Alimentação é um dos principais custos da produção avícola
            </h2>

            <p className="mt-6 text-justify text-lg leading-9 text-slate-700">
              A alimentação precisa acompanhar a fase fisiológica da ave. Uma
              ração adequada deve fornecer energia, proteína, aminoácidos,
              minerais, vitaminas e outros nutrientes em proporções adequadas.
              Além da formulação, é necessário controlar armazenamento,
              humidade, contaminação, desperdício e qualidade das matérias-primas.
            </p>

          </div>

          <div className="mt-14 overflow-hidden border border-slate-200">

            <div className="overflow-x-auto">

              <table className="w-full min-w-[800px] text-left">

                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold">
                      Elemento
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold">
                      Função
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold">
                      Controlo
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-200">

                  {[
                    [
                      "Energia",
                      "Sustenta metabolismo, crescimento e produção.",
                      "Formulação e consumo.",
                    ],
                    [
                      "Proteína",
                      "Crescimento e formação dos tecidos.",
                      "Origem e qualidade das fontes proteicas.",
                    ],
                    [
                      "Aminoácidos",
                      "Síntese proteica e desempenho produtivo.",
                      "Equilíbrio nutricional.",
                    ],
                    [
                      "Minerais",
                      "Ossos, metabolismo e formação da casca.",
                      "Equilíbrio mineral.",
                    ],
                    [
                      "Água",
                      "Fundamental para as funções fisiológicas.",
                      "Qualidade, disponibilidade e higiene.",
                    ],
                  ].map(([elemento, funcao, controlo]) => (
                    <tr key={elemento}>
                      <td className="px-6 py-5 font-semibold">
                        {elemento}
                      </td>

                      <td className="px-6 py-5 text-sm text-slate-600">
                        {funcao}
                      </td>

                      <td className="px-6 py-5 text-sm text-slate-600">
                        {controlo}
                      </td>
                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

          </div>

          <div className="mt-8 border border-emerald-100 bg-emerald-50 p-7">

            <p className="font-semibold text-slate-900">
              Uma oportunidade estratégica para Angola
            </p>

            <p className="mt-3 text-justify text-sm leading-7 text-slate-700">
              O desenvolvimento da produção nacional de milho, soja e outras
              matérias-primas pode contribuir para fortalecer a cadeia de
              alimentação animal. No entanto, produzir matérias-primas não
              elimina automaticamente a necessidade de importações. É necessário
              garantir quantidade, qualidade, armazenamento, processamento,
              formulação e distribuição.
            </p>

          </div>

        </div>
      </section>

      {/* ÁGUA */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="max-w-5xl">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Água
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              A água é um ponto crítico produtivo e sanitário
            </h2>

            <p className="mt-6 text-justify text-lg leading-9 text-slate-300">
              A água deve estar disponível continuamente e apresentar qualidade
              adequada. Bebedouros sujos, tubagens com biofilme, contaminação,
              interrupções de fornecimento e problemas no reservatório podem
              afectar consumo, desempenho e saúde das aves.
            </p>

          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

            {[
              "Fonte de água",
              "Reservatório",
              "Tubagens",
              "Bebedouros",
            ].map((item) => (
              <div
                key={item}
                className="border border-white/10 bg-white/5 p-6"
              >
                <h3 className="font-semibold">{item}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Deve fazer parte do programa de controlo da exploração.
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* INSTALAÇÕES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="max-w-5xl">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Instalações e ambiente
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              O aviário deve ser pensado antes de receber as aves
            </h2>

            <p className="mt-6 text-justify text-lg leading-9 text-slate-700">
              Localização, drenagem, ventilação, orientação, acesso à água,
              energia, protecção contra chuva e calor, limpeza, circulação de
              pessoas, controlo de pragas e gestão de resíduos devem ser
              considerados antes da construção ou adaptação de uma exploração.
            </p>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                titulo: "Ventilação",
                texto:
                  "Remove calor, humidade, poeiras e gases e contribui para melhorar a qualidade do ar.",
              },
              {
                titulo: "Temperatura",
                texto:
                  "As necessidades térmicas variam com a idade. Os pintos são particularmente sensíveis.",
              },
              {
                titulo: "Cama",
                texto:
                  "Quando utilizada, deve permanecer seca e em condições higiénicas adequadas.",
              },
              {
                titulo: "Iluminação",
                texto:
                  "Deve ser planeada de acordo com o tipo de produção e a fase das aves.",
              },
              {
                titulo: "Densidade",
                texto:
                  "A lotação excessiva aumenta competição, pressão ambiental e dificuldade de maneio.",
              },
              {
                titulo: "Drenagem",
                texto:
                  "A água acumulada aumenta humidade e pode favorecer problemas sanitários.",
              },
            ].map((item) => (
              <div
                key={item.titulo}
                className="border border-slate-200 p-7"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {item.titulo}
                </h3>

                <p className="mt-4 text-justify text-sm leading-7 text-slate-600">
                  {item.texto}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* SANIDADE */}
      <section className="bg-[#eef4ed]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="max-w-5xl">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Saúde avícola
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Sanidade começa antes da doença
            </h2>

            <p className="mt-6 text-justify text-lg leading-9 text-slate-700">
              Um programa sanitário deve combinar biossegurança, vacinação
              quando indicada, higiene, qualidade da água e alimentação,
              observação diária, controlo de parasitas, diagnóstico e
              acompanhamento veterinário.
            </p>

          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {doencas.map((doenca) => (
              <button
                key={doenca.nome}
                type="button"
                onClick={() => setDoencaAtiva(doenca.nome)}
                className={`border p-6 text-left transition ${
                  doencaAtiva === doenca.nome
                    ? "border-emerald-600 bg-white shadow-sm"
                    : "border-slate-200 bg-white hover:border-emerald-300"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                  {doenca.grupo}
                </p>

                <h3 className="mt-2 text-lg font-bold text-slate-900">
                  {doenca.nome}
                </h3>
              </button>
            ))}

          </div>

          <div className="mt-6 border border-slate-200 bg-white p-8">

            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
              Informação técnica
            </p>

            <h3 className="mt-2 text-2xl font-bold text-slate-900">
              {doencaSelecionada.nome}
            </h3>

            <p className="mt-4 max-w-5xl text-justify leading-8 text-slate-700">
              {doencaSelecionada.importancia}
            </p>

            <p className="mt-5 border-t border-slate-100 pt-5 text-sm leading-7 text-slate-500">
              Diagnóstico e tratamento devem ser realizados de acordo com
              avaliação veterinária. Antibióticos e outros medicamentos não
              devem ser utilizados por tentativa ou sem orientação profissional.
            </p>

          </div>

        </div>
      </section>

      {/* BIOSSEGURANÇA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Biossegurança
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
                A primeira barreira é impedir a entrada do agente infeccioso
              </h2>

              <div className="mt-7 space-y-5 text-justify leading-8 text-slate-700">

                <p>
                  Biossegurança significa reduzir a probabilidade de entrada,
                  circulação e disseminação de agentes infecciosos dentro da
                  exploração.
                </p>

                <p>
                  Pessoas, veículos, caixas, equipamentos, aves novas,
                  roedores, insectos, aves selvagens, água e ração podem
                  transportar agentes patogénicos.
                </p>

                <p>
                  O programa deve ser adaptado ao tamanho da exploração. Mesmo
                  um pequeno produtor pode controlar visitantes, separar aves
                  doentes, proteger a ração, limpar equipamentos e controlar
                  roedores.
                </p>

              </div>

            </div>

            <div className="border border-slate-200 bg-slate-50 p-8">

              <h3 className="text-xl font-bold text-slate-900">
                Pontos de controlo
              </h3>

              <div className="mt-6 space-y-3">

                {[
                  "Entrada de pessoas",
                  "Veículos",
                  "Calçado e roupa",
                  "Limpeza e desinfecção",
                  "Roedores",
                  "Aves selvagens",
                  "Aves doentes",
                  "Quarentena",
                  "Gestão de cadáveres",
                  "Vazio sanitário",
                ].map((item) => (
                  <div
                    key={item}
                    className="border-b border-slate-200 pb-3 text-sm text-slate-700"
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* OVOS */}
      <section className="bg-[#eef4ed]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="max-w-5xl">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Poedeiras
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Produzir ovos exige controlo permanente
            </h2>

            <p className="mt-6 text-justify text-lg leading-9 text-slate-700">
              A produção de ovos depende da genética, idade, condição corporal,
              alimentação, água, iluminação, ambiente, saúde e maneio. A
              qualidade do ovo também depende da recolha, higiene, classificação,
              armazenamento e transporte.
            </p>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {[
              "Taxa de postura",
              "Peso do ovo",
              "Qualidade da casca",
              "Ovos partidos",
              "Ovos sujos",
              "Mortalidade",
              "Consumo de ração",
              "Consumo de água",
            ].map((item) => (
              <div
                key={item}
                className="border border-slate-200 bg-white p-6"
              >
                <p className="font-semibold text-slate-900">
                  {item}
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Deve ser acompanhado e registado de acordo com o sistema de
                  produção.
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ECONOMIA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Economia da exploração
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
                Produção elevada não significa necessariamente lucro elevado
              </h2>

              <p className="mt-6 text-justify leading-8 text-slate-700">
                O resultado económico depende da relação entre receitas e
                custos. Ração, pintos, vacinas, medicamentos, energia, água,
                mão-de-obra, mortalidade, transporte, manutenção, embalagens e
                comercialização devem ser contabilizados.
              </p>

              <p className="mt-5 text-justify leading-8 text-slate-700">
                Um produtor que não regista os custos pode interpretar
                incorrectamente o resultado da exploração. A gestão económica
                deve acompanhar a gestão zootécnica.
              </p>

            </div>

            <div className="border border-slate-200 bg-slate-50 p-8">

              <h3 className="text-xl font-bold text-slate-900">
                Custos que devem ser registados
              </h3>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">

                {[
                  "Pintos",
                  "Ração",
                  "Vacinas",
                  "Medicamentos",
                  "Energia",
                  "Água",
                  "Mão-de-obra",
                  "Transporte",
                  "Manutenção",
                  "Embalagens",
                  "Mortalidade",
                  "Comercialização",
                ].map((item) => (
                  <div
                    key={item}
                    className="border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* REALIDADE REGIONAL */}
      <section className="bg-[#f5f7f2]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="max-w-5xl">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Angola por regiões
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              A realidade avícola varia de província para província
            </h2>

            <p className="mt-6 text-justify text-lg leading-9 text-slate-700">
              Clima, altitude, água, energia, estradas, disponibilidade de
              matérias-primas, mercado e assistência veterinária variam dentro
              do território nacional. Por isso, não existe uma solução única
              para todos os produtores.
            </p>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {regioes.map((regiao) => (
              <article
                key={regiao.titulo}
                className="border border-slate-200 bg-white p-7"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {regiao.titulo}
                </h3>

                <p className="mt-4 text-justify text-sm leading-7 text-slate-600">
                  {regiao.texto}
                </p>
              </article>
            ))}

          </div>

          <div className="mt-8 border border-amber-200 bg-amber-50 p-7">

            <p className="font-semibold text-slate-900">
              Nota metodológica
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-700">
              Estas referências provinciais servem para contextualizar
              experiências e condições produtivas. Não constituem ranking
              actual de produção. O AGROINOVA ANGOLA só deve apresentar
              rankings provinciais quando existirem dados oficiais identificados
              por província, período e unidade.
            </p>

          </div>

        </div>
      </section>

      {/* DESAFIOS */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="max-w-5xl">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Desafios nacionais
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              O que precisa de ser melhorado?
            </h2>

            <p className="mt-6 text-justify text-lg leading-9 text-slate-300">
              O desenvolvimento da avicultura exige uma abordagem de cadeia.
              Não basta aumentar o número de aviários se faltarem ração,
              pintos, assistência veterinária, energia, abate, conservação,
              transporte e mercados organizados.
            </p>

          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

            {desafios.map((item) => (
              <div
                key={item}
                className="border border-white/10 bg-white/5 p-6"
              >
                <p className="text-sm leading-7 text-slate-300">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* INVESTIGAÇÃO */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Investigação
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
                O que Angola precisa de investigar?
              </h2>

              <p className="mt-6 text-justify leading-8 text-slate-700">
                Uma avicultura nacional competitiva precisa de dados locais.
                Angola necessita de estudos que relacionem produção, clima,
                alimentação, sanidade, genética, economia, mercado e condições
                reais das explorações.
              </p>

            </div>

            <div className="space-y-3">

              {investigacao.map((item) => (
                <div
                  key={item}
                  className="border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700"
                >
                  {item}
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* TEMAS */}
      <section className="bg-[#f5f7f2]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-5xl">

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Biblioteca técnica
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Aprofundar cada área da criação de galinhas
              </h2>

              <p className="mt-6 text-justify text-lg leading-9 text-slate-700">
                Cada tema será desenvolvido como uma página técnica
                independente, com informação académica, realidade angolana,
                imagens, dados disponíveis, problemas, soluções, indicadores e
                fontes.
              </p>

            </div>

            <div className="flex flex-wrap gap-2">

              {["Todos", "Produção", "Maneio", "Saúde"].map((opcao) => (
                <button
                  key={opcao}
                  type="button"
                  onClick={() => setFiltro(opcao)}
                  className={`border px-4 py-2 text-sm font-medium transition ${
                    filtro === opcao
                      ? "border-emerald-700 bg-emerald-700 text-white"
                      : "border-slate-300 bg-white text-slate-700 hover:border-emerald-500"
                  }`}
                >
                  {opcao}
                </button>
              ))}

            </div>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {temasFiltrados.map((tema) => (
              <Link
                key={tema.id}
                href={tema.href}
                className="group border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:shadow-lg"
              >

                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                  {tema.categoria}
                </p>

                <h3 className="mt-3 text-xl font-bold text-slate-900 group-hover:text-emerald-700">
                  {tema.titulo}
                </h3>

                <p className="mt-4 text-justify text-sm leading-7 text-slate-600">
                  {tema.descricao}
                </p>

                <span className="mt-6 inline-block text-sm font-semibold text-emerald-700">
                  Abrir orientação
                </span>

              </Link>
            ))}

          </div>

        </div>
      </section>

      {/* FONTES */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Fontes
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900">
            Documentação utilizada
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">

            <a
              href="https://www.ine.gov.ao/Arquivos/arquivosCarregados/Carregados/Publicacao_639048311697578197.pdf"
              target="_blank"
              rel="noreferrer"
              className="border border-slate-200 bg-slate-50 p-6 transition hover:border-emerald-400"
            >
              <p className="font-bold text-slate-900">
                INE — Produção Agro-Pecuária e Florestal
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Dados oficiais da produção do primeiro semestre de 2025,
                incluindo carne de aves e ovos.
              </p>
            </a>

            <a
              href="https://www.ucm.minfin.gov.ao/cs/groups/public/documents/document/zmlu/ota1/~edisp/minfin905230.pdf"
              target="_blank"
              rel="noreferrer"
              className="border border-slate-200 bg-slate-50 p-6 transition hover:border-emerald-400"
            >
              <p className="font-bold text-slate-900">
                Aldeia Nova — documentação oficial
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Documentação histórica sobre produção de ovos, pintos, ração,
                carne e organização produtiva.
              </p>
            </a>

            <a
              href="https://pdac.ao/fazenda-vinabar-alcanca-marcos-extraordinarios-na-producao-de-ovos-em-dange-ia-menha/"
              target="_blank"
              rel="noreferrer"
              className="border border-slate-200 bg-slate-50 p-6 transition hover:border-emerald-400"
            >
              <p className="font-bold text-slate-900">
                PDAC — Fazenda Vinabar
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Caso documentado de produção de ovos no Cuanza Norte.
              </p>
            </a>

            <a
              href="https://www.africa-press.net/angola/all-news/association-will-map-poultry-farmers-in-the-country"
              target="_blank"
              rel="noreferrer"
              className="border border-slate-200 bg-slate-50 p-6 transition hover:border-emerald-400"
            >
              <p className="font-bold text-slate-900">
                Africa-Press Angola
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Informação sobre o sector avícola e o levantamento de produtores
                em Angola.
              </p>
            </a>

            <a
              href="https://expansao.co.ao/angola/interior/fazenda-santo-antonio-investe-12-milhoes-usd-na-producao-de-frango-101421.html"
              target="_blank"
              rel="noreferrer"
              className="border border-slate-200 bg-slate-50 p-6 transition hover:border-emerald-400"
            >
              <p className="font-bold text-slate-900">
                Expansão — Fazenda Santo António
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Reportagem sobre investimento e produção comercial de frango em
                Angola.
              </p>
            </a>

            <a
              href="https://mindcom.gov.ao/web/noticias/angola-aposta-na-avicultura-para-reduzir-importacao-de-frango"
              target="_blank"
              rel="noreferrer"
              className="border border-slate-200 bg-slate-50 p-6 transition hover:border-emerald-400"
            >
              <p className="font-bold text-slate-900">
                Ministério da Indústria e Comércio
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Dados recentes sobre produção nacional e importação de frango.
              </p>
            </a>

            <a
              href="https://minagrif.gov.ao/web/noticias/fsdea-e-minagrif-debateram-sobre-o-desenvolvimento-do-sector-avicola"
              target="_blank"
              rel="noreferrer"
              className="border border-slate-200 bg-slate-50 p-6 transition hover:border-emerald-400"
            >
              <p className="font-bold text-slate-900">
                MINAGRIF — Desenvolvimento do sector avícola
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Conferência sobre os desafios estruturais e oportunidades da
                avicultura em Angola.
              </p>
            </a>

            <a
              href="https://cipra.gov.ao/noticias/1847/governo/producao-nacional/angola-tem-capacidade-para-produzir-carne-de-frango-e-ovos"
              target="_blank"
              rel="noreferrer"
              className="border border-slate-200 bg-slate-50 p-6 transition hover:border-emerald-400"
            >
              <p className="font-bold text-slate-900">
                CIPRA — Produção nacional de frango e ovos
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Informação governamental sobre capacidade produtiva, défice de
                ração e desafios da produção nacional.
              </p>
            </a>

          </div>

        </div>
      </section>

      {/* NAVEGAÇÃO FINAL */}
      <section className="bg-[#eaf2e8]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="border border-emerald-200 bg-white p-8">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Biblioteca de avicultura
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Aprofundar a avicultura angolana
            </h2>

            <p className="mt-4 max-w-5xl text-justify leading-8 text-slate-600">
              Esta página funciona como porta de entrada. Os temas abaixo serão
              desenvolvidos individualmente com maior profundidade técnica,
              imagens de explorações angolanas, dados disponíveis, tabelas,
              problemas, soluções, indicadores e referências.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

              {temas.map((tema) => (
                <Link
                  key={tema.id}
                  href={tema.href}
                  className="border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-800 transition hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-800"
                >
                  {tema.titulo}
                </Link>
              ))}

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}