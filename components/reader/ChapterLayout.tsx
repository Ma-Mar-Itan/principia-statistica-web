import type { ChapterMeta, Heading } from "@/lib/book/schema";
import { ChapterHeader } from "./ChapterHeader";
import { ChapterNavigation } from "./ChapterNavigation";
import { ChapterToc } from "./ChapterToc";
import { OnThisPage } from "./OnThisPage";
import { ReadingProgress } from "./ReadingProgress";
import { ReadingToolbar } from "./ReadingToolbar";
import { RelatedFigures } from "./RelatedFigures";

export function ChapterLayout({
  chapter,
  headings,
  previous,
  next,
  children
}: {
  chapter: ChapterMeta;
  headings: Heading[];
  previous?: ChapterMeta;
  next?: ChapterMeta;
  children: React.ReactNode;
}) {
  return (
    <>
      <ReadingProgress />
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[240px_minmax(0,760px)_240px] lg:px-10">
        <aside className="hidden lg:block">
          <ChapterToc chapter={chapter} />
        </aside>
        <main>
          <ReadingToolbar />
          <details className="no-print mb-8 rounded border border-[var(--border)] bg-[var(--paper)] p-4 lg:hidden">
            <summary className="cursor-pointer text-sm font-semibold uppercase tracking-[0.18em]">Contents and figures</summary>
            <div className="mt-5">
              <ChapterToc chapter={chapter} />
              <RelatedFigures figureIds={chapter.figures} />
            </div>
          </details>
          <ChapterHeader chapter={chapter} />
          <article className="reader-content">{children}</article>
          <ChapterNavigation previous={previous} next={next} />
          <div className="lg:hidden">
            <RelatedFigures figureIds={chapter.figures} />
          </div>
        </main>
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <OnThisPage headings={headings} />
            <div className="mt-8 rounded border border-[var(--border)] bg-[var(--paper)] p-5 font-serif italic text-[var(--muted)]">
              Certainty is the exception. Wisdom lies in knowing the difference.
            </div>
            <RelatedFigures figureIds={chapter.figures} />
          </div>
        </aside>
      </div>
    </>
  );
}
