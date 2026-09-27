---
name: design-pipeline
description: Turn a design request into a sequence of decisions with the person who asked. Use when asked to design, redesign, critique, discuss, plan, or change a screen, flow, feature, or product, and when a prompt jumps straight to a layout. Do not answer that request with an unstaged plan. Do not use when one narrower skill covers the whole ask. Covers framing, requirements, product class, evidence, prototyping, and high fidelity. Guided mode runs one stage at a time and waits for a decision. When the partner says to decide, write the remaining stages and record each decision. Offer Accept and Correct as a choice. After the record, ask whether to implement. Do not implement before they choose. There is no exemption.
metadata:
  updated: "2026-09-27"
  updatedBy: Aaron Cabrera
---

Run this on any request to design, redesign, critique, or add a screen, flow, or feature.

Guided is the default. Do one stage per turn. End the turn with the work from that stage and one decision for the partner. Do not start the next stage in the same turn.

Express starts when the partner says "you decide," or writes a sentence that hands you the remaining decisions. Begin with "Deciding the remaining stages." Write the open stage, then each following stage, in that same turn. Each stage is its own block. Do not fold them into one result. Do not start express before they ask. The turn ends at the record, after Surface. Then ask whether to implement. Do not implement in that turn. Deciding the approach is not a choice to implement.

The partner is the person in the conversation. They decide, until they start express. The end user is the person who will use the product. They are often absent. Do not invent what either of them said, did, or preferred.

The constitution judges the interface. This skill decides what to make and when it is ready. If they conflict about the interface, the constitution wins. Screen composition applies only in Surface.

## Where to start

- A brief has already restated the request. Use that restatement. Do not show it again. Choose the stage with the rules below. The brief does not choose this skill.
- A request to discuss, plan, or change the UI starts at Frame. Do not replace this stage with an unstaged plan.
- A request that only asks for interface words, with no change to the flow or the screen, is not a design request. Do not start this skill.
- A new request with no agreed problem starts at Frame.
- If the partner has already confirmed a stage, start at the next open one and name it.
- A critique of an existing design starts at Check.
- A request to raise fidelity starts at Surface only after the partner has accepted the structure. Otherwise restate the structure and ask to accept it.
- When the partner is answering the question you asked, continue that stage. Do not restart at Frame.

## How to move

The stops are Frame, Define, Scope, Structure, Check, and Surface, in that order. Surface starts only after the partner accepts the structure. If Check fails, return to Define or Structure. Do not repair a failed flow by decorating it. In express, record that return and continue.

The waits under each stage are guided stops. In express, skip the wait. End a decision with "Decided:" and the decision. End an assumption with "Assumed:" and the assumption. A question only the partner knows stays a typed question in guided mode. In express it becomes an assumption. Do not turn it into Accept or Correct.

Evidence, Another direction, and Test are optional. Propose one only when its rule says to. Say why, what you will do, and what you need from the partner. If they skip it, record the assumption and continue. Do not run it in silence.

Ask one question. Ask only what you cannot responsibly assume. State every assumption you are keeping.

## The choice

Use the constitution's choice rules after the stage text. Accept the stage / Correct this stage. If they correct, say "Stay on this stage. Say what to change."

To leave express, the partner names the stage, for example "Change Structure." Answer "Express ended. Structure is open." Express stays off, and that stage waits. Express cannot be stopped while a response is still being written.

## 1. Frame

Restate the request as a person, a situation, and an outcome.
- Separate what the partner asked for from what you are assuming.
- Ask for the audience, the outcome, or a constraint only they know, when it is missing.
- Do not draw a layout, a flow, or a component in this turn.
- If the request is already a visual, say what decision it is hiding and ask about that.

## 2. Define

Write the problem and the outcome in one short statement.
- Name who it is for and what changes for them when this works.
- Say if there is no user need. Stopping is a valid outcome.
- Do not add features in order to make the problem feel larger.
- Set the product class when it affects what Structure must prioritize. The class is what kind of product this is for content and priority — for example booking-led, showcase-led (portfolio), task-led (work tool), or reading-led. Content structure follows the class. Do not invent a brand voice, tone system, or marketing assets.
- If the class is obvious from the prompt, record it as Assumed or Decided and do not stop to ask. The partner does not see a product-class layer when the prompt already settles it.
- If the class is unknown, or two classes would change what leads in Structure, ask one plain question. Only then does the partner see this layer.
- Wait for the partner to accept or correct the statement.

## 3. Scope

List what is in, what is out, and what is later.
- Every item in the list must serve the outcome from Define.
- Say what you are not building.
- A constraint from the partner beats a preference of yours.
- Wait for the partner to accept the cut.

## 4. Structure

Describe one flow: the steps, the primary action, and the empty, error, and exit states.
- Apply the product class from Define before or with the path and the map. What leads on the page or in the flow must match what that class is selling or proving (for example book first, showcase first, or finish the task first).
- Apply the user-flow skill for the job, the main path, the extensions, and the exit.
- Apply the information architecture skill for the pages, the steps, the sections, and the navigation.
- Name the alternative you rejected and why.
- Stay at the level of structure. No visual style, no component anatomy.
- Screen composition does not apply here.
- Wait for the partner to accept the flow before Check or Surface.

## 5. Check

Judge the accepted flow against the brief and the constitution.
- Say what passed and what failed. Name the constitution rule when one fails.
- If the structure fights the product class from Define, it fails. Return to Define or Structure.
- If it fails, return to Define or Structure and say which.
- A critique with the partner is this stage. It is not a test with end users.
- Do not offer a restyled screen as the fix.

## 6. Surface

Specify the interface only after the partner accepts the structure.
- Apply the constitution.
- Apply the screen-composition skill for regions, components, states, and reflow from the project's design system.
- Then apply the ux-writing skill under the product class from Define. That skill settles voice and tone when needed, then the strings. Do not invent a brand voice outside it. Do not generate marketing assets.
- Leave unresolved questions listed. Do not hide them in the mock.

## Optional moves

### Evidence
Propose grounding when the audience is unknown, Define changed the problem, the cost of being wrong is high, or a familiar job needs a look at what similar products do. High cost means money, health, safety, irreversible loss, or a market you do not know. Familiar jobs include sign-in, checkout, search, settings, and onboarding.
- Apply the evidence skill. Do not invent quotes, counts, or findings.
- Scale it to the one or two assumptions that would change the design.
- Skip it when the partner already has enough evidence for this decision, or the change sits inside a pattern they already accepted.
- If they cannot provide answers or files, record the gap and the residual risk. Partner Accept of an assumption is not a usability test.

### Another direction
Propose a second structure when Define changed the problem, or more than one structure could satisfy the scope.
- A second structure is a different flow, not a different color.
- Skip it when one familiar pattern fits and the partner has accepted it.
- Recommend one and say why. The partner chooses.

### Test
Propose a test with end users before calling a new or critical flow done.
- Skip it for a small, reversible change that already passed Check.
- Say what you want to learn, with whom, and what decision the result will change.
- If the test cannot happen, record that the flow is unchecked with end users. Do not describe it as validated.

## Record

When the partner asks for the record, or accepts Surface, give them the problem, the product class, the scope, the decisions, the flow, the composition, the system gaps, the interface, the open questions, and what was not tested.

If the composition carried a system gap, apply the constitution's design system gaps section here: offer to write the register in this reply. Do not ask whether to implement in the same turn. After the partner decides about the register and any accepted file change is complete, ask whether to implement the record in a later turn.

If there is no system gap, ask whether to implement the record now. Use the constitution's choice rules. The options are Implement the record, and Leave the record. Do not implement before they choose. A sentence that chooses the approach is not a choice to implement.
