import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const routes = [
    "",
    "/platform",
    "/pricing",
    "/solutions",
    "/resources",
    "/about-us",
    "/plan",
  ];

  const lastmod = new Date();

  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: lastmod,
    changeFrequency: "weekly",
    priority: r === "" ? 1 : 0.7,
  }));
}

