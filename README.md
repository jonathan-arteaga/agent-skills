# Agent Skills Toolkit

**Prototype · synthetic scenario · no commercial use · no business involvement**

A small, portable example of how to author, validate, and safely synchronize
generic agent skills. It includes three original skills, a deterministic
validator, a dry-run-first synchronization command, tests, and a short demo.

> Self-directed concept build using fictional, synthetic, or public information. Not commissioned by or used by a business.

## What I wanted to learn

Whether a reusable instruction library can stay simple, portable, and
inspectable without copying local configuration into a public repository.

## Scenario

The skills and test fixtures were independently written for this concept. They
do not contain employer workflows, private prompts, installed local skills, or
real operational data.

## Repository shape

```text
.agents/skills/          original installable examples
templates/skill/         neutral starting shape
tools/                   validation and synchronization commands
tests/                   parser and validation checks
docs/                    compatibility and demo notes
```

## Run it

Requires Node 24+ and pnpm.

```bash
pnpm test
pnpm demo
```

`pnpm demo` validates the examples and previews a Codex-compatible sync. It does
not write to an installed skill folder.

## Included examples

| skill | purpose |
| --- | --- |
| `frame-concept-build` | Bound an idea with sources, assumptions, evidence, and limits. |
| `validate-project-claims` | Match publication claims to inspectable proof. |
| `write-reproducible-demo` | Create a small demo path with public or invented inputs. |

## Important decisions

- The portable `SKILL.md` file is the source of truth.
- Validation checks naming, required fields, instructions, and draft markers.
- Synchronization is a dry run unless `--apply` is supplied explicitly.
- Existing destinations are skipped unless `--force` is also supplied.
- Tests use temporary synthetic fixtures and remove them afterward.

## Tests and evidence

`tests/skills.test.mjs` covers frontmatter parsing, validation errors, discovery
of all three examples, and an invalid temporary fixture. The
[demo notes](docs/demo.md) show the expected output.

## What remains unresolved

- The frontmatter parser intentionally supports only the simple fields used by
  these examples; it is not a general YAML parser.
- Compatibility is documented, but automated checks only cover the portable
  folder shape.
- Applying a sync changes a user-level folder and therefore remains an explicit
  manual action.

## Provenance

All requirements, examples, code, and fixtures were independently written for
this repository. See [`project.json`](project.json) for the publication metadata
and disclosure.
