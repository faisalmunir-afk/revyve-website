import { G, Mark } from "./aiDiagrams";

/**
 * Four flat drawings for the first hundred days, in the same hand as the
 * Revyve AI diagrams: thin strokes, the brand's violets, ice for what is
 * active, teal for what is live. Each is made from its own sentence.
 *
 *   KeepWhatWorks    the systems already there, unmoved; a baseline is
 *                    written beneath them and each is ticked
 *   MapTheWork       one route traced desk to desk, each stop landing as
 *                    the line reaches it, the waits ringed
 *   ProveOneThing    steps run through one review and are stamped on the
 *                    far side; one does not clear, and stops
 *   MakeItRepeatable the package, and a copy of it carried to the next
 *                    slot: the next business starts from it
 *
 * The glyphs are the ones the Revyve AI drawings use, so the two sections
 * share one vocabulary. The small labels are words lifted from the
 * stage's own sentence — systems, baseline, handoff, wait, review, stops,
 * package — never new copy.
 *
 * Every stroke that draws itself carries `pathLength="1"`. The data
 * attributes are the contract with the stylesheet: data-draw strokes on,
 * data-pop arrives, data-stay simply appears. Unarmed, all of it renders
 * finished.
 */

const INK = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const C = {
  violet: "#6420d4",
  lilac: "#b689f8",
  ice: "#dce6ff",
  signal: "#6fe3d6",
};

const beat = (ms: number) => ({ ["--d" as string]: `${ms}ms` });

function Block({ x, y, w, h, lit }: { x: number; y: number; w: number; h: number; lit?: boolean }) {
  return (
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx="9"
      fill={lit ? "#3d1b8f" : "#1b0f45"}
      stroke={C.lilac}
      strokeOpacity={lit ? 0.6 : 0.26}
      strokeWidth="1.3"
    />
  );
}

/** A word from the sentence, set small beside the thing it names. */
function Label({ x, y, children, anchor = "middle", live }: { x: number; y: number; children: string; anchor?: "start" | "middle" | "end"; live?: boolean }) {
  return (
    <text className="sd__label" x={x} y={y} textAnchor={anchor} fill={live ? C.signal : C.ice} fillOpacity={live ? 0.9 : 0.6}>
      {children}
    </text>
  );
}

/* ---------------------------------------------------------------------- */

const SYSTEMS: { x: number; y: number; w: number; h: number; g: keyof typeof G }[] = [
  { x: 24, y: 70, w: 96, h: 64, g: "ledger" },
  { x: 140, y: 42, w: 118, h: 92, g: "calendar" },
  { x: 278, y: 86, w: 86, h: 48, g: "inbox" },
  { x: 384, y: 56, w: 96, h: 78, g: "form" },
];

export function KeepWhatWorks({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 504 220" aria-hidden="true" focusable="false">
      {/* What the business already runs. Simply there. */}
      {SYSTEMS.map((b, i) => (
        <g key={i} data-stay="" style={beat(i * 90)}>
          <Block {...b} />
          <Mark kind={b.g} cx={b.x + b.w / 2} cy={b.y + b.h / 2} size={Math.min(26, b.h * 0.42)} tone="base" />
        </g>
      ))}
      <g data-stay="" style={beat(400)}>
        <Label x={24} y={28} anchor="start">systems already there</Label>
      </g>
      {/* The baseline, written beneath. */}
      <path {...INK} data-draw="" pathLength={1} style={beat(520)} stroke={C.ice} strokeWidth="2" d="M24 170H480" />
      <g data-stay="" style={beat(900)}>
        <Label x={24} y={200} anchor="start">baseline</Label>
      </g>
      {/* Each confirmed. */}
      {SYSTEMS.map((b, i) => {
        const cx = b.x + b.w / 2;
        return (
          <g key={`t${i}`} data-pop="" style={beat(1200 + i * 180)}>
            <circle cx={cx} cy={170} r="9" fill="#07041a" stroke={C.signal} strokeWidth="1.4" />
            <path {...INK} stroke={C.signal} strokeWidth="1.8" d={`M${cx - 4} 170l2.8 2.8 5.4-5.6`} />
          </g>
        );
      })}
    </svg>
  );
}

/* ---------------------------------------------------------------------- */

const STOPS: { x: number; y: number; g: keyof typeof G; label?: string; wait?: boolean }[] = [
  { x: 40, y: 160, g: "inbox", label: "start" },
  { x: 130, y: 72, g: "form", label: "handoff" },
  { x: 236, y: 128, g: "clock", label: "wait", wait: true },
  { x: 332, y: 56, g: "checklist", label: "handoff" },
  { x: 462, y: 110, g: "folder", label: "finish", wait: true },
];

export function MapTheWork({ className }: { className?: string }) {
  const d = "M" + STOPS.map(({ x, y }) => `${x} ${y}`).join(" L");
  return (
    <svg className={className} viewBox="0 0 504 220" aria-hidden="true" focusable="false">
      {/* The systems the route passes. */}
      {STOPS.map(({ x, y, g }, i) => (
        <g key={`b${i}`} data-stay="" style={beat(i * 80)}>
          <Block x={x - 26} y={y - 40} w={52} h={36} />
          <Mark kind={g} cx={x} cy={y - 22} size={18} tone="dim" />
        </g>
      ))}
      {/* One route, start to finish. */}
      <path {...INK} data-draw="" pathLength={1} style={beat(300)} stroke={C.ice} strokeWidth="2" d={d} />
      {/* Each stop, as the line reaches it. */}
      {STOPS.map(({ x, y, label, wait }, i) => (
        <g key={`s${i}`} data-pop="" style={beat(300 + i * 420)}>
          <circle cx={x} cy={y} r="5" fill={C.ice} />
          {label && (
            <Label x={x} y={y + 24} live={wait}>
              {label}
            </Label>
          )}
        </g>
      ))}
      {/* The waits. */}
      {STOPS.filter((s) => s.wait).map(({ x, y }, i) => (
        <circle key={`w${i}`} data-pop="" data-ring="" style={beat(1300 + i * 840)} cx={x} cy={y} r="13" fill="none" stroke={C.signal} strokeWidth="1.6" />
      ))}
    </svg>
  );
}

/* ---------------------------------------------------------------------- */

export function ProveOneThing({ className }: { className?: string }) {
  const Y = 118;
  const GATE = 252;
  return (
    <svg className={className} viewBox="0 0 504 220" aria-hidden="true" focusable="false">
      {/* The lane, along the baseline we wrote down. */}
      <path {...INK} data-draw="" pathLength={1} style={beat(0)} stroke={C.ice} strokeOpacity="0.5" strokeWidth="2" d={`M24 ${Y + 26}H480`} />
      <g data-stay="" style={beat(300)}>
        <Label x={480} y={Y + 48} anchor="end">baseline</Label>
      </g>

      {/* The review: a biller, and the line every result passes. */}
      <path {...INK} data-draw="" pathLength={1} style={beat(380)} stroke={C.signal} strokeWidth="2" d={`M${GATE} ${Y - 40}V${Y + 26}`} />
      <g data-pop="" style={beat(650)}>
        <circle cx={GATE} cy={Y - 64} r="7" fill="#1b0f45" stroke={C.ice} strokeWidth="1.4" />
        <path {...INK} stroke={C.ice} strokeWidth="1.4" d={`M${GATE - 12} ${Y - 44}c0-6.6 5.4-12 12-12s12 5.4 12 12`} />
        <Label x={GATE} y={Y - 80} live>review</Label>
      </g>

      {/* The steps that cleared, stamped. */}
      {[0, 1, 2].map((i) => {
        const x = GATE + 44 + i * 66;
        return (
          <g key={`c${i}`} data-pop="" style={beat(900 + i * 220)}>
            <Block x={x} y={Y - 16} w={44} h={34} lit />
            <path {...INK} stroke={C.signal} strokeWidth="1.8" d={`M${x + 14} ${Y + 2}l4 4 9-9`} />
          </g>
        );
      })}

      {/* The one that did not, stopped; the rest queued behind it. */}
      <g data-pop="" style={beat(1700)}>
        <Block x={GATE - 84} y={Y - 16} w={44} h={34} />
        <path {...INK} stroke={C.lilac} strokeWidth="2" d={`M${GATE - 30} ${Y - 18}V${Y + 20}`} />
        <Label x={GATE - 62} y={Y - 30}>stops</Label>
      </g>
      {[0, 1].map((i) => (
        <g key={`q${i}`} data-stay="" style={beat(1900 + i * 140)}>
          <Block x={GATE - 150 - i * 66} y={Y - 16} w={44} h={34} />
          <Mark kind="doc" cx={GATE - 128 - i * 66} cy={Y + 1} size={16} tone="dim" />
        </g>
      ))}
      <g data-stay="" style={beat(2200)}>
        <Label x={GATE - 128} y={Y + 48}>repetitive steps</Label>
      </g>
    </svg>
  );
}

/* ---------------------------------------------------------------------- */

function Package({ x, y, lit }: { x: number; y: number; lit?: boolean }) {
  const o = lit ? 0.9 : 0.5;
  return (
    <g>
      <Block x={x} y={y} w={112} h={84} lit={lit} />
      {/* The data, the agents, the rules, the screens, the training: five
          lines in it. */}
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={x + 16} y={y + 16 + i * 12} width={i % 2 ? 44 : 72} height="4" rx="2" fill={C.ice} fillOpacity={o * 0.7} />
      ))}
      <Mark kind="folder" cx={x + 94} cy={y + 20} size={16} tone="lit" />
    </g>
  );
}

export function MakeItRepeatable({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 504 220" aria-hidden="true" focusable="false">
      {/* What worked: the package. */}
      <g data-stay="" style={beat(0)}>
        <Package x={48} y={56} lit />
        <Label x={104} y={170}>the package</Label>
      </g>
      {/* Carried across. */}
      <path {...INK} data-draw="" pathLength={1} style={beat(500)} stroke={C.ice} strokeWidth="2" d="M176 98H318" />
      <path {...INK} data-pop="" style={beat(1100)} stroke={C.ice} strokeWidth="2" d="M306 88l12 10-12 10" />
      {/* Where it would have started from. */}
      <rect data-stay="" style={beat(200)} x={344} y={56} width="112" height="84" rx="9" fill="none" stroke={C.lilac} strokeOpacity="0.3" strokeWidth="1.3" strokeDasharray="4 5" />
      {/* The next business starts from it, not from zero. */}
      <g data-pop="" style={beat(1300)}>
        <Package x={344} y={56} lit />
        <Label x={400} y={170}>the next business</Label>
      </g>
    </svg>
  );
}
