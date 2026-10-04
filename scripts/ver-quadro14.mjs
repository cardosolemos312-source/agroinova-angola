import XLSX from "xlsx";

const arquivo = "./data/oficial/ICAPP_2024_2025_INE.xlsx";

const wb = XLSX.readFile(arquivo);

const ws = wb.Sheets["Quadro_14"];

const linhas = XLSX.utils.sheet_to_json(ws, {
  header: 1,
  defval: null,
  raw: true
});

linhas.slice(0, 35).forEach((linha, indice) => {
  console.log(indice, JSON.stringify(linha));
});
