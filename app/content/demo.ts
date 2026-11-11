/**
 * Revyve — the product demo, transcribed verbatim from the dialog on
 * revyveholdings.com (added by the client in November 2026). The video and
 * its poster are the client's own, self-hosted in public/video/.
 *
 * The disclaimers travel with the video everywhere it is shown.
 */

import type { Linked } from "./about";

export const DEMO = {
  /** The button that opens it, and the line under the button. */
  open: "Watch the product demo",
  note: "Recorded on synthetic data. About one minute, with sound.",

  title: "Revyve AI, working one aged claim.",
  description:
    "An aged claim moves from the work queue through the agent's read of the payer response, the rules that route it, the biller's review, and the recorded outcome.",
  video: {
    src: "/video/product-demo.mp4",
    poster: "/video/product-demo-poster.jpg",
    width: 1440,
    height: 900,
    label: "Recorded demo of Revyve AI working one aged claim",
    fallback: "Your browser cannot play this video.",
    download: "Download the product demo (MP4)",
  },
  disclaimers: {
    heading: "Please note",
    items: [
      { text: "Recorded on synthetic data. No real patient or practice records appear, and nothing shown was sent to a payer." },
      {
        text: "The demo shows one supervised workflow during its initial deployment period. It does not represent automation or cost reduction across the entire billing operation.",
      },
      {
        text: "Billers review exceptions and remain responsible for consequential decisions. The agent does not submit claims or contact payers on its own.",
      },
      {
        text: "This is a product demonstration for prospective investors, not an offer of securities or a solicitation of investment. For investment inquiries, contact us.",
        links: [{ phrase: "contact us", href: "/contact/" }] as Linked[],
      },
    ] as { text: string; links?: Linked[] }[],
  },
  close: "Close",
} as const;
