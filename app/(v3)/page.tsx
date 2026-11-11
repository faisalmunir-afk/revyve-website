import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { Evidence, Operations, TeamBand } from "./components/HomeSections";
import RevyveAI from "./components/RevyveAI";
import Routes from "./components/Routes";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

/**
 * Revyve — V3.
 *
 * Idea: Revyve = revive. The company restarts cash flow that had stopped,
 * so the page opens on one sweep of returning light across a dark field.
 * That current is the only loud thing; the sentence beneath it is set in a
 * high-contrast serif and left to carry itself.
 *
 * In the order of the client's November 2026 home page: the claim, the
 * evidence, Revyve AI, how it is built inside operations, the team, the
 * four doors, the questions. The first hundred days left the live site, so
 * the pinned HundredDays section is retired from the page; its component
 * stays in components/ (reading the October copy in
 * content/archive/home-2026-10.ts) so it can return.
 *
 * All copy comes from app/content/, verbatim.
 */
export default function V3Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Evidence />
        <RevyveAI />
        <Operations />
        <TeamBand />
        <Routes />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
