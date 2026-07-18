# Student Directory Data Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the 21 valid, unique students missing from the BSSV student directory.

**Architecture:** Keep the existing inline `Student[]` data source and UI unchanged. Add a focused Node source-data test that treats the Astro file as text and verifies inclusion, exclusion, and deduplication rules without introducing a test dependency.

**Tech Stack:** Astro 5, TypeScript, Node.js built-in test runner

## Global Constraints

- Exclude the ambiguous Md Ashfak Hossain submission.
- Merge the two MD.AL-AMIN submissions into one normalized `Md. Al-Amin` entry.
- Keep records for students who do not currently live in Vienna.
- Normalize university and department labels to the directory's existing conventions.
- Do not expose phone numbers or add image links to the rendered UI.
- Do not change the directory layout, search, filters, statistics, or WhatsApp-status behavior.

---

### Task 1: Add and verify the missing student records

**Files:**
- Create: `tests/student-directory-data.test.mjs`
- Modify: `src/pages/student_data.astro`

**Interfaces:**
- Consumes: The `const students: Student[]` source array in `src/pages/student_data.astro`.
- Produces: 21 new `Student` objects consumed by the page's existing grouping, statistics, search, and filter logic.

- [ ] **Step 1: Write the failing source-data test**

Create `tests/student-directory-data.test.mjs`:

```js
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const source = await readFile(
  new URL("../src/pages/student_data.astro", import.meta.url),
  "utf8"
);

const expectedNames = [
  "Piyal Saha",
  "Md. Al-Amin",
  "Abdullah Al Foysal",
  "Khorshida Alam Tonmoy",
  "Sajid Hasan",
  "Kazi T M Tariqul Haque",
  "Md Anas Bin Islam",
  "Jannatul Ferdous",
  "Mahmudul Hasan Saron",
  "Rakib Hasan Arnob",
  "Tanjim Khan Nokib",
  "Amina Mim",
  "Mohammad Lutfur Rahman",
  "Bushra Shakil",
  "Puja Sarkar Moly",
  "Mohammad Imam Hossain",
  "Mezbaul Alam",
  "Taunika Chowdhury",
  "Nazia Saiful",
  "Hasibul Hasem Shanto",
  "Mohammad Rashedul Islam",
];

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function countStudentEntries(name) {
  const pattern = new RegExp(
    `\\{\\s*name:\\s*"${escapeRegExp(name)}"\\s*,`,
    "g"
  );
  return source.match(pattern)?.length ?? 0;
}

test("contains each valid missing student exactly once", () => {
  for (const name of expectedNames) {
    assert.equal(countStudentEntries(name), 1, name);
  }
});

test("excludes the ambiguous submission", () => {
  assert.equal(countStudentEntries("Md Ashfak Hossain"), 0);
});

test("merges the duplicate Al-Amin submissions", () => {
  assert.equal(countStudentEntries("Md. Al-Amin"), 1);
  assert.doesNotMatch(source, /name:\s*"MD\.AL-AMIN"/i);
});
```

- [ ] **Step 2: Run the test and verify the expected failure**

Run: `node --test tests/student-directory-data.test.mjs`

Expected: the inclusion test fails on `Piyal Saha` because the new records have not been added; the exclusion test passes.

- [ ] **Step 3: Add the normalized students to their university groups**

Add these objects to the existing `students` array, adjacent to the matching university groups:

```ts
{ name: "Abdullah Al Foysal", university: "University of Vienna", department: "Applied Economics", whatsapp: "+436764987341" },
{ name: "Kazi T M Tariqul Haque", university: "University of Vienna", department: "Communication", whatsapp: "+436787900076" },
{ name: "Mohammad Lutfur Rahman", university: "University of Vienna", department: "Cultural Differences and Transnational Processes", whatsapp: "+436765329796" },
{ name: "Nazia Saiful", university: "University of Vienna", department: "Applied Economics", whatsapp: "+4306601966410" },
{ name: "Mohammad Rashedul Islam", university: "University of Vienna", department: "Biochemistry", whatsapp: "+8801719815069" },
{ name: "Khorshida Alam Tonmoy", university: "TU Wien", department: "Data Science", whatsapp: "+436765461164" },
{ name: "Sajid Hasan", university: "TU Wien", department: "Biomedical Engineering", whatsapp: "6764126827" },
{ name: "Md Anas Bin Islam", university: "BOKU University", department: "Horticultural Sciences", whatsapp: "+4368864620141" },
{ name: "Puja Sarkar Moly", university: "BOKU University", department: "Danube AgriFood Master (Erasmus Mundus Program)", whatsapp: "+8801534696686" },
{ name: "Bushra Shakil", university: "WU Vienna", department: "Digital Economy", whatsapp: "+4366567139966" },
{ name: "Jannatul Ferdous", university: "Modul University Vienna", department: "Sustainable Development", whatsapp: "+4368181923302" },
{ name: "Mezbaul Alam", university: "FH JOANNEUM Graz", department: "Global Strategic Management", whatsapp: "+4368864885616" },
{ name: "Piyal Saha", university: "Medical University of Vienna", department: "Immunology", whatsapp: "+436767088301" },
{ name: "Md. Al-Amin", university: "University of Graz", department: "Biology", whatsapp: "+4367764738182" },
{ name: "Mahmudul Hasan Saron", university: "University of Graz", department: "Data Science", whatsapp: "+436502307659" },
{ name: "Rakib Hasan Arnob", university: "University of Graz", department: "Computational Social Systems", whatsapp: "+4367762325370" },
{ name: "Tanjim Khan Nokib", university: "University of Graz", department: "Computational Social Systems", whatsapp: "+4369981461388" },
{ name: "Amina Mim", university: "University of Graz", department: "Computational Social Systems", whatsapp: "+4369010542891" },
{ name: "Mohammad Imam Hossain", university: "University of Graz", department: "Computational Social Systems", whatsapp: "+436765947389" },
{ name: "Hasibul Hasem Shanto", university: "University of Graz", department: "Data Science", whatsapp: "+436505767679" },
{ name: "Taunika Chowdhury", university: "Central European University (CEU)", department: "Critical Gender Studies", whatsapp: "+4367763402709" },
```

- [ ] **Step 4: Run the focused test and verify it passes**

Run: `node --test tests/student-directory-data.test.mjs`

Expected: 3 tests pass and 0 tests fail.

- [ ] **Step 5: Run formatting, lint, and production verification**

Run: `npx prettier --write src/pages/student_data.astro tests/student-directory-data.test.mjs docs/superpowers/plans/2026-07-18-student-directory-data-update.md`

Expected: all three files are formatted successfully.

Run: `npm run lint`

Expected: exit code 0 with no ESLint errors.

Run: `npm run build`

Expected: Astro check and build, Pagefind indexing, and public asset copy all exit successfully.

- [ ] **Step 6: Commit the implementation**

```bash
git add src/pages/student_data.astro tests/student-directory-data.test.mjs docs/superpowers/plans/2026-07-18-student-directory-data-update.md
git commit -m "feat: add missing students to directory"
```
