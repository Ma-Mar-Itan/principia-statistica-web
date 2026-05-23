import { BookQuote } from "@/components/home/BookQuote";
import { ChapterCards } from "@/components/home/ChapterCards";
import { FigurePreviewStrip } from "@/components/home/FigurePreviewStrip";
import { Hero } from "@/components/home/Hero";
import { PageShell } from "@/components/layout/PageShell";

export default function HomePage() {
  return (
    <PageShell className="py-0">
      <Hero />
      <ChapterCards />
      <FigurePreviewStrip />
      <BookQuote />
    </PageShell>
  );
}
