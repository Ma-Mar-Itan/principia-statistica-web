import { FigureCard } from "@/components/figures/FigureCard";
import { PageShell } from "@/components/layout/PageShell";
import { getFigures } from "@/lib/book/getFigures";

export const metadata = { title: "Figures", description: "Interactive thought experiments from Principia Statistica." };

export default function FiguresPage() {
  return (
    <PageShell>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">Interactive Figures</p>
      <h1 className="mt-4 font-serif text-5xl">Thought Experiments in Evidence</h1>
      <p className="mt-5 max-w-2xl leading-8 text-[var(--muted)]">
        Each figure is designed as a manipulable argument. Change an assumption and watch the interpretation move.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {getFigures().map((figure) => <FigureCard key={figure.id} figure={figure} />)}
      </div>
    </PageShell>
  );
}
