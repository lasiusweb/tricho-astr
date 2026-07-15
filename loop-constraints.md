# Loop Constraints — tricho-astr

Read this file at the start of every loop run. These rules are binding and
override triage priority. Enforced automatically by `scripts/loop-guard.mjs`.

## Paths

- **Allowlist** (the loop may touch): `src/`, `.github/`, `public/images/`,
  `docs/` (excluding `docs/failures/` which is human-owned).
- **Denylist** (never touch — escalate instead): `.env*`, `secrets/`,
  `credentials/`, `auth/`, `payments/`, `public/brochures/*.pdf` (manual asset),
  `package-lock.json`.

## Code & fixes

- One fix per run. No drive-by refactors.
- Never disable `npm run build` or any check to make a fix pass.
- Prefer the smallest diff that works (minimal-fix discipline).

## Push & merge

- Never push to `master` automatically. Open a PR and wait for human approval.
- Never auto-merge.

## Loop task (Placeholder & Drift Sweeper)

1. Scan `src/` for placeholder links (`href="#"`).
2. Scan docs/`AGENTS.md`/`copilot-instructions.md` for claims that no longer
   match the repo (e.g. CI/drift statements).
3. Propose fixes via PR. Auto-fix only trivially safe edits (e.g. adding
   `aria-hidden`/`rel` to intentional placeholders). Real URL swaps need a
   human-provided value — escalate, do not invent URLs.
4. Run `npm run build` as the verification gate (loop-verifier scope check).

## Safety

- If `loop-pause-all` exists at repo root → exit immediately.
- Escalate after 3 failed fix attempts.
