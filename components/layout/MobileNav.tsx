"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function MobileNav({ links }: { links: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button aria-label="Open navigation" className="grid size-10 place-items-center" onClick={() => setOpen(true)}>
        <Menu className="size-5" />
      </button>
      {open ? (
        <div className="fixed inset-0 z-50 bg-[var(--paper)] p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.26em]">Principia Statistica</span>
            <button aria-label="Close navigation" className="grid size-10 place-items-center" onClick={() => setOpen(false)}>
              <X className="size-5" />
            </button>
          </div>
          <nav className="mt-10 grid gap-5 text-lg">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
