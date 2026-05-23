"use client";

import { BookOpen, Search, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function HeaderActions() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("principia-theme", next ? "dark" : "light");
  }

  useEffect(() => {
    const saved = window.localStorage.getItem("principia-theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  return (
    <div className="hidden items-center gap-2 md:flex">
      <Link
        aria-label="Open chapters"
        title="Chapters"
        className="grid size-9 place-items-center rounded hover:bg-[var(--paper-muted)]"
        href="/chapters"
      >
        <BookOpen aria-hidden className="size-4" />
      </Link>
      <Link
        aria-label="Open search"
        title="Search"
        className="grid size-9 place-items-center rounded hover:bg-[var(--paper-muted)]"
        href="/search"
      >
        <Search aria-hidden className="size-4" />
      </Link>
      <button
        aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        title={dark ? "Light mode" : "Dark mode"}
        className="grid size-9 place-items-center rounded hover:bg-[var(--paper-muted)]"
        type="button"
        onClick={toggleTheme}
      >
        {dark ? <Moon aria-hidden className="size-4" /> : <Sun aria-hidden className="size-4" />}
      </button>
    </div>
  );
}
