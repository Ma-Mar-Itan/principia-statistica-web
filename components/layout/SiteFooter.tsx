import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-[var(--border)] bg-[var(--primary)] text-[#fffdf8]">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1fr_auto] lg:px-10">
        <blockquote className="max-w-xl font-serif text-2xl italic">
          Statistics is not just a set of methods. It is a language for reasoning under uncertainty.
        </blockquote>
        <nav className="grid gap-3 text-sm">
          <Link href="/about">About the Book</Link>
          <Link href="/chapters">Reading Guide</Link>
          <Link href="/figures">Interactive Figures</Link>
          <Link href="/search">Search</Link>
        </nav>
      </div>
      <div className="mx-auto flex max-w-7xl justify-between border-t border-white/15 px-5 py-5 text-xs text-white/70 sm:px-8 lg:px-10">
        <span>© 2026 Principia Statistica</span>
        <span>Built for clarity. Designed for thought.</span>
      </div>
    </footer>
  );
}
