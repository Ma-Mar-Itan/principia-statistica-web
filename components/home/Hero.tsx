import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { bookConfig } from "@/content/book.config";
import { BookCoverFeature } from "./BookCoverFeature";

export function Hero() {
  return (
    <section className="grid min-h-[560px] items-center gap-10 border-b border-[var(--border)] py-14 md:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.75fr)]">
      <div>
        <p className="mb-5 text-sm text-[var(--gold)]">A Foundational Philosophy</p>
        <h1 className="font-serif text-6xl font-semibold uppercase leading-[0.95] tracking-normal sm:text-7xl lg:text-8xl">
          Principia
          <br />
          Statistica
        </h1>
        <p className="mt-6 max-w-md text-lg leading-8 text-[var(--muted)]">{bookConfig.subtitle}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="btn-primary" href="/chapters/why-statistics-exists">
            Start Reading <ArrowRight className="size-4" />
          </Link>
          <Link className="btn-secondary" href="/figures">
            Explore Figures
          </Link>
        </div>
      </div>
      <BookCoverFeature />
    </section>
  );
}
