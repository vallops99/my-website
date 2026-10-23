# Commit inventory: public GitHub and upstream contributions

Ticket: vallops99/my-website#9. Source: GitHub API via `gh` (repos, commits, PRs, releases, contributors), read on 2026-10-23. Only public repositories are covered. Account: `vallops99` (created 2019-03-29).

Counts are commits visible through the API on the default branch, attributed to Valerio by author email or login. Several email identities appear: `valerio.farrotti@gmail.com`, `valerio.farrotti@hotmail.it`, the GitHub noreply address, two local-machine hostnames, and work addresses at `olab-studio.com` (2022), `adkaora.com` (2023) and a Client address (2024-25, name withheld). All are the same person's identities (same login or same repo history); the work addresses are useful dating Evidence (see "Earlier career evidence").

## Summary

- 20 public non-fork repos. Only two are products with outside users: `Conda-autoactivate-env` (61 stars, 7 forks, 6 merged PRs from other people) and `OHomeMy` (released on HACS on 2026-10-22, four releases that day, no outside users yet).
- Merged upstream contributions do exist, contrary to #2: 6 merged PRs to `iskyd/walle` (Bitcoin wallet in Zig) and 1 merged docs PR to `jetify-com/devbox`. One PR to `rust-lang/rustlings` was closed unmerged.
- Earliest dated public Evidence: `esiva.it`, first commit 2021-06-03. Earliest public Evidence of a work-address identity: `visual_regression_tester`, 2022-09-23 (`olab-studio.com`).
- Everything else public is Exploration (configs, templates, exercises, technical tests).

## Public non-fork repos

Stars, forks and issues are as of 2026-10-23. "Issues/PRs by others" counts items opened by people other than Valerio.

| Repo | Valerio's commits | Date range | What it is | Traction | Class |
|---|---|---|---|---|---|
| Conda-autoactivate-env | 17 of 27 (11 noreply + 6 gmail, includes merge commits) | 2021-11-25 to 2025-04-16 | Shell script that auto-activates a Conda env when you `cd` into a directory with a `.conda_config` file; later gained Nushell, bash-launch and path-with-spaces support | 61 stars, 7 forks, 4 issues and 6 PRs opened by others (5 contributors), all 6 PRs merged by Valerio | Shipped work (publicly released open-source product, maintained over 3.5 years) |
| OHomeMy | 143 (all) | 2026-09-18 to 2026-10-22 | Home Assistant integration for building house Dashboards graphically: admin Builder with drag-and-drop on a live preview, Draft/Publish/History/Restore, per-user Default Dashboard, Popups, i18n/RTL, HACS packaging. About 1.15 MB TypeScript plus 180 KB Python, ADRs in `docs/adr`, a glossary | 0 stars, 0 forks; v0.1.0 to v0.1.3 released 2026-10-22; 79 issues, all opened and closed by Valerio (used as their own tracker) | Shipped work (confirmed by Valerio in #2). Public history starts 2026-09-18, later than the local history reported in #2 (159 commits) |
| nixos-config | 25 | 2025-02-09 to 2026-09-14 | Personal NixOS flake: ISO build, disk layout, Helix, Docker, VPN, a Claude Code overlay | 0 stars | Exploration |
| airgapped-nixos | 6 | 2025-03-20 to 2025-03-22 | NixOS configuration for an airgapped live USB (use case: a Bitcoin wallet app); documents a known QEMU boot issue | 2 stars | Exploration |
| bootstrap-python-project | 13 (all under a Client work address) | 2024-11-22 to 2025-03-10 | Python project template: devbox, uv, ruff, pyright, pre-commit, with a README explaining each tool choice | 2 stars | Exploration (a template, no Client) |
| advent-of-code-2024 | 9 (all under the same Client work address) | 2024-12-01 to 2024-12-06 | Advent of Code days 1-5 in Python | 0 | Exploration |
| zig-nix-stm32 | 1 | 2025-05-18 | Nix flake for Zig on STM32 | 0 | Exploration |
| my_flakes | 1 | 2025-01-06 | Python 3.12 + Postgres flake | 0 | Exploration |
| my-emacs | 0 (empty repo) | 2024-12-11 | Empty | 0 | Nothing |
| vallops99 | 1 | 2024-05-31 | Profile README template, unedited | 0 | Nothing |
| farmender-releases | 1 | 2026-02-25 | A release bucket with one Windows asset, `excel_diff.exe` (v1.0.0). No source here | 0 | Unclassified, see questions |
| my-website | 11 | 2025-05-27 to 2026-10-23 | This portfolio site (React/Vite on Cloudflare Workers) | 1 star, 7 open issues (own tracker) | The artefact itself, not Evidence of a skill by being listed |
| montecarlosim | 19 (13 gmail, 4 noreply, 2 hotmail) | 2022-01-30 to 2023-01-03 | Python Monte Carlo (hit-or-miss and average) integration library; refactored into a package and published on PyPI as `montecarlosim` 0.1.0 (MIT) on 2023-01-03; used 4 self-merged PRs | 0 stars; PyPI downloads about 7 last month | Exploration or small Shipped work. It is a published package, but with no users. Leaning Exploration, user to confirm |
| refugeesHelper | 61 (all) | 2022-03-01 to 2022-11-22 | Open-source web app (Django, Mapbox, Docker, nginx) to help people find or give food, housing and health resources during the Ukraine refugee crisis; README says "Project currently offline" | 0 stars, 0 forks | Probably Shipped work (publicly released open-source product, now offline). User to confirm it was ever live |
| visual_regression_tester | 49 of 50 (the rest is a dependabot bump); work address `olab-studio.com` on 2 | 2022-09-23 to 2022-11-22 | Node API + React/TypeScript frontend + Postgres + Puppeteer tool for building and running visual regression tests; Husky, MSW and frontend tests added | 0 | Unclassified (looks like work for an agency whose address appears on the commits); user to confirm |
| react_exercise | 21 (all) | 2022-10-05 to 2022-10-10 | An Italian take-home React/TypeScript exercise (list universities per country) plus a Python backend | 0 | Exploration (hiring exercise) |
| esiva.it | 20 (18 hotmail + 2 noreply) | 2021-06-03 to 2022-07-12 | Django site in Docker (Postgres, Redis, nginx, production compose with published images): articles, audio, YouTube videos, maps; includes a production backup | 0 | Unclassified, likely a paid site for a Client; user to confirm |
| anova-test | 1 (`adkaora.com`) | 2023-06-02 | Python one-commit exercise | 0 | Exploration |
| event-manager-test | 17 (16 `adkaora.com`, 1 noreply) | 2023-09-09 to 2023-09-13 | Self-described "technical test": Django REST API with Poetry, migrations, tests, Swagger, Postman collection | 0 | Exploration (technical test) |
| rust-backend | 1 | 2023-03-31 | Rust stub | 0 | Exploration |

Public forks with no authored commits: `helix`, `rustlings`, `devbox`, `walle`, `AmazonOffers-TelegramBot` and a Client-related tooling fork. They carry no Evidence; the upstream PRs below are the Evidence.

## Upstream contributions (public repos not owned by Valerio)

`gh search prs --author vallops99` also lists PRs to other repos. Only the public ones below are reported.

### iskyd/walle: 6 merged PRs, 2024-05-18 to 2024-09-16

Walle is a Bitcoin wallet written from scratch in Zig by `iskyd` (25 stars, 8 forks, 190 of about 207 commits are the owner's). Valerio is the 5th contributor, 2 commits visible on the default branch, 6 PRs merged.

| PR | Merged | What it did | Size |
|---|---|---|---|
| #1 Added submodules setup in readme | 2024-05-18 | Documentation for cloning submodules | +4/-0 |
| #2 Fixed docker connection | 2024-05-18 | Fixed connecting to the regtest Bitcoin node container (README and `bitcoin.conf`) | +8/-2 |
| #3 Added discord link to readme | 2024-06-21 | README link | +3/-0 |
| #4 Started implementing rpc client | 2024-06-22 | First version of the Bitcoin Core JSON-RPC client in Zig (`src/rpc/rpc.zig`, request body generation); the PR text says it is unfinished | +218/-0 |
| #9 Added multiplatform build without splitting files | 2024-07-20 | Docker build for the node image picks platform and target architecture automatically (single Dockerfile, arm64 via `--platform`), removing `Dockerfile.arm` | +7/-16 |
| #10 Added sendRawTx rpc method | 2024-09-16 | `sendrawtransaction` RPC method in the client | +30/-0 |

Significance: modest but real. #4 and #10 are feature code in a systems language, reviewed and merged by the owner; the rest is setup and docs. Together they back "contributed to a Bitcoin wallet written in Zig, including its Bitcoin Core RPC client". It does not back a depth claim in Zig. It is a contribution to someone else's project, so it supports a supporting Accomplishment line, not a stand-alone Case study (a Case study is one Client engagement or one open-source product, and this is not Valerio's product).

### jetify-com/devbox: 1 merged PR, 2024-05-25

PR #2074 "Updated devbox shell documentation": updated the `devbox shell` CLI reference (added `--config` and `--environment` flags, removed a stale directory parameter), checked against `devbox shell -h`; +6/-2, one file, two reviews. Devbox is Jetify's well-known Nix-based dev environment tool (about 12.4k stars, 362 forks). Significance: a small docs fix to a popular project, only worth a mention alongside the Nix Exploration work.

### rust-lang/rustlings: 1 closed, not merged

PR #2256 "Added fold method to solution of iterators5" (opened 2025-06-13, closed 2025-08-21). Exploration only, no claim value.

## Further public work (commit search)

`gh search commits --author vallops99` and by each email, across all of GitHub, shows no commits in public repos other than those above. The extra hits are the devbox PR (it also appears in two third-party forks of devbox) and private repos, which are out of scope. No public work in any other organisation was found.

## Earlier career evidence (before December 2023)

- Earliest dated public Evidence: `esiva.it`, 2021-06-03 (a Django/Docker site, 20 commits to 2022-07-12). Next: `Conda-autoactivate-env` (2021-11-25), `montecarlosim` (2022-01-30), `refugeesHelper` (2022-03-01). The account itself dates from 2019-03-29 but has no public commits before 2021.
- So public Evidence supports "building software since mid-2021" (about 5 years at the time of writing). It does not reach back further. A "6+ years" Claim (if the site makes one) is not supported by public commits alone; it would need Evidence from private repos (covered in #2/#3) or an input from Valerio.
- Python/Django/Docker work is dated across 2021-2023; a Node/React/TypeScript/Puppeteer tool is dated Sept-Nov 2022; Rust first appears in 2023-03 (one stub).
- Work-address identities in public commit metadata (dating, not proof of an engagement):
  - `olab-studio.com`: 2 commits, 2022-09-23 to 2022-10-03, in `visual_regression_tester`.
  - `adkaora.com`: 17 commits, 2023-06-02 and 2023-09-09 to 2023-09-13, in `anova-test` and `event-manager-test`. Both repos present themselves as exercises ("technical test"), so they may be hiring tests written with a work address rather than paid engagements.
  - Client address (name withheld): `bootstrap-python-project` and `advent-of-code-2024` (2024-11 to 2025-03). Those are Exploration repos, so they do not back professional Claims.
- No public repository names an employer or Client before December 2023. The two pre-2023 identities above identify organisations only by email domain; I found no public page tying them to Valerio, so I do not state the relationship. Any Client or employer before December 2023 needs confirmation from Valerio.

## Ranked open-source Case study candidates

Ranking rule: impact, then technical depth, then ownership; volume only breaks ties. Case study = one open-source product by Valerio.

1. **Conda-autoactivate-env.** Real adoption (61 stars, 7 forks), outside bug reports and 6 external PRs that Valerio reviewed and merged over 3.5 years (bash, zsh, Nushell, spaces in paths, nested directories). Small codebase, so technical depth is limited; the story is maintenance and community stewardship. Public, so it can be named.
2. **OHomeMy.** The deepest technical work (a large TypeScript front end plus a Home Assistant Python integration, an admin Builder with Draft/Publish/History/Restore concurrency check, undo/redo, i18n/RTL, HACS release, ADRs, a glossary, 79 tracked issues). Impact is not yet shown (no stars or outside issues; released four days ago, 0.1.3). If the site values depth over adoption, this leads. Public, can be named.
3. **montecarlosim.** A published, MIT-licensed PyPI package with a clean refactor into a library; negligible usage. Exploration unless Valerio says otherwise.
4. **refugeesHelper.** Humanitarian web app with 61 commits, a real mission, offline now, no traction numbers. Candidate only if confirmed as a live, released product.

Supporting Accomplishment lines (not Case studies): the walle RPC client and sendRawTx work; the devbox docs fix.

## Tech evidence matrix additions

| Technology | Evidence (public) | Tier |
|---|---|---|
| Shell scripting (bash, zsh) and Nushell | Conda-autoactivate-env, 2021-2025, maintained with outside contributions | Shipped work |
| TypeScript, React, Home Assistant custom integrations, HACS packaging, Python integration code | OHomeMy, 2026 | Shipped work |
| Python packaging and PyPI publishing (Poetry) | montecarlosim 0.1.0, 2023 | Exploration (pending confirmation) |
| Django, Docker Compose, nginx, Redis, Postgres | esiva.it (2021-22), refugeesHelper (2022) | Pending class (probably Shipped work) |
| Node, Puppeteer, React/TypeScript, MSW, Husky | visual_regression_tester (2022) | Pending class |
| Mapbox / maps in a web app | refugeesHelper, esiva.it | Pending class |
| Zig, Bitcoin Core JSON-RPC, Docker multi-arch builds | walle PRs, 2024 | Upstream contribution (class to confirm) |
| Nix, NixOS, flakes, devbox, disko | nixos-config, airgapped-nixos, my_flakes, zig-nix-stm32, devbox docs PR | Exploration |
| uv, ruff, pyright, pre-commit | bootstrap-python-project | Exploration |
| Django REST, Swagger, Postman, Poetry | event-manager-test (technical test) | Exploration |
| Rust | rust-backend stub, rustlings PR (closed) | Exploration |
| Helix, Emacs | configs inside nixos-config; `my-emacs` is empty | Exploration, not worth listing |

## Corrections to #2

- "No merged upstream contributions" is wrong: 7 merged PRs in 2 public upstream projects (walle, 6; devbox, 1). The forks `helix`, `rustlings` and `devbox` had no authored commits locally; the PRs exist on the upstream repos.
- `OHomeMy` public history: 143 commits from 2026-09-18, four HACS releases on 2026-10-22; the 159 in #2 was the local count.
- Conda-autoactivate-env deserves a place in the shortlist: it is the only repo with outside traction.
- The Evidence timeline starts in mid-2021 on public repos; the matrix in #2 had nothing before 2022.

## Questions for Valerio

1. Was `esiva.it` a paid site for a Client? Is `visual_regression_tester` agency work, and was `refugeesHelper` live? Any "yes" moves them from Exploration to Shipped work.
2. Are the `adkaora.com` repos hiring tests or work? Was `olab-studio.com` an employer or Client in 2022?
3. Is `farmender-releases` (a Windows `excel_diff.exe` release) related to any Client or product?
4. Do merged PRs to someone else's open-source project count as Shipped work for the matrix, or only as a supporting line?
5. Which Claim does the site make about years of experience? Public Evidence covers 2021 onwards.
