"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HOME } from "../../content/home";
import Hero from "./Hero";
import Judgement from "./Judgement";
import MarkStep from "./MarkStep";
import { KeepWhatWorks, MakeItRepeatable, MapTheWork, ProveOneThing } from "./stageDiagrams";

/**
 * The opening: the hero, and the first hundred days that close over it.
 *
 * The hero does not scroll away. It holds still as the base layer of this
 * stage, and over the first screen of scrolling the two halves of the
 * hundred days slide in across it — paper from the left, the brand from
 * the right — meeting at the seam. The slide is scrubbed by the scroll
 * position (GSAP ScrollTrigger), so the reader draws the curtain and can
 * draw it back. Then the section holds the screen while the four stages
 * change in the right-hand half, one at a time.
 *
 * The halves are not equal. The paper half is the label — the heading,
 * the lede, the mark — and takes 30%. The brand half is the work and takes
 * 70%, with the type sized to carry that room.
 *
 * Then it closes the way it opened. Over one more screen the brand half
 * slides out to the right and paper is what is under it — the paper half
 * expanding across the frame — while the heading, the mark and the ticks
 * fade; and on the full paper the judgement line types itself in.
 *
 * How the pin works: the track is three screens taller than the number of
 * stages, the frame inside it is `position: sticky`, and a column of equal
 * sentinels behind it reports which one is crossing the middle of the
 * screen. The first sentinel is the slide, the last is the close, the rest
 * are the stages. The page is never held still and no wheel event is
 * swallowed.
 *
 * Motion is an enhancement, never a dependency. Until the client mounts —
 * and permanently under reduced motion or on one column — `days--pinned`
 * is absent: the hero is an ordinary first section, the stages a plain
 * stacked list beneath it, every mark drawn finished, the Revyve mark
 * complete.
 *
 * Every string comes from app/content/home.ts, verbatim.
 */

/** Faces laid by the end of each stage, out of the mark's ten. */
const BUILT = [3, 5, 8, 10];

/** One drawing per stage, made from its own sentence. */
const DRAWINGS = [KeepWhatWorks, MapTheWork, ProveOneThing, MakeItRepeatable];



export default function HundredDays() {
  const { eyebrow, heading, lede, stages } = HOME.hundredDays;
  const steps = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const say = useRef<HTMLDivElement>(null);
  const work = useRef<HTMLDivElement>(null);
  /* The brand half's slot. The curtain slides the half; the close slides
     the slot. Two elements, so the two timelines never write the same
     property on the same node and can never fight over its end state. */
  const slot = useRef<HTMLDivElement>(null);
  const cap = useRef<HTMLDivElement>(null);
  const fill = useRef<HTMLDivElement>(null);
  const aside = useRef<HTMLDivElement>(null);
  const close = useRef<HTMLDivElement>(null);

  /* Off until the client says otherwise, so the served markup is readable. */
  const [pinned, setPinned] = useState(false);
  const [active, setActive] = useState(0);
  const [judge, setJudge] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    /* The pin is a desktop idea; one column has nothing to pin against. */
    if (!window.matchMedia("(min-width: 901px)").matches) return;

    setPinned(true);

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            /* Sentinel 0 is the slide, the last is the close; the stages
               are the ones between, and the last stage stays up through
               the close. */
            const i = Number((e.target as HTMLElement).dataset.i) - 1;
            setActive(Math.min(stages.length - 1, Math.max(0, i)));
          }
        }
      },
      /* Whichever sentinel is crossing the middle of the screen wins. */
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );

    const els = steps.current?.children;
    if (els) for (const el of Array.from(els)) io.observe(el);
    return () => io.disconnect();
  }, []);

  /* The curtain: scrubbed by the first screen of the track. Runs once the
     pinned layout is in place, so the measurements it takes are real. */
  useEffect(() => {
    if (!pinned) return;
    const t = track.current;
    const l = say.current;
    const r = work.current;
    const c = cap.current;
    const heroSay = t?.querySelector<HTMLElement>(".hero__inner");
    const heroField = t?.querySelector<HTMLElement>(".hero__field");
    if (!t || !l || !r || !c || !heroSay) return;

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: t,
        start: "top top",
        end: () => `+=${window.innerHeight}`,
        scrub: 0.6,
        invalidateOnRefresh: true,
      },
    });

    /* x is pinned at 0 in both ends: the halves rest off-screen through a
       CSS transform, and GSAP would otherwise read that matrix as a pixel
       offset and keep it underneath the percentage it animates. */
    /* The timeline is exactly one unit long and the scroll scrubs it, so
       the halves take the whole screen of scrolling to close. */
    /* They rest a little past the edge, not on it, so the blur they carry
       does not bleed a pale haze into the hero while they wait. */
    tl.fromTo(
      l,
      { xPercent: -104, x: 0 },
      { xPercent: 0, x: 0, ease: "none", duration: 1 },
      0,
    )
      .fromTo(
        r,
        { xPercent: 104, x: 0 },
        { xPercent: 0, x: 0, ease: "none", duration: 1 },
        0,
      )
      /* The paper strip under the bar arrives last, from above, so the
         nav keeps its light ink over the hero until the halves are in. */
      .fromTo(
        c,
        { yPercent: -100, y: 0 },
        { yPercent: 0, y: 0, ease: "none", duration: 0.45 },
        0.55,
      )
      /* The halves arrive out of focus and resolve as they land, and the
         hero gives way beneath them: its sentence softens, shrinks a
         touch and goes, the light behind it dims. The one hands over to
         the other instead of one sliding over the other. */
      .fromTo(
        [l, r],
        { filter: "blur(14px)" },
        { filter: "blur(0px)", ease: "none", duration: 0.85 },
        0,
      )
      .fromTo(
        heroSay,
        { opacity: 1, scale: 1, filter: "blur(0px)" },
        {
          opacity: 0,
          scale: 0.94,
          filter: "blur(16px)",
          ease: "none",
          duration: 0.7,
        },
        0,
      );
    if (heroField) {
      tl.fromTo(
        heroField,
        { opacity: 1 },
        { opacity: 0.3, ease: "none", duration: 0.9 },
        0.1,
      );
    }

    /* The close: scrubbed by the last screen of the track. */
    const f = fill.current;
    const a = aside.current;
    const out = gsap.timeline({
      scrollTrigger: {
        trigger: t,
        start: () => `top+=${window.innerHeight * (stages.length + 1)} top`,
        end: () => `+=${window.innerHeight}`,
        scrub: 0.6,
        invalidateOnRefresh: true,
        /* The line waits for the brand half to clear, then types through
           the rest of the close and the hold. */
        onUpdate: (st) => setJudge(st.progress > 0.62),
      },
    });
    /* A one-unit spacer, so the scroll maps onto the whole timeline and
       the beats below sit where their numbers say. */
    out.to({}, { duration: 1 }, 0);
    if (f) {
      /* Paper under the brand half, shown the instant the close begins:
         the halves still cover the frame at that moment, so nothing shows
         until the brand half starts to move. */
      out.fromTo(f, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.001 }, 0);
    }
    const sl = slot.current;
    if (sl) {
      out.fromTo(
        sl,
        { xPercent: 0, x: 0, opacity: 1, filter: "blur(0px)" },
        {
          xPercent: 104,
          x: 0,
          opacity: 0,
          filter: "blur(14px)",
          ease: "none",
          duration: 0.55,
        },
        0.02,
      );
    }
    /* The line's visibility is on the scroll, not on a timer: it fades in
       only after the brand half has fully cleared (0.57), and fades out
       again before the half can return. Scrolling back, the letters are
       gone before the half is in the frame, so the two never overlap. */
    const c2 = close.current;
    if (c2) {
      /* A plain `to` from the stylesheet's opacity: 0, so a reversed
         scroll reverts to exactly that. A fromTo here was found to leave
         the line at 1 once rewound past its start. */
      out.fromTo(
        c2,
        { filter: "blur(12px)" },
        { opacity: 1, filter: "blur(0px)", ease: "none", duration: 0.1, immediateRender: false },
        0.58,
      );
    }
    if (a) {
      out.fromTo(
        a,
        { opacity: 1, y: 0, filter: "blur(0px)" },
        {
          opacity: 0,
          y: -18,
          filter: "blur(10px)",
          ease: "none",
          duration: 0.32,
          immediateRender: false,
        },
        0.04,
      );
    }

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
      out.scrollTrigger?.kill();
      out.kill();
    };
  }, [pinned, stages.length]);

  return (
    <section
      id="hundred"
      className={pinned ? "days days--pinned" : "days"}
      aria-labelledby="days-title"
      style={{ ["--count" as string]: stages.length }}
    >
      {/* Paper held under the bar once the halves are in, including the
          moment the pin releases and the brand panel slides up past it.
          It carries the light tone for the nav; the section does not,
          because the section begins with the hero. */}
      <div className="days__cap" ref={cap} data-tone="light" aria-hidden="true" />

      <div className="days__track" ref={track}>
        {/* Equal-height sentinels: the slide, one per stage, the close,
            and a hold so the pin keeps the finished frame for a screen
            before it releases. */}
        <div className="days__steps" ref={steps} aria-hidden="true">
          {Array.from({ length: stages.length + 3 }, (_, i) => (
            <div key={i} className="days__step" data-i={i} />
          ))}
        </div>

        <div className="days__frame">
          {/* The base layer. Pinned, the halves close over it. */}
          <div className="days__hero">
            <Hero />
          </div>

          {/* What is under the brand half when it goes: paper. */}
          <div className="days__fill" ref={fill} aria-hidden="true" />

          <div className="days__half days__half--say" ref={say} data-tone="light">
            <div className="days__aside" ref={aside}>
              <p className="days__when">{eyebrow}</p>
              <h2 className="days__title" id="days-title">
                {heading}
              </h2>
              <p className="days__lede">{lede}</p>

              <MarkStep
                done={pinned ? BUILT[active] : BUILT[BUILT.length - 1]}
                className="days__mark"
              />

              <div className="days__ticks" aria-hidden="true">
                {stages.map((s, i) => (
                  <span
                    key={s.index}
                    className="days__tick"
                    data-on={pinned ? i <= active : true}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="days__slot" ref={slot}>
          <div className="days__half days__half--work" ref={work}>
            <ol className="days__stack">
              {stages.map((s, i) => {
                const Drawing = DRAWINGS[i];
                const on = !pinned || i === active;
                return (
                  <li
                    key={s.index}
                    className={on ? "days__stage is-on" : "days__stage"}
                  >
                    <div className="days__words">
                      <h3 className="days__name">{s.title}</h3>
                      <p className="days__text">{s.body}</p>
                    </div>
                    {/* The drawing on its own ground, so it reads as a
                        place and not as marks on the panel. */}
                    <div className="days__art">
                      <Drawing className={pinned ? "days__draw sd sd--armed" : "days__draw sd"} />
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
          </div>

          {/* The judgement, on the full paper once the brand half has gone.
              Unpinned it is simply the band after the list. */}
          <div className="days__close" ref={close}>
            <Judgement active={pinned ? judge : undefined} embedded={pinned} />
          </div>
        </div>
      </div>
    </section>
  );
}
