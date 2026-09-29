# Code Quality Rules — Airbnb Listing Clone

1. **TypeScript:** Explicit props and data types; no `any` for listing models.
2. **Modules:** One clear job per component file; overlays live under `components/modals/`.
3. **State:** Booking dates, guests, wishlists, and modal visibility stay in `App.tsx` (or a single owner).
4. **Styling:** Tailwind + Airbnb brand tokens (`#FF385C`, `#E61E4D`, `#222222`, `#717171`).
5. **Simplicity:** Prefer readable functions over abstraction; no unused deps.
6. **A11y:** Interactive overlays need `role="dialog"`, keyboard paths, and sensible focus.
7. **Desktop scope:** Match the brief; skip mobile-first redesigns unless requested.
