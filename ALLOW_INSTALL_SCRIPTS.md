How to allow required install scripts (esbuild / sharp)

The repo disables lifecycle scripts by default (.npmrc sets `ignore-scripts=true`). If a package legitimately requires postinstall/build scripts (esbuild, sharp), follow one of these safe approaches:

1) Temporary local enable (developer)

  # Re-enable scripts for this machine, install, then restore
  npm config set ignore-scripts false
  npm install
  # After install, revert for safety
  npm config set ignore-scripts true

2) Use a scoped allowlist tool

  - Consider @lavamoat/allow-scripts to create a per-package allowlist. See its README for setup.

3) CI exceptions (preferred minimal surface)

  - Avoid enabling scripts globally in CI. If a build step truly needs them, run a dedicated job with limited scope and explicit approval.

4) Use pnpm with allowBuilds (advanced)

  - If migrating to pnpm, use `pnpm-workspace.yaml` allowBuilds to limit builds to known packages.

If unsure which packages require scripts, run `npm install` locally with `npm config set ignore-scripts false` and inspect which packages run postinstall. Document any approved exceptions in this file and in PR descriptions.