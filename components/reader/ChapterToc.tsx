import Link from "next/link";
import type { ChapterMeta } from "@/lib/book/schema";

export function ChapterToc({ chapter }: { chapter: ChapterMeta }) {
  return (
    <nav className="sticky top-24 text-sm">
      <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.24em]">Contents</h2>
      <p className="mb-3 font-semibold">Chapter {chapter.number} {chapter.title}</p>
      <ol className="grid gap-1">
        {chapter.sections.map((section) => (
          <li key={section.id}>
            <Link className="grid grid-cols-[38px_1fr] rounded px-2 py-2 text-[var(--muted)] hover:bg-[var(--paper-muted)] hover:text-[var(--foreground)]" href={`#${section.id}`}>
              <span>{section.number}</span>
              <span>{section.title}</span>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
