# Agent Skills

Jonathan's public source-of-truth for original, reusable agent skills.

This repository has two jobs:

1. Share useful workflows that other people can inspect, adapt, and use.
2. Keep a versioned backup of the skills worth carrying between tools and
   machines.

The installable folders under `.agents/skills/` are the canonical copies.
Locally installed copies are generated from this repository and should not be
edited as separate sources.

## Included skills

| Skill | Purpose |
| --- | --- |
| [`frame-concept-build`](.agents/skills/frame-concept-build/SKILL.md) | Turn an exploratory idea into a bounded, evidence-backed concept. |
| [`review-apple-platform-app`](.agents/skills/review-apple-platform-app/SKILL.md) | Audit or improve an iOS or macOS project across engineering and product quality. |
| [`validate-project-claims`](.agents/skills/validate-project-claims/SKILL.md) | Check public project claims against inspectable evidence. |
| [`write-reproducible-demo`](.agents/skills/write-reproducible-demo/SKILL.md) | Create a small demonstration another person can run and verify. |

Each skill uses the portable `SKILL.md` shape. Longer, area-specific guidance
lives in `references/` so an agent loads only what the task needs.

## Design patterns worth borrowing

- **Bound the work before building.** `frame-concept-build` makes assumptions,
  exclusions, evidence, and stop conditions part of the artifact.
- **Use one clear trigger with selective depth.** `review-apple-platform-app`
  keeps its operating protocol small and routes detailed review areas to
  on-demand references.
- **Turn claims into an evidence contract.** `validate-project-claims` requires
  every public statement to point to something another person can inspect.
- **Treat a demo as reproducible proof.** `write-reproducible-demo` favors one
  runnable path, expected output, an automated check, and visible limitations.

These are patterns, not rules for every skill. Copy the underlying decision when
it fits; do not copy repository-specific instructions blindly.

## Use the skills

Requires Node 24+ for the repository tools. `pnpm` is needed only for the test
and verification commands.

Validate and preview a Codex-compatible installation:

```bash
pnpm install
pnpm check
node tools/sync-skills.mjs --dry-run --target codex
```

Install all skills after reviewing the dry run:

```bash
node tools/sync-skills.mjs --apply --target codex
```

Install one skill:

```bash
node tools/sync-skills.mjs \
  --apply \
  --target codex \
  --skill review-apple-platform-app
```

Existing destination folders are skipped unless `--force` is supplied. See
[`docs/tool-compatibility.md`](docs/tool-compatibility.md) for other targets.

## Add or improve a skill

1. Start with `templates/skill/`.
2. Create `.agents/skills/<skill-name>/SKILL.md`.
3. Make the frontmatter `name` match the folder and put clear trigger language
   in `description`.
4. Keep `SKILL.md` concise. Put detailed checklists and domain guidance in
   `references/`.
5. Add `agents/openai.yaml` when the skill benefits from Codex UI metadata.
6. Run `pnpm check`, review the dry-run sync, then commit and push.

Committing the canonical skill and pushing it to the remote is the backup
workflow. Do not copy system-managed, plugin-provided, employer, customer, or
private instructions into this repository.

## Repository shape

```text
.agents/skills/          canonical installable skills
templates/skill/         starter shape for a new skill
tools/                   validation and dry-run-first synchronization
tests/                   repository tool and skill-structure checks
docs/                    compatibility and verification notes
```

## Safety and provenance

The workflows here were authored for personal and public use. They may be
inspired by recurring problems, but they exclude employer or customer material,
credentials, private operational data, and copied third-party installed skills.
Tests use temporary synthetic fixtures.

The repository absorbed the useful, generic material from the former private
skills archive on July 27, 2026. Its unrelated Git history was intentionally not
merged into this public repository.

## License

[MIT](LICENSE). Use, adapt, and share the skills with attribution.
