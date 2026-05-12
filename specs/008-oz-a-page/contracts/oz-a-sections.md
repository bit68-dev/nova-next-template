# UI Contracts — 008-oz-a-page

## IdentitySection
- **No props**. Self-contained.
- Layout: 2-column flex `gap:12` `padding:100px`.
- Left col `flex: 0 0 608px` (responsive < 1024: full width).
  - Top body 16px/400 `#5a6161`.
  - Heading "The OZ Identity" 120px/700 `#272a2a` line-height ~1.1.
  - Footer line 16px/400 `#878c8c`.
- Right col `flex: 0 0 615px`.
  - Outer blue square `618×618 r:52 bg:#0047BB`.
  - Inner image card `528×528 r:52` with 4 lucide `Star` icons (size 22, white) in row at top (gap 8).
  - Yellow-green pill `bg:#BECB2A` text "OZ Working park" 20px/500.

## EdgeSection
- **No props**.
- Layout: vertical, `padding:100px gap:12`.
- Heading block max-width 805px, gap 24.
  - "The OZ Edge" 84px/500.
  - Body 16px/400.
- Cards row: flex, `justify-content: space-between`. Each card uses `@/components/ui/Image` for the inner image and lucide `MapPin` for the pin icon.
  - Card sizes from Figma: 326×484, 440×552, 440×552.
  - Card bg tokens: `var(--color-oz-card-blue)`, `var(--color-oz-card-purple)`, `var(--color-oz-card-green)`.
  - Card radius 24-32px.
  - Inside each card: pin (40×40 circle solid color), nested image block (`#F2F5D4` light tint), title 20px/500, body 16px.

## AudienceSection
- **No props**.
- Layout: 2-column flex `padding:100px gap:12`.
- Left col `flex: 0 0 502px gap:62`.
  - Heading "Who It's For?" 84px/500.
  - 3 rows, each: 40×40 circular icon + (title 20px/500 + body 16px/400). `gap:8` horizontal.
- Right col `flex: 1`.
  - Image (807×700) using `@/components/ui/Image`.
  - 2 floating pill labels positioned absolutely:
    - White pill "OZ COWorking park" near top-left.
    - Yellow-green pill "Our Target Users" near top-right.

## Page (app/oz-a/page.tsx)
- Server component.
- Renders: `<Navbar mode="dark" />` (or default), `<IdentitySection />`, `<EdgeSection />`, `<AudienceSection />`, `<FooterSection />`.
- No client state, no data fetching.
