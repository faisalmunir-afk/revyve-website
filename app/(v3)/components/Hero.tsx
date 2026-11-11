import Link from "next/link";
import { HOME } from "../../content/home";
import HeroField from "./HeroField";
import HeroFx from "./HeroFx";

/**
 * The hero.
 *
 * One centred column: the claim, the two paragraphs under it and the line
 * set in bold, then the two actions.
 * Nothing else. The light field behind it is the only picture, so the
 * sentence is what the first screen is about.
 *
 * Every string comes from app/content/home.ts, verbatim.
 */
export default function Hero() {
  const { headline, lede, more, tagline, primary, secondary } = HOME.hero;

  return (
    <section className="hero">
      {/* The living field. If it never mounts — no script, or reduced
          motion — the sentence sits on the dark ground and the veil. */}
      <HeroField className="hero__field" />
      <div className="hero__veil" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__say">
          <h1 className="hero__title">{headline}</h1>
          <p className="hero__lede">{lede}</p>
          <p className="hero__lede">{more}</p>
          <p className="hero__tagline">{tagline}</p>

          <div className="hero__actions">
            <Link href={primary.href} className="hero__go">
              {primary.label}
            </Link>
            <Link href={secondary.href} className="hero__alt">
              {secondary.label}
            </Link>
          </div>
        </div>
      </div>

      {/* Development only: previews text effects on the heading (?fx). */}
      <HeroFx />
    </section>
  );
}
