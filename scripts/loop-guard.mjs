#!/usr/bin/env node
// ponytail: enforces loop-constraints.md for tricho-astr's sweeper loop.
// Run in CI / before a loop push: `node scripts/loop-guard.mjs`.
// Exits non-zero if any changed file violates the allow/deny lists or limits.

import { execSync } from "node:child_process";
import { existsSync } from "node:fs";

const ROOT = process.cwd();
const MAX_FILES = 5;

const DENY = [
  /\.env/i,
  /secrets?\//i,
  /credentials\//i,
  /\bauth\//i,
  /\bpayments\//i,
  /public\/brochures\//i,
  /package-lock\.json$/i,
];

const ALLOW = [
  /^src\//,
  /^docs\//,
  /^\.github\//,
  /^public\/images\//,
  /^scripts\//,
  /^loop-constraints\.md$/,
  /^loop-budget\.md$/,
  /^loop-run-log\.md$/,
  /^STATE\.md$/,
  /^loop-pause-all$/,
];

function fail(msg) {
  console.error(`loop-guard: ${msg}`);
  process.exit(1);
}

if (existsSync(`${ROOT}/loop-pause-all`)) {
  console.log("loop-guard: loop-pause-all active — halting.");
  process.exit(0);
}

let changed;
try {
  changed = execSync("git status --porcelain", { encoding: "utf8" })
    .split("\n")
    .map((l) => l.slice(3).trim())
    .filter(Boolean);
} catch {
  fail("could not read git status (run inside a git repo).");
}

if (changed.length === 0) {
  console.log("loop-guard: clean tree — no constraints to enforce.");
  process.exit(0);
}

if (changed.length > MAX_FILES) {
  fail(`too many changed files (${changed.length} > ${MAX_FILES}).`);
}

for (const f of changed) {
  if (DENY.some((re) => re.test(f))) fail(`denylist path touched: ${f}`);
  if (!ALLOW.some((re) => re.test(f)))
    fail(`path outside allowlist: ${f} (allowed: src/, docs/, .github/, public/images/)`);
}

console.log(`loop-guard: OK — ${changed.length} file(s) within constraints.`);
