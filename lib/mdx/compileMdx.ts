import ChapterOne from "@/content/chapters/chapter-01.mdx";
import ChapterTwo from "@/content/chapters/chapter-02.mdx";

const chapterMdx = {
  "why-statistics-exists": ChapterOne,
  "from-observation-to-inference": ChapterTwo
};

export function getChapterMdx(slug: keyof typeof chapterMdx) {
  return chapterMdx[slug];
}
