import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">Page not found</p>
      <h1 className="font-serif text-5xl text-[var(--foreground)]">This page is outside the evidence.</h1>
      <p className="mt-5 max-w-xl text-[var(--muted)]">
        The requested chapter or figure does not exist in the current book registry.
      </p>
      <Link className="btn-primary mt-8" href="/">
        Return home
      </Link>
    </main>
  );
}
