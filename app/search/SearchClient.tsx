"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { createSearch } from "@/lib/search/searchClient";
import type { SearchRecord } from "@/lib/search/buildSearchIndex";

export function SearchClient({ records }: { records: SearchRecord[] }) {
  const [query, setQuery] = useState("");
  const fuse = useMemo(() => createSearch(records), [records]);
  const results = query.trim() ? fuse.search(query).map((result) => result.item) : records;

  return (
    <div className="mt-8">
      <input
        aria-label="Search chapters and figures"
        className="w-full rounded border border-[var(--border)] bg-[var(--paper)] px-4 py-3 text-lg"
        placeholder="Search uncertainty, signal, inference..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className="mt-6 grid gap-4">
        {results.map((result) => (
          <Link key={`${result.type}-${result.href}`} href={result.href} className="rounded border border-[var(--border)] bg-[var(--paper)] p-5 hover:border-[var(--accent)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">{result.type}</p>
            <h2 className="mt-2 font-serif text-2xl">{result.title}</h2>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{result.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
