# UI Contracts: Homepage Sections

## Navbar Component
**File**: `components/layout/Navbar/index.tsx`

Props:
```ts
// No external props — self-contained, reads from data.ts
```

Renders:
- OZ logo (text or image)
- Nav links from `navLinks[]`
- Login button (secondary variant)
- Get Started button (primary variant)
- Mobile hamburger toggle (visible on <768px)

---

## HeroSection Component
**File**: `components/home/HeroSection/index.tsx`

Props:
```ts
interface HeroSectionProps {
  headline: string;
  subheadline: string;
  ctaPrimaryLabel: string;
  ctaSecondaryLabel?: string;
}
```

Renders:
- Full-width blue (`#0047BB`) background with hex pattern
- `<Text variant="H1">` headline
- `<Text variant="P1">` subheadline
- `<Button variant="primary">` CTA

---

## FeaturesSection Component
**File**: `components/home/FeaturesSection/index.tsx`

Props:
```ts
interface FeaturesSectionProps {
  features: FeatureCard[];
}
```

Renders:
- Section heading
- Grid of FeatureCard items (3-column desktop, 1-column mobile)
- Each card: `<Icon>`, `<Text variant="H6">` title, `<Text variant="P2">` description

---

## StatsSection Component
**File**: `components/home/StatsSection/index.tsx`

Props:
```ts
interface StatsSectionProps {
  stats: StatItem[];
}
```

Renders:
- Row of stat items (flex-row desktop, flex-col mobile)
- Each stat: `<Text variant="H2">` value, `<Text variant="P2">` label

---

## FooterSection Component
**File**: `components/home/FooterSection/index.tsx`

Props:
```ts
interface FooterSectionProps {
  links: NavLink[];
}
```

Renders:
- OZ logo + tagline
- Footer nav links
- Copyright text
