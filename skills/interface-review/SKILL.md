---
name: interface-review
description: Review a screen or flow, built or specified, and report what breaks, without redesigning it. Covers a walk through one job, a pass against the constitution, and findings with the rule, the severity, and the skill each fix belongs to. Use when the prompt asks to review, critique, audit, or check an existing interface, or asks what is wrong with it. Inside a design pipeline, apply only where the pipeline calls it. A review-only request does not start the design pipeline. Do not use to audit copy alone, or when the request is to improve something with no goal. Do not claim what users did or felt.
triggers:
  - "review"
  - "critique"
  - "interface audit"
  - "what is wrong with"
  - "heuristic evaluation"
  - "usability review"
  - "accessibility review"
excludes:
  - "copy-only"
  - "flow-only"
  - "IA-only"
  - "evidence-only"
  - "direction-only"
  - "audit copy"
  - "design"
  - "redesign"
tokenBudget:
  summary: 55
  body: 1250
metadata:
  updated: "2026-10-09"
  updatedBy: Aaron Cabrera
---

Review an interface, built or specified, and say what breaks. The constitution judges the interface. This skill applies it to what is there and reports what it finds. If they conflict, the constitution wins.

This is an inspection by one reviewer. It is not a test with users. Do not write what users did, felt, or struggled with unless the partner gave that evidence. Do not redesign; say which skill each finding belongs to.

## When to run

- The request only asks to review, critique, audit, or check an existing screen or flow, or asks what is wrong with it. Run this skill. Do not start the design pipeline.
- The request is to review and then fix. When every finding belongs to the build, end on the constitution's choice before a product change. Otherwise follow the design pipeline's route.
- The design pipeline is in Review. Review the accepted Surface and hand the findings to that stage.
- The request is to audit copy and nothing else. That is UX Writing.
- The request is to improve something and names no goal. That is product direction.
- Do not run during another pipeline stage unless the partner asked for a review in that turn. Then give the findings and offer that stage's decision again.

Ask one question, and only if you cannot tell which job the review should follow. Otherwise take the job the screen most plainly serves and state that assumption.

## What you inspected

Say first what the review rests on: the code, a screenshot, a running page, a written Surface, or a description. Then say what that source cannot show.

- Markup alone does not show contrast, spacing, or target size as rendered. Judge values its CSS declares, and say they are declared, not measured.
- A screenshot does not show focus order, keyboard use, or what happens after an action.
- A description shows only what it mentions.
- A written Surface shows what it specifies. A threshold it states, such as a contrast ratio, is an intention and goes under Not checked. A state or path it leaves out is a finding when a step depends on it.

Do not pass or fail a rule you could not check. List it under Not checked.

## Walk the job

Name the job in the partner's words. Go through it in the order the person would. At each step, ask four things.

- Would they know what to do next?
- Is the control for it visible, and does it look like a control?
- After they act, can they tell what happened?
- If it goes wrong, can they recover without losing their work?

Follow the empty, error, and cancel paths as well as the success path, wherever the source shows them. A step that fails one of the four is a finding.

## Check the rules

Go through the constitution against what you inspected: Interaction, Psychology, Perception, Inclusivity. Read its body for the thresholds.

- Cite the section a finding breaks, for example 1.3 Exits or 4.1 Perceivable. Do not restate the rule.
- Do not invent a rule the constitution does not have. A preference is not a finding.
- When the partner has accepted decisions for this work (Frame, Define, Scope, Structure), each is also a rule. Cite it by stage, for example Scope: Out. A break with one is a finding.
- When something looks wrong and no rule covers it, list it under Open. Do not call it a failure.

## Severity

Rate each finding by what it costs the person.

- **Blocks.** They cannot finish the job, or they lose work, money, or access.
- **Slows.** They can finish, but they are likely to make an error, hesitate, or take a longer way.
- **Minor.** They finish without trouble. It is inconsistent or untidy.

An accessibility failure that shuts someone out of the job is Blocks, however few people it affects. Do not raise a rating to make the review look thorough. Do not rate by how easy the fix is.

## Findings

- One finding per problem. Merge repeats of the same problem and say where it recurs.
- Lead with what blocks. Report every Blocks and Slows finding. Report at most five Minor findings and give the count of the rest.
- Say in one line what would satisfy the rule. Do not design the fix.
- Say what passes in one or two lines, so the partner knows what to leave alone.
- If nothing fails, say so. A clean review is a valid result.

## What to hand back

- Inspected: the source, and the job walked
- Not checked: …
- Passes: …
- Findings, most severe first. Each one:
  - Where: the screen, step, or element
  - Observed: what is there, or what is missing
  - Rule: the constitution section or the accepted decision
  - Severity: Blocks, Slows, or Minor
  - To satisfy it: one line
  - Belongs to: structure, screen-composition, ux-writing, or the build when the design is right and the code does not follow it
- Open: …, only when something looks wrong and no rule covers it

When this skill is used on its own, stop after the findings. Do not change the product. The constitution asks before any change. Inside the design pipeline, hand the findings to the pipeline, which asks the decision. Do not ask to implement here.
