import { bookConfig } from "@/content/book.config";

export function getChapters() {
  return bookConfig.chapters.filter((chapter) => chapter.status === "published");
}
