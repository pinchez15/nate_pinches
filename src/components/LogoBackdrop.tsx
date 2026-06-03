"use client";

import { useEffect, useRef } from "react";

/**
 * The faint NP monogram backdrop. Rendered as a real element (not a CSS
 * pseudo-element) so it can drift upward on scroll — a slow parallax that moves
 * the mark out from behind the text as the reader goes down the page, keeping
 * body copy legible. Falls back to a static backdrop under prefers-reduced-motion
 * and without JS (the element is server-rendered; only the drift needs script).
 */
export function LogoBackdrop() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      // Drift up at half the scroll speed: slow enough to read as parallax,
      // fast enough to clear the text below the hero.
      el.style.transform = `translate3d(0, ${-window.scrollY * 0.5}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="logo-backdrop" aria-hidden />;
}
