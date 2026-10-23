import { FACES, OUTLINE, VIEWBOX, d } from "./markGeometry";

/**
 * The mark, part-built.
 *
 * `done` is how many of the ten faces have been laid. The rest are drawn as
 * faint outlines, so the finished shape is always visible and you can see
 * what the stage is working toward.
 */
export default function MarkStep({
  done,
  className,
}: {
  done: number;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox={VIEWBOX}
      aria-hidden="true"
      focusable="false"
      /* The unbuilt outline takes the surrounding ink, so the same component
         works on the dark ground and on the light band. */
      color="currentColor"
    >
      {/* Where the mark is going. */}
      <path
        d={d(OUTLINE)}
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.22"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {FACES.map((f, i) =>
        i < done ? (
          <path
            key={i}
            className="mark__face"
            d={d(f.p)}
            fill={f.fill}
            stroke="#0a0620"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        ) : null,
      )}
    </svg>
  );
}
