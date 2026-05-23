import type { ChapterMeta } from "@/lib/book/schema";

export function ChapterHeader({ chapter }: { chapter: ChapterMeta }) {
  const words = chapter.sections.length * 650;
  const minutes = Math.max(5, Math.round(words / 220));

  return (
    <header className="mb-10">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">Chapter {chapter.number}</p>
      <h1 className="font-serif text-5xl leading-tight sm:text-6xl">{chapter.title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--muted)]">{chapter.summary}</p>
      <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{minutes} minute read</p>
    </header>
  );
}
