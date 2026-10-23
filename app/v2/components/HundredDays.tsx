"use client";

import { useEffect, useRef, useState } from "react";
import { HOME } from "../../content/home";
import Accent from "./Accent";
import {
  ShieldCheck,
  MapTrifold,
  Flask,
  ArrowsClockwise,
} from "@phosphor-icons/react/dist/ssr";

/** One mark per stage, chosen for what the stage actually does. */
const STAGE_ICONS = [ShieldCheck, MapTrifold, Flask, ArrowsClockwise];

/**
 * The first hundred days.
 *
 * The Backbone continues: the column from the hero becomes a vertical rail
 * running down this section, and the four stages dock onto it. The rail
 * fills with light as the reader descends, and each chevron marker ignites
 * when its stage is reached, so the page performs the takeover rather than
 * describing it.
 *
 * Every string comes from app/content/home.ts, verbatim, including the
 * 01-04 numerals the original site prints.
 */
export default function HundredDays() {
  const { eyebrow, heading, lede, stages, close } = HOME.hundredDays;
  const railRef = useRef<HTMLOListElement>(null);
  const [fill, setFill] = useState<number>(1);
  const [active, setActive] = useState<number>(stages.length);

  useEffect(() => {
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (still) return;

    // Armed only once the script runs, so a reader without JS gets the rail
    // fully drawn and every stage lit.
    setFill(0);
    setActive(-1);

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = railRef.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const anchor = window.innerHeight * 0.62;
        const p = (anchor - r.top) / r.height;
        setFill(Math.max(0, Math.min(1, p)));

        const items = Array.from(
          el.querySelectorAll<HTMLElement>("[data-stage]"),
        );
        let last = -1;
        items.forEach((node, i) => {
          if (node.getBoundingClientRect().top < anchor) last = i;
        });
        // Latch: once a stage has been reached it stays lit, so scrolling
        // back up never un-confirms a line.
        setActive((prev) => Math.max(prev, last));
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [stages.length]);

  return (
    <section className="hd" aria-labelledby="hd-title">
      <div className="hd__inner">
        <header className="hd__head">
          <p className="hd__eyebrow">
            <span className="hd__dot" aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 className="hd__heading" id="hd-title">
            <Accent text={heading} phrase="hundred days." />
          </h2>
          <p className="hd__lede">{lede}</p>
        </header>

        <ol
          className="hd__rail"
          ref={railRef}
          style={{ ["--fill" as string]: `${fill * 100}%` }}
        >
          <span className="hd__line" aria-hidden="true">
            <span className="hd__lineFill" />
          </span>

          {stages.map((s, i) => (
            <li
              key={s.index}
              data-stage={s.index}
              className={`hd__stage ${i <= active ? "is-on" : ""}`}
            >
              <span className="hd__marker" aria-hidden="true">
                {(() => {
                  const Icon = STAGE_ICONS[i] ?? ShieldCheck;
                  return <Icon size={19} weight="duotone" />;
                })()}
              </span>

              <div className="hd__who">
                <span className="hd__index">{s.index}</span>
                <h3 className="hd__title">{s.title}</h3>
              </div>

              <p className="hd__text">{s.body}</p>
            </li>
          ))}
        </ol>

        <p className="hd__close">{close}</p>
      </div>
    </section>
  );
}
