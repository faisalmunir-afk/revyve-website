import type { Metadata } from "next";
import { ESSAY } from "../../../content/insights";
import { META } from "../../../content/site";
import ArticlePage from "../../components/ArticlePage";
import { TheLoop } from "../../components/teamDiagrams";

export const metadata: Metadata = {
  title: META["/insights/why-we-buy-businesses/"].title,
  description: META["/insights/why-we-buy-businesses/"].description,
};

/**
 * Why We Buy Businesses, in the shared Insights reading form (components/ArticlePage.tsx).
 * The five things ownership gives are drawn as a loop right after the paragraph that names the loop.
 *
 * Every string comes from app/content/insights.ts, generated from the live
 * page and verbatim.
 */
export default function Page() {
  return (
    <ArticlePage
      article={ESSAY}
      figure={<TheLoop className="aboutb__draw sd sd--armed lt__draw" />}
      figureAfter="The loop is the asset."
    />
  );
}
