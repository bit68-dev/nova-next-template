# Data Model — 008-oz-a-page

Static, page-local. No persistence.

```ts
// EdgeCard
type EdgeCard = {
  title: string;          // "Ritual Over Routine"
  body: string;           // 1–2 sentences
  bg: "blue" | "purple" | "green"; // maps to --color-oz-card-* tokens
  pinColor: string;       // hex used inside the pin circle
  imageSrc: string;       // /placeholder.svg?...
  imageAlt: string;
};

// AudienceItem
type AudienceItem = {
  title: string;          // "The Collaborative Catalyst"
  body: string;
  iconColor: "blue" | "yellow" | "purple"; // --color-oz-* / hex
};
```

## Source Content (from Figma)

**Identity section**
- Lead body: "Modern life often forces a choice between productivity and well-being, leaving us disconnected from our rituals and each other. OZ exists to bridge that gap. We provide a 'harmonic response'—a space where intentionality replaces inertia."
- Title: "The OZ Identity"
- Footer line: "— OZ is a living infrastructure designed to harmonize the rhythm of work, wellness, and human connection."

**Edge section**
- Heading: "The OZ Edge"
- Body: "We prioritize intentionality over utility, creating an integrated ecosystem where rituals replace routines and spaces serve your mindset."
- Cards:
  1. "Ritual Over Routine" — blue — "We replace the monotony of the workday with meaningful communal rituals—shared meals, evening talks, and intentional growth."
  2. "A Unified Ecosystem" — purple — "Through OZ Fit, Deli, and Knowledge, we support the whole human, ensuring your physical, nutritional, and intellectual needs are met in one flow."
  3. "Physical-Digital Synergy" — green — "Our platform isn't just a tool; it's a bridge that seamlessly connects our physical campus to your personal and professional journey."

**Audience section**
- Heading: "Who It's For?"
- Items:
  1. "The Collaborative Catalyst" — blue — "For those who thrive on the friction of ideas and find energy in diverse perspectives."
  2. "The Deep Seeker" — yellow — "For those who value the silence required for mastery and the focus needed to build something that lasts."
  3. "The Holistic Achiever" — purple — "For those who refuse to sacrifice health or learning in the pursuit of their professional goals."
- Image pills: "OZ COWorking park" (white bg, dark text), "Our Target Users" (yellow-green bg, dark text)
