"use client";

import { useEffect, useRef, useState } from "react";
import { KEYS, SAVED_GLASS, resetGlass, setGlass, useGlass, type Glass } from "./glassStore";

/**
 * The glass control panel (development only; renders nothing in a build).
 *
 * Light: drag in the pad to set the angle the light comes from, or type it;
 * the percentage is its strength. Then refraction, depth, dispersion, frost
 * and splay, each a slider and a number. Changes show on every glass panel
 * on the page at once.
 *
 *   Save   writes the setting to app/v4/glass.json through the local helper
 *          (node scripts/glass-save.mjs). If the helper is not running, it
 *          copies the setting so it can be pasted instead.
 *   Copy   copies the setting as JSON.
 *   Reset  goes back to the saved setting.
 */

const SAVE_URL = "http://127.0.0.1:3311/glass";

const SLIDERS: { k: keyof Glass; label: string }[] = [
  { k: "refraction", label: "Refraction" },
  { k: "depth", label: "Depth" },
  { k: "dispersion", label: "Dispersion" },
  { k: "frost", label: "Frost" },
  { k: "splay", label: "Splay" },
];

export default function GlassPanel() {
  const g = useGlass();
  const [open, setOpen] = useState(true);
  const [note, setNote] = useState("");
  const pad = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  /* Drawn only after the page loads: it shows this browser's working values,
     which the server cannot know. */
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!note) return;
    const id = window.setTimeout(() => setNote(""), 3200);
    return () => window.clearTimeout(id);
  }, [note]);

  if (process.env.NODE_ENV === "production" || !mounted) return null;

  const angleFromPointer = (e: React.PointerEvent) => {
    const r = pad.current?.getBoundingClientRect();
    if (!r) return;
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    /* 0 is light from the top; -90 from the left; 90 from the right. */
    const a = Math.round((Math.atan2(dx, -dy) * 180) / Math.PI);
    setGlass({ angle: a });
  };

  const json = () => {
    const o: Record<string, number> = {};
    for (const k of KEYS) o[k] = g[k];
    return JSON.stringify(o, null, 2);
  };

  const copy = async (msg = "Copied the setting.") => {
    try {
      await navigator.clipboard.writeText(json());
      setNote(msg);
    } catch {
      setNote("Could not copy. Select the values by hand.");
    }
  };

  const save = async () => {
    try {
      const r = await fetch(SAVE_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: json() });
      if (!r.ok) throw new Error(String(r.status));
      setNote("Saved to app/v4/glass.json.");
    } catch {
      await copy("Save helper not running, so the setting was copied instead.");
    }
  };

  const a = (g.angle * Math.PI) / 180;
  const dotX = 50 + Math.sin(a) * 34;
  const dotY = 50 - Math.cos(a) * 34;
  const changed = KEYS.some((k) => g[k] !== SAVED_GLASS[k]);

  if (!open) {
    return (
      <button type="button" className="gp-toggle" onClick={() => setOpen(true)}>
        <GlassIcon /> Glass
      </button>
    );
  }

  return (
    <div className="gp" role="dialog" aria-label="Glass settings">
      <div className="gp__head">
        <span className="gp__title">
          <GlassIcon /> Glass
        </span>
        <button type="button" className="gp__x" onClick={() => setOpen(false)} aria-label="Close">
          <svg viewBox="0 0 16 16">
            <path d="M4 4l8 8M12 4l-8 8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="gp__light">
        <span className="gp__label">Light</span>
        <div
          ref={pad}
          className="gp__pad"
          onPointerDown={(e) => {
            dragging.current = true;
            e.currentTarget.setPointerCapture(e.pointerId);
            angleFromPointer(e);
          }}
          onPointerMove={(e) => dragging.current && angleFromPointer(e)}
          onPointerUp={() => (dragging.current = false)}
          role="slider"
          aria-label="Light angle"
          aria-valuemin={-180}
          aria-valuemax={180}
          aria-valuenow={g.angle}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft" || e.key === "ArrowDown") setGlass({ angle: g.angle - 5 });
            if (e.key === "ArrowRight" || e.key === "ArrowUp") setGlass({ angle: g.angle + 5 });
          }}
        >
          <span className="gp__pane" style={{ background: `linear-gradient(${g.angle + 180}deg, rgba(255,255,255,${0.15 + g.light / 160}), rgba(255,255,255,0.04) 60%)` }} />
          <span className="gp__dot" style={{ left: `${dotX}%`, top: `${dotY}%` }} />
        </div>
        <div className="gp__pair">
          <Num value={g.angle} min={-180} max={180} suffix="°" onChange={(v) => setGlass({ angle: v })} label="Light angle" />
          <Num value={g.light} min={0} max={100} suffix="%" onChange={(v) => setGlass({ light: v })} label="Light strength" />
        </div>
      </div>

      <div className="gp__rows">
        {SLIDERS.map(({ k, label }) => (
          <div className="gp__row" key={k}>
            <label className="gp__label" htmlFor={`gp-${k}`}>
              {label}
            </label>
            <input
              id={`gp-${k}`}
              className="gp__range"
              type="range"
              min={0}
              max={100}
              value={g[k]}
              style={{ ["--p" as string]: `${g[k]}%` }}
              onChange={(e) => setGlass({ [k]: Number(e.target.value) })}
            />
            <Num value={g[k]} min={0} max={100} onChange={(v) => setGlass({ [k]: v })} label={label} />
          </div>
        ))}
      </div>

      <div className="gp__foot">
        <button type="button" className="gp__btn" onClick={() => resetGlass()} disabled={!changed}>
          Reset
        </button>
        <button type="button" className="gp__btn" onClick={() => copy()}>
          Copy
        </button>
        <button type="button" className="gp__btn gp__btn--save" onClick={save}>
          Save
        </button>
      </div>
      <p className="gp__note" aria-live="polite">
        {note || (changed ? "Unsaved changes." : "Matches the saved setting.")}
      </p>
    </div>
  );
}

function Num({ value, min, max, suffix, onChange, label }: { value: number; min: number; max: number; suffix?: string; onChange: (v: number) => void; label: string }) {
  const [text, setText] = useState(String(value));
  useEffect(() => setText(String(value)), [value]);
  const commit = () => {
    const v = Number(text.replace(/[^\d.-]/g, ""));
    if (!Number.isNaN(v)) onChange(Math.max(min, Math.min(max, Math.round(v))));
    else setText(String(value));
  };
  return (
    <span className="gp__num">
      <input
        aria-label={label}
        value={text}
        inputMode="numeric"
        onChange={(e) => setText(e.target.value)}
        onBlur={commit}
        onKeyDown={(e) => {
          if (e.key === "Enter") commit();
          if (e.key === "ArrowUp") onChange(Math.min(max, value + 1));
          if (e.key === "ArrowDown") onChange(Math.max(min, value - 1));
        }}
      />
      {suffix && <i>{suffix}</i>}
    </span>
  );
}

function GlassIcon() {
  return (
    <svg viewBox="0 0 20 20" className="gp__icon" aria-hidden="true">
      <circle cx="10" cy="10" r="7.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6.2 11.5a4.2 4.2 0 0 0 3.4 2.6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
