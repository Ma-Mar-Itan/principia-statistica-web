export function BookCoverFeature() {
  return (
    <div className="relative flex min-h-[520px] items-center justify-center overflow-hidden border border-[var(--border)] bg-[var(--paper)] p-6 sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(216,229,239,0.7),transparent_48%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 border-t border-[var(--border)] bg-[var(--paper-muted)]" />
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <img
          src="/images/book-cover.jpg"
          alt="Principia Statistica book cover"
          className="max-h-[500px] w-auto max-w-full border border-[#342d24] bg-[var(--paper)] object-contain shadow-[0_26px_70px_rgba(6,29,54,0.22)]"
        />
      </div>
    </div>
  );
}
