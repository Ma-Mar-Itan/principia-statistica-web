import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Card } from "@/components/ui/card";
import { getChapters } from "@/lib/book/getChapters";

export const metadata = { title: "Chapters", description: "Read the published chapters of Principia Statistica." };

export default function ChaptersPage() {
  return (
    <PageShell>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">Chapters</p>
      <h1 className="mt-4 font-serif text-5xl">A Book in Expandable Parts</h1>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {getChapters().map((chapter) => (
          <Card key={chapter.slug} className="p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Chapter {chapter.number}</p>
            <h2 className="mt-3 font-serif text-3xl">{chapter.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{chapter.summary}</p>
            <Link className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--accent)]" href={`/chapters/${chapter.slug}`}>
              Read chapter <ArrowRight className="size-4" />
            </Link>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
