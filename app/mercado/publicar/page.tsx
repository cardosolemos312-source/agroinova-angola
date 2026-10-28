
"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const provincias = [
  "Bengo",
  "Benguela",
  "Bié",
  "Cabinda",
  "Cuando",
  "Cubango",
  "Cuanza Norte",
  "Cuanza Sul",
  "Cunene",
  "Huambo",
  "Huíla",
  "Icolo e Bengo",
  "Luanda",
  "Lunda Norte",
  "Lunda Sul",
  "Malanje",
  "Moxico",
  "Moxico Leste",
  "Namibe",
  "Uíge",
  "Zaire",
];

const categorias = [
  "Cereais",
  "Hortícolas",
  "Frutas",
  "Tubérculos",
  "Leguminosas",
  "Pecuária",
  "Sementes",
  "Equipamentos",
  "Outros",
];

const unidades = [
  "kg",
  "tonelada",
  "saco",
  "unidade",
  "litro",
  "caixa",
  "dúzia",
  "cabeça",
  "fardo",
  "outro",
];

const campo =
  "mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100";

const MAX_FOTOS = 5;
const MAX_TAMANHO_FOTO = 5 * 1024 * 1024;

const TIPOS_IMAGEM = ["image/jpeg", "image/png", "image/webp"];

export default function PublicarProdutoPage() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState("");
  const [negociavel, setNegociavel] = useState(false);
  const [quantidade, setQuantidade] = useState("1");
  const [unidade, setUnidade] = useState("kg");
  const [provincia, setProvincia] = useState("");
  const [municipio, setMunicipio] = useState("");

  const [fotos, setFotos] = useState<File[]>([]);
  const [previsualizacoes, setPrevisualizacoes] = useState<
    { nome: string; url: string }[]
  >([]);

  const [aCarregar, setACarregar] = useState(false);
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  const [verificandoSessao, setVerificandoSessao] = useState(true);

  useEffect(() => {
    let cancelado = false;

    async function verificarSessao() {
      try {
        const supabase = createClient();
        const { data, error } = await supabase.auth.getUser();

        if (cancelado) return;

        if (error || !data.user) {
          router.replace(
            "/mercado/entrar?redirect=%2Fmercado%2Fpublicar",
          );
          return;
        }

        setVerificandoSessao(false);
      } catch {
        if (!cancelado) {
          router.replace(
            "/mercado/entrar?redirect=%2Fmercado%2Fpublicar",
          );
        }
      }
    }

    void verificarSessao();

    return () => {
      cancelado = true;
    };
  }, [router]);

  useEffect(() => {
    const urls = fotos.map((foto) => ({
      nome: foto.name,
      url: URL.createObjectURL(foto),
    }));

    setPrevisualizacoes(urls);

    return () => {
      urls.forEach((foto) => URL.revokeObjectURL(foto.url));
    };
  }, [fotos]);

  function selecionarFotos(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const selecionadas = Array.from(event.target.files ?? []);

    // Permite voltar a escolher os mesmos ficheiros.
    event.target.value = "";

    if (selecionadas.length === 0) return;

    setErro("");
    setSucesso("");

    const restantes = MAX_FOTOS - fotos.length;

    if (restantes <= 0) {
      setErro(`Podes selecionar no máximo ${MAX_FOTOS} fotografias.`);
      return;
    }

    const aceites: File[] = [];
    const problemas: string[] = [];

    for (const foto of selecionadas) {
      if (aceites.length >= restantes) {
        problemas.push(`O limite é de ${MAX_FOTOS} fotografias.`);
        break;
      }

      if (!TIPOS_IMAGEM.includes(foto.type)) {
        problemas.push(
          `"${foto.name}" não é JPG, PNG ou WebP.`,
        );
        continue;
      }

      if (foto.size > MAX_TAMANHO_FOTO) {
        problemas.push(
          `"${foto.name}" ultrapassa o limite de 5 MB.`,
        );
        continue;
      }

      aceites.push(foto);
    }

    if (aceites.length > 0) {
      setFotos((anteriores) => [
        ...anteriores,
        ...aceites,
      ]);
    }

    if (problemas.length > 0) {
      setErro(problemas.join(" "));
    }
  }

  function removerFoto(indice: number) {
    setFotos((anteriores) =>
      anteriores.filter((_, i) => i !== indice),
    );
  }

  async function submeterFormulario(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();
    setErro("");
    setSucesso("");

    if (!nome.trim() || !descricao.trim() || !categoria || !provincia) {
      setErro("Preenche todos os campos obrigatórios.");
      return;
    }

    if (!negociavel && preco.trim() === "") {
      setErro("Indica o preço ou seleciona preço sob consulta.");
      return;
    }

    const quantidadeNumerica = Number(quantidade);
    const precoNumerico =
      preco.trim() === "" ? null : Number(preco);

    if (
      !Number.isFinite(quantidadeNumerica) ||
      quantidadeNumerica <= 0
    ) {
      setErro("Indica uma quantidade válida.");
      return;
    }

    if (
      precoNumerico !== null &&
      (!Number.isFinite(precoNumerico) || precoNumerico < 0)
    ) {
      setErro("Indica um preço válido em kwanzas.");
      return;
    }

    setACarregar(true);

    try {
      const supabase = createClient();
      const { data: sessao, error: erroSessao } =
        await supabase.auth.getUser();

      if (erroSessao || !sessao.user) {
        router.push(
          "/mercado/entrar?redirect=%2Fmercado%2Fpublicar",
        );
        return;
      }

      const imagensCarregadas: string[] = [];

      for (const foto of fotos) {
        const extensao = foto.name.split(".").pop()?.toLowerCase() || "jpg";
        const nomeSeguro = `${crypto.randomUUID()}.${extensao}`;
        const caminho = `${sessao.user.id}/${nomeSeguro}`;

        const { error: erroUpload } = await supabase.storage
          .from("mercado-produtos")
          .upload(caminho, foto, {
            contentType: foto.type,
            upsert: false,
          });

        if (erroUpload) {
          throw new Error(
            `Não foi possível carregar a fotografia "${foto.name}": ${erroUpload.message}`,
          );
        }

        const { data: imagemPublica } = supabase.storage
          .from("mercado-produtos")
          .getPublicUrl(caminho);

        imagensCarregadas.push(imagemPublica.publicUrl);
      }

      const resposta = await fetch("/api/mercado/produtos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: nome.trim(),
          descricao: descricao.trim(),
          categoria,
          preco: precoNumerico,
          negociavel,
          quantidade: quantidadeNumerica,
          unidade,
          provincia,
          municipio: municipio.trim(),
          imagens: imagensCarregadas,
        }),
      });

      const resultado = await resposta.json();

      if (!resposta.ok) {
        throw new Error(
          resultado.erro ||
            "Não foi possível publicar o anúncio.",
        );
      }

      setSucesso(
        resultado.mensagem ||
          "Anúncio enviado para aprovação com sucesso.",
      );

      setNome("");
      setDescricao("");
      setCategoria("");
      setPreco("");
      setNegociavel(false);
      setQuantidade("1");
      setUnidade("kg");
      setProvincia("");
      setMunicipio("");
      setFotos([]);
    } catch (e) {
      setErro(
        e instanceof Error
          ? e.message
          : "Ocorreu um erro ao enviar o anúncio.",
      );
    } finally {
      setACarregar(false);
    }
  }

  if (verificandoSessao) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 text-gray-800">
        <p role="status" className="font-semibold">
          A verificar a sessão...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 text-gray-900 sm:py-14">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/mercado"
          className="text-sm font-semibold text-green-800 hover:underline"
        >
          ← Voltar ao Mercado AGROINOVA
        </Link>

        <section className="mt-6 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          <div className="bg-green-900 px-6 py-8 text-white sm:px-10 sm:py-10">
            <span className="text-sm font-semibold uppercase tracking-wider text-green-200">
              Mercado AGROINOVA
            </span>

            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Publicar um produto
            </h1>

            <p className="mt-3 max-w-2xl leading-7 text-green-50">
              Apresenta os teus produtos agrícolas, pecuários ou
              equipamentos a potenciais compradores em Angola.
            </p>
          </div>

          <form
            onSubmit={submeterFormulario}
            className="space-y-7 p-6 sm:p-10"
          >
            {erro && (
              <div
                role="alert"
                className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-800"
              >
                {erro}
              </div>
            )}

            {sucesso && (
              <div
                role="status"
                className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm leading-6 text-green-900"
              >
                <p className="font-semibold">Anúncio recebido</p>
                <p className="mt-1">{sucesso}</p>
                <p className="mt-2">
                  O anúncio só ficará visível no catálogo depois da
                  aprovação.
                </p>
                <Link
                  href="/mercado"
                  className="mt-3 inline-block font-semibold underline"
                >
                  Voltar ao Mercado
                </Link>
              </div>
            )}

            <div>
              <h2 className="text-xl font-bold">
                Informações do produto
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Os campos assinalados com * são obrigatórios.
              </p>
            </div>

            <div>
              <label htmlFor="nome" className="text-sm font-semibold">
                Nome do produto *
              </label>
              <input
                id="nome"
                className={campo}
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Ex.: Milho amarelo"
                minLength={3}
                maxLength={120}
                required
              />
            </div>

            <div>
              <label
                htmlFor="descricao"
                className="text-sm font-semibold"
              >
                Descrição *
              </label>
              <textarea
                id="descricao"
                className={campo}
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="Descreve a qualidade, a origem e as condições de venda."
                rows={5}
                minLength={10}
                maxLength={3000}
                required
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="categoria"
                  className="text-sm font-semibold"
                >
                  Categoria *
                </label>
                <select
                  id="categoria"
                  className={campo}
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                  required
                >
                  <option value="">Selecionar categoria</option>
                  {categorias.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="unidade"
                  className="text-sm font-semibold"
                >
                  Unidade de venda *
                </label>
                <select
                  id="unidade"
                  className={campo}
                  value={unidade}
                  onChange={(e) => setUnidade(e.target.value)}
                  required
                >
                  {unidades.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="quantidade"
                  className="text-sm font-semibold"
                >
                  Quantidade disponível *
                </label>
                <input
                  id="quantidade"
                  type="number"
                  className={campo}
                  value={quantidade}
                  onChange={(e) => setQuantidade(e.target.value)}
                  min="0.01"
                  step="any"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="preco"
                  className="text-sm font-semibold"
                >
                  Preço em kwanzas (Kz)
                </label>
                <input
                  id="preco"
                  type="number"
                  className={campo}
                  value={preco}
                  onChange={(e) => setPreco(e.target.value)}
                  min="0"
                  step="any"
                  placeholder="Ex.: 15000"
                  disabled={negociavel}
                />
                <label className="mt-3 flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={negociavel}
                    onChange={(e) => setNegociavel(e.target.checked)}
                    className="h-4 w-4 accent-green-800"
                  />
                  Preço sob consulta ou negociável
                </label>
              </div>
            </div>

            <section className="border-t border-gray-200 pt-6">
              <h2 className="text-xl font-bold">
                Fotografias do produto
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Escolhe até {MAX_FOTOS} fotografias reais do produto.
                São aceites JPG, PNG e WebP, até 5 MB por imagem.
              </p>

              <label
                htmlFor="fotos"
                className="mt-4 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-green-300 bg-green-50 px-5 py-8 text-center transition hover:border-green-600 hover:bg-green-100"
              >
                <span className="text-3xl" aria-hidden="true">
                  +
                </span>
                <span className="mt-2 font-semibold text-green-900">
                  Selecionar fotografias
                </span>
                <span className="mt-1 text-sm text-gray-600">
                  {fotos.length} de {MAX_FOTOS} fotografias selecionadas
                </span>
                <input
                  id="fotos"
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  multiple
                  onChange={selecionarFotos}
                  disabled={fotos.length >= MAX_FOTOS}
                  className="sr-only"
                />
              </label>

              {previsualizacoes.length > 0 && (
                <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {previsualizacoes.map((foto, indice) => (
                    <div
                      key={`${foto.nome}-${indice}`}
                      className="overflow-hidden rounded-xl border border-gray-200 bg-white"
                    >
                      <div className="aspect-square bg-gray-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={foto.url}
                          alt={`Pré-visualização ${indice + 1}: ${foto.nome}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-3">
                        <p className="truncate text-xs text-gray-600">
                          {foto.nome}
                        </p>
                        <button
                          type="button"
                          onClick={() => removerFoto(indice)}
                          className="mt-2 text-sm font-semibold text-red-700 hover:underline"
                        >
                          Remover fotografia
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <p className="mt-3 text-xs leading-5 text-gray-500">
                Nota: nesta primeira etapa, as fotografias são apenas
                pré-visualizadas no formulário. A ligação para as guardar
                no Supabase será feita na próxima alteração.
              </p>
            </section>

            <section className="border-t border-gray-200 pt-6">
              <h2 className="text-xl font-bold">
                Localização do produto
              </h2>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="provincia"
                    className="text-sm font-semibold"
                  >
                    Província *
                  </label>
                  <select
                    id="provincia"
                    className={campo}
                    value={provincia}
                    onChange={(e) => setProvincia(e.target.value)}
                    required
                  >
                    <option value="">Selecionar província</option>
                    {provincias.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="municipio"
                    className="text-sm font-semibold"
                  >
                    Município
                  </label>
                  <input
                    id="municipio"
                    className={campo}
                    value={municipio}
                    onChange={(e) => setMunicipio(e.target.value)}
                    maxLength={100}
                    placeholder="Indica o município"
                  />
                </div>
              </div>
            </section>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
              <p className="font-semibold">
                Como funciona a aprovação?
              </p>
              <p className="mt-1">
                Depois do envio, o anúncio fica pendente de aprovação.
                Só será apresentado aos compradores quando for aprovado.
              </p>
            </div>

            <button
              type="submit"
              disabled={aCarregar}
              className="inline-flex w-full items-center justify-center rounded-xl bg-green-800 px-6 py-4 font-semibold text-white transition hover:bg-green-900 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {aCarregar
                ? "A enviar anúncio..."
                : "Enviar para aprovação"}
            </button>

            <p className="text-xs leading-5 text-gray-500">
              Ao enviar, confirmas que as informações do anúncio são
              verdadeiras e correspondem ao produto que pretendes vender.
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}
