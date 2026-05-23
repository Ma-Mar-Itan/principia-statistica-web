import type { ChapterMeta, Heading } from "@/lib/book/schema";

export function extractHeadings(chapter: ChapterMeta): Heading[] {
  return chapter.sections.map((section) => ({
    id: section.id,
    level: 2,
    text: `${section.number} ${section.title}`
  }));
}
