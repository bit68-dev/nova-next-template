# Tasks — 008-oz-a-page

## Phase 1 — Tokens
- [ ] **T001** Add `--color-oz-card-purple: #eddbf5` to `:root` in `app/globals.scss`. Confirm other OZ tokens from 007 already exist.

## Phase 2 — Section: IdentitySection
- [ ] **T002 [P]** Create `components/oz-a/IdentitySection/styles.module.scss` with 2-col layout, blue square, image radius 52, star row.
- [ ] **T003 [P]** Create `components/oz-a/IdentitySection/index.tsx` rendering body/heading/subtitle on left and blue rounded image card with stars + pill on right. Use `@/components/ui/Image`.

## Phase 3 — Section: EdgeSection
- [ ] **T004 [P]** Create `components/oz-a/EdgeSection/styles.module.scss` with heading block + 3-card row using flex. Card variants `.blue`, `.purple`, `.green`. Card heights 484/552/552.
- [ ] **T005 [P]** Create `components/oz-a/EdgeSection/index.tsx` rendering heading, body, and `cards.map` with pin icon + nested image block + title + body.

## Phase 4 — Section: AudienceSection
- [ ] **T006 [P]** Create `components/oz-a/AudienceSection/styles.module.scss` with 2-col layout. Left = items list, right = image with absolute pill labels.
- [ ] **T007 [P]** Create `components/oz-a/AudienceSection/index.tsx` rendering "Who It's For?" heading, 3 user-type rows with colored circle icons (lucide `Globe` for all per Figma), and image with 2 floating pills.

## Phase 5 — Route Page
- [ ] **T008** Create `app/oz-a/page.tsx` that imports and renders `Navbar`, `IdentitySection`, `EdgeSection`, `AudienceSection`, `FooterSection`.
- [ ] **T009** Update existing Navbar to highlight `Oz A` link when `pathname === "/oz-a"` (if not already path-aware), OR ensure the active styling already in `Navbar.module.scss` is correct.

## Phase 6 — Polish
- [ ] **T010** Update `.agent/rules/specify-rules.md` MANUAL ADDITIONS with 008 tech stack line.
- [ ] **T011** Manually verify each section against Figma values: padding 100, headings 84/120, body 16, card radii 24/32, brand blue/yellow/purple/green.
- [ ] **T012** Commit on branch `008-oz-a-page`.

## Dependencies
- T001 must finish before any section can be styled (card purple color used in T004).
- T002–T007 are parallelizable (different files).
- T008 depends on T002–T007.
- T009 can be parallel with T008.
- T010–T012 last.

## Parallel Execution Hints
Run T002+T003 together; T004+T005 together; T006+T007 together (different folders so no edit conflicts).
