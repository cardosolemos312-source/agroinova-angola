
"use client";

import { useState } from "react";
import Link from "next/link";

const imagemHero =
  "https://commons.wikimedia.org/wiki/Special:FilePath/Water_buffalo.jpg";

const orientacoes = [
  {
    numero: "01",
    titulo: "Adaptação",
    resumo:
      "Clima, temperatura, sombra, disponibilidade de água e avaliação das regiões angolanas com potencial para a criação.",
    slug: "adaptacao",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Water_buffalo.jpg",
    alt: "Búfalo de água em ambiente de criação",
  },
  {
    numero: "02",
    titulo: "Alimentação",
    resumo:
      "Pastagens, forragens, suplementação mineral, condição corporal e planeamento alimentar durante o cacimbo.",
    slug: "alimentacao",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Water_buffalo_grazing.jpg",
    alt: "Búfalos de água a pastar",
  },
  {
    numero: "03",
    titulo: "Água",
    resumo:
      "Abeberamento, qualidade da água, higiene dos bebedouros e medidas de arrefecimento em períodos quentes.",
    slug: "agua",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Water_buffalo_in_water.jpg",
    alt: "Búfalo de água numa área aquática",
  },
  {
    numero: "04",
    titulo: "Sanidade",
    resumo:
      "Prevenção de doenças, quarentena, controlo de parasitas, vacinação conforme orientação veterinária e biossegurança.",
    slug: "sanidade",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Water_buffalo_calf.jpg",
    alt: "Búfalo jovem acompanhado no efetivo",
  },
  {
    numero: "05",
    titulo: "Reprodução",
    resumo:
      "Seleção de reprodutores, controlo dos acasalamentos, gestação, parto e cuidados com os vitelos.",
    slug: "reproducao",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Water_buffalo_cow_and_calf.jpg",
    alt: "Búfala com a sua cria",
  },
  {
    numero: "06",
    titulo: "Instalações",
    resumo:
      "Abrigos, cercas resistentes, corredores de maneio, pisos seguros, drenagem e áreas de contenção.",
    slug: "instalacoes",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Water_buffalo_herd.jpg",
    alt: "Grupo de búfalos de água",
  },
  {
    numero: "07",
    titulo: "Bem-estar",
    resumo:
      "Conforto térmico, comportamento, descanso, maneio sem violência, transporte e prevenção do sofrimento.",
    slug: "bem-estar",
    imagem:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Water_buffalo_in_pasture.jpg",
    alt: "Búfalos em ambiente de pastagem",
  },
];

const sistemas = [
  {
    titulo: "Produção de carne",
    descricao:
      "Sistema orientado para o crescimento, a condição corporal, a eficiência alimentar e a obtenção de animais em condições adequadas para o mercado.",
    pontos: [
      "Planeamento da alimentação por fase de crescimento.",
      "Acompanhamento do peso e da condição corporal.",
      "Gestão sanitária e registos de produção.",
    ],
  },
  {
    titulo: "Produção de leite",
    descricao:
      "Sistema que exige animais geneticamente adequados, alimentação equilibrada, higiene da ordenha e capacidade de conservação do leite.",
    pontos: [
      "Seleção de animais com aptidão leiteira.",
      "Água limpa e alimentação de qualidade.",
      "Higiene da ordenha e conservação segura.",
    ],
  },
  {
    titulo: "Reprodução e melhoramento",
    descricao:
      "Organização do efetivo para obter crias saudáveis, controlar os acasalamentos e selecionar animais adaptados às condições da exploração.",
    pontos: [
      "Identificação individual dos animais.",
      "Registo de acasalamentos e partos.",
      "Prevenção da consanguinidade.",
    ],
  },
];

const regioes = [
  {
    nome: "Norte",
    provincias: "Uíge, Zaire e áreas selecionadas do Bengo",
    perfil: "Avaliar água, pastagens, drenagem e riscos sanitários locais.",
  },
  {
    nome: "Nordeste",
    provincias: "Lunda Norte, Lunda Sul e áreas de Malanje",
    perfil: "Avaliar recursos hídricos, forragens e capacidade de suporte.",
  },
  {
    nome: "Planalto Central",
    provincias: "Huambo, Bié e áreas selecionadas do Cuanza Sul",
    perfil: "Avaliar temperaturas sazonais, produção forrageira e abrigo.",
  },
  {
    nome: "Sul e zonas semiáridas",
    provincias: "Cunene, Namibe e áreas mais secas da Huíla",
    perfil: "Exigem análise rigorosa da água, do custo alimentar e do cacimbo.",
  },
];

const boasPraticas = [
  "Confirmar a origem, a identificação e o estado sanitário dos animais antes da aquisição.",
  "Disponibilizar água limpa e sombra adequadas às condições ambientais.",
  "Planear a alimentação para os períodos de menor disponibilidade de pastagem.",
  "Estabelecer acompanhamento veterinário e medidas de biossegurança.",
  "Avaliar o terreno, o acesso aos mercados e a viabilidade económica antes de investir.",
];

export default function BubalinosPage() {
  const [sistemaAtivo, setSistemaAtivo] = useState<number | null>(null);
  const [regiaoAtiva, setRegiaoAtiva] = useState<number | null>(null);

  const finalidade = "Produção de carne";

  function urlOrientacao(slug: string) {
    return `/pecuaria/bubalinos/orientacoes/${slug}?finalidade=${encodeURIComponent(finalidade)}`;
  }

  return (
    <main className="min-h-screen bg-[#f5f7f6] text-[#17221b]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#123c27]">
        <img
          src={imagemHero}
          alt="Búfalos de água numa paisagem de criação"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#102e20]/95 via-[#123c27]/80 to-[#123c27]/35" />

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-green-300">
            AGROINOVA ANGOLA · PECUÁRIA
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">
            Bubalinos
            <span className="mt-2 block text-green-300">
              Conhecimento para uma criação sustentável
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-green-50 sm:text-lg">
            Conheça os princípios da criação de búfalos de água, desde a
            adaptação ao ambiente e o maneio alimentar até à reprodução,
            sanidade, instalações e bem-estar. Explore as condições que
            devem ser avaliadas para o desenvolvimento responsável da
            bubalinocultura em Angola.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#orientacoes"
              className="rounded-xl bg-green-500 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-green-400"
            >
              Explorar orientações
            </a>

            <a
              href="#angola"
              className="rounded-xl border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white/10"
            >
              Potencial em Angola
            </a>
          </div>

          <div className="mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
            {[
              {
                titulo: "Ambiente",
                texto: "Clima, água e pastagens",
              },
              {
                titulo: "Produção",
                texto: "Carne, leite e reprodução",
              },
              {
                titulo: "Gestão",
                texto: "Sanidade e bem-estar",
              },
            ].map((item) => (
              <div
                key={item.titulo}
                className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm"
              >
                <p className="text-lg font-bold text-white">{item.titulo}</p>
                <p className="mt-2 text-sm leading-6 text-green-100">
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APRESENTAÇÃO */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Conhecer a espécie
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
              O que são os bubalinos?
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Os bubalinos pertencem à espécie{" "}
              <em>Bubalus bubalis</em>, conhecida como búfalo de água.
              São animais domésticos criados em diferentes regiões do mundo,
              sobretudo em sistemas que exploram a sua aptidão produtiva e
              a capacidade de aproveitar recursos forrageiros disponíveis.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              A sua criação exige planeamento. Embora estejam associados a
              ambientes quentes, precisam de água para beber, alimentação
              adequada, sombra e condições que permitam controlar o stress
              térmico. A disponibilidade de água e de pastagem, por si só,
              não garante a viabilidade de uma exploração.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Em Angola, qualquer iniciativa deve começar pela verificação
              da presença de animais, das condições ecológicas locais, dos
              serviços veterinários, da origem dos reprodutores e das
              oportunidades de mercado. Não se deve confundir potencial
              ambiental com distribuição comprovada da espécie.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
            <img
              src="https://commons.wikimedia.org/wiki/Special:FilePath/Water_buffalo_herd.jpg"
              alt="Grupo de búfalos de água"
              loading="lazy"
              className="h-72 w-full object-cover sm:h-96"
            />
            <div className="p-6 sm:p-8">
              <h3 className="text-xl font-extrabold">
                Uma exploração começa com um diagnóstico
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Identificar os recursos disponíveis, conhecer os riscos
                sanitários e calcular os custos permite decidir se a criação
                é adequada à realidade de cada produtor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINALIDADES */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Sistemas de produção
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Principais finalidades da criação
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              A finalidade produtiva determina a escolha dos animais, o
              investimento em instalações, a alimentação, os registos e os
              indicadores utilizados para avaliar os resultados.
            </p>
          </div>

          <div className="mt-9 grid gap-6 lg:grid-cols-3">
            {sistemas.map((sistema, index) => (
              <article
                key={sistema.titulo}
                className="rounded-3xl border border-slate-200 bg-[#f8faf8] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-lg font-extrabold text-green-900">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-xl font-extrabold">
                  {sistema.titulo}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {sistema.descricao}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    setSistemaAtivo(sistemaAtivo === index ? null : index)
                  }
                  aria-expanded={sistemaAtivo === index}
                  className="mt-5 font-bold text-green-800 hover:text-green-600"
                >
                  {sistemaAtivo === index
                    ? "Ocultar detalhes −"
                    : "Consultar detalhes +"}
                </button>

                {sistemaAtivo === index && (
                  <ul className="mt-4 space-y-3 border-t border-slate-200 pt-4">
                    {sistema.pontos.map((ponto) => (
                      <li
                        key={ponto}
                        className="flex gap-3 text-sm leading-6 text-slate-600"
                      >
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green-600" />
                        {ponto}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ORIENTAÇÕES TÉCNICAS */}
      <section id="orientacoes" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-green-700">
            Biblioteca técnica
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Principais temas técnicos
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            Cada área conduz a uma página específica, com orientações
            progressivamente desenvolvidas para apoiar produtores, técnicos,
            estudantes e investigadores.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {orientacoes.map((tema) => (
            <article
              key={tema.slug}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden bg-green-100">
                <img
                  src={tema.imagem}
                  alt={tema.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-xl bg-white/95 px-3 py-2 text-sm font-extrabold text-green-900 shadow">
                  {tema.numero}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-extrabold">{tema.titulo}</h3>
                <p className="mt-3 min-h-20 leading-7 text-slate-600">
                  {tema.resumo}
                </p>

                <Link
                  href={urlOrientacao(tema.slug)}
                  className="mt-5 flex items-center justify-between rounded-xl bg-green-50 px-4 py-3 font-bold text-green-900 transition hover:bg-green-100"
                >
                  Consultar orientação
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* POTENCIAL EM ANGOLA */}
      <section id="angola" className="bg-[#eaf4ec] py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-green-800">
              Enquadramento territorial
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Onde avaliar o potencial de criação em Angola?
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              As regiões abaixo são referências para investigação preliminar
              das condições ambientais. Não constituem um mapa de distribuição
              dos bubalinos existentes nem uma classificação definitiva da
              aptidão pecuária. A análise deve ser feita à escala da exploração
              e, sempre que possível, do município.
            </p>
          </div>

          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {regioes.map((regiao, index) => (
              <article
                key={regiao.nome}
                className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm sm:p-7"
              >
                <p className="text-sm font-bold uppercase tracking-widest text-green-700">
                  Zona de avaliação 0{index + 1}
                </p>

                <h3 className="mt-3 text-2xl font-extrabold">
                  {regiao.nome}
                </h3>

                <p className="mt-3 font-semibold leading-7 text-green-900">
                  {regiao.provincias}
                </p>

                <button
                  type="button"
                  aria-expanded={regiaoAtiva === index}
                  onClick={() =>
                    setRegiaoAtiva(regiaoAtiva === index ? null : index)
                  }
                  className="mt-5 font-bold text-green-800 hover:text-green-600"
                >
                  {regiaoAtiva === index
                    ? "Fechar análise −"
                    : "Analisar condições +"}
                </button>

                {regiaoAtiva === index && (
                  <p className="mt-4 rounded-2xl bg-green-50 p-4 leading-7 text-slate-700">
                    {regiao.perfil}
                  </p>
                )}
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
            <h3 className="font-extrabold text-amber-950">
              Nota sobre a distribuição dos animais
            </h3>
            <p className="mt-2 leading-7 text-amber-900">
              Para afirmar quais províncias têm maior número de bubalinos,
              é necessário consultar estatísticas pecuárias oficiais ou
              levantamentos de campo identificáveis. A presença de rios,
              pastagens ou clima húmido não demonstra, por si só, que existam
              efetivos bubalinos nessas zonas.
            </p>
          </div>
        </div>
      </section>

      {/* BOAS PRÁTICAS */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Planeamento da exploração
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Antes de adquirir os primeiros animais
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              A instalação de um efetivo bubalino deve ser precedida de
              planeamento técnico e económico. A disponibilidade de animais
              para aquisição, a legalidade da sua movimentação, a sanidade,
              a alimentação e o acesso ao mercado precisam de ser avaliados
              antes de assumir compromissos financeiros.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-extrabold">
              Lista de verificação do produtor
            </h3>

            <ul className="mt-6 space-y-4">
              {boasPraticas.map((pratica) => (
                <li
                  key={pratica}
                  className="flex gap-3 leading-7 text-slate-700"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-800">
                    ✓
                  </span>
                  <span>{pratica}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="bg-[#123c27] px-5 py-12 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-green-300">
            Investigação e conhecimento
          </p>

          <h2 className="mt-3 text-3xl font-extrabold">
            Aprofundar o conhecimento técnico
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-green-50">
            A consulta de fontes científicas e oficiais é fundamental para
            desenvolver recomendações adaptadas às condições de Angola.
            Os dados climáticos devem ser analisados em conjunto com a
            disponibilidade de água, as pastagens e a situação sanitária.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href="https://www.fao.org/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white px-5 py-3 font-bold text-green-900 hover:bg-green-100"
            >
              Organização das Nações Unidas para a Alimentação e Agricultura
            </a>

            <a
              href="https://agroclima.inamet.gov.ao/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/40 px-5 py-3 font-bold text-white hover:bg-white/10"
            >
              Consultar dados agroclimáticos
            </a>
          </div>

          <p className="mt-7 text-sm leading-6 text-green-100/80">
            As fotografias externas devem ser verificadas quanto à espécie,
            origem e licença antes da publicação definitiva. Não são
            apresentadas como fotografias de explorações angolanas.
          </p>

          <Link
            href="/pecuaria"
            className="mt-8 inline-flex rounded-xl bg-green-500 px-6 py-3 font-bold text-white transition hover:bg-green-400"
          >
            Voltar à pecuária
          </Link>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-[#f5f7f6] px-5 py-6 text-center text-sm leading-6 text-slate-500">
        AGROINOVA ANGOLA
        <br />
        Conhecimento, Tecnologia e Inovação ao Serviço do Campo Angolano.
      </footer>
    </main>
  );
}
