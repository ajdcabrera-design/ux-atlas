# UX Atlas

UX skills for agents. Machine-readable rules in `skills/<name>/SKILL.md`.

## Use (do not fork for this)

Install into a project:

```bash
npm install ux-atlas
npx ux-atlas init
```

The second command writes a pointer at the end of the project's `AGENTS.md` and `CLAUDE.md`. Those files then point at the skills in `node_modules`. npm 12 and later do not run a package's install script unless the project approves it, so the pointer is not added during the install. Running the command again changes nothing. Run `npm update ux-atlas` for a newer copy.

Or download a project folder from [atlas.aarondesign.rocks](https://atlas.aarondesign.rocks/download).

A `DESIGN.md` at the project root stays the project's file. The package update does not replace it.

## Record settings

The install creates `.atlas/config.json` and `.atlas/README.md`. Set `record` to control when UX Atlas writes its living design record:

```json
{
	"record": "ask"
}
```

- `ask` is the default and asks before writing.
- `on` writes eligible records automatically.
- `off` keeps the record in the reply and writes no record files.

The record uses `.atlas/runs/` for history, `.atlas/decisions.md` for active decisions, and `DESIGN_GAPS.md` for open gaps. Handoff specs for engineering go in `.atlas/handoff/`, one timestamped file per run, under the same `record` setting. Edit `.atlas/config.json` directly; no CLI override is currently provided.

## Fork or clone (contribute)

Use this repo to improve **skills**, `instructions/`, `design-systems/`, or the install scripts. Root `AGENTS.md` / `CLAUDE.md` point agents at `skills/` when this checkout is the project root.

The documentation **website** and author tooling live in a separate repo: [ux-atlas-site](https://github.com/ajdcabrera-design/ux-atlas-site). Do not look for `site/` here.

## Skills

Each skill is a folder:

```
skills/<name>/SKILL.md
```

`name` and `description` in the frontmatter tell an agent when to load the file. The body is the rule set. `metadata.updated` and `metadata.updatedBy` record when the rule set last changed and who changed it.
