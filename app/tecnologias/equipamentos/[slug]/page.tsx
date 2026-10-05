import Link from "next/link";
import { notFound } from "next/navigation";

import {
  equipamentosTecnologicos,
  obterEquipamentoPorSlug,
} from "@/data/tecnologias/equipamentos";

interface EquipamentoPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return equipamentosTecnologicos.map((equipamento) => ({
    slug: equipamento.slug,
  }));
}

export async function generateMetadata({
  params,
}: EquipamentoPageProps) {
  const { slug } = await params;

  const equipamento = obterEquipamentoPorSlug(slug);

  if (!equipamento) {
    return {
      title: "Equipamento não encontrado | AGROINOVA ANGOLA",
    };
  }

  return {
    title: `${equipamento.nome} | AGROINOVA ANGOLA`,
    description: equipamento.descricao,
  };
}

export default async function EquipamentoPage({
  params,
}: EquipamentoPageProps) {
  const { slug } = await params;

  const equipamento = obterEquipamentoPorSlug(slug);

  if (!equipamento) {
    notFound();
  }

  const imagemPrincipal = equipamento.imagens[0];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6">

          <Link
            href="/tecnologias"
            className="text-sm font-semibold text-green-700 hover:text-green-900"
          >
            ← Voltar para Tecnologias
          </Link>

        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">

          <div>
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-100">
              <img
                src={imagemPrincipal.url}
                alt={imagemPrincipal.legenda}
                className="h-auto max-h-[600px] w-full object-contain"
              />
            </div>

            <p className="mt-3 text-xs text-gray-500">
              Imagem: {imagemPrincipal.fonte}
            </p>

            {equipamento.imagens.length > 1 && (
              <div className="mt-5 grid grid-cols-3 gap-3">
                {equipamento.imagens.map((imagem) => (
                  <div
                    key={imagem.url}
                    className="overflow-hidden rounded-xl border border-gray-200 bg-gray-100"
                  >
                    <img
                      src={imagem.url}
                      alt={imagem.legenda}
                      className="aspect-video w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              {equipamento.categoria}
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
              {equipamento.nome}
            </h1>

            {equipamento.marca && (
              <p className="mt-4 text-lg text-gray-600">
                Marca:{" "}
                <strong className="text-gray-900">
                  {equipamento.marca}
                </strong>
              </p>
            )}

            {equipamento.fabricante && (
              <p className="mt-2 text-sm text-gray-600">
                Fabricante:{" "}
                <strong className="text-gray-900">
                  {equipamento.fabricante}
                </strong>
              </p>
            )}

            <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="text-lg font-bold">
                Sobre o equipamento
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                {equipamento.descricao}
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
              <h2 className="text-lg font-bold">
                Fornecedor
              </h2>

              <p className="mt-3 text-xl font-bold text-green-800">
                {equipamento.fornecedor}
              </p>

              {equipamento.provinciaFornecedor && (
                <p className="mt-1 text-sm text-gray-600">
                  Localização: {equipamento.provinciaFornecedor}
                </p>
              )}

              <a
                href={equipamento.urlFornecedor}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-xl bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800"
              >
                Visitar fornecedor
              </a>
            </div>
          </div>

        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-2">

          <div className="rounded-2xl border border-gray-200 bg-white p-7">
            <h2 className="text-2xl font-bold">
              Problemas que pode ajudar a resolver
            </h2>

            <ul className="mt-5 space-y-3">
              {equipamento.problemaResolvido.map((problema) => (
                <li
                  key={problema}
                  className="border-b border-gray-100 pb-3 text-gray-700 last:border-0"
                >
                  {problema}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-7">
            <h2 className="text-2xl font-bold">
              Aplicações agrícolas
            </h2>

            <ul className="mt-5 space-y-3">
              {equipamento.aplicacoes.map((aplicacao) => (
                <li
                  key={aplicacao}
                  className="border-b border-gray-100 pb-3 text-gray-700 last:border-0"
                >
                  {aplicacao}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">

          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold">
              Informações técnicas disponíveis
            </h2>

            <p className="mt-3 text-gray-600">
              Apenas informações verificadas na fonte utilizada para
              este equipamento são apresentadas nesta ficha.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {equipamento.especificacoes.map((especificacao) => (
              <div
                key={especificacao}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-5"
              >
                <p className="font-semibold text-gray-800">
                  {especificacao}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-12">

          <div className="rounded-2xl border border-gray-200 bg-white p-7">

            <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
              Fonte e verificação
            </p>

            <h2 className="mt-2 text-xl font-bold">
              Informação baseada em fonte oficial
            </h2>

            <p className="mt-3 text-gray-600">
              {equipamento.fonte}
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Verificado em: {equipamento.verificadoEm}
            </p>

            <a
              href={equipamento.urlFonte}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex font-semibold text-green-700 hover:text-green-900"
            >
              Consultar fonte original →
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}