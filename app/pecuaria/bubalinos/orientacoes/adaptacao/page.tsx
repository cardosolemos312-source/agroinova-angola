
"use client";

import { useState } from "react";
import Link from "next/link";

const fotoBubalinos =
  "https://static.wixstatic.com/media/4ea452_459cb4dacd584234bf50f75b8c1e97ea~mv2.jpg/v1/fill/w_980%2Ch_653%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/16.jpg";

const regioes = [
  {
    numero: "01",
    nome: "Norte húmido",
    provincias: "Uíge, Zaire, Cabinda e áreas do Bengo",
    perfil: "Clima geralmente mais húmido, com diferenças locais de chuva, drenagem e disponibilidade de água.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Angola_landscape.jpg",
    vantagens: [
      "Investigar a disponibilidade de pastagem durante a época chuvosa.",
      "Identificar fontes de água seguras e permanentes.",
      "Avaliar terrenos com sombra e boa drenagem.",
    ],
    riscos: [
      "Lama persistente e instalações húmidas.",
      "Parasitas e doenças associados às condições locais.",
      "Inundações em zonas baixas e próximas de cursos de água.",
    ],
    decisao:
      "Pode merecer avaliação onde existam água, alimento, drenagem e assistência veterinária. A chuva elevada, por si só, não demonstra aptidão para bubalinos.",
  },
  {
    numero: "02",
    nome: "Nordeste",
    provincias: "Lunda Norte, Lunda Sul e áreas de Malanje",
    perfil: "A disponibilidade de vegetação e água varia com a localização, o relevo e a estação do ano.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Angola_landscape.jpg",
    vantagens: [
      "Mapear pastagens e fontes de água ao longo do ano.",
      "Estudar a produção local de forragens.",
      "Identificar terrenos acessíveis para maneio e vigilância.",
    ],
    riscos: [
      "Variação sazonal dos recursos forrageiros.",
      "Dificuldades de acesso a assistência veterinária em zonas remotas.",
      "Necessidade de confirmar a qualidade e a disponibilidade da água.",
    ],
    decisao:
      "A viabilidade deve ser confirmada através de visitas à exploração, avaliação das pastagens e levantamento dos recursos disponíveis.",
  },
  {
    numero: "03",
    nome: "Planalto Central",
    provincias: "Huambo, Bié e áreas de altitude do Cuanza Sul",
    perfil: "A altitude influencia a temperatura e as condições de produção forrageira, sobretudo durante o cacimbo.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Angola_landscape.jpg",
    vantagens: [
      "Avaliar a possibilidade de produzir forragens cultivadas.",
      "Estudar a disponibilidade de água na estação seca.",
      "Planear abrigos e alimentação para os períodos mais frios.",
    ],
    riscos: [
      "Temperaturas noturnas baixas em determinadas zonas.",
      "Redução sazonal da disponibilidade de pastagem.",
      "Custos de conservação e transporte de alimentos.",
    ],
    decisao:
      "É indispensável avaliar as condições da exploração durante a época chuvosa e o cacimbo antes de decidir introduzir bubalinos.",
  },
  {
    numero: "04",
    nome: "Sul semiárido",
    provincias: "Cunene, Namibe e áreas mais secas da Huíla",
    perfil: "A escassez e a irregularidade da chuva tornam a água e o planeamento alimentar fatores decisivos.",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Angola_landscape.jpg",
    vantagens: [
      "Avaliar sistemas de alimentação suplementar planeada.",
      "Identificar recursos hídricos fiáveis antes da instalação.",
      "Estudar a capacidade de suporte das pastagens locais.",
    ],
    riscos: [
      "Escassez de água durante períodos prolongados.",
      "Degradação das pastagens por excesso de animais.",
      "Custos elevados de suplementação e transporte de água.",
    ],
    decisao:
      "A criação só deve ser considerada depois de demonstrada a disponibilidade de água e alimento durante o pior período da estação seca.",
  },
];

const fatores = [
  {
    titulo: "Temperatura e stress térmico",
    resumo:
      "O calor intenso pode comprometer o conforto, a ingestão alimentar e o desempenho.",
    detalhe:
      "Os bubalinos de água têm limitações na dissipação do calor e podem beneficiar de sombra, ventilação e acesso adequado à água. Deve observar-se a respiração, a procura persistente de sombra, a redução do apetite e outras alterações de comportamento. As necessidades variam com o animal e as condições ambientais.",
  },
  {
    titulo: "Disponibilidade de água",
    resumo:
      "A água deve estar disponível de forma regular, limpa e segura.",
    detalhe:
      "A exploração precisa de uma fonte fiável durante todo o ano. É necessário avaliar caudal, armazenamento, qualidade, distância aos animais e custos de abastecimento. Uma fonte que seca durante o cacimbo não constitui garantia de viabilidade.",
  },
  {
    titulo: "Pastagens e recursos alimentares",
    resumo:
      "A capacidade de suporte deve ser compatível com o efetivo planeado.",
    detalhe:
      "É necessário identificar as espécies forrageiras presentes, estimar a quantidade utilizável e verificar a recuperação da pastagem. A alimentação deve ser planeada para a época seca, sem depender exclusivamente do crescimento natural da erva.",
  },
  {
    titulo: "Solo e drenagem",
    resumo:
      "Terrenos seguros reduzem problemas de locomoção e de higiene.",
    detalhe:
      "Evitar áreas permanentemente alagadas, pisos escorregadios e zonas com acumulação de resíduos. A proximidade da água não justifica permitir contaminação de rios, lagoas ou poços por dejetos dos animais.",
  },
  {
    titulo: "Sanidade e biossegurança",
    resumo:
      "A adaptação também depende do controlo dos riscos sanitários locais.",
    detalhe:
      "Antes da aquisição, solicitar avaliação veterinária, verificar a origem dos animais, organizar a quarentena e estabelecer um plano sanitário adaptado à região. Não se devem introduzir animais sem avaliar os requisitos legais e sanitários de movimentação.",
  },
  {
    titulo: "Altitude e cacimbo",
    resumo:
      "A estação seca pode trazer menor disponibilidade de alimento e noites frias.",
    detalhe:
      "Nas zonas de altitude, avaliar a variação diária da temperatura, a exposição ao vento e a disponibilidade de abrigo. Preparar reservas alimentares antes da redução das pastagens ajuda a evitar perda de condição corporal.",
  },
];

const checklist = [
  "Existe água segura durante todo o ano?",
  "Há pastagem suficiente e possibilidade de suplementação?",
  "Existem áreas de sombra e abrigo?",
  "O terreno apresenta drenagem e pisos seguros?",
  "Existe assistência veterinária acessível?",
  "Foram estimados os custos para atravessar o cacimbo?",
  "A origem dos animais e os requisitos sanitários foram verificados?",
];

export default function AdaptacaoBubalinosPage() {
  const [fatorAtivo, setFatorAtivo] = useState<number | null>(null);
  const [regiaoAtiva, setRegiaoAtiva] = useState<number | null>(null);
  const [marcados, setMarcados] = useState<string[]>([]);

  function alternarItem(item: string) {
    setMarcados((atuais) =>
      atuais.includes(item)
        ? atuais.filter((valor) => valor !== item)
        : [...atuais, item]
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f7f6] text-[#17221b]">
      <section className="relative isolate overflow-hidden bg-[#123c27]">
        <img
          src={fotoBubalinos}
          alt="Búfalos de água numa pastagem, imagem ilustrativa de uma exploração estrangeira"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#102e20]/95 via-[#123c27]/80 to-[#123c27]/35" />

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <Link
            href="/pecuaria/bubalinos"
            className="inline-flex rounded-full border border-white/40 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            ← Voltar aos bubalinos
          </Link>

          <p className="mt-9 text-sm font-bold uppercase tracking-[0.22em] text-green-300">
            AGROINOVA ANGOLA · ORIENTAÇÃO TÉCNICA
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-6xl">
            Adaptação dos bubalinos
            <span className="mt-2 block text-green-300">
              Clima, água e território angolano
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-green-50 sm:text-lg">
            Conheça as condições ambientais que influenciam a criação de
            búfalos de água, saiba o que avaliar nas diferentes regiões de
            Angola e prepare a exploração para as variações entre a época
            chuvosa e o cacimbo.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#fatores"
              className="rounded-xl bg-green-500 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-green-400"
            >
              Fatores de adaptação
            </a>
            <a
              href="#regioes"
              className="rounded-xl border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white/10"
            >
              Explorar regiões
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-widest text-green-700">
            Introdução técnica
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            A adaptação não depende apenas do clima
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            Os bubalinos, ou búfalos de água, são criados em diferentes
            sistemas tropicais e subtropicais. No entanto, a aptidão de uma
            zona para a sua criação depende de um conjunto de condições:
            temperatura, água, pastagens, solo, instalações, sanidade e
            capacidade de gestão do produtor.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            Em Angola, as diferenças entre o Norte húmido, o Planalto Central
            e o Sul semiárido exigem estratégias distintas. Uma zona com
            muita chuva pode apresentar problemas de drenagem e parasitas;
            uma zona seca pode ter bons espaços de pastagem, mas não dispor
            de água suficiente durante o cacimbo.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            Por isso, a análise deve ser feita à escala da exploração e em
            diferentes épocas do ano. Não existem, nesta página, dados
            suficientes para declarar uma província como a principal área
            de criação de bubalinos em Angola.
          </p>
        </div>
      </section>

      <section id="fatores" className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Condições essenciais
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Seis fatores que determinam a adaptação
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Expanda cada tema para consultar os aspetos técnicos a avaliar
              antes de instalar ou aumentar um efetivo bubalino.
            </p>
          </div>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {fatores.map((fator, index) => (
              <article
                key={fator.titulo}
                className="rounded-3xl border border-slate-200 bg-[#f8faf8] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 font-extrabold text-green-900">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-xl font-bold">{fator.titulo}</h3>
                <p className="mt-3 leading-7 text-slate-600">{fator.resumo}</p>

                <button
                  type="button"
                  aria-expanded={fatorAtivo === index}
                  onClick={() =>
                    setFatorAtivo(fatorAtivo === index ? null : index)
                  }
                  className="mt-5 font-bold text-green-800 hover:text-green-600"
                >
                  {fatorAtivo === index ? "Fechar detalhes −" : "Ler conteúdo técnico +"}
                </button>

                {fatorAtivo === index && (
                  <p className="mt-4 rounded-2xl border border-green-100 bg-white p-4 text-sm leading-7 text-slate-700">
                    {fator.detalhe}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="regioes" className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-widest text-green-700">
            Realidade de Angola
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Regiões e condições ambientais
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            As fotografias abaixo são referências visuais e não comprovam a
            presença de bubalinos nas regiões identificadas. A classificação
            é uma orientação preliminar baseada nas diferenças climáticas
            gerais do país. A decisão final exige observação do local e dados
            climáticos, hídricos e forrageiros.
          </p>
        </div>

        <div className="mt-9 grid gap-6 sm:grid-cols-2">
          {regioes.map((regiao, index) => (
            <article
              key={regiao.numero}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden bg-green-100">
                <img
                  src={regiao.imagem}
                  alt={`Paisagem de referência para estudo ambiental da região ${regiao.nome}, Angola`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-4 top-4 rounded-xl bg-white px-3 py-2 text-sm font-extrabold text-green-900 shadow">
                  Zona 0{index + 1}
                </span>
              </div>

              <div className="p-6 sm:p-7">
                <h3 className="text-2xl font-extrabold">{regiao.nome}</h3>
                <p className="mt-2 font-semibold leading-7 text-green-800">
                  {regiao.provincias}
                </p>
                <p className="mt-4 leading-7 text-slate-600">{regiao.perfil}</p>

                <button
                  type="button"
                  aria-expanded={regiaoAtiva === index}
                  onClick={() =>
                    setRegiaoAtiva(regiaoAtiva === index ? null : index)
                  }
                  className="mt-5 flex w-full items-center justify-between rounded-xl bg-[#123c27] px-5 py-3 font-bold text-white transition hover:bg-green-800"
                >
                  {regiaoAtiva === index ? "Fechar análise" : "Analisar esta região"}
                  <span>{regiaoAtiva === index ? "−" : "+"}</span>
                </button>

                {regiaoAtiva === index && (
                  <div className="mt-4 space-y-5 rounded-2xl bg-[#f7faf7] p-5">
                    <div>
                      <h4 className="font-bold text-green-900">
                        Oportunidades a investigar
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {regiao.vantagens.map((item) => (
                          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green-600" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-amber-900">
                        Riscos e limitações
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {regiao.riscos.map((item) => (
                          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-xl border border-green-100 bg-white p-4">
                      <h4 className="font-bold">Conclusão preliminar</h4>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {regiao.decisao}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#eaf4ec] py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-green-800">
              Planeamento sazonal
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Preparar a exploração para o cacimbo
            </h2>
            <p className="mt-5 leading-8 text-slate-700">
              A redução das chuvas pode diminuir a disponibilidade de
              pastagem e de água. O produtor deve preparar antecipadamente
              as reservas forrageiras, verificar os pontos de abeberamento,
              avaliar a condição corporal dos animais e estimar os custos
              de suplementação.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              O calendário das chuvas varia entre regiões e anos. As decisões
              devem utilizar dados locais e observações da exploração, em
              vez de depender apenas de um calendário geral nacional.
            </p>

            <a
              href="https://agroclima.inamet.gov.ao/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-xl bg-[#123c27] px-5 py-3 font-bold text-white transition hover:bg-green-800"
            >
              Consultar informação agroclimática
            </a>
          </div>

          <div className="rounded-3xl border border-green-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-extrabold">
              Lista de avaliação da exploração
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Marca os pontos já verificados. A lista é um apoio de
              planeamento, não substitui uma avaliação técnica no terreno.
            </p>

            <div className="mt-6 space-y-4">
              {checklist.map((item) => (
                <label key={item} className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={marcados.includes(item)}
                    onChange={() => alternarItem(item)}
                    className="mt-1 h-4 w-4 accent-green-700"
                  />
                  <span
                    className={`text-sm leading-6 ${
                      marcados.includes(item)
                        ? "text-green-900"
                        : "text-slate-700"
                    }`}
                  >
                    {item}
                  </span>
                </label>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-green-50 p-4">
              <p className="font-bold text-green-900">
                {marcados.length} de {checklist.length} pontos verificados
              </p>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-green-100">
                <div
                  className="h-full rounded-full bg-green-600 transition-all"
                  style={{
                    width: `${(marcados.length / checklist.length) * 100}%`,
                  }}
                />
              </div>
              <p className="mt-2 text-xs leading-5 text-slate-600">
                Verifica os pontos restantes antes de decidir sobre a
                instalação ou expansão do efetivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <h2 className="text-2xl font-extrabold sm:text-3xl">
          Fontes para aprofundar o estudo
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <a
            href="https://governo.gov.ao/angola/clima"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-green-300 hover:shadow-md"
          >
            <p className="font-bold text-green-900">
              Governo de Angola — Clima
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Referência geral sobre as estações e as características
              climáticas do país.
            </p>
            <span className="mt-3 inline-block font-semibold text-green-800">
              Consultar fonte →
            </span>
          </a>

          <a
            href="https://link.springer.com/article/10.1007/s41748-025-00872-z"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-green-300 hover:shadow-md"
          >
            <p className="font-bold text-green-900">
              Estudo científico sobre a precipitação em Angola
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Investigação publicada em 2025 sobre a regionalização das
              chuvas e a duração da estação chuvosa.
            </p>
            <span className="mt-3 inline-block font-semibold text-green-800">
              Consultar estudo →
            </span>
          </a>

          <a
            href="https://www.fao.org/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-green-300 hover:shadow-md"
          >
            <p className="font-bold text-green-900">
              FAO — Alimentação e agricultura
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Recursos técnicos para investigação agropecuária e gestão
              sustentável dos sistemas de produção.
            </p>
            <span className="mt-3 inline-block font-semibold text-green-800">
              Consultar fonte →
            </span>
          </a>

          <a
            href="https://www.woah.org/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-green-300 hover:shadow-md"
          >
            <p className="font-bold text-green-900">
              Organização Mundial de Saúde Animal
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Referências internacionais de saúde animal e biossegurança.
            </p>
            <span className="mt-3 inline-block font-semibold text-green-800">
              Consultar fonte →
            </span>
          </a>
        </div>

        <p className="mt-6 text-sm leading-6 text-slate-500">
          Nota sobre imagens: a fotografia principal representa búfalos
          numa exploração estrangeira. As imagens regionais são endereços
          candidatos e devem ser confirmados antes da publicação. Não devem
          ser apresentados como fotografias locais sem confirmação da sua
          origem.
        </p>

        <Link
          href="/pecuaria/bubalinos"
          className="mt-8 inline-flex rounded-xl bg-[#123c27] px-6 py-3 font-bold text-white transition hover:bg-green-800"
        >
          ← Voltar à página dos bubalinos
        </Link>
      </section>

      <footer className="border-t border-slate-200 bg-white px-5 py-6 text-center text-sm leading-6 text-slate-500">
        AGROINOVA ANGOLA
        <br />
        Conhecimento, Tecnologia e Inovação ao Serviço do Campo Angolano.
      </footer>
    </main>
  );
}
