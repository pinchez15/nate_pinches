import { work } from "@/content/work";
import { WorkCard } from "@/components/WorkCard";

const proofPoints: { value: string; line1: string; line2: string; lead?: boolean }[] = [
  {
    value: "5×",
    line1: "profit improvement",
    line2: "$1.5M → $1.8M revenue · $45K → $225K profit",
    lead: true,
  },
  {
    value: "$2B+",
    line1: "strategy work",
    line2: "Fortune 500 and FDA-regulated industries",
  },
  {
    value: "7",
    line1: "products shipped",
    line2: "health, recruiting, B2B, consumer",
  },
  {
    value: "12 mo",
    line1: "building agentic systems",
    line2: "full-time, since 2025",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen text-ink">
      {/* Container — left-anchored, asymmetric, generous left inset on desktop */}
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-20 xl:px-28">

        {/* Hero ----------------------------------------------------------- */}
        <section className="pt-28 pb-24 sm:pt-36 sm:pb-32 lg:pt-44 lg:pb-40">
          <p className="label mb-10">Nate Pinches</p>
          <h1
            className="font-display text-display-xl text-ink"
            style={{ maxWidth: "20ch" }}
          >
            I believe work is{" "}
            <span className="text-accent">good</span>. Man was made to work
            <span className="text-ink-faint"> — </span>
            and through it, we{" "}
            <em className="italic">become</em> who we ought to be.
          </h1>
          <p className="mt-10 max-w-xl text-body-lg text-ink-soft leading-relaxed">
            Strategy, analytics, and software for founder-led service
            businesses doing $3–10M.
          </p>
        </section>

        {/* Proof strip ----------------------------------------------------- */}
        <section className="border-t border-ink-faint/40 pt-14 pb-24 sm:pb-32">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4 lg:gap-x-10">
            {proofPoints.map((p) => (
              <li key={p.value} className="flex flex-col gap-4">
                <span
                  className={`proof-num text-proof leading-none block ${
                    p.lead ? "text-accent" : "text-ink"
                  }`}
                >
                  {p.value}
                </span>
                <span className="block font-mono text-meta uppercase text-ink-muted">
                  {p.line1}
                </span>
                <span className="block font-mono text-[0.75rem] text-ink-muted/85 leading-snug">
                  {p.line2}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Background ------------------------------------------------------ */}
        <section className="border-t border-ink-faint/40 pt-14 pb-24 sm:pb-32">
          <h2 className="label mb-10">Background</h2>
          <div className="max-w-xl space-y-6 text-body-lg text-ink-soft leading-relaxed">
            <p>
              My career has been shaped, in no small part, by my wife{" "}
              <span className="text-ink">Helene</span>. She’s a doctor in the
              Navy — her postings have taken us across the world, and each new
              city marked a new pivot. Clinical research at{" "}
              <span className="text-ink">Harvard</span>. Management consulting
              for the federal government. Product development at{" "}
              <span className="text-ink">CVS</span>. Software sales, remote.
              The full launch of CappaWork in Japan.
            </p>
            <p>
              The unusual stack is{" "}
              <em className="font-display italic text-ink">
                strategy, analytics, change management, and shipping software
              </em>
              . Most operators have one or two of those. Few have all four in
              working order.
            </p>
            <p className="text-ink-muted">
              Good work needs good habits. Good habits become virtues. That’s
              the through-line.
            </p>
          </div>
        </section>

        {/* Work ------------------------------------------------------------ */}
        <section
          id="work"
          className="border-t border-ink-faint/40 pt-14 pb-24 sm:pb-32"
        >
          <h2 className="label mb-12">My Work</h2>
          <ul className="grid grid-cols-1 gap-x-12 gap-y-14 sm:grid-cols-2">
            {work.map((project, i) => (
              <WorkCard key={project.slug} project={project} index={i} />
            ))}
          </ul>
        </section>

        {/* Contact --------------------------------------------------------- */}
        <section className="border-t border-ink-faint/40 pt-14 pb-32 sm:pb-44">
          <h2 className="label mb-10">Get in touch</h2>
          <ul className="flex flex-col gap-4 font-mono text-base text-ink">
            <li>
              <a href="mailto:nate@cappawork.com" className="link">
                nate@cappawork.com
              </a>
            </li>
            <li>
              <a
                href="https://natepinches.substack.com/"
                target="_blank"
                rel="noreferrer"
                className="link link-arrow"
              >
                Substack
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/natepinches/"
                target="_blank"
                rel="noreferrer"
                className="link link-arrow"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </section>

        {/* Footer mark ----------------------------------------------------- */}
        <footer className="border-t border-ink-faint/40 py-10 font-mono text-meta uppercase text-ink-muted">
          <span>© Nate Pinches</span>
        </footer>
      </div>
    </main>
  );
}
