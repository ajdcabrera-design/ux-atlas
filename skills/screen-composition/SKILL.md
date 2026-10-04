---
name: screen-composition
description: Compose one screen from the project's design system. Covers regions, what leads, reading and focus order, component mapping, tokens, states per region, and reflow on small viewports. Use when the prompt asks to lay out or compose a screen, choose components, set visual hierarchy, or say how a screen reflows, and the flow and information architecture are settled. During a design pipeline, apply only in Surface, before ux-writing. A composition-only request does not start the design pipeline. Do not invent a visual system, theme, or brand.
triggers:
  - "layout"
  - "compose screen"
  - "component"
  - "visual hierarchy"
  - "reflow"
  - "responsive"
  - "design system"
  - "screen design"
  - "region"
  - "landmark"
excludes:
  - "copy-only"
  - "flow-only"
  - "IA-only"
  - "evidence-only"
  - "direction-only"
  - "flow"
  - "path"
  - "organize"
  - "handoff-only"
tokenBudget:
  summary: 50
  body: 950
metadata:
  updated: "2026-10-04"
  updatedBy: Aaron Cabrera
---

Compose the screen from parts the project already has. The constitution judges the interface. This skill decides how the accepted structure becomes one screen. If they conflict, the constitution wins.

User flow names the path. Information architecture names places. UX Writing writes every string. This skill arranges them. It does not write copy, change the flow, or restyle the system.

## The design system

Use the first source that exists. Do not stop the task to ask for one.

1. **`DESIGN.md`.** A file named exactly `DESIGN.md` at the project root is the design system. Use its tokens, components, and layout guidance. A file with another name, casing, or location is not.
2. **Codebase.** With no `DESIGN.md`, use the tokens and primitives the codebase already has, such as theme values, CSS custom properties, and shared components. Name where they live.
3. **Neither.** Say once, in one line, that no design system was found. Continue with industry-standard defaults. Record "Assumed: industry defaults" once. Do not list each gap.

Where a source exists but lacks something, fill it with the industry standard and record it as a system gap marked Assumed. Never present an assumed value as the source.

Do not edit the source. Do not add tokens or components to it.

## When to run

- The request only asks to lay out or compose a screen, choose components, set hierarchy, or say how it reflows, and the flow is settled. Run this skill. Do not start the design pipeline.
- The design pipeline is in Surface. Run this skill before ux-writing. Hand the regions and components to ux-writing for the strings.
- If the path or the places are not settled, say which is missing and stop. Do not invent them to fill the screen.
- Do not run during Frame, Define, Scope, Structure, or Check. A critique of an existing screen is Check.

Ask one question, and only if two compositions would lead with different things and the product class does not settle it. Otherwise state the assumption.

## Regions

- Each region serves a step or a place from the accepted structure. Name which one. Cut a region that serves none.
- Name each region by its job, and the landmark or heading it maps to.
- Do not add regions for promotion, tips, or metrics the structure did not ask for.

## Order

One order sets what leads, the reading order, and the focus order.

- Lead with what the product class from Define puts first. With no class, lead with the context of the primary action.
- Write the order at the narrowest width first. Wider widths may place regions side by side. They do not change what leads or the reading order.
- Do not use visual placement to change the order a keyboard or screen reader meets.

## Components

- Map every element to a component the source names. Use its name exactly.
- If none fits, use the industry-standard pattern for that element and record a system gap. Do not build a one-off.
- Use a component for its purpose. Do not restyle one component to pose as another.

## Tokens

- Reference color, type, spacing, and shape by the source's token names. Do not write a raw value when a token exists.
- If the source has no token for a need, use the industry standard and record a system gap.

## States

For each region, list the states it has: default, loading, empty, error, and success. For each interactive component, list hover, focus, active, and disabled where they exist.

- Empty, error, and exit come from the accepted flow. Do not invent new ones.
- Map each state to the source's variant. A state with no variant is a system gap. The constitution still sets the behavior.
- The layout stays stable across states. Loading holds the space the content will take.

## Reflow

- At 320 CSS px wide, content reads in one column without horizontal scrolling. Content that needs two dimensions, such as a data table or a map, may scroll. Say how.
- Use the breakpoints and margins the source states. If it states none, use industry-standard breakpoints and record a system gap.
- The primary action stays reachable at every width. Say what stacks, collapses, or moves behind a disclosure. Do not hide anything the person needs to finish.

## What to hand back

- Source: `DESIGN.md`, codebase (where), or Assumed: industry defaults
- Regions: 1. … (serves …, landmark …) 2. …
- Leads: …
- Components: element → component
- Tokens: …
- States: region, state → variant
- Reflow: narrow …, wide …
- System gaps: each one, Assumed. With no source, one line only.

Name the composition you rejected in one line. Do not write strings.

When this skill is used on its own, stop after this handback. Do not change the product. Hand any system gaps to `design-record` after the handback. During the design pipeline, hand the composition and any system gaps to Surface, then to Record.
