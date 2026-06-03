// Portfolio work — source of truth for the homepage grid and /work/[slug] detail pages.
// Card copy reads for a prospective client and a technical evaluator alike.

export type AIComponent = { label: string; detail: string };

export type WorkProject = {
  slug: string;
  name: string;
  /** Descriptive subtitle, <=5 words. */
  title: string;
  /** <=10 words. */
  tagline: string;
  /** Mono status label on the card. */
  status: string;
  /** 2-3 sentence card-front blurb. */
  cardDescription: string;
  problem: string;
  solution: string;
  /** Why it was hard. */
  hard: string;
  impact: string;
  technology: string[];
  ai: AIComponent[];
  summary30: string;
  summary75: string;
  /** Detail-page introduction, one entry per paragraph. */
  intro: string[];
  liveHref?: string;
  /** Household has no case study, so no detail page. */
  hasDetail: boolean;
};

export const work: WorkProject[] = [
  {
    slug: "cappawork",
    name: "CappaWork",
    title: "Agent-Native Consulting Platform",
    tagline: "A whole consultancy, run by one operator and Claude.",
    status: "active",
    cardDescription:
      "I needed a CRM, pipeline, client portal, and task tracker — and a way to talk to it when a good idea hit while walking my girls to school. So I built it.",
    problem:
      "I run a premium AI consultancy alone. Lead generation, qualification, contracts, delivery, and the CRM all land on me — and I have to stay legible to the AI assistants buyers now use to find vendors, not just to people.",
    solution:
      "So I built one Next.js platform: a marketing site, client delivery portals, and an AI back office where Claude drives the business-development pipeline through tool use. The public surface is engineered for AI agents, and a companion MCP server lets me run the CRM by voice.",
    hard:
      "The hard part was putting an LLM into my system of record — with tools that mutate a live pipeline — without letting it go rogue. I drew a hard trust boundary: strict schemas, scoring computed in code, and human review before any record commits, with authorization enforced in app code rather than at the database.",
    impact:
      "It collapses five or six separate SaaS tools and a sales assistant into one system I run end to end — from first touch through signed contract to delivered project.",
    technology: ["Next.js", "Supabase", "Clerk", "Claude", "MCP", "Vercel"],
    ai: [
      { label: "LLMs", detail: "Claude Sonnet 4 for prospect/deal extraction, web-grounded enrichment, and command orchestration; Claude as the MCP client." },
      { label: "Agents", detail: "An admin command bar that runs a bounded tool-use loop over ~8 typed tools to act on the live BD pipeline." },
      { label: "RAG", detail: "None — deliberately uses Claude’s native web search for real-time prospect intelligence instead of maintaining a vector index." },
      { label: "Evaluations", detail: "None yet — correctness rests on strict JSON schemas and human review of every parsed record before it commits." },
      { label: "Workflows", detail: "Text-to-record extraction pipelines (profiles, emails, notes → validated JSON → Postgres) with deterministic priority scoring; middleware that serves clean Markdown to AI crawlers." },
      { label: "MCP", detail: "A remote MCP server exposing six typed CRM tools so tasks can be captured by voice through Claude on mobile." },
      { label: "Automation", detail: "Clerk and Calendly webhooks; UTM-attributed lead capture from a profit-leak calculator and scorecard." },
    ],
    summary30:
      "A one-operator AI consultancy expressed as software: marketing, client portals, and a Claude-powered back office that drives the sales pipeline, discoverable by AI agents and operated by voice through MCP.",
    summary75:
      "CappaWork is an AI consultancy built as one integrated platform instead of six disconnected tools. A marketing site captures and scores leads; client portals handle delivery, contracts, and encrypted credentials; an AI back office uses Claude to parse messy prospect data into clean, scored records and drive the deal pipeline through a tool-use loop. The public site is engineered to be read by AI agents, and a companion MCP server runs the CRM by voice.",
    intro: [
      "I needed a CRM, a pipeline, a client portal, and a task tracker. I also needed a way to talk to it when a good idea hit while walking my girls to school. Six tools that don’t talk to each other wouldn’t cut it, so I built one platform that does it all.",
      "Claude runs the prospect research and the pipeline work. The public site is built to be found by AI agents, not just people. And I run the whole thing by voice, from my phone, through an MCP server.",
    ],
    liveHref: "https://cappawork.com",
    hasDetail: true,
  },
  {
    slug: "karibu-health",
    name: "Karibu Health",
    title: "AI-Assisted EHR for Rural Clinics",
    tagline: "Document patients on a phone, even offline.",
    status: "pilot, Uganda",
    cardDescription:
      "My friend Javis is a nurse in Uganda. We built an Android EHR for the HCIII — the country’s most-used clinic tier — and it’s in pilot today.",
    problem:
      "Rural Ugandan health centres run on paper, with intermittent power and network. Cloud-first records and manual Ministry of Health reporting both break against how care actually happens.",
    solution:
      "We built an offline-first Android EHR. Clinicians dictate or type notes that always save locally and reconcile when the network returns, and an AI layer reviews each note against cited Uganda Ministry of Health guidelines.",
    hard:
      "Two hard problems at once: make a real multi-role EHR work when power and network are unreliable, and keep an AI strictly trustworthy in a clinical setting. The answer was an idempotent sync engine plus a hard citation-subset guard that drops any suggestion not grounded in the retrieved corpus.",
    impact:
      "It replaces a sync model that used to lose dictated notes, runs at roughly $1–2/day in AI cost, and keeps clinicians in full authority — while easing the documentation and reporting that unlocks government subsidies.",
    technology: ["Kotlin", "Android", "Supabase", "Inngest", "OpenAI"],
    ai: [
      { label: "LLMs", detail: "OpenAI Whisper (gpt-4o-transcribe) for dictation; gpt-4o-mini for note review, HMIS coding, and receipt drafting; text-embedding-3-small for retrieval." },
      { label: "Agents", detail: "Consult — a de-identified, offline-blocked second-opinion chat; most surfaces are deliberately non-agentic and single-shot." },
      { label: "RAG", detail: "pgvector retrieval over the Uganda Clinical Guidelines, WHO IMNCI, HIV guidelines, and Essential Medicines List, with chunk-tagged citations." },
      { label: "Evaluations", detail: "No model-output eval harness yet (the deterministic helpers are unit-tested); flagged as the top improvement." },
      { label: "Workflows", detail: "An Inngest post-dictation pipeline (note review, receipt draft, HMIS suggestion) with a 60-second self-healing poller." },
      { label: "Automation", detail: "An outbox sync engine with client-supplied idempotency keys; deterministic critical-alert rules (e.g., infant high fever) that bypass the model entirely." },
    ],
    summary30:
      "An offline-first Android EHR for rural Ugandan clinics: clinicians dictate notes that always save locally, and an AI colleague reviews each against cited Ministry of Health guidelines without rewriting charts.",
    summary75:
      "Karibu Health is an offline-first EHR for rural Ugandan clinics, where power and data are unreliable. Clinicians dictate or type visit notes on budget Android phones; every write saves locally and reconciles to the cloud through an idempotent sync engine when connectivity returns. An AI layer transcribes the dictation and reviews each note against cited Ministry of Health guidelines, surfacing a few questions rather than rewriting the chart. Critical safety alerts stay deterministic, not model-generated.",
    intro: [
      "A 30-year relationship with Uganda and a 15-year friendship led to this. My friend Javis is a nurse there. We wanted to see what almost-free AI coding could really do, so we ran product-discovery interviews with clinicians.",
      "They all said the same thing: they wanted a better EHR. And none of them had a computer connected to the internet. So we built an Android EHR for the HCIII, Uganda’s most-used clinic tier. It works offline, and it keeps the clinician — not the AI — in charge of the chart. In pilot today.",
    ],
    liveHref: "https://www.karibu.health",
    hasDetail: true,
  },
  {
    slug: "knock-recruit",
    name: "Knock Recruit",
    title: "AI-Augmented Recruiting Platform",
    tagline: "From thousands of applicants to the ten worth your time.",
    status: "private beta",
    cardDescription:
      "Applicants can easy-apply, submit with AI, and hammer out applications — and recruiters are buried in text. How do they find the signal? Knock rewires the recruiting process and makes it AI-native.",
    problem:
      "A single job posting can draw 2,000 applications, and the incumbent tools just store candidates. They do nothing to help a recruiter decide who is actually worth attention.",
    solution:
      "I built a multi-tenant platform where six durable AI agents parse resumes, score video answers, and rank every candidate against every open role — surfacing a defensible top-ten shortlist with a transparent score breakdown.",
    hard:
      "A recruiter has to defend a ranking to a paying client, so the score couldn’t be a black box. I let the LLMs produce signals under validated schemas, but kept the final composite as deterministic math — with confidence handling so a candidate who arrives with partial data is still scored fairly.",
    impact:
      "It’s deployed in private beta, turning raw applicant volume into a ranked, auditable shortlist. I hold a flat seat-based price by engineering the AI cost down instead of metering customers for it.",
    technology: ["Next.js", "Supabase", "Inngest", "Claude", "Gemini"],
    ai: [
      { label: "LLMs", detail: "Claude Haiku for high-volume extraction and scoring, Claude Sonnet for reasoning (intake, culture profiling, conversation), with Gemini as an automatic rate-limit fallback." },
      { label: "Agents", detail: "Six durable Inngest agents (intake, enrichment, scoring, outreach, briefing, compliance) plus a conversational Slack assistant." },
      { label: "RAG", detail: "None — query-driven context, serializing top-N workspace entities into prompts for a bounded domain." },
      { label: "Evaluations", detail: "Deterministic, auditable composite scoring with confidence gating and graceful degradation; an offline eval harness identified as the next step." },
      { label: "Workflows", detail: "Durable, event-driven orchestration with SHA-256 input-hash dedup, concurrency caps, and months-long sleep-until quality-of-hire surveys." },
      { label: "Automation", detail: "Job-board distribution (Indeed, Broadbean, Google for Jobs), cron-scheduled daily briefings, and an encrypted ATS sync." },
    ],
    summary30:
      "A recruiting platform where six AI agents parse, screen, and rank every applicant against every open role; the final composite match score is deterministic, auditable math, not a black box.",
    summary75:
      "Knock Recruit triages recruiting volume down to the candidates worth a recruiter’s time. Six durable AI agents parse resumes, score video answers, and rank every applicant against every open role on skills, culture, communication, and location, auto-rejecting spam before it costs a decision. Claude Haiku handles high-volume work and Sonnet the reasoning, with a Gemini fallback. Crucially, the final match score is deterministic, reproducible math; LLMs produce signals, but the defensible ranking is auditable code.",
    intro: [
      "Applying for jobs is frictionless now. You can easy-apply, submit with AI, and fire off a hundred applications before lunch. One posting can pull two thousand of them. The recruiter drowns in text and can’t find the signal.",
      "So Knock rewires the process and makes recruiting AI-native. Six agents read every applicant and rank them against every open role, so the recruiter only spends judgment on the ten worth judging. The match score is auditable math they can defend to a client — not a black box.",
    ],
    liveHref: "https://www.knockrecruit.io",
    hasDetail: true,
  },
  {
    slug: "arborkey",
    name: "ArborKey",
    title: "Operations Platform for HOA Managers",
    tagline: "The business layer for community association managers.",
    status: "shipped",
    cardDescription:
      "HOA management companies have unique time-tracking needs and business prospects, and no big-box software fits them exactly. So CappaWork built the solution they needed.",
    problem:
      "Community association management firms run dozens of HOAs on spreadsheets and sticky notes. The operational platforms they pay for manage the communities, but offer nothing for running the management business itself.",
    solution:
      "I built a multi-tenant SaaS for the management company — pipeline, timesheets, budgeting, profitability reporting — with four AI extraction features that turn meetings, board rosters, business cards, and arbitrary CSVs into clean, structured records.",
    hard:
      "In a vertical where wrong data drives billing and contracts, AI silently writing the wrong thing is worse than no AI. So every feature is single-turn extraction with a clean → parse → coerce → safe-default pipeline and a human-confirmation invariant encoded in the schema — never an autonomous loop.",
    impact:
      "It’s a production multi-tenant SaaS with the full commercial stack — auth, Stripe billing, transactional email, analytics, cron — plus four AI features that kill the transcription busywork, all under a documented philosophy that lets a trust-sensitive vertical actually adopt AI.",
    technology: ["Next.js", "Drizzle", "PostgreSQL", "Gemini", "Stripe"],
    ai: [
      { label: "LLMs", detail: "A single model — Google Gemini 2.5 Flash — for high-volume, text-in / JSON-out extraction, in JSON response mode on every call." },
      { label: "Agents", detail: "None — deliberately single-turn; the “agency” lives with the human reviewer, by design." },
      { label: "RAG", detail: "None — bounded zero-shot extraction over self-contained pasted text, where retrieval would add cost and latency for no accuracy gain." },
      { label: "Evaluations", detail: "Type-validation plus mandatory human confirmation as the safety gate; precision/recall and acceptance telemetry (PostHog) identified as the measurement gap to close." },
      { label: "Workflows", detail: "A uniform clean → parse → validate/coerce → human review → confirm → write pipeline across all four features, with safe-default degradation on a bad generation." },
      { label: "Automation", detail: "Stripe billing lifecycle, deduplicated transactional email, and two cron-driven engagement sequences." },
    ],
    summary30:
      "A multi-tenant SaaS that runs the business of HOA management firms (pipeline, time, budgets), with four Gemini extraction features that turn messy inputs into clean records, gated behind human confirmation.",
    summary75:
      "ArborKey is the missing business layer for community association management firms: pipeline, time tracking, budgets, and reporting their community-operations platforms don’t provide. Its AI is narrow and deliberate: four Gemini features that extract action items from meetings, contacts from board rosters, prospects from business cards, and column mappings from arbitrary CSVs. Every feature is single-turn, type-validated, and gated behind explicit human confirmation, so a trust-sensitive vertical where wrong data drives billing can actually adopt it.",
    intro: [
      "HOA management companies have unique needs — odd time tracking, their own kind of pipeline and prospects. The platforms they pay for run the communities, not the management business. No big-box software fits exactly. So CappaWork built the one they needed.",
      "It puts pipeline, time, budgets, and reporting in one place. AI does the tedious part: turn a meeting transcript, a board roster, a business card, or a messy CSV into clean records. A human always confirms before anything saves — because in this business, wrong data means wrong bills.",
    ],
    liveHref: "https://www.arborkeysoftware.com",
    hasDetail: true,
  },
  {
    slug: "healthcare-aio",
    name: "Healthcare AIO",
    title: "AI Visibility Audits for Hospitals",
    tagline: "Why AI search won’t cite you, and what to fix.",
    status: "shipped",
    cardDescription:
      "Patients search differently now — “what rash is this?” over “pediatrician near me,” answered in AI chat, not blue links. SEO becomes AIO. We built Healthcare AIO to help providers get found in AI.",
    problem:
      "Patients increasingly ask AI search engines for provider recommendations. A hospital that isn’t cited is invisible at the moment of intent — and there’s no “page two” to inspect.",
    solution:
      "I built a vertical platform that crawls a provider’s site, measures real citation share across the AI engines, grounds an LLM diagnostic in federal physician records, and outputs a scored, persona-tailored audit of exactly what to fix.",
    hard:
      "A wrong claim about a physician is a liability, so the diagnostic had to be grounded. I verify physician facts against the federal NPPES registry with confidence labels, keep the scoring deterministic, and detect bot walls that hard-cap the headline score so it can’t lie.",
    impact:
      "It’s a working end-to-end engine: one URL in, a multi-pillar, grounded, persona-tailored audit out, with provider failover. The public demo reports double as real sales collateral.",
    technology: ["Next.js", "Claude", "Gemini", "GPT", "Inngest"],
    ai: [
      { label: "LLMs", detail: "Claude Sonnet (primary), Gemini, and GPT behind one interface with schema-validated failover — a structurally wrong answer is treated as a failure, not shipped." },
      { label: "Agents", detail: "None — a deterministic Inngest workflow with scoped per-page LLM judgment, a deliberate choice over autonomous agents." },
      { label: "RAG", detail: "Structured grounding — crawled page text, NPPES-verified physicians, and live citation results assembled into each prompt; no vector store." },
      { label: "Evaluations", detail: "Structural guarantees (Zod gates, deterministic floors) in place; automated quality eval identified as the next investment." },
      { label: "Workflows", detail: "A durable crawl → enrich → measure → diagnose → score → narrate pipeline with per-step retries and bounded concurrency." },
      { label: "Automation", detail: "An 8-query AI-search citation battery; bot-wall detection by fetching the homepage as five real crawler user-agents." },
    ],
    summary30:
      "A vertical platform that crawls a healthcare site, measures its citation share across AI search, grounds a multi-provider LLM diagnostic in federal physician records, and outputs a scored, fix-it-now report.",
    summary75:
      "Healthcare AIO tells healthcare providers why AI search engines don’t cite them, and what to fix. It crawls the provider’s site, measures real citation share across ChatGPT, Perplexity, and Gemini, and runs a multi-provider LLM diagnostic grounded in the federal NPPES physician registry and live citation data. Scoring stays deterministic across three pillars, and a detected bot wall hard-caps the headline score so it can’t lie. The output is a scored, persona-tailored, implementation-ready audit report.",
    intro: [
      "Patients search differently now. It’s not “pediatrician in Scranton” anymore. It’s “what rash is this — do I need to go in?” And they don’t click blue links on Google. They click through AI chat.",
      "SEO is becoming AIO. We built Healthcare AIO to measure how a provider actually shows up in ChatGPT and Perplexity, then show them exactly what to fix. Every claim about a physician is checked against the federal registry, so the audit is grounded in real records, not model guesses.",
    ],
    hasDetail: true,
  },
  {
    slug: "horizon-data-partners",
    name: "Horizon Data Partners",
    title: "Brand + Client Portal Refresh",
    tagline: "Turn finished engagements into the next conversation.",
    status: "client build",
    cardDescription:
      "A world-class economics firm needed a site and client portal to match their quality. We refreshed the brand and shipped a portal that tells the story of their insights — without burying it in slides.",
    problem:
      "A world-class economics firm had insight to match anyone, but the work went cold the moment an engagement ended. Deliverables decayed in an inbox, and the friction of re-engaging killed follow-on deals.",
    solution:
      "I refreshed the brand and built a Next.js platform: a client portal for deliverables, progress, collaborative recommendations, and booking, paired with an admin layer — a weighted BD pipeline, an encrypted credential vault, and delivery boards — that encodes the firm’s tacit re-engagement playbook.",
    hard:
      "The binding constraint was behavioral, not technical. The founder is an economist, not a salesperson, and clients can’t feel sold to — so I leaned on the IKEA effect (clients co-author the recommendation) and deferred the AI features until the manual version proved it would actually get used.",
    impact:
      "A deployed multi-tenant platform that turns the firm’s IP into software — four real statements of work reverse-engineered into a reusable delivery portal, a BD pipeline, and an AI-readiness diagnostic.",
    technology: ["Next.js", "React", "Supabase", "Clerk", "Vercel"],
    ai: [
      { label: "LLMs", detail: "None at runtime today — AI was used during development (v0 scaffolding, Claude-authored content), with runtime LLM features deliberately deferred." },
      { label: "Evaluations", detail: "The AI-ROI diagnostic is itself an evaluation framework — scoring a firm’s AI maturity across seven weighted dimensions against anonymized peer benchmarks." },
      { label: "Workflows", detail: "Deterministic business workflows (inbound-lead → pipeline conversion, tier-templated kanban) built as the seams where AI drafting will later plug in." },
      { label: "Roadmap", detail: "Designed-for but not yet built: AI-assisted drafting of insight notes and a retrieval-grounded scoping tool over the past-engagement corpus; the data model was shaped to host them." },
    ],
    summary30:
      "A dual-portal platform that encodes a solo consultant’s re-engagement playbook: deliverables, collaborative recommendations, and a weighted BD pipeline, so finished engagements stay alive and past clients return on their own.",
    summary75:
      "Horizon Data Partners delivers high-value engagements, then watches the relationship go cold when they end. This platform productizes the re-engagement motion itself: a client portal holds deliverables, progress, and recommendations the client co-authors, while an admin layer runs a weighted BD pipeline and an encrypted vault. The brief was “share files with clients”; the real job, found by reverse-engineering four signed statements of work, was keeping the consultant in their clients’ orbit so they re-engage.",
    intro: [
      "A world-class economics firm had insight to match anyone — and a website that didn’t show it. So we refreshed the brand and leveled up the feel of the site.",
      "Then we shipped a client portal. It lets them tell the story of their work to each client, in one place, without burying it in a deck of slides. The next engagement comes from the relationship staying warm, not from a cold pitch.",
    ],
    hasDetail: true,
  },
  {
    slug: "reconstructing-wealth",
    name: "Reconstructing Wealth",
    title: "AI Back Office for RIAs",
    tagline: "AI prepares, the advisor delivers.",
    status: "in development",
    cardDescription:
      "Financial advisors face a seismic shift: a vast wealth transfer, a consolidated market, and AI doing parts of the job for free. They need to do the human parts at scale — and build their own edge.",
    problem:
      "A solo or small fiduciary RIA runs on a fragmented, expensive stack — CRM, spreadsheets, a research analyst — under strict SEC books-and-records obligations that generic SaaS doesn’t satisfy.",
    solution:
      "I built a monorepo of three apps over one compliant data core: marketing and lead flow, an advisor CRM with a read-only client portal, and an equity-research engine — bound by a multi-provider AI router and event-driven workflows that prepare the work for the advisor to deliver.",
    hard:
      "Bounding AI inside a fiduciary context meant encoding “AI prepares, the advisor delivers” everywhere — no client-facing sends, visible authorship, review-before-commit — and implementing the SEC books-and-records controls (append-only audit, soft deletes, access logging) purely at the Postgres and RLS layer.",
    impact:
      "It’s in development, and already shows a single advisor running lead-gen, CRM, and institutional-style research from one system for a few hundred dollars a month — with SEC books-and-records controls built in from day one.",
    technology: ["Next.js", "Supabase", "Inngest", "Claude", "GPT", "Gemini"],
    ai: [
      { label: "LLMs", detail: "A provider-agnostic router dispatching tasks across Claude (Opus/Sonnet), GPT-4o, and Gemini with per-task primary/fallback chains and cost and latency budgets." },
      { label: "Agents", detail: "Intentionally not autonomous — deterministic multi-step enrichment pipelines and a signal→CRM bridge rather than open-ended agents, because the fiduciary answer is always human-in-the-loop." },
      { label: "RAG", detail: "Structured/relational retrieval — each task is handed exactly the records it needs from Postgres, plus on-demand long-document fetch; no vector store." },
      { label: "Evaluations", detail: "None yet — full cost/latency/success telemetry per task is in place as the foundation an eval harness would build on." },
      { label: "Workflows", detail: "18 event- and cron-driven Inngest functions (meeting prep, earnings and filing summarization, EPS-revision signal detection, quarterly briefs)." },
      { label: "Automation", detail: "Scheduled research jobs across FMP, Finnhub, and SEC EDGAR with dedup-before-insert idempotency and graceful degradation." },
    ],
    summary30:
      "An AI-native platform for a SEC-registered RIA running marketing, CRM, and research from one system: AI prepares the back-office work, the advisor delivers, and compliance is enforced in the database.",
    summary75:
      "Reconstructing Wealth is an AI-native system for a solo-founder registered investment adviser, collapsing marketing, an advisor CRM with a read-only client portal, and an equity-research engine into one platform. A provider-agnostic router dispatches tasks across Claude, GPT, and Gemini under cost and latency budgets; eighteen event- and cron-driven workflows handle meeting prep, earnings digestion, and estimate-revision scanning. The governing rule, “AI prepares, the advisor delivers,” is enforced alongside SEC books-and-records controls at the database layer.",
    intro: [
      "Financial advisors are in the midst of a seismic shift. An extraordinary wealth transfer. A consolidated stock market. Millennials who want proof before they trust. And AI that can do part of their job for free.",
      "They need to do the human parts of the job at scale, and establish their own investment edge. So we built a platform for exactly that. AI preps the back office — meeting prep, follow-ups, earnings and filing summaries, scanning for estimate revisions. The advisor delivers every word. AI never sends a client message or recommends a trade, and the compliance rules live in the database, not in good intentions.",
    ],
    hasDetail: true,
  },
  {
    slug: "workportfolio",
    name: "WorkPortfolio.io",
    title: "Production SaaS via AI Agents",
    tagline: "A full SaaS, shipped by directing AI coding agents.",
    status: "shipped, 2025",
    cardDescription:
      "Showing is better than telling. Build a professional portfolio of your projects — each update takes less time than a LinkedIn post.",
    problem:
      "Shipping production software usually demands months or years of prerequisite learning before the first real system goes live. That’s a slow path when the goal is to deliver, not to collect credentials.",
    solution:
      "I built a real multi-tenant SaaS — auth, billing, storage, a custom analytics pipeline, SEO, and a hardened deploy — end to end by directing AI coding agents, instead of the conventional learn-then-build path.",
    hard:
      "The binding skill was verification: learning enough of each concept — webhooks, RLS, serverless lifecycles, billing state — to catch confident-but-wrong agent output before it shipped.",
    impact:
      "It’s a production system on Vercel, Supabase, and Clerk. It missed product-market fit — ~70 users, thin retention, and I’ll say that plainly — but it proved I can ramp on an unfamiliar stack fast and ship, and it converted directly into a first paid software-build engagement.",
    technology: ["Next.js", "Supabase", "Clerk", "Vercel", "Cursor"],
    ai: [
      { label: "LLMs", detail: "None in the product — there is no model provider in the dependency tree. This system was built with AI, not powered by it." },
      { label: "Agents", detail: "AI coding agents drove the build — ChatGPT for planning, then a deliberate move to Cursor’s agentic workflow for repo-aware development. The AI lives in the development process, not the runtime." },
      { label: "Evaluations", detail: "The lived discipline of verifying agent output — catching hallucinated APIs, missing routes, and unsafe defaults — was the project’s core skill, and where AI-assisted development quietly fails without it." },
    ],
    summary30:
      "A complete multi-tenant SaaS (auth, billing, storage, analytics, hardened deploy) built end-to-end by directing AI coding agents, proving fast self-direction on an unfamiliar stack and where agentic development quietly fails.",
    summary75:
      "WorkPortfolio.io is a zero-config portfolio builder, but the real artifact is how it was built. A complete, multi-tenant SaaS: auth, billing, file storage, a custom analytics pipeline, SEO, and a hardened deploy, shipped by directing AI coding agents rather than coding the conventional way. The product itself missed product-market fit; its lasting value was proving fast self-direction on an unfamiliar stack and a firsthand sense of where agentic development is powerful and where it fails.",
    intro: [
      "Showing is better than telling. It’s better to ship a product than to take a course. WorkPortfolio is a place to do exactly that.",
      "Build a professional portfolio of your projects, and keep it current. Each update takes less time than a LinkedIn post.",
    ],
    liveHref: "https://www.workportfolio.io",
    hasDetail: true,
  },
  {
    slug: "household",
    name: "Household",
    title: "Catholic Family Formation App",
    tagline: "The small daily rhythms that hold a family together.",
    status: "in development",
    cardDescription:
      "Big families are busy — and busy isn’t always good. A Catholic platform for stewarding the domestic church: know what each kid needs and when, so you control the schedule, not the other way around.",
    problem: "",
    solution: "",
    hard: "",
    impact: "",
    technology: [],
    ai: [],
    summary30: "",
    summary75: "",
    intro: [],
    hasDetail: false,
  },
];

export const workWithDetail = work.filter((p) => p.hasDetail);

export function getProject(slug: string): WorkProject | undefined {
  return work.find((p) => p.slug === slug && p.hasDetail);
}
