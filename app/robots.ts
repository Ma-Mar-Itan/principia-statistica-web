import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const owner = process.env.GITHUB_REPOSITORY_OWNER ?? "USERNAME";

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `https://${owner}.github.io/PRINCIPIA-STATISTICA-WEB/sitemap.xml`
  };
}
