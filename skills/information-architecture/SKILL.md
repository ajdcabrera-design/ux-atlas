---
name: information-architecture
description: Organize where something lives. Covers pages, steps, sections, and navigation labels. Use when the prompt asks to organize, group, place, or name the structure, and does not ask to design the screen. During a design pipeline, apply only in Structure. A structure-only request does not start the design pipeline.
triggers:
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
  - "flow-only"
  - "evidence-only"
  - "direction-only"
  - "screen design"
  - "layout"
  - "component"
tokenBudget:
  summary: 45
  body: 700
metadata:
  updated: "2026-10-02"
  updatedBy: Aaron Cabrera
---

Decide where something lives. The constitution judges the interface. This skill decides the map. If they conflict, the constitution wins.

UX Writing names controls. User flow names the path. This skill names places. A `DESIGN.md` at the project root may set terminology. Follow it for the names of places. Do not import a navigation pattern from a design system that does not state one.

## When to run

- The request only asks where something lives, or what a page, step, or section is called, and does not ask to design the screen. Run this skill. Do not start the design pipeline.
- The design pipeline is in Structure. Name the pages, the steps, the sections, and the navigation. Do not write control copy. Do not specify visual style or component anatomy.
- Do not run during Frame, Define, Scope, Check, or Surface unless the partner asked where something lives in that turn.

Ask one question, and only if two arrangements would put the same thing in different places. Otherwise use the partner's groups and state that assumption. Do not invent a card sort, a quote, or a person's mental model.

## Organization

Group by the task the person is trying to finish.
- One place has one job.
- Things used together live together.
- Ordered work is a sequence of steps. A page is a place they can leave and return to. If the order is required, it is a step. If the order is free, the places stay separate.
- Do not hide a place they need in order to finish. The constitution owns how many choices fit in one list.

## Labels

A label says what the person will find there.
- Use the partner's words for the place.
- The name is specific. "Explore" and "Learn" do not say what is there.
- Two places do not share a meaning.
- Do not force every name into the same shape if that makes one of them vague.
- UX Writing still names buttons, errors, empty states, and other controls.

## Navigation

The person can tell where they are, and can reach a place in more than one way.
- The same place keeps the same name everywhere.
- Navigation that appears across the product holds the places that exist everywhere. Navigation inside one place holds only what is inside it.
- Show where they are in words. The constitution owns marking the active item, and that navigation stays in the same place on every page.

## What to hand back

Structure-only, or the pipeline's Structure stage:

- Pages: …
- Steps: …
- Sections: …
- Navigation: …

Name the arrangement you rejected in one line. Do not draw the screen.

When this skill is used on its own, stop after the map. Do not change the product. The constitution asks before any change. During the design pipeline, hand the map to that stage and do not ask to implement here.
