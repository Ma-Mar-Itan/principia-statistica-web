import Link from "next/link";
import { getFigures } from "@/lib/book/getFigures";

export function FigurePreviewStrip() {
  return (
    <section className="-mx-5 bg-[var(--accent-soft)] px-5 py-10 sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[240px_1fr]">
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.28em]">Interactive Figures</h2>
          <p className="mt-4 text-sm leading-6">Explore core ideas through interactive visualizations and thought experiments.</p>
          <Link className="btn-secondary mt-6" href="/figures">
            View All Figures
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {getFigures().slice(0, 5).map((figure) => (
            <Link key={figure.id} href={`/figures/${figure.id}`} className="group">
              <div className="grid aspect-square place-items-center rounded border border-[var(--border)] bg-[var(--paper)]">
                <svg viewBox="0 0 100 100" className="size-20" aria-hidden>
                  <line x1="12" x2="88" y1="52" y2="52" stroke="#d8d2c4" />
                  <circle cx="50" cy="50" r="8" fill="#2f6f9f" />
                  {Array.from({ length: 16 }).map((_, i) => (
                    <circle key={i} cx={12 + ((i * 17) % 76)} cy={15 + ((i * 29) % 70)} r="1.6" fill="#061d36" opacity=".42" />
                  ))}
                </svg>
              </div>
              <p className="mt-3 text-sm leading-5 group-hover:text-[var(--accent)]">{figure.shortTitle}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
