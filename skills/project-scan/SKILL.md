---
name: project-scan
description: Check what the project already has before a design decision, and whether an earlier handoff was built. Covers screens and routes, components and their variants, tokens, recurring patterns, and handoff status, read from the codebase one area at a time. Keeps short area notes stamped with file hashes, so a later run or a fresh conversation reuses them and re-reads only what changed. Use when the design pipeline reaches Scope, when a narrower skill needs to know what exists, or when the partner asks what already exists, what to reuse, or whether a handoff was implemented. Do not use for copy-only asks, user or market research, a quality review, or to write code. It reports what exists and decides nothing.
triggers:
  - "what already exists"
  - "already built"
  - "existing components"
  - "existing pattern"
  - "what can we reuse"
  - "scan the project"
  - "scan the codebase"
  - "was it implemented"
  - "is the handoff built"
  - "implementation drift"
excludes:
  - "copy-only"
  - "evidence-only"
  - "direction-only"
  - "review-only"
  - "rename"
  - "design"
  - "write code"
tokenBudget:
  summary: 35
  body: 1050
metadata:
  updated: "2026-10-18"
  updatedBy: Aaron Cabrera
---

Find what the project already has, so a design decision reuses it or knows why not. This skill reports what exists. The skill that asked decides what to do with it. The constitution judges the interface.

## When to run

- The design pipeline reaches Scope. Run once for the job's area, before drafting Scope. Structure and Surface reuse the result. Surface scans again only for components or tokens the result does not cover.
- A narrower skill needs what exists, and this run has no current note for its area.
- The partner asks what exists, what to reuse, or whether a handoff was built. Run this skill alone. Do not start the design pipeline.
- Not for copy-only asks, a project with no interface code, or a review of interface quality (`interface-review`).

One scan per area per run. Never scan the whole project to be safe.

## Files

All at the project root, under `.atlas/scan/`. These are a cache, not the design record.

- `index.md` — the structural index, from `npx ux-atlas scan`. It lists components, props, variants, token names, and routes, with a hash per file. Search it. Never read it whole. If the command is unavailable, skip it and search the source directly.
- `areas/<area>.md` — one note per area, written by this skill.
- `handoffs.md` — one line per handoff file and its status.

Write without a choice. A cache write is not a product change and not a record write. Say in one line what was written. When `.atlas/config.json` has `"scan": "off"`, write nothing and keep the findings in the reply.

## Scan

1. Name the area: the job, screen, or flow the asking skill needs.
2. Read `areas/<area>.md` if it exists. Check each listed hash against the file now, with `git hash-object` or the index. A matching note is current. Trust it and do not reread its files.
3. Reread only files whose hash changed, and replace the lines they support.
4. When the note does not cover what the asker needs, search the index or the source for it. Open only the files that answer. Follow imports one level to the shared component, not further.
5. Update the note.

Look for these, and only where the asker needs them:

- Screens and routes that serve the job, and what each shows.
- Components the job could reuse, with variants and states. The design source names them. Name the file the code uses.
- Tokens the code uses for the area, by name.
- The same need solved elsewhere in the project, and where. Name every copy when the pattern is duplicated.
- Where the code departs from `DESIGN.md`, when one exists.

## Area note

At most 12 lines. Facts about what exists, never opinions about a task.

```
# <area>
scanned: <ISO 8601 UTC> · head: <short commit or none>
covers: <what this note can answer>
files: <path>@<8-char hash>, …
- <fact> (<path>:<line>)
```

Do not copy code or values. A fact you did not check is not in the note.

## Handoff status

Check a handoff when the partner asks, or when a run touches the job of a handoff in `.atlas/handoff/` that `handoffs.md` lists as unchecked or stale.

For each heading of the spec, mark one: Built, Drifted, Missing, or Not checked. Give `path:line` for each mark. Drifted names what the code does in place of the spec. Then list each Open or Assumed line the project has since settled, and where.

```
<handoff file> | <status> | checked: <ISO> | drift: <count> | files: <path>@<hash>, …
```

The status is the worst mark. Never edit the handoff. When the spec should change, that is a new design run. A design-system gap stays with the skill that keeps gaps.

## Hand back

- Already solved: yes, partial, or no, with where.
- Reuse: each item, with path.
- Tokens and rules: what applies to the area.
- Departures: where the code differs from `DESIGN.md` or a handoff.
- Not checked: what this scan left out.

When this skill is used on its own, stop after the handback. Do not change the product. During the design pipeline, hand the result to the stage that called it.
