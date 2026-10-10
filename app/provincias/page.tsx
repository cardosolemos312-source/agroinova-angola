"use client";

import Link from "next/link";

const provincias = [
{ nome: "Bengo", cor: "from-emerald-950", imagem: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=85", descricao: "Recursos naturais, agricultura e potencial florestal." },
{ nome: "Benguela", cor: "from-sky-950", imagem: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=85", descricao: "Pesca, horticultura, pecuária e atividade costeira." },
{ nome: "Bié", cor: "from-amber-950", imagem: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85", descricao: "Planaltos, cereais e produção agrícola." },
{ nome: "Cabinda", cor: "from-purple-950", imagem: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=85", descricao: "Florestas tropicais e biodiversidade." },
{ nome: "Cuando", cor: "from-orange-950", imagem: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=900&q=85", descricao: "Potencial pecuário e recursos naturais." },
{ nome: "Cubango", cor: "from-green-950", imagem: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=85", descricao: "Ecossistemas naturais e atividade agropecuária." },
{ nome: "Cuanza Norte", cor: "from-teal-950", imagem: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85", descricao: "Agricultura diversificada e recursos hídricos." },
{ nome: "Cuanza Sul", cor: "from-red-950", imagem: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85", descricao: "Cereais, café, fruticultura e pecuária." },
{ nome: "Cunene", cor: "from-yellow-950", imagem: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=900&q=85", descricao: "Pecuária, pastagens e agricultura adaptada à seca." },
{ nome: "Huambo", cor: "from-violet-950", imagem: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85", descricao: "Produção de batata, milho e hortícolas." },
{ nome: "Huíla", cor: "from-blue-950", imagem: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85", descricao: "Pecuária, cereais e diversidade de paisagens." },
{ nome: "Icolo e Bengo", cor: "from-lime-950", imagem: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85", descricao: "Produção agrícola e proximidade ao mercado de Luanda." },
{ nome: "Luanda", cor: "from-cyan-950", imagem: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=85", descricao: "Mercados, abastecimento e agricultura periurbana." },
{ nome: "Lunda Norte", cor: "from-orange-950", imagem: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=85", descricao: "Florestas, recursos naturais e agricultura familiar." },
{ nome: "Lunda Sul", cor: "from-rose-950", imagem: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=85", descricao: "Recursos naturais e potencial agroflorestal." },
{ nome: "Malanje", cor: "from-fuchsia-950", imagem: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85", descricao: "Mandioca, milho, feijão e fruticultura." },
{ nome: "Moxico", cor: "from-emerald-950", imagem: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=85", descricao: "Florestas, rios e produção agropecuária." },
{ nome: "Moxico Leste", cor: "from-teal-950", imagem: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=85", descricao: "Território natural e oportunidades de produção." },
{ nome: "Namibe", cor: "from-amber-950", imagem: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=900&q=85", descricao: "Agricultura irrigada, pesca e pecuária." },
{ nome: "Uíge", cor: "from-sky-950", imagem: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=85", descricao: "Café, mandioca, banana e florestas." },
{ nome: "Zaire", cor: "from-red-950", imagem: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=85", descricao: "Pesca, agricultura e recursos costeiros." },
];

export default function ProvinciasPage() {
return ( <main className="min-h-screen bg-[#f1f5f1] text-[#17221b]"> <header className="relative overflow-hidden bg-gradient-to-r from-green-950 via-green-900 to-emerald-800 text-white"> <div className="absolute inset-0 opacity-20"> <div className="absolute -right-20 -top-28 h-96 w-96 rounded-full border-[45px] border-green-300" /> <div className="absolute -bottom-48 right-1/4 h-96 w-96 rounded-full border-[35px] border-lime-300" /> </div>

    <div className="relative mx-auto max-w-7xl px-5 py-5">
      <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-5">
        <Link href="/" className="text-2xl font-black tracking-tight">
          AGROINOVA <span className="text-lime-300">ANGOLA</span>
        </Link>
        <div className="flex flex-wrap gap-3 text-sm font-semibold md:gap-6">
          <Link href="/" className="hover:text-lime-300">Início</Link>
          <Link href="/mapa" className="hover:text-lime-300">Mapa Agrícola</Link>
          <Link href="/provincias" className="text-lime-300">Províncias</Link>
          <Link href="/dados" className="hover:text-lime-300">Dados</Link>
        </div>
      </nav>

      <div className="grid items-center gap-8 py-12 md:grid-cols-[1.2fr_0.8fr] md:py-16">
        <div>
          <span className="inline-flex rounded-full bg-lime-400/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-lime-200">
            Território • Conhecimento • Inovação
          </span>
          <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
            Províncias de <span className="text-lime-300">Angola</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-green-50 md:text-lg">
            Explore as 21 províncias e descubra o potencial agrícola,
            pecuário, climático, florestal e os recursos produtivos de cada
            região.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#lista-provincias" className="rounded-xl bg-lime-400 px-6 py-3 font-bold text-green-950 shadow-lg transition hover:bg-lime-300">
              Explorar províncias ↓
            </a>
            <Link href="/mapa" className="rounded-xl border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white/10">
              Abrir mapa agrícola
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-sm">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=90"
            alt="Paisagem agrícola e campos verdes"
            className="h-64 w-full rounded-2xl object-cover md:h-80"
          />
          <div className="flex items-center justify-between gap-3 px-3 py-4">
            <div>
              <p className="text-lg font-bold">Potencial nacional</p>
              <p className="mt-1 text-sm text-green-100">Agricultura, pecuária e recursos naturais</p>
            </div>
            <div className="rounded-xl bg-lime-400 px-4 py-3 text-center text-green-950">
              <strong className="block text-2xl">21</strong>
              <span className="text-xs font-bold">Províncias</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <section id="lista-provincias" className="mx-auto max-w-7xl px-5 py-12 md:py-16">
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
          Exploração territorial
        </p>
        <h2 className="mt-2 text-3xl font-black text-green-950 md:text-4xl">
          Selecione uma província
        </h2>
        <p className="mt-3 max-w-2xl leading-7 text-slate-600">
          Entre na área de cada província para explorar o mapa e a
          informação disponível na plataforma.
        </p>
      </div>
      <span className="rounded-full border border-green-200 bg-white px-5 py-3 text-sm font-bold text-green-900 shadow-sm">
        21 províncias de Angola
      </span>
    </div>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {provincias.map((provincia, indice) => {
        const slug = provincia.nome
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .replace(/\s+/g, "-");

        return (
          <article
            key={provincia.nome}
            className="group overflow-hidden rounded-2xl border border-white bg-white shadow-[0_8px_25px_rgba(15,60,30,0.09)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_18px_38px_rgba(15,60,30,0.2)]"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={provincia.imagem}
                alt={`Paisagem ilustrativa de ${provincia.nome}`}
                loading={indice < 4 ? "eager" : "lazy"}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${provincia.cor} via-black/25 to-transparent`} />
              <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/25 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                Província {String(indice + 1).padStart(2, "0")}
              </span>
              <h3 className="absolute bottom-4 left-5 text-2xl font-black text-white drop-shadow-lg">
                {provincia.nome}
              </h3>
            </div>

            <div className="p-5">
              <p className="min-h-[52px] text-sm leading-6 text-slate-600">
                {provincia.descricao}
              </p>
              <Link
                href={`/mapa/${slug}`}
                className="mt-5 flex items-center justify-between rounded-xl bg-green-50 px-4 py-3 font-bold text-green-900 transition group-hover:bg-green-800 group-hover:text-white"
              >
                <span>Explorar província</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        );
      })}
    </div>

    <div className="mt-12 rounded-3xl bg-gradient-to-r from-green-900 to-emerald-800 p-7 text-white shadow-xl md:flex md:items-center md:justify-between md:gap-8 md:p-10">
      <div>
        <h2 className="text-2xl font-black md:text-3xl">
          Explore Angola através dos dados
        </h2>
        <p className="mt-3 max-w-2xl leading-7 text-green-100">
          Consulte o mapa agrícola e acompanhe a evolução da informação
          territorial, produtiva e ambiental disponibilizada pela AGROINOVA.
        </p>
      </div>
      <Link href="/mapa" className="mt-6 inline-flex shrink-0 rounded-xl bg-lime-400 px-6 py-3 font-bold text-green-950 transition hover:bg-lime-300 md:mt-0">
        Ir para o mapa →
      </Link>
    </div>
  </section>

  <footer className="bg-green-950 px-5 py-7 text-center text-sm text-green-100">
    <p className="font-bold tracking-wide">AGROINOVA ANGOLA</p>
    <p className="mt-2">Conhecimento, Tecnologia e Inovação ao Serviço do Campo Angolano.</p>
  </footer>
</main>

);
}
