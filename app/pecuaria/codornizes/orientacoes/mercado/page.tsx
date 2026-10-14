
"use client";

import Link from "next/link";
import { useState } from "react";

const temas = [
  {
    titulo: "Mercado de ovos",
    resumo: "Identifica clientes e organiza a venda de ovos de codorniz.",
    detalhe:
      "Os potenciais clientes incluem famílias, restaurantes, lojas, mercados e pequenos distribuidores. Antes de aumentar a produção, confirma a procura local, os preços praticados, os requisitos sanitários e as condições de transporte. Define embalagens adequadas e identifica os lotes.",
  },
  {
    titulo: "Mercado de carne",
    resumo: "Avalia a procura por carne e os requisitos de comercialização.",
    detalhe:
      "Investiga o interesse de restaurantes, consumidores e comerciantes. Calcula o custo de criação por ave e confirma a disponibilidade de instalações adequadas para abate, conservação e transporte. A comercialização deve cumprir as exigências sanitárias e legais aplicáveis.",
  },
  {
    titulo: "Clientes e distribuição",
    resumo: "Escolhe canais de venda adequados à dimensão da exploração.",
    detalhe:
      "Podes avaliar vendas diretas, encomendas por telefone, fornecimento regular a estabelecimentos e acordos com revendedores. Compara o preço recebido, a distância, o custo de transporte, os prazos de pagamento e o risco de produtos não vendidos.",
  },
  {
    titulo: "Custos de produção",
    resumo: "Regista alimentação, mão de obra, instalações e outros encargos.",
    detalhe:
      "Inclui ração, pintos ou reprodutores, água, energia, embalagens, transporte, medicamentos e serviços veterinários. Considera também a manutenção, a depreciação dos equipamentos e o valor do trabalho. Separa custos fixos dos custos que variam com a produção.",
  },
  {
    titulo: "Preço de venda",
    resumo: "Define preços a partir dos custos, do mercado e da margem pretendida.",
    detalhe:
      "Calcula o custo unitário com base na quantidade efetivamente comercializável. Compara esse valor com os preços observados na tua região. Um preço aparentemente elevado pode não ser rentável se existirem perdas, transporte caro, embalagens dispendiosas ou baixa procura.",
  },
  {
    titulo: "Higiene e conservação",
    resumo: "Protege a qualidade do produto durante o acondicionamento e a entrega.",
    detalhe:
      "Utiliza recipientes limpos, protege os produtos de contaminação e aplica condições de conservação apropriadas ao tipo de produto. Para carne, assegura a cadeia de frio e o cumprimento dos requisitos sanitários. Para ovos, evita fissuras e manuseamento inadequado.",
  },
  {
    titulo: "Planeamento da produção",
    resumo: "Ajusta o número de aves à procura e à capacidade de venda.",
    detalhe:
      "Estima as quantidades que consegues vender por semana e por mês. Planeia a produção tendo em conta o ciclo de criação, a disponibilidade de alimento, a capacidade das instalações e a regularidade das encomendas. Evita expandir apenas com base em expectativas não confirmadas.",
  },
  {
    titulo: "Registos financeiros",
    resumo: "Acompanha receitas, despesas, perdas e pagamentos pendentes.",
    detalhe:
      "Regista cada compra e venda, a quantidade, a data, o cliente e a forma de pagamento. Analisa os resultados por período e por produto. Estes dados ajudam a descobrir despesas excessivas, clientes mais regulares e oportunidades de melhoria.",
  },
];

const moeda = (valor: number) =>
  new Intl.NumberFormat("pt-PT", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(valor) + " Kz";

export default function MercadoCodornizesPage() {
  const [temaAberto, setTemaAberto] = useState<
    (typeof temas)[number] | null
  >(null);

  const [producao, setProducao] = useState("1000");
  const [preco, setPreco] = useState("100");
  const [custos, setCustos] = useState("65000");
  const [unidade, setUnidade] = useState("ovos");

  const quantidade = Math.max(0, Number(producao) || 0);
  const precoUnitario = Math.max(0, Number(preco) || 0);
  const custoTotal = Math.max(0, Number(custos) || 0);
  const receita = quantidade * precoUnitario;
  const resultado = receita - custoTotal;
  const margem = receita > 0 ? (resultado / receita) * 100 : 0;
  const custoUnitario = quantidade > 0 ? custoTotal / quantidade : 0;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-800 to-emerald-600 px-5 py-14 text-white sm:px-8 lg:py-20">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-36 right-1/4 h-96 w-96 rounded-full border border-white/10" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide">
              AGROINOVA ANGOLA · PECUÁRIA
            </p>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Mercado de Codornizes
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-green-50 sm:text-lg">
              Aprende a avaliar clientes, definir preços, controlar despesas e
              estimar resultados antes de investir ou expandir a produção de
              ovos e carne de codorniz.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#calculadora"
                className="rounded-xl bg-white px-6 py-3 font-bold text-green-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-green-50"
              >
                Calcular viabilidade
              </a>

              <a
                href="#orientacoes"
                className="rounded-xl border border-white/40 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white/20"
              >
                Consultar orientações
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
            <svg
              viewBox="0 0 520 340"
              role="img"
              aria-label="Ilustração de embalagens de ovos, caixa de transporte e atividade comercial"
              className="mx-auto w-full max-w-xl"
            >
              <ellipse cx="260" cy="302" rx="205" ry="17" fill="#052e16" opacity=".25" />

              <rect x="95" y="112" width="210" height="158" rx="20" fill="#dcfce7" />
              <rect x="111" y="130" width="178" height="105" rx="12" fill="#166534" />

              {[0, 1, 2, 3, 4, 5].map((n) => (
                <g key={n} transform={`translate(${132 + (n % 3) * 60} ${153 + Math.floor(n / 3) * 38})`}>
                  <ellipse cx="0" cy="0" rx="17" ry="22" fill="#fef3c7" stroke="#d6a85c" strokeWidth="2" />
                  <ellipse cx="-4" cy="-7" rx="4" ry="7" fill="#fff" opacity=".8" />
                </g>
              ))}

              <rect x="138" y="246" width="124" height="12" rx="6" fill="#86efac" />
              <rect x="334" y="144" width="104" height="126" rx="12" fill="#b77932" />
              <path d="M334 164 L386 190 L438 164" fill="#d6a85c" />
              <path d="M386 190 L386 270" stroke="#fef3c7" strokeWidth="4" />
              <rect x="356" y="204" width="60" height="34" rx="5" fill="#fef3c7" />
              <path d="M367 220 L376 228 L394 211" fill="none" stroke="#166534" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

              <circle cx="373" cy="83" r="35" fill="#fef3c7" />
              <path d="M345 76 Q349 37 385 50 Q410 58 407 79 Q383 61 362 80 Z" fill="#d6a85c" />
              <circle cx="363" cy="81" r="3.5" fill="#1f2937" />
              <path d="M370 90 L381 90 L375 99 Z" fill="#ea580c" />
              <path d="M345 107 Q373 126 399 105 L417 144 L328 144 Z" fill="#22c55e" />
              <path d="M355 143 L350 157 M392 143 L397 157" stroke="#fbbf24" strokeWidth="5" strokeLinecap="round" />

              <path d="M73 83 Q115 43 155 70" fill="none" stroke="#bbf7d0" strokeWidth="3" strokeDasharray="6 7" />
              <circle cx="73" cy="83" r="6" fill="#fef3c7" />
              <circle cx="155" cy="70" r="6" fill="#fef3c7" />
            </svg>

            <div className="mt-4 rounded-2xl bg-white/10 p-4">
              <p className="font-bold">Produção orientada pelo mercado</p>
              <p className="mt-1 text-sm leading-6 text-green-50">
                Conhece a procura, calcula os custos e planeia as vendas antes
                de aumentar a exploração.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              titulo: "Procura",
              texto: "Confirma quem compra, quanto compra e com que frequência.",
              numero: "01",
            },
            {
              titulo: "Custos",
              texto: "Regista todos os encargos ligados à produção e à venda.",
              numero: "02",
            },
            {
              titulo: "Preço",
              texto: "Compara o custo unitário com os preços reais do mercado.",
              numero: "03",
            },
            {
              titulo: "Resultados",
              texto: "Acompanha receitas, despesas, perdas e pagamentos.",
              numero: "04",
            },
          ].map((item) => (
            <article
              key={item.numero}
              className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 font-extrabold text-green-800">
                {item.numero}
              </span>
              <h2 className="mt-4 text-xl font-bold text-green-950">
                {item.titulo}
              </h2>
              <p className="mt-2 leading-7 text-slate-600">{item.texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="orientacoes" className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
            Gestão comercial
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Como organizar o negócio
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            Consulta cada área para conhecer os principais aspetos da
            comercialização de ovos e carne de codorniz.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {temas.map((tema, index) => (
            <button
              type="button"
              key={tema.titulo}
              onClick={() => setTemaAberto(tema)}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 font-extrabold text-green-800 transition group-hover:bg-green-700 group-hover:text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {tema.titulo}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                {tema.resumo}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 font-bold text-green-700">
                Consultar
                <span aria-hidden="true">→</span>
              </span>
            </button>
          ))}
        </div>
      </section>

      <section id="calculadora" className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Ferramenta interativa
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
              Calculadora de viabilidade
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Introduz os teus valores para estimar a receita, o resultado
              operacional simples e o custo por unidade. Os valores iniciais
              são apenas exemplos editáveis, não preços de mercado confirmados.
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <label htmlFor="tipo-produto" className="mb-2 block text-sm font-bold text-slate-700">
                  Produto comercializado
                </label>
                <select
                  id="tipo-produto"
                  value={unidade}
                  onChange={(event) => {
                    setUnidade(event.target.value);
                    setProducao(event.target.value === "ovos" ? "1000" : "100");
                    setPreco(event.target.value === "ovos" ? "100" : "1500");
                  }}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                >
                  <option value="ovos">Ovos (unidades)</option>
                  <option value="aves">Aves para venda (unidades)</option>
                </select>
              </div>

              <div>
                <label htmlFor="quantidade" className="mb-2 block text-sm font-bold text-slate-700">
                  Quantidade vendida no período
                </label>
                <input
                  id="quantidade"
                  type="number"
                  min="0"
                  value={producao}
                  onChange={(event) => setProducao(event.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />
              </div>

              <div>
                <label htmlFor="preco" className="mb-2 block text-sm font-bold text-slate-700">
                  Preço de venda por {unidade === "ovos" ? "ovo" : "ave"} (Kz)
                </label>
                <input
                  id="preco"
                  type="number"
                  min="0"
                  value={preco}
                  onChange={(event) => setPreco(event.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />
              </div>

              <div>
                <label htmlFor="custos" className="mb-2 block text-sm font-bold text-slate-700">
                  Custos totais do mesmo período (Kz)
                </label>
                <input
                  id="custos"
                  type="number"
                  min="0"
                  value={custos}
                  onChange={(event) => setCustos(event.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />
              </div>

              <button
                type="button"
                onClick={() => {
                  setProducao(unidade === "ovos" ? "1000" : "100");
                  setPreco(unidade === "ovos" ? "100" : "1500");
                  setCustos("65000");
                }}
                className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
              >
                Repor valores de exemplo
              </button>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-green-950 to-green-800 p-6 text-white shadow-xl sm:p-8">
            <p className="text-sm font-bold uppercase tracking-wider text-green-200">
              Resultado estimado
            </p>
            <h2 className="mt-2 text-2xl font-extrabold">
              Resumo financeiro
            </h2>

            <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-5">
              <p className="text-sm text-green-100">Receita bruta estimada</p>
              <p className="mt-2 break-words text-3xl font-extrabold sm:text-4xl">
                {moeda(receita)}
              </p>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-sm text-green-100">Custos introduzidos</p>
                <p className="mt-2 break-words text-xl font-extrabold">
                  {moeda(custoTotal)}
                </p>
              </div>
              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-sm text-green-100">Custo por unidade</p>
                <p className="mt-2 break-words text-xl font-extrabold">
                  {moeda(custoUnitario)}
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-white p-5 text-slate-900">
              <p className="text-sm font-semibold text-slate-500">
                Resultado simples estimado
              </p>
              <p
                className={`mt-2 break-words text-3xl font-extrabold ${
                  resultado < 0 ? "text-red-700" : "text-green-800"
                }`}
              >
                {moeda(resultado)}
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Margem sobre a receita: {receita > 0 ? `${margem.toFixed(2)}%` : "Não calculável sem receita"}
              </p>
            </div>

            <p className="mt-5 text-sm leading-7 text-green-100">
              Este cálculo não inclui automaticamente impostos, juros,
              investimento inicial, perdas não registadas nem outros encargos
              omitidos. Não representa lucro líquido nem garante viabilidade
              económica.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12 sm:px-8">
        <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <h2 className="text-xl font-extrabold text-amber-950">
            Antes de investir
          </h2>
          <p className="mt-3 leading-7 text-amber-900">
            Confirma os preços com compradores e fornecedores da tua região.
            Regista as despesas reais e verifica os requisitos sanitários e
            legais aplicáveis. Os exemplos da calculadora são valores de
            demonstração e não devem ser usados como referência oficial para
            Angola.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-14 sm:px-8">
        <div className="flex flex-col justify-between gap-5 rounded-3xl border border-green-100 bg-green-50 p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-green-700">
              Percurso de aprendizagem
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-green-950">
              Revisita as orientações de produção
            </h2>
            <p className="mt-2 leading-7 text-slate-600">
              Reforça os conhecimentos de reprodução e sanidade para relacionar
              a gestão comercial com a produção.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/pecuaria/codornizes/orientacoes/reproducao"
              className="rounded-xl border border-green-200 bg-white px-5 py-3 text-center font-bold text-green-900 transition hover:bg-green-100"
            >
              ← Reprodução
            </Link>
            <Link
              href="/pecuaria/codornizes/orientacoes/instalacoes"
              className="rounded-xl bg-green-700 px-5 py-3 text-center font-bold text-white shadow-md transition hover:bg-green-800"
            >
              Início das orientações
            </Link>
          </div>
        </div>
      </section>

      {temaAberto && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
          onClick={() => setTemaAberto(null)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-modal-mercado"
            onClick={(event) => event.stopPropagation()}
            className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
          >
            <div className="bg-gradient-to-r from-green-950 to-green-700 p-6 text-white sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-green-100">
                    Guia de comercialização
                  </p>
                  <h2
                    id="titulo-modal-mercado"
                    className="mt-2 text-2xl font-extrabold sm:text-3xl"
                  >
                    {temaAberto.titulo}
                  </h2>
                </div>
                <button
                  type="button"
                  aria-label="Fechar janela"
                  onClick={() => setTemaAberto(null)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-xl transition hover:bg-white/25"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-base leading-8 text-slate-700">
                {temaAberto.detalhe}
              </p>

              <div className="mt-6 rounded-2xl border border-green-100 bg-green-50 p-5">
                <h3 className="font-bold text-green-950">
                  Aplicação na exploração
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Regista quantidades, preços, custos e clientes. Compara os
                  resultados entre períodos e ajusta o plano de produção aos
                  dados reais de vendas.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setTemaAberto(null)}
                className="mt-6 w-full rounded-xl bg-green-700 px-5 py-3 font-bold text-white transition hover:bg-green-800"
              >
                Concluir consulta
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
