import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FigureEmbed } from "@/components/figures/FigureEmbed";
import { figureMetadata, type FigureId } from "@/components/figures/FigureMetadata";
import { PageShell } from "@/components/layout/PageShell";
import { getFigureById, getFigures } from "@/lib/book/getFigures";

export function generateStaticParams() {
  return getFigures().map((figure) => ({ id: figure.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const figure = getFigureById(id);
  if (!figure) return {};
  return {
    title: figure.title,
    description: figure.summary,
    openGraph: {
      title: figure.title,
      description: figure.summary
    }
  };
}

export default async function FigurePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!(id in figureMetadata)) notFound();
  const figure = figureMetadata[id as FigureId];

  return (
    <PageShell>
      <Link className="text-sm text-[var(--accent)]" href="/figures">Back to figures</Link>
      <h1 className="mt-4 font-serif text-5xl">{figure.title}</h1>
      <p className="mt-4 max-w-2xl leading-8 text-[var(--muted)]">{figure.learningGoal}</p>
      <FigureEmbed id={id as FigureId} />
    </PageShell>
  );
}
