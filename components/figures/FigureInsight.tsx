import { Lightbulb } from "lucide-react";

export function FigureInsight({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 text-sm text-[var(--muted)]">
      <Lightbulb className="mt-1 size-4 shrink-0 text-[var(--gold)]" />
      <p>{children}</p>
    </div>
  );
}
