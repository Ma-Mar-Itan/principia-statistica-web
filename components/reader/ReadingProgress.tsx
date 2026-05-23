"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total <= 0 ? 0 : Math.min(100, (window.scrollY / total) * 100));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div className="fixed left-0 top-0 z-50 h-1 bg-[var(--accent)] transition-[width]" style={{ width: `${progress}%` }} />;
}
