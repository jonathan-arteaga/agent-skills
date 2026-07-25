---
name: validate-project-claims
description: Use before publishing a project description to check that status labels and written claims are directly supported by inspectable repository evidence.
---

# Validate project claims

1. List each reader-facing claim as a separate sentence.
2. Point every claim to code, a test, a demo, a result, or a public source.
3. Mark unsupported claims for removal or rewrite.
4. Check that `Concept`, `Prototype`, or `Complete` matches the current artifact.
5. Separate measured results from intended behavior.
6. Confirm limitations are visible beside the strongest claims.
7. Run the narrowest command that reproduces the stated evidence.

Return a table with: claim, evidence, status, needed change, and verification
command. Do not upgrade a status because the copy sounds finished.
