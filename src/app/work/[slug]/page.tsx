import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, workWithDetail } from "@/content/work";

export const dynamicParams = false;

export function generateStaticParams() {
  return workWithDetail.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const title = `${project.name} — Nate Pinches`;
  return {
    title,
    description: project.summary30,
    openGraph: {
      title,
      description: project.summary30,
      url: `https://natepinches.com/work/${project.slug}`,
      type: "article",
    },
  };
}

function Field({ label, children }: { label: string; children: string }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="label">{label}</span>
      <p className="max-w-2xl text-body-lg leading-relaxed text-ink-soft">
        {children}
      </p>
    </div>
  );
}

export default async function WorkDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen text-ink">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-20 xl:px-28">
        {/* Top nav back to the work grid */}
        <div className="pt-16 sm:pt-20">
          <Link href="/#work" className="link font-mono text-meta uppercase text-ink-muted">
            ← Work
          </Link>
        </div>

        {/* Hero ----------------------------------------------------------- */}
        <header className="pt-10 pb-16 sm:pt-12 sm:pb-20">
          <p className="label mb-6">{project.status}</p>
          <h1 className="font-display text-display-lg text-ink" style={{ maxWidth: "18ch" }}>
            {project.name}
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg leading-relaxed text-ink-soft">
            {project.tagline}
          </p>
          {project.liveHref && (
            <p className="mt-8">
              <a
                href={project.liveHref}
                target="_blank"
                rel="noreferrer"
                className="link link-arrow font-mono text-meta uppercase text-ink-muted"
              >
                Visit site
              </a>
            </p>
          )}
        </header>

        {/* Narrative ------------------------------------------------------ */}
        <section className="border-t border-ink-faint/40 pt-14 pb-20 sm:pb-24">
          <div className="max-w-2xl space-y-6 text-body-lg leading-relaxed text-ink-soft">
            {project.intro.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {/* At a glance ---------------------------------------------------- */}
        <section className="border-t border-ink-faint/40 pt-14 pb-20 sm:pb-24">
          <h2 className="label mb-10">At a glance</h2>
          <div className="flex flex-col gap-10">
            <Field label="Problem">{project.problem}</Field>
            <Field label="Solution">{project.solution}</Field>
            <Field label="Why it was hard">{project.hard}</Field>
            <Field label="Impact">{project.impact}</Field>
          </div>
        </section>

        {/* AI components -------------------------------------------------- */}
        {project.ai.length > 0 && (
          <section className="border-t border-ink-faint/40 pt-14 pb-20 sm:pb-24">
            <h2 className="label mb-10">AI components</h2>
            <ul className="flex max-w-2xl flex-col gap-5">
              {project.ai.map((c) => (
                <li key={c.label} className="flex flex-col gap-1">
                  <span className="font-mono text-meta uppercase text-ink-muted">
                    {c.label}
                  </span>
                  <p className="text-base leading-relaxed text-ink-soft">
                    {c.detail}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Technology ----------------------------------------------------- */}
        {project.technology.length > 0 && (
          <section className="border-t border-ink-faint/40 pt-14 pb-20 sm:pb-24">
            <h2 className="label mb-6">Technology</h2>
            <p className="font-mono text-base text-ink-muted">
              {project.technology.join("  •  ")}
            </p>
          </section>
        )}

        {/* Footer back link ---------------------------------------------- */}
        <footer className="border-t border-ink-faint/40 py-10">
          <Link href="/#work" className="link font-mono text-meta uppercase text-ink-muted">
            ← Back to all work
          </Link>
        </footer>
      </div>
    </main>
  );
}
