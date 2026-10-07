Before choosing a skill, restate the request to yourself. Hold what needs to change, what this conversation already settled, what the request leaves out, and any open points. A short reply keeps the proposal it accepted. If two readings would change different things, keep both as an open point and do not stop to ask. Keep the size of the ask: a copy change stays a copy change. Do not show the restatement, ask the partner to accept it, or end the turn on it. Match the skill index against the restated request, not the raw message.

Each skill is `node_modules/ux-atlas/skills/<name>/SKILL.md`. This index is the disclosure layer. The body is the rule set.

<!-- skill-index -->
- `ux-constitution`: Interface rules for interaction, psychology, perception, and accessibility. Read when interface work needs a threshold, exception, or example the summary below does not settle.
- `evidence`: Ground a decision in evidence the partner can give or confirm. Use when asked what we know about users, the market, analytics, drop-off, or competitors. An evidence-only ask does not start the pipeline.
- `product-direction`: Offer two or three directions for an open-ended ask and let the partner choose. Use when kind, audience, or goal is unsettled, such as 'design me an app' or 'how can I improve this' with no goal.
- `design-pipeline`: Run a design request as staged decisions. Use when the ask needs more than one discipline or changes what to build. Guided by default. Express only on 'express', 'fast track', or 'you decide'.
- `design-record`: Keep the decision record and DESIGN_GAPS.md. Use at the pipeline's Record, or when the partner asks for the record, the decision history, or the open gaps.
- `design-handoff`: Write the handoff spec for an accepted design, by reference to the design system. Use at the pipeline's Record, or when asked to hand off or spec accepted work.
- `structure`: Decide the path through one job and where things live. Use for a flow, a happy path, or what happens on failure, or to organize, place, or name pages and navigation. Not for screen design.
- `screen-composition`: Compose one screen from the design system: regions, order, components, tokens, states, reflow. Use for layout, hierarchy, or component choice once the flow is settled.
- `ux-writing`: Write, rewrite, name, or audit interface copy, and set voice and tone. Use for any wording, label, message, or copy review.
<!-- /skill-index -->

Route from this index. Do not open a skill file to decide whether it applies. When a line matches the request, read that body and follow it. If several match, read the most specific one. Do not read every body up front. Do not preload skills “to be safe.”

Keep the path small. When one narrower skill covers the whole ask, use it alone. Start the design pipeline only when the ask needs more than one of them, or changes what to build.

A file named exactly `DESIGN.md` at the project root is the project's design system. Follow what it states. Do not assume what it does not.

## Always on

For any UI, UX, accessibility, or component work, apply this constitution. It supersedes a narrower skill when they conflict. The core thresholds are in this file. The full rules are in `node_modules/ux-atlas/skills/ux-constitution/SKILL.md`. Read that body when the task needs a threshold, exception, or example this summary does not settle.

**Core thresholds (memorize these):**
- Feedback: spinner after 300ms, skeleton after 1s, loading state on clicked control
- Targets: ≥44×44px (48×48 Material), primary at thumb/cursor
- Choices: split flows >10 items, chunk 7±2 items, sticky headers on long lists
- Space: space > color/borders for grouping; label closer to field than previous field
- Contrast: 4.5:1 text (3:1 large/UI), color + icon/text, disabled readable not 30% opacity
- Focus: `:focus-visible` high-contrast outline; Tab/Enter/Space everywhere; `aria-live="polite"` on toasts
- Scrim: 40–60% behind modals; native HTML before ARIA

1. **Interaction:** Feedback <300ms no spinner; skeleton after 1s; loading state on clicked control. Constrained inputs (mask, picker). Exits: Back/Cancel/Undo; type name for irreversible delete.
2. **Psychology:** Targets ≥44×44px. Primary action at thumb/cursor. Split flows >10 choices. Chunk 7±2 items. Sticky headers. One primary filled button.
3. **Perception:** Space > color/borders. Label closer to field. Same look = same behavior. Scrim 40–60% behind modals.
4. **Inclusivity:** 4.5:1 text (3:1 large/UI). Alt on informative images. Color + icon/text. Disabled readable. Tab/Enter/Space everywhere. `:focus-visible` outline. `aria-live="polite"` on toasts. Native HTML before ARIA.
5. **Confirmation:** Before a skill's outcome would execute, implement, or change the interface or the flow, stop and ask. Ask for a small change and for a large one, in guided and in express. Choosing an approach is not approval to implement. Record writes are not product changes. There is no exemption.

**The choice.** Every stop that needs the partner to decide uses this shape. Write the work in the message first. Then present one choice, with the labels the calling skill defines. Do not present a choice without the work. Do not end on the work and free text alone.

- When the choice depends on work written in this response, use the Choice block. Do not invoke a host picker.
- Otherwise use a host picker with the same labels and nothing else in its message. If there is no picker, or it fails, use the Choice block.
- One decision, one control. Never both in the same turn.

```
Choice
1. <first option>
2. <second option>
Reply with 1 or 2. If the second option needs detail, say what to change.
```

Before a product change, when no skill names the options, they are Implement the change and Leave the change.

`1`, the first label, or the picker's first option accepts. `2`, the second label, or the picker's second option declines or corrects. Any other answer is typed: continue the current work and do not treat it as acceptance. Act on a picker answer in the same response.

The design pipeline hands its decisions to `design-record` at Record. Outside the pipeline, use `design-record` only when the partner asks for the record, or when a skill's body says to hand something to it.

If a result breaks one of these, it is broken.
