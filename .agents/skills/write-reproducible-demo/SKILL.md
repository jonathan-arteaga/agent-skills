---
name: write-reproducible-demo
description: Use when a repository needs a short demo path that another person can run, inspect, and verify without private data or hidden setup.
---

# Write a reproducible demo

1. Identify the single behavior the demo should prove.
2. Use bounded fictional, synthetic, or cited public input.
3. Make setup requirements explicit and minimal.
4. Provide one command that runs the primary path.
5. Show the expected output without hiding failures.
6. Add an automated check for the key result.
7. Document what the demo does not establish.

Return setup, run command, expected result, evidence location, and limitations.
Never require credentials for the default demo path.
