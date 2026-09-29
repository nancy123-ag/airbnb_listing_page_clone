---
name: ui-precision-skill
description: Enforce pixel-perfect listing UI fidelity, overlay flows, keyboard a11y, and desktop-only scope for this Airbnb clone.
---

# UI Precision & Behavioral Parity Skill

## Required views
1. Listing page — match reference layout, spacing, typography, colours, hovers.
2. Photo Tour — open from Show all photos or any hero image; room thumbnails + room sections.
3. Lightbox — open from gallery photos; ← / → / Esc; focus trap and restore focus on close.

## Rules
1. Desktop only; do not spend time on mobile polish unless asked.
2. Keep data in `src/data/listingData.ts`; do not hardcode listing copy inside random components.
3. Prefer small presentational components; keep overlay state in `App.tsx`.
4. Use brand tokens: `#FF385C`, `#E61E4D`, `#222222`, `#717171`.
5. Never copy source code from the reference deployment; rebuild originally.
6. After UI changes, verify: hero → tour → lightbox → arrows → Esc → back to listing.
