"use client";

// v1 owns its stylesheets; see app/layout.tsx for why.
import "./globals.css";
import "./page.css";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent, useReducedMotion } from "motion/react";
import Hero from "./components/Hero";
import HundredDays from "./components/HundredDays";
import ClaimStage, { ClaimStageFallback } from "./components/ClaimStage";
import RevyveAI from "./components/RevyveAI";
import Close from "./components/Close";
import Questions from "./components/Questions";
import SiteFooter from "./components/SiteFooter";
import { CLAIMS } from "./data/claims";

/**
 * Home.
 *
 * Direction: "The split stage" (seed 2009664481).
 * Idea: the ticked line items of an 1851 account from Main and Olive Street,
 * St. Louis, and the aged claim that is its direct descendant, become the
 * fixed half of the split stage: one claim stays on screen for the whole
 * visit, being worked line by line, while the argument scrolls past it.
 *
 * One state, one control: the claim the visitor picks drives both the fixed
 * half and the input/output section. The signature move is the claim ageing
 * against the scroll, crossing the 120-day line while the reader reads.
 */
export default function Home() {
  const [selected, setSelected] = useState(0);
  const splitRef = useRef<HTMLDivElement>(null);
  const still = useReducedMotion();

  const total = CLAIMS[selected].events.length;
  // The first screen opens on a claim that has already been refused and is
  // ageing, not on a freshly submitted one: an empty log reads as an error
  // state and contradicts the age in the bar. The scroll carries it from
  // there, across the 120-day line, to the step still waiting on a person.
  const start = Math.max(1, Math.min(3, total - 2));
  const [revealed, setRevealed] = useState(total);

  const { scrollYProgress } = useScroll({
    target: splitRef,
    offset: ["start start", "end end"],
  });

  // Arm the ageing only once the client is running and motion is wanted; the
  // served page and the reduced-motion page both show the whole record.
  useEffect(() => {
    if (still) {
      setRevealed(total);
      return;
    }
    setRevealed(start);
  }, [still, total, start]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (still) return;
    // Quantised to the log's steps, so this only re-renders a handful of
    // times across the whole scroll rather than every frame.
    const span = total - start;
    const k = Math.min(total, start + Math.floor(v * (span + 0.9)));
    setRevealed(Math.max(start, k));
  });

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <main id="main">
        {/* The split holds for the opening: the argument scrolls, the claim stays. */}
        <div className="split" ref={splitRef}>
          <Hero />
          <aside className="split__fixed" aria-label="A claim being worked">
            <ClaimStage
              selected={selected}
              onSelect={setSelected}
              revealed={revealed}
            />
            <ClaimStageFallback />
          </aside>
          <HundredDays />
        </div>

        {/* Here the split breaks and the page runs full width. */}
        <RevyveAI claim={CLAIMS[selected]} />

        <Close />
        <Questions />
      </main>

      <SiteFooter />
    </>
  );
}
