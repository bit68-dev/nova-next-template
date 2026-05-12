# Tasks: OZ Website Homepage

**Feature Branch**: `007-oz-homepage`
**Total Tasks**: 16
**Generated**: 2026-05-12

---

## Phase 1: Setup

- [ ] T001 Add `--color-oz-blue: #0047BB` and `--color-oz-blue-dark: #003494` CSS variables to `app/globals.scss`
- [ ] T002 Create hex tile SVG at `public/hex-pattern.svg` for hero background pattern

---

## Phase 2: Foundational

- [ ] T003 Create `app/home/data.ts` with typed static content: NavLink[], FeatureCard[], StatItem[], hero text

---

## Phase 3: User Story 1 — Hero Section (P1)

- [ ] T004 [US1] Create `components/home/HeroSection/styles.module.scss` with blue background, hex pattern, and layout styles
- [ ] T005 [P] [US1] Create `components/home/HeroSection/index.tsx` using `<Text>` and `<Button>` from `@/components/ui`
- [ ] T006 [US1] Replace placeholder in `app/page.tsx` to render `<HeroSection>` with data from `data.ts`

---

## Phase 4: User Story 2 — Navbar (P2)

- [ ] T007 [US2] Create `components/layout/Navbar/styles.module.scss` with sticky nav, mobile menu styles
- [ ] T008 [P] [US2] Implement `components/layout/Navbar/index.tsx` with logo, nav links, Login + Get Started `<Button>` components, and mobile hamburger toggle using local state
- [ ] T009 [US2] Update `app/page.tsx` to include `<Navbar>` at the top of the page layout

---

## Phase 5: User Story 3 — Features Section (P3)

- [ ] T010 [P] [US3] Create `components/home/FeaturesSection/styles.module.scss` with card grid styles
- [ ] T011 [P] [US3] Create `components/home/FeaturesSection/index.tsx` rendering `features[]` from `data.ts` using `<Icon>`, `<Text>` components
- [ ] T012 [US3] Add `<FeaturesSection>` to `app/page.tsx`

---

## Phase 6: User Story 4 — Stats Section (P4)

- [ ] T013 [P] [US4] Create `components/home/StatsSection/index.tsx` + `styles.module.scss` rendering `stats[]` using `<Text>` components
- [ ] T014 [US4] Add `<StatsSection>` to `app/page.tsx`

---

## Phase 7: User Story 5 — Footer (P5)

- [ ] T015 [P] [US5] Create `components/home/FooterSection/index.tsx` + `styles.module.scss` with logo, footer links, copyright using `<Text>` and `<Button>`
- [ ] T016 [US5] Add `<FooterSection>` to `app/page.tsx`

---

## Dependencies

```
T001 → T004 (oz-blue color needed by HeroSection styles)
T002 → T004 (hex-pattern.svg needed by HeroSection styles)
T003 → T005, T008, T011, T013, T015 (data.ts needed by all sections)
T004, T005 → T006 (HeroSection must exist before page.tsx uses it)
T007, T008 → T009
T010, T011 → T012
T013 → T014
T015 → T016
```

## Parallel Execution

- T004, T007, T010, T013, T015 can run in parallel (different style files)
- T005, T008, T011 can run in parallel after T003 is complete (different component files)

## MVP Scope

User Story 1 (T001–T006) is the MVP. A standalone hero section delivers immediate visual value.

## Implementation Strategy

1. T001–T003 (setup + data) — foundational, unblock everything
2. T004–T006 (Hero) — MVP, highest visual impact
3. T007–T009 (Navbar) — navigation
4. T010–T016 (Features, Stats, Footer) — complete the page
