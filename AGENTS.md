# Repository instructions

This repository is the public source-of-truth and backup for Jonathan's
original, reusable agent skills.

## Canonical layout

- Installable skills live in `.agents/skills/<skill-name>/SKILL.md`.
- Skill templates live in `templates/skill/` and are not installable.
- Repository tooling lives in `tools/`; compatibility notes live in `docs/`.
- Treat installed copies as generated outputs. Edit the canonical repository
  copy, validate it, then synchronize it outward.

## Skill rules

- Keep each skill focused on a repeated workflow.
- Use lowercase kebab-case names and match the folder to the frontmatter `name`.
- Put what the skill does and when it triggers in `description`.
- Keep `SKILL.md` concise and put detailed guidance in one-level-deep
  `references/`.
- Prefer instructions over scripts unless deterministic behavior is necessary.
- Keep `agents/openai.yaml` aligned with the skill and include the exact
  `$skill-name` in its default prompt.
- Do not add employer or customer material, credentials, private data, copied
  third-party skills, or system-managed/plugin-provided skills.

## Commands

- Run all checks: `pnpm check`
- Validate skills: `pnpm validate`
- Preview a Codex-compatible sync: `pnpm sync:dry-run`
- Apply a sync only when a person explicitly supplies `--apply`.

Preserve unrelated working-tree changes and run the narrowest additional test
for any scripts added to a skill.
