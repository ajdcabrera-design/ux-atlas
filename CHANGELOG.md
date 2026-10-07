<!--
Add a new date at the top when a change ships.
Under that date, use Added, Changed, or Fixed.
Write what a person using Atlas can do now.
-->

## 7 October 2026

### Changed

- Structure. User flow and Information architecture are now one skill. A request for a path gets the path, a request for where something lives gets the map, and the design pipeline uses both.
- The UX Constitution is one skill again. The edge cases from the Extended constitution now sit in the sections they belong to.
- Express is part of the Design Pipeline. Say "express", "fast track", or "you decide" to get the remaining stages in one response. The separate Fast pipeline and its three-stop path are gone.
- The project instructions list every skill on one line, so an agent picks a skill without opening skill files first.
- The confirmation rule and the Choice block are in the project instructions. A small copy or flow change no longer loads the constitution to ask before it changes the product.
- The site groups skills as Foundations, Process, and Disciplines. Skill page addresses changed with the groups.

### Fixed

- The install steps now include `npx ux-atlas init`. npm 12 and later do not add the pointer to AGENTS.md and CLAUDE.md during the install, so a fresh install left the agent with nothing to follow.
- The project instructions no longer point at a constitution file that does not exist when the UX Atlas repository is the project root.
- The design record is written once per pipeline run, at Record, or earlier when you ask for it. The skill used to say both that and "at each accepted stage".
- UX Writing no longer claims a part in the pipeline's Structure stage. Structure names the empty, error, and exit states there, and UX Writing writes the strings in Surface.

## 4 October 2026

### Added

- Design handoff. After a design is accepted, Atlas can write a handoff spec for engineering in `.atlas/handoff/`, one timestamped file per run. It covers flow, layout, components and states, copy, interaction, motion, and tokens by reference to the design system, and marks anything not decided as Open.

### Changed

- The design pipeline, guided and fast, writes the handoff spec after the design record. The same `record` setting controls both, with no second prompt.
- New installs get a `.atlas/README.md` that says where handoff specs live.
- When a run writes both the design record and the handoff, the record choice reads "Write the record and handoff".

### Fixed

- The AGENTS.md and CLAUDE.md in the project-folder download point at the current constitution skills and include the core thresholds.
- Requests to hand off a design that mention implementing it now load the handoff skill.
- Files in the project-folder download open with command-line `unzip` and other tools.

## 3 October 2026

### Fixed

- Stage proposals that need partner acceptance appear before their choice control. Atlas uses an inline Choice block for these work-dependent decisions instead of invoking a host picker.

### Changed

- The design pipeline's stage descriptions are reorganized around routing, resuming, and running the stages, replacing a separate "visible work before choice" section with the constitution's own choice rule.

## 2 October 2026

### Added

- The Design Pipeline (Fast). Experienced partners can opt into a three-stop Express path: Frame, Structure, and Surface. Guided remains the default.
- The UX Constitution (Core) and UX Constitution (Extended). Interface work gets concise foundational rules, with advanced cases available when needed.

### Changed

- Accepting a guided design decision now starts the next open stage in the same response.
- Skill routing now uses explicit triggers, exclusions, and token budgets so focused requests can use a narrower skill without loading unrelated guidance.
- Project instructions include the core UX thresholds and point to the extended constitution for edge cases.
- The optional brief skill is gone, with `npx ux-atlas brief` and the brief choice on the project-folder download. An install removes the old brief line from AGENTS.md and CLAUDE.md.
- The design pipeline's Check judges against the accepted Frame and Define, not a hidden prompt.

## 1 October 2026

### Added

- Product direction. Open-ended product asks can compare and choose an overall direction before framing the problem.
- Design record. Decisions, assumptions, trade-offs, and open design-system gaps can persist as a bounded living record, with `ask` as the default write setting.

### Changed

- The design pipeline starts with product direction when the kind of product, its audience, or the desired change is unsettled. A chosen direction is the accepted Frame.
- Screen composition applies only after both the user flow and information architecture are settled.
- The design pipeline hands accepted decisions and system gaps to the design record instead of maintaining a separate gap-only lifecycle.

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
