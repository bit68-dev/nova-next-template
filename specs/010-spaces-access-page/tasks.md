# Tasks — 010-spaces-access-page

## Phase 1 — Foundation
- **T001** Add `Spaces & Access` token check in `app/globals.scss` (add `--color-oz-card-teal`, `--color-oz-card-pink` if missing).
- **T002** Update `Navbar` link `Spaces & Access` → `/spaces-access` and add path map.

## Phase 2 — Section components [P]
- **T003** `components/spaces/FloatingDecorations` — 2 cross stars + 2 lavender ellipses + 2 yellow vector arrows absolutely positioned.
- **T004** `components/spaces/PhysicalParkHero` — title 120/700, body, 3 rotated cards (blue/purple/green) overlapping with -78px gap.
- **T005** `components/spaces/CampusPhilosophy` — left text 84/500 + right 508×509 image card rot 5.6° with Vector 42 backdrop.
- **T006** `components/spaces/CampusLandscape` — 5-card row (green / teal / blue+detail / pink / lavender), nav arrows.
- **T007** `components/spaces/MembershipParticipation` — 84/500 title + Tabs + 2 plan cards + nav arrows.
- **T008** `components/spaces/ClearBoundaries` — left text, right 4 rotated callouts (blue/purple/green/teal).

## Phase 3 — Compose & wire
- **T009** `app/spaces-access/page.tsx` renders Navbar (light) + 5 sections + FloatingDecorations + Footer.
- **T010** Generate placeholder images for Hero (3), Philosophy (1), Landscape (5), Membership (2 backgrounds).
- **T011** Update `.agent/rules/specify-rules.md` with 010 stack line.

## Dependencies

T001, T002 first. T003-T008 [P] independent. T009 needs T003-T008. T010 [P] independent.
