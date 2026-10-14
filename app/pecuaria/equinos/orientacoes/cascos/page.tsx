
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const secoes = [
  {
    numero: "01",
    titulo: "Observar os cascos diariamente",
    descricao:
      "A observação diária permite identificar pedras presas, fissuras, feridas, mau cheiro, inchaço e alterações na forma de caminhar. Levante cada membro com cuidado, respeitando o comportamento do animal.",
    imagem:
      "https://www.hippopx.com/en/free-photo-afxmb",
    alt: "Exame veterinário da perna de um cavalo num ambiente de estábulo",
  },
  {
    numero: "02",
    titulo: "Limpeza e retirada de pedras",
    descricao:
      "Utilize um limpador de cascos adequado para retirar terra, palha, estrume e pequenas pedras. Trabalhe com movimentos controlados, evitando ferir a ranilha e os tecidos sensíveis. Não force o membro se o cavalo demonstrar dor ou resistência.",
    imagem:
      "https://www.aerestrainingcentre.nl/-/media/aeres-tc/images/vakgebieden/dier/paard-hoefbekappen-1.png?crop=1&fp=0x0&h=960&hash=AEAFD57482453270730DBC5250A3854F&rev=0571fe832d7c401489679ea21a1cf507&w=1920",
    alt: "Trabalho de limpeza e manutenção do casco de um cavalo",
  },
  {
    numero: "03",
    titulo: "Aparagem e manutenção",
    descricao:
      "A aparagem deve manter o equilíbrio do casco e respeitar a sua estrutura natural. Deve ser realizada por um ferrador experiente, com acompanhamento veterinário quando existam deformações, dor ou claudicação. Não corte partes sensíveis do casco.",
    imagem:
      "https://images.squarespace-cdn.com/content/v1/5a69d5a50abd04c6c4e24e12/1770062557179-1Z2K899OGGW7TQUA3PMS/langley-bc-august-6-9-202.jpg",
    alt: "Profissional a trabalhar na manutenção dos cascos de um cavalo",
  },
  {
    numero: "04",
    titulo: "Piso, humidade e ambiente rural",
    descricao:
      "Mantenha o local de descanso limpo, com drenagem adequada e sem acumulação permanente de lama ou estrume. Os cascos podem sofrer quando alternam repetidamente entre humidade excessiva e secura. Inspecione também os caminhos, cercas e zonas onde o cavalo circula.",
    imagem:
      "https://rankincountycoop.com/cdn/shop/files/farrier_cowboy_handling_horse_2048x.png?v=1758827947",
    alt: "Cuidados com cavalos num ambiente de trabalho rural",
  },
];

export default function CascosEquinosPage() {
  const [aberto, setAberto] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#f5f3ed] text-[#26352a]">
      {/* Navegação */}
      <div className="border-b border-[#dce3d8] bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-5 py-4 text-sm">
          <Link
            href="/pecuaria"
            className="text-green-800 hover:underline"
          >
            Pecuária
          </Link>
          <span className="text-gray-400">/</span>
          <Link
            href="/pecuaria/equinos"
            className="text-green-800 hover:underline"
          >
            Equinos
          </Link>
          <span className="text-gray-400">/</span>
          <span className="font-semibold">Cuidados com os cascos</span>
        </div>
      </div>

      {/* Imagem principal */}
      <section className="relative isolate min-h-[530px] overflow-hidden bg-[#173b28] md:min-h-[620px]">
        <Image
          src="/img/cascos-equinos-angola.jpg"
          alt="Cavalo num ambiente rural angolano"
          fill
          priority
          unoptimized
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#10291e]/95 via-[#10291e]/65 to-black/10" />

        <div className="relative mx-auto flex min-h-[530px] max-w-7xl items-center px-5 py-16 md:min-h-[620px] md:px-10">
          <div className="max-w-3xl text-white">
            <span className="mb-6 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-green-100">
              Maneio e saúde dos equinos
            </span>

            <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Cascos saudáveis,
              <span className="block text-[#c5e7a4]">
                cavalos mais fortes.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/90 md:text-lg">
              O cuidado dos cascos começa na observação diária, na limpeza
              cuidadosa e num ambiente adequado. No campo angolano, a prevenção
              ajuda a proteger a mobilidade, o bem-estar e a capacidade de
              trabalho dos equinos.
            </p>

            <a
              href="#cuidados"
              className="mt-8 inline-flex items-center rounded-xl bg-[#c5e7a4] px-6 py-3.5 font-bold text-[#173b28] shadow-lg transition hover:-translate-y-0.5 hover:bg-white"
            >
              Explorar os cuidados
              <span className="ml-3 text-xl">↓</span>
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#b4d68c] via-[#4c9b5a] to-[#173b28]" />
      </section>

      {/* Introdução */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-10 md:py-20">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-800">
            A base da locomoção
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
            O casco merece atenção todos os dias
          </h2>
          <div className="mt-6 h-1.5 w-20 rounded-full bg-green-700" />
        </div>

        <div className="space-y-5 text-base leading-8 text-[#536056]">
          <p className="text-justify">
            Os cascos suportam o peso do cavalo e ajudam a absorver as forças
            produzidas durante a marcha. Quando não recebem os cuidados
            necessários, podem surgir desconforto, lesões e dificuldades de
            locomoção, com consequências para a alimentação, o trabalho e o
            bem-estar do animal.
          </p>
          <p className="text-justify">
            Nas explorações rurais de Angola, os cuidados devem considerar as
            condições do terreno, a disponibilidade de água, o tipo de
            alojamento, as distâncias percorridas e os materiais utilizados
            nas instalações. A observação regular e a intervenção precoce
            ajudam a evitar que pequenos problemas se agravem.
          </p>
        </div>
      </section>

      {/* Cuidados ilustrados */}
      <section id="cuidados" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-800">
              Maneio prático
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Como cuidar dos cascos no dia a dia
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              Cuidados simples, executados com segurança e regularidade,
              contribuem para a saúde dos equinos.
            </p>
          </div>

          <div className="space-y-14 md:space-y-20">
            {secoes.map((secao, indice) => (
              <article
                key={secao.numero}
                className={`grid items-center gap-8 md:grid-cols-2 md:gap-14 ${
                  indice % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="group relative overflow-hidden rounded-[2rem] bg-[#e5e7df] shadow-xl">
                  <div className="relative aspect-[4/3]">
                    <img
                      src={secao.imagem}
                      alt={secao.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <span className="absolute bottom-5 left-5 rounded-full bg-white/95 px-4 py-2 text-sm font-black text-green-900 shadow">
                      Cuidado {secao.numero}
                    </span>
                  </div>
                </div>

                <div className="py-2">
                  <p className="text-sm font-bold tracking-[0.18em] text-green-800">
                    ETAPA {secao.numero}
                  </p>
                  <h3 className="mt-3 text-2xl font-black leading-tight md:text-3xl">
                    {secao.titulo}
                  </h3>
                  <p className="mt-5 text-justify text-base leading-8 text-[#5b655d]">
                    {secao.descricao}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      setAberto(aberto === indice ? null : indice)
                    }
                    aria-expanded={aberto === indice}
                    className="mt-6 inline-flex items-center gap-3 border-b-2 border-green-700 pb-2 font-bold text-green-900 transition hover:gap-5"
                  >
                    {aberto === indice
                      ? "Ocultar recomendação"
                      : "Recomendação prática"}
                    <span className="text-xl">
                      {aberto === indice ? "−" : "+"}
                    </span>
                  </button>

                  {aberto === indice && (
                    <div className="mt-4 rounded-2xl border-l-4 border-green-700 bg-[#f0f5ed] p-5 leading-7 text-[#425447]">
                      {indice === 0 &&
                        "Observe os quatro membros, compare os cascos e registe alterações. Se o cavalo não permitir levantar um membro, não force a posição: peça ajuda a uma pessoa experiente."}
                      {indice === 1 &&
                        "Faça a limpeza num local firme e seguro. Evite introduzir ferramentas profundamente na ranilha. Se encontrar um objeto cravado, não o retire por conta própria; contacte um veterinário."}
                      {indice === 2 &&
                        "Não existe um intervalo único de aparagem para todos os cavalos. A frequência depende do crescimento do casco, do desgaste, do terreno e da avaliação do profissional."}
                      {indice === 3 &&
                        "Retire estrume acumulado, corrija zonas de drenagem quando possível e verifique se existem pregos, arames, pedras afiadas ou outros objetos que possam provocar ferimentos."}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sinais de alerta */}
      <section className="bg-[#173b28] px-5 py-16 text-white md:px-10 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c5e7a4]">
              Atenção à saúde
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
              Quando chamar o veterinário?
            </h2>
            <p className="mt-5 leading-8 text-white/75">
              Nem todos os problemas do casco podem ser resolvidos com limpeza
              ou aparagem. Dor e alterações na marcha exigem avaliação
              profissional.
            </p>
          </div>

          <div className="space-y-0 divide-y divide-white/15">
            {[
              [
                "Claudicação ou dor",
                "O cavalo manca, evita apoiar um membro ou apresenta dificuldade em andar.",
              ],
              [
                "Calor, inchaço ou secreção",
                "O casco ou a região envolvente apresenta calor anormal, inchaço, mau cheiro ou secreção.",
              ],
              [
                "Feridas ou objetos cravados",
                "Há uma perfuração, fissura profunda ou suspeita de prego ou outro objeto penetrante.",
              ],
              [
                "Alteração súbita",
                "O cavalo deixa de apoiar o membro ou demonstra dor intensa de forma repentina.",
              ],
            ].map(([titulo, descricao]) => (
              <div key={titulo} className="py-5 first:pt-0 last:pb-0">
                <h3 className="font-bold text-[#d3edb7]">{titulo}</h3>
                <p className="mt-2 leading-7 text-white/80">{descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rotina de prevenção */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="rounded-[2rem] border border-[#dce5d7] bg-white p-7 shadow-sm md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-800">
            Rotina recomendada
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Prevenir é melhor do que tratar
          </h2>

          <div className="mt-9 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                titulo: "Todos os dias",
                texto: "Observar a marcha, verificar os cascos e procurar feridas ou objetos presos.",
              },
              {
                titulo: "Depois do trabalho",
                texto: "Verificar se existem pedras, lama ou detritos e limpar quando necessário.",
              },
              {
                titulo: "Regularmente",
                texto: "Avaliar o crescimento e o equilíbrio dos cascos com um ferrador qualificado.",
              },
              {
                titulo: "Sempre que necessário",
                texto: "Solicitar assistência veterinária perante dor, feridas ou alterações suspeitas.",
              },
            ].map((item) => (
              <div key={item.titulo} className="border-t-4 border-green-700 pt-5">
                <h3 className="text-lg font-black text-green-950">
                  {item.titulo}
                </h3>
                <p className="mt-3 leading-7 text-gray-600">{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Encerramento */}
      <section className="border-t border-[#dce3d8] bg-[#e9eee5]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-10">
          <div>
            <h2 className="text-2xl font-black text-green-950">
              Cuidar dos cascos é proteger o cavalo.
            </h2>
            <p className="mt-2 max-w-2xl leading-7 text-gray-600">
              A prevenção começa no campo, com observação, higiene, instalações
              adequadas e apoio de profissionais qualificados.
            </p>
          </div>

          <Link
            href="/pecuaria/equinos"
            className="inline-flex w-fit items-center rounded-xl bg-green-800 px-6 py-3 font-bold text-white transition hover:bg-green-950"
          >
            Voltar aos equinos
          </Link>
        </div>
      </section>
    </main>
  );
}
