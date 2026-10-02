---
name: design-record
description: Keep the project's living design record and the DESIGN_GAPS.md register. Use when another Atlas skill hands back Decided, Assumed, Rejected, Return, Skipped, or system gap lines; at the design pipeline's Record; or when the partner asks for the decision history, the open gaps, or why something was decided. Covers the run log, active decisions, gap keys, gap resolution and pruning, and automated triggers. Do not use for a change that produced no decision, assumption, or gap. Never invent a decision, an actor, or a reason. There is no exemption.
triggers:
  - "record"
  - "decision history"
  - "open gaps"
  - "design gaps"
  - "why decided"
  - "persist decisions"
excludes:
  - "copy-only"
  - "flow-only"
  - "IA-only"
  - "evidence-only"
  - "direction-only"
  - "design"
tokenBudget:
  summary: 40
  body: 1000
metadata:
  updated: "2026-10-02"
  updatedBy: Aaron Cabrera
---

Keep what Atlas decided, assumed, and could not resolve, so the next run starts from it. This skill owns where the record lives and how it changes. The skill that made the decision owns what it says. The constitution owns the choice before any file is written.

## Files

All paths are at the project root.

- `.atlas/runs/<at>-<slug>.md` — one file per trigger. Append only. `<at>` is UTC, `YYYY-MM-DDTHH-MMZ`. `<slug>` is three to five words from the trigger summary.
- `.atlas/decisions.md` — active decisions only, one line each, grouped by area.
- `DESIGN_GAPS.md` — open gaps only.
- `.atlas/config.json` — `record` is `on`, `ask`, or `off`. A missing file or key means `ask`.

Do not write anywhere else. Do not copy the record into the product's source files.

## When to write

Write only when the turn produced at least one entry below. A change with none writes nothing.

- Guided pipeline: append each stage the partner accepted, at that stop.
- Express pipeline: append once, at Record.
- A narrower skill on its own: append once, after its handback.

Consent follows `record`.

- `on`: write without a choice. The record is not a product change. The constitution's Confirmation does not apply. Say in one line what was written.
- `ask`: use the constitution's Confirmation choice once per run, after the work. Options: "Write to the design record" and "Leave it in this reply." Accepting covers the rest of this run.
- `off`: write nothing. Keep the entries in the reply.

During the design pipeline, hold entries until the pipeline's Record. Do not offer a second choice in that turn.

## Run header

Write once, when the run file is created.

```yaml
run: r-<YYYYMMDD>-<HHMM>-<3 chars>
at: <ISO 8601 UTC>
trigger: { kind: human | factory, ref: <PR, ticket, or "prompt">, summary: <one line> }
mode: guided | express | standalone
entry: <stage or skill>
design_source: DESIGN.md@<short hash> | codebase:<where> | none
```

The summary paraphrases the request. Do not paste the prompt. Do not record secrets or personal data.

## Entries

One line per entry. At most about 200 characters.

```
<id> | <stage or skill> | <kind> | <by> | <statement> [| why: …] [| rejected: …] [| supersedes: <run>/<id>]
```

- `id`: `D` decided, `A` assumed, `X` rejected, `R` return, `S` skipped, `G` gap, numbered within the run.
- `kind`: Decided, Assumed, Rejected, Return, Skipped, Gap open, Gap closed.
- `by`: `partner`, `agent`, or `factory`. Partner means the partner accepted or said it in this conversation.
- `why` and `rejected` only on Decided and Rejected. One clause each.
- `supersedes` when the entry replaces an earlier decision.

Do not write a transcript. Do not log Frame restatements, questions, or work that the partner corrected before accepting.

## Automated triggers

When `trigger.kind` is `factory`, no partner is present.

- A decision only the partner could make is Assumed, `by: factory`, and ends with `unreviewed`.
- Do not mark anything Decided by partner.
- Do not triage a gap.

## Active decisions

After appending, update `.atlas/decisions.md`.

- Add each Decided entry as `<area>: <statement> (<run>/<id>)`.
- Remove the line an entry supersedes.
- Keep Assumed entries that are still in force, marked Assumed.
- When the file passes about 50 lines, fold the oldest lines of one area into a single line that links their runs.

## Gaps

A narrower skill finds a gap when the design source has no token, component, state, or breakpoint for something it needs. This skill keeps it.

### Key

Each gap has a stable key: `gap:<token|component|state|breakpoint|source>:<name>`. Example: `gap:state:Dialog.destructive`. The same missing thing keeps the same key. Update it. Do not add a second entry.

With no design source, record one gap, `gap:source:none`. While it is open, record no other gaps.

### Entry in DESIGN_GAPS.md

- Key
- Found by: run, skill, and stage
- Area: the screen, flow, or component it affects
- Gap and impact
- Assumed: the interim value, or `None`
- Triage: Pending, Extend the design system, or Accept as known gap
- Owner: a person or team, or `Unassigned`
- Revisit when: the trigger, or `TBD`

New gaps are Pending unless the partner triages them. Do not choose for the project.

### Resolve before writing

Before a run writes, read the open gaps whose area overlaps this run's scope. Do not read the rest. Close a gap when one of these is true.

- Resolved: the design source now has it. `gap:source:none` closes when `DESIGN.md` exists.
- Superseded: a decision in this run removed the need. Name that decision.
- Withdrawn: Scope cut the area it belongs to.

Closing removes the entry from `DESIGN_GAPS.md` and appends a Gap closed line with the reason to the run. Do not delete history. If you cannot tell whether a gap still applies, keep it open and say so.

## Reading the record

At the start of a design pipeline or a narrower skill that may record, read `.atlas/decisions.md` and the overlapping open gaps. Do not read `.atlas/runs/` unless the partner asks for history. Treat an active decision as accepted until the partner changes it. Name it when it settles a question you would otherwise ask.