"use client";

import { useEffect, useRef } from "react";

/**
 * The hero's background: the Revyve V, the faceted check from the logo,
 * set large and faint behind the hero picture.
 *
 * Its facets are drawn as the logo cuts them, each a flat triangle with a
 * slight relief, and the whole mark sways very slowly in 3D, so the facets
 * catch one soft light and give it back in turn, the way the logo's facets
 * read. It sits low in opacity and fades at its edges, so it merges with
 * the page rather than standing on it.
 *
 * Plain Canvas 2D, a handful of triangles. It pauses off screen and in
 * hidden tabs, draws at ~30fps, and with reduced motion it draws one still
 * frame.
 */

type V3 = [number, number, number];

/* The check, in units: x right, y up. Outer and inner edges of each arm,
   with points along them so the arms break into facets like the logo. */
const P: Record<string, V3> = {
  a: [-0.95, 0.34, 0], // left arm, outer top
  b: [-0.4, 0.34, 0], // left arm, inner top
  m: [-0.48, -0.22, -0.12], // left arm, middle ridge
  n: [0.0, -0.16, -0.05], // inner notch, where the arms meet
  t: [0.0, -0.82, 0], // bottom tip
  r1: [0.42, 0.33, 0.04], // right arm, inner, low
  r2: [0.74, 0.67, 0], // right arm, inner, high
  o1: [0.44, 0.0, -0.1], // right arm, outer, low
  o2: [0.76, 0.52, -0.08], // right arm, outer, high
  tip: [1.02, 1.02, 0], // right arm, tip
};

/* Facets, with a tone each (0 deep violet, 1 violet, 2 lilac, 3 pale). */
const FACETS: [string, string, string, number][] = [
  ["a", "b", "m", 3],
  ["b", "n", "m", 2],
  ["m", "n", "t", 1],
  ["n", "r1", "o1", 2],
  ["n", "o1", "t", 0],
  ["r1", "r2", "o2", 3],
  ["r1", "o2", "o1", 1],
  ["r2", "tip", "o2", 2],
];

const TONE: V3[] = [
  [100, 32, 212],
  [124, 70, 232],
  [168, 124, 246],
  [214, 196, 255],
];

const norm = (v: V3): V3 => {
  const l = Math.hypot(v[0], v[1], v[2]) || 1;
  return [v[0] / l, v[1] / l, v[2] / l];
};
const LIGHT = norm([-0.5, 0.7, -0.6]);

export default function HeroFacets3D({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let raf = 0;
    let onScreen = true;
    let last = 0;

    const draw = (t: number) => {
      last = t;
      ctx.clearRect(0, 0, w, h);
      if (!w || !h) return;

      /* A slow sway about two axes, out of step, and a breath of scale. */
      const yaw = -0.18 + Math.sin(t * 0.00035) * 0.32;
      const pitch = 0.12 + Math.sin(t * 0.00027 + 1.3) * 0.12;
      const cy = Math.cos(yaw);
      const sy = Math.sin(yaw);
      const cp = Math.cos(pitch);
      const sp = Math.sin(pitch);
      const D = 4.2;
      const scale = Math.min(w, h) * 0.5 * (1 + Math.sin(t * 0.0004) * 0.015);
      const lift = Math.sin(t * 0.0005) * 0.03;

      const proj: Record<string, { x: number; y: number; v: V3 }> = {};
      for (const k in P) {
        const [x0, y0, z0] = P[k];
        const y = y0 + lift;
        const x1 = x0 * cy + z0 * sy;
        const z1 = -x0 * sy + z0 * cy;
        const y2 = y * cp - z1 * sp;
        const z2 = y * sp + z1 * cp + D;
        proj[k] = { x: w * 0.46 + (x1 * scale * D) / z2, y: h * 0.54 - (y2 * scale * D) / z2, v: [x1, y2, z2] };
      }

      const order = FACETS.map((f) => ({ f, d: proj[f[0]].v[2] + proj[f[1]].v[2] + proj[f[2]].v[2] })).sort((m, n) => n.d - m.d);

      for (const { f } of order) {
        const A = proj[f[0]];
        const B = proj[f[1]];
        const C = proj[f[2]];
        const u: V3 = [B.v[0] - A.v[0], B.v[1] - A.v[1], B.v[2] - A.v[2]];
        const q: V3 = [C.v[0] - A.v[0], C.v[1] - A.v[1], C.v[2] - A.v[2]];
        let n = norm([u[1] * q[2] - u[2] * q[1], u[2] * q[0] - u[0] * q[2], u[0] * q[1] - u[1] * q[0]]);
        if (n[2] > 0) n = [-n[0], -n[1], -n[2]];
        const lit = Math.max(0, n[0] * LIGHT[0] + n[1] * LIGHT[1] + n[2] * LIGHT[2]);
        const base = TONE[f[3]];
        const shade = 0.78 + 0.34 * lit;
        const shine = Math.pow(lit, 4) * 0.55;
        const col = base.map((c) => Math.round(Math.min(255, c * shade + (255 - c * shade) * shine)));

        ctx.beginPath();
        ctx.moveTo(A.x, A.y);
        ctx.lineTo(B.x, B.y);
        ctx.lineTo(C.x, C.y);
        ctx.closePath();
        ctx.fillStyle = `rgb(${col[0]},${col[1]},${col[2]})`;
        ctx.fill();
        /* A fine light line on every cut, as the logo has. */
        ctx.strokeStyle = "rgba(255,255,255,0.55)";
        ctx.lineWidth = 1;
        ctx.lineJoin = "round";
        ctx.stroke();
      }
    };

    const resize = () => {
      const r = cv.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width;
      h = r.height;
      cv.width = Math.max(1, Math.round(w * dpr));
      cv.height = Math.max(1, Math.round(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(last);
    };

    let prev = 0;
    const loop = (t: number) => {
      if (t - prev >= 32) {
        prev = t;
        draw(t);
      }
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (reduce || raf || !onScreen || document.hidden) return;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(cv);
    const io = new IntersectionObserver(([e]) => {
      onScreen = e.isIntersecting;
      if (onScreen) start();
      else stop();
    });
    io.observe(cv);
    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVis);

    resize();
    if (reduce) draw(0);
    else start();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
