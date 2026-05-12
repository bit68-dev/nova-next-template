# Tasks: Ecosystem Page

## Phase 1 — Setup
- [ ] **T001** Verify Navbar `usePathname` covers `/ecosystem` and `The Ecosystem` link maps to it (edit if needed).

## Phase 2 — HeroDiagramSection (P1)
- [ ] **T002 [P]** Create `components/ecosystem/HeroDiagramSection/styles.module.scss`.
- [ ] **T003 [P]** Create `components/ecosystem/HeroDiagramSection/index.tsx` (3-line hero text + decorative star/ellipse/arrow + 7 orbital nodes + dashed SVG connectors + Navbar slot).

## Phase 3 — OrganismSection (P1)
- [ ] **T004 [P]** Create `components/ecosystem/OrganismSection/styles.module.scss`.
- [ ] **T005 [P]** Create `components/ecosystem/OrganismSection/index.tsx` (heading + 2 paragraphs left, image+vector right).

## Phase 4 — PillarCardsSection (P1)
- [ ] **T006 [P]** Create `components/ecosystem/PillarCardsSection/styles.module.scss`.
- [ ] **T007 [P]** Create `components/ecosystem/PillarCardsSection/index.tsx` (4 pill cards with Union wave + decorations).

## Phase 5 — Page Route
- [ ] **T008** Create `app/ecosystem/page.tsx` composing the 3 sections + Navbar (inside Hero) + Footer.

## Phase 6 — Polish
- [ ] **T009** Verify Navbar active state for `/ecosystem`.
- [ ] **T010** Append 009 stack to `.agent/rules/specify-rules.md`.
- [ ] **T011** Commit on branch `009-ecosystem-page`.

## Dependencies
T001 before T009. T002–T007 fully parallel `[P]`. T008 after T002–T007.
