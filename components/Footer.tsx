
import Link from "next/link";

const equipa = [
  {
    nome: "Cardoso Lemos",
    cargo: "CEO e Desenvolvedor",
    iniciais: "CL",
  },
  {
    nome: "Viviane Catumbela",
    cargo: "CEO e Analista Comercial",
    iniciais: "VC",
  },
  {
    nome: "Daniel Chicuamanga",
    cargo: "Desenvolvedor / Cyber Segurança",
    iniciais: "DC",
  },
  {
    nome: "Heythan Lemos",
    cargo: "Futuro da AgroInova Angola",
    iniciais: "HL",
  },
  {
    nome: "Luciano Lemos",
    cargo: "Mestre / Eng.º Agrónomo",
    iniciais: "LL",
  },
  {
    nome: "Bonifácio Vissetaca",
    cargo: "PhD, Professor Doutor",
    iniciais: "BV",
  },
];

const empresas = [
  {
    nome: "CJSL-SOLUÇÕES DIGITAIS",
    cargo: "Desenvolvedora",
    iniciais: "CJSL",
  },
  {
    nome: "BE-SMART",
    cargo: "Parceria, Divulgação e Segurança",
    iniciais: "BE",
  },
];

const links = [
  { nome: "Página inicial", href: "/" },
  { nome: "Investigação", href: "/investigacao" },
  { nome: "Biblioteca", href: "/biblioteca" },
  { nome: "AgroAcademia", href: "/agroacademia" },
  { nome: "Notícias", href: "/noticias" },
  { nome: "Dados agropecuários", href: "/dados" },
];

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t-4 border-green-500 bg-[#102b1c] text-gray-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 py-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

        {/* MARCA E APRESENTAÇÃO */}
        <section>
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tight text-white"
          >
            AGROINOVA<span className="text-green-400">-ANGOLA</span>
          </Link>

          <p className="mt-3 text-sm font-semibold leading-6 text-green-300">
            Conhecimento, Tecnologia e Inovação ao Serviço do Campo Angolano.
          </p>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            Plataforma nacional de investigação, conhecimento e inovação
            agropecuária para o desenvolvimento sustentável de Angola.
          </p>
        </section>

        {/* EQUIPA */}
        <section>
          <h2 className="mb-4 border-b border-green-500/40 pb-2 font-bold text-white">
            Nossa equipa
          </h2>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {equipa.map((pessoa) => (
              <div
                key={pessoa.nome}
                className="flex items-center gap-2.5"
              >
                {/* Avatar provisório: sem dependência de fotografias */}
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-green-500/60 bg-green-900 text-xs font-bold text-green-300"
                  aria-hidden="true"
                >
                  {pessoa.iniciais}
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold text-white">
                    {pessoa.nome}
                  </p>
                  <p className="mt-0.5 text-[11px] leading-4 text-gray-400">
                    {pessoa.cargo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EMPRESAS PARCEIRAS */}
        <section>
          <h2 className="mb-4 border-b border-green-500/40 pb-2 font-bold text-white">
            Empresas parceiras
          </h2>

          <div className="space-y-3">
            {empresas.map((empresa) => (
              <div
                key={empresa.nome}
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3 transition-colors hover:border-green-500/50"
              >
                {/* Espaço provisório para o futuro logótipo */}
                <div
                  className="flex h-11 w-14 shrink-0 items-center justify-center rounded bg-white px-1 text-center text-[10px] font-extrabold text-green-800"
                  aria-hidden="true"
                >
                  {empresa.iniciais}
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-bold leading-5 text-white">
                    {empresa.nome}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-gray-400">
                    {empresa.cargo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACTOS */}
        <section>
          <h2 className="mb-4 border-b border-green-500/40 pb-2 font-bold text-white">
            Contactos
          </h2>

          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-green-300">
            Email
          </p>

          <a
            href="mailto:cardosoLemos312@gmail.com"
            className="block break-all text-sm leading-6 hover:text-green-400"
          >
            cardosolemos312@gmail.com
          </a>

          <a
            href="mailto:agroinova.angola@inova.com"
            className="mt-1 block break-all text-sm leading-6 hover:text-green-400"
          >
            agroinova.angola@inova.com
          </a>

          <p className="mb-2 mt-5 text-xs font-semibold uppercase tracking-wider text-green-300">
            Telefone
          </p>

          <div className="space-y-1 text-sm">
            <a href="tel:+244939329199" className="block hover:text-green-400">
              +244 939 329 199
            </a>
            <a href="tel:+244933395847" className="block hover:text-green-400">
              +244 933 395 847
            </a>
            <a href="tel:+244958057984" className="block hover:text-green-400">
              +244 958 057 984
            </a>
            <a href="tel:+244921644522" className="block hover:text-green-400">
              +244 921 644 522
            </a>
          </div>

          <nav aria-label="Links do rodapé" className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-gray-400 transition hover:text-green-400"
              >
                {link.nome}
              </Link>
            ))}
          </nav>
        </section>
      </div>

      {/* DIREITOS DE AUTOR */}
      <div className="border-t border-white/10 bg-black/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-4 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {ano} AGROINOVA-ANGOLA. Todos os direitos reservados.
          </p>

          <p className="font-medium text-green-400">
            Conhecimento • Tecnologia • Inovação
          </p>
        </div>
      </div>
    </footer>
  );
}
