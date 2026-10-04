---
name: design-pipeline
description: "Turn a design request into a sequence of decisions. Use when asked to design, redesign, critique, discuss, plan, or change a screen, flow, feature, or product — AND the ask needs more than one of: flow, IA, composition, writing, evidence, or direction. Do NOT use for copy-only, flow-only, IA-only, evidence-only, or direction-only asks (use those skills alone). Guided default (one stage per decision; Accept starts the next stage at once). Express only when partner says \"you decide\". Hands to design-record at end. Constitution owns Confirmation choice."
triggers:
  - "design"
  - "redesign"
  - "critique"
  - "discuss"
  - "plan"
  - "change a screen"
  - "change a flow"
  - "change a feature"
  - "change a product"
excludes:
  - "copy-only"
  - "flow-only"
  - "IA-only"
  - "evidence-only"
  - "direction-only"
  - "rename"
  - "word"
  - "label"
  - "button text"
  - "handoff-only"
tokenBudget:
  summary: 60
  body: 1200
metadata:
  updated: "2026-10-04"
  updatedBy: Aaron Cabrera
---

Use this pipeline when a request needs multiple design disciplines or changes what to build. The constitution judges interface quality; this skill sets the work and order. Narrow requests stay with their specific skill.

## Route and resume

- New design starts at Frame; use product-direction there if kind, audience, or outcome is unsettled. A chosen direction is the accepted Frame.
- Critique starts at Check, using accepted Frame/Define when available and otherwise only the stated goal and evidence. Fidelity starts at Surface only after Structure is accepted; otherwise resume at the next open stage.
- Continue the current stage when the partner answers its question. After acceptance, start at the next open stage without asking whether to continue. Before resuming, read `.atlas/decisions.md` and overlapping gaps through `design-record`; do not load run history unless asked.

## Run the pipeline

Guided is the default: Frame, Define, Scope, Structure, Check, Surface. Present a complete stage proposal and assumptions, then ask its decision using the constitution's inline Choice block. Never show the choice first or add a continue/pause question.

On Accept, begin the next open stage in the next response. On Correct, revise and stay. Reopening an earlier stage makes later decisions open again. A direction chosen in-pipeline counts as Frame; continue at Define. A direction-only request ends after that choice.

Express requires explicit opt-in (for example, "you decide"). Mark unresolved partner-specific details as assumptions. Present each remaining stage as a distinct block in one response, with no guided waits. End after Record, then ask separately about implementation. If the partner names a stage, return to it in Guided.

Ask only questions the partner must answer and keep assumptions visible. Propose optional Evidence, Another structure, or Test only under these rules; never run them silently.

## Stages

### 1. Frame

State person, situation, and outcome; separate the request from assumptions. Ask only for missing facts that cannot be responsibly assumed. Do not design screens, flows, or components.

### 2. Define

Write the user need and outcome briefly. Set product class only when it changes Structure's priorities. If obvious, mark it Assumed or Decided without another decision. Stopping because there is no user need is valid.

### 3. Scope

List In, Out, and Later. Every In item serves Define; preserve partner constraints and state what is not being built.

### 4. Structure

Describe one job's entry, path, primary action, empty/error recovery, cancel/exit, and relevant alternate path. Apply user-flow and information-architecture; name a rejected alternative and why. No visual styling or component anatomy. Surface waits for acceptance.

### 5. Check

Judge the flow against Frame, Define, and the constitution; state passes, failures, and rules. If it fails, return to Define or Structure and name which. This is not user testing; do not offer restyling as a flow repair.

### 6. Surface

After accepted Structure, specify regions, hierarchy, components, tokens, states, and reflow from the design system. Apply ux-writing for voice/tone and strings when needed. Mark gaps and unresolved questions; do not present assumptions as sourced rules.

## Optional moves

### Evidence
Propose Evidence when an unknown audience, changed problem, high stakes (money, health, safety, irreversible loss), or a familiar pattern could change the decision. Use the evidence skill; do not invent findings. Keep it to consequential assumptions. If evidence is unavailable, record the gap and risk. Accepting an assumption is not a usability test.

### Another structure
Propose another structure only when multiple flows could meet Define and Scope. Compare flows, recommend one, and let the partner choose; skip when one accepted familiar pattern fits.

### Test
Propose user testing before calling a new or critical flow done, except for small reversible changes that passed Check. State what to learn, with whom, and what decision could change. If unavailable, record that the flow is untested.

## Record and implementation

After accepted Surface or on request, hand decisions, assumptions, flow, interface, questions, and gaps to `design-record`, which owns the run log and gap register. Do not offer a separate gap choice. Then hand the accepted work to `design-handoff`, which writes the handoff spec under the same record setting and does not ask again.

After the record and the handoff spec are written or left in the reply, ask whether to implement using the constitution's choice rules: Implement the change / Leave the change. Do not implement before an explicit choice; choosing an approach is not implementation approval.