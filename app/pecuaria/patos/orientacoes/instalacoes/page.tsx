"use client";

import Link from "next/link";
import { useState } from "react";

type ImageCardProps = {
  src: string;
  titulo: string;
  descricao: string;
  fonte: string;
};

function ImageCard({
  src,
  titulo,
  descricao,
  fonte,
}: ImageCardProps) {
  const [imagemDisponivel, setImagemDisponivel] = useState(true);

  return (
    <article className="overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_65px_rgba(0,0,0,0.15)]">
      <div className="relative h-64 w-full overflow-hidden bg-slate-100">
        {imagemDisponivel ? (
          <img
            src={src}
            alt={titulo}
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
            loading="lazy"
            onError={() => setImagemDisponivel(false)}
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-emerald-50 to-slate-100 px-6 text-center">
            <div>
              <p className="font-bold text-emerald-800">
                Imagem ainda não disponível
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Coloque a fotografia em:
              </p>

              <p className="mt-2 break-all text-xs text-slate-400">
                {src}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900">{titulo}</h3>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          {descricao}
        </p>

        <p className="mt-4 border-t border-slate-100 pt-4 text-xs font-medium text-slate-500">
          Fonte: {fonte}
        </p>
      </div>
    </article>
  );
}

const principios = [
  "Proteção contra chuva e radiação solar excessiva",
  "Ventilação suficiente sem correntes de ar prejudiciais",
  "Piso seguro, seco e fácil de limpar",
  "Água limpa e facilmente acessível",
  "Proteção contra predadores e aves selvagens",
  "Controlo da humidade e dos gases",
  "Facilidade de inspeção, limpeza e manejo",
];

const localizacao = [
  {
    titulo: "Terreno elevado",
    texto:
      "Preferir áreas com boa drenagem e evitar locais onde a água permaneça acumulada depois das chuvas.",
  },
  {
    titulo: "Drenagem",
    texto:
      "A elevada utilização de água pelos patos exige um sistema que permita retirar rapidamente a água das zonas de circulação e descanso.",
  },
  {
    titulo: "Acesso",
    texto:
      "A instalação deve permitir entrada de pessoas, transporte de alimento, recolha de ovos, limpeza e remoção de resíduos.",
  },
  {
    titulo: "Segurança",
    texto:
      "A estrutura deve reduzir a entrada de cães, gatos, roedores, serpentes e outros predadores.",
  },
  {
    titulo: "Higiene",
    texto:
      "É preferível instalar o abrigo num local que permita limpeza frequente e que não esteja próximo de fontes evidentes de contaminação.",
  },
  {
    titulo: "Expansão",
    texto:
      "Sempre que possível, reservar espaço para aumentar a capacidade produtiva sem comprometer ventilação, higiene ou circulação.",
  },
];

const estrutura = [
  {
    titulo: "Cobertura",
    texto:
      "Deve proteger contra chuva e radiação solar. Em regiões quentes, materiais que absorvem muito calor exigem atenção especial ao isolamento e à ventilação.",
  },
  {
    titulo: "Paredes",
    texto:
      "Devem proporcionar proteção, mas sem bloquear desnecessariamente a circulação natural do ar. A solução deve ser adaptada ao clima local.",
  },
  {
    titulo: "Piso",
    texto:
      "Deve ser resistente, seguro para os animais, não abrasivo e relativamente fácil de limpar. O excesso permanente de humidade deve ser evitado.",
  },
  {
    titulo: "Cama",
    texto:
      "Materiais secos e absorventes podem ser utilizados. As zonas molhadas devem ser corrigidas rapidamente, principalmente junto aos bebedouros.",
  },
  {
    titulo: "Portas",
    texto:
      "Devem permitir acesso seguro dos tratadores e facilitar a entrada e saída controlada dos animais.",
  },
  {
    titulo: "Rede de proteção",
    texto:
      "A rede deve ser resistente, sem buracos e suficientemente segura para reduzir a entrada de predadores e o contacto com aves selvagens.",
  },
];

const verificacoes = [
  ["Piso", "Seco, seguro e sem superfícies cortantes"],
  ["Cobertura", "Sem infiltrações e com proteção adequada"],
  ["Ventilação", "Ar renovado sem correntes excessivamente fortes"],
  ["Bebedouros", "Limpos e funcionando corretamente"],
  ["Comedouros", "Limpos e facilmente acessíveis"],
  ["Drenagem", "Sem água parada junto ao abrigo"],
  ["Rede", "Sem buracos ou pontos de entrada"],
  ["Predadores", "Instalação protegida"],
  ["Cama", "Seca e limpa"],
  ["Limpeza", "Instalação preparada para higienização"],
];

const questoes = [
  "Identifique pelo menos cinco problemas numa instalação com pouca ventilação e excesso de humidade.",
  "Explique como cada problema pode afetar os animais.",
  "Proponha melhorias de baixo custo utilizando materiais disponíveis localmente.",
  "Explique como melhorar a circulação de ar.",
  "Indique medidas para reduzir a humidade junto aos bebedouros.",
  "Defina quais indicadores devem ser acompanhados diariamente pelo produtor.",
];

export default function InstalacoesPatosPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.13),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-4xl">

            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-emerald-200">
              AGROINOVA ANGOLA · PECUÁRIA
            </p>

            <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
              Instalações para Patos
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-emerald-50 md:text-xl">
              Planeamento, construção e organização das instalações destinadas
              à criação de patos, considerando ventilação, proteção, higiene,
              água, conforto térmico, manejo e segurança sanitária.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/pecuaria/patos/orientacoes/agua"
                className="rounded-2xl bg-white px-6 py-3 font-bold text-emerald-900 shadow-xl transition hover:-translate-y-0.5"
              >
                Ver Água
              </Link>

              <Link
                href="/pecuaria/patos/orientacoes/biosseguranca"
                className="rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                Ver Biossegurança
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* FUNDAMENTOS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              01 · Fundamentos
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
              A instalação não é apenas um abrigo
            </h2>

            <div className="mt-6 space-y-5 text-justify text-base leading-8 text-slate-600">

              <p>
                Uma instalação para patos deve criar condições que permitam aos
                animais alimentar-se, beber, descansar, crescer e reproduzir-se
                com proteção adequada contra condições ambientais adversas,
                predadores e riscos sanitários.
              </p>

              <p>
                Em sistemas pequenos, o abrigo pode ser relativamente simples
                e utilizar materiais disponíveis localmente. No entanto,
                simplicidade não significa ausência de critérios técnicos.
                Localização, drenagem, ventilação, cobertura, piso, água e
                facilidade de limpeza devem ser considerados desde a fase de
                planeamento.
              </p>

              <p>
                A qualidade do ambiente físico influencia o conforto, a saúde e
                o desempenho produtivo das aves. Por isso, a instalação deve
                funcionar em conjunto com alimentação, água, higiene e
                biossegurança.
              </p>

            </div>
          </div>

          <aside className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-[0_18px_50px_rgba(0,0,0,0.08)]">

            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              Princípio técnico
            </p>

            <h3 className="mt-3 text-2xl font-black text-slate-900">
              Uma boa instalação cria um ambiente controlável
            </h3>

            <div className="mt-6 space-y-4">
              {principios.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-900"
                >
                  {item}
                </div>
              ))}
            </div>

          </aside>
        </div>
      </section>

      {/* IMAGENS */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">

        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            02 · Referência visual
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900">
            Organização da instalação
          </h2>

          <p className="mt-4 max-w-3xl text-justify leading-8 text-slate-600">
            As fotografias devem ser inseridas no diretório público do projeto
            apenas depois de confirmada a origem, licença ou autorização de
            utilização.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <ImageCard
            src="/imagens/patos/instalacoes/abrigo.jpg"
            titulo="Abrigo para patos"
            descricao="O abrigo deve proteger os animais das condições climáticas adversas e permitir limpeza, inspeção e manejo."
            fonte="Fotografia do acervo AGROINOVA ANGOLA"
          />

          <ImageCard
            src="/imagens/patos/instalacoes/ventilacao.jpg"
            titulo="Ventilação"
            descricao="A circulação adequada do ar ajuda a remover calor, humidade, poeira e gases acumulados."
            fonte="Fotografia do acervo AGROINOVA ANGOLA"
          />

          <ImageCard
            src="/imagens/patos/instalacoes/bebedouros.jpg"
            titulo="Zona de água"
            descricao="A área dos bebedouros deve ser organizada para reduzir derramamentos e excesso de humidade."
            fonte="Fotografia do acervo AGROINOVA ANGOLA"
          />

        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            03 · Localização
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
            Escolha correta do terreno
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {localizacao.map((item) => (
              <article
                key={item.titulo}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-[0_12px_35px_rgba(0,0,0,0.06)]"
              >
                <h3 className="text-xl font-black text-slate-900">
                  {item.titulo}
                </h3>

                <p className="mt-4 text-justify leading-7 text-slate-600">
                  {item.texto}
                </p>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* ESTRUTURA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
          04 · Estrutura física
        </p>

        <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
          Componentes de uma boa instalação
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          {estrutura.map((item) => (
            <article
              key={item.titulo}
              className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-[0_16px_45px_rgba(0,0,0,0.08)]"
            >
              <h3 className="text-xl font-black text-emerald-900">
                {item.titulo}
              </h3>

              <p className="mt-4 text-justify leading-8 text-slate-600">
                {item.texto}
              </p>
            </article>
          ))}

        </div>
      </section>

      {/* VENTILAÇÃO */}
      <section className="bg-emerald-950 text-white">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <p className="text-sm font-bold uppercase tracking-widest text-emerald-300">
            05 · Ventilação
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Ventilação: um dos pontos mais importantes
          </h2>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">

            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur">

              <h3 className="text-2xl font-black">
                O que a ventilação deve fazer
              </h3>

              <div className="mt-6 space-y-4 text-emerald-50">
                <p>Renovar o ar disponível no ambiente.</p>
                <p>Remover parte do calor produzido pelos animais.</p>
                <p>Reduzir a acumulação de humidade.</p>
                <p>Ajudar a remover poeira e gases.</p>
                <p>Contribuir para o conforto térmico.</p>
              </div>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur">

              <h3 className="text-2xl font-black">
                Atenção ao clima quente
              </h3>

              <p className="mt-5 text-justify leading-8 text-emerald-50">
                Em condições de calor, a temperatura e a humidade devem ser
                consideradas em conjunto. Instalações para patos devem
                favorecer circulação de ar, sombra e acesso permanente à água.
              </p>

              <p className="mt-5 text-justify leading-8 text-emerald-50">
                A ventilação deve ser suficiente para renovar o ar sem criar
                correntes prejudiciais aos animais, especialmente nas fases
                mais jovens.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ÁGUA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
          06 · Água dentro da instalação
        </p>

        <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
          Bebedouros e controlo da humidade
        </h2>

        <p className="mt-6 max-w-4xl text-justify leading-8 text-slate-600">
          Os patos utilizam água em quantidade significativa e podem aumentar
          rapidamente a humidade do ambiente. Por isso, o sistema de água deve
          ser planeado juntamente com piso, drenagem e ventilação.
        </p>

        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[760px] border-collapse text-left">

              <thead>
                <tr className="bg-emerald-900 text-white">
                  <th className="p-5">Componente</th>
                  <th className="p-5">Problema possível</th>
                  <th className="p-5">Boa prática</th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["Bebedouro", "Derramamento", "Regular posição, fluxo e manutenção."],
                  ["Piso", "Lama e humidade", "Garantir drenagem e retirar material molhado."],
                  ["Cama", "Humidade e odores", "Substituir ou corrigir rapidamente zonas húmidas."],
                  ["Parede próxima", "Humidade permanente", "Evitar contacto contínuo da água com a estrutura."],
                  ["Drenagem", "Água parada", "Criar escoamento seguro e funcional."],
                ].map((row) => (
                  <tr key={row[0]} className="border-t border-slate-200">
                    <td className="p-5 font-bold text-slate-900">
                      {row[0]}
                    </td>
                    <td className="p-5 text-slate-600">
                      {row[1]}
                    </td>
                    <td className="p-5 text-slate-600">
                      {row[2]}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </section>

      {/* ESPAÇO */}
      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            07 · Espaço
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
            Densidade e área disponível
          </h2>

          <p className="mt-6 max-w-4xl text-justify leading-8 text-slate-600">
            A densidade não deve ser definida apenas pelo número de animais.
            Idade, tamanho, finalidade produtiva, sistema de alojamento,
            temperatura, ventilação, piso e qualidade do manejo devem ser
            considerados na avaliação do espaço disponível.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {[
              {
                titulo: "Patinhos",
                texto:
                  "Necessitam de ambiente protegido, acesso fácil à água e alimento e controlo adequado do ambiente.",
              },
              {
                titulo: "Crescimento",
                texto:
                  "À medida que os animais crescem, a área disponível por ave deve ser reavaliada para evitar sobrelotação.",
              },
              {
                titulo: "Reprodutores",
                texto:
                  "Devem dispor de espaço suficiente para movimentação, alimentação, interação social e reprodução.",
              },
            ].map((item) => (
              <div
                key={item.titulo}
                className="rounded-3xl border border-emerald-100 bg-emerald-50 p-7"
              >
                <h3 className="text-xl font-black text-emerald-900">
                  {item.titulo}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.texto}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* PATINHOS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
          08 · Patinhos
        </p>

        <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
          Instalação para patinhos
        </h2>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

            <h3 className="text-2xl font-black text-slate-900">
              O que deve existir
            </h3>

            <div className="mt-6 space-y-4">

              {[
                "Fonte de calor controlada quando necessária",
                "Proteção contra correntes de ar prejudiciais",
                "Ventilação adequada",
                "Comedouros de fácil acesso",
                "Bebedouros adequados ao tamanho dos animais",
                "Piso seco",
                "Cama limpa",
                "Proteção contra predadores e acidentes",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-700"
                >
                  {item}
                </div>
              ))}

            </div>
          </div>

          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8">

            <h3 className="text-2xl font-black text-emerald-950">
              Observar o comportamento
            </h3>

            <p className="mt-5 text-justify leading-8 text-slate-700">
              O comportamento dos patinhos pode ajudar o produtor a identificar
              situações de desconforto. Agrupamento excessivo pode indicar
              frio, enquanto afastamento excessivo da fonte de calor e
              respiração acelerada podem estar associados a condições térmicas
              inadequadas.
            </p>

            <p className="mt-5 text-justify leading-8 text-slate-700">
              A observação deve ser complementada por avaliação das condições
              ambientais, consumo de água e alimento e acompanhamento sanitário.
            </p>

          </div>

        </div>
      </section>

      {/* REPRODUÇÃO */}
      <section className="bg-slate-900 text-white">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <p className="text-sm font-bold uppercase tracking-widest text-emerald-300">
            09 · Reprodução
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Ninhos para patos de postura
          </h2>

          <p className="mt-6 max-w-4xl text-justify leading-8 text-slate-300">
            Quando a finalidade é produção de ovos férteis ou ovos para
            consumo, os ninhos devem estar localizados em zonas protegidas,
            relativamente tranquilas e com material limpo e seco.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {[
              {
                titulo: "Localização",
                texto:
                  "Zona protegida do trânsito intenso dos animais e das áreas constantemente molhadas.",
              },
              {
                titulo: "Material",
                texto:
                  "Deve permanecer seco e ser substituído quando estiver húmido ou contaminado.",
              },
              {
                titulo: "Recolha",
                texto:
                  "A recolha frequente ajuda a reduzir sujidade, quebra e contaminação dos ovos.",
              },
            ].map((item) => (
              <div
                key={item.titulo}
                className="rounded-3xl border border-white/10 bg-white/5 p-7"
              >
                <h3 className="text-xl font-black">{item.titulo}</h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {item.texto}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ÁREA EXTERNA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
          10 · Área externa
        </p>

        <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
          Parque ou área de circulação
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

            <h3 className="text-2xl font-black text-slate-900">
              Movimento e exploração
            </h3>

            <p className="mt-4 text-justify leading-8 text-slate-600">
              Uma área externa bem planeada pode permitir movimento e
              exploração do ambiente. Entretanto, o acesso externo não elimina
              a necessidade de abrigo, alimentação equilibrada, água limpa,
              controlo sanitário e proteção.
            </p>

          </article>

          <article className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8">

            <h3 className="text-2xl font-black text-emerald-950">
              Atenção à água superficial
            </h3>

            <p className="mt-4 text-justify leading-8 text-slate-700">
              Lagoas, rios e outros corpos de água podem aumentar o contacto
              com agentes contaminantes e aves selvagens. Quando utilizados,
              devem ser considerados dentro do plano de biossegurança da
              exploração.
            </p>

          </article>

        </div>
      </section>

      {/* HIGIENE */}
      <section className="bg-emerald-50">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            11 · Higiene
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
            Instalação fácil de limpar
          </h2>

          <p className="mt-6 max-w-4xl text-justify leading-8 text-slate-700">
            Uma instalação bonita mas difícil de limpar pode transformar-se
            num problema sanitário. O projeto deve permitir remover fezes,
            cama húmida, restos de alimento e água acumulada.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {[
              "Piso com boa drenagem",
              "Bebedouros acessíveis",
              "Cama substituível",
              "Acesso para limpeza",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-emerald-100 bg-white p-6 text-center font-bold text-emerald-900 shadow-sm"
              >
                {item}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ANGOLA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
          12 · Aplicação em Angola
        </p>

        <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
          Adaptar as instalações às condições locais
        </h2>

        <div className="mt-8 space-y-6 text-justify leading-8 text-slate-600">

          <p>
            Em Angola, o modelo de instalação deve ser adaptado à região, ao
            sistema de produção, aos materiais disponíveis e às condições
            climáticas locais. Uma pequena exploração familiar não precisa
            necessariamente da mesma estrutura de uma unidade comercial.
          </p>

          <p>
            Em zonas quentes, sombra, ventilação, acesso à água e controlo da
            humidade tornam-se particularmente importantes. Durante períodos
            de chuva, a drenagem deve receber atenção especial.
          </p>

          <p>
            Materiais locais podem ser utilizados quando forem resistentes,
            seguros para os animais e compatíveis com as necessidades de
            higiene e manutenção.
          </p>

        </div>

        <div className="mt-10 rounded-3xl border border-emerald-200 bg-emerald-900 p-8 text-white shadow-2xl">

          <h3 className="text-2xl font-black">
            Regra prática para o produtor
          </h3>

          <p className="mt-4 max-w-4xl text-justify leading-8 text-emerald-50">
            Antes de construir, observe o terreno durante períodos de chuva e
            durante as horas mais quentes. Identifique onde a água acumula, de
            onde vem o vento, onde existe sombra e quais pontos podem facilitar
            a entrada de predadores. A instalação deve responder a esses
            problemas antes da compra dos materiais.
          </p>

        </div>
      </section>

      {/* CHECKLIST */}
      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            13 · Checklist técnico
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
            Antes de colocar os patos na instalação
          </h2>

          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 shadow-xl">

            <div className="overflow-x-auto">

              <table className="w-full min-w-[700px] border-collapse">

                <thead>
                  <tr className="bg-slate-900 text-left text-white">
                    <th className="p-5">Verificação</th>
                    <th className="p-5">Estado esperado</th>
                  </tr>
                </thead>

                <tbody>
                  {verificacoes.map((row) => (
                    <tr
                      key={row[0]}
                      className="border-t border-slate-200"
                    >
                      <td className="p-5 font-bold text-slate-900">
                        {row[0]}
                      </td>

                      <td className="p-5 text-slate-600">
                        {row[1]}
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </div>
        </div>
      </section>

      {/* EXERCÍCIO */}
      <section className="bg-slate-100">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="rounded-[2rem] border border-emerald-200 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.10)] md:p-12">

            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              Exercício para estudantes
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900">
              Diagnóstico de uma instalação
            </h2>

            <p className="mt-5 max-w-4xl text-justify leading-8 text-slate-600">
              Imagine uma pequena exploração que pretende criar patos para
              produção de carne. O terreno apresenta acumulação de água
              durante as chuvas, os bebedouros ficam próximos da zona de cama e
              a instalação possui poucas aberturas laterais.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">

              {questoes.map((questao, index) => (
                <div
                  key={questao}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <span className="font-black text-emerald-700">
                    {index + 1}.
                  </span>{" "}
                  <span className="text-slate-700">{questao}</span>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

        <h2 className="text-2xl font-black text-slate-900">
          Fontes técnicas
        </h2>

        <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">

          <p>
            Cornell University College of Veterinary Medicine — Duck Research
            Laboratory.
          </p>

          <p>
            Food and Agriculture Organization of the United Nations (FAO) —
            materiais técnicos sobre alojamento e produção animal.
          </p>

          <p>
            FAO — Rural structures in the tropics: animal housing.
          </p>

          <p>
            FAO TECA — materiais técnicos sobre criação de patos em condições
            tropicais.
          </p>

        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="border-t border-slate-200 bg-white">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 sm:flex-row sm:justify-between lg:px-8">

          <Link
            href="/pecuaria/patos/orientacoes/maneio"
            className="rounded-2xl border border-slate-200 px-6 py-3 text-center font-bold text-slate-700 transition hover:bg-slate-50"
          >
            ← Maneio
          </Link>

          <Link
            href="/pecuaria/patos/orientacoes/biosseguranca"
            className="rounded-2xl bg-emerald-800 px-6 py-3 text-center font-bold text-white shadow-lg transition hover:bg-emerald-900"
          >
            Biossegurança →
          </Link>

        </div>
      </section>

    </main>
  );
}