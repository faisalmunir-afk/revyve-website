"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const NAV = [
  ["About", "/about/"],
  ["Revyve AI", "/revyve-ai/"],
  ["For practices", "/for-practices/"],
  ["Sell your firm", "/sell-your-firm/"],
  ["Team", "/team/"],
  ["Press", "/press/"],
  ["Careers", "/careers/"],
  ["Contact", "/contact/"],
  ["Privacy", "/privacy/"],
] as const;

/**
 * Every found picture on the page, with its source page. All six are public
 * domain, so no credit is legally required; the skill credits them anyway and
 * so do we. Printed by `assets.mjs --credits`.
 */
const CREDITS = [
  {
    title: "Account of Messrs. Bleifuss with Wilson Brothers, St. Louis, 1851",
    by: "Julius Hutawa Co.",
    href: "https://commons.wikimedia.org/wiki/File:Account_of_Messrs._Bleifuss_with_Wilson_Brothers,_Corner_of_Main_and_Olive_Street,_St._Louis,_Mo.,_for_hardware,_April_30,_1851.jpg",
  },
  {
    title: "St. Louis Union Bank and Trust, on Locust Street",
    by: "W.C. Persons",
    href: "https://commons.wikimedia.org/wiki/File:St._Louis_Union_Bank_and_Trust,_on_Locust_Street,_Looking_West_from_Fourth_Street.jpg",
  },
  {
    title: "St. Louis Public Library, 1301 Olive Street",
    by: "",
    href: "https://commons.wikimedia.org/wiki/File:St._Louis_Public_Library,_1301_Olive_Street.jpg",
  },
  {
    title: "Medical Department, Hospitals, Boston, Massachusetts, Post office",
    by: "",
    href: "https://commons.wikimedia.org/wiki/File:Medical_Department_-_Hospitals_-_Boston,_Massachusetts_-_Post_office_-_NARA_-_45495982.jpg",
  },
  {
    title: "Medical Department, Hospitals, Travis, Texas, Receiving office",
    by: "",
    href: "https://commons.wikimedia.org/wiki/File:Medical_Department_-_Hospitals_-_Travis,_Texas_-_Receiving_office_-_NARA_-_45494968.jpg",
  },
  {
    title:
      "A Forecast, Looking Up Olive Street, St. Louis, in the Year 2010 (1910)",
    by: "Clarkson",
    href: "https://commons.wikimedia.org/wiki/File:A_Forecast_-_Looking_Up_Olive_Street,_St._Louis,_Missouri,_in_the_Year_2010._From_Greater_St._Louis_Christmas_Magazine,_Dec._1910.jpg",
  },
];

/**
 * "Name across the last photograph" - the footer is the page's last
 * photograph: Saint Louis Trust Co. on Locust Street, 1918. Its interest sits
 * in the middle band, so the top and bottom carry the text, which is what the
 * blueprint asks of the image.
 *
 * The photograph is the footer. No panel, no box, no colour block separates
 * them. It shows the city Revyve operates in, never Revyve's own premises.
 *
 * The two routes that left the closing section keep their own words here.
 */
export default function SiteFooter() {
  const ref = useRef<HTMLElement>(null);
  const still = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  // The monument grows a few percent as the footer arrives. Travel under 8%.
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);

  return (
    <footer className="ftr" ref={ref}>
      <img
        className="ftr__photo archival"
        src="/archive/st-louis-union-bank-and-trust-on.jpg"
        alt="Saint Louis Trust Co. on Locust Street, St. Louis, photographed in 1918, with streetcar tracks curving across the empty intersection in the foreground."
        width={1920}
        height={1524}
        loading="lazy"
        decoding="async"
      />

      <div className="ftr__top">
        <nav className="ftr__nav" aria-label="Footer">
          {NAV.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="ftr__routes">
          <p>
            <strong>Work with us.</strong> We hire engineers who will sit in a
            billing office in St. Louis before they write a line of code, and
            operators who want to run a business, not a function.{" "}
            <Link href="/careers/">Open roles</Link>
          </p>
          <p>
            <strong>Investors.</strong> We are not raising a priced round. If
            you back owner-operators in healthcare, write to us.{" "}
            <Link href="/contact/">Write to us</Link>
          </p>
          <p className="ftr__mail">
            <a href="mailto:hello@revyveholdings.com">
              hello@revyveholdings.com
            </a>
          </p>
        </div>
      </div>

      <div className="ftr__bottom">
        {still ? (
          <p className="ftr__wordmark display" aria-hidden="true">
            revyve
          </p>
        ) : (
          <motion.p
            className="ftr__wordmark display"
            style={{ scale }}
            aria-hidden="true"
          >
            revyve
          </motion.p>
        )}
        <div className="ftr__legal">
          <span className="note">Revyve, Inc. San Francisco and St. Louis.</span>
          <p className="credits">
            Pictures, all public domain via Wikimedia Commons:{" "}
            {CREDITS.map((c, i) => (
              <span key={c.href}>
                <a href={c.href}>{c.title}</a>
                {c.by ? ` by ${c.by}` : ""}
                {i < CREDITS.length - 1 ? "; " : "."}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
