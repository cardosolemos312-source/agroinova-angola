"use client";

import Link from "next/link";
import { useState } from "react";

type Secao = {
  numero: string;
  titulo: string;
  resumo: string;
  imagem: string;
  alt: string;
  conteudo: string[];
};

const imagensCodornizes = {
  observacao:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Japanese_Quail.jpg?width=1000",
  instalacoes:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Adlut_Coturnix_japonica2015.jpg?width=1000",
  biosseguranca:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Cailles_du_japon.jpg?width=1000",
  alimentacao:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Burung_Puyuh.jpg?width=1000",
  sinais:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Coturnix_japonica20150824.jpg?width=1000",
  veterinario:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Quail_in_hands,_Canberra_ACT.jpg?width=1000",
  residuos:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Japanese_coturnix_cock_dustbathing.jpg?width=1000",
  registos:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Cailles_du_japon_isabelle.jpg?width=1000",
};

const secoes: Secao[] = [
  {
    numero: "01",
    titulo: "Observação diária",
    resumo: "Identificar precocemente alterações no comportamento e na saúde.",
    imagem: imagensCodornizes.observacao,
    alt: "Codorniz japonesa adulta",
    conteudo: [
      "Observe as codornizes diariamente, de preferência em horários semelhantes, para reconhecer alterações no comportamento habitual.",
      "Verifique se as aves estão ativas, se se movimentam normalmente, se comem e bebem água e se apresentam plumagem em boas condições.",
      "Observe a distribuição das aves no espaço. Aves agrupadas de forma anormal, isoladas ou com pouca reação ao ambiente podem precisar de avaliação.",
      "Retire restos de alimentos deteriorados e verifique se os bebedouros e comedouros estão limpos e funcionais.",
      "Registe as alterações encontradas e acompanhe a evolução. A observação diária ajuda a identificar problemas, mas não substitui o diagnóstico veterinário.",
    ],
  },
  {
    numero: "02",
    titulo: "Higiene das instalações",
    resumo: "Manter gaiolas, equipamentos e áreas de criação limpos e secos.",
    imagem: imagensCodornizes.instalacoes,
    alt: "Codornizes japonesas em ambiente de criação",
    conteudo: [
      "Limpe regularmente os comedouros, os bebedouros, as gaiolas e as superfícies utilizadas na criação.",
      "Remova fezes acumuladas, penas, restos de ração e materiais húmidos. A acumulação de matéria orgânica pode favorecer a multiplicação de microrganismos e atrair pragas.",
      "Evite humidade excessiva, correntes de ar fortes e acumulação de gases provenientes dos dejetos.",
      "Quando utilizar um desinfetante, respeite as instruções do fabricante, a concentração indicada e o tempo de contacto. Retire as aves da área quando o produto assim o exigir.",
      "Antes de voltar a colocar as aves no espaço higienizado, confirme que as superfícies estão adequadas para a sua segurança.",
    ],
  },
  {
    numero: "03",
    titulo: "Biossegurança",
    resumo: "Reduzir a entrada e a propagação de agentes causadores de doenças.",
    imagem: imagensCodornizes.biosseguranca,
    alt: "Codornizes japonesas mantidas em cativeiro",
    conteudo: [
      "Limite o acesso às instalações de criação e evite a entrada desnecessária de visitantes.",
      "Lave as mãos antes e depois de manusear as aves e utilize calçado e equipamentos destinados à área de criação.",
      "Limpe e desinfete os materiais partilhados entre diferentes grupos de aves. Não transporte equipamentos sujos de uma instalação para outra.",
      "Separe as aves recém-adquiridas das restantes durante um período de quarentena definido com orientação veterinária.",
      "Quando houver suspeita de doença, evite movimentar aves, ovos, equipamentos ou resíduos para outras instalações até receber orientações adequadas.",
    ],
  },
  {
    numero: "04",
    titulo: "Água e alimentação seguras",
    resumo: "Garantir água limpa e ração apropriada à idade e à fase produtiva.",
    imagem: imagensCodornizes.alimentacao,
    alt: "Codorniz japonesa em ambiente de criação",
    conteudo: [
      "Disponibilize água potável limpa e em quantidade suficiente. Verifique diariamente os bebedouros e a disponibilidade de água.",
      "Utilize alimentos formulados para a fase de desenvolvimento das codornizes, considerando as recomendações nutricionais aplicáveis.",
      "Armazene a ração num local seco, ventilado e protegido de roedores, insetos, aves silvestres e outros contaminantes.",
      "Não forneça ração com bolor, cheiro anormal, sinais de humidade ou suspeita de contaminação.",
      "Observe alterações no consumo de água e alimento. Uma redução inesperada pode indicar problemas ambientais, nutricionais ou sanitários.",
    ],
  },
  {
    numero: "05",
    titulo: "Sinais de alerta",
    resumo: "Reconhecer sintomas que justificam avaliação especializada.",
    imagem: imagensCodornizes.sinais,
    alt: "Codorniz japonesa adulta",
    conteudo: [
      "Esteja atento à falta de apetite, à redução do consumo de água, à apatia, à perda de equilíbrio e às alterações de postura ou locomoção.",
      "Observe sinais respiratórios, como dificuldade em respirar, espirros frequentes ou secreções anormais.",
      "Verifique a presença de diarreia persistente, alterações acentuadas nas fezes, penas eriçadas, feridas ou emagrecimento.",
      "Mortalidade inesperada, vários animais doentes ao mesmo tempo ou agravamento rápido dos sintomas exigem contacto imediato com um veterinário.",
      "Não administre antibióticos, antiparasitários ou outros medicamentos sem orientação profissional. O tratamento inadequado pode atrasar o diagnóstico e favorecer a resistência antimicrobiana.",
    ],
  },
  {
    numero: "06",
    titulo: "Acompanhamento veterinário",
    resumo: "Recorrer a profissionais para diagnóstico, prevenção e tratamento.",
    imagem: imagensCodornizes.veterinario,
    alt: "Codorniz japonesa segura cuidadosamente pelas mãos",
    conteudo: [
      "Estabeleça contacto com um médico veterinário com experiência em aves ou produção avícola para definir um plano sanitário adequado à exploração.",
      "Peça orientação sobre vacinação, controlo de parasitas, prevenção de doenças e procedimentos de biossegurança aplicáveis à região e ao sistema de criação.",
      "Quando uma ave apresentar sinais de doença, reduza o manuseamento desnecessário e procure orientação sobre isolamento e avaliação.",
      "Utilize medicamentos apenas quando forem indicados por um profissional habilitado, respeitando a dose, a duração do tratamento e os períodos de segurança para ovos e carne.",
      "Em caso de suspeita de doença de declaração obrigatória, siga as orientações dos serviços veterinários competentes.",
    ],
  },
  {
    numero: "07",
    titulo: "Gestão de aves mortas e resíduos",
    resumo: "Evitar contaminação e proteger as restantes aves e o ambiente.",
    imagem: imagensCodornizes.residuos,
    alt: "Codorniz japonesa em comportamento natural",
    conteudo: [
      "Retire as aves mortas da área de criação com equipamento de proteção adequado e evite o contacto direto com os tecidos.",
      "Não abandone cadáveres, penas, fezes ou resíduos em cursos de água, terrenos abertos ou locais acessíveis a animais.",
      "A eliminação deve cumprir as orientações veterinárias e as regras sanitárias e ambientais aplicáveis em Angola.",
      "Se ocorrer mortalidade súbita ou elevada, procure orientação veterinária antes de eliminar os cadáveres, pois podem ser necessários procedimentos de investigação.",
      "Depois de remover os resíduos, higienize os materiais utilizados e lave as mãos. Não reutilize recipientes contaminados sem limpeza e desinfeção adequadas.",
    ],
  },
  {
    numero: "08",
    titulo: "Registos sanitários",
    resumo: "Documentar ocorrências para acompanhar a saúde do efetivo.",
    imagem: imagensCodornizes.registos,
    alt: "Codorniz japonesa de plumagem castanha",
    conteudo: [
      "Registe diariamente a mortalidade, o consumo de água e alimento e quaisquer alterações relevantes no comportamento das aves.",
      "Anote a data de aparecimento dos sintomas, o número de aves afetadas, as medidas tomadas e as recomendações recebidas do veterinário.",
      "Guarde os registos de tratamentos, incluindo o nome do medicamento, a dose, a duração e os períodos de segurança indicados.",
      "Acompanhe a evolução da postura, da eclosão e do crescimento, quando esses indicadores forem relevantes para o sistema de produção.",
      "Analise os registos regularmente para identificar padrões, avaliar medidas preventivas e melhorar a gestão sanitária da exploração.",
    ],
  },
];

const verificacoes = [
  "As aves foram observadas hoje.",
  "A água está limpa e disponível.",
  "Os comedouros e bebedouros estão limpos.",
  "A ração está seca e sem sinais de deterioração.",
  "As instalações estão limpas e ventiladas.",
  "Não foram ignorados sinais de doença ou mortalidade.",
  "As ocorrências relevantes foram registadas.",
];

const destaques = [
  {
    titulo: "Observação diária",
    descricao:
      "Acompanhe o comportamento, o consumo de água e alimento e a condição geral das aves.",
    numero: "01",
  },
  {
    titulo: "Prevenção",
    descricao:
      "A higiene e a biossegurança reduzem os riscos de introdução e disseminação de doenças.",
    numero: "02",
  },
  {
    titulo: "Resposta rápida",
    descricao:
      "Reconheça sinais de alerta e procure assistência veterinária quando necessário.",
    numero: "03",
  },
];

export default function SanidadeCodornizesPage() {
  const [secaoAtiva, setSecaoAtiva] = useState<Secao | null>(null);
  const [verificacoesFeitas, setVerificacoesFeitas] = useState<boolean[]>(
    verificacoes.map(() => false),
  );

  const totalFeito = verificacoesFeitas.filter(Boolean).length;
  const progresso = Math.round((totalFeito / verificacoes.length) * 100);

  return (
    <main className="min-h-screen bg-[#f5f7f6] text-[#17221b]">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#123d27] via-[#166534] to-[#22a447] text-white">
        <div className="absolute inset-0 -z-10 opacity-15">
          <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border-[45px] border-white" />
          <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full border-[55px] border-white" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
          <div>
            <Link
              href="/pecuaria/codornizes/orientacoes"
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold transition hover:bg-white/20"
            >
              <span aria-hidden="true">←</span>
              Orientações de criação
            </Link>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-green-100">
              AGROINOVA ANGOLA · CUNICULTURA NÃO · COTURNICULTURA
            </p>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Sanidade das codornizes
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-green-50 sm:text-lg">
              Boas práticas de higiene, biossegurança e observação diária para
              apoiar a saúde das codornizes e a gestão responsável da exploração.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#verificacao"
                className="rounded-xl bg-white px-5 py-3 font-bold text-[#166534] shadow-lg transition hover:-translate-y-0.5 hover:bg-green-50"
              >
                Lista de verificação
              </a>
              <a
                href="#orientacoes"
                className="rounded-xl border border-white/40 bg-white/10 px-5 py-3 font-bold text-white transition hover:bg-white/20"
              >
                Consultar orientações
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-2xl font-extrabold">08</p>
                <p className="mt-1 text-xs leading-5 text-green-50">
                  Temas práticos
                </p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-2xl font-extrabold">Diária</p>
                <p className="mt-1 text-xs leading-5 text-green-50">
                  Observação
                </p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-2xl font-extrabold">Prevenir</p>
                <p className="mt-1 text-xs leading-5 text-green-50">
                  É essencial
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-white/10 blur-xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-sm">
              <img
                src={imagensCodornizes.observacao}
                alt="Codorniz japonesa adulta"
                className="h-[300px] w-full rounded-[1.5rem] object-cover sm:h-[420px]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-[#123d27]/90 p-5 text-white backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-green-200">
                  Maneio responsável
                </p>
                <p className="mt-2 text-lg font-bold">
                  A prevenção começa com a observação diária.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#16803d]">
            Princípios fundamentais
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Uma rotina sanitária bem organizada
          </h2>
          <p className="mt-4 leading-8 text-slate-600">
            A saúde das codornizes depende da combinação de observação,
            instalações adequadas, água e alimento seguros, biossegurança e
            assistência veterinária. Nenhuma medida isolada garante a ausência
            de doenças.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {destaques.map((item) => (
            <article
              key={item.numero}
              className="group rounded-3xl border border-[#e2e8e3] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-sm font-extrabold text-green-800 transition group-hover:bg-green-700 group-hover:text-white">
                {item.numero}
              </div>
              <h3 className="mt-5 text-xl font-bold">{item.titulo}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.descricao}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="orientacoes"
        className="mx-auto max-w-7xl scroll-mt-6 px-5 pb-14 sm:px-8 lg:pb-20"
      >
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#16803d]">
              Guia de consulta
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Orientações sanitárias
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Selecione um tema para consultar as recomendações práticas.
            </p>
          </div>
          <p className="text-sm font-semibold text-slate-500">
            {secoes.length} temas disponíveis
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {secoes.map((secao) => (
            <article
              key={secao.numero}
              className="group flex flex-col overflow-hidden rounded-3xl border border-[#e2e8e3] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden bg-green-50">
                <img
                  src={secao.imagem}
                  alt={secao.alt}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 rounded-xl bg-white/95 px-3 py-2 text-sm font-extrabold text-green-800 shadow">
                  {secao.numero}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-extrabold leading-snug">
                  {secao.titulo}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  {secao.resumo}
                </p>
                <button
                  type="button"
                  onClick={() => setSecaoAtiva(secao)}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-700 px-4 py-3 text-sm font-bold text-white transition hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-200"
                >
                  Consultar orientação
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="verificacao" className="scroll-mt-6 bg-white py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#16803d]">
              Ferramenta prática
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Lista de verificação diária
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Utilize esta lista durante a inspeção da exploração. Marque cada
              item depois de o verificar efetivamente.
            </p>

            <div className="mt-7 rounded-3xl bg-[#f0fdf4] p-6">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-green-800">
                    Verificações concluídas
                  </p>
                  <p className="mt-2 text-3xl font-extrabold text-green-900">
                    {totalFeito} de {verificacoes.length}
                  </p>
                </div>
                <p className="text-2xl font-extrabold text-green-700">
                  {progresso}%
                </p>
              </div>
              <div
                className="mt-5 h-3 overflow-hidden rounded-full bg-green-100"
                role="progressbar"
                aria-label="Progresso da lista de verificação"
                aria-valuenow={progresso}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="h-full rounded-full bg-green-600 transition-all duration-300"
                  style={{ width: `${progresso}%` }}
                />
              </div>
              <button
                type="button"
                onClick={() =>
                  setVerificacoesFeitas(verificacoes.map(() => false))
                }
                className="mt-5 text-sm font-bold text-green-800 underline decoration-green-300 underline-offset-4 hover:text-green-950"
              >
                Reiniciar lista
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-[#e2e8e3] bg-[#f8faf8] p-5 sm:p-8">
            <div className="space-y-3">
              {verificacoes.map((item, index) => (
                <label
                  key={item}
                  className={`flex cursor-pointer items-start gap-4 rounded-2xl border p-4 transition ${
                    verificacoesFeitas[index]
                      ? "border-green-200 bg-green-50"
                      : "border-slate-200 bg-white hover:border-green-300"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={verificacoesFeitas[index]}
                    onChange={(event) =>
                      setVerificacoesFeitas((anterior) =>
                        anterior.map((valor, i) =>
                          i === index ? event.target.checked : valor,
                        ),
                      )
                    }
                    className="mt-1 h-5 w-5 shrink-0 accent-green-700"
                  />
                  <span
                    className={`leading-6 ${
                      verificacoesFeitas[index]
                        ? "font-medium text-green-900"
                        : "text-slate-700"
                    }`}
                  >
                    {item}
                  </span>
                </label>
              ))}
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              Esta lista é um apoio à rotina de maneio e não substitui a
              avaliação clínica nem um plano sanitário elaborado por um
              profissional veterinário.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
        <div className="rounded-3xl bg-gradient-to-r from-[#123d27] to-[#166534] p-7 text-white shadow-lg sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-200">
            Atenção sanitária
          </p>
          <h2 className="mt-3 max-w-3xl text-2xl font-extrabold sm:text-3xl">
            Perante mortalidade inesperada ou vários animais doentes, procure
            assistência veterinária rapidamente.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-green-50">
            Evite movimentar aves doentes e não administre medicamentos sem
            orientação profissional. Registe o que observou e siga as
            recomendações dos serviços veterinários competentes.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
          <h2 className="text-lg font-extrabold">Créditos das fotografias</h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600">
            As fotografias são obtidas através do Wikimedia Commons. Consulte a
            página de cada ficheiro para confirmar o autor, a licença e as
            condições de atribuição antes de publicar o site. A licença pode
            variar entre fotografias.
          </p>
          <a
            href="https://commons.wikimedia.org/wiki/Category:Coturnix_japonica_(captive)"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex font-bold text-green-800 underline decoration-green-300 underline-offset-4 hover:text-green-950"
          >
            Consultar fotografias de codornizes no Wikimedia Commons
          </a>
          <p className="mt-5 text-xs leading-6 text-slate-500">
            Conteúdo informativo da AGROINOVA ANGOLA. As recomendações devem
            ser adaptadas ao sistema de criação e às orientações veterinárias
            aplicáveis em Angola.
          </p>
        </div>
      </section>

      {secaoAtiva && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
          onClick={() => setSecaoAtiva(null)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-modal-sanidade"
            onClick={(event) => event.stopPropagation()}
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
          >
            <div className="relative h-56 bg-green-50 sm:h-72">
              <img
                src={secaoAtiva.imagem}
                alt={secaoAtiva.alt}
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                type="button"
                onClick={() => setSecaoAtiva(null)}
                aria-label="Fechar orientação"
                className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-bold text-slate-800 shadow-lg transition hover:bg-green-50"
              >
                ×
              </button>
              <div className="absolute bottom-4 left-4 rounded-xl bg-white px-4 py-2 text-sm font-extrabold text-green-800 shadow">
                Tema {secaoAtiva.numero}
              </div>
            </div>

            <div className="p-6 sm:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-green-700">
                Orientação técnica
              </p>
              <h2
                id="titulo-modal-sanidade"
                className="mt-2 text-2xl font-extrabold sm:text-3xl"
              >
                {secaoAtiva.titulo}
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                {secaoAtiva.resumo}
              </p>

              <div className="mt-7 space-y-4">
                {secaoAtiva.conteudo.map((paragrafo, index) => (
                  <div key={`${secaoAtiva.numero}-${index}`} className="flex gap-3">
                    <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-extrabold text-green-800">
                      {index + 1}
                    </span>
                    <p className="leading-7 text-slate-700">{paragrafo}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-green-100 bg-green-50 p-4">
                <p className="text-sm leading-6 text-green-950">
                  <strong>Nota:</strong> estas orientações são informativas.
                  Perante suspeita de doença, procure um médico veterinário ou
                  os serviços veterinários competentes.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSecaoAtiva(null)}
                className="mt-7 w-full rounded-xl bg-green-700 px-5 py-3 font-bold text-white transition hover:bg-green-800 sm:w-auto"
              >
                Fechar orientação
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}