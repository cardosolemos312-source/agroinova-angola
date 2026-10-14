
"use client";

import { useState } from "react";
import Link from "next/link";

const imagens = {
  capa:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Water_buffalo_%28Bubalus_bubalis%29.jpg",
  individuo:
    "https://commons.wikimedia.org/wiki/Special:FilePath/A_Murrah_buffalo.jpg",
  ambiente:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Asian_water_buffalo_%28Bubalus_bubalis%29_in_shallow_water_04.jpg",
};

const temas = [
  {
    numero: "01",
    titulo: "Vigilância clínica e observação diária",
    resumo: "Aprender a reconhecer alterações no comportamento e no estado físico.",
    introducao:
      "A vigilância clínica consiste na observação sistemática dos animais para identificar alterações que possam indicar dor, doença, lesão, stress ou dificuldades de adaptação. A observação não substitui o exame clínico, mas permite detetar sinais que justificam uma avaliação mais aprofundada.",
    pontos: [
      "Comportamento: comparar a atividade habitual com situações de isolamento, apatia, agitação ou dificuldade em acompanhar o grupo.",
      "Alimentação e abeberamento: verificar redução do consumo, dificuldade em mastigar ou recusa persistente de alimento e água.",
      "Locomoção: observar claudicação, rigidez, dificuldade em levantar-se, feridas nos membros ou relutância em caminhar.",
      "Respiração: reconhecer tosse persistente, corrimento nasal anormal, esforço respiratório ou respiração diferente do padrão habitual.",
      "Olhos, pele e pelo: procurar secreções, lesões, inchaços, áreas sem pelo, feridas ou presença excessiva de parasitas externos.",
      "Fezes e urina: observar alterações persistentes na consistência das fezes, diarreia, sangue ou dificuldade aparente na eliminação.",
      "Condição corporal: acompanhar a evolução do estado corporal, especialmente em animais jovens, fêmeas gestantes e animais em lactação.",
    ],
    alerta:
      "Um sinal isolado não confirma uma doença. O histórico, o exame clínico, o contexto epidemiológico e, quando indicado, os exames laboratoriais são necessários para estabelecer o diagnóstico.",
  },
  {
    numero: "02",
    titulo: "Vacinação e medicina preventiva",
    resumo: "Organizar a prevenção segundo os riscos sanitários da exploração.",
    introducao:
      "A vacinação procura preparar o sistema imunitário para responder a determinados agentes infecciosos. A sua utilidade depende da doença, da vacina disponível, da situação epidemiológica e das características do efetivo. Não existe um calendário universal que possa ser aplicado automaticamente a todas as explorações.",
    pontos: [
      "Solicitar ao médico veterinário um plano sanitário ajustado à espécie, à região e aos riscos identificados.",
      "Confirmar a indicação, a espécie-alvo, a dose, a via de administração e a idade recomendada no rótulo e na informação técnica do produto.",
      "Respeitar as condições de conservação e transporte estabelecidas pelo fabricante.",
      "Verificar a validade, a integridade da embalagem e as condições de utilização após a abertura.",
      "Registar a identificação do animal ou do grupo, a data, o produto, o lote e o profissional responsável.",
      "Acompanhar os animais após a intervenção e comunicar reações adversas suspeitas.",
      "Cumprir as instruções oficiais relativas a doenças de declaração obrigatória e medidas sanitárias.",
    ],
    alerta:
      "Não recomendar vacinas, doses ou intervalos sem conhecer o produto, a doença-alvo e a orientação veterinária aplicável à exploração.",
  },
  {
    numero: "03",
    titulo: "Parasitas internos e externos",
    resumo: "Relacionar sinais clínicos, ambiente e avaliação parasitológica.",
    introducao:
      "Os parasitas podem afetar a condição corporal, o crescimento, a produtividade e o bem-estar. A importância do parasitismo depende das espécies parasitárias presentes, do ambiente, da idade dos animais, do maneio e do estado imunológico. Os sinais observados devem ser interpretados com prudência.",
    pontos: [
      "Inspecionar a pele e os locais onde as carraças se podem fixar, sem confundir qualquer lesão com uma infestação confirmada.",
      "Acompanhar a condição corporal, o crescimento e o desempenho dos animais ao longo do tempo.",
      "Investigar, com apoio veterinário, diarreia persistente, perda de peso, anemia suspeita ou queda de produção.",
      "Considerar exames fecais ou outros exames adequados quando forem necessários para identificar o problema.",
      "Selecionar medicamentos veterinários autorizados para a espécie e para a indicação pretendida.",
      "Registar tratamentos, resultados e eventuais falhas de resposta.",
      "Respeitar os períodos de carência para carne ou leite, quando aplicáveis, e as precauções do produto.",
    ],
    alerta:
      "Não utilizar antiparasitários de forma indiscriminada. A escolha do produto e a estratégia de controlo devem considerar o diagnóstico, a eficácia e o risco de resistência.",
  },
  {
    numero: "04",
    titulo: "Higiene, instalações e biossegurança",
    resumo: "Reduzir as oportunidades de entrada e transmissão de agentes infecciosos.",
    introducao:
      "A biossegurança reúne medidas destinadas a diminuir a introdução, a disseminação e a saída de agentes patogénicos de uma exploração. Inclui a gestão dos movimentos de animais e pessoas, a limpeza, a desinfeção, os equipamentos e o controlo de fontes de contaminação.",
    pontos: [
      "Manter as zonas de repouso, alimentação e abeberamento em condições higiénicas adequadas.",
      "Remover matéria orgânica antes da desinfeção, pois a sujidade pode reduzir a eficácia de determinados desinfetantes.",
      "Utilizar produtos autorizados de acordo com as instruções, a concentração, o tempo de contacto e as precauções de segurança.",
      "Evitar a partilha descontrolada de equipamentos entre animais suspeitos e animais sem sinais clínicos.",
      "Definir procedimentos de entrada para animais novos, incluindo quarentena e exames quando indicados pelo veterinário.",
      "Controlar o acesso de visitantes e manter registos de movimentos relevantes.",
      "Armazenar medicamentos, produtos químicos e materiais de limpeza em locais seguros, afastados dos alimentos e da água.",
    ],
    alerta:
      "A duração da quarentena, os exames necessários e as medidas de desinfeção devem ser definidos segundo o risco sanitário, as orientações oficiais e a avaliação profissional.",
  },
  {
    numero: "05",
    titulo: "Isolamento, notificação e resposta",
    resumo: "Organizar uma resposta segura perante um animal suspeito.",
    introducao:
      "Quando surge um sinal preocupante, a prioridade é proteger o animal, reduzir contactos desnecessários e procurar assistência qualificada. A resposta deve ser proporcional ao risco e não pode atrasar a comunicação de situações potencialmente contagiosas.",
    pontos: [
      "Registar a data, o animal, os sinais observados e a evolução do quadro.",
      "Se for seguro e recomendado, separar o animal suspeito sem provocar stress ou ferimentos adicionais.",
      "Disponibilizar água e condições de repouso apropriadas, salvo instrução clínica diferente.",
      "Limitar o movimento de animais, pessoas e equipamentos quando houver suspeita de doença transmissível.",
      "Contactar o médico veterinário e cumprir as instruções dos serviços veterinários oficiais.",
      "Registar outros animais afetados, mortes, introduções recentes e contactos relevantes.",
      "Não vender, transportar, abater ou movimentar animais suspeitos em violação das instruções sanitárias aplicáveis.",
    ],
    alerta:
      "Vários animais doentes num curto período, mortes súbitas ou suspeita de doença contagiosa justificam contacto urgente com o médico veterinário e, quando aplicável, com a autoridade veterinária competente.",
  },
  {
    numero: "06",
    titulo: "Bem-estar e contenção segura",
    resumo: "Proteger animais e profissionais durante o maneio sanitário.",
    introducao:
      "A contenção permite realizar determinados exames e procedimentos, mas também pode provocar lesões e stress se for mal executada. Os bubalinos são animais de grande porte, fortes e capazes de reagir rapidamente quando assustados ou encurralados.",
    pontos: [
      "Utilizar instalações resistentes, sem pontas, obstáculos perigosos ou superfícies escorregadias.",
      "Planear previamente a intervenção e reduzir ruídos, movimentos bruscos e esperas prolongadas.",
      "Garantir vias de fuga para os profissionais e evitar permanecer em zonas de esmagamento.",
      "Não improvisar cordas, estruturas ou técnicas de contenção sem formação apropriada.",
      "Usar pessoal experiente e equipamento adequado ao tamanho, temperamento e condição física do animal.",
      "Observar sinais de fadiga, stress intenso, dificuldade respiratória ou incapacidade de se manter em pé.",
      "Interromper o procedimento e pedir ajuda profissional quando a segurança estiver comprometida.",
    ],
    alerta:
      "Não realizar procedimentos invasivos, administrar tratamentos ou efetuar contenções perigosas sem competência e orientação adequadas.",
  },
];

const sinaisUrgentes = [
  "Dificuldade respiratória acentuada",
  "Incapacidade de se levantar",
  "Convulsões ou alterações neurológicas graves",
  "Hemorragia importante ou traumatismo grave",
  "Diarreia intensa com deterioração rápida",
  "Múltiplos casos de doença ou mortes súbitas",
];

const rotina = [
  "Observar comportamento, apetite e consumo de água",
  "Verificar locomoção, pele, olhos e respiração",
  "Inspecionar instalações e condições de higiene",
  "Registar sinais anormais e identificar os animais",
  "Rever tratamentos e vacinações programados",
  "Comunicar situações preocupantes ao veterinário",
];

const referencias = [
  {
    titulo: "Organização Mundial de Saúde Animal — WOAH",
    descricao:
      "Normas e orientações internacionais sobre saúde, vigilância e bem-estar animal.",
    url: "https://www.woah.org/en/what-we-do/standards/codes-and-manuals/",
  },
  {
    titulo: "FAO — Saúde Animal",
    descricao:
      "Recursos técnicos sobre saúde animal, prevenção e gestão de doenças.",
    url: "https://www.fao.org/animal-health/en",
  },
  {
    titulo: "Wikimedia Commons — Bubalus bubalis",
    descricao:
      "Galeria de fotografias e materiais visuais da espécie, com licenças consultáveis por ficheiro.",
    url: "https://commons.wikimedia.org/wiki/Category:Bubalus_bubalis",
  },
];

export default function SanidadeBubalinosPage() {
  const [aberto, setAberto] = useState<number | null>(0);
  const [marcadas, setMarcadas] = useState<string[]>([]);
  const [alertasAbertos, setAlertasAbertos] = useState(false);
  const [caso, setCaso] = useState("apatia");
  const [resposta, setResposta] = useState(false);

  function alternar(item: string) {
    setMarcadas((atuais) =>
      atuais.includes(item)
        ? atuais.filter((valor) => valor !== item)
        : [...atuais, item],
    );
  }

  function reiniciarCaso() {
    setResposta(false);
    setCaso("apatia");
  }

  return (
    <main className="min-h-screen bg-[#f4f7f4] text-[#17221b]">
      <section className="relative isolate min-h-[520px] overflow-hidden bg-[#102b1b]">
        <img
          src={imagens.capa}
          alt="Búfalo de água da espécie Bubalus bubalis"
          className="absolute inset-0 h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102b1b]/95 via-[#102b1b]/75 to-[#102b1b]/25" />

        <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-5 py-16 sm:px-8 lg:px-12">
          <div className="max-w-3xl text-white">
            <Link
              href="/pecuaria/bubalinos"
              className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold transition hover:bg-white/20"
            >
              ← Voltar aos bubalinos
            </Link>

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-green-300">
              AGROINOVA ANGOLA · FORMAÇÃO TÉCNICA
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Sanidade dos Bubalinos
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
              Princípios de saúde animal, vigilância clínica, medicina
              preventiva, biossegurança e bem-estar no maneio de búfalos de
              água (*Bubalus bubalis*).
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#conteudo"
                className="rounded-xl bg-green-500 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-green-400"
              >
                Estudar o conteúdo
              </a>
              <button
                type="button"
                onClick={() => setAlertasAbertos(!alertasAbertos)}
                className="rounded-xl border border-white/40 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white/20"
              >
                {alertasAbertos ? "Ocultar sinais urgentes" : "Sinais urgentes"}
              </button>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
              {[
                ["06", "Áreas de estudo"],
                ["01", "Lista de campo"],
                ["01", "Caso prático"],
              ].map(([numero, texto]) => (
                <div
                  key={texto}
                  className="rounded-xl border border-white/15 bg-white/10 p-3 backdrop-blur-sm"
                >
                  <p className="text-2xl font-extrabold">{numero}</p>
                  <p className="mt-1 text-xs text-white/75">{texto}</p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-xs leading-5 text-white/70">
              Fotografia ilustrativa da espécie. Não representa uma exploração
              identificada em Angola nem comprova um procedimento clínico.
            </p>
          </div>
        </div>
      </section>

      {alertasAbertos && (
        <section className="border-b border-red-200 bg-red-50">
          <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
            <p className="text-sm font-bold uppercase tracking-widest text-red-700">
              Prioridade clínica
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-red-950">
              Sinais que exigem avaliação urgente
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {sinaisUrgentes.map((sinal) => (
                <div
                  key={sinal}
                  className="rounded-xl border border-red-200 bg-white p-4 text-sm font-semibold text-red-950"
                >
                  {sinal}
                </div>
              ))}
            </div>
            <p className="mt-5 max-w-4xl text-sm leading-7 text-red-900">
              Perante sinais graves, agravamento rápido ou suspeita de doença
              transmissível, contacte imediatamente um médico veterinário ou
              os serviços veterinários oficiais. Não tente confirmar um
              diagnóstico apenas pela aparência do animal.
            </p>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Introdução académica
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#14532d] sm:text-4xl">
              O que significa manter um efetivo saudável?
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              A sanidade animal é o conjunto de práticas de prevenção,
              observação, diagnóstico, tratamento e acompanhamento destinadas
              a proteger a saúde dos animais e a reduzir os riscos sanitários
              numa exploração. No caso dos bubalinos, as decisões devem
              considerar as características da espécie, o sistema de produção,
              o ambiente e os agentes patogénicos presentes na região.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Um programa sanitário eficaz não se limita à administração de
              medicamentos. Inclui alimentação e água adequadas, instalações
              seguras, higiene, registos, controlo dos movimentos, vigilância
              do efetivo e acesso a assistência veterinária. A prevenção deve
              ser planeada e avaliada regularmente.
            </p>
          </div>

          <aside className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-extrabold text-[#14532d]">
              Objetivos de aprendizagem
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              No final deste módulo, o estudante deverá ser capaz de:
            </p>
            <ul className="mt-5 space-y-4">
              {[
                "Distinguir observação de diagnóstico clínico.",
                "Identificar sinais que justificam avaliação veterinária.",
                "Explicar a função da vacinação e da biossegurança.",
                "Descrever registos básicos de saúde animal.",
                "Propor medidas preventivas sem prescrever tratamentos.",
              ].map((item, i) => (
                <li key={item} className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-green-100 text-sm font-extrabold text-green-900">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-6 text-slate-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section id="conteudo" className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Unidade de estudo
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#14532d] sm:text-4xl">
              Seis áreas fundamentais da sanidade
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Abra cada unidade para estudar os conceitos, os procedimentos
              recomendados e as limitações da observação no terreno.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {temas.map((tema, i) => (
              <article
                key={tema.numero}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-[#fbfdfb] shadow-sm transition hover:shadow-md"
              >
                <button
                  type="button"
                  aria-expanded={aberto === i}
                  onClick={() => setAberto(aberto === i ? null : i)}
                  className="flex w-full items-center gap-4 p-5 text-left transition hover:bg-green-50 sm:p-6"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#14532d] font-extrabold text-white">
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
                  <span className="text-2xl text-green-800">
                    {aberto === i ? "−" : "+"}
                  </span>
                </button>

                {aberto === i && (
                  <div className="border-t border-green-100 bg-white px-5 pb-6 pt-5 sm:px-6">
                    <h3 className="text-base font-bold text-slate-900">
                      Enquadramento técnico
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-700">
                      {tema.introducao}
                    </p>

                    <h3 className="mt-6 text-base font-bold text-slate-900">
                      Procedimentos e pontos de observação
                    </h3>
                    <ul className="mt-3 space-y-3">
                      {tema.pontos.map((ponto) => (
                        <li
                          key={ponto}
                          className="flex gap-3 text-sm leading-7 text-slate-700"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green-600" />
                          <span>{ponto}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4">
                      <p className="font-bold text-amber-950">
                        Limite técnico
                      </p>
                      <p className="mt-2 text-sm leading-7 text-amber-950/90">
                        {tema.alerta}
                      </p>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <img
              src={imagens.individuo}
              alt="Exemplar de búfalo de água da raça Murrah"
              loading="lazy"
              className="h-[300px] w-full object-cover sm:h-[390px]"
            />
            <div className="p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-green-700">
                Observação individual
              </p>
              <h2 className="mt-3 text-2xl font-extrabold text-[#14532d]">
                O animal deve ser avaliado no seu contexto
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                A comparação com o comportamento habitual é importante.
                Um animal que se isola, deixa de comer ou apresenta alterações
                de locomoção merece observação cuidadosa. A idade, a fase
                produtiva, o ambiente e o historial ajudam a interpretar os
                sinais, mas não permitem, isoladamente, confirmar uma doença.
              </p>
              <a
                href="https://commons.wikimedia.org/wiki/File:A_Murrah_buffalo.jpg"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm font-bold text-green-800 underline underline-offset-4"
              >
                Ver origem e licença da fotografia
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <img
              src={imagens.ambiente}
              alt="Búfalos de água em ambiente aquático"
              loading="lazy"
              className="h-[300px] w-full object-cover sm:h-[390px]"
            />
            <div className="p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-green-700">
                Saúde e ambiente
              </p>
              <h2 className="mt-3 text-2xl font-extrabold text-[#14532d]">
                A prevenção também começa no ambiente
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                A água, o solo, as instalações, a densidade animal e a gestão
                dos dejetos podem influenciar a exposição a agentes
                patogénicos. A avaliação sanitária deve, por isso, observar
                tanto o animal como as condições em que vive. Fontes naturais
                exigem avaliação de qualidade e de segurança.
              </p>
              <a
                href="https://commons.wikimedia.org/wiki/File:Asian_water_buffalo_(Bubalus_bubalis)_in_shallow_water_04.jpg"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm font-bold text-green-800 underline underline-offset-4"
              >
                Ver origem e licença da fotografia
              </a>
            </div>
          </div>
        </div>
        <p className="mt-4 text-xs leading-6 text-slate-500">
          Créditos: as fotografias são provenientes de páginas de ficheiros
          da Wikimedia Commons. Consulte cada página para verificar o autor
          e cumprir os termos da licença. As imagens ilustram a espécie e o
          ambiente; não são provas de um caso clínico ou de uma exploração
          em Angola.
        </p>
      </section>

      <section className="bg-[#e8f2eb] py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-green-800">
              Aplicação prática
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#14532d] sm:text-4xl">
              Caso de estudo: um bubalino com comportamento alterado
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Imagine que, durante a inspeção diária, um estudante observa um
              animal menos ativo do que o habitual. O objetivo não é adivinhar
              a doença, mas organizar uma resposta inicial segura, baseada na
              observação e na comunicação.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-2xl border border-green-200 bg-white p-6 sm:p-8">
              <h3 className="text-xl font-extrabold text-[#14532d]">
                Escolha a situação observada
              </h3>
              <div className="mt-5 space-y-3">
                {[
                  { value: "apatia", label: "O animal está isolado e apático." },
                  { value: "respiracao", label: "O animal apresenta dificuldade respiratória." },
                  { value: "grupo", label: "Vários animais apresentam sinais semelhantes." },
                ].map((opcao) => (
                  <label
                    key={opcao.value}
                    className="flex cursor-pointer gap-3 rounded-xl border border-slate-200 p-4 transition hover:bg-green-50"
                  >
                    <input
                      type="radio"
                      name="caso"
                      value={opcao.value}
                      checked={caso === opcao.value}
                      onChange={(e) => {
                        setCaso(e.target.value);
                        setResposta(false);
                      }}
                      className="mt-1 accent-green-700"
                    />
                    <span className="text-sm leading-6 text-slate-700">
                      {opcao.label}
                    </span>
                  </label>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setResposta(true)}
                className="mt-5 rounded-xl bg-[#14532d] px-5 py-3 font-bold text-white transition hover:bg-green-800"
              >
                Analisar a resposta
              </button>
            </div>

            <div className="rounded-2xl border border-green-200 bg-white p-6 sm:p-8">
              <h3 className="text-xl font-extrabold text-[#14532d]">
                Orientação para o estudante
              </h3>

              {!resposta ? (
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Selecione uma situação e analise a prioridade da resposta.
                  Considere a segurança, a observação, o registo e a
                  necessidade de apoio veterinário.
                </p>
              ) : (
                <div className="mt-4 rounded-xl bg-green-50 p-5">
                  <p className="font-bold text-green-950">
                    {caso === "apatia"
                      ? "Registar, observar e procurar orientação clínica."
                      : caso === "respiracao"
                        ? "Prioridade elevada: contactar assistência veterinária urgentemente."
                        : "Suspeita de ocorrência coletiva: comunicar rapidamente ao veterinário e seguir as instruções oficiais."}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    {caso === "apatia"
                      ? "Registe o início dos sinais, observe o consumo de alimento e água e verifique se existem outras alterações. Não conclua que se trata de uma doença específica apenas com base na apatia."
                      : caso === "respiracao"
                        ? "Reduza o stress e evite maneio desnecessário. Não force o animal a deslocar-se nem administre medicamentos por iniciativa própria. Solicite avaliação veterinária urgente."
                        : "Identifique os animais afetados, registe datas e sinais e limite movimentos desnecessários enquanto procura orientação. Não tente estabelecer um diagnóstico coletivo sem avaliação profissional."}
                  </p>
                </div>
              )}

              <button
                type="button"
                onClick={reiniciarCaso}
                className="mt-5 text-sm font-bold text-green-800 underline underline-offset-4"
              >
                Reiniciar caso de estudo
              </button>

              <div className="mt-6 border-t border-slate-200 pt-5">
                <h4 className="font-bold text-slate-900">
                  Pergunta para debate
                </h4>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Que informações adicionais seriam necessárias para
                  distinguir uma alteração passageira de um problema clínico
                  que exige investigação?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="rotina" className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-green-700">
              Instrumento de aprendizagem
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#14532d]">
              Lista de controlo sanitário
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Utilize a lista durante uma simulação de inspeção ou numa
              atividade supervisionada. Cada marcação representa uma tarefa
              verificada, não uma certificação de saúde do efetivo.
            </p>
            <div className="mt-6 rounded-2xl border border-green-100 bg-green-50 p-5">
              <p className="text-sm font-bold text-green-950">
                Como utilizar
              </p>
              <p className="mt-2 text-sm leading-7 text-green-950/80">
                Registe as observações relevantes, identifique os animais
                quando necessário e encaminhe os sinais preocupantes para
                avaliação veterinária.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-[#103b2b] p-6 text-white sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-green-200">
                  Registo diário
                </p>
                <h3 className="mt-2 text-2xl font-extrabold">
                  Verificações do efetivo
                </h3>
              </div>
              <p className="text-sm font-bold text-green-100">
                {marcadas.length}/{rotina.length}
              </p>
            </div>

            <div
              className="mt-5 h-2 overflow-hidden rounded-full bg-white/15"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={rotina.length}
              aria-valuenow={marcadas.length}
              aria-label="Progresso da lista de controlo"
            >
              <div
                className="h-full rounded-full bg-green-300 transition-all duration-300"
                style={{
                  width: `${(marcadas.length / rotina.length) * 100}%`,
                }}
              />
            </div>

            <div className="mt-5 space-y-3">
              {rotina.map((item) => (
                <label
                  key={item}
                  className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/15 bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <input
                    type="checkbox"
                    checked={marcadas.includes(item)}
                    onChange={() => alternar(item)}
                    className="mt-1 h-5 w-5 accent-green-400"
                  />
                  <span className="text-sm leading-6">{item}</span>
                </label>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs leading-5 text-white/60">
                As marcações existem apenas durante esta sessão da página.
              </p>
              <button
                type="button"
                onClick={() => setMarcadas([])}
                className="rounded-lg border border-white/30 px-4 py-2 text-sm font-semibold transition hover:bg-white/10"
              >
                Limpar lista
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-extrabold text-[#14532d]">
            Fontes de referência e estudo complementar
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            Consulte as fontes para aprofundar os conceitos. Para decisões
            clínicas, vacinação, tratamentos e notificação de doenças,
            prevalecem a orientação veterinária e as normas oficiais
            aplicáveis em Angola.
          </p>

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {referencias.map((ref) => (
              <a
                key={ref.titulo}
                href={ref.url}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-slate-200 bg-[#fbfdfb] p-6 transition hover:-translate-y-1 hover:border-green-300 hover:shadow-lg"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-green-700">
                  Recurso externo
                </p>
                <h3 className="mt-3 text-lg font-bold text-[#14532d]">
                  {ref.titulo}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {ref.descricao}
                </p>
                <span className="mt-5 inline-block text-sm font-bold text-green-800 group-hover:underline">
                  Abrir fonte ↗
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
            <h3 className="font-bold text-amber-950">
              Nota de responsabilidade académica
            </h3>
            <p className="mt-2 text-sm leading-7 text-amber-950/90">
              Este material tem finalidade educativa e não substitui exame
              clínico, diagnóstico, prescrição ou intervenção de um médico
              veterinário. Não inclui um calendário de vacinação específico
              para Angola porque essa decisão exige informação epidemiológica
              e orientação oficial atualizadas.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-5 py-6">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-sm leading-6 text-slate-500">
            AGROINOVA ANGOLA — Conhecimento, Tecnologia e Inovação ao Serviço
            do Campo Angolano.
          </p>
          <Link
            href="/pecuaria/bubalinos"
            className="font-bold text-green-800 transition hover:text-green-600"
          >
            Voltar aos bubalinos →
          </Link>
        </div>
      </footer>
    </main>
  );
}
