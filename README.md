# UX Atlas

UX skills for agents. Machine-readable rules in `skills/<name>/SKILL.md`.

## Use (do not fork for this)

Install into a project:

```bash
npm install github:ajdcabrera-design/ux-atlas
```

The install writes a pointer at the end of the project's `AGENTS.md` and `CLAUDE.md`. Those files then point at the skills in `node_modules`. Run `npm update ux-atlas` for a newer copy. If install scripts are disabled, run `npx ux-atlas init`.

Or download a project folder from [atlas.aarondesign.rocks](https://atlas.aarondesign.rocks/download).

A `DESIGN.md` at the project root stays the project's file. The package update does not replace it.

## Test before deploying

Run the pre-deploy checks against the current checkout, including a packed install in a fresh consumer project:

```bash
npm run test:predeploy
```

The install check verifies that every local skill is included in the package and that the install hook writes both project pointers. It creates a new `atlas-consumer-<timestamp>` folder inside `~/ux-atlas-predeploy/` on every run and prints the folder's path.

Optional brief after install:

```bash
npx ux-atlas brief
```

## Fork or clone (contribute)

Use this repo to improve **skills**, `instructions/`, `design-systems/`, or the install scripts. Root `AGENTS.md` / `CLAUDE.md` point agents at `skills/` when this checkout is the project root.

The documentation **website** and author tooling live in a separate repo: [ux-atlas-site](https://github.com/ajdcabrera-design/ux-atlas-site). Do not look for `site/` here.

## Skills

Each skill is a folder:

```
skills/<name>/SKILL.md
```

`name` and `description` in the frontmatter tell an agent when to load the file. The body is the rule set. `metadata.updated` and `metadata.updatedBy` record when the rule set last changed and who changed it.
