# Feature Specification: OZ Website Homepage

**Feature Branch**: `007-oz-homepage`
**Created**: 2026-05-12
**Status**: Draft
**Input**: Figma JSON — OZ Website homepage design

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 — First-Time Visitor Views Homepage (Priority: P1)

A prospective user lands on the OZ website homepage for the first time. They see a visually compelling hero section with the brand identity, a clear value proposition headline, a call-to-action button, and a background with a hexagonal blue pattern. They immediately understand what OZ offers and are prompted to take action.

**Why this priority**: The hero section is the first impression and directly drives conversion. Without it the page has no value.

**Independent Test**: Can be fully tested by loading `/` — if the hero section renders with brand colors, headline, body copy, and CTA button it is complete and delivers standalone value.

**Acceptance Scenarios**:

1. **Given** a visitor loads the homepage, **When** the page renders, **Then** they see a full-width hero section with the OZ brand colors (blue `#0047BB`), a hexagonal decorative background pattern, a headline, a sub-headline/description, and at least one primary CTA button.
2. **Given** a visitor is on mobile, **When** the hero section renders, **Then** the layout stacks vertically, text remains legible, and the CTA button is full-width.
3. **Given** a visitor clicks the primary CTA, **When** the click occurs, **Then** they are navigated to the appropriate destination (login or sign-up).

---

### User Story 2 — Visitor Reads Navigation Bar (Priority: P2)

A visitor needs to navigate to different sections of the site. The navbar is fixed at the top, shows the OZ logo, navigation links, and auth action buttons (login / get started).

**Why this priority**: Navigation enables exploration of the entire site and is a prerequisite for any other user flow.

**Independent Test**: Can be fully tested by checking that the Navbar component renders with logo, links, and auth buttons on the homepage.

**Acceptance Scenarios**:

1. **Given** any page load, **When** the navbar renders, **Then** the OZ logo, nav links, and auth buttons (Login, Get Started) are all visible.
2. **Given** a visitor is on mobile, **When** the navbar renders, **Then** a hamburger/menu control is visible and nav links collapse into a drawer or dropdown.
3. **Given** a visitor scrolls down, **When** past the hero, **Then** the navbar remains fixed/sticky at the top.

---

### User Story 3 — Visitor Explores Features / Services Section (Priority: P3)

A visitor scrolls past the hero and sees a section that showcases OZ's key features or services, each with an icon, title, and short description presented in a grid or card layout.

**Why this priority**: The features section establishes credibility and explains the product offering. It supports conversion but is not the primary hook.

**Independent Test**: Can be fully tested by scrolling to the features section and verifying each feature card renders with icon, title, and description.

**Acceptance Scenarios**:

1. **Given** a visitor scrolls past the hero, **When** the features section is in view, **Then** at least 3 feature cards are visible, each with a distinct icon, title, and description.
2. **Given** a visitor is on mobile, **When** the features section renders, **Then** cards stack in a single column layout.

---

### User Story 4 — Visitor Sees Stats / Social Proof (Priority: P4)

A visitor sees a statistics or social proof section displaying key metrics (e.g., number of users, projects, countries) to build trust.

**Why this priority**: Social proof reinforces credibility. Secondary to the core hero and features but important for conversion.

**Independent Test**: Can be fully tested by scrolling to the stats section and verifying numeric metrics and labels render correctly.

**Acceptance Scenarios**:

1. **Given** a visitor scrolls to the stats section, **When** the section renders, **Then** at least 3 statistics with numeric values and labels are displayed.
2. **Given** a visitor is on mobile, **When** the stats section renders, **Then** stats are readable and laid out responsively.

---

### User Story 5 — Visitor Sees Footer (Priority: P5)

A visitor reaches the bottom of the page and finds a footer with links, brand information, and social/contact icons.

**Why this priority**: Footer is standard trust-building and provides navigation fallback, but is lowest priority for MVP.

**Independent Test**: Can be fully tested by scrolling to the bottom and confirming footer links and brand info render.

**Acceptance Scenarios**:

1. **Given** a visitor scrolls to the bottom, **When** the footer renders, **Then** the OZ logo, nav links, and at least one social/contact link are visible.

---

### Edge Cases

- What happens when the page loads on very narrow screens (320px)?
- How does the page handle missing/broken images (hero visual)?
- What happens when nav links point to sections not yet built?

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The homepage MUST render a full-width Hero section with blue brand background (`#0047BB`), hexagonal decorative pattern, headline, description, and CTA button(s).
- **FR-002**: The Navbar MUST display the OZ logo, navigation links, and auth action buttons (Login, Get Started).
- **FR-003**: The Navbar MUST be sticky/fixed at the top during scroll.
- **FR-004**: The homepage MUST display a Features/Services section with at least 3 feature cards (icon + title + description).
- **FR-005**: The homepage MUST display a Stats/Social Proof section with numeric metrics.
- **FR-006**: The homepage MUST display a Footer with logo, navigation links, and contact/social links.
- **FR-007**: All sections MUST be fully responsive (mobile-first, desktop-enhanced).
- **FR-008**: The homepage MUST use existing `@/components/ui` components (Button, Text, Icon, Image) — no raw HTML equivalents allowed per constitution.
- **FR-009**: The page MUST reuse the existing Navbar component at `components/layout/Navbar/index.tsx` if applicable, or extend it for homepage needs.
- **FR-010**: Styling MUST follow the existing SCSS module + Tailwind pattern using the project's design tokens and typography mixins.

### Key Entities

- **Section**: A visual block on the homepage (Hero, Navbar, Features, Stats, CTA, Footer).
- **FeatureCard**: An entity with icon name, title, and description representing one product feature.
- **StatItem**: A numeric metric with a value and a label.
- **NavLink**: A navigation link with label and href.

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The homepage loads and all 5 sections (Navbar, Hero, Features, Stats, Footer) are visible within 3 seconds on a standard connection.
- **SC-002**: All sections are readable and functional on screens from 320px to 1440px width with zero horizontal overflow.
- **SC-003**: All interactive elements (CTA buttons, nav links) are reachable and operable via keyboard.
- **SC-004**: Visual design faithfully matches the Figma source — brand blue hero, hexagonal pattern, card grid, and typography hierarchy are all present.
- **SC-005**: No raw HTML elements (`<button>`, `<p>`, `<span>`) are used where a `@/components/ui` equivalent exists.
