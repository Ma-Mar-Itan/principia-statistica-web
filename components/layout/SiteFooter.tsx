import { ArrowRight } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  { href: "/chapters/why-statistics-exists", label: "Start Reading" },
  { href: "/about", label: "About the Book" },
  { href: "/figures", label: "Interactive Figures" },
  { href: "/search", label: "Search" }
];

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-[var(--border)] bg-[var(--primary)] text-[#fffdf8]">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1fr_auto] lg:px-10">
        <blockquote className="max-w-xl font-serif text-2xl italic">
          Statistics is not just a set of methods. It is a language for reasoning under uncertainty.
        </blockquote>
        <nav aria-label="Footer navigation" className="grid min-w-56 gap-2 text-sm">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              className="group flex items-center justify-between gap-4 rounded border border-white/15 px-4 py-3 font-medium text-[#fffdf8] transition hover:border-white/40 hover:bg-white/10"
              href={link.href}
            >
              <span>{link.label}</span>
              <ArrowRight aria-hidden className="size-4 opacity-60 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
            </Link>
          ))}
        </nav>
      </div>
      <div className="mx-auto flex max-w-7xl justify-between border-t border-white/15 px-5 py-5 text-xs text-white/70 sm:px-8 lg:px-10">
        <span>© 2026 Principia Statistica</span>
        <span>Built for clarity. Designed for thought.</span>
      </div>
    </footer>
  );
}
