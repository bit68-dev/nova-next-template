# Feature Specification: Spaces & Access ("The Physical Park") Page

**Feature Branch**: `010-spaces-access-page`
**Created**: 2026-05-12
**Status**: Draft
**Input**: Figma JSON `figma-spaces.json` (node `3121:3104`, 1440×6030)

---

## User Scenarios & Testing

### User Story 1 — Discover the physical park (Priority: P1)

A prospective member visits `/spaces-access` and immediately understands what the OZ physical campus is through the hero `"The Physical Park"`, its supporting body copy, and three rotated overlapping membership preview cards (blue / purple / green).

**Acceptance**: Hero renders 120/700 title, 16/400 body, three cards rotated −2.8° / 0° / +1.8°, overlapping with −78px gap. Decorative cross stars, lavender ellipses, and yellow vector accents float at the same Figma positions.

### User Story 2 — Read the campus philosophy (P2)

The visitor scrolls and reads `"The Campus Philosophy"` on the left with a 508×509 rotated image card on the right backed by a Vector 42 organic shape.

### User Story 3 — Browse the campus landscape (P2)

5 vertical landscape cards (`green / teal / blue+details / pink / lavender`) showcase zones. The middle card stack includes Status badges ("Quiet / Architectural / Deep", "The Deep Seeker"), title, and body. Two circular nav arrows below.

### User Story 4 — Compare membership plans (P3)

`"Membership & Participation"` with 5 segmented `Tabs` (General / Fitness / Workshops / Snacks / Tap, General active). Below: 2 plan cards — large yellow-green `Native Plan` 397×476 and smaller purple `Studio Plan` 294×370. Each card has a "Best Value" badge (large card only), name + days, price area "From EGP 250 /m", feature list with vuesax icons, and a "Contact Us" button (small card). Two nav arrows below.

### User Story 5 — See the brand boundaries (P3)

`"Clear Boundaries"` — left text, right side 4 rotated rounded callouts:
- Blue `#0047BB` (rot −1.6°) "We are not a quiet-only zone"
- Lavender `#D3A5E5` (rot 5.8°) "We are not a traditional office"
- Yellow-green `#BECB2A` (rot 3.4°) "We are not a transactional space"
- Teal `#B0E8DB` (rot −2.6°) "We are not a quiet-only zone"

### User Story 6 — Reuse global chrome (P4)

Reuse existing `Navbar` (variant=light, active="Spaces & Access") and `FooterSection`.

---

## Functional Requirements

- **FR-001** Page lives at `/spaces-access`.
- **FR-002** All sizes, colors, radii, paddings, gaps, rotations come from the Figma JSON.
- **FR-003** All Roboto 120/700, 84/500, 24/500, 20/500, 16/400, 14/400 weights as in JSON.
- **FR-004** Brand palette: blue `#0047BB`, yellow-green `#BECB2A`, lavender `#D3A5E5`, pink `#F07CA3`, teal `#B0E8DB`, dark text `#272A2A`, body `#5A6161`.
- **FR-005** Decorative shapes (cross stars, ellipses, vector arrows) absolutely positioned per Figma X/Y.
- **FR-006** Navbar `"Spaces & Access"` link routes to `/spaces-access` and shows active state.

---

## Success Criteria

- **SC-001** Visual diff between Figma and rendered page < 4 px on heading positions.
- **SC-002** Page renders without runtime / hydration errors.
- **SC-003** All section sizes match Figma frame heights ±8 px at 1440 viewport.
