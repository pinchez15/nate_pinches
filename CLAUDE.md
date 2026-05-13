@AGENTS.md

# CLAUDE.md — natepinches.com

This is the personal site for Nate Pinches at natepinches.com. Single-scroll, editorial-operator aesthetic. Next.js + Tailwind v4 + TypeScript.

## Design System

Always read `DESIGN.md` before making any visual or UI decisions. All font choices, colors, spacing, and aesthetic direction are defined there. The narrative source brief lives at `~/.gstack/projects/nate_pinches/briefs/2026-05-13-design-brief.md` — read it for the *why* behind any token.

Do not deviate from `DESIGN.md` without explicit user approval. In QA mode, flag any code that does not match `DESIGN.md`.

The anti-patterns section in `DESIGN.md` is binding. If a request implies one of them (testimonial carousel, logo wall, hero CTA, contact form, etc.), surface the conflict before implementing.

## Voice

First-person, plainspoken, specific. No "passionate about," no "I help X do Y," no founder-LinkedIn voice. Every copy claim needs a number or a name behind it or it gets cut.

## Sibling brand

CappaWork is Nate's studio. natepinches.com is the operator's notebook. The split is felt, not declared. Never write "I'm separate from CappaWork." CappaWork appears as the first project in the work section, treated like the others (with more prominence). See `project-cappawork-context` in memory.
