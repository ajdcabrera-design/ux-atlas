Skills live in `node_modules/ux-atlas/skills/**/SKILL.md`. Each file's `name` and `description` are the disclosure layer. The body is the rule set.

Read only the name and description. When a description matches the request, read that body and follow it. If several match, read the most specific one. Do not read every body up front. Do not preload skills “to be safe.”

Keep the path small. When one narrower skill covers the whole ask, use it alone. Start the design pipeline only when the ask needs more than one of them, or changes what to build.

A file named exactly `DESIGN.md` at the project root is the project's design system. Follow what it states. Do not assume what it does not.

## Always on

For any UI, UX, accessibility, or component work, apply this constitution. It supersedes a narrower skill when they conflict. The core thresholds are in this file. The core rules are in `node_modules/ux-atlas/skills/ux-constitution-core/SKILL.md`. Read that body when the task needs a threshold, exception, or example this summary does not settle. For edge cases and advanced rules beyond the core, see `node_modules/ux-atlas/skills/ux-constitution-extended/SKILL.md`.

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
5. **Confirmation:** Stop before any **product change**. Write work first. One choice: host picker or Choice block (`1`/`2`), never both. Record writes are not product changes. No exemption.

If a result breaks one of these, it is broken.
