"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { WorkProject } from "@/content/work";

/**
 * A single Work grid card. Renders the client-facing card front and reveals
 * itself on scroll-into-view (fade + 12px rise, staggered by index). Motion is
 * disabled via CSS for users who prefer reduced motion.
 */
export function WorkCard({ project, index }: { project: WorkProject; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      // Fallback for environments without IntersectionObserver: reveal next
      // frame (avoids a synchronous setState inside the effect body).
      const id = requestAnimationFrame(() => setRevealed(true));
      return () => cancelAnimationFrame(id);
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <li
      ref={ref}
      className="reveal flex max-w-md flex-col gap-3"
      data-revealed={revealed}
      style={{ "--reveal-delay": `${index * 60}ms` } as React.CSSProperties}
    >
      <span className="font-mono text-meta uppercase text-ink-muted">
        {project.status}
      </span>
      <h3 className="font-display text-card text-ink">
        {project.hasDetail ? (
          <Link href={`/work/${project.slug}`} className="link link-arrow">
            {project.name}
          </Link>
        ) : (
          project.name
        )}
      </h3>
      <p className="text-base italic text-ink-muted">{project.title}</p>
      <p className="text-base leading-relaxed text-ink-soft">
        {project.cardDescription}
      </p>
      {project.technology.length > 0 && (
        <p className="font-mono text-meta text-ink-muted/90">
          {project.technology.join("  •  ")}
        </p>
      )}
    </li>
  );
}
