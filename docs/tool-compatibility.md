# Tool compatibility

The examples use the portable `SKILL.md` shape:

```text
skill-name/
├── SKILL.md
├── references/
├── scripts/
└── assets/
```

Required frontmatter:

```yaml
---
name: skill-name
description: What the skill does and when to use it.
---
```

The dry-run command maps the same canonical folder to these user-level roots:

| target | destination |
| --- | --- |
| codex | `~/.agents/skills` |
| claude | `~/.claude/skills` |
| cursor | `~/.cursor/skills` |
| copilot | `~/.copilot/skills` |

Tool-specific metadata can sit beside a portable skill when it adds value, but
the default examples deliberately avoid it.
