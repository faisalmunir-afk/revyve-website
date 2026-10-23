"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV } from "../../content/site";

/**
 * A plain bar: the mark, the links, one action.
 *
 * It sits on the dark ground with no panel until the page is scrolled, when a
 * thin surface slides under it so the links never fight the content behind.
 */
export default function Nav() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`nav ${stuck ? "nav--stuck" : ""}`}>
      <div className="nav__inner">
        <Link href="/v2/" className="nav__brand" aria-label="Revyve, home">
          <img
            src="/brand/revyve-wordmark.png"
            alt=""
            width={760}
            height={150}
            className="nav__wordmark"
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
          <Link href="/for-practices/" className="nav__cta">
            Move your billing
          </Link>
          <button
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="v2-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="nav__bars" aria-hidden="true" />
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <div
        id="v2-menu"
        className={`nav__menu ${open ? "nav__menu--open" : ""}`}
        hidden={!open}
      >
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
