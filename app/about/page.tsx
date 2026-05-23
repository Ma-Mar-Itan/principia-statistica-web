import { PageShell } from "@/components/layout/PageShell";
import { bookConfig } from "@/content/book.config";

export const metadata = { title: "About", description: `About ${bookConfig.title} by ${bookConfig.author}.` };

export default function AboutPage() {
  return (
    <PageShell className="max-w-4xl">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">About</p>
      <h1 className="mt-4 font-serif text-5xl">{bookConfig.title}</h1>
      <p className="mt-6 text-xl leading-9 text-[var(--muted)]">{bookConfig.subtitle}</p>
      <div className="reader-content mt-10">
        <p>
          <em>Principia Statistica</em> is a serious digital book about evidence, inference, and risk. It treats statistics as a language for disciplined uncertainty rather than as a catalogue of procedures.
        </p>
        <p>
          Author: <strong>{bookConfig.author}</strong>.
        </p>
      </div>
    </PageShell>
  );
}
