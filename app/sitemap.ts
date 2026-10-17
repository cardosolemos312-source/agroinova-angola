import type { MetadataRoute } from "next";

const baseUrl = "https://agroinova-angola-f83i.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const paginas = [
    "",
    "/agricultura",
    "/pecuaria",
    "/pesca",
    "/florestas",
    "/floricultura",
    "/solos",
    "/clima",
    "/dados",
    "/provincias",
    "/mapa",
    "/investigacao",
    "/tecnologias",
    "/agroia",
    "/agroacademia",
    "/biblioteca",
    "/directorio",
    "/noticias",
  ];

  return paginas.map((pagina) => ({
    url: `${baseUrl}${pagina}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: pagina === "" ? 1 : 0.7,
  }));
}