---
name: structure
description: Decide how someone finishes one job and where things live. Covers the path (main success path, branches, empty and error recovery, cancel, exit) and the map (pages, steps, sections, navigation labels). Use when the prompt asks for a flow, path, steps in order, happy path, or what happens when something fails, or asks to organize, group, place, or name the structure, and does not ask to design the screen. A request for the path or the map gets only that part. During a design pipeline, apply only in Structure. A flow-only or structure-only request does not start the design pipeline.
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
  - "organize"
  - "group"
  - "place"
  - "name the structure"
  - "navigation"
  - "page structure"
  - "section"
  - "where does"
  - "IA"
  - "information architecture"
excludes:
  - "copy-only"
  - "evidence-only"
  - "direction-only"
  - "screen design"
  - "layout"
  - "component"
tokenBudget:
  summary: 60
  body: 1300
metadata:
  updated: "2026-10-09"
  updatedBy: Aaron Cabrera
---

Decide how someone finishes one job, and where things live. The constitution judges the interface. This skill decides the path and the map. If they conflict, the constitution wins.

The path is how the person gets through the job. The map is the places the job happens in. UX Writing names controls. A `DESIGN.md` at the project root may set terminology. Follow it for the names of steps and places. Do not import a flow or a navigation pattern from a design system that does not state one. Do not write a journey map, an emotion timeline, or a service blueprint.

## When to run

- The request only asks for a flow, a path, ordered steps, a happy path, or what happens when something fails, and does not ask to design the screen. Write the path. Do not start the design pipeline.
- The request only asks where something lives, or what a page, step, or section is called, and does not ask to design the screen. Write the map. Do not start the design pipeline.
- A request for the path does not get the map, and a request for the map does not get the path. Write both only when the request asks for both.
- The design pipeline is in Structure. Write the path, then the map. Do not write control copy. Do not specify visual style or component anatomy.
- Do not run during Frame, Define, Scope, Check, Surface, or Review unless the partner asked for the path or the map in that turn.

Ask one question, and only if two jobs would produce different paths, or two arrangements would put the same thing in different places. Otherwise use the partner's job and groups and state that assumption. Do not invent a quote, a persona, a metric, a card sort, or a person's mental model.

## The path

### One job

One flow serves one job the person is trying to finish.
- Name the job in the partner's words.
- Keep steps that serve that job. Cut steps that only show the product.
- Do not merge two jobs into one path. Split them into two flows.
- Do not tour every place in the product. That is not a task flow.

### Main success path

Write the happy path as numbered steps at the level of intention.
- Each step is what the person is trying to do: "Confirm the email", not "Click Continue".
- Each step makes the next action obvious, and shows what happened before the next step starts.
- Keep only the steps required to finish. Prefer one continuous path over a long chain of screens when the job is short.
- Split into more steps only when the job is long, risky, or mixes unrelated decisions. The constitution owns how many choices fit in one step.

### Extensions

Name what happens off the happy path. Keep each extension short.
- Empty: nothing is there yet, and what starts the path.
- Error: what failed, how they fix it, and where they rejoin the main path.
- Cancel or leave: how they exit without finishing, and what is kept or discarded.
- Alternate success: another way to finish the same job, only when the partner needs it.
- Do not invent edge cases the partner did not ask for. Do not end an extension in a dead end with no way back or out.

### Entry and exit

- Say where the path starts. Prefer one clear entry for the job.
- Say where the path ends when it succeeds. The end states the outcome and the next step when there is one.
- Every unwanted state has a way out. The constitution owns Cancel, Undo, and irreversible confirm.

## The map

### Organization

Group by the task the person is trying to finish.
- One place has one job.
- Things used together live together.
- Ordered work is a sequence of steps. A page is a place they can leave and return to. If the order is required, it is a step. If the order is free, the places stay separate.
- Do not hide a place they need in order to finish. The constitution owns how many choices fit in one list.

### Labels

A label says what the person will find there.
- Use the partner's words for the place.
- The name is specific. "Explore" and "Learn" do not say what is there.
- Two places do not share a meaning.
- Do not force every name into the same shape if that makes one of them vague.

### Navigation

The person can tell where they are, and can reach a place in more than one way.
- The same place keeps the same name everywhere.
- Navigation that appears across the product holds the places that exist everywhere. Navigation inside one place holds only what is inside it.
- Show where they are in words. The constitution owns marking the active item, and that navigation stays in the same place on every page.

## What to hand back

The path:

- Job: …
- Entry: …
- Main path: 1. … 2. … 3. …
- Empty: …
- Error: …
- Cancel or leave: …
- Exit: …
- Alternate success: …, only when one exists

The map:

- Pages: …
- Steps: …
- Sections: …
- Navigation: …

Name the path or the arrangement you rejected in one line. Do not draw the screen.

When this skill is used on its own, stop after the handback. Do not change the product. The constitution asks before any change. During the design pipeline, hand the path and the map to that stage and do not ask to implement here.
