"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * The entrance for the parts of every section: heading, then text, then the
 * evidence, staggered by 60-90ms, rising 16-32px with opacity, triggered once
 * as the section enters. Transform and opacity only.
 *
 * The hidden starting state lives in CSS, inside
 * `@media (prefers-reduced-motion: no-preference)`, and is only armed once
 * this component has mounted on the client. So:
 *
 *   - with reduced motion asked for, nothing is ever hidden: the reduced page
 *     is the finished page;
 *   - if the script never runs, nothing is ever hidden either, because the
 *     arming class is added by the script.
 *
 * That is the rule the inspector checks and the one models usually break.
 */
export default function Rise({
  children,
  delay = 0,
  as: Tag = "div",
  className,
}: {
  children: ReactNode;
  delay?: number;
  as?: "div" | "section" | "li" | "p" | "header" | "footer";
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    // Respect the setting at mount; never hide anything if it is on.
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (still) return;

    setArmed(true);

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const classes = [
    className,
    armed ? "rise" : null,
    armed && shown ? "is-in" : null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={classes || undefined}
      style={armed ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
}
