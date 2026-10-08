"use client";

import Link from "next/link";

const principios = [
  {
    titulo: "Prevenção",
    texto:
      "A biossegurança deve impedir ou reduzir a possibilidade de entrada de agentes infecciosos na exploração antes que ocorram problemas sanitários.",
  },
  {
    titulo: "Controlo de acesso",
    texto:
      "Pessoas, veículos, equipamentos e materiais que entram na exploração devem estar sujeitos a procedimentos de controlo.",
  },
  {
    titulo: "Higiene",
    texto:
      "Limpeza e desinfecção de instalações, equipamentos, calçado e materiais reduzem a possibilidade de transmissão de agentes infecciosos.",
  },
  {
    titulo: "Separação",
    texto:
      "As áreas limpas e sujas devem ser organizadas de forma a reduzir o cruzamento de pessoas, materiais e resíduos.",
  },
  {
    titulo: "Vigilância",
    texto:
      "Alterações no comportamento, consumo de água, consumo de ração, produção e mortalidade devem ser detectadas rapidamente.",
  },
  {
    titulo: "Registos",
    texto:
      "Registos de visitantes, limpeza, vacinação, mortalidade, tratamentos e movimentação de aves ajudam a investigar problemas sanitários.",
  },
];

const riscos = [
  {
    fonte: "Pessoas",
    risco:
      "Roupa, calçado, mãos e equipamentos podem transportar agentes infecciosos entre explorações.",
    controlo:
      "Controlar acesso, utilizar roupa e calçado apropriados e aplicar procedimentos de higiene.",
  },
  {
    fonte: "Veículos",
    risco:
      "Pneus e superfícies dos veículos podem entrar em contacto com fezes, cama ou outros materiais contaminados.",
    controlo:
      "Limitar circulação e realizar limpeza e desinfecção quando necessário.",
  },
  {
    fonte: "Aves",
    risco:
      "Introdução de aves sem controlo sanitário pode introduzir doenças na exploração.",
    controlo:
      "Controlar origem das aves e adoptar procedimentos adequados para novas entradas.",
  },
  {
    fonte: "Roedores",
    risco:
      "Podem transportar agentes infecciosos e contaminar ração, água e instalações.",
    controlo:
      "Implementar programa contínuo de controlo de roedores.",
  },
  {
    fonte: "Aves silvestres",
    risco:
      "Podem entrar em contacto com alimento, água, instalações e aves domésticas.",
    controlo:
      "Reduzir pontos de acesso e manter ração e água protegidas.",
  },
  {
    fonte: "Insectos",
    risco:
      "Moscas, escaravelhos e outros insectos podem participar na disseminação de agentes infecciosos.",
    controlo:
      "Manter higiene, gestão de resíduos e controlo integrado de pragas.",
  },
];

const rotina = [
  "Verificar o comportamento das aves.",
  "Observar mortalidade anormal.",
  "Controlar consumo de água.",
  "Controlar consumo de ração.",
  "Verificar fezes e cama.",
  "Observar sinais respiratórios.",
  "Verificar equipamentos de água.",
  "Verificar presença de roedores.",
  "Verificar entrada de pessoas.",
  "Remover aves mortas de forma adequada.",
];

const limpeza = [
  {
    titulo: "Limpeza",
    texto:
      "Remover matéria orgânica, poeira, cama contaminada, restos de ração e resíduos antes da aplicação de desinfectantes.",
  },
  {
    titulo: "Lavagem",
    texto:
      "Utilizar água e produtos de limpeza apropriados para remover sujidade aderida às superfícies e equipamentos.",
  },
  {
    titulo: "Desinfecção",
    texto:
      "Aplicar desinfectante adequado, respeitando concentração, tempo de contacto e recomendações do fabricante.",
  },
  {
    titulo: "Secagem",
    texto:
      "Permitir secagem adequada das superfícies e equipamentos antes da entrada das aves sempre que o procedimento técnico o exigir.",
  },
];

export default function BiossegurancaPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <img
            src="/imagens/galinhas/santo-antonio.jpg"
            alt="Exploração avícola em Angola"
            className="h-full w-full object-cover opacity-35"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-300">
              Orientações técnicas · Avicultura
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Biossegurança
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
              Princípios, procedimentos e práticas para reduzir a entrada,
              circulação e disseminação de agentes infecciosos nas explorações
              de galinhas.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/pecuaria/galinhas/orientacoes"
                className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-green-50"
              >
                Orientações técnicas
              </Link>

              <Link
                href="/pecuaria/galinhas/orientacoes/sanidade"
                className="rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Sanidade
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="border-b bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-4 text-sm text-slate-600 lg:px-8">
          <Link href="/pecuaria" className="hover:text-green-700">
            Pecuária
          </Link>

          <span className="mx-2">/</span>

          <Link
            href="/pecuaria/galinhas/orientacoes"
            className="hover:text-green-700"
          >
            Orientações técnicas
          </Link>

          <span className="mx-2">/</span>

          <span className="font-medium text-slate-900">
            Biossegurança
          </span>
        </div>
      </div>

      {/* INTRODUÇÃO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-green-700">
              Saúde do lote
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Biossegurança começa antes de aparecer uma doença
            </h2>

            <div className="mt-6 space-y-5 text-justify leading-8 text-slate-700">
              <p>
                Biossegurança é o conjunto de medidas destinadas a reduzir a
                probabilidade de introdução e disseminação de agentes
                infecciosos numa exploração. Na avicultura, estas medidas
                devem fazer parte da rotina diária e não apenas ser aplicadas
                quando existe suspeita de doença.
              </p>

              <p>
                Uma exploração pode possuir vacinação e assistência veterinária
                e continuar vulnerável se houver entrada descontrolada de
                pessoas, equipamentos contaminados, aves de origem
                desconhecida, roedores ou materiais provenientes de outras
                explorações.
              </p>

              <p>
                Por isso, a biossegurança deve ser entendida como um sistema
                contínuo de prevenção, vigilância, higiene, controlo de acesso
                e gestão de riscos.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border">
            <img
              src="/imagens/galinhas/africa-press.jpg"
              alt="Produção avícola em Angola"
              className="h-[420px] w-full object-cover"
            />

            <div className="border-t bg-white p-5">
              <p className="text-sm font-semibold text-slate-900">
                Biossegurança e organização da exploração
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                A organização física da exploração deve facilitar o controlo
                sanitário e reduzir contactos desnecessários.
              </p>

              <p className="mt-3 text-xs text-slate-500">
                Fonte da imagem: Africa-Press Angola.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCÍPIOS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-green-700">
              Fundamentos
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Seis princípios essenciais
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {principios.map((item) => (
              <article
                key={item.titulo}
                className="rounded-2xl border bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900">
                  {item.titulo}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CADEIA DE RISCO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-green-700">
            Avaliação de risco
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            De onde podem vir os agentes infecciosos?
          </h2>

          <p className="mt-5 text-justify leading-8 text-slate-700">
            O primeiro passo de um programa de biossegurança é identificar os
            possíveis caminhos de entrada e circulação de agentes infecciosos.
            O produtor deve observar a sua própria exploração e estabelecer
            medidas de controlo proporcionais aos riscos existentes.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-2xl border">
          <table className="w-full min-w-[900px] border-collapse text-left text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="border-b px-5 py-4 font-semibold">
                  Fonte de risco
                </th>

                <th className="border-b px-5 py-4 font-semibold">
                  Risco
                </th>

                <th className="border-b px-5 py-4 font-semibold">
                  Medida de controlo
                </th>
              </tr>
            </thead>

            <tbody>
              {riscos.map((item) => (
                <tr
                  key={item.fonte}
                  className="odd:bg-white even:bg-slate-50"
                >
                  <td className="border-b px-5 py-4 font-semibold text-slate-900">
                    {item.fonte}
                  </td>

                  <td className="border-b px-5 py-4 text-slate-600">
                    {item.risco}
                  </td>

                  <td className="border-b px-5 py-4 text-slate-600">
                    {item.controlo}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ACESSO */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-green-300">
              Controlo de acesso
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Quem entra na exploração?
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Quanto maior o número de pessoas e contactos externos, maior
              deve ser a atenção dada ao controlo de acesso. Visitantes,
              técnicos, comerciantes, transportadores e trabalhadores podem
              transportar agentes infecciosos entre locais.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                titulo: "Registo",
                texto:
                  "Registar visitantes e trabalhadores externos sempre que o sistema de biossegurança da exploração o exigir.",
              },
              {
                titulo: "Roupa",
                texto:
                  "Utilizar roupa apropriada e evitar circulação com vestuário potencialmente contaminado.",
              },
              {
                titulo: "Calçado",
                texto:
                  "Utilizar calçado dedicado ou aplicar procedimentos eficazes de limpeza e desinfecção.",
              },
              {
                titulo: "Circulação",
                texto:
                  "Definir percursos para reduzir o contacto entre áreas limpas, áreas sujas e resíduos.",
              },
            ].map((item) => (
              <article
                key={item.titulo}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="font-bold">{item.titulo}</h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LIMPEZA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-green-700">
            Higiene
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Limpeza e desinfecção
          </h2>

          <p className="mt-5 text-justify leading-8 text-slate-700">
            A desinfecção não substitui a limpeza. A matéria orgânica pode
            reduzir a eficácia de determinados desinfectantes, razão pela qual
            a remoção da sujidade deve fazer parte do processo.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {limpeza.map((item) => (
            <article
              key={item.titulo}
              className="rounded-2xl border bg-white p-6"
            >
              <h3 className="text-lg font-bold text-slate-900">
                {item.titulo}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.texto}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* EQUIPAMENTOS */}
      <section className="bg-green-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Equipamentos também podem transmitir doenças
              </h2>

              <p className="mt-5 text-justify leading-8 text-slate-700">
                Baldes, caixas, ferramentas, equipamentos de alimentação,
                equipamentos veterinários e outros materiais podem transportar
                matéria orgânica e agentes infecciosos. Sempre que possível,
                os equipamentos devem ser dedicados a cada área ou correctamente
                higienizados antes de serem utilizados noutro local.
              </p>
            </div>

            <div className="rounded-2xl border border-green-100 bg-white p-7">
              <h3 className="text-xl font-bold text-slate-900">
                Perguntas para o produtor
              </h3>

              <div className="mt-5 space-y-4">
                {[
                  "O equipamento entra noutras explorações?",
                  "É lavado depois da utilização?",
                  "É desinfectado quando necessário?",
                  "É armazenado numa área limpa?",
                  "Existe equipamento exclusivo para áreas contaminadas?",
                ].map((item) => (
                  <div
                    key={item}
                    className="border-b pb-4 text-sm leading-6 text-slate-700 last:border-b-0"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROEDORES E INSECTOS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <article className="rounded-2xl border p-7">
            <h2 className="text-2xl font-bold text-slate-900">
              Controlo de roedores
            </h2>

            <p className="mt-4 text-justify leading-8 text-slate-700">
              Roedores podem contaminar ração, água, equipamentos e
              superfícies. O controlo deve combinar prevenção, higiene,
              eliminação de fontes de alimento e abrigo e utilização adequada
              de medidas de controlo.
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-700">
              <div>• Manter ração protegida.</div>
              <div>• Corrigir buracos e pontos de entrada.</div>
              <div>• Remover restos de alimento.</div>
              <div>• Manter áreas externas limpas.</div>
              <div>• Monitorizar sinais de infestação.</div>
            </div>
          </article>

          <article className="rounded-2xl border p-7">
            <h2 className="text-2xl font-bold text-slate-900">
              Controlo de insectos
            </h2>

            <p className="mt-4 text-justify leading-8 text-slate-700">
              A gestão de moscas e outros insectos depende principalmente de
              higiene, gestão correcta da matéria orgânica, controlo da
              humidade e redução dos locais onde estes organismos se podem
              reproduzir.
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-700">
              <div>• Remover matéria orgânica acumulada.</div>
              <div>• Evitar água estagnada.</div>
              <div>• Manter resíduos sob controlo.</div>
              <div>• Corrigir fugas de água.</div>
              <div>• Utilizar controlo integrado de pragas.</div>
            </div>
          </article>
        </div>
      </section>

      {/* AVES SILVESTRES */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-green-700">
              Fauna
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Aves silvestres e outros animais
            </h2>

            <p className="mt-5 text-justify leading-8 text-slate-700">
              A presença de aves silvestres, cães, gatos e outros animais nas
              proximidades dos aviários deve ser controlada. O acesso a ração,
              água, cadáveres e resíduos pode criar oportunidades para
              transmissão de agentes infecciosos.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Proteger depósitos de ração.",
              "Impedir acesso aos aviários.",
              "Manter portas e redes em boas condições.",
              "Não deixar resíduos alimentares expostos.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border bg-white p-5 text-sm leading-7 text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÁGUA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="overflow-hidden rounded-2xl border">
            <img
              src="/imagens/galinhas/cuanza-sul.jpg"
              alt="Produção avícola em Angola"
              className="h-full min-h-[380px] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-green-700">
              Água
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              A água também faz parte da biossegurança
            </h2>

            <div className="mt-6 space-y-5 text-justify leading-8 text-slate-700">
              <p>
                Depósitos abertos, linhas contaminadas e bebedouros sujos
                podem contribuir para problemas sanitários. O sistema deve ser
                protegido desde a origem até ao ponto de consumo.
              </p>

              <p>
                A limpeza periódica das linhas e depósitos deve seguir um
                procedimento técnico adequado. Quando são utilizados produtos
                para tratamento da água, devem ser respeitadas as instruções
                técnicas e a compatibilidade com o sistema de abastecimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROTINA DIÁRIA */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-green-300">
              Rotina
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Vigilância diária do lote
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              A observação diária permite identificar alterações antes que
              atinjam grande parte do lote.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {rotina.map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-xs font-semibold text-green-300">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-200">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOENÇA SUSPEITA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-green-700">
            Resposta sanitária
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            O que fazer perante suspeita de doença?
          </h2>

          <p className="mt-5 text-justify leading-8 text-slate-700">
            Quando surgem sinais anormais, o produtor não deve depender apenas
            de tentativa e erro. A situação deve ser avaliada por um técnico
            ou médico veterinário, principalmente quando existe aumento
            inesperado de mortalidade ou sinais compatíveis com doença
            infecciosa.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              numero: "01",
              titulo: "Observar",
              texto:
                "Identificar sinais clínicos e alterações no comportamento ou desempenho.",
            },
            {
              numero: "02",
              titulo: "Isolar",
              texto:
                "Evitar movimentações desnecessárias de aves, pessoas e equipamentos.",
            },
            {
              numero: "03",
              titulo: "Registar",
              texto:
                "Anotar mortalidade, produção, consumo de água e ração e outros sinais relevantes.",
            },
            {
              numero: "04",
              titulo: "Consultar",
              texto:
                "Contactar assistência veterinária ou os serviços competentes para avaliação.",
            },
          ].map((item) => (
            <article
              key={item.numero}
              className="rounded-2xl border bg-slate-50 p-6"
            >
              <span className="text-sm font-bold text-green-700">
                {item.numero}
              </span>

              <h3 className="mt-3 font-bold text-slate-900">
                {item.titulo}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.texto}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* REALIDADE ANGOLA */}
      <section className="bg-green-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-green-300">
              Realidade angolana
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Biossegurança é importante tanto na pequena como na grande
              exploração
            </h2>

            <div className="mt-7 space-y-5 text-justify leading-8 text-green-50">
              <p>
                O tamanho da exploração não elimina os riscos sanitários. Uma
                pequena unidade pode aplicar medidas simples e eficazes,
                enquanto uma exploração empresarial pode implementar sistemas
                mais estruturados de controlo de acesso, limpeza, registos e
                monitorização.
              </p>

              <p>
                Para Angola, a formação dos produtores e trabalhadores é
                fundamental. Uma medida de biossegurança só funciona quando
                todos compreendem por que motivo deve ser aplicada e como deve
                ser executada.
              </p>

              <p>
                O desenvolvimento da avicultura nacional depende não apenas de
                aumentar o número de aves, mas também de melhorar a capacidade
                de prevenção, vigilância e resposta aos problemas sanitários.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-green-700">
            Checklist
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Verificação de biossegurança
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Esta lista pode ser utilizada como ponto de partida para uma
            avaliação interna da exploração.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border">
          <div className="grid md:grid-cols-2">
            {[
              "Existe controlo de entrada na exploração?",
              "Os visitantes são registados?",
              "Existe calçado ou roupa apropriada?",
              "As instalações são limpas regularmente?",
              "Os equipamentos são higienizados?",
              "A ração está protegida?",
              "A água está protegida?",
              "Existe controlo de roedores?",
              "Existe controlo de insectos?",
              "As aves silvestres têm acesso ao aviário?",
              "Existe procedimento para aves mortas?",
              "Existe registo de mortalidade?",
              "Existe programa sanitário?",
              "Existe contacto com assistência veterinária?",
              "Existe procedimento para suspeita de doença?",
              "As áreas limpas e sujas estão organizadas?",
            ].map((item) => (
              <div
                key={item}
                className="border-b bg-white p-5 text-sm text-slate-700 even:bg-slate-50"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTIGAÇÃO */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Temas para estudantes e investigadores
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Avaliação da biossegurança em explorações avícolas familiares.",
              "Biossegurança em explorações comerciais de Angola.",
              "Conhecimento dos produtores sobre prevenção de doenças avícolas.",
              "Principais vias de entrada de agentes infecciosos.",
              "Controlo de roedores em explorações avícolas.",
              "Qualidade microbiológica da água utilizada na avicultura.",
              "Avaliação de práticas de limpeza e desinfecção.",
              "Impacto da biossegurança sobre a mortalidade dos lotes.",
              "Formação dos trabalhadores em biossegurança.",
            ].map((item) => (
              <article
                key={item}
                className="rounded-xl border bg-white p-5 text-sm leading-7 text-slate-700"
              >
                {item}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">
          Fontes técnicas
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <a
            href="https://www.fao.org/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border p-6 hover:border-green-600"
          >
            <h3 className="font-bold text-slate-900">FAO</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Referências internacionais para produção animal, biossegurança,
              saúde animal e boas práticas.
            </p>
          </a>

          <a
            href="https://www.woah.org/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border p-6 hover:border-green-600"
          >
            <h3 className="font-bold text-slate-900">WOAH</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Referência internacional para saúde animal, prevenção e controlo
              de doenças.
            </p>
          </a>

          <a
            href="https://minagrif.gov.ao/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border p-6 hover:border-green-600"
          >
            <h3 className="font-bold text-slate-900">MINAGRIF</h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Informação institucional sobre agricultura, pecuária e sanidade
              animal em Angola.
            </p>
          </a>
        </div>
      </section>

      {/* NAVEGAÇÃO */}
      <section className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900">
            Continuar nas orientações de avicultura
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/pecuaria/galinhas/orientacoes/corte"
              className="rounded-lg border px-5 py-3 text-sm font-semibold hover:border-green-600 hover:text-green-700"
            >
              Frango de corte
            </Link>

            <Link
              href="/pecuaria/galinhas/orientacoes/poedeiras"
              className="rounded-lg border px-5 py-3 text-sm font-semibold hover:border-green-600 hover:text-green-700"
            >
              Poedeiras
            </Link>

            <Link
              href="/pecuaria/galinhas/orientacoes/alimentacao"
              className="rounded-lg border px-5 py-3 text-sm font-semibold hover:border-green-600 hover:text-green-700"
            >
              Alimentação
            </Link>

            <Link
              href="/pecuaria/galinhas/orientacoes/sanidade"
              className="rounded-lg border px-5 py-3 text-sm font-semibold hover:border-green-600 hover:text-green-700"
            >
              Sanidade
            </Link>

            <Link
              href="/pecuaria/galinhas/orientacoes/instalacoes"
              className="rounded-lg border px-5 py-3 text-sm font-semibold hover:border-green-600 hover:text-green-700"
            >
              Instalações
            </Link>

            <Link
              href="/pecuaria/galinhas/orientacoes"
              className="rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white hover:bg-green-800"
            >
              Todas as orientações
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}