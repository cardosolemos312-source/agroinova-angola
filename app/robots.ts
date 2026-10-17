import type { MetadataRoute } from "next";

const baseUrl = "https://agroinova-angola-f83i.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api/", "/login"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}