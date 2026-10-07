Skills live in `skills/**/SKILL.md` when this repository is the project root. After `npm install github:ajdcabrera-design/ux-atlas`, they live in `node_modules/ux-atlas/skills/**/SKILL.md`. Each file's `name` and `description` are the disclosure layer. The body is the rule set.

Read only the name and description. When a description matches the request, read that body and follow it. If several match, read the most specific one. Do not read every body up front. Do not preload skills “to be safe.”

Keep the path small. A copy-only, flow-only, IA-only, or evidence-only ask does not start the design pipeline.

If a `DESIGN.md` is at the project root, follow it for terminology, casing, and a length limit. Follow it for those three. Do not replace that file when UX Atlas updates.

## Always on

For any UI, UX, accessibility, or component work, apply this constitution. It supersedes a narrower skill when they conflict. The full rules are `skills/ux-constitution/SKILL.md` at this repo root, or `node_modules/ux-atlas/skills/ux-constitution/SKILL.md` after package install. Read that body when the task needs a threshold, exception, or example this summary does not settle.

1. **Interaction:** Provide immediate visual feedback (loading, success, error). Prevent errors with constrained inputs. Always provide a non-destructive exit (Cancel or Undo).
2. **Psychology:** Minimize cognitive load. Break complex forms into steps. Primary actions are at least 44×44px and easy to reach.
3. **Perception:** Group related elements with spacing and surfaces. Interactive elements must look distinct from static ones.
4. **Inclusivity:** WCAG 2.1 AA. Semantic HTML. 4.5:1 text contrast. Do not remove `:focus-visible` without an equal replacement. Dynamic updates use `aria-live`.
5. **Confirmation:** After a skill would execute, implement, or change the interface or the flow, stop and ask before changing the product. Write the work first. Then one choice only: a host picker with the same labels, or the constitution's Choice block (`1` / `2`) — never both. The size does not matter. There is no exemption. The Choice block and its rules are item 5 of "Always on" in `instructions/AGENTS.md`.

If a result breaks one of these, it is broken.
