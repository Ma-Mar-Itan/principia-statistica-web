import { PageShell } from "@/components/layout/PageShell";
import { buildSearchIndex } from "@/lib/search/buildSearchIndex";
import { SearchClient } from "./SearchClient";

export const metadata = { title: "Search", description: "Search chapters, sections, and figures." };

export default function SearchPage() {
  return (
    <PageShell className="max-w-4xl">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">Search</p>
      <h1 className="mt-4 font-serif text-5xl">Find an Idea</h1>
      <SearchClient records={buildSearchIndex()} />
    </PageShell>
  );
}
