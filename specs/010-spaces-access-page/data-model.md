# Data Model — Spaces & Access (static)

## HeroCard (3 items)
```ts
type HeroCard = { color: 'blue'|'purple'|'green'; pin: string; image: string; rotation: number }
```
Values from Figma:
- `{ color: 'blue', rotation: -2.8 }`
- `{ color: 'purple', rotation: 0 }`
- `{ color: 'green', rotation: 1.8 }`

## LandscapeZone (5 items)
```ts
type LandscapeZone = {
  bg: '#F2F5D4' | '#B0E8DB' | '#E4EEFF' | '#FAD3E0' | '#EDDBF5';
  image: string;
  detail?: { badges: { text: string; tone: 'blue'|'green' }[]; title: string; body: string };
}
```
Only the BLUE (middle) card has `detail` block with two badges (#E4EEFF / #F2F5D4), title "The Focus Vault", body 3 lines.

## PlanCard (2 items)
```ts
type PlanCard = {
  variant: 'large' | 'small';
  bg: string;          // #BECB2A | #D3A5E5
  badge?: string;      // "Best Value"
  name: string;        // "Native Plan" | "Studio Plan"
  subtitle: string;    // "5 days per month of coworking access"
  priceFrom: string;   // "EGP 200"
  price: string;       // "EGP 250"
  features: { icon: 'Wifi'|'Coffee'|'Clock'; text: string }[];
  cta?: { label: string; href: string }; // small card only
}
```

## BoundaryCallout (4 items)
```ts
type BoundaryCallout = {
  bg: '#0047BB' | '#D3A5E5' | '#BECB2A' | '#B0E8DB';
  rotation: number;    // -1.6 | 5.8 | 3.4 | -2.6
  title: string;
  body: string;
  textTone: 'light' | 'dark'; // light on blue, dark elsewhere
}
```

## Tab (5 items, static, only "General" active)
`['General', 'Fitness', 'Workshops', 'Snacks', 'Tap']`
