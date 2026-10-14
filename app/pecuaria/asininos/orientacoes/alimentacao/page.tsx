
"use client";

import { useState } from "react";
import Link from "next/link";

const fotos = {
  destaque:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Donkey_Grazing_in_Tutume.jpg",
  pastagem:
    "https://commons.wikimedia.org/wiki/Special:FilePath/A_donkey_grazing_in_a_field.jpg",
  campo:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Into_the_field.jpg",
  colheita:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Donkeys_eating.jpg",
  agricultura:
    "https://commons.wikimedia.org/wiki/Special:FilePath/A_man_and_his_donkey_on_the_way_back_from_the_field_in_Aswan,_Egypt_(edited).jpg",
  feno:
    "https://commons.wikimedia.org/wiki/Special:FilePath/A_donkey_grazing_in_a_field.jpg",
  vegetacao:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Donkey_grazing.jpg",
  sementes:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Donkeys_eating.jpg",
};

type Tema = {
  numero: string;
  titulo: string;
  subtitulo: string;
  imagem: string;
  alt: string;
  paragrafos: string[];
  pontos: string[];
};

const temas: Tema[] = [
  {
    numero: "01",
    titulo: "Como funciona a alimentação dos asininos",
    subtitulo: "Compreender antes de escolher os alimentos",
    imagem: fotos.destaque,
    alt: "Asininos a pastar numa aldeia africana",
    paragrafos: [
      "Os asininos são herbívoros com um sistema digestivo adaptado ao aproveitamento de vegetação fibrosa. Em condições adequadas, conseguem utilizar pastagens, folhas e outras forragens que constituem a base da alimentação de muitas explorações rurais.",
      "A capacidade de aproveitar alimentos fibrosos não significa que o animal possa viver de qualquer vegetação, nem que todos os alimentos grosseiros tenham valor nutricional suficiente. A qualidade, a maturidade das plantas, a disponibilidade de água, a saúde dentária e o estado corporal influenciam a quantidade que o animal consegue consumir e aproveitar.",
      "Um asinino que trabalha, cresce, está gestante ou amamenta pode ter necessidades diferentes das de um adulto que não trabalha. Por isso, a alimentação deve considerar a finalidade do animal, a época do ano e os recursos disponíveis.",
    ],
    pontos: [
      "Garantir uma base alimentar fibrosa e segura.",
      "Disponibilizar água limpa e acesso adequado ao alimento.",
      "Observar o apetite, as fezes e a condição corporal.",
      "Adaptar a dieta às necessidades individuais.",
    ],
  },
  {
    numero: "02",
    titulo: "Forragens, pastagens e vegetação local",
    subtitulo: "Selecionar bem os alimentos disponíveis na exploração",
    imagem: fotos.pastagem,
    alt: "Asinino a consumir vegetação numa pastagem",
    paragrafos: [
      "A alimentação pode incluir pastagem, ervas, folhas e forragens colhidas, desde que sejam identificadas como seguras para asininos. A escolha depende da região, da época de chuvas, da estação seca e das condições da exploração.",
      "A vegetação muito madura pode apresentar menor digestibilidade e menor concentração de alguns nutrientes. Quando a forragem disponível é pobre, pode ser necessário complementar a dieta. Essa decisão deve resultar da avaliação do alimento e do animal, e não apenas da aparência do pasto.",
      "Não ofereças plantas desconhecidas só porque o animal as encontra no campo. Algumas espécies podem ser tóxicas, e plantas seguras podem tornar-se perigosas quando contaminadas por pesticidas, bolores ou resíduos.",
    ],
    pontos: [
      "Verificar a identidade e a segurança das plantas.",
      "Retirar forragem contaminada com lixo, plástico ou produtos químicos.",
      "Observar a presença de bolor, poeira excessiva e odores anormais.",
      "Evitar mudanças bruscas entre tipos de pastagem ou forragem.",
    ],
  },
  {
    numero: "03",
    titulo: "Palhas, restos de culturas e feno",
    subtitulo: "Conservar alimento para períodos de menor disponibilidade",
    imagem: fotos.feno,
    alt: "Asinino a procurar alimento vegetal no campo",
    paragrafos: [
      "Em explorações rurais, resíduos vegetais de culturas como milho, sorgo e outras plantas podem representar recursos alimentares. No entanto, a sua utilidade depende da espécie vegetal, da parte aproveitada, da maturidade, da conservação e do valor nutritivo.",
      "Palha, restolhos e caules não são equivalentes a uma dieta completa. Alguns materiais têm baixo valor nutritivo e podem precisar de complemento. Não se deve presumir que todos os restos agrícolas são adequados ou suficientes para manter a saúde do animal.",
      "O feno deve ser colhido e armazenado de forma a limitar a humidade e o desenvolvimento de bolores. Guarda-o num espaço seco, ventilado e protegido da chuva, do contacto com o solo e de contaminantes.",
    ],
    pontos: [
      "Selecionar materiais vegetais conhecidos e seguros.",
      "Rejeitar feno com bolor ou cheiro a fermentação.",
      "Proteger as reservas contra humidade e pragas.",
      "Planear as reservas antes da estação seca.",
    ],
  },
  {
    numero: "04",
    titulo: "Alimentação durante a estação seca",
    subtitulo: "Planear as reservas antes da escassez",
    imagem: fotos.campo,
    alt: "Dois asininos num ambiente rural",
    paragrafos: [
      "Na estação seca, a redução da disponibilidade de pastagens pode aumentar o risco de emagrecimento e de insuficiência alimentar. O planeamento deve começar enquanto ainda existe disponibilidade de forragem para selecionar, secar e conservar materiais seguros.",
      "É útil estimar quantos animais precisam de alimentação, quanto alimento seguro existe e por quanto tempo poderá durar a reserva. As necessidades reais variam com o peso, a condição corporal, o trabalho, a gestação, a lactação e a qualidade dos alimentos.",
      "Quando os recursos são escassos, evita substituir toda a alimentação de um dia para o outro por um material desconhecido. Procura apoio de um técnico de produção animal ou veterinário para escolher complementos adequados e organizar a transição.",
    ],
    pontos: [
      "Fazer um inventário das reservas alimentares.",
      "Separar e rejeitar materiais estragados ou contaminados.",
      "Manter água disponível mesmo quando o pasto seca.",
      "Acompanhar a condição corporal com maior frequência.",
    ],
  },
  {
    numero: "05",
    titulo: "Concentrados, energia e suplementos",
    subtitulo: "Complementar apenas quando existe necessidade",
    imagem: fotos.sementes,
    alt: "Asininos a alimentar-se num contexto rural",
    paragrafos: [
      "Nem todos os asininos precisam de rações comerciais ou cereais. Muitos adultos com atividade reduzida conseguem manter uma condição adequada com forragem segura e uma dieta equilibrada. A necessidade de complemento depende da qualidade da base alimentar e das exigências do animal.",
      "Alimentos muito ricos em amido e açúcar, administrados em excesso, podem contribuir para problemas metabólicos e digestivos. Um suplemento destinado a cavalos ou a outra espécie também não deve ser usado automaticamente: a composição e a dose podem não ser apropriadas.",
      "Minerais, vitaminas e outras suplementações devem responder a necessidades identificadas. A utilização sem avaliação pode provocar desequilíbrios ou excesso de determinados nutrientes. Se houver perda de peso, crescimento insuficiente ou suspeita de deficiência, procura aconselhamento técnico.",
    ],
    pontos: [
      "Não utilizar concentrados como substituto automático das forragens.",
      "Evitar grandes quantidades de cereais e alimentos açucarados.",
      "Não administrar suplementos sem conhecer a composição.",
      "Ajustar qualquer complemento de forma gradual e acompanhada.",
    ],
  },
  {
    numero: "06",
    titulo: "Alimentação conforme a fase de vida",
    subtitulo: "As necessidades mudam ao longo do tempo",
    imagem: fotos.agricultura,
    alt: "Asinino acompanhado pelo seu tratador num contexto rural",
    paragrafos: [
      "Os poldros em crescimento precisam de uma alimentação que favoreça o desenvolvimento, com atenção à qualidade da forragem e ao equilíbrio dos nutrientes. A transição do leite para os alimentos sólidos deve ser acompanhada, evitando mudanças repentinas.",
      "Durante a gestação, sobretudo na fase final, e durante a lactação, as necessidades nutricionais da fêmea podem aumentar. A dieta deve ser ajustada ao estado corporal, à qualidade dos alimentos e à condição clínica.",
      "Os asininos que realizam trabalho físico podem necessitar de mais energia ou de alimentos complementares, mas a carga de trabalho, o tempo disponível para comer, a hidratação e o repouso também influenciam o seu estado nutricional.",
      "Animais idosos ou com problemas dentários podem ter dificuldade em mastigar forragens longas. Nestes casos, o veterinário ou técnico habilitado pode ajudar a identificar alternativas fibrosas mais fáceis de consumir.",
    ],
    pontos: [
      "Poldros: crescimento e transição alimentar acompanhados.",
      "Gestação e lactação: necessidades avaliadas individualmente.",
      "Animais de trabalho: alimentação, hidratação e repouso coordenados.",
      "Animais idosos: observar dentes, mastigação e perda de peso.",
    ],
  },
  {
    numero: "07",
    titulo: "Condição corporal e peso",
    subtitulo: "Avaliar o animal, não apenas a barriga",
    imagem: fotos.destaque,
    alt: "Asinino de corpo visível para observação da condição corporal",
    paragrafos: [
      "A condição corporal ajuda a avaliar se as reservas de gordura e a cobertura muscular são adequadas. A barriga volumosa, por si só, não demonstra que o asinino está bem alimentado: pode coexistir com pouca musculatura ou reservas insuficientes.",
      "A avaliação deve incluir o pescoço, a coluna, as costelas, os ombros e a garupa. A palpação, feita com cuidado, ajuda a distinguir a cobertura de gordura da estrutura óssea e da musculatura. Uma escala específica para asininos, como a escala de 1 a 5 utilizada em referências veterinárias, pode apoiar o acompanhamento.",
      "Regista as observações regularmente e compara-as ao longo do tempo. Se o animal emagrecer sem explicação, deixar de comer, apresentar dificuldade em mastigar ou mostrar alterações persistentes, não aumentes simplesmente a ração sem investigar a causa.",
    ],
    pontos: [
      "Observar e palpar várias regiões do corpo.",
      "Registar a condição corporal periodicamente.",
      "Investigar perda de peso e alterações de apetite.",
      "Pedir avaliação profissional em casos de dúvida.",
    ],
  },
  {
    numero: "08",
    titulo: "Rotina alimentar, higiene e segurança",
    subtitulo: "Pequenos cuidados que previnem problemas",
    imagem: fotos.colheita,
    alt: "Asininos a comer num ambiente rural",
    paragrafos: [
      "Os asininos precisam de tempo para procurar, mastigar e consumir alimentos fibrosos. A rotina deve permitir acesso adequado ao alimento, evitando períodos prolongados sem forragem quando isso comprometa o maneio e o bem-estar.",
      "Quando vários animais comem juntos, verifica se todos conseguem alcançar o alimento. A competição pode fazer com que os mais submissos comam menos. Sempre que necessário, disponibiliza pontos de alimentação separados e observa cada animal.",
      "Os recipientes, os locais de armazenamento e as áreas de alimentação devem ser mantidos limpos. Afasta plásticos, cordas, arames, resíduos químicos e alimentos deteriorados. Água limpa deve estar disponível diariamente.",
    ],
    pontos: [
      "Manter horários e mudanças alimentares consistentes.",
      "Verificar se cada animal consegue comer o suficiente.",
      "Manter recipientes e áreas de alimentação limpos.",
      "Retirar resíduos e alimentos deteriorados.",
    ],
  },
];

const sinaisAlerta = [
  "Recusa persistente de alimento",
  "Perda de peso ou fraqueza progressiva",
  "Dificuldade em mastigar ou deixar cair alimento da boca",
  "Alterações persistentes das fezes",
  "Desconforto abdominal ou comportamento invulgar",
  "Ausência de melhoria apesar dos cuidados alimentares",
];

const verificacoes = [
  "O animal comeu e mastigou normalmente.",
  "A forragem está limpa, seca e sem bolor.",
  "Existe água limpa e acessível.",
  "Não há alterações evidentes da condição corporal.",
  "As fezes e o comportamento são habituais.",
  "Não existem plantas desconhecidas ou resíduos perigosos no alimento.",
  "Todos os animais conseguem aceder ao alimento.",
  "As reservas alimentares estão protegidas e em boas condições.",
];

const escalaCorporal = [
  {
    valor: "1",
    nome: "Muito magro",
    texto:
      "Ossos muito evidentes e cobertura de gordura e músculo muito reduzida. Requer avaliação veterinária e plano nutricional acompanhado.",
  },
  {
    valor: "2",
    nome: "Magro",
    texto:
      "Estruturas ósseas e algumas regiões do esqueleto facilmente visíveis ou palpáveis, com cobertura limitada.",
  },
  {
    valor: "3",
    nome: "Condição intermédia",
    texto:
      "Cobertura corporal mais equilibrada; as estruturas ósseas podem ser sentidas à palpação sem estarem excessivamente salientes.",
  },
  {
    valor: "4",
    nome: "Gordo",
    texto:
      "Depósitos de gordura mais evidentes em determinadas regiões, que devem ser acompanhados e avaliados.",
  },
  {
    valor: "5",
    nome: "Obeso",
    texto:
      "Depósitos de gordura muito acentuados. É necessário um plano seguro e individualizado para reduzir o excesso.",
  },
];

export default function AlimentacaoAsininosPage() {
  const [aberta, setAberta] = useState("01");
  const [verificadas, setVerificadas] = useState<string[]>([]);
  const [pontuacao, setPontuacao] = useState<string | null>(null);
  const [mostrarEscala, setMostrarEscala] = useState(false);

  function alternarVerificacao(item: string) {
    setVerificadas((atuais) =>
      atuais.includes(item)
        ? atuais.filter((valor) => valor !== item)
        : [...atuais, item]
    );
  }

  const temaAtual = temas.find((tema) => tema.numero === aberta);

  return (
    <main className="min-h-screen bg-[#f5f8f3] text-[#17221b]">
      <section className="relative isolate overflow-hidden bg-[#123c28]">
        <div className="absolute inset-0 -z-20">
          <img
            src={fotos.destaque}
            alt=""
            className="h-full w-full object-cover opacity-45"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#092719]/95 via-[#123c28]/80 to-[#123c28]/35" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:py-20">
          <div>
            <Link
              href="/pecuaria/asininos"
              className="text-sm font-semibold text-green-100 transition hover:text-white"
            >
              ← Voltar a Asininos
            </Link>

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-green-200">
              Pecuária · Orientações técnicas · 01
            </p>

            <h1 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Alimentação dos Asininos
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-green-50 sm:text-lg">
              Um guia de formação sobre forragens, pastagens, estação seca,
              condição corporal, suplementação e maneio alimentar de burros e
              jumentos nas explorações rurais.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#guia"
                className="rounded-xl bg-[#86c94c] px-6 py-3.5 font-bold text-[#17351e] shadow-lg transition hover:-translate-y-1 hover:bg-[#a2df6e]"
              >
                Explorar o guia ↓
              </a>
              <a
                href="#lista-diaria"
                className="rounded-xl border border-white/40 bg-white/10 px-6 py-3.5 font-bold text-white transition hover:bg-white/20"
              >
                Lista diária
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-sm">
            <img
              src={fotos.destaque}
              alt="Asininos num ambiente rural africano"
              className="h-64 w-full rounded-2xl object-cover sm:h-80"
            />
            <div className="p-4">
              <p className="font-bold text-white">
                Alimentar bem é conhecer as necessidades do animal
              </p>
              <p className="mt-2 text-sm leading-6 text-green-100">
                A qualidade dos alimentos, a água, a saúde e a observação
                regular fazem parte de um maneio responsável.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              Conhecimento aplicado
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#173b28] sm:text-4xl">
              A alimentação é a base da saúde e da capacidade de trabalho
            </h2>
          </div>
          <div className="space-y-4 text-base leading-8 text-slate-600">
            <p>
              A alimentação adequada ajuda a manter a condição corporal, a
              digestão, a capacidade de trabalho e a recuperação do animal.
              Uma dieta inadequada pode contribuir tanto para emagrecimento e
              carências nutricionais como para excesso de gordura e problemas
              metabólicos.
            </p>
            <p>
              Na realidade rural angolana, a disponibilidade de pastagens e
              forragens varia entre regiões e estações. O objetivo é aproveitar
              recursos seguros, planear reservas e complementar a dieta quando
              necessário, sem assumir que todos os animais precisam da mesma
              quantidade ou do mesmo alimento.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-14 sm:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              n: "01",
              titulo: "Fibra adequada",
              texto:
                "Usar forragens seguras como base da alimentação, ajustadas à condição do animal.",
            },
            {
              n: "02",
              titulo: "Água disponível",
              texto:
                "Garantir acesso diário à água limpa e verificar os recipientes.",
            },
            {
              n: "03",
              titulo: "Mudanças graduais",
              texto:
                "Introduzir alimentos novos de forma progressiva e acompanhar a resposta.",
            },
            {
              n: "04",
              titulo: "Observar o corpo",
              texto:
                "Acompanhar o apetite, a mastigação, as fezes e a condição corporal.",
            },
          ].map((item) => (
            <article
              key={item.n}
              className="rounded-2xl border border-[#dfe9d9] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-sm font-black tracking-widest text-green-700">
                {item.n}
              </span>
              <h2 className="mt-3 text-lg font-extrabold text-[#173b28]">
                {item.titulo}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.texto}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-14 sm:px-8">
        <div className="grid overflow-hidden rounded-3xl bg-[#e6efdf] md:grid-cols-2">
          <div className="p-7 sm:p-10 lg:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-800">
              Planeamento da exploração
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#173b28]">
              Preparar hoje a alimentação para a estação seca
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-700">
              A conservação antecipada de forragens seguras, a avaliação das
              reservas e a observação regular dos animais ajudam a reduzir o
              risco de escassez. Os restos agrícolas só devem ser utilizados
              depois de se confirmar que são seguros e adequados.
            </p>
            <a
              href="#tema-04"
              onClick={() => setAberta("04")}
              className="mt-6 inline-flex rounded-xl bg-[#1c6338] px-5 py-3 font-bold text-white transition hover:bg-[#124b2a]"
            >
              Consultar gestão da estação seca →
            </a>
          </div>
          <div className="min-h-64">
            <img
              src={fotos.campo}
              alt="Asininos num campo rural"
              className="h-full min-h-64 w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section
        id="guia"
        className="mx-auto max-w-7xl scroll-mt-8 px-5 pb-16 sm:px-8"
      >
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
            Manual de alimentação
          </p>
          <h2 className="mt-2 text-3xl font-black text-[#173b28] sm:text-4xl">
            Guia técnico de maneio alimentar
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Abre os temas para estudar os princípios e as medidas práticas.
            Este guia não substitui uma avaliação individual da dieta por um
            profissional qualificado.
          </p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-3">
            {temas.map((tema) => (
              <button
                id={`tema-${tema.numero}`}
                key={tema.numero}
                type="button"
                onClick={() =>
                  setAberta((atual) =>
                    atual === tema.numero ? "" : tema.numero
                  )
                }
                aria-expanded={aberta === tema.numero}
                className={`w-full rounded-2xl border p-5 text-left transition duration-300 ${
                  aberta === tema.numero
                    ? "border-green-700 bg-[#e8f3e2] shadow-md"
                    : "border-[#dfe8da] bg-white hover:border-green-400 hover:shadow-sm"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#dcefd2] text-sm font-black text-green-800">
                    {tema.numero}
                  </span>
                  <span className="flex-1">
                    <span className="block font-extrabold text-[#173b28]">
                      {tema.titulo}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-slate-600">
                      {tema.subtitulo}
                    </span>
                  </span>
                  <span className="text-xl font-semibold text-green-800">
                    {aberta === tema.numero ? "−" : "+"}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="min-w-0">
            {temaAtual ? (
              <article
                key={temaAtual.numero}
                className="overflow-hidden rounded-3xl border border-[#dfe8da] bg-white shadow-sm"
              >
                <img
                  src={temaAtual.imagem}
                  alt={temaAtual.alt}
                  className="h-64 w-full object-cover sm:h-80"
                  loading="lazy"
                />
                <div className="p-6 sm:p-8">
                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-green-700">
                    Tema {temaAtual.numero} · Formação agropecuária
                  </p>
                  <h3 className="mt-2 text-2xl font-black leading-tight text-[#173b28] sm:text-3xl">
                    {temaAtual.titulo}
                  </h3>
                  <p className="mt-3 font-semibold text-slate-500">
                    {temaAtual.subtitulo}
                  </p>

                  <div className="mt-6 space-y-5">
                    {temaAtual.paragrafos.map((paragrafo, i) => (
                      <p
                        key={i}
                        className="text-justify text-sm leading-8 text-slate-700 sm:text-base"
                      >
                        {paragrafo}
                      </p>
                    ))}
                  </div>

                  <div className="mt-8 rounded-2xl bg-[#f0f7eb] p-5 sm:p-6">
                    <h4 className="text-lg font-extrabold text-[#245b32]">
                      Recomendações práticas
                    </h4>
                    <ul className="mt-4 space-y-3">
                      {temaAtual.pontos.map((ponto) => (
                        <li key={ponto} className="flex gap-3">
                          <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-green-700" />
                          <span className="text-sm leading-7 text-slate-700">
                            {ponto}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        setAberta((atual) =>
                          atual === temaAtual.numero
                            ? ""
                            : String(Number(temaAtual.numero) + 1).padStart(
                                2,
                                "0"
                              )
                        )
                      }
                      disabled={temaAtual.numero === "08"}
                      className="rounded-xl bg-[#1c6338] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#124b2a] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Tema seguinte →
                    </button>
                    <button
                      type="button"
                      onClick={() => setAberta("")}
                      className="rounded-xl border border-[#d6e2d0] px-5 py-3 text-sm font-bold text-[#245b32] transition hover:bg-[#f0f7eb]"
                    >
                      Fechar tema
                    </button>
                  </div>
                </div>
              </article>
            ) : (
              <div className="rounded-3xl border border-dashed border-green-300 bg-white p-10 text-center">
                <h3 className="text-xl font-black text-[#173b28]">
                  Seleciona um tema
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Escolhe um dos oito temas para abrir as explicações e
                  recomendações.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="border-y border-[#dce8d7] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              Ferramenta de observação
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#173b28] sm:text-4xl">
              Avaliar a condição corporal
            </h2>
            <p className="mt-5 text-sm leading-8 text-slate-600">
              A condição corporal dos asininos deve ser avaliada observando e
              palpando várias regiões, incluindo pescoço, costelas, coluna e
              garupa. A escala abaixo é apenas uma orientação educativa e não
              permite diagnosticar doenças.
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-600">
              Seleciona a descrição que mais se aproxima do animal. Se houver
              dúvida, emagrecimento acentuado ou depósitos de gordura
              excessivos, pede uma avaliação profissional.
            </p>

            <button
              type="button"
              onClick={() => setMostrarEscala((atual) => !atual)}
              className="mt-5 rounded-xl bg-[#1c6338] px-5 py-3 font-bold text-white transition hover:bg-[#124b2a]"
            >
              {mostrarEscala
                ? "Ocultar escala"
                : "Consultar escala de 1 a 5"}
            </button>
          </div>

          <div className="space-y-3">
            {mostrarEscala ? (
              escalaCorporal.map((item) => (
                <button
                  type="button"
                  key={item.valor}
                  onClick={() => setPontuacao(item.valor)}
                  className={`w-full rounded-2xl border p-4 text-left transition ${
                    pontuacao === item.valor
                      ? "border-green-700 bg-[#eaf4e4] shadow-sm"
                      : "border-[#dfe8da] bg-[#f8faf6] hover:border-green-400"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#dcefd2] font-black text-green-800">
                      {item.valor}
                    </span>
                    <span>
                      <span className="font-extrabold text-[#173b28]">
                        {item.nome}
                      </span>
                      <span className="mt-1 block text-sm leading-7 text-slate-600">
                        {item.texto}
                      </span>
                    </span>
                  </div>
                </button>
              ))
            ) : (
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={fotos.destaque}
                  alt="Asinino em contexto rural"
                  className="h-64 w-full object-cover sm:h-80"
                  loading="lazy"
                />
                <p className="bg-[#f0f7eb] p-4 text-sm leading-7 text-slate-600">
                  A avaliação correta exige observar e palpar várias regiões
                  do animal; uma fotografia isolada não é suficiente para
                  atribuir uma pontuação fiável.
                </p>
              </div>
            )}

            {mostrarEscala && pontuacao && (
              <div className="rounded-2xl bg-[#f0f7eb] p-5">
                <p className="font-bold text-[#245b32]">
                  Seleção:{" "}
                  {escalaCorporal.find((x) => x.valor === pontuacao)?.nome}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Usa esta seleção apenas como ponto de partida para a
                  observação. Confirma a avaliação com um profissional, em
                  especial se o animal estiver muito magro ou apresentar
                  excesso de gordura.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={fotos.vegetacao}
              alt="Asinino a pastar"
              className="h-72 w-full object-cover sm:h-96"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-700">
              Atenção à saúde
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#173b28] sm:text-4xl">
              Quando a alimentação pode não estar a correr bem
            </h2>
            <p className="mt-4 text-sm leading-8 text-slate-600">
              Alterações persistentes no apetite, no peso ou na mastigação
              podem ter causas nutricionais, dentárias, parasitárias ou outras
              doenças. Não se deve tentar corrigir todos estes sinais apenas
              aumentando a quantidade de alimento.
            </p>
            <ul className="mt-6 space-y-3">
              {sinaisAlerta.map((sinal) => (
                <li key={sinal} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-red-600" />
                  <span className="text-sm leading-7 text-slate-700">
                    {sinal}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 rounded-xl border border-red-100 bg-red-50 p-4 text-sm leading-7 text-red-900">
              Perante sinais graves, dor abdominal, fraqueza acentuada ou
              recusa persistente de alimento, procura assistência veterinária
              rapidamente.
            </p>
          </div>
        </div>
      </section>

      <section
        id="lista-diaria"
        className="mx-auto max-w-7xl scroll-mt-8 px-5 pb-16 sm:px-8"
      >
        <div className="grid gap-8 rounded-3xl bg-[#173b28] p-6 text-white shadow-xl sm:p-9 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-300">
              Ferramenta para o criador
            </p>
            <h2 className="mt-3 text-3xl font-black">
              Lista diária de alimentação
            </h2>
            <p className="mt-4 text-sm leading-7 text-green-50">
              Usa esta lista durante a inspeção. Marca cada ponto depois de o
              verificar. O progresso é apenas temporário nesta página.
            </p>
            <div className="mt-7 h-2 overflow-hidden rounded-full bg-white/15">
              <div
                className="h-full rounded-full bg-[#9bdd68] transition-all duration-300"
                style={{
                  width: `${
                    (verificadas.length / verificacoes.length) * 100
                  }%`,
                }}
              />
            </div>
            <p className="mt-3 text-sm font-bold text-green-100">
              {verificadas.length} de {verificacoes.length} pontos verificados
            </p>
            <button
              type="button"
              onClick={() => setVerificadas([])}
              className="mt-5 rounded-xl border border-white/30 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Reiniciar lista
            </button>
          </div>

          <div className="space-y-3">
            {verificacoes.map((item) => {
              const marcada = verificadas.includes(item);

              return (
                <label
                  key={item}
                  className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition ${
                    marcada
                      ? "border-green-300/40 bg-white/15"
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={marcada}
                    onChange={() => alternarVerificacao(item)}
                    className="mt-1 h-4 w-4 accent-green-400"
                  />
                  <span className="text-sm leading-6 text-green-50">
                    {item}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-[#dce8d7] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
          <h2 className="text-2xl font-black text-[#173b28]">
            Referências técnicas para aprofundamento
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            As orientações desta página são educativas. Para formular dietas,
            avaliar animais doentes ou corrigir desnutrição, consulta fontes
            veterinárias especializadas e profissionais habilitados.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <a
              href="https://www.thedonkeysanctuary.org.uk/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-[#dfe8da] p-5 transition hover:border-green-500 hover:bg-[#f6faf3]"
            >
              <p className="font-extrabold text-[#245b32]">
                The Donkey Sanctuary
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Orientações práticas sobre alimentação, forragens e cuidados
                nutricionais dos asininos.
              </p>
              <span className="mt-4 inline-block text-sm font-bold text-green-800">
                Consultar referência →
              </span>
            </a>

            <a
              href="https://www.ivis.org/library/veterinary-care-of-donkeys/nutrition-and-feeding-of-donkeys-0"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-[#dfe8da] p-5 transition hover:border-green-500 hover:bg-[#f6faf3]"
            >
              <p className="font-extrabold text-[#245b32]">
                IVIS — Nutrição de asininos
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Referência veterinária sobre alimentação, necessidades e
                fatores que afetam o consumo.
              </p>
              <span className="mt-4 inline-block text-sm font-bold text-green-800">
                Consultar referência →
              </span>
            </a>

            <a
              href="https://www.ivis.org/library/clinical-companion-of-donkey-2nd-edition/nutrition"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-[#dfe8da] p-5 transition hover:border-green-500 hover:bg-[#f6faf3]"
            >
              <p className="font-extrabold text-[#245b32]">
                Clinical Companion of the Donkey
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Conteúdo especializado sobre nutrição e necessidades dos
                asininos.
              </p>
              <span className="mt-4 inline-block text-sm font-bold text-green-800">
                Consultar referência →
              </span>
            </a>
          </div>

          <div className="mt-8 border-t border-[#e5ece1] pt-6">
            <p className="text-xs leading-6 text-slate-500">
              AGROINOVA ANGOLA · Conteúdo educativo de apoio à produção
              pecuária. As fotografias desta página são referências
              internacionais de asininos e não estão confirmadas como imagens
              captadas em Angola. Consulta a página de cada fotografia para
              verificar o autor e cumprir a licença de utilização.
            </p>
            <Link
              href="/pecuaria/asininos"
              className="mt-5 inline-flex font-bold text-green-800 transition hover:text-green-600"
            >
              ← Voltar à página de Asininos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
