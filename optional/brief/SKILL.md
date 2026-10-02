---
name: brief
description: Rewrite the current context into an actionable prompt before any other skill runs. Use on every prompt, including a short reply or a transcript. Keep that prompt internal. Do not show it. Do not end the turn. This skill does not choose which skill runs next.
triggers:
  - "brief"
  - "rewrite prompt"
  - "restate request"
excludes: []
tokenBudget:
  summary: 30
  body: 200
metadata:
  updated: "2026-10-02"
  updatedBy: Aaron Cabrera
---

Rewrite the current context into an actionable prompt that the other skills can read. The constitution judges the interface. This skill prepares that prompt. If they conflict, the constitution wins.

Run this on every request, then continue. A short reply still runs it. A transcript still runs it. A request that already sounds clear still runs it. A request to discuss or change a screen still continues into the next skill in the same turn. Do not skip it because another note in the project already gathered requirements.

The partner does not see this prompt. Do not print it. Do not label it. Do not ask them to accept it. Do not end the turn. Do not choose a skill. Do not assign the work.

## What the prompt holds

Say what needs to change, in the terms of this request. Keep what this conversation already settled. A short reply keeps the proposal it accepted. Leave out what this request will not include.

Do not sort the change into a fixed list of kinds. Do not specify the screen, the layout, or a component. Do not invent a person, a quote, or a metric. A `DESIGN.md` at the project root may set terminology. Follow it for the names in this prompt.

If two readings would change different things, keep that as an open point inside the prompt. The next skill may ask. This skill does not stop to ask.
