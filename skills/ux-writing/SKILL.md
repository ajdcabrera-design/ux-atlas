---
name: ux-writing
description: Write, rewrite, name, or audit interface copy. Covers voice and tone, buttons, labels, headings, empty states, errors, success, hints, destructive confirmation, and copy review across screens. Use when the prompt asks for interface copy or content, asks for words, asks how the product should sound, or asks for a copy audit. During a design pipeline, apply only in Surface, after screen-composition, for voice then strings. A copy-only request does not start the design pipeline. Do not invent a playful voice for sport.
triggers:
  - "copy"
  - "wording"
  - "label"
  - "button text"
  - "error message"
  - "empty state"
  - "voice"
  - "tone"
  - "rename button"
  - "audit copy"
  - "interface text"
excludes:
  - "flow-only"
  - "IA-only"
  - "evidence-only"
  - "direction-only"
  - "layout"
  - "design"
  - "review-only"
tokenBudget:
  summary: 45
  body: 1450
metadata:
  updated: "2026-10-09"
  updatedBy: Aaron Cabrera
---

Write the words a person reads in the interface. The constitution judges the interface. This skill decides the words and how the product speaks. If they conflict, the constitution wins on clarity and honesty.

A `DESIGN.md` at the project root may set terminology, casing, length limit, voice, or tone. Follow it when it speaks. Do not invent a competing brand voice when it already states one.

Do not generate marketing assets, campaign decks, logos, or image copy factories. Do not invent a quote or a claim that readers tested the copy.

## When to run

- The request is only to write, rewrite, name, or audit interface copy, or to set how the product should sound. Run this skill. Do not start the design pipeline.
- The design pipeline is in Surface. Settle voice and tone for this screen if needed, then write the strings.
- Do not run during Frame, Define, Scope, Structure, Check, or Review unless the partner asked for words or voice in that turn.

Ask one question, and only if two audiences would use different words for the same object, or if voice is unknown and the ask needs it. Otherwise use the partner's word and state that assumption.

## Voice and tone

Do this before writing or auditing strings when voice is not already settled for this work.

**Voice** is who the product is. It stays stable across screens.
**Tone** is how the product sounds in a moment. It shifts: errors stay calm; success stays short; empty stays plain; destructive moments stay serious; celebratory moments may warm without becoming false.

1. **Already stated.** If `DESIGN.md`, the prompt, or this conversation already gives voice and tone, record them (Decided or Assumed) and do not stop to ask.
2. **Ask.** If unknown and the work needs a voice decision, ask one or two plain questions — for example how formal they want to sound, and three words they want people to feel. Say why it matters for on-screen words.
3. **Default.** If they cannot say, use plain and direct. Record that Assumed. Do not invent a playful, quirky, or “fun” brand personality.

Respect the product class from Define when one exists (for example denser and more formal for a work tool; warmer for a showcase). Class hints formality; this section still names the voice.

Do not use slang, memes, or jokes in errors, money, health, or irreversible moments.

When the ask is only voice or tone, produce the short guide (voice, tone by moment, words to prefer or avoid, assumptions) and stop. Do not invent a full string set unless they asked for strings too.

## How people read

People scan before they read. The first words carry the decision.
- Put the useful word first. "Save changes", not "Click here to save your changes now."
- Clarity comes before brevity. Keep the word that prevents a mistake.
- One string does one job. The button acts. The hint explains. Do not make one do both.
- Cut promotional lines. The product states what is true.

## Controls and labels

A control says what will happen, in the partner's words.
- Use a verb and the object: "Save changes", "Delete project".
- Sentence case. No period on a label, a button, or a heading.
- Full sentences elsewhere, with a period.
- Do not use "Submit", "OK", "Click here", or "Learn more" when a specific action exists.
- Do not instruct with color, shape, or position. "Choose Save changes", not "Click the green button".
- Omit "please" and "thank you" in ordinary interface text.

## States

### Empty
Say what belongs here and the action that fills it. Example: "No projects yet." then "Create a project to start." Do not leave a title with no next step.

### Error
Say what failed and how to fix it. Name the field or action. Do not blame the person. Do not joke. Say "sorry" only when the product failed outright, then the next step. If a safe correction is known, offer it. The constitution owns stack traces, login vagueness, and keeping typed input — words must still make sense beside that behavior.

### Success
One line that states the outcome. Example: "Changes saved." No thank-you paragraph.

### Destructive
The control names the object. The confirmation says what will be lost and that it cannot be undone, when that is true. Example: "Delete project" / "This project will be removed. You cannot undo this." The constitution owns the irreversible-delete interaction; write the words for that step, do not soften the label.

## Copy audit

When the partner asks to audit or review copy across a project or many screens:

1. Settle voice and tone (silent if already known; default plain and direct if they cannot say).
2. Walk the existing interface strings against that voice, tone-by-moment, these writing rules, and the constitution.
3. Report what breaks voice, tone, clarity, or consistency, with rewritten strings where a fix is needed.

Reading existing product copy in the project is allowed for this audit.

A single block (for example hero landing copy) is ordinary write/rewrite under voice and tone — not a full-project audit.

## What to hand back

Surface, or a copy-only request: each string labeled with its job. Include only the states the screen has. When voice was decided in this turn, state it once above the strings.

- Button: …
- Empty: …
- Error: …
- Success: …
- Hint: …, only when a format or a consequence is not obvious from the label.

If a length limit cuts the string, keep the verb and the object. Cut the rest.

When this skill is used on its own, stop after the guide and/or the strings. Do not change the product. The constitution asks before any change. During the design pipeline, hand the strings to that stage and do not ask to implement here.
