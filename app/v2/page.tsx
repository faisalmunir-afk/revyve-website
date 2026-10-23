import Nav from "./components/Nav";
import Hero from "./components/Hero";
import LogoStrip from "./components/LogoStrip";
import HundredDays from "./components/HundredDays";
import RevyveAI from "./components/RevyveAI";
import Routes from "./components/Routes";
import Questions from "./components/Questions";
import SiteFooter from "./components/SiteFooter";

/**
 * Revyve — V2.
 *
 * Built section by section. Navigation and hero first.
 *
 * Idea: "The Backbone". Revyve's own words are "the platform under every
 * company we own", so the page shows a load-bearing structure: a vertical
 * column of violet light built from the same low-poly chevron as the mark.
 * Each facet is a confirmed line. The light is structural, never decorative.
 *
 * All copy comes from app/content/home.ts, verbatim.
 */
export default function V2Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <LogoStrip />
        <HundredDays />
        <RevyveAI />
        <Routes />
        <Questions />
      </main>
      <SiteFooter />
    </>
  );
}
