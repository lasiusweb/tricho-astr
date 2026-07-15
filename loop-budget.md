# Loop Budget — tricho-astr

Daily caps and kill-switches for the Placeholder & Drift Sweeper loop.
Checked by `loop-budget` at the start and end of every run.

## Caps

- `daily_token_cap`: 50000
- `max_subagent_spawns_per_run`: 1
- `max_changed_files_per_run`: 5
- `report_only_threshold`: 0.8   # at/above 80% of daily cap → report-only

## Kill-switch

- Create `loop-pause-all` at repo root to halt all loop activity.
- On self-throttle or pause, append a one-line note to `STATE.md`.

## Alerts This Period

<!-- loop-guard appends throttle/pause alerts here -->
