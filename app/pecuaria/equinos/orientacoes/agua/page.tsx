
"use client";

import Link from "next/link";

const imagemBebedouro =
  "https://cdn.shopify.com/s/files/1/0964/4405/5835/files/shutterstock_399434005-1024x683_1800x.jpg?v=1760982475";

const imagemPastagem =
  "https://agrarzone.at/media/cc/3b/08/1698297788/weidetraenke-1000-liter-2_45e89ac7b17ef32d.jpg";

const imagemCalor =
  "https://www.platinumperformance.com/on/demandware.static/-/Library-Sites-PPSharedLibrary/default/dw7bfce35e/cards/horses/summer-support.jpg";

const secoes = [
  {
    numero: "01",
    titulo: "Necessidades de água",
    texto:
      "A água participa na digestão, na circulação sanguínea, na regulação da temperatura corporal e no funcionamento dos órgãos. A necessidade diária varia com o peso do cavalo, a alimentação, o exercício, a temperatura ambiente e o estado fisiológico.",
    recomendacao:
      "Observe o consumo habitual de cada animal e garanta que a água esteja disponível ao longo do dia. Não utilize uma quantidade fixa como limite universal para todos os equinos.",
  },
  {
    numero: "02",
    titulo: "Disponibilidade e acesso",
    texto:
      "Os cavalos devem ter acesso frequente e regular a água limpa e segura. Um cavalo adulto pode consumir aproximadamente 20 a 45 litros por dia, mas o consumo pode ser superior em períodos de calor, trabalho intenso ou lactação.",
    recomendacao:
      "Verifique se todos os animais conseguem chegar ao bebedouro sem obstáculos, competição excessiva ou risco de ferimentos. Confirme também se existe água suficiente durante a noite e nos períodos de maior calor.",
  },
  {
    numero: "03",
    titulo: "Qualidade da água",
    texto:
      "A água deve estar livre de contaminação visível, resíduos químicos, fezes e odores anormais. Poços, tanques e fontes naturais podem sofrer contaminação, pelo que a aparência limpa, por si só, não garante a segurança da água.",
    recomendacao:
      "Quando a origem da água for duvidosa, solicite uma avaliação da sua qualidade. Proteja os pontos de abastecimento contra estrume, águas residuais e outros focos de contaminação.",
  },
  {
    numero: "04",
    titulo: "Bebedouros e recipientes",
    texto:
      "Os recipientes devem ser estáveis, resistentes, acessíveis e fáceis de lavar. A acumulação de algas, lodo, folhas e restos de alimento pode comprometer a qualidade da água e reduzir o interesse dos animais em beber.",
    recomendacao:
      "Esvazie e lave os recipientes sempre que necessário. Verifique fugas, válvulas, torneiras, bordas cortantes e a estabilidade do bebedouro.",
  },
  {
    numero: "05",
    titulo: "Calor e exercício",
    texto:
      "Em dias quentes ou após esforço físico, os cavalos podem perder água e eletrólitos através do suor. O risco aumenta quando o abastecimento é insuficiente ou quando o animal não consegue recuperar adequadamente após o trabalho.",
    recomendacao:
      "Disponibilize água e um local de descanso à sombra. Após exercício intenso, observe a respiração, o suor e o comportamento do cavalo. Perante sinais de exaustão ou doença, solicite assistência veterinária.",
  },
  {
    numero: "06",
    titulo: "Sinais de desidratação",
    texto:
      "Diminuição do consumo de água, gengivas secas, fraqueza, urina reduzida e alterações do comportamento podem indicar um problema. Estes sinais não confirmam isoladamente a desidratação, pois também podem estar associados a outras doenças.",
    recomendacao:
      "Se o cavalo não conseguir beber, apresentar fraqueza acentuada, cólica, dificuldade em manter-se de pé ou deterioração rápida, contacte imediatamente um médico veterinário.",
  },
];

const rotina = [
  {
    titulo: "De manhã",
    texto: "Confirmar o abastecimento, o aspeto da água e o funcionamento dos bebedouros.",
  },
  {
    titulo: "Durante o dia",
    texto: "Reforçar a vigilância em períodos de calor e observar alterações no consumo.",
  },
  {
    titulo: "Depois do trabalho",
    texto: "Disponibilizar água, descanso e observar a recuperação do animal.",
  },
  {
    titulo: "Regularmente",
    texto: "Lavar os recipientes, verificar as instalações e avaliar a qualidade da água quando necessário.",
  },
];

export default function AguaEquinosPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ed] text-[#24372b]">
      {/* Navegação */}
      <div className="border-b border-[#dce3d8] bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-5 py-4 text-sm">
          <Link href="/pecuaria" className="text-green-800 hover:underline">
            Pecuária
          </Link>
          <span className="text-slate-400">/</span>
          <Link
            href="/pecuaria/equinos"
            className="text-green-800 hover:underline"
          >
            Equinos
          </Link>
          <span className="text-slate-400">/</span>
          <span className="font-semibold">Água e hidratação</span>
        </div>
      </div>

      {/* Destaque principal */}
      <section className="relative isolate overflow-hidden bg-[#163b29]">
        <img
          src={imagemBebedouro}
          alt="Cavalo a beber água num bebedouro de uma exploração rural"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#10281d]/95 via-[#10281d]/75 to-[#10281d]/20" />

        <div className="relative mx-auto flex min-h-[570px] max-w-7xl items-center px-5 py-16 md:min-h-[650px] md:px-10">
          <div className="max-w-3xl text-white">
            <p className="text-sm font-bold uppercase tracking-[0.23em] text-[#c5e7a4]">
              AGROINOVA ANGOLA · Produção equina
            </p>

            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Água e hidratação
              <span className="block text-[#c5e7a4]">
                dos equinos
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 md:text-lg">
              Água limpa, acesso regular e vigilância diária são fundamentais
              para a saúde dos cavalos. Conheça práticas de maneio que podem
              ser aplicadas em explorações pecuárias e ambientes rurais de
              Angola.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#orientacoes"
                className="rounded-xl bg-[#c5e7a4] px-6 py-3.5 font-bold text-[#173b28] shadow-lg transition hover:-translate-y-0.5 hover:bg-white"
              >
                Explorar orientações
              </a>
              <a
                href="#rotina"
                className="rounded-xl border border-white/50 bg-white/10 px-6 py-3.5 font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Ver rotina diária
              </a>
            </div>
          </div>
        </div>
        <div className="relative h-2 bg-gradient-to-r from-[#c5e7a4] via-green-600 to-green-950" />
      </section>

      {/* Faixa informativa */}
      <section className="border-b border-[#dce3d8] bg-white">
        <div className="mx-auto grid max-w-7xl divide-y divide-[#e4e8e1] px-5 py-2 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:px-10">
          {[
            {
              titulo: "Água limpa",
              texto: "Reduzir o risco de contaminação.",
            },
            {
              titulo: "Acesso regular",
              texto: "Evitar interrupções no abastecimento.",
            },
            {
              titulo: "Observação diária",
              texto: "Identificar alterações precocemente.",
            },
          ].map((item, indice) => (
            <div
              key={item.titulo}
              className={`py-6 sm:px-7 ${
                indice === 0 ? "sm:pl-0" : ""
              }`}
            >
              <p className="text-lg font-black text-green-950">
                {item.titulo}
              </p>
              <p className="mt-1 leading-6 text-slate-600">{item.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Introdução */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-10 md:py-20">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-800">
            Maneio e bem-estar
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
            A hidratação começa na gestão da exploração
          </h2>
          <div className="mt-6 h-1.5 w-20 rounded-full bg-green-700" />
        </div>

        <div className="space-y-5 text-justify text-base leading-8 text-[#58635a]">
          <p>
            A água é um recurso essencial para a manutenção da saúde e do
            bem-estar dos equinos. O seu consumo depende das condições
            ambientais, da alimentação, da intensidade do exercício e das
            necessidades individuais de cada animal.
          </p>
          <p>
            Em explorações rurais angolanas, a gestão da água pode exigir
            atenção especial durante períodos de calor, em locais com
            abastecimento irregular ou quando os animais percorrem longas
            distâncias. A organização dos pontos de água e a limpeza dos
            recipientes fazem parte do maneio diário.
          </p>
          <p>
            A água deve estar acessível e ser palatável. Uma redução repentina
            do consumo pode ser um sinal de problema no abastecimento, na
            qualidade da água ou na saúde do próprio cavalo.
          </p>
        </div>
      </section>

      {/* Imagem editorial */}
      <section className="bg-[#e9eee5]">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 md:grid-cols-2 md:px-10 md:py-16">
          <div className="overflow-hidden rounded-[2rem] shadow-xl">
            <img
              src={imagemPastagem}
              alt="Cavalo a beber num bebedouro instalado ao ar livre"
              loading="lazy"
              className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 md:h-[410px]"
            />
          </div>

          <div className="py-3">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-800">
              Na prática
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
              O ponto de água também faz parte das instalações
            </h2>
            <p className="mt-5 text-justify leading-8 text-[#58635a]">
              O bebedouro deve estar colocado numa zona acessível, firme e
              segura. Sempre que possível, evite locais onde a água possa
              acumular lama, receber diretamente estrume ou ficar exposta a
              fontes de contaminação.
            </p>
            <p className="mt-4 text-justify leading-8 text-[#58635a]">
              Nas explorações com vários animais, verifique se existe espaço
              suficiente para beberem sem conflitos e se o abastecimento
              consegue acompanhar o consumo do grupo.
            </p>
          </div>
        </div>
      </section>

      {/* Orientações */}
      <section
        id="orientacoes"
        className="scroll-mt-6 bg-white px-5 py-16 md:px-10 md:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-800">
              Guia técnico
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Orientações para o maneio da água
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Seis aspetos a acompanhar na rotina da exploração, desde a
              disponibilidade da água até à identificação de sinais de alerta.
            </p>
          </div>

          <div className="space-y-0 divide-y divide-[#e2e8df]">
            {secoes.map((secao) => (
              <article
                key={secao.numero}
                className="grid gap-4 py-8 first:pt-0 last:pb-0 md:grid-cols-[100px_0.8fr_1.2fr] md:gap-8"
              >
                <div>
                  <span className="text-4xl font-black text-[#b7cbb1]">
                    {secao.numero}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-black leading-snug text-green-950 md:text-2xl">
                    {secao.titulo}
                  </h3>
                </div>

                <div>
                  <p className="text-justify leading-8 text-slate-600">
                    {secao.texto}
                  </p>
                  <div className="mt-4 border-l-4 border-green-700 bg-[#f2f5ef] px-5 py-4">
                    <p className="text-sm font-bold uppercase tracking-wide text-green-900">
                      Recomendação prática
                    </p>
                    <p className="mt-2 leading-7 text-[#536056]">
                      {secao.recomendacao}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Calor e exercício */}
      <section className="bg-[#173b28] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center md:px-10 md:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c5e7a4]">
              Atenção ao clima
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
              Calor, suor e recuperação
            </h2>
            <p className="mt-5 text-justify leading-8 text-white/80">
              O calor e o esforço físico podem aumentar as perdas de água
              através do suor. Depois do trabalho, o cavalo precisa de um
              ambiente seguro para recuperar, com acesso à água e observação
              do seu estado geral.
            </p>
            <p className="mt-4 text-justify leading-8 text-white/80">
              Se houver suor excessivo, fraqueza, respiração anormal,
              comportamento invulgar ou dificuldade de recuperação, procure
              aconselhamento veterinário. Evite administrar eletrólitos ou
              tratamentos sem orientação adequada.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src={imagemCalor}
              alt="Cavalo a beber água num dia quente"
              loading="lazy"
              className="h-[300px] w-full object-cover md:h-[420px]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-16">
              <p className="text-xl font-black">
                Água disponível e descanso adequado
              </p>
              <p className="mt-2 text-sm leading-6 text-white/85">
                Acompanhar o cavalo durante e depois do esforço ajuda a
                reconhecer alterações precocemente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rotina diária */}
      <section
        id="rotina"
        className="scroll-mt-6 px-5 py-16 md:px-10 md:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-800">
              Organização diária
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Uma rotina simples de verificação
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              A regularidade ajuda a detetar problemas de abastecimento,
              higiene e comportamento antes que afetem a saúde dos animais.
            </p>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {rotina.map((item, indice) => (
              <article
                key={item.titulo}
                className="border-t-4 border-green-800 pt-5"
              >
                <p className="text-sm font-bold uppercase tracking-wider text-green-800">
                  Etapa 0{indice + 1}
                </p>
                <h3 className="mt-3 text-xl font-black text-green-950">
                  {item.titulo}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{item.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sinais de alerta */}
      <section className="border-y border-amber-200 bg-[#fff7e8] px-5 py-12 md:px-10 md:py-14">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[0.7fr_1.3fr] md:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-800">
              Saúde animal
            </p>
            <h2 className="mt-3 text-3xl font-black text-amber-950">
              Quando pedir ajuda?
            </h2>
          </div>

          <div>
            <p className="leading-8 text-amber-950">
              Contacte um médico veterinário se o cavalo deixar de beber,
              apresentar fraqueza acentuada, sinais de cólica, dificuldade
              em manter-se de pé ou uma alteração súbita do comportamento.
              A avaliação profissional é especialmente importante quando os
              sinais são intensos ou persistentes.
            </p>
          </div>
        </div>
      </section>

      {/* Navegação final */}
      <section className="bg-white px-5 py-10 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-800">
              Continuar a aprender
            </p>
            <h2 className="mt-2 text-2xl font-black text-green-950">
              Cuidados com os cascos
            </h2>
            <p className="mt-2 leading-7 text-slate-600">
              Aprenda a observar, limpar e acompanhar a saúde dos cascos.
            </p>
          </div>

          <Link
            href="/pecuaria/equinos/orientacoes/cascos"
            className="inline-flex w-fit items-center gap-3 rounded-xl bg-green-800 px-6 py-3.5 font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-green-950"
          >
            Próxima orientação
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mx-auto mt-6 max-w-7xl border-t border-slate-200 pt-5">
          <Link
            href="/pecuaria/equinos"
            className="text-sm font-semibold text-green-800 underline underline-offset-4 hover:text-green-950"
          >
            ← Voltar à página principal de Equinos
          </Link>
        </div>
      </section>
    </main>
  );
}
