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
      "Runs an entire consultancy — marketing, client delivery, contracts, and the sales pipeline — from one platform built for a single operator. Claude does the prospect research and pipeline work, the public site is built to be found by AI agents, and a voice-driven server lets the CRM be run from a phone.",
    problem:
      "A premium AI consultancy's founder has to run lead generation, qualification, contracts, delivery, and a CRM alone — and stay legible to the AI assistants buyers now use to find vendors.",
    solution:
      "A single Next.js platform unifying a marketing site, client delivery portals, and an AI back office where Claude drives the business-development pipeline through tool use — fronted by a public surface engineered for AI agents and a companion MCP server that runs the CRM by voice.",
    hard:
      "Putting an LLM into the system of record — with tools that mutate a live pipeline — meant drawing a hard trust boundary: strict schemas, scoring computed in code, and human review before any record commits, without leaning on database-level auth.",
    impact:
      "Collapses five or six separate SaaS tools and a sales assistant into one system a single founder runs end to end, from first touch through signed contract to delivered project.",
    technology: ["Next.js", "Supabase", "Clerk", "Claude", "MCP", "Vercel"],
    ai: [
      { label: "LLMs", detail: "Claude Sonnet 4 for prospect/deal extraction, web-grounded enrichment, and command orchestration; Claude as the MCP client." },
      { label: "Agents", detail: "An admin command bar that runs a bounded tool-use loop over ~8 typed tools to act on the live BD pipeline." },
      { label: "RAG", detail: "None — deliberately uses Claude's native web search for real-time prospect intelligence instead of maintaining a vector index." },
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
      "CappaWork is an AI consultancy built as one integrated platform instead of six disconnected tools: a marketing site that captures and scores leads, client portals for delivery and contracts, and an AI back office where Claude parses messy prospect data into clean records and drives the deal pipeline through a bounded tool-use loop. The public site is engineered to be read by AI agents, and a companion MCP server runs the CRM by voice — a whole consultancy operated end to end by a single founder.",
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
      "Document patients on a phone, even when the network disappears. Built with Ugandan clinicians, it supports visit documentation, government reporting, and guideline adherence in low-resource clinics — with an AI colleague that surfaces cited guideline questions instead of writing the chart for you.",
    problem:
      "Rural Ugandan health centres run on paper, with intermittent power and network, so cloud-first records and manual Ministry of Health reporting both break against how care actually happens.",
    solution:
      "An offline-first Android EHR where clinicians dictate or type notes that always save locally and reconcile when connectivity returns, with an AI layer that reviews each note against cited Uganda Ministry of Health guidelines.",
    hard:
      "Making a real multi-role EHR work when the network and power are unreliable — and keeping an AI strictly trustworthy in a clinical setting — required an idempotent sync engine and a hard citation-subset guard that drops any suggestion not grounded in the retrieved corpus.",
    impact:
      "A pre-launch system that replaces a sync model which previously lost dictated notes, runs at roughly $1–2/day in AI cost, and keeps clinicians in full authority while easing documentation and the reporting that unlocks government subsidies.",
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
      "Karibu Health is an offline-first Android EHR for rural Ugandan clinics where power and data are unreliable: clinicians dictate or type visit notes that always save locally and reconcile to the cloud through an idempotent sync engine when connectivity returns. An AI layer transcribes the dictation and reviews each note against cited Ministry of Health guidelines — surfacing a few questions rather than rewriting the chart, with the highest-stakes safety alerts kept deterministic in code, not model-generated.",
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
      "Scores every applicant against every open role on skills, culture, communication, and location, so recruiters spend their hours on judgment instead of resume-reading. Six durable AI agents parse, screen, and rank candidates — and the final match score is deterministic, auditable math, never a black-box verdict.",
    problem:
      "A single job posting can draw 2,000 applications, and incumbent recruiting tools store candidates without helping anyone decide who is actually worth attention.",
    solution:
      "A multi-tenant platform where six durable AI agents parse resumes, score video answers, and rank every candidate against every open role, surfacing a defensible top-ten shortlist with a transparent score breakdown.",
    hard:
      "A recruiter has to defend a ranking to a paying client, so the score couldn't be a black box — LLMs produce signals under validated schemas while the final composite is deterministic math, with confidence handling for candidates who arrive with partial data.",
    impact:
      "A production-deployed platform (private beta) that turns applicant volume into a ranked, auditable shortlist while holding a flat seat-based price by engineering AI cost down rather than metering customers.",
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
      "Knock Recruit triages recruiting volume down to the candidates worth a recruiter's time. Six durable AI agents parse resumes, score video answers, and rank every applicant against every open role on skills, culture, communication, and location, auto-rejecting spam before it costs a decision. Claude Haiku handles high-volume work and Sonnet the reasoning, with a Gemini fallback. Crucially, the final match score is deterministic, reproducible math; LLMs produce signals, but the defensible ranking is auditable code.",
    intro: [
      "Knock Recruit triages recruiting volume down to the candidates worth a recruiter's time: six durable AI agents parse resumes, score video answers, and rank every applicant against every open role on skills, culture, communication, and location, turning two thousand applications into a defensible top-ten shortlist. The final match score is deterministic, auditable math — LLMs produce the signals, but the ranking a recruiter has to defend to a paying client is reproducible code, not a black-box verdict.",
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
      "The missing business layer for firms that manage HOAs — pipeline, time tracking, budgets, and reporting in one place, since the platforms they pay for run the communities but not the management company. AI turns messy inputs — meeting transcripts, board rosters, business cards, arbitrary CSVs — into clean records, with a human confirming before anything is written.",
    problem:
      "Community association management firms run dozens of HOAs on spreadsheets and sticky notes because their operational platforms manage the communities but offer nothing for running the management business itself.",
    solution:
      "A multi-tenant SaaS for the management company — pipeline, timesheets, budgeting, profitability reporting — with four AI extraction features that turn meetings, board rosters, business cards, and arbitrary CSVs into clean, structured records.",
    hard:
      "In a vertical where wrong data drives billing and contracts, AI silently writing the wrong thing is worse than no AI — so every feature is single-turn extraction with a clean→parse→coerce→safe-default pipeline and a human-confirmation invariant encoded in the schema, never an autonomous loop.",
    impact:
      "A production-deployed multi-tenant SaaS with a full commercial stack — auth, Stripe billing, transactional email, analytics, cron — and four AI features that remove transcription busywork, delivered under a documented philosophy that lets a trust-sensitive vertical actually adopt AI.",
    technology: ["Next.js", "Drizzle", "PostgreSQL", "Gemini", "Stripe"],
    ai: [
      { label: "LLMs", detail: "A single model — Google Gemini 2.5 Flash — for high-volume, text-in / JSON-out extraction, in JSON response mode on every call." },
      { label: "Agents", detail: "None — deliberately single-turn; the \"agency\" lives with the human reviewer, by design." },
      { label: "RAG", detail: "None — bounded zero-shot extraction over self-contained pasted text, where retrieval would add cost and latency for no accuracy gain." },
      { label: "Evaluations", detail: "Type-validation plus mandatory human confirmation as the safety gate; precision/recall and acceptance telemetry (PostHog) identified as the measurement gap to close." },
      { label: "Workflows", detail: "A uniform clean → parse → validate/coerce → human review → confirm → write pipeline across all four features, with safe-default degradation on a bad generation." },
      { label: "Automation", detail: "Stripe billing lifecycle, deduplicated transactional email, and two cron-driven engagement sequences." },
    ],
    summary30:
      "A multi-tenant SaaS that runs the business of HOA management firms (pipeline, time, budgets), with four Gemini extraction features that turn messy inputs into clean records, gated behind human confirmation.",
    summary75:
      "ArborKey is the missing business layer for community association management firms: pipeline, time tracking, budgets, and reporting their community-operations platforms don't provide. Its AI is narrow and deliberate: four Gemini features that extract action items from meetings, contacts from board rosters, prospects from business cards, and column mappings from arbitrary CSVs. Every feature is single-turn, type-validated, and gated behind explicit human confirmation, so a trust-sensitive vertical where wrong data drives billing can actually adopt it.",
    intro: [
      "ArborKey is the missing business layer for community association management firms — pipeline, time tracking, budgets, and reporting that the platforms running their communities don't provide for running the management company itself. Its AI is narrow and deliberate: four Gemini features that turn meetings, board rosters, business cards, and arbitrary CSVs into clean records, each single-turn, type-validated, and gated behind explicit human confirmation, so a vertical where wrong data drives billing can actually adopt it.",
    ],
    liveHref: "https://www.arborkeysoftware.com",
    hasDetail: true,
  },
  {
    slug: "healthcare-aio",
    name: "Healthcare AIO",
    title: "AI Visibility Audits for Hospitals",
    tagline: "Why AI search won't cite you, and what to fix.",
    status: "shipped",
    cardDescription:
      "Measures how a healthcare organization appears in ChatGPT, Perplexity, and AI search, identifies the citation gaps, verifies physician data against the federal NPPES registry, and produces implementation-ready recommendations — grounded in real records, not model guesses.",
    problem:
      "Patients increasingly ask AI search engines for provider recommendations, and a hospital that isn't cited is invisible at the moment of intent, with no \"page two\" to inspect.",
    solution:
      "A vertical platform that crawls a provider's site, measures real citation share across AI engines, grounds an LLM diagnostic in federal physician records, and outputs a scored, persona-tailored audit of exactly what to fix.",
    hard:
      "In a domain where a wrong claim about a physician is a liability, the diagnostic had to be grounded — physician facts verified against NPPES with confidence labels, scoring kept deterministic, and a detected bot wall hard-capping the headline score so it can't lie.",
    impact:
      "A working end-to-end engine that turns one URL into a multi-pillar, grounded, persona-tailored audit with provider failover, plus public demo reports usable as real sales collateral.",
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
      "Healthcare AIO tells healthcare providers why AI search engines don't cite them, and what to fix. It crawls the provider's site, measures real citation share across ChatGPT, Perplexity, and Gemini, and runs a multi-provider LLM diagnostic grounded in the federal NPPES physician registry and live citation data. Scoring stays deterministic across three pillars, and a detected bot wall hard-caps the headline score so it can't lie. The output is a scored, persona-tailored, implementation-ready audit report.",
    intro: [
      "Healthcare AIO tells healthcare providers why AI search engines don't cite them and what to fix: it crawls the provider's site, measures real citation share across ChatGPT, Perplexity, and Gemini, and runs a multi-provider LLM diagnostic grounded in the federal NPPES physician registry. Scoring stays deterministic and a detected bot wall hard-caps the headline score so it can't lie — the output is a scored, persona-tailored, implementation-ready audit rather than a dashboard that hands the work back.",
    ],
    hasDetail: true,
  },
  {
    slug: "horizon-data-partners",
    name: "Horizon Data Partners",
    title: "Re-Engagement Platform for Consultants",
    tagline: "Turn finished engagements into the next conversation.",
    status: "client build",
    cardDescription:
      "A dual-portal platform for a boutique data-science consultancy that keeps finished engagements alive — deliverables, collaborative recommendations, and a weighted sales pipeline — so past clients re-engage on their own. The hard part was translation: the brief was \"share files,\" the real job was \"keep me in my clients' orbit.\"",
    problem:
      "A solo expert consultant captures enormous value during an engagement and then loses the relationship the moment it ends, because deliverables decay in an inbox and re-engagement friction kills follow-on deals.",
    solution:
      "A Next.js platform pairing a client portal (deliverables, progress, collaborative recommendations, meeting booking) with an admin operations layer (weighted BD pipeline, encrypted credential vault, delivery boards) that encodes the consultant's tacit re-engagement playbook.",
    hard:
      "The binding constraint was behavioral, not technical — a non-salesperson founder had to actually use the system and clients couldn't feel sold to — so it leans on the IKEA effect (clients co-author the recommendation) and the AI features were deferred until the manual version proved adoption.",
    impact:
      "A deployed multi-tenant platform that systematizes a consultancy's IP — four real statements of work reverse-engineered into a reusable delivery portal, BD pipeline, and an AI-readiness diagnostic product.",
    technology: ["Next.js", "React", "Supabase", "Clerk", "Vercel"],
    ai: [
      { label: "LLMs", detail: "None at runtime today — AI was used during development (v0 scaffolding, Claude-authored content), with runtime LLM features deliberately deferred." },
      { label: "Evaluations", detail: "The AI-ROI diagnostic is itself an evaluation framework — scoring a firm's AI maturity across seven weighted dimensions against anonymized peer benchmarks." },
      { label: "Workflows", detail: "Deterministic business workflows (inbound-lead → pipeline conversion, tier-templated kanban) built as the seams where AI drafting will later plug in." },
      { label: "Roadmap", detail: "Designed-for but not yet built: AI-assisted drafting of insight notes and a retrieval-grounded scoping tool over the past-engagement corpus; the data model was shaped to host them." },
    ],
    summary30:
      "A dual-portal platform that encodes a solo consultant's re-engagement playbook: deliverables, collaborative recommendations, and a weighted BD pipeline, so finished engagements stay alive and past clients return on their own.",
    summary75:
      "Horizon Data Partners delivers high-value engagements, then watches the relationship go cold when they end. This platform productizes the re-engagement motion itself: a client portal holds deliverables, progress, and recommendations the client co-authors, while an admin layer runs a weighted BD pipeline and an encrypted vault. The brief was \"share files with clients\"; the real job, found by reverse-engineering four signed statements of work, was keeping the consultant in their clients' orbit so they re-engage.",
    intro: [
      "Horizon Data Partners delivers high-value engagements, then watches the relationship go cold the moment they end — so this dual-portal platform productizes the re-engagement motion itself: a client portal holds deliverables and recommendations the client co-authors, while an admin layer runs a weighted BD pipeline and an encrypted credential vault. The stated brief was \"give me a place to share files\"; the real job, found by reverse-engineering four signed statements of work, was keeping the consultant in his clients' orbit so the next engagement comes to him.",
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
      "An AI-native platform for a SEC-registered investment adviser that runs marketing, CRM, and institutional-style equity research from one system. AI absorbs the back-office prep — meeting prep, follow-ups, earnings and filing digestion, estimate-revision scanning — but never sends a client message or recommends a trade. Compliance is enforced in the database, not left to process.",
    problem:
      "A solo or small fiduciary RIA faces a fragmented, expensive stack — CRM, spreadsheets, a research analyst — and strict SEC books-and-records obligations that generic SaaS doesn't satisfy.",
    solution:
      "A monorepo of three apps over one compliant data core — marketing and lead flow, an advisor CRM with a read-only client portal, and an equity-research engine — bound by a multi-provider AI router and event-driven workflows that prepare work for the advisor to deliver.",
    hard:
      "Bounding AI inside a fiduciary context meant encoding \"AI prepares, the advisor delivers\" everywhere — no client-facing sends, visible authorship, review-before-commit — and implementing SEC books-and-records controls (append-only audit, soft deletes, access logging) purely at the Postgres and RLS layer.",
    impact:
      "An in-development platform showing a single advisor can run lead-gen, CRM, and institutional-style research from one system at a few hundred dollars a month, with SEC books-and-records controls built in from the start.",
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
      "Reconstructing Wealth is an AI-native system for a solo-founder registered investment adviser, collapsing marketing, an advisor CRM with a read-only client portal, and an equity-research engine into one platform. A provider-agnostic router dispatches tasks across Claude, GPT, and Gemini under cost and latency budgets; eighteen event- and cron-driven workflows handle meeting prep, earnings digestion, and estimate-revision scanning. The governing rule, \"AI prepares, the advisor delivers,\" is enforced alongside SEC books-and-records controls at the database layer.",
    intro: [
      "Reconstructing Wealth is an AI-native system for a SEC-registered investment adviser that collapses marketing, an advisor CRM, and an institutional-style equity-research engine into one platform, where a provider-agnostic router dispatches work across Claude, GPT, and Gemini under per-task cost and latency budgets. The governing rule — \"AI prepares, the advisor delivers\" — is enforced alongside SEC books-and-records controls at the database layer, so AI absorbs the back-office prep but never sends a client message or recommends a trade.",
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
      "A zero-config portfolio builder — multi-tenant auth, billing, file storage, a custom analytics pipeline, and a hardened deploy. The product matters less than the proof: a complete production system shipped by directing AI coding agents, with a clear-eyed sense of where that approach is strong and where it quietly fails.",
    problem:
      "Building production software has traditionally demanded months or years of prerequisite learning before the first real system ships — a slow path when the goal is to deliver, not to credential.",
    solution:
      "A real multi-tenant SaaS — auth, billing, storage, a custom analytics pipeline, SEO, and a hardened deploy — built end to end by directing AI coding agents rather than via the conventional learn-then-build path.",
    hard:
      "Without a formal engineering background, the binding skill was verification — learning enough of each concept (webhooks, RLS, serverless lifecycles, billing state) to catch confident-but-wrong agent output before it shipped.",
    impact:
      "A production system on Vercel, Supabase, and Clerk with ~70 users and thin retention — an honest product-market-fit miss whose real return was demonstrated fast self-direction on a new stack, which converted into a first paid software-build engagement.",
    technology: ["Next.js", "Supabase", "Clerk", "Vercel", "Cursor"],
    ai: [
      { label: "LLMs", detail: "None in the product — there is no model provider in the dependency tree. This system was built with AI, not powered by it." },
      { label: "Agents", detail: "AI coding agents drove the build — ChatGPT for planning, then a deliberate move to Cursor's agentic workflow for repo-aware development. The AI lives in the development process, not the runtime." },
      { label: "Evaluations", detail: "The lived discipline of verifying agent output — catching hallucinated APIs, missing routes, and unsafe defaults — was the project's core skill, and where AI-assisted development quietly fails without it." },
    ],
    summary30:
      "A complete multi-tenant SaaS (auth, billing, storage, analytics, hardened deploy) built end-to-end by directing AI coding agents, proving fast self-direction on an unfamiliar stack and where agentic development quietly fails.",
    summary75:
      "WorkPortfolio.io is a zero-config portfolio builder, but the real artifact is how it was built. A complete, multi-tenant SaaS: auth, billing, file storage, a custom analytics pipeline, SEO, and a hardened deploy, shipped by directing AI coding agents rather than coding the conventional way. The product itself missed product-market fit; its lasting value was proving fast self-direction on an unfamiliar stack and a firsthand sense of where agentic development is powerful and where it fails.",
    intro: [
      "It's better to show your work than to talk about it — to ship a product instead of taking a course. WorkPortfolio.io lets anyone do that simply, posting a portfolio project in the time it takes to write a LinkedIn post.",
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
      "A Catholic family formation app, built with Helene. Liturgical calendar, family rule of life, and the small daily rhythms that hold a family together. Building it for our seven kids first.",
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
