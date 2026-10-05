"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import {
  equipamentosTecnologicos,
} from "@/data/tecnologias/equipamentos";

const categorias = [
  "Todos",
  "Drones agrícolas",
  "Mecanização agrícola",
  "Irrigação",
];

export default function GaleriaEquipamentos() {
  const [categoria, setCategoria] = useState("Todos");
  const [pesquisa, setPesquisa] = useState("");

  const equipamentos = useMemo(() => {
    const termo = pesquisa.toLowerCase().trim();

    return equipamentosTecnologicos.filter((equipamento) => {
      const correspondeCategoria =
        categoria === "Todos" ||
        equipamento.categoria === categoria;

      const textoPesquisa = [
        equipamento.nome,
        equipamento.categoria,
        equipamento.fornecedor,
        equipamento.fabricante,
        equipamento.marca,
        equipamento.descricao,
        ...equipamento.problemaResolvido,
        ...equipamento.aplicacoes,
        ...equipamento.especificacoes,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const correspondePesquisa =
        !termo || textoPesquisa.includes(termo);

      return correspondeCategoria && correspondePesquisa;
    });
  }, [categoria, pesquisa]);

  return (
    <section
      id="galeria-equipamentos"
      className="scroll-mt-24 bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* CABEÇALHO */}
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-green-700">
            Equipamentos agrícolas
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
            Galeria de equipamentos tecnológicos
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Explore máquinas, sistemas e equipamentos agrícolas
            identificados no mercado angolano. Cada equipamento possui
            uma ficha com aplicações, problemas que pode ajudar a
            resolver, fornecedor e fonte da informação.
          </p>
        </div>

        {/* FILTROS */}
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex flex-wrap gap-2">
            {categorias.map((item) => {
              const ativo = categoria === item;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategoria(item)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    ativo
                      ? "border-green-700 bg-green-700 text-white"
                      : "border-gray-300 bg-white text-gray-700 hover:border-green-600 hover:text-green-700"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>

          <input
            type="search"
            value={pesquisa}
            onChange={(event) => setPesquisa(event.target.value)}
            placeholder="Pesquisar equipamento, marca, fornecedor..."
            aria-label="Pesquisar equipamentos"
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-100 lg:max-w-sm"
          />
        </div>

        {/* RESULTADOS */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            {equipamentos.length}{" "}
            {equipamentos.length === 1
              ? "equipamento encontrado"
              : "equipamentos encontrados"}
          </p>

          {(categoria !== "Todos" || pesquisa) && (
            <button
              type="button"
              onClick={() => {
                setCategoria("Todos");
                setPesquisa("");
              }}
              className="text-sm font-semibold text-green-700 hover:text-green-800"
            >
              Limpar filtros
            </button>
          )}
        </div>

        {equipamentos.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-10 text-center">
            <p className="font-semibold text-gray-800">
              Nenhum equipamento encontrado.
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Tente outra categoria ou utilize outro termo de pesquisa.
            </p>
          </div>
        ) : (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {equipamentos.map((equipamento) => {
              const imagem = equipamento.imagens?.[0];

              return (
                <article
                  key={equipamento.id}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* IMAGEM */}
                  <Link
                    href={`/tecnologias/equipamentos/${equipamento.slug}`}
                    className="block"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">

                      {imagem ? (
                        <img
                          src={imagem.url}
                          alt={imagem.legenda || equipamento.nome}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-gray-100 px-6 text-center">
                          <span className="text-sm text-gray-500">
                            Imagem não disponível
                          </span>
                        </div>
                      )}

                      {/* CATEGORIA */}
                      <div className="absolute left-4 top-4">
                        <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-green-800 shadow-sm backdrop-blur">
                          {equipamento.categoria}
                        </span>
                      </div>
                    </div>

                    {/* CONTEÚDO */}
                    <div className="p-6">

                      <h3 className="text-xl font-bold text-gray-950">
                        {equipamento.nome}
                      </h3>

                      {/* MARCA / FABRICANTE */}
                      {(equipamento.marca || equipamento.fabricante) && (
                        <div className="mt-2 flex flex-wrap gap-2 text-sm text-gray-600">

                          {equipamento.marca && (
                            <span>
                              Marca:{" "}
                              <strong className="text-gray-800">
                                {equipamento.marca}
                              </strong>
                            </span>
                          )}

                          {equipamento.fabricante && (
                            <span>
                              Fabricante:{" "}
                              <strong className="text-gray-800">
                                {equipamento.fabricante}
                              </strong>
                            </span>
                          )}
                        </div>
                      )}

                      {/* DESCRIÇÃO */}
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                        {equipamento.descricao}
                      </p>

                      {/* PROBLEMAS */}
                      {equipamento.problemaResolvido.length > 0 && (
                        <div className="mt-5">
                          <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                            Pode ajudar a resolver
                          </p>

                          <p className="mt-1 line-clamp-2 text-sm text-gray-700">
                            {equipamento.problemaResolvido[0]}
                          </p>
                        </div>
                      )}

                      {/* FORNECEDOR */}
                      <div className="mt-5 border-t border-gray-100 pt-4">
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                          Fornecedor
                        </p>

                        <p className="mt-1 font-semibold text-gray-900">
                          {equipamento.fornecedor}
                        </p>

                        {equipamento.provinciaFornecedor && (
                          <p className="mt-1 text-sm text-gray-500">
                            {equipamento.provinciaFornecedor}
                          </p>
                        )}
                      </div>

                      {/* LINK */}
                      <div className="mt-5 inline-flex items-center font-semibold text-green-700">
                        Ver ficha completa

                        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}