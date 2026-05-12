# UI Contracts — Ecosystem Sections

All sections take no props (static page).

## `<HeroDiagramSection />`
- Renders Navbar (light variant) absolute-positioned at top.
- Two parts vertically with gap 42:
  - **Hero block** (1242×447): 3 text lines with inline Toggle pill, decorative ellipse + cross star + arrow.
  - **Diagram block** (1242×564): 7 absolutely-positioned circular nodes + 4 SVG dashed connector paths.

## `<OrganismSection />`
- Two columns: text (588×468) + image+vector (612×564).
- Heading "A Unified Organism" + 2 paragraphs left; green-tinted image with vector backing right.

## `<PillarCardsSection />`
- Renders 4 pill cards in `flex` row with gap 22.14, each 277×260 r:250.
- No interactivity — purely visual marketing.

## Page: `/ecosystem`
```tsx
<main>
  <HeroDiagramSection /> {/* Navbar inside */}
  <OrganismSection />
  <PillarCardsSection />
  <FooterSection />
</main>
```
