import { getChapters } from "./getChapters";

export function getNextPrevChapter(slug: string) {
  const chapters = getChapters();
  const index = chapters.findIndex((chapter) => chapter.slug === slug);

  return {
    previous: index > 0 ? chapters[index - 1] : undefined,
    next: index >= 0 && index < chapters.length - 1 ? chapters[index + 1] : undefined
  };
}
