---
name: evidence
description: Ground a design decision in real evidence the partner can provide or confirm. Use when the prompt asks for evidence, user or market research, what we know about users or the market, analytics, retention, traffic, drop-off, competitors, or what similar products do, and when the design pipeline needs grounding before continuing. Prefer plain questions the partner can answer in conversation. Ask for files only after naming what would help and confirming they can produce them. Do not invent users, quotes, counts, or findings. Do not treat the partner as an end user. A request that only asks for evidence does not start the design pipeline. During a design pipeline, apply only when that pipeline opens Evidence.
triggers:
  - "evidence"
  - "research"
  - "analytics"
  - "retention"
  - "traffic"
  - "drop-off"
  - "competitors"
  - "similar products"
  - "user research"
  - "market research"
excludes:
  - "copy-only"
  - "flow-only"
  - "IA-only"
  - "direction-only"
  - "design"
tokenBudget:
  summary: 50
  body: 900
metadata:
  updated: "2026-10-02"
  updatedBy: Aaron Cabrera
---

Ground the design in something real. The constitution judges the interface. This skill owns evidence. If they conflict about what we may claim, this skill wins on claims; the constitution wins on the interface.

The partner is the person in the conversation. They are usually not the end user. Do not interview them as if they were the user. Do not invent a quote, a persona-as-proof, a count, or a finding.

## When to run

- The request only asks for evidence, what we know about customers or the market, analytics, retention, traffic, drop-off, competitors, or what similar products do. Run this skill. Do not start the design pipeline.
- The design pipeline has opened Evidence. Run this skill for that move.
- Do not run during Frame, Define, Scope, Structure, Check, or Surface unless the partner asked for evidence in that turn, or the pipeline opened Evidence.

## Principles

These are the bar. Partner-facing asks stay plain; the principles stay in how you judge the work.

- **Match the question to the method.** Ask only for what would change this decision. Do not run a wide questionnaire for a narrow choice.
- **Behavior and context beat opinions dressed as users.** Prefer what people did, where they drop off, and what the business already measured over speculative “users would want.”
- **Watching and measuring beat arguing.** Early, cheap signals beat late debate.
- **Goals and scenarios need a source.** Do not invent people to justify a path. If the source is thin, say so.
- **Label the source or do not claim it.** Partner report, attached artifact, and public or market grounding are different. Never pass one off as another.
- **A shared assumption is not a test with end users.** Partner Accept confirms a bet. It does not validate with customers.
- **No theater.** Do not invent quotes, counts, personas-as-proof, or “research shows” with nothing behind it.

## What counts as evidence

Label every claim with its source.

1. **Partner answers** to concrete questions (numbers, trends, facts they own about the product or business).
2. **Partner-provided artifacts** they confirm they can share (notes from customer talks, support themes, analytics exports).
3. **Public or market grounding** when the partner has nothing: named products, published patterns, or public facts — always labeled, never passed off as this product's user study.

## Priority of asks

Do this in order. Stop when you have enough to decide, or when the partner chooses to continue without more.

### 1. Questions first

Compose a short set of plain questions. No UX jargon. Prefer conversation over files. Ask for facts and figures they might know or can check in a dashboard, for example retention, adoption versus last year, recent traffic, where people leave, or what customers complain about most.

Frame each ask so a non-designer understands:

- What you need (specific).
- Why it helps this decision (value).
- What you will assume, and what can go wrong, if they do not have it (downside).

Ask only what would change the design. Prefer one or two high-impact questions over a long survey.

Treat answers as evidence about the product or audience **as the partner reports it**. Do not rewrite them as “users said” unless the partner’s source was talking to users.

### 2. Files second

Name a file or export only when it would clearly improve the decision. Confirm they have the tool and can produce it before treating “please attach the export” as the path. If they cannot, return to questions or to labeled public grounding.

### 3. Gap third

If they have no answers and no files, say so. Record the residual risk. Offer labeled market or public grounding when it helps. Do not invent evidence. Do not silently claim research happened.

## Synthesize

When they answer or attach something, summarize only what the source supports. Separate:

- What the evidence shows.
- What you are still assuming.
- What decision this unlocks or blocks.

Do not pad with theater. Do not produce fake personas, fake quotes, or fake test results.

## Design pipeline handoff

When this skill runs inside the pipeline, hand the synthesis back to the open stage. The pipeline records assumptions and continues. Evidence does not jump to Surface. Evidence does not implement.

## Out of scope

- Running a live study with end users the agent cannot reach.
- Treating the partner’s opinions as end-user validation.
- Replacing Check (critique against the constitution).
- Owning visual design or component anatomy.
