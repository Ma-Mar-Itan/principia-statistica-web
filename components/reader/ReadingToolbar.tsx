"use client";

import { Moon, Printer, Share2, Type } from "lucide-react";
import { useState } from "react";

export function ReadingToolbar() {
  const [large, setLarge] = useState(false);

  function toggleFont() {
    const next = !large;
    setLarge(next);
    document.documentElement.style.setProperty("--reader-font-size", next ? "1.25rem" : "1.125rem");
  }

  function toggleDark() {
    document.documentElement.classList.toggle("dark");
  }

  return (
    <div className="no-print flex items-center justify-end gap-2 border-b border-[var(--border)] py-3">
      <button aria-label="Toggle reader font size" className="grid size-9 place-items-center rounded hover:bg-[var(--paper-muted)]" onClick={toggleFont}>
        <Type className="size-4" />
      </button>
      <button aria-label="Print chapter" className="grid size-9 place-items-center rounded hover:bg-[var(--paper-muted)]" onClick={() => window.print()}>
        <Printer className="size-4" />
      </button>
      <button aria-label="Copy chapter link" className="grid size-9 place-items-center rounded hover:bg-[var(--paper-muted)]" onClick={() => navigator.clipboard.writeText(window.location.href)}>
        <Share2 className="size-4" />
      </button>
      <button aria-label="Toggle dark mode" className="grid size-9 place-items-center rounded hover:bg-[var(--paper-muted)]" onClick={toggleDark}>
        <Moon className="size-4" />
      </button>
    </div>
  );
}
