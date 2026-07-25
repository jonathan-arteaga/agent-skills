# Demo

Run:

```bash
pnpm test
pnpm demo
```

Expected validation:

```text
Validated 3 skill(s).
```

The synchronization step stays in dry-run mode and prints the destination of
each example without modifying any installed skill folder.

The test suite also creates an invalid synthetic skill in a temporary directory
and proves that missing frontmatter is reported.
