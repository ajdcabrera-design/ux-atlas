---
name: ux-constitution-extended
description: Extended UX constitution with edge cases, detailed examples, and advanced rules. The core thresholds are in ux-constitution-core. Read this when the core summary does not settle a threshold, exception, or example.
triggers:
  - "constitution edge case"
  - "constitution exception"
  - "constitution example"
  - "detailed accessibility"
  - "advanced interaction"
excludes:
  - "copy-only"
  - "flow-only"
  - "IA-only"
  - "evidence-only"
  - "direction-only"
tokenBudget:
  summary: 40
  body: 1800
metadata:
  updated: "2026-10-02"
  updatedBy: Aaron Cabrera
---

This skill extends `ux-constitution-core`. The core thresholds (targets, contrast, timing, chunking, focus, scrim) are in the core skill and in AGENTS.md. This skill holds edge cases, detailed examples, and advanced rules that do not fit in the core.

Read `ux-constitution-core` first. Only read this skill when the core does not settle the question.

## Edge cases and advanced rules

### Interaction: Advanced feedback
- **Progressive disclosure of loading**: For multi-step operations, show step-level progress, not just a global spinner.
- **Optimistic UI**: For reversible actions, show success immediately and roll back on failure. Record the assumption.
- **Stale data**: If data may be stale, show a subtle refresh indicator. Do not block interaction.

### Interaction: Language edge cases
- **Technical audiences**: If the audience is developers, schema names and error codes may be appropriate. Record as Assumed.
- **Regulated products**: Required legal phrasing overrides verb-only labels. Record as Decided.

### Psychology: Advanced Hick's Law
- **Progressive disclosure**: For settings with >20 options, use categories + search, not a flat list.
- **Expert mode**: A toggle to show all controls is valid when the default hides complexity.

### Perception: Advanced figure-ground
- **Layered modals**: If a modal opens another modal, each gets its own scrim. The bottom modal stays visible but inactive.
- **Toasts on mobile**: Bottom sheet toasts may use a lighter scrim (20–30%) to maintain context.

### Inclusivity: Advanced operable
- **Drag and drop**: Provide keyboard alternative (Space to pick, arrows to move, Space to drop).
- **Data tables**: Arrow keys navigate cells. Home/End jump to row ends. Ctrl+Home/End jump to table corners.
- **Carousel/autoplay**: Pause on hover/focus. Provide previous/next controls.

### Inclusivity: Advanced robust
- **Live regions**: Use `aria-live="assertive"` only for critical alerts (data loss, security). Everything else is `polite`.
- **Custom components**: If no native element fits, implement `role`, `aria-label`, `aria-valuemin/max/now`, and keyboard support. Test with NVDA + Firefox and VoiceOver + Safari.

### Confirmation: Edge cases
- **Batch operations**: One confirmation for the batch, not per item. List the count and a sample of affected items.
- **Reversible with timeout**: "This will be deleted in 30 days. Undo?" — one confirmation, not two.
- **Factory/automated runs**: When `trigger.kind` is `factory`, decisions only the partner could make are Assumed with `unreviewed`. No Confirmation choice.

## When to read this skill

- The core summary in AGENTS.md says "read full body for thresholds" but the threshold is not there
- A narrower skill asks for a constitution ruling on an edge case
- You need a detailed example not in the core
- The partner asks "what does the constitution say about X?" and X is not in the core

## What not to do

- Do not duplicate core thresholds here. They live in ux-constitution-core and AGENTS.md.
- Do not add new core rules here. Core changes go in ux-constitution-core.
- Do not make this skill required for ordinary UI work. The core covers 90% of cases.