
import Link from "next/link";

const imagens = {
  capa:
    "https://images.openai.com/static-rsc-4/NzZAXd-HdzeVbsF61LB9epfuxUzETyhnty9Fj5MnmW9pdyZ5uw-GG0yioEI_cPtPLb4G5mnZOc_ugqPoCDvTiLWaKLLnRqnkM7Hfo5C8RlbXKGNhov9Zmpa0hebH_vMrkRDkM",
  campo:
    "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=85",
  folhas:
    "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=1000&q=85",
};

const secoes = [
  {
    numero: "01",
    titulo: "Identificação botânica",
    texto:
      "A alface (Lactuca sativa L.) pertence à família Asteraceae. É uma hortaliça folhosa cultivada principalmente pelas folhas, consumidas frescas. O desenvolvimento depende da variedade, temperatura, luminosidade, água disponível e fertilidade do solo.",
    pontos: [
      "Família botânica: Asteraceae.",
      "Parte comercial: folhas e, conforme o tipo, cabeça formada pelas folhas.",
      "Propagação habitual: por sementes.",
      "Ciclo: variável conforme cultivar, clima e sistema de produção.",
    ],
  },
  {
    numero: "02",
    titulo: "Tipos e escolha de variedades",
    texto:
      "A escolha deve considerar o clima da região, a preferência dos consumidores, a disponibilidade de sementes e a tolerância a problemas fitossanitários.",
    pontos: [
      "Crespa: folhas onduladas e textura característica.",
      "Lisa: folhas mais suaves e pouco onduladas.",
      "Americana: forma cabeça compacta, dependendo da cultivar.",
      "Romana: folhas alongadas e nervura central evidente.",
      "Roxa: pigmentação característica, útil para diversificar a oferta.",
    ],
  },
  {
    numero: "03",
    titulo: "Clima e adaptação em Angola",
    texto:
      "A alface desenvolve-se geralmente melhor sob temperaturas moderadas. O calor excessivo pode acelerar o espigamento floral, aumentar o amargor e reduzir a qualidade comercial. A época adequada deve ser definida com base nas condições locais.",
    pontos: [
      "Registar temperatura máxima e mínima durante o ciclo.",
      "Nas zonas quentes, avaliar épocas mais frescas e sombreamento moderado.",
      "Nas zonas de altitude, testar cultivares e calendários adequados.",
      "Usar registos locais antes de recomendar uma variedade para toda a província.",
    ],
  },
  {
    numero: "04",
    titulo: "Solo e preparação da parcela",
    texto:
      "Solos férteis, bem drenados e com boa estrutura favorecem o desenvolvimento das raízes. O encharcamento prejudica a cultura e pode aumentar os problemas radiculares.",
    pontos: [
      "Realizar análise do solo antes de definir a fertilização.",
      "Melhorar a drenagem quando necessário.",
      "Incorporar matéria orgânica madura e de origem segura.",
      "Evitar parcelas com histórico de doenças do solo sem avaliação prévia.",
    ],
  },
  {
    numero: "05",
    titulo: "Sementeira e produção de mudas",
    texto:
      "A produção de mudas em tabuleiros limpos permite maior uniformidade e facilita o transplante. Utilizar sementes de procedência conhecida e substrato apropriado.",
    pontos: [
      "Identificar cada lote com cultivar, data e origem da semente.",
      "Manter humidade adequada sem saturar o substrato.",
      "Garantir luz suficiente e ventilação.",
      "Selecionar mudas vigorosas, uniformes e sem sintomas suspeitos.",
      "Endurecer gradualmente as mudas antes do transplante, quando necessário.",
    ],
  },
  {
    numero: "06",
    titulo: "Transplante e gestão da cultura",
    texto:
      "O transplante deve ser realizado quando as mudas apresentarem desenvolvimento suficiente para suportar a mudança. O espaçamento depende do tipo de alface, cultivar, sistema de produção e dimensão comercial pretendida.",
    pontos: [
      "Transplantar preferencialmente nas horas menos quentes.",
      "Evitar enterrar excessivamente o colo da planta.",
      "Manter o espaçamento definido no plano de produção.",
      "Repor falhas apenas quando a diferença de desenvolvimento não comprometer o lote.",
    ],
  },
  {
    numero: "07",
    titulo: "Irrigação e gestão da água",
    texto:
      "A alface tem raízes relativamente superficiais e requer humidade do solo consistente. A falta de água prejudica o crescimento; o excesso pode favorecer doenças e perdas de nutrientes.",
    pontos: [
      "Ajustar a frequência à textura do solo, clima e fase de desenvolvimento.",
      "Verificar a humidade na zona radicular.",
      "Inspecionar regularmente tubos, filtros e emissores.",
      "Avaliar a qualidade microbiológica da água usada em produtos consumidos crus.",
      "Registar o volume de água aplicado sempre que possível.",
    ],
  },
  {
    numero: "08",
    titulo: "Nutrição e fertilização",
    texto:
      "A fertilização deve responder às necessidades da cultura e à fertilidade real da parcela. Aplicações excessivas, especialmente de azoto, podem reduzir a qualidade, aumentar perdas e favorecer desequilíbrios nutricionais.",
    pontos: [
      "Basear as doses na análise do solo e, quando viável, da água.",
      "Considerar matéria orgânica, cultura anterior e produtividade pretendida.",
      "Fracionar aplicações quando o sistema e a recomendação técnica o justificarem.",
      "Evitar receitas universais sem conhecer o solo, a cultivar e o sistema de irrigação.",
    ],
  },
  {
    numero: "09",
    titulo: "Pragas, doenças e prevenção",
    texto:
      "A monitorização frequente ajuda a identificar alterações antes que se tornem perdas importantes. Uma fotografia pode documentar um sintoma, mas não confirma isoladamente a causa.",
    pontos: [
      "Inspecionar folhas novas, face inferior das folhas, colo e raízes.",
      "Procurar pulgões, lesmas e outros organismos que possam causar danos.",
      "Observar manchas, murchidão, podridões e deformações.",
      "Retirar plantas muito afetadas quando indicado e higienizar ferramentas.",
      "Confirmar o diagnóstico antes de aplicar qualquer produto fitossanitário.",
      "Respeitar o rótulo, os equipamentos de proteção e o intervalo de segurança.",
    ],
  },
  {
    numero: "10",
    titulo: "Colheita e pós-colheita",
    texto:
      "A colheita deve ocorrer quando as plantas atingirem o padrão comercial definido para o mercado. A alface é sensível à perda de água, ao esmagamento e ao aquecimento após a colheita.",
    pontos: [
      "Colher em condições que reduzam o aquecimento do produto.",
      "Usar utensílios e recipientes limpos.",
      "Separar folhas deterioradas e unidades sem qualidade comercial.",
      "Evitar contacto com água contaminada e superfícies sujas.",
      "Manter o produto fresco e reduzir o tempo até à comercialização.",
    ],
  },
  {
    numero: "11",
    titulo: "Mercado e viabilidade económica",
    texto:
      "A rentabilidade depende do rendimento comercializável, dos custos de sementes, água, mão de obra, fertilizantes, transporte e perdas pós-colheita. A produção deve ser planeada com base na procura real.",
    pontos: [
      "Consultar vendedores, mercados e compradores antes de plantar.",
      "Registar custos por parcela e por ciclo.",
      "Contabilizar plantas comercializáveis e perdas.",
      "Comparar o preço recebido com o custo total de produção.",
      "Planear sementeiras escalonadas quando a procura justificar.",
    ],
  },
  {
    numero: "12",
    titulo: "Investigação agronómica",
    texto:
      "Ensaios locais permitem comparar cultivares e práticas de produção sem assumir que resultados obtidos noutros países se aplicam diretamente às condições angolanas.",
    pontos: [
      "Definir uma pergunta de investigação e uma hipótese.",
      "Comparar tratamentos com repetições e distribuição aleatória.",
      "Registar datas, condições climáticas, irrigação e operações culturais.",
      "Medir sobrevivência, crescimento, rendimento comercial e perdas.",
      "Analisar os dados e documentar as limitações do ensaio.",
      "Repetir a avaliação em épocas ou locais diferentes antes de generalizar conclusões.",
    ],
  },
];

const indicadores = [
  ["Nome científico", "Lactuca sativa L."],
  ["Família", "Asteraceae"],
  ["Propagação", "Sementes"],
  ["Parte comercial", "Folhas"],
];

function Imagem({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`h-full w-full object-cover ${className}`}
    />
  );
}

export default function AlfacePage() {
  return (
    <main className="min-h-screen bg-[#f5f8f4] text-[#17221b]">
      <section className="relative isolate overflow-hidden bg-[#103d29]">
        <div className="absolute inset-0 -z-20">
          <Imagem
            src={imagens.capa}
            alt="Imagem de referência de alface para a apresentação da cultura"
            className="object-cover opacity-35"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b2d1e]/95 via-[#103d29]/85 to-[#103d29]/35" />

        <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-green-100">
            <Link href="/" className="transition hover:text-white">
              Início
            </Link>
            <span>/</span>
            <Link
              href="/agricultura"
              className="transition hover:text-white"
            >
              Agricultura
            </Link>
            <span>/</span>
            <span className="text-white">Alface</span>
          </nav>

          <div className="grid items-center gap-10 py-14 md:grid-cols-[1.1fr_0.9fr] md:py-24">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-green-200/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-green-100">
                Guia tecnológico AGROINOVA
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Cultura da
                <span className="block text-[#9fe5ad]">alface</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-green-50 sm:text-lg">
                Guia técnico de produção, gestão agronómica e investigação
                aplicada à horticultura, com foco na adaptação das práticas às
                condições agrícolas de Angola.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#maneio"
                  className="rounded-xl bg-[#a7e8b1] px-6 py-3 font-semibold text-[#103d29] transition hover:bg-white"
                >
                  Consultar guia
                </a>
                <a
                  href="#referencias"
                  className="rounded-xl border border-white/35 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Referências técnicas
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-sm">
              <div className="h-64 overflow-hidden rounded-2xl sm:h-80">
                <Imagem
                  src={imagens.folhas}
                  alt="Folhas verdes de hortaliças, imagem ilustrativa da alimentação vegetal"
                />
              </div>
              <div className="grid grid-cols-2 gap-3 p-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-green-100">
                    Nome científico
                  </p>
                  <p className="mt-1 font-semibold text-white">
                    Lactuca sativa L.
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-green-100">
                    Área de estudo
                  </p>
                  <p className="mt-1 font-semibold text-white">
                    Horticultura
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {indicadores.map(([titulo, valor]) => (
            <article
              key={titulo}
              className="rounded-2xl border border-[#e1e9df] bg-white p-5 shadow-sm"
            >
              <p className="text-sm text-slate-500">{titulo}</p>
              <p className="mt-2 text-lg font-bold text-[#166534]">{valor}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="maneio"
        className="mx-auto max-w-7xl scroll-mt-8 px-5 pb-16 sm:px-8"
      >
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#268047]">
            Conhecimento técnico
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Manual de produção e investigação
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Consulte os principais componentes do sistema de produção. As
            recomendações devem ser ajustadas à província, à época, ao solo, à
            água, à cultivar e aos recursos disponíveis.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {secoes.map((secao) => (
            <article
              key={secao.numero}
              className="group rounded-2xl border border-[#e0e8df] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#9bc9a3] hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e9f7eb] font-bold text-[#166534]">
                  {secao.numero}
                </span>
                <h3 className="pt-1 text-xl font-bold leading-snug text-[#173b27]">
                  {secao.titulo}
                </h3>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                {secao.texto}
              </p>

              <ul className="mt-5 space-y-3">
                {secao.pontos.map((ponto) => (
                  <li
                    key={ponto}
                    className="flex gap-3 text-sm leading-6 text-slate-700"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#29934a]" />
                    <span>{ponto}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#dce8dc] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#268047]">
              Observação no campo
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Registar antes de recomendar
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Uma recomendação agronómica responsável deve ser apoiada por
              observações, histórico da parcela e, quando necessário, análises
              laboratoriais. Fotografias ajudam a documentar a cultura, mas
              não substituem o diagnóstico técnico.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li>— Província, município e localização da parcela.</li>
              <li>— Data de sementeira, cultivar e origem das sementes.</li>
              <li>— Tipo de solo, fonte de água e sistema de irrigação.</li>
              <li>— Sintomas observados, distribuição e evolução no campo.</li>
              <li>— Quantidade colhida, perdas e custos de produção.</li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-3xl bg-[#edf5ec]">
            <div className="h-72 sm:h-96">
              <Imagem
                src={imagens.campo}
                alt="Imagem ilustrativa de vegetais frescos e folhas verdes"
              />
            </div>
            <div className="p-5">
              <p className="font-semibold text-[#17472b]">
                Documentação técnica da cultura
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Associar fotografias datadas a registos de campo ajuda a
                acompanhar o crescimento e a comparar ciclos de produção.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="referencias"
        className="mx-auto max-w-7xl scroll-mt-8 px-5 py-14 sm:px-8"
      >
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#268047]">
          Bibliografia e consulta
        </p>
        <h2 className="mt-3 text-3xl font-bold">
          Fontes técnicas para aprofundamento
        </h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          As publicações seguintes servem de base para estudo. As orientações
          desenvolvidas para outros países devem ser validadas antes da sua
          aplicação nas condições agroecológicas angolanas.
        </p>

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          <a
            href="https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1009227/1/DOC142.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-[#dfe8dd] bg-white p-6 transition hover:border-[#8cbd96] hover:shadow-md"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-[#268047]">
              Embrapa · Manual técnico
            </p>
            <h3 className="mt-3 text-lg font-bold">
              Manual de boas práticas agrícolas na produção de alface
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Produção, higiene, colheita, pós-colheita, conservação e
              comercialização.
            </p>
            <span className="mt-4 inline-block font-semibold text-[#166534]">
              Consultar publicação →
            </span>
          </a>

          <a
            href="https://www.embrapa.br/en/busca-de-imagens/-/midia/4492001/horta-de-alface"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-[#dfe8dd] bg-white p-6 transition hover:border-[#8cbd96] hover:shadow-md"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-[#268047]">
              Embrapa · Referência visual
            </p>
            <h3 className="mt-3 text-lg font-bold">
              Horta de alface
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Registo fotográfico de uma plantação de alface para consulta e
              comparação visual.
            </p>
            <span className="mt-4 inline-block font-semibold text-[#166534]">
              Consultar imagem original →
            </span>
          </a>

          <a
            href="https://www.infoteca.cnptia.embrapa.br/infoteca/handle/doc/1092024"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-[#dfe8dd] bg-white p-6 transition hover:border-[#8cbd96] hover:shadow-md"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-[#268047]">
              Embrapa · Guia de cultivo
            </p>
            <h3 className="mt-3 text-lg font-bold">
              Cultivo de alface-crespa no Submédio do Vale do São Francisco
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Material de consulta para compreender práticas de produção em
              ambiente semiárido, sem substituir validação local.
            </p>
            <span className="mt-4 inline-block font-semibold text-[#166534]">
              Consultar documento →
            </span>
          </a>

          <a
            href="https://www.fao.org/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-[#dfe8dd] bg-white p-6 transition hover:border-[#8cbd96] hover:shadow-md"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-[#268047]">
              FAO · Recursos internacionais
            </p>
            <h3 className="mt-3 text-lg font-bold">
              Organização das Nações Unidas para a Alimentação e a Agricultura
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Informação de referência sobre agricultura, água, solos e
              sistemas alimentares.
            </p>
            <span className="mt-4 inline-block font-semibold text-[#166534]">
              Consultar recursos →
            </span>
          </a>
        </div>
      </section>

      <footer className="bg-[#103d29]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-bold tracking-wide text-white">
              AGROINOVA-ANGOLA
            </p>
            <p className="mt-1 text-sm text-green-100">
              Conhecimento, Tecnologia e Inovação ao Serviço do Campo Angolano.
            </p>
          </div>
          <Link
            href="/agricultura"
            className="text-sm font-semibold text-[#a7e8b1] hover:text-white"
          >
            Voltar à agricultura →
          </Link>
        </div>
      </footer>
    </main>
  );
}
