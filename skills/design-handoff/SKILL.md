---
name: design-handoff
description: Write the handoff spec for an accepted design, the file engineering builds from in place of a mockup. Covers flow, layout, components and states, copy, interaction, motion, and tokens, all by reference to the design system. Use at the design pipeline's Record after Surface is accepted, or when the partner asks to hand off, spec, or package accepted design work for engineering. It assembles accepted work and decides nothing. Do not use to design, to write user stories or acceptance criteria, to write code, or when nothing has been accepted. A handoff-only request does not start the design pipeline.
triggers:
  - "handoff"
  - "hand off"
  - "design spec"
  - "developer handoff"
  - "spec for engineering"
  - "package the design"
excludes:
  - "copy-only"
  - "flow-only"
  - "IA-only"
  - "evidence-only"
  - "direction-only"
  - "user story"
  - "acceptance criteria"
tokenBudget:
  summary: 45
  body: 1100
metadata:
  updated: "2026-10-04"
  updatedBy: Aaron Cabrera
---

Write what engineering needs to build an accepted design. The constitution judges the interface. This skill packages the accepted work. If they conflict, the constitution wins.

The spec replaces the mockup, not the user story. It says what the thing is. The project's own process says what must be true and how to build it. `design-record` keeps why. This skill decides nothing.

## When to run

- The design pipeline reached Record after an accepted Surface. Run after `design-record` takes its entries.
- The partner asks to hand off, spec, or package design work accepted in this conversation. Run this skill. Do not start the design pipeline.
- The accepted work is not in this conversation. Say what is missing and stop. `.atlas/decisions.md` alone is not enough to write a spec.
- Do not run during Frame, Define, Scope, Structure, Check, or Surface. Do not run when nothing was accepted.

## The file

`.atlas/handoff/<at>-<slug>.md` at the project root. One file per run. `<at>` is UTC, `YYYY-MM-DDTHH-MMZ`. `<slug>` is three to five words from the job. Screens that serve the same job share the file.

Never edit or delete an earlier file. A new run for the same job writes a new file and names the earlier one in `supersedes`. The latest file for a job is the current one. Do not update a spec to match the code after it is built. The code is then the truth.

The spec is not a product change. Consent follows `record` in `.atlas/config.json`.

- `on`: write. Say in one line what was written.
- `ask`: the record choice in this run covers this file. Do not ask a second time. When the partner asked for the handoff directly, that request is the consent.
- `off`: keep the spec in the reply.

## Header

```yaml
handoff: <slug>
job: <the job, in the partner's words>
at: <ISO 8601 UTC>
run: <design-record run id, or none>
supersedes: <earlier handoff file for this job, or none>
design_source: DESIGN.md@<short hash> | codebase:<where> | none
open: <count of Open lines>
assumed: <count of Assumed lines>
```

## Sections

Use these headings, with these names, in this order. Keep every heading. A heading with no accepted work holds one line: `Open: not decided.`

```
## Flow
Entry, main path, empty, error, cancel or leave, exit. Then pages, steps, and navigation.

## Screen: <name>            (repeat per screen)
### Layout
Regions in reading order: region, what it serves, landmark. Narrow first, then what changes when wide.
### Components
Element → component, variant. Then region, state → variant.
### Copy
Each string with its job, exact text.
### Interaction
Control → what happens → where focus goes.
### Motion
What moves, on what trigger, with which motion token.

## Tokens
The token names this spec uses, grouped by kind.

## Open
Each Open and Assumed line from above, in one list. Gaps by their key in DESIGN_GAPS.md.
```

Copy the flow, the places, the composition, and the strings from what `structure`, `screen-composition`, and `ux-writing` handed back. Keep their wording.

Interaction and Motion hold only what the accepted work states. Behavior the spec does not list follows `ux-constitution`. Say that once, under Interaction. Do not copy its rules.

## Rules

- **Assemble.** Every line comes from accepted work. If the accepted work does not say it, the line is Open. Do not fill it in.
- **Reference, never restate.** Name tokens and components exactly as the design source does. Do not write a raw color, size, or spacing value. Point at a gap by its key and at a decision by its run and id.
- **Mark status.** An unmarked line is accepted. Start a line with `Assumed:` when the accepted work marked it assumed. Start it with `Open:` when it is not decided.
- **No why.** No reasons, no rejected alternatives, no history. Those live in the design record.
- **No how.** No code, file paths, framework names, tasks, estimates, or test methods.
- **No picture.** No mockup, wireframe, or drawn layout.
- **Keep it short.** Lists and single lines. No paragraphs.

## No design source

When `design_source` is `none`, add one line under the header: `Visual direction is not specified. Components and tokens are industry defaults, Assumed.` Do not describe a visual style to make up for it.

## Automated triggers

When the run's `trigger.kind` is `factory`, no partner is present. Write without a choice. A line only the partner could settle is `Assumed:` and ends with `unreviewed`.

## After writing

Say in one line where the file is, and how many lines are Open and Assumed.

During the design pipeline, hand back to the pipeline for the constitution's choice before any product change. On its own, stop after that line. Do not change the product.
