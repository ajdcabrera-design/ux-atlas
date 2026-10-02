---
name: intake
description: Always on. AGENTS.md runs this first on every request, before skill selection. Rewrite the message into an internal, actionable prompt that skill selection reads. Never shown. Never ends the turn. Never chooses a skill. Not selected by matching this description.
triggers: []
excludes: []
alwaysOn: true
tokenBudget:
  summary: 30
  body: 220
metadata:
  updated: "2026-10-02"
  updatedBy: Aaron Cabrera
---

Rewrite the current context into an actionable prompt. Skill selection reads that prompt, not the raw message. This skill does not choose the skill. The constitution judges the interface. If they conflict, the constitution wins.

Run this on every request, then continue in the same turn. A short reply, a transcript, or a request that already sounds clear still runs it. If this body is already in context, apply it. Do not read the file again.

The partner does not see this prompt. Do not print it, label it, or ask them to accept it. Do not end the turn.

## What the prompt holds

- What needs to change, in the terms of this request.
- What this conversation already settled. A short reply keeps the proposal it accepted.
- What this request leaves out.
- Open points. If two readings would change different things, keep both as an open point. Do not stop to ask.

Keep the size of the ask. A copy change stays a copy change. Do not add a flow, a screen, or a design stage the request did not ask for.

Do not frame the person, situation, and outcome; that is the pipeline's Frame. Do not specify a screen, layout, or component. Do not invent a person, quote, or metric. A `DESIGN.md` at the project root sets terminology.

The prompt lives only in this turn. Other skills read it as this turn's intake prompt. It is not a file.
