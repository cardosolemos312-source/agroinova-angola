"use client";

import { useState } from "react";
import Link from "next/link";

const imagemBubalinos =
  "https://static.wixstatic.com/media/4ea452_459cb4dacd584234bf50f75b8c1e97ea~mv2.jpg/v1/fill/w_980%2Ch_653%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/16.jpg";

const imagemForragem =
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85";

const imagemPastagem =
  "https://commons.wikimedia.org/wiki/Special:FilePath/Water_buffalo.jpg";

const temas = [
  {
    numero: "01",
    titulo: "Pastagens e vegetação disponível",
    resumo:
      "A base da alimentação deve ser definida a partir da vegetação realmente disponível e da sua qualidade.",
    conteudo: [
      "Avaliar a disponibilidade de ervas, gramíneas e outras plantas forrageiras na área de criação.",
      "Evitar que os animais dependam continuamente de parcelas degradadas ou com pouca cobertura vegetal.",
      "Organizar a utilização dos pastos para permitir a recuperação da vegetação.",
      "Identificar plantas tóxicas, áreas contaminadas e locais com risco de ingestão de resíduos.",
    ],
    cuidado:
      "A aparência verde de uma pastagem não garante, por si só, que esta forneça todos os nutrientes necessários.",
  },
  {
    numero: "02",
    titulo: "Forragens conservadas",
    resumo:
      "O feno e outras forragens conservadas podem ajudar a enfrentar períodos de escassez de pasto.",
    conteudo: [
      "Produzir ou adquirir feno de qualidade sempre que existam condições adequadas para a conservação.",
      "Guardar a forragem num espaço protegido da chuva, da humidade excessiva e do contacto direto com o solo.",
      "Inspecionar o material antes da distribuição, rejeitando forragens com bolor, cheiro anormal ou sinais de deterioração.",
      "Calcular as reservas com base no número de animais, no período previsto de escassez e nas perdas de armazenamento.",
    ],
    cuidado:
      "Não oferecer forragem deteriorada ou com bolor: a contaminação pode comprometer a saúde dos animais.",
  },
  {
    numero: "03",
    titulo: "Suplementação energética e proteica",
    resumo:
      "A suplementação pode ser necessária quando a pastagem não satisfaz as necessidades dos animais.",
    conteudo: [
      "Avaliar primeiro a qualidade da pastagem, a condição corporal e a fase produtiva dos animais.",
      "Considerar alimentos disponíveis localmente, como subprodutos agrícolas, apenas depois de verificar a sua composição, conservação e segurança.",
      "Introduzir mudanças alimentares de forma gradual para reduzir o risco de perturbações digestivas.",
      "Solicitar apoio técnico para determinar os alimentos, as quantidades e a frequência de fornecimento.",
    ],
    cuidado:
      "Não existe uma única ração adequada para todos os bubalinos. A formulação depende da idade, do peso, da finalidade produtiva e dos alimentos disponíveis.",
  },
  {
    numero: "04",
    titulo: "Minerais e sal mineralizado",
    resumo:
      "Os minerais participam no crescimento, na manutenção dos tecidos e no funcionamento do organismo.",
    conteudo: [
      "Avaliar a necessidade de suplementação mineral em função da dieta e, quando possível, da análise dos alimentos e da água.",
      "Utilizar um produto formulado para a espécie e para o objetivo produtivo, seguindo a orientação técnica.",
      "Manter o suplemento protegido da chuva e da contaminação.",
      "Controlar o consumo e impedir o acesso de animais a misturas minerais inadequadas.",
    ],
    cuidado:
      "Não misturar minerais ou administrar doses elevadas por iniciativa própria. O excesso de determinados elementos também pode causar intoxicação.",
  },
  {
    numero: "05",
    titulo: "Alimentação durante o cacimbo",
    resumo:
      "A estação seca pode reduzir a quantidade e a qualidade da pastagem, exigindo preparação antecipada.",
    conteudo: [
      "Inspecionar os pastos antes do período de maior escassez e estimar as reservas disponíveis.",
      "Preparar feno ou outras forragens seguras quando as condições locais permitirem.",
      "Dar atenção especial aos animais jovens, às fêmeas em gestação e aos animais debilitados.",
      "Ajustar o número de animais à capacidade alimentar da exploração e procurar apoio técnico quando as reservas forem insuficientes.",
    ],
    cuidado:
      "Não esperar que os animais percam peso para começar a preparar a alimentação da estação seca.",
  },
  {
    numero: "06",
    titulo: "Água e acesso aos alimentos",
    resumo:
      "Uma alimentação adequada depende também de água limpa e de condições que permitam aos animais comer sem competição excessiva.",
    conteudo: [
      "Disponibilizar água limpa em quantidade suficiente, com acesso adequado ao longo do dia.",
      "Limpar regularmente bebedouros e recipientes de alimentação.",
      "Evitar que lama, fezes ou águas estagnadas contaminem os alimentos.",
      "Observar se os animais dominantes impedem os mais fracos de chegar ao alimento e à água.",
    ],
    cuidado:
      "A redução do consumo de água pode diminuir a ingestão de alimentos e prejudicar o desempenho dos animais.",
  },
];

const etapas = [
  {
    titulo: "Observar",
    descricao:
      "Registar a condição corporal, o comportamento alimentar e eventuais alterações nas fezes.",
  },
  {
    titulo: "Avaliar",
    descricao:
      "Verificar a quantidade e a qualidade das pastagens, das forragens, dos suplementos e da água.",
  },
  {
    titulo: "Planear",
    descricao:
      "Definir as reservas alimentares e o plano de suplementação com apoio técnico quando necessário.",
  },
  {
    titulo: "Acompanhar",
    descricao:
      "Registar o consumo, a evolução corporal e a resposta dos animais às alterações da dieta.",
  },
];

export default function AlimentacaoBubalinosPage() {
  const [aberto, setAberto] = useState<number | null>(0);
  const [concluidos, setConcluidos] = useState<string[]>([]);

  function alternarTarefa(tarefa: string) {
    setConcluidos((atuais) =>
      atuais.includes(tarefa)
        ? atuais.filter((item) => item !== tarefa)
        : [...atuais, tarefa],
    );
  }

  const verificacoes = [
    "Pastagens avaliadas",
    "Reserva de forragem verificada",
    "Água limpa disponível",
    "Suplementos inspecionados",
    "Condição corporal observada",
    "Plano para o cacimbo preparado",
  ];

  return (
    <main className="min-h-screen bg-[#f5f7f6] text-[#17221b]">
      <section className="relative isolate min-h-[470px] overflow-hidden bg-[#102b1b]">
        <img
          src={imagemBubalinos}
          alt="Bubalinos numa área de pastagem, imagem ilustrativa de uma exploração"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#102b1b]/95 via-[#102b1b]/75 to-[#102b1b]/20" />

        <div className="relative mx-auto flex min-h-[470px] max-w-7xl items-center px-5 py-16 sm:px-8 lg:px-12">
          <div className="max-w-3xl text-white">
            <Link
              href="/pecuaria/bubalinos"
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
            >
              <span aria-hidden="true">←</span>
              Voltar aos bubalinos
            </Link>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-green-300">
              AGROINOVA ANGOLA · PECUÁRIA
            </p>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Alimentação dos Bubalinos
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
              Pastagens, forragens, suplementação e gestão das reservas
              alimentares para apoiar a saúde, o crescimento e o desempenho
              produtivo dos búfalos de água.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#principios"
                className="rounded-xl bg-green-500 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-green-400"
              >
                Explorar orientações
              </a>

              <a
                href="#verificacao"
                className="rounded-xl border border-white/40 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white/20"
              >
                Lista de verificação
              </a>
            </div>

            <p className="mt-5 max-w-xl text-xs leading-5 text-white/70">
              A fotografia de destaque é ilustrativa e não confirma a
              localização da exploração em Angola.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-10 sm:px-8 md:grid-cols-3 lg:px-12">
        {[
          {
            titulo: "Nutrição equilibrada",
            texto:
              "A dieta deve fornecer energia, proteína, fibra, minerais e água adequados às necessidades dos animais.",
            numero: "01",
          },
          {
            titulo: "Gestão das reservas",
            texto:
              "A preparação para os períodos de escassez começa antes de diminuir a disponibilidade de pastagem.",
            numero: "02",
          },
          {
            titulo: "Acompanhamento contínuo",
            texto:
              "O consumo, a condição corporal e o comportamento ajudam a identificar problemas alimentares.",
            numero: "03",
          },
        ].map((item) => (
          <article
            key={item.numero}
            className="rounded-2xl border border-[#e2e8e0] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-lg font-extrabold text-green-800">
              {item.numero}
            </span>
            <h2 className="mt-5 text-xl font-bold text-[#14532d]">
              {item.titulo}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {item.texto}
            </p>
          </article>
        ))}
      </section>

      <section
        id="principios"
        className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12"
      >
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-green-700">
            Orientações técnicas
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#14532d] sm:text-4xl">
            Os seis pilares da alimentação
          </h2>
          <p className="mt-4 leading-8 text-slate-600">
            Uma alimentação bem gerida não depende apenas da quantidade de
            alimento fornecido. Exige conhecer a qualidade dos recursos
            disponíveis, as necessidades do efetivo e as mudanças sazonais.
            Selecione cada tema para consultar as recomendações.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {temas.map((tema, indice) => (
            <article
              key={tema.numero}
              className="overflow-hidden rounded-2xl border border-[#dfe8df] bg-white shadow-sm"
            >
              <button
                type="button"
                onClick={() =>
                  setAberto(aberto === indice ? null : indice)
                }
                aria-expanded={aberto === indice}
                className="flex w-full items-center gap-4 p-5 text-left transition hover:bg-green-50 sm:p-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#166534] text-sm font-extrabold text-white">
                  {tema.numero}
                </span>

                <span className="flex-1">
                  <span className="block text-lg font-bold text-[#14532d]">
                    {tema.titulo}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-slate-600">
                    {tema.resumo}
                  </span>
                </span>

                <span className="text-2xl font-light text-green-800">
                  {aberto === indice ? "−" : "+"}
                </span>
              </button>

              {aberto === indice && (
                <div className="border-t border-green-100 px-5 pb-6 pt-5 sm:px-6">
                  <ul className="space-y-3">
                    {tema.conteudo.map((linha) => (
                      <li
                        key={linha}
                        className="flex gap-3 text-sm leading-7 text-slate-700"
                      >
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green-600" />
                        <span>{linha}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4">
                    <p className="text-sm font-bold text-amber-900">
                      Ponto de atenção
                    </p>
                    <p className="mt-1 text-sm leading-6 text-amber-900/90">
                      {tema.cuidado}
                    </p>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={imagemForragem}
              alt="Paisagem agrícola com vegetação e área de cultivo, imagem ilustrativa para gestão de forragens"
              loading="lazy"
              className="h-[300px] w-full object-cover sm:h-[380px]"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Planeamento alimentar
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#14532d]">
              Preparar o efetivo para a estação seca
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Em Angola, a disponibilidade de pastagem varia com a região e a
              estação do ano. Por isso, o produtor deve avaliar os recursos
              da exploração e preparar reservas antes dos períodos de maior
              escassez.
            </p>

            <div className="mt-6 space-y-4">
              {etapas.map((etapa, indice) => (
                <div key={etapa.titulo} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-800">
                    {indice + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-[#17221b]">
                      {etapa.titulo}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {etapa.descricao}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl bg-[#14532d] p-7 text-white sm:p-9">
            <p className="text-sm font-bold uppercase tracking-widest text-green-200">
              Aplicação prática
            </p>
            <h2 className="mt-3 text-3xl font-extrabold">
              Registar antes de decidir
            </h2>
            <p className="mt-4 leading-8 text-white/85">
              O registo regular permite detetar falhas de alimentação,
              acompanhar a condição dos animais e planear as compras ou a
              produção de forragem.
            </p>

            <div className="mt-7 rounded-2xl border border-white/20 bg-white/10 p-5">
              <p className="font-bold">Regra de gestão</p>
              <p className="mt-2 text-sm leading-7 text-white/85">
                Não alterar bruscamente a dieta nem utilizar suplementos sem
                confirmar a sua adequação e segurança.
              </p>
            </div>
          </div>

          <div
            id="verificacao"
            className="rounded-3xl border border-[#dfe8df] bg-white p-6 shadow-sm sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-green-700">
                  Lista de verificação
                </p>
                <h2 className="mt-2 text-2xl font-extrabold text-[#14532d]">
                  Rotina alimentar
                </h2>
              </div>
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-800">
                {concluidos.length}/{verificacoes.length}
              </span>
            </div>

            <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-green-600 transition-all duration-300"
                style={{
                  width: `${(concluidos.length / verificacoes.length) * 100}%`,
                }}
              />
            </div>

            <div className="mt-6 space-y-3">
              {verificacoes.map((tarefa) => {
                const selecionado = concluidos.includes(tarefa);

                return (
                  <label
                    key={tarefa}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${
                      selecionado
                        ? "border-green-300 bg-green-50"
                        : "border-slate-200 hover:border-green-300"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selecionado}
                      onChange={() => alternarTarefa(tarefa)}
                      className="h-5 w-5 accent-green-700"
                    />
                    <span
                      className={`text-sm font-medium ${
                        selecionado
                          ? "text-green-900"
                          : "text-slate-700"
                      }`}
                    >
                      {tarefa}
                    </span>
                  </label>
                );
              })}
            </div>

            <p className="mt-5 text-xs leading-5 text-slate-500">
              Esta lista serve como apoio à rotina de trabalho. As marcações
              são temporárias e não substituem um registo técnico da
              exploração.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#eaf4eb] py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <h2 className="text-2xl font-extrabold text-[#14532d]">
            Fontes e aprofundamento técnico
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            As recomendações devem ser adaptadas à realidade de cada
            exploração, com base na avaliação dos alimentos e no
            acompanhamento veterinário e zootécnico.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <a
              href="https://www.fao.org/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-green-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="font-bold text-[#14532d]">
                FAO — Organização das Nações Unidas para a Alimentação e a Agricultura
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Recursos sobre alimentação animal, pastagens e sistemas
                agropecuários.
              </p>
              <span className="mt-4 inline-block text-sm font-bold text-green-700">
                Consultar fonte ↗
              </span>
            </a>

            <a
              href="https://www.woah.org/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-green-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="font-bold text-[#14532d]">
                WOAH — Organização Mundial de Saúde Animal
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Referências internacionais sobre saúde e bem-estar dos
                animais.
              </p>
              <span className="mt-4 inline-block text-sm font-bold text-green-700">
                Consultar fonte ↗
              </span>
            </a>

            <a
              href="https://governo.gov.ao/angola/clima"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-green-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="font-bold text-[#14532d]">
                Governo de Angola — Clima
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Informação de contexto para o planeamento agrícola e a
                preparação sazonal.
              </p>
              <span className="mt-4 inline-block text-sm font-bold text-green-700">
                Consultar fonte ↗
              </span>
            </a>
          </div>

          <p className="mt-6 text-xs leading-6 text-slate-500">
            Nota técnica: esta página apresenta princípios gerais de
            alimentação de bubalinos. Não substitui a análise laboratorial
            dos alimentos, a formulação de uma dieta nem a avaliação de um
            médico veterinário ou técnico de produção animal.
          </p>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-5 py-6">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-sm text-slate-500">
            AGROINOVA ANGOLA — Conhecimento, Tecnologia e Inovação ao Serviço
            do Campo Angolano.
          </p>
          <Link
            href="/pecuaria/bubalinos"
            className="font-bold text-green-800 transition hover:text-green-600"
          >
            Voltar à página dos bubalinos →
          </Link>
        </div>
      </footer>
    </main>
  );
}