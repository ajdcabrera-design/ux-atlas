---
name: ux-constitution-core
description: Foundational UX rules for interaction, psychology, perception, and accessibility — core thresholds only. Use for any interface work. The full constitution with edge cases is in ux-constitution-extended. After a skill would execute, implement, or change the interface or the flow, stop and ask before changing the product. Owns the Choice block every skill uses for an explicit partner stop. Skills hand decisions, assumptions, and system gaps to design-record. There is no exemption.
triggers:
  - "interface"
  - "UI"
  - "UX"
  - "accessibility"
  - "component"
  - "screen"
  - "button"
  - "form"
  - "modal"
  - "navigation"
excludes:
  - "copy-only"
  - "flow-only"
  - "IA-only"
  - "evidence-only"
  - "direction-only"
tokenBudget:
  summary: 80
  body: 600
metadata:
  updated: "2026-10-02"
  updatedBy: Aaron Cabrera
---

Apply these rules to every interface. A narrower skill may add detail. If they conflict, this skill wins.

## 1. Interaction

### 1.1 Feedback
Keep the user informed. They should never wonder whether a click registered.
- Show a skeleton after 1s of loading. Use a determinate bar for uploads.
- Put the clicked control into a loading state until the action finishes.
- Do not freeze the UI or rely on a silent request.
- If the response is under 300ms, delay the spinner so it does not flash.

### 1.2 Language
Use the user's words, not the system's.
- Button labels are specific verbs: "Delete project", not "Submit".
- Do not show stack traces, schema names, or raw error codes.
- Replace "Ascending" and "Descending" with "Price: low to high" or "Date: newest first".

### 1.3 Exits
Every unwanted state needs a visible way out.
- Provide Back, Cancel, and a clear close control. Backdrop click may close a modal.
- Use an Undo toast for low-stakes destructive actions.
- Do not trap the user or make the browser Back button the only exit.
- For irreversible destruction, require typing the object name. Prefer a 30-day soft delete over an immediate purge.

### 1.4 Prevention
Stop the error before it happens.
- Mask and auto-format strict input. Use a date picker instead of free text.
- Validate early. Do not wait until submit to report a username taken ten fields ago.
- Do not disable Submit until the form is valid. On submit, scroll to the first invalid field and explain it.

### 1.5 Recognition
Keep objects, actions, and prior choices visible.
- Show password rules while typing, and check them off as they are met.
- Mark the active navigation item.
- Do not use placeholder text as the label.
- In a wizard, show a running summary of earlier choices. Do not make the user go Back to remember them.

### 1.6 Consistency
The same action looks and behaves the same everywhere. Follow platform conventions.
- A primary button is the same on every page.
- Do not invent a new pattern for a standard task, or hide the account menu in an unfamiliar corner.
- Break consistency only to add friction on a destructive action, using a distinct full-screen confirm.

### 1.7 Efficiency
Serve beginners and experts.
- Offer shortcuts such as Command-K and Escape, and keep normal tab order.
- Allow bulk actions in lists.
- Do not hide a critical action behind a gesture alone.
- Hide advanced fields behind a disclosure. Show the basic form first.

### 1.8 Signal
Every extra element competes with the task.
- Use space to group related items before adding boxes.
- Do not fill the screen with tips, secondary metrics, or banners.
- Dense tools may show more data. Strip decoration, redundant labels, and non-tabular figures.

### 1.9 Errors
Say what failed and how to fix it. Keep what the user already typed.
- Name the field and the required fix.
- Do not say only "Something went wrong." Say whether it was the network or the input.
- Login failures stay vague: "Invalid email or password."

### 1.10 Help
Help sits next to the task.
- Use a hint beside a complex field, or an empty state that explains the next step.
- Do not send the user to a long article to finish a core task.
- Do not open a multi-step tour on login. Show help the first time they reach that feature.

## 2. Psychology

### 2.1 Fitts's Law
Time to hit a target depends on distance and size.
- Primary targets are at least 44×44px (48×48px on Material).
- Put primary actions where the thumb or cursor already is.
- Do not place a destructive action against a primary one without space between them.
- A control on the screen edge is easier to hit. Use that for a critical action.

### 2.2 Hick's Law
More choices take longer.
- Split a long flow into steps.
- Menus with more than 10 items become groups or a searchable combobox.
- Do not show 10 or more top-level links in one flat list.
- Expert tools keep controls visible. Hiding them to look simple slows experts.

### 2.3 Jakob's Law
People expect this product to work like the ones they already know.
- Use familiar placements: search is a magnifying glass, destructive actions use a trash metaphor.
- Do not invent an interaction for a standard task.
- Depart from a familiar pattern only when the new one is clearly better.

### 2.4 Miller's Law
Working memory holds about 7 items.
- Chunk phone numbers and card numbers.
- Group controls into labeled sections.
- Do not make the user remember filters across screens.
- Long lists keep headers sticky and filters visible.

### 2.5 Peak-end
People remember the peak and the ending.
- Mark completion and say what to do next.
- Do not end a flow on a blank screen with no receipt and no next step.
- A data loss or a timeout defines the memory of the product. Handle those failures explicitly.

### 2.6 Unfinished tasks
People remember what is incomplete.
- Show progress, such as "Step 2 of 4".
- A checklist may start with the first item already done.
- Do not fake progress or hide how to cancel.

### 2.7 Isolation
The item that looks different gets the action.
- One primary action is filled. Secondary actions are not.
- Do not emphasize every element.
- An isolated element that looks like an ad will be ignored. Keep it looking like part of the product.

## 3. Perception

### 3.1 Proximity
Closer items are read as related. Spacing beats color and borders.
- The space under a heading is smaller than the space above it.
- A label sits closer to its field than to the previous field.
- Do not use the same gap everywhere.
- Grouped icons may look close. Each touch target is still at least 44×44px.

### 3.2 Similarity
Items that look the same are assumed to work the same.
- One treatment means one kind of thing. If links are one color, only links use it.
- Do not style a static status like a clickable tag.
- A ghost button must not look like an empty input. Give it weight, a hover state, or centered text.

### 3.3 Common region
A shared surface reads as a group.
- Use a light surface or a hairline border.
- Do not nest boxes inside boxes. Use space first.
- In dark UI, show elevation with a lighter surface, not a drop shadow.

### 3.4 Figure-ground
People separate the focused layer from the resting layer.
- Put a 40–60% black scrim behind a modal or drawer.
- Text must stay high contrast against its surface.
- Do not lay text on a photo without a scrim, gradient, or solid backing.

### 3.5 Continuity
The eye follows an aligned edge.
- Left-align text. Right-align numbers.
- Do not center paragraphs longer than three lines.
- A line connecting steps means the order is required. If order is free, use separate tabs.

### 3.6 Closure
People complete simple shapes. Extra chrome is noise.
- Row dividers are enough for a table. Do not box every cell.
- Use simple geometric icons.
- Do not add labels that break an obvious structure.

## 4. Inclusivity

### 4.1 Perceivable
- Text contrast is at least 4.5:1. Large text and UI boundaries are at least 3:1.
- Informative images have alt text. Decorative images use `alt=""`.
- Do not use color as the only signal. Pair it with text or an icon.
- Do not fade a disabled control to 30% opacity. Keep it readable, or use a read-only state and explain the block on click.

### 4.2 Operable
- Everything works with Tab, Shift-Tab, Enter, and Space.
- `:focus-visible` is a high-contrast offset outline. Do not remove it without an equal replacement.
- A modal traps focus in a cycle and Escape closes it.
- A menu that opens on hover also opens on click and on keyboard focus.

### 4.3 Understandable
- A control does what it appears to do. A switch does not submit a form or navigate.
- Navigation stays in the same place on every page.
- Do not hijack scrolling.
- Toasts and other live updates use `aria-live="polite"`.

### 4.4 Robust
- Use `button`, `nav`, `main`, and `aside` before ARIA.
- A custom control exposes name, role, and value when no native element fits.
- Do not put a click handler on a `div` or `span` and call it a button.
- Do not add ARIA that repeats what native HTML already says.

## 5. Confirmation

This is the last step before a skill's outcome changes the product. It also owns every stop that needs the partner to choose before the skill continues. It applies to every skill that would execute, implement, change the interface or the flow, or wait on an explicit partner decision.
- Stop and ask the partner to confirm before changing the product.
- Ask for a small change and for a large one.
- Guided and express both ask. Deciding the approach is not a confirmation to implement.
- Do not change the product before they choose. There is no exemption.

**Record writes are not product changes.** The constitution's Confirmation does not apply to design-record writes.

### The choice

Every skill that needs a partner decision uses this shape. Write the work in the message first. Then present the choice. The message is what the partner reads. The choice is how they answer. The work stays in the message. The choice does not replace it, and the message does not replace the choice.

Do not present the choice before the work is written. Do not send the choice in a turn that has no work text. Do not end the turn with the work and free text alone.

Use the option labels the calling skill defines. Keep those labels the same on every host. Present the choice in exactly one of these ways. Never both in the same turn.

**Host picker.** When the host offers a picker for those options (for example `AskQuestion`), use it after the work text, with those same labels. **The picker's message field must be empty or contain only the choice labels.** Do not put the proposal, assumptions, or phase work in the picker message field — that content belongs in the conversation text stream where it is guaranteed visible. Do not print the Choice block. Do not also ask them to type 1 or 2. One decision, one control.

**Choice block.** When the picker is missing or fails, or when the host picker cannot reliably display the proposal alongside the choices, present the choice like this. Do not invent a third pattern. Do not replace this with free-form "please confirm" wording.

```
Choice
1. <first option>
2. <second option>
Reply with 1 or 2. If the second option needs detail, say what to change.
```

Before changing the product, when no narrower skill names the options, use these.
- Implement the change
- Leave the change

A reply of 1, the first option's label, or the picker's first option, accepts. A reply of 2, the second option's label, or the picker's second option, declines or corrects. Any other answer is typed. Treat it as continuing the current work, not as acceptance.

A picker answer is the partner's reply. Act on it in the same response. Do not end on an acknowledgement.

## 6. Design record

When a skill produces a decision, assumption, return, skipped step, or system gap, hand it to `design-record`. That skill owns the living record and `DESIGN_GAPS.md` lifecycle. Use this constitution's Confirmation choice before writing any record file — except when `record: "on"`, where design-record writes without a choice because record writes are not product changes.