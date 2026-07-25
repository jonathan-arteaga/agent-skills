import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import {
  discoverSkills,
  parseFrontmatter,
  validateSkillContent,
  validateSkills,
} from "../tools/lib/skills.mjs";

test("frontmatter parser keeps the portable fields", () => {
  const parsed = parseFrontmatter(`---
name: sample-skill
description: Use when a generic sample is needed.
---

# Sample

Follow the steps.
`);

  assert.equal(parsed.error, null);
  assert.equal(parsed.data?.name, "sample-skill");
  assert.match(parsed.body, /Follow the steps/);
});

test("validator catches name drift and draft markers", () => {
  const issues = validateSkillContent(
    `---
name: wrong-name
description: Example.
---

TODO: write this.
`,
    "expected-name",
  );

  assert.deepEqual(issues, [
    'name "wrong-name" must match folder "expected-name"',
    "contains draft marker: TODO",
  ]);
});

test("repository examples are discoverable and valid", () => {
  const root = path.resolve(".agents", "skills");
  const skills = discoverSkills(root);

  assert.deepEqual(
    skills.map((skill) => skill.name),
    [
      "frame-concept-build",
      "validate-project-claims",
      "write-reproducible-demo",
    ],
  );
  assert.deepEqual(validateSkills(root), []);
});

test("validator reports an invalid synthetic fixture", (context) => {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "skill-test-"));
  context.after(() => fs.rmSync(tempRoot, { recursive: true, force: true }));
  const skillRoot = path.join(tempRoot, "broken-skill");
  fs.mkdirSync(skillRoot, { recursive: true });
  fs.writeFileSync(
    path.join(skillRoot, "SKILL.md"),
    "# Missing frontmatter\n",
    "utf8",
  );

  const issues = validateSkills(tempRoot);
  assert.equal(issues.length, 1);
  assert.equal(issues[0]?.message, "missing YAML frontmatter");
});
