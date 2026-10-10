
import MapaProvinciaClient from "@/components/MapaProvinciaClient";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const provincias: Record<string, string> = {
  bengo: "Bengo",
  benguela: "Benguela",
  bie: "Bié",
  cabinda: "Cabinda",
  cuando: "Cuando",
  cubango: "Cubango",
  "cuanza-norte": "Cuanza Norte",
  "cuanza-sul": "Cuanza Sul",
  "cuanza-sul": "Cuanza Sul",
  cunene: "Cunene",
  huambo: "Huambo",
  huila: "Huíla",
  "icolo-e-bengo": "Icolo e Bengo",
  luanda: "Luanda",
  "lunda-norte": "Lunda Norte",
  "lunda-sul": "Lunda Sul",
  malanje: "Malanje",
  moxico: "Moxico",
  "moxico-leste": "Moxico Leste",
  namibe: "Namibe",
  uige: "Uíge",
  zaire: "Zaire",
};

function normalizarSlug(valor: string): string {
  return valor
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default async function PaginaProvincia({
  params,
}: PageProps) {
  const { slug } = await params;
  const slugNormalizado = normalizarSlug(slug);
  const nome =
    provincias[slugNormalizado] ??
    slug.replace(/-/g, " ");

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "24px 16px",
        background: "#f5f7f2",
      }}
    >
      <MapaProvinciaClient
        nome={nome}
        slug={slugNormalizado}
      />
    </main>
  );
}