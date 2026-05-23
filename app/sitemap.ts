import type { MetadataRoute } from "next";
import { getChapters } from "@/lib/book/getChapters";
import { getFigures } from "@/lib/book/getFigures";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const owner = process.env.GITHUB_REPOSITORY_OWNER ?? "USERNAME";
  const base = `https://${owner}.github.io/PRINCIPIA-STATISTICA-WEB`;
  return [
    "", "/chapters", "/figures", "/about", "/search",
    ...getChapters().map((chapter) => `/chapters/${chapter.slug}`),
    ...getFigures().map((figure) => `/figures/${figure.id}`)
  ].map((path) => ({ url: `${base}${path}` }));
}
