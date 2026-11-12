"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Back to top: a glass button in the corner that appears once the page has
 * moved past its first screen. A ring round it fills as the page is read.
 * It glides to the top, or jumps there for reduced motion.
 */
export default function BackToTop() {
  const [shown, setShown] = useState(false);
  const ring = useRef<SVGCircleElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      setShown(window.scrollY > window.innerHeight * 0.8);
      ring.current?.style.setProperty("stroke-dashoffset", String(100 - p * 100));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button type="button" className={shown ? "totop glass is-shown" : "totop glass"} onClick={toTop} aria-label="Back to top" tabIndex={shown ? 0 : -1}>
      <svg viewBox="0 0 48 48" className="totop__ring" aria-hidden="true">
        <circle cx="24" cy="24" r="21" className="totop__track" />
        <circle ref={ring} cx="24" cy="24" r="21" pathLength={100} className="totop__fill" transform="rotate(-90 24 24)" />
      </svg>
      <svg viewBox="0 0 20 20" className="totop__arrow" aria-hidden="true">
        <path d="M10 15.5V5M5.5 9.5 10 5l4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
