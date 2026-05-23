import Link from "next/link";
import { bookConfig } from "@/content/book.config";
import { HeaderActions } from "./HeaderActions";
import { MobileNav } from "./MobileNav";

const links = [
  { href: "/", label: "Home" },
  { href: "/chapters", label: "Chapters" },
  { href: "/figures", label: "Figures" },
  { href: "/about", label: "About" },
  { href: "/search", label: "Search" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--paper)_92%,transparent)] backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid size-8 place-items-center border border-[var(--foreground)] font-serif text-lg">P</span>
          <span className="text-xs font-semibold uppercase tracking-[0.26em]">{bookConfig.title}</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[var(--accent)]">
              {link.label}
            </Link>
          ))}
        </nav>
        <HeaderActions />
        <MobileNav links={links} />
      </div>
    </header>
  );
}
