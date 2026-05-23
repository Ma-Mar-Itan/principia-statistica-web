import type { MetadataRoute } from "next";
import { getChapters } from "@/lib/book/getChapters";
import { getFigures } from "@/lib/book/getFigures";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://principia-statistica.local";
  return [
    "", "/chapters", "/figures", "/about", "/search",
    ...getChapters().map((chapter) => `/chapters/${chapter.slug}`),
    ...getFigures().map((figure) => `/figures/${figure.id}`)
  ].map((path) => ({ url: `${base}${path}`, lastModified: new Date() }));
}
