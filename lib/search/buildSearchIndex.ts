import { getFigures } from "@/lib/book/getFigures";
import { getChapters } from "@/lib/book/getChapters";

export type SearchRecord = {
  type: "Chapter" | "Section" | "Figure";
  title: string;
  excerpt: string;
  href: string;
};

export function buildSearchIndex(): SearchRecord[] {
  const chapters = getChapters();
  return [
    ...chapters.map((chapter) => ({ type: "Chapter" as const, title: chapter.title, excerpt: chapter.summary, href: `/chapters/${chapter.slug}` })),
    ...chapters.flatMap((chapter) =>
      chapter.sections.map((section) => ({
        type: "Section" as const,
        title: `${section.number} ${section.title}`,
        excerpt: chapter.summary,
        href: `/chapters/${chapter.slug}#${section.id}`
      }))
    ),
    ...getFigures().map((figure) => ({ type: "Figure" as const, title: figure.title, excerpt: figure.summary, href: `/figures/${figure.id}` }))
  ];
}
