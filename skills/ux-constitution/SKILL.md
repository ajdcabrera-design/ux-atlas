---
name: ux-constitution
description: Foundational UX rules for interaction, psychology, perception, and accessibility, with their thresholds and exceptions. Use for any interface work. Confirmation and the Choice block are in the always-on instructions, not in this body.
triggers:
  - "interface"
  - "UI"
  - "UX"
  - "accessibility"
  - "screen"
  - "button"
  - "form"
  - "modal"
excludes:
  - "copy-only"
  - "flow-only"
  - "IA-only"
  - "evidence-only"
  - "direction-only"
tokenBudget:
  summary: 45
  body: 2300
metadata:
  updated: "2026-10-07"
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
- A multi-step operation shows progress for each step, not one global spinner.
- For a reversible action, show success at once and roll back if it fails.
- If data may be stale, show a refresh indicator. Do not block interaction.

### 1.2 Language
Use the user's words, not the system's.
- Button labels are specific verbs: "Delete project", not "Submit".
- Do not show stack traces, schema names, or raw error codes.
- Replace "Ascending" and "Descending" with "Price: low to high" or "Date: newest first".
- For a developer audience, schema names and error codes may be the user's words.
- Required legal phrasing overrides a verb-only label.

### 1.3 Exits
Every unwanted state needs a visible way out.
- Provide Back, Cancel, and a clear close control. Backdrop click may close a modal.
- Use an Undo toast for low-stakes destructive actions.
- Do not trap the user or make the browser Back button the only exit.
- For irreversible destruction, require typing the object name. Prefer a 30-day soft delete over an immediate purge.
- A batch action takes one confirmation, not one per item. Show the count and a sample of what is affected.
- A timed soft delete takes one confirmation, not two.

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
- An expert-mode toggle that shows every control is valid when the default hides complexity.

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
- A modal opened over a modal gets its own scrim. The lower one stays visible and inactive.

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
- Drag and drop has a keyboard alternative: Space to pick up, arrows to move, Space to drop.
- In a data table, arrow keys move between cells. Home and End jump to the ends of the row, and with Ctrl to the corners of the table.
- A carousel or autoplay pauses on hover and on focus, and has previous and next controls.

### 4.3 Understandable
- A control does what it appears to do. A switch does not submit a form or navigate.
- Navigation stays in the same place on every page.
- Do not hijack scrolling.
- Toasts and other live updates use `aria-live="polite"`.
- Use `aria-live="assertive"` only for a critical alert, such as data loss or a security warning.

### 4.4 Robust
- Use `button`, `nav`, `main`, and `aside` before ARIA.
- A custom control exposes name, role, and value when no native element fits.
- Do not put a click handler on a `div` or `span` and call it a button.
- Do not add ARIA that repeats what native HTML already says.
