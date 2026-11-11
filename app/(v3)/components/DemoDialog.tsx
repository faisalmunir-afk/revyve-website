"use client";

import { useRef } from "react";
import { DEMO } from "../../content/demo";
import Linked from "./Linked";

/**
 * The product demo: a button, the line under it, and the video in a native
 * <dialog>, with the client's four disclaimers always beside it.
 *
 * A native dialog gives focus trapping, Escape to close and an inert page
 * behind it for free. Clicking the dimmed backdrop closes it too, and the
 * video stops whenever the dialog closes. The video only loads its
 * metadata until someone presses play.
 */
export default function DemoDialog({ className }: { className?: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  const open = () => dialog.current?.showModal();
  const close = () => dialog.current?.close();

  return (
    <div className={["demo", className].filter(Boolean).join(" ")}>
      <button type="button" className="hero__alt demo__open" onClick={open}>
        <svg viewBox="0 0 20 20" className="demo__play" aria-hidden="true">
          <circle cx="10" cy="10" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <path d="M8.2 6.6v6.8l5.4-3.4z" fill="currentColor" />
        </svg>
        {DEMO.open}
      </button>
      <p className="demo__note">{DEMO.note}</p>

      <dialog
        ref={dialog}
        className="demo__dialog"
        aria-labelledby="demo-title"
        onClose={() => video.current?.pause()}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <div className="demo__panel">
          <button type="button" className="demo__x" onClick={close} aria-label={DEMO.close}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <h2 className="demo__title" id="demo-title">
            {DEMO.title}
          </h2>
          <p className="demo__desc">{DEMO.description}</p>
          <video
            ref={video}
            className="demo__video"
            controls
            playsInline
            preload="metadata"
            poster={DEMO.video.poster}
            width={DEMO.video.width}
            height={DEMO.video.height}
            aria-label={DEMO.video.label}
          >
            <source src={DEMO.video.src} type="video/mp4" />
            {DEMO.video.fallback} <a href={DEMO.video.src}>{DEMO.video.download}</a>.
          </video>
          <div className="demo__disclaimers">
            <p className="demo__noteHead">{DEMO.disclaimers.heading}</p>
            <ul className="demo__list">
              {DEMO.disclaimers.items.map((d) => (
                <li key={d.text}>
                  <Linked text={d.text} links={d.links} className="about__link" />
                </li>
              ))}
            </ul>
          </div>
          <button type="button" className="hero__alt demo__close" onClick={close}>
            {DEMO.close}
          </button>
        </div>
      </dialog>
    </div>
  );
}
