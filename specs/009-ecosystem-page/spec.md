# Feature Specification: The Ecosystem Page

**Branch**: `009-ecosystem-page`
**Source**: `figma-ecosystem.json` (node `3307:14557`)
**Route**: `/ecosystem`

## User Stories

### US-1 (P1) — Visitor lands on the Ecosystem page
A visitor navigates to `/ecosystem` from the Navbar and immediately understands the
"living ecosystem" pitch through a giant 120px headline broken across 3 lines, an
inline decorative olive-green toggle pill, and a circular orbital diagram of 7
ecosystem nodes around a central "Nourish" hub.

### US-2 (P1) — Visitor reads the "A Unified Organism" explanation
Below the hero, the visitor reads the "A Unified Organism" heading (84px) on the
left with two paragraphs of supporting body copy, paired with a large green-tinted
image card on the right (with a decorative vector behind).

### US-3 (P1) — Visitor browses 4 ecosystem pillars (cards)
Four pill-shaped cards (border-radius 250px) sit horizontally below the unified
organism section, each one representing a colored "Union" pattern shape with a
white tick-circle icon, a tiny screenshot, and decorative dot vectors.
Colors per Figma JSON: Card 1 pink `#f07ca3`, Card 2 lavender `#d3a5e5`,
Card 3 dark-green `#4a7c59`, Card 4 orange `#ff5733`.

### US-4 (P2) — Visitor sees consistent Navbar + Footer
The page uses the existing light-variant Navbar (with "The Ecosystem" link
active) and the existing FooterSection — both already built in 007/008.

## Functional Requirements

- **FR-1** Page renders at `/ecosystem` route.
- **FR-2** Navbar `variant="light"` with `The Ecosystem` link in active state.
- **FR-3** Hero text: three 120px/700 lines — "Not a workspace." / " A living" + Toggle pill / " ecosystem." — exactly as Figma.
- **FR-4** Toggle pill: 152×65, radius 52, bg `#becb2a`, with 52×52 white circle (`#f6f6f6`) inside, aligned to right (ON state, decorative only).
- **FR-5** Decorative hero elements present: lavender ellipse 110×110 `#d3a5e5`, 8-point blue cross star 126×126 `#2e68c9`, arrow 38×38 bottom-left.
- **FR-6** Orbital diagram: 7 circular nodes positioned per Figma absolute coordinates with exact sizes, colors, and labels (`Integrate`, `Expand`, `Flourish`, `Grow`, `Create`, `Develop`, `Nourish`).
- **FR-7** "Develop" right-center node is a solid blue (`#0047bb`) CTA with white "Develop skills →" text + arrow icon.
- **FR-8** Curved dashed connector paths (Vector 42/43) drawn between nodes.
- **FR-9** "A Unified Organism" section: 84px/500 heading + 2 body paragraphs left, image+vector right.
- **FR-10** Four pillar cards: 277×260 r:250, each with two stacked top images, central tick-circle icon, colored Union shape, screenshot strip, decorative dot vectors top-right and bottom-left.
- **FR-11** Page uses existing FooterSection unchanged.

## Success Criteria

- **SC-1** Layout dimensions, paddings, gaps match Figma JSON within 4px tolerance at 1442 viewport.
- **SC-2** Colors match Figma fills exactly.
- **SC-3** Font weights, sizes, line-heights match Figma text styles (120/700, 84/500, 20/500, 16/400-500).
- **SC-4** All 7 orbital nodes labelled and colored per Figma.
- **SC-5** Page responsive — diagram + cards reflow gracefully under 1024px.
