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
