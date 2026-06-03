"use client";

import { useEffect, useRef } from "react";

/** Matches globals.css — drift is applied via background-position, not transform. */
const BACKDROP_Y = "38%";
const DRIFT_RATE = 0.5;

function getScrollY() {
  return (
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
}

/**
 * The faint NP monogram backdrop. Rendered as a real element (not a CSS
 * pseudo-element) so it can drift upward on scroll — a slow parallax that moves
 * the mark out from behind the text as the reader goes down the page, keeping
 * body copy legible. Falls back to a static backdrop under prefers-reduced-motion
 * and without JS (the element is server-rendered; only the drift needs script).
 *
 * Drift uses background-position instead of transform on the fixed layer so
 * mobile Safari matches desktop (transform + position:fixed is unreliable on iOS).
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
      const offset = getScrollY() * DRIFT_RATE;
      el.style.backgroundPosition = `center calc(${BACKDROP_Y} - ${offset}px)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("scroll", onScroll, { passive: true });
    const viewport = window.visualViewport;
    viewport?.addEventListener("scroll", onScroll, { passive: true });
    viewport?.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll);
      viewport?.removeEventListener("scroll", onScroll);
      viewport?.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="logo-backdrop" aria-hidden />;
}
