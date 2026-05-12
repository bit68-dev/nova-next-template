# Feature Specification: OZ A Page

**Branch**: `008-oz-a-page`  
**Created**: 2026-05-12  
**Source**: Figma JSON `OZ A page` (node `3086:2121`, frame `1440×3714`, bg `#fcfcfc`)

## User Scenarios

### Primary Story
A visitor lands on `/oz-a` and reads OZ's identity story, learns what makes OZ different (The OZ Edge), and sees who the space is designed for (Who It's For?). The page reuses the existing site Navbar and Footer for consistency and reaches the same Figma fidelity as the homepage.

### User Stories

**US1 — Identity hero (P1)** — As a visitor, I see "The OZ Identity" headline alongside a styled blue card with star icons and a yellow-green pill ("OZ Working park"), giving an immediate brand impression.

**US2 — Edge cards (P2)** — As a visitor, I see three differentiator cards ("Ritual Over Routine", "A Unified Ecosystem", "Physical-Digital Synergy") in distinct tinted backgrounds (blue, purple, green) with pin icons and nested image areas.

**US3 — Audience targeting (P3)** — As a visitor, I see "Who It's For?" with three user archetypes — Collaborative Catalyst, Deep Seeker, Holistic Achiever — each labeled by a colored circular icon, next to a photograph framed by two pill labels ("OZ COWorking park", "Our Target Users").

**US4 — Navigation & footer (P4)** — As a visitor, I use the same Navbar (with Oz A active) at the top and the same blue Footer at the bottom as on the homepage.

## Functional Requirements

- **FR-001** — Render at route `/oz-a`.
- **FR-002** — Reuse `components/layout/Navbar` with `Oz A` link in active state (underline visible).
- **FR-003** — Reuse `components/home/FooterSection` unchanged.
- **FR-004** — Section "The OZ Identity": two-column split (608×534 text / 615×576 visual), `padding: 100px`, body 16px `#5a6161`, title 120px/700 `#272a2a`, subtitle 16px `#878c8c`.
- **FR-005** — Section "The OZ Edge": full-width, `padding: 100px`, heading 84px/500, body 16px, followed by 3 cards in a row (`gap`-based justify, slightly offset heights — 484/552/552). Card colors: `#e4edff` (blue), `#eddbf5` (purple), `#f2f5d4` (green). All cards `radius: 24-32px`, contain a pin icon, a nested image block, title 20px/500, body 16px.
- **FR-006** — Section "Who It's For?": two-column split, `padding: 100px`. Left: 84px heading + 3 user-type rows (icon + heading + body). Pin colors: blue `#0047BB`, yellow `#BECB2A`, purple `#D3A5E5`. Right: image with two floating pill labels (white pill = "OZ COWorking park", yellow-green pill = "Our Target Users").
- **FR-007** — Use existing `@/components/ui` (Text, Button, Icon, Image) per AI Constitution. No raw `<button>`, `<input>`, `<label>` if a UI equivalent exists.
- **FR-008** — Use SCSS modules per existing pattern (`styles.module.scss` per component).
- **FR-009** — Layout uses flexbox per Design Guidelines. No CSS Grid unless a 2D layout is truly required.
- **FR-010** — Brand color tokens already in `app/globals.scss` from feature 007 are reused (no new color tokens added).

## Out of Scope
- Interactive carousels, modals, or animations beyond hover states.
- Backend, CMS, or i18n translations beyond English copy.
- New shared UI primitives — only OZ A specific section components.

## Success Criteria
- **SC-001** — Page loads at `/oz-a` with no runtime or build errors.
- **SC-002** — All 3 section text strings, colors, font sizes, paddings, and card layouts match the Figma JSON values within tolerance.
- **SC-003** — Reuses existing Navbar and Footer (no duplication).
- **SC-004** — Responsive: stacks vertically below `1024px`, readable down to mobile 360px wide.
- **SC-005** — Constitution compliant: uses `@/components/ui` Text/Button/Icon/Image; no raw HTML where a UI equivalent exists.
