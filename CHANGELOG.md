<!--
Add a new date at the top when a change ships.
Under that date, use Added, Changed, or Fixed.
Write what a person using Atlas can do now.
-->

## 27 September 2026

### Added

- Screen composition. A request to compose a screen can use the project's design system, existing codebase primitives, or clearly marked industry-standard assumptions.

### Changed

- Design-system gaps can be handed off in a project-root `DESIGN_GAPS.md` register for technical triage, with unresolved decisions marked Pending.
- Install and clone URLs use the `ajdcabrera-design` GitHub org. `npm install github:ajdcabrera-design/ux-atlas` is the documented install.

### Fixed

- `npx ux-atlas brief` now runs correctly through npm's executable shim.

## 26 September 2026

### Added

- A changelog. Newest changes are listed on the Changelog page.
- A brief skill you add after the package install, with `npx ux-atlas brief`. It puts the brief in the project and tells AGENTS.md to read it first. The package itself does not include the brief.
- A choice on the project-folder download to include the brief skill, or to leave it out.
- Information architecture. A request about where something lives uses that skill and does not start the design pipeline.
- User flow. A request about the path, the happy path, or what happens when something fails uses that skill and does not start the design pipeline.
- Evidence. A request to ground a decision in what you know — numbers, customer notes, or the market — uses that skill and does not start the design pipeline.

### Changed

- After a skill would execute, implement, or change the interface or the flow, the agent asks before it changes the product. The size of the change does not matter.
- When the agent needs a yes-or-no style decision, it presents one Choice: a host picker when the host has one, or a typed Choice block when it does not — never both at once.
- In the design pipeline, Structure runs user flow and then information architecture.
- In the design pipeline, Learn and Benchmark are one Evidence move that calls the evidence skill.
- In the design pipeline, Define sets a product class when it changes what Structure prioritizes. If the class is obvious, the agent records it without stopping to ask.
- UX Writing settles voice and tone (default plain and direct when unknown), writes interface strings, and can audit copy across a project. It does not invent a brand voice or generate marketing assets.
- Small asks stay small. The agent reads only matching skill descriptions, does not preload every skill, and does not start the design pipeline for a copy-only, flow-only, IA-only, or evidence-only request.
- Choice and Confirmation stay in the constitution. Other skills point there instead of restating the full stop.

## 24 September 2026

### Added

- Install the package. The install points AGENTS.md and CLAUDE.md at the skills in node_modules.
- Design systems for Material 3, Carbon, and Spectrum. Each one downloads as DESIGN.md.
- Download a project folder.
- The design pipeline. When you ask the agent to decide, the pipeline keeps going.

### Changed

- The folder file downloads from /download/zip. The download page stays a page.

## 23 September 2026

### Added

- The UX Constitution.

### Changed

- The skills you install are separate from this site. The site is the preview.

## 22 September 2026

### Added

- This site, at atlas.aarondesign.rocks.
