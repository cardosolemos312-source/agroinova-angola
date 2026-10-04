import fs from "fs";
import path from "path";
import XLSX from "xlsx";

const URL_EXCEL_INE =
  "https://www.ine.gov.ao/Arquivos/arquivosCarregados//Carregados/Publicacao_639135933953837199.xlsx";

const ficheiroExcel = path.resolve(
  "data",
  "oficial",
  "ICAPP_2024_2025_INE.xlsx"
);

const ficheiroDados = path.resolve(
  "data",
  "oficial",
  "agricultura",
  "dados.ts"
);

const provincias = [
  "Bengo",
  "Benguela",
  "Bié",
  "Cabinda",
  "Cuando Cubango",
  "Cuanza Norte",
  "Cuanza Sul",
  "Cunene",
  "Huambo",
  "Huíla",
  "Luanda",
  "Lunda Norte",
  "Lunda Sul",
  "Malanje",
  "Moxico",
  "Namibe",
  "Uíge",
  "Zaire",
];

function normalizarTexto(texto) {
  return String(texto ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function criarSlug(nome) {
  return normalizarTexto(nome)
    .replace(/\s+/g, "-");
}

function numero(valor) {
  if (
    valor === undefined ||
    valor === null ||
    valor === ""
  ) {
    return null;
  }

  if (typeof valor === "number") {
    return Number.isFinite(valor)
      ? valor
      : null;
  }

  const texto = String(valor)
    .trim()
    .replace(/\s/g, "");

  if (texto === "") {
    return null;
  }

  if (
    texto.includes(",") &&
    !texto.includes(".")
  ) {
    const resultado = Number(
      texto.replace(",", ".")
    );

    return Number.isFinite(resultado)
      ? resultado
      : null;
  }

  if (/^-?\d+\.\d{1,2}$/.test(texto)) {
    const resultado = Number(texto);

    return Number.isFinite(resultado)
      ? resultado
      : null;
  }

  const resultado = Number(
    texto.replace(/\./g, "")
  );

  return Number.isFinite(resultado)
    ? resultado
    : null;
}

async function baixarExcel() {
  console.log("");
  console.log("======================================");
  console.log(" AGROINOVA ANGOLA");
  console.log(" ATUALIZAÇÃO OFICIAL DO INE");
  console.log("======================================");
  console.log("");

  console.log(
    "A consultar o ficheiro oficial do INE..."
  );

  const resposta = await fetch(URL_EXCEL_INE);

  if (!resposta.ok) {
    throw new Error(
      `Erro HTTP ${resposta.status} ao obter o Excel.`
    );
  }

  const dados = await resposta.arrayBuffer();

  fs.mkdirSync(
    path.dirname(ficheiroExcel),
    {
      recursive: true,
    }
  );

  fs.writeFileSync(
    ficheiroExcel,
    Buffer.from(dados)
  );

  console.log(
    "✓ Excel oficial descarregado."
  );
}

function lerQuadro(workbook, nome) {
  const folha = workbook.Sheets[nome];

  if (!folha) {
    throw new Error(
      `O ${nome} não existe no Excel oficial.`
    );
  }

  return XLSX.utils.sheet_to_json(
    folha,
    {
      header: 1,
      defval: null,
    }
  );
}

function encontrarLinhaProvincia(
  linhas,
  provincia
) {
  const provinciaNormalizada =
    normalizarTexto(provincia);

  return linhas.find(
    (linha) =>
      normalizarTexto(linha[0]) ===
      provinciaNormalizada
  );
}

function extrairDados() {
  const workbook = XLSX.readFile(
    ficheiroExcel
  );

  console.log("");
  console.log("Folhas encontradas:");
  console.log(
    workbook.SheetNames.join(", ")
  );

  const quadro2 = lerQuadro(
    workbook,
    "Quadro_2"
  );

  const quadro4 = lerQuadro(
    workbook,
    "Quadro_4"
  );

  const resultado = {};

  for (const provincia of provincias) {
    const linha2 =
      encontrarLinhaProvincia(
        quadro2,
        provincia
      );

    const linha4 =
      encontrarLinhaProvincia(
        quadro4,
        provincia
      );

    if (!linha2) {
      console.log(
        `⚠ ${provincia}: não encontrada no Quadro 2`
      );
      continue;
    }

    if (!linha4) {
      console.log(
        `⚠ ${provincia}: não encontrada no Quadro 4`
      );
      continue;
    }

    const total =
      numero(linha2[1]);

    const familiares =
      numero(linha2[2]);

    const empresariais =
      numero(linha2[3]);

    const percentualFamiliares =
      numero(linha2[4]);

    const percentualEmpresariais =
      numero(linha2[5]);

    const areaTemporarias =
      numero(linha4[2]);

    const areaPermanentes =
      numero(linha4[3]);

    const areaTotal =
      numero(linha4[4]);

    if (
      total === null ||
      familiares === null ||
      empresariais === null ||
      percentualFamiliares === null ||
      percentualEmpresariais === null ||
      areaTemporarias === null ||
      areaPermanentes === null ||
      areaTotal === null
    ) {
      console.log(
        `⚠ ${provincia}: dados incompletos`
      );
      continue;
    }

    resultado[criarSlug(provincia)] = {
      provincia,
      fonte: "INE — ICAPP",
      periodo: "2024/2025",

      exploracoesProdutoras:
        total,

      exploracoesFamiliares:
        familiares,

      exploracoesEmpresariais:
        empresariais,

      percentualFamiliares:
        percentualFamiliares,

      percentualEmpresariais:
        percentualEmpresariais,

      areaCulturasTemporarias:
        areaTemporarias,

      areaCulturasPermanentes:
        areaPermanentes,

      areaPlantadaTotal:
        areaTotal,
    };

    console.log(`✓ ${provincia}`);
  }

  return resultado;
}

function gerarTypeScript(dados) {
  const conteudo = `export interface DadosAgricolasProvincia {
  provincia: string;
  fonte: string;
  periodo: string;
  exploracoesProdutoras: number;
  exploracoesFamiliares: number;
  exploracoesEmpresariais: number;
  percentualFamiliares: number;
  percentualEmpresariais: number;
  areaCulturasTemporarias: number;
  areaCulturasPermanentes: number;
  areaPlantadaTotal: number;
}

export const dadosAgricolas: Record<
  string,
  DadosAgricolasProvincia
> = ${JSON.stringify(dados, null, 2)};
`;

  fs.mkdirSync(
    path.dirname(ficheiroDados),
    {
      recursive: true,
    }
  );

  fs.writeFileSync(
    ficheiroDados,
    conteudo,
    "utf8"
  );

  console.log("");
  console.log(
    "✓ dados.ts atualizado automaticamente."
  );
}

async function executar() {
  try {
    await baixarExcel();

    const dados =
      extrairDados();

    const quantidade =
      Object.keys(dados).length;

    console.log("");
    console.log(
      `Províncias processadas: ${quantidade}`
    );

    if (quantidade === 0) {
      throw new Error(
        "Nenhuma província foi processada. O dados.ts não será alterado."
      );
    }

    gerarTypeScript(dados);

    console.log("");
    console.log(
      "======================================"
    );
    console.log(
      "ATUALIZAÇÃO CONCLUÍDA"
    );
    console.log(
      "Fonte: Instituto Nacional de Estatística"
    );
    console.log(
      "Período: ICAPP 2024/2025"
    );
    console.log(
      "Dados fictícios: NÃO"
    );
    console.log(
      "======================================"
    );
    console.log("");
  } catch (erro) {
    console.error("");
    console.error(
      "======================================"
    );
    console.error(
      "ATUALIZAÇÃO NÃO REALIZADA"
    );
    console.error(
      erro instanceof Error
        ? erro.message
        : String(erro)
    );
    console.error(
      "Os dados existentes foram preservados."
    );
    console.error(
      "======================================"
    );

    process.exit(1);
  }
}

executar();