---
name: product-direction
description: Set the overall design direction for an open-ended product ask. Offer two or three candidate directions, recommend one, and let the partner choose. Use when the prompt does not settle what kind of product it is, who it is for, or what should change, for example "what is the best approach for…", "design me an app for…", or "how can I improve this" with no goal. Do not use when the prompt or the project already settles those, or when a stage of the design pipeline has been accepted. During a design pipeline, apply only at Frame. A direction-only request does not start the design pipeline. Do not decide tone, scope, features, or layout.
triggers:
  - "product direction"
  - "what kind of product"
  - "best approach"
  - "design me an app"
  - "how can I improve"
  - "open-ended product"
excludes:
  - "copy-only"
  - "flow-only"
  - "IA-only"
  - "evidence-only"
  - "screen design"
  - "specific feature"
  - "review-only"
tokenBudget:
  summary: 50
  body: 900
metadata:
  updated: "2026-10-07"
  updatedBy: Aaron Cabrera
---

Set the direction before the problem is framed. The constitution judges the interface. This skill decides which problem is worth framing. If they conflict, the constitution wins.

The partner is the person in the conversation. They decide. The end user is the person who will use the product. Do not invent what either of them said, did, or preferred.

## When to run

Read the request as you restated it, its open points, earlier turns, and the project, including a `DESIGN.md` at the project root. Check three things.

1. **Kind.** What kind of product this is, for example booking-led, showcase-led, task-led, or reading-led.
2. **Who.** Who it is for, and how much is at stake for them.
3. **Change.** What should change, or what the result should achieve.

- Run when none of the three is settled.
- Run when the partner points at something that exists and asks to improve it with no goal. Kind and who may be settled. Change is not.
- Do not run when the request or the project settles any one of the three and the rest can be assumed. Use the design pipeline's Frame.
- Do not run when the partner has already accepted a direction or a pipeline stage.
- On its own, a request for the best approach with no ask to design anything: run this skill. Do not start the design pipeline.
- During the design pipeline: run only at Frame, only when the rules above say so.

Do not ask a question before offering directions. The directions are the question.

## Directions

Write two or three. Never more than three.

- Each direction is a different way to see the problem: a different person, situation, job, or kind of product. A different style, color, or feature list is not a different direction.
- Each one is plausible for what the partner actually said. Do not stretch a direction to fill a slot. Two is enough when only two hold.
- Keep each direction at the level of the problem. No screens, flows, components, feature lists, or scope.
- When one direction depends on a fact about the market or a competitor, label it as public grounding or offer the evidence skill. Do not invent users, counts, quotes, or competitors.
- Name tone as open when the directions would sound different. Do not decide it. Voice belongs to UX Writing in Surface.

Write each direction as one block.

- **Direction:** a short name.
- **For:** who, in what situation.
- **Outcome:** what changes for them when this works.
- **Kind:** the product class it implies.
- **Leads with:** what comes first for that class.
- **Gives up:** what this direction will not serve.
- **Riskiest assumption:** the one belief that would sink it if wrong.

Before the blocks, say in one line what the request already settled and what it left open. After the blocks, recommend one and say why in one or two sentences.

## The choice

Use the constitution's choice rules after the directions. The options are Take the recommended direction, and Choose or change a direction. If they choose the second, say "Name the direction, or say what to change."

A typed answer that names a direction, or combines two, chooses it. Restate the chosen direction once as a person, a situation, and an outcome.

## Handoff

- On its own: stop after the choice. Do not start the design pipeline. Do not change the product.
- During the design pipeline: the chosen direction is the accepted Frame. Its kind is Assumed for Define. Continue at Define in the same response. Do not repeat Frame.
- In express: take the recommended direction, mark it "Assumed:", and continue with the pipeline.
