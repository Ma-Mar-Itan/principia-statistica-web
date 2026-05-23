import { getChapters } from "./getChapters";

export function getChapterBySlug(slug: string) {
  return getChapters().find((chapter) => chapter.slug === slug);
}
