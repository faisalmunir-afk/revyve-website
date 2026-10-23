/**
 * Three drawings for Revyve AI — one per capability, each made from what
 * its own sentence says rather than from a stock icon set.
 *
 *   ThreadedSystems  "Built around your existing systems"
 *                    The software is already there, laid out as unevenly
 *                    as real software is, each block carrying the kind of
 *                    thing it holds. One lit thread finds a way through,
 *                    and the systems it is let into light up; the ones it
 *                    passes stay as they were. Nothing is replaced.
 *
 *   ModelRouting     "The right model for each task"
 *                    Tasks arrive alike and leave differently. They fan
 *                    through one selection point out to three models that
 *                    are visibly not the same model — in weight, in colour
 *                    and in what is drawn on them.
 *
 *   SharedLayer      "One shared intelligence layer"
 *                    A model, an agent, existing software and a human
 *                    reviewer standing on one substrate, with four gates
 *                    along it — routing, permissions, evidence, approvals.
 *                    Those are the words in the sentence.
 *
 * Colour is used across the brand's whole span — deep, violet, lilac, ice
 * — rather than at one mid-point, so structure, path and signal read as
 * three different things. The one colour outside the token set is a cool
 * teal for the live points, taken from the client's own render, where the
 * live nodes carry it.
 *
 * Every glyph here is drawn for this page. They stand for kinds of thing
 * — a ledger, a form, a calendar, a reviewer — never for a product, a
 * company or a partner. Revyve's copy deliberately names none, so the
 * drawings do not either.
 *
 * Every stroke that draws itself carries `pathLength="1"`, so a draw-on is
 * dasharray 1 and an offset of 1 to 0 with nothing to measure. The classes
 * and the `--i` index are the only contract with the stylesheet, which
 * runs them off the scroll position; unarmed, all of this renders finished
 * and still.
 *
 * Nothing here is data.
 */

const INK = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const C = {
  violet: "#6420d4",
  deep: "#2a0f63",
  lilac: "#b689f8",
  ice: "#dce6ff",
  /** The live colour, from the client's own render. */
  signal: "#6fe3d6",
};

const idx = (i: number) => ({ ["--i" as string]: i });

/* ---- Glyphs ---------------------------------------------------------- */
/* Each is drawn in a 24-unit box and placed by its centre. Kinds of thing
   a billing business already runs on, not names of anything. */

export const G = {
  /** A ledger: ruled rows and one column rule. */
  ledger: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 9.5h18M3 14.5h18M9.5 4v16" />
    </>
  ),
  /** A document with lines. */
  doc: (
    <>
      <path d="M6 3h8l5 5v13H6z" />
      <path d="M14 3v5h5M9 12h7M9 16h7" />
    </>
  ),
  /** A calendar. */
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  /** Bars, as a report has them. */
  bars: (
    <>
      <path d="M4 20h16" />
      <path d="M7 20v-7M12 20V8M17 20v-4" />
    </>
  ),
  /** A tray: what arrives. */
  inbox: (
    <>
      <path d="M4 13l2.4-7h11.2L20 13v5.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5z" />
      <path d="M4 13h5l1.5 2.5h3L15 13h5" />
    </>
  ),
  /** A form with fields. */
  form: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2.5" />
      <rect x="7" y="8" width="10" height="2.4" rx="1.2" />
      <rect x="7" y="13.6" width="6.5" height="2.4" rx="1.2" />
    </>
  ),
  /** A folder. */
  folder: (
    <path d="M3.5 7.5a2 2 0 0 1 2-2h4.2l2 2.3h6.8a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z" />
  ),
  /** A clock: the waits. */
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  /** Correspondence. */
  envelope: (
    <>
      <rect x="3.5" y="6" width="17" height="12" rx="2.2" />
      <path d="M3.5 8.5 12 13.5l8.5-5" />
    </>
  ),
  /** Authorisation. */
  shield: (
    <>
      <path d="M12 3.5 19 6v6.2c0 4-2.9 6.9-7 8.3-4.1-1.4-7-4.3-7-8.3V6z" />
      <path d="M9 12l2.2 2.2L15.3 10" />
    </>
  ),
  /** A list, worked through. */
  checklist: (
    <>
      <path d="M5 7.5l1.5 1.5L9 6.5M5 13l1.5 1.5L9 12M5 18.5l1.5 1.5L9 17.5" />
      <path d="M12 8h8M12 13.5h8M12 19h8" />
    </>
  ),
};

type Tone = "dim" | "base" | "lit";

/**
 * A glyph, in one of three weights. Lit ones are drawn twice — a tint of
 * the shape beneath the line — so they carry some body, not just an edge.
 */
export function Mark({
  kind,
  cx,
  cy,
  size = 24,
  tone = "base",
}: {
  kind: keyof typeof G;
  cx: number;
  cy: number;
  size?: number;
  tone?: Tone;
}) {
  const s = size / 24;
  const look = {
    dim: { stroke: C.lilac, op: 0.3, w: 1.2 },
    base: { stroke: C.lilac, op: 0.55, w: 1.45 },
    lit: { stroke: C.ice, op: 0.95, w: 1.75 },
  }[tone];
  const place = `translate(${cx - size / 2} ${cy - size / 2}) scale(${s})`;
  return (
    <>
      {tone === "lit" && (
        <g transform={place} fill={C.lilac} fillOpacity="0.18" stroke="none">
          {G[kind]}
        </g>
      )}
      <g
        transform={place}
        {...INK}
        stroke={look.stroke}
        strokeOpacity={look.op}
        strokeWidth={look.w / s}
      >
        {G[kind]}
      </g>
    </>
  );
}

/* ---------------------------------------------------------------------- */

type Block = {
  x: number;
  y: number;
  w: number;
  h: number;
  g: keyof typeof G;
  /** Lit: the thread is let in here. Dim: it passes by. */
  t: Tone;
};

/** Blocks laid out like real software: uneven, unlabelled, already there. */
const BLOCKS: Block[] = [
  { x: 18, y: 36, w: 116, h: 66, g: "ledger", t: "lit" },
  { x: 152, y: 18, w: 84, h: 52, g: "calendar", t: "dim" },
  { x: 258, y: 44, w: 126, h: 72, g: "inbox", t: "lit" },
  { x: 406, y: 28, w: 78, h: 92, g: "doc", t: "base" },
  { x: 30, y: 128, w: 92, h: 56, g: "clock", t: "dim" },
  { x: 146, y: 94, w: 136, h: 86, g: "form", t: "lit" },
  { x: 306, y: 140, w: 92, h: 60, g: "envelope", t: "base" },
  { x: 420, y: 146, w: 66, h: 98, g: "shield", t: "lit" },
  { x: 44, y: 212, w: 122, h: 58, g: "bars", t: "dim" },
  { x: 192, y: 204, w: 96, h: 66, g: "folder", t: "base" },
  { x: 316, y: 224, w: 146, h: 54, g: "checklist", t: "lit" },
];

const THREAD =
  "M-12 176C46 176 54 112 110 104S196 164 246 150 328 86 392 98s62 92 124 78";

/** Where the thread is let into a system. */
const TAPS = [
  [96, 102],
  [214, 94],
  [282, 140],
  [398, 120],
  [420, 196],
  [288, 224],
  [166, 240],
];

export function ThreadedSystems({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 504 296"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="d1-dim" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#170d3c" />
          <stop offset="100%" stopColor="#0f0828" />
        </linearGradient>
        <linearGradient id="d1-base" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#241459" />
          <stop offset="100%" stopColor="#140b36" />
        </linearGradient>
        <linearGradient id="d1-lit" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#3d1b8f" />
          <stop offset="100%" stopColor="#1e0f4d" />
        </linearGradient>
        <linearGradient id="d1-thread" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={C.violet} stopOpacity="0.1" />
          <stop offset="28%" stopColor={C.violet} />
          <stop offset="60%" stopColor={C.lilac} />
          <stop offset="86%" stopColor={C.ice} />
          <stop offset="100%" stopColor={C.signal} />
        </linearGradient>
        <filter id="d1-glow" x="-15%" y="-40%" width="130%" height="180%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
        <filter id="d1-halo" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>

      {/* What the business already runs, and the kind of thing each holds.
          The ones the thread is let into carry a halo and a brighter mark. */}
      {BLOCKS.map((b, i) => (
        <g key={i} className="dg__block" style={idx(i)}>
          {b.t === "lit" && (
            <rect
              x={b.x}
              y={b.y}
              width={b.w}
              height={b.h}
              rx="9"
              fill={C.violet}
              fillOpacity="0.34"
              filter="url(#d1-halo)"
            />
          )}
          <rect
            x={b.x}
            y={b.y}
            width={b.w}
            height={b.h}
            rx="9"
            fill={`url(#d1-${b.t})`}
            stroke={b.t === "lit" ? C.lilac : C.lilac}
            strokeOpacity={{ dim: 0.12, base: 0.22, lit: 0.55 }[b.t]}
            strokeWidth={b.t === "lit" ? 1.4 : 1.1}
          />
          <Mark
            kind={b.g}
            cx={b.x + b.w / 2}
            cy={b.y + b.h / 2}
            size={Math.min(b.t === "lit" ? 30 : 24, b.h * (b.t === "lit" ? 0.46 : 0.4))}
            tone={b.t}
          />
        </g>
      ))}

      {/* The way through. Drawn twice: once as light, once as the line. */}
      <g filter="url(#d1-glow)" opacity="0.6">
        <path
          className="dg__thread"
          pathLength={1}
          {...INK}
          stroke={C.violet}
          strokeWidth="8"
          d={THREAD}
        />
      </g>
      <path
        className="dg__thread"
        pathLength={1}
        {...INK}
        stroke="url(#d1-thread)"
        strokeWidth="2.8"
        d={THREAD}
      />

      {/* Where it is let in: the live colour, ringed. */}
      {TAPS.map(([cx, cy], i) => (
        <g key={i} className="dg__tap" style={idx(i)}>
          <circle cx={cx} cy={cy} r="8" fill={C.signal} fillOpacity="0.16" />
          <circle
            cx={cx}
            cy={cy}
            r="7.5"
            {...INK}
            stroke={C.signal}
            strokeOpacity="0.45"
            strokeWidth="1"
          />
          <circle cx={cx} cy={cy} r="3.8" fill={C.signal} />
        </g>
      ))}
    </svg>
  );
}

/* ---------------------------------------------------------------------- */

/** Five tasks in, three models out: the routes are what differ. */
const ROUTES = [
  { y: 52, to: 0 },
  { y: 98, to: 2 },
  { y: 144, to: 0 },
  { y: 190, to: 1 },
  { y: 236, to: 2 },
];

/** Three models of visibly different weight, each its own kind. */
const MODELS = [
  { x: 374, y: 28, s: 104 },
  { x: 390, y: 158, s: 72 },
  { x: 384, y: 248, s: 54 },
];

/** What makes them different models: depth, speed, lightness. */
function ModelMark({ i, cx, cy, s }: { i: number; cx: number; cy: number; s: number }) {
  if (i === 0) {
    /* Nested arcs round a live core: the deep one, in ice on violet. */
    return (
      <g {...INK} stroke={C.ice} strokeOpacity="0.9" strokeWidth={s * 0.03}>
        <circle cx={cx} cy={cy} r={s * 0.075} fill={C.signal} stroke="none" />
        <path d={`M${cx - s * 0.2} ${cy + s * 0.12}a${s * 0.235} ${s * 0.235} 0 1 1 ${s * 0.4} 0`} />
        <path
          strokeOpacity="0.5"
          d={`M${cx - s * 0.32} ${cy + s * 0.19}a${s * 0.375} ${s * 0.375} 0 1 1 ${s * 0.64} 0`}
        />
      </g>
    );
  }
  if (i === 1) {
    /* A double chevron: the fast one, in lilac on an open frame. */
    return (
      <g {...INK} stroke={C.lilac} strokeOpacity="0.95" strokeWidth={s * 0.045}>
        <path d={`M${cx - s * 0.26} ${cy - s * 0.2}l${s * 0.2} ${s * 0.2}-${s * 0.2} ${s * 0.2}`} />
        <path
          strokeOpacity="0.55"
          d={`M${cx - s * 0.02} ${cy - s * 0.2}l${s * 0.2} ${s * 0.2}-${s * 0.2} ${s * 0.2}`}
        />
      </g>
    );
  }
  /* Three points: the light one, in the live colour on glass. */
  return (
    <g fill={C.signal}>
      <circle cx={cx - s * 0.2} cy={cy} r={s * 0.062} fillOpacity="0.55" />
      <circle cx={cx} cy={cy} r={s * 0.062} />
      <circle cx={cx + s * 0.2} cy={cy} r={s * 0.062} fillOpacity="0.55" />
    </g>
  );
}

export function ModelRouting({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 504 320"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="d2-deep" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" stopColor="#7a35ea" />
          <stop offset="100%" stopColor="#3d1690" />
        </linearGradient>
        <linearGradient id="d2-glass" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" stopColor={C.lilac} stopOpacity="0.2" />
          <stop offset="100%" stopColor={C.lilac} stopOpacity="0.06" />
        </linearGradient>
        <filter id="d2-halo" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>

      {/* Tasks, arriving alike. */}
      {ROUTES.map((r, i) => (
        <g key={`t${i}`} className="dg__task" style={idx(i)}>
          <rect
            x="16"
            y={r.y}
            width="68"
            height="15"
            rx="7.5"
            fill="#241459"
            stroke={C.lilac}
            strokeOpacity="0.3"
            strokeWidth="1.1"
          />
          {/* Each is a job: a short line of work in it. */}
          <path
            {...INK}
            stroke={C.lilac}
            strokeOpacity="0.45"
            strokeWidth="1.3"
            d={`M26 ${r.y + 7.5}h22M54 ${r.y + 7.5}h8`}
          />
        </g>
      ))}

      {/* The selection point, in the live colour. */}
      <line
        className="dg__gate"
        pathLength={1}
        {...INK}
        stroke={C.signal}
        strokeOpacity="0.55"
        strokeWidth="1.6"
        x1="206"
        y1="26"
        x2="206"
        y2="294"
      />

      {/* Leaving differently. The routes to the deep model carry more light. */}
      {ROUTES.map((r, i) => {
        const m = MODELS[r.to];
        const y2 = m.y + m.s / 2;
        const deep = r.to === 0;
        return (
          <path
            key={`r${i}`}
            className="dg__route"
            style={idx(i)}
            pathLength={1}
            {...INK}
            stroke={deep ? C.ice : C.lilac}
            strokeOpacity={deep ? 0.72 : 0.4}
            strokeWidth={deep ? 1.9 : 1.4}
            d={`M88 ${r.y + 7.5}C150 ${r.y + 7.5} 160 ${y2} 206 ${y2}S ${m.x - 54} ${y2} ${m.x} ${y2}`}
          />
        );
      })}

      {/* Three models, three treatments: solid, open, glass. */}
      {MODELS.map((m, i) => (
        <g key={`m${i}`} className="dg__model" style={idx(i)}>
          {i === 0 && (
            <rect
              x={m.x}
              y={m.y}
              width={m.s}
              height={m.s}
              rx={m.s * 0.26}
              fill={C.violet}
              fillOpacity="0.5"
              filter="url(#d2-halo)"
            />
          )}
          <rect
            x={m.x}
            y={m.y}
            width={m.s}
            height={m.s}
            rx={m.s * 0.26}
            fill={i === 0 ? "url(#d2-deep)" : i === 1 ? "#0f0829" : "url(#d2-glass)"}
            stroke={i === 0 ? C.ice : C.lilac}
            strokeOpacity={i === 0 ? 0.38 : i === 1 ? 0.7 : 0.4}
            strokeWidth={i === 1 ? 1.7 : 1.3}
          />
          <ModelMark i={i} cx={m.x + m.s / 2} cy={m.y + m.s / 2} s={m.s} />
        </g>
      ))}
    </svg>
  );
}

/* ---------------------------------------------------------------------- */

/** The four the sentence names, standing on the layer. */
const STANDING = [180, 455, 730, 1010];
/** The four gates the sentence names, along it, in its order. */
const GATES: { x: number; g: "route" | "key" | "clip" | "check" }[] = [
  { x: 318, g: "route" },
  { x: 592, g: "key" },
  { x: 868, g: "clip" },
  { x: 1120, g: "check" },
];

/** Routing, permissions, evidence, approvals — each drawn small, at the gate. */
function GateMark({ g, x, y }: { g: (typeof GATES)[number]["g"]; x: number; y: number }) {
  const ink = { ...INK, stroke: C.ice, strokeOpacity: 0.78, strokeWidth: 1.4 };
  switch (g) {
    case "route":
      return (
        <g {...ink}>
          <path d={`M${x} ${y + 7}v-5M${x} ${y - 2}l-5-5M${x} ${y - 2}l5-5`} />
        </g>
      );
    case "key":
      return (
        <g {...ink}>
          <circle cx={x - 3} cy={y - 2} r="3.2" />
          <path d={`M${x - 0.6} ${y + 0.4}l6 6M${x + 3} ${y + 4}l2-2`} />
        </g>
      );
    case "clip":
      return (
        <g {...ink}>
          <path d={`M${x + 4} ${y - 4}l-7 7a3 3 0 0 0 4.2 4.2l7.6-7.6a5 5 0 0 0-7-7l-7.6 7.6`} />
        </g>
      );
    default:
      return (
        <g {...ink}>
          <path d={`M${x - 5} ${y}l3.4 3.4L${x + 5} ${y - 4}`} />
        </g>
      );
  }
}

export function SharedLayer({ className }: { className?: string }) {
  const BAR = 168;
  const TOP = 92; /* where the stems start; the figures stand above */
  return (
    <svg
      className={className}
      viewBox="0 0 1200 230"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="d3-bar" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={C.violet} stopOpacity="0" />
          <stop offset="12%" stopColor={C.violet} stopOpacity="0.9" />
          <stop offset="44%" stopColor={C.lilac} />
          <stop offset="70%" stopColor={C.ice} />
          <stop offset="92%" stopColor={C.signal} />
          <stop offset="100%" stopColor={C.signal} stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="d3-stem"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1={TOP}
          x2="0"
          y2={BAR}
        >
          <stop offset="0%" stopColor={C.lilac} stopOpacity="0.14" />
          <stop offset="100%" stopColor={C.ice} stopOpacity="0.75" />
        </linearGradient>
        <linearGradient id="d3-deep" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" stopColor="#7a35ea" />
          <stop offset="100%" stopColor="#3d1690" />
        </linearGradient>
        <filter id="d3-glow" x="-10%" y="-400%" width="120%" height="900%">
          <feGaussianBlur stdDeviation="16" />
        </filter>
        <filter id="d3-halo" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>

      {/* The light the layer throws. */}
      <g className="dg__bar" filter="url(#d3-glow)" opacity="0.6">
        <rect x="40" y={BAR - 6} width="1120" height="12" fill={C.violet} />
      </g>

      {STANDING.map((x, i) => (
        <g key={i} className="dg__stand" style={idx(i)}>
          <line
            {...INK}
            stroke="url(#d3-stem)"
            strokeWidth="1.6"
            x1={x}
            y1={TOP}
            x2={x}
            y2={BAR}
          />

          {/* A model: a solid violet node, ringed, with a live core. */}
          {i === 0 && (
            <>
              <circle cx={x} cy="56" r="26" fill={C.violet} fillOpacity="0.45" filter="url(#d3-halo)" />
              <circle
                {...INK}
                cx={x}
                cy="56"
                r="22"
                fill="url(#d3-deep)"
                stroke={C.ice}
                strokeOpacity="0.4"
                strokeWidth="1.4"
              />
              <circle
                {...INK}
                cx={x}
                cy="56"
                r="34"
                stroke={C.lilac}
                strokeOpacity="0.3"
                strokeWidth="1.2"
              />
              <circle cx={x} cy="56" r="5.5" fill={C.signal} />
            </>
          )}

          {/* An agent: an open lilac frame with a face and an antenna, so it
              reads as a thing that looks and acts. */}
          {i === 1 && (
            <>
              <rect
                {...INK}
                x={x - 24}
                y="34"
                width="48"
                height="48"
                rx="14"
                fill="#0f0829"
                stroke={C.lilac}
                strokeOpacity="0.75"
                strokeWidth="1.7"
              />
              <path
                {...INK}
                stroke={C.lilac}
                strokeOpacity="0.85"
                strokeWidth="1.7"
                d={`M${x} 34v-9M${x - 5} 25h10`}
              />
              <circle cx={x - 8} cy="55" r="3.2" fill={C.signal} />
              <circle cx={x + 8} cy="55" r="3.2" fill={C.signal} />
              <path
                {...INK}
                stroke={C.lilac}
                strokeOpacity="0.85"
                strokeWidth="1.7"
                d={`M${x - 8} 68h16`}
              />
            </>
          )}

          {/* Existing software: a stack that was already there, the top of
              it in ice because that is the part the work touches. */}
          {i === 2 && (
            <>
              <rect
                {...INK}
                x={x - 32}
                y="28"
                width="56"
                height="17"
                rx="5"
                fill="#1c1048"
                stroke={C.ice}
                strokeOpacity="0.6"
                strokeWidth="1.3"
              />
              <rect
                {...INK}
                x={x - 27}
                y="49"
                width="56"
                height="17"
                rx="5"
                fill="#241459"
                stroke={C.lilac}
                strokeOpacity="0.46"
                strokeWidth="1.3"
              />
              <rect
                {...INK}
                x={x - 22}
                y="70"
                width="56"
                height="17"
                rx="5"
                fill="#2d1868"
                stroke={C.lilac}
                strokeOpacity="0.3"
                strokeWidth="1.3"
              />
            </>
          )}

          {/* A human reviewer, in ice, with body. */}
          {i === 3 && (
            <>
              <circle cx={x} cy="44" r="14" fill={C.ice} fillOpacity="0.14" />
              <circle
                {...INK}
                cx={x}
                cy="44"
                r="14"
                stroke={C.ice}
                strokeOpacity="0.8"
                strokeWidth="1.7"
              />
              <path
                d={`M${x - 27} 92c0-14.9 12.1-27 27-27s27 12.1 27 27`}
                fill={C.ice}
                fillOpacity="0.1"
              />
              <path
                {...INK}
                stroke={C.ice}
                strokeOpacity="0.8"
                strokeWidth="1.7"
                d={`M${x - 27} 92c0-14.9 12.1-27 27-27s27 12.1 27 27`}
              />
            </>
          )}
        </g>
      ))}

      {/* Routing, permissions, evidence, approvals: live points on the layer. */}
      {GATES.map(({ x, g }, i) => (
        <g key={`g${i}`} className="dg__gateMark" style={idx(i)}>
          <line
            {...INK}
            stroke={C.ice}
            strokeOpacity="0.5"
            strokeWidth="1.4"
            x1={x}
            y1={BAR - 12}
            x2={x}
            y2={BAR + 12}
          />
          <circle cx={x} cy={BAR} r="7" fill={C.signal} fillOpacity="0.18" />
          <circle cx={x} cy={BAR} r="3.6" fill={C.signal} />
          <GateMark g={g} x={x} y={BAR + 36} />
        </g>
      ))}

      {/* The layer itself. */}
      <rect
        className="dg__bar"
        x="40"
        y={BAR - 1.75}
        width="1120"
        height="3.5"
        rx="1.75"
        fill="url(#d3-bar)"
      />
    </svg>
  );
}
