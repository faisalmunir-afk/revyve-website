"use client";

import { useEffect, useState } from "react";
import { MeshGradient } from "@paper-design/shaders-react";

/**
 * The hero's living field.
 *
 * Two mesh gradients in Revyve's own violets: a slow base that carries the
 * colour, and a faster, grainier pass over it at low opacity that gives the
 * light its texture and keeps it from reading as a flat blur. Both drift
 * continuously, so the light behind the headline is never static.
 *
 * Replaces the hand-written WebGL pass. Same idea, but the shader library
 * owns the context, the resize handling and the render loop, which is what
 * kept going wrong by hand.
 *
 * It is an enhancement, never a dependency:
 *   - nothing renders until the client has mounted, so the served HTML and
 *     the no-script page are the dark ground and the veil alone
 *   - if reduced motion is asked for, it never mounts at all
 */

/* The brand's violets, dark to light. Black anchors the field so the
   gradient reads as light in a dark room rather than a wash of colour. */
const BASE = ["#07041a", "#07041a", "#150c38", "#2a0f63", "#6420d4", "#b689f8", "#07041a"];
const GRAIN = ["#07041a", "#07041a", "#dce6ff", "#7c35ea", "#3a1284"];

export default function HeroField({ className }: { className?: string }) {
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setOn(true);
  }, []);

  if (!on) return null;

  return (
    <div className={className} aria-hidden="true">
      <MeshGradient
        className="hero__mesh"
        colors={BASE}
        speed={0.18}
        distortion={0.82}
        swirl={0.45}
        grainMixer={0.28}
        grainOverlay={0.12}
      />
      <MeshGradient
        className="hero__mesh hero__mesh--grain"
        colors={GRAIN}
        speed={0.12}
        distortion={0.7}
        swirl={0.9}
        grainMixer={0.55}
        grainOverlay={0.3}
      />
    </div>
  );
}
