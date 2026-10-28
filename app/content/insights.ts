/**
 * Revyve — /insights/, /insights/our-thesis/ and
 * /insights/why-we-buy-businesses/, transcribed verbatim from
 * revyveholdings.com (as changed by the client in October 2026: Press became
 * Insights, "Why we built Revyve" became "Our Thesis", and the essay was
 * added).
 *
 * Every string is Revyve's own wording, character for character. The essay
 * is generated from the live page's HTML, block by block, so nothing in it
 * is retyped.
 */

type Linked = { phrase: string; href: string };

export const INSIGHTS = {
  eyebrow: "Insights",
  heading: "Insights.",
  items: [
    {
      title: "Why We Buy Businesses",
      href: "/insights/why-we-buy-businesses/",
      date: "October 2026",
      dateTime: "2026-10",
      excerpt: "Intelligence is getting cheap fast.",
    },
    {
      title: "Our Thesis",
      href: "/insights/our-thesis/",
      date: "October 2026",
      dateTime: "2026-10",
      excerpt: "Most of the value AI creates in healthcare will not go to the companies that make the models.",
    },
  ],
} as const;

export const THESIS = {
  /** Rendered as a way back to /insights/ with the date, not as a label. */
  eyebrow: "Insights · October 2026",
  section: "Insights",
  date: "October 2026",
  dateTime: "2026-10",
  heading: "Revyve is an AI-native holding company for healthcare services.",
  paragraphs: [
    {
      text: "Most of the value AI creates in healthcare will not go to the companies that make the models. It will go to whoever changes how the work actually gets done.",
    },
    {
      text: "The businesses that run healthcare's back office have what no model can generate: customers who have stayed for decades, people who know the payer rules by heart, and systems that money already flows through. They also run on email, spreadsheets and one person's memory. That gap is the opportunity.",
    },
    {
      text: "Revyve buys established healthcare services businesses and runs them. We bring capital, engineers and operators, and we take responsibility for the result. Our first business is a 29-year-old medical billing company serving independent physician practices.",
    },
    {
      text: "We don't sell these companies software. We own them, so we can change who does the work, which steps still need a person, and what the customer is promised. Our engineers sit with billers and managers, map the work as it really happens, and rebuild it. Agents take the repetitive, checkable tasks. People keep judgment, exceptions and relationships.",
    },
    {
      text: "Everything we learn goes into Revyve AI: the data model, the agents, the workflow rules, the connectors, and the way we take over a business without losing a customer. Every company we own runs on it, and every deployment makes the next one faster and safer.",
      links: [{ phrase: "Revyve AI", href: "/revyve-ai/" }] as Linked[],
    },
    {
      text: "The people who built each business keep running it. We measure ourselves on their customers staying, their collections holding, and the work costing less end to end.",
    },
    {
      text: "We only do healthcare. Two of our four founders are physicians. Revyve is based in San Francisco, with operations in St. Louis.",
    },
  ],
  readNext: {
    lead: "Read next: ",
    text: "About, the short version; Sell your firm; For practices.",
    links: [
      { phrase: "About", href: "/about/" },
      { phrase: "Sell your firm", href: "/sell-your-firm/" },
      { phrase: "For practices", href: "/for-practices/" },
    ] as Linked[],
  },
} as const;

export type EssayBlock = { type: "p" | "h2" | "h3"; text: string };

export const ESSAY = {
  /** Rendered as a way back to /insights/ with the date, not as a label. */
  eyebrow: "Insights · October 2026",
  section: "Insights",
  date: "October 2026",
  dateTime: "2026-10",
  heading: "Why We Buy Businesses",
  /** The line under the title. */
  dek: "Deploying AI into the real world of healthcare",
  blocks: [
    { type: "p", text: "Intelligence is getting cheap fast. Every few months the frontier models get better and cheaper at the same time, and I don't see a reason for that to stop." },
    { type: "p", text: "So what stays expensive? Trust, judgment, accountability, and ground truth." },
    { type: "p", text: "In medical billing those are concrete. A billing company holds a physician's revenue. A claim that sits unpaid for 140 days isn't a support ticket. It's a practice's payroll, a partner's distribution, an exam room that doesn't get built. HIPAA governs every record, and someone is accountable for every action. The work also takes a lot of judgment: the denial that really means resubmit with different documentation, the payer whose portal says one thing while the remittance says another, the claim that looks routine and isn't." },
    { type: "p", text: "This isn't a chatbot reading office hours off a practice website. It's handling the claim that keeps a nephrology practice open. We think buying businesses that carry this kind of responsibility is the best way to deploy AI into the real world, and we think it works far beyond billing." },
    { type: "p", text: "We start with billing because it's where we found the sharpest entry point. The outcomes are measurable, the budgets recur, and there was a company we could buy. It's not where we stop. The goal is a family of healthcare service businesses running on one shared AI platform, each one easier than the last to buy, transform, and run. Here's why the model works, what we learned doing it once, and where it goes next." },
    { type: "h2", text: "Why selling from the outside fails" },
    { type: "p", text: "Say you build an AI product for medical billing. You found a real problem, built an agent, and the demo works." },
    { type: "p", text: "Now you need production. That means a HIPAA security review, business associate agreements, and integrations with practice management systems and payer portals that were never built to talk to an agent. Most deployments die here, before the agent touches a single claim." },
    { type: "p", text: "Say you get through. Now the billing team has to use it. These people have decades of experience and have watched vendors show up with automation and leave broken workflows behind. Some think you're there to take their jobs, and some vendors are. Who owns adoption, you or a manager whose plate is already full?" },
    { type: "p", text: "Then you have to charge for it. Per seat or per claim? The practice manager hears a price, the owner asks what it saves, and your ROI case is a spreadsheet you wrote about your own product. You're selling a tool to people who buy outcomes, from outside the building, with no say in how the work is organized." },
    { type: "p", text: "None of these problems are about the models. The models are fine. The problems exist because a business runs on more than its systems of record." },
    { type: "p", text: "On paper a billing company is a process. Claims go in, claims go out, money follows. In reality it runs on knowledge nobody wrote down. It's the biller who knows a certain denial code from a certain payer usually means the claim needs a different attachment, not an appeal. It's the covenant schedules, denial patterns, and staffing math an owner learns over 29 years. It's the quick question across the desk to the person who's seen this exact case before." },
    { type: "p", text: "A vendor can integrate with the practice management system and the clearinghouse, and that data is real and useful. But the exceptions, the edge cases, and the sense of what good work looks like live in the people. To build agents that do the whole job and not one thin slice of it, you have to sit next to those people. No contract gets you that seat." },
    { type: "h2", text: "Who captures the value" },
    { type: "p", text: "Even when an outside deployment works, the economics are lopsided." },
    { type: "p", text: "Say you sell a billing company your software for $100,000 a year. That's a good contract. Will it renew as models get cheaper and alternatives multiply? And if your product saves them $1 million a year in labor, that million shows up in their P&L, not yours. They have years of operating history, lasting client relationships, and a business a buyer already knows how to value. You added earnings to it and kept a vendor's cut." },
    { type: "p", text: "We ran this math on ourselves and didn't like the answer. Good agent work has its biggest impact on the operating income of the business it runs inside. So we asked the obvious question. Why build the tool when you can own the outcome?" },
    { type: "p", text: "Building a new company from scratch has the same problem in reverse. You get the whole workflow and the economics, but you start with no customers, no brand, no team, and no trust. In services this critical, trust is the product. A physician doesn't hand collections to a startup with a good demo. A book of practices built almost entirely on referrals over 29 years is 29 years of physicians telling other physicians that these people get them paid." },
    { type: "p", text: "We saw this in our own deal. The process was crowded, and we weren't the highest price. The seller picked the buyer who wouldn't wreck what he'd spent 29 years building. That was an operator who had spent three years inside US billing companies and could talk covenant schedules and denial patterns instead of reading a banker's memo, standing next to two physicians whose specialties matched the doctors on the book. Someone who spent three decades earning referral trust doesn't sell to a spreadsheet." },
    { type: "h2", text: "What ownership gets you" },
    { type: "p", text: "This fall we closed the acquisition of a medical billing company that has been running for 29 years. It came with decades of referral trust, an experienced team, and a book of independent practices with real claims moving every day. Owning it gave us five things no vendor deal could." },
    { type: "h3", text: "Access" },
    { type: "p", text: "Our engineers sit with the people doing the work. Our COO spent the three years before this inside US billing companies learning how the work really runs, and he lives near the billing team. That's how we found the employee whose whole job was building the morning aging and revenue reports by hand, and why writing those reports was the first thing we gave the agent. You can't find that workflow on a sales call." },
    { type: "h3", text: "Ground truth" },
    { type: "p", text: "Our business produces real payer outcomes every day. We log every agent action with its evidence: the payer response, how the agent read it, which rules fired, the human review, and what happened next. Every week, billers who didn't do the original work audit a random sample of 200 agent actions against payer records. In the first seven days the agent ran 1,200 live claim status checks. Of the 200 we audited, 196 matched the payer record exactly. The four misses were transcription or timing slips that a biller fixed in under a minute, and none of them changed an outcome or cost anyone money. Nobody can buy, scrape, or fake that dataset. It exists only because we own the place it comes from." },
    { type: "h3", text: "Aligned incentives" },
    { type: "p", text: "Our billers assumed the AI was coming for their jobs. We skipped the pep talk. We asked each of them to show us the part of their day they hated most and automated that first. Then we put them in charge of grading the agent. The people who feared it most became its toughest testers and its best quality control, because the correction loop belongs to them. Nobody argues over who owns adoption. We win when the team and the business win, and everyone in the building knows it." },
    { type: "h3", text: "Trust" },
    { type: "p", text: "We didn't walk into the practices on the book as a new vendor. The service they've relied on for years just got faster follow up and better reports, with no change to their software or their front desk. Two of our four founders are physicians, an anesthesiologist and an orthopedic surgeon, selling into the specialties they practiced. When a doctor calls another doctor about unpaid claims, they get a meeting a sales rep wouldn't." },
    { type: "h3", text: "Scale" },
    { type: "p", text: "On day one we had an experienced billing team, recurring service revenue, and the cash flow to fund what comes next. We aren't burning money to find a first customer. We're compounding from dozens of them." },
    { type: "p", text: "These five only work together. Access produces ground truth. Ground truth produces agents the team trusts. Trust frees up the capacity to serve more practices. That capacity produces the cash for the next acquisition, which brings new edge cases that make the agents better. The loop is the asset." },
    { type: "p", text: "And none of the five are specific to billing. Access, ground truth, aligned incentives, trust, and scale exist in every established healthcare service business where outcomes really matter, the work is high volume, and the incumbents are organized around coordinating it by hand. Billing is just where we proved the loop first. The loop is the strategy. The first company is its first proof." },
    { type: "h2", text: "What we're building at Revyve" },
    { type: "p", text: "Revyve is a holding company for healthcare and related service businesses, starting with revenue cycle management, or RCM. We chose the structure on purpose. It's permanent capital, not a fund with a clock. We aren't buying companies to fix and flip inside an investment window. We're building a focused group of healthcare operating companies whose technology and operations get better together, and we'll hold them as long as the compounding holds. The model is the Danaher and Constellation playbook of disciplined acquisition and steady improvement, plus one lever those companies never had: agents that get cheaper and better every quarter, deployed from the inside." },
    { type: "p", text: "Revyve AI is the platform inside the holding company. It sits between the frontier models and the software these businesses already use, and it handles agents, permissions, evidence, and human review in one place. It doesn't depend on any one model. We pick models task by task based on measured quality, speed, and cost. The shared core gets built once and carried into every company we buy. That core is routing, orchestration, permissions, evaluation, and the data model of how healthcare work actually flows. Connecting it to each business's systems and workflows is the part we do slowly, one company at a time, next to the people doing the work. Roughly 70 to 80% of what we build carries over from the first deployment, and every company we add raises that share." },
    { type: "p", text: "Healthcare is the boundary of the whole strategy. From RCM we expand into the businesses that look like it. The pattern is the same everywhere we look: fragmented operators mostly still owned by their founders, lasting referral relationships, recurring needs, heavy administrative load, and professional judgment that has to stay with qualified people." },
    { type: "p", text: "Walk the map and the pattern gets clear. Ambulatory surgery centers run on scheduling, eligibility, prior authorization, and implant and supply documentation, a huge administrative load wrapped around every hour of surgery. Preoperative and anesthesia clinics carry some of the heaviest paperwork in medicine: clearances, assessments, and billing rules for time units, concurrency, and medical direction that generalist billers often get wrong. Two of our founders are an anesthesiologist and an orthopedic surgeon. They know that world from the inside, which is why these categories rank high for us. Radiology runs on volume: authorizations, scheduling, structured reports, and the follow up that decides whether a finding turns into treatment. Dental practices live on recall systems, eligibility checks, and treatment plans presented in the chair, the same administrative routine thousands of times a year per office. Psychiatry clinics carry long running documentation, medication authorizations, and the hard economics of the fifty minute session. Concierge and subscription primary care is the purest version of the thesis. The whole model promises a physician's attention, and almost all the cost of keeping that promise is administration that agents can take on." },
    { type: "p", text: "In every one of these, the change looks the same from the inside. Agents take the repetitive work that can be audited: status checks, authorizations, eligibility, reporting, and follow up. Professionals keep the judgment: clinical decisions, patient relationships, and anything that needs a signature. Every action lands in the same event log, under the same weekly audit, on the same platform. That's what running on AI means to us. It isn't a business without people. It's a business where people spend their time on the work only they can do." },
    { type: "p", text: "We don't enter a category because it's exciting. We enter when four things are proven, in this order: the operations fit, the data is accessible, the leadership is capable, and the deployment plan is credible. Not before." },
    { type: "p", text: "The next five years are concrete. In year one we prove the model on the first company, with measured unit economics, an audit culture that holds up at volume, and a playbook written from a real transition. Once those unit economics hold, we buy more RCM businesses. Years one through three are consolidation: more billing companies onto the same platform, versioned platform releases, a bench of operating managers, a repeatable way to deploy in the field, and proof that each new acquisition needs less custom work than the last. From year three we start expanding into the verticals we have identified, opportunistically, when the right business, the right leadership, and the right price line up rather than on a fixed calendar, under the same disciplines that governed the first acquisition and will govern the tenth." },
    { type: "p", text: "At every step we move on evidence, not enthusiasm. We track fully loaded unit costs, customer and collections outcomes, organic growth kept separate from acquired growth, realized cash, integration time, how much of the platform gets reused, retention after close, how well we handle debt, and the return on each new dollar we invest." },
    { type: "p", text: "Here's where we actually are. The first workflow, aged claims plus daily reporting, is live in a supervised pilot across the first group of practices on the book, with the numbers above. Median handling time fell from 6.5 minutes to 3.1. Fully loaded cost for this one workflow, counting people, models, and tools, is running about 40% below what it was before the agent, and collections timing hasn't moved. That's one workflow, one week, and one company, measured properly. It's the first step of a much longer build, not the finish line, and we describe it that way everywhere." },
    { type: "p", text: "Here's the constraint, and it grows with the plan. Every cost claim depends on outcomes. In billing that means collections timing. In a surgery center it will mean the clinical and operational equivalent. If an agent hurts the outcome a customer trusted us with, nothing else matters. The weekly audit is the real gate, not a formality, in every company we'll ever own." },
    { type: "h2", text: "From agents to real P&L impact" },
    { type: "p", text: "There's a curve here, and it's tempting to stop halfway up." },
    { type: "p", text: "The first half is freeing up capacity. The agent now writes the morning reports that used to be one person's entire job. He stays on payroll. What changed is that his judgment now goes to exceptions instead of copy and paste. But freed capacity isn't captured value. It's just capacity." },
    { type: "p", text: "The second half is putting that capacity to work, and that's a management decision, not something a model does. For us it means three things: more practices per biller, better quality on the book we have, and winning new practices directly. In the first few weeks, new practices started signing through our physician network. They're the first customers who chose us instead of coming with the acquisition. We always report those fees separately from the acquired book, because acquired revenue and organic revenue are different things and investors should see which is which." },
    { type: "p", text: "Repeatability is what turns one transformation into a strategy. The pieces that carried the first workflow, meaning the event log, the evaluation harness, the permission layer, and model routing, are built to carry the second and third. The practice management connector that covers our whole first book is the template for the next EHR and the one after it. We wrote a 100 day, four phase transition playbook from this acquisition so the next one is an integration project, not a bet. Each deployment should cost less and settle faster than the one before. If the second one doesn't, that's evidence against our thesis, and we'll say so." },
    { type: "p", text: "Repeatability is also what turns the strategy into a compounder. When the second acquisition deploys faster than the first, and the third faster than the second, the deal pipeline itself becomes an advantage. Thousands of healthcare service businesses still run by their founders face the same retirement wave and the same hiring limits as the company we bought. With that many options and strict criteria, we can pick the ones where the platform fits before we sign. Every company we add brings customers, cash flow, managers, and edge cases into the same system, and the system learns from every claim, exception, and audit in every company. Better deployments earn the right to bigger ones, and bigger ones make the next deployment better." },
    { type: "h2", text: "The bigger picture" },
    { type: "p", text: "Look past the first company and the next decade gets clear. Every independent physician in this country runs a small business inside a system built for large ones. They carry a hospital's administrative weight without a hospital's back office: billing, follow up, denials, reporting, staffing, and compliance. That weight is why independent medicine keeps consolidating, why physicians burn out on paperwork instead of patients, and why care keeps getting more expensive without getting better." },
    { type: "p", text: "Agents change the economics of that weight, but only if they're deployed where the work actually happens. A hospital system can push a vendor through procurement. An independent practice can't, and shouldn't have to. This technology won't reach the long tail of healthcare one software sale at a time. It gets there by owning the service businesses those practices already rely on and rebuilding the work inside them, until the back office of a practice with two physicians runs as efficiently as a system a hundred times its size." },
    { type: "p", text: "That's the company we're building. It's a healthcare services group where agents do the repetitive work and professionals do the judgment. Every claim, referral, scheduling decision, and report gets logged, audited, and improved, and each business we buy makes the next one faster to transform. If we get this right, we won't end up with a clever tool. We'll end up with quiet national infrastructure: the administrative layer of independent healthcare, run reliably enough that physicians can go back to practicing medicine." },
    { type: "p", text: "Models will keep getting cheaper. The things that make a service business worth owning, its trust, judgment, accountability, and ground truth, won't. We think this is what deploying AI into the real world looks like in critical services. You don't sell intelligence to the people who own the outcomes. You own the outcomes and let intelligence compound inside them, company after company, year after year." },
    { type: "p", text: "If you own a healthcare service business and care what happens to your people and clients after you leave, we're the buyer who won't wreck what you built. If you're a physician whose claims vanish into a black box, we built this for you. And if you build agents and want your work graded against reality every Monday morning, at a company you'll still be proud of in ten years, come build with us." },
  ] as EssayBlock[],
  readNext: {
    lead: "Read next: ",
    text: "Sell your firm, if you own a healthcare service business; For practices, if your claims vanish into a black box; Careers, if you build agents.",
    links: [
      { phrase: "Sell your firm", href: "/sell-your-firm/" },
      { phrase: "For practices", href: "/for-practices/" },
      { phrase: "Careers", href: "/careers/" },
    ] as Linked[],
  },
} as const;
