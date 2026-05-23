import Link from "next/link";
import { getFigureById } from "@/lib/book/getFigures";

export function RelatedFigures({ figureIds }: { figureIds: readonly string[] }) {
  return (
    <section className="mt-8 border-t border-[var(--border)] pt-6 text-sm">
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.24em]">Related Figures</h2>
      <div className="grid gap-4">
        {figureIds.map((id) => {
          const figure = getFigureById(id);
          if (!figure) return null;
          return (
            <Link key={id} href={`/figures/${id}`} className="grid grid-cols-[1fr_56px] gap-3 border-b border-[var(--border)] pb-4 hover:text-[var(--accent)]">
              <span>
                <span className="block text-xs">{figure.number}</span>
                <span>{figure.shortTitle}</span>
              </span>
              <span className="grid size-14 place-items-center rounded-full border border-dashed border-[var(--accent)]">
                <span className="size-4 rounded-full bg-[var(--accent)]" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
