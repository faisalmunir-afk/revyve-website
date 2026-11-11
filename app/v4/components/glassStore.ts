"use client";

import { useSyncExternalStore } from "react";
import SAVED from "../glass.json";

/**
 * The site's glass setting, shared by the filter that draws it and the
 * panel that tunes it.
 *
 * The saved setting lives in app/v4/glass.json (written by the panel's
 * Save, through scripts/glass-save.mjs). While tuning, the working values
 * are kept in this tab's localStorage so a reload does not lose them;
 * "Reset" goes back to what is saved.
 */

export type Glass = {
  /** Direction the light comes from, in degrees (-180 to 180). */
  angle: number;
  /** Strength of the light on the edge, 0 to 100. */
  light: number;
  /** How far the edge bends what is behind it, 0 to 100. */
  refraction: number;
  /** How thick the glass edge is, 0 to 100. */
  depth: number;
  /** Colour split at the bent edge, 0 to 100. */
  dispersion: number;
  /** Blur of what is behind, 0 to 100. */
  frost: number;
  /** How far the light spreads across the surface, 0 to 100. */
  splay: number;
};

export const SAVED_GLASS: Glass = { ...(SAVED as Glass) };
export const KEYS: (keyof Glass)[] = ["angle", "light", "refraction", "depth", "dispersion", "frost", "splay"];
const LS = "revyve-glass-working";

const clamp = (k: keyof Glass, v: number) => (k === "angle" ? Math.max(-180, Math.min(180, v)) : Math.max(0, Math.min(100, v)));

let state: Glass = SAVED_GLASS;
let loaded = false;
const subs = new Set<() => void>();

function load() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  try {
    const raw = localStorage.getItem(LS);
    if (raw) {
      const o = JSON.parse(raw);
      const next = { ...SAVED_GLASS };
      for (const k of KEYS) if (typeof o[k] === "number") next[k] = clamp(k, o[k]);
      state = next;
    }
  } catch {
    /* No storage: work from the saved setting. */
  }
}

export function setGlass(patch: Partial<Glass>) {
  const next = { ...state };
  for (const k of KEYS) if (typeof patch[k] === "number" && !Number.isNaN(patch[k])) next[k] = clamp(k, patch[k] as number);
  state = next;
  try {
    localStorage.setItem(LS, JSON.stringify(state));
  } catch {
    /* Not stored; still applied. */
  }
  subs.forEach((f) => f());
}

export function resetGlass(to: Glass = SAVED_GLASS) {
  try {
    localStorage.removeItem(LS);
  } catch {}
  state = { ...to };
  subs.forEach((f) => f());
}

export function useGlass(): Glass {
  return useSyncExternalStore(
    (f) => {
      load();
      subs.add(f);
      f();
      return () => subs.delete(f);
    },
    () => {
      load();
      return state;
    },
    () => SAVED_GLASS,
  );
}
