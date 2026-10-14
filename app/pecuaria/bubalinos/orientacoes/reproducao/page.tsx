
"use client";

import { useState } from "react";
import Link from "next/link";

const imagens = {
  capa: "https://commons.wikimedia.org/wiki/Special:FilePath/Asian_water_buffalo_%28Bubalus_bubalis%29_in_shallow_water_04.jpg",
  animal: "https://commons.wikimedia.org/wiki/Special:FilePath/A_Murrah_buffalo.jpg",
  maneio: "https://commons.wikimedia.org/wiki/Special:FilePath/Asian_water_buffalo_%28Bubalus_bubalis%29_in_shallow_water_03.jpg",
};

const temas = [
  {
    numero: "01",
    titulo: "Seleção dos reprodutores",
    texto:
      "A escolha dos machos e das fêmeas deve considerar a saúde, a conformação corporal, a origem conhecida e o histórico produtivo e reprodutivo. Devem ser evitados animais com problemas hereditários conhecidos, alterações locomotoras relevantes ou condição corporal incompatível com uma reprodução segura.",
    pontos: [
      "Avaliar a condição corporal e o estado sanitário.",
      "Conhecer a idade, a origem e os registos do animal.",
      "Solicitar avaliação reprodutiva por um médico veterinário.",
      "Evitar acasalamentos entre animais com parentesco próximo conhecido.",
    ],
  },
  {
    numero: "02",
    titulo: "Identificação do cio",
    texto:
      "A deteção do cio é uma etapa fundamental do maneio reprodutivo. Nas búfalas, os sinais podem ser discretos ou ocorrer em períodos de menor atividade humana, pelo que a observação sistemática ajuda a reduzir falhas na identificação.",
    pontos: [
      "Observar alterações de comportamento e atividade.",
      "Registar montas, aceitação do macho e outros sinais observados.",
      "Reforçar a observação nos períodos mais favoráveis à deteção.",
      "Pedir apoio técnico quando os sinais forem duvidosos.",
    ],
  },
  {
    numero: "03",
    titulo: "Acasalamento e inseminação",
    texto:
      "A reprodução pode ocorrer por acasalamento natural ou por inseminação artificial, conforme os recursos, os objetivos do criador e a disponibilidade de assistência técnica. A escolha do método deve ser acompanhada por controlo sanitário e registos individuais.",
    pontos: [
      "Confirmar a identificação dos animais envolvidos.",
      "Avaliar a aptidão reprodutiva do macho e da fêmea.",
      "Registar a data e o método de reprodução.",
      "Recorrer a profissionais habilitados para inseminação artificial.",
    ],
  },
  {
    numero: "04",
    titulo: "Gestação e acompanhamento",
    texto:
      "A duração da gestação dos búfalos varia com fatores como o tipo genético e as condições individuais. A gestação deve ser acompanhada por observação regular, alimentação adequada, disponibilidade de água limpa e avaliação veterinária sempre que necessária.",
    pontos: [
      "Registar a data de cobertura ou inseminação.",
      "Acompanhar a condição corporal da fêmea.",
      "Evitar transporte e maneio desnecessariamente stressantes.",
      "Preparar antecipadamente um local limpo para o parto.",
    ],
  },
  {
    numero: "05",
    titulo: "Parto e cuidados com a cria",
    texto:
      "O parto exige um ambiente tranquilo, limpo e seguro. Depois do nascimento, deve verificar-se se a cria respira normalmente, se consegue levantar-se e se procura a mãe. A ingestão precoce de colostro é essencial para a transferência de imunidade passiva.",
    pontos: [
      "Observar o parto sem intervenções desnecessárias.",
      "Confirmar a respiração e a vitalidade da cria.",
      "Garantir que a cria recebe colostro o mais cedo possível.",
      "Procurar assistência veterinária perante sinais de dificuldade.",
    ],
  },
  {
    numero: "06",
    titulo: "Registos e melhoria do efetivo",
    texto:
      "Os registos permitem compreender os resultados reprodutivos, identificar problemas e tomar decisões mais consistentes. Mesmo em explorações familiares, um caderno organizado pode ajudar a acompanhar cada fêmea e cada cria.",
    pontos: [
      "Número ou nome de identificação do animal.",
      "Data de cobertura ou inseminação.",
      "Diagnóstico de gestação, quando realizado.",
      "Data do parto, identificação da cria e ocorrências.",
    ],
  },
];

const checklist = [
  "Os animais reprodutores estão identificados.",
  "Existe informação sobre a origem e o histórico dos animais.",
  "A condição corporal e o estado sanitário são acompanhados.",
  "As observações de cio e as coberturas são registadas.",
  "Existe um local limpo, seco e seguro para o parto.",
  "Está previsto apoio veterinário em caso de complicações.",
];

export default function ReproducaoBubalinosPage() {
  const [aberto, setAberto] = useState<number | null>(0);
  const [concluidos, setConcluidos] = useState<boolean[]>(
    checklist.map(() => false)
  );
  const [resposta, setResposta] = useState("");
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const totalConcluido = concluidos.filter(Boolean).length;

  return (
    <main className="min-h-screen bg-[#f5f7f4] text-[#17221b]">
      <section className="relative isolate min-h-[510px] overflow-hidden bg-[#123d28]">
        <img
          src={imagens.capa}
          alt="Búfalo-de-água da espécie Bubalus bubalis num ambiente aquático"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#082d1c]/95 via-[#123d28]/75 to-[#123d28]/20" />

        <div className="mx-auto flex min-h-[510px] max-w-7xl items-center px-5 py-16 sm:px-8 lg:px-12">
          <div className="max-w-3xl text-white">
            <Link
              href="/pecuaria/bubalinos"
              className="mb-7 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
            >
              ← Voltar aos Bubalinos
            </Link>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-green-200">
              AGROINOVA ANGOLA · Produção animal
            </p>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Reprodução dos Bubalinos
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
              Princípios de seleção dos reprodutores, deteção do cio,
              acompanhamento da gestação, cuidados no parto e organização dos
              registos para um maneio reprodutivo responsável.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#conteudo"
                className="rounded-xl bg-white px-6 py-3 font-bold text-[#14532d] shadow-lg transition hover:-translate-y-0.5 hover:bg-green-50"
              >
                Explorar conteúdos
              </a>
              <a
                href="#verificacao"
                className="rounded-xl border border-white/50 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white/20"
              >
                Verificar a exploração
              </a>
            </div>

            <p className="mt-5 text-xs leading-5 text-white/75">
              Fotografia ilustrativa internacional. A imagem não representa
              necessariamente uma exploração localizada em Angola.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <section className="grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl font-bold text-green-800">
              01
            </div>
            <h2 className="text-lg font-bold">Planeamento</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Seleção criteriosa dos animais, identificação individual e
              definição dos objetivos de reprodução.
            </p>
          </article>

          <article className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl font-bold text-green-800">
              02
            </div>
            <h2 className="text-lg font-bold">Acompanhamento</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Observação do cio, controlo sanitário e vigilância da gestação
              com apoio técnico adequado.
            </p>
          </article>

          <article className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl font-bold text-green-800">
              03
            </div>
            <h2 className="text-lg font-bold">Registos</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Informação organizada para acompanhar partos, crias e resultados
              reprodutivos ao longo do tempo.
            </p>
          </article>
        </section>

        <section className="mt-14 grid items-center gap-9 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Fundamentos técnicos
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
              Uma reprodução eficiente começa antes do acasalamento
            </h2>
            <p className="mt-5 leading-8 text-slate-700">
              O maneio reprodutivo não se limita a juntar um macho e uma fêmea.
              Envolve a preparação nutricional e sanitária, a escolha dos
              reprodutores, a identificação do momento adequado para a
              reprodução e o acompanhamento das fêmeas até ao parto.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Nas explorações familiares, a organização destas tarefas pode
              começar com medidas simples: identificação dos animais, registo
              das datas, observação regular e procura de assistência técnica
              quando surgem dúvidas ou complicações.
            </p>
            <div className="mt-6 rounded-2xl border-l-4 border-green-600 bg-green-50 p-5">
              <p className="font-bold text-green-900">
                Princípio essencial
              </p>
              <p className="mt-2 text-sm leading-7 text-green-900/85">
                As decisões reprodutivas devem respeitar o estado de saúde,
                a condição corporal, o bem-estar dos animais e as condições
                reais da exploração.
              </p>
            </div>
          </div>

          <figure className="overflow-hidden rounded-3xl bg-white shadow-xl">
            <img
              src={imagens.animal}
              alt="Búfalo da raça Murrah, utilizado como exemplo ilustrativo de um animal reprodutor"
              loading="lazy"
              className="h-[340px] w-full object-cover sm:h-[420px]"
            />
            <figcaption className="p-4 text-sm leading-6 text-slate-600">
              Exemplo ilustrativo de búfalo doméstico. A seleção de um
              reprodutor exige avaliação individual; a aparência, por si só,
              não comprova a sua fertilidade.
              <a
                href="https://commons.wikimedia.org/wiki/Category:Bubalus_bubalis"
                target="_blank"
                rel="noreferrer"
                className="ml-1 font-semibold text-green-800 underline"
              >
                Consultar a fonte fotográfica
              </a>
            </figcaption>
          </figure>
        </section>

        <section id="conteudo" className="mt-16 scroll-mt-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Percurso de aprendizagem
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Etapas do maneio reprodutivo
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Abre cada tema para consultar os principais procedimentos e os
              cuidados a observar na exploração.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {temas.map((tema, index) => {
              const selecionado = aberto === index;

              return (
                <article
                  key={tema.numero}
                  className={`overflow-hidden rounded-2xl border bg-white transition ${
                    selecionado
                      ? "border-green-300 shadow-md"
                      : "border-slate-200 shadow-sm"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setAberto(selecionado ? null : index)}
                    aria-expanded={selecionado}
                    className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 font-extrabold text-green-800">
                      {tema.numero}
                    </span>

                    <span className="flex-1">
                      <span className="block text-lg font-bold text-slate-900">
                        {tema.titulo}
                      </span>
                      <span className="mt-1 block text-sm text-slate-500">
                        Consultar orientações e pontos de controlo
                      </span>
                    </span>

                    <span className="text-2xl font-light text-green-800">
                      {selecionado ? "−" : "+"}
                    </span>
                  </button>

                  {selecionado && (
                    <div className="border-t border-slate-100 px-5 pb-6 pt-5 sm:px-6">
                      <p className="leading-8 text-slate-700">
                        {tema.texto}
                      </p>

                      <h3 className="mt-5 font-bold text-slate-900">
                        Procedimentos recomendados
                      </h3>

                      <ul className="mt-3 space-y-3">
                        {tema.pontos.map((ponto) => (
                          <li
                            key={ponto}
                            className="flex items-start gap-3 text-sm leading-7 text-slate-700"
                          >
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green-600" />
                            <span>{ponto}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-16 overflow-hidden rounded-3xl bg-[#123d28] text-white">
          <div className="grid lg:grid-cols-2">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-sm font-bold uppercase tracking-widest text-green-200">
                Aplicação prática
              </p>
              <h2 className="mt-3 text-3xl font-extrabold">
                Do registo ao acompanhamento
              </h2>
              <p className="mt-5 leading-8 text-white/85">
                Imagine uma exploração que mantém várias fêmeas reprodutoras,
                mas não regista as coberturas nem as datas dos partos. Torna-se
                difícil prever necessidades, reconhecer atrasos e avaliar os
                resultados do maneio.
              </p>
              <p className="mt-4 leading-8 text-white/85">
                Um registo individual, atualizado após cada ocorrência,
                permite organizar o acompanhamento e fornecer informação útil
                ao técnico responsável.
              </p>

              <div className="mt-7 rounded-2xl border border-white/20 bg-white/10 p-5">
                <p className="font-bold">Exemplo de registo individual</p>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-white/60">Identificação</p>
                    <p className="mt-1 font-semibold">Fêmea B-001</p>
                  </div>
                  <div>
                    <p className="text-white/60">Ocorrência</p>
                    <p className="mt-1 font-semibold">Cobertura registada</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-white/60">Próximo passo</p>
                    <p className="mt-1 font-semibold">
                      Acompanhamento e confirmação de gestação por profissional
                      habilitado.
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-xs leading-5 text-white/60">
                  Exemplo didático fictício, não corresponde a dados de uma
                  exploração real.
                </p>
              </div>
            </div>

            <div className="min-h-[320px] lg:min-h-full">
              <img
                src={imagens.maneio}
                alt="Búfalo-de-água em ambiente rural, fotografia ilustrativa para o maneio dos animais"
                loading="lazy"
                className="h-full min-h-[320px] w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="verificacao" className="mt-16 scroll-mt-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-green-700">
                Ferramenta de campo
              </p>
              <h2 className="mt-3 text-3xl font-extrabold">
                Lista de verificação reprodutiva
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                Assinala os procedimentos já organizados na exploração. A
                lista serve como apoio ao planeamento e não substitui uma
                avaliação veterinária.
              </p>

              <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
                <div className="flex items-end justify-between gap-4">
                  <span className="text-sm font-semibold text-slate-600">
                    Progresso da lista
                  </span>
                  <span className="text-2xl font-extrabold text-green-800">
                    {totalConcluido}/{checklist.length}
                  </span>
                </div>
                <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-green-600 transition-all"
                    style={{
                      width: `${(totalConcluido / checklist.length) * 100}%`,
                    }}
                  />
                </div>
                <p className="mt-3 text-sm text-slate-500">
                  {totalConcluido === checklist.length
                    ? "Todos os pontos foram assinalados. Confirma se continuam atualizados."
                    : "Assinala os pontos que já estão implementados."}
                </p>
                <button
                  type="button"
                  onClick={() => setConcluidos(checklist.map(() => false))}
                  className="mt-4 text-sm font-semibold text-green-800 underline"
                >
                  Limpar lista
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
              <div className="space-y-4">
                {checklist.map((item, index) => (
                  <label
                    key={item}
                    className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-100 p-4 transition hover:bg-green-50"
                  >
                    <input
                      type="checkbox"
                      checked={concluidos[index]}
                      onChange={(event) =>
                        setConcluidos((anterior) =>
                          anterior.map((valor, i) =>
                            i === index ? event.target.checked : valor
                          )
                        )
                      }
                      className="mt-1 h-5 w-5 accent-green-700"
                    />
                    <span
                      className={`text-sm leading-7 ${
                        concluidos[index]
                          ? "text-slate-400 line-through"
                          : "text-slate-700"
                      }`}
                    >
                      {item}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-green-100 bg-white p-6 shadow-sm sm:p-9">
          <p className="text-sm font-bold uppercase tracking-widest text-green-700">
            Avaliação de aprendizagem
          </p>
          <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
            Porque são importantes os registos reprodutivos?
          </h2>
          <p className="mt-4 leading-8 text-slate-600">
            Escolhe a opção que melhor responde à pergunta.
          </p>

          <div className="mt-6 space-y-3">
            {[
              {
                valor: "a",
                texto: "Apenas para contar os animais existentes.",
              },
              {
                valor: "b",
                texto:
                  "Para acompanhar ocorrências, organizar decisões e avaliar resultados reprodutivos.",
              },
              {
                valor: "c",
                texto:
                  "Para dispensar a observação dos animais e a assistência veterinária.",
              },
            ].map((opcao) => (
              <label
                key={opcao.valor}
                className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-4 transition hover:border-green-300 hover:bg-green-50"
              >
                <input
                  type="radio"
                  name="avaliacao-reproducao"
                  value={opcao.valor}
                  checked={resposta === opcao.valor}
                  onChange={() => {
                    setResposta(opcao.valor);
                    setMostrarResultado(false);
                  }}
                  className="mt-1 h-4 w-4 accent-green-700"
                />
                <span className="text-sm leading-7 text-slate-700">
                  {opcao.texto}
                </span>
              </label>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setMostrarResultado(true)}
            disabled={!resposta}
            className="mt-6 rounded-xl bg-green-800 px-6 py-3 font-bold text-white transition hover:bg-green-900 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Verificar resposta
          </button>

          {mostrarResultado && (
            <div
              className={`mt-5 rounded-xl p-5 ${
                resposta === "b"
                  ? "bg-green-50 text-green-900"
                  : "bg-amber-50 text-amber-900"
              }`}
            >
              <p className="font-bold">
                {resposta === "b"
                  ? "Resposta correta."
                  : "Revê a resposta e tenta novamente."}
              </p>
              <p className="mt-2 text-sm leading-7">
                Os registos ajudam a acompanhar cada animal, documentar as
                ocorrências e apoiar decisões de maneio. Não substituem a
                observação direta nem a assistência profissional.
              </p>
            </div>
          )}
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            Fontes técnicas e leitura complementar
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Para aprofundar os fundamentos da reprodução dos búfalos e da
            inseminação artificial, consulta os materiais técnicos seguintes.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <a
              href="https://www.fao.org/4/X6513E/X6513E00.htm"
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-green-300 hover:shadow-md"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-green-700">
                FAO · Publicação técnica
              </p>
              <h3 className="mt-3 font-bold text-slate-900 group-hover:text-green-800">
                Buffalo reproduction and artificial insemination
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Publicação técnica sobre reprodução e inseminação artificial
                em búfalos.
              </p>
              <span className="mt-4 inline-block text-sm font-bold text-green-800">
                Consultar publicação ↗
              </span>
            </a>

            <a
              href="https://www.fao.org/4/t1265e/t1280e01.htm"
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-green-300 hover:shadow-md"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-green-700">
                FAO · Manual técnico
              </p>
              <h3 className="mt-3 font-bold text-slate-900 group-hover:text-green-800">
                Inseminação artificial em búfalas e bovinos leiteiros
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Material didático sobre deteção do cio, inseminação e
                acompanhamento reprodutivo.
              </p>
              <span className="mt-4 inline-block text-sm font-bold text-green-800">
                Consultar manual ↗
              </span>
            </a>
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-500">
            Nota técnica: os procedimentos devem ser adaptados à raça, às
            condições ambientais, à alimentação, ao estado sanitário e aos
            recursos disponíveis. As intervenções clínicas e reprodutivas
            devem ser orientadas por profissionais habilitados.
          </p>
        </section>

        <footer className="mt-16 border-t border-slate-200 py-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="font-extrabold text-green-900">AGROINOVA ANGOLA</p>
              <p className="mt-1 text-sm text-slate-500">
                Conhecimento, Tecnologia e Inovação ao Serviço do Campo Angolano.
              </p>
            </div>
            <Link
              href="/pecuaria/bubalinos"
              className="inline-flex w-fit rounded-xl border border-green-800 px-5 py-3 text-sm font-bold text-green-900 transition hover:bg-green-50"
            >
              Voltar aos Bubalinos
            </Link>
          </div>
          <p className="mt-5 text-xs leading-6 text-slate-500">
            Fotografias ilustrativas provenientes do Wikimedia Commons.
            Consultar as páginas de origem para autoria e condições de
            reutilização. As fotografias não representam necessariamente
            animais criados em Angola.
          </p>
        </footer>
      </div>
    </main>
  );
}
