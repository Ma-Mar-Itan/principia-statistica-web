import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ChapterMeta } from "@/lib/book/schema";

export function ChapterNavigation({ previous, next }: { previous?: ChapterMeta; next?: ChapterMeta }) {
  return (
    <nav className="mt-14 grid gap-4 border-t border-[var(--border)] pt-6 sm:grid-cols-2">
      {previous ? (
        <Link className="rounded border border-[var(--border)] bg-[var(--paper)] p-4" href={`/chapters/${previous.slug}`}>
          <span className="mb-2 flex items-center gap-2 text-sm text-[var(--muted)]"><ArrowLeft className="size-4" /> Previous</span>
          <span className="font-serif text-xl">{previous.title}</span>
        </Link>
      ) : <span />}
      {next ? (
        <Link className="rounded border border-[var(--border)] bg-[var(--paper)] p-4 text-right" href={`/chapters/${next.slug}`}>
          <span className="mb-2 flex items-center justify-end gap-2 text-sm text-[var(--muted)]">Next <ArrowRight className="size-4" /></span>
          <span className="font-serif text-xl">{next.title}</span>
        </Link>
      ) : null}
      <Link className="text-sm text-[var(--accent)] sm:col-span-2" href="/chapters">Back to chapters</Link>
    </nav>
  );
}
