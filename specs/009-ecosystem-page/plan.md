# Implementation Plan: The Ecosystem Page

**Branch**: `009-ecosystem-page` | **Source**: Figma `3307:14557`

## Constitution Check

- [x] Reuse existing `@/components/ui/Text`, `Button`, `Icon`, `Image` — no raw `<p>`/`<button>` for typographic content where a UI component fits.
- [x] Reuse existing `components/layout/Navbar` (already supports `variant="light"`).
- [x] Reuse `components/home/FooterSection` unchanged.
- [x] No new dependencies needed (lucide-react already installed).

## Tech Stack (inherited)

- TypeScript 5, React 19, Next.js 16, TailwindCSS v4, SCSS modules, lucide-react.
- New components placed under `components/ecosystem/*` following the `oz-a` pattern.

## Phase 0 — Research / Decisions

1. **Single page or multi-section component split?**
   Decision: Split into 4 sub-components matching Figma's logical regions:
   - `HeroDiagramSection` (combines hero text + orbital diagram — Figma Frame 2085663588 fuses them)
   - `OrganismSection` ("A Unified Organism" — Figma Frame 2085663639)
   - `PillarCardsSection` (4 pill cards — Figma Frame 2085663640)
   - Page composes Navbar + 3 sections + Footer.

2. **Orbital diagram implementation?**
   Decision: Single `position: relative` container at 1242×564 with absolutely-positioned
   nodes using exact Figma offsets. Connector paths as inline SVG `path` elements
   with `stroke-dasharray` for the dashed curves (Vector 42 + Vector 43 in Figma are
   smooth curves spanning 501×202 each).

3. **8-point cross star (Frame 2140)?**
   Decision: Built as 3 overlapping rectangles in pure CSS (matches Figma's
   Rectangle 24/25/26/27/28/29 stack — 72×114 + 114×72 + 126×10 + 10×126 with blue fill).

4. **Toggle pill (decorative)?**
   Decision: Pure CSS `<span>` with 152×65, radius 52, bg `#becb2a`, and a 52×52
   `#f6f6f6` circle absolutely positioned at the right inside, with 6.5px padding.

5. **Pillar card "Union" pattern shape?**
   Decision: SVG path approximated as a wave/leaf shape (235×158) per Figma — colored
   per card. Tick-circle icon = lucide `CheckCircle2` white. Top decorative
   "Frame 1171275814" with two small images = two stacked rounded image tiles
   with `#f2f5d4` tint matching Figma fills.

## Phase 1 — File Plan

```
app/ecosystem/page.tsx                                            (new)
components/ecosystem/HeroDiagramSection/index.tsx                 (new)
components/ecosystem/HeroDiagramSection/styles.module.scss        (new)
components/ecosystem/OrganismSection/index.tsx                    (new)
components/ecosystem/OrganismSection/styles.module.scss           (new)
components/ecosystem/PillarCardsSection/index.tsx                 (new)
components/ecosystem/PillarCardsSection/styles.module.scss        (new)
components/layout/Navbar/index.tsx                                (edit: add "ecosystem" route to NAV_LINKS active mapping if missing)
.agent/rules/specify-rules.md                                     (edit: append 009 stack)
```

## Phase 2 — Data Model

See `data-model.md` — node coordinates, colors, card colors, text content.

## Phase 3 — Contracts

See `contracts/ecosystem-sections.md` — section APIs.

## Phase 4 — Tasks

See `tasks.md` — 11 tasks across 5 phases.

## Risk

- Connector dashed curves: Figma uses two `Vector 42` + `Vector 43` per side
  (4 vectors total). We approximate with 2 SVG paths covering the left/right
  arcs. Tolerance: visual match, not pixel-identical bezier curves.
- "Union" wave shape inside cards: SVG approximation acceptable.
