"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NAV } from "../../content/site";

/**
 * A plain bar. Wordmark, the real navigation, one action.
 *
 * It rides over the ribbon with no panel of its own until the page moves,
 * then a thin surface slides under it so the links never fight the light.
 */
export default function Nav() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const [onLight, setOnLight] = useState(false);
  const barRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smoked glass over a white section turns grey and muddy. Watch a strip
  // the height of the bar, at the bar's own position, and thicken when a
  // light-toned section is behind it.
  useEffect(() => {
    const bar = barRef.current;
    const lights = Array.from(document.querySelectorAll("[data-tone='light']"));
    if (!bar || lights.length === 0) return;

    let io: IntersectionObserver | null = null;
    const over = new Set<Element>();

    const build = () => {
      io?.disconnect();
      over.clear();
      const r = bar.getBoundingClientRect();
      const top = Math.max(0, Math.round(r.top));
      const bottom = Math.max(0, Math.round(window.innerHeight - r.bottom));
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) over.add(e.target);
            else over.delete(e.target);
          }
          setOnLight(over.size > 0);
        },
        /* A hair above zero: at zero, a light band resting exactly on the
           strip's edge counts as intersecting with no area at all. */
        { rootMargin: `-${top}px 0px -${bottom}px 0px`, threshold: 0.001 },
      );
      lights.forEach((l) => io!.observe(l));
    };

    build();
    window.addEventListener("resize", build);
    return () => {
      io?.disconnect();
      window.removeEventListener("resize", build);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      ref={barRef}
      className={["nav", stuck ? "nav--stuck" : "", onLight ? "nav--light" : ""]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="nav__inner">
        <Link href="/" className="nav__brand" aria-label="Revyve, home">
          <img
            src="/brand/revyve-wordmark.png"
            alt=""
            width={760}
            height={150}
            className="nav__mark"
          />
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {NAV.map((l) => (
            <Link key={l.href} href={l.href} className="nav__link">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="nav__end">
          <Link href="/contact/" className="nav__action">
            Contact
          </Link>
          <button
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="v3-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <div id="v3-menu" className="nav__menu" hidden={!open}>
        {NAV.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="nav__menuLink"
            onClick={() => setOpen(false)}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
