"use client";

import { useEffect, useState } from "react";

/**
 * A preview switcher for the hero heading's text effect. Development only:
 * it renders nothing in a production build.
 *
 * Open the home page with ?fx in the URL (for example /?fx=glass) and a
 * small bar appears bottom right. Each button sets data-fx on the hero, and
 * the stylesheet styles the heading from that. The choice is kept in the
 * URL, so a link opens the same effect.
 *
 * Once an effect is chosen, it becomes the heading's own style and this
 * file goes.
 */

/* Live light is the heading's style for now, so it is what shows with no
   data-fx at all; "plain" turns every effect off. */
const FX = [
  { id: "live", label: "Live light" },
  { id: "plain", label: "Plain" },
  { id: "glass", label: "Glass" },
  { id: "outline", label: "Outline" },
  { id: "sheen", label: "Sheen" },
  { id: "tint", label: "Tint" },
] as const;

export default function HeroFx() {
  const [fx, setFx] = useState<string | null>(null);

  useEffect(() => {
    if (process.env.NODE_ENV === "production") return;
    const q = new URLSearchParams(window.location.search).get("fx");
    if (q !== null) setFx(q);
  }, []);

  useEffect(() => {
    if (fx === null) return;
    const hero = document.querySelector<HTMLElement>(".v3 .hero");
    if (!hero) return;
    if (fx) hero.dataset.fx = fx;
    else delete hero.dataset.fx;
    const url = new URL(window.location.href);
    url.searchParams.set("fx", fx);
    window.history.replaceState(null, "", url);
  }, [fx]);

  if (process.env.NODE_ENV === "production" || fx === null) return null;

  return (
    <div className="fxbar" role="group" aria-label="Heading effect preview">
      {FX.map((f) => (
        <button
          key={f.id}
          type="button"
          className="fxbar__btn"
          aria-pressed={fx === f.id || (fx === "" && f.id === "live")}
          onClick={() => setFx(f.id)}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
