"use client";

import Link from "next/link";

const sinais = [
  {
    titulo: "Perda de apetite",
    texto:
      "Redução repentina do consumo de alimento pode indicar doença, stress térmico, problema digestivo, água inadequada ou alteração das condições de criação.",
  },
  {
    titulo: "Letargia",
    texto:
      "Patos muito parados, isolados do grupo, com dificuldade para caminhar ou que permanecem deitados devem ser observados imediatamente.",
  },
  {
    titulo: "Diarreia",
    texto:
      "Fezes anormais, muito líquidas, esverdeadas ou com presença de sangue exigem atenção e avaliação veterinária, especialmente quando vários animais são afetados.",
  },
  {
    titulo: "Problemas respiratórios",
    texto:
      "Tosse, espirros, dificuldade respiratória, secreções nasais ou esforço para respirar podem estar associados a doenças infecciosas ou problemas ambientais.",
  },
  {
    titulo: "Alterações neurológicas",
    texto:
      "Incoordenação, tremores, torção do pescoço, dificuldade para permanecer em pé ou paralisia são sinais que exigem avaliação rápida.",
  },
  {
    titulo: "Mortalidade anormal",
    texto:
      "Morte súbita ou aumento inesperado da mortalidade nunca deve ser tratado como normal. O lote deve ser isolado e o caso investigado.",
  },
];

const riscos = [
  {
    titulo: "Aves novas",
    texto:
      "Patos recém-adquiridos podem introduzir agentes infecciosos mesmo quando parecem saudáveis. Devem ser mantidos separados e observados antes da integração.",
  },
  {
    titulo: "Aves selvagens",
    texto:
      "O contacto com aves selvagens aumenta o risco de introdução de agentes infecciosos. Sempre que possível, deve existir barreira física entre o lote doméstico e aves externas.",
  },
  {
    titulo: "Água contaminada",
    texto:
      "Bebedouros sujos, água estagnada e contaminação por fezes podem favorecer problemas sanitários. A água de consumo deve permanecer limpa.",
  },
  {
    titulo: "Cama húmida",
    texto:
      "Os patos produzem fezes com elevada humidade. A cama húmida favorece deterioração das condições ambientais e exige substituição ou adição frequente de material seco.",
  },
  {
    titulo: "Alimento deteriorado",
    texto:
      "Rações e cereais húmidos, mofados ou mal armazenados podem provocar doenças e intoxicações. Os patos são particularmente sensíveis a determinadas toxinas.",
  },
  {
    titulo: "Visitantes e equipamentos",
    texto:
      "Botas, roupas, caixas, veículos e equipamentos podem transportar agentes infecciosos entre explorações ou entre diferentes lotes.",
  },
];

const doencas = [
  {
    titulo: "Hepatite viral dos patos",
    categoria: "Doença viral",
    texto:
      "É uma doença altamente contagiosa e particularmente grave em patinhos jovens. A evolução pode ser rápida e causar mortalidade elevada.",
  },
  {
    titulo: "Enterite viral dos patos",
    categoria: "Doença viral",
    texto:
      "Também conhecida como peste dos patos, pode provocar depressão, alterações digestivas e mortalidade. A prevenção depende de biossegurança e medidas sanitárias adequadas.",
  },
  {
    titulo: "Riemerella anatipestifer",
    categoria: "Doença bacteriana",
    texto:
      "Pode provocar depressão, secreções oculares, diarreia, perda de peso, alterações de coordenação e sinais neurológicos.",
  },
  {
    titulo: "Cólera aviária",
    categoria: "Doença bacteriana",
    texto:
      "Está associada à Pasteurella multocida e pode provocar doença aguda e mortalidade. Higiene, gestão da água e redução dos fatores de risco são importantes na prevenção.",
  },
  {
    titulo: "Colibacilose",
    categoria: "Doença bacteriana",
    texto:
      "Infecções por Escherichia coli podem afetar diferentes fases da produção. Boas condições sanitárias e maneio adequado ajudam a reduzir o risco.",
  },
  {
    titulo: "Aspergilose",
    categoria: "Doença fúngica",
    texto:
      "Está relacionada com a inalação de esporos de fungos presentes em materiais húmidos ou mofados. Cama e alimento devem ser mantidos secos e em boas condições.",
  },
];

export default function SanidadePatosPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(74,222,128,0.18),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-4xl">

            <div className="mb-5 flex flex-wrap gap-2 text-sm text-green-200">
              <Link href="/pecuaria" className="hover:text-white">
                Pecuária
              </Link>

              <span>/</span>

              <Link
                href="/pecuaria/patos"
                className="hover:text-white"
              >
                Patos
              </Link>

              <span>/</span>

              <span>Orientações técnicas</span>

              <span>/</span>

              <span>Sanidade</span>
            </div>

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-300">
              AGROINOVA ANGOLA · SANIDADE ANIMAL
            </p>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-white md:text-6xl">
              Sanidade dos Patos
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50 md:text-xl">
              Prevenção de doenças, biossegurança, higiene, qualidade da água,
              observação do lote, isolamento, sinais clínicos e resposta
              sanitária para sistemas de criação de patos.
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

        <div className="grid gap-8 lg:grid-cols-[1.45fr_1fr]">

          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.09)] md:p-10">

            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Princípio sanitário
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950">
              A melhor estratégia sanitária é prevenir
            </h2>

            <div className="mt-6 space-y-5 text-justify text-[16px] leading-8 text-slate-700">

              <p>
                A sanidade dos patos não começa quando aparece uma doença.
                Começa antes da entrada dos animais na exploração, com a
                escolha de aves saudáveis, instalações adequadas, água segura,
                alimento de boa qualidade e medidas de biossegurança.
              </p>

              <p>
                A prevenção reduz a possibilidade de introdução e disseminação
                de agentes infecciosos. Isso envolve controlar a entrada de
                pessoas, equipamentos, aves novas, outras espécies animais e
                aves selvagens.
              </p>

              <p>
                Cornell recomenda que os criadores estabeleçam um programa de
                biossegurança, mantenham animais novos em quarentena quando
                necessário, controlem o acesso à exploração e reduzam fatores
                ambientais que aumentam a suscetibilidade às doenças.
              </p>

            </div>
          </article>

          <aside className="rounded-3xl border border-green-200 bg-gradient-to-br from-green-50 to-white p-8 shadow-[0_20px_50px_rgba(22,101,52,0.10)]">

            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Regra principal
            </p>

            <h2 className="mt-3 text-2xl font-black text-slate-950">
              Não espere a doença aparecer
            </h2>

            <p className="mt-5 text-justify leading-8 text-slate-700">
              Um programa sanitário eficiente trabalha diariamente com
              prevenção, observação e registo.
            </p>

            <div className="mt-7 space-y-3">

              {[
                "Observar diariamente",
                "Manter água limpa",
                "Controlar a humidade",
                "Isolar animais suspeitos",
                "Controlar visitantes",
                "Registar mortalidade",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-green-100 bg-white px-4 py-3 font-semibold text-green-900 shadow-sm"
                >
                  {item}
                </div>
              ))}

            </div>
          </aside>
        </div>
      </section>

      {/* BIOSSEGURANÇA */}
      <section className="bg-white py-16">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Biossegurança
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
              Bloquear a entrada e a disseminação de doenças
            </h2>

            <p className="mt-5 text-justify leading-8 text-slate-600">
              A biossegurança é um conjunto de medidas destinadas a reduzir o
              risco de entrada, estabelecimento e disseminação de agentes
              infecciosos dentro da exploração.
            </p>

          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                titulo: "Entrada de animais",
                texto:
                  "Adquirir patos de origem conhecida e evitar misturar imediatamente animais novos com o lote existente.",
              },
              {
                titulo: "Quarentena",
                texto:
                  "Animais novos devem ser mantidos separados durante um período de observação antes da integração, especialmente quando a origem sanitária não é suficientemente conhecida.",
              },
              {
                titulo: "Pessoas",
                texto:
                  "Limitar visitantes e evitar que pessoas que estiveram recentemente em outras explorações entrem diretamente no lote.",
              },
              {
                titulo: "Calçado e roupa",
                texto:
                  "Utilizar botas e roupa de trabalho destinadas à exploração e manter procedimentos de limpeza e desinfeção.",
              },
              {
                titulo: "Equipamentos",
                texto:
                  "Não partilhar caixas, baldes, ferramentas ou equipamentos entre lotes sem limpeza e desinfeção adequadas.",
              },
              {
                titulo: "Aves selvagens",
                texto:
                  "Reduzir o contacto entre patos domésticos e aves selvagens, principalmente em instalações onde alimento e água ficam expostos.",
              },
            ].map((item) => (
              <article
                key={item.titulo}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.13)]"
              >

                <h3 className="text-xl font-black text-slate-950">
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

      {/* ROTINA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="max-w-3xl">

          <p className="text-sm font-bold uppercase tracking-wider text-green-700">
            Rotina diária
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
            O que observar todos os dias
          </h2>

        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {[
            [
              "Comportamento",
              "Observar se os animais estão ativos, alimentando-se, bebendo e movimentando-se normalmente.",
            ],
            [
              "Consumo",
              "Uma queda repentina no consumo de alimento ou água pode ser um dos primeiros sinais de alteração.",
            ],
            [
              "Fezes",
              "Observar alterações importantes na consistência, cor e presença de sangue.",
            ],
            [
              "Mortalidade",
              "Registar diariamente qualquer morte e investigar aumentos inesperados.",
            ],
          ].map(([titulo, texto]) => (
            <div
              key={titulo}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_14px_35px_rgba(15,23,42,0.07)]"
            >
              <h3 className="text-xl font-black text-slate-950">
                {titulo}
              </h3>

              <p className="mt-4 text-justify leading-7 text-slate-600">
                {texto}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* SINAIS */}
      <section className="bg-slate-950 py-16 text-white">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-wider text-green-300">
              Vigilância clínica
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Sinais que exigem atenção
            </h2>

            <p className="mt-5 text-justify leading-8 text-slate-300">
              O produtor não deve tentar diagnosticar sozinho uma doença apenas
              através de um sinal. O objetivo da observação diária é reconhecer
              alterações cedo e procurar assistência veterinária quando
              necessário.
            </p>

          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {sinais.map((item) => (
              <article
                key={item.titulo}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 shadow-[0_20px_45px_rgba(0,0,0,0.25)]"
              >

                <h3 className="text-xl font-black text-green-300">
                  {item.titulo}
                </h3>

                <p className="mt-4 text-justify leading-7 text-slate-300">
                  {item.texto}
                </p>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* DOENÇAS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="max-w-3xl">

          <p className="text-sm font-bold uppercase tracking-wider text-green-700">
            Principais problemas sanitários
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
            Doenças e condições importantes nos patos
          </h2>

          <p className="mt-5 text-justify leading-8 text-slate-600">
            Algumas doenças podem apresentar evolução rápida e mortalidade
            elevada. A confirmação deve ser feita por profissional habilitado
            e, quando necessário, através de diagnóstico laboratorial.
          </p>

        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {doencas.map((doenca) => (
            <article
              key={doenca.titulo}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
            >

              <p className="text-xs font-bold uppercase tracking-wider text-green-700">
                {doenca.categoria}
              </p>

              <h3 className="mt-3 text-xl font-black text-slate-950">
                {doenca.titulo}
              </h3>

              <p className="mt-4 text-justify leading-7 text-slate-600">
                {doenca.texto}
              </p>

            </article>
          ))}

        </div>
      </section>

      {/* ÁGUA E AMBIENTE */}
      <section className="bg-green-900 py-16">

        <div className="mx-auto max-w-6xl px-6 text-white lg:px-8">

          <p className="text-sm font-bold uppercase tracking-wider text-green-300">
            Ambiente
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Água, cama e ambiente influenciam diretamente a sanidade
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/[0.08] p-7">
              <h3 className="text-xl font-black text-white">
                Água de bebida
              </h3>

              <p className="mt-4 text-justify leading-7 text-green-50">
                Deve estar protegida contra contaminação por fezes, lama,
                matéria orgânica e animais. Os bebedouros devem ser limpos com
                frequência.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.08] p-7">
              <h3 className="text-xl font-black text-white">
                Cama seca
              </h3>

              <p className="mt-4 text-justify leading-7 text-green-50">
                Os patos produzem fezes muito húmidas. Por isso, é necessário
                controlar a humidade da cama, adicionar material seco e
                substituir zonas deterioradas.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.08] p-7">
              <h3 className="text-xl font-black text-white">
                Ventilação
              </h3>

              <p className="mt-4 text-justify leading-7 text-green-50">
                A renovação adequada do ar ajuda a controlar humidade,
                amoníaco, poeira e condições ambientais que podem aumentar o
                stress e favorecer problemas respiratórios.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ALIMENTO E TOXINAS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-8 lg:grid-cols-2">

          <article className="rounded-3xl border border-red-100 bg-red-50 p-8 shadow-[0_18px_45px_rgba(127,29,29,0.07)]">

            <p className="text-sm font-bold uppercase tracking-wider text-red-700">
              Segurança alimentar
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950">
              Nunca fornecer alimento mofado
            </h2>

            <p className="mt-5 text-justify leading-8 text-slate-700">
              Cereais, rações e matérias-primas armazenados em condições
              húmidas podem desenvolver fungos e produzir micotoxinas.
              Cornell destaca que os patos são particularmente sensíveis a
              determinadas toxinas presentes em alimentos contaminados.
            </p>

            <div className="mt-6 space-y-3">

              {[
                "Não utilizar milho com sinais de bolor.",
                "Proteger a ração da chuva e humidade.",
                "Manter os sacos sobre estrados.",
                "Controlar roedores e insetos.",
                "Não armazenar ração diretamente no chão.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-white p-4 font-semibold text-slate-700"
                >
                  {item}
                </div>
              ))}

            </div>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">

            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Controlo ambiental
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950">
              Cuidado com produtos químicos
            </h2>

            <p className="mt-5 text-justify leading-8 text-slate-700">
              Produtos utilizados para controlo de insetos e roedores devem
              ser escolhidos e utilizados de forma segura. Os patos não devem
              ter acesso a produtos químicos, iscos ou áreas recentemente
              tratadas sem respeitar as orientações de segurança do produto.
            </p>

            <div className="mt-6 rounded-2xl border border-green-100 bg-green-50 p-6">
              <p className="font-bold text-green-900">
                Nunca aplicar medicamentos ou antibióticos por iniciativa
                própria.
              </p>

              <p className="mt-3 text-justify leading-7 text-green-900/80">
                O tratamento depende da causa. O uso inadequado de
                antimicrobianos pode ser ineficaz, prejudicar os animais e
                contribuir para resistência antimicrobiana.
              </p>
            </div>

          </article>

        </div>
      </section>

      {/* QUANDO ISOLAR */}
      <section className="bg-white py-16">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="rounded-[2rem] border border-green-200 bg-gradient-to-br from-green-50 via-white to-slate-50 p-8 shadow-[0_24px_60px_rgba(22,101,52,0.10)] md:p-12">

            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Resposta rápida
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
              O que fazer quando aparecem animais doentes?
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2">

              {[
                "Separar imediatamente os animais suspeitos quando isso for possível.",
                "Evitar transportar animais doentes para outra exploração.",
                "Suspender a entrada de novos animais até compreender o problema.",
                "Limitar visitantes e movimentação de pessoas e equipamentos.",
                "Registar número de animais doentes e mortos.",
                "Contactar um médico veterinário ou serviço veterinário competente.",
                "Guardar informação sobre origem dos animais, alimentação e alterações recentes.",
                "Não administrar antibióticos ou outros medicamentos sem orientação adequada.",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <span className="font-black text-green-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-2 text-justify leading-7 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* ANGOLA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-[0_25px_65px_rgba(15,23,42,0.25)] md:p-12">

          <p className="text-sm font-bold uppercase tracking-wider text-green-300">
            Realidade angolana
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Sanidade deve fazer parte da gestão da exploração
          </h2>

          <div className="mt-7 grid gap-8 lg:grid-cols-2">

            <div className="space-y-5 text-justify leading-8 text-slate-300">

              <p>
                Em sistemas familiares e de pequena escala, muitas perdas
                sanitárias podem passar sem diagnóstico porque não existe
                registo sistemático de mortalidade, consumo de alimento,
                consumo de água e sinais clínicos.
              </p>

              <p>
                A criação de um simples caderno sanitário pode melhorar
                significativamente a capacidade do produtor de reconhecer
                alterações no lote e fornecer informação útil ao técnico ou
                médico veterinário.
              </p>

              <p>
                O produtor deve procurar integrar a exploração com os serviços
                veterinários locais, especialmente perante mortalidade elevada,
                doença de evolução rápida ou suspeita de doença contagiosa.
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-7">

              <h3 className="text-xl font-black text-green-300">
                Registos recomendados
              </h3>

              <div className="mt-5 space-y-3">

                {[
                  "Data de entrada dos animais",
                  "Origem dos patos",
                  "Número de animais",
                  "Idade e finalidade do lote",
                  "Mortalidade diária",
                  "Doenças observadas",
                  "Vacinações realizadas",
                  "Tratamentos realizados",
                  "Alterações na alimentação",
                  "Alterações na água ou instalações",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-slate-200"
                  >
                    {item}
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="bg-green-900 py-16">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <p className="text-sm font-bold uppercase tracking-wider text-green-300">
            Checklist sanitário
          </p>

          <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
            A exploração está preparada?
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            {[
              "Existe local separado para receber animais novos?",
              "A água de bebida é limpa e protegida?",
              "Os bebedouros são limpos regularmente?",
              "A cama permanece seca?",
              "Existe controlo de roedores?",
              "O contacto com aves selvagens é reduzido?",
              "Visitantes são controlados?",
              "Existe roupa ou calçado próprio para a exploração?",
              "A mortalidade é registada?",
              "Existe contacto com um técnico ou médico veterinário?",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.08] p-5 text-green-50 shadow-sm"
              >
                {item}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="border-t border-slate-200 bg-slate-50 py-12">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <h2 className="text-2xl font-black text-slate-950">
            Fontes técnicas
          </h2>

          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">

            <p>
              Cornell University College of Veterinary Medicine — Duck Health
              Care.
            </p>

            <p>
              Cornell University College of Veterinary Medicine — Duck Housing
              and Management.
            </p>

            <p>
              FAO — Biosecurity and One Health.
            </p>

            <p>
              FAO — Animal Health and Biosecurity in terrestrial animal value
              chains.
            </p>

            <p>
              University of Kentucky / Poultry Extension — Biosecurity for
              Small Poultry Flocks.
            </p>

          </div>

          <div className="mt-7 flex flex-wrap gap-3">

            <a
              href="https://www.vet.cornell.edu/animal-health-diagnostic-center/programs/duck-research-lab/health-care"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-800 px-5 py-3 font-bold text-white hover:bg-green-700"
            >
              Cornell — Saúde dos Patos
            </a>

            <a
              href="https://www.fao.org/one-health/areas-of-work/biosecurity/en"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-700 hover:bg-slate-100"
            >
              FAO — Biossegurança
            </a>

          </div>

        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="bg-white py-12">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">

          <Link
            href="/pecuaria/patos/orientacoes/alimentacao"
            className="rounded-xl border border-slate-300 px-6 py-3 text-center font-bold text-slate-700 transition hover:bg-slate-100"
          >
            Voltar para Alimentação
          </Link>

          <Link
            href="/pecuaria/patos/orientacoes/reproducao"
            className="rounded-xl bg-green-800 px-6 py-3 text-center font-bold text-white transition hover:bg-green-700"
          >
            Próxima orientação: Reprodução
          </Link>

        </div>

      </section>

    </main>
  );
}