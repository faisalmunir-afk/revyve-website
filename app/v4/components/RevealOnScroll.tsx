"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * The scroll reveal for browsers without scroll timelines. Where CSS can
 * link the reveal to scroll (styles.css, "Scroll: blocks rise in"), this
 * does nothing. Elsewhere it marks the page .rv-io and toggles .is-in on
 * each block as it enters or leaves the screen, in both directions, so
 * scrolling back up fades blocks in again. Off for reduced motion.
 *
 * BLOCKS is written by the same script as the CSS, so the two stay equal.
 */
const BLOCKS = ".rv, .ar-prose > *, main > section:not(.hx) .wrap > :not(.rv):not(:has(.rv)), main > section:not(.hx) .wrap > :has(.rv) > :not(.rv):not(:has(.rv)), main > section:not(.hx) .wrap > :has(.rv) > :has(.rv) > :not(.rv):not(:has(.rv))";

export default function RevealOnScroll() {
  /* The layout stays mounted between pages; look again on each one. */
  const path = usePathname();
  useEffect(() => {
    if (CSS.supports("animation-timeline: view()")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.querySelector<HTMLElement>(".v4");
    if (!root || !("IntersectionObserver" in window)) return;

    let els: HTMLElement[] = [];
    try {
      els = Array.from(root.querySelectorAll<HTMLElement>(BLOCKS));
    } catch {
      return; /* No :has() support: leave everything visible. */
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("is-in", e.isIntersecting)),
      { rootMargin: "-6% 0px -6% 0px" },
    );
    els.forEach((el) => io.observe(el));
    root.classList.add("rv-io");
    return () => {
      io.disconnect();
      root.classList.remove("rv-io");
      els.forEach((el) => el.classList.remove("is-in"));
    };
  }, [path]);
  return null;
}
