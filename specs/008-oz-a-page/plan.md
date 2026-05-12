# Implementation Plan — 008-oz-a-page

**Branch**: `008-oz-a-page` | **Spec**: `./spec.md`

## Summary
Build a new `/oz-a` route that renders three Figma-faithful sections — The OZ Identity, The OZ Edge, Who It's For? — between the existing site Navbar and the existing FooterSection.

## Technical Context
- **Language/Runtime**: TypeScript 5, React 19, Next.js 16 (App Router)
- **Styling**: TailwindCSS v4 (utility) + SCSS Modules (per-component layout)
- **UI primitives**: `@/components/ui/Text`, `Button`, `Icon`, `Image` (constitution-mandated)
- **Icons**: `lucide-react` (already used in 007). For Figma "vuesax/linear/global" use `Globe` from lucide.
- **Fonts**: Roboto (already loaded in `app/layout.tsx`)
- **Brand tokens**: Already defined in `app/globals.scss` from feature 007:
  - `--color-oz-blue: #0047bb`
  - `--color-oz-yellow: #becb2a`
  - `--color-oz-page-bg: #fcfcfc`
  - `--color-oz-text-dark: #272a2a` / `--color-oz-text-body: #5a6161`
  - `--color-oz-card-blue: #e4edff` / `--color-oz-card-green: #f2f5d4`
- **New token needed**: `--color-oz-card-purple: #eddbf5` (added in T001)
- **Persistence**: None — static marketing page
- **Testing**: Manual visual regression vs Figma JSON values

## Constitution Check
- [x] Reuses existing `Navbar` and `FooterSection`
- [x] Uses `@/components/ui` Text/Button/Icon/Image
- [x] No new shared utilities/hooks — sections are page-local
- [x] No raw `<button>`, `<input>`, `<label>` where UI equivalent exists
- [x] Flexbox-first per design guidelines

## Project Structure (additions only)
```
app/
  oz-a/
    page.tsx                       # NEW — route entry
components/
  oz-a/
    IdentitySection/
      index.tsx
      styles.module.scss
    EdgeSection/
      index.tsx
      styles.module.scss
    AudienceSection/
      index.tsx
      styles.module.scss
specs/
  008-oz-a-page/
    spec.md plan.md data-model.md tasks.md
    checklists/requirements.md
    contracts/oz-a-sections.md
```

## Phase 0 — Research & Decisions

| Question | Decision | Rationale |
|---|---|---|
| New route or modify existing? | New `/oz-a` route under `app/oz-a/page.tsx` | App Router convention, matches Navbar `Oz A` link |
| Where do section components live? | `components/oz-a/*` | Page-specific, mirrors `components/home/*` pattern |
| Hero card decoration (blue rounded card with stars) | Compose with nested div + lucide `Star` icons | Matches Figma "Frame 1171275860" — solid blue rounded rect with 4 stars row at top |
| Image placeholders | Use existing `@/components/ui/Image` with `/placeholder.svg?...` query | Project pattern; no real assets ship in spec |
| Edge cards offset heights | Apply `align-self` per card in flex row | Card 1 = 484, cards 2/3 = 552 per Figma |
| Active nav state | Existing Navbar already supports `currentPath` via prop or visual underline; just render with Oz A as active | Reuse |

## Phase 1 — Design Artifacts
- `data-model.md` — typed shape of section content (cards, user-types)
- `contracts/oz-a-sections.md` — component contracts and prop shapes

## Complexity Tracking
None. Constitution-compliant. No new shared abstractions.

## Decision: PASS — ready for `/speckit.tasks`
