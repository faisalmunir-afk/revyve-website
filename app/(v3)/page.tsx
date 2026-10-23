import Nav from "./components/Nav";
import HundredDays from "./components/HundredDays";
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
 * Built section by section. The hero lives inside HundredDays now: it is
 * the base layer the hundred days close over.
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
        <HundredDays />
        <RevyveAI />
        <Routes />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
