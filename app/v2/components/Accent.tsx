import type { ReactNode } from "react";

/**
 * Highlight a phrase inside a verbatim string without retyping it.
 *
 * The design wants one word of a heading to carry the brand gradient, the
 * way the reference does. Splitting the sentence by hand in JSX is how copy
 * drifts, so the full string is passed in and the phrase is located in it.
 * If the phrase is not found the sentence still renders, unstyled.
 */
export default function Accent({
  text,
  phrase,
}: {
  text: string;
  phrase: string;
}): ReactNode {
  const i = text.indexOf(phrase);
  if (i === -1) return text;
  return (
    <>
      {text.slice(0, i)}
      <span className="grad">{phrase}</span>
      {text.slice(i + phrase.length)}
    </>
  );
}
