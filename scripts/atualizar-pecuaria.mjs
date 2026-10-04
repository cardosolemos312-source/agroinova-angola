import fs from "fs";
import path from "path";
import XLSX from "xlsx";

const ROOT = process.cwd();

const ARQUIVO_EXCEL = path.join(
  ROOT,
  "data",
  "oficial",
  "ICAPP_2024_2025_INE.xlsx"
);

const PASTA_SAIDA = path.join(
  ROOT,
  "data",
  "oficial",
  "pecuaria"
);

const ARQUIVO_SAIDA = path.join(
  PASTA_SAIDA,
  "dados.ts"
);

const PROVINCIAS_ICAPP = [
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

// ============================================================
// AUXILIARES
// ============================================================

function limpar(valor) {
  if (valor === undefined || valor === null) {
    return "";
  }

  return String(valor)
    .replace(/\u00A0/g, " ")
    .trim();
}

function normalizarTexto(valor) {
  return limpar(valor)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function numero(valor) {
  if (valor === undefined || valor === null) {
    return null;
  }

  if (typeof valor === "number") {
    return Number.isFinite(valor) ? valor : null;
  }

  let texto = limpar(valor);

  if (!texto) {
    return null;
  }

  const normalizado = texto.toUpperCase();

  if (
    normalizado === "ND" ||
    normalizado === "N/D" ||
    normalizado === "-" ||
    normalizado === "—"
  ) {
    return null;
  }

  texto = texto.replace(/\s/g, "");

  // Exemplos:
  // 350.161 -> 350161
  // 5.484.879 -> 5484879
  if (
    /^\d{1,3}(\.\d{3})+$/.test(texto) &&
    !texto.includes(",")
  ) {
    texto = texto.replace(/\./g, "");
  }

  // Exemplos:
  // 99,66 -> 99.66
  // 1.234,56 -> 1234.56
  if (texto.includes(",") && texto.includes(".")) {
    texto = texto.replace(/\./g, "");
    texto = texto.replace(",", ".");
  } else if (texto.includes(",")) {
    texto = texto.replace(",", ".");
  }

  const resultado = Number(texto);

  return Number.isFinite(resultado)
    ? resultado
    : null;
}

function slugify(texto) {
  return limpar(texto)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function lerPlanilha(nome) {
  const workbook = XLSX.readFile(
    ARQUIVO_EXCEL
  );

  if (!workbook.SheetNames.includes(nome)) {
    throw new Error(
      `A folha ${nome} não existe no ficheiro Excel.`
    );
  }

  const sheet = workbook.Sheets[nome];

  return XLSX.utils.sheet_to_json(sheet, {
    header: 1,
    defval: null,
    raw: true,
  });
}

function encontrarIndice(linha, texto) {
  const alvo = normalizarTexto(texto);

  return linha.findIndex(
    (valor) =>
      normalizarTexto(valor) === alvo
  );
}

function encontrarLinhaPorProvincia(
  linhas,
  provincia
) {
  const alvo = normalizarTexto(provincia);

  return linhas.find((linha) =>
    linha.some(
      (valor) =>
        normalizarTexto(valor) === alvo
    )
  );
}

// ============================================================
// QUADRO 13
// Número de explorações com animais por espécie
// ============================================================

function extrairQuadro13() {
  const linhas = lerPlanilha("Quadro_13");

  const dados = [];

  for (const provincia of PROVINCIAS_ICAPP) {
    const linha =
      encontrarLinhaPorProvincia(
        linhas,
        provincia
      );

    if (!linha) {
      console.warn(
        `⚠️ Província não encontrada no Quadro 13: ${provincia}`
      );

      continue;
    }

    const indice =
      encontrarIndice(
        linha,
        provincia
      );

    dados.push({
      provincia,
      slug: slugify(provincia),

      exploracoesComAnimais:
        numero(linha[indice + 1]),

      bovinos:
        numero(linha[indice + 2]),

      suinos:
        numero(linha[indice + 3]),

      ovinos:
        numero(linha[indice + 4]),

      caprinos:
        numero(linha[indice + 5]),

      aves:
        numero(linha[indice + 6]),

      asininos:
        numero(linha[indice + 7]),

      muares:
        numero(linha[indice + 8]),

      equinos:
        numero(linha[indice + 9]),

      bufalinos:
        numero(linha[indice + 10]),
    });
  }

  return dados;
}

// ============================================================
// QUADRO 15
// Produção e venda de ovos por província
// ============================================================

function extrairQuadro15() {
  const linhas = lerPlanilha("Quadro_15");

  const dados = {};

  for (const provincia of PROVINCIAS_ICAPP) {
    const linha =
      encontrarLinhaPorProvincia(
        linhas,
        provincia
      );

    if (!linha) {
      console.warn(
        `⚠️ Província não encontrada no Quadro 15: ${provincia}`
      );

      continue;
    }

    const indice =
      encontrarIndice(
        linha,
        provincia
      );

    dados[slugify(provincia)] = {
      provincia,

      exploracoesProducao:
        numero(linha[indice + 1]),

      producaoDuzias:
        numero(linha[indice + 2]),

      exploracoesVenda:
        numero(linha[indice + 3]),

      vendaDuzias:
        numero(linha[indice + 4]),
    };
  }

  return dados;
}

// ============================================================
// QUADRO 14
// Efectivo animal nacional
//
// Estrutura real do Excel:
//
// coluna 1 = espécie
// coluna 2 = total
// coluna 3 = familiar
// coluna 4 = empresarial
// ============================================================

function extrairQuadro14() {
  const linhas = lerPlanilha("Quadro_14");

  const resultado = {};

  // As posições abaixo correspondem directamente
  // às linhas do Quadro 14 do Excel oficial.

  const linhasEspecies = {
    bovinos: 5,
    suinos: 12,
    ovinos: 17,
    caprinos: 22,
    aves: 27,
    asininos: 32,
    muares: 33,
    equinos: 34,
    bufalinos: 35,
  };

  const nomes = {
    bovinos: "Bovinos",
    suinos: "Suínos",
    ovinos: "Ovinos",
    caprinos: "Caprinos",
    aves: "Aves",
    asininos: "Asininos",
    muares: "Muares",
    equinos: "Equinos",
    bufalinos: "Bufalinos",
  };

  for (const [chave, indiceLinha] of Object.entries(
    linhasEspecies
  )) {
    const linha = linhas[indiceLinha];

    if (!linha) {
      console.warn(
        `⚠️ Linha não encontrada no Quadro 14: ${nomes[chave]}`
      );

      continue;
    }

    resultado[chave] = {
      nome: nomes[chave],

      total: numero(
        linha[2]
      ),

      familiar: numero(
        linha[3]
      ),

      empresarial: numero(
        linha[4]
      ),
    };
  }

  return resultado;
}

// ============================================================
// QUADRO 16
// Produção e venda de leite
// ============================================================

function extrairQuadro16() {
  const linhas = lerPlanilha("Quadro_16");

  const resultado = {
    total: null,
    familiar: null,
    empresarial: null,
  };

  for (const linha of linhas) {
    const indiceTotal =
      linha.findIndex(
        (valor) =>
          normalizarTexto(valor) ===
          "total"
      );

    const indiceFamiliar =
      linha.findIndex(
        (valor) =>
          normalizarTexto(valor).includes(
            "familiar"
          )
      );

    const indiceEmpresarial =
      linha.findIndex(
        (valor) =>
          normalizarTexto(valor).includes(
            "empresarial"
          ) ||
          normalizarTexto(valor).includes(
            "empresa"
          )
      );

    if (indiceTotal !== -1) {
      resultado.total = {
        exploracoesProducao:
          numero(
            linha[indiceTotal + 1]
          ),

        vacasOrdenhadas:
          numero(
            linha[indiceTotal + 2]
          ),

        leiteProduzidoLitros:
          numero(
            linha[indiceTotal + 3]
          ),

        exploracoesVenda:
          numero(
            linha[indiceTotal + 4]
          ),

        leiteVendidoLitros:
          numero(
            linha[indiceTotal + 5]
          ),
      };
    }

    if (indiceFamiliar !== -1) {
      resultado.familiar = {
        exploracoesProducao:
          numero(
            linha[indiceFamiliar + 1]
          ),

        vacasOrdenhadas:
          numero(
            linha[indiceFamiliar + 2]
          ),

        leiteProduzidoLitros:
          numero(
            linha[indiceFamiliar + 3]
          ),

        exploracoesVenda:
          numero(
            linha[indiceFamiliar + 4]
          ),

        leiteVendidoLitros:
          numero(
            linha[indiceFamiliar + 5]
          ),
      };
    }

    if (indiceEmpresarial !== -1) {
      resultado.empresarial = {
        exploracoesProducao:
          numero(
            linha[indiceEmpresarial + 1]
          ),

        vacasOrdenhadas:
          numero(
            linha[indiceEmpresarial + 2]
          ),

        leiteProduzidoLitros:
          numero(
            linha[indiceEmpresarial + 3]
          ),

        exploracoesVenda:
          numero(
            linha[indiceEmpresarial + 4]
          ),

        leiteVendidoLitros:
          numero(
            linha[indiceEmpresarial + 5]
          ),
      };
    }
  }

  return resultado;
}

// ============================================================
// QUADRO 18
// Produção e venda de mel
// ============================================================

function extrairQuadro18() {
  const linhas = lerPlanilha("Quadro_18");

  const resultado = {
    total: null,
  };

  for (const linha of linhas) {
    const indice =
      linha.findIndex(
        (valor) =>
          normalizarTexto(valor) ===
          "14763"
      );

    if (indice !== -1) {
      resultado.total = {
        exploracoesProducao:
          numero(
            linha[indice]
          ),

        melProduzidoLitros:
          numero(
            linha[indice + 1]
          ),

        exploracoesVenda:
          numero(
            linha[indice + 2]
          ),

        melVendidoLitros:
          numero(
            linha[indice + 3]
          ),
      };

      break;
    }
  }

  return resultado;
}

// ============================================================
// EXECUÇÃO
// ============================================================

console.log("");

console.log(
  "=============================================="
);

console.log(
  " AGROINOVA ANGOLA - PECUÁRIA"
);

console.log(
  " Dados oficiais do ICAPP 2024/2025 - INE"
);

console.log(
  "=============================================="
);

console.log("");

if (!fs.existsSync(ARQUIVO_EXCEL)) {
  throw new Error(
    `Ficheiro oficial não encontrado:\n${ARQUIVO_EXCEL}`
  );
}

console.log(
  "📂 Ficheiro oficial encontrado."
);

console.log("");

console.log(
  "📊 A ler Quadro 13..."
);

const provincias =
  extrairQuadro13();

console.log(
  `✅ ${provincias.length} unidades provinciais encontradas.`
);

console.log("");

console.log(
  "🥚 A ler Quadro 15..."
);

const ovos =
  extrairQuadro15();

console.log(
  `✅ Dados de ovos encontrados para ${Object.keys(ovos).length} unidades.`
);

console.log("");

console.log(
  "🐄 A ler Quadro 14..."
);

const efectivoAnimal =
  extrairQuadro14();

console.log(
  `✅ ${Object.keys(efectivoAnimal).length} espécies encontradas.`
);

console.log("");

console.log(
  "🥛 A ler Quadro 16..."
);

const leite =
  extrairQuadro16();

console.log(
  "✅ Dados de leite processados."
);

console.log("");

console.log(
  "🍯 A ler Quadro 18..."
);

const mel =
  extrairQuadro18();

console.log(
  "✅ Dados de mel processados."
);

console.log("");

// ============================================================
// ESTRUTURA FINAL
// ============================================================

const dadosPecuaria = {
  fonte: {
    instituicao:
      "Instituto Nacional de Estatística (INE)",

    operacao:
      "Inquérito sobre a Agricultura e a Pesca (ICAPP) 2024/2025",

    periodo:
      "ICAPP 2024/2025",
  },

  notaTerritorial:
    "O ICAPP 2024/2025 utiliza uma divisão provincial anterior à actual divisão administrativa. Os valores de Cuando Cubango e Moxico são mantidos exactamente como publicados pelo INE e não são redistribuídos entre as novas províncias.",

  provincias,

  ovos,

  efectivoAnimal,

  leite,

  mel,
};

// ============================================================
// GERAR DADOS.TS
// ============================================================

const conteudo = `// ============================================================
// AGROINOVA ANGOLA
// Dados Oficiais de Pecuária
//
// Fonte: Instituto Nacional de Estatística (INE)
// Operação: ICAPP 2024/2025
//
// GERADO AUTOMATICAMENTE.
// ============================================================

export const dadosPecuaria = ${JSON.stringify(
  dadosPecuaria,
  null,
  2
)} as const;

export default dadosPecuaria;
`;

fs.mkdirSync(
  PASTA_SAIDA,
  {
    recursive: true,
  }
);

fs.writeFileSync(
  ARQUIVO_SAIDA,
  conteudo,
  "utf8"
);

// ============================================================
// RESULTADO
// ============================================================

console.log(
  "=============================================="
);

console.log(
  "✅ DADOS DE PECUÁRIA GERADOS COM SUCESSO"
);

console.log(
  "=============================================="
);

console.log("");

console.log(
  "📄 Ficheiro:"
);

console.log(
  ARQUIVO_SAIDA
);

console.log("");

console.log(
  `🐄 Províncias/unidades: ${provincias.length}`
);

console.log(
  `🥚 Dados de ovos: ${Object.keys(ovos).length}`
);

console.log(
  `🐾 Espécies no efectivo: ${Object.keys(efectivoAnimal).length}`
);

console.log("");

if (leite.total) {
  console.log(
    `🥛 Leite produzido: ${leite.total.leiteProduzidoLitros} litros`
  );
}

if (mel.total) {
  console.log(
    `🍯 Mel produzido: ${mel.total.melProduzidoLitros} litros`
  );
}

console.log("");

console.log(
  "⚠️ Valores ND/ausentes permanecem como null."
);

console.log(
  "⚠️ Nenhum valor foi distribuído ou inventado."
);

console.log("");