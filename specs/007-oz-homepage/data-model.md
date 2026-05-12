# Data Model: OZ Website Homepage

## Entities

### NavLink
| Field | Type | Validation |
|-------|------|------------|
| label | string | Required, non-empty |
| href  | string | Required, valid path or anchor |

### FeatureCard
| Field | Type | Validation |
|-------|------|------------|
| icon  | string (lucide icon name) | Required, must be a valid Lucide icon key |
| title | string | Required, non-empty |
| description | string | Required, non-empty |

### StatItem
| Field | Type | Validation |
|-------|------|------------|
| value | string | Required (e.g., "10K+", "99%") |
| label | string | Required, non-empty |

### HomepageContent
| Field | Type | Notes |
|-------|------|-------|
| navLinks | NavLink[] | Top-level nav items |
| heroHeadline | string | Main hero H1 |
| heroSubheadline | string | Hero body copy |
| heroCTAPrimary | string | Primary CTA label |
| heroCTASecondary | string | Secondary CTA label (optional) |
| features | FeatureCard[] | Min 3 items |
| stats | StatItem[] | Min 3 items |
| footerLinks | NavLink[] | Footer nav links |

## State Transitions

No dynamic state — all data is static. Mobile menu open/close state is local UI state in Navbar component.
