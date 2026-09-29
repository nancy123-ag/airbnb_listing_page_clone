# Submission Polish + Visual Parity Design

**Date:** 2026-09-28  
**Status:** Approved (Approach 1 — incremental polish → parity)  
**Reference:** https://airbnb-clone-umber-two.vercel.app

## Goal

Make the Airbnb listing clone submission-ready: clean project hygiene, then behavioral/layout parity for Listing Page, Photo Tour, and Lightbox (desktop only).

## Approach

1. **Phase 1 — Polish:** Remove dead code/deps, tighten README and AI configs, keep architecture deliverables.
2. **Phase 2 — Behavioral parity:** Fix open flows; rewrite Photo Tour closer to assignment screenshots; add basic focus management on Lightbox.
3. **Phase 3 — Content pass (user-assisted):** Side-by-side visual QA against live reference when Cloudflare allows; adjust `listingData.ts` assets/copy as needed.

## Constraints

- Desktop only; no mobile redesign.
- Keep code simple and modular; no backend.
- Do not lift-and-shift reference source code.
- No public GitHub push from this workstream.
- Do not commit unless user asks.

## Out of scope

- Real bookings, auth, payments
- Exact Unsplash→reference asset swap without user-provided images
- ESLint full reintroduction (remove broken lint script instead)
