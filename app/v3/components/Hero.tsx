import Link from "next/link";
import { HOME } from "../../content/home";
import HeroField from "./HeroField";

/**
 * The hero.
 *
 * One centred column: the claim, the paragraph under it, the two actions.
 * Nothing else. The light field behind it is the only picture, so the
 * sentence is what the first screen is about.
 *
 * Every string comes from app/content/home.ts, verbatim.
 */
export default function Hero() {
  const { headline, lede, primary, secondary, tertiary } = HOME.hero;

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

          <div className="hero__actions">
            <Link href={primary.href} className="hero__go">
              {primary.label}
            </Link>
            <Link href={secondary.href} className="hero__alt">
              {secondary.label}
            </Link>
          </div>

          <p className="hero__more">
            <Link href={tertiary.href}>{tertiary.label}</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
