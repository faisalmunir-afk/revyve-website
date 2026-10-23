"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HOME } from "../../content/home";
import { ModelRouting, SharedLayer, ThreadedSystems } from "./aiDiagrams";

/**
 * Revyve AI.
 *
 * Three claims, so three drawings. Every earlier attempt made one picture
 * for the whole section and hung all three capabilities off it, which no
 * single abstract graphic can carry. Each capability now has a diagram
 * built from its own sentence — see aiDiagrams.tsx.
 *
 * The composition deliberately does not alternate left/right/left, which
 * is its own template. The first plate puts its drawing on the right and
 * the second on the left, but the third breaks out: "one shared
 * intelligence layer" is a substrate, so its drawing runs the full width
 * underneath its words rather than beside them. The argument lands by
 * changing shape.
 *
 * Motion is an enhancement, never a dependency. Without the client — and
 * under reduced motion — `rai--armed` is absent and every plate is drawn
 * complete and still.
 *
 * Every string comes from app/content/home.ts, verbatim.
 */

const DRAWINGS = [ThreadedSystems, ModelRouting, SharedLayer];

/** The third is a layer, so it lies under its words instead of beside. */
const SHAPES = ["rai__plate--right", "rai__plate--left", "rai__plate--under"];

export default function RevyveAI() {
  const { eyebrow, heading, lede, points, close, closeLink } = HOME.revyveAI;
  const host = useRef<HTMLDivElement>(null);

  const [armed, setArmed] = useState(false);
  const [seen, setSeen] = useState<number[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setArmed(true);

    const plates = host.current?.querySelectorAll<HTMLElement>(".rai__plate");
    if (!plates?.length) return;

    /* Each plate draws itself once, as it clears the bottom of the screen. */
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const i = Number((e.target as HTMLElement).dataset.i);
          setSeen((s) => (s.includes(i) ? s : [...s, i]));
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -22% 0px", threshold: 0.12 },
    );
    for (const el of plates) io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      className={armed ? "rai rai--armed" : "rai"}
      aria-labelledby="rai-title"
    >
      <div className="rai__inner">
        <header className="rai__head">
          <p className="rai__name">{eyebrow}</p>
          <h2 className="rai__title" id="rai-title">
            {heading}
          </h2>
          <p className="rai__lede">{lede}</p>
        </header>

        <div className="rai__plates" ref={host}>
          {points.map((p, i) => {
            const Drawing = DRAWINGS[i];
            return (
              <article
                key={p.title}
                data-i={i}
                className={`rai__plate ${SHAPES[i]}${
                  seen.includes(i) ? " is-in" : ""
                }`}
              >
                <div className="rai__say">
                  <span className="rai__tick" aria-hidden="true" />
                  <h3 className="rai__pointName">{p.title}</h3>
                  <p className="rai__pointText">{p.body}</p>
                </div>
                <div className="rai__draw">
                  <Drawing className="rai__dg" />
                </div>
              </article>
            );
          })}
        </div>

        <div className="rai__close">
          <p className="rai__closeText">{close}</p>
          <Link href={closeLink.href} className="rai__link">
            {closeLink.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
