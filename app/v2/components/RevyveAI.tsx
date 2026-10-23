"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HOME } from "../../content/home";
import Accent from "./Accent";
import FacetField from "./FacetField";
import {
  PlugsConnected,
  Brain,
  ShareNetwork,
} from "@phosphor-icons/react/dist/ssr";

/** One mark per layer of the platform. */
const LAYER_ICONS = [PlugsConnected, Brain, ShareNetwork];

/**
 * Revyve AI.
 *
 * The Backbone opens out. The rail from the previous section becomes the
 * spine of a stack: three layers of one platform, not three cards in a row.
 * Each layer is clipped to the same chevron corner as the mark, and lights
 * from its left edge inward as it arrives, so the stack assembles itself.
 *
 * The claim sits in its own column beside the stack, with the money line
 * held behind the brand edge beneath it.
 *
 * Every string comes from app/content/home.ts, verbatim.
 */
export default function RevyveAI() {
  const { eyebrow, heading, lede, points, close, closeLink } = HOME.revyveAI;
  const stackRef = useRef<HTMLOListElement>(null);
  const [on, setOn] = useState<number[]>(points.map((_, i) => i));

  useEffect(() => {
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (still) return;

    // Armed by script only: without it every layer is already lit.
    setOn([]);

    const el = stackRef.current;
    if (!el) return;
    const items = Array.from(el.querySelectorAll<HTMLElement>("[data-layer]"));

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const i = Number((e.target as HTMLElement).dataset.layer);
          // Latch, so a layer never goes dark once it has been shown.
          setOn((prev) => (prev.includes(i) ? prev : [...prev, i]));
          io.unobserve(e.target);
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -8% 0px" },
    );
    items.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [points.length]);

  return (
    <section className="ai" aria-labelledby="ai-title">
      <FacetField
        id="ai"
        className="facets"
        opacity={0.1}
        cols={7}
        rows={5}
        light={[0.78, 0.22]}
        seed={5513}
      />
      <div className="ai__wash" aria-hidden="true" />

      <div className="ai__inner">
        <div className="ai__side">
          <p className="ai__eyebrow">
            <span className="ai__dot" aria-hidden="true" />
            {eyebrow}
          </p>

          <h2 className="ai__heading" id="ai-title">
            <Accent text={heading} phrase="existing systems," />
          </h2>

          <p className="ai__lede">{lede}</p>

          <div className="ai__close">
            <p className="ai__closeText">{close}</p>
            <Link className="ai__link" href={closeLink.href}>
              {closeLink.label}
              <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                <path
                  d="M3 8h9.5M8.5 4l4 4-4 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        <ol className="ai__stack" ref={stackRef}>
          {points.map((p, i) => (
            <li
              key={p.title}
              data-layer={i}
              className={`ai__layer ${on.includes(i) ? "is-on" : ""}`}
              style={{ ["--i" as string]: i }}
            >
              <span className="ai__edge" aria-hidden="true" />

              <span className="ai__badge tile" aria-hidden="true">
                {(() => {
                  const Icon = LAYER_ICONS[i] ?? PlugsConnected;
                  return <Icon size={24} weight="duotone" />;
                })()}
              </span>

              <h3 className="ai__title">{p.title}</h3>
              <p className="ai__text">{p.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
