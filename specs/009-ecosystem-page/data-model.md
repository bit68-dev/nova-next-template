# Data Model — Ecosystem Page

All static; sourced from Figma node `3307:14557`. Container reference at 1442px viewport.

## Hero Text Block (Frame 2085663587)

| Line | Text | Style |
|---|---|---|
| 1 | "Not a workspace." | 120/700 lh:140.625 |
| 2 | " A living" + [Toggle 152×65 r:52 #becb2a, inner circle 52×52 #f6f6f6 right] | 120/700 |
| 3 | " ecosystem." | 120/700 |

Decorative around hero:
- Lavender ellipse 110×110 `#d3a5e5` near right of line 2
- 8-point cross star 126×126 `#2e68c9` top-right (3 rectangle stack)
- Arrow 10 (38×38) at bottom-left of hero

## Orbital Diagram Nodes (Frame 2085663577 — 1242×564)

Origin: container top-left (Figma x=1677, y=1767).

| Node | Size | Radius | Border/Fill | Image? | Label | Offset (x, y) |
|---|---|---|---|---|---|---|
| Integrate | 146×146 | 73 | bg `#b0e8db` ring | yes | "Integrate" | (248, 0) |
| Expand | 146×146 | 73 | bg `#f07ca3` ring | yes | "Expand" | (872, 0) |
| Create | 190×190 | 94 | bg `#becb2a` ring | yes | "Create" | (0, 138) |
| Nourish | 230×230 | 115 | bg `#d3a5e5` ring | yes | "Nourish" | (506, 92) |
| Develop | 190×190 | 94 | solid `#0047bb` (CTA) | "Develop skills →" | "Develop" | (1050, 148) |
| Flourish | 126×126 | 62 | bg `#f07ca3` ring | yes | "Flourish" | (257, 399) |
| Grow | 126×126 | 62 | bg `#b0e8db` ring | yes | "Grow" | (889, 399) |

All non-CTA rings have 8-12px padding with a grey-filled image circle inside.

## Connector Curves (Frame 1171276378)

- Frame 1171276353 ×2 (left half + right half), each contains:
  - Vector 42 — top curve (501×202)
  - Vector 43 — bottom curve (501×202)
- Render as 4 inline SVG paths with stroke-dasharray `6 6` and varying colors
  (teal/pink/blue), positioned in two side-by-side 506×391 frames at y=73 within
  the 1242×564 diagram area.

## "A Unified Organism" Section (Frame 2085663639 — 1242×564)

LEFT (588×468, gap:24):
- Heading "A Unified Organism" 84/500 lh:98 color `#272a2a`
- Paragraph 1 16/400 lh:28 color `#5a6161`
- Paragraph 2 16/400 lh:28 color `#5a6161`

RIGHT (612×564):
- Vector 42 decorative shape 499×468 (behind)
- Image frame 508×509 r:33.5 tint `#f2f5d4`

## Pillar Cards (Frame 2085663640 — 1242×260, gap:22.14)

Each card = `Component 6/4/7/5` — 277×260 r:250 (pill).

| # | Source | Union Fill | Dot Vector Fill | Card Title (label) |
|---|---|---|---|---|
| 1 | Component 6 | `#f07ca3` (pink) | `#fad3e0` | COMMUNITY |
| 2 | Component 4 | `#d3a5e5` (lavender) | `#eddbf5` | KNOWLEDGE |
| 3 | Component 7 | `#4a7c59` (dark green) | `#d2e4d8` | DELI |
| 4 | Component 5 | `#ff5733` (orange) | `#ff5733` | FITNESS |

Each card internals:
- Frame 1171275814 top: 216×142 — two stacked image tiles (107×97 and 155×142, r:14.9 tint `#f2f5d4`)
- Two decorative 30×30 vector pills (top-right + bottom-left)
- Central tick-circle icon 40×40 white
- Union wave shape 235×158 r:26 (colored per card)
- Screenshot strip 197×41 (or 153×41) image
- Vector 24/22/23 secondary decorations
