"use client";

import Link from "next/link";
import { useState } from "react";

type Tema = {
  numero: string;
  titulo: string;
  resumo: string;
  imagem: string;
  alt: string;
  conteudo: string[];
  cuidados: string[];
};

const temas: Tema[] = [
  {
    numero: "01",
    titulo: "Cavalariças e baias",
    resumo: "Organização dos espaços de abrigo, repouso e proteção dos equinos.",
    imagem:
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1200&q=85",
    alt: "Cavalo num ambiente rural",
    conteudo: [
      "As cavalariças devem proporcionar proteção contra chuva, vento intenso, calor excessivo e outras condições ambientais adversas. A estrutura deve facilitar a observação diária dos animais e a realização das tarefas de maneio.",
      "As baias devem permitir que o cavalo se levante, se deite e se movimente sem dificuldade. As dimensões dependem do porte do animal, da finalidade da instalação e das recomendações técnicas aplicáveis.",
      "As divisórias, portas e fechos devem ser resistentes e não apresentar arestas, pregos expostos ou espaços onde o animal possa prender os membros.",
    ],
    cuidados: [
      "Inspecionar diariamente portas, fechos e divisórias.",
      "Retirar estrume e material de cama húmido.",
      "Evitar superfícies cortantes e pavimentos escorregadios.",
      "Garantir espaço adequado ao tamanho do animal.",
    ],
  },
  {
    numero: "02",
    titulo: "Ventilação e iluminação",
    resumo: "Circulação de ar, luz natural e conforto dentro das instalações.",
    imagem:
      "https://images.unsplash.com/photo-1534307679932-2e5b1a1f9f8b?auto=format&fit=crop&w=1200&q=85",
    alt: "Cavalo em ambiente de criação",
    conteudo: [
      "Uma boa ventilação ajuda a reduzir a acumulação de humidade, poeiras, odores e gases provenientes da decomposição dos resíduos. O ar deve circular sem criar correntes intensas diretamente sobre os animais.",
      "Sempre que possível, deve privilegiar-se a iluminação natural, mantendo aberturas seguras e protegidas. A iluminação artificial deve permitir a inspeção dos animais, a limpeza e o trabalho dos tratadores.",
      "Em regiões quentes, como várias zonas de Angola, a orientação da construção, a sombra e a cobertura são fatores importantes para reduzir o aquecimento excessivo.",
    ],
    cuidados: [
      "Manter janelas e aberturas desobstruídas.",
      "Evitar ambientes fechados, húmidos e abafados.",
      "Utilizar coberturas que reduzam a entrada de calor.",
      "Verificar se a iluminação permite observar lesões e alterações físicas.",
    ],
  },
  {
    numero: "03",
    titulo: "Pavimentos e camas",
    resumo: "Superfícies seguras, drenagem e materiais para o repouso.",
    imagem:
      "https://images.unsplash.com/photo-1529551739587-e242c564f727?auto=format&fit=crop&w=1200&q=85",
    alt: "Cavalo em área de maneio",
    conteudo: [
      "Os pavimentos devem ser estáveis, resistentes, fáceis de limpar e suficientemente aderentes para reduzir o risco de escorregamento. A drenagem adequada ajuda a impedir a acumulação de água e urina.",
      "O material de cama deve ser seco, confortável, pouco poeirento e não tóxico. A escolha pode incluir materiais apropriados disponíveis localmente, desde que sejam limpos e armazenados corretamente.",
      "A cama suja ou excessivamente húmida deve ser removida com regularidade, porque pode contribuir para problemas de pele, cascos e qualidade do ar.",
    ],
    cuidados: [
      "Corrigir zonas com água acumulada.",
      "Remover diariamente resíduos e cama contaminada.",
      "Evitar materiais com bolor ou poeira excessiva.",
      "Manter o pavimento sem buracos ou saliências perigosas.",
    ],
  },
  {
    numero: "04",
    titulo: "Cercas e pastagens",
    resumo: "Áreas exteriores para movimento, pastoreio e exercício.",
    imagem:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=85",
    alt: "Paisagem rural verde para maneio animal",
    conteudo: [
      "As áreas exteriores permitem aos equinos movimentarem-se e, quando existe pastagem adequada, complementar a alimentação. A dimensão e a organização devem considerar o número de animais, a disponibilidade de alimento e as condições do terreno.",
      "As cercas devem ser visíveis, resistentes e construídas com materiais seguros. Arames soltos, pontas metálicas e estruturas partidas podem provocar ferimentos graves.",
      "A gestão da pastagem deve evitar sobrepastoreio, plantas tóxicas e zonas perigosas. A disponibilidade de sombra e água limpa deve ser considerada no planeamento.",
    ],
    cuidados: [
      "Inspecionar regularmente todo o perímetro das cercas.",
      "Identificar e controlar plantas potencialmente tóxicas.",
      "Disponibilizar sombra e água limpa.",
      "Separar animais quando houver incompatibilidade ou risco de lesões.",
    ],
  },
  {
    numero: "05",
    titulo: "Bebedouros e comedouros",
    resumo: "Equipamentos acessíveis para alimentação e fornecimento de água.",
    imagem:
      "https://images.unsplash.com/photo-1489924034176-2e678c29d4c6?auto=format&fit=crop&w=1200&q=85",
    alt: "Cavalo em espaço de criação",
    conteudo: [
      "Os bebedouros devem permitir acesso fácil à água limpa e ser instalados de modo a reduzir o risco de contaminação por fezes, urina, terra e restos de alimento.",
      "Os comedouros devem ser resistentes, estáveis e fáceis de higienizar. A sua localização deve permitir uma postura confortável e reduzir conflitos entre animais que partilham o mesmo espaço.",
      "A quantidade de equipamentos deve considerar o número de equinos, o sistema de alojamento e as necessidades individuais. Os recipientes devem ser verificados com frequência.",
    ],
    cuidados: [
      "Confirmar diariamente a disponibilidade de água.",
      "Lavar os recipientes e remover resíduos.",
      "Reparar fugas e equipamentos danificados.",
      "Evitar competição excessiva nos pontos de alimentação.",
    ],
  },
  {
    numero: "06",
    titulo: "Higiene e gestão de resíduos",
    resumo: "Limpeza, controlo de pragas e organização sanitária.",
    imagem:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=85",
    alt: "Ambiente natural e vegetação",
    conteudo: [
      "A limpeza regular das instalações reduz a acumulação de estrume, a presença de moscas e os odores desagradáveis. A frequência deve acompanhar o número de animais e o tipo de alojamento.",
      "Os resíduos devem ser recolhidos e armazenados num local apropriado, afastado dos alimentos e das fontes de água. A gestão deve evitar escorrências para zonas de circulação ou cursos de água.",
      "Os produtos de limpeza devem ser utilizados de acordo com as instruções do fabricante e guardados longe dos animais e dos alimentos. Após a desinfeção, é necessário respeitar as condições de segurança indicadas para o produto.",
    ],
    cuidados: [
      "Estabelecer uma rotina diária de limpeza.",
      "Armazenar estrume longe dos pontos de água e alimento.",
      "Controlar moscas e roedores através de medidas adequadas.",
      "Guardar produtos químicos em locais seguros e identificados.",
    ],
  },
];

export default function InstalacoesEquinosPage() {
  const [temaSelecionado, setTemaSelecionado] = useState<Tema | null>(null);

  return (
    <main className="min-h-screen bg-[#f0fdf4] text-[#17221b]">
      <section className="relative overflow-hidden bg-gradient-to-r from-[#14532d] via-[#166534] to-[#15803d] px-5 py-16 text-white md:px-10 md:py-24">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-green-100">
              Pecuária · Equinos · Orientações
            </p>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight md:text-6xl">
              Instalações para equinos
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-green-50 md:text-lg">
              Conheça os princípios de construção, organização e manutenção
              de espaços seguros, higiénicos e confortáveis para cavalos.
              Orientações para apoiar produtores, criadores e técnicos
              pecuários em Angola.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#temas"
                className="rounded-xl bg-white px-6 py-3 font-bold text-green-900 shadow-lg transition hover:-translate-y-1 hover:bg-green-50"
              >
                Explorar orientações
              </a>

              <Link
                href="/pecuaria/equinos"
                className="rounded-xl border border-white/50 px-6 py-3 font-bold text-white transition hover:bg-white/10"
              >
                Voltar aos equinos
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-white/10 blur-xl" />
            <img
              src={temas[0].imagem}
              alt="Cavalo num ambiente rural"
              className="relative h-[280px] w-full rounded-[2rem] border border-white/20 object-cover shadow-2xl md:h-[390px]"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-black/55 p-4 text-white backdrop-blur-sm">
              <p className="font-bold">Bem-estar começa no ambiente</p>
              <p className="mt-1 text-sm text-white/90">
                Abrigo, segurança, ventilação e higiene.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Abrigo", "Proteção contra condições ambientais adversas."],
            ["Segurança", "Prevenção de ferimentos nas instalações."],
            ["Conforto", "Espaços adequados para repouso e movimento."],
            ["Higiene", "Limpeza e gestão correta dos resíduos."],
          ].map(([titulo, descricao]) => (
            <article
              key={titulo}
              className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-lg font-extrabold text-green-900">
                {titulo}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {descricao}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="temas" className="mx-auto max-w-7xl px-5 pb-16 md:px-10">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Guia prático
            </p>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
              Conhecer as instalações
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Seleciona um tema para consultar recomendações de construção,
              utilização e manutenção dos espaços destinados aos equinos.
            </p>
          </div>

          <span className="w-fit rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-900">
            {temas.length} temas técnicos
          </span>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {temas.map((tema) => (
            <article
              key={tema.numero}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden bg-green-100">
                <img
                  src={tema.imagem}
                  alt={tema.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-xl bg-green-800 px-3 py-2 text-sm font-extrabold text-white shadow">
                  {tema.numero}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-extrabold text-green-950">
                  {tema.titulo}
                </h3>
                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
                  {tema.resumo}
                </p>
                <button
                  type="button"
                  onClick={() => setTemaSelecionado(tema)}
                  className="mt-5 w-full rounded-xl bg-green-800 px-5 py-3 font-bold text-white transition hover:bg-green-900 focus:outline-none focus:ring-4 focus:ring-green-200"
                >
                  Consultar orientação
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-12 md:px-10">
        <div className="mx-auto max-w-5xl rounded-3xl border border-green-100 bg-green-50 p-7 md:p-10">
          <h2 className="text-2xl font-extrabold text-green-950">
            Adaptar as instalações à realidade local
          </h2>
          <p className="mt-4 leading-8 text-slate-700">
            Em Angola, o planeamento deve considerar o clima da região, a
            disponibilidade de água, os materiais de construção, o número de
            animais e os recursos do produtor. As recomendações devem ser
            adaptadas com apoio técnico às condições concretas da exploração.
            Este guia é informativo e não substitui a avaliação presencial de
            um profissional qualificado.
          </p>
        </div>
      </section>

      {temaSelecionado && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm"
          onClick={() => setTemaSelecionado(null)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-modal-instalacoes"
            onClick={(event) => event.stopPropagation()}
            className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
          >
            <div className="relative h-56 sm:h-72">
              <img
                src={temaSelecionado.imagem}
                alt={temaSelecionado.alt}
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={() => setTemaSelecionado(null)}
                aria-label="Fechar janela"
                className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-bold text-green-950 shadow-lg transition hover:bg-green-100"
              >
                ×
              </button>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-6 pb-5 pt-12">
                <p className="text-sm font-bold uppercase tracking-widest text-green-200">
                  Orientação {temaSelecionado.numero}
                </p>
                <h2
                  id="titulo-modal-instalacoes"
                  className="mt-1 text-2xl font-extrabold text-white sm:text-3xl"
                >
                  {temaSelecionado.titulo}
                </h2>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="mb-5 leading-7 text-slate-600">
                {temaSelecionado.resumo}
              </p>

              <div className="space-y-4">
                {temaSelecionado.conteudo.map((paragrafo, index) => (
                  <p
                    key={index}
                    className="text-justify leading-8 text-slate-700"
                  >
                    {paragrafo}
                  </p>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-green-100 bg-green-50 p-5 sm:p-6">
                <h3 className="text-lg font-extrabold text-green-950">
                  Cuidados essenciais
                </h3>
                <ul className="mt-4 space-y-3">
                  {temaSelecionado.cuidados.map((cuidado, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-sm leading-6 text-slate-700"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green-700" />
                      <span>{cuidado}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => setTemaSelecionado(null)}
                className="mt-7 w-full rounded-xl bg-green-800 px-5 py-3 font-bold text-white transition hover:bg-green-900"
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