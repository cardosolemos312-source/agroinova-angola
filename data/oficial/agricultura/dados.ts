export interface DadosAgricolasProvincia {
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
> = {
  "bengo": {
    "provincia": "Bengo",
    "fonte": "INE — ICAPP",
    "periodo": "2024/2025",
    "exploracoesProdutoras": 71148,
    "exploracoesFamiliares": 70908,
    "exploracoesEmpresariais": 240,
    "percentualFamiliares": 9966,
    "percentualEmpresariais": 34,
    "areaCulturasTemporarias": 131693,
    "areaCulturasPermanentes": 2704,
    "areaPlantadaTotal": 134397
  },
  "benguela": {
    "provincia": "Benguela",
    "fonte": "INE — ICAPP",
    "periodo": "2024/2025",
    "exploracoesProdutoras": 178044,
    "exploracoesFamiliares": 177482,
    "exploracoesEmpresariais": 562,
    "percentualFamiliares": 9968,
    "percentualEmpresariais": 32,
    "areaCulturasTemporarias": 315788,
    "areaCulturasPermanentes": 6483,
    "areaPlantadaTotal": 322271
  },
  "bie": {
    "provincia": "Bié",
    "fonte": "INE — ICAPP",
    "periodo": "2024/2025",
    "exploracoesProdutoras": 306875,
    "exploracoesFamiliares": 306115,
    "exploracoesEmpresariais": 760,
    "percentualFamiliares": 9975,
    "percentualEmpresariais": 25,
    "areaCulturasTemporarias": 765567,
    "areaCulturasPermanentes": 15716,
    "areaPlantadaTotal": 781283
  },
  "cabinda": {
    "provincia": "Cabinda",
    "fonte": "INE — ICAPP",
    "periodo": "2024/2025",
    "exploracoesProdutoras": 44337,
    "exploracoesFamiliares": 44296,
    "exploracoesEmpresariais": 41,
    "percentualFamiliares": 9991,
    "percentualEmpresariais": 9,
    "areaCulturasTemporarias": 35752,
    "areaCulturasPermanentes": 734,
    "areaPlantadaTotal": 36486
  },
  "cuando-cubango": {
    "provincia": "Cuando Cubango",
    "fonte": "INE — ICAPP",
    "periodo": "2024/2025",
    "exploracoesProdutoras": 56744,
    "exploracoesFamiliares": 56562,
    "exploracoesEmpresariais": 182,
    "percentualFamiliares": 9968,
    "percentualEmpresariais": 32,
    "areaCulturasTemporarias": 153362,
    "areaCulturasPermanentes": 3148,
    "areaPlantadaTotal": 156510
  },
  "cuanza-norte": {
    "provincia": "Cuanza Norte",
    "fonte": "INE — ICAPP",
    "periodo": "2024/2025",
    "exploracoesProdutoras": 94860,
    "exploracoesFamiliares": 94355,
    "exploracoesEmpresariais": 505,
    "percentualFamiliares": 9947,
    "percentualEmpresariais": 53,
    "areaCulturasTemporarias": 171202,
    "areaCulturasPermanentes": 3515,
    "areaPlantadaTotal": 174717
  },
  "cuanza-sul": {
    "provincia": "Cuanza Sul",
    "fonte": "INE — ICAPP",
    "periodo": "2024/2025",
    "exploracoesProdutoras": 304595,
    "exploracoesFamiliares": 304245,
    "exploracoesEmpresariais": 350,
    "percentualFamiliares": 9989,
    "percentualEmpresariais": 11,
    "areaCulturasTemporarias": 710300,
    "areaCulturasPermanentes": 14581,
    "areaPlantadaTotal": 724881
  },
  "cunene": {
    "provincia": "Cunene",
    "fonte": "INE — ICAPP",
    "periodo": "2024/2025",
    "exploracoesProdutoras": 117763,
    "exploracoesFamiliares": 117708,
    "exploracoesEmpresariais": 55,
    "percentualFamiliares": 9995,
    "percentualEmpresariais": 5,
    "areaCulturasTemporarias": 547828,
    "areaCulturasPermanentes": 11245,
    "areaPlantadaTotal": 559073
  },
  "huambo": {
    "provincia": "Huambo",
    "fonte": "INE — ICAPP",
    "periodo": "2024/2025",
    "exploracoesProdutoras": 350161,
    "exploracoesFamiliares": 349518,
    "exploracoesEmpresariais": 643,
    "percentualFamiliares": 9982,
    "percentualEmpresariais": 18,
    "areaCulturasTemporarias": 519063,
    "areaCulturasPermanentes": 10655,
    "areaPlantadaTotal": 529718
  },
  "luanda": {
    "provincia": "Luanda",
    "fonte": "INE — ICAPP",
    "periodo": "2024/2025",
    "exploracoesProdutoras": 68557,
    "exploracoesFamiliares": 68296,
    "exploracoesEmpresariais": 261,
    "percentualFamiliares": 9962,
    "percentualEmpresariais": 38,
    "areaCulturasTemporarias": 117872,
    "areaCulturasPermanentes": 2419,
    "areaPlantadaTotal": 120291
  },
  "lunda-norte": {
    "provincia": "Lunda Norte",
    "fonte": "INE — ICAPP",
    "periodo": "2024/2025",
    "exploracoesProdutoras": 86023,
    "exploracoesFamiliares": 85537,
    "exploracoesEmpresariais": 486,
    "percentualFamiliares": 9943,
    "percentualEmpresariais": 57,
    "areaCulturasTemporarias": 93911,
    "areaCulturasPermanentes": 1928,
    "areaPlantadaTotal": 95839
  },
  "lunda-sul": {
    "provincia": "Lunda Sul",
    "fonte": "INE — ICAPP",
    "periodo": "2024/2025",
    "exploracoesProdutoras": 49277,
    "exploracoesFamiliares": 48553,
    "exploracoesEmpresariais": 724,
    "percentualFamiliares": 9853,
    "percentualEmpresariais": 147,
    "areaCulturasTemporarias": 61249,
    "areaCulturasPermanentes": 1257,
    "areaPlantadaTotal": 62506
  },
  "malanje": {
    "provincia": "Malanje",
    "fonte": "INE — ICAPP",
    "periodo": "2024/2025",
    "exploracoesProdutoras": 180664,
    "exploracoesFamiliares": 180382,
    "exploracoesEmpresariais": 282,
    "percentualFamiliares": 9984,
    "percentualEmpresariais": 16,
    "areaCulturasTemporarias": 305715,
    "areaCulturasPermanentes": 6275,
    "areaPlantadaTotal": 311990
  },
  "moxico": {
    "provincia": "Moxico",
    "fonte": "INE — ICAPP",
    "periodo": "2024/2025",
    "exploracoesProdutoras": 88768,
    "exploracoesFamiliares": 88476,
    "exploracoesEmpresariais": 292,
    "percentualFamiliares": 9967,
    "percentualEmpresariais": 33,
    "areaCulturasTemporarias": 139310,
    "areaCulturasPermanentes": 2860,
    "areaPlantadaTotal": 142170
  },
  "namibe": {
    "provincia": "Namibe",
    "fonte": "INE — ICAPP",
    "periodo": "2024/2025",
    "exploracoesProdutoras": 26511,
    "exploracoesFamiliares": 26363,
    "exploracoesEmpresariais": 148,
    "percentualFamiliares": 9944,
    "percentualEmpresariais": 56,
    "areaCulturasTemporarias": 69764,
    "areaCulturasPermanentes": 1432,
    "areaPlantadaTotal": 71196
  },
  "uige": {
    "provincia": "Uíge",
    "fonte": "INE — ICAPP",
    "periodo": "2024/2025",
    "exploracoesProdutoras": 193519,
    "exploracoesFamiliares": 193055,
    "exploracoesEmpresariais": 464,
    "percentualFamiliares": 9976,
    "percentualEmpresariais": 24,
    "areaCulturasTemporarias": 194191,
    "areaCulturasPermanentes": 3986,
    "areaPlantadaTotal": 198177
  },
  "zaire": {
    "provincia": "Zaire",
    "fonte": "INE — ICAPP",
    "periodo": "2024/2025",
    "exploracoesProdutoras": 58000,
    "exploracoesFamiliares": 57698,
    "exploracoesEmpresariais": 302,
    "percentualFamiliares": 9948,
    "percentualEmpresariais": 52,
    "areaCulturasTemporarias": 52122,
    "areaCulturasPermanentes": 1072,
    "areaPlantadaTotal": 53194
  }
};
