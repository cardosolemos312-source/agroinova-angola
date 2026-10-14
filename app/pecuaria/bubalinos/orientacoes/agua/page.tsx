
"use client";

import { useState } from "react";
import Link from "next/link";

const fotos = [
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Asian_water_buffalo_%28Bubalus_bubalis%29_in_shallow_water_04.jpg",
    origem: "Gannu03 · Wikimedia Commons · Índia",
    credito:
      "https://commons.wikimedia.org/wiki/File:Asian_water_buffalo_(Bubalus_bubalis)_in_shallow_water_04.jpg",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bubalus_bubalis_%28water_buffalo%29_bathing_in_a_rust-colored_pond_and_looking_at_viewer%2C_head_above_water%2C_Don_Det%2C_Laos.jpg",
    origem: "Wikimedia Commons · Laos",
    credito:
      "https://commons.wikimedia.org/wiki/File:Bubalus_bubalis_(water_buffalo)_bathing_in_a_rust-colored_pond_and_looking_at_viewer,_head_above_water,_Don_Det,_Laos.jpg",
  },
  {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Asian_water_buffalo_%28Bubalus_bubalis%29_in_shallow_water_01.jpg",
    origem: "Gannu03 · Wikimedia Commons · Índia",
    credito:
      "https://commons.wikimedia.org/wiki/File:Asian_water_buffalo_(Bubalus_bubalis)_in_shallow_water_01.jpg",
  },
];

function FotoBubalino({
  indice = 0,
  alt,
  className = "",
}: {
  indice?: number;
  alt: string;
  className?: string;
}) {
  const [tentativa, setTentativa] = useState(indice);
  const foto = fotos[tentativa];

  return (
    <div className={`relative overflow-hidden bg-emerald-950 ${className}`}>
      {foto ? (
        <>
          <img
            src={foto.src}
            alt={alt}
            loading={indice === 0 ? "eager" : "lazy"}
            className="h-full w-full object-cover"
            onError={() => {
              setTentativa((atual) =>
                atual + 1 < fotos.length ? atual + 1 : fotos.length,
              );
            }}
          />
          {tentativa < fotos.length && (
            <div className="absolute inset-x-0 bottom-0 bg-black/65 px-3 py-2 text-xs text-white">
              {foto.origem}
            </div>
          )}
        </>
      ) : (
        <div className="flex h-full min-h-48 items-center justify-center p-6 text-center text-sm leading-6 text-white">
          A fotografia não está disponível neste momento.
          <br />
          Consulte os registos fotográficos nas fontes indicadas abaixo.
        </div>
      )}
    </div>
  );
}

const temas = [
  {
    numero: "01",
    titulo: "Fisiologia da água no organismo",
    resumo: "Porque é que a água é indispensável ao funcionamento do animal.",
    introducao:
      "A água participa na digestão, absorção e transporte de nutrientes, na eliminação de resíduos metabólicos e na manutenção do volume dos fluidos corporais. É também importante para a regulação da temperatura e, nas fêmeas em lactação, para a produção de leite.",
    pontos: [
      "A água ingerida é absorvida no aparelho digestivo e distribuída pelo organismo.",
      "A perda de água ocorre, entre outras vias, através da urina, das fezes e da evaporação.",
      "A ingestão pode variar com o peso, a idade, a alimentação, a temperatura, a atividade e a fase produtiva.",
      "Uma redução da ingestão de água pode acompanhar-se de menor consumo de alimento e de alterações do estado geral.",
      "A observação do comportamento deve ser conjugada com a avaliação clínica e com o registo do abastecimento.",
    ],
    alerta:
      "Não existe um único valor diário que seja adequado a todos os bubalinos e a todas as explorações. Os valores de planeamento devem ser escolhidos com apoio técnico e adequados às condições reais.",
  },
  {
    numero: "02",
    titulo: "Quantidade e acesso ao abeberamento",
    resumo: "Planeamento do abastecimento para todo o efetivo.",
    introducao:
      "O sistema deve permitir que os animais tenham acesso à água em condições seguras, sem competição excessiva. Para dimensionar o abastecimento, importa conhecer o número e a categoria dos animais, os consumos observados, a capacidade de reposição e as possíveis interrupções.",
    pontos: [
      "Contabilizar separadamente as categorias relevantes: adultos, jovens e fêmeas em lactação, quando existam.",
      "Verificar se todos os animais conseguem chegar ao ponto de água sem obstáculos ou riscos de lesão.",
      "Observar a pressão, o caudal de entrada e o funcionamento de válvulas e boias.",
      "Evitar que a localização do bebedouro provoque congestionamento, lama excessiva ou disputas frequentes.",
      "Considerar também a água necessária à limpeza das instalações e a outras operações da exploração.",
      "Prever uma alternativa para avarias, falhas de energia ou redução da disponibilidade da fonte.",
    ],
    alerta:
      "A capacidade do depósito, por si só, não garante abastecimento suficiente. O caudal de reposição e a possibilidade de acesso simultâneo também devem ser avaliados.",
  },
  {
    numero: "03",
    titulo: "Qualidade físico-química e microbiológica",
    resumo: "Avaliação da água antes e durante a sua utilização.",
    introducao:
      "A avaliação da qualidade não deve limitar-se à aparência. Uma água transparente pode conter microrganismos ou substâncias dissolvidas que não são visíveis. A escolha dos parâmetros analíticos depende da origem da água, do ambiente e dos riscos identificados.",
    pontos: [
      "Inspecionar cor, odor, turbidez, resíduos e sinais de contaminação.",
      "Investigar riscos associados a fezes, escoamento superficial, resíduos, combustíveis e produtos químicos.",
      "Considerar análises microbiológicas e físico-químicas quando a origem, o histórico ou a aparência levantarem dúvidas.",
      "Solicitar ao laboratório ou técnico orientação sobre os parâmetros, o recipiente, a conservação e o transporte da amostra.",
      "Registar a origem da amostra, a data, o ponto de recolha e os resultados recebidos.",
      "Quando existir suspeita relevante de contaminação, disponibilizar uma fonte alternativa segura enquanto se procura orientação técnica.",
    ],
    alerta:
      "Não se deve declarar uma fonte segura apenas com base na cor, no cheiro ou no sabor. A adequação depende dos resultados das análises e do contexto sanitário.",
  },
  {
    numero: "04",
    titulo: "Limpeza e manutenção dos bebedouros",
    resumo: "Prevenção de resíduos, biofilmes e falhas no abastecimento.",
    introducao:
      "Os recipientes de abeberamento podem acumular lama, matéria orgânica e biofilmes. A sujidade pode reduzir a aceitação da água e dificultar a inspeção. O plano de limpeza deve ter em conta a rapidez com que o recipiente se suja e o número de animais que o utiliza.",
    pontos: [
      "Inspecionar os recipientes e retirar resíduos visíveis.",
      "Estabelecer uma rotina de limpeza e registar as intervenções.",
      "Utilizar produtos de limpeza adequados e respeitar as instruções de utilização e enxaguamento.",
      "Evitar que detergentes, desinfetantes ou outros químicos contaminem a água disponível.",
      "Verificar fissuras, bordos cortantes, estabilidade e risco de tombamento.",
      "Inspecionar tubagens, boias, torneiras, bombas e ligações elétricas, quando existam.",
    ],
    alerta:
      "Não misturar produtos químicos nem improvisar concentrações de desinfetantes. O procedimento deve seguir as instruções do produto e a orientação técnica aplicável.",
  },
  {
    numero: "05",
    titulo: "Lagoas, rios e banhos",
    resumo: "Distinguir água para beber de locais de imersão.",
    introducao:
      "Os búfalos de água são frequentemente observados em ambientes húmidos ou dentro de água. A imersão pode contribuir para o comportamento de arrefecimento, mas não significa que qualquer lagoa seja adequada para beber. O abeberamento e o acesso a zonas de banho devem ser avaliados separadamente.",
    pontos: [
      "Avaliar a profundidade, a inclinação das margens, o fundo e os riscos de atolamento.",
      "Verificar a presença de resíduos, descargas, animais mortos ou outras fontes possíveis de contaminação.",
      "Evitar acesso a locais com margens instáveis, correntes perigosas ou saídas difíceis.",
      "Sempre que possível, proteger as margens contra a erosão e a acumulação de dejetos.",
      "Considerar um ponto de abeberamento controlado quando a lagoa não permitir assegurar a qualidade.",
      "Inspecionar regularmente as condições do local, sobretudo após chuvas fortes ou alterações ambientais.",
    ],
    alerta:
      "Uma fotografia de búfalos dentro de uma lagoa não demonstra que a água seja potável nem que o local seja seguro para a exploração.",
  },
  {
    numero: "06",
    titulo: "Calor, sombra e estado de hidratação",
    resumo: "Acompanhar o animal e o ambiente nos períodos quentes.",
    introducao:
      "A temperatura ambiente, a humidade, a radiação solar e a ventilação influenciam a carga térmica. A disponibilidade de sombra, o acesso à água e a possibilidade de repouso são componentes do maneio. A imersão pode ajudar no arrefecimento, mas não substitui o fornecimento de água própria para beber.",
    pontos: [
      "Disponibilizar água e sombra em locais acessíveis.",
      "Observar alterações de comportamento, respiração, postura e apetite.",
      "Reduzir maneios desnecessários nas horas de maior calor, quando operacionalmente possível.",
      "Garantir água acessível após transporte, contenção ou esforço.",
      "Registar episódios de calor intenso e as medidas adotadas pela exploração.",
      "Solicitar avaliação veterinária perante sinais graves, persistentes ou de agravamento rápido.",
    ],
    alerta:
      "Fraqueza intensa, dificuldade respiratória, colapso ou incapacidade de se levantar justificam assistência veterinária urgente.",
  },
  {
    numero: "07",
    titulo: "Planeamento para o cacimbo",
    resumo: "Preparar a disponibilidade de água antes da época seca.",
    introducao:
      "Em Angola, a disponibilidade de água pode variar entre regiões e épocas do ano. O plano deve ser construído com base nas fontes realmente existentes na exploração, no histórico de funcionamento e no risco de interrupção. Não se deve presumir que todas as províncias apresentam as mesmas condições.",
    pontos: [
      "Inventariar furos, poços, reservatórios, sistemas de bombagem e outras fontes disponíveis.",
      "Registar as fontes que diminuem de caudal ou falham em períodos anteriores de seca.",
      "Verificar o estado estrutural dos depósitos e a proteção contra contaminação.",
      "Calcular a autonomia a partir de um consumo diário tecnicamente justificado.",
      "Definir antecipadamente quem aciona o plano alternativo e como se transportará água segura.",
      "Reavaliar o plano após alterações no efetivo, na fonte ou no sistema de distribuição.",
    ],
    alerta:
      "Uma reserva só é útil se a água puder ser conservada em condições adequadas e distribuída quando a fonte principal falhar.",
  },
  {
    numero: "08",
    titulo: "Registos e resposta a anomalias",
    resumo: "Transformar a observação diária em informação útil.",
    introducao:
      "Os registos permitem reconhecer tendências e investigar problemas. A informação mais útil combina observação dos animais, estado dos equipamentos, disponibilidade da fonte e resultados de análises.",
    pontos: [
      "Registar avarias, interrupções, alterações de cor ou odor e medidas corretivas.",
      "Anotar alterações importantes na ingestão de alimento e no comportamento.",
      "Identificar a fonte e o ponto de abeberamento a que cada ocorrência se refere.",
      "Comunicar sinais clínicos ao responsável e ao médico veterinário.",
      "Guardar relatórios de análises e comprovativos de manutenção.",
      "Rever periodicamente os registos para identificar falhas recorrentes.",
    ],
    alerta:
      "Os registos ajudam a investigar uma ocorrência, mas não substituem o diagnóstico veterinário nem a análise laboratorial.",
  },
];

const tarefas = [
  "Bebedouros abastecidos e acessíveis",
  "Aspeto da água inspecionado",
  "Recipientes sem acumulação evidente de resíduos",
  "Válvulas, boias e tubagens verificadas",
  "Fonte natural avaliada, quando aplicável",
  "Reserva e alternativa de emergência verificadas",
  "Comportamento e estado geral observados",
  "Ocorrências registadas e comunicadas",
];

export default function AguaBubalinosPage() {
  const [aberto, setAberto] = useState<number | null>(0);
  const [marcadas, setMarcadas] = useState<string[]>([]);
  const [numeroAnimais, setNumeroAnimais] = useState("10");
  const [consumo, setConsumo] = useState("");
  const [dias, setDias] = useState("2");
  const [reserva, setReserva] = useState("20");

  function alternar(tarefa: string) {
    setMarcadas((atuais) =>
      atuais.includes(tarefa)
        ? atuais.filter((item) => item !== tarefa)
        : [...atuais, tarefa],
    );
  }

  const n = Number(numeroAnimais);
  const litros = Number(consumo);
  const autonomia = Number(dias);
  const margem = Number(reserva);

  const calculoValido =
    numeroAnimais.trim() !== "" &&
    consumo.trim() !== "" &&
    dias.trim() !== "" &&
    reserva.trim() !== "" &&
    Number.isFinite(n) &&
    Number.isFinite(litros) &&
    Number.isFinite(autonomia) &&
    Number.isFinite(margem) &&
    n > 0 &&
    litros > 0 &&
    autonomia > 0 &&
    margem >= 0;

  const litrosDia = calculoValido ? n * litros : 0;
  const litrosReserva = calculoValido
    ? litrosDia * autonomia * (1 + margem / 100)
    : 0;

  return (
    <main className="min-h-screen bg-[#f5f7f6] text-[#17221b]">
      <section className="relative isolate min-h-[520px] overflow-hidden bg-[#102b1b]">
        <FotoBubalino
          indice={0}
          alt="Búfalo doméstico Bubalus bubalis dentro de água pouco profunda"
          className="absolute inset-0 h-full w-full"
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

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">
              AGROINOVA ANGOLA · MANEIO PECUÁRIO
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Água dos Bubalinos
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
              Manual académico de hidratação, qualidade da água, higiene,
              ambientes aquáticos e planeamento do abastecimento de búfalos
              domésticos, com aplicação ao contexto das explorações pecuárias.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#conteudo"
                className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-[#102b1b] transition hover:bg-cyan-200"
              >
                Estudar o conteúdo
              </a>
              <a
                href="#calculadora"
                className="rounded-xl border border-white/40 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white/20"
              >
                Calcular uma reserva
              </a>
            </div>

            <p className="mt-5 text-xs leading-5 text-white/75">
              Fotografia ilustrativa de Bubalus bubalis. As imagens são
              internacionais e não representam uma exploração identificada
              em Angola.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-10 sm:px-8 md:grid-cols-3 lg:px-12">
        {[
          {
            titulo: "Fisiologia",
            texto:
              "Compreender o papel da água na digestão, no transporte de nutrientes, na excreção e na regulação térmica.",
          },
          {
            titulo: "Qualidade",
            texto:
              "Distinguir a inspeção visual da avaliação laboratorial e identificar possíveis fontes de contaminação.",
          },
          {
            titulo: "Planeamento",
            texto:
              "Organizar o abastecimento, os registos de campo e as reservas com base em dados justificados.",
          },
        ].map((item, i) => (
          <article
            key={item.titulo}
            className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-lg font-extrabold text-cyan-900">
              0{i + 1}
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
        id="conteudo"
        className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12"
      >
        <div className="mb-8 max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-800">
            Conteúdo de aprendizagem
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#14532d] sm:text-4xl">
            Oito áreas de estudo e aplicação prática
          </h2>
          <p className="mt-4 leading-8 text-slate-600">
            Cada tema apresenta enquadramento técnico, procedimentos de
            observação e medidas de maneio. Abra os tópicos para estudar os
            conceitos e relacioná-los com as condições reais de uma exploração.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {temas.map((tema, i) => (
            <article
              key={tema.numero}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                type="button"
                aria-expanded={aberto === i}
                onClick={() => setAberto(aberto === i ? null : i)}
                className="flex w-full items-center gap-4 p-5 text-left transition hover:bg-cyan-50 sm:p-6"
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
                <span className="text-2xl text-cyan-800">
                  {aberto === i ? "−" : "+"}
                </span>
              </button>

              {aberto === i && (
                <div className="border-t border-cyan-100 px-5 pb-6 pt-5 sm:px-6">
                  <p className="text-sm leading-7 text-slate-700">
                    {tema.introducao}
                  </p>

                  <h3 className="mt-5 font-bold text-[#14532d]">
                    Procedimentos e pontos de estudo
                  </h3>
                  <ul className="mt-3 space-y-3">
                    {tema.pontos.map((ponto) => (
                      <li
                        key={ponto}
                        className="flex gap-3 text-sm leading-7 text-slate-700"
                      >
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-600" />
                        <span>{ponto}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4">
                    <p className="font-bold text-amber-900">
                      Nota técnica
                    </p>
                    <p className="mt-1 text-sm leading-6 text-amber-900/90">
                      {tema.alerta}
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
            <FotoBubalino
              indice={1}
              alt="Búfalo doméstico Bubalus bubalis parcialmente imerso numa lagoa"
              className="h-[330px] sm:h-[430px]"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-800">
              Comportamento e ambiente
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#14532d]">
              Água para beber não é o mesmo que água para banho
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Os búfalos de água são associados a ambientes húmidos e podem
              utilizar a imersão como parte do comportamento de arrefecimento.
              Contudo, uma lagoa usada para banho não deve ser automaticamente
              considerada fonte segura de água para beber. A qualidade, a
              profundidade, as margens e o risco de contaminação precisam de
              avaliação própria.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Fonte de abeberamento avaliada",
                "Margens e saídas seguras",
                "Contaminação controlada",
                "Acesso monitorizado",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-cyan-100 bg-cyan-50 p-4 text-sm font-semibold text-[#14532d]"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs leading-5 text-slate-500">
              Fotografia de referência internacional. A espécie e o local da
              imagem podem ser consultados na fonte original.
            </p>
          </div>
        </div>
      </section>

      <section
        id="calculadora"
        className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12"
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-800">
              Exercício aplicado
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#14532d]">
              Calculadora didática de reserva de água
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Esta ferramenta permite estudar o cálculo de uma reserva.
              Introduza o número de animais e um valor de consumo diário por
              animal devidamente fundamentado numa referência técnica ou num
              plano validado para a exploração. O consumo não é predefinido
              porque varia com as condições de produção e do ambiente.
            </p>

            <div className="mt-6 rounded-2xl border border-cyan-200 bg-cyan-50 p-5">
              <h3 className="font-bold text-[#14532d]">
                Fórmula de planeamento
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Consumo diário estimado = número de animais × litros por
                animal por dia.
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Reserva estimada = consumo diário × dias de autonomia ×
                (1 + margem de reserva / 100).
              </p>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              O resultado não inclui automaticamente perdas por fugas,
              limpeza, outros usos ou limitações do caudal. Esses fatores
              devem ser avaliados separadamente no projeto do sistema.
            </p>
          </div>

          <div className="rounded-3xl bg-[#103b2b] p-6 text-white sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-semibold">
                Número de bubalinos
                <input
                  type="number"
                  min="1"
                  step="1"
                  value={numeroAnimais}
                  onChange={(e) => setNumeroAnimais(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-base text-slate-900 outline-none focus:ring-2 focus:ring-cyan-300"
                />
              </label>

              <label className="block text-sm font-semibold">
                Litros por animal/dia
                <input
                  type="number"
                  min="0.01"
                  step="any"
                  placeholder="Introduza um valor justificado"
                  value={consumo}
                  onChange={(e) => setConsumo(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-base text-slate-900 outline-none focus:ring-2 focus:ring-cyan-300"
                />
              </label>

              <label className="block text-sm font-semibold">
                Dias de autonomia
                <input
                  type="number"
                  min="1"
                  step="1"
                  value={dias}
                  onChange={(e) => setDias(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-base text-slate-900 outline-none focus:ring-2 focus:ring-cyan-300"
                />
              </label>

              <label className="block text-sm font-semibold">
                Margem adicional (%)
                <input
                  type="number"
                  min="0"
                  step="1"
                  value={reserva}
                  onChange={(e) => setReserva(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-base text-slate-900 outline-none focus:ring-2 focus:ring-cyan-300"
                />
              </label>
            </div>

            <div className="mt-7 rounded-2xl border border-white/15 bg-white/10 p-5">
              <p className="text-sm font-semibold text-cyan-100">
                Consumo diário estimado
              </p>
              <p className="mt-2 text-3xl font-extrabold">
                {calculoValido
                  ? `${litrosDia.toLocaleString("pt-PT", {
                      maximumFractionDigits: 2,
                    })} L/dia`
                  : "—"}
              </p>

              <div className="my-5 border-t border-white/15" />

              <p className="text-sm font-semibold text-cyan-100">
                Reserva calculada
              </p>
              <p className="mt-2 text-3xl font-extrabold">
                {calculoValido
                  ? `${litrosReserva.toLocaleString("pt-PT", {
                      maximumFractionDigits: 2,
                    })} L`
                  : "—"}
              </p>

              {!calculoValido && (
                <p className="mt-3 text-sm leading-6 text-white/70">
                  Preencha todos os campos com valores válidos e positivos.
                  A margem não pode ser negativa.
                </p>
              )}
            </div>

            <p className="mt-5 text-xs leading-6 text-white/65">
              Exercício pedagógico. Antes de dimensionar um sistema real,
              valide o consumo adotado, as perdas, o caudal, a qualidade da
              fonte e as exigências do efetivo com apoio técnico.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
            <FotoBubalino
              indice={2}
              alt="Búfalo doméstico em água pouco profunda, fotografia de referência para estudo"
              className="h-[300px] sm:h-[380px]"
            />
            <div className="p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-green-700">
                Referência visual
              </p>
              <h3 className="mt-2 text-xl font-bold text-[#14532d]">
                Identificação correta da espécie
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                O búfalo doméstico pertence à espécie Bubalus bubalis. Não deve
                ser confundido com o búfalo-africano selvagem, Syncerus caffer,
                nem com bovinos domésticos. A identificação correta é essencial
                numa plataforma académica especializada.
              </p>
            </div>
          </div>

          <div
            id="rotina"
            className="rounded-3xl bg-[#103b2b] p-6 text-white sm:p-8"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-200">
              Instrumento de campo
            </p>
            <h2 className="mt-3 text-3xl font-extrabold">
              Lista de verificação diária
            </h2>
            <p className="mt-4 leading-7 text-white/80">
              Assinale os pontos efetivamente inspecionados. A lista organiza
              a rotina, mas não substitui os registos técnicos da exploração.
            </p>

            <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/15">
              <div
                className="h-full rounded-full bg-cyan-300 transition-all duration-300"
                style={{
                  width: `${(marcadas.length / tarefas.length) * 100}%`,
                }}
              />
            </div>
            <p className="mt-2 text-sm text-cyan-100">
              {marcadas.length} de {tarefas.length} verificações concluídas
            </p>

            <div className="mt-5 space-y-3">
              {tarefas.map((tarefa) => (
                <label
                  key={tarefa}
                  className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/15 bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <input
                    type="checkbox"
                    checked={marcadas.includes(tarefa)}
                    onChange={() => alternar(tarefa)}
                    className="mt-1 h-5 w-5 shrink-0 accent-cyan-400"
                  />
                  <span className="text-sm leading-6 font-medium">
                    {tarefa}
                  </span>
                </label>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setMarcadas([])}
              className="mt-5 rounded-lg border border-white/25 px-4 py-2 text-sm font-semibold transition hover:bg-white/10"
            >
              Limpar verificações
            </button>

            <p className="mt-4 text-xs leading-5 text-white/60">
              As marcações são temporárias e desaparecem ao atualizar ou sair
              da página.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#e8f4f0] py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-800">
            Bibliografia e consulta
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#14532d]">
            Fontes técnicas e fotográficas
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-slate-600">
            As fontes seguintes apoiam o estudo da água na produção pecuária,
            da higiene das instalações e da identificação das fotografias.
            As recomendações devem ser adaptadas à espécie e à realidade da
            exploração, sem transferir automaticamente valores de bovinos
            leiteiros para todos os bubalinos.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <a
              href="https://www.fao.org/4/t1265e/t1275e01.htm"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-green-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="font-bold text-[#14532d]">
                FAO — Feeding of dairy cattle and buffalo
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Manual técnico sobre alimentação e água, incluindo funções
                fisiológicas, fatores que influenciam a ingestão e acesso à água.
              </p>
              <span className="mt-4 inline-block text-sm font-bold text-green-800 underline">
                Consultar o manual
              </span>
            </a>

            <a
              href="https://www.fao.org/4/t1270e/t1270e05.htm"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-green-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="font-bold text-[#14532d]">
                FAO — Higiene das instalações e água
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Material de apoio sobre limpeza dos bebedouros, renovação da
                água e higiene em instalações pecuárias.
              </p>
              <span className="mt-4 inline-block text-sm font-bold text-green-800 underline">
                Consultar o material
              </span>
            </a>

            <a
              href="https://www.woah.org/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-green-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="font-bold text-[#14532d]">
                Organização Mundial de Saúde Animal
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Portal institucional para consulta de referências sobre saúde
                e bem-estar animal.
              </p>
              <span className="mt-4 inline-block text-sm font-bold text-green-800 underline">
                Visitar o portal
              </span>
            </a>

            <a
              href="https://governo.gov.ao/angola/clima"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-green-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="font-bold text-[#14532d]">
                Governo de Angola — Clima
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Contexto climático nacional para apoiar a reflexão sobre
                sazonalidade e planeamento da água.
              </p>
              <span className="mt-4 inline-block text-sm font-bold text-green-800 underline">
                Consultar informação climática
              </span>
            </a>
          </div>

          <div className="mt-8 rounded-2xl border border-green-200 bg-white p-5">
            <h3 className="font-bold text-[#14532d]">
              Créditos das fotografias
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              As fotografias de búfalos desta página são disponibilizadas
              através do Wikimedia Commons. As imagens de Gannu03 indicadas
              abaixo têm licença CC BY-SA 4.0. Consulte sempre a página de
              cada ficheiro para confirmar autoria, licença e condições de
              reutilização.
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-6">
              {fotos.map((foto, i) => (
                <li key={foto.credito}>
                  <a
                    href={foto.credito}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-green-800 underline underline-offset-4"
                  >
                    Fotografia {i + 1} — {foto.origem}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-green-800 underline underline-offset-4"
            >
              Consultar licença Creative Commons BY-SA 4.0
            </a>
          </div>

          <p className="mt-6 text-xs leading-6 text-slate-500">
            Material educativo da AGROINOVA ANGOLA. Não substitui a avaliação
            veterinária, a análise laboratorial da água nem o dimensionamento
            técnico do sistema de abastecimento.
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
            Voltar aos bubalinos →
          </Link>
        </div>
      </footer>
    </main>
  );
}
