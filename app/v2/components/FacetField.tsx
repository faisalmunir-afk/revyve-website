/**
 * The Facet Field.
 *
 * The Revyve mark is a low-poly check: a V cut into triangular facets in
 * several violets. This takes that same construction and blows it up to
 * fill the background, so the page sits inside the gem the logo is a chip of.
 *
 * Two things stop it reading as noise:
 *
 *   1. One light. Every facet is shaded by how far its centre sits from a
 *      single light point, so the field reads as one lit surface rather than
 *      a random scatter. That is the "colour grading".
 *   2. One geometry. The grid is jittered by a seeded generator, never
 *      Math.random, so the server and the client draw exactly the same
 *      facets and React never has to patch the DOM.
 *
 * It is decoration, so it is aria-hidden and never animates on its own.
 */

/** mulberry32: small, fast, deterministic. Same seed, same field, always. */
function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** The mark's own violets, deep to light. */
const RAMP = ["#241056", "#3a1284", "#5118b8", "#6420d4", "#7028e8", "#9a5cf0", "#b689f8"];

type Props = {
  /** Distinguishes the gradient ids when more than one field is on a page. */
  id: string;
  /** Facet density across the width. */
  cols?: number;
  rows?: number;
  /** Where the light sits, in 0-1 of the box. */
  light?: [number, number];
  /** Overall strength. The field should never compete with the text. */
  opacity?: number;
  seed?: number;
  className?: string;
};

export default function FacetField({
  id,
  cols = 9,
  rows = 6,
  light = [0.72, 0.3],
  opacity = 0.5,
  seed = 20261022,
  className,
}: Props) {
  const W = 1200;
  const H = 800;
  const rand = rng(seed);

  // A jittered lattice. Edge points stay on the edge so the field has no seam.
  const pts: { x: number; y: number }[][] = [];
  for (let r = 0; r <= rows; r++) {
    const row: { x: number; y: number }[] = [];
    for (let c = 0; c <= cols; c++) {
      const jx = c === 0 || c === cols ? 0 : (rand() - 0.5) * (W / cols) * 0.72;
      const jy = r === 0 || r === rows ? 0 : (rand() - 0.5) * (H / rows) * 0.72;
      row.push({ x: (c / cols) * W + jx, y: (r / rows) * H + jy });
    }
    pts.push(row);
  }

  const lx = light[0] * W;
  const ly = light[1] * H;
  const maxD = Math.hypot(W, H);

  type Facet = { d: string; fill: string; o: number; edge: number };
  const facets: Facet[] = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const a = pts[r][c];
      const b = pts[r][c + 1];
      const d = pts[r + 1][c + 1];
      const e = pts[r + 1][c];
      // Alternate the split so the facets never line up into stripes.
      const flip = (r + c) % 2 === 0;
      const tris = flip
        ? [
            [a, b, d],
            [a, d, e],
          ]
        : [
            [a, b, e],
            [b, d, e],
          ];

      for (const t of tris) {
        const cx = (t[0].x + t[1].x + t[2].x) / 3;
        const cy = (t[0].y + t[1].y + t[2].y) / 3;
        // One light: the nearer the facet, the higher up the violet ramp.
        const dist = Math.hypot(cx - lx, cy - ly) / maxD;
        const lit = Math.max(0, Math.min(1, 1 - dist * 1.75));
        const idx = Math.min(
          RAMP.length - 1,
          Math.max(0, Math.round(lit * (RAMP.length - 1) + (rand() - 0.5) * 1.1)),
        );
        facets.push({
          d: `M${t[0].x.toFixed(1)} ${t[0].y.toFixed(1)}L${t[1].x.toFixed(1)} ${t[1].y.toFixed(1)}L${t[2].x.toFixed(1)} ${t[2].y.toFixed(1)}Z`,
          fill: RAMP[idx],
          o: 0.28 + lit * 0.72,
          // Seams nearer the light are brighter, so the field reads as one
          // faceted surface rather than a flat mosaic.
          edge: 0.1 + lit * 0.55,
        });
      }
    }
  }

  return (
    <svg
      className={className}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
      style={{ ["--facet-o" as string]: String(opacity) }}
    >
      <defs>
        {/* The field fades out at its edges so it never ends on a hard line. */}
        <radialGradient id={`${id}-fade`} cx="50%" cy="46%" r="62%">
          <stop offset="0%" stopColor="#fff" stopOpacity="1" />
          <stop offset="58%" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask id={`${id}-mask`}>
          <rect width={W} height={H} fill={`url(#${id}-fade)`} />
        </mask>
      </defs>

      <g mask={`url(#${id}-mask)`}>
        {facets.map((f, i) => (
          <path
            key={i}
            d={f.d}
            fill={f.fill}
            fillOpacity={f.o}
            stroke="#d5bdfb"
            strokeOpacity={f.edge}
            strokeWidth={0.8}
            strokeLinejoin="round"
          />
        ))}
      </g>
    </svg>
  );
}
