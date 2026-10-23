# Commit inventory: personal and client repos (anonymized)

Resolves issue #2. Scope: every git repository under the personal projects directory (excluding this website). Scan date 2026-10-23. Terms follow `GLOSSARY.md`. Valerio is referred to as they/them.

This version is anonymized: private repositories are described generically, with no client names, repo names, URLs or commit hashes. Public repositories are named. The full detail (hashes, names) lives only in a local, git-ignored file.

## Method and caveats

- 52 git repositories found. About 40 clones or copies contain at least one commit by Valerio (some are duplicate clones of the same project); the rest are empty `git init`s, third-party clones, or forks with no authored commits.
- Counts use all refs (`--all`), so they include merge commits, stash-style `WIP on` / `index on` commits and cherry-picked duplicates. Treat them as upper bounds.
- Author identities, all clearly Valerio: `Valerio Farrotti <valerio.farrotti@gmail.com>` (primary), the same address under the handles `vallops99` and `vallops`, and one work address used for two PR-merge commits in one client repo. No other identity found.
- Several client codebases are cloned more than once with different local branches; unique counts are used where it matters.
- Many September and October 2026 repositories were built in visibly agent-assisted workflows (ticket-style merges, ADRs, agent worktrees). Authorship under Valerio's identity is intact, but the wording of ownership Claims for those should be decided deliberately.
- Remote visibility was checked with the GitHub CLI for GitHub remotes. Other hosts' remotes were assumed private.

## Classification summary

| Group | Repos with Valerio commits | Valerio commits (approx.) | Class |
|---|---|---|---|
| Client A: industrial process-scheduler platform (backend engine, dashboard UI, dashboard API) | 3 | 115 | Shipped work |
| Client B: production-line computer-vision inspection suite (analysis pipeline, API backend, 2 UIs, data forwarder, sensors, recorder, reporting, small tools) | about 15 | about 420 unique | Shipped work |
| Small-business Client C: WordPress plugin | 1 | 2 | Shipped work (confirm delivery) |
| Tax-assistance product (Rust API + Flutter mobile app) | 2 | 140 | Unclassified, needs confirmation |
| Solar-plant observability pilot (prospective energy client, simulator-based) | 1 | 11 | Unclassified, leaning Exploration |
| Small-business scaffold (Next.js) | 1 | 1 | Unclassified, scaffold only |
| Home Assistant dashboard builder (`OHomeMy`, public) | 1 | 159 | Exploration |
| Home Assistant configuration | 1 | 7 | Exploration |
| NixOS workstation config (`nixos-config`, public) | 1 | 27 | Exploration |
| Arduino hobby project | 1 | 12 | Exploration |
| Forks / clones with no authored commits (`helix`, `rustlings`, plus two third-party clones) | 4 | 0 | no Evidence |

## Per-repo facts

Share = Valerio's commits over all commits in that repo.

### Client A: process-scheduler platform (Shipped work)

- Scheduler engine (Java, Spring Boot, JPA, Oracle, RabbitMQ, Docker): 100 commits of 513 (19.5%), 2026-07-17 to 2026-10-09 (the repo itself dates from 2022). Valerio is a major recent contributor among three other authors. Private remote.
- Dashboard UI (Next.js, React, TypeScript, Vitest): 10 of 468 (2.1%), 2026-10-09 to 2026-10-12. Contributor.
- Dashboard API (Java): 5 of 139 (3.6%), 2026-07-16 to 2026-10-10. Contributor.
- Evidence of production-style delivery: CI pipelines, container-orchestration manifests, release notes and runbooks in the repos.
- What was built: moved the scheduler's run state out of memory into the relational database so any number of instances can serve any callback. Transitions are serialised with row locks, a lease-based deadline sweeper enforces timeouts, a live-instance table detects cold starts, and a schema-drift test catches entity versus migration mismatches. Then consolidated the run logic into a single run engine and added nested "group" steps (parallel groups, output propagation over nested trees, definition validation) end to end across engine, API and editor UI.
- Fork status: not a fork.

### Client B: production-line inspection suite (Shipped work)

A computer-vision system that inspects sheet material on a manufacturing line and raises alerts in real time. The code base was inherited from an earlier team, and Valerio joined in June 2025 and kept contributing until October 2026. Remotes are private; some are private forks hosted in an organisation account, whose upstream I could not see, so I cannot say whether any commit went upstream. No public fork.

| Component | Valerio commits | Total | Share | Range | Ownership |
|---|---|---|---|---|---|
| Camera analysis pipeline (Python, multi-process, C extensions) | 89 | 704 | 12.6% | 2025-06 to 2026-10 | contributor |
| API backend (Python and Node, PostgreSQL, InfluxDB, WebSockets) | 119 unique | 998 unique | 11.9% | 2025-06 to 2026-10 | contributor |
| Operator and admin UIs (Vue 2) | 47 unique | 769 unique | 6.1% | 2025-06 to 2026-10 | contributor |
| Data forwarder and nginx image serving | 18 | 185 | 9.7% | 2025-07 to 2026-10 | contributor |
| Sensor service (C#, BLE) | 8 | 132 | 6.1% | 2025-10 to 2026-09 | contributor |
| Dual line-scan camera recorder (C#, .NET Framework 4.8, ffmpeg) | 35 | 35 | 100% | 2026-09 | sole author |
| Automated per-session report pipeline (Python, Google Sheets and Drive) | 37 | 37 | 100% | 2026-09 to 2026-10 | sole author |
| Stats page (Python, pandas, Docker) | 13 | 14 | 93% | 2026-04 | main author |
| Small tools (monitoring compose, CDN containers, Nix packaging, Python port stub) | 7 | about 8 | about 90% | 2026-04 to 2026-10 | creator |

What was built:
- Pipeline: split frame production into two processes with a frame orderer, one time-series write per sheet, error typing, Discord notifications for session start and end, automatic session video recording with cloud upload, refactored C extension builds to compile with the project, platform-agnostic paths and `.env` configuration, test framework.
- Backend: moved all error checking server-side with a 900+ line test suite, per-error WebSocket counts, CAD-based flaw detection that rejects unusable CADs and stores flaws (new parser checks, recheck script, open-hole detection), fixed an event-loop blocking parse path, upgraded the production image.
- UI: threshold-based error handling, double-buffered live image swap, CAD flaw display, nginx serving.
- Recorder: pairs two line-scan camera half-streams into one stitched strip using timestamp frame slots, vendor SDK adapter, FFV1 encoding through a ring buffer into an ffmpeg pipe, scheduled and manual triggers, cloud upload per clip, on-site deploy scripts, ADRs. Roughly 20k lines added in 9 days.
- Reports: InfluxDB and Prometheus to Google Sheets and Drive, sampled-image pipeline, measurement column with backfill.
- Several repos in this suite contain only 1 to 3 commits by Valerio and are not meaningful Evidence on their own.
- Classification reasoning: a paid, long-running engagement with a live production line, alerts for live sessions, and on-site deploy tooling.
- Uncertain: which Client this work is formally delivered for (whether it is a separate Client or routed through another of Valerio's Clients).

### Small-business Client C: WordPress plugin (Shipped work, confirm delivery)

- PHP/WordPress PDF-upload plugin with front-end table and delete, Docker dev stack. 2 commits of 2 (100%), 2026-03-27, private remote.

### Tax-assistance product: Rust API and Flutter app (unclassified)

- API (Rust, Axum, SQLx, PostgreSQL, JWT with refresh rotation, Google and Facebook OAuth with account linking, S3 storage, OpenAPI, TDD): 61 of 61 commits (100%), 2026-05-12 to 2026-10-22.
- Mobile app (Flutter, Dart, BLoC, Dio, secure storage, mock mode, iOS CI): 79 of 79 (100%), 2026-06-25 to 2026-10-22.
- Sole author. Highlights: profile-status state machine with admin approval, local verification of Google ID tokens with key-set caching, Facebook token verification, atomic session rotation, deployment runbook.
- Why unclassified: the repo's own status says production deployment and store submission are pending, it has its own product glossary, and no client is named. It could be the client project of an unnamed organisation, Valerio's own product, or work in progress. Needs the user's answer.

### Solar-plant observability pilot (unclassified, leaning Exploration)

- 11 of 11 commits, 2026-09-09 to 2026-09-14, local only (no remote). Sole author.
- A pilot for a prospective energy client replacing a hand-built Raspberry Pi and InfluxDB setup: Modbus/SunSpec simulator, Telegraf to OpenTelemetry, a versioned metrics contract validated by tests, SigNoz with ClickHouse, dashboards and alerts as code, dead-man's switch, retention and a rehearsed restore.
- Why unclassified: built against a simulator as a sales demo, with nothing showing delivery. Technical depth is high either way.

### Small-business scaffold (unclassified)

- 1 commit: a Next.js application scaffold (about 1.9k lines). No further work, so no Evidence beyond "can scaffold a Next.js app".

### Exploration repos

- `OHomeMy` (public GitHub repo, not a fork): 159 of 159 commits (100%), 2026-09-18 to 2026-10-22, creator. A Home Assistant integration for building house dashboards graphically (Python custom component plus a React 19, TypeScript, Vite frontend): drag-and-drop Builder, draft/publish/history/undo, widget library, theming, i18n and right-to-left, 18 ADRs, HACS release. Personal home use, so Exploration under the glossary even though it is public and released. Built with an agent-assisted workflow.
- Home Assistant configuration (private, no remote): 7 commits, 2026-09-17. Home dashboard and theme.
- `nixos-config` (public, not a fork): 27 of 27 commits, 2025-02-09 to 2026-09-14, creator. NixOS flake with home-manager, editor config, container and VPN setup.
- Arduino hobby project (private): 12 of 12 commits, 2025-05 to 2026-06, with GitHub Actions experiments.

### Forks and clones with no authored commits

- `helix` (public fork of the Helix editor) and `rustlings` (public fork): 0 commits by Valerio on any branch, so nothing was merged upstream. Two other directories are plain clones of third-party public projects (a BitLocker tool and a Python-to-Nix tool) with no commits by Valerio. None of these backs any Claim.

## Ranked shortlist of candidate Accomplishments

Ranked by impact, then technical depth, then ownership. Commit hashes for the private repos are deliberately withheld; they are in the local private file.

1. **Stateless, horizontally scalable job scheduler for an industrial-automation Client (Client A).** Engine rewrite with database row-lock state machine, lease-based deadline sweeper, multi-instance operation, followed by nested parallel groups delivered across engine, API and editor UI. Strong impact and depth; ownership is major but shared (19.5% of the engine).
2. **Real-time inspection platform for a production line (Client B): analysis pipeline, backend and CAD flaw detection.** 16 months on a live line; multi-process computer-vision pipeline, time-series storage, WebSocket alerting, CAD-derived geometry checks. Contributor (about 12%).
3. **Dual line-scan camera recorder (Client B).** Timestamp-slot stitching of two camera streams, FFV1 encoding via ring buffer and ffmpeg, cloud upload, on-site deploy tooling. Sole author, high depth; field deployment not confirmed from commits.
4. **Automated per-session production reports (Client B).** Time-series data to Google Sheets and Drive with sampled images and a measurement column. Sole author, moderate depth.
5. **Provisional, pending classification: tax-assistance product (Rust API and Flutter app).** Sole author, about 140 commits; if it turns out to be client or production work it would rank in the top two on ownership and depth.
6. **WordPress PDF-upload plugin for a small-business Client (Client C).** Small, complete artifact; confirm delivery first.

Exploration highlights (never back professional Claims): the public Home Assistant dashboard builder, the solar-plant pilot (pending classification) and the public NixOS configuration.

## Tech evidence matrix

`?` marks a dependence on an open classification question.

| Technology | Shipped work | Exploration |
|---|---|---|
| Python | Client B pipeline, backend, forwarder, stats, reports | solar pilot ?, Home Assistant integration (`OHomeMy`) |
| Java, Spring Boot, JPA, Flyway | Client A scheduler and API | - |
| Oracle database | Client A | - |
| RabbitMQ | Client A | - |
| Node.js (Express, Sequelize) | Client B backend | - |
| TypeScript, React, Next.js | Client A dashboard | `OHomeMy` (React 19, Vite) |
| Vue 2, Vuetify | Client B UIs | - |
| C# and .NET Framework | Client B recorder and sensor service | - |
| C and Cython extensions | Client B pipeline (build refactor) | - |
| Computer vision (OpenCV, masks, registration) | Client B pipeline | - |
| Rust (Axum, SQLx) | tax product ? | `rustlings` fork (0 commits, no Evidence) |
| Flutter, Dart | tax product ? | - |
| PostgreSQL | Client B backend, tax product ? | - |
| InfluxDB and time-series | Client B (pipeline, backend, forwarder, reports) | solar pilot (ClickHouse) ? |
| WebSockets | Client B backend and UI | - |
| OAuth and JWT | tax product ? | - |
| OpenAPI | Client B backend, tax product ? | - |
| Docker and Compose | Clients A and B, tax product ? | solar pilot, `nixos-config` |
| Nginx | Client B | - |
| Google Drive and Sheets APIs | Client B | - |
| ffmpeg and video encoding | Client B recorder and pipeline | - |
| PHP, WordPress | Client C plugin | - |
| Nix, NixOS, flakes | Client A dev shell, tax product ? | `nixos-config`, `OHomeMy` |
| Home Assistant | - | `OHomeMy`, local configuration |
| OpenTelemetry, SigNoz, Modbus | - | solar pilot ? |
| Arduino, C++ | - | hobby project |
| Kubernetes manifests, CI pipelines | Client A repos contain them; Valerio's commits only touched the container image, so not backed | - |

## Questions that need the owner's answer

1. Is the tax-assistance product a client project, an own product, or in development?
2. Was the solar-plant pilot ever pitched or delivered to a real client?
3. Is Client B a separate Client, or delivered through another existing Client?
4. Was the WordPress plugin and the Next.js scaffold paid, delivered work?
5. Should the public Home Assistant dashboard builder stay an Exploration or be presented as shipped open source?
6. How should ownership be worded for repos built with agent assistance?
7. Which of the October 2026 releases (nested groups, CAD flaw detection) are deployed to production? The commits cannot show it.
