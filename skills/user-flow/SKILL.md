---
name: user-flow
description: Decide how someone finishes one job. Covers the main success path, branches, empty and error recovery, cancel, and exit. Use when the prompt asks for a flow, path, steps in order, happy path, or what happens when something fails, and does not ask to design the screen. During a design pipeline, apply only in Structure. A flow-only request does not start the design pipeline.
triggers:
  - "flow"
  - "path"
  - "happy path"
  - "steps in order"
  - "what happens when"
  - "cancel"
  - "exit"
  - "error recovery"
  - "user journey"
excludes:
  - "copy-only"
  - "IA-only"
  - "evidence-only"
  - "direction-only"
  - "screen design"
  - "layout"
  - "component"
tokenBudget:
  summary: 45
  body: 750
metadata:
  updated: "2026-10-02"
  updatedBy: Aaron Cabrera
---

Decide how someone finishes one job. The constitution judges the interface. This skill decides the path. If they conflict, the constitution wins.

Information architecture names places. UX Writing names controls. This skill names the path through the job. A `DESIGN.md` at the project root may set terminology. Follow it for the names of steps. Do not import a pattern from a design system that does not state one. Do not write a journey map, an emotion timeline, or a service blueprint.

## When to run

- The request only asks for a flow, a path, ordered steps, a happy path, or what happens when something fails, and does not ask to design the screen. Run this skill. Do not start the design pipeline.
- The design pipeline is in Structure. Name the job, the main success path, the extensions, and the exit. Do not write control copy. Do not specify visual style or component anatomy.
- Do not run during Frame, Define, Scope, Check, or Surface unless the partner asked for the path in that turn.

Ask one question, and only if two jobs would produce different paths. Otherwise use the partner's job and state that assumption. Do not invent a quote, a persona, or a metric.

## One job

One flow serves one job the person is trying to finish.
- Name the job in the partner's words.
- Keep steps that serve that job. Cut steps that only show the product.
- Do not merge two jobs into one path. Split them into two flows.
- Do not tour every place in the product. That is not a task flow.

## Main success path

Write the happy path as numbered steps at the level of intention.
- Each step is what the person is trying to do: "Confirm the email", not "Click Continue".
- Each step makes the next action obvious, and shows what happened before the next step starts.
- Keep only the steps required to finish. Prefer one continuous path over a long chain of screens when the job is short.
- Split into more steps only when the job is long, risky, or mixes unrelated decisions. The constitution owns how many choices fit in one step.
- UX Writing still names the buttons and messages. Information architecture still names the places.

## Extensions

Name what happens off the happy path. Keep each extension short.
- Empty: nothing is there yet, and what starts the path.
- Error: what failed, how they fix it, and where they rejoin the main path.
- Cancel or leave: how they exit without finishing, and what is kept or discarded.
- Alternate success: another way to finish the same job, only when the partner needs it.
- Do not invent edge cases the partner did not ask for. Do not end an extension in a dead end with no way back or out.

## Entry and exit

- Say where the path starts. Prefer one clear entry for the job.
- Say where the path ends when it succeeds. The end states the outcome and the next step when there is one.
- Every unwanted state has a way out. The constitution owns Cancel, Undo, and irreversible confirm.

## What to hand back

Flow-only, or the pipeline's Structure stage:

- Job: …
- Entry: …
- Main path: 1. … 2. … 3. …
- Empty: …
- Error: …
- Cancel or leave: …
- Exit: …
- Alternate success: …, only when one exists

Name the path you rejected in one line. Do not draw the screen.

When this skill is used on its own, stop after the path. Do not change the product. The constitution asks before any change. During the design pipeline, hand the path to that stage and do not ask to implement here.
