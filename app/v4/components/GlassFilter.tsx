"use client";

import { Fragment, useEffect, useState } from "react";
import { useGlass } from "./glassStore";

/**
 * Draws the site's glass from the seven settings, for every `.glass`
 * element on the page.
 *
 *   light angle, light   a bright rim on the side the light comes from,
 *                        fading round the edge, and an inner highlight
 *   splay                how far that light spreads across the surface
 *   frost                blur of what is behind
 *   depth                how thick the edge is: the width of the bending
 *                        band, and how far the pane lifts off the page
 *   refraction           how far the edge bends what is behind it
 *   dispersion           the colour split where it bends (red, green and
 *                        blue bent by slightly different amounts)
 *
 * Refraction and dispersion are a real SVG displacement filter used as a
 * backdrop filter. Only Chromium browsers render an SVG filter there, so
 * the filter is switched on only in Chromium; other browsers get the same
 * light, frost and depth without the bend.
 *
 * A backdrop filter only lines its lens image up with the pane when the
 * image is sized in pixels, so each distinct pane size gets its own filter
 * (`v4g-<w>x<h>r<radius>`), and each pane is pointed at its filter through
 * the --g-filter variable. Panes are re-measured when they resize.
 */

type Pane = { id: string; w: number; h: number; r: number };

/** The bending band, in pixels, for a depth of 0 to 100. */
const bandFor = (depth: number) => 6 + depth * 0.7;

/** A lens map for one rounded pane: red and green push the backdrop
 *  inwards near the edge, strongest at the rim, across the band. */
const mapCache = new Map<string, string>();
function lensMap(w: number, h: number, r: number, depth: number): string {
  const key = `${w}x${h}r${r}d${depth}`;
  const hit = mapCache.get(key);
  if (hit) return hit;
  const s = Math.min(1, 320 / Math.max(w, h));
  const cw = Math.max(2, Math.ceil(w * s));
  const ch = Math.max(2, Math.ceil(h * s));
  const cv = document.createElement("canvas");
  cv.width = cw;
  cv.height = ch;
  const ctx = cv.getContext("2d");
  if (!ctx) return "";
  const img = ctx.createImageData(cw, ch);
  const hw = w / 2;
  const hh = h / 2;
  const band = Math.max(2, Math.min(bandFor(depth), Math.min(hw, hh)));
  const sdf = (x: number, y: number) => {
    const qx = Math.abs(x) - (hw - r);
    const qy = Math.abs(y) - (hh - r);
    return Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) + Math.min(Math.max(qx, qy), 0) - r;
  };
  for (let j = 0; j < ch; j++) {
    for (let i = 0; i < cw; i++) {
      const x = (i + 0.5) / s - hw;
      const y = (j + 0.5) / s - hh;
      const d = sdf(x, y);
      let R = 128;
      let G = 128;
      if (d < 0 && -d < band) {
        const t = -d / band;
        const mag = (1 - t) * (1 - t);
        let nx = sdf(x + 0.5, y) - sdf(x - 0.5, y);
        let ny = sdf(x, y + 0.5) - sdf(x, y - 0.5);
        const nl = Math.hypot(nx, ny) || 1;
        nx /= nl;
        ny /= nl;
        R = 128 - nx * mag * 127;
        G = 128 - ny * mag * 127;
      }
      const k = (j * cw + i) * 4;
      img.data[k] = R;
      img.data[k + 1] = G;
      img.data[k + 2] = 128;
      img.data[k + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  const url = cv.toDataURL("image/png");
  mapCache.set(key, url);
  return url;
}

export default function GlassFilter() {
  const g = useGlass();
  const [refract, setRefract] = useState(false);
  const [panes, setPanes] = useState<Pane[]>([]);

  /* Only Chromium renders an SVG filter as a backdrop filter. */
  useEffect(() => {
    const brands = (navigator as Navigator & { userAgentData?: { brands: { brand: string }[] } }).userAgentData?.brands ?? [];
    setRefract(brands.some((b) => /Chromium|Google Chrome|Microsoft Edge/.test(b.brand)));
  }, []);

  /* Measure every pane and point it at the filter for its size. */
  useEffect(() => {
    if (!refract) return;
    const root = document.querySelector<HTMLElement>(".v4");
    if (!root) return;
    let raf = 0;
    const measure = () => {
      raf = 0;
      const seen = new Map<string, Pane>();
      root.querySelectorAll<HTMLElement>(".glass:not(.stat)").forEach((el) => {
        const w = Math.round(el.offsetWidth);
        const h = Math.round(el.offsetHeight);
        if (w < 4 || h < 4) return;
        const r = Math.round(Math.min(parseFloat(getComputedStyle(el).borderTopLeftRadius) || 0, w / 2, h / 2));
        const id = `v4g-${w}x${h}r${r}`;
        if (!seen.has(id)) seen.set(id, { id, w, h, r });
        const v = `url(#${id})`;
        if (el.style.getPropertyValue("--g-filter") !== v) el.style.setProperty("--g-filter", v);
      });
      const next = [...seen.values()].sort((a, b) => a.id.localeCompare(b.id));
      setPanes((prev) => (prev.length === next.length && prev.every((p, i) => p.id === next[i].id) ? prev : next));
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };
    const ro = new ResizeObserver(schedule);
    const observeAll = () => root.querySelectorAll(".glass").forEach((el) => ro.observe(el));
    observeAll();
    const mo = new MutationObserver(() => {
      observeAll();
      schedule();
    });
    mo.observe(root, { childList: true, subtree: true });
    schedule();
    return () => {
      ro.disconnect();
      mo.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [refract]);

  /* The light, frost, depth and splay as variables on the page. */
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".v4");
    if (!root) return;
    const a = (g.angle * Math.PI) / 180;
    const lx = Math.sin(a);
    const ly = -Math.cos(a);
    const L = g.light / 100;
    const set = (k: string, v: string) => root.style.setProperty(k, v);
    set("--g-rim", `${g.angle + 180}deg`);
    set("--g-L", L.toFixed(3));
    set("--g-L2", (L * 0.45).toFixed(3));
    set("--g-hx", `${(-lx * 1.5).toFixed(2)}px`);
    set("--g-hy", `${(-ly * 1.5).toFixed(2)}px`);
    set("--g-sx", `${(50 + lx * 46).toFixed(1)}%`);
    set("--g-sy", `${(50 + ly * 46).toFixed(1)}%`);
    set("--g-sheen", (L * 0.4).toFixed(3));
    set("--g-splay", `${(g.splay * 0.95).toFixed(1)}%`);
    set("--g-frost", `${(g.frost * 0.4).toFixed(2)}px`);
    set("--g-fill", (0.38 + g.frost * 0.004).toFixed(3));
    set("--g-lift", `${(g.depth * 0.45).toFixed(1)}px`);
    set("--g-blur", `${(g.depth * 1.4).toFixed(1)}px`);
    set("--g-spread", `${(-g.depth * 0.5).toFixed(1)}px`);
    set("--g-shade", (0.1 + g.depth * 0.0022).toFixed(3));
    root.classList.toggle("v4--refract", refract && g.refraction > 0);
  }, [g, refract]);

  if (!refract) return null;

  const scale = (g.refraction / 100) * 60;
  const k = (g.dispersion / 100) * 0.38;
  const frost = g.frost * 0.4;
  const channels = [
    { s: scale * (1 + k), m: "1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0", c: "r" },
    { s: scale, m: "0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0", c: "g" },
    { s: scale * (1 - k), m: "0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0", c: "b" },
  ];

  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
      <defs>
        {panes.map((p) => (
          <filter
            key={p.id}
            id={p.id}
            x="0"
            y="0"
            width={p.w}
            height={p.h}
            filterUnits="userSpaceOnUse"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur in="SourceGraphic" stdDeviation={frost} edgeMode="duplicate" result="soft" />
            <feImage href={lensMap(p.w, p.h, p.r, g.depth)} x="0" y="0" width={p.w} height={p.h} preserveAspectRatio="none" result="lens" />
            {channels.map((c) => (
              <Fragment key={c.c}>
                <feDisplacementMap in="soft" in2="lens" scale={c.s} xChannelSelector="R" yChannelSelector="G" result={`d${c.c}`} />
                <feColorMatrix in={`d${c.c}`} type="matrix" values={c.m} result={`c${c.c}`} />
              </Fragment>
            ))}
            <feBlend in="cr" in2="cg" mode="screen" result="rg" />
            <feBlend in="rg" in2="cb" mode="screen" result="rgb" />
            <feColorMatrix in="rgb" type="saturate" values="1.45" />
          </filter>
        ))}
      </defs>
    </svg>
  );
}
