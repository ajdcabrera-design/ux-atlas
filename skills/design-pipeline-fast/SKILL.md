---
name: design-pipeline-fast
description: "Express-only design pipeline for experienced partners who know what they want. Three stops: Frame \u2192 Structure \u2192 Surface. Use when the partner says \"fast track\", \"express\", \"you decide the approach\", or explicitly opts in. Do NOT use as default. Constitution owns Confirmation. Hands to design-record at end."
triggers:
  - "fast track"
  - "express"
  - "you decide"
  - "skip to structure"
  - "pipeline fast"
excludes:
  - "guided"
  - "step by step"
  - "discuss"
  - "critique"
  - "plan"
  - "handoff-only"
tokenBudget:
  summary: 50
  body: 800
metadata:
  updated: "2026-10-04"
  updatedBy: Aaron Cabrera
---

This is the **express variant** of the design pipeline. It runs only when the partner explicitly opts in. The default pipeline (`design-pipeline`) is guided (6 stops). This variant collapses to 3 stops.

**Opt-in signals (any one):**
- Partner says "fast track", "express", or "you decide the approach"
- Partner says "skip to structure" or "pipeline fast"
- Partner has accepted a Frame in a previous turn and now says "continue express"

**Do NOT use when:**
- Partner says "guided", "step by step", "discuss", "critique", or "plan"
- The problem, audience, or change is not settled (use product-direction at Frame first)
- This is the first design request in the conversation

## The 3 stops

### 1. Frame (condensed)
- Restate as person, situation, outcome. Separate ask from assumptions.
- If product class unknown and it changes Structure, ask one question. Otherwise Assumed.
- Do not draw layout. End with: **Accept Frame / Correct Frame**

### 2. Structure (combined Define + Scope + Structure + Check)
- Problem + outcome statement (Define)
- In / out / later list (Scope)
- Flow: job, entry, main path, empty, error, cancel, exit (user-flow)
- Places: pages, steps, sections, navigation (information-architecture)
- Check against accepted Frame + constitution. If fails, return to Frame.
- End with: **Accept Structure / Correct Structure**

### 3. Surface
- Regions, order, components, tokens, states, reflow (screen-composition)
- Voice/tone then strings (ux-writing)
- System gaps listed
- End with: **Accept Surface / Correct Surface**

## After Surface

Hand decisions, assumptions, and gaps to `design-record`. It owns the `record` setting and, when the setting is `ask`, the one choice and its labels.

Then hand the accepted work to `design-handoff`. It writes the handoff spec under the same record setting and does not ask again.

Then constitution's Choice: **Implement the change / Leave the change**

## Handoff to guided

If at any stop the partner says "go back to guided" or names a guided stage (e.g., "Change Define"), respond: "Express ended. [Stage] is open." Switch to `design-pipeline` guided mode from that stage.

## What this skill does NOT do

- Does not run product-direction (assumes Frame is settled or product-direction already ran)
- Does not run Evidence as a separate stop (fold into Structure if needed)
- Does not run Another Structure or Test (propose only if partner asks)
- Does not invent a visual system, theme, or brand