"use client";

import { useState } from "react";

/**
 * The address, set large, with the original's copy-to-clipboard button.
 * The button keeps its one word; a tick shows for a moment once copied,
 * and the change is announced to assistive tech.
 */
export default function CopyEmail({
  email,
  label,
  className,
}: {
  email: string;
  label: string;
  className?: string;
}) {
  const [done, setDone] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setDone(true);
      window.setTimeout(() => setDone(false), 1800);
    } catch {
      /* No clipboard (insecure context, or refused): the link still works. */
    }
  };

  return (
    <span className={["cp", className].filter(Boolean).join(" ")}>
      <a className="cp__email" href={`mailto:${email}`}>
        {email}
      </a>
      <button
        type="button"
        className={done ? "cp__copy is-done" : "cp__copy"}
        onClick={copy}
        aria-live="polite"
      >
        <svg viewBox="0 0 16 16" aria-hidden="true" className="cp__ico">
          {done ? (
            <path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          ) : (
            <>
              <rect x="5" y="5" width="8" height="8" rx="1.6" fill="none" stroke="currentColor" strokeWidth="1.4" />
              <path d="M3 10.5V4.6C3 3.7 3.7 3 4.6 3h5.9" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </>
          )}
        </svg>
        {label}
      </button>
    </span>
  );
}
