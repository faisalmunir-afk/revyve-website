/**
 * The mark itself, enormous and faceted, sitting far back in the dark.
 *
 * Same chevron as the logo, cut into four facets and graded from deep violet
 * at the outside to lilac at the inner angle, so it reads as one piece of
 * cut stone catching the page's light. Decorative, aria-hidden.
 */
export default function GhostMark({
  id,
  className,
  opacity = 0.5,
}: {
  id: string;
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 520"
      aria-hidden="true"
      focusable="false"
      style={{ opacity }}
    >
      <defs>
        <linearGradient id={`${id}-a`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#b689f8" />
          <stop offset="100%" stopColor="#5118b8" />
        </linearGradient>
        <linearGradient id={`${id}-b`} x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7028e8" />
          <stop offset="100%" stopColor="#241056" />
        </linearGradient>
        <linearGradient id={`${id}-c`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#9a5cf0" />
          <stop offset="100%" stopColor="#3a1284" />
        </linearGradient>
        <linearGradient id={`${id}-d`} x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#6420d4" />
          <stop offset="100%" stopColor="#1a0b3e" />
        </linearGradient>
      </defs>

      {/* The short arm of the check, split into two facets. */}
      <path d="M40 232 L196 388 L150 434 L4 288 Z" fill={`url(#${id}-a)`} />
      <path d="M196 388 L150 434 L96 380 Z" fill={`url(#${id}-b)`} />

      {/* The long arm, split into two. */}
      <path d="M560 60 L196 424 L150 378 L514 14 Z" fill={`url(#${id}-c)`} />
      <path d="M560 60 L514 14 L372 156 Z" fill={`url(#${id}-d)`} />
    </svg>
  );
}
