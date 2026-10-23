"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The Backbone.
 *
 * A vertical column of light built from the same low-poly chevron as the
 * Revyve mark: the check, repeated and stacked, receding into the dark.
 *
 * It is not decoration. Revyve's own words are "the platform under every
 * company we own", so the page shows a load-bearing structure: each facet is
 * a confirmed line, and the column is what holds the rest up.
 *
 * Drawn in SVG from the brand's violets, so it scales, weighs nothing, and
 * needs no image asset.
 */

const SEGMENTS = 16;
const VIEW_W = 440;
const VIEW_H = 940;
const CX = VIEW_W / 2;

type Vertebra = {
  i: number;
  y: number;
  w: number;
  depth: number;
  band: number;
  opacity: number;
};

function buildSpine(): Vertebra[] {
  const out: Vertebra[] = [];
  for (let i = 0; i < SEGMENTS; i++) {
    // Each step up is slightly narrower and slightly closer: perspective
    // without a 3D engine.
    const t = i / (SEGMENTS - 1);
    const w = 136 * (1 - t * 0.6);
    const depth = 58 * (1 - t * 0.5);
    const band = 17 * (1 - t * 0.45);
    const y = VIEW_H - 150 - i * 49 * (1 - t * 0.2);
    // The column dims as it recedes, so the eye reads depth, not a pattern.
    const opacity = 1 - t * 0.78;
    out.push({ i, y, w, depth, band, opacity });
  }
  return out;
}

/** The left facet of one chevron. */
function leftFacet({ y, w, depth, band }: Vertebra) {
  return [
    `M ${CX - w} ${y}`,
    `L ${CX} ${y + depth}`,
    `L ${CX} ${y + depth - band}`,
    `L ${CX - w + band * 0.95} ${y}`,
    "Z",
  ].join(" ");
}

/** The right facet, cut a touch differently so the pair never reads flat. */
function rightFacet({ y, w, depth, band }: Vertebra) {
  return [
    `M ${CX + w} ${y}`,
    `L ${CX} ${y + depth}`,
    `L ${CX} ${y + depth - band}`,
    `L ${CX + w - band * 0.95} ${y}`,
    "Z",
  ].join(" ");
}

export default function Backbone() {
  const spine = buildSpine();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [lit, setLit] = useState(false);

  useEffect(() => {
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // The column builds itself on arrival. Under reduced motion it is simply
    // already built.
    setLit(true);
    if (still) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        setTilt({
          x: ((e.clientX - cx) / cx) * 7,
          y: ((e.clientY - cy) / cy) * 5,
        });
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      className={`bb ${lit ? "bb--lit" : ""}`}
      ref={wrapRef}
      aria-hidden="true"
    >
      {/* The light the structure sits in. Three layers, no gradients on text. */}
      <div className="bb__glowFar" />
      <div className="bb__glowWide" />
      <div className="bb__glowCore" />

      <svg
        className="bb__svg"
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        fill="none"
        style={{
          transform: `perspective(1200px) rotateY(${tilt.x}deg) rotateX(${-tilt.y}deg)`,
        }}
      >
        <defs>
          <linearGradient id="rv-face-l" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#b689f8" />
            <stop offset="100%" stopColor="#6420d4" />
          </linearGradient>
          <linearGradient id="rv-face-r" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7028e8" />
            <stop offset="100%" stopColor="#3a1284" />
          </linearGradient>
          <linearGradient id="rv-spark" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#d5bdfb" stopOpacity="0" />
            <stop offset="45%" stopColor="#d5bdfb" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#d5bdfb" stopOpacity="0" />
          </linearGradient>
          <filter id="rv-soft" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="11" />
          </filter>
        </defs>

        {/* The core: the line the whole column is threaded on. */}
        <rect
          className="bb__core"
          x={CX - 1.1}
          y={120}
          width={2.2}
          height={VIEW_H - 230}
          fill="url(#rv-spark)"
        />

        {/* A blurred copy of the spine, underneath, so it reads as lit from
            inside rather than outlined. */}
        <g filter="url(#rv-soft)" opacity="0.6">
          {spine.map((v) => (
            <g key={`b-${v.i}`} opacity={v.opacity * 0.9}>
              <path d={leftFacet(v)} fill="#7028e8" />
              <path d={rightFacet(v)} fill="#6420d4" />
            </g>
          ))}
        </g>

        {/* The structure itself. */}
        <g>
          {spine.map((v) => (
            <g
              key={v.i}
              className="bb__vertebra"
              opacity={v.opacity}
              style={{ ["--d" as string]: `${v.i * 55}ms` }}
            >
              <path d={leftFacet(v)} fill="url(#rv-face-l)" />
              <path d={rightFacet(v)} fill="url(#rv-face-r)" />
              {/* The joint: a confirmed line, the gesture the mark is made of. */}
              <circle
                cx={CX}
                cy={v.y + v.depth - v.band * 0.5}
                r={2.1 - v.i * 0.07}
                fill="#d5bdfb"
                opacity={0.85}
              />
            </g>
          ))}
        </g>

        {/* The travelling pulse: one signal climbing the spine, slowly. */}
        <g className="bb__pulse">
          <circle cx={CX} cy={0} r="4.5" fill="#d5bdfb" />
          <circle cx={CX} cy={0} r="13" fill="#b689f8" opacity="0.28" />
        </g>
      </svg>
    </div>
  );
}
