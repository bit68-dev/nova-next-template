# Implementation Plan — Spaces & Access Page

**Branch**: `010-spaces-access-page`
**Spec**: `specs/010-spaces-access-page/spec.md`
**Figma source**: `figma-spaces.json` (node `3121:3104`)

---

## Technical Context

- TypeScript 5, React 19, Next.js 16 App Router
- TailwindCSS v4 + SCSS Modules per-section
- Roboto font (already loaded), font weights 400/500/700
- Reused: `components/layout/Navbar` (existing `variant="light"`), `components/home/FooterSection`
- Icons: `lucide-react` (`Plus`, `ArrowRight`, `ArrowLeft`, `Wifi`, `Coffee`, `Clock`)
- New CSS tokens added to `app/globals.scss` as needed (teal, pink already present from 009)

## Architecture

```
app/spaces-access/page.tsx                     # composes the page
components/spaces/
  PhysicalParkHero/                            # Hero + 3 rotated cards
  CampusPhilosophy/                            # split text + image with Vector 42
  CampusLandscape/                             # 5 vertical cards + nav arrows
  MembershipParticipation/                     # tabs + 2 plan cards + nav arrows
  ClearBoundaries/                             # 4 rotated callouts
  FloatingDecorations/                         # cross stars, ellipses, arrows
```

Each section component owns: `index.tsx` + `styles.module.scss`. Static data inline (5 zones, 2 plans, 4 boundary items).

## Phase 0 — Research / Decisions

| Concern | Decision | Rationale |
|---|---|---|
| 8-point cross star | Compose with 4 stacked rectangles via CSS (no external SVG) | Matches Figma's `Frame 2139` = 6-rect cross shape |
| Card rotations | Inline `transform: rotate()` on each card | Allows responsive scaling without affecting layout flow |
| Tab state | Visual only — first tab "General" hardcoded active | Static page, no client interaction required |
| Plan card list icons | lucide-react Wifi/Coffee/Clock | Closest match to vuesax icons referenced in Figma |
| Vector 42 backdrop | Inline SVG approximation with rounded blob | Path data not exported in JSON |
| Decorative shapes | One `<FloatingDecorations>` component using `position: absolute` against the page wrapper | Keeps decorations isolated from layout flow |

## Phase 1 — Data Model

See `data-model.md` — 4 small static datasets.

## Constitution Check

- Uses existing `Navbar` + `FooterSection` (reuse over rewrite) ✓
- New components scoped under `components/spaces/*` mirroring `home/` and `ecosystem/` patterns ✓
- Roboto + brand tokens from globals.scss ✓
- No new package needed ✓

---

## Progress Tracking

- [x] Phase 0 — research complete
- [x] Phase 1 — data model done
- [x] Phase 2 — contracts done
- [ ] Phase 3 — implementation (tasks)
