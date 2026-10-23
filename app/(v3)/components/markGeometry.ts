/**
 * The Revyve check, as geometry.
 *
 * A thick polyline mitred at the elbow, subdivided into ten faces running
 * from the bottom of the short arm to the tip of the long one. Shared so the
 * hero can draw the finished mark and the hundred-days section can draw it
 * part-built.
 */

export type Pt = [number, number];

const U1: Pt = [112.4, 277.6];
const U2: Pt = [298.1, 463.3];
const U3: Pt = [685.7, 39.5];
const L1: Pt = [27.6, 362.4];
const L2: Pt = [302.0, 636.8];
const L3: Pt = [774.3, 120.5];

const mid = (a: Pt, b: Pt): Pt => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
const at = (a: Pt, b: Pt, t: number): Pt => [
  a[0] + (b[0] - a[0]) * t,
  a[1] + (b[1] - a[1]) * t,
];

const Mu = mid(U1, U2);
const Ml = mid(L1, L2);
const Ua = at(U2, U3, 1 / 3);
const Ub = at(U2, U3, 2 / 3);
const La = at(L2, L3, 1 / 3);
const Lb = at(L2, L3, 2 / 3);

/** Ten faces, in the order the stroke is made. */
export const FACES: { p: Pt[]; fill: string }[] = [
  { p: [U1, Mu, L1], fill: "#2d1166" },
  { p: [Mu, Ml, L1], fill: "#3a1284" },
  { p: [Mu, U2, Ml], fill: "#4d16a8" },
  { p: [U2, L2, Ml], fill: "#44139a" },
  { p: [U2, Ua, L2], fill: "#5a1ccc" },
  { p: [Ua, La, L2], fill: "#5118b8" },
  { p: [Ua, Ub, La], fill: "#6b24de" },
  { p: [Ub, Lb, La], fill: "#7c35ea" },
  { p: [Ub, U3, Lb], fill: "#9a66f0" },
  { p: [U3, L3, Lb], fill: "#b689f8" },
];

export const OUTLINE: Pt[] = [U1, U2, U3, L3, L2, L1];

/** The top of the long arm: the edge that catches the light. */
export const CREST: [Pt, Pt] = [U2, U3];

export const VIEWBOX = "0 0 820 700";

export const d = (p: Pt[]) =>
  `M${p[0][0].toFixed(1)} ${p[0][1].toFixed(1)}` +
  p.slice(1).map((q) => `L${q[0].toFixed(1)} ${q[1].toFixed(1)}`).join("") +
  "Z";
