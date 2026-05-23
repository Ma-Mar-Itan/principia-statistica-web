"use client";

import { ExternalLink, RotateCcw } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type FigureShellProps = {
  id?: string;
  number: string;
  title: string;
  subtitle?: string;
  controls: React.ReactNode;
  chart: React.ReactNode;
  summary?: React.ReactNode;
  insight?: React.ReactNode;
  caption?: string;
  onReset?: () => void;
};

export function FigureShell({ id, number, title, subtitle, controls, chart, summary, insight, caption, onReset }: FigureShellProps) {
  return (
    <section className="my-10 overflow-hidden rounded border border-[var(--border)] bg-[var(--paper)] text-base leading-7">
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] px-5 py-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">{number}</p>
          <h3 className="font-serif text-2xl">{title}</h3>
          {subtitle ? <p className="mt-1 text-sm text-[var(--muted)]">{subtitle}</p> : null}
        </div>
        <div className="flex gap-2">
          {onReset ? (
            <Button variant="secondary" onClick={onReset} aria-label="Reset figure controls">
              <RotateCcw className="size-4" /> Reset
            </Button>
          ) : null}
          {id ? (
            <Link className="inline-flex items-center gap-2 rounded border border-[var(--border)] px-3 py-2 text-sm" href={`/figures/${id}`}>
              <ExternalLink className="size-4" /> Open
            </Link>
          ) : null}
        </div>
      </header>
      <div className="grid">
        <aside className="border-b border-[var(--border)] p-5">{controls}</aside>
        <div className="min-h-[420px] p-5">{chart}</div>
        <aside className="border-t border-[var(--border)] p-5">{summary}</aside>
      </div>
      {insight || caption ? (
        <footer className="border-t border-[var(--border)] bg-[var(--paper-muted)] px-5 py-4">
          {insight ? <div>{insight}</div> : null}
          {caption ? <p className="mt-2 text-sm text-[var(--muted)]">{caption}</p> : null}
        </footer>
      ) : null}
    </section>
  );
}
