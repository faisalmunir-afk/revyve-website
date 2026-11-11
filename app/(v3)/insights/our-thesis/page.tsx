import type { Metadata } from "next";
import { THESIS } from "../../../content/insights";
import { META } from "../../../content/site";
import ArticlePage from "../../components/ArticlePage";
import { TheGap } from "../../components/teamDiagrams";

export const metadata: Metadata = {
  title: META["/insights/our-thesis/"].title,
  description: META["/insights/our-thesis/"].description,
};

/**
 * Our Thesis, in the shared Insights reading form (components/ArticlePage.tsx).
 * The gap is drawn right after the paragraph that names it.
 *
 * Every string comes from app/content/insights.ts, generated from the live
 * page and verbatim.
 */
export default function Page() {
  return (
    <ArticlePage
      article={THESIS}
      figure={<TheGap className="aboutb__draw sd sd--armed lt__draw" />}
      figureAfter="That gap is the opportunity."
    />
  );
}
