"use client";

import Link from "next/link";
import { HOME } from "../../content/home";
import Backbone from "./Backbone";
import Accent from "./Accent";
import FacetField from "./FacetField";
import GhostMark from "./GhostMark";

/**
 * The hero.
 *
 * Left: the claim, in Revyve's own words, unchanged.
 * Right: the Backbone, the structure the claim is about.
 *
 * Every string here comes from app/content/home.ts. Nothing is written here.
 */
export default function Hero() {
  const { headline, lede, primary, secondary, tertiary } = HOME.hero;

  return (
    <section className="hero">
      {/* The horizon: a single soft band of violet at the base of the screen,
          so the column looks like it is standing on something. */}
      <FacetField
        id="hero"
        className="facets"
        opacity={0.2}
        cols={11}
        rows={8}
        light={[0.74, 0.28]}
      />
      <GhostMark id="gh" className="ghost ghost--hero" opacity={0.09} />
      <div className="mesh" aria-hidden="true" />
      <div className="hero__horizon" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__say">
          <p className="hero__kicker">
            <span className="hero__dot" aria-hidden="true" />
            An AI-native holding company for healthcare services
          </p>

          <h1 className="hero__headline">
            <Accent text={headline} phrase="run better." />
          </h1>

          <p className="hero__lede">{lede}</p>

          <div className="hero__actions">
            <Link href={primary.href} className="hero__primary">
              {primary.label}
              <svg
                viewBox="0 0 16 16"
                width="15"
                height="15"
                aria-hidden="true"
                className="hero__arrow"
              >
                <path
                  d="M3 8h9.5M8.5 4l4 4-4 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <Link href={secondary.href} className="hero__secondary">
              {secondary.label}
            </Link>
          </div>

          <p className="hero__aside">
            <Link href={tertiary.href} className="hero__asideLink">
              {tertiary.label}
            </Link>
          </p>
        </div>

        <div className="hero__stage">
          <Backbone />
        </div>
      </div>
    </section>
  );
}
