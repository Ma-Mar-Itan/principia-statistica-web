import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChapterLayout } from "@/components/reader/ChapterLayout";
import { getChapterBySlug } from "@/lib/book/getChapterBySlug";
import { getChapters } from "@/lib/book/getChapters";
import { getNextPrevChapter } from "@/lib/book/getNextPrevChapter";
import { compileChapterMdx } from "@/lib/mdx/compileMdx";
import { extractHeadings } from "@/lib/mdx/extractHeadings";

export function generateStaticParams() {
  return getChapters().map((chapter) => ({ slug: chapter.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);
  if (!chapter) return {};
  return {
    title: chapter.title,
    description: chapter.summary,
    openGraph: {
      title: chapter.title,
      description: chapter.summary,
      type: "article"
    }
  };
}

export default async function ChapterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);
  if (!chapter) notFound();
  const { content } = await compileChapterMdx(chapter);
  const headings = extractHeadings(chapter);
  const { previous, next } = getNextPrevChapter(chapter.slug);

  return (
    <ChapterLayout chapter={chapter} headings={headings} previous={previous} next={next}>
      {content}
    </ChapterLayout>
  );
}
