import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getChapters } from "@/lib/book/getChapters";
import { Card } from "@/components/ui/card";

export function ChapterCards() {
  return (
    <section className="py-10">
      <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.28em]">Available Chapters</h2>
      <div className="grid gap-5 md:grid-cols-2">
        {getChapters().map((chapter) => (
          <Card key={chapter.slug} className="grid gap-6 p-6 sm:grid-cols-[1fr_140px]">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Chapter {chapter.number}</p>
              <h3 className="mt-3 font-serif text-3xl leading-tight">{chapter.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{chapter.summary}</p>
              <Link className="btn-primary mt-5" href={`/chapters/${chapter.slug}`}>
                Read Chapter <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="hidden items-center justify-center sm:flex">
              <div className="relative size-32 rounded-full border border-dashed border-[var(--accent)]">
                <span className="absolute left-1/2 top-1/2 size-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] opacity-80" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
