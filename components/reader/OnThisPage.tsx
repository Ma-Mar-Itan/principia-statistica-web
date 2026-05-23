import Link from "next/link";
import type { Heading } from "@/lib/book/schema";

export function OnThisPage({ headings }: { headings: Heading[] }) {
  return (
    <nav className="text-sm">
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.24em]">On This Page</h2>
      <ol className="grid gap-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <Link className="text-[var(--muted)] hover:text-[var(--accent)]" href={`#${heading.id}`}>
              {heading.text}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
