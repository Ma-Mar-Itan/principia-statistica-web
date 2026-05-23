import Link from "next/link";
import type { FigureMeta } from "./FigureMetadata";
import { Card } from "@/components/ui/card";

export function FigureCard({ figure }: { figure: FigureMeta }) {
  return (
    <Link href={`/figures/${figure.id}`}>
      <Card className="h-full p-5 transition hover:-translate-y-0.5 hover:border-[var(--accent)]">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">{figure.number}</p>
        <h2 className="mt-3 font-serif text-2xl">{figure.title}</h2>
        <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{figure.summary}</p>
      </Card>
    </Link>
  );
}
